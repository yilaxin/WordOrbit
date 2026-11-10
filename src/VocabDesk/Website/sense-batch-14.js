/* Batch 14: reviewed public learning scope, original bilingual examples.
 * Source entries were read during review. No learner state is included. */
(function(scope){
 'use strict';
 function register(add){
  function entry(word,rows,refs){
   const e=add(word,rows,refs);e.reviewDate='2026-11-10';
   e.senses.forEach((s,i)=>s.source=rows[i][8]);
   e.sources=[...new Set([...rows.map(r=>r[8]),...refs.map(r=>r.source)])];
   return e;
  }
  entry("plate",[
   ["dish","盘子；碟子","n.",["盘子","碟子","碟","盆中物"],["plate-dish"],"Leave the clean plates beside the sink.","把干净的盘子放在水槽旁。",null,"https://www.merriam-webster.com/dictionary/plate"],
   ["sheet","薄板；金属板","n.",["薄板","金属板"],["plate-sheet"],"A steel plate covered the damaged pipe.","一块钢板盖住了受损的管道。",null,"https://www.merriam-webster.com/dictionary/plate"],
   ["tectonics","地壳板块","n.",["地壳板块"],["plate-tectonics"],"The island lies where two plates meet.","这座岛位于两个板块交汇处。",null,"https://www.merriam-webster.com/dictionary/plate"],
   ["coat","镀金属","v.",["镀金属","镀金","电镀"],["plate-coat"],"The manufacturer plates the handles with nickel.","制造商给把手镀镍。",null,"https://www.merriam-webster.com/dictionary/plate"],
   ["printing","印版；图版","n.",["印版","图版"],["plate-printing"],"The printer replaced the worn plate before the next run.","印刷工在下一轮印刷前换掉了磨损的印版。",null,"https://www.merriam-webster.com/dictionary/plate"],
   ["licence","牌照；车牌","n.",["牌照","车牌","金属牌(照)"],["plate-licence"],"The officer wrote down the car's plate number.","警官记下了汽车的车牌号码。",null,"https://www.merriam-webster.com/dictionary/plate"]
  ],[{"terms":["金银餐具","用金属板固定","给...装钢板","为...制印版"],"decision":"scope-excluded","reason":"金银器皿、装板固定和制作印版动作未单列；本批印版为物件名词，不自动认证所有相关动词。","source":"https://www.merriam-webster.com/dictionary/plate"}]);
  entry("stack",[
   ["pile","整齐的一叠；堆","n.",["整齐的一叠","堆","堆叠"],["stack-pile","heap-stack"],"A stack of folded towels stood by the door.","门边放着一叠叠好的毛巾。",null,"https://www.merriam-webster.com/dictionary/stack"],
   ["chimney","烟囱","n.",["烟囱"],["stack-chimney"],"Smoke rose from the factory stack.","烟从工厂的烟囱里升起。",null,"https://www.merriam-webster.com/dictionary/stack"],
   ["pile-verb","把……堆叠起来","v.",["把……堆叠起来","堆积","堆满","堆起"],["stack-pile-verb","pile-action"],"Stack the chairs against the wall.","把椅子靠墙摞起来。",null,"https://www.merriam-webster.com/dictionary/stack"],
   ["quantity","大量；许多","n.",["大量","许多"],["stack-quantity"],"We have stacks of spare paper in the cupboard.","柜子里有很多备用纸。",null,"https://www.merriam-webster.com/dictionary/stack"]
  ],[{"terms":["书库","枪架","存贮栈","暗中对...做手脚","堆栈"],"decision":"scope-excluded","reason":"计算机栈、书库和枪架属特定语境；暗中安排结果的引申不与普通堆叠混合。","source":"https://www.merriam-webster.com/dictionary/stack"}]);
  entry("heap",[
   ["pile","堆；一堆物品","n.",["堆","一堆物品"],["heap-pile","heap-stack"],"A heap of wet leaves blocked the drain.","一堆湿树叶堵住了排水口。",null,"https://www.merriam-webster.com/dictionary/heap"],
   ["quantity","大量；许多","n.",["大量","许多"],["heap-quantity"],"We still have heaps of work to do.","我们还有大量工作要做。",null,"https://www.merriam-webster.com/dictionary/heap"],
   ["pile-verb","堆积；堆放","v.",["堆积","堆放","累积","装满"],["heap-pile-verb","pile-action"],"They heaped the blankets on the bed.","他们把毯子堆在床上。",null,"https://www.merriam-webster.com/dictionary/heap"]
  ],[]);
  entry("pick",[
   ["choose","挑选；选择","v.",["挑选","选择","精选"],["pick-choose"],"Pick a seat near the window.","选一个靠窗的座位。",null,"https://www.merriam-webster.com/dictionary/pick"],
   ["gather","采摘","v.",["采摘","摘"],["pick-gather"],"The children picked berries along the path.","孩子们沿着小路采摘浆果。",null,"https://www.merriam-webster.com/dictionary/pick"],
   ["remove","剔除；挑去","v.",["剔除","挑去"],["pick-remove"],"She picked the stones out of the rice.","她把米里的小石子挑了出来。","pick out","https://www.merriam-webster.com/dictionary/pick"],
   ["lock","撬开锁","v.",["撬开锁"],["pick-lock"],"The thief picked the lock without breaking the door.","小偷没破坏门就撬开了锁。",null,"https://www.merriam-webster.com/dictionary/pick"],
   ["tool","镐","n.",["镐","鹤嘴锄"],["pick-tool"],"He broke the frozen ground with a pick.","他用镐刨开了冻土。",null,"https://www.merriam-webster.com/dictionary/pick"],
   ["selection","最佳选择；挑选权","n.",["最佳选择","挑选权","精华"],["pick-selection"],"This small cabin is my pick of the available rooms.","在可以入住的房间中，这间小木屋是我的首选。",null,"https://www.merriam-webster.com/dictionary/pick"]
  ],[{"terms":["掘","牙签","凿","挖","拾取"],"decision":"scope-excluded","reason":"牙签应区分 toothpick；挖掘、凿洞和拾起需具体工具或 pick up 搭配，未从选择义泛化。","source":"https://www.merriam-webster.com/dictionary/pick"}]);
  entry("rear",[
   ["back","后部；后面","n.",["后部","后面","背后","后方"],["rear-back"],"The emergency exit is at the rear of the building.","紧急出口在建筑物后部。",null,"https://www.merriam-webster.com/dictionary/rear"],
   ["back-adj","后面的；后部的","adj.",["后面的","后部的","背面的","后方的"],["rear-back-adj"],"The rear door was locked.","后门锁着。",null,"https://www.merriam-webster.com/dictionary/rear"],
   ["raise","抚养；饲养","v.",["抚养","饲养","养育"],["rear-raise"],"They rear sheep on the hillside.","他们在山坡上养羊。",null,"https://www.merriam-webster.com/dictionary/rear"],
   ["rise","后腿直立；高耸","v.",["后腿直立","高耸","暴跳"],["rear-rise"],"The frightened horse reared in front of the gate.","受惊的马在大门前扬起前蹄。",null,"https://www.merriam-webster.com/dictionary/rear"]
  ],[{"terms":["培养","举起","树立","栽种"],"decision":"scope-excluded","reason":"树立、栽种及一般培养未单列，本批明确区分后部、饲养与动物后腿直立。","source":"https://www.merriam-webster.com/dictionary/rear"}]);
  entry("ruin",[
   ["destroy","毁坏；使毁灭","v.",["毁坏","使毁灭"],["ruin-destroy","destruction-damage"],"The flood ruined the wooden floor.","洪水毁坏了木地板。",null,"https://www.merriam-webster.com/dictionary/ruin"],
   ["spoil","破坏；毁掉美好体验","v.",["破坏","毁掉美好体验"],["ruin-spoil","experience-spoil"],"The argument ruined our evening.","争吵毁了我们那个晚上的兴致。",null,"https://www.merriam-webster.com/dictionary/ruin"],
   ["destruction","毁灭；破产","n.",["毁灭","破产","衰败"],["ruin-destruction"],"Years of poor management brought the firm to ruin.","多年的经营不善使公司破产了。",null,"https://www.merriam-webster.com/dictionary/ruin"],
   ["remains","废墟；遗迹","n.",["废墟","遗迹"],["ruin-remains"],"We explored the ruins of an old monastery.","我们探访了一座古修道院的遗迹。",null,"https://www.merriam-webster.com/dictionary/ruin"]
  ],[{"terms":["推翻","堕落","使破产"],"decision":"scope-excluded","reason":"破产、道德堕落和推翻依对象而异；不把所有政治推翻都解释为毁坏物件。","source":"https://www.merriam-webster.com/dictionary/ruin"}]);
  entry("pattern",[
   ["design","图案；花样","n.",["图案","花样","格调"],["pattern-design"],"The fabric has a pattern of blue leaves.","这块布上印着蓝色叶子图案。",null,"https://www.merriam-webster.com/dictionary/pattern"],
   ["regularity","模式；规律","n.",["模式","规律"],["pattern-regularity"],"The data reveal a clear pattern of seasonal change.","数据揭示了明显的季节变化规律。",null,"https://www.merriam-webster.com/dictionary/pattern"],
   ["model","样板；纸样","n.",["样板","纸样","模范","典型","式样","样品"],["pattern-model"],"She cut the jacket pieces from a paper pattern.","她照着纸样裁出了夹克的各个部分。",null,"https://www.merriam-webster.com/dictionary/pattern"],
   ["model-verb","使仿照；以……为范本","v.",["使仿照","以……为范本","模仿","仿造"],["pattern-model-verb"],"The new course is patterned on an older programme.","新课程以一项旧计划为范本设计。","pattern on","https://www.merriam-webster.com/dictionary/pattern"]
  ],[{"terms":["以图案装饰","形成图案"],"decision":"scope-excluded","reason":"装饰表面与仿照范本是不同动词用法，本批只训练后者。","source":"https://www.merriam-webster.com/dictionary/pattern"}]);
  entry("ox",[
   ["animal","牛；阉牛","n.",["牛","阉牛","公牛"],["ox-animal"],"An ox pulled the heavy cart across the field.","一头阉牛拉着沉重的车穿过田地。",null,"https://www.merriam-webster.com/dictionary/ox"]
  ],[]);
  entry("rub",[
   ["friction","擦；揉搓","v.",["擦","揉搓","摩擦","搓"],["rub-friction"],"Rub your hands together to warm them.","搓搓手，让它们暖和起来。",null,"https://www.merriam-webster.com/dictionary/rub"],
   ["spread","涂抹；擦入","v.",["涂抹","擦入"],["rub-spread"],"Rub the oil gently into the wood.","把油轻轻擦入木头表面。",null,"https://www.merriam-webster.com/dictionary/rub"],
   ["chafe","磨痛；擦伤","v.",["磨痛","擦伤","擦破"],["rub-chafe"],"The stiff collar rubbed his neck.","硬领子磨痛了他的脖子。",null,"https://www.merriam-webster.com/dictionary/rub"],
   ["difficulty","难处；问题所在","n.",["难处","问题所在","困难","障碍"],["rub-difficulty"],"The rent is cheap, but here is the rub: there is no heating.","房租便宜，但难处在于没有暖气。",null,"https://www.merriam-webster.com/dictionary/rub"],
   ["action","擦拭；揉搓的动作","n.",["擦拭","揉搓的动作"],["rub-action"],"Give the glass a rub with a soft cloth.","用软布擦一擦玻璃。",null,"https://www.merriam-webster.com/dictionary/rub"]
  ],[{"terms":["磨损处","惹怒"],"decision":"scope-excluded","reason":"磨损处名词及惹怒引申未列入擦拭和难处的教学范围。","source":"https://www.merriam-webster.com/dictionary/rub"}]);
  entry("envelope",[
   ["letter","信封","n.",["信封","封套","封袋"],["envelope-letter"],"She slid the receipt into an envelope.","她把收据塞进了信封。",null,"https://www.merriam-webster.com/dictionary/envelope"],
   ["covering","包层；外壳","n.",["包层","外壳","膜","包袋"],["envelope-covering"],"The balloon's envelope was made of lightweight fabric.","气球的外囊由轻质织物制成。",null,"https://www.merriam-webster.com/dictionary/envelope"]
  ],[]);
  entry("chunk",[
   ["piece","大块；厚块","n.",["大块","厚块"],["chunk-piece"],"A chunk of ice broke away from the glacier.","一大块冰从冰川上脱落下来。",null,"https://www.merriam-webster.com/dictionary/chunk"],
   ["portion","相当大的部分","n.",["相当大的部分"],["chunk-portion"],"Rent takes a large chunk of her income.","房租占了她收入的很大一部分。",null,"https://www.merriam-webster.com/dictionary/chunk"]
  ],[{"terms":["矮胖的人(或物)","定样"],"decision":"scope-excluded","reason":"矮胖的人及专业加工旧译不在大块与相当大部分的范围。","source":"https://www.merriam-webster.com/dictionary/chunk"}]);
  entry("squash",[
   ["crush","压扁；挤压","v.",["压扁","挤压","被压扁"],["squash-crush"],"Do not squash the bread under the heavier bags.","不要把面包压在更重的袋子下面。",null,"https://www.merriam-webster.com/dictionary/squash"],
   ["suppress","压制；打消","v.",["压制","打消","镇压"],["squash-suppress"],"The director squashed the rumour at the meeting.","主任在会上打消了这个传言。",null,"https://www.merriam-webster.com/dictionary/squash"],
   ["sport","壁球","n.",["壁球"],["squash-sport"],"They play squash at the sports centre.","他们在体育中心打壁球。",null,"https://www.merriam-webster.com/dictionary/squash"],
   ["vegetable","南瓜类蔬菜","n.",["南瓜类蔬菜","南瓜属植物"],["squash-vegetable"],"We roasted squash with herbs for dinner.","晚餐我们用香草烤了南瓜。",null,"https://www.merriam-webster.com/dictionary/squash"]
  ],[{"terms":["压碎的东西","拥挤的人群","发溅泼声","挤入"],"decision":"scope-excluded","reason":"人群拥挤和发声等引申未单列；压扁动作与壁球、蔬菜分别训练。","source":"https://www.merriam-webster.com/dictionary/squash"}]);
  entry("spoil",[
   ["ruin","破坏；糟蹋","v.",["破坏","糟蹋","损坏"],["spoil-ruin","destruction-damage","experience-spoil","trash-damage"],"One careless remark spoiled the surprise.","一句随意的话破坏了这份惊喜。",null,"https://www.merriam-webster.com/dictionary/spoil"],
   ["indulge","宠坏；溺爱","v.",["宠坏","溺爱"],["spoil-indulge"],"Constant gifts can spoil a child.","不停地送礼物可能会宠坏孩子。",null,"https://www.merriam-webster.com/dictionary/spoil"],
   ["decay","腐坏；变质","v.",["腐坏","变质"],["spoil-decay"],"The milk spoiled in the warm kitchen.","牛奶在温暖的厨房里变质了。",null,"https://www.merriam-webster.com/dictionary/spoil"],
   ["loot","战利品；掠夺物","n.",["战利品","掠夺物"],["spoil-loot"],"The victors divided the spoils after the battle.","战斗结束后，胜者分了战利品。",null,"https://www.merriam-webster.com/dictionary/spoil"]
  ],[{"terms":["赃物","奖品","次品","掠夺"],"decision":"scope-excluded","reason":"赃物与战利品不能任意互换；奖品、次品和掠夺动词未并入本批。","source":"https://www.merriam-webster.com/dictionary/spoil"}]);
  entry("wit",[
   ["humour","机智；诙谐","n.",["机智","诙谐","妙语"],["wit-humour"],"Her wit kept the guests laughing.","她的妙语让客人们笑个不停。",null,"https://www.merriam-webster.com/dictionary/wit"],
   ["clever-person","机智诙谐的人","n.",["机智诙谐的人","机智的人"],["wit-clever-person"],"He was known as the wit of the group.","他被认为是这群人中的风趣人物。",null,"https://www.merriam-webster.com/dictionary/wit"],
   ["intelligence","才智；判断力","n.",["才智","判断力","智力","头脑","理智"],["wit-intelligence"],"She had the wits to keep a copy of the letter.","她很机智，留存了信的副本。",null,"https://www.merriam-webster.com/dictionary/wit"]
  ],[]);
  entry("roster",[
   ["list","人员名单；值班表","n.",["人员名单","值班表","花名册"],["roster-list"],"Check the roster to see who is working tonight.","查一下值班表，看看今晚谁值班。",null,"https://www.merriam-webster.com/dictionary/roster"]
  ],[]);
  entry("recorder",[
   ["device","录音机；记录仪","n.",["录音机","记录仪","记录器"],["recorder-device"],"The recorder captured every word of the interview.","录音机录下了采访的每一句话。",null,"https://www.merriam-webster.com/dictionary/recorder"],
   ["instrument","竖笛","n.",["竖笛"],["recorder-instrument"],"She learned to play the recorder at school.","她在学校学会了吹竖笛。",null,"https://www.merriam-webster.com/dictionary/recorder"],
   ["person","记录员","n.",["记录员"],["recorder-person"],"The recorder noted each vote in the official minutes.","记录员把每一票记入正式会议记录。",null,"https://www.merriam-webster.com/dictionary/recorder"]
  ],[{"terms":["宏录制器"],"decision":"scope-excluded","reason":"宏录制器属于具体软件工具，不能把所有 recorder 都理解为宏功能。","source":"https://www.merriam-webster.com/dictionary/recorder"}]);
  entry("spur",[
   ["riding","马刺","n.",["马刺"],["spur-riding"],"The rider adjusted a spur on his boot.","骑手调整了靴子上的一枚马刺。",null,"https://www.merriam-webster.com/dictionary/spur"],
   ["incentive","刺激；推动因素","n.",["刺激","推动因素","刺激物"],["spur-incentive"],"The grant provided a spur to further research.","这笔资助推动了进一步研究。",null,"https://www.merriam-webster.com/dictionary/spur"],
   ["encourage","激励；促进","v.",["激励","促进","鼓舞"],["spur-encourage"],"The competition spurred her to practise harder.","这场比赛激励她更加刻苦地练习。",null,"https://www.merriam-webster.com/dictionary/spur"],
   ["branch","支脉；支线","n.",["支脉","支线"],["spur-branch"],"A narrow spur of rock projected into the valley.","一道狭窄的岩石支脉伸入山谷。",null,"https://www.merriam-webster.com/dictionary/spur"]
  ],[{"terms":["用马刺策(马)前进","用马刺驱马","疾驰"],"decision":"scope-excluded","reason":"策马的动词未从马刺名词自动推导；疾驰并不必然使用马刺。","source":"https://www.merriam-webster.com/dictionary/spur"}]);
  entry("advanced",[
   ["modern","先进的","adj.",["先进的"],["advanced-modern"],"The clinic uses advanced imaging equipment.","诊所使用先进的成像设备。",null,"https://www.merriam-webster.com/dictionary/advanced"],
   ["high-level","高级的；高阶的","adj.",["高级的","高阶的","高等的"],["advanced-high-level"],"This textbook is intended for advanced learners.","这本教材供高阶学习者使用。",null,"https://www.merriam-webster.com/dictionary/advanced"],
   ["late","晚期的；后期的","adj.",["晚期的","后期的","处于后期阶段的"],["advanced-late"],"The disease was already at an advanced stage.","疾病当时已进入晚期。",null,"https://www.merriam-webster.com/dictionary/advanced"]
  ],[{"terms":["年事已高的"],"decision":"scope-excluded","reason":"年事已高需 advanced in years 等年龄语境，不与疾病晚期直接互换。","source":"https://www.merriam-webster.com/dictionary/advanced"}]);
  entry("founder",[
   ["establisher","创立者；奠基人","n.",["创立者","奠基人","建立者"],["founder-establisher"],"The founder of the school also taught its first pupils.","这所学校的创办者也教过最早一批学生。",null,"https://www.merriam-webster.com/dictionary/founder"],
   ["fail","失败；垮掉","v.",["失败","垮掉","倒塌"],["founder-fail","decline-failure"],"The negotiations foundered over the payment terms.","谈判因付款条件问题而失败。",null,"https://www.merriam-webster.com/dictionary/founder"],
   ["sink","沉没","v.",["沉没"],["founder-sink"],"The ship foundered during the storm.","船在暴风雨中沉没了。",null,"https://www.merriam-webster.com/dictionary/founder"]
  ],[{"terms":["使沉没","使摔倒","弄跛","浸水","破坏","摔到","变跛"],"decision":"scope-excluded","reason":"本批沉没是不及物动词；使沉没、弄跛和马蹄疾病等旧义不混入创办者或谈判失败。","source":"https://www.merriam-webster.com/dictionary/founder"}]);
  entry("counter",[
   ["surface","柜台；操作台","n.",["柜台","操作台"],["counter-surface"],"Put the parcel on the counter.","把包裹放到柜台上。",null,"https://www.merriam-webster.com/dictionary/counter"],
   ["device","计数器","n.",["计数器"],["counter-device"],"The counter records how many people enter.","计数器记录进入的人数。",null,"https://www.merriam-webster.com/dictionary/counter"],
   ["piece","筹码；棋子","n.",["筹码","棋子"],["counter-piece"],"Move your counter three spaces forward.","把你的棋子向前移三格。",null,"https://www.merriam-webster.com/dictionary/counter"],
   ["oppose","反驳；抵制","v.",["反驳","抵制"],["counter-oppose","discontent-opposition"],"She countered the claim with new evidence.","她用新证据反驳了那项主张。",null,"https://www.merriam-webster.com/dictionary/counter"],
   ["contrary","相反地；逆向地","adv.",["相反地","逆向地","反方向地"],["counter-contrary"],"The proposal runs counter to our original aim.","这项提议与我们原本的目标背道而驰。","run counter to","https://www.merriam-webster.com/dictionary/counter"]
  ],[{"terms":["计算器","计算者","反方向的","相反的","计数字"],"decision":"scope-excluded","reason":"计算器不同于计数器；计算者和形容词相反的未从柜台或副词自动推导。","source":"https://www.merriam-webster.com/dictionary/counter"}]);
  entry("king",[
   ["ruler","国王","n.",["国王","君主"],["king-ruler"],"The king addressed the crowd from the balcony.","国王在阳台上向人群讲话。",null,"https://www.merriam-webster.com/dictionary/king"],
   ["leader","最出色者；大王","n.",["最出色者","大王"],["king-leader"],"He was once the king of local radio.","他曾是当地广播界的领军人物。",null,"https://www.merriam-webster.com/dictionary/king"],
   ["chess","王（棋子）","n.",["王（棋子）"],["king-chess"],"Move your king out of check.","移动你的王，解除被将军的局面。",null,"https://www.merriam-webster.com/dictionary/king"]
  ],[{"terms":["使...成为君主","君临","统治"],"decision":"scope-excluded","reason":"使成为国王及统治的动词未从国王名词自动建立。","source":"https://www.merriam-webster.com/dictionary/king"}]);
  entry("princess",[
   ["royal","公主；王妃","n.",["公主","王妃"],["princess-royal"],"The princess opened the new children's hospital.","公主为新的儿童医院揭幕。",null,"https://www.merriam-webster.com/dictionary/princess"]
  ],[{"terms":["女巨头"],"decision":"scope-excluded","reason":"女巨头为比喻旧译，本批只收录王室身份，避免把任意商界女性如此命名。","source":"https://www.merriam-webster.com/dictionary/princess"}]);
  entry("wedge",[
   ["tool","楔子","n.",["楔子"],["wedge-tool"],"Drive a wooden wedge beneath the loose board.","在松动的木板下面打进一个木楔。",null,"https://www.merriam-webster.com/dictionary/wedge"],
   ["shape","楔形块","n.",["楔形块","楔形物"],["wedge-shape"],"She served the pie with a wedge of cheese.","她端上馅饼，并配了一块楔形奶酪。",null,"https://www.merriam-webster.com/dictionary/wedge"],
   ["force","挤入；楔住","v.",["挤入","楔住","挤进","楔入"],["wedge-force","knot-binding"],"He wedged the door open with a book.","他用一本书楔住门，让门开着。",null,"https://www.merriam-webster.com/dictionary/wedge"],
   ["division","造成分裂的因素","n.",["造成分裂的因素","导致分裂的东西"],["wedge-division"],"The dispute drove a wedge between the two families.","这场争端使两个家庭产生了隔阂。","drive a wedge between","https://www.merriam-webster.com/dictionary/wedge"]
  ],[{"terms":["起因"],"decision":"scope-excluded","reason":"起因过于宽泛，造成分裂的因素已通过 drive a wedge between 明确限定。","source":"https://www.merriam-webster.com/dictionary/wedge"}]);
  entry("knot",[
   ["tied","结；绳结","n.",["结","绳结"],["knot-tied"],"Tie a firm knot at the end of the rope.","在绳子末端打一个牢固的结。",null,"https://www.merriam-webster.com/dictionary/knot"],
   ["wood","木节；节疤","n.",["木节","节疤"],["knot-wood"],"A dark knot marked the centre of the board.","木板中央有一块深色节疤。",null,"https://www.merriam-webster.com/dictionary/knot"],
   ["speed","节（航速单位）","n.",["节（航速单位）"],["knot-speed"],"The ferry travelled at twenty knots.","渡轮以二十节的速度航行。",null,"https://www.merriam-webster.com/dictionary/knot"],
   ["group","一小群人","n.",["一小群人","群"],["knot-group"],"A knot of reporters waited at the entrance.","一小群记者在入口处等候。",null,"https://www.merriam-webster.com/dictionary/knot"],
   ["tie","打结；使纠结","v.",["打结","使纠结","(使)纠缠"],["knot-tie","knot-binding"],"She knotted the scarf around her neck.","她把围巾在脖子上打了个结。",null,"https://www.merriam-webster.com/dictionary/knot"],
   ["difficulty","难题；复杂的问题","n.",["难题","复杂的问题"],["knot-difficulty"],"The new evidence untied a knot in the investigation.","新证据解开了调查中的一个难题。",null,"https://www.merriam-webster.com/dictionary/knot"]
  ],[]);
  entry("feast",[
   ["meal","盛宴；宴会","n.",["盛宴","宴会","酒席"],["feast-meal"],"The villagers prepared a feast for the visitors.","村民们为来客准备了一场盛宴。",null,"https://www.merriam-webster.com/dictionary/feast"],
   ["pleasure","令人享受的事物","n.",["令人享受的事物","享受"],["feast-pleasure"],"The bright costumes were a feast for the eyes.","鲜艳的服装让人赏心悦目。","a feast for the eyes","https://www.merriam-webster.com/dictionary/feast"],
   ["celebration","宗教节日","n.",["宗教节日","节日"],["feast-celebration"],"The church celebrates the feast with a special service.","教堂以特别礼拜庆祝这个宗教节日。",null,"https://www.merriam-webster.com/dictionary/feast"],
   ["eat","尽情享用；大吃大喝","v.",["尽情享用","大吃大喝","享乐","参加宴会","尽情地吃"],["feast-eat"],"We feasted on fresh bread and local cheese.","我们尽情享用了新鲜面包和当地奶酪。","feast on","https://www.merriam-webster.com/dictionary/feast"]
  ],[{"terms":["款待","请客"],"decision":"scope-excluded","reason":"款待他人的及物用法未单列；尽情吃与请客行为并不完全相同。","source":"https://www.merriam-webster.com/dictionary/feast"}]);
  entry("pop",[
   ["sound","砰的一声","n.",["砰的一声"],["pop-sound"],"The cork came out with a loud pop.","软木塞砰的一声弹了出来。",null,"https://www.merriam-webster.com/dictionary/pop"],
   ["burst","爆开；使爆裂","v.",["爆开","使爆裂","使爆开"],["pop-burst"],"The children popped the balloons after the party.","聚会后，孩子们把气球戳爆了。",null,"https://www.merriam-webster.com/dictionary/pop"],
   ["quick","迅速放入；突然出现","v.",["迅速放入","突然出现","弹出"],["pop-quick"],"She popped her head around the door.","她突然从门边探出头来。",null,"https://www.merriam-webster.com/dictionary/pop"],
   ["visit","短暂拜访；快速前往","v.",["短暂拜访","快速前往","突然去一下"],["pop-visit"],"I will pop into the shop on my way home.","回家路上我会顺便去一下商店。","pop into","https://www.merriam-webster.com/dictionary/pop"],
   ["music","流行音乐","n.",["流行音乐"],["pop-music"],"She listens to pop on the journey to work.","她上班途中听流行音乐。",null,"https://www.merriam-webster.com/dictionary/pop"],
   ["drink","汽水（地区用语）","n.",["汽水（地区用语）","汽水"],["pop-drink"],"He ordered a bottle of pop with his sandwich.","他点了三明治，并要了一瓶汽水。",null,"https://www.merriam-webster.com/dictionary/pop"]
  ],[{"terms":["流行的","通俗的","突然地","砰地"],"decision":"scope-excluded","reason":"音乐形容词及副词突然地未单列；流行音乐名词不能替代所有通俗事物。","source":"https://www.merriam-webster.com/dictionary/pop"}]);
  entry("tumble",[
   ["fall","跌倒；翻滚着落下","v.",["跌倒","翻滚着落下","翻倒","摔倒","倒塌","滚动"],["tumble-fall","tumbling-fall"],"The apples tumbled out of the torn bag.","苹果从破袋子里滚落出来。",null,"https://www.merriam-webster.com/dictionary/tumble"],
   ["decline","暴跌；骤降","v.",["暴跌","骤降"],["tumble-decline","plummet-fall","fall-rapid"],"Share prices tumbled after the announcement.","公告发布后，股价暴跌。",null,"https://www.merriam-webster.com/dictionary/tumble"],
   ["fall-noun","跌落；摔跤","n.",["跌落","摔跤"],["tumble-fall-noun"],"The child took a tumble but was not hurt.","孩子摔了一跤，但没有受伤。",null,"https://www.merriam-webster.com/dictionary/tumble"]
  ],[{"terms":["翻斤斗","仓促地行动","使摔倒","使滚翻","弄乱"],"decision":"scope-excluded","reason":"体操翻筋斗、使滚翻及弄乱未列入本批跌落与价格暴跌用法。","source":"https://www.merriam-webster.com/dictionary/tumble"}]);
  entry("rim",[
   ["edge","边缘；轮缘","n.",["边缘","轮缘","边","框","镶边"],["rim-edge"],"A chip was missing from the rim of the cup.","杯口缺了一小块。",null,"https://www.merriam-webster.com/dictionary/rim"],
   ["encircle","环绕；形成……的边缘","v.",["环绕","形成……的边缘","为...装边","形成边缘"],["rim-encircle"],"Snow rimmed the mouth of the cave.","积雪围住了洞口。",null,"https://www.merriam-webster.com/dictionary/rim"]
  ],[]);
  entry("spotlight",[
   ["lamp","聚光灯","n.",["聚光灯","照明灯"],["spotlight-lamp"],"A spotlight followed the dancer across the stage.","一束聚光灯跟随着舞者移过舞台。",null,"https://www.merriam-webster.com/dictionary/spotlight"],
   ["attention","公众关注","n.",["公众关注"],["spotlight-attention"],"The discovery put the village in the spotlight.","这一发现使村庄成为公众关注的焦点。",null,"https://www.merriam-webster.com/dictionary/spotlight"],
   ["highlight","突出报道；使受到关注","v.",["突出报道","使受到关注"],["spotlight-highlight"],"The article spotlights the shortage of rural doctors.","文章重点报道了乡村医生短缺的问题。",null,"https://www.merriam-webster.com/dictionary/spotlight"]
  ],[{"terms":["反光灯"],"decision":"scope-excluded","reason":"反光灯不一定是聚光灯，本批保留明确的聚焦照明和公众关注。","source":"https://www.merriam-webster.com/dictionary/spotlight"}]);
  entry("shear",[
   ["wool","剪羊毛；剪切","v.",["剪羊毛","剪切","修剪","切","割","削剪","剪"],["shear-wool","mass-cutting"],"The farmers shear their sheep in spring.","农民们在春天剪羊毛。",null,"https://www.merriam-webster.com/dictionary/shear"],
   ["break","剪断；切断","v.",["剪断","切断"],["shear-break"],"The bolt sheared under the heavy load.","螺栓在重负荷下被剪断了。",null,"https://www.merriam-webster.com/dictionary/shear"],
   ["scissors","大剪刀","n.",["大剪刀"],["shear-scissors"],"Use garden shears to trim the hedge.","用园艺大剪刀修剪树篱。",null,"https://www.merriam-webster.com/dictionary/shear"]
  ],[{"terms":["剪下的东西","切变","剪切机","剥夺","横越"],"decision":"scope-excluded","reason":"切变、剪切机和剥夺搭配属独立专业或引申用法，横越也不能代替剪切。","source":"https://www.merriam-webster.com/dictionary/shear"}]);
  entry("fashion",[
   ["style","时尚；流行款式","n.",["时尚","流行款式","流行","风尚","时样"],["fashion-style"],"Wide trousers are back in fashion.","宽松长裤又流行起来了。",null,"https://www.merriam-webster.com/dictionary/fashion"],
   ["way","方式；方法","n.",["方式","方法"],["fashion-way"],"The files are arranged in an orderly fashion.","这些文件按有序的方式排列。",null,"https://www.merriam-webster.com/dictionary/fashion"],
   ["make","制作；塑造","v.",["制作","塑造","形成","造","作"],["fashion-make"],"He fashioned a small boat from a piece of bark.","他用一块树皮做成了一艘小船。",null,"https://www.merriam-webster.com/dictionary/fashion"]
  ],[]);
  entry("prevail",[
   ["win","获胜；占上风","v.",["获胜","占上风"],["prevail-win"],"In the end, the stronger argument prevailed.","最后，更有力的论点占了上风。",null,"https://www.merriam-webster.com/dictionary/prevail"],
   ["exist","盛行；普遍存在","v.",["盛行","普遍存在","流行"],["prevail-exist"],"Dry conditions prevail across the region in summer.","夏季这一地区普遍干燥。",null,"https://www.merriam-webster.com/dictionary/prevail"],
   ["persuade","说服","v.",["说服"],["prevail-persuade"],"We prevailed on her to stay for dinner.","我们说服她留下来吃晚饭。","prevail on","https://www.merriam-webster.com/dictionary/prevail"]
  ],[]);
  entry("gum",[
   ["mouth","牙龈","n.",["牙龈","牙床"],["gum-mouth"],"The dentist checked her teeth and gums.","牙医检查了她的牙齿和牙龈。",null,"https://www.merriam-webster.com/dictionary/gum"],
   ["substance","树胶；胶质","n.",["树胶","胶质"],["gum-substance"],"The tree produces a sticky gum.","这种树会分泌黏稠的树胶。",null,"https://www.merriam-webster.com/dictionary/gum"],
   ["chewing","口香糖","n.",["口香糖"],["gum-chewing"],"Please do not leave gum under the desk.","请不要把口香糖粘在桌子下面。",null,"https://www.merriam-webster.com/dictionary/gum"],
   ["stick","用胶粘","v.",["用胶粘","涂以树胶","使有粘性"],["gum-stick"],"She gummed the label to the box.","她用胶把标签粘到盒子上。",null,"https://www.merriam-webster.com/dictionary/gum"]
  ],[{"terms":["橡皮","橡皮糖","老天","分泌树胶","发粘"],"decision":"scope-excluded","reason":"橡皮、糖果、感叹词和分泌动作未并入牙龈、树胶、口香糖及粘贴。","source":"https://www.merriam-webster.com/dictionary/gum"}]);
  entry("suck",[
   ["draw","吸；吮吸","v.",["吸","吮吸","吮","吸奶"],["suck-draw"],"The baby sucked milk from the bottle.","婴儿从奶瓶里吸奶。",null,"https://www.merriam-webster.com/dictionary/suck"],
   ["pull","吸入；卷入","v.",["吸入","卷入"],["suck-pull"],"The pump sucked water out of the flooded room.","泵把积水从房间里抽了出去。",null,"https://www.merriam-webster.com/dictionary/suck"],
   ["poor","很差；糟透了（非正式用语）","v.",["很差","糟透了（非正式用语）"],["suck-poor"],"The traffic here really sucks at rush hour.","这里高峰时段的交通真糟糕。",null,"https://www.merriam-webster.com/dictionary/suck"]
  ],[{"terms":["吸收"],"decision":"scope-excluded","reason":"泛指吸收不一定涉及吸力，本批不等同于所有吸收过程。","source":"https://www.merriam-webster.com/dictionary/suck"}]);
  entry("plumb",[
   ["vertical","垂直的","adj.",["垂直的","垂直"],["plumb-vertical"],"Check that the post is plumb before fixing it.","固定柱子前，检查它是否垂直。",null,"https://www.merriam-webster.com/dictionary/plumb"],
   ["weight","铅锤；测锤","n.",["铅锤","测锤"],["plumb-weight","plummet-weight"],"He used a plumb to check the wall.","他用铅锤检查墙是否垂直。",null,"https://www.merriam-webster.com/dictionary/plumb"],
   ["explore","探究；深入了解","v.",["探究","深入了解","探测"],["plumb-explore"],"The researchers plumbed the causes of the decline.","研究人员深入探究了衰退的原因。",null,"https://www.merriam-webster.com/dictionary/plumb"],
   ["pipes","安装管道","v.",["安装管道"],["plumb-pipes"],"They plumbed the new bathroom last week.","他们上周给新浴室安装了管道。",null,"https://www.merriam-webster.com/dictionary/plumb"]
  ],[{"terms":["使垂直","成垂直"],"decision":"scope-excluded","reason":"使物体垂直的动作与垂直形容词不同，本批不从状态自动生成动作义。","source":"https://www.merriam-webster.com/dictionary/plumb"}]);
  entry("weld",[
   ["join","焊接","v.",["焊接","焊牢"],["weld-join"],"The mechanic welded the broken bracket.","机械工焊接了断裂的支架。",null,"https://www.merriam-webster.com/dictionary/weld"],
   ["unite","使紧密结合","v.",["使紧密结合","使密接","使结合","使成整体"],["weld-unite","joining-weld","unite-join","join-integrate"],"Shared hardship welded the group into a team.","共同经历的艰难把这群人凝聚成了团队。",null,"https://www.merriam-webster.com/dictionary/weld"],
   ["joint","焊缝；焊接处","n.",["焊缝","焊接处"],["weld-joint"],"The inspector found a crack in the weld.","检查员在焊缝中发现了一道裂纹。",null,"https://www.merriam-webster.com/dictionary/weld"]
  ],[]);
  entry("haunt",[
   ["trouble","萦绕心头；使难以忘怀","v.",["萦绕心头","使难以忘怀","萦绕于"],["haunt-trouble","mental-preoccupation"],"The unanswered question continued to haunt her.","那个未解的问题一直萦绕在她心头。",null,"https://www.merriam-webster.com/dictionary/haunt"],
   ["ghost","鬼魂出没于","v.",["鬼魂出没于","作祟"],["haunt-ghost"],"Villagers believed a ghost haunted the tower.","村民们相信塔里闹鬼。",null,"https://www.merriam-webster.com/dictionary/haunt"],
   ["frequent","常去；经常出没","v.",["常去","经常出没","常到","出没于","出没"],["haunt-frequent"],"The poet haunted the cafés near the river.","这位诗人常去河边的咖啡馆。",null,"https://www.merriam-webster.com/dictionary/haunt"],
   ["place","常去的地方","n.",["常去的地方","常到的地方"],["haunt-place"],"The old cinema was a favourite haunt of ours.","那家老电影院是我们常去的地方。",null,"https://www.merriam-webster.com/dictionary/haunt"]
  ],[{"terms":["生息地"],"decision":"scope-excluded","reason":"生息地为另一名词语境，人的常去之处不代表所有动物栖息地。","source":"https://www.merriam-webster.com/dictionary/haunt"}]);
  entry("expire",[
   ["validity","到期；失效","v.",["到期","失效","期满"],["expire-validity"],"My passport expires next month.","我的护照下个月到期。",null,"https://www.merriam-webster.com/dictionary/expire"],
   ["die","死亡；断气","v.",["死亡","断气"],["expire-die"],"The injured bird expired before help arrived.","援助到来前，受伤的鸟死了。",null,"https://www.merriam-webster.com/dictionary/expire"],
   ["exhale","呼气","v.",["呼气","呼出"],["expire-exhale"],"The apparatus measures the volume of air you expire.","这台设备测量你呼出空气的体积。",null,"https://www.merriam-webster.com/dictionary/expire"]
  ],[]);
  entry("oar",[
   ["blade","桨","n.",["桨"],["oar-blade"],"An oar slipped from his hand into the water.","一支桨从他手中滑落到水里。",null,"https://www.merriam-webster.com/dictionary/oar"],
   ["row","划桨；用桨划动","v.",["划桨","用桨划动","划动"],["oar-row"],"They oared slowly towards the island.","他们慢慢划桨驶向岛屿。",null,"https://www.merriam-webster.com/dictionary/oar"]
  ],[{"terms":["桨手","搅棒"],"decision":"scope-excluded","reason":"桨手与搅棒不是本批桨和划桨的直接同义答案。","source":"https://www.merriam-webster.com/dictionary/oar"}]);
  entry("arena",[
   ["venue","竞技场；表演场地","n.",["竞技场","表演场地","角斗场","场地"],["arena-venue"],"The arena holds ten thousand spectators.","这座竞技场可容纳一万名观众。",null,"https://www.merriam-webster.com/dictionary/arena"],
   ["field","领域；活动舞台","n.",["领域","活动舞台","舞台"],["arena-field"],"She entered the political arena at a young age.","她年轻时就进入了政界。",null,"https://www.merriam-webster.com/dictionary/arena"]
  ],[{"terms":["尿沉渣","尿沙","脑沙"],"decision":"scope-excluded","reason":"尿沉渣、尿沙和脑沙属特殊医学或拉丁术语旧译，不并入竞技场与活动领域。","source":"https://www.merriam-webster.com/dictionary/arena"}]);
  entry("harness",[
   ["straps","挽具；安全带","n.",["挽具","安全带","马具","挽具状带子"],["harness-straps"],"The climber checked her safety harness.","攀岩者检查了她的安全带。",null,"https://www.merriam-webster.com/dictionary/harness"],
   ["equip","给……套挽具","v.",["给……套挽具","给...上挽具"],["harness-equip"],"They harnessed the horses before sunrise.","他们在日出前给马套上了挽具。",null,"https://www.merriam-webster.com/dictionary/harness"],
   ["use","利用；控制利用","v.",["利用","控制利用","驾驭","利用...以产生动力"],["harness-use","apply-harness"],"The dam harnesses the energy of flowing water.","大坝利用流水的能量。",null,"https://www.merriam-webster.com/dictionary/harness"]
  ],[{"terms":["甲胄","披上甲胄"],"decision":"scope-excluded","reason":"甲胄的历史用法未列入本批挽具、安全带与利用能源。","source":"https://www.merriam-webster.com/dictionary/harness"}]);
  entry("cop",[
   ["police","警察（非正式用语）","n.",["警察（非正式用语）","警官"],["cop-police"],"A cop directed traffic around the stalled truck.","一名警察指挥车辆绕过抛锚的卡车。",null,"https://www.merriam-webster.com/dictionary/cop"],
   ["obtain","获得；捞到（非正式用语）","v.",["获得","捞到（非正式用语）"],["cop-obtain","obtain-get","get-acquire","gain-acquire"],"He managed to cop a ticket for the final.","他设法弄到了一张决赛门票。",null,"https://www.merriam-webster.com/dictionary/cop"],
   ["avoid","逃避责任","v.",["逃避责任"],["cop-avoid"],"Do not cop out when the work gets difficult.","工作变难时，不要逃避责任。","cop out","https://www.merriam-webster.com/dictionary/cop"]
  ],[{"terms":["抓住"],"decision":"scope-excluded","reason":"抓住需具体口语搭配，本批只训练警察、获得和 cop out 的逃避责任。","source":"https://www.merriam-webster.com/dictionary/cop"}]);
  entry("bound",[
   ["certain","一定会；很可能","adj.",["一定会","很可能","必定的","很可能的"],["bound-certain"],"The roads are bound to freeze tonight.","今晚道路一定会结冰。","be bound to","https://www.merriam-webster.com/dictionary/bound"],
   ["obliged","有义务的；受约束的","adj.",["有义务的","受约束的"],["bound-obliged"],"We are bound by the terms of the agreement.","我们受到协议条款的约束。",null,"https://www.merriam-webster.com/dictionary/bound"],
   ["destination","前往……的","adj.",["前往……的","前往的"],["bound-destination"],"The ship is bound for Singapore.","这艘船正驶往新加坡。","bound for","https://www.merriam-webster.com/dictionary/bound"],
   ["jump","跳跃着前进","v.",["跳跃着前进","跳跃前进"],["bound-jump","jump-leap-verb"],"The dog bounded across the lawn.","那条狗跳跃着穿过草坪。",null,"https://www.merriam-webster.com/dictionary/bound"],
   ["leap","一跳；跳跃","n.",["一跳","跳跃"],["bound-leap","jump-leap-noun"],"She cleared the puddle in a single bound.","她一跳就越过了水坑。",null,"https://www.merriam-webster.com/dictionary/bound"],
   ["limit","界限；限度","n.",["界限","限度","范围"],["bound-limit","confine-boundary"],"His curiosity knows no bounds.","他的好奇心没有边界。",null,"https://www.merriam-webster.com/dictionary/bound"],
   ["confine","构成边界；限制","v.",["构成边界","限制"],["bound-confine"],"The river bounds the estate to the east.","这条河构成了庄园的东界。",null,"https://www.merriam-webster.com/dictionary/bound"],
   ["binding","装订好的","adj.",["装订好的","装订的"],["bound-binding"],"The library owns a bound collection of the old journals.","图书馆收藏了这些旧期刊的合订本。",null,"https://www.merriam-webster.com/dictionary/bound"]
  ],[]);
  entry("reject",[
   ["refuse","拒绝；不接受","v.",["拒绝","不接受","拒收","否决","驳回","不录用","不相信"],["reject-refuse","reject-not-accept"],"The council rejected the building proposal.","议会否决了这项建筑提案。",null,"https://www.merriam-webster.com/dictionary/reject"],
   ["immune","排斥移植组织","v.",["排斥移植组织","排斥移植器官"],["reject-immune"],"The patient's body rejected the transplant.","病人的身体排斥了移植物。",null,"https://www.merriam-webster.com/dictionary/reject"],
   ["unwanted","次品；被淘汰者","n.",["次品","被淘汰者","不合格品","被拒绝的人"],["reject-unwanted"],"The shop sells factory rejects at low prices.","这家店低价出售工厂次品。",null,"https://www.merriam-webster.com/dictionary/reject"]
  ],[]);
  entry("performance",[
   ["show","演出；表演","n.",["演出","表演"],["performance-show"],"The evening performance begins at seven.","晚场演出七点开始。",null,"https://www.merriam-webster.com/dictionary/performance"],
   ["standard","表现；性能","n.",["表现","性能","工作情况","成绩","绩效"],["performance-standard"],"The new engine showed better performance in cold weather.","新发动机在寒冷天气中性能更好。",null,"https://www.merriam-webster.com/dictionary/performance"],
   ["fulfilment","履行；执行","n.",["履行","执行","施行"],["performance-fulfilment"],"Payment depends on satisfactory performance of the contract.","付款取决于合同是否得到令人满意的履行。",null,"https://www.merriam-webster.com/dictionary/performance"]
  ],[{"terms":["行为"],"decision":"scope-excluded","reason":"一般行为未必是表演或履约，本批通过任务表现、性能及合同执行限定。","source":"https://www.merriam-webster.com/dictionary/performance"}]);
  entry("murmur",[
   ["sound","低语；轻柔持续的声音","n.",["低语","轻柔持续的声音"],["murmur-sound"],"We heard the murmur of voices through the wall.","我们隔着墙听到了低语声。",null,"https://www.merriam-webster.com/dictionary/murmur"],
   ["complain","小声抱怨","v.",["小声抱怨"],["murmur-complain"],"A few passengers murmured about the delay.","几位乘客小声抱怨延误。",null,"https://www.merriam-webster.com/dictionary/murmur"],
   ["speak","低声说","v.",["低声说","低声而言"],["murmur-speak","soft-speech"],"She murmured a few words of thanks.","她低声说了几句感谢的话。",null,"https://www.merriam-webster.com/dictionary/murmur"],
   ["medical","心脏杂音","n.",["心脏杂音"],["murmur-medical"],"The doctor detected a slight heart murmur.","医生发现了轻微的心脏杂音。",null,"https://www.merriam-webster.com/dictionary/murmur"]
  ],[{"terms":["低声的怨言"],"decision":"scope-excluded","reason":"抱怨名词未单列；低声说话不必然表达不满。","source":"https://www.merriam-webster.com/dictionary/murmur"}]);
  entry("contradict",[
   ["oppose","反驳；否认","v.",["反驳","否认"],["contradict-oppose","discontent-opposition"],"He contradicted the witness's account.","他反驳了证人的叙述。",null,"https://www.merriam-webster.com/dictionary/contradict"],
   ["conflict","与……矛盾","v.",["与……矛盾","与...抵触","与...矛盾"],["contradict-conflict"],"The two reports contradict each other.","两份报告互相矛盾。",null,"https://www.merriam-webster.com/dictionary/contradict"]
  ],[]);
  entry("mute",[
   ["silent","沉默的；无声的","adj.",["沉默的","无声的"],["mute-silent"],"She gave a mute nod of agreement.","她默默点头表示同意。",null,"https://www.merriam-webster.com/dictionary/mute"],
   ["silence","使静音；使声音减弱","v.",["使静音","使声音减弱","减弱...的声音"],["mute-silence","hearing-muffle","silence-quiet-verb","quiet-cause"],"Mute the microphone before leaving the call.","离开通话前，把麦克风静音。",null,"https://www.merriam-webster.com/dictionary/mute"],
   ["device","弱音器","n.",["弱音器"],["mute-device"],"The trumpeter fitted a mute before the solo.","小号手在独奏前装上了弱音器。",null,"https://www.merriam-webster.com/dictionary/mute"]
  ],[{"terms":["哑子","哑音字母","哑的","排泄"],"decision":"scope-excluded","reason":"排泄为鸟类专门动词；哑子等旧称及哑音字母不与静音或弱音器混合。","source":"https://www.merriam-webster.com/dictionary/mute"}]);
  entry("require",[
   ["need","需要","v.",["需要"],["require-need"],"This plant requires plenty of sunlight.","这种植物需要充足的阳光。",null,"https://www.merriam-webster.com/dictionary/require"],
   ["demand","要求；规定","v.",["要求","规定","命令"],["require-demand"],"The rules require visitors to wear badges.","规定要求访客佩戴证件。",null,"https://www.merriam-webster.com/dictionary/require"]
  ],[]);
  entry("raid",[
   ["attack","突袭；突然搜查","n.",["突袭","突然搜查","袭击","搜捕","奇袭"],["raid-attack"],"Police carried out a dawn raid on the warehouse.","警方在黎明时突击搜查了仓库。",null,"https://www.merriam-webster.com/dictionary/raid"],
   ["attack-verb","突袭；搜查","v.",["突袭","搜查"],["raid-attack-verb"],"Officers raided the building before sunrise.","警员在日出前突击搜查了大楼。",null,"https://www.merriam-webster.com/dictionary/raid"]
  ],[{"terms":["廉价磁盘冗余阵列"],"decision":"scope-excluded","reason":"磁盘阵列应为 RAID 缩写，不作为袭击或搜查的英语释义。","source":"https://www.merriam-webster.com/dictionary/raid"}]);
  entry("cheek",[
   ["face","面颊；脸蛋","n.",["面颊","脸蛋","颊"],["cheek-face"],"A tear rolled down her cheek.","一滴泪水沿着她的脸颊滑落。",null,"https://www.merriam-webster.com/dictionary/cheek"],
   ["impudence","厚脸皮；无礼","n.",["厚脸皮","无礼","厚颜"],["cheek-impudence"],"He had the cheek to blame me for his mistake.","他竟厚着脸皮把自己的错误怪到我头上。",null,"https://www.merriam-webster.com/dictionary/cheek"]
  ],[]);
  entry("fool",[
   ["person","傻瓜；愚蠢的人","n.",["傻瓜","愚蠢的人","愚人","受骗者"],["fool-person","lack-wisdom"],"Only a fool would ignore that warning.","只有傻瓜才会无视那条警告。",null,"https://www.merriam-webster.com/dictionary/fool"],
   ["trick","愚弄；欺骗","v.",["愚弄","欺骗"],["fool-trick"],"The disguise fooled the guards.","这身伪装骗过了警卫。",null,"https://www.merriam-webster.com/dictionary/fool"],
   ["jester","宫廷弄臣；小丑","n.",["宫廷弄臣","小丑"],["fool-jester"],"The king's fool entertained the guests with riddles.","国王的弄臣用谜语逗客人开心。",null,"https://www.merriam-webster.com/dictionary/fool"]
  ],[{"terms":["奶油拌水果","浪费","干傻事","开玩笑","游荡","傻的"],"decision":"scope-excluded","reason":"水果甜点、浪费及游荡等用法需特定语境，不与傻瓜名词或愚弄动词混合。","source":"https://www.merriam-webster.com/dictionary/fool"}]);
  entry("flame",[
   ["fire","火焰","n.",["火焰","火舌"],["flame-fire"],"A blue flame burned beneath the pan.","锅下燃着蓝色火焰。",null,"https://www.merriam-webster.com/dictionary/flame"],
   ["burn","燃烧；冒火焰","v.",["燃烧","冒火焰","焚烧","点燃","闪耀"],["flame-burn"],"The dry branches flamed in the stove.","干树枝在炉子里燃烧起来。",null,"https://www.merriam-webster.com/dictionary/flame"],
   ["passion","强烈的感情；激情","n.",["强烈的感情","激情","热情"],["flame-passion"],"The victory renewed the flame of hope.","胜利重新燃起了希望之火。",null,"https://www.merriam-webster.com/dictionary/flame"]
  ],[{"terms":["光辉","用火焰给...灭菌","用火焰传送(信号)","激动","爆发","无聊邮件","无益邮件"],"decision":"scope-excluded","reason":"网络攻击、火焰灭菌及信号用途未单列；无聊邮件并非所有 flame 的准确解释。","source":"https://www.merriam-webster.com/dictionary/flame"}]);
  entry("flare",[
   ["light","突然闪耀；燃旺","v.",["突然闪耀","燃旺","闪光","闪耀","使闪耀"],["flare-light"],"The match flared in the dark.","火柴在黑暗中突然亮了起来。",null,"https://www.merriam-webster.com/dictionary/flare"],
   ["intensify","突然加剧；骤然发作","v.",["突然加剧","骤然发作"],["flare-intensify"],"Her knee pain flared up after the walk.","散步后，她的膝盖突然又疼了起来。","flare up","https://www.merriam-webster.com/dictionary/flare"],
   ["signal","照明弹；信号弹","n.",["照明弹","信号弹"],["flare-signal"],"The sailors sent up a flare to attract attention.","水手们发射了一枚信号弹以引人注意。",null,"https://www.merriam-webster.com/dictionary/flare"],
   ["widen","向外展开；呈喇叭形","v.",["向外展开","呈喇叭形","使张开"],["flare-widen"],"The trousers flare below the knee.","这条长裤从膝盖以下向外展开。",null,"https://www.merriam-webster.com/dictionary/flare"]
  ],[{"terms":["用发光信号发出"],"decision":"scope-excluded","reason":"发射光信号的动作不从信号弹名词自动推导，本批另收录燃旺、加剧及喇叭形展开。","source":"https://www.merriam-webster.com/dictionary/flare"}]);
  entry("preparation",[
   ["ready","准备；准备工作","n.",["准备","准备工作","预备","预习"],["preparation-ready"],"Careful preparation made the journey easier.","细致的准备使旅程更轻松了。",null,"https://www.merriam-webster.com/dictionary/preparation"],
   ["mixture","配制品；制剂","n.",["配制品","制剂"],["preparation-mixture"],"The pharmacist recommended a mild skin preparation.","药剂师推荐了一种温和的皮肤制剂。",null,"https://www.merriam-webster.com/dictionary/preparation"]
  ],[]);
  entry("violate",[
   ["break","违反；违背","v.",["违反","违背","违犯"],["violate-break","offence-violate"],"The factory violated the safety regulations.","这家工厂违反了安全规定。",null,"https://www.merriam-webster.com/dictionary/violate"],
   ["invade","侵犯；亵渎","v.",["侵犯","亵渎"],["violate-invade"],"Publishing the letters would violate her privacy.","公布这些信件会侵犯她的隐私。",null,"https://www.merriam-webster.com/dictionary/violate"]
  ],[{"terms":["妨碍"],"decision":"scope-excluded","reason":"妨碍不必然违反规范或侵犯权利，不能在所有语境互换。","source":"https://www.merriam-webster.com/dictionary/violate"}]);
  entry("revolt",[
   ["rebellion","反抗；起义","n.",["反抗","起义","叛乱"],["revolt-rebellion"],"The tax increase sparked a revolt.","增税引发了反抗。",null,"https://www.merriam-webster.com/dictionary/revolt"],
   ["rebel","反叛；反抗","v.",["反叛","反抗"],["revolt-rebel","rebellion-action"],"The soldiers revolted against their commander.","士兵们起来反抗指挥官。",null,"https://www.merriam-webster.com/dictionary/revolt"],
   ["disgust","使厌恶；使反感","v.",["使厌恶","使反感","使恶心"],["revolt-disgust"],"The cruelty of the scene revolted him.","那个场景的残忍让他十分反感。",null,"https://www.merriam-webster.com/dictionary/revolt"]
  ],[{"terms":["反感","厌恶"],"decision":"scope-excluded","reason":"名词反感未单列；反叛和使厌恶的动词已经区分。","source":"https://www.merriam-webster.com/dictionary/revolt"}]);
  entry("dread",[
   ["fear","害怕；担忧","v.",["害怕","担忧"],["dread-fear","fear-be-afraid","worry-concern"],"She dreaded the long drive in the dark.","她害怕在黑暗中长途开车。",null,"https://www.merriam-webster.com/dictionary/dread"],
   ["feeling","恐惧；忧虑","n.",["恐惧","忧虑"],["dread-feeling","worry-state","fear-dread"],"He waited for the result with a sense of dread.","他怀着恐惧等待结果。",null,"https://www.merriam-webster.com/dictionary/dread"]
  ],[{"terms":["可怕的人(或事)","可怕的","可怖的"],"decision":"scope-excluded","reason":"令人害怕的名词和可怕的形容词未纳入本批害怕动词及恐惧名词。","source":"https://www.merriam-webster.com/dictionary/dread"}]);
  entry("rein",[
   ["strap","缰绳","n.",["缰绳"],["rein-strap"],"She pulled gently on the reins.","她轻轻拉了一下缰绳。",null,"https://www.merriam-webster.com/dictionary/rein"],
   ["control","控制权；约束","n.",["控制权","约束","统治","支配","驾驭"],["rein-control"],"He handed over the reins of the company to his daughter.","他把公司的管理权交给了女儿。",null,"https://www.merriam-webster.com/dictionary/rein"],
   ["restrain","勒住；控制","v.",["勒住","控制","以缰绳控制","勒住马"],["rein-restrain"],"The committee tried to rein in spending.","委员会试图控制开支。","rein in","https://www.merriam-webster.com/dictionary/rein"]
  ],[]);
  entry("rivalry",[
   ["competition","竞争；对抗","n.",["竞争","对抗","拮抗"],["rivalry-competition","match-competition"],"A friendly rivalry developed between the two teams.","两队之间形成了友好的竞争。",null,"https://www.merriam-webster.com/dictionary/rivalry"]
  ],[]);
  entry("fierce",[
   ["aggressive","凶猛的；凶狠的","adj.",["凶猛的","凶狠的"],["fierce-aggressive"],"A fierce dog guarded the yard.","一条凶猛的狗守着院子。",null,"https://www.merriam-webster.com/dictionary/fierce"],
   ["intense","激烈的；猛烈的","adj.",["激烈的","猛烈的","热烈的"],["fierce-intense"],"The proposal faced fierce opposition.","这项提案遭到强烈反对。",null,"https://www.merriam-webster.com/dictionary/fierce"]
  ],[{"terms":["暴躁的"],"decision":"scope-excluded","reason":"暴躁指易怒性情，不必然凶猛或激烈，本批不把这些形容词完全等同。","source":"https://www.merriam-webster.com/dictionary/fierce"}]);
  entry("evil",[
   ["wicked","邪恶的；恶毒的","adj.",["邪恶的","恶毒的"],["evil-wicked","moral-evil"],"The story centres on an evil ruler.","故事围绕一位邪恶的统治者展开。",null,"https://www.merriam-webster.com/dictionary/evil"],
   ["wrong","邪恶；恶行","n.",["邪恶","恶行","罪恶"],["evil-wrong"],"The novel explores the struggle between good and evil.","小说探讨了善与恶的斗争。",null,"https://www.merriam-webster.com/dictionary/evil"],
   ["harm","弊端；祸害","n.",["弊端","祸害","不幸"],["evil-harm"],"The report examines the social evils caused by corruption.","报告考察了腐败造成的社会弊端。",null,"https://www.merriam-webster.com/dictionary/evil"]
  ],[{"terms":["不幸的","有害的","讨厌的"],"decision":"scope-excluded","reason":"名词祸害与形容词有害的不可直接跨词性替换；讨厌的也不必然邪恶。","source":"https://www.merriam-webster.com/dictionary/evil"}]);
  entry("funeral",[
   ["ceremony","葬礼","n.",["葬礼","出殡"],["funeral-ceremony"],"Neighbours brought flowers to the funeral.","邻居们带着鲜花参加了葬礼。",null,"https://www.merriam-webster.com/dictionary/funeral"]
  ],[]);
  entry("grave",[
   ["burial","坟墓","n.",["坟墓","墓穴"],["grave-burial"],"Wild flowers grew beside the grave.","坟墓旁长着野花。",null,"https://www.merriam-webster.com/dictionary/grave"],
   ["serious","严重的；重大的","adj.",["严重的","重大的"],["grave-serious"],"The missing medicine posed a grave risk to patients.","药品短缺对病人构成了严重风险。",null,"https://www.merriam-webster.com/dictionary/grave"],
   ["solemn","严肃的；庄重的","adj.",["严肃的","庄重的"],["grave-solemn"],"Her grave expression told us something was wrong.","她严肃的神情告诉我们出了问题。",null,"https://www.merriam-webster.com/dictionary/grave"]
  ],[{"terms":["终结","死亡","低沉的","雕刻"],"decision":"scope-excluded","reason":"雕刻动词与音乐慢板指示不在本批范围；坟墓不把所有死亡或终结都作为同义答案。","source":"https://www.merriam-webster.com/dictionary/grave"}]);
  entry("hover",[
   ["air","盘旋；悬停","v.",["盘旋","悬停","翱翔"],["hover-air"],"A helicopter hovered above the field.","一架直升机悬停在田地上方。",null,"https://www.merriam-webster.com/dictionary/hover"],
   ["remain","徘徊；在附近逗留","v.",["徘徊","在附近逗留"],["hover-remain"],"He hovered near the door, unsure whether to leave.","他在门边徘徊，不确定该不该离开。",null,"https://www.merriam-webster.com/dictionary/hover"],
   ["level","在某水平上下波动","v.",["在某水平上下波动"],["hover-level"],"The temperature hovered around zero all day.","气温一整天在零度上下徘徊。",null,"https://www.merriam-webster.com/dictionary/hover"],
   ["cursor","悬停鼠标指针","v.",["悬停鼠标指针"],["hover-cursor"],"Hover over the icon to see its name.","把鼠标指针悬停在图标上即可看到名称。",null,"https://www.merriam-webster.com/dictionary/hover"]
  ],[{"terms":["孵"],"decision":"scope-excluded","reason":"孵为古旧或受限旧义，本批只训练悬停、徘徊及指针动作。","source":"https://www.merriam-webster.com/dictionary/hover"}]);
  entry("forgo",[
   ["abstain","放弃；舍弃","v.",["放弃","舍弃","摒绝"],["forgo-abstain"],"We decided to forgo dessert and take a walk instead.","我们决定不吃甜点，改去散步。",null,"https://www.merriam-webster.com/dictionary/forgo"]
  ],[]);
  entry("tablet",[
   ["medicine","药片","n.",["药片","片剂"],["tablet-medicine"],"Take one tablet with a glass of water.","用一杯水送服一片药。",null,"https://www.merriam-webster.com/dictionary/tablet"],
   ["computer","平板电脑","n.",["平板电脑"],["tablet-computer"],"She reads the newspaper on her tablet.","她在平板电脑上看报纸。",null,"https://www.merriam-webster.com/dictionary/tablet"],
   ["slab","碑板；刻字石板","n.",["碑板","刻字石板","平板","门牌","碑","匾"],["tablet-slab"],"A stone tablet records the names of the donors.","一块石碑记录着捐赠者的姓名。",null,"https://www.merriam-webster.com/dictionary/tablet"]
  ],[{"terms":["笔记簿"],"decision":"scope-excluded","reason":"纸质便笺簿与刻字石板、药片、平板电脑不同，未单列。","source":"https://www.merriam-webster.com/dictionary/tablet"}]);
  entry("guardian",[
   ["legal","监护人","n.",["监护人"],["guardian-legal"],"A parent or guardian must sign the form.","这张表格必须由家长或监护人签字。",null,"https://www.merriam-webster.com/dictionary/guardian"],
   ["protector","守护者；保护者","n.",["守护者","保护者","看守者","保护人"],["guardian-protector"],"Local volunteers act as guardians of the wetland.","当地志愿者担任湿地的守护者。",null,"https://www.merriam-webster.com/dictionary/guardian"]
  ],[{"terms":["保护的"],"decision":"scope-excluded","reason":"保护的形容词未从监护人名词自动生成。","source":"https://www.merriam-webster.com/dictionary/guardian"}]);
  entry("herald",[
   ["announce","预示；宣告","v.",["预示","宣告","宣布"],["herald-announce"],"The first blossoms herald the arrival of spring.","最早的花朵预示春天到来。",null,"https://www.merriam-webster.com/dictionary/herald"],
   ["messenger","传令官；信使","n.",["传令官","信使"],["herald-messenger"],"A herald announced the visitors at the castle gate.","一位传令官在城堡门口通报来客到访。",null,"https://www.merriam-webster.com/dictionary/herald"]
  ],[{"terms":["赞扬","预兆","先驱"],"decision":"scope-excluded","reason":"本批预示为动词；预兆名词、先驱及赞扬需独立词性和语境，不冒充信使。","source":"https://www.merriam-webster.com/dictionary/herald"}]);
  entry("husband",[
   ["spouse","丈夫","n.",["丈夫"],["husband-spouse"],"Her husband collects old maps.","她的丈夫收藏旧地图。",null,"https://www.merriam-webster.com/dictionary/husband"],
   ["conserve","节约使用；精打细算","v.",["节约使用","精打细算","节俭"],["husband-conserve"],"The climbers husbanded their remaining food.","登山者节省着使用剩余的食物。",null,"https://www.merriam-webster.com/dictionary/husband"]
  ],[{"terms":["管理人","节俭的人","使成丈夫","持有"],"decision":"scope-excluded","reason":"本批区分丈夫与节约使用；管理人、节俭的人及配婚历史义未列入。","source":"https://www.merriam-webster.com/dictionary/husband"}]);
  entry("beat",[
   ["strike","连续击打；敲打","v.",["连续击打","敲打","打","敲"],["beat-strike","hit-strike"],"Rain beat against the windows.","雨不断打在窗户上。",null,"https://www.merriam-webster.com/dictionary/beat"],
   ["defeat","打败；胜过","v.",["打败","胜过","击败"],["beat-defeat"],"Our team beat the visitors by one point.","我们队以一分之差击败了客队。",null,"https://www.merriam-webster.com/dictionary/beat"],
   ["mix","搅打","v.",["搅打"],["beat-mix"],"Beat the eggs until they become pale.","把鸡蛋打至颜色变浅。",null,"https://www.merriam-webster.com/dictionary/beat"],
   ["pulse","跳动；搏动","v.",["跳动","搏动","拍动","心跳"],["beat-pulse"],"Her heart beat faster as the lift stopped.","电梯停下时，她的心跳加快了。",null,"https://www.merriam-webster.com/dictionary/beat"],
   ["rhythm","节拍；节奏","n.",["节拍","节奏"],["beat-rhythm"],"The dancers moved to a steady beat.","舞者随着稳定的节拍起舞。",null,"https://www.merriam-webster.com/dictionary/beat"],
   ["patrol","巡逻区域；负责报道的领域","n.",["巡逻区域","负责报道的领域","辖区"],["beat-patrol"],"The officer knows every street on his beat.","这位警官熟悉自己巡区的每条街。",null,"https://www.merriam-webster.com/dictionary/beat"],
   ["exhausted","筋疲力尽的","adj.",["筋疲力尽的"],["beat-exhausted"],"After the long shift, I was completely beat.","长时间轮班后，我累极了。",null,"https://www.merriam-webster.com/dictionary/beat"],
   ["record","打破纪录","v.",["打破纪录"],["beat-record"],"She beat the previous record by half a second.","她把原纪录提高了半秒。",null,"https://www.merriam-webster.com/dictionary/beat"]
  ],[]);
  entry("burrow",[
   ["hole","洞穴；地洞","n.",["洞穴","地洞","藏身处"],["burrow-hole"],"The rabbit disappeared into its burrow.","兔子钻进了洞里。",null,"https://www.merriam-webster.com/dictionary/burrow"],
   ["dig","挖洞；钻入","v.",["挖洞","钻入","掘洞穴","掘","打洞"],["burrow-dig"],"The animal burrowed beneath the fence.","那只动物在篱笆下面挖洞钻了过去。",null,"https://www.merriam-webster.com/dictionary/burrow"]
  ],[{"terms":["躲藏"],"decision":"scope-excluded","reason":"泛指躲藏不必然钻洞或钻入，不能把所有藏身动作都解释为 burrow。","source":"https://www.merriam-webster.com/dictionary/burrow"}]);
  entry("campaign",[
   ["movement","运动；一系列活动","n.",["运动","一系列活动","竞选运动"],["campaign-movement"],"The campaign encourages people to use less plastic.","这项活动鼓励人们减少塑料使用。",null,"https://www.merriam-webster.com/dictionary/campaign"],
   ["military","战役；一系列军事行动","n.",["战役","一系列军事行动"],["campaign-military"],"The winter campaign lasted three months.","冬季战役持续了三个月。",null,"https://www.merriam-webster.com/dictionary/campaign"],
   ["work","参加活动；开展运动","v.",["参加活动","开展运动","参加运动","作战"],["campaign-work"],"They campaigned for safer roads.","他们开展活动，争取更安全的道路。",null,"https://www.merriam-webster.com/dictionary/campaign"]
  ],[]);
  entry("contest",[
   ["competition","比赛；竞赛","n.",["比赛","竞赛"],["contest-competition","match-competition"],"She entered a short story contest.","她参加了一场短篇小说比赛。",null,"https://www.merriam-webster.com/dictionary/contest"],
   ["challenge","对……提出异议；争辩","v.",["对……提出异议","争辩","争论"],["contest-challenge","discontent-opposition","call-into-question"],"The family contested the terms of the will.","家人对遗嘱条款提出了异议。",null,"https://www.merriam-webster.com/dictionary/contest"],
   ["compete","争夺；竞逐","v.",["争夺","竞逐","竞争","争取"],["contest-compete"],"Two candidates will contest the seat.","两名候选人将争夺这个席位。",null,"https://www.merriam-webster.com/dictionary/contest"]
  ],[]);
  entry("hammer",[
   ["tool","锤子","n.",["锤子","锤","铁锤","钉锤"],["hammer-tool"],"He used a hammer to remove the bent nail.","他用锤子拔出了弯钉。",null,"https://www.merriam-webster.com/dictionary/hammer"],
   ["strike","锤打；连续敲击","v.",["锤打","连续敲击","敲打","钉","连续锤打"],["hammer-strike"],"Workers hammered the posts into the ground.","工人把柱子锤入地面。",null,"https://www.merriam-webster.com/dictionary/hammer"],
   ["agree","反复讨论达成","v.",["反复讨论达成"],["hammer-agree"],"The two sides hammered out an agreement overnight.","双方连夜反复商谈，达成了协议。","hammer out","https://www.merriam-webster.com/dictionary/hammer"]
  ],[{"terms":["锤头"],"decision":"scope-excluded","reason":"工具的锤头部件未单列为整把锤子的同义答案。","source":"https://www.merriam-webster.com/dictionary/hammer"}]);
  entry("intrude",[
   ["enter","闯入；打扰","v.",["闯入","打扰","侵入"],["intrude-enter"],"I did not want to intrude on their private conversation.","我不想打扰他们的私人谈话。","intrude on","https://www.merriam-webster.com/dictionary/intrude"],
   ["interrupt","侵扰；使分心","v.",["侵扰","使分心"],["intrude-interrupt"],"Thoughts of work kept intruding into her holiday.","工作的念头不断侵扰她的假期。",null,"https://www.merriam-webster.com/dictionary/intrude"]
  ],[{"terms":["强加于"],"decision":"scope-excluded","reason":"强加意见需 intrude something on 等结构，不与自己闯入的用法混合。","source":"https://www.merriam-webster.com/dictionary/intrude"}]);
  entry("hell",[
   ["religion","地狱","n.",["地狱","阴间"],["hell-religion"],"The painting depicts souls descending into hell.","这幅画描绘了灵魂坠入地狱的情景。",null,"https://www.merriam-webster.com/dictionary/hell"],
   ["misery","极大的痛苦；苦难处境","n.",["极大的痛苦","苦难处境","苦境"],["hell-misery"],"Those weeks without news were hell for the family.","那些杳无音信的日子对这家人来说是煎熬。",null,"https://www.merriam-webster.com/dictionary/hell"]
  ],[{"terms":["邪恶势力","毁坏","训斥","狂饮","飞驰"],"decision":"scope-excluded","reason":"狂饮、飞驰及训斥等俚语需上下文，本批只选宗教地狱与痛苦处境。","source":"https://www.merriam-webster.com/dictionary/hell"}]);
  entry("might",[
   ["possible","可能；也许","modal v.",["可能","也许"],["might-possible"],"We might need a larger vehicle for the boxes.","运这些箱子，我们可能需要一辆更大的车。",null,"https://www.merriam-webster.com/dictionary/might"],
   ["permission","可以（委婉请求）","modal v.",["可以（委婉请求）"],["might-permission"],"Might I borrow your pen for a moment?","我可以借用一下你的笔吗？",null,"https://www.merriam-webster.com/dictionary/might"],
   ["suggestion","不妨；应该（委婉建议）","modal v.",["不妨","应该（委婉建议）"],["might-suggestion"],"You might try restarting the machine.","你不妨试着重新启动机器。",null,"https://www.merriam-webster.com/dictionary/might"],
   ["power","力量；威力","n.",["力量","威力","权力"],["might-power"],"She pushed the door with all her might.","她用尽全力推门。",null,"https://www.merriam-webster.com/dictionary/might"]
  ],[]);
  entry("landing",[
   ["aircraft","着陆；登陆","n.",["着陆","登陆","降落","上岸"],["landing-aircraft"],"The pilot made a smooth landing.","飞行员平稳地着陆了。",null,"https://www.merriam-webster.com/dictionary/landing"],
   ["stairs","楼梯平台","n.",["楼梯平台"],["landing-stairs"],"A narrow window lit the upstairs landing.","一扇窄窗照亮了楼上的楼梯平台。",null,"https://www.merriam-webster.com/dictionary/landing"],
   ["water","登陆处；码头","n.",["登陆处","码头"],["landing-water"],"The boat waited at the small landing.","小船在小码头处等候。",null,"https://www.merriam-webster.com/dictionary/landing"]
  ],[]);
  entry("mislead",[
   ["deceive","误导；使产生错误印象","v.",["误导","使产生错误印象"],["mislead-deceive"],"The label could mislead customers about the ingredients.","标签可能会让顾客误解配料。",null,"https://www.merriam-webster.com/dictionary/mislead"]
  ],[]);
  entry("oppress",[
   ["rule","压迫；压制","v.",["压迫","压制"],["oppress-rule"],"The rulers oppressed anyone who opposed them.","统治者压迫所有反对他们的人。",null,"https://www.merriam-webster.com/dictionary/oppress"],
   ["burden","使压抑；使心情沉重","v.",["使压抑","使心情沉重","压抑","使烦恼"],["oppress-burden","take-offence"],"The memory of the accident oppressed her.","事故的记忆使她心情沉重。",null,"https://www.merriam-webster.com/dictionary/oppress"]
  ],[]);
  entry("offend",[
   ["upset","冒犯；使不快","v.",["冒犯","使不快"],["offend-upset"],"His rude comment offended several guests.","他无礼的评论冒犯了几位客人。",null,"https://www.merriam-webster.com/dictionary/offend"],
   ["break-law","违法；犯规","v.",["违法","犯规","犯罪","违反"],["offend-break-law","offence-violate"],"Drivers who offend again may lose their licences.","再次违法的司机可能会被吊销驾照。",null,"https://www.merriam-webster.com/dictionary/offend"]
  ],[{"terms":["进攻"],"decision":"scope-excluded","reason":"进攻旧义不在本批冒犯他人或违法的常用教学范围。","source":"https://www.merriam-webster.com/dictionary/offend"}]);
  entry("progress",[
   ["advance","进步；进展","n.",["进步","进展","发展","前进"],["progress-advance"],"The team made rapid progress on the repairs.","团队的维修工作进展迅速。",null,"https://www.merriam-webster.com/dictionary/progress"],
   ["develop","进步；向前发展","v.",["进步","向前发展"],["progress-develop"],"Her reading has progressed since January.","自一月以来，她的阅读能力进步了。",null,"https://www.merriam-webster.com/dictionary/progress"],
   ["proceed","进行；推移","v.",["进行","推移"],["progress-proceed"],"As the evening progressed, the room grew quieter.","随着夜晚推移，房间变得更安静。",null,"https://www.merriam-webster.com/dictionary/progress"]
  ],[]);
  entry("pitfall",[
   ["danger","隐患；陷阱","n.",["隐患","陷阱","易犯的错误","意想不到的困难"],["pitfall-danger","danger-pitfall"],"The guide explains common pitfalls in buying a used car.","这份指南解释了购买二手车时常见的陷阱。",null,"https://www.merriam-webster.com/dictionary/pitfall"]
  ],[{"terms":["诱惑","阴谋"],"decision":"scope-excluded","reason":"诱惑和阴谋不一定是隐藏的危险，本批不将其视为无条件同义词。","source":"https://www.merriam-webster.com/dictionary/pitfall"}]);
  entry("protest",[
   ["objection","抗议行动；异议","n.",["抗议","反对","抗议活动","抗议书","抗议行动","异议"],["protest-objection"],"Residents held a protest against the closure.","居民举行了抗议活动，反对关闭该设施。",null,"https://www.merriam-webster.com/dictionary/protest"],
   ["object","抗议；反对","v.",["抗议","反对","提出抗议"],["protest-object","rebellion-action"],"The workers protested against the wage cuts.","工人们抗议减薪。",null,"https://www.merriam-webster.com/dictionary/protest"],
   ["insist","坚决表示；申辩","v.",["坚决表示","申辩","坚决声称"],["protest-insist"],"He protested that he had followed every instruction.","他坚称自己遵守了每一条指示。",null,"https://www.merriam-webster.com/dictionary/protest"]
  ],[]);
  entry("rebel",[
   ["person","反叛者；叛军成员","n.",["反叛者","叛军成员"],["rebel-person","rebellion-people"],"The rebels controlled the northern road.","叛军控制了北方的道路。",null,"https://www.merriam-webster.com/dictionary/rebel"],
   ["rise","反叛；反抗","v.",["反叛","反抗","造反","抵抗"],["rebel-rise","rebellion-action"],"The villagers rebelled against the new taxes.","村民们起来反抗新税。",null,"https://www.merriam-webster.com/dictionary/rebel"]
  ],[{"terms":["叛徒","反感","造反的","反抗的"],"decision":"scope-excluded","reason":"反叛者不一定是背叛者；形容词反抗的与名词、动词用法不自动互推。","source":"https://www.merriam-webster.com/dictionary/rebel"}]);
  entry("torture",[
   ["pain","酷刑；折磨","n.",["酷刑","折磨"],["torture-pain"],"The prisoners described years of torture.","囚犯描述了多年遭受的酷刑。",null,"https://www.merriam-webster.com/dictionary/torture"],
   ["harm","拷打；使痛苦","v.",["拷打","使痛苦","拷问"],["torture-harm"],"The uncertainty tortured him more than the delay.","不确定性比延误本身更折磨他。",null,"https://www.merriam-webster.com/dictionary/torture"]
  ],[{"terms":["苦闷","曲解","使弯曲"],"decision":"scope-excluded","reason":"曲解和使弯曲等词源性旧译不在本批酷刑或心理折磨范围。","source":"https://www.merriam-webster.com/dictionary/torture"}]);
  entry("darling",[
   ["person","亲爱的人；宝贝","n.",["亲爱的人","宝贝","可爱的人"],["darling-person","loved-person"],"Come here, darling, and look at this.","过来，宝贝，看看这个。",null,"https://www.merriam-webster.com/dictionary/darling"],
   ["favourite","宠儿；受宠爱的人","n.",["宠儿","受宠爱的人"],["darling-favourite"],"The young designer became the darling of the fashion press.","这位年轻设计师成了时尚媒体的宠儿。",null,"https://www.merriam-webster.com/dictionary/darling"],
   ["dear","亲爱的；心爱的","adj.",["亲爱的","心爱的","可爱的"],["darling-dear","adore-beloved"],"She kept a photograph of her darling grandson by the bed.","她把心爱的孙子的照片放在床边。",null,"https://www.merriam-webster.com/dictionary/darling"]
  ],[{"terms":["可爱的物"],"decision":"scope-excluded","reason":"本批亲爱的人为人物称呼，物品引申不另列。","source":"https://www.merriam-webster.com/dictionary/darling"}]);
  entry("beloved",[
   ["dear","深爱的；心爱的","adj.",["深爱的","心爱的"],["beloved-dear","adore-beloved"],"She returned to her beloved seaside village.","她回到了心爱的海边村庄。",null,"https://www.merriam-webster.com/dictionary/beloved"],
   ["person","心爱的人","n.",["心爱的人"],["beloved-person","loved-person"],"He wrote a song for his beloved.","他为心爱的人写了一首歌。",null,"https://www.merriam-webster.com/dictionary/beloved"]
  ],[]);
  entry("chase",[
   ["pursue","追赶；追捕","v.",["追赶","追捕","狩猎"],["chase-pursue","pursuit-chase"],"The dog chased a ball across the park.","狗追着球跑过公园。",null,"https://www.merriam-webster.com/dictionary/chase"],
   ["seek","追求；争取","v.",["追求","争取"],["chase-seek"],"The firm is chasing a major overseas contract.","这家公司正在争取一份重要的海外合同。",null,"https://www.merriam-webster.com/dictionary/chase"],
   ["pursuit","追逐；追捕行动","n.",["追逐","追捕行动"],["chase-pursuit"],"The chase ended at the river bank.","追捕在河岸边结束了。",null,"https://www.merriam-webster.com/dictionary/chase"]
  ],[{"terms":["雕刻","在...上镶嵌宝石","奔跑"],"decision":"scope-excluded","reason":"金属雕花及镶嵌是另一组工艺术语；奔跑不必然有追逐目标。","source":"https://www.merriam-webster.com/dictionary/chase"}]);
  entry("sole",[
   ["only","唯一的；仅有的","adj.",["唯一的","仅有的","单独的"],["sole-only"],"She was the sole passenger on the bus.","她是公交车上唯一的乘客。",null,"https://www.merriam-webster.com/dictionary/sole"],
   ["foot","脚底；鞋底","n.",["脚底","鞋底","脚掌","底部"],["sole-foot"],"There was a stone stuck in the sole of my shoe.","我的鞋底卡着一颗石子。",null,"https://www.merriam-webster.com/dictionary/sole"],
   ["fish","鳎鱼","n.",["鳎鱼"],["sole-fish"],"The restaurant serves sole with lemon butter.","这家餐馆供应配柠檬黄油的鳎鱼。",null,"https://www.merriam-webster.com/dictionary/sole"]
  ],[{"terms":["独身的","上鞋底","触底"],"decision":"scope-excluded","reason":"独身婚姻状态与唯一的不同；上鞋底和触底动作未从名词自动认证。","source":"https://www.merriam-webster.com/dictionary/sole"}]);
  entry("nursing",[
   ["care","护理；看护工作","n.",["护理","看护工作","看护"],["nursing-care"],"She trained in nursing before joining the clinic.","加入诊所前，她接受了护理培训。",null,"https://www.merriam-webster.com/dictionary/nursing"],
   ["feeding","哺乳的","adj.",["哺乳的","喂乳"],["nursing-feeding"],"The centre provides a quiet room for nursing mothers.","这个中心为哺乳期母亲提供安静的房间。",null,"https://www.merriam-webster.com/dictionary/nursing"]
  ],[{"terms":["养育"],"decision":"scope-excluded","reason":"一般养育范围比护理或哺乳广，未作为无条件同义译法。","source":"https://www.merriam-webster.com/dictionary/nursing"}]);
  entry("toil",[
   ["work","辛苦工作；苦干","v.",["辛苦工作","苦干","跋涉"],["toil-work","exhausted-toil"],"They toiled in the fields until sunset.","他们在田里辛勤劳作，直到日落。",null,"https://www.merriam-webster.com/dictionary/toil"],
   ["labour","辛劳；苦工","n.",["辛劳","苦工","辛苦"],["toil-labour"],"The harvest was the result of months of toil.","收成是几个月辛劳的成果。",null,"https://www.merriam-webster.com/dictionary/toil"]
  ],[{"terms":["网","罗网","圈套"],"decision":"scope-excluded","reason":"网及圈套是另一组名词，不能混入辛苦工作。","source":"https://www.merriam-webster.com/dictionary/toil"}]);
  entry("deed",[
   ["action","行为；事迹","n.",["行为","事迹"],["deed-action"],"The award recognized her brave deed.","这项奖励表彰了她的英勇行为。",null,"https://www.merriam-webster.com/dictionary/deed"],
   ["document","契据；产权证书","n.",["契据","产权证书","契约"],["deed-document"],"Keep the deeds to the house in a secure place.","把房屋产权证保存在安全的地方。",null,"https://www.merriam-webster.com/dictionary/deed"]
  ],[{"terms":["实行","立契转让"],"decision":"scope-excluded","reason":"实行是动词式旧译；立契转让未从契据名词自动建立。","source":"https://www.merriam-webster.com/dictionary/deed"}]);
  entry("mow",[
   ["cut","割草；刈割","v.",["割草","刈割"],["mow-cut","mass-cutting"],"He mows the lawn every other week.","他每隔一周修剪一次草坪。",null,"https://www.merriam-webster.com/dictionary/mow"],
   ["knock","成片击倒；大量杀伤","v.",["成片击倒","大量杀伤"],["mow-knock"],"The storm mowed down a row of young trees.","暴风雨刮倒了一排小树。","mow down","https://www.merriam-webster.com/dictionary/mow"]
  ],[{"terms":["草堆","皱眉","怪脸","做怪脸"],"decision":"scope-excluded","reason":"草堆与割草读音不同；做怪脸是另一词义组，本批仅选割草及 mow down。","source":"https://www.merriam-webster.com/dictionary/mow"}]);
  entry("glimpse",[
   ["look","一瞥；短暂看到","n.",["一瞥","短暂看到","一闪"],["glimpse-look","look-brief-noun"],"We caught a glimpse of the sea between the buildings.","我们从楼房之间瞥见了大海。",null,"https://www.merriam-webster.com/dictionary/glimpse"],
   ["see","瞥见","v.",["瞥见","投以一瞥"],["glimpse-see","see-brief"],"She glimpsed a fox behind the hedge.","她瞥见树篱后面有一只狐狸。",null,"https://www.merriam-webster.com/dictionary/glimpse"]
  ],[{"terms":["闪烁不定"],"decision":"scope-excluded","reason":"闪烁不定不是一次短暂看见，未并入瞥见义。","source":"https://www.merriam-webster.com/dictionary/glimpse"}]);
  entry("peep",[
   ["look","偷看；窥视","v.",["偷看","窥视"],["peep-look","see-brief"],"He peeped through a gap in the curtain.","他透过窗帘的缝隙偷看。",null,"https://www.merriam-webster.com/dictionary/peep"],
   ["sound","轻微的吱声","n.",["轻微的吱声","吱吱声","嘀咕抱怨声"],["peep-sound"],"The sleeping baby did not make a peep.","熟睡的婴儿一点声音也没发出。",null,"https://www.merriam-webster.com/dictionary/peep"],
   ["look-noun","偷偷的一瞥","n.",["偷偷的一瞥","一瞥","不完全的景象"],["peep-look-noun","look-brief-noun"],"She took a quick peep inside the box.","她迅速朝盒子里偷看了一眼。",null,"https://www.merriam-webster.com/dictionary/peep"],
   ["appear","开始出现；露出","v.",["开始出现","露出","初现","出现","使隐约显现"],["peep-appear"],"The sun peeped through a gap in the clouds.","太阳从云缝中露了出来。",null,"https://www.merriam-webster.com/dictionary/peep"]
  ],[{"terms":["汽车喇叭声","吱吱叫"],"decision":"scope-excluded","reason":"汽车喇叭与小鸟叫声为具体声源；本批轻微声响名词不自动生成所有发声动词。","source":"https://www.merriam-webster.com/dictionary/peep"}]);
  entry("twin",[
   ["person","双胞胎之一；孪生者","n.",["双胞胎之一","孪生者","双胞胎中一人","一对非常相像的人(或物)中的一个"],["twin-person"],"One twin likes swimming, while the other prefers running.","双胞胎中的一个喜欢游泳，另一个更喜欢跑步。",null,"https://www.merriam-webster.com/dictionary/twin"],
   ["paired","成对的；双的","adj.",["成对的","双的","双胞胎的","孪生的","成对"],["twin-paired"],"The hotel room has twin beds.","旅馆房间里有两张单人床。",null,"https://www.merriam-webster.com/dictionary/twin"],
   ["link","使结为友好关系；配对","v.",["使结为友好关系","配对","使成对"],["twin-link"],"The town is twinned with a city in France.","这个镇与法国的一座城市结为友好城市。",null,"https://www.merriam-webster.com/dictionary/twin"]
  ],[{"terms":["生双胞胎","怀(双胞胎)"],"decision":"scope-excluded","reason":"生或怀双胞胎的生殖动词未从双胞胎名词自动认证。","source":"https://www.merriam-webster.com/dictionary/twin"}]);
  entry("haste",[
   ["hurry","急忙；迅速","n.",["急忙","迅速","匆忙"],["haste-hurry","hurry-haste"],"In her haste, she left the keys behind.","她匆忙之中忘了带钥匙。",null,"https://www.merriam-webster.com/dictionary/haste"]
  ],[]);
  entry("overtake",[
   ["pass","赶上并超过","v.",["赶上并超过","赶上"],["overtake-pass"],"The cyclist overtook the slow-moving tractor.","骑车人超过了缓慢行驶的拖拉机。",null,"https://www.merriam-webster.com/dictionary/overtake"],
   ["affect","突然降临；压倒","v.",["突然降临","压倒","突然降临于"],["overtake-affect"],"Exhaustion overtook them before they reached camp.","还没到营地，他们就疲惫不堪了。",null,"https://www.merriam-webster.com/dictionary/overtake"]
  ],[{"terms":["代替"],"decision":"scope-excluded","reason":"代替并非所有赶上或超越的含义，旧译不作为通用同义答案。","source":"https://www.merriam-webster.com/dictionary/overtake"}]);
  entry("scrape",[
   ["remove","刮掉；刮擦","v.",["刮掉","刮擦","刮","擦","挖","擦掉"],["scrape-remove"],"Scrape the mud off your boots before coming in.","进来前刮掉靴子上的泥。",null,"https://www.merriam-webster.com/dictionary/scrape"],
   ["injure","擦伤","v.",["擦伤","擦痕"],["scrape-injure"],"He scraped his elbow against the rough wall.","他的手肘被粗糙的墙面擦伤了。",null,"https://www.merriam-webster.com/dictionary/scrape"],
   ["difficulty","困境；麻烦","n.",["困境","麻烦"],["scrape-difficulty"],"Her quick thinking got us out of a scrape.","她反应敏捷，帮我们摆脱了困境。",null,"https://www.merriam-webster.com/dictionary/scrape"],
   ["manage","勉强通过；勉强维持","v.",["勉强通过","勉强维持"],["scrape-manage"],"He scraped through the examination with one mark to spare.","他只比及格线高一分，勉强通过了考试。","scrape through","https://www.merriam-webster.com/dictionary/scrape"]
  ],[{"terms":["刮擦声","刮出刺耳声","挖成","积蓄"],"decision":"scope-excluded","reason":"积蓄需 scrape together；刮擦声与挖成未纳入本批动作和困境。","source":"https://www.merriam-webster.com/dictionary/scrape"}]);
  entry("shuffle",[
   ["walk","拖着脚走","v.",["拖着脚走","曳步","拖曳"],["shuffle-walk"],"The tired passengers shuffled towards the exit.","疲惫的乘客拖着脚走向出口。",null,"https://www.merriam-webster.com/dictionary/shuffle"],
   ["cards","洗牌；打乱次序","v.",["洗牌","打乱次序","洗纸牌","混洗"],["shuffle-cards"],"Shuffle the cards before dealing.","发牌前先洗牌。",null,"https://www.merriam-webster.com/dictionary/shuffle"],
   ["reorganize","调整；重新安排","v.",["调整","重新安排"],["shuffle-reorganize"],"The manager shuffled the staff between departments.","经理调整了各部门的人员配置。",null,"https://www.merriam-webster.com/dictionary/shuffle"]
  ],[{"terms":["混乱","蒙混","马虎地做","笨手笨脚地穿(脱)衣","推诿"],"decision":"scope-excluded","reason":"推诿、敷衍和穿衣搭配未单列；本批区分曳步、洗牌与人员调整。","source":"https://www.merriam-webster.com/dictionary/shuffle"}]);
  entry("tow",[
   ["pull","拖；牵引","v.",["拖","牵引","拉"],["tow-pull"],"A recovery truck towed the broken car away.","救援车拖走了坏掉的汽车。",null,"https://www.merriam-webster.com/dictionary/tow"],
   ["operation","拖运；牵引","n.",["拖运","牵引"],["tow-operation"],"The driver called for a tow.","司机叫了拖车服务。",null,"https://www.merriam-webster.com/dictionary/tow"]
  ],[{"terms":["拖绳","拖轮"],"decision":"scope-excluded","reason":"拖绳、拖轮为执行拖曳的具体物件，不等于一次拖运。","source":"https://www.merriam-webster.com/dictionary/tow"}]);
  entry("integral",[
   ["essential","不可缺少的；构成整体的","adj.",["不可缺少的","构成整体的","固有的","整体的"],["integral-essential"],"Trust is an integral part of their partnership.","信任是他们合作关系中不可缺少的一部分。",null,"https://www.merriam-webster.com/dictionary/integral"],
   ["built-in","内置的；一体的","adj.",["内置的","一体的"],["integral-built-in"],"The desk has an integral lamp.","这张书桌有一盏内置台灯。",null,"https://www.merriam-webster.com/dictionary/integral"],
   ["mathematics","积分","n.",["积分"],["integral-mathematics"],"The integral gives the area under the curve.","该积分给出了曲线下方的面积。",null,"https://www.merriam-webster.com/dictionary/integral"]
  ],[{"terms":["整体","整数","整数的","积分的"],"decision":"scope-excluded","reason":"整数、整体名词和数学形容词未纳入本批必要组成部分、内置及积分名词范围。","source":"https://www.merriam-webster.com/dictionary/integral"}]);
  entry("baptise",[
   ["ritual","给……施洗礼","v.",["给……施洗礼","给...施洗礼"],["baptise-ritual","holy-bless"],"The minister baptised the baby during the Sunday service.","牧师在周日礼拜时给婴儿施了洗礼。",null,"https://www.merriam-webster.com/dictionary/baptize"],
   ["name","命名；取名","v.",["命名","取名"],["baptise-name"],"They baptised the new boat Seabird.","他们给新船取名为“海鸟”。",null,"https://www.merriam-webster.com/dictionary/baptize"]
  ],[{"terms":["使纯化","洗炼"],"decision":"scope-excluded","reason":"精神净化的比喻未单列；保留 baptise 拼写并以词典明确列出的 baptize 变体条目为依据。","source":"https://www.merriam-webster.com/dictionary/baptize"}]);
  entry("obsess",[
   ["preoccupy","使着迷；使困扰","v.",["使着迷","使困扰","迷住"],["obsess-preoccupy","mental-preoccupation"],"The unsolved puzzle obsessed him for weeks.","那道未解的谜题让他连续几周念念不忘。",null,"https://www.merriam-webster.com/dictionary/obsess"],
   ["dwell","对……过分忧虑；念念不忘","v.",["对……过分忧虑","念念不忘"],["obsess-dwell"],"Try not to obsess over every small mistake.","尽量不要对每个小错误都耿耿于怀。","obsess over","https://www.merriam-webster.com/dictionary/obsess"]
  ],[]);
  entry("gamble",[
   ["bet","赌博；打赌","v.",["赌博","打赌"],["gamble-bet"],"He used to gamble on horse races.","他以前常赌赛马。",null,"https://www.merriam-webster.com/dictionary/gamble"],
   ["risk","冒险；以……为赌注","v.",["冒险","以……为赌注","孤注一掷"],["gamble-risk"],"The company gambled its future on a new product.","公司把未来押在了一款新产品上。",null,"https://www.merriam-webster.com/dictionary/gamble"],
   ["venture","冒险行动；赌注","n.",["冒险行动","赌注"],["gamble-venture"],"Opening the shop was a gamble that paid off.","开这家店是一次获得了回报的冒险。",null,"https://www.merriam-webster.com/dictionary/gamble"]
  ],[]);
  entry("marvel",[
   ["wonder","奇迹；令人惊叹的人或物","n.",["奇迹","令人惊叹的人或物","奇异事物","罕见例子"],["marvel-wonder"],"The bridge is a marvel of engineering.","这座桥是工程上的奇迹。",null,"https://www.merriam-webster.com/dictionary/marvel"],
   ["amaze","感到惊叹","v.",["感到惊叹","惊异于","惊异"],["marvel-amaze"],"We marvelled at the detail in the tiny painting.","我们对那幅微型画的精细程度赞叹不已。","marvel at","https://www.merriam-webster.com/dictionary/marvel"]
  ],[]);
  entry("maze",[
   ["passages","迷宫","n.",["迷宫"],["maze-passages"],"The children found the centre of the hedge maze.","孩子们找到了树篱迷宫的中心。",null,"https://www.merriam-webster.com/dictionary/maze"],
   ["confusion","错综复杂的事物","n.",["错综复杂的事物"],["maze-confusion"],"Applicants face a maze of different forms.","申请者面对着一堆错综复杂的表格。",null,"https://www.merriam-webster.com/dictionary/maze"]
  ],[{"terms":["迷惘","使迷惘","使混乱","迷失"],"decision":"scope-excluded","reason":"使迷惘的动词与迷宫名词不同；本批复杂事物比喻仍以名词为范围。","source":"https://www.merriam-webster.com/dictionary/maze"}]);
  entry("invoke",[
   ["law","援引；诉诸","v.",["援引","诉诸"],["invoke-law"],"The lawyer invoked a clause in the original contract.","律师援引了原合同中的一项条款。",null,"https://www.merriam-webster.com/dictionary/invoke"],
   ["help","祈求；恳求帮助","v.",["祈求","恳求帮助","恳求","请求"],["invoke-help"],"The sailors invoked the gods for protection.","水手们祈求神灵保佑。",null,"https://www.merriam-webster.com/dictionary/invoke"],
   ["call","调用；使运行","v.",["调用","使运行"],["invoke-call"],"The command invokes a separate search tool.","这条命令调用一个独立的搜索工具。",null,"https://www.merriam-webster.com/dictionary/invoke"]
  ],[{"terms":["实行","引起"],"decision":"scope-excluded","reason":"泛指实行或引起过宽；法律援引、祈求和程序调用已明确限定。","source":"https://www.merriam-webster.com/dictionary/invoke"}]);
  entry("loom",[
   ["machine","织布机","n.",["织布机"],["loom-machine"],"The weaver repaired a broken thread on the loom.","织工修补了织布机上的一根断线。",null,"https://www.merriam-webster.com/dictionary/loom"],
   ["appear","隐约出现；赫然耸现","v.",["隐约出现","赫然耸现","朦胧地出现","隐约可见","可怕地出现"],["loom-appear"],"A dark cliff loomed through the fog.","一座黑色悬崖在雾中隐约出现。",null,"https://www.merriam-webster.com/dictionary/loom"],
   ["threaten","逼近；显得即将发生","v.",["逼近","显得即将发生"],["loom-threaten"],"A deadline loomed at the end of the week.","周末的截止日期迫在眉睫。",null,"https://www.merriam-webster.com/dictionary/loom"]
  ],[{"terms":["若隐若现的景象"],"decision":"scope-excluded","reason":"景象名词未从隐约出现的动词自动认证。","source":"https://www.merriam-webster.com/dictionary/loom"}]);
  entry("dispose",[
   ["remove","处理掉；丢弃","v.",["处理掉","丢弃","处理","处置"],["dispose-remove"],"Dispose of the empty containers safely.","安全处理这些空容器。","dispose of","https://www.merriam-webster.com/dictionary/dispose"],
   ["incline","使倾向于","v.",["使倾向于"],["dispose-incline"],"Her experience disposed her to distrust easy promises.","她的经历使她倾向于不相信轻易作出的承诺。","dispose to","https://www.merriam-webster.com/dictionary/dispose"],
   ["arrange","布置；排列","v.",["布置","排列"],["dispose-arrange"],"The chairs were disposed in a semicircle.","椅子排列成了半圆形。",null,"https://www.merriam-webster.com/dictionary/dispose"]
  ],[]);
  entry("resort",[
   ["place","度假胜地；旅游地","n.",["度假胜地","旅游地","常去之地"],["resort-place"],"The resort is busy throughout the summer.","这个度假地整个夏天都很热闹。",null,"https://www.merriam-webster.com/dictionary/resort"],
   ["recourse","可采取的办法；求助对象","n.",["可采取的办法","求助对象","手段","凭借"],["resort-recourse"],"Surgery was considered a last resort.","手术被视为最后的办法。",null,"https://www.merriam-webster.com/dictionary/resort"],
   ["use","诉诸；求助于","v.",["诉诸","求助于"],["resort-use"],"They settled the dispute without resorting to threats.","他们没有诉诸威胁就解决了争端。","resort to","https://www.merriam-webster.com/dictionary/resort"]
  ],[{"terms":["常去"],"decision":"scope-excluded","reason":"常去的动词需明确地点，不与度假地名词或 resort to 求助于混合。","source":"https://www.merriam-webster.com/dictionary/resort"}]);
  entry("ooze",[
   ["seep","渗出；慢慢流出","v.",["渗出","慢慢流出","渗流","泄漏"],["ooze-seep"],"Water oozed from a crack in the stone.","水从石头的裂缝里渗出。",null,"https://www.merriam-webster.com/dictionary/ooze"],
   ["show","洋溢；充分流露","v.",["洋溢","充分流露"],["ooze-show"],"The presenter oozed confidence on stage.","主持人在台上自信满满。",null,"https://www.merriam-webster.com/dictionary/ooze"],
   ["mud","淤泥；软泥","n.",["淤泥","软泥"],["ooze-mud"],"The boots sank into the ooze at the river's edge.","靴子陷入了河边的淤泥。",null,"https://www.merriam-webster.com/dictionary/ooze"]
  ],[{"terms":["分泌物"],"decision":"scope-excluded","reason":"分泌物为物质名词，不等同于渗出动作或河底淤泥。","source":"https://www.merriam-webster.com/dictionary/ooze"}]);
  entry("testify",[
   ["witness","作证；证明","v.",["作证","证明","声明"],["testify-witness"],"She testified that the gate was already open.","她作证说大门当时已经开着。",null,"https://www.merriam-webster.com/dictionary/testify"],
   ["evidence","表明；证实","v.",["表明","证实"],["testify-evidence"],"The old photographs testify to the town's growth.","这些老照片证明了城镇的发展。","testify to","https://www.merriam-webster.com/dictionary/testify"]
  ],[]);
  entry("muffle",[
   ["sound","减弱声音；使低沉","v.",["减弱声音","使低沉","抑制"],["muffle-sound","hearing-muffle","silence-quiet-verb","quiet-cause"],"Thick curtains muffled the traffic noise.","厚窗帘减弱了交通噪声。",null,"https://www.merriam-webster.com/dictionary/muffle"],
   ["wrap","裹住；包住","v.",["裹住","包住","围裹"],["muffle-wrap"],"She muffled her face in a woollen scarf.","她用羊毛围巾裹住脸。",null,"https://www.merriam-webster.com/dictionary/muffle"]
  ],[{"terms":["低沉的声音","拳击手套","唇鼻部","围巾","头巾","发低沉的声音"],"decision":"scope-excluded","reason":"拳击手套、唇鼻部及围巾等物件名词不并入裹住或减弱声音的动词。","source":"https://www.merriam-webster.com/dictionary/muffle"}]);
  entry("overshadow",[
   ["importance","使黯然失色；使相形见绌","v.",["使黯然失色","使相形见绌","使失色","使蒙上阴影"],["overshadow-importance"],"The scandal overshadowed the team's achievement.","丑闻掩盖了这支队伍的成就。",null,"https://www.merriam-webster.com/dictionary/overshadow"],
   ["shadow","遮蔽；在……上投下阴影","v.",["遮蔽","在……上投下阴影","遮阴","使阴暗"],["overshadow-shadow"],"Tall pines overshadow the small house.","高大的松树遮蔽着那座小房子。",null,"https://www.merriam-webster.com/dictionary/overshadow"]
  ],[]);
  entry("bless",[
   ["prayer","为……祈福；祝福","v.",["为……祈福","祝福","祈佑","使神圣化"],["bless-prayer","holy-bless"],"The priest blessed the travellers before they left.","牧师在旅人出发前为他们祈福。",null,"https://www.merriam-webster.com/dictionary/bless"],
   ["endow","使有幸拥有；赋予","v.",["使有幸拥有","赋予"],["bless-endow"],"The valley is blessed with rich soil.","这片山谷有幸拥有肥沃的土壤。","be blessed with","https://www.merriam-webster.com/dictionary/bless"],
   ["approve","赞许；认可","v.",["赞许","认可"],["bless-approve"],"The council blessed the plan after a brief discussion.","议会简短讨论后认可了这项计划。",null,"https://www.merriam-webster.com/dictionary/bless"]
  ],[]);
  entry("farewell",[
   ["goodbye","告别；道别的话","n.",["告别","道别的话","辞行","再见","再会"],["farewell-goodbye"],"They waved a final farewell from the train.","他们从火车上挥手作最后的告别。",null,"https://www.merriam-webster.com/dictionary/farewell"],
   ["parting","告别的；送行的","adj.",["告别的","送行的"],["farewell-parting"],"Her colleagues arranged a farewell dinner.","同事们安排了一顿送别晚餐。",null,"https://www.merriam-webster.com/dictionary/farewell"]
  ],[]);
  entry("salute",[
   ["respect","敬礼；致敬","v.",["敬礼","致敬","行礼","放礼炮"],["salute-respect"],"The officer saluted as the flag was raised.","升旗时，军官行了礼。",null,"https://www.merriam-webster.com/dictionary/salute"],
   ["praise","赞扬；致意","v.",["赞扬","致意","向...致意"],["salute-praise"],"The exhibition salutes the work of local artists.","展览向当地艺术家的创作致敬。",null,"https://www.merriam-webster.com/dictionary/salute"],
   ["gesture","敬礼的动作；致敬","n.",["敬礼的动作","致敬","礼炮"],["salute-gesture"],"He raised his hand in salute.","他举手敬礼。",null,"https://www.merriam-webster.com/dictionary/salute"]
  ],[{"terms":["问候","迎接","招呼"],"decision":"scope-excluded","reason":"一般迎接和招呼不一定是致敬，本批只选有敬意的动作或称赞。","source":"https://www.merriam-webster.com/dictionary/salute"}]);
  entry("invitation",[
   ["request","邀请；请柬","n.",["邀请","请柬"],["invitation-request"],"We received an invitation to the opening ceremony.","我们收到了一张开幕式请柬。",null,"https://www.merriam-webster.com/dictionary/invitation"],
   ["encouragement","招致某事的诱因","n.",["招致某事的诱因","引诱","吸引"],["invitation-encouragement"],"An unlocked bicycle is an invitation to theft.","未上锁的自行车容易招来盗窃。",null,"https://www.merriam-webster.com/dictionary/invitation"]
  ],[{"terms":["招待"],"decision":"scope-excluded","reason":"招待某人的行为不等于发出邀请，本批不将其作为通用答案。","source":"https://www.merriam-webster.com/dictionary/invitation"}]);
  entry("retrospect",[
   ["review","回顾；追溯","n.",["回顾","追溯","追忆","回溯"],["retrospect-review"],"In retrospect, we should have left earlier.","回头看，我们本该早点出发。","in retrospect","https://www.merriam-webster.com/dictionary/retrospect"]
  ],[]);
  entry("pervade",[
   ["spread","弥漫；遍及","v.",["弥漫","遍及","弥漫于","遍及于","流行于","蔓延","渗透于","充满"],["pervade-spread"],"The smell of fresh bread pervaded the house.","新鲜面包的香味弥漫在房子里。",null,"https://www.merriam-webster.com/dictionary/pervade"]
  ],[]);
  entry("repetition",[
   ["repeat","重复；反复","n.",["重复","反复"],["repetition-repeat","repeated-event"],"Repetition helped her remember the new names.","反复练习帮助她记住了新名字。",null,"https://www.merriam-webster.com/dictionary/repetition"],
   ["exercise","一次重复动作","n.",["一次重复动作"],["repetition-exercise"],"Do ten repetitions of the exercise on each side.","身体两侧各把这个动作重复十次。",null,"https://www.merriam-webster.com/dictionary/repetition"]
  ],[{"terms":["背诵","循环","复制品","副本"],"decision":"scope-excluded","reason":"背诵、复制品和副本未纳入反复动作；循环也不必然表示重复同一项。","source":"https://www.merriam-webster.com/dictionary/repetition"}]);
  entry("stature",[
   ["height","身高；身材","n.",["身高","身材","高度"],["stature-height"],"Despite his short stature, he could reach the top shelf.","虽然他个子矮，却能够到最上层架子。",null,"https://www.merriam-webster.com/dictionary/stature"],
   ["standing","地位；声望","n.",["地位","声望"],["stature-standing","height-standing"],"The discovery increased her stature as a scientist.","这项发现提高了她作为科学家的声望。",null,"https://www.merriam-webster.com/dictionary/stature"]
  ],[]);
  entry("backbone",[
   ["spine","脊柱；脊梁","n.",["脊柱","脊梁","脊椎"],["backbone-spine"],"The scan showed no damage to his backbone.","扫描显示他的脊柱没有受损。",null,"https://www.merriam-webster.com/dictionary/backbone"],
   ["support","支柱；骨干","n.",["支柱","骨干"],["backbone-support","helpful-backbone"],"Small farms form the backbone of the local economy.","小农场构成了当地经济的支柱。",null,"https://www.merriam-webster.com/dictionary/backbone"],
   ["courage","骨气；毅力","n.",["骨气","毅力","志气"],["backbone-courage"],"It took backbone to reject such a generous offer.","拒绝这样优厚的条件需要骨气。",null,"https://www.merriam-webster.com/dictionary/backbone"]
  ],[{"terms":["主干网","主干网点"],"decision":"scope-excluded","reason":"主干网为计算机专业用法，主干网点也不是脊柱的直接同义词。","source":"https://www.merriam-webster.com/dictionary/backbone"}]);
  entry("contemplate",[
   ["consider","深思；仔细考虑","v.",["深思","仔细考虑","沉思","冥思苦想"],["contemplate-consider","reflect-think","ponder-reason","weigh-consider"],"She contemplated the consequences before replying.","她回复前仔细考虑了后果。",null,"https://www.merriam-webster.com/dictionary/contemplate"],
   ["plan","考虑要做；打算","v.",["考虑要做","打算","盘算"],["contemplate-plan"],"They are contemplating a move to the coast.","他们正考虑搬到海边。",null,"https://www.merriam-webster.com/dictionary/contemplate"],
   ["look","凝视；端详","v.",["凝视","端详","注视"],["contemplate-look","thoughtful-look"],"He contemplated the portrait in silence.","他默默端详着那幅肖像。",null,"https://www.merriam-webster.com/dictionary/contemplate"]
  ],[]);
  entry("contempt",[
   ["disdain","轻蔑；鄙视","n.",["轻蔑","鄙视","轻视","藐视"],["contempt-disdain"],"She made no attempt to hide her contempt for dishonesty.","她毫不掩饰自己对不诚实行为的鄙视。",null,"https://www.merriam-webster.com/dictionary/contempt"],
   ["court","藐视法庭","n.",["藐视法庭"],["contempt-court"],"The judge warned him that he could be held in contempt.","法官警告他，他可能被判藐视法庭。",null,"https://www.merriam-webster.com/dictionary/contempt"]
  ],[{"terms":["侮辱"],"decision":"scope-excluded","reason":"侮辱是表达行为，轻蔑是态度；本批另区分藐视法庭术语。","source":"https://www.merriam-webster.com/dictionary/contempt"}]);
  entry("curse",[
   ["wish-harm","诅咒；咒语","n.",["诅咒","咒语"],["curse-wish-harm"],"The tale begins with a curse on the royal family.","故事以针对王室的一个诅咒开始。",null,"https://www.merriam-webster.com/dictionary/curse"],
   ["burden","祸根；祸害","n.",["祸根","祸害"],["curse-burden"],"Persistent damp was the curse of the old cottage.","长期潮湿是那座旧乡间小屋的大患。",null,"https://www.merriam-webster.com/dictionary/curse"],
   ["swear","咒骂；说脏话","v.",["咒骂","说脏话"],["curse-swear","swear-curse"],"He cursed when the ladder slipped.","梯子滑动时，他骂了一句。",null,"https://www.merriam-webster.com/dictionary/curse"],
   ["condemn","诅咒；咒诅某人","v.",["诅咒","咒诅某人"],["curse-condemn"],"The witch cursed the prince in the story.","故事里的女巫诅咒了王子。",null,"https://www.merriam-webster.com/dictionary/curse"]
  ],[]);
  entry("glare",[
   ["look","怒目而视","v.",["怒目而视","瞪视","瞪眼表示"],["glare-look","thoughtful-look"],"She glared at the person who pushed past her.","她怒视着那个从身边挤过去的人。",null,"https://www.merriam-webster.com/dictionary/glare"],
   ["light","刺眼的强光","n.",["刺眼的强光","闪耀光","刺眼","发眩光"],["glare-light"],"The glare from the snow made driving difficult.","雪地的反光十分刺眼，开车很困难。",null,"https://www.merriam-webster.com/dictionary/glare"],
   ["stare","怒视的目光","n.",["怒视的目光"],["glare-stare"],"His angry glare silenced the room.","他愤怒的目光使屋里安静下来。",null,"https://www.merriam-webster.com/dictionary/glare"]
  ],[]);
  entry("flatter",[
   ["praise","奉承；讨好","v.",["奉承","讨好","阿谀"],["flatter-praise"],"The salesman flattered the customer to win a sale.","推销员奉承顾客以促成交易。",null,"https://www.merriam-webster.com/dictionary/flatter"],
   ["please","使感到荣幸；使高兴","v.",["使感到荣幸","使高兴"],["flatter-please"],"She was flattered by the invitation to speak.","受邀演讲让她感到荣幸。",null,"https://www.merriam-webster.com/dictionary/flatter"],
   ["suit","使显得好看","v.",["使显得好看"],["flatter-suit"],"The dark jacket flatters his figure.","深色夹克使他的身材显得更好看。",null,"https://www.merriam-webster.com/dictionary/flatter"]
  ],[{"terms":["平面锤"],"decision":"scope-excluded","reason":"平面锤属另一个工具词形来源，不并入奉承或使显得好看。","source":"https://www.merriam-webster.com/dictionary/flatter"}]);
  entry("incline",[
   ["slope","斜坡；斜面","n.",["斜坡","斜面"],["incline-slope"],"The path follows a gentle incline to the village.","小路沿着缓坡通向村庄。",null,"https://www.merriam-webster.com/dictionary/incline"],
   ["lean","倾斜；俯身","v.",["倾斜","俯身","使倾斜"],["incline-lean","tilting-incline"],"She inclined her head to hear him better.","她侧过头，以便听得更清楚。",null,"https://www.merriam-webster.com/dictionary/incline"],
   ["tend","倾向于；愿意","v.",["倾向于","愿意","使倾向于","倾向","爱好","易于"],["incline-tend"],"I incline to the view that we should wait.","我倾向于认为我们应该等一等。",null,"https://www.merriam-webster.com/dictionary/incline"]
  ],[]);
  entry("hug",[
   ["embrace","拥抱；搂抱","v.",["拥抱","搂抱","紧抱"],["hug-embrace"],"She hugged the child before leaving.","她离开前拥抱了孩子。",null,"https://www.merriam-webster.com/dictionary/hug"],
   ["close","紧贴；沿……旁边延伸","v.",["紧贴","沿……旁边延伸"],["hug-close"],"The narrow road hugs the coastline.","这条窄路紧贴着海岸延伸。",null,"https://www.merriam-webster.com/dictionary/hug"],
   ["embrace-noun","一次拥抱","n.",["一次拥抱"],["hug-embrace-noun"],"He greeted his sister with a warm hug.","他用一个热情的拥抱迎接姐姐。",null,"https://www.merriam-webster.com/dictionary/hug"]
  ],[{"terms":["坚持","使沾沾自喜"],"decision":"scope-excluded","reason":"坚持及使沾沾自喜需固定语境，本批仅选拥抱与紧贴。","source":"https://www.merriam-webster.com/dictionary/hug"}]);
  entry("kneel",[
   ["knees","跪；跪下","v.",["跪","跪下"],["kneel-knees"],"She knelt beside the bed to retrieve the toy.","她跪在床边去够玩具。",null,"https://www.merriam-webster.com/dictionary/kneel"]
  ],[]);
  entry("replenish",[
   ["refill","补充；重新装满","v.",["补充","重新装满","把...重新补足","把...再装满","被再装满","充满"],["replenish-refill"],"We stopped at the spring to replenish our water supply.","我们停在泉边补充饮用水。",null,"https://www.merriam-webster.com/dictionary/replenish"]
  ],[]);
  entry("whirl",[
   ["spin","旋转；急速转动","v.",["旋转","急速转动","回旋","使旋转","使回旋"],["whirl-spin"],"Dry leaves whirled in the wind.","干树叶在风中旋转。",null,"https://www.merriam-webster.com/dictionary/whirl"],
   ["activity","一连串忙乱的活动","n.",["一连串忙乱的活动"],["whirl-activity"],"The wedding preparations passed in a whirl.","婚礼筹备在忙乱中度过。",null,"https://www.merriam-webster.com/dictionary/whirl"],
   ["try","一次尝试","n.",["一次尝试"],["whirl-try"],"I have never skated before, but I will give it a whirl.","我以前没滑过冰，但我愿意试一试。","give it a whirl","https://www.merriam-webster.com/dictionary/whirl"]
  ],[{"terms":["急走","眩晕","卷走","发晕"],"decision":"scope-excluded","reason":"眩晕和卷走等结果未另列；旋转不必然产生眩晕。","source":"https://www.merriam-webster.com/dictionary/whirl"}]);
  entry("gorge",[
   ["valley","峡谷","n.",["峡谷"],["gorge-valley"],"The river runs through a deep gorge.","这条河穿过一道深峡谷。",null,"https://www.merriam-webster.com/dictionary/gorge"],
   ["eat","狼吞虎咽；大吃","v.",["狼吞虎咽","大吃","塞饱","狼吞虎咽地吃"],["gorge-eat"],"The children gorged themselves on fresh berries.","孩子们大吃新鲜浆果。","gorge oneself on","https://www.merriam-webster.com/dictionary/gorge"]
  ],[{"terms":["凹槽","咽喉"],"decision":"scope-excluded","reason":"咽喉和工艺凹槽不在本批峡谷与过量进食范围。","source":"https://www.merriam-webster.com/dictionary/gorge"}]);
  entry("chamber",[
   ["room","房间；会议厅","n.",["房间","会议厅"],["chamber-room"],"The council met in the main chamber.","议会在主会议厅开会。",null,"https://www.merriam-webster.com/dictionary/chamber"],
   ["cavity","腔；室","n.",["腔","室","枪膛"],["chamber-cavity"],"The human heart has four chambers.","人的心脏有四个腔室。",null,"https://www.merriam-webster.com/dictionary/chamber"],
   ["legislature","议院","n.",["议院"],["chamber-legislature"],"The bill must pass both chambers of parliament.","法案必须得到议会两院的通过。",null,"https://www.merriam-webster.com/dictionary/chamber"]
  ],[{"terms":["装(弹药)","把...关在室内","室内的"],"decision":"scope-excluded","reason":"给枪装弹、关入室内的动词及室内的形容词未从名词腔室自动生成。","source":"https://www.merriam-webster.com/dictionary/chamber"}]);
  entry("lap",[
   ["knees","膝上部；坐着时的大腿面","n.",["膝上部","坐着时的大腿面","膝盖"],["lap-knees","knee-lap"],"The child sat on her father's lap.","孩子坐在父亲的腿上。",null,"https://www.merriam-webster.com/dictionary/lap"],
   ["circuit","一圈；一个来回","n.",["一圈","一个来回"],["lap-circuit"],"She ran three laps of the track.","她绕跑道跑了三圈。",null,"https://www.merriam-webster.com/dictionary/lap"],
   ["stage","旅程的一段；阶段","n.",["旅程的一段","阶段"],["lap-stage"],"We reached the final lap of our journey.","我们到了旅程的最后一段。",null,"https://www.merriam-webster.com/dictionary/lap"],
   ["drink","舔食；舐饮","v.",["舔食","舐饮","舔"],["lap-drink"],"The kitten lapped water from a shallow bowl.","小猫从浅碗里舔水喝。",null,"https://www.merriam-webster.com/dictionary/lap"],
   ["water","轻拍；轻轻冲刷","v.",["轻拍","轻轻冲刷","拍打","泼溅"],["lap-water"],"Small waves lapped against the harbour wall.","小浪轻轻拍打港口的墙。",null,"https://www.merriam-webster.com/dictionary/lap"],
   ["overtake","领先一整圈；套圈","v.",["领先一整圈","套圈"],["lap-overtake"],"The leader lapped two runners before the finish.","领先者在终点前给两名选手套了圈。",null,"https://www.merriam-webster.com/dictionary/lap"]
  ],[{"terms":["下摆","衣兜","山坳","重叠","围住","包围","抱...在膝上","使重叠","链接访问程序"],"decision":"scope-excluded","reason":"链接访问程序是缩写旧译；重叠接合及衣物下摆等用法不并入腿面、圈数和舔食。","source":"https://www.merriam-webster.com/dictionary/lap"}]);
  entry("dumb",[
   ["foolish","愚蠢的；笨的","adj.",["愚蠢的","笨的"],["dumb-foolish","unwise-stupid"],"It was a dumb mistake to ignore the sign.","无视标牌是个愚蠢的错误。",null,"https://www.merriam-webster.com/dictionary/dumb"],
   ["speechless","说不出话的；目瞪口呆的","adj.",["说不出话的","目瞪口呆的","不说话的","无声音的"],["dumb-speechless"],"The news struck him dumb with surprise.","这个消息让他惊得说不出话来。",null,"https://www.merriam-webster.com/dictionary/dumb"],
   ["unable","不能说话的（旧用法）","adj.",["不能说话的（旧用法）","哑的"],["dumb-unable"],"The old record describes the witness as dumb.","旧记录用“不能说话的”描述这位证人。",null,"https://www.merriam-webster.com/dictionary/dumb"]
  ],[]);
  entry("lame",[
   ["injured","跛的；腿脚不便的","adj.",["跛的","腿脚不便的","跛足的","僵痛的"],["lame-injured"],"The horse was lame after injuring its leg.","马腿受伤后跛了。",null,"https://www.merriam-webster.com/dictionary/lame"],
   ["weak","站不住脚的；不令人信服的","adj.",["站不住脚的","不令人信服的"],["lame-weak"],"He offered a lame excuse for missing the meeting.","他为缺席会议找了个站不住脚的借口。",null,"https://www.merriam-webster.com/dictionary/lame"]
  ],[{"terms":["不完全的","金属薄板","不知内情的人","变跛","使成残废","使无用"],"decision":"scope-excluded","reason":"金属薄板可能涉及 lamé 的另一读音；不知内情的人俚语及使跛动词未并入跛足与借口无力。","source":"https://www.merriam-webster.com/dictionary/lame"}]);
  entry("passive",[
   ["inactive","被动的；消极的","adj.",["被动的","消极的","顺从的"],["passive-inactive"],"She refused to remain a passive observer.","她拒绝继续做一个被动的旁观者。",null,"https://www.merriam-webster.com/dictionary/passive"],
   ["grammar","被动语态的","adj.",["被动语态的"],["passive-grammar"],"The sentence is written in the passive voice.","这个句子用了被动语态。",null,"https://www.merriam-webster.com/dictionary/passive"]
  ],[{"terms":["冷漠的","无源的"],"decision":"scope-excluded","reason":"无源的属电路术语；冷漠表示态度，不一定等于被动。","source":"https://www.merriam-webster.com/dictionary/passive"}]);
  entry("negate",[
   ["deny","否认；否定","v.",["否认","否定"],["negate-deny"],"The evidence negates the claim that the room was empty.","证据否定了房间当时空无一人的说法。",null,"https://www.merriam-webster.com/dictionary/negate"],
   ["cancel","抵消；使无效","v.",["抵消","使无效","取消"],["negate-cancel"],"The extra fees negated the savings.","额外费用抵消了节省下来的钱。",null,"https://www.merriam-webster.com/dictionary/negate"]
  ],[{"terms":["非"],"decision":"scope-excluded","reason":"逻辑非需运算语境，本批动词否定与抵消不作为运算符名词。","source":"https://www.merriam-webster.com/dictionary/negate"}]);
  entry("startle",[
   ["surprise","使突然吃惊；惊吓","v.",["使突然吃惊","惊吓","使惊愕","惊起"],["startle-surprise"],"A sudden knock startled the sleeping dog.","突然的敲门声惊醒了睡着的狗。",null,"https://www.merriam-webster.com/dictionary/startle"]
  ],[{"terms":["惊愕","惊恐","吃惊"],"decision":"scope-excluded","reason":"旧名词惊愕、惊恐未单列，动词例句表示使突然吃惊。","source":"https://www.merriam-webster.com/dictionary/startle"}]);
  entry("remarkable",[
   ["notable","非凡的；引人注目的","adj.",["非凡的","引人注目的","不平常的","值得注意的","显著的"],["remarkable-notable"],"She made a remarkable recovery after the operation.","她手术后恢复得非常好。",null,"https://www.merriam-webster.com/dictionary/remarkable"]
  ],[]);
  entry("fancy",[
   ["want","想要；喜欢","v.",["想要","喜欢","喜爱"],["fancy-want","wish-fancy","desire-want","want-desire","wish-desire"],"Do you fancy a walk before lunch?","午饭前你想去散步吗？",null,"https://www.merriam-webster.com/dictionary/fancy"],
   ["imagine","想象；自以为","v.",["想象","自以为","设想","相信"],["fancy-imagine"],"He fancied himself a great poet.","他自以为是一位伟大的诗人。",null,"https://www.merriam-webster.com/dictionary/fancy"],
   ["elaborate","花哨的；精致复杂的","adj.",["花哨的","精致复杂的","精美的","新奇的","奇特的"],["fancy-elaborate"],"The invitation had a fancy gold border.","请柬有一道花哨的金色边框。",null,"https://www.merriam-webster.com/dictionary/fancy"],
   ["whim","一时的喜好；念头","n.",["一时的喜好","念头","喜好"],["fancy-whim","pet-project"],"She took a fancy to the little wooden bird.","她突然喜欢上了那只小木鸟。","take a fancy to","https://www.merriam-webster.com/dictionary/fancy"],
   ["imagination","想象力；幻想","n.",["想象力","幻想"],["fancy-imagination"],"The tale mixes careful observation with flights of fancy.","这个故事把细致的观察与天马行空的想象结合起来。",null,"https://www.merriam-webster.com/dictionary/fancy"]
  ],[{"terms":["想象的","高价的","特级的"],"decision":"scope-excluded","reason":"高价、特级及想象的形容词未纳入花哨的、想要和幻想等已选范围。","source":"https://www.merriam-webster.com/dictionary/fancy"}]);
  entry("fortunate",[
   ["lucky","幸运的","adj.",["幸运的"],["fortunate-lucky"],"We were fortunate to find a room so late.","这么晚还能找到房间，我们很幸运。",null,"https://www.merriam-webster.com/dictionary/fortunate"]
  ],[{"terms":["幸福的"],"decision":"scope-excluded","reason":"幸运不等同于主观幸福；避免与 happy 混淆。","source":"https://www.merriam-webster.com/dictionary/fortunate"}]);
  entry("irritate",[
   ["annoy","使恼怒；使烦躁","v.",["使恼怒","使烦躁","激怒","使发怒","引起不快"],["irritate-annoy","causing-annoyance","annoy-irritate","annoy-disrupt","disturb-interrupt"],"The repeated interruptions irritated the speaker.","反复的打断让演讲者很烦躁。",null,"https://www.merriam-webster.com/dictionary/irritate"],
   ["physical","刺激；使发炎","v.",["刺激","使发炎"],["irritate-physical"],"The cleaning spray irritated her eyes.","清洁喷雾刺激了她的眼睛。",null,"https://www.merriam-webster.com/dictionary/irritate"]
  ],[{"terms":["使兴奋"],"decision":"scope-excluded","reason":"生理刺激可有不同结果，不把所有兴奋都解释为恼怒或刺激眼睛。","source":"https://www.merriam-webster.com/dictionary/irritate"}]);
  entry("nuisance",[
   ["annoyance","讨厌的人或事；麻烦事","n.",["讨厌的人或事","麻烦事","讨厌的东西","讨厌的人","讨厌"],["nuisance-annoyance"],"The broken lock is a nuisance when it rains.","下雨时，坏掉的锁是个麻烦事。",null,"https://www.merriam-webster.com/dictionary/nuisance"]
  ],[{"terms":["损害"],"decision":"scope-excluded","reason":"普通损害未必是烦扰，法律公害语境本批未另列。","source":"https://www.merriam-webster.com/dictionary/nuisance"}]);
  entry("harass",[
   ["pester","骚扰；不断烦扰","v.",["骚扰","不断烦扰","使困扰","侵扰"],["harass-pester","causing-annoyance","annoy-irritate","annoy-disrupt"],"The callers continued to harass her at work.","这些来电者不断在她工作时骚扰她。",null,"https://www.merriam-webster.com/dictionary/harass"]
  ],[]);
  entry("adverse",[
   ["unfavourable","不利的；有害的","adj.",["不利的","有害的","相反的","逆的"],["adverse-unfavourable"],"Adverse weather delayed the rescue.","恶劣天气延误了救援。",null,"https://www.merriam-webster.com/dictionary/adverse"]
  ],[{"terms":["敌对的"],"decision":"scope-excluded","reason":"本批选不利后果；敌对态度与不利情形可能相关但并不总能互换。","source":"https://www.merriam-webster.com/dictionary/adverse"}]);
  entry("hostile",[
   ["unfriendly","敌意的；不友好的","adj.",["敌意的","不友好的","怀敌意的","敌对的"],["hostile-unfriendly","hostile-unkind"],"The speaker faced a hostile audience.","演讲者面对着怀有敌意的听众。",null,"https://www.merriam-webster.com/dictionary/hostile"],
   ["opposed","反对的；抵触的","adj.",["反对的","抵触的"],["hostile-opposed"],"The council was hostile to the proposed road.","议会反对拟议中的道路建设。",null,"https://www.merriam-webster.com/dictionary/hostile"],
   ["enemy","敌方的","adj.",["敌方的","敌人的"],["hostile-enemy"],"The patrol entered hostile territory.","巡逻队进入了敌方领土。",null,"https://www.merriam-webster.com/dictionary/hostile"]
  ],[{"terms":["敌对分子"],"decision":"scope-excluded","reason":"敌对分子是名词，本批只收录敌意、反对及敌方的形容词。","source":"https://www.merriam-webster.com/dictionary/hostile"}]);
  entry("radical",[
   ["fundamental","根本的；彻底的","adj.",["根本的","彻底的","基础","基本的"],["radical-fundamental"],"The report calls for a radical change in policy.","报告呼吁从根本上改变政策。",null,"https://www.merriam-webster.com/dictionary/radical"],
   ["political","激进的","adj.",["激进的"],["radical-political"],"She joined a radical political movement.","她加入了一场激进的政治运动。",null,"https://www.merriam-webster.com/dictionary/radical"],
   ["person","激进分子","n.",["激进分子"],["radical-person"],"The radicals demanded immediate reform.","激进分子要求立即改革。",null,"https://www.merriam-webster.com/dictionary/radical"],
   ["chemistry","自由基","n.",["自由基"],["radical-chemistry"],"The reaction produces highly reactive radicals.","这个反应会产生反应性很强的自由基。",null,"https://www.merriam-webster.com/dictionary/radical"]
  ],[{"terms":["词根","根式","根","根的"],"decision":"scope-excluded","reason":"词根、根式及植物根部等专业用法未与根本改变、激进政治或自由基混合。","source":"https://www.merriam-webster.com/dictionary/radical"}]);
  entry("bother",[
   ["annoy","打扰；使烦恼","v.",["打扰","使烦恼","烦扰"],["bother-annoy","causing-annoyance","annoy-irritate","annoy-disrupt","disturb-interrupt"],"The noise did not bother him.","噪声没有使他烦恼。",null,"https://www.merriam-webster.com/dictionary/bother"],
   ["effort","费心；花工夫","v.",["费心","花工夫","操心"],["bother-effort"],"Do not bother to wrap the box.","不用费心包装这个盒子。",null,"https://www.merriam-webster.com/dictionary/bother"],
   ["trouble","麻烦；烦恼","n.",["麻烦","烦恼"],["bother-trouble"],"The repair caused a great deal of bother.","这次维修带来了很多麻烦。",null,"https://www.merriam-webster.com/dictionary/bother"]
  ],[{"terms":["迷惑","纠纷","讨厌的人"],"decision":"scope-excluded","reason":"纠纷、迷惑和讨厌的人未单列，烦扰并不必然使人迷惑。","source":"https://www.merriam-webster.com/dictionary/bother"}]);
  entry("adversary",[
   ["opponent","对手；敌手","n.",["对手","敌手"],["adversary-opponent"],"She respected her adversary's skill.","她敬重对手的技巧。",null,"https://www.merriam-webster.com/dictionary/adversary"]
  ],[{"terms":["敌手的","敌对的"],"decision":"scope-excluded","reason":"形容词敌手的未从对手名词自动生成。","source":"https://www.merriam-webster.com/dictionary/adversary"}]);
  entry("wicked",[
   ["evil","邪恶的；恶毒的","adj.",["邪恶的","恶毒的","坏的","缺德的","刻毒的","恶劣的"],["wicked-evil","moral-evil"],"The villain carried out a wicked plan.","反派实施了一个邪恶的计划。",null,"https://www.merriam-webster.com/dictionary/wicked"],
   ["mischievous","淘气的；顽皮的","adj.",["淘气的","顽皮的"],["wicked-mischievous","child-mischief"],"There was a wicked gleam in his eye.","他的眼里闪着调皮的光。",null,"https://www.merriam-webster.com/dictionary/wicked"]
  ],[]);
  entry("volatile",[
   ["unstable","易变的；不稳定的","adj.",["易变的","不稳定的","可变的","易失的"],["volatile-unstable"],"The currency market remained volatile.","货币市场依旧波动不定。",null,"https://www.merriam-webster.com/dictionary/volatile"],
   ["evaporating","易挥发的","adj.",["易挥发的","挥发性的"],["volatile-evaporating"],"Keep volatile liquids in tightly closed containers.","把易挥发液体放在密封容器里。",null,"https://www.merriam-webster.com/dictionary/volatile"]
  ],[{"terms":["飞行的","轻快的","爆炸性的","有翅动物","挥发物"],"decision":"scope-excluded","reason":"本批区分易变和易挥发；挥发不代表爆炸，飞行及有翅动物的旧义不收录。","source":"https://www.merriam-webster.com/dictionary/volatile"}]);
  entry("nasty",[
   ["unpleasant","令人厌恶的；难受的","adj.",["令人厌恶的","难受的","污秽的","下流的"],["nasty-unpleasant"],"There was a nasty smell in the cellar.","地窖里有一股难闻的气味。",null,"https://www.merriam-webster.com/dictionary/nasty"],
   ["unkind","恶意的；不友善的","adj.",["恶意的","不友善的"],["nasty-unkind","moral-evil","hostile-unkind"],"She received a nasty message from a stranger.","她收到了一位陌生人发来的恶意信息。",null,"https://www.merriam-webster.com/dictionary/nasty"],
   ["serious","严重的；危险的","adj.",["严重的","危险的","险恶的"],["nasty-serious"],"He suffered a nasty cut on his hand.","他的手被严重割伤了。",null,"https://www.merriam-webster.com/dictionary/nasty"]
  ],[]);
  entry("rash",[
   ["skin","皮疹","n.",["皮疹"],["rash-skin"],"A red rash appeared on her arm.","她胳膊上出现了一片红疹。",null,"https://www.merriam-webster.com/dictionary/rash"],
   ["outbreak","短期内大量出现","n.",["短期内大量出现"],["rash-outbreak"],"The town experienced a rash of bicycle thefts.","镇上短期内发生了多起自行车盗窃案。",null,"https://www.merriam-webster.com/dictionary/rash"],
   ["reckless","鲁莽的；轻率的","adj.",["鲁莽的","轻率的","匆忙的"],["rash-reckless"],"It would be rash to decide without reading the report.","不读报告就作决定会很轻率。",null,"https://www.merriam-webster.com/dictionary/rash"]
  ],[]);
  entry("uneasy",[
   ["anxious","不安的；担心的","adj.",["不安的","担心的","心神不安的","不自在的","不舒服的"],["uneasy-anxious","worry-state"],"She felt uneasy about leaving the door unlocked.","门没锁就离开让她感到不安。",null,"https://www.merriam-webster.com/dictionary/uneasy"],
   ["strained","不稳定的；勉强维持的","adj.",["不稳定的","勉强维持的"],["uneasy-strained"],"An uneasy peace followed the dispute.","争端之后出现了不稳定的和平。",null,"https://www.merriam-webster.com/dictionary/uneasy"]
  ],[]);
  entry("timid",[
   ["shy","胆小的；羞怯的","adj.",["胆小的","羞怯的"],["timid-shy"],"The timid child hid behind his father.","胆小的孩子躲在父亲身后。",null,"https://www.merriam-webster.com/dictionary/timid"]
  ],[]);
  entry("fuss",[
   ["commotion","大惊小怪；忙乱","n.",["大惊小怪","忙乱","小题大作","无事自扰","焦急","焦燥"],["fuss-commotion"],"There is no need to make a fuss over a small delay.","不必为一点延误大惊小怪。",null,"https://www.merriam-webster.com/dictionary/fuss"],
   ["worry","过分操心；忙乱","v.",["过分操心","忙乱"],["fuss-worry"],"She fussed over the table settings for an hour.","她为餐桌布置忙乱了一个小时。","fuss over","https://www.merriam-webster.com/dictionary/fuss"]
  ],[{"terms":["使激动","使烦燥"],"decision":"scope-excluded","reason":"使激动、使烦躁为及物结果语境，本批只训练忙乱名词与过度操心。","source":"https://www.merriam-webster.com/dictionary/fuss"}]);
  entry("reluctant",[
   ["unwilling","不情愿的；勉强的","adj.",["不情愿的","勉强的","不愿的"],["reluctant-unwilling"],"He was reluctant to admit his mistake.","他不愿承认自己的错误。",null,"https://www.merriam-webster.com/dictionary/reluctant"]
  ],[{"terms":["难以处理的"],"decision":"scope-excluded","reason":"难以处理的物性用法不在本批不情愿的态度义范围。","source":"https://www.merriam-webster.com/dictionary/reluctant"}]);
  entry("sigh",[
   ["breathe","叹气；叹息","v.",["叹气","叹息","叹息着说"],["sigh-breathe"],"She sighed with relief when the train arrived.","火车到站时，她松了一口气。",null,"https://www.merriam-webster.com/dictionary/sigh"],
   ["breath","一声叹息","n.",["一声叹息"],["sigh-breath"],"He let out a sigh and closed the book.","他叹了一口气，合上了书。",null,"https://www.merriam-webster.com/dictionary/sigh"]
  ],[{"terms":["渴望"],"decision":"scope-excluded","reason":"渴望通常需 sigh for，不能将叹息自动理解为渴望。","source":"https://www.merriam-webster.com/dictionary/sigh"}]);
  entry("weep",[
   ["cry","哭泣；流泪","v.",["哭泣","流泪","哭","哀悼","悲叹"],["weep-cry","grieve-mourn"],"She wept when she heard the old song.","听到那首老歌时，她哭了。",null,"https://www.merriam-webster.com/dictionary/weep"],
   ["leak","渗出液体；渗水","v.",["渗出液体","渗水","滴落","滴下"],["weep-leak"],"Water wept through the cracks in the wall.","水从墙上的裂缝里渗出。",null,"https://www.merriam-webster.com/dictionary/weep"]
  ],[{"terms":["哭着使..."],"decision":"scope-excluded","reason":"哭着使某事发生需完整补语，本批不从哭泣单独推断结果。","source":"https://www.merriam-webster.com/dictionary/weep"}]);
  entry("ignorant",[
   ["unaware","不知道的；不了解的","adj.",["不知道的","不了解的","不知情的"],["ignorant-unaware"],"They were ignorant of the local rules.","他们不了解当地的规定。","ignorant of","https://www.merriam-webster.com/dictionary/ignorant"],
   ["uneducated","无知的；缺乏知识的","adj.",["无知的","缺乏知识的","无知识的","由无知产生的","愚昧的"],["ignorant-uneducated"],"The claim was based on an ignorant assumption.","这项主张建立在无知的假设之上。",null,"https://www.merriam-webster.com/dictionary/ignorant"]
  ],[]);
  entry("cunning",[
   ["crafty","狡猾的；诡计多端的","adj.",["狡猾的","诡计多端的","狡诈的","巧妙的","灵巧的"],["cunning-crafty"],"The thief used a cunning trick to distract the guard.","小偷用狡猾的伎俩分散了警卫的注意力。",null,"https://www.merriam-webster.com/dictionary/cunning"],
   ["skill","狡黠；机巧","n.",["狡黠","机巧","狡猾","诡计"],["cunning-skill"],"The plan depended on cunning rather than strength.","这个计划靠的是机巧，而非力量。",null,"https://www.merriam-webster.com/dictionary/cunning"]
  ],[]);
  entry("oblivious",[
   ["unaware","未察觉的；不注意的","adj.",["未察觉的","不注意的","遗忘的","健忘的","忘却的"],["oblivious-unaware"],"She walked past, oblivious to the noise.","她走了过去，没注意到噪声。","oblivious to","https://www.merriam-webster.com/dictionary/oblivious"]
  ],[{"terms":["不知不觉的","不在意的"],"decision":"scope-excluded","reason":"未察觉不等于不在意，避免把不知情与漠不关心混同。","source":"https://www.merriam-webster.com/dictionary/oblivious"}]);
  entry("naughty",[
   ["misbehaving","淘气的；不听话的","adj.",["淘气的","不听话的","顽皮的","没规矩的"],["naughty-misbehaving","child-mischief"],"The naughty puppy stole a sock from the basket.","淘气的小狗从篮子里叼走了一只袜子。",null,"https://www.merriam-webster.com/dictionary/naughty"]
  ],[{"terms":["不适当的","下流的"],"decision":"scope-excluded","reason":"成人情色或不适当言语的引申未纳入本批儿童淘气范围。","source":"https://www.merriam-webster.com/dictionary/naughty"}]);
  entry("ridiculous",[
   ["absurd","荒谬的；可笑的","adj.",["荒谬的","可笑的"],["ridiculous-absurd","lack-wisdom"],"The price was ridiculous for such a small room.","这么小的房间要这个价钱，真荒唐。",null,"https://www.merriam-webster.com/dictionary/ridiculous"]
  ],[]);
  entry("stupid",[
   ["foolish","愚蠢的；不明智的","adj.",["愚蠢的","不明智的"],["stupid-foolish","unwise-stupid","lack-wisdom"],"It was stupid to leave the candles unattended.","把蜡烛丢在无人照看的地方很愚蠢。",null,"https://www.merriam-webster.com/dictionary/stupid"]
  ],[{"terms":["麻木的"],"decision":"scope-excluded","reason":"麻木为较少见旧义，本批只训练愚蠢或不明智。","source":"https://www.merriam-webster.com/dictionary/stupid"}]);
  entry("clumsy",[
   ["awkward","笨拙的；不灵活的","adj.",["笨拙的","不灵活的"],["clumsy-awkward"],"His clumsy attempt to catch the cup made things worse.","他笨拙地试着接住杯子，却弄得更糟了。",null,"https://www.merriam-webster.com/dictionary/clumsy"],
   ["bulky","笨重的；难使用的","adj.",["笨重的","难使用的"],["clumsy-bulky"],"The old camera was clumsy to carry.","那台旧相机携带起来很笨重。",null,"https://www.merriam-webster.com/dictionary/clumsy"]
  ],[{"terms":["不雅观的","粗陋的"],"decision":"scope-excluded","reason":"不雅观及粗陋不必然表示动作笨拙或物品笨重。","source":"https://www.merriam-webster.com/dictionary/clumsy"}]);
  entry("sluggish",[
   ["slow","迟缓的；不活跃的","adj.",["迟缓的","不活跃的","偷懒的","懒惰的","迟钝的","萧条的","呆滞的"],["sluggish-slow"],"The cold made the engine sluggish.","寒冷使发动机运转迟缓。",null,"https://www.merriam-webster.com/dictionary/sluggish"]
  ],[]);
  entry("impulse",[
   ["urge","冲动；突发念头","n.",["冲动","突发念头"],["impulse-urge"],"She resisted the impulse to interrupt.","她忍住了插话的冲动。",null,"https://www.merriam-webster.com/dictionary/impulse"],
   ["signal","脉冲；神经冲动","n.",["脉冲","神经冲动"],["impulse-signal"],"The sensor converts light into electrical impulses.","传感器把光转换成电脉冲。",null,"https://www.merriam-webster.com/dictionary/impulse"]
  ],[{"terms":["驱使","刺激","推动","冲力","建议"],"decision":"scope-excluded","reason":"冲力为物理量；建议和一般推动不等于突发冲动或电信号。","source":"https://www.merriam-webster.com/dictionary/impulse"}]);
  entry("stereotype",[
   ["image","刻板印象；成见","n.",["刻板印象","成见","陈规","老套"],["stereotype-image"],"The film challenges the stereotype of the helpless princess.","电影挑战了公主软弱无助的刻板印象。",null,"https://www.merriam-webster.com/dictionary/stereotype"],
   ["label","对……形成刻板印象","v.",["对……形成刻板印象","套用老套","使一成不变"],["stereotype-label"],"It is unfair to stereotype people by their age.","按年龄对人形成刻板印象是不公平的。",null,"https://www.merriam-webster.com/dictionary/stereotype"]
  ],[{"terms":["铅版","使用铅版","把...印制成盲文"],"decision":"scope-excluded","reason":"铅版属印刷史用法；盲文印制不能作为社会刻板印象的同义解释。","source":"https://www.merriam-webster.com/dictionary/stereotype"}]);
  entry("anniversary",[
   ["date","周年纪念日","n.",["周年纪念日","周年纪念"],["anniversary-date"],"The museum marked the anniversary of its opening.","博物馆纪念了开馆周年日。",null,"https://www.merriam-webster.com/dictionary/anniversary"]
  ],[]);
  entry("finish",[
   ["complete","完成；结束","v.",["完成","结束","用完"],["finish-complete","finish-complete"],"Finish the repairs before the rain starts.","在下雨前完成维修。",null,"https://www.merriam-webster.com/dictionary/finish"],
   ["ending","结尾；终点","n.",["结尾","终点"],["finish-ending"],"The race had an exciting finish.","比赛有一个激动人心的结尾。",null,"https://www.merriam-webster.com/dictionary/finish"],
   ["surface","表面涂层；光洁度","n.",["表面涂层","光洁度","末道漆","磨光"],["finish-surface"],"The wood has a smooth satin finish.","木头表面有光滑的缎面涂层。",null,"https://www.merriam-webster.com/dictionary/finish"]
  ],[{"terms":["完美","毁掉"],"decision":"scope-excluded","reason":"完美是状态评价；毁掉需 finish off 等语境，本批只训练完成、终点和表面处理。","source":"https://www.merriam-webster.com/dictionary/finish"}]);
  entry("night",[
   ["dark","夜晚；夜间","n.",["夜晚","夜间","夜","晚上","黑暗","黑夜"],["night-dark"],"The temperature falls sharply at night.","夜间气温急剧下降。",null,"https://www.merriam-webster.com/dictionary/night"],
   ["event","某项活动的夜晚","n.",["某项活动的夜晚"],["night-event"],"Friday is our regular film night.","周五是我们固定的电影之夜。",null,"https://www.merriam-webster.com/dictionary/night"]
  ],[{"terms":["夜晚的工作"],"decision":"scope-excluded","reason":"夜班工作需具体排班语境，本批不从夜晚时段自动生成职位义。","source":"https://www.merriam-webster.com/dictionary/night"}]);
  entry("bore",[
   ["drill","钻孔；钻出","v.",["钻孔","钻出","钻挖"],["bore-drill","drill-bore"],"They bored a tunnel through the hillside.","他们在山体中钻出了一条隧道。",null,"https://www.merriam-webster.com/dictionary/bore"],
   ["dull","使厌烦；使无聊","v.",["使厌烦","使无聊"],["bore-dull"],"The long technical speech bored the audience.","冗长的技术演讲让听众感到无聊。",null,"https://www.merriam-webster.com/dictionary/bore"],
   ["person","无趣的人或事","n.",["无趣的人或事","令人厌烦的人或事"],["bore-person"],"The meeting was a complete bore.","那场会议无聊透了。",null,"https://www.merriam-webster.com/dictionary/bore"],
   ["diameter","管的内径；口径","n.",["管的内径","口径","孔径"],["bore-diameter"],"The engineer measured the bore of the pipe.","工程师测量了管子的内径。",null,"https://www.merriam-webster.com/dictionary/bore"],
   ["hole","钻孔；钻出的孔","n.",["钻孔","钻出的孔","孔"],["bore-hole"],"Water flowed through a bore in the rock.","水从岩石上钻出的孔中流出。",null,"https://www.merriam-webster.com/dictionary/bore"]
  ],[{"terms":["涌潮","承受","携带"],"decision":"scope-excluded","reason":"承受和携带是 bear 的过去式，不另造本词义项；涌潮未列入本批钻孔与无聊。","source":"https://www.merriam-webster.com/dictionary/bore"}]);
  entry("born",[
   ["birth","出生的；诞生的","adj.",["出生的","诞生的","出生","诞生"],["born-birth"],"She was born in a small mountain village.","她出生在一个小山村。",null,"https://www.merriam-webster.com/dictionary/born"],
   ["natural","天生的","adj.",["天生的","与生俱来的"],["born-natural"],"He is a born teacher with endless patience.","他是个天生的教师，有无穷的耐心。",null,"https://www.merriam-webster.com/dictionary/born"],
   ["origin","源于……的；产生于……的","adj.",["源于……的","产生于……的"],["born-origin"],"The project was born out of a local need.","这个项目源于当地的需要。","born out of","https://www.merriam-webster.com/dictionary/born"]
  ],[]);
  entry("concern",[
   ["worry","使担心；使忧虑","v.",["使担心","使忧虑","使挂念"],["concern-worry","emotional-worry"],"The sudden drop in attendance concerned the teacher.","出勤人数突然下降让老师很担心。",null,"https://www.merriam-webster.com/dictionary/concern"],
   ["relate","涉及；与……有关","v.",["涉及","与……有关","与...有关"],["concern-relate"],"This notice concerns all residents.","这则通知涉及全体居民。",null,"https://www.merriam-webster.com/dictionary/concern"],
   ["anxiety","担忧；关切","n.",["担忧","关切","关心","忧虑"],["concern-anxiety","worry-state"],"There is growing concern about the river's pollution.","人们越来越担心河流污染问题。",null,"https://www.merriam-webster.com/dictionary/concern"],
   ["matter","关心的事；职责","n.",["关心的事","职责"],["concern-matter"],"Safety is our main concern.","安全是我们最关心的事。",null,"https://www.merriam-webster.com/dictionary/concern"],
   ["business","公司；企业","n.",["公司","企业"],["concern-business"],"The shop is still a profitable concern.","这家店仍是一家盈利企业。",null,"https://www.merriam-webster.com/dictionary/concern"]
  ],[]);
  entry("distress",[
   ["suffering","痛苦；忧虑","n.",["痛苦","忧虑","苦恼"],["distress-suffering","worry-state"],"The missing letter caused her considerable distress.","信件丢失让她非常痛苦。",null,"https://www.merriam-webster.com/dictionary/distress"],
   ["danger","危难；险境","n.",["危难","险境"],["distress-danger"],"The crew sent a distress signal before abandoning ship.","船员弃船前发出了求救信号。",null,"https://www.merriam-webster.com/dictionary/distress"],
   ["upset","使苦恼；使悲痛","v.",["使苦恼","使悲痛"],["distress-upset","take-offence","emotional-worry"],"The report distressed everyone who read it.","每个读过报告的人都感到难过。",null,"https://www.merriam-webster.com/dictionary/distress"]
  ],[{"terms":["贫困","亏本出售的"],"decision":"scope-excluded","reason":"法律扣押及折价出售的形容词未并入痛苦、险境及使苦恼。","source":"https://www.merriam-webster.com/dictionary/distress"}]);
  entry("ease",[
   ["comfort","舒适；安逸","n.",["舒适","安逸","安乐","悠闲"],["ease-comfort"],"The cushions allowed her to sit at ease.","靠垫让她坐得很舒服。","at ease","https://www.merriam-webster.com/dictionary/ease"],
   ["facility","轻松；不费力","n.",["轻松","不费力"],["ease-facility"],"He lifted the box with ease.","他轻松地举起了箱子。","with ease","https://www.merriam-webster.com/dictionary/ease"],
   ["relieve","缓解；减轻","v.",["缓解","减轻","使安乐","使安心","放松"],["ease-relieve"],"The medicine eased the pain in her shoulder.","药缓解了她的肩痛。",null,"https://www.merriam-webster.com/dictionary/ease"],
   ["move","缓缓移动；小心挪动","v.",["缓缓移动","小心挪动","灵活地移动"],["ease-move"],"He eased the drawer open without waking the baby.","他轻轻拉开抽屉，没有吵醒婴儿。",null,"https://www.merriam-webster.com/dictionary/ease"]
  ],[]);
  entry("freedom",[
   ["liberty","自由；自主权","n.",["自由","自主权","自主"],["freedom-liberty"],"The agreement protects freedom of speech.","协议保护言论自由。",null,"https://www.merriam-webster.com/dictionary/freedom"],
   ["absence","免于；不受……影响","n.",["免于","不受……影响","免除"],["freedom-absence"],"The shelter offered freedom from fear.","这个庇护所让人免于恐惧。","freedom from","https://www.merriam-webster.com/dictionary/freedom"]
  ],[{"terms":["坦率","特权"],"decision":"scope-excluded","reason":"坦率和特许权需特定搭配，本批只选自主自由和免于某事。","source":"https://www.merriam-webster.com/dictionary/freedom"}]);
  entry("furious",[
   ["angry","狂怒的；暴怒的","adj.",["狂怒的","暴怒的"],["furious-angry"],"She was furious when she discovered the damage.","她发现损坏情况后怒不可遏。",null,"https://www.merriam-webster.com/dictionary/furious"],
   ["intense","猛烈的；激烈的","adj.",["猛烈的","激烈的"],["furious-intense"],"The runners set off at a furious pace.","跑步者以极快的速度出发。",null,"https://www.merriam-webster.com/dictionary/furious"]
  ],[{"terms":["吵闹的"],"decision":"scope-excluded","reason":"吵闹不必然愤怒或猛烈，不能无条件互换。","source":"https://www.merriam-webster.com/dictionary/furious"}]);
  entry("feel",[
   ["touch","触摸；摸","v.",["触摸","摸"],["feel-touch","touch-physical"],"Feel the fabric before you choose a jacket.","选夹克前，摸摸布料。",null,"https://www.merriam-webster.com/dictionary/feel"],
   ["experience","感到；体验","v.",["感到","体验","感觉","有知觉"],["feel-experience"],"I felt a sudden pain in my knee.","我突然感到膝盖疼痛。",null,"https://www.merriam-webster.com/dictionary/feel"],
   ["opinion","认为；觉得","v.",["认为","觉得","以为"],["feel-opinion","belief-consider"],"She feels that the plan needs more work.","她认为这个计划还需要完善。",null,"https://www.merriam-webster.com/dictionary/feel"],
   ["seem","摸起来；给人某种感觉","v.",["摸起来","给人某种感觉"],["feel-seem"],"The stone feels cold even in summer.","即使在夏天，这块石头摸起来也很凉。",null,"https://www.merriam-webster.com/dictionary/feel"],
   ["sympathy","同情；体谅","v.",["同情","体谅"],["feel-sympathy"],"I feel for the families who lost their homes.","我同情那些失去家园的家庭。","feel for","https://www.merriam-webster.com/dictionary/feel"],
   ["impression","触感；氛围","n.",["触感","氛围"],["feel-impression","context-atmosphere","touch-sense"],"The room has a warm, welcoming feel.","这个房间给人温暖、亲切的感觉。",null,"https://www.merriam-webster.com/dictionary/feel"],
   ["search","摸索；试探着寻找","v.",["摸索","试探着寻找"],["feel-search"],"He felt for the light switch in the dark.","他在黑暗中摸索着找电灯开关。","feel for","https://www.merriam-webster.com/dictionary/feel"]
  ],[]);
  entry("isolate",[
   ["separate","隔离；使孤立","v.",["隔离","使孤立","孤立","分离"],["isolate-separate"],"The nurses isolated the patient to prevent infection.","护士将病人隔离，以防感染。",null,"https://www.merriam-webster.com/dictionary/isolate"],
   ["identify","分离出；单独找出","v.",["分离出","单独找出","单独考虑"],["isolate-identify"],"The researchers isolated the chemical responsible for the smell.","研究人员分离出了产生这种气味的化学物质。",null,"https://www.merriam-webster.com/dictionary/isolate"]
  ],[{"terms":["分离物","分离株"],"decision":"scope-excluded","reason":"分离株或分离物为名词，本批动词分离出物质不自动认证该物件名。","source":"https://www.merriam-webster.com/dictionary/isolate"}]);
  entry("illusion",[
   ["false-belief","错觉；幻想","n.",["错觉","幻想"],["illusion-false-belief"],"He had no illusion that the task would be easy.","他并不幻想任务会很容易。",null,"https://www.merriam-webster.com/dictionary/illusion"],
   ["visual","视觉假象；幻象","n.",["视觉假象","幻象","幻影"],["illusion-visual"],"The mirrors create an illusion of endless space.","这些镜子造成了空间无穷延伸的幻象。",null,"https://www.merriam-webster.com/dictionary/illusion"]
  ],[]);
  entry("liberal",[
   ["open","开明的；宽容的","adj.",["开明的","宽容的","不拘泥的","宽大的"],["liberal-open"],"Her parents held liberal views on education.","她的父母对教育持开明态度。",null,"https://www.merriam-webster.com/dictionary/liberal"],
   ["political","自由主义的","adj.",["自由主义的"],["liberal-political"],"The newspaper supports liberal policies.","这家报纸支持自由主义政策。",null,"https://www.merriam-webster.com/dictionary/liberal"],
   ["generous","慷慨的；大量的","adj.",["慷慨的","大量的"],["liberal-generous"],"Add a liberal amount of fresh parsley.","加入大量新鲜欧芹。",null,"https://www.merriam-webster.com/dictionary/liberal"],
   ["person","自由主义者","n.",["自由主义者"],["liberal-person"],"As a liberal, she supported the reform.","作为自由主义者，她支持改革。",null,"https://www.merriam-webster.com/dictionary/liberal"]
  ],[]);
  entry("mood",[
   ["emotion","心情；情绪","n.",["心情","情绪","心境"],["mood-emotion"],"The good news lifted his mood.","好消息让他的心情好了起来。",null,"https://www.merriam-webster.com/dictionary/mood"],
   ["atmosphere","氛围；情调","n.",["氛围","情调","气氛","基调"],["mood-atmosphere","context-atmosphere"],"Soft lighting created a relaxed mood.","柔和的灯光营造了轻松的氛围。",null,"https://www.merriam-webster.com/dictionary/mood"],
   ["grammar","语气（语法）","n.",["语气（语法）"],["mood-grammar"],"This example illustrates the subjunctive mood.","这个例子说明了虚拟语气。",null,"https://www.merriam-webster.com/dictionary/mood"]
  ],[{"terms":["生气"],"decision":"scope-excluded","reason":"生气是情绪之一，不是所有 mood 的同义解释。","source":"https://www.merriam-webster.com/dictionary/mood"}]);
  entry("mourn",[
   ["grieve","哀悼；悲伤","v.",["哀悼","悲伤","忧伤","服丧"],["mourn-grieve","grieve-mourn"],"The village mourned the loss of its oldest resident.","村庄悼念最年长居民的去世。",null,"https://www.merriam-webster.com/dictionary/mourn"]
  ],[]);
  entry("resume",[
   ["continue","恢复；重新开始","v.",["恢复","重新开始","再开始","继续执行"],["resume-continue"],"The talks resumed after a short break.","短暂休息后，会谈重新开始。",null,"https://www.merriam-webster.com/dictionary/resume"],
   ["retake","重新担任；重新占据","v.",["重新担任","重新占据","取回"],["resume-retake"],"She resumed her seat after the announcement.","公告后，她回到了自己的座位。",null,"https://www.merriam-webster.com/dictionary/resume"]
  ],[{"terms":["摘要","个人简历"],"decision":"scope-excluded","reason":"个人简历通常为 résumé 的另一读音；本批保持恢复动词，避免与简历名词混用。","source":"https://www.merriam-webster.com/dictionary/resume"}]);
  entry("repent",[
   ["regret","悔改；后悔","v.",["悔改","后悔","懊悔","忏悔"],["repent-regret"],"He repented of the lie and told the truth.","他为谎言后悔，说出了真相。","repent of","https://www.merriam-webster.com/dictionary/repent"]
  ],[{"terms":["匍匐生根的"],"decision":"scope-excluded","reason":"匍匐生根的为另一词源及读音的植物学形容词，不并入后悔。","source":"https://www.merriam-webster.com/dictionary/repent"}]);
  entry("swell",[
   ["expand","肿胀；膨胀；增大","v.",["肿胀","膨胀","增大","使膨胀","使增大"],["swell-expand","increase-quantity"],"Her ankle began to swell after the fall.","摔倒后，她的脚踝开始肿胀。",null,"https://www.merriam-webster.com/dictionary/swell"],
   ["increase","增加；增强","v.",["增加","增强","使上涨"],["swell-increase","increase-quantity"],"The music swelled as the curtain rose.","幕布升起时，音乐渐强。",null,"https://www.merriam-webster.com/dictionary/swell"],
   ["wave","涌浪；海面起伏","n.",["涌浪","海面起伏","巨浪"],["swell-wave"],"A long swell rocked the boat.","一道长涌浪摇晃着小船。",null,"https://www.merriam-webster.com/dictionary/swell"],
   ["excellent","极好的（非正式用语）","adj.",["极好的（非正式用语）","一流的"],["swell-excellent"],"We had a swell time at the picnic.","我们野餐时玩得很开心。",null,"https://www.merriam-webster.com/dictionary/swell"]
  ],[{"terms":["隆起的部分","优秀的","骄傲","使骄傲"],"decision":"scope-excluded","reason":"优秀的人和隆起部分未单列；本批极好的形容词不意味着自我骄傲。","source":"https://www.merriam-webster.com/dictionary/swell"}]);
  entry("view",[
   ["opinion","观点；看法","n.",["观点","看法","见解"],["view-opinion","opinion-view"],"Her view differs from the committee's position.","她的观点与委员会的立场不同。",null,"https://www.merriam-webster.com/dictionary/view"],
   ["scene","景色；景观","n.",["景色","景观","风景"],["view-scene"],"The room offers a view of the harbour.","从这个房间可以看到港口的景色。",null,"https://www.merriam-webster.com/dictionary/view"],
   ["sight","视野；可见范围","n.",["视野","可见范围"],["view-sight"],"The tower came into view as the fog lifted.","雾散时，塔出现在视野中。","come into view","https://www.merriam-webster.com/dictionary/view"],
   ["watch","观看；查看","v.",["观看","查看","看","视察"],["view-watch"],"We viewed the paintings in natural light.","我们在自然光下观看了这些画。",null,"https://www.merriam-webster.com/dictionary/view"],
   ["regard","看待；视为","v.",["看待","视为","考虑","估量"],["view-regard","belief-consider"],"They viewed the delay as an opportunity to improve the design.","他们把延误看作改进设计的机会。",null,"https://www.merriam-webster.com/dictionary/view"]
  ],[{"terms":["视力","视图","指望","意图","印象"],"decision":"scope-excluded","reason":"视图属具体呈现方式；视力、意图和指望不等同于看法或景观。","source":"https://www.merriam-webster.com/dictionary/view"}]);
  entry("virtue",[
   ["morality","美德；德行","n.",["美德","德行"],["virtue-morality"],"Honesty is a virtue she values highly.","诚实是她十分看重的一种美德。",null,"https://www.merriam-webster.com/dictionary/virtue"],
   ["advantage","优点；长处","n.",["优点","长处"],["virtue-advantage"],"The main virtue of the plan is its simplicity.","这个计划的主要优点是简单。",null,"https://www.merriam-webster.com/dictionary/virtue"],
   ["chastity","贞操（传统用语）","n.",["贞操（传统用语）","贞操"],["virtue-chastity"],"The old novel treats the heroine's virtue as her most precious possession.","这本旧小说把女主人公的贞操视为她最珍贵的东西。",null,"https://www.merriam-webster.com/dictionary/virtue"],
   ["power","功效；效力","n.",["功效","效力"],["virtue-power"],"The old book praises the supposed healing virtues of the spring water.","这本旧书赞颂了据称具有疗效的泉水。",null,"https://www.merriam-webster.com/dictionary/virtue"]
  ],[]);
  entry("opening",[
   ["beginning","开始；开幕","n.",["开始","开幕","揭幕"],["opening-beginning","new-beginning"],"The opening of the exhibition drew a large crowd.","展览开幕吸引了一大群人。",null,"https://www.merriam-webster.com/dictionary/opening"],
   ["gap","开口；缺口","n.",["开口","缺口","口子","穴"],["opening-gap"],"Light entered through a small opening in the roof.","光从屋顶的一个小洞照进来。",null,"https://www.merriam-webster.com/dictionary/opening"],
   ["opportunity","机会；空缺职位","n.",["机会","空缺职位"],["opening-opportunity"],"There is an opening for a trainee at the firm.","这家公司有一个实习生职位空缺。",null,"https://www.merriam-webster.com/dictionary/opening"],
   ["initial","开始的；开头的","adj.",["开始的","开头的"],["opening-initial"],"Her opening remarks were brief.","她的开场白很简短。",null,"https://www.merriam-webster.com/dictionary/opening"]
  ],[]);
  entry("precede",[
   ["before","先于；在……之前","v.",["先于","在……之前","在之前发生"],["precede-before"],"A short introduction precedes the first chapter.","第一章前面有一篇简短的引言。",null,"https://www.merriam-webster.com/dictionary/precede"],
   ["ahead","走在……前面","v.",["走在……前面","走在前面"],["precede-ahead"],"The guide preceded us through the doorway.","导游先于我们穿过门口。",null,"https://www.merriam-webster.com/dictionary/precede"]
  ],[{"terms":["在前面加上"],"decision":"scope-excluded","reason":"在前面加上需要及物结构及具体内容，本批只选时间先于与走在前方。","source":"https://www.merriam-webster.com/dictionary/precede"}]);
  entry("former",[
   ["previous","以前的；从前的","adj.",["以前的","从前的","先前的","前任的"],["former-previous"],"The former owner left several books behind.","前主人留下了几本书。",null,"https://www.merriam-webster.com/dictionary/former"],
   ["first","前者","n.",["前者"],["former-first"],"Of tea and coffee, she prefers the former.","茶与咖啡相比，她更喜欢前者。",null,"https://www.merriam-webster.com/dictionary/former"]
  ],[{"terms":["前者的","成形工具","模具"],"decision":"scope-excluded","reason":"本批前者是名词代指，不标为前者的形容词；成形工具和模具属独立名词义。","source":"https://www.merriam-webster.com/dictionary/former"}]);
  entry("meanwhile",[
   ["same-time","与此同时","adv.",["与此同时","其时","同时","于此时"],["meanwhile-same-time"],"The soup was simmering; meanwhile, she prepared the salad.","汤正炖着；与此同时，她准备沙拉。",null,"https://www.merriam-webster.com/dictionary/meanwhile"],
   ["interim","在此期间","adv.",["在此期间","其间"],["meanwhile-interim"],"The repairs will take a week; meanwhile, use the side entrance.","维修需要一周；在此期间，请使用侧门。",null,"https://www.merriam-webster.com/dictionary/meanwhile"]
  ],[]);
 }
 if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch14=register;
})(typeof window==='object'?window:globalThis);
