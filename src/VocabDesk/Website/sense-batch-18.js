/* Batch 18: reviewed public learning scope, original bilingual examples.
 * Source entries were read during review. No learner state is included. */
(function(scope){
 'use strict';
 function register(add){
  function entry(word,rows,refs){
   const e=add(word,rows,refs);e.reviewDate='2026-11-14';
   e.senses.forEach((s,i)=>s.source=rows[i][8]);
   e.sources=[...new Set([...rows.map(r=>r[8]),...refs.map(r=>r.source)])];
   return e;
  }
  entry("granite",[
   ["sense-1","花岗岩","n.",["花岗岩"],["granite-1"],"The steps were cut from local granite.","台阶由当地花岗岩凿成。",null,"https://www.merriam-webster.com/dictionary/granite"]
  ],[]);
  entry("endangered",[
   ["sense-1","濒危的","adj.",["濒危的"],["endangered-1","endanger-risk"],"The reserve protects several endangered birds.","保护区保护着几种濒危鸟类。",null,"https://www.merriam-webster.com/dictionary/endangered"]
  ],[{"terms":["有生命危险的","濒临灭绝的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/endangered","reason":"本批 endangered 的教学范围明确为：濒危的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("destroy",[
   ["sense-1","摧毁；毁灭","v.",["摧毁","毁灭"],["destroy-1","18-near-destroy-demolish","ruin-destroy","destruction-damage","ruin-spoil","experience-spoil","ruin-destruction","ruin-remains","cause-major-destruction","severe-emotional-distress"],"The fire destroyed the wooden bridge.","大火烧毁了木桥。",null,"https://www.merriam-webster.com/dictionary/destroy"]
  ],[{"terms":["破坏","毁坏","消灭"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/destroy","reason":"本批 destroy 的教学范围明确为：摧毁；毁灭（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("magnetic",[
   ["sense-1","磁的；有磁性的","adj.",["磁的","有磁性的"],["magnetic-1"],"The instrument measures the magnetic field.","仪器测量磁场。",null,"https://www.merriam-webster.com/dictionary/magnetic"],
   ["sense-2","有吸引力的","adj.",["有吸引力的"],["magnetic-2"],"Her magnetic personality drew people to the club.","她富有吸引力的个性把人们吸引到了俱乐部。",null,"https://www.merriam-webster.com/dictionary/magnetic"]
  ],[{"terms":["催眠术的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/magnetic","reason":"本批 magnetic 的教学范围明确为：磁的；有磁性的（adj.）、有吸引力的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("gale",[
   ["sense-1","大风；强风","n.",["大风","强风"],["gale-1"],"The gale tore branches from the trees.","强风刮断了树枝。",null,"https://www.merriam-webster.com/dictionary/gale"],
   ["sense-2","一阵强烈的情绪或声响","n.",["一阵强烈的情绪或声响"],["gale-2"],"The joke produced gales of laughter.","笑话引发了阵阵大笑。",null,"https://www.merriam-webster.com/dictionary/gale"]
  ],[{"terms":["狂风","定期租金","地租","年金"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/gale","reason":"本批 gale 的教学范围明确为：大风；强风（n.）、一阵强烈的情绪或声响（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("hurricane",[
   ["sense-1","飓风","n.",["飓风"],["hurricane-1","tropical-cyclone-regional-name"],"The hurricane damaged the island's harbour.","飓风损坏了岛上的港口。",null,"https://www.merriam-webster.com/dictionary/hurricane"]
  ],[{"terms":["暴风","暴风雨"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/hurricane","reason":"本批 hurricane 的教学范围明确为：飓风（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("mineral",[
   ["sense-1","矿物","n.",["矿物"],["mineral-1"],"The sample contains a rare mineral.","样本中含有一种稀有矿物。",null,"https://www.merriam-webster.com/dictionary/mineral"],
   ["sense-2","矿物的","adj.",["矿物的"],["mineral-2"],"The geologist studied the rock's mineral composition.","地质学家研究了岩石的矿物组成。",null,"https://www.merriam-webster.com/dictionary/mineral"]
  ],[{"terms":["无机物","苏打水","似矿物的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mineral","reason":"本批 mineral 的教学范围明确为：矿物（n.）、矿物的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("tornado",[
   ["sense-1","龙卷风","n.",["龙卷风"],["tornado-1"],"The tornado crossed the open fields.","龙卷风穿过了开阔的田野。",null,"https://www.merriam-webster.com/dictionary/tornado"]
  ],[{"terms":["旋风","大雷雨"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tornado","reason":"本批 tornado 的教学范围明确为：龙卷风（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("typhoon",[
   ["sense-1","台风","n.",["台风"],["typhoon-1","tropical-cyclone-regional-name"],"Fishing boats returned before the typhoon arrived.","渔船在台风到来前返航了。",null,"https://www.merriam-webster.com/dictionary/typhoon"]
  ],[]);
  entry("marble",[
   ["sense-1","大理石","n.",["大理石"],["marble-1"],"The statue was carved from white marble.","雕像由白色大理石雕成。",null,"https://www.merriam-webster.com/dictionary/marble"],
   ["sense-2","弹珠","n.",["弹珠"],["marble-2"],"A blue marble rolled under the cupboard.","一颗蓝色弹珠滚进了橱柜底下。",null,"https://www.merriam-webster.com/dictionary/marble"],
   ["sense-3","使呈大理石纹理","v.",["使呈大理石纹理"],["marble-3"],"The artist marbled the paper with coloured inks.","艺术家用彩色墨水在纸上制作大理石纹理。",null,"https://www.merriam-webster.com/dictionary/marble"]
  ],[{"terms":["石弹","雕刻品","大理石的","冷酷无情的","有大理石花纹的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/marble","reason":"本批 marble 的教学范围明确为：大理石（n.）、弹珠（n.）、使呈大理石纹理（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("precipitation",[
   ["sense-1","降水；降水量","n.",["降水","降水量"],["precipitation-1"],"Annual precipitation is low in this valley.","这个山谷的年降水量很低。",null,"https://www.merriam-webster.com/dictionary/precipitation"],
   ["sense-2","沉淀过程","n.",["沉淀过程"],["precipitation-2"],"The experiment demonstrated the precipitation of a solid from solution.","实验展示了固体从溶液中沉淀的过程。",null,"https://www.merriam-webster.com/dictionary/precipitation"]
  ],[{"terms":["坠落","沉淀","轻率","急速","猛冲","突如其来","析出"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/precipitation","reason":"本批 precipitation 的教学范围明确为：降水；降水量（n.）、沉淀过程（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("drown",[
   ["sense-1","溺水死亡；淹死","v.",["溺水死亡","淹死"],["drown-1"],"Several animals drowned when the river flooded.","河水泛滥时，几只动物淹死了。",null,"https://www.merriam-webster.com/dictionary/drown"],
   ["sense-2","淹没声音","v.",["淹没声音"],["drown-2"],"The engine drowned out our conversation.","发动机声盖过了我们的谈话。","drown out","https://www.merriam-webster.com/dictionary/drown"]
  ],[{"terms":["把...淹死","淹没"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/drown","reason":"本批 drown 的教学范围明确为：溺水死亡；淹死（v.）、淹没声音（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("puff",[
   ["sense-1","一小股气或烟","n.",["一小股气或烟"],["puff-1"],"A puff of smoke rose from the chimney.","一小股烟从烟囱升起。",null,"https://www.merriam-webster.com/dictionary/puff"],
   ["sense-2","喘气；喷出气或烟","v.",["喘气","喷出气或烟"],["puff-2"],"He puffed as he climbed the steep stairs.","他爬陡峭的楼梯时直喘气。",null,"https://www.merriam-webster.com/dictionary/puff"],
   ["sense-3","鼓起；膨胀","v.",["鼓起","膨胀"],["puff-3"],"The pastry puffed up in the oven.","酥皮点心在烤箱里膨胀起来。","puff up","https://www.merriam-webster.com/dictionary/puff"]
  ],[{"terms":["一阵喷烟","肿块","喘息","喷出","张开","吹捧","(使)充气","(使)骄傲","(使)膨胀"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/puff","reason":"本批 puff 的教学范围明确为：一小股气或烟（n.）、喘气；喷出气或烟（v.）、鼓起；膨胀（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("dense",[
   ["sense-1","稠密的；密集的","adj.",["稠密的","密集的"],["dense-1"],"Dense fog hid the far bank.","浓雾遮住了对岸。",null,"https://www.merriam-webster.com/dictionary/dense"],
   ["sense-2","难懂的；内容艰深的","adj.",["难懂的","内容艰深的"],["dense-2"],"The students discussed a dense philosophical text.","学生们讨论了一篇艰深的哲学文章。",null,"https://www.merriam-webster.com/dictionary/dense"]
  ],[{"terms":["浓厚的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dense","reason":"本批 dense 的教学范围明确为：稠密的；密集的（adj.）、难懂的；内容艰深的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("surrounding",[
   ["sense-1","周围的","adj.",["周围的"],["surrounding-1"],"The school serves the surrounding villages.","学校为周围村庄提供教育服务。",null,"https://www.merriam-webster.com/dictionary/surrounding"]
  ],[{"terms":["环境"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/surrounding","reason":"本批 surrounding 的教学范围明确为：周围的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("situation",[
   ["sense-1","情况；处境","n.",["情况","处境"],["situation-1"],"The team quickly assessed the situation.","团队迅速评估了情况。",null,"https://www.merriam-webster.com/dictionary/situation"],
   ["sense-2","地理位置；环境位置","n.",["地理位置","环境位置"],["situation-2"],"The hotel's quiet situation attracts walkers.","酒店安静的位置吸引着徒步旅行者。",null,"https://www.merriam-webster.com/dictionary/situation"]
  ],[{"terms":["情形","境遇","位置","情境"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/situation","reason":"本批 situation 的教学范围明确为：情况；处境（n.）、地理位置；环境位置（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("petrol",[
   ["sense-1","汽油（英式）","n.",["汽油（英式）"],["petrol-1"],"We stopped to buy petrol before entering the mountains.","进山前我们停车买了汽油。",null,"https://www.merriam-webster.com/dictionary/petrol"]
  ],[{"terms":["汽油","挥发油","石油"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/petrol","reason":"本批 petrol 的教学范围明确为：汽油（英式）（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("botany",[
   ["sense-1","植物学","n.",["植物学"],["botany-1"],"She studied botany at university.","她在大学学习植物学。",null,"https://www.merriam-webster.com/dictionary/botany"],
   ["sense-2","某地的植物群","n.",["某地的植物群"],["botany-2"],"The island's botany includes several rare species.","岛上的植物群包括几种稀有物种。",null,"https://www.merriam-webster.com/dictionary/botany"]
  ],[]);
  entry("ecology",[
   ["sense-1","生态学；生态关系","n.",["生态学","生态关系"],["ecology-1"],"The course examines the ecology of mountain lakes.","课程研究山地湖泊的生态关系。",null,"https://www.merriam-webster.com/dictionary/ecology"]
  ],[{"terms":["社会生态学"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ecology","reason":"本批 ecology 的教学范围明确为：生态学；生态关系（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("genetics",[
   ["sense-1","遗传学","n.",["遗传学"],["genetics-1"],"Genetics helps explain how traits pass between generations.","遗传学有助于解释性状如何代代相传。",null,"https://www.merriam-webster.com/dictionary/genetics"],
   ["sense-2","遗传构成；遗传特性","n.",["遗传构成","遗传特性"],["genetics-2"],"The genetics of the population changed over time.","种群的遗传构成随时间发生了变化。",null,"https://www.merriam-webster.com/dictionary/genetics"]
  ],[]);
  entry("release",[
   ["sense-1","释放；放开","v.",["释放","放开"],["release-1"],"The team released the rescued bird into the wild.","团队把获救的鸟放归野外。",null,"https://www.merriam-webster.com/dictionary/release"],
   ["sense-2","发布；发行","v.",["发布","发行"],["release-2"],"The museum released a new guidebook.","博物馆发行了一本新指南。",null,"https://www.merriam-webster.com/dictionary/release"],
   ["sense-3","发布；发行物","n.",["发布","发行","发行物"],["release-3"],"The release of the report prompted a public debate.","报告的发布引发了公开讨论。",null,"https://www.merriam-webster.com/dictionary/release"],
   ["sense-4","解脱；释放","n.",["解脱","释放"],["release-4"],"The prisoners waited for their release.","囚犯们等待获释。",null,"https://www.merriam-webster.com/dictionary/release"]
  ],[{"terms":["发泄","豁免","释放证书","解除","放松","免除","放弃","让与","版本"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/release","reason":"本批 release 的教学范围明确为：释放；放开（v.）、发布；发行（v.）、发布；发行（n.）、解脱；释放（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("mint",[
   ["sense-1","薄荷","n.",["薄荷"],["mint-1"],"She added fresh mint to the drink.","她在饮料中加了新鲜薄荷。",null,"https://www.merriam-webster.com/dictionary/mint"],
   ["sense-2","铸币厂","n.",["铸币厂"],["mint-2"],"The coins were produced at the national mint.","这些硬币由国家铸币厂制造。",null,"https://www.merriam-webster.com/dictionary/mint"],
   ["sense-3","铸造硬币","v.",["铸造硬币"],["mint-3"],"The state minted commemorative coins.","国家铸造了纪念币。",null,"https://www.merriam-webster.com/dictionary/mint"],
   ["sense-4","崭新的；完好如新的","adj.",["崭新的","完好如新的"],["mint-4"],"The collector bought a stamp in mint condition.","收藏者买了一枚品相全新的邮票。","mint condition","https://www.merriam-webster.com/dictionary/mint"]
  ],[{"terms":["造币厂","巨额","铸造","铸币","制造"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mint","reason":"本批 mint 的教学范围明确为：薄荷（n.）、铸币厂（n.）、铸造硬币（v.）、崭新的；完好如新的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("reef",[
   ["sense-1","礁；暗礁","n.",["礁","暗礁"],["reef-1"],"The boat avoided the reef near the harbour.","小船避开了港口附近的礁石。",null,"https://www.merriam-webster.com/dictionary/reef"]
  ],[{"terms":["缩帆","缩(帆)"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reef","reason":"本批 reef 的教学范围明确为：礁；暗礁（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("circle",[
   ["sense-1","圆；圆圈","n.",["圆","圆圈"],["circle-1"],"Draw a circle around the correct answer.","在正确答案周围画一个圆圈。",null,"https://www.merriam-webster.com/dictionary/circle"],
   ["sense-2","圈子；群体","n.",["圈子","群体"],["circle-2"],"The news spread through literary circles.","消息在文学圈中传开了。",null,"https://www.merriam-webster.com/dictionary/circle"],
   ["sense-3","环绕；绕行","v.",["环绕","绕行"],["circle-3"],"The aircraft circled the island before landing.","飞机降落前绕岛飞行。",null,"https://www.merriam-webster.com/dictionary/circle"]
  ],[{"terms":["圆周","社交圈","循环","范围","围着","盘旋"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/circle","reason":"本批 circle 的教学范围明确为：圆；圆圈（n.）、圈子；群体（n.）、环绕；绕行（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("algal",[
   ["sense-1","藻类的","adj.",["藻类的"],["algal-1"],"The scientists measured algal growth in the pond.","科学家测量了池塘中藻类的生长情况。",null,"https://www.merriam-webster.com/dictionary/algal"]
  ],[{"terms":["藻的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/algal","reason":"本批 algal 的教学范围明确为：藻类的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("demolish",[
   ["sense-1","拆毁；摧毁","v.",["拆毁","摧毁"],["demolish-1","18-near-destroy-demolish"],"Workers demolished the unsafe wall.","工人拆除了不安全的墙。",null,"https://www.merriam-webster.com/dictionary/demolish"],
   ["sense-2","彻底驳倒","v.",["彻底驳倒"],["demolish-2","18-near-destroy-demolish"],"The new evidence demolished the earlier theory.","新证据彻底推翻了先前的理论。",null,"https://www.merriam-webster.com/dictionary/demolish"]
  ],[{"terms":["毁坏","破坏","粉碎"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/demolish","reason":"本批 demolish 的教学范围明确为：拆毁；摧毁（v.）、彻底驳倒（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("productive",[
   ["sense-1","多产的；富有成效的","adj.",["多产的","富有成效的"],["productive-1","productive-soil","able-to-reproduce","productive-imagination"],"The workshop ended with a productive discussion.","工作坊以一场富有成效的讨论结束。",null,"https://www.merriam-webster.com/dictionary/productive"],
   ["sense-2","丰产的；生产能力强的","adj.",["丰产的","生产能力强的"],["productive-2","productive-soil","able-to-reproduce","productive-imagination"],"The valley contains highly productive farmland.","山谷里有高产的农田。",null,"https://www.merriam-webster.com/dictionary/productive"]
  ],[{"terms":["能生产的","有生产价值的","产出性的","产生性的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/productive","reason":"本批 productive 的教学范围明确为：多产的；富有成效的（adj.）、丰产的；生产能力强的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("extinction",[
   ["sense-1","灭绝；消失","n.",["灭绝","消失"],["extinction-1"],"The loss of habitat brought the species close to extinction.","栖息地丧失使这个物种濒临灭绝。",null,"https://www.merriam-webster.com/dictionary/extinction"]
  ],[{"terms":["消灭","废止","消光","熄灭"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/extinction","reason":"本批 extinction 的教学范围明确为：灭绝；消失（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("impact",[
   ["sense-1","撞击；冲击力","n.",["撞击","冲击力"],["impact-1","affect-influence","affect-move","affect-pretend","pretend-feign","effect-on-development","controlling-influence","influential-person-factor"],"The helmet absorbed the impact.","头盔吸收了冲击力。",null,"https://www.merriam-webster.com/dictionary/impact"],
   ["sense-2","影响","n.",["影响"],["impact-2","affect-influence","affect-move","affect-pretend","pretend-feign","effect-on-development","controlling-influence","influential-person-factor"],"The study examined the impact of tourism on water use.","研究考察了旅游业对用水的影响。",null,"https://www.merriam-webster.com/dictionary/impact"]
  ],[{"terms":["冲击","冲突","效果","挤入","压紧","对...发生影响"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/impact","reason":"当前音标 /ˈɪmpækt/ 按名词冲击与影响训练；动词常用另一重音，不混配。 本批 impact 的教学范围明确为：撞击；冲击力（n.）、影响（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("immense",[
   ["sense-1","巨大的；极大的","adj.",["巨大的","极大的"],["immense-1"],"The project required an immense amount of patience.","这个项目需要极大的耐心。",null,"https://www.merriam-webster.com/dictionary/immense"]
  ],[{"terms":["极广大的","无边的","非常好的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/immense","reason":"本批 immense 的教学范围明确为：巨大的；极大的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("cosmos",[
   ["sense-1","宇宙","n.",["宇宙"],["cosmos-1","18-near-cosmos-universe"],"The telescope reveals distant parts of the cosmos.","望远镜展示了宇宙遥远的区域。",null,"https://www.merriam-webster.com/dictionary/cosmos"]
  ],[{"terms":["有序的整体","秩序","波斯菊"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cosmos","reason":"本批 cosmos 的教学范围明确为：宇宙（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("universe",[
   ["sense-1","宇宙；全部存在的事物","n.",["宇宙","全部存在的事物"],["universe-1","18-near-cosmos-universe"],"The lecture explored the origins of the universe.","讲座探讨了宇宙的起源。",null,"https://www.merriam-webster.com/dictionary/universe"],
   ["sense-2","独立的领域或世界","n.",["独立的领域或世界"],["universe-2","18-near-cosmos-universe"],"The novel creates a fictional universe with its own history.","小说创造了一个拥有自身历史的虚构世界。",null,"https://www.merriam-webster.com/dictionary/universe"]
  ],[{"terms":["星系","(思想等)范围"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/universe","reason":"本批 universe 的教学范围明确为：宇宙；全部存在的事物（n.）、独立的领域或世界（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("meteorite",[
   ["sense-1","陨石","n.",["陨石"],["meteorite-1"],"A meteorite was found in the desert.","沙漠里发现了一块陨石。",null,"https://www.merriam-webster.com/dictionary/meteorite"]
  ],[{"terms":["陨星","陨铁"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/meteorite","reason":"本批 meteorite 的教学范围明确为：陨石（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("terrestrial",[
   ["sense-1","地球的；陆地的","adj.",["地球的","陆地的"],["terrestrial-1"],"The exhibition compares marine and terrestrial animals.","展览比较了海洋动物和陆生动物。",null,"https://www.merriam-webster.com/dictionary/terrestrial"],
   ["sense-2","地球上的","adj.",["地球上的"],["terrestrial-2"],"The mission searched for conditions resembling terrestrial environments.","任务寻找与地球环境相似的条件。",null,"https://www.merriam-webster.com/dictionary/terrestrial"]
  ],[{"terms":["地球上的人","陆生的","人间的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/terrestrial","reason":"本批 terrestrial 的教学范围明确为：地球的；陆地的（adj.）、地球上的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("universal",[
   ["sense-1","普遍的；通用的","adj.",["普遍的","通用的"],["universal-1"],"The design uses a universal connector.","这个设计采用通用连接器。",null,"https://www.merriam-webster.com/dictionary/universal"],
   ["sense-2","普遍概念；共相","n.",["普遍概念","共相"],["universal-2"],"The seminar debated whether universals exist independently of particular objects.","研讨会讨论共相是否独立于具体事物存在。",null,"https://www.merriam-webster.com/dictionary/universal"]
  ],[{"terms":["全世界的","宇宙的","一般概念"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/universal","reason":"本批 universal 的教学范围明确为：普遍的；通用的（adj.）、普遍概念；共相（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("vent",[
   ["sense-1","通风口；排放口","n.",["通风口","排放口"],["vent-1"],"Warm air escaped through the vent.","热空气从通风口排出。",null,"https://www.merriam-webster.com/dictionary/vent"],
   ["sense-2","发泄；表达强烈情绪","v.",["发泄","表达强烈情绪"],["vent-2"],"She vented her frustration in a private journal.","她在私人日记中宣泄挫折感。",null,"https://www.merriam-webster.com/dictionary/vent"]
  ],[{"terms":["排气口","出口","通风孔","排出","给...开孔"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/vent","reason":"本批 vent 的教学范围明确为：通风口；排放口（n.）、发泄；表达强烈情绪（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("propulsion",[
   ["sense-1","推进；推进力","n.",["推进","推进力"],["propulsion-1"],"The boat uses electric propulsion.","这艘船采用电力推进。",null,"https://www.merriam-webster.com/dictionary/propulsion"]
  ],[{"terms":["前冲","慌张步态"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/propulsion","reason":"本批 propulsion 的教学范围明确为：推进；推进力（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("expedition",[
   ["sense-1","考察；远征；考察队","n.",["考察","远征","考察队"],["expedition-1","travel-trip","developmental-journey","trip-journey","travel-journeys","trip-stumble","trip-activate"],"The expedition collected samples from the glacier.","考察队从冰川采集了样本。",null,"https://www.merriam-webster.com/dictionary/expedition"]
  ],[{"terms":["探险队","迅速"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/expedition","reason":"本批 expedition 的教学范围明确为：考察；远征；考察队（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("pressure",[
   ["sense-1","压力；压强","n.",["压力","压强"],["pressure-1"],"The gauge records the pressure inside the tank.","仪表记录罐内的压强。",null,"https://www.merriam-webster.com/dictionary/pressure"],
   ["sense-2","精神或社会压力","n.",["精神或社会压力"],["pressure-2"],"The deadline put extra pressure on the team.","截止日期给团队增加了压力。",null,"https://www.merriam-webster.com/dictionary/pressure"],
   ["sense-3","施压；迫使","v.",["施压","迫使"],["pressure-3"],"Nobody should pressure you into signing immediately.","任何人都不应施压让你立即签字。","pressure sb into","https://www.merriam-webster.com/dictionary/pressure"]
  ],[{"terms":["压","榨","按","强制","压迫","使增压","密封"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pressure","reason":"本批 pressure 的教学范围明确为：压力；压强（n.）、精神或社会压力（n.）、施压；迫使（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("flyby",[
   ["sense-1","近天体飞掠；低空飞越","n.",["近天体飞掠","低空飞越"],["flyby-1"],"The spacecraft gathered data during its flyby of the moon.","航天器在飞掠月球期间收集了数据。",null,"https://www.merriam-webster.com/dictionary/flyby"]
  ],[{"terms":["航天器近距飞掠","近天体飞行","飞机编队检阅飞行"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/flyby","reason":"本批 flyby 的教学范围明确为：近天体飞掠；低空飞越（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("collision",[
   ["sense-1","碰撞；冲突","n.",["碰撞","冲突"],["collision-1","violent-collision","loud-sudden-impact-sound","sudden-system-failure","financial-collapse","informal-overnight-stay","enter-event-uninvited","concentrated-high-effort"],"The barrier prevented a collision between the vehicles.","护栏防止了车辆相撞。",null,"https://www.merriam-webster.com/dictionary/collision"]
  ],[{"terms":["抵触"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/collision","reason":"本批 collision 的教学范围明确为：碰撞；冲突（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("circuit",[
   ["sense-1","电路","n.",["电路"],["circuit-1"],"A broken wire interrupted the circuit.","一根断线使电路中断。",null,"https://www.merriam-webster.com/dictionary/circuit"],
   ["sense-2","环行路线；巡回","n.",["环行路线","巡回"],["circuit-2"],"We completed a circuit of the lake.","我们绕湖走了一圈。",null,"https://www.merriam-webster.com/dictionary/circuit"]
  ],[{"terms":["环(行)道","线路"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/circuit","reason":"本批 circuit 的教学范围明确为：电路（n.）、环行路线；巡回（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("refraction",[
   ["sense-1","折射","n.",["折射"],["refraction-1"],"Refraction makes the submerged pencil appear bent.","折射使浸在水中的铅笔看起来弯了。",null,"https://www.merriam-webster.com/dictionary/refraction"]
  ],[{"terms":["折光","屈光"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/refraction","reason":"本批 refraction 的教学范围明确为：折射（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("radioactive",[
   ["sense-1","放射性的","adj.",["放射性的"],["radioactive-1"],"The laboratory stores radioactive material securely.","实验室妥善存放放射性材料。",null,"https://www.merriam-webster.com/dictionary/radioactive"]
  ],[{"terms":["有放射能的","放射的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/radioactive","reason":"本批 radioactive 的教学范围明确为：放射性的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("distinctive",[
   ["sense-1","独特的；有辨识度的","adj.",["独特的","有辨识度的"],["distinctive-1"],"The bird has a distinctive red throat.","这种鸟有很有辨识度的红色喉部。",null,"https://www.merriam-webster.com/dictionary/distinctive"]
  ],[{"terms":["有特色的","出众的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/distinctive","reason":"本批 distinctive 的教学范围明确为：独特的；有辨识度的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("distinction",[
   ["sense-1","区别；差别","n.",["区别","差别"],["distinction-1","difference-distinction","disagreement","numerical-difference","meaningful-impact"],"There is an important distinction between accuracy and precision.","准确度和精密度之间有重要区别。",null,"https://www.merriam-webster.com/dictionary/distinction"],
   ["sense-2","杰出；荣誉","n.",["杰出","荣誉"],["distinction-2","difference-distinction","disagreement","numerical-difference","meaningful-impact"],"She completed the course with distinction.","她以优异成绩完成了课程。",null,"https://www.merriam-webster.com/dictionary/distinction"]
  ],[]);
  entry("learn",[
   ["sense-1","学习；学会","v.",["学习","学会"],["learn-1"],"The children learned to identify local trees.","孩子们学会了辨认当地树木。",null,"https://www.merriam-webster.com/dictionary/learn"],
   ["sense-2","得知","v.",["得知"],["learn-2"],"We learned that the bridge had reopened.","我们得知桥已经重新开放。",null,"https://www.merriam-webster.com/dictionary/learn"]
  ],[{"terms":["认识到"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/learn","reason":"本批 learn 的教学范围明确为：学习；学会（v.）、得知（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("university",[
   ["sense-1","大学","n.",["大学"],["university-1"],"The university opened a new research centre.","大学开设了一个新的研究中心。",null,"https://www.merriam-webster.com/dictionary/university"]
  ],[]);
  entry("expertise",[
   ["sense-1","专长；专业知识","n.",["专长","专业知识"],["expertise-1"],"The repair requires specialist expertise.","这项维修需要专业知识。",null,"https://www.merriam-webster.com/dictionary/expertise"]
  ],[{"terms":["专家意见","专门技术","专门知识"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/expertise","reason":"本批 expertise 的教学范围明确为：专长；专业知识（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("educe",[
   ["sense-1","引出；推导出","v.",["引出","推导出"],["educe-1","draw-out-response","reason-from-evidence"],"The questions helped educe ideas that had remained unspoken.","这些问题帮助引出了原先没有说出的想法。",null,"https://www.merriam-webster.com/dictionary/educe"]
  ],[{"terms":["推断出","使显出"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/educe","reason":"本批 educe 的教学范围明确为：引出；推导出（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("mark",[
   ["sense-1","痕迹；记号","n.",["痕迹","记号"],["mark-1"],"The cup left a mark on the table.","杯子在桌上留下了痕迹。",null,"https://www.merriam-webster.com/dictionary/mark"],
   ["sense-2","分数；成绩","n.",["分数","成绩"],["mark-2"],"She received high marks for the essay.","她的作文获得了高分。",null,"https://www.merriam-webster.com/dictionary/mark"],
   ["sense-3","标记；标明","v.",["标记","标明"],["mark-3"],"The red line marks the boundary.","红线标明了边界。",null,"https://www.merriam-webster.com/dictionary/mark"],
   ["sense-4","纪念；标志着","v.",["纪念","标志着"],["mark-4"],"The ceremony marked the school's centenary.","典礼纪念学校成立一百周年。",null,"https://www.merriam-webster.com/dictionary/mark"],
   ["sense-5","给……评分","v.",["给……评分"],["mark-5","score-assess"],"The teacher marked the essays over the weekend.","老师在周末批改了作文。",null,"https://www.merriam-webster.com/dictionary/mark"]
  ],[{"terms":["标志","马克","斑点","靶子","刻度","符号","戳记","标准","起跑线","做标记于","留意","打分数","表明","记录","作记号","记得分","传号"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mark","reason":"本批 mark 的教学范围明确为：痕迹；记号（n.）、分数；成绩（n.）、标记；标明（v.）、纪念；标志着（v.）、给……评分（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("achievement",[
   ["sense-1","成就；完成","n.",["成就","完成"],["achievement-1"],"Finishing the survey was a significant achievement.","完成调查是一项重要成就。",null,"https://www.merriam-webster.com/dictionary/achievement"]
  ],[{"terms":["功业"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/achievement","reason":"本批 achievement 的教学范围明确为：成就；完成（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("underestimate",[
   ["sense-1","低估","v.",["低估"],["underestimate-1"],"We underestimated the time needed for repairs.","我们低估了维修所需的时间。",null,"https://www.merriam-webster.com/dictionary/underestimate"]
  ],[{"terms":["看轻"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/underestimate","reason":"本批 underestimate 的教学范围明确为：低估（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("reward",[
   ["sense-1","奖励；回报","n.",["奖励","回报"],["reward-1","prize-reward","prize-cherish","prize-outstanding","prize-lever"],"The reward recognised years of voluntary service.","这项奖励表彰了多年的志愿服务。",null,"https://www.merriam-webster.com/dictionary/reward"],
   ["sense-2","奖励；酬谢","v.",["奖励","酬谢"],["reward-2","prize-reward","prize-cherish","prize-outstanding","prize-lever"],"The organisation rewarded her dedication.","组织奖励了她的奉献。",null,"https://www.merriam-webster.com/dictionary/reward"]
  ],[{"terms":["报酬","赏金","奖赏","给...应有报应"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reward","reason":"本批 reward 的教学范围明确为：奖励；回报（n.）、奖励；酬谢（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("overestimate",[
   ["sense-1","高估","v.",["高估"],["overestimate-1"],"The forecast overestimated demand for tickets.","预测高估了门票需求。",null,"https://www.merriam-webster.com/dictionary/overestimate"]
  ],[{"terms":["评价过高","过高估价","估计过高"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/overestimate","reason":"本批 overestimate 的教学范围明确为：高估（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("fellowship",[
   ["sense-1","友谊；伙伴关系","n.",["友谊","伙伴关系"],["fellowship-1"],"The expedition created a strong sense of fellowship.","考察活动建立了深厚的伙伴情谊。",null,"https://www.merriam-webster.com/dictionary/fellowship"],
   ["sense-2","研究员职位或资助","n.",["研究员职位或资助"],["fellowship-2"],"She won a fellowship to study coastal ecology.","她获得了研究海岸生态的资助。",null,"https://www.merriam-webster.com/dictionary/fellowship"]
  ],[{"terms":["共同参与","团体","奖学金","合伙关系","研究员薪金","研究员基金"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fellowship","reason":"本批 fellowship 的教学范围明确为：友谊；伙伴关系（n.）、研究员职位或资助（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("technology",[
   ["sense-1","技术；科技","n.",["技术","科技"],["technology-1"],"The technology reduces energy consumption.","这项技术降低了能耗。",null,"https://www.merriam-webster.com/dictionary/technology"]
  ],[{"terms":["工业技术","术语","技术学","工艺学"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/technology","reason":"本批 technology 的教学范围明确为：技术；科技（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("patent",[
   ["sense-1","专利；专利权","n.",["专利","专利权"],["patent-1"],"The inventor applied for a patent.","发明者申请了专利。",null,"https://www.merriam-webster.com/dictionary/patent"],
   ["sense-2","取得……的专利","v.",["取得……的专利"],["patent-2"],"The company patented a new filtering process.","公司为新的过滤工艺取得了专利。",null,"https://www.merriam-webster.com/dictionary/patent"],
   ["sense-3","专利的；受专利保护的","adj.",["专利的","受专利保护的"],["patent-3"],"The firm licensed its patent technology to other manufacturers.","公司把专利技术授权给其他制造商。",null,"https://www.merriam-webster.com/dictionary/patent"]
  ],[{"terms":["许可证","执照","专利品","素质","特许的","显著的","新奇的","取得...的专利权","请准专利"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/patent","reason":"当前采用专利名词、动词及专利的定语用法，不纳入显而易见或医学通畅的形容词义。 本批 patent 的教学范围明确为：专利；专利权（n.）、取得……的专利（v.）、专利的；受专利保护的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("mechanic",[
   ["sense-1","机械修理工","n.",["机械修理工"],["mechanic-1"],"A mechanic inspected the brakes.","机械修理工检查了刹车。",null,"https://www.merriam-webster.com/dictionary/mechanic"]
  ],[{"terms":["机械工","技工","手工的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mechanic","reason":"本批 mechanic 的教学范围明确为：机械修理工（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("devise",[
   ["sense-1","设计；想出","v.",["设计","想出"],["devise-1","create-new-design","fabricate-untrue-account"],"They devised a simpler way to collect samples.","他们想出了更简单的采样方法。",null,"https://www.merriam-webster.com/dictionary/devise"]
  ],[{"terms":["发明","图谋","遗赠给","遗赠"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/devise","reason":"本批 devise 的教学范围明确为：设计；想出（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("flaw",[
   ["sense-1","缺陷；瑕疵","n.",["缺陷","瑕疵"],["flaw-1"],"A flaw in the design caused repeated failures.","设计缺陷导致了反复故障。",null,"https://www.merriam-webster.com/dictionary/flaw"]
  ],[{"terms":["缺点","裂纹","一阵狂风","划痕","裂缝"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/flaw","reason":"本批 flaw 的教学范围明确为：缺陷；瑕疵（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("accuracy",[
   ["sense-1","准确性；准确度","n.",["准确性","准确度"],["accuracy-1"],"The researchers checked the accuracy of the measurements.","研究人员检查了测量的准确度。",null,"https://www.merriam-webster.com/dictionary/accuracy"]
  ],[{"terms":["精确","正确"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/accuracy","reason":"本批 accuracy 的教学范围明确为：准确性；准确度（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("precisely",[
   ["sense-1","精确地；恰好","adv.",["精确地","恰好"],["precisely-1"],"The train arrived at precisely nine.","火车恰好九点到达。",null,"https://www.merriam-webster.com/dictionary/precisely"]
  ],[{"terms":["明确地","刻板地","拘泥地","正好","恰恰","对","正是如此","确实如此","不错"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/precisely","reason":"本批 precisely 的教学范围明确为：精确地；恰好（adv.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("custom",[
   ["sense-1","习俗；惯例","n.",["习俗","惯例"],["custom-1","habit-routine","habit-clothing","habit-growth"],"The festival preserves an ancient custom.","节日保留了一项古老习俗。",null,"https://www.merriam-webster.com/dictionary/custom"],
   ["sense-2","定制的","adj.",["定制的"],["custom-2","habit-routine","habit-clothing","habit-growth"],"The workshop makes custom furniture.","工坊制作定制家具。",null,"https://www.merriam-webster.com/dictionary/custom"],
   ["sense-3","关税；海关（复数）","n.",["关税","海关（复数）"],["custom-3","habit-routine","habit-clothing","habit-growth"],"We declared the equipment at customs.","我们在海关申报了设备。","customs","https://www.merriam-webster.com/dictionary/custom"]
  ],[{"terms":["习惯","风俗","海关","自定义","定制"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/custom","reason":"本批 custom 的教学范围明确为：习俗；惯例（n.）、定制的（adj.）、关税；海关（复数）（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("renaissance",[
   ["sense-1","文艺复兴；复兴","n.",["文艺复兴","复兴"],["renaissance-1"],"The town experienced a cultural renaissance.","这座城镇经历了文化复兴。",null,"https://www.merriam-webster.com/dictionary/renaissance"]
  ],[{"terms":["复活","文艺复兴的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/renaissance","reason":"本批 renaissance 的教学范围明确为：文艺复兴；复兴（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("slavery",[
   ["sense-1","奴隶制；被奴役状态","n.",["奴隶制","被奴役状态"],["slavery-1"],"The exhibition documents the struggle against slavery.","展览记录了反对奴隶制的斗争。",null,"https://www.merriam-webster.com/dictionary/slavery"]
  ],[{"terms":["奴隶的身分","奴隶状态","奴隶制度","奴役","苦役"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/slavery","reason":"本批 slavery 的教学范围明确为：奴隶制；被奴役状态（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("ethical",[
   ["sense-1","道德的；合乎伦理的","adj.",["道德的","合乎伦理的"],["ethical-1"],"The study received ethical approval before recruitment began.","研究在招募开始前获得了伦理批准。",null,"https://www.merriam-webster.com/dictionary/ethical"]
  ],[{"terms":["伦理的","民族的","民族特有的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ethical","reason":"本批 ethical 的教学范围明确为：道德的；合乎伦理的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("foreigner",[
   ["sense-1","外国人","n.",["外国人"],["foreigner-1"],"The guide helps a foreigner understand local customs.","指南帮助外国人了解当地习俗。",null,"https://www.merriam-webster.com/dictionary/foreigner"]
  ],[{"terms":["外地人","进口货","外国货"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/foreigner","reason":"本批 foreigner 的教学范围明确为：外国人（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("anthropologist",[
   ["sense-1","人类学家","n.",["人类学家"],["anthropologist-1"],"The anthropologist recorded oral histories.","人类学家记录了口述历史。",null,"https://www.merriam-webster.com/dictionary/anthropologist"]
  ],[]);
  entry("aboriginal",[
   ["sense-1","原住的；土著的","adj.",["原住的","土著的"],["aboriginal-1","place-of-birth","indigenous-to-region","inborn-ability"],"The museum consulted aboriginal communities about the display.","博物馆就展览征询了原住民社区的意见。",null,"https://www.merriam-webster.com/dictionary/aboriginal"]
  ],[{"terms":["原始的","土著居民","土生生物"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/aboriginal","reason":"本批 aboriginal 的教学范围明确为：原住的；土著的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("linguistics",[
   ["sense-1","语言学","n.",["语言学"],["linguistics-1"],"Linguistics explores how languages change.","语言学探索语言如何变化。",null,"https://www.merriam-webster.com/dictionary/linguistics"]
  ],[]);
  entry("grammatical",[
   ["sense-1","语法的；合乎语法的","adj.",["语法的","合乎语法的"],["grammatical-1"],"The editor corrected a grammatical error.","编辑改正了一个语法错误。",null,"https://www.merriam-webster.com/dictionary/grammatical"]
  ],[{"terms":["语法上的","符合语法规则的","文法上的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/grammatical","reason":"本批 grammatical 的教学范围明确为：语法的；合乎语法的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("wedgy",[
   ["sense-1","楔形的","adj.",["楔形的"],["wedgy-1"],"A wedgy stone held the door open.","一块楔形石头抵住了门。",null,"https://www.merriam-webster.com/dictionary/wedgy"]
  ],[{"terms":["像楔子的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/wedgy","reason":"本批 wedgy 的教学范围明确为：楔形的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("accent",[
   ["sense-1","口音","n.",["口音"],["accent-1"],"His accent reflects the region where he grew up.","他的口音反映了他成长的地区。",null,"https://www.merriam-webster.com/dictionary/accent"],
   ["sense-2","重音；重音符号","n.",["重音","重音符号"],["accent-2"],"The accent falls on the second syllable.","重音落在第二个音节上。",null,"https://www.merriam-webster.com/dictionary/accent"],
   ["sense-3","突出；强调","v.",["突出","强调"],["accent-3"],"The lighting accents the texture of the stone.","灯光突出了石材的纹理。",null,"https://www.merriam-webster.com/dictionary/accent"]
  ],[{"terms":["特点","注重点","重读","加重音号于"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/accent","reason":"本批 accent 的教学范围明确为：口音（n.）、重音；重音符号（n.）、突出；强调（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("utterance",[
   ["sense-1","话语；说话行为","n.",["话语","说话行为"],["utterance-1"],"The recording contains a single brief utterance.","录音中只有一句简短话语。",null,"https://www.merriam-webster.com/dictionary/utterance"]
  ],[{"terms":["发声","言辞","表达","说话的方式","死","发言","言语","语调"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/utterance","reason":"本批 utterance 的教学范围明确为：话语；说话行为（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("verbal",[
   ["sense-1","言语的；口头的","adj.",["言语的","口头的"],["verbal-1"],"The participants received verbal instructions.","参与者收到了口头说明。",null,"https://www.merriam-webster.com/dictionary/verbal"],
   ["sense-2","动词的","adj.",["动词的"],["verbal-2"],"The lesson compares nominal and verbal forms.","这节课比较名词形式和动词形式。",null,"https://www.merriam-webster.com/dictionary/verbal"]
  ],[{"terms":["用言辞的","逐字的","口述的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/verbal","reason":"本批 verbal 的教学范围明确为：言语的；口头的（adj.）、动词的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("syllable",[
   ["sense-1","音节","n.",["音节"],["syllable-1"],"The word contains three syllables.","这个词包含三个音节。",null,"https://www.merriam-webster.com/dictionary/syllable"]
  ],[{"terms":["分成音节","字节"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/syllable","reason":"本批 syllable 的教学范围明确为：音节（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("clause",[
   ["sense-1","分句；从句","n.",["分句","从句"],["clause-1"],"The final clause explains why the journey stopped.","最后一个分句解释了旅程为何中止。",null,"https://www.merriam-webster.com/dictionary/clause"],
   ["sense-2","条款","n.",["条款"],["clause-2"],"The contract includes a cancellation clause.","合同包含一项取消条款。",null,"https://www.merriam-webster.com/dictionary/clause"]
  ],[{"terms":["子句"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/clause","reason":"本批 clause 的教学范围明确为：分句；从句（n.）、条款（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("contention",[
   ["sense-1","争论；争夺","n.",["争论","争夺"],["contention-1","controversy-dispute","heated-argument","legal-conflict","call-into-question","claim-contested"],"The site became a source of contention.","这个地点成了争论的源头。",null,"https://www.merriam-webster.com/dictionary/contention"],
   ["sense-2","论点；主张","n.",["论点","主张"],["contention-2","controversy-dispute","heated-argument","legal-conflict","call-into-question","claim-contested"],"The evidence supports her main contention.","证据支持了她的主要论点。",null,"https://www.merriam-webster.com/dictionary/contention"]
  ],[{"terms":["争辩","所持的论点","争用"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/contention","reason":"本批 contention 的教学范围明确为：争论；争夺（n.）、论点；主张（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("eloquence",[
   ["sense-1","雄辩；富有表现力","n.",["雄辩","富有表现力"],["eloquence-1"],"Her eloquence held the audience's attention.","她的雄辩吸引住了听众。",null,"https://www.merriam-webster.com/dictionary/eloquence"]
  ],[{"terms":["口才","雄辩术","善辩"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/eloquence","reason":"本批 eloquence 的教学范围明确为：雄辩；富有表现力（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("message",[
   ["sense-1","信息；口信","n.",["信息","口信"],["message-1","18-near-gossip-message"],"A message on the door explained the closure.","门上的告示解释了关闭原因。",null,"https://www.merriam-webster.com/dictionary/message"],
   ["sense-2","要旨；寓意","n.",["要旨","寓意"],["message-2","18-near-gossip-message"],"The film's central message concerns friendship.","电影的核心寓意与友谊有关。",null,"https://www.merriam-webster.com/dictionary/message"],
   ["sense-3","发消息","v.",["发消息"],["message-3","18-near-gossip-message"],"Please message me when the parcel arrives.","包裹到达时请给我发消息。",null,"https://www.merriam-webster.com/dictionary/message"]
  ],[{"terms":["消息","通讯","讯息","教训","预言","广告词","通知","通报","报告","报信","报文"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/message","reason":"本批 message 的教学范围明确为：信息；口信（n.）、要旨；寓意（n.）、发消息（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("criticism",[
   ["sense-1","批评","n.",["批评"],["criticism-1"],"The decision attracted widespread criticism.","这个决定招致了广泛批评。",null,"https://www.merriam-webster.com/dictionary/criticism"],
   ["sense-2","评论；鉴赏","n.",["评论","鉴赏"],["criticism-2"],"The course introduces literary criticism.","课程介绍文学评论。",null,"https://www.merriam-webster.com/dictionary/criticism"]
  ],[{"terms":["非难","批判"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/criticism","reason":"本批 criticism 的教学范围明确为：批评（n.）、评论；鉴赏（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("propaganda",[
   ["sense-1","宣传；宣传材料","n.",["宣传","宣传材料"],["propaganda-1"],"The archive contains wartime propaganda posters.","档案中藏有战时宣传海报。",null,"https://www.merriam-webster.com/dictionary/propaganda"]
  ],[{"terms":["宣传活动"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/propaganda","reason":"本批 propaganda 的教学范围明确为：宣传；宣传材料（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("disseminate",[
   ["sense-1","传播；散布","v.",["传播","散布"],["disseminate-1","scatter-spread","17-separate","scatter-disperse","scatter-physics"],"The network disseminates research findings to schools.","这个网络向学校传播研究成果。",null,"https://www.merriam-webster.com/dictionary/disseminate"]
  ],[{"terms":["散播","宣传","广为传播"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/disseminate","reason":"本批 disseminate 的教学范围明确为：传播；散布（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("expect",[
   ["sense-1","预料；期待","v.",["预料","期待"],["expect-1"],"We expect the weather to improve.","我们预计天气会好转。",null,"https://www.merriam-webster.com/dictionary/expect"],
   ["sense-2","要求；认为理应","v.",["要求","认为理应"],["expect-2"],"The school expects pupils to arrive on time.","学校要求学生准时到达。",null,"https://www.merriam-webster.com/dictionary/expect"],
   ["sense-3","怀孕待产","v.",["怀孕待产"],["expect-3"],"They are expecting their first child in June.","他们的第一个孩子预计六月出生。",null,"https://www.merriam-webster.com/dictionary/expect"]
  ],[{"terms":["预期","盼望"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/expect","reason":"本批 expect 的教学范围明确为：预料；期待（v.）、要求；认为理应（v.）、怀孕待产（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("gossip",[
   ["sense-1","流言；闲谈","n.",["流言","闲谈"],["gossip-1","18-near-gossip-message"],"The article relied on gossip rather than evidence.","文章依赖流言而不是证据。",null,"https://www.merriam-webster.com/dictionary/gossip"],
   ["sense-2","闲聊；说闲话","v.",["闲聊","说闲话"],["gossip-2","18-near-gossip-message"],"The neighbours gossiped over the garden fence.","邻居们隔着花园篱笆闲聊。",null,"https://www.merriam-webster.com/dictionary/gossip"]
  ],[{"terms":["随笔","爱讲闲话的人"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/gossip","reason":"本批 gossip 的教学范围明确为：流言；闲谈（n.）、闲聊；说闲话（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("magic",[
   ["sense-1","魔法；魔术","n.",["魔法","魔术"],["magic-1"],"The children enjoyed the magic at the party.","孩子们喜欢聚会上的魔术表演。",null,"https://www.merriam-webster.com/dictionary/magic"],
   ["sense-2","神奇的；有魔力的","adj.",["神奇的","有魔力的"],["magic-2"],"The story begins with a magic key.","故事从一把魔法钥匙开始。",null,"https://www.merriam-webster.com/dictionary/magic"]
  ],[{"terms":["魔术的","不可思议的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/magic","reason":"本批 magic 的教学范围明确为：魔法；魔术（n.）、神奇的；有魔力的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("concert",[
   ["sense-1","音乐会","n.",["音乐会"],["concert-1"],"The concert raised money for the library.","音乐会为图书馆筹集了资金。",null,"https://www.merriam-webster.com/dictionary/concert"],
   ["sense-2","一致；协同","n.",["一致","协同"],["concert-2"],"The agencies acted in concert.","各机构协同行动。","in concert","https://www.merriam-webster.com/dictionary/concert"]
  ],[{"terms":["演奏会","协力","共同商定","协调"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/concert","reason":"本批 concert 的教学范围明确为：音乐会（n.）、一致；协同（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("mimic",[
   ["sense-1","模仿；模拟","v.",["模仿","模拟"],["mimic-1","copy-behaviour-model","mock-ridicule","joking-ridicule","tease-mock","mock-simulated"],"The model mimics the movement of ocean currents.","模型模拟了洋流运动。",null,"https://www.merriam-webster.com/dictionary/mimic"],
   ["sense-2","善于模仿的人","n.",["善于模仿的人"],["mimic-2","copy-behaviour-model","mock-ridicule","joking-ridicule","tease-mock","mock-simulated"],"The performer is a talented mimic.","这位表演者很善于模仿。",null,"https://www.merriam-webster.com/dictionary/mimic"]
  ],[{"terms":["模仿的","摹拟的","效颦者","模仿者","小丑","仿制品","摹拟"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mimic","reason":"本批 mimic 的教学范围明确为：模仿；模拟（v.）、善于模仿的人（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("simulative",[
   ["sense-1","模拟的；假装的","adj.",["模拟的","假装的"],["simulative-1"],"The researchers used a simulative exercise to test the procedure.","研究人员用模拟演练测试了流程。",null,"https://www.merriam-webster.com/dictionary/simulate"]
  ],[]);
  entry("souvenir",[
   ["sense-1","纪念品","n.",["纪念品"],["souvenir-1"],"She bought a small souvenir of the journey.","她买了一件小小的旅行纪念品。",null,"https://www.merriam-webster.com/dictionary/souvenir"]
  ],[]);
  entry("necessity",[
   ["sense-1","必要性","n.",["必要性"],["necessity-1","requirement-need","requirements-needed","requirement-rule"],"The report explains the necessity of regular maintenance.","报告解释了定期维护的必要性。",null,"https://www.merriam-webster.com/dictionary/necessity"],
   ["sense-2","必需品","n.",["必需品"],["necessity-2","requirement-need","requirements-needed","requirement-rule"],"Clean water is a basic necessity.","洁净的水是一项基本必需品。",null,"https://www.merriam-webster.com/dictionary/necessity"],
   ["sense-3","不得已；迫切需要","n.",["不得已","迫切需要"],["necessity-3","requirement-need","requirements-needed","requirement-rule"],"They changed the route out of necessity.","他们迫不得已改变了路线。",null,"https://www.merriam-webster.com/dictionary/necessity"]
  ],[{"terms":["需要","必然","必然性","必要"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/necessity","reason":"本批 necessity 的教学范围明确为：必要性（n.）、必需品（n.）、不得已；迫切需要（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("artefact",[
   ["sense-1","人工制品；文物","n.",["人工制品","文物"],["artefact-1"],"The artefact was found beneath the old floor.","这件文物是在旧地板下面发现的。",null,"https://www.merriam-webster.com/dictionary/artifact"]
  ],[{"terms":["制造物","人为现象","膺象","矫作物","古代文物","人工产物"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/artifact","reason":"本批 artefact 的教学范围明确为：人工制品；文物（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("kit",[
   ["sense-1","成套工具；套件","n.",["成套工具","套件"],["kit-1"],"The repair kit includes two spare seals.","维修工具包包含两个备用密封圈。",null,"https://www.merriam-webster.com/dictionary/kit"],
   ["sense-2","装备","v.",["装备"],["kit-2"],"The volunteers were kitted out with waterproof clothing.","志愿者们配备了防水服装。","kit out","https://www.merriam-webster.com/dictionary/kit"]
  ],[{"terms":["工具箱","成套部件","成套零件"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/kit","reason":"本批 kit 的教学范围明确为：成套工具；套件（n.）、装备（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("sewerage",[
   ["sense-1","排污系统；排污处理","n.",["排污系统","排污处理"],["sewerage-1"],"The village needs better sewerage.","村庄需要更好的排污系统。",null,"https://www.merriam-webster.com/dictionary/sewerage"]
  ],[{"terms":["排水设备","污水"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sewerage","reason":"本批 sewerage 的教学范围明确为：排污系统；排污处理（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("lotion",[
   ["sense-1","护肤液；外用洗剂","n.",["护肤液","外用洗剂"],["lotion-1"],"She applied lotion to her dry hands.","她给干燥的双手涂了护肤液。",null,"https://www.merriam-webster.com/dictionary/lotion"]
  ],[{"terms":["洗液","洗剂"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/lotion","reason":"本批 lotion 的教学范围明确为：护肤液；外用洗剂（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("soap",[
   ["sense-1","肥皂","n.",["肥皂"],["soap-1"],"The campers washed their hands with soap.","露营者用肥皂洗手。",null,"https://www.merriam-webster.com/dictionary/soap"],
   ["sense-2","用肥皂涂洗","v.",["用肥皂涂洗"],["soap-2"],"He soaped the sponge before cleaning the tiles.","清洗瓷砖前，他给海绵涂上了肥皂。",null,"https://www.merriam-webster.com/dictionary/soap"]
  ],[{"terms":["阿谀","以肥皂洗","评语"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/soap","reason":"本批 soap 的教学范围明确为：肥皂（n.）、用肥皂涂洗（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("reuse",[
   ["sense-1","再使用","v.",["再使用"],["reuse-1"],"We reuse the containers for storing seeds.","我们重复使用这些容器来储存种子。",null,"https://www.merriam-webster.com/dictionary/reuse"]
  ],[{"terms":["重新使用"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reuse","reason":"本批 reuse 的教学范围明确为：再使用（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("litter",[
   ["sense-1","散落的垃圾","n.",["散落的垃圾"],["litter-1","rubbish-waste","waste-material","rubbish-nonsense","rubbish-criticize","criticism-harsh","trash-waste","trash-poor-quality","trash-damage","trash-criticize"],"Volunteers collected litter along the beach.","志愿者沿海滩捡拾垃圾。",null,"https://www.merriam-webster.com/dictionary/litter"],
   ["sense-2","一窝幼崽","n.",["一窝幼崽"],["litter-2","rubbish-waste","waste-material","rubbish-nonsense","rubbish-criticize","criticism-harsh","trash-waste","trash-poor-quality","trash-damage","trash-criticize"],"The cat had a litter of four kittens.","这只猫生了一窝四只小猫。",null,"https://www.merriam-webster.com/dictionary/litter"],
   ["sense-3","乱扔垃圾；使杂乱","v.",["乱扔垃圾","使杂乱"],["litter-3","rubbish-waste","waste-material","rubbish-nonsense","rubbish-criticize","criticism-harsh","trash-waste","trash-poor-quality","trash-damage","trash-criticize"],"Discarded wrappers littered the path.","丢弃的包装纸散落在小路上。",null,"https://www.merriam-webster.com/dictionary/litter"],
   ["sense-4","动物垫料","n.",["动物垫料"],["litter-4","rubbish-waste","waste-material","rubbish-nonsense","rubbish-criticize","criticism-harsh","trash-waste","trash-poor-quality","trash-damage","trash-criticize"],"Fresh litter covered the stable floor.","新垫料铺在马厩地面上。",null,"https://www.merriam-webster.com/dictionary/litter"]
  ],[{"terms":["垃圾","杂乱","轿","担架","乱丢","铺草","弄乱","产仔","乱丢垃圾"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/litter","reason":"本批 litter 的教学范围明确为：散落的垃圾（n.）、一窝幼崽（n.）、乱扔垃圾；使杂乱（v.）、动物垫料（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("waste",[
   ["sense-1","废物；垃圾","n.",["废物","垃圾"],["waste-1","rubbish-waste","waste-material","rubbish-nonsense","rubbish-criticize","criticism-harsh","trash-waste","trash-poor-quality","trash-damage","trash-criticize"],"The plant processes household waste.","工厂处理生活垃圾。",null,"https://www.merriam-webster.com/dictionary/waste"],
   ["sense-2","浪费；损耗","n.",["浪费","损耗"],["waste-2","rubbish-waste","waste-material","rubbish-nonsense","rubbish-criticize","criticism-harsh","trash-waste","trash-poor-quality","trash-damage","trash-criticize"],"The delay was a waste of valuable time.","这次延误浪费了宝贵时间。",null,"https://www.merriam-webster.com/dictionary/waste"],
   ["sense-3","浪费","v.",["浪费"],["waste-3","rubbish-waste","waste-material","rubbish-nonsense","rubbish-criticize","criticism-harsh","trash-waste","trash-poor-quality","trash-damage","trash-criticize"],"Do not waste water while washing the tools.","清洗工具时不要浪费水。",null,"https://www.merriam-webster.com/dictionary/waste"],
   ["sense-4","废弃的；无用的","adj.",["废弃的","无用的"],["waste-4","rubbish-waste","waste-material","rubbish-nonsense","rubbish-criticize","criticism-harsh","trash-waste","trash-poor-quality","trash-damage","trash-criticize"],"Waste paper goes into the blue bin.","废纸放进蓝色垃圾桶。",null,"https://www.merriam-webster.com/dictionary/waste"]
  ],[{"terms":["损耗","消耗","荒地","地面风化物","荒芜的","多余的","使荒芜","变消瘦"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/waste","reason":"本批 waste 的教学范围明确为：废物；垃圾（n.）、浪费（n.）、浪费（v.）、废弃的；无用的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("jewellery",[
   ["sense-1","珠宝首饰","n.",["珠宝首饰"],["jewellery-1"],"The museum displays handmade jewellery.","博物馆展出手工制作的首饰。",null,"https://www.merriam-webster.com/dictionary/jewelry"]
  ],[{"terms":["宝石","贵重饰物","珠宝","宝石饰物","受珍视的人/物","宝贝","有价值的人/物"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/jewelry","reason":"本批 jewellery 的教学范围明确为：珠宝首饰（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("luxurious",[
   ["sense-1","豪华的；奢侈的","adj.",["豪华的","奢侈的"],["luxurious-1"],"The hotel has a luxurious marble bathroom.","酒店有一间豪华的大理石浴室。",null,"https://www.merriam-webster.com/dictionary/luxurious"]
  ],[{"terms":["放纵的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/luxurious","reason":"本批 luxurious 的教学范围明确为：豪华的；奢侈的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("tend",[
   ["sense-1","往往会；倾向于","v.",["往往会","倾向于"],["tend-1"],"These plants tend to flower in early spring.","这些植物往往在早春开花。","tend to","https://www.merriam-webster.com/dictionary/tend"],
   ["sense-2","照料；护理","v.",["照料","护理"],["tend-2"],"The gardener tended the young trees.","园丁照料幼树。",null,"https://www.merriam-webster.com/dictionary/tend"]
  ],[{"terms":["走向","有某种的倾向","易于","照顾","注意"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tend","reason":"本批 tend 的教学范围明确为：往往会；倾向于（v.）、照料；护理（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("gem",[
   ["sense-1","宝石","n.",["宝石"],["gem-1","precious-decorative-stone","treasured-person-thing","watch-jewel-bearing"],"A green gem was set in the ring.","戒指上镶着一颗绿色宝石。",null,"https://www.merriam-webster.com/dictionary/gem"],
   ["sense-2","珍品；难能可贵的人或事物","n.",["珍品","难能可贵的人或事物"],["gem-2","precious-decorative-stone","treasured-person-thing","watch-jewel-bearing","treasure-precious-person-thing"],"The little museum is a hidden gem.","这家小博物馆是一处鲜为人知的珍宝。",null,"https://www.merriam-webster.com/dictionary/gem"]
  ],[{"terms":["珠宝","珍贵之物","饰以宝石"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/gem","reason":"本批 gem 的教学范围明确为：宝石（n.）、珍品；难能可贵的人或事物（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("veil",[
   ["sense-1","面纱；遮盖物","n.",["面纱","遮盖物"],["veil-1","hide-from-view","hide-information"],"A thin veil covered the painting.","一层薄纱盖着画作。",null,"https://www.merriam-webster.com/dictionary/veil"],
   ["sense-2","遮掩；掩饰","v.",["遮掩","掩饰"],["veil-2","hide-from-view","hide-information"],"He could not veil his disappointment.","他无法掩饰失望。",null,"https://www.merriam-webster.com/dictionary/veil"]
  ],[{"terms":["面罩","借口","幕","帐","遮蔽物","戴面纱","隐藏","遮蔽","蒙上面纱"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/veil","reason":"本批 veil 的教学范围明确为：面纱；遮盖物（n.）、遮掩；掩饰（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("adorn",[
   ["sense-1","装饰；使增色","v.",["装饰","使增色"],["adorn-1","add-ornament","paint-paper-interior","award-honour"],"Flowers adorned the entrance.","鲜花装饰着入口。",null,"https://www.merriam-webster.com/dictionary/adorn"]
  ],[{"terms":["使生色"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/adorn","reason":"本批 adorn 的教学范围明确为：装饰；使增色（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("pigment",[
   ["sense-1","颜料；色素","n.",["颜料","色素"],["pigment-1"],"The pigment gives the feathers their red colour.","这种色素使羽毛呈现红色。",null,"https://www.merriam-webster.com/dictionary/pigment"]
  ],[{"terms":["色质"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pigment","reason":"本批 pigment 的教学范围明确为：颜料；色素（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("dye",[
   ["sense-1","染料","n.",["染料"],["dye-1"],"The cloth absorbed the blue dye.","布料吸收了蓝色染料。",null,"https://www.merriam-webster.com/dictionary/dye"],
   ["sense-2","染色","v.",["染色"],["dye-2"],"They dyed the wool with plant extracts.","他们用植物提取物给羊毛染色。",null,"https://www.merriam-webster.com/dictionary/dye"]
  ],[{"terms":["颜料","染","被着色"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dye","reason":"本批 dye 的教学范围明确为：染料（n.）、染色（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("fascinating",[
   ["sense-1","迷人的；极有趣的","adj.",["迷人的","极有趣的"],["fascinating-1","interesting-engaging","mesmerise-fascinate","absorb-interest","engross-attention","attract-draw","attract-entice","mesmerise-hypnotize"],"The guide told a fascinating story about the ruins.","导游讲了一个关于遗址的精彩故事。",null,"https://www.merriam-webster.com/dictionary/fascinating"]
  ],[{"terms":["吸引人的","使人神魂颠倒的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fascinating","reason":"本批 fascinating 的教学范围明确为：迷人的；极有趣的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("graceful",[
   ["sense-1","优美的；得体的","adj.",["优美的","得体的"],["graceful-1","graceful-appearance","simple-effective-solution"],"The dancer made a graceful turn.","舞者优美地转了一个圈。",null,"https://www.merriam-webster.com/dictionary/graceful"]
  ],[]);
  entry("drink",[
   ["sense-1","喝；饮","v.",["喝","饮"],["drink-1"],"The walkers drank water beside the spring.","徒步者在泉边喝水。",null,"https://www.merriam-webster.com/dictionary/drink"],
   ["sense-2","饮料；一杯饮品","n.",["饮料","一杯饮品"],["drink-2"],"She offered the visitors a cold drink.","她给来访者提供了冷饮。",null,"https://www.merriam-webster.com/dictionary/drink"],
   ["sense-3","饮酒","v.",["饮酒"],["drink-3"],"He no longer drinks at social events.","他不再在社交活动中饮酒。",null,"https://www.merriam-webster.com/dictionary/drink"],
   ["sense-4","尽情欣赏或吸收","v.",["尽情欣赏或吸收"],["drink-4"],"They drank in the view from the summit.","他们尽情欣赏山顶的景色。","drink in","https://www.merriam-webster.com/dictionary/drink"]
  ],[{"terms":["酒","喝酒"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/drink","reason":"本批 drink 的教学范围明确为：喝；饮（v.）、饮料；一杯饮品（n.）、饮酒（v.）、尽情欣赏或吸收（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("onion",[
   ["sense-1","洋葱","n.",["洋葱"],["onion-1"],"Chop the onion into small pieces.","把洋葱切成小块。",null,"https://www.merriam-webster.com/dictionary/onion"]
  ],[{"terms":["因洋葱使掉泪"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/onion","reason":"本批 onion 的教学范围明确为：洋葱（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("pea",[
   ["sense-1","豌豆","n.",["豌豆"],["pea-1"],"A pea rolled off the plate.","一颗豌豆从盘子上滚落。",null,"https://www.merriam-webster.com/dictionary/pea"]
  ],[{"terms":["似豌豆的东西"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pea","reason":"本批 pea 的教学范围明确为：豌豆（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("berry",[
   ["sense-1","浆果","n.",["浆果"],["berry-1"],"The bird picked a berry from the bush.","鸟从灌木上啄下一颗浆果。",null,"https://www.merriam-webster.com/dictionary/berry"]
  ],[{"terms":["采集浆果"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/berry","reason":"本批 berry 的教学范围明确为：浆果（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("turnip",[
   ["sense-1","芜菁","n.",["芜菁"],["turnip-1"],"The farmer pulled a turnip from the soil.","农民从土里拔出一棵芜菁。",null,"https://www.merriam-webster.com/dictionary/turnip"]
  ],[{"terms":["芜菁甘蓝","萝卜"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/turnip","reason":"本批 turnip 的教学范围明确为：芜菁（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("pear",[
   ["sense-1","梨；梨树","n.",["梨","梨树"],["pear-1"],"She sliced a ripe pear for the salad.","她切了一个熟梨做沙拉。",null,"https://www.merriam-webster.com/dictionary/pear"]
  ],[{"terms":["梨子","梨木"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pear","reason":"本批 pear 的教学范围明确为：梨；梨树（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("plum",[
   ["sense-1","李子；李树","n.",["李子","李树"],["plum-1"],"The plum has sweet yellow flesh.","这个李子的果肉又黄又甜。",null,"https://www.merriam-webster.com/dictionary/plum"],
   ["sense-2","令人向往的；优厚的","adj.",["令人向往的","优厚的"],["plum-2"],"He was offered a plum job at the gallery.","他获得了美术馆的一份优厚工作。",null,"https://www.merriam-webster.com/dictionary/plum"],
   ["sense-3","紫红色","n.",["紫红色"],["plum-3"],"The fabric is a deep plum.","这块布是深紫红色的。",null,"https://www.merriam-webster.com/dictionary/plum"]
  ],[]);
  entry("strip",[
   ["sense-1","条；带","n.",["条","带"],["strip-1"],"Cut the fabric into a narrow strip.","把布剪成窄条。",null,"https://www.merriam-webster.com/dictionary/strip"],
   ["sense-2","剥去；脱去","v.",["剥去","脱去"],["strip-2"],"They stripped the old paint from the door.","他们剥除了门上的旧油漆。",null,"https://www.merriam-webster.com/dictionary/strip"],
   ["sense-3","剥夺","v.",["剥夺"],["strip-3"],"The organisation stripped him of his title.","组织剥夺了他的头衔。","strip sb of","https://www.merriam-webster.com/dictionary/strip"]
  ],[{"terms":["长条","条状","脱衣舞","脱衣","被剥去","拆卸","脱衣服"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/strip","reason":"本批 strip 的教学范围明确为：条；带（n.）、剥去；脱去（v.）、剥夺（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("orange",[
   ["sense-1","橙子","n.",["橙子"],["orange-1"],"She peeled an orange for the child.","她给孩子剥了一个橙子。",null,"https://www.merriam-webster.com/dictionary/orange"],
   ["sense-2","橙色的","adj.",["橙色的"],["orange-2"],"An orange flag marked the entrance.","一面橙色旗帜标示着入口。",null,"https://www.merriam-webster.com/dictionary/orange"],
   ["sense-3","橙色","n.",["橙色"],["orange-3"],"The artist mixed orange with a little white.","艺术家在橙色中混入了一点白色。",null,"https://www.merriam-webster.com/dictionary/orange"]
  ],[{"terms":["柑橘","桔子","橘色","橘色的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/orange","reason":"本批 orange 的教学范围明确为：橙子（n.）、橙色的（adj.）、橙色（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("aisle",[
   ["sense-1","通道；过道","n.",["通道","过道"],["aisle-1","connecting-passage","text-music-excerpt","travel-through","time-elapsing","legislative-approval"],"Keep the aisle clear of bags.","不要把包放在过道上。",null,"https://www.merriam-webster.com/dictionary/aisle"]
  ],[{"terms":["走廊","侧廊","走道"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/aisle","reason":"本批 aisle 的教学范围明确为：通道；过道（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("shed",[
   ["sense-1","棚屋；小屋","n.",["棚屋","小屋"],["shed-1","hut-shelter","17-housing","protective-place"],"The tools are stored in the shed.","工具存放在棚屋里。",null,"https://www.merriam-webster.com/dictionary/shed"],
   ["sense-2","脱落；流出","v.",["脱落","流出"],["shed-2","hut-shelter","17-housing","protective-place"],"The trees shed their leaves in autumn.","树木在秋天落叶。",null,"https://www.merriam-webster.com/dictionary/shed"],
   ["sense-3","去掉；摆脱","v.",["去掉","摆脱"],["shed-3","hut-shelter","17-housing","protective-place"],"The company shed several unprofitable activities.","公司放弃了几项无利可图的业务。",null,"https://www.merriam-webster.com/dictionary/shed"]
  ],[{"terms":["车棚","脱落之物","分水岭","使流出","放射","散发","散布"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/shed","reason":"本批 shed 的教学范围明确为：棚屋；小屋（n.）、脱落；流出（v.）、去掉；摆脱（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("nursery",[
   ["sense-1","托儿所；育儿室","n.",["托儿所","育儿室"],["nursery-1"],"The nursery cares for children under three.","托儿所照顾三岁以下的孩子。",null,"https://www.merriam-webster.com/dictionary/nursery"],
   ["sense-2","苗圃","n.",["苗圃"],["nursery-2"],"We bought the saplings from a local nursery.","我们从当地苗圃买了树苗。",null,"https://www.merriam-webster.com/dictionary/nursery"]
  ],[{"terms":["温床","婴儿室"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/nursery","reason":"本批 nursery 的教学范围明确为：托儿所；育儿室（n.）、苗圃（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("staircase",[
   ["sense-1","楼梯","n.",["楼梯"],["staircase-1"],"A spiral staircase leads to the roof.","螺旋楼梯通向屋顶。",null,"https://www.merriam-webster.com/dictionary/staircase"]
  ],[{"terms":["梯子","楼梯部分","阶梯现象"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/staircase","reason":"本批 staircase 的教学范围明确为：楼梯（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("cradle",[
   ["sense-1","摇篮","n.",["摇篮"],["cradle-1","underlying-origin","ancestral-background","coordinate-zero-point","geographical-provenance"],"The baby slept in a wooden cradle.","婴儿睡在木摇篮里。",null,"https://www.merriam-webster.com/dictionary/cradle"],
   ["sense-2","发源地；孕育之所","n.",["发源地","孕育之所"],["cradle-2","underlying-origin","ancestral-background","coordinate-zero-point","geographical-provenance"],"The valley was a cradle of early agriculture.","山谷是早期农业的发源地。",null,"https://www.merriam-webster.com/dictionary/cradle"],
   ["sense-3","轻轻抱住；托住","v.",["轻轻抱住","托住"],["cradle-3","underlying-origin","ancestral-background","coordinate-zero-point","geographical-provenance"],"She cradled the injured bird in her hands.","她双手轻轻托着受伤的鸟。",null,"https://www.merriam-webster.com/dictionary/cradle"],
   ["sense-4","支架；托座","n.",["支架","托座"],["cradle-4","underlying-origin","ancestral-background","coordinate-zero-point","geographical-provenance"],"The technician placed the device in its charging cradle.","技术员把装置放入充电托座。",null,"https://www.merriam-webster.com/dictionary/cradle"]
  ],[{"terms":["发祥地","孩提时代","放在摇篮内","抚育","刈割"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cradle","reason":"本批 cradle 的教学范围明确为：摇篮（n.）、发源地；孕育之所（n.）、轻轻抱住；托住（v.）、支架；托座（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("storey",[
   ["sense-1","楼层","n.",["楼层"],["storey-1"],"The library occupies the top storey.","图书馆位于顶层。",null,"https://www.merriam-webster.com/dictionary/storey"]
  ],[{"terms":["楼","层楼"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/storey","reason":"保留楼层的英式拼写；实际定义见 story 页面第二个名词条，不能误用故事义。 本批 storey 的教学范围明确为：楼层（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("handrail",[
   ["sense-1","扶手","n.",["扶手"],["handrail-1"],"Hold the handrail on the steep steps.","走陡峭台阶时扶住扶手。",null,"https://www.merriam-webster.com/dictionary/handrail"]
  ],[{"terms":["栏杆"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/handrail","reason":"本批 handrail 的教学范围明确为：扶手（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("column",[
   ["sense-1","柱；圆柱","n.",["柱","圆柱"],["column-1","supporting-column","essential-support"],"Stone columns support the roof.","石柱支撑着屋顶。",null,"https://www.merriam-webster.com/dictionary/column"],
   ["sense-2","栏；纵列","n.",["栏","纵列"],["column-2","supporting-column","essential-support"],"Write the totals in the final column.","把总数写在最后一列。",null,"https://www.merriam-webster.com/dictionary/column"],
   ["sense-3","专栏","n.",["专栏"],["column-3","supporting-column","essential-support"],"She writes a weekly column about science.","她每周撰写一个科学专栏。",null,"https://www.merriam-webster.com/dictionary/column"]
  ],[{"terms":["纵队","列","柱形物","柱形图"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/column","reason":"本批 column 的教学范围明确为：柱；圆柱（n.）、栏；纵列（n.）、专栏（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("reception",[
   ["sense-1","接待；接待处","n.",["接待","接待处"],["reception-1"],"Leave the key at reception.","把钥匙留在接待处。",null,"https://www.merriam-webster.com/dictionary/reception"],
   ["sense-2","招待会","n.",["招待会"],["reception-2"],"The guests attended a reception after the lecture.","讲座后嘉宾们参加了招待会。",null,"https://www.merriam-webster.com/dictionary/reception"],
   ["sense-3","接收效果；反响","n.",["接收效果","反响"],["reception-3"],"Radio reception is poor in the valley.","山谷里的无线电接收效果很差。",null,"https://www.merriam-webster.com/dictionary/reception"]
  ],[{"terms":["接受","感受"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reception","reason":"本批 reception 的教学范围明确为：接待；接待处（n.）、招待会（n.）、接收效果；反响（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("carry",[
   ["sense-1","携带；搬运","v.",["携带","搬运"],["carry-1"],"The volunteers carried supplies up the hill.","志愿者把物资搬上山。",null,"https://www.merriam-webster.com/dictionary/carry"],
   ["sense-2","传递；传播","v.",["传递","传播"],["carry-2"],"The wind carries pollen across the fields.","风把花粉传遍田野。",null,"https://www.merriam-webster.com/dictionary/carry"],
   ["sense-3","售有；备有货品","v.",["售有","备有货品"],["carry-3"],"The shop carries a range of spare parts.","商店备有多种备用零件。",null,"https://www.merriam-webster.com/dictionary/carry"],
   ["sense-4","支撑；承受","v.",["支撑","承受"],["carry-4"],"The pillars carry the weight of the roof.","柱子承受着屋顶的重量。",null,"https://www.merriam-webster.com/dictionary/carry"],
   ["sense-5","获准通过；赢得支持","v.",["获准通过","赢得支持"],["carry-5"],"The motion carried by a narrow majority.","动议以微弱多数通过。",null,"https://www.merriam-webster.com/dictionary/carry"]
  ],[{"terms":["进位","射程","运载","运送","支持","传送","包含","被携带","能达到","进位数"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/carry","reason":"本批 carry 的教学范围明确为：携带；搬运（v.）、传递；传播（v.）、售有；备有货品（v.）、支撑；承受（v.）、获准通过；赢得支持（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("coach",[
   ["sense-1","教练；辅导教师","n.",["教练","辅导教师"],["coach-1"],"The coach explained the new exercise.","教练讲解了新练习。",null,"https://www.merriam-webster.com/dictionary/coach"],
   ["sense-2","长途客车；客车车厢","n.",["长途客车","客车车厢"],["coach-2"],"The group travelled to the coast by coach.","团队乘长途客车前往海岸。",null,"https://www.merriam-webster.com/dictionary/coach"],
   ["sense-3","训练；辅导","v.",["训练","辅导"],["coach-3"],"She coaches young swimmers at weekends.","她在周末训练年轻游泳者。",null,"https://www.merriam-webster.com/dictionary/coach"],
   ["sense-4","经济舱","n.",["经济舱"],["coach-4"],"We booked coach to keep travel costs down.","我们订了经济舱来降低旅行成本。",null,"https://www.merriam-webster.com/dictionary/coach"]
  ],[{"terms":["四轮大马车","指导","坐马车旅行","作指导"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/coach","reason":"本批 coach 的教学范围明确为：教练；辅导教师（n.）、长途客车；客车车厢（n.）、训练；辅导（v.）、经济舱（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("highway",[
   ["sense-1","公路；干道","n.",["公路","干道"],["highway-1"],"The highway connects the two cities.","这条公路连接两座城市。",null,"https://www.merriam-webster.com/dictionary/highway"]
  ],[{"terms":["大道","捷径","大路"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/highway","reason":"本批 highway 的教学范围明确为：公路；干道（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("signpost",[
   ["sense-1","路标；指示物","n.",["路标","指示物"],["signpost-1"],"A signpost pointed towards the campsite.","路标指向营地。",null,"https://www.merriam-webster.com/dictionary/signpost"],
   ["sense-2","设置路标；指明方向","v.",["设置路标","指明方向"],["signpost-2"],"The route is clearly signposted.","这条路线设有清晰路标。",null,"https://www.merriam-webster.com/dictionary/signpost"]
  ],[{"terms":["招牌柱","广告柱"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/signpost","reason":"本批 signpost 的教学范围明确为：路标；指示物（n.）、设置路标；指明方向（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("truck",[
   ["sense-1","卡车；运货车","n.",["卡车","运货车"],["truck-1"],"A truck delivered the timber.","一辆卡车运来了木材。",null,"https://www.merriam-webster.com/dictionary/truck"],
   ["sense-2","用卡车运输","v.",["用卡车运输"],["truck-2"],"The company trucks produce to the market.","公司用卡车把农产品运到市场。",null,"https://www.merriam-webster.com/dictionary/truck"]
  ],[{"terms":["货车","对...进行交易","来往","实物工资","(供应市场的)蔬菜","废物","废话","交往","以卡车运输","驾驶卡车","以物易物"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/truck","reason":"本批 truck 的教学范围明确为：卡车；运货车（n.）、用卡车运输（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("automobile",[
   ["sense-1","汽车","n.",["汽车"],["automobile-1"],"The exhibition traces the history of the automobile.","展览追溯了汽车的历史。",null,"https://www.merriam-webster.com/dictionary/automobile"]
  ],[]);
  entry("tractor",[
   ["sense-1","拖拉机；牵引车","n.",["拖拉机","牵引车"],["tractor-1"],"A tractor pulled the loaded trailer.","拖拉机牵引着装满货物的拖车。",null,"https://www.merriam-webster.com/dictionary/tractor"]
  ],[{"terms":["牵引器","拉纸器","进纸器"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tractor","reason":"本批 tractor 的教学范围明确为：拖拉机；牵引车（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("wheel",[
   ["sense-1","轮；车轮","n.",["轮","车轮"],["wheel-1"],"The front wheel struck a stone.","前轮撞上了一块石头。",null,"https://www.merriam-webster.com/dictionary/wheel"],
   ["sense-2","推着移动","v.",["推着移动"],["wheel-2"],"She wheeled the trolley into the lift.","她把手推车推进电梯。",null,"https://www.merriam-webster.com/dictionary/wheel"],
   ["sense-3","盘旋；转向","v.",["盘旋","转向"],["wheel-3"],"The gulls wheeled above the harbour.","海鸥在港口上空盘旋。",null,"https://www.merriam-webster.com/dictionary/wheel"]
  ],[{"terms":["轮子","方向盘","旋转","机构","重要人物","使旋转","转动","使转向","转弯"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/wheel","reason":"本批 wheel 的教学范围明确为：轮；车轮（n.）、推着移动（v.）、盘旋；转向（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("cycle",[
   ["sense-1","周期；循环","n.",["周期","循环"],["cycle-1"],"The diagram shows the water cycle.","图示展示了水循环。",null,"https://www.merriam-webster.com/dictionary/cycle"],
   ["sense-2","骑自行车","v.",["骑自行车"],["cycle-2"],"He cycles to work along the river.","他沿河骑自行车上班。",null,"https://www.merriam-webster.com/dictionary/cycle"]
  ],[{"terms":["自行车","一段时间","整套","轮转","使循环","使轮转","环路"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cycle","reason":"本批 cycle 的教学范围明确为：周期；循环（n.）、骑自行车（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("bureaucracy",[
   ["sense-1","官僚机构；官僚制度","n.",["官僚机构","官僚制度"],["bureaucracy-1","bureaucratism-red-tape"],"The reform changed the structure of the bureaucracy.","改革改变了官僚机构的结构。",null,"https://www.merriam-webster.com/dictionary/bureaucracy"],
   ["sense-2","繁文缛节；官僚作风","n.",["繁文缛节","官僚作风"],["bureaucracy-2","bureaucratism-red-tape"],"Excessive bureaucracy delayed the repairs.","过多的繁文缛节耽误了维修。",null,"https://www.merriam-webster.com/dictionary/bureaucracy"]
  ],[{"terms":["官僚","官吏","官僚主义","官僚政治"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bureaucracy","reason":"本批 bureaucracy 的教学范围明确为：官僚机构；官僚制度（n.）、繁文缛节；官僚作风（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("consortium",[
   ["sense-1","联合体；财团","n.",["联合体","财团"],["consortium-1","association-organisation","association-connection","17-related","association-mental","alliance-union"],"A consortium of universities funded the expedition.","大学联合体资助了这次考察。",null,"https://www.merriam-webster.com/dictionary/consortium"]
  ],[{"terms":["协会","合伙","(国际性)财团","合作","联合"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/consortium","reason":"本批 consortium 的教学范围明确为：联合体；财团（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("league",[
   ["sense-1","联盟；联赛","n.",["联盟","联赛"],["league-1","alliance-union"],"The club joined a regional league.","俱乐部加入了地区联赛。",null,"https://www.merriam-webster.com/dictionary/league"],
   ["sense-2","等级；类别","n.",["等级","类别"],["league-2","alliance-union"],"The new instrument is in a different league from the old one.","新仪器的水平与旧仪器完全不同。","in a different league","https://www.merriam-webster.com/dictionary/league"]
  ],[{"terms":["同盟","盟约","组联盟","(使)加盟"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/league","reason":"本批 league 的教学范围明确为：联盟；联赛（n.）、等级；类别（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("nationality",[
   ["sense-1","国籍；民族身份","n.",["国籍","民族身份"],["nationality-1"],"The form asks for your nationality.","表格要求填写国籍。",null,"https://www.merriam-webster.com/dictionary/nationality"]
  ],[{"terms":["国家","民族性","民族","国民"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/nationality","reason":"本批 nationality 的教学范围明确为：国籍；民族身份（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("crown",[
   ["sense-1","王冠；王权","n.",["王冠","王权"],["crown-1"],"The crown is displayed in a secure case.","王冠陈列在安全展柜中。",null,"https://www.merriam-webster.com/dictionary/crown"],
   ["sense-2","顶部；冠部","n.",["顶部","冠部"],["crown-2"],"The crown of the tree rose above the roof.","树冠高出了屋顶。",null,"https://www.merriam-webster.com/dictionary/crown"],
   ["sense-3","为……加冕；使圆满完成","v.",["为……加冕","使圆满完成"],["crown-3"],"The victory crowned years of training.","这场胜利使多年的训练取得圆满成果。",null,"https://www.merriam-webster.com/dictionary/crown"]
  ],[{"terms":["顶点","使成王","加冕","居...之顶"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/crown","reason":"本批 crown 的教学范围明确为：王冠；王权（n.）、顶部；冠部（n.）、为……加冕；使圆满完成（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("emigrate",[
   ["sense-1","移居国外","v.",["移居国外"],["emigrate-1","animal-migration","human-migration","gradual-transfer","computing-migration"],"Her family emigrated from Italy in the last century.","她的家人在上世纪移居国外，离开了意大利。",null,"https://www.merriam-webster.com/dictionary/emigrate"]
  ],[{"terms":["(使)移居","(使)移民"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/emigrate","reason":"本批 emigrate 的教学范围明确为：移居国外（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("colony",[
   ["sense-1","殖民地；移民聚居地","n.",["殖民地","移民聚居地"],["colony-1"],"The book describes life in a remote colony.","书中描述了一个偏远殖民地的生活。",null,"https://www.merriam-webster.com/dictionary/colony"],
   ["sense-2","群落；菌落","n.",["群落","菌落"],["colony-2"],"The sample contained a colony of bacteria.","样本中有一个细菌菌落。",null,"https://www.merriam-webster.com/dictionary/colony"]
  ],[{"terms":["移民队","菌(集)落","菌丛","移民区"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/colony","reason":"本批 colony 的教学范围明确为：殖民地；移民聚居地（n.）、群落；菌落（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("reign",[
   ["sense-1","统治期；在位期","n.",["统治期","在位期"],["reign-1","rule-regulation","rule-control-noun","rule-govern","rule-decide","rule-draw-lines"],"The monument dates from the king's reign.","纪念碑建于那位国王的在位期间。",null,"https://www.merriam-webster.com/dictionary/reign"],
   ["sense-2","统治；盛行","v.",["统治","盛行"],["reign-2","rule-regulation","rule-control-noun","rule-govern","rule-decide","rule-draw-lines"],"Silence reigned in the empty hall.","空荡的大厅里一片寂静。",null,"https://www.merriam-webster.com/dictionary/reign"]
  ],[{"terms":["为王，为君","当政"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reign","reason":"本批 reign 的教学范围明确为：统治期；在位期（n.）、统治；盛行（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("puppet",[
   ["sense-1","木偶；傀儡","n.",["木偶","傀儡"],["puppet-1"],"The puppeteer lifted the puppet onto the stage.","木偶艺人把木偶举上舞台。",null,"https://www.merriam-webster.com/dictionary/puppet"]
  ],[{"terms":["受他人操纵的人"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/puppet","reason":"本批 puppet 的教学范围明确为：木偶；傀儡（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("security",[
   ["sense-1","安全；保障","n.",["安全","保障"],["security-1"],"The upgrade improves the security of stored files.","升级提高了存储文件的安全性。",null,"https://www.merriam-webster.com/dictionary/security"],
   ["sense-2","抵押品；担保","n.",["抵押品","担保"],["security-2"],"The lender accepted the building as security.","贷款方接受该建筑作为抵押品。",null,"https://www.merriam-webster.com/dictionary/security"],
   ["sense-3","证券（常用复数）","n.",["证券（常用复数）"],["security-3"],"The fund holds a range of securities.","基金持有多种证券。","securities","https://www.merriam-webster.com/dictionary/security"],
   ["sense-4","安保；警卫人员","n.",["安保","警卫人员"],["security-4"],"Security checked every visitor's pass.","安保人员检查了每位访客的通行证。",null,"https://www.merriam-webster.com/dictionary/security"]
  ],[{"terms":["安全性","防护物","保安","可靠性","担保人","保证金","保密性","安全检查程序"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/security","reason":"本批 security 的教学范围明确为：安全；保障（n.）、抵押品；担保（n.）、证券（常用复数）（n.）、安保；警卫人员（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("bond",[
   ["sense-1","纽带；联系","n.",["纽带","联系"],["bond-1"],"The shared experience created a lasting bond.","共同经历建立了持久的纽带。",null,"https://www.merriam-webster.com/dictionary/bond"],
   ["sense-2","债券","n.",["债券"],["bond-2"],"The council issued a bond to fund the project.","地方政府发行债券为项目融资。",null,"https://www.merriam-webster.com/dictionary/bond"],
   ["sense-3","粘合；建立紧密关系","v.",["粘合","建立紧密关系"],["bond-3"],"The adhesive bonds the two surfaces firmly.","胶黏剂把两个表面牢牢粘合。",null,"https://www.merriam-webster.com/dictionary/bond"],
   ["sense-4","化学键","n.",["化学键"],["bond-4"],"Heat can break the bond between these atoms.","热能破坏这些原子间的化学键。",null,"https://www.merriam-webster.com/dictionary/bond"]
  ],[{"terms":["捆绑物","结合","契约","粘合剂","保证人","键","关栈保留","存入关栈","使黏合"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bond","reason":"本批 bond 的教学范围明确为：纽带；联系（n.）、债券（n.）、粘合；建立紧密关系（v.）、化学键（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("increment",[
   ["sense-1","增量；增加额","n.",["增量","增加额"],["increment-1","increase-quantity","increase-amount"],"The scale is marked in small increments.","刻度以小增量标示。",null,"https://www.merriam-webster.com/dictionary/increment"]
  ],[{"terms":["增加","增值","盈余"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/increment","reason":"本批 increment 的教学范围明确为：增量；增加额（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("escalate",[
   ["sense-1","升级；逐步增加","v.",["升级","逐步增加"],["escalate-1","increase-quantity","increase-amount"],"Costs escalated as the project expanded.","随着项目扩大，成本不断增加。",null,"https://www.merriam-webster.com/dictionary/escalate"]
  ],[{"terms":["逐步扩大","逐步升高","逐步增强","使逐步上升"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/escalate","reason":"本批 escalate 的教学范围明确为：升级；逐步增加（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("adequate",[
   ["sense-1","足够的；尚可的","adj.",["足够的","尚可的"],["adequate-1","sufficient-amount"],"The shelter provides adequate protection from the rain.","这个遮蔽处能提供足够的防雨保护。",null,"https://www.merriam-webster.com/dictionary/adequate"]
  ],[{"terms":["适当的","胜任的","充分的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/adequate","reason":"本批 adequate 的教学范围明确为：足够的；尚可的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("diminution",[
   ["sense-1","减少；减弱","n.",["减少","减弱"],["diminution-1","decrease-quantity","decrease-amount"],"The survey recorded a diminution in traffic noise.","调查记录了交通噪声的减弱。",null,"https://www.merriam-webster.com/dictionary/diminution"]
  ],[{"terms":["缩小","减低","减小"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/diminution","reason":"本批 diminution 的教学范围明确为：减少；减弱（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("insufficient",[
   ["sense-1","不足的","adj.",["不足的"],["insufficient-1","insufficient-not-adequate","feeling-not-competent"],"The evidence was insufficient to support the claim.","证据不足以支持这一主张。",null,"https://www.merriam-webster.com/dictionary/insufficient"]
  ],[{"terms":["不够的","不能胜任的","不充足的","不充分的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/insufficient","reason":"本批 insufficient 的教学范围明确为：不足的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("expansive",[
   ["sense-1","广阔的；开阔的","adj.",["广阔的","开阔的"],["expansive-1"],"The terrace offers an expansive view of the valley.","露台可以俯瞰山谷的开阔景色。",null,"https://www.merriam-webster.com/dictionary/expansive"],
   ["sense-2","健谈而友好的","adj.",["健谈而友好的"],["expansive-2"],"He became expansive over dinner.","晚餐时他变得健谈而热情。",null,"https://www.merriam-webster.com/dictionary/expansive"]
  ],[{"terms":["扩张性的","使扩大的","膨胀的","可以膨胀的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/expansive","reason":"本批 expansive 的教学范围明确为：广阔的；开阔的（adj.）、健谈而友好的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("agent",[
   ["sense-1","代理人；经纪人","n.",["代理人","经纪人"],["agent-1"],"The agent arranged the sale of the house.","经纪人安排了房屋出售。",null,"https://www.merriam-webster.com/dictionary/agent"],
   ["sense-2","起作用的物质或因素","n.",["起作用的物质或因素"],["agent-2"],"Water is an important agent of erosion.","水是造成侵蚀的重要因素。",null,"https://www.merriam-webster.com/dictionary/agent"],
   ["sense-3","特工；密探","n.",["特工","密探"],["agent-3"],"The novel follows an agent working abroad.","小说讲述了一名在海外工作的特工。",null,"https://www.merriam-webster.com/dictionary/agent"]
  ],[{"terms":["代理商","政府代表","动原","媒介","代理程序"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/agent","reason":"本批 agent 的教学范围明确为：代理人；经纪人（n.）、起作用的物质或因素（n.）、特工；密探（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("investigate",[
   ["sense-1","调查；研究","v.",["调查","研究"],["investigate-1"],"The team investigated the cause of the leak.","团队调查了泄漏原因。",null,"https://www.merriam-webster.com/dictionary/investigate"]
  ],[{"terms":["审查"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/investigate","reason":"本批 investigate 的教学范围明确为：调查；研究（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("whisper",[
   ["sense-1","低声说；耳语","v.",["低声说","耳语"],["whisper-1","murmur-sound","murmur-complain","murmur-speak","soft-speech","murmur-medical"],"She whispered the answer to her friend.","她低声把答案告诉朋友。",null,"https://www.merriam-webster.com/dictionary/whisper"],
   ["sense-2","低语；轻微声响","n.",["低语","轻微声响"],["whisper-2","murmur-sound","murmur-complain","murmur-speak","soft-speech","murmur-medical"],"A whisper came from behind the curtain.","帘子后传来低语声。",null,"https://www.merriam-webster.com/dictionary/whisper"]
  ],[{"terms":["密谈","谣传","沙沙声","沙沙地响"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/whisper","reason":"本批 whisper 的教学范围明确为：低声说；耳语（v.）、低语；轻微声响（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("jail",[
   ["sense-1","监狱；拘留所","n.",["监狱","拘留所"],["jail-1","18-near-jail-prison"],"The old jail is now a museum.","旧监狱如今是一座博物馆。",null,"https://www.merriam-webster.com/dictionary/jail"],
   ["sense-2","监禁","v.",["监禁"],["jail-2","18-near-jail-prison"],"The court jailed the offender for fraud.","法庭因诈骗罪判处违法者监禁。",null,"https://www.merriam-webster.com/dictionary/jail"]
  ],[{"terms":["监牢","下狱"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/jail","reason":"本批 jail 的教学范围明确为：监狱；拘留所（n.）、监禁（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("prison",[
   ["sense-1","监狱；监禁","n.",["监狱","监禁"],["prison-1","18-near-jail-prison"],"He wrote the memoir while in prison.","他在狱中写下了回忆录。",null,"https://www.merriam-webster.com/dictionary/prison"]
  ],[{"terms":["拘留所"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/prison","reason":"本批 prison 的教学范围明确为：监狱；监禁（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("reasonably",[
   ["sense-1","合理地；通情达理地","adv.",["合理地","通情达理地"],["reasonably-1"],"The manager responded reasonably to the request.","经理通情达理地回应了请求。",null,"https://www.merriam-webster.com/dictionary/reasonably"],
   ["sense-2","相当地；适度地","adv.",["相当地","适度地"],["reasonably-2"],"The hotel is reasonably close to the station.","酒店离车站相当近。",null,"https://www.merriam-webster.com/dictionary/reasonably"]
  ],[]);
  entry("commit",[
   ["sense-1","犯下；实施坏事","v.",["犯下","实施坏事"],["commit-1"],"The investigators found no evidence that she had committed a crime.","调查人员没有发现她犯罪的证据。",null,"https://www.merriam-webster.com/dictionary/commit"],
   ["sense-2","承诺；投入","v.",["承诺","投入"],["commit-2"],"The charity committed funds to the repair project.","慈善机构承诺为修复项目投入资金。",null,"https://www.merriam-webster.com/dictionary/commit"],
   ["sense-3","把……交付或收容","v.",["把……交付或收容"],["commit-3"],"The documents were committed to the archive.","文件被交付档案馆保管。",null,"https://www.merriam-webster.com/dictionary/commit"]
  ],[{"terms":["委托(托付)","犯罪","指派...作战","使承担义务","犯","做","把...交托给"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/commit","reason":"本批 commit 的教学范围明确为：犯下；实施坏事（v.）、承诺；投入（v.）、把……交付或收容（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("sin",[
   ["sense-1","罪；过错","n.",["罪","过错"],["sin-1"],"The sermon discussed forgiveness of sin.","布道讨论了罪的宽恕。",null,"https://www.merriam-webster.com/dictionary/sin"],
   ["sense-2","犯罪；违背道德准则","v.",["犯罪","违背道德准则"],["sin-2"],"The character believes he has sinned against his family.","这个人物认为自己对家人犯了过错。",null,"https://www.merriam-webster.com/dictionary/sin"]
  ],[{"terms":["过失","失礼","犯"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sin","reason":"本批 sin 的教学范围明确为：罪；过错（n.）、犯罪；违背道德准则（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("restriction",[
   ["sense-1","限制；约束","n.",["限制","约束"],["restriction-1"],"The restriction applies only to heavy vehicles.","这项限制只适用于重型车辆。",null,"https://www.merriam-webster.com/dictionary/restriction"]
  ],[{"terms":["限定"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/restriction","reason":"本批 restriction 的教学范围明确为：限制；约束（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("criminal",[
   ["sense-1","犯罪的；刑事的","adj.",["犯罪的","刑事的"],["criminal-1"],"The police began a criminal investigation.","警方开始了刑事调查。",null,"https://www.merriam-webster.com/dictionary/criminal"],
   ["sense-2","罪犯","n.",["罪犯"],["criminal-2"],"The novel describes a criminal trying to rebuild his life.","小说描写了一名试图重建生活的罪犯。",null,"https://www.merriam-webster.com/dictionary/criminal"]
  ],[{"terms":["犯人","刑事","犯了罪的","有罪的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/criminal","reason":"本批 criminal 的教学范围明确为：犯罪的；刑事的（adj.）、罪犯（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("invade",[
   ["sense-1","入侵；侵占","v.",["入侵","侵占"],["invade-1","18-near-invade-invasion"],"The army invaded the neighbouring territory.","军队入侵了邻近领土。",null,"https://www.merriam-webster.com/dictionary/invade"],
   ["sense-2","侵扰；大量涌入","v.",["侵扰","大量涌入"],["invade-2","18-near-invade-invasion"],"Bright lights invaded the quiet bedroom.","强光侵扰了安静的卧室。",null,"https://www.merriam-webster.com/dictionary/invade"]
  ],[{"terms":["侵入","拥入","侵略","侵袭","强入","侵犯"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/invade","reason":"本批 invade 的教学范围明确为：入侵；侵占（v.）、侵扰；大量涌入（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("threat",[
   ["sense-1","威胁；构成威胁的人或事物","n.",["威胁","构成威胁的人或事物"],["threat-1","18-near-threat-threaten"],"The disease poses a threat to the crop.","这种疾病对作物构成威胁。",null,"https://www.merriam-webster.com/dictionary/threat"]
  ],[{"terms":["恐吓","恶兆"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/threat","reason":"本批 threat 的教学范围明确为：威胁；构成威胁的人或事物（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("aggressiveness",[
   ["sense-1","侵略性；好斗性；积极进取","n.",["侵略性","好斗性","积极进取"],["aggressiveness-1"],"The coach encouraged confidence without unnecessary aggressiveness.","教练鼓励自信，但不鼓励不必要的好斗。",null,"https://www.merriam-webster.com/dictionary/aggressiveness"]
  ],[{"terms":["攻击性","咄咄逼人","进取心","积极主动"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/aggressiveness","reason":"本批 aggressiveness 的教学范围明确为：侵略性；好斗性；积极进取（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("deprivation",[
   ["sense-1","剥夺；匮乏","n.",["剥夺","匮乏"],["deprivation-1"],"Sleep deprivation affected the participants' concentration.","睡眠不足影响了参与者的注意力。",null,"https://www.merriam-webster.com/dictionary/deprivation"]
  ],[{"terms":["剥夺官职","免职","丧失","缺乏"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/deprivation","reason":"本批 deprivation 的教学范围明确为：剥夺；匮乏（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("invasion",[
   ["sense-1","入侵；侵入","n.",["入侵","侵入"],["invasion-1","18-near-invade-invasion"],"The exhibit records the invasion of the island.","展览记录了对该岛的入侵。",null,"https://www.merriam-webster.com/dictionary/invasion"]
  ],[{"terms":["侵犯","侵害","侵袭","发病"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/invasion","reason":"本批 invasion 的教学范围明确为：入侵；侵入（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("threaten",[
   ["sense-1","威胁；恐吓","v.",["威胁","恐吓"],["threaten-1","18-near-threat-threaten"],"The storm threatened the coastal villages.","风暴威胁着沿海村庄。",null,"https://www.merriam-webster.com/dictionary/threaten"],
   ["sense-2","预示危险；有……的危险","v.",["预示危险","有……的危险"],["threaten-2","18-near-threat-threaten"],"Dark clouds threatened rain.","乌云预示要下雨。",null,"https://www.merriam-webster.com/dictionary/threaten"]
  ],[{"terms":["预示...的凶兆","恫吓","可能来临"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/threaten","reason":"本批 threaten 的教学范围明确为：威胁；恐吓（v.）、预示危险；有……的危险（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("assault",[
   ["sense-1","攻击；袭击","n.",["攻击","袭击"],["assault-1","military-offensive","verbal-criticism","tackle-task-vigorously"],"The assault damaged the town's main bridge.","袭击损坏了镇上的主要桥梁。",null,"https://www.merriam-webster.com/dictionary/assault"],
   ["sense-2","袭击；猛烈抨击","v.",["袭击","猛烈抨击"],["assault-2","military-offensive","verbal-criticism","tackle-task-vigorously"],"The report assaulted the assumptions behind the policy.","报告猛烈抨击了政策背后的假设。",null,"https://www.merriam-webster.com/dictionary/assault"]
  ],[{"terms":["发动攻击"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/assault","reason":"本批 assault 的教学范围明确为：攻击；袭击（n.）、袭击；猛烈抨击（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("challenge",[
   ["sense-1","挑战；难题","n.",["挑战","难题"],["challenge-1","heated-argument","legal-conflict","call-into-question","claim-contested"],"The steep climb was a challenge for the whole group.","陡峭的攀登对整个团队都是挑战。",null,"https://www.merriam-webster.com/dictionary/challenge"],
   ["sense-2","质疑；提出异议","v.",["质疑","提出异议"],["challenge-2","heated-argument","legal-conflict","call-into-question","claim-contested"],"The findings challenge the earlier explanation.","研究结果对先前的解释提出了质疑。",null,"https://www.merriam-webster.com/dictionary/challenge"],
   ["sense-3","向……挑战；邀请竞争","v.",["向……挑战","邀请竞争"],["challenge-3","heated-argument","legal-conflict","call-into-question","claim-contested"],"She challenged her brother to a race.","她向哥哥提出赛跑挑战。",null,"https://www.merriam-webster.com/dictionary/challenge"]
  ],[{"terms":["盘问","向...挑战","要求","怀疑","对(证据等)表示异议"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/challenge","reason":"本批 challenge 的教学范围明确为：挑战；难题（n.）、质疑；提出异议（v.）、向……挑战；邀请竞争（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("siege",[
   ["sense-1","围攻；围困","n.",["围攻","围困"],["siege-1"],"The siege cut the town off from outside supplies.","围困切断了城镇的外部补给。",null,"https://www.merriam-webster.com/dictionary/siege"]
  ],[{"terms":["包围","再三的努力"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/siege","reason":"本批 siege 的教学范围明确为：围攻；围困（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("client",[
   ["sense-1","客户；委托人","n.",["客户","委托人"],["client-1","customer-buyer","customer-person"],"The architect discussed the plans with her client.","建筑师与客户讨论了设计方案。",null,"https://www.merriam-webster.com/dictionary/client"],
   ["sense-2","客户端","n.",["客户端"],["client-2","customer-buyer","customer-person"],"The client requests data from the server.","客户端向服务器请求数据。",null,"https://www.merriam-webster.com/dictionary/client"]
  ],[{"terms":["顾客","客户机","客户机程序"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/client","reason":"本批 client 的教学范围明确为：客户；委托人（n.）、客户端（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("miss",[
   ["sense-1","未击中；未赶上","v.",["未击中","未赶上"],["miss-1"],"We missed the last bus by two minutes.","我们差两分钟没赶上末班车。",null,"https://www.merriam-webster.com/dictionary/miss"],
   ["sense-2","想念；察觉失去","v.",["想念","察觉失去"],["miss-2"],"She missed her friends after moving away.","搬走后，她想念朋友们。",null,"https://www.merriam-webster.com/dictionary/miss"],
   ["sense-3","漏掉；未注意到","v.",["漏掉","未注意到"],["miss-3"],"The editor missed a small error in the title.","编辑漏看了标题中的一个小错误。",null,"https://www.merriam-webster.com/dictionary/miss"],
   ["sense-4","未击中；失败的一击","n.",["未击中","失败的一击"],["miss-4"],"The goalkeeper's miss surprised the crowd.","守门员的失手让观众吃惊。",null,"https://www.merriam-webster.com/dictionary/miss"],
   ["sense-5","小姐（称谓）","n.",["小姐（称谓）"],["miss-5"],"Miss Patel welcomed the visitors.","帕特尔小姐欢迎了来访者。",null,"https://www.merriam-webster.com/dictionary/miss"],
   ["sense-6","错失机会；未参加","v.",["错失机会","未参加"],["miss-6"],"She missed the chance to speak to the author.","她错过了与作者交谈的机会。",null,"https://www.merriam-webster.com/dictionary/miss"]
  ],[{"terms":["失误","避免","失败","小姐","未得到","未达到","未听到","未觉察","逃脱","遗漏","错过","思念","击不中"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/miss","reason":"本批 miss 的教学范围明确为：未击中；未赶上（v.）、想念；察觉失去（v.）、漏掉；未注意到（v.）、未击中；失败的一击（n.）、小姐（称谓）（n.）、错失机会；未参加（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("marry",[
   ["sense-1","结婚；娶；嫁","v.",["结婚","娶","嫁"],["marry-1","18-near-marry-marriage"],"They married in a small town hall.","他们在一座小镇市政厅结婚。",null,"https://www.merriam-webster.com/dictionary/marry"],
   ["sense-2","结合；使融合","v.",["结合","使融合"],["marry-2","18-near-marry-marriage"],"The design marries traditional materials with modern methods.","设计把传统材料与现代方法结合起来。",null,"https://www.merriam-webster.com/dictionary/marry"]
  ],[{"terms":["为…主持婚礼","使结合"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/marry","reason":"本批 marry 的教学范围明确为：结婚；娶；嫁（v.）、结合；使融合（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("wedding",[
   ["sense-1","婚礼","n.",["婚礼"],["wedding-1","18-near-marriage-wedding"],"The wedding took place in the garden.","婚礼在花园举行。",null,"https://www.merriam-webster.com/dictionary/wedding"]
  ],[{"terms":["结婚","结婚周年纪念日","结合","结婚纪念日"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/wedding","reason":"本批 wedding 的教学范围明确为：婚礼（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("depend",[
   ["sense-1","依赖；依靠","v.",["依赖","依靠"],["depend-1"],"The village depends on the river for water.","村庄依靠河流获取水源。","depend on","https://www.merriam-webster.com/dictionary/depend"],
   ["sense-2","取决于","v.",["取决于"],["depend-2"],"The departure time depends on the weather.","出发时间取决于天气。","depend on","https://www.merriam-webster.com/dictionary/depend"]
  ],[{"terms":["靠","视...而定","信赖"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/depend","reason":"本批 depend 的教学范围明确为：依赖；依靠（v.）、取决于（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("marriage",[
   ["sense-1","婚姻","n.",["婚姻"],["marriage-1","18-near-marry-marriage","18-near-marriage-wedding"],"Their marriage lasted for fifty years.","他们的婚姻持续了五十年。",null,"https://www.merriam-webster.com/dictionary/marriage"],
   ["sense-2","紧密结合","n.",["紧密结合"],["marriage-2","18-near-marry-marriage","18-near-marriage-wedding"],"The building is a marriage of old and new styles.","建筑融合了新旧风格。",null,"https://www.merriam-webster.com/dictionary/marriage"]
  ],[{"terms":["结婚","婚礼","合并"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/marriage","reason":"本批 marriage 的教学范围明确为：婚姻（n.）、紧密结合（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("member",[
   ["sense-1","成员；会员","n.",["成员","会员"],["member-1"],"Each member received a copy of the report.","每位成员都收到一份报告。",null,"https://www.merriam-webster.com/dictionary/member"],
   ["sense-2","部件；构件","n.",["部件","构件"],["member-2"],"The engineer inspected each structural member.","工程师检查了每个结构构件。",null,"https://www.merriam-webster.com/dictionary/member"],
   ["sense-3","集合的元素","n.",["集合的元素"],["member-3"],"Each member of the set satisfies the same condition.","集合的每个元素都满足同一条件。",null,"https://www.merriam-webster.com/dictionary/member"]
  ],[{"terms":["│肢","肢体"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/member","reason":"本批 member 的教学范围明确为：成员；会员（n.）、部件；构件（n.）、集合的元素（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("solely",[
   ["sense-1","仅仅；单独地","adv.",["仅仅","单独地"],["solely-1"],"The decision was based solely on the evidence.","决定完全依据证据作出。",null,"https://www.merriam-webster.com/dictionary/solely"]
  ],[]);
  entry("acquaintance",[
   ["sense-1","熟人","n.",["熟人"],["acquaintance-1"],"An old acquaintance recognised her at the station.","一位老熟人在车站认出了她。",null,"https://www.merriam-webster.com/dictionary/acquaintance"],
   ["sense-2","了解；熟悉","n.",["了解","熟悉"],["acquaintance-2"],"He has some acquaintance with local history.","他对当地历史略有了解。",null,"https://www.merriam-webster.com/dictionary/acquaintance"]
  ],[{"terms":["认识","相识者"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/acquaintance","reason":"本批 acquaintance 的教学范围明确为：熟人（n.）、了解；熟悉（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("vibrate",[
   ["sense-1","振动；颤动","v.",["振动","颤动"],["vibrate-1","18-near-vibrate-sway"],"The window vibrated as the train passed.","火车经过时窗户振动起来。",null,"https://www.merriam-webster.com/dictionary/vibrate"]
  ],[{"terms":["激动","摇摆","踌躇","使颤动","使振动","使摆动"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/vibrate","reason":"本批 vibrate 的教学范围明确为：振动；颤动（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("rotate",[
   ["sense-1","旋转；轮流","v.",["旋转","轮流"],["rotate-1","turn-rotate","turn-direction","turn-reverse","turn-become","17-change","complete-change","change-form-use","turn-redirect","turn-spoil","turn-activate","turn-stop","turn-reject","turn-arrive","turn-result","turn-chance","turn-bend","17-bend","bend-curve-noun","turn-change-noun","turn-rotation"],"Rotate the handle clockwise.","顺时针转动把手。",null,"https://www.merriam-webster.com/dictionary/rotate"],
   ["sense-2","轮换；交替","v.",["轮换","交替"],["rotate-2","turn-rotate","turn-direction","turn-reverse","turn-become","17-change","complete-change","change-form-use","turn-redirect","turn-spoil","turn-activate","turn-stop","turn-reject","turn-arrive","turn-result","turn-chance","turn-bend","17-bend","bend-curve-noun","turn-change-noun","turn-rotation"],"The farmers rotate crops to protect the soil.","农民通过轮作保护土壤。",null,"https://www.merriam-webster.com/dictionary/rotate"]
  ],[{"terms":["辐状的","使旋转","使转动","使轮流","循环"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/rotate","reason":"本批仅采用旋转及轮换动词，不混入另读的辐状形容词。 本批 rotate 的教学范围明确为：旋转；轮流（v.）、轮换；交替（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("sway",[
   ["sense-1","摇摆；摆动","v.",["摇摆","摆动"],["sway-1","18-near-vibrate-sway","affect-influence","affect-move","affect-pretend","pretend-feign"],"The branches swayed in the breeze.","树枝在微风中摇摆。",null,"https://www.merriam-webster.com/dictionary/sway"],
   ["sense-2","影响；使改变主意","v.",["影响","使改变主意"],["sway-2","18-near-vibrate-sway","affect-influence","affect-move","affect-pretend","pretend-feign"],"The evidence swayed several committee members.","证据改变了几位委员会成员的看法。",null,"https://www.merriam-webster.com/dictionary/sway"],
   ["sense-3","控制；支配","n.",["控制","支配"],["sway-3","18-near-vibrate-sway","affect-influence","affect-move","affect-pretend","pretend-feign"],"The region remained under the dynasty's sway.","该地区仍处于这个王朝的统治之下。",null,"https://www.merriam-webster.com/dictionary/sway"]
  ],[{"terms":["影响力","摇动","弄歪","使倾斜","使动摇","倾斜","动摇","统治","转向"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sway","reason":"本批 sway 的教学范围明确为：摇摆；摆动（v.）、影响；使改变主意（v.）、控制；支配（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("connect",[
   ["sense-1","连接；联系","v.",["连接","联系"],["connect-1"],"The bridge connects the two banks.","桥连接着两岸。",null,"https://www.merriam-webster.com/dictionary/connect"],
   ["sense-2","接续交通；转乘","v.",["接续交通","转乘"],["connect-2"],"The morning train connects with the airport bus.","早班火车与机场巴士接续。",null,"https://www.merriam-webster.com/dictionary/connect"]
  ],[{"terms":["联合"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/connect","reason":"本批 connect 的教学范围明确为：连接；联系（v.）、接续交通；转乘（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("combine",[
   ["sense-1","结合；混合","v.",["结合","混合"],["combine-1","mix-combine","batch12-equivalent-mix-combine","mix-confuse","mix-socialise","mix-mixture","mix-audio","blend-mix-verb","blend-harmonise","blend-mixture","unite-join","join-integrate","unite-cooperate"],"The recipe combines sweet and sour flavours.","食谱把酸甜口味结合起来。",null,"https://www.merriam-webster.com/dictionary/combine"]
  ],[{"terms":["(使)联合","(使)结合","(企业的)联合","联合收割机"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/combine","reason":"当前音标 /kəmˈbaɪn/ 对应结合动词，收割机名词 /ˈkɒmbaɪn/ 保留参考。 本批 combine 的教学范围明确为：结合；混合（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("penetrate",[
   ["sense-1","穿透；进入","v.",["穿透","进入"],["penetrate-1","pierce-penetrate","pierce-stab","pierce-pervade"],"Water penetrated the damaged roof.","水渗透了受损的屋顶。",null,"https://www.merriam-webster.com/dictionary/penetrate"],
   ["sense-2","洞察；理解","v.",["洞察","理解"],["penetrate-2","pierce-penetrate","pierce-stab","pierce-pervade"],"The analysis penetrates the reasons behind the change.","分析深入揭示了变化背后的原因。",null,"https://www.merriam-webster.com/dictionary/penetrate"]
  ],[{"terms":["刺穿","渗透","看穿","了解","使充溢","刺入","打进"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/penetrate","reason":"本批 penetrate 的教学范围明确为：穿透；进入（v.）、洞察；理解（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("bet",[
   ["sense-1","赌注；打赌","n.",["赌注","打赌"],["bet-1","18-near-bet-stake"],"They made a small bet on the outcome.","他们就结果打了一个小赌。",null,"https://www.merriam-webster.com/dictionary/bet"],
   ["sense-2","打赌；确信","v.",["打赌","确信"],["bet-2","18-near-bet-stake"],"I bet the journey will take longer than an hour.","我敢肯定旅程会超过一小时。",null,"https://www.merriam-webster.com/dictionary/bet"],
   ["sense-3","可取的选择","n.",["可取的选择"],["bet-3","18-near-bet-stake"],"The train is your best bet in bad weather.","天气不好时，火车是最稳妥的选择。","one's best bet","https://www.merriam-webster.com/dictionary/bet"]
  ],[]);
  entry("stake",[
   ["sense-1","桩；木桩","n.",["桩","木桩"],["stake-1","18-near-bet-stake"],"A wooden stake supports the young tree.","一根木桩支撑着幼树。",null,"https://www.merriam-webster.com/dictionary/stake"],
   ["sense-2","赌注；利害关系；股份","n.",["赌注","利害关系","股份"],["stake-2","18-near-bet-stake"],"The company holds a stake in the project.","公司在这个项目中持有股份。",null,"https://www.merriam-webster.com/dictionary/stake"],
   ["sense-3","以……打赌或冒险","v.",["以……打赌或冒险"],["stake-3","18-near-bet-stake"],"She staked her reputation on the plan.","她把声誉押在了这个计划上。",null,"https://www.merriam-webster.com/dictionary/stake"],
   ["sense-4","利害攸关的东西；风险","n.",["利害攸关的东西","风险"],["stake-4","18-near-bet-stake"],"The stakes are high in this negotiation.","这次谈判利害攸关。","the stakes","https://www.merriam-webster.com/dictionary/stake"],
   ["sense-5","用桩支撑或标示","v.",["用桩支撑或标示"],["stake-5","18-near-bet-stake"],"We staked the young trees before the storm.","暴风雨来临前我们给幼树打了支撑桩。",null,"https://www.merriam-webster.com/dictionary/stake"]
  ],[{"terms":["炮烙刑","木柱","奖金","打桩","用桩撑","下赌注","资助","打赌"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/stake","reason":"本批 stake 的教学范围明确为：桩；木桩（n.）、赌注；利害关系；股份（n.）、以……打赌或冒险（v.）、利害攸关的东西；风险（n.）、用桩支撑或标示（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("nightmare",[
   ["sense-1","噩梦","n.",["噩梦"],["nightmare-1"],"The child woke from a nightmare.","孩子从噩梦中醒来。",null,"https://www.merriam-webster.com/dictionary/nightmare"],
   ["sense-2","可怕或棘手的经历","n.",["可怕或棘手的经历"],["nightmare-2"],"The delayed delivery became a logistical nightmare.","延迟交货成了后勤上的噩梦。",null,"https://www.merriam-webster.com/dictionary/nightmare"]
  ],[{"terms":["梦魇","恶梦","可怕的事物(或情景、人物)"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/nightmare","reason":"本批 nightmare 的教学范围明确为：噩梦（n.）、可怕或棘手的经历（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("yawn",[
   ["sense-1","打哈欠","v.",["打哈欠"],["yawn-1"],"He yawned during the long wait.","长时间等待时他打了个哈欠。",null,"https://www.merriam-webster.com/dictionary/yawn"],
   ["sense-2","哈欠","n.",["哈欠"],["yawn-2"],"She tried to hide a yawn.","她试图掩饰一个哈欠。",null,"https://www.merriam-webster.com/dictionary/yawn"]
  ],[{"terms":["裂开","打着哈欠说"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/yawn","reason":"本批 yawn 的教学范围明确为：打哈欠（v.）、哈欠（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("dwarf",[
   ["sense-1","矮星","n.",["矮星"],["dwarf-1"],"The astronomers observed a white dwarf.","天文学家观测了一颗白矮星。",null,"https://www.merriam-webster.com/dictionary/dwarf"],
   ["sense-2","使显得矮小；相形见绌","v.",["使显得矮小","相形见绌"],["dwarf-2"],"The new tower dwarfs the surrounding buildings.","新塔楼使周围建筑显得矮小。",null,"https://www.merriam-webster.com/dictionary/dwarf"],
   ["sense-3","矮生动植物","n.",["矮生动植物"],["dwarf-3"],"This apple tree is a dwarf that suits small gardens.","这棵苹果树是适合小花园的矮生品种。",null,"https://www.merriam-webster.com/dictionary/dwarf"]
  ],[{"terms":["矮子","侏儒","(使)变矮小"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dwarf","reason":"用于人的称谓有语境与冒犯风险，本批只训练矮星、矮生植物及使显得矮小的动词。 本批 dwarf 的教学范围明确为：矮星（n.）、使显得矮小；相形见绌（v.）、矮生动植物（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("moan",[
   ["sense-1","呻吟声；怨言","n.",["呻吟","抱怨","呻吟声","怨言"],["moan-1","complain-discontent","complain-symptom"],"A low moan came from the injured animal.","受伤的动物发出低低的呻吟。",null,"https://www.merriam-webster.com/dictionary/moan"],
   ["sense-2","呻吟；抱怨","v.",["呻吟","抱怨"],["moan-2","complain-discontent","complain-symptom"],"The passengers moaned about the delay.","乘客抱怨延误。",null,"https://www.merriam-webster.com/dictionary/moan"]
  ],[{"terms":["悲叹","呻吟着说"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/moan","reason":"本批 moan 的教学范围明确为：呻吟；抱怨（n.）、呻吟；抱怨（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("infection",[
   ["sense-1","感染；传染病","n.",["感染","传染病"],["infection-1","18-near-infection-infect","18-near-illness-infection"],"The treatment stopped the infection from spreading.","治疗阻止了感染扩散。",null,"https://www.merriam-webster.com/dictionary/infection"]
  ],[{"terms":["传染","影响"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/infection","reason":"本批 infection 的教学范围明确为：感染；传染病（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("clone",[
   ["sense-1","克隆体；复制品","n.",["克隆体","复制品"],["clone-1"],"The new plant is a clone of the original.","新植株是原植株的克隆体。",null,"https://www.merriam-webster.com/dictionary/clone"],
   ["sense-2","克隆；复制","v.",["克隆","复制"],["clone-2"],"The researchers cloned the cells for further study.","研究人员克隆了细胞以供进一步研究。",null,"https://www.merriam-webster.com/dictionary/clone"]
  ],[{"terms":["无性系","代用件"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/clone","reason":"本批 clone 的教学范围明确为：克隆体；复制品（n.）、克隆；复制（v.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("symptom",[
   ["sense-1","症状；征兆","n.",["症状","征兆"],["symptom-1"],"A persistent cough can be a symptom of illness.","持续咳嗽可能是疾病的症状。",null,"https://www.merriam-webster.com/dictionary/symptom"]
  ],[{"terms":["征候"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/symptom","reason":"本批 symptom 的教学范围明确为：症状；征兆（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("illness",[
   ["sense-1","疾病；生病状态","n.",["疾病","生病状态"],["illness-1","18-near-illness-infection"],"She returned to work after a long illness.","长期患病后她重返工作岗位。",null,"https://www.merriam-webster.com/dictionary/illness"]
  ],[{"terms":["恶意","病"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/illness","reason":"本批 illness 的教学范围明确为：疾病；生病状态（n.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
  entry("infect",[
   ["sense-1","感染；传染","v.",["感染","传染"],["infect-1","18-near-infection-infect","contaminate-pollute","environmental-contamination"],"The virus can infect several species.","这种病毒能感染多个物种。",null,"https://www.merriam-webster.com/dictionary/infect"],
   ["sense-2","感染情绪或思想","v.",["感染情绪或思想"],["infect-2","18-near-infection-infect","contaminate-pollute","environmental-contamination"],"Her enthusiasm infected the whole group.","她的热情感染了整个团队。",null,"https://www.merriam-webster.com/dictionary/infect"]
  ],[]);
  entry("disabled",[
   ["sense-1","有残障的","adj.",["有残障的"],["disabled-1","disable-incapacitate","disable-deactivate"],"The entrance provides level access for disabled visitors.","入口为有残障的来访者提供无台阶通道。",null,"https://www.merriam-webster.com/dictionary/disabled"]
  ],[{"terms":["残废的","有缺陷的","失效的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/disabled","reason":"本批 disabled 的教学范围明确为：有残障的（adj.）。所列旧译含不同构式、词性、专业或更宽的表达，未作为本批独立义项认证；须在对应上下文中另行核对，不能据旧译将这些表达当成不受限制的正确答案。"}]);
 }
 if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch18=register;
})(typeof window==='object'?window:globalThis);
