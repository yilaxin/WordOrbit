/* Batch 09, 2026-11-06: dictionary-checked public learning senses.
 * All English examples and Chinese translations are original WordOrbit writing.
 * No learner records or selection evidence are bundled. */
(function(scope){
  'use strict';
  function register(add){
    const sources={jeopardise:'jeopardize',emphasise:'emphasize'};
    const entries={},reviewed={};
    const rows=`
jeopardise|risk|v.|危及；使陷入危险|A rushed inspection could jeopardise the safety of everyone on board.|草率的检查可能危及船上所有人的安全。|endanger-safety
abnormal|unusual|adj.|反常的；异常的；不正常的|An abnormal rise in pressure caused the alarm to sound.|压力异常升高，触发了警报。|deviate-from-normal
eastern|east-region|adj.|东部的；位于或来自东方的|The eastern entrance is closed while the bridge is repaired.|桥梁维修期间，东侧入口关闭。|eastern-location
eastern|east-cultures|adj.|东方国家或文化的|The exhibition compares eastern and western approaches to garden design.|展览比较了东方与西方的园林设计方式。|eastern-cultural-traditions
oriental|eastern-objects|adj.|东方的；亚洲的（多用于艺术、物品等）|The collection includes oriental ceramics traded across the Indian Ocean.|这批藏品包括经印度洋贸易传播的东方陶瓷。|eastern-cultural-traditions
appropriate|suitable|adj.|适当的；合适的|Choose footwear appropriate for a long walk on uneven ground.|请选择适合在不平地面长距离行走的鞋。|suitable-for-purpose|appropriate for
appropriate|take|v.|擅自占用；挪用|The official was dismissed for appropriating public funds.|该官员因挪用公款被解职。|take-without-permission
appropriate|allocate|v.|拨出款项；划拨用于特定目的|Parliament appropriated extra funds for repairing rural schools.|议会拨出额外资金，用于修缮乡村学校。|allocate-funds
distant|space|adj.|遥远的；远处的|A distant lighthouse became visible as the fog lifted.|雾散后，一座远处的灯塔显现出来。|far-away-space
distant|time|adj.|久远的；遥远将来的|The family hopes to return in the not too distant future.|这家人希望在不太遥远的将来返回。|far-away-time
distant|relation|adj.|远亲的；关系疏远的|A distant cousin sent us a photograph of our grandparents.|一位远房表亲给我们寄来了一张祖父母的照片。|remote-family-relationship
distant|aloof|adj.|冷淡的；不友好的|He remained distant even when his new neighbours tried to chat.|即使新邻居试着攀谈，他仍显得冷淡。|emotionally-aloof
distant|distracted|adj.|心不在焉的；出神的|She answered with a distant look, still thinking about the letter.|她神情恍惚地回答，仍在想着那封信。|mentally-absent
suburban|location|adj.|郊区的；住在郊区的|The new tram connects suburban neighbourhoods with the hospital.|新有轨电车把郊区社区与医院连接起来。|suburban-location
suburban|conventional|adj.|保守乏味的；眼界狭窄的（贬义）|The critic dismissed the comedy as safe and suburban.|评论家认为这部喜剧保守乏味，毫无新意。|narrow-conventional-outlook
wild|undomesticated|adj.|野生的；未驯养或栽培的|Wild orchids grow beside the path without any help from gardeners.|野生兰花无需园丁照料，就生长在小路旁。|wild-organisms
wild|land|adj.|荒无人烟的；未开垦的|They crossed a wild stretch of moorland before reaching the village.|他们穿过一片未开垦的荒原，才到达村庄。|uncultivated-wilderness
wild|uncontrolled|adj.|失控的；放纵的|The children ran wild in the empty hall after lessons.|下课后，孩子们在空荡的礼堂里放肆地乱跑。|unrestrained-behaviour
wild|violent|adj.|猛烈的；狂暴的|A wild storm forced the fishing boats to remain in harbour.|一场猛烈的风暴迫使渔船留在港内。|violent-weather
wild|emotional|adj.|极度愤怒或激动的|The crowd was wild with joy after the last-minute goal.|最后时刻的进球让人群欣喜若狂。|extreme-emotional-state|wild with
wild|guess|adj.|胡乱猜测的；没有根据的|Without the survey results, any estimate would be a wild guess.|没有调查结果，任何估计都只是瞎猜。|unsupported-guess
wild|reckless|adj.|鲁莽的；轻率的|His wild driving frightened everyone in the minibus.|他鲁莽的驾驶吓坏了小巴上的所有人。|reckless-risk-taking
wild|enthusiastic|adj.|非常喜欢的；热衷的|My younger sister is wild about astronomy and watches every launch.|我妹妹非常热衷天文学，每次发射都会观看。|enthusiastic-about|wild about
wild|unconventional|adj.|离奇的；大胆不拘一格的|The architect proposed a wild design with gardens on every floor.|建筑师提出了一个大胆的设计，每层楼都设有花园。|unconventional-imaginative
wild|untidy|adj.|蓬乱的；杂乱的|His wild hair made it look as though he had just left bed.|他蓬乱的头发让他看起来像刚起床。|dishevelled-appearance
wild|wilderness|n.|自然野外；荒野|The rescued birds were released back into the wild.|获救的鸟被放归野外。|uncultivated-wilderness|in the wild / the wilds
wild|freely|adv.|狂野地；不受控制地|The neglected vines were allowed to grow wild across the wall.|无人照料的藤蔓任其不受控制地爬满墙面。|unrestrained-behaviour|grow wild / run wild
natural|nature|adj.|自然界的；天然的；非人造的|The curtains are made from natural fibres rather than plastic.|这些窗帘使用天然纤维制成，而不是塑料。|natural-not-artificial
natural|expected|adj.|正常的；合乎情理的|It is natural to feel nervous before your first public speech.|第一次公开演讲前感到紧张是正常的。|normal-expected-response
natural|innate|adj.|天生的；本能的|She has a natural ability to recognise unfamiliar melodies.|她天生善于辨认陌生的旋律。|innate-ability,innate-behaviour
natural|unaffected|adj.|自然不做作的；真实的|The interview works best when the conversation feels natural.|交谈自然不做作时，访谈的效果最好。|unaffected-genuine,sincere-feeling,authentic-not-fake
natural|biological|adj.|亲生的；血缘上的|The adopted child later met her natural mother.|这个被收养的孩子后来见到了亲生母亲。|biological-parentage
natural|talented-person|n.|天生擅长某事的人|With her balance and timing, she is a natural at gymnastics.|凭借出色的平衡感和节奏感，她天生适合练体操。|innately-talented-person|a natural at
natural|music|n./adj.|还原音；本位音的（音乐）|The score marks the final note as B natural rather than B flat.|乐谱把最后一个音标为还原的B音，而不是降B音。|unsharpened-unflattened-note
artificial|manufactured|adj.|人造的；人工的；非天然的|Artificial light allows researchers to grow seedlings through winter.|人工照明使研究人员能够在冬季培育幼苗。|human-manufactured
artificial|imitation|adj.|仿制的；假的|She decorated the empty windows with artificial flowers.|她用假花装饰空荡的窗户。|imitation-not-genuine
artificial|insincere|adj.|不自然的；做作的；不真诚的|His artificial smile disappeared as soon as the camera was lowered.|相机一放下，他那做作的笑容就消失了。|unaffected-genuine
intense|strength|adj.|强烈的；极度的|The intense sunlight faded the labels on the outdoor display.|强烈的阳光使户外展品上的标签褪了色。|extreme-intensity
intense|person|adj.|热情专注的；情绪强烈的|He is an intense teacher who expects every student to question assumptions.|他是一位热情专注的老师，要求每个学生都质疑既有假设。|emotionally-intense-person
gas|state|n.|气体|Heating the liquid caused it to turn into a gas.|加热使这种液体变成了气体。|gaseous-matter
gas|fuel|n.|煤气；天然气；燃气|The restaurant switched from gas to electric cooking equipment.|餐馆把燃气烹饪设备换成了电气设备。|gaseous-fuel
gas|petrol|n.|汽油（美式）|We stopped for gas before entering the long desert highway.|进入漫长的沙漠公路前，我们停车加了汽油。|petrol-fuel
gas|poison|n.|毒气；有害气体|The safety officer checked the tunnel for poisonous gas.|安全员检查了隧道里是否有毒气。|toxic-gas
gas|digestive|n.|肠胃胀气（美式）|He felt uncomfortable because of gas after the meal.|饭后，他因肠胃胀气感到不适。|intestinal-flatus
gas|expose|v.|使吸入有害气体；用毒气伤害|Several workers were gassed when a pipe leaked inside the plant.|工厂内一根管道泄漏，数名工人吸入有害气体而受伤。|expose-to-toxic-gas
gas|fill|v.|给汽车加油（美式）|They gassed up the van before leaving the service station.|他们离开服务站前给厢式车加满了油。|refuel-vehicle|gas up
gasoline|fuel|n.|汽油（美式）|This generator runs on gasoline rather than diesel.|这台发电机烧汽油，而不是柴油。|petrol-fuel
petroleum|oil|n.|石油；原油|The port handles petroleum brought in by large tankers.|这座港口处理大型油轮运来的石油。|crude-petroleum
respiration|breathing|n.|呼吸；吸气和呼气的过程|The sensor records changes in respiration while the volunteer sleeps.|传感器记录志愿者睡眠时的呼吸变化。|breathing-process
respiration|cellular|n.|细胞呼吸；释放能量的呼吸作用|Plant cells use respiration to release energy from stored sugars.|植物细胞通过呼吸作用释放储存的糖中的能量。|cellular-energy-respiration
respiratory|breathing|adj.|呼吸的；呼吸系统的|The study examines how dust affects respiratory health.|这项研究考察粉尘如何影响呼吸系统健康。|respiratory-system
protect|defend|v.|保护；防卫；使免受伤害|A thick layer of bark helps protect the tree from heat.|一层厚树皮有助于保护树木免受高温伤害。|defend-from-harm|protect from / against
protect|industry|v.|保护本国产业免受外国竞争|The tariff was introduced to protect local textile producers.|征收这项关税是为了保护本地纺织品生产商。|trade-protectionism
protective|safety|adj.|防护的；提供保护的|Visitors must wear protective glasses near the cutting machine.|游客靠近切割机时必须佩戴防护眼镜。|defend-from-harm
protective|caring|adj.|爱护的；关切保护的|She became protective of her younger brother after his accident.|弟弟遭遇事故后，她变得格外关切地保护他。|protective-personal-concern|protective of
protective|trade|adj.|贸易保护性的|Protective duties raised the price of imported furniture.|保护性关税抬高了进口家具的价格。|trade-protectionism
protection|safety|n.|保护；防卫|The roof offers little protection from driving rain.|这个屋顶几乎挡不住斜着打来的雨。|defend-from-harm
protection|device|n.|保护物；防护措施|The padding provides extra protection for fragile equipment.|衬垫为易碎设备提供了额外防护。|protective-device
protection|trade|n.|贸易保护；保护关税制度|The report questions whether protection helps small domestic firms.|报告质疑贸易保护是否有助于本国小企业。|trade-protectionism
protection|racket|n.|勒索的保护费；靠付费免遭骚扰的保护|The shopkeeper refused to pay protection to the local gang.|店主拒绝向当地帮派交保护费。|extortion-protection-money
protection|contraception|n.|避孕防护措施；避孕用具|The couple discussed using protection before they became sexually active.|这对伴侣在开始性生活前讨论了使用避孕防护措施。|contraceptive-protection
surroundings|environment|n. plural|周围环境；周围的事物|The quiet surroundings helped her concentrate on her reading.|安静的周围环境有助于她专心阅读。|surrounding-environment
biologist|scientist|n.|生物学家|The biologist identified the insect from a photograph of its wings.|生物学家根据翅膀的照片认出了这种昆虫。|biology-specialist
biology|science|n.|生物学|She chose biology because she wanted to understand how living cells work.|她选择生物学，是因为想了解活细胞如何运作。|biological-science
biology|organism|n.|生物的生理结构与生命过程|The book explains the biology of bees in clear, everyday language.|这本书用清晰通俗的语言解释蜜蜂的生理结构与生命过程。|organism-life-processes
biology|regional-life|n.|某地区的动植物；生物群|The expedition documented the biology of the isolated island.|考察队记录了这座偏远岛屿上的动植物。|regional-organisms
origin|beginning|n.|起源；来源；起因|The investigation traced the origin of the fire to a faulty cable.|调查把火灾的起因追溯到一条故障电缆。|underlying-origin
origin|ancestry|n.|出身；血统；祖籍|The festival brings together residents of many different origins.|这个节日把来自不同出身背景的居民聚在一起。|ancestral-background
origin|coordinates|n.|坐标原点|Place the origin at the point where the two axes cross.|请把坐标原点设在两条坐标轴的交点处。|coordinate-zero-point
origin|product|n.|商品原产地；始发地|The label must state the country of origin of the coffee beans.|标签必须注明咖啡豆的原产国。|geographical-provenance|country of origin
herdsman|worker|n.|牧人；牧民；看管牛群等牲畜的人|The herdsman led the cattle towards the river before noon.|牧人在中午之前把牛群赶向河边。|livestock-herder
turtle|sea|n.|海龟；水龟|The turtle surfaced briefly before diving beneath the boat.|海龟短暂浮出水面，又潜到船下。|aquatic-turtle
turtle|broad|n.|龟（美式，可泛指包括陆龟的龟类）|The children compared several kinds of turtle at the reptile centre.|孩子们在爬行动物中心比较了几种龟。|chelonian-reptile,tortoise-land-reptile
turtle|overturn|v.|翻转；底朝天|The small dinghy turned turtle in a sudden gust.|一阵突如其来的风把小艇掀翻了。|overturn-boat|turn turtle
kangaroo|animal|n.|袋鼠|A kangaroo crossed the road well ahead of our car.|一只袋鼠在我们汽车前方很远处穿过马路。|kangaroo-marsupial
penguin|bird|n.|企鹅|The penguin used its wings like flippers as it chased fish underwater.|企鹅追逐水下的鱼时，像使用鳍一样挥动翅膀。|penguin-bird
panda|giant|n.|大熊猫|The panda settled beside a pile of fresh bamboo.|大熊猫坐在一堆新鲜竹子旁。|giant-panda
panda|red|n.|小熊猫；红熊猫|The red panda rested on a branch above the visitors.|小熊猫在游客头顶的一根树枝上休息。|red-panda|red panda / lesser panda
elephant|animal|n.|象；大象|The elephant curled its trunk around a bundle of grass.|大象用鼻子卷起了一捆草。|elephant-mammal
elephant|obvious-problem|n.|人人回避的明显问题|The budget shortfall remained the elephant in the room at the meeting.|预算缺口仍是会上人人回避的明显问题。|unacknowledged-obvious-problem|the elephant in the room
cattle|animals|n. plural|牛；牛群|The cattle were moved into the barn before the storm.|暴风雨来临前，牛群被赶进了牲口棚。|domestic-bovine-cattle
wolf|animal|n.|狼|The wolf followed the tracks through the fresh snow.|狼循着足迹穿过新雪。|wolf-canine
wolf|cruel-person|n.|贪婪或残忍的人|The tenants feared the new landlord would prove to be a wolf.|租客们担心新房东会是个贪婪残酷的人。|cruel-predatory-person
wolf|eat|v.|狼吞虎咽；大口吞食|He wolfed down a sandwich before running for the last bus.|他狼吞虎咽地吃完三明治，赶去坐末班公交车。|eat-greedily|wolf down
wolf|false-alarm|v.|谎报危险；发虚假警报|If you keep crying wolf, nobody will believe a real warning.|如果你不断谎报险情，就没人会相信真正的警告。|false-alarm|cry wolf
wolf|livelihood|phrase|使免于挨饿；勉强维持生计|The temporary job paid just enough to keep the wolf from the door.|那份临时工作的工资刚够勉强维持生计。|basic-survival|keep the wolf from the door
buffalo|water|n.|水牛；非洲野牛|A water buffalo stood knee-deep in the flooded rice field.|一头水牛站在积水及膝的稻田里。|buffalo-bovine
buffalo|bison|n.|美洲野牛（美式）|A herd of buffalo grazed on the open prairie.|一群美洲野牛在开阔的草原上吃草。|american-bison
buffalo|baffle|v.|使困惑；难倒（美式口语）|The unfamiliar rules completely buffaloed the new players.|陌生的规则让新玩家们完全摸不着头脑。|confuse-baffle
buffalo|intimidate|v.|吓唬；威吓（美式口语）|She refused to be buffaloed by the aggressive salesman.|她不肯被那位咄咄逼人的推销员吓住。|intimidate-person
fox|animal|n.|狐狸|A fox slipped through a gap beneath the garden fence.|一只狐狸从花园围栏下的缺口溜了过去。|fox-canine
fox|cunning|n.|狡猾的人|The negotiator was an old fox who rarely revealed his plans.|那位谈判者是个很少透露计划的老狐狸。|cunning-person
fox|baffle|v.|难倒；使困惑|The last clue foxed even the most experienced players.|最后一条线索连经验最丰富的玩家也难倒了。|confuse-baffle
fox|deceive|v.|欺骗；狡猾地行事|The trickster tried to fox the visitors with a false map.|骗子试图用一张假地图欺骗来访者。|deceive-trick
fox|spots|v.|使纸张等出现黄褐斑；生斑|Damp storage had foxed the pages of the old atlas.|潮湿的存放环境使旧地图册的书页长出了黄褐斑。|paper-foxing
crow|bird|n.|乌鸦|A crow landed on the gate with a twig in its beak.|一只乌鸦叼着细枝落在门上。|crow-bird
crow|call|n./v.|公鸡啼叫；鸡鸣声|The rooster began to crow before the first train passed.|第一班火车经过前，公鸡就开始打鸣。|rooster-call
crow|boast|v.|得意地夸耀；自鸣得意|She did not crow about winning; she thanked her teammates instead.|她没有得意地夸耀胜利，而是感谢了队友。|boast-triumphantly|crow about / over
crow|baby|v.|婴儿欢叫|The baby crowed with delight when the puppy appeared.|小狗出现时，婴儿高兴地欢叫起来。|infant-delighted-call
crow|direct-distance|n.|两地之间的直线距离|The village is ten kilometres away as the crow flies.|按直线距离算，那个村庄离这里十千米。|straight-line-distance|as the crow flies
swan|bird|n.|天鹅|The swan guided its young towards the reeds.|天鹅带着幼鸟游向芦苇丛。|swan-bird
swan|wander|v.|悠闲闲逛；漫无目的地游荡（口语）|They swanned around the harbour while we loaded the equipment.|我们装运设备时，他们在港口悠闲地闲逛。|idle-wandering|swan around / about
falcon|bird|n.|隼；猎隼|The falcon folded its wings as it dived towards the field.|隼冲向田野时收拢了翅膀。|falcon-bird
eagle|bird|n.|鹰；大型猛禽|An eagle circled high above the mountain lake.|一只鹰在高山湖泊上空盘旋。|eagle-bird
eagle|emblem|n.|鹰形徽章；鹰的图案|An eagle was carved above the doorway as a symbol of authority.|门口上方雕刻着一只象征权威的鹰。|eagle-emblem
eagle|golf|n./v.|鹰击；比标准杆少两杆的成绩（高尔夫）|She scored an eagle on the final hole and took the lead.|她最后一洞打出比标准杆少两杆的成绩，取得领先。|golf-two-under-par
sparrow|bird|n.|麻雀|A sparrow carried a seed from the pavement to the hedge.|一只麻雀把路面上的一粒种子叼到树篱里。|sparrow-bird
squirrel|animal|n.|松鼠|A squirrel balanced on the fence with a walnut in its paws.|一只松鼠抱着核桃，在围栏上保持平衡。|squirrel-rodent
squirrel|fur|n.|松鼠毛皮|The museum label identifies the collar's material as squirrel.|博物馆标签把衣领的材料标为松鼠毛皮。|squirrel-fur
squirrel|store|v.|储藏；积攒|She squirrels away a little money each month for emergencies.|她每月攒一点钱以备急用。|hoard-for-future|squirrel away
keeper|custodian|n.|看管人；管理员；保管人|The museum keeper unlocked the cabinet for the visiting researchers.|博物馆保管员为来访研究人员打开了陈列柜。|custodian-of-collection
keeper|animal-care|n.|饲养员；动物看护人|The keeper checked the seals before opening the enclosure.|饲养员打开围栏前检查了海豹。|animal-keeper
keeper|goal|n.|守门员；守桩员（体育）|The keeper caught the ball just before it crossed the line.|守门员在球即将越线前接住了它。|sports-goalkeeper
keeper|worth-keeping|n.|值得留住的人或物（口语）|This lightweight jacket is a keeper; it works in every season.|这件轻便夹克值得留下，各个季节都用得上。|worth-keeping-person-object
behaviour|conduct|n.|行为；举止；表现|Her calm behaviour reassured the passengers during the delay.|延误期间，她镇定的举止使乘客们安心。|personal-conduct
behaviour|system|n.|事物的特性；系统的运行状况|The model predicts the behaviour of the bridge in strong winds.|该模型预测桥梁在强风中的表现。|system-response-properties
sensitive|feelings|adj.|体贴的；能体察他人感受的|A sensitive interviewer noticed that the question made him uneasy.|一位体贴的采访者注意到，这个问题令他不安。|considerate-of-feelings
sensitive|easily-hurt|adj.|易受伤害的；易生气的；敏感的|He is sensitive about criticism of his accent.|别人批评他的口音时，他很容易受伤。|easily-offended|sensitive about
sensitive|physical|adj.|敏感的；易受外界影响的|The lotion is designed for sensitive skin.|这种乳液是为敏感皮肤设计的。|physically-sensitive
sensitive|instrument|adj.|灵敏的；能探测细微变化的|A sensitive microphone picked up the sound of water behind the wall.|灵敏的麦克风捕捉到了墙后流水的声音。|instrument-sensitivity
sensitive|photography|adj.|感光的；对光敏感的|The sensitive paper had to be kept away from daylight.|感光纸必须避开日光保存。|light-sensitive-material
sensitive|confidential|adj.|敏感机密的；需谨慎处理的|Only authorised staff may open files containing sensitive information.|只有获得授权的员工才能打开含有敏感信息的文件。|confidential-delicate-information
victim|harmed|n.|受害者；遇难者；牺牲品|Volunteers provided blankets for the victims of the flood.|志愿者为洪灾受害者提供了毯子。|sufferer-of-harm
victim|deceived|n.|受骗者；上当的人|The caller claimed to be from a bank and asked the victim for a password.|来电者自称银行职员，向受骗者索要密码。|victim-of-fraud
victim|sacrifice|n.|祭品；用于祭祀的牺牲|The museum label explains why an animal was chosen as a sacrificial victim.|博物馆的标签解释了为何选用动物作祭品。|ritual-sacrificial-offering
captive|prisoner|n.|俘虏；被囚禁的人或动物|The captives were released after the negotiations ended.|谈判结束后，俘虏获释。|confined-prisoner
captive|confined|adj.|被俘的；受囚禁的；受限制的|The study compared captive birds with birds living in the wild.|这项研究比较了圈养鸟与野生鸟。|confined-prisoner
captive|audience|adj.|无法离开或回避的；被迫听看的|Advertisements on the train reached a captive audience of commuters.|火车上的广告面对的是无法离开的通勤乘客。|inescapable-audience|captive audience
captive|fascinated|adj.|被迷住的；受某事物支配的|The children were held captive by the storyteller's voice.|孩子们被讲故事者的声音迷住了。|captivated-attention|hold captive
alternative|option|n.|可供选择的事物；替代方案|Cycling offers an alternative to driving for short journeys.|骑车为短途出行提供了开车以外的选择。|alternative-option|alternative to
alternative|replacement|adj.|可替代的；另一种的|The main bridge is closed, so drivers need an alternative route.|主桥关闭了，因此司机们需要另一条路线。|alternative-option
alternative|unconventional|adj.|非传统的；另类的|The festival showcases alternative music from independent bands.|这个节日展示独立乐队创作的非主流音乐。|unconventional-style
astrology|divination|n.|占星术；占星学|The course distinguishes astrology from the scientific study of astronomy.|这门课程区分占星术与科学的天文学研究。|astrological-divination
spaceship|craft|n.|宇宙飞船；航天飞船|The fictional spaceship carries a greenhouse to supply its crew with vegetables.|这艘虚构的宇宙飞船带有温室，为船员供应蔬菜。|space-vessel,space-vehicle
aircraft|machine|n.|飞机；航空器（单复数同形）|Three aircraft were diverted to a nearby airport because of fog.|由于大雾，三架飞机被改降到附近的机场。|aerial-vehicle
motive|reason|n.|动机；行动的原因|The interview explored her motive for returning to university.|访谈探讨了她重返大学的动机。|reason-for-action
motive|power|adj.|驱动的；产生运动的|Electricity supplies the motive power for the new tram.|电力为新有轨电车提供驱动力。|motion-producing|motive power / force
motive|music|n.|音乐的主题动机；反复出现的短乐句|A short rising motive returns throughout the final movement.|一个短小上行的主题动机在最后一个乐章中反复出现。|musical-motif
subsistence|survival|n.|生存；维持基本生活|The family grows enough food for subsistence but has little left to sell.|这家人种的粮食足以维持生活，但几乎没有剩余可出售。|basic-survival
subsistence|livelihood|n.|生计；生活所需的最低物资或费用|Fishing remains the village's main source of subsistence.|捕鱼仍是这个村庄的主要生计来源。|means-of-livelihood
education|process|n.|教育；受教育的过程|Access to education improved when the village opened a secondary school.|村里开设中学后，接受教育的机会增加了。|formal-learning-process
education|training|n.|所受的教育；知识训练|Her engineering education proved useful when she designed the water pump.|她设计水泵时，所受的工程教育派上了用场。|acquired-educational-training
education|discipline|n.|教育学；教学理论与实践|He is studying education with a focus on how children learn to read.|他正在学习教育学，重点研究儿童如何学习阅读。|education-as-discipline
learning|process|n.|学习；获取知识的过程|Regular feedback makes independent learning more effective.|定期反馈使自主学习更有效。|formal-learning-process
learning|knowledge|n.|学问；学识|Her wide learning made her an engaging guide to the old manuscripts.|她广博的学识使她成为介绍古代手稿的出色向导。|scholarly-knowledge
learning|lessons|n. plural|从经历中得到的经验教训|The team shared its learnings from the unsuccessful pilot project.|团队分享了从失败试点中获得的经验教训。|lessons-from-experience|learnings from
learned|scholarly|adj.|博学的；有学问的|A learned historian helped us date the anonymous letter.|一位博学的历史学家帮助我们确定了那封匿名信的年代。|scholarly-knowledge
learned|academic|adj.|学术性的；有学问的|The article first appeared in a learned journal devoted to ancient languages.|这篇文章最初发表于研究古代语言的学术期刊。|scholarly-publication
learned|acquired|adj.|后天习得的；学来的|The experiment distinguishes a learned response from an automatic reflex.|这项实验区分了后天习得的反应与自动反射。|acquired-not-innate
riddle|puzzle|n.|谜语；令人费解的问题|Nobody could solve the riddle written on the old gate.|没人能解开写在旧门上的谜语。|puzzling-question
riddle|sieve|n.|粗筛；大孔筛|The gardener used a riddle to remove stones from the soil.|园丁用粗筛筛去了土中的石块。|coarse-sieve
riddle|sift|v.|用粗筛筛分|They riddled the compost before filling the seed trays.|他们把堆肥筛过后才装进育苗盘。|sift-through-sieve
riddle|holes|v.|把……打得满是孔洞|Hail riddled the thin roof with small holes.|冰雹把薄屋顶打得满是小洞。|perforate-with-holes|riddle with
riddle|pervade|v.|使充斥；使布满不良事物|The draft was riddled with errors that obscured the argument.|草稿错误百出，掩盖了论点。|pervade-with-defects|be riddled with
instil|inculcate|v.|逐渐灌输；使逐步形成观念或情感|The club aims to instil confidence in children who are afraid of water.|俱乐部旨在逐步培养怕水儿童的信心。|gradually-inculcate|instil in / into
emphasise|stress|v.|强调；着重表达|The lecturer emphasised the difference between correlation and causation.|讲师强调了相关关系与因果关系的区别。|emphasize-importance
emphasise|accent|v.|使突出；重读以加强语气|She emphasised the final word to make the warning unmistakable.|她重读了最后一个词，使警告清楚无误。|give-prominence-or-stress
enable|allow|v.|使能够；使成为可能|The grant will enable the museum to open on Sundays.|这笔资助将使博物馆能够在周日开放。|make-possible
enable|activate|v.|启用；使功能或设备进入可用状态|Enable the captions if you cannot hear the recording clearly.|如果听不清录音，请启用字幕。|activate-feature
outstanding|excellent|adj.|杰出的；出色的|The award recognises her outstanding work on coastal conservation.|这个奖项表彰她在海岸保护方面的杰出工作。|exceptional-excellence
outstanding|prominent|adj.|显著的；突出的|An outstanding feature of the design is its generous use of daylight.|这个设计的一个突出特点是大量利用日光。|prominent-noticeable
outstanding|unresolved|adj.|尚未完成或解决的；未付款的|Please settle the outstanding balance before the end of the month.|请在月底前结清尚未支付的余额。|unsettled-unpaid
esteem|respect|n./v.|尊敬；敬重|The volunteers held the retiring doctor in high esteem.|志愿者们十分敬重这位即将退休的医生。|respect-admiration|hold in high esteem / esteem someone
esteem|consider|v.|认为；视为（正式）|He esteemed it a privilege to work with the archive's founder.|他认为与档案馆创办人共事是一种荣幸。|consider-regard-as
brilliant|bright|adj.|明亮的；闪耀的|Brilliant sunlight streamed through the newly cleaned windows.|灿烂的阳光透过刚擦净的窗户照了进来。|bright-light
brilliant|colour|adj.|鲜艳的；光彩夺目的|The artist used brilliant blues and yellows in the mural.|艺术家在壁画中使用了鲜艳的蓝色和黄色。|vivid-colour
brilliant|intelligent|adj.|才华出众的；聪颖的|A brilliant young engineer solved the problem in one afternoon.|一位才华出众的年轻工程师用一个下午解决了问题。|exceptional-intellect
brilliant|excellent|adj.|出色的；极好的|The rescue workers did a brilliant job in difficult conditions.|救援人员在艰难条件下出色地完成了工作。|exceptional-excellence
skilled|person|adj.|熟练的；有专业技能的|A skilled mechanic can detect the fault from the sound alone.|熟练的机械师仅凭声音就能查出故障。|trained-skill
skilled|work|adj.|需要专门技能的|The factory offers apprenticeships for skilled work in metal fabrication.|这家工厂为金属加工中的技术工作提供学徒培训。|requires-specialist-skill
skilful|ability|adj.|熟练的；灵巧的；技巧出色的|The skilful driver reversed the bus through the narrow entrance.|技术娴熟的司机倒着公交车穿过了狭窄的入口。|trained-skill
reputable|reputation|adj.|声誉好的；可靠且受尊敬的|Buy the replacement part from a reputable supplier.|请从声誉良好的供应商处购买替换零件。|reliable-trustworthy
assistant|person|n.|助手；助理|The research assistant labelled every sample before freezing it.|研究助理给每份样本贴好标签后才将其冷冻。|subordinate-helper
assistant|rank|modifier|助理的；副职的|The assistant director will chair the meeting in her manager's absence.|助理主任将在经理缺席时主持会议。|subordinate-job-title
diplomat|official|n.|外交官；外交家|The diplomat met both delegations before the formal talks began.|正式会谈开始前，外交官会见了双方代表团。|diplomatic-official
diplomat|tactful|n.|善于交际和处理人际关系的人|Our coach is a diplomat who can settle arguments without embarrassing anyone.|我们的教练很有交际手腕，能化解争论而不让任何人难堪。|tactful-negotiator
ambassador|envoy|n.|大使；最高级别外交代表|The ambassador presented her credentials to the head of state.|大使向国家元首递交了国书。|diplomatic-ambassador
ambassador|representative|n.|代表；宣传某项事业的使者|The athlete became an ambassador for the children's reading campaign.|这位运动员成为儿童阅读活动的宣传大使。|authorized-representative
junior|rank|adj.|级别较低的；资历较浅的|Junior staff can attend the workshop without paying a fee.|资历较浅的员工可以免费参加这个工作坊。|lower-rank-or-seniority
junior|age|adj.|年少的；青少年的|The club runs a junior tournament for players under sixteen.|俱乐部为十六岁以下的球员举办青少年锦标赛。|younger-age-group
junior|person|n.|较年轻或资历较浅的人|Although he was her junior, he already had more field experience.|尽管他资历比她浅，却已有更多实地经验。|lower-rank-or-seniority
junior|year|n./adj.|高中或大学三年级学生；三年级的（美式）|She moved into shared housing when she became a junior at college.|上大学三年级时，她搬进了合租住房。|us-third-year-student
alumni|graduates|n. plural|校友；毕业生（alumnus的复数）|Several alumni returned to mentor students at the careers fair.|几位校友回校，在职业展上指导学生。|former-students
matriculation|enrolment|n.|大学入学注册；正式成为大学生|New students must complete matriculation before borrowing library books.|新生必须完成入学注册后才能借阅图书馆的书。|university-enrolment
dorm|room|n.|集体寝室；宿舍房间（口语）|Six students shared a dorm during the summer course.|暑期课程期间，六名学生合住一间集体寝室。|shared-sleeping-room
dorm|building|n.|学生宿舍楼（美式口语）|The university built a new dorm beside the science library.|大学在科学图书馆旁新建了一栋学生宿舍楼。|student-residence-building
canteen|dining|n.|学校、工厂等的食堂|The canteen serves a hot lunch to staff working the early shift.|食堂为上早班的员工提供热午餐。|institutional-dining-room
canteen|flask|n.|便携水壶；军用水壶|The hikers filled every canteen before leaving the campsite.|徒步者离开营地前灌满了每只水壶。|portable-water-flask
canteen|service|n.|军中服务部；供应饮食杂货的小卖部|The soldiers bought soap and snacks at the camp canteen.|士兵们在营地服务部购买肥皂和零食。|military-refreshment-store
canteen|cutlery|n.|成套餐具；餐具盒|The wedding gift was a canteen of silver cutlery in a wooden case.|这份结婚礼物是一套装在木盒里的银餐具。|boxed-cutlery|canteen of cutlery
laboratory|science|n.|实验室；研究室；检验室|The laboratory analyses water samples collected from local wells.|实验室分析从当地水井采集的水样。|scientific-laboratory
laboratory|manufacture|n.|生产药品或化学品的场所|The small laboratory manufactures specialist chemicals for research.|这家小型化工生产室制造供研究使用的专用化学品。|chemical-production-laboratory
experiment|test-noun|n.|科学实验；试验|The experiment tested whether shade affected seed germination.|这项实验测试遮荫是否影响种子发芽。|scientific-experiment
experiment|trial|n.|尝试；试验性举措|Opening the hall on Sundays began as a six-week experiment.|礼堂周日开放最初是一项为期六周的尝试。|trial-new-method
experiment|test-verb|v.|做实验；进行尝试|The farmers are experimenting with crops that need less water.|农民们正在试种需水量较少的作物。|scientific-experiment|experiment with / on
author|writer|n.|作者；作家|The author donated the notebooks used to plan her novel.|作者捐出了她构思小说时使用的笔记本。|writer-author
author|originator|n.|创始人；某计划或思想的提出者|He was the author of the proposal to restore the old railway.|他是修复旧铁路这一提案的提出者。|originator-of-plan
author|write|v.|撰写；创作|Three engineers authored the report on the bridge's condition.|三位工程师撰写了这份关于桥梁状况的报告。|write-compose
tale|story|n.|故事；叙述；讲述|The guide told a tale about a ship hidden beneath the sand.|导游讲了一个关于沙下藏船的故事。|narrative-story
tale|lie|n.|谎话；虚构的借口|His tale about a cancelled train fell apart when she checked the timetable.|她一查时刻表，他编造的火车取消的借口就露馅了。|fabricated-story
tale|gossip|n.|告状；搬弄是非的话|The teacher discouraged pupils from telling tales merely to get others punished.|老师不鼓励学生仅为了让别人受罚而告状。|malicious-tale-telling|tell tales
sociology|discipline|n.|社会学|Sociology helped her examine how housing shapes family life.|社会学帮助她研究住房如何影响家庭生活。|sociological-science
economics|discipline|n.|经济学|Economics is offered alongside history in the first year.|第一学年既开设经济学，也开设历史学。|economic-science
economics|viability|n.|经济因素；经济可行性；收支状况|The economics of the project depend on attracting visitors throughout winter.|这个项目的经济可行性取决于整个冬季都能吸引游客。|financial-viability
marketing|promotion|n.|市场营销；销售推广活动|The firm changed its marketing after interviewing regular customers.|公司访谈老顾客后调整了市场营销策略。|commercial-marketing
accounting|practice|n.|会计；记账；会计学|Accurate accounting showed that the charity had enough funds for another year.|准确的会计核算显示，慈善机构的资金足以再维持一年。|financial-accounting
audit|accounts|n./v.|审计；查账|An independent firm will audit the accounts before the annual meeting.|一家独立公司将在年会前审计账目。|financial-audit
audit|review|n./v.|全面审查；核查|The council commissioned an audit of accessibility in public buildings.|市政会委托开展公共建筑无障碍设施的全面核查。|systematic-review
audit|class|v.|旁听课程（不取得学分）|Retired residents may audit selected university classes without taking exams.|退休居民可旁听部分大学课程，无须参加考试。|attend-without-credit
physics|discipline|n.|物理学|Physics explains how a lens bends light to form an image.|物理学解释透镜如何使光线偏折形成影像。|physical-science
physics|properties|n.|事物的物理过程；物理特性|The team studied the physics of ice moving beneath the glacier.|团队研究了冰川下方冰体运动的物理过程。|physical-processes
chemistry|science|n.|化学|She teaches chemistry using experiments with everyday materials.|她用日常材料做实验来教授化学。|chemical-science
chemistry|composition|n.|化学组成；化学性质与反应|Changes in soil chemistry affected which plants could grow there.|土壤化学性质的变化影响了哪些植物能在那里生长。|chemical-composition-process
chemistry|rapport|n.|人与人之间的默契；相互吸引|The two presenters have a relaxed chemistry that makes the programme lively.|两位主持人之间有一种自然的默契，让节目活泼生动。|interpersonal-chemistry
biological|science|adj.|生物的；生物学的|The biological survey recorded every species found along the river.|生物调查记录了沿河发现的每个物种。|biological-science
biological|parent|adj.|亲生的；有血缘关系的|He found his biological relatives through a family history project.|他通过一个家族史项目找到了亲生亲属。|biological-parentage
biological|detergent|adj.|含酶的（洗涤剂）|The label identifies this powder as a biological detergent.|标签表明这种洗衣粉是含酶洗涤剂。|enzyme-containing-detergent|biological detergent
chemist|scientist|n.|化学家；化学工作者|The chemist developed a method for measuring traces of copper in water.|这位化学家开发了一种测量水中微量铜的方法。|chemistry-specialist
chemist|pharmacist|n.|药剂师（英式）|The chemist checked the prescription before dispensing the medicine.|药剂师配药前核对了处方。|qualified-pharmacist
chemist|shop|n.|药房；药店（英式）|The chemist on the corner stays open late on weekdays.|街角的药房在工作日营业到很晚。|pharmacy-shop
philosopher|thinker|n.|哲学家；哲学研究者|The philosopher asked what would make a decision fair to everyone.|这位哲学家探讨怎样的决定才对所有人公平。|philosophical-thinker
philosopher|stoic|n.|达观的人；能冷静面对困境的人|They took the setback like philosophers and started again.|他们达观地接受了挫折，重新开始。|stoic-person
historian|scholar|n.|历史学家；历史研究者|The historian used shipping records to reconstruct the town's growth.|历史学家利用航运记录重建了这个城镇的发展过程。|history-specialist
historical|past|adj.|历史的；历史上的；与历史研究有关的|Historical records show that the river once followed a different course.|历史记录显示，这条河曾走另一条河道。|relating-to-history
historical|factual|adj.|基于史实的；反映过去生活的|The historical novel follows a family through the building of the canal.|这部历史小说讲述了运河修建时期一个家庭的经历。|based-on-past-events
electronics|discipline|n.|电子学；电子技术|He studied electronics before repairing medical equipment for a living.|他学习电子技术后，以维修医疗设备为生。|electronic-science
electronics|circuits|n. plural|电子元件；电子电路|Moisture damaged the electronics inside the control panel.|湿气损坏了控制面板内部的电子元件。|electronic-components
arithmetic|discipline|n.|算术；数值运算|The pupils practised arithmetic by working out the cost of a class trip.|学生们通过计算班级旅行的费用练习算术。|basic-arithmetic
arithmetic|calculation|n.|算术计算；计算结果|Check your arithmetic before you submit the invoice.|提交发票前，请检查计算是否正确。|numerical-calculation
arithmetic|numeric|adj.|算术的；与数的运算有关的|The program performs basic arithmetic operations on the data.|程序对数据进行基本算术运算。|basic-arithmetic
quadruple|multiply|v.|使增至四倍；增至四倍|The number of cyclists quadrupled after the safe route opened.|安全骑行路线开放后，骑车人数增至原来的四倍。|fourfold-increase
quadruple|fourfold|adj.|四倍的；四重的|The laboratory added a quadruple lock to the secure storage unit.|实验室给安全储物柜加装了四重锁。|fourfold-quantity
quadruple|amount|n.|四倍的数量|By June, the rent had risen to quadruple its previous level.|到六月，租金已经涨到了先前水平的四倍。|fourfold-quantity
approximately|roughly|adv.|大约；近似地|Approximately thirty people attended the evening workshop.|大约三十人参加了晚间工作坊。|approximate-quantity
diagonal|line|n.|对角线；斜线|Draw a diagonal between the opposite corners of the rectangle.|请连接矩形的两个对角，画一条对角线。|diagonal-line
diagonal|direction|adj.|对角的；斜向的|A diagonal crack ran from the window towards the floor.|一条斜向裂缝从窗户延伸到地板附近。|diagonal-line
decimal|fraction|n.|小数|Write one quarter as a decimal before making the comparison.|比较之前，请把四分之一写成小数。|decimal-fraction
decimal|system|adj.|十进制的；小数的|The decimal system uses ten digits to represent numbers.|十进制使用十个数字表示数值。|base-ten-notation
cone|geometry|n.|圆锥；圆锥体|The students made a cone by rolling a sector of paper.|学生们把一片扇形纸卷成了圆锥。|geometric-cone
cone|fruit|n.|球果；松果|A dry cone fell from the pine and scattered seeds on the path.|一颗干球果从松树上落下，把种子撒在小路上。|conifer-cone
cone|ice-cream|n.|冰淇淋蛋卷筒；蛋筒冰淇淋|She ordered a cone with one scoop of strawberry ice cream.|她点了一个装有一球草莓冰淇淋的蛋筒。|ice-cream-cone
cone|traffic|n.|锥形交通路标；交通锥|An orange cone marked the broken paving stone.|一个橙色交通锥标出了损坏的铺路石。|traffic-marker-cone
cone|eye|n.|视锥细胞|Cone cells help the eye distinguish colours in bright light.|视锥细胞帮助眼睛在明亮光线下分辨颜色。|retinal-cone-cell
circular|round|adj.|圆形的；环形的|The library has a circular reading room beneath a glass dome.|图书馆的玻璃穹顶下有一间圆形阅览室。|circular-shape
circular|route|adj.|环行的；循环的|A circular bus route connects the hospital with the outer suburbs.|一条环形公交线路把医院与外围郊区连接起来。|returning-loop-route
circular|argument|adj.|循环论证的|The essay's circular argument assumes the very point it tries to prove.|这篇文章的循环论证把它要证明的观点当成了前提。|circular-reasoning
circular|notice|n.|传阅通知；通告；广告传单|A circular was sent to every household explaining the new collection dates.|一份通告送到了每户人家，说明新的收集日期。|mass-distributed-notice
ozone|gas|n.|臭氧|The instrument measures ozone high above the weather balloon.|仪器测量气象气球上方高空中的臭氧。|ozone-gas
dilution|process|n.|稀释；稀释程度|Dilution with clean water reduced the concentration of the dye.|用清水稀释降低了染料浓度。|reduce-concentration
dilution|solution|n.|稀释液|The technician prepared a fresh dilution for each test.|技术员为每项测试配制了一份新的稀释液。|diluted-solution
noxious|harmful|adj.|有毒的；有害的；令人不适的|Residents complained about noxious fumes from the factory.|居民投诉工厂排出的有害烟气。|poisonous-harmful
noxious|morals|adj.|有害于思想或道德的（正式）|The author warns against the noxious influence of constant ridicule on children.|作者警告，持续嘲笑会对儿童的思想造成有害影响。|morally-mentally-harmful
timetable|schedule|n.|时间表；时刻表；课程表|The revised timetable includes a later train on Fridays.|修订后的时刻表增加了周五的一班晚车。|scheduled-times
timetable|arrange|v.|安排时间；把活动列入时间表|The college timetabled the practical session for Thursday morning.|学院把实践课安排在周四上午。|schedule-activity
recitation|performance|n.|朗诵；背诵|The ceremony ended with a recitation of a poem about the river.|典礼以朗诵一首有关这条河的诗作结束。|reciting-from-memory
recitation|piece|n.|背诵或朗诵的诗文|Each pupil chose a short recitation for the end-of-term performance.|每个学生都为期末演出选了一篇简短的朗诵作品。|recited-poem-or-text
recitation|listing|n.|详细列举；逐项叙述|The hearing began with a recitation of every missed deadline.|听证会开始时逐项列举了每个未能遵守的截止日期。|detailed-enumeration
recitation|class|n.|课堂口头答题；习题课（美式）|The professor holds a weekly recitation to review the physics problems.|教授每周开一节习题课，复习物理题。|us-recitation-class
differ|unlike|v.|不同；有差异|The two maps differ in how they mark the old coastline.|这两张地图在标注旧海岸线的方式上有所不同。|be-different|differ in / from
differ|disagree|v.|意见不一；持不同看法|The scientists differ on how quickly the river is changing.|科学家们对河流变化的速度持不同看法。|disagreement|differ on / with
difference|distinction|n.|差别；差异；不同之处|The main difference is that one ticket allows unlimited journeys.|主要区别在于，其中一种票允许不限次数乘车。|difference-distinction
difference|dispute|n.|分歧；争执|They resolved their differences before presenting a joint plan.|他们在提出联合方案前解决了分歧。|disagreement
difference|subtraction|n.|差额；差数|The difference between the two measurements was only three millimetres.|这两次测量结果仅相差三毫米。|numerical-difference
difference|effect|n.|影响；作用；重要改变|A reliable bus service makes a real difference to isolated villages.|可靠的公交服务对偏远村庄有实实在在的帮助。|meaningful-impact|make a difference
different|unlike|adj.|不同的；有区别的|The twins have very different tastes in music.|这对双胞胎的音乐喜好很不一样。|difference-distinction
different|another|adj.|另一个的；各不相同的|We used a different entrance while the main doors were being painted.|大门刷漆期间，我们使用了另一个入口。|another-not-same
different|unusual|adj.|与众不同的；不寻常的|The cafe offers something different: silent breakfasts with books at every table.|这家咖啡馆别具一格：提供安静的早餐，每桌都有书。|unusual-distinctive
demonstration|showing|n.|演示；示范|The instructor gave a demonstration of how to use the rescue rope.|教练示范了如何使用救援绳。|practical-demonstration
demonstration|evidence|n.|证明；实证；明显表现|The successful landing was a demonstration of the design's reliability.|成功着陆证明了这一设计的可靠性。|evidence-proof
demonstration|protest|n.|示威；游行集会|A peaceful demonstration outside the library called for longer opening hours.|图书馆外一场和平示威呼吁延长开放时间。|public-protest
demonstration|emotion|n.|情感的表达或流露|Their long applause was a demonstration of affection for the retiring teacher.|长时间的掌声表达了他们对退休教师的爱戴。|outward-emotion-display
inquire|ask|v.|询问；打听|She phoned the college to inquire about evening courses.|她致电学院询问晚间课程。|ask-for-information|inquire about
inquire|investigate|v.|调查；查究|An independent panel will inquire into the cause of the delay.|独立小组将调查延误的原因。|investigate-matter|inquire into
query|question|n.|问题；疑问；询问|Please send any query about your booking to the ticket office.|有关预订的任何疑问，请发给票务处。|question-inquiry
query|doubt|v.|质疑；对……提出疑问|The accountant queried a charge that appeared twice on the invoice.|会计质疑了发票上一笔出现两次的收费。|question-challenge
query|ask|v.|询问；提问|She queried whether the figures included students working part-time.|她询问这些数字是否包括兼职工作的学生。|ask-for-information
query|database|n./v.|数据库查询；查询数据库|The query returns only records created during the last week.|这条查询只返回过去一周创建的记录。|database-information-query
query|mark|n.|疑问标记；问号（较少用）|The editor placed a query beside the unexplained figure.|编辑在那个未作解释的数字旁加了一个疑问标记。|editorial-question-mark
resolution|determination|n.|决心；坚定|She showed great resolution in completing the difficult climb.|她以极大的决心完成了艰难的攀登。|firm-determination
resolution|promise|n.|决心要做的事；个人决定|His resolution was to walk to work at least three days a week.|他下定决心每周至少步行上班三天。|personal-resolve
resolution|motion|n.|正式决议；表决通过的决定|The committee passed a resolution to publish its spending records.|委员会通过决议，公布开支记录。|formal-resolution
resolution|settlement|n.|解决；消除矛盾或困难|Both sides welcomed the peaceful resolution of the dispute.|双方都欢迎争端得到和平解决。|resolve-dispute
resolution|detail|n.|分辨率；解析度|Higher resolution made the small labels easier to read.|更高的分辨率使小标签更容易辨认。|image-resolving-detail
resolution|separation|n.|分解为组成部分（技术）|The diagram shows the resolution of a force into horizontal and vertical components.|图中展示了将一个力分解为水平和竖直分力的过程。|separation-into-components
accomplish|achieve|v.|完成；实现；达到目标|The volunteers accomplished the repair before the next school term.|志愿者在下学期开学前完成了修缮。|complete-achieve
applicable|relevant|adj.|适用的；可应用的；有关的|The same safety rules are applicable to temporary staff.|同样的安全规定也适用于临时员工。|suitable-for-purpose|applicable to
calculation|arithmetic|n.|计算；计算过程或结果|Her calculation showed that the new route would save twelve minutes.|她的计算表明，新路线可节省十二分钟。|numerical-calculation
calculation|estimate|n.|估计；推算；预测|On our calculation, the tank contains enough water for six days.|据我们估算，水箱里的水够用六天。|reasoned-estimate
calculation|planning|n.|深思熟虑；精明算计|His offer was made out of generosity rather than calculation.|他提出帮忙出于慷慨，而非精明算计。|deliberate-self-interested-planning
simplicity|easy|n.|简单；简明；不复杂|Users praised the simplicity of the booking process.|用户称赞预订流程简单明了。|lack-of-complexity
simplicity|plain|n.|简朴；朴素；不加装饰|The simplicity of the room drew attention to the view outside.|房间的简朴让人更加注意窗外的景色。|plain-unadorned-style
simplicity|innocent|n.|单纯；质朴；天真|The story contrasts the child's simplicity with the adults' secret plans.|故事将孩子的单纯与大人们的秘密计划形成对比。|innocent-unsophisticated
simple|easy|adj.|简单的；容易理解或完成的|A simple diagram explained how the filter works.|一幅简单的示意图解释了过滤器的工作原理。|lack-of-complexity
simple|plain|adj.|朴素的；不加装饰的|She wore a simple blue dress without jewellery.|她穿了一件朴素的蓝裙子，没有佩戴首饰。|plain-unadorned-style
simple|ordinary|adj.|普通的；平凡的|He wanted a simple life with enough time for his family.|他希望过普通的生活，有足够时间陪伴家人。|ordinary-unpretentious
simple|innocent|adj.|质朴的；单纯坦率的|He is a simple man who says exactly what he means.|他为人质朴，总是直言自己的想法。|innocent-unsophisticated
simple|single|adj.|单一的；结构非复合的|A simple leaf has one blade rather than several separate leaflets.|单叶有一个叶片，而不是数个分开的小叶。|single-not-compound
simple|mere|adj.|纯粹的；仅仅的|The plan failed for the simple reason that nobody had checked the measurements.|计划失败，仅仅是因为没人核对尺寸。|mere-unqualified|the simple reason / truth
aspect|feature|n.|方面；层面|The report considers every aspect of access to the new clinic.|报告考虑了前往新诊所的各个方面。|feature-facet
aspect|appearance|n.|外观；面貌|The building's gloomy aspect changed when the shutters were removed.|百叶窗板拆下后，建筑阴暗的面貌改变了。|visual-appearance
aspect|direction|n.|朝向；面向的方向|A southern aspect gives the room sunlight for most of the day.|房间朝南，大半天都有阳光。|facing-direction
aspect|grammar|n.|体；动词表示动作状态的语法范畴|The lesson compares the progressive aspect with the perfect aspect.|这节课比较进行体与完成体。|grammatical-aspect
adaptation|adjustment|n.|适应；适应性调整|Adaptation to the colder climate took the seedlings several weeks.|这些幼苗用了数周才适应更冷的气候。|adjustment-to-conditions
adaptation|work|n.|改编；改编作品|The film is an adaptation of a novel set beside the same river.|这部电影改编自一部同样以那条河边为背景的小说。|adapted-work
adaptation|biology|n.|生物的适应性特征|Thick fur is an adaptation that helps this animal survive cold winters.|厚毛是帮助这种动物熬过寒冬的一种适应性特征。|biological-adaptation
flawless|perfect|adj.|完美无缺的；无瑕疵的|The soloist gave a flawless performance despite a broken microphone.|尽管麦克风出了故障，独唱者的演出依然无可挑剔。|without-flaws
original|initial|adj.|最初的；原先的|The original plan placed the entrance on the north side.|最初的方案把入口设在北侧。|initial-original
original|creative|adj.|独创的；有创意的|Her original solution used rainwater to cool the roof.|她富有创意的解决方案利用雨水给屋顶降温。|creative-novel
original|authentic|adj.|原作的；非复制的|The museum displays the original letter, not a photograph of it.|博物馆展出的是原信，而不是信的照片。|authentic-original,authentic-not-fake
original|work|n.|原件；原作；原本|Keep the original and send us a scanned copy.|请保留原件，给我们发送一份扫描件。|authentic-original,authentic-not-fake
accidental|unintended|adj.|意外的；偶然的；非故意的|An accidental spill damaged the only printed copy.|意外泼出的液体损坏了唯一的打印件。|unintentional-chance
accidental|nonessential|adj.|附带的；非本质的（正式）|The essay treats clothing differences as accidental rather than essential to identity.|文章把衣着差异视为身份的附带特征，而非本质特征。|incidental-nonessential
accidental|music|n.|临时变音记号（音乐）|The accidental before the note changes it from F to F sharp.|音符前的临时变音记号把F音改成了升F音。|musical-accidental-sign
prosperous|thriving|adj.|繁荣的；兴旺的；富裕的|The once prosperous port declined when the river changed course.|河流改道后，这座曾经繁荣的港口衰落了。|wealthy-thriving
dictionary|words|n.|词典；字典|The dictionary gives both British and American pronunciations.|这本词典列出了英式和美式发音。|word-reference-dictionary
dictionary|reference|n.|按字母顺序编排的专门辞典或资料集|She consulted a dictionary of architecture to identify the window style.|她查阅了一本建筑学辞典，以辨认窗户的样式。|specialist-reference-dictionary
discussion|exchange|n.|讨论；商讨；议论|After a long discussion, the residents agreed to share the garden.|经过长时间讨论，居民们同意共用这座花园。|reasoned-discussion
discussion|treatment|n.|书面论述；详细探讨|The book includes a clear discussion of how maps influence political decisions.|书中清楚论述了地图如何影响政治决策。|written-treatment-of-topic
entertain|amuse|v.|使欢乐；使感兴趣；娱乐|The performers entertained the waiting passengers with short sketches.|演员们用短剧逗候车乘客开心。|amuse-an-audience
entertain|host|v.|款待；招待客人|The family entertained visiting researchers at their home.|这家人在家中款待了来访的研究人员。|host-guests
entertain|consider|v.|考虑；抱有某种想法或希望|The committee would not entertain a proposal without a clear budget.|委员会不愿考虑没有明确预算的提案。|consider-an-idea
publish|issue|v.|出版；发行；发表作品|The archive will publish the letters in a searchable online edition.|档案馆将以可检索的网络版本出版这些信件。|publish-work
publish|announce|v.|公布；公开发布|The council promised to publish the results of the inspection.|市政会承诺公布检查结果。|publish-official
foresee|predict|v.|预见；预知|Nobody foresaw how quickly the small town would expand.|没有人预见到这个小镇会扩张得如此之快。|predict-future
anticipate|expect|v.|预料；预计|We anticipate a rise in demand when the new term starts.|我们预计新学期开学时需求会上升。|predict-future
anticipate|prepare|v.|预先考虑并作好准备|The organisers anticipated the rain by arranging an indoor venue.|组织者考虑到可能下雨，预先安排了室内场地。|prepare-in-advance
anticipate|look-forward|v.|期待；盼望|The children eagerly anticipate the annual lantern parade.|孩子们热切期待一年一度的灯笼巡游。|eager-expectation
anticipate|forestalled|v.|抢先行动以阻止或回应|The goalkeeper anticipated the pass and reached the ball first.|守门员预判了传球，抢先接触到球。|forestall-by-anticipation
rumour|hearsay|n.|传闻；谣言|A rumour about the station's closure spread before any announcement was made.|正式通知发出前，车站将关闭的传闻就传开了。|unconfirmed-hearsay
rumour|circulate|v.|谣传；传说|The company is rumoured to be opening a branch near the campus.|据传这家公司将在校园附近开设分部。|unconfirmed-hearsay|be rumoured to / it is rumoured that
publicity|promotion|n.|宣传；宣传活动或材料|The campaign used local radio for publicity rather than paid posters.|这次活动通过本地电台宣传，而不是付费张贴海报。|commercial-marketing
publicity|attention|n.|公众关注；媒体报道|The rescue attracted worldwide publicity within hours.|这次救援几小时内便引起了全球关注。|public-media-attention
expectation|belief|n.|预料；期待；预期结果|The turnout exceeded our expectation of twenty visitors.|到场人数超过了我们预期的二十位访客。|expected-outcome
expectation|standard|n. plural|期望；对表现或行为的要求|The teacher explained her expectations before the group project began.|小组项目开始前，老师说明了自己的期望和要求。|expected-performance-standard
expectation|mathematics|n.|期望值（数学）|For a fair six-sided die, the expectation of the number rolled is 3.5.|对于一枚均匀的六面骰子，掷出点数的期望值是3.5。|mathematical-expected-value
guitar|instrument|n.|吉他|She tuned the guitar before the audience entered the room.|观众进场前，她调好了吉他的音。|guitar-instrument
indoors|inside|adv.|在室内；往室内|We moved the seedlings indoors when frost was forecast.|预报将有霜冻时，我们把幼苗搬进了室内。|inside-building
outdoors|outside|adv.|在户外；往户外|The children ate outdoors while the classroom was being cleaned.|教室打扫期间，孩子们在户外吃饭。|outside-building
outdoors|nature|n.|野外；户外自然环境|He enjoys the outdoors more than crowded city attractions.|比起拥挤的城市景点，他更喜欢野外。|outdoor-natural-world|the outdoors
cycling|bicycles|n.|骑自行车；自行车运动|Cycling to school became safer after the junction was redesigned.|路口重新设计后，骑车上学变得更安全了。|bicycle-riding
picnic|meal|n.|野餐；带食物到户外的出游|We had a picnic beside the lake after the morning hike.|上午徒步之后，我们在湖边野餐。|outdoor-picnic
picnic|eat|v.|去野餐；在户外吃饭|Families picnicked in the shade while the band played.|乐队演奏时，一家家人在树荫下野餐。|outdoor-picnic
picnic|difficulty|n.|轻松愉快的事（常用于否定）|Carrying the equipment up the hill was no picnic.|把设备搬上山可不是轻松的事。|not-easy-task|be no picnic
marathon|race|n.|马拉松赛跑|She finished her first marathon in just over four hours.|她用四小时多一点跑完了自己的首场马拉松。|marathon-distance-race
marathon|long-task|n./modifier|持续很久、耗费耐力的活动；马拉松式的|The negotiations became a marathon that lasted through the night.|谈判变成了一场持续整夜的马拉松。|prolonged-endurance-task
jog|run|n./v.|慢跑|They jog along the river before work every morning.|他们每天早上上班前沿河慢跑。|slow-exercise-running
jog|nudge|n./v.|轻推；轻碰；轻撞|A jog to his elbow caused a line of ink to cross the page.|他的胳膊肘被轻轻一撞，墨水便在纸上划出一道线。|slight-nudge
jog|remind|v.|唤起记忆；提醒|The photograph jogged her memory of the old school building.|那张照片唤起了她对旧校舍的记忆。|prompt-memory|jog someone's memory
hunter|person|n.|猎人；捕猎动物|The hunter followed the deer tracks towards the forest.|猎人循着鹿的足迹走向树林。|game-hunter
hunter|seeker|n.|搜寻者；追求某物的人|The antique hunter searched every stall for a matching cup.|那位古董搜寻者为找一只配套杯子，翻遍了每个摊位。|diligent-seeker
hunter|horse-dog|n.|猎马；猎犬|The stable trained each hunter to jump safely over hedges.|马厩训练每匹猎马安全跃过树篱。|hunting-horse-or-dog
jogger|runner|n.|慢跑者|A jogger stopped to help the cyclist repair a puncture.|一位慢跑者停下来，帮助骑车人修补扎破的车胎。|slow-exercise-running
jogger|trousers|n. plural|慢跑裤；束脚运动裤（口语）|He changed into joggers before stretching on the mat.|在垫子上拉伸之前，他换上了运动裤。|jogging-trousers|joggers
jogging|running|n.|慢跑；慢跑锻炼|She took up jogging when the park opened a floodlit path.|公园开辟有照明的小路后，她开始了慢跑锻炼。|slow-exercise-running
shampoo|hair-product|n.|洗发水；洗发剂|The bottle of shampoo was small enough to fit in her wash bag.|这瓶洗发水足够小，可以装进她的洗漱包。|hair-cleansing-product
shampoo|carpet-product|n.|地毯等专用清洁剂|The cleaner tested the carpet shampoo on a hidden corner first.|清洁工先在隐蔽角落测试了地毯清洁剂。|carpet-cleaning-product
shampoo|wash|n./v.|用洗发剂或香波清洗；洗发|She shampooed her hair after swimming in the sea.|在海里游泳后，她用洗发剂洗了头。|wash-with-shampoo
shave|razor|n./v.|刮脸；剃毛；剃须|He shaved carefully before putting on his interview suit.|他穿上面试西装前，仔细刮了脸。|remove-body-hair
shave|thin|v.|削去薄片；刨；刮去薄层|The carpenter shaved a thin strip from the edge of the door.|木匠从门边刨掉了一条薄薄的木片。|pare-thin-layer
shave|reduce|v.|略微减少；削减|The new route shaved ten minutes off the journey.|新路线使行程缩短了十分钟。|reduce-small-amount|shave off
shave|graze|v.|擦过；掠过|The ball shaved the top of the wall before landing in the garden.|球擦过墙顶，落进了花园。|graze-passing
shave|escape|n.|侥幸脱险；勉强躲过危险|The falling tile missed him by centimetres; it was a close shave.|落下的瓦片离他只有几厘米，真是侥幸脱险。|narrow-escape|a close shave
paperback|book|n.|平装书；平装本|A battered paperback lay open beside the bus driver's seat.|司机座位旁摊着一本破旧的平装书。|paperback-book
paperback|binding|adj.|平装的；纸面装帧的|The paperback edition costs less and is easier to carry.|平装版更便宜，也更方便携带。|paperback-book
stationer|seller|n.|文具商；文具店|The stationer near the library sells recycled notebooks.|图书馆附近的文具店出售再生纸笔记本。|stationery-seller
fridge|appliance|n.|冰箱（refrigerator的口语简称）|Put the milk in the fridge before you unpack the other shopping.|先把牛奶放进冰箱，再拆其他购物袋。|refrigerator-appliance
flashlight|torch|n.|手电筒（美式）|She used a flashlight to read the meter in the dark cellar.|她用手电筒在黑暗的地下室里读表。|portable-electric-torch
flashlight|flash|n.|闪光；闪光信号|A brief flashlight from the lighthouse appeared through the fog.|灯塔的一道短暂闪光穿透雾气显现出来。|brief-flashing-light
umbrella|rain|n.|伞；雨伞|The umbrella turned inside out in the wind at the station.|车站的风把雨伞吹翻了。|rain-protection-umbrella
umbrella|protection|n.|保护伞；庇护|Small charities work under the umbrella of a larger national organisation.|一些小型慈善团体在一家较大的全国性组织庇护下开展工作。|protective-organizational-cover|under the umbrella of
umbrella|comprehensive|modifier|总括的；涵盖多个组织或类别的|An umbrella agreement sets common safety standards for all the clubs.|一份总括协议为所有俱乐部设定共同安全标准。|comprehensive-grouping|umbrella agreement / term / organisation
gown|dress|n.|女式礼服；长裙|She borrowed a gown for the orchestra's formal reception.|她为乐团的正式招待会借了一件礼服。|formal-long-dress
gown|robe|n.|礼袍；学位服；法官袍|Graduates wore blue gowns as they entered the hall.|毕业生们穿着蓝色学位服进入礼堂。|ceremonial-robe
gown|medical|n.|手术衣；病号服等防护长衣|The surgeon changed into a clean gown before entering the theatre.|外科医生进入手术室前换上了一件干净的手术衣。|medical-protective-garment
gown|home|n.|晨衣；家居长袍（搭配）|He answered the door wearing a dressing gown over his pyjamas.|他在睡衣外披着晨衣来开门。|dressing-gown|dressing gown
sweater|garment|n.|毛衣；针织套衫|She packed a thick sweater for the cold evening by the lake.|她为湖边寒冷的夜晚装上了一件厚毛衣。|knitted-upper-garment
handkerchief|cloth|n.|手帕；小方巾|He took a clean handkerchief from his pocket to wipe his glasses.|他从口袋里拿出一块干净手帕擦眼镜。|small-absorbent-cloth
skirt|garment|n.|裙子；连衣裙腰部以下的部分|The skirt of her dress brushed the floor as she walked.|她走动时，连衣裙的裙摆轻轻扫过地面。|skirt-garment
skirt|edge|n.|边缘；外围部分|The path follows the skirts of the woodland.|这条小路沿着林地边缘延伸。|outer-edge-margin
skirt|move|v.|沿边缘走；绕行；位于边缘|The road skirts the village to keep heavy traffic away from its centre.|这条路绕村而行，避免大量车辆进入村中心。|follow-outer-edge
skirt|avoid|v.|回避；避而不谈|The speaker skirted the question about the project's rising costs.|发言人回避了项目成本上升的问题。|avoid-an-issue
slipper|house|n.|拖鞋；室内便鞋|She left her slippers beside the bed before putting on her walking boots.|她把拖鞋留在床边，换上了徒步靴。|soft-indoor-shoe
hairdressing|profession|n.|理发；美发；美发行业|He trained in hairdressing before opening a small salon.|他接受美发培训后，开了一家小型沙龙。|hair-styling-profession
cucumber|fruit|n.|黄瓜；胡瓜（食用果实）|She sliced a cucumber into the salad just before serving it.|上菜前，她把一根黄瓜切片放进沙拉里。|cucumber-food
cucumber|plant|n.|黄瓜植株|The cucumber climbed the frame beside the greenhouse door.|黄瓜植株沿着温室门边的架子攀爬。|cucumber-plant
cabbage|food|n.|卷心菜；甘蓝菜叶|The soup contains shredded cabbage and white beans.|这锅汤里有切碎的卷心菜和白豆。|cabbage-food
cabbage|plant|n.|甘蓝植株；结球甘蓝|Each cabbage needs enough space for its outer leaves to spread.|每株甘蓝都需要足够空间展开外层叶片。|cabbage-plant
tomato|fruit|n.|番茄；西红柿（果实）|A ripe tomato adds sweetness and colour to the sandwich.|一个熟番茄给三明治增添了甜味和色彩。|tomato-food
tomato|plant|n.|番茄植株|The tomato nearest the window produced flowers first.|最靠窗的番茄植株最先开花。|tomato-plant
potato|tuber|n.|马铃薯；土豆（块茎）|Prick each potato before baking it in the oven.|每个土豆放入烤箱前，先在表面扎孔。|potato-food
potato|plant|n.|马铃薯植株|The potato stores nutrients in tubers beneath the soil.|马铃薯植株把养分储存在地下的块茎中。|potato-plant
carrot|root|n.|胡萝卜（根部食材）|He grated a carrot into the bowl of cabbage.|他把一根胡萝卜擦成丝，放进盛卷心菜的碗里。|carrot-food
carrot|plant|n.|胡萝卜植株|The carrot forms a deep root before flowering in its second year.|胡萝卜植株在第二年开花之前会形成较深的根。|carrot-plant
carrot|incentive|n.|诱因；好处；奖励|The company offered free training as a carrot to attract new staff.|公司以免费培训作为吸引新员工的奖励。|incentive-reward
grape|fruit|n.|葡萄（果实）|She removed the seeds from each grape before adding it to the dish.|她把每颗葡萄去籽后才加入菜中。|grape-food
grape|vine|n.|葡萄藤；葡萄植株|This grape grows well on the sunny slope above the village.|这种葡萄植株在村上方阳光充足的山坡上生长良好。|grapevine-plant
papaya|fruit|n.|番木瓜；木瓜果实|The papaya was ripe when its skin began to turn yellow.|这个木瓜的果皮开始变黄时，就成熟了。|papaya-food
papaya|tree|n.|番木瓜树|A papaya beside the house shaded the small courtyard.|屋旁的一棵番木瓜树为小院遮荫。|papaya-tree
peach|fruit|n.|桃；桃子|The peach was so ripe that juice ran down her hand.|桃子熟得汁水顺着她的手往下流。|peach-food
peach|tree|n.|桃树|The peach in our garden flowered before its leaves appeared.|我们花园里的桃树先开花，后长叶。|peach-tree
peach|colour|n./adj.|桃色；粉橙色；桃色的|She chose peach for the walls to make the room feel warmer.|她给墙面选了桃色，让房间显得更温暖。|peach-colour
peach|excellent|n.|极好的人或事物（口语）|That final goal was a peach, curling neatly into the top corner.|最后那球漂亮极了，划出弧线直入球门上角。|excellent-example
cherry|fruit|n.|樱桃（果实）|He placed a single cherry on top of each cake.|他在每块蛋糕上都放了一颗樱桃。|cherry-food
cherry|tree|n.|樱桃树；樱桃木|The table is made of cherry grown in a nearby orchard.|这张桌子用附近果园出产的樱桃木制成。|cherry-tree-wood
cherry|colour|n./adj.|樱桃红；鲜红色；樱桃红色的|A cherry ribbon marked the winning entry.|一条樱桃红丝带标出了获奖作品。|bright-cherry-red
watermelon|fruit|n.|西瓜（果实）|We chilled a watermelon in the stream before cutting it open.|我们把一个西瓜放进溪水里冰镇后才切开。|watermelon-food
watermelon|plant|n.|西瓜植株|The watermelon sends long trailing stems across the warm soil.|西瓜植株在温暖的土面上伸出长长的匍匐茎。|watermelon-plant
mutton|meat|n.|羊肉（尤指成年羊肉）|The stew was made with mutton and root vegetables.|这锅炖菜用羊肉和根茎类蔬菜制成。|adult-sheep-meat
salad|dish|n.|沙拉；凉拌菜|The cafe serves a warm potato salad with fresh herbs.|这家咖啡馆供应加新鲜香草的温土豆沙拉。|salad-dish
salad|greens|n.|生菜等沙拉蔬菜|She grows salad in pots on her balcony.|她在阳台花盆里种沙拉蔬菜。|salad-greens
pizza|dish|n.|比萨饼|We shared a pizza topped with mushrooms and roasted peppers.|我们分吃了一张放有蘑菇和烤甜椒的比萨饼。|pizza-dish
pasta|food|n.|意大利面食|The pasta was shaped into small shells that held the sauce.|这种意大利面做成小贝壳状，便于裹住酱汁。|italian-pasta
soup|food|n.|汤；羹|A bowl of hot soup warmed the walkers after the rain.|雨后，一碗热汤使徒步者暖和起来。|liquid-soup-food
soup|enhance|v.|增强性能；改装以提高动力（口语）|The mechanic souped up the old car for the exhibition.|机械师为了展览改装了旧车，提高其动力。|enhance-engine-performance|soup up
soup|trouble|n.|困境；麻烦（口语搭配）|We would be in the soup if the only delivery van broke down.|如果唯一的送货车坏了，我们就麻烦了。|be-in-trouble|in the soup
biscuit|cookie|n.|饼干（英式）|She packed two biscuits to eat during the long train journey.|她装了两块饼干，准备在漫长的火车旅途中吃。|sweet-or-plain-biscuit
biscuit|bread|n.|松软小面包；类似司康的烤饼（美式）|Breakfast came with a warm biscuit and a spoonful of jam.|早餐配有一个温热的美式小烤饼和一勺果酱。|us-biscuit-bread
biscuit|ceramics|n.|素烧陶瓷；尚未上釉的素坯|The potter inspected the biscuit before applying the glaze.|陶工上釉前检查了素烧坯。|unglazed-fired-pottery
loaf|bread|n.|一条面包；块状面包|The baker cut the large loaf into thick slices.|面包师把那大条面包切成厚片。|loaf-of-bread
loaf|shaped-food|n.|制成条块状的食物|She served a vegetable loaf with a tomato sauce.|她端上一条蔬菜烤糕，配以番茄酱。|shaped-food-block
loaf|idle|v.|闲荡；游手好闲；虚度时间|They loafed around the harbour until the ferry arrived.|渡轮到来前，他们在港口闲逛。|idle-wandering|loaf around / about
honey|food|n.|蜂蜜|The beekeeper sells jars of honey from the hillside hives.|养蜂人出售山坡蜂箱产出的罐装蜂蜜。|bee-honey
honey|endearment|n.|亲爱的；宝贝（爱称）|Come inside, honey; the rain is getting heavier.|进来吧，亲爱的，雨下得越来越大了。|affectionate-address
honey|excellent|n.|极好的人或东西（口语）|The little cottage is a honey, with a garden overlooking the bay.|那栋小屋棒极了，花园能俯瞰海湾。|excellent-example
honey|sweeten|v.|加蜜使甜；使甜美（较少用）|The cook honied the warm porridge before serving it.|厨师在热粥里加蜜调甜后才端上桌。|sweeten-with-honey
tasty|pleasant|adj.|可口的；好吃的|The soup was tasty even though it contained very little salt.|这汤虽然盐放得很少，仍然很好喝。|pleasant-flavour,pleasant-food-taste
thirsty|drink|adj.|口渴的|The thirsty hikers stopped to refill their water bottles.|口渴的徒步者停下来重新灌满水瓶。|need-to-drink
thirsty|eager|adj.|渴望的；急切想得到的|The students were thirsty for reliable information about the expedition.|学生们渴望得到有关这次考察的可靠信息。|eager-desire|thirsty for
thirsty|dry|adj.|干燥缺水的；需水的|The rain finally soaked the thirsty soil.|雨水终于浸透了干渴的土壤。|dry-needing-water
thirsty|causing|adj.|使人口渴的|Moving those boxes in the sun was thirsty work.|在太阳下搬那些箱子是让人口渴的活儿。|thirst-causing-work
financial|money|adj.|财务的；金融的；财政的|The charity publishes a financial report at the end of each year.|这家慈善机构每年年底公布一份财务报告。|relating-to-finance
economic|economy|adj.|经济的；经济学的|The study compares the economic effects of two transport policies.|这项研究比较两项交通政策的经济影响。|relating-to-economics
economic|profitable|adj.|有经济效益的；可盈利的（英式）|The ferry is no longer economic when so few passengers use it.|乘客如此之少，这条渡轮航线已无法盈利。|financially-viable
economic|economical|adj.|节省资源的；经济合算的|Insulation can provide an economic way to reduce heating costs.|保温措施能以经济合算的方式降低供暖费用。|economical-use-of-resources
grocery|shop|n.|食品杂货店|A small grocery near the station sells bread until late.|车站附近的一家小杂货店卖面包到很晚。|grocery-retail-shop
grocery|goods|n. plural|食品杂货；日常采购品|She carried the groceries home in two reusable bags.|她用两个可重复使用的袋子把食品杂货提回家。|everyday-food-shopping|groceries
grocery|trade|n.|食品杂货零售业|He spent his career in grocery before moving into clothing retail.|他从事食品杂货零售业多年，之后转入服装零售业。|grocery-retail-trade
leaseholder|tenant|n.|承租人；租赁产权持有人|The leaseholder must ask permission before altering the shared entrance.|承租人改动共用入口前必须征得许可。|tenant-under-lease
discounter|retailer|n.|折扣商店；折扣零售商|The discounter opened a small branch beside the bus station.|这家折扣零售商在公交车站旁开了一家小分店。|discount-retail-business
influx|arrivals|n.|大量涌入；人或事物的流入|An influx of visitors filled the village during the festival.|节日期间大量游客涌入，使村庄热闹起来。|mass-arrival-inflow
influx|fluid|n.|液体的流入；注入|The influx of cold water lowered the temperature in the basin.|冷水流入使水池里的温度降低了。|fluid-inflow
enrichment|experience|n.|充实；丰富；改善|The museum sees language classes as a source of cultural enrichment.|博物馆把语言课程视为丰富文化生活的一种方式。|improve-experience-quality
enrichment|wealth|n.|使富有；财富增加|The investigation examined the official's unexplained personal enrichment.|调查审查了该官员无法解释的个人财富增加。|increase-personal-wealth
enrichment|nutrition|n.|营养强化；增添养分|The enrichment of flour with vitamins is described on the packaging.|包装上说明了给面粉添加维生素的营养强化过程。|nutrient-enrichment
enrichment|soil|n.|增肥；提高土壤肥力|Compost was used for the enrichment of the exhausted soil.|人们用堆肥改善了贫瘠土壤的肥力。|soil-fertility-improvement
enrichment|concentration|n.|富集；提高某成分或同位素的含量|The lecture explains uranium enrichment without discussing reactor design.|这节课解释铀浓缩，但不讨论反应堆设计。|isotope-concentration
inadequate|insufficient|adj.|不充分的；不足的；不适当的|Inadequate drainage left the road under water after the storm.|排水不畅使道路在暴风雨后被水淹没。|insufficient-not-adequate
inadequate|person|adj.|缺乏信心或能力的；感到不胜任的|She felt inadequate when asked to lead a team without training.|未经培训就被要求带领团队，她感到自己无法胜任。|feeling-not-competent
reliable|trust|adj.|可靠的；可信赖的|We need reliable measurements before deciding whether the wall is moving.|决定墙体是否在移动之前，我们需要可靠的测量数据。|reliable-trustworthy
beneficial|helpful|adj.|有益的；有利的|The extra shade was beneficial to plants that struggled in direct sunlight.|额外的遮荫对那些不耐直射阳光的植物有益。|advantageous-beneficial|beneficial to
beneficial|property|adj.|享有收益权的；受益的（法律）|The trust document identifies the people with a beneficial interest in the land.|信托文件列明了对这块土地享有收益权的人。|beneficial-property-interest|beneficial interest / ownership
suitcase|luggage|n.|手提箱；行李箱|Her suitcase was too large for the luggage rack above the seat.|她的行李箱太大，放不进座位上方的行李架。|portable-luggage-case
railway|track|n.|铁路；铁道|The railway crosses the river on a narrow iron bridge.|铁路通过一座狭窄的铁桥跨过河流。|railway-track
railway|system|n.|铁路系统；铁路公司或运输事业|The railway employs local workers to maintain the stations.|这家铁路公司雇用当地工人维护车站。|railway-transport-organization
underground|below|adj./adv.|地下的；在地下；往地下|The cable runs underground for most of its route.|这条电缆大部分路段都铺设在地下。|below-ground
underground|secret|adj./adv.|秘密的；秘密地；转入隐蔽|The newspaper continued to circulate underground after it was banned.|这份报纸被禁后仍在秘密流通。|secret-hidden-activity
underground|metro|n.|地铁（英式）|We took the underground to avoid the traffic near the stadium.|我们乘地铁，以避开体育场附近的车流。|urban-underground-rail|the underground
underground|movement|n.|地下组织；秘密抵抗运动|Members of the underground carried messages between occupied towns.|地下组织成员在被占领的城镇之间传递消息。|clandestine-resistance-network
underground|culture|n./modifier|非主流文化；先锋或实验性的文化圈|The exhibition traces the city's underground music scene.|展览追溯了这座城市的非主流音乐圈。|unconventional-style
arrival|event|n.|到达；抵达|Our arrival was delayed by thick fog near the harbour.|港口附近的大雾推迟了我们的抵达时间。|act-of-arriving
arrival|person|n.|新来的人；到达物|The new arrival at the rescue centre was a young owl.|救助中心新来的是一只小猫头鹰。|newly-arrived-person-object
arrival|development|n.|新事物的出现；来临|The arrival of broadband changed how the village businesses operated.|宽带的到来改变了村里企业的经营方式。|advent-of-development
transmission|information|n.|传输；发送；广播传播|A broken cable interrupted the transmission of the data.|一根断裂的电缆中断了数据传输。|transmit-information
transmission|disease|n.|疾病的传播|The study investigated the transmission of the virus between birds.|这项研究调查了病毒在鸟类之间的传播。|infection-transmission
transmission|mechanism|n.|传动装置；变速器；动力传递|The mechanic inspected the transmission after the van began to jerk.|厢式车开始颠簸后，机械师检查了变速器。|vehicle-transmission
transmission|broadcast|n.|广播或电视节目；一次播送|The evening transmission included a live interview from the harbour.|晚间播送的节目包含一段来自港口的直播采访。|broadcast-programme
transitional|change|adj.|过渡的；过渡时期的；暂时用于过渡的|The charity found transitional housing while the damaged flats were repaired.|受损公寓维修期间，慈善机构找到了过渡性住房。|between-states-transition
carry-on|luggage|n.|随身行李|Her carry-on fitted beneath the seat in front.|她的随身行李放得进前排座位下方。|cabin-hand-luggage
carry-on|cabin|adj.|可随身带上飞机的|Please check the size limit for carry-on bags.|请核对可随身带上飞机的行李尺寸限制。|cabin-hand-luggage
carry-on|fuss|n.|吵闹；大惊小怪（英式口语）|There was a great carry-on when the tickets went missing.|票丢失时，引起了一阵大惊小怪。|fuss-and-commotion
depart|leave|v.|离开；出发|The train departs from platform four at half past six.|列车六点半从四号站台出发。|leave-depart
depart|deviate|v.|偏离；违反既定做法|The new design departs from the usual arrangement of seats.|新设计不同于通常的座位布置。|deviate-from-rule|depart from
depart|die|v.|去世（正式委婉语）|The memorial records the year in which the poet departed this life.|纪念碑记载了诗人离世的年份。|die-pass-away|depart this life
journey|trip|n.|旅行；旅程；行程|The journey across the island took longer than the map suggested.|穿越岛屿的旅程比地图显示的时间更长。|travel-trip
journey|travel|v.|旅行；长途跋涉|They journeyed north to collect recordings of traditional songs.|他们向北远行，采集传统歌曲的录音。|travel-trip
journey|development|n.|历程；逐步发展的过程|Her journey from apprentice to chief engineer took fifteen years.|她从学徒成长为总工程师的历程用了十五年。|developmental-journey
passenger|traveller|n.|乘客；旅客|Every passenger received a message explaining the delay.|每位乘客都收到了说明延误原因的消息。|vehicle-passenger
passenger|burden|n.|团队中不出力的人（英式口语）|We cannot carry passengers when everyone must help finish the project.|人人都得出力完成项目时，我们不能养着不干活的人。|noncontributing-team-member
patience|tolerance|n.|耐心；忍耐；耐性|Teaching the puppy to wait required patience and consistency.|教小狗学会等待，需要耐心和始终如一的要求。|patient-endurance
patience|card-game|n.|单人纸牌游戏（英式）|She played patience while waiting for the overnight train.|等夜间火车时，她玩起了单人纸牌。|solitaire-card-game
fluency|language|n.|流利；语言表达流畅程度|Daily conversation improved his fluency more than memorising isolated sentences.|日常交谈比死记孤立句子更能提高他的流利程度。|fluent-language-expression
fluency|skill|n.|动作或表现的流畅娴熟|The pianist played the difficult passage with remarkable fluency.|钢琴家极其流畅娴熟地弹奏了那个难段。|fluent-performance
uncomfortable|physical|adj.|不舒服的；造成身体不适的|The narrow seat became uncomfortable during the long meeting.|长时间开会时，这把窄椅子坐起来很不舒服。|physical-discomfort
uncomfortable|emotional|adj.|不自在的；尴尬不安的|He felt uncomfortable discussing his salary in front of the group.|当着全组人的面谈工资，他感到不自在。|mental-unease
sorrow|feeling|n.|悲伤；悲痛；遗憾|She expressed deep sorrow at the loss of the old community hall.|她对失去旧社区礼堂表达了深切的悲伤。|grief-sadness
sorrow|trouble|n.|悲伤的原因；不幸；伤心事|They shared their joys and sorrows in letters over many years.|多年来，他们在书信中分享彼此的喜悦与伤心事。|cause-of-sadness
sorrow|grieve|v.|感到悲伤；哀痛；惋惜|The villagers sorrowed over the destruction of the ancient trees.|村民们为古树被毁感到悲伤。|grieve-mourn|sorrow over / for
curative|healing|adj.|治病的；有治疗作用的|The historian studied old claims about the spring's curative powers.|历史学家研究了关于这眼泉水具有治疗作用的旧说法。|healing-curative
curative|remedy|n.|治疗药物；疗法（较正式）|The exhibition displays plants once used as curatives.|展览陈列了曾被用作药物的植物。|remedy-curative
apathetic|indifferent|adj.|漠不关心的；无兴趣的；缺乏热情的|Residents grew apathetic after years of promises without action.|多年承诺却不见行动之后，居民们变得漠不关心。|indifferent-apathy
satisfactory|adequate|adj.|令人满意的；合格的；足够好的|The repair was satisfactory, but the paint did not quite match.|修缮效果尚可，但油漆颜色不完全匹配。|adequate-acceptable
grateful|thankful|adj.|感激的；感谢的|We are grateful to everyone who helped reopen the library.|我们感谢每一个帮助图书馆重新开放的人。|thankful-gratitude|grateful to / for
grateful|pleasant|adj.|令人愉快的；受欢迎的（文雅旧用）|They rested in the grateful shade of an oak after the long walk.|漫长步行后，他们在一棵橡树的宜人树荫下休息。|welcome-pleasant-relief
sympathetic|compassion|adj.|有同情心的；体谅的|The receptionist was sympathetic when I explained why I was late.|我解释迟到原因时，接待员很体谅。|considerate-of-feelings
sympathetic|supportive|adj.|赞同的；支持的|The council was sympathetic to the proposal for a safer crossing.|市政会赞同修建更安全过街通道的提议。|supportive-agreement|sympathetic to / towards
sympathetic|congenial|adj.|合意的；令人感到融洽的|The club provides a sympathetic environment for beginners to ask questions.|俱乐部为初学者提供了一个便于提问的融洽环境。|congenial-environment
sympathetic|nerves|adj.|交感神经的|The diagram labels the sympathetic nerves alongside the parasympathetic nerves.|图中在副交感神经旁标出了交感神经。|sympathetic-nervous-system
sympathetic|vibration|adj.|共振的；感应振动的|The unused string began a sympathetic vibration when a nearby note was played.|附近的音响起时，那根未被拨动的弦开始产生共振。|sympathetic-resonance
trustworthy|reliable|adj.|值得信赖的；可靠的；诚实可信的|Choose a trustworthy person to look after the documents while you travel.|旅行期间，请选一个可信赖的人保管文件。|reliable-trustworthy
`;
    for(const line of rows.trim().split('\n')){
      const [word,id,pos,label,en,zh,concept,construction]=line.split('|');
      (entries[word]||=[]).push([id,label,pos,label.split('；'),concept.split(','),en,zh,construction||null]);
    }
    for(const [word,senses]of Object.entries(entries)){
      const e=add(word,senses);reviewed[word]=e;e.reviewDate='2026-11-06';
      const source='https://www.collinsdictionary.com/dictionary/english/'+(sources[word]||word);
      e.senses.forEach(s=>s.source=source);e.sources=[source];
    }
    const perSenseSources={
      protection:{contraception:'https://www.merriam-webster.com/dictionary/protection'},
      gas:{fill:'https://www.collinsdictionary.com/dictionary/english/gas-up'},
      turtle:{overturn:'https://www.collinsdictionary.com/dictionary/english/turn-turtle'},
      wolf:{livelihood:'https://www.collinsdictionary.com/dictionary/english/keep-the-wolf-from-the-door'},
      jogger:{trousers:'https://www.collinsdictionary.com/dictionary/english/joggers'},
      soup:{enhance:'https://www.collinsdictionary.com/dictionary/english/soup-up'},
      query:{database:'https://learn.microsoft.com/en-us/sql/t-sql/queries/select-transact-sql?view=sql-server-ver17'},
      grocery:{goods:'https://www.collinsdictionary.com/dictionary/english/groceries'},
      enrichment:{nutrition:'https://www.collinsdictionary.com/dictionary/english/enrich',soil:'https://www.collinsdictionary.com/dictionary/english/enrich',concentration:'https://www.collinsdictionary.com/dictionary/english/enrich'},
      alumni:{graduates:'https://www.collinsdictionary.com/dictionary/english/alumnus'},
      dorm:{room:'https://www.collinsdictionary.com/dictionary/english/dormitory',building:'https://www.collinsdictionary.com/dictionary/english/dormitory'}
    };
    perSenseSources.query.mark='https://www.merriam-webster.com/dictionary/query';
    for(const [word,items]of Object.entries(perSenseSources))for(const [id,source]of Object.entries(items))reviewed[word].senses.find(s=>s.id===id).source=source;
    // Explicit legacy mappings are editorial decisions, not a split-and-certify conversion.
    const aliases=`
jeopardise|risk|危害
appropriate|allocate|拨出
appropriate|take|占用
distant|space|远的
distant|relation|疏远的
distant|time|远期的
suburban|location|郊外的
suburban|conventional|(贬)偏狭的；土气的；见识不广的
wild|land|荒地
wild|undomesticated|野性的
wild|uncontrolled|任性的；疯狂的
wild|enthusiastic|狂热的
wild|reckless|轻率的
wild|freely|狂暴地；失控地
intense|strength|非常的；强的
intense|person|紧张的；热情的
gas|petrol|汽油
gas|fuel|瓦斯
natural|nature|自然的
gasoline|fuel|汽油
respiration|cellular|呼吸作用
surroundings|environment|环境
protection|trade|贸易保护制度
protective|safety|给予保护的；保护的
biology|regional-life|生物
origin|beginning|开端
origin|coordinates|原点
turtle|broad|龟
kangaroo|animal|袋鼠(澳洲产)
wolf|cruel-person|残忍贪婪之人
wolf|eat|大吃
crow|call|啼叫；鸡鸣；报晓
swan|wander|闲荡
falcon|bird|猎鹰
eagle|emblem|鹰状标饰
squirrel|store|贮藏
behaviour|system|特性；性能；特点；状态
behaviour|conduct|动作
sensitive|physical|易感的
sensitive|instrument|感度高的
victim|harmed|受害人；牺牲者；被害人；遭难者
alternative|option|供替代的选择；选择对象
alternative|replacement|两者择一的；供选择的
subsistence|livelihood|生活
motive|reason|目的
motive|music|主题；基调
motive|power|运动的
aircraft|machine|航空器
education|training|训练
learned|academic|学术的
learned|acquired|习得的
riddle|puzzle|谜
riddle|sift|筛
riddle|pervade|充满于
instil|inculcate|不断灌输
emphasise|accent|重读；加强...的语气；着重
enable|allow|使实现
outstanding|unresolved|未偿付的；未决定的；未解决的；未偿付
esteem|respect|尊重
brilliant|bright|光辉的；灿烂的；亮的
brilliant|intelligent|有才气的
reputable|reputation|受好评的；有声望的；可尊敬的
skilled|person|有技能的
skilful|ability|制作精巧的
assistant|person|助教
diplomat|tactful|有外交手腕的人
ambassador|envoy|使节
junior|person|年少者；地位较低者；后进的
junior|year|大学三年级学生
junior|rank|下级的
alumni|graduates|毕业生
matriculation|enrolment|大学入学许可；入学
dorm|building|宿舍
canteen|flask|水壶
canteen|service|军中俱乐部；临时流动餐馆；小卖部
laboratory|science|化验室
laboratory|manufacture|化工厂
experiment|test-noun|实验
audit|accounts|查帐；查(帐)
audit|class|旁听
audit|review|审查；检查
author|writer|著作人
tale|lie|谎言；虚语
tale|gossip|谣言；诽语
tale|story|陈述
marketing|promotion|行销；推销；销售
accounting|practice|记帐；帐户处理
physics|properties|物理过程；物理现象
physics|discipline|物理
chemistry|composition|化学过程
chemist|pharmacist|药剂师
chemist|scientist|化学师
philosopher|stoic|哲人
historical|factual|史实的
arithmetic|discipline|算术知识
quadruple|fourfold|四部分组成的
quadruple|amount|四倍
quadruple|multiply|使成四倍；成为四倍
approximately|roughly|大致；近于；近似
diagonal|direction|对角线的；斜线的
decimal|system|十进位的；十进制
circular|round|环状的
dilution|process|冲淡；淡度；稀度
dilution|solution|稀释物；冲淡物
recitation|performance|吟诵
recitation|piece|背诵的诗
recitation|listing|详述；叙述
differ|unlike|不一致；差异
difference|distinction|不同
difference|subtraction|差分
demonstration|showing|示教；实物教授
inquire|ask|问明
query|doubt|质问
query|database|查询
resolution|detail|解析；图形分辨率
resolution|promise|决定
resolution|motion|决议
resolution|settlement|消除；解答
resolution|separation|分解
accomplish|achieve|达到
applicable|relevant|合适的；适应的
calculation|planning|考虑
calculation|arithmetic|计算的结果
simplicity|easy|简明性
simplicity|innocent|坦率
simple|innocent|单纯的
aspect|direction|方向
aspect|feature|局面
adaptation|work|改编本
flawless|perfect|无缺点的；无裂纹的；无裂缝的
original|initial|原始的
original|work|原物
accidental|nonessential|非主要的；附属的；次要方面
accidental|music|临时记号
prosperous|thriving|成功的；繁盛的；昌盛的
entertain|host|招待
entertain|consider|怀抱
publish|announce|公开；宣传
publish|issue|发表
anticipate|expect|预期
anticipate|forestalled|占先
publicity|attention|名声
publicity|promotion|广告
expectation|belief|指望；展望
expectation|mathematics|期望值
outdoors|nature|户外；野外活动
outdoors|outside|在野外
cycling|bicycles|骑脚踏车兜风；骑脚踏车消遣
picnic|difficulty|愉快的经历
marathon|race|马拉松
marathon|long-task|耐力的考验
jog|run|(使)慢跑
hunter|seeker|追求者
shampoo|wash|洗头
shave|razor|修面；刮胡子；剃
shave|thin|修剪
shave|escape|幸免
paperback|book|纸面本
fridge|appliance|电冰箱
flashlight|torch|手电筒
flashlight|flash|闪光信号灯
umbrella|comprehensive|包罗万象的
gown|robe|法衣
sweater|garment|毛线衫；运动衫
skirt|garment|下摆
skirt|edge|郊区
skirt|move|位于...边缘；绕过
cucumber|fruit|胡瓜
cabbage|food|甘兰
tomato|fruit|西红柿
carrot|root|胡萝卜
grape|fruit|葡萄
grape|vine|葡萄树
papaya|fruit|番瓜
peach|excellent|美人儿；极好的事物
cherry|fruit|樱桃
cherry|colour|樱桃色
watermelon|fruit|西瓜
mutton|meat|羊肉
salad|dish|色拉
soup|enhance|加速；增加马力
biscuit|cookie|饼干
biscuit|ceramics|素坯
loaf|shaped-food|块
loaf|idle|游荡；虚度光阴
honey|endearment|爱人
thirsty|dry|干燥的
railway|track|轨道
underground|below|地下；地道
underground|metro|地铁
underground|secret|秘密活动
arrival|person|到达者
transmission|information|传送
transitional|change|变迁的；过渡期的；转变的
economic|economy|经济上的
economic|economical|实用的；节省的
leaseholder|tenant|租赁人；租借人；租地人
influx|arrivals|流入；汇集
enrichment|soil|肥沃
reliable|trust|确实的
beneficial|property|受益的；可享利益的
fluency|skill|流畅
uncomfortable|emotional|不安的
sorrow|feeling|哀惜；懊悔
curative|healing|有疗效的
curative|remedy|药物；治疗法
apathetic|indifferent|缺乏感情的；无动于衷的；缺乏兴趣的；淡漠的
satisfactory|adequate|满意的；令当事人满意的；充分的
grateful|pleasant|令人快意的；受欢迎的
sympathetic|supportive|赞成的
sympathetic|nerves|交感神经
trustworthy|reliable|可信赖的；可信任的
carry-on|luggage|手提行李
carry-on|cabin|手提的
depart|deviate|背离；违反
depart|die|去世
discussion|treatment|论述
journey|travel|游历
keeper|custodian|管理人；看守人
protect|defend|警戒；庇护
`;
    for(const line of aliases.trim().split('\n')){const [word,id,text]=line.split('|'),s=reviewed[word].senses.find(s=>s.id===id);if(!s)throw Error('Invalid legacy mapping '+line);s.aliases=[...new Set([...s.aliases,...text.split('；')])];}
    const additionalAliases={
      eastern:{'east-region':['东方的','向东的','自东的']},oriental:{'eastern-objects':['东方诸国的','亚洲的']},
      fox:{spots:['(书页)生斑','使生黄斑'],deceive:['奸狡地行动']},sensitive:{photography:['感光的']},
      noxious:{morals:['使道德败坏的']},query:{mark:['疑问号']},grocery:{trade:['食品杂货业']}
    };
    for(const [word,items]of Object.entries(additionalAliases))for(const [id,terms]of Object.entries(items)){const s=reviewed[word].senses.find(s=>s.id===id);s.aliases=[...new Set([...s.aliases,...terms])];}
    const references=`
picnic|远足|context-required|picnic 是带户外用餐的出游或野餐，不等于所有不带食物的徒步或 hike。
beneficial|有使用权的|context-required|法律义涉及获得财产利益的权益，并不自动等同任意使用许可或软件访问权。
fluency|雄辩；善辩|context-required|流利不自动表示善于说服他人；本版分别教语言流畅和表现娴熟，不把 eloquence 无条件当同义词。
abnormal|不规则的；变态的；畸形的|context-required|只在偏离通常形态、发育或行为的具体语境中理解；abnormal 不是描述人的侮辱性诊断，也不恒等于 malformed。
abnormal|畸形的人|scope-excluded|重新核对当前条目只有形容词，旧名词译法不作为本版学习义。
eastern|东方人；东正教徒|scope-excluded|当前条目的普通用法是方位或文化形容词；不把大写教派名称等省略方式当作通用人物名词。
oriental|东方人；亚洲人|restricted-verified|Collins 明确说明此人物名词可能冒犯；本版只教物品、艺术等的形容词用法，指人宜用 Asian 或具体国籍。
suburban|郊区居民|restricted-verified|Collins 名词义等同 suburbanite，较少用；本版保留来源参考而不把它与形容词混作常用考点。
wild|野蛮的|scope-excluded|词典收录的旧文明等级用法可能贬损人群；不以此描述族群，常用考点改用野生、荒野或失控等具体义。
natural|白痴|scope-excluded|Collins 将该侮辱性人物名词标 obsolete；已确认其历史性质，不进入现代学习选项。
natural|物质的|context-required|natural 在与 supernatural 相对时指自然界或可由自然规律解释，不能泛指所有 material。
natural|自然数的|scope-excluded|只在 natural numbers 等数学复合术语中成立，本批不将它当作任意名词前可用的通用形容词义。
natural|原始的|context-required|仅在未受人为影响的自然状态等语境可作此解释，不等同所有 original、primitive。
artificial|非原地产的|scope-excluded|所核当前学习义为人造、仿制或做作；不把非本地物种自动称为 artificial。
artificial|伟牟|scope-excluded|这不是可识别的中文释义，作为旧数据噪声保留追溯。
respiration|一口气|context-required|respiration 常用作呼吸过程或细胞呼吸，不以“一口气”替代不可数过程义；计数呼吸须按医学上下文理解。
protective|保护剂；保护物；油绸|restricted-verified|Collins 收有 something that protects 的名词用法；油绸是历史具体材料，不是所有 protective 的固定所指，本版不纳入常用名词训练。
origin|起始地址；信件来源的相关数据|scope-excluded|这些是软件字段或数据模型中的专门使用；未指定系统时不作普通词义，也不把某个字段名当通用定义。
herdsman|牧主|context-required|herdsman 指饲养、照管牲畜的人，不必拥有牲畜；只有上下文确认所有权时才能称牧主。
penguin|空军地勤人员|scope-excluded|当前常用条目不支持把该军队旧俚语作为一般人物名词，保留旧译而不进入现代学习范围。
cattle|家畜|context-required|cattle 在常用英语中特指牛，不泛指猪、羊等所有 livestock。
wolf|极度穷困|context-required|贫困关联出现在 keep the wolf from the door 等习语；已新增该搭配，wolf 单独不是“极度穷困”的通用名词。
fox|变酸；使变酸|scope-excluded|发酵、食物变质等旧专门用法未列为当前学习条目的常用动词；不从纸张狐斑或狡猾义推导认证。
fox|为(鞋等)换面|scope-excluded|历史制鞋术语不属本批声明的常见学习范围，不把它泛化为普通修鞋。
crow|撬棍|restricted-verified|Collins 明列 crowbar 的简称，属于较少用工具名；普通鸟、鸣叫和夸耀义另列。
swan|天鹅星座|scope-excluded|天鹅座是专名 Cygnus 的英文解释，不能把任意小写 swan 都当作星座专名。
swan|有才华的诗人|restricted-verified|词典标 rare, literary，为文学比喻义；本版只留有来源参考，不把“天鹅”泛教为诗人。
swan|蜿蜒而行|context-required|本批查明的动词为悠闲漫游，并不意味着路线必须蜿蜒；不将具体姿态独立认证。
captive|迷恋者|restricted-verified|词典列受情感支配的人等比喻名词；常用学习保留被囚者及 captivated 形容词，少用比喻名词只作参考。
alternative|两者择一|context-required|alternative 可以有两个以上的选择，不能把 exactly two 当作词本身的强制数量条件。
motive|成为动机的|restricted-verified|Collins 收有 motivating 形容词，本批常用形容词聚焦 motive power，较少用抽象搭配保留参考。
riddle|解谜；给...出谜；出谜|restricted-verified|Collins 第一动词条列解谜及说谜语，现代频率低于谜语名词和 be riddled with；不与穿孔义混同。
riddle|寻根究底地检验|scope-excluded|此旧译过宽，不能用作普通 investigate 的同义答案；本批仅教有原始来源支持的筛分、穿孔和充斥义。
instil|滴注|restricted-verified|Collins 标 rare 的逐滴注入义已交叉核对 Merriam-Webster；为医疗技术用法，只留来源，不提供操作指引。|https://www.merriam-webster.com/dictionary/instill
reputable|规范的|restricted-verified|Collins 只在词语被接受为标准用法时使用该语言学意义，不能泛指所有符合规范的产品或流程。
assistant|有帮助的；辅助的|restricted-verified|Collins 把一般 helpful 形容词标 archaic；现代常见的 assistant manager 等职位修饰义已纳入。
diplomat|有权谋的人|context-required|人际比喻指善于得体地处理关系，不自动带有阴谋、操纵等贬义。
ambassador|代理|context-required|可指经授权的代表或使者，但不能替代所有法律、商业或软件语境的 agent。
matriculation|入学考试|restricted-verified|Collins 所列英国旧式考试已被后来的考试制度取代；现代大学入学注册义已单独教学。
experiment|实验仪器|scope-excluded|当前词典支持实验、尝试及相应动词，不把 experiment 当作一般实验设备的名称。
author|作家的著作|restricted-verified|Collins 列有以作者指其作品的借代，须如 reading an author 之类上下文；不作为无条件作品名词训练。
author|本人|scope-excluded|author 指创作者，不是本人或 self 的通用译法。
marketing|买卖；在市场买卖|context-required|本批教满足市场需求、推广销售的营销活动，不把任意一次买菜或交易都认作 marketing。
accounting|帐单；清帐|context-required|accounting 是账务核算而非账单本身，也不自动指偿清欠款；具体核对、结算须有账务上下文。
philosopher|思想开创人|restricted-verified|Collins 收有某思想体系的建立者，常见哲学研究者与达观者另列，窄化的思想创始语境只留参考。
historian|记事者|context-required|指研究或撰写历史的人，不是所有临时记录信息的 clerk。
historical|历史性的|restricted-verified|Collins 收有与 historic 相通的少见用法；常用教学区分 historical 的历史相关与 historic 的重大历史意义。
decimal|小数点|scope-excluded|decimal 的常用名词为小数；符号本身应为 decimal point，不把组成成分省略后无条件教作“小数点”。
cone|使成锥形|restricted-verified|Collins 列该及物动词，较少用于日常学习；几何、交通、球果等名词分开教学。
circular|间接的|context-required|circuitous 可指绕行或迂回，不能把所有 indirect 的抽象含义替换成 circular。
ozone|新鲜的空气|restricted-verified|词典列海滨清新空气的旧口语说法；不表示臭氧本身是有益健康的空气，本版不作科学性正确选项。
ozone|使人愉快的影响|scope-excluded|所核条目未把此过宽的比喻列为一般学习义；保留旧译，不从清新空气的旧称推导。
dilution|稀释度的|scope-excluded|旧片段把名词写成了形容词；本批分别教稀释过程和稀释液，不认证该词性。
recitation|书面陈述|context-required|所核条目强调背诵、朗读或列举，不能把任意书面 statement 都叫 recitation。
recitation|评述|context-required|recitation 可逐项叙述事实，不自动包含分析、评价的评论意义。
different|差动；微分的；差速器|scope-excluded|这些属于 differential 等词的术语，不能误贴给形容词 different；新义项不沿用此混词旧译。
accomplish|使完美|scope-excluded|当前常用义是成功完成或实现，不用作把任何物体变完美的通用动词。
simple|绝对的|context-required|simple truth 等表示纯粹、不加修饰，不等同所有 absolute。
simple|原始的|context-required|只在简单、基础或未发展结构中可能如此解释，不教作所有起源、早期事物的 original。
simple|初级的|context-required|基础、简单的语境可如此译，但不等同所有学生年级或初学阶段。
simple|迟钝的；傻子|restricted-verified|词典收有贬损智力的旧形容词及 archaic 人物名词；本版不以此称呼人，也不当作常用选项。
simple|出身低微者|scope-excluded|旧片段把出身朴素的形容描述变成了人物名词；不作为现代通用称谓教学。
prosperous|幸运的|context-required|本批指兴旺、成功或富裕，不等同由运气导致的所有 fortunate。
anticipate|加速；提前使用|restricted-verified|Collins 列使事情提前发生及提前支用收入等窄义；不是普通 accelerate 或 use 的同义词，本批只留具体语境参考。
anticipate|提前出现；先期发生|context-required|可在先于某思想或事件出现的正式语境理解；不得与普通预料义混同或教成无条件提前发生。
publicity|公开场合|scope-excluded|publicity 指宣传、关注或公开状态，不指具体的公共场合或地点。
cycling|循环操作|context-required|工程中可为 cycle 的过程名词，需设备或工艺语境；本批词条聚焦骑行运动，不将循环当自行车义。
jog|(使)蹒跚行进|context-required|缓慢颠簸前进的旧译不能替代因残疾或不稳而蹒跚；本批教慢跑、轻碰及唤起记忆。
jogger|撞纸机|scope-excluded|这是印刷机械名而不是慢跑者，需独立设备语境；本版不把它混入人的常用义。束脚裤复数另有专门来源。
jogging|轻摇|context-required|可由 jog 的轻碰动作形成进行式或动作名词，但不与常用慢跑锻炼义混作固定译法。
shave|剃刀|scope-excluded|Collins 另列刮削工具等用法，但不能把一般 razor 直接无条件译为 shave；本批名词仅教刮剃动作等明确范围。
shave|勉强通过|context-required|close shave 是险些遇险、侥幸脱险，不等同考试分数刚及格等所有勉强通过。
stationer|书商|restricted-verified|Collins 将 publisher/bookseller 用法标 obsolete；现代常用词义为文具商或文具店。
umbrella|伞的|context-required|名词前置可修饰与伞有关的物件；不需要为所有名词修饰自动增设通用形容词义。
umbrella|用伞遮掩|scope-excluded|所核当前条目未列该词作通用遮盖动词；不从雨伞名词自行造词性。
gown|睡衣|context-required|可出现在 dressing gown、nightgown 等衣物名称中，不能把任意小写 gown 都等同睡衣或 pyjamas。
gown|大学全体师生|restricted-verified|town and gown 等用法以学袍借指大学成员，属特定文化表达，常用服装义另列。
gown|使穿睡衣|context-required|Collins 的动词指穿上或提供 gown，不只睡衣；不保留这个过窄的无搭配动词译法。
sweater|出汗者；发汗器|restricted-verified|词典收有产生汗液的人或物等较少用名词；本批的日常服装义不因此多出发汗设备考点。
handkerchief|头巾；围巾|context-required|手帕可系于头颈是具体用途，不表示所有 scarf 都是 handkerchief。
slipper|制轮器|scope-excluded|工程用旧设备名不在本批室内鞋的常见学习范围，不将它冒充普通鞋义的同义表达。
slipper|用拖鞋打|restricted-verified|Collins 收有口语及物动词，常见名词为软便鞋；较少用动作只留来源参考。
peach|告发；告密；检举|restricted-verified|Collins 的第二同形词列 inform against，历史及少用动词只留参考，不与桃子、桃色混作常用义组。
pasta|糊剂；泥膏剂|scope-excluded|当前英语主条目教面食，不能把其他语言的 paste 字面义或未指定配方的技术用法塞入日常英语学习。
soup|马力|scope-excluded|提高动力属于 soup up 这一动词短语，soup 不是 horsepower 的普通名词同义词。
honey|甜蜜；蜂蜜似的；甜蜜的；甘美的|context-required|可在比喻、名词修饰或 honeyed 等派生语境中解释，不把 honey 教作所有 sweet 的通用形容词。
honey|对...说甜言蜜语；说甜言蜜语；奉承|restricted-verified|Collins 收有较少用的讨好、甜言蜜语动词；常见爱称与蜂蜜义单列，本版不泛教为普通 flatter。
transitional|过渡型单核白细胞|scope-excluded|专业旧术语不能直接变成现代常用形容词的人体细胞名；本批只教状态或时期的过渡。
discounter|贴现人|scope-excluded|金融票据贴现主体的专门用法不在本批折扣零售范围，不把零售商与银行业务角色混同。
influx|河口|restricted-verified|Collins 明列溪河汇入口这一地理少见义；常用考点为人、事物或液体流入。
apathetic|无情的|context-required|指无兴趣、无感情反应，不等于残酷或故意伤害他人的 cruel。
satisfactory|赎罪的|restricted-verified|Collins 收有神学的补赎意义，限其专业语境，不作为日常“令人满意”的泛用同义项。
sympathetic|容易感受的人|scope-excluded|当前教学条目为形容词，不把人称名词从敏感的形容词含义推导出来。
keeper|监护人|context-required|keeper 可指负责照料、看管他人的人，不自动具有法律 guardian 身份。
keeper|保持片|restricted-verified|词典列机械固定件和磁体衔铁，需设备术语语境；日常负责看管的人与值得留住的物件另列。
`;
    for(const line of references.trim().split('\n')){
      const [word,terms,decision,reason,source]=line.split('|');
      reviewed[word].referenceOnly.push({terms:terms.split('；'),decision,reason,source:source||'https://www.collinsdictionary.com/dictionary/english/'+(sources[word]||word)});
    }
    for(const e of Object.values(reviewed))e.sources=[...new Set([...e.sources,...e.senses.map(s=>s.source),...e.referenceOnly.map(r=>r.source)])];
  }
  if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch09=register;
})(typeof window==='object'?window:globalThis);
