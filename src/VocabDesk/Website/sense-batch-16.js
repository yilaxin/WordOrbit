/* Batch 16: reviewed public learning scope, original bilingual examples.
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
  entry("hydrosphere",[
   ["water","水圈","n.",["水圈","水界"],["hydrosphere-water"],"The diagram shows exchanges of water between the hydrosphere and the atmosphere.","图示展示了水圈与大气圈之间的水分交换。",null,"https://www.merriam-webster.com/dictionary/hydrosphere"]
  ],[{"terms":["水气"],"decision":"scope-excluded","reason":"本批用水圈表示地球水体及水汽的整体，不把单独水气等同于整个水圈。","source":"https://www.merriam-webster.com/dictionary/hydrosphere"}]);
  entry("lithosphere",[
   ["rock","岩石圈","n.",["岩石圈"],["lithosphere-rock"],"The model represents the movement of plates in the lithosphere.","模型展示了岩石圈中板块的运动。",null,"https://www.merriam-webster.com/dictionary/lithosphere"]
  ],[{"terms":["陆界"],"decision":"scope-excluded","reason":"岩石圈不只包含裸露陆地；旧陆界译法需地学背景，不作为仅陆地范围的答案。","source":"https://www.merriam-webster.com/dictionary/lithosphere"}]);
  entry("altitude",[
   ["height","海拔；高度","n.",["海拔","高度"],["altitude-height"],"The village lies at an altitude of two thousand metres.","这个村庄海拔两千米。",null,"https://www.merriam-webster.com/dictionary/altitude"]
  ],[{"terms":["高处"],"decision":"scope-excluded","reason":"高处是位置，海拔或高度是测量量，本批不直接互换。","source":"https://www.merriam-webster.com/dictionary/altitude"}]);
  entry("horizon",[
   ["skyline","地平线","n.",["地平线","(天)视地平"],["horizon-skyline"],"A ship appeared on the horizon.","一艘船出现在地平线上。",null,"https://www.merriam-webster.com/dictionary/horizon"],
   ["limits","眼界；知识或经验范围","n.",["眼界","知识或经验范围"],["horizon-limits"],"Travelling expanded her horizons.","旅行开阔了她的眼界。",null,"https://www.merriam-webster.com/dictionary/horizon"]
  ],[]);
  entry("erupt",[
   ["volcano","喷发；爆发","v.",["喷发","爆发","喷出"],["erupt-volcano"],"The volcano erupted shortly after dawn.","火山在黎明后不久喷发了。",null,"https://www.merriam-webster.com/dictionary/erupt"],
   ["sudden","突然发生；突然发出","v.",["突然发生","突然发出"],["erupt-sudden"],"The room erupted in applause.","屋里突然响起掌声。",null,"https://www.merriam-webster.com/dictionary/erupt"]
  ],[]);
  entry("eruption",[
   ["volcano","火山喷发","n.",["火山喷发","喷发"],["eruption-volcano"],"Ash from the eruption covered nearby fields.","喷发产生的火山灰覆盖了附近田地。",null,"https://www.merriam-webster.com/dictionary/eruption"],
   ["outbreak","突然爆发","n.",["突然爆发","爆发"],["eruption-outbreak"],"The decision caused an eruption of anger.","这个决定引发了愤怒的爆发。",null,"https://www.merriam-webster.com/dictionary/eruption"],
   ["skin","皮疹的出现；出疹","n.",["皮疹的出现","出疹"],["eruption-skin"],"The doctor recorded the date of the skin eruption.","医生记录了出疹的日期。",null,"https://www.merriam-webster.com/dictionary/eruption"]
  ],[{"terms":["喷出物"],"decision":"scope-excluded","reason":"喷出物是喷发产生的物质，本批分别训练喷发、爆发和出疹过程。","source":"https://www.merriam-webster.com/dictionary/eruption"}]);
  entry("crust",[
   ["bread","面包皮；糕饼外皮","n.",["面包皮","糕饼外皮"],["crust-bread"],"The pie had a crisp golden crust.","馅饼有一层酥脆金黄的外皮。",null,"https://www.merriam-webster.com/dictionary/crust"],
   ["earth","地壳","n.",["地壳"],["crust-earth"],"The diagram shows the layers beneath the Earth's crust.","图示展示了地壳下面的各层。",null,"https://www.merriam-webster.com/dictionary/crust"],
   ["layer","硬壳；表面硬层","n.",["硬壳","表面硬层","外壳","坚硬外皮"],["crust-layer"],"A thin crust of ice formed on the pond.","池塘表面形成了一层薄冰。",null,"https://www.merriam-webster.com/dictionary/crust"]
  ],[{"terms":["盖以硬皮","结硬皮"],"decision":"scope-excluded","reason":"结壳和覆硬皮的动词未从硬层名词自动生成。","source":"https://www.merriam-webster.com/dictionary/crust"}]);
  entry("mantle",[
   ["earth","地幔","n.",["地幔"],["mantle-earth"],"The rock originated deep within the mantle.","这种岩石来自地幔深处。",null,"https://www.merriam-webster.com/dictionary/mantle"],
   ["cloak","斗篷；披风","n.",["斗篷","披风"],["mantle-cloak"],"The traveller wrapped a woollen mantle around his shoulders.","旅人把羊毛披风裹在肩上。",null,"https://www.merriam-webster.com/dictionary/mantle"],
   ["role","衣钵；职责；权威","n.",["衣钵","职责","权威"],["mantle-role"],"She inherited the mantle of leadership from her father.","她从父亲那里接过了领导职责。",null,"https://www.merriam-webster.com/dictionary/mantle"],
   ["cover","覆盖；笼罩","v.",["覆盖","笼罩","罩住"],["mantle-cover"],"Snow mantled the hills overnight.","一夜之间，大雪覆盖了山丘。",null,"https://www.merriam-webster.com/dictionary/mantle"]
  ],[{"terms":["罩子","脸红"],"decision":"scope-excluded","reason":"罩子及脸红是其他具体或引申用法，未与地幔、披风及覆盖动作混合。","source":"https://www.merriam-webster.com/dictionary/mantle"}]);
  entry("longitude",[
   ["coordinate","经度","n.",["经度"],["longitude-coordinate"],"The navigator checked the ship's longitude.","领航员核对了船的经度。",null,"https://www.merriam-webster.com/dictionary/longitude"]
  ],[{"terms":["经线"],"decision":"scope-excluded","reason":"经线是线，经度是角坐标，二者相关但不等同。","source":"https://www.merriam-webster.com/dictionary/longitude"}]);
  entry("oxygen",[
   ["element","氧；氧气","n.",["氧","氧气"],["oxygen-element"],"The instrument measures oxygen levels in the water.","这台仪器测量水中的含氧量。",null,"https://www.merriam-webster.com/dictionary/oxygen"]
  ],[{"terms":["氧O-2"],"decision":"scope-excluded","reason":"元素符号为 O，氧气通常写 O₂；旧氧O-2不是规范化学写法，本批保留正确中文名称。","source":"https://www.merriam-webster.com/dictionary/oxygen"}]);
  entry("photosynthesis",[
   ["process","光合作用","n.",["光合作用"],["photosynthesis-process"],"Plants use light energy during photosynthesis.","植物在光合作用中利用光能。",null,"https://www.merriam-webster.com/dictionary/photosynthesis"]
  ],[]);
  entry("botanical",[
   ["plants","植物的；植物学的","adj.",["植物的","植物学的"],["botanical-plants"],"She drew detailed botanical illustrations for the guidebook.","她为指南绘制了细致的植物插图。",null,"https://www.merriam-webster.com/dictionary/botanical"],
   ["extract","植物提取物；植物制品","n.",["植物提取物","植物制品","植物性药材"],["botanical-extract"],"The soap contains several botanicals.","这种香皂含有几种植物提取物。",null,"https://www.merriam-webster.com/dictionary/botanical"]
  ],[]);
  entry("cultivate",[
   ["crops","耕种；栽培","v.",["耕种","栽培","耕作"],["cultivate-crops"],"Farmers cultivate rice in the valley.","农民在山谷里种水稻。",null,"https://www.merriam-webster.com/dictionary/cultivate"],
   ["develop","培养；发展","v.",["培养","发展"],["cultivate-develop"],"The course cultivates careful observation.","这门课程培养细致的观察力。",null,"https://www.merriam-webster.com/dictionary/cultivate"],
   ["relationship","结交；培养关系","v.",["结交","培养关系"],["cultivate-relationship"],"She cultivated friendships with local artists.","她与当地艺术家建立了友谊。",null,"https://www.merriam-webster.com/dictionary/cultivate"]
  ],[]);
  entry("seedling",[
   ["young-plant","幼苗；实生苗","n.",["幼苗","实生苗","秧苗","籽苗"],["seedling-young-plant"],"Move each seedling into a larger pot.","把每株幼苗移进更大的花盆。",null,"https://www.merriam-webster.com/dictionary/seedling"]
  ],[{"terms":["树苗"],"decision":"scope-excluded","reason":"树苗可能来自扦插或其他繁殖方式，本批实生苗明确以种子萌发生长为范围。","source":"https://www.merriam-webster.com/dictionary/seedling"}]);
  entry("biodiversity",[
   ["variety","生物多样性","n.",["生物多样性"],["biodiversity-variety"],"The survey recorded the biodiversity of the wetland.","调查记录了湿地的生物多样性。",null,"https://www.merriam-webster.com/dictionary/biodiversity"]
  ],[]);
  entry("suburb",[
   ["area","郊区；城郊住宅区","n.",["郊区","城郊住宅区","市郊住宅区"],["suburb-area"],"They moved to a quiet suburb outside the city.","他们搬到了城外一个安静的郊区。",null,"https://www.merriam-webster.com/dictionary/suburb"]
  ],[{"terms":["边缘"],"decision":"scope-excluded","reason":"泛指边缘不一定是城市郊区，本批只选居住区域。","source":"https://www.merriam-webster.com/dictionary/suburb"}]);
  entry("pollution",[
   ["contamination","污染","n.",["污染","玷污"],["pollution-contamination"],"The barrier helps reduce noise pollution near the homes.","这道屏障有助于减少住宅附近的噪声污染。",null,"https://www.merriam-webster.com/dictionary/pollution"]
  ],[]);
  entry("remote",[
   ["far","偏远的；遥远的","adj.",["偏远的","遥远的","偏僻的"],["remote-far"],"The village is too remote for a daily bus service.","村子太偏远，没有每天通行的公交车。",null,"https://www.merriam-webster.com/dictionary/remote"],
   ["unlikely","微小的；可能性极低的","adj.",["微小的","可能性极低的","微少的"],["remote-unlikely","slight-small"],"There is only a remote chance of finding the missing ring.","找到那枚丢失戒指的可能性极小。",null,"https://www.merriam-webster.com/dictionary/remote"],
   ["control","遥控器","n.",["遥控器"],["remote-control"],"He used the remote to lower the volume.","他用遥控器调低音量。",null,"https://www.merriam-webster.com/dictionary/remote"]
  ],[{"terms":["疏远的","远程","远程访问实用程序"],"decision":"scope-excluded","reason":"远程技术、软件名称及人际疏远未另列；遥控器与偏远位置已分开。","source":"https://www.merriam-webster.com/dictionary/remote"}]);
  entry("contaminate",[
   ["pollute","污染；使不纯","v.",["污染","使不纯","弄污","弄脏","毒害"],["contaminate-pollute","environmental-contamination"],"Dirty equipment can contaminate the samples.","脏设备可能污染样本。",null,"https://www.merriam-webster.com/dictionary/contaminate"]
  ],[]);
  entry("distance",[
   ["space","距离；间距","n.",["距离","间距","位距"],["distance-space"],"Measure the distance between the two posts.","测量两根柱子之间的距离。",null,"https://www.merriam-webster.com/dictionary/distance"],
   ["reserve","疏远；冷淡","n.",["疏远","冷淡"],["distance-reserve"],"There was a new distance between the old friends.","老朋友之间新添了一层疏远感。",null,"https://www.merriam-webster.com/dictionary/distance"],
   ["dissociate","使疏远；使脱离","v.",["使疏远","使脱离"],["distance-dissociate"],"She distanced herself from the disputed decision.","她让自己与那项有争议的决定保持距离。","distance oneself from","https://www.merriam-webster.com/dictionary/distance"],
   ["faraway","远处；远方","n.",["远处","远方"],["distance-faraway"],"A light flickered in the distance.","远处有一点灯光闪烁。","in the distance","https://www.merriam-webster.com/dictionary/distance"]
  ],[{"terms":["遥远"],"decision":"scope-excluded","reason":"本批名词训练距离及远处；遥远的形容词用法应区分 distant。","source":"https://www.merriam-webster.com/dictionary/distance"}]);
  entry("endanger",[
   ["risk","危及；使陷入危险","v.",["危及","使陷入危险","使危险"],["endanger-risk"],"The fallen cables endangered everyone on the path.","掉落的电缆危及小路上所有人的安全。",null,"https://www.merriam-webster.com/dictionary/endanger"]
  ],[]);
  entry("habitat",[
   ["environment","栖息地；生境","n.",["栖息地","生境","居留地","自生地","习生地","栖所"],["habitat-environment"],"The marsh provides a habitat for many birds.","沼泽为许多鸟类提供了栖息地。",null,"https://www.merriam-webster.com/dictionary/habitat"]
  ],[{"terms":["聚集处","产地"],"decision":"scope-excluded","reason":"生产地或一般聚集处不一定是自然生活环境，不将其作为无条件同义词。","source":"https://www.merriam-webster.com/dictionary/habitat"}]);
  entry("bud",[
   ["plant","芽；花蕾","n.",["芽","花蕾"],["bud-plant"],"Small buds appeared along the branch.","枝条上长出了小芽。",null,"https://www.merriam-webster.com/dictionary/bud"],
   ["grow","发芽；萌芽","v.",["发芽","萌芽"],["bud-grow"],"The trees began to bud after the warm spell.","一阵暖和天气后，树木开始发芽。",null,"https://www.merriam-webster.com/dictionary/bud"]
  ],[{"terms":["使发芽"],"decision":"scope-excluded","reason":"使发芽的使动用法未单列，本批动词例句表示植物开始发芽。","source":"https://www.merriam-webster.com/dictionary/bud"}]);
  entry("blossom",[
   ["flower","花；花朵","n.",["花","花朵"],["blossom-flower","flower-bloom"],"White blossom covered the old apple tree.","老苹果树开满了白花。",null,"https://www.merriam-webster.com/dictionary/blossom"],
   ["bloom","开花","v.",["开花","花开的状态"],["blossom-bloom","flower-bloom-verb"],"The cherry trees blossom in early spring.","樱桃树在早春开花。",null,"https://www.merriam-webster.com/dictionary/blossom"],
   ["develop","兴盛；发展成熟","v.",["兴盛","发展成熟","兴旺期","兴旺","发展"],["blossom-develop","earthen-young-growth"],"Her confidence blossomed during the course.","上课期间，她的自信心蓬勃增长。",null,"https://www.merriam-webster.com/dictionary/blossom"]
  ],[]);
  entry("ripen",[
   ["mature","成熟；使成熟","v.",["成熟","使成熟","发展到成熟阶段","时机成熟"],["ripen-mature","earthen-young-growth","fully-developed"],"The peaches ripen quickly in warm weather.","天气暖和时，桃子成熟得很快。",null,"https://www.merriam-webster.com/dictionary/ripen"]
  ],[]);
  entry("germ",[
   ["microbe","病菌；微生物","n.",["病菌","微生物","细菌"],["germ-microbe"],"The researchers checked the water for harmful germs.","研究人员检查了水中是否有有害微生物。",null,"https://www.merriam-webster.com/dictionary/germ"],
   ["embryo","胚芽","n.",["胚芽","胚"],["germ-embryo"],"The germ is a small part of a wheat grain.","胚芽是麦粒中的一小部分。",null,"https://www.merriam-webster.com/dictionary/germ"],
   ["beginning","萌芽；初步想法","n.",["萌芽","初步想法","根源"],["germ-beginning"],"The germ of the project came from a casual conversation.","这个项目最初的构想来自一次闲聊。",null,"https://www.merriam-webster.com/dictionary/germ"]
  ],[{"terms":["种子","生殖细胞","芽胞"],"decision":"scope-excluded","reason":"生殖细胞、芽胞及一般种子需生物学语境，不与病菌、谷物胚芽或想法萌芽混合。","source":"https://www.merriam-webster.com/dictionary/germ"}]);
  entry("ripe",[
   ["fruit","成熟的","adj.",["成熟的"],["ripe-fruit","fully-developed"],"The ripe pears smelled sweet.","熟透的梨散发着甜香。",null,"https://www.merriam-webster.com/dictionary/ripe"],
   ["ready","时机成熟的；适宜的","adj.",["时机成熟的","适宜的"],["ripe-ready"],"The conditions are ripe for a new approach.","采用新方法的时机已经成熟。","ripe for","https://www.merriam-webster.com/dictionary/ripe"]
  ],[{"terms":["熟练的","成年的"],"decision":"scope-excluded","reason":"成年的与成熟果实不同，熟练也不必然表示时机成熟。","source":"https://www.merriam-webster.com/dictionary/ripe"}]);
  entry("wither",[
   ["dry","枯萎；凋谢","v.",["枯萎","凋谢","使枯萎"],["wither-dry"],"The flowers withered in the heat.","花在高温中枯萎了。",null,"https://www.merriam-webster.com/dictionary/wither"],
   ["weaken","衰弱；使衰败","v.",["衰弱","使衰败","萎缩","衰退","逐渐消失"],["wither-weaken"],"Support for the plan withered after the report.","报告发布后，对计划的支持衰减了。",null,"https://www.merriam-webster.com/dictionary/wither"]
  ],[]);
  entry("terrace",[
   ["outdoor","露台；平台","n.",["露台","平台","房屋之平顶","阳台"],["terrace-outdoor"],"We ate breakfast on the sunny terrace.","我们在阳光明媚的露台上吃早饭。",null,"https://www.merriam-webster.com/dictionary/terrace"],
   ["land","梯田；阶地","n.",["梯田","阶地"],["terrace-land"],"The hillside was divided into narrow terraces.","山坡被划成狭窄的梯田。",null,"https://www.merriam-webster.com/dictionary/terrace"],
   ["houses","排屋","n.",["排屋"],["terrace-houses"],"They live in a terrace of brick houses.","他们住在一排砖砌排屋里。",null,"https://www.merriam-webster.com/dictionary/terrace"],
   ["shape","把……修成梯田","v.",["把……修成梯田","使成梯田"],["terrace-shape"],"The farmers terraced the steep slope.","农民把陡坡修成了梯田。",null,"https://www.merriam-webster.com/dictionary/terrace"]
  ],[{"terms":["沿岸防地","叠层式的","使成有平台屋顶"],"decision":"scope-excluded","reason":"沿岸地形、形容词叠层及平台屋顶的使动用法未单列；本批保留露台、阶地、排屋及修梯田。","source":"https://www.merriam-webster.com/dictionary/terrace"}]);
  entry("orbit",[
   ["path","轨道","n.",["轨道"],["orbit-path"],"The satellite entered a stable orbit.","卫星进入了稳定轨道。",null,"https://www.merriam-webster.com/dictionary/orbit"],
   ["circle","绕轨道运行；环绕","v.",["绕轨道运行","环绕","绕...轨道而行","进入轨道","盘旋"],["orbit-circle"],"Several moons orbit the planet.","几颗卫星围绕这颗行星运行。",null,"https://www.merriam-webster.com/dictionary/orbit"],
   ["sphere","势力范围；活动范围","n.",["势力范围","活动范围"],["orbit-sphere"],"The small state remained within its neighbour's orbit.","这个小国仍处于邻国的势力范围内。",null,"https://www.merriam-webster.com/dictionary/orbit"],
   ["eye","眼眶","n.",["眼眶"],["orbit-eye"],"The orbit is the bony cavity around the eye.","眼眶是眼睛周围的骨性腔。",null,"https://www.merriam-webster.com/dictionary/orbit"]
  ],[{"terms":["常轨"],"decision":"scope-excluded","reason":"常轨为宽泛引申，本批以天体路径、眼眶及影响范围限定。","source":"https://www.merriam-webster.com/dictionary/orbit"}]);
  entry("cosmic",[
   ["universe","宇宙的","adj.",["宇宙的"],["cosmic-universe"],"The telescope detected faint cosmic radiation.","望远镜探测到了微弱的宇宙辐射。",null,"https://www.merriam-webster.com/dictionary/cosmic"]
  ],[{"terms":["宇宙航行的","无限的","有秩序的"],"decision":"scope-excluded","reason":"宇宙的未必表示航行、无限或有秩序，这些引申不作为通用同义答案。","source":"https://www.merriam-webster.com/dictionary/cosmic"}]);
  entry("hare",[
   ["animal","野兔","n.",["野兔"],["hare-animal"],"A hare raced across the open field.","一只野兔飞快地跑过旷野。",null,"https://www.merriam-webster.com/dictionary/hare"],
   ["rush","飞奔；疾走","v.",["飞奔","疾走","飞跑"],["hare-rush"],"He hared down the lane to catch the bus.","他沿着小路飞奔去赶公交车。",null,"https://www.merriam-webster.com/dictionary/hare"]
  ],[]);
  entry("frog",[
   ["animal","青蛙","n.",["青蛙","蛙"],["frog-animal"],"A frog jumped from the bank into the pond.","一只青蛙从岸边跳进池塘。",null,"https://www.merriam-webster.com/dictionary/frog"]
  ],[{"terms":["马蹄叉"],"decision":"scope-excluded","reason":"马蹄叉为动物解剖专门用法，本批只训练两栖动物青蛙。","source":"https://www.merriam-webster.com/dictionary/frog"}]);
  entry("bite",[
   ["teeth","咬；叮","v.",["咬","叮"],["bite-teeth"],"The puppy bit the corner of the blanket.","小狗咬住了毯子的一角。",null,"https://www.merriam-webster.com/dictionary/bite"],
   ["portion","一口食物；少量食物","n.",["一口食物","少量食物","一口"],["bite-portion"],"She took a bite of the apple.","她咬了一口苹果。",null,"https://www.merriam-webster.com/dictionary/bite"],
   ["wound","咬伤；叮咬的伤口","n.",["咬伤","叮咬的伤口"],["bite-wound"],"The insect bite left a small red mark.","昆虫叮咬的地方留下一个小红印。",null,"https://www.merriam-webster.com/dictionary/bite"],
   ["sharpness","刺痛感；辛辣感","n.",["刺痛感","辛辣感","刺痛"],["bite-sharpness"],"The sauce has a sharp bite.","这种酱汁有强烈的辛辣感。",null,"https://www.merriam-webster.com/dictionary/bite"]
  ],[{"terms":["穿透"],"decision":"scope-excluded","reason":"穿透需具体对象及作用方式，本批咬的动作不代表任何穿透。","source":"https://www.merriam-webster.com/dictionary/bite"}]);
  entry("hive",[
   ["bees","蜂箱；蜂巢","n.",["蜂箱","蜂巢","蜂房"],["hive-bees"],"The beekeeper checked the hive before sunset.","养蜂人在日落前检查了蜂箱。",null,"https://www.merriam-webster.com/dictionary/hive"],
   ["activity","繁忙的场所","n.",["繁忙的场所","闹区"],["hive-activity"],"The kitchen was a hive of activity before dinner.","晚饭前，厨房里一派忙碌。","a hive of activity","https://www.merriam-webster.com/dictionary/hive"]
  ],[{"terms":["蜜蜂群","进入蜂房","储藏蜜于蜂房","如蜂般群居","使进蜂房","储备"],"decision":"scope-excluded","reason":"蜂群、养蜂动词及储藏旧用法未单列；蜂巢物件不等于蜜蜂本身。","source":"https://www.merriam-webster.com/dictionary/hive"}]);
  entry("barrier",[
   ["physical","屏障；障碍物","n.",["屏障","障碍物","栅栏","阻片","阻挡层"],["barrier-physical"],"A concrete barrier separates the two lanes.","混凝土屏障把两条车道隔开。",null,"https://www.merriam-webster.com/dictionary/barrier"],
   ["obstacle","障碍；阻碍因素","n.",["障碍","阻碍因素"],["barrier-obstacle"],"Cost remains a barrier to wider access.","费用仍是扩大使用范围的一道障碍。",null,"https://www.merriam-webster.com/dictionary/barrier"]
  ],[{"terms":["势垒"],"decision":"scope-excluded","reason":"势垒为物理学专业术语，不与一般道路屏障或社会障碍直接互换。","source":"https://www.merriam-webster.com/dictionary/barrier"}]);
  entry("anatomy",[
   ["science","解剖学","n.",["解剖学"],["anatomy-science"],"The first-year course includes human anatomy.","一年级课程包括人体解剖学。",null,"https://www.merriam-webster.com/dictionary/anatomy"],
   ["structure","身体结构；内部结构","n.",["身体结构","内部结构","结构"],["anatomy-structure"],"The diagram shows the anatomy of a bird's wing.","图示展示了鸟翼的结构。",null,"https://www.merriam-webster.com/dictionary/anatomy"],
   ["analysis","详细剖析","n.",["详细剖析","剖析"],["anatomy-analysis"],"The book presents an anatomy of the failed expedition.","这本书详细剖析了那次失败的远征。",null,"https://www.merriam-webster.com/dictionary/anatomy"]
  ],[{"terms":["骨骼","解剖"],"decision":"scope-excluded","reason":"骨骼只是身体结构的一部分；解剖动作需区分解剖学或结构分析。","source":"https://www.merriam-webster.com/dictionary/anatomy"}]);
  entry("epidemic",[
   ["outbreak","流行病；大范围爆发","n.",["流行病","大范围爆发"],["epidemic-outbreak"],"The archive describes a flu epidemic in the town.","档案记述了镇上一次流感大流行。",null,"https://www.merriam-webster.com/dictionary/epidemic"],
   ["widespread","流行的；广泛蔓延的","adj.",["流行的","广泛蔓延的"],["epidemic-widespread"],"The disease reached epidemic levels.","这种疾病达到了大范围流行的程度。",null,"https://www.merriam-webster.com/dictionary/epidemic"]
  ],[{"terms":["传染病","传染性的"],"decision":"scope-excluded","reason":"流行病不等于任何传染病，且流行的也不保证病原可直接传染。","source":"https://www.merriam-webster.com/dictionary/epidemic"}]);
  entry("curriculum",[
   ["courses","课程；课程体系","n.",["课程","课程体系","学程"],["curriculum-courses"],"The school added drama to its curriculum.","学校把戏剧加入了课程体系。",null,"https://www.merriam-webster.com/dictionary/curriculum"]
  ],[]);
  entry("tuition",[
   ["fees","学费","n.",["学费"],["tuition-fees"],"The scholarship covers tuition and books.","奖学金包括学费和书本费。",null,"https://www.merriam-webster.com/dictionary/tuition"],
   ["teaching","教学；辅导","n.",["教学","辅导","讲授"],["tuition-teaching"],"He received private tuition in mathematics.","他接受了数学私人辅导。",null,"https://www.merriam-webster.com/dictionary/tuition"]
  ],[]);
  entry("literacy",[
   ["reading","读写能力；识字能力","n.",["读写能力","识字能力","识字"],["literacy-reading"],"The library runs classes to improve adult literacy.","图书馆开设课程以提高成年人的读写能力。",null,"https://www.merriam-webster.com/dictionary/literacy"],
   ["competence","某领域的基本知识；素养","n.",["某领域的基本知识","素养"],["literacy-competence"],"Digital literacy is useful in many jobs.","数字素养对许多工作都有用。",null,"https://www.merriam-webster.com/dictionary/literacy"]
  ],[{"terms":["精通文学"],"decision":"scope-excluded","reason":"读写能力不等于精通文学，本批另含特定领域基础素养。","source":"https://www.merriam-webster.com/dictionary/literacy"}]);
  entry("assessment",[
   ["judgment","评估；评价","n.",["评估","评价","估定"],["assessment-judgment","test-analyse"],"The report includes an assessment of the building's condition.","报告包含了对建筑状况的评估。",null,"https://www.merriam-webster.com/dictionary/assessment"],
   ["charge","核定的税额或费用","n.",["核定的税额或费用","评定的款额"],["assessment-charge"],"The owner challenged the new tax assessment.","业主对新核定的税额提出异议。",null,"https://www.merriam-webster.com/dictionary/assessment"]
  ],[]);
  entry("observatory",[
   ["station","天文台；观测站","n.",["天文台","观测站","气象台"],["observatory-station"],"The observatory stands on a hill above the town.","观测站坐落在镇子上方的一座山上。",null,"https://www.merriam-webster.com/dictionary/observatory"]
  ],[{"terms":["了望台"],"decision":"scope-excluded","reason":"一般瞭望台未必从事科学观测，本批以天文或气象观测站为范围。","source":"https://www.merriam-webster.com/dictionary/observatory"}]);
  entry("substance",[
   ["material","物质","n.",["物质"],["substance-material"],"The laboratory identified the unknown substance.","实验室鉴定出了这种未知物质。",null,"https://www.merriam-webster.com/dictionary/substance"],
   ["essence","实质；主要内容","n.",["实质","主要内容","主旨","本质"],["substance-essence"],"The summary captures the substance of her argument.","摘要抓住了她论证的实质。",null,"https://www.merriam-webster.com/dictionary/substance"],
   ["validity","根据；真实性","n.",["根据","真实性"],["substance-validity"],"There was little substance to the rumour.","这个传言没什么根据。",null,"https://www.merriam-webster.com/dictionary/substance"]
  ],[{"terms":["资产","牢固"],"decision":"scope-excluded","reason":"财富资产及牢固引申未单列，不与物质、论证实质或根据混合。","source":"https://www.merriam-webster.com/dictionary/substance"}]);
  entry("telescope",[
   ["instrument","望远镜","n.",["望远镜"],["telescope-instrument"],"He pointed the telescope towards the moon.","他把望远镜指向月亮。",null,"https://www.merriam-webster.com/dictionary/telescope"],
   ["compress","压缩；使缩短","v.",["压缩","使缩短","缩短"],["telescope-compress","reduce-compress"],"The editor telescoped three chapters into one.","编辑把三章压缩成了一章。",null,"https://www.merriam-webster.com/dictionary/telescope"],
   ["slide","叠缩；使套缩","v.",["叠缩","使套缩","嵌进","使叠缩"],["telescope-slide"],"The legs telescope into the case for storage.","这些支腿可套缩进外壳，便于存放。",null,"https://www.merriam-webster.com/dictionary/telescope"]
  ],[]);
  entry("spectacle",[
   ["show","壮观景象；引人注目的场面","n.",["壮观景象","引人注目的场面","景象","场面","公开展示"],["spectacle-show"],"The waterfall was an impressive spectacle after the rain.","雨后的瀑布十分壮观。",null,"https://www.merriam-webster.com/dictionary/spectacle"],
   ["glasses","眼镜","n.",["眼镜"],["spectacle-glasses"],"She put on her spectacles to read the label.","她戴上眼镜读标签。",null,"https://www.merriam-webster.com/dictionary/spectacle"]
  ],[{"terms":["引人羡慕的东西"],"decision":"scope-excluded","reason":"引人注意的景象不必令人羡慕，本批不将价值判断作为通用解释。","source":"https://www.merriam-webster.com/dictionary/spectacle"}]);
  entry("sample",[
   ["specimen","样品；样本","n.",["样品","样本","范例","示例"],["sample-specimen","representative-sample"],"The technician took a sample of the water.","技术员取了一份水样。",null,"https://www.merriam-webster.com/dictionary/sample"],
   ["try","抽样检查；试尝","v.",["抽样检查","试尝","抽样","尝试"],["sample-try"],"We sampled several local cheeses.","我们品尝了几种当地奶酪。",null,"https://www.merriam-webster.com/dictionary/sample"]
  ],[{"terms":["字样"],"decision":"scope-excluded","reason":"字样未纳入本批样本名词或试用动词。","source":"https://www.merriam-webster.com/dictionary/sample"}]);
  entry("automate",[
   ["mechanize","使自动化","v.",["使自动化","自动化"],["automate-mechanize"],"The factory automated its packaging line.","工厂使包装线实现了自动化。",null,"https://www.merriam-webster.com/dictionary/automate"]
  ],[{"terms":["vi. (使)自动化"],"decision":"scope-excluded","reason":"旧串中的 vi. 是词性标记，不作为释义；本批以使自动化的动词例句训练。","source":"https://www.merriam-webster.com/dictionary/automate"}]);
  entry("device",[
   ["instrument","装置；设备","n.",["装置","设备","器具"],["device-instrument"],"The device measures the depth of the water.","这个装置测量水深。",null,"https://www.merriam-webster.com/dictionary/device"],
   ["method","手段；策略","n.",["手段","策略","方法","修辞手法"],["device-method"],"The hidden letter is a familiar device in mystery stories.","隐藏的信件是悬疑故事中常见的手法。",null,"https://www.merriam-webster.com/dictionary/device"]
  ],[{"terms":["爆炸装置"],"decision":"scope-excluded","reason":"爆炸装置是一类具体设备，本批通用装置义不单独认证其所有危险子类型。","source":"https://www.merriam-webster.com/dictionary/device"}]);
  entry("thorough",[
   ["complete","彻底的；全面的","adj.",["彻底的","全面的"],["thorough-complete"],"The inspector made a thorough check of the wiring.","检查员全面检查了线路。",null,"https://www.merriam-webster.com/dictionary/thorough"],
   ["careful","细致的；一丝不苟的","adj.",["细致的","一丝不苟的"],["thorough-careful"],"She is a thorough researcher who checks every reference.","她是位细致的研究者，会核对每一条参考资料。",null,"https://www.merriam-webster.com/dictionary/thorough"]
  ],[{"terms":["十分的"],"decision":"scope-excluded","reason":"十分的缺乏修饰对象，本批只训练全面彻底和细致。","source":"https://www.merriam-webster.com/dictionary/thorough"}]);
  entry("inductive",[
   ["reasoning","归纳的","adj.",["归纳的"],["inductive-reasoning"],"The course introduces inductive reasoning through simple examples.","课程通过简单例子介绍归纳推理。",null,"https://www.merriam-webster.com/dictionary/inductive"],
   ["electrical","电感的；电磁感应的","adj.",["电感的","电磁感应的","感应的"],["inductive-electrical"],"The diagram shows the components of an inductive sensor.","图示展示了电感式传感器的组成部分。",null,"https://www.merriam-webster.com/dictionary/inductive"]
  ],[{"terms":["感应瓦特计"],"decision":"scope-excluded","reason":"感应瓦特计是器械名称，不能替代电感或归纳的形容词。","source":"https://www.merriam-webster.com/dictionary/inductive"}]);
  entry("detailed",[
   ["specific","详细的；细致的","adj.",["详细的","细致的","详尽的"],["detailed-specific"],"She gave a detailed description of the missing bag.","她详细描述了丢失的包。",null,"https://www.merriam-webster.com/dictionary/detailed"]
  ],[{"terms":["复杂的"],"decision":"scope-excluded","reason":"复杂不一定包含细节，不能把复杂与详细无条件互换。","source":"https://www.merriam-webster.com/dictionary/detailed"}]);
  entry("exemplify",[
   ["illustrate","举例说明；体现","v.",["举例说明","体现","例证","例示"],["exemplify-illustrate","explanation-clarify","explain-with-example"],"The restored house exemplifies the local building style.","修复后的房子体现了当地建筑风格。",null,"https://www.merriam-webster.com/dictionary/exemplify"]
  ],[{"terms":["制作经公章证明的誊本"],"decision":"scope-excluded","reason":"加公章认证誊本属法律文书专门用法，本批只选举例体现。","source":"https://www.merriam-webster.com/dictionary/exemplify"}]);
  entry("agreeable",[
   ["pleasant","令人愉快的；宜人的","adj.",["令人愉快的","宜人的"],["agreeable-pleasant"],"The garden was an agreeable place to rest.","花园是个宜人的休息场所。",null,"https://www.merriam-webster.com/dictionary/agreeable"],
   ["willing","愿意的；赞同的","adj.",["愿意的","赞同的","同意的"],["agreeable-willing"],"She was agreeable to a change of date.","她同意更改日期。","agreeable to","https://www.merriam-webster.com/dictionary/agreeable"]
  ],[{"terms":["佳适的"],"decision":"scope-excluded","reason":"旧佳适译法未独立保留，本批使用明确的宜人及愿意标签。","source":"https://www.merriam-webster.com/dictionary/agreeable"}]);
  entry("manifest",[
   ["obvious","明显的；显而易见的","adj.",["明显的","显而易见的","显然的","明白的"],["manifest-obvious"],"His disappointment was manifest to everyone.","所有人都看得出他的失望。",null,"https://www.merriam-webster.com/dictionary/manifest"],
   ["show","显示；表明","v.",["显示","表明","表现","证明"],["manifest-show"],"She manifested a strong interest in the project.","她表现出了对项目的浓厚兴趣。",null,"https://www.merriam-webster.com/dictionary/manifest"],
   ["list","货物或乘客清单","n.",["货物或乘客清单","载货单","运货单","旅客名单"],["manifest-list"],"The officer checked the cargo manifest.","官员核对了货物清单。",null,"https://www.merriam-webster.com/dictionary/manifest"]
  ],[{"terms":["出现"],"decision":"scope-excluded","reason":"显露的及物动词不自动等于所有出现；本批显示、明显及清单分开。","source":"https://www.merriam-webster.com/dictionary/manifest"}]);
  entry("observe",[
   ["watch","观察；注视","v.",["观察","注视"],["observe-watch"],"The students observed the birds from a shelter.","学生们从隐蔽处观察鸟类。",null,"https://www.merriam-webster.com/dictionary/observe"],
   ["notice","注意到；察觉","v.",["注意到","察觉","觉察到","注意"],["observe-notice","observation-noticing"],"She observed a crack near the window.","她注意到窗户附近有一道裂缝。",null,"https://www.merriam-webster.com/dictionary/observe"],
   ["obey","遵守；奉行","v.",["遵守","奉行"],["observe-obey"],"All visitors must observe the safety rules.","所有访客都必须遵守安全规定。",null,"https://www.merriam-webster.com/dictionary/observe"],
   ["remark","评论；说","v.",["评论","说"],["observe-remark"],"He observed that the room needed more light.","他评论说，房间需要更多光线。",null,"https://www.merriam-webster.com/dictionary/observe"],
   ["celebrate","庆祝；纪念","v.",["庆祝","纪念"],["observe-celebrate"],"The town observes the anniversary with a small parade.","城镇举行小型游行纪念这个周年日。",null,"https://www.merriam-webster.com/dictionary/observe"]
  ],[]);
  entry("heritage",[
   ["culture","文化遗产；传承","n.",["文化遗产","传承","祖先遗留物"],["heritage-culture","cultural-heritage"],"The museum preserves the region's industrial heritage.","博物馆保存着该地区的工业遗产。",null,"https://www.merriam-webster.com/dictionary/heritage"],
   ["inheritance","继承的财产；遗产","n.",["继承的财产","遗产","继承物"],["heritage-inheritance"],"The old estate formed part of her heritage.","那座旧庄园是她继承的财产的一部分。",null,"https://www.merriam-webster.com/dictionary/heritage"]
  ],[{"terms":["遗传性"],"decision":"scope-excluded","reason":"文化传承或继承财产不等于所有遗传性状，本批不与 heredity 混淆。","source":"https://www.merriam-webster.com/dictionary/heritage"}]);
  entry("civilisation",[
   ["society","文明；文明社会","n.",["文明","文明社会","文明世界","开化","教化"],["civilisation-society"],"The exhibition traces the growth of urban civilisation.","展览追溯了城市文明的发展。",null,"https://www.merriam-webster.com/dictionary/civilization"],
   ["culture","特定地区或时代的文明","n.",["特定地区或时代的文明","文化"],["civilisation-culture","cultural-heritage"],"The course compares the civilisations of the ancient Mediterranean.","课程比较了古代地中海地区的各种文明。",null,"https://www.merriam-webster.com/dictionary/civilization"]
  ],[]);
  entry("keyboard",[
   ["keys","键盘","n.",["键盘"],["keyboard-keys"],"The keyboard has several missing keys.","键盘缺了几个键。",null,"https://www.merriam-webster.com/dictionary/keyboard"],
   ["instrument","键盘乐器","n.",["键盘乐器"],["keyboard-instrument"],"She plays keyboards in a local band.","她在当地乐队演奏键盘乐器。",null,"https://www.merriam-webster.com/dictionary/keyboard"]
  ],[]);
  entry("screen",[
   ["display","屏幕；银幕","n.",["屏幕","银幕","幕"],["screen-display"],"The results appeared on the screen.","结果出现在屏幕上。",null,"https://www.merriam-webster.com/dictionary/screen"],
   ["partition","屏风；遮挡物","n.",["屏风","遮挡物","掩蔽物"],["screen-partition"],"A folding screen divided the room.","折叠屏风把房间隔开。",null,"https://www.merriam-webster.com/dictionary/screen"],
   ["sieve","筛子；筛网","n.",["筛子","筛网","筛"],["screen-sieve"],"Pour the mixture through a fine screen.","把混合物倒过细筛网。",null,"https://www.merriam-webster.com/dictionary/screen"],
   ["show","放映；播出","v.",["放映","播出"],["screen-show"],"The cinema screened the documentary twice.","电影院放映了这部纪录片两次。",null,"https://www.merriam-webster.com/dictionary/screen"],
   ["check","筛查；审查","v.",["筛查","审查","甄别","筛选"],["screen-check"],"The staff screened applications before the interviews.","工作人员在面试前筛选了申请。",null,"https://www.merriam-webster.com/dictionary/screen"],
   ["shield","遮蔽；保护","v.",["遮蔽","保护","屏蔽","掩蔽","掩护"],["screen-shield"],"Tall hedges screen the house from the road.","高树篱把房子与道路隔开，遮住了视线。",null,"https://www.merriam-webster.com/dictionary/screen"],
   ["filter","筛分；滤除","v.",["筛分","滤除"],["screen-filter"],"The machine screens stones out of the soil.","机器筛除了土壤中的石块。",null,"https://www.merriam-webster.com/dictionary/screen"]
  ],[{"terms":["拍摄","拍电影"],"decision":"scope-excluded","reason":"放映不等于拍摄电影；本批不把 screen 当作 film 的所有拍摄动作。","source":"https://www.merriam-webster.com/dictionary/screen"}]);
  entry("vision",[
   ["sight","视力；视觉","n.",["视力","视觉"],["vision-sight"],"The fog reduced our vision to a few metres.","雾使我们只能看清几米以内。",null,"https://www.merriam-webster.com/dictionary/vision"],
   ["future","远见；愿景","n.",["远见","愿景","眼光"],["vision-future"],"She explained her vision for the new library.","她阐述了对新图书馆的愿景。",null,"https://www.merriam-webster.com/dictionary/vision"],
   ["image","幻象；想象的景象","n.",["幻象","想象的景象","幻想"],["vision-image","novel-writing"],"He woke from a dream filled with strange visions.","他从充满奇异幻象的梦中醒来。",null,"https://www.merriam-webster.com/dictionary/vision"]
  ],[{"terms":["梦见","想象","显示"],"decision":"scope-excluded","reason":"梦见和想象为动词式旧译，本批名词视觉、愿景、幻象不自动生成这些动作。","source":"https://www.merriam-webster.com/dictionary/vision"}]);
  entry("microphone",[
   ["instrument","麦克风；话筒","n.",["麦克风","话筒","传声器"],["microphone-instrument"],"Move the microphone closer to the speaker.","把麦克风移近演讲者。",null,"https://www.merriam-webster.com/dictionary/microphone"]
  ],[{"terms":["扩音器"],"decision":"scope-excluded","reason":"话筒将声音转换为信号，扩音器通常指扬声器等设备，不能直接等同。","source":"https://www.merriam-webster.com/dictionary/microphone"}]);
  entry("fantasy",[
   ["imagination","幻想；想象","n.",["幻想","想象","想象的产物"],["fantasy-imagination","novel-writing"],"His plan was based more on fantasy than on evidence.","他的计划更多建立在幻想而非证据之上。",null,"https://www.merriam-webster.com/dictionary/fantasy"],
   ["genre","奇幻作品；幻想文学","n.",["奇幻作品","幻想文学"],["fantasy-genre"],"She writes fantasy for younger readers.","她为年轻读者创作奇幻文学。",null,"https://www.merriam-webster.com/dictionary/fantasy"]
  ],[]);
  entry("wireless",[
   ["connection","无线的","adj.",["无线的","无线电的"],["wireless-connection"],"The office uses a wireless network.","办公室使用无线网络。",null,"https://www.merriam-webster.com/dictionary/wireless"],
   ["radio","无线电收音机（旧用法）","n.",["无线电收音机（旧用法）","无线电"],["wireless-radio"],"The family listened to the evening news on the wireless.","一家人通过收音机收听晚间新闻。",null,"https://www.merriam-webster.com/dictionary/wireless"]
  ],[]);
  entry("purify",[
   ["clean","净化；使纯净","v.",["净化","使纯净","变纯净","提纯","精炼"],["purify-clean"],"The filter purifies water from the stream.","过滤器净化溪流中的水。",null,"https://www.merriam-webster.com/dictionary/purify"]
  ],[]);
  entry("dialect",[
   ["variety","方言；地方话","n.",["方言","地方话"],["dialect-variety"],"Her grandfather spoke a local dialect.","她的祖父说当地的方言。",null,"https://www.merriam-webster.com/dictionary/dialect"]
  ],[{"terms":["同源语"],"decision":"scope-excluded","reason":"同源语言的专业历史用法未纳入本批区域方言范围。","source":"https://www.merriam-webster.com/dictionary/dialect"}]);
  entry("evolve",[
   ["develop","逐渐发展；演变","v.",["逐渐发展","演变","进展","展开","使发展"],["evolve-develop"],"The design evolved over several years.","设计经过几年逐渐发展完善。",null,"https://www.merriam-webster.com/dictionary/evolve"],
   ["biological","进化","v.",["进化","使进化"],["evolve-biological"],"The species evolved features suited to its environment.","该物种进化出了适应环境的特征。",null,"https://www.merriam-webster.com/dictionary/evolve"]
  ],[{"terms":["使推断出"],"decision":"scope-excluded","reason":"使推断出为逻辑引申旧用法，本批只选逐渐发展和生物进化。","source":"https://www.merriam-webster.com/dictionary/evolve"}]);
  entry("vocabulary",[
   ["words","词汇；词汇量","n.",["词汇","词汇量","词汇(量)"],["vocabulary-words"],"Reading widely expanded his vocabulary.","广泛阅读扩大了他的词汇量。",null,"https://www.merriam-webster.com/dictionary/vocabulary"],
   ["list","词汇表","n.",["词汇表","词表"],["vocabulary-list"],"A short vocabulary appears at the back of the book.","书末附有一份简短词汇表。",null,"https://www.merriam-webster.com/dictionary/vocabulary"]
  ],[]);
  entry("sacred",[
   ["holy","神圣的；宗教的","adj.",["神圣的","宗教的","献给上帝的","祭祀的"],["sacred-holy","holy-sacred","religiously-sacred"],"The spring is sacred to the local community.","泉水对当地群体而言是神圣的。",null,"https://www.merriam-webster.com/dictionary/sacred"],
   ["inviolable","不可侵犯的；被珍视的","adj.",["不可侵犯的","被珍视的"],["sacred-inviolable"],"She regards her Sunday family time as sacred.","她把周日与家人相处的时间视为不可侵犯的。",null,"https://www.merriam-webster.com/dictionary/sacred"]
  ],[{"terms":["庄严的"],"decision":"scope-excluded","reason":"一般庄严不必然神圣或不可侵犯，本批不作通用同义答案。","source":"https://www.merriam-webster.com/dictionary/sacred"}]);
  entry("hallowed",[
   ["holy","神圣的；受祝圣的","adj.",["神圣的","受祝圣的","神圣化的"],["hallowed-holy","holy-sacred","religiously-sacred"],"The ceremony took place on hallowed ground.","仪式在圣地举行。",null,"https://www.merriam-webster.com/dictionary/hallowed"],
   ["revered","备受尊崇的","adj.",["备受尊崇的"],["hallowed-revered"],"The award honours a hallowed tradition of public service.","这项奖励表彰备受尊崇的公共服务传统。",null,"https://www.merriam-webster.com/dictionary/hallowed"]
  ],[]);
  entry("choir",[
   ["singers","合唱团；唱诗班","n.",["合唱团","唱诗班"],["choir-singers"],"The choir rehearses in the hall on Tuesdays.","合唱团每周二在礼堂排练。",null,"https://www.merriam-webster.com/dictionary/choir"],
   ["space","唱诗班席；教堂唱诗区","n.",["唱诗班席","教堂唱诗区","唱诗班的席位"],["choir-space"],"The visitors entered the choir through a carved wooden screen.","访客穿过雕花木屏风进入唱诗区。",null,"https://www.merriam-webster.com/dictionary/choir"]
  ],[{"terms":["合唱"],"decision":"scope-excluded","reason":"合唱是表演行为，合唱团是组织；本批另列教堂唱诗区。","source":"https://www.merriam-webster.com/dictionary/choir"}]);
  entry("empire",[
   ["state","帝国","n.",["帝国"],["empire-state"],"The map shows the borders of the ancient empire.","地图显示了古代帝国的疆界。",null,"https://www.merriam-webster.com/dictionary/empire"],
   ["business","庞大的企业集团；事业王国","n.",["庞大的企业集团","事业王国"],["empire-business"],"She built a publishing empire from a small bookshop.","她从一家小书店起步，建立了庞大的出版集团。",null,"https://www.merriam-webster.com/dictionary/empire"]
  ],[{"terms":["帝权"],"decision":"scope-excluded","reason":"帝权是统治权力，本批选帝国实体及商业王国，不把二者直接互换。","source":"https://www.merriam-webster.com/dictionary/empire"}]);
  entry("church",[
   ["building","教堂","n.",["教堂"],["church-building"],"The church stands at the centre of the village.","教堂位于村子中央。",null,"https://www.merriam-webster.com/dictionary/church"],
   ["organization","教会；宗教组织","n.",["教会","宗教组织"],["church-organization"],"The church runs a shelter for the homeless.","教会经营着一家无家可归者庇护所。",null,"https://www.merriam-webster.com/dictionary/church"],
   ["service","礼拜；宗教仪式","n.",["礼拜","宗教仪式"],["church-service"],"They go to church on Sunday mornings.","他们每周日早晨去做礼拜。",null,"https://www.merriam-webster.com/dictionary/church"]
  ],[{"terms":["使人接受宗教仪式","教堂的"],"decision":"scope-excluded","reason":"宗教仪式的及物动词及教堂的修饰语未从名词自动生成。","source":"https://www.merriam-webster.com/dictionary/church"}]);
  entry("chronology",[
   ["sequence","年代顺序；年表","n.",["年代顺序","年表","资料按年月次序的排列","按时间顺序编制的表格"],["chronology-sequence"],"The report includes a chronology of the major events.","报告附有重大事件年表。",null,"https://www.merriam-webster.com/dictionary/chronology"]
  ],[{"terms":["年代学"],"decision":"scope-excluded","reason":"测定年代的学科义未单列，本批训练按年代排列的叙述或年表。","source":"https://www.merriam-webster.com/dictionary/chronology"}]);
  entry("athlete",[
   ["sportsperson","运动员","n.",["运动员","运动选手"],["athlete-sportsperson"],"The athlete trained before breakfast.","运动员在早饭前训练。",null,"https://www.merriam-webster.com/dictionary/athlete"]
  ],[]);
  entry("suffix",[
   ["grammar","后缀","n.",["后缀"],["suffix-grammar"],"The suffix '-less' changes the meaning of the word.","后缀“-less”改变了这个词的意思。",null,"https://www.merriam-webster.com/dictionary/suffix"]
  ],[{"terms":["下标","添后缀"],"decision":"scope-excluded","reason":"下标是数学或排版概念；添加后缀的动词未从词缀名词自动建立。","source":"https://www.merriam-webster.com/dictionary/suffix"}]);
  entry("adjective",[
   ["grammar","形容词","n.",["形容词"],["adjective-grammar"],"The adjective 'narrow' describes the path.","形容词“narrow”描述了那条小路。",null,"https://www.merriam-webster.com/dictionary/adjective"]
  ],[{"terms":["形容词的","从属的"],"decision":"scope-excluded","reason":"形容词的及从属的形容词用法未列入本批词类名称。","source":"https://www.merriam-webster.com/dictionary/adjective"}]);
  entry("abbreviation",[
   ["short-form","缩写；缩略形式","n.",["缩写","缩略形式","缩写词"],["abbreviation-short-form"],"The abbreviation appears beside the full name.","缩写出现在全称旁边。",null,"https://www.merriam-webster.com/dictionary/abbreviation"]
  ],[{"terms":["缩短","节略"],"decision":"scope-excluded","reason":"缩短过程的宽泛名词未单列，本批只训练缩略形式。","source":"https://www.merriam-webster.com/dictionary/abbreviation"}]);
  entry("adverb",[
   ["grammar","副词","n.",["副词"],["adverb-grammar"],"The adverb 'quietly' describes how she closed the door.","副词“quietly”描述了她关门的方式。",null,"https://www.merriam-webster.com/dictionary/adverb"]
  ],[]);
  entry("synonym",[
   ["similar-word","同义词；近义词","n.",["同义词","近义词"],["synonym-similar-word"],"The dictionary gives 'rapid' as a synonym for 'fast'.","词典把“rapid”列为“fast”的近义词。",null,"https://www.merriam-webster.com/dictionary/synonym"]
  ],[]);
  entry("preposition",[
   ["grammar","介词","n.",["介词","前置词"],["preposition-grammar"],"The preposition 'under' links the box to its location.","介词“under”把箱子与它的位置联系起来。",null,"https://www.merriam-webster.com/dictionary/preposition"]
  ],[]);
  entry("tension",[
   ["stress","紧张；焦虑","n.",["紧张","焦虑","不安"],["tension-stress"],"A short walk eased her tension.","短暂散步缓解了她的紧张。",null,"https://www.merriam-webster.com/dictionary/tension"],
   ["hostility","紧张关系；对立","n.",["紧张关系","对立"],["tension-hostility"],"The border dispute increased tension between the countries.","边境争端加剧了两国之间的紧张关系。",null,"https://www.merriam-webster.com/dictionary/tension"],
   ["force","张力；拉力","n.",["张力","拉力","拉紧","压力"],["tension-force"],"The technician adjusted the tension of the cable.","技术员调整了电缆的张力。",null,"https://www.merriam-webster.com/dictionary/tension"]
  ],[{"terms":["电压","使紧张"],"decision":"scope-excluded","reason":"电压是特殊电学旧用法，使紧张是动词；本批选情绪、关系和机械张力名词。","source":"https://www.merriam-webster.com/dictionary/tension"}]);
  entry("abbreviate",[
   ["shorten","缩写；缩短","v.",["缩写","缩短","使...简略","使用缩写词"],["abbreviate-shorten"],"The editor abbreviated the title for the cover.","编辑缩短了封面上的标题。",null,"https://www.merriam-webster.com/dictionary/abbreviate"]
  ],[]);
  entry("durable",[
   ["lasting","耐用的；持久的","adj.",["耐用的","持久的"],["durable-lasting","forever-lasting","lasting-forever"],"Choose a durable fabric for the outdoor cushions.","为户外靠垫选择耐用的布料。",null,"https://www.merriam-webster.com/dictionary/durable"]
  ],[]);
  entry("transparent",[
   ["see-through","透明的","adj.",["透明的","透明"],["transparent-see-through"],"The specimens were stored in transparent containers.","标本存放在透明容器中。",null,"https://www.merriam-webster.com/dictionary/transparent"],
   ["open","公开透明的；易看懂的","adj.",["公开透明的","易看懂的","显然的","清晰的"],["transparent-open"],"The committee promised a transparent selection process.","委员会承诺采用公开透明的选拔程序。",null,"https://www.merriam-webster.com/dictionary/transparent"]
  ],[]);
  entry("skate",[
   ["boot","冰鞋；溜冰鞋","n.",["冰鞋","溜冰鞋"],["skate-boot"],"One skate needed a new blade.","一只冰鞋需要换刀刃。",null,"https://www.merriam-webster.com/dictionary/skate"],
   ["glide","滑冰；滑行","v.",["滑冰","滑行","溜冰","滑过"],["skate-glide"],"They skated across the frozen pond.","他们滑过结冰的池塘。",null,"https://www.merriam-webster.com/dictionary/skate"],
   ["fish","鳐鱼","n.",["鳐鱼"],["skate-fish"],"A skate moved slowly along the sandy seabed.","一条鳐鱼沿着沙质海底缓缓游动。",null,"https://www.merriam-webster.com/dictionary/skate"]
  ],[]);
  entry("tent",[
   ["shelter","帐篷","n.",["帐篷"],["tent-shelter"],"We put up the tent before the rain.","我们在下雨前搭好了帐篷。",null,"https://www.merriam-webster.com/dictionary/tent"]
  ],[{"terms":["帷幕","住处","塞条","塞子","住帐蓬","宿营","暂时居住","用帐篷遮盖","使住帐篷","用塞条嵌入"],"decision":"scope-excluded","reason":"塞条等医用物件及搭帐篷动词属于其他范围，本批只选帐篷这一临时住所。","source":"https://www.merriam-webster.com/dictionary/tent"}]);
  entry("dive",[
   ["water","跳水；潜水","v.",["跳水","潜水"],["dive-water"],"She dived into the clear water.","她跳进清澈的水中。",null,"https://www.merriam-webster.com/dictionary/dive"],
   ["plunge","俯冲；急剧下降","v.",["俯冲","急剧下降","猛冲"],["dive-plunge"],"The bird dived towards the water.","鸟向水面俯冲。",null,"https://www.merriam-webster.com/dictionary/dive"],
   ["action","一次跳水；一次潜水","n.",["一次跳水","一次潜水"],["dive-action"],"The instructor checked our equipment before the dive.","教练在潜水前检查了我们的装备。",null,"https://www.merriam-webster.com/dictionary/dive"]
  ],[{"terms":["把...突然伸入"],"decision":"scope-excluded","reason":"把物件突然伸入的及物构式未单列，本批选择跳水、俯冲及其名词动作。","source":"https://www.merriam-webster.com/dictionary/dive"}]);
  entry("camp",[
   ["place","营地；营房","n.",["营地","营房"],["camp-place"],"The hikers reached camp at sunset.","徒步者在日落时抵达营地。",null,"https://www.merriam-webster.com/dictionary/camp"],
   ["group","阵营；派别","n.",["阵营","派别"],["camp-group"],"The proposal divided the committee into two camps.","提案使委员会分成了两个阵营。",null,"https://www.merriam-webster.com/dictionary/camp"],
   ["stay","露营；扎营","v.",["露营","扎营","使扎营"],["camp-stay"],"We camped beside the river for two nights.","我们在河边露营了两晚。",null,"https://www.merriam-webster.com/dictionary/camp"]
  ],[{"terms":["帐篷"],"decision":"scope-excluded","reason":"营地是一处地方或一组临时住处，不直接等于每一顶帐篷。","source":"https://www.merriam-webster.com/dictionary/camp"}]);
  entry("leap",[
   ["jump","跳跃；跃过","v.",["跳跃","跃过","使跃过"],["leap-jump"],"The deer leapt over the low wall.","鹿跃过了矮墙。",null,"https://www.merriam-webster.com/dictionary/leap"],
   ["increase","猛增；骤升","v.",["猛增","骤升","剧增","急变"],["leap-increase"],"Demand leaped after the exhibition.","展览后，需求骤增。",null,"https://www.merriam-webster.com/dictionary/leap"],
   ["jump-noun","一跳；飞跃","n.",["一跳","飞跃"],["leap-jump-noun"],"The discovery marked a great leap in understanding.","这一发现标志着认识上的巨大飞跃。",null,"https://www.merriam-webster.com/dictionary/leap"]
  ],[{"terms":["被越过之物","突然经过"],"decision":"scope-excluded","reason":"被越过之物及突然经过的旧译未单列，本批区分跳跃动作、猛增和名词飞跃。","source":"https://www.merriam-webster.com/dictionary/leap"}]);
  entry("hunt",[
   ["pursue","打猎；猎取","v.",["打猎","猎取","追捕","猎食"],["hunt-pursue"],"The owl hunts at night.","猫头鹰夜间捕猎。",null,"https://www.merriam-webster.com/dictionary/hunt"],
   ["search","寻找；搜寻","v.",["寻找","搜寻","搜索"],["hunt-search"],"She hunted for the missing receipt.","她寻找着丢失的收据。","hunt for","https://www.merriam-webster.com/dictionary/hunt"],
   ["activity","搜寻活动；狩猎","n.",["搜寻活动","狩猎"],["hunt-activity"],"The hunt for the missing boat continued all night.","搜寻失踪小船的行动持续了一整夜。",null,"https://www.merriam-webster.com/dictionary/hunt"]
  ],[{"terms":["猎区"],"decision":"scope-excluded","reason":"猎区是一处区域，不等于狩猎或搜寻活动。","source":"https://www.merriam-webster.com/dictionary/hunt"}]);
  entry("trip",[
   ["journey","短途旅行；行程","n.",["短途旅行","行程","旅行","旅程","远足"],["trip-journey","travel-journeys"],"The school arranged a trip to the observatory.","学校安排了一次参观天文台的旅行。",null,"https://www.merriam-webster.com/dictionary/trip"],
   ["stumble","绊倒；使绊倒","v.",["绊倒","使绊倒","摔倒","失足","使跌倒"],["trip-stumble"],"He tripped over a loose cable.","他被松动的电缆绊倒了。",null,"https://www.merriam-webster.com/dictionary/trip"],
   ["activate","触发；使开关动作","v.",["触发","使开关动作"],["trip-activate"],"The movement tripped the alarm.","这个动作触发了警报。",null,"https://www.merriam-webster.com/dictionary/trip"]
  ],[{"terms":["差错","使犯错","使失败","轻快地走","失误","犯错","结巴"],"decision":"scope-excluded","reason":"失误及使犯错需 trip up 等构式；轻快行走等用法未与旅行或绊倒混合。","source":"https://www.merriam-webster.com/dictionary/trip"}]);
  entry("trend",[
   ["tendency","趋势；潮流","n.",["趋势","潮流","倾向","走向"],["trend-tendency"],"The survey shows a trend towards smaller homes.","调查显示出选择较小住宅的趋势。",null,"https://www.merriam-webster.com/dictionary/trend"],
   ["move","趋向；呈现趋势","v.",["趋向","呈现趋势","转向"],["trend-move"],"Prices trended upward during the summer.","夏季价格呈上升趋势。",null,"https://www.merriam-webster.com/dictionary/trend"]
  ],[]);
  entry("garment",[
   ["clothing","衣服；服装","n.",["衣服","服装","衣装"],["garment-clothing"],"Each garment carries a care label.","每件衣服都有洗护标签。",null,"https://www.merriam-webster.com/dictionary/garment"]
  ],[{"terms":["外表"],"decision":"scope-excluded","reason":"外表为比喻旧译，本批只收录可穿的衣物。","source":"https://www.merriam-webster.com/dictionary/garment"}]);
  entry("bronze",[
   ["metal","青铜","n.",["青铜"],["bronze-metal"],"The statue is made of bronze.","雕像由青铜制成。",null,"https://www.merriam-webster.com/dictionary/bronze"],
   ["medal","铜牌","n.",["铜牌"],["bronze-medal"],"She won bronze in the final.","她在决赛中赢得铜牌。",null,"https://www.merriam-webster.com/dictionary/bronze"],
   ["colour","青铜色的","adj.",["青铜色的"],["bronze-colour"],"The leaves had a bronze glow in the evening light.","叶子在暮光中泛着青铜色。",null,"https://www.merriam-webster.com/dictionary/bronze"]
  ],[{"terms":["铜像"],"decision":"scope-excluded","reason":"青铜塑像的可数物件用法未单列，本批区分材料、奖牌和颜色。","source":"https://www.merriam-webster.com/dictionary/bronze"}]);
  entry("pitch",[
   ["substance","沥青；树脂状黑色物质","n.",["沥青","树脂状黑色物质"],["pitch-substance"],"The workers sealed the joints with pitch.","工人用沥青密封接缝。",null,"https://www.merriam-webster.com/dictionary/pitch"],
   ["sound","音高","n.",["音高"],["pitch-sound"],"The singer had difficulty maintaining the pitch.","歌手难以保持音准。",null,"https://www.merriam-webster.com/dictionary/pitch"],
   ["field","球场","n.",["球场"],["pitch-field"],"The players ran onto the pitch.","球员们跑上球场。",null,"https://www.merriam-webster.com/dictionary/pitch"],
   ["presentation","推销说辞；宣传演说","n.",["推销说辞","宣传演说"],["pitch-presentation"],"She prepared a short pitch for potential investors.","她为潜在投资者准备了一段简短的推介。",null,"https://www.merriam-webster.com/dictionary/pitch"],
   ["intensity","程度；强烈程度","n.",["程度","强烈程度","顶点"],["pitch-intensity"],"Excitement reached a fever pitch before the final.","决赛前，兴奋情绪达到了顶点。",null,"https://www.merriam-webster.com/dictionary/pitch"],
   ["throw","投；投掷","v.",["投","投掷","掷"],["pitch-throw"],"He pitched the ball across the yard.","他把球扔过院子。",null,"https://www.merriam-webster.com/dictionary/pitch"],
   ["erect","搭建帐篷；扎营","v.",["搭建帐篷","扎营","搭帐篷"],["pitch-erect"],"We pitched our tent near the stream.","我们在溪边搭起了帐篷。",null,"https://www.merriam-webster.com/dictionary/pitch"],
   ["propose","推销；推介","v.",["推销","推介","竭力推销"],["pitch-propose"],"They pitched the idea to a local publisher.","他们向当地出版社推介了这个想法。",null,"https://www.merriam-webster.com/dictionary/pitch"],
   ["roll","上下颠簸；俯仰","v.",["上下颠簸","俯仰","前倾","向前倾跌","向前跌"],["pitch-roll"],"The boat pitched in the heavy sea.","船在大浪中上下颠簸。",null,"https://www.merriam-webster.com/dictionary/pitch"],
   ["slope","坡度；倾斜度","n.",["坡度","倾斜度","倾斜"],["pitch-slope"],"The roof has a steep pitch to shed snow.","屋顶坡度很陡，便于积雪滑落。",null,"https://www.merriam-webster.com/dictionary/pitch"],
   ["site","摊位；摆摊或露营的位置","n.",["摊位","摆摊或露营的位置"],["pitch-site"],"The flower seller returned to her usual pitch outside the station.","卖花人回到了车站外惯常摆摊的位置。",null,"https://www.merriam-webster.com/dictionary/pitch"]
  ],[{"terms":["螺距","节距","树脂","为...定调","定位于","用沥青涂","猛然摔倒","坠落","孔距"],"decision":"scope-excluded","reason":"螺距、孔距及用沥青涂等专门或派生用法未单列；不能把任何树脂或坠落都解释为本批沥青或俯仰。","source":"https://www.merriam-webster.com/dictionary/pitch"}]);
  entry("plaster",[
   ["material","灰泥；石膏","n.",["灰泥","石膏"],["plaster-material"],"The plaster on the ceiling had begun to crack.","天花板上的灰泥开始开裂。",null,"https://www.merriam-webster.com/dictionary/plaster"],
   ["dressing","膏药；创可贴","n.",["膏药","创可贴"],["plaster-dressing"],"She covered the small cut with a plaster.","她用创可贴盖住了小伤口。",null,"https://www.merriam-webster.com/dictionary/plaster"],
   ["coat","抹灰；涂抹","v.",["抹灰","涂抹","涂以灰泥"],["plaster-coat"],"They plastered the wall before painting it.","他们先给墙抹灰，再刷漆。",null,"https://www.merriam-webster.com/dictionary/plaster"],
   ["cover","贴满；遍布","v.",["贴满","遍布","粘贴"],["plaster-cover"],"Posters were plastered across the entrance.","入口处贴满了海报。",null,"https://www.merriam-webster.com/dictionary/plaster"]
  ],[{"terms":["安慰(缓解)用品","敷以膏药","掩饰","使平服","彻底击败","减轻"],"decision":"scope-excluded","reason":"缓解用品、掩饰、彻底击败等引申需上下文，未并入灰泥、创可贴及抹灰动作。","source":"https://www.merriam-webster.com/dictionary/plaster"}]);
  entry("linen",[
   ["fabric","亚麻布","n.",["亚麻布"],["linen-fabric"],"The curtains are made of linen.","窗帘用亚麻布制成。",null,"https://www.merriam-webster.com/dictionary/linen"],
   ["household","床上用品；家用布品","n.",["床上用品","家用布品","亚麻制品"],["linen-household"],"Fresh linen was delivered to each room.","干净的床上用品被送到了各个房间。",null,"https://www.merriam-webster.com/dictionary/linen"]
  ],[{"terms":["亚麻线","亚麻布制的","亚麻的"],"decision":"scope-excluded","reason":"亚麻线及材料形容词未单列，本批区分布料与家用布品。","source":"https://www.merriam-webster.com/dictionary/linen"}]);
  entry("cotton",[
   ["fibre","棉；棉花","n.",["棉","棉花"],["cotton-fibre"],"The farmer grew cotton on the dry plain.","农民在干燥的平原上种棉花。",null,"https://www.merriam-webster.com/dictionary/cotton"],
   ["cloth","棉布","n.",["棉布"],["cotton-cloth"],"The shirt is made of soft cotton.","衬衫由柔软的棉布制成。",null,"https://www.merriam-webster.com/dictionary/cotton"],
   ["understand","明白；领会","v.",["明白","领会","理解"],["cotton-understand"],"It took her a moment to cotton on to the joke.","她过了一会儿才明白那个笑话。","cotton on to","https://www.merriam-webster.com/dictionary/cotton"]
  ],[{"terms":["和谐","有好感"],"decision":"scope-excluded","reason":"喜欢需 cotton to，历史和谐义未选；本批另用 cotton on to 明确表示领会。","source":"https://www.merriam-webster.com/dictionary/cotton"}]);
  entry("plastic",[
   ["material","塑料","n.",["塑料","可塑体","可塑性物质"],["plastic-material"],"The casing is made from recycled plastic.","外壳由再生塑料制成。",null,"https://www.merriam-webster.com/dictionary/plastic"],
   ["mouldable","可塑的；易塑形的","adj.",["可塑的","易塑形的","塑造的","有可塑性的","造型的"],["plastic-mouldable","rubber-skin"],"The warm material remained plastic for several minutes.","温热的材料有几分钟仍然可以塑形。",null,"https://www.merriam-webster.com/dictionary/plastic"],
   ["artificial","不自然的；虚假的","adj.",["不自然的","虚假的"],["plastic-artificial"],"He greeted us with a plastic smile.","他用虚假的微笑迎接我们。",null,"https://www.merriam-webster.com/dictionary/plastic"]
  ],[{"terms":["塑料的","易受影响的","有创造力的"],"decision":"scope-excluded","reason":"本批物料为名词；材料形容词、易受影响和有创造力等引申未从可塑性质推导。","source":"https://www.merriam-webster.com/dictionary/plastic"}]);
  entry("nylon",[
   ["material","尼龙；尼龙纤维","n.",["尼龙","尼龙纤维","聚酰胺纤维"],["nylon-material"],"The rope is made of strong nylon.","绳子由结实的尼龙制成。",null,"https://www.merriam-webster.com/dictionary/nylon"]
  ],[]);
  entry("ingredient",[
   ["component","原料；成分；要素","n.",["原料","成分","要素","因素","配合剂","拼料","组分"],["ingredient-component"],"Fresh herbs are an important ingredient in the soup.","新鲜香草是这道汤的重要原料。",null,"https://www.merriam-webster.com/dictionary/ingredient"]
  ],[]);
  entry("dietary",[
   ["food","饮食的；膳食的","adj.",["饮食的","膳食的"],["dietary-food"],"The form asks about dietary needs.","表格询问了膳食需求。",null,"https://www.merriam-webster.com/dictionary/dietary"]
  ],[{"terms":["规定食物"],"decision":"scope-excluded","reason":"饮食安排名词未单列，本批只训练膳食的形容词。","source":"https://www.merriam-webster.com/dictionary/dietary"}]);
  entry("immune",[
   ["resistant","免疫的；有抵抗力的","adj.",["免疫的","有抵抗力的"],["immune-resistant"],"Some plants are immune to this particular disease.","有些植物对这种特定疾病有免疫力。",null,"https://www.merriam-webster.com/dictionary/immune"],
   ["unaffected","不受影响的","adj.",["不受影响的"],["immune-unaffected","side-immunity"],"The company was not immune to criticism.","这家公司并非不受批评影响。",null,"https://www.merriam-webster.com/dictionary/immune"],
   ["exempt","豁免的；免除的","adj.",["豁免的","免除的"],["immune-exempt"],"The old charter made the foundation immune from local taxes.","旧章程使基金会免缴地方税。",null,"https://www.merriam-webster.com/dictionary/immune"]
  ],[{"terms":["免疫者"],"decision":"scope-excluded","reason":"有免疫力者的名词未列入本批形容词训练。","source":"https://www.merriam-webster.com/dictionary/immune"}]);
  entry("slender",[
   ["slim","纤细的；苗条的","adj.",["纤细的","苗条的","纤弱的","细的"],["slender-slim","slight-slim"],"A slender branch reached across the path.","一根纤细的树枝伸过小路。",null,"https://www.merriam-webster.com/dictionary/slender"],
   ["small","微小的；不足的","adj.",["微小的","不足的","微少的","微薄的"],["slender-small"],"They won by a slender margin.","他们以微弱优势取胜。",null,"https://www.merriam-webster.com/dictionary/slender"]
  ],[]);
  entry("edible",[
   ["safe","可食用的","adj.",["可食用的"],["edible-safe"],"The guide distinguishes edible plants from poisonous ones.","指南区分了可食用植物与有毒植物。",null,"https://www.merriam-webster.com/dictionary/edible"]
  ],[{"terms":["食品","食物"],"decision":"scope-excluded","reason":"食品或食物是名词，形容词可食用的并不自动表示某个食品物件。","source":"https://www.merriam-webster.com/dictionary/edible"}]);
  entry("barbecue",[
   ["cook","烧烤；用烤架烤","v.",["烧烤","用烤架烤"],["barbecue-cook"],"We barbecued vegetables in the garden.","我们在花园里烤蔬菜。",null,"https://www.merriam-webster.com/dictionary/barbecue"],
   ["event","烧烤聚会","n.",["烧烤聚会"],["barbecue-event"],"The neighbours held a barbecue on Saturday.","邻居们周六举行了烧烤聚会。",null,"https://www.merriam-webster.com/dictionary/barbecue"],
   ["grill","烧烤架","n.",["烧烤架"],["barbecue-grill"],"He cleaned the barbecue after dinner.","晚饭后，他清洗了烧烤架。",null,"https://www.merriam-webster.com/dictionary/barbecue"],
   ["food","烤肉；烧烤食物","n.",["烤肉","烧烤食物"],["barbecue-food","supply-food"],"He ordered barbecue with a side of beans.","他点了烤肉，配一份豆子。",null,"https://www.merriam-webster.com/dictionary/barbecue"]
  ],[]);
  entry("treatment",[
   ["medical","治疗；疗法","n.",["治疗","疗法"],["treatment-medical"],"The file records the treatment she received at hospital.","档案记载了她在医院接受的治疗。",null,"https://www.merriam-webster.com/dictionary/treatment"],
   ["behaviour","对待；待遇","n.",["对待","待遇"],["treatment-behaviour"],"The workers asked for fair treatment.","工人们要求公平待遇。",null,"https://www.merriam-webster.com/dictionary/treatment"],
   ["processing","处理；加工","n.",["处理","加工"],["treatment-processing"],"The wood needs treatment before outdoor use.","木材在户外使用前需要处理。",null,"https://www.merriam-webster.com/dictionary/treatment"],
   ["presentation","论述；表现方式","n.",["论述","表现方式"],["treatment-presentation"],"The book gives a balanced treatment of the debate.","这本书均衡地论述了这场争论。",null,"https://www.merriam-webster.com/dictionary/treatment"]
  ],[]);
  entry("order",[
   ["command","命令；指示","n.",["命令","指示"],["order-command"],"The captain gave the order to return.","船长下令返航。",null,"https://www.merriam-webster.com/dictionary/order"],
   ["purchase","订单；订购的物品","n.",["订单","订购的物品","定货"],["order-purchase"],"Your order will arrive on Friday.","你订购的物品周五送达。",null,"https://www.merriam-webster.com/dictionary/order"],
   ["sequence","顺序；次序","n.",["顺序","次序"],["order-sequence"],"Arrange the cards in alphabetical order.","按字母顺序排列卡片。",null,"https://www.merriam-webster.com/dictionary/order"],
   ["calm","秩序；有条理的状态","n.",["秩序","有条理的状态"],["order-calm"],"The new manager restored order to the office.","新经理使办公室恢复了秩序。",null,"https://www.merriam-webster.com/dictionary/order"],
   ["group","修道会；宗教团体","n.",["修道会","宗教团体"],["order-group"],"He joined a religious order after university.","大学毕业后，他加入了一个修道会。",null,"https://www.merriam-webster.com/dictionary/order"],
   ["biology","目（生物分类）","n.",["目（生物分类）"],["order-biology"],"The chart groups the animals by order and family.","图表按目和科对动物分类。",null,"https://www.merriam-webster.com/dictionary/order"],
   ["command-verb","命令；要求","v.",["命令","要求"],["order-command-verb","responsibility-compel"],"The officer ordered the driver to stop.","警官命令司机停车。",null,"https://www.merriam-webster.com/dictionary/order"],
   ["buy","订购；点餐","v.",["订购","点餐","定购"],["order-buy"],"She ordered a bowl of soup.","她点了一碗汤。",null,"https://www.merriam-webster.com/dictionary/order"],
   ["arrange","排列；安排","v.",["排列","安排","整理"],["order-arrange","structured-organized"],"The files are ordered by date.","文件按日期排列。",null,"https://www.merriam-webster.com/dictionary/order"]
  ],[{"terms":["规则","阶数"],"decision":"scope-excluded","reason":"规则需具体规章语境；数学阶数未并入本批顺序、命令等用法。","source":"https://www.merriam-webster.com/dictionary/order"}]);
  entry("chef",[
   ["cook","厨师；主厨","n.",["厨师","主厨"],["chef-cook","cook-person"],"The chef prepared a special menu for the evening.","厨师为晚间准备了一份特别菜单。",null,"https://www.merriam-webster.com/dictionary/chef"]
  ],[]);
  entry("itinerary",[
   ["route","行程；旅行路线","n.",["行程","旅行路线","旅程"],["itinerary-route"],"The itinerary includes two nights on the island.","行程包括在岛上住两晚。",null,"https://www.merriam-webster.com/dictionary/itinerary"]
  ],[{"terms":["旅行指南","游记","巡回的","旅程的"],"decision":"scope-excluded","reason":"旅行指南、游记和巡回的形容词是其他用法，本批只选行程计划。","source":"https://www.merriam-webster.com/dictionary/itinerary"}]);
  entry("destination",[
   ["place","目的地；终点","n.",["目的地","终点","目标","目的"],["destination-place"],"The label shows the parcel's destination.","标签显示了包裹的目的地。",null,"https://www.merriam-webster.com/dictionary/destination"]
  ],[{"terms":["目的文件","目的单元"],"decision":"scope-excluded","reason":"目的文件和目的单元为计算机术语，本批只训练送达或旅程终点。","source":"https://www.merriam-webster.com/dictionary/destination"}]);
  entry("commute",[
   ["travel","通勤；定期往返","v.",["通勤","定期往返","经常乘车来往"],["commute-travel"],"She commutes to the city by train.","她乘火车往返市区上班。",null,"https://www.merriam-webster.com/dictionary/commute"],
   ["journey","通勤路程","n.",["通勤路程"],["commute-journey"],"The new office shortened his commute.","新办公室缩短了他的通勤路程。",null,"https://www.merriam-webster.com/dictionary/commute"],
   ["sentence","减刑；改判较轻刑罚","v.",["减刑","改判较轻刑罚","减轻"],["commute-sentence"],"The court commuted the sentence to a fine.","法院把刑罚改判为罚款。",null,"https://www.merriam-webster.com/dictionary/commute"]
  ],[{"terms":["交换","折偿","代偿"],"decision":"scope-excluded","reason":"交换、折偿和数学交换律用法未列入本批通勤与减刑范围。","source":"https://www.merriam-webster.com/dictionary/commute"}]);
  entry("vehicle",[
   ["transport","车辆；交通工具","n.",["车辆","交通工具"],["vehicle-transport"],"No vehicles are allowed beyond the gate.","大门以内禁止车辆通行。",null,"https://www.merriam-webster.com/dictionary/vehicle"],
   ["medium","媒介；载体","n.",["媒介","载体","传播媒介","运载体"],["vehicle-medium"],"Art became a vehicle for her ideas.","艺术成了表达她思想的媒介。",null,"https://www.merriam-webster.com/dictionary/vehicle"]
  ],[{"terms":["漆料"],"decision":"scope-excluded","reason":"漆料中的载液属特定配方语境，本批选交通工具及传播媒介。","source":"https://www.merriam-webster.com/dictionary/vehicle"}]);
  entry("interior",[
   ["inside-adj","内部的；里面的","adj.",["内部的","里面的"],["interior-inside-adj"],"The interior walls were painted white.","内墙刷成了白色。",null,"https://www.merriam-webster.com/dictionary/interior"],
   ["inside","内部；室内","n.",["内部","室内"],["interior-inside"],"The car's interior was surprisingly spacious.","汽车内部出人意料地宽敞。",null,"https://www.merriam-webster.com/dictionary/interior"],
   ["inland","内陆；腹地","n.",["内陆","腹地","内地的"],["interior-inland"],"They travelled from the coast into the interior.","他们从海岸前往内陆。",null,"https://www.merriam-webster.com/dictionary/interior"]
  ],[{"terms":["内政","心灵的","内政的"],"decision":"scope-excluded","reason":"内政机构及心灵属性未单列；内部位置与内政职责不等同。","source":"https://www.merriam-webster.com/dictionary/interior"}]);
  entry("navigate",[
   ["travel","导航；航行；确定路线","v.",["导航","航行","确定路线","航行于","驾驶","操纵"],["navigate-travel"],"They navigated the narrow channel at low tide.","他们在低潮时驶过狭窄航道。",null,"https://www.merriam-webster.com/dictionary/navigate"],
   ["manage","设法通过；应对","v.",["设法通过","应对","使通过"],["navigate-manage"],"She learned to navigate the complex booking system.","她学会了应对复杂的预订系统。",null,"https://www.merriam-webster.com/dictionary/navigate"]
  ],[]);
  entry("voyage",[
   ["journey","航行；航海旅行","n.",["航行","航海旅行","航海","航程","旅行","航空"],["voyage-journey","travel-journeys"],"The voyage across the ocean took several weeks.","横跨大洋的航程用了几周。",null,"https://www.merriam-webster.com/dictionary/voyage"],
   ["sail","航行；远航","v.",["航行","远航","航行越过","飞过"],["voyage-sail","transport-travel"],"They voyaged along the coast in a small boat.","他们乘小船沿海岸航行。",null,"https://www.merriam-webster.com/dictionary/voyage"]
  ],[]);
  entry("aviation",[
   ["flying","航空；飞行","n.",["航空","飞行","航空学","飞行术"],["aviation-flying"],"The museum traces the history of civil aviation.","博物馆追溯了民用航空的历史。",null,"https://www.merriam-webster.com/dictionary/aviation"]
  ],[]);
  entry("travel",[
   ["journey","旅行；行进","v.",["旅行","行进","游历","移动","通过"],["travel-journey","transport-travel"],"They travelled across the country by train.","他们乘火车穿越全国。",null,"https://www.merriam-webster.com/dictionary/travel"],
   ["spread","传播；传送","v.",["传播","传送","被传播"],["travel-spread"],"News of the discovery travelled quickly.","发现的消息很快传开了。",null,"https://www.merriam-webster.com/dictionary/travel"],
   ["activity","旅行活动","n.",["旅行活动"],["travel-activity","travel-journeys"],"Her job involves a great deal of travel.","她的工作需要经常出差旅行。",null,"https://www.merriam-webster.com/dictionary/travel"]
  ],[{"terms":["使移动"],"decision":"scope-excluded","reason":"使移动的及物旧用法未单列，本批选择行进、传播及旅行活动。","source":"https://www.merriam-webster.com/dictionary/travel"}]);
  entry("jurisdiction",[
   ["authority","管辖权；司法权","n.",["管辖权","司法权","审判权","法律管辖权"],["jurisdiction-authority"],"The matter falls outside the committee's jurisdiction.","这件事不在委员会的管辖范围内。",null,"https://www.merriam-webster.com/dictionary/jurisdiction"],
   ["area","管辖区","n.",["管辖区"],["jurisdiction-area"],"The study compares practices in several jurisdictions.","研究比较了几个管辖区的做法。",null,"https://www.merriam-webster.com/dictionary/jurisdiction"]
  ],[]);
  entry("penalty",[
   ["punishment","惩罚；处罚","n.",["惩罚","处罚","刑罚","罚款","报应","罚金(款)","违约金"],["penalty-punishment"],"The rules specify a penalty for late entry.","规则规定了迟交的处罚。",null,"https://www.merriam-webster.com/dictionary/penalty"],
   ["cost","代价；不利后果","n.",["代价","不利后果","不利结果"],["penalty-cost"],"One penalty of the larger design is extra weight.","更大设计的一个代价是额外重量。",null,"https://www.merriam-webster.com/dictionary/penalty"],
   ["sport","罚球；点球","n.",["罚球","点球"],["penalty-sport"],"The referee awarded a penalty.","裁判判了一个点球。",null,"https://www.merriam-webster.com/dictionary/penalty"]
  ],[{"terms":["妨碍"],"decision":"scope-excluded","reason":"妨碍是一般阻碍，不一定是规则处罚或不利代价。","source":"https://www.merriam-webster.com/dictionary/penalty"}]);
  entry("legislate",[
   ["make-law","立法；通过立法规定","v.",["立法","通过立法规定","制定法律","用立法规定"],["legislate-make-law"],"The assembly voted to legislate on waste disposal.","议会投票决定就废物处理立法。",null,"https://www.merriam-webster.com/dictionary/legislate"]
  ],[]);
  entry("official",[
   ["person","官员；公务人员","n.",["官员","公务人员","公务员"],["official-person"],"A local official opened the new bridge.","一位地方官员为新桥揭幕。",null,"https://www.merriam-webster.com/dictionary/official"],
   ["authorized","官方的；正式的","adj.",["官方的","正式的","公务的"],["official-authorized"],"The official report was published on Monday.","正式报告周一公布。",null,"https://www.merriam-webster.com/dictionary/official"],
   ["sport","裁判；赛事官员","n.",["裁判","赛事官员"],["official-sport"],"The official checked the runners' numbers.","赛事官员检查了跑步者的号码。",null,"https://www.merriam-webster.com/dictionary/official"]
  ],[{"terms":["职员"],"decision":"scope-excluded","reason":"不是每位职员都是官员，本批名词限履行官方或赛事职责者。","source":"https://www.merriam-webster.com/dictionary/official"}]);
  entry("default",[
   ["breach","违约；未履行义务","n.",["违约","未履行义务","不履行责任","疏怠职责"],["default-breach"],"The company was in default on the agreement.","这家公司未能履行协议义务。",null,"https://www.merriam-webster.com/dictionary/default"],
   ["preset","默认值；预设选项","n.",["默认值","预设选项","默认","缺省值"],["default-preset"],"You can change the defaults in the settings menu.","你可以在设置菜单中更改默认值。",null,"https://www.merriam-webster.com/dictionary/default"],
   ["no-show","因对手未出场而获胜；弃权","n.",["因对手未出场而获胜","弃权","缺席"],["default-no-show"],"The team won by default when its opponents failed to arrive.","对手未能到场，这支队伍不战而胜。","by default","https://www.merriam-webster.com/dictionary/default"],
   ["fail","违约；不履行义务","v.",["违约","不履行义务","拖欠"],["default-fail"],"The borrower defaulted on the loan.","借款人未能偿还贷款。","default on","https://www.merriam-webster.com/dictionary/default"],
   ["use-preset","默认采用","v.",["默认采用"],["default-use-preset"],"The program defaults to a standard font.","程序默认采用标准字体。","default to","https://www.merriam-webster.com/dictionary/default"]
  ],[]);
  entry("allowance",[
   ["money","津贴；零花钱","n.",["津贴","零花钱","零用钱"],["allowance-money"],"The students received a small travel allowance.","学生们获得了一小笔交通津贴。",null,"https://www.merriam-webster.com/dictionary/allowance"],
   ["amount","限额；定量","n.",["限额","定量","定量供应"],["allowance-amount"],"The ticket includes a baggage allowance of one suitcase.","票价包含一只手提箱的行李限额。",null,"https://www.merriam-webster.com/dictionary/allowance"],
   ["consideration","体谅；考虑因素","n.",["体谅","考虑因素"],["allowance-consideration"],"Make allowance for delays when planning the journey.","规划旅程时，要考虑延误。","make allowance for","https://www.merriam-webster.com/dictionary/allowance"]
  ],[{"terms":["折扣","允许"],"decision":"scope-excluded","reason":"折扣与允许行为未单列，本批选津贴、配额及 make allowance for。","source":"https://www.merriam-webster.com/dictionary/allowance"}]);
  entry("impotent",[
   ["powerless","无力的；无能为力的","adj.",["无力的","无能为力的","虚弱的","无效的"],["impotent-powerless","lack-power"],"The council felt impotent in the face of the crisis.","面对危机，议会感到无能为力。",null,"https://www.merriam-webster.com/dictionary/impotent"],
   ["physical","阳痿的；勃起功能障碍的","adj.",["阳痿的","勃起功能障碍的","阳萎的"],["impotent-physical"],"He was embarrassed to tell the doctor that he was impotent.","他不好意思告诉医生自己有勃起功能障碍。",null,"https://www.merriam-webster.com/dictionary/impotent"]
  ],[]);
  entry("oblige",[
   ["force","迫使；使有义务","v.",["迫使","使有义务","强制"],["oblige-force","responsibility-compel","compel-force"],"The sudden rain obliged us to seek shelter.","突如其来的雨迫使我们寻找躲雨处。",null,"https://www.merriam-webster.com/dictionary/oblige"],
   ["help","帮忙；满足请求","v.",["帮忙","满足请求","施恩惠于","施恩惠"],["oblige-help"],"Could you oblige me by moving the chair?","能否帮我挪一下椅子？",null,"https://www.merriam-webster.com/dictionary/oblige"]
  ],[{"terms":["使感激"],"decision":"scope-excluded","reason":"感到欠情或感激常见于 obliged 等构式，本批只选迫使与帮忙的动词。","source":"https://www.merriam-webster.com/dictionary/oblige"}]);
  entry("rejection",[
   ["refusal","拒绝；否决","n.",["拒绝","否决","抛弃","驳回","拒收"],["rejection-refusal"],"The rejection of the proposal surprised its supporters.","提案遭否决，让支持者们感到意外。",null,"https://www.merriam-webster.com/dictionary/rejection"],
   ["medical","排异反应","n.",["排异反应"],["rejection-medical"],"The study examines rejection after organ transplantation.","研究考察了器官移植后的排异反应。",null,"https://www.merriam-webster.com/dictionary/rejection"]
  ],[{"terms":["被抛弃的东西","呕出物","报废"],"decision":"scope-excluded","reason":"被弃物、呕出物和物件报废未单列；拒绝过程与排异反应已区分。","source":"https://www.merriam-webster.com/dictionary/rejection"}]);
  entry("conflict",[
   ["dispute","冲突；争执","n.",["冲突","争执","战斗"],["conflict-dispute","word-argument","argument-dispute"],"The conflict began over access to water.","冲突起因是用水问题。",null,"https://www.merriam-webster.com/dictionary/conflict"],
   ["clash","矛盾；不一致","v.",["矛盾","不一致","抵触"],["conflict-clash"],"His account conflicts with the written record.","他的叙述与书面记录不一致。",null,"https://www.merriam-webster.com/dictionary/conflict"]
  ],[]);
  entry("alliance",[
   ["union","联盟；同盟","n.",["联盟","同盟","联合","联姻"],["alliance-union"],"The two groups formed an alliance to protect the forest.","两个团体结成联盟保护森林。",null,"https://www.merriam-webster.com/dictionary/alliance"]
  ],[]);
  entry("strategy",[
   ["plan","策略；战略","n.",["策略","战略"],["strategy-plan"],"The team developed a strategy for reducing waste.","团队制定了减少浪费的策略。",null,"https://www.merriam-webster.com/dictionary/strategy"]
  ],[]);
  entry("tank",[
   ["container","罐；箱；储液槽","n.",["罐","箱","储液槽","槽","柜","储水池"],["tank-container"],"Rainwater is collected in a large tank.","雨水收集在一个大水箱里。",null,"https://www.merriam-webster.com/dictionary/tank"],
   ["vehicle","坦克","n.",["坦克"],["tank-vehicle"],"The museum displays a tank from the last century.","博物馆陈列着一辆上世纪的坦克。",null,"https://www.merriam-webster.com/dictionary/tank"],
   ["fail","暴跌；惨败（非正式用语）","v.",["暴跌","惨败（非正式用语）"],["tank-fail"],"Sales tanked after the product recall.","产品召回后，销量暴跌。",null,"https://www.merriam-webster.com/dictionary/tank"]
  ],[{"terms":["池塘","储于箱中"],"decision":"scope-excluded","reason":"池塘未必是人工储液罐，储入箱中的动词未从容器名词自动建立。","source":"https://www.merriam-webster.com/dictionary/tank"}]);
  entry("target",[
   ["mark","靶；目标物","n.",["靶","目标物","靶子"],["target-mark"],"The arrow missed the target.","箭没射中靶。",null,"https://www.merriam-webster.com/dictionary/target"],
   ["goal","目标；指标","n.",["目标","指标"],["target-goal","goal-aim"],"The team reached its monthly target.","团队达到了月度指标。",null,"https://www.merriam-webster.com/dictionary/target"],
   ["aim","以……为目标；针对","v.",["以……为目标","针对","对准"],["target-aim"],"The campaign targets new drivers.","这项宣传活动面向新司机。",null,"https://www.merriam-webster.com/dictionary/target"]
  ],[{"terms":["订指标"],"decision":"scope-excluded","reason":"订立指标与针对已有目标不同，本批不从目标名词自动生成所有管理动作。","source":"https://www.merriam-webster.com/dictionary/target"}]);
  entry("pistol",[
   ["weapon","手枪","n.",["手枪"],["pistol-weapon"],"The antique pistol was displayed behind glass.","那把古董手枪陈列在玻璃后面。",null,"https://www.merriam-webster.com/dictionary/pistol"]
  ],[{"terms":["信号枪","以手枪杀死(或伤害)"],"decision":"scope-excluded","reason":"信号枪是特殊用途物件，枪杀动词未列入本批普通手枪名词。","source":"https://www.merriam-webster.com/dictionary/pistol"}]);
  entry("glitter",[
   ["shine","闪耀；闪烁","v.",["闪耀","闪烁"],["glitter-shine"],"The lake glittered in the morning sun.","湖面在晨光中闪耀。",null,"https://www.merriam-webster.com/dictionary/glitter"],
   ["sparkle","闪光；闪耀的吸引力","n.",["闪光","闪耀的吸引力","灿烂","辉耀"],["glitter-sparkle"],"She was drawn to the glitter of city life.","城市生活的光彩吸引了她。",null,"https://www.merriam-webster.com/dictionary/glitter"],
   ["particles","闪光粉；亮片","n.",["闪光粉","亮片"],["glitter-particles"],"The card was decorated with silver glitter.","卡片装饰着银色闪光粉。",null,"https://www.merriam-webster.com/dictionary/glitter"]
  ],[]);
  entry("blade",[
   ["edge","刀刃；刀片","n.",["刀刃","刀片","刀锋","刀口"],["blade-edge"],"Replace the blade when it becomes dull.","刀片变钝时更换它。",null,"https://www.merriam-webster.com/dictionary/blade"],
   ["flat-part","桨叶；叶片","n.",["桨叶","叶片"],["blade-flat-part"],"The fan has three curved blades.","风扇有三片弯曲的叶片。",null,"https://www.merriam-webster.com/dictionary/blade"],
   ["leaf","草叶；叶片","n.",["草叶","叶片"],["blade-leaf"],"A drop of water clung to a blade of grass.","一滴水挂在一片草叶上。",null,"https://www.merriam-webster.com/dictionary/blade"]
  ],[{"terms":["剑","页"],"decision":"scope-excluded","reason":"剑不等同于剑刃；页等旧引申未纳入刀刃或叶片范围。","source":"https://www.merriam-webster.com/dictionary/blade"}]);
  entry("sword",[
   ["weapon","剑","n.",["剑"],["sword-weapon"],"The actor carried a wooden sword on stage.","演员在舞台上拿着一把木剑。",null,"https://www.merriam-webster.com/dictionary/sword"]
  ],[{"terms":["刀","战争","武力","剑状物"],"decision":"scope-excluded","reason":"一般刀具、武力或战争与长刃剑不同，本批只选剑的物件义。","source":"https://www.merriam-webster.com/dictionary/sword"}]);
  entry("psychological",[
   ["mind","心理的；精神上的","adj.",["心理的","精神上的","心理学的","心灵的","心理上的"],["psychological-mind","science-mind"],"The study examines the psychological effects of noise.","研究考察了噪声的心理影响。",null,"https://www.merriam-webster.com/dictionary/psychological"]
  ],[]);
  entry("psychology",[
   ["science","心理学","n.",["心理学"],["psychology-science","science-mind"],"She studied psychology at university.","她在大学学习心理学。",null,"https://www.merriam-webster.com/dictionary/psychology"],
   ["character","心理特点；心理状态","n.",["心理特点","心理状态"],["psychology-character"],"The novel explores the psychology of its narrator.","小说探索了叙述者的心理。",null,"https://www.merriam-webster.com/dictionary/psychology"]
  ],[]);
  entry("shoulder",[
   ["body","肩；肩膀","n.",["肩","肩膀"],["shoulder-body"],"He carried the bag over one shoulder.","他把包背在一侧肩膀上。",null,"https://www.merriam-webster.com/dictionary/shoulder"],
   ["road","路肩","n.",["路肩"],["shoulder-road"],"The driver stopped on the hard shoulder.","司机把车停在硬路肩上。",null,"https://www.merriam-webster.com/dictionary/shoulder"],
   ["carry","承担；扛起","v.",["承担","扛起","肩负","负担","担任"],["shoulder-carry"],"She shouldered most of the responsibility.","她承担了大部分责任。",null,"https://www.merriam-webster.com/dictionary/shoulder"]
  ],[{"terms":["衣肩","用肩推挤"],"decision":"scope-excluded","reason":"衣肩部件与用肩推挤的动作未单列，本批区分人体肩部、路肩及承担。","source":"https://www.merriam-webster.com/dictionary/shoulder"}]);
  entry("tongue",[
   ["organ","舌头","n.",["舌头","舌"],["tongue-organ"],"The child stuck out his tongue.","孩子伸出了舌头。",null,"https://www.merriam-webster.com/dictionary/tongue"],
   ["language","语言","n.",["语言","语言能力","讲话方式"],["tongue-language","body-language"],"She speaks three languages besides her mother tongue.","除了母语，她还会说三种语言。",null,"https://www.merriam-webster.com/dictionary/tongue"],
   ["flap","舌状物；鞋舌","n.",["舌状物","鞋舌"],["tongue-flap"],"The tongue of the boot had slipped sideways.","靴子的鞋舌滑到了一边。",null,"https://www.merriam-webster.com/dictionary/tongue"]
  ],[{"terms":["舔","斥责","发...的音","使用舌头","吹管乐器"],"decision":"scope-excluded","reason":"舔、责骂及吹奏管乐器的动词属于其他语境，不与舌头或语言名词混合。","source":"https://www.merriam-webster.com/dictionary/tongue"}]);
  entry("jaw",[
   ["bone","颌；下巴","n.",["颌","下巴","颚"],["jaw-bone"],"He rubbed his jaw while thinking.","他一边思考一边揉下巴。",null,"https://www.merriam-webster.com/dictionary/jaw"],
   ["clamp","钳口；夹爪","n.",["钳口","夹爪"],["jaw-clamp"],"The jaws of the vice held the metal firmly.","台钳的夹爪牢牢夹住了金属。",null,"https://www.merriam-webster.com/dictionary/jaw"]
  ],[{"terms":["闲谈","教训","唠叨"],"decision":"scope-excluded","reason":"闲谈或唠叨的动词未从颌骨名词自动建立。","source":"https://www.merriam-webster.com/dictionary/jaw"}]);
  entry("waist",[
   ["body","腰；腰部","n.",["腰","腰部"],["waist-body"],"The belt fits neatly around her waist.","腰带在她腰间贴合得很好。",null,"https://www.merriam-webster.com/dictionary/waist"],
   ["clothing","衣服的腰围部分","n.",["衣服的腰围部分"],["waist-clothing"],"The waist of the trousers was too tight.","裤腰太紧了。",null,"https://www.merriam-webster.com/dictionary/waist"]
  ],[]);
  entry("thumb",[
   ["digit","拇指","n.",["拇指"],["thumb-digit"],"She pressed the button with her thumb.","她用拇指按了按钮。",null,"https://www.merriam-webster.com/dictionary/thumb"],
   ["browse","用拇指翻动；翻阅","v.",["用拇指翻动","翻阅","以拇指拨弄","用拇指翻旧","迅速翻阅"],["thumb-browse"],"He thumbed through the old catalogue.","他翻阅了旧目录。","thumb through","https://www.merriam-webster.com/dictionary/thumb"]
  ],[{"terms":["笨拙地摆弄","作搭车手势"],"decision":"scope-excluded","reason":"搭车手势需 thumb a lift 等构式，本批只选拇指名词和翻阅。","source":"https://www.merriam-webster.com/dictionary/thumb"}]);
  entry("rib",[
   ["bone","肋骨","n.",["肋骨"],["rib-bone"],"The scan showed a crack in one rib.","扫描显示一根肋骨有裂纹。",null,"https://www.merriam-webster.com/dictionary/rib"],
   ["framework","肋状支架；加强筋","n.",["肋状支架","加强筋","肋状物"],["rib-framework"],"The tent's flexible ribs support the fabric.","帐篷的柔性支架支撑着篷布。",null,"https://www.merriam-webster.com/dictionary/rib"],
   ["tease","逗弄；取笑","v.",["逗弄","取笑","戏弄"],["rib-tease","joking-ridicule","tease-mock"],"His friends ribbed him about his new hat.","朋友们拿他的新帽子逗他。",null,"https://www.merriam-webster.com/dictionary/rib"]
  ],[{"terms":["笑话","装肋状物于"],"decision":"scope-excluded","reason":"名词笑话与加肋骨支架的动词未单列，本批逗弄动词已有例句。","source":"https://www.merriam-webster.com/dictionary/rib"}]);
  entry("thigh",[
   ["body","大腿","n.",["大腿","股"],["thigh-body"],"The pocket sits against the side of the thigh.","口袋贴在大腿外侧。",null,"https://www.merriam-webster.com/dictionary/thigh"]
  ],[]);
  entry("annual",[
   ["yearly","每年的；年度的","adj.",["每年的","年度的","一年一次的","全年的"],["annual-yearly"],"The annual festival takes place in May.","一年一度的节庆在五月举行。",null,"https://www.merriam-webster.com/dictionary/annual"],
   ["plant","一年生植物","n.",["一年生植物","一年生的"],["annual-plant"],"The border is planted with colourful annuals.","花坛边种着色彩鲜艳的一年生植物。",null,"https://www.merriam-webster.com/dictionary/annual"],
   ["publication","年刊；年报","n.",["年刊","年报"],["annual-publication"],"The club's annual includes photographs of every event.","俱乐部的年刊收录了每场活动的照片。",null,"https://www.merriam-webster.com/dictionary/annual"]
  ],[]);
  entry("simultaneous",[
   ["same-time","同时发生的","adj.",["同时发生的","同时的"],["simultaneous-same-time"],"The team arranged simultaneous tests in two cities.","团队在两座城市安排了同时进行的测试。",null,"https://www.merriam-webster.com/dictionary/simultaneous"]
  ],[]);
  entry("moment",[
   ["instant","片刻；瞬间","n.",["片刻","瞬间"],["moment-instant","time-instant"],"Wait a moment while I find the key.","等一会儿，我找一下钥匙。",null,"https://www.merriam-webster.com/dictionary/moment"],
   ["importance","重要性；重大意义","n.",["重要性","重大意义","重要"],["moment-importance"],"It was a decision of great moment.","那是一个意义重大的决定。",null,"https://www.merriam-webster.com/dictionary/moment"],
   ["physics","力矩","n.",["力矩","矩"],["moment-physics"],"The students calculated the moment of the force.","学生们计算了这个力的力矩。",null,"https://www.merriam-webster.com/dictionary/moment"]
  ],[{"terms":["阶段","时机","因素"],"decision":"scope-excluded","reason":"一般阶段、机会和因素未必是片刻、重要性或物理力矩，不当作通用同义词。","source":"https://www.merriam-webster.com/dictionary/moment"}]);
  entry("midst",[
   ["middle","中间；当中","n.",["中间","当中","在...中间"],["midst-middle"],"A small garden stood in the midst of the buildings.","建筑群当中有一个小花园。","in the midst of","https://www.merriam-webster.com/dictionary/midst"]
  ],[]);
  entry("ongoing",[
   ["continuing","持续进行的；仍在发展的","adj.",["持续进行的","仍在发展的","前进的","进行的","不间断的"],["ongoing-continuing"],"The ongoing repairs have closed one entrance.","持续进行的维修封闭了一个入口。",null,"https://www.merriam-webster.com/dictionary/ongoing"]
  ],[{"terms":["前进","发展"],"decision":"scope-excluded","reason":"前进或发展为名词式旧译，本批只选持续进行的形容词。","source":"https://www.merriam-webster.com/dictionary/ongoing"}]);
  entry("everlasting",[
   ["eternal","永恒的；长久的","adj.",["永恒的","长久的","持久的"],["everlasting-eternal","forever-lasting","lasting-forever"],"They hoped the agreement would bring everlasting peace.","他们希望协议带来长久和平。",null,"https://www.merriam-webster.com/dictionary/everlasting"]
  ],[{"terms":["上帝","神"],"decision":"scope-excluded","reason":"上帝或神是宗教称谓用法，本批长久形容词不代替特定神名。","source":"https://www.merriam-webster.com/dictionary/everlasting"}]);
  entry("consecutive",[
   ["successive","连续的；接连的","adj.",["连续的","接连的","联贯的","连接的"],["consecutive-successive"],"The shop closed for three consecutive days.","商店连续关门三天。",null,"https://www.merriam-webster.com/dictionary/consecutive"]
  ],[]);
  entry("finally",[
   ["at-last","终于；最终","adv.",["终于","最终"],["finally-at-last"],"The train finally arrived after a long delay.","延误很久后，火车终于到了。",null,"https://www.merriam-webster.com/dictionary/finally"],
   ["lastly","最后一点；最后地","adv.",["最后一点","最后地","最后"],["finally-lastly"],"Finally, check that every window is closed.","最后，检查每扇窗户都已关好。",null,"https://www.merriam-webster.com/dictionary/finally"]
  ],[]);
  entry("minute",[
   ["time","分钟","n.",["分钟"],["minute-time"],"The journey takes about twenty minutes.","这段路程大约需要二十分钟。",null,"https://www.merriam-webster.com/dictionary/minute"],
   ["instant","片刻；一会儿","n.",["片刻","一会儿","瞬间"],["minute-instant","time-instant"],"I will be with you in a minute.","我马上就来。",null,"https://www.merriam-webster.com/dictionary/minute"],
   ["record","会议记录","n.",["会议记录"],["minute-record"],"The secretary sent the minutes after the meeting.","秘书在会后发送了会议记录。",null,"https://www.merriam-webster.com/dictionary/minute"],
   ["record-verb","记录会议内容","v.",["记录会议内容"],["minute-record-verb"],"She minuted the key decisions before leaving.","她在离开前记录了关键决定。",null,"https://www.merriam-webster.com/dictionary/minute"]
  ],[{"terms":["微小的","细微的","极详细的"],"decision":"scope-excluded","reason":"当前音标 /ˈmɪnɪt/ 适用于分钟及记录；微小或极详细的形容词读音不同，暂不混入同一整词发音训练。","source":"https://www.merriam-webster.com/dictionary/minute"}]);
  entry("chew",[
   ["teeth","咀嚼；嚼","v.",["咀嚼","嚼","嚼碎"],["chew-teeth"],"The horse chewed the grass slowly.","马慢慢嚼着草。",null,"https://www.merriam-webster.com/dictionary/chew"],
   ["consider","仔细考虑","v.",["仔细考虑","细想"],["chew-consider","contemplate-consider","reflect-think","ponder-reason","weigh-consider"],"Let me chew over the proposal before deciding.","让我仔细考虑提案后再作决定。","chew over","https://www.merriam-webster.com/dictionary/chew"]
  ],[{"terms":["咀嚼物"],"decision":"scope-excluded","reason":"嚼食物是动作，咀嚼物是物件；本批另用 chew over 表示考虑。","source":"https://www.merriam-webster.com/dictionary/chew"}]);
  entry("toast",[
   ["bread","烤面包片；吐司","n.",["烤面包片","吐司","烤面包"],["toast-bread"],"She spread butter on the toast.","她把黄油抹在吐司上。",null,"https://www.merriam-webster.com/dictionary/toast"],
   ["tribute","祝酒；敬酒词","n.",["祝酒","敬酒词","干杯","敬酒"],["toast-tribute"],"He proposed a toast to the volunteers.","他提议向志愿者敬酒。",null,"https://www.merriam-webster.com/dictionary/toast"],
   ["brown","烘烤；烤黄","v.",["烘烤","烤黄","烤","烘"],["toast-brown","warmth-toast"],"Toast the bread until it is golden.","把面包烤至金黄色。",null,"https://www.merriam-webster.com/dictionary/toast"],
   ["honour","为……祝酒","v.",["为……祝酒"],["toast-honour"],"They toasted the success of the expedition.","他们为远征成功举杯祝酒。",null,"https://www.merriam-webster.com/dictionary/toast"]
  ],[{"terms":["使暖和"],"decision":"scope-excluded","reason":"使身体暖和的比喻未纳入本批烤面包或祝酒范围。","source":"https://www.merriam-webster.com/dictionary/toast"}]);
  entry("squeeze",[
   ["press","挤压；捏","v.",["挤压","捏","紧握","挤"],["squeeze-press","reduce-compress"],"Squeeze the tube gently from the bottom.","从底部轻轻挤压软管。",null,"https://www.merriam-webster.com/dictionary/squeeze"],
   ["extract","挤出；榨出","v.",["挤出","榨出","榨","榨取"],["squeeze-extract"],"She squeezed the juice from a lemon.","她榨出了一个柠檬的汁。",null,"https://www.merriam-webster.com/dictionary/squeeze"],
   ["fit","挤入；勉强放进","v.",["挤入","勉强放进"],["squeeze-fit"],"We squeezed into the last two seats.","我们挤进了最后两个座位。",null,"https://www.merriam-webster.com/dictionary/squeeze"],
   ["pressure","压力；拮据","n.",["压力","拮据"],["squeeze-pressure"],"The rise in rent put a squeeze on the budget.","租金上涨使预算吃紧。",null,"https://www.merriam-webster.com/dictionary/squeeze"]
  ],[{"terms":["佣金","压榨"],"decision":"scope-excluded","reason":"佣金及经济盘剥的具体用法未单列，挤压或压力不保证涉及佣金。","source":"https://www.merriam-webster.com/dictionary/squeeze"}]);
  entry("stir",[
   ["mix","搅拌","v.",["搅拌","搅动"],["stir-mix","mix-combine","batch12-equivalent-mix-combine","blend-mix-verb"],"Stir the sauce until it is smooth.","把酱汁搅拌均匀。",null,"https://www.merriam-webster.com/dictionary/stir"],
   ["move","动；轻轻移动","v.",["动","轻轻移动","移动","摇动","走动"],["stir-move"],"The leaves barely stirred in the still air.","静静的空气中，树叶几乎不动。",null,"https://www.merriam-webster.com/dictionary/stir"],
   ["excite","激起；唤起","v.",["激起","唤起","惹起"],["stir-excite"],"The speech stirred hope among the listeners.","演讲在听众心中唤起了希望。",null,"https://www.merriam-webster.com/dictionary/stir"],
   ["commotion","轰动；骚动","n.",["轰动","骚动"],["stir-commotion"],"The unexpected visit caused a stir.","这次意外到访引起了轰动。",null,"https://www.merriam-webster.com/dictionary/stir"]
  ],[{"terms":["监狱","传播"],"decision":"scope-excluded","reason":"监狱为俚语，传播为较宽引申，本批不混入搅拌、移动及激起。","source":"https://www.merriam-webster.com/dictionary/stir"}]);
  entry("found",[
   ["establish","建立；创办","v.",["建立","创办","创立"],["found-establish"],"They founded the school with a small donation.","他们用一小笔捐款创办了学校。",null,"https://www.merriam-webster.com/dictionary/found"],
   ["base","把……建立在……上","v.",["把……建立在……上","奠基于"],["found-base"],"Her argument is founded on careful observation.","她的论证建立在细致观察之上。","be founded on","https://www.merriam-webster.com/dictionary/found"]
  ],[{"terms":["铸造","发现","找到"],"decision":"scope-excluded","reason":"发现、找到是 find 的过去式，不另造本词义项；铸造是另一词源组，暂不列入建立及奠基。","source":"https://www.merriam-webster.com/dictionary/found"}]);
  entry("structure",[
   ["arrangement","结构；构造","n.",["结构","构造","构成"],["structure-arrangement"],"The diagram shows the structure of the bridge.","图示展示了桥的结构。",null,"https://www.merriam-webster.com/dictionary/structure"],
   ["building","建筑物；构筑物","n.",["建筑物","构筑物"],["structure-building"],"The wooden structure stood near the river.","木制建筑物矗立在河边。",null,"https://www.merriam-webster.com/dictionary/structure"],
   ["organize","组织；安排","v.",["组织","安排"],["structure-organize","structured-organized"],"She structured the lesson around three questions.","她围绕三个问题组织了课程。",null,"https://www.merriam-webster.com/dictionary/structure"]
  ],[]);
  entry("stability",[
   ["steadiness","稳定；稳固","n.",["稳定","稳固","安定","稳定性","坚实","巩固"],["stability-steadiness","stable-steady","steady-stable"],"The wider base improved the table's stability.","更宽的底座提高了桌子的稳定性。",null,"https://www.merriam-webster.com/dictionary/stability"]
  ],[]);
  entry("obstruct",[
   ["block","阻塞；挡住","v.",["阻塞","挡住","阻隔","遮没"],["obstruct-block"],"A delivery van obstructed the entrance.","一辆送货车堵住了入口。",null,"https://www.merriam-webster.com/dictionary/obstruct"],
   ["hinder","妨碍；阻挠","v.",["妨碍","阻挠","设障碍"],["obstruct-hinder"],"The missing documents obstructed the investigation.","文件丢失妨碍了调查。",null,"https://www.merriam-webster.com/dictionary/obstruct"]
  ],[]);
  entry("landmark",[
   ["place","地标；标志性建筑","n.",["地标","标志性建筑","陆标","地界标","界标"],["landmark-place"],"The old tower is a familiar landmark.","老塔是一个人们熟悉的地标。",null,"https://www.merriam-webster.com/dictionary/landmark"],
   ["milestone","里程碑；重大事件","n.",["里程碑","重大事件","划时代的事"],["landmark-milestone"],"The agreement was a landmark in their cooperation.","协议是他们合作中的一个里程碑。",null,"https://www.merriam-webster.com/dictionary/landmark"]
  ],[]);
  entry("marxism",[
   ["theory","马克思主义","n.",["马克思主义"],["marxism-theory"],"The course compares Marxism with other social theories.","课程比较了马克思主义与其他社会理论。",null,"https://www.merriam-webster.com/dictionary/marxism"]
  ],[{"terms":["马克思的","马克思主义的"],"decision":"scope-excluded","reason":"马克思的及马克思主义的为形容词式旧译，本批只训练理论名称这一名词。","source":"https://www.merriam-webster.com/dictionary/marxism"}]);
  entry("hierarchy",[
   ["levels","等级制度；层级结构","n.",["等级制度","层级结构","等级体系","分级结构","分层结构"],["hierarchy-levels"],"The chart explains the hierarchy within the organization.","图表解释了组织内部的层级结构。",null,"https://www.merriam-webster.com/dictionary/hierarchy"]
  ],[{"terms":["僧侣统治","新闻组","新闻组分层"],"decision":"scope-excluded","reason":"僧侣统治属历史用法；新闻组及其层级属具体计算机应用，不与所有层级结构完全等同。","source":"https://www.merriam-webster.com/dictionary/hierarchy"}]);
  entry("government",[
   ["authority","政府；执政机构","n.",["政府","执政机构","内阁"],["government-authority","order-government"],"The government announced a new transport plan.","政府宣布了一项新交通计划。",null,"https://www.merriam-webster.com/dictionary/government"],
   ["governing","治理；统治","n.",["治理","统治","政体"],["government-governing","order-government"],"The book examines methods of local government.","这本书研究了地方治理的方法。",null,"https://www.merriam-webster.com/dictionary/government"]
  ],[{"terms":["政治"],"decision":"scope-excluded","reason":"政治范围大于政府机构或治理过程，不与 politics 无条件互换。","source":"https://www.merriam-webster.com/dictionary/government"}]);
  entry("communist",[
   ["person","共产主义者","n.",["共产主义者","共产党员"],["communist-person"],"The historian studied the writings of a communist organizer.","历史学家研究了一位共产主义组织者的著作。",null,"https://www.merriam-webster.com/dictionary/communist"],
   ["political","共产主义的","adj.",["共产主义的","共产党的"],["communist-political"],"The archive includes newspapers from several communist parties.","档案收录了几个共产党的报纸。",null,"https://www.merriam-webster.com/dictionary/communist"]
  ],[]);
  entry("common",[
   ["usual","常见的；普遍的","adj.",["常见的","普遍的","通常的"],["common-usual"],"This bird is common near the coast.","这种鸟在海岸附近很常见。",null,"https://www.merriam-webster.com/dictionary/common"],
   ["shared","共同的；共有的","adj.",["共同的","共有的"],["common-shared"],"The neighbours share a common entrance.","邻居们共用一个入口。",null,"https://www.merriam-webster.com/dictionary/common"],
   ["ordinary","普通的；平常的","adj.",["普通的","平常的","通俗的"],["common-ordinary"],"The law should protect the interests of common people.","法律应保护普通民众的利益。",null,"https://www.merriam-webster.com/dictionary/common"],
   ["land","公共用地；公地","n.",["公共用地","公地"],["common-land"],"They walked their dogs across the village common.","他们牵着狗走过村里的公地。",null,"https://www.merriam-webster.com/dictionary/common"]
  ],[{"terms":["公共的","公用块"],"decision":"scope-excluded","reason":"公共的属性及计算机公用块未单列；本批公地是名词，不用形容词替换。","source":"https://www.merriam-webster.com/dictionary/common"}]);
  entry("bureaucratism",[
   ["red-tape","官僚主义；繁文缛节作风","n.",["官僚主义","繁文缛节作风","官僚作风"],["bureaucratism-red-tape"],"The report blamed bureaucratism for the repeated delays.","报告将反复延误归咎于官僚主义。",null,"https://www.merriam-webster.com/dictionary/bureaucracy"]
  ],[]);
  entry("banner",[
   ["flag","旗帜；横幅","n.",["旗帜","横幅"],["banner-flag"],"The students carried a banner across the square.","学生们举着横幅穿过广场。",null,"https://www.merriam-webster.com/dictionary/banner"],
   ["heading","横幅标题；横幅广告","n.",["横幅标题","横幅广告"],["banner-heading"],"A colourful banner appeared at the top of the page.","页面顶部出现了一条彩色横幅。",null,"https://www.merriam-webster.com/dictionary/banner"],
   ["outstanding","特别成功的；出色的","adj.",["特别成功的","出色的","显著的","特别好的"],["banner-outstanding"],"It was a banner year for the small theatre.","那是小剧院成绩出色的一年。",null,"https://www.merriam-webster.com/dictionary/banner"]
  ],[]);
  entry("president",[
   ["leader","总统；国家元首","n.",["总统","国家元首"],["president-leader"],"The president welcomed the visiting delegation.","总统欢迎来访代表团。",null,"https://www.merriam-webster.com/dictionary/president"],
   ["head","会长；校长；机构负责人","n.",["会长","校长","机构负责人","总裁","(学院)院长","(大学)校长"],["president-head"],"The university president opened the exhibition.","大学校长为展览揭幕。",null,"https://www.merriam-webster.com/dictionary/president"]
  ],[{"terms":["董事长","主管人","主持人","总经理"],"decision":"scope-excluded","reason":"公司总裁、董事长、总经理职务不必相同；普通主管或主持者也未必称 president，需按机构正式职称判断。","source":"https://www.merriam-webster.com/dictionary/president"}]);
  entry("premier",[
   ["leader","总理；首相","n.",["总理","首相"],["premier-leader"],"The premier addressed the assembly.","总理向议会发表讲话。",null,"https://www.merriam-webster.com/dictionary/premier"],
   ["leading","首要的；最优秀的","adj.",["首要的","最优秀的","首位的"],["premier-leading"],"The city became the region's premier trading centre.","这座城市成了该地区首要的贸易中心。",null,"https://www.merriam-webster.com/dictionary/premier"]
  ],[{"terms":["最初的"],"decision":"scope-excluded","reason":"最初的历史时间义未单列，本批选择地位首要及总理。","source":"https://www.merriam-webster.com/dictionary/premier"}]);
  entry("market",[
   ["place","市场；集市","n.",["市场","集市"],["market-place"],"We bought vegetables at the market.","我们在集市上买了蔬菜。",null,"https://www.merriam-webster.com/dictionary/market"],
   ["demand","需求；销路","n.",["需求","销路"],["market-demand"],"There is a growing market for repaired furniture.","修复家具的市场需求在增长。",null,"https://www.merriam-webster.com/dictionary/market"],
   ["buyers","目标市场；潜在购买群体","n.",["目标市场","潜在购买群体","推销地区"],["market-buyers"],"The company entered the children's book market.","这家公司进入了儿童图书市场。",null,"https://www.merriam-webster.com/dictionary/market"],
   ["sell","推销；销售","v.",["推销","销售","交易","在市场上交易","使上市","在市场上买卖"],["market-sell","counter-sales"],"They market their cheese through local shops.","他们通过当地商店销售奶酪。",null,"https://www.merriam-webster.com/dictionary/market"]
  ],[{"terms":["行情","市面"],"decision":"scope-excluded","reason":"行情或价格为另一具体市场义，本批需求量不等于市场价格，也不以市面宽泛概括所有用法。","source":"https://www.merriam-webster.com/dictionary/market"}]);
  entry("endow",[
   ["fund","捐资；资助","v.",["捐资","资助","捐赠","捐助","赠送财产给"],["endow-fund","work-giving-finance","provide-financial-support"],"The family endowed a scholarship for young musicians.","这家人为年轻音乐家捐资设立了奖学金。",null,"https://www.merriam-webster.com/dictionary/endow"],
   ["gift","赋予；使具有","v.",["赋予","使具有","授与"],["endow-gift"],"The region is endowed with rich mineral resources.","这个地区拥有丰富的矿产资源。","be endowed with","https://www.merriam-webster.com/dictionary/endow"]
  ],[{"terms":["分给寡妇一份遗产"],"decision":"scope-excluded","reason":"为寡妇划分遗产属历史财产语境，本批只选捐资与赋予能力。","source":"https://www.merriam-webster.com/dictionary/endow"}]);
  entry("industry",[
   ["manufacturing","工业；制造业","n.",["工业","制造业","实业"],["industry-manufacturing"],"Industry expanded rapidly around the port.","港口周围的工业迅速发展。",null,"https://www.merriam-webster.com/dictionary/industry"],
   ["sector","行业；产业","n.",["行业","产业"],["industry-sector"],"She works in the tourism industry.","她在旅游行业工作。",null,"https://www.merriam-webster.com/dictionary/industry"],
   ["diligence","勤奋；勤劳","n.",["勤奋","勤劳"],["industry-diligence"],"His industry impressed the other researchers.","他的勤奋给其他研究者留下了深刻印象。",null,"https://www.merriam-webster.com/dictionary/industry"]
  ],[{"terms":["企业","有组织的劳动"],"decision":"scope-excluded","reason":"单个企业不等于整个行业；有组织劳动也不必然意味着勤奋，本批三类名词已明确限定。","source":"https://www.merriam-webster.com/dictionary/industry"}]);
  entry("advertise",[
   ["promote","做广告；宣传","v.",["做广告","宣传","通知","公布"],["advertise-promote"],"The shop advertised its new opening hours.","商店宣传了新的营业时间。",null,"https://www.merriam-webster.com/dictionary/advertise"]
  ],[]);
  entry("merchant",[
   ["trader","商人；批发商","n.",["商人","批发商","店主"],["merchant-trader"],"The merchant sold cloth from several countries.","商人出售来自几个国家的布料。",null,"https://www.merriam-webster.com/dictionary/merchant"]
  ],[{"terms":["商业的","商人的"],"decision":"scope-excluded","reason":"商人的及商业的形容词未从商人名词自动生成。","source":"https://www.merriam-webster.com/dictionary/merchant"}]);
  entry("endowment",[
   ["fund","捐赠基金；捐资","n.",["捐赠基金","捐资","捐助","捐赠","捐款"],["endowment-fund","charitable-gift"],"The museum relies on income from its endowment.","博物馆依靠捐赠基金的收益。",null,"https://www.merriam-webster.com/dictionary/endowment"],
   ["talent","天赋；禀赋","n.",["天赋","禀赋","才能"],["endowment-talent"],"Her natural endowments included an excellent memory.","她的天赋包括出色的记忆力。",null,"https://www.merriam-webster.com/dictionary/endowment"]
  ],[{"terms":["养老金"],"decision":"scope-excluded","reason":"养老金是特定给付安排，本批捐赠基金不意味着养老金。","source":"https://www.merriam-webster.com/dictionary/endowment"}]);
  entry("finance",[
   ["field","金融；财务","n.",["金融","财务","财政"],["finance-field"],"She studied finance before joining the company.","加入公司前，她学过金融。",null,"https://www.merriam-webster.com/dictionary/finance"],
   ["funds","资金；财力","n.",["资金","财力"],["finance-funds"],"The project was delayed by a shortage of finance.","项目因缺乏资金而推迟。",null,"https://www.merriam-webster.com/dictionary/finance"],
   ["fund","为……提供资金","v.",["为……提供资金","供给...经费","负担经费","筹措资金"],["finance-fund","work-giving-finance","provide-financial-support"],"The grant financed the repairs.","资助金为维修提供了资金。",null,"https://www.merriam-webster.com/dictionary/finance"]
  ],[]);
  entry("coupon",[
   ["discount","优惠券；票券","n.",["优惠券","票券","赠券"],["coupon-discount"],"The coupon gives a discount on the next visit.","优惠券可在下次光顾时打折。",null,"https://www.merriam-webster.com/dictionary/coupon"],
   ["interest","息票；债券利息凭券","n.",["息票","债券利息凭券","利息单"],["coupon-interest"],"The bond's coupon was payable twice a year.","这张债券的息票每年支付两次。",null,"https://www.merriam-webster.com/dictionary/coupon"]
  ],[{"terms":["联票"],"decision":"scope-excluded","reason":"联票或票根需具体票务语境，本批只选优惠券和债券息票。","source":"https://www.merriam-webster.com/dictionary/coupon"}]);
  entry("exchange",[
   ["swap","交换；互换","n.",["交换","互换","交易"],["exchange-swap","word-exchange"],"The visit encouraged an exchange of ideas.","访问促进了思想交流。",null,"https://www.merriam-webster.com/dictionary/exchange"],
   ["conversation","短暂交谈；交锋","n.",["短暂交谈","交锋"],["exchange-conversation"],"A sharp exchange followed the announcement.","公告之后出现了一番激烈交锋。",null,"https://www.merriam-webster.com/dictionary/exchange"],
   ["place","交易所","n.",["交易所"],["exchange-place"],"The company joined the local commodity exchange.","公司加入了当地商品交易所。",null,"https://www.merriam-webster.com/dictionary/exchange"],
   ["trade","交换；更换","v.",["交换","更换"],["exchange-trade","word-exchange","swap-exchange-verb"],"They exchanged addresses before leaving.","离开前，他们交换了地址。",null,"https://www.merriam-webster.com/dictionary/exchange"],
   ["currency","兑换货币","v.",["兑换货币","汇兑","兑换"],["exchange-currency","change-exchange-currency"],"She exchanged pounds for euros.","她把英镑兑换成了欧元。",null,"https://www.merriam-webster.com/dictionary/exchange"]
  ],[{"terms":["(电话)交换局","交换机","电话局"],"decision":"scope-excluded","reason":"电话交换局或交换机为专门物件，不与交易所、交换动作混合。","source":"https://www.merriam-webster.com/dictionary/exchange"}]);
  entry("gay",[
   ["orientation","同性恋的","adj.",["同性恋的"],["gay-orientation"],"The film follows a gay couple raising a daughter.","电影讲述了一对同性伴侣抚养女儿的故事。",null,"https://www.merriam-webster.com/dictionary/gay"],
   ["cheerful","快乐的；愉快的（旧用法）","adj.",["快乐的","愉快的（旧用法）","欢快的"],["gay-cheerful"],"The old song describes a gay summer evening.","那首老歌描绘了一个愉快的夏夜。",null,"https://www.merriam-webster.com/dictionary/gay"]
  ],[{"terms":["艳丽的","放荡的"],"decision":"scope-excluded","reason":"艳丽和放荡为历史用法，不用于解释现代同性恋取向；本批将现代含义与旧快乐义分开。","source":"https://www.merriam-webster.com/dictionary/gay"}]);
  entry("infant",[
   ["baby","婴儿","n.",["婴儿"],["infant-baby"],"The infant slept in a basket beside the bed.","婴儿睡在床边的篮子里。",null,"https://www.merriam-webster.com/dictionary/infant"],
   ["early","初期的；初创的","adj.",["初期的","初创的"],["infant-early"],"The new measures supported an infant industry.","新措施支持了一个初创行业。",null,"https://www.merriam-webster.com/dictionary/infant"]
  ],[{"terms":["儿童","初学者","婴儿的","幼稚的"],"decision":"scope-excluded","reason":"法律未成年人、初学者及婴儿的形容词用法未纳入本批；婴儿不等于所有儿童，初创也不表示幼稚。","source":"https://www.merriam-webster.com/dictionary/infant"}]);
  entry("sibling",[
   ["relative","兄弟姐妹","n.",["兄弟姐妹","兄弟","同胞","同胞(兄弟姐妹)"],["sibling-relative","relatives-kin"],"Each child may bring one sibling to the event.","每个孩子可带一位兄弟姐妹参加活动。",null,"https://www.merriam-webster.com/dictionary/sibling"]
  ],[]);
  entry("gang",[
   ["criminal","帮派；犯罪团伙","n.",["帮派","犯罪团伙"],["gang-criminal"],"The gang was responsible for several thefts.","这个团伙对几起盗窃案负有责任。",null,"https://www.merriam-webster.com/dictionary/gang"],
   ["group","一伙人；一队人","n.",["一伙人","一队人","队","群","帮"],["gang-group"],"A gang of workers repaired the track.","一队工人修理了轨道。",null,"https://www.merriam-webster.com/dictionary/gang"],
   ["unite","结伙；联合起来","v.",["结伙","联合起来","成群结队","结成一伙","使成群结队"],["gang-unite"],"The children ganged up to demand another game.","孩子们联合起来要求再玩一局。","gang up","https://www.merriam-webster.com/dictionary/gang"]
  ],[]);
  entry("teenager",[
   ["young-person","青少年；十三至十九岁的人","n.",["青少年","十三至十九岁的人","十三岁到十九岁的少年"],["teenager-young-person","adult-youth"],"The centre offers music lessons for teenagers.","这个中心为青少年提供音乐课程。",null,"https://www.merriam-webster.com/dictionary/teenager"]
  ],[]);
  entry("lover",[
   ["partner","爱人；恋人","n.",["爱人","恋人"],["lover-partner"],"The letters were written to her lover.","这些信是写给她恋人的。",null,"https://www.merriam-webster.com/dictionary/lover"],
   ["enthusiast","爱好者","n.",["爱好者"],["lover-enthusiast"],"The festival attracts music lovers from many cities.","节庆吸引了许多城市的音乐爱好者。",null,"https://www.merriam-webster.com/dictionary/lover"]
  ],[]);
  entry("folk",[
   ["people","人们；民众","n.",["人们","民众","民族"],["folk-people"],"Local folk told us about the old bridge.","当地人给我们讲了老桥的故事。",null,"https://www.merriam-webster.com/dictionary/folk"],
   ["family","家人；父母","n.",["家人","父母","亲属"],["folk-family"],"She went home to see her folks.","她回家看望家人。",null,"https://www.merriam-webster.com/dictionary/folk"],
   ["traditional","民间的；民俗的","adj.",["民间的","民俗的"],["folk-traditional"],"The concert includes traditional folk songs.","音乐会包含传统民歌。",null,"https://www.merriam-webster.com/dictionary/folk"]
  ],[]);
  entry("relative",[
   ["person","亲戚；亲属","n.",["亲戚","亲属"],["relative-person","relatives-kin"],"Several relatives came to stay for the wedding.","几位亲戚来小住，参加婚礼。",null,"https://www.merriam-webster.com/dictionary/relative"],
   ["comparative","相对的；比较而言的","adj.",["相对的","比较而言的","比较的"],["relative-comparative"],"The room offered relative peace after the noisy hall.","与喧闹大厅相比，这个房间相对安静。",null,"https://www.merriam-webster.com/dictionary/relative"],
   ["connected","相关的；关于……的","adj.",["相关的","关于……的","有关系的"],["relative-connected"],"The report contains information relative to the repairs.","报告包含了与维修有关的信息。","relative to","https://www.merriam-webster.com/dictionary/relative"]
  ],[{"terms":["关系词"],"decision":"scope-excluded","reason":"关系词是语法术语，本批只选亲属、相对及有关。","source":"https://www.merriam-webster.com/dictionary/relative"}]);
  entry("teen",[
   ["person","青少年","n.",["青少年"],["teen-person","adult-youth"],"The magazine is popular with teens.","这本杂志很受青少年欢迎。",null,"https://www.merriam-webster.com/dictionary/teen"],
   ["years","十几岁的年龄段","n.",["十几岁的年龄段"],["teen-years"],"She spent her teens in a coastal town.","她在海边小镇度过了十几岁的年华。",null,"https://www.merriam-webster.com/dictionary/teen"]
  ],[{"terms":["愤怒","悲哀"],"decision":"scope-excluded","reason":"愤怒、悲哀属于另一古旧词源组，不并入现代青少年及年龄段。","source":"https://www.merriam-webster.com/dictionary/teen"}]);
  entry("explain",[
   ["clarify","解释；说明","v.",["解释","说明"],["explain-clarify","explanation-clarify","clarify-explain","illuminate-explain"],"The guide explained how the lock worked.","导游解释了船闸如何工作。",null,"https://www.merriam-webster.com/dictionary/explain"]
  ],[]);
  entry("quarrel",[
   ["argument","争吵；口角","n.",["争吵","口角","吵架","反目"],["quarrel-argument","word-argument","argument-dispute","heated-argument","legal-conflict"],"The quarrel began over a missing key.","争吵因一把丢失的钥匙而起。",null,"https://www.merriam-webster.com/dictionary/quarrel"],
   ["argue","争吵；争论","v.",["争吵","争论"],["quarrel-argue","word-argument"],"They quarrelled about the best route.","他们争论哪条路线最好。",null,"https://www.merriam-webster.com/dictionary/quarrel"],
   ["objection","不满；反对理由","n.",["不满","反对理由","怨言"],["quarrel-objection"],"I have no quarrel with the main aim of the plan.","我并不反对计划的主要目标。","have no quarrel with","https://www.merriam-webster.com/dictionary/quarrel"]
  ],[{"terms":["方头凿","挑剔"],"decision":"scope-excluded","reason":"方头弩箭等物件义属于另一词组来源，旧方头凿不认证为争吵；挑剔动词未单列。","source":"https://www.merriam-webster.com/dictionary/quarrel"}]);
  entry("whistle",[
   ["instrument","哨子","n.",["哨子","口哨","汽笛"],["whistle-instrument"],"The coach blew the whistle twice.","教练吹了两次哨子。",null,"https://www.merriam-webster.com/dictionary/whistle"],
   ["sound","口哨声；鸣笛声","n.",["口哨声","鸣笛声","啸啸声"],["whistle-sound"],"A distant whistle announced the train.","远处的鸣笛声预告了火车到来。",null,"https://www.merriam-webster.com/dictionary/whistle"],
   ["make-sound","吹口哨；鸣笛","v.",["吹口哨","鸣笛","鸣汽笛","发嘘嘘声","用口哨或吹哨传意","用口哨演奏"],["whistle-make-sound"],"He whistled softly while working.","他工作时轻轻吹着口哨。",null,"https://www.merriam-webster.com/dictionary/whistle"]
  ],[]);
  entry("notice",[
   ["observe","注意到；察觉","v.",["注意到","察觉"],["notice-observe","observation-noticing","observe-notice"],"She noticed a light in the empty house.","她注意到空房子里亮着灯。",null,"https://www.merriam-webster.com/dictionary/notice"],
   ["announcement","通知；告示","n.",["通知","告示","布告"],["notice-announcement","speech-announcement"],"A notice on the gate explained the closure.","大门上的告示解释了关闭原因。",null,"https://www.merriam-webster.com/dictionary/notice"],
   ["attention","注意；关注","n.",["注意","关注"],["notice-attention"],"The change escaped his notice.","他没有注意到这个变化。",null,"https://www.merriam-webster.com/dictionary/notice"],
   ["warning","预先通知；解约通知","n.",["预先通知","解约通知","预告"],["notice-warning"],"The tenant gave notice before leaving.","租客离开前发出了退租通知。",null,"https://www.merriam-webster.com/dictionary/notice"]
  ],[{"terms":["短评","评论","提及"],"decision":"scope-excluded","reason":"报刊短评、评论及提及为其他用法，本批只选察觉、通知、注意和预先告知。","source":"https://www.merriam-webster.com/dictionary/notice"}]);
  entry("mock",[
   ["ridicule","嘲笑；讥讽","v.",["嘲笑","讥讽","戏弄","嘲弄"],["mock-ridicule","joking-ridicule","tease-mock"],"The children mocked his unusual accent.","孩子们嘲笑他不寻常的口音。",null,"https://www.merriam-webster.com/dictionary/mock"],
   ["simulated","模拟的；仿真的","adj.",["模拟的","仿真的","模仿","假的","伪造的"],["mock-simulated"],"The students took a mock examination.","学生们参加了一次模拟考试。",null,"https://www.merriam-webster.com/dictionary/mock"]
  ],[{"terms":["虚伪地","使失望","欺骗","挫败"],"decision":"scope-excluded","reason":"使失望、挫败和副词式虚伪地未单列；模拟物不必意在欺骗。","source":"https://www.merriam-webster.com/dictionary/mock"}]);
  entry("urge",[
   ["encourage","敦促；力劝","v.",["敦促","力劝","驱策","竭力主张","推动","强烈要求"],["urge-encourage"],"She urged him to apply for the scholarship.","她力劝他申请奖学金。",null,"https://www.merriam-webster.com/dictionary/urge"],
   ["impulse","冲动；强烈欲望","n.",["冲动","强烈欲望","推动力","迫切的要求"],["urge-impulse","impulse-urge"],"He resisted the urge to interrupt.","他忍住了插话的冲动。",null,"https://www.merriam-webster.com/dictionary/urge"]
  ],[]);
  entry("scold",[
   ["rebuke","责骂；训斥","v.",["责骂","训斥"],["scold-rebuke"],"The parent scolded the child for running into the road.","家长因孩子跑到路上而训斥了他。",null,"https://www.merriam-webster.com/dictionary/scold"]
  ],[{"terms":["好骂街的人"],"decision":"scope-excluded","reason":"爱骂街者的名词身份未从训斥动作自动生成。","source":"https://www.merriam-webster.com/dictionary/scold"}]);
  entry("provoke",[
   ["cause","引起；激起","v.",["引起","激起","惹起","诱导","刺激","煽动"],["provoke-cause","lead-cause","generate-cause"],"The announcement provoked a lively debate.","公告引发了热烈讨论。",null,"https://www.merriam-webster.com/dictionary/provoke"],
   ["annoy","挑衅；激怒","v.",["挑衅","激怒"],["provoke-annoy","annoy-irritate","annoy-disrupt"],"He deliberately provoked his opponent with a rude remark.","他故意用无礼的话激怒对手。",null,"https://www.merriam-webster.com/dictionary/provoke"]
  ],[]);
  entry("boast",[
   ["brag","吹嘘；自夸","v.",["吹嘘","自夸","吹牛","夸口说"],["boast-brag"],"He boasted about his victory for days.","他连续几天吹嘘自己的胜利。",null,"https://www.merriam-webster.com/dictionary/boast"],
   ["possess","拥有值得自豪的事物","v.",["拥有值得自豪的事物","自恃有"],["boast-possess"],"The village boasts a medieval bridge.","村庄拥有一座引以为豪的中世纪桥梁。",null,"https://www.merriam-webster.com/dictionary/boast"],
   ["claim","夸口；自夸的话","n.",["夸口","自夸的话"],["boast-claim"],"Her claim sounded like an empty boast.","她的说法听起来像空洞的夸口。",null,"https://www.merriam-webster.com/dictionary/boast"]
  ],[]);
 }
 if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch16=register;
})(typeof window==='object'?window:globalThis);
