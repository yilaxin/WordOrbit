/* Private life records: no dictionary, network, or global IELTS state dependencies. */
(function(scope){
  'use strict';
  const LIMIT=10000,MAX_BYTES=20*1024*1024;
  const looks=typeof module==='object'&&module.exports?require('./comets-appearance.js'):scope.CometLooks;
  function text(value,max,label,required=false){
    if(value!=null&&typeof value!=='string')throw Error(label+'必须是文字');
    const result=(value||'').trim();if(result.length>max)throw Error(label+'超过 '+max+' 字符');
    if(required&&!result)throw Error('请填写'+label);return result;
  }
  function localDate(date=new Date()){return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');}
  function validDate(value){if(typeof value!=='string'||!/^\d{4}-\d{2}-\d{2}$/.test(value))return false;const d=new Date(value+'T12:00:00');return !isNaN(d)&&localDate(d)===value&&value>='1900-01-01'&&value<='9999-12-31';}
  function clean(input){
    if(!input||typeof input!=='object'||Array.isArray(input))throw Error('无效的彗星记录');
    const id=text(input.id,80,'记录编号',true);if(!/^[a-zA-Z0-9_-]+$/.test(id))throw Error('记录编号格式不正确');
    if(!validDate(input.date))throw Error('请选择有效的记录日期');
    if(typeof input.time!=='string'||!/^([01]\d|2[0-3]):[0-5]\d$/.test(input.time))throw Error('请选择有效的时间');
    if(input.appearance!==undefined&&(typeof input.appearance!=='string'||!looks.catalog.some(look=>look.id===input.appearance)))throw Error('请选择有效的彗星外观');
    return {id,date:input.date,time:input.time,title:text(input.title,100,'生活片段标题',true),context:text(input.context,2000,'场景或回忆提示'),english:text(input.english,2000,'对应英语',true),meaning:text(input.meaning,2000,'中文释义'),tag:text(input.tag,40,'场景标签'),createdAt:text(input.createdAt,40,'创建时间'),updatedAt:text(input.updatedAt,40,'更新时间'),appearance:looks.resolve(input)};
  }
  function fingerprint(e){return JSON.stringify([e.date,e.time,e.title,e.context,e.english,e.meaning,e.tag]);}
  function parseBackup(data){if(data?.format!=='wordorbit-comets'||data.version!==1||!Array.isArray(data.entries)||data.entries.length>LIMIT)throw Error('请选择词轨彗星独立备份（最多 10,000 条）');const ids=new Set();return data.entries.map(value=>{const e=clean(value);if(ids.has(e.id))throw Error('备份包含重复记录编号，请检查文件');ids.add(e.id);return e;});}
  function merge(existing,incoming){const ids=new Set(existing.map(e=>e.id)),seen=new Set(existing.map(fingerprint)),added=[];for(const e of incoming){const key=fingerprint(e);if(ids.has(e.id)||seen.has(key))continue;ids.add(e.id);seen.add(key);added.push(e);}if(existing.length+added.length>LIMIT)throw Error('导入后超过 10,000 条上限');return added;}
  const api={LIMIT,MAX_BYTES,clean,localDate,validDate,parseBackup,merge,fingerprint};
  if(typeof module==='object'&&module.exports)module.exports=api;else scope.CometsCore=api;
})(typeof window==='object'?window:globalThis);
