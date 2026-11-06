/* Re-review of five partial batch-02 entries, 2026-11-06.
 * Stable old sense IDs survive. New teaching examples are original WordOrbit text.
 * Complete means the stated learning scope; resolved specialist references remain visible. */
(function(scope){
  'use strict';
  function register(entries){
    const collins=w=>'https://www.collinsdictionary.com/dictionary/english/'+w;
    const mw=w=>'https://www.merriam-webster.com/dictionary/'+w;
    function more(word,rows){const e=entries[word];for(const [id,label,pos,en,zh,concept,construction,source]of rows)e.senses.push({id,label,pos,aliases:label.split('；'),concepts:[concept],construction:construction||null,source:source||collins(word),example:{en,zh,reviewed:true,origin:'original-wordorbit'}});}
    more('branch',[
      ['grow','长出枝条；分枝生长','v.','The young tree branches just above the protective fence.','这棵小树在防护围栏的正上方长出分枝。','plant-branch-growth'],
      ['program','程序执行的分支；分支跳转','n./v.','The program branches to an error handler when a file is missing.','文件缺失时，程序会跳转到错误处理分支。','conditional-program-branch',null,mw('branch')]
    ]);
    more('trunk',[
      ['anatomy','神经或血管的主干','n.','Several smaller branches extend from the main nerve trunk.','数条较小的分支从神经主干伸出。','anatomical-main-trunk'],
      ['duct','大型通风管道；主通道','n.','Fresh air enters the building through a wide ventilation trunk.','新鲜空气经一条宽大的通风主管道进入大楼。','main-ventilation-duct']
    ]);
    more('stem',[
      ['pipe','烟斗的细长柄管','n.','The restorer replaced the cracked stem of the wooden pipe.','修复师更换了木烟斗上开裂的柄管。','tobacco-pipe-tube'],
      ['bow','船首；船首柱','n.','Ice had damaged the timber at the stem of the fishing boat.','冰块损坏了渔船船首的木材。','vessel-bow'],
      ['stroke','字母的主笔画；音符的符干','n.','In this typeface, the vertical stem of the letter is unusually thick.','在这种字体中，该字母的竖向主笔画格外粗。','letter-note-stroke']
    ]);
    more('field',[
      ['mineral','矿田；油田；天然气田','n.','The survey identified a new gas field beneath the coastal plain.','勘测发现海岸平原下有一处新的天然气田。','mineral-deposit-area'],
      ['vision','视野；仪器可观察到的范围','n.','A branch briefly blocked the birdwatcher\'s field of vision.','一根树枝短暂挡住了观鸟者的视野。','visual-observation-area','field of vision / field of view'],
      ['battle','战场；作战地区','n.','Army supplies took two days to reach the medical teams in the field.','军方补给用了两天才送到作战地区的医疗队手中。','military-operational-area','in the field'],
      ['background','旗帜、图案等的底色；底面','n.','The flag has a white star on a dark blue field.','这面旗帜的深蓝色底面上有一颗白星。','design-background'],
      ['athletics','田赛的（跳跃、投掷类项目）','modifier','The stadium has separate areas for track and field events.','体育场为径赛和田赛项目设置了不同的区域。','athletics-field-events','field events']
    ]);
    more('range',[
      ['voice','音域；声域','n.','The song stays within a comfortable range for young singers.','这首歌的音域处于年轻歌手能轻松驾驭的范围内。','musical-pitch-range'],
      ['math','函数的值域','n.','The range of this function contains only non-negative numbers.','这个函数的值域只包含非负数。','function-output-set'],
      ['row','一排；一列相连的事物','n.','A range of low stone buildings borders the courtyard.','一排低矮的石砌建筑环绕着庭院。','row-of-structures'],
      ['extend','向某方向延伸；延展','v.','The cliffs range southwards along the coast for several kilometres.','悬崖沿海岸向南延伸了数千米。','extend-in-direction'],
      ['grazing-land','牧场；开阔的放牧地','n.','The cattle graze on the open range throughout summer.','牛群整个夏季都在开阔的放牧地上吃草。','open-grazing-land']
    ]);
    const distribution=entries.range.senses.find(s=>s.id==='land');distribution.label='动植物的分布区域';distribution.aliases=['分布区域'];
    entries.range.senses.find(s=>s.id==='roam').aliases=['漫游'];
    const references={
      branch:[
        {terms:['用枝状叶脉刺绣花纹装饰'],decision:'restricted-verified',reason:'Merriam-Webster 明列及物动词以枝条图案装饰，旧译并非一般的分枝；工艺性用法只留参考，不作为常用义项考点。',source:mw('branch')},
        {terms:['目录分支'],decision:'context-required',reason:'目录树的支系是结构分支的具体应用；程序分支另立考点，不把目录或文件本身当作 branch 的通用译法。',source:mw('branch')}
      ],
      trunk:[
        {terms:['主干'],decision:'restricted-verified',reason:'解剖学的神经、血管主干已新增 anatomy 义项。',source:collins('trunk')},
        {terms:['把...放入旅行箱内'],decision:'scope-excluded',reason:'重新核对 Collins 与 Merriam-Webster 均未列为当前学习用动词。本版不从旅行箱名词推导该动词，旧译保留追溯，不进入答案。',source:mw('trunk')},
        {terms:['箱形的'],decision:'scope-excluded',reason:'Collins 的 boxlike 出现在船舱结构的名词定义内；它不支持将 trunk 泛教为“箱形的”形容词。',source:collins('trunk')},
        {terms:['母线'],decision:'scope-excluded',reason:'所核条目支持主通路、干线，未把电气母线列作通用独立学习义；无电气原文语境时不与 busbar 混同。',source:mw('trunk')}
      ],
      stem:[
        {terms:['船首'],decision:'restricted-verified',reason:'已新增 bow 义项，指船首及船首柱。',source:collins('stem')},
        {terms:['血统'],decision:'restricted-verified',reason:'Collins 与 Merriam-Webster 列有家系主支，属于较少用家谱语境；保留已查明参考，不替代常用词 ancestry。',source:mw('stem')},
        {terms:['装柄于'],decision:'restricted-verified',reason:'词典支持给物体装茎柄、为人造花装茎的专门动作；不是给任意工具装把手的通用动词。',source:mw('stem')},
        {terms:['逆行'],decision:'restricted-verified',reason:'原义指顶着风、潮流前进；不是车辆违法逆向行驶。较少用航行义本版只留参考。',source:collins('stem')},
        {terms:['堵塞物'],decision:'restricted-verified',reason:'Merriam-Webster 的第二名词条目列 check、dam，即阻挡物或堤障；已查明词性而非从动词推测，罕见名词暂不作为常用考点。',source:mw('stem')}
      ],
      field:[
        {terms:['战场'],decision:'restricted-verified',reason:'已新增 battle；以 in the field 等军事语境区分田地与赛场。',source:collins('field')},
        {terms:['田赛的'],decision:'restricted-verified',reason:'仅在 field events 等体育搭配中使用；已新增独立 modifier 义项。',source:'https://www.collinsdictionary.com/dictionary/english/field-event'},
        {terms:['野生的'],decision:'context-required',reason:'Collins 的 beasts of the field 关联已标 obsolete 的乡野名词用法；field 不作为可自由替代 wild 的形容词。',source:collins('field')},
        {terms:['使...晒在场上'],decision:'scope-excluded',reason:'重新核对当前 Collins 动词组只有防守、派队及应对等义，未支持将晾晒作为通用学习义。旧工艺标签不进入本版声明学习范围或答案。',source:collins('field')}
      ],
      range:[
        {terms:['放牧'],decision:'restricted-verified',reason:'Collins 另列把牛赶到牧场的及物动词。它不是自由漫游的同义动作，较少用动词仅作参考；放牧地名词另立 grazing-land。',source:collins('range')},
        {terms:['排','行','行列'],decision:'restricted-verified',reason:'Collins 明列 rank、row、series，已新增 row 名词义。',source:collins('range')},
        {terms:['归类于'],decision:'restricted-verified',reason:'Collins 列 range with 的正式分类或站队用法；仅保留带搭配的参考，不教成不带语境的通用 classify。',source:collins('range')},
        {terms:['平行'],decision:'scope-excluded',reason:'排列成行不等于任意线条平行。所核条目未支持该无搭配通用译法，本版不把它作为正确答案。',source:collins('range')}
      ]
    };
    for(const word of Object.keys(references)){
      const e=entries[word];e.referenceOnly=references[word];e.reviewDate='2026-11-06';e.complete=true;e.reviewed=true;e.completionRevision=1;
      e.scope='常用学习义、常用搭配及明确列出的基础学科义；已查明但少用的家谱、工艺等义只作有来源参考；不宣称穷尽词典';
      e.sources=[...new Set([...e.sources,collins(word),...e.senses.map(s=>s.source),...e.referenceOnly.map(r=>r.source)])];
      delete e.pendingReview;
    }
    entries.field.senses.find(s=>s.id==='athletics').source='https://www.collinsdictionary.com/dictionary/english/field-event';
  }
  if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseCompletion02=register;
})(typeof window==='object'?window:globalThis);
