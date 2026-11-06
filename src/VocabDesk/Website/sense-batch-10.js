/* Batch 10: individually checked learning senses; all bilingual examples are original WordOrbit writing. */
(function(scope){'use strict';function register(add){
const grouped={},reviewed={},sourceWord={hybridise:'hybridize',apologise:'apologize'};
const rows=`endangerment|risk|n.|使遭受危险；危害|The report links habitat loss to the endangerment of native birds.|报告将栖息地丧失与本地鸟类受到危害联系起来。
migration|people|n.|人口迁移；移居|Rural migration increased as factories opened near the coast.|随着沿海工厂开设，农村人口迁移增多了。
migration|animals|n.|动物的迁徙|The wetland provides a resting place during the birds' autumn migration.|这片湿地为鸟类秋季迁徙提供休息地。
migration|particles|n.|原子、离子或分子的迁移|The electric field accelerates the migration of ions through the solution.|电场加快了离子在溶液中的迁移。
magnificence|splendour|n.|壮丽；宏伟；富丽堂皇|Visitors paused to admire the magnificence of the palace ceiling.|游客停下来欣赏宫殿天花板的华美。
calendar|chart|n.|日历；月历|She circled the examination date on her calendar.|她在日历上圈出了考试日期。
calendar|system|n.|历法|The museum explains how the ancient calendar divided the year.|博物馆解释了古代历法如何划分一年。
calendar|schedule|n.|日程表；活动安排|The festival calendar includes workshops for local children.|节庆日程表中包括面向本地儿童的工作坊。
calendar|schedule-verb|v.|把活动列入日程|Please calendar the inspection before the equipment is moved.|请在设备搬走前把检查列入日程。
respire|breathe|v.|呼吸；吸入和呼出空气|The injured animal continued to respire without assistance.|这只受伤动物仍能自主呼吸。
respire|cellular|v.|进行细胞呼吸|Plant roots respire even when the leaves receive no sunlight.|即使叶片没有受到阳光照射，植物根部也进行呼吸作用。
ripener|agent|n.|催熟剂；促使成熟的物质或因素|The experiment compared a commercial ripener with natural storage conditions.|实验比较了一种商品催熟剂与自然储存条件的效果。
logo|symbol|n.|标志；徽标；商标图案|The charity printed its new logo on reusable shopping bags.|慈善机构把新徽标印在可重复使用的购物袋上。
alga|organism|n.|藻；藻类生物的单数|Under the microscope, a single alga appeared bright green.|显微镜下，一个藻类生物呈现鲜绿色。
algae|organisms|n.复数|藻类|Excess nutrients caused algae to spread across the pond.|过量养分导致藻类蔓延到整个池塘。
extinguish|fire|v.|熄灭；扑灭|Firefighters used foam to extinguish the burning fuel.|消防员用泡沫扑灭了燃烧的燃料。
extinguish|hope|v.|使希望、感情等消失|The rejection did not extinguish her ambition to become an architect.|这次拒绝没有使她成为建筑师的志向消失。
extinguish|legal|v.|使权利或债务终止、消灭|The final payment will extinguish the remaining debt.|最后一笔付款将清偿剩余债务。
infringe|violate|v.|违反法律、规则或协议|The new policy must not infringe existing employment laws.|新政策不得违反现行劳动法。
infringe|rights|v.|侵犯；侵害权利|Recording private conversations may infringe on personal privacy.|录下私人谈话可能侵犯个人隐私。
undermine|weaken|v.|逐渐削弱；暗中破坏|Repeated delays could undermine public confidence in the railway.|一再延误可能削弱公众对铁路的信心。
undermine|support|v.|侵蚀、挖去底部而削弱支撑|Floodwater began to undermine the foundations of the bridge.|洪水开始侵蚀桥梁的地基。
undermine|dig|v.|在下方挖掘；挖地道|The attackers tried to undermine the outer wall of the fortress.|进攻者试图在堡垒外墙下挖地道。
considerable|amount|adj.|相当多的；相当大的；可观的|Repairing the roof will require considerable time and money.|修屋顶需要相当多的时间和资金。
considerable|important|adj.|重要的；值得重视的|Her research made her a considerable figure in marine biology.|她的研究使她成为海洋生物学界的重要人物。
outcome|result|n.|结果；后果|Nobody could predict the outcome of the negotiations.|没有人能预测谈判结果。
massive|heavy|adj.|大而重的；厚实的|Massive stone columns support the entrance roof.|粗重的石柱支撑着入口的屋顶。
massive|scale|adj.|巨大的；大规模的；大量的|The city faces a massive shortage of affordable housing.|这座城市面临大量经济适用住房短缺的问题。
massive|medical|adj.|严重的；影响范围广的（病症）|The patient was admitted after a massive stroke.|病人严重中风后被送入医院。
favourable|approval|adj.|赞成的；肯定的；好评的|The exhibition received favourable reviews from local critics.|展览获得了当地评论家的好评。
favourable|conditions|adj.|有利的；适宜的|Favourable winds helped the sailing team reach the island.|有利的风向帮助帆船队抵达了岛屿。
favourable|comparison|adj.|相比不逊色的；比较结果有利的|The new camera makes a favourable comparison with more expensive models.|这款新相机与更贵的型号相比也不逊色。
hybridise|breed|v.|杂交；使杂交|Researchers hybridise two wheat varieties to improve drought tolerance.|研究人员将两种小麦杂交以提高耐旱性。
subgroup|division|n.|小组；亚群；下属分组|The study divided participants into a subgroup with regular exercise and one without.|研究将参与者分为定期运动和不定期运动两个亚组。
subgroup|math|n.|子群（数学）|Every subgroup in this example contains the identity element.|这个例子中的每个子群都包含单位元。
discernible|perceptible|adj.|可辨别的；可察觉的|There was a discernible improvement in water quality after the cleanup.|清理后水质有了可察觉的改善。
distinct|clear|adj.|清晰的；明显的|A distinct smell of smoke came from the corridor.|走廊里传来明显的烟味。
distinct|separate|adj.|不同的；独立的；有区别的|The two islands have distinct legal systems.|这两个岛屿有各自不同的法律体系。
indiscernible|imperceptible|adj.|无法或难以辨别的；几乎看不出的|The signature was almost indiscernible on the faded document.|褪色文件上的签名几乎无法辨认。
cataclysmic|disaster|adj.|灾难性的；造成剧变的|A cataclysmic eruption destroyed several nearby settlements.|一次灾难性的火山喷发摧毁了附近几个聚居地。
desperate|hopeless|adj.|绝望的；走投无路的|The stranded hikers grew desperate as their water ran out.|被困的徒步者在饮水耗尽时变得绝望。
desperate|reckless|adj.|不顾一切的；孤注一掷的|They made a desperate attempt to rescue the trapped dog.|他们不顾一切地试图救出被困的狗。
desperate|serious|adj.|极严重的；危急的|The village is in desperate need of clean drinking water.|这个村庄急需洁净饮用水。
desperate|eager|adj.|极度渴望的|She was desperate to hear whether her brother had arrived safely.|她极想知道弟弟是否安全抵达。
overwhelming|majority|adj.|压倒性的；数量或力量巨大的|An overwhelming majority voted to protect the woodland.|绝大多数人投票支持保护林地。
overwhelming|emotion|adj.|强烈得令人难以承受的|He felt overwhelming relief when the missing child was found.|失踪儿童找到时，他感到极大的宽慰。
hopeless|no-hope|adj.|无望的；绝望的|The rescue team refused to consider the situation hopeless.|救援队拒绝认为局面已无希望。
hopeless|incapable|adj.|极差的；不擅长的；无可救药的|I am hopeless at remembering street names.|我实在记不住街道名称。
despair|feeling|n.|绝望|The closure of the only factory brought despair to the town.|唯一一家工厂关闭，给小镇带来了绝望。
despair|lose-hope|v.|绝望；失去希望|We began to despair of finding a hotel before dark.|我们开始对天黑前找到旅馆不抱希望了。
cricket|insect|n.|蟋蟀|A cricket chirped beneath the wooden steps.|一只蟋蟀在木台阶下鸣叫。
cricket|sport|n.|板球运动|The school cricket team practises on Wednesday afternoons.|学校板球队每周三下午训练。
dragon|myth|n.|龙；传说中的龙形怪兽|The old map shows a dragon guarding the mountain pass.|古地图画着一条龙守卫山口。
dragon|person|n.|凶恶、严厉的人（贬义比喻）|The children unfairly described their strict neighbour as a dragon.|孩子们不公正地把严格的邻居称作凶神。
dragon|lizard|n.|大型蜥蜴（用于某些名称中）|The Komodo dragon moved slowly towards the shaded rocks.|科莫多巨蜥缓缓向阴凉的岩石移动。
cock|bird|n.|公鸡；雄鸟|A cock crowed beside the henhouse before sunrise.|日出前，一只公鸡在鸡舍旁打鸣。
cock|tap|n.|旋塞；阀门|Turn the drain cock slowly to release the trapped water.|慢慢转动排水旋塞，放出积水。
cock|raise|v.|翘起；竖起；歪着（头、耳等）|The puppy cocked its head when it heard the whistle.|小狗听到哨声时歪起了头。
cock|gun|v.|扳起击锤；使枪支待发|The officer told him not to cock the pistol.|警官告诉他不要扳起手枪击锤。
cage|enclosure|n.|笼子|The injured bird rested in a spacious cage.|受伤的鸟在宽敞的笼子里休息。
cage|confine|v.|把……关进笼中；禁锢|The film questions whether wild animals should be caged.|影片质疑是否应把野生动物关进笼子。
cage|framework|n.|笼状框架；围护结构|A metal cage protects the machinery from falling debris.|金属护罩保护机器免受坠落碎屑的损坏。
barn|building|n.|谷仓；农用储藏或畜养建筑|The farmer stored the winter hay in the barn.|农民把过冬的干草存放在谷仓里。
barn|unit|n.|靶恩（核反应截面单位）|The table reports the measured cross section in barns.|表格以靶恩列出测得的反应截面。
devour|eat|v.|狼吞虎咽地吃；吞食|After the long hike, they devoured a bowl of noodles each.|长途徒步后，他们各自狼吞虎咽地吃下一碗面。
devour|destroy|v.|吞噬；毁灭；耗尽|Flames devoured the dry timber in minutes.|火焰在几分钟内吞噬了干木材。
devour|read|v.|如饥似渴地阅读或吸收|She devoured every article about the newly discovered planet.|她如饥似渴地阅读每篇关于新发现行星的文章。
shepherd|person|n.|牧羊人|The shepherd led the flock away from the flooded meadow.|牧羊人把羊群带离被淹的草地。
shepherd|guide|v.|引导；护送；照料|Volunteers shepherded visitors towards the emergency exit.|志愿者引导游客走向紧急出口。
shepherd|religious|n.|牧者；精神领袖|The congregation valued their shepherd's patient guidance.|教众珍视牧者耐心的引导。
exterminate|destroy|v.|彻底消灭；灭绝|The treatment aims to exterminate the termites without harming nearby trees.|处理措施旨在彻底消灭白蚁而不损害附近树木。
sheepdog|dog|n.|牧羊犬|The sheepdog gathered the scattered flock before the storm.|牧羊犬在暴风雨前把散开的羊群赶到一起。
ecliptic|path|n.|黄道（太阳在天球上的周年视运动轨迹）|The diagram traces the Sun's apparent movement along the ecliptic.|图中描绘了太阳沿黄道的视运动。
ecliptic|eclipse|adj.|日食或月食的|The astronomer compared the ecliptic observations from two observatories.|天文学家比较了两个天文台的食象观测记录。
brainstorm|session|n./v.|头脑风暴；集体讨论以产生创意|The design team will brainstorm ways to reduce packaging waste.|设计团队将集体讨论减少包装废物的办法。
brainstorm|idea|n.|突然想到的好主意；灵机一动|During the journey, she had a brainstorm about the exhibition layout.|旅途中，她对展览布局突然有了好主意。
typist|person|n.|打字员；打字的人|The typist checked every name against the original manuscript.|打字员对照原稿核查了每个名字。
logogram|symbol|n.|表词符号；代表一个词或语素的符号|The percentage sign is a logogram rather than a letter.|百分号是表词符号，而不是字母。
olympic|games|adj.|奥林匹克运动会的|The swimmer qualified for the Olympic final.|这位游泳运动员取得了奥运会决赛资格。
olympic|ancient|adj.|古奥林匹亚的|The lecture examined Olympic religious festivals in ancient Greece.|讲座研究了古希腊奥林匹亚的宗教节庆。
sprawl|posture|v.|四肢摊开地坐或躺|The exhausted climber sprawled on the grass beside his tent.|疲惫的登山者摊开四肢躺在帐篷旁的草地上。
sprawl|spread|v./n.|无规则地扩展；城市蔓延|Urban sprawl has replaced farmland with roads and houses.|城市蔓延使农田变成道路和住宅。
glide|smooth|v./n.|平稳滑动；轻盈滑行|The skater began to glide across the newly frozen lake.|滑冰者开始在刚结冰的湖面上轻盈滑行。
glide|flight|v./n.|无动力滑翔|The pilot let the aircraft glide towards the empty field.|飞行员让飞机滑翔着飞向空地。
glide|sound|n.|滑音；过渡音|The teacher explained how a glide links the two vowel sounds.|老师解释了滑音如何连接这两个元音。
ski|equipment|n.|滑雪板；滑水板|One ski came loose during the descent.|下坡时，一块滑雪板松脱了。
ski|sport|v.|滑雪；用滑雪板行进|We learned to ski on a gentle slope outside the village.|我们在村外的缓坡上学会了滑雪。
hike|walk|n./v.|徒步旅行；远足|They plan to hike through the valley before the rainy season.|他们计划在雨季前徒步穿过山谷。
hike|increase|n./v.|大幅提高；大幅上涨|The council refused to hike parking fees again.|市政委员会拒绝再次大幅提高停车费。
hike|pull|v.|向上拉起；提起|She hiked up her skirt to step across the stream.|她提起裙子跨过小溪。
limb|body|n.|肢；四肢；动物的翼等附肢|The patient slowly regained movement in the injured limb.|病人受伤的肢体逐渐恢复了活动能力。
limb|tree|n.|树的大枝；主枝|A heavy limb broke from the oak during the storm.|暴风雨中，橡树的一根粗枝折断了。
limb|edge|n.|天体的边缘；视圆面边缘|The telescope revealed a bright region near the lunar limb.|望远镜显示月面边缘附近有一片明亮区域。
pedal|lever|n.|踏板；脚蹬|Press the brake pedal gently on the icy road.|在结冰道路上要轻踩刹车踏板。
pedal|cycle|v.|踩脚蹬前进；骑自行车|They pedalled along the riverside path to the station.|他们沿河边小路骑车到了车站。
pedal|music|v.|踩奏乐器踏板|The pianist pedalled carefully to keep the melody clear.|钢琴家小心地使用踏板，使旋律保持清晰。
stool|seat|n.|凳子；无靠背座椅|She pulled a wooden stool towards the kitchen counter.|她把一张木凳拉到厨房操作台旁。
stool|faeces|n.|粪便；大便|The laboratory received the stool sample in a sealed container.|实验室收到密封容器中的粪便样本。
stool|plant|n./v.|萌蘖基部；从基部长出新枝|The hazel began to stool after its main stems were cut.|榛树的主干被砍后，开始从基部萌生新枝。
knit|fabric|v./n.|编织；针织物|My aunt taught me to knit a scarf with thick wool.|姑妈教我用粗羊毛线织围巾。
knit|unite|v.|紧密结合；使团结|Shared work helped knit the neighbours into a supportive community.|共同劳动帮助邻居们团结成互助的社区。
knit|heal|v.|骨折愈合；接合|The scan showed that the broken bone had begun to knit.|扫描显示，断骨已开始愈合。
knit|brows|v.|皱起眉头|He knit his brows as he examined the unfamiliar symbols.|他查看陌生符号时皱起了眉头。
lime|fruit|n.|青柠；酸橙|Squeeze half a lime over the grilled fish.|把半个青柠的汁挤在烤鱼上。
lime|tree|n.|椴树|A row of lime trees shades the entrance to the park.|一排椴树为公园入口遮阴。
lime|chemical|n.|石灰；含钙的碱性物质|The farmer added lime to reduce the soil's acidity.|农民加入石灰以降低土壤酸度。
lime|treat|v.|施石灰于；用石灰处理|The gardeners lime the vegetable beds when the soil becomes too acidic.|土壤过酸时，园丁给菜畦施石灰。
miner|worker|n.|矿工|The retired miner described the conditions underground.|退休矿工描述了地下的工作条件。
miner|machine|n.|采矿机|The new continuous miner can cut coal without repeated stops.|新的连续采矿机能不停顿地切割煤层。
miner|insect|n.|潜叶虫；蛀食植物组织的昆虫|A leaf miner left pale tunnels inside the tomato leaves.|一只潜叶虫在番茄叶片内部留下了浅色隧道。
jade|stone|n.|玉；翡翠等玉石|The bracelet was carved from a single piece of jade.|这只手镯由整块玉雕成。
jade|colour|n./adj.|翡翠绿；翡翠绿色的|She chose a jade scarf to match the pale coat.|她选了一条翡翠绿色的围巾搭配浅色外套。
jade|tire|v.|使疲倦；使厌倦|Years of repetitive work had jaded his appetite for new projects.|多年的重复劳动让他对新项目失去了热情。
unbutton|fastenings|v.|解开衣服的纽扣|He began to unbutton his coat as the room grew warmer.|屋里暖和起来，他开始解开外套纽扣。
purse|money-bag|n.|钱包；小钱袋|She kept a few coins in a purse inside her coat.|她把几枚硬币放在外套内的钱包里。
purse|handbag|n.|手提包（美式）|The tourist left her purse on the airport bus.|游客把手提包忘在机场巴士上了。
purse|funds|n.|资金；财力|The repairs will place further pressure on the public purse.|维修将给公共财政带来更多压力。
purse|prize|n.|奖金|The winner donated part of the prize purse to charity.|获胜者把部分奖金捐给了慈善机构。
purse|lips|v.|撮起；噘起（嘴唇）|She pursed her lips before answering the difficult question.|她撮起嘴唇，然后回答那个难题。
sock|clothing|n.|袜子；短袜|A dry sock helped protect the blister on his foot.|一只干袜子帮助保护了他脚上的水疱。
sock|hit|n./v.|重击；猛打（口语）|In the cartoon, the sailor socks the villain on the jaw.|动画片中，水手朝反派的下巴猛击一拳。
stocking|garment|n.|长袜|A torn stocking lay beside the dancer's shoes.|舞鞋旁放着一只破了的长袜。
vest|undershirt|n.|汗背心；贴身内衣（英式）|He wore a thermal vest under his shirt in winter.|冬天，他在衬衫里面穿保暖背心。
vest|waistcoat|n.|马甲；西装背心（美式）|The waiter wore a black vest over a white shirt.|服务员在白衬衫外穿着黑马甲。
vest|authority|v.|授予；赋予权力|The constitution vests executive power in the elected president.|宪法将行政权赋予民选总统。
vest|property|v.|权利、财产归属或转归|Ownership will vest in the trust after the transfer is registered.|转让登记后，所有权将归信托所有。
bead|ornament|n.|珠子|Each blue bead was threaded onto a silver wire.|每颗蓝珠子都被穿在银线上。
bead|drop|n.|小滴；水珠|A bead of sweat rolled down his forehead.|一滴汗珠顺着他的前额滚落。
bead|decorate|v.|用珠子装饰|The craftsperson beaded the collar with tiny glass ornaments.|工匠用细小的玻璃珠装饰衣领。
bead|form|v.|形成珠状小滴|Water began to bead on the newly waxed surface.|水开始在刚打蜡的表面凝成小珠。
stainless|rustproof|adj.|不锈的；耐污的|The laboratory uses stainless steel trays for its instruments.|实验室用不锈钢托盘盛放仪器。
stainless|blameless|adj.|无瑕疵的；清白的|The investigation challenged his supposedly stainless reputation.|调查使他据称清白无瑕的声誉受到质疑。
refectory|dining|n.|学校、修道院等的公共食堂|Students gathered in the refectory after the morning lecture.|晨间讲座后，学生们聚集在食堂。
foodie|enthusiast|n.|美食爱好者|As a keen foodie, she enjoys exploring small neighbourhood restaurants.|作为热心的美食爱好者，她喜欢探索街区里的小餐馆。
knife|tool|n.|刀；餐刀；小刀|Use a sharp knife to cut the vegetables evenly.|用锋利的刀把蔬菜切得均匀。
knife|attack|v.|用刀刺；用刀砍伤|The witness reported that the attacker tried to knife the guard.|目击者称，袭击者试图用刀刺警卫。
spoon|utensil|n.|匙；勺子|Stir the mixture with a wooden spoon.|用木勺搅拌混合物。
spoon|transfer|v.|用勺舀；用勺盛|Spoon the warm sauce over the baked potatoes.|把温热的酱汁舀在烤土豆上。
saucer|dish|n.|茶碟；杯托；浅碟|He placed the cup carefully on its saucer.|他小心地把杯子放在茶碟上。
pancake|food|n.|薄煎饼|The cook folded the pancake around a filling of mushrooms.|厨师把薄煎饼折起来，包住蘑菇馅。
soda|chemical|n.|苏打；碳酸钠等钠化合物（依搭配区分）|The label identifies the cleaning agent as washing soda.|标签将这种清洁剂标为洗涤碱。
soda|water|n.|苏打水；含二氧化碳的水|She ordered lime juice mixed with soda.|她点了加苏打水的青柠汁。
soda|drink|n.|汽水；碳酸饮料（美式）|The cafe sells bottled water instead of sugary soda.|这家咖啡馆出售瓶装水，而不是含糖汽水。
coffee|drink|n.|咖啡饮品|He drank his coffee slowly while the train crossed the bridge.|火车过桥时，他慢慢喝着咖啡。
coffee|beans|n.|咖啡豆；咖啡粉|Store ground coffee in a sealed jar away from heat.|把咖啡粉放在密封罐里，远离热源。
coffee|colour|n./adj.|咖啡色；咖啡色的|They chose a coffee carpet for the pale bedroom.|他们为浅色卧室选了咖啡色地毯。
juice|liquid|n.|果汁；蔬菜汁；食物中的汁液|The recipe uses fresh orange juice instead of sugar.|食谱用鲜橙汁代替糖。
juice|body|n.|消化液等体液|Digestive juices help break down food in the gut.|消化液帮助分解肠道中的食物。
juice|power|n.|电力；燃料（口语）|The phone ran out of juice before we reached the campsite.|到达营地前，手机就没电了。
juice|extract|v.|榨汁|Juice the carrots before adding the ginger.|先把胡萝卜榨汁，再加生姜。
eggplant|vegetable|n.|茄子；茄子植物|Roast the eggplant until its skin begins to wrinkle.|把茄子烤到表皮开始起皱。
turkey|bird|n.|火鸡|A wild turkey walked along the edge of the forest.|一只野生火鸡沿着森林边缘行走。
turkey|meat|n.|火鸡肉|The sandwich contains sliced turkey and fresh lettuce.|三明治里有火鸡肉片和新鲜生菜。
turkey|failure|n.|失败之作；不中用的人或物（口语贬义）|Critics dismissed the expensive comedy as a turkey.|评论家把这部耗资高昂的喜剧贬为失败之作。
turkey|country|专名|土耳其（传统英文国名 Turkey）|The exhibition includes textiles brought from Turkey.|展览包括从土耳其带来的纺织品。
nut|food|n.|坚果；果仁|Check whether any guest has a nut allergy before serving dessert.|上甜点前，检查是否有客人对坚果过敏。
nut|fastener|n.|螺母；螺帽|Tighten the nut before restarting the machine.|重新启动机器前，拧紧螺母。
nut|enthusiast|n.|狂热爱好者（口语）|My brother is a cycling nut who repairs old bicycles.|我哥哥是个热衷修理旧自行车的骑行迷。
nut|eccentric|n.|怪人；傻瓜（口语贬义）|He called himself a nut for attempting the climb in that weather.|他自称是个傻瓜，竟在那种天气尝试登山。
chocolate|food|n.|巧克力；巧克力糖|She broke a square of dark chocolate into the warm milk.|她把一块黑巧克力掰碎放进温牛奶中。
chocolate|drink|n.|巧克力饮料|We drank hot chocolate after walking through the snow.|在雪中走过后，我们喝了热巧克力。
chocolate|colour|n./adj.|巧克力色；深褐色的|The bag has chocolate leather straps and a cream lining.|包上有深褐色皮带和奶油色衬里。
perfume|product|n.|香水|The shop offers a perfume made from local flowers.|商店出售一种用当地花卉制作的香水。
perfume|scent|n.|香味；芳香|The perfume of orange blossom filled the courtyard.|橙花的芳香弥漫在庭院里。
perfume|scent-verb|v.|使充满香气；洒香水于|Lavender flowers perfume the drawers naturally.|薰衣草花让抽屉自然散发香气。
hungry|food|adj.|饥饿的；挨饿的|The hungry children waited patiently for their lunch.|饥饿的孩子们耐心等待午餐。
hungry|eager|adj.|渴望的；渴求的|Young researchers are hungry for opportunities to test their ideas.|年轻研究者渴望获得检验想法的机会。
hungry|soil|adj.|贫瘠的；缺乏养分的（土壤）|Compost can improve the hungry soil in this part of the garden.|堆肥能改善花园这一区域贫瘠的土壤。
furnace|chamber|n.|熔炉；锅炉；高温炉|The furnace must reach the required temperature before metal is added.|加入金属前，熔炉必须达到规定温度。
furnace|hot-place|n.|酷热难耐的地方|By noon, the unventilated workshop felt like a furnace.|到了中午，不通风的车间热得像火炉。
erection|building-process|n.|竖立；架设；建造|The erection of the bridge supports took three weeks.|桥梁支架的架设用了三周。
erection|structure|n.|建筑物；竖立的结构|The temporary erection beside the station will house ticket machines.|车站旁的临时建筑将用于安放售票机。
erection|physiology|n.|勃起（生理）|The medical textbook describes the blood flow involved in an erection.|医学教材描述了勃起过程中的血液流动。
airtight|sealed|adj.|不透气的；密封的|Keep the biscuits in an airtight container.|把饼干放在密封容器中。
airtight|argument|adj.|无懈可击的；没有漏洞的|The lawyer needed an airtight argument supported by clear evidence.|律师需要有明确证据支持、无懈可击的论证。
expanse|area|n.|广阔区域；大片开阔地或水面|An expanse of open water separated the two islands.|一大片开阔水域把两座岛分隔开。
pyramid|monument|n.|金字塔|The ancient pyramid remained visible above the desert dunes.|古老的金字塔仍高出沙丘，清晰可见。
pyramid|geometry|n.|棱锥；角锥体|Each triangular face of the pyramid meets at the same vertex.|这个棱锥的各个三角形侧面相交于同一顶点。
pyramid|arrange|v.|堆成金字塔形；形成层级结构|The grocer pyramided the oranges in the centre of the display.|杂货商把橙子在展台中央堆成金字塔形。
pyramid|hierarchy|n.|金字塔式层级组织|The diagram places senior managers at the top of the corporate pyramid.|示意图把高级管理人员放在企业金字塔的顶端。
garage|storage|n.|车库|The bicycles are stored in the garage beside the house.|自行车存放在房旁的车库里。
garage|repair|n.|汽车修理厂；汽车服务站|The garage replaced the worn brake pads.|修理厂更换了磨损的刹车片。
garage|keep|v.|把车停放在车库|They garage the van indoors during the winter.|冬季，他们把货车停放在室内车库。
packet|package|n.|小包；小袋；包装及其内容物|She opened a packet of seeds for the school garden.|她为学校花园打开了一包种子。
packet|data|n.|数据包；信息分组|The receiver checks each packet for transmission errors.|接收端检查每个数据包有无传输错误。
packet|money|n.|大笔钱（英式口语）|Repairing that antique clock must have cost a packet.|修理那座古董钟一定花了一大笔钱。
packet|boat|n.|定期运送邮件、旅客等的小型船|The packet carried letters between the island and the mainland.|邮船在岛屿与大陆之间运送信件。
socialist|person|n.|社会主义者；社会党党员|The socialist argued for public ownership of essential services.|这位社会主义者主张基本服务应由公共部门拥有。
socialist|related|adj.|社会主义的；社会党的|The historian compared the policies of several socialist parties.|历史学家比较了几个社会党的政策。
revolutionary|political|adj.|革命的；从事革命的|The archive preserves letters from the revolutionary movement.|档案馆保存着那场革命运动中的信件。
revolutionary|person|n.|革命者|The revolutionary spent years writing about political reform.|这位革命者多年撰写有关政治改革的文章。
revolutionary|innovative|adj.|突破性的；带来根本变革的|The device introduced a revolutionary way to store renewable energy.|这个装置引入了一种储存可再生能源的突破性方法。
meltdown|reactor|n.|核反应堆堆芯熔毁|The safety system is designed to prevent a reactor meltdown.|这套安全系统旨在防止反应堆堆芯熔毁。
meltdown|collapse|n.|彻底崩溃；灾难性失控|The sudden credit shortage triggered a financial meltdown.|突发的信贷短缺引发了金融崩溃。
meltdown|emotional|n.|情绪崩溃（口语）|After hours of travel and noise, the exhausted child had a meltdown.|经历数小时的旅行和噪声后，疲惫的孩子情绪崩溃了。
checklist|list|n.|核对清单；检查表|The pilot completed the safety checklist before take-off.|飞行员在起飞前完成了安全检查表。
standpoint|viewpoint|n.|立场；观点；观察角度|From an environmental standpoint, the railway is the better option.|从环境角度看，铁路是更好的选择。
outlook|attitude|n.|观点；态度；人生观|Living abroad changed her outlook on education.|在国外生活改变了她对教育的看法。
outlook|prospects|n.|前景；展望|The economic outlook improved after the transport links reopened.|交通联系恢复后，经济前景有所改善。
outlook|view|n.|景色；眺望到的景观|The room offers a pleasant outlook over the harbour.|从房间望去，海港景色宜人。
successive|consecutive|adj.|接连的；连续的；相继的|Rain cancelled the match on three successive days.|降雨导致比赛连续三天取消。
spanish|language|n.|西班牙语|The guide translated the instructions into Spanish.|导游把说明翻译成西班牙语。
spanish|related|adj.|西班牙的；西班牙人的；西班牙语的|The museum displays Spanish paintings from the seventeenth century.|博物馆展出十七世纪的西班牙绘画。
spanish|people|n.集合|西班牙人（the Spanish）|The documentary explores how the Spanish celebrate regional festivals.|纪录片探讨了西班牙人如何庆祝地方节日。
african|related|adj.|非洲的；非洲人的|The collection features fabrics made by African designers.|这组藏品以非洲设计师制作的面料为特色。
african|person|n.|非洲人；非洲裔人士|The interview features an African who grew up in three countries.|采访介绍了一位在三个国家长大的非洲人。
european|related|adj.|欧洲的；欧洲人的|Several European universities took part in the study.|几所欧洲大学参与了这项研究。
european|person|n.|欧洲人；欧洲裔人士|The biography follows a European who settled in New Zealand.|传记讲述了一位在新西兰定居的欧洲人的经历。
italian|language|n.|意大利语|She learned Italian to read the original letters.|她学习意大利语是为了阅读信件原文。
italian|person|n.|意大利人|An Italian from Naples opened the bakery.|一位来自那不勒斯的意大利人开了这家面包店。
italian|related|adj.|意大利的；意大利人的；意大利语的|The orchestra performed an Italian opera.|乐团演出了一部意大利歌剧。
latin|language|n.|拉丁语|Many scientific names derive from Latin.|许多科学名称源自拉丁语。
latin|related|adj.|拉丁语的；古拉丁人的|The stone bears a Latin inscription.|石头上刻有拉丁文铭文。
latin|alphabet|adj.|拉丁字母的|The system can display names written in the Latin alphabet.|系统能显示用拉丁字母书写的名字。
latin|peoples|n./adj.|拉丁民族的人；拉丁民族的|The chapter compares cultural traditions among Latin peoples.|这一章比较了拉丁民族之间的文化传统。
soviet|council|n.|苏维埃；代表会议（历史）|The local soviet debated food distribution during the revolution.|革命期间，当地苏维埃讨论了粮食分配问题。
soviet|related|adj.|苏联的；苏维埃的|The archive contains Soviet maps of the Arctic.|档案馆收藏着苏联时期的北极地图。
indian|person|n.|印度人|An Indian from Chennai led the engineering team.|一位来自金奈的印度人领导了工程团队。
indian|related|adj.|印度的；印度人的|The programme introduces Indian classical music.|节目介绍了印度古典音乐。
portuguese|language|n.|葡萄牙语|The exchange students speak Portuguese at home.|这些交换生在家说葡萄牙语。
portuguese|person|n.|葡萄牙人|A Portuguese from Porto restored the old tiles.|一位来自波尔图的葡萄牙人修复了旧瓷砖。
portuguese|related|adj.|葡萄牙的；葡萄牙人的；葡萄牙语的|The exhibition includes Portuguese ceramics.|展览包括葡萄牙陶瓷。
roman|ancient|n./adj.|古罗马人；古罗马的|Roman engineers built the stone aqueduct.|古罗马工程师建造了这座石砌渡槽。
roman|modern|n./adj.|罗马居民；现代罗马的|A Roman who lives nearby showed us the quiet courtyard.|一位住在附近的罗马居民带我们参观了安静的庭院。
roman|type|n./adj.|罗马正体字；正体的|Print the title in italic and the explanation in roman.|标题用斜体印刷，说明用正体。
russian|language|n.|俄语|The researchers translated the diary from Russian.|研究人员将这本俄语日记译成了其他语言。
russian|person|n.|俄罗斯人|A Russian from Kazan joined the international orchestra.|一位来自喀山的俄罗斯人加入了国际乐团。
russian|related|adj.|俄罗斯的；俄罗斯人的；俄语的|The course examines Russian literature through translation.|课程通过译作研究俄罗斯文学。
spain|country|专名|西班牙|The train journey across Spain included a stop in Madrid.|穿越西班牙的火车旅程在马德里停留了一站。
africa|continent|专名|非洲|The atlas shows major river systems across Africa.|地图册显示了非洲各地的主要河流系统。
italy|country|专名|意大利|The ceramic bowl was made in Italy.|这个陶碗是在意大利制作的。
russia|country|专名|俄罗斯；俄国|The railway map includes routes across Russia.|铁路图包括穿越俄罗斯的线路。
france|country|专名|法国|The exhibition travelled from France to Canada.|展览从法国转展至加拿大。
canadian|related|adj.|加拿大的；加拿大人的|The study uses data from Canadian schools.|这项研究使用加拿大各学校的数据。
canadian|person|n.|加拿大人|A Canadian from Vancouver volunteered at the centre.|一位来自温哥华的加拿大人在中心做志愿者。
french|language|n.|法语；法文|The original contract was written in French.|合同原文是用法语写的。
french|related|adj.|法国的；法国人的；法语的|They visited a French village near the border.|他们参观了边境附近的一个法国村庄。
french|people|n.集合|法国人（the French）|The survey asked how the French use public transport.|调查询问了法国人如何使用公共交通。
german|language|n.|德语|She reads German but finds spoken conversation harder.|她能阅读德语，但觉得口语交流更难。
german|person|n.|德国人|A German from Bremen designed the bridge.|一位来自不来梅的德国人设计了这座桥。
german|related|adj.|德国的；德国人的；德语的|The library purchased a collection of German poetry.|图书馆购入了一套德国诗歌作品。
canada|country|专名|加拿大|The documentary follows migrating birds across Canada.|纪录片追踪了穿越加拿大的候鸟。
workaholic|person|n.|工作狂；沉迷工作的人|The workaholic finally agreed to take a week away from the office.|这位工作狂终于同意离开办公室休假一周。
employer|person|n.|雇主；雇用人员的机构|The employer must provide suitable protective clothing.|雇主必须提供合适的防护服。
employee|worker|n.|雇员；受雇人员|Every employee received training on the new equipment.|每位雇员都接受了新设备培训。
abortion|termination|n.|人工流产；终止妊娠|The article compares abortion laws in different countries.|文章比较了不同国家的堕胎法律。
abortion|miscarriage|n.|流产（包括自然流产的医学用法）|The medical record uses spontaneous abortion to mean miscarriage.|病历使用 spontaneous abortion 表示自然流产。
abortion|failure|n.|失败；未能发展完成的事物|The critic dismissed the unfinished film as an artistic abortion.|评论家把这部未完成的影片贬为艺术上的失败之作。
lossless|data|adj.|无损的（压缩不丢失数据）|The photographer saved the scan in a lossless format.|摄影师以无损格式保存了扫描图像。
lossless|energy|adj.|无耗的；无衰减的（理想传输等）|The model assumes a lossless transmission line.|模型假定传输线无能量损耗。
lawyer|profession|n.|律师；法律专业人士|The lawyer explained each clause before her client signed.|律师在客户签字前解释了每个条款。
cheater|dishonest-person|n.|作弊者；骗子|The tournament removed a cheater who used hidden software.|赛事取消了一名使用隐藏软件的作弊者的资格。
commander|leader|n.|指挥官；司令官；负责人|The commander ordered the rescue team to withdraw before nightfall.|指挥官命令救援队在入夜前撤离。
commander|rank|n.|海军中校等军衔（依国家而定）|She was promoted to commander after several years at sea.|多年海上服役后，她晋升为海军中校。
bullet|projectile|n.|子弹；弹丸|The bullet struck the wall above the doorway.|子弹击中了门口上方的墙。
bullet|list|n.|项目符号；圆点标记|Use a bullet to mark each separate recommendation.|用项目符号标出每一项独立建议。
missile|weapon|n.|导弹|The museum displays a deactivated guided missile.|博物馆展出了一枚已停用的制导导弹。
missile|object|n.|投掷物；发射物|A stone thrown from the crowd became a dangerous missile.|从人群中扔出的一块石头成了危险的投掷物。
propeller|device|n.|螺旋桨；推进器|The boat's propeller became tangled in discarded fishing line.|船的螺旋桨被丢弃的钓鱼线缠住了。
trench|ditch|n.|沟；深沟|Workers dug a trench for the new water pipe.|工人为新水管挖了一条沟。
trench|military|n.|战壕|The soldiers sheltered in a trench during the bombardment.|炮击期间，士兵躲在战壕里。
trench|dig|v.|开沟；挖战壕|The crew trenched the field before laying the drainage pipes.|工作人员在铺设排水管前给田地开沟。
troop|group|n.|一群；一队|A troop of monkeys crossed the path ahead.|一群猴子从前方的小路穿过。
troop|soldiers|n.复数|军队；部队；士兵|The troops returned to their base after the exercise.|演习后，部队返回基地。
troop|scouts|n.|童子军分队|The Scout troop practised putting up tents in the rain.|童子军分队练习在雨中搭帐篷。
troop|move|v.|成群结队地走|The children trooped into the hall carrying their projects.|孩子们带着各自的作品，成群走进大厅。
tomb|burial|n.|坟墓；墓穴；墓碑|The archaeologists sealed the tomb after documenting its paintings.|考古学家记录墓中绘画后封闭了墓穴。
maritime|shipping|adj.|海事的；航海的|The college offers courses in maritime safety.|学院提供海事安全课程。
maritime|coastal|adj.|海的；沿海的|The town's maritime location shaped its trading history.|小镇的沿海位置影响了其贸易史。
maritime|climate|adj.|海洋性的（气候）|A maritime climate keeps winters milder than those inland.|海洋性气候使这里的冬季比内陆温和。
monument|memorial|n.|纪念碑；纪念建筑|The village erected a monument to the rescuers.|村庄为救援者建了一座纪念碑。
monument|historic|n.|古迹；历史建筑或遗址|The castle is protected as a national monument.|这座城堡作为国家古迹受到保护。
monument|testament|n.|某种成就或特征的典范；见证|The restored library is a monument to years of community effort.|修复后的图书馆见证了社区多年的努力。
medal|award|n.|奖牌；勋章；纪念章|She kept her first swimming medal in a wooden box.|她把第一枚游泳奖牌放在木盒里。
medal|win|v.|赢得奖牌（体育）|The runner hopes to medal at the next championship.|这位跑者希望在下届锦标赛获得奖牌。
devotion|dedication|n.|热爱；忠诚；献身；专心投入|Her devotion to teaching inspired generations of students.|她对教学的投入激励了几代学生。
devotion|religion|n.|虔诚；宗教祈祷或礼拜|The chapel was open for private devotion each morning.|小礼拜堂每天早晨开放，供个人祈祷。
surname|family-name|n.|姓；姓氏|Write your surname in the first box on the form.|在表格第一个方框内填写姓氏。
gender|social|n.|社会性别；性别身份|The questionnaire allows participants to describe their gender in their own words.|问卷允许参与者用自己的语言描述性别身份。
gender|grammar|n.|语法性别；阴阳中性等分类|In French, a noun's gender affects the form of its article.|法语中，名词的语法性别影响其冠词形式。
grandfather|relative|n.|祖父；外祖父|Her grandfather taught her to repair wooden furniture.|她的祖父教她修理木家具。
grandfather|exemption|v.|使原有对象豁免于新规（常用 grandfather in）|The new policy will grandfather in licences issued before January.|新政策将使一月前颁发的执照继续按旧规有效。
cousin|relative|n.|堂表兄弟姐妹；同辈远亲|My cousin shares a flat with two classmates.|我的表亲与两名同学合租公寓。
cousin|related-kind|n.|同类；有亲缘或相似关系的事物|The domestic cat is a smaller cousin of the tiger.|家猫是与老虎有亲缘关系的较小猫科动物。
honeymoon|holiday|n.|蜜月；新婚假期|They spent their honeymoon in a quiet coastal village.|他们在一个安静的海滨村庄度蜜月。
honeymoon|initial-period|n.|新关系初期的和谐时期；蜜月期|The new government's honeymoon ended when energy prices rose.|能源价格上涨时，新政府的蜜月期结束了。
honeymoon|travel|v.|度蜜月|The couple honeymooned on an island without mobile reception.|这对夫妇在一个没有手机信号的岛上度蜜月。
neighbourhood|district|n.|街区；居住区；附近地区|The neighbourhood has a library and two small parks.|这个街区有一座图书馆和两个小公园。
neighbourhood|people|n.|街坊；邻里居民|The whole neighbourhood helped search for the missing dog.|整个街区的居民都帮助寻找走失的狗。
neighbourhood|approximation|n.|大约；接近的数额（in the neighbourhood of）|The repairs will cost in the neighbourhood of two thousand pounds.|维修费用大约两千英镑。
neighbourhood|math|n.|邻域（数学）|The proof examines a small neighbourhood of the chosen point.|证明考察了所选点的一个小邻域。
veterinary|animal-medicine|adj.|兽医的；动物医疗的|The college opened a new veterinary teaching hospital.|学院开设了一所新的兽医教学医院。
fireman|firefighter|n.|消防员（传统男性称谓）|The fireman carried the frightened cat out of the building.|消防员把受惊的猫抱出了大楼。
fireman|stoker|n.|司炉工；蒸汽机车添煤工|The fireman fed coal into the locomotive's furnace.|司炉工往机车炉膛里添煤。
gardener|person|n.|园丁；园艺工作者或爱好者|The gardener moved the seedlings into larger pots.|园丁把幼苗移入更大的花盆。
attorney|lawyer|n.|律师（尤美式）|The defendant consulted an attorney before the hearing.|被告在听证前咨询了律师。
attorney|agent|n.|经法律授权的代理人|She appointed her sister as her attorney to manage the sale.|她指定姐姐为法律代理人，处理出售事宜。
fisherman|person|n.|渔民；钓鱼者|The fisherman repaired his nets while waiting for the tide.|渔民在等潮时修补渔网。
fisherman|boat|n.|渔船|The small fisherman returned to harbour before the storm.|那艘小渔船在暴风雨前返回了港口。
haircut|cutting|n.|理发|He booked a haircut before the job interview.|他预约在求职面试前理发。
haircut|style|n.|发型|Her short haircut was easy to manage during the expedition.|她的短发发型在考察期间很容易打理。
haircut|finance|n.|资产估值扣减；折价率（金融）|The lender applied a haircut to the value of the collateral.|贷款人对抵押品的价值作了折价扣减。
forehead|body|n.|前额；额头|She wiped the dust from her forehead.|她擦去额头上的灰尘。
eyelash|hair|n.|睫毛|A loose eyelash fell onto the page.|一根脱落的睫毛掉在了书页上。
skull|bone|n.|颅骨；头骨|The model shows how the skull protects the brain.|模型展示了颅骨如何保护大脑。
skull|symbol|n.|骷髅头图案|A skull on the label warned of a poisonous substance.|标签上的骷髅头图案警示有毒物质。
neck|body|n.|脖子；颈部|The scarf protected her neck from the cold wind.|围巾保护她的颈部免受寒风吹袭。
neck|garment|n.|衣领；领口|The neck of his sweater had stretched out of shape.|他的毛衣领口被拉得变了形。
neck|narrow-part|n.|瓶颈等狭窄部分|The narrow neck of the bottle made it difficult to clean.|瓶子的窄颈使清洗很困难。
neck|instrument|n.|琴颈|The repairer checked the angle of the guitar neck.|修理师检查了吉他琴颈的角度。
neck|land|n.|狭长地带；地峡|A narrow neck of land connects the island to the mainland.|一条狭长地带把岛屿与大陆连接起来。
neck|kiss|v.|拥吻；亲热（口语）|The film shows a young couple necking in a parked car.|影片中有一对年轻情侣在停着的汽车里拥吻。
beard|hair|n.|胡须；络腮胡|He trimmed his beard before the graduation ceremony.|他在毕业典礼前修剪了胡须。
beard|plant|n.|植物的芒；须状物|The long beard of the barley caught the evening light.|大麦的长芒映着傍晚的光。
beard|confront|v.|公然反对；大胆对抗|The young reporter dared to beard the minister at the public meeting.|年轻记者敢于在公开会议上当面质问部长。
throat|body|n.|咽喉；喉咙|Warm water soothed her dry throat.|温水舒缓了她干燥的喉咙。
throat|passage|n.|喉状窄口；狭窄通道|Smoke escaped through the narrow throat of the chimney.|烟从烟囱的狭窄喉口排出。
chin|body|n.|下巴；颏|He rested his chin on one hand while reading.|他读书时用一只手托着下巴。
chin|hit|v.|击打下巴（口语）|In the final scene, the boxer chins his opponent.|最后一幕中，拳击手击中了对手的下巴。
liver|organ|n.|肝脏|The diagram identifies the liver beside the stomach.|图中标出了胃旁边的肝脏。
liver|food|n.|食用的动物肝|The chef served liver with onions.|厨师端上了洋葱配动物肝的菜。
liver|colour|n./adj.|肝褐色；红褐色的|The dog's white coat had small liver patches.|狗的白毛上有小块肝褐色斑纹。
stomach|organ|n.|胃|Food moves from the stomach into the small intestine.|食物从胃进入小肠。
stomach|abdomen|n.|肚子；腹部|The child lay on his stomach to watch the ants.|孩子趴着看蚂蚁。
stomach|inclination|n.|胃口；做某事的欲望或意愿|After the argument, she had no stomach for another debate.|争吵后，她没有心情再辩论一次。
stomach|tolerate|v.|忍受；容忍|He could not stomach the constant dishonesty.|他无法忍受一再发生的不诚实行为。
stomach|digest|v.|吃得下；消化得了|She could stomach only a little soup after the journey.|旅途之后，她只能吃下一点汤。
fist|hand|n.|拳头|He clenched his fist but said nothing.|他握紧拳头，却没有说话。
chest|body|n.|胸部；胸膛|The nurse placed a sensor on the patient's chest.|护士在病人胸部放置了传感器。
chest|box|n.|箱子；大储物箱|The wooden chest contained blankets and old letters.|木箱里装着毯子和旧信。
fingerprint|mark|n.|指纹|A fingerprint on the glass helped identify its owner.|玻璃上的指纹帮助确认了物主身份。
fingerprint|identify|v.|采集指纹|The officers fingerprinted the volunteer for the demonstration.|警员为演示给志愿者采集了指纹。
fingerprint|signature|n.|独特特征；识别特征|Each recording has a digital fingerprint that helps detect copies.|每份录音都有帮助检测复制品的数字指纹。
ankle|joint|n.|踝；踝关节|She twisted her ankle on the uneven path.|她在不平的小路上扭伤了脚踝。
skeleton|bones|n.|骨骼；骨架|The museum displayed the skeleton of a large whale.|博物馆展出了一头大型鲸的骨架。
skeleton|framework|n.|支撑框架；基本结构；梗概|The writer prepared the skeleton of the novel before drafting the chapters.|作家在起草章节前准备了小说的基本框架。
skeleton|minimal|adj.前置|最低限度的；最基本的|A skeleton staff kept the station open during the holiday.|假期里，最少量的工作人员维持车站运转。
skeleton|sport|n.|钢架雪车；钢架雪车运动|She began competing in skeleton after years of sprint training.|经过多年短跑训练后，她开始参加钢架雪车比赛。
biorhythm|cycle|n.|生物节律；生理周期|The researchers measured how night work affected each volunteer's biorhythm.|研究人员测量了夜班工作如何影响每位志愿者的生物节律。
visual|sight|adj.|视觉的；视力的|The task tests visual memory rather than hearing.|这项任务测试视觉记忆，而不是听觉。
visual|material|n.|视觉资料；图片、影片等|The lecturer used a visual to explain the layers of the atmosphere.|讲师用一幅图示解释大气层的结构。
lifestyle|way-of-life|n.|生活方式|Regular walking became part of her healthier lifestyle.|定期散步成了她更健康的生活方式的一部分。
aural|hearing|adj.|听觉的；耳的|The music course includes an aural test each month.|音乐课程每月包括一次听力测试。
dental|teeth|adj.|牙齿的；牙科的|The school organised a dental check for every pupil.|学校为每名学生安排了牙科检查。
dental|sound|n./adj.|齿音；齿音的|The student practised a dental consonant with the tongue against the teeth.|学生练习把舌头抵着牙齿发一个齿音。
asleep|sleep|adj./adv.|睡着的；进入睡眠地|The baby was asleep before the train left the station.|火车离站前，婴儿已经睡着了。
asleep|numb|adj.|麻木的；失去知觉的（肢体）|My foot had gone asleep after I sat on it for too long.|我压着脚坐得太久，脚麻了。
asleep|inactive|adj.|不活跃的；没有察觉的|The authorities seemed asleep to the risks of the abandoned building.|有关部门似乎没有意识到那栋废弃建筑的风险。
snore|breathing|n./v.|打鼾；鼾声|He began to snore soon after falling asleep.|他入睡不久就开始打鼾。
sneeze|reflex|n./v.|喷嚏；打喷嚏|The dust made her sneeze twice.|灰尘让她打了两个喷嚏。
pregnancy|state|n.|怀孕；妊娠；孕期|The survey asked about changes in sleep during pregnancy.|调查询问了孕期睡眠的变化。
condom|protection|n.|避孕套；安全套|The health leaflet explains the purpose of a condom.|健康宣传册说明了避孕套的用途。
detriment|harm|n.|损害；不利；危害|Long working hours can be a detriment to family life.|过长的工作时间可能损害家庭生活。
insane|mental|adj.|精神失常的（旧称，可能冒犯）|The archive shows how people once labelled insane were treated.|档案展示了过去被称为精神失常者的人如何被对待。
insane|foolish|adj.|极其愚蠢的；荒唐的|Driving across the flooded bridge would be insane.|开车穿过被洪水淹没的桥会是极其愚蠢的。
insane|extreme|adj.|极端的；大得惊人的（口语）|The repair shop quoted an insane price for a small scratch.|修理店为一处小划痕报出了高得惊人的价格。
corpus|texts|n.|文集；语料库|The linguists searched a corpus of modern newspaper articles.|语言学家检索了一个现代报刊文章语料库。
corpus|body|n.|主体；主要部分；器官体部|The diagram distinguishes the corpus of the uterus from its cervix.|图中区分了子宫体与子宫颈。
corpus|capital|n.|本金；基金的原始资本|The trust preserves its corpus and spends only the interest.|信托保留本金，只支出利息。
hospital|institution|n.|医院|The injured driver was taken to hospital by ambulance.|受伤司机被救护车送往医院。
clinic|medical|n.|诊所；门诊部；专科医疗机构|The clinic offers appointments outside normal working hours.|诊所在正常工作时间之外提供预约。
clinic|instruction|n.|指导课；咨询或培训活动|The tennis club held a clinic for beginners.|网球俱乐部为初学者开设了指导课。
morphine|drug|n.|吗啡|The historical display describes how morphine changed pain treatment.|历史展陈介绍了吗啡如何改变疼痛治疗。
hormone|chemical|n.|激素；荷尔蒙|The experiment measured how a plant hormone affected root growth.|实验测量了一种植物激素如何影响根系生长。
headache|pain|n.|头痛|The bright light made her headache worse.|强光使她的头痛加重了。
headache|problem|n.|令人头痛的事；棘手问题|Finding enough storage space became a major headache.|寻找足够的储存空间成了一个大难题。
knee|joint|n.|膝；膝盖；膝关节|He bent his knee slowly after the exercise.|运动后，他慢慢弯曲膝盖。
knee|garment|n.|裤子的膝部|The knee of her trousers had a small tear.|她裤子的膝部有一处小破口。
knee|lap|n.|坐着时的大腿上部|The child balanced the picture book on his mother's knee.|孩子把图画书平放在母亲的膝上。
knee|strike|v.|用膝盖顶、撞|The defender accidentally kneed the goalkeeper during the scramble.|争抢时，后卫不慎用膝盖撞到了守门员。
mankind|humanity|n.|人类（可用 humankind 作包容性替代）|The exhibition asks how technology has changed mankind's relationship with nature.|展览探讨了科技如何改变人类与自然的关系。
manly|qualities|adj.|被传统上认为有男子气概的；刚毅的|The novel questions the belief that hiding fear is manly.|小说质疑了掩饰恐惧才算有男子气概的观念。
optical|light|adj.|光的；光学的|The laboratory uses optical fibres to transmit the signal.|实验室使用光纤传输信号。
optical|vision|adj.|眼睛的；视觉的；辅助视力的|The optical instrument allows the tiny markings to be examined.|光学仪器使人能查看细小的标记。
merry|cheerful|adj.|欢乐的；愉快的|Merry voices filled the hall as the guests arrived.|宾客到来时，欢乐的说话声充满大厅。
merry|tipsy|adj.|微醉的（英式口语）|After a glass of cider, he was rather merry but still spoke clearly.|喝了一杯苹果酒后，他有点微醺，但说话仍然清楚。
laughter|laughing|n.|笑；笑声|The unexpected joke brought laughter from the audience.|意外的笑话引起了观众的笑声。
joy|feeling|n.|喜悦；欢乐|She felt a surge of joy when the seedlings appeared.|幼苗冒出时，她感到一阵喜悦。
joy|source|n.|乐事；带来快乐的人或事|Watching the birds became a daily joy during his recovery.|康复期间，看鸟成了他每天的一件乐事。
joy|success|n.|成功；满意结果（英式口语，常用于否定）|We tried three shops but had no joy finding the spare part.|我们跑了三家商店，但都没能找到备用零件。
rejoice|celebrate|v.|欣喜；欢庆；感到高兴|Residents rejoiced when the damaged bridge finally reopened.|受损的桥终于重新开放时，居民们欢欣鼓舞。
satisfaction|contentment|n.|满足；满意；成就感|Finishing the restoration gave the team great satisfaction.|完成修复给团队带来了极大的成就感。
satisfaction|compensation|n.|赔偿；补偿；对不公的弥补|The injured party sought satisfaction through the courts.|受害方通过法院寻求补偿。
zeal|enthusiasm|n.|热忱；热情；热衷|The volunteers approached the difficult task with remarkable zeal.|志愿者怀着非凡的热忱着手处理这项艰巨任务。
zealous|enthusiastic|adj.|热心的；热诚的；积极投入的|A zealous campaigner persuaded the council to protect the trees.|一位热心的活动人士说服市政委员会保护这些树。
gentleman|courteous-man|n.|有礼貌、有教养的男子；绅士|He behaved like a gentleman and offered his seat to the older passenger.|他表现得很有风度，把座位让给了年长乘客。
gentleman|polite-address|n.|先生（对男子的礼貌称谓）|The gentleman at reception asked for a visitor's pass.|接待处的那位先生要了一张访客证。
gentleman|social-class|n.|有身份的男子；乡绅（历史）|The records describe him as a country gentleman who owned several farms.|档案称他为拥有几座农场的乡绅。
honesty|truthfulness|n.|诚实；正直；公正|Her honesty about the error helped the team correct it quickly.|她诚实承认错误，帮助团队迅速改正了问题。
honesty|plant|n.|银扇草|The gardener dried the silver seed pods of honesty for a winter display.|园丁将银扇草银色的种荚晾干，用于冬季陈设。
polite|courteous|adj.|有礼貌的；客气的|She wrote a polite reminder about the overdue payment.|她写了一封客气的催款提醒。
polite|refined|adj.|文雅的；有教养的；上流社会的|Such blunt language was unwelcome in polite society.|如此直白的措辞不受上流社会欢迎。
frank|candid|adj.|坦率的；直言不讳的|We had a frank discussion about why the project failed.|我们坦率讨论了项目失败的原因。
frank|postage|v.|加盖邮资已付或免邮标记|The office machine franks every outgoing envelope.|办公室机器给每封外发信封加盖邮资标记。
frank|mark|n.|免邮标记；免邮特权|The old letter bears a parliamentary frank instead of a stamp.|旧信上盖有议会免邮标记，而不是邮票。
impolite|rude|adj.|无礼的；粗鲁的|Interrupting a speaker repeatedly is impolite.|反复打断发言者很无礼。
hospitable|welcoming|adj.|好客的；热情招待的|Our hospitable neighbours invited us to share their evening meal.|好客的邻居邀请我们共进晚餐。
hospitable|receptive|adj.|乐于接受的；有利于生存发展的|The wet valley offers a hospitable environment for these plants.|湿润的山谷为这些植物提供了适宜的环境。
romantic|love|adj.|爱情的；浪漫的|They planned a romantic dinner beside the lake.|他们计划在湖边吃一顿浪漫的晚餐。
romantic|idealistic|adj.|不切实际而理想化的；空想的|His romantic view of farming ignored the long hours and hard work.|他对务农的理想化看法忽略了漫长工时和辛劳。
romantic|art|n./adj.|浪漫主义者；浪漫主义的|The lecture explored Romantic poetry and its interest in nature.|讲座探讨了浪漫主义诗歌及其对自然的兴趣。
romantic|person|n.|浪漫的人；富于幻想的人|A lifelong romantic, she kept every letter from their early friendship.|她一生浪漫，保留了他们早期交往时的每封信。
considerate|kind|adj.|体贴的；为他人着想的|It was considerate of him to lower the music while the baby slept.|宝宝睡觉时，他调低音乐音量，十分体贴。
thoughtful|reflective|adj.|沉思的；若有所思的|He sat thoughtful and silent after reading the letter.|读完信后，他若有所思，静静地坐着。
thoughtful|considerate|adj.|体贴的；关心他人的|The thoughtful host left a light on for the late arrivals.|体贴的主人为晚到的客人留了一盏灯。
apologise|regret|v.|道歉；表示歉意|The organiser apologised to the audience for the delay.|组织者因延误向观众道歉。
apology|regret|n.|道歉；歉意|He sent a written apology for missing the meeting.|他为缺席会议发去书面道歉。
apology|defence|n.|辩护；辩解（正式）|The essay is an apology for preserving difficult works of art.|这篇文章为保留有争议的艺术作品作辩护。
apology|poor-substitute|n.|不像样的替代品；勉强充数的东西|The cold biscuit was a poor apology for a proper breakfast.|那块冷饼干实在算不上一顿像样的早餐。
mercy|compassion|n.|仁慈；宽恕；怜悯|The judge showed mercy because the offender was very young.|法官因违法者年纪很小而从宽处理。
mercy|welcome|n.|幸事；可庆幸之事|It was a mercy that nobody was inside when the roof collapsed.|屋顶坍塌时里面没有人，真是万幸。
mercy|control|n.|任由……摆布；完全受制于（at the mercy of）|Without a working engine, the boat was at the mercy of the current.|发动机失灵后，船完全任凭水流摆布。
sympathy|compassion|n.|同情；慰问|The neighbours expressed sympathy after her father's death.|父亲去世后，邻居们向她表示慰问。
sympathy|support|n.|赞同；支持；好感|The proposal gained sympathy among teachers worried about class sizes.|建议获得了担忧班级规模的教师们的支持。
sympathy|affinity|n.|同感；相互理解；感情上的契合|Their shared interest in music created a natural sympathy between them.|共同的音乐兴趣让他们自然地产生了共鸣。
sympathy|resonance|n.|感应；共振（in sympathy）|The nearby string vibrated in sympathy with the plucked string.|附近的弦随被拨动的弦产生了共振。
robust|healthy|adj.|强健的；健壮的|Despite her age, she remained robust and walked daily.|尽管年事已高，她仍然强健，每天散步。
robust|strong|adj.|坚固的；结实耐用的|The camera has a robust case suitable for fieldwork.|相机有适合野外工作的坚固外壳。
robust|reliable|adj.|稳健的；经得起检验的|The conclusion requires robust evidence from several independent studies.|结论需要几项独立研究提供经得起检验的证据。
robust|flavour|adj.|味道浓郁的；醇厚的|The stew needs a robust red wine rather than a delicate one.|这道炖菜需要浓郁的红葡萄酒，而不是清淡的酒。
temperate|climate|adj.|温带的；温和的（气候）|These trees grow best in temperate regions with regular rainfall.|这些树在降雨规律的温带地区生长最好。
temperate|moderate|adj.|有节制的；适度的；克制的|Her temperate response helped calm the angry meeting.|她克制的回应帮助平息了会上愤怒的气氛。
similarity|resemblance|n.|相似；类似|The similarity between the two songs surprised the musicians.|两首歌之间的相似性让音乐家们惊讶。
similarity|feature|n.|相似之处；共同特征|The study identified several similarities in the islands' ecosystems.|研究发现了两岛生态系统的几处相似之处。
agony|pain|n.|剧痛；极大的身心痛苦|He waited in agony for news of the missing boat.|他在极度煎熬中等待失踪船只的消息。
agony|death|n.|临终的痛苦；垂死挣扎|The novel describes the wounded soldier's final agony.|小说描写了受伤士兵临终的痛苦。
grief|sorrow|n.|悲痛；忧伤|The family needed time to recover from their grief.|这家人需要时间从悲痛中恢复。
grief|trouble|n.|麻烦；烦恼；责难（口语）|The unreliable printer has caused us endless grief.|那台不可靠的打印机给我们带来了无穷的麻烦。
grieve|feel|v.|悲伤；哀悼|She continued to grieve for her closest friend.|她仍在悼念最亲密的朋友。
grieve|cause|v.|使悲伤；使痛心|It grieved him to see the old forest destroyed.|看到古老森林遭到破坏，他十分痛心。
miserable|unhappy|adj.|痛苦的；难过的；悲惨的|He felt miserable after losing contact with his family.|与家人失去联系后，他感到十分痛苦。
miserable|unpleasant|adj.|令人不舒服的；恶劣的|We spent a miserable night in the leaking tent.|我们在漏雨的帐篷里度过了难熬的一夜。
miserable|contemptible|adj.|卑鄙的；可鄙的|The witness called the deliberate deception a miserable trick.|目击者称那场蓄意欺骗是卑鄙的伎俩。
unfortunate|unlucky|adj.|不幸的；倒霉的|An unfortunate injury ended her season early.|一次不幸的受伤使她提前结束了赛季。
unfortunate|unsuitable|adj.|不合适的；令人遗憾的|His unfortunate choice of words offended the guests.|他用词不当，冒犯了客人。
unfortunate|person|n.|不幸的人|The charity offered shelter to unfortunates without a safe place to sleep.|慈善机构为无处安全过夜的不幸者提供庇护。
knife|cut|v.|用刀切割|The artisan knifed the soft clay into thin strips.|工匠用刀把软黏土切成细条。
juice|vitality|n.|活力；精力（口语）|Even after the long rehearsal, the dancers still had plenty of juice.|即使经过长时间排练，舞者们仍精力充沛。
medal|honour|v.|向……授勋；授予奖章|The town medalled the volunteers for their rescue work.|小镇为志愿者的救援工作授予他们奖章。
cock|camera|v.|使相机快门待发|He cocked the shutter before framing the next photograph.|他在构图拍下一张照片前，使快门处于待发状态。
garage|music|n.|车库摇滚；车库舞曲（依音乐语境）|The radio programme traced the influence of UK garage on contemporary dance music.|广播节目追溯了英国车库舞曲对当代舞曲的影响。
visual|visible|adj.|可见的；以可见形式呈现的|The control panel gives a visual warning before the alarm sounds.|警报响起前，控制面板会显示可见的警告。
thoughtful|considered|adj.|深思熟虑的；经过认真考虑的|She gave a thoughtful answer after studying the figures.|她研究数据后给出了经过深思的回答。
robust|forceful|adj.|坚定有力的；强硬的|The mayor offered a robust defence of the housing policy.|市长对住房政策作出了坚定有力的辩护。
grandfather|originator|n.|先驱；始祖；最早的同类事物|The museum calls this machine the grandfather of modern calculators.|博物馆称这台机器是现代计算器的先驱。
grief|cause|n.|令人悲伤的事；不幸；痛苦的根源|The repeated crop failures were a lasting grief to the farming community.|庄稼接连歉收，给当地农民留下了长期的伤痛。`;
for(const line of rows.split('\n')){const [word,id,pos,label,en,zh]=line.split('|');(grouped[word]||=[]).push([id,label,pos,label.split('；'),[word+'-'+id],en,zh]);}
for(const [word,rows]of Object.entries(grouped)){const e=add(word,rows);reviewed[word]=e;e.batch='10';e.reviewDate='2026-11-06';const source='https://www.collinsdictionary.com/dictionary/english/'+(sourceWord[word]||word);e.sources=[source];e.senses.forEach(s=>s.source=source);}

const aliasRows=`endangerment|risk|受到危害
migration|people|移民；移往；迁移
migration|particles|移动
magnificence|splendour|华丽；宏大
calendar|schedule-verb|列入表中
ripener|agent|使成熟的人或物
logo|symbol|商标
alga|organism|藻类；海藻
algae|organisms|海藻
extinguish|hope|使消亡；压制；消灭
infringe|violate|破坏；违反
undermine|weaken|损害
considerable|amount|相当的
massive|heavy|宽大的；大块的
massive|scale|宏伟的
favourable|conditions|有用的；良好的；顺利的
subgroup|division|小群；隶属的小组织；亚群(生物分类)
subgroup|math|子群；族(数)
discernible|perceptible|看得清的；可看出的；辨别得出的；可识别的
distinct|clear|清楚的；显著的
indiscernible|imperceptible|难识别的；看不见的
cataclysmic|disaster|灾变的；政治和社会大变动的
desperate|hopeless|令人绝望的
desperate|eager|极渴望的
overwhelming|majority|无法抵抗的
hopeless|no-hope|无希望的
hopeless|incapable|不可救药的
despair|feeling|失望
cricket|sport|板球
dragon|person|凶暴的人；凶恶的人；凶恶严厉的监护人
cock|bird|雄禽
cock|tap|龙头
cock|raise|使耸立；使竖起
cage|enclosure|笼
cage|confine|关进笼内
barn|unit|靶(恩)(核反应截面单位)
devour|destroy|挥霍；吞没
shepherd|religious|牧师；保护者；看守
shepherd|guide|领导；指导；牧羊
exterminate|destroy|扑灭；消灭；根绝
sheepdog|dog|牧羊狗
ecliptic|path|黄道；黄道的
ecliptic|eclipse|食的
brainstorm|session|集体讨论
olympic|ancient|奥林匹亚的
sprawl|posture|伸开手足躺；懒散地伸开；伸开手足躺卧姿势
sprawl|spread|蔓生；蔓延；使蔓生；使不规则地伸展
glide|smooth|滑动；滑过；使滑动
glide|flight|滑翔
ski|equipment|滑雪橇
hike|walk|步行
hike|increase|涨价；提高；上升；使高涨
hike|pull|拉起
limb|tree|枝干
limb|body|翼
limb|edge|边缘
pedal|lever|脚蹬子
pedal|cycle|用脚踏动；踩踏板；骑车
stool|plant|长新枝
knit|unite|结合
lime|treat|以石灰处理；撒石灰
miner|machine|开矿机
jade|stone|翡翠；玉制的
jade|colour|绿色的
jade|tire|(使)疲倦
unbutton|fastenings|解开...的钮扣；解开钮扣
purse|funds|金钱；募捐款
purse|lips|缩拢；皱起
sock|hit|一击；打击
vest|undershirt|背心
vest|property|归属
bead|drop|滴
bead|decorate|用珠装饰
bead|form|形成珠
bead|ornament|珠
stainless|rustproof|不绣的
refectory|dining|餐厅
foodie|enthusiast|美食家
knife|tool|匕首
spoon|utensil|调羹；匙形工具
spoon|transfer|以匙舀起
saucer|dish|茶托；碟
pancake|food|薄烤饼；烙饼
soda|water|碳酸水
soda|chemical|纯碱；碳酸钠
coffee|drink|咖啡
juice|liquid|汁
juice|body|体液
juice|extract|挤出汁来
turkey|failure|无用的家伙
turkey|country|土耳其
nut|enthusiast|狂热爱好者
chocolate|food|巧克力制的
perfume|scent|香气；(悦人的)气氛
perfume|scent-verb|薰香
hungry|soil|不毛的
furnace|chamber|火炉
erection|building-process|直立；竖起；装配
airtight|sealed|气密的；气密；不透气
expanse|area|宽阔区域；宽阔
pyramid|geometry|角锥
pyramid|arrange|(使)成金字塔状
garage|keep|把车送入修车场
packet|data|信息包；分组；分组报文；数据分组
revolutionary|person|革命党人
revolutionary|innovative|革命性的
checklist|list|清单；名册；目录册
outlook|attitude|看法
outlook|view|风光
spanish|people|西班牙人
latin|peoples|拉丁人；拉丁人的
soviet|council|代表会议
roman|ancient|罗马人；罗马人的；罗马的
russian|person|俄国人
russian|related|俄国的
french|people|法国人
french|related|法式
german|language|德国语的
workaholic|person|工作迷；醉心于工作的人
employer|person|老板
employee|worker|职员；员工；职工
abortion|termination|堕胎；中止
abortion|miscarriage|流产；小产
abortion|failure|夭折
lossless|data|无损的
lossless|energy|无损耗；无耗
cheater|dishonest-person|诈手
bullet|projectile|弹
missile|weapon|飞弹
trench|ditch|渠；沟渠
trench|dig|在...开沟；挖战壕于；用战壕围住
troop|move|群集；结队；成群而行
maritime|shipping|海上的；海员的
monument|memorial|纪念物；石碑
devotion|dedication|投入
cousin|relative|堂兄弟姊妹；表兄弟姊妹；同辈表亲或堂亲
honeymoon|holiday|蜜月假期
honeymoon|travel|渡蜜月
neighbourhood|district|邻接；周围；附近一带；邻近；地区；街道
neighbourhood|people|四邻
neighbourhood|math|邻域
fireman|firefighter|救火队员；消防队员
fireman|stoker|司炉
gardener|person|花匠；园艺家
attorney|agent|代理人
attorney|lawyer|律师
fisherman|person|渔夫
haircut|style|(男子的)发式
forehead|body|额
eyelash|hair|睫
skull|bone|头盖骨；头颅
neck|body|颈
neck|kiss|拥抱
beard|confront|公开反对
liver|organ|肝
stomach|inclination|食欲；欲望
stomach|digest|吃下
chest|body|胸；胸廓
fingerprint|identify|采指纹
skeleton|framework|骨干；概略的；骨干的
skeleton|bones|骨骼的
biorhythm|cycle|生物节奏
dental|teeth|牙的；齿的
dental|sound|齿音字母
asleep|sleep|熟睡地
condom|protection|阴茎套
detriment|harm|损害物；伤害
insane|mental|患精神病的；神经错乱的
insane|foolish|极愚蠢的
corpus|body|(事物的)主体；体
clinic|medical|诊所(门诊部)
hormone|chemical|激素(旧称荷尔蒙)
headache|problem|令人头痛之事
knee|strike|用膝盖碰
mankind|humanity|人类
manly|qualities|象男人的；强壮的；适于男人的
optical|light|光学上的
merry|cheerful|快乐的；嬉戏作乐的
laughter|laughing|大笑
joy|feeling|欢喜；高兴
rejoice|celebrate|充满喜悦
zeal|enthusiasm|热心；热诚
zealous|enthusiastic|热衷的；热情的
gentleman|polite-address|先生
frank|candid|坦白的；率直的；老实的
frank|postage|免费邮寄
frank|mark|免费邮寄特权
hospitable|welcoming|招待周到的
romantic|love|风流的
romantic|art|浪漫派的
considerate|kind|体谅的；考虑周到的
thoughtful|reflective|深思的
apologise|regret|赔不是；为…表示歉意
apology|regret|谢罪
mercy|compassion|慈悲
mercy|welcome|幸运
mercy|control|权宜处置权；决定权
sympathy|compassion|怜悯；吊唁
sympathy|resonance|交感
robust|healthy|健康的
robust|reliable|健壮性
robust|forceful|坚定的
temperate|moderate|温和的
similarity|feature|类似处；类似事例
agony|pain|极大的痛苦
agony|death|挣扎；濒死苦闷
grief|sorrow|伤心；忧愁
grief|cause|不幸；灾难
grieve|feel|悲痛
grieve|cause|使伤心
unfortunate|unlucky|不吉利的
knife|cut|切割；切
juice|vitality|活力
medal|honour|授勋予`;
for(const l of aliasRows.split('\n')){const [word,id,terms]=l.split('|');reviewed[word].senses.find(s=>s.id===id).aliases.push(...terms.split('；'));}
const referenceRows=`logo|连合活字|restricted-verified|logo 源自 logotype；活字合字是排印专业用法，本批单独教授现代徽标义，不把任意合字都作商标。
extinguish|使减色|context-required|比喻中可指使光彩消退；没有比较语境不能理解为给颜色脱色。
outcome|出口|scope-excluded|所核现代条目为结果或推理结论，不是通道出口；出口应依语境用 exit 或 outlet。
massive|整块的|restricted-verified|岩石、矿物构造中有块状而不分层的专门含义；本批一般物体义不认证所有 homogeneous 的语境。
hybridise|混合形成；使融合|context-required|通用的融合需要杂交或混合成新品种、形式的语境，不能等同任意 mixing。
subgroup|族；族周期表；副族(指周期表中B族)|context-required|旧周期表的副族名称依分类制度而定，不能将所有化学元素的族都译为 subgroup。
cataclysmic|洪水的|context-required|cataclysm 可关联灾难性洪水，但此形容词并非所有与洪水有关的事物的通用修饰词。
cock|头目|restricted-verified|少用的领头者比喻限具体语境，不替代一般 leader。
cock|锥形小干草堆；堆成锥形小干草堆|restricted-verified|另一个同形农业词指小干草堆及堆草，较少用农业义保留参考。
cock|大摇大摆地走|context-required|与昂首、翘起姿态有关的旧译，不与一般 walk 互换。
cage|牢房；战俘营|context-required|比喻禁锢场所或特定拘留设施，不指所有监狱或战俘营。
shepherd|牧羊犬|context-required|犬种名可用 shepherd dog 或 German shepherd，不能把任意 shepherd 人称直接当狗。
logogram|标记；简写；速记用略字|context-required|必须是代表词或语素的符号，不等于任意标记或缩写。
olympic|奥林匹斯山的；强有力的；巨大的|scope-excluded|这些常与 Olympian 混淆；所核 Olympic 条目指奥运会和古奥林匹亚，不认证其通用形容用法。
sprawl|爬行|context-required|须有四肢摊开、笨拙移动的姿态，不能把普通 crawling 都教成 sprawl。
glide|流水|scope-excluded|平稳流动可以 glide 描写，但不把流水当该词的通用名词义。
glide|溜走；流逝|context-required|须有平滑、渐变的语境；本批保留滑行核心义，不能泛指所有离开或时间经过。
limb|切断...之手足|restricted-verified|Collins 将此及物动词标为 rare，本批肢体、树枝和视边缘分开教授。
pedal|脚的；脚踏的|restricted-verified|另一个重音不同的形容词指足或踏板；不是所有与脚有关的普通表达都用本批脚踏动词。
stool|厕所|context-required|旧名词可指坐便座，不等同整个 toilet 房间。
stool|引诱；诱捕|restricted-verified|猎鸟诱饵和诱捕的少用动词，须狩猎语境，不泛指一般 lure。
lime|粘鸟胶；粘鸟胶于|restricted-verified|来自 birdlime 的旧狩猎义，现代常用石灰、青柠和椴树另列。
miner|坑道工兵|restricted-verified|军事掘地道者的专门角色，不把普通矿工都认作士兵。
jade|老马|restricted-verified|第二同形词有衰弱老马及贬称人的历史用法，不混入玉石、玉色考点。
purse|囊状物|restricted-verified|特定解剖或形态术语中可比喻小囊，不能等同所有 sac 或 pouch。
sock|鞋垫；给...穿袜|restricted-verified|词典收有鞋内衬与配袜的少用用法；现代常用袜子和重击另列。
sock|猛投；正着地；不偏不倚地；非常成功的|context-required|旧口语、方言及副词结构须实际上下文，不作为普遍的 throwing、exactly 或 successful 同义项。
stocking|马足水肿|scope-excluded|兽医旧译需要独立病理依据，所核一般 stocking 条目不支持把疾病作为通用长袜义。
vest|使穿衣服；穿衣服|restricted-verified|可指给人穿服或穿宗教礼服，较正式而少用，不替代现代通用 dress。
stainless|污染的|scope-excluded|该译与无污、耐污的方向相反，不能作为正确义项。
knife|伤害；戳|context-required|可由持刀袭击引申为背后伤害，但须刀刺或背叛语境，不能泛指所有 harm。
knife|劈开；穿过|context-required|比喻像刀划开须穿过介质或切割的语境，不泛指所有 pass through。
spoon|调情；使成匙状|restricted-verified|旧式亲吻拥抱动词和使凹成匙状的技术动作，保留已查参考，不与舀取混教。
juice|加汁|context-required|juice 的常见及物义为榨出汁，不能无条件将其教为给任何物品加汁。
perfume|美名|context-required|芳香可作美好名声的文学比喻，不作现代通用 reputation 同义词。
hungry|荒年的；欠鞣皮|context-required|匮乏时期或特殊材料术语需要具体语境，不能从饥饿义自动推导成独立通用义。
furnace|考验；在炉中烧|context-required|严酷考验属炉火比喻；所核常用条目主要为名词，不凭名词造通用烧制动词。
expanse|天空|context-required|可以指天空的广阔区域，不是 sky 的无条件同义名词。
pyramid|(使)渐增；(使)上涨|restricted-verified|证券投机中按账面收益追加投入的专门用法，不是所有价格增长的通用动词。
garage|机库|context-required|garage 主要收纳道路车辆，航空机库通常用 hangar，需原具体设施语境。
packet|一批信件；大量|context-required|一批邮件依包装或邮船语境理解，金钱口语 a packet 另列，不泛指所有大量事物。
packet|打包；装进小包|restricted-verified|词典收有较少用及物动词包成小包，本批常用包装名词与数据包另列。
meltdown|销毁(货币等)；变卖(财产)|scope-excluded|熔化与变卖可能来自 melt down 的旧短语语境；现代 meltdown 名词主要为堆芯熔毁及崩溃，不沿用这些无语境旧译。
checklist|(美)选举人名单|context-required|可以核对选举人，但不是所有选民名册的固定名称。
successive|继承的；接续承运人|context-required|本词指相继连续，不等同表示继承权的 hereditary；承运人还需名词 carriers，不能单独作为人称。
soviet|苏联|context-required|形容词 Soviet 可修饰苏联事物；国家专名须 Soviet Union，不将单个 soviet 直接作国名。
indian|印第安人；印第安语；印第安语的|restricted-verified|用于美洲原住民的旧称有地域、社群和历史差异，不把不同语言误称为单一印第安语；常用印度身份另列。
indian|印度群岛的|scope-excluded|与 West Indian、East Indian 等搭配有关，不把任意印度洋或群岛统一叫 Indian。
russia|苏联|context-required|历史叙述有以俄罗斯借代苏联的情况，地理政治实体并不相同，常用国名不互换。
german|同父母的|restricted-verified|如 cousin-german 的亲属构词用法与大写 German 国籍词不同，现代学习中只保留具体搭配参考。
workaholic|为免遭辞退而工作过份卖力的人|scope-excluded|条目描述沉迷工作，不包含害怕被辞退这一特定动机。
employer|业主|context-required|只有业主确实雇人时才是 employer；不能等同所有 owner。
abortion|顿挫|context-required|旧医学或过程终止译法需具体病程；不把普通挫折、语音停顿当成此词。
bullet|距节(马)|scope-excluded|所核现代词条未支持这个马匹部位名，保留待原语境追溯，不作为训练答案。
missile|火箭；可发射的|context-required|有的导弹由火箭推进，但不是所有火箭都为导弹；本批主要词性为名词，不造泛用形容词。
propeller|搅拌叶片|context-required|可以有螺旋桨式搅拌器，但需设备名称与推进结构，不替代所有搅拌叶片。
tomb|死亡|context-required|the tomb 可文学性指死亡状态，不能作为所有 death 的通用同义词。
tomb|埋葬|restricted-verified|词典将入墓动词标 rare，本批常用墓葬名词另列。
surname|别号；绰号；起绰号|restricted-verified|历史上 surname 可指附加描述性名号；现代姓名用法不自动等同 nickname。
surname|呼以姓氏|restricted-verified|词典收有用姓称呼、赋姓动词，少用形式不改变本批核心名词范围。
gender|产生|scope-excluded|旧动词或词源关联不能证明现代 gender 是普通产生、生育的通用动词。
gender|性|context-required|需区分社会身份、语法类别与生物性状，不把宽泛单字当精确的独立译法。
grandfather|始祖；原始资料组|context-required|祖先比喻和数据备份代际命名须具体语境，不是所有 ancestor 或资料组的普通名称。
neighbourhood|邻居关系|context-required|词典有邻里情感的用法，但不等同所有 interpersonal relationship；居民群体和地区另列。
veterinary|兽医|context-required|本批为形容词，指人通常用 veterinarian 或 vet，不把修饰词无条件当职业名词。
forehead|前部|context-required|比喻前面须有头额形象，不能用 forehead 代替任意物体的 front。
skull|头脑；好学生|context-required|头脑为转喻；好学生的旧俚语不作现代通用 learner 义项。
neck|收缩；割颈|restricted-verified|技术缩颈或特定屠宰动作需要领域语境，本批不教成一般 shrink、cut 的同义词。
beard|抓住胡须|restricted-verified|词典收有拉住胡须的字面动词，少用而不等同大胆反对的现代文学义。
throat|嗓音；用喉音说；开沟于|context-required|嗓子转喻和少见喉形动词需原文；不能替代所有 voice、speak 或 ditch。
liver|生活者；居民|restricted-verified|另一个由 live 构成的人称名词如 high liver，不能把孤立 liver 当普通 resident。
fist|手；拳打；握成拳；紧握|restricted-verified|手的俚称及击打、抓握等少用动词保留参考，常用手部名词为拳头。
chest|衣柜|context-required|chest 是储物箱；chest of drawers 可作抽屉柜，不等同任意 wardrobe。
skeleton|骨瘦如柴的人；残骸|context-required|可借骨架比喻瘦弱的人或残余框架；不教作任意残骸的通用名称。
skeleton|基层的|scope-excluded|最低配置或骨架结构不等于组织基层，不能与 grass-roots 混同。
visual|视觉性记忆优势者|restricted-verified|少见心理分类名词需要该分类语境，不是所有视觉学习者的日常固定称呼。
aural|气氛的；气味的；光环的；先兆的|context-required|可能来自 aura 的另一个同形派生，不应混入听觉形容词；须医学、文学或气场原文语境。
asleep|长眠的|restricted-verified|死亡委婉语仅限相应语境，不与普通睡眠作无提示互换。
snore|打鼾度过|context-required|snore away 等结构可表示打鼾中度过，不等同不带时间对象的额外常用义。
pregnancy|丰富；多产；意义深长|scope-excluded|这些来自 pregnant 的少见比喻形容意义，不把孤立名词 pregnancy 直接认证为所有丰富或意味深长。
clinic|临床教学；临床(讲解)；临床(学)科|restricted-verified|词典有旧式床旁教学或美式临床讲座义，本批现代诊所和指导课另列，不泛指所有临床学科。
knee|膝行|scope-excluded|膝行通常用 kneel、crawl on one's knees 等，所核常用 knee 动词主要为用膝顶撞。
mankind|男性|restricted-verified|词典另收与 womankind 对举的男性整体义；现代通用人类义宜用包容性的 humankind，不默认排除女性。
joy|使快乐；令人高兴|restricted-verified|Collins 将及物使快乐标 obsolete；常用名词乐事、喜悦另列。
rejoice|使欢欣|restricted-verified|较旧的及物用法已查明；本批常用自行欢庆、感到欣喜另列。
satisfaction|快事|context-required|满足来源可如此译，但不等同所有令人快乐的事件，常用满足感另列。
satisfaction|赎罪；赎回|restricted-verified|宗教补赎的专门义已查，不能当普通民事补偿的近义项。
satisfaction|报仇的机会；偿还|context-required|旧决斗、补偿或履行义要有具体语境，不等同任何 revenge 或还款。
romantic|传奇性的；夸大的|context-required|可与浪漫故事、想象性叙述有关，不能当任何 legend 或 exaggerated 的自由同义词。
apology|辩解者|scope-excluded|apology 是道歉或辩护的内容，不指进行辩解的人 apologist。
robust|要用力气的；粗野的|restricted-verified|词典收有需体力的活动或粗放的行为，依具体对象成立，不混成身体强健的同义标签。`;
for(const l of referenceRows.split('\n')){const [word,terms,decision,reason]=l.split('|');reviewed[word].referenceOnly.push({terms:terms.split('；'),decision,reason,source:reviewed[word].sources[0]});}
const constructions={
infringe:{rights:'infringe on/upon'},despair:{'lose-hope':'despair of'},hopeless:{incapable:'hopeless at'},desperate:{eager:'desperate for / desperate to',serious:'in desperate need of'},hike:{pull:'hike up'},purse:{lips:'purse one\'s lips'},knit:{brows:'knit one\'s brows'},vest:{authority:'vest power in / vest with authority',property:'vest in'},hungry:{eager:'hungry for'},spanish:{people:'the Spanish'},french:{people:'the French'},grandfather:{exemption:'grandfather in'},troop:{soldiers:'troops'},neighbourhood:{approximation:'in the neighbourhood of'},stomach:{inclination:'have no stomach for'},mercy:{control:'at the mercy of'},sympathy:{resonance:'in sympathy with'},detriment:{harm:'to the detriment of / a detriment to'},joy:{success:'have no joy'},apology:{'poor-substitute':'a poor apology for'},grieve:{feel:'grieve for / grieve over'},soviet:{related:'Soviet + noun'},erection:{physiology:'an erection'}
};
for(const [w,items]of Object.entries(constructions))for(const [id,c]of Object.entries(items))reviewed[w].senses.find(s=>s.id===id).construction=c;
const shared={
'undermine.weaken':['gradual-weakening'],'undermine.support':['physical-erosion'],
'distinct.separate':['difference-distinction','another-not-same'],
'limb.tree':['tree-branch'],'saucer.dish':['shallow-food-container'],
'juice.vitality':['personal-vigour'],'juice.power':['physical-energy'],
'sympathy.compassion':['considerate-of-feelings'],'sympathy.support':['supportive-agreement'],'sympathy.resonance':['sympathetic-resonance'],
'thoughtful.considerate':['considerate-of-feelings','kind-considerate'],'considerate.kind':['considerate-of-feelings','kind-considerate'],
'attorney.lawyer':['legal-professional'],'lawyer.profession':['legal-professional'],
'endangerment.risk':['endanger-safety'],
'hopeless.no-hope':['absence-of-hope'],'desperate.hopeless':['absence-of-hope'],'despair.feeling':['absence-of-hope'],
'alga.organism':['algae-organism'],'algae.organisms':['algae-organism'],
'rejoice.celebrate':['joy-happiness'],'joy.feeling':['joy-happiness'],'merry.cheerful':['joy-happiness'],
'grieve.feel':['deep-sorrow'],'grief.sorrow':['deep-sorrow'],'miserable.unhappy':['deep-sorrow'],
'shepherd.person':['tend-sheep-person'],'sheepdog.dog':['shepherd-dog'],
'bead.drop':['small-liquid-drop'],
'optical.vision':['relating-to-sight'],'visual.sight':['relating-to-sight'],
'calender.schedule':['activity-schedule'],
'neighbourhood.district':['local-area'],'subgroup.division':['subdivision']
};
delete shared['calender.schedule'];shared['calendar.schedule']=['activity-schedule'];
for(const [k,concepts]of Object.entries(shared)){const [w,id]=k.split('.');reviewed[w].senses.find(s=>s.id===id).concepts.push(...concepts);}
// Alga/algae are independently listed public word keys, but never distract each other.
// Nationality/language names retain lowercase catalog keys; examples use normal capitals.
reviewed.logo.scope='现代标志、徽标学习义；专业排印同形义保留参考';
reviewed.insane.senses.find(s=>s.id==='mental').construction='historical label; potentially offensive';
reviewed.asleep.senses.find(s=>s.id==='inactive').example={en:'The old volcano had been asleep for centuries.',zh:'这座古老的火山已休眠了几个世纪。',reviewed:true,origin:'original-wordorbit'};


for(const e of Object.values(reviewed))e.sources=[...new Set([...e.sources,...e.senses.map(s=>s.source),...e.referenceOnly.map(r=>r.source).filter(Boolean)])];
}if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch10=register;
})(typeof window==='object'?window:globalThis);
