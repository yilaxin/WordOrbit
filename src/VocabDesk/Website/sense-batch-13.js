/* Batch 13: reviewed public learning scope, original bilingual examples.
 * Source entries were read during review. No learner state is included. */
(function(scope){
 'use strict';
 function register(add){
  function entry(word,rows,refs){
   const e=add(word,rows,refs);e.reviewDate='2026-11-09';
   e.senses.forEach((s,i)=>s.source=rows[i][8]);
   e.sources=[...new Set([...rows.map(r=>r[8]),...refs.map(r=>r.source)])];
   return e;
  }
  entry("flower",[
   ["bloom","花；花朵","n.",["花","花朵"],["flower-bloom"],"The first flowers opened beside the gate.","大门旁的第一批花开了。",null,"https://www.merriam-webster.com/dictionary/flower"],
   ["plant","开花植物","n.",["开花植物"],["flower-plant"],"She planted flowers along the path.","她沿着小路种了开花植物。",null,"https://www.merriam-webster.com/dictionary/flower"],
   ["bloom-verb","开花","v.",["开花"],["flower-bloom-verb"],"These trees flower in early spring.","这些树在早春开花。",null,"https://www.merriam-webster.com/dictionary/flower"]
  ],[{"terms":["精华","盛时","发育","旺盛","成熟","用花装饰","使开花"],"decision":"scope-excluded","reason":"花的比喻义、生长阶段和装饰用法不在本批花朵及开花的教学范围。","source":"https://www.merriam-webster.com/dictionary/flower"}]);
  entry("fire",[
   ["flames","火；火灾","n.",["火","火灾","着火","烧火"],["fire-flames"],"The fire spread through the dry grass.","大火蔓延过干草地。",null,"https://www.merriam-webster.com/dictionary/fire"],
   ["shooting","射击；炮火","n.",["射击","炮火"],["fire-shooting"],"The soldiers came under heavy fire.","士兵们遭到了猛烈炮火袭击。",null,"https://www.merriam-webster.com/dictionary/fire"],
   ["passion","热情；激情","n.",["热情","激情"],["fire-passion"],"Her speech was full of fire.","她的演讲充满激情。",null,"https://www.merriam-webster.com/dictionary/fire"],
   ["shoot","开枪；发射","v.",["开枪","发射","放枪"],["fire-shoot"],"The guard fired a warning shot.","警卫鸣枪示警。",null,"https://www.merriam-webster.com/dictionary/fire"],
   ["dismiss","解雇","v.",["解雇"],["fire-dismiss"],"The company fired him for stealing equipment.","公司因他偷窃设备而解雇了他。",null,"https://www.merriam-webster.com/dictionary/fire"],
   ["ignite","点燃；使燃烧","v.",["点燃","使燃烧"],["fire-ignite"],"A spark fired the dry leaves.","一颗火星点燃了干树叶。",null,"https://www.merriam-webster.com/dictionary/fire"],
   ["inspire","激起；使充满热情","v.",["激起","使充满热情","激动"],["fire-inspire"],"The discovery fired her imagination.","这一发现激发了她的想象力。",null,"https://www.merriam-webster.com/dictionary/fire"],
   ["kiln","烧制","v.",["烧制"],["fire-kiln"],"The bowls are fired at a high temperature.","这些碗经过高温烧制。",null,"https://www.merriam-webster.com/dictionary/fire"],
   ["heater","取暖器；炉火","n.",["取暖器","炉火"],["fire-heater"],"She sat beside the electric fire with a book.","她拿着一本书坐在电暖炉旁。",null,"https://www.merriam-webster.com/dictionary/fire"]
  ],[{"terms":["电炉","闪光体","使发光"],"decision":"scope-excluded","reason":"电炉对应取暖器；发光及闪光体旧译不作为火、射击或解雇的同义答案。","source":"https://www.merriam-webster.com/dictionary/fire"}]);
  entry("skin",[
   ["body","皮肤","n.",["皮肤"],["skin-body"],"The cold air made my skin feel dry.","冷空气让我的皮肤感到干燥。",null,"https://www.merriam-webster.com/dictionary/skin"],
   ["covering","外皮；皮","n.",["外皮","皮"],["skin-covering"],"Leave the potato skins on for roasting.","烤土豆时保留外皮。",null,"https://www.merriam-webster.com/dictionary/skin"],
   ["remove","剥皮","v.",["剥皮"],["skin-remove"],"He skinned the fish before cooking it.","他在烹饪前剥去了鱼皮。",null,"https://www.merriam-webster.com/dictionary/skin"],
   ["scrape","擦破皮肤","v.",["擦破皮肤"],["skin-scrape"],"I skinned my knee on the rough pavement.","我在粗糙的路面上擦破了膝盖。",null,"https://www.merriam-webster.com/dictionary/skin"]
  ],[{"terms":["在...植皮","长皮","愈合","蜕皮"],"decision":"scope-excluded","reason":"植皮、伤口结皮及蜕皮涉及医疗或生物过程，本批不把它们等同于剥皮。","source":"https://www.merriam-webster.com/dictionary/skin"}]);
  entry("bear",[
   ["animal","熊","n.",["熊"],["bear-animal"],"A bear emerged from the forest.","一只熊从森林里走了出来。",null,"https://www.merriam-webster.com/dictionary/bear"],
   ["tolerate","忍受；承受","v.",["忍受","承受"],["bear-tolerate","tolerate-put-up-with","endurance-bear","tolerance-endure"],"I cannot bear the noise any longer.","我再也受不了这噪声了。",null,"https://www.merriam-webster.com/dictionary/bear"],
   ["carry","携带；承载","v.",["携带","承载","支承"],["bear-carry","carry-load","physical-support"],"The bridge can bear the weight of several trucks.","这座桥能承受几辆卡车的重量。",null,"https://www.merriam-webster.com/dictionary/bear"],
   ["have","带有；具有","v.",["带有","具有","怀有"],["bear-have"],"Every bottle bears the maker's name.","每个瓶子上都标有制造商的名字。",null,"https://www.merriam-webster.com/dictionary/bear"],
   ["birth","生育","v.",["生育"],["bear-birth"],"She bore three children during those years.","那些年她生了三个孩子。",null,"https://www.merriam-webster.com/dictionary/bear"],
   ["yield","结果实；产生","v.",["结果实","产生"],["bear-yield"],"The young tree has begun to bear fruit.","这棵小树已经开始结果了。",null,"https://www.merriam-webster.com/dictionary/bear"],
   ["turn","转向","v.",["转向","行进"],["bear-turn"],"Bear left when you reach the fork.","到岔路口时向左转。",null,"https://www.merriam-webster.com/dictionary/bear"]
  ],[{"terms":["通过卖空使跌价","压挤"],"decision":"scope-excluded","reason":"金融卖空与压挤未列为本批日常承受、携带等义项。","source":"https://www.merriam-webster.com/dictionary/bear"}]);
  entry("hedge",[
   ["plants","树篱","n.",["树篱"],["hedge-plants"],"A thick hedge separates the two gardens.","一道茂密的树篱隔开了两个花园。",null,"https://www.merriam-webster.com/dictionary/hedge"],
   ["limit","回避明确表态","v.",["回避明确表态","躲闪"],["hedge-limit"],"She hedged when asked about the cost.","被问及费用时，她含糊其词。",null,"https://www.merriam-webster.com/dictionary/hedge"],
   ["protect","对冲；规避风险","v.",["对冲","规避风险","套头交易","套期保值","两面下注以防...的损失","两面下注以防损失"],["hedge-protect"],"Farmers hedge against falling prices by selling futures.","农民通过卖出期货来规避价格下跌风险。","hedge against","https://www.merriam-webster.com/dictionary/hedge"],
   ["enclose","用树篱围住","v.",["用树篱围住"],["hedge-enclose"],"They hedged the orchard to keep the sheep out.","他们用树篱围住果园，防止羊进去。",null,"https://www.merriam-webster.com/dictionary/hedge"]
  ],[{"terms":["障碍","用树篱围","妨碍","筑树篱","树篱的","偷偷摸摸的"],"decision":"scope-excluded","reason":"围篱动作已收录；障碍、形容词性和偷偷摸摸的等旧译不并入回避表态或风险对冲。","source":"https://www.merriam-webster.com/dictionary/hedge"}]);
  entry("rat",[
   ["animal","老鼠；大鼠","n.",["老鼠","大鼠","鼠"],["rat-animal"],"A rat slipped beneath the warehouse door.","一只大鼠钻进了仓库门底。",null,"https://www.merriam-webster.com/dictionary/rat"],
   ["betrayer","卑鄙的人；告密者","n.",["卑鄙的人","告密者","变节者"],["rat-betrayer"],"He called his former partner a rat for betraying him.","他把背叛自己的前搭档骂作卑鄙小人。",null,"https://www.merriam-webster.com/dictionary/rat"],
   ["inform","告密；出卖","v.",["告密","出卖","变节"],["rat-inform"],"Someone ratted on the gang to the police.","有人向警方告发了这个团伙。","rat on","https://www.merriam-webster.com/dictionary/rat"]
  ],[{"terms":["破坏者","捕鼠","弄蓬松"],"decision":"scope-excluded","reason":"捕鼠与理发蓬松义不属本批动物及告密范围；破坏者不能直接替代告密者。","source":"https://www.merriam-webster.com/dictionary/rat"}]);
  entry("seal",[
   ["animal","海豹","n.",["海豹"],["seal-animal"],"A seal rested on the rocks.","一只海豹趴在岩石上休息。",null,"https://www.merriam-webster.com/dictionary/seal"],
   ["closure","密封物；封条","n.",["密封物","封条","火漆","封蜡"],["seal-closure"],"Check that the seal on the jar is intact.","检查罐子的密封是否完好。",null,"https://www.merriam-webster.com/dictionary/seal"],
   ["stamp","印章；印记","n.",["印章","印记","玺"],["seal-stamp"],"The document carries the university's seal.","这份文件盖有大学的印章。",null,"https://www.merriam-webster.com/dictionary/seal"],
   ["close","密封；封闭","v.",["密封","封闭"],["seal-close"],"Seal the envelope before posting it.","寄信前把信封封好。",null,"https://www.merriam-webster.com/dictionary/seal"],
   ["confirm","确定；使成定局","v.",["确定","使成定局","保证","批准"],["seal-confirm"],"Her final goal sealed the team's victory.","她最后的进球锁定了球队的胜利。",null,"https://www.merriam-webster.com/dictionary/seal"],
   ["stamp-verb","盖章；盖印","v.",["盖章","盖印","盖印","盖章"],["seal-stamp-verb"],"The official sealed the certificate with a red stamp.","官员在证书上盖了红章。",null,"https://www.merriam-webster.com/dictionary/seal"]
  ],[{"terms":["海豹皮","象征","标志","猎海豹"],"decision":"scope-excluded","reason":"海豹皮、捕猎及象征性引申未列入本批，印章与盖章已分别收录。","source":"https://www.merriam-webster.com/dictionary/seal"}]);
  entry("tail",[
   ["animal","尾巴","n.",["尾巴"],["tail-animal"],"The dog wagged its tail at the door.","那条狗在门口摇尾巴。",null,"https://www.merriam-webster.com/dictionary/tail"],
   ["rear","尾部；末端","n.",["尾部","末端","后部","尾部的","后部的"],["tail-rear"],"The tail of the aircraft was badly damaged.","飞机尾部严重受损。",null,"https://www.merriam-webster.com/dictionary/tail"],
   ["follow","跟踪；尾随","v.",["跟踪","尾随","监视"],["tail-follow","follow-person"],"A detective tailed the suspect across town.","一名侦探尾随嫌疑人穿过市区。",null,"https://www.merriam-webster.com/dictionary/tail"],
   ["diminish","逐渐减少","v.",["逐渐减少"],["tail-diminish"],"Orders tailed off after the holidays.","假期过后订单逐渐减少。","tail off","https://www.merriam-webster.com/dictionary/tail"]
  ],[{"terms":["辫子","随员","特务","燕尾服","踪迹","限定继承(权)","在后面的","从后面而来的","限定继承的","为...装尾","附于其后","使搭牢","船尾搁浅"],"decision":"scope-excluded","reason":"限定继承是法律术语；服装、随员、船尾及附接旧义不并入动物尾巴或跟踪。","source":"https://www.merriam-webster.com/dictionary/tail"}]);
  entry("stable",[
   ["steady","稳定的；平稳的","adj.",["稳定的","平稳的","安定的","坚固的"],["stable-steady","steady-stable"],"Her condition remained stable overnight.","她的病情一夜间保持稳定。",null,"https://www.merriam-webster.com/dictionary/stable"],
   ["reliable","稳重的；情绪稳定的","adj.",["稳重的","情绪稳定的","坚定的"],["stable-reliable"],"The children need a stable adult in their lives.","孩子们的生活中需要一位情绪稳定的成年人。",null,"https://www.merriam-webster.com/dictionary/stable"],
   ["horses","马厩","n.",["马厩","马房"],["stable-horses"],"The horses returned to the stable before dark.","天黑前马匹回到了马厩。",null,"https://www.merriam-webster.com/dictionary/stable"],
   ["keep","把马养在马厩","v.",["把马养在马厩","赶入马房","被关在马厩"],["stable-keep"],"They stable their horses near the river.","他们把马养在河边的马厩里。",null,"https://www.merriam-webster.com/dictionary/stable"]
  ],[{"terms":["牛棚"],"decision":"scope-excluded","reason":"本批收录马厩，不把牛棚作为所有动物畜舍的通称。","source":"https://www.merriam-webster.com/dictionary/stable"}]);
  entry("bar",[
   ["rod","条；棒","n.",["条","棒","栅"],["bar-rod"],"An iron bar held the gate shut.","一根铁棒把大门卡住了。",null,"https://www.merriam-webster.com/dictionary/bar"],
   ["pub","酒吧；酒吧柜台","n.",["酒吧","酒吧柜台"],["bar-pub"],"We met at a small bar near the station.","我们在车站附近的一家小酒吧见了面。",null,"https://www.merriam-webster.com/dictionary/bar"],
   ["barrier","障碍","n.",["障碍","障碍物","妨碍"],["bar-barrier"],"Lack of money was a bar to further study.","缺钱成了继续学习的障碍。",null,"https://www.merriam-webster.com/dictionary/bar"],
   ["legal","律师界","n.",["律师界"],["bar-legal"],"She was admitted to the bar last year.","她去年取得了律师执业资格。",null,"https://www.merriam-webster.com/dictionary/bar"],
   ["music","小节","n.",["小节"],["bar-music"],"The drummer counted four bars before joining in.","鼓手数了四小节后加入了演奏。",null,"https://www.merriam-webster.com/dictionary/bar"],
   ["block","阻挡；封锁","v.",["阻挡","封锁"],["bar-block"],"A fallen tree barred the road.","一棵倒下的树挡住了道路。",null,"https://www.merriam-webster.com/dictionary/bar"],
   ["ban","禁止；不准进入","v.",["禁止","不准进入"],["bar-ban"],"Visitors are barred from the laboratory.","访客不得进入实验室。","bar from","https://www.merriam-webster.com/dictionary/bar"],
   ["pressure","巴（压强单位）","n.",["巴（压强单位）"],["bar-pressure"],"The gauge showed a pressure of two bars.","压力表显示压力为两巴。",null,"https://www.merriam-webster.com/dictionary/bar"]
  ],[{"terms":["棒形图"],"decision":"scope-excluded","reason":"棒形图需 bar chart 搭配，本批杆棒义不代替整条术语。","source":"https://www.merriam-webster.com/dictionary/bar"}]);
  entry("list",[
   ["items","清单；名单","n.",["清单","名单","目录","明细表","列表"],["list-items"],"Put flour on the shopping list.","把面粉加进购物清单。",null,"https://www.merriam-webster.com/dictionary/list"],
   ["enumerate","列出；列举","v.",["列出","列举","列于表上","记入名单内"],["list-enumerate"],"The report lists three possible causes.","报告列出了三个可能的原因。",null,"https://www.merriam-webster.com/dictionary/list"],
   ["tilt","倾斜","v.",["倾斜"],["list-tilt"],"The damaged boat began to list to port.","受损的船开始向左舷倾斜。",null,"https://www.merriam-webster.com/dictionary/list"]
  ],[{"terms":["布条","条纹","序列","数据清单","装布条"],"decision":"scope-excluded","reason":"布条是另一组较少见用法；计算机序列和数据清单依语境解释，不把任意序列等同于清单。","source":"https://www.merriam-webster.com/dictionary/list"}]);
  entry("straight",[
   ["linear","直的；笔直的","adj.",["直的","笔直的","直"],["straight-linear"],"Draw a straight line between the points.","在这些点之间画一条直线。",null,"https://www.merriam-webster.com/dictionary/straight"],
   ["direct","直接的；坦率的","adj.",["直接的","坦率的","正直的"],["straight-direct"],"Please give me a straight answer.","请给我一个坦率的回答。",null,"https://www.merriam-webster.com/dictionary/straight"],
   ["consecutive","连续的","adj.",["连续的","不断地"],["straight-consecutive"],"The team won five straight games.","这支球队连赢五场比赛。",null,"https://www.merriam-webster.com/dictionary/straight"],
   ["forward","径直；直接","adv.",["径直","直接","直接地","立即"],["straight-forward"],"Go straight to the reception desk.","直接去接待处。",null,"https://www.merriam-webster.com/dictionary/straight"],
   ["correct","有条理的；正确的","adj.",["有条理的","正确的"],["straight-correct"],"Let me get the dates straight first.","让我先把日期理清楚。",null,"https://www.merriam-webster.com/dictionary/straight"]
  ],[{"terms":["直线","整齐的"],"decision":"scope-excluded","reason":"名词直线与整齐的泛译不另立常用义；本批保留直的和理清事实等用法。","source":"https://www.merriam-webster.com/dictionary/straight"}]);
  entry("round",[
   ["shape","圆的","adj.",["圆的","圆"],["round-shape"],"A round mirror hangs above the sink.","洗手池上方挂着一面圆镜。",null,"https://www.merriam-webster.com/dictionary/round"],
   ["approximate","整数的；约略的","adj.",["整数的","约略的","大概的"],["round-approximate"],"Give me a round number for the total cost.","给我一个总费用的大致整数。",null,"https://www.merriam-webster.com/dictionary/round"],
   ["around","围绕；绕着","prep.",["围绕","绕着","围着","在...周围","围绕着","在周围"],["round-around"],"We walked round the lake before lunch.","午饭前我们绕湖走了一圈。",null,"https://www.merriam-webster.com/dictionary/round"],
   ["stage","一轮；一个回合","n.",["一轮","一个回合","一回合","一局"],["round-stage"],"She reached the final round of interviews.","她进入了最后一轮面试。",null,"https://www.merriam-webster.com/dictionary/round"],
   ["visits","巡回；例行巡视","n.",["巡回","例行巡视"],["round-visits"],"The doctor began her morning rounds.","医生开始了早晨的查房。",null,"https://www.merriam-webster.com/dictionary/round"],
   ["drinks","一巡饮料","n.",["一巡饮料"],["round-drinks"],"He bought a round of drinks for the group.","他给大家每人买了一杯饮料。",null,"https://www.merriam-webster.com/dictionary/round"],
   ["ammunition","一发子弹","n.",["一发子弹"],["round-ammunition"],"Only two rounds remained in the magazine.","弹匣里只剩两发子弹。",null,"https://www.merriam-webster.com/dictionary/round"],
   ["curve","绕过","v.",["绕过","绕行","环行","拐弯"],["round-curve"],"The boat rounded the headland at dawn.","小船在黎明时绕过了海岬。",null,"https://www.merriam-webster.com/dictionary/round"],
   ["round-number","把数字四舍五入","v.",["把数字四舍五入","把...四舍五入"],["round-round-number"],"Round the answer to two decimal places.","把答案四舍五入到小数点后两位。",null,"https://www.merriam-webster.com/dictionary/round"],
   ["make-round","使成圆形；弄圆","v.",["使成圆形","弄圆"],["round-make-round"],"The carpenter rounded the sharp corners of the table.","木匠把桌子的尖角磨圆了。",null,"https://www.merriam-webster.com/dictionary/round"]
  ],[{"terms":["圆形物","循环","范围","轮唱","球形的","丰满的","肥胖的","完全的","完美的","圆润的","附近","迂回地","挨个","朝反方向","完成","围捕","变圆","发胖","进展"],"decision":"scope-excluded","reason":"轮唱、围捕及完成需特定语境；丰满、圆润及完全等引申未纳入本批常用结构。","source":"https://www.merriam-webster.com/dictionary/round"}]);
  entry("rate",[
   ["speed","速率；速度","n.",["速率","速度"],["rate-speed"],"Ice is melting at an alarming rate.","冰正在以惊人的速度融化。",null,"https://www.merriam-webster.com/dictionary/rate"],
   ["price","费率；价格","n.",["费率","价格","费用"],["rate-price"],"The hotel offers a lower weekly rate.","这家旅馆提供较低的周租价格。",null,"https://www.merriam-webster.com/dictionary/rate"],
   ["proportion","比率","n.",["比率"],["rate-proportion"],"The city has a low unemployment rate.","这座城市的失业率很低。",null,"https://www.merriam-webster.com/dictionary/rate"],
   ["judge","评价；评定等级","v.",["评价","评定等级","估价","认为","鉴定等级","被评价"],["rate-judge"],"Guests rated the service as excellent.","客人们对服务给出了优秀评价。",null,"https://www.merriam-webster.com/dictionary/rate"]
  ],[{"terms":["率","等级","责骂"],"decision":"scope-excluded","reason":"比率已收录；等级只作评等级相关参考，责骂不在本批评价义范围。","source":"https://www.merriam-webster.com/dictionary/rate"}]);
  entry("scale",[
   ["extent","规模；程度","n.",["规模","程度"],["scale-extent"],"We underestimated the scale of the damage.","我们低估了损失的规模。",null,"https://www.merriam-webster.com/dictionary/scale"],
   ["ratio","比例尺；比例","n.",["比例尺","比例"],["scale-ratio"],"The map has a scale of one to fifty thousand.","这幅地图的比例尺是五万分之一。",null,"https://www.merriam-webster.com/dictionary/scale"],
   ["graduation","刻度；量表","n.",["刻度","量表","数值范围"],["scale-graduation"],"The thermometer has a Celsius scale.","这支温度计使用摄氏刻度。",null,"https://www.merriam-webster.com/dictionary/scale"],
   ["weigher","秤","n.",["秤","天平"],["scale-weigher"],"Place the parcel on the scale.","把包裹放到秤上。",null,"https://www.merriam-webster.com/dictionary/scale"],
   ["fish","鳞片","n.",["鳞片","鳞"],["scale-fish"],"The fish had bright silver scales.","这条鱼长着亮银色的鳞片。",null,"https://www.merriam-webster.com/dictionary/scale"],
   ["music","音阶","n.",["音阶"],["scale-music"],"She practised a scale on the piano.","她在钢琴上练习了一个音阶。",null,"https://www.merriam-webster.com/dictionary/scale"],
   ["deposit","水垢","n.",["水垢","积垢"],["scale-deposit"],"Hard water leaves scale inside the kettle.","硬水会在水壶内留下水垢。",null,"https://www.merriam-webster.com/dictionary/scale"],
   ["climb","攀登","v.",["攀登"],["scale-climb"],"The climbers scaled the icy cliff.","登山者攀上了结冰的悬崖。",null,"https://www.merriam-webster.com/dictionary/scale"],
   ["resize","按比例调整","v.",["按比例调整","依比例决定"],["scale-resize"],"Scale the drawing down to fit the page.","按比例缩小图画，使其适合页面。","scale down","https://www.merriam-webster.com/dictionary/scale"],
   ["remove","去除鳞片","v.",["去除鳞片","刮鳞"],["scale-remove"],"Scale the fish before washing it.","先刮去鱼鳞，再清洗鱼。",null,"https://www.merriam-webster.com/dictionary/scale"]
  ],[{"terms":["衡量","等级","测量","绘制","使生垢","过秤","剥落","生水垢","重量为"],"decision":"scope-excluded","reason":"本批明确区分量表与秤；称重、剥落及生垢等动作不从相关名词自动推导。","source":"https://www.merriam-webster.com/dictionary/scale"}]);
  entry("survey",[
   ["examine","调查；考察","v.",["调查","考察","视察"],["survey-examine"],"Researchers surveyed two hundred households.","研究人员调查了两百户家庭。",null,"https://www.merriam-webster.com/dictionary/survey"],
   ["view","审视；环顾","v.",["审视","环顾","纵览","俯瞰","通盘考虑"],["survey-view"],"She surveyed the room before choosing a seat.","她环顾房间后选了一个座位。",null,"https://www.merriam-webster.com/dictionary/survey"],
   ["measure","测量；勘测","v.",["测量","勘测","测量土地"],["survey-measure"],"Engineers surveyed the site for a new bridge.","工程师们为新桥勘测了现场。",null,"https://www.merriam-webster.com/dictionary/survey"],
   ["study","调查报告；调查","n.",["调查报告","调查"],["survey-study"],"The survey revealed a shortage of nurses.","调查显示护士短缺。",null,"https://www.merriam-webster.com/dictionary/survey"],
   ["overview","概述；概论","n.",["概述","概论"],["survey-overview"],"The course offers a survey of European art.","这门课概述了欧洲艺术。",null,"https://www.merriam-webster.com/dictionary/survey"]
  ],[]);
  entry("theory",[
   ["explanation","理论；学说","n.",["理论","学说"],["theory-explanation"],"The experiment supported her theory of learning.","这个实验支持了她的学习理论。",null,"https://www.merriam-webster.com/dictionary/theory"],
   ["speculation","推测；看法","n.",["推测","看法","意见"],["theory-speculation"],"My theory is that the key fell behind the desk.","我的推测是钥匙掉到了书桌后面。",null,"https://www.merriam-webster.com/dictionary/theory"],
   ["principles","理论知识","n.",["理论知识","原理"],["theory-principles"],"Students learn music theory alongside performance.","学生在学习演奏的同时学习乐理。",null,"https://www.merriam-webster.com/dictionary/theory"]
  ],[]);
  entry("pump",[
   ["machine","泵；抽水机","n.",["泵","抽水机","打气筒"],["pump-machine"],"The pump draws water from the well.","这台泵从井里抽水。",null,"https://www.merriam-webster.com/dictionary/pump"],
   ["move-fluid","抽送；泵入","v.",["抽送","泵入","抽吸","用唧筒抽水","打气","抽水"],["pump-move-fluid"],"They pumped water out of the flooded cellar.","他们把积水从地窖里抽了出去。",null,"https://www.merriam-webster.com/dictionary/pump"],
   ["move","上下运动","v.",["上下运动","上下(或往复)运动"],["pump-move"],"Her legs pumped as she cycled uphill.","她骑车上坡时双腿不断蹬动。",null,"https://www.merriam-webster.com/dictionary/pump"],
   ["shoe","浅口女鞋","n.",["浅口女鞋"],["pump-shoe"],"She changed into black pumps for the meeting.","她换上黑色浅口女鞋去开会。",null,"https://www.merriam-webster.com/dictionary/pump"]
  ],[{"terms":["盘问","倾注","使疲惫"],"decision":"scope-excluded","reason":"盘问和耗尽等比喻未进入本批；抽送不能与盘问互换。","source":"https://www.merriam-webster.com/dictionary/pump"}]);
  entry("generate",[
   ["produce","产生；生成","v.",["产生","生成","发生"],["generate-produce"],"The panels generate electricity from sunlight.","这些面板利用阳光发电。",null,"https://www.merriam-webster.com/dictionary/generate"],
   ["cause","引起","v.",["引起","导致"],["generate-cause"],"The proposal generated considerable debate.","这项提案引发了广泛争论。",null,"https://www.merriam-webster.com/dictionary/generate"]
  ],[]);
  entry("guard",[
   ["person","警卫；看守","n.",["警卫","看守","守卫者","护卫队"],["guard-person"],"A guard checked our passes at the entrance.","一名警卫在入口处检查了我们的通行证。",null,"https://www.merriam-webster.com/dictionary/guard"],
   ["protection","防护装置","n.",["防护装置"],["guard-protection"],"Keep the safety guard over the blade.","让防护罩保持盖住刀片。",null,"https://www.merriam-webster.com/dictionary/guard"],
   ["watch","守卫；保护","v.",["守卫","保护","保卫","警戒"],["guard-watch"],"Two officers guarded the door.","两名警官守卫着大门。",null,"https://www.merriam-webster.com/dictionary/guard"],
   ["avoid","提防；防止","v.",["提防","防止","当心","警惕"],["guard-avoid"],"Wear gloves to guard against cuts.","戴上手套以防割伤。","guard against","https://www.merriam-webster.com/dictionary/guard"]
  ],[]);
  entry("race",[
   ["contest","赛跑；速度比赛","n.",["赛跑","速度比赛","比赛","竞赛"],["race-contest"],"She won the race by a second.","她以一秒的优势赢得了比赛。",null,"https://www.merriam-webster.com/dictionary/race"],
   ["competition","竞争；角逐","n.",["竞争","角逐"],["race-competition"],"Three candidates entered the race for mayor.","三名候选人加入了市长竞选。",null,"https://www.merriam-webster.com/dictionary/race"],
   ["group","种族","n.",["种族","人种"],["race-group"],"The policy bans discrimination based on race.","这项政策禁止种族歧视。",null,"https://www.merriam-webster.com/dictionary/race"],
   ["compete","参加竞速比赛","v.",["参加竞速比赛","与...赛跑"],["race-compete"],"He races bicycles at weekends.","他周末参加自行车比赛。",null,"https://www.merriam-webster.com/dictionary/race"],
   ["rush","疾驰；快速运转","v.",["疾驰","快速运转"],["race-rush"],"My heart raced as the results appeared.","成绩出现时，我的心跳加速了。",null,"https://www.merriam-webster.com/dictionary/race"]
  ],[{"terms":["急流","人类","同道","姜根","疾走","使疾走","使猛转","追赶","欧州高级通信研究开发计划"],"decision":"scope-excluded","reason":"急流及水道义为专门用法；姜根与通信缩写不作本词人种或竞赛释义。","source":"https://www.merriam-webster.com/dictionary/race"}]);
  entry("step",[
   ["foot","脚步；步","n.",["脚步","步","步幅","步伐"],["step-foot"],"Take one step closer to the line.","朝那条线再走近一步。",null,"https://www.merriam-webster.com/dictionary/step"],
   ["stair","台阶","n.",["台阶","踏级"],["step-stair"],"The top step was covered in ice.","最上一级台阶结了冰。",null,"https://www.merriam-webster.com/dictionary/step"],
   ["action","步骤；措施","n.",["步骤","措施","手段"],["step-action"],"The first step is to check the wiring.","第一步是检查线路。",null,"https://www.merriam-webster.com/dictionary/step"],
   ["move","迈步；踩","v.",["迈步","踩","踏","跨步","轻快地走","踏上","行走"],["step-move"],"Please do not step on the wet paint.","请不要踩到未干的油漆。",null,"https://www.merriam-webster.com/dictionary/step"]
  ],[{"terms":["脚步声","短距离","步态","等级","以步测量","使成阶梯状","跳舞"],"decision":"scope-excluded","reason":"步态、脚步声、测步及阶梯加工未另列；这些不与步骤或台阶完全等同。","source":"https://www.merriam-webster.com/dictionary/step"}]);
  entry("pull",[
   ["draw","拉；拖","v.",["拉","拖","拔","牵","撕开"],["pull-draw"],"Pull the handle towards you.","把把手朝你的方向拉。",null,"https://www.merriam-webster.com/dictionary/pull"],
   ["remove","拔出；取出","v.",["拔出","取出"],["pull-remove"],"The dentist pulled the damaged tooth.","牙医拔掉了那颗坏牙。",null,"https://www.merriam-webster.com/dictionary/pull"],
   ["strain","拉伤","v.",["拉伤"],["pull-strain"],"He pulled a muscle while lifting the box.","他搬箱子时拉伤了肌肉。",null,"https://www.merriam-webster.com/dictionary/pull"],
   ["attraction","吸引力","n.",["吸引力","有吸引力"],["pull-attraction"],"She still felt the pull of her hometown.","她仍然感受到故乡的吸引力。",null,"https://www.merriam-webster.com/dictionary/pull"],
   ["influence","影响力；门路","n.",["影响力","门路"],["pull-influence"],"He used his pull to secure an interview.","他利用自己的影响力争取到了一次面试。",null,"https://www.merriam-webster.com/dictionary/pull"]
  ],[{"terms":["吸引","拉力","牵引力","划船"],"decision":"scope-excluded","reason":"吸引与拉力可联系拉的动作，但名词力学量和划船动作未在本批单列。","source":"https://www.merriam-webster.com/dictionary/pull"}]);
  entry("stuff",[
   ["material","东西；物品","n.",["东西","物品","废物","废话","织品"],["stuff-material"],"Put your stuff in the locker.","把你的东西放进储物柜。",null,"https://www.merriam-webster.com/dictionary/stuff"],
   ["substance","材料；原料","n.",["材料","原料"],["stuff-substance"],"What is this sticky stuff on the table?","桌上这黏糊糊的东西是什么？",null,"https://www.merriam-webster.com/dictionary/stuff"],
   ["fill","塞满；填满","v.",["塞满","填满","装填"],["stuff-fill"],"She stuffed the cushion with wool.","她用羊毛填满了靠垫。",null,"https://www.merriam-webster.com/dictionary/stuff"],
   ["food","填馅","v.",["填馅"],["stuff-food"],"We stuffed the peppers with rice.","我们往甜椒里填了米饭。",null,"https://www.merriam-webster.com/dictionary/stuff"]
  ],[{"terms":["要素","素质","狼吞虎咽"],"decision":"scope-excluded","reason":"素质和要素依固定语境；狼吞虎咽需进食搭配，不等同于往容器里塞满。","source":"https://www.merriam-webster.com/dictionary/stuff"}]);
  entry("raw",[
   ["uncooked","生的；未烹饪的","adj.",["生的","未烹饪的"],["raw-uncooked"],"Keep raw chicken away from cooked food.","把生鸡肉与熟食分开存放。",null,"https://www.merriam-webster.com/dictionary/raw"],
   ["unprocessed","未经加工的；原始的","adj.",["未经加工的","原始的","未加工的"],["raw-unprocessed"],"The factory imports raw cotton.","这家工厂进口原棉。",null,"https://www.merriam-webster.com/dictionary/raw"],
   ["sore","红肿疼痛的","adj.",["红肿疼痛的","刺痛的","擦掉皮的","擦伤处"],["raw-sore","sore-pain"],"His hands were raw from scrubbing.","他的双手因刷洗而红肿疼痛。",null,"https://www.merriam-webster.com/dictionary/raw"],
   ["inexperienced","缺乏经验的","adj.",["缺乏经验的","不成熟的"],["raw-inexperienced"],"The team relied on raw recruits.","这支队伍依赖缺乏经验的新兵。",null,"https://www.merriam-webster.com/dictionary/raw"]
  ],[{"terms":["半成品","生疏的","阴冷的","擦伤","写后读"],"decision":"scope-excluded","reason":"半成品不一定是未经加工；阴冷、擦伤动词及计算机缩写未纳入本批。","source":"https://www.merriam-webster.com/dictionary/raw"}]);
  entry("rubbish",[
   ["waste","垃圾；废弃物","n.",["垃圾","废弃物","废物"],["rubbish-waste","waste-material"],"Please put the rubbish in the bin.","请把垃圾放进垃圾桶。",null,"https://www.merriam-webster.com/dictionary/rubbish"],
   ["nonsense","胡说；无稽之谈","n.",["胡说","无稽之谈"],["rubbish-nonsense"],"The claim that the lake is bottomless is rubbish.","说这湖没有底，简直是胡说。",null,"https://www.merriam-webster.com/dictionary/rubbish"],
   ["criticize","贬低；严厉批评","v.",["贬低","严厉批评"],["rubbish-criticize","criticism-harsh"],"Critics rubbished his proposal without reading it.","评论者没读他的提案就把它批得一无是处。",null,"https://www.merriam-webster.com/dictionary/rubbish"]
  ],[]);
  entry("junk",[
   ["waste","废旧物品；破烂","n.",["废旧物品","破烂","垃圾","乌七八糟的东西"],["junk-waste","waste-material"],"The shed was full of broken tools and other junk.","棚子里堆满了坏工具和其他破烂。",null,"https://www.merriam-webster.com/dictionary/junk"],
   ["boat","中国式帆船","n.",["中国式帆船"],["junk-boat"],"A wooden junk sailed across the harbour.","一艘木制中式帆船驶过港口。",null,"https://www.merriam-webster.com/dictionary/junk"],
   ["discard","丢弃；废弃","v.",["丢弃","废弃","清除"],["junk-discard","remove-abandon"],"They junked the old plan and started again.","他们放弃了旧计划，重新开始。",null,"https://www.merriam-webster.com/dictionary/junk"]
  ],[{"terms":["舢板"],"decision":"scope-excluded","reason":"中国式帆船并非通常所说的舢板，旧译保留为辨误参考。","source":"https://www.merriam-webster.com/dictionary/junk"}]);
  entry("trash",[
   ["waste","垃圾","n.",["垃圾","废物"],["trash-waste","waste-material"],"Take the trash out before dinner.","晚饭前把垃圾拿出去。",null,"https://www.merriam-webster.com/dictionary/trash"],
   ["poor-quality","劣质作品；无聊的东西","n.",["劣质作品","无聊的东西"],["trash-poor-quality"],"She dismissed the novel as trash.","她把那本小说斥为垃圾作品。",null,"https://www.merriam-webster.com/dictionary/trash"],
   ["damage","糟蹋；毁坏","v.",["糟蹋","毁坏"],["trash-damage"],"Vandals trashed the empty house.","破坏者把那座空房子毁得一塌糊涂。",null,"https://www.merriam-webster.com/dictionary/trash"],
   ["criticize","严厉批评","v.",["严厉批评"],["trash-criticize","criticism-harsh"],"The reviewer trashed the film's dialogue.","评论者把电影的对白批得一无是处。",null,"https://www.merriam-webster.com/dictionary/trash"]
  ],[{"terms":["丢弃"],"decision":"scope-excluded","reason":"丢弃是另一动词用法，本批动词只训练毁坏和严厉批评。","source":"https://www.merriam-webster.com/dictionary/trash"}]);
  entry("section",[
   ["part","部分；章节","n.",["部分","章节","区段","节"],["section-part"],"Read the final section of the report.","阅读报告的最后一部分。",null,"https://www.merriam-webster.com/dictionary/section"],
   ["area","区域；部门","n.",["区域","部门","处","科","区"],["section-area"],"She works in the children's section of the library.","她在图书馆的儿童区工作。",null,"https://www.merriam-webster.com/dictionary/section"],
   ["cut","剖面；切片","n.",["剖面","切片","截面"],["section-cut"],"The microscope showed a thin section of leaf tissue.","显微镜显示出一片薄薄的叶组织切片。",null,"https://www.merriam-webster.com/dictionary/section"],
   ["divide","分割；划分","v.",["分割","划分","把...分段","把...切片","被切成片"],["section-divide"],"The field was sectioned into small plots.","这块地被划分成了小块。",null,"https://www.merriam-webster.com/dictionary/section"]
  ],[{"terms":["扇区"],"decision":"scope-excluded","reason":"磁盘扇区属于计算机语境，不与一般文章章节直接互换。","source":"https://www.merriam-webster.com/dictionary/section"}]);
  entry("tag",[
   ["label","标签","n.",["标签","标记符"],["tag-label"],"The price tag had fallen off the coat.","大衣上的价格标签掉了。",null,"https://www.merriam-webster.com/dictionary/tag"],
   ["game","捉人游戏","n.",["捉人游戏"],["tag-game"],"The children played tag in the playground.","孩子们在操场上玩捉人游戏。",null,"https://www.merriam-webster.com/dictionary/tag"],
   ["label-verb","给……贴标签；标记","v.",["给……贴标签","标记","附以签条","起浑名"],["tag-label-verb"],"Tag each sample with its collection date.","给每份样本标上采集日期。",null,"https://www.merriam-webster.com/dictionary/tag"],
   ["follow","跟着；尾随","v.",["跟着","尾随"],["tag-follow","follow-person"],"Her little brother tagged along on the walk.","她弟弟散步时一路跟着。","tag along","https://www.merriam-webster.com/dictionary/tag"]
  ],[{"terms":["附属物","碎片","结束语","口头禅","附加语","浑名","添饰","连接","紧紧跟随"],"decision":"scope-excluded","reason":"语法附加问句、结束语和附接动作需搭配；本批保留标签、游戏和跟随。","source":"https://www.merriam-webster.com/dictionary/tag"}]);
  entry("fan",[
   ["admirer","迷；爱好者","n.",["迷","爱好者","狂热者"],["fan-admirer"],"Thousands of fans waited outside the stadium.","数千名球迷在体育场外等候。",null,"https://www.merriam-webster.com/dictionary/fan"],
   ["cooling","扇子；风扇","n.",["扇子","风扇"],["fan-cooling"],"The ceiling fan turned slowly.","吊扇缓缓转动。",null,"https://www.merriam-webster.com/dictionary/fan"],
   ["blow","扇风","v.",["扇风","吹拂"],["fan-blow"],"She fanned herself with a folded newspaper.","她用折起来的报纸给自己扇风。",null,"https://www.merriam-webster.com/dictionary/fan"],
   ["encourage","煽动；助长","v.",["煽动","助长","刺激"],["fan-encourage"],"The rumours fanned public anger.","这些传言加剧了公众的愤怒。",null,"https://www.merriam-webster.com/dictionary/fan"]
  ],[{"terms":["飘动","成扇形散开"],"decision":"scope-excluded","reason":"成扇形展开是形状变化，未并入扇风或煽动。","source":"https://www.merriam-webster.com/dictionary/fan"}]);
  entry("lag",[
   ["delay","落后；滞后","v.",["落后","滞后","蹒跚","缓缓而行","落后于"],["lag-delay"],"Wages lag behind rising rents.","工资增长落后于房租上涨。","lag behind","https://www.merriam-webster.com/dictionary/lag"],
   ["gap","时间差；延迟","n.",["时间差","延迟","迟延"],["lag-gap"],"There is a short lag between speaking and hearing the echo.","说话与听到回声之间有短暂的时间差。",null,"https://www.merriam-webster.com/dictionary/lag"],
   ["insulate","给管道包隔热材料","v.",["给管道包隔热材料","加上外套"],["lag-insulate"],"The plumber lagged the pipes before winter.","水管工在入冬前给管道包上了隔热材料。",null,"https://www.merriam-webster.com/dictionary/lag"]
  ],[{"terms":["囚犯","桶板","防护套","最后的","押往监狱"],"decision":"scope-excluded","reason":"囚犯及押送属另一组用法；桶板不是延迟或隔热层的同义词。","source":"https://www.merriam-webster.com/dictionary/lag"}]);
  entry("slight",[
   ["small","轻微的；少量的","adj.",["轻微的","少量的"],["slight-small"],"There was a slight delay at the border.","边境检查耽误了一小会儿。",null,"https://www.merriam-webster.com/dictionary/slight"],
   ["slim","纤细的；瘦小的","adj.",["纤细的","瘦小的","苗条的"],["slight-slim"],"A slight figure stood by the window.","一个瘦小的身影站在窗边。",null,"https://www.merriam-webster.com/dictionary/slight"],
   ["insult","冷落；怠慢","v.",["冷落","怠慢","轻视","忽略"],["slight-insult"],"She felt slighted when nobody thanked her.","没人向她道谢，她觉得受到了冷落。",null,"https://www.merriam-webster.com/dictionary/slight"],
   ["snub","轻慢；怠慢行为","n.",["轻慢","怠慢行为","轻蔑"],["slight-snub"],"He took the missing invitation as a personal slight.","他把没有收到邀请视为对自己的怠慢。",null,"https://www.merriam-webster.com/dictionary/slight"]
  ],[{"terms":["脆弱的"],"decision":"scope-excluded","reason":"纤细不等于脆弱，本批不将脆弱作为人物体形义的答案。","source":"https://www.merriam-webster.com/dictionary/slight"}]);
  entry("silver",[
   ["metal","银","n.",["银","银币","银器","银的","银制的","银器的"],["silver-metal"],"The ring is made of silver.","这枚戒指是银制的。",null,"https://www.merriam-webster.com/dictionary/silver"],
   ["colour","银色的","adj.",["银色的"],["silver-colour"],"A silver car stopped outside.","一辆银色汽车停在外面。",null,"https://www.merriam-webster.com/dictionary/silver"],
   ["medal","银牌","n.",["银牌"],["silver-medal"],"She won silver in the swimming final.","她在游泳决赛中赢得了银牌。",null,"https://www.merriam-webster.com/dictionary/silver"],
   ["coat","镀银；使呈银色","v.",["镀银","使呈银色","变银白色"],["silver-coat"],"Moonlight silvered the surface of the lake.","月光给湖面镀上了一层银色。",null,"https://www.merriam-webster.com/dictionary/silver"]
  ],[]);
  entry("rod",[
   ["stick","杆；棒","n.",["杆","棒","竿","笞鞭","小枝"],["rod-stick"],"A steel rod reinforced the concrete.","一根钢杆加固了混凝土。",null,"https://www.merriam-webster.com/dictionary/rod"],
   ["fishing","钓竿","n.",["钓竿"],["rod-fishing"],"He carried his fishing rod down to the river.","他带着钓竿走到河边。",null,"https://www.merriam-webster.com/dictionary/rod"]
  ],[]);
  entry("candy",[
   ["sweet","糖果","n.",["糖果","冰糖"],["candy-sweet"],"The shop sells candy in paper bags.","这家店用纸袋出售糖果。",null,"https://www.merriam-webster.com/dictionary/candy"],
   ["preserve","用糖煮制；把……制成蜜饯","v.",["用糖煮制","把……制成蜜饯","用糖煮"],["candy-preserve"],"They candy orange peel for the cake.","他们把橙皮用糖煮好，用来做蛋糕。",null,"https://www.merriam-webster.com/dictionary/candy"]
  ],[{"terms":["使结晶为砂糖","结晶为砂糖"],"decision":"scope-excluded","reason":"结晶或形成糖衣需具体加工过程，本批只训练糖果及糖煮蜜饯。","source":"https://www.merriam-webster.com/dictionary/candy"}]);
  entry("lid",[
   ["cover","盖子","n.",["盖子"],["lid-cover"],"Put the lid back on the saucepan.","把平底锅的盖子盖回去。",null,"https://www.merriam-webster.com/dictionary/lid"],
   ["eyelid","眼睑","n.",["眼睑"],["lid-eyelid"],"Her heavy lids closed as the train rocked.","随着火车摇晃，她沉重的眼皮合上了。",null,"https://www.merriam-webster.com/dictionary/lid"],
   ["limit","限制；抑制","n.",["限制","抑制","限制"],["lid-limit"],"The policy aims to keep a lid on rising costs.","这项政策旨在抑制成本上涨。","keep a lid on","https://www.merriam-webster.com/dictionary/lid"]
  ],[{"terms":["给...盖盖子"],"decision":"scope-excluded","reason":"给容器加盖的动词未列入本批名词盖子义。","source":"https://www.merriam-webster.com/dictionary/lid"}]);
  entry("paste",[
   ["mixture","糊状物","n.",["糊状物"],["paste-mixture"],"Mix the powder with water to make a paste.","把粉末与水混合，调成糊状。",null,"https://www.merriam-webster.com/dictionary/paste"],
   ["adhesive","糨糊；黏合剂","n.",["糨糊","黏合剂","浆糊"],["paste-adhesive"],"The wallpaper paste dried overnight.","壁纸糨糊一夜间干了。",null,"https://www.merriam-webster.com/dictionary/paste"],
   ["stick","粘贴","v.",["粘贴","用浆糊粘","张贴"],["paste-stick"],"Paste the photograph into your notebook.","把照片粘进笔记本。",null,"https://www.merriam-webster.com/dictionary/paste"],
   ["computer","粘贴（计算机操作）","v.",["粘贴（计算机操作）"],["paste-computer"],"Copy the address and paste it into the form.","复制地址并粘贴到表格中。",null,"https://www.merriam-webster.com/dictionary/paste"]
  ],[{"terms":["面团","面食","用拳重击","狠狠地打"],"decision":"scope-excluded","reason":"面食和拳击俚语不在本批糊状物、黏贴及计算机操作范围。","source":"https://www.merriam-webster.com/dictionary/paste"}]);
  entry("pond",[
   ["water","池塘","n.",["池塘"],["pond-water"],"Frogs gathered at the edge of the pond.","青蛙聚集在池塘边。",null,"https://www.merriam-webster.com/dictionary/pond"]
  ],[{"terms":["筑成池塘"],"decision":"scope-excluded","reason":"筑池动词未列入本批池塘名词范围。","source":"https://www.merriam-webster.com/dictionary/pond"}]);
  entry("cook",[
   ["prepare","烹饪；烹调","v.",["烹饪","烹调","煮饭","加热","在煮着"],["cook-prepare"],"Cook the beans until they are soft.","把豆子煮到变软。",null,"https://www.merriam-webster.com/dictionary/cook"],
   ["person","厨师；做饭的人","n.",["厨师","做饭的人","厨子"],["cook-person"],"The cook prepared soup for everyone.","厨师给大家做了汤。",null,"https://www.merriam-webster.com/dictionary/cook"],
   ["falsify","篡改账目","v.",["篡改账目"],["cook-falsify"],"The manager was accused of cooking the books.","经理被指控篡改账目。","cook the books","https://www.merriam-webster.com/dictionary/cook"]
  ],[]);
  entry("locate",[
   ["find","找出位置；找到","v.",["找出位置","找到","找出"],["locate-find"],"Rescuers located the missing boat at dawn.","救援人员在黎明时找到了失踪的船。",null,"https://www.merriam-webster.com/dictionary/locate"],
   ["place","把……设在","v.",["把……设在","设于","位于","定居"],["locate-place"],"The company located its new office near the station.","公司把新办公室设在车站附近。",null,"https://www.merriam-webster.com/dictionary/locate"]
  ],[]);
  entry("brick",[
   ["building","砖","n.",["砖","砖块"],["brick-building"],"The wall was built from red bricks.","这堵墙用红砖砌成。",null,"https://www.merriam-webster.com/dictionary/brick"],
   ["block","砖状物","n.",["砖状物","积木"],["brick-block"],"We cut slices from a brick of cheese.","我们从一大块砖状奶酪上切下薄片。",null,"https://www.merriam-webster.com/dictionary/brick"],
   ["build","用砖砌；用砖封堵","v.",["用砖砌","用砖封堵","用砖造","用砖砌"],["brick-build"],"They bricked up the old doorway.","他们用砖封住了旧门洞。","brick up","https://www.merriam-webster.com/dictionary/brick"]
  ],[{"terms":["用砖做的"],"decision":"scope-excluded","reason":"材料形容词未单列；名词砖与用砖封堵动作已分别配例句。","source":"https://www.merriam-webster.com/dictionary/brick"}]);
  entry("drill",[
   ["tool","钻；钻头","n.",["钻","钻头","钻孔机","钻子"],["drill-tool"],"Use a small drill to make the hole.","用小钻头钻这个孔。",null,"https://www.merriam-webster.com/dictionary/drill"],
   ["practice","操练；演习","n.",["操练","演习"],["drill-practice"],"The school held a fire drill on Friday.","学校周五举行了消防演习。",null,"https://www.merriam-webster.com/dictionary/drill"],
   ["bore","钻孔","v.",["钻孔"],["drill-bore"],"Drill two holes in the wooden board.","在木板上钻两个孔。",null,"https://www.merriam-webster.com/dictionary/drill"],
   ["train","训练；反复操练","v.",["训练","反复操练"],["drill-train"],"The coach drilled the team in defensive moves.","教练让队员反复练习防守动作。",null,"https://www.merriam-webster.com/dictionary/drill"]
  ],[{"terms":["播种机","粗斜纹布"],"decision":"scope-excluded","reason":"播种机和斜纹布是专门物件，不能作为钻头或演习的同义答案。","source":"https://www.merriam-webster.com/dictionary/drill"}]);
  entry("supermarket",[
   ["shop","超级市场","n.",["超级市场","自助售货商店"],["supermarket-shop"],"The supermarket stays open until ten.","这家超市营业到十点。",null,"https://www.merriam-webster.com/dictionary/supermarket"]
  ],[]);
  entry("toilet",[
   ["fixture","抽水马桶；坐便器","n.",["抽水马桶","坐便器"],["toilet-fixture"],"The toilet needs a new seat.","这个马桶需要换个座圈。",null,"https://www.merriam-webster.com/dictionary/toilet"],
   ["room","厕所；洗手间","n.",["厕所","洗手间"],["toilet-room"],"The nearest toilet is on the ground floor.","最近的洗手间在一楼。",null,"https://www.merriam-webster.com/dictionary/toilet"]
  ],[{"terms":["梳妆","打扮","上厕所","给...梳妆打扮"],"decision":"scope-excluded","reason":"梳洗旧义和上厕所短语不等同于马桶或洗手间这两个名词义。","source":"https://www.merriam-webster.com/dictionary/toilet"}]);
  entry("cart",[
   ["vehicle","运货车；手推车","n.",["运货车","手推车","二轮运货马车"],["cart-vehicle"],"She pushed the shopping cart towards the checkout.","她把购物车推向收银台。",null,"https://www.merriam-webster.com/dictionary/cart"],
   ["transport","用车运送","v.",["用车运送","驾运货马车","用车装载"],["cart-transport"],"Workers carted the boxes to the storehouse.","工人们用车把箱子运到了仓库。",null,"https://www.merriam-webster.com/dictionary/cart"]
  ],[]);
  entry("bind",[
   ["fasten","捆绑；系","v.",["捆绑","系","绑","包扎"],["bind-fasten"],"Bind the stems together with string.","用绳子把茎捆在一起。",null,"https://www.merriam-webster.com/dictionary/bind"],
   ["oblige","使受约束；使有义务","v.",["使受约束","使有义务","约束","有约束力"],["bind-oblige"],"The agreement binds both parties to secrecy.","这份协议要求双方保密。",null,"https://www.merriam-webster.com/dictionary/bind"],
   ["book","装订","v.",["装订"],["bind-book"],"The printer bound the pages into a book.","印刷工把这些纸页装订成书。",null,"https://www.merriam-webster.com/dictionary/bind"],
   ["unite","使紧密结合","v.",["使紧密结合"],["bind-unite","join-integrate"],"Shared memories bind the family together.","共同的回忆把家人紧密联系在一起。",null,"https://www.merriam-webster.com/dictionary/bind"]
  ],[{"terms":["使结合","凝固","赋值","绑定"],"decision":"scope-excluded","reason":"凝固及计算机绑定需专业语境；使结合已按家庭联结例句收录。","source":"https://www.merriam-webster.com/dictionary/bind"}]);
  entry("ditch",[
   ["channel","沟；沟渠","n.",["沟","沟渠"],["ditch-channel"],"Rainwater flowed into the ditch.","雨水流进了沟渠。",null,"https://www.merriam-webster.com/dictionary/ditch"],
   ["abandon","抛弃；摆脱","v.",["抛弃","摆脱"],["ditch-abandon","remove-abandon"],"She ditched the broken umbrella.","她扔掉了那把坏伞。",null,"https://www.merriam-webster.com/dictionary/ditch"],
   ["land","使飞机水上迫降","v.",["使飞机水上迫降"],["ditch-land"],"The pilot ditched the plane near the coast.","飞行员把飞机迫降在近岸海面上。",null,"https://www.merriam-webster.com/dictionary/ditch"],
   ["dig","挖沟；开沟","v.",["挖沟","开沟","在...开沟","开沟"],["ditch-dig"],"The farmer ditched the wet field to improve drainage.","农民在湿地里开沟，以改善排水。",null,"https://www.merriam-webster.com/dictionary/ditch"]
  ],[]);
  entry("pave",[
   ["surface","铺路；铺砌","v.",["铺路","铺砌","铺设","铺满"],["pave-surface"],"They paved the courtyard with stone.","他们用石头铺了院子。",null,"https://www.merriam-webster.com/dictionary/pave"],
   ["prepare","为……铺平道路","v.",["为……铺平道路","为...铺路"],["pave-prepare"],"The agreement paved the way for further talks.","这份协议为进一步谈判铺平了道路。","pave the way","https://www.merriam-webster.com/dictionary/pave"]
  ],[{"terms":["安排"],"decision":"scope-excluded","reason":"安排过于宽泛；本批只保留铺砌和 pave the way 的准备义。","source":"https://www.merriam-webster.com/dictionary/pave"}]);
  entry("van",[
   ["vehicle","厢式货车","n.",["厢式货车","货车","篷车"],["van-vehicle"],"The delivery van arrived before noon.","送货车在中午前到了。",null,"https://www.merriam-webster.com/dictionary/van"],
   ["front","先锋；前列","n.",["先锋","前列","前驱","前卫"],["van-front"],"The laboratory was in the van of medical research.","这家实验室处于医学研究前沿。","in the van of","https://www.merriam-webster.com/dictionary/van"]
  ],[{"terms":["用货车搬运","增值网"],"decision":"scope-excluded","reason":"增值网是缩写，货运的动词不从货车名词自动建立。","source":"https://www.merriam-webster.com/dictionary/van"}]);
  entry("unite",[
   ["join","联合；使结合","v.",["联合","使结合","接合","混合","使联合","统一","使粘合"],["unite-join","join-integrate"],"The bridge unites the two halves of the town.","这座桥把城镇的两半连接起来。",null,"https://www.merriam-webster.com/dictionary/unite"],
   ["cooperate","团结；联合行动","v.",["团结","联合行动"],["unite-cooperate"],"Residents united to save the local library.","居民们团结起来挽救当地的图书馆。",null,"https://www.merriam-webster.com/dictionary/unite"]
  ],[]);
  entry("steady",[
   ["stable","稳定的；平稳的","adj.",["稳定的","平稳的","不动摇的","稳固的"],["steady-stable"],"Keep the ladder steady while I climb.","我攀爬时请扶稳梯子。",null,"https://www.merriam-webster.com/dictionary/steady"],
   ["regular","持续的；均匀的","adj.",["持续的","均匀的","经常的"],["steady-regular"],"A steady rain fell all afternoon.","雨持续下了整个下午。",null,"https://www.merriam-webster.com/dictionary/steady"],
   ["reliable","稳重的；可靠的","adj.",["稳重的","可靠的","沉着的","坚定的"],["steady-reliable"],"He is a steady worker who rarely misses a deadline.","他做事稳重可靠，很少错过截止日期。",null,"https://www.merriam-webster.com/dictionary/steady"],
   ["stabilize","使稳定；稳住","v.",["使稳定","稳住","使坚定","变为沉着","稳固"],["steady-stabilize"],"She steadied the tray with both hands.","她用双手稳住了托盘。",null,"https://www.merriam-webster.com/dictionary/steady"]
  ],[]);
  entry("slogan",[
   ["phrase","口号；标语","n.",["口号","标语"],["slogan-phrase"],"The protesters carried banners with a simple slogan.","抗议者举着写有一句简短口号的横幅。",null,"https://www.merriam-webster.com/dictionary/slogan"]
  ],[{"terms":["呐喊声"],"decision":"scope-excluded","reason":"历史性的战斗呐喊未另立义项，本批口号例句以公开标语为范围。","source":"https://www.merriam-webster.com/dictionary/slogan"}]);
  entry("personal",[
   ["individual","个人的；私人的","adj.",["个人的","私人的","自身的"],["personal-individual"],"Keep your personal documents in a safe place.","把个人文件放在安全的地方。",null,"https://www.merriam-webster.com/dictionary/personal"],
   ["individualized","亲自的；针对个人的","adj.",["亲自的","针对个人的"],["personal-individualized"],"Each guest received a personal reply from the director.","每位客人都收到了主任亲自写的答复。",null,"https://www.merriam-webster.com/dictionary/personal"],
   ["private","涉及私生活的","adj.",["涉及私生活的","涉及隐私的"],["personal-private"],"I would rather not answer such a personal question.","我不想回答这样涉及私生活的问题。",null,"https://www.merriam-webster.com/dictionary/personal"]
  ],[{"terms":["有人性的","人称的","身体的","人的"],"decision":"scope-excluded","reason":"语法人称与身体等专业语境未列入；私人的不意味着有人性。","source":"https://www.merriam-webster.com/dictionary/personal"}]);
  entry("fair",[
   ["just","公平的；公正的","adj.",["公平的","公正的"],["fair-just"],"The referee made a fair decision.","裁判作出了公正的决定。",null,"https://www.merriam-webster.com/dictionary/fair"],
   ["reasonable","合理的","adj.",["合理的"],["fair-reasonable"],"They offered a fair price for the car.","他们为这辆车开出了合理的价格。",null,"https://www.merriam-webster.com/dictionary/fair"],
   ["moderate","尚可的；中等的","adj.",["尚可的","中等的","相当好的"],["fair-moderate"],"Her reading is good, but her spelling is only fair.","她阅读不错，但拼写只算中等。",null,"https://www.merriam-webster.com/dictionary/fair"],
   ["pale","浅色的；白皙的","adj.",["浅色的","白皙的"],["fair-pale"],"Wear a hat to protect your fair skin.","戴顶帽子保护你白皙的皮肤。",null,"https://www.merriam-webster.com/dictionary/fair"],
   ["weather","晴朗的","adj.",["晴朗的"],["fair-weather"],"We expect fair weather for the weekend.","预计周末天气晴朗。",null,"https://www.merriam-webster.com/dictionary/fair"],
   ["exhibition","展览会；交易会","n.",["展览会","交易会"],["fair-exhibition"],"We met several publishers at the book fair.","我们在书展上见到了几位出版商。",null,"https://www.merriam-webster.com/dictionary/fair"],
   ["carnival","游乐集市","n.",["游乐集市","集市"],["fair-carnival"],"The children rode the carousel at the fair.","孩子们在游乐集市上坐了旋转木马。",null,"https://www.merriam-webster.com/dictionary/fair"]
  ],[{"terms":["公平地"],"decision":"scope-excluded","reason":"公平地属于副词用法，本批不从形容词公平的自动生成该题目。","source":"https://www.merriam-webster.com/dictionary/fair"}]);
  entry("session",[
   ["meeting","会议；一场活动","n.",["会议","一场活动","一段时间","一次活动"],["session-meeting"],"The training session begins at nine.","培训活动九点开始。",null,"https://www.merriam-webster.com/dictionary/session"],
   ["period","会期；学期","n.",["会期","学期","开庭期"],["session-period"],"Parliament returns for its autumn session next week.","议会下周进入秋季会期。",null,"https://www.merriam-webster.com/dictionary/session"]
  ],[{"terms":["会话"],"decision":"scope-excluded","reason":"计算机会话需会话管理语境，不与会议完全互换。","source":"https://www.merriam-webster.com/dictionary/session"}]);
  entry("silence",[
   ["quiet","寂静；无声","n.",["寂静","无声","安静"],["silence-quiet","quiet-state"],"A sudden silence filled the room.","房间突然安静了下来。",null,"https://www.merriam-webster.com/dictionary/silence"],
   ["nonresponse","沉默；缄口不言","n.",["沉默","缄口不言","缄默"],["silence-nonresponse"],"Her silence on the matter surprised us.","她对此事保持沉默，让我们很惊讶。",null,"https://www.merriam-webster.com/dictionary/silence"],
   ["quiet-verb","使安静；使停止发声","v.",["使安静","使停止发声","使沉默"],["silence-quiet-verb","quiet-cause"],"He silenced the alarm with a code.","他输入密码，让警报停止了鸣响。",null,"https://www.merriam-webster.com/dictionary/silence"],
   ["suppress","压制言论；使不敢发言","v.",["压制言论","使不敢发言","压制"],["silence-suppress"],"The threats failed to silence the journalist.","这些威胁未能让记者噤声。",null,"https://www.merriam-webster.com/dictionary/silence"]
  ],[{"terms":["音讯全无"],"decision":"scope-excluded","reason":"没有音讯不必然表示主动缄默，本批不作同义答案。","source":"https://www.merriam-webster.com/dictionary/silence"}]);
  entry("trap",[
   ["device","陷阱；捕捉器","n.",["陷阱","捕捉器"],["trap-device"],"The mouse escaped from the trap.","老鼠从捕捉器里逃了出来。",null,"https://www.merriam-webster.com/dictionary/trap"],
   ["predicament","圈套；困境","n.",["圈套","困境","诡计","陷井"],["trap-predicament"],"She avoided the trap of borrowing at high interest.","她避开了高息借贷的陷阱。",null,"https://www.merriam-webster.com/dictionary/trap"],
   ["catch","困住；捕获","v.",["困住","捕获","设圈套","设陷阱","诱捕","诱骗","抓住","使受限制","俘获"],["trap-catch"],"Snow trapped the hikers in the valley.","大雪把徒步旅行者困在了山谷中。",null,"https://www.merriam-webster.com/dictionary/trap"]
  ],[{"terms":["存水弯"],"decision":"scope-excluded","reason":"存水弯是管道部件，与捕捉器、圈套不同。","source":"https://www.merriam-webster.com/dictionary/trap"}]);
  entry("pretend",[
   ["feign","假装；装作","v.",["假装","装作"],["pretend-feign"],"He pretended to be asleep when I entered.","我进来时，他假装睡着了。",null,"https://www.merriam-webster.com/dictionary/pretend"],
   ["play","假扮；在游戏中想象","v.",["假扮","在游戏中想象"],["pretend-play"],"The children pretended that the sofa was a ship.","孩子们假装沙发是一艘船。",null,"https://www.merriam-webster.com/dictionary/pretend"],
   ["claim","自称；妄称","v.",["自称","妄称","伪称","自命"],["pretend-claim"],"I do not pretend to understand every detail.","我不敢自称了解每一个细节。",null,"https://www.merriam-webster.com/dictionary/pretend"]
  ],[]);
  entry("cheat",[
   ["act","作弊；欺骗","v.",["作弊","欺骗"],["cheat-act"],"He cheated in the final examination.","他在期末考试中作弊了。",null,"https://www.merriam-webster.com/dictionary/cheat"],
   ["defraud","骗取；欺诈","v.",["骗取","欺诈"],["cheat-defraud"],"The dealer cheated her out of her savings.","商人骗走了她的积蓄。","cheat out of","https://www.merriam-webster.com/dictionary/cheat"],
   ["person","骗子；作弊者","n.",["骗子","作弊者"],["cheat-person"],"Nobody wanted to play cards with a cheat.","没人愿意和作弊的人打牌。",null,"https://www.merriam-webster.com/dictionary/cheat"]
  ],[{"terms":["逃脱"],"decision":"scope-excluded","reason":"逃脱需要 cheat death 等固定搭配，本批只训练欺骗及作弊。","source":"https://www.merriam-webster.com/dictionary/cheat"}]);
  entry("equip",[
   ["provide","装备；配备","v.",["装备","配备"],["equip-provide"],"The volunteers were equipped with radios.","志愿者们配备了无线电设备。",null,"https://www.merriam-webster.com/dictionary/equip"],
   ["prepare","使有能力；使具备条件","v.",["使有能力","使具备条件"],["equip-prepare"],"The course equips students to manage small projects.","这门课程培养学生管理小型项目的能力。",null,"https://www.merriam-webster.com/dictionary/equip"]
  ],[{"terms":["设备","装置"],"decision":"scope-excluded","reason":"设备与装置为名词译法；本词本批作为配备和使具备能力的动词训练。","source":"https://www.merriam-webster.com/dictionary/equip"}]);
  entry("hit",[
   ["strike","击中；打击","v.",["击中","打击","打","冲撞","碰撞","打中"],["hit-strike"],"The ball hit the window.","球击中了窗户。",null,"https://www.merriam-webster.com/dictionary/hit"],
   ["affect","使遭受；袭击","v.",["使遭受","袭击"],["hit-affect"],"A severe drought hit the region.","一场严重的干旱袭击了这个地区。",null,"https://www.merriam-webster.com/dictionary/hit"],
   ["reach","达到","v.",["达到"],["hit-reach"],"Temperatures hit forty degrees yesterday.","昨天气温达到了四十度。",null,"https://www.merriam-webster.com/dictionary/hit"],
   ["success","成功的作品；轰动一时的事物","n.",["成功的作品","轰动一时的事物"],["hit-success","smash-hit-success"],"Her first novel became an unexpected hit.","她的第一部小说意外大获成功。",null,"https://www.merriam-webster.com/dictionary/hit"],
   ["result","搜索结果；命中记录","n.",["搜索结果","命中记录"],["hit-result"],"The search returned over a hundred hits.","搜索返回了一百多条结果。",null,"https://www.merriam-webster.com/dictionary/hit"],
   ["blow","一击；命中","n.",["一击","命中"],["hit-blow"],"The target showed three direct hits.","靶子上有三次直接命中的痕迹。",null,"https://www.merriam-webster.com/dictionary/hit"]
  ],[{"terms":["讽刺","偶然碰上","找到","瞬时打扰"],"decision":"scope-excluded","reason":"偶遇、找到及计算机中断依搭配而定，不并入击中或搜索结果。","source":"https://www.merriam-webster.com/dictionary/hit"}]);
  entry("punch",[
   ["strike","用拳猛击","v.",["用拳猛击","以拳重击"],["punch-strike"],"He punched the bag twice.","他朝沙袋猛击了两拳。",null,"https://www.merriam-webster.com/dictionary/punch"],
   ["hole","打孔","v.",["打孔","开洞","冲压"],["punch-hole"],"Punch two holes along the edge of the paper.","沿纸边打两个孔。",null,"https://www.merriam-webster.com/dictionary/punch"],
   ["blow","一拳；拳击","n.",["一拳","拳击"],["punch-blow"],"The boxer blocked a punch with his glove.","拳击手用拳套挡住了一拳。",null,"https://www.merriam-webster.com/dictionary/punch"],
   ["drink","潘趣酒；混合饮料","n.",["潘趣酒","混合饮料"],["punch-drink"],"She served a fruit punch at the party.","她在聚会上供应了一种混合果汁饮料。",null,"https://www.merriam-webster.com/dictionary/punch"],
   ["force","冲击力；感染力","n.",["冲击力","感染力"],["punch-force"],"The short opening sentence gives the speech punch.","简短的开场句让演讲富有感染力。",null,"https://www.merriam-webster.com/dictionary/punch"],
   ["tool","打孔器；冲压工具","n.",["打孔器","冲压工具","打洞器","冲压机","冲床"],["punch-tool"],"Use a punch to make a hole in the leather strap.","用打孔器在皮带上打一个孔。",null,"https://www.merriam-webster.com/dictionary/punch"]
  ],[{"terms":["钻孔机"],"decision":"scope-excluded","reason":"钻孔机不等于手动打孔器，本批保留打孔器与冲压工具的有限范围。","source":"https://www.merriam-webster.com/dictionary/punch"}]);
  entry("chop",[
   ["cut","砍；剁；切碎","v.",["砍","剁","切碎","剁碎","切击","割断"],["chop-cut"],"Chop the onions into small pieces.","把洋葱切成小块。",null,"https://www.merriam-webster.com/dictionary/chop"],
   ["meat","带骨肉排","n.",["带骨肉排","肋条肉","排骨"],["chop-meat"],"He grilled a lamb chop for dinner.","他烤了一块羊排作晚餐。",null,"https://www.merriam-webster.com/dictionary/chop"],
   ["blow","劈砍的一击","n.",["劈砍的一击"],["chop-blow"],"One chop split the log in two.","一斧就把木柴劈成了两半。",null,"https://www.merriam-webster.com/dictionary/chop"]
  ],[{"terms":["戳记","商标","突然转向"],"decision":"scope-excluded","reason":"戳记和商标属地区或行业用法；突然转向不等同于砍剁。","source":"https://www.merriam-webster.com/dictionary/chop"}]);
  entry("stab",[
   ["pierce","刺；捅","v.",["刺","捅","戳","刺入","直入","刺伤"],["stab-pierce","pierce-stab"],"The attacker stabbed him in the arm.","袭击者刺伤了他的手臂。",null,"https://www.merriam-webster.com/dictionary/stab"],
   ["pain","突然的剧痛；刺痛","n.",["突然的剧痛","刺痛","剧痛"],["stab-pain"],"She felt a stab of pain in her shoulder.","她感到肩膀一阵刺痛。",null,"https://www.merriam-webster.com/dictionary/stab"],
   ["attempt","尝试","n.",["尝试"],["stab-attempt"],"Let me have a stab at solving the puzzle.","让我试着解一下这道谜题。","a stab at","https://www.merriam-webster.com/dictionary/stab"]
  ],[{"terms":["努力","使伤心"],"decision":"scope-excluded","reason":"情感伤害未单列；名词尝试已收录，但不泛化为任何努力。","source":"https://www.merriam-webster.com/dictionary/stab"}]);
  entry("starve",[
   ["hunger","挨饿；饿死","v.",["挨饿","饿死","(使)饿死","(使)挨饿"],["starve-hunger"],"Without food, the animals would starve.","没有食物，这些动物就会饿死。",null,"https://www.merriam-webster.com/dictionary/starve"],
   ["deprive","使严重缺乏","v.",["使严重缺乏"],["starve-deprive"],"The roots were starved of oxygen in the flooded soil.","在积水的土壤中，树根严重缺氧。","starve of","https://www.merriam-webster.com/dictionary/starve"]
  ],[]);
  entry("aggressive",[
   ["hostile","好斗的；有攻击性的","adj.",["好斗的","有攻击性的","侵略的","挑畔的","爱挑衅的"],["aggressive-hostile"],"The dog became aggressive when cornered.","那条狗被逼到角落时变得具有攻击性。",null,"https://www.merriam-webster.com/dictionary/aggressive"],
   ["forceful","积极进取的；强势的","adj.",["积极进取的","强势的","进取的"],["aggressive-forceful"],"The company launched an aggressive marketing campaign.","公司发起了一场强势的营销活动。",null,"https://www.merriam-webster.com/dictionary/aggressive"]
  ],[{"terms":["行为过火的"],"decision":"scope-excluded","reason":"行为过火带价值判断，不作为所有积极进取行为的同义释义。","source":"https://www.merriam-webster.com/dictionary/aggressive"}]);
  entry("terror",[
   ["fear","恐惧；惊恐","n.",["恐惧","惊恐","恐怖","惊吓","惊悸"],["terror-fear"],"The children screamed in terror as the roof collapsed.","屋顶坍塌时，孩子们惊恐地尖叫。",null,"https://www.merriam-webster.com/dictionary/terror"],
   ["violence","恐怖活动；恐怖统治","n.",["恐怖活动","恐怖统治"],["terror-violence"],"The regime used terror to silence opposition.","这个政权用恐怖手段压制反对声音。",null,"https://www.merriam-webster.com/dictionary/terror"],
   ["person","令人头疼的人","n.",["令人头疼的人","可怕的人"],["terror-person"],"Their youngest child is a terror at bedtime.","他们最小的孩子到了睡觉时间就让人头疼。",null,"https://www.merriam-webster.com/dictionary/terror"]
  ],[]);
  entry("frighten",[
   ["scare","使害怕；吓唬","v.",["使害怕","吓唬","使受惊"],["frighten-scare","fear-cause","intimidate-bully"],"The sudden thunder frightened the horse.","突如其来的雷声惊吓了那匹马。",null,"https://www.merriam-webster.com/dictionary/frighten"],
   ["deter","吓退；吓得不敢做","v.",["吓退","吓得不敢做","吓走"],["frighten-deter"],"High fees frightened potential customers away.","高额费用吓退了潜在客户。","frighten away","https://www.merriam-webster.com/dictionary/frighten"]
  ],[]);
  entry("happen",[
   ["occur","发生","v.",["发生"],["happen-occur","occur-happen"],"The accident happened near the bridge.","事故发生在桥附近。",null,"https://www.merriam-webster.com/dictionary/happen"],
   ["chance","碰巧","v.",["碰巧","恰巧"],["happen-chance"],"I happened to have a spare ticket.","我碰巧有一张多余的票。","happen to do","https://www.merriam-webster.com/dictionary/happen"],
   ["encounter","偶然发现","v.",["偶然发现"],["happen-encounter"],"We happened upon an old stone chapel.","我们偶然发现了一座古老的石头小教堂。","happen upon","https://www.merriam-webster.com/dictionary/happen"]
  ],[]);
  entry("proceed",[
   ["continue","继续进行","v.",["继续进行","进行"],["proceed-continue"],"Please proceed with your explanation.","请继续解释。","proceed with","https://www.merriam-webster.com/dictionary/proceed"],
   ["move","前往；向前行进","v.",["前往","向前行进"],["proceed-move"],"Passengers should proceed to gate twelve.","乘客请前往十二号登机口。",null,"https://www.merriam-webster.com/dictionary/proceed"],
   ["next","接着做","v.",["接着做"],["proceed-next"],"She introduced herself and proceeded to explain the rules.","她介绍了自己，接着解释规则。","proceed to do","https://www.merriam-webster.com/dictionary/proceed"]
  ],[{"terms":["开始","发出","起诉","所得","收入","收益"],"decision":"scope-excluded","reason":"起诉需 proceed against；所得收入通常为复数 proceeds，本批训练继续和前往。","source":"https://www.merriam-webster.com/dictionary/proceed"}]);
  entry("escape",[
   ["get-away","逃脱；逃跑","v.",["逃脱","逃跑","逃亡","溜走"],["escape-get-away"],"Two prisoners escaped through a broken window.","两名囚犯从破窗逃走了。",null,"https://www.merriam-webster.com/dictionary/escape"],
   ["avoid","避开；免遭","v.",["避开","免遭","逃避","避免"],["escape-avoid"],"The old church escaped serious damage.","这座古老的教堂幸免于严重损坏。",null,"https://www.merriam-webster.com/dictionary/escape"],
   ["leak","逸出；泄漏","v.",["逸出","泄漏"],["escape-leak"],"Steam escaped through a crack in the pipe.","蒸汽从管道的一道裂缝中逸出。",null,"https://www.merriam-webster.com/dictionary/escape"],
   ["fail-notice","被忽略；未被记住","v.",["被忽略","未被记住","被...忘掉"],["escape-fail-notice"],"His name escapes me at the moment.","我此刻想不起他的名字了。",null,"https://www.merriam-webster.com/dictionary/escape"],
   ["way-out","逃脱；解脱","n.",["逃脱","解脱"],["escape-way-out"],"Reading offered her an escape from daily worries.","阅读让她暂时摆脱了日常烦恼。",null,"https://www.merriam-webster.com/dictionary/escape"]
  ],[{"terms":["避难设备"],"decision":"scope-excluded","reason":"逃生设备是具体装置义，本批的逃脱或解脱不能代替装置名称。","source":"https://www.merriam-webster.com/dictionary/escape"}]);
  entry("interrupt",[
   ["speech","打断讲话；插话","v.",["打断讲话","插话","插嘴","打断"],["interrupt-speech"],"Please do not interrupt while she is speaking.","她说话时请不要打断。",null,"https://www.merriam-webster.com/dictionary/interrupt"],
   ["break","使中断；打扰","v.",["使中断","打扰","中断","妨碍"],["interrupt-break"],"A power cut interrupted the broadcast.","停电中断了广播。",null,"https://www.merriam-webster.com/dictionary/interrupt"]
  ],[]);
  entry("shrink",[
   ["smaller","缩小；收缩","v.",["缩小","收缩","萎缩","使收缩","使缩小"],["shrink-smaller","decrease-quantity"],"The sweater shrank in the hot wash.","这件毛衣用热水洗后缩水了。",null,"https://www.merriam-webster.com/dictionary/shrink"],
   ["recoil","退缩；畏缩","v.",["退缩","畏缩","回避"],["shrink-recoil"],"She never shrinks from a difficult task.","她面对艰巨任务从不退缩。","shrink from","https://www.merriam-webster.com/dictionary/shrink"],
   ["psychiatrist","精神科医生（非正式用语）","n.",["精神科医生（非正式用语）"],["shrink-psychiatrist"],"He joked that his cat needed a shrink.","他开玩笑说他的猫需要看精神科医生。",null,"https://www.merriam-webster.com/dictionary/shrink"]
  ],[]);
  entry("withdraw",[
   ["remove","撤走；收回","v.",["撤走","收回","撤回","取回","使撤退","拉开","移开","撤退"],["withdraw-remove","withdraw-from-position"],"The army withdrew its troops from the valley.","军队从山谷撤走了部队。",null,"https://www.merriam-webster.com/dictionary/withdraw"],
   ["money","提取存款","v.",["提取存款"],["withdraw-money"],"I withdrew some cash before the trip.","旅行前我取了一些现金。",null,"https://www.merriam-webster.com/dictionary/withdraw"],
   ["leave","退出","v.",["退出","离开"],["withdraw-leave"],"She withdrew from the competition after an injury.","她受伤后退出了比赛。","withdraw from","https://www.merriam-webster.com/dictionary/withdraw"],
   ["retract","撤销；收回言论","v.",["撤销","收回言论","撤消"],["withdraw-retract"],"The newspaper withdrew the false allegation.","报纸撤回了那项不实指控。",null,"https://www.merriam-webster.com/dictionary/withdraw"]
  ],[]);
  entry("discard",[
   ["throw","丢弃；抛弃","v.",["丢弃","抛弃"],["discard-throw","remove-abandon"],"Discard any fruit with mould on it.","丢掉所有发霉的水果。",null,"https://www.merriam-webster.com/dictionary/discard"],
   ["card","弃牌；垫牌","n.",["弃牌","垫牌"],["discard-card"],"Her discard revealed that she had no hearts left.","她垫出的牌暴露出她已经没有红桃了。",null,"https://www.merriam-webster.com/dictionary/discard"]
  ],[]);
  entry("enclose",[
   ["surround","围住；封闭","v.",["围住","封闭","围绕","圈起"],["enclose-surround"],"A stone wall encloses the garden.","一道石墙围住了花园。",null,"https://www.merriam-webster.com/dictionary/enclose"],
   ["include","随函附上","v.",["随函附上","放入封套","附上"],["enclose-include"],"I enclose a copy of the invoice.","我随函附上一份发票副本。",null,"https://www.merriam-webster.com/dictionary/enclose"]
  ],[]);
  entry("disturb",[
   ["interrupt","打扰；干扰","v.",["打扰","干扰","妨碍","滋扰"],["disturb-interrupt","annoy-disrupt"],"Please do not disturb the patient.","请不要打扰病人。",null,"https://www.merriam-webster.com/dictionary/disturb"],
   ["unsettle","使不安","v.",["使不安"],["disturb-unsettle","distress-upset"],"The news deeply disturbed her.","这个消息让她深感不安。",null,"https://www.merriam-webster.com/dictionary/disturb"],
   ["move","弄乱；扰动","v.",["弄乱","扰动","扰乱"],["disturb-move"],"Avoid disturbing the soil around the roots.","避免扰动根部周围的土壤。",null,"https://www.merriam-webster.com/dictionary/disturb"]
  ],[]);
  entry("halt",[
   ["stop","停止；使停下","v.",["停止","使停下","立定","使停止","使立定"],["halt-stop","stop-halt"],"The driver halted the bus near the crossing.","司机把公交车停在了路口附近。",null,"https://www.merriam-webster.com/dictionary/halt"],
   ["pause","停止；暂停","n.",["停止","暂停"],["halt-pause","stop-halt"],"Work came to a halt when the crane broke down.","起重机故障后，工作停了下来。",null,"https://www.merriam-webster.com/dictionary/halt"]
  ],[{"terms":["休息","蹒跚","踌躇","有缺点"],"decision":"scope-excluded","reason":"本批训练停止；蹒跚与有缺点属于另一组过时用法，休息并不必然停止所有活动。","source":"https://www.merriam-webster.com/dictionary/halt"}]);
  entry("interfere",[
   ["meddle","干涉；插手","v.",["干涉","插手"],["interfere-meddle"],"Do not interfere in their private dispute.","不要插手他们的私人纠纷。","interfere in","https://www.merriam-webster.com/dictionary/interfere"],
   ["hinder","妨碍；干扰","v.",["妨碍","干扰","冲突","抵触","阻碍"],["interfere-hinder"],"The noise interfered with my concentration.","噪声妨碍了我集中注意力。","interfere with","https://www.merriam-webster.com/dictionary/interfere"]
  ],[{"terms":["碰腿(马)"],"decision":"scope-excluded","reason":"马碰腿为专门马术用语，本批只训练干涉和妨碍。","source":"https://www.merriam-webster.com/dictionary/interfere"}]);
  entry("wife",[
   ["spouse","妻子","n.",["妻子","太太","夫人","已婚妇女"],["wife-spouse"],"His wife works at the local hospital.","他的妻子在当地医院工作。",null,"https://www.merriam-webster.com/dictionary/wife"]
  ],[]);
  entry("youth",[
   ["period","青春时期；青年时代","n.",["青春时期","青年时代","年轻","青春","青年时期"],["youth-period"],"She spent her youth in a fishing village.","她在一个渔村度过了青春时光。",null,"https://www.merriam-webster.com/dictionary/youth"],
   ["young-man","青年男子","n.",["青年男子"],["youth-young-man"],"A youth in a red jacket asked for directions.","一位穿红夹克的青年问了路。",null,"https://www.merriam-webster.com/dictionary/youth"],
   ["young-people","青年人；年轻一代","n.",["青年人","年轻一代","青年们","青年"],["youth-young-people"],"The centre offers free classes for local youth.","这个中心为当地青年提供免费课程。",null,"https://www.merriam-webster.com/dictionary/youth"]
  ],[]);
  entry("guest",[
   ["visitor","客人；来宾","n.",["客人","来宾","旅客"],["guest-visitor"],"We have two guests staying this weekend.","这周末有两位客人来住。",null,"https://www.merriam-webster.com/dictionary/guest"],
   ["performer","特邀嘉宾","n.",["特邀嘉宾"],["guest-performer"],"The actor appeared as a guest on the programme.","这位演员作为特邀嘉宾参加了节目。",null,"https://www.merriam-webster.com/dictionary/guest"]
  ],[{"terms":["客体"],"decision":"scope-excluded","reason":"客体需计算机或技术上下文，本批只训练来宾和特邀嘉宾。","source":"https://www.merriam-webster.com/dictionary/guest"}]);
  entry("customer",[
   ["buyer","顾客；客户","n.",["顾客","客户","消费者"],["customer-buyer"],"The customer asked for a receipt.","顾客要了一张收据。",null,"https://www.merriam-webster.com/dictionary/customer"],
   ["person","某种类型的人","n.",["某种类型的人"],["customer-person"],"He is a tough customer in negotiations.","他在谈判中是个难对付的人。","tough customer","https://www.merriam-webster.com/dictionary/customer"]
  ],[]);
  entry("engagement",[
   ["marriage","订婚；婚约","n.",["订婚","婚约"],["engagement-marriage"],"They announced their engagement last spring.","他们去年春天宣布订婚。",null,"https://www.merriam-webster.com/dictionary/engagement"],
   ["appointment","约会；约定的安排","n.",["约会","约定的安排"],["engagement-appointment"],"I have a prior engagement that evening.","那天晚上我已有约。",null,"https://www.merriam-webster.com/dictionary/engagement"],
   ["involvement","参与；投入","n.",["参与","投入"],["engagement-involvement"],"The project increased student engagement.","这个项目提高了学生的参与度。",null,"https://www.merriam-webster.com/dictionary/engagement"],
   ["battle","交战；战斗","n.",["交战","战斗"],["engagement-battle"],"The fleet lost two ships in the engagement.","舰队在这场交战中损失了两艘船。",null,"https://www.merriam-webster.com/dictionary/engagement"]
  ],[{"terms":["诺言","衔接"],"decision":"scope-excluded","reason":"衔接属机械等专门语境；订婚与一般诺言不完全等同。","source":"https://www.merriam-webster.com/dictionary/engagement"}]);
  entry("appoint",[
   ["select","任命；委派","v.",["任命","委派","派","派任"],["appoint-select"],"They appointed her director of the museum.","他们任命她为博物馆馆长。",null,"https://www.merriam-webster.com/dictionary/appoint"],
   ["fix","指定；约定","v.",["指定","约定"],["appoint-fix"],"The committee appointed a day for the hearing.","委员会指定了听证日期。",null,"https://www.merriam-webster.com/dictionary/appoint"]
  ],[{"terms":["下令"],"decision":"scope-excluded","reason":"下令过于宽泛，任命与指定日期已分别训练。","source":"https://www.merriam-webster.com/dictionary/appoint"}]);
  entry("married",[
   ["spouse","已婚的","adj.",["已婚的","结了婚的","有配偶的"],["married-spouse"],"Both applicants are married.","两名申请人都已婚。",null,"https://www.merriam-webster.com/dictionary/married"],
   ["related","婚姻的；夫妻的","adj.",["婚姻的","夫妻的","夫妇的"],["married-related"],"They enjoyed a long and happy married life.","他们度过了漫长而幸福的婚姻生活。",null,"https://www.merriam-webster.com/dictionary/married"]
  ],[]);
  entry("individual",[
   ["single","单独的；个别的","adj.",["单独的","个别的","个人的"],["individual-single"],"Each individual ticket has a different number.","每张单独的票都有不同的号码。",null,"https://www.merriam-webster.com/dictionary/individual"],
   ["distinctive","独特的；有个性的","adj.",["独特的","有个性的"],["individual-distinctive"],"Her paintings have a highly individual style.","她的画风格十分独特。",null,"https://www.merriam-webster.com/dictionary/individual"],
   ["person","个人；个体","n.",["个人","个体","人"],["individual-person"],"The law protects the rights of the individual.","法律保护个人权利。",null,"https://www.merriam-webster.com/dictionary/individual"]
  ],[]);
  entry("divorce",[
   ["ending","离婚","n.",["离婚"],["divorce-ending"],"Their divorce was finalized in June.","他们的离婚手续在六月办完。",null,"https://www.merriam-webster.com/dictionary/divorce"],
   ["end-marriage","与……离婚；离婚","v.",["与……离婚","离婚","与...离婚"],["divorce-end-marriage"],"She divorced her husband after ten years of marriage.","结婚十年后，她与丈夫离婚了。",null,"https://www.merriam-webster.com/dictionary/divorce"],
   ["separate","使脱离；使分离","v.",["使脱离","使分离"],["divorce-separate"],"You cannot divorce this decision from its political context.","你不能把这个决定与其政治背景割裂开来。","divorce from","https://www.merriam-webster.com/dictionary/divorce"]
  ],[]);
  entry("boss",[
   ["manager","老板；上司","n.",["老板","上司"],["boss-manager"],"My boss approved the request.","我的上司批准了申请。",null,"https://www.merriam-webster.com/dictionary/boss"],
   ["order","对……发号施令","v.",["对……发号施令"],["boss-order","sharp-forceful-speech"],"Stop bossing your younger brother around.","别再对你弟弟发号施令了。","boss around","https://www.merriam-webster.com/dictionary/boss"],
   ["projection","凸起；凸饰","n.",["凸起","凸饰","岩瘤","浮雕"],["boss-projection"],"A brass boss decorated the centre of the shield.","一块黄铜凸饰装饰着盾牌中心。",null,"https://www.merriam-webster.com/dictionary/boss"]
  ],[{"terms":["母牛","指挥","控制"],"decision":"scope-excluded","reason":"母牛为称呼用法；一般控制不与对人发号施令完全互换。","source":"https://www.merriam-webster.com/dictionary/boss"}]);
  entry("committee",[
   ["group","委员会","n.",["委员会"],["committee-group"],"The committee will vote on the proposal tomorrow.","委员会明天将对提案投票。",null,"https://www.merriam-webster.com/dictionary/committee"]
  ],[]);
  entry("beg",[
   ["request","恳求；乞求","v.",["恳求","乞求","请求"],["beg-request"],"I beg you to reconsider the decision.","我恳求你重新考虑这个决定。",null,"https://www.merriam-webster.com/dictionary/beg"],
   ["alms","乞讨","v.",["乞讨"],["beg-alms"],"He was forced to beg in the street.","他被迫在街头乞讨。",null,"https://www.merriam-webster.com/dictionary/beg"]
  ],[]);
  entry("act",[
   ["do","行动；做事","v.",["行动","做事","采取行动"],["act-do"],"We must act before the river floods.","我们必须在河水泛滥前行动。",null,"https://www.merriam-webster.com/dictionary/act"],
   ["perform","表演；扮演","v.",["表演","扮演"],["act-perform"],"She acted in several school plays.","她出演过几部校园剧。",null,"https://www.merriam-webster.com/dictionary/act"],
   ["behave","表现；举止","v.",["表现","举止"],["act-behave"],"He acted as though nothing had happened.","他表现得好像什么都没发生。",null,"https://www.merriam-webster.com/dictionary/act"],
   ["serve","起作用；担任","v.",["起作用","担任"],["act-serve"],"The sofa acts as a spare bed.","这张沙发可以充当备用床。","act as","https://www.merriam-webster.com/dictionary/act"],
   ["deed","行为；举动","n.",["行为","举动"],["act-deed"],"It was a simple act of kindness.","那是一个朴素的善举。",null,"https://www.merriam-webster.com/dictionary/act"],
   ["law","法令；法案","n.",["法令","法案"],["act-law"],"The act gives tenants new rights.","这项法令赋予租户新的权利。",null,"https://www.merriam-webster.com/dictionary/act"],
   ["division","一幕","n.",["一幕"],["act-division"],"The first act ends with the king's departure.","第一幕以国王离去结束。",null,"https://www.merriam-webster.com/dictionary/act"]
  ],[{"terms":["假装"],"decision":"scope-excluded","reason":"假装需 act as if 等搭配，本批举止例句已呈现表现方式，不设独立假装题。","source":"https://www.merriam-webster.com/dictionary/act"}]);
  entry("react",[
   ["respond","反应；作出回应","v.",["反应","作出回应","起反应","应答"],["react-respond"],"How did she react to the invitation?","她对邀请作何反应？",null,"https://www.merriam-webster.com/dictionary/react"],
   ["chemical","发生化学反应","v.",["发生化学反应","发生反应"],["react-chemical"],"The metal reacts with water to release hydrogen.","这种金属与水反应释放氢气。",null,"https://www.merriam-webster.com/dictionary/react"]
  ],[{"terms":["起作用","反攻"],"decision":"scope-excluded","reason":"反攻及一般起作用未并入回应或化学反应。","source":"https://www.merriam-webster.com/dictionary/react"}]);
  entry("reflect",[
   ["light","反射","v.",["反射","被反射","映出"],["reflect-light"],"The mirror reflected the sunlight onto the wall.","镜子把阳光反射到了墙上。",null,"https://www.merriam-webster.com/dictionary/reflect"],
   ["show","反映；显示","v.",["反映","显示"],["reflect-show"],"The results reflect a change in public opinion.","结果反映了公众看法的变化。",null,"https://www.merriam-webster.com/dictionary/reflect"],
   ["think","认真思考；反省","v.",["认真思考","反省","深思","考虑"],["reflect-think","ponder-reason"],"She reflected on what she had learned.","她认真思考了自己学到的东西。","reflect on","https://www.merriam-webster.com/dictionary/reflect"]
  ],[{"terms":["招致","指责"],"decision":"scope-excluded","reason":"招致和指责需要特定搭配，不能替代反射、显示或思考。","source":"https://www.merriam-webster.com/dictionary/reflect"}]);
  entry("activity",[
   ["action","活动；事情","n.",["活动","事情","行动"],["activity-action"],"Swimming is her favourite outdoor activity.","游泳是她最喜欢的户外活动。",null,"https://www.merriam-webster.com/dictionary/activity"],
   ["motion","活跃状态；活动量","n.",["活跃状态","活动量","活跃","活力"],["activity-motion"],"The volcano showed signs of renewed activity.","这座火山出现了重新活动的迹象。",null,"https://www.merriam-webster.com/dictionary/activity"]
  ],[]);
  entry("active",[
   ["busy","活跃的；积极的","adj.",["活跃的","积极的","主动的"],["active-busy"],"She remains active in local politics.","她仍然积极参与地方政治。",null,"https://www.merriam-webster.com/dictionary/active"],
   ["operating","起作用的；运行中的","adj.",["起作用的","运行中的","有效的","活性的","现行的","现役的"],["active-operating"],"Only three accounts are still active.","只有三个账户仍在使用。",null,"https://www.merriam-webster.com/dictionary/active"],
   ["volcano","活火山的；仍在活动的","adj.",["活火山的","仍在活动的"],["active-volcano"],"The island has two active volcanoes.","这座岛有两座活火山。",null,"https://www.merriam-webster.com/dictionary/active"],
   ["grammar","主动语态的","adj.",["主动语态的"],["active-grammar"],"Rewrite the sentence in the active voice.","把这个句子改成主动语态。",null,"https://www.merriam-webster.com/dictionary/active"]
  ],[{"terms":["主动语态","积极分子"],"decision":"scope-excluded","reason":"名词主动语态与积极分子未单列，语法形容词已配例句。","source":"https://www.merriam-webster.com/dictionary/active"}]);
  entry("revive",[
   ["recover","使苏醒；恢复生机","v.",["使苏醒","恢复生机","苏醒","复苏","使振作"],["revive-recover","revive-refresh"],"Fresh air soon revived the exhausted runner.","新鲜空气很快使筋疲力尽的跑步者恢复了精神。",null,"https://www.merriam-webster.com/dictionary/revive"],
   ["restore","使重新流行；恢复","v.",["使重新流行","恢复","复兴","重新上演","重新唤起"],["revive-restore"],"The theatre revived a play from the 1920s.","剧院重新上演了一部二十世纪二十年代的戏。",null,"https://www.merriam-webster.com/dictionary/revive"]
  ],[]);
  entry("peer",[
   ["equal","同龄人；同辈；同等地位的人","n.",["同龄人","同辈","同等地位的人","同等的人"],["peer-equal"],"Children often copy the behaviour of their peers.","孩子们经常模仿同龄人的行为。",null,"https://www.merriam-webster.com/dictionary/peer"],
   ["noble","贵族","n.",["贵族"],["peer-noble"],"The peer took his seat in the upper chamber.","这位贵族在上议院就座。",null,"https://www.merriam-webster.com/dictionary/peer"],
   ["look","凝视；费力地看","v.",["凝视","费力地看","窥视"],["peer-look","look-gaze"],"She peered through the dusty window.","她透过满是灰尘的窗户仔细看。",null,"https://www.merriam-webster.com/dictionary/peer"]
  ],[{"terms":["匹敌","隐现","与...同等","封为贵族"],"decision":"scope-excluded","reason":"匹敌和封爵的动词与同辈、贵族名词不同；隐现不等于费力地看。","source":"https://www.merriam-webster.com/dictionary/peer"}]);
  entry("vow",[
   ["promise","誓言；郑重承诺的话","n.",["誓言","郑重承诺的话","誓约","郑重宣言"],["vow-promise"],"They exchanged vows beneath an old oak tree.","他们在一棵老橡树下互许誓言。",null,"https://www.merriam-webster.com/dictionary/vow"],
   ["promise-verb","发誓；郑重承诺","v.",["发誓","郑重承诺","许愿","起誓","立誓","起誓要","郑重地宣布"],["vow-promise-verb","say-promise"],"He vowed never to return to the island.","他发誓再也不回那座岛。",null,"https://www.merriam-webster.com/dictionary/vow"]
  ],[]);
  entry("argument",[
   ["dispute","争论；争吵","n.",["争论","争吵"],["argument-dispute"],"They had an argument about the rent.","他们为房租争吵了一番。",null,"https://www.merriam-webster.com/dictionary/argument"],
   ["reason","论点；论据","n.",["论点","论据","论证"],["argument-reason"],"Her strongest argument concerns public safety.","她最有力的论点涉及公共安全。",null,"https://www.merriam-webster.com/dictionary/argument"]
  ],[{"terms":["自变量","参数"],"decision":"scope-excluded","reason":"参数与自变量为计算或数学术语，本批只收录争论和论据。","source":"https://www.merriam-webster.com/dictionary/argument"}]);
  entry("reply",[
   ["respond","回答；答复","v.",["回答","答复","答辩","回击"],["reply-respond"],"He replied to my message within an hour.","他在一小时内回复了我的消息。",null,"https://www.merriam-webster.com/dictionary/reply"],
   ["answer","答复；回复内容","n.",["答复","回复内容"],["reply-answer"],"We are still waiting for a reply.","我们还在等答复。",null,"https://www.merriam-webster.com/dictionary/reply"]
  ],[{"terms":["反响"],"decision":"scope-excluded","reason":"反响可含非语言效果，不作为答复的通用同义词。","source":"https://www.merriam-webster.com/dictionary/reply"}]);
  entry("explanation",[
   ["account","解释；说明","n.",["解释","说明","辩解","表明","注释"],["explanation-account"],"The teacher gave a clear explanation of the rule.","老师清楚地解释了这条规则。",null,"https://www.merriam-webster.com/dictionary/explanation"],
   ["reason","原因；理由","n.",["原因","理由"],["explanation-reason"],"There must be an explanation for the missing files.","文件丢失一定有原因。",null,"https://www.merriam-webster.com/dictionary/explanation"]
  ],[]);
  entry("argue",[
   ["disagree","争论；争吵","v.",["争论","争吵","辩论"],["argue-disagree"],"The neighbours argued over the parking space.","邻居们为停车位争吵。",null,"https://www.merriam-webster.com/dictionary/argue"],
   ["reason","论证；主张","v.",["论证","主张","提出理由"],["argue-reason"],"She argued that the bridge should be repaired.","她主张应当修缮这座桥。",null,"https://www.merriam-webster.com/dictionary/argue"],
   ["indicate","表明；证明","v.",["表明","证明"],["argue-indicate"],"The empty shelves argue a lack of supplies.","空空的货架表明物资短缺。",null,"https://www.merriam-webster.com/dictionary/argue"]
  ],[{"terms":["说服"],"decision":"scope-excluded","reason":"说服需 argue into 等结果性搭配，提出论证不保证说服成功。","source":"https://www.merriam-webster.com/dictionary/argue"}]);
  entry("swear",[
   ["curse","咒骂；说脏话","v.",["咒骂","说脏话","诅咒"],["swear-curse"],"He swore when he dropped the hammer on his foot.","锤子掉到脚上时，他骂了一句。",null,"https://www.merriam-webster.com/dictionary/swear"],
   ["oath","发誓；宣誓","v.",["发誓","宣誓"],["swear-oath","say-promise"],"The witness swore to tell the truth.","证人宣誓说实话。",null,"https://www.merriam-webster.com/dictionary/swear"],
   ["insist","坚称；断言","v.",["坚称","断言"],["swear-insist"],"I could swear I left the keys here.","我敢肯定把钥匙放在了这里。",null,"https://www.merriam-webster.com/dictionary/swear"]
  ],[{"terms":["使宣誓","誓言"],"decision":"scope-excluded","reason":"使某人宣誓与自己宣誓不同；誓言名词不作为本批动词答案。","source":"https://www.merriam-webster.com/dictionary/swear"}]);
  entry("clap",[
   ["applaud","拍手；鼓掌","v.",["拍手","鼓掌"],["clap-applaud"],"The audience clapped as the dancers returned.","舞者返场时，观众鼓起掌来。",null,"https://www.merriam-webster.com/dictionary/clap"],
   ["put","迅速放置；猛拍","v.",["迅速放置","猛拍","(使)啪地关上"],["clap-put"],"He clapped a hand over his mouth.","他猛地用一只手捂住了嘴。",null,"https://www.merriam-webster.com/dictionary/clap"],
   ["sound","拍击声；霹雳声","n.",["拍击声","霹雳声","拍手声"],["clap-sound"],"A loud clap of thunder shook the windows.","一声响雷震得窗户晃动。",null,"https://www.merriam-webster.com/dictionary/clap"]
  ],[{"terms":["花柳病"],"decision":"scope-excluded","reason":"性病俚语不纳入本批拍手和拍击范围。","source":"https://www.merriam-webster.com/dictionary/clap"}]);
  entry("urgent",[
   ["pressing","紧急的；迫切的","adj.",["紧急的","迫切的","急迫的"],["urgent-pressing","prompt-urgent"],"The hospital issued an urgent appeal for blood donors.","医院发出了紧急献血呼吁。",null,"https://www.merriam-webster.com/dictionary/urgent"],
   ["insistent","急切的；坚持要求的","adj.",["急切的","坚持要求的","催逼的"],["urgent-insistent"],"There was an urgent note in her voice.","她的声音里带着急切。",null,"https://www.merriam-webster.com/dictionary/urgent"]
  ],[]);
  entry("follow",[
   ["behind","跟随；跟在后面","v.",["跟随","跟在后面","沿行","追随"],["follow-behind","follow-person"],"Follow the guide through the narrow passage.","跟着导游穿过狭窄的通道。",null,"https://www.merriam-webster.com/dictionary/follow"],
   ["obey","遵循；听从","v.",["遵循","听从"],["follow-obey"],"Please follow the instructions on the label.","请遵循标签上的说明。",null,"https://www.merriam-webster.com/dictionary/follow"],
   ["understand","理解；听懂","v.",["理解","听懂"],["follow-understand"],"I could not follow his explanation.","我没听懂他的解释。",null,"https://www.merriam-webster.com/dictionary/follow"],
   ["after","接着发生；继……之后","v.",["接着发生","继……之后","接着"],["follow-after"],"A long silence followed the announcement.","公告之后是一阵长久的沉默。",null,"https://www.merriam-webster.com/dictionary/follow"],
   ["result","由此得出；必然发生","v.",["由此得出","必然发生"],["follow-result"],"It follows that the original estimate was too low.","由此可见，最初的估算过低。",null,"https://www.merriam-webster.com/dictionary/follow"],
   ["track","关注；追踪","v.",["关注","追踪"],["follow-track"],"She follows local politics closely.","她密切关注地方政治。",null,"https://www.merriam-webster.com/dictionary/follow"]
  ],[{"terms":["追求"],"decision":"scope-excluded","reason":"追求需职业或目标语境，不与尾随或理解简单互换。","source":"https://www.merriam-webster.com/dictionary/follow"}]);
  entry("loosen",[
   ["less-tight","松开；使变松","v.",["松开","使变松","放松","变松","松弛"],["loosen-less-tight"],"Loosen the straps before removing the pack.","先松开带子，再卸下背包。",null,"https://www.merriam-webster.com/dictionary/loosen"],
   ["less-strict","放宽；减轻限制","v.",["放宽","减轻限制","解除"],["loosen-less-strict"],"The city loosened restrictions on outdoor dining.","这座城市放宽了对户外餐饮的限制。",null,"https://www.merriam-webster.com/dictionary/loosen"]
  ],[]);
  entry("mess",[
   ["disorder","杂乱；脏乱","n.",["杂乱","脏乱","混乱","乱七八糟"],["mess-disorder"],"The kitchen was a mess after the party.","聚会后厨房一片狼藉。",null,"https://www.merriam-webster.com/dictionary/mess"],
   ["predicament","困境；混乱局面","n.",["困境","混乱局面","陷入困境"],["mess-predicament"],"How did we get into this financial mess?","我们怎么陷入了这种财务困境？",null,"https://www.merriam-webster.com/dictionary/mess"],
   ["dirty","弄脏；弄乱","v.",["弄脏","弄乱","将...弄糟","妨碍","使紊乱","搞乱"],["mess-dirty"],"The dog messed up the clean floor.","狗把干净的地板弄脏了。","mess up","https://www.merriam-webster.com/dictionary/mess"],
   ["dining","军人食堂；集体用餐处","n.",["军人食堂","集体用餐处","食堂","伙食","用膳","一份食品","使就餐"],["mess-dining"],"The officers ate together in the mess.","军官们在军人食堂一起用餐。",null,"https://www.merriam-webster.com/dictionary/mess"]
  ],[]);
  entry("attract",[
   ["draw","吸引；引起注意","v.",["吸引","引起注意","诱惑","有吸引力"],["attract-draw","attract-entice"],"The exhibition attracted visitors from abroad.","展览吸引了海外游客。",null,"https://www.merriam-webster.com/dictionary/attract"],
   ["physical","吸引（物理作用）","v.",["吸引（物理作用）"],["attract-physical","physical-attractive-force"],"A magnet attracts small iron objects.","磁铁会吸引小铁物件。",null,"https://www.merriam-webster.com/dictionary/attract"]
  ],[]);
  entry("astonish",[
   ["surprise","使惊讶；使震惊","v.",["使惊讶","使震惊","使十分惊讶","使大为吃惊"],["astonish-surprise"],"Her quick recovery astonished the doctors.","她恢复得如此之快，令医生们惊讶。",null,"https://www.merriam-webster.com/dictionary/astonish"]
  ],[]);
  entry("annoy",[
   ["irritate","使恼怒；使烦躁","v.",["使恼怒","使烦躁","使烦恼","打扰","骚扰"],["annoy-irritate","annoy-disrupt"],"The constant tapping annoyed everyone nearby.","不停的敲击声让附近所有人都烦躁。",null,"https://www.merriam-webster.com/dictionary/annoy"]
  ],[]);
  entry("upset",[
   ["distress","使心烦；使难过","v.",["使心烦","使难过"],["upset-distress","distress-upset"],"The harsh criticism upset him.","严厉的批评让他很难过。",null,"https://www.merriam-webster.com/dictionary/upset"],
   ["disrupt","打乱；扰乱","v.",["打乱","扰乱"],["upset-disrupt"],"The delay upset our travel plans.","延误打乱了我们的旅行计划。",null,"https://www.merriam-webster.com/dictionary/upset"],
   ["overturn","打翻；使倾覆","v.",["打翻","使倾覆","弄翻","颠覆","推翻","翻倒"],["upset-overturn"],"A wave upset the small boat.","一个浪打翻了小船。",null,"https://www.merriam-webster.com/dictionary/upset"],
   ["stomach","使肠胃不适","v.",["使肠胃不适","使不适"],["upset-stomach"],"Rich food often upsets my stomach.","油腻的食物常让我肠胃不适。",null,"https://www.merriam-webster.com/dictionary/upset"],
   ["distressed","心烦的；难过的","adj.",["心烦的","难过的"],["upset-distressed"],"She was upset about losing the letter.","丢了那封信让她很难过。",null,"https://www.merriam-webster.com/dictionary/upset"],
   ["surprise-win","爆冷门；意外胜利","n.",["爆冷门","意外胜利"],["upset-surprise-win"],"The unseeded player caused a major upset.","这位非种子选手爆出了一个大冷门。",null,"https://www.merriam-webster.com/dictionary/upset"]
  ],[{"terms":["弄翻的","混乱的"],"decision":"scope-excluded","reason":"弄翻的与混乱的旧形容词未单列，本批保留明确的动词及难过形容词。","source":"https://www.merriam-webster.com/dictionary/upset"}]);
  entry("bewilder",[
   ["confuse","使困惑；使不知所措","v.",["使困惑","使不知所措","使迷惑","使糊涂","难住"],["bewilder-confuse"],"The maze of corridors bewildered the visitors.","迷宫般的走廊让访客们不知所措。",null,"https://www.merriam-webster.com/dictionary/bewilder"]
  ],[]);
  entry("ironic",[
   ["opposite","具有讽刺意味的","adj.",["具有讽刺意味的","令人啼笑皆非的"],["ironic-opposite"],"It was ironic that the fire station burned down.","消防站竟然烧毁了，真有讽刺意味。",null,"https://www.merriam-webster.com/dictionary/ironic"],
   ["sarcastic","反讽的；挖苦的","adj.",["反讽的","挖苦的","讽刺的"],["ironic-sarcastic"],"His ironic remark about the lovely weather came during a storm.","暴风雨中，他反讽地说天气真好。",null,"https://www.merriam-webster.com/dictionary/ironic"]
  ],[{"terms":["出乎意料的"],"decision":"scope-excluded","reason":"仅仅出乎意料不一定有反讽意味，旧译不作任意意外事件的同义答案。","source":"https://www.merriam-webster.com/dictionary/ironic"}]);
  entry("panic",[
   ["fear","恐慌；惊慌","n.",["恐慌","惊慌"],["panic-fear"],"Panic spread when the lights went out.","灯熄灭后，恐慌蔓延开来。",null,"https://www.merriam-webster.com/dictionary/panic"],
   ["lose-control","惊慌失措；使恐慌","v.",["惊慌失措","使恐慌","使惊慌"],["panic-lose-control"],"Do not panic if you miss the first exit.","如果错过第一个出口，不要惊慌。",null,"https://www.merriam-webster.com/dictionary/panic"]
  ],[{"terms":["惊慌的","没有理由的","恐慌的","使狂热"],"decision":"scope-excluded","reason":"形容词与狂热旧译未纳入本批，恐慌并不必然没有理由。","source":"https://www.merriam-webster.com/dictionary/panic"}]);
  entry("terrify",[
   ["frighten","使极度恐惧","v.",["使极度恐惧","使恐惧","使极度害怕","恐吓"],["terrify-frighten","fear-cause","intimidate-bully"],"The thought of falling terrified the climber.","想到会跌落，这位攀岩者恐惧万分。",null,"https://www.merriam-webster.com/dictionary/terrify"]
  ],[]);
  entry("bully",[
   ["person","恃强凌弱者；霸凌者","n.",["恃强凌弱者","霸凌者","欺凌弱小者","土霸"],["bully-person"],"The bully demanded the younger boy's lunch money.","霸凌者索要那个小男孩的午饭钱。",null,"https://www.merriam-webster.com/dictionary/bully"],
   ["intimidate","欺凌；威吓","v.",["欺凌","威吓","威胁","恐吓","欺负"],["bully-intimidate","intimidate-bully"],"They bullied him into handing over the password.","他们威胁他交出密码。",null,"https://www.merriam-webster.com/dictionary/bully"]
  ],[{"terms":["特好的","第一流的","十分"],"decision":"scope-excluded","reason":"特好的及十分属较少见的感叹或修饰用法，不与欺凌者混合。","source":"https://www.merriam-webster.com/dictionary/bully"}]);
  entry("tempt",[
   ["entice","引诱；诱使","v.",["引诱","诱使","诱惑"],["tempt-entice","attract-entice"],"The discount tempted me to buy another pair.","折扣让我忍不住想再买一双。",null,"https://www.merriam-webster.com/dictionary/tempt"],
   ["attract","吸引；使想要","v.",["吸引","使想要","引起...的兴趣"],["tempt-attract","attract-entice"],"Would a walk by the sea tempt you?","去海边散步能吸引你吗？",null,"https://www.merriam-webster.com/dictionary/tempt"]
  ],[{"terms":["冒...风险"],"decision":"scope-excluded","reason":"冒风险需 tempt fate 等搭配，不泛化为所有风险行为。","source":"https://www.merriam-webster.com/dictionary/tempt"}]);
  entry("designate",[
   ["name","指定；选定","v.",["指定","选定"],["designate-name"],"They designated a safe area for the children.","他们为孩子们指定了一片安全区域。",null,"https://www.merriam-webster.com/dictionary/designate"],
   ["denote","标示；表示","v.",["标示","表示","指明","称呼"],["designate-denote"],"A red dot designates your current location.","红点表示你当前的位置。",null,"https://www.merriam-webster.com/dictionary/designate"],
   ["appointed","已任命尚未就职的","adj.",["已任命尚未就职的","已选出而未上任的"],["designate-appointed"],"The ambassador designate will arrive next month.","候任大使将于下个月抵达。",null,"https://www.merriam-webster.com/dictionary/designate"]
  ],[]);
  entry("distribute",[
   ["share","分发；分配","v.",["分发","分配"],["distribute-share"],"Volunteers distributed blankets to the families.","志愿者向这些家庭分发了毯子。",null,"https://www.merriam-webster.com/dictionary/distribute"],
   ["spread","使分布；使散布","v.",["使分布","使散布","散布"],["distribute-spread"],"Distribute the seeds evenly over the soil.","把种子均匀撒在土壤上。",null,"https://www.merriam-webster.com/dictionary/distribute"],
   ["supply","经销；配送","v.",["经销","配送"],["distribute-supply"],"The company distributes medical supplies nationwide.","这家公司向全国配送医疗用品。",null,"https://www.merriam-webster.com/dictionary/distribute"]
  ],[]);
  entry("reverse",[
   ["opposite","相反的；反向的","adj.",["相反的","反向的","相反","反面的","颠倒的"],["reverse-opposite"],"Repeat the steps in reverse order.","按相反顺序重复这些步骤。",null,"https://www.merriam-webster.com/dictionary/reverse"],
   ["back","背面；反面","n.",["背面","反面"],["reverse-back"],"The date is printed on the reverse of the coin.","日期印在硬币背面。",null,"https://www.merriam-webster.com/dictionary/reverse"],
   ["setback","挫折；失败","n.",["挫折","失败"],["reverse-setback"],"The army suffered a serious reverse at the river.","军队在河边遭遇了严重挫败。",null,"https://www.merriam-webster.com/dictionary/reverse"],
   ["change","使逆转；颠倒","v.",["使逆转","颠倒","使颠倒","使倒退","使反向","反向","倒转","反转"],["reverse-change"],"The new evidence reversed the court's decision.","新证据推翻了法院的判决。",null,"https://www.merriam-webster.com/dictionary/reverse"],
   ["backward","倒车","v.",["倒车"],["reverse-backward"],"She reversed into the parking space.","她倒车驶入停车位。",null,"https://www.merriam-webster.com/dictionary/reverse"]
  ],[{"terms":["倒退"],"decision":"scope-excluded","reason":"车辆倒车已收录；一般倒退不能覆盖所有逆转意义。","source":"https://www.merriam-webster.com/dictionary/reverse"}]);
  entry("assure",[
   ["reassure","向……保证；使确信","v.",["向……保证","使确信","保证"],["assure-reassure"],"The doctor assured us that the treatment was safe.","医生向我们保证治疗是安全的。",null,"https://www.merriam-webster.com/dictionary/assure"],
   ["ensure","确保；使有保障","v.",["确保","使有保障","保障"],["assure-ensure"],"A strong harvest assures a steady food supply.","丰收保证了稳定的食物供应。",null,"https://www.merriam-webster.com/dictionary/assure"]
  ],[{"terms":["弄清楚","担保","确信"],"decision":"scope-excluded","reason":"弄清楚需 assure oneself 等构式；保证的内容不自动等于担保人身份。","source":"https://www.merriam-webster.com/dictionary/assure"}]);
  entry("wish",[
   ["desire","希望；但愿","v.",["希望","但愿","愿","想要"],["wish-desire","want-desire"],"I wish I could stay longer.","我希望自己能再多留一会儿。",null,"https://www.merriam-webster.com/dictionary/wish"],
   ["express","祝愿","v.",["祝愿"],["wish-express"],"We wish you a safe journey.","我们祝你一路平安。",null,"https://www.merriam-webster.com/dictionary/wish"],
   ["wanted","愿望；心愿","n.",["愿望","心愿"],["wish-wanted","desire-noun"],"Her wish was to see the ocean.","她的心愿是看到大海。",null,"https://www.merriam-webster.com/dictionary/wish"]
  ],[{"terms":["命令","请求"],"decision":"scope-excluded","reason":"正式请求或命令用法需语境，本批训练愿望与祝愿。","source":"https://www.merriam-webster.com/dictionary/wish"}]);
  entry("attempt",[
   ["try","尝试；试图","v.",["尝试","试图","企图"],["attempt-try"],"They attempted to repair the engine themselves.","他们试图自己修理发动机。",null,"https://www.merriam-webster.com/dictionary/attempt"],
   ["effort","一次尝试；努力","n.",["一次尝试","努力"],["attempt-effort"],"Her first attempt ended in failure.","她的第一次尝试以失败告终。",null,"https://www.merriam-webster.com/dictionary/attempt"],
   ["attack","袭击企图","n.",["袭击企图"],["attempt-attack"],"The guards prevented an attempt on the minister's life.","警卫阻止了一次刺杀部长的企图。","attempt on someone's life","https://www.merriam-webster.com/dictionary/attempt"]
  ],[]);
  entry("strive",[
   ["endeavour","努力；力求","v.",["努力","力求","奋斗"],["strive-endeavour"],"We strive to keep the service affordable.","我们努力让服务价格保持在可负担范围内。",null,"https://www.merriam-webster.com/dictionary/strive"],
   ["contend","斗争；抗争","v.",["斗争","抗争"],["strive-contend"],"The campaigners strove against unfair laws.","活动人士奋力反对不公正的法律。","strive against","https://www.merriam-webster.com/dictionary/strive"]
  ],[]);
  entry("sort",[
   ["kind","种类；类型","n.",["种类","类型","某一类人"],["sort-kind"],"What sort of music do you enjoy?","你喜欢什么类型的音乐？",null,"https://www.merriam-webster.com/dictionary/sort"],
   ["classify","分类；整理","v.",["分类","整理","排序","挑选"],["sort-classify"],"Sort the bottles by colour.","按颜色给瓶子分类。",null,"https://www.merriam-webster.com/dictionary/sort"],
   ["resolve","解决；处理好","v.",["解决","处理好","妥善处理"],["sort-resolve"],"We need to sort out the payment problem.","我们需要解决付款问题。","sort out","https://www.merriam-webster.com/dictionary/sort"]
  ],[]);
  entry("launch",[
   ["start","发起；推出","v.",["发起","推出","发动","投入"],["launch-start","begin-launch"],"The charity launched a campaign to protect wetlands.","慈善机构发起了保护湿地的活动。",null,"https://www.merriam-webster.com/dictionary/launch"],
   ["send","发射；使升空","v.",["发射","使升空","起飞"],["launch-send"],"They launched the satellite at dawn.","他们在黎明时发射了卫星。",null,"https://www.merriam-webster.com/dictionary/launch"],
   ["boat","使船下水","v.",["使船下水","下水","使下水"],["launch-boat"],"We launched the canoe from the beach.","我们从沙滩上把独木舟推入水中。",null,"https://www.merriam-webster.com/dictionary/launch"],
   ["beginning","启动；发布","n.",["启动","发布"],["launch-beginning"],"The product launch attracted hundreds of visitors.","产品发布会吸引了数百名参观者。",null,"https://www.merriam-webster.com/dictionary/launch"],
   ["motorboat","汽艇；交通艇","n.",["汽艇","交通艇"],["launch-motorboat"],"A small launch carried us to the island.","一艘小汽艇载我们去了岛上。",null,"https://www.merriam-webster.com/dictionary/launch"]
  ],[{"terms":["开始"],"decision":"scope-excluded","reason":"开始已作为发起活动收录，不把所有开始动作归入发射。","source":"https://www.merriam-webster.com/dictionary/launch"}]);
  entry("commence",[
   ["begin","开始；着手","v.",["开始","着手","(使)开始"],["commence-begin","begin-launch"],"Construction will commence in March.","工程将于三月开始。",null,"https://www.merriam-webster.com/dictionary/commence"]
  ],[{"terms":["得学位"],"decision":"scope-excluded","reason":"取得学位属较少见用法，本批只收录开始。","source":"https://www.merriam-webster.com/dictionary/commence"}]);
  entry("exploit",[
   ["use","利用","v.",["利用","开发","开拓"],["exploit-use"],"The building exploits natural light to reduce energy use.","这座建筑利用自然光减少能耗。",null,"https://www.merriam-webster.com/dictionary/exploit"],
   ["unfair","剥削；不公正地利用","v.",["剥削","不公正地利用"],["exploit-unfair"],"The employer exploited workers by withholding their wages.","雇主扣留工人工资，剥削工人。",null,"https://www.merriam-webster.com/dictionary/exploit"],
   ["deed","英勇事迹；非凡业绩","n.",["英勇事迹","非凡业绩","功绩","勋绩"],["exploit-deed"],"The sailor described his exploits at sea.","这位水手讲述了自己在海上的非凡经历。",null,"https://www.merriam-webster.com/dictionary/exploit"]
  ],[]);
  entry("explore",[
   ["travel","探索；勘探","v.",["探索","勘探","探险","探测"],["explore-travel"],"The team explored a cave beneath the hill.","团队探索了山下的一个洞穴。",null,"https://www.merriam-webster.com/dictionary/explore"],
   ["study","探讨；研究","v.",["探讨","研究","探究"],["explore-study"],"The report explores several ways to reduce waste.","报告探讨了几种减少浪费的方法。",null,"https://www.merriam-webster.com/dictionary/explore"]
  ],[]);
  entry("omit",[
   ["leave-out","省略；遗漏","v.",["省略","遗漏","删除"],["omit-leave-out"],"The list omitted two important names.","名单遗漏了两个重要的名字。",null,"https://www.merriam-webster.com/dictionary/omit"],
   ["fail","疏忽未做","v.",["疏忽未做","疏忽"],["omit-fail"],"He omitted to mention the extra charge.","他漏说了那笔额外费用。","omit to do","https://www.merriam-webster.com/dictionary/omit"]
  ],[]);
  entry("exert",[
   ["apply","施加；运用","v.",["施加","运用","发挥","施以影响","产生","行使"],["exert-apply"],"The moon exerts a pull on the oceans.","月球对海洋施加引力。",null,"https://www.merriam-webster.com/dictionary/exert"],
   ["effort","努力；尽力","v.",["努力","尽力"],["exert-effort"],"Do not exert yourself too much after the operation.","手术后不要过度劳累。","exert oneself","https://www.merriam-webster.com/dictionary/exert"]
  ],[]);
  entry("cancel",[
   ["call-off","取消","v.",["取消","撤消","删去","作废"],["cancel-call-off"],"They cancelled the flight because of fog.","他们因大雾取消了航班。",null,"https://www.merriam-webster.com/dictionary/cancel"],
   ["neutralize","抵消","v.",["抵消","抵销","相互抵销"],["cancel-neutralize"],"The two opposing forces cancel each other out.","这两个反向的力相互抵消。","cancel out","https://www.merriam-webster.com/dictionary/cancel"],
   ["mark","注销；盖戳作废","v.",["注销","盖戳作废","盖销(邮票)","盖销"],["cancel-mark"],"The clerk cancelled the stamp with a postmark.","职员用邮戳将邮票盖销。",null,"https://www.merriam-webster.com/dictionary/cancel"]
  ],[]);
  entry("erase",[
   ["remove","擦除；抹去","v.",["擦除","抹去","擦掉","消除"],["erase-remove"],"Erase the pencil marks before scanning the page.","扫描这页纸前，擦掉铅笔痕迹。",null,"https://www.merriam-webster.com/dictionary/erase"],
   ["delete","删除数据","v.",["删除数据","删除"],["erase-delete","erase-data"],"The repair process erased all the files.","修复过程删除了所有文件。",null,"https://www.merriam-webster.com/dictionary/erase"]
  ],[]);
  entry("rescue",[
   ["save","营救；拯救","v.",["营救","拯救","援救","解救","救出"],["rescue-save"],"Firefighters rescued a child from the balcony.","消防员从阳台上救下了一个孩子。",null,"https://www.merriam-webster.com/dictionary/rescue"],
   ["saving","营救行动；救援","n.",["营救行动","救援"],["rescue-saving"],"The rescue took more than six hours.","这次营救用了六个多小时。",null,"https://www.merriam-webster.com/dictionary/rescue"]
  ],[]);
  entry("obtain",[
   ["get","获得；取得","v.",["获得","取得","达到"],["obtain-get","get-acquire"],"You must obtain permission before entering.","进入前你必须取得许可。",null,"https://www.merriam-webster.com/dictionary/obtain"],
   ["prevail","存在；适用","v.",["存在","适用","流行","得到公认"],["obtain-prevail"],"These conditions no longer obtain in modern hospitals.","这些情况在现代医院中已不复存在。",null,"https://www.merriam-webster.com/dictionary/obtain"]
  ],[]);
  entry("gain",[
   ["acquire","获得；赢得","v.",["获得","赢得","得到","赚到","获利"],["gain-acquire","get-acquire"],"She gained valuable experience at the clinic.","她在诊所获得了宝贵的经验。",null,"https://www.merriam-webster.com/dictionary/gain"],
   ["increase","增加；增长","v.",["增加","增长","增进"],["gain-increase","increase-quantity"],"The train gained speed after leaving the station.","火车出站后逐渐加速。",null,"https://www.merriam-webster.com/dictionary/gain"],
   ["reach","到达","v.",["到达"],["gain-reach"],"The hikers finally gained the summit.","徒步旅行者终于到达了山顶。",null,"https://www.merriam-webster.com/dictionary/gain"],
   ["improvement","收益；进步；增加量","n.",["收益","进步","增加量","增益","利润","收获"],["gain-improvement","increase-amount"],"The new system produced a gain in efficiency.","新系统提高了效率。",null,"https://www.merriam-webster.com/dictionary/gain"]
  ],[]);
  entry("supply",[
   ["provide","供应；提供","v.",["供应","提供","补给","供给","补充"],["supply-provide","provide-supply"],"The farm supplies milk to local schools.","这家农场向当地学校供应牛奶。",null,"https://www.merriam-webster.com/dictionary/supply"],
   ["stock","供应量；储备","n.",["供应量","储备"],["supply-stock"],"We carried a week's supply of food.","我们带了一周的食物储备。",null,"https://www.merriam-webster.com/dictionary/supply"],
   ["materials","必需品；物资","n.",["必需品","物资","供应品"],["supply-materials"],"Medical supplies arrived by helicopter.","医疗物资由直升机运抵。",null,"https://www.merriam-webster.com/dictionary/supply"]
  ],[{"terms":["替代"],"decision":"scope-excluded","reason":"临时代课或替代身份需另设搭配，不与一般提供物资同义。","source":"https://www.merriam-webster.com/dictionary/supply"}]);
  entry("enlarge",[
   ["bigger","扩大；增大","v.",["扩大","增大"],["enlarge-bigger","enlarge-image"],"They enlarged the kitchen by removing a wall.","他们拆掉一面墙，扩大了厨房。",null,"https://www.merriam-webster.com/dictionary/enlarge"],
   ["elaborate","详述；进一步说明","v.",["详述","进一步说明"],["enlarge-elaborate"],"Could you enlarge on your last point?","你能进一步说明最后一点吗？","enlarge on","https://www.merriam-webster.com/dictionary/enlarge"]
  ],[]);
  entry("magnify",[
   ["size","放大","v.",["放大","扩大"],["magnify-size","enlarge-image"],"The lens magnifies the image ten times.","这个镜头把图像放大十倍。",null,"https://www.merriam-webster.com/dictionary/magnify"],
   ["exaggerate","夸大；夸张","v.",["夸大","夸张"],["magnify-exaggerate"],"The headlines magnified a minor disagreement.","新闻标题夸大了一次小分歧。",null,"https://www.merriam-webster.com/dictionary/magnify"]
  ],[{"terms":["赞美","有放大能力"],"decision":"scope-excluded","reason":"赞颂与放大图像不同；有放大能力未另设状态题。","source":"https://www.merriam-webster.com/dictionary/magnify"}]);
  entry("update",[
   ["revise","更新；使现代化","v.",["更新","使现代化"],["update-revise"],"We updated the software last night.","我们昨晚更新了软件。",null,"https://www.merriam-webster.com/dictionary/update"],
   ["inform","向……提供最新消息","v.",["向……提供最新消息"],["update-inform"],"Please update me on the repair work.","请告诉我维修工作的最新进展。",null,"https://www.merriam-webster.com/dictionary/update"],
   ["new-info","最新消息；更新内容","n.",["最新消息","更新内容"],["update-new-info"],"The evening update included new travel advice.","晚间最新通报包含了新的出行建议。",null,"https://www.merriam-webster.com/dictionary/update"]
  ],[]);
  entry("leak",[
   ["escape","泄漏；漏出","v.",["泄漏","漏出","漏","使渗漏"],["leak-escape"],"Water leaked through the ceiling.","水从天花板渗了下来。",null,"https://www.merriam-webster.com/dictionary/leak"],
   ["disclose","泄露秘密","v.",["泄露秘密"],["leak-disclose"],"Someone leaked the report to the press.","有人把报告泄露给了媒体。",null,"https://www.merriam-webster.com/dictionary/leak"],
   ["hole","漏洞；裂缝","n.",["漏洞","裂缝","漏处"],["leak-hole"],"The plumber found a leak under the sink.","水管工在水槽下发现了一处漏点。",null,"https://www.merriam-webster.com/dictionary/leak"],
   ["disclosure","泄密；泄露的信息","n.",["泄密","泄露的信息"],["leak-disclosure"],"The leak revealed confidential negotiations.","泄密事件暴露了秘密谈判。",null,"https://www.merriam-webster.com/dictionary/leak"]
  ],[]);
  entry("spill",[
   ["pour","洒出；溢出","v.",["洒出","溢出","溅出","使溢出","洒","使流出","倒出"],["spill-pour"],"She spilled coffee over the notes.","她把咖啡洒在了笔记上。",null,"https://www.merriam-webster.com/dictionary/spill"],
   ["crowd","涌出；蜂拥而出","v.",["涌出","蜂拥而出","涌流"],["spill-crowd"],"Fans spilled onto the street after the concert.","演唱会结束后，歌迷涌上了街头。",null,"https://www.merriam-webster.com/dictionary/spill"],
   ["accident","泄漏事件；洒出物","n.",["泄漏事件","洒出物","溢出量"],["spill-accident"],"The oil spill threatened the nearby beach.","这次漏油事件威胁到了附近的海滩。",null,"https://www.merriam-webster.com/dictionary/spill"],
   ["fall","跌落；摔倒","n.",["跌落","摔倒","摔下"],["spill-fall"],"He took a spill from his bicycle.","他从自行车上摔了下来。",null,"https://www.merriam-webster.com/dictionary/spill"]
  ],[{"terms":["木片","小塞子","使散落","使摔下"],"decision":"scope-excluded","reason":"木片及点火纸捻属于物件义，不与漏油或摔倒混合；使散落等宽泛译法需具体对象。","source":"https://www.merriam-webster.com/dictionary/spill"}]);
  entry("uphold",[
   ["support","支持；维护","v.",["支持","维护","支撑","赞成","鼓励","坚持"],["uphold-support","support-uphold","endorsement","team-encouragement"],"The organization works to uphold human rights.","这个组织致力于维护人权。",null,"https://www.merriam-webster.com/dictionary/uphold"],
   ["confirm","维持判决；确认有效","v.",["维持判决","确认有效","确认"],["uphold-confirm"],"The appeal court upheld the original sentence.","上诉法院维持了原判。",null,"https://www.merriam-webster.com/dictionary/uphold"]
  ],[{"terms":["举起"],"decision":"scope-excluded","reason":"举起是较少见的具体动作，本批支持与维持判决不等同于举物。","source":"https://www.merriam-webster.com/dictionary/uphold"}]);
  entry("backup",[
   ["copy","备份","n.",["备份"],["backup-copy"],"Keep a backup of the photographs on another drive.","把照片的备份保存在另一个硬盘上。",null,"https://www.merriam-webster.com/dictionary/backup"],
   ["support","后援；支援","n.",["后援","支援"],["backup-support","practical-emotional-help"],"The officer called for backup.","警官请求支援。",null,"https://www.merriam-webster.com/dictionary/backup"],
   ["reserve","备用的；后备的","adj.",["备用的","后备的"],["backup-reserve"],"A backup generator supplied power to the ward.","备用发电机给病房供电。",null,"https://www.merriam-webster.com/dictionary/backup"]
  ],[{"terms":["备用物","伴奏的","伴唱的"],"decision":"scope-excluded","reason":"伴奏伴唱需音乐语境；备用物按具体后备对象理解，不泛化为所有支援。","source":"https://www.merriam-webster.com/dictionary/backup"}]);
  entry("contain",[
   ["hold","容纳；含有","v.",["容纳","含有","包含"],["contain-hold"],"The box contains six glass cups.","盒子里装着六个玻璃杯。",null,"https://www.merriam-webster.com/dictionary/contain"],
   ["control","控制；遏制","v.",["控制","遏制"],["contain-control"],"Firefighters struggled to contain the blaze.","消防员奋力控制火势。",null,"https://www.merriam-webster.com/dictionary/contain"],
   ["restrain","克制；抑制感情","v.",["克制","抑制感情","自制"],["contain-restrain"],"She could barely contain her excitement.","她几乎抑制不住自己的兴奋。",null,"https://www.merriam-webster.com/dictionary/contain"]
  ],[]);
  entry("specify",[
   ["state","明确说明；具体指定","v.",["明确说明","具体指定","详列","指定","说明"],["specify-state"],"The contract specifies a delivery date.","合同明确规定了交货日期。",null,"https://www.merriam-webster.com/dictionary/specify"]
  ],[]);
  entry("deserve",[
   ["merit","应得；值得","v.",["应得","值得","该得到","应得报答"],["deserve-merit"],"The volunteers deserve our thanks.","志愿者们值得我们感谢。",null,"https://www.merriam-webster.com/dictionary/deserve"]
  ],[]);
  entry("sink",[
   ["descend","下沉；沉没","v.",["下沉","沉没","下陷","使下沉"],["sink-descend"],"The damaged boat sank within minutes.","受损的小船几分钟内就沉没了。",null,"https://www.merriam-webster.com/dictionary/sink"],
   ["fall","下降；降低","v.",["下降","降低","减弱","衰退","消沉","使低落"],["sink-fall","fall-rapid"],"The sun sank below the hills.","太阳落到了山后。",null,"https://www.merriam-webster.com/dictionary/sink"],
   ["insert","使深深插入；埋入","v.",["使深深插入","埋入"],["sink-insert"],"The dog sank its teeth into the rope.","狗把牙齿深深咬进绳子里。",null,"https://www.merriam-webster.com/dictionary/sink"],
   ["washbasin","水槽；洗涤池","n.",["水槽","洗涤池","污水槽"],["sink-washbasin"],"Leave the dirty dishes in the sink.","把脏碗碟放在水槽里。",null,"https://www.merriam-webster.com/dictionary/sink"]
  ],[{"terms":["藏垢的场所","沟渠","堕落","渗透","陷于","投入(资金等)","挖掘"],"decision":"scope-excluded","reason":"资金投入、挖掘和污秽场所等引申未列入本批下沉、降低和水槽范围。","source":"https://www.merriam-webster.com/dictionary/sink"}]);
  entry("plummet",[
   ["fall","骤降；急速坠落","v.",["骤降","急速坠落","垂直落下"],["plummet-fall","fall-rapid"],"Sales plummeted after the recall.","召回事件后，销量骤降。",null,"https://www.merriam-webster.com/dictionary/plummet"],
   ["weight","铅锤；测深锤","n.",["铅锤","测深锤","铅坠"],["plummet-weight"],"The surveyor lowered a plummet into the shaft.","测量员把铅锤放入竖井中。",null,"https://www.merriam-webster.com/dictionary/plummet"]
  ],[]);
  entry("invite",[
   ["ask","邀请","v.",["邀请"],["invite-ask"],"They invited us to dinner on Saturday.","他们邀请我们周六共进晚餐。",null,"https://www.merriam-webster.com/dictionary/invite"],
   ["request","征求；请求","v.",["征求","请求"],["invite-request"],"The council invited comments on the new plan.","议会征求了大家对新计划的意见。",null,"https://www.merriam-webster.com/dictionary/invite"],
   ["provoke","招致；引起","v.",["招致","引起"],["invite-provoke"],"Leaving valuables in view invites theft.","把贵重物品放在显眼处容易招来盗窃。",null,"https://www.merriam-webster.com/dictionary/invite"]
  ],[]);
  entry("greet",[
   ["welcome","迎接；问候","v.",["迎接","问候","致敬","欢迎"],["greet-welcome"],"She greeted the visitors with a smile.","她微笑着迎接来访者。",null,"https://www.merriam-webster.com/dictionary/greet"],
   ["react","以某种反应回应","v.",["以某种反应回应"],["greet-react"],"The audience greeted the announcement with cheers.","观众以欢呼回应这项宣布。",null,"https://www.merriam-webster.com/dictionary/greet"]
  ],[{"terms":["映入眼帘"],"decision":"scope-excluded","reason":"景象映入眼帘为引申，本批迎接客人与回应公告不代替该语境。","source":"https://www.merriam-webster.com/dictionary/greet"}]);
  entry("recollect",[
   ["remember","回忆起；记起","v.",["回忆起","记起","回忆","回想","忆起"],["recollect-remember"],"I cannot recollect where we first met.","我想不起我们初次见面是在何处。",null,"https://www.merriam-webster.com/dictionary/recollect"],
   ["compose","使恢复镇静","v.",["使恢复镇静"],["recollect-compose"],"He paused to recollect himself before answering.","他停顿了一下，镇定后才回答。","recollect oneself","https://www.merriam-webster.com/dictionary/recollect"]
  ],[]);
  entry("impress",[
   ["admire","给……留下深刻印象","v.",["给……留下深刻印象","使有印象","给人印象"],["impress-admire"],"Her careful preparation impressed the panel.","她细致的准备给评审团留下了深刻印象。",null,"https://www.merriam-webster.com/dictionary/impress"],
   ["emphasize","使铭记；使深刻认识","v.",["使铭记","使深刻认识"],["impress-emphasize"],"The instructor impressed on us the need for caution.","教练让我们牢牢记住谨慎的必要性。","impress on","https://www.merriam-webster.com/dictionary/impress"],
   ["mark","压印；印上","v.",["压印","印上","铭刻"],["impress-mark"],"They impressed a pattern into the soft clay.","他们把图案压印在软黏土上。",null,"https://www.merriam-webster.com/dictionary/impress"]
  ],[{"terms":["印象","特征","印记","印","传送","影响","强征"],"decision":"scope-excluded","reason":"强征是另一词源组用法；名词印记与普通影响不并入留下深刻印象的动词。","source":"https://www.merriam-webster.com/dictionary/impress"}]);
  entry("repeat",[
   ["again","重复；重做","v.",["重复","重做","反复","使再现","复制"],["repeat-again"],"Please repeat the experiment with clean water.","请用清水重做实验。",null,"https://www.merriam-webster.com/dictionary/repeat"],
   ["restate","复述；转述","v.",["复述","转述"],["repeat-restate"],"Do not repeat this story to anyone.","不要把这件事转述给任何人。",null,"https://www.merriam-webster.com/dictionary/repeat"],
   ["broadcast","重播；重演","n.",["重播","重演"],["repeat-broadcast"],"The programme is a repeat from last winter.","这个节目是去年冬天播出内容的重播。",null,"https://www.merriam-webster.com/dictionary/repeat"]
  ],[]);
  entry("character",[
   ["nature","性格；品质","n.",["性格","品质","个性","性质"],["character-nature","personality-nature"],"Her patience is a strength of her character.","耐心是她性格中的一项优点。",null,"https://www.merriam-webster.com/dictionary/character"],
   ["role","人物；角色","n.",["人物","角色"],["character-role"],"The story follows three main characters.","这个故事围绕三个主要人物展开。",null,"https://www.merriam-webster.com/dictionary/character"],
   ["symbol","字符；文字","n.",["字符","文字"],["character-symbol"],"The password must contain at least eight characters.","密码必须至少包含八个字符。",null,"https://www.merriam-webster.com/dictionary/character"],
   ["distinctiveness","特色；特征","n.",["特色","特征"],["character-distinctiveness","feature-quality"],"The old houses give the village its character.","这些老房子赋予了村庄独特风貌。",null,"https://www.merriam-webster.com/dictionary/character"],
   ["integrity","品格；正直","n.",["品格","正直"],["character-integrity"],"The crisis revealed her strength of character.","危机展现了她坚强的品格。",null,"https://www.merriam-webster.com/dictionary/character"]
  ],[{"terms":["资格"],"decision":"scope-excluded","reason":"资格不能直接替代性格或品格，本批不收录这一宽泛旧译。","source":"https://www.merriam-webster.com/dictionary/character"}]);
  entry("personality",[
   ["nature","个性；人格","n.",["个性","人格"],["personality-nature"],"The twins have very different personalities.","这对双胞胎的个性很不同。",null,"https://www.merriam-webster.com/dictionary/personality"],
   ["celebrity","名人；知名人士","n.",["名人","知名人士"],["personality-celebrity"],"A television personality opened the exhibition.","一位电视名人主持了展览开幕。",null,"https://www.merriam-webster.com/dictionary/personality"],
   ["charm","魅力；鲜明个性","n.",["魅力","鲜明个性","(团体、地方、国家)特有特性"],["personality-charm"],"The small café has plenty of personality.","这家小咖啡馆很有特色。",null,"https://www.merriam-webster.com/dictionary/personality"]
  ],[]);
  entry("emotion",[
   ["feeling","情感；情绪","n.",["情感","情绪","激动","强烈的情感"],["emotion-feeling","emotion-mind"],"He struggled to hide his emotion during the farewell.","告别时，他努力掩饰自己的情绪。",null,"https://www.merriam-webster.com/dictionary/emotion"]
  ],[]);
  entry("trait",[
   ["quality","特征；性格特点","n.",["特征","性格特点","特性"],["trait-quality","personality-nature","feature-quality"],"Patience is a useful trait for a teacher.","耐心是教师一项有益的性格特点。",null,"https://www.merriam-webster.com/dictionary/trait"]
  ],[{"terms":["一笔","少许"],"decision":"scope-excluded","reason":"一笔和少许不作为本批特征义的同义答案。","source":"https://www.merriam-webster.com/dictionary/trait"}]);
  entry("feature",[
   ["quality","特点；特征","n.",["特点","特征","特色","特性"],["feature-quality"],"The camera's best feature is its light weight.","这台相机最大的特点是重量轻。",null,"https://www.merriam-webster.com/dictionary/feature"],
   ["face","面容的一部分；五官","n.",["面容的一部分","五官","面孔的一部分(如眼、口等)","容貌"],["feature-face"],"Her most striking feature is her eyes.","她五官中最引人注目的是眼睛。",null,"https://www.merriam-webster.com/dictionary/feature"],
   ["article","专题报道；特写","n.",["专题报道","特写"],["feature-article"],"The magazine ran a feature on urban gardens.","杂志刊登了一篇关于城市花园的专题报道。",null,"https://www.merriam-webster.com/dictionary/feature"],
   ["include","以……为特色；由……主演","v.",["以……为特色","由……主演","是...的特色"],["feature-include"],"The concert features three young violinists.","这场音乐会由三位年轻小提琴家担纲演出。",null,"https://www.merriam-webster.com/dictionary/feature"]
  ],[{"terms":["放映","起重要作用"],"decision":"scope-excluded","reason":"放映及起重要作用需具体搭配，不与文章特写或产品特点互换。","source":"https://www.merriam-webster.com/dictionary/feature"}]);
  entry("characteristic",[
   ["typical","特有的；典型的","adj.",["特有的","典型的","特性的","有特色的"],["characteristic-typical"],"She answered with her characteristic honesty.","她以一贯的坦诚作了回答。",null,"https://www.merriam-webster.com/dictionary/characteristic"],
   ["quality","特征；特点","n.",["特征","特点","特性","特色"],["characteristic-quality","personality-nature","feature-quality"],"Thick fur is a characteristic of the species.","浓密的毛皮是该物种的特征。",null,"https://www.merriam-webster.com/dictionary/characteristic"]
  ],[{"terms":["阶","指数"],"decision":"scope-excluded","reason":"阶和指数属于专业符号或数学语境，本批只训练典型的及特征。","source":"https://www.merriam-webster.com/dictionary/characteristic"}]);
  entry("human",[
   ["people","人的；人类的","adj.",["人的","人类的"],["human-people"],"The disease can spread through human contact.","这种疾病可通过人与人接触传播。",null,"https://www.merriam-webster.com/dictionary/human"],
   ["fallible","有人性的；有人的弱点的","adj.",["有人性的","有人的弱点的","人性的"],["human-fallible"],"Even the best judges are human and make mistakes.","即使最优秀的法官也是人，也会犯错。",null,"https://www.merriam-webster.com/dictionary/human"],
   ["person","人；人类","n.",["人","人类"],["human-person"],"No human had entered the cave before.","此前没有人进入过这个洞穴。",null,"https://www.merriam-webster.com/dictionary/human"]
  ],[{"terms":["似人类的","有同情心的"],"decision":"scope-excluded","reason":"像人和有同情心不等同于人类属性；不把 human 与 humane 混淆。","source":"https://www.merriam-webster.com/dictionary/human"}]);
  entry("mental",[
   ["mind","精神的；心理的","adj.",["精神的","心理的","心智的"],["mental-mind"],"Regular sleep supports mental health.","规律的睡眠有益于心理健康。",null,"https://www.merriam-webster.com/dictionary/mental"],
   ["intellectual","智力的；脑力的","adj.",["智力的","脑力的"],["mental-intellectual"],"The puzzle requires considerable mental effort.","这道谜题需要动不少脑筋。",null,"https://www.merriam-webster.com/dictionary/mental"]
  ],[{"terms":["精神病的","颏的","精神病患者"],"decision":"scope-excluded","reason":"颏的属解剖学同形词；精神病患者名词不在本批心理及智力形容词范围。","source":"https://www.merriam-webster.com/dictionary/mental"}]);
  entry("desire",[
   ["want","渴望；想要","v.",["渴望","想要","要求","请求"],["desire-want","want-desire"],"She desired a quieter place to live.","她渴望住在更安静的地方。",null,"https://www.merriam-webster.com/dictionary/desire"],
   ["longing","欲望；渴望","n.",["欲望","渴望"],["desire-longing","desire-noun"],"His desire to learn never faded.","他求知的渴望从未消退。",null,"https://www.merriam-webster.com/dictionary/desire"]
  ],[]);
  entry("detach",[
   ["separate","拆下；使分离","v.",["拆下","使分离","卸下","使脱离"],["detach-separate","separate-apart"],"Detach the cable before moving the machine.","移动机器前先拔下电缆。",null,"https://www.merriam-webster.com/dictionary/detach"],
   ["distance","使超然；使摆脱情感影响","v.",["使超然","使摆脱情感影响"],["detach-distance"],"She tried to detach herself from the dispute.","她试图让自己从这场争端中抽身。",null,"https://www.merriam-webster.com/dictionary/detach"]
  ],[{"terms":["派遣"],"decision":"scope-excluded","reason":"派遣部队需军事语境，不与拆下电缆或情感抽离完全等同。","source":"https://www.merriam-webster.com/dictionary/detach"}]);
  entry("gaze",[
   ["look","凝视；注视","v.",["凝视","注视"],["gaze-look","look-gaze"],"He gazed at the stars for hours.","他凝望星空好几个小时。",null,"https://www.merriam-webster.com/dictionary/gaze"],
   ["look-noun","凝视的目光","n.",["凝视的目光"],["gaze-look-noun"],"She lowered her gaze to the floor.","她垂下目光，看向地板。",null,"https://www.merriam-webster.com/dictionary/gaze"]
  ],[]);
  entry("integrate",[
   ["combine","整合；使成为整体","v.",["整合","使成为整体","综合","使完整","使成整体","成一体"],["integrate-combine","join-integrate"],"The new system integrates data from several sources.","新系统整合了多个来源的数据。",null,"https://www.merriam-webster.com/dictionary/integrate"],
   ["include","使融入；使平等参与","v.",["使融入","使平等参与"],["integrate-include"],"The school helps new pupils integrate into the community.","学校帮助新生融入社区。",null,"https://www.merriam-webster.com/dictionary/integrate"]
  ],[{"terms":["完整的","完全的"],"decision":"scope-excluded","reason":"完整的和完全的是形容词式旧译，本批用动词整合与融入表达。","source":"https://www.merriam-webster.com/dictionary/integrate"}]);
  entry("purpose",[
   ["aim","目的；意图","n.",["目的","意图","意向","用途"],["purpose-aim"],"The purpose of the meeting is to review the budget.","会议的目的是审议预算。",null,"https://www.merriam-webster.com/dictionary/purpose"],
   ["resolve","决心；意志","n.",["决心","意志"],["purpose-resolve"],"She spoke with a new sense of purpose.","她说话时流露出一种新的决心。",null,"https://www.merriam-webster.com/dictionary/purpose"],
   ["intend","打算；决意","v.",["打算","决意","意欲","企图","计划"],["purpose-intend"],"They purposed to finish the journey before winter.","他们决意在冬天前完成旅程。",null,"https://www.merriam-webster.com/dictionary/purpose"]
  ],[{"terms":["效果","论题"],"decision":"scope-excluded","reason":"效果和论题不等同于目的；意图不保证产生某种效果。","source":"https://www.merriam-webster.com/dictionary/purpose"}]);
  entry("pierce",[
   ["penetrate","刺穿；穿透","v.",["刺穿","穿透","打眼于","刺入","穿入","透入","进入"],["pierce-penetrate","pierce-stab"],"The needle pierced the thick fabric.","针刺穿了厚布。",null,"https://www.merriam-webster.com/dictionary/pierce"],
   ["pervade","穿过；响彻","v.",["穿过","响彻","(声音)响彻","(亮光)照进"],["pierce-pervade"],"A scream pierced the silence.","一声尖叫划破了寂静。",null,"https://www.merriam-webster.com/dictionary/pierce"]
  ],[{"terms":["洞悉","深深地打动"],"decision":"scope-excluded","reason":"洞悉及深深打动为比喻，本批只选穿刺和声音穿透。","source":"https://www.merriam-webster.com/dictionary/pierce"}]);
  entry("restore",[
   ["repair","修复；使恢复原状","v.",["修复","使恢复原状","使复原","修补","还原"],["restore-repair"],"Specialists restored the damaged painting.","专家修复了受损的画作。",null,"https://www.merriam-webster.com/dictionary/restore"],
   ["return","归还；使恢复原位","v.",["归还","使恢复原位"],["restore-return"],"The stolen necklace was restored to its owner.","被盗的项链归还给了失主。",null,"https://www.merriam-webster.com/dictionary/restore"],
   ["reinstate","恢复；使重新建立","v.",["恢复","使重新建立","恢复原职"],["restore-reinstate"],"Engineers restored power before midnight.","工程师在午夜前恢复了供电。",null,"https://www.merriam-webster.com/dictionary/restore"]
  ],[]);
  entry("shake",[
   ["move","摇动；抖动","v.",["摇动","抖动","震动","使震动","挥舞"],["shake-move"],"Shake the bottle before opening it.","开瓶前摇一摇。",null,"https://www.merriam-webster.com/dictionary/shake"],
   ["tremble","发抖；颤动","v.",["发抖","颤动"],["shake-tremble"],"Her hands shook from the cold.","她的双手冻得发抖。",null,"https://www.merriam-webster.com/dictionary/shake"],
   ["unsettle","使震惊；动摇","v.",["使震惊","动摇"],["shake-unsettle"],"The accident shook his confidence.","这次事故动摇了他的信心。",null,"https://www.merriam-webster.com/dictionary/shake"],
   ["shake-noun","摇动；抖动的一下","n.",["摇动","抖动的一下"],["shake-shake-noun"],"Give the blanket a good shake outside.","到外面把毯子用力抖一抖。",null,"https://www.merriam-webster.com/dictionary/shake"],
   ["drink","奶昔","n.",["奶昔"],["shake-drink"],"He ordered a chocolate shake.","他点了一杯巧克力奶昔。",null,"https://www.merriam-webster.com/dictionary/shake"]
  ],[]);
  entry("twist",[
   ["turn","扭转；拧","v.",["扭转","拧","扭曲","螺旋状","扭","捻","编织","使扭转","缠绕","盘绕","使转动","使旋转","转向","扭动","呈螺旋形"],["twist-turn"],"Twist the cap to open the bottle.","拧开瓶盖。",null,"https://www.merriam-webster.com/dictionary/twist"],
   ["sprain","扭伤","v.",["扭伤"],["twist-sprain"],"She twisted her ankle on the steps.","她在台阶上扭伤了脚踝。",null,"https://www.merriam-webster.com/dictionary/twist"],
   ["distort","歪曲；曲解","v.",["歪曲","曲解"],["twist-distort"],"The headline twisted his words.","标题曲解了他的话。",null,"https://www.merriam-webster.com/dictionary/twist"],
   ["bend","弯曲处；转弯","n.",["弯曲处","转弯","一扭","曲折","弯曲"],["twist-bend"],"There is a sharp twist in the road ahead.","前方道路有个急弯。",null,"https://www.merriam-webster.com/dictionary/twist"],
   ["surprise","意想不到的转折","n.",["意想不到的转折"],["twist-surprise"],"The final chapter contains a surprising twist.","最后一章有一个令人意外的转折。",null,"https://www.merriam-webster.com/dictionary/twist"]
  ],[{"terms":["新手法","使苦恼","使混乱"],"decision":"scope-excluded","reason":"新手法及使苦恼未另列，情节转折与歪曲事实已分别训练。","source":"https://www.merriam-webster.com/dictionary/twist"}]);
  entry("tease",[
   ["mock","取笑；戏弄","v.",["取笑","戏弄","揶揄","逗惹"],["tease-mock"],"The children teased him about his new haircut.","孩子们拿他的新发型开玩笑。",null,"https://www.merriam-webster.com/dictionary/tease"],
   ["separate","梳理；拨开","v.",["梳理","拨开"],["tease-separate"],"She teased the tangled wool apart.","她小心拨开缠在一起的羊毛。",null,"https://www.merriam-webster.com/dictionary/tease"],
   ["person","爱戏弄别人的人","n.",["爱戏弄别人的人"],["tease-person"],"Her brother is a tease, but he means no harm.","她哥哥爱逗人，但没有恶意。",null,"https://www.merriam-webster.com/dictionary/tease"]
  ],[{"terms":["强求","使起毛"],"decision":"scope-excluded","reason":"强求及织物起毛需特定搭配或工序，不与取笑和拨开毛线混合。","source":"https://www.merriam-webster.com/dictionary/tease"}]);
  entry("trail",[
   ["path","小径；路线","n.",["小径","路线"],["trail-path"],"The trail climbs through the pine forest.","这条小径穿过松林向上延伸。",null,"https://www.merriam-webster.com/dictionary/trail"],
   ["trace","一串痕迹；踪迹","n.",["一串痕迹","踪迹","痕迹","一串"],["trail-trace"],"The snail left a silver trail on the stone.","蜗牛在石头上留下一道银色痕迹。",null,"https://www.merriam-webster.com/dictionary/trail"],
   ["follow","跟踪；追踪","v.",["跟踪","追踪","尾随"],["trail-follow","follow-person"],"Detectives trailed the stolen van to a garage.","侦探跟踪被盗货车来到一间车库。",null,"https://www.merriam-webster.com/dictionary/trail"],
   ["behind","落后","v.",["落后","落后于"],["trail-behind"],"Our team trailed by two points at halftime.","中场休息时，我们队落后两分。",null,"https://www.merriam-webster.com/dictionary/trail"],
   ["drag","拖曳；拖在后面","v.",["拖曳","拖在后面","拖","垂下","飘出"],["trail-drag"],"Her scarf trailed along the floor.","她的围巾拖在地板上。",null,"https://www.merriam-webster.com/dictionary/trail"]
  ],[{"terms":["尾部","持枪姿势","开出路","蔓生"],"decision":"scope-excluded","reason":"持枪姿势是专门用法；开路与植物蔓生不等同于跟踪或拖曳。","source":"https://www.merriam-webster.com/dictionary/trail"}]);
  entry("wipe",[
   ["clean","擦；抹","v.",["擦","抹","擦拭","揩","拭去"],["wipe-clean"],"Wipe the table with a damp cloth.","用湿布擦桌子。",null,"https://www.merriam-webster.com/dictionary/wipe"],
   ["erase","抹去；删除","v.",["抹去","删除","消灭"],["wipe-erase","erase-data"],"The software can wipe the drive completely.","这款软件可以彻底清除硬盘数据。",null,"https://www.merriam-webster.com/dictionary/wipe"],
   ["cloth","湿巾；擦拭布","n.",["湿巾","擦拭布"],["wipe-cloth"],"She cleaned her hands with a disposable wipe.","她用一次性湿巾擦了手。",null,"https://www.merriam-webster.com/dictionary/wipe"]
  ],[{"terms":["用力打","凸轮","涂上","打"],"decision":"scope-excluded","reason":"凸轮及拳击旧义未收录；涂上不必然是擦去，不能互换。","source":"https://www.merriam-webster.com/dictionary/wipe"}]);
  entry("organic",[
   ["living","生物的；有机体的","adj.",["生物的","有机体的","有生命的"],["organic-living"],"The soil contains decaying organic matter.","土壤里含有腐烂的有机物。",null,"https://www.merriam-webster.com/dictionary/organic"],
   ["farming","有机种植的","adj.",["有机种植的"],["organic-farming"],"The farm grows organic vegetables without synthetic pesticides.","农场不使用合成农药种植有机蔬菜。",null,"https://www.merriam-webster.com/dictionary/organic"],
   ["chemistry","有机化学的；含碳化合物的","adj.",["有机化学的","含碳化合物的"],["organic-chemistry"],"They identified several organic compounds in the sample.","他们在样本中鉴定出了几种有机化合物。",null,"https://www.merriam-webster.com/dictionary/organic"],
   ["natural","自然发展的；有机联系的","adj.",["自然发展的","有机联系的"],["organic-natural"],"The town grew through an organic process rather than a single plan.","这个城镇自然发展而成，并非按单一规划建造。",null,"https://www.merriam-webster.com/dictionary/organic"]
  ],[{"terms":["器官的","有机的","组织的","根本的","器质的"],"decision":"scope-excluded","reason":"器质性病变及器官含义需医学上下文；有机化学、有机种植及整体生长已明确区分。","source":"https://www.merriam-webster.com/dictionary/organic"}]);
  entry("visible",[
   ["seen","看得见的；可见的","adj.",["看得见的","可见的"],["visible-seen"],"The island is visible from the beach.","从海滩可以看见那座岛。",null,"https://www.merriam-webster.com/dictionary/visible"],
   ["evident","明显的；显而易见的","adj.",["明显的","显而易见的","显然的"],["visible-evident"],"The repairs made a visible difference.","修缮带来了明显的变化。",null,"https://www.merriam-webster.com/dictionary/visible"]
  ],[{"terms":["可见物"],"decision":"scope-excluded","reason":"名词可见物未在本批另列，形容词可见的已有例句。","source":"https://www.merriam-webster.com/dictionary/visible"}]);
  entry("habit",[
   ["routine","习惯","n.",["习惯","嗜好"],["habit-routine"],"She has a habit of checking the door twice.","她习惯把门检查两遍。",null,"https://www.merriam-webster.com/dictionary/habit"],
   ["clothing","修道服","n.",["修道服"],["habit-clothing"],"The monk wore a plain brown habit.","修士穿着朴素的棕色修道服。",null,"https://www.merriam-webster.com/dictionary/habit"],
   ["growth","生长习性；株形","n.",["生长习性","株形","习性"],["habit-growth"],"This plant has a spreading habit.","这种植物有蔓延生长的习性。",null,"https://www.merriam-webster.com/dictionary/habit"]
  ],[{"terms":["使穿衣"],"decision":"scope-excluded","reason":"使穿衣为较少见动词，本批服装义只收录修道服名词。","source":"https://www.merriam-webster.com/dictionary/habit"}]);
  entry("vague",[
   ["unclear","模糊的；不明确的","adj.",["模糊的","不明确的","含糊的","不清楚的"],["vague-unclear"],"The instructions were too vague to follow.","说明太含糊，无法照着做。",null,"https://www.merriam-webster.com/dictionary/vague"],
   ["uncertain","记不清的；不确定的","adj.",["记不清的","不确定的","茫然的"],["vague-uncertain"],"I am vague about the exact date.","我记不清确切日期。",null,"https://www.merriam-webster.com/dictionary/vague"]
  ],[]);
  entry("blind",[
   ["sightless","失明的；看不见的","adj.",["失明的","看不见的","瞎的"],["blind-sightless"],"The charity trains guide dogs for blind people.","这家慈善机构训练导盲犬帮助盲人。",null,"https://www.merriam-webster.com/dictionary/blind"],
   ["unaware","对……视而不见的；未察觉的","adj.",["对……视而不见的","未察觉的"],["blind-unaware"],"He was blind to the danger.","他没有察觉危险。","blind to","https://www.merriam-webster.com/dictionary/blind"],
   ["unquestioning","盲目的；不加思考的","adj.",["盲目的","不加思考的"],["blind-unquestioning"],"Blind loyalty can prevent honest criticism.","盲目的忠诚会妨碍坦诚的批评。",null,"https://www.merriam-webster.com/dictionary/blind"],
   ["window","百叶窗；卷帘","n.",["百叶窗","卷帘","窗帘"],["blind-window"],"She lowered the blind to block the sun.","她放下卷帘遮挡阳光。",null,"https://www.merriam-webster.com/dictionary/blind"],
   ["dazzle","使暂时看不见；使失明","v.",["使暂时看不见","使失明","遮暗"],["blind-dazzle"],"The headlights blinded the driver.","车头灯晃得司机看不清。",null,"https://www.merriam-webster.com/dictionary/blind"]
  ],[{"terms":["蒙蔽物","蒙蔽","盲目地"],"decision":"scope-excluded","reason":"蒙蔽物和盲目地不从失明形容词推导；蒙蔽也不等于灯光致眩。","source":"https://www.merriam-webster.com/dictionary/blind"}]);
  entry("quiet",[
   ["silent","安静的；轻声的","adj.",["安静的","轻声的","寂静的"],["quiet-silent"],"Please speak in a quiet voice.","请小声说话。",null,"https://www.merriam-webster.com/dictionary/quiet"],
   ["calm","平静的；少有活动的","adj.",["平静的","少有活动的","从容的"],["quiet-calm"],"Business is usually quiet in January.","一月份生意通常清淡。",null,"https://www.merriam-webster.com/dictionary/quiet"],
   ["peace","安静；平静","n.",["安静","平静","闲适"],["quiet-peace","quiet-state"],"We enjoyed the quiet of the empty beach.","我们享受着无人海滩的宁静。",null,"https://www.merriam-webster.com/dictionary/quiet"],
   ["calm-verb","使安静；使平息","v.",["使安静","使平息","平静下来","使平静","使安心","安慰"],["quiet-calm-verb","quiet-cause"],"Her gentle words quieted the frightened child.","她温柔的话语安抚了受惊的孩子。",null,"https://www.merriam-webster.com/dictionary/quiet"]
  ],[{"terms":["静止的","朴素的","暗中的"],"decision":"scope-excluded","reason":"朴素和暗中未纳入本批，物体静止不必然没有声音。","source":"https://www.merriam-webster.com/dictionary/quiet"}]);
  entry("broken",[
   ["damaged","破损的；坏掉的","adj.",["破损的","坏掉的","破碎的","损坏的","断裂的","破裂的"],["broken-damaged"],"Do not sit on the broken chair.","不要坐在那把坏椅子上。",null,"https://www.merriam-webster.com/dictionary/broken"],
   ["interrupted","断断续续的","adj.",["断断续续的","中断的","不连贯的"],["broken-interrupted"],"She had a night of broken sleep.","她这一夜睡得断断续续。",null,"https://www.merriam-webster.com/dictionary/broken"],
   ["language","不流利的；不完整的","adj.",["不流利的","不完整的","蹩脚的"],["broken-language"],"He asked for directions in broken French.","他用结结巴巴的法语问路。",null,"https://www.merriam-webster.com/dictionary/broken"],
   ["violated","被违背的；被破坏的","adj.",["被违背的","被破坏的"],["broken-violated"],"The letter reminded her of a broken promise.","这封信让她想起一个未被兑现的承诺。",null,"https://www.merriam-webster.com/dictionary/broken"]
  ],[{"terms":["心灰意冷的"],"decision":"scope-excluded","reason":"心灰意冷的为情感引申，不等同于物件损坏或睡眠中断。","source":"https://www.merriam-webster.com/dictionary/broken"}]);
  entry("disable",[
   ["incapacitate","使伤残；使丧失能力","v.",["使伤残","使丧失能力"],["disable-incapacitate"],"The injury disabled him for several months.","这次受伤使他好几个月无法正常活动。",null,"https://www.merriam-webster.com/dictionary/disable"],
   ["deactivate","使失效；关闭功能","v.",["使失效","关闭功能","使失灵","使无法运作","禁用","关闭"],["disable-deactivate"],"Disable the alarm before opening the case.","打开箱子前先关闭警报。",null,"https://www.merriam-webster.com/dictionary/disable"]
  ],[]);
  entry("weird",[
   ["strange","奇怪的；怪异的","adj.",["奇怪的","怪异的","超自然的","不可思议的"],["weird-strange"],"A weird humming sound came from the cellar.","地窖里传来奇怪的嗡嗡声。",null,"https://www.merriam-webster.com/dictionary/weird"]
  ],[{"terms":["命运","预言","符咒"],"decision":"scope-excluded","reason":"命运、预言和符咒是历史性名词用法，本批只训练怪异形容词。","source":"https://www.merriam-webster.com/dictionary/weird"}]);
  entry("weigh",[
   ["measure","称重量","v.",["称重量","称...重量","称分量","过秤"],["weigh-measure"],"Weigh the flour before adding it.","加入面粉前先称重。",null,"https://www.merriam-webster.com/dictionary/weigh"],
   ["weight","重达","v.",["重达"],["weigh-weight"],"The parcel weighs three kilograms.","这个包裹重三公斤。",null,"https://www.merriam-webster.com/dictionary/weigh"],
   ["consider","权衡；仔细考虑","v.",["权衡","仔细考虑","衡量","考虑"],["weigh-consider","ponder-reason"],"We weighed the risks before signing.","签字前我们权衡了风险。",null,"https://www.merriam-webster.com/dictionary/weigh"],
   ["burden","使忧虑；压在心头","v.",["使忧虑","压在心头","把...压弯","重压"],["weigh-burden"],"The debt weighed on her mind.","债务压在她心头。","weigh on","https://www.merriam-webster.com/dictionary/weigh"]
  ],[{"terms":["起锚","有意义"],"decision":"scope-excluded","reason":"起锚需 weigh anchor；有意义需 weigh with 等语境，不并入称重。","source":"https://www.merriam-webster.com/dictionary/weigh"}]);
  entry("weight",[
   ["heaviness","重量；体重","n.",["重量","体重","重"],["weight-heaviness"],"The bridge has a strict weight limit.","这座桥有严格的限重。",null,"https://www.merriam-webster.com/dictionary/weight"],
   ["object","重物；砝码","n.",["重物","砝码"],["weight-object"],"He placed a small weight on the scales.","他在天平上放了一枚小砝码。",null,"https://www.merriam-webster.com/dictionary/weight"],
   ["importance","重要性；影响力","n.",["重要性","影响力","重大","影响","力量"],["weight-importance"],"Her opinion carries considerable weight.","她的意见很有分量。",null,"https://www.merriam-webster.com/dictionary/weight"],
   ["load","给……加重；用重物固定","v.",["给……加重","用重物固定","加重量于","压迫"],["weight-load"],"They weighted the tarpaulin with stones.","他们用石头压住防水布。",null,"https://www.merriam-webster.com/dictionary/weight"],
   ["adjust","给……赋予权重","v.",["给……赋予权重","使加权"],["weight-adjust"],"The results were weighted by population size.","结果按人口规模进行了加权。",null,"https://www.merriam-webster.com/dictionary/weight"]
  ],[{"terms":["称重量","粗细"],"decision":"scope-excluded","reason":"称重量应区分 weigh；字体粗细是专业样式属性，不与质量或影响力混合。","source":"https://www.merriam-webster.com/dictionary/weight"}]);
  entry("painful",[
   ["physical","疼痛的","adj.",["疼痛的"],["painful-physical","sore-pain"],"The cut was small but painful.","伤口虽小，却很疼。",null,"https://www.merriam-webster.com/dictionary/painful"],
   ["distressing","令人痛苦的；令人难堪的","adj.",["令人痛苦的","令人难堪的","痛苦的","困难的","令人烦恼的"],["painful-distressing"],"The interview brought back painful memories.","这次访谈勾起了痛苦的回忆。",null,"https://www.merriam-webster.com/dictionary/painful"]
  ],[]);
  entry("weaken",[
   ["strength","使变弱；减弱","v.",["使变弱","减弱","削弱","使虚弱","变弱","变软弱"],["weaken-strength"],"The illness weakened her muscles.","疾病削弱了她的肌肉力量。",null,"https://www.merriam-webster.com/dictionary/weaken"],
   ["resolve","动摇；使减弱决心","v.",["动摇","使减弱决心"],["weaken-resolve"],"His determination weakened after repeated setbacks.","接连受挫后，他的决心动摇了。",null,"https://www.merriam-webster.com/dictionary/weaken"]
  ],[]);
  entry("separate",[
   ["apart","分开的；独立的","adj.",["分开的","独立的","单独的"],["separate-apart"],"The twins now have separate bedrooms.","这对双胞胎现在各有一间卧室。",null,"https://www.merriam-webster.com/dictionary/separate"],
   ["divide","分开；隔开","v.",["分开","隔开","分离","分隔"],["separate-divide","separate-apart"],"A fence separates the garden from the road.","一道篱笆把花园和道路隔开。",null,"https://www.merriam-webster.com/dictionary/separate"],
   ["sort","区分；分类","v.",["区分","分类"],["separate-sort"],"Separate the ripe tomatoes from the green ones.","把熟番茄与青番茄分开。",null,"https://www.merriam-webster.com/dictionary/separate"],
   ["relationship","分居；分手","v.",["分居","分手"],["separate-relationship"],"They separated after years of disagreement.","多年意见不合后，他们分居了。",null,"https://www.merriam-webster.com/dictionary/separate"]
  ],[{"terms":["单件衣服"],"decision":"scope-excluded","reason":"单件衣服通常用复数 separates，本批不作为分开动作的同义答案。","source":"https://www.merriam-webster.com/dictionary/separate"}]);
  entry("drug",[
   ["medicine","药物；药品","n.",["药物","药品","药","麻药","麻醉药"],["drug-medicine"],"The drug reduced her blood pressure.","这种药降低了她的血压。",null,"https://www.merriam-webster.com/dictionary/drug"],
   ["illegal","毒品","n.",["毒品"],["drug-illegal"],"The campaign warns teenagers about illegal drugs.","这场宣传提醒青少年警惕非法毒品。",null,"https://www.merriam-webster.com/dictionary/drug"],
   ["administer","给……服麻醉药；下药","v.",["给……服麻醉药","下药","使服麻醉药","使麻木"],["drug-administer"],"The thief drugged the guard's drink.","小偷在警卫的饮料里下了药。",null,"https://www.merriam-webster.com/dictionary/drug"]
  ],[{"terms":["吸毒"],"decision":"scope-excluded","reason":"吸毒需服用行为语境，不从名词毒品自动推出动词给人下药。","source":"https://www.merriam-webster.com/dictionary/drug"}]);
  entry("refresh",[
   ["restore","使恢复精力；使清爽","v.",["使恢复精力","使清爽","使凉爽","使振作"],["refresh-restore","revive-refresh"],"A short walk refreshed her after the long meeting.","漫长的会议结束后，短暂散步让她恢复了精神。",null,"https://www.merriam-webster.com/dictionary/refresh"],
   ["remind","唤起记忆","v.",["唤起记忆","重温"],["refresh-remind"],"The photograph refreshed my memory of the trip.","这张照片唤起了我对那次旅行的记忆。",null,"https://www.merriam-webster.com/dictionary/refresh"],
   ["reload","刷新；重新加载","v.",["刷新","重新加载","更新"],["refresh-reload"],"Refresh the page to see the latest score.","刷新页面以查看最新比分。",null,"https://www.merriam-webster.com/dictionary/refresh"]
  ],[]);
  entry("easy",[
   ["simple","容易的；不费力的","adj.",["容易的","不费力的"],["easy-simple"],"The instructions are easy to follow.","这些说明很容易照着做。",null,"https://www.merriam-webster.com/dictionary/easy"],
   ["comfortable","舒适的；轻松的","adj.",["舒适的","轻松的","自在的"],["easy-comfortable"],"The chair allowed him to sit in an easy position.","这把椅子让他坐得很舒服。",null,"https://www.merriam-webster.com/dictionary/easy"],
   ["relaxed","随和的；从容的","adj.",["随和的","从容的","随便的"],["easy-relaxed"],"Her easy manner put the visitors at ease.","她从容的举止让来访者放松了下来。",null,"https://www.merriam-webster.com/dictionary/easy"]
  ],[{"terms":["缓缓的","宽容的","流畅的","疲软的","容易地","慢慢地"],"decision":"scope-excluded","reason":"副词缓缓地及宽松金融义未收录；流畅与容易也并非在所有上下文可互换。","source":"https://www.merriam-webster.com/dictionary/easy"}]);
  entry("happiness",[
   ["joy","幸福；快乐","n.",["幸福","快乐"],["happiness-joy"],"Her face shone with happiness at the news.","听到这个消息，她满脸幸福。",null,"https://www.merriam-webster.com/dictionary/happiness"]
  ],[{"terms":["幸运","适当"],"decision":"scope-excluded","reason":"幸运及恰当属历史性引申，本批只训练幸福快乐。","source":"https://www.merriam-webster.com/dictionary/happiness"}]);
  entry("fun",[
   ["enjoyment","乐趣；快乐","n.",["乐趣","快乐","娱乐"],["fun-enjoyment"],"We had great fun building the snowman.","我们堆雪人玩得很开心。",null,"https://www.merriam-webster.com/dictionary/fun"],
   ["enjoyable","有趣的；令人愉快的","adj.",["有趣的","令人愉快的","供娱乐用的"],["fun-enjoyable"],"The guide suggested a fun activity for the children.","导游给孩子们推荐了一项有趣的活动。",null,"https://www.merriam-webster.com/dictionary/fun"]
  ],[{"terms":["玩笑","开玩笑"],"decision":"scope-excluded","reason":"开玩笑的动词未单列；玩笑可产生乐趣，但不等同于所有乐趣。","source":"https://www.merriam-webster.com/dictionary/fun"}]);
  entry("please",[
   ["satisfy","使高兴；使满意","v.",["使高兴","使满意","合...的心意","取悦","使人满意","讨好"],["please-satisfy"],"The result pleased both teams.","这个结果让两队都满意。",null,"https://www.merriam-webster.com/dictionary/please"],
   ["polite","请","adv.",["请","敬请"],["please-polite"],"Please close the door quietly.","请轻轻关门。",null,"https://www.merriam-webster.com/dictionary/please"],
   ["wish","愿意；想","v.",["愿意","想"],["please-wish"],"You may leave whenever you please.","你愿意什么时候走都可以。",null,"https://www.merriam-webster.com/dictionary/please"]
  ],[]);
  entry("keen",[
   ["eager","渴望的；热衷的","adj.",["渴望的","热衷的","热心的"],["keen-eager"],"She is keen to learn another language.","她渴望再学一门语言。",null,"https://www.merriam-webster.com/dictionary/keen"],
   ["sharp","锋利的","adj.",["锋利的"],["keen-sharp"],"The knife has a keen edge.","这把刀的刀刃很锋利。",null,"https://www.merriam-webster.com/dictionary/keen"],
   ["perceptive","敏锐的","adj.",["敏锐的"],["keen-perceptive","perceive-keen"],"He has a keen eye for detail.","他对细节有敏锐的观察力。",null,"https://www.merriam-webster.com/dictionary/keen"],
   ["intense","强烈的；激烈的","adj.",["强烈的","激烈的"],["keen-intense"],"There is keen competition for the scholarship.","这项奖学金的竞争很激烈。",null,"https://www.merriam-webster.com/dictionary/keen"],
   ["wail","恸哭；哀号","v.",["恸哭","哀号","痛哭","唱挽歌"],["keen-wail"],"Women keened beside the coffin.","妇女们在棺木旁恸哭。",null,"https://www.merriam-webster.com/dictionary/keen"]
  ],[{"terms":["敏捷的","挽歌"],"decision":"scope-excluded","reason":"挽歌是与哀号相关的名词，未混入热衷形容词；敏捷不等同于敏锐。","source":"https://www.merriam-webster.com/dictionary/keen"}]);
  entry("gentle",[
   ["kind","温柔的；和善的","adj.",["温柔的","和善的","文雅的"],["gentle-kind"],"The nurse spoke in a gentle voice.","护士用温柔的声音说话。",null,"https://www.merriam-webster.com/dictionary/gentle"],
   ["mild","轻柔的；温和的","adj.",["轻柔的","温和的"],["gentle-mild"],"A gentle breeze moved the curtains.","一阵微风吹动了窗帘。",null,"https://www.merriam-webster.com/dictionary/gentle"],
   ["gradual","平缓的；不陡的","adj.",["平缓的","不陡的"],["gentle-gradual"],"The path follows a gentle slope.","小路沿着一道缓坡延伸。",null,"https://www.merriam-webster.com/dictionary/gentle"]
  ],[]);
  entry("fortune",[
   ["wealth","大笔财产；巨款","n.",["大笔财产","巨款","财富","大量财产","财产"],["fortune-wealth"],"They spent a fortune restoring the house.","他们花了一大笔钱修复这座房子。",null,"https://www.merriam-webster.com/dictionary/fortune"],
   ["luck","运气；机遇","n.",["运气","机遇","好运"],["fortune-luck"],"We had the good fortune to meet the artist.","我们有幸见到了那位艺术家。",null,"https://www.merriam-webster.com/dictionary/fortune"],
   ["fate","命运；前途","n.",["命运","前途","兴隆"],["fortune-fate"],"The company's fortunes improved after the merger.","合并后，公司的境况好转了。",null,"https://www.merriam-webster.com/dictionary/fortune"]
  ],[]);
 }
 if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch13=register;
})(typeof window==='object'?window:globalThis);
