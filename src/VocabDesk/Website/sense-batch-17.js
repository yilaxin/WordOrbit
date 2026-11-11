/* Batch 17: reviewed public learning scope, original bilingual examples.
 * Source entries were read during review. No learner state is included. */
(function(scope){
 'use strict';
 function register(add){
  function entry(word,rows,refs){
   const e=add(word,rows,refs);e.reviewDate='2026-11-11';
   e.senses.forEach((s,i)=>s.source=rows[i][8]);
   e.sources=[...new Set([...rows.map(r=>r[8]),...refs.map(r=>r.source)])];
   return e;
  }
  entry("latitude",[
   ["angle","纬度","n.",["纬度"],["latitude-angle"],"The research station lies at a latitude of sixty degrees north.","研究站位于北纬六十度。",null,"https://www.merriam-webster.com/dictionary/latitude"],
   ["freedom","行动或选择的自由","n.",["行动或选择的自由"],["latitude-freedom"],"The director gave us latitude to redesign the exhibition.","主任给了我们重新设计展览的自由。",null,"https://www.merriam-webster.com/dictionary/latitude"]
  ],[{"terms":["范围","宽容度","伟度"],"decision":"scope-excluded","reason":"地理义是纬度而非经线；“伟度”为错字。“范围”仅特定扩展，“宽容度”须指行动余地，不表示一般性格宽容，保留范围说明。","source":"https://www.merriam-webster.com/dictionary/latitude"}]);
  entry("oxide",[
   ["compound","氧化物","n.",["氧化物"],["oxide-compound"],"A thin layer of oxide formed on the metal surface.","金属表面形成了一层薄薄的氧化物。",null,"https://www.merriam-webster.com/dictionary/oxide"]
  ],[]);
  entry("dioxide",[
   ["compound","二氧化物","n.",["二氧化物"],["dioxide-compound"],"Each molecule of this dioxide contains two oxygen atoms.","这种二氧化物的每个分子都含有两个氧原子。",null,"https://www.merriam-webster.com/dictionary/dioxide"]
  ],[]);
  entry("disaster",[
   ["catastrophe","灾难；灾祸","n.",["灾难","灾祸"],["disaster-catastrophe","17-disaster","17-calamitous"],"Emergency teams reached the valley after the disaster.","灾难发生后，应急队伍到达了山谷。",null,"https://www.merriam-webster.com/dictionary/disaster"],
   ["failure","彻底的失败","n.",["彻底的失败","彻底失败"],["disaster-failure"],"The outdoor concert was a disaster because the sound system failed.","音响系统出了故障，露天音乐会彻底失败了。",null,"https://www.merriam-webster.com/dictionary/disaster"],
   ["mess","一团糟的地方或事物","n.",["一团糟的地方或事物"],["disaster-mess"],"After the children finished painting, the kitchen was a disaster.","孩子们画完画后，厨房一片狼藉。",null,"https://www.merriam-webster.com/dictionary/disaster"]
  ],[{"terms":["不幸"],"decision":"scope-excluded","reason":"强调严重损失或彻底失败，不能把任何普通“不幸”都等同灾难。","source":"https://www.merriam-webster.com/dictionary/disaster"}]);
  entry("core",[
   ["centre","核心；中心部分","n.",["核心","中心部分","内核"],["core-centre"],"A metal core runs through the middle of the cable.","电缆中间贯穿着一根金属芯。",null,"https://www.merriam-webster.com/dictionary/core"],
   ["fruit","果核；果心","n.",["果核","果心"],["core-fruit"],"Put the apple core in the food-waste bin.","把苹果核放进厨余垃圾桶。",null,"https://www.merriam-webster.com/dictionary/core"],
   ["essence","要点；精髓","n.",["要点","精髓"],["core-essence"],"Trust lies at the core of their partnership.","信任是他们合作关系的核心。",null,"https://www.merriam-webster.com/dictionary/core"],
   ["muscles","躯干核心肌群","n.",["躯干核心肌群"],["core-muscles"],"The exercise strengthens your core without using weights.","这项练习不用负重就能增强躯干核心肌群。",null,"https://www.merriam-webster.com/dictionary/core"],
   ["essential","核心的；最重要的","n.（作定语）",["核心的","最重要的"],["core-essential"],"The course develops the core skills needed for laboratory work.","这门课培养实验室工作所需的核心技能。","core + noun","https://www.merriam-webster.com/dictionary/core"],
   ["remove","去掉果核","v.",["去掉果核","挖...的核"],["core-remove"],"Core the pears before slicing them.","把梨去核后再切片。",null,"https://www.merriam-webster.com/dictionary/core"]
  ],[{"terms":["核心网"],"decision":"scope-excluded","reason":"核心网属于电信复合术语，不作为 core 单词的普遍独立义。","source":"https://www.merriam-webster.com/dictionary/core"}]);
  entry("greenhouse",[
   ["building","温室；暖房","n.",["温室","暖房"],["greenhouse-building"],"The seedlings stayed in the greenhouse during the cold week.","寒冷的那一周，幼苗一直放在温室里。",null,"https://www.merriam-webster.com/dictionary/greenhouse"],
   ["effect","温室效应的","adj.",["温室效应的"],["greenhouse-effect"],"The study measured greenhouse gas emissions from the farm.","这项研究测量了农场的温室气体排放。",null,"https://www.merriam-webster.com/dictionary/greenhouse"]
  ],[]);
  entry("mishap",[
   ["accident","小意外；不幸事故","n.",["小意外","不幸事故","不幸之事"],["mishap-accident","17-calamitous"],"A minor mishap with the luggage delayed our departure.","行李出了点小意外，耽误了我们出发。",null,"https://www.merriam-webster.com/dictionary/mishap"]
  ],[{"terms":["灾祸","恶运"],"decision":"scope-excluded","reason":"常指意外或小不幸，不把灾祸的严重程度或持续恶运直接等同于一次 mishap。","source":"https://www.merriam-webster.com/dictionary/mishap"}]);
  entry("calamity",[
   ["disaster","大灾难；重大不幸","n.",["大灾难","重大不幸","灾难","不幸事件"],["calamity-disaster","17-disaster"],"The failure of the harvest was a calamity for the village.","庄稼歉收给村庄带来了大灾难。",null,"https://www.merriam-webster.com/dictionary/calamity"]
  ],[]);
  entry("pebble",[
   ["stone","卵石；小圆石","n.",["卵石","小圆石","小鹅卵石","小石"],["pebble-stone"],"She picked a smooth pebble from the riverbank.","她从河岸上捡起一颗光滑的卵石。",null,"https://www.merriam-webster.com/dictionary/pebble"],
   ["cover","用卵石铺盖","v.",["用卵石铺盖"],["pebble-cover"],"They pebbled the narrow path beside the pond.","他们用卵石铺了池塘旁的小路。",null,"https://www.merriam-webster.com/dictionary/pebble"]
  ],[{"terms":["水晶透镜","碎石花纹"],"decision":"scope-excluded","reason":"水晶及表面颗粒纹理是词典专门义；“水晶透镜”并非所有小石，暂不纳入常用石头与铺石教学范围。","source":"https://www.merriam-webster.com/dictionary/pebble"}]);
  entry("magnet",[
   ["object","磁铁；磁体","n.",["磁铁","磁体"],["magnet-object"],"A small magnet held the note against the fridge door.","一块小磁铁把便条吸在冰箱门上。",null,"https://www.merriam-webster.com/dictionary/magnet"],
   ["attraction","有吸引力的人或事物","n.",["有吸引力的人或事物","有吸引力之人","有吸引力之物"],["magnet-attraction","17-attraction","visitor-attraction"],"The new aquarium became a magnet for visitors.","新水族馆成了吸引游客的地方。",null,"https://www.merriam-webster.com/dictionary/magnet"]
  ],[]);
  entry("contamination",[
   ["pollution","污染；沾染","n.",["污染","沾染","沾污"],["contamination-pollution"],"Tests found contamination in the soil near the old factory.","检测发现旧工厂附近的土壤受到污染。",null,"https://www.merriam-webster.com/dictionary/contamination"]
  ],[{"terms":["污物"],"decision":"scope-excluded","reason":"本批考污染过程或状态；污染物这一转指名词用法保留参考，不能把任何污物都当成污染过程。","source":"https://www.merriam-webster.com/dictionary/contamination"}]);
  entry("poisonous",[
   ["toxic","有毒的","adj.",["有毒的"],["poisonous-toxic","poisonous"],"The label warns that the liquid is poisonous.","标签警告这种液体有毒。",null,"https://www.merriam-webster.com/dictionary/poisonous"],
   ["malicious","恶意的；刻毒的","adj.",["恶意的","刻毒的","恶毒的"],["poisonous-malicious"],"Poisonous remarks damaged the atmosphere in the office.","刻毒的言论破坏了办公室的气氛。",null,"https://www.merriam-webster.com/dictionary/poisonous"]
  ],[{"terms":["讨厌的"],"decision":"scope-excluded","reason":"恶意用法要有有害或恶毒语境，不能泛指一切令人讨厌的东西。","source":"https://www.merriam-webster.com/dictionary/poisonous"}]);
  entry("splendid",[
   ["magnificent","壮丽的；华美的","adj.",["壮丽的","华美的","灿烂的"],["splendid-magnificent","17-shine"],"A splendid staircase led to the palace ballroom.","一道华美的楼梯通向宫殿的舞厅。",null,"https://www.merriam-webster.com/dictionary/splendid"],
   ["excellent","极好的；出色的","adj.",["极好的","出色的","了不起的","杰出的"],["splendid-excellent","exceptional-excellence"],"You have done a splendid job restoring the old table.","你把这张旧桌子修复得非常出色。",null,"https://www.merriam-webster.com/dictionary/splendid"]
  ],[{"terms":["光亮的","显著的"],"decision":"scope-excluded","reason":"发光、显著等需具体修辞；本批以华美与出色区分，不将普通显著程度都当成赞美。","source":"https://www.merriam-webster.com/dictionary/splendid"}]);
  entry("dramatic",[
   ["striking","显著的；剧烈的","adj.",["显著的","剧烈的"],["dramatic-striking"],"The new bridge caused a dramatic reduction in travel time.","新桥使出行时间大幅缩短。",null,"https://www.merriam-webster.com/dictionary/dramatic"],
   ["theatre","戏剧的","adj.",["戏剧的"],["dramatic-theatre"],"The school offers dramatic training as well as music lessons.","学校既提供戏剧训练，也开设音乐课。",null,"https://www.merriam-webster.com/dictionary/dramatic"],
   ["theatrical","夸张的；戏剧性的","adj.",["夸张的","戏剧性的"],["dramatic-theatrical"],"He made a dramatic gesture before revealing the answer.","他先做了一个夸张的手势，才公布答案。",null,"https://www.merriam-webster.com/dictionary/dramatic"]
  ],[{"terms":["生动的"],"decision":"scope-excluded","reason":"可指引人注目、激动人心或夸张；孤立“生动的”过宽，不能等同一般 vivid。","source":"https://www.merriam-webster.com/dictionary/dramatic"}]);
  entry("gap",[
   ["opening","缺口；间隙","n.",["缺口","间隙","缝隙"],["gap-opening"],"A rabbit squeezed through a gap in the fence.","一只兔子从篱笆的缺口挤了过去。",null,"https://www.merriam-webster.com/dictionary/gap"],
   ["lack","缺漏；不足","n.",["缺漏","不足"],["gap-lack"],"The course helped fill a gap in her knowledge of chemistry.","这门课弥补了她在化学知识上的不足。",null,"https://www.merriam-webster.com/dictionary/gap"],
   ["difference","差距；分歧","n.",["差距","分歧"],["gap-difference"],"The report highlights the pay gap between the two groups.","报告突出了两组人之间的薪酬差距。",null,"https://www.merriam-webster.com/dictionary/gap"],
   ["interval","间隔；中断","n.",["间隔","中断","间断","间距"],["gap-interval"],"There was a long gap between his first and second novels.","他的第一部和第二部小说之间隔了很长时间。",null,"https://www.merriam-webster.com/dictionary/gap"],
   ["pass","山口；隘口","n.",["山口","隘口"],["gap-pass"],"The walkers crossed the ridge through a narrow gap.","步行者们穿过一道狭窄的山口越过了山脊。",null,"https://www.merriam-webster.com/dictionary/gap"]
  ],[{"terms":["通用汇编程序","打开缺口","造成缝隙","豁开","图形应用程序"],"decision":"scope-excluded","reason":"通用汇编程序与图形应用程序是缩略语或软件名；开缺口等动词另有构式，本批只训练名词的缺口、间隔、差距、缺漏与山口。","source":"https://www.merriam-webster.com/dictionary/gap"}]);
  entry("deforest",[
   ["clear","砍伐森林；使成为无林地","v.",["砍伐森林","使成为无林地","砍掉...上的树林"],["deforest-clear"],"Large areas were deforested to create cattle pasture.","大片地区的森林被砍掉，用来开辟牧场。",null,"https://www.merriam-webster.com/dictionary/deforest"]
  ],[{"terms":["滥伐森林"],"decision":"scope-excluded","reason":"指移除森林；是否过度、违法或滥伐须另有语境，词本身不保证这一评价。","source":"https://www.merriam-webster.com/dictionary/deforest"}]);
  entry("sunrise",[
   ["dawn","日出；黎明","n.",["日出","黎明","拂晓"],["sunrise-dawn"],"We reached the lake just before sunrise.","我们在日出前不久到达了湖边。",null,"https://www.merriam-webster.com/dictionary/sunrise"]
  ],[]);
  entry("solar",[
   ["sun","太阳的","adj.",["太阳的","日光的","源自太阳的"],["solar-sun"],"The telescope records changes in solar activity.","这台望远镜记录太阳活动的变化。",null,"https://www.merriam-webster.com/dictionary/solar"],
   ["powered","利用太阳能的","adj.",["利用太阳能的"],["solar-powered"],"Solar panels provide electricity for the visitor centre.","太阳能电池板为游客中心供电。",null,"https://www.merriam-webster.com/dictionary/solar"]
  ],[{"terms":["腹腔丛的"],"decision":"scope-excluded","reason":"腹腔神经丛来自 solar plexus 固定术语，不是普通 solar 单独表示腹腔。","source":"https://www.merriam-webster.com/dictionary/solar"}]);
  entry("shade",[
   ["shelter","阴凉处；阴影","n.",["阴凉处","阴影","荫"],["shade-shelter"],"We rested in the shade of a large oak.","我们在一棵大橡树的树荫下休息。",null,"https://www.merriam-webster.com/dictionary/shade"],
   ["colour","色调；颜色的深浅","n.",["色调","颜色的深浅","浓淡"],["shade-colour"],"She chose a pale shade of green for the walls.","她为墙壁选了一种浅绿色调。",null,"https://www.merriam-webster.com/dictionary/shade"],
   ["cover","灯罩；遮光帘","n.",["灯罩","遮光帘","遮光物","帘"],["shade-cover"],"The lamp needs a wider shade to soften the light.","这盏灯需要更宽的灯罩来柔化光线。",null,"https://www.merriam-webster.com/dictionary/shade"],
   ["slight","少许；细微差别","n.",["少许","细微差别","微量"],["shade-slight"],"His version adds a shade of uncertainty to the ending.","他的版本给结尾增添了一丝不确定性。",null,"https://www.merriam-webster.com/dictionary/shade"],
   ["sunglasses","太阳镜（复数）","n.",["太阳镜（复数）"],["shade-sunglasses","glass-spectacles"],"He took off his shades when he entered the shop.","他进店时摘下了太阳镜。","shades","https://www.merriam-webster.com/dictionary/shade"],
   ["shield","遮蔽；为……遮阳","v.",["遮蔽","为……遮阳"],["shade-shield"],"The awning shades the tables from the afternoon sun.","遮阳篷为桌子挡住了午后的阳光。",null,"https://www.merriam-webster.com/dictionary/shade"],
   ["darken","给……画阴影；使渐变","v.",["给……画阴影","使渐变","使阴暗","渐变"],["shade-darken"],"Shade the lower edge of the drawing with a soft pencil.","用软铅笔给图画的下缘涂上阴影。",null,"https://www.merriam-webster.com/dictionary/shade"]
  ],[{"terms":["阴暗","底纹","微减"],"decision":"scope-excluded","reason":"区分阴影名词与阴暗形容词，底纹及轻微削减属于另定范围的工艺或程度用法。","source":"https://www.merriam-webster.com/dictionary/shade"}]);
  entry("vapour",[
   ["gas","蒸气；气态物质","n.",["蒸气","气态物质","汽"],["vapour-gas"],"Water vapour condensed on the cold window.","水蒸气在冰冷的窗户上凝结了。",null,"https://www.merriam-webster.com/dictionary/vapor"]
  ],[{"terms":["蒸发","吹牛","使蒸发","使汽化"],"decision":"scope-excluded","reason":"保留英式拼写，定义读实际 vapor 条目。蒸发与吹嘘的动词用法不与当前蒸气名词混配。","source":"https://www.merriam-webster.com/dictionary/vapor"}]);
  entry("log",[
   ["timber","原木；木段","n.",["原木","木段","圆木"],["log-timber"],"They stacked the dry logs beside the fireplace.","他们把干木段堆在壁炉旁。",null,"https://www.merriam-webster.com/dictionary/log"],
   ["record","日志；航行记录","n.",["日志","航行记录"],["log-record"],"The pilot checked the flight log before take-off.","飞行员在起飞前查看了飞行日志。",null,"https://www.merriam-webster.com/dictionary/log"],
   ["record-verb","记录；把……记入日志","v.",["记录","把……记入日志"],["log-record-verb"],"The device logs the temperature every ten minutes.","这个装置每十分钟记录一次温度。",null,"https://www.merriam-webster.com/dictionary/log"],
   ["cut","伐木","v.",["伐木"],["log-cut"],"The company is not allowed to log in the protected forest.","这家公司不得在保护林内伐木。",null,"https://www.merriam-webster.com/dictionary/log"],
   ["accumulate","累计行驶或飞行","v.",["累计行驶或飞行"],["log-accumulate"],"The rescue helicopter logged six hours in the air yesterday.","救援直升机昨天累计飞行了六小时。",null,"https://www.merriam-webster.com/dictionary/log"],
   ["math","对数（缩略形式）","n.",["对数（缩略形式）"],["log-math"],"Use the log of the measured value in this calculation.","在这个计算中使用测量值的对数。",null,"https://www.merriam-webster.com/dictionary/log"]
  ],[{"terms":["计程仪","切","航行"],"decision":"scope-excluded","reason":"计程仪为航海装置；切割、航行都不能不带伐木或日志计量语境无限扩张，保留为参考。","source":"https://www.merriam-webster.com/dictionary/log"}]);
  entry("stale",[
   ["food","不新鲜的；陈的","adj.",["不新鲜的","陈的"],["stale-food"],"The bread had gone stale by Monday morning.","到了周一早晨，面包已经不新鲜了。",null,"https://www.merriam-webster.com/dictionary/stale"],
   ["overused","陈腐的；老套的","adj.",["陈腐的","老套的","陈旧的"],["stale-overused"],"The comedian replaced the stale jokes with new material.","这位喜剧演员用新素材换掉了老套的笑话。",null,"https://www.merriam-webster.com/dictionary/stale"],
   ["weary","疲惫而失去活力的","adj.",["疲惫而失去活力的","疲惫的"],["stale-weary"],"After months on the same project, the team felt stale.","在同一个项目上工作了数月后，团队感到疲惫而缺乏活力。",null,"https://www.merriam-webster.com/dictionary/stale"]
  ],[{"terms":["尿","使变旧","走味","变陈旧","失时效","撒尿"],"decision":"scope-excluded","reason":"尿与排尿是另一个词源的专门义；变陈、使陈及法律失效等用法不并入本批三个形容词教学义。","source":"https://www.merriam-webster.com/dictionary/stale"}]);
  entry("jungle",[
   ["forest","热带丛林","n.",["热带丛林","丛林"],["jungle-forest"],"The trail disappeared into the dense jungle.","小径消失在茂密的热带丛林中。",null,"https://www.merriam-webster.com/dictionary/jungle"],
   ["confusion","错综复杂或杂乱的事物","n.",["错综复杂或杂乱的事物","杂乱的一堆"],["jungle-confusion","maze-confusion"],"They struggled through a jungle of regulations.","他们艰难地应付着错综复杂的规章制度。",null,"https://www.merriam-webster.com/dictionary/jungle"],
   ["ruthless","弱肉强食的环境","n.",["弱肉强食的环境","弱肉强食的地方"],["jungle-ruthless"],"The novel portrays the city as a jungle where nobody trusts anyone.","小说把城市描绘成一个人人互不信任、弱肉强食的地方。",null,"https://www.merriam-webster.com/dictionary/jungle"]
  ],[]);
  entry("rotten",[
   ["decayed","腐烂的；腐朽的","adj.",["腐烂的","腐朽的"],["rotten-decayed","organic-deterioration"],"The carpenter replaced the rotten beam above the door.","木匠更换了门上方腐朽的横梁。",null,"https://www.merriam-webster.com/dictionary/rotten"],
   ["bad","糟糕的；很差的","adj.",["糟糕的","很差的"],["rotten-bad"],"The picnic was cancelled because of the rotten weather.","由于天气糟糕，野餐取消了。",null,"https://www.merriam-webster.com/dictionary/rotten"],
   ["wicked","卑劣的；不厚道的","adj.",["卑劣的","不厚道的","堕落的"],["rotten-wicked"],"It was a rotten thing to blame your friend for your mistake.","把自己的错误怪到朋友头上是很卑劣的行为。",null,"https://www.merriam-webster.com/dictionary/rotten"],
   ["unwell","不舒服的","adj.",["不舒服的","虚弱的"],["rotten-unwell"],"She felt rotten and decided to stay in bed.","她感到不舒服，决定卧床休息。",null,"https://www.merriam-webster.com/dictionary/rotten"],
   ["extremely","极度地（固定搭配）","adv.",["极度地（固定搭配）"],["rotten-extremely"],"Their grandparents spoil them rotten during the holidays.","假期里，祖父母把他们宠得不得了。","spoil sb rotten","https://www.merriam-webster.com/dictionary/rotten"]
  ],[{"terms":["恶臭的","风化的"],"decision":"scope-excluded","reason":"腐烂不必总有臭味；岩石风化、松脆等须特定地质语境，不泛化为所有腐烂对象。","source":"https://www.merriam-webster.com/dictionary/rotten"}]);
  entry("weed",[
   ["plant","杂草","n.",["杂草","野草"],["weed-plant"],"A weed was growing between the paving stones.","铺路石的缝隙间长着一株杂草。",null,"https://www.merriam-webster.com/dictionary/weed"],
   ["remove","除草","v.",["除草","除...的草"],["weed-remove"],"We weed the vegetable beds every weekend.","我们每个周末都给菜畦除草。",null,"https://www.merriam-webster.com/dictionary/weed"],
   ["eliminate","剔除；清除不需要的东西","v.",["剔除","清除不需要的东西"],["weed-eliminate"],"The first review weeded out duplicate applications.","第一轮审查剔除了重复的申请。","weed out","https://www.merriam-webster.com/dictionary/weed"]
  ],[]);
  entry("grass",[
   ["plant","草；禾本科植物","n.",["草","禾本科植物","禾本"],["grass-plant"],"The sheep fed on fresh grass beside the stream.","绵羊在溪边吃着新鲜的草。",null,"https://www.merriam-webster.com/dictionary/grass"],
   ["lawn","草地；草坪","n.",["草地","草坪","牧场"],["grass-lawn"],"Please keep bicycles off the grass.","请不要把自行车骑上草坪。",null,"https://www.merriam-webster.com/dictionary/grass"],
   ["cover","给……种草","v.",["给……种草"],["grass-cover"],"The workers grassed the slope to reduce erosion.","工人们在斜坡上种草以减少侵蚀。",null,"https://www.merriam-webster.com/dictionary/grass"]
  ],[{"terms":["草原"],"decision":"scope-excluded","reason":"草地可作名词转指，但“草原”还含地域生态范围，不把两者视为完全可替换。","source":"https://www.merriam-webster.com/dictionary/grass"}]);
  entry("hay",[
   ["fodder","干草","n.",["干草"],["hay-fodder"],"The farmer stored the hay in a dry barn.","农民把干草储存在干燥的谷仓里。",null,"https://www.merriam-webster.com/dictionary/hay"]
  ],[{"terms":["制干草","供给干草","晒干草"],"decision":"scope-excluded","reason":"制备、储存或喂干草的动词另有农业语境；本批只训练干草名词。","source":"https://www.merriam-webster.com/dictionary/hay"}]);
  entry("olive",[
   ["fruit","橄榄果","n.",["橄榄果","橄榄"],["olive-fruit"],"She added a sliced olive to the salad.","她在沙拉里加了一颗切片的橄榄。",null,"https://www.merriam-webster.com/dictionary/olive"],
   ["tree","橄榄树","n.",["橄榄树"],["olive-tree"],"An old olive grows beside the farmhouse.","农舍旁长着一棵老橄榄树。",null,"https://www.merriam-webster.com/dictionary/olive"],
   ["colour","橄榄绿色的","adj.",["橄榄绿色的","橄榄色的"],["olive-colour"],"He wore an olive jacket on the walk.","他散步时穿了一件橄榄绿色的夹克。",null,"https://www.merriam-webster.com/dictionary/olive"]
  ],[{"terms":["橄榄色","橄榄枝","黄绿色的","黄褐色的"],"decision":"scope-excluded","reason":"名词颜色、橄榄枝和细分黄绿色黄褐色须依语境；本批果实、树木与橄榄绿形容词不代表一切黄绿或棕黄色。","source":"https://www.merriam-webster.com/dictionary/olive"}]);
  entry("thorn",[
   ["spike","刺；棘刺","n.",["刺","棘刺","棘","荆棘"],["thorn-spike"],"A thorn caught in the sleeve of her coat.","一根刺钩住了她外套的袖子。",null,"https://www.merriam-webster.com/dictionary/thorn"],
   ["trouble","不断带来麻烦的人或事物","n.",["不断带来麻烦的人或事物"],["thorn-trouble"],"The leaking roof remained a thorn in the manager's side.","漏水的屋顶一直是让经理头疼的问题。","a thorn in sb's side","https://www.merriam-webster.com/dictionary/thorn"]
  ],[]);
  entry("vine",[
   ["climber","藤；藤本植物","n.",["藤","藤本植物","蔓"],["vine-climber"],"A vine climbed around the wooden post.","一株藤缠绕着木柱向上生长。",null,"https://www.merriam-webster.com/dictionary/vine"],
   ["grape","葡萄树","n.",["葡萄树","葡萄"],["vine-grape"],"The vineyard planted a new vine at the end of each row.","葡萄园在每一行的末端种了一棵新葡萄树。",null,"https://www.merriam-webster.com/dictionary/vine"]
  ],[{"terms":["形成藤蔓"],"decision":"scope-excluded","reason":"形成或像藤一样生长的动词保留参考，不与藤本和葡萄树名词混成一个词性。","source":"https://www.merriam-webster.com/dictionary/vine"}]);
  entry("anatomical",[
   ["structure","解剖学的；身体结构的","adj.",["解剖学的","身体结构的","解剖的","构造上的"],["anatomical-structure"],"The diagram shows the anatomical differences between the two species.","这幅图展示了两个物种在身体结构上的差异。",null,"https://www.merriam-webster.com/dictionary/anatomical"]
  ],[]);
  entry("vitamin",[
   ["nutrient","维生素","n.",["维生素"],["vitamin-nutrient"],"The label lists the amount of each vitamin in one serving.","标签列出了每份食品中各类维生素的含量。",null,"https://www.merriam-webster.com/dictionary/vitamin"]
  ],[]);
  entry("secret",[
   ["hidden","秘密的；保密的","adj.",["秘密的","保密的","极机密的","隐蔽的","暗中的"],["secret-hidden"],"They kept the location of the nest secret.","他们对鸟巢的位置保密。",null,"https://www.merriam-webster.com/dictionary/secret"],
   ["fact","秘密；隐情","n.",["秘密","隐情","机密"],["secret-fact"],"She trusted her sister with a family secret.","她把一个家庭秘密告诉了姐姐。",null,"https://www.merriam-webster.com/dictionary/secret"],
   ["key","诀窍；秘诀","n.",["诀窍","秘诀","秘方"],["secret-key"],"The secret of this recipe is to heat the milk slowly.","这个食谱的诀窍是慢慢加热牛奶。",null,"https://www.merriam-webster.com/dictionary/secret"]
  ],[{"terms":["神秘的","偏僻的"],"decision":"scope-excluded","reason":"神秘和僻静是特定秘密性语境，不把任何神秘对象或地理偏远直接等同 secret。","source":"https://www.merriam-webster.com/dictionary/secret"}]);
  entry("hibernation",[
   ["winter","冬眠","n.",["冬眠","冬蛰"],["hibernation-winter"],"The dormouse enters hibernation when food becomes scarce.","食物变得匮乏时，睡鼠便进入冬眠。",null,"https://www.merriam-webster.com/dictionary/hibernation"],
   ["inactivity","休眠；长期不活动","n.",["休眠","长期不活动"],["hibernation-inactivity"],"The project emerged from hibernation when funding returned.","资金恢复后，这个项目结束了长期停滞。",null,"https://www.merriam-webster.com/dictionary/hibernation"]
  ],[{"terms":["过冬","避寒"],"decision":"scope-excluded","reason":"冬眠比一般过冬或避寒范围窄；扩展休眠义也不要求实际迁移到温暖地区。","source":"https://www.merriam-webster.com/dictionary/hibernation"}]);
  entry("track",[
   ["mark","足迹；车辙；痕迹","n.",["足迹","车辙","痕迹"],["track-mark","17-plant-trace"],"Fresh tracks in the mud showed that a deer had passed.","泥地上新鲜的足迹表明一只鹿经过了这里。",null,"https://www.merriam-webster.com/dictionary/track"],
   ["path","小径；道路","n.",["小径","道路","小道"],["track-path"],"A rough track leads from the village to the lake.","一条崎岖小路从村庄通向湖边。",null,"https://www.merriam-webster.com/dictionary/track"],
   ["rail","铁轨；轨道","n.",["铁轨","轨道"],["track-rail"],"Workers inspected the track before the first train arrived.","工人在首班列车到来前检查了轨道。",null,"https://www.merriam-webster.com/dictionary/track"],
   ["racing","跑道；赛道","n.",["跑道","赛道"],["track-racing"],"The athletes warmed up beside the running track.","运动员们在跑道旁热身。",null,"https://www.merriam-webster.com/dictionary/track"],
   ["recording","录音的一段；音轨","n.",["录音的一段","音轨","磁轨"],["track-recording"],"The final track on the album is an instrumental piece.","专辑的最后一首是一段器乐曲。",null,"https://www.merriam-webster.com/dictionary/track"],
   ["follow","追踪；跟踪","v.",["追踪","跟踪"],["track-follow","17-tracking"],"Scientists track the whales using small electronic tags.","科学家使用小型电子标签追踪鲸鱼。",null,"https://www.merriam-webster.com/dictionary/track"],
   ["monitor","跟踪记录；监测","v.",["跟踪记录","监测"],["track-monitor"],"The app tracks how much water the garden uses.","这个应用跟踪记录花园的用水量。",null,"https://www.merriam-webster.com/dictionary/track"],
   ["course","轨迹；行进路线","n.",["轨迹","行进路线"],["track-course"],"The map shows the track of the storm across the ocean.","地图显示了风暴穿越海洋的行进路线。",null,"https://www.merriam-webster.com/dictionary/track"]
  ],[{"terms":["径迹","途径","循路而行","通过","用纤拉","留下足迹","沿轨道运行"],"decision":"scope-excluded","reason":"径迹、履带、轨道运行及踏出痕迹等各有范围；“通过”与“途径”过宽，“用纤拉”旧译疑有错误，不作为普通正确答案。","source":"https://www.merriam-webster.com/dictionary/track"}]);
  entry("trace",[
   ["amount","微量；少许","n.",["微量","少许"],["trace-amount","17-parts"],"The water contained a trace of copper.","水中含有微量铜。",null,"https://www.merriam-webster.com/dictionary/trace"],
   ["vestige","痕迹；踪迹","n.",["痕迹","踪迹"],["trace-vestige","17-plant-trace"],"There was no trace of the missing boat near the shore.","岸边没有那艘失踪小船的踪迹。",null,"https://www.merriam-webster.com/dictionary/trace"],
   ["find","追查；找到来源或去向","v.",["追查","找到来源或去向","追踪","回溯","追溯"],["trace-find","17-tracking"],"The historian traced the letter to a private collection.","历史学家追查到这封信收藏在私人藏品中。",null,"https://www.merriam-webster.com/dictionary/trace"],
   ["outline","描绘；勾画","v.",["描绘","勾画"],["trace-outline"],"She traced a circle in the sand with her finger.","她用手指在沙地上画了一个圆。",null,"https://www.merriam-webster.com/dictionary/trace"],
   ["copy","描摹；透写","v.",["描摹","透写"],["trace-copy"],"The child traced the map through a sheet of thin paper.","孩子隔着一张薄纸描摹了地图。",null,"https://www.merriam-webster.com/dictionary/trace"]
  ],[{"terms":["迹线","缰绳","沿路走"],"decision":"scope-excluded","reason":"迹线、挽具牵索和沿路行进是专门用法；挽索不等同控制动物方向的普通缰绳，本批保留参考。","source":"https://www.merriam-webster.com/dictionary/trace"}]);
  entry("undergo",[
   ["experience","经历；经受","v.",["经历","经受","遭受","忍受"],["undergo-experience"],"The bridge will undergo repairs during the winter.","这座桥将在冬季接受维修。",null,"https://www.merriam-webster.com/dictionary/undergo"]
  ],[]);
  entry("vulnerable",[
   ["hurt","脆弱的；易受伤害的","adj.",["脆弱的","易受伤害的","有弱点的","易受影响的"],["vulnerable-hurt"],"Young birds are especially vulnerable during their first winter.","幼鸟在第一个冬天尤其容易受到伤害。",null,"https://www.merriam-webster.com/dictionary/vulnerable"],
   ["attack","易受攻击或损害的","adj.",["易受攻击或损害的","易损的"],["vulnerable-attack"],"The old database was vulnerable to errors during power cuts.","旧数据库在停电时容易受损并产生错误。",null,"https://www.merriam-webster.com/dictionary/vulnerable"]
  ],[{"terms":["成局的"],"decision":"scope-excluded","reason":"桥牌的成局状态是专门计分条件，不等同一般脆弱或受伤风险。","source":"https://www.merriam-webster.com/dictionary/vulnerable"}]);
  entry("exist",[
   ["being","存在","v.",["存在","生存"],["exist-being"],"Scientists are testing whether similar conditions exist elsewhere.","科学家正在检验其他地方是否也存在类似条件。",null,"https://www.merriam-webster.com/dictionary/exist"],
   ["survive","勉强维持生活","v.",["勉强维持生活"],["exist-survive","basic-survival"],"The family existed on a small income from the farm.","这家人靠农场的微薄收入勉强维持生活。","exist on","https://www.merriam-webster.com/dictionary/exist"]
  ],[{"terms":["发生"],"decision":"scope-excluded","reason":"存在不等同事件发生；仅在某状态存在的上下文可能译成“发生”，不能泛指 happen。","source":"https://www.merriam-webster.com/dictionary/exist"}]);
  entry("astronomy",[
   ["science","天文学","n.",["天文学"],["astronomy-science"],"Her interest in astronomy began when she saw Saturn through a telescope.","她通过望远镜看到土星后，开始对天文学产生兴趣。",null,"https://www.merriam-webster.com/dictionary/astronomy"]
  ],[]);
  entry("particle",[
   ["fragment","微粒；小颗粒","n.",["微粒","小颗粒","颗粒","极小量"],["particle-fragment","17-parts"],"A particle of dust settled on the lens.","一粒灰尘落在镜头上。",null,"https://www.merriam-webster.com/dictionary/particle"],
   ["physics","粒子","n.",["粒子"],["particle-physics"],"The detector records the path of each particle.","探测器记录每个粒子的路径。",null,"https://www.merriam-webster.com/dictionary/particle"],
   ["grammar","小品词；语助词","n.",["小品词","语助词"],["particle-grammar"],"In this sentence, the particle changes the meaning of the verb.","在这个句子中，小品词改变了动词的含义。",null,"https://www.merriam-webster.com/dictionary/particle"]
  ],[{"terms":["质点"],"decision":"scope-excluded","reason":"质点是建模概念，不等同所有实物微粒；本批物理粒子另配科学例句。","source":"https://www.merriam-webster.com/dictionary/particle"}]);
  entry("ion",[
   ["charged","离子","n.",["离子"],["ion-charged"],"A sodium ion carries a positive charge.","钠离子带正电荷。",null,"https://www.merriam-webster.com/dictionary/ion"]
  ],[]);
  entry("electron",[
   ["particle","电子","n.",["电子"],["electron-particle"],"An electron has a negative electric charge.","电子带负电荷。",null,"https://www.merriam-webster.com/dictionary/electron"]
  ],[]);
  entry("frequency",[
   ["rate","发生频率；频繁程度","n.",["发生频率","频繁程度"],["frequency-rate","17-pace"],"The survey measured the frequency of visits to local parks.","调查测量了人们去当地公园的频率。",null,"https://www.merriam-webster.com/dictionary/frequency"],
   ["wave","频率（周期性变化）","n.",["频率（周期性变化）","频率"],["frequency-wave"],"The instrument produces a tone with a frequency of 440 hertz.","这种仪器发出频率为440赫兹的声音。",null,"https://www.merriam-webster.com/dictionary/frequency"],
   ["statistics","频数；频率（统计）","n.",["频数","频率（统计）"],["frequency-statistics"],"The table gives the frequency of each response in the survey.","表格给出了调查中各项回答的频数。",null,"https://www.merriam-webster.com/dictionary/frequency"]
  ],[]);
  entry("signal",[
   ["cue","信号；暗号","n.",["信号","暗号"],["signal-cue"],"A raised flag was the signal to start the race.","升起的旗帜是比赛开始的信号。",null,"https://www.merriam-webster.com/dictionary/signal"],
   ["electronic","电信号；无线电信号","n.",["电信号","无线电信号"],["signal-electronic"],"The receiver detected a weak signal from the satellite.","接收器探测到了来自卫星的微弱信号。",null,"https://www.merriam-webster.com/dictionary/signal"],
   ["indicate","示意；发信号","v.",["示意","发信号","向...作信号","用信号通知"],["signal-indicate"],"The driver signalled before turning into the side street.","司机驶入旁边的小街前打了转向信号。",null,"https://www.merriam-webster.com/dictionary/signal"],
   ["notable","显著的；非凡的","adj.",["显著的","非凡的"],["signal-notable"],"The agreement was a signal achievement for the small team.","这份协议是这个小团队的一项非凡成就。",null,"https://www.merriam-webster.com/dictionary/signal"]
  ],[{"terms":["近因","导火线","标志","作为信号的"],"decision":"scope-excluded","reason":"近因、导火线与作为信号的形容词需特定引发或标示语境，不等同一般信号和非凡成就义。","source":"https://www.merriam-webster.com/dictionary/signal"}]);
  entry("solid",[
   ["state","固态的；固体的","adj.",["固态的","固体的"],["solid-state"],"The wax became solid as it cooled.","蜡在冷却时变成了固态。",null,"https://www.merriam-webster.com/dictionary/solid"],
   ["filled","实心的","adj.",["实心的"],["solid-filled","solid-sturdy","substantial-solid-build"],"The handle is made from solid wood rather than hollow plastic.","把手由实心木材制成，而不是中空塑料。",null,"https://www.merriam-webster.com/dictionary/solid"],
   ["reliable","可靠的；扎实的","adj.",["可靠的","扎实的","稳固的"],["solid-reliable","solid-sturdy","substantial-solid-build","reliable-trustworthy"],"The report provides solid evidence for the new explanation.","报告为新的解释提供了可靠的证据。",null,"https://www.merriam-webster.com/dictionary/solid"],
   ["continuous","连续不断的","adj.",["连续不断的"],["solid-continuous"],"They worked for three solid hours without a break.","他们连续工作了整整三个小时，没有休息。",null,"https://www.merriam-webster.com/dictionary/solid"],
   ["pure","纯质的；单一颜色的","adj.",["纯质的","单一颜色的"],["solid-pure"],"She chose a solid blue fabric without any pattern.","她选了一块没有图案的纯蓝色布料。",null,"https://www.merriam-webster.com/dictionary/solid"],
   ["substance","固体","n.",["固体"],["solid-substance"],"Ice is a solid that melts when heated.","冰是一种受热会融化的固体。",null,"https://www.merriam-webster.com/dictionary/solid"],
   ["shape","立体图形","n.",["立体图形"],["solid-shape"],"A cube is a solid with six square faces.","立方体是一个有六个正方形面的立体图形。",null,"https://www.merriam-webster.com/dictionary/solid"]
  ],[{"terms":["坚硬的","立体的","立方的","原色"],"decision":"scope-excluded","reason":"固态不保证坚硬；三维、立方形及单色也各有范围，单色不等于色彩学原色，本批不将这些旧译无限归并。","source":"https://www.merriam-webster.com/dictionary/solid"}]);
  entry("frequent",[
   ["often","频繁的；经常发生的","adj.",["频繁的","经常发生的","时常发生的"],["frequent-often"],"Frequent delays made the bus service unreliable.","频繁的延误使这条公交线路变得不可靠。",null,"https://www.merriam-webster.com/dictionary/frequent"]
  ],[{"terms":["快速的","时常来访","常常聚集","常与...交往"],"decision":"scope-excluded","reason":"当前教材范围采用形容词频繁的；动词常读作 /frɪˈkwent/，词典亦列变体，本批不跨入动词教学。“快速的”混淆频率和速度。","source":"https://www.merriam-webster.com/dictionary/frequent"}]);
  entry("sign",[
   ["indication","迹象；征兆","n.",["迹象","征兆"],["sign-indication"],"The first sign of spring was a flower beside the gate.","春天的第一个迹象是大门旁开出的一朵花。",null,"https://www.merriam-webster.com/dictionary/sign"],
   ["board","标牌；指示牌","n.",["标牌","指示牌","招牌"],["sign-board"],"A wooden sign pointed towards the visitor centre.","一块木制指示牌指向游客中心。",null,"https://www.merriam-webster.com/dictionary/sign"],
   ["symbol","符号；记号","n.",["符号","记号","正负号","符号字符"],["sign-symbol"],"The plus sign indicates addition in this equation.","这个等式中的加号表示加法。",null,"https://www.merriam-webster.com/dictionary/sign"],
   ["gesture","手势；示意动作","n.",["手势","示意动作"],["sign-gesture"],"She made a sign for the children to stay quiet.","她做了个手势，让孩子们保持安静。",null,"https://www.merriam-webster.com/dictionary/sign"],
   ["zodiac","星座；黄道十二宫之一","n.",["星座","黄道十二宫之一"],["sign-zodiac"],"The magazine printed a short forecast for each sign.","这本杂志给每个星座都刊登了一段简短的预测。",null,"https://www.merriam-webster.com/dictionary/sign"],
   ["signature","签名；签署","v.",["签名","签署"],["sign-signature"],"Please sign your name at the bottom of the form.","请在表格底部签名。",null,"https://www.merriam-webster.com/dictionary/sign"],
   ["recruit","签约聘用；签约加入","v.",["签约聘用","签约加入"],["sign-recruit"],"The club signed a young goalkeeper from the local academy.","俱乐部签下了当地青训学院的一位年轻守门员。",null,"https://www.merriam-webster.com/dictionary/sign"],
   ["communicate","用手语交流","v.",["用手语交流","打手势表达"],["sign-communicate"],"The two friends signed to each other across the room.","两个朋友隔着房间用手语交流。",null,"https://www.merriam-webster.com/dictionary/sign"]
  ],[]);
  entry("antenna",[
   ["radio","天线","n.",["天线"],["antenna-radio"],"The technician adjusted the antenna on the roof.","技术员调整了屋顶上的天线。",null,"https://www.merriam-webster.com/dictionary/antenna"],
   ["sensor","触角；触须","n.",["触角","触须"],["antenna-sensor"],"The insect moved its antennae towards the leaf.","那只昆虫把触角伸向叶子。",null,"https://www.merriam-webster.com/dictionary/antenna"],
   ["sensitivity","敏感的直觉（复数）","n.",["敏感的直觉（复数）"],["antenna-sensitivity"],"Her political antennae detected a change in public opinion.","她敏锐的政治直觉察觉到了舆论的变化。","antennae","https://www.merriam-webster.com/dictionary/antenna"]
  ],[]);
  entry("invisible",[
   ["unseen","看不见的；无形的","adj.",["看不见的","无形的","表面上看不见的"],["invisible-unseen"],"The ink is invisible until the paper is warmed.","纸张加热之前，这种墨水是看不见的。",null,"https://www.merriam-webster.com/dictionary/invisible"],
   ["unnoticed","被忽视的；不引人注意的","adj.",["被忽视的","不引人注意的"],["invisible-unnoticed"],"The cleaners felt invisible despite their essential work.","尽管清洁工的工作不可或缺，他们仍觉得自己被忽视了。",null,"https://www.merriam-webster.com/dictionary/invisible"]
  ],[{"terms":["未列在公开帐目的"],"decision":"scope-excluded","reason":"未在公开财务报表体现属于会计语境，不等同肉眼不可见或被社会忽视。","source":"https://www.merriam-webster.com/dictionary/invisible"}]);
  entry("prove",[
   ["establish","证明；证实","v.",["证明","证实","显示"],["prove-establish"],"The experiment proved that the material could withstand heat.","实验证明这种材料能够耐热。",null,"https://www.merriam-webster.com/dictionary/prove"],
   ["turn-out","结果是；被证明是","v.",["结果是","被证明是","证明是"],["prove-turn-out"],"The shortcut proved more difficult than the main route.","这条近路结果比主路更难走。",null,"https://www.merriam-webster.com/dictionary/prove"],
   ["ability","证明自己的能力","v.",["证明自己的能力"],["prove-ability"],"The new assistant soon proved herself in the laboratory.","这位新助理很快就在实验室里证明了自己的能力。","prove oneself","https://www.merriam-webster.com/dictionary/prove"],
   ["test","检验；试验","v.",["检验","试验","查验","检验"],["prove-test"],"The engineers proved the new design under extreme loads.","工程师在极端负荷下检验了新设计。",null,"https://www.merriam-webster.com/dictionary/prove"]
  ],[{"terms":["勘探"],"decision":"scope-excluded","reason":"探测、试验须明确验证对象，不泛化为一般资源勘探；验证义已另列例句。","source":"https://www.merriam-webster.com/dictionary/prove"}]);
  entry("decide",[
   ["choose","决定；作出选择","v.",["决定","作出选择"],["decide-choose","resolve-decide"],"We decided to take the early train.","我们决定乘坐早班列车。",null,"https://www.merriam-webster.com/dictionary/decide"],
   ["determine","决定结果","v.",["决定结果"],["decide-determine"],"A single point decided the match.","一分决定了这场比赛的结果。",null,"https://www.merriam-webster.com/dictionary/decide"]
  ],[{"terms":["判决"],"decision":"scope-excluded","reason":"裁决案件属于司法决定的特定语境，本批一般决定及左右结果不把普通 decide 都解释为法庭判决。","source":"https://www.merriam-webster.com/dictionary/decide"}]);
  entry("achieve",[
   ["accomplish","实现；达到","v.",["实现","达到","完成","如愿以偿"],["achieve-accomplish","17-completion","complete-achieve"],"The team achieved its goal ahead of schedule.","团队提前实现了目标。",null,"https://www.merriam-webster.com/dictionary/achieve"]
  ],[]);
  entry("solution",[
   ["answer","解决办法；答案","n.",["解决办法","答案","解决","解答"],["solution-answer"],"The simplest solution was to move the meeting online.","最简单的解决办法是把会议改到线上。",null,"https://www.merriam-webster.com/dictionary/solution"],
   ["mixture","溶液","n.",["溶液"],["solution-mixture"],"The chemist poured a clear solution into the flask.","化学家把一种透明溶液倒入烧瓶。",null,"https://www.merriam-webster.com/dictionary/solution"],
   ["dissolving","溶解；溶解状态","n.",["溶解","溶解状态"],["solution-dissolving"],"Heating increased the rate of solution of the salt.","加热提高了盐的溶解速率。",null,"https://www.merriam-webster.com/dictionary/solution"]
  ],[]);
  entry("researcher",[
   ["person","研究人员；研究者","n.",["研究人员","研究者"],["researcher-person"],"A researcher from the museum examined the old manuscript.","博物馆的一位研究人员检查了这份古老的手稿。",null,"https://www.merriam-webster.com/dictionary/researcher"]
  ],[]);
  entry("determinant",[
   ["factor","决定因素","n.",["决定因素","决定物"],["determinant-factor"],"Access to clean water is a major determinant of public health.","获得清洁水源是影响公共健康的主要因素。",null,"https://www.merriam-webster.com/dictionary/determinant"],
   ["matrix","行列式","n.",["行列式"],["determinant-matrix"],"The determinant of this square matrix is zero.","这个方阵的行列式为零。",null,"https://www.merriam-webster.com/dictionary/determinant"]
  ],[{"terms":["决定性的","判定"],"decision":"scope-excluded","reason":"本批采用决定因素与数学行列式名词，旧形容词及“判定”动作不直接转成这些名词答案。","source":"https://www.merriam-webster.com/dictionary/determinant"}]);
  entry("determined",[
   ["resolute","坚决的；有决心的","adj.",["坚决的","有决心的","已下决心的"],["determined-resolute","resolute-certain"],"She was determined to finish the training despite the setbacks.","尽管遇到挫折，她仍决心完成训练。",null,"https://www.merriam-webster.com/dictionary/determined"]
  ],[]);
  entry("attain",[
   ["reach","达到；获得","v.",["达到","获得"],["attain-reach","17-completion","complete-achieve","gain-acquire","get-acquire","obtain-get"],"The spacecraft attained its planned orbit.","航天器到达了预定轨道。",null,"https://www.merriam-webster.com/dictionary/attain"]
  ],[]);
  entry("row",[
   ["line","排；行","n.",["排","行","一排座位","一排房屋"],["row-line"],"A row of trees separates the garden from the road.","一排树把花园和道路隔开。",null,"https://www.merriam-webster.com/dictionary/row"],
   ["rowing","划船","v.",["划船"],["row-rowing"],"They rowed across the lake before breakfast.","他们在早饭前划船渡过了湖。",null,"https://www.merriam-webster.com/dictionary/row"],
   ["outing","划船活动","n.",["划船活动"],["row-outing"],"We went for a short row along the quiet river.","我们沿着宁静的河流划了一小会儿船。",null,"https://www.merriam-webster.com/dictionary/row"]
  ],[{"terms":["争吵","吵闹","争吵声"],"decision":"scope-excluded","reason":"当前整词音标 /rəʊ/ 对应排、行及划船；争吵和喧闹的 /raʊ/ 另读，保留参考而不混入训练。","source":"https://www.merriam-webster.com/dictionary/row"}]);
  entry("credit",[
   ["borrowing","赊购；信贷","n.",["赊购","信贷","贷款"],["credit-borrowing"],"The shop allows regular customers to buy on credit.","这家店允许老顾客赊购。",null,"https://www.merriam-webster.com/dictionary/credit"],
   ["balance","账户余额；贷记金额","n.",["账户余额","贷记金额"],["credit-balance"],"The refund appeared as a credit on her account.","退款以贷记金额的形式出现在她的账户上。",null,"https://www.merriam-webster.com/dictionary/credit"],
   ["recognition","功劳；赞扬","n.",["功劳","赞扬","荣誉","赞颂"],["credit-recognition"],"The volunteers deserve credit for keeping the beach clean.","志愿者保持了海滩清洁，值得表扬。",null,"https://www.merriam-webster.com/dictionary/credit"],
   ["course","学分","n.",["学分"],["credit-course"],"The language course counts for three credits.","这门语言课计三个学分。",null,"https://www.merriam-webster.com/dictionary/credit"],
   ["name","演职员署名（常用复数）","n.",["演职员署名（常用复数）"],["credit-name"],"Her name appeared in the film's opening credits.","她的名字出现在电影的片头演职员表中。","credits","https://www.merriam-webster.com/dictionary/credit"],
   ["honour","带来荣誉的人或事物","n.",["带来荣誉的人或事物"],["credit-honour"],"The young pianist is a credit to her school.","这位年轻的钢琴家为她的学校增光。","a credit to","https://www.merriam-webster.com/dictionary/credit"],
   ["attribute","把……归功于","v.",["把……归功于","归功于"],["credit-attribute"],"She credits her success to years of patient practice.","她把成功归功于多年的耐心练习。","credit sth to sb/sth","https://www.merriam-webster.com/dictionary/credit"],
   ["add","把款项记入账户","v.",["把款项记入账户"],["credit-add"],"The bank credited the payment to the correct account.","银行把这笔款项记入了正确的账户。",null,"https://www.merriam-webster.com/dictionary/credit"],
   ["believe","相信；信以为真","v.",["相信","信以为真"],["credit-believe"],"I could hardly credit the story until I saw the photographs.","看到照片之前，我几乎无法相信这个故事。",null,"https://www.merriam-webster.com/dictionary/credit"],
   ["reputation","信誉；信用","n.",["信誉","信用","信任"],["credit-reputation","17-reputation","admired-social-standing"],"The missed payments damaged the company's credit.","未能按时付款损害了公司的信誉。",null,"https://www.merriam-webster.com/dictionary/credit"]
  ],[{"terms":["信用量"],"decision":"scope-excluded","reason":"信用量应明确是授信额度等金融概念，不等同任意信用、账户余额或贷款本身。","source":"https://www.merriam-webster.com/dictionary/credit"}]);
  entry("hydraulic",[
   ["pressure","液压的；水力驱动的","adj.",["液压的","水力驱动的","水压的","水力的"],["hydraulic-pressure"],"A hydraulic lift raised the vehicle for inspection.","液压升降机升起车辆以供检查。",null,"https://www.merriam-webster.com/dictionary/hydraulic"],
   ["water","水力学的；流体运动的","adj.",["水力学的","流体运动的"],["hydraulic-water"],"The engineers studied the river's hydraulic behaviour.","工程师研究了这条河的水力特性。",null,"https://www.merriam-webster.com/dictionary/hydraulic"],
   ["cement","能在水下硬化的","adj.",["能在水下硬化的"],["hydraulic-cement"],"Hydraulic cement was used to repair the underwater wall.","水下墙体采用水硬性水泥进行修补。",null,"https://www.merriam-webster.com/dictionary/hydraulic"]
  ],[]);
  entry("filter",[
   ["device","过滤器；过滤材料","n.",["过滤器","过滤材料","过滤嘴","去尘器"],["filter-device"],"The filter traps dust before air enters the room.","过滤器在空气进入房间前截留灰尘。",null,"https://www.merriam-webster.com/dictionary/filter"],
   ["optical","滤光片；滤镜","n.",["滤光片","滤镜","滤光器"],["filter-optical"],"The photographer fitted a filter to the camera lens.","摄影师给相机镜头装上了滤光片。",null,"https://www.merriam-webster.com/dictionary/filter"],
   ["software","筛选或过滤工具","n.",["筛选或过滤工具"],["filter-software"],"An email filter moved unwanted messages into a separate folder.","邮件过滤工具把不需要的信息移入单独的文件夹。",null,"https://www.merriam-webster.com/dictionary/filter"],
   ["clean","过滤；滤除","v.",["过滤","滤除","滤过","筛选"],["filter-clean"],"The system filters impurities out of the water.","这个系统滤除水中的杂质。",null,"https://www.merriam-webster.com/dictionary/filter"],
   ["spread","逐渐传入；渗透","v.",["逐渐传入","渗透","渗入"],["filter-spread"],"News of the discovery filtered through to the village.","发现的消息逐渐传到了村庄。","filter through","https://www.merriam-webster.com/dictionary/filter"],
   ["frequency","滤波器","n.",["滤波器"],["filter-frequency"],"The filter removes high-frequency noise from the signal.","滤波器从信号中去除高频噪声。",null,"https://www.merriam-webster.com/dictionary/filter"]
  ],[{"terms":["走漏"],"decision":"scope-excluded","reason":"信息逐渐传入不等同不带语境的泄密走漏，须有 filter through 等过程限制。","source":"https://www.merriam-webster.com/dictionary/filter"}]);
  entry("shift",[
   ["move","移动；转移","v.",["移动","转移"],["shift-move","17-move"],"He shifted the chair away from the doorway.","他把椅子从门口移开。",null,"https://www.merriam-webster.com/dictionary/shift"],
   ["change","改变；转换","v.",["改变","转换"],["shift-change","17-change"],"The discussion shifted from costs to safety.","讨论从费用转向了安全问题。",null,"https://www.merriam-webster.com/dictionary/shift"],
   ["blame","推卸；转嫁责任","v.",["推卸","转嫁责任"],["shift-blame"],"The report tried to shift the blame onto the supplier.","报告试图把责任推给供应商。","shift the blame","https://www.merriam-webster.com/dictionary/shift"],
   ["gear","换挡","v.",["换挡"],["shift-gear"],"Shift into a lower gear before climbing the hill.","爬坡前换到较低的挡位。",null,"https://www.merriam-webster.com/dictionary/shift"],
   ["period","轮班；班次","n.",["轮班","班次","当班时间"],["shift-period"],"She works the night shift at the hospital.","她在医院上夜班。",null,"https://www.merriam-webster.com/dictionary/shift"],
   ["transition","转变；变化","n.",["转变","变化"],["shift-transition"],"There has been a shift in public attitudes towards recycling.","公众对回收利用的态度发生了转变。",null,"https://www.merriam-webster.com/dictionary/shift"],
   ["dress","直筒连衣裙","n.",["直筒连衣裙"],["shift-dress"],"She wore a simple cotton shift in the summer heat.","夏日炎热时，她穿了一件简洁的棉质直筒连衣裙。",null,"https://www.merriam-webster.com/dictionary/shift"]
  ],[{"terms":["摆脱","出售","轮班职工"],"decision":"scope-excluded","reason":"轮班职工是 shift 的集合名词转指；出售与摆脱为特定动词语境，未与移动或班次直接归并。","source":"https://www.merriam-webster.com/dictionary/shift"}]);
  entry("phase",[
   ["stage","阶段；时期","n.",["阶段","时期"],["phase-stage","development-process-phase"],"The project has entered its final phase.","项目已进入最后阶段。",null,"https://www.merriam-webster.com/dictionary/phase"],
   ["moon","月相；盈亏相位","n.",["月相","盈亏相位"],["phase-moon"],"The chart shows each phase of the moon.","这张图表展示了月亮的各个月相。",null,"https://www.merriam-webster.com/dictionary/phase"],
   ["physics","相；物相","n.",["相","物相"],["phase-physics"],"Ice and liquid water are two phases of the same substance.","冰和液态水是同一种物质的两个相。",null,"https://www.merriam-webster.com/dictionary/phase"],
   ["wave","相位（周期过程）","n.",["相位（周期过程）","位相"],["phase-wave"],"The two waves differ in phase by half a cycle.","这两个波的相位相差半个周期。",null,"https://www.merriam-webster.com/dictionary/phase"],
   ["introduce","分阶段引入","v.",["分阶段引入","逐步执行","实行"],["phase-introduce"],"The school will phase in the new timetable over two terms.","学校将用两个学期逐步引入新课表。","phase in","https://www.merriam-webster.com/dictionary/phase"],
   ["remove","逐步停止或淘汰","v.",["逐步停止或淘汰"],["phase-remove"],"The factory will phase out the old machines next year.","工厂明年将逐步淘汰旧机器。","phase out","https://www.merriam-webster.com/dictionary/phase"],
   ["aspect","方面；局面","n.",["方面","局面","方面","局面"],["phase-aspect"],"The report examines every phase of the housing problem.","报告考察了住房问题的每一个方面。",null,"https://www.merriam-webster.com/dictionary/phase"]
  ],[{"terms":["使调整相位","使定相","使一致"],"decision":"scope-excluded","reason":"调相、同步等属于工程动词，不等同普通使一致；本批名词相位与分阶段引入淘汰分别训练。","source":"https://www.merriam-webster.com/dictionary/phase"}]);
  entry("turn",[
   ["rotate","转动；旋转","v.",["转动","旋转","使旋转","回转"],["turn-rotate"],"Turn the handle slowly to open the door.","慢慢转动把手把门打开。",null,"https://www.merriam-webster.com/dictionary/turn"],
   ["direction","转向；拐弯","v.",["转向","拐弯","使转向","转身"],["turn-direction"],"Turn left after the stone bridge.","过了石桥后向左转。",null,"https://www.merriam-webster.com/dictionary/turn"],
   ["reverse","翻转；翻动","v.",["翻转","翻动"],["turn-reverse"],"Turn the page when you have finished reading.","读完后翻到下一页。",null,"https://www.merriam-webster.com/dictionary/turn"],
   ["become","变得；变成","v.",["变得","变成"],["turn-become","17-change","complete-change","change-form-use"],"The leaves turn yellow in autumn.","树叶在秋天变黄。",null,"https://www.merriam-webster.com/dictionary/turn"],
   ["redirect","转移注意或指向","v.",["转移注意或指向"],["turn-redirect"],"She turned her attention to the unfinished report.","她把注意力转向了尚未完成的报告。",null,"https://www.merriam-webster.com/dictionary/turn"],
   ["spoil","变质；变酸","v.",["变质","变酸"],["turn-spoil"],"The milk had turned in the warm kitchen.","牛奶在温暖的厨房里变质了。",null,"https://www.merriam-webster.com/dictionary/turn"],
   ["activate","打开设备或供应","v.",["打开设备或供应"],["turn-activate"],"Turn on the lamp before you start reading.","开始阅读前把灯打开。","turn on","https://www.merriam-webster.com/dictionary/turn%20on"],
   ["stop","关闭设备或供应","v.",["关闭设备或供应"],["turn-stop"],"Please turn off the tap when the bucket is full.","桶满后请关掉水龙头。","turn off","https://www.merriam-webster.com/dictionary/turn%20off"],
   ["reject","拒绝","v.",["拒绝"],["turn-reject"],"He turned down the invitation because he was away.","他因为不在当地而拒绝了邀请。","turn down","https://www.merriam-webster.com/dictionary/turn%20down"],
   ["arrive","出现；到场","v.",["出现","到场"],["turn-arrive"],"Only six people turned up for the workshop.","只有六个人来参加了工作坊。","turn up","https://www.merriam-webster.com/dictionary/turn%20up"],
   ["result","结果是；最终成为","v.",["结果是","最终成为"],["turn-result"],"The repair turned out to be easier than expected.","修理工作结果比预想的容易。","turn out","https://www.merriam-webster.com/dictionary/turn%20out"],
   ["chance","轮到的机会","n.",["轮到的机会","顺次"],["turn-chance"],"It is your turn to choose the next song.","轮到你选下一首歌了。",null,"https://www.merriam-webster.com/dictionary/turn"],
   ["bend","转弯；拐角","n.",["转弯","拐角"],["turn-bend","17-bend","bend-curve-noun"],"The house stands just beyond a sharp turn in the road.","房子就在道路一个急弯的前面。",null,"https://www.merriam-webster.com/dictionary/turn"],
   ["change-noun","变化；转折","n.",["变化","转折","改动","改变"],["turn-change-noun"],"The conversation took an unexpected turn.","谈话出现了意想不到的转折。",null,"https://www.merriam-webster.com/dictionary/turn"],
   ["rotation","一圈；一次转动","n.",["一圈","一次转动"],["turn-rotation"],"Give the screw one more turn.","把螺丝再转一圈。",null,"https://www.merriam-webster.com/dictionary/turn"]
  ],[{"terms":["性格","特色","形状","驱赶","阻挡","兑换","改写","使作对","绕过","使流通","晕眩","易脱手"],"decision":"scope-excluded","reason":"此词有大量习语及车床、性格、兑换等扩展。本批训练列明的常用动词、轮次及转弯，不把孤立驱赶、阻挡、易脱手等宽泛旧译当普遍答案。","source":"https://www.merriam-webster.com/dictionary/turn"}]);
  entry("operation",[
   ["working","运行；操作","n.",["运行","操作","动作","作用"],["operation-working"],"The technician explained the operation of the new pump.","技术员解释了新水泵的操作方法。",null,"https://www.merriam-webster.com/dictionary/operation"],
   ["surgery","手术","n.",["手术"],["operation-surgery"],"The patient recovered well after the operation.","病人在手术后恢复得很好。",null,"https://www.merriam-webster.com/dictionary/operation"],
   ["mission","行动；任务","n.",["行动","任务"],["operation-mission"],"The rescue operation continued through the night.","救援行动持续了一整夜。",null,"https://www.merriam-webster.com/dictionary/operation"],
   ["math","运算","n.",["运算"],["operation-math"],"Addition is the first operation in this calculation.","加法是这项计算中的第一步运算。",null,"https://www.merriam-webster.com/dictionary/operation"],
   ["business","经营的企业或业务","n.",["经营的企业或业务","业务"],["operation-business"],"The bakery is a small family operation.","这家面包店是一家小型家族企业。",null,"https://www.merriam-webster.com/dictionary/operation"]
  ],[]);
  entry("pinpoint",[
   ["locate","准确找到；确定","v.",["准确找到","确定","精确地找到","准确描述"],["pinpoint-locate"],"The team pinpointed the source of the leak.","团队准确找到了泄漏源。",null,"https://www.merriam-webster.com/dictionary/pinpoint"],
   ["precise","极精确的","adj.",["极精确的","针尖的","极微的","精确的","精确定位的"],["pinpoint-precise"],"The instrument requires pinpoint accuracy.","这种仪器要求极高的精确度。",null,"https://www.merriam-webster.com/dictionary/pinpoint"],
   ["point","极小的点","n.",["极小的点","极小之物","针尖"],["pinpoint-point"],"A pinpoint of light appeared on the dark horizon.","黑暗的地平线上出现了一个小光点。",null,"https://www.merriam-webster.com/dictionary/pinpoint"],
   ["highlight","突出；强调","v.",["突出","强调","使突出"],["pinpoint-highlight","prominent-noticeable"],"The report pinpoints the differences between the two approaches.","报告突出了两种方法之间的差异。",null,"https://www.merriam-webster.com/dictionary/pinpoint"]
  ],[{"terms":["立锥之地","精确位置","准确地轰炸","刺穿","详尽的"],"decision":"scope-excluded","reason":"准确攻击、刺穿等不属于当前定位与强调教学范围；精确不必详尽，“立锥之地”属比喻，名词位置与动词定位需区分。","source":"https://www.merriam-webster.com/dictionary/pinpoint"}]);
  entry("stumble",[
   ["trip","绊脚；踉跄","v.",["绊脚","踉跄","绊倒","蹒跚而行","使绊倒","蹒跚"],["stumble-trip","trip-stumble"],"She stumbled over a loose stone on the path.","她被路上一块松动的石头绊了一下。",null,"https://www.merriam-webster.com/dictionary/stumble"],
   ["falter","结巴；磕磕绊绊地说","v.",["结巴","磕磕绊绊地说","踌躇"],["stumble-falter"],"He stumbled over the unfamiliar names in the speech.","他在演讲中念那些不熟悉的名字时磕磕绊绊。",null,"https://www.merriam-webster.com/dictionary/stumble"],
   ["chance","偶然发现；偶遇","v.",["偶然发现","偶遇"],["stumble-chance"],"We stumbled upon an old well behind the cottage.","我们偶然发现小屋后面有一口老井。","stumble upon/across","https://www.merriam-webster.com/dictionary/stumble"],
   ["mistake","失误；挫折","n.",["失误","挫折","失策"],["stumble-mistake","17-error"],"The early stumble did not stop the team from winning.","早期的失误并没有阻止团队获胜。",null,"https://www.merriam-webster.com/dictionary/stumble"],
   ["err","犯错；失误","v.",["犯错","失误"],["stumble-err","17-error","mistake-error"],"The team stumbled during the first round but improved later.","团队在第一轮出现失误，但后来有所改善。",null,"https://www.merriam-webster.com/dictionary/stumble"]
  ],[{"terms":["失足","使困惑"],"decision":"scope-excluded","reason":"失足可为字面或道德比喻，使困惑是扩展用法；本批绊脚、说话磕绊、偶遇及失误保持明确语境。","source":"https://www.merriam-webster.com/dictionary/stumble"}]);
  entry("error",[
   ["mistake","错误；差错","n.",["错误","差错","过失","失误"],["error-mistake","17-error","mistake-error"],"A spelling error changed the meaning of the sentence.","一个拼写错误改变了句子的意思。",null,"https://www.merriam-webster.com/dictionary/error"],
   ["deviation","误差","n.",["误差"],["error-deviation"],"The instrument has a small margin of error.","这台仪器的误差范围很小。",null,"https://www.merriam-webster.com/dictionary/error"]
  ],[]);
  entry("contingency",[
   ["possibility","可能发生的意外事件","n.",["可能发生的意外事件","意外事故","偶然事故"],["contingency-possibility","17-fate"],"The organisers set aside money for every likely contingency.","组织者预留了资金，以应对各种可能发生的意外情况。",null,"https://www.merriam-webster.com/dictionary/contingency"],
   ["dependence","依条件而定；偶然性","n.",["依条件而定","偶然性"],["contingency-dependence"],"The lecture explored contingency and necessity in historical events.","讲座探讨了历史事件中的偶然性与必然性。",null,"https://www.merriam-webster.com/dictionary/contingency"]
  ],[{"terms":["可能性","意外开支"],"decision":"scope-excluded","reason":"可能发生的事件与抽象概率不同；意外开支须在预算准备语境中理解，不直接等同所有 contingency。","source":"https://www.merriam-webster.com/dictionary/contingency"}]);
  entry("emperor",[
   ["ruler","皇帝","n.",["皇帝","君主"],["emperor-ruler"],"The museum displays a seal once used by an emperor.","博物馆展出了一枚皇帝曾使用过的印章。",null,"https://www.merriam-webster.com/dictionary/emperor"]
  ],[]);
  entry("prince",[
   ["royal","王子；亲王","n.",["王子","亲王","贵族"],["prince-royal"],"The prince attended the ceremony with the royal family.","王子与王室成员一起出席了典礼。",null,"https://www.merriam-webster.com/dictionary/prince"],
   ["ruler","公国的君主","n.",["公国的君主","国君","诸侯"],["prince-ruler"],"The prince ruled a small state in the mountains.","这位亲王统治着山中的一个小国。",null,"https://www.merriam-webster.com/dictionary/prince"]
  ],[{"terms":["有权势的大人物"],"decision":"scope-excluded","reason":"职业杰出者或大人物是比喻；当前王室及公国统治者教学义不泛指所有有权势者。","source":"https://www.merriam-webster.com/dictionary/prince"}]);
  entry("anecdote",[
   ["story","逸事；趣闻","n.",["逸事","趣闻","轶事","奇闻"],["anecdote-story"],"The guide told an amusing anecdote about the painter's first exhibition.","导游讲了画家首次展览的一件趣事。",null,"https://www.merriam-webster.com/dictionary/anecdote"]
  ],[]);
  entry("accident",[
   ["mishap","事故；意外事件","n.",["事故","意外事件","意外事故"],["accident-mishap","17-calamitous"],"Nobody was injured in the accident at the junction.","路口的那场事故没有造成人员受伤。",null,"https://www.merriam-webster.com/dictionary/accident"],
   ["chance","偶然；意外巧合","n.",["偶然","意外巧合"],["accident-chance","17-fate"],"We discovered the hidden room by accident.","我们偶然发现了那个隐藏的房间。","by accident","https://www.merriam-webster.com/dictionary/accident"]
  ],[{"terms":["机遇","次要方面"],"decision":"scope-excluded","reason":"偶然不保证好机遇；哲学中非本质属性的 accident 不作为一般意外事件训练。","source":"https://www.merriam-webster.com/dictionary/accident"}]);
  entry("celebrity",[
   ["person","名人","n.",["名人"],["celebrity-person"],"A local celebrity opened the new library.","一位当地名人为新图书馆揭幕。",null,"https://www.merriam-webster.com/dictionary/celebrity"],
   ["fame","名气；名声","n.",["名气","名声"],["celebrity-fame","17-reputation"],"The novel brought her unexpected celebrity.","这部小说给她带来了意料之外的名气。",null,"https://www.merriam-webster.com/dictionary/celebrity"]
  ],[]);
  entry("status",[
   ["rank","地位；身份","n.",["地位","身份","要人身份"],["status-rank","17-reputation","admired-social-standing"],"Her new role gave her greater status within the organisation.","新职务提高了她在组织中的地位。",null,"https://www.merriam-webster.com/dictionary/status"],
   ["condition","状态；状况","n.",["状态","状况","情形"],["status-condition"],"You can check the status of your application online.","你可以在线查询申请状态。",null,"https://www.merriam-webster.com/dictionary/status"]
  ],[]);
  entry("setback",[
   ["obstacle","挫折；阻碍","n.",["挫折","阻碍","退步"],["setback-obstacle"],"The damaged equipment was a setback, but the survey continued.","设备损坏是个挫折，但调查仍在继续。",null,"https://www.merriam-webster.com/dictionary/setback"],
   ["distance","建筑物的退界距离","n.",["建筑物的退界距离"],["setback-distance"],"The plan allows a five-metre setback from the road.","规划规定建筑物距道路退后五米。",null,"https://www.merriam-webster.com/dictionary/setback"]
  ],[{"terms":["逆流"],"decision":"scope-excluded","reason":"建筑退界与受挫有明确语境；旧译逆流未在本批确认成普遍义，不当作倒流的替代答案。","source":"https://www.merriam-webster.com/dictionary/setback"}]);
  entry("semantic",[
   ["meaning","语义的；语义学的","adj.",["语义的","语义学的"],["semantic-meaning"],"The two words have a subtle semantic difference.","这两个词存在细微的语义差别。",null,"https://www.merriam-webster.com/dictionary/semantic"]
  ],[{"terms":["语义"],"decision":"scope-excluded","reason":"是形容词语义的，不把语义这一名词直接作为相同词性考点。","source":"https://www.merriam-webster.com/dictionary/semantic"}]);
  entry("phonetics",[
   ["study","语音学","n.",["语音学"],["phonetics-study"],"Phonetics examines how speech sounds are produced and heard.","语音学研究语音如何产生以及如何被听到。",null,"https://www.merriam-webster.com/dictionary/phonetics"],
   ["system","语音系统","n.",["语音系统","语音体系"],["phonetics-system"],"The book compares the phonetics of several regional dialects.","这本书比较了几种地方方言的语音系统。",null,"https://www.merriam-webster.com/dictionary/phonetics"]
  ],[{"terms":["表音拼法"],"decision":"scope-excluded","reason":"指语音系统、语音研究或应用，不等同任何使用表音字母的拼法。","source":"https://www.merriam-webster.com/dictionary/phonetics"}]);
  entry("pictograph",[
   ["symbol","象形文字；图画符号","n.",["象形文字","图画符号"],["pictograph-symbol"],"The pictograph represents a bird with outstretched wings.","这个象形符号表示一只展开翅膀的鸟。",null,"https://www.merriam-webster.com/dictionary/pictograph"],
   ["chart","象形统计图","n.",["象形统计图","统计图表"],["pictograph-chart"],"Each tree in the pictograph represents a hundred planted seedlings.","象形统计图中的每棵树代表一百株栽种的幼苗。",null,"https://www.merriam-webster.com/dictionary/pictograph"],
   ["rock","岩画","n.",["岩画","古代石壁画"],["pictograph-rock"],"The archaeologists photographed a pictograph on the cave wall.","考古学家拍摄了洞壁上的一幅岩画。",null,"https://www.merriam-webster.com/dictionary/pictograph"]
  ],[{"terms":["剪影儿童视力表"],"decision":"scope-excluded","reason":"剪影视力表须专门医学测量语境；本批象形符号、岩画和统计图三义不涵盖任意视力表。","source":"https://www.merriam-webster.com/dictionary/pictograph"}]);
  entry("conjunction",[
   ["grammar","连词","n.",["连词","连接词"],["conjunction-grammar"],"The conjunction joins two clauses of equal importance.","这个连词连接两个同等重要的分句。",null,"https://www.merriam-webster.com/dictionary/conjunction"],
   ["combination","结合；联合","n.",["结合","联合"],["conjunction-combination","17-related"],"The exhibition was organised in conjunction with the local museum.","展览是与当地博物馆联合举办的。","in conjunction with","https://www.merriam-webster.com/dictionary/conjunction"],
   ["astronomy","合（天体视位置接近）","n.",["合（天体视位置接近）"],["conjunction-astronomy"],"The astronomers observed a conjunction of two bright planets.","天文学家观测到两颗明亮行星的合。",null,"https://www.merriam-webster.com/dictionary/conjunction"],
   ["logic","合取；逻辑与","n.",["合取","逻辑与"],["conjunction-logic"],"A conjunction is true only when both component statements are true.","只有两个组成命题都为真时，合取才为真。",null,"https://www.merriam-webster.com/dictionary/conjunction"]
  ],[]);
  entry("consistent",[
   ["steady","始终如一的；稳定的","adj.",["始终如一的","稳定的","坚持的"],["consistent-steady","stable-steady","steady-stable"],"The new oven produces consistent results each time.","新烤箱每次都能烤出稳定一致的效果。",null,"https://www.merriam-webster.com/dictionary/consistent"],
   ["compatible","一致的；相符的","adj.",["一致的","相符的","并立的"],["consistent-compatible"],"The witness's account was consistent with the recorded evidence.","证人的叙述与记录下来的证据相符。","consistent with","https://www.merriam-webster.com/dictionary/consistent"]
  ],[{"terms":["坚固的"],"decision":"scope-excluded","reason":"一致、稳定与物理坚硬不是同义；较旧的凝聚坚实用法不进入本批。","source":"https://www.merriam-webster.com/dictionary/consistent"}]);
  entry("decipher",[
   ["decode","破译；解码","v.",["破译","解码","译解"],["decipher-decode"],"The team deciphered the coded message using a surviving key.","团队借助一份保存下来的密钥破译了编码信息。",null,"https://www.merriam-webster.com/dictionary/decipher"],
   ["read","辨认；读懂难认的内容","v.",["辨认","读懂难认的内容","解释"],["decipher-read","explain-meaning"],"Can you decipher the handwriting on this old postcard?","你能辨认这张旧明信片上的字迹吗？",null,"https://www.merriam-webster.com/dictionary/decipher"]
  ],[{"terms":["密电译文"],"decision":"scope-excluded","reason":"本批为解码或辨认的动词；密电译文是产物名词，不能不变词性直接归入。","source":"https://www.merriam-webster.com/dictionary/decipher"}]);
  entry("translate",[
   ["language","翻译","v.",["翻译"],["translate-language","17-translate","spoken-language-translation"],"She translated the instructions from Spanish into English.","她把说明从西班牙语翻译成了英语。",null,"https://www.merriam-webster.com/dictionary/translate"],
   ["convert","转化；体现为","v.",["转化","体现为","转变为","转换"],["translate-convert"],"Better planning should translate into shorter waiting times.","更好的规划应当转化为更短的等待时间。","translate into","https://www.merriam-webster.com/dictionary/translate"],
   ["explain","用易懂的方式解释","v.",["用易懂的方式解释","解释"],["translate-explain","17-explain","explain-meaning"],"The guide translated the technical findings into everyday language.","导游用日常语言解释了这些专业研究结果。",null,"https://www.merriam-webster.com/dictionary/translate"]
  ],[{"terms":["调动","被译"],"decision":"scope-excluded","reason":"调任、空间平移及遗传翻译各有专业范围；“被译”是语态而非独立常用义项。","source":"https://www.merriam-webster.com/dictionary/translate"}]);
  entry("position",[
   ["place","位置；方位","n.",["位置","方位"],["position-place"],"The map marks the exact position of the old lighthouse.","地图标出了旧灯塔的确切位置。",null,"https://www.merriam-webster.com/dictionary/position"],
   ["posture","姿势","n.",["姿势"],["position-posture"],"Keep your back in a comfortable position while reading.","阅读时让背部保持舒适的姿势。",null,"https://www.merriam-webster.com/dictionary/position"],
   ["view","立场；观点","n.",["立场","观点"],["position-view"],"The committee has not changed its position on the proposal.","委员会没有改变对这项提案的立场。",null,"https://www.merriam-webster.com/dictionary/position"],
   ["job","职位；工作","n.",["职位","工作"],["position-job","17-work"],"She applied for a teaching position at the college.","她申请了学院的一个教学职位。",null,"https://www.merriam-webster.com/dictionary/position"],
   ["situation","处境；状况","n.",["处境","状况","形势","状态"],["position-situation"],"We are in a better position to help now that the road is open.","道路开通后，我们现在更有条件提供帮助了。",null,"https://www.merriam-webster.com/dictionary/position"],
   ["place-verb","放置；安置","v.",["放置","安置","决定...的位置"],["position-place-verb","17-move"],"Position the camera where it can see the entrance clearly.","把相机放在能清楚拍到入口的位置。",null,"https://www.merriam-webster.com/dictionary/position"],
   ["rank","社会地位；身份","n.",["社会地位","身份","地位","身分"],["position-rank","17-reputation"],"His position in the community changed after he became mayor.","他当上市长后，在社区中的地位发生了变化。",null,"https://www.merriam-webster.com/dictionary/position"]
  ],[{"terms":["阵地"],"decision":"scope-excluded","reason":"军事阵地是位置名词的限定应用，不把每一个地理位置都称为阵地。","source":"https://www.merriam-webster.com/dictionary/position"}]);
  entry("complicate",[
   ["complex","使复杂化","v.",["使复杂化","弄复杂","使错综","使恶化","变复杂"],["complicate-complex"],"The missing documents complicated the investigation.","文件缺失使调查变得复杂。",null,"https://www.merriam-webster.com/dictionary/complicate"]
  ],[]);
  entry("translator",[
   ["person","译者；翻译人员","n.",["译者","翻译人员","翻译者"],["translator-person","17-translate"],"The translator checked each quotation against the original text.","译者对照原文核查了每一段引文。",null,"https://www.merriam-webster.com/dictionary/translator"],
   ["tool","翻译工具；转换程序","n.",["翻译工具","转换程序","翻译程序","翻译器"],["translator-tool"],"The translator converted the source code into another language.","转换程序把源代码转换成了另一种语言。",null,"https://www.merriam-webster.com/dictionary/translator"]
  ],[]);
  entry("commentary",[
   ["broadcast","现场解说；实况报道","n.",["现场解说","实况报道"],["commentary-broadcast"],"The radio provided live commentary on the race.","电台对比赛进行了现场解说。",null,"https://www.merriam-webster.com/dictionary/commentary"],
   ["explanation","评注；评论","n.",["评注","评论","注释","说明"],["commentary-explanation","17-opinion"],"The edition includes a commentary on the poem's historical setting.","这个版本附有对诗歌历史背景的评注。",null,"https://www.merriam-webster.com/dictionary/commentary"]
  ],[]);
  entry("comment",[
   ["remark","评论；意见","n.",["评论","意见","批评"],["comment-remark","17-opinion"],"Her comment prompted a useful discussion about the design.","她的意见引发了一场有益的设计讨论。",null,"https://www.merriam-webster.com/dictionary/comment"],
   ["note","注释；评注","n.",["注释","评注","注解","备注"],["comment-note"],"The editor added a comment explaining the unusual spelling.","编辑添加了一条注释，解释这种不寻常的拼写。",null,"https://www.merriam-webster.com/dictionary/comment"],
   ["remark-verb","发表评论；表示意见","v.",["发表评论","表示意见"],["comment-remark-verb","17-opinion"],"Several residents commented on the proposed changes.","几位居民对拟议中的改动发表了意见。","comment on","https://www.merriam-webster.com/dictionary/comment"]
  ],[]);
  entry("exponent",[
   ["math","指数","n.",["指数"],["exponent-math"],"In this expression, the exponent tells us how many times to multiply the base by itself.","在这个式子中，指数告诉我们底数自乘的次数。",null,"https://www.merriam-webster.com/dictionary/exponent"],
   ["advocate","倡导者；拥护者","n.",["倡导者","拥护者"],["exponent-advocate","17-advocate"],"She became a leading exponent of outdoor education.","她成了户外教育的主要倡导者。",null,"https://www.merriam-webster.com/dictionary/exponent"],
   ["practitioner","杰出的实践者；代表人物","n.",["杰出的实践者","代表人物"],["exponent-practitioner"],"The festival invited a celebrated exponent of classical dance.","艺术节邀请了一位著名的古典舞代表人物。",null,"https://www.merriam-webster.com/dictionary/exponent"],
   ["explainer","阐释者；说明者","n.",["阐释者","说明者","说明者"],["exponent-explainer","17-explain"],"The lecturer is a clear exponent of the philosopher's ideas.","这位讲师能清晰阐释那位哲学家的思想。",null,"https://www.merriam-webster.com/dictionary/exponent"]
  ],[{"terms":["说明物","说明的"],"decision":"scope-excluded","reason":"本批数学指数、倡导者、实践者及阐释者均为名词；旧说明物或形容词不作不受限制的正确答案。","source":"https://www.merriam-webster.com/dictionary/exponent"}]);
  entry("vacation",[
   ["holiday","假期；休假","n.",["假期","休假","停审期","休庭期"],["vacation-holiday","17-journeys"],"We spent our vacation exploring the coast.","我们在假期里探索了海岸。",null,"https://www.merriam-webster.com/dictionary/vacation"],
   ["travel","度假","v.",["度假"],["vacation-travel"],"They vacationed in a small mountain village.","他们在一个小山村度假。",null,"https://www.merriam-webster.com/dictionary/vacation"]
  ],[]);
  entry("pedestrian",[
   ["walker","行人","n.",["行人","步行者"],["pedestrian-walker"],"The driver stopped to let a pedestrian cross.","司机停车让一位行人过马路。",null,"https://www.merriam-webster.com/dictionary/pedestrian"],
   ["walking","行人的；步行的","adj.",["行人的","步行的","人行的","徒步的"],["pedestrian-walking"],"A pedestrian bridge connects the two parks.","一座人行桥连接着两个公园。",null,"https://www.merriam-webster.com/dictionary/pedestrian"],
   ["dull","平淡的；缺乏想象力的","adj.",["平淡的","缺乏想象力的","呆板的","平淡无奇的"],["pedestrian-dull"],"The story was interesting, but the writing was pedestrian.","故事很有趣，但文笔平淡。",null,"https://www.merriam-webster.com/dictionary/pedestrian"]
  ],[{"terms":["通俗的"],"decision":"scope-excluded","reason":"平淡缺乏想象力不等同通俗易懂；不把可理解程度与贬义文学评价混同。","source":"https://www.merriam-webster.com/dictionary/pedestrian"}]);
  entry("pace",[
   ["speed","速度；节奏","n.",["速度","节奏","步调","步法"],["pace-speed","17-pace"],"The walkers slowed their pace as the path grew steeper.","随着小径越来越陡，步行者们放慢了速度。",null,"https://www.merriam-webster.com/dictionary/pace"],
   ["step","一步；步幅","n.",["一步","步幅"],["pace-step"],"He stood a few paces from the edge of the platform.","他站在离站台边缘几步远的地方。",null,"https://www.merriam-webster.com/dictionary/pace"],
   ["walk","踱步；来回走","v.",["踱步","来回走","缓慢走","踱步于"],["pace-walk"],"She paced the corridor while waiting for the results.","她在等结果时沿着走廊来回踱步。",null,"https://www.merriam-webster.com/dictionary/pace"],
   ["regulate","调整节奏；控制速度","v.",["调整节奏","控制速度"],["pace-regulate"],"Pace yourself so that you still have energy for the final climb.","控制好自己的节奏，留些力气应付最后一段攀登。","pace oneself","https://www.merriam-webster.com/dictionary/pace"],
   ["measure","用步测量","v.",["用步测量","用步测"],["pace-measure"],"He paced the length of the room before moving the furniture.","搬家具前，他用步子测量了房间的长度。",null,"https://www.merriam-webster.com/dictionary/pace"]
  ],[]);
  entry("wander",[
   ["roam","漫游；闲逛","v.",["漫游","闲逛","游荡","漫步","徘徊","在...漫游"],["wander-roam"],"We wandered through the market without buying anything.","我们在市场里闲逛，什么也没买。",null,"https://www.merriam-webster.com/dictionary/wander"],
   ["stray","偏离；走失","v.",["偏离","走失","迷路"],["wander-stray"],"The dog wandered away from the campsite.","那只狗离开营地走远了。",null,"https://www.merriam-webster.com/dictionary/wander"],
   ["thought","走神；思想开小差","v.",["走神","思想开小差","离题"],["wander-thought"],"Her mind began to wander during the long explanation.","在冗长的解释过程中，她开始走神了。",null,"https://www.merriam-webster.com/dictionary/wander"],
   ["wind","蜿蜒延伸","v.",["蜿蜒延伸","蜿蜒"],["wander-wind"],"The stream wanders through the flat meadow.","小溪蜿蜒流过平坦的草地。",null,"https://www.merriam-webster.com/dictionary/wander"]
  ],[]);
  entry("linger",[
   ["stay","逗留；迟迟不离开","v.",["逗留","迟迟不离开","徘徊"],["linger-stay"],"The visitors lingered by the paintings after the talk.","讲解结束后，参观者仍在画作旁流连。",null,"https://www.merriam-webster.com/dictionary/linger"],
   ["remain","持续存在；迟迟不消失","v.",["持续存在","迟迟不消失"],["linger-remain"],"The smell of fresh paint lingered in the room.","新油漆的气味久久留在房间里。",null,"https://www.merriam-webster.com/dictionary/linger"]
  ],[{"terms":["消磨"],"decision":"scope-excluded","reason":"指延迟离开或持续存在，消磨时间需特定搭配，不扩成任意 spending time。","source":"https://www.merriam-webster.com/dictionary/linger"}]);
  entry("excursion",[
   ["trip","短途旅行；游览","n.",["短途旅行","游览","远足","短程旅行"],["excursion-trip","17-journeys","trip-journey","travel-journeys","travel-trip"],"The class took an excursion to a nearby wetland.","全班到附近的湿地进行了一次短途游览。",null,"https://www.merriam-webster.com/dictionary/excursion"],
   ["digression","离题；涉足其他领域","n.",["离题","涉足其他领域"],["excursion-digression"],"The chapter includes a brief excursion into the history of printing.","这一章短暂地转而介绍了印刷史。",null,"https://www.merriam-webster.com/dictionary/excursion"]
  ],[{"terms":["游览圆","移动","离轨","逸出"],"decision":"scope-excluded","reason":"游览圆疑为旧译错误；往复位移、偏离轨道属专业或引申范围，不当作短途游览的同义项。","source":"https://www.merriam-webster.com/dictionary/excursion"}]);
  entry("cruise",[
   ["voyage","乘船巡游","v.",["乘船巡游","漫游"],["cruise-voyage"],"They cruised along the coast for a week.","他们沿海岸乘船巡游了一周。",null,"https://www.merriam-webster.com/dictionary/cruise"],
   ["steady","以稳定速度行驶或飞行","v.",["以稳定速度行驶或飞行","巡航","巡弋"],["cruise-steady"],"The aircraft cruised above the clouds.","飞机在云层上方巡航。",null,"https://www.merriam-webster.com/dictionary/cruise"],
   ["easy","轻松取得进展","v.",["轻松取得进展"],["cruise-easy"],"The home team cruised to victory in the final.","主队在决赛中轻松取胜。","cruise to","https://www.merriam-webster.com/dictionary/cruise"],
   ["trip","乘船游览；邮轮旅行","n.",["乘船游览","邮轮旅行"],["cruise-trip","17-journeys"],"Their first cruise included three island stops.","他们的首次邮轮旅行停靠了三个岛屿。",null,"https://www.merriam-webster.com/dictionary/cruise"]
  ],[]);
  entry("climb",[
   ["ascend","攀登；爬","v.",["攀登","爬","爬升"],["climb-ascend"],"We climbed the steep path to the tower.","我们沿着陡峭的小路爬上了塔楼。",null,"https://www.merriam-webster.com/dictionary/climb"],
   ["increase","上升；增长","v.",["上升","增长"],["climb-increase","17-growing","increase-quantity"],"Ticket sales climbed steadily during the week.","这一周门票销量稳步上升。",null,"https://www.merriam-webster.com/dictionary/climb"],
   ["effort","费力地爬入或爬出","v.",["费力地爬入或爬出"],["climb-effort"],"He climbed out of the small boat onto the jetty.","他从小船里爬上了码头。","climb into/out of","https://www.merriam-webster.com/dictionary/climb"],
   ["ascent","攀登；上坡路段","n.",["攀登","上坡路段"],["climb-ascent"],"The final climb took us above the tree line.","最后一段攀登把我们带到了林木线以上。",null,"https://www.merriam-webster.com/dictionary/climb"]
  ],[]);
  entry("vocation",[
   ["calling","使命感；天职","n.",["使命感","天职","天命"],["vocation-calling"],"She felt a vocation to work with young children.","她感到从事幼儿工作是自己的天职。",null,"https://www.merriam-webster.com/dictionary/vocation"],
   ["profession","职业","n.",["职业","行业"],["vocation-profession","17-work","career-path"],"Teaching became his vocation after years in industry.","在工业界工作多年后，教学成了他的职业。",null,"https://www.merriam-webster.com/dictionary/vocation"]
  ],[{"terms":["才能","职业上的才能"],"decision":"scope-excluded","reason":"职业使命感不等同职业技能或才能；不能把有 vocation 解释为必然有技术能力。","source":"https://www.merriam-webster.com/dictionary/vocation"}]);
  entry("item",[
   ["object","物品；项目","n.",["物品","项目","条款","项"],["item-object","17-list"],"Each item in the collection has a numbered label.","藏品中的每一件物品都有一个编号标签。",null,"https://www.merriam-webster.com/dictionary/item"],
   ["news","一则消息；一条新闻","n.",["一则消息","一条新闻","一则"],["item-news"],"The newspaper carried a short item about the new footbridge.","报纸刊登了一则有关新步行桥的短讯。",null,"https://www.merriam-webster.com/dictionary/item"],
   ["couple","恋爱中的一对（非正式）","n.",["恋爱中的一对（非正式）"],["item-couple"],"Their friends did not know they were an item.","朋友们不知道他们是一对恋人。","be an item","https://www.merriam-webster.com/dictionary/item"]
  ],[]);
  entry("cementer",[
   ["worker","水泥工；涂水泥者","n.",["水泥工","涂水泥者","水泥工人"],["cementer-worker"],"The cementer sealed the gap around the pipe.","水泥工封住了管道周围的缝隙。",null,"https://www.merriam-webster.com/dictionary/cementer"],
   ["gluer","胶合者；胶合工","n.",["胶合者","胶合工","做黏接工作的工人"],["cementer-gluer"],"The cementer joined the two layers before the material cooled.","胶合工在材料冷却前把两层粘合起来。",null,"https://www.merriam-webster.com/dictionary/cementer"]
  ],[]);
  entry("counterfeit",[
   ["fake","伪造的；假冒的","adj.",["伪造的","假冒的"],["counterfeit-fake","17-false","not-genuine","imitation-not-genuine"],"The cashier spotted a counterfeit note.","收银员发现了一张假钞。",null,"https://www.merriam-webster.com/dictionary/counterfeit"],
   ["feigned","假装的；虚假的","adj.",["假装的","虚假的"],["counterfeit-feigned","feign-pretend","pretend-feign"],"His counterfeit enthusiasm disappeared as soon as the visitors left.","来客一走，他假装出来的热情便消失了。",null,"https://www.merriam-webster.com/dictionary/counterfeit"],
   ["forge","伪造；仿制以欺骗","v.",["伪造","仿制以欺骗","仿造","伪装","假装"],["counterfeit-forge","forge-falsify"],"The gang counterfeited tickets for the concert.","那个团伙伪造了音乐会门票。",null,"https://www.merriam-webster.com/dictionary/counterfeit"],
   ["copy","赝品；伪造品","n.",["赝品","伪造品"],["counterfeit-copy","counterfeit-object"],"The dealer admitted that the painting was a counterfeit.","商贩承认那幅画是赝品。",null,"https://www.merriam-webster.com/dictionary/counterfeit"]
  ],[]);
  entry("wooden",[
   ["material","木制的","adj.",["木制的"],["wooden-material"],"A wooden bridge crosses the narrow stream.","一座木桥横跨狭窄的溪流。",null,"https://www.merriam-webster.com/dictionary/wooden"],
   ["stiff","呆板的；不自然的","adj.",["呆板的","不自然的","呆笨的","木然的"],["wooden-stiff"],"The actor's wooden delivery made the dialogue sound unnatural.","演员呆板的台词表达使对话听起来很不自然。",null,"https://www.merriam-webster.com/dictionary/wooden"]
  ],[]);
  entry("mine",[
   ["ownership","我的（东西）","pron.",["我的（东西）","我的"],["mine-ownership"],"Your bag is blue, but mine is green.","你的包是蓝色的，而我的是绿色的。",null,"https://www.merriam-webster.com/dictionary/mine"],
   ["excavation","矿井；矿山","n.",["矿井","矿山","矿"],["mine-excavation"],"The old coal mine closed fifty years ago.","那座旧煤矿五十年前就关闭了。",null,"https://www.merriam-webster.com/dictionary/mine"],
   ["source","丰富的来源；宝库","n.",["丰富的来源","宝库"],["mine-source"],"Her notebook is a mine of information about local plants.","她的笔记本是当地植物信息的宝库。","a mine of","https://www.merriam-webster.com/dictionary/mine"],
   ["explosive","地雷；水雷","n.",["地雷","水雷"],["mine-explosive"],"The route was closed after an unexploded mine was found.","发现一枚未爆炸的地雷后，这条路线被封闭了。",null,"https://www.merriam-webster.com/dictionary/mine"],
   ["extract","采矿；开采","v.",["采矿","开采","挖掘","开矿"],["mine-extract"],"The company mined copper in the hills.","这家公司在山中开采铜矿。",null,"https://www.merriam-webster.com/dictionary/mine"],
   ["explore","发掘资料；挖掘信息","v.",["发掘资料","挖掘信息"],["mine-explore"],"The researchers mined old diaries for details of daily life.","研究人员从旧日记中挖掘日常生活的细节。",null,"https://www.merriam-webster.com/dictionary/mine"],
   ["lay","布雷；埋设地雷","v.",["布雷","埋设地雷","在...布雷"],["mine-lay"],"The harbour had been mined during the war.","战争期间，这个港口曾被布设水雷。",null,"https://www.merriam-webster.com/dictionary/mine"]
  ],[{"terms":["矿藏","破坏"],"decision":"scope-excluded","reason":"矿井不等于尚未开采的矿藏；破坏的战术用法不作为一般采矿动词的答案。","source":"https://www.merriam-webster.com/dictionary/mine"}]);
  entry("miniature",[
   ["small","微型的；缩小的","adj.",["微型的","缩小的","小规模的","纤小的"],["miniature-small"],"A miniature railway runs around the park.","一条微型铁路环绕着公园。",null,"https://www.merriam-webster.com/dictionary/miniature"],
   ["model","缩小的模型","n.",["缩小的模型","缩图"],["miniature-model"],"The museum displays a miniature of the original theatre.","博物馆展出了一件原剧院的缩小模型。",null,"https://www.merriam-webster.com/dictionary/miniature"],
   ["portrait","微型画像；细密画","n.",["微型画像","细密画","小画像"],["miniature-portrait"],"The jewelled case contained a miniature of her grandmother.","镶有宝石的盒子里装着一幅她祖母的微型画像。",null,"https://www.merriam-webster.com/dictionary/miniature"]
  ],[]);
  entry("inferiority",[
   ["lower","劣势；较差的状况","n.",["劣势","较差的状况","次等","下位","下级","次级","劣等"],["inferiority-lower"],"The team overcame its numerical inferiority through careful planning.","团队通过周密规划克服了人数上的劣势。",null,"https://www.merriam-webster.com/dictionary/inferiority"],
   ["feeling","自卑感","n.",["自卑感","自卑"],["inferiority-feeling"],"The novel explores the character's feelings of inferiority.","小说探讨了这个人物的自卑感。",null,"https://www.merriam-webster.com/dictionary/inferiority"]
  ],[]);
  entry("icon",[
   ["screen","图标","n.",["图标","像标"],["icon-screen"],"Click the printer icon to open the print settings.","点击打印机图标打开打印设置。",null,"https://www.merriam-webster.com/dictionary/icon"],
   ["symbol","象征；代表性人物或事物","n.",["象征","代表性人物或事物","偶像"],["icon-symbol"],"The bridge became an icon of the city's industrial past.","这座桥成了这座城市工业历史的象征。",null,"https://www.merriam-webster.com/dictionary/icon"],
   ["religious","圣像","n.",["圣像","画像","肖像"],["icon-religious"],"The chapel contains a painted icon of a saint.","小礼拜堂里有一幅绘制的圣人像。",null,"https://www.merriam-webster.com/dictionary/icon"]
  ],[]);
  entry("style",[
   ["manner","风格；方式","n.",["风格","方式","文体","风度","类型","样式"],["style-manner"],"Her writing style is clear and direct.","她的写作风格清晰直接。",null,"https://www.merriam-webster.com/dictionary/style"],
   ["fashion","流行款式；时尚","n.",["流行款式","时尚"],["style-fashion"],"That style of jacket is popular again.","那种款式的夹克又流行起来了。",null,"https://www.merriam-webster.com/dictionary/style"],
   ["format","行文或编排规范","n.",["行文或编排规范"],["style-format"],"The editor checked every reference against the house style.","编辑依照本刊编排规范核查了每一条参考文献。",null,"https://www.merriam-webster.com/dictionary/style"],
   ["shape","设计；使成某种式样","v.",["设计","使成某种式样","(根据新款式)设计","使合潮流"],["style-shape"],"The designer styled the room with simple furniture.","设计师用简洁的家具布置了房间。",null,"https://www.merriam-webster.com/dictionary/style"],
   ["call","称呼；把……称为","v.",["称呼","把……称为"],["style-call"],"He styled himself a champion of local traditions.","他把自己称为地方传统的捍卫者。","style oneself","https://www.merriam-webster.com/dictionary/style"],
   ["botany","花柱","n.",["花柱"],["style-botany"],"Pollen tubes grow down through the style towards the ovary.","花粉管沿花柱向下生长，通向子房。",null,"https://www.merriam-webster.com/dictionary/style"]
  ],[{"terms":["字体"],"decision":"scope-excluded","reason":"字体是字形风格的特定应用；本批风格、时尚、规范、设计、称呼及花柱不把所有字体都直接称 style。","source":"https://www.merriam-webster.com/dictionary/style"}]);
  entry("idol",[
   ["admired","偶像；崇拜对象","n.",["偶像","崇拜对象","崇拜物","宠儿"],["idol-admired"],"The young swimmer finally met her sporting idol.","这位年轻游泳运动员终于见到了自己的体育偶像。",null,"https://www.merriam-webster.com/dictionary/idol"],
   ["image","神像；受膜拜的塑像","n.",["神像","受膜拜的塑像"],["idol-image"],"The carved idol stood inside a small shrine.","雕刻的神像立在一座小神龛内。",null,"https://www.merriam-webster.com/dictionary/idol"]
  ],[{"terms":["幻象","谬论"],"decision":"scope-excluded","reason":"幻象和谬论见历史或哲学范围，本批只训练受崇拜的人或形象。","source":"https://www.merriam-webster.com/dictionary/idol"}]);
  entry("ceramic",[
   ["material","陶瓷的","adj.",["陶瓷的"],["ceramic-material"],"The workshop uses ceramic tiles to cover the floor.","车间用陶瓷砖铺地。",null,"https://www.merriam-webster.com/dictionary/ceramic"],
   ["object","陶瓷制品","n.",["陶瓷制品"],["ceramic-object","17-substance"],"The display includes a ceramic fired in the village kiln.","展品包括一件在村中窑炉里烧制的陶瓷器。",null,"https://www.merriam-webster.com/dictionary/ceramic"],
   ["art","陶瓷工艺（复数形式）","n.",["陶瓷工艺（复数形式）"],["ceramic-art"],"She studied ceramics before opening her own studio.","她在开设自己的工作室前学习了陶瓷工艺。","ceramics","https://www.merriam-webster.com/dictionary/ceramic"]
  ],[]);
  entry("porcelain",[
   ["material","瓷；瓷器","n.",["瓷","瓷器"],["porcelain-material","17-substance"],"The delicate cup is made of porcelain.","这只精巧的杯子是瓷制的。",null,"https://www.merriam-webster.com/dictionary/porcelain"]
  ],[{"terms":["瓷制的"],"decision":"scope-excluded","reason":"本批采用瓷与瓷器名词；定语位置可译成瓷制的，但不因此另立无构式限制的形容词。","source":"https://www.merriam-webster.com/dictionary/porcelain"}]);
  entry("glass",[
   ["material","玻璃","n.",["玻璃"],["glass-material"],"The shelves are made of thick glass.","这些架子由厚玻璃制成。",null,"https://www.merriam-webster.com/dictionary/glass"],
   ["vessel","玻璃杯；一杯的量","n.",["玻璃杯","一杯的量"],["glass-vessel"],"She poured a glass of water for the visitor.","她给来访者倒了一杯水。",null,"https://www.merriam-webster.com/dictionary/glass"],
   ["spectacles","眼镜（复数）","n.",["眼镜（复数）"],["glass-spectacles","shade-sunglasses"],"He put on his glasses to read the small print.","他戴上眼镜阅读小字。","glasses","https://www.merriam-webster.com/dictionary/glass"],
   ["mirror","镜子（较旧用法）","n.",["镜子（较旧用法）"],["glass-mirror"],"The old novel describes her looking at herself in the glass.","这部旧小说描写她在镜子里端详自己。",null,"https://www.merriam-webster.com/dictionary/glass"],
   ["glaze","给……装玻璃","v.",["给……装玻璃","装玻璃于"],["glass-glaze"],"They glassed in the porch to keep out the winter wind.","他们给门廊装上玻璃，以挡住冬天的风。","glass in","https://www.merriam-webster.com/dictionary/glass"]
  ],[{"terms":["透镜","反射","反映","成玻璃状"],"decision":"scope-excluded","reason":"透镜、反射及使成玻璃状有特定器具或动词范围，不能把一般玻璃材料当作反射动作。","source":"https://www.merriam-webster.com/dictionary/glass"}]);
  entry("mug",[
   ["cup","大杯；有柄杯","n.",["大杯","有柄杯","有柄大杯"],["mug-cup"],"Steam rose from the mug of hot chocolate.","热气从那杯热巧克力中升起。",null,"https://www.merriam-webster.com/dictionary/mug"],
   ["face","脸（非正式）","n.",["脸（非正式）","脸"],["mug-face"],"His smiling mug appeared on the front of the magazine.","他的笑脸出现在杂志封面上。",null,"https://www.merriam-webster.com/dictionary/mug"],
   ["fool","易受骗的人（英式非正式）","n.",["易受骗的人（英式非正式）"],["mug-fool"],"She felt like a mug after paying twice the usual price.","她付了通常价格的两倍，觉得自己像个受骗的傻瓜。",null,"https://www.merriam-webster.com/dictionary/mug"],
   ["rob","袭击并抢劫","v.",["袭击并抢劫"],["mug-rob"],"He was mugged near the station, but his injuries were minor.","他在车站附近遭到抢劫，但伤势较轻。",null,"https://www.merriam-webster.com/dictionary/mug"],
   ["pose","对镜头做夸张表情","v.",["对镜头做夸张表情"],["mug-pose"],"The comedian mugged for the camera.","喜剧演员对着镜头做夸张的表情。",null,"https://www.merriam-webster.com/dictionary/mug"]
  ],[{"terms":["苦读者","给...拍照","攻击","苦读","拼命用功"],"decision":"scope-excluded","reason":"苦读及拍照为地域或旧用法；抢劫义必须有袭击抢夺语境，不等同任意攻击。","source":"https://www.merriam-webster.com/dictionary/mug"}]);
  entry("kettle",[
   ["vessel","水壶；烧水壶","n.",["水壶","烧水壶","锅"],["kettle-vessel"],"The kettle began to whistle on the stove.","炉子上的水壶开始鸣笛。",null,"https://www.merriam-webster.com/dictionary/kettle"]
  ],[{"terms":["茶壶","罐","釜体釜"],"decision":"scope-excluded","reason":"指烧水或煮液体的容器；不能与泡茶用的 teapot 泛作等义，“釜体釜”疑有重复错误。","source":"https://www.merriam-webster.com/dictionary/kettle"}]);
  entry("pan",[
   ["cooking","平底锅；烤盘","n.",["平底锅","烤盘","平锅","浅盘"],["pan-cooking"],"Heat the oil in a shallow pan.","在浅底锅里把油加热。",null,"https://www.merriam-webster.com/dictionary/pan"],
   ["criticise","严厉批评","v.",["严厉批评"],["pan-criticise"],"Several reviewers panned the film's confusing ending.","几位评论者严厉批评了电影令人费解的结尾。",null,"https://www.merriam-webster.com/dictionary/pan"],
   ["gold","淘洗矿砂；淘金","v.",["淘洗矿砂","淘金","淘洗"],["pan-gold"],"Visitors can pan for gold in the shallow stream.","游客可以在浅溪中淘金。","pan for","https://www.merriam-webster.com/dictionary/pan"],
   ["camera","水平摇摄","v.",["水平摇摄","拍摄全景","摇镜头"],["pan-camera"],"The camera panned slowly across the empty square.","镜头缓缓水平扫过空旷的广场。",null,"https://www.merriam-webster.com/dictionary/pan"]
  ],[{"terms":["盆地","硬土层","上下左右移动"],"decision":"scope-excluded","reason":"盆地、硬土层为专门名词，摄影 pan 主要是水平摇摄，不等同任意上下左右移动。","source":"https://www.merriam-webster.com/dictionary/pan"}]);
  entry("stove",[
   ["heater","炉子；灶","n.",["炉子","灶","火炉","炉灶"],["stove-heater"],"They cooked the soup on a small electric stove.","他们用一个小电炉煮汤。",null,"https://www.merriam-webster.com/dictionary/stove"]
  ],[]);
  entry("tray",[
   ["container","托盘；浅盘","n.",["托盘","浅盘","公文盘","满盘"],["tray-container"],"She carried the cups into the room on a tray.","她用托盘把杯子端进房间。",null,"https://www.merriam-webster.com/dictionary/tray"]
  ],[{"terms":["发射箱","淋盘"],"decision":"scope-excluded","reason":"发射箱及淋盘须具体设备语境；不把任何专用箱槽都认证为普通托盘。","source":"https://www.merriam-webster.com/dictionary/tray"}]);
  entry("tin",[
   ["metal","锡","n.",["锡"],["tin-metal"],"The alloy contains a small amount of tin.","这种合金含有少量锡。",null,"https://www.merriam-webster.com/dictionary/tin"],
   ["container","金属罐；罐头","n.",["金属罐","罐头","罐"],["tin-container"],"He opened a tin of tomatoes for the sauce.","他打开一罐番茄用来做酱汁。",null,"https://www.merriam-webster.com/dictionary/tin"],
   ["coat","给……镀锡","v.",["给……镀锡","镀锡"],["tin-coat","17-coating"],"The copper wire was tinned before use.","铜线在使用前镀了锡。",null,"https://www.merriam-webster.com/dictionary/tin"]
  ],[{"terms":["马口铁","锡制的","镀锡的","装罐保存"],"decision":"scope-excluded","reason":"锡与镀锡铁皮不同；锡制、镀锡为材料或状态修饰，装罐是另一保存用法，暂留参考。","source":"https://www.merriam-webster.com/dictionary/tin"}]);
  entry("build",[
   ["construct","建造；修建","v.",["建造","修建","建筑","构造"],["build-construct","physical-building"],"They built a shelter from fallen branches.","他们用掉落的树枝搭建了一个遮蔽处。",null,"https://www.merriam-webster.com/dictionary/build"],
   ["develop","建立；逐步培养","v.",["建立","逐步培养"],["build-develop"],"The project helped build trust between the two groups.","这个项目帮助两组人建立了信任。",null,"https://www.merriam-webster.com/dictionary/build"],
   ["increase","逐渐增强；积累","v.",["逐渐增强","积累"],["build-increase","17-growing"],"Pressure began to build as the deadline approached.","随着截止日期临近，压力开始增加。",null,"https://www.merriam-webster.com/dictionary/build"],
   ["physique","体格；体型","n.",["体格","体型"],["build-physique"],"The cyclist has a lean, athletic build.","这位骑行者体型精瘦健壮。",null,"https://www.merriam-webster.com/dictionary/build"],
   ["version","软件或产品的构建版本","n.",["软件或产品的构建版本"],["build-version"],"The latest build fixes the display problem.","最新的构建版本修复了显示问题。",null,"https://www.merriam-webster.com/dictionary/build"]
  ],[]);
  entry("architect",[
   ["designer","建筑师","n.",["建筑师"],["architect-designer"],"The architect designed a library filled with natural light.","建筑师设计了一座充满自然光的图书馆。",null,"https://www.merriam-webster.com/dictionary/architect"],
   ["planner","设计者；策划者","n.",["设计者","策划者","缔造者"],["architect-planner"],"She was the architect of the successful education programme.","她是这个成功教育项目的策划者。",null,"https://www.merriam-webster.com/dictionary/architect"]
  ],[]);
  entry("unstable",[
   ["unsteady","不稳固的；易倒的","adj.",["不稳固的","易倒的"],["unstable-unsteady"],"The ladder felt unstable on the uneven ground.","梯子放在不平的地面上显得不稳。",null,"https://www.merriam-webster.com/dictionary/unstable"],
   ["changeable","不稳定的；易变的","adj.",["不稳定的","易变的"],["unstable-changeable"],"The experiment must be repeated under unstable temperature conditions.","实验必须在温度不稳定的条件下重复进行。",null,"https://www.merriam-webster.com/dictionary/unstable"]
  ],[]);
  entry("building",[
   ["structure","建筑物；房屋","n.",["建筑物","房屋"],["building-structure"],"The oldest building in the village is now a museum.","村里最古老的建筑如今是一座博物馆。",null,"https://www.merriam-webster.com/dictionary/building"],
   ["construction","建筑工作；建筑业","n.",["建筑工作","建筑业","建筑","营造"],["building-construction"],"Building stopped during the heavy rain.","大雨期间，建筑工作停止了。",null,"https://www.merriam-webster.com/dictionary/building"]
  ],[]);
  entry("settle",[
   ["reside","定居；安家","v.",["定居","安家","使定居"],["settle-reside"],"They settled in a coastal town after retirement.","退休后，他们在一个海滨小镇定居。",null,"https://www.merriam-webster.com/dictionary/settle"],
   ["resolve","解决；确定","v.",["解决","确定","决定","安排"],["settle-resolve","17-resolve","resolve-solve"],"A short discussion settled the question.","一次简短的讨论解决了这个问题。",null,"https://www.merriam-webster.com/dictionary/settle"],
   ["pay","结清；偿付","v.",["结清","偿付","支付","结算"],["settle-pay"],"Please settle the bill before leaving the hotel.","离开酒店前请结清账单。",null,"https://www.merriam-webster.com/dictionary/settle"],
   ["agreement","庭外和解；达成协议","v.",["庭外和解","达成协议"],["settle-agreement","17-resolve"],"The two companies settled the dispute without going to trial.","两家公司未经过审判就达成协议解决了争端。",null,"https://www.merriam-webster.com/dictionary/settle"],
   ["sink","下沉；沉淀","v.",["下沉","沉淀","下陷"],["settle-sink"],"The sand settled at the bottom of the jar.","沙子沉到了罐底。",null,"https://www.merriam-webster.com/dictionary/settle"],
   ["calm","平静下来；使安定","v.",["平静下来","使安定","使平静","安下心来"],["settle-calm","quiet-calm-verb","quiet-cause"],"A familiar song helped settle the frightened child.","一首熟悉的歌帮助受惊的孩子平静下来。",null,"https://www.merriam-webster.com/dictionary/settle"],
   ["comfortable","安顿；舒适地坐好","v.",["安顿","舒适地坐好","安放","停留"],["settle-comfortable"],"She settled into the armchair with a book.","她拿着书舒舒服服地坐进扶手椅。","settle into","https://www.merriam-webster.com/dictionary/settle"]
  ],[{"terms":["有背长椅","整理","澄清"],"decision":"scope-excluded","reason":"有背长椅是另一名词，澄清液体指沉降杂质而非解释清楚；整理也不能脱离安排、安置等具体对象。","source":"https://www.merriam-webster.com/dictionary/settle"}]);
  entry("dwelling",[
   ["home","住宅；住所","n.",["住宅","住所","住处","住房"],["dwelling-home","17-housing","protective-place"],"The survey recorded every dwelling within the valley.","调查记录了山谷内的每一处住宅。",null,"https://www.merriam-webster.com/dictionary/dwelling"]
  ],[]);
  entry("hut",[
   ["shelter","小屋；棚屋","n.",["小屋","棚屋","茅舍","临时军营"],["hut-shelter","17-housing","protective-place"],"The walkers sheltered from the rain in a wooden hut.","步行者们在一间木屋里避雨。",null,"https://www.merriam-webster.com/dictionary/hut"]
  ],[{"terms":["(使)住在茅舍"],"decision":"scope-excluded","reason":"本批训练名词小屋；使住棚屋的动词用法保留参考，不将动作和建筑物混配。","source":"https://www.merriam-webster.com/dictionary/hut"}]);
  entry("residence",[
   ["home","住所；宅邸","n.",["住所","宅邸","住宅","住房"],["residence-home","17-housing","protective-place"],"The old residence has been converted into a public gallery.","这座旧宅已被改造成公共美术馆。",null,"https://www.merriam-webster.com/dictionary/residence"],
   ["living","居住；居留","n.",["居住","居留","驻扎","居住期间"],["residence-living"],"The scholarship includes a year of residence at the university.","这项奖学金包含在大学居住一年的安排。",null,"https://www.merriam-webster.com/dictionary/residence"]
  ],[]);
  entry("settlement",[
   ["community","定居点；聚落","n.",["定居点","聚落","殖民地","居住区"],["settlement-community"],"The excavation uncovered a small coastal settlement.","发掘发现了一个海岸小聚落。",null,"https://www.merriam-webster.com/dictionary/settlement"],
   ["agreement","解决协议；和解","n.",["解决协议","和解","解决","处理"],["settlement-agreement","17-resolve","resolve-solve"],"The two sides reached a settlement after lengthy talks.","经过漫长谈判，双方达成了和解。",null,"https://www.merriam-webster.com/dictionary/settlement"],
   ["payment","结算；清偿","n.",["结算","清偿"],["settlement-payment"],"The invoice requires settlement within thirty days.","发票要求在三十天内结清款项。",null,"https://www.merriam-webster.com/dictionary/settlement"],
   ["settling","定居；殖民迁居","n.",["定居","殖民迁居","安顿","殖民"],["settlement-settling"],"The book describes the early settlement of the valley.","这本书描述了人们早期在山谷定居的过程。",null,"https://www.merriam-webster.com/dictionary/settlement"]
  ],[{"terms":["沉降","沉渣"],"decision":"scope-excluded","reason":"沉降及沉渣属于物理过程或产物，不等同村落、定居和争议解决。","source":"https://www.merriam-webster.com/dictionary/settlement"}]);
  entry("safari",[
   ["wildlife","野生动物观赏或狩猎旅行","n.",["野生动物观赏或狩猎旅行","旅行"],["safari-wildlife"],"The family went on a photographic safari to observe elephants.","这家人参加了一次摄影游猎，观察大象。",null,"https://www.merriam-webster.com/dictionary/safari"]
  ],[{"terms":["旅行队","科学考察"],"decision":"scope-excluded","reason":"考察旅行、队伍及装备须远征背景；本批以野生动物观察或狩猎旅行为明确教学范围。","source":"https://www.merriam-webster.com/dictionary/safari"}]);
  entry("commemorate",[
   ["remember","纪念；作为纪念","v.",["纪念","作为纪念"],["commemorate-remember"],"A stone plaque commemorates the opening of the canal.","一块石牌纪念了运河的开通。",null,"https://www.merriam-webster.com/dictionary/commemorate"]
  ],[]);
  entry("parachute",[
   ["device","降落伞","n.",["降落伞"],["parachute-device"],"The parachute opened above the landing field.","降落伞在着陆场上空打开了。",null,"https://www.merriam-webster.com/dictionary/parachute"],
   ["descend","跳伞；用降落伞投送","v.",["跳伞","用降落伞投送"],["parachute-descend"],"The rescue team parachuted supplies into the isolated valley.","救援队用降落伞把物资投送到与外界隔绝的山谷。",null,"https://www.merriam-webster.com/dictionary/parachute"]
  ],[]);
  entry("flight",[
   ["flying","飞行","n.",["飞行"],["flight-flying"],"The bird remained in flight for several minutes.","那只鸟连续飞行了几分钟。",null,"https://www.merriam-webster.com/dictionary/flight"],
   ["journey","航班；飞行旅程","n.",["航班","飞行旅程","飞机航程","班机"],["flight-journey","17-journeys"],"Our flight to the island leaves at noon.","我们飞往岛上的航班中午起飞。",null,"https://www.merriam-webster.com/dictionary/flight"],
   ["stairs","一段楼梯","n.",["一段楼梯"],["flight-stairs"],"A short flight of stairs leads to the viewing platform.","一小段楼梯通向观景台。",null,"https://www.merriam-webster.com/dictionary/flight"],
   ["escape","逃跑；逃离","n.",["逃跑","逃离","逃走"],["flight-escape","escape-get-away"],"Their flight from the flooded village took most of the night.","他们从被淹村庄逃离，花了大半个晚上。",null,"https://www.merriam-webster.com/dictionary/flight"],
   ["imagination","想象的驰骋","n.",["想象的驰骋"],["flight-imagination"],"The story moves from ordinary life into flights of fantasy.","故事从日常生活转向天马行空的幻想。","a flight of fancy/fantasy","https://www.merriam-webster.com/dictionary/flight"]
  ],[{"terms":["射程","飞跃","迁徙","飞逝","射击(飞禽)","为(箭)装上羽毛","使惊飞"],"decision":"scope-excluded","reason":"射程、鸟类迁徙、惊飞及装箭羽等需不同构式或词性；本批飞行、航班、楼梯、逃离和想象驰骋分别训练。","source":"https://www.merriam-webster.com/dictionary/flight"}]);
  entry("baggage",[
   ["luggage","行李","n.",["行李"],["baggage-luggage","travel-baggage"],"Passengers collected their baggage before leaving the terminal.","乘客们领取行李后离开了航站楼。",null,"https://www.merriam-webster.com/dictionary/baggage"],
   ["burden","思想或情感包袱","n.",["思想或情感包袱"],["baggage-burden","17-background"],"The argument revealed emotional baggage from their earlier disagreements.","争论暴露了他们以往分歧留下的情感包袱。",null,"https://www.merriam-webster.com/dictionary/baggage"]
  ],[]);
  entry("airplane",[
   ["aircraft","飞机","n.",["飞机"],["airplane-aircraft"],"A small airplane carried the supplies to the island.","一架小飞机把物资运到了岛上。",null,"https://www.merriam-webster.com/dictionary/airplane"]
  ],[]);
  entry("jet",[
   ["aircraft","喷气式飞机","n.",["喷气式飞机"],["jet-aircraft"],"The jet landed safely despite the strong wind.","尽管风很大，喷气式飞机仍安全着陆。",null,"https://www.merriam-webster.com/dictionary/jet"],
   ["stream","喷射流；喷出的水或气体","n.",["喷射流","喷出的水或气体"],["jet-stream","gush-flow-noun"],"A jet of water cleaned the mud from the wheels.","一股水流冲掉了车轮上的泥。",null,"https://www.merriam-webster.com/dictionary/jet"],
   ["travel","乘喷气式飞机旅行","v.",["乘喷气式飞机旅行"],["jet-travel"],"The researchers jetted between the two laboratories.","研究人员乘喷气式飞机往返于两个实验室之间。",null,"https://www.merriam-webster.com/dictionary/jet"],
   ["spout","喷出；喷射","v.",["喷出","喷射","射出","迸出"],["jet-spout","gush-flow"],"Steam jetted from a small opening in the pipe.","蒸汽从管道的一个小孔喷出。",null,"https://www.merriam-webster.com/dictionary/jet"],
   ["material","煤玉；黑玉","n.",["煤玉","黑玉"],["jet-material"],"The necklace was made from polished jet.","这条项链由磨光的煤玉制成。",null,"https://www.merriam-webster.com/dictionary/jet"]
  ],[{"terms":["喷嘴","黑而发亮的","墨黑的"],"decision":"scope-excluded","reason":"喷嘴是器具而非喷射流，墨黑形容词源自煤玉颜色；不与飞机或流体动作混配。","source":"https://www.merriam-webster.com/dictionary/jet"}]);
  entry("rack",[
   ["frame","架子；支架","n.",["架子","支架","架","行李架","饲草架","搁物架","机架"],["rack-frame"],"Leave the plates to dry on the rack.","把盘子放在架子上晾干。",null,"https://www.merriam-webster.com/dictionary/rack"],
   ["suffering","使痛苦；折磨","v.",["使痛苦","折磨"],["rack-suffering"],"She was racked with guilt after breaking the promise.","失信后，她被内疚折磨着。","be racked with","https://www.merriam-webster.com/dictionary/rack"],
   ["accumulate","累计获得","v.",["累计获得"],["rack-accumulate"],"The team racked up five wins in a row.","球队一连取得了五场胜利。","rack up","https://www.merriam-webster.com/dictionary/rack%20up"]
  ],[{"terms":["痛苦","齿条","行云团","把...放在架上","在架上制作","压榨","榨取","猛烈撕拉","拷问","变形","倾斜","(云)随风飘","(马)小步跑"],"decision":"scope-excluded","reason":"齿条、步态、云团与滤酒等是专门或不同词源用法；本批架子、折磨及 rack up 不涵盖全部技术或历史义。","source":"https://www.merriam-webster.com/dictionary/rack"}]);
  entry("avenue",[
   ["street","大街；林荫道","n.",["大街","林荫道","林荫路"],["avenue-street"],"Tall trees line the avenue leading to the station.","通往车站的大道两旁种着高大的树木。",null,"https://www.merriam-webster.com/dictionary/avenue"],
   ["means","途径；手段","n.",["途径","手段"],["avenue-means"],"The grant opened a new avenue for research.","这笔资助为研究开辟了新途径。",null,"https://www.merriam-webster.com/dictionary/avenue"]
  ],[]);
  entry("secretary",[
   ["assistant","秘书","n.",["秘书"],["secretary-assistant"],"The secretary arranged the appointments for the following week.","秘书安排了下一周的预约。",null,"https://www.merriam-webster.com/dictionary/secretary"],
   ["officer","书记；干事；社团秘书","n.",["书记","干事","社团秘书"],["secretary-officer"],"The club secretary sent the minutes to all members.","俱乐部秘书把会议记录发给了所有会员。",null,"https://www.merriam-webster.com/dictionary/secretary"],
   ["minister","部长；大臣","n.",["部长","大臣"],["secretary-minister"],"The education secretary announced a review of school funding.","教育大臣宣布将审查学校经费。",null,"https://www.merriam-webster.com/dictionary/secretary"]
  ],[]);
  entry("parliament",[
   ["legislature","议会；国会","n.",["议会","国会","议院"],["parliament-legislature"],"The proposal will be debated in parliament next month.","这项提案将于下个月在议会辩论。",null,"https://www.merriam-webster.com/dictionary/parliament"]
  ],[{"terms":["会议"],"decision":"scope-excluded","reason":"现代教学指立法机关；历史上的正式议事不等同任意会议。","source":"https://www.merriam-webster.com/dictionary/parliament"}]);
  entry("conference",[
   ["meeting","会议；研讨会","n.",["会议","研讨会","讨论会","协商会"],["conference-meeting"],"The conference brought together researchers from twelve countries.","会议汇集了来自十二个国家的研究人员。",null,"https://www.merriam-webster.com/dictionary/conference"],
   ["league","体育联盟","n.",["体育联盟"],["conference-league"],"The team joined a regional conference for the new season.","球队在新赛季加入了一个地区体育联盟。",null,"https://www.merriam-webster.com/dictionary/conference"]
  ],[]);
  entry("service",[
   ["help","服务；帮助","n.",["服务","帮助","贡献","功劳","服务性的","业务"],["service-help"],"The library provides a free delivery service for housebound readers.","图书馆为无法出门的读者提供免费送书服务。",null,"https://www.merriam-webster.com/dictionary/service"],
   ["public","公共服务系统","n.",["公共服务系统"],["service-public"],"The village needs a more reliable bus service.","村庄需要更可靠的公交服务。",null,"https://www.merriam-webster.com/dictionary/service"],
   ["maintenance","检修；保养","n.",["检修","保养","维修"],["service-maintenance"],"The car is due for its annual service.","这辆车该进行年度保养了。",null,"https://www.merriam-webster.com/dictionary/service"],
   ["worship","宗教礼拜；仪式","n.",["宗教礼拜","仪式"],["service-worship"],"The family attended a service in the old church.","这家人在旧教堂参加了一场礼拜。",null,"https://www.merriam-webster.com/dictionary/service"],
   ["work","任职；服役","n.",["任职","服役","公职"],["service-work"],"He retired after thirty years of public service.","他从事公共服务三十年后退休了。",null,"https://www.merriam-webster.com/dictionary/service"],
   ["sport","发球","n.",["发球"],["service-sport"],"Her powerful service won the opening point.","她有力的发球赢得了第一分。",null,"https://www.merriam-webster.com/dictionary/service"],
   ["set","一套餐具","n.",["一套餐具"],["service-set","boxed-cutlery"],"The cupboard contains a complete dinner service.","橱柜里放着一整套餐具。",null,"https://www.merriam-webster.com/dictionary/service"],
   ["repair","检修；为……保养","v.",["检修","为……保养"],["service-repair"],"A technician services the lift every month.","技术员每个月检修电梯。",null,"https://www.merriam-webster.com/dictionary/service"],
   ["debt","支付债务利息及偿债款","v.",["支付债务利息及偿债款"],["service-debt"],"The company earned enough to service its debt.","公司赚到了足以偿付债务利息及应还款项的资金。",null,"https://www.merriam-webster.com/dictionary/service"]
  ],[{"terms":["雇佣","送达","行政部门","武装部队的","仆人的","耐用的"],"decision":"scope-excluded","reason":"法律送达、行政部门、军种与若干限定形容词各有范围，不混入一般帮助或检修考点。","source":"https://www.merriam-webster.com/dictionary/service"}]);
  entry("power",[
   ["ability","能力；力量","n.",["能力","力量"],["power-ability","17-capacity"],"The telescope has the power to reveal very faint stars.","这台望远镜有能力显示非常暗淡的恒星。",null,"https://www.merriam-webster.com/dictionary/power"],
   ["authority","权力；职权","n.",["权力","职权","控制力","势力"],["power-authority","17-influence"],"The committee has the power to approve the plan.","委员会有权批准这项计划。",null,"https://www.merriam-webster.com/dictionary/power"],
   ["energy","动力；电力","n.",["动力","电力"],["power-energy"],"The storm cut the power to several villages.","暴风雨切断了几个村庄的电力供应。",null,"https://www.merriam-webster.com/dictionary/power"],
   ["nation","强国；大国","n.",["强国","大国"],["power-nation"],"The country became a major trading power.","这个国家成为了贸易大国。",null,"https://www.merriam-webster.com/dictionary/power"],
   ["exponent","幂；乘方","n.",["幂","乘方"],["power-exponent"],"Two to the third power is eight.","二的三次方是八。",null,"https://www.merriam-webster.com/dictionary/power"],
   ["physics","功率","n.",["功率"],["power-physics"],"The motor delivers a power of five kilowatts.","这台电机输出五千瓦的功率。",null,"https://www.merriam-webster.com/dictionary/power"],
   ["supply","为……提供动力","v.",["为……提供动力","给…提供动力","驱动"],["power-supply"],"Solar cells power the remote weather station.","太阳能电池为偏远的气象站供电。",null,"https://www.merriam-webster.com/dictionary/power"],
   ["magnification","放大倍数","n.",["放大倍数"],["power-magnification"],"The microscope has a higher power than the older model.","这台显微镜的放大倍数比旧型号更高。",null,"https://www.merriam-webster.com/dictionary/power"]
  ],[]);
  entry("affect",[
   ["influence","影响","v.",["影响"],["affect-influence"],"Heavy rain affected the quality of the harvest.","大雨影响了收成的质量。",null,"https://www.merriam-webster.com/dictionary/affect"],
   ["move","使感动；触动感情","v.",["使感动","触动感情","感动"],["affect-move"],"The farewell speech deeply affected the audience.","告别演讲深深打动了观众。",null,"https://www.merriam-webster.com/dictionary/affect"],
   ["pretend","假装；装出","v.",["假装","装出"],["affect-pretend","pretend-feign"],"He affected surprise, although he already knew the news.","他假装惊讶，尽管他已经知道了消息。",null,"https://www.merriam-webster.com/dictionary/affect"]
  ],[{"terms":["模仿","爱好","倾向于","自觉感情"],"decision":"scope-excluded","reason":"名词情感状态的重音为 /ˈæfekt/，与当前动词 /əˈfekt/ 分开；嗜好、惯常穿戴及模仿的修辞语境未作本批考点。","source":"https://www.merriam-webster.com/dictionary/affect"}]);
  entry("importance",[
   ["significance","重要性；重大意义","n.",["重要性","重大意义","重要","重要地位"],["importance-significance"],"The discovery showed the importance of preserving old records.","这一发现显示了保存旧记录的重要性。",null,"https://www.merriam-webster.com/dictionary/importance"]
  ],[{"terms":["自大"],"decision":"scope-excluded","reason":"强调重要性；自负或自大是人物态度的特定转指，不能泛作重要性同义项。","source":"https://www.merriam-webster.com/dictionary/importance"}]);
  entry("association",[
   ["organisation","协会；社团","n.",["协会","社团"],["association-organisation"],"The association organises walks for local residents.","协会为当地居民组织徒步活动。",null,"https://www.merriam-webster.com/dictionary/association"],
   ["connection","联系；交往","n.",["联系","交往","关联"],["association-connection","17-related"],"The study found an association between sleep and memory.","研究发现睡眠与记忆之间存在联系。",null,"https://www.merriam-webster.com/dictionary/association"],
   ["mental","联想","n.",["联想"],["association-mental"],"The smell of pine has pleasant associations for her.","松木的气味让她产生愉快的联想。",null,"https://www.merriam-webster.com/dictionary/association"]
  ],[]);
  entry("powerful",[
   ["strong","强大的；强有力的","adj.",["强大的","强有力的","有力的","强力的"],["powerful-strong","17-capacity"],"The boat has a powerful engine.","这艘船配备了强劲的发动机。",null,"https://www.merriam-webster.com/dictionary/powerful"],
   ["influential","有权势的；有影响力的","adj.",["有权势的","有影响力的","有权力的"],["powerful-influential","17-influence"],"A powerful business group opposed the proposal.","一个有影响力的商业团体反对这项提案。",null,"https://www.merriam-webster.com/dictionary/powerful"]
  ],[]);
  entry("discount",[
   ["reduction","折扣；减价","n.",["折扣","减价"],["discount-reduction"],"Students receive a discount on museum tickets.","学生购买博物馆门票可以享受折扣。",null,"https://www.merriam-webster.com/dictionary/discount"],
   ["reduce","打折；降低价格","v.",["打折","降低价格","打折扣"],["discount-reduce"],"The shop discounted all winter coats.","商店对所有冬季外套打折销售。",null,"https://www.merriam-webster.com/dictionary/discount"],
   ["dismiss","不重视；不予考虑","v.",["不重视","不予考虑"],["discount-dismiss"],"We should not discount the possibility of further delays.","我们不应忽视进一步延误的可能性。",null,"https://www.merriam-webster.com/dictionary/discount"]
  ],[{"terms":["贴现率","贴现"],"decision":"scope-excluded","reason":"贴现、折现与贴现率有金融专门条件，不与零售价格折扣直接混为一义。","source":"https://www.merriam-webster.com/dictionary/discount"}]);
  entry("promote",[
   ["advance","提升；晋升","v.",["提升","晋升"],["promote-advance"],"The company promoted her to regional manager.","公司把她晋升为区域经理。",null,"https://www.merriam-webster.com/dictionary/promote"],
   ["encourage","促进；推动","v.",["促进","推动"],["promote-encourage"],"The programme promotes cooperation between schools.","这个项目促进学校之间的合作。",null,"https://www.merriam-webster.com/dictionary/promote"],
   ["market","宣传；促销","v.",["宣传","促销","推销","推广"],["promote-market"],"The publisher used posters to promote the new novel.","出版商用海报宣传这部新小说。",null,"https://www.merriam-webster.com/dictionary/promote"]
  ],[{"terms":["创办"],"decision":"scope-excluded","reason":"组织或助成创办不等于无条件的建立任何事物；本批晋升、促进和促销分别示例。","source":"https://www.merriam-webster.com/dictionary/promote"}]);
  entry("invoice",[
   ["bill","发票；付款清单","n.",["发票","付款清单","发货单"],["invoice-bill"],"The invoice lists the materials and labour separately.","发票分别列明材料费与人工费。",null,"https://www.merriam-webster.com/dictionary/invoice"],
   ["charge","向……开具发票","v.",["向……开具发票","开发票"],["invoice-charge"],"The supplier invoiced us for the replacement parts.","供应商就替换零件向我们开具了发票。",null,"https://www.merriam-webster.com/dictionary/invoice"]
  ],[{"terms":["记清单"],"decision":"scope-excluded","reason":"列货物及价款的发票或开票动作，不等同任意记清单。","source":"https://www.merriam-webster.com/dictionary/invoice"}]);
  entry("spend",[
   ["money","花费（金钱）","v.",["花费（金钱）","花费","浪费"],["spend-money"],"They spent less money on fuel after moving closer to work.","搬到离工作地点更近的地方后，他们的燃料开支减少了。",null,"https://www.merriam-webster.com/dictionary/spend"],
   ["time","度过；花费（时间）","v.",["度过","花费（时间）","消磨"],["spend-time"],"She spent the afternoon repairing the bicycle.","她花了一下午修自行车。",null,"https://www.merriam-webster.com/dictionary/spend"],
   ["energy","耗费；用尽（精力等）","v.",["耗费","用尽（精力等）","消耗","用尽"],["spend-energy"],"The runners spent all their energy on the steep final section.","跑步者们在陡峭的最后一段耗尽了精力。",null,"https://www.merriam-webster.com/dictionary/spend"]
  ],[]);
  entry("tax",[
   ["charge","税；税款","n.",["税","税款"],["tax-charge","17-charges"],"The price includes a small local tax.","价格中包含一笔小额地方税。",null,"https://www.merriam-webster.com/dictionary/tax"],
   ["levy","向……征税","v.",["向……征税","课以税"],["tax-levy","17-taxation"],"The law taxes goods according to their value.","这项法律按货物价值征税。",null,"https://www.merriam-webster.com/dictionary/tax"],
   ["strain","使负担沉重；使费力","v.",["使负担沉重","使费力","重负","使负重荷"],["tax-strain"],"The difficult puzzle taxed her patience.","这个难题让她的耐心受到了考验。",null,"https://www.merriam-webster.com/dictionary/tax"]
  ],[{"terms":["会费","斥责"],"decision":"scope-excluded","reason":"会费须组织征收语境；责备的动词用法较旧，不归入征税或使费力义。","source":"https://www.merriam-webster.com/dictionary/tax"}]);
  entry("levy",[
   ["impose","征收；课征","v.",["征收","课征","征税","课税"],["levy-impose","17-taxation"],"The council levies a charge for commercial waste collection.","地方政府对商业垃圾收集征收费用。",null,"https://www.merriam-webster.com/dictionary/levy"],
   ["charge","征收的税费","n.",["征收的税费","税款"],["levy-charge","17-charges"],"A small levy helps maintain the coastal path.","一笔小额征费帮助维护海岸步道。",null,"https://www.merriam-webster.com/dictionary/levy"]
  ],[{"terms":["所征的人数","强求","召集"],"decision":"scope-excluded","reason":"征召人数、军役及强制要求属专门语境；不等同日常召集或泛指强求。","source":"https://www.merriam-webster.com/dictionary/levy"}]);
  entry("expense",[
   ["cost","费用；开支","n.",["费用","开支"],["expense-cost","17-cost","money-needed-for-something"],"Travel was the largest expense of the project.","差旅是项目中最大的一项开支。",null,"https://www.merriam-webster.com/dictionary/expense"],
   ["sacrifice","代价；损害","n.",["代价","损害","损失"],["expense-sacrifice","sacrifice-loss"],"The shortcut saved time at the expense of accuracy.","这条捷径节省了时间，却以准确性为代价。","at the expense of","https://www.merriam-webster.com/dictionary/expense"],
   ["charge","把……列为费用报销","v.",["把……列为费用报销","将支出转为费用"],["expense-charge"],"Staff may expense reasonable travel costs.","员工可以报销合理的差旅费用。",null,"https://www.merriam-webster.com/dictionary/expense"]
  ],[]);
  entry("duty",[
   ["obligation","责任；义务","n.",["责任","义务"],["duty-obligation"],"We have a duty to protect the records entrusted to us.","我们有责任保护托付给我们的记录。",null,"https://www.merriam-webster.com/dictionary/duty"],
   ["work","值班；职务工作","n.",["值班","职务工作","职务","职责"],["duty-work"],"Her duties include opening the library each morning.","她的工作职责包括每天早晨开馆。",null,"https://www.merriam-webster.com/dictionary/duty"],
   ["tax","关税；税款","n.",["关税","税款"],["duty-tax","17-charges"],"The goods are subject to import duty.","这些货物需要缴纳进口关税。",null,"https://www.merriam-webster.com/dictionary/duty"]
  ],[{"terms":["尊敬"],"decision":"scope-excluded","reason":"尊敬是特定的尽本分语境，本批责任、职责和值班及关税不代替一般 respect。","source":"https://www.merriam-webster.com/dictionary/duty"}]);
  entry("gross",[
   ["total","总的；未扣除费用的","adj.",["总的","未扣除费用的","总数","总量","总共的","未打折扣的"],["gross-total"],"The figure shows gross income before tax.","这个数字显示的是税前总收入。",null,"https://www.merriam-webster.com/dictionary/gross"],
   ["flagrant","严重的；公然的","adj.",["严重的","公然的","恶劣的"],["gross-flagrant"],"The report described the failure as gross negligence.","报告把这次失误描述为严重疏忽。",null,"https://www.merriam-webster.com/dictionary/gross"],
   ["disgusting","令人恶心的；粗俗的","adj.",["令人恶心的","粗俗的","粗野的"],["gross-disgusting"],"The children thought the smell was gross.","孩子们觉得那股气味很恶心。",null,"https://www.merriam-webster.com/dictionary/gross"],
   ["earn","获得总收入","v.",["获得总收入","总共收入"],["gross-earn"],"The exhibition grossed more than expected in ticket sales.","展览的门票总收入超出了预期。",null,"https://www.merriam-webster.com/dictionary/gross"],
   ["quantity","一罗（144个）","n.",["一罗（144个）"],["gross-quantity"],"The supplier packed the pencils in boxes of one gross.","供应商把铅笔按每盒一罗包装。",null,"https://www.merriam-webster.com/dictionary/gross"]
  ],[]);
  entry("complain",[
   ["discontent","抱怨；投诉","v.",["抱怨","投诉","抗议","控诉"],["complain-discontent"],"Residents complained about the noise from the building site.","居民投诉了建筑工地的噪声。","complain about","https://www.merriam-webster.com/dictionary/complain"],
   ["symptom","诉说不适","v.",["诉说不适"],["complain-symptom"],"Several passengers complained of headaches after the journey.","旅程结束后，几位乘客诉说头痛。","complain of","https://www.merriam-webster.com/dictionary/complain"]
  ],[]);
  entry("discrimination",[
   ["unfair","歧视；不公平区别对待","n.",["歧视","不公平区别对待","岐视"],["discrimination-unfair"],"The company introduced measures to prevent age discrimination.","公司采取了措施以防止年龄歧视。",null,"https://www.merriam-webster.com/dictionary/discrimination"],
   ["discernment","辨别力；鉴赏力","n.",["辨别力","鉴赏力","差别","鉴别"],["discrimination-discernment"],"Choosing between the two recordings requires careful discrimination.","在这两段录音之间作出选择需要细致的辨别力。",null,"https://www.merriam-webster.com/dictionary/discrimination"]
  ],[]);
  entry("boycott",[
   ["refuse","联合抵制","v.",["联合抵制"],["boycott-refuse"],"The residents boycotted the shop until it reduced unnecessary packaging.","居民联合抵制这家商店，直到它减少不必要的包装。",null,"https://www.merriam-webster.com/dictionary/boycott"],
   ["action","联合抵制行动","n.",["联合抵制行动"],["boycott-action"],"The boycott lasted for three weeks.","这次联合抵制持续了三个星期。",null,"https://www.merriam-webster.com/dictionary/boycott"]
  ],[]);
  entry("persecution",[
   ["oppression","迫害","n.",["迫害","虐待","迫害运动"],["persecution-oppression"],"The exhibition records stories of families who escaped persecution.","展览记录了一些家庭逃离迫害的故事。",null,"https://www.merriam-webster.com/dictionary/persecution"]
  ],[{"terms":["烦扰","困扰"],"decision":"scope-excluded","reason":"本批强调持续迫害；普通烦扰或小困扰的严重程度不同，不作等义答案。","source":"https://www.merriam-webster.com/dictionary/persecution"}]);
  entry("unfair",[
   ["unjust","不公平的；不公正的","adj.",["不公平的","不公正的","不正当的","偏颇的"],["unfair-unjust","17-lack-fairness"],"It would be unfair to change the rules after the competition starts.","比赛开始后再改规则是不公平的。",null,"https://www.merriam-webster.com/dictionary/unfair"]
  ],[{"terms":["不正直的"],"decision":"scope-excluded","reason":"不公平不必同时意味着人格不正直，避免把不公与不诚实无条件等同。","source":"https://www.merriam-webster.com/dictionary/unfair"}]);
  entry("complaint",[
   ["protest","抱怨；投诉","n.",["抱怨","投诉","诉苦","陈诉"],["complaint-protest"],"The manager responded promptly to the customer's complaint.","经理迅速回应了顾客的投诉。",null,"https://www.merriam-webster.com/dictionary/complaint"],
   ["illness","病症；不适","n.",["病症","不适","病"],["complaint-illness"],"The clinic treats common skin complaints.","这家诊所治疗常见的皮肤病症。",null,"https://www.merriam-webster.com/dictionary/complaint"],
   ["legal","诉状；控告文书","n.",["诉状","控告文书","控诉"],["complaint-legal"],"The complaint set out the events in chronological order.","诉状按时间顺序列出了事件。",null,"https://www.merriam-webster.com/dictionary/complaint"]
  ],[]);
  entry("unjust",[
   ["unfair","不公正的；不正当的","adj.",["不公正的","不正当的","不公平的"],["unjust-unfair","17-lack-fairness"],"The committee agreed that the original decision was unjust.","委员会一致认为最初的决定不公正。",null,"https://www.merriam-webster.com/dictionary/unjust"]
  ],[{"terms":["不公正的人","不合理的"],"decision":"scope-excluded","reason":"为不公正的形容词，不把人这一名词或一切不合理情形混成同义答案。","source":"https://www.merriam-webster.com/dictionary/unjust"}]);
  entry("persuade",[
   ["act","说服某人做某事","v.",["说服某人做某事","说服","劝服","被说服"],["persuade-act","17-persuasion","persuade-action"],"They persuaded the owner to keep the old trees.","他们说服了业主保留那些老树。","persuade sb to do sth","https://www.merriam-webster.com/dictionary/persuade"],
   ["believe","使相信；使信服","v.",["使相信","使信服"],["persuade-believe","17-persuasion","persuade-belief"],"The evidence persuaded her that the account was accurate.","证据使她相信那份叙述是准确的。","persuade sb that","https://www.merriam-webster.com/dictionary/persuade"]
  ],[{"terms":["劝","恳求","敦促"],"decision":"scope-excluded","reason":"重在影响信念或使人采取行动；恳求、敦促是可能的方法，不能视为必然已经说服。","source":"https://www.merriam-webster.com/dictionary/persuade"}]);
  entry("controversy",[
   ["dispute","争议；争论","n.",["争议","争论","论争","辩论","论战","争吵"],["controversy-dispute"],"The new design caused controversy among local residents.","新设计在当地居民中引起了争议。",null,"https://www.merriam-webster.com/dictionary/controversy"]
  ],[]);
  entry("provide",[
   ["supply","提供；供应","v.",["提供","供应"],["provide-supply","17-supply","supply-provide"],"The centre provides clean drinking water for visitors.","这个中心为访客提供洁净的饮用水。",null,"https://www.merriam-webster.com/dictionary/provide"],
   ["support","供养；为……作准备","v.",["供养","为……作准备","预备","作准备","抚养"],["provide-support"],"The savings will help provide for the family during the winter.","这笔积蓄将帮助维持一家人冬季的生活。","provide for","https://www.merriam-webster.com/dictionary/provide"],
   ["stipulate","规定","v.",["规定"],["provide-stipulate"],"The agreement provides that each side must keep a copy.","协议规定双方必须各自保留一份副本。","provide that","https://www.merriam-webster.com/dictionary/provide"]
  ],[]);
  entry("helmet",[
   ["headgear","头盔；安全帽","n.",["头盔","安全帽","钢盔","盔","防护帽"],["helmet-headgear"],"Every rider must wear a helmet on the course.","在赛道上的每位骑行者都必须戴头盔。",null,"https://www.merriam-webster.com/dictionary/helmet"]
  ],[{"terms":["给...戴头盔"],"decision":"scope-excluded","reason":"本批为防护头盔名词，给人戴盔的动词用法不混入名词教学。","source":"https://www.merriam-webster.com/dictionary/helmet"}]);
  entry("glittery",[
   ["sparkling","闪闪发光的；有亮片的","adj.",["闪闪发光的","有亮片的","闪光的","闪烁的"],["glittery-sparkling","17-glitter","17-shine","glitter-shine","glitter-particles"],"The children decorated the cards with glittery paper.","孩子们用闪闪发光的纸装饰卡片。",null,"https://www.merriam-webster.com/dictionary/glittery"]
  ],[]);
  entry("strike",[
   ["hit","击打；撞击","v.",["击打","撞击","殴打","打","冲击","触礁"],["strike-hit","hit-strike","punch-strike","beat-strike","smash-hit-hard","strike-with-force","bump-collide"],"A falling branch struck the roof.","一根掉落的树枝砸中了屋顶。",null,"https://www.merriam-webster.com/dictionary/strike"],
   ["affect","突然袭击；侵袭","v.",["突然袭击","侵袭"],["strike-affect","hit-affect"],"The storm struck the island before dawn.","暴风雨在黎明前袭击了岛屿。",null,"https://www.merriam-webster.com/dictionary/strike"],
   ["stop-work","罢工","v.",["罢工"],["strike-stop-work"],"The workers voted to strike over the proposed pay cuts.","工人们投票决定罢工，抗议拟议中的减薪。",null,"https://www.merriam-webster.com/dictionary/strike"],
   ["clock","敲响；报时","v.",["敲响","报时","敲","响"],["strike-clock"],"The clock struck twelve as we entered the hall.","我们走进大厅时，钟敲响了十二下。",null,"https://www.merriam-webster.com/dictionary/strike"],
   ["occur","突然想到","v.",["突然想到"],["strike-occur"],"It struck me that we had left the map behind.","我突然想到我们把地图落下了。","it strikes sb that","https://www.merriam-webster.com/dictionary/strike"],
   ["impress","给人以某种印象","v.",["给人以某种印象","打动"],["strike-impress"],"Her plan struck us as practical and affordable.","她的计划给我们的印象是实用且费用可承受。","strike sb as","https://www.merriam-webster.com/dictionary/strike"],
   ["ignite","划燃；擦燃","v.",["划燃","擦燃"],["strike-ignite"],"He struck a match to light the candle.","他划了一根火柴来点蜡烛。",null,"https://www.merriam-webster.com/dictionary/strike"],
   ["agreement","达成协议","v.",["达成协议"],["strike-agreement"],"The two firms struck a deal to share the warehouse.","两家公司达成了共用仓库的协议。","strike a deal","https://www.merriam-webster.com/dictionary/strike"],
   ["remove","删除；划掉","v.",["删除","划掉","取消","打掉"],["strike-remove"],"The editor struck the repeated sentence from the draft.","编辑从草稿中删去了重复的句子。",null,"https://www.merriam-webster.com/dictionary/strike"],
   ["pose","摆出姿势","v.",["摆出姿势"],["strike-pose"],"The dancer struck a pose beside the window.","舞者在窗边摆出了一个姿势。","strike a pose","https://www.merriam-webster.com/dictionary/strike"],
   ["industrial","罢工行动","n.",["罢工行动"],["strike-industrial"],"The strike delayed deliveries for two days.","罢工使交货延误了两天。",null,"https://www.merriam-webster.com/dictionary/strike"],
   ["discovery","意外发现；矿藏发现","n.",["意外发现","矿藏发现"],["strike-discovery"],"News of a gold strike brought prospectors to the valley.","发现黄金的消息把探矿者吸引到了山谷。",null,"https://www.merriam-webster.com/dictionary/strike"],
   ["attack","袭击；打击","n.",["袭击","打击"],["strike-attack"],"The air strike damaged the bridge.","空袭损坏了那座桥。",null,"https://www.merriam-webster.com/dictionary/strike"]
  ],[{"terms":["结算","刺透","使生根","遇见","抓","搏动","穿透"],"decision":"scope-excluded","reason":"此词还含删除、铸币、生根、触及矿层等大量语境，本批只考列出的击打、罢工、报时、印象和搭配，不泛化为结算或任意抓取。","source":"https://www.merriam-webster.com/dictionary/strike"}]);
  entry("destitute",[
   ["poor","赤贫的；一无所有的","adj.",["赤贫的","一无所有的","穷困的"],["destitute-poor","destitute-lacking"],"The charity provides shelter for destitute families.","慈善机构为赤贫家庭提供住所。",null,"https://www.merriam-webster.com/dictionary/destitute"],
   ["lacking","缺乏；没有","adj.",["缺乏","没有","缺乏的"],["destitute-lacking"],"The abandoned room was destitute of furniture.","被弃置的房间里没有家具。","destitute of","https://www.merriam-webster.com/dictionary/destitute"]
  ],[]);
  entry("famine",[
   ["food","饥荒","n.",["饥荒"],["famine-food"],"A prolonged drought brought famine to the region.","长期干旱给这个地区带来了饥荒。",null,"https://www.merriam-webster.com/dictionary/famine"],
   ["shortage","严重短缺","n.",["严重短缺","缺乏"],["famine-shortage"],"The article describes a famine of reliable information.","这篇文章描述了可靠信息的严重匮乏。",null,"https://www.merriam-webster.com/dictionary/famine"]
  ],[{"terms":["饥饿"],"decision":"scope-excluded","reason":"指广泛粮食短缺，不等同一个人的饥饿；扩展稀缺义也须重大不足语境。","source":"https://www.merriam-webster.com/dictionary/famine"}]);
  entry("dilemma",[
   ["choice","两难选择；困境","n.",["两难选择","困境","(进退两难的)窘境"],["dilemma-choice"],"She faced a dilemma: accept the job or stay near her family.","她面临两难选择：接受这份工作，还是留在家人附近。",null,"https://www.merriam-webster.com/dictionary/dilemma"]
  ],[]);
  entry("deprive",[
   ["withhold","剥夺；使丧失","v.",["剥夺","使丧失","夺去"],["deprive-withhold"],"The noise deprived the children of sleep.","噪声使孩子们无法入睡。","deprive sb of sth","https://www.merriam-webster.com/dictionary/deprive"]
  ],[]);
  entry("deployment",[
   ["use","部署；调配使用","n.",["部署","调配使用","调动","运用","有效配置"],["deployment-use"],"The deployment of extra staff reduced waiting times.","增派工作人员缩短了等待时间。",null,"https://www.merriam-webster.com/dictionary/deployment"],
   ["unfold","展开；启用展开装置","n.",["展开","启用展开装置"],["deployment-unfold"],"The test checked the deployment of the parachute.","这项测试检查了降落伞的展开情况。",null,"https://www.merriam-webster.com/dictionary/deployment"]
  ],[]);
  entry("relate",[
   ["connection","有关联；把……联系起来","v.",["有关联","把……联系起来","使互相关联","有关"],["relate-connection","17-related"],"The report relates the decline in fish numbers to warmer water.","报告把鱼类数量下降与水温升高联系起来。","relate sth to sth","https://www.merriam-webster.com/dictionary/relate"],
   ["narrate","讲述；叙述","v.",["讲述","叙述","讲"],["relate-narrate"],"The traveller related the events of the previous night.","旅人讲述了前一夜发生的事情。",null,"https://www.merriam-webster.com/dictionary/relate"],
   ["understand","理解并产生共鸣","v.",["理解并产生共鸣"],["relate-understand"],"Many readers can relate to the character's worries.","许多读者能理解这个人物的忧虑并产生共鸣。","relate to","https://www.merriam-webster.com/dictionary/relate"]
  ],[{"terms":["符合","相处得好"],"decision":"scope-excluded","reason":"关联、叙述和共鸣分别训练；有关不保证符合，也不保证人际相处得好。","source":"https://www.merriam-webster.com/dictionary/relate"}]);
  entry("maid",[
   ["worker","女佣；女服务员","n.",["女佣","女服务员","女仆"],["maid-worker"],"The hotel maid left fresh towels in the room.","酒店女服务员在房间里放了干净毛巾。",null,"https://www.merriam-webster.com/dictionary/maid"],
   ["young","少女；年轻未婚女子（旧或文学用法）","n.",["少女","年轻未婚女子（旧或文学用法）","未婚女子"],["maid-young"],"The old ballad tells of a maid waiting beside the sea.","那首古老的民谣讲述了一位少女在海边等待的故事。",null,"https://www.merriam-webster.com/dictionary/maid"]
  ],[]);
  entry("household",[
   ["people","一家人；同住的一户","n.",["一家人","同住的一户","家庭"],["household-people","17-kin"],"The survey asked each household about its water use.","调查询问了每户的用水情况。",null,"https://www.merriam-webster.com/dictionary/household"],
   ["domestic","家庭的；家务的","adj.",["家庭的","家务的","家常的"],["household-domestic"],"They share the household chores equally.","他们平均分担家务。",null,"https://www.merriam-webster.com/dictionary/household"],
   ["famous","家喻户晓的","adj.",["家喻户晓的"],["household-famous"],"Her first television series made her a household name.","她的第一部电视剧使她家喻户晓。","household name","https://www.merriam-webster.com/dictionary/household"]
  ],[{"terms":["家族","王室","王室的"],"decision":"scope-excluded","reason":"指同住的一户或家务，不必包括整个家族；王室是 royal household 等特定语境。","source":"https://www.merriam-webster.com/dictionary/household"}]);
  entry("host",[
   ["person","主人；东道主","n.",["主人","东道主"],["host-person","17-greet","female-greeter-host"],"Our host welcomed us with a pot of tea.","主人用一壶茶欢迎我们。",null,"https://www.merriam-webster.com/dictionary/host"],
   ["presenter","节目主持人","n.",["节目主持人"],["host-presenter","female-programme-presenter","present-introduce"],"The host introduced the next guest on the programme.","主持人介绍了节目的下一位嘉宾。",null,"https://www.merriam-webster.com/dictionary/host"],
   ["organism","宿主；寄主","n.",["宿主","寄主"],["host-organism"],"The parasite depends on its host for food.","这种寄生虫依靠宿主获取食物。",null,"https://www.merriam-webster.com/dictionary/host"],
   ["computer","主机","n.",["主机","宿主机"],["host-computer"],"The host stores the files used by the other computers.","主机存储着其他计算机所使用的文件。",null,"https://www.merriam-webster.com/dictionary/host"],
   ["number","许多；大量","n.",["许多","大量"],["host-number"],"The proposal raised a host of practical questions.","这项提案引出了一大堆实际问题。","a host of","https://www.merriam-webster.com/dictionary/host"],
   ["receive","主办；接待","v.",["主办","接待","当主人招待"],["host-receive"],"The city will host an international science fair.","这座城市将主办一场国际科学展览。",null,"https://www.merriam-webster.com/dictionary/host"],
   ["present","主持节目","v.",["主持节目","作...节目主持人"],["host-present","present-introduce"],"She hosts a weekly programme about local history.","她主持一个介绍地方历史的每周节目。",null,"https://www.merriam-webster.com/dictionary/host"]
  ],[{"terms":["旅馆老板"],"decision":"scope-excluded","reason":"旅店老板须有接待住宿语境，不将所有东道主都等同物业或旅店经营者。","source":"https://www.merriam-webster.com/dictionary/host"}]);
  entry("landlady",[
   ["owner","女房东","n.",["女房东"],["landlady-owner","17-owner"],"The landlady arranged for the broken window to be repaired.","女房东安排修理了破损的窗户。",null,"https://www.merriam-webster.com/dictionary/landlady"],
   ["innkeeper","女店主；女旅店老板","n.",["女店主","女旅店老板"],["landlady-innkeeper","17-greet","female-innkeeper"],"The landlady of the inn showed us to a quiet room.","旅店的女老板带我们来到一个安静的房间。",null,"https://www.merriam-webster.com/dictionary/landlady"]
  ],[{"terms":["女地主"],"decision":"scope-excluded","reason":"强调出租物业的女房东；有土地所有权并不保证出租，故不把女地主作普遍对应。","source":"https://www.merriam-webster.com/dictionary/landlady"}]);
  entry("landlord",[
   ["owner","房东；出租物业所有者","n.",["房东","出租物业所有者","业主"],["landlord-owner","17-owner"],"The landlord replaced the faulty boiler.","房东更换了有故障的锅炉。",null,"https://www.merriam-webster.com/dictionary/landlord"],
   ["innkeeper","旅店或酒馆老板","n.",["旅店或酒馆老板"],["landlord-innkeeper","17-greet"],"The landlord welcomed the walkers into his village inn.","老板欢迎步行者们进入他的乡村旅店。",null,"https://www.merriam-webster.com/dictionary/landlord"]
  ],[{"terms":["地主"],"decision":"scope-excluded","reason":"强调出租关系；仅有土地所有权的地主不必是出租物业的 landlord。","source":"https://www.merriam-webster.com/dictionary/landlord"}]);
  entry("mistress",[
   ["head","女主人；女掌管者（较旧用法）","n.",["女主人","女掌管者（较旧用法）","主妇"],["mistress-head","17-head"],"In the novel, the mistress of the house manages the entire estate.","在小说中，宅邸的女主人管理着整座庄园。",null,"https://www.merriam-webster.com/dictionary/mistress"],
   ["lover","情妇；已婚者的婚外女伴","n.",["情妇","已婚者的婚外女伴"],["mistress-lover"],"The biography discusses his relationship with his mistress.","这本传记讨论了他与情妇的关系。",null,"https://www.merriam-webster.com/dictionary/mistress"],
   ["expert","精通某领域的女子","n.",["精通某领域的女子"],["mistress-expert"],"The review described her as a mistress of comic timing.","评论称她是一位精通喜剧节奏的女演员。",null,"https://www.merriam-webster.com/dictionary/mistress"]
  ],[]);
  entry("widow",[
   ["bereaved","寡妇；丧偶女子","n.",["寡妇","丧偶女子","孀妇"],["widow-bereaved"],"The widow preserved her partner's letters for the archive.","那位丧偶女子为档案馆保存了伴侣的信件。",null,"https://www.merriam-webster.com/dictionary/widow"],
   ["lose","使丧偶","v.",["使丧偶","使成寡妇"],["widow-lose"],"She was widowed early in their marriage.","结婚不久她就丧偶了。",null,"https://www.merriam-webster.com/dictionary/widow"],
   ["type","孤行（排版）","n.",["孤行（排版）"],["widow-type"],"The editor adjusted the spacing to remove a widow at the top of the page.","编辑调整了间距，以消除页首的一行孤行。",null,"https://www.merriam-webster.com/dictionary/widow"]
  ],[]);
  entry("accompany",[
   ["companion","陪伴；陪同","v.",["陪伴","陪同"],["accompany-companion"],"A guide will accompany the group through the reserve.","一位导游将陪同小组穿过保护区。",null,"https://www.merriam-webster.com/dictionary/accompany"],
   ["coexist","伴随；同时发生","v.",["伴随","同时发生"],["accompany-coexist"],"Strong winds accompanied the sudden drop in temperature.","气温骤降的同时刮起了强风。",null,"https://www.merriam-webster.com/dictionary/accompany"],
   ["music","为……伴奏","v.",["为……伴奏","为...伴奏","伴奏","伴唱"],["accompany-music"],"Her brother accompanied her on the piano.","她的哥哥用钢琴为她伴奏。",null,"https://www.merriam-webster.com/dictionary/accompany"]
  ],[{"terms":["补充"],"decision":"scope-excluded","reason":"陪伴、随同出现与音乐伴奏各有对象；补充不一定表示同时随附，不作宽泛同义。","source":"https://www.merriam-webster.com/dictionary/accompany"}]);
  entry("hasty",[
   ["hurried","匆忙的；仓促完成的","adj.",["匆忙的","仓促完成的","匆匆的"],["hasty-hurried"],"We ate a hasty breakfast before catching the bus.","赶公交车前，我们匆匆吃了早饭。",null,"https://www.merriam-webster.com/dictionary/hasty"],
   ["rash","草率的；欠考虑的","adj.",["草率的","欠考虑的","轻率的"],["hasty-rash","rash-reckless"],"A hasty decision could create more problems later.","草率的决定以后可能造成更多问题。",null,"https://www.merriam-webster.com/dictionary/hasty"]
  ],[{"terms":["性怠的"],"decision":"scope-excluded","reason":"性怠疑有字误；本批匆忙及草率不把懒散当成正确解释。","source":"https://www.merriam-webster.com/dictionary/hasty"}]);
  entry("boastful",[
   ["proud","自夸的；爱吹嘘的","adj.",["自夸的","爱吹嘘的","自负的","喜夸耀的"],["boastful-proud"],"His boastful account made the achievement sound larger than it was.","他自夸的叙述夸大了那项成就。",null,"https://www.merriam-webster.com/dictionary/boastful"]
  ],[]);
  entry("scatter",[
   ["spread","撒开；散布","v.",["撒开","散布","撒播"],["scatter-spread","17-separate"],"She scattered seeds across the prepared soil.","她把种子撒在整好的土上。",null,"https://www.merriam-webster.com/dictionary/scatter"],
   ["disperse","散开；驱散","v.",["散开","驱散","使分散"],["scatter-disperse","17-separate"],"The birds scattered when the gate slammed.","大门砰地关上时，鸟儿们四散飞走。",null,"https://www.merriam-webster.com/dictionary/scatter"],
   ["physics","散射","v.",["散射"],["scatter-physics"],"Tiny particles scatter the light in different directions.","微小颗粒把光散射到不同方向。",null,"https://www.merriam-webster.com/dictionary/scatter"]
  ],[{"terms":["零星散布物"],"decision":"scope-excluded","reason":"本批采用撒布、散开与散射动词；零星散布物为名词产物，保留词性边界。","source":"https://www.merriam-webster.com/dictionary/scatter"}]);
  entry("fold",[
   ["bend","折叠","v.",["折叠","合拢","交迭","折叠起来"],["fold-bend","17-bend"],"Fold the paper in half before cutting it.","剪纸之前先把纸对折。",null,"https://www.merriam-webster.com/dictionary/fold"],
   ["arms","交叉双臂","v.",["交叉双臂"],["fold-arms"],"He folded his arms and waited beside the door.","他交叉双臂，站在门旁等待。","fold one's arms","https://www.merriam-webster.com/dictionary/fold"],
   ["mix","轻轻拌入","v.",["轻轻拌入"],["fold-mix"],"Fold the beaten egg whites into the mixture.","把打发的蛋白轻轻拌入混合物。","fold sth into sth","https://www.merriam-webster.com/dictionary/fold"],
   ["close","倒闭；停止经营","v.",["倒闭","停止经营","彻底失败"],["fold-close"],"The small newspaper folded after losing its main sponsor.","失去主要赞助者后，这家小报社倒闭了。",null,"https://www.merriam-webster.com/dictionary/fold"],
   ["crease","褶皱；折痕","n.",["褶皱","折痕","折层","折"],["fold-crease"],"A deep fold ran down the centre of the map.","地图中央有一道深深的折痕。",null,"https://www.merriam-webster.com/dictionary/fold"],
   ["rock","褶皱（地质）","n.",["褶皱（地质）"],["fold-rock"],"The exposed rock shows a broad fold formed by pressure.","露出的岩石呈现出由压力形成的大褶皱。",null,"https://www.merriam-webster.com/dictionary/fold"],
   ["sheep","羊栏；圈栏","n.",["羊栏","圈栏"],["fold-sheep"],"The shepherd led the sheep back to the fold.","牧羊人把羊群带回了羊栏。",null,"https://www.merriam-webster.com/dictionary/fold"],
   ["group","有共同信仰或归属的群体","n.",["有共同信仰或归属的群体"],["fold-group"],"After years abroad, she returned to the family fold.","在海外多年后，她回到了家庭这个群体中。","the fold","https://www.merriam-webster.com/dictionary/fold"]
  ],[{"terms":["信徒","包","合并"],"decision":"scope-excluded","reason":"信徒指特定信仰群体，已另列 the fold；包裹或合并须构式，本批不泛化为任意包和组织合并。","source":"https://www.merriam-webster.com/dictionary/fold"}]);
  entry("snatch",[
   ["seize","一把夺取；突然抓住","v.",["一把夺取","突然抓住","抢夺","攫取","夺取","想抢走"],["snatch-seize","17-grip","seize-grab"],"She snatched the letter before it fell into the water.","信落入水中之前，她一把抓住了它。",null,"https://www.merriam-webster.com/dictionary/snatch"],
   ["brief","抓紧时间获得；匆忙取得","v.",["抓紧时间获得","匆忙取得"],["snatch-brief"],"The driver snatched a few minutes of sleep at the rest stop.","司机在休息站抓紧时间睡了几分钟。",null,"https://www.merriam-webster.com/dictionary/snatch"],
   ["fragment","片段；只言片语","n.",["片段","只言片语","片断"],["snatch-fragment"],"We heard snatches of conversation from the next room.","我们听到隔壁房间传来断断续续的谈话。","snatches of","https://www.merriam-webster.com/dictionary/snatch"],
   ["weightlifting","抓举","n.",["抓举"],["snatch-weightlifting"],"The athlete practised the snatch with a lighter bar.","运动员用较轻的杠铃练习抓举。",null,"https://www.merriam-webster.com/dictionary/snatch"]
  ],[]);
  entry("fasten",[
   ["secure","系牢；扣紧；固定","v.",["系牢","扣紧","固定","拴紧","使固定","系"],["fasten-secure"],"Fasten your seat belt before the vehicle starts.","车辆开动前系好安全带。",null,"https://www.merriam-webster.com/dictionary/fasten"],
   ["focus","集中注意；盯住","v.",["集中注意","盯住","集中于"],["fasten-focus"],"Her attention fastened on a tiny mark in the photograph.","她的注意力集中到照片中的一个小痕迹上。","fasten on","https://www.merriam-webster.com/dictionary/fasten"]
  ],[{"terms":["强加于"],"decision":"scope-excluded","reason":"强加属于归责等专门搭配，不与扣紧、固定或注目同义。","source":"https://www.merriam-webster.com/dictionary/fasten"}]);
  entry("grasp",[
   ["hold","抓住；握紧","v.",["抓住","握紧","抓紧","抓"],["grasp-hold","17-grip","seize-grab"],"He grasped the rope with both hands.","他双手抓紧绳子。",null,"https://www.merriam-webster.com/dictionary/grasp"],
   ["understand","理解；领会","v.",["理解","领会","把握"],["grasp-understand","17-understanding"],"The students quickly grasped the main idea.","学生们很快领会了主要意思。",null,"https://www.merriam-webster.com/dictionary/grasp"],
   ["grip","紧握；掌握","n.",["紧握","掌握","控制"],["grasp-grip","17-hold"],"The wet handle slipped from his grasp.","湿滑的把手从他的手中滑脱了。",null,"https://www.merriam-webster.com/dictionary/grasp"],
   ["comprehension","理解力；掌握程度","n.",["理解力","掌握程度"],["grasp-comprehension","17-understanding"],"She has a firm grasp of the basic principles.","她牢固掌握了基本原理。",null,"https://www.merriam-webster.com/dictionary/grasp"],
   ["reach","能力或所能达到的范围","n.",["能力或所能达到的范围"],["grasp-reach"],"The championship was finally within their grasp.","他们终于有望夺得冠军了。","within/beyond sb's grasp","https://www.merriam-webster.com/dictionary/grasp"]
  ],[{"terms":["柄"],"decision":"scope-excluded","reason":"柄为可抓住的部件名词；本批抓取动作和掌握状态不等同部件本身。","source":"https://www.merriam-webster.com/dictionary/grasp"}]);
  entry("grip",[
   ["hold","紧握；抓牢","v.",["紧握","抓牢","抓紧","抱住","握牢"],["grip-hold","17-grip","seize-grab"],"She gripped the railing as the boat rocked.","船摇晃时，她紧紧抓住栏杆。",null,"https://www.merriam-webster.com/dictionary/grip"],
   ["interest","吸引；使着迷","v.",["吸引","使着迷","有吸引力"],["grip-interest","17-attraction"],"The mystery gripped readers from the opening page.","这个悬疑故事从第一页起就吸引住了读者。",null,"https://www.merriam-webster.com/dictionary/grip"],
   ["hold-noun","紧握；握力","n.",["紧握","握力"],["grip-hold-noun","17-hold"],"His grip on the handle remained firm.","他依然牢牢握着把手。",null,"https://www.merriam-webster.com/dictionary/grip"],
   ["control","控制；支配","n.",["控制","支配"],["grip-control"],"Fear had a strong grip on the crowd.","人群被恐惧牢牢笼罩。",null,"https://www.merriam-webster.com/dictionary/grip"],
   ["handle","把手；握柄","n.",["把手","握柄","柄"],["grip-handle"],"The rubber grip makes the tool easier to hold.","橡胶握柄使工具更容易握持。",null,"https://www.merriam-webster.com/dictionary/grip"],
   ["understand","理解；掌握","n.",["理解","掌握"],["grip-understand","17-understanding","grasp-comprehension"],"The manager has a good grip on the financial details.","经理对财务细节掌握得很好。",null,"https://www.merriam-webster.com/dictionary/grip"]
  ],[{"terms":["握手方式","手提包","吸住"],"decision":"scope-excluded","reason":"握持方式、手提包是名词特定用法；紧握不等同通过吸力吸附，保留范围。","source":"https://www.merriam-webster.com/dictionary/grip"}]);
  entry("messy",[
   ["untidy","凌乱的；脏乱的","adj.",["凌乱的","脏乱的","散乱的","污秽的"],["messy-untidy"],"The studio was messy after a day of painting.","画了一整天后，工作室很凌乱。",null,"https://www.merriam-webster.com/dictionary/messy"],
   ["complicated","棘手的；难处理的","adj.",["棘手的","难处理的","麻烦的"],["messy-complicated"],"The dispute became a messy problem for the whole committee.","争端成了整个委员会难以处理的棘手问题。",null,"https://www.merriam-webster.com/dictionary/messy"]
  ],[]);
  entry("pulse",[
   ["beat","脉搏；搏动","n.",["脉搏","搏动","脉跳","拍子"],["pulse-beat","beat-pulse"],"The nurse checked the patient's pulse.","护士检查了病人的脉搏。",null,"https://www.merriam-webster.com/dictionary/pulse"],
   ["signal","脉冲","n.",["脉冲"],["pulse-signal","impulse-signal"],"The device sends a short electrical pulse every second.","这个装置每秒发送一个短电脉冲。",null,"https://www.merriam-webster.com/dictionary/pulse"],
   ["opinion","情绪或舆论的动向","n.",["情绪或舆论的动向","情绪","意向"],["pulse-opinion"],"The survey tried to take the pulse of the local community.","这项调查试图了解当地社区的情绪动向。","take the pulse of","https://www.merriam-webster.com/dictionary/pulse"],
   ["throb","跳动；有节奏地振动","v.",["跳动","有节奏地振动"],["pulse-throb","beat-pulse"],"Music pulsed through the open windows.","音乐有节奏地从敞开的窗户里传出。",null,"https://www.merriam-webster.com/dictionary/pulse"],
   ["legume","豆类的干种子","n.",["豆类的干种子","豆类"],["pulse-legume"],"Lentils and other pulses are stored in labelled jars.","小扁豆和其他干豆类存放在贴有标签的罐子里。","pulses","https://www.merriam-webster.com/dictionary/pulse"],
   ["modulate","使脉冲式工作；用脉冲调制","v.",["使脉冲式工作","用脉冲调制","用脉冲调制","使跳动"],["pulse-modulate"],"The controller pulses the beam to reduce heating.","控制器使光束以脉冲方式工作，以减少发热。",null,"https://www.merriam-webster.com/dictionary/pulse"]
  ],[]);
  entry("artery",[
   ["vessel","动脉","n.",["动脉"],["artery-vessel"],"The diagram shows the main artery supplying the leg.","图示展示了向腿部供血的主要动脉。",null,"https://www.merriam-webster.com/dictionary/artery"],
   ["route","干线；交通要道","n.",["干线","交通要道","干道","要道"],["artery-route"],"The river remains an important artery for trade.","这条河仍是一条重要的贸易交通干线。",null,"https://www.merriam-webster.com/dictionary/artery"]
  ],[]);
  entry("toe",[
   ["body","脚趾","n.",["脚趾","足趾"],["toe-body"],"She hurt her toe on the edge of the step.","她的脚趾撞到了台阶边缘。",null,"https://www.merriam-webster.com/dictionary/toe"],
   ["shoe","鞋头；袜尖","n.",["鞋头","袜尖","趾部"],["toe-shoe"],"The toe of his sock had a small hole.","他的袜尖上有一个小洞。",null,"https://www.merriam-webster.com/dictionary/toe"]
  ],[{"terms":["以趾踏触","用脚尖走","动脚尖"],"decision":"scope-excluded","reason":"用趾触碰、脚尖行走及斜钉固定属于动词范围，本批采用脚趾与鞋袜前部名词。","source":"https://www.merriam-webster.com/dictionary/toe"}]);
  entry("muscular",[
   ["muscles","肌肉的","adj.",["肌肉的","肌的"],["muscular-muscles"],"The test measured muscular activity in the forearm.","测试测量了前臂的肌肉活动。",null,"https://www.merriam-webster.com/dictionary/muscular"],
   ["strong","肌肉发达的；强壮的","adj.",["肌肉发达的","强壮的","有力的"],["muscular-strong","17-capacity"],"A muscular swimmer pulled the boat towards the shore.","一位强壮的游泳者把船拉向岸边。",null,"https://www.merriam-webster.com/dictionary/muscular"],
   ["forceful","强有力的；刚健的","adj.",["强有力的","刚健的"],["muscular-forceful"],"The review praised the writer's muscular prose.","评论赞扬了这位作家刚健有力的散文。",null,"https://www.merriam-webster.com/dictionary/muscular"]
  ],[]);
  entry("sight",[
   ["vision","视力；视觉","n.",["视力","视觉"],["sight-vision","17-vision","vision-sight"],"The treatment helped preserve her sight.","治疗帮助保住了她的视力。",null,"https://www.merriam-webster.com/dictionary/sight"],
   ["scene","景象；所见之物","n.",["景象","所见之物","景观"],["sight-scene"],"The snow-covered valley was a beautiful sight.","白雪覆盖的山谷是一幅美丽的景象。",null,"https://www.merriam-webster.com/dictionary/sight"],
   ["range","视野；看得见的范围","n.",["视野","看得见的范围","眼界"],["sight-range"],"The boat remained in sight until it passed the headland.","小船一直在视野中，直到驶过岬角。","in/out of sight","https://www.merriam-webster.com/dictionary/sight"],
   ["attractions","名胜；值得看的地方（复数）","n.",["名胜","值得看的地方（复数）"],["sight-attractions"],"We spent the afternoon seeing the sights of the old town.","我们用一下午游览了古镇的名胜。","the sights","https://www.merriam-webster.com/dictionary/sight"],
   ["spot","看到；发现","v.",["看到","发现","看见"],["sight-spot"],"The crew sighted land just after dawn.","船员在黎明后不久看到了陆地。",null,"https://www.merriam-webster.com/dictionary/sight"],
   ["aiming","瞄准器","n.",["瞄准器","瞄准"],["sight-aiming"],"The camera's sight helped her line up the distant marker.","相机的瞄准装置帮助她对准远处的标志。",null,"https://www.merriam-webster.com/dictionary/sight"]
  ],[{"terms":["阅读","见解","意见","观看","即席的","见票即付的"],"decision":"scope-excluded","reason":"阅读、即席和见票即付须 sight-reading、at sight 等固定搭配；普通视觉、景象与发现不泛化为意见或支付条件。","source":"https://www.merriam-webster.com/dictionary/sight"}]);
  entry("eyesight",[
   ["vision","视力","n.",["视力","目力"],["eyesight-vision","17-vision","vision-sight"],"His eyesight is good enough to read without glasses.","他的视力很好，不戴眼镜也能阅读。",null,"https://www.merriam-webster.com/dictionary/eyesight"]
  ],[]);
  entry("doze",[
   ["sleep","打瞌睡；小睡","v.",["打瞌睡","小睡","假寐","打瞌睡度过"],["doze-sleep","17-asleep"],"He dozed in the chair while the rain tapped on the window.","雨点敲打窗户时，他坐在椅子上打盹。",null,"https://www.merriam-webster.com/dictionary/doze"],
   ["nap","小睡；瞌睡","n.",["小睡","瞌睡"],["doze-nap","17-asleep"],"A short doze left her feeling refreshed.","小睡一会儿后，她感到精神恢复了。",null,"https://www.merriam-webster.com/dictionary/doze"]
  ],[]);
  entry("cripple",[
   ["disable","严重损坏；使瘫痪","v.",["严重损坏","使瘫痪","削弱"],["cripple-disable","disable-incapacitate"],"The power failure crippled the city's transport system.","停电使这座城市的交通系统陷入瘫痪。",null,"https://www.merriam-webster.com/dictionary/cripple"]
  ],[{"terms":["跛者","残废","使跛","使成残废","跛的","残废的"],"decision":"scope-excluded","reason":"用于人的名词、形容词及身体损伤动词被词典标为过时或冒犯，本批不作普通称谓训练，只采用严重损害系统效能的动词义。","source":"https://www.merriam-webster.com/dictionary/cripple"}]);
  entry("awake",[
   ["not-asleep","醒着的","adj.",["醒着的"],["awake-not-asleep"],"The baby was still awake when we returned.","我们回来时，婴儿仍然醒着。",null,"https://www.merriam-webster.com/dictionary/awake"],
   ["wake","醒来；唤醒","v.",["醒来","唤醒"],["awake-wake"],"She awoke to the sound of rain on the roof.","她在雨打屋顶的声音中醒来。",null,"https://www.merriam-webster.com/dictionary/awake"],
   ["realise","意识到；使觉察","v.",["意识到","使觉察","使意识到"],["awake-realise"],"The team awoke to the need for a better plan.","团队开始意识到需要一个更好的计划。","awake to","https://www.merriam-webster.com/dictionary/awake"]
  ],[{"terms":["唤起","被唤起"],"decision":"scope-excluded","reason":"唤起情绪或重新活跃属扩展；本批醒着、醒来及 awake to 觉察分别训练，不把一切唤起直接等同醒来。","source":"https://www.merriam-webster.com/dictionary/awake"}]);
  entry("up-to-date",[
   ["current","最新的；包含最新信息的","adj.",["最新的","包含最新信息的","直到现在的","最近的"],["up-to-date-current"],"The guide contains up-to-date information about local transport.","这本指南包含当地交通的最新信息。",null,"https://www.merriam-webster.com/dictionary/up-to-date"],
   ["modern","跟上时代的；采用新方法的","adj.",["跟上时代的","采用新方法的","现代化的"],["up-to-date-modern"],"The workshop keeps technicians up-to-date with new equipment.","工作坊让技术员了解最新设备。","up-to-date with","https://www.merriam-webster.com/dictionary/up-to-date"]
  ],[]);
 }
 if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch17=register;
})(typeof window==='object'?window:globalThis);
