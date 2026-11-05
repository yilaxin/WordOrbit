/* Batch 07: bounded learning senses; original bilingual examples; no learner data. */
(function(scope){
  'use strict';
  function register(add){
    const entries={},cam=w=>'https://dictionary.cambridge.org/dictionary/english/'+w,col=w=>'https://www.collinsdictionary.com/dictionary/english/'+w;
    function entry(word,rows){const e=add(word,rows.map(r=>{r=r.slice();if(typeof r[4]==='string')r[4]=[r[4]];return r;}));e.reviewDate='2026-11-05';entries[word]=e;return e;}
    function reference(word,terms,reason,source=cam(word)){entries[word].referenceOnly.push({terms,decision:'scope-excluded',reason,source});}
    function source(word,ids,url){for(const id of ids)entries[word].senses.find(s=>s.id===id).source=url;}
    entry('sunshine',[
      ['light','阳光；日照；阳光带来的温暖','n.',['阳光','晴天'],'solar-light','The terrace receives direct sunshine for most of the afternoon.','露台在下午大部分时间都能照到直射阳光。'],
      ['joy','快乐；给生活带来的愉悦（比喻）','n.',['光明'],'happiness-pleasure','Her cheerful letters brought a little sunshine into his lonely winter.','她欢快的来信为他孤寂的冬天带来了一点快乐。'],
      ['address','对人的亲昵称呼，有时带不耐烦语气（英式口语）','n.',['亲昵称呼'],'informal-person-address','Good morning, sunshine! Did you sleep well?','早上好，亲爱的！睡得好吗？']
    ]);
    entry('sunset',[
      ['evening','日落；日落时分及晚霞景象','n.',['日落'],'sun-goes-below-horizon','We reached the hilltop just before sunset and watched the sky turn pink.','我们在日落前到达山顶，看着天空变成粉红色。'],
      ['expiry','法律、项目等到期终止；规定到期失效的','v. / modifier',['到期终止'],'scheduled-expiry','A sunset clause requires the emergency powers to expire after six months.','一项日落条款要求紧急权力在六个月后失效。','sunset clause / provision']
    ]);
    entry('dusk',[
      ['twilight','黄昏；天黑前光线逐渐暗下来的时段','n.',['薄暮','傍晚','黄昏'],'evening-twilight','At dusk, the last walkers left the lakeside path.','黄昏时，最后一批步行者离开了湖边小路。']
    ]);
    entry('shadow',[
      ['darkness','影子；光被遮挡形成的阴影或暗处','n.',['阴影','荫','影子','阴暗','隐蔽处'],'blocked-light-darkness','The bridge cast a long shadow across the frozen river.','大桥在结冰的河面上投下一道长长的影子。'],
      ['trace','极少的一点；些许痕迹','n.',['少许'],'tiny-trace','There was not a shadow of doubt in her voice.','她的语气中没有一丝疑虑。','a shadow of; beyond a shadow of doubt'],
      ['follow','秘密尾随；跟踪某人','v.',['尾随'],'follow-secretly','A detective shadowed the suspect through the crowded station.','一名侦探跟踪嫌疑人穿过拥挤的车站。'],
      ['observe-work','跟岗观察；跟随专业人员学习其工作','v.',['跟岗学习'],'observe-professional-at-work','Trainees shadow an experienced nurse before working independently.','受训者在独立工作之前先跟随一名经验丰富的护士学习。'],
      ['overshadow','给……蒙上阴影；影响本来愉快的事情','v. / n.',['遮蔽','使朦胧'],'unwelcome-influence','The threat of closure cast a shadow over the school’s anniversary celebrations.','关闭学校的威胁给校庆活动蒙上了阴影。','cast a shadow over; in the shadow of'],
      ['opposition','反对党中负责对应政府职务的（英式政治）','modifier',['影子内阁的'],'opposition-counterpart','The shadow education secretary challenged the proposed funding cuts.','影子教育大臣质疑了拟议的教育经费削减。']
    ]);
    entry('fountain',[
      ['water','喷泉；喷水装置或水流；天然泉源','n.',['水源','喷泉','泉水','泉'],'decorative-water-jet','Children gathered around the fountain in the town square.','孩子们聚集在市镇广场的喷泉旁。'],
      ['source','丰富的信息或其他事物的源泉（比喻）','n.',['源','本源'],'abundant-source','The retired guide was a fountain of knowledge about the old harbour.','那位退休导游对老港口的了解十分丰富。','a fountain of knowledge / wisdom']
    ]);
    entry('dew',[
      ['moisture','露；空气中的水汽凝结在较冷表面上的小水滴','n.',['露珠','露水'],'condensed-surface-moisture','Morning dew glistened on the grass beside the tent.','帐篷旁的草地上，晨露闪闪发亮。']
    ]);
    entry('precipitate',[
      ['cause','促使某事突然或提前发生；引发','v.',['促成'],'cause-sudden-event','The abrupt rise in fuel prices precipitated a transport strike.','燃油价格骤涨引发了一场运输业罢工。'],
      ['chemical','沉淀；使溶液中的物质析出；沉淀物','v. / n.',['使沉淀','沉淀物','凝结物'],'solid-separates-from-solution','A white precipitate formed when the two solutions were mixed.','两种溶液混合时形成了白色沉淀。'],
      ['fall','使猛然落下或陷入某种处境（正式）','v.',['猛抛','使陷入','猛地落下'],'forceful-fall-into-state','The sudden loss of funding precipitated the charity into crisis.','资金突然中断使慈善机构陷入危机。','precipitate someone / something into'],
      ['hasty','仓促的；未经充分考虑而贸然作出的','adj.',['轻率的','突然的'],'rash-hasty-action','A precipitate decision could leave the village without a reliable water supply.','贸然作出决定可能使村庄失去可靠的供水。']
    ]);
    entry('float',[
      ['buoyancy','漂浮；使浮在液体表面而不下沉','v.',['漂浮','使漂浮'],'not-sink-in-liquid','The sealed container floated even after it was filled with equipment.','这个密封容器即使装满设备也浮在水面上。'],
      ['drift','在水中或空中轻轻移动；缓缓飘动','v.',['浮动','飘动','摇摆'],'drift-smoothly','A paper lantern floated above the darkening rooftops.','一盏纸灯笼在渐暗的屋顶上方飘动。'],
      ['suggest','提出想法或计划以供考虑','v.',['提出想法'],'propose-for-consideration','The architect floated the idea of turning the warehouse into a library.','建筑师提出了把仓库改成图书馆的想法。'],
      ['shares','使公司上市；首次公开发行股票','v.',['发行'],'stock-market-flotation','The owners plan to float the company when market conditions improve.','所有者计划在市场状况改善时让公司上市。'],
      ['currency','让货币汇率随市场变动；实行浮动汇率','v.',['实行'],'market-determined-exchange','The government allowed the currency to float rather than defend a fixed exchange rate.','政府允许货币汇率浮动，而不再维持固定汇率。'],
      ['parade','游行彩车；装饰后用于巡游的平台或车辆','n.',['彩车'],'parade-display-vehicle','The final float carried musicians dressed as sea creatures.','最后一辆彩车上载着装扮成海洋生物的乐手。'],
      ['cash','备用零钱；开业时准备找零的一笔钱','n.',['备用零钱'],'cash-for-change','The cashier counted the float before opening the shop.','收银员开店前清点了备用零钱。'],
      ['fishing','鱼漂；显示鱼是否咬钩的漂浮装置','n.',['鱼漂'],'fishing-bite-indicator','The float dipped below the surface as a fish took the bait.','鱼咬住鱼饵时，鱼漂沉到了水面下。']
    ]);
    entry('intensive',[
      ['concentrated','密集的；短时间内投入大量努力、资源或活动的','adj.',['加强的','集中的'],'concentrated-high-effort','The students completed an intensive language course before starting their degrees.','学生们在开始学位课程之前完成了一门密集语言课程。'],
      ['farming','集约化的；在有限土地上投入大量资源以提高产量的','adj.',['集约化的'],'high-input-farming','Intensive farming can increase yields but may put pressure on local water supplies.','集约化农业能够提高产量，但也可能给当地供水造成压力。']
    ]);
    entry('nature',[
      ['world','自然界；大自然及其生命和过程','n.',['自然','大自然'],'natural-world','The reserve lets visitors observe nature without disturbing the animals.','保护区让访客能在不打扰动物的情况下观察自然。'],
      ['character','人的本性；性格','n.',['本性','性格'],'inherent-person-character','It is not in her nature to abandon a friend in difficulty.','抛下陷入困境的朋友不是她的本性。'],
      ['type','某事物的性质；基本特征或种类','n.',['性质','性能'],'essential-type-quality','The confidential nature of the research limited access to the data.','研究的保密性质限制了人们获取数据。']
    ]);
    entry('herbal',[
      ['herbs','草药的；由药草制成的','adj.',['草药的'],'relating-to-herbs','She chose a caffeine-free herbal tea for the evening.','她晚上选了一款不含咖啡因的草本茶。']
    ]);
    entry('spade',[
      ['tool','铁锹；有长柄和扁平铲面的挖土工具','n.',['铲子','铲刀','铲'],'digging-spade','He pushed the spade into the damp soil beside the fence.','他把铁锹插进围栏旁潮湿的土里。'],
      ['card','扑克牌中的黑桃花色；黑桃牌','n.',['黑桃'],'spade-card-suit','She played the queen of spades to win the trick.','她打出黑桃王后赢下了这一墩牌。']
    ]);
    entry('vase',[
      ['container','花瓶；用于插花或装饰的容器','n.',['花瓶','瓶'],'flower-display-container','A narrow vase held three freshly cut tulips.','一个细口花瓶里插着三枝刚剪下的郁金香。']
    ]);
    entry('bloom',[
      ['flower','花朵；开花；处于花期','n. / v.',['花','开花'],'flowering','The cherry trees bloom for only a short time each spring.','樱花树每年春天的花期都很短。'],
      ['thrive','焕发生机；繁荣成长；青春或美的旺盛状态','v. / n.',['青春','焕发青春','茂盛','使茂盛'],'thrive-vigour','Her confidence bloomed after she joined the drama club.','加入戏剧社后，她的自信日益增强。'],
      ['surface','水果等表面的薄粉层；自然形成的朦胧光泽','n.',['果粉'],'powdery-surface-coating','The grapes still had a pale bloom on their skins.','葡萄皮上仍覆盖着一层浅色果粉。'],
      ['algae','藻类或其他微小生物的大量繁殖','n.',['水华'],'rapid-aquatic-growth','An algal bloom turned the lake green during the heatwave.','热浪期间，藻类大量繁殖，使湖水变绿。']
    ]);
    entry('aromatic',[
      ['fragrance','芳香的；有宜人气味的','adj.',['芬芳的','芳香的'],'pleasant-fragrance','Aromatic herbs filled the kitchen with a fresh scent.','芳香的香草使厨房充满清新气味。'],
      ['chemistry','芳香族的；属于特定环状化合物类别的（化学）','adj.',['芳香族的'],'aromatic-chemical-structure','Benzene is an aromatic compound, although the term does not simply mean fragrant.','苯是一种芳香族化合物，但这个术语并不只是指气味芳香。']
    ]);
    entry('straw',[
      ['stems','稻草、麦秆等收割后干燥的谷类茎秆','n.',['稻草','麦管'],'dried-cereal-stems','The farmer spread clean straw across the stable floor.','农民把干净的稻草铺在马厩地面上。'],
      ['tube','吸管；吸饮料用的细管','n.',['吸管'],'drinking-tube','The cafe replaced plastic straws with reusable metal ones.','咖啡馆用可重复使用的金属吸管替代了塑料吸管。']
    ]);
    entry('pine',[
      ['tree','松树；松木','n.',['松树','松木'],'pine-tree-wood','The cabin was built from locally grown pine.','这间小屋使用当地生长的松木建成。'],
      ['long','深切怀念；渴望难以得到的人或事物','v.',['怀念','渴望'],'long-deeply-for','After moving abroad, she pined for the familiar hills of home.','移居国外后，她深深怀念故乡熟悉的山丘。','pine for someone / something'],
      ['weaken','因悲伤或思念而消瘦、衰弱','v.',['消瘦','憔悴','痛苦'],'weaken-through-longing','The old dog seemed to pine after its owner left for hospital.','主人住院后，那条老狗似乎因思念而日渐憔悴。']
    ]);
    entry('violet',[
      ['plant','堇菜；通常开紫、蓝或白色花的小植物','n.',['堇菜','紫罗兰'],'violet-flowering-plant','Wild violets grew beneath the hedge in early spring.','初春时，树篱下长出了野生堇菜。'],
      ['colour','紫罗兰色；偏蓝的紫色；这种颜色的','n. / adj.',['紫罗兰色的'],'bluish-purple-colour','The artist mixed blue and red to make a deep violet.','画家混合蓝色和红色，调出深紫罗兰色。']
    ]);
    entry('tulip',[
      ['flower','郁金香；由鳞茎生长、开杯形鲜艳花朵的植物及其花','n.',['郁金香'],'tulip-flower','Each tulip in the garden was labelled with its variety.','花园里的每株郁金香都标明了品种。']
    ]);
    entry('uptake',[
      ['absorption','摄取；吸收；吸收某物的过程或速率','n.',['摄入','吸收','摄取'],'taking-in-substance','The researchers measured oxygen uptake during exercise.','研究人员测量了运动过程中的摄氧量。'],
      ['adoption','接受或采用的程度；服务等的使用率','n.',['采用率'],'acceptance-adoption-rate','Uptake of the free training programme increased after evening sessions were introduced.','增设晚间课程后，免费培训项目的参与率提高了。'],
      ['understand','理解的快慢（用于 quick/slow on the uptake）','n.',['理解'],'speed-of-understanding','He was quick on the uptake and needed only one demonstration.','他领悟很快，只需演示一次就明白了。','quick / slow on the uptake']
    ]);
    entry('mate',[
      ['partner','动物的配偶；交配或使动物交配','n. / v.',['配偶','使配对','成配偶'],'animal-mating','The birds mate in spring and raise their young together.','这些鸟在春季交配，并共同抚育幼鸟。'],
      ['friend','朋友；伙伴；对人的非正式称呼（主要为英式）','n.',['伙伴'],'informal-friend','An old school mate helped him settle into the new city.','一位老同学帮助他适应了新城市的生活。'],
      ['assistant','熟练工人的助手；商船上的船副','n.',['助手'],'occupational-assistant-officer','The carpenter’s mate carried the tools into the workshop.','木匠的助手把工具搬进了车间。'],
      ['fit','使两部分匹配或接合；紧密配合','v.',['使一致','紧密配合'],'fit-parts-together','The connector is designed to mate with the socket on the control panel.','这个连接器的设计可与控制面板上的插座接合。'],
      ['chess','将死；使对方国王无法避免被吃（国际象棋）','n. / v.',['(象棋)将死'],'chess-checkmate','With one precise move, she forced mate in two.','她走出精准的一步，迫使对方在两步内被将死。']
    ]);
    entry('wing',[
      ['flight','动物的翅膀；飞机机翼','n.',['翅膀','翼','机翼'],'flight-supporting-wing','The bird spread its wings before gliding above the lake.','鸟展开翅膀，在湖面上方滑翔。'],
      ['group','组织内的派别或分支','n.',['派别'],'faction-within-organization','The reformist wing of the party supported the new proposal.','党内的改革派支持新提案。'],
      ['building','大型建筑向外伸出的侧翼；附属楼','n.',['侧翼楼'],'building-extension-wing','The museum opened a new wing for contemporary art.','博物馆开放了一座展示当代艺术的新侧楼。'],
      ['sport','边路位置；边锋（球类运动）','n.',['边锋'],'wide-sports-position','The coach moved her to the left wing to exploit her speed.','教练把她调到左边锋位置，以发挥她的速度优势。'],
      ['theatre','舞台两侧观众看不见的侧台（通常复数）','n.',['侧台'],'offstage-wings','The dancers waited in the wings for their entrance cue.','舞者们在侧台等待上场信号。'],
      ['car','汽车车轮上方的翼子板；挡泥板（英式）','n.',['汽车翼子板'],'car-wheel-fender','The mechanic repaired a dent in the car’s front wing.','机械师修好了汽车前翼子板上的凹痕。'],
      ['improvise','临时发挥；未经准备就做某事（口语）','v.',['临场发挥'],'improvise-without-preparation','His notes disappeared, so he had to wing it during the presentation.','他的笔记不见了，因此作报告时不得不临场发挥。','wing it']
    ]);
    entry('plume',[
      ['feathers','大羽毛；羽毛饰物','n.',['羽毛','羽毛装饰'],'large-decorative-feather','The ceremonial helmet carried a bright red plume.','仪式用头盔上饰有一束鲜红的大羽毛。'],
      ['column','羽毛状升起的烟、蒸汽或尘柱','n.',['羽状烟柱'],'rising-column-smoke','A plume of steam rose from the cooling tower.','一股羽状蒸汽从冷却塔升起。']
    ]);
    entry('beak',[
      ['bird','鸟喙；鸟的坚硬嘴部','n.',['鸟嘴','喙','嘴'],'bird-bill','The heron held a small fish in its long beak.','苍鹭用长喙叼着一条小鱼。'],
      ['nose','大鼻子（非正式，常带不敬）','n.',['大鼻子'],'prominent-human-nose','The cartoon gave the politician a long beak and tiny spectacles.','漫画把那位政客画成长着长鼻子、戴着小眼镜的样子。']
    ]);
    entry('nest',[
      ['home','鸟兽的巢或窝；筑巢','n. / v.',['巢','窝','筑巢'],'animal-nesting-home','Swallows nest under the eaves of the old station.','燕子在老车站的屋檐下筑巢。'],
      ['hidden-group','一窝害虫；坏人聚集或藏匿之处（常含贬意）','n.',['隐匿处'],'concealed-harmful-group','Inspectors found a nest of rats behind the damaged wall.','检查人员在破损墙壁后发现了一窝老鼠。'],
      ['inside','使套叠；把一个结构放入另一个结构之中','v.',['使套叠','嵌套'],'one-inside-another','The bowls nest neatly inside one another to save cupboard space.','这些碗可以整齐套叠，节省橱柜空间。']
    ]);
    entry('bark',[
      ['tree','树皮；树干和枝条外层的保护组织','n.',['树皮'],'tree-outer-covering','The tree’s rough bark protected it from minor damage.','树木粗糙的树皮使它免受轻微损伤。'],
      ['dog','狗等动物的吠声；吠叫','n. / v.',['吠声','吠'],'animal-bark','The dog barked twice when someone knocked on the gate.','有人敲门时，狗叫了两声。'],
      ['shout','厉声说出；大声发号施令','v.',['叫骂','喊出'],'sharp-forceful-speech','The supervisor barked an order above the noise of the machinery.','主管盖过机器的噪声厉声发出命令。']
    ]);
    entry('roar',[
      ['sound','咆哮；轰鸣；持续低沉响亮的声音','n. / v.',['吼','咆哮','轰鸣','使轰鸣'],'deep-loud-sound','The waterfall roared so loudly that we could barely hear each other.','瀑布轰鸣得很响，我们几乎听不清彼此说话。'],
      ['shout','大喊；以洪亮声音说话或表达情绪','v.',['大声说出','叫喊','喧闹','呼喊'],'shout-loudly','The crowd roared its approval when the winner stepped forward.','获胜者走上前时，人群大声欢呼表示赞许。'],
      ['speed','轰鸣着快速行驶','v.',['轰鸣着疾驰'],'move-fast-noisily','A motorcycle roared past the quiet roadside cafe.','一辆摩托车轰鸣着驶过安静的路边咖啡馆。']
    ]);
    entry('creep',[
      ['move','缓慢、悄悄或小心地移动；爬行','v.',['爬','徐行','蠕动','潜行'],'slow-cautious-movement','She crept past the bedroom to avoid waking the baby.','她蹑手蹑脚地走过卧室，以免吵醒婴儿。'],
      ['increase','逐渐蔓延、增加或不知不觉发生','v. / n.',['蔓延'],'gradual-unwanted-increase','Transport costs have crept up throughout the year.','运输成本在这一整年里逐渐上涨。','creep up / in / into'],
      ['person','令人讨厌或不安的人；谄媚者（非正式，贬义）','n.',['讨厌的人'],'unpleasant-sycophantic-person','His constant spying on colleagues made everyone regard him as a creep.','他不断窥探同事，使大家都觉得他是个讨厌的人。']
    ]);
    entry('tame',[
      ['animal','驯服的；使野生动物适应人类并不再危险','adj. / v.',['驯服的','柔顺的','顺从的','驯养','驯服','变得驯服'],'domesticate-animal','The rescued fox became tame enough to accept food from its keeper.','获救的狐狸变得温顺，能够接受饲养员递来的食物。'],
      ['control','控制危险、强大或难以驾驭的事物；制服','v.',['制服'],'bring-power-under-control','The engineers built channels to tame the river’s seasonal floods.','工程师修建水渠，以控制河流的季节性洪水。'],
      ['dull','平淡乏味的；不够刺激的','adj.',['乏味的','平淡的','失去锋芒'],'unexciting-dull','After the dramatic opening, the ending felt rather tame.','戏剧性的开场过后，结局显得相当平淡。']
    ]);
    entry('prey',[
      ['animal','猎物；被其他动物捕食的动物','n.',['猎物','被捕食的动物'],'hunted-animal','The owl locates its prey by listening for movement in the grass.','猫头鹰通过聆听草丛中的动静来确定猎物的位置。'],
      ['victim','易受欺骗或伤害的人；被侵吞的对象','n.',['受害者'],'vulnerable-target','People unfamiliar with online banking can become easy prey for fraudsters.','不熟悉网上银行的人可能成为诈骗者容易下手的目标。'],
      ['hunt','捕食；利用他人的弱点谋取利益','v.',['捕食','掠夺'],'hunt-exploit-target','The investigation targets firms that prey on anxious jobseekers.','这项调查针对利用焦虑求职者牟利的公司。','prey on / upon'],
      ['worry','使持续烦恼；萦绕心头','v.',['折磨'],'persistent-mental-worry','The unanswered question continued to prey on her mind.','那个没有答案的问题一直萦绕在她心头。','prey on someone’s mind']
    ]);
    entry('energy',[
      ['vigour','精力；活力；进行活动的身心力量','n.',['精力','精神','活力'],'personal-vigour','After a short rest, she had enough energy to finish the climb.','短暂休息后，她有足够的精力完成攀登。'],
      ['physical','能量；使物体做功或产生热、光等的能力；能源','n.',['能量','能'],'physical-energy','The panels convert solar energy into electricity for the school.','这些面板把太阳能转化为供学校使用的电能。']
    ]);
    entry('liquid',[
      ['substance','液体；呈液态的物质；液态的','n. / adj.',['液体','液体的'],'liquid-state','The liquid must cool before it is poured into the mould.','液体必须冷却后才能倒入模具。'],
      ['money','流动性强的；现金形式或易变现的','adj.',['易变现的'],'readily-convertible-assets','The firm keeps enough liquid assets to meet unexpected expenses.','公司保留了足够的流动资产，以应付意外开支。'],
      ['clear','清澈明亮的，常形容眼睛（文学用语）','adj.',['透明的','明亮的'],'clear-lustrous-appearance','The portrait captured the child’s liquid brown eyes.','肖像画捕捉到了孩子清澈明亮的棕色眼睛。'],
      ['sound','流音；如英语 l、r 这类辅音（语音学）','n.',['流音'],'liquid-consonant','The lesson compared the two English liquids, l and r.','这节课比较了英语中的两个流音 l 和 r。']
    ]);
    entry('fluid',[
      ['substance','流体；能流动的液体或气体；日常也指液体','n. / adj.',['液体','分泌液','流体','流动的'],'flowing-fluid-substance','The engineer tested how the fluid moved through the narrow pipe.','工程师测试了流体如何通过狭窄的管道。'],
      ['changing','不固定的；不断变化、尚未确定的','adj.',['可改变的'],'unsettled-changing','The timetable remains fluid while the repairs are assessed.','维修情况尚在评估，时间安排仍未确定。'],
      ['smooth','流畅自然的；动作或风格连贯优美的','adj.',['流畅的'],'smooth-continuous-movement','The dancer’s fluid movements made the difficult sequence look effortless.','舞者流畅的动作让这套高难度舞步看起来毫不费力。']
    ]);
    entry('mercury',[
      ['metal','汞；水银；常温下为液体的金属元素 Hg','n.',['水银','汞','汞Hg'],'mercury-metal','The old thermometer contained mercury in a sealed glass tube.','旧温度计的密封玻璃管内装有水银。'],
      ['temperature','温度；以温度计中的水银借指温度','n.',['温度'],'temperature-metonym','The mercury fell below zero as the cold front arrived.','冷锋到来时，气温降到了零度以下。'],
      ['planet','水星（专有名词 Mercury）','proper n.',['水星'],'planet-mercury','Mercury completes an orbit around the Sun much faster than Earth does.','水星绕太阳公转一周所需的时间远短于地球。'],
      ['god','墨丘利；罗马神话中的商业、旅行等之神（Mercury）','proper n.',['墨丘利'],'roman-god-mercury','The statue depicts Mercury holding his traditional staff.','这座雕像表现了手持传统权杖的墨丘利。']
    ]);
    entry('melt',[
      ['liquefy','熔化或融化；使固体因受热变软或变成液体','v.',['熔化','(使)熔化','(使)变软'],'solid-to-liquid','The snow melted quickly on the sunlit roof.','向阳屋顶上的积雪很快融化了。'],
      ['dissolve','溶解；使固体消散在液体中','v.',['溶解','(使)溶解'],'dissolve-solid','She stirred the warm water until the sugar had melted.','她搅拌温水，直到糖完全溶解。'],
      ['emotion','心软；态度变得温柔或充满同情','v.',['心软'],'soften-emotionally','His irritation melted when the child offered a shy apology.','孩子怯生生地道歉后，他的怒气消了，心也软了。'],
      ['disappear','逐渐消失、减少或融入背景','v.',['(使)消散'],'gradual-disappearance','The morning mist melted away as the valley warmed.','山谷暖起来后，晨雾渐渐消散。','melt away / into'],
      ['sandwich','夹融化奶酪的热三明治','n.',['热奶酪三明治'],'melted-cheese-sandwich','He ordered a tuna melt and a cup of soup.','他点了一份金枪鱼热奶酪三明治和一杯汤。']
    ]);
    entry('rust',[
      ['corrosion','铁锈；铁或钢生锈；使生锈','n. / v.',['锈','生锈','使生锈','腐蚀'],'iron-oxidation','The unpainted gate began to rust after weeks of rain.','未刷漆的大门经过数周雨淋后开始生锈。'],
      ['colour','铁锈色；红褐色；这种颜色的','n. / adj.',['铁锈色'],'reddish-brown-colour','She chose rust-coloured cushions for the grey sofa.','她为灰色沙发选了铁锈色靠垫。'],
      ['plant','锈病；使植物出现锈色斑点的真菌病害','n.',['植物锈病'],'fungal-plant-disease','Farmers planted wheat varieties with better resistance to rust.','农民种植了更能抵抗锈病的小麦品种。']
    ]);
    entry('acid',[
      ['chemical','酸；酸性的物质；酸性的','n. / adj.',['酸','酸性物质','酸的','酸性的'],'acid-chemical','The acid reacted with the metal and released bubbles of gas.','酸与金属反应，释放出气泡。'],
      ['taste','有酸味的；气味刺鼻的','adj.',['酸味的'],'sour-sharp-taste','The unripe fruit had an unpleasantly acid taste.','未成熟的水果带有令人不快的酸味。'],
      ['speech','尖刻的；刻薄的','adj.',['尖刻的'],'biting-critical-speech','Her acid reply brought the awkward conversation to an end.','她尖刻的回答结束了那场尴尬的谈话。'],
      ['drug','迷幻药 LSD 的非正式名称','n.',['迷幻药'],'lsd-informal-name','The documentary discussed the cultural history of acid in the 1960s.','纪录片讨论了二十世纪六十年代迷幻药 LSD 的文化历史。']
    ]);
    entry('inert',[
      ['inactive','不活动的；无生气的；迟钝乏力的','adj.',['迟钝的','无活力的','呆滞的'],'inactive-motionless','The sculpture remained inert while lights moved across its surface.','灯光在雕塑表面移动，雕塑本身纹丝不动。'],
      ['chemistry','化学性质不活泼的；惰性的','adj.',['惰性的'],'chemically-unreactive','The sample was stored under an inert gas to prevent oxidation.','样品被保存在惰性气体中，以防止氧化。']
    ]);
    entry('component',[
      ['part','组成部分；元件；构成整体的','n. / adj.',['元件','组件','成分','组成的','构成的'],'constituent-part','Each component of the pump can be replaced separately.','水泵的每个部件都可以单独更换。'],
      ['vector','分量；向量沿指定方向的部分（数学、物理）','n.',['向量分量'],'vector-component','The horizontal component of the force remained constant.','力的水平分量保持不变。']
    ]);
    entry('mixture',[
      ['combination','混合物；不同物质或事物的混合、结合','n.',['混合','混合物'],'combination-of-elements','The soil mixture contains sand, compost and fine gravel.','这种土壤混合物含有沙子、堆肥和细砾石。'],
      ['medicine','合剂；服用前可能需要摇匀的液体药物','n.',['合剂'],'liquid-medicine-mixture','The pharmacist told her to shake the cough mixture before taking it.','药剂师让她在服用止咳合剂之前先摇匀。']
    ]);
    entry('college',[
      ['education','高等院校；学院；提供专门或继续教育的学校','n.',['学院','大学'],'post-school-education-institution','The college offers courses in nursing and engineering.','这所学院开设护理和工程课程。'],
      ['division','大学内的学院、学部或成员学院','n.',['大学内的学院'],'university-constituent-college','She lives in one of the university’s oldest colleges.','她住在这所大学历史最悠久的成员学院之一。'],
      ['body','同业人员或专业人士组成的团体','n.',['学会'],'professional-corporate-body','The college of surgeons issued new professional guidance.','外科医师学会发布了新的专业指导意见。']
    ]);
    entry('educated',[
      ['knowledge','受过教育的；具有一定学识或教养的','adj.',['受过教育的','有教养的'],'having-formal-education','An educated workforce can adapt more readily to new technology.','受过教育的劳动力更容易适应新技术。'],
      ['informed','有知识或经验依据的，常形容猜测','adj.',['有依据的'],'informed-estimate','With no exact figures available, we made an educated guess about attendance.','没有确切数字时，我们根据已有知识估计了出席人数。','an educated guess']
    ]);
    entry('intelligent',[
      ['thinking','聪明的；理解、学习或判断能力强的','adj.',['聪明的'],'capacity-to-understand','Her intelligent questions exposed a weakness in the original argument.','她有见地的问题揭示了原论证中的一个薄弱点。'],
      ['technology','智能的；能处理信息并自动作出响应的','adj.',['智能的'],'information-responsive-technology','The building uses intelligent controls to reduce energy waste.','大楼使用智能控制装置来减少能源浪费。']
    ]);
    entry('elite',[
      ['group','精英；某领域最有权力、财富或能力的群体；精英的','n. / adj.',['精华','精锐','中坚分子'],'selected-powerful-group','The report questioned whether the policy mainly benefited a wealthy elite.','报告质疑该政策是否主要使富裕的精英群体受益。']
    ]);
    entry('genius',[
      ['person','天才；具有非凡智力或创造力的人','n.',['天才'],'exceptionally-gifted-person','The young composer was widely regarded as a musical genius.','这位年轻作曲家被广泛认为是一位音乐天才。'],
      ['ability','非凡才能；某方面特别突出的天赋','n.',['天赋'],'exceptional-creative-ability','Her genius for explaining complex ideas made her an outstanding teacher.','她解释复杂概念的非凡才能使她成为出色的教师。','a genius for something / doing something']
    ]);
    entry('prestige',[
      ['status','声望；因成就、地位或品质而赢得的尊重；享有声望的','n. / modifier',['声望','威望','威信','商誉','声誉'],'admired-social-standing','Winning the award increased the laboratory’s international prestige.','获得该奖提高了实验室的国际声望。']
    ]);
    entry('degree',[
      ['extent','程度；某种性质或状况的高低','n.',['程度'],'extent-level','The two projects involve very different degrees of risk.','这两个项目涉及的风险程度大不相同。'],
      ['unit','度；测量温度、角度等的单位','n.',['度数','度'],'degree-measurement-unit','The ramp rises at an angle of five degrees.','坡道以五度的角度向上倾斜。'],
      ['qualification','学位；完成相应大学课程获得的资格','n.',['学位'],'university-qualification','He earned a degree in environmental science while working part-time.','他一边做兼职，一边获得了环境科学学位。']
    ]);
    entry('campus',[
      ['site','校园；大学或大型机构的建筑与周围场地','n.',['校园'],'institution-campus','The new cycle path connects the campus with the railway station.','新自行车道把校园与火车站连接起来。']
    ]);
    entry('orientation',[
      ['direction','方向；朝向；空间中的方位排列','n.',['定方位','方向'],'spatial-direction-arrangement','The orientation of the windows affects how much daylight enters the room.','窗户的朝向影响进入房间的日光量。'],
      ['introduction','入门培训；迎新活动；对新环境的熟悉过程','n.',['适应'],'introductory-familiarization','New volunteers attend an orientation before meeting the residents.','新志愿者在接触住户之前参加入门培训。'],
      ['outlook','倾向；信念、目标或活动的基本方向','n.',['倾向'],'underlying-outlook-aims','The company’s research orientation changed after it entered the medical market.','进入医疗市场后，公司的研究方向发生了变化。'],
      ['sexuality','性取向；对他人产生情感或性吸引的倾向','n.',['性取向'],'sexual-orientation','The policy prohibits discrimination on the basis of sexual orientation.','该政策禁止基于性取向的歧视。','sexual orientation']
    ]);
    entry('registration',[
      ['record','登记；注册；把信息列入官方名册及其证明','n.',['登记','挂号','注册','记录'],'official-entry-record','Online registration closes two days before the conference begins.','网上注册在会议开始前两天截止。'],
      ['vehicle','车辆登记号码；车牌上的识别编号','n.',['车辆登记号码'],'vehicle-registration-number','The witness wrote down the registration of the departing car.','目击者记下了驶离汽车的车牌号。']
    ]);
    entry('consult',[
      ['expert','咨询；向有专业知识的人请教','v.',['咨询','请教','会诊'],'seek-expert-advice','The planners consulted an ecologist before changing the riverbank.','规划人员在改造河岸前咨询了一位生态学家。'],
      ['reference','查阅；从书籍、地图等资料中获取信息','v.',['查阅'],'consult-information','Consult the map before choosing a route across the hills.','选择穿越山地的路线前，请先查阅地图。'],
      ['discuss','商议；作决定前与有关人士讨论','v.',['商议','协商'],'discuss-before-decision','The principal consulted staff about the revised school timetable.','校长就修改后的学校时间表征求了教职员工意见。']
    ]);
    entry('scan',[
      ['search','仔细察看；逐处搜寻某物','v. / n.',['审视','细查','细看','详细调查'],'systematic-visual-search','The ranger scanned the hillside for signs of smoke.','巡护员仔细察看山坡，寻找烟雾迹象。'],
      ['read','快速浏览文字以找出信息或大意','v. / n.',['浏览'],'quick-text-search','She scanned the notice to find the application deadline.','她快速浏览通知，寻找申请截止日期。'],
      ['digital','扫描文字、图像或编码并转为电子信息','v. / n.',['扫描'],'electronic-data-capture','The librarian scanned the damaged photograph to preserve a digital copy.','图书管理员扫描了受损照片，以保存一份数字副本。'],
      ['medical','通过仪器检查内部结构；这种检查或得到的影像','v. / n.',['内部扫描检查'],'internal-imaging-examination','The scan revealed a small fracture that had not been visible before.','扫描发现了一处此前看不见的小骨折。'],
      ['metre','分析诗歌的格律；在格律上合拍','v.',['分析诗歌格律'],'analyse-poetic-metre','The class learned to scan the poem by marking its stressed syllables.','全班通过标记重读音节学习分析这首诗的格律。']
    ]);
    entry('submit',[
      ['present','提交；呈递以供审批或考虑','v.',['提交','呈递'],'present-for-consideration','Applicants must submit a short research proposal with their forms.','申请者必须随表格提交一份简短的研究计划。'],
      ['yield','屈服；服从；接受某种权威或程序','v.',['屈服','顺从','使接受'],'yield-to-authority','The company agreed to submit to an independent inspection.','公司同意接受独立检查。','submit to something'],
      ['argue','提出主张；认为（正式，常用于法律陈述）','v.',['主张','建议'],'formally-put-forward-argument','The lawyer submitted that the evidence did not support the accusation.','律师提出，证据不足以支持这一指控。','submit that ...']
    ]);
    entry('preview',[
      ['advance-view','预先观看；预览；正式公开前的介绍、试映或查看','n. / v.',['事先查看','预览','预演'],'advance-viewing','The curator gave local teachers a preview of the exhibition.','策展人让当地教师提前参观了展览。']
    ]);
    entry('review',[
      ['reconsider','重新审视；复查或评估以便调整；审查过程','v. / n.',['检讨','再检察','复审'],'reconsider-evaluate','The council will review the parking policy after six months.','市政委员会将在六个月后重新评估停车政策。'],
      ['criticism','评论作品；书评、影评等评价文章','v. / n.',['评论','写评论'],'critical-work-evaluation','Her review praised the novel’s dialogue but questioned its ending.','她的书评赞赏小说的对话，但质疑其结局。'],
      ['study','复习；再次学习已学过的内容','v. / n.',['复习','温习','复习功课'],'study-again','We reviewed the main equations before attempting the practice questions.','做练习题之前，我们复习了主要方程。'],
      ['survey','回顾；概述某段时期或某领域的主要进展','v. / n.',['回顾'],'retrospective-survey','The article provides a review of recent research on coastal erosion.','文章综述了近期关于海岸侵蚀的研究。'],
      ['military','检阅军队；正式的军队检阅','v. / n.',['检阅'],'military-inspection','The president reviewed the troops assembled in the square.','总统检阅了集结在广场上的部队。']
    ]);
    entry('extract',[
      ['remove','取出；拔出；采掘或从混合物中提取','v.',['(费力地)取出','采掘','榨取','吸取','提取'],'remove-obtain-material','The laboratory extracted a small DNA sample from the leaf.','实验室从叶片中提取了一小份 DNA 样本。'],
      ['obtain','设法从不愿提供的人那里获得信息、钱等','v.',['设法获得'],'obtain-with-difficulty','The interviewer struggled to extract a clear answer from the official.','采访者费力地试图从官员那里得到明确答复。'],
      ['substance','提取物；用于食品或药物的浓缩成分','n.',['榨出物','精汁'],'concentrated-extracted-substance','A few drops of vanilla extract gave the custard a delicate flavour.','几滴香草提取物让蛋奶酱有了淡雅的风味。'],
      ['text','摘录；从较长作品中选取的片段','n.',['摘录','选段'],'selected-text-passage','The exam included an extract from a nineteenth-century travel diary.','考试中使用了一段十九世纪旅行日记的节选。']
    ]);
    entry('discern',[
      ['perceive','辨认；看出或理解不易察觉的事物','v.',['辨别','看清楚','了解'],'perceive-not-obvious','Researchers could discern a faint pattern in the noisy data.','研究人员能从杂乱的数据中辨认出微弱的规律。']
    ]);
    entry('reckon',[
      ['think','认为；猜想；估计某种情况（非正式）','v.',['认为','猜想','料想'],'think-suppose','I reckon the walk will take longer after all this rain.','我估计，下了这么多雨，走完这段路会花更长时间。'],
      ['calculate','计算；估算数量或总额','v.',['计算','总计','估计','数'],'calculate-estimate-amount','The repair bill was reckoned at just over three thousand pounds.','维修账单估计略超过三千英镑。'],
      ['expect','指望；预计并依赖某事发生','v.',['依赖'],'count-on-expect','We had reckoned on ten volunteers, but only six arrived.','我们原指望有十名志愿者，但只来了六人。','reckon on something / doing something'],
      ['deal','考虑或应付某人某事的力量或影响','v.',['考虑应付'],'take-into-account','The team had not reckoned with such strong opposition.','团队没有考虑到会遇到如此强烈的反对。','reckon with someone / something']
    ]);
    entry('diagnose',[
      ['medical','诊断；通过检查确定疾病','v.',['诊断'],'identify-medical-condition','The clinic diagnosed a vitamin deficiency after carrying out blood tests.','诊所在进行血液检查后诊断出了维生素缺乏。'],
      ['problem','查明技术故障或其他问题的性质、原因','v.',['查明故障'],'identify-problem-cause','The technician diagnosed a loose connection in the lighting circuit.','技术人员查明照明电路中有一处连接松动。']
    ]);
    entry('contradiction',[
      ['conflict','矛盾；彼此不相容的说法、事实或要求','n.',['矛盾'],'incompatible-statements','There is a contradiction between the stated policy and the company’s actions.','所宣称的政策与公司的行动之间存在矛盾。'],
      ['denial','反驳；否认某人说法的陈述或行为','n.',['反驳','否认'],'direct-verbal-denial','He repeated the claim without fear of contradiction.','他再次提出这一说法，不担心有人反驳。']
    ]);
    entry('quantity',[
      ['amount','量；数量；可计算或测量的一定数目或总量','n.',['量','数量','总量'],'measurable-amount','The factory monitors both the quantity and the quality of its output.','工厂同时监控产量与产品质量。']
    ]);
    entry('remainder',[
      ['left','剩余部分；其余的人或事物','n.',['剩余物','其他人','残余'],'remaining-part','We spent the remainder of the afternoon repairing the fence.','我们用下午剩余的时间修理围栏。'],
      ['arithmetic','余数；整数除法后剩下的数','n.',['余数'],'division-remainder','Dividing seventeen by five leaves a remainder of two.','十七除以五，余数为二。'],
      ['books','滞销而降价出售的书；将这类书降价出售','n. / v.',['削价出售(图书)'],'unsold-discounted-book','The publisher remaindered the unsold copies after the new edition appeared.','新版出版后，出版社把未售出的旧版书降价处理了。']
    ]);
    entry('identical',[
      ['same','完全相同的；毫无差别的；同一的','adj.',['同一的','恒等的','完全相同的','同等的'],'exactly-the-same','The two samples looked identical under ordinary light.','在普通光线下，这两个样品看起来完全相同。']
    ]);
    entry('divide',[
      ['separate','分开；使整体分成若干部分或群体','v.',['分开','分裂','分'],'separate-into-parts','The teacher divided the class into groups of four.','老师把全班分成四人一组。'],
      ['share','分配；在不同人或用途之间分摊','v.',['分配'],'share-among-recipients','They divided the prize money equally among the four winners.','他们把奖金平均分给四位获胜者。'],
      ['boundary','分隔；成为两个区域之间的界线','v.',['分隔'],'mark-spatial-boundary','A narrow stream divides the orchard from the meadow.','一条小溪把果园与草地分隔开。'],
      ['disagreement','使意见分歧；产生隔阂','v.',['使意见分歧'],'cause-disagreement','The proposal divided residents who had previously supported the same campaign.','该提案使此前支持同一运动的居民产生了分歧。'],
      ['arithmetic','除；计算一个数中含有另一个数多少次','v.',['除'],'arithmetical-division','Divide the total distance by the journey time to find the average speed.','用总路程除以行程时间即可求得平均速度。'],
      ['gap','分歧；鸿沟；分水岭或地理分界线','n.',['分水岭'],'separating-gap-boundary','The project aims to reduce the digital divide between rural and urban areas.','该项目旨在缩小农村与城市之间的数字鸿沟。']
    ]);
    entry('double',[
      ['twice','两倍；双倍的；加倍；使增加到两倍','n. / adj. / adv. / v.',['两倍','两倍的','使加倍','加倍'],'twice-as-much','Demand for evening classes doubled within a year.','夜校课程的需求在一年内翻了一倍。'],
      ['paired','两个合在一起的；双重的；双人用的','adj.',['双重的'],'two-combined','The room has a double bed beside the window.','房间的窗边有一张双人床。'],
      ['person','酷似某人的人；替身演员','n.',['替身'],'lookalike-substitute','A stunt double performed the dangerous fall instead of the actor.','特技替身代替演员完成了危险的坠落动作。'],
      ['tennis','双打；每方两名球员的比赛（通常复数）','n.',['双打'],'two-player-team-sport','They reached the doubles final after a close match.','他们经过一场势均力敌的比赛进入了双打决赛。'],
      ['fold','对折；折叠或弯成两层','v.',['对折'],'fold-in-two','She doubled the blanket and laid it over the sleeping child.','她把毯子对折，盖在熟睡的孩子身上。'],
      ['role','兼任；兼作另一用途','v.',['兼作','代替'],'serve-another-purpose','The dining table doubles as a desk during the day.','餐桌在白天兼作书桌。','double as'],
      ['speed','迅速行动；快步前进（固定搭配）','n. / v.',['快步走'],'move-quickly','The coach called for the players to return on the double.','教练叫球员们赶快回来。','on the double']
    ]);
    entry('multiple',[
      ['many','多个的；多重的；包含许多部分的','adj.',['多样的','许多的','多功能的'],'more-than-one','The committee considered multiple explanations for the decline.','委员会考虑了造成下降的多种解释。'],
      ['number','倍数；由某数乘以整数得到的数','n.',['倍数'],'integer-multiple','Twenty-four is a multiple of both six and eight.','二十四既是六的倍数，也是八的倍数。'],
      ['valuation','估值倍数；股价与每股收益等指标之比','n.',['估值倍数'],'financial-valuation-ratio','Investors compared the earnings multiples of several firms in the same industry.','投资者比较了同行业几家公司的市盈率倍数。']
    ]);
    entry('maximum',[
      ['upper-limit','最大值；最高限度；允许或可能的最大的','n. / adj.',['极点','最大量','极大','最高的','最大的','最大极限的','最大值'],'upper-allowed-limit','The lift can carry a maximum of eight people.','这部电梯最多可载八人。']
    ]);
    entry('minimum',[
      ['lower-limit','最小值；最低限度；最低的或最少的','n. / adj.',['最小的','最低的','最小值'],'lower-allowed-limit','The course requires a minimum of ten hours of independent study each week.','这门课程要求每周至少进行十小时自主学习。']
    ]);
    entry('rectangle',[
      ['shape','矩形；四个角均为直角的四边形','n.',['长方形','矩形'],'four-right-angle-quadrilateral','Draw a rectangle with two long sides and two short sides.','画一个有两条长边和两条短边的矩形。']
    ]);
    entry('angle',[
      ['geometry','角；两条相交线或两个面之间的夹角','n.',['角','角度','角落'],'geometric-angle','The ladder forms an angle of seventy degrees with the ground.','梯子与地面形成七十度角。'],
      ['view','观察角度；看待或处理问题的立场','n.',['观察角度'],'perspective-opinion','The documentary examines the dispute from a historical angle.','纪录片从历史角度审视这场争端。'],
      ['slant','使倾斜；斜向移动或摆放','v.',['斜向移动','转变角度','使转动角度'],'position-at-slant','She angled the lamp towards the page to avoid glare.','她把灯斜向书页，以免产生眩光。'],
      ['fish','用鱼钩垂钓','v.',['钓鱼','在...钓鱼'],'fish-with-hook','They angled for trout in the river below the bridge.','他们在桥下的河里垂钓鳟鱼。','angle for fish'],
      ['seek','拐弯抹角地谋求；试图博取','v.',['谋取','博取','获取'],'indirectly-seek','His repeated hints suggested that he was angling for an invitation.','他反复暗示，表明他在拐弯抹角地谋求一份邀请。','angle for something']
    ]);
    entry('engineer',[
      ['professional','工程师；设计、建造或维护技术系统的人','n.',['工程师'],'engineering-professional','A structural engineer inspected the bridge after the storm.','一位结构工程师在风暴后检查了大桥。'],
      ['driver','火车司机（美式）','n.',['火车司机'],'railway-train-driver','The engineer slowed the train as it approached the platform.','列车驶近站台时，火车司机减慢了速度。'],
      ['design','设计制造；按工程原理建造','v.',['设计','监造'],'design-build-technically','The roof was engineered to withstand heavy snow.','这个屋顶经过工程设计，能够承受厚重积雪。'],
      ['arrange','精心策划促成；巧妙安排，常带幕后操作意味','v.',['精明地处理','策划'],'cleverly-arrange-outcome','She engineered a compromise that both departments could accept.','她巧妙促成了两个部门都能接受的折中方案。']
    ]);
    entry('technical',[
      ['technology','技术的；与科学、工业及其实际方法有关的','adj.',['技术上的','工业的'],'practical-technological','The team needs technical advice on repairing the water-treatment plant.','团队需要有关修复水处理厂的技术建议。'],
      ['specialist','专门学科或职业的；专业术语的','adj.',['专门的'],'specialized-subject-knowledge','The manual explains technical terms in plain language.','手册用通俗语言解释专业术语。'],
      ['formal','严格按规则或法律条文而言的；形式上的','adj.',['严格根据法律的'],'formal-rule-based','The result was a technical victory, though neither side felt satisfied.','按规则结果算是一方获胜，但双方都不满意。'],
      ['skill','技巧方面的；涉及实际操作熟练程度的','adj.',['技巧'],'execution-skill','The pianist’s technical skill was evident in the rapid passages.','钢琴家在快速乐段中展现了娴熟技巧。']
    ]);
    entry('engine',[
      ['machine','发动机；把能量转化为机械运动的机器','n.',['引擎','发动机'],'power-producing-engine','The engine stopped when the fuel supply was interrupted.','燃料供应中断后，发动机停止了运转。'],
      ['locomotive','机车；牵引列车的动力车头','n.',['机车'],'railway-locomotive','A restored steam engine pulled the tourist train through the valley.','一台修复的蒸汽机车牵引观光列车穿过山谷。'],
      ['driver','推动某种发展或变化的动力','n.',['发展动力'],'driving-force','Small businesses are an important engine of local economic growth.','小企业是当地经济增长的重要动力。'],
      ['software','执行特定任务的软件核心；引擎','n.',['软件引擎'],'task-specific-software-engine','The search engine ranks pages according to several signals.','搜索引擎根据多种信号对网页排序。']
    ]);
    entry('realm',[
      ['area','活动、思想或知识的领域','n.',['领域'],'subject-area','The discovery moved the debate into the realm of experimental science.','这项发现把讨论带入了实验科学领域。'],
      ['kingdom','王国；君主统治的国土（正式）','n.',['王国','领土'],'monarch-ruled-country','The map shows the boundaries of the medieval realm.','地图展示了这个中世纪王国的边界。']
    ]);
    entry('specialise',[
      ['expertise','专攻；专门从事某一领域或业务（英式拼写）','v.',['成为专家','专务','专攻','专门研究'],'focus-specialist-field','The clinic specialises in treating sports injuries.','这家诊所专门治疗运动损伤。','specialise in'],
      ['biology','特化；细胞或器官发展出特定功能','v.',['vi. (使)特化','(使)专化','使专门化'],'develop-specific-function','As the embryo develops, its cells specialise for different functions.','随着胚胎发育，细胞分化并承担不同功能。']
    ]);
    entry('utility',[
      ['usefulness','效用；实用性；有用程度','n.',['功用','有用之物','实用'],'practical-usefulness','The trial assessed the utility of the device in small clinics.','试验评估了该设备在小型诊所中的实用性。'],
      ['public','公用事业；供水、供电等服务或其供应机构','n.',['公用事业'],'public-essential-service','Residents were warned that utility services might be disrupted during the storm.','居民收到警告，风暴期间公用事业服务可能中断。'],
      ['program','实用程序；执行维护等专门任务的软件','n.',['实用程序'],'system-maintenance-program','The backup utility runs only when the computer is idle.','备份实用程序只在电脑空闲时运行。'],
      ['versatile','通用的；能在多个位置或用途中发挥作用的','adj.',['实用的','有多种用途的','工具'],'versatile-general-purpose','The team signed a utility player who could cover several positions.','球队签下了一名能胜任多个位置的多面手。']
    ]);
    entry('facility',[
      ['resources','设施；设备、建筑及配套服务','n.',['设备','设施','装备'],'purpose-built-resources','The community centre has excellent facilities for indoor sport.','社区中心拥有出色的室内运动设施。'],
      ['site','开展某类活动的场所或机构','n.',['专用场所'],'specialized-activity-site','The samples were analysed at a secure research facility.','样本在一处安保严密的研究设施中进行了分析。'],
      ['ability','熟练；轻松完成某事的能力','n.',['容易','灵巧'],'ease-of-ability','Her facility with languages helped the international team communicate.','她运用语言的娴熟能力帮助国际团队进行沟通。','facility with / for'],
      ['feature','某项可用的功能或便利','n.',['便利功能'],'available-system-feature','The website includes a facility for changing the text size.','网站提供调整文字大小的功能。']
    ]);
    entry('instrument',[
      ['tool','仪器；用于精密、科学或医疗操作的工具','n.',['工具','仪器'],'precision-measuring-tool','The instrument detects tiny changes in air pressure.','这台仪器能检测到气压的微小变化。'],
      ['music','乐器','n.',['乐器'],'musical-instrument','Every child had a chance to try a different instrument.','每个孩子都有机会尝试一种不同的乐器。'],
      ['means','手段；实现某种目的的工具','n.',['手段'],'means-to-achieve','The agreement became an instrument of cooperation rather than confrontation.','该协议成为合作的工具，而非对抗的工具。'],
      ['document','正式法律文书；金融票据等文件','n.',['法律文书'],'formal-legal-financial-document','The treaty is an international legal instrument with specific obligations.','该条约是一份规定具体义务的国际法律文书。']
    ]);
    entry('application',[
      ['request','申请；提出正式请求的行为或申请文件','n.',['申请','志愿书'],'formal-request','Her application for the scholarship included a detailed study plan.','她的奖学金申请中附有详细的学习计划。'],
      ['use','应用；把方法、规则或知识用于实际情况','n.',['应用'],'practical-application','The course focuses on the application of statistics to public health.','课程侧重统计学在公共卫生中的应用。'],
      ['software','应用程序；为特定用户任务设计的软件','n.',['应用程序'],'user-task-software','The application stores vocabulary notes on the user’s own device.','该应用程序把词汇笔记保存在用户自己的设备上。'],
      ['surface','涂抹；施用；把物质敷到表面的过程','n.',['涂抹'],'applying-substance-to-surface','A second application of paint covered the remaining marks.','再刷一遍油漆后，剩下的痕迹被遮住了。'],
      ['effort','专心投入；勤奋用功','n.',['专心用功'],'diligent-concentrated-effort','The task requires patience and sustained application.','这项任务需要耐心和持续的专注投入。']
    ]);
    entry('echo',[
      ['sound','回声；声音反射后再次传回；产生回声','n. / v.',['回声','回音','回响'],'reflected-sound','Their footsteps echoed along the empty stone corridor.','他们的脚步声在空旷的石头走廊中回响。'],
      ['repeat','重复或附和别人的话、想法或感受','v.',['重复','附和','呼应'],'repeat-another-message','Several speakers echoed the residents’ concerns about noise.','几位发言者表达了与居民相同的噪声担忧。'],
      ['resemblance','使人联想到过去事物的相似之处；反映','n. / v.',['反响','反映'],'reminiscent-similarity','The new station’s curved roof echoes the shape of the surrounding hills.','新车站弧形的屋顶呼应了周围山丘的轮廓。']
    ]);
    entry('feudalism',[
      ['system','封建制度；以土地、等级及效忠义务相联系的社会制度','n.',['封建主义','封建制度'],'feudal-social-system','The lecture examined how land ownership shaped European feudalism.','讲座探讨了土地所有制如何塑造欧洲封建制度。']
    ]);
    entry('traditional',[
      ['custom','传统的；长期沿袭的；符合惯例的','adj.',['传统的','惯例的'],'long-established-custom','The festival combines traditional music with modern dance.','这个节日将传统音乐与现代舞蹈结合起来。']
    ]);
    entry('decorate',[
      ['ornament','装饰；添加物品以使更美观','v.',['装饰','布置'],'add-ornament','The children decorated the hall with paper stars.','孩子们用纸星星装饰了大厅。'],
      ['renovate','粉刷或贴壁纸装修房屋（主要为英式）','v.',['装修'],'paint-paper-interior','They decorated the spare room before the guests arrived.','客人到来前，他们粉刷装修了客房。'],
      ['honour','授予勋章；表彰功绩','v.',['授予勋章'],'award-honour','The rescue worker was decorated for exceptional courage.','那位救援人员因非凡勇气而获授勋章。']
    ]);
    entry('holy',[
      ['sacred','神圣的；与神、宗教或崇拜有关的','adj.',['神圣的','圣洁的'],'religiously-sacred','Visitors removed their shoes before entering the holy place.','访客进入圣地之前脱下了鞋子。'],
      ['devout','虔诚高尚的；被认为在宗教上纯洁的','adj.',['至善的'],'religiously-devout-person','The village remembered him as a holy man who lived simply.','村民们记得他是一位生活简朴的虔诚之人。']
    ]);
    entry('bishop',[
      ['church','主教；负责某地区教会事务的高级教职人员','n.',['主教'],'senior-church-leader','The bishop visited several small churches in the diocese.','主教走访了教区内的几座小教堂。'],
      ['chess','国际象棋中的象；沿同色斜线行走的棋子','n.',['(国际象棋中的)象'],'diagonal-chess-piece','She moved her bishop along the diagonal to attack the rook.','她沿斜线移动象，攻击对方的车。']
    ]);
    entry('missionary',[
      ['religion','传教士；受派遣传播宗教的人；传教的','n. / adj.',['传教士','传教的','传教士的'],'religious-mission-worker','The archive contains letters written by a nineteenth-century missionary.','档案中保存着一位十九世纪传教士写的信。']
    ]);
    entry('imperial',[
      ['empire','帝国的；皇帝的；与帝国统治有关的','adj.',['帝王的','宗主国的'],'empire-emperor-related','The exhibition traces the city’s expansion during the imperial period.','展览追溯了这座城市在帝国时期的扩张。'],
      ['measure','英制的；使用英寸、英里、品脱等计量单位的','adj.',['英制的'],'british-imperial-measurement','The recipe gives both metric and imperial measurements.','食谱同时给出公制和英制计量数值。']
    ]);
    entry('royal',[
      ['monarchy','王室的；皇家的；王室成员','adj. / n.',['王室','皇族','王室的','皇家的'],'royal-family-related','The royal household opened part of the palace to visitors.','王室向访客开放了宫殿的一部分。'],
      ['grand','盛大的；隆重豪华的','adj.',['盛大的','庄严的'],'grand-splendid-treatment','The returning athletes received a royal welcome from the town.','归来的运动员受到全镇隆重欢迎。']
    ]);
    entry('majestic',[
      ['impressive','宏伟庄严的；令人敬畏的','adj.',['宏伟的','庄严的'],'grand-impressive','The train passed beneath majestic cliffs rising above the coast.','列车从海岸上方耸立的雄伟峭壁下经过。']
    ]);
    entry('homesick',[
      ['longing','思乡的；因远离家乡或亲人而难过的','adj.',['思家的','思乡病的'],'sad-away-from-home','She felt homesick during her first week at the boarding school.','寄宿学校的第一周，她感到很想家。']
    ]);
    entry('handwriting',[
      ['script','笔迹；手写字的个人风格或书写形式','n.',['笔迹'],'personal-written-script','The historian recognized the handwriting on the unsigned letter.','历史学家认出了那封未署名信上的笔迹。']
    ]);
    entry('alphabetical',[
      ['order','按字母顺序排列的；与字母表有关的','adj.',['依字母顺序的','字母的'],'alphabet-based-order','The index lists the authors in alphabetical order.','索引按字母顺序列出作者。']
    ]);
    entry('express',[
      ['communicate','表达；用语言、行动或外表表露想法感受','v.',['表达','表示','表露'],'communicate-feeling-idea','Residents expressed concern about the loss of local green space.','居民表达了对当地绿地减少的担忧。'],
      ['speed','快速的；快车；快递服务；以快递寄送','adj. / n. / adv. / v.',['快车','快递','快的'],'fast-transport-service','The express train reaches the capital without stopping at smaller stations.','这班特快列车不停小站，直达首都。'],
      ['explicit','明确的；清楚说明的；特定的','adj.',['明确的','专门的'],'explicitly-stated','The photographs may not be reproduced without the artist’s express permission.','未经艺术家明确许可，不得复制这些照片。']
    ]);
    entry('complicated',[
      ['complex','复杂的；由许多部分组成而难以理解或处理的','adj.',['复杂的'],'complex-hard-to-understand','The application process was too complicated for many first-time users.','对许多首次使用者来说，申请流程过于复杂。']
    ]);
    entry('version',[
      ['form','版本；与其他形式稍有差别的一种产品或文本','n.',['版本'],'particular-product-form','The latest version of the software works without an internet connection.','这个软件的最新版本无需联网即可运行。'],
      ['adaptation','译本；改编形式；对原作的不同呈现','n.',['译本','改编形式'],'translated-adapted-rendering','The class compared a film version of the novel with the original book.','全班比较了小说的电影改编版与原著。'],
      ['account','对事件的说法；个人描述','n.',['说法','描述'],'account-of-events','The two witnesses gave different versions of what happened.','两位证人对发生的事情给出了不同说法。']
    ]);
    entry('inconsistent',[
      ['conflict','前后矛盾的；与另一事实或原则不一致的','adj.',['不一致的','前后矛盾的','矛盾的','不协调的'],'contradictory-not-agreeing','The results are inconsistent with the original hypothesis.','结果与最初的假设不一致。','inconsistent with'],
      ['variable','表现不稳定的；时好时坏的','adj.',['易变的'],'unreliable-variable-performance','The team’s inconsistent form made the final result difficult to predict.','球队状态时好时坏，使决赛结果难以预测。']
    ]);
    entry('consist',[
      ['parts','由……组成；包含某些部分（不及物）','v.',['组成'],'made-up-of','The kit consists of a sensor, a cable and a small display.','套件由传感器、电缆和小显示屏组成。','consist of'],
      ['essence','在于；主要内容或本质是（正式）','v.',['存在于'],'essentially-lie-in','Good teaching consists in helping learners ask better questions.','好的教学在于帮助学习者提出更好的问题。','consist in']
    ]);
    entry('debatable',[
      ['uncertain','有争议的；尚不能确定、可提出异议的','adj.',['可争论的','成问题的','未决定的'],'open-to-dispute','Whether the scheme will save money remains debatable.','这项方案能否省钱仍有争议。']
    ]);
    entry('medium',[
      ['middle','中等的；大小、程度或数量居中的','adj.',['中等的','适中的'],'middle-size-degree','Choose a medium-sized pot so the roots have room to grow.','选择一个中等大小的花盆，给根部留出生长空间。'],
      ['meat','肉类中等熟度的','adj.',['中等熟度的'],'medium-cooked-meat','He asked for his steak to be cooked medium.','他要求牛排做成中等熟度。'],
      ['communication','传达信息或表达想法的媒介、方法（复数 media）','n.',['媒介','媒体','方法','手段'],'communication-expression-means','Radio remains an important medium for reaching remote communities.','广播仍是向偏远社区传递信息的重要媒介。'],
      ['substance','介质；物质传播或生物生长所处的环境','n.',['介质'],'supporting-transmission-substance','The bacteria grew rapidly in the nutrient medium.','细菌在营养培养基中迅速生长。'],
      ['art','绘画、雕塑等创作材料或形式','n.',['艺术媒材'],'artistic-material-form','Watercolour was her preferred medium for landscape painting.','水彩是她画风景时最喜欢的媒材。'],
      ['spiritualist','声称能与亡灵沟通的人（复数 mediums）','n.',['灵媒'],'claimed-spirit-intermediary','The novel features a medium who claims to hear voices from the past.','小说中有一位声称能听见过去亡灵声音的灵媒。']
    ]);
    entry('press',[
      ['push','按；压；用持续的力推挤','v.',['压','揿','按','重压','受压'],'apply-firm-pressure','Press the green button to restart the machine.','按绿色按钮即可重启机器。'],
      ['iron','熨平衣物','v.',['熨平'],'iron-clothing','She pressed the shirt before the interview.','面试前，她把衬衫熨平了。'],
      ['extract','压榨果汁或油；把物体压扁压实','v.',['压榨'],'squeeze-flatten','The apples are pressed soon after harvesting to make fresh juice.','苹果采摘后很快就被压榨成鲜果汁。'],
      ['urge','催促；施压劝说；坚持要求','v.',['逼迫','催逼','催促'],'urge-with-pressure','The union pressed the company to improve safety standards.','工会向公司施压，要求提高安全标准。'],
      ['media','报刊；新闻界；记者群体（常用 the press）','n.',['记者','报刊','新闻舆论'],'news-media-collective','The press questioned officials about the delayed investigation.','新闻界就调查延误一事向官员提出质疑。'],
      ['machine','印刷机；压力机；用压力加工物品的机器','n.',['印刷机'],'printing-pressing-machine','The old printing press still produces clear impressions.','那台旧印刷机仍能印出清晰的字迹。'],
      ['publisher','出版社；出版机构','n.',['出版社'],'publishing-organization','A university press published the historian’s first book.','一家大学出版社出版了这位历史学家的第一本书。'],
      ['crowd','拥挤的人群；挤压着前行','n. / v.',['人群','拥挤'],'crowd-pressing-together','We moved slowly through the press of people near the exit.','我们缓慢穿过出口附近拥挤的人群。'],
      ['continue','坚持推进；继续努力行动','v.',['推进','奋力前进'],'persist-in-action','Despite the rain, the volunteers pressed on with the repairs.','尽管下雨，志愿者仍继续维修。','press on / ahead with']
    ]);
    entry('circus',[
      ['performers','马戏团；马戏表演','n.',['马戏团','马戏'],'travelling-performance-group','The travelling circus set up its tent on the edge of town.','巡回马戏团在镇边搭起了帐篷。'],
      ['commotion','喧闹混乱的场面；围绕某事的大肆关注','n.',['喧闹场面'],'publicity-commotion','The trial became a media circus outside the courthouse.','审判使法院外变成了媒体竞相炒作的喧闹场面。'],
      ['junction','几条道路汇合的圆形广场或路口（英式）','n.',['圆形路口'],'circular-road-junction','Several busy streets meet at the circus near the theatre.','几条繁忙街道在剧院附近的圆形路口交汇。']
    ]);
    entry('stage',[
      ['phase','阶段；发展过程的一部分或火箭的一级','n.',['阶段','级'],'development-process-phase','The project is moving from the planning stage to construction.','项目正从规划阶段进入施工阶段。'],
      ['platform','舞台；演出区域；戏剧表演事业','n.',['舞台','戏剧'],'theatrical-performance-space','The actors returned to the stage for a final bow.','演员们回到舞台上最后一次谢幕。'],
      ['arena','活动领域；发挥作用的公共场合','n.',['场所'],'public-arena','The agreement brought the small nation onto the international stage.','这项协议使这个小国登上了国际舞台。'],
      ['organize','上演；举办；筹划并实施活动或行动','v.',['上演','表演','筹划'],'organize-public-event','Students staged a short play to raise money for the library.','学生们上演了一部短剧，为图书馆筹款。']
    ]);
    entry('photographic',[
      ['photography','摄影的；照片的；用于摄影的','adj.',['照相的','摄影用的'],'photography-related','The archive stores photographic records of the town’s changing streets.','档案馆保存着记录市镇街道变迁的照片资料。'],
      ['memory','记忆如照片般精确的（特定搭配）','adj.',['详细记录的','逼真的','酷似的'],'vivid-detailed-memory','His photographic memory helped him recall the layout of every page.','他如照相般精确的记忆帮助他回想起每页的版式。','photographic memory']
    ]);
    entry('tone',[
      ['sound','音质；音调；声音的高低或特点','n.',['音调','音质'],'sound-quality-pitch','The violin has a warm tone that suits the slow movement.','这把小提琴的音色温暖，适合演奏慢乐章。'],
      ['attitude','语气；文章或谈话表现出的态度与氛围','n.',['语调','语气','气氛','思想状态'],'attitude-of-expression','The letter adopted a reassuring tone despite the difficult news.','尽管消息令人难受，信的语气仍给人安慰。'],
      ['colour','色调；颜色的深浅或细微差别','n. / v.',['色调','给...定色调','颜色调和'],'colour-shade','The room was painted in soft tones of blue and grey.','房间刷成了柔和的蓝灰色调。'],
      ['muscle','肌肉的紧实状态；使肌肉强健紧实','n. / v.',['状况','增强'],'muscle-firmness','Regular swimming helped tone the muscles in her back.','经常游泳帮助她增强了背部肌肉。'],
      ['interval','全音；等于两个半音的音程（音乐）','n.',['全音'],'whole-tone-interval','The melody rises by a tone at the start of the second phrase.','旋律在第二乐句开头上升了一个全音。'],
      ['moderate','缓和语气、强度或颜色','v.',['缓和'],'reduce-intensity','The editor asked him to tone down the criticism.','编辑请他把批评的语气放缓一些。','tone down']
    ]);
    entry('drum',[
      ['music','鼓；鼓声；打鼓或有节奏地敲击','n. / v.',['鼓','鼓声','击鼓','作鼓声','打鼓奏出'],'percussive-drum','She drummed her fingers on the table while waiting for the result.','等待结果时，她用手指在桌上有节奏地敲击。'],
      ['container','圆桶；圆柱状容器','n.',['圆桶'],'cylindrical-storage-container','The oil was stored in sealed metal drums.','油储存在密封的金属圆桶中。'],
      ['machine','机器中的滚筒或鼓形部件','n.',['滚筒'],'machine-cylinder','A loose coin rattled inside the washing-machine drum.','一枚松散的硬币在洗衣机滚筒里哗啦作响。'],
      ['attract','争取支持；招徕生意或兴趣','v.',['招徕'],'attract-support-business','The exhibition helped drum up interest in local crafts.','展览帮助激发了人们对当地手工艺的兴趣。','drum up']
    ]);
    entry('disc',[
      ['shape','圆盘；薄而扁的圆形物体','n.',['圆盘'],'flat-circular-object','The badge is a small metal disc with an engraved number.','徽章是一块刻有编号的小金属圆盘。'],
      ['recording','唱片；光盘等录音或数据存储盘','n.',['唱片'],'recording-storage-disc','The interview was preserved on a disc in the sound archive.','这段采访被保存在声音档案馆的一张光盘上。'],
      ['spine','椎间盘；脊椎骨之间的软骨结构','n.',['椎间盘'],'intervertebral-disc','The diagram shows a disc between two adjacent vertebrae.','示意图显示了相邻两块椎骨之间的椎间盘。']
    ]);
    entry('piano',[
      ['instrument','钢琴；用黑白键弹奏的弦乐器','n.',['钢琴'],'keyboard-string-instrument','The school bought a piano for the new music room.','学校为新音乐教室买了一架钢琴。'],
      ['soft','轻柔地；弱音的（音乐术语，读音与钢琴义有别）','adv. / adj.',['轻柔地'],'soft-musical-dynamic','The composer marked the final passage piano to create a calm ending.','作曲家把最后一段标为弱奏，以营造平静的结尾。']
    ]);
    entry('exercise',[
      ['physical','运动；锻炼身体；使肌肉或动物活动','n. / v.',['运动','锻炼'],'physical-exercise','Gentle exercise helped him regain confidence after a long break.','温和的锻炼帮助他在长时间休息后恢复了信心。'],
      ['practice','练习；为训练技能而做的题目或任务','n.',['练习','作业'],'skill-practice-task','Each vocabulary exercise uses the word in a different context.','每道词汇练习都把单词用于不同语境。'],
      ['use','行使权力；运用判断力、谨慎等能力','n. / v.',['行使','执行','运用'],'use-power-judgment','The committee exercised its right to request further evidence.','委员会行使了要求提供进一步证据的权利。'],
      ['operation','为某一目的安排的演习或活动','n.',['演习'],'organized-training-operation','The emergency exercise tested communication between the rescue teams.','应急演习检验了救援队之间的沟通。']
    ]);
    entry('chess',[
      ['game','国际象棋；双方各以十六枚棋子进行的棋类游戏','n.',['国际象棋'],'chess-board-game','Playing chess taught her to think several moves ahead.','下国际象棋让她学会了提前考虑几步。']
    ]);
    entry('racket',[
      ['sport','球拍；用于网球、羽毛球等运动的器具','n.',['球拍'],'sports-racket','He replaced the worn strings in his tennis racket.','他更换了网球拍上磨损的拍线。'],
      ['noise','喧闹声；刺耳而杂乱的噪声','n.',['喧闹','杂乱无章'],'loud-unpleasant-noise','The builders made such a racket that we could not hear the radio.','建筑工人发出很大的噪声，我们都听不清收音机了。'],
      ['illegal','非法牟利勾当；敲诈等犯罪活动','n.',['非法勾当'],'illegal-money-making-scheme','The investigation uncovered a racket selling forged certificates.','调查揭露了一个贩卖伪造证书的非法勾当。']
    ]);
    entry('nail',[
      ['fastener','钉子；用钉子钉牢','n. / v.',['钉子','用钉钉牢','使固定'],'metal-fastener','He nailed a loose board back onto the fence.','他把松动的木板重新钉到围栏上。'],
      ['body','指甲；趾甲','n.',['指甲'],'finger-toe-nail','A dark mark appeared beneath the nail after she trapped her finger.','她夹到手指后，指甲下出现了一块淤痕。'],
      ['catch','抓住；查实某人有罪（非正式）','v.',['截住','揭露'],'catch-prove-guilt','The missing receipts helped investigators nail the fraudster.','缺失的收据帮助调查人员查实了诈骗者的罪行。'],
      ['succeed','出色完成；成功做到（非正式）','v.',['出色完成'],'successfully-accomplish','She nailed the difficult opening of the piano solo.','她出色完成了钢琴独奏中困难的开头。'],
      ['fix','敲定；确定或解释清楚','v.',['敲定'],'establish-definitely','We need to nail down the delivery date before sending the invitations.','发邀请之前，我们需要敲定交付日期。','nail down']
    ]);
    entry('plug',[
      ['electrical','插头；接插件；连接电源或其他设备','n. / v.',['插头','插入','接插头'],'electrical-connector','She checked the plug before connecting the monitor to the socket.','把显示器连接到插座前，她检查了插头。'],
      ['stopper','塞子；堵住孔洞或缺口','n. / v.',['塞子','栓','塞住','被塞住'],'block-hole-stopper','A rubber plug stopped water escaping from the basin.','橡胶塞堵住了盆里的水，不让它流走。'],
      ['publicity','宣传；在谈话或媒体中推介某物','n. / v.',['宣传推介'],'promote-in-public','The author used the interview to plug her new book.','作者利用采访宣传她的新书。'],
      ['persist','持续努力做某事','v.',['持续努力'],'persist-at-task','They kept plugging away at the calculations until midnight.','他们坚持做计算，一直做到午夜。','plug away at']
    ]);
    entry('pipe',[
      ['tube','管道；管子；用管道输送','n. / v.',['管','导管','输送管','以管输送','管道'],'tube-conveyance','The system pipes warm water from the boiler to each room.','这套系统通过管道把热水从锅炉输送到各个房间。'],
      ['smoking','烟斗；带有装烟草斗部和吸嘴的器具','n.',['烟斗'],'tobacco-smoking-pipe','The museum displayed a carved wooden pipe from the nineteenth century.','博物馆展出了一支十九世纪的雕花木烟斗。'],
      ['music','笛管；管乐器；风琴中的发声管','n.',['笛','管乐器'],'wind-instrument-pipe','Air passing through the organ pipes produced a deep chord.','空气通过风琴管，奏出低沉的和弦。'],
      ['voice','用尖细的嗓音说或唱','v.',['尖声唱','尖叫'],'high-pitched-voice','A small child piped up from the back of the classroom.','一个小孩从教室后排尖声开口说话。','pipe up'],
      ['decorate','用裱花袋挤出细条奶油等','v.',['裱花'],'squeeze-decorative-icing','She piped a border of cream around the cake.','她沿蛋糕边缘裱了一圈奶油。']
    ]);
    entry('pad',[
      ['cushion','衬垫；垫子；加软垫以保护或填充','n. / v.',['填补','衬垫'],'soft-protective-cushion','The case was padded to protect the fragile instrument.','箱子里加了软垫，以保护易碎的仪器。'],
      ['paper','便笺本；一叠一端粘合的纸','n.',['便笺本'],'bound-writing-sheets','She wrote the measurements on a small pad beside the machine.','她把测量值写在机器旁的小便笺本上。'],
      ['platform','平台；着陆、发射或固定设备的平坦区域','n.',['平台'],'flat-operational-platform','The helicopter landed on a pad behind the hospital.','直升机降落在医院后面的停机坪上。'],
      ['walk','轻轻走；脚步轻而缓慢地移动','v.',['走','步行'],'walk-softly','The cat padded across the kitchen without making a sound.','猫悄无声息地轻步走过厨房。'],
      ['inflate','虚增费用；用多余内容拉长文字','v.',['夸大'],'inflate-unnecessarily','The consultant was accused of padding the expense claim.','那名顾问被指控虚增报销费用。'],
      ['home','住所；公寓（非正式）','n.',['住所'],'informal-home','His tiny city pad was close enough to walk to work.','他在城里的小住所离单位很近，走路就能上班。']
    ]);
    entry('strand',[
      ['thread','股；根；绳线、头发或串状物中的细长部分','n.',['(绳索的)股','绳','串'],'thin-thread-fibre','A single strand of hair lay across the microscope slide.','显微镜载玻片上放着一根头发。'],
      ['aspect','复杂整体中的一条线索、组成方面','n.',['组成线索'],'part-of-complex-whole','The final chapter brings the different strands of the argument together.','最后一章把论证的不同线索联系起来。'],
      ['leave','使滞留；使无法离开或继续前进','v.',['搁浅','使搁浅','使陷于困境'],'leave-unable-to-proceed','The cancelled ferry stranded dozens of travellers on the island.','渡轮取消使数十名旅客滞留岛上。'],
      ['shore','海滨；海滩（文学用语）','n.',['海滨','河岸'],'shore-strand','The poem describes an empty strand beneath a winter moon.','诗中描写了冬月下空无一人的海滨。']
    ]);
    entry('curtain',[
      ['cloth','窗帘；帷幕；悬挂以遮挡视线或光线的材料','n.',['帐','幕','窗帘'],'hanging-screening-cloth','Thick curtains kept the bedroom dark after sunrise.','厚窗帘让卧室在日出后仍保持昏暗。'],
      ['screen','遮挡视线的浓密一层；遮蔽','n. / v.',['遮蔽'],'obscuring-layer','A curtain of rain hid the opposite bank from view.','一道雨幕遮住了对岸。'],
      ['performance','剧场幕布；演出开始或结束的时刻','n.',['剧场幕布'],'theatrical-curtain-time','The audience fell silent as the curtain rose.','幕布升起时，观众安静下来。']
    ]);
    entry('handle',[
      ['grip','把手；柄；便于抓握的部分','n.',['柄','把手','柄状物'],'graspable-handle','The suitcase handle broke just before boarding.','登机前，行李箱的把手断了。'],
      ['manage','处理问题；管理事务；应付局面','v.',['处理','运用'],'deal-with-responsibility','The receptionist handled the complaint calmly and efficiently.','接待员冷静高效地处理了投诉。'],
      ['touch','用手接触、拿取或搬动','v.',['触摸','搬运'],'touch-move-by-hand','Please handle the photographs only by their edges.','拿照片时请只接触边缘。'],
      ['operate','操纵；控制车辆或设备；操纵起来具有某种表现','v.',['操作','易于操纵'],'control-machine-vehicle','The small boat handles well even in a strong crosswind.','即使在强烈侧风中，这艘小船也很好操纵。'],
      ['trade','经营或经销某类商品','v.',['买卖'],'deal-in-goods','The shop handles second-hand scientific equipment.','这家商店经营二手科学设备。'],
      ['name','网名；用户名或别人称呼某人的名字','n.',['网名'],'informal-online-name','She uses the same handle on several photography forums.','她在几个摄影论坛上使用同一个网名。']
    ]);
    entry('switch',[
      ['electrical','开关；通过开关开启、关闭或改变工作状态','n. / v.',['开关','电闸','切换'],'electrical-control-switch','A single switch turns off all the lights in the room.','一个开关就能关闭房间里所有灯。'],
      ['change','转换；更换；交换人物、事物或做法','n. / v.',['转换','转变','变换','翻转','转移'],'exchange-change-alternative','The school switched to digital forms to reduce paper waste.','学校改用电子表格，以减少纸张浪费。'],
      ['railway','铁路道岔；使列车改变轨道','n. / v.',['道岔','使转轨'],'railway-track-switch','The switch guided the train onto the platform track.','道岔把列车引向站台轨道。'],
      ['twig','柔软细枝；旧式用作鞭条的枝条','n.',['软枝','鞭子'],'flexible-twig','The historical display included a thin willow switch.','历史展览中展出了一根细柳条。']
    ]);
    entry('bulb',[
      ['plant','鳞茎；洋葱等植物的地下储藏器官','n.',['鳞茎'],'plant-storage-bulb','Plant each tulip bulb with its pointed end facing upwards.','种植每个郁金香鳞茎时，要让尖端朝上。'],
      ['light','灯泡；产生电光的可更换部件','n.',['电灯泡'],'electric-light-bulb','An efficient LED bulb replaced the old lamp.','一个高效 LED 灯泡替换了旧灯泡。'],
      ['rounded','球状部件；温度计底部或挤压吸液器的膨大部分','n.',['球'],'rounded-device-end','Squeezing the rubber bulb drew liquid into the dropper.','挤压橡胶球后，液体被吸入滴管。']
    ]);
    entry('drawer',[
      ['furniture','抽屉；家具中可拉出的无盖储物箱','n.',['抽屉'],'sliding-storage-compartment','The spare keys were hidden in the top drawer.','备用钥匙藏在最上面的抽屉里。'],
      ['finance','出票人；开具支票或汇票并要求付款的人','n.',['开票人'],'writer-of-payment-order','The drawer signed the cheque before sending it to the supplier.','出票人在把支票寄给供应商之前签了字。']
    ]);
    entry('vogue',[
      ['fashion','时尚；一时的流行或受欢迎状态','n.',['时尚','时髦','流行','流行的','时髦的'],'current-popular-fashion','Handmade ceramics are back in vogue among younger buyers.','手工陶瓷又在年轻买家中流行起来。','in / out of vogue; a vogue for']
    ]);
    entry('jewel',[
      ['gem','宝石；珠宝饰物','n.',['珠宝','镶珠宝的饰物'],'precious-decorative-stone','The necklace contained a single green jewel.','项链上镶着一颗绿色宝石。'],
      ['valuable','珍贵的人或事物；特别美好、有用的事物','n.',['贵重物'],'treasured-person-thing','The restored theatre is a jewel in the town’s cultural life.','修复后的剧院是这座市镇文化生活中的一颗明珠。'],
      ['watch','手表机械中减小摩擦的宝石轴承','n.',['宝石轴承'],'watch-jewel-bearing','The watchmaker inspected the tiny jewel supporting the pivot.','钟表匠检查了支撑轴枢的微小宝石轴承。']
    ]);
    entry('fascinate',[
      ['interest','使着迷；深深吸引注意力和兴趣','v.',['令人入神','使着迷','入迷'],'absorb-interest','The intricate patterns of frost fascinated the photographer.','霜形成的复杂图案使摄影师着迷。']
    ]);
    entry('appearance',[
      ['look','外观；外表；给人的表面印象','n.',['外观','外表'],'outward-look','The new windows changed the appearance of the whole building.','新窗户改变了整座建筑的外观。'],
      ['arrival','出现；显现；首次被注意到','n.',['出现','露面'],'becoming-present','The sudden appearance of dark clouds sent the walkers indoors.','乌云突然出现，步行者纷纷躲进室内。'],
      ['public','公开露面；在演出、比赛或节目中登场','n.',['公开登场'],'public-performance-presence','The singer made a brief appearance at the charity concert.','歌手在慈善音乐会上短暂登场。']
    ]);
    entry('model',[
      ['representation','模型；对实物或过程的缩小、简化或数学表示','n. / v.',['模型','作模型用的','做模型'],'representative-model','The team built a model to predict how floodwater would spread.','团队建立了一个模型，预测洪水将如何扩散。'],
      ['example','模范；值得仿效的典型；模范的','n. / adj.',['模范','模范的'],'example-to-emulate','The school became a model for community-based education.','这所学校成为社区教育的典范。'],
      ['person','模特儿；供展示、摄影或绘画的人；做模特儿','n. / v.',['模特儿','做模特儿'],'fashion-art-model','The model stood still while the students sketched her pose.','学生们素描她的姿势时，模特儿站着不动。'],
      ['type','型号；同类产品中的特定设计','n.',['型号'],'product-design-type','This model uses less electricity than the previous one.','这个型号比前一个型号更省电。'],
      ['shape','塑造；用黏土等制作形状','v.',['塑造'],'shape-malleable-material','He modelled a small bird out of clay.','他用黏土塑造了一只小鸟。'],
      ['imitate','以……为蓝本；使模仿某种结构或行为','v.',['使模仿'],'base-on-example','The new library was modelled on a successful project in a neighbouring town.','新图书馆以邻镇一个成功项目为蓝本。','model something on / after']
    ]);
    entry('robe',[
      ['garment','宽松长袍；礼袍或浴袍','n.',['宽松长袍','礼服'],'long-loose-garment','Graduates wore dark robes during the ceremony.','毕业生在典礼上穿着深色长袍。']
    ]);
    entry('wrap',[
      ['cover','包；裹；用纸、布等围住或覆盖','v.',['包装','卷','缠绕','包','裹','覆盖','遮蔽','包起来'],'cover-by-wrapping','She wrapped the fragile bowl in a thick towel.','她用厚毛巾包住易碎的碗。'],
      ['clothing','披肩；围巾式外衣','n.',['外套','围巾'],'shoulder-wrap','A light wrap kept her shoulders warm after sunset.','日落后，一条薄披肩让她的肩部保持温暖。'],
      ['food','卷饼；用薄饼包住馅料的食物','n.',['卷饼'],'filled-flatbread','The cafe serves a vegetable wrap with a yoghurt dressing.','咖啡馆供应配酸奶酱的蔬菜卷饼。'],
      ['finish','完成；结束某项工作或讨论','v.',['结束'],'finish-bring-to-close','Let’s wrap up the meeting before the last train leaves.','我们在末班火车开出前结束会议吧。','wrap up'],
      ['text','使文字在行尾自动换行','v.',['换行'],'automatic-text-line-break','The editor wraps long lines so the paragraph fits the narrow screen.','编辑器使长行文字自动换行，让段落适应窄屏幕。'],
      ['secrecy','保密；不公开（固定表达）','n.',['秘密','隐藏','掩护'],'keep-secret','The museum kept the new exhibit under wraps until opening day.','博物馆一直把新展品保密到开幕当天。','keep something under wraps']
    ]);
    entry('lace',[
      ['fabric','蕾丝；有镂空花纹的装饰织物','n.',['饰带','花边','缎带'],'openwork-decorative-fabric','A narrow strip of lace edged the sleeve.','袖口镶着一条窄蕾丝花边。'],
      ['cord','鞋带等穿孔后系紧的细带；穿带并系紧','n. / v.',['鞋带','结带子','系带子'],'lacing-fastening-cord','He laced his boots tightly before setting off across the snow.','踏雪出发前，他把靴带系紧了。'],
      ['add','在饮食中加入酒或药物，常为暗中加入','v.',['掺入'],'add-alcohol-or-drug','The dessert was laced with a small amount of orange liqueur.','这道甜点加入了少量橙味利口酒。'],
      ['interweave','使充满；在文字或言语中穿插某种内容','v.',['穿插'],'interweave-content','Her account was laced with references to childhood summers.','她的叙述中穿插着许多童年夏日的回忆。','be laced with']
    ]);
    entry('tan',[
      ['skin','晒黑；晒成棕褐色；日晒形成的肤色','n. / v.',['晒成棕褐色','把...晒黑'],'sun-darkened-skin','His arms had a deep tan after a summer of outdoor work.','经过一个夏天的户外工作，他的手臂晒成了深棕色。'],
      ['colour','黄褐色；浅棕色；这种颜色的','n. / adj.',['黄褐色','黄褐色的'],'pale-yellow-brown','She paired a tan jacket with dark trousers.','她用黄褐色夹克搭配深色裤子。'],
      ['leather','鞣制皮革；使兽皮变得柔韧耐用','v.',['鞣(革)'],'prepare-animal-hide','The workshop tans leather using plant-based materials.','这间作坊使用植物材料鞣制皮革。']
    ]);
    entry('fade',[
      ['colour','褪色；使颜色或亮度逐渐减弱','v.',['褪色','使褪色'],'lose-colour-brightness','The lettering on the sign faded after years in the sun.','标牌上的字经过多年日晒后褪色了。'],
      ['weaken','逐渐消失、衰弱或失去重要性','v. / n.',['消失','凋谢'],'gradually-diminish','Her doubts faded as the evidence became clearer.','证据越来越清晰，她的疑虑渐渐消失了。'],
      ['transition','画面或声音渐入、渐出；这种过渡效果','v. / n.',['淡入','淡出'],'gradual-media-transition','The music fades out as the final image disappears.','最后一个画面消失时，音乐渐渐淡出。','fade in / out']
    ]);
    entry('treat',[
      ['behave','对待；以某种方式处理或看待','v.',['视为','对待'],'behave-towards','The staff treat every visitor with patience and respect.','工作人员耐心而尊重地对待每位访客。'],
      ['medical','治疗；为疾病或伤情提供医疗处理','v.',['治疗'],'provide-medical-treatment','The clinic treats minor injuries as well as chronic conditions.','诊所既治疗轻伤，也治疗慢性病。'],
      ['pay','请客；为他人付费享用某物','v.',['宴请','款待','作东'],'pay-for-someone-pleasure','Her aunt treated her to lunch after the exam.','考试后，姨妈请她吃了午饭。','treat someone to something'],
      ['special','乐事；额外享受的美好体验或东西','n.',['乐事'],'special-enjoyable-experience','A visit to the seaside was a rare treat for the children.','去海边游玩对孩子们来说是难得的享受。'],
      ['process','用化学品或专门工艺处理材料','v.',['处理材料'],'process-protect-material','The timber was treated to resist moisture and insects.','木材经过处理，以抵抗潮湿和虫害。'],
      ['discuss','论述；探讨某个主题（正式）','v.',['论述','讨论'],'discuss-a-subject','The final chapter treats the causes of rural migration in detail.','最后一章详细论述了农村人口迁移的原因。']
    ]);
    entry('fork',[
      ['tool','餐叉；园艺叉等有分叉尖齿的工具','n.',['叉子','叉状物'],'pronged-tool','She loosened the soil with a garden fork.','她用园艺叉松了松土。'],
      ['branch','道路、河流等的分岔处；分成岔路','n. / v.',['分岔','分支','分歧','做成叉形'],'branching-division','Take the left path where the trail forks beside the stream.','小径在溪旁分岔时走左边。'],
      ['lift','用叉子叉起或用园艺叉翻动','v.',['叉起'],'move-with-fork','He forked the cooked potatoes onto a warm plate.','他用叉子把煮熟的土豆叉到温热的盘子里。'],
      ['software','派生软件分支；从现有代码产生独立分支','n. / v.',['软件分支'],'software-code-branch','The developers created a fork to test a different design.','开发者建立了一个分支项目，以测试不同设计。']
    ]);
    entry('dish',[
      ['container','盘；碟；盛放、烹饪食物等的浅容器','n.',['盘子','碟','皿'],'shallow-food-container','Place the vegetables in a shallow ovenproof dish.','把蔬菜放进一个耐烤的浅盘里。'],
      ['food','菜肴；按特定方式制成的一道食物','n.',['菜肴'],'prepared-food-dish','The restaurant’s signature dish is baked fish with herbs.','餐厅的招牌菜是香草烤鱼。'],
      ['antenna','碟形天线；接收信号的凹面装置','n.',['碟形天线'],'dish-shaped-antenna','A satellite dish was mounted on the roof of the station.','车站屋顶安装了一面卫星天线。'],
      ['serve','分发食物；提供、施加批评等','v.',['分发'],'distribute-hand-out','The volunteers dished out hot meals to the waiting families.','志愿者把热饭分发给等候的家庭。','dish out / up']
    ]);
    entry('cream',[
      ['dairy','奶油；从牛奶中分出的浓稠乳脂','n.',['奶油','乳油','乳皮'],'milk-fat-cream','She poured a little cream into the mushroom soup.','她往蘑菇汤里倒了一点奶油。'],
      ['preparation','乳霜；乳膏；用于皮肤或清洁等的稠状制剂','n.',['面霜','乳膏','霜'],'thick-topical-preparation','A small pot of hand cream stood beside the sink.','水槽旁放着一小罐护手霜。'],
      ['colour','奶油色；淡黄白色；这种颜色的','n. / adj.',['奶油色'],'pale-yellow-white','The walls were painted cream to brighten the narrow hallway.','墙壁被刷成奶油色，让狭窄过道显得明亮。'],
      ['best','精华；最优秀的一部分（固定搭配）','n.',['精华'],'best-selected-part','The exhibition brings together the cream of the region’s young artists.','展览汇集了该地区最优秀的年轻艺术家。','the cream of'],
      ['mix','搅打奶油状混合物；使黄油和糖搅拌至蓬松','v.',['搅打成奶油状'],'beat-butter-sugar','Cream the butter and sugar before adding the eggs.','加入鸡蛋前，先把黄油和糖搅打蓬松。']
    ]);
    entry('jam',[
      ['preserve','果酱；水果加糖煮成的浓稠食品','n.',['果酱'],'fruit-sugar-preserve','The jar of plum jam was labelled with the harvest date.','那罐李子果酱标着收获日期。'],
      ['block','堵塞；挤满；机器卡住；使不能顺畅移动','n. / v.',['拥塞之物','堵塞','挤进','使塞满','使堵塞','轧住','拥挤'],'congest-or-get-stuck','A folded sheet jammed the printer just before the meeting.','会议前，一张折起的纸卡住了打印机。'],
      ['trouble','困境；难以摆脱的麻烦（非正式）','n.',['困境'],'difficult-predicament','Losing the tickets left us in a jam at the station.','车票丢失让我们在车站陷入困境。'],
      ['music','即兴合奏；音乐家非正式的一起演奏','v. / n.',['即兴合奏'],'informal-musical-improvisation','The musicians stayed after the concert to jam together.','音乐会后，乐手们留下来一起即兴合奏。'],
      ['signal','干扰无线电等信号','v.',['干扰信号'],'disrupt-radio-transmission','The equipment can detect attempts to jam the radio signal.','设备能够检测干扰无线电信号的企图。']
    ]);
    entry('mustard',[
      ['plant','芥菜；芥属植物及用于调味的芥子','n.',['芥菜','芥子','芥属植物'],'mustard-plant-seed','The farmer grew mustard as a cover crop between harvests.','农民在两次收获之间种植芥菜作覆盖作物。'],
      ['condiment','芥末酱；由芥子制成的辛辣调味品','n.',['芥末'],'mustard-condiment','A small amount of mustard gave the dressing a sharp flavour.','少量芥末酱让调味汁有了辛辣味。'],
      ['colour','芥末黄；偏褐的黄色','n. / adj.',['芥末黄'],'brownish-yellow-colour','She wore a mustard scarf with her dark coat.','她用芥末黄色围巾搭配深色外套。']
    ]);
    entry('bake',[
      ['cook','烘焙；在烤箱中烤熟食物；烤制的菜肴','v. / n.',['烘焙','烤','烤面包'],'cook-in-oven','We baked the bread until the crust turned golden.','我们把面包烤到外皮金黄。'],
      ['harden','烘硬；用热使泥土、黏土等变硬','v.',['烘硬'],'harden-by-heating','The bricks were baked in a kiln before being transported to the site.','砖块在运往工地前先经过窑烧。'],
      ['heat','变得酷热；被太阳等晒得很热','v.',['晒得滚烫'],'become-very-hot','The empty car park baked under the midday sun.','空停车场在正午阳光下晒得滚烫。']
    ]);
    entry('fry',[
      ['cook','煎；炸；用热油或脂肪烹饪','v.',['油炸','煎'],'cook-in-hot-fat','Fry the onions gently until they soften.','用小火把洋葱煎软。'],
      ['young-fish','鱼苗；刚孵化不久的幼鱼（集合名词）','n.',['鱼苗'],'newly-hatched-fish','The shallow pools provided shelter for the fry.','浅水池为鱼苗提供了庇护。'],
      ['damage','烧坏；因过热或电流损坏（非正式）','v.',['烧坏'],'damage-by-heat-electricity','A power surge fried the circuit board.','电压骤升烧坏了电路板。']
    ]);
    entry('slice',[
      ['cut','薄片；把食物等切成薄片','n. / v.',['薄的切片','切成薄片','切下','切','片'],'thin-flat-piece','She sliced the cucumber thinly for the salad.','她把黄瓜切成薄片做沙拉。'],
      ['share','一部分；总额或整体中分得的一份','n.',['一部分'],'portion-of-whole','Local suppliers won a larger slice of the market.','当地供应商获得了更大的市场份额。'],
      ['sport','削球；使球带切削旋转或偏离直线的击球','n. / v.',['削球'],'sliced-sport-shot','The player used a slice to keep the ball low over the net.','球员用削球让球低低越过球网。'],
      ['through','轻易划过、切开或穿过','v.',['切开穿过'],'cut-through-easily','The sharp blade sliced through the rope in one movement.','锋利刀刃一下就切断了绳子。','slice through']
    ]);
    entry('dip',[
      ['immerse','蘸；短暂浸入液体后取出','v. / n.',['浸'],'briefly-immerse','She dipped the brush in water before mixing the paint.','她调颜料前把画笔蘸了蘸水。'],
      ['reach','把手或器具伸入容器取物；舀取','v.',['把(手、勺等)伸入','舀取'],'reach-into-container','He dipped a ladle into the pot to serve the soup.','他把长柄勺伸进锅里盛汤。'],
      ['decrease','短暂下降；降低；低洼或下凹处','v. / n.',['降下'],'temporary-drop-hollow','Sales dipped in February before recovering in March.','销量二月短暂下降，三月又恢复了。'],
      ['sauce','蘸酱；用小块食物蘸食的浓酱','n.',['蘸酱'],'dipping-sauce','The meal began with warm bread and a yoghurt dip.','这顿饭先上了温面包和酸奶蘸酱。'],
      ['browse','随意翻阅；浅尝某种活动','v.',['涉猎'],'browse-briefly','She dips into the poetry collection whenever she has a spare moment.','她一有空就随意翻读那本诗集。','dip into'],
      ['lights','把车前灯调成近光（英式）','v.',['调成近光'],'lower-headlight-beam','The driver dipped his headlights as another car approached.','另一辆车驶近时，司机把前灯调成了近光。']
    ]);
    entry('cottage',[
      ['house','乡间小屋；通常较小、朴素的住宅或度假屋','n.',['小屋','茅舍'],'small-country-house','They rented a stone cottage beside the orchard.','他们在果园旁租了一间石头小屋。']
    ]);
    entry('stair',[
      ['step','一级楼梯；梯级；楼梯（通常复数 stairs）','n.',['梯级','楼梯','阶梯'],'staircase-step','The bottom stair was worn smooth by generations of footsteps.','最下面一级楼梯被几代人的脚步磨得光滑。']
    ]);
    entry('eaves',[
      ['roof','屋檐；屋顶伸出外墙的边缘（复数形式）','n. plural',['屋檐','檐口'],'projecting-roof-edge','Rainwater dripped from the eaves into the waiting barrel.','雨水从屋檐滴入下面的桶里。']
    ]);
    entry('tile',[
      ['covering','瓦片；瓷砖；用于铺墙、地面或屋顶的薄片；铺砖瓦','n. / v.',['砖瓦','瓷砖','瓦片','铺以瓦','铺以瓷砖'],'thin-surface-covering','The bathroom floor was tiled with small blue squares.','浴室地面铺着小块蓝色方砖。'],
      ['piece','牌块；拼字或桌面游戏中的小方块','n.',['游戏牌块'],'board-game-tile','Each player drew seven letter tiles from the bag.','每位玩家从袋中抽出七块字母牌。'],
      ['screen','平铺；把窗口或图像并排排列而不重叠','v.',['平铺'],'non-overlapping-screen-layout','She tiled the two document windows to compare the figures.','她把两个文档窗口平铺，以比较数字。']
    ]);
    entry('crane',[
      ['machine','起重机；吊车；用起重机起吊','n. / v.',['起重机','起重机起吊'],'heavy-lifting-machine','The crane lifted the steel beam into position.','起重机把钢梁吊到指定位置。'],
      ['bird','鹤；长颈长腿的大型鸟类','n.',['鹤'],'crane-bird','A crane stood motionless in the shallow water.','一只鹤静静站在浅水中。'],
      ['neck','伸长脖子以看得更清楚','v.',['伸颈','伸颈看'],'stretch-neck-to-see','People craned their necks to see over the crowd.','人们伸长脖子，试图越过人群看清楚。']
    ]);
    entry('saw',[
      ['tool','锯；带齿刀刃的切割工具；锯开','n. / v.',['锯','锯子','锯开','锯切'],'toothed-cutting-tool','The carpenter sawed the plank into three equal lengths.','木匠把木板锯成了等长的三段。'],
      ['saying','格言；流传已久的谚语（正式或文学用语）','n.',['格言','谚语'],'traditional-maxim','The old saw about measuring twice still applies in the workshop.','关于先测量两遍的老格言在作坊中仍然适用。'],
      ['see-past','看见；see 的一般过去式','v. past',['看见'],'past-visual-perception','We saw the first migrating birds above the marsh.','我们在沼泽上方看见了第一批迁徙的鸟。'],
      ['back-forth','像拉锯一样来回移动','v.',['来回拉动'],'move-back-and-forth','He sawed the rope across a rough edge until it broke.','他把绳子在粗糙边缘来回磨，直到绳子断开。']
    ]);
    entry('mend',[
      ['repair','修补；修理损坏的物品；缝补处','v. / n.',['修补','修改','修理'],'repair-damage','She mended the tear in the coat with matching thread.','她用颜色相配的线缝好了外套上的裂口。'],
      ['improve','改善关系或状况；使恢复正常','v.',['改进','改善'],'restore-improve-relations','The exchange programme helped mend relations between the two schools.','交流项目帮助改善了两所学校的关系。'],
      ['recover','康复；健康好转（常用于 on the mend）','v. / n.',['好转'],'recover-health','After several difficult weeks, he was finally on the mend.','经过艰难的几周，他终于开始康复。','on the mend']
    ]);
    entry('span',[
      ['time','持续时间；横跨或持续某一时段','n. / v.',['一段时间','持续'],'time-extent','Her research career spanned more than four decades.','她的研究生涯持续了四十多年。'],
      ['distance','跨度；从一端到另一端的距离；横跨','n. / v.',['全长','跨距','跨越'],'end-to-end-distance','The bridge spans the widest part of the river.','这座桥横跨河流最宽的部分。'],
      ['section','桥梁等两个支点之间的一跨','n.',['一跨'],'bridge-between-supports','Engineers inspected each span after the flood.','洪水过后，工程师检查了桥的每一跨。'],
      ['hand','拃；拇指与小指充分张开之间的距离','n.',['指距'],'outstretched-hand-width','The seedling was barely a span high.','那株幼苗只有一拃高。'],
      ['scope','涵盖某一范围；跨越不同领域','v.',['涵盖范围'],'cover-wide-range','The collection spans several cultures and artistic traditions.','藏品涵盖了多种文化和艺术传统。']
    ]);
    entry('void',[
      ['empty','空隙；空无之处；失落的空虚感','n.',['空虚','空间','空白','空隙','空虚感'],'empty-space-absence','Her departure left a void in the small research team.','她的离开使这个小研究团队感到有所缺失。'],
      ['invalid','无效的；宣布法律文件或交易作废','adj. / v.',['无效的'],'legally-invalid','The ticket becomes void if it is altered.','票据一经涂改即告无效。'],
      ['lacking','没有某种品质或成分的（正式）','adj.',['空的','无人的','没有的'],'devoid-of-quality','The statement was void of any useful detail.','这份声明没有任何有用的细节。','void of']
    ]);
    entry('hook',[
      ['catch','钩；弯曲的挂物或捕鱼器具；钩住或挂上','n. / v.',['钩','钩状','挂...于钩上','钩住','弯成钩状','钩紧'],'curved-catching-device','She hung the lantern on a hook above the table.','她把灯笼挂在桌子上方的钩子上。'],
      ['attract','吸引注意力的特点；使人着迷','n. / v.',['陷阱','引上钩'],'attention-grabbing-feature','The mystery at the start of the novel hooked me immediately.','小说开头的谜团立刻吸引了我。'],
      ['music','歌曲中易记、吸引人的反复乐句','n.',['音乐钩句'],'catchy-musical-phrase','The chorus has a simple hook that listeners remember after one hearing.','副歌有一句简单的钩句，听众听一遍就能记住。'],
      ['sport','勾拳；某些球类中的钩击或偏转球','n. / v.',['勾拳'],'hooking-sports-action','The boxer landed a left hook in the second round.','拳击手在第二回合打中了一记左勾拳。']
    ]);
    entry('port',[
      ['harbour','港口；港口城镇或其停泊船只的区域','n.',['港口','埠'],'harbour-port','The ship remained in port while its engine was repaired.','修理发动机期间，船一直停在港内。'],
      ['connection','电脑连接端口；软件通信使用的编号端点','n.',['端口'],'computer-connection-port','Connect the printer to the USB port on the left.','把打印机连接到左侧的 USB 端口。'],
      ['left','船或飞机朝前看时的左舷；向左舷','n. / adj. / adv.',['左舷','左转舵'],'left-side-of-vessel','A red navigation light marks the port side of the vessel.','红色航行灯标示船的左舷。'],
      ['wine','波特酒；一种葡萄牙产的甜型加强葡萄酒','n.',['波特酒'],'port-fortified-wine','The menu offered a small glass of port with dessert.','菜单提供了一小杯配甜点的波特酒。'],
      ['software','移植软件；修改程序使能在另一平台运行','v.',['移植'],'adapt-software-platform','The team ported the application to a different operating system.','团队把应用程序移植到了另一种操作系统。']
    ]);
    entry('traffic',[
      ['movement','交通；道路、航线等上的车辆、人或运输流量','n.',['交通','通行','运输','交通量'],'transport-flow','Heavy traffic delayed the buses during the morning rush.','早高峰繁忙的交通使公交车延误。'],
      ['data','通信量；网络数据传输或网站访问量','n.',['通信量','传输量'],'network-data-flow','Website traffic doubled after the new guide was published.','新指南发布后，网站访问量翻了一倍。'],
      ['illegal','非法买卖；贩运人口或违禁物品','n. / v.',['贸易','交易'],'illegal-trafficking','The report examined how criminal groups traffic stolen goods across borders.','报告研究了犯罪团伙如何跨境贩运赃物。','traffic in goods; traffic people']
    ]);
    entry('helicopter',[
      ['aircraft','直升机；依靠旋翼可垂直起降的航空器','n.',['直升机'],'rotor-powered-aircraft','A helicopter carried emergency supplies to the isolated village.','一架直升机向偏远村庄运送了应急物资。']
    ]);
    entry('crash',[
      ['collision','碰撞；撞毁；车辆或飞机发生严重事故','n. / v.',['猛撞','撞碎','破碎','(使)...坠毁'],'violent-collision','The van crashed into a barrier on the icy road.','货车在结冰路面上撞上了护栏。'],
      ['noise','突然的巨大撞击声；哗啦声','n. / v.',['哗啦声'],'loud-sudden-impact-sound','A loud crash came from the kitchen as the tray hit the floor.','托盘掉到地上，厨房传来一声巨响。'],
      ['computer','电脑或程序突然停止运行；系统崩溃','n. / v.',['崩溃'],'sudden-system-failure','The program crashed while processing a large image.','程序处理一张大图时崩溃了。'],
      ['economy','金融市场、价格等暴跌；企业突然失败','n. / v.',['经济暴跌'],'financial-collapse','The crash wiped out much of the company’s market value.','这次暴跌使公司的大部分市值蒸发了。'],
      ['sleep','临时借宿；倒头就睡（非正式）','v.',['借宿'],'informal-overnight-stay','We crashed at a friend’s flat after missing the last train.','错过末班火车后，我们在朋友公寓借宿了一晚。'],
      ['enter','未经邀请闯入活动（非正式）','v.',['擅自闯入'],'enter-event-uninvited','Two strangers tried to crash the private reception.','两个陌生人试图未经邀请闯入私人招待会。'],
      ['intensive','速成的；短期密集安排的','modifier',['速成的'],'concentrated-high-effort','The volunteers took a crash course in basic sign language.','志愿者参加了基础手语速成班。','a crash course / programme']
    ]);
    entry('crush',[
      ['pressure','压碎；压扁；挤压以榨出液体','v.',['压碎','粉碎','压破','塞','弄皱','榨出','被压碎','起皱','挤'],'crush-by-pressure','The machine crushes empty cans into compact blocks.','机器把空罐压成紧实的小块。'],
      ['defeat','彻底击败；镇压；粉碎反抗','v.',['征服'],'overwhelming-defeat','The stronger team crushed its opponents in the final.','实力更强的球队在决赛中彻底击败了对手。'],
      ['emotion','使极度失望、难过或受到打击','v.',['使深受打击'],'severely-upset','The rejection crushed his hopes of studying at the academy.','拒绝录取的消息粉碎了他去那所学院学习的希望。'],
      ['crowd','拥挤的人群；密集挤压的场面','n.',['群众'],'tightly-packed-crowd','We lost sight of each other in the crush outside the stadium.','体育场外人群拥挤，我们看不见彼此了。'],
      ['infatuation','短暂而强烈的迷恋；暗恋对象（非正式）','n.',['迷恋'],'temporary-romantic-infatuation','She had a crush on a singer whose songs she played constantly.','她迷恋一位歌手，总是不停地播放他的歌。','have a crush on']
    ]);
    entry('raft',[
      ['floating','木筏；救生筏；平底漂浮平台；乘筏或筏运','n. / v.',['筏','救生筏','乘筏','筏运','制成筏'],'floating-raft','The crew reached the shore in an inflatable life raft.','船员乘充气救生筏到达了岸边。'],
      ['many','大量；一系列（非正式）','n.',['大量'],'large-number-set','The proposal introduced a raft of measures to reduce waste.','提案提出了一系列减少浪费的措施。','a raft of']
    ]);
    entry('bow',[
      ['weapon','弓；拉弦发箭的武器（读 /bəʊ/）','n.',['弓'],'archery-bow','The archer raised the bow and aimed at the target.','射箭者举起弓，瞄准靶子。'],
      ['knot','蝴蝶结；有两个环状部分的结（读 /bəʊ/）','n.',['蝴蝶结'],'looped-decorative-knot','She tied the ribbon into a bow around the parcel.','她把包裹上的丝带系成蝴蝶结。'],
      ['music','琴弓；用弓拉奏弦乐器（读 /bəʊ/）','n. / v.',['琴弓','用弓拉奏'],'string-instrument-bow','The violinist lifted her bow between the two phrases.','小提琴手在两个乐句之间抬起了琴弓。'],
      ['ship','船头；船艏（读 /baʊ/）','n.',['船头'],'front-of-vessel','Waves broke over the bow as the boat left the harbour.','船驶离港口时，海浪拍上船头。'],
      ['respect','鞠躬；低头致意；鞠躬动作（读 /baʊ/）','v. / n.',['鞠躬','低头'],'bend-in-respect','The performers bowed to the audience after the final song.','最后一首歌结束后，表演者向观众鞠躬。'],
      ['yield','屈服；接受压力、权威或他人的要求','v.',['屈服'],'yield-to-pressure','The council refused to bow to pressure from the developers.','市政委员会拒绝屈从于开发商的压力。','bow to'],
      ['bend','弯曲；因压力或重量而弯下','v.',['使弯曲'],'bend-under-pressure','The wooden shelf bowed under the weight of the books.','木架被书的重量压弯了。']
    ]);
    entry('channel',[
      ['water','海峡；航道；水流通过的河槽或水道','n.',['海峡','航道','在...上挖沟','形成河道'],'water-passage-channel','The captain kept the boat inside the marked channel.','船长使船保持在标示的航道内。'],
      ['broadcast','电视或网络频道；发送信号的信道','n.',['频道','信道'],'broadcast-frequency-channel','The channel broadcasts science programmes throughout the evening.','这个频道整晚播出科学节目。'],
      ['route','沟通或办事渠道；传递信息与资源的途径','n.',['通道'],'communication-action-route','The complaint was handled through the proper administrative channels.','投诉通过适当的行政渠道得到处理。'],
      ['direct','引导资金、精力或情绪流向特定用途','v.',['引导'],'direct-resources-to-purpose','The charity channels donations into local literacy projects.','慈善机构把捐款投入当地识字项目。','channel something into / towards']
    ]);
    entry('due',[
      ['expected','预期的；按计划应当发生或到达的','adj.',['预期的','预定的'],'scheduled-expected','The replacement parts are due to arrive on Friday.','替换零件预计周五到达。','due to do; due on / at'],
      ['owed','到期应付的；应得或欠给某人的','adj. / n.',['到期的','应付的','应得的','应得之物','应付款'],'owed-entitlement','The final payment is due at the end of the month.','最后一笔款项应在月底支付。'],
      ['proper','适当的；应有的；给予必要重视的','adj.',['适当的','应有的'],'appropriate-required-care','The team considered the risks with due care.','团队以应有的谨慎考虑了风险。'],
      ['cause','由于；由某种原因造成的','phrase',['由于'],'caused-by','The delay was due to damage to the main power cable.','延误是由主电缆损坏造成的。','due to'],
      ['direction','正向；恰好朝某一方位','adv.',['正向某方向'],'exact-compass-direction','The path runs due north from the village.','小径从村庄向正北延伸。'],
      ['fees','会员费；定期缴纳的款项（复数 dues）','n. plural',['会费'],'regular-membership-payment','Members pay their annual dues every January.','会员每年一月缴纳年度会费。']
    ]);
    entry('deliver',[
      ['transport','递送；交付；把物品送到指定地点','v.',['递送','投递','交付','交运'],'transport-to-recipient','The courier delivered the samples before the laboratory closed.','快递员在实验室关门前送到了样品。'],
      ['speech','发表讲话；宣布裁决或传达正式内容','v.',['陈述','发表'],'give-formal-speech','The researcher delivered a clear presentation of the findings.','研究人员清楚地报告了研究结果。'],
      ['achieve','实现承诺；提供预期的结果或服务','v.',['实现预期'],'produce-promised-result','The new system delivered the promised reduction in waiting times.','新系统实现了承诺的缩短等候时间的效果。'],
      ['birth','分娩；接生婴儿','v.',['接生'],'give-birth-assist-birth','The midwife delivered the baby safely during the storm.','暴风雨期间，助产士安全地接生了婴儿。'],
      ['rescue','解救；使摆脱危险或困境（正式）','v.',['释放'],'rescue-from-danger','The story tells of a sailor delivered from danger by a passing ship.','故事讲述了一名水手被一艘路过的船救离险境。','deliver someone from']
    ]);
    entry('govern',[
      ['rule','统治；管理国家、地区或组织的公共事务','v.',['统治','管理'],'govern-public-affairs','The elected council governs the island’s local affairs.','民选议会管理该岛的地方事务。'],
      ['determine','支配；决定或约束事物的运行方式','v.',['支配'],'controlling-influence','Water availability governs the choice of crops in this region.','水资源供应决定了该地区农作物的选择。']
    ]);
    entry('governor',[
      ['political','州长；总督；负责某地区行政管理的人','n.',['(美)州长','(英)总督','统治者'],'regional-political-head','The governor announced a plan to improve rural roads.','州长宣布了一项改善乡村道路的计划。'],
      ['institution','机构负责人；学校等机构的理事','n.',['管理者','理事'],'institutional-governing-official','School governors approved the extension of the library.','学校理事批准了图书馆扩建计划。'],
      ['device','调速器；自动限制或稳定机器速度的装置','n.',['节制器','调节器'],'engine-speed-regulator','The governor kept the engine running at a steady speed.','调速器使发动机保持稳定转速。']
    ]);
    entry('influence',[
      ['effect','影响力；对发展、行为或决定产生作用；影响','n. / v.',['影响力','权力','势力','影响','改变'],'effect-on-development','Early reading experiences can influence a child’s attitude to books.','早期阅读经历会影响孩子对书籍的态度。'],
      ['source','有影响的人或因素；产生作用的来源','n.',['有影响的因素'],'influential-person-factor','Her older sister was a positive influence during a difficult year.','在艰难的一年里，姐姐给了她积极影响。']
    ]);
    entry('organisation',[
      ['group','组织；为特定目的成立的团体或机构（英式拼写）','n.',['组织','团体'],'organized-purposeful-group','The organisation supports adult learners returning to education.','这个组织支持重新接受教育的成年学习者。'],
      ['planning','组织安排；筹办活动的工作','n.',['组织安排'],'arranging-activity','The smooth organisation of the conference impressed the visitors.','会议有条不紊的安排给访客留下了深刻印象。'],
      ['structure','组织结构；各部分的排列关系或体制','n.',['体制','编制'],'systematic-structure','The report recommends changes to the organisation of the department.','报告建议调整部门的组织结构。']
    ]);
    entry('union',[
      ['joining','联合；结合；由多个部分组成的联盟','n.',['联盟','联合','结合'],'joined-together-state','The two associations formed a union to represent their shared interests.','两个协会组成联盟，代表它们的共同利益。'],
      ['workers','工会；维护劳动者利益的组织','n.',['工会'],'workers-representative-organization','The union negotiated better working conditions for its members.','工会通过谈判为会员争取到了更好的工作条件。'],
      ['political','政治联合体；组成统一国家的各地区整体','n.',['政治联合体'],'political-union','The debate focused on the future of the union between the regions.','讨论聚焦于这些地区之间政治联合体的未来。']
    ]);
    entry('nation',[
      ['country','国家；作为一个社会整体的国民','n.',['国家'],'country-people-collective','The whole nation followed the rescue operation on the news.','全国民众通过新闻关注着救援行动。'],
      ['people','民族；具有共同语言、文化和历史的群体','n.',['民族'],'shared-cultural-people','The exhibition explores the traditions of several Indigenous nations.','展览探讨了几个原住民族的传统。']
    ]);
    entry('emigration',[
      ['outward','移居国外；从本国迁出并在另一国家长期定居','n.',['移民','移居外国(或外地)'],'outward-international-migration','The loss of local jobs led to increased emigration.','当地就业机会减少导致移居国外的人数增加。']
    ]);
    entry('refuge',[
      ['protection','避难；庇护；免受危险或困扰的保护','n.',['避难','庇护'],'safety-from-danger','Families sought refuge from the storm in the school hall.','一些家庭在学校礼堂寻求庇护，躲避风暴。'],
      ['place','避难所；安全地方；登山者的简易山屋','n.',['避难所','安全地带'],'safe-shelter-place','The mountain refuge offered beds and hot food to tired climbers.','山中避难所为疲惫的登山者提供床铺和热食。']
    ]);
    entry('vote',[
      ['choice','投票；表决；以票或举手等表示选择；选票','n. / v.',['投票','选举','选票','表决','投票选举','投票决定','使投票'],'formal-choice-voting','Residents voted to keep the public library open.','居民投票决定让公共图书馆继续开放。'],
      ['total','得票数；某一群体的选票总和','n.',['得票数'],'votes-received-total','The candidate won a larger share of the rural vote than expected.','这位候选人在农村选票中所占份额高于预期。'],
      ['right','投票权；选举权（通常 the vote）','n.',['选举权'],'right-to-vote','The museum documents the campaign to gain women the vote.','博物馆记录了争取妇女投票权的运动。'],
      ['declare','评选为；根据多数意见认定为','v.',['公认'],'choose-by-collective-opinion','The film was voted the audience’s favourite at the festival.','这部电影在电影节上被观众票选为最喜爱的影片。']
    ]);
    entry('independent',[
      ['autonomy','独立的；不受外界控制或影响的','adj.',['独立的','不受约束的'],'free-from-control','An independent team examined the quality of the evidence.','一个独立团队审查了证据的质量。'],
      ['self-reliance','自立的；不依赖他人帮助或资助的；有主见的','adj.',['有主见的','不须依赖的'],'self-reliant','The course helps young people become more independent in daily life.','课程帮助年轻人在日常生活中更加自立。'],
      ['separate','彼此独立的；没有关联或不依赖另一事物的','adj.',['相互独立的'],'not-dependent-on-each-other','The two laboratories reached the same conclusion through independent experiments.','两个实验室通过相互独立的实验得出了相同结论。'],
      ['political','无党派的；无党派人士或独立经营者','adj. / n.',['独立自主者','无党派者'],'politically-unaffiliated','An independent won the council seat after a closely fought election.','经过激烈竞选，一位无党派人士赢得了议会席位。']
    ]);
    entry('fund',[
      ['money','专项基金；为某种目的筹集或留存的资金','n.',['基金','资金','存款','财源'],'earmarked-money','The fund pays for equipment in schools with limited resources.','这笔基金为资源有限的学校支付设备费用。'],
      ['finance','提供资金；资助某项活动或机构','v.',['提供资金'],'provide-financial-support','Local donations funded the restoration of the footbridge.','当地捐款资助了步行桥修复工程。'],
      ['store','大量积累的知识、经验等','n.',['贮藏','积累'],'large-store-of-something','The guide had a fund of stories about the old railway.','导游知道许多关于老铁路的故事。','a fund of']
    ]);
    entry('purchase',[
      ['buy','购买；买得的物品；购买行为','v. / n.',['购买','购买品'],'buy-goods','The library purchased extra copies for the reading group.','图书馆为阅读小组增购了几本书。'],
      ['grip','牢固抓握或支撑；借力点','n.',['紧握'],'firm-grip-leverage','Her boots could find no purchase on the smooth rock.','她的靴子在光滑岩石上找不到牢固着力点。']
    ]);
    entry('receipt',[
      ['proof','收据；证明款项或货物已收到的凭证','n.',['收据'],'proof-of-payment-receipt','Keep the receipt in case you need to return the lamp.','保留收据，以便需要时退还灯具。'],
      ['receiving','收到；接收某物的行为或状态','n.',['收到'],'act-of-receiving','Please acknowledge receipt of the parcel by email.','收到包裹后，请通过邮件确认。'],
      ['income','营业收入；一定时期内收到的款项（通常复数）','n.',['收入'],'money-received','Ticket receipts covered most of the theatre’s running costs.','票务收入支付了剧院的大部分运营成本。']
    ]);
    entry('cost',[
      ['money','费用；成本；购买或做某事所需的钱；花费','n. / v.',['价值','费用','花费','值','使花费'],'money-needed-for-something','The repair cost less than buying a replacement.','维修花的钱比买替代品少。'],
      ['sacrifice','代价；损失；使失去有价值的事物','n. / v.',['代价','使失去'],'sacrifice-loss','The error cost the team a place in the final.','这个失误使球队失去了决赛资格。'],
      ['calculate','估算成本；给计划核算费用','v.',['核算费用'],'calculate-project-expense','The architect costed the proposed extension before seeking approval.','建筑师在申请批准前核算了拟议扩建工程的费用。']
    ]);
    entry('depression',[
      ['mood','消沉；沮丧；持续低落的情绪','n.',['消沉','沮丧'],'sad-hopeless-mood','A sense of depression settled over the team after the cancellation.','取消的消息传来后，团队笼罩着消沉的情绪。'],
      ['illness','抑郁症；持续影响情绪、兴趣和生活功能的精神疾病','n.',['抑郁'],'depressive-illness','The survey examined barriers to seeking support for depression.','调查询问了人们因抑郁症寻求支持时遇到的障碍。'],
      ['economy','经济萧条；严重且持久的经济低迷','n.',['不景气','衰退'],'prolonged-economic-slump','Many factories closed during the economic depression.','经济萧条期间，许多工厂关闭了。'],
      ['hollow','洼地；表面低于周围的凹处','n.',['洼地','凹','窝'],'lower-surface-hollow','Rainwater collected in a shallow depression beside the road.','雨水积在路旁一处浅洼地里。'],
      ['weather','低气压区；常伴云雨的天气系统','n.',['低气压区'],'low-atmospheric-pressure','A depression moving in from the Atlantic brought heavy rain.','一片从大西洋移来的低气压区带来了大雨。']
    ]);
    entry('decline',[
      ['decrease','下降；减少；质量、力量或状态衰退','v. / n.',['衰退','跌落','下降','衰落'],'decrease-deteriorate','The bird population declined after the wetland was drained.','湿地排干后，鸟类数量下降了。'],
      ['refuse','婉拒；谢绝某个请求、提议或机会','v.',['婉谢'],'politely-refuse','She declined the invitation because she had an exam the next day.','她因为第二天有考试而婉拒了邀请。'],
      ['grammar','使名词、代词或形容词按格、数等变化（语法）','v.',['按格变化'],'inflect-declinable-word','Students learned to decline Latin nouns in the first lesson.','学生们在第一课学习了拉丁语名词的变格。']
    ]);
    entry('spare',[
      ['extra','多余可用的；备用的；空闲的；备用品','adj. / n.',['剩余','备用品','备件','备用零件','备用轮胎','多余的','备用的','空闲的','剩下'],'extra-available','A spare key was kept in the caretaker’s office.','管理员办公室存放着一把备用钥匙。'],
      ['give','抽出时间、钱或人手供人使用','v.',['抽出'],'make-resources-available','Can you spare ten minutes to check these figures?','你能抽出十分钟检查这些数字吗？'],
      ['save','饶恕；使免受伤害、毁坏或不愉快经历','v.',['节约','省掉','宽恕','省用','饶恕','赦免'],'save-from-harm-experience','The new bridge spares residents a long detour.','新桥使居民不必再绕很远的路。'],
      ['thin','清瘦的；装饰或表达简约的','adj.',['瘦的'],'lean-unadorned','The architect’s spare design uses very few decorative features.','建筑师的简约设计几乎不使用装饰性元素。'],
      ['effort','不吝惜；竭尽某种努力（特定搭配）','v.',['不遗余力'],'withhold-no-effort','The team spared no effort to make the event accessible.','团队不遗余力地使活动便于所有人参与。','spare no effort / expense']
    ]);
    entry('saving',[
      ['economy','节省；节省下来的钱、时间或其他资源','n. / modifier',['节约','节约的'],'resource-saving','The new insulation produced a substantial saving on heating bills.','新的保温层大幅节省了取暖费用。'],
      ['money','储蓄；积存的钱（常用复数 savings）','n.',['存款'],'accumulated-saved-money','They used part of their savings to start a small business.','他们用部分积蓄开了一家小企业。'],
      ['redeeming','弥补缺点的；使不良情况尚可接受的（固定搭配）','modifier',['补偿的'],'redeeming-quality','The room was tiny, but its quiet location was a saving grace.','房间虽小，但位置安静算是一个可取之处。','a saving grace']
    ]);
    entry('enterprise',[
      ['business','企业；从事经营活动的组织','n.',['企业'],'business-organization','The enterprise employs people from several nearby villages.','这家企业雇用了附近几个村庄的居民。'],
      ['project','艰巨而重要的事业或计划','n.',['干事业'],'ambitious-undertaking','Restoring the canal was a costly but worthwhile enterprise.','修复运河是一项耗资巨大但值得进行的事业。'],
      ['initiative','事业心；进取心；主动承担风险和行动的精神','n.',['事业心','进取心'],'initiative-resourcefulness','Her enterprise turned an unused shed into a successful workshop.','她凭进取心把闲置棚屋变成了一间成功的作坊。']
    ]);
    entry('benefit',[
      ['advantage','好处；益处；使受益或从中受益','n. / v.',['利益','有益于','受益'],'helpful-advantage','The new footpath benefits residents who walk to the station.','新步道让步行去车站的居民受益。'],
      ['welfare','政府给予有需要者的补助金或福利','n.',['社会福利金'],'government-financial-support','The advice centre helps people understand which benefits they can claim.','咨询中心帮助人们了解可以申请哪些福利补助。'],
      ['employment','工资以外的雇员福利','n.',['雇员福利'],'non-wage-employment-perk','The job offers flexible hours and several other benefits.','这份工作提供灵活工时和其他几项福利。'],
      ['event','为募款而举办的义演或慈善活动','n.',['慈善义演'],'fundraising-performance','Local musicians played at a benefit for the flood relief fund.','当地乐手参加了一场为洪水救援基金筹款的义演。']
    ]);
    entry('regulate',[
      ['rules','监管；用规则控制活动或行为','v.',['管理','控制'],'control-through-rules','The agency regulates the disposal of industrial waste.','该机构监管工业废物的处置。'],
      ['adjust','调节；使速度、温度或运行状态保持适当','v.',['调节','调整','校准'],'maintain-desired-level','The valve regulates the flow of water through the pipe.','阀门调节管道中的水流。']
    ]);
    entry('legal',[
      ['law','法律的；涉及法律制度、程序或职业的','adj.',['法律的','法律(上)的'],'relating-to-law','The charity offers legal advice to people facing eviction.','慈善机构为面临驱逐的人提供法律咨询。'],
      ['lawful','合法的；法律允许、规定或承认的','adj.',['法定的','合法的'],'permitted-by-law','The company checked that the proposed use of the land was legal.','公司核实了拟议的土地用途是否合法。']
    ]);
    entry('charter',[
      ['document','宪章；规定权利或组织宗旨的正式文件；特许状','n.',['特许状','执照','宪章'],'rights-establishing-document','The charter sets out the rights of the association’s members.','宪章列明了协会会员的权利。'],
      ['hire','包租；为特定用途租用船、飞机或车辆','n. / v.',['包租'],'hire-whole-vehicle','The researchers chartered a small boat to reach the island.','研究人员包租了一艘小船前往岛上。'],
      ['authorize','特许成立；授予组织正式成立资格','v.',['特许','发给特许执照'],'officially-authorize-organization','The university was chartered in the nineteenth century.','这所大学在十九世纪获特许成立。']
    ]);
    entry('protocol',[
      ['etiquette','礼仪；正式场合应遵守的行为规则','n.',['外交礼仪'],'official-etiquette','The visit followed a strict diplomatic protocol.','访问遵循了严格的外交礼仪。'],
      ['procedure','规程；科学、医疗或其他工作中的具体操作规则','n.',['行为准则','操作规程'],'defined-operational-procedure','The laboratory revised its protocol for handling the samples.','实验室修改了处理样本的操作规程。'],
      ['agreement','议定书；国际正式协议，常为条约的补充','n.',['协议','议定书'],'formal-international-agreement','The countries signed a protocol on sharing river data.','这些国家签署了一份共享河流数据的议定书。'],
      ['network','通信协议；使计算机能交换信息的约定规则','n.',['通信协议'],'computer-communication-rules','Both devices must use the same protocol to exchange data.','两台设备必须使用相同的通信协议才能交换数据。']
    ]);
    entry('court',[
      ['law','法院；法庭；行使司法审理职能的机构和人员','n.',['法院'],'judicial-court','The court heard evidence from three independent witnesses.','法庭听取了三位独立证人的证词。'],
      ['sport','球场；网球、篮球等有边界的比赛场地','n.',['球场'],'marked-sports-court','The school opened its basketball court to local residents.','学校向当地居民开放了篮球场。'],
      ['yard','庭院；建筑围合的露天空间','n.',['庭院'],'enclosed-open-courtyard','A quiet inner court separated the two wings of the building.','一个安静的内院把建筑的两座侧楼隔开。'],
      ['royal','宫廷；君主及其侍从和顾问','n.',['宫廷'],'royal-household-court','The painter worked at the royal court for many years.','画家在宫廷工作了多年。'],
      ['seek','争取好感或支持；求爱；向人献殷勤','v.',['奉承','献殷勤','追求','求爱'],'seek-favour-relationship','The candidate courted younger voters with a detailed housing plan.','候选人用详细的住房计划争取年轻选民。'],
      ['risk','招致；冒着发生不良后果的风险','v.',['招致'],'risk-unwelcome-consequence','Ignoring the safety warning would be courting disaster.','无视安全警告无异于招致灾难。']
    ]);
    entry('judge',[
      ['law','法官；依法审理案件并作出判决','n. / v.',['法官','审判官','审理','判决'],'judicial-official','The judge asked both lawyers to clarify their arguments.','法官要求双方律师澄清各自论点。'],
      ['competition','裁判；评委；评判比赛或作品','n. / v.',['裁判员','裁定'],'competition-adjudication','The judges evaluated each design without knowing its author.','评委在不知道作者是谁的情况下评估了每个设计。'],
      ['assess','判断；估计；依据证据形成看法','v.',['鉴定','判断','下判断','作评价'],'form-assessment','It is difficult to judge the distance accurately in thick fog.','浓雾中很难准确判断距离。'],
      ['expert','鉴赏者；擅长判断某一类事物的人','n.',['鉴定人'],'discerning-assessor','She is a good judge of which books will interest reluctant readers.','她很擅长判断哪些书能吸引不爱阅读的人。','a good / poor judge of']
    ]);
    entry('sentence',[
      ['grammar','句子；表达陈述、疑问或命令等的语法单位','n.',['句子'],'grammatical-sentence','Rewrite the sentence without changing its meaning.','在不改变原意的前提下改写这个句子。'],
      ['punishment','判刑；刑罚；法庭宣布应接受的处罚','n. / v.',['宣判','判决'],'court-punishment','The court sentenced him to community service.','法院判处他接受社区服务。','sentence someone to']
    ]);
    entry('plea',[
      ['request','恳求；迫切而带感情色彩的请求','n.',['恳求','请愿'],'urgent-emotional-request','Residents made a plea for the old bridge to be preserved.','居民恳求保留这座老桥。'],
      ['answer','答辩；刑事被告对认罪与否作出的正式回答','n.',['抗辩','答辩'],'criminal-court-answer','The defendant entered a plea of not guilty.','被告作出了不认罪的答辩。'],
      ['reason','辩解；用以支持某行为或请求的理由','n.',['辩解','托词'],'defensive-justifying-reason','The application was accepted on the plea that the delay was unavoidable.','申请获准，理由是延误无法避免。']
    ]);
    entry('arrest',[
      ['custody','逮捕；依法限制某人的人身自由；拘捕行动','v. / n.',['逮捕','监禁','拘捕'],'take-into-police-custody','Police arrested a suspect after examining the security footage.','警方查看监控录像后逮捕了一名嫌疑人。'],
      ['stop','阻止；抑制某个过程继续发展（正式）','v. / n.',['抑制','阻止'],'halt-development','The barrier helped arrest the spread of the fire.','隔离带帮助阻止了火势蔓延。'],
      ['attention','吸引并抓住注意力（正式）','v.',['吸引'],'capture-attention','A bright shape in the corner of the painting arrested her attention.','画作角落里一个明亮的形状吸引了她的注意。']
    ]);
    entry('clue',[
      ['information','线索；有助于解决问题或谜团的信息、迹象','n.',['线索','暗示'],'helpful-evidence-indication','The unusual pollen provided a clue to the origin of the sample.','不寻常的花粉为确定样本来源提供了线索。'],
      ['inform','给人提示；使了解相关情况（非正式）','v.',['提供线索'],'inform-give-clue','A colleague clued her in on the project’s background.','一位同事向她介绍了项目的背景。','clue someone in on']
    ]);
    entry('embryo',[
      ['development','胚胎；动物早期发育体或种子中的幼小植物','n.',['胚胎','胚芽','胚'],'early-developing-organism','The embryo inside the seed remained dormant until conditions improved.','种子里的胚保持休眠，直到条件改善。'],
      ['early','萌芽阶段；计划等尚在早期（正式）','n.',['萌芽阶段'],'early-undeveloped-plan','The idea was still in embryo when the team first discussed it.','团队最初讨论时，这个想法仍处于萌芽阶段。','in embryo']
    ]);
    entry('organ',[
      ['body','器官；生物体中执行特定功能的结构','n.',['器官'],'functional-body-part','The skin is an organ that protects the body from the outside environment.','皮肤是保护身体免受外部环境侵害的器官。'],
      ['music','管风琴；电子风琴；用键盘控制的乐器','n.',['风琴'],'keyboard-wind-organ','The organ filled the hall with a deep, sustained sound.','风琴低沉绵长的声音充满大厅。'],
      ['publication','机关报；代表某组织观点的报刊或广播机构','n.',['机关报'],'official-publication-outlet','The journal began as the official organ of the scientific society.','这份期刊最初是科学学会的官方刊物。'],
      ['institution','机构；执行特定职能的组织部门（正式）','n.',['机构','机关'],'institutional-functional-body','The report examined the role of local organs of government.','报告考察了地方政府机构的作用。']
    ]);
    entry('gland',[
      ['biological','腺；产生并分泌特定物质的生物器官','n.',['腺'],'secreting-body-organ','The diagram shows how the gland releases its chemical products.','示意图显示了腺体如何释放其化学产物。'],
      ['mechanical','密封压盖；防止轴或管周围泄漏的装置','n.',['密封套','密封垫'],'mechanical-shaft-seal','A worn gland allowed water to leak around the pump shaft.','磨损的密封压盖使水从泵轴周围漏出。']
    ]);
    entry('joint',[
      ['connection','接合处；两物连接的部位；使连接','n. / v.',['连接处','接合','连接','使有接头','贴合'],'joined-connection','The carpenter checked every joint in the wooden frame.','木匠检查了木框的每一处接合。'],
      ['body','关节；两块骨骼相连并可活动的部位','n.',['关节'],'bone-connection','The model shows how the knee joint bends.','模型展示了膝关节如何弯曲。'],
      ['shared','共同的；联合进行、拥有或承担的','adj.',['共同的','联合的','连接的','合办的'],'shared-by-participants','The two universities announced a joint research programme.','两所大学宣布了一项联合研究计划。'],
      ['place','餐馆、酒吧或娱乐场所（非正式，有时带贬意）','n.',['娱乐场所'],'informal-bar-restaurant','They met at a small jazz joint near the station.','他们在车站附近一家小爵士酒吧碰面。'],
      ['meat','带骨或整块的肉，通常用于烤制（英式）','n.',['大块肉'],'large-roasting-cut','The butcher recommended a joint of lamb for the family meal.','肉贩建议家庭聚餐选一大块羊肉。'],
      ['cigarette','大麻烟卷（非正式）','n.',['大麻烟卷'],'cannabis-cigarette','The novel mentions a discarded joint on the pavement.','小说提到人行道上一支被丢弃的大麻烟卷。']
    ]);
    entry('stroke',[
      ['illness','中风；脑部供血突然发生异常引起的疾病','n.',['中风'],'brain-vascular-stroke','The study followed patients recovering from a stroke.','研究跟踪了中风康复中的患者。'],
      ['mark','笔画；画笔或书写工具的一次移动及其痕迹','n.',['笔划'],'written-brush-mark','One bold stroke completed the painted character.','一笔有力的笔画完成了这个书写的字。'],
      ['hit','一下击打；球类运动中的一次击球','n.',['打'],'single-striking-action','She won the point with a powerful stroke down the line.','她沿边线有力击球，赢下了这一分。'],
      ['movement','游泳、划船等的动作或姿势；机械的冲程','n.',['冲程','划尾桨'],'repeated-propulsive-movement','The crew kept their strokes in time as the boat accelerated.','船加速时，船员保持划桨动作同步。'],
      ['touch','轻抚；用手温柔地抚摸','v. / n.',['抚','摩'],'gentle-hand-touch','She stroked the cat until it settled on her lap.','她轻抚猫，直到它安稳地卧在她腿上。'],
      ['event','一次突如其来的运气、灵感或行动','n.',['一次机缘'],'single-fortunate-action','By a stroke of luck, the missing letter turned up before the deadline.','幸运的是，丢失的信在截止日期前出现了。','a stroke of luck / genius'],
      ['time','钟声敲响的时刻（固定搭配）','n.',['钟敲响时刻'],'clock-striking-time','The lights went out at the stroke of midnight.','午夜钟声敲响时，灯熄灭了。','at / on the stroke of']
    ]);
    entry('flu',[
      ['illness','流感；流行性感冒','n.',['流感','流行性感冒'],'influenza-infection','Several members of the choir missed rehearsal because of flu.','合唱团几名成员因流感缺席了排练。']
    ]);
    entry('bleed',[
      ['blood','流血；使出血','v.',['流血','使出血'],'lose-blood','The small cut continued to bleed after he washed it.','他清洗后，小伤口仍在流血。'],
      ['system','给封闭管路排出空气或液体','v.',['排气排液'],'release-trapped-air-liquid','The mechanic bled the brakes before checking the pedal.','机械师在检查踏板之前给制动系统排了气。'],
      ['colour','颜色或墨水洇出；渗色','v.',['渗出'],'colour-spread-beyond-edge','The red ink bled into the wet paper.','红墨水洇进了湿纸。'],
      ['money','大量流失资金；榨取他人的钱','v.',['榨取'],'lose-drain-money','The delays were bleeding the small business of its cash reserves.','延误不断消耗着这家小企业的现金储备。'],
      ['emotion','为他人的遭遇深感悲痛或同情（固定表达）','v.',['悲痛'],'deep-sympathetic-sorrow','Her heart bled for the families who had lost their homes.','她为那些失去家园的家庭深感悲痛。','someone’s heart bleeds for']
    ]);
    entry('mortal',[
      ['human','终有一死的；凡人；与神相对的人类','adj. / n.',['人类','不免一死的','人类的'],'human-not-immortal','The myth contrasts powerful gods with vulnerable mortals.','这个神话把强大的神与脆弱的凡人作对比。'],
      ['fatal','致命的；足以导致死亡的','adj.',['致命的'],'fatal-death-causing','The character survives a wound that first appears mortal.','这个角色从起初看似致命的伤中活了下来。'],
      ['extreme','极度的；非常严重或势不两立的','adj.',['极度的'],'extreme-serious','The children waited in mortal fear as footsteps approached the door.','脚步声接近门口时，孩子们极度恐惧地等待着。','mortal fear / danger / enemy']
    ]);
    entry('unconscious',[
      ['awareness','失去知觉的；昏迷而不知周围情况的','adj.',['无知觉的','人事不省的','神志丧失的'],'not-awake-aware','The injured climber was unconscious when the rescue team arrived.','救援队到达时，受伤的登山者已失去知觉。'],
      ['unaware','未意识到某事的；没有察觉的','adj.',['未意识到的'],'unaware-of-something','She was unconscious of the effect her words had on the audience.','她没有意识到自己的话对听众产生了怎样的影响。','unconscious of'],
      ['automatic','无意识发生的；未经过有意控制的','adj.',['无意识的'],'not-deliberately-controlled','He made an unconscious movement towards the familiar door.','他无意识地朝熟悉的门走了一下。'],
      ['mind','无意识心理；不在自觉觉知中的思想与情感（the unconscious）','n.',['无意识心理'],'unconscious-mental-processes','The lecturer discussed the role of the unconscious in the novel.','讲师讨论了无意识心理在这部小说中的作用。','the unconscious']
    ]);
    entry('feeble',[
      ['weak','虚弱的；声音、光线、力量等微弱的','adj.',['微弱的','衰弱的'],'lacking-strength','A feeble light shone from the window at the end of the lane.','小巷尽头的窗户透出微弱的灯光。'],
      ['ineffective','无力的；没有说服力或效果的','adj.',['无力的'],'ineffective-unconvincing','His feeble excuse failed to explain the missing records.','他那无力的借口无法解释记录为何缺失。']
    ]);
    // Sources identify the primary entries actually used for this selection.
    // Teaching labels and all bilingual examples are original editorial text.
    for(const word of ['dew','nest','instrument','consist','tone','dip','saw','channel','governor','legal','judge','arrest','bloom','fountain'])for(const s of entries[word].senses)s.source=col(word);
    for(const s of entries.specialise.senses)s.source=col('specialize');
    for(const s of entries.organisation.senses)s.source=col('organization');
    source('educated',['informed'],col('educated'));
    source('intelligent',['technology'],col('intelligent'));
    source('aromatic',['chemistry'],col('aromatic'));
    source('college',['body'],col('college'));
    source('gland',['mechanical'],col('gland'));
    source('port',['software'],col('port'));
    source('depression',['weather'],col('depression'));
    source('plea',['reason'],col('plea'));
    source('wrap',['text'],'https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-wrap');
    source('tile',['screen'],'https://learn.microsoft.com/en-us/windows/win32/api/winuser/nf-winuser-tilewindows');
    source('tile',['piece'],col('tile'));
    source('fork',['software'],'https://docs.github.com/en/pull-requests/how-tos/work-with-forks/fork-a-repo?tool=cli');
    const phrasal={wing:{improvise:'wing-it'},reckon:{expect:'reckon-on',deal:'reckon-with'},nail:{fix:'nail-down'},plug:{persist:'plug-away'},pipe:{voice:'pipe-up'},wrap:{finish:'wrap-up'},clue:{inform:'clue-in'},prey:{hunt:'prey-on'},dish:{serve:'dish-out'},tone:{moderate:'tone-down'}};
    for(const[word,ids]of Object.entries(phrasal))for(const[id,page]of Object.entries(ids))source(word,[id],cam(page));
    source('drum',['attract'],cam('drum-up'));
    source('pine',['long'],cam('pine-for'));
    source('press',['continue'],cam('press-on-ahead'));
    // Conservative semantic guards include near equivalents and hierarchical
    // overlap, not just identical Chinese strings. They are exclusions, not claims
    // that the words can replace each other in every construction.
    function guard(word,id,...tags){entries[word].senses.find(s=>s.id===id).concepts.push(...tags);}
    guard('liquid','substance','flowing-fluid-substance');
    guard('wrap','finish','bring-to-end');
    guard('express','communicate','communication-of-feeling','exchange-information');
    guard('influence','effect','controlling-influence');
    guard('component','part','assembled-component-unit');
    guard('arrest','custody','keep-within-place');
    guard('fascinate','interest','engross-attention');
    // Legacy exclusions preserve traceability; they do not certify old fragments.
    reference('sunset',['晚年'],'晚年常依赖 sunset years 等特定比喻；本批限定日落和到期终止，不把所有晚年语境都作普通 sunset 名词。');
    reference('dusk',['微暗的','(使)微暗'],'旧形容词、动词为较少用的文学形式；本批学习黄昏名词，不自动推导其词性。');
    reference('shadow',['影像','幽灵','庇护','预示','渐变','变阴暗'],'旧译涉及文学幻影、庇护比喻、预兆及绘画阴影处理；本批限定已列阴影、跟随、跟岗、些许及政治用法，不把这些孤立词作为通用答案。');
    reference('dew',['(用露水)沾湿','结露水'],'本批只教露水名词；旧文学动词不单独加入训练。',col('dew'));
    reference('precipitate',['结果','猛地落下的'],'普通结果不等于化学沉淀物；突然坠落的旧形容词与轻率的形容词也不能任意互换，本批保持明确词性。');
    reference('float',['漂流物','浮舟','浮萍','散播','动摇','容纳','淹没'],'漂浮物、装置名称及泛化动作须有专门语境；本批不把 float 的飘浮或提出想法扩展为任意散播、动摇、容纳或淹没。');
    reference('intensive',['内涵的','加强器'],'内涵属于 intensional 等术语边界，旧名词加强器也不属于本批密集活动、集约农业的学习范围。');
    reference('herbal',['本草书'],'本草书是专业或历史名词；本批限草药相关形容词。');
    reference('spade',['锄','以锄掘','把...弄实抹平'],'铁锹与锄头形制不同；旧动词挖掘、夯平等不作无条件等义，本批教铁锹和黑桃名词。');
    reference('bloom',['钢块','把...轧成钢坯'],'钢坯及轧坯动词为冶金专门用法；本批学习开花、繁荣、果粉和水华。',col('bloom'));
    reference('aromatic',['芳香剂'],'芳香物或香料名词不等于所有芳香剂；本批教芳香的及化学芳香族的。',col('aromatic'));
    reference('straw',['一文不值的东西','草帽','稻草的','稻草色的','琐碎的','无价值的'],'草帽、材料修饰语及价值比喻需补足搭配；本批只教干谷秆和吸管两个常用实体意义。');
    reference('pine',['邮件程序'],'这是专用软件名称，不是普通英语词义。');
    reference('violet',['堇菜科的'],'植物与颜色名词不自动等于整个堇菜科的分类形容词；本批不据旧译生成分类学考点。');
    reference('uptake',['举起','拿起','上风井'],'吸收、采用率与理解速度不等于一般拿起动作；矿井通风井等专门名词不纳入本批。');
    reference('mate',['对手','结伴'],'棋类 mate 是将死，不是对手；一般结伴行为需具体语境，本批朋友、动物交配和部件匹配不全部互换。');
    reference('wing',['给...装上翼','飞过','使飞','空运','增加...速度','飞行'],'旧动词多属文学飞行或装翼语境；本批翅膀等名词不推广成所有运输、加速动作，wing it 单独限定。');
    reference('plume',['羽状的','用羽毛装饰','整理羽毛','使成羽毛状'],'本批教大羽毛与羽状烟柱名词；旧动词装饰、理羽及形容词不从名词外形直接推断。');
    reference('nest',['休息所','找鸟巢','为...设窝'],'舒适住处比喻及寻找鸟巢、设窝的具体动词不在本批范围；动物巢、坏人藏身地和套叠另行明确。',col('nest'));
    reference('bark',['剥树皮'],'剥树皮是特定作业动词；本批学习树皮、吠声及厉声说话，不把树皮名词当动作。');
    reference('tame',['被开垦的'],'驯服动物与开垦土地不是通用同义；本批不将一切土地利用变化译为 tame。');
    reference('liquid',['流体','流动的','易变的'],'物理流体还包括气体，不能完全等同液体；本批不把 liquid 与 fluid 的一切形容词义互换。');
    reference('intelligent',['了解的'],'知晓某事的旧正式用法需要特定语境；本批教聪明及智能设备，不把它当作普通 aware。',col('intelligent'));
    reference('genius',['精神','神魔','特征'],'守护神及地方精神等历史、文学义需限定 genius loci 等表达；本批教天才个人与非凡才能。');
    reference('campus',['大学生活'],'校园可借指大学环境，但不直接等于所有大学生活经历；本批限场所。');
    reference('orientation',['向东方'],'空间朝向可以是任意方向，orientation 不必向东；本批不沿用方向上的误导。');
    reference('registration',['定位','对齐'],'图像配准和印刷套准属于专业操作；本批教官方登记与车辆编号，不把普通注册过程教成任意对齐。',col('register'));
    reference('remainder',['剩余的','出售削价剩书的'],'名词作前置修饰并不成为任意剩余物的通用形容词；本批保留剩余名词、数学余数及旧书降价动词。');
    reference('double',['双精度型'],'程序数据类型的 double 是技术术语，本批不把双倍数值义直接等同浮点类型。');
    reference('multiple',['并联'],'电路并联是特定技术结构；multiple 的多个、倍数不等于所有并联关系。');
    reference('mercury',['使者'],'Mercury 神名有特定神话身份，不是任意使者的通用名词。');
    reference('melt',['熔化物'],'本批物态变化动词不自动扩展成冶金熔体名词；餐食名词另有明确范围。');
    reference('rust',['衰退'],'生锈可比喻技艺久不用而退化，但不等于任意衰退；本批保留腐蚀、铁锈色及植物锈病。');
    reference('mixture',['混淆'],'不同物质混合不一定是混淆或误认；不把 mixture 泛作 confusion。');
    reference('inert',['无作用的','无效的'],'不活动或不发生化学反应不等于一切没有效果；本批不将 inert 泛作 ineffective 或 invalid。');
    reference('scan',['标出格律','押韵','网络软件目录','编码与分析系统'],'分析诗歌格律已单独表述；押韵不等于合格律，后两个专用系统名称也不是一般词义。');
    reference('engineer',['工兵'],'军事工程师需有 military / combat engineer 等语境；本批不把所有工兵职务当作普通工程师。');
    reference('engine',['安装发动机于'],'给设备安装发动机的专门动词不纳入本批；当前范围为动力机器、机车、发展动力和软件引擎。');
    reference('specialise',['特加指明','列举','限定...的范围','逐条详述'],'旧及物词义涉及具体化、特指等正式表达；本批重点为 specialise in 以及生物功能特化，不当作所有列举动作。',col('specialize'));
    reference('holy',['神圣的东西'],'一般形容词名词化须明确冠词与上下文；本批不生成独立泛称圣物考点。');
    reference('bishop',['热果子酒'],'旧饮料名称属于特定历史用法；本批保留主教和棋子。');
    reference('missionary',['负有任务者','工作人员'],'传教士负有特定宗教使命，并非任意工作人员；不泛化其职业含义。');
    reference('imperial',['至尊的','壮丽的','特等品'],'旧泛化褒义和特定商品名词不在当前帝国、英制的学习范围。');
    reference('express',['专使','丝毫不差的'],'快递人员及完全依照原样的旧译需特定结构；本批明确教表达、快速服务和明示，不泛作任意专使或完全相同。');
    reference('complicated',['并发的'],'复杂情况可涉及 complicate 的分词，但医学并发须说明疾病语境；本批不把普通复杂形容词等同一切并发。');
    reference('consist',['一致'],'consist with 是较少用的正式搭配；本批只教 consist of 和 consist in，不省略必要介词。',col('consist'));
    reference('press',['压力','紧迫','紧抱','强迫征募'],'旧译涉及物理力、紧急状态、拥抱和历史征募；本批限定列出的按压、催促和媒体等用法，不能把 press 作一切 pressure 或 hug。');
    reference('circus',['竞技场'],'古罗马竞技场属于历史专门义；本批保留马戏、媒体喧闹及英式圆形路口。');
    reference('stage',['站','驿站','层','脚手架','适于上演','乘驿车旅行'],'驿站交通、脚手架或技术层级等属特定语境；本批不从阶段、舞台或举办动词任意推出这些意义。');
    reference('tone',['使...的声调和谐','定音调','双音频'],'调谐及设备信号须限定语境；本批声音性质和音乐全音不等于 tune 或双音频协议。',col('tone'));
    reference('drum',['磁鼓'],'旧式计算机存储装置为专门技术名词；本批不把所有机器滚筒当磁鼓存储器。');
    reference('disc',['灌唱片'],'唱片名词不自动成为录制动词；本批教圆盘、存储唱片和椎间盘。');
    reference('chess',['雀麦'],'这是另一个少用植物同形词，不纳入本批国际象棋的学习范围。');
    reference('racket',['用球拍打'],'本批保留球拍、噪声及非法勾当名词；不从球拍名称生成通用击球动词。');
    reference('pipe',['管状器官','声带','尖细的声音','吹哨子','吹奏','吹笛','吹长哨发令'],'旧译含身体部位比喻及演奏发令动词；本批乐器名词和尖声开口不作全部音响行为的等义替代。');
    reference('pad',['印色盒','路','焊接点','包装配/拆卸'],'印泥垫、路径、焊盘和缩写系统各有特定名词环境；本批教软垫、纸本、平台、轻步和虚增等已列用法。');
    reference('strand',['使落后','弄断','搓'],'使滞留不等于所有落后或损坏绳股的动作；本批不按字面推导机械加工动词。');
    reference('curtain',['装帘子于'],'给某处装帘的动词未纳入本批；本批遮蔽用法也不泛指所有安装。');
    reference('handle',['把柄','手感','句柄'],'控制的把柄比喻、物理触感及程序句柄需专门语境；本批不与把手、处理事务或用户名无条件合并。');
    reference('switch',['摆动'],'摆动或挥动细枝的旧动词不纳入本批；转换与开关不是一切物体摆动。');
    reference('bulb',['球茎'],'植物学鳞茎 bulb 与球茎 corm 结构不同；本批使用鳞茎，不沿用笼统球茎标签。');
    reference('jewel',['饰以珠宝','镶以宝石'],'本批教宝石等名词；镶嵌动词不由珠宝名词自动扩展。');
    reference('appearance',['出版','版面'],'作品出现可与出版相关，但不等于所有出版动作或页面版式；本批教外观、显现与公开登场。');
    reference('robe',['披肩','覆盖物','(给)穿长袍'],'长袍与披肩不是同一种衣物；本批只教宽松长袍名词，穿衣及覆盖动词不另设考点。');
    reference('wrap',['包裹物','穿外衣','限制','约束'],'包装材料名词和给人裹衣的动作须限定对象；under wraps 表示保密，不等同所有限制、约束行为。');
    reference('lace',['饰以花边','全穿孔'],'用蕾丝装饰和穿孔属特定制作动作；本批不从花边名词或系鞋带推导全部工艺用法。');
    reference('tan',['鞣料','马戏团','鞣皮的','狠狠鞭打'],'本批教晒黑、黄褐色与鞣制动词；鞣料、旧惩戒俚语或马戏团旧译不作通用词义。');
    reference('fade',['平淡的'],'变弱或褪色的动词不等于平淡的普通形容词；本批不沿用这种词性扩展。');
    reference('treat',['谈判'],'treat with 的旧正式谈判用法不在本批；对待、请客及处理材料等不可与所有协商互换。');
    reference('fork',['派生指令'],'操作系统创建进程是专门接口语境；本批软件义只教从现有代码派生项目，不把所有分岔都作机器指令。');
    reference('cream',['乳酪'],'cream 为奶油或乳脂，通常的乳酪 cheese 与之不同；本批不混用。');
    reference('jam',['混杂','压碎'],'挤塞语境可涉及压紧物体，但本批不把 jam 等同所有混合或粉碎动作。');
    reference('mustard',['强烈的兴趣'],'旧俚语或比喻依赖具体表达；本批限定植物、调味品和颜色。');
    reference('fry',['油炸食物'],'具体煎炸餐食常需 fry-up 或 fries 等表达；本批教烹饪动作、鱼苗与设备烧坏，不把单数词泛指所有油炸食物。');
    reference('dip',['双列直插式组件','分布式输入输出系统','双排直插封装'],'这些为 DIP 专业缩写，不是普通 dip 的词义。');
    reference('slice',['菜刀'],'特定铲刀或切片工具用法不等于任意菜刀；本批教切片及对应动作，不把工具结果混同。');
    reference('void',['无用的','脱墨','空白点'],'空无或法律无效不等于一切没有用处；印刷工艺与缺陷名称也不在本批范围。');
    reference('hook',['镰刀','偷窃'],'特定弯刀名称及偷取旧俚语不属于本批钩挂、吸引注意和运动用法。');
    reference('crane',['迟疑'],'伸颈观察不自动表达犹豫；本批不从孤立旧译建立迟疑义。');
    reference('mend',['加快'],'特定旧搭配涉及速度改善，但不等同一般加速；本批限定修补、改善关系和康复。');
    reference('span',['小范围','以手指测量','架设'],'时间或距离范围不一定很小；拃量动作和架桥具体施工未单独纳入本批，跨越关系与架设动作不完全相同。');
    reference('port',['舱门','避风港','炮眼','姿势','意义','持(枪)'],'旧译涉及船体开口、射击孔、军姿或文学避难比喻；本批限定港口、端口、左舷、酒及软件移植。');
    reference('traffic',['交往','做买卖','用...作交换'],'本批贩运义强调非法交易；不能泛化为任意日常买卖、交往或交换行为。');
    reference('helicopter',['由直升机运送','乘直升机'],'本批教航空器名词；运输方式动词不由名词直接推导进训练。');
    reference('crash',['粗布'],'粗亚麻布是特定纺织同形词；本批围绕碰撞、响声、崩溃和常用口语。');
    reference('deliver',['引渡'],'交给当局须有具体宾语和法律程序；deliver 并不直接等同 extradite 的跨境引渡。');
    reference('union',['联管节','活接头'],'管件接头属于机械专门名词；本批教联合、工会及政治联合体。');
    reference('emigration',['血细胞渗出'],'细胞迁出是专门医学语境；本批限定人口从本国迁往国外，避免与 immigration 混同。');
    reference('refuge',['躲避','给予...庇护'],'本批学习庇护状态与避难所名词；take refuge 的动作依赖动词，不推导任意及物 refuge。');
    reference('purchase',['绞辘','赢得','努力取得','用滑轮起(锚等)'],'滑轮借力和旧正式取得用法各需特定结构；本批购买与抓牢借力点不等于所有赢得或起吊。');
    reference('receipt',['开...的收据'],'本批保留收据、收到与营业收入；出具凭证的动词不自动从名词推广。');
    reference('depression',['阻抑','压低','俯角'],'生理抑制、压下动作与角度术语需专门语境；本批教情绪、精神疾病、经济萧条、凹地与低气压。',col('depression'));
    reference('decline',['使降低','偏斜'],'本批降低义通常为不及物；不与任意使动降低或空间偏斜互换。');
    reference('spare',['节约的'],'本批备用、简约及免受损失不等于任意节俭的；需节约义时保持具体宾语和结构。');
    reference('saving',['挽救','搭救的','保留的','除...之外'],'挽救常是 save 的动名词，except 的介词用法也较正式；本批范围为节省、储蓄和 saving grace，不把词形相同视为全部已教。');
    reference('legal',['法定权利'],'legal rights 中权利由 rights 表达，不能把 legal 形容词单独等同权利名词。',col('legal'));
    reference('plea',['诉讼','申诉案件'],'诉讼整体不等于一次请求、辩解或认罪答辩；本批不与 case 或 lawsuit 泛泛互换。',col('plea'));
    reference('sentence',['命题'],'语法句子与逻辑命题并不一一对应；本批教句子及法庭刑罚，不把两者混成哲学命题。');
    reference('embryo',['胎儿'],'早期胚胎与后期胎儿 fetus 有发育阶段区别；本批使用胚胎与萌芽阶段。');
    reference('organ',['元件'],'器官的功能比喻不使它成为任意电子元件；本批机构、机关报和乐器分别限定。');
    reference('gland',['衬片'],'机械密封装置不能与任意衬片等同；本批明确为轴周围防漏的密封压盖。',col('gland'));
    reference('joint',['长节'],'本批接头、关节、共同及列明名词不覆盖缺少语境的长节旧译。');
    reference('stroke',['划去'],'删除文字需 stroke out 等特定动词短语；本批书写笔画和轻抚不自动成为划去动作。');
    reference('mortal',['生物','临终的'],'mortal 名词通常指与神相对的凡人，不是任意生物；致命的也不等于正在临终的 dying。');
    reference('feeble',['无效的'],'缺乏力量或说服力不一定完全无效；本批用微弱及无力的，避免与 invalid 或 ineffective 无条件等同。');
  }
  if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch07=register;
})(typeof window==='object'?window:globalThis);
