/* WordOrbit editorial glossary, 2026-10-22.
 * Scope: 102 valid spellings blocked by the old OCR filter, plus two British
 * spellings whose old meanings only referred to their American spelling.
 * Short Chinese study glosses are editorial summaries, cross-checked against the
 * linked dictionary entries and the bundled MIT ECDICT; no dictionary examples,
 * audio, page text or remote requests are included in the offline application.
 */
(function(root){
  'use strict';
  // word | part(s) of speech | British IPA | complete common study senses
  const rows=`
facilitate|v.|/fəˈsɪlɪteɪt/|使便利；促进；促成；帮助推进
jeopardise|v.|/ˈdʒepədaɪz/|危及；危害；使陷入危险
equal|adj. / n. / v.|/ˈiːkwəl/|相等的；平等的；同等的；能胜任的；同等的人或事物；对手；等于；比得上；导致
fertilise|v.|/ˈfɜːtɪlaɪz/|施肥；使肥沃；使受精；使受孕；使受粉
situate|v.|/ˈsɪtʃueɪt/|使位于；使坐落于；使处于某种情境
ripen|v.|/ˈraɪpən/|成熟；使成熟；发展到成熟阶段；时机成熟
wither|v.|/ˈwɪðə/|枯萎；使枯萎；萎缩；衰退；逐渐消失
enzyme|n.|/ˈenzaɪm/|酶
undermine|v.|/ˌʌndəˈmaɪn/|逐渐削弱；暗中破坏；损害；在下方挖掘
elephant|n.|/ˈelɪfənt/|象；大象
prey|n. / v.|/preɪ/|猎物；被捕食的动物；受害者；捕食；掠夺；折磨
flyby|n.|/ˈflaɪbaɪ/|航天器近距飞掠；近天体飞行；飞机编队检阅飞行
enable|v.|/ɪˈneɪbəl/|使能够；使成为可能；使实现；启用
inspire|v.|/ɪnˈspaɪə/|激励；鼓舞；启发；赋予灵感；激起；引起；吸气
dividend|n.|/ˈdɪvɪdend/|股息；红利；回报；收益；被除数
diagonal|adj. / n.|/daɪˈæɡənəl/|对角线的；斜线的；斜向的；对角线；斜线
sphere|n.|/sfɪə/|球；球体；球面；领域；范围；势力范围
acidification|n.|/əˌsɪdɪfɪˈkeɪʃən/|酸化；变酸；使呈酸性的过程
compulsory|adj.|/kəmˈpʌlsəri/|强制性的；必须做的；义务性的；必修的
consult|v.|/kənˈsʌlt/|咨询；请教；查阅；商议；协商；会诊
submit|v.|/səbˈmɪt/|提交；呈递；主张；建议；屈服；顺从；使接受
advanced|adj.|/ədˈvɑːnst/|先进的；高级的；高等的；处于后期阶段的；年事已高的
condense|v.|/kənˈdens/|浓缩；压缩；缩短；凝结；凝固；使凝结
hydraulic|adj.|/haɪˈdrɒlɪk/|液压的；水压的；水力的
transform|v.|/trænsˈfɔːm/|彻底改变；改观；改造；转换；使变形；使转化
adapt|v.|/əˈdæpt/|适应；使适应；调整；改造；改装；改编
alienate|v.|/ˈeɪliəneɪt/|使疏远；使不友好；离间；使感到格格不入；转让
version|n.|/ˈvɜːʃən/|版本；译本；说法；描述；改编形式
collect|v. / adj. / adv.|/kəˈlekt/|收集；收藏；聚集；募集；领取；接走；收取；恢复镇静；由收件人或受话人付费的；到付地
indoors|adv.|/ˌɪnˈdɔːz/|在室内；往室内
recycle|v.|/ˌriːˈsaɪkəl/|回收利用；再利用；使再循环；重新使用
lubricate|v.|/ˈluːbrɪkeɪt/|润滑；给…加润滑油；使运转顺畅
sweeten|v.|/ˈswiːtən/|使变甜；加糖；使更有吸引力；使更悦耳；使更高兴或友善
fix|v. / n.|/fɪks/|修理；固定；安装；安排；确定；使集中；凝视；准备食物；操纵；解决办法；困境；定位；一剂毒品
outward|adj. / adv.|/ˈaʊtwəd/|外表的；外在的；向外的；往外的；向外；朝外
assembly|n.|/əˈsembli/|集会；集合；与会者；议会；装配；组装；组件
submerge|v.|/səbˈmɜːdʒ/|淹没；浸没；使潜入水中；潜入水中；掩盖；湮没
aboard|adv. / prep.|/əˈbɔːd/|在船上；在飞机或车辆上；上船；登机；上车
due|adj. / n. / adv.|/djuː/|预期的；预定的；到期的；应付的；应得的；适当的；应有的；应得之物；应付款；会费；正向某方向
immigrate|v.|/ˈɪmɪɡreɪt/|移入；移民入境；移居外国定居
populate|v.|/ˈpɒpjəleɪt/|居住于；构成某地人口；使人口聚居；给计算机列表或数据库填入数据
outlook|n.|/ˈaʊtlʊk/|前景；展望；看法；观点；人生观；景色；风光
prospect|n. / v.|/ˈprɒspekt/|可能性；机会；前景；前途；景象；潜在客户；有望成功的人；勘探；探矿
enrich|v.|/ɪnˈrɪtʃ/|使丰富；充实；使富裕；使肥沃；使富含；浓缩提纯
expand|v.|/ɪkˈspænd/|扩大；扩展；扩张；膨胀；增加；展开；详述
instalment|n.|/ɪnˈstɔːlmənt/|分期付款的一期款；分期连载的一部分；分批推出的一集或一部
prompt|v. / adj. / n. / adv.|/prɒmpt/|促使；引起；激起；提示；提词；迅速的；及时的；敏捷的；提示；提词；提示符；准时地
payment|n.|/ˈpeɪmənt/|付款；支付；偿还；支付的款项；报偿；报答
pay|v. / n.|/peɪ/|支付；付报酬；偿还；付出代价；值得；带来好处；工资；薪酬
obligation|n.|/ˌɒblɪˈɡeɪʃən/|义务；责任；必须做的事；承诺；债务；欠下的人情
reject|v. / n.|/rɪˈdʒekt/|拒绝；拒收；否决；驳回；不录用；不相信；排斥移植器官；不合格品；被拒绝的人
reconcile|v.|/ˈrekənsaɪl/|调和；调解；使一致；使和解；使接受；使顺从；核对账目
own|det. / pron. / v.|/əʊn/|自己的；本人的；自己人；拥有；占有；承认
opponent|n.|/əˈpəʊnənt/|对手；敌手；反对者
frighten|v.|/ˈfraɪtən/|使害怕；使受惊；吓唬；吓走
rival|n. / v. / adj.|/ˈraɪvəl/|竞争对手；劲敌；与…竞争；匹敌；比得上；竞争的
humiliate|v.|/hjuːˈmɪlieɪt/|羞辱；使蒙羞；使丢脸；使惨败
promise|v. / n.|/ˈprɒmɪs/|承诺；答应；保证；预示；有希望；诺言；约定；成功的希望；潜力
herald|v. / n.|/ˈherəld/|预示；宣布；赞扬；预兆；先驱；传令官
couple|n. / v.|/ˈkʌpəl/|一对；一双；两三个；几个；夫妻；情侣；连接；结合；配对；交配
marry|v.|/ˈmæri/|结婚；娶；嫁；为…主持婚礼；使结合
accustom|v.|/əˈkʌstəm/|使习惯于；使适应；使熟悉
revive|v.|/rɪˈvaɪv/|苏醒；复苏；恢复；复兴；使振作；使重新流行；重新上演；重新唤起
amaze|v.|/əˈmeɪz/|使惊奇；使惊愕；使大为吃惊
astonish|v.|/əˈstɒnɪʃ/|使十分惊讶；使大为吃惊
annoy|v.|/əˈnɔɪ/|使恼怒；使烦恼；打扰；骚扰
bewilder|v.|/bɪˈwɪldə/|使迷惑；使糊涂；使不知所措；难住
astound|v.|/əˈstaʊnd/|使震惊；使惊骇；使大吃一惊
terrify|v.|/ˈterəfaɪ/|使恐惧；使极度害怕；恐吓
reassure|v.|/ˌriːəˈʃɔː/|使安心；安慰；使打消疑虑；再次保证
saturate|v. / n.|/ˈsætʃəreɪt/|浸透；使湿透；使充满；使饱和；大量投放；饱和脂肪酸
disable|v.|/dɪˈseɪbəl/|使伤残；使丧失能力；使失灵；使无法运作；禁用；关闭
paralyse|v.|/ˈpærəlaɪz/|使麻痹；使瘫痪；使无法正常运作；使丧失活动能力
transplant|v. / n.|/trænˈsplɑːnt/|移植；移栽；使迁移；使移居；移植手术；移植物；移植器官
refresh|v.|/rɪˈfreʃ/|使凉爽；使恢复精力；使振作；刷新；更新；唤起记忆；重温
refreshing|adj.|/rɪˈfreʃɪŋ/|凉爽的；提神的；消除疲劳的；令人耳目一新的；别具一格的
negligible|adj.|/ˈneɡlɪdʒəbəl/|微不足道的；可忽略的；不重要的
exhilarate|v.|/ɪɡˈzɪləreɪt/|使兴奋；使欢欣；使精神振奋
rejoice|v.|/rɪˈdʒɔɪs/|欣喜；欢庆；充满喜悦；使欢欣
satisfy|v.|/ˈsætɪsfaɪ/|满足；使满意；符合；达到要求；使确信；清偿
promising|adj.|/ˈprɒmɪsɪŋ/|有希望的；有前途的；有出息的；很可能成功的
grieve|v.|/ɡriːv/|悲伤；悲痛；哀悼；使伤心；使痛心
disappoint|v.|/ˌdɪsəˈpɔɪnt/|使失望；使沮丧；使希望落空
discourage|v.|/dɪˈskʌrɪdʒ/|使泄气；使失去信心；劝阻；阻止；使不愿做
unpleasant|adj.|/ʌnˈplezənt/|令人不快的；使人厌恶的；令人不舒服的；粗鲁的；不友好的
vex|v.|/veks/|使烦恼；使恼火；使困扰；给…惹麻烦
harass|v.|/ˈhærəs/|骚扰；不断烦扰；使困扰；侵扰
confuse|v.|/kənˈfjuːz/|使困惑；使糊涂；使混乱；混淆
embarrass|v.|/ɪmˈbærəs/|使尴尬；使窘迫；使为难；使陷入困境
preceding|adj.|/prɪˈsiːdɪŋ/|在前的；在先的；前面的；先前的
precede|v.|/prɪˈsiːd/|先于；在之前发生；走在前面；在前面加上
counterbalance|v. / n.|/ˈkaʊntəˌbæləns/|抵消；使平衡；弥补；抗衡因素；平衡力；配重物
conform|v.|/kənˈfɔːm/|遵从；顺从；符合；一致；顺应习俗；使一致
detach|v.|/dɪˈtætʃ/|拆下；卸下；使分离；使脱离；派遣
eco-friendly|adj.|/ˈiːkəʊˌfrendli/|环保的；不损害环境的；有助于保护生态的
expose|v.|/ɪkˈspəʊz/|暴露；露出；揭露；揭穿；使曝光；使接触；使面临
former|adj. / n.|/ˈfɔːmə/|以前的；先前的；前任的；前者的；前者；成形工具；模具
isolate|v. / n.|/ˈaɪsəleɪt/|隔离；孤立；分离；单独考虑；分离物；分离株
mesmerise|v.|/ˈmezməraɪz/|使入迷；迷住；吸引全部注意力；对…施催眠术
oversee|v.|/ˌəʊvəˈsiː/|监督；监管；监察；管理
ox|n.|/ɒks/|牛；公牛；阉牛
sideways|adv. / adj.|/ˈsaɪdweɪz/|向侧面；侧向地；侧身地；侧面的；间接的
hybridise|v.|/ˈhaɪbrɪdaɪz/|杂交；使杂交；混合形成；使融合
hybridisation|n.|/ˌhaɪbrɪdaɪˈzeɪʃən/|杂交；杂交过程；杂化
`.trim().split('\n');
  const aliases={jeopardise:'jeopardize',fertilise:'fertilize',mesmerise:'mesmerize',hybridise:'hybridize',hybridisation:'hybridization'};
  const entries=Object.create(null);
  for(const row of rows){
    const [word,pos,ipa,meaning]=row.split('|');
    if(!word||!pos||!ipa||!meaning||entries[word])throw new Error('Invalid reviewed dictionary row');
    const sourceUrl=word==='accustom'?'https://www.collinsdictionary.com/dictionary/english/accustom':
      `https://dictionary.cambridge.org/dictionary/english-chinese-simplified/${aliases[word]||word}`;
    entries[word]=Object.freeze({pos,ipa,meaning,reviewed:true,sourceUrl,reviewSource:'WordOrbit 2026-10-22 / ECDICT + dictionary cross-check'});
  }
  const glossary=Object.freeze({edition:'2026-10-22',count:rows.length,entries:Object.freeze(entries)});
  if(typeof module==='object'&&module.exports)module.exports=glossary;
  if(root){
    root.REVIEWED_DICTIONARY=glossary;
    root.EXTERNAL_VOCAB=Object.assign(root.EXTERNAL_VOCAB||{},entries);
  }
})(typeof window==='object'?window:null);
