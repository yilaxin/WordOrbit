/* Local-only personal vocabulary. Only lightweight aggregate counts leave this module. */
(() => {
  let opened,chain=Promise.resolve();
  function db(){
    if(!opened)opened=new Promise((resolve,reject)=>{
      const request=indexedDB.open('wordorbit-mywords-private-v1',1);
      request.onupgradeneeded=()=>{request.result.createObjectStore('entries',{keyPath:'id'});request.result.createObjectStore('meta',{keyPath:'id'});};
      request.onsuccess=()=>{request.result.onversionchange=()=>{request.result.close();opened=null;};resolve(request.result);};
      request.onerror=()=>{opened=null;reject(request.error);};request.onblocked=()=>{opened=null;reject(Error('请关闭其他词轨窗口后重试'));};
    });return opened;
  }
  async function read(store,method,arg){const database=await db();return new Promise((resolve,reject)=>{const request=database.transaction(store,'readonly').objectStore(store)[method](arg);request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);});}
  function commit({puts=[],removes=[],round=null,summary}){
    const snapshot=structuredClone({puts,removes,round,summary});
    const job=chain.catch(()=>{}).then(async()=>{const database=await db();return new Promise((resolve,reject)=>{
      const tx=database.transaction(['entries','meta'],'readwrite'),entries=tx.objectStore('entries');
      snapshot.puts.forEach(entry=>entries.put(entry));snapshot.removes.forEach(id=>entries.delete(id));
      tx.objectStore('meta').put({id:'main',round:snapshot.round,summary:snapshot.summary});
      tx.oncomplete=()=>resolve();tx.onabort=()=>reject(tx.error||Error('私人词库保存失败'));tx.onerror=()=>reject(tx.error);
    });});chain=job;return job;
  }
  window.MyWordsStore={commit,meta:()=>read('meta','get','main'),load:async()=>{await chain.catch(()=>{});const [entries,meta]=await Promise.all([read('entries','getAll'),read('meta','get','main')]);return {entries,round:meta?.round||null};},flush:()=>chain};
})();
