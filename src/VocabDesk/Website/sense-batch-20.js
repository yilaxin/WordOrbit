/* Batch 20: reviewed public learning scope, original bilingual examples.
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
  entry("mist",[
   ["sense-1","薄雾；水汽","n.",["薄雾","水汽"],["mist-1","20-related-mist-misty-smoggy"],"A thin mist hung above the canal at sunrise.","日出时，运河上方笼罩着一层薄雾。",null,"https://www.merriam-webster.com/dictionary/mist"],
   ["sense-2","蒙上水汽；变模糊","v.",["蒙上水汽","变模糊"],["mist-2","20-related-mist-misty-smoggy"],"The bathroom mirror misted over during the shower.","淋浴时，浴室镜子蒙上了水汽。","mist over","https://www.merriam-webster.com/dictionary/mist"],
   ["sense-3","喷洒细雾","v.",["喷洒细雾"],["mist-3","20-related-mist-misty-smoggy"],"Mist the seedlings with water before moving the tray.","移动托盘前，给幼苗喷些水雾。",null,"https://www.merriam-webster.com/dictionary/mist"]
  ],[{"terms":["雾","迷蒙","朦胧不清","使模糊","使蒙上雾","下雾"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mist","reason":"本批 mist 按所列词性与构式训练：薄雾；水汽（n.）、蒙上水汽；变模糊（v.）、喷洒细雾（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("misty",[
   ["sense-1","有雾的","adj.",["有雾的"],["misty-1","20-related-mist-misty-smoggy","vague-unclear","vague-uncertain","obscure-1","hide-from-view","hide-information","obscure-2"],"The ferry disappeared into the misty bay.","渡船消失在雾蒙蒙的海湾中。",null,"https://www.merriam-webster.com/dictionary/misty"],
   ["sense-2","模糊不清的","adj.",["模糊不清的"],["misty-2","20-related-mist-misty-smoggy","vague-unclear","vague-uncertain","obscure-1","hide-from-view","hide-information","obscure-2"],"She has only a misty memory of that journey.","她对那次旅程只有模糊的记忆。",null,"https://www.merriam-webster.com/dictionary/misty"]
  ],[{"terms":["模糊的","笼罩着雾的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/misty","reason":"本批 misty 按所列词性与构式训练：有雾的（adj.）、模糊不清的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("smoggy",[
   ["sense-1","烟雾弥漫的","adj.",["烟雾弥漫的"],["smoggy-1","20-related-mist-misty-smoggy","smog-1"],"The photograph shows a smoggy skyline above the factories.","照片展示了工厂上方烟雾弥漫的天际线。",null,"https://www.merriam-webster.com/dictionary/smoggy"]
  ],[]);
  entry("quake",[
   ["sense-1","震动；颤抖","v.",["震动","颤抖"],["quake-1","earthquake-1","vibrate-1","18-near-vibrate-sway"],"The windows quaked as the heavy trucks passed.","重型卡车驶过时，窗户震动起来。",null,"https://www.merriam-webster.com/dictionary/quake"],
   ["sense-2","地震；震动","n.",["地震","震动"],["quake-2","earthquake-1","vibrate-1","18-near-vibrate-sway"],"The quake interrupted the railway service.","地震中断了铁路运输。",null,"https://www.merriam-webster.com/dictionary/quake"]
  ],[]);
  entry("seismic",[
   ["sense-1","地震的；地震引起的","adj.",["地震的","地震引起的"],["seismic-1","earthquake-1"],"The station records seismic activity beneath the island.","观测站记录岛下的地震活动。",null,"https://www.merriam-webster.com/dictionary/seismic"],
   ["sense-2","影响巨大的","adj.",["影响巨大的"],["seismic-2","earthquake-1"],"The discovery caused a seismic shift in scientific thinking.","这个发现使科学思想发生了巨大转变。",null,"https://www.merriam-webster.com/dictionary/seismic"]
  ],[]);
  entry("avalanche",[
   ["sense-1","雪崩；山体崩落","n.",["雪崩","山体崩落"],["avalanche-1"],"The avalanche buried the narrow mountain road.","雪崩掩埋了狭窄的山路。",null,"https://www.merriam-webster.com/dictionary/avalanche"],
   ["sense-2","大量涌来之物","n.",["大量涌来之物"],["avalanche-2"],"The office received an avalanche of applications.","办公室收到了大量涌来的申请。",null,"https://www.merriam-webster.com/dictionary/avalanche"]
  ],[{"terms":["山崩","大量","崩塌","大量涌至"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/avalanche","reason":"本批 avalanche 按所列词性与构式训练：雪崩；山体崩落（n.）、大量涌来之物（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("terrain",[
   ["sense-1","地形；地势","n.",["地形","地势"],["terrain-1","agricultural-land","sports-ground","subject-area","practical-outdoor-work","physical-force-field","database-field","competitor-set","handle-questions","enter-competition","ball-fielding","mineral-deposit-area","visual-observation-area","military-operational-area","design-background","athletics-field-events"],"The vehicle was designed for rocky terrain.","这种车辆是为多岩石地形设计的。",null,"https://www.merriam-webster.com/dictionary/terrain"],
   ["sense-2","领域；范围","n.",["领域","范围"],["terrain-2","agricultural-land","sports-ground","subject-area","practical-outdoor-work","physical-force-field","database-field","competitor-set","handle-questions","enter-competition","ball-fielding","mineral-deposit-area","visual-observation-area","military-operational-area","design-background","athletics-field-events"],"The essay moves into unfamiliar theoretical terrain.","文章进入了陌生的理论领域。",null,"https://www.merriam-webster.com/dictionary/terrain"]
  ],[{"terms":["地带","地区"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/terrain","reason":"本批 terrain 按所列词性与构式训练：地形；地势（n.）、领域；范围（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("swamp",[
   ["sense-1","沼泽","n.",["沼泽"],["swamp-1"],"Tall trees grow in the shallow swamp.","高大的树木生长在浅沼泽中。",null,"https://www.merriam-webster.com/dictionary/swamp"],
   ["sense-2","淹没","v.",["淹没"],["swamp-2"],"The waves swamped the small rowing boat.","海浪淹没了那艘小划艇。",null,"https://www.merriam-webster.com/dictionary/swamp"],
   ["sense-3","使应接不暇","v.",["使应接不暇"],["swamp-3"],"The support team was swamped with requests.","大量请求使支持团队应接不暇。","be swamped with","https://www.merriam-webster.com/dictionary/swamp"]
  ],[{"terms":["进退两难的困境","击溃","清除","使陷于沼泽","陷于沼泽"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/swamp","reason":"本批 swamp 按所列词性与构式训练：沼泽（n.）、淹没（v.）、使应接不暇（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("landscape",[
   ["sense-1","风景；地貌","n.",["风景","地貌"],["landscape-1","scene-1","location-place","website","construction-site","choose-location","scene-2","scene-3","scene-4","scene-5","portrait-1","portrait-2"],"The coastal landscape changes after each winter storm.","每次冬季风暴过后，海岸地貌都会改变。",null,"https://www.merriam-webster.com/dictionary/landscape"],
   ["sense-2","风景画","n.",["风景画"],["landscape-2","scene-1","location-place","website","construction-site","choose-location","scene-2","scene-3","scene-4","scene-5","portrait-1","portrait-2"],"The museum acquired a landscape painted in oils.","博物馆购入了一幅油彩风景画。",null,"https://www.merriam-webster.com/dictionary/landscape"],
   ["sense-3","局面；活动领域","n.",["局面","活动领域"],["landscape-3","scene-1","location-place","website","construction-site","choose-location","scene-2","scene-3","scene-4","scene-5","portrait-1","portrait-2"],"The report examines the changing media landscape.","报告考察了不断变化的媒体格局。",null,"https://www.merriam-webster.com/dictionary/landscape"],
   ["sense-4","美化景观","v.",["美化景观"],["landscape-4","scene-1","location-place","website","construction-site","choose-location","scene-2","scene-3","scene-4","scene-5","portrait-1","portrait-2"],"Volunteers landscaped the space around the library.","志愿者美化了图书馆周围的环境。",null,"https://www.merriam-webster.com/dictionary/landscape"],
   ["sense-5","横向的；横版的","adj.",["横向的","横版的"],["landscape-5","scene-1","location-place","website","construction-site","choose-location","scene-2","scene-3","scene-4","scene-5","portrait-1","portrait-2"],"Choose landscape orientation for the wide table.","为这张宽表选择横向页面格式。",null,"https://www.merriam-webster.com/dictionary/landscape"]
  ],[{"terms":["山水","从事景观美化","美化...景观","横向"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/landscape","reason":"本批 landscape 按所列词性与构式训练：风景；地貌（n.）、风景画（n.）、局面；活动领域（n.）、美化景观（v.）、横向的；横版的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("delta",[
   ["sense-1","河口三角洲","n.",["河口三角洲"],["delta-1"],"The river delta contains many shallow channels.","河口三角洲内有许多浅水道。",null,"https://www.merriam-webster.com/dictionary/delta"],
   ["sense-2","希腊字母第四个字母","n.",["希腊字母第四个字母"],["delta-2"],"The symbol delta appears beside the equation.","希腊字母德尔塔符号出现在方程旁。",null,"https://www.merriam-webster.com/dictionary/delta"]
  ],[{"terms":["三角洲","希腊字母的第四个字","δ(希腊文的第四个字母)","丁种","三角","三角形区"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/delta","reason":"本批 delta 按所列词性与构式训练：河口三角洲（n.）、希腊字母第四个字母（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("continent",[
   ["sense-1","洲；大陆","n.",["洲","大陆"],["continent-1"],"The map compares rainfall across the continent.","地图比较了整个大陆的降雨量。",null,"https://www.merriam-webster.com/dictionary/continent"]
  ],[{"terms":["自制的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/continent","reason":"本批 continent 按所列词性与构式训练：洲；大陆（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cave",[
   ["sense-1","洞穴","n.",["洞穴"],["cave-1","produce-useful-output","investment-return","relinquish-control","traffic-priority","give-under-pressure"],"The cave entrance was hidden behind hanging roots.","洞穴入口藏在垂下的树根后面。",null,"https://www.merriam-webster.com/dictionary/cave"],
   ["sense-2","塌陷","v.",["塌陷"],["cave-2","produce-useful-output","investment-return","relinquish-control","traffic-priority","give-under-pressure"],"The old tunnel roof caved in after the rain.","雨后，旧隧道顶部塌陷了。","cave in","https://www.merriam-webster.com/dictionary/cave"],
   ["sense-3","屈服；让步","v.",["屈服","让步"],["cave-3","produce-useful-output","investment-return","relinquish-control","traffic-priority","give-under-pressure"],"The committee refused to cave in to pressure.","委员会拒绝向压力让步。","cave in to","https://www.merriam-webster.com/dictionary/cave"]
  ],[{"terms":["洞","穴","凹陷","塌落","挖洞","使凹陷","损坏...的基础"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cave","reason":"本批 cave 按所列词性与构式训练：洞穴（n.）、塌陷（v.）、屈服；让步（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mosquito",[
   ["sense-1","蚊子","n.",["蚊子"],["mosquito-1"],"A mosquito buzzed near the lamp.","一只蚊子在灯旁嗡嗡飞着。",null,"https://www.merriam-webster.com/dictionary/mosquito"]
  ],[{"terms":["蚊"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mosquito","reason":"本批 mosquito 按所列词性与构式训练：蚊子（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("camel",[
   ["sense-1","骆驼","n.",["骆驼"],["camel-1"],"The camel carried supplies across the dry plain.","骆驼驮着物资穿过干旱平原。",null,"https://www.merriam-webster.com/dictionary/camel"],
   ["sense-2","驼色；浅黄褐色","n.",["驼色","浅黄褐色"],["camel-2"],"She chose camel for the colour of the new coat.","她为新外套选择了驼色。",null,"https://www.merriam-webster.com/dictionary/camel"]
  ],[{"terms":["打捞浮筒"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/camel","reason":"本批 camel 按所列词性与构式训练：骆驼（n.）、驼色；浅黄褐色（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("offspring",[
   ["sense-1","后代；子女","n.",["后代","子女"],["offspring-1","later-family-generation","later-derived-form"],"The birds feed their offspring throughout the day.","鸟儿整天喂养后代。",null,"https://www.merriam-webster.com/dictionary/offspring"],
   ["sense-2","产物；成果","n.",["产物","成果"],["offspring-2","later-family-generation","later-derived-form"],"The new journal is the offspring of a university partnership.","这份新期刊是大学合作的成果。",null,"https://www.merriam-webster.com/dictionary/offspring"]
  ],[{"terms":["子孙","后辈","后裔"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/offspring","reason":"本批 offspring 按所列词性与构式训练：后代；子女（n.）、产物；成果（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("ancient",[
   ["sense-1","古代的","adj.",["古代的"],["ancient-1","antique-1","antique-2"],"The team uncovered an ancient stone bridge.","团队发掘出一座古代石桥。",null,"https://www.merriam-webster.com/dictionary/ancient"],
   ["sense-2","古老的；存在已久的","adj.",["古老的","存在已久的"],["ancient-2","antique-1","antique-2"],"An ancient oak shaded the farmhouse.","一棵古老的橡树为农舍遮阴。",null,"https://www.merriam-webster.com/dictionary/ancient"]
  ],[{"terms":["年老的","旧的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ancient","reason":"本批 ancient 按所列词性与构式训练：古代的（adj.）、古老的；存在已久的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mating",[
   ["sense-1","交配","n.（动名词）",["交配"],["mating-1","interbreed-1"],"The researchers observed mating among the seabirds.","研究人员观察了海鸟的交配行为。",null,"https://www.merriam-webster.com/dictionary/mate"],
   ["sense-2","部件配合；接合","n.（动名词）",["部件配合","接合"],["mating-2","interbreed-1"],"The mating of the two connectors requires careful alignment.","两个连接器的接合需要仔细对准。",null,"https://www.merriam-webster.com/dictionary/mate"]
  ],[{"terms":["配套"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mate","reason":"以 mate 的交配与接合动词核对 mating 的动名词用法，不把原词误作 mate 的其他人称名词。本批 mating 按所列词性与构式训练：交配（n.（动名词））、部件配合；接合（n.（动名词））。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("curl",[
   ["sense-1","卷发；卷曲物","n.",["卷发","卷曲物"],["curl-1","twist-turn","twist-sprain","twist-distort","twist-bend","twist-surprise"],"A loose curl fell across her forehead.","一绺散开的卷发垂在她的额前。",null,"https://www.merriam-webster.com/dictionary/curl"],
   ["sense-2","使卷曲；卷起","v.",["使卷曲","卷起"],["curl-2","twist-turn","twist-sprain","twist-distort","twist-bend","twist-surprise"],"The edges of the paper curled in the heat.","纸张边缘在高温下卷了起来。",null,"https://www.merriam-webster.com/dictionary/curl"],
   ["sense-3","盘绕移动","v.",["盘绕移动"],["curl-3","twist-turn","twist-sprain","twist-distort","twist-bend","twist-surprise"],"Smoke curled slowly above the chimney.","烟在烟囱上方缓缓盘旋上升。",null,"https://www.merriam-webster.com/dictionary/curl"]
  ],[{"terms":["拳曲","鬈发","弄卷","弯曲"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/curl","reason":"本批 curl 按所列词性与构式训练：卷发；卷曲物（n.）、使卷曲；卷起（v.）、盘绕移动（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("claw",[
   ["sense-1","爪；螯","n.",["爪","螯"],["claw-1","scratch-itch","scratch-mark","scratch-scrape","scratch-cancel"],"The crab raised one claw above the sand.","螃蟹把一只螯举到沙面上方。",null,"https://www.merriam-webster.com/dictionary/claw"],
   ["sense-2","抓挠；用力抓出","v.",["抓挠","用力抓出"],["claw-2","scratch-itch","scratch-mark","scratch-scrape","scratch-cancel"],"The cat clawed at the torn curtain.","猫抓挠着破窗帘。",null,"https://www.merriam-webster.com/dictionary/claw"]
  ],[{"terms":["抓伤","用爪抓","挖","搜刮"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/claw","reason":"本批 claw 按所列词性与构式训练：爪；螯（n.）、抓挠；用力抓出（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("worm",[
   ["sense-1","蠕虫；虫","n.",["蠕虫","虫"],["worm-1"],"A worm moved through the damp soil.","一条蠕虫在潮湿的土壤中蠕动。",null,"https://www.merriam-webster.com/dictionary/worm"],
   ["sense-2","计算机蠕虫程序","n.",["计算机蠕虫程序"],["worm-2"],"The network filter detected a worm in the downloaded file.","网络过滤器在下载的文件中检测到了蠕虫程序。",null,"https://www.merriam-webster.com/dictionary/worm"],
   ["sense-3","蠕动着穿行","v.",["蠕动着穿行"],["worm-3"],"He wormed his way through the narrow opening.","他扭动身体穿过狭窄的开口。","worm one's way","https://www.merriam-webster.com/dictionary/worm"]
  ],[{"terms":["小人物","螺纹","蜗杆","蠕行","慢慢前进","使蠕行","慢慢地走","除虫","蠕虫病毒"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/worm","reason":"本批 worm 按所列词性与构式训练：蠕虫；虫（n.）、计算机蠕虫程序（n.）、蠕动着穿行（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("whale",[
   ["sense-1","鲸","n.",["鲸"],["whale-1"],"The whale surfaced beside the research vessel.","鲸在考察船旁浮出了水面。",null,"https://www.merriam-webster.com/dictionary/whale"]
  ],[{"terms":["捕鲸","使惨败","猛揍"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/whale","reason":"本批 whale 按所列词性与构式训练：鲸（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("parasite",[
   ["sense-1","寄生生物","n.",["寄生生物"],["parasite-1"],"The parasite depends on a host for food.","这种寄生生物依靠宿主获得食物。",null,"https://www.merriam-webster.com/dictionary/parasite"],
   ["sense-2","依附他人而不付出者（贬义）","n.",["依附他人而不付出者（贬义）"],["parasite-2"],"The character is portrayed as a parasite living on his relatives.","这个人物被描写成一个靠亲戚生活而不付出的人。",null,"https://www.merriam-webster.com/dictionary/parasite"]
  ],[{"terms":["寄生虫","食客","寄生物","寄生胎"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/parasite","reason":"本批 parasite 按所列词性与构式训练：寄生生物（n.）、依附他人而不付出者（贬义）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("spider",[
   ["sense-1","蜘蛛","n.",["蜘蛛"],["spider-1"],"A spider spun a web between the flowerpots.","一只蜘蛛在花盆之间结了网。",null,"https://www.merriam-webster.com/dictionary/spider"]
  ],[{"terms":["设圈套者","星形轮"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/spider","reason":"本批 spider 按所列词性与构式训练：蜘蛛（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("butterfly",[
   ["sense-1","蝴蝶","n.",["蝴蝶"],["butterfly-1"],"A yellow butterfly settled on the lavender.","一只黄色蝴蝶停在薰衣草上。",null,"https://www.merriam-webster.com/dictionary/butterfly"],
   ["sense-2","蝶泳","n.",["蝶泳"],["butterfly-2"],"She practised butterfly in the outer swimming lane.","她在外侧泳道练习蝶泳。",null,"https://www.merriam-webster.com/dictionary/butterfly"],
   ["sense-3","紧张不安的感觉（常用复数）","n.",["紧张不安的感觉（常用复数）"],["butterfly-3"],"He had butterflies before his first presentation.","第一次演讲前，他紧张得心里发慌。","have butterflies","https://www.merriam-webster.com/dictionary/butterfly"]
  ],[{"terms":["蝶式棉块","翼形皮癣","纸蝶"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/butterfly","reason":"本批 butterfly 按所列词性与构式训练：蝴蝶（n.）、蝶泳（n.）、紧张不安的感觉（常用复数）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("impetus",[
   ["sense-1","推动力；刺激因素","n.",["推动力","刺激因素"],["impetus-1","20-related-impetus-incentive-inspire-motivate","encourage-activity","physiological-stimulus"],"The award gave fresh impetus to the project.","这个奖项给项目带来了新的推动力。",null,"https://www.merriam-webster.com/dictionary/impetus"]
  ],[{"terms":["动力","动量","冲动","动能","起始(病)"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/impetus","reason":"本批 impetus 按所列词性与构式训练：推动力；刺激因素（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("inspire",[
   ["sense-1","激励；鼓舞","v.",["激励","鼓舞"],["inspire-1","20-related-impetus-incentive-inspire-motivate","encourage-inspire","encourage-promote","stimulate-1"],"Her example inspired the younger volunteers.","她的榜样激励了年轻志愿者。",null,"https://www.merriam-webster.com/dictionary/inspire"],
   ["sense-2","赋予创作灵感","v.",["赋予创作灵感"],["inspire-2","20-related-impetus-incentive-inspire-motivate","encourage-inspire","encourage-promote","stimulate-1"],"The old harbour inspired several of his paintings.","老港口给他的几幅画提供了灵感。",null,"https://www.merriam-webster.com/dictionary/inspire"],
   ["sense-3","引起某种感受","v.",["引起某种感受"],["inspire-3","20-related-impetus-incentive-inspire-motivate","encourage-inspire","encourage-promote","stimulate-1"],"The clear explanation inspired confidence in the plan.","清楚的解释让人对计划产生了信心。",null,"https://www.merriam-webster.com/dictionary/inspire"]
  ],[{"terms":["启发","赋予灵感","激起","引起","吸气"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/inspire","reason":"本批 inspire 按所列词性与构式训练：激励；鼓舞（v.）、赋予创作灵感（v.）、引起某种感受（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("motivate",[
   ["sense-1","激发行动意愿","v.",["激发行动意愿"],["motivate-1","20-related-impetus-incentive-inspire-motivate","stimulate-1","encourage-inspire","encourage-promote"],"The coach motivated the team to practise regularly.","教练激励队员定期训练。",null,"https://www.merriam-webster.com/dictionary/motivate"],
   ["sense-2","成为行为的动机","v.",["成为行为的动机"],["motivate-2","20-related-impetus-incentive-inspire-motivate","stimulate-1","encourage-inspire","encourage-promote"],"Curiosity motivated her decision to study astronomy.","好奇心促使她决定学习天文学。",null,"https://www.merriam-webster.com/dictionary/motivate"]
  ],[{"terms":["给与动机","刺激","提高...的学习欲望","促动","激发","激励"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/motivate","reason":"本批 motivate 按所列词性与构式训练：激发行动意愿（v.）、成为行为的动机（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("idiot",[
   ["sense-1","蠢人（侮辱性称呼）","n.",["蠢人（侮辱性称呼）"],["idiot-1","fool-person","lack-wisdom","fool-trick","fool-jester"],"The teacher told them not to call anyone an idiot.","老师告诉他们不要称任何人为蠢货。",null,"https://www.merriam-webster.com/dictionary/idiot"]
  ],[{"terms":["白痴","极蠢之人","白痴者","痴子"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/idiot","reason":"保留对蠢人的侮辱性称呼供理解语境；历史上用于智力障碍的旧称现带冒犯性，不作为医学或普通人称教学。本批 idiot 按所列词性与构式训练：蠢人（侮辱性称呼）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("wisdom",[
   ["sense-1","智慧；明智判断","n.",["智慧","明智判断"],["wisdom-1"],"Her wisdom helped the group avoid a costly mistake.","她的明智判断帮助团队避免了代价高昂的错误。",null,"https://www.merriam-webster.com/dictionary/wisdom"],
   ["sense-2","普遍接受的看法","n.",["普遍接受的看法"],["wisdom-2"],"The findings challenge the conventional wisdom about the area.","这些发现挑战了人们对这个地区的普遍看法。","conventional wisdom","https://www.merriam-webster.com/dictionary/wisdom"]
  ],[{"terms":["明智行为","学识","名言","贤人"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/wisdom","reason":"本批 wisdom 按所列词性与构式训练：智慧；明智判断（n.）、普遍接受的看法（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("aptitude",[
   ["sense-1","天资；学习能力","n.",["天资","学习能力"],["aptitude-1"],"The child showed an aptitude for recognising patterns.","这个孩子表现出识别规律的天资。","aptitude for","https://www.merriam-webster.com/dictionary/aptitude"]
  ],[{"terms":["资质","才能","自然倾向"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/aptitude","reason":"本批 aptitude 按所列词性与构式训练：天资；学习能力（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("clever",[
   ["sense-1","聪明的；机灵的","adj.",["聪明的","机灵的"],["clever-1","capacity-to-understand","information-responsive-technology","smart-quick-learning","smart-shrewd-resourceful","smart-stylish-elegant","smart-sting-pain"],"The clever student found a shorter solution.","聪明的学生找到了一种更简捷的解法。",null,"https://www.merriam-webster.com/dictionary/clever"],
   ["sense-2","巧妙的","adj.",["巧妙的"],["clever-2","capacity-to-understand","information-responsive-technology","smart-quick-learning","smart-shrewd-resourceful","smart-stylish-elegant","smart-sting-pain"],"A clever mechanism keeps the lid open.","一个巧妙的装置使盖子保持打开。",null,"https://www.merriam-webster.com/dictionary/clever"]
  ],[{"terms":["精明的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/clever","reason":"本批 clever 按所列词性与构式训练：聪明的；机灵的（adj.）、巧妙的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("capable",[
   ["sense-1","有能力做某事的","adj.",["有能力做某事的"],["capable-1"],"The robot is capable of sorting small objects.","这个机器人能够对小物件分类。","capable of","https://www.merriam-webster.com/dictionary/capable"],
   ["sense-2","能干的","adj.",["能干的"],["capable-2"],"A capable organiser managed the entire event.","一位能干的组织者负责了整场活动。",null,"https://www.merriam-webster.com/dictionary/capable"]
  ],[{"terms":["有能力的","能的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/capable","reason":"本批 capable 按所列词性与构式训练：有能力做某事的（adj.）、能干的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("excellent",[
   ["sense-1","极好的；出色的","adj.",["极好的","出色的"],["excellent-1","exceptional-excellence","prominent-noticeable","unsettled-unpaid","marvelous-1","splendid-magnificent","17-shine","splendid-excellent","fantastic-excellent","excellent-quality","fantastic-imaginary","fantastic-unbelievable"],"The telescope produced excellent images of the moon.","这台望远镜拍出了出色的月球图像。",null,"https://www.merriam-webster.com/dictionary/excellent"]
  ],[{"terms":["优良的","杰出的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/excellent","reason":"本批 excellent 按所列词性与构式训练：极好的；出色的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("respect",[
   ["sense-1","尊重；敬意","n.",["尊重","敬意"],["respect-1","respect-admiration","consider-regard-as"],"The guide treated the local traditions with respect.","导游尊重当地传统。",null,"https://www.merriam-webster.com/dictionary/respect"],
   ["sense-2","方面；细节","n.",["方面","细节"],["respect-2","respect-admiration","consider-regard-as"],"The two designs differ in one important respect.","这两种设计在一个重要方面有所不同。","in one respect","https://www.merriam-webster.com/dictionary/respect"],
   ["sense-3","敬重","v.",["敬重"],["respect-3","respect-admiration","consider-regard-as"],"The students respect her honesty.","学生们敬重她的诚实。",null,"https://www.merriam-webster.com/dictionary/respect"],
   ["sense-4","尊重意愿或权利；遵守","v.",["尊重意愿或权利","遵守"],["respect-4","respect-admiration","consider-regard-as"],"The new policy respects each person's privacy.","新政策尊重每个人的隐私。",null,"https://www.merriam-webster.com/dictionary/respect"],
   ["sense-5","问候；敬意的表达（常用复数）","n.",["问候","敬意的表达（常用复数）"],["respect-5","respect-admiration","consider-regard-as"],"Please give my respects to your grandfather.","请代我向你的祖父致意。","respects","https://www.merriam-webster.com/dictionary/respect"]
  ],[{"terms":["尊敬","注意"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/respect","reason":"本批 respect 按所列词性与构式训练：尊重；敬意（n.）、方面；细节（n.）、敬重（v.）、尊重意愿或权利；遵守（v.）、问候；敬意的表达（常用复数）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("painstaking",[
   ["sense-1","细致费力的；煞费苦心的","adj.",["细致费力的","煞费苦心的"],["painstaking-1","caution-careful","thoroughness"],"The restoration required painstaking work on each tile.","修复需要对每块瓷砖进行细致费力的处理。",null,"https://www.merriam-webster.com/dictionary/painstaking"]
  ],[{"terms":["辛苦","苦心","工夫","辛苦的","勤勉的","小心的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/painstaking","reason":"当前以常见的细致费力形容词进入教学，名词苦心等旧译仅参考。本批 painstaking 按所列词性与构式训练：细致费力的；煞费苦心的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("reputation",[
   ["sense-1","名声；声誉","n.",["名声","声誉"],["reputation-1","admired-social-standing"],"The firm has a reputation for reliable service.","这家公司以服务可靠而闻名。","reputation for","https://www.merriam-webster.com/dictionary/reputation"]
  ],[{"terms":["名誉","声望","公认证据"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reputation","reason":"本批 reputation 按所列词性与构式训练：名声；声誉（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("add",[
   ["sense-1","增加；添加","v.",["增加","添加"],["add-1","increase-quantity","increase-amount"],"Add a little warm water to the mixture.","往混合物中加入一点温水。",null,"https://www.merriam-webster.com/dictionary/add"],
   ["sense-2","把数字相加","v.",["把数字相加"],["add-2","increase-quantity","increase-amount"],"Add the two totals to find the final amount.","把两个总数相加，得出最终数量。",null,"https://www.merriam-webster.com/dictionary/add"],
   ["sense-3","补充说道","v.",["补充说道"],["add-3","increase-quantity","increase-amount"],"She added that the dates were still uncertain.","她补充说日期仍未确定。",null,"https://www.merriam-webster.com/dictionary/add"]
  ],[{"terms":["附带说明","计算...总和","做加法","积累而成","增添","加法"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/add","reason":"本批 add 按所列词性与构式训练：增加；添加（v.）、把数字相加（v.）、补充说道（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("assemble",[
   ["sense-1","集合；聚集","v.",["集合","聚集"],["assemble-1","gather-together","hobby-collection","receive-or-raise-payment","pick-up-person-object","regain-composure","recipient-pays-charge"],"The volunteers assembled outside the station.","志愿者在车站外集合。",null,"https://www.merriam-webster.com/dictionary/assemble"],
   ["sense-2","组装","v.",["组装"],["assemble-2","gather-together","hobby-collection","receive-or-raise-payment","pick-up-person-object","regain-composure","recipient-pays-charge"],"The technician assembled the instrument on a clean bench.","技术员在干净的工作台上组装仪器。",null,"https://www.merriam-webster.com/dictionary/assemble"]
  ],[{"terms":["收集","装配","汇编"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/assemble","reason":"本批 assemble 按所列词性与构式训练：集合；聚集（v.）、组装（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("gather",[
   ["sense-1","收集；聚集","v.",["收集","聚集"],["gather-1","gather-together","hobby-collection","receive-or-raise-payment","pick-up-person-object","regain-composure","recipient-pays-charge","reason-from-evidence","gradual-build-up"],"The researchers gathered information from old diaries.","研究人员从旧日记中收集资料。",null,"https://www.merriam-webster.com/dictionary/gather"],
   ["sense-2","逐渐增强","v.",["逐渐增强"],["gather-2","gather-together","hobby-collection","receive-or-raise-payment","pick-up-person-object","regain-composure","recipient-pays-charge","reason-from-evidence","gradual-build-up"],"The campaign gathered momentum during the summer.","这项活动在夏季逐渐形成声势。",null,"https://www.merriam-webster.com/dictionary/gather"],
   ["sense-3","推断；得知","v.",["推断","得知"],["gather-3","gather-together","hobby-collection","receive-or-raise-payment","pick-up-person-object","regain-composure","recipient-pays-charge","reason-from-evidence","gradual-build-up"],"I gather from your letter that the trip went well.","从你的信中我得知旅行很顺利。",null,"https://www.merriam-webster.com/dictionary/gather"]
  ],[{"terms":["集合","渐增","使聚集","搜集","积聚"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/gather","reason":"本批 gather 按所列词性与构式训练：收集；聚集（v.）、逐渐增强（v.）、推断；得知（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("auxiliary",[
   ["sense-1","辅助的；备用的","adj.",["辅助的","备用的"],["auxiliary-1","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer"],"An auxiliary pump takes over during repairs.","维修期间由备用泵接替工作。",null,"https://www.merriam-webster.com/dictionary/auxiliary"],
   ["sense-2","助动词","n.",["助动词"],["auxiliary-2","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer"],"The sentence uses an auxiliary before the main verb.","这个句子在实义动词前使用了一个助动词。",null,"https://www.merriam-webster.com/dictionary/auxiliary"],
   ["sense-3","辅助人员或装置","n.",["辅助人员或装置"],["auxiliary-3","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer"],"The museum trained local auxiliaries to help during the festival.","博物馆培训了当地辅助人员来协助节日期间的工作。",null,"https://www.merriam-webster.com/dictionary/auxiliary"]
  ],[{"terms":["辅助者","辅助物","附属机构"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/auxiliary","reason":"本批 auxiliary 按所列词性与构式训练：辅助的；备用的（adj.）、助动词（n.）、辅助人员或装置（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("versatile",[
   ["sense-1","多才多艺的","adj.",["多才多艺的"],["versatile-1"],"The versatile performer also designs the stage scenery.","这位多才多艺的表演者还设计舞台布景。",null,"https://www.merriam-webster.com/dictionary/versatile"],
   ["sense-2","用途广泛的","adj.",["用途广泛的"],["versatile-2"],"The versatile tool can cut, scrape, and polish.","这种多用途工具可以切割、刮削和抛光。",null,"https://www.merriam-webster.com/dictionary/versatile"]
  ],[{"terms":["万用的","万向的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/versatile","reason":"本批 versatile 按所列词性与构式训练：多才多艺的（adj.）、用途广泛的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bypass",[
   ["sense-1","绕行道路；旁路","n.",["绕行道路","旁路"],["bypass-1"],"The bypass takes heavy traffic away from the village.","绕行道路让重型车辆避开村庄。",null,"https://www.merriam-webster.com/dictionary/bypass"],
   ["sense-2","绕过","v.",["绕过"],["bypass-2"],"The new pipe bypasses the damaged valve.","新管道绕过了损坏的阀门。",null,"https://www.merriam-webster.com/dictionary/bypass"],
   ["sense-3","跳过；有意避开","v.",["跳过","有意避开"],["bypass-3"],"The proposal would bypass the usual review process.","这项提议将跳过通常的审查程序。",null,"https://www.merriam-webster.com/dictionary/bypass"]
  ],[{"terms":["省略","忽视","回避"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bypass","reason":"本批 bypass 按所列词性与构式训练：绕行道路；旁路（n.）、绕过（v.）、跳过；有意避开（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bypath",[
   ["sense-1","偏僻小路","n.",["偏僻小路"],["bypath-1"],"A narrow bypath led from the farm to the river.","一条偏僻小路从农场通向河边。",null,"https://www.merriam-webster.com/dictionary/bypath"]
  ],[{"terms":["小路","侧道"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bypath","reason":"本批 bypath 按所列词性与构式训练：偏僻小路（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("dial",[
   ["sense-1","刻度盘；表盘","n.",["刻度盘","表盘"],["dial-1"],"The dial shows the pressure inside the tank.","刻度盘显示罐内压力。",null,"https://www.merriam-webster.com/dictionary/dial"],
   ["sense-2","拨电话号码","v.",["拨电话号码"],["dial-2"],"She dialled the number printed on the leaflet.","她拨打了传单上印着的号码。",null,"https://www.merriam-webster.com/dictionary/dial"]
  ],[{"terms":["钟面","转盘","拨"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dial","reason":"本批 dial 按所列词性与构式训练：刻度盘；表盘（n.）、拨电话号码（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("laptop",[
   ["sense-1","笔记本电脑","n.",["笔记本电脑"],["laptop-1"],"He opened his laptop on the train.","他在火车上打开了笔记本电脑。",null,"https://www.merriam-webster.com/dictionary/laptop"]
  ],[{"terms":["膝上型的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/laptop","reason":"本批 laptop 按所列词性与构式训练：笔记本电脑（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sensor",[
   ["sense-1","传感器；检测器","n.",["传感器","检测器"],["sensor-1"],"The sensor switches the lamp on when someone enters.","有人进入时，传感器会使灯亮起。",null,"https://www.merriam-webster.com/dictionary/sensor"]
  ],[]);
  entry("multimedia",[
   ["sense-1","多媒体的","adj.",["多媒体的"],["multimedia-1"],"The students prepared a multimedia presentation about rivers.","学生们准备了一场关于河流的多媒体演示。",null,"https://www.merriam-webster.com/dictionary/multimedia"],
   ["sense-2","多媒体技术或内容","n.",["多媒体技术或内容"],["multimedia-2"],"The course combines print materials with multimedia.","这门课把印刷材料与多媒体内容结合起来。",null,"https://www.merriam-webster.com/dictionary/multimedia"]
  ],[{"terms":["多媒体"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/multimedia","reason":"本批 multimedia 按所列词性与构式训练：多媒体的（adj.）、多媒体技术或内容（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sense",[
   ["sense-1","感官；感知能力","n.",["感官","感知能力"],["sense-1","notice-hidden-signs","instrument-detection"],"The owl relies on its sense of hearing.","猫头鹰依靠听觉。",null,"https://www.merriam-webster.com/dictionary/sense"],
   ["sense-2","感觉；意识","n.",["感觉","意识"],["sense-2","notice-hidden-signs","instrument-detection"],"The design creates a sense of openness.","这种设计营造出开阔感。",null,"https://www.merriam-webster.com/dictionary/sense"],
   ["sense-3","理智；合理性","n.",["理智","合理性"],["sense-3","notice-hidden-signs","instrument-detection"],"There is little sense in repeating the same failed method.","重复同一种失败的方法没有什么道理。",null,"https://www.merriam-webster.com/dictionary/sense"],
   ["sense-4","含义；义项","n.",["含义","义项"],["sense-4","notice-hidden-signs","instrument-detection"],"The dictionary gives three senses of the word.","词典列出了这个词的三个义项。",null,"https://www.merriam-webster.com/dictionary/sense"],
   ["sense-5","察觉；检测","v.",["察觉","检测"],["sense-5","notice-hidden-signs","instrument-detection"],"The device senses changes in air pressure.","这个装置检测气压的变化。",null,"https://www.merriam-webster.com/dictionary/sense"]
  ],[{"terms":["感应","观念","情理","知觉","觉察","阅读"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sense","reason":"本批 sense 按所列词性与构式训练：感官；感知能力（n.）、感觉；意识（n.）、理智；合理性（n.）、含义；义项（n.）、察觉；检测（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("spiritual",[
   ["sense-1","精神层面的","adj.",["精神层面的"],["spiritual-1"],"The book explores the spiritual value of time in nature.","这本书探讨了亲近自然的精神价值。",null,"https://www.merriam-webster.com/dictionary/spiritual"],
   ["sense-2","宗教的；宗教信仰方面的","adj.",["宗教的","宗教信仰方面的"],["spiritual-2"],"The building serves as a spiritual centre for the community.","这座建筑是社区的宗教中心。",null,"https://www.merriam-webster.com/dictionary/spiritual"],
   ["sense-3","黑人灵歌","n.",["黑人灵歌"],["spiritual-3"],"The choir performed a traditional spiritual.","合唱团演唱了一首传统黑人灵歌。",null,"https://www.merriam-webster.com/dictionary/spiritual"]
  ],[{"terms":["精神上的","神圣的","崇高的","高尚的","鬼的","招魂术的","有关教会的事"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/spiritual","reason":"本批 spiritual 按所列词性与构式训练：精神层面的（adj.）、宗教的；宗教信仰方面的（adj.）、黑人灵歌（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("knight",[
   ["sense-1","中世纪骑士","n.",["中世纪骑士"],["knight-1"],"The painting shows a knight riding through the gate.","画上描绘了一位骑士骑马穿过城门。",null,"https://www.merriam-webster.com/dictionary/knight"],
   ["sense-2","爵士；获封骑士者","n.",["爵士","获封骑士者"],["knight-2"],"The biography describes his later years as a knight.","传记描述了他获封爵士后的晚年生活。",null,"https://www.merriam-webster.com/dictionary/knight"],
   ["sense-3","国际象棋中的马","n.",["国际象棋中的马"],["knight-3"],"She moved her knight to protect the queen.","她移动马来保护后。",null,"https://www.merriam-webster.com/dictionary/knight"],
   ["sense-4","授予爵士称号","v.",["授予爵士称号"],["knight-4"],"The scientist was knighted for his contribution to research.","这位科学家因对研究的贡献而获封爵士。",null,"https://www.merriam-webster.com/dictionary/knight"]
  ],[{"terms":["骑士","授以爵位"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/knight","reason":"本批 knight 按所列词性与构式训练：中世纪骑士（n.）、爵士；获封骑士者（n.）、国际象棋中的马（n.）、授予爵士称号（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("queen",[
   ["sense-1","女王；女性君主","n.",["女王","女性君主"],["queen-1"],"The queen appears on the old coin.","旧硬币上印着女王的形象。",null,"https://www.merriam-webster.com/dictionary/queen"],
   ["sense-2","王后","n.",["王后"],["queen-2"],"The king and queen attended the opening ceremony.","国王和王后出席了开幕仪式。",null,"https://www.merriam-webster.com/dictionary/queen"],
   ["sense-3","国际象棋中的后","n.",["国际象棋中的后"],["queen-3"],"Her queen controlled the centre of the board.","她的后控制着棋盘中央。",null,"https://www.merriam-webster.com/dictionary/queen"],
   ["sense-4","蜂王；蚁后","n.",["蜂王","蚁后"],["queen-4"],"The worker ants protect the queen.","工蚁保护蚁后。",null,"https://www.merriam-webster.com/dictionary/queen"]
  ],[{"terms":["立为女王","做女王"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/queen","reason":"本批 queen 按所列词性与构式训练：女王；女性君主（n.）、王后（n.）、国际象棋中的后（n.）、蜂王；蚁后（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("thrive",[
   ["sense-1","茁壮成长","v.",["茁壮成长"],["thrive-1","20-related-thrive-flourish","thrive-and-succeed"],"These plants thrive in damp woodland.","这些植物在潮湿的林地中茁壮成长。",null,"https://www.merriam-webster.com/dictionary/thrive"],
   ["sense-2","兴旺；发展良好","v.",["兴旺","发展良好"],["thrive-2","20-related-thrive-flourish","thrive-and-succeed"],"Small businesses thrive near the busy station.","小企业在繁忙车站附近发展良好。",null,"https://www.merriam-webster.com/dictionary/thrive"]
  ],[{"terms":["繁荣","旺盛"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/thrive","reason":"本批 thrive 按所列词性与构式训练：茁壮成长（v.）、兴旺；发展良好（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("gallery",[
   ["sense-1","画廊；美术展馆","n.",["画廊","美术展馆"],["gallery-1","indoor-passage","connecting-land-strip"],"The gallery displays photographs of the coast.","画廊展出海岸照片。",null,"https://www.merriam-webster.com/dictionary/gallery"],
   ["sense-2","剧场楼座；旁听席","n.",["剧场楼座","旁听席"],["gallery-2","indoor-passage","connecting-land-strip"],"We watched the performance from the upper gallery.","我们从上层楼座观看演出。",null,"https://www.merriam-webster.com/dictionary/gallery"],
   ["sense-3","成组展示的图片","n.",["成组展示的图片"],["gallery-3","indoor-passage","connecting-land-strip"],"The website includes a gallery of restored buildings.","网站有一组修复后建筑的图片展示。",null,"https://www.merriam-webster.com/dictionary/gallery"]
  ],[{"terms":["走廊","最高楼座","收集","图库"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/gallery","reason":"本批 gallery 按所列词性与构式训练：画廊；美术展馆（n.）、剧场楼座；旁听席（n.）、成组展示的图片（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("exhibition",[
   ["sense-1","展览；展览会","n.",["展览","展览会"],["exhibition-1"],"The exhibition brings together pottery from several regions.","展览汇集了几个地区的陶器。",null,"https://www.merriam-webster.com/dictionary/exhibition"],
   ["sense-2","某种品质的表现","n.",["某种品质的表现"],["exhibition-2"],"The rescue was an exhibition of remarkable courage.","这次救援表现出了非凡勇气。",null,"https://www.merriam-webster.com/dictionary/exhibition"]
  ],[{"terms":["表现","展览品","投药","展出"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/exhibition","reason":"本批 exhibition 按所列词性与构式训练：展览；展览会（n.）、某种品质的表现（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sculpture",[
   ["sense-1","雕塑艺术","n.",["雕塑艺术"],["sculpture-1"],"She studied sculpture at the local art school.","她在当地艺术学校学习雕塑。",null,"https://www.merriam-webster.com/dictionary/sculpture"],
   ["sense-2","雕塑作品","n.",["雕塑作品"],["sculpture-2"],"A bronze sculpture stands beside the entrance.","入口旁立着一件青铜雕塑作品。",null,"https://www.merriam-webster.com/dictionary/sculpture"],
   ["sense-3","雕刻塑造","v.",["雕刻塑造"],["sculpture-3"],"The river sculptured deep channels in the soft rock.","河流在软岩中雕琢出深深的沟道。",null,"https://www.merriam-webster.com/dictionary/sculpture"]
  ],[{"terms":["雕刻","雕塑","当雕刻师"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sculpture","reason":"本批 sculpture 按所列词性与构式训练：雕塑艺术（n.）、雕塑作品（n.）、雕刻塑造（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("depict",[
   ["sense-1","用图像描绘","v.",["用图像描绘"],["depict-1","20-related-depict-describe","represent-act-for","represent-symbolise","represent-depict","represent-constitute"],"The mural depicts workers building the railway.","壁画描绘了工人修建铁路的场景。",null,"https://www.merriam-webster.com/dictionary/depict"],
   ["sense-2","用文字描述","v.",["用文字描述"],["depict-2","20-related-depict-describe","represent-act-for","represent-symbolise","represent-depict","represent-constitute"],"The novel depicts village life during a harsh winter.","小说描述了严冬中的乡村生活。",null,"https://www.merriam-webster.com/dictionary/depict"]
  ],[{"terms":["描述","描写"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/depict","reason":"本批 depict 按所列词性与构式训练：用图像描绘（v.）、用文字描述（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("describe",[
   ["sense-1","描述；说明","v.",["描述","说明"],["describe-1","20-related-depict-describe","narrate-1","relate-connection","17-related","relate-narrate","relate-understand"],"Please describe the object without naming it.","请描述这个物体，但不要说出它的名称。",null,"https://www.merriam-webster.com/dictionary/describe"],
   ["sense-2","画出或沿着轮廓运动","v.",["画出或沿着轮廓运动"],["describe-2","20-related-depict-describe","narrate-1","relate-connection","17-related","relate-narrate","relate-understand"],"The tip of the arm describes a circle.","机械臂的尖端沿圆形轨迹运动。",null,"https://www.merriam-webster.com/dictionary/describe"]
  ],[{"terms":["描绘","画"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/describe","reason":"本批 describe 按所列词性与构式训练：描述；说明（v.）、画出或沿着轮廓运动（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("drawing",[
   ["sense-1","绘画；制图","n.",["绘画","制图"],["drawing-1","quick-drawing","rough-outline","short-comic-scene","draw-hastily","summarize-briefly"],"The course introduces architectural drawing.","课程介绍建筑制图。",null,"https://www.merriam-webster.com/dictionary/drawing"],
   ["sense-2","图画；素描","n.",["图画","素描"],["drawing-2","quick-drawing","rough-outline","short-comic-scene","draw-hastily","summarize-briefly"],"The drawing shows the bridge before it was repaired.","这幅画展示了桥梁修复前的样子。",null,"https://www.merriam-webster.com/dictionary/drawing"],
   ["sense-3","抽签","n.",["抽签"],["drawing-3","quick-drawing","rough-outline","short-comic-scene","draw-hastily","summarize-briefly"],"The order of performance was decided by a drawing.","演出顺序由抽签决定。",null,"https://www.merriam-webster.com/dictionary/drawing"]
  ],[{"terms":["拉","绘图"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/drawing","reason":"本批 drawing 按所列词性与构式训练：绘画；制图（n.）、图画；素描（n.）、抽签（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("musical",[
   ["sense-1","音乐的","adj.",["音乐的"],["musical-1"],"The library has a collection of musical instruments.","图书馆收藏了一批乐器。",null,"https://www.merriam-webster.com/dictionary/musical"],
   ["sense-2","有音乐天赋的","adj.",["有音乐天赋的"],["musical-2"],"Both children are musical and enjoy singing together.","两个孩子都有音乐天赋，喜欢一起唱歌。",null,"https://www.merriam-webster.com/dictionary/musical"],
   ["sense-3","音乐剧；音乐片","n.",["音乐剧","音乐片"],["musical-3"],"The musical tells the story of a travelling family.","这部音乐剧讲述一个四处旅行的家庭的故事。",null,"https://www.merriam-webster.com/dictionary/musical"],
   ["sense-4","悦耳的","adj.",["悦耳的"],["musical-4"],"A clear, musical laugh came from the garden.","花园里传来一阵清脆悦耳的笑声。",null,"https://www.merriam-webster.com/dictionary/musical"]
  ],[{"terms":["音乐舞台剧","声音美妙的","喜爱音乐的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/musical","reason":"本批 musical 按所列词性与构式训练：音乐的（adj.）、有音乐天赋的（adj.）、音乐剧；音乐片（n.）、悦耳的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("classical",[
   ["sense-1","古希腊罗马的","adj.",["古希腊罗马的"],["classical-1"],"The facade borrows details from classical architecture.","这座建筑的正面借鉴了古希腊罗马建筑的细节。",null,"https://www.merriam-webster.com/dictionary/classical"],
   ["sense-2","古典音乐的","adj.",["古典音乐的"],["classical-2"],"The programme includes classical music for strings.","节目中有弦乐演奏的古典音乐。",null,"https://www.merriam-webster.com/dictionary/classical"],
   ["sense-3","经典物理学的","adj.",["经典物理学的"],["classical-3"],"The lesson compares classical mechanics with quantum theory.","这节课比较经典力学与量子理论。",null,"https://www.merriam-webster.com/dictionary/classical"]
  ],[{"terms":["古典的","正统派的","经典的","标准的","典型的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/classical","reason":"本批 classical 按所列词性与构式训练：古希腊罗马的（adj.）、古典音乐的（adj.）、经典物理学的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("solo",[
   ["sense-1","独奏；独唱；单独表演","n.",["独奏","独唱","单独表演"],["solo-1"],"The violin solo begins after the short introduction.","简短的引子之后开始小提琴独奏。",null,"https://www.merriam-webster.com/dictionary/solo"],
   ["sense-2","单独的；独自进行的","adj.",["单独的","独自进行的"],["solo-2"],"She planned a solo journey across the island.","她计划独自穿越这座岛。",null,"https://www.merriam-webster.com/dictionary/solo"],
   ["sense-3","独自地","adv.",["独自地"],["solo-3"],"He completed the final section solo.","他独自完成了最后一段。",null,"https://www.merriam-webster.com/dictionary/solo"],
   ["sense-4","单独表演或飞行","v.",["单独表演或飞行"],["solo-4"],"The trainee soloed for the first time that morning.","那天早晨，学员首次单独驾驶飞机飞行。",null,"https://www.merriam-webster.com/dictionary/solo"]
  ],[{"terms":["独奏的","独唱的","放单飞"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/solo","reason":"本批 solo 按所列词性与构式训练：独奏；独唱；单独表演（n.）、单独的；独自进行的（adj.）、独自地（adv.）、单独表演或飞行（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("rhythmical",[
   ["sense-1","有节奏的；有韵律的","adj.",["有节奏的","有韵律的"],["rhythmical-1"],"The poem repeats a simple rhythmical pattern.","这首诗重复着一个简单的节奏模式。",null,"https://www.merriam-webster.com/dictionary/rhythmic"]
  ],[{"terms":["节律的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/rhythmic","reason":"本批 rhythmical 按所列词性与构式训练：有节奏的；有韵律的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("competition",[
   ["sense-1","竞争","n.",["竞争"],["competition-1","contest-competition","match-competition","contest-challenge","discontent-opposition","call-into-question","contest-compete","rivalry-competition","opponent-1","competitor","formidable-equal","compete-match","competing-attributive"],"Competition for the research grant was intense.","研究资助的竞争十分激烈。",null,"https://www.merriam-webster.com/dictionary/competition"],
   ["sense-2","竞赛；比赛","n.",["竞赛","比赛"],["competition-2","contest-competition","match-competition","contest-challenge","discontent-opposition","call-into-question","contest-compete","rivalry-competition","opponent-1","competitor","formidable-equal","compete-match","competing-attributive"],"The school held a photography competition.","学校举办了一场摄影比赛。",null,"https://www.merriam-webster.com/dictionary/competition"],
   ["sense-3","竞争对手","n.",["竞争对手"],["competition-3","contest-competition","match-competition","contest-challenge","discontent-opposition","call-into-question","contest-compete","rivalry-competition","opponent-1","competitor","formidable-equal","compete-match","competing-attributive"],"The shop offers longer opening hours than the competition.","这家商店比竞争对手的营业时间更长。",null,"https://www.merriam-webster.com/dictionary/competition"]
  ],[{"terms":["竞销"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/competition","reason":"本批 competition 按所列词性与构式训练：竞争（n.）、竞赛；比赛（n.）、竞争对手（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("ink",[
   ["sense-1","墨水；油墨","n.",["墨水","油墨"],["ink-1","sign-indication","sign-board","sign-symbol","sign-gesture","sign-zodiac","sign-signature","sign-recruit","sign-communicate"],"The printer ran out of blue ink.","打印机的蓝色墨水用完了。",null,"https://www.merriam-webster.com/dictionary/ink"],
   ["sense-2","涂墨；用墨水描画","v.",["涂墨","用墨水描画"],["ink-2","sign-indication","sign-board","sign-symbol","sign-gesture","sign-zodiac","sign-signature","sign-recruit","sign-communicate"],"She inked the outline after finishing the pencil sketch.","完成铅笔草图后，她用墨水描了轮廓。",null,"https://www.merriam-webster.com/dictionary/ink"],
   ["sense-3","签署合同（非正式）","v.",["签署合同（非正式）"],["ink-3","sign-indication","sign-board","sign-symbol","sign-gesture","sign-zodiac","sign-signature","sign-recruit","sign-communicate"],"The publisher inked an agreement with the illustrator.","出版商与插画师签署了一份协议。",null,"https://www.merriam-webster.com/dictionary/ink"]
  ],[{"terms":["墨汁","涂墨水于","签署","加墨水"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ink","reason":"本批 ink 按所列词性与构式训练：墨水；油墨（n.）、涂墨；用墨水描画（v.）、签署合同（非正式）（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("rubber",[
   ["sense-1","橡胶","n.",["橡胶"],["rubber-1"],"The handle is covered with soft rubber.","把手包着柔软的橡胶。",null,"https://www.merriam-webster.com/dictionary/rubber"],
   ["sense-2","橡皮擦（英式）","n.",["橡皮擦（英式）"],["rubber-2"],"Use a rubber to remove the pencil marks.","用橡皮擦去铅笔痕迹。",null,"https://www.merriam-webster.com/dictionary/rubber"],
   ["sense-3","决胜局","n.",["决胜局"],["rubber-3"],"The match went to a final rubber.","比赛进入了最后的决胜局。",null,"https://www.merriam-webster.com/dictionary/rubber"]
  ],[{"terms":["橡皮","做摩擦动作的人","按摩师","决胜盘","用橡胶制造","涂橡胶于"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/rubber","reason":"本批 rubber 按所列词性与构式训练：橡胶（n.）、橡皮擦（英式）（n.）、决胜局（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cover",[
   ["sense-1","覆盖；遮盖","v.",["覆盖","遮盖"],["cover-1","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit"],"Fresh snow covered the garden path.","新雪覆盖了花园小路。",null,"https://www.merriam-webster.com/dictionary/cover"],
   ["sense-2","涵盖；包括","v.",["涵盖","包括"],["cover-2","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit"],"The workshop covers several methods of water testing.","工作坊涵盖几种水质检测方法。",null,"https://www.merriam-webster.com/dictionary/cover"],
   ["sense-3","支付；足以负担","v.",["支付","足以负担"],["cover-3","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit"],"The grant covers the cost of the equipment.","这笔资助足以支付设备费用。",null,"https://www.merriam-webster.com/dictionary/cover"],
   ["sense-4","报道","v.",["报道"],["cover-4","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit"],"The journalist covered the opening of the new museum.","记者报道了新博物馆开馆的消息。",null,"https://www.merriam-webster.com/dictionary/cover"],
   ["sense-5","行进一段距离","v.",["行进一段距离"],["cover-5","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit"],"The walkers covered twelve kilometres before lunch.","步行者在午餐前走了十二公里。",null,"https://www.merriam-webster.com/dictionary/cover"],
   ["sense-6","提供保险保障","v.",["提供保险保障"],["cover-6","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit"],"The policy covers damage caused by storms.","这份保单承保风暴造成的损害。",null,"https://www.merriam-webster.com/dictionary/cover"],
   ["sense-7","盖子；罩","n.",["盖子","罩"],["cover-7","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit"],"Put the protective cover over the machine.","把防护罩罩在机器上。",null,"https://www.merriam-webster.com/dictionary/cover"],
   ["sense-8","书刊封面","n.",["书刊封面"],["cover-8","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit"],"The book has a map on its back cover.","这本书的封底上有一幅地图。",null,"https://www.merriam-webster.com/dictionary/cover"],
   ["sense-9","掩护；遮蔽处","n.",["掩护","遮蔽处"],["cover-9","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit"],"The hikers took cover beneath a rocky overhang.","徒步者躲到一块突出的岩石下避雨。","take cover","https://www.merriam-webster.com/dictionary/cover"],
   ["sense-10","临时代替某人工作","v.",["临时代替某人工作"],["cover-10","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit"],"A colleague covered for her during the conference.","开会期间，一位同事替她值班。","cover for","https://www.merriam-webster.com/dictionary/cover"],
   ["sense-11","翻唱作品","n.",["翻唱作品"],["cover-11","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit"],"The band recorded a cover of an older folk song.","乐队录制了一首老民歌的翻唱版本。",null,"https://www.merriam-webster.com/dictionary/cover"]
  ],[{"terms":["封面","藉口","掩饰","保护"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cover","reason":"本批 cover 按所列词性与构式训练：覆盖；遮盖（v.）、涵盖；包括（v.）、支付；足以负担（v.）、报道（v.）、行进一段距离（v.）、提供保险保障（v.）、盖子；罩（n.）、书刊封面（n.）、掩护；遮蔽处（n.）、临时代替某人工作（v.）、翻唱作品（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("edge",[
   ["sense-1","边缘","n.",["边缘"],["edge-1","margin-page-edge","margin-border-of-surface","geographical-periphery","margin-group-limit","margin-spare-room","margin-score-gap","margin-seller-profit","margin-trading-collateral","margin-add-notes"],"Keep the glass away from the edge of the desk.","把玻璃杯放得离桌沿远一点。",null,"https://www.merriam-webster.com/dictionary/edge"],
   ["sense-2","刀刃","n.",["刀刃"],["edge-2","margin-page-edge","margin-border-of-surface","geographical-periphery","margin-group-limit","margin-spare-room","margin-score-gap","margin-seller-profit","margin-trading-collateral","margin-add-notes"],"The blade has a finely sharpened edge.","这把刀的刃磨得很锋利。",null,"https://www.merriam-webster.com/dictionary/edge"],
   ["sense-3","优势","n.",["优势"],["edge-3","margin-page-edge","margin-border-of-surface","geographical-periphery","margin-group-limit","margin-spare-room","margin-score-gap","margin-seller-profit","margin-trading-collateral","margin-add-notes"],"The lighter design gives the team an edge.","更轻的设计使团队占了优势。",null,"https://www.merriam-webster.com/dictionary/edge"],
   ["sense-4","缓缓移动","v.",["缓缓移动"],["edge-4","margin-page-edge","margin-border-of-surface","geographical-periphery","margin-group-limit","margin-spare-room","margin-score-gap","margin-seller-profit","margin-trading-collateral","margin-add-notes"],"The bus edged forward through the narrow gap.","公交车缓缓向前穿过狭窄的空隙。",null,"https://www.merriam-webster.com/dictionary/edge"]
  ],[{"terms":["尖锐","使锐利","挤进","镶边"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/edge","reason":"本批 edge 按所列词性与构式训练：边缘（n.）、刀刃（n.）、优势（n.）、缓缓移动（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("memorandum",[
   ["sense-1","备忘录；书面通知","n.",["备忘录","书面通知"],["memorandum-1"],"The manager sent a memorandum about the revised schedule.","经理发出了一份关于修改后日程的备忘录。",null,"https://www.merriam-webster.com/dictionary/memorandum"]
  ],[{"terms":["外交备忘录","交易备忘录","便笺","便函"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/memorandum","reason":"本批 memorandum 按所列词性与构式训练：备忘录；书面通知（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("element",[
   ["sense-1","组成要素；部分","n.",["组成要素","部分"],["element-1","constituent-part","assembled-component-unit","vector-component"],"Timing is an essential element of the performance.","时机是这场表演的一个关键要素。",null,"https://www.merriam-webster.com/dictionary/element"],
   ["sense-2","化学元素","n.",["化学元素"],["element-2","constituent-part","assembled-component-unit","vector-component"],"The chart lists each element by its atomic number.","图表按原子序数列出每种化学元素。",null,"https://www.merriam-webster.com/dictionary/element"],
   ["sense-3","恶劣天气（常用复数）","n.",["恶劣天气（常用复数）"],["element-3","constituent-part","assembled-component-unit","vector-component"],"The shelter protects the equipment from the elements.","棚屋保护设备免受恶劣天气侵袭。","the elements","https://www.merriam-webster.com/dictionary/element"],
   ["sense-4","基础原理（常用复数）","n.",["基础原理（常用复数）"],["element-4","constituent-part","assembled-component-unit","vector-component"],"The handbook explains the elements of map reading.","手册讲解了识图的基本原理。","the elements of","https://www.merriam-webster.com/dictionary/element"]
  ],[{"terms":["元件","元素","要素","成分","单元","码元"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/element","reason":"本批 element 按所列词性与构式训练：组成要素；部分（n.）、化学元素（n.）、恶劣天气（常用复数）（n.）、基础原理（常用复数）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("booklet",[
   ["sense-1","小册子","n.",["小册子"],["booklet-1","pamphlet-1"],"The booklet explains how to use the ticket machine.","小册子说明了如何使用售票机。",null,"https://www.merriam-webster.com/dictionary/booklet"]
  ],[]);
  entry("label",[
   ["sense-1","标签","n.",["标签"],["label-1","tag-label","tag-game","tag-label-verb","tag-follow","follow-person","sort-into-groups","official-secrecy"],"The label gives the date the sample was collected.","标签注明了采集样本的日期。",null,"https://www.merriam-webster.com/dictionary/label"],
   ["sense-2","唱片公司；唱片品牌","n.",["唱片公司","唱片品牌"],["label-2","tag-label","tag-game","tag-label-verb","tag-follow","follow-person","sort-into-groups","official-secrecy"],"The band released its album through a small label.","乐队通过一家小唱片公司发行了专辑。",null,"https://www.merriam-webster.com/dictionary/label"],
   ["sense-3","贴标签；标注","v.",["贴标签","标注"],["label-3","tag-label","tag-game","tag-label-verb","tag-follow","follow-person","sort-into-groups","official-secrecy"],"Label each container before filling it.","装东西前，给每个容器贴上标签。",null,"https://www.merriam-webster.com/dictionary/label"],
   ["sense-4","把……归类或称作","v.",["把……归类或称作"],["label-4","tag-label","tag-game","tag-label-verb","tag-follow","follow-person","sort-into-groups","official-secrecy"],"The report labelled the proposal impractical.","报告把这项提议称为不切实际。",null,"https://www.merriam-webster.com/dictionary/label"]
  ],[{"terms":["标记","称号","把…归类为"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/label","reason":"本批 label 按所列词性与构式训练：标签（n.）、唱片公司；唱片品牌（n.）、贴标签；标注（v.）、把……归类或称作（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("jar",[
   ["sense-1","广口瓶；罐","n.",["广口瓶","罐"],["jar-1","shake-move","shake-tremble","shake-unsettle","shake-shake-noun","shake-drink"],"A glass jar held the dried seeds.","一个玻璃罐装着干种子。",null,"https://www.merriam-webster.com/dictionary/jar"],
   ["sense-2","震动；使震动不适","v.",["震动","使震动不适"],["jar-2","shake-move","shake-tremble","shake-unsettle","shake-shake-noun","shake-drink"],"The sudden stop jarred his shoulder.","突然停车震痛了他的肩膀。",null,"https://www.merriam-webster.com/dictionary/jar"],
   ["sense-3","显得不协调","v.",["显得不协调"],["jar-3","shake-move","shake-tremble","shake-unsettle","shake-shake-noun","shake-drink"],"The bright plastic chairs jar with the old stone walls.","鲜艳的塑料椅与古老的石墙显得不协调。","jar with","https://www.merriam-webster.com/dictionary/jar"]
  ],[{"terms":["刺耳声","震惊","冲突","发刺耳声","不一致","刺激"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/jar","reason":"本批 jar 按所列词性与构式训练：广口瓶；罐（n.）、震动；使震动不适（v.）、显得不协调（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("knob",[
   ["sense-1","球形把手；旋钮","n.",["球形把手","旋钮"],["knob-1","graspable-handle","deal-with-responsibility","touch-move-by-hand","control-machine-vehicle","deal-in-goods","informal-online-name","compact-mass","abnormal-swelling","group-together","foolish-person"],"Turn the knob to adjust the volume.","转动旋钮来调节音量。",null,"https://www.merriam-webster.com/dictionary/knob"],
   ["sense-2","圆形突起；小块","n.",["圆形突起","小块"],["knob-2","graspable-handle","deal-with-responsibility","touch-move-by-hand","control-machine-vehicle","deal-in-goods","informal-online-name","compact-mass","abnormal-swelling","group-together","foolish-person"],"She added a knob of butter to the pan.","她往锅里加了一小块黄油。",null,"https://www.merriam-webster.com/dictionary/knob"]
  ],[{"terms":["把手","瘤","球形突出物","使有球形突出物","鼓起"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/knob","reason":"本批 knob 按所列词性与构式训练：球形把手；旋钮（n.）、圆形突起；小块（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bucket",[
   ["sense-1","桶","n.",["桶"],["bucket-1","handled-bucket"],"He carried a bucket of sand to the gate.","他提了一桶沙子到门口。",null,"https://www.merriam-webster.com/dictionary/bucket"],
   ["sense-2","下倾盆大雨（英式非正式）","v.",["下倾盆大雨（英式非正式）"],["bucket-2","handled-bucket"],"It was bucketing down when the train arrived.","火车到站时，外面正下着倾盆大雨。","bucket down","https://www.merriam-webster.com/dictionary/bucket"]
  ],[{"terms":["存储桶"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bucket","reason":"本批 bucket 按所列词性与构式训练：桶（n.）、下倾盆大雨（英式非正式）（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("collar",[
   ["sense-1","衣领","n.",["衣领"],["collar-1","take-into-police-custody","keep-within-place","halt-development","capture-attention"],"The jacket has a wide collar.","这件夹克有一个宽衣领。",null,"https://www.merriam-webster.com/dictionary/collar"],
   ["sense-2","动物颈圈","n.",["动物颈圈"],["collar-2","take-into-police-custody","keep-within-place","halt-development","capture-attention"],"The dog's collar carries a small identification tag.","狗的颈圈上挂着一块小身份牌。",null,"https://www.merriam-webster.com/dictionary/collar"],
   ["sense-3","拦住；抓住（非正式）","v.",["拦住","抓住（非正式）"],["collar-3","take-into-police-custody","keep-within-place","halt-development","capture-attention"],"She collared the organiser to ask about the tickets.","她拦住组织者询问票务情况。",null,"https://www.merriam-webster.com/dictionary/collar"]
  ],[{"terms":["颈圈","控制","扭住衣领","给...装上领子"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/collar","reason":"本批 collar 按所列词性与构式训练：衣领（n.）、动物颈圈（n.）、拦住；抓住（非正式）（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("stitch",[
   ["sense-1","针脚；一针","n.",["针脚","一针"],["stitch-1","join-with-needle-thread"],"Each stitch was small and even.","每一针都细小而匀称。",null,"https://www.merriam-webster.com/dictionary/stitch"],
   ["sense-2","肋部突然的刺痛","n.",["肋部突然的刺痛"],["stitch-2","join-with-needle-thread"],"He slowed down when he felt a stitch in his side.","他感到肋部一阵刺痛时放慢了速度。",null,"https://www.merriam-webster.com/dictionary/stitch"],
   ["sense-3","缝；缝合","v.",["缝","缝合"],["stitch-3","join-with-needle-thread"],"She stitched the torn pocket by hand.","她手工缝补了撕破的口袋。",null,"https://www.merriam-webster.com/dictionary/stitch"]
  ],[{"terms":["疼痛","针法","碎布条","装订"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/stitch","reason":"本批 stitch 按所列词性与构式训练：针脚；一针（n.）、肋部突然的刺痛（n.）、缝；缝合（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("thread",[
   ["sense-1","线；纱线","n.",["线","纱线"],["thread-1","cord-thread","series-sequence","text-string","thread-on-string"],"The repair needs a stronger thread.","这次修补需要更结实的线。",null,"https://www.merriam-webster.com/dictionary/thread"],
   ["sense-2","思路；贯穿的线索","n.",["思路","贯穿的线索"],["thread-2","cord-thread","series-sequence","text-string","thread-on-string"],"A common thread connects the three stories.","一条共同的线索贯穿这三个故事。",null,"https://www.merriam-webster.com/dictionary/thread"],
   ["sense-3","网上连续讨论串","n.",["网上连续讨论串"],["thread-3","cord-thread","series-sequence","text-string","thread-on-string"],"The thread contains several useful answers.","这个讨论串包含几个有用的回答。",null,"https://www.merriam-webster.com/dictionary/thread"],
   ["sense-4","穿线；使穿过","v.",["穿线","使穿过"],["thread-4","cord-thread","series-sequence","text-string","thread-on-string"],"Thread the ribbon through the small loop.","把丝带穿过小环。",null,"https://www.merriam-webster.com/dictionary/thread"],
   ["sense-5","穿行","v.",["穿行"],["thread-5","cord-thread","series-sequence","text-string","thread-on-string"],"The cyclists threaded their way through the crowd.","骑车人在人群中穿行。","thread one's way","https://www.merriam-webster.com/dictionary/thread"],
   ["sense-6","螺纹","n.",["螺纹"],["thread-6","cord-thread","series-sequence","text-string","thread-on-string"],"The thread on the bolt was badly worn.","螺栓上的螺纹磨损严重。",null,"https://www.merriam-webster.com/dictionary/thread"]
  ],[{"terms":["丝","纤维","线索","穿线于","穿过","通过","用线穿成","线程"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/thread","reason":"本批 thread 按所列词性与构式训练：线；纱线（n.）、思路；贯穿的线索（n.）、网上连续讨论串（n.）、穿线；使穿过（v.）、穿行（v.）、螺纹（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("strap",[
   ["sense-1","带；皮带","n.",["带","皮带"],["strap-1","waist-belt","geographic-zone","bind-fasten","bind-oblige","bind-book","bind-unite","join-integrate"],"The bag has an adjustable shoulder strap.","这个包有一条可调节的肩带。",null,"https://www.merriam-webster.com/dictionary/strap"],
   ["sense-2","用带捆牢","v.",["用带捆牢"],["strap-2","waist-belt","geographic-zone","bind-fasten","bind-oblige","bind-book","bind-unite","join-integrate"],"They strapped the boxes securely to the roof rack.","他们用带子把箱子牢牢固定在车顶行李架上。",null,"https://www.merriam-webster.com/dictionary/strap"]
  ],[{"terms":["(用皮带)捆扎"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/strap","reason":"本批 strap 按所列词性与构式训练：带；皮带（n.）、用带捆牢（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("wool",[
   ["sense-1","羊毛；羊毛织物","n.",["羊毛","羊毛织物"],["wool-1"],"The blanket is made from pure wool.","这条毯子用纯羊毛制成。",null,"https://www.merriam-webster.com/dictionary/wool"]
  ],[{"terms":["毛织物","毛线","绒线","绒毛","棉"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/wool","reason":"本批 wool 按所列词性与构式训练：羊毛；羊毛织物（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("colour",[
   ["sense-1","颜色","n.",["颜色"],["colour-1","effect-on-development","controlling-influence","influential-person-factor"],"The colour of the stone changes when it is wet.","石头湿润时颜色会改变。",null,"https://www.merriam-webster.com/dictionary/color"],
   ["sense-2","面色；气色","n.",["面色","气色"],["colour-2","effect-on-development","controlling-influence","influential-person-factor"],"The cold wind brought colour to her cheeks.","寒风使她的脸颊泛起红润。",null,"https://www.merriam-webster.com/dictionary/color"],
   ["sense-3","旗帜或队服颜色（常用复数）","n.",["旗帜或队服颜色（常用复数）"],["colour-3","effect-on-development","controlling-influence","influential-person-factor"],"The supporters wore their team's colours.","支持者穿着代表球队颜色的服装。","colours","https://www.merriam-webster.com/dictionary/color"],
   ["sense-4","涂色；着色","v.",["涂色","着色"],["colour-4","effect-on-development","controlling-influence","influential-person-factor"],"The children coloured the map with pencils.","孩子们用彩色铅笔给地图涂色。",null,"https://www.merriam-webster.com/dictionary/color"],
   ["sense-5","影响；使带有倾向","v.",["影响","使带有倾向"],["colour-5","effect-on-development","controlling-influence","influential-person-factor"],"His early experiences coloured his view of city life.","早年的经历影响了他对城市生活的看法。",null,"https://www.merriam-webster.com/dictionary/color"]
  ],[{"terms":["颜料","外貌","把...涂上颜色","粉饰","使脸红","歪曲","变色"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/color","reason":"本批 colour 按所列词性与构式训练：颜色（n.）、面色；气色（n.）、旗帜或队服颜色（常用复数）（n.）、涂色；着色（v.）、影响；使带有倾向（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("stain",[
   ["sense-1","污渍","n.",["污渍"],["stain-1","dye-1","dye-2"],"The spill left a dark stain on the carpet.","洒出的液体在地毯上留下了一块深色污渍。",null,"https://www.merriam-webster.com/dictionary/stain"],
   ["sense-2","着色剂","n.",["着色剂"],["stain-2","dye-1","dye-2"],"The carpenter tested the wood stain on a spare board.","木匠在一块备用木板上试用了木材着色剂。",null,"https://www.merriam-webster.com/dictionary/stain"],
   ["sense-3","弄脏；染污","v.",["弄脏","染污"],["stain-3","dye-1","dye-2"],"The juice stained the white cloth.","果汁染污了白布。",null,"https://www.merriam-webster.com/dictionary/stain"],
   ["sense-4","染色处理","v.",["染色处理"],["stain-4","dye-1","dye-2"],"They stained the wooden frame a darker shade.","他们把木框染成了更深的颜色。",null,"https://www.merriam-webster.com/dictionary/stain"]
  ],[{"terms":["污染","污点","沾染","着色","变脏"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/stain","reason":"本批 stain 按所列词性与构式训练：污渍（n.）、着色剂（n.）、弄脏；染污（v.）、染色处理（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("pink",[
   ["sense-1","粉红色","n.",["粉红色"],["pink-1"],"She mixed red and white to make pink.","她把红色和白色混合调成粉红色。",null,"https://www.merriam-webster.com/dictionary/pink"],
   ["sense-2","粉红色的","adj.",["粉红色的"],["pink-2"],"A pink ribbon marked the correct folder.","一条粉红色丝带标出了正确的文件夹。",null,"https://www.merriam-webster.com/dictionary/pink"]
  ],[{"terms":["石竹花","化身","典范","头面人物","极度","粉红的","石竹科的","比较激进的","脸色发红的","精致的","有点下流的","刺","扎","刺痛","射伤","使面红耳赤","使变粉红色","变粉红色"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pink","reason":"本批 pink 按所列词性与构式训练：粉红色（n.）、粉红色的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("ragged",[
   ["sense-1","破烂的；衣衫褴褛的","adj.",["破烂的","衣衫褴褛的"],["ragged-1"],"The old sail was ragged after the storm.","风暴后，旧船帆破破烂烂。",null,"https://www.merriam-webster.com/dictionary/ragged"],
   ["sense-2","参差不齐的；不整齐的","adj.",["参差不齐的","不整齐的"],["ragged-2"],"The torn paper had a ragged edge.","撕开的纸有一道参差不齐的边缘。",null,"https://www.merriam-webster.com/dictionary/ragged"]
  ],[{"terms":["不协调的","粗糙的","刺耳的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ragged","reason":"本批 ragged 按所列词性与构式训练：破烂的；衣衫褴褛的（adj.）、参差不齐的；不整齐的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("tighten",[
   ["sense-1","使变紧；拧紧","v.",["使变紧","拧紧"],["tighten-1","fasten-secure","fasten-focus"],"Tighten the screws before lifting the frame.","抬起框架前，把螺钉拧紧。",null,"https://www.merriam-webster.com/dictionary/tighten"],
   ["sense-2","使更严格","v.",["使更严格"],["tighten-2","fasten-secure","fasten-focus"],"The organisers tightened the entry requirements.","组织者收紧了报名要求。",null,"https://www.merriam-webster.com/dictionary/tighten"]
  ],[{"terms":["勒紧","变紧","绷紧"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tighten","reason":"本批 tighten 按所列词性与构式训练：使变紧；拧紧（v.）、使更严格（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("button",[
   ["sense-1","纽扣","n.",["纽扣"],["button-1","fasten-secure","fasten-focus"],"A wooden button fastens the coat.","一颗木纽扣扣住了外套。",null,"https://www.merriam-webster.com/dictionary/button"],
   ["sense-2","按钮","n.",["按钮"],["button-2","fasten-secure","fasten-focus"],"Press the green button to start recording.","按绿色按钮开始录音。",null,"https://www.merriam-webster.com/dictionary/button"],
   ["sense-3","扣上纽扣","v.",["扣上纽扣"],["button-3","fasten-secure","fasten-focus"],"He buttoned his jacket before going outside.","出去前，他扣上了夹克。",null,"https://www.merriam-webster.com/dictionary/button"]
  ],[{"terms":["钮扣","扣住","钉钮扣于","扣紧"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/button","reason":"本批 button 按所列词性与构式训练：纽扣（n.）、按钮（n.）、扣上纽扣（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sausage",[
   ["sense-1","香肠","n.",["香肠"],["sausage-1"],"The cafe serves a sausage with the breakfast plate.","咖啡馆的早餐盘配有一根香肠。",null,"https://www.merriam-webster.com/dictionary/sausage"]
  ],[{"terms":["腊肠"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sausage","reason":"本批 sausage 按所列词性与构式训练：香肠（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("yogurt",[
   ["sense-1","酸奶","n.",["酸奶"],["yogurt-1"],"She added plain yogurt to the chopped fruit.","她往切好的水果中加入原味酸奶。",null,"https://www.merriam-webster.com/dictionary/yogurt"]
  ],[{"terms":["酸乳酪","酸乳"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/yogurt","reason":"本批 yogurt 按所列词性与构式训练：酸奶（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cheese",[
   ["sense-1","干酪；奶酪","n.",["干酪","奶酪"],["cheese-1"],"The shop sells cheese made on nearby farms.","商店出售附近农场制作的奶酪。",null,"https://www.merriam-webster.com/dictionary/cheese"]
  ],[{"terms":["乳酪"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cheese","reason":"本批 cheese 按所列词性与构式训练：干酪；奶酪（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fish",[
   ["sense-1","鱼","n.",["鱼"],["fish-1"],"A small fish hid beneath the submerged branch.","一条小鱼藏在水下的树枝下面。",null,"https://www.merriam-webster.com/dictionary/fish"],
   ["sense-2","鱼肉","n.",["鱼肉"],["fish-2"],"The soup contains fish and seasonal vegetables.","这碗汤里有鱼肉和时令蔬菜。",null,"https://www.merriam-webster.com/dictionary/fish"],
   ["sense-3","钓鱼；捕鱼","v.",["钓鱼","捕鱼"],["fish-3"],"They fish from the pier at weekends.","他们周末在码头钓鱼。",null,"https://www.merriam-webster.com/dictionary/fish"],
   ["sense-4","摸索寻找；探取","v.",["摸索寻找","探取"],["fish-4"],"She fished in her pocket for the missing ticket.","她在口袋里摸索那张不见的票。","fish for","https://www.merriam-webster.com/dictionary/fish"]
  ],[{"terms":["鱼类","接合板","钓","查出","用接合板连接","用钩捞取"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fish","reason":"本批 fish 按所列词性与构式训练：鱼（n.）、鱼肉（n.）、钓鱼；捕鱼（v.）、摸索寻找；探取（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("butter",[
   ["sense-1","黄油","n.",["黄油"],["butter-1"],"The recipe calls for a small amount of butter.","食谱需要少量黄油。",null,"https://www.merriam-webster.com/dictionary/butter"],
   ["sense-2","涂黄油","v.",["涂黄油"],["butter-2"],"He buttered the warm bread before serving it.","他端面包上桌前，在热面包上涂了黄油。",null,"https://www.merriam-webster.com/dictionary/butter"]
  ],[{"terms":["奶油","涂黄油于"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/butter","reason":"本批 butter 按所列词性与构式训练：黄油（n.）、涂黄油（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sandwich",[
   ["sense-1","三明治","n.",["三明治"],["sandwich-1"],"She packed a sandwich for the journey.","她为旅程打包了一个三明治。",null,"https://www.merriam-webster.com/dictionary/sandwich"],
   ["sense-2","夹在两者之间","v.",["夹在两者之间"],["sandwich-2"],"The notice was sandwiched between two large advertisements.","那则通知夹在两幅大广告之间。","sandwich between","https://www.merriam-webster.com/dictionary/sandwich"]
  ],[{"terms":["夹心面包","夹层板","插入","夹入","把...制成三明治"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sandwich","reason":"本批 sandwich 按所列词性与构式训练：三明治（n.）、夹在两者之间（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("spaghetti",[
   ["sense-1","意大利细长面条","n.",["意大利细长面条"],["spaghetti-1"],"He served spaghetti with a simple tomato sauce.","他端上了配简单番茄酱汁的意大利细长面条。",null,"https://www.merriam-webster.com/dictionary/spaghetti"]
  ],[{"terms":["意大利面条"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/spaghetti","reason":"本批 spaghetti 按所列词性与构式训练：意大利细长面条（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("pudding",[
   ["sense-1","布丁；软质甜食","n.",["布丁","软质甜食"],["pudding-1"],"The pudding was served in a small glass bowl.","布丁盛在一个小玻璃碗里。",null,"https://www.merriam-webster.com/dictionary/pudding"],
   ["sense-2","餐后甜点（英式）","n.",["餐后甜点（英式）"],["pudding-2"],"We chose fresh fruit for pudding.","我们选了新鲜水果作餐后甜点。",null,"https://www.merriam-webster.com/dictionary/pudding"]
  ],[]);
  entry("pie",[
   ["sense-1","馅饼；派","n.",["馅饼","派"],["pie-1"],"The bakery sells a pie filled with apples.","面包店出售苹果馅饼。",null,"https://www.merriam-webster.com/dictionary/pie"],
   ["sense-2","可分配的总额（比喻）","n.",["可分配的总额（比喻）"],["pie-2"],"Each department wanted a larger share of the pie.","每个部门都想分得更大的一份资源。","a share of the pie","https://www.merriam-webster.com/dictionary/pie"]
  ],[{"terms":["财富","总额","贪污受贿","杂乱","喜鹊","饼图"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pie","reason":"本批 pie 按所列词性与构式训练：馅饼；派（n.）、可分配的总额（比喻）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("scallion",[
   ["sense-1","青葱；小葱","n.",["青葱","小葱"],["scallion-1"],"Chop the scallion finely for the topping.","把小葱切碎作配料。",null,"https://www.merriam-webster.com/dictionary/scallion"]
  ],[{"terms":["冬葱","韭葱"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/scallion","reason":"本批 scallion 按所列词性与构式训练：青葱；小葱（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("vinegar",[
   ["sense-1","醋","n.",["醋"],["vinegar-1"],"A little vinegar gives the dressing a sharper taste.","一点醋让调味汁的味道更酸爽。",null,"https://www.merriam-webster.com/dictionary/vinegar"]
  ],[{"terms":["尖酸刻薄","加醋于"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/vinegar","reason":"本批 vinegar 按所列词性与构式训练：醋（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("complex",[
   ["sense-1","复杂的","adj.",["复杂的"],["complex-1","complex-hard-to-understand"],"The report explains a complex system in clear language.","报告用清楚的语言解释了一个复杂系统。",null,"https://www.merriam-webster.com/dictionary/complex"]
  ],[{"terms":["综合体","情结","络合物","组合的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/complex","reason":"当前 /kəmˈpleks/ 采用复杂的形容词；通常首音节重读的综合体、情结等名词不混入。本批 complex 按所列词性与构式训练：复杂的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("spacious",[
   ["sense-1","宽敞的","adj.",["宽敞的"],["spacious-1","expansive-1","expansive-2"],"The spacious hall can hold the entire choir.","宽敞的大厅容得下整个合唱团。",null,"https://www.merriam-webster.com/dictionary/spacious"]
  ],[{"terms":["广大的","宽广的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/spacious","reason":"本批 spacious 按所列词性与构式训练：宽敞的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("brickwork",[
   ["sense-1","砖砌部分；砌砖工程","n.",["砖砌部分","砌砖工程"],["brickwork-1","20-related-brickwork-masonry"],"The rain exposed cracks in the old brickwork.","雨水显露出旧砖砌部分的裂缝。",null,"https://www.merriam-webster.com/dictionary/brickwork"]
  ],[{"terms":["砖建筑物","砌砖","砌砖工作"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/brickwork","reason":"本批 brickwork 按所列词性与构式训练：砖砌部分；砌砖工程（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("plaza",[
   ["sense-1","城市广场","n.",["城市广场"],["plaza-1"],"Musicians performed in the plaza beside the station.","音乐家在车站旁的广场演出。",null,"https://www.merriam-webster.com/dictionary/plaza"],
   ["sense-2","购物中心","n.",["购物中心"],["plaza-2"],"The new plaza contains shops and a small cinema.","新的购物中心里有商店和一家小电影院。",null,"https://www.merriam-webster.com/dictionary/plaza"]
  ],[{"terms":["广场","市场","购物区"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/plaza","reason":"本批 plaza 按所列词性与构式训练：城市广场（n.）、购物中心（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("castle",[
   ["sense-1","城堡","n.",["城堡"],["castle-1"],"The castle stands above a bend in the river.","城堡矗立在河流转弯处的上方。",null,"https://www.merriam-webster.com/dictionary/castle"],
   ["sense-2","国际象棋中的车（较旧称呼）","n.",["国际象棋中的车（较旧称呼）"],["castle-2"],"The beginner called the rook a castle.","这位初学者把国际象棋中的车称作castle。",null,"https://www.merriam-webster.com/dictionary/castle"],
   ["sense-3","王车易位","v.",["王车易位"],["castle-3"],"The player castled before advancing a pawn.","棋手在推进一枚兵之前进行了王车易位。",null,"https://www.merriam-webster.com/dictionary/castle"]
  ],[{"terms":["象棋中的车","置于城堡中","盘踞于"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/castle","reason":"棋子名 castle 是 rook 的较旧称呼；王车易位另列动词。本批 castle 按所列词性与构式训练：城堡（n.）、国际象棋中的车（较旧称呼）（n.）、王车易位（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("lever",[
   ["sense-1","杠杆；操纵杆","n.",["杠杆","操纵杆"],["lever-1"],"Pull the lever to raise the platform.","拉动操纵杆来升起平台。",null,"https://www.merriam-webster.com/dictionary/lever"],
   ["sense-2","施加影响的手段","n.",["施加影响的手段"],["lever-2"],"The grant became a lever for wider investment.","这笔资助成为带动更广泛投资的手段。",null,"https://www.merriam-webster.com/dictionary/lever"],
   ["sense-3","用杠杆撬动","v.",["用杠杆撬动"],["lever-3"],"They levered the stone away from the doorway.","他们用杠杆把石头撬离门口。",null,"https://www.merriam-webster.com/dictionary/lever"]
  ],[{"terms":["似杠杆之工具","撬开","使用杠杆"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/lever","reason":"本批 lever 按所列词性与构式训练：杠杆；操纵杆（n.）、施加影响的手段（n.）、用杠杆撬动（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mason",[
   ["sense-1","石匠；泥瓦匠","n.",["石匠","泥瓦匠"],["mason-1","craftsman-1","19-related-craft-craftsman-art"],"The mason replaced the damaged stone blocks.","石匠更换了损坏的石块。",null,"https://www.merriam-webster.com/dictionary/mason"]
  ],[{"terms":["共济会会员","用砖瓦砌成"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mason","reason":"本批 mason 按所列词性与构式训练：石匠；泥瓦匠（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("apparatus",[
   ["sense-1","设备；装置","n.",["设备","装置"],["apparatus-1","equipment-set","device-instrument","device-method"],"The laboratory apparatus fits on a single bench.","这套实验设备放在一张工作台上。",null,"https://www.merriam-webster.com/dictionary/apparatus"],
   ["sense-2","组织机构；运作体系","n.",["组织机构","运作体系"],["apparatus-2","equipment-set","device-instrument","device-method"],"The chapter examines the state's administrative apparatus.","这一章考察国家的行政机构。",null,"https://www.merriam-webster.com/dictionary/apparatus"]
  ],[{"terms":["器具","器官","仪器","器械"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/apparatus","reason":"本批 apparatus 按所列词性与构式训练：设备；装置（n.）、组织机构；运作体系（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("masonry",[
   ["sense-1","砖石结构或砌筑工艺","n.",["砖石结构或砌筑工艺"],["masonry-1","20-related-brickwork-masonry"],"The arch contains carefully fitted masonry.","拱门由精细嵌合的砖石砌成。",null,"https://www.merriam-webster.com/dictionary/masonry"]
  ],[{"terms":["(建筑物的)砖石部分"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/masonry","reason":"本批 masonry 按所列词性与构式训练：砖石结构或砌筑工艺（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("screw",[
   ["sense-1","螺钉；螺杆","n.",["螺钉","螺杆"],["screw-1","fasten-secure","fasten-focus"],"One screw was missing from the wooden frame.","木框上少了一颗螺钉。",null,"https://www.merriam-webster.com/dictionary/screw"],
   ["sense-2","拧紧；旋入","v.",["拧紧","旋入"],["screw-2","fasten-secure","fasten-focus"],"Screw the lid firmly onto the jar.","把盖子牢牢拧到罐子上。",null,"https://www.merriam-webster.com/dictionary/screw"]
  ],[{"terms":["螺旋","螺旋桨","吝啬鬼","调节","扭紧","旋","拧","加强","压榨","勒索","转动"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/screw","reason":"本批 screw 按所列词性与构式训练：螺钉；螺杆（n.）、拧紧；旋入（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("dam",[
   ["sense-1","水坝","n.",["水坝"],["dam-1","barrier-physical","barrier-obstacle","block-solid-piece","block-city-area","block-building","block-obstruct"],"The dam holds water for the dry season.","水坝蓄水供旱季使用。",null,"https://www.merriam-webster.com/dictionary/dam"],
   ["sense-2","筑坝拦住；阻断","v.",["筑坝拦住","阻断"],["dam-2","barrier-physical","barrier-obstacle","block-solid-piece","block-city-area","block-building","block-obstruct"],"Fallen branches dammed the narrow stream.","倒下的树枝堵住了狭窄的小溪。",null,"https://www.merriam-webster.com/dictionary/dam"]
  ],[{"terms":["障碍","控制","筑坝","直接存取法"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dam","reason":"本批 dam 按所列词性与构式训练：水坝（n.）、筑坝拦住；阻断（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("seaman",[
   ["sense-1","海员；水手","n.",["海员","水手"],["seaman-1","sailor-crew-member","seafarer","sailor-sport","dinghy-sailing"],"The experienced seaman checked the ropes before departure.","经验丰富的水手在出发前检查了绳索。",null,"https://www.merriam-webster.com/dictionary/seaman"]
  ],[{"terms":["船员","水兵","精通海事者"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/seaman","reason":"本批 seaman 按所列词性与构式训练：海员；水手（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("deck",[
   ["sense-1","甲板","n.",["甲板"],["deck-1","add-ornament","paint-paper-interior","award-honour","platform-raised-area","platform-station","platform-technology","platform-policy"],"Passengers gathered on the upper deck.","乘客聚集在上层甲板上。",null,"https://www.merriam-webster.com/dictionary/deck"],
   ["sense-2","屋外木平台；露台","n.",["屋外木平台","露台"],["deck-2","add-ornament","paint-paper-interior","award-honour","platform-raised-area","platform-station","platform-technology","platform-policy"],"They ate breakfast on the wooden deck.","他们在木露台上吃早餐。",null,"https://www.merriam-webster.com/dictionary/deck"],
   ["sense-3","一副纸牌","n.",["一副纸牌"],["deck-3","add-ornament","paint-paper-interior","award-honour","platform-raised-area","platform-station","platform-technology","platform-policy"],"He shuffled the deck before dealing the cards.","他在发牌前洗了牌。",null,"https://www.merriam-webster.com/dictionary/deck"],
   ["sense-4","一组演示幻灯片","n.",["一组演示幻灯片"],["deck-4","add-ornament","paint-paper-interior","award-honour","platform-raised-area","platform-station","platform-technology","platform-policy"],"The presentation deck contains twenty slides.","这组演示文稿包含二十张幻灯片。",null,"https://www.merriam-webster.com/dictionary/deck"],
   ["sense-5","装饰；打扮","v.",["装饰","打扮"],["deck-5","add-ornament","paint-paper-interior","award-honour","platform-raised-area","platform-station","platform-technology","platform-policy"],"They decked the hall with paper lanterns.","他们用纸灯笼装饰大厅。","deck with","https://www.merriam-webster.com/dictionary/deck"]
  ],[{"terms":["(汽车后部的)行李仓","装甲板","纸牌背面图案"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/deck","reason":"本批 deck 按所列词性与构式训练：甲板（n.）、屋外木平台；露台（n.）、一副纸牌（n.）、一组演示幻灯片（n.）、装饰；打扮（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("turbine",[
   ["sense-1","涡轮机","n.",["涡轮机"],["turbine-1"],"The turbine converts flowing water into mechanical power.","涡轮机把流动的水转化为机械动力。",null,"https://www.merriam-webster.com/dictionary/turbine"]
  ],[]);
  entry("ferry",[
   ["sense-1","渡船；轮渡","n.",["渡船","轮渡"],["ferry-1","carry-1","carry-2","carry-3","carry-4","carry-5"],"The ferry connects the island with the mainland.","轮渡连接岛屿与大陆。",null,"https://www.merriam-webster.com/dictionary/ferry"],
   ["sense-2","渡运；来回运送","v.",["渡运","来回运送"],["ferry-2","carry-1","carry-2","carry-3","carry-4","carry-5"],"Small boats ferried supplies across the lake.","小船把物资运过湖面。",null,"https://www.merriam-webster.com/dictionary/ferry"]
  ],[{"terms":["渡口","摆渡营业权"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ferry","reason":"本批 ferry 按所列词性与构式训练：渡船；轮渡（n.）、渡运；来回运送（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("rail",[
   ["sense-1","栏杆；横杆","n.",["栏杆","横杆"],["rail-1","track-mark","17-plant-trace","track-path","track-rail","track-racing","track-recording","track-follow","17-tracking","track-monitor","track-course","scold-rebuke"],"Hold the rail while walking down the steep steps.","走下陡峭台阶时扶住栏杆。",null,"https://www.merriam-webster.com/dictionary/rail"],
   ["sense-2","铁轨；铁路","n.",["铁轨","铁路"],["rail-2","track-mark","17-plant-trace","track-path","track-rail","track-racing","track-recording","track-follow","17-tracking","track-monitor","track-course","scold-rebuke"],"The journey can be completed entirely by rail.","这段旅程可以全程乘火车完成。",null,"https://www.merriam-webster.com/dictionary/rail"],
   ["sense-3","严厉抱怨；斥责","v.",["严厉抱怨","斥责"],["rail-3","track-mark","17-plant-trace","track-path","track-rail","track-racing","track-recording","track-follow","17-tracking","track-monitor","track-course","scold-rebuke"],"The columnist railed against the waste of public money.","专栏作者严厉抨击了浪费公款的行为。","rail against","https://www.merriam-webster.com/dictionary/rail"]
  ],[{"terms":["围栏","扶手","秧鸡","以横木围栏","给...铺铁轨","责骂","抱怨"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/rail","reason":"本批 rail 按所列词性与构式训练：栏杆；横杆（n.）、铁轨；铁路（n.）、严厉抱怨；斥责（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("arrive",[
   ["sense-1","到达","v.",["到达"],["arrive-1"],"The parcel arrived two days earlier than expected.","包裹比预期早两天到达。",null,"https://www.merriam-webster.com/dictionary/arrive"],
   ["sense-2","达成某种结论","v.",["达成某种结论"],["arrive-2"],"The group arrived at a decision after a long discussion.","经过长时间讨论，小组作出了决定。","arrive at","https://www.merriam-webster.com/dictionary/arrive"]
  ],[{"terms":["抵达"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/arrive","reason":"本批 arrive 按所列词性与构式训练：到达（v.）、达成某种结论（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("lull",[
   ["sense-1","短暂停歇；平静期","n.",["短暂停歇","平静期"],["lull-1"],"A lull in the rain allowed them to repair the roof.","雨势的短暂停歇让他们得以修理屋顶。",null,"https://www.merriam-webster.com/dictionary/lull"],
   ["sense-2","使平静；哄睡","v.",["使平静","哄睡"],["lull-2"],"The gentle rocking lulled the baby to sleep.","轻轻摇晃使婴儿入睡。",null,"https://www.merriam-webster.com/dictionary/lull"],
   ["sense-3","使放松警惕","v.",["使放松警惕"],["lull-3"],"The early success lulled the team into a false sense of security.","早期成功使团队产生了虚假的安全感，放松了警惕。","lull into","https://www.merriam-webster.com/dictionary/lull"]
  ],[{"terms":["暂停","间歇","稍息","使人安静的东西","哄骗","使安静","变平静"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/lull","reason":"本批 lull 按所列词性与构式训练：短暂停歇；平静期（n.）、使平静；哄睡（v.）、使放松警惕（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("tunnel",[
   ["sense-1","隧道；地道","n.",["隧道","地道"],["tunnel-1","burrow-hole","burrow-dig","tube-1","tube-conveyance","tobacco-smoking-pipe","wind-instrument-pipe","high-pitched-voice","squeeze-decorative-icing","tube-2","tube-3"],"The tunnel passes beneath the old harbour.","隧道从老港口下面穿过。",null,"https://www.merriam-webster.com/dictionary/tunnel"],
   ["sense-2","挖掘隧道；打洞","v.",["挖掘隧道","打洞"],["tunnel-2","burrow-hole","burrow-dig","tube-1","tube-conveyance","tobacco-smoking-pipe","wind-instrument-pipe","high-pitched-voice","squeeze-decorative-icing","tube-2","tube-3"],"The animals tunnelled beneath the fence.","这些动物在篱笆下挖洞穿过。",null,"https://www.merriam-webster.com/dictionary/tunnel"]
  ],[{"terms":["地下道","挖隧道","掘隧道于"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tunnel","reason":"本批 tunnel 按所列词性与构式训练：隧道；地道（n.）、挖掘隧道；打洞（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("postage",[
   ["sense-1","邮资；邮费","n.",["邮资","邮费"],["postage-1"],"The price includes packaging but not postage.","价格包含包装费，但不含邮费。",null,"https://www.merriam-webster.com/dictionary/postage"]
  ],[]);
  entry("transfer",[
   ["sense-1","转移；调动","v.",["转移","调动"],["transfer-1","communicate-message","transport-material"],"The office transferred the files to a secure cabinet.","办公室把文件转移到一个安全柜中。",null,"https://www.merriam-webster.com/dictionary/transfer"],
   ["sense-2","转让；转账","v.",["转让","转账"],["transfer-2","communicate-message","transport-material"],"She transferred the payment to the club's account.","她把款项转到了俱乐部账户。",null,"https://www.merriam-webster.com/dictionary/transfer"],
   ["sense-3","换乘；转学","v.",["换乘","转学"],["transfer-3","communicate-message","transport-material"],"We transferred to a local train at the next station.","我们在下一站换乘了区间列车。",null,"https://www.merriam-webster.com/dictionary/transfer"]
  ],[{"terms":["传递","转车","汇款","搬迁","转会"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/transfer","reason":"当前 /trænsˈfɜː(r)/ 采用转移动词；首音节重读的名词留作参考。本批 transfer 按所列词性与构式训练：转移；调动（v.）、转让；转账（v.）、换乘；转学（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("carrier",[
   ["sense-1","运输公司；承运者","n.",["运输公司","承运者"],["carrier-1","air-transport-company","aerial-vehicle"],"The carrier delivers goods to the smaller islands.","这家运输公司向较小的岛屿运送货物。",null,"https://www.merriam-webster.com/dictionary/carrier"],
   ["sense-2","病原体或基因携带者","n.",["病原体或基因携带者"],["carrier-2","air-transport-company","aerial-vehicle"],"The diagram identifies the carrier of the recessive gene.","图示标出了隐性基因的携带者。",null,"https://www.merriam-webster.com/dictionary/carrier"],
   ["sense-3","航空母舰","n.",["航空母舰"],["carrier-3","air-transport-company","aerial-vehicle"],"The model shows an aircraft carrier at sea.","模型展示了一艘海上的航空母舰。","aircraft carrier","https://www.merriam-webster.com/dictionary/carrier"],
   ["sense-4","通信载波","n.",["通信载波"],["carrier-4","air-transport-company","aerial-vehicle"],"The receiver separates the message from the carrier.","接收器把信息从载波中分离出来。",null,"https://www.merriam-webster.com/dictionary/carrier"],
   ["sense-5","邮递员","n.",["邮递员"],["carrier-5","air-transport-company","aerial-vehicle"],"The mail carrier left the parcel by the gate.","邮递员把包裹放在门旁。","mail carrier","https://www.merriam-webster.com/dictionary/carrier"]
  ],[{"terms":["运送者","带菌者","载波"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/carrier","reason":"本批 carrier 按所列词性与构式训练：运输公司；承运者（n.）、病原体或基因携带者（n.）、航空母舰（n.）、通信载波（n.）、邮递员（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("respondent",[
   ["sense-1","受访者；问卷回答者","n.",["受访者","问卷回答者"],["respondent-1"],"Each respondent completed the same set of questions.","每位受访者都回答了同一组问题。",null,"https://www.merriam-webster.com/dictionary/respondent"],
   ["sense-2","答辩方；被申请人","n.",["答辩方","被申请人"],["respondent-2"],"The respondent submitted a written reply to the petition.","被申请人向申请书提交了书面答复。",null,"https://www.merriam-webster.com/dictionary/respondent"]
  ],[{"terms":["回答的","应答的","反射的","应答者","被告"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/respondent","reason":"采用受访者及特定程序的答辩方；不将所有程序中的 respondent 一律译成刑事被告。本批 respondent 按所列词性与构式训练：受访者；问卷回答者（n.）、答辩方；被申请人（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("poll",[
   ["sense-1","民意调查","n.",["民意调查"],["poll-1","survey-examine","survey-view","survey-measure","survey-study","survey-overview","formal-choice-voting","votes-received-total","right-to-vote","choose-by-collective-opinion"],"The poll asked residents about the new bus route.","民意调查询问了居民对新公交线路的看法。",null,"https://www.merriam-webster.com/dictionary/poll"],
   ["sense-2","选举投票；投票站（常用复数）","n.",["选举投票","投票站（常用复数）"],["poll-2","survey-examine","survey-view","survey-measure","survey-study","survey-overview","formal-choice-voting","votes-received-total","right-to-vote","choose-by-collective-opinion"],"Voters queued outside the polls before opening time.","投票站开放前，选民就在外面排起了队。","the polls","https://www.merriam-webster.com/dictionary/poll"],
   ["sense-3","进行民意调查","v.",["进行民意调查"],["poll-3","survey-examine","survey-view","survey-measure","survey-study","survey-overview","formal-choice-voting","votes-received-total","right-to-vote","choose-by-collective-opinion"],"The researchers polled a thousand commuters.","研究人员调查了一千名通勤者。",null,"https://www.merriam-webster.com/dictionary/poll"],
   ["sense-4","在选举中获得票数","v.",["在选举中获得票数"],["poll-4","survey-examine","survey-view","survey-measure","survey-study","survey-overview","formal-choice-voting","votes-received-total","right-to-vote","choose-by-collective-opinion"],"The candidate polled more votes in the rural districts.","这位候选人在农村地区获得了更多选票。",null,"https://www.merriam-webster.com/dictionary/poll"]
  ],[{"terms":["投票","民意测验","投票数","一组人中的一个","头颈和后脑部","鹦鹉","对...进行民意测验","获得...票","剪树枝","轮询","剪过毛的","修过枝的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/poll","reason":"本批 poll 按所列词性与构式训练：民意调查（n.）、选举投票；投票站（常用复数）（n.）、进行民意调查（v.）、在选举中获得票数（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("succession",[
   ["sense-1","接连；连续的一系列","n.",["接连","连续的一系列"],["succession-1","inheritance-1","19-related-inherit-inheritance","heritage-culture","cultural-heritage","heritage-inheritance","inheritance-2"],"A succession of storms damaged the sea wall.","接连几场风暴损坏了海堤。",null,"https://www.merriam-webster.com/dictionary/succession"],
   ["sense-2","继承；继位","n.",["继承","继位"],["succession-2","inheritance-1","19-related-inherit-inheritance","heritage-culture","cultural-heritage","heritage-inheritance","inheritance-2"],"The document sets out the order of succession.","文件列明了继承顺序。",null,"https://www.merriam-webster.com/dictionary/succession"],
   ["sense-3","生态演替","n.",["生态演替"],["succession-3","inheritance-1","19-related-inherit-inheritance","heritage-culture","cultural-heritage","heritage-inheritance","inheritance-2"],"The study follows plant succession on abandoned farmland.","研究追踪了废弃农田上的植物演替。",null,"https://www.merriam-webster.com/dictionary/succession"]
  ],[{"terms":["连续","继承权","演替","地层次序"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/succession","reason":"本批 succession 按所列词性与构式训练：接连；连续的一系列（n.）、继承；继位（n.）、生态演替（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("safety",[
   ["sense-1","安全","n.",["安全"],["safety-1","security-1","security-2","security-3","security-4"],"The inspection focused on the safety of the stairway.","检查重点是楼梯的安全。",null,"https://www.merriam-webster.com/dictionary/safety"],
   ["sense-2","防误操作的保险装置","n.",["防误操作的保险装置"],["safety-2","security-1","security-2","security-3","security-4"],"The machine will not start until the safety is released.","保险装置解除后，机器才能启动。",null,"https://www.merriam-webster.com/dictionary/safety"]
  ],[{"terms":["保险","平安","保安设备","保护","防护"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/safety","reason":"本批 safety 按所列词性与构式训练：安全（n.）、防误操作的保险装置（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("ambition",[
   ["sense-1","抱负；渴望达到的目标","n.",["抱负","渴望达到的目标"],["ambition-1"],"Her ambition is to design affordable housing.","她的志向是设计价格可负担的住房。",null,"https://www.merriam-webster.com/dictionary/ambition"]
  ],[{"terms":["野心","志向"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ambition","reason":"本批 ambition 按所列词性与构式训练：抱负；渴望达到的目标（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("welfare",[
   ["sense-1","安康；福祉","n.",["安康","福祉"],["welfare-1","health-and-happiness","well-being-welfare","epithet-existence"],"The charity works to improve animal welfare.","慈善机构致力于改善动物福利。",null,"https://www.merriam-webster.com/dictionary/welfare"],
   ["sense-2","社会救济；福利制度","n.",["社会救济","福利制度"],["welfare-2","health-and-happiness","well-being-welfare","epithet-existence"],"The report examines access to public welfare.","报告考察了公共福利的获取情况。",null,"https://www.merriam-webster.com/dictionary/welfare"]
  ],[{"terms":["福利","安宁","幸福","福利事业","福利的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/welfare","reason":"本批 welfare 按所列词性与构式训练：安康；福祉（n.）、社会救济；福利制度（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("nomination",[
   ["sense-1","提名；获提名的资格","n.",["提名","获提名的资格"],["nomination-1"],"The film received a nomination for its original music.","这部电影的原创音乐获得了提名。",null,"https://www.merriam-webster.com/dictionary/nomination"]
  ],[{"terms":["任命","提名权"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/nomination","reason":"本批 nomination 按所列词性与构式训练：提名；获提名的资格（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("ambitious",[
   ["sense-1","有抱负的","adj.",["有抱负的"],["ambitious-1"],"The ambitious apprentice hoped to run her own workshop.","这位有抱负的学徒希望开办自己的工坊。",null,"https://www.merriam-webster.com/dictionary/ambitious"],
   ["sense-2","规模宏大而难实现的","adj.",["规模宏大而难实现的"],["ambitious-2"],"The team proposed an ambitious five-year restoration plan.","团队提出了一项宏大的五年修复计划。",null,"https://www.merriam-webster.com/dictionary/ambitious"]
  ],[{"terms":["有野心的","抱负不凡的","雄心勃勃的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ambitious","reason":"本批 ambitious 按所列词性与构式训练：有抱负的（adj.）、规模宏大而难实现的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("harmony",[
   ["sense-1","和谐；协调","n.",["和谐","协调"],["harmony-1","agreement-accord","agreement-contract","agreement-grammar"],"The buildings sit in harmony with the surrounding landscape.","这些建筑与周围风景和谐相融。",null,"https://www.merriam-webster.com/dictionary/harmony"],
   ["sense-2","和声","n.",["和声"],["harmony-2","agreement-accord","agreement-contract","agreement-grammar"],"The singers practised the harmony before adding the melody.","歌手们先练习和声，再加入旋律。",null,"https://www.merriam-webster.com/dictionary/harmony"]
  ],[{"terms":["和睦","调和","和声学"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/harmony","reason":"本批 harmony 按所列词性与构式训练：和谐；协调（n.）、和声（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("guideline",[
   ["sense-1","指导原则；准则","n.",["指导原则","准则"],["guideline-1","principle-guiding-rule","principle-scientific-law"],"The guideline recommends a consistent format for the report.","指导原则建议报告采用一致的格式。",null,"https://www.merriam-webster.com/dictionary/guideline"]
  ],[{"terms":["指导路线","方针","指标"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/guideline","reason":"本批 guideline 按所列词性与构式训练：指导原则；准则（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("flourish",[
   ["sense-1","繁荣；茂盛生长","v.",["繁荣","茂盛生长"],["flourish-1","20-related-thrive-flourish","thrive-and-succeed"],"Wild flowers flourish along the abandoned railway.","废弃铁路沿线野花繁盛。",null,"https://www.merriam-webster.com/dictionary/flourish"],
   ["sense-2","挥舞","v.",["挥舞"],["flourish-2","20-related-thrive-flourish","thrive-and-succeed"],"The performer flourished a bright scarf above his head.","表演者在头顶挥舞着一条鲜艳的围巾。",null,"https://www.merriam-webster.com/dictionary/flourish"],
   ["sense-3","装饰性笔画；修饰","n.",["装饰性笔画","修饰"],["flourish-3","20-related-thrive-flourish","thrive-and-succeed"],"Her signature ends with a long flourish.","她的签名以一道长长的花体笔画收尾。",null,"https://www.merriam-webster.com/dictionary/flourish"],
   ["sense-4","夸张潇洒的动作","n.",["夸张潇洒的动作"],["flourish-4","20-related-thrive-flourish","thrive-and-succeed"],"He opened the curtain with a flourish.","他潇洒地一挥手，拉开了窗帘。",null,"https://www.merriam-webster.com/dictionary/flourish"]
  ],[{"terms":["茂盛","活跃","手舞足蹈","夸耀","炫耀","兴旺","华丽词藻"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/flourish","reason":"本批 flourish 按所列词性与构式训练：繁荣；茂盛生长（v.）、挥舞（v.）、装饰性笔画；修饰（n.）、夸张潇洒的动作（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("absence",[
   ["sense-1","缺席；不在场","n.",["缺席","不在场"],["absence-1","absent-1","absent-2","lack-shortage","lack-be-without"],"Her absence from the meeting was unexpected.","她缺席会议出乎意料。",null,"https://www.merriam-webster.com/dictionary/absence"],
   ["sense-2","缺乏；不存在","n.",["缺乏","不存在"],["absence-2","absent-1","absent-2","lack-shortage","lack-be-without"],"The experiment tested growth in the absence of light.","实验测试了缺乏光照时的生长情况。",null,"https://www.merriam-webster.com/dictionary/absence"]
  ],[{"terms":["没有","失神"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/absence","reason":"本批 absence 按所列词性与构式训练：缺席；不在场（n.）、缺乏；不存在（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("quota",[
   ["sense-1","配额；定额","n.",["配额","定额"],["quota-1"],"Each team has a quota of ten samples.","每个团队的定额是十份样本。",null,"https://www.merriam-webster.com/dictionary/quota"]
  ],[{"terms":["限额"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/quota","reason":"本批 quota 按所列词性与构式训练：配额；定额（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("share",[
   ["sense-1","一份；份额","n.",["一份","份额"],["share-1","distribute-share","distribute-spread","distribute-supply"],"Each volunteer received an equal share of the supplies.","每位志愿者都获得了等量的一份物资。",null,"https://www.merriam-webster.com/dictionary/share"],
   ["sense-2","股份；股票","n.",["股份","股票"],["share-2","distribute-share","distribute-spread","distribute-supply"],"The document records the number of shares she owns.","文件记录了她持有的股份数量。",null,"https://www.merriam-webster.com/dictionary/share"],
   ["sense-3","共用；共享","v.",["共用","共享"],["share-3","distribute-share","distribute-spread","distribute-supply"],"The two studios share a small kitchen.","这两间工作室共用一间小厨房。",null,"https://www.merriam-webster.com/dictionary/share"],
   ["sense-4","分担；分配","v.",["分担","分配"],["share-4","distribute-share","distribute-spread","distribute-supply"],"The group shared the cost of hiring the hall.","小组分担了租用大厅的费用。",null,"https://www.merriam-webster.com/dictionary/share"],
   ["sense-5","告诉；分享感受或内容","v.",["告诉","分享感受或内容"],["share-5","distribute-share","distribute-spread","distribute-supply"],"She shared her memories of the village with the class.","她向班级分享了关于村庄的回忆。",null,"https://www.merriam-webster.com/dictionary/share"]
  ],[{"terms":["分担的责任","分享","共有","倾诉","吐露"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/share","reason":"本批 share 按所列词性与构式训练：一份；份额（n.）、股份；股票（n.）、共用；共享（v.）、分担；分配（v.）、告诉；分享感受或内容（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("turnover",[
   ["sense-1","营业额","n.",["营业额"],["turnover-1"],"The report compares turnover in the two shops.","报告比较了两家商店的营业额。",null,"https://www.merriam-webster.com/dictionary/turnover"],
   ["sense-2","人员流动率","n.",["人员流动率"],["turnover-2"],"High staff turnover made training more difficult.","员工流动率高，使培训更困难。",null,"https://www.merriam-webster.com/dictionary/turnover"],
   ["sense-3","库存周转","n.",["库存周转"],["turnover-3"],"The manager tracked stock turnover each month.","经理每月跟踪库存周转情况。",null,"https://www.merriam-webster.com/dictionary/turnover"],
   ["sense-4","球权失误；丧失球权","n.",["球权失误","丧失球权"],["turnover-4"],"The team scored immediately after a turnover.","球队在对方失去球权后立即得分。",null,"https://www.merriam-webster.com/dictionary/turnover"],
   ["sense-5","折叠馅酥饼","n.",["折叠馅酥饼"],["turnover-5"],"The bakery served an apple turnover with the coffee.","面包店配咖啡供应了一个苹果馅酥饼。",null,"https://www.merriam-webster.com/dictionary/turnover"]
  ],[{"terms":["翻倒","翻转","半圆酥饼","流通","周转","可翻转的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/turnover","reason":"本批 turnover 按所列词性与构式训练：营业额（n.）、人员流动率（n.）、库存周转（n.）、球权失误；丧失球权（n.）、折叠馅酥饼（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("dump",[
   ["sense-1","倾倒；随意丢弃","v.",["倾倒","随意丢弃"],["dump-1","discard-throw","remove-abandon","discard-card"],"Someone dumped old furniture beside the lane.","有人把旧家具随意丢在小路旁。",null,"https://www.merriam-webster.com/dictionary/dump"],
   ["sense-2","低价大量出售；倾销","v.",["低价大量出售","倾销"],["dump-2","discard-throw","remove-abandon","discard-card"],"The firm dumped surplus goods on the overseas market.","公司在海外市场低价抛售积压商品。",null,"https://www.merriam-webster.com/dictionary/dump"],
   ["sense-3","转储数据","v.",["转储数据"],["dump-3","discard-throw","remove-abandon","discard-card"],"The program dumps its diagnostic data into a local file.","程序把诊断数据转储到本地文件中。",null,"https://www.merriam-webster.com/dictionary/dump"],
   ["sense-4","垃圾场","n.",["垃圾场"],["dump-4","discard-throw","remove-abandon","discard-card"],"The old dump has been converted into a park.","旧垃圾场已改建为公园。",null,"https://www.merriam-webster.com/dictionary/dump"]
  ],[{"terms":["倒垃圾","倾销商品","转出","转储","倾卸","切断电源"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dump","reason":"本批 dump 按所列词性与构式训练：倾倒；随意丢弃（v.）、低价大量出售；倾销（v.）、转储数据（v.）、垃圾场（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("stock",[
   ["sense-1","库存；备货","n.",["库存","备货"],["stock-1","livestock-1","domestic-bovine-cattle","supply-provide","provide-supply","supply-stock","supply-materials"],"The shop has very little winter stock left.","商店剩下的冬季存货已经很少。",null,"https://www.merriam-webster.com/dictionary/stock"],
   ["sense-2","股票；股本","n.",["股票","股本"],["stock-2","livestock-1","domestic-bovine-cattle","supply-provide","provide-supply","supply-stock","supply-materials"],"The chart shows changes in the company's stock.","图表展示了公司股票的变化。",null,"https://www.merriam-webster.com/dictionary/stock"],
   ["sense-3","牲畜","n.",["牲畜"],["stock-3","livestock-1","domestic-bovine-cattle","supply-provide","provide-supply","supply-stock","supply-materials"],"The farmer moved the stock to a higher field.","农民把牲畜赶到一块地势更高的田地。",null,"https://www.merriam-webster.com/dictionary/stock"],
   ["sense-4","高汤","n.",["高汤"],["stock-4","livestock-1","domestic-bovine-cattle","supply-provide","provide-supply","supply-stock","supply-materials"],"Use vegetable stock as the base for the soup.","用蔬菜高汤作汤底。",null,"https://www.merriam-webster.com/dictionary/stock"],
   ["sense-5","备有货物；进货","v.",["备有货物","进货"],["stock-5","livestock-1","domestic-bovine-cattle","supply-provide","provide-supply","supply-stock","supply-materials"],"The small store stocks basic tools and seeds.","这家小商店备有基本工具和种子。",null,"https://www.merriam-webster.com/dictionary/stock"],
   ["sense-6","常备的；惯常的","adj.",["常备的","惯常的"],["stock-6","livestock-1","domestic-bovine-cattle","supply-provide","provide-supply","supply-stock","supply-materials"],"He gave the same stock answer to every question.","他对每个问题都给出同样的套话回答。",null,"https://www.merriam-webster.com/dictionary/stock"],
   ["sense-7","家系；血统","n.",["家系","血统"],["stock-7","livestock-1","domestic-bovine-cattle","supply-provide","provide-supply","supply-stock","supply-materials"],"The novel traces a family of farming stock.","小说追溯了一个农家出身家庭的历史。",null,"https://www.merriam-webster.com/dictionary/stock"]
  ],[{"terms":["树干","祖先","原料","备料","股份","保留剧目","存货的","平凡的","普通的","股票的","保留剧目的","繁殖用的","装把手于","备有","放牧","出新芽","囤积"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/stock","reason":"本批 stock 按所列词性与构式训练：库存；备货（n.）、股票；股本（n.）、牲畜（n.）、高汤（n.）、备有货物；进货（v.）、常备的；惯常的（adj.）、家系；血统（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("deposit",[
   ["sense-1","银行存款","n.",["银行存款"],["deposit-1"],"The statement lists each deposit made during the month.","对账单列出了这个月的每笔存款。",null,"https://www.merriam-webster.com/dictionary/deposit"],
   ["sense-2","订金；押金","n.",["订金","押金"],["deposit-2"],"The hall booking requires a small deposit.","预订大厅需要支付少量订金。",null,"https://www.merriam-webster.com/dictionary/deposit"],
   ["sense-3","沉积物；矿藏","n.",["沉积物","矿藏"],["deposit-3"],"The survey found a deposit of clay near the river.","勘察在河边发现了一处黏土矿藏。",null,"https://www.merriam-webster.com/dictionary/deposit"],
   ["sense-4","存放；存入","v.",["存放","存入"],["deposit-4"],"He deposited the documents in the archive.","他把文件存放进档案馆。",null,"https://www.merriam-webster.com/dictionary/deposit"],
   ["sense-5","使沉积","v.",["使沉积"],["deposit-5"],"The flood deposited a layer of silt on the fields.","洪水在田地上沉积了一层淤泥。",null,"https://www.merriam-webster.com/dictionary/deposit"]
  ],[{"terms":["存款","定金","堆积物","堆积","沉淀"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/deposit","reason":"本批 deposit 按所列词性与构式训练：银行存款（n.）、订金；押金（n.）、沉积物；矿藏（n.）、存放；存入（v.）、使沉积（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("copper",[
   ["sense-1","铜","n.",["铜"],["copper-1"],"The wire contains a thin core of copper.","这根导线含有一条细铜芯。",null,"https://www.merriam-webster.com/dictionary/copper"],
   ["sense-2","警察（非正式）","n.",["警察（非正式）"],["copper-2"],"In the old novel, a copper waits beside the station.","在这本老小说里，一名警察在车站旁等候。",null,"https://www.merriam-webster.com/dictionary/copper"]
  ],[{"terms":["警察","铜Cu"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/copper","reason":"本批 copper 按所列词性与构式训练：铜（n.）、警察（非正式）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("instalment",[
   ["sense-1","分期付款中的一期款","n.",["分期付款中的一期款"],["instalment-1"],"The final instalment is due next month.","最后一期款项下个月到期。",null,"https://www.merriam-webster.com/dictionary/installment"],
   ["sense-2","连载或系列的一部分","n.",["连载或系列的一部分"],["instalment-2"],"The magazine published the next instalment of the story.","杂志刊登了这个故事的下一期。",null,"https://www.merriam-webster.com/dictionary/installment"]
  ],[{"terms":["分期付款的一期款","分期连载的一部分","分批推出的一集或一部"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/installment","reason":"本批 instalment 按所列词性与构式训练：分期付款中的一期款（n.）、连载或系列的一部分（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cheque",[
   ["sense-1","支票","n.",["支票"],["cheque-1"],"The treasurer wrote a cheque for the hall rental.","财务负责人开了一张支付大厅租金的支票。",null,"https://www.merriam-webster.com/dictionary/check"]
  ],[]);
  entry("incentive",[
   ["sense-1","激励因素；奖励","n.",["激励因素","奖励"],["incentive-1","20-related-impetus-incentive-inspire-motivate","encourage-activity","physiological-stimulus"],"The discount provides an incentive to book early.","折扣鼓励人们提前预订。",null,"https://www.merriam-webster.com/dictionary/incentive"]
  ],[{"terms":["动机","激励的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/incentive","reason":"本批 incentive 按所列词性与构式训练：激励因素；奖励（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("succumb",[
   ["sense-1","屈服；抵挡不住","v.",["屈服","抵挡不住"],["succumb-1","produce-useful-output","investment-return","relinquish-control","traffic-priority","give-under-pressure"],"He refused to succumb to pressure to change the results.","他拒绝向要求更改结果的压力屈服。","succumb to","https://www.merriam-webster.com/dictionary/succumb"],
   ["sense-2","因病或破坏性力量而死亡","v.",["因病或破坏性力量而死亡"],["succumb-2","produce-useful-output","investment-return","relinquish-control","traffic-priority","give-under-pressure"],"Many seedlings succumbed to the severe frost.","许多幼苗在严霜中死亡。","succumb to","https://www.merriam-webster.com/dictionary/succumb"]
  ],[{"terms":["屈从","死"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/succumb","reason":"本批 succumb 按所列词性与构式训练：屈服；抵挡不住（v.）、因病或破坏性力量而死亡（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mortgage",[
   ["sense-1","抵押贷款；抵押权","n.",["抵押贷款","抵押权"],["mortgage-1","solemn-promise","promise-oath","collateral-security","token-of-faith","drinking-toast","promise-solemnly","pawn-deposit"],"The family had nearly repaid the mortgage on the house.","这家人已经快还清房屋抵押贷款。",null,"https://www.merriam-webster.com/dictionary/mortgage"],
   ["sense-2","以财产抵押","v.",["以财产抵押"],["mortgage-2","solemn-promise","promise-oath","collateral-security","token-of-faith","drinking-toast","promise-solemnly","pawn-deposit"],"The character mortgaged his farm to fund the expedition.","故事中的人物抵押了农场来资助考察。",null,"https://www.merriam-webster.com/dictionary/mortgage"]
  ],[{"terms":["抵押","约束性义务","抵押借款","以...作担保","把...许给"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mortgage","reason":"本批 mortgage 按所列词性与构式训练：抵押贷款；抵押权（n.）、以财产抵押（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("access",[
   ["sense-1","进入或使用的机会与权利","n.",["进入或使用的机会与权利"],["access-1","approach-nearer","method-treatment","contact-request","access-route","approximation"],"Students have access to the workshop after class.","学生课后可以使用工坊。","access to","https://www.merriam-webster.com/dictionary/access"],
   ["sense-2","入口；通道","n.",["入口","通道"],["access-2","approach-nearer","method-treatment","contact-request","access-route","approximation"],"The rear lane provides access to the warehouse.","后面的小巷通向仓库。",null,"https://www.merriam-webster.com/dictionary/access"],
   ["sense-3","访问；读取","v.",["访问","读取"],["access-3","approach-nearer","method-treatment","contact-request","access-route","approximation"],"The application can access the files stored on the card.","应用程序可以读取存储卡中的文件。",null,"https://www.merriam-webster.com/dictionary/access"]
  ],[{"terms":["通路","接近","进入","使用权","发作","存取","使用"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/access","reason":"本批 access 按所列词性与构式训练：进入或使用的机会与权利（n.）、入口；通道（n.）、访问；读取（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("ownership",[
   ["sense-1","所有权","n.",["所有权"],["ownership-1"],"The agreement transferred ownership of the building.","协议转移了这座建筑的所有权。",null,"https://www.merriam-webster.com/dictionary/ownership"],
   ["sense-2","承担责任；主人翁意识","n.",["承担责任","主人翁意识"],["ownership-2"],"The team took ownership of the problem.","团队主动承担了解决这个问题的责任。","take ownership of","https://www.merriam-webster.com/dictionary/ownership"]
  ],[{"terms":["物主身份","所有制"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ownership","reason":"本批 ownership 按所列词性与构式训练：所有权（n.）、承担责任；主人翁意识（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("request",[
   ["sense-1","请求；申请","n.",["请求","申请"],["request-1","forceful-request","market-demand","insist-claim","require-need"],"Her request for extra equipment was approved.","她申请增加设备的请求获批了。",null,"https://www.merriam-webster.com/dictionary/request"],
   ["sense-2","请求提供；要求","v.",["请求提供","要求"],["request-2","forceful-request","market-demand","insist-claim","require-need"],"The organiser requested a written reply.","组织者要求作出书面答复。",null,"https://www.merriam-webster.com/dictionary/request"]
  ],[{"terms":["需要","申请书","邀请"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/request","reason":"本批 request 按所列词性与构式训练：请求；申请（n.）、请求提供；要求（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("routine",[
   ["sense-1","惯例；日常程序","n.",["惯例","日常程序"],["routine-1","established-set-of-actions","medical-intervention"],"The new timetable changed her morning routine.","新时间表改变了她早晨的日常安排。",null,"https://www.merriam-webster.com/dictionary/routine"],
   ["sense-2","成套表演动作","n.",["成套表演动作"],["routine-2","established-set-of-actions","medical-intervention"],"The gymnast practised a short floor routine.","体操运动员练习了一套简短的自由体操动作。",null,"https://www.merriam-webster.com/dictionary/routine"],
   ["sense-3","例行的；常规的","adj.",["例行的","常规的"],["routine-3","established-set-of-actions","medical-intervention"],"The engineer carried out a routine inspection.","工程师进行了一次例行检查。",null,"https://www.merriam-webster.com/dictionary/routine"],
   ["sense-4","计算机例程","n.",["计算机例程"],["routine-4","established-set-of-actions","medical-intervention"],"The programmer wrote a routine to sort the measurements.","程序员编写了一个对测量数据排序的例程。",null,"https://www.merriam-webster.com/dictionary/routine"]
  ],[{"terms":["常规","日常工作","例行公事","日常的","例程"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/routine","reason":"本批 routine 按所列词性与构式训练：惯例；日常程序（n.）、成套表演动作（n.）、例行的；常规的（adj.）、计算机例程（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("consequent",[
   ["sense-1","随之产生的；作为结果的","adj.",["随之产生的","作为结果的"],["consequent-1"],"The report records the storm and the consequent flooding.","报告记录了风暴及其导致的洪水。",null,"https://www.merriam-webster.com/dictionary/consequent"]
  ],[{"terms":["随后发生的事情","结果","合乎逻辑的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/consequent","reason":"本批 consequent 按所列词性与构式训练：随之产生的；作为结果的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("falsehood",[
   ["sense-1","谎言；虚假陈述","n.",["谎言","虚假陈述"],["falsehood-1","lie-1","19-related-fraud-trick-liar-lie","lie-2","lie-3","lie-4"],"The correction removed a falsehood from the report.","更正从报告中删去了一条虚假陈述。",null,"https://www.merriam-webster.com/dictionary/falsehood"]
  ],[{"terms":["虚假(性)","虚伪陈述","谬误"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/falsehood","reason":"本批 falsehood 按所列词性与构式训练：谎言；虚假陈述（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("instruction",[
   ["sense-1","操作说明（常用复数）","n.",["操作说明（常用复数）"],["instruction-1","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"The instructions explain how to fit the replacement part.","说明书解释了如何安装替换部件。","instructions","https://www.merriam-webster.com/dictionary/instruction"],
   ["sense-2","指令；命令","n.",["指令","命令"],["instruction-2","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"The crew followed the captain's instruction to return.","船员遵照船长返回的命令。",null,"https://www.merriam-webster.com/dictionary/instruction"],
   ["sense-3","教学；指导","n.",["教学","指导"],["instruction-3","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"The beginners received instruction in basic drawing.","初学者接受了基础绘画指导。",null,"https://www.merriam-webster.com/dictionary/instruction"],
   ["sense-4","计算机指令","n.",["计算机指令"],["instruction-4","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"The processor executes one instruction from the program.","处理器执行程序中的一条指令。",null,"https://www.merriam-webster.com/dictionary/instruction"]
  ],[{"terms":["教导"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/instruction","reason":"本批 instruction 按所列词性与构式训练：操作说明（常用复数）（n.）、指令；命令（n.）、教学；指导（n.）、计算机指令（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("violence",[
   ["sense-1","暴力行为","n.",["暴力行为"],["violence-1"],"The witnesses described the violence outside the stadium.","目击者描述了体育场外发生的暴力行为。",null,"https://www.merriam-webster.com/dictionary/violence"],
   ["sense-2","猛烈；强烈破坏力","n.",["猛烈","强烈破坏力"],["violence-2"],"The violence of the storm surprised the crew.","风暴之猛烈令船员吃惊。",null,"https://www.merriam-webster.com/dictionary/violence"]
  ],[{"terms":["暴力","暴虐","暴行","暴乱"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/violence","reason":"本批 violence 按所列词性与构式训练：暴力行为（n.）、猛烈；强烈破坏力（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bombard",[
   ["sense-1","炮击；轰炸","v.",["炮击","轰炸"],["bombard-1","military-offensive","verbal-criticism","tackle-task-vigorously","assault-1","assault-2"],"The history chapter describes how the fleet bombarded the fort.","历史章节描述了舰队如何炮击堡垒。",null,"https://www.merriam-webster.com/dictionary/bombard"],
   ["sense-2","以大量问题或信息围攻","v.",["以大量问题或信息围攻"],["bombard-2","military-offensive","verbal-criticism","tackle-task-vigorously","assault-1","assault-2"],"The speaker was bombarded with questions after the lecture.","演讲后，听众向主讲人提出了接连不断的问题。","bombard with","https://www.merriam-webster.com/dictionary/bombard"],
   ["sense-3","用高速粒子轰击","v.",["用高速粒子轰击"],["bombard-3","military-offensive","verbal-criticism","tackle-task-vigorously","assault-1","assault-2"],"The experiment bombards a thin target with electrons.","实验用电子轰击一个薄靶。",null,"https://www.merriam-webster.com/dictionary/bombard"]
  ],[{"terms":["攻击","轰击","射石炮"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bombard","reason":"当前 /bɒmˈbɑːd/ 采用炮击、信息围攻及粒子轰击动词；通常首音节重读的古炮名词不混入。本批 bombard 按所列词性与构式训练：炮击；轰炸（v.）、以大量问题或信息围攻（v.）、用高速粒子轰击（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("terrific",[
   ["sense-1","极好的（非正式）","adj.",["极好的（非正式）"],["terrific-1","marvelous-1","splendid-magnificent","17-shine","splendid-excellent","exceptional-excellence","fantastic-excellent","excellent-quality","fantastic-imaginary","fantastic-unbelievable"],"The actors gave a terrific performance.","演员们奉献了一场精彩的演出。",null,"https://www.merriam-webster.com/dictionary/terrific"],
   ["sense-2","极大的；强烈的","adj.",["极大的","强烈的"],["terrific-2","marvelous-1","splendid-magnificent","17-shine","splendid-excellent","exceptional-excellence","fantastic-excellent","excellent-quality","fantastic-imaginary","fantastic-unbelievable"],"The engine made a terrific noise during the test.","测试时，发动机发出巨大的噪声。",null,"https://www.merriam-webster.com/dictionary/terrific"]
  ],[{"terms":["非常好的","极端的","可怕的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/terrific","reason":"本批 terrific 按所列词性与构式训练：极好的（非正式）（adj.）、极大的；强烈的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("turmoil",[
   ["sense-1","混乱；骚动","n.",["混乱","骚动"],["turmoil-1","20-related-turmoil-turbulence"],"The sudden closure threw the organisation into turmoil.","突然关闭使这个组织陷入混乱。",null,"https://www.merriam-webster.com/dictionary/turmoil"]
  ],[]);
  entry("scenario",[
   ["sense-1","设想的情境；事态发展","n.",["设想的情境","事态发展"],["scenario-1","situation-1","situation-2"],"The exercise asks each group to consider a different scenario.","练习要求每组考虑一种不同的情境。",null,"https://www.merriam-webster.com/dictionary/scenario"],
   ["sense-2","剧情提纲；脚本","n.",["剧情提纲","脚本"],["scenario-2","situation-1","situation-2"],"The director revised the scenario before filming began.","导演在拍摄开始前修改了剧情提纲。",null,"https://www.merriam-webster.com/dictionary/scenario"]
  ],[{"terms":["剧本提纲","情节","剧本","方案","事态"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/scenario","reason":"本批 scenario 按所列词性与构式训练：设想的情境；事态发展（n.）、剧情提纲；脚本（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("limit",[
   ["sense-1","限度；上限","n.",["限度","上限"],["limit-1","20-related-limit-boundary","impose-limits","restrict-to-limits","keep-within-place","outer-limits"],"The permit sets a limit on the number of visitors.","许可证规定了游客人数上限。",null,"https://www.merriam-webster.com/dictionary/limit"],
   ["sense-2","限制","v.",["限制"],["limit-2","20-related-limit-boundary","impose-limits","restrict-to-limits","keep-within-place","outer-limits"],"The narrow doorway limits the size of the equipment.","狭窄的门口限制了设备尺寸。",null,"https://www.merriam-webster.com/dictionary/limit"]
  ],[{"terms":["界限","边界","极限","限定"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/limit","reason":"本批 limit 按所列词性与构式训练：限度；上限（n.）、限制（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("boundary",[
   ["sense-1","边界；分界线","n.",["边界","分界线"],["boundary-1","20-related-limit-boundary"],"A row of stones marks the boundary of the field.","一排石头标出了田地边界。",null,"https://www.merriam-webster.com/dictionary/boundary"]
  ],[]);
  entry("turbulence",[
   ["sense-1","气流颠簸；紊流","n.",["气流颠簸","紊流"],["turbulence-1","20-related-turmoil-turbulence"],"The aircraft encountered turbulence above the mountains.","飞机在群山上方遇到了紊乱气流。",null,"https://www.merriam-webster.com/dictionary/turbulence"],
   ["sense-2","社会或局势动荡","n.",["社会或局势动荡"],["turbulence-2","20-related-turmoil-turbulence"],"The novel is set during a period of political turbulence.","小说以政治动荡时期为背景。",null,"https://www.merriam-webster.com/dictionary/turbulence"]
  ],[{"terms":["混乱","动荡","骚乱","湍流"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/turbulence","reason":"本批 turbulence 按所列词性与构式训练：气流颠簸；紊流（n.）、社会或局势动荡（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("occasionally",[
   ["sense-1","偶尔；间或","adv.",["偶尔","间或"],["occasionally-1"],"The old clock occasionally stops during cold weather.","天气寒冷时，那座老钟偶尔会停。",null,"https://www.merriam-webster.com/dictionary/occasionally"]
  ],[{"terms":["有时候","偶而"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/occasionally","reason":"本批 occasionally 按所列词性与构式训练：偶尔；间或（adv.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("dreadful",[
   ["sense-1","可怕的；令人恐惧的","adj.",["可怕的","令人恐惧的"],["dreadful-1","terrible-1","horrible-awful","horrible-unpleasant","unpleasant-experience","nasty-unpleasant"],"The noise gave them a dreadful sense of danger.","那个声音让他们产生了可怕的危险感。",null,"https://www.merriam-webster.com/dictionary/dreadful"],
   ["sense-2","糟透的；极差的","adj.",["糟透的","极差的"],["dreadful-2","terrible-1","horrible-awful","horrible-unpleasant","unpleasant-experience","nasty-unpleasant"],"The room was in a dreadful state after the leak.","漏水后，房间的状况糟透了。",null,"https://www.merriam-webster.com/dictionary/dreadful"]
  ],[]);
  entry("tactic",[
   ["sense-1","策略；战术","n.",["策略","战术"],["tactic-1","strategy-plan"],"Their tactic was to save energy for the final stage.","他们的策略是为最后阶段保存体力。",null,"https://www.merriam-webster.com/dictionary/tactic"]
  ],[{"terms":["一项战术","一条策略","战术的","顺序的","排列的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tactic","reason":"本批 tactic 按所列词性与构式训练：策略；战术（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("contend",[
   ["sense-1","竞争；争夺","v.",["竞争","争夺"],["contend-1","compete-rival","argue-disagree","argue-reason","argue-indicate","state-firmly","exercise-rights-authority","confident-self-expression"],"Several teams will contend for the same prize.","几个团队将争夺同一个奖项。","contend for","https://www.merriam-webster.com/dictionary/contend"],
   ["sense-2","应对；与困难斗争","v.",["应对","与困难斗争"],["contend-2","compete-rival","argue-disagree","argue-reason","argue-indicate","state-firmly","exercise-rights-authority","confident-self-expression"],"The builders had to contend with frequent delays.","施工人员不得不应对频繁的延误。","contend with","https://www.merriam-webster.com/dictionary/contend"],
   ["sense-3","主张；坚称","v.",["主张","坚称"],["contend-3","compete-rival","argue-disagree","argue-reason","argue-indicate","state-firmly","exercise-rights-authority","confident-self-expression"],"The author contends that the change was gradual.","作者主张这种变化是逐渐发生的。",null,"https://www.merriam-webster.com/dictionary/contend"]
  ],[{"terms":["奋斗","斗争","为...斗争"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/contend","reason":"本批 contend 按所列词性与构式训练：竞争；争夺（v.）、应对；与困难斗争（v.）、主张；坚称（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("blueprint",[
   ["sense-1","蓝图；工程设计图","n.",["蓝图","工程设计图"],["blueprint-1"],"The blueprint shows the position of each support beam.","蓝图标出了每根支撑梁的位置。",null,"https://www.merriam-webster.com/dictionary/blueprint"],
   ["sense-2","详细计划；行动方案","n.",["详细计划","行动方案"],["blueprint-2"],"The report offers a blueprint for restoring the wetland.","报告提供了一份修复湿地的详细方案。",null,"https://www.merriam-webster.com/dictionary/blueprint"]
  ],[{"terms":["设计图","(周详的)计划","制成蓝图","计划"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/blueprint","reason":"本批 blueprint 按所列词性与构式训练：蓝图；工程设计图（n.）、详细计划；行动方案（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("counsellor",[
   ["sense-1","辅导员；咨询顾问","n.",["辅导员","咨询顾问"],["counsellor-1","lawyer-profession","legal-professional"],"The school counsellor helped her choose suitable courses.","学校辅导员帮助她选择合适的课程。",null,"https://www.merriam-webster.com/dictionary/counselor"],
   ["sense-2","律师；法律顾问","n.",["律师","法律顾问"],["counsellor-2","lawyer-profession","legal-professional"],"The character spoke privately with his legal counsellor.","故事中的人物私下与法律顾问交谈。",null,"https://www.merriam-webster.com/dictionary/counselor"]
  ],[{"terms":["顾问"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/counselor","reason":"本批 counsellor 按所列词性与构式训练：辅导员；咨询顾问（n.）、律师；法律顾问（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("solicitor",[
   ["sense-1","事务律师（英国等地）","n.",["事务律师（英国等地）"],["solicitor-1","lawyer-profession","legal-professional"],"The solicitor prepared the documents for the client.","事务律师为委托人准备了文件。",null,"https://www.merriam-webster.com/dictionary/solicitor"],
   ["sense-2","募捐或招揽业务者","n.",["募捐或招揽业务者"],["solicitor-2","lawyer-profession","legal-professional"],"The notice asks solicitors not to knock on the door.","告示要求招揽业务者不要敲门。",null,"https://www.merriam-webster.com/dictionary/solicitor"]
  ],[{"terms":["(英)律师","初级律师","(美)法务官","(美)掮客","游说者","(美)募捐者","募损者","律师"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/solicitor","reason":"本批 solicitor 按所列词性与构式训练：事务律师（英国等地）（n.）、募捐或招揽业务者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("umpire",[
   ["sense-1","体育裁判","n.",["体育裁判"],["umpire-1"],"The umpire paused the match when the rain began.","开始下雨时，裁判暂停了比赛。",null,"https://www.merriam-webster.com/dictionary/umpire"],
   ["sense-2","担任裁判","v.",["担任裁判"],["umpire-2"],"She umpired the local cricket match.","她担任了当地板球比赛的裁判。",null,"https://www.merriam-webster.com/dictionary/umpire"]
  ],[{"terms":["裁判员","仲裁人","对...进行仲裁","当...的裁判","当裁判"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/umpire","reason":"本批 umpire 按所列词性与构式训练：体育裁判（n.）、担任裁判（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cashier",[
   ["sense-1","收银员；出纳员","n.",["收银员","出纳员"],["cashier-1"],"The cashier checked the total before printing the receipt.","收银员在打印收据前核对了总额。",null,"https://www.merriam-webster.com/dictionary/cashier"],
   ["sense-2","撤职；开除军籍","v.",["撤职","开除军籍"],["cashier-2"],"The officer was cashiered after the inquiry.","调查结束后，那名军官被开除了军籍。",null,"https://www.merriam-webster.com/dictionary/cashier"]
  ],[{"terms":["司库","收支员"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cashier","reason":"本批 cashier 按所列词性与构式训练：收银员；出纳员（n.）、撤职；开除军籍（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("groom",[
   ["sense-1","新郎","n.",["新郎"],["groom-1","prepare-make-ready","prepare-make-food","prepare-write"],"The groom waited beside the garden gate.","新郎在花园门旁等候。",null,"https://www.merriam-webster.com/dictionary/groom"],
   ["sense-2","马夫","n.",["马夫"],["groom-2","prepare-make-ready","prepare-make-food","prepare-write"],"The groom prepared the horses for the morning ride.","马夫为早晨的骑行准备好了马匹。",null,"https://www.merriam-webster.com/dictionary/groom"],
   ["sense-3","梳洗；清洁毛发","v.",["梳洗","清洁毛发"],["groom-3","prepare-make-ready","prepare-make-food","prepare-write"],"The cat groomed its fur in the sunlight.","猫在阳光下梳理毛发。",null,"https://www.merriam-webster.com/dictionary/groom"],
   ["sense-4","培养；使为特定职位做准备","v.",["培养","使为特定职位做准备"],["groom-4","prepare-make-ready","prepare-make-food","prepare-write"],"She was being groomed to lead the research team.","她正被培养为研究团队负责人。","groom for / to do","https://www.merriam-webster.com/dictionary/groom"],
   ["sense-5","为实施侵害而诱骗建立信任","v.",["为实施侵害而诱骗建立信任"],["groom-5","prepare-make-ready","prepare-make-food","prepare-write"],"The report states that the offender had groomed the teenager.","报告称，施害者曾通过建立信任诱骗这名青少年。",null,"https://www.merriam-webster.com/dictionary/groom"]
  ],[{"terms":["男仆","喂马","使...整洁","推荐","打扮","穿戴"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/groom","reason":"本批 groom 按所列词性与构式训练：新郎（n.）、马夫（n.）、梳洗；清洁毛发（v.）、培养；使为特定职位做准备（v.）、为实施侵害而诱骗建立信任（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("coward",[
   ["sense-1","胆小鬼；懦夫（贬义）","n.",["胆小鬼","懦夫（贬义）"],["coward-1","timid-shy"],"The story asks whether refusing a fight makes someone a coward.","这个故事探讨拒绝打架是否就意味着是懦夫。",null,"https://www.merriam-webster.com/dictionary/coward"]
  ],[{"terms":["懦弱的人","胆小的人"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/coward","reason":"本批 coward 按所列词性与构式训练：胆小鬼；懦夫（贬义）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("hostage",[
   ["sense-1","人质","n.",["人质"],["hostage-1","confined-prisoner","inescapable-audience","captivated-attention"],"The negotiator confirmed that the hostage had been released.","谈判者确认人质已获释。",null,"https://www.merriam-webster.com/dictionary/hostage"]
  ],[{"terms":["抵押品"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/hostage","reason":"本批 hostage 按所列词性与构式训练：人质（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("beggar",[
   ["sense-1","乞讨者（有时含贬义）","n.",["乞讨者（有时含贬义）"],["beggar-1"],"The novel follows a beggar searching for shelter.","小说讲述了一名乞讨者寻找栖身处的故事。",null,"https://www.merriam-webster.com/dictionary/beggar"],
   ["sense-2","使陷入贫困","v.",["使陷入贫困"],["beggar-2"],"The prolonged conflict beggared the region.","长期冲突使这个地区陷入贫困。",null,"https://www.merriam-webster.com/dictionary/beggar"],
   ["sense-3","超出表达或想象的能力","v.",["超出表达或想象的能力"],["beggar-3"],"The scale of the damage beggars belief.","损害的规模令人难以置信。","beggar belief","https://www.merriam-webster.com/dictionary/beggar"]
  ],[{"terms":["乞丐","使贫穷","使成乞丐"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/beggar","reason":"本批 beggar 按所列词性与构式训练：乞讨者（有时含贬义）（n.）、使陷入贫困（v.）、超出表达或想象的能力（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("behave",[
   ["sense-1","表现；以某种方式运作","v.",["表现","以某种方式运作"],["behave-1","act-do","act-perform","act-behave","act-serve","act-deed","act-law","act-division"],"The material behaves differently at low temperatures.","这种材料在低温下表现不同。",null,"https://www.merriam-webster.com/dictionary/behave"],
   ["sense-2","举止规矩","v.",["举止规矩"],["behave-2","act-do","act-perform","act-behave","act-serve","act-deed","act-law","act-division"],"The children behaved well during the long ceremony.","孩子们在漫长的仪式中举止规矩。",null,"https://www.merriam-webster.com/dictionary/behave"]
  ],[{"terms":["举止端正","行为规矩","检点(自己的)行为","使表现好"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/behave","reason":"本批 behave 按所列词性与构式训练：表现；以某种方式运作（v.）、举止规矩（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("respond",[
   ["sense-1","回答；回应","v.",["回答","回应"],["respond-1","reply-respond","reply-answer","react-respond","react-chemical"],"The curator responded to the visitor's question.","馆长回答了访客的问题。",null,"https://www.merriam-webster.com/dictionary/respond"],
   ["sense-2","作出反应","v.",["作出反应"],["respond-2","reply-respond","reply-answer","react-respond","react-chemical"],"The plant responds quickly to changes in light.","这种植物对光照变化反应很快。",null,"https://www.merriam-webster.com/dictionary/respond"]
  ],[{"terms":["以...回答","响应","回报","有反应","承担责任"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/respond","reason":"本批 respond 按所列词性与构式训练：回答；回应（v.）、作出反应（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("exhale",[
   ["sense-1","呼出；呼气","v.",["呼出","呼气"],["exhale-1"],"She exhaled slowly before beginning the speech.","她在演讲开始前缓缓呼气。",null,"https://www.merriam-webster.com/dictionary/exhale"],
   ["sense-2","散发气体或气味","v.",["散发气体或气味"],["exhale-2"],"The warm soil exhaled a damp, earthy smell.","温热的土壤散发出潮湿的泥土气味。",null,"https://www.merriam-webster.com/dictionary/exhale"]
  ],[{"terms":["发出","散发"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/exhale","reason":"本批 exhale 按所列词性与构式训练：呼出；呼气（v.）、散发气体或气味（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("revenge",[
   ["sense-1","报复；复仇","n.",["报复","复仇"],["revenge-1"],"The plot centres on a dispute driven by revenge.","情节围绕一场由复仇引发的争端展开。",null,"https://www.merriam-webster.com/dictionary/revenge"],
   ["sense-2","为自己报仇","v.",["为自己报仇"],["revenge-2"],"The defeated player hoped to revenge himself in the return match.","落败的选手希望在第二回合比赛中一雪前耻。","revenge oneself","https://www.merriam-webster.com/dictionary/revenge"]
  ],[{"terms":["报仇"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/revenge","reason":"本批 revenge 按所列词性与构式训练：报复；复仇（n.）、为自己报仇（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("kidnap",[
   ["sense-1","绑架；非法劫走","v.",["绑架","非法劫走"],["kidnap-1"],"The film begins after the ambassador has been kidnapped.","影片从大使遭绑架之后开始。",null,"https://www.merriam-webster.com/dictionary/kidnap"]
  ],[{"terms":["诱拐","拐骗","拐带"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/kidnap","reason":"本批 kidnap 按所列词性与构式训练：绑架；非法劫走（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("hijack",[
   ["sense-1","劫持交通工具","v.",["劫持交通工具"],["hijack-1"],"The novel describes an attempt to hijack a cargo plane.","小说描述了一次劫持货机的企图。",null,"https://www.merriam-webster.com/dictionary/hijack"],
   ["sense-2","强行控制或转移话题","v.",["强行控制或转移话题"],["hijack-2"],"One participant tried to hijack the discussion for his own campaign.","一名参与者试图把讨论引向他自己的宣传活动。",null,"https://www.merriam-webster.com/dictionary/hijack"]
  ],[{"terms":["抢劫","劫持","敲诈","挡路抢劫","绑架"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/hijack","reason":"本批 hijack 按所列词性与构式训练：劫持交通工具（v.）、强行控制或转移话题（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("smuggler",[
   ["sense-1","走私者","n.",["走私者"],["smuggler-1","smuggle-contraband"],"The museum display explains how the smuggler was caught.","博物馆展板说明了那名走私者如何落网。",null,"https://www.merriam-webster.com/dictionary/smuggler"]
  ],[{"terms":["走私船"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/smuggler","reason":"本批 smuggler 按所列词性与构式训练：走私者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bait",[
   ["sense-1","诱饵","n.",["诱饵"],["bait-1","20-related-allure-temptation-lure-bait","tease-mock","tease-separate","tease-person"],"The angler placed fresh bait on the hook.","钓鱼者在鱼钩上放上新鲜诱饵。",null,"https://www.merriam-webster.com/dictionary/bait"],
   ["sense-2","装上诱饵；以诱饵吸引","v.",["装上诱饵","以诱饵吸引"],["bait-2","20-related-allure-temptation-lure-bait","tease-mock","tease-separate","tease-person"],"He baited the trap before leaving the shed.","他离开棚屋前给捕捉器装上了诱饵。",null,"https://www.merriam-webster.com/dictionary/bait"],
   ["sense-3","故意激怒；挑衅","v.",["故意激怒","挑衅"],["bait-3","20-related-allure-temptation-lure-bait","tease-mock","tease-separate","tease-person"],"The interviewer refused to bait the guest with insults.","采访者拒绝用侮辱性的话挑衅嘉宾。",null,"https://www.merriam-webster.com/dictionary/bait"]
  ],[{"terms":["饵","以饵引诱","欺负","中途休息"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bait","reason":"本批 bait 按所列词性与构式训练：诱饵（n.）、装上诱饵；以诱饵吸引（v.）、故意激怒；挑衅（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("strangle",[
   ["sense-1","勒住喉咙使窒息","v.",["勒住喉咙使窒息"],["strangle-1","choke-1","block-solid-piece","block-city-area","block-building","block-obstruct","choke-2","choke-3"],"The detective concluded that the victim had been strangled.","侦探断定受害者是被勒死的。",null,"https://www.merriam-webster.com/dictionary/strangle"],
   ["sense-2","压制；扼杀发展","v.",["压制","扼杀发展"],["strangle-2","choke-1","block-solid-piece","block-city-area","block-building","block-obstruct","choke-2","choke-3"],"The lack of funds strangled the project at an early stage.","资金短缺在早期就扼杀了项目的发展。",null,"https://www.merriam-webster.com/dictionary/strangle"]
  ],[{"terms":["勒死","扼死","使窒息","抑制","被扼死","被绞死","窒息而死"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/strangle","reason":"本批 strangle 按所列词性与构式训练：勒住喉咙使窒息（v.）、压制；扼杀发展（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("massacre",[
   ["sense-1","大屠杀","n.",["大屠杀"],["massacre-1"],"The memorial records the names of those killed in the massacre.","纪念碑记载了大屠杀遇难者的姓名。",null,"https://www.merriam-webster.com/dictionary/massacre"],
   ["sense-2","大批残杀","v.",["大批残杀"],["massacre-2"],"The history book describes how civilians were massacred.","历史书描述了平民遭到大批残杀的情况。",null,"https://www.merriam-webster.com/dictionary/massacre"]
  ],[{"terms":["残杀"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/massacre","reason":"本批 massacre 按所列词性与构式训练：大屠杀（n.）、大批残杀（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("impede",[
   ["sense-1","阻碍；拖慢","v.",["阻碍","拖慢"],["impede-1","obstruct-block","obstruct-hinder","prevent-1"],"Fallen trees impeded progress along the road.","倒下的树木阻碍了沿路前进。",null,"https://www.merriam-webster.com/dictionary/impede"]
  ],[{"terms":["妨碍","阻止"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/impede","reason":"本批 impede 按所列词性与构式训练：阻碍；拖慢（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("allure",[
   ["sense-1","吸引力；魅力","n.",["吸引力","魅力"],["allure-1","20-related-allure-temptation-lure-bait","attract-draw","attract-entice","attract-physical","physical-attractive-force"],"The old harbour has an allure that modern resorts lack.","老港口有一种现代度假地缺少的魅力。",null,"https://www.merriam-webster.com/dictionary/allure"],
   ["sense-2","以魅力吸引","v.",["以魅力吸引"],["allure-2","20-related-allure-temptation-lure-bait","attract-draw","attract-entice","attract-physical","physical-attractive-force"],"The promise of discovery allured the young explorers.","有所发现的希望吸引着年轻的探险者。",null,"https://www.merriam-webster.com/dictionary/allure"]
  ],[{"terms":["引诱","吸引","诱惑力"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/allure","reason":"本批 allure 按所列词性与构式训练：吸引力；魅力（n.）、以魅力吸引（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("temptation",[
   ["sense-1","诱惑；想做某事的冲动","n.",["诱惑","想做某事的冲动"],["temptation-1","20-related-allure-temptation-lure-bait"],"She resisted the temptation to read the final page first.","她抵住了先读最后一页的诱惑。",null,"https://www.merriam-webster.com/dictionary/temptation"],
   ["sense-2","诱惑物","n.",["诱惑物"],["temptation-2","20-related-allure-temptation-lure-bait"],"The cakes in the window were a constant temptation.","橱窗里的蛋糕一直很诱人。",null,"https://www.merriam-webster.com/dictionary/temptation"]
  ],[]);
  entry("lure",[
   ["sense-1","诱饵；引诱物","n.",["诱饵","引诱物"],["lure-1","20-related-allure-temptation-lure-bait","attract-draw","attract-entice","attract-physical","physical-attractive-force"],"The fisherman chose a bright artificial lure.","渔夫选了一个鲜艳的人工鱼饵。",null,"https://www.merriam-webster.com/dictionary/lure"],
   ["sense-2","吸引力","n.",["吸引力"],["lure-2","20-related-allure-temptation-lure-bait","attract-draw","attract-entice","attract-physical","physical-attractive-force"],"The lure of a quieter life drew them to the village.","宁静生活的吸引力促使他们来到村庄。",null,"https://www.merriam-webster.com/dictionary/lure"],
   ["sense-3","引诱；吸引","v.",["引诱","吸引"],["lure-3","20-related-allure-temptation-lure-bait","attract-draw","attract-entice","attract-physical","physical-attractive-force"],"The new gallery lured visitors away from the crowded centre.","新画廊吸引游客离开了拥挤的中心区。",null,"https://www.merriam-webster.com/dictionary/lure"]
  ],[{"terms":["饵","诱惑"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/lure","reason":"本批 lure 按所列词性与构式训练：诱饵；引诱物（n.）、吸引力（n.）、引诱；吸引（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("demise",[
   ["sense-1","死亡（正式）","n.",["死亡（正式）"],["demise-1","20-related-demise-death-perish"],"The biography ends with the poet's demise.","传记以诗人的去世作结。",null,"https://www.merriam-webster.com/dictionary/demise"],
   ["sense-2","终结；消亡","n.",["终结","消亡"],["demise-2","20-related-demise-death-perish"],"The article explains the demise of the old shipping route.","文章解释了旧航线的消亡。",null,"https://www.merriam-webster.com/dictionary/demise"]
  ],[{"terms":["崩","薨","死亡","让渡","遗赠","转让"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/demise","reason":"本批 demise 按所列词性与构式训练：死亡（正式）（n.）、终结；消亡（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bruise",[
   ["sense-1","瘀伤；青肿","n.",["瘀伤","青肿"],["bruise-1","hurt-1","19-related-injure-hurt","damage-harm-noun","damage-harm-verb","damage-compensation","hurt-2","hurt-3","hurt-4","injure-1","injury-cut","injure-physically","hurt-feelings"],"A small bruise appeared on her knee after the fall.","摔倒后，她的膝盖上出现了一小块瘀青。",null,"https://www.merriam-webster.com/dictionary/bruise"],
   ["sense-2","使瘀伤；碰伤","v.",["使瘀伤","碰伤"],["bruise-2","hurt-1","19-related-injure-hurt","damage-harm-noun","damage-harm-verb","damage-compensation","hurt-2","hurt-3","hurt-4","injure-1","injury-cut","injure-physically","hurt-feelings"],"The fruit bruises easily during transport.","这种水果在运输中容易碰伤。",null,"https://www.merriam-webster.com/dictionary/bruise"],
   ["sense-3","伤害感情或自尊","v.",["伤害感情或自尊"],["bruise-3","hurt-1","19-related-injure-hurt","damage-harm-noun","damage-harm-verb","damage-compensation","hurt-2","hurt-3","hurt-4","injure-1","injury-cut","injure-physically","hurt-feelings"],"The rejection bruised his confidence.","拒绝挫伤了他的信心。",null,"https://www.merriam-webster.com/dictionary/bruise"]
  ],[{"terms":["挫伤","擦伤","受伤","使受伤","研碎"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bruise","reason":"本批 bruise 按所列词性与构式训练：瘀伤；青肿（n.）、使瘀伤；碰伤（v.）、伤害感情或自尊（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("scar",[
   ["sense-1","伤疤；疤痕","n.",["伤疤","疤痕"],["scar-1","mark-1","mark-2","mark-3","mark-4","mark-5","score-assess","injury-cut","injure-physically","hurt-feelings"],"A pale scar remained on his hand.","他的手上留着一道淡色伤疤。",null,"https://www.merriam-webster.com/dictionary/scar"],
   ["sense-2","精神创伤","n.",["精神创伤"],["scar-2","mark-1","mark-2","mark-3","mark-4","mark-5","score-assess","injury-cut","injure-physically","hurt-feelings"],"The experience left a lasting scar on the community.","那次经历给社区留下了持久的精神创伤。",null,"https://www.merriam-webster.com/dictionary/scar"],
   ["sense-3","使留下伤痕；结疤","v.",["使留下伤痕","结疤"],["scar-3","mark-1","mark-2","mark-3","mark-4","mark-5","score-assess","injury-cut","injure-physically","hurt-feelings"],"The fire scarred the trunks of the older trees.","火灾在老树树干上留下了伤痕。",null,"https://www.merriam-webster.com/dictionary/scar"]
  ],[{"terms":["伤痕","悬崖","愈合","痊愈","使有伤痕"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/scar","reason":"本批 scar 按所列词性与构式训练：伤疤；疤痕（n.）、精神创伤（n.）、使留下伤痕；结疤（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fatal",[
   ["sense-1","致命的","adj.",["致命的"],["fatal-1","causing-death"],"The investigation examined a fatal accident at the crossing.","调查审查了道口发生的一起致命事故。",null,"https://www.merriam-webster.com/dictionary/fatal"],
   ["sense-2","导致失败或毁灭的","adj.",["导致失败或毁灭的"],["fatal-2","causing-death"],"The reviewer identified a fatal flaw in the argument.","评审者指出了论证中的一个致命缺陷。",null,"https://www.merriam-webster.com/dictionary/fatal"]
  ],[{"terms":["重大的","命运注定的","粗心的","不幸的","致死的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fatal","reason":"本批 fatal 按所列词性与构式训练：致命的（adj.）、导致失败或毁灭的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("overwork",[
   ["sense-1","使工作过度；过分劳累","v.",["使工作过度","过分劳累"],["overwork-1","20-related-tire-tired-exhaust-fatigue-overwork"],"The schedule overworked the small maintenance team.","这个日程使小型维修团队过度劳累。",null,"https://www.merriam-webster.com/dictionary/overwork"],
   ["sense-2","过度使用或加工","v.",["过度使用或加工"],["overwork-2","20-related-tire-tired-exhaust-fatigue-overwork"],"Do not overwork the dough once it becomes smooth.","面团变光滑后，不要过度揉搓。",null,"https://www.merriam-webster.com/dictionary/overwork"],
   ["sense-3","过度工作","n.",["过度工作"],["overwork-3","20-related-tire-tired-exhaust-fatigue-overwork"],"The report linked the mistakes to overwork.","报告把这些错误与过度工作联系起来。",null,"https://www.merriam-webster.com/dictionary/overwork"]
  ],[{"terms":["过度操劳的工作","额外工作","(使)工作过度","使过分劳累"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/overwork","reason":"本批 overwork 按所列词性与构式训练：使工作过度；过分劳累（v.）、过度使用或加工（v.）、过度工作（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("death",[
   ["sense-1","死亡；去世","n.",["死亡","去世"],["death-1","20-related-demise-death-perish"],"The museum opened a year after the artist's death.","博物馆在艺术家去世一年后开放。",null,"https://www.merriam-webster.com/dictionary/death"],
   ["sense-2","事物的终结或消失","n.",["事物的终结或消失"],["death-2","20-related-demise-death-perish"],"The closure marked the death of the town's rail service.","关闭标志着小镇铁路服务的终结。",null,"https://www.merriam-webster.com/dictionary/death"]
  ],[]);
  entry("tire",[
   ["sense-1","轮胎（美式拼写）","n.",["轮胎（美式拼写）"],["tire-1","20-related-tire-tired-exhaust-fatigue-overwork","bore-drill","drill-bore","bore-dull","bore-person","bore-diameter","bore-hole"],"The mechanic replaced the damaged tire.","修理工更换了损坏的轮胎。",null,"https://www.merriam-webster.com/dictionary/tire"],
   ["sense-2","使疲倦；感到疲劳","v.",["使疲倦","感到疲劳"],["tire-2","20-related-tire-tired-exhaust-fatigue-overwork","bore-drill","drill-bore","bore-dull","bore-person","bore-diameter","bore-hole"],"The steep climb tired the walkers.","陡峭的攀登使步行者疲倦。",null,"https://www.merriam-webster.com/dictionary/tire"],
   ["sense-3","厌倦","v.",["厌倦"],["tire-3","20-related-tire-tired-exhaust-fatigue-overwork","bore-drill","drill-bore","bore-dull","bore-person","bore-diameter","bore-hole"],"The children soon tired of the repetitive game.","孩子们很快厌倦了这个重复的游戏。","tire of","https://www.merriam-webster.com/dictionary/tire"]
  ],[{"terms":["轮胎","头饰","使厌烦","打扮","疲劳"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tire","reason":"轮胎使用本词的美式拼写 tire；英式常写 tyre。不混入古旧头饰义。本批 tire 按所列词性与构式训练：轮胎（美式拼写）（n.）、使疲倦；感到疲劳（v.）、厌倦（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("tired",[
   ["sense-1","疲倦的","adj.",["疲倦的"],["tired-1","20-related-tire-tired-exhaust-fatigue-overwork"],"The tired crew rested after unloading the ship.","疲倦的船员卸货后休息了。",null,"https://www.merriam-webster.com/dictionary/tired"],
   ["sense-2","陈旧乏味的","adj.",["陈旧乏味的"],["tired-2","20-related-tire-tired-exhaust-fatigue-overwork"],"The speech repeated several tired slogans.","演讲重复了几个陈旧乏味的口号。",null,"https://www.merriam-webster.com/dictionary/tired"]
  ],[{"terms":["疲累的","疲乏的","厌倦的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tired","reason":"本批 tired 按所列词性与构式训练：疲倦的（adj.）、陈旧乏味的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("exhaust",[
   ["sense-1","使筋疲力尽","v.",["使筋疲力尽"],["exhaust-1","20-related-tire-tired-exhaust-fatigue-overwork","beat-strike","hit-strike","beat-defeat","beat-mix","beat-pulse","beat-rhythm","beat-patrol","beat-exhausted","beat-record"],"The long journey exhausted the whole group.","漫长的旅程使整个小组筋疲力尽。",null,"https://www.merriam-webster.com/dictionary/exhaust"],
   ["sense-2","耗尽","v.",["耗尽"],["exhaust-2","20-related-tire-tired-exhaust-fatigue-overwork","beat-strike","hit-strike","beat-defeat","beat-mix","beat-pulse","beat-rhythm","beat-patrol","beat-exhausted","beat-record"],"The repairs exhausted the emergency fund.","维修耗尽了应急资金。",null,"https://www.merriam-webster.com/dictionary/exhaust"],
   ["sense-3","废气","n.",["废气"],["exhaust-3","20-related-tire-tired-exhaust-fatigue-overwork","beat-strike","hit-strike","beat-defeat","beat-mix","beat-pulse","beat-rhythm","beat-patrol","beat-exhausted","beat-record"],"The test measured exhaust from the engine.","测试测量了发动机排出的废气。",null,"https://www.merriam-webster.com/dictionary/exhaust"],
   ["sense-4","排气装置","n.",["排气装置"],["exhaust-4","20-related-tire-tired-exhaust-fatigue-overwork","beat-strike","hit-strike","beat-defeat","beat-mix","beat-pulse","beat-rhythm","beat-patrol","beat-exhausted","beat-record"],"The mechanic checked the exhaust for leaks.","修理工检查了排气装置是否泄漏。",null,"https://www.merriam-webster.com/dictionary/exhaust"]
  ],[{"terms":["排气","抽完","用尽","使精疲力尽"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/exhaust","reason":"本批 exhaust 按所列词性与构式训练：使筋疲力尽（v.）、耗尽（v.）、废气（n.）、排气装置（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fatigue",[
   ["sense-1","疲劳；疲乏","n.",["疲劳","疲乏"],["fatigue-1","20-related-tire-tired-exhaust-fatigue-overwork"],"The task became harder as fatigue increased.","疲劳加重时，任务变得更难。",null,"https://www.merriam-webster.com/dictionary/fatigue"],
   ["sense-2","材料疲劳","n.",["材料疲劳"],["fatigue-2","20-related-tire-tired-exhaust-fatigue-overwork"],"The inspection found signs of metal fatigue.","检查发现了金属疲劳的迹象。",null,"https://www.merriam-webster.com/dictionary/fatigue"],
   ["sense-3","军用工作服（常用复数）","n.",["军用工作服（常用复数）"],["fatigue-3","20-related-tire-tired-exhaust-fatigue-overwork"],"The museum displayed a pair of faded fatigues.","博物馆展出了一套褪色的军用工作服。","fatigues","https://www.merriam-webster.com/dictionary/fatigue"],
   ["sense-4","使疲劳","v.",["使疲劳"],["fatigue-4","20-related-tire-tired-exhaust-fatigue-overwork"],"The repeated lifting fatigued his arms.","反复搬抬使他的双臂疲劳。",null,"https://www.merriam-webster.com/dictionary/fatigue"]
  ],[{"terms":["使心智衰弱","疲劳的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fatigue","reason":"军用工作服使用复数 fatigues；材料疲劳与身体疲劳分别示例。本批 fatigue 按所列词性与构式训练：疲劳；疲乏（n.）、材料疲劳（n.）、军用工作服（常用复数）（n.）、使疲劳（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("faint",[
   ["sense-1","微弱的；不清楚的","adj.",["微弱的","不清楚的"],["faint-1","vague-unclear","vague-uncertain"],"A faint light shone through the curtains.","微弱的光透过窗帘照了进来。",null,"https://www.merriam-webster.com/dictionary/faint"],
   ["sense-2","虚弱而可能昏倒的","adj.",["虚弱而可能昏倒的"],["faint-2","vague-unclear","vague-uncertain"],"She felt faint after standing in the heat.","她在高温下站立后感到头晕乏力。",null,"https://www.merriam-webster.com/dictionary/faint"],
   ["sense-3","昏倒","v.",["昏倒"],["faint-3","vague-unclear","vague-uncertain"],"The witness fainted during the crowded ceremony.","那位目击者在人群拥挤的仪式中昏倒了。",null,"https://www.merriam-webster.com/dictionary/faint"],
   ["sense-4","昏厥","n.",["昏厥"],["faint-4","vague-unclear","vague-uncertain"],"He recovered from the faint in a quiet room.","他在安静的房间里从昏厥中苏醒。",null,"https://www.merriam-webster.com/dictionary/faint"]
  ],[{"terms":["模糊的","无力的","变得微弱"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/faint","reason":"本批 faint 按所列词性与构式训练：微弱的；不清楚的（adj.）、虚弱而可能昏倒的（adj.）、昏倒（v.）、昏厥（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("eco-friendly",[
   ["sense-1","环保的；不损害环境的","adj.",["环保的","不损害环境的"],["eco-friendly-1"],"The team chose eco-friendly packaging for the samples.","团队为样本选择了环保包装。",null,"https://www.merriam-webster.com/dictionary/eco-friendly"]
  ],[{"terms":["有助于保护生态的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/eco-friendly","reason":"本批 eco-friendly 按所列词性与构式训练：环保的；不损害环境的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("perish",[
   ["sense-1","死亡；毁灭","v.",["死亡","毁灭"],["perish-1","20-related-demise-death-perish","organic-deterioration","gradual-deterioration","radioactive-decay"],"Several young trees perished during the drought.","几棵幼树在干旱中死去。",null,"https://www.merriam-webster.com/dictionary/perish"],
   ["sense-2","腐坏；老化损坏（英式）","v.",["腐坏","老化损坏（英式）"],["perish-2","20-related-demise-death-perish","organic-deterioration","gradual-deterioration","radioactive-decay"],"The old rubber seal had perished in the sunlight.","旧橡胶密封圈在阳光下已经老化损坏。",null,"https://www.merriam-webster.com/dictionary/perish"]
  ],[{"terms":["丧生","凋谢","颓丧","腐烂","毁坏","使麻木","使丧生","耗尽"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/perish","reason":"本批 perish 按所列词性与构式训练：死亡；毁灭（v.）、腐坏；老化损坏（英式）（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("preserve",[
   ["sense-1","保护；使保持原状","v.",["保护","使保持原状"],["preserve-1","defend-from-harm","trade-protectionism","maintain-preserve","maintain-assert","state-firmly","maintain-support","keep-for-purpose","advance-booking","emergency-supply","protected-natural-area","backup-personnel","emotional-restraint","reservation-doubt","auction-minimum","defer-judgment"],"The project aims to preserve the old theatre.","项目旨在保护那座老剧院。",null,"https://www.merriam-webster.com/dictionary/preserve"],
   ["sense-2","加工保存食品","v.",["加工保存食品"],["preserve-2","defend-from-harm","trade-protectionism","maintain-preserve","maintain-assert","state-firmly","maintain-support","keep-for-purpose","advance-booking","emergency-supply","protected-natural-area","backup-personnel","emotional-restraint","reservation-doubt","auction-minimum","defer-judgment"],"The family preserves vegetables for the winter.","这家人加工储存蔬菜以备过冬。",null,"https://www.merriam-webster.com/dictionary/preserve"],
   ["sense-3","果酱；糖渍水果（常用复数）","n.",["果酱","糖渍水果（常用复数）"],["preserve-3","defend-from-harm","trade-protectionism","maintain-preserve","maintain-assert","state-firmly","maintain-support","keep-for-purpose","advance-booking","emergency-supply","protected-natural-area","backup-personnel","emotional-restraint","reservation-doubt","auction-minimum","defer-judgment"],"She served toast with homemade preserves.","她端上了配自制果酱的烤面包片。","preserves","https://www.merriam-webster.com/dictionary/preserve"],
   ["sense-4","保护区；专属领域","n.",["保护区","专属领域"],["preserve-4","defend-from-harm","trade-protectionism","maintain-preserve","maintain-assert","state-firmly","maintain-support","keep-for-purpose","advance-booking","emergency-supply","protected-natural-area","backup-personnel","emotional-restraint","reservation-doubt","auction-minimum","defer-judgment"],"The island became a wildlife preserve.","这座岛成了野生生物保护区。",null,"https://www.merriam-webster.com/dictionary/preserve"]
  ],[{"terms":["保持","保存","维持","腌","禁猎","加工食品","加工成的食品","禁猎地","防护物"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/preserve","reason":"本批 preserve 按所列词性与构式训练：保护；使保持原状（v.）、加工保存食品（v.）、果酱；糖渍水果（常用复数）（n.）、保护区；专属领域（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("reed",[
   ["sense-1","芦苇","n.",["芦苇"],["reed-1"],"A reed bent over the edge of the pond.","一根芦苇弯垂在池塘边缘。",null,"https://www.merriam-webster.com/dictionary/reed"],
   ["sense-2","乐器簧片","n.",["乐器簧片"],["reed-2"],"The musician replaced the reed before the concert.","音乐家在音乐会前更换了簧片。",null,"https://www.merriam-webster.com/dictionary/reed"]
  ],[{"terms":["芦笛","簧舌","纤弱的人","用芦苇盖","用小凸嵌线装饰"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reed","reason":"本批 reed 按所列词性与构式训练：芦苇（n.）、乐器簧片（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("shade-tolerant",[
   ["sense-1","耐阴的","adj.",["耐阴的"],["shade-tolerant-1"],"The gardener selected shade-tolerant plants for the north wall.","园丁为北墙旁选了耐阴植物。",null,"https://www.merriam-webster.com/dictionary/shade-tolerant"]
  ],[]);
 }
 if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch20=register;
})(typeof window==='object'?window:globalThis);
