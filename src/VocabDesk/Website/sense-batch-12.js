/* Batch 12: reviewed public learning scope, original bilingual examples.
 * Source entries were read during review. No learner state is included. */
(function(scope){
 'use strict';
 function register(add){
  function entry(word,rows,refs){
   const e=add(word,rows,refs);e.reviewDate='2026-11-08';
   e.senses.forEach((s,i)=>s.source=rows[i][8]);
   e.sources=[...new Set([...rows.map(r=>r[8]),...refs.map(r=>r.source)])];
   return e;
  }
  entry("consume",[
   ["use-up","消耗；耗尽","v.",["消耗","耗尽","消费"],["consume-use-up"],"Heating the empty hall consumes more energy than lighting it.","给空荡的礼堂供暖比照明消耗更多能源。",null,"https://www.merriam-webster.com/dictionary/consume"],
   ["eat-drink","吃；喝；摄入","v.",["吃","喝","摄入"],["consume-eat-drink"],"The hikers consumed their last sandwiches beside the river.","徒步者在河边吃掉了最后几份三明治。",null,"https://www.merriam-webster.com/dictionary/consume"],
   ["destroy","烧毁；毁灭","v.",["烧毁","毁灭","消灭"],["consume-destroy"],"The warehouse fire consumed several stacks of wooden crates.","仓库大火烧毁了几堆木箱。",null,"https://www.merriam-webster.com/dictionary/consume"],
   ["engross","使充满强烈情绪；使着迷","v.",["使充满强烈情绪","使着迷"],["consume-engross"],"She was consumed with curiosity about the locked room.","她对那间上锁的房间充满了好奇。","be consumed with","https://www.merriam-webster.com/dictionary/consume"]
  ],[]);
  entry("promotion",[
   ["higher-rank","晋升；升级","n.",["晋升","升级","晋级"],["promotion-higher-rank"],"His promotion to supervisor meant taking responsibility for two teams.","他晋升为主管后，需要负责两个团队。",null,"https://www.merriam-webster.com/dictionary/promotion"],
   ["marketing","促销；推广","n.",["促销","推广","推销"],["promotion-marketing"],"The shop's weekend promotion attracted customers from nearby towns.","商店的周末促销吸引了附近城镇的顾客。",null,"https://www.merriam-webster.com/dictionary/promotion"],
   ["furtherance","促进；增进","n.",["促进","增进"],["promotion-furtherance"],"The charity supports the promotion of reading in rural schools.","这家慈善机构支持在乡村学校推广阅读。",null,"https://www.merriam-webster.com/dictionary/promotion"]
  ],[{"terms":["创建"],"decision":"context-required","reason":"promotion 的创建义依赖设立机构或晋升新职位等具体语境，不把它当作 create 的通用名词替代；本批区分晋升、促销与促进。","source":"https://www.merriam-webster.com/dictionary/promotion"}]);
  entry("swap",[
   ["exchange-verb","交换；互换","v.",["交换","互换","以货易货","替换"],["swap-exchange-verb"],"We swapped seats so that my daughter could see the stage.","我们换了座位，好让女儿看清舞台。",null,"https://www.merriam-webster.com/dictionary/swap"],
   ["exchange-noun","交换；互换的一次交易","n.",["交换","互换的一次交易","交易"],["swap-exchange-noun"],"The neighbours arranged a swap of gardening tools for the weekend.","邻居们安排在周末交换使用园艺工具。",null,"https://www.merriam-webster.com/dictionary/swap"]
  ],[]);
  entry("impose",[
   ["levy","征收；施加（税费、处罚等）","v.",["征收","施加（税费、处罚等）","征(税)"],["impose-levy"],"The council imposed a small charge for overnight parking.","市政委员会对通宵停车收取了少量费用。",null,"https://www.merriam-webster.com/dictionary/impose"],
   ["force-on","把…强加于","v.",["把…强加于","把...强加于","施加影响"],["impose-force-on"],"Parents should not impose their career choices on their children.","父母不应把自己的职业选择强加给孩子。","impose sth on sb","https://www.merriam-webster.com/dictionary/impose"],
   ["inconvenience","打扰；给…添麻烦；利用（好心）","v.",["打扰","给…添麻烦","利用（好心）","利用"],["impose-inconvenience"],"I do not want to impose on you by staying another week.","我不想再住一周，给你添麻烦。","impose on sb","https://www.merriam-webster.com/dictionary/impose"]
  ],[{"terms":["以...欺骗","欺骗"],"decision":"restricted-verified","reason":"词典有 impose fake goods on sb 这类以假充真的受限用法；不等于所有欺骗行为，本批保留强加与施压的核心用法。","source":"https://www.merriam-webster.com/dictionary/impose"}]);
  entry("dwindle",[
   ["shrink","逐渐减少；逐渐缩小","v.",["逐渐减少","逐渐缩小","减少","缩小","衰落","使缩小"],["dwindle-shrink","decrease-quantity"],"As the drought continued, the village's water reserves dwindled.","随着干旱持续，村里的储水逐渐减少。",null,"https://www.merriam-webster.com/dictionary/dwindle"]
  ],[]);
  entry("enrich",[
   ["improve","丰富；充实","v.",["丰富","充实","使丰富"],["enrich-improve"],"Talking to the former miners enriched our understanding of the town.","与退休矿工交谈丰富了我们对这座城镇的认识。",null,"https://www.merriam-webster.com/dictionary/enrich"],
   ["make-wealthy","使富裕","v.",["使富裕"],["enrich-make-wealthy"],"The new trade route enriched several coastal cities.","新商路使几座沿海城市富裕起来。",null,"https://www.merriam-webster.com/dictionary/enrich"],
   ["add-nutrients","使肥沃；增加营养","v.",["使肥沃","增加营养","使富含"],["enrich-add-nutrients"],"Compost enriches the soil without expensive chemical products.","堆肥能使土壤肥沃，无需昂贵的化学产品。",null,"https://www.merriam-webster.com/dictionary/enrich"]
  ],[{"terms":["浓缩提纯"],"decision":"scope-excluded","reason":"增加某一成分比例是加工技术义，如浓缩铀；本批教丰富、致富与增加营养，不把浓缩和提纯混作一般动词义。","source":"https://www.merriam-webster.com/dictionary/enrich"}]);
  entry("product",[
   ["commodity","产品；生产物","n.",["产品","生产物"],["product-commodity"],"Each product carries a label showing where it was made.","每件产品都贴有说明产地的标签。",null,"https://www.merriam-webster.com/dictionary/product"],
   ["result","结果；产物","n.",["结果","产物"],["product-result"],"The report is the product of months of patient interviews.","这份报告是数月耐心访谈的成果。",null,"https://www.merriam-webster.com/dictionary/product"],
   ["multiplication","乘积","n.",["乘积"],["product-multiplication"],"The product of seven and eight is fifty-six.","七和八的乘积是五十六。",null,"https://www.merriam-webster.com/dictionary/product"]
  ],[]);
  entry("attend",[
   ["be-present","出席；参加；上学","v.",["出席","参加","上学"],["attend-be-present"],"Over sixty residents attended the meeting about the new bridge.","六十多名居民参加了讨论新桥的会议。",null,"https://www.merriam-webster.com/dictionary/attend"],
   ["look-after","照料；照顾；处理","v.",["照料","照顾","处理","服侍"],["attend-look-after"],"A nurse attended to the injured cyclist before the ambulance arrived.","救护车到来前，一名护士照料了受伤的骑车人。","attend to","https://www.merriam-webster.com/dictionary/attend"],
   ["pay-attention","专心于；注意","v.",["专心于","注意"],["attend-pay-attention"],"Please attend to the safety instructions before using the machine.","使用机器前，请仔细听安全说明。","attend to","https://www.merriam-webster.com/dictionary/attend"],
   ["accompany","伴随；随之而来","v.",["伴随","随之而来"],["attend-accompany"],"Unexpected delays attended every stage of the building project.","这项建筑工程的每个阶段都伴随着意外延误。",null,"https://www.merriam-webster.com/dictionary/attend"]
  ],[]);
  entry("sale",[
   ["selling","出售；销售","n.",["出售","销售","卖","销售(货)"],["sale-selling"],"Money from the sale of the old bus paid for new equipment.","出售旧公交车所得的钱用于购买新设备。",null,"https://www.merriam-webster.com/dictionary/sale"],
   ["discount-event","减价出售；促销活动","n.",["减价出售","促销活动","廉价出售"],["sale-discount-event"],"She bought the winter coat during the department store's sale.","她在百货商店减价期间买了这件冬衣。",null,"https://www.merriam-webster.com/dictionary/sale"],
   ["revenue","销售额；销量","n. pl.",["销售额","销量"],["sale-revenue"],"Online sales rose after the company improved its delivery service.","公司改善配送服务后，网上销售额增加了。",null,"https://www.merriam-webster.com/dictionary/sale"],
   ["auction","拍卖","n.",["拍卖"],["sale-auction"],"The collection of antique clocks went into a public sale.","那批古董钟被送去公开拍卖。",null,"https://www.merriam-webster.com/dictionary/sale"]
  ],[]);
  entry("production",[
   ["manufacture","生产；制造；产生","n.",["生产","制造","产生","生成"],["production-manufacture"],"The factory halted production while workers repaired the main pump.","工人维修主泵时，工厂停止了生产。",null,"https://www.merriam-webster.com/dictionary/production"],
   ["output","产量","n.",["产量"],["production-output"],"Annual wheat production fell after the unusually dry spring.","异常干燥的春季过后，全年小麦产量下降了。",null,"https://www.merriam-webster.com/dictionary/production"],
   ["performance","演出；制作的戏剧或影视作品","n.",["演出","制作的戏剧或影视作品"],["production-performance"],"The students staged a lively production of a local folk tale.","学生们把一个本地民间故事编成了生动的演出。",null,"https://www.merriam-webster.com/dictionary/production"]
  ],[{"terms":["产物"],"decision":"context-required","reason":"名词可指产生的东西，亦可具体指文艺作品；本批教学项区分生产过程、产量与演出，旧译产物保留追溯，不另造重复目标。","source":"https://www.merriam-webster.com/dictionary/production"}]);
  entry("reliance",[
   ["dependence","依靠；依赖；信赖","n.",["依靠","依赖","信赖","信任","信心"],["reliance-dependence"],"Better bus services could reduce the town's reliance on private cars.","更好的公交服务可以减少镇上对私家车的依赖。","reliance on","https://www.merriam-webster.com/dictionary/reliance"]
  ],[{"terms":["受信赖的人(或事)"],"decision":"restricted-verified","reason":"词典保留所依赖的人或物这一名词义；日常训练以 reliance on 的依赖关系为主，避免与 dependability 混淆。","source":"https://www.merriam-webster.com/dictionary/reliance"}]);
  entry("treasure",[
   ["valuables","财宝；珍宝","n.",["财宝","珍宝","宝物","财富"],["treasure-valuables"],"Divers found no treasure inside the sunken merchant ship.","潜水员没有在沉没的商船里找到财宝。",null,"https://www.merriam-webster.com/dictionary/treasure"],
   ["precious-person-thing","珍贵的人或事物；瑰宝","n.",["珍贵的人或事物","瑰宝"],["treasure-precious-person-thing"],"The little theatre is a cultural treasure that the town cannot afford to lose.","这座小剧院是小镇不能失去的文化瑰宝。",null,"https://www.merriam-webster.com/dictionary/treasure"],
   ["cherish","珍爱；重视；珍藏","v.",["珍爱","重视","珍藏","秘藏"],["treasure-cherish"],"She treasures the handwritten letters her grandfather sent her.","她珍藏着祖父寄给她的亲笔信。",null,"https://www.merriam-webster.com/dictionary/treasure"]
  ],[]);
  entry("possess",[
   ["own","拥有；持有；占有","v.",["拥有","持有","占有"],["possess-own"],"Only two families in the village possessed a motor vehicle.","村里只有两户人家拥有机动车。",null,"https://www.merriam-webster.com/dictionary/possess"],
   ["have-quality","具有（品质、能力等）","v.",["具有（品质、能力等）","具有"],["possess-have-quality"],"The material possesses enough flexibility to bend without cracking.","这种材料有足够的柔韧性，能弯曲而不开裂。",null,"https://www.merriam-webster.com/dictionary/possess"],
   ["dominate","支配；使着魔","v.",["支配","使着魔","迷住"],["possess-dominate"],"He seemed possessed by the need to finish the model before dawn.","他仿佛着了魔，一心要在天亮前完成模型。","be possessed by","https://www.merriam-webster.com/dictionary/possess"]
  ],[{"terms":["克制"],"decision":"context-required","reason":"克制须在 possess oneself 等限定结构中理解；单独 possess 通常不是 restrain 的替代。","source":"https://www.merriam-webster.com/dictionary/possess"}]);
  entry("worthy",[
   ["deserving","值得的；配得上的","adj.",["值得的","配得上的"],["worthy-deserving"],"The proposal is worthy of serious consideration by the committee.","这项提案值得委员会认真考虑。","worthy of","https://www.merriam-webster.com/dictionary/worthy"],
   ["respectable","可敬的；有价值的","adj.",["可敬的","有价值的"],["worthy-respectable"],"They raised money for a worthy cause that supports homeless families.","他们为帮助无家可归家庭的有益事业筹款。",null,"https://www.merriam-webster.com/dictionary/worthy"],
   ["notable-person","名人；要人","n.",["名人","要人","杰出人物"],["worthy-notable-person"],"Several local worthies attended the opening of the restored library.","几位地方名流出席了修复后图书馆的开馆仪式。",null,"https://www.merriam-webster.com/dictionary/worthy"]
  ],[]);
  entry("valuable",[
   ["monetary","贵重的；值钱的","adj.",["贵重的","值钱的"],["valuable-monetary"],"The museum keeps its most valuable coins in a locked display.","博物馆把最贵重的钱币放在上锁的展柜里。",null,"https://www.merriam-webster.com/dictionary/valuable"],
   ["useful","宝贵的；有用的","adj.",["宝贵的","有用的","有价值的"],["valuable-useful"],"Her notes provided valuable clues about the missing painting.","她的笔记为寻找失踪画作提供了宝贵线索。",null,"https://www.merriam-webster.com/dictionary/valuable"],
   ["possessions","贵重物品","n. pl.",["贵重物品"],["valuable-possessions"],"Visitors must leave valuables in a secure locker before swimming.","游泳前，游客必须把贵重物品放进安全储物柜。",null,"https://www.merriam-webster.com/dictionary/valuable"]
  ],[{"terms":["可估价的"],"decision":"scope-excluded","reason":"可估价不等于贵重或有用；本批不把所有能估价的东西称为 valuable。","source":"https://www.merriam-webster.com/dictionary/valuable"}]);
  entry("value",[
   ["worth","价值；价格","n.",["价值","价格"],["value-worth"],"The storm caused a sharp fall in the value of damaged homes.","风暴使受损房屋的价值大幅下跌。",null,"https://www.merriam-webster.com/dictionary/value"],
   ["importance","重要性；用处","n.",["重要性","用处"],["value-importance"],"The value of careful planning became clear during the evacuation.","疏散过程中，周密规划的重要性显现出来。",null,"https://www.merriam-webster.com/dictionary/value"],
   ["numerical","数值","n.",["数值","计算结果"],["value-numerical"],"Enter the measured value in the second column of the table.","把测得的数值填入表格第二列。",null,"https://www.merriam-webster.com/dictionary/value"],
   ["principles","价值观；行为准则","n. pl.",["价值观","行为准则"],["value-principles"],"The school asks pupils to discuss the values behind their decisions.","学校让学生讨论自己决策背后的价值观。",null,"https://www.merriam-webster.com/dictionary/value"],
   ["estimate","估价；评价","v.",["估价","评价"],["value-estimate"],"An expert valued the damaged vase at less than fifty pounds.","一位专家把受损花瓶估价为不到五十英镑。",null,"https://www.merriam-webster.com/dictionary/value"],
   ["cherish","重视；珍视","v.",["重视","珍视"],["value-cherish"],"We value the volunteers who keep the reading room open.","我们珍视那些让阅览室持续开放的志愿者。",null,"https://www.merriam-webster.com/dictionary/value"]
  ],[{"terms":["购买力"],"decision":"context-required","reason":"购买力只是在货币价值语境下的解释，不与价值、价格另拆成无条件等价义。","source":"https://www.merriam-webster.com/dictionary/value"}]);
  entry("pay",[
   ["transfer-money","支付；付报酬；偿还","v.",["支付","付报酬","偿还"],["pay-transfer-money"],"She paid the mechanic before collecting her repaired bicycle.","她付钱给修车师傅后，取走了修好的自行车。",null,"https://www.merriam-webster.com/dictionary/pay"],
   ["be-profitable","有利；值得；划算","v.",["有利","值得","划算","带来好处"],["pay-be-profitable"],"It pays to check the timetable before leaving for the station.","去车站前查好时刻表是值得的。","it pays to","https://www.merriam-webster.com/dictionary/pay"],
   ["suffer-consequence","付出代价","v.",["付出代价"],["pay-suffer-consequence"],"The company paid dearly for ignoring the early safety warnings.","公司因忽视早期安全警告付出了沉重代价。","pay for","https://www.merriam-webster.com/dictionary/pay"],
   ["wages","工资；薪酬","n.",["工资","薪酬"],["pay-wages","employment-pay"],"Weekend staff receive extra pay for working late shifts.","周末员工上晚班能获得额外报酬。",null,"https://www.merriam-webster.com/dictionary/pay"],
   ["give-attention","给予（注意、尊重等）","v.",["给予（注意、尊重等）"],["pay-give-attention"],"Please pay attention to the warning above the narrow doorway.","请注意狭窄门口上方的警告。","pay attention to","https://www.merriam-webster.com/dictionary/pay"]
  ],[]);
  entry("occupy",[
   ["fill","占据（空间、时间等）","v.",["占据（空间、时间等）","占(时间、空间等)","占据"],["occupy-fill"],"The new equipment occupies most of the workshop's floor space.","新设备占据了车间大部分地面空间。",null,"https://www.merriam-webster.com/dictionary/occupy"],
   ["live-in","居住；使用（房屋）","v.",["居住","使用（房屋）","住进"],["occupy-live-in"],"A retired teacher occupies the flat above the bakery.","一位退休教师住在面包店楼上的公寓里。",null,"https://www.merriam-webster.com/dictionary/occupy"],
   ["control","占领；控制","v.",["占领","控制","占有"],["occupy-control"],"Troops occupied the bridge to prevent supplies reaching the enemy.","军队占领了桥梁，阻止补给到达敌方。",null,"https://www.merriam-webster.com/dictionary/occupy"],
   ["keep-busy","使忙于；使全神贯注","v.",["使忙于","使全神贯注","使从事"],["occupy-keep-busy"],"Repairing the old boat occupied him throughout the winter.","修理旧船让他整个冬天都忙个不停。",null,"https://www.merriam-webster.com/dictionary/occupy"]
  ],[{"terms":["担任"],"decision":"restricted-verified","reason":"occupy an office/post 指占据或担任职位；本批保留空间时间、居住、占领及忙于四类，不把担任扩展到所有 employ 语境。","source":"https://www.merriam-webster.com/dictionary/occupy"}]);
  entry("recommendation",[
   ["advice","建议；推荐的做法","n.",["建议","推荐的做法","劝告","建议书"],["recommendation-advice"],"The report's main recommendation was to repair the leaking roof first.","报告的主要建议是先修漏水的屋顶。",null,"https://www.merriam-webster.com/dictionary/recommendation"],
   ["endorsement","推荐；推荐信","n.",["推荐","推荐信","介绍"],["recommendation-endorsement"],"She submitted a recommendation from her former employer with the application.","她随申请提交了一份前雇主的推荐信。",null,"https://www.merriam-webster.com/dictionary/recommendation"]
  ],[]);
  entry("failure",[
   ["unsuccessful-result","失败；失败的人或事物","n.",["失败","失败的人或事物","失败者"],["failure-unsuccessful-result"],"The first trial was a failure, but it revealed a useful design flaw.","首次试验失败了，却暴露出一个有助改进的设计缺陷。",null,"https://www.merriam-webster.com/dictionary/failure"],
   ["malfunction","故障；衰竭；失效","n.",["故障","衰竭","失效"],["failure-malfunction"],"A power failure stopped the lifts for almost an hour.","停电使电梯停运了将近一小时。",null,"https://www.merriam-webster.com/dictionary/failure"],
   ["not-doing","未做成；未履行","n.",["未做成","未履行"],["failure-not-doing"],"His failure to lock the gate allowed the sheep to escape.","他没有锁好大门，让羊跑了出去。","failure to do sth","https://www.merriam-webster.com/dictionary/failure"],
   ["lack","缺乏；不足","n.",["缺乏","不足"],["failure-lack"],"A failure of rainfall left the fields unusually dry.","降雨不足使田地异常干燥。",null,"https://www.merriam-webster.com/dictionary/failure"]
  ],[{"terms":["破产"],"decision":"scope-excluded","reason":"词典有企业经营失败的专门解释，但 failure 本身不自动说明法院确认的破产状态；本批只教一般失败。","source":"https://www.merriam-webster.com/dictionary/failure"}]);
  entry("loss",[
   ["losing","失去；遗失；丧失","n.",["失去","遗失","丧失"],["loss-losing"],"The loss of her notebook meant repeating several weeks of measurements.","笔记本的遗失意味着她要重做数周的测量。",null,"https://www.merriam-webster.com/dictionary/loss"],
   ["financial","亏损；损失","n.",["亏损","损失","损耗"],["loss-financial"],"The small shop made a loss during its first winter.","这家小商店在第一个冬季出现了亏损。",null,"https://www.merriam-webster.com/dictionary/loss"],
   ["defeat","失败；输掉比赛","n.",["失败","输掉比赛","输"],["loss-defeat"],"The captain refused to blame the goalkeeper for the loss.","队长拒绝把失利归咎于守门员。",null,"https://www.merriam-webster.com/dictionary/loss"],
   ["bereavement","丧亲之痛；去世造成的损失","n.",["丧亲之痛","去世造成的损失"],["loss-bereavement"],"Neighbours brought meals to the family after their sudden loss.","那家人突然失去亲人后，邻居们给他们送来了饭菜。",null,"https://www.merriam-webster.com/dictionary/loss"]
  ],[{"terms":["错过","伤亡"],"decision":"context-required","reason":"须结合 loss of opportunity、losses 等结构确定所失之物或伤亡人数；不把 miss、casualties 的所有用法并入一个中文目标。","source":"https://www.merriam-webster.com/dictionary/loss"}]);
  entry("chance",[
   ["opportunity","机会","n.",["机会"],["chance-opportunity"],"The course gives adults a chance to learn a practical trade.","这门课程给成年人学习一门实用手艺的机会。",null,"https://www.merriam-webster.com/dictionary/chance"],
   ["probability","可能性；几率","n.",["可能性","几率"],["chance-probability"],"There is little chance of the road reopening before Monday.","这条路周一前重新开放的可能性很小。",null,"https://www.merriam-webster.com/dictionary/chance"],
   ["accident","偶然；意外","n.",["偶然","意外"],["chance-accident"],"We met by chance in a bookshop hundreds of miles from home.","我们在离家数百英里的书店偶然相遇。","by chance","https://www.merriam-webster.com/dictionary/chance"],
   ["risk","冒险；碰运气","v.",["冒险","碰运气"],["chance-risk"],"We decided not to chance crossing the flooded path.","我们决定不冒险穿过被淹的小径。",null,"https://www.merriam-webster.com/dictionary/chance"]
  ],[{"terms":["偶然发生"],"decision":"restricted-verified","reason":"chance to do / chance upon 表偶然做或遇见；本批核心项为机会、可能性、偶然与冒险。","source":"https://www.merriam-webster.com/dictionary/chance"}]);
  entry("fail",[
   ["unsuccessful","失败；未能做到","v.",["失败","未能做到"],["fail-unsuccessful"],"The first attempt failed because the rope was too short.","首次尝试失败了，因为绳子太短。",null,"https://www.merriam-webster.com/dictionary/fail"],
   ["not-do","未做；未履行","v.",["未做","未履行"],["fail-not-do"],"The driver failed to notice the temporary traffic lights.","司机没有注意到临时交通灯。","fail to do sth","https://www.merriam-webster.com/dictionary/fail"],
   ["stop-working","失灵；衰退；衰竭","v.",["失灵","衰退","衰竭","缺乏","中断"],["fail-stop-working"],"The old engine failed halfway across the lake.","旧发动机在驶到湖中央时失灵了。",null,"https://www.merriam-webster.com/dictionary/fail"],
   ["exam","不及格；使不及格","v.",["不及格","使不及格"],["fail-exam"],"He failed the driving test after missing a stop sign.","他没看到停车标志，因此未通过驾驶考试。",null,"https://www.merriam-webster.com/dictionary/fail"],
   ["let-down","使失望；辜负","v.",["使失望","辜负","使...失望"],["fail-let-down"],"Her friends promised that they would not fail her again.","朋友们承诺不会再辜负她。",null,"https://www.merriam-webster.com/dictionary/fail"]
  ],[{"terms":["忘记"],"decision":"context-required","reason":"fail to do 可能由于遗忘而没做，但并不必然含忘记这一原因；保留未做到的准确语义。","source":"https://www.merriam-webster.com/dictionary/fail"}]);
  entry("change",[
   ["alter","改变；变化","v.",["改变","变化"],["change-alter"],"The village changed rapidly after the railway station opened.","火车站开通后，村庄迅速发生了变化。",null,"https://www.merriam-webster.com/dictionary/change"],
   ["replace","更换；换乘；换衣","v.",["更换","换乘","换衣"],["change-replace"],"We changed buses at the market square to reach the coast.","我们在集市广场换乘公交车去海边。",null,"https://www.merriam-webster.com/dictionary/change"],
   ["exchange-currency","兑换（货币）","v.",["兑换（货币）","兑换"],["change-exchange-currency"],"She changed her remaining euros into pounds at the bank.","她在银行把剩余欧元兑换成英镑。",null,"https://www.merriam-webster.com/dictionary/change"],
   ["alteration","变化；改变","n.",["变化","改变"],["change-alteration"],"A small change in the route saved almost half an hour.","路线的小改动节省了将近半小时。",null,"https://www.merriam-webster.com/dictionary/change"],
   ["coins","零钱；找回的钱","n.",["零钱","找回的钱","找回的零钱","找头"],["change-coins"],"The driver counted out the change for my five-pound note.","司机数出了我付五英镑纸币后应找的零钱。",null,"https://www.merriam-webster.com/dictionary/change"]
  ],[]);
  entry("develop",[
   ["grow","发展；成长；开发","v.",["发展","成长","开发","使发达","进步","生长"],["develop-grow"],"The village developed into a busy port within two generations.","不到两代人的时间，村庄发展成了繁忙的港口。",null,"https://www.merriam-webster.com/dictionary/develop"],
   ["acquire","逐渐产生；患上","v.",["逐渐产生","患上"],["develop-acquire"],"Several walkers developed blisters after wearing wet boots all day.","几位徒步者穿了一整天湿靴子后，脚上起了水疱。",null,"https://www.merriam-webster.com/dictionary/develop"],
   ["photograph","冲洗；显影","v.",["冲洗","显影","洗印"],["develop-photograph"],"She developed the film in a darkroom behind the studio.","她在工作室后面的暗房里冲洗了胶卷。",null,"https://www.merriam-webster.com/dictionary/develop"],
   ["elaborate","展开；详细阐述","v.",["展开","详细阐述"],["develop-elaborate"],"The final chapter develops the argument using evidence from three cities.","最后一章用三座城市的证据展开论证。",null,"https://www.merriam-webster.com/dictionary/develop"]
  ],[]);
  entry("development",[
   ["growth","发展；成长；开发","n.",["发展","成长","开发","展开"],["development-growth"],"The bridge accelerated the economic development of the valley.","这座桥加快了山谷的经济发展。",null,"https://www.merriam-webster.com/dictionary/development"],
   ["new-event","新情况；新进展","n.",["新情况","新进展"],["development-new-event"],"The police announced a significant development in the missing-person case.","警方宣布失踪案取得了重要进展。",null,"https://www.merriam-webster.com/dictionary/development"],
   ["building-project","开发区；新建住宅区","n.",["开发区","新建住宅区"],["development-building-project"],"The new housing development includes a nursery and a small park.","新住宅区包括一所托儿所和一个小公园。",null,"https://www.merriam-webster.com/dictionary/development"]
  ],[]);
  entry("developed",[
   ["industrialised","发达的（国家、经济体）","adj.",["发达的（国家、经济体）","发达的（国家或地区）"],["developed-industrialised"],"The report compares energy use in developed and developing economies.","报告比较了发达经济体与发展中经济体的能源使用情况。",null,"https://www.merriam-webster.com/dictionary/developed"]
  ],[{"terms":["成熟的"],"decision":"context-required","reason":"fully developed 可形容发育充分或完善，未加限定的国家经济描述应译为发达；本批单独教后者，不将两者混装。","source":"https://www.merriam-webster.com/dictionary/developed"}]);
  entry("law",[
   ["legal-system","法律；法律体系；司法","n.",["法律","法律体系","司法","法律的制约","司法界"],["law-legal-system"],"The new law requires landlords to check their buildings regularly.","新法律要求房东定期检查楼房。",null,"https://www.merriam-webster.com/dictionary/law"],
   ["principle","法则；定律；规律","n.",["法则","定律","规律"],["law-principle"],"The experiment illustrates a basic law of motion.","这个实验说明了一条基本运动定律。",null,"https://www.merriam-webster.com/dictionary/law"],
   ["profession","法学；法律职业","n.",["法学","法律职业"],["law-profession"],"She chose to study law after volunteering at an advice centre.","在咨询中心做志愿者后，她选择学习法律。",null,"https://www.merriam-webster.com/dictionary/law"]
  ],[{"terms":["诉讼","起诉"],"decision":"scope-excluded","reason":"take someone to law 等历史或固定法律说法不使 law 成为所有诉讼、起诉行为的通用名词；本批保留法律体系、规律和法学。","source":"https://www.merriam-webster.com/dictionary/law"}]);
  entry("rule",[
   ["regulation","规则；规定；章程","n.",["规则","规定","章程","规律","标准"],["rule-regulation"],"One rule prevents visitors from feeding the animals.","有一条规定禁止游客给动物喂食。",null,"https://www.merriam-webster.com/dictionary/rule"],
   ["control-noun","统治；控制","n.",["统治","控制"],["rule-control-noun"],"The island remained under foreign rule for nearly a century.","这座岛受外国统治近一个世纪。",null,"https://www.merriam-webster.com/dictionary/rule"],
   ["govern","统治；管理；支配","v.",["统治","管理","支配","管辖"],["rule-govern"],"The king ruled the region from a fortress above the river.","国王从河流上方的堡垒统治这片地区。",null,"https://www.merriam-webster.com/dictionary/rule"],
   ["decide","裁定；裁决","v.",["裁定","裁决"],["rule-decide"],"The judge ruled that the documents could be released.","法官裁定这些文件可以公开。",null,"https://www.merriam-webster.com/dictionary/rule"],
   ["draw-lines","画直线；划线","v.",["画直线","划线"],["rule-draw-lines"],"She ruled a margin along the left side of every page.","她沿着每页左侧画出了一条页边线。",null,"https://www.merriam-webster.com/dictionary/rule"]
  ],[{"terms":["破折号","铅线","水线"],"decision":"scope-excluded","reason":"这些旧译涉及排版印刷或专门工具线条；本批教规定、统治、裁定和划线，不以普通破折号代替 dash。","source":"https://www.merriam-webster.com/dictionary/rule"}]);
  entry("norm",[
   ["standard","规范；准则；标准","n.",["规范","准则","标准","基准","模范"],["norm-standard"],"The study examines social norms about sharing household work.","这项研究考察了分担家务方面的社会规范。",null,"https://www.merriam-webster.com/dictionary/norm"],
   ["usual","常态；通常水平","n.",["常态","通常水平","平均数"],["norm-usual"],"Working from home became the norm for the small design team.","居家办公成了这个小设计团队的常态。",null,"https://www.merriam-webster.com/dictionary/norm"]
  ],[{"terms":["定额"],"decision":"scope-excluded","reason":"定额须结合工作或统计制度理解；本批区分一般规范与常态，不把所有配额视为 norm。","source":"https://www.merriam-webster.com/dictionary/norm"}]);
  entry("agreement",[
   ["accord","同意；一致；共识","n.",["同意","一致","共识"],["agreement-accord"],"There was broad agreement that the crossing needed better lighting.","大家普遍同意人行横道需要更好的照明。",null,"https://www.merriam-webster.com/dictionary/agreement"],
   ["contract","协议；合约；协定","n.",["协议","合约","协定","契约"],["agreement-contract"],"The two farms signed an agreement to share irrigation equipment.","两家农场签署了共享灌溉设备的协议。",null,"https://www.merriam-webster.com/dictionary/agreement"],
   ["grammar","（语法上的）一致","n.",["（语法上的）一致"],["agreement-grammar"],"The exercise tests agreement between the subject and the verb.","这道练习考查主语与动词的一致关系。",null,"https://www.merriam-webster.com/dictionary/agreement"]
  ],[]);
  entry("standard",[
   ["criterion","标准；规格","n.",["标准","规格"],["standard-criterion"],"Every helmet must meet the same safety standard.","每顶头盔都必须达到相同的安全标准。",null,"https://www.merriam-webster.com/dictionary/standard"],
   ["level","水平；水准","n.",["水平","水准"],["standard-level"],"The restaurant has maintained a high standard of service.","这家餐馆一直保持着很高的服务水准。",null,"https://www.merriam-webster.com/dictionary/standard"],
   ["usual","通常的；标准的；合规格的","adj.",["通常的","标准的","合规格的"],["standard-usual"],"Breakfast is included in the standard room price.","标准房价包含早餐。",null,"https://www.merriam-webster.com/dictionary/standard"],
   ["banner","旗帜；军旗","n.",["旗帜","军旗","旗"],["standard-banner"],"The soldiers followed a blue standard across the field.","士兵们跟着一面蓝色军旗穿过田野。",null,"https://www.merriam-webster.com/dictionary/standard"]
  ],[{"terms":["本位"],"decision":"restricted-verified","reason":"词典在货币制度中列出价值本位；本批常用训练选标准、水平、通常规格和旗帜，货币义仅作专业参考。","source":"https://www.merriam-webster.com/dictionary/standard"}]);
  entry("donate",[
   ["give","捐赠；捐献","v.",["捐赠","捐献"],["donate-give"],"Residents donated blankets to the emergency shelter.","居民向应急收容所捐赠了毯子。",null,"https://www.merriam-webster.com/dictionary/donate"]
  ],[]);
  entry("downsize",[
   ["reduce-staff","裁员；缩减规模","v.",["裁员","缩减规模","裁减人数"],["downsize-reduce-staff"],"The company downsized its sales team after losing a major contract.","公司失去一份重要合同后缩减了销售团队。",null,"https://www.merriam-webster.com/dictionary/downsize"],
   ["smaller-home","搬到较小的住所","v.",["搬到较小的住所","缩小尺寸","以较小尺寸设计"],["downsize-smaller-home"],"After the children left, the couple downsized to a flat near the station.","孩子们离家后，这对夫妇搬进了车站附近较小的公寓。",null,"https://www.merriam-webster.com/dictionary/downsize"]
  ],[]);
  entry("export",[
   ["send-abroad","出口；输出","v.",["出口","输出","传播"],["export-send-abroad"],"The cooperative exports dried fruit to shops across Europe.","这家合作社向欧洲各地的商店出口干果。",null,"https://www.merriam-webster.com/dictionary/export"],
   ["computer","导出（文件或数据）","v.",["导出（文件或数据）","导出"],["export-computer"],"Export the chart as an image before closing the report.","关闭报告前，请把图表导出为图片。",null,"https://www.merriam-webster.com/dictionary/export"],
   ["goods","出口商品；出口业务","n.",["出口商品","出口业务"],["export-goods"],"Coffee exports provide much of the region's income.","咖啡出口为该地区提供了大部分收入。",null,"https://www.merriam-webster.com/dictionary/export"]
  ],[]);
  entry("import",[
   ["bring-in","进口；引进","v.",["进口","引进","输入"],["import-bring-in"],"The island imports most of its fresh vegetables during winter.","这座岛冬季所需的新鲜蔬菜大多依赖进口。",null,"https://www.merriam-webster.com/dictionary/import"],
   ["computer","导入（文件或数据）","v.",["导入（文件或数据）","导入"],["import-computer"],"The program can import a list of names from a text file.","程序可以从文本文件导入姓名列表。",null,"https://www.merriam-webster.com/dictionary/import"],
   ["goods","进口商品；进口业务","n.",["进口商品","进口业务"],["import-goods"],"The tax applies to imports of certain manufactured goods.","该税适用于某些制成品的进口。",null,"https://www.merriam-webster.com/dictionary/import"],
   ["significance","含义；重要性","n.",["含义","重要性"],["import-significance"],"Only later did we understand the full import of her warning.","直到后来，我们才完全理解她那番警告的重要意义。",null,"https://www.merriam-webster.com/dictionary/import"]
  ],[]);
  entry("equal",[
   ["same","相等的；平等的；同等的","adj.",["相等的","平等的","同等的"],["equal-same"],"Each team received an equal share of the available equipment.","每个团队都分到了同等份额的设备。",null,"https://www.merriam-webster.com/dictionary/equal"],
   ["capable","能胜任的；有能力应付的","adj.",["能胜任的","有能力应付的"],["equal-capable"],"The small pump proved equal to the task of draining the cellar.","小水泵证明能胜任排干地下室积水的任务。","equal to","https://www.merriam-webster.com/dictionary/equal"],
   ["match-verb","等于；比得上","v.",["等于","比得上"],["equal-match-verb"],"This year's rainfall already equals last year's total.","今年的降雨量已经等于去年的总量。",null,"https://www.merriam-webster.com/dictionary/equal"],
   ["peer","同等的人；匹敌者","n.",["同等的人","匹敌者","同等的人或事物","对手"],["equal-peer"],"In patience and skill, the young restorer has few equals.","论耐心和技艺，这位年轻修复师少有对手。",null,"https://www.merriam-webster.com/dictionary/equal"]
  ],[{"terms":["导致"],"decision":"context-required","reason":"A equals B 可在语境中表示某情况意味着某后果，但等于不是 cause 的通用替代。","source":"https://www.merriam-webster.com/dictionary/equal"}]);
  entry("grand",[
   ["impressive","宏伟的；壮观的；豪华的","adj.",["宏伟的","壮观的","豪华的","庄重的","雄伟的","伟大的"],["grand-impressive"],"The grand entrance looked out onto a wide avenue.","宏伟的入口面向一条宽阔的大道。",null,"https://www.merriam-webster.com/dictionary/grand"],
   ["important","重大的；宏大的；主要的","adj.",["重大的","宏大的","主要的","显赫的","最高的"],["grand-important"],"Their grand plan was to reconnect the town with the river.","他们的宏大计划是重新连接城镇与河流。",null,"https://www.merriam-webster.com/dictionary/grand"],
   ["proud","傲慢的；摆架子的","adj.",["傲慢的","摆架子的"],["grand-proud"],"He had become too grand to greet his former neighbours.","他变得很摆架子，连以前的邻居都不打招呼。",null,"https://www.merriam-webster.com/dictionary/grand"],
   ["thousand","一千（货币单位，口语）","n.",["一千（货币单位，口语）"],["grand-thousand"],"The repairs cost almost two grand more than we expected.","修理费用比我们预期的多了近两千。",null,"https://www.merriam-webster.com/dictionary/grand"]
  ],[]);
  entry("effective",[
   ["successful","有效的；起作用的","adj.",["有效的","起作用的","有力的"],["effective-successful"],"The new drainage system was effective during the heavy rain.","新排水系统在大雨期间发挥了作用。",null,"https://www.merriam-webster.com/dictionary/effective"],
   ["operative","生效的；实行中的","adj.",["生效的","实行中的"],["effective-operative"],"The revised timetable becomes effective on the first of May.","修订后的时刻表从五月一日起生效。",null,"https://www.merriam-webster.com/dictionary/effective"],
   ["actual","实际的；事实上的","adj.",["实际的","事实上的"],["effective-actual"],"Travel time reduces the effective length of the working day.","通勤时间缩短了工作日的实际可用时长。",null,"https://www.merriam-webster.com/dictionary/effective"]
  ],[{"terms":["有生力量"],"decision":"scope-excluded","reason":"军队有效兵力是专门的名词复数用法；本批以有效、生效和实际三种形容词语义为范围。","source":"https://www.merriam-webster.com/dictionary/effective"}]);
  entry("condition",[
   ["state","情况；状况；状态","n.",["情况","状况","状态"],["condition-state"],"The survey records the condition of every bridge in the district.","这项调查记录了区内每座桥的状况。",null,"https://www.merriam-webster.com/dictionary/condition"],
   ["requirement","条件；前提","n.",["条件","前提"],["condition-requirement"],"One condition of the loan was that the roof be repaired.","贷款的一个条件是必须修好屋顶。",null,"https://www.merriam-webster.com/dictionary/condition"],
   ["illness","疾病；健康问题","n.",["疾病","健康问题"],["condition-illness"],"The nurse asked whether he had any existing medical conditions.","护士询问他是否有既往疾病。",null,"https://www.merriam-webster.com/dictionary/condition"],
   ["train","使适应；训练；使形成习惯","v.",["使适应","训练","使形成习惯","使健康"],["condition-train"],"Repeated practice conditioned the dogs to wait beside the gate.","反复训练使狗习惯在大门旁等候。",null,"https://www.merriam-webster.com/dictionary/condition"],
   ["make-dependent","使取决于；以…为条件","v.",["使取决于","以…为条件","以...为条件","决定"],["condition-make-dependent"],"The committee conditioned its support on a clear maintenance plan.","委员会以提出明确维护计划为条件给予支持。","condition sth on","https://www.merriam-webster.com/dictionary/condition"]
  ],[]);
  entry("scheme",[
   ["plan","方案；计划","n.",["方案","计划"],["scheme-plan"],"The town approved a scheme to turn the old railway into a cycle path.","镇上批准了把旧铁路改为自行车道的方案。",null,"https://www.merriam-webster.com/dictionary/scheme"],
   ["plot","诡计；阴谋","n.",["诡计","阴谋"],["scheme-plot"],"The scheme depended on persuading investors to sign false documents.","这项骗局依赖于说服投资者签署虚假文件。",null,"https://www.merriam-webster.com/dictionary/scheme"],
   ["arrangement","组合；配置；体系","n.",["组合","配置","体系","系统","图解","设计"],["scheme-arrangement"],"The room's colour scheme combines warm yellow with dark blue.","房间的配色方案把暖黄色与深蓝色搭配起来。",null,"https://www.merriam-webster.com/dictionary/scheme"],
   ["plot-verb","策划；密谋","v.",["策划","密谋","图谋"],["scheme-plot-verb"],"The two officials schemed to hide the missing funds.","两名官员密谋掩盖失踪资金。",null,"https://www.merriam-webster.com/dictionary/scheme"]
  ],[]);
  entry("license",[
   ["authorisation","执照；许可证；许可","n.",["执照","许可证","许可","特许"],["license-authorisation","batch12-equivalent-license-authorisation"],"The café needs a license to serve food outside.","咖啡馆需要许可证才能在室外供应食物。",null,"https://www.merriam-webster.com/dictionary/license"],
   ["authorise","批准；准许；颁发许可证","v.",["批准","准许","颁发许可证"],["license-authorise"],"The authority licensed the company to operate three ferry routes.","主管部门批准这家公司经营三条渡轮航线。",null,"https://www.merriam-webster.com/dictionary/license"],
   ["freedom","自由；放纵；不受约束","n.",["自由","放纵","不受约束"],["license-freedom"],"The poet uses artistic license to rearrange the historical events.","诗人运用艺术创作的自由重新编排历史事件。",null,"https://www.merriam-webster.com/dictionary/license"]
  ],[]);
  entry("permit",[
   ["allow","允许；准许；使可能","v.",["允许","准许","使可能","许可","使成为可能"],["permit-allow"],"The narrow doorway does not permit large boxes to pass through.","狭窄的门口不允许大箱子通过。",null,"https://www.merriam-webster.com/dictionary/permit"],
   ["authorisation","许可证；通行证；执照","n.",["许可证","通行证","执照"],["permit-authorisation","batch12-equivalent-license-authorisation"],"You need a permit to camp beside the reservoir.","在水库旁露营需要许可证。",null,"https://www.merriam-webster.com/dictionary/permit"]
  ],[]);
  entry("master",[
   ["expert","大师；能手","n.",["大师","能手"],["master-expert"],"The young carpenter learned from a master of traditional boatbuilding.","年轻木匠向一位传统造船大师学习。",null,"https://www.merriam-webster.com/dictionary/master"],
   ["controller","主人；掌管者","n.",["主人","掌管者"],["master-controller"],"The dog waited at the gate for its master.","狗在大门旁等候主人。",null,"https://www.merriam-webster.com/dictionary/master"],
   ["degree","硕士；硕士学位","n.",["硕士","硕士学位"],["master-degree"],"She completed a master's degree in environmental engineering.","她完成了环境工程硕士学位。",null,"https://www.merriam-webster.com/dictionary/master"],
   ["learn","精通；掌握；控制","v.",["精通","掌握","控制","征服"],["master-learn"],"It took several weeks to master the new recording equipment.","掌握新录音设备花了几个星期。",null,"https://www.merriam-webster.com/dictionary/master"],
   ["main","主要的；总的","adj.",["主要的","总的"],["master-main"],"The master copy remains in a secure archive.","原版总稿保存在安全的档案库里。",null,"https://www.merriam-webster.com/dictionary/master"]
  ],[{"terms":["母机","主人的"],"decision":"context-required","reason":"master machine 和 master 的修饰用法须看具体设备或人物；本批不把主人的等同于主要的，也不把所有母机列为一般名词义。","source":"https://www.merriam-webster.com/dictionary/master"}]);
  entry("doctor",[
   ["physician","医生","n.",["医生"],["doctor-physician"],"A doctor examined the climber's injured ankle.","一位医生检查了登山者受伤的脚踝。",null,"https://www.merriam-webster.com/dictionary/doctor"],
   ["academic","博士","n.",["博士"],["doctor-academic"],"She became a doctor of chemistry after completing her research.","完成研究后，她获得了化学博士学位。",null,"https://www.merriam-webster.com/dictionary/doctor"],
   ["falsify","篡改；伪造","v.",["篡改","伪造","修改"],["doctor-falsify"],"Someone had doctored the photograph to remove the damaged building.","有人篡改了照片，把受损建筑移除了。",null,"https://www.merriam-webster.com/dictionary/doctor"],
   ["treat","治疗；医治","v.",["治疗","医治","诊断","行医"],["doctor-treat"],"The farmer doctored the injured lamb until it could stand again.","农场主照料受伤的小羊，直到它能重新站起来。",null,"https://www.merriam-webster.com/dictionary/doctor"]
  ],[{"terms":["授以博士学位"],"decision":"scope-excluded","reason":"授予头衔是少用动词，不能据名词博士反推为普通颁学位用语；保留医生、博士、医治和篡改。","source":"https://www.merriam-webster.com/dictionary/doctor"}]);
  entry("platform",[
   ["raised-area","平台；讲台","n.",["平台","讲台"],["platform-raised-area"],"The speakers stood on a wooden platform beside the river.","演讲者站在河边的木制讲台上。",null,"https://www.merriam-webster.com/dictionary/platform"],
   ["station","站台；月台","n.",["站台","月台"],["platform-station"],"The train for the coast leaves from platform four.","开往海边的列车从四号站台发车。",null,"https://www.merriam-webster.com/dictionary/platform"],
   ["technology","平台（技术或交流媒介）","n.",["平台（技术或交流媒介）","论坛"],["platform-technology"],"The website provides a platform for local artists to sell their work.","网站为本地艺术家销售作品提供了平台。",null,"https://www.merriam-webster.com/dictionary/platform"],
   ["policy","政纲；政策纲领","n.",["政纲","政策纲领"],["platform-policy"],"Affordable housing was central to the party's election platform.","保障性住房是该党竞选纲领的核心。",null,"https://www.merriam-webster.com/dictionary/platform"]
  ],[]);
  entry("quality",[
   ["excellence","质量；品质；水准","n.",["质量","品质","水准"],["quality-excellence"],"The quality of the recordings improved after we replaced the microphone.","换了麦克风后，录音质量提高了。",null,"https://www.merriam-webster.com/dictionary/quality"],
   ["characteristic","特性；品格；才能","n.",["特性","品格","才能"],["quality-characteristic"],"Patience is a useful quality for anyone teaching young children.","耐心是教幼儿的人很需要的一种品质。",null,"https://www.merriam-webster.com/dictionary/quality"],
   ["superior","优质的；高质量的","adj.",["优质的","高质量的"],["quality-superior"],"The workshop sells quality tools that can last for decades.","作坊出售可使用数十年的优质工具。",null,"https://www.merriam-webster.com/dictionary/quality"]
  ],[]);
  entry("coverage",[
   ["reporting","报道；报道范围","n.",["报道","报道范围","新闻报导"],["coverage-reporting"],"Local radio provided live coverage of the council debate.","本地广播对市政辩论进行了现场直播。",null,"https://www.merriam-webster.com/dictionary/coverage"],
   ["insurance","保险保障；承保范围","n.",["保险保障","承保范围","保险总额"],["coverage-insurance"],"Check whether the policy includes coverage for flood damage.","请核对保单是否承保洪水损失。",null,"https://www.merriam-webster.com/dictionary/coverage"],
   ["reach","覆盖范围；覆盖程度","n.",["覆盖范围","覆盖程度","覆盖的范围","可达范围","覆盖度"],["coverage-reach"],"Mobile phone coverage disappears near the bottom of the valley.","接近谷底时，手机信号覆盖就消失了。",null,"https://www.merriam-webster.com/dictionary/coverage"]
  ],[]);
  entry("category",[
   ["class","类别；种类；分类","n.",["类别","种类","分类","类项"],["category-class"],"Please place each expense in the correct category.","请把每项开支归入正确的类别。",null,"https://www.merriam-webster.com/dictionary/category"]
  ],[]);
  entry("manual",[
   ["hand-operated","手工的；手动的；体力的","adj.",["手工的","手动的","体力的","手的","人工的"],["manual-hand-operated"],"The small boat has a manual pump for removing water.","这条小船配有用于排水的手动泵。",null,"https://www.merriam-webster.com/dictionary/manual"],
   ["handbook","手册；指南","n.",["手册","指南"],["manual-handbook"],"The manual explains how to replace the damaged filter.","手册说明了如何更换损坏的滤芯。",null,"https://www.merriam-webster.com/dictionary/manual"]
  ],[]);
  entry("volume",[
   ["space-measure","体积；容积；容量","n.",["体积","容积","容量"],["volume-space-measure"],"The tank's volume is measured before it is filled with water.","水箱注水前要测量其容积。",null,"https://www.merriam-webster.com/dictionary/volume"],
   ["book","卷；册","n.",["卷","册"],["volume-book"],"The library owns all six volumes of the explorer's journals.","图书馆藏有这位探险家日记的全部六卷。",null,"https://www.merriam-webster.com/dictionary/volume"],
   ["sound","音量","n.",["音量"],["volume-sound"],"Please lower the volume while the baby is sleeping.","宝宝睡觉时，请把音量调低。",null,"https://www.merriam-webster.com/dictionary/volume"],
   ["amount","总量；大量","n.",["总量","大量","许多","份量"],["volume-amount"],"The volume of traffic doubles during the summer holidays.","暑假期间的交通量增加了一倍。",null,"https://www.merriam-webster.com/dictionary/volume"]
  ],[{"terms":["成团卷起","把...收集成卷","大量的"],"decision":"scope-excluded","reason":"少用动词和 attributive volume 用法不纳入本批常用范围；书卷、体积、音量与数量分别训练。","source":"https://www.merriam-webster.com/dictionary/volume"}]);
  entry("minor",[
   ["less-important","较小的；次要的；轻微的","adj.",["较小的","次要的","轻微的","二流的","次要"],["minor-less-important"],"A minor adjustment stopped the door from scraping the floor.","一个小调整就让门不再刮地板。",null,"https://www.merriam-webster.com/dictionary/minor"],
   ["underage","未成年人","n.",["未成年人"],["minor-underage"],"The court treated him as a minor because he was only sixteen.","法院将他视为未成年人，因为他只有十六岁。",null,"https://www.merriam-webster.com/dictionary/minor"],
   ["secondary-study","辅修科目","n.",["辅修科目","副修科目"],["minor-secondary-study"],"She chose history as her minor alongside a degree in engineering.","她主修工程，同时选择历史作为辅修科目。",null,"https://www.merriam-webster.com/dictionary/minor"],
   ["music","小调的；小音阶的","adj.",["小调的","小音阶的"],["minor-music"],"The song changes from a major key to a minor key.","这首歌从大调转为小调。",null,"https://www.merriam-webster.com/dictionary/minor"],
   ["underage-adj","未成年的","adj.",["未成年的"],["minor-underage-adj"],"Minor children must be accompanied by an adult on this trip.","本次旅行中，未成年儿童必须由成人陪同。",null,"https://www.merriam-webster.com/dictionary/minor"],
   ["minor-in","辅修","v.",["辅修","副修"],["minor-minor-in"],"She minors in history while studying engineering.","她主修工程，同时辅修历史。","minor in","https://www.merriam-webster.com/dictionary/minor"]
  ],[]);
  entry("social",[
   ["societal","社会的；社会性的","adj.",["社会的","社会性的"],["social-societal"],"The report examines the social effects of closing rural schools.","报告考察了关闭乡村学校的社会影响。",null,"https://www.merriam-webster.com/dictionary/social"],
   ["companionship","社交的；群居的","adj.",["社交的","群居的"],["social-companionship"],"The club organises social events for people new to the area.","俱乐部为新搬来的人组织社交活动。",null,"https://www.merriam-webster.com/dictionary/social"],
   ["gathering","联谊会；社交聚会","n.",["联谊会","社交聚会","联欢会"],["social-gathering"],"The village social raised enough money to repair the playground.","村里的联谊会筹到了足够修理游乐场的资金。",null,"https://www.merriam-webster.com/dictionary/social"]
  ],[]);
  entry("subjective",[
   ["personal-view","主观的；受个人感受影响的","adj.",["主观的","受个人感受影响的","个人的","自觉的"],["subjective-personal-view"],"Judging a meal's flavour is partly subjective, even for trained chefs.","即使对受过训练的厨师，判断饭菜风味也部分带有主观性。",null,"https://www.merriam-webster.com/dictionary/subjective"]
  ],[]);
  entry("political",[
   ["government","政治的；政府的；政党的","adj.",["政治的","政府的","政党的","政治上的","从事政治的","党派政治的"],["political-government"],"The museum explains the political changes that followed the war.","博物馆解释了战后发生的政治变化。",null,"https://www.merriam-webster.com/dictionary/political"]
  ],[]);
  entry("majority",[
   ["more-than-half","多数；过半数","n.",["多数","过半数","大半"],["majority-more-than-half"],"A majority of residents supported the plan to plant more trees.","多数居民支持增加树木种植的计划。",null,"https://www.merriam-webster.com/dictionary/majority"],
   ["vote-margin","多数票差；领先票数","n.",["多数票差","领先票数"],["majority-vote-margin"],"She won the seat with a majority of just thirty votes.","她仅以领先三十票赢得了席位。",null,"https://www.merriam-webster.com/dictionary/majority"],
   ["adulthood","成年；法定成年年龄","n.",["成年","法定成年年龄"],["majority-adulthood"],"The trust holds the money until the child reaches majority.","信托代管这笔钱，直到孩子成年。",null,"https://www.merriam-webster.com/dictionary/majority"]
  ],[{"terms":["多数逻辑"],"decision":"scope-excluded","reason":"数字电路中多数逻辑是专业组合，不是日常多数或法定成年含义；本批不单设电子技术目标。","source":"https://www.merriam-webster.com/dictionary/majority"}]);
  entry("logic",[
   ["reasoning","逻辑；推理方法；逻辑学","n.",["逻辑","推理方法","逻辑学","推理的方法","推理","逻辑性"],["logic-reasoning"],"The logic behind the decision was difficult to explain to residents.","很难向居民解释这个决定背后的逻辑。",null,"https://www.merriam-webster.com/dictionary/logic"],
   ["circuit","逻辑电路；逻辑系统","n.",["逻辑电路","逻辑系统"],["logic-circuit"],"A fault in the control logic prevented the alarm from resetting.","控制逻辑中的故障导致警报无法复位。",null,"https://www.merriam-webster.com/dictionary/logic"]
  ],[]);
  entry("logical",[
   ["reasonable","合乎逻辑的；合乎情理的","adj.",["合乎逻辑的","合乎情理的","符合逻辑的","必然的"],["logical-reasonable"],"Taking the earlier train seemed the logical choice in bad weather.","恶劣天气下，乘坐更早的火车似乎是合理选择。",null,"https://www.merriam-webster.com/dictionary/logical"],
   ["logic-related","逻辑学的；逻辑推理的","adj.",["逻辑学的","逻辑推理的"],["logical-logic-related"],"The course introduces basic logical operations through simple puzzles.","这门课程通过简单谜题介绍基本逻辑运算。",null,"https://www.merriam-webster.com/dictionary/logical"]
  ],[]);
  entry("plus",[
   ["addition","加；加上","prep.",["加","加上","正号","加号","附加额","正差"],["plus-addition"],"Four plus nine gives the number written on the label.","四加九得到标签上写的数字。",null,"https://www.merriam-webster.com/dictionary/plus"],
   ["extra","外加；还有","conj./prep.",["外加","还有","附加的"],["plus-extra"],"The room has a balcony, plus a small kitchen for guests.","房间有阳台，外加一间供客人使用的小厨房。",null,"https://www.merriam-webster.com/dictionary/plus"],
   ["positive","正的；零度以上的","adj.",["正的","零度以上的","正数"],["plus-positive"],"The temperature rose from minus two to plus five overnight.","气温一夜之间从零下二度升到零上五度。",null,"https://www.merriam-webster.com/dictionary/plus"],
   ["advantage","优点；有利因素","n.",["优点","有利因素","增益"],["plus-advantage"],"Being close to the station is a major plus for the hotel.","靠近车站是这家酒店的一大优势。",null,"https://www.merriam-webster.com/dictionary/plus"]
  ],[]);
  entry("sum",[
   ["total","总和；总数","n.",["总和","总数"],["sum-total"],"The sum of the three measurements is written below the table.","三次测量值的总和写在表格下方。",null,"https://www.merriam-webster.com/dictionary/sum"],
   ["money","金额；一笔钱","n.",["金额","一笔钱"],["sum-money"],"The repairs required a larger sum than the village had saved.","维修所需金额超过了村里积蓄的钱。",null,"https://www.merriam-webster.com/dictionary/sum"],
   ["add","总计；合计","v.",["总计","合计"],["sum-add"],"The final row sums the costs of materials and transport.","最后一行合计了材料和运输费用。",null,"https://www.merriam-webster.com/dictionary/sum"],
   ["summarise","概括；总结","v.",["概括","总结","概要"],["sum-summarise"],"The chair summed up the main objections before calling a vote.","主席在表决前概括了主要反对意见。","sum up","https://www.merriam-webster.com/dictionary/sum"]
  ],[{"terms":["顶点"],"decision":"restricted-verified","reason":"词典有 utmost degree 的扩展义，不能泛指任何物理最高点；本批限总和、金额、合计与总结。","source":"https://www.merriam-webster.com/dictionary/sum"},{"terms":["系统实用程序和维护"],"decision":"scope-excluded","reason":"旧词库混入软件缩略语展开；不是普通英语 sum 的词义，不能作为翻译目标。","source":"https://www.merriam-webster.com/dictionary/sum"}]);
  entry("minus",[
   ["subtract","减；减去","prep.",["减","减去"],["minus-subtract"],"Fifteen minus seven leaves eight tickets for the evening show.","十五减七，晚场演出还剩八张票。",null,"https://www.merriam-webster.com/dictionary/minus"],
   ["without","缺少；没有","prep.",["缺少","没有","不足","缺"],["minus-without"],"He arrived at the station minus the bag containing his lunch.","他到了车站，却没带装着午饭的包。",null,"https://www.merriam-webster.com/dictionary/minus"],
   ["negative","负的；零下的","adj.",["负的","零下的","负号","负差","减的"],["minus-negative"],"The freezer must stay below minus eighteen degrees.","冰柜必须保持在零下十八度以下。",null,"https://www.merriam-webster.com/dictionary/minus"],
   ["disadvantage","缺点；不利因素","n.",["缺点","不利因素"],["minus-disadvantage"],"The main minus is the lack of a lift to the upper floor.","主要缺点是没有通往楼上的电梯。",null,"https://www.merriam-webster.com/dictionary/minus"]
  ],[{"terms":["阴性的"],"decision":"scope-excluded","reason":"词典涉及部分生物配型标记等专业 negative 用法；不将 minus 当成一般生物阴性或性别形容词。","source":"https://www.merriam-webster.com/dictionary/minus"}]);
  entry("chart",[
   ["information","图表；示意图","n.",["图表","示意图"],["chart-information","batch12-equivalent-chart-information"],"The chart compares water use in four different crops.","图表比较了四种作物的用水量。",null,"https://www.merriam-webster.com/dictionary/chart"],
   ["map","海图；航图","n.",["海图","航图"],["chart-map"],"The captain checked the chart before approaching the shallow bay.","船长在驶近浅海湾前查看了海图。",null,"https://www.merriam-webster.com/dictionary/chart"],
   ["record","记录；用图表表示；绘制","v.",["记录","用图表表示","绘制","制成图表"],["chart-record"],"Researchers charted the river's changing course over fifty years.","研究人员绘出了这条河五十年来的河道变化。",null,"https://www.merriam-webster.com/dictionary/chart"]
  ],[]);
  entry("cube",[
   ["solid","立方体；方块","n.",["立方体","方块"],["cube-solid"],"Each wooden cube has a different colour painted on its faces.","每块木制立方体的各面都涂着不同颜色。",null,"https://www.merriam-webster.com/dictionary/cube"],
   ["power-noun","立方；三次幂","n.",["立方","三次幂"],["cube-power-noun"],"The cube of three is twenty-seven.","三的立方是二十七。",null,"https://www.merriam-webster.com/dictionary/cube"],
   ["power-verb","求…的立方","v.",["求…的立方"],["cube-power-verb"],"Cube the side length to calculate the box's volume.","将边长求立方，就能算出盒子的体积。",null,"https://www.merriam-webster.com/dictionary/cube"],
   ["cut","把…切成小方块","v.",["把…切成小方块"],["cube-cut"],"Cube the potatoes before adding them to the soup.","把土豆切成小方块后再放进汤里。",null,"https://www.merriam-webster.com/dictionary/cube"]
  ],[]);
  entry("graph",[
   ["plot","曲线图；坐标图；图表","n.",["曲线图","坐标图","图表","图形"],["graph-plot","batch12-equivalent-chart-information"],"The graph shows how river levels changed after the storm.","这张曲线图显示了暴风雨后河流水位的变化。",null,"https://www.merriam-webster.com/dictionary/graph"],
   ["draw","绘制曲线图；用图表示","v.",["绘制曲线图","用图表示"],["graph-draw"],"The students graphed the temperature readings from the greenhouse.","学生们把温室温度读数绘成了曲线图。",null,"https://www.merriam-webster.com/dictionary/graph"]
  ],[]);
  entry("diagram",[
   ["explanatory-drawing","示意图；图解","n.",["示意图","图解","图表"],["diagram-explanatory-drawing","batch12-equivalent-chart-information"],"A diagram beside the machine shows the correct position of each valve.","机器旁的示意图标明了各个阀门的正确位置。",null,"https://www.merriam-webster.com/dictionary/diagram"],
   ["represent","用图解表示；绘制示意图","v.",["用图解表示","绘制示意图"],["diagram-represent"],"She diagrammed the water cycle before explaining each stage.","她先画出水循环示意图，再解释各个阶段。",null,"https://www.merriam-webster.com/dictionary/diagram"]
  ],[]);
  entry("graphic",[
   ["visual","图形的；图解的；绘画的","adj.",["图形的","图解的","绘画的","绘画似的"],["graphic-visual"],"The report includes a graphic summary of the survey results.","报告附有调查结果的图示摘要。",null,"https://www.merriam-webster.com/dictionary/graphic"],
   ["vivid","生动的；逼真的；细节鲜明的","adj.",["生动的","逼真的","细节鲜明的","轮廓分明的"],["graphic-vivid"],"His graphic description helped us imagine the crowded harbour.","他的生动描述让我们想象出拥挤的港口。",null,"https://www.merriam-webster.com/dictionary/graphic"],
   ["image","图形；插图","n.",["图形","插图"],["graphic-image"],"A simple graphic marks every safe crossing on the map.","地图上用简单图形标出每个安全过街点。",null,"https://www.merriam-webster.com/dictionary/graphic"]
  ],[]);
  entry("blend",[
   ["mix-verb","混合；调和；融合","v.",["混合","调和","融合"],["blend-mix-verb","batch12-equivalent-mix-combine"],"Blend the oats with warm milk until the mixture becomes smooth.","把燕麦和温牛奶搅拌混合，直到质地顺滑。",null,"https://www.merriam-webster.com/dictionary/blend"],
   ["harmonise","协调；融为一体","v.",["协调","融为一体"],["blend-harmonise"],"The new extension blends with the original stone building.","新扩建部分与原有石建筑融为一体。","blend with","https://www.merriam-webster.com/dictionary/blend"],
   ["mixture","混合物；混合体","n.",["混合物","混合体"],["blend-mixture"],"The tea is a blend of leaves from three regions.","这种茶由三个地区的茶叶混合而成。",null,"https://www.merriam-webster.com/dictionary/blend"]
  ],[]);
  entry("mix",[
   ["combine","混合；搅拌","v.",["混合","搅拌","使混合","使结合","相混合"],["mix-combine","batch12-equivalent-mix-combine"],"Mix the flour and water in a large bowl.","在大碗里把面粉和水混合。",null,"https://www.merriam-webster.com/dictionary/mix"],
   ["confuse","弄混；混淆","v.",["弄混","混淆","混乱","糊涂"],["mix-confuse"],"I mixed up the two addresses and delivered the parcel to the wrong house.","我把两个地址弄混，把包裹送错了人家。","mix up","https://www.merriam-webster.com/dictionary/mix"],
   ["socialise","交往；相处","v.",["交往","相处","参与"],["mix-socialise"],"The new student found it easy to mix with her classmates.","新同学觉得与班上同学相处很容易。","mix with","https://www.merriam-webster.com/dictionary/mix"],
   ["mixture","混合物；组合","n.",["混合物","组合"],["mix-mixture"],"The market attracts a mix of local residents and tourists.","这个市场吸引了本地居民和游客等不同人群。",null,"https://www.merriam-webster.com/dictionary/mix"],
   ["audio","混音；混合录制","v.",["混音","混合录制"],["mix-audio"],"The engineer mixed the voices and music in a small studio.","工程师在小工作室里把人声和音乐混合录制。",null,"https://www.merriam-webster.com/dictionary/mix"]
  ],[]);
  entry("schedule",[
   ["timetable","时间表；日程；计划表","n.",["时间表","日程","计划表","一览表","议事日程"],["schedule-timetable"],"The revised schedule leaves ten minutes between each appointment.","修订后的时间表在每次预约之间留出十分钟。",null,"https://www.merriam-webster.com/dictionary/schedule"],
   ["arrange","安排；预定","v.",["安排","预定","编制目录","制...表"],["schedule-arrange"],"They scheduled the inspection for the morning before the shop opened.","他们把检查安排在商店开门前的上午。",null,"https://www.merriam-webster.com/dictionary/schedule"]
  ],[]);
  entry("term",[
   ["expression","术语；词语","n.",["术语","词语","专有名词","检索词"],["term-expression"],"The guide explains each technical term before using it.","指南在使用每个技术术语前都会解释其含义。",null,"https://www.merriam-webster.com/dictionary/term"],
   ["period","期限；任期；学期","n.",["期限","任期","学期"],["term-period"],"The autumn term ends two weeks before the winter festival.","秋季学期在冬季庆典前两周结束。",null,"https://www.merriam-webster.com/dictionary/term"],
   ["conditions","条件；条款；价钱","n. pl.",["条件","条款","价钱"],["term-conditions"],"Read the payment terms before signing the equipment rental agreement.","签订设备租赁协议前，请阅读付款条款。",null,"https://www.merriam-webster.com/dictionary/term"],
   ["relationship","关系；交情","n. pl.",["关系","交情","地位"],["term-relationship"],"The neighbours remained on friendly terms after the dispute.","争执过后，邻居们仍然保持友好关系。","on ... terms","https://www.merriam-webster.com/dictionary/term"],
   ["mathematics","项（数学表达式或数列）","n.",["项（数学表达式或数列）","项"],["term-mathematics"],"The first term of the sequence is followed by an even number.","这个数列的第一项后面是一个偶数。",null,"https://www.merriam-webster.com/dictionary/term"],
   ["call","称为；把…叫作","v.",["称为","把…叫作","称","呼"],["term-call"],"The researchers termed the effect a temporary adaptation.","研究人员把这种效应称为暂时适应。",null,"https://www.merriam-webster.com/dictionary/term"]
  ],[{"terms":["界石"],"decision":"scope-excluded","reason":"界标与古典建筑雕像柱属于历史专业义，不与术语、期限、条款、关系或数学项混用。","source":"https://www.merriam-webster.com/dictionary/term"}]);
  entry("practise",[
   ["train","练习；训练","v.",["练习","训练","实习"],["practise-train"],"She practises the difficult passage slowly before playing the whole piece.","她先慢慢练习难的乐段，再演奏整首曲子。",null,"https://www.merriam-webster.com/dictionary/practise"],
   ["profession","执业；从事（职业）","v.",["执业","从事（职业）","从事(职业)"],["practise-profession"],"He practised medicine in a remote village for twenty years.","他在偏远村庄行医二十年。",null,"https://www.merriam-webster.com/dictionary/practise"],
   ["act","实行；践行","v.",["实行","践行","实践"],["practise-act"],"The club asks members to practise the fairness they expect from others.","俱乐部要求会员践行他们期望他人做到的公平。",null,"https://www.merriam-webster.com/dictionary/practise"]
  ],[]);
  entry("elementary",[
   ["basic","基本的；初步的；初级的","adj.",["基本的","初步的","初级的","基础的"],["elementary-basic"],"The first class introduces elementary ideas about electricity.","第一节课介绍关于电的基本概念。",null,"https://www.merriam-webster.com/dictionary/elementary"],
   ["school","小学的","adj.",["小学的"],["elementary-school"],"The elementary school shares its playground with the village nursery.","这所小学与村里的幼儿园共用操场。",null,"https://www.merriam-webster.com/dictionary/elementary"]
  ],[{"terms":["元素的"],"decision":"scope-excluded","reason":"普通学习语境中表示基本或初级，化学元素通常用 elemental；特殊历史用法不单设目标。","source":"https://www.merriam-webster.com/dictionary/elementary"}]);
  entry("profound",[
   ["insight","深刻的；渊博的","adj.",["深刻的","渊博的"],["profound-insight"],"Her questions revealed a profound understanding of the community's history.","她的问题体现了对社区历史的深刻理解。",null,"https://www.merriam-webster.com/dictionary/profound"],
   ["intense","深切的；极大的","adj.",["深切的","极大的","深厚的"],["profound-intense"],"The closure had a profound effect on families who depended on the factory.","工厂关闭对依赖它的家庭产生了深远影响。",null,"https://www.merriam-webster.com/dictionary/profound"],
   ["deep","深的；深度很大的","adj.",["深的","深度很大的","极深的"],["profound-deep"],"After the long journey, he fell into a profound sleep.","长途旅行后，他陷入了沉睡。",null,"https://www.merriam-webster.com/dictionary/profound"]
  ],[]);
  entry("forum",[
   ["discussion","论坛；讨论平台；讨论会","n.",["论坛","讨论平台","讨论会","专题讨论","公共论坛"],["forum-discussion"],"The library hosts a forum where residents can question local planners.","图书馆举办论坛，让居民向本地规划人员提问。",null,"https://www.merriam-webster.com/dictionary/forum"],
   ["roman-square","（古罗马的）公共广场","n.",["（古罗马的）公共广场","公开讨论的广场"],["forum-roman-square"],"The ancient forum once held markets and public debates.","这座古代公共广场曾举办集市和公开辩论。",null,"https://www.merriam-webster.com/dictionary/forum"]
  ],[{"terms":["法庭"],"decision":"restricted-verified","reason":"词典有司法机构的专业义；本批保留讨论论坛和古罗马广场，不把一般论坛都解释为法庭。","source":"https://www.merriam-webster.com/dictionary/forum"}]);
  entry("basic",[
   ["fundamental","基本的；基础的；根本的","adj.",["基本的","基础的","根本的","初级的"],["basic-fundamental"],"The kit contains the basic tools needed to repair a bicycle.","工具箱包含修理自行车所需的基本工具。",null,"https://www.merriam-webster.com/dictionary/basic"],
   ["alkaline","碱性的","adj.",["碱性的"],["basic-alkaline"],"The basic solution turned the test paper blue.","碱性溶液使试纸变蓝。",null,"https://www.merriam-webster.com/dictionary/basic"],
   ["essentials","基本原理；基本要素","n. pl.",["基本原理","基本要素"],["basic-essentials"],"The course teaches the basics of reading a map.","这门课程教授读地图的基本知识。",null,"https://www.merriam-webster.com/dictionary/basic"]
  ],[]);
  entry("selective",[
   ["choosy","有选择的；严格挑选的","adj.",["有选择的","严格挑选的","选择的","选择性的"],["selective-choosy"],"The scholarship programme is highly selective and admits only twelve students.","奖学金项目选拔十分严格，只录取十二名学生。",null,"https://www.merriam-webster.com/dictionary/selective"],
   ["specific-action","选择性作用的；针对特定对象的","adj.",["选择性作用的","针对特定对象的"],["selective-specific-action"],"The researchers developed a selective filter that removes one type of particle.","研究人员研制了一种能去除特定颗粒的选择性滤器。",null,"https://www.merriam-webster.com/dictionary/selective"]
  ],[]);
  entry("heading",[
   ["title","标题；题头","n.",["标题","题头","起始字","上标题"],["heading-title"],"Write a clear heading above each section of your report.","在报告每一节上方写一个清晰标题。",null,"https://www.merriam-webster.com/dictionary/heading"],
   ["direction","航向；行进方向","n.",["航向","行进方向","方向"],["heading-direction"],"The pilot adjusted the aircraft's heading to avoid the storm.","飞行员调整飞机航向，以避开风暴。",null,"https://www.merriam-webster.com/dictionary/heading"]
  ],[]);
  entry("present",[
   ["here","在场的；出席的","adj.",["在场的","出席的"],["present-here"],"Everyone present at the meeting received a copy of the plan.","出席会议的每个人都拿到了一份计划。",null,"https://www.merriam-webster.com/dictionary/present"],
   ["current","目前的；现存的","adj.",["目前的","现存的"],["present-current"],"The present system makes it difficult to reserve a seat.","现行系统让预订座位变得困难。",null,"https://www.merriam-webster.com/dictionary/present"],
   ["now","现在；目前","n.",["现在","目前"],["present-now"],"The exhibition connects the town's industrial past with the present.","展览将小镇的工业历史与现在联系起来。",null,"https://www.merriam-webster.com/dictionary/present"],
   ["gift","礼物","n.",["礼物"],["present-gift"],"She wrapped a small present for the neighbour who had helped her.","她给曾帮助她的邻居包好了一份小礼物。",null,"https://www.merriam-webster.com/dictionary/present"],
   ["show","呈现；展示；提交","v.",["呈现","展示","提交"],["present-show"],"The students presented their findings to the town council.","学生们向市政委员会展示了研究结果。",null,"https://www.merriam-webster.com/dictionary/present"],
   ["bestow","赠送；颁发","v.",["赠送","颁发"],["present-bestow"],"The mayor presented the volunteers with certificates of thanks.","市长向志愿者颁发了感谢证书。",null,"https://www.merriam-webster.com/dictionary/present"],
   ["introduce","主持（节目）","v.",["主持节目"],["present-introduce"],"She presents a weekly radio programme about local wildlife.","她主持一档关于本地野生动物的每周广播节目。",null,"https://www.collinsdictionary.com/dictionary/english/present"],
   ["introduce-person","介绍；引见","v.",["介绍","引见"],["present-introduce-person"],"The host presented the visiting writer to the audience.","主持人向观众介绍了来访的作家。",null,"https://www.merriam-webster.com/dictionary/present"]
  ],[]);
  entry("point",[
   ["essential","要点；论点；目的","n.",["要点","论点","目的","特点"],["point-essential"],"The main point of the talk was that small changes can save energy.","演讲的主要观点是，小改变也能节省能源。",null,"https://www.merriam-webster.com/dictionary/point"],
   ["location","地点；位置","n.",["地点","位置"],["point-location"],"We agreed to meet at the point where the two paths join.","我们约好在两条小径交汇处见面。",null,"https://www.merriam-webster.com/dictionary/point"],
   ["tip","尖端；尖头","n.",["尖端","尖头"],["point-tip"],"The point of the needle broke while she was sewing thick cloth.","她缝厚布时，针尖折断了。",null,"https://www.merriam-webster.com/dictionary/point"],
   ["score","分数；得分","n.",["分数","得分"],["point-score"],"The team needed one more point to reach the final.","这支队伍再得一分就能进入决赛。",null,"https://www.merriam-webster.com/dictionary/point"],
   ["decimal","小数点；点号","n.",["小数点","点号","标点"],["point-decimal"],"Put the decimal point between the second and third digits.","把小数点放在第二位和第三位数字之间。",null,"https://www.merriam-webster.com/dictionary/point"],
   ["direct","指；指向；表明","v.",["指","指向","表明","瞄准"],["point-direct"],"The guide pointed towards a narrow gap in the rocks.","向导指向岩石间的一道窄缝。",null,"https://www.merriam-webster.com/dictionary/point"],
   ["indicate","指出；强调","v.",["指出","强调"],["point-indicate"],"The engineer pointed out a crack above the window.","工程师指出了窗户上方的一条裂缝。","point out","https://www.merriam-webster.com/dictionary/point"],
   ["geometry","点（几何中的位置）","n.",["点（几何中的位置）","点"],["point-geometry"],"Mark the point where the two lines cross.","标出两条线相交的点。",null,"https://www.merriam-webster.com/dictionary/point"],
   ["stage","时刻；阶段","n.",["时刻","阶段"],["point-stage"],"At that point, we decided to turn back before the weather worsened.","在那一刻，我们决定趁天气变坏前返回。",null,"https://www.merriam-webster.com/dictionary/point"]
  ],[{"terms":["穴位","弄尖","加标点于"],"decision":"scope-excluded","reason":"这些是专门身体部位、工具加工或较少用的编辑动词解释；本批核心范围为要点、位置、尖端、得分、点号、指向、指出与几何点。","source":"https://www.merriam-webster.com/dictionary/point"}]);
  entry("opinion",[
   ["view","意见；看法；主张","n.",["意见","看法","主张"],["opinion-view"],"Residents expressed different opinions about the proposed cycle lane.","居民对拟议的自行车道发表了不同意见。",null,"https://www.merriam-webster.com/dictionary/opinion"],
   ["assessment","评价；专业判断","n.",["评价","专业判断"],["opinion-assessment"],"We asked an engineer for an opinion on the damaged wall.","我们请一位工程师对受损墙体提出专业意见。",null,"https://www.merriam-webster.com/dictionary/opinion"]
  ],[]);
  entry("suppose",[
   ["believe","认为；以为；推想","v.",["认为","以为","推想","料想"],["suppose-believe"],"I suppose the shop will be quieter after the morning rush.","我想早间高峰过后，店里会安静一些。",null,"https://www.merriam-webster.com/dictionary/suppose"],
   ["assume","假设；设想","v.",["假设","设想","想像","假定"],["suppose-assume"],"Suppose the bridge closes tomorrow; which route could we use instead?","假设明天桥梁关闭，我们可以改走哪条路线？",null,"https://www.merriam-webster.com/dictionary/suppose"],
   ["expected","应该；被期望；按规定应当","v.",["应该","被期望","按规定应当"],["suppose-expected"],"Visitors are supposed to leave the reserve before sunset.","按规定，游客应在日落前离开保护区。","be supposed to","https://www.merriam-webster.com/dictionary/suppose"]
  ],[]);
  entry("introduction",[
   ["acquaintance","介绍；引见","n.",["介绍","引见"],["introduction-acquaintance"],"A brief introduction helped the two research teams start talking.","简短的介绍帮助两个研究团队开始交谈。",null,"https://www.merriam-webster.com/dictionary/introduction"],
   ["beginning","引言；序言；入门","n.",["引言","序言","入门","初步"],["introduction-beginning"],"The introduction explains why the author began studying the island.","引言解释了作者为何开始研究这座岛。",null,"https://www.merriam-webster.com/dictionary/introduction"],
   ["bring-in","引入；采用；传入","n.",["引入","采用","传入"],["introduction-bring-in"],"The introduction of electric buses reduced noise on the high street.","电动公交车的引入降低了主街噪音。",null,"https://www.merriam-webster.com/dictionary/introduction"]
  ],[]);
  entry("represent",[
   ["act-for","代表；代理","v.",["代表","代理"],["represent-act-for"],"Two students were chosen to represent the school at the meeting.","两名学生被选中代表学校参加会议。",null,"https://www.merriam-webster.com/dictionary/represent"],
   ["symbolise","象征；表示","v.",["象征","表示"],["represent-symbolise"],"On this map, blue lines represent underground water pipes.","在这张地图上，蓝线表示地下水管。",null,"https://www.merriam-webster.com/dictionary/represent"],
   ["depict","描绘；表现；扮演","v.",["描绘","表现","扮演","讲述"],["represent-depict"],"The painting represents the harbour as it looked before the railway arrived.","这幅画描绘了铁路修通前港口的样子。",null,"https://www.merriam-webster.com/dictionary/represent"],
   ["constitute","构成；相当于；意味着","v.",["构成","相当于","意味着"],["represent-constitute"],"The new lamps represent a substantial saving in electricity costs.","新灯意味着电费将大幅节省。",null,"https://www.merriam-webster.com/dictionary/represent"]
  ],[{"terms":["回忆","再赠送","再上演","提出异议"],"decision":"context-required","reason":"部分旧译牵涉 re-present 或古旧陈情用法；普通 represent 训练限代表、象征、描绘和构成，避免据前缀误拆。","source":"https://www.merriam-webster.com/dictionary/represent"}]);
  entry("prediction",[
   ["forecast","预测；预言；预报","n.",["预测","预言","预报"],["prediction-forecast"],"Her prediction of rising demand proved accurate by the end of winter.","到冬季结束时，她关于需求会上升的预测被证明是准确的。",null,"https://www.merriam-webster.com/dictionary/prediction"]
  ],[]);
  entry("representative",[
   ["delegate","代表；代理人","n.",["代表","代理人","众议员"],["representative-delegate"],"Each village sent a representative to the water-sharing meeting.","每个村庄都派了一位代表参加用水分配会议。",null,"https://www.merriam-webster.com/dictionary/representative"],
   ["typical","典型的；有代表性的","adj.",["典型的","有代表性的","典型","描写的","表现的"],["representative-typical"],"The sample was too small to be representative of the whole population.","样本太小，无法代表整个群体。","representative of","https://www.merriam-webster.com/dictionary/representative"],
   ["acting-for","代表的；代议制的","adj.",["代表的","代议制的","代理的"],["representative-acting-for"],"The lecture traces the growth of representative government.","这场讲座追溯了代议制政府的发展。",null,"https://www.merriam-webster.com/dictionary/representative"]
  ],[]);
  entry("understanding",[
   ["comprehension","理解；理解力","n.",["理解","理解力"],["understanding-comprehension","batch12-equivalent-comprehension-understanding"],"The field trip deepened her understanding of how rivers shape the land.","这次实地考察加深了她对河流如何塑造地形的理解。",null,"https://www.merriam-webster.com/dictionary/understanding"],
   ["accord","谅解；共识；非正式协议","n.",["谅解","共识","非正式协议","协议"],["understanding-accord"],"The neighbours reached an understanding about keeping the shared path clear.","邻居们就保持共用小路畅通达成了共识。",null,"https://www.merriam-webster.com/dictionary/understanding"],
   ["sympathetic","善解人意的；体谅的","adj.",["善解人意的","体谅的","体谅人的"],["understanding-sympathetic"],"Her supervisor was understanding when she needed time off to care for her father.","她需要请假照顾父亲时，主管很体谅。",null,"https://www.merriam-webster.com/dictionary/understanding"]
  ],[]);
  entry("comprehension",[
   ["understanding","理解；理解力","n.",["理解","理解力"],["comprehension-understanding","batch12-equivalent-comprehension-understanding"],"The questions test comprehension rather than the ability to remember dates.","这些问题考查理解力，而不是记忆日期的能力。",null,"https://www.merriam-webster.com/dictionary/comprehension"]
  ],[{"terms":["包含"],"decision":"scope-excluded","reason":"词典有涵盖与逻辑内涵的专业义；日常理解力并不是所有 contain/include 的同义词，本批只训练理解。","source":"https://www.merriam-webster.com/dictionary/comprehension"}]);
  entry("conclusion",[
   ["judgment","结论；推论","n.",["结论","推论"],["conclusion-judgment"],"The evidence does not support the conclusion that all the pipes need replacing.","证据不支持所有管道都需更换这一结论。",null,"https://www.merriam-webster.com/dictionary/conclusion"],
   ["ending","结尾；结束","n.",["结尾","结束"],["conclusion-ending"],"At the conclusion of the concert, the children thanked their teachers.","音乐会结束时，孩子们感谢了老师。",null,"https://www.merriam-webster.com/dictionary/conclusion"],
   ["completion","完成；缔结","n.",["完成","缔结"],["conclusion-completion"],"Both sides welcomed the successful conclusion of the negotiations.","双方都欢迎谈判圆满结束。",null,"https://www.merriam-webster.com/dictionary/conclusion"]
  ],[]);
  entry("content",[
   ["material","内容；目录；所含之物","n.",["内容","目录","所含之物"],["content-material"],"The contents page lists the chapters in the order they appear.","目录页按出现顺序列出了各章。",null,"https://www.merriam-webster.com/dictionary/content"],
   ["amount","含量","n.",["含量"],["content-amount"],"The label states the sugar content of each serving.","标签注明了每份食品的含糖量。",null,"https://www.merriam-webster.com/dictionary/content"],
   ["satisfied","满意的；满足的","adj.",["满意的","满足的"],["content-satisfied"],"She was content with a quiet evening and a borrowed book.","一个安静的夜晚和一本借来的书就让她感到满足。","content with","https://www.merriam-webster.com/dictionary/content"],
   ["satisfy","使满足","v.",["使满足"],["content-satisfy"],"He contented himself with watching the match from the doorway.","他满足于站在门口观看比赛。","content oneself with","https://www.merriam-webster.com/dictionary/content"],
   ["satisfaction","满足；满意","n.",["满足","满意","满足感"],["content-satisfaction"],"The children drew pictures to their hearts' content while the rain continued.","雨还在下，孩子们尽情地画着画。","to one's heart's content","https://www.merriam-webster.com/dictionary/content"]
  ],[]);
  entry("deliberate",[
   ["intentional","故意的；蓄意的","adj.",["故意的","蓄意的"],["deliberate-intentional"],"Leaving the gate open was a deliberate act, not a mistake.","把大门敞开是故意为之，并非失误。",null,"https://www.merriam-webster.com/dictionary/deliberate"],
   ["considered","深思熟虑的；审慎的","adj.",["深思熟虑的","审慎的"],["deliberate-considered"],"The committee made a deliberate choice after comparing all three designs.","委员会比较了三个设计后，作出了审慎选择。",null,"https://www.merriam-webster.com/dictionary/deliberate"],
   ["unhurried","从容不迫的；缓慢而仔细的","adj.",["从容不迫的","缓慢而仔细的"],["deliberate-unhurried"],"She crossed the icy pavement with slow, deliberate steps.","她迈着缓慢谨慎的步子走过结冰的人行道。",null,"https://www.merriam-webster.com/dictionary/deliberate"],
   ["consider","仔细考虑；商议","v.",["仔细考虑","商议"],["deliberate-consider"],"The jury deliberated for several hours before reaching a decision.","陪审团商议数小时后才作出决定。",null,"https://www.merriam-webster.com/dictionary/deliberate"]
  ],[]);
  entry("data",[
   ["information","数据；资料；信息","n.",["数据","资料","信息"],["data-information"],"The team checked the rainfall data before publishing the report.","团队在发布报告前核对了降雨数据。",null,"https://www.merriam-webster.com/dictionary/data"]
  ],[]);
  entry("dictate",[
   ["speak-for-writing","口述；使听写","v.",["口述","使听写","听写","口授"],["dictate-speak-for-writing"],"She dictated the letter while her assistant typed.","她口述信件，助手负责打字。",null,"https://www.merriam-webster.com/dictionary/dictate"],
   ["command","命令；规定；支配","v.",["命令","规定","支配","指挥","指令"],["dictate-command"],"Safety considerations dictate where the fuel tanks can be placed.","安全因素决定了油箱能放置的位置。",null,"https://www.merriam-webster.com/dictionary/dictate"],
   ["principle","命令；准则；原则","n.",["命令","准则","原则"],["dictate-principle"],"He followed the dictates of his conscience despite the pressure.","尽管受到压力，他仍遵从良心的准则。","the dictates of","https://www.merriam-webster.com/dictionary/dictate"]
  ],[]);
  entry("even",[
   ["level","平坦的；平滑的","adj.",["平坦的","平滑的"],["even-level"],"Place the ladder on an even surface before climbing.","爬梯子前，请把它放在平坦表面上。",null,"https://www.merriam-webster.com/dictionary/even"],
   ["uniform","均匀的；稳定的；均等的","adj.",["均匀的","稳定的","均等的","连贯的","公平的","平均的","平衡的"],["even-uniform"],"Keep an even pressure on the handle as you turn it.","转动把手时，请保持均匀用力。",null,"https://www.merriam-webster.com/dictionary/even"],
   ["divisible-two","偶数的","adj.",["偶数的","偶数"],["even-divisible-two"],"Every even number can be divided by two without a remainder.","每个偶数都能被二整除且没有余数。",null,"https://www.merriam-webster.com/dictionary/even"],
   ["surprising","甚至；连…也","adv.",["甚至","连…也"],["even-surprising"],"Even the smallest children helped to carry the empty boxes.","连最小的孩子也帮忙搬空箱子。",null,"https://www.merriam-webster.com/dictionary/even"],
   ["comparison","更加；还要","adv.",["更加","还要"],["even-comparison"],"The path became even narrower beyond the old gate.","过了旧门后，小路变得更窄了。",null,"https://www.merriam-webster.com/dictionary/even"],
   ["level-verb","使平坦；使均等","v.",["使平坦","使均等","使相等","变平","成为相等"],["even-level-verb"],"The gardener evened out the soil before planting the seeds.","园丁在播种前把土整平。","even out","https://www.merriam-webster.com/dictionary/even"],
   ["equal-standing","相等的；不分胜负的；扯平的","adj.",["相等的","不分胜负的","扯平的"],["even-equal-standing"],"The teams were even at half-time, with two goals each.","半场结束时，两队各进两球，不分胜负。",null,"https://www.merriam-webster.com/dictionary/even"]
  ],[{"terms":["恰好的","实际上","完全","十分"],"decision":"context-required","reason":"exactly 等旧释依赖特定强调结构；本批保留平坦、均匀、相等、偶数、甚至、更加与整平，不将 actually 作为通用译法。","source":"https://www.merriam-webster.com/dictionary/even"},{"terms":["偶校验"],"decision":"scope-excluded","reason":"计算机奇偶校验中的组合含义应由整个术语表达，不作为 even 独立词义。","source":"https://www.merriam-webster.com/dictionary/even"}]);
  entry("disagree",[
   ["opinion","不同意；有分歧","v.",["不同意","有分歧","争执"],["disagree-opinion"],"The engineers disagree about the safest position for the bridge.","工程师们对桥梁最安全的位置意见不一。",null,"https://www.merriam-webster.com/dictionary/disagree"],
   ["not-match","不一致；不相符","v.",["不一致","不相符","抵触"],["disagree-not-match"],"The two reports disagree on the number of people affected.","两份报告中受影响人数不一致。",null,"https://www.merriam-webster.com/dictionary/disagree"],
   ["not-suit","使不适；不适合","v.",["使不适","不适合","不适宜"],["disagree-not-suit"],"Rich food sometimes disagrees with my stomach.","油腻食物有时会使我的胃不舒服。","disagree with","https://www.merriam-webster.com/dictionary/disagree"]
  ],[]);
  entry("discipline",[
   ["order","纪律；自律","n.",["纪律","自律","约束"],["discipline-order"],"Working alone requires discipline as well as practical skill.","独自工作既需要实用技能，也需要自律。",null,"https://www.merriam-webster.com/dictionary/discipline"],
   ["subject","学科；专业领域","n.",["学科","专业领域"],["discipline-subject"],"The project brought together researchers from several disciplines.","这个项目汇集了多个学科的研究人员。",null,"https://www.merriam-webster.com/dictionary/discipline"],
   ["train","训练；管教","v.",["训练","管教"],["discipline-train"],"The coach disciplined the team to stay calm under pressure.","教练训练队员在压力下保持冷静。",null,"https://www.merriam-webster.com/dictionary/discipline"],
   ["punish","惩戒；处罚","v.",["惩戒","处罚"],["discipline-punish"],"The company disciplined staff who repeatedly ignored safety rules.","公司处罚了多次无视安全规定的员工。",null,"https://www.merriam-webster.com/dictionary/discipline"]
  ],[]);
  entry("displace",[
   ["replace","取代；替换","v.",["取代","替换"],["displace-replace"],"Cheaper digital cameras displaced much of the old film equipment.","更便宜的数码相机取代了许多旧胶片设备。",null,"https://www.merriam-webster.com/dictionary/displace"],
   ["force-out","使离开原处；使流离失所","v.",["使离开原处","使流离失所"],["displace-force-out"],"Flooding displaced hundreds of families from the valley.","洪水使山谷中数百户家庭流离失所。",null,"https://www.merriam-webster.com/dictionary/displace"],
   ["move","移置；排开（液体等）","v.",["移置","排开（液体等）","转移"],["displace-move"],"The stone displaced enough water to make the level rise visibly.","石头排开的水使水位明显上升。",null,"https://www.merriam-webster.com/dictionary/displace"]
  ],[]);
  entry("dissolve",[
   ["solution","溶解；使溶解","v.",["溶解","使溶解"],["dissolve-solution"],"Stir the water until all the salt has dissolved.","搅拌水，直到盐全部溶解。",null,"https://www.merriam-webster.com/dictionary/dissolve"],
   ["end","解散；解除；终止","v.",["解散","解除","终止"],["dissolve-end"],"The partnership dissolved when the two owners retired.","两位业主退休后，合伙关系解除了。",null,"https://www.merriam-webster.com/dictionary/dissolve"],
   ["disappear","消散；逐渐消失","v.",["消散","逐渐消失"],["dissolve-disappear"],"Her worries dissolved when she heard the children's laughter.","听到孩子们的笑声，她的担忧消散了。",null,"https://www.merriam-webster.com/dictionary/dissolve"]
  ],[]);
  entry("fee",[
   ["charge","费用；服务费","n.",["费用","服务费"],["fee-charge"],"The course fee includes materials and use of the workshop.","课程费用包含材料费和车间使用费。",null,"https://www.merriam-webster.com/dictionary/fee"]
  ],[{"terms":["小费","封地","所有权","付费给"],"decision":"scope-excluded","reason":"封地和可继承地产是历史法律义；少用 fee 动词可指付钱或给小费。本批常用训练仅选服务费用，不把 fee 与所有产权或 gratuity 混同。","source":"https://www.merriam-webster.com/dictionary/fee"}]);
  entry("introduce",[
   ["acquaint","介绍；引见","v.",["介绍","引见"],["introduce-acquaint"],"The host introduced each speaker before the discussion began.","讨论开始前，主持人介绍了每位发言者。",null,"https://www.merriam-webster.com/dictionary/introduce"],
   ["bring-in","引入；引进；采用","v.",["引入","引进","采用","输入"],["introduce-bring-in"],"The school introduced a free breakfast service for early arrivals.","学校为早到的学生引入了免费早餐服务。",null,"https://www.merriam-webster.com/dictionary/introduce"],
   ["insert","放入；插入","v.",["放入","插入"],["introduce-insert"],"The technician introduced a narrow tube into the damaged pipe.","技术员把一根细管插入受损管道。",null,"https://www.merriam-webster.com/dictionary/introduce"]
  ],[]);
  entry("instance",[
   ["example","例子；实例；情况","n.",["例子","实例","情况","场合"],["instance-example"],"This is the first recorded instance of the bird nesting here.","这是首次记录到这种鸟在这里筑巢。",null,"https://www.merriam-webster.com/dictionary/instance"],
   ["cite","举例说明；举出","v.",["举例说明","举出","引以为例"],["instance-cite"],"The report instances three towns where the policy has worked.","报告举出三个政策已奏效的城镇为例。",null,"https://www.merriam-webster.com/dictionary/instance"]
  ],[{"terms":["建议"],"decision":"restricted-verified","reason":"词典的 request/instigation 标为古旧，保留作旧译参考；日常 instance 主要为实例和举例。","source":"https://www.merriam-webster.com/dictionary/instance"}]);
  entry("length",[
   ["measurement","长度；长","n.",["长度","长"],["length-measurement"],"Measure the length of the shelf before buying the timber.","买木料前，先量一下架子的长度。",null,"https://www.merriam-webster.com/dictionary/length"],
   ["duration","时长；期间","n.",["时长","期间"],["length-duration"],"The length of the interview depends on the complexity of the case.","访谈时长取决于情况的复杂程度。",null,"https://www.merriam-webster.com/dictionary/length"],
   ["piece","一段；一节","n.",["一段","一节"],["length-piece"],"We cut a short length of rope to secure the gate.","我们剪下一小段绳子固定大门。",null,"https://www.merriam-webster.com/dictionary/length"]
  ],[{"terms":["记录长度","块长","字长"],"decision":"scope-excluded","reason":"计算机组合中仍是长度概念，只是对象不同；不为每种数据长度重复建目标。","source":"https://www.merriam-webster.com/dictionary/length"}]);
  entry("major",[
   ["important","主要的；重大的；严重的","adj.",["主要的","重大的","严重的","较多的","大部分的","主要"],["major-important"],"The report identifies three major causes of the water shortage.","报告指出了缺水的三个主要原因。",null,"https://www.merriam-webster.com/dictionary/major"],
   ["field","主修科目；主修学生","n.",["主修科目","主修学生","主修课"],["major-field"],"Her major is physics, but she also studies French.","她的主修科目是物理，也学习法语。",null,"https://www.merriam-webster.com/dictionary/major"],
   ["study","主修","v.",["主修"],["major-study"],"He decided to major in history at university.","他决定在大学主修历史。","major in","https://www.merriam-webster.com/dictionary/major"],
   ["army","少校","n.",["少校","陆军少校"],["major-army"],"The major ordered his unit to repair the damaged bridge.","少校命令部队修复受损桥梁。",null,"https://www.merriam-webster.com/dictionary/major"],
   ["music","大调的；大音阶的","adj.",["大调的","大音阶的"],["major-music"],"The piece ends with a bright major chord.","这首乐曲以明亮的大调和弦结束。",null,"https://www.merriam-webster.com/dictionary/major"]
  ],[{"terms":["成年人","成年的"],"decision":"restricted-verified","reason":"词典法律义是达到成年年龄，保留为专门参考；本批主要、主修、少校及大调分别训练。","source":"https://www.merriam-webster.com/dictionary/major"},{"terms":["主要刻度"],"decision":"scope-excluded","reason":"图表中的 major tick 是组合术语，不是 major 的独立名词义。","source":"https://www.merriam-webster.com/dictionary/major"}]);
  entry("novice",[
   ["beginner","新手；初学者","n.",["新手","初学者"],["novice-beginner"],"The route is suitable for a novice who has never climbed outdoors.","这条路线适合从未进行户外攀登的新手。",null,"https://www.merriam-webster.com/dictionary/novice"],
   ["religious","见习修士；见习修女","n.",["见习修士","见习修女"],["novice-religious"],"The novice spent a year learning the community's daily routine.","这名见习修士花了一年学习修会的日常规程。",null,"https://www.merriam-webster.com/dictionary/novice"]
  ],[]);
  entry("nuance",[
   ["subtle-difference","细微差别；微妙之处","n.",["细微差别","微妙之处"],["nuance-subtle-difference"],"The translation preserves the nuance of hesitation in her reply.","译文保留了她回答中那一丝犹豫。",null,"https://www.merriam-webster.com/dictionary/nuance"]
  ],[]);
  entry("outset",[
   ["beginning","开头；最初；起始","n.",["开头","最初","起始","着手"],["outset-beginning"],"We agreed on the safety rules at the outset of the trip.","我们在旅行开始时就商定了安全规则。","at the outset","https://www.merriam-webster.com/dictionary/outset"]
  ],[]);
  entry("qualify",[
   ["eligible","取得资格；使合格","v.",["取得资格","使合格","有资格","使有资格","准予"],["qualify-eligible"],"The certificate qualifies her to inspect small electrical systems.","这份证书使她有资格检查小型电气系统。",null,"https://www.merriam-webster.com/dictionary/qualify"],
   ["competition","取得参赛资格；晋级","v.",["取得参赛资格","晋级"],["qualify-competition"],"Only the fastest two runners in each heat qualify for the final.","每组预赛只有最快的两位选手能进入决赛。","qualify for","https://www.merriam-webster.com/dictionary/qualify"],
   ["limit","限定；修饰；使不那么绝对","v.",["限定","修饰","使不那么绝对","限制"],["qualify-limit"],"The scientist qualified her claim by noting the small sample size.","科学家指出样本量较小，对自己的论断加以限定。",null,"https://www.merriam-webster.com/dictionary/qualify"]
  ],[]);
  entry("philosophy",[
   ["subject","哲学","n.",["哲学"],["philosophy-subject"],"The philosophy course asks what makes an action fair.","这门哲学课探讨怎样的行为才算公平。",null,"https://www.merriam-webster.com/dictionary/philosophy"],
   ["beliefs","人生观；理念；基本原则","n.",["人生观","理念","基本原则","哲学思想","哲理","基本原理","见解"],["philosophy-beliefs"],"The firm's design philosophy puts easy repair ahead of decoration.","公司的设计理念把便于维修置于装饰之前。",null,"https://www.merriam-webster.com/dictionary/philosophy"],
   ["calmness","达观；沉着","n.",["达观","沉着"],["philosophy-calmness"],"She accepted the delay with philosophy and opened a book.","她达观地接受了延误，打开一本书读起来。",null,"https://www.merriam-webster.com/dictionary/philosophy"]
  ],[]);
  entry("praise",[
   ["commend","称赞；赞扬；表扬","v.",["称赞","赞扬","表扬"],["praise-commend"],"The teacher praised the class for checking their calculations carefully.","老师表扬全班认真核对计算结果。",null,"https://www.merriam-webster.com/dictionary/praise"],
   ["approval","赞美；好评","n.",["赞美","好评"],["praise-approval"],"The volunteers received praise for keeping the shelter open.","志愿者因让收容所持续开放而受到称赞。",null,"https://www.merriam-webster.com/dictionary/praise"],
   ["worship","赞颂；颂扬（神）","n.",["赞颂","崇拜"],["praise-worship"],"The choir sang a hymn of praise at the morning service.","唱诗班在晨间礼拜上唱了一首赞美诗。",null,"https://www.merriam-webster.com/dictionary/praise"]
  ],[]);
  entry("resolve",[
   ["solve","解决；消除","v.",["解决","消除"],["resolve-solve"],"The new agreement resolved the dispute over access to the river.","新协议解决了河流使用权争端。",null,"https://www.merriam-webster.com/dictionary/resolve"],
   ["decide","决定；下决心","v.",["决定","下决心"],["resolve-decide"],"She resolved to walk to work whenever the weather allowed.","她决定只要天气允许就步行上班。","resolve to do sth","https://www.merriam-webster.com/dictionary/resolve"],
   ["analyse","分解；解析","v.",["分解","解析","使分解"],["resolve-analyse"],"The diagram resolves the force into horizontal and vertical components.","示意图把力分解为水平和垂直分量。",null,"https://www.merriam-webster.com/dictionary/resolve"],
   ["determination","决心；坚定意志","n.",["决心","坚定意志","决定之事","坚决"],["resolve-determination"],"His resolve weakened after several weeks without progress.","连续几周没有进展后，他的决心动摇了。",null,"https://www.merriam-webster.com/dictionary/resolve"]
  ],[]);
  entry("surface",[
   ["outer-layer","表面；水面；外表","n.",["表面","水面","外表","面","平面"],["surface-outer-layer"],"Oil floated on the surface of the water after the leak.","泄漏后，油漂浮在水面上。",null,"https://www.merriam-webster.com/dictionary/surface"],
   ["external","表面的；外观的；水面上的","adj.",["表面的","外观的","水面上的","肤浅的"],["surface-external"],"The inspection found surface damage but no deep cracks.","检查发现了表面损伤，但没有深层裂缝。",null,"https://www.merriam-webster.com/dictionary/surface"],
   ["emerge","浮出水面；显露；出现","v.",["浮出水面","显露","出现","使浮出水面","呈现"],["surface-emerge"],"The diver surfaced beside the boat and raised one hand.","潜水员在船旁浮出水面，举起一只手。",null,"https://www.merriam-webster.com/dictionary/surface"],
   ["cover","给…铺设表面；铺面","v.",["给…铺设表面","铺面","使成平面"],["surface-cover"],"Workers surfaced the footpath with recycled gravel.","工人们用回收碎石铺设了这条步道。",null,"https://www.merriam-webster.com/dictionary/surface"]
  ],[{"terms":["在地面上工作"],"decision":"scope-excluded","reason":"采矿等专业语境不等同于普通浮现或铺面；本批不单设行业操作义。","source":"https://www.merriam-webster.com/dictionary/surface"}]);
  entry("detail",[
   ["particular","细节；具体情况","n.",["细节","具体情况","详情","详细数据"],["detail-particular"],"One small detail in the photograph helped identify the street.","照片中的一个小细节帮助辨认出了街道。",null,"https://www.merriam-webster.com/dictionary/detail"],
   ["explain","详述；详细列举","v.",["详述","详细列举"],["detail-explain"],"The guide details the steps required to clean the filter.","指南详细列出了清洁滤器所需的步骤。",null,"https://www.merriam-webster.com/dictionary/detail"],
   ["assign","派遣；指派","v.",["派遣","指派","选派"],["detail-assign"],"Two officers were detailed to guard the entrance overnight.","两名警员被指派整夜守卫入口。","detail sb to do sth","https://www.merriam-webster.com/dictionary/detail"]
  ],[{"terms":["画详图"],"decision":"context-required","reason":"需看 design in detail / detail a drawing 的技术语境；一般 detail 动词为详细说明，不能无条件替换 draw。","source":"https://www.merriam-webster.com/dictionary/detail"}]);
  entry("overlap",[
   ["cover","重叠；部分覆盖","v.",["重叠","部分覆盖","重复","迭盖"],["overlap-cover"],"The roof tiles overlap so that rain cannot enter the gaps.","屋瓦相互搭接，雨水因此无法进入缝隙。",null,"https://www.merriam-webster.com/dictionary/overlap"],
   ["share","交叠；有共同之处","v.",["交叠","有共同之处","部分的同时发生","与...同时发生"],["overlap-share"],"Their research interests overlap in the study of coastal erosion.","他们在海岸侵蚀研究方面有共同兴趣。",null,"https://www.merriam-webster.com/dictionary/overlap"],
   ["intersection","重叠部分；共同部分","n.",["重叠部分","共同部分"],["overlap-intersection"],"There is considerable overlap between the two training courses.","这两门培训课程有相当多重叠内容。",null,"https://www.merriam-webster.com/dictionary/overlap"]
  ],[]);
  entry("induce",[
   ["persuade","劝使；诱导","v.",["劝使","诱导","引诱"],["induce-persuade"],"A discount induced several customers to try the new delivery service.","折扣促使几位顾客尝试新的配送服务。","induce sb to do sth","https://www.merriam-webster.com/dictionary/induce"],
   ["cause","引起；导致；诱发","v.",["引起","导致","诱发","招致"],["induce-cause"],"The sudden change in pressure induced cracks in the glass.","压力骤变使玻璃产生了裂缝。",null,"https://www.merriam-webster.com/dictionary/induce"],
   ["physical","感应产生（电流等）","v.",["感应产生（电流等）","感应"],["induce-physical"],"A moving magnet induced a current in the wire coil.","移动的磁铁在线圈中感应出电流。",null,"https://www.merriam-webster.com/dictionary/induce"]
  ],[{"terms":["归纳出"],"decision":"restricted-verified","reason":"词典保留逻辑归纳的技术义；本批区分劝使、引发及物理感应，不把归纳与普通导致混装。","source":"https://www.merriam-webster.com/dictionary/induce"}]);
  entry("agree",[
   ["consent","同意；赞成","v.",["同意","赞成","应允","承认","认定"],["agree-consent"],"The owners agreed to repair the shared roof before winter.","业主们同意在冬季前修理共用屋顶。",null,"https://www.merriam-webster.com/dictionary/agree"],
   ["match","一致；相符","v.",["一致","相符"],["agree-match"],"The two maps agree on the location of the old well.","两张地图上旧井的位置一致。",null,"https://www.merriam-webster.com/dictionary/agree"],
   ["suit","适合；相宜","v.",["适合","相宜"],["agree-suit"],"The warmer climate seems to agree with him.","较温暖的气候似乎很适合他。","agree with sb","https://www.merriam-webster.com/dictionary/agree"]
  ],[]);
  entry("grade",[
   ["level","等级；级别；质量档次","n.",["等级","级别","质量档次","阶段","程度"],["grade-level"],"The timber is sorted by grade before it is sold.","木材在出售前按质量等级分类。",null,"https://www.merriam-webster.com/dictionary/grade"],
   ["school-year","年级","n.",["年级"],["grade-school-year"],"The reading activity was designed for pupils in the third grade.","这项阅读活动是为三年级学生设计的。",null,"https://www.merriam-webster.com/dictionary/grade"],
   ["mark","成绩；分数；评级","n.",["成绩","分数","评级"],["grade-mark"],"Her final grade improved after she revised the written report.","修改书面报告后，她的最终成绩提高了。",null,"https://www.merriam-webster.com/dictionary/grade"],
   ["assess","评分；分级","v.",["评分","分级","分等","属于某等级"],["grade-assess"],"The examiner graded each essay using the same criteria.","考官按相同标准为每篇作文评分。",null,"https://www.merriam-webster.com/dictionary/grade"],
   ["slope","坡度；斜坡","n.",["坡度","斜坡"],["grade-slope"],"The road has a steep grade near the old quarry.","公路在旧采石场附近有一段陡坡。",null,"https://www.merriam-webster.com/dictionary/grade"]
  ],[{"terms":["逐渐变化"],"decision":"scope-excluded","reason":"grade into 可指逐渐过渡；本批只教等级、年级、成绩、分级和坡度，不把任何变化都叫 grade。","source":"https://www.merriam-webster.com/dictionary/grade"}]);
  entry("rank",[
   ["position","地位；级别；军衔","n.",["地位","级别","军衔","等级","阶级"],["rank-position"],"She rose to the rank of captain after ten years of service.","服役十年后，她晋升为上尉。",null,"https://www.merriam-webster.com/dictionary/rank"],
   ["row","排；行；列","n.",["排","行","列","横列","队伍"],["rank-row"],"The dancers stood in two ranks facing the audience.","舞者面向观众站成两排。",null,"https://www.merriam-webster.com/dictionary/rank"],
   ["classify","排名；分等；列为","v.",["排名","分等","列为","排列","归类于","把...分等","列队"],["rank-classify"],"The survey ranks the town among the safest places to cycle.","调查把该镇列为骑行最安全的地方之一。",null,"https://www.merriam-webster.com/dictionary/rank"],
   ["smell","恶臭的；难闻的","adj.",["恶臭的","难闻的"],["rank-smell"],"A rank smell rose from the stagnant ditch.","死水沟里冒出一股恶臭。",null,"https://www.merriam-webster.com/dictionary/rank"]
  ],[{"terms":["茂密丛生的","十足的","粗俗的"],"decision":"restricted-verified","reason":"词典分别列植物过盛、显著彻底及粗鄙义；与已教恶臭义不同，保留作扩展参考，不用同一例句混教。","source":"https://www.merriam-webster.com/dictionary/rank"},{"terms":["秩"],"decision":"scope-excluded","reason":"矩阵秩是数学专业名词，本批训练社会军队级别、排列、排名及气味描述。","source":"https://www.merriam-webster.com/dictionary/rank"}]);
  entry("queue",[
   ["line","队列；排队等候的人","n.",["队列","排队等候的人","一队人"],["queue-line"],"A queue formed outside the bakery before it opened.","面包店还未开门，门外就排起了队。",null,"https://www.merriam-webster.com/dictionary/queue"],
   ["wait","排队；列队","v.",["排队","列队","使排队"],["queue-wait"],"Passengers queued along the wall to keep the doorway clear.","乘客沿墙排队，保持门口畅通。",null,"https://www.merriam-webster.com/dictionary/queue"],
   ["computing","队列（待处理的数据或任务）","n.",["队列（待处理的数据或任务）"],["queue-computing"],"The print queue contained several large files.","打印队列里有几个大文件。",null,"https://www.merriam-webster.com/dictionary/queue"]
  ],[{"terms":["辫子","将...梳成辫子"],"decision":"restricted-verified","reason":"词典保留后脑垂辫及相关动词，现代公共服务和计算机语境以队列为主，本批不单设发式目标。","source":"https://www.merriam-webster.com/dictionary/queue"}]);
  entry("score",[
   ["points","得分；分数；成绩","n.",["得分","分数","成绩"],["score-points"],"The scoreboard showed the final score as three to one.","记分牌显示最终比分为三比一。",null,"https://www.merriam-webster.com/dictionary/score"],
   ["win-points","得分；进球","v.",["得分","进球","记分","把...记下","获得"],["score-win-points"],"She scored twice in the first half of the match.","她在比赛上半场两次得分。",null,"https://www.merriam-webster.com/dictionary/score"],
   ["music","乐谱；配乐","n.",["乐谱","配乐"],["score-music"],"The orchestra rehearsed the difficult passages in the score.","乐团排练了乐谱中较难的乐段。",null,"https://www.merriam-webster.com/dictionary/score"],
   ["twenty","二十；大量（复数）","n.",["二十","大量（复数）","二十个","大量"],["score-twenty"],"Scores of visitors waited for the small museum to open.","许多游客等候小博物馆开门。","scores of","https://www.merriam-webster.com/dictionary/score"],
   ["cut","刻痕；划线","v.",["刻痕","划线","抓痕","刻划"],["score-cut"],"Score a shallow line across the dough before baking.","烘烤前，在面团表面划一道浅线。",null,"https://www.merriam-webster.com/dictionary/score"],
   ["assess","给…评分；评价","v.",["给…评分","评价","评价"],["score-assess"],"The examiner scored each performance out of twenty.","考官按二十分制为每次表演评分。",null,"https://www.merriam-webster.com/dictionary/score"]
  ],[{"terms":["帐目","起跑线","终点线"],"decision":"restricted-verified","reason":"词典列记账刻痕及起止标记等扩展；不等同于所有财务账目或任何终点，本批教得分、乐谱、二十和刻划。","source":"https://www.merriam-webster.com/dictionary/score"}]);
  entry("grant",[
   ["bestow","给予；授予；准许","v.",["给予","授予","准许"],["grant-bestow"],"The council granted the group permission to restore the hall.","市政委员会批准该团体修复礼堂。",null,"https://www.merriam-webster.com/dictionary/grant"],
   ["concede","承认；姑且认可","v.",["承认","姑且认可"],["grant-concede"],"I grant that the plan is cheap, but it may not be safe.","我承认这个方案便宜，但它可能不安全。",null,"https://www.merriam-webster.com/dictionary/grant"],
   ["funding","拨款；补助金","n.",["拨款","补助金","助学金"],["grant-funding"],"A small grant paid for the library's new computers.","一笔小额拨款支付了图书馆新电脑的费用。",null,"https://www.merriam-webster.com/dictionary/grant"]
  ],[]);
  entry("appreciate",[
   ["value","欣赏；赏识；重视","v.",["欣赏","赏识","重视"],["appreciate-value"],"You can appreciate the craftsmanship by examining the wooden joints.","仔细观察木接头，就能欣赏其中的工艺。",null,"https://www.merriam-webster.com/dictionary/appreciate"],
   ["gratitude","感激；感谢","v.",["感激","感谢","为...而感激"],["appreciate-gratitude"],"We appreciate your help in keeping the path open.","感谢你帮助保持小径畅通。",null,"https://www.merriam-webster.com/dictionary/appreciate"],
   ["understand","充分理解；意识到","v.",["充分理解","意识到","领会","鉴别"],["appreciate-understand"],"The children began to appreciate how much work the garden required.","孩子们开始理解打理花园需要付出多少劳动。",null,"https://www.merriam-webster.com/dictionary/appreciate"],
   ["rise-value","增值；升值","v.",["增值","升值","涨价"],["appreciate-rise-value"],"The land appreciated in value after the station was built.","车站建成后，这块土地升值了。",null,"https://www.merriam-webster.com/dictionary/appreciate"]
  ],[]);
  entry("award",[
   ["prize","奖；奖项","n.",["奖","奖项","奖品"],["award-prize"],"The project received an award for improving access to public transport.","该项目因改善公共交通可达性而获奖。",null,"https://www.merriam-webster.com/dictionary/award"],
   ["give","颁发；授予；判给","v.",["颁发","授予","判给","给予","裁定","判决"],["award-give"],"The court awarded compensation to the injured worker.","法院判给受伤工人赔偿金。",null,"https://www.merriam-webster.com/dictionary/award"]
  ],[]);
  entry("apply",[
   ["request","申请；请求","v.",["申请","请求"],["apply-request"],"She applied for a place on the evening course.","她申请参加夜间课程。","apply for","https://www.merriam-webster.com/dictionary/apply"],
   ["use","应用；使用；运用","v.",["应用","使用","运用"],["apply-use"],"The team applied the same method to all three samples.","团队把相同方法应用于全部三个样本。",null,"https://www.merriam-webster.com/dictionary/apply"],
   ["spread","涂；敷；施加","v.",["涂","敷","施加"],["apply-spread"],"Apply a thin layer of glue to the clean surface.","在干净表面涂一层薄胶。",null,"https://www.merriam-webster.com/dictionary/apply"],
   ["relevant","适用；有关","v.",["适用","有关"],["apply-relevant"],"The new rule applies to every vehicle entering the harbour.","新规定适用于进入港区的所有车辆。","apply to","https://www.merriam-webster.com/dictionary/apply"],
   ["concentrate","专心致志；勤奋努力","v.",["专心致志","勤奋努力"],["apply-concentrate"],"He applied himself to learning the names of the local plants.","他专心学习当地植物的名称。","apply oneself to","https://www.merriam-webster.com/dictionary/apply"]
  ],[]);
  entry("prize",[
   ["reward","奖品；奖赏","n.",["奖品","奖赏","奖金"],["prize-reward"],"The winner received a prize of gardening tools.","获胜者得到了一套园艺工具作为奖品。",null,"https://www.merriam-webster.com/dictionary/prize"],
   ["cherish","珍视；重视","v.",["珍视","重视"],["prize-cherish"],"The family prizes the little garden more than the larger house.","比起大房子，这家人更珍视那个小花园。",null,"https://www.merriam-webster.com/dictionary/prize"],
   ["outstanding","出色的；获奖的","adj.",["出色的","获奖的","得奖的"],["prize-outstanding"],"The farmer displayed her prize tomatoes at the village show.","农场主在村展会上展出了她的优质番茄。",null,"https://www.merriam-webster.com/dictionary/prize"],
   ["lever","撬开；撬动","v.",["撬开","撬动","撬"],["prize-lever"],"He used a flat tool to prize the lid off the wooden box.","他用扁平工具撬开了木箱盖。","prize sth off/open","https://www.merriam-webster.com/dictionary/prize"]
  ],[{"terms":["战利品","捕获","估价"],"decision":"restricted-verified","reason":"词典另列夺取物以及估计价值；本批教奖赏、珍视、出色和撬开，保留这些不同来源义作参考。","source":"https://www.merriam-webster.com/dictionary/prize"}]);
  entry("advance",[
   ["forward","前进；推进；进展","v.",["前进","推进","进展","行过的路程","使前进","提高","上涨"],["advance-forward"],"The repair team advanced slowly through the flooded tunnel.","维修队缓慢穿过被淹的隧道。",null,"https://www.merriam-webster.com/dictionary/advance"],
   ["promote","促进；推动","v.",["促进","推动"],["advance-promote"],"The project aims to advance our understanding of urban wildlife.","项目旨在增进我们对城市野生动物的认识。",null,"https://www.merriam-webster.com/dictionary/advance"],
   ["propose","提出（观点、建议等）","v.",["提出（观点、建议等）","提出"],["advance-propose"],"She advanced a different explanation for the missing records.","她就记录缺失提出了另一种解释。",null,"https://www.merriam-webster.com/dictionary/advance"],
   ["prepay","预付；预支","v.",["预付","预支"],["advance-prepay"],"The publisher advanced enough money to cover his travel costs.","出版商预付了一笔足以支付差旅费的钱。",null,"https://www.merriam-webster.com/dictionary/advance"],
   ["progress-noun","进步；进展","n.",["进步","进展"],["advance-progress-noun"],"The new material marks an advance in lightweight construction.","新材料标志着轻型建筑技术的进步。",null,"https://www.merriam-webster.com/dictionary/advance"],
   ["early","预先的；事先的","adj.",["预先的","事先的","前面的","使提前"],["advance-early"],"Passengers received advance notice of the cancelled service.","乘客事先收到了班次取消的通知。",null,"https://www.merriam-webster.com/dictionary/advance"]
  ],[]);
  entry("discover",[
   ["find","发现；找到；发觉","v.",["发现","找到","发觉","暴露"],["discover-find"],"The survey team discovered an old stone bridge under the ivy.","调查队在常春藤下发现了一座旧石桥。",null,"https://www.merriam-webster.com/dictionary/discover"]
  ],[]);
  entry("disclose",[
   ["make-known","披露；透露；公开","v.",["披露","透露","公开","揭露","揭发"],["disclose-make-known"],"The company refused to disclose the cost of the repairs.","公司拒绝透露维修费用。",null,"https://www.merriam-webster.com/dictionary/disclose"],
   ["show","露出；显露","v.",["露出","显露"],["disclose-show"],"The fallen curtain disclosed a doorway behind the stage.","垂落的帘子露出了舞台后方的一道门。",null,"https://www.merriam-webster.com/dictionary/disclose"]
  ],[]);
  entry("uncover",[
   ["remove-cover","揭开；移去覆盖物","v.",["揭开","移去覆盖物","揭去盖子"],["uncover-remove-cover"],"The gardeners uncovered the seedlings when the weather became warmer.","天气转暖后，园丁揭去了幼苗上的覆盖物。",null,"https://www.merriam-webster.com/dictionary/uncover"],
   ["reveal","发现；揭露；使显露","v.",["发现","揭露","使显露","暴露"],["uncover-reveal"],"The audit uncovered several errors in the accounts.","审计发现账目中有几处错误。",null,"https://www.merriam-webster.com/dictionary/uncover"]
  ],[{"terms":["脱帽致敬"],"decision":"restricted-verified","reason":"此义依赖脱去帽子以示敬意的动作，本批核心为移去覆盖物和揭露发现，不将所有致敬动词并入。","source":"https://www.merriam-webster.com/dictionary/uncover"}]);
  entry("net",[
   ["mesh","网；网状物","n.",["网","网状物","罗网"],["net-mesh"],"The fisherman repaired a hole in the net before dawn.","渔夫在黎明前补好了网里的破洞。",null,"https://www.merriam-webster.com/dictionary/net"],
   ["catch","用网捕；捕获","v.",["用网捕","捕获","撒网"],["net-catch"],"The researchers netted the butterflies and released them after counting.","研究人员用网捕到蝴蝶，计数后将其放生。",null,"https://www.merriam-webster.com/dictionary/net"],
   ["after-deductions","净的；扣除费用后的","adj.",["净的","扣除费用后的","净利","净价","最终的"],["net-after-deductions"],"The figures show net income after transport and storage costs.","这些数字显示扣除运输和储存费用后的净收入。",null,"https://www.merriam-webster.com/dictionary/net"],
   ["earn","净赚；获得","v.",["净赚","获得","得到"],["net-earn"],"The charity fair netted enough money to replace the broken swings.","慈善义卖净筹得了足够更换损坏秋千的资金。",null,"https://www.merriam-webster.com/dictionary/net"],
   ["internet","互联网；网络","n.",["互联网","网络","因特网"],["internet-network"],"The timetable is available on the Net, but I saved an offline copy.","时刻表可以在互联网上查到，但我保存了一份离线副本。","the Net","https://www.merriam-webster.com/dictionary/net"]
  ],[{"terms":["网络分析程序","编网"],"decision":"scope-excluded","reason":"软件名称或制作网具的行业操作不纳入本批；网捕、网、净额及净赚各自保留。","source":"https://www.merriam-webster.com/dictionary/net"}]);
  entry("expose",[
   ["make-visible","露出；暴露；使可见","v.",["露出","暴露","使可见"],["expose-make-visible"],"The storm exposed tree roots along the edge of the path.","风暴使小径边的树根暴露出来。",null,"https://www.merriam-webster.com/dictionary/expose"],
   ["reveal-wrongdoing","揭露；揭穿","v.",["揭露","揭穿"],["expose-reveal-wrongdoing"],"The investigation exposed serious faults in the inspection system.","调查揭露了检查制度中的严重缺陷。",null,"https://www.merriam-webster.com/dictionary/expose"],
   ["subject-to","使接触；使面临","v.",["使接触","使面临"],["expose-subject-to"],"The open windows exposed the equipment to salt spray.","敞开的窗户使设备暴露在盐雾中。","expose sth/sb to","https://www.merriam-webster.com/dictionary/expose"],
   ["photography","使曝光（摄影）","v.",["使曝光（摄影）","使曝光"],["expose-photography"],"The photographer exposed the film for several seconds to capture the faint light.","摄影师让胶片曝光数秒，以捕捉微弱光线。",null,"https://www.merriam-webster.com/dictionary/expose"]
  ],[]);
  entry("reveal",[
   ["disclose","透露；揭示；揭露","v.",["透露","揭示","揭露","泄露"],["reveal-disclose"],"The letters reveal how the village coped with the long winter.","这些信揭示了村庄如何熬过漫长冬季。",null,"https://www.merriam-webster.com/dictionary/reveal"],
   ["show","露出；显露","v.",["露出","显露","显示"],["reveal-show"],"Removing the old paint revealed the original blue tiles.","去掉旧油漆后，原来的蓝色瓷砖显露出来。",null,"https://www.merriam-webster.com/dictionary/reveal"]
  ],[{"terms":["(神)启示"],"decision":"restricted-verified","reason":"神学语境是通过神意使人知晓；本批以一般透露和显露为范围，不将所有宗教启示混入普通披露。","source":"https://www.merriam-webster.com/dictionary/reveal"},{"terms":["窗侧","门侧"],"decision":"scope-excluded","reason":"建筑名词指门窗洞口侧壁，与动词揭示来源和语境不同，保留专业参考。","source":"https://www.merriam-webster.com/dictionary/reveal"}]);
  entry("correct",[
   ["accurate","正确的；无误的","adj.",["正确的","无误的"],["correct-accurate"],"Check that the address is correct before sending the parcel.","寄包裹前，请检查地址是否正确。",null,"https://www.merriam-webster.com/dictionary/correct"],
   ["proper","合适的；恰当的","adj.",["合适的","恰当的"],["correct-proper"],"The guide explains the correct way to lift a heavy box.","指南说明了提起重箱子的正确方法。",null,"https://www.merriam-webster.com/dictionary/correct"],
   ["repair","改正；纠正；矫正","v.",["改正","纠正","矫正","订正"],["correct-repair"],"She corrected the spelling errors before printing the notices.","她在打印通知前改正了拼写错误。",null,"https://www.merriam-webster.com/dictionary/correct"]
  ],[]);
  entry("mistake",[
   ["error","错误；误会","n.",["错误","误会","犯错","弄错"],["mistake-error"],"A mistake in the map sent us down the wrong path.","地图上的一处错误让我们走错了路。",null,"https://www.merriam-webster.com/dictionary/mistake"],
   ["misidentify","认错；误认；误解","v.",["认错","误认","误解"],["mistake-misidentify"],"I mistook the empty warehouse for the railway station.","我把空仓库错认成了火车站。","mistake A for B","https://www.merriam-webster.com/dictionary/mistake"]
  ],[]);
  entry("circumstance",[
   ["situation","情况；环境；状况","n.",["情况","环境","状况","事件"],["circumstance-situation"],"Under these circumstances, delaying the walk was the safest choice.","在这种情况下，推迟徒步行程是最安全的选择。",null,"https://www.merriam-webster.com/dictionary/circumstance"],
   ["finances","经济状况；境遇","n. pl.",["经济状况","境遇"],["circumstance-finances"],"The grant is intended for students in difficult financial circumstances.","这笔助学金面向经济困难的学生。",null,"https://www.merriam-webster.com/dictionary/circumstance"]
  ],[]);
  entry("mission",[
   ["task","任务；使命","n.",["任务","使命"],["mission-task"],"The team's mission was to check every well after the flood.","团队的任务是在洪水过后检查每一口井。",null,"https://www.merriam-webster.com/dictionary/mission"],
   ["delegation","代表团；使团","n.",["代表团","使团"],["mission-delegation"],"A trade mission visited the region to meet local producers.","一个贸易代表团访问了该地区，会见本地生产商。",null,"https://www.merriam-webster.com/dictionary/mission"],
   ["religious","传教；传教团；传教站","n.",["传教","传教团","传教站"],["mission-religious"],"The old mission provided a school and a small clinic.","旧传教站设有一所学校和一间小诊所。",null,"https://www.merriam-webster.com/dictionary/mission"]
  ],[{"terms":["派遣","向...传教"],"decision":"scope-excluded","reason":"少用动词不纳入常用范围；名词的任务、使团和传教机构已分别训练。","source":"https://www.merriam-webster.com/dictionary/mission"}]);
  entry("experience",[
   ["knowledge","经验；阅历","n.",["经验","阅历"],["experience-knowledge"],"She has years of experience repairing antique clocks.","她有多年修理古董钟的经验。",null,"https://www.merriam-webster.com/dictionary/experience"],
   ["event","经历；体验","n.",["经历","体验"],["experience-event"],"Spending a night in the mountain hut was an unforgettable experience.","在山间小屋过夜是一次难忘的经历。",null,"https://www.merriam-webster.com/dictionary/experience"],
   ["undergo","经历；体验；遭受","v.",["经历","体验","遭受"],["experience-undergo"],"The town experienced several power cuts during the storm.","风暴期间，小镇遭遇了几次停电。",null,"https://www.merriam-webster.com/dictionary/experience"]
  ],[]);
  entry("experienced",[
   ["skilled","有经验的；熟练的；老练的","adj.",["有经验的","熟练的","老练的","富有经验的"],["experienced-skilled"],"An experienced guide checked the ropes before we began climbing.","经验丰富的向导在我们开始攀登前检查了绳索。",null,"https://www.merriam-webster.com/dictionary/experienced"]
  ],[]);
  entry("language",[
   ["communication","语言；交流系统","n.",["语言","交流系统","文字"],["language-communication"],"The island has its own language, spoken in every village.","岛上有自己的语言，每个村庄都有人使用。",null,"https://www.merriam-webster.com/dictionary/language"],
   ["expression","用语；措辞；表达方式","n.",["用语","措辞","表达方式"],["language-expression"],"The instructions use plain language instead of technical jargon.","说明使用平实的语言，而非专业术语。",null,"https://www.merriam-webster.com/dictionary/language"],
   ["computing","编程语言；计算机语言","n.",["编程语言","计算机语言"],["language-computing"],"The students used a simple programming language to control the robot.","学生们用一种简单编程语言控制机器人。",null,"https://www.merriam-webster.com/dictionary/language"]
  ],[]);
  entry("assign",[
   ["allocate","分配；指派；布置","v.",["分配","指派","布置","赋值"],["assign-allocate"],"The teacher assigned a different river to each research group.","老师给每个研究小组分配了一条不同的河流。",null,"https://www.merriam-webster.com/dictionary/assign"],
   ["ascribe","归因；确定归属","v.",["归因","确定归属"],["assign-ascribe"],"The experts assigned the painting to an unknown local artist.","专家将这幅画归于一位身份不明的本地画家。","assign sth to","https://www.merriam-webster.com/dictionary/assign"],
   ["transfer","转让（权利、财产等）","v.",["转让（权利、财产等）"],["assign-transfer"],"The author assigned the publishing rights to a small press.","作者把出版权转让给了一家小出版社。",null,"https://www.merriam-webster.com/dictionary/assign"]
  ],[]);
  entry("single",[
   ["one","单一的；仅一个的；单人的","adj.",["单一的","仅一个的","单人的","个别的","孤独的","专一的","一个"],["single-one"],"A single lamp lit the whole narrow corridor.","一盏灯照亮了整条狭窄走廊。",null,"https://www.merriam-webster.com/dictionary/single"],
   ["unmarried","单身的；未婚的","adj.",["单身的","未婚的"],["single-unmarried"],"The survey compared housing costs for single and married adults.","调查比较了单身成人与已婚成人的住房费用。",null,"https://www.merriam-webster.com/dictionary/single"],
   ["record","单曲唱片","n.",["单曲唱片"],["single-record"],"The band released a new single before the summer tour.","乐队在夏季巡演前发行了一首新单曲。",null,"https://www.merriam-webster.com/dictionary/single"],
   ["choose","挑出；选定","v.",["挑出","选定","选出"],["single-choose"],"The report singled out three projects for further funding.","报告选出了三个项目继续提供资助。","single out","https://www.merriam-webster.com/dictionary/single"],
   ["one-way","单程票","n.",["单程票"],["single-one-way"],"She bought a single to the coast and planned to walk back.","她买了一张去海边的单程票，计划步行回来。",null,"https://www.collinsdictionary.com/dictionary/english/single"],
   ["sport","单打（比赛）","n. pl.",["单打（比赛）","单打"],["single-sport"],"He plays singles on Mondays and doubles at the weekend.","他周一打单打，周末打双打。",null,"https://www.collinsdictionary.com/dictionary/english/single"],
   ["one-way-adj","单程的","adj.",["单程的"],["single-one-way-adj"],"A single ticket costs less than a return on this short route.","在这条短途线路上，单程票比往返票便宜。",null,"https://www.collinsdictionary.com/dictionary/english/single"]
  ],[{"terms":["击出一垒打","单精度型"],"decision":"scope-excluded","reason":"棒球打击和计算机类型是专业用法，不将球类单打与棒球一垒安打混为一义。","source":"https://www.merriam-webster.com/dictionary/single"}]);
  entry("discuss",[
   ["talk-about","讨论；商议；论述","v.",["讨论","商议","论述","辩论"],["discuss-talk-about"],"The committee will discuss the proposal at its next meeting.","委员会将在下次会议上讨论这项提案。",null,"https://www.merriam-webster.com/dictionary/discuss"]
  ],[]);
  entry("programme",[
   ["plan","计划；方案；项目","n.",["计划","方案","项目","纲要","大纲","规划","拟...计划"],["programme-plan"],"The programme gives unemployed adults practical training in building repairs.","该项目为失业成人提供建筑维修实训。",null,"https://www.collinsdictionary.com/dictionary/english/programme"],
   ["broadcast","节目；广播或电视节目","n.",["节目","广播节目","电视节目"],["programme-broadcast"],"The radio programme includes interviews with local farmers.","这档广播节目包含对本地农民的采访。",null,"https://www.collinsdictionary.com/dictionary/english/programme"],
   ["arrange","安排节目；编排","v.",["安排节目","编排"],["programme-arrange"],"The theatre programmed a series of short plays for the festival.","剧院为节庆安排了一系列短剧。",null,"https://www.collinsdictionary.com/dictionary/english/programme"],
   ["printed-order","节目单；演出安排表","n.",["节目单","演出安排表","演出安排"],["programme-printed-order"],"The programme lists the musicians in the order they will appear.","节目单按出场顺序列出了乐手。",null,"https://www.collinsdictionary.com/dictionary/english/programme"]
  ],[{"terms":["程序","编程序"],"decision":"context-required","reason":"Collins 保留 computing 变体拼写，但计算机语境通常写 program；本批保持原词库 programme，训练计划、节目、节目单和编排，不把两种拼写另造重复词条。","source":"https://www.collinsdictionary.com/dictionary/english/programme"}]);
  entry("draw",[
   ["picture","画；绘制","v.",["画","绘制","描写","制订","草拟","绘图"],["draw-picture"],"She drew a map showing the route from the station to the harbour.","她画了一张从车站到港口的路线图。",null,"https://www.merriam-webster.com/dictionary/draw"],
   ["pull","拉；拖；取出","v.",["拉","拖","取出","拔剑","拖拉","拔出","领取"],["draw-pull"],"He drew the heavy curtain across the open doorway.","他把厚窗帘拉过敞开的门口。",null,"https://www.merriam-webster.com/dictionary/draw"],
   ["attract","吸引；引起","v.",["吸引","引起"],["draw-attract"],"The street musicians drew a small crowd despite the rain.","尽管下着雨，街头乐手仍吸引了一小群观众。",null,"https://www.merriam-webster.com/dictionary/draw"],
   ["infer","得出；作出（结论等）","v.",["得出","作出（结论等）"],["draw-infer"],"We cannot draw a firm conclusion from such a small sample.","我们无法从这么小的样本得出确切结论。","draw a conclusion","https://www.merriam-webster.com/dictionary/draw"],
   ["level-result","平局","n.",["平局"],["draw-level-result"],"The match ended in a draw after both teams missed late chances.","两队都错失最后机会，比赛以平局结束。",null,"https://www.merriam-webster.com/dictionary/draw"],
   ["random-selection","抽签；抽奖","n.",["抽签","抽奖","抽签决定"],["draw-random-selection"],"Names for the free tickets were chosen in a public draw.","免费票获得者的姓名由公开抽签选出。",null,"https://www.merriam-webster.com/dictionary/draw"],
   ["equal-result","打成平局","v.",["打成平局"],["draw-equal-result"],"The two teams drew after neither scored in extra time.","两队在加时赛中均未进球，打成了平局。",null,"https://www.merriam-webster.com/dictionary/draw"]
  ],[{"terms":["挨近","引导","翻牌"],"decision":"context-required","reason":"这些依赖 draw near、引领以及抽取纸牌等结构；不把近义短语无条件扩展到一般画或拉。","source":"https://www.merriam-webster.com/dictionary/draw"}]);
  entry("option",[
   ["choice","选择；可选项；选择权","n.",["选择","可选项","选择权","挑选","选项"],["option-choice"],"Taking the ferry is the cheapest option for reaching the island.","乘渡轮是去岛上最便宜的选择。",null,"https://www.merriam-webster.com/dictionary/option"],
   ["contract","选择权合同；期权","n.",["选择权合同","期权"],["option-contract"],"The agreement gives the buyer an option to purchase the adjoining land.","协议给予买方购买相邻土地的选择权。",null,"https://www.merriam-webster.com/dictionary/option"]
  ],[]);
  entry("training",[
   ["instruction","训练；培训；培养","n.",["训练","培训","培养"],["training-instruction"],"All new volunteers receive training in safe food handling.","所有新志愿者都接受食品安全操作培训。",null,"https://www.merriam-webster.com/dictionary/training"]
  ],[]);
  entry("mobile",[
   ["movable","可移动的；行动方便的","adj.",["可移动的","行动方便的","移动的","机动的"],["mobile-movable"],"The mobile clinic visits three remote villages each week.","流动诊所每周到访三个偏远村庄。",null,"https://www.merriam-webster.com/dictionary/mobile"],
   ["phone-related","移动通信的；手机的","adj.",["移动通信的","手机的"],["mobile-phone-related"],"The village gained mobile internet access after the new mast was built.","新信号塔建成后，村里有了移动互联网。",null,"https://www.merriam-webster.com/dictionary/mobile"],
   ["phone","手机","n.",["手机"],["mobile-phone"],"She left her mobile in the office and missed the call.","她把手机落在办公室，没接到电话。",null,"https://www.merriam-webster.com/dictionary/mobile"],
   ["hanging-art","活动吊饰","n.",["活动吊饰","活动物体"],["mobile-hanging-art"],"A wooden mobile turned slowly above the baby's bed.","一件木制活动吊饰在婴儿床上方缓缓转动。",null,"https://www.merriam-webster.com/dictionary/mobile"]
  ],[{"terms":["易变的"],"decision":"restricted-verified","reason":"词典有表情、心境等易变的扩展义；本批侧重可移动、移动通信、手机和活动吊饰。","source":"https://www.merriam-webster.com/dictionary/mobile"}]);
  entry("kick",[
   ["foot-action","踢；踢动","v.",["踢","踢动"],["kick-foot-action"],"He kicked the loose stone away from the doorway.","他把门口的松石踢开。",null,"https://www.merriam-webster.com/dictionary/kick"],
   ["foot-act","踢；一脚","n.",["踢","一脚","反冲","后座力"],["kick-foot-act"],"One strong kick sent the ball over the low wall.","用力一脚把球踢过了矮墙。",null,"https://www.merriam-webster.com/dictionary/kick"],
   ["thrill","乐趣；兴奋；刺激","n.",["乐趣","兴奋","刺激"],["kick-thrill"],"She gets a kick out of finding old books in market stalls.","她很享受在市场摊位上发现旧书的乐趣。","get a kick out of","https://www.merriam-webster.com/dictionary/kick"],
   ["stop-habit","戒掉（习惯、瘾等）","v.",["戒掉（习惯、瘾等）"],["kick-stop-habit"],"He finally kicked the habit of checking his phone at every meal.","他终于戒掉了每顿饭都看手机的习惯。","kick a habit","https://www.merriam-webster.com/dictionary/kick"]
  ],[{"terms":["凹底","反抗"],"decision":"scope-excluded","reason":"瓶底凹部是行业名词，反抗义多见 kick against 等结构；本批以踢、乐趣及戒掉习惯为范围。","source":"https://www.merriam-webster.com/dictionary/kick"}]);
  entry("throw",[
   ["toss","扔；投；抛","v.",["扔","投","抛","掷","发射","摔下","丢","投掷","掷骰子"],["throw-toss"],"She threw the rope across the stream to her waiting partner.","她把绳子扔过小溪，交给等候的同伴。",null,"https://www.merriam-webster.com/dictionary/throw"],
   ["cause-state","使突然陷入（某种状态）","v.",["使突然陷入（某种状态）"],["throw-cause-state"],"The announcement threw the travel plans into confusion.","这则公告打乱了旅行计划。","throw sth into","https://www.merriam-webster.com/dictionary/throw"],
   ["host","举办（聚会）","v.",["举办（聚会）"],["throw-host"],"The neighbours threw a small party to welcome the new family.","邻居们办了一场小聚会欢迎新搬来的家庭。","throw a party","https://www.merriam-webster.com/dictionary/throw"],
   ["lose-deliberately","故意输掉（比赛）","v.",["故意输掉（比赛）"],["throw-lose-deliberately"],"The player denied being paid to throw the final match.","这名球员否认曾收钱故意输掉决赛。",null,"https://www.merriam-webster.com/dictionary/throw"],
   ["pottery","拉坯；用陶轮制（陶器）","v.",["拉坯","用陶轮制（陶器）"],["throw-pottery"],"The potter throws each bowl by hand on a small wheel.","陶工在小陶轮上手工拉制每一只碗。",null,"https://www.merriam-webster.com/dictionary/throw"]
  ],[{"terms":["匆匆穿上(或脱下)","抛弃","摆脱","冒险"],"decision":"context-required","reason":"须结合 throw on/off/away 或搭配判断；单独 throw 并不等于所有穿衣、摆脱或冒险行为。","source":"https://www.merriam-webster.com/dictionary/throw"}]);
  entry("goal",[
   ["aim","目标；目的","n.",["目标","目的","终点"],["goal-aim"],"Our main goal is to restore clean water to every home.","我们的主要目标是让每户人家重新用上清洁水。",null,"https://www.merriam-webster.com/dictionary/goal"],
   ["sport-target","球门","n.",["球门"],["goal-sport-target"],"The goalkeeper stood between the goal and the approaching striker.","守门员站在球门与逼近的前锋之间。",null,"https://www.merriam-webster.com/dictionary/goal"],
   ["score","进球；得分","n.",["进球","得分","攻门","射门得分"],["goal-score"],"The late goal gave the visiting team a narrow victory.","最后阶段的进球让客队险胜。",null,"https://www.merriam-webster.com/dictionary/goal"]
  ],[{"terms":["守门员"],"decision":"scope-excluded","reason":"goal 指球门或进球，守门员应为 goalkeeper 等；旧译不作普通词义认证。","source":"https://www.merriam-webster.com/dictionary/goal"}]);
  entry("slip",[
   ["slide","滑倒；滑落；打滑","v.",["滑倒","滑落","打滑","滑动"],["slip-slide"],"She slipped on the wet step but caught the railing.","她在湿台阶上滑了一下，但抓住了栏杆。",null,"https://www.merriam-webster.com/dictionary/slip"],
   ["quiet-movement","悄悄走；溜走","v.",["悄悄走","溜走"],["slip-quiet-movement"],"He slipped out of the hall before the final speech.","最后一场讲话开始前，他悄悄溜出了礼堂。",null,"https://www.merriam-webster.com/dictionary/slip"],
   ["forget","被遗忘；不经意说出","v.",["被遗忘","不经意说出","泄露"],["slip-forget"],"The name slipped my mind until I saw the photograph.","直到看见照片，我才想起之前忘记的那个名字。","slip sb's mind","https://www.merriam-webster.com/dictionary/slip"],
   ["put-quietly","悄悄放入；迅速穿上","v.",["悄悄放入","迅速穿上"],["slip-put-quietly"],"She slipped the note into his coat pocket.","她悄悄把便条塞进他的外套口袋。",null,"https://www.merriam-webster.com/dictionary/slip"],
   ["error","小错；失误","n.",["小错","失误","出错","差错"],["slip-error"],"A slip in the calculation made the total too high.","计算中的小错使总数偏高。",null,"https://www.merriam-webster.com/dictionary/slip"],
   ["paper","纸条；小纸片","n.",["纸条","小纸片","便条"],["slip-paper"],"Write your number on the slip and put it in the box.","把号码写在纸条上，放进盒子里。",null,"https://www.merriam-webster.com/dictionary/slip"]
  ],[{"terms":["下降","衬裙"],"decision":"scope-excluded","reason":"下降是逐渐滑落的扩展义，衬裙是独立衣物名词；本批保留滑动、悄然移动、遗忘、放入、失误和纸条。","source":"https://www.merriam-webster.com/dictionary/slip"}]);
  entry("simulate",[
   ["model","模拟；仿真","v.",["模拟","仿真","模仿"],["simulate-model"],"The machine simulates the movement of a small boat in rough water.","机器模拟小船在风浪中的运动。",null,"https://www.merriam-webster.com/dictionary/simulate"],
   ["feign","假装；伪装","v.",["假装","伪装"],["simulate-feign"],"He simulated surprise when the visitors revealed the plan.","来访者透露计划时，他假装惊讶。",null,"https://www.merriam-webster.com/dictionary/simulate"]
  ],[{"terms":["伪装的","模拟的","假装的","冒充"],"decision":"scope-excluded","reason":"本词教学词性为动词；相应形容词通常用 simulated，冒充某人的典型动词是 impersonate，不据错误词性扩大训练。","source":"https://www.merriam-webster.com/dictionary/simulate"}]);
  entry("room",[
   ["chamber","房间；室","n.",["房间","室"],["room-chamber"],"The smallest room became a quiet place for reading.","最小的房间成了安静的阅读空间。",null,"https://www.merriam-webster.com/dictionary/room"],
   ["space","空间；余地","n.",["空间","余地","空位","场所"],["room-space"],"There is enough room in the van for two more boxes.","货车里还有足够空间放两个箱子。",null,"https://www.merriam-webster.com/dictionary/room"],
   ["opportunity","可能性；改进余地","n.",["可能性","改进余地"],["room-opportunity"],"The draft leaves room for further discussion of the costs.","草案为进一步讨论费用留出了余地。",null,"https://www.merriam-webster.com/dictionary/room"],
   ["lodge","租住；合住","v.",["租住","合住","住宿","居住","留宿"],["room-lodge"],"During the course, she roomed with another student near the station.","上课期间，她与另一名学生合住在车站附近。",null,"https://www.merriam-webster.com/dictionary/room"]
  ],[]);
  entry("store",[
   ["shop","商店；店铺","n.",["商店","店铺"],["store-shop"],"The village store sells bread and basic household supplies.","村里的商店出售面包和基本日用品。",null,"https://www.merriam-webster.com/dictionary/store"],
   ["reserve","储备；储存物","n.",["储备","储存物","备用品"],["store-reserve"],"The walkers carried an emergency store of food in waterproof bags.","徒步者用防水袋携带应急食物储备。",null,"https://www.merriam-webster.com/dictionary/store"],
   ["keep","储存；保存；存储","v.",["储存","保存","存储","贮藏"],["store-keep"],"The museum stores fragile maps in flat drawers.","博物馆把易损地图平放在抽屉里保存。",null,"https://www.merriam-webster.com/dictionary/store"]
  ],[{"terms":["仓库","存储器","供给","贮藏的","现成的","存储器操作"],"decision":"scope-excluded","reason":"仓储设施、英式计算机旧称与少用形容词动词须看具体结构；本批只教商店、储备和保存，不把软件操作名当词义。","source":"https://www.merriam-webster.com/dictionary/store"}]);
  entry("space",[
   ["available-area","空间；地方；空位","n.",["空间","地方","空位","位置","距离","(期刊等的)篇幅"],["space-available-area"],"The narrow desk leaves little space for a large monitor.","狭窄的桌面几乎没有地方放大显示器。",null,"https://www.merriam-webster.com/dictionary/space"],
   ["cosmos","太空；宇宙空间","n.",["太空","宇宙空间"],["space-cosmos"],"The telescope detects objects far beyond the nearest regions of space.","望远镜能探测远远超出近邻太空区域的天体。",null,"https://www.merriam-webster.com/dictionary/space"],
   ["gap","间隔；空白；空格","n.",["间隔","空白","空格"],["space-gap"],"Leave a space between the two words when you type the label.","输入标签时，在两个单词之间留一个空格。",null,"https://www.merriam-webster.com/dictionary/space"],
   ["place-apart","使保持间距；隔开","v.",["使保持间距","隔开","分隔","留间隔"],["space-place-apart"],"Space the seedlings evenly along the row.","沿着这一行，把幼苗按均匀间距种下。",null,"https://www.merriam-webster.com/dictionary/space"]
  ],[{"terms":["空格校验"],"decision":"scope-excluded","reason":"旧库软件或数据处理术语需整体理解，不是 space 独立的通用词义。","source":"https://www.merriam-webster.com/dictionary/space"}]);
  entry("maintain",[
   ["preserve","维持；保持；维护","v.",["维持","保持","维护","维修"],["maintain-preserve"],"The volunteers maintain a clear path through the woodland.","志愿者维护着一条穿过树林的畅通小径。",null,"https://www.merriam-webster.com/dictionary/maintain"],
   ["assert","坚持认为；主张","v.",["坚持认为","主张","坚持"],["maintain-assert","state-firmly"],"The owner maintains that the wall was safe before the storm.","业主坚持认为，暴风雨之前这堵墙是安全的。",null,"https://www.merriam-webster.com/dictionary/maintain"],
   ["support","供养；赡养","v.",["供养","赡养"],["maintain-support"],"Her wages were enough to maintain the family during the winter.","她的工资足以维持全家冬季的生活。",null,"https://www.merriam-webster.com/dictionary/maintain"]
  ],[]);
  entry("fix",[
   ["repair","修理；纠正；解决","v.",["修理","纠正","解决"],["fix-repair","repair-damage"],"The mechanic fixed the broken brake before opening the shop.","修车师傅在开店前修好了损坏的刹车。",null,"https://www.merriam-webster.com/dictionary/fix"],
   ["secure","固定；安装","v.",["固定","安装"],["fix-secure"],"Fix the shelf securely to the wall before adding books.","放书前，先把架子牢牢固定在墙上。",null,"https://www.merriam-webster.com/dictionary/fix"],
   ["set","确定；安排（时间、价格等）","v.",["确定","安排（时间、价格等）","安排"],["fix-set"],"The group fixed a date for the river clean-up.","小组确定了清理河道的日期。",null,"https://www.merriam-webster.com/dictionary/fix"],
   ["rig","操纵；作弊安排","v.",["操纵","作弊安排"],["fix-rig"],"The organiser was accused of fixing the result of the contest.","组织者被指控操纵比赛结果。",null,"https://www.merriam-webster.com/dictionary/fix"],
   ["predicament","困境；难题","n.",["困境","难题","解决办法"],["fix-predicament"],"Losing both keys left us in a difficult fix.","两把钥匙都丢了，让我们陷入困境。",null,"https://www.merriam-webster.com/dictionary/fix"],
   ["focus","使（目光、注意力）集中；凝视","v.",["使（目光、注意力）集中","凝视","使集中","凝视"],["fix-focus"],"She fixed her eyes on the narrow path ahead.","她目不转睛地看着前方狭窄的小径。","fix one's eyes on","https://www.merriam-webster.com/dictionary/fix"]
  ],[{"terms":["准备食物","定位","一剂毒品","解决办法"],"decision":"context-required","reason":"美式 fix a meal、确定位置以及口语毒品剂量语义各自受限；本批教修复、固定、确定、操纵、困境及集中目光，不用一个解释覆盖所有专业用法。","source":"https://www.merriam-webster.com/dictionary/fix"}]);
  entry("enter",[
   ["go-in","进入；加入","v.",["进入","加入","开始","进去"],["enter-go-in"],"Visitors enter the garden through a gate beside the old mill.","游客从旧磨坊旁的门进入花园。",null,"https://www.merriam-webster.com/dictionary/enter"],
   ["record","输入；登记；记入","v.",["输入","登记","记入"],["enter-record"],"Enter the final reading in the log before switching off the pump.","关泵前，把最后读数记入日志。",null,"https://www.merriam-webster.com/dictionary/enter"],
   ["competition","报名参加（比赛、考试等）","v.",["报名参加（比赛、考试等）","参加"],["enter-competition"],"Three local schools entered the science competition.","三所本地学校报名参加了科学竞赛。",null,"https://www.merriam-webster.com/dictionary/enter"]
  ],[{"terms":["回车"],"decision":"scope-excluded","reason":"键盘按键名 Enter 不直接等同于普通动词进入；本批不把按键动作额外计作独立自然语言目标。","source":"https://www.merriam-webster.com/dictionary/enter"}]);
  entry("exit",[
   ["way-out","出口；通道","n.",["出口","通道"],["exit-way-out"],"The nearest exit is behind the last row of seats.","最近的出口在最后一排座椅后面。",null,"https://www.merriam-webster.com/dictionary/exit"],
   ["departure","离开；退场","n.",["离开","退场","离场"],["exit-departure"],"Her quiet exit attracted less attention than her arrival.","她悄然离去，比到来时更少引人注意。",null,"https://www.merriam-webster.com/dictionary/exit"],
   ["leave","退出；离开；结束程序","v.",["退出","离开","结束程序"],["exit-leave"],"Save the document before you exit the program.","退出程序前，请保存文档。",null,"https://www.merriam-webster.com/dictionary/exit"]
  ],[]);
  entry("beam",[
   ["support","梁；横梁","n.",["梁","横梁","杆"],["beam-support"],"A wooden beam supports the ceiling above the fireplace.","一根木横梁支撑着壁炉上方的天花板。",null,"https://www.merriam-webster.com/dictionary/beam"],
   ["ray","光束；射线束","n.",["光束","射线束","光线","束"],["beam-ray"],"A narrow beam of light reached the floor through the cracked door.","一束细光从门缝照到了地板上。",null,"https://www.merriam-webster.com/dictionary/beam"],
   ["smile","眉开眼笑；笑容满面","v.",["眉开眼笑","笑容满面","容光焕发","微笑","感到欣喜"],["beam-smile"],"She beamed when her daughter finished the difficult performance.","女儿完成高难度表演时，她笑容满面。",null,"https://www.merriam-webster.com/dictionary/beam"],
   ["transmit","播送；发射；传输","v.",["播送","发射","传输","射出光线","照耀"],["beam-transmit"],"The satellite beamed images of the storm to the research station.","卫星把风暴图像传送到研究站。",null,"https://www.merriam-webster.com/dictionary/beam"]
  ],[{"terms":["用梁支承"],"decision":"restricted-verified","reason":"词典列动词支梁义，与名词梁不同；本批教梁、光束、微笑与传输，支梁作行业参考。","source":"https://www.merriam-webster.com/dictionary/beam"}]);
  entry("block",[
   ["solid-piece","块；大块材料","n.",["块","大块材料","木块","石块"],["block-solid-piece"],"The sculptor began with a block of pale limestone.","雕刻家从一大块浅色石灰石开始创作。",null,"https://www.merriam-webster.com/dictionary/block"],
   ["city-area","街区","n.",["街区"],["block-city-area"],"The bakery is two blocks from the railway station.","面包店离火车站有两个街区。",null,"https://www.merriam-webster.com/dictionary/block"],
   ["building","大楼；楼群；大建筑","n.",["大楼","楼群","大建筑"],["block-building"],"The new apartment block includes space for a small clinic.","新公寓楼设有可供小诊所使用的空间。",null,"https://www.merriam-webster.com/dictionary/block"],
   ["obstruct","阻挡；堵塞；妨碍","v.",["阻挡","堵塞","妨碍","阻塞","封锁"],["block-obstruct"],"A fallen branch blocked the narrow lane.","一根倒下的树枝堵住了狭窄小巷。",null,"https://www.merriam-webster.com/dictionary/block"]
  ],[{"terms":["使成块状","数据块"],"decision":"scope-excluded","reason":"材料成形与数据结构是专门语境；本批保留材料块、街区、楼群及阻挡，不因对象不同无限拆义。","source":"https://www.merriam-webster.com/dictionary/block"}]);
  entry("concrete",[
   ["material","混凝土","n.",["混凝土","凝结物"],["concrete-material"],"The steps were made of concrete to withstand frequent flooding.","这些台阶用混凝土建成，以抵御频繁洪水。",null,"https://www.merriam-webster.com/dictionary/concrete"],
   ["specific","具体的；确凿的；实在的","adj.",["具体的","确凿的","实在的"],["concrete-specific"],"The report offers concrete evidence of damage to the riverbank.","报告提供了河岸受损的确凿证据。",null,"https://www.merriam-webster.com/dictionary/concrete"],
   ["cover","铺设混凝土；用混凝土浇筑","v.",["铺设混凝土","用混凝土浇筑"],["concrete-cover"],"The workers concreted the base before installing the water tank.","安装水箱前，工人们用混凝土浇筑了底座。",null,"https://www.merriam-webster.com/dictionary/concrete"]
  ],[{"terms":["混凝土的","(使)凝结"],"decision":"context-required","reason":"形容词材料修饰与动词固化须按句法和专业对象区分；本批名词混凝土、形容词具体确凿以及铺设混凝土分别训练。","source":"https://www.merriam-webster.com/dictionary/concrete"}]);
  entry("speed",[
   ["rate","速度；速率","n.",["速度","速率","迅速"],["speed-rate"],"The speed of the current made the river unsafe to cross.","水流速度使这条河不适合涉渡。",null,"https://www.merriam-webster.com/dictionary/speed"],
   ["move-fast","疾行；飞驰；超速","v.",["疾行","飞驰","超速"],["speed-move-fast"],"A cyclist sped past the waiting buses.","一名骑车人从等候的公交车旁飞驰而过。",null,"https://www.merriam-webster.com/dictionary/speed"],
   ["accelerate","加速；促进","v.",["加速","促进","快进","快速传送","使加速"],["speed-accelerate"],"Better signs could speed up the evacuation.","更好的标志可以加快疏散。","speed up","https://www.merriam-webster.com/dictionary/speed"]
  ],[{"terms":["中央处理机速度设置程序"],"decision":"scope-excluded","reason":"这是旧软件名称或功能展开，不是普通英语 speed 的词义。","source":"https://www.merriam-webster.com/dictionary/speed"}]);
  entry("package",[
   ["parcel","包裹；包装","n.",["包裹","包装","包","包装用物"],["package-parcel"],"The package arrived with a torn label but undamaged contents.","包裹到达时标签破了，里面的物品却完好无损。",null,"https://www.merriam-webster.com/dictionary/package"],
   ["bundle","整套方案；一揽子计划；软件包","n.",["整套方案","一揽子计划","软件包","套装软件","程序包","一揽子的"],["package-bundle"],"The support package includes training and six months of technical advice.","这套支持方案包括培训和六个月的技术咨询。",null,"https://www.merriam-webster.com/dictionary/package"],
   ["wrap","包装；打包；组合推出","v.",["包装","打包","组合推出"],["package-wrap"],"The biscuits are packaged in small reusable tins.","饼干被包装在可重复使用的小铁盒里。",null,"https://www.merriam-webster.com/dictionary/package"]
  ],[]);
  entry("burden",[
   ["load","重担；负担；责任","n.",["重担","负担","责任","重载","担子"],["burden-load"],"The extra fees placed a heavy burden on low-income families.","额外费用给低收入家庭带来了沉重负担。",null,"https://www.merriam-webster.com/dictionary/burden"],
   ["load-verb","使负重；使担负","v.",["使负重","使担负","装货于","烦扰","使负担"],["burden-load-verb"],"The new rules burdened small shops with more paperwork.","新规定给小商店增加了更多文书负担。",null,"https://www.merriam-webster.com/dictionary/burden"]
  ],[]);
  entry("delay",[
   ["postpone","推迟；延误；拖延","v.",["推迟","延误","拖延","耽搁","迟滞","延迟","延时"],["delay-postpone"],"Heavy rain delayed the repairs until the following week.","大雨使维修推迟到了下一周。",null,"https://www.merriam-webster.com/dictionary/delay"],
   ["waiting","延误；耽搁的时间","n.",["延误","耽搁的时间"],["delay-waiting"],"The broken signal caused a delay of nearly forty minutes.","信号故障导致了将近四十分钟的延误。",null,"https://www.merriam-webster.com/dictionary/delay"]
  ],[]);
  entry("load",[
   ["cargo","装载量；负荷；一车货物","n.",["装载量","负荷","一车货物","担子","重担","负载"],["load-cargo"],"The bridge cannot carry a load of more than five tonnes.","这座桥不能承受超过五吨的负荷。",null,"https://www.merriam-webster.com/dictionary/load"],
   ["responsibility","工作量；负担","n.",["工作量","负担"],["load-responsibility"],"Sharing the paperwork reduced the teacher's administrative load.","分担文书工作减轻了老师的行政负担。",null,"https://www.merriam-webster.com/dictionary/load"],
   ["large-amount","大量；许多","n. pl.",["大量","许多"],["load-large-amount"],"We took loads of photographs during the field trip.","实地考察期间，我们拍了很多照片。","loads of","https://www.merriam-webster.com/dictionary/load"],
   ["put-in","装载；装入","v.",["装载","装入","装填","使担负","装货","上客","装料"],["load-put-in"],"The crew loaded the van with fresh produce before sunrise.","日出前，工作人员把新鲜农产品装进货车。",null,"https://www.merriam-webster.com/dictionary/load"],
   ["computer","加载；载入","v.",["加载","载入","装入程序"],["load-computer"],"The map loads slowly when the network is busy.","网络繁忙时，地图加载很慢。",null,"https://www.merriam-webster.com/dictionary/load"]
  ],[]);
  entry("curb",[
   ["restrain","控制；抑制；限制","v.",["控制","抑制","限制","勒住"],["curb-restrain"],"The town planted more trees to help curb summer heat.","镇上种了更多树，以帮助缓解夏季高温。",null,"https://www.merriam-webster.com/dictionary/curb"],
   ["restraint","限制；约束","n.",["限制","约束","束缚"],["curb-restraint"],"The committee proposed a curb on late-night construction noise.","委员会提议限制深夜施工噪音。",null,"https://www.merriam-webster.com/dictionary/curb"],
   ["road-edge","路缘；路缘石","n.",["路缘","路缘石","边石"],["curb-road-edge"],"The taxi stopped beside the curb outside the station.","出租车停在车站外的路缘旁。",null,"https://www.merriam-webster.com/dictionary/curb"]
  ],[{"terms":["勒马绳"],"decision":"scope-excluded","reason":"马具义与现代道路路缘及比喻抑制不同；旧译的绳并不精确，本批不把所有缰绳当 curb。","source":"https://www.merriam-webster.com/dictionary/curb"}]);
  entry("memory",[
   ["ability","记忆力；记忆","n.",["记忆力","记忆"],["memory-ability"],"Regular practice improved her memory for unfamiliar place names.","经常练习提高了她记忆陌生地名的能力。",null,"https://www.merriam-webster.com/dictionary/memory"],
   ["recollection","回忆；记忆中的事","n.",["回忆","记忆中的事"],["memory-recollection"],"My clearest memory of the island is the sound of the evening bells.","我对那座岛最清晰的记忆是傍晚的钟声。",null,"https://www.merriam-webster.com/dictionary/memory"],
   ["computer","存储器；内存","n.",["存储器","内存","存储"],["memory-computer"],"The computer needs more memory to handle the large images.","电脑需要更大内存来处理这些大图像。",null,"https://www.merriam-webster.com/dictionary/memory"],
   ["remembrance","纪念；对逝者的怀念","n.",["纪念","对逝者的怀念"],["memory-remembrance"],"The garden was planted in memory of the village doctor.","这座花园是为纪念村里的医生而建的。","in memory of","https://www.merriam-webster.com/dictionary/memory"]
  ],[{"terms":["查看内存实用程序"],"decision":"scope-excluded","reason":"这是软件工具说明而非 memory 的自然语言义项；内存本身已纳入训练。","source":"https://www.merriam-webster.com/dictionary/memory"}]);
  entry("stamp",[
   ["postage","邮票","n.",["邮票"],["stamp-postage"],"The envelope needs another stamp because it is unusually heavy.","信封格外重，因此还需要一枚邮票。",null,"https://www.merriam-webster.com/dictionary/stamp"],
   ["seal","印章；戳记；印记","n.",["印章","戳记","印记","印","戳子","图章","印花税票","标志","特征","类型"],["stamp-seal"],"The document carries the official stamp of the town council.","文件上盖有市政委员会的公章。",null,"https://www.merriam-webster.com/dictionary/stamp"],
   ["impress","盖章；印上","v.",["盖章","印上","盖章于","铭刻"],["stamp-impress"],"The clerk stamped the date on each application.","办事员在每份申请上盖上了日期。",null,"https://www.merriam-webster.com/dictionary/stamp"],
   ["foot-action","跺脚；踩踏","v.",["跺脚","踩踏","顿足"],["stamp-foot-action"],"He stamped his feet to keep warm while waiting for the bus.","等公交车时，他跺脚取暖。",null,"https://www.merriam-webster.com/dictionary/stamp"],
   ["attach-postage","贴上邮票","v.",["贴上邮票"],["stamp-attach-postage"],"She stamped the envelopes before taking them to the post office.","她先给信封贴上邮票，再送去邮局。",null,"https://www.merriam-webster.com/dictionary/stamp"]
  ],[{"terms":["捣碎","扑灭"],"decision":"restricted-verified","reason":"词典可指用重物捣压以及踩灭，扑灭通常为 stamp out；本批保留邮票、印记、盖戳、跺脚和贴邮票。","source":"https://www.merriam-webster.com/dictionary/stamp"},{"terms":["打印器"],"decision":"context-required","reason":"stamp 可指盖印工具，不应泛指电子打印机；本批保留印章而不混入 printer 的一般含义。","source":"https://www.merriam-webster.com/dictionary/stamp"}]);
  entry("attractive",[
   ["appealing","有吸引力的；迷人的","adj.",["有吸引力的","迷人的","吸引人的","有魅力的","有迷惑力的"],["attractive-appealing"],"The sheltered courtyard makes the café especially attractive in winter.","避风庭院让这家咖啡馆在冬天尤其有吸引力。",null,"https://www.merriam-webster.com/dictionary/attractive"],
   ["beneficial","有利的；诱人的","adj.",["有利的","诱人的"],["attractive-beneficial"],"The flexible hours made the job attractive to parents with young children.","弹性工作时间让这份工作对有幼儿的父母很有吸引力。",null,"https://www.merriam-webster.com/dictionary/attractive"]
  ],[]);
  entry("internal",[
   ["inside","内部的；里面的；体内的","adj.",["内部的","里面的","体内的","内在的","内的"],["internal-inside"],"An internal inspection revealed corrosion inside the water tank.","内部检查发现水箱里面有腐蚀。",null,"https://www.merriam-webster.com/dictionary/internal"],
   ["organisation","国内的；组织内部的","adj.",["国内的","组织内部的"],["internal-organisation"],"The company held an internal review before publishing its findings.","公司在公布调查结果前进行了内部审查。",null,"https://www.merriam-webster.com/dictionary/internal"]
  ],[]);
  entry("suggest",[
   ["propose","建议；提出","v.",["建议","提出","提议"],["suggest-propose"],"She suggested moving the meeting to the quieter room upstairs.","她建议把会议移到楼上较安静的房间。",null,"https://www.merriam-webster.com/dictionary/suggest"],
   ["indicate","暗示；表明","v.",["暗示","表明"],["suggest-indicate"],"The tracks suggest that a large animal crossed the field.","足迹表明，有一只大型动物穿过了田地。",null,"https://www.merriam-webster.com/dictionary/suggest"],
   ["remind","使想起；让人联想到","v.",["使想起","让人联想到","启发","使人想起","促成"],["suggest-remind"],"The curved roof suggests the shape of an overturned boat.","弯曲屋顶使人联想到倒扣的船。",null,"https://www.merriam-webster.com/dictionary/suggest"]
  ],[]);
  entry("advise",[
   ["recommend","建议；劝告","v.",["建议","劝告","给...出主意","提意见","商量"],["advise-recommend"],"The guide advised us to carry extra water on the long route.","向导建议我们走长路线时多带些水。","advise sb to do sth","https://www.merriam-webster.com/dictionary/advise"],
   ["inform","通知；告知","v.",["通知","告知"],["advise-inform"],"Please advise the office of any change in your contact details.","联系方式如有变化，请通知办公室。","advise sb of sth","https://www.merriam-webster.com/dictionary/advise"]
  ],[]);
  entry("proposal",[
   ["plan","提议；建议；方案","n.",["提议","建议","方案","计划","提案","申请","投标"],["proposal-plan"],"The proposal would turn the disused station into a community hall.","这项方案将把废弃车站改成社区礼堂。",null,"https://www.merriam-webster.com/dictionary/proposal"],
   ["marriage","求婚","n.",["求婚"],["proposal-marriage"],"Her unexpected marriage proposal surprised everyone at the picnic.","她突如其来的求婚让野餐上的每个人都很惊讶。",null,"https://www.merriam-webster.com/dictionary/proposal"]
  ],[]);
  entry("hint",[
   ["indirect","暗示；提示；线索","n.",["暗示","提示","线索"],["hint-indirect"],"The teacher gave a hint without revealing the answer.","老师给了一个提示，却没有透露答案。",null,"https://www.merriam-webster.com/dictionary/hint"],
   ["small-amount","少许；微量","n.",["少许","微量"],["hint-small-amount"],"The sauce had a hint of lemon that balanced its sweetness.","酱汁里有一丝柠檬味，平衡了甜味。",null,"https://www.merriam-webster.com/dictionary/hint"],
   ["suggest-indirectly","暗示；示意","v.",["暗示","示意"],["hint-suggest-indirectly"],"She hinted that the old shop might reopen in spring.","她暗示那家旧商店可能在春季重新开业。",null,"https://www.merriam-webster.com/dictionary/hint"]
  ],[]);
  entry("assist",[
   ["help","帮助；协助","v.",["帮助","协助","促进"],["assist-help","practical-emotional-help"],"Two volunteers assisted the passengers with their heavy bags.","两名志愿者帮乘客搬了沉重的行李。",null,"https://www.merriam-webster.com/dictionary/assist"],
   ["sport","助攻；助攻动作","n.",["助攻","助攻动作"],["assist-sport"],"Her accurate pass earned her an assist on the winning goal.","她的精准传球为制胜进球贡献了一次助攻。",null,"https://www.merriam-webster.com/dictionary/assist"]
  ],[{"terms":["参加"],"decision":"restricted-verified","reason":"词典有以观众身份在场的少用义；常用训练限协助和体育助攻，避免错把任何参加译为 assist。","source":"https://www.merriam-webster.com/dictionary/assist"}]);
  entry("affirm",[
   ["state","肯定；断言；确认","v.",["肯定","断言","确认"],["affirm-state"],"The survey affirmed that residents wanted a safer crossing.","调查确认居民希望有更安全的过街设施。",null,"https://www.merriam-webster.com/dictionary/affirm"],
   ["uphold","维持（判决）；认可","v.",["维持（判决）","认可"],["affirm-uphold"],"The appeal court affirmed the earlier decision.","上诉法院维持了先前的裁决。",null,"https://www.merriam-webster.com/dictionary/affirm"]
  ],[]);
  entry("encourage",[
   ["inspire","鼓励；给予信心","v.",["鼓励","给予信心","支持","激励"],["encourage-inspire"],"Her teacher encouraged her after the disappointing first performance.","首次演出不理想后，老师鼓励了她。",null,"https://www.merriam-webster.com/dictionary/encourage"],
   ["promote","促进；助长；劝促","v.",["促进","助长","劝促","怂恿","煽动"],["encourage-promote"],"Cheaper bus tickets encouraged more people to leave their cars at home.","较便宜的公交票促使更多人不开车出门。",null,"https://www.merriam-webster.com/dictionary/encourage"]
  ],[]);
  entry("monitor",[
   ["observe","监测；监督；跟踪检查","v.",["监测","监督","跟踪检查","监视","监听"],["monitor-observe"],"The team monitors water quality at six points along the river.","团队在沿河六个地点监测水质。",null,"https://www.merriam-webster.com/dictionary/monitor"],
   ["screen","显示器；监视器","n.",["显示器","监视器"],["monitor-screen"],"The camera sends a live image to a monitor in the office.","摄像头把实时画面传到办公室的监视器上。",null,"https://www.merriam-webster.com/dictionary/monitor"],
   ["device","监测仪；监测装置","n.",["监测仪","监测装置","监督器","监听员","告诫物"],["monitor-device"],"A small monitor records the patient's heart rate overnight.","小型监测仪整夜记录病人的心率。",null,"https://www.merriam-webster.com/dictionary/monitor"],
   ["student","班长；值日生；协助教师的学生","n.",["班长","值日生","协助教师的学生","级长"],["monitor-student"],"The class monitor collected the completed worksheets.","班长收齐了做完的练习纸。",null,"https://www.merriam-webster.com/dictionary/monitor"]
  ],[{"terms":["监视程序"],"decision":"scope-excluded","reason":"计算机监控软件是特定工具用法；本批动词监测及名词显示器、监测仪、班长分开，不另造软件名称目标。","source":"https://www.merriam-webster.com/dictionary/monitor"}]);
  entry("clarify",[
   ["explain","澄清；阐明；解释清楚","v.",["澄清","阐明","解释清楚","使明晰"],["clarify-explain"],"The diagram clarifies how water moves through the filter.","示意图解释清楚了水如何经过滤器。",null,"https://www.merriam-webster.com/dictionary/clarify"],
   ["liquid","使澄清；使清亮","v.",["使澄清","使清亮"],["clarify-liquid"],"The cook clarified the butter before adding it to the sauce.","厨师先将黄油澄清，再把它加入酱汁。",null,"https://www.merriam-webster.com/dictionary/clarify"]
  ],[]);
  entry("admit",[
   ["acknowledge","承认；认可","v.",["承认","认可"],["admit-acknowledge"],"The builder admitted that the original measurements were wrong.","建筑工承认原来的测量数据有误。",null,"https://www.merriam-webster.com/dictionary/admit"],
   ["allow-entry","准许进入；接纳；录取","v.",["准许进入","接纳","录取","接受","允许进入"],["admit-allow-entry"],"The museum admits visitors in groups of twenty.","博物馆每批允许二十名游客入内。",null,"https://www.merriam-webster.com/dictionary/admit"],
   ["hospital","收治；收入院","v.",["收治","收入院"],["admit-hospital"],"The hospital admitted three hikers suffering from exhaustion.","医院收治了三名精疲力竭的徒步者。",null,"https://www.merriam-webster.com/dictionary/admit"],
   ["allow-possibility","容许；有…的可能","v.",["容许","有…的可能"],["admit-allow-possibility"],"The situation admits of no easy solution.","这种情况没有简单的解决办法。","admit of","https://www.merriam-webster.com/dictionary/admit"]
  ],[{"terms":["开向"],"decision":"context-required","reason":"门窗 admit light 等可指让光进入，不等于门朝向某方；保留准入核心，不泛作 face 的替代。","source":"https://www.merriam-webster.com/dictionary/admit"}]);
  entry("prepare",[
   ["make-ready","准备；使做好准备","v.",["准备","使做好准备","筹备","使在思想上有准备","预备"],["prepare-make-ready"],"The volunteers prepared the hall before the first guests arrived.","首批客人到来前，志愿者布置好了礼堂。",null,"https://www.merriam-webster.com/dictionary/prepare"],
   ["make-food","准备（饭菜）；配制","v.",["准备（饭菜）","配制","制造","调制"],["prepare-make-food"],"He prepared a simple meal from the vegetables in the garden.","他用园里的蔬菜做了一顿简单的饭。",null,"https://www.merriam-webster.com/dictionary/prepare"],
   ["write","拟订；编写；制作","v.",["拟订","编写","制作"],["prepare-write"],"The engineer prepared a report on the damaged roof.","工程师编写了一份关于受损屋顶的报告。",null,"https://www.merriam-webster.com/dictionary/prepare"]
  ],[]);
  entry("seize",[
   ["grab","抓住；突然夺取","v.",["抓住","突然夺取","突然抓住"],["seize-grab"],"She seized the rope before it slid into the river.","她在绳子滑进河里前一把抓住了它。",null,"https://www.merriam-webster.com/dictionary/seize"],
   ["confiscate","没收；查封；夺取","v.",["没收","查封","夺取","逮捕","俘获","扣押"],["seize-confiscate"],"Police seized the stolen tools from a storage shed.","警方从储物棚里查获了被盗工具。",null,"https://www.merriam-webster.com/dictionary/seize"],
   ["opportunity","把握；利用（机会）","v.",["把握","利用（机会）","掌握","利用"],["seize-opportunity"],"The students seized the chance to question the visiting scientist.","学生们抓住机会向来访科学家提问。",null,"https://www.merriam-webster.com/dictionary/seize"],
   ["stop-moving","卡住；（机械）咬死","v.",["卡住","（机械）咬死"],["seize-stop-moving"],"The pump seized after sand entered the bearings.","沙子进入轴承后，泵卡住了。",null,"https://www.merriam-webster.com/dictionary/seize"]
  ],[]);
  entry("pursue",[
   ["chase","追赶；追捕","v.",["追赶","追捕","追踪","追随"],["pursue-chase"],"The ranger pursued the escaped animal along the fence.","护林员沿着围栏追赶逃跑的动物。",null,"https://www.merriam-webster.com/dictionary/pursue"],
   ["seek","追求；寻求","v.",["追求","寻求"],["pursue-seek"],"She pursued a career in marine research after leaving school.","离校后，她投身海洋研究事业。",null,"https://www.merriam-webster.com/dictionary/pursue"],
   ["continue","从事；继续进行；追究","v.",["从事","继续进行","追究","实行","继续"],["pursue-continue"],"The council decided to pursue the complaint after receiving new evidence.","收到新证据后，市政委员会决定继续调查投诉。",null,"https://www.merriam-webster.com/dictionary/pursue"]
  ],[]);
  entry("blame",[
   ["hold-responsible","责备；把…归咎于","v.",["责备","把…归咎于","归咎于"],["blame-hold-responsible"],"The owner blamed the leak on poor maintenance.","业主把漏水归咎于维护不善。","blame sth on sb/sth","https://www.merriam-webster.com/dictionary/blame"],
   ["responsibility","责任；过错；责备","n.",["责任","过错","责备","过失"],["blame-responsibility"],"The manager accepted the blame for the missing equipment.","经理承担了设备丢失的责任。",null,"https://www.merriam-webster.com/dictionary/blame"]
  ],[]);
  entry("proof",[
   ["evidence","证据；证明","n.",["证据","证明","试验","检验","考验","证明用的"],["proof-evidence"],"The receipt provided proof that the fee had already been paid.","收据证明这笔费用已经付清。",null,"https://www.merriam-webster.com/dictionary/proof"],
   ["mathematics","证明；论证过程","n.",["证明","论证过程"],["proof-mathematics"],"The teacher asked for a proof rather than a guessed answer.","老师要求给出证明，而非猜出的答案。",null,"https://www.merriam-webster.com/dictionary/proof"],
   ["printing","校样；样张","n.",["校样","样张"],["proof-printing"],"The editor checked the final proof before printing began.","印刷开始前，编辑检查了最后校样。",null,"https://www.merriam-webster.com/dictionary/proof"],
   ["resistant","防…的；能抵御…的","adj.",["防…的","能抵御…的","不能透入的","防...的","耐...的"],["proof-resistant"],"The storage case is proof against rain but not deep water.","这个储物箱能防雨，却不能防深水浸泡。","proof against","https://www.merriam-webster.com/dictionary/proof"],
   ["check-print","校对；审校","v.",["校对","审校","审稿"],["proof-check-print"],"She proofed the labels carefully before sending them to the printer.","她把标签送交印刷前仔细校对了一遍。",null,"https://www.merriam-webster.com/dictionary/proof"]
  ],[{"terms":["使不被穿透"],"decision":"restricted-verified","reason":"动词可指赋予抗性，需具体说明防什么；本批以形容词 proof against 讲防护，不把防护等同于绝对不可穿透。","source":"https://www.merriam-webster.com/dictionary/proof"}]);
  entry("occasion",[
   ["time","时刻；时候；场合","n.",["时刻","时候","场合"],["occasion-time"],"On one occasion, the ferry waited while a passenger fetched her medicine.","有一次，渡轮等一名乘客取来药品后才开船。",null,"https://www.merriam-webster.com/dictionary/occasion"],
   ["special-event","特别的事件；盛会","n.",["特别的事件","盛会"],["occasion-special-event"],"The reopening of the theatre was an occasion for the whole town.","剧院重新开放是全镇的一件盛事。",null,"https://www.merriam-webster.com/dictionary/occasion"],
   ["cause","引起；导致","v.",["引起","导致","诱因","惹起"],["occasion-cause"],"The inspection occasioned a lengthy debate about building safety.","这次检查引发了关于建筑安全的长时间辩论。",null,"https://www.merriam-webster.com/dictionary/occasion"],
   ["opportunity","机会；需要；缘由","n.",["机会","需要","缘由","时机","理由"],["occasion-opportunity"],"There was no occasion to use the emergency supplies.","当时没有使用应急物资的需要。",null,"https://www.merriam-webster.com/dictionary/occasion"]
  ],[]);
  entry("compete",[
   ["rival","竞争；竞赛；争夺","v.",["竞争","竞赛","争夺","对抗"],["compete-rival"],"The two teams compete for the same place in the final.","两个队争夺同一个决赛名额。",null,"https://www.merriam-webster.com/dictionary/compete"]
  ],[]);
  entry("comfort",[
   ["console","安慰；宽慰","v.",["安慰","宽慰"],["comfort-console"],"She comforted the frightened child until his father arrived.","她安慰受惊的孩子，直到他的父亲赶来。",null,"https://www.merriam-webster.com/dictionary/comfort"],
   ["well-being","舒适；安逸","n.",["舒适","安逸"],["comfort-well-being"],"The thick curtains added warmth and comfort to the small room.","厚窗帘为小房间增添了温暖和舒适感。",null,"https://www.merriam-webster.com/dictionary/comfort"],
   ["solace","安慰；慰藉；令人宽慰的人或事","n.",["安慰","慰藉","令人宽慰的人或事","安慰者"],["comfort-solace"],"The daily visits were a great comfort during her recovery.","康复期间，每天的探望给了她很大慰藉。",null,"https://www.merriam-webster.com/dictionary/comfort"]
  ],[]);
  entry("occur",[
   ["happen","发生","v.",["发生"],["occur-happen"],"Most of the accidents occurred near the unlit junction.","大多数事故发生在没有照明的路口附近。",null,"https://www.merriam-webster.com/dictionary/occur"],
   ["exist","存在；出现；分布","v.",["存在","出现","分布"],["occur-exist"],"The plant occurs naturally in damp woodland.","这种植物天然分布在潮湿林地中。",null,"https://www.merriam-webster.com/dictionary/occur"],
   ["come-to-mind","被想到；浮现于脑海","v.",["被想到","浮现于脑海"],["occur-come-to-mind"],"It occurred to her that the key might be in her old coat.","她想到钥匙可能在旧外套里。","occur to sb","https://www.merriam-webster.com/dictionary/occur"]
  ],[]);
  entry("damage",[
   ["harm-noun","损害；损坏；损失","n.",["损害","损坏","损失","伤害"],["damage-harm-noun"],"The storm caused serious damage to the harbour wall.","风暴对港口围墙造成了严重损坏。",null,"https://www.merriam-webster.com/dictionary/damage"],
   ["harm-verb","损坏；损害","v.",["损坏","损害"],["damage-harm-verb"],"Salt water damaged the unprotected metal fittings.","盐水腐蚀了没有保护的金属配件。",null,"https://www.merriam-webster.com/dictionary/damage"],
   ["compensation","损害赔偿金","n. pl.",["损害赔偿金"],["damage-compensation"],"The court ordered the company to pay damages to the injured worker.","法院命令公司向受伤工人支付损害赔偿金。",null,"https://www.merriam-webster.com/dictionary/damage"]
  ],[]);
  entry("care",[
   ["attention","照料；关心；护理","n.",["照料","关心","护理"],["care-attention"],"The injured bird recovered with careful feeding and patient care.","受伤的鸟在细心喂养和耐心照料下康复了。",null,"https://www.merriam-webster.com/dictionary/care"],
   ["caution","小心；仔细","n.",["小心","仔细"],["care-caution"],"Handle the thin glass with care when moving the display.","移动展品时，小心搬动薄玻璃。","with care","https://www.merriam-webster.com/dictionary/care"],
   ["worry","忧虑；烦心事","n.",["忧虑","烦心事"],["care-worry"],"For one afternoon, she put aside the cares of running the shop.","那一下午，她暂时放下了经营店铺的烦心事。",null,"https://www.merriam-webster.com/dictionary/care"],
   ["be-concerned","关心；在意；介意","v.",["关心","在意","介意","喜欢"],["care-be-concerned"],"The volunteers care deeply about keeping the river clean.","志愿者们十分关心保持河流清洁。",null,"https://www.merriam-webster.com/dictionary/care"],
   ["look-after","照顾；护理","v.",["照顾","护理"],["care-look-after"],"He cares for his elderly neighbour while her daughter is away.","邻居女儿外出时，他照顾这位年长的邻居。","care for","https://www.merriam-webster.com/dictionary/care"]
  ],[]);
  entry("cure",[
   ["heal","治愈；治疗好","v.",["治愈","治疗好","治疗","受治疗"],["cure-heal"],"The treatment cured the infection before it caused lasting damage.","治疗在感染造成长期损害前将其治愈了。",null,"https://www.merriam-webster.com/dictionary/cure"],
   ["remedy","疗法；治疗办法；解决办法","n.",["疗法","治疗办法","解决办法","治疗法"],["cure-remedy"],"There is no simple cure for the town's traffic problems.","小镇的交通问题没有简单的解决办法。",null,"https://www.merriam-webster.com/dictionary/cure"],
   ["preserve","腌制；加工保存","v.",["腌制","加工保存","加工处理","被加工处理"],["cure-preserve"],"The family cures fish with salt before drying it.","这家人先用盐腌鱼，再把鱼晾干。",null,"https://www.merriam-webster.com/dictionary/cure"],
   ["harden","使固化；使硫化；养护","v.",["使固化","使硫化","养护","被硫化"],["cure-harden"],"The concrete must cure fully before the supports are removed.","拆除支撑前，混凝土必须充分养护硬化。",null,"https://www.merriam-webster.com/dictionary/cure"],
   ["correct","消除；改正","v.",["消除","改正"],["cure-correct"],"Replacing the worn cable cured the problem with the lamp.","更换磨损的电线消除了灯的故障。",null,"https://www.merriam-webster.com/dictionary/cure"]
  ],[]);
  entry("relief",[
   ["alleviation","缓解；减轻；宽慰","n.",["缓解","减轻","宽慰","解除","安慰","缓减"],["relief-alleviation"],"The cool room brought relief after the long walk in the heat.","在炎热中长途步行后，凉爽房间让人舒缓下来。",null,"https://www.merriam-webster.com/dictionary/relief"],
   ["aid","救济；救援","n.",["救济","救援"],["relief-aid"],"The charity organised flood relief for the isolated villages.","慈善机构为被隔绝的村庄组织了水灾救济。",null,"https://www.merriam-webster.com/dictionary/relief"],
   ["replacement","换班；接替者","n.",["换班","接替者"],["relief-replacement"],"The night guard waited until his relief arrived.","夜间守卫一直等到接班者到来。",null,"https://www.merriam-webster.com/dictionary/relief"],
   ["sculpture","浮雕","n.",["浮雕","浮雕(绘画中)"],["relief-sculpture"],"A stone relief above the doorway shows boats entering the harbour.","门上方的石浮雕描绘了船只驶入港口。",null,"https://www.merriam-webster.com/dictionary/relief"],
   ["terrain","地势起伏；地形","n.",["地势起伏","地形","(地势的)起伏"],["relief-terrain"],"The map uses shading to show the relief of the valley.","地图用阴影表示山谷的地形起伏。",null,"https://www.merriam-webster.com/dictionary/relief"]
  ],[{"terms":["调剂"],"decision":"context-required","reason":"此旧译是缓解单调或带来变化的语境，不是药剂调配，也不与换班者混为一义。","source":"https://www.merriam-webster.com/dictionary/relief"}]);
  entry("relax",[
   ["rest","休息；放松精神","v.",["休息","放松精神","变从容","休养","使休息"],["relax-rest"],"She relaxed beside the window after finishing the long report.","写完长篇报告后，她在窗边放松休息。",null,"https://www.merriam-webster.com/dictionary/relax"],
   ["loosen","放松；使松弛","v.",["放松","使松弛","松懈","松弛","使松懈"],["relax-loosen"],"Relax your shoulders before lifting the light weights.","举起轻哑铃前，先放松肩膀。",null,"https://www.merriam-webster.com/dictionary/relax"],
   ["less-strict","放宽；缓和","v.",["放宽","缓和"],["relax-less-strict"],"The town relaxed parking restrictions during the festival.","节庆期间，镇上放宽了停车限制。",null,"https://www.merriam-webster.com/dictionary/relax"]
  ],[]);
  entry("satisfy",[
   ["please","使满意；满足（需求）","v.",["使满意","满足（需求）","满足"],["satisfy-please"],"The larger meal satisfied the hungry walkers.","较丰盛的饭菜让饥饿的徒步者得到了满足。",null,"https://www.merriam-webster.com/dictionary/satisfy"],
   ["meet","符合；达到（要求、条件）","v.",["符合","达到（要求、条件）","达到要求"],["satisfy-meet"],"The design satisfies all the new safety requirements.","设计符合所有新安全要求。",null,"https://www.merriam-webster.com/dictionary/satisfy"],
   ["convince","使确信；消除疑虑","v.",["使确信","消除疑虑"],["satisfy-convince"],"The inspection satisfied us that the roof was safe.","检查使我们确信屋顶是安全的。","satisfy sb that","https://www.merriam-webster.com/dictionary/satisfy"],
   ["pay","清偿；履行（义务）","v.",["清偿","履行（义务）"],["satisfy-pay"],"Selling the equipment allowed the firm to satisfy its debts.","出售设备让公司得以清偿债务。",null,"https://www.merriam-webster.com/dictionary/satisfy"]
  ],[]);
  entry("admire",[
   ["respect","钦佩；赞赏；欣赏","v.",["钦佩","赞赏","欣赏","赞美","爱慕","称赞"],["admire-respect"],"I admire the patience with which she teaches the youngest children.","我钦佩她教最小孩子时展现的耐心。",null,"https://www.merriam-webster.com/dictionary/admire"]
  ],[{"terms":["惊奇"],"decision":"restricted-verified","reason":"词典标此义 archaic；日常 admire 主要为钦佩或欣赏，不泛指任何 surprise。","source":"https://www.merriam-webster.com/dictionary/admire"}]);
  entry("resemble",[
   ["be-like","像；与…相似","v.",["像","与…相似","相似","类似"],["resemble-be-like"],"The new library resembles the old station in shape and colour.","新图书馆在外形和颜色上与旧车站相似。",null,"https://www.merriam-webster.com/dictionary/resemble"]
  ],[]);
  entry("discourage",[
   ["dishearten","使泄气；使失去信心","v.",["使泄气","使失去信心"],["discourage-dishearten"],"The early failures discouraged him, but he continued experimenting.","早期失败让他泄气，但他继续实验。",null,"https://www.merriam-webster.com/dictionary/discourage"],
   ["deter","劝阻；阻止；使不愿","v.",["劝阻","阻止","使不愿","使不愿做"],["discourage-deter"],"The high fee discouraged many residents from joining the course.","高费用使许多居民不愿报名参加课程。",null,"https://www.merriam-webster.com/dictionary/discourage"]
  ],[]);
  entry("tolerate",[
   ["put-up-with","容忍；容许","v.",["容忍","容许","宽容"],["tolerate-put-up-with","endurance-bear","tolerance-endure"],"The neighbours tolerate occasional noise but object to nightly parties.","邻居们容忍偶尔的噪音，却反对每晚聚会。",null,"https://www.merriam-webster.com/dictionary/tolerate"],
   ["physiological","耐受；能承受（药物、环境等）","v.",["耐受","能承受","有耐力"],["tolerate-physiological"],"The plant tolerates dry conditions better than most garden flowers.","这种植物比大多数园中花卉更耐旱。",null,"https://www.merriam-webster.com/dictionary/tolerate"]
  ],[]);
  entry("ignore",[
   ["not-notice","忽视；不理睬；置之不理","v.",["忽视","不理睬","置之不理","忽略"],["ignore-not-notice"],"The driver ignored the warning sign and entered the flooded lane.","司机无视警示牌，驶入被淹的小巷。",null,"https://www.merriam-webster.com/dictionary/ignore"]
  ],[{"terms":["驳回"],"decision":"scope-excluded","reason":"旧法律程序用法不等于普通 reject；本批常用范围为有意不理睬或忽视。","source":"https://www.merriam-webster.com/dictionary/ignore"}]);
 }
 if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch12=register;
})(typeof window==='object'?window:globalThis);
