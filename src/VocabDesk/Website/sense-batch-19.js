/* Batch 19: reviewed public learning scope, original bilingual examples.
 * Source entries were read during review. No learner state is included. */
(function(scope){
 'use strict';
 function register(add){
  function entry(word,rows,refs){
   const e=add(word,rows,refs);e.reviewDate='2026-11-15';
   e.senses.forEach((s,i)=>s.source=rows[i][8]);
   e.sources=[...new Set([...rows.map(r=>r[8]),...refs.map(r=>r.source)])];
   return e;
  }
  entry("gust",[
   ["sense-1","一阵强风","n.",["一阵强风"],["gust-1","gale-1","gale-2"],"A sudden gust blew the papers off the table.","一阵突如其来的强风把桌上的纸吹走了。",null,"https://www.merriam-webster.com/dictionary/gust"]
  ],[{"terms":["突然一阵","趣味","爱好"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/gust","reason":"本批 gust 按所列词性与构式训练：一阵强风（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("breeze",[
   ["sense-1","微风","n.",["微风"],["breeze-1"],"A cool breeze came through the open window.","凉爽的微风从敞开的窗户吹进来。",null,"https://www.merriam-webster.com/dictionary/breeze"],
   ["sense-2","轻而易举的事","n.",["轻而易举的事"],["breeze-2"],"After weeks of practice, the final test was a breeze.","练习数周后，最后的测试变得轻而易举。",null,"https://www.merriam-webster.com/dictionary/breeze"]
  ],[{"terms":["煤屑","吹微风","逃走"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/breeze","reason":"本批 breeze 按所列词性与构式训练：微风（n.）、轻而易举的事（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("magma",[
   ["sense-1","岩浆","n.",["岩浆"],["magma-1"],"The diagram shows magma rising beneath the volcano.","图示展示了火山下方上升的岩浆。",null,"https://www.merriam-webster.com/dictionary/magma"]
  ],[{"terms":["糊剂","乳浆剂","晶浆"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/magma","reason":"本批 magma 按所列词性与构式训练：岩浆（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("tsunami",[
   ["sense-1","海啸","n.",["海啸"],["tsunami-1"],"The tsunami warning sent people to higher ground.","海啸警报促使人们转移到高地。",null,"https://www.merriam-webster.com/dictionary/tsunami"]
  ],[]);
  entry("thermodynamic",[
   ["sense-1","热力学的","adj.",["热力学的"],["thermodynamic-1"],"The experiment measures the system's thermodynamic properties.","实验测量系统的热力学性质。",null,"https://www.merriam-webster.com/dictionary/thermodynamic"]
  ],[{"terms":["使用热动力的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/thermodynamic","reason":"本批 thermodynamic 按所列词性与构式训练：热力学的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("drought",[
   ["sense-1","干旱","n.",["干旱"],["drought-1"],"The drought reduced the flow of the river.","干旱使河流流量减少。",null,"https://www.merriam-webster.com/dictionary/drought"],
   ["sense-2","长期短缺","n.",["长期短缺"],["drought-2"],"The club finally ended its long drought of victories.","俱乐部终于结束了长期无胜绩的局面。",null,"https://www.merriam-webster.com/dictionary/drought"]
  ],[{"terms":["缺乏"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/drought","reason":"本批 drought 按所列词性与构式训练：干旱（n.）、长期短缺（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("flooding",[
   ["sense-1","洪水泛滥；水淹","n.",["洪水泛滥","水淹"],["flooding-1"],"Heavy rain caused flooding in the lower streets.","大雨导致低处街道被淹。",null,"https://www.merriam-webster.com/dictionary/flooding"]
  ],[{"terms":["充溢","泛滥","血崩","满屏幕","扩散式路由选择"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/flooding","reason":"本批 flooding 按所列词性与构式训练：洪水泛滥；水淹（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("smog",[
   ["sense-1","烟雾；烟霾","n.",["烟雾","烟霾"],["smog-1"],"Smog obscured the hills beyond the city.","烟霾遮住了城外的山丘。",null,"https://www.merriam-webster.com/dictionary/smog"]
  ],[]);
  entry("torrent",[
   ["sense-1","急流；湍流","n.",["急流","湍流"],["torrent-1"],"The stream became a torrent after the storm.","暴风雨后，小溪变成了急流。",null,"https://www.merriam-webster.com/dictionary/torrent"],
   ["sense-2","大量涌现；倾泻","n.",["大量涌现","倾泻"],["torrent-2"],"The announcement triggered a torrent of questions.","这项公告引发了接连不断的问题。",null,"https://www.merriam-webster.com/dictionary/torrent"]
  ],[{"terms":["奔流","倾盆大雨","倾注","迸发"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/torrent","reason":"本批 torrent 按所列词性与构式训练：急流；湍流（n.）、大量涌现；倾泻（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fume",[
   ["sense-1","刺激性烟气（常用复数）","n.",["刺激性烟气（常用复数）"],["fume-1","vapour-gas"],"The workers avoided breathing the fumes from the paint.","工人避免吸入油漆散发的刺激性气体。",null,"https://www.merriam-webster.com/dictionary/fume"],
   ["sense-2","发怒；冒烟","v.",["发怒","冒烟"],["fume-2","vapour-gas"],"He fumed at the unnecessary delay.","他因不必要的延误而生气。",null,"https://www.merriam-webster.com/dictionary/fume"]
  ],[{"terms":["臭气","烟","激怒","熏"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fume","reason":"本批 fume 按所列词性与构式训练：刺激性烟气（常用复数）（n.）、发怒；冒烟（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("earthquake",[
   ["sense-1","地震","n.",["地震"],["earthquake-1"],"The earthquake damaged several older buildings.","地震损坏了几座老建筑。",null,"https://www.merriam-webster.com/dictionary/earthquake"]
  ],[]);
  entry("gene",[
   ["sense-1","基因","n.",["基因"],["gene-1"],"The study examines a gene involved in plant growth.","研究考察了一个参与植物生长的基因。",null,"https://www.merriam-webster.com/dictionary/gene"]
  ],[{"terms":["基因(遗传因子)"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/gene","reason":"本批 gene 按所列词性与构式训练：基因（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mutation",[
   ["sense-1","突变；重大变异","n.",["突变","重大变异"],["mutation-1"],"The mutation changed the colour of the flower.","突变改变了花的颜色。",null,"https://www.merriam-webster.com/dictionary/mutation"]
  ],[{"terms":["变化","元音变化"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mutation","reason":"本批 mutation 按所列词性与构式训练：突变；重大变异（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("variation",[
   ["sense-1","变化；差异","n.",["变化","差异"],["variation-1"],"There is considerable variation in leaf shape.","叶形存在很大差异。",null,"https://www.merriam-webster.com/dictionary/variation"],
   ["sense-2","变体；改编形式","n.",["变体","改编形式"],["variation-2"],"The chef prepared a variation on a traditional recipe.","厨师对传统食谱作了一种改编。",null,"https://www.merriam-webster.com/dictionary/variation"],
   ["sense-3","变奏","n.",["变奏"],["variation-3"],"The pianist played a variation on the opening theme.","钢琴家演奏了开头主题的一段变奏。",null,"https://www.merriam-webster.com/dictionary/variation"]
  ],[{"terms":["变更","变种","变异","变易","变度"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/variation","reason":"本批 variation 按所列词性与构式训练：变化；差异（n.）、变体；改编形式（n.）、变奏（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("reproduce",[
   ["sense-1","繁殖","v.",["繁殖"],["reproduce-1","clone-1","clone-2"],"The insects reproduce rapidly in warm weather.","这些昆虫在温暖天气中迅速繁殖。",null,"https://www.merriam-webster.com/dictionary/reproduce"],
   ["sense-2","复制；再现","v.",["复制","再现"],["reproduce-2","clone-1","clone-2"],"The printer reproduces fine details clearly.","打印机能清晰再现细节。",null,"https://www.merriam-webster.com/dictionary/reproduce"]
  ],[{"terms":["再生","生殖"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reproduce","reason":"本批 reproduce 按所列词性与构式训练：繁殖（v.）、复制；再现（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("rake",[
   ["sense-1","耙子","n.",["耙子"],["rake-1"],"He used a rake to gather the fallen leaves.","他用耙子收拢落叶。",null,"https://www.merriam-webster.com/dictionary/rake"],
   ["sense-2","用耙子耙集或平整","v.",["用耙子耙集或平整"],["rake-2"],"They raked the soil before sowing seeds.","播种前他们耙松了土壤。",null,"https://www.merriam-webster.com/dictionary/rake"]
  ],[{"terms":["钱耙","斜度","浪子","搜索","掠过","(用耙子)耙","(使)倾斜"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/rake","reason":"本批 rake 按所列词性与构式训练：耙子（n.）、用耙子耙集或平整（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("pluck",[
   ["sense-1","拔取；采摘","v.",["拔取","采摘"],["pluck-1"],"She plucked a ripe apple from the branch.","她从枝头摘下一个熟苹果。",null,"https://www.merriam-webster.com/dictionary/pluck"],
   ["sense-2","拨动琴弦","v.",["拨动琴弦"],["pluck-2"],"He plucked the strings gently.","他轻轻拨动琴弦。",null,"https://www.merriam-webster.com/dictionary/pluck"],
   ["sense-3","勇气；胆量","n.",["勇气","胆量"],["pluck-3"],"It took pluck to speak against the proposal.","反对这项提案需要勇气。",null,"https://www.merriam-webster.com/dictionary/pluck"]
  ],[{"terms":["猛拉","动物内脏","摘","拔","拉","扯","采","拽"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pluck","reason":"本批 pluck 按所列词性与构式训练：拔取；采摘（v.）、拨动琴弦（v.）、勇气；胆量（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bundle",[
   ["sense-1","捆；包；一组","n.",["捆","包","一组"],["bundle-1","package-parcel","package-bundle","package-wrap"],"A bundle of letters lay on the desk.","一捆信放在书桌上。",null,"https://www.merriam-webster.com/dictionary/bundle"],
   ["sense-2","捆扎；把……匆忙推往","v.",["捆扎","把……匆忙推往"],["bundle-2","package-parcel","package-bundle","package-wrap"],"They bundled the blankets into a large bag.","他们把毯子匆匆塞进一个大袋子。",null,"https://www.merriam-webster.com/dictionary/bundle"],
   ["sense-3","大笔钱（非正式）","n.",["大笔钱（非正式）"],["bundle-3","package-parcel","package-bundle","package-wrap"],"The rare book cost a bundle.","这本稀有书花了一大笔钱。",null,"https://www.merriam-webster.com/dictionary/bundle"]
  ],[{"terms":["束","包扎","胡乱塞进","匆忙离开"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bundle","reason":"本批 bundle 按所列词性与构式训练：捆；包；一组（n.）、捆扎；把……匆忙推往（v.）、大笔钱（非正式）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bough",[
   ["sense-1","粗大的树枝","n.",["粗大的树枝"],["bough-1","tree-branch","local-office","subdivision","branch-route","divide-into-branches","business-expansion","plant-branch-growth","conditional-program-branch"],"Snow weighed down the lower boughs.","积雪压低了下面的粗树枝。",null,"https://www.merriam-webster.com/dictionary/bough"]
  ],[{"terms":["大树枝"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bough","reason":"本批 bough 按所列词性与构式训练：粗大的树枝（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("coordinate",[
   ["sense-1","协调；使配合","v.",["协调","使配合"],["coordinate-1"],"The office coordinates deliveries to remote villages.","办公室协调向偏远村庄的送货工作。",null,"https://www.merriam-webster.com/dictionary/coordinate"]
  ],[{"terms":["同等的人(或物)","坐标","同等的","并列的","(使)协调"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/coordinate","reason":"当前 /kəʊˈɔːdɪneɪt/ 采用协调动词；坐标和同等的等名词形容词常读 /-nət/，本批保留参考。 本批 coordinate 按所列词性与构式训练：协调；使配合（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("efficient",[
   ["sense-1","高效的；效率高的","adj.",["高效的","效率高的"],["efficient-1"],"The new pump is more efficient than the old model.","新水泵比旧型号更高效。",null,"https://www.merriam-webster.com/dictionary/efficient"]
  ],[{"terms":["有效率的","能干的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/efficient","reason":"本批 efficient 按所列词性与构式训练：高效的；效率高的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("drop",[
   ["sense-1","滴；少量液体","n.",["滴","少量液体"],["drop-1","decrease-quantity","decrease-amount"],"A drop of water fell from the leaf.","一滴水从叶子上落下。",null,"https://www.merriam-webster.com/dictionary/drop"],
   ["sense-2","下降；落差","n.",["下降","落差"],["drop-2","decrease-quantity","decrease-amount"],"The figures show a drop in energy use.","数字显示能源使用量下降了。",null,"https://www.merriam-webster.com/dictionary/drop"],
   ["sense-3","落下；使掉落","v.",["落下","使掉落"],["drop-3","decrease-quantity","decrease-amount"],"She dropped the keys into her bag.","她把钥匙放进包里。",null,"https://www.merriam-webster.com/dictionary/drop"],
   ["sense-4","降低；减少","v.",["降低","减少"],["drop-4","decrease-quantity","decrease-amount"],"Temperatures dropped sharply overnight.","气温在夜间骤降。",null,"https://www.merriam-webster.com/dictionary/drop"],
   ["sense-5","放弃；停止","v.",["放弃","停止"],["drop-5","decrease-quantity","decrease-amount"],"The committee dropped the proposal after the review.","审查后委员会放弃了提案。",null,"https://www.merriam-webster.com/dictionary/drop"],
   ["sense-6","顺路送到","v.",["顺路送到"],["drop-6","decrease-quantity","decrease-amount"],"Could you drop me at the station?","你能顺路把我送到车站吗？",null,"https://www.merriam-webster.com/dictionary/drop"],
   ["sense-7","顺便拜访","v.",["顺便拜访"],["drop-7","decrease-quantity","decrease-amount"],"Please drop by when you are in the area.","你在附近时请顺便来坐坐。","drop by","https://www.merriam-webster.com/dictionary/drop"]
  ],[{"terms":["微量","空投","放下","掉下","使滴下","丢失","遗漏","投入","投入点","接入点","分接点"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/drop","reason":"本批 drop 按所列词性与构式训练：滴；少量液体（n.）、下降；落差（n.）、落下；使掉落（v.）、降低；减少（v.）、放弃；停止（v.）、顺路送到（v.）、顺便拜访（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("maximal",[
   ["sense-1","最大的；达到上限的","adj.",["最大的","达到上限的"],["maximal-1","upper-allowed-limit"],"The test measured maximal muscle force.","测试测量了肌肉的最大力量。",null,"https://www.merriam-webster.com/dictionary/maximal"]
  ],[{"terms":["最高的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/maximal","reason":"本批 maximal 按所列词性与构式训练：最大的；达到上限的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("seasonal",[
   ["sense-1","季节性的","adj.",["季节性的"],["seasonal-1"],"The farm hires seasonal workers during the harvest.","农场在收获季雇用季节工。",null,"https://www.merriam-webster.com/dictionary/seasonal"]
  ],[{"terms":["季节的","依照季节的","周期性的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/seasonal","reason":"本批 seasonal 按所列词性与构式训练：季节性的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("interbreed",[
   ["sense-1","杂交；使异种交配","v.",["杂交","使异种交配"],["interbreed-1"],"The two varieties can interbreed under controlled conditions.","这两个品种能在受控条件下杂交。",null,"https://www.merriam-webster.com/dictionary/interbreed"]
  ],[{"terms":["(使)异种交配","(使)混种","(使)杂种繁殖"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/interbreed","reason":"本批 interbreed 按所列词性与构式训练：杂交；使异种交配（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("zoology",[
   ["sense-1","动物学","n.",["动物学"],["zoology-1"],"She teaches zoology at the college.","她在学院教授动物学。",null,"https://www.merriam-webster.com/dictionary/zoology"]
  ],[{"terms":["动物区系"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/zoology","reason":"本批 zoology 按所列词性与构式训练：动物学（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("wildlife",[
   ["sense-1","野生动植物；野生动物","n.",["野生动植物","野生动物"],["wildlife-1"],"The wetland supports abundant wildlife.","湿地养育着丰富的野生生物。",null,"https://www.merriam-webster.com/dictionary/wildlife"]
  ],[]);
  entry("cruel",[
   ["sense-1","残忍的","adj.",["残忍的"],["cruel-1"],"The law prohibits cruel treatment of animals.","法律禁止残忍对待动物。",null,"https://www.merriam-webster.com/dictionary/cruel"],
   ["sense-2","使人痛苦的；严酷的","adj.",["使人痛苦的","严酷的"],["cruel-2"],"The sudden loss was a cruel blow to the family.","突如其来的损失给这个家庭以沉重打击。",null,"https://www.merriam-webster.com/dictionary/cruel"]
  ],[{"terms":["残酷的","令人极痛苦的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cruel","reason":"本批 cruel 按所列词性与构式训练：残忍的（adj.）、使人痛苦的；严酷的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("originate",[
   ["sense-1","起源；发起","v.",["起源","发起"],["originate-1","19-related-derive-originate"],"The tradition originated in a coastal village.","这个传统起源于一个海滨村庄。",null,"https://www.merriam-webster.com/dictionary/originate"]
  ],[{"terms":["创始","发明","发源","发生","起航","发自"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/originate","reason":"本批 originate 按所列词性与构式训练：起源；发起（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("flock",[
   ["sense-1","鸟群；畜群","n.",["鸟群","畜群"],["flock-1","19-related-flock-swarm","group-of-herd-animals","undifferentiated-crowd","move-group-together"],"A flock of sheep crossed the road.","一群羊穿过了道路。",null,"https://www.merriam-webster.com/dictionary/flock"],
   ["sense-2","成群聚集","v.",["成群聚集"],["flock-2","19-related-flock-swarm","group-of-herd-animals","undifferentiated-crowd","move-group-together"],"Visitors flocked to the newly opened museum.","游客成群涌向新开的博物馆。",null,"https://www.merriam-webster.com/dictionary/flock"]
  ],[{"terms":["兽群","一群人","大量","棉束","成群而行","聚集","用棉束填满"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/flock","reason":"本批 flock 按所列词性与构式训练：鸟群；畜群（n.）、成群聚集（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("derive",[
   ["sense-1","获得；源自","v.",["获得","源自"],["derive-1","19-related-derive-originate","obtain-get","get-acquire","obtain-prevail","reason-from-evidence"],"The village derives its income from tourism.","村庄的收入来自旅游业。",null,"https://www.merriam-webster.com/dictionary/derive"],
   ["sense-2","推导出","v.",["推导出"],["derive-2","19-related-derive-originate","obtain-get","get-acquire","obtain-prevail","reason-from-evidence"],"The students derived the formula from basic principles.","学生们从基本原理推导出了公式。",null,"https://www.merriam-webster.com/dictionary/derive"]
  ],[{"terms":["得自","起源"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/derive","reason":"本批 derive 按所列词性与构式训练：获得；源自（v.）、推导出（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("swarm",[
   ["sense-1","蜂群；大群","n.",["蜂群","大群"],["swarm-1","19-related-flock-swarm"],"A swarm of bees gathered on the branch.","一群蜜蜂聚集在树枝上。",null,"https://www.merriam-webster.com/dictionary/swarm"],
   ["sense-2","成群移动；挤满","v.",["成群移动","挤满"],["swarm-2","19-related-flock-swarm"],"People swarmed around the ticket office.","人们拥挤在售票处周围。",null,"https://www.merriam-webster.com/dictionary/swarm"]
  ],[{"terms":["群","分蜂群","分群","群集","聚集一块","云集","攀","爬"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/swarm","reason":"本批 swarm 按所列词性与构式训练：蜂群；大群（n.）、成群移动；挤满（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("dynamics",[
   ["sense-1","动力学","n.",["动力学"],["dynamics-1"],"The course introduces the dynamics of moving bodies.","课程介绍运动物体的动力学。",null,"https://www.merriam-webster.com/dictionary/dynamics"],
   ["sense-2","变化机制；相互作用","n.",["变化机制","相互作用"],["dynamics-2"],"The researcher studied the dynamics of group decision-making.","研究者研究了群体决策的相互作用机制。",null,"https://www.merriam-webster.com/dictionary/dynamics"]
  ],[]);
  entry("dynamic",[
   ["sense-1","充满活力的；不断变化的","adj.",["充满活力的","不断变化的"],["dynamic-1","energetic-strong"],"The city has a dynamic arts community.","这座城市有一个充满活力的艺术社群。",null,"https://www.merriam-webster.com/dictionary/dynamic"],
   ["sense-2","动力学的","adj.",["动力学的"],["dynamic-2","energetic-strong"],"The engineer calculated the bridge's dynamic loads.","工程师计算了桥梁的动态载荷。",null,"https://www.merriam-webster.com/dictionary/dynamic"]
  ],[{"terms":["动态的","有活力的","有力的","动力的","动力","动态"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dynamic","reason":"本批 dynamic 按所列词性与构式训练：充满活力的；不断变化的（adj.）、动力学的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("pleasure",[
   ["sense-1","愉快；乐事","n.",["愉快","乐事"],["pleasure-1","joy-feeling","joy-happiness","joy-source","joy-success"],"Gardening gives her great pleasure.","园艺给她带来极大的乐趣。",null,"https://www.merriam-webster.com/dictionary/pleasure"]
  ],[{"terms":["快乐","令人高兴的事","娱乐","希望","(使)高兴"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pleasure","reason":"本批 pleasure 按所列词性与构式训练：愉快；乐事（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("comet",[
   ["sense-1","彗星","n.",["彗星"],["comet-1"],"The comet became visible shortly after sunset.","日落后不久，这颗彗星变得可见。",null,"https://www.merriam-webster.com/dictionary/comet"]
  ],[]);
  entry("crater",[
   ["sense-1","撞击坑","n.",["撞击坑"],["crater-1","hole-in-ground","mine-shaft","fruit-stone","set-against"],"The rover photographed a crater on the moon.","探测车拍摄了月球上的一个撞击坑。",null,"https://www.merriam-webster.com/dictionary/crater"],
   ["sense-2","火山口","n.",["火山口"],["crater-2","hole-in-ground","mine-shaft","fruit-stone","set-against"],"Smoke rose from the volcano's crater.","烟从火山口升起。",null,"https://www.merriam-webster.com/dictionary/crater"]
  ],[{"terms":["环行山","弹坑","焊口","火山石","弧坑","焰口"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/crater","reason":"本批 crater 按所列词性与构式训练：撞击坑（n.）、火山口（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("acquisition",[
   ["sense-1","获得；习得","n.",["获得","习得"],["acquisition-1","obtain-get","get-acquire","obtain-prevail"],"Language acquisition begins early in life.","语言习得在人生早期就开始了。",null,"https://www.merriam-webster.com/dictionary/acquisition"],
   ["sense-2","新获得之物","n.",["新获得之物"],["acquisition-2","obtain-get","get-acquire","obtain-prevail"],"The museum displayed its latest acquisition.","博物馆展出了新近购得的藏品。",null,"https://www.merriam-webster.com/dictionary/acquisition"]
  ],[{"terms":["获得物","收购","招揽","取得"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/acquisition","reason":"本批 acquisition 按所列词性与构式训练：获得；习得（n.）、新获得之物（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("institution",[
   ["sense-1","机构；公共组织","n.",["机构","公共组织"],["institution-1"],"The institution funds research into clean energy.","这个机构资助清洁能源研究。",null,"https://www.merriam-webster.com/dictionary/institution"],
   ["sense-2","社会制度；惯例","n.",["社会制度","惯例"],["institution-2"],"The lecture explored marriage as a social institution.","讲座把婚姻作为一种社会制度进行探讨。",null,"https://www.merriam-webster.com/dictionary/institution"]
  ],[{"terms":["制度","机关","设施"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/institution","reason":"本批 institution 按所列词性与构式训练：机构；公共组织（n.）、社会制度；惯例（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("affair",[
   ["sense-1","事情；事件","n.",["事情","事件"],["affair-1","topic-problem","underlying-problem","physical-substance","written-content","importance"],"The festival was a well-organised affair.","这场节日活动组织得很好。",null,"https://www.merriam-webster.com/dictionary/affair"],
   ["sense-2","婚外情；短暂恋情","n.",["婚外情","短暂恋情"],["affair-2","topic-problem","underlying-problem","physical-substance","written-content","importance"],"The novel describes the consequences of a secret affair.","小说描述了一段秘密恋情的后果。",null,"https://www.merriam-webster.com/dictionary/affair"]
  ],[{"terms":["事务","恋爱事件"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/affair","reason":"本批 affair 按所列词性与构式训练：事情；事件（n.）、婚外情；短暂恋情（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("controversial",[
   ["sense-1","有争议的","adj.",["有争议的"],["controversial-1"],"The controversial plan divided local opinion.","这项有争议的计划使当地意见分裂。",null,"https://www.merriam-webster.com/dictionary/controversial"]
  ],[{"terms":["争论的","论争的","被议论的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/controversial","reason":"本批 controversial 按所列词性与构式训练：有争议的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("recruit",[
   ["sense-1","招募；聘用","v.",["招募","聘用"],["recruit-1","hire-rent-item","hire-employ","hire-payment","hire-out"],"The centre recruited volunteers for the survey.","中心为调查招募志愿者。",null,"https://www.merriam-webster.com/dictionary/recruit"],
   ["sense-2","新成员；新兵","n.",["新成员","新兵"],["recruit-2","hire-rent-item","hire-employ","hire-payment","hire-out"],"Each recruit received basic training.","每位新成员都接受了基础训练。",null,"https://www.merriam-webster.com/dictionary/recruit"]
  ],[{"terms":["新手","新会员","补给品","恢复","补充","充实","征募","征募新兵","复原","得到补充"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/recruit","reason":"本批 recruit 按所列词性与构式训练：招募；聘用（v.）、新成员；新兵（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("puzzle",[
   ["sense-1","谜题；难解的问题","n.",["谜题","难解的问题"],["puzzle-1","puzzling-question","coarse-sieve","sift-through-sieve","perforate-with-holes","pervade-with-defects","confusion-bewilder","confusion-mix-up","confusion-disorder"],"The missing page remained a puzzle.","缺失的那一页仍是个谜。",null,"https://www.merriam-webster.com/dictionary/puzzle"],
   ["sense-2","使困惑","v.",["使困惑"],["puzzle-2","puzzling-question","coarse-sieve","sift-through-sieve","perforate-with-holes","pervade-with-defects","confusion-bewilder","confusion-mix-up","confusion-disorder"],"The unusual result puzzled the researchers.","异常结果使研究人员困惑。",null,"https://www.merriam-webster.com/dictionary/puzzle"]
  ],[{"terms":["难题","迷惑","使为难","苦思"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/puzzle","reason":"本批 puzzle 按所列词性与构式训练：谜题；难解的问题（n.）、使困惑（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("obscure",[
   ["sense-1","鲜为人知的；难懂的","adj.",["鲜为人知的","难懂的"],["obscure-1","vague-unclear","vague-uncertain","hide-from-view","hide-information"],"The essay discusses an obscure medieval text.","文章讨论了一部鲜为人知的中世纪文献。",null,"https://www.merriam-webster.com/dictionary/obscure"],
   ["sense-2","遮蔽；使难以理解","v.",["遮蔽","使难以理解"],["obscure-2","vague-unclear","vague-uncertain","hide-from-view","hide-information"],"Clouds obscured the mountain peak.","云层遮住了山峰。",null,"https://www.merriam-webster.com/dictionary/obscure"]
  ],[{"terms":["模糊的","昏暗的","难解的","晦涩的","偏僻的","微贱的","无名的","使变暗","隐藏","使变模糊","使难解"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/obscure","reason":"本批 obscure 按所列词性与构式训练：鲜为人知的；难懂的（adj.）、遮蔽；使难以理解（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("problem",[
   ["sense-1","问题；难题","n.",["问题","难题"],["problem-1","topic-problem","periodical-edition","official-issuance","publish-official","official-supply","emerge-from"],"The leak created a serious problem.","漏水造成了一个严重问题。",null,"https://www.merriam-webster.com/dictionary/problem"]
  ],[{"terms":["成问题的","难处理的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/problem","reason":"本批 problem 按所列词性与构式训练：问题；难题（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("stimulate",[
   ["sense-1","刺激；促进","v.",["刺激","促进"],["stimulate-1","encourage-inspire","encourage-promote"],"The grant will stimulate research into new materials.","这笔资助将促进新材料研究。",null,"https://www.merriam-webster.com/dictionary/stimulate"]
  ],[{"terms":["激励","鼓舞","起刺激作用"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/stimulate","reason":"本批 stimulate 按所列词性与构式训练：刺激；促进（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("enhance",[
   ["sense-1","提高；增强","v.",["提高","增强"],["enhance-1","improve-quality","improve-over-time"],"The lighting enhances the texture of the stone.","灯光增强了石材的质感。",null,"https://www.merriam-webster.com/dictionary/enhance"]
  ],[{"terms":["加强","增加"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/enhance","reason":"本批 enhance 按所列词性与构式训练：提高；增强（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("innovate",[
   ["sense-1","创新；引入新事物","v.",["创新","引入新事物"],["innovate-1","create-new-design","fabricate-untrue-account"],"The company continues to innovate in battery design.","公司继续在电池设计方面创新。",null,"https://www.merriam-webster.com/dictionary/innovate"]
  ],[{"terms":["改革"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/innovate","reason":"本批 innovate 按所列词性与构式训练：创新；引入新事物（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("technological",[
   ["sense-1","技术的；科技的","adj.",["技术的","科技的"],["technological-1","practical-technological","specialized-subject-knowledge","formal-rule-based","execution-skill"],"The change followed a major technological advance.","这一变化发生在重大技术进步之后。",null,"https://www.merriam-webster.com/dictionary/technological"]
  ],[{"terms":["工艺的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/technological","reason":"本批 technological 按所列词性与构式训练：技术的；科技的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("engineering",[
   ["sense-1","工程；工程学","n.",["工程","工程学"],["engineering-1"],"The project combines engineering with environmental science.","项目把工程学与环境科学结合起来。",null,"https://www.merriam-webster.com/dictionary/engineering"]
  ],[{"terms":["操纵","机器","机器学"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/engineering","reason":"本批 engineering 按所列词性与构式训练：工程；工程学（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("concentrate",[
   ["sense-1","集中注意；使集中","v.",["集中注意","使集中"],["concentrate-1","19-related-concentrate-focus-concentration"],"She concentrated on the unfamiliar instructions.","她专注于不熟悉的说明。","concentrate on","https://www.merriam-webster.com/dictionary/concentrate"],
   ["sense-2","浓缩","v.",["浓缩"],["concentrate-2","19-related-concentrate-focus-concentration"],"The process concentrates the fruit juice.","这个过程使果汁浓缩。",null,"https://www.merriam-webster.com/dictionary/concentrate"],
   ["sense-3","浓缩物","n.",["浓缩物"],["concentrate-3","19-related-concentrate-focus-concentration"],"Add water to the orange concentrate.","往浓缩橙汁中加水。",null,"https://www.merriam-webster.com/dictionary/concentrate"]
  ],[{"terms":["精选","集中","专心"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/concentrate","reason":"本批 concentrate 按所列词性与构式训练：集中注意；使集中（v.）、浓缩（v.）、浓缩物（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("focus",[
   ["sense-1","焦点；关注中心","n.",["焦点","关注中心"],["focus-1","19-related-concentrate-focus-concentration"],"Water quality is the focus of the study.","水质是这项研究的关注中心。",null,"https://www.merriam-webster.com/dictionary/focus"],
   ["sense-2","集中；使聚焦","v.",["集中","使聚焦"],["focus-2","19-related-concentrate-focus-concentration"],"The discussion focused on practical solutions.","讨论集中于实际解决办法。","focus on","https://www.merriam-webster.com/dictionary/focus"],
   ["sense-3","调节焦距","v.",["调节焦距"],["focus-3","19-related-concentrate-focus-concentration"],"Focus the camera on the distant tree.","把相机焦点对准远处的树。",null,"https://www.merriam-webster.com/dictionary/focus"]
  ],[{"terms":["焦距","聚焦","注视","调焦"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/focus","reason":"本批 focus 按所列词性与构式训练：焦点；关注中心（n.）、集中；使聚焦（v.）、调节焦距（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("foundation",[
   ["sense-1","基础；地基","n.",["基础","地基"],["foundation-1","earmarked-money","provide-financial-support","large-store-of-something"],"Workers inspected the foundations of the bridge.","工人检查了桥梁的地基。",null,"https://www.merriam-webster.com/dictionary/foundation"],
   ["sense-2","基金会","n.",["基金会"],["foundation-2","earmarked-money","provide-financial-support","large-store-of-something"],"The foundation supports young musicians.","基金会资助年轻音乐家。",null,"https://www.merriam-webster.com/dictionary/foundation"],
   ["sense-3","粉底","n.",["粉底"],["foundation-3","earmarked-money","provide-financial-support","large-store-of-something"],"She applied a light foundation before the performance.","演出前她涂了一层薄粉底。",null,"https://www.merriam-webster.com/dictionary/foundation"],
   ["sense-4","创建；设立","n.",["创建","设立"],["foundation-4","earmarked-money","provide-financial-support","large-store-of-something"],"The archive records the foundation of the college.","档案记录了学院的创建。",null,"https://www.merriam-webster.com/dictionary/foundation"]
  ],[{"terms":["根据","建立"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/foundation","reason":"本批 foundation 按所列词性与构式训练：基础；地基（n.）、基金会（n.）、粉底（n.）、创建；设立（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("utilise",[
   ["sense-1","利用","v.",["利用"],["utilise-1"],"The system utilises heat that would otherwise be lost.","系统利用了原本会散失的热量。",null,"https://www.merriam-webster.com/dictionary/utilize"]
  ],[{"terms":["运用","使用"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/utilize","reason":"本批 utilise 按所列词性与构式训练：利用（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("concentration",[
   ["sense-1","专注；集中","n.",["专注","集中"],["concentration-1","19-related-concentrate-focus-concentration"],"The task requires sustained concentration.","这项任务需要持续专注。",null,"https://www.merriam-webster.com/dictionary/concentration"],
   ["sense-2","浓度；密集程度","n.",["浓度","密集程度"],["concentration-2","19-related-concentrate-focus-concentration"],"The instrument measures the concentration of salt in water.","仪器测量水中的盐浓度。",null,"https://www.merriam-webster.com/dictionary/concentration"]
  ],[{"terms":["专心","浓缩"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/concentration","reason":"本批 concentration 按所列词性与构式训练：专注；集中（n.）、浓度；密集程度（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("count",[
   ["sense-1","计数；数","v.",["计数","数"],["count-1","topic-problem","underlying-problem","physical-substance","written-content","importance"],"Count the samples before sealing the box.","封箱前数一下样本。",null,"https://www.merriam-webster.com/dictionary/count"],
   ["sense-2","重要；有价值","v.",["重要","有价值"],["count-2","topic-problem","underlying-problem","physical-substance","written-content","importance"],"Every small improvement counts.","每一点微小的改进都很重要。",null,"https://www.merriam-webster.com/dictionary/count"],
   ["sense-3","算作；认为是","v.",["算作","认为是"],["count-3","topic-problem","underlying-problem","physical-substance","written-content","importance"],"The course counts as practical training.","这门课程算作实践培训。","count as","https://www.merriam-webster.com/dictionary/count"],
   ["sense-4","总数；计数结果","n.",["总数","计数结果"],["count-4","topic-problem","underlying-problem","physical-substance","written-content","importance"],"The final count showed thirty participants.","最终统计显示有三十名参与者。",null,"https://www.merriam-webster.com/dictionary/count"],
   ["sense-5","指望；依靠","v.",["指望","依靠"],["count-5","topic-problem","underlying-problem","physical-substance","written-content","importance"],"You can count on her to arrive on time.","你可以指望她准时到达。","count on","https://www.merriam-webster.com/dictionary/count"]
  ],[{"terms":["计算","视为","合计","伯爵"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/count","reason":"本批 count 按所列词性与构式训练：计数；数（v.）、重要；有价值（v.）、算作；认为是（v.）、总数；计数结果（n.）、指望；依靠（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("measurable",[
   ["sense-1","可测量的；显著的","adj.",["可测量的","显著的"],["measurable-1"],"The change produced a measurable improvement in air quality.","这一变化使空气质量得到可测出的改善。",null,"https://www.merriam-webster.com/dictionary/measurable"]
  ],[{"terms":["不久的","重要的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/measurable","reason":"本批 measurable 按所列词性与构式训练：可测量的；显著的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("inherit",[
   ["sense-1","继承财产","v.",["继承财产"],["inherit-1","19-related-inherit-inheritance"],"She inherited the cottage from her aunt.","她从姨妈那里继承了小屋。",null,"https://www.merriam-webster.com/dictionary/inherit"],
   ["sense-2","遗传获得；接手","v.",["遗传获得","接手"],["inherit-2","19-related-inherit-inheritance"],"The child inherited his father's eye colour.","孩子遗传了父亲的眼睛颜色。",null,"https://www.merriam-webster.com/dictionary/inherit"]
  ],[{"terms":["继承","遗传","接受遗产"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/inherit","reason":"本批 inherit 按所列词性与构式训练：继承财产（v.）、遗传获得；接手（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("local",[
   ["sense-1","当地的；局部的","adj.",["当地的","局部的"],["local-1","place-of-birth","indigenous-to-region","inborn-ability"],"The report relies on local knowledge.","报告依靠当地知识。",null,"https://www.merriam-webster.com/dictionary/local"],
   ["sense-2","当地居民","n.",["当地居民"],["local-2","place-of-birth","indigenous-to-region","inborn-ability"],"A local showed us the route to the beach.","一位当地居民给我们指了去海滩的路。",null,"https://www.merriam-webster.com/dictionary/local"]
  ],[{"terms":["地方性的","乡土的","本地的","本地新闻","局部"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/local","reason":"本批 local 按所列词性与构式训练：当地的；局部的（adj.）、当地居民（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("exotic",[
   ["sense-1","异国的；外来的","adj.",["异国的","外来的"],["exotic-1","foreign-country","foreign-policy","foreign-unfamiliar"],"The greenhouse contains exotic plants.","温室里有外来植物。",null,"https://www.merriam-webster.com/dictionary/exotic"],
   ["sense-2","奇异的；与众不同的","adj.",["奇异的","与众不同的"],["exotic-2","foreign-country","foreign-policy","foreign-unfamiliar"],"The market offered an exotic mixture of scents.","市场里弥漫着奇异的混合香气。",null,"https://www.merriam-webster.com/dictionary/exotic"]
  ],[{"terms":["外来人","外来物","舶来品"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/exotic","reason":"本批 exotic 按所列词性与构式训练：异国的；外来的（adj.）、奇异的；与众不同的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("antique",[
   ["sense-1","古董","n.",["古董"],["antique-1"],"The dealer checked the age of the antique.","商贩核查了古董的年代。",null,"https://www.merriam-webster.com/dictionary/antique"],
   ["sense-2","古老的；古董的","adj.",["古老的","古董的"],["antique-2"],"An antique clock stood above the fireplace.","壁炉上方摆着一座古董钟。",null,"https://www.merriam-webster.com/dictionary/antique"]
  ],[{"terms":["古物","古风的","旧式的","过时的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/antique","reason":"本批 antique 按所列词性与构式训练：古董（n.）、古老的；古董的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("inheritance",[
   ["sense-1","遗产；继承","n.",["遗产","继承"],["inheritance-1","19-related-inherit-inheritance","heritage-culture","cultural-heritage","heritage-inheritance"],"Her inheritance included a collection of letters.","她继承的遗产包括一批信件。",null,"https://www.merriam-webster.com/dictionary/inheritance"],
   ["sense-2","遗传","n.",["遗传"],["inheritance-2","19-related-inherit-inheritance","heritage-culture","cultural-heritage","heritage-inheritance"],"The lesson explains the inheritance of biological traits.","这节课解释生物性状的遗传。",null,"https://www.merriam-webster.com/dictionary/inheritance"]
  ],[]);
  entry("religion",[
   ["sense-1","宗教；信仰体系","n.",["宗教","信仰体系"],["religion-1"],"The exhibition explores the relationship between religion and art.","展览探索宗教与艺术的关系。",null,"https://www.merriam-webster.com/dictionary/religion"]
  ],[{"terms":["信仰","宗教信仰"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/religion","reason":"本批 religion 按所列词性与构式训练：宗教；信仰体系（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("spirit",[
   ["sense-1","精神；心境","n.",["精神","心境"],["spirit-1","inner-spiritual-self","essential-character","individual-person","embodiment-of-quality","soul-music"],"The team showed a generous spirit.","团队表现出了慷慨精神。",null,"https://www.merriam-webster.com/dictionary/spirit"],
   ["sense-2","灵魂；幽灵","n.",["灵魂","幽灵"],["spirit-2","inner-spiritual-self","essential-character","individual-person","embodiment-of-quality","soul-music"],"The old tale describes a spirit haunting the castle.","古老传说描述了萦绕城堡的幽灵。",null,"https://www.merriam-webster.com/dictionary/spirit"],
   ["sense-3","本意；实质","n.",["本意","实质"],["spirit-3","inner-spiritual-self","essential-character","individual-person","embodiment-of-quality","soul-music"],"The decision followed the spirit of the agreement.","决定遵循了协议的本意。",null,"https://www.merriam-webster.com/dictionary/spirit"],
   ["sense-4","烈酒（常用复数）","n.",["烈酒（常用复数）"],["spirit-4","inner-spiritual-self","essential-character","individual-person","embodiment-of-quality","soul-music"],"The shop sells wine but no spirits.","商店出售葡萄酒，但不卖烈酒。","spirits","https://www.merriam-webster.com/dictionary/spirit"],
   ["sense-5","秘密带走","v.",["秘密带走"],["spirit-5","inner-spiritual-self","essential-character","individual-person","embodiment-of-quality","soul-music"],"The valuable manuscript was spirited away before the fire.","珍贵手稿在火灾前被秘密转移了。","spirit away","https://www.merriam-webster.com/dictionary/spirit"]
  ],[{"terms":["心灵","态度","志气","人格","情绪","心情","烈酒","诱拐","鼓励","鼓舞"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/spirit","reason":"本批 spirit 按所列词性与构式训练：精神；心境（n.）、灵魂；幽灵（n.）、本意；实质（n.）、烈酒（常用复数）（n.）、秘密带走（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("decoration",[
   ["sense-1","装饰；装饰物","n.",["装饰","装饰物"],["decoration-1"],"Paper decorations hung across the room.","纸装饰物悬挂在房间上方。",null,"https://www.merriam-webster.com/dictionary/decoration"],
   ["sense-2","勋章；荣誉奖饰","n.",["勋章","荣誉奖饰"],["decoration-2"],"The decoration recognised his public service.","这枚勋章表彰了他的公共服务。",null,"https://www.merriam-webster.com/dictionary/decoration"]
  ],[{"terms":["装饰品"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/decoration","reason":"本批 decoration 按所列词性与构式训练：装饰；装饰物（n.）、勋章；荣誉奖饰（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("decorative",[
   ["sense-1","装饰性的","adj.",["装饰性的"],["decorative-1"],"The border has a purely decorative function.","边框只有装饰作用。",null,"https://www.merriam-webster.com/dictionary/decorative"]
  ],[]);
  entry("archaeological",[
   ["sense-1","考古学的","adj.",["考古学的"],["archaeological-1"],"The archaeological survey revealed an older road.","考古调查发现了一条更古老的道路。",null,"https://www.merriam-webster.com/dictionary/archaeological"]
  ],[{"terms":["考古学上的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/archaeological","reason":"本批 archaeological 按所列词性与构式训练：考古学的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("animation",[
   ["sense-1","动画；动画制作","n.",["动画","动画制作"],["animation-1"],"The film combines animation with live action.","电影将动画与真人表演结合起来。",null,"https://www.merriam-webster.com/dictionary/animation"],
   ["sense-2","活力；生气","n.",["活力","生气"],["animation-2"],"She spoke with unusual animation.","她说话时显得格外生动活泼。",null,"https://www.merriam-webster.com/dictionary/animation"]
  ],[{"terms":["活泼","激励","卡通制作"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/animation","reason":"本批 animation 按所列词性与构式训练：动画；动画制作（n.）、活力；生气（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("movie",[
   ["sense-1","电影","n.",["电影"],["movie-1"],"The movie follows a family living by the sea.","电影讲述了一个海边家庭的故事。",null,"https://www.merriam-webster.com/dictionary/movie"]
  ],[]);
  entry("artist",[
   ["sense-1","艺术家；表演者","n.",["艺术家","表演者"],["artist-1"],"The artist worked with recycled materials.","艺术家用回收材料创作。",null,"https://www.merriam-webster.com/dictionary/artist"]
  ],[{"terms":["画家"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/artist","reason":"本批 artist 按所列词性与构式训练：艺术家；表演者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("craftsman",[
   ["sense-1","工匠；技艺精湛者","n.",["工匠","技艺精湛者"],["craftsman-1","19-related-craft-craftsman-art"],"A craftsman repaired the carved wooden frame.","工匠修复了雕花木框。",null,"https://www.merriam-webster.com/dictionary/craftsman"]
  ],[{"terms":["技工","手艺人"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/craftsman","reason":"本批 craftsman 按所列词性与构式训练：工匠；技艺精湛者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("role",[
   ["sense-1","角色；人物","n.",["角色","人物"],["role-1","purpose-or-duty","operate-effectively","mathematical-function","formal-social-event"],"She played the leading role in the drama.","她在戏剧中扮演主角。",null,"https://www.merriam-webster.com/dictionary/role"],
   ["sense-2","作用；职责","n.",["作用","职责"],["role-2","purpose-or-duty","operate-effectively","mathematical-function","formal-social-event"],"Wetlands play an important role in flood control.","湿地在防洪方面发挥重要作用。",null,"https://www.merriam-webster.com/dictionary/role"]
  ],[{"terms":["任务","功用"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/role","reason":"本批 role 按所列词性与构式训练：角色；人物（n.）、作用；职责（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("tragedy",[
   ["sense-1","悲剧事件；灾难","n.",["悲剧事件","灾难"],["tragedy-1","disaster-catastrophe","17-disaster","17-calamitous","disaster-failure","disaster-mess","calamity-disaster"],"The accident was a tragedy for the whole community.","事故是整个社区的一场悲剧。",null,"https://www.merriam-webster.com/dictionary/tragedy"],
   ["sense-2","悲剧作品；悲剧体裁","n.",["悲剧作品","悲剧体裁"],["tragedy-2","disaster-catastrophe","17-disaster","17-calamitous","disaster-failure","disaster-mess","calamity-disaster"],"The students studied a classical tragedy.","学生们学习了一部古典悲剧。",null,"https://www.merriam-webster.com/dictionary/tragedy"]
  ],[{"terms":["悲剧","惨案","惨事","不辛"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tragedy","reason":"本批 tragedy 按所列词性与构式训练：悲剧事件；灾难（n.）、悲剧作品；悲剧体裁（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("scene",[
   ["sense-1","场景；戏剧的一场","n.",["场景","戏剧的一场"],["scene-1","location-place","website","construction-site","choose-location"],"The opening scene takes place in a railway station.","开场戏发生在火车站。",null,"https://www.merriam-webster.com/dictionary/scene"],
   ["sense-2","现场；地点","n.",["现场","地点"],["scene-2","location-place","website","construction-site","choose-location"],"The reporter arrived at the scene before dawn.","记者在黎明前到达现场。",null,"https://www.merriam-webster.com/dictionary/scene"],
   ["sense-3","景色；景象","n.",["景色","景象"],["scene-3","location-place","website","construction-site","choose-location"],"The painting depicts a peaceful rural scene.","画作描绘了宁静的乡村景色。",null,"https://www.merriam-webster.com/dictionary/scene"],
   ["sense-4","当众吵闹；失态","n.",["当众吵闹","失态"],["scene-4","location-place","website","construction-site","choose-location"],"He apologised for making a scene.","他为当众失态道歉。","make a scene","https://www.merriam-webster.com/dictionary/scene"],
   ["sense-5","活动领域；圈子","n.",["活动领域","圈子"],["scene-5","location-place","website","construction-site","choose-location"],"The city has a lively music scene.","这座城市的音乐圈很活跃。",null,"https://www.merriam-webster.com/dictionary/scene"]
  ],[{"terms":["场","情景","镜头","发生地点","道具","布景"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/scene","reason":"本批 scene 按所列词性与构式训练：场景；戏剧的一场（n.）、现场；地点（n.）、景色；景象（n.）、当众吵闹；失态（n.）、活动领域；圈子（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("art",[
   ["sense-1","艺术；艺术作品","n.",["艺术","艺术作品"],["art-1","19-related-craft-craftsman-art","skill-learned-ability","skill-domain-ability"],"The gallery displays contemporary art.","画廊展出当代艺术。",null,"https://www.merriam-webster.com/dictionary/art"],
   ["sense-2","技巧；技艺","n.",["技巧","技艺"],["art-2","19-related-craft-craftsman-art","skill-learned-ability","skill-domain-ability"],"She mastered the art of explaining difficult ideas.","她掌握了解释复杂想法的技巧。",null,"https://www.merriam-webster.com/dictionary/art"]
  ],[{"terms":["人文科学","技术","巧妙","诡计","美术","实际保持时间","特许权和资源表","平均检索时间","平均运行时间"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/art","reason":"本批 art 按所列词性与构式训练：艺术；艺术作品（n.）、技巧；技艺（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("craft",[
   ["sense-1","手艺；工艺","n.",["手艺","工艺"],["craft-1","19-related-craft-craftsman-art","skill-learned-ability","skill-domain-ability"],"The workshop teaches traditional craft.","工坊教授传统工艺。",null,"https://www.merriam-webster.com/dictionary/craft"],
   ["sense-2","船只；飞行器","n.",["船只","飞行器"],["craft-2","19-related-craft-craftsman-art","skill-learned-ability","skill-domain-ability"],"The rescue craft reached the stranded sailors.","救援船到达了受困水手所在处。",null,"https://www.merriam-webster.com/dictionary/craft"],
   ["sense-3","精心制作","v.",["精心制作"],["craft-3","19-related-craft-craftsman-art","skill-learned-ability","skill-domain-ability"],"He crafted the box from a single piece of wood.","他用整块木头精心制作了盒子。",null,"https://www.merriam-webster.com/dictionary/craft"]
  ],[{"terms":["技艺","诡计"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/craft","reason":"本批 craft 按所列词性与构式训练：手艺；工艺（n.）、船只；飞行器（n.）、精心制作（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("portrait",[
   ["sense-1","肖像；文字描写","n.",["肖像","文字描写"],["portrait-1"],"The portrait shows the writer at her desk.","肖像画展现了作家坐在书桌前的样子。",null,"https://www.merriam-webster.com/dictionary/portrait"],
   ["sense-2","纵向的；竖版的","adj.",["纵向的","竖版的"],["portrait-2"],"Print the document in portrait orientation.","用纵向格式打印文件。",null,"https://www.merriam-webster.com/dictionary/portrait"]
  ],[{"terms":["人像","半身像","描写","竖排格式","纵向"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/portrait","reason":"本批 portrait 按所列词性与构式训练：肖像；文字描写（n.）、纵向的；竖版的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mattress",[
   ["sense-1","床垫","n.",["床垫"],["mattress-1"],"The mattress rests on a wooden frame.","床垫放在木架上。",null,"https://www.merriam-webster.com/dictionary/mattress"]
  ],[{"terms":["空气垫","沉床","褥子"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mattress","reason":"本批 mattress 按所列词性与构式训练：床垫（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("tube",[
   ["sense-1","管；管状物","n.",["管","管状物"],["tube-1","tube-conveyance","tobacco-smoking-pipe","wind-instrument-pipe","high-pitched-voice","squeeze-decorative-icing"],"Water flows through the narrow tube.","水流过狭窄的管子。",null,"https://www.merriam-webster.com/dictionary/tube"],
   ["sense-2","软管包装；一管的量","n.",["软管包装","一管的量"],["tube-2","tube-conveyance","tobacco-smoking-pipe","wind-instrument-pipe","high-pitched-voice","squeeze-decorative-icing"],"She bought a tube of glue.","她买了一管胶水。",null,"https://www.merriam-webster.com/dictionary/tube"],
   ["sense-3","地铁（英式特定称呼）","n.",["地铁（英式特定称呼）"],["tube-3","tube-conveyance","tobacco-smoking-pipe","wind-instrument-pipe","high-pitched-voice","squeeze-decorative-icing"],"We took the Tube across London.","我们乘伦敦地铁穿过城区。","the Tube","https://www.merriam-webster.com/dictionary/tube"]
  ],[{"terms":["软管","隧道","把...装管","使通过管子","管子"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tube","reason":"本批 tube 按所列词性与构式训练：管；管状物（n.）、软管包装；一管的量（n.）、地铁（英式特定称呼）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mop",[
   ["sense-1","拖把","n.",["拖把"],["mop-1","wipe-clean","wipe-erase","erase-data","wipe-cloth"],"The mop stood beside the bucket.","拖把靠在水桶旁。",null,"https://www.merriam-webster.com/dictionary/mop"],
   ["sense-2","拖洗；擦掉","v.",["拖洗","擦掉"],["mop-2","wipe-clean","wipe-erase","erase-data","wipe-cloth"],"He mopped the wet floor.","他拖干了湿地板。",null,"https://www.merriam-webster.com/dictionary/mop"]
  ],[{"terms":["蓬乱的头发","用拖把拖洗","擦拭","清除"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mop","reason":"本批 mop 按所列词性与构式训练：拖把（n.）、拖洗；擦掉（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sweep",[
   ["sense-1","清扫；扫除","v.",["清扫","扫除"],["sweep-1"],"She swept the leaves from the path.","她扫除了路上的叶子。",null,"https://www.merriam-webster.com/dictionary/sweep"],
   ["sense-2","迅速掠过；席卷","v.",["迅速掠过","席卷"],["sweep-2"],"A wave swept across the deck.","一波海浪席卷了甲板。",null,"https://www.merriam-webster.com/dictionary/sweep"],
   ["sense-3","全部赢得","v.",["全部赢得"],["sweep-3"],"The team swept every event in the competition.","团队赢下了比赛的所有项目。",null,"https://www.merriam-webster.com/dictionary/sweep"],
   ["sense-4","范围；广阔延伸","n.",["范围","广阔延伸"],["sweep-4"],"The balcony offers a wide sweep of the coastline.","阳台能看到海岸线广阔的延伸。",null,"https://www.merriam-webster.com/dictionary/sweep"],
   ["sense-5","全面搜查；扫视","v.",["全面搜查","扫视"],["sweep-5"],"The guards swept the building before it opened.","开放前警卫全面搜查了建筑。",null,"https://www.merriam-webster.com/dictionary/sweep"]
  ],[{"terms":["打扫","肃清","视野","全胜","掸去","猛拉","扫荡","冲走","刮起","环视","掠过","扫射","扫","袭击"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sweep","reason":"本批 sweep 按所列词性与构式训练：清扫；扫除（v.）、迅速掠过；席卷（v.）、全部赢得（v.）、范围；广阔延伸（n.）、全面搜查；扫视（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("quilt",[
   ["sense-1","被子；绗缝盖被","n.",["被子","绗缝盖被"],["quilt-1"],"A handmade quilt covered the bed.","床上盖着一条手工被子。",null,"https://www.merriam-webster.com/dictionary/quilt"]
  ],[{"terms":["棉被","加软衬料后缝制","东拼西凑地编","缝被子"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/quilt","reason":"本批 quilt 按所列词性与构式训练：被子；绗缝盖被（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sheet",[
   ["sense-1","床单","n.",["床单"],["sheet-1","layer-stratum","egg-laying-hen","arrange-in-layers"],"The hotel changed the sheets every morning.","酒店每天早晨更换床单。",null,"https://www.merriam-webster.com/dictionary/sheet"],
   ["sense-2","一张纸；薄片","n.",["一张纸","薄片"],["sheet-2","layer-stratum","egg-laying-hen","arrange-in-layers"],"Write the results on a separate sheet.","把结果写在另一张纸上。",null,"https://www.merriam-webster.com/dictionary/sheet"],
   ["sense-3","一大片；一层","n.",["一大片","一层"],["sheet-3","layer-stratum","egg-laying-hen","arrange-in-layers"],"A sheet of ice covered the pond.","一层冰覆盖着池塘。",null,"https://www.merriam-webster.com/dictionary/sheet"]
  ],[{"terms":["张","纸张","印刷品","裹尸布","盖上被单","遍布","大片落下","片状的","成薄片的","工作表"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sheet","reason":"本批 sheet 按所列词性与构式训练：床单（n.）、一张纸；薄片（n.）、一大片；一层（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("towel",[
   ["sense-1","毛巾","n.",["毛巾"],["towel-1"],"She dried her hands with a towel.","她用毛巾擦干双手。",null,"https://www.merriam-webster.com/dictionary/towel"],
   ["sense-2","用毛巾擦干","v.",["用毛巾擦干"],["towel-2"],"He towelled his hair after swimming.","游泳后他用毛巾擦干头发。",null,"https://www.merriam-webster.com/dictionary/towel"]
  ],[{"terms":["手巾","擦干身子"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/towel","reason":"本批 towel 按所列词性与构式训练：毛巾（n.）、用毛巾擦干（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("match",[
   ["sense-1","比赛；对抗赛","n.",["比赛","对抗赛"],["match-1","equal-same","equal-capable","equal-match-verb","equal-peer"],"The match ended in a draw.","比赛以平局结束。",null,"https://www.merriam-webster.com/dictionary/match"],
   ["sense-2","相配者；对应物","n.",["相配者","对应物"],["match-2","equal-same","equal-capable","equal-match-verb","equal-peer"],"The fabric was a perfect match for the curtains.","这块布与窗帘十分相配。",null,"https://www.merriam-webster.com/dictionary/match"],
   ["sense-3","火柴","n.",["火柴"],["match-3","equal-same","equal-capable","equal-match-verb","equal-peer"],"He used a match to light the stove.","他用一根火柴点燃炉子。",null,"https://www.merriam-webster.com/dictionary/match"],
   ["sense-4","匹配；与……相当","v.",["匹配","与……相当"],["match-4","equal-same","equal-capable","equal-match-verb","equal-peer"],"The new equipment matches the older model in accuracy.","新设备在准确度上与旧型号相当。",null,"https://www.merriam-webster.com/dictionary/match"],
   ["sense-5","提供等额款项","v.",["提供等额款项"],["match-5","equal-same","equal-capable","equal-match-verb","equal-peer"],"The sponsor matched every donation made that day.","赞助者为当天的每笔捐款提供等额资助。",null,"https://www.merriam-webster.com/dictionary/match"]
  ],[{"terms":["对手","使相配","使比赛","与...竞争","结婚","相配","比较"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/match","reason":"本批 match 按所列词性与构式训练：比赛；对抗赛（n.）、相配者；对应物（n.）、火柴（n.）、匹配；与……相当（v.）、提供等额款项（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cable",[
   ["sense-1","电缆；钢索","n.",["电缆","钢索"],["cable-1"],"A thick cable connects the two buildings.","一根粗电缆连接两座建筑。",null,"https://www.merriam-webster.com/dictionary/cable"],
   ["sense-2","有线电视","n.",["有线电视"],["cable-2"],"Their apartment has cable and internet access.","他们的公寓接通了有线电视和互联网。",null,"https://www.merriam-webster.com/dictionary/cable"]
  ],[{"terms":["海底电报","缆","索","打海底电报","发海底电报","缚住"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cable","reason":"本批 cable 按所列词性与构式训练：电缆；钢索（n.）、有线电视（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("pamphlet",[
   ["sense-1","小册子","n.",["小册子"],["pamphlet-1"],"The pamphlet explains the museum's history.","小册子介绍了博物馆的历史。",null,"https://www.merriam-webster.com/dictionary/pamphlet"]
  ],[{"terms":["活页文选"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pamphlet","reason":"本批 pamphlet 按所列词性与构式训练：小册子（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("appear",[
   ["sense-1","出现；出场","v.",["出现","出场"],["appear-1","emerge-appear","appearing-known","emerge-known","emerge-become"],"A boat appeared beyond the headland.","一艘船出现在岬角外。",null,"https://www.merriam-webster.com/dictionary/appear"],
   ["sense-2","似乎；显得","v.",["似乎","显得"],["appear-2","emerge-appear","appearing-known","emerge-known","emerge-become"],"The solution appears simple at first.","这个解决办法乍看似乎很简单。",null,"https://www.merriam-webster.com/dictionary/appear"]
  ],[{"terms":["来到","出庭","到案"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/appear","reason":"本批 appear 按所列词性与构式训练：出现；出场（v.）、似乎；显得（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("jeans",[
   ["sense-1","牛仔裤","n.",["牛仔裤"],["jeans-1"],"Her jeans were covered in dust.","她的牛仔裤上满是灰尘。",null,"https://www.merriam-webster.com/dictionary/jean"]
  ],[{"terms":["工装裤"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/jean","reason":"本批 jeans 按所列词性与构式训练：牛仔裤（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("laundry",[
   ["sense-1","待洗或洗好的衣物","n.",["待洗或洗好的衣物"],["laundry-1"],"A basket of laundry stood by the door.","一篮衣物放在门边。",null,"https://www.merriam-webster.com/dictionary/laundry"],
   ["sense-2","洗衣房；洗衣店","n.",["洗衣房","洗衣店"],["laundry-2"],"The hotel has a laundry in the basement.","酒店地下室有洗衣房。",null,"https://www.merriam-webster.com/dictionary/laundry"]
  ],[{"terms":["洗好的衣服","洗涤","洗衣作"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/laundry","reason":"本批 laundry 按所列词性与构式训练：待洗或洗好的衣物（n.）、洗衣房；洗衣店（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("wardrobe",[
   ["sense-1","衣柜","n.",["衣柜"],["wardrobe-1"],"He hung his coat in the wardrobe.","他把外套挂进衣柜。",null,"https://www.merriam-webster.com/dictionary/wardrobe"],
   ["sense-2","全部衣物；行头","n.",["全部衣物","行头"],["wardrobe-2"],"The role required a completely new wardrobe.","这个角色需要一整套新行头。",null,"https://www.merriam-webster.com/dictionary/wardrobe"]
  ],[{"terms":["衣橱","衣室","全部衣服"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/wardrobe","reason":"本批 wardrobe 按所列词性与构式训练：衣柜（n.）、全部衣物；行头（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("overcoat",[
   ["sense-1","大衣；外套","n.",["大衣","外套"],["overcoat-1"],"She put on an overcoat before leaving.","离开前她穿上了大衣。",null,"https://www.merriam-webster.com/dictionary/overcoat"]
  ],[{"terms":["外套大衣"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/overcoat","reason":"本批 overcoat 按所列词性与构式训练：大衣；外套（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("glove",[
   ["sense-1","手套","n.",["手套"],["glove-1"],"He removed one glove to use the camera.","他摘下一只手套操作相机。",null,"https://www.merriam-webster.com/dictionary/glove"]
  ],[{"terms":["给...戴手套"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/glove","reason":"本批 glove 按所列词性与构式训练：手套（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("scarf",[
   ["sense-1","围巾；披巾","n.",["围巾","披巾"],["scarf-1"],"A woollen scarf kept her neck warm.","羊毛围巾让她的脖子保持温暖。",null,"https://www.merriam-webster.com/dictionary/scarf"]
  ],[{"terms":["头巾","领带","领巾","嵌接","用围巾围"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/scarf","reason":"本批 scarf 按所列词性与构式训练：围巾；披巾（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("jacket",[
   ["sense-1","夹克；短外套","n.",["夹克","短外套"],["jacket-1"],"He left his jacket on the chair.","他把夹克放在椅子上。",null,"https://www.merriam-webster.com/dictionary/jacket"],
   ["sense-2","护套；外封","n.",["护套","外封"],["jacket-2"],"The book's jacket was torn.","书的护封破了。",null,"https://www.merriam-webster.com/dictionary/jacket"]
  ],[{"terms":["外套","给...穿夹克","给...装护套"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/jacket","reason":"本批 jacket 按所列词性与构式训练：夹克；短外套（n.）、护套；外封（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("wallet",[
   ["sense-1","钱包；电子钱包","n.",["钱包","电子钱包"],["wallet-1","purse-money-bag","purse-handbag","purse-funds","purse-prize","purse-lips"],"The wallet contained a ticket and two banknotes.","钱包里有一张票和两张钞票。",null,"https://www.merriam-webster.com/dictionary/wallet"]
  ],[{"terms":["皮夹","皮包","钱袋"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/wallet","reason":"本批 wallet 按所列词性与构式训练：钱包；电子钱包（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("boot",[
   ["sense-1","靴子","n.",["靴子"],["boot-1","kick-foot-action","kick-foot-act","kick-thrill","kick-stop-habit"],"Mud covered his walking boots.","他的徒步靴上沾满了泥。",null,"https://www.merriam-webster.com/dictionary/boot"],
   ["sense-2","汽车后备箱（英式）","n.",["汽车后备箱（英式）"],["boot-2","kick-foot-action","kick-foot-act","kick-thrill","kick-stop-habit"],"Put the cases in the boot.","把箱子放进后备箱。",null,"https://www.merriam-webster.com/dictionary/boot"],
   ["sense-3","启动电脑","v.",["启动电脑"],["boot-3","kick-foot-action","kick-foot-act","kick-thrill","kick-stop-habit"],"The computer takes a minute to boot.","这台电脑启动需要一分钟。",null,"https://www.merriam-webster.com/dictionary/boot"],
   ["sense-4","踢；赶走","v.",["踢","赶走"],["boot-4","kick-foot-action","kick-foot-act","kick-thrill","kick-stop-habit"],"The referee booted the ball off the pitch.","裁判把球踢出了球场。",null,"https://www.merriam-webster.com/dictionary/boot"]
  ],[{"terms":["长靴","解雇","效用","使穿靴","有用","引导","自举"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/boot","reason":"本批 boot 按所列词性与构式训练：靴子（n.）、汽车后备箱（英式）（n.）、启动电脑（v.）、踢；赶走（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("lemon",[
   ["sense-1","柠檬","n.",["柠檬"],["lemon-1"],"She squeezed a lemon into the water.","她往水里挤了一个柠檬的汁。",null,"https://www.merriam-webster.com/dictionary/lemon"],
   ["sense-2","有缺陷的次品（非正式）","n.",["有缺陷的次品（非正式）"],["lemon-2"],"The used car turned out to be a lemon.","那辆二手车结果是个毛病百出的次品。",null,"https://www.merriam-webster.com/dictionary/lemon"]
  ],[{"terms":["柠檬树","柠檬色"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/lemon","reason":"本批 lemon 按所列词性与构式训练：柠檬（n.）、有缺陷的次品（非正式）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("reap",[
   ["sense-1","收割","v.",["收割"],["reap-1","gather-crops","collect-useful-resources","benefits-from-effort"],"The farmers reaped the wheat before the rain.","农民在下雨前收割了小麦。",null,"https://www.merriam-webster.com/dictionary/reap"],
   ["sense-2","获得；收获成果","v.",["获得","收获成果"],["reap-2","gather-crops","collect-useful-resources","benefits-from-effort"],"The town reaped the benefits of better transport.","城镇获得了交通改善带来的好处。",null,"https://www.merriam-webster.com/dictionary/reap"]
  ],[{"terms":["收获","得到报应"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reap","reason":"本批 reap 按所列词性与构式训练：收割（v.）、获得；收获成果（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("flour",[
   ["sense-1","面粉","n.",["面粉"],["flour-1"],"Add the flour slowly to the mixture.","把面粉慢慢加入混合物。",null,"https://www.merriam-webster.com/dictionary/flour"],
   ["sense-2","撒上面粉","v.",["撒上面粉"],["flour-2"],"Flour the board before rolling the dough.","擀面团前在案板上撒些面粉。",null,"https://www.merriam-webster.com/dictionary/flour"]
  ],[{"terms":["粉沫","碎粉","麦粉"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/flour","reason":"本批 flour 按所列词性与构式训练：面粉（n.）、撒上面粉（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("kiwi",[
   ["sense-1","猕猴桃","n.",["猕猴桃"],["kiwi-1"],"She sliced a kiwi for breakfast.","她切了一个猕猴桃作早餐。",null,"https://www.merriam-webster.com/dictionary/kiwi"],
   ["sense-2","几维鸟","n.",["几维鸟"],["kiwi-2"],"The kiwi searches for food at night.","几维鸟在夜间觅食。",null,"https://www.merriam-webster.com/dictionary/kiwi"]
  ],[{"terms":["鹬鸵","地勤人员","新西兰人"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/kiwi","reason":"本批 kiwi 按所列词性与构式训练：猕猴桃（n.）、几维鸟（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("livestock",[
   ["sense-1","牲畜","n.",["牲畜"],["livestock-1","domestic-bovine-cattle"],"The farmer moved the livestock into the barn.","农民把牲畜赶进谷仓。",null,"https://www.merriam-webster.com/dictionary/livestock"]
  ],[{"terms":["家畜"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/livestock","reason":"本批 livestock 按所列词性与构式训练：牲畜（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("chicken",[
   ["sense-1","鸡肉","n.",["鸡肉"],["chicken-1"],"The recipe uses chicken and fresh vegetables.","食谱使用鸡肉和新鲜蔬菜。",null,"https://www.merriam-webster.com/dictionary/chicken"],
   ["sense-2","胆怯的（非正式）","adj.",["胆怯的（非正式）"],["chicken-2"],"He felt too chicken to climb the high ladder.","他胆子太小，不敢爬高梯。",null,"https://www.merriam-webster.com/dictionary/chicken"],
   ["sense-3","鸡","n.",["鸡"],["chicken-3"],"A chicken scratched the soil beside the fence.","一只鸡在篱笆旁刨土。",null,"https://www.merriam-webster.com/dictionary/chicken"]
  ],[{"terms":["小鸡"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/chicken","reason":"本批 chicken 按所列词性与构式训练：鸡肉（n.）、胆怯的（非正式）（adj.）、鸡（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("popcorn",[
   ["sense-1","爆米花","n.",["爆米花"],["popcorn-1"],"We shared a bowl of popcorn during the film.","看电影时我们分享了一碗爆米花。",null,"https://www.merriam-webster.com/dictionary/popcorn"]
  ],[]);
  entry("beef",[
   ["sense-1","牛肉","n.",["牛肉"],["beef-1"],"The stew contains beef and potatoes.","炖菜里有牛肉和土豆。",null,"https://www.merriam-webster.com/dictionary/beef"],
   ["sense-2","不满；抱怨（非正式）","n.",["不满","抱怨（非正式）"],["beef-2"],"Her main beef was the lack of clear information.","她主要抱怨信息不清楚。",null,"https://www.merriam-webster.com/dictionary/beef"],
   ["sense-3","加强；充实","v.",["加强","充实"],["beef-3"],"The school beefed up its support for new students.","学校加强了对新生的支持。","beef up","https://www.merriam-webster.com/dictionary/beef"]
  ],[{"terms":["肌肉","养(牛)","宰(牛)","抱怨","告发"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/beef","reason":"本批 beef 按所列词性与构式训练：牛肉（n.）、不满；抱怨（非正式）（n.）、加强；充实（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("dairy",[
   ["sense-1","乳品厂；奶牛场","n.",["乳品厂","奶牛场"],["dairy-1"],"The dairy supplies milk to nearby villages.","这家乳品厂向附近村庄供应牛奶。",null,"https://www.merriam-webster.com/dictionary/dairy"],
   ["sense-2","乳制品的","adj.",["乳制品的"],["dairy-2"],"The shop keeps dairy products in a separate fridge.","商店把乳制品放在单独的冰箱里。",null,"https://www.merriam-webster.com/dictionary/dairy"]
  ],[{"terms":["乳品场","乳品店","乳制品","奶制的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dairy","reason":"本批 dairy 按所列词性与构式训练：乳品厂；奶牛场（n.）、乳制品的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("pork",[
   ["sense-1","猪肉","n.",["猪肉"],["pork-1"],"The dish is made with pork and beans.","这道菜用猪肉和豆子做成。",null,"https://www.merriam-webster.com/dictionary/pork"]
  ],[]);
  entry("vault",[
   ["sense-1","拱顶","n.",["拱顶"],["vault-1","jump-leap-verb","jump-rise-sharply","jump-startle","jump-leap-noun"],"The stone vault rises above the chapel.","石拱顶高耸在小礼拜堂上方。",null,"https://www.merriam-webster.com/dictionary/vault"],
   ["sense-2","保险库；地下库房","n.",["保险库","地下库房"],["vault-2","jump-leap-verb","jump-rise-sharply","jump-startle","jump-leap-noun"],"The documents are stored in a secure vault.","文件保存在安全的库房中。",null,"https://www.merriam-webster.com/dictionary/vault"],
   ["sense-3","撑跳；跃过","v.",["撑跳","跃过"],["vault-3","jump-leap-verb","jump-rise-sharply","jump-startle","jump-leap-noun"],"The athlete vaulted over the low barrier.","运动员撑跳越过了低栏。",null,"https://www.merriam-webster.com/dictionary/vault"]
  ],[{"terms":["窖","地下室","撑竿跳","穹窿","做成圆拱形","撑竿跳过","成穹状弯曲","跳跃"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/vault","reason":"本批 vault 按所列词性与构式训练：拱顶（n.）、保险库；地下库房（n.）、撑跳；跃过（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("lift",[
   ["sense-1","举起；抬高","v.",["举起","抬高"],["lift-1"],"Lift the lid carefully to avoid the steam.","小心揭开盖子，避开蒸汽。",null,"https://www.merriam-webster.com/dictionary/lift"],
   ["sense-2","解除；撤销","v.",["解除","撤销"],["lift-2"],"The authorities lifted the travel restriction.","当局解除了出行限制。",null,"https://www.merriam-webster.com/dictionary/lift"],
   ["sense-3","振奋；改善","v.",["振奋","改善"],["lift-3"],"The news lifted everyone's spirits.","消息振奋了所有人的精神。",null,"https://www.merriam-webster.com/dictionary/lift"],
   ["sense-4","电梯","n.",["电梯"],["lift-4"],"Take the lift to the fourth floor.","乘电梯到四楼。",null,"https://www.merriam-webster.com/dictionary/lift"],
   ["sense-5","搭便车；顺路接送","n.",["搭便车","顺路接送"],["lift-5"],"A neighbour gave her a lift to the station.","一位邻居顺路送她到车站。",null,"https://www.merriam-webster.com/dictionary/lift"]
  ],[{"terms":["帮助","昂扬","升高","提高","鼓舞","清偿","空运","剽窃","升起","消散","耸立"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/lift","reason":"本批 lift 按所列词性与构式训练：举起；抬高（v.）、解除；撤销（v.）、振奋；改善（v.）、电梯（n.）、搭便车；顺路接送（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("parlour",[
   ["sense-1","客厅；营业室","n.",["客厅","营业室"],["parlour-1"],"The visitors waited in the front parlour.","访客在前面的客厅里等候。",null,"https://www.merriam-webster.com/dictionary/parlor"]
  ],[{"terms":["会客室","雅座","客厅的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/parlor","reason":"本批 parlour 按所列词性与构式训练：客厅；营业室（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("kitchen",[
   ["sense-1","厨房","n.",["厨房"],["kitchen-1"],"The kitchen overlooks the small garden.","厨房朝向小花园。",null,"https://www.merriam-webster.com/dictionary/kitchen"]
  ],[{"terms":["全套炊具"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/kitchen","reason":"本批 kitchen 按所列词性与构式训练：厨房（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fireplace",[
   ["sense-1","壁炉","n.",["壁炉"],["fireplace-1"],"A low fire burned in the fireplace.","壁炉里燃着小火。",null,"https://www.merriam-webster.com/dictionary/fireplace"]
  ],[]);
  entry("cabinet",[
   ["sense-1","储物柜；橱柜","n.",["储物柜","橱柜"],["cabinet-1"],"The glass cabinet holds delicate ceramics.","玻璃柜里存放着精巧的陶瓷器。",null,"https://www.merriam-webster.com/dictionary/cabinet"],
   ["sense-2","内阁","n.",["内阁"],["cabinet-2"],"The cabinet discussed the proposed reforms.","内阁讨论了拟议中的改革。",null,"https://www.merriam-webster.com/dictionary/cabinet"]
  ],[{"terms":["内阁的","细木工做的","机柜"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cabinet","reason":"本批 cabinet 按所列词性与构式训练：储物柜；橱柜（n.）、内阁（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("basin",[
   ["sense-1","盆；洗手池","n.",["盆","洗手池"],["basin-1","bowl-container","lawn-bowls-sport","bowl-a-ball","move-smoothly"],"Fill the basin with warm water.","把盆装上温水。",null,"https://www.merriam-webster.com/dictionary/basin"],
   ["sense-2","盆地；流域","n.",["盆地","流域"],["basin-2","bowl-container","lawn-bowls-sport","bowl-a-ball","move-smoothly"],"The river basin supports several farming communities.","河流流域养育着几个农业社区。",null,"https://www.merriam-webster.com/dictionary/basin"]
  ],[{"terms":["第三脑室","骨盆"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/basin","reason":"本批 basin 按所列词性与构式训练：盆；洗手池（n.）、盆地；流域（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("washbowl",[
   ["sense-1","洗脸盆","n.",["洗脸盆"],["washbowl-1"],"A ceramic washbowl stood beside the bed.","床边放着一个陶瓷洗脸盆。",null,"https://www.merriam-webster.com/dictionary/washbowl"]
  ],[]);
  entry("studio",[
   ["sense-1","工作室；演播室","n.",["工作室","演播室"],["studio-1"],"The artist rents a small studio above the shop.","艺术家在商店楼上租了一间小工作室。",null,"https://www.merriam-webster.com/dictionary/studio"],
   ["sense-2","单间公寓","n.",["单间公寓"],["studio-2"],"She lives in a studio near the university.","她住在大学附近的一套单间公寓里。",null,"https://www.merriam-webster.com/dictionary/studio"]
  ],[{"terms":["画室","电影制片厂"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/studio","reason":"本批 studio 按所列词性与构式训练：工作室；演播室（n.）、单间公寓（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("urban",[
   ["sense-1","城市的","adj.",["城市的"],["urban-1"],"The survey compared urban and rural transport.","调查比较了城市和乡村交通。",null,"https://www.merriam-webster.com/dictionary/urban"]
  ],[{"terms":["都市的","住在都市的","习惯于都市的","市区的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/urban","reason":"本批 urban 按所列词性与构式训练：城市的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("brake",[
   ["sense-1","刹车；制动器","n.",["刹车","制动器"],["brake-1"],"The mechanic tested the brakes before the trip.","出发前修理工测试了刹车。",null,"https://www.merriam-webster.com/dictionary/brake"],
   ["sense-2","刹车；使减速","v.",["刹车","使减速"],["brake-2"],"The driver braked as the child approached the road.","孩子走近道路时，司机踩了刹车。",null,"https://www.merriam-webster.com/dictionary/brake"]
  ],[{"terms":["阻碍","丛林"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/brake","reason":"本批 brake 按所列词性与构式训练：刹车；制动器（n.）、刹车；使减速（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("honk",[
   ["sense-1","按喇叭；发雁叫声","v.",["按喇叭","发雁叫声"],["honk-1"],"The driver honked to warn the cyclist.","司机按喇叭提醒骑车人。",null,"https://www.merriam-webster.com/dictionary/honk"]
  ],[{"terms":["雁鸣","汽车的喇叭声","雁鸣叫","按汽车喇叭","揿(喇叭)"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/honk","reason":"本批 honk 按所列词性与构式训练：按喇叭；发雁叫声（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("motor",[
   ["sense-1","发动机；电动机","n.",["发动机","电动机"],["motor-1","power-producing-engine","railway-locomotive","driving-force","task-specific-software-engine"],"The motor drives the conveyor belt.","电动机驱动传送带。",null,"https://www.merriam-webster.com/dictionary/motor"],
   ["sense-2","运动的；运动神经的","adj.",["运动的","运动神经的"],["motor-2","power-producing-engine","railway-locomotive","driving-force","task-specific-software-engine"],"The test assessed motor coordination.","测试评估了运动协调能力。",null,"https://www.merriam-webster.com/dictionary/motor"]
  ],[{"terms":["马达","原动力","汽车","马达的","发动机的","汽车的","发动的","推动","以汽车载运","乘汽车","驾车"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/motor","reason":"本批 motor 按所列词性与构式训练：发动机；电动机（n.）、运动的；运动神经的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("dash",[
   ["sense-1","猛冲；急奔","v.",["猛冲","急奔"],["dash-1"],"She dashed across the courtyard.","她飞奔穿过院子。",null,"https://www.merriam-webster.com/dictionary/dash"],
   ["sense-2","破折号","n.",["破折号"],["dash-2"],"Use a dash to separate the final phrase.","用破折号隔开最后的短语。",null,"https://www.merriam-webster.com/dictionary/dash"],
   ["sense-3","少许；一点","n.",["少许","一点"],["dash-3"],"Add a dash of lemon juice.","加一点柠檬汁。",null,"https://www.merriam-webster.com/dictionary/dash"],
   ["sense-4","使希望破灭","v.",["使希望破灭"],["dash-4"],"The cancellation dashed their hopes of seeing the exhibition.","取消安排使他们看展览的希望落空。",null,"https://www.merriam-webster.com/dictionary/dash"]
  ],[{"terms":["冲撞","短跑","泼溅","使猛撞","搀和","使破灭","使沮丧"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dash","reason":"本批 dash 按所列词性与构式训练：猛冲；急奔（v.）、破折号（n.）、少许；一点（n.）、使希望破灭（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("captain",[
   ["sense-1","队长；船长；机长","n.",["队长","船长","机长"],["captain-1"],"The captain checked the weather before departure.","船长在出发前查看了天气。",null,"https://www.merriam-webster.com/dictionary/captain"],
   ["sense-2","担任队长或船长","v.",["担任队长或船长"],["captain-2"],"She captained the team throughout the season.","她整个赛季都担任队长。",null,"https://www.merriam-webster.com/dictionary/captain"]
  ],[{"terms":["指挥官","海军上校","首领","率领","指挥"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/captain","reason":"本批 captain 按所列词性与构式训练：队长；船长；机长（n.）、担任队长或船长（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("hazard",[
   ["sense-1","危险源；隐患","n.",["危险源","隐患"],["hazard-1"],"Loose cables are a safety hazard.","松散的电缆是安全隐患。",null,"https://www.merriam-webster.com/dictionary/hazard"],
   ["sense-2","冒险提出或尝试","v.",["冒险提出或尝试"],["hazard-2"],"He hazarded a guess about the missing date.","他冒险猜测了缺失的日期。",null,"https://www.merriam-webster.com/dictionary/hazard"]
  ],[{"terms":["冒险","危险","机会","冒...的危险","赌运气","使冒危险","相关危险"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/hazard","reason":"本批 hazard 按所列词性与构式训练：危险源；隐患（n.）、冒险提出或尝试（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("emergency",[
   ["sense-1","紧急情况","n.",["紧急情况"],["emergency-1"],"The school rehearsed its emergency procedures.","学校演练了紧急应对程序。",null,"https://www.merriam-webster.com/dictionary/emergency"]
  ],[{"terms":["紧急状况","紧急事件","紧急需要"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/emergency","reason":"本批 emergency 按所列词性与构式训练：紧急情况（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("dock",[
   ["sense-1","码头；船坞","n.",["码头","船坞"],["dock-1"],"The ferry returned to the dock.","渡轮回到了码头。",null,"https://www.merriam-webster.com/dictionary/dock"],
   ["sense-2","停靠；对接","v.",["停靠","对接"],["dock-2"],"The spacecraft docked with the station.","航天器与空间站对接。",null,"https://www.merriam-webster.com/dictionary/dock"],
   ["sense-3","扣减报酬","v.",["扣减报酬"],["dock-3"],"The employer docked a day's pay.","雇主扣掉了一天的工资。",null,"https://www.merriam-webster.com/dictionary/dock"],
   ["sense-4","被告席","n.",["被告席"],["dock-4"],"The accused stood in the dock during the hearing.","听证时，被告站在被告席里。",null,"https://www.merriam-webster.com/dictionary/dock"]
  ],[{"terms":["尾巴的骨肉部分","使靠码头","使(船)进港","剪短","进港"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dock","reason":"本批 dock 按所列词性与构式训练：码头；船坞（n.）、停靠；对接（v.）、扣减报酬（v.）、被告席（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("anchor",[
   ["sense-1","锚","n.",["锚"],["anchor-1","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer"],"The crew lowered the anchor.","船员放下了锚。",null,"https://www.merriam-webster.com/dictionary/anchor"],
   ["sense-2","使固定；抛锚","v.",["使固定","抛锚"],["anchor-2","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer"],"The boat was anchored close to shore.","小船在近岸抛了锚。",null,"https://www.merriam-webster.com/dictionary/anchor"],
   ["sense-3","新闻主播","n.",["新闻主播"],["anchor-3","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer"],"The anchor introduced the evening report.","主播介绍了晚间报道。",null,"https://www.merriam-webster.com/dictionary/anchor"],
   ["sense-4","可靠支柱；依靠","n.",["可靠支柱","依靠"],["anchor-4","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer"],"The weekly meeting is an anchor in her busy schedule.","每周的会议是她忙碌日程中的一个稳定支柱。",null,"https://www.merriam-webster.com/dictionary/anchor"]
  ],[{"terms":["抛锚停泊"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/anchor","reason":"本批 anchor 按所列词性与构式训练：锚（n.）、使固定；抛锚（v.）、新闻主播（n.）、可靠支柱；依靠（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("stewardess",[
   ["sense-1","女乘务员（较旧称谓）","n.",["女乘务员（较旧称谓）"],["stewardess-1","female-greeter-host","female-innkeeper","air-hostess","passenger-service-attendant","restaurant-reception-staff","female-programme-presenter"],"The old photograph shows a stewardess beside the aircraft.","老照片展示了一位站在飞机旁的女乘务员。",null,"https://www.merriam-webster.com/dictionary/stewardess"]
  ],[{"terms":["空中小姐","女管理人","女管家"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/stewardess","reason":"采用历史材料中的女乘务员称谓；当代一般职业称谓常用 flight attendant，不把此词推广为所有性别的普通称呼。 本批 stewardess 按所列词性与构式训练：女乘务员（较旧称谓）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("colonial",[
   ["sense-1","殖民地的；殖民时期的","adj.",["殖民地的","殖民时期的"],["colonial-1"],"The museum occupies a colonial building.","博物馆设在一座殖民时期的建筑中。",null,"https://www.merriam-webster.com/dictionary/colonial"]
  ],[{"terms":["殖民的","殖民地居民"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/colonial","reason":"本批 colonial 按所列词性与构式训练：殖民地的；殖民时期的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("liberate",[
   ["sense-1","解放；释放","v.",["解放","释放"],["liberate-1","release-1","release-2","release-3","release-4"],"The change liberated time for more creative work.","这项改变腾出了时间来做更有创造性的工作。",null,"https://www.merriam-webster.com/dictionary/liberate"]
  ],[{"terms":["使自由","释出","放出"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/liberate","reason":"本批 liberate 按所列词性与构式训练：解放；释放（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("ethnic",[
   ["sense-1","族群的；民族文化的","adj.",["族群的","民族文化的"],["ethnic-1"],"The festival celebrates the region's ethnic diversity.","节日庆祝该地区的族群多样性。",null,"https://www.merriam-webster.com/dictionary/ethnic"]
  ],[{"terms":["人种的","种族的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ethnic","reason":"本批 ethnic 按所列词性与构式训练：族群的；民族文化的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("slum",[
   ["sense-1","贫民区","n.",["贫民区"],["slum-1"],"The project improves housing in the slum.","项目改善了贫民区的住房。",null,"https://www.merriam-webster.com/dictionary/slum"]
  ],[{"terms":["贫民窟","访问贫民区"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/slum","reason":"本批 slum 按所列词性与构式训练：贫民区（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("racial",[
   ["sense-1","种族的","adj.",["种族的"],["racial-1"],"The policy aims to reduce racial discrimination.","政策旨在减少种族歧视。",null,"https://www.merriam-webster.com/dictionary/racial"]
  ],[{"terms":["人种的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/racial","reason":"本批 racial 按所列词性与构式训练：种族的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("clan",[
   ["sense-1","宗族；家族群体","n.",["宗族","家族群体"],["clan-1"],"Members of the clan gathered for the ceremony.","宗族成员聚集参加仪式。",null,"https://www.merriam-webster.com/dictionary/clan"]
  ],[{"terms":["氏族","集团","支"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/clan","reason":"本批 clan 按所列词性与构式训练：宗族；家族群体（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("resident",[
   ["sense-1","居民","n.",["居民"],["resident-1","place-resident"],"Each resident received a notice about the repairs.","每位居民都收到了一份维修通知。",null,"https://www.merriam-webster.com/dictionary/resident"],
   ["sense-2","居住的；常驻的","adj.",["居住的","常驻的"],["resident-2","place-resident"],"A resident artist runs workshops at the centre.","一位驻地艺术家在中心开设工作坊。",null,"https://www.merriam-webster.com/dictionary/resident"]
  ],[{"terms":["常驻程序","居住者","留鸟","居留的","定居的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/resident","reason":"本批 resident 按所列词性与构式训练：居民（n.）、居住的；常驻的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("populate",[
   ["sense-1","居住于；使充满","v.",["居住于","使充满"],["populate-1","live-in-place","pervade-a-space"],"Several species of fish populate the lake.","湖中生活着几种鱼。",null,"https://www.merriam-webster.com/dictionary/populate"]
  ],[{"terms":["构成某地人口","使人口聚居","给计算机列表或数据库填入数据"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/populate","reason":"本批 populate 按所列词性与构式训练：居住于；使充满（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("prefer",[
   ["sense-1","更喜欢；宁愿","v.",["更喜欢","宁愿"],["prefer-1"],"She prefers walking to taking the bus.","她更喜欢步行，而不是坐公交车。",null,"https://www.merriam-webster.com/dictionary/prefer"]
  ],[{"terms":["宁可","较喜欢","提出","给予优先权","优先偿还"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/prefer","reason":"本批 prefer 按所列词性与构式训练：更喜欢；宁愿（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("elect",[
   ["sense-1","选举；选择","v.",["选举","选择"],["elect-1","designate-name","designate-denote","designate-appointed"],"Members elect a new chair every year.","成员每年选举一位新主席。",null,"https://www.merriam-webster.com/dictionary/elect"],
   ["sense-2","当选尚未就职的","adj.",["当选尚未就职的"],["elect-2","designate-name","designate-denote","designate-appointed"],"The president-elect met the outgoing leader.","当选总统会见了即将卸任的领导人。",null,"https://www.merriam-webster.com/dictionary/elect"]
  ],[{"terms":["当选人","被选的人","被选的","选出的","作选择"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/elect","reason":"本批 elect 按所列词性与构式训练：选举；选择（v.）、当选尚未就职的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("entity",[
   ["sense-1","实体；独立存在的单位","n.",["实体","独立存在的单位"],["entity-1"],"The two schools remain separate legal entities.","这两所学校仍是独立的法律实体。",null,"https://www.merriam-webster.com/dictionary/entity"]
  ],[{"terms":["实存物","存在"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/entity","reason":"本批 entity 按所列词性与构式训练：实体；独立存在的单位（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("redundant",[
   ["sense-1","多余的；重复的","adj.",["多余的","重复的"],["redundant-1"],"The editor removed a redundant paragraph.","编辑删去了一个多余的段落。",null,"https://www.merriam-webster.com/dictionary/redundant"],
   ["sense-2","被裁减的；不再需要的","adj.",["被裁减的","不再需要的"],["redundant-2"],"Several workers were made redundant after the closure.","关闭后，几名工人被裁员。",null,"https://www.merriam-webster.com/dictionary/redundant"]
  ],[{"terms":["过多的","冗长的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/redundant","reason":"本批 redundant 按所列词性与构式训练：多余的；重复的（adj.）、被裁减的；不再需要的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("invest",[
   ["sense-1","投资；投入","v.",["投资","投入"],["invest-1"],"The council invested in better cycling routes.","地方议会投资建设更好的自行车道。",null,"https://www.merriam-webster.com/dictionary/invest"],
   ["sense-2","赋予权力或特性","v.",["赋予权力或特性"],["invest-2"],"The office invests its holder with special responsibilities.","这个职位赋予任职者特殊职责。","invest sb with","https://www.merriam-webster.com/dictionary/invest"]
  ],[{"terms":["花费","笼罩","授予","利用"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/invest","reason":"本批 invest 按所列词性与构式训练：投资；投入（v.）、赋予权力或特性（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("company",[
   ["sense-1","公司","n.",["公司"],["company-1","fellowship-1","fellowship-2"],"The company manufactures laboratory equipment.","公司制造实验室设备。",null,"https://www.merriam-webster.com/dictionary/company"],
   ["sense-2","陪伴；同伴","n.",["陪伴","同伴"],["company-2","fellowship-1","fellowship-2"],"She enjoyed the company of her neighbours.","她喜欢邻居们的陪伴。",null,"https://www.merriam-webster.com/dictionary/company"],
   ["sense-3","团体；剧团；连队","n.",["团体","剧团","连队"],["company-3","fellowship-1","fellowship-2"],"The theatre company toured small towns.","剧团巡演了几个小镇。",null,"https://www.merriam-webster.com/dictionary/company"]
  ],[{"terms":["友伴","交往","朋友","一群"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/company","reason":"本批 company 按所列词性与构式训练：公司（n.）、陪伴；同伴（n.）、团体；剧团；连队（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("negotiation",[
   ["sense-1","谈判；协商","n.",["谈判","协商"],["negotiation-1"],"The agreement followed months of negotiation.","协议是在数月谈判后达成的。",null,"https://www.merriam-webster.com/dictionary/negotiation"]
  ],[{"terms":["磋商","交涉"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/negotiation","reason":"本批 negotiation 按所列词性与构式训练：谈判；协商（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("goods",[
   ["sense-1","货物；商品；财物","n.",["货物","商品","财物"],["goods-1","19-related-cargo-goods","commercial-goods","promote-goods-sales"],"The warehouse stores goods awaiting delivery.","仓库储存等待发运的货物。",null,"https://www.merriam-webster.com/dictionary/goods"]
  ],[{"terms":["动产"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/goods","reason":"仅训练 goods 的复数商品或财物义，不把 good 的好、善等形容词或抽象名词混配。 本批 goods 按所列词性与构式训练：货物；商品；财物（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cargo",[
   ["sense-1","船或飞机等运载的货物","n.",["船或飞机等运载的货物"],["cargo-1","19-related-cargo-goods","transported-cargo","cargo-transport-charge","transport-cargo","laden-with-associations"],"The ship carried a cargo of timber.","船上载着一批木材。",null,"https://www.merriam-webster.com/dictionary/cargo"]
  ],[{"terms":["货物","货柜"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cargo","reason":"本批 cargo 按所列词性与构式训练：船或飞机等运载的货物（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("absent",[
   ["sense-1","缺席的；不存在的","adj.",["缺席的","不存在的"],["absent-1"],"Two members were absent from the meeting.","两位成员缺席了会议。",null,"https://www.merriam-webster.com/dictionary/absent"],
   ["sense-2","心不在焉的","adj.",["心不在焉的"],["absent-2"],"He gave an absent smile while reading.","他读书时心不在焉地笑了笑。",null,"https://www.merriam-webster.com/dictionary/absent"]
  ],[{"terms":["不在的","缺乏的","漫不经心的","使缺席"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/absent","reason":"当前形容词 /ˈæbsənt/ 不混入通常另一重音的自使缺席动词。 本批 absent 按所列词性与构式训练：缺席的；不存在的（adj.）、心不在焉的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("guarantee",[
   ["sense-1","保证；保修承诺","n.",["保证","保修承诺"],["guarantee-1","assure-reassure","assure-ensure"],"The appliance comes with a two-year guarantee.","电器附有两年保修承诺。",null,"https://www.merriam-webster.com/dictionary/guarantee"],
   ["sense-2","保证；担保","v.",["保证","担保"],["guarantee-2","assure-reassure","assure-ensure"],"The design guarantees easy access to the controls.","设计确保控制装置易于操作。",null,"https://www.merriam-webster.com/dictionary/guarantee"]
  ],[{"terms":["抵押品","保证书"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/guarantee","reason":"本批 guarantee 按所列词性与构式训练：保证；保修承诺（n.）、保证；担保（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("rely",[
   ["sense-1","依赖；信赖","v.",["依赖","信赖"],["rely-1","depend-1","depend-2"],"The team relies on accurate weather reports.","团队依靠准确的天气报告。","rely on","https://www.merriam-webster.com/dictionary/rely"]
  ],[{"terms":["信任"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/rely","reason":"本批 rely 按所列词性与构式训练：依赖；信赖（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("murder",[
   ["sense-1","谋杀案；谋杀行为","n.",["谋杀"],["murder-1","19-related-murder-murderer"],"The novel begins with an investigation into a murder.","小说从调查一桩谋杀案开始。",null,"https://www.merriam-webster.com/dictionary/murder"],
   ["sense-2","谋杀","v.",["谋杀"],["murder-2","19-related-murder-murderer"],"The court found that the victim had been murdered.","法庭认定受害者遭到了谋杀。",null,"https://www.merriam-webster.com/dictionary/murder"]
  ],[{"terms":["损毁","破坏","犯杀人罪"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/murder","reason":"本批 murder 按所列词性与构式训练：谋杀（n.）、谋杀（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("trick",[
   ["sense-1","诡计；恶作剧","n.",["诡计","恶作剧"],["trick-1","19-related-fraud-trick-liar-lie","deceive-mislead","false-impression"],"The children played a harmless trick on their uncle.","孩子们对叔叔开了个无害的玩笑。",null,"https://www.merriam-webster.com/dictionary/trick"],
   ["sense-2","技巧；窍门","n.",["技巧","窍门"],["trick-2","19-related-fraud-trick-liar-lie","deceive-mislead","false-impression"],"The trick is to keep the blade at a steady angle.","窍门是让刀刃保持稳定角度。",null,"https://www.merriam-webster.com/dictionary/trick"],
   ["sense-3","欺骗","v.",["欺骗"],["trick-3","19-related-fraud-trick-liar-lie","deceive-mislead","false-impression"],"The caller tricked him into revealing the password.","来电者骗他说出了密码。","trick sb into","https://www.merriam-webster.com/dictionary/trick"]
  ],[{"terms":["欺诈","谋略","习惯","决窍","愚弄","装饰","哄骗","戏弄","有决窍的","特技的","欺诈的","漂亮的","靠不住的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/trick","reason":"本批 trick 按所列词性与构式训练：诡计；恶作剧（n.）、技巧；窍门（n.）、欺骗（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("confess",[
   ["sense-1","承认；忏悔","v.",["承认","忏悔"],["confess-1","19-related-confess-confession","admit-acknowledge","admit-allow-entry","admit-hospital","admit-allow-possibility"],"She confessed that she had lost the key.","她承认自己弄丢了钥匙。",null,"https://www.merriam-webster.com/dictionary/confess"]
  ],[{"terms":["坦白","供认"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/confess","reason":"本批 confess 按所列词性与构式训练：承认；忏悔（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fraud",[
   ["sense-1","欺诈；骗局","n.",["欺诈","骗局"],["fraud-1","19-related-fraud-trick-liar-lie","deceive-mislead","false-impression"],"The investigation uncovered a serious fraud.","调查揭露了一桩严重欺诈。",null,"https://www.merriam-webster.com/dictionary/fraud"],
   ["sense-2","骗子；冒牌货","n.",["骗子","冒牌货"],["fraud-2","19-related-fraud-trick-liar-lie","deceive-mislead","false-impression"],"The supposed expert turned out to be a fraud.","所谓的专家结果是个骗子。",null,"https://www.merriam-webster.com/dictionary/fraud"]
  ],[{"terms":["欺骗","诡计","舞弊"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fraud","reason":"本批 fraud 按所列词性与构式训练：欺诈；骗局（n.）、骗子；冒牌货（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("reconcile",[
   ["sense-1","使和解","v.",["使和解"],["reconcile-1","resolve-solve","resolve-decide","resolve-analyse","resolve-determination","settle-reside","settle-resolve","17-resolve","settle-pay","settle-agreement","settle-sink","settle-calm","quiet-calm-verb","quiet-cause","settle-comfortable"],"The mediator helped reconcile the two neighbours.","调解员帮助两位邻居和解。",null,"https://www.merriam-webster.com/dictionary/reconcile"],
   ["sense-2","使一致；调和","v.",["使一致","调和"],["reconcile-2","resolve-solve","resolve-decide","resolve-analyse","resolve-determination","settle-reside","settle-resolve","17-resolve","settle-pay","settle-agreement","settle-sink","settle-calm","quiet-calm-verb","quiet-cause","settle-comfortable"],"The theory reconciles the apparently conflicting results.","这个理论调和了看似矛盾的结果。",null,"https://www.merriam-webster.com/dictionary/reconcile"],
   ["sense-3","使接受不愉快的事实","v.",["使接受不愉快的事实"],["reconcile-3","resolve-solve","resolve-decide","resolve-analyse","resolve-determination","settle-reside","settle-resolve","17-resolve","settle-pay","settle-agreement","settle-sink","settle-calm","quiet-calm-verb","quiet-cause","settle-comfortable"],"She reconciled herself to the delay.","她接受了延误的事实。","reconcile oneself to","https://www.merriam-webster.com/dictionary/reconcile"],
   ["sense-4","核对账目使一致","v.",["核对账目使一致"],["reconcile-4","resolve-solve","resolve-decide","resolve-analyse","resolve-determination","settle-reside","settle-resolve","17-resolve","settle-pay","settle-agreement","settle-sink","settle-calm","quiet-calm-verb","quiet-cause","settle-comfortable"],"The accountant reconciled the bank statement with the records.","会计核对了银行对账单与记录，使二者一致。",null,"https://www.merriam-webster.com/dictionary/reconcile"]
  ],[{"terms":["调解","使接受","使顺从","核对账目"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reconcile","reason":"本批 reconcile 按所列词性与构式训练：使和解（v.）、使一致；调和（v.）、使接受不愉快的事实（v.）、核对账目使一致（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("liar",[
   ["sense-1","说谎者","n.",["说谎者"],["liar-1","19-related-fraud-trick-liar-lie"],"The evidence showed that the witness was a liar.","证据表明证人是个说谎者。",null,"https://www.merriam-webster.com/dictionary/liar"]
  ],[]);
  entry("lie",[
   ["sense-1","躺；平放","v.",["躺","平放"],["lie-1","19-related-fraud-trick-liar-lie"],"The dog lay quietly beside the door.","狗静静地躺在门旁。",null,"https://www.merriam-webster.com/dictionary/lie"],
   ["sense-2","位于；存在","v.",["位于","存在"],["lie-2","19-related-fraud-trick-liar-lie"],"The solution lies in better communication.","解决办法在于改善沟通。",null,"https://www.merriam-webster.com/dictionary/lie"],
   ["sense-3","说谎","v.",["说谎"],["lie-3","19-related-fraud-trick-liar-lie"],"He lied about where he had been.","他谎报了自己去过的地方。",null,"https://www.merriam-webster.com/dictionary/lie"],
   ["sense-4","谎言","n.",["谎言"],["lie-4","19-related-fraud-trick-liar-lie"],"Her account contained a deliberate lie.","她的叙述中包含一个故意编造的谎言。",null,"https://www.merriam-webster.com/dictionary/lie"]
  ],[{"terms":["假象","位置","躺着","展现","停泊","谎骗"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/lie","reason":"躺卧与说谎同读 /laɪ/ 但词源和变位不同，分别示例；lay/lain 与 lied 不互换。 本批 lie 按所列词性与构式训练：躺；平放（v.）、位于；存在（v.）、说谎（v.）、谎言（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("murderer",[
   ["sense-1","谋杀者","n.",["谋杀者"],["murderer-1","19-related-murder-murderer"],"The detective searched for evidence identifying the murderer.","侦探寻找能确定谋杀者身份的证据。",null,"https://www.merriam-webster.com/dictionary/murderer"]
  ],[{"terms":["凶手","杀人者","谋害者","谋杀犯"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/murderer","reason":"本批 murderer 按所列词性与构式训练：谋杀者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("confession",[
   ["sense-1","承认；供认；忏悔","n.",["承认","供认","忏悔"],["confession-1","19-related-confess-confession"],"The letter contained a confession of the earlier mistake.","信中承认了先前的错误。",null,"https://www.merriam-webster.com/dictionary/confession"],
   ["sense-2","信仰宣言；信条","n.",["信仰宣言","信条"],["confession-2","19-related-confess-confession"],"The historian compared the confessions of several religious communities.","历史学家比较了几个宗教团体的信仰宣言。",null,"https://www.merriam-webster.com/dictionary/confession"]
  ],[{"terms":["坦白","招供","自白","自认有罪"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/confession","reason":"本批 confession 按所列词性与构式训练：承认；供认；忏悔（n.）、信仰宣言；信条（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("accredit",[
   ["sense-1","认可；授予资格","v.",["认可","授予资格"],["accredit-1"],"The agency accredits training centres that meet its standards.","机构认可符合其标准的培训中心。",null,"https://www.merriam-webster.com/dictionary/accredit"],
   ["sense-2","把……归于；认为具有","v.",["把……归于","认为具有"],["accredit-2"],"The discovery is accredited to a small team of researchers.","这项发现被归功于一个小型研究团队。","accredit sth to","https://www.merriam-webster.com/dictionary/accredit"]
  ],[{"terms":["信托","确认","归结于","委派","发行信用证","委托"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/accredit","reason":"本批 accredit 按所列词性与构式训练：认可；授予资格（v.）、把……归于；认为具有（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cease",[
   ["sense-1","停止；终止","v.",["停止","终止"],["cease-1"],"The noise ceased shortly after midnight.","噪声在午夜后不久停止了。",null,"https://www.merriam-webster.com/dictionary/cease"]
  ],[{"terms":["终了"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cease","reason":"本批 cease 按所列词性与构式训练：停止；终止（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("opponent",[
   ["sense-1","对手；反对者","n.",["对手","反对者"],["opponent-1","competitor","formidable-equal","compete-match","competing-attributive"],"Her opponent proposed a different solution.","她的对手提出了不同的解决办法。",null,"https://www.merriam-webster.com/dictionary/opponent"]
  ],[{"terms":["敌手"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/opponent","reason":"本批 opponent 按所列词性与构式训练：对手；反对者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("halter",[
   ["sense-1","笼头；牵牲畜的绳带","n.",["笼头","牵牲畜的绳带"],["halter-1"],"She fitted a halter to the young horse.","她给小马戴上笼头。",null,"https://www.merriam-webster.com/dictionary/halter"],
   ["sense-2","挂颈式上衣","n.",["挂颈式上衣"],["halter-2"],"The costume included a simple cotton halter.","演出服包括一件简洁的棉质挂颈上衣。",null,"https://www.merriam-webster.com/dictionary/halter"]
  ],[{"terms":["缰绳","绞刑","绞索"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/halter","reason":"本批 halter 按所列词性与构式训练：笼头；牵牲畜的绳带（n.）、挂颈式上衣（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("prevent",[
   ["sense-1","防止；阻止","v.",["防止","阻止"],["prevent-1"],"The barrier prevents vehicles from entering the path.","护栏阻止车辆进入小路。",null,"https://www.merriam-webster.com/dictionary/prevent"]
  ],[{"terms":["预防","妨碍"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/prevent","reason":"本批 prevent 按所列词性与构式训练：防止；阻止（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("betray",[
   ["sense-1","背叛；出卖","v.",["背叛","出卖"],["betray-1","19-related-betray-betrayal","disclose-make-known","disclose-show"],"The officer refused to betray his colleagues.","军官拒绝出卖同僚。",null,"https://www.merriam-webster.com/dictionary/betray"],
   ["sense-2","无意泄露；暴露","v.",["无意泄露","暴露"],["betray-2","19-related-betray-betrayal","disclose-make-known","disclose-show"],"Her voice betrayed her anxiety.","她的声音暴露了焦虑。",null,"https://www.merriam-webster.com/dictionary/betray"]
  ],[{"terms":["辜负","泄漏"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/betray","reason":"本批 betray 按所列词性与构式训练：背叛；出卖（v.）、无意泄露；暴露（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("prohibition",[
   ["sense-1","禁止；禁令","n.",["禁止","禁令"],["prohibition-1"],"The prohibition applies to fishing near the dam.","禁令适用于大坝附近的捕鱼活动。",null,"https://www.merriam-webster.com/dictionary/prohibition"]
  ],[]);
  entry("betrayal",[
   ["sense-1","背叛；出卖","n.",["背叛","出卖"],["betrayal-1","19-related-betray-betrayal"],"The disclosure was a betrayal of their trust.","这次泄露背叛了他们的信任。",null,"https://www.merriam-webster.com/dictionary/betrayal"]
  ],[{"terms":["辜负","通敌","背信"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/betrayal","reason":"本批 betrayal 按所列词性与构式训练：背叛；出卖（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bel",[
   ["sense-1","贝尔（十个分贝）","n.",["贝尔（十个分贝）"],["bel-1"],"One bel is equal to ten decibels.","一贝尔等于十分贝。",null,"https://www.merriam-webster.com/dictionary/bel"]
  ],[{"terms":["报警符","贝(响度单位)"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bel","reason":"贝尔为对数单位，一贝尔等于十分贝；不是 bell 铃，也不把它当成 decibel 的完整拼写。 本批 bel 按所列词性与构式训练：贝尔（十个分贝）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("terrorist",[
   ["sense-1","恐怖分子","n.",["恐怖分子"],["terrorist-1"],"The documentary examines how the terrorist was identified.","纪录片考察了恐怖分子如何被确认身份。",null,"https://www.merriam-webster.com/dictionary/terrorist"]
  ],[{"terms":["恐怖份子","恐怖主义"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/terrorist","reason":"本批 terrorist 按所列词性与构式训练：恐怖分子（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("terrible",[
   ["sense-1","糟糕的；可怕的","adj.",["糟糕的","可怕的"],["terrible-1","horrible-awful","horrible-unpleasant","unpleasant-experience","nasty-unpleasant"],"The storm caused terrible damage to the crops.","风暴给庄稼造成了严重破坏。",null,"https://www.merriam-webster.com/dictionary/terrible"]
  ],[{"terms":["令人恐惧的","极坏的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/terrible","reason":"本批 terrible 按所列词性与构式训练：糟糕的；可怕的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("friendship",[
   ["sense-1","友谊","n.",["友谊"],["friendship-1"],"Their friendship began during the expedition.","他们的友谊始于那次考察。",null,"https://www.merriam-webster.com/dictionary/friendship"]
  ],[{"terms":["友爱","友善"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/friendship","reason":"本批 friendship 按所列词性与构式训练：友谊（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("affection",[
   ["sense-1","喜爱；深情","n.",["喜爱","深情"],["affection-1"],"She spoke about the old town with affection.","她满怀深情地谈起古镇。",null,"https://www.merriam-webster.com/dictionary/affection"]
  ],[{"terms":["影响","病","情感","倾向","疾患","病变","感情"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/affection","reason":"本批 affection 按所列词性与构式训练：喜爱；深情（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("stranger",[
   ["sense-1","陌生人；不熟悉者","n.",["陌生人","不熟悉者"],["stranger-1","foreigner-1"],"A stranger asked for directions to the library.","一位陌生人问了去图书馆的路。",null,"https://www.merriam-webster.com/dictionary/stranger"]
  ],[{"terms":["门外汉","局外人","非当事人","第三者"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/stranger","reason":"本批 stranger 按所列词性与构式训练：陌生人；不熟悉者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("partner",[
   ["sense-1","伙伴；合伙人；伴侣","n.",["伙伴","合伙人","伴侣"],["partner-1","work-associate","accompanying-person","subject-reference-book"],"She discussed the decision with her business partner.","她和商业合伙人讨论了这个决定。",null,"https://www.merriam-webster.com/dictionary/partner"],
   ["sense-2","与……合作或搭档","v.",["与……合作或搭档"],["partner-2","work-associate","accompanying-person","subject-reference-book"],"The museum partnered with local schools.","博物馆与当地学校合作。",null,"https://www.merriam-webster.com/dictionary/partner"]
  ],[{"terms":["股东","与...合伙","组成一对","做伙伴","当助手"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/partner","reason":"本批 partner 按所列词性与构式训练：伙伴；合伙人；伴侣（n.）、与……合作或搭档（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("hero",[
   ["sense-1","英雄；受敬佩的人","n.",["英雄","受敬佩的人"],["hero-1"],"The rescuer became a local hero.","救援者成为当地英雄。",null,"https://www.merriam-webster.com/dictionary/hero"],
   ["sense-2","主角","n.",["主角"],["hero-2"],"The hero of the novel is a young doctor.","小说的主角是一位年轻医生。",null,"https://www.merriam-webster.com/dictionary/hero"]
  ],[{"terms":["超越常人者","男主角"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/hero","reason":"本批 hero 按所列词性与构式训练：英雄；受敬佩的人（n.）、主角（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("council",[
   ["sense-1","议会；委员会","n.",["议会","委员会"],["council-1","committee-group"],"The council approved the new playground.","地方议会批准了新游乐场。",null,"https://www.merriam-webster.com/dictionary/council"]
  ],[{"terms":["会议"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/council","reason":"本批 council 按所列词性与构式训练：议会；委员会（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("specialist",[
   ["sense-1","专家；专科医生","n.",["专家","专科医生"],["specialist-1","operating-doctor"],"The museum consulted a specialist in old maps.","博物馆咨询了一位古地图专家。",null,"https://www.merriam-webster.com/dictionary/specialist"],
   ["sense-2","专门的；专业的","n.（作定语）",["专门的","专业的"],["specialist-2","operating-doctor"],"The repair requires specialist equipment.","维修需要专门设备。",null,"https://www.merriam-webster.com/dictionary/specialist"]
  ],[{"terms":["专门医师","专家的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/specialist","reason":"本批 specialist 按所列词性与构式训练：专家；专科医生（n.）、专门的；专业的（n.（作定语））。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("director",[
   ["sense-1","主管；董事","n.",["主管","董事"],["director-1"],"The director approved the research budget.","主管批准了研究预算。",null,"https://www.merriam-webster.com/dictionary/director"],
   ["sense-2","导演","n.",["导演"],["director-2"],"The director rehearsed the final scene.","导演排练了最后一场戏。",null,"https://www.merriam-webster.com/dictionary/director"]
  ],[{"terms":["寻向偶极子","指挥仪"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/director","reason":"本批 director 按所列词性与构式训练：主管；董事（n.）、导演（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("actor",[
   ["sense-1","演员","n.",["演员"],["actor-1"],"The actor studied the character's background.","演员研究了角色的背景。",null,"https://www.merriam-webster.com/dictionary/actor"],
   ["sense-2","参与者；行动主体","n.",["参与者","行动主体"],["actor-2"],"The report considers the role of local actors in development.","报告考虑了当地参与者在发展中的作用。",null,"https://www.merriam-webster.com/dictionary/actor"]
  ],[{"terms":["男演员","行动者","作用物","反应物"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/actor","reason":"本批 actor 按所列词性与构式训练：演员（n.）、参与者；行动主体（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("nurse",[
   ["sense-1","护士；护理者","n.",["护士","护理者"],["nurse-1","care-attention","care-caution","care-worry","care-be-concerned","care-look-after"],"The nurse checked the patient's temperature.","护士测量了病人的体温。",null,"https://www.merriam-webster.com/dictionary/nurse"],
   ["sense-2","护理；照料","v.",["护理","照料"],["nurse-2","care-attention","care-caution","care-worry","care-be-concerned","care-look-after"],"She nursed the injured bird back to health.","她照料受伤的鸟，使它恢复健康。",null,"https://www.merriam-webster.com/dictionary/nurse"],
   ["sense-3","心怀；一直怀有","v.",["心怀","一直怀有"],["nurse-3","care-attention","care-caution","care-worry","care-be-concerned","care-look-after"],"He nursed a hope of returning to the island.","他一直怀着重返岛屿的希望。",null,"https://www.merriam-webster.com/dictionary/nurse"]
  ],[{"terms":["保姆","奶妈","看护","照顾","培养","喂奶","看护病人"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/nurse","reason":"本批 nurse 按所列词性与构式训练：护士；护理者（n.）、护理；照料（v.）、心怀；一直怀有（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("amaze",[
   ["sense-1","使惊奇","v.",["使惊奇"],["amaze-1","19-related-amaze-astound","astonish-surprise"],"The speed of the repair amazed the visitors.","维修速度让来访者惊奇。",null,"https://www.merriam-webster.com/dictionary/amaze"]
  ],[{"terms":["使惊愕","使大为吃惊"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/amaze","reason":"本批 amaze 按所列词性与构式训练：使惊奇（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("neglect",[
   ["sense-1","忽视；疏于照料","v.",["忽视","疏于照料"],["neglect-1","19-related-neglect-disregard","ignore-not-notice"],"The owner neglected the old garden.","主人疏于照料老花园。",null,"https://www.merriam-webster.com/dictionary/neglect"],
   ["sense-2","疏忽；失于照料","n.",["疏忽","失于照料"],["neglect-2","19-related-neglect-disregard","ignore-not-notice"],"Years of neglect damaged the building.","多年的失修损坏了建筑。",null,"https://www.merriam-webster.com/dictionary/neglect"]
  ],[{"terms":["忽略","漏做","不顾"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/neglect","reason":"本批 neglect 按所列词性与构式训练：忽视；疏于照料（v.）、疏忽；失于照料（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("involve",[
   ["sense-1","涉及；包括","v.",["涉及","包括"],["involve-1"],"The work involves careful measurement.","工作包括细致测量。",null,"https://www.merriam-webster.com/dictionary/involve"],
   ["sense-2","使参与；使卷入","v.",["使参与","使卷入"],["involve-2"],"The project involved residents in the design process.","项目让居民参与设计过程。",null,"https://www.merriam-webster.com/dictionary/involve"]
  ],[{"terms":["使陷于","潜心于","包围","累及","牵涉","包含"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/involve","reason":"本批 involve 按所列词性与构式训练：涉及；包括（v.）、使参与；使卷入（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("disregard",[
   ["sense-1","忽视；不理会","v.",["忽视","不理会"],["disregard-1","19-related-neglect-disregard","ignore-not-notice"],"The driver disregarded the warning sign.","司机无视了警告标志。",null,"https://www.merriam-webster.com/dictionary/disregard"],
   ["sense-2","漠视；不顾","n.",["漠视","不顾"],["disregard-2","19-related-neglect-disregard","ignore-not-notice"],"The report criticised the disregard for safety.","报告批评了对安全的漠视。",null,"https://www.merriam-webster.com/dictionary/disregard"]
  ],[]);
  entry("irony",[
   ["sense-1","反语；讽刺","n.",["反语","讽刺"],["irony-1"],"The poem uses irony to question empty promises.","诗歌用反语质疑空洞承诺。",null,"https://www.merriam-webster.com/dictionary/irony"],
   ["sense-2","出人意料的矛盾结果","n.",["出人意料的矛盾结果"],["irony-2"],"The irony was that the expert forgot the simplest rule.","讽刺的是，专家忘记了最简单的规则。",null,"https://www.merriam-webster.com/dictionary/irony"]
  ],[{"terms":["具有讽刺意味的事"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/irony","reason":"本批 irony 按所列词性与构式训练：反语；讽刺（n.）、出人意料的矛盾结果（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("marvelous",[
   ["sense-1","极好的；令人惊叹的","adj.",["极好的","令人惊叹的"],["marvelous-1","splendid-magnificent","17-shine","splendid-excellent","exceptional-excellence","fantastic-excellent","excellent-quality","fantastic-imaginary","fantastic-unbelievable"],"The guide offered a marvelous view of the night sky.","这次导览呈现了令人惊叹的夜空景象。",null,"https://www.merriam-webster.com/dictionary/marvelous"]
  ],[{"terms":["令人惊异的","了不起的","不平常的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/marvelous","reason":"本批 marvelous 按所列词性与构式训练：极好的；令人惊叹的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("astound",[
   ["sense-1","使震惊；使大吃一惊","v.",["使震惊","使大吃一惊"],["astound-1","19-related-amaze-astound","astonish-surprise"],"The discovery astounded the whole team.","这个发现使整个团队大吃一惊。",null,"https://www.merriam-webster.com/dictionary/astound"]
  ],[{"terms":["使惊骇"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/astound","reason":"本批 astound 按所列词性与构式训练：使震惊；使大吃一惊（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("overlook",[
   ["sense-1","漏看；忽略","v.",["漏看","忽略"],["overlook-1","miss-1","miss-2","miss-3","miss-4","miss-5","miss-6","ignore-not-notice"],"The inspection overlooked a small crack.","检查漏掉了一条细裂缝。",null,"https://www.merriam-webster.com/dictionary/overlook"],
   ["sense-2","俯瞰","v.",["俯瞰"],["overlook-2","miss-1","miss-2","miss-3","miss-4","miss-5","miss-6","ignore-not-notice"],"The terrace overlooks the harbour.","露台俯瞰着港口。",null,"https://www.merriam-webster.com/dictionary/overlook"],
   ["sense-3","宽容；不计较","v.",["宽容","不计较"],["overlook-3","miss-1","miss-2","miss-3","miss-4","miss-5","miss-6","ignore-not-notice"],"She was willing to overlook the minor mistake.","她愿意不计较这个小错误。",null,"https://www.merriam-webster.com/dictionary/overlook"]
  ],[{"terms":["远眺","没注意到","眺望","俯瞰到的景色"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/overlook","reason":"本批 overlook 按所列词性与构式训练：漏看；忽略（v.）、俯瞰（v.）、宽容；不计较（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bias",[
   ["sense-1","偏见；偏向","n.",["偏见","偏向"],["bias-1","unfair-prejudgment","harm-interests"],"The review sought to reduce selection bias.","审查力求减少选择偏差。",null,"https://www.merriam-webster.com/dictionary/bias"],
   ["sense-2","使有偏向","v.",["使有偏向"],["bias-2","unfair-prejudgment","harm-interests"],"The wording may bias the participants' answers.","措辞可能使参与者的回答产生偏向。",null,"https://www.merriam-webster.com/dictionary/bias"],
   ["sense-3","斜向纹理；斜裁方向","n.",["斜向纹理","斜裁方向"],["bias-3","unfair-prejudgment","harm-interests"],"Cut the fabric on the bias for a softer drape.","沿斜纹方向裁布，使垂感更柔和。","on the bias","https://www.merriam-webster.com/dictionary/bias"]
  ],[{"terms":["斜纹","偏斜的","偏斜","使有偏见","偏流","偏压","偏磁","偏离"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bias","reason":"本批 bias 按所列词性与构式训练：偏见；偏向（n.）、使有偏向（v.）、斜向纹理；斜裁方向（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("expel",[
   ["sense-1","驱逐；排出","v.",["驱逐","排出"],["expel-1"],"The device expels warm air through a vent.","装置通过通风口排出热空气。",null,"https://www.merriam-webster.com/dictionary/expel"]
  ],[{"terms":["逐出","开除","排除","迫出"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/expel","reason":"本批 expel 按所列词性与构式训练：驱逐；排出（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("overweight",[
   ["sense-1","超重的","adj.",["超重的"],["overweight-1"],"The suitcase was overweight at check-in.","办理登机时，行李箱超重了。",null,"https://www.merriam-webster.com/dictionary/overweight"]
  ],[{"terms":["超过重量","过重","优势","超过重量的","使超重","重于","过于重视"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/overweight","reason":"本批 overweight 按所列词性与构式训练：超重的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("patient",[
   ["sense-1","病人；患者","n.",["病人","患者"],["patient-1"],"The patient waited quietly for the examination.","病人安静地等待检查。",null,"https://www.merriam-webster.com/dictionary/patient"],
   ["sense-2","有耐心的；能忍耐的","adj.",["有耐心的","能忍耐的"],["patient-2"],"The teacher was patient with beginners.","老师对初学者很有耐心。",null,"https://www.merriam-webster.com/dictionary/patient"]
  ],[{"terms":["承受者","忍耐的","容忍的","有耐性的","坚忍的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/patient","reason":"本批 patient 按所列词性与构式训练：病人；患者（n.）、有耐心的；能忍耐的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("dysfunction",[
   ["sense-1","功能障碍；运作失常","n.",["功能障碍","运作失常"],["dysfunction-1"],"The study examines dysfunction in the communication system.","研究考察通信系统的运作失常。",null,"https://www.merriam-webster.com/dictionary/dysfunction"]
  ],[{"terms":["机能不良","机能障碍"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dysfunction","reason":"本批 dysfunction 按所列词性与构式训练：功能障碍；运作失常（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cancer",[
   ["sense-1","癌症；恶性肿瘤","n.",["癌症","恶性肿瘤"],["cancer-1"],"The laboratory studies how cancer cells grow.","实验室研究癌细胞如何生长。",null,"https://www.merriam-webster.com/dictionary/cancer"]
  ],[{"terms":["癌"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cancer","reason":"本批 cancer 按所列词性与构式训练：癌症；恶性肿瘤（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fever",[
   ["sense-1","发热；发烧","n.",["发热","发烧"],["fever-1"],"The child stayed home with a fever.","孩子因发烧留在家中。",null,"https://www.merriam-webster.com/dictionary/fever"],
   ["sense-2","狂热；高度兴奋","n.",["狂热","高度兴奋"],["fever-2"],"Election fever spread through the town.","选举热潮席卷了小镇。",null,"https://www.merriam-webster.com/dictionary/fever"]
  ],[{"terms":["热病","热"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fever","reason":"本批 fever 按所列词性与构式训练：发热；发烧（n.）、狂热；高度兴奋（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("pimple",[
   ["sense-1","丘疹；粉刺","n.",["丘疹","粉刺"],["pimple-1"],"A small pimple appeared on his chin.","他的下巴上长了一颗小粉刺。",null,"https://www.merriam-webster.com/dictionary/pimple"]
  ],[{"terms":["小脓疱"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pimple","reason":"本批 pimple 按所列词性与构式训练：丘疹；粉刺（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("choke",[
   ["sense-1","窒息；使噎住","v.",["窒息","使噎住"],["choke-1","block-solid-piece","block-city-area","block-building","block-obstruct"],"The child began to choke on a piece of food.","孩子被一块食物噎住了。",null,"https://www.merriam-webster.com/dictionary/choke"],
   ["sense-2","堵塞；阻碍","v.",["堵塞","阻碍"],["choke-2","block-solid-piece","block-city-area","block-building","block-obstruct"],"Leaves choked the narrow drain.","树叶堵塞了狭窄的排水沟。",null,"https://www.merriam-webster.com/dictionary/choke"],
   ["sense-3","紧张失常","v.",["紧张失常"],["choke-3","block-solid-piece","block-city-area","block-building","block-obstruct"],"The experienced player choked at the final stage.","经验丰富的选手在最后阶段因紧张而失常。",null,"https://www.merriam-webster.com/dictionary/choke"]
  ],[{"terms":["阻塞","噎","抑制","阻气门"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/choke","reason":"本批 choke 按所列词性与构式训练：窒息；使噎住（v.）、堵塞；阻碍（v.）、紧张失常（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("injure",[
   ["sense-1","使受伤；损害","v.",["使受伤","损害"],["injure-1","19-related-injure-hurt","injury-cut","injure-physically","hurt-feelings","damage-harm-noun","damage-harm-verb","damage-compensation"],"The fall injured his wrist.","摔倒使他的手腕受伤。",null,"https://www.merriam-webster.com/dictionary/injure"]
  ],[{"terms":["伤害","使受冤屈","损伤"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/injure","reason":"本批 injure 按所列词性与构式训练：使受伤；损害（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("hurt",[
   ["sense-1","疼痛；使受伤","v.",["疼痛","使受伤"],["hurt-1","19-related-injure-hurt","damage-harm-noun","damage-harm-verb","damage-compensation"],"Her shoulder still hurts after the fall.","摔倒后她的肩膀仍然疼。",null,"https://www.merriam-webster.com/dictionary/hurt"],
   ["sense-2","伤害感情；损害","v.",["伤害感情","损害"],["hurt-2","19-related-injure-hurt","damage-harm-noun","damage-harm-verb","damage-compensation"],"The careless remark hurt his feelings.","不经意的话伤害了他的感情。",null,"https://www.merriam-webster.com/dictionary/hurt"],
   ["sense-3","受伤的；难过的","adj.",["受伤的","难过的"],["hurt-3","19-related-injure-hurt","damage-harm-noun","damage-harm-verb","damage-compensation"],"She felt hurt by the unfair criticism.","不公平的批评使她感到难过。",null,"https://www.merriam-webster.com/dictionary/hurt"],
   ["sense-4","伤害；痛苦","n.",["伤害","痛苦"],["hurt-4","19-related-injure-hurt","damage-harm-noun","damage-harm-verb","damage-compensation"],"She tried to put the old hurt behind her.","她努力把过去的伤痛抛在脑后。",null,"https://www.merriam-webster.com/dictionary/hurt"]
  ],[{"terms":["创伤","(使)伤心","危害","刺痛"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/hurt","reason":"本批 hurt 按所列词性与构式训练：疼痛；使受伤（v.）、伤害感情；损害（v.）、受伤的；难过的（adj.）、伤害；痛苦（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fluent",[
   ["sense-1","流利的；流畅的","adj.",["流利的","流畅的"],["fluent-1"],"He is fluent in both languages.","他能流利地使用这两种语言。",null,"https://www.merriam-webster.com/dictionary/fluent"]
  ],[]);
  entry("noun",[
   ["sense-1","名词","n.",["名词"],["noun-1"],"The noun identifies the object being discussed.","名词指明正在讨论的对象。",null,"https://www.merriam-webster.com/dictionary/noun"]
  ],[]);
  entry("narrate",[
   ["sense-1","叙述；讲述","v.",["叙述","讲述"],["narrate-1","relate-connection","17-related","relate-narrate","relate-understand"],"She narrated the events in the order they occurred.","她按发生顺序叙述了事件。",null,"https://www.merriam-webster.com/dictionary/narrate"]
  ],[{"terms":["说故事","说明"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/narrate","reason":"本批 narrate 按所列词性与构式训练：叙述；讲述（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("verb",[
   ["sense-1","动词","n.",["动词"],["verb-1"],"The verb expresses the action in the sentence.","动词表达句子中的动作。",null,"https://www.merriam-webster.com/dictionary/verb"]
  ],[]);
 }
 if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch19=register;
})(typeof window==='object'?window:globalThis);
