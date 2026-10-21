/* Private, local-only IndexedDB. No article text is written to application source files. */
(() => {
  'use strict';
  let opened,chain=Promise.resolve();
  function db() {
    if(!opened)opened=new Promise((resolve,reject)=>{
      const request=indexedDB.open('wordorbit-nebula-private-v1',1);
      request.onupgradeneeded=()=>{
        const data=request.result;
        data.createObjectStore('articles',{keyPath:'id'});
        data.createObjectStore('summaries',{keyPath:'id'});
        const terms=data.createObjectStore('terms',{keyPath:'id'});
        terms.createIndex('article','articleId');terms.createIndex('word','word');
      };
      request.onsuccess=()=>{request.result.onversionchange=()=>{request.result.close();opened=null;};resolve(request.result);};
      request.onerror=()=>{opened=null;reject(request.error);};
      request.onblocked=()=>{opened=null;reject(Error('请关闭其他词轨窗口后重试'));};
    });
    return opened;
  }
  async function read(store,method,arg) {
    const database=await db();return new Promise((resolve,reject)=>{
      const tx=database.transaction(store,'readonly'),request=tx.objectStore(store)[method](arg);
      request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);
    });
  }
  function write(article,remove=false,index=true) {
    const snapshot=structuredClone(article);
    const job=chain.catch(()=>{}).then(async()=>{
      const database=await db();return new Promise((resolve,reject)=>{
        const tx=database.transaction(index||remove?['articles','summaries','terms']:['articles','summaries'],'readwrite');
        const articles=tx.objectStore('articles'),summaries=tx.objectStore('summaries');
        if(remove){articles.delete(snapshot.id);summaries.delete(snapshot.id);}
        else{articles.put(snapshot);summaries.put(NebulaCore.summary(snapshot));}
        if(index||remove){
        const terms=tx.objectStore('terms'),cursor=terms.index('article').openCursor(IDBKeyRange.only(snapshot.id));
        cursor.onsuccess=()=>{
          const item=cursor.result;
          if(item){item.delete();item.continue();return;}
          if(!remove)for(const word of Object.values(snapshot.vocab))terms.put({id:snapshot.id+':'+word.word,articleId:snapshot.id,word:word.word,title:snapshot.title});
        };}
        tx.oncomplete=()=>resolve(snapshot);tx.onabort=()=>reject(tx.error||Error('本机存储写入失败'));tx.onerror=()=>reject(tx.error);
      });
    });chain=job;return job;
  }
  async function references(word) {
    const database=await db();return new Promise((resolve,reject)=>{
      const request=database.transaction('terms','readonly').objectStore('terms').index('word').getAll(word);
      request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);
    });
  }
  window.NebulaStore={list:()=>read('summaries','getAll'),get:id=>read('articles','get',id),all:()=>read('articles','getAll'),save:(article,index=true)=>write(article,false,index),remove:article=>write(article,true),references,flush:()=>chain};
})();
