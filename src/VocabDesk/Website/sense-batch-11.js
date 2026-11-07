/* Batch 11: 200 formal public words; every retained sense names the dictionary entry
 * actually read for that sense, and all bilingual examples are original WordOrbit writing.
 * No learner data is included. This module is NOT registered by the production catalog yet;
 * the review harness composes a candidate catalog in isolation. */
(function(scope){
  'use strict';
  function register(add){
    const entries={};
    function entry(word,rows,references,extraSources){
      references=references||[];extraSources=extraSources||[];
      const e=add(word,rows.map(r=>{const c=r.slice();if(typeof c[4]==='string')c[4]=[c[4]];return c;}),references,extraSources);
      e.reviewDate='2026-11-07';
      e.senses.forEach((s,i)=>{s.source=rows[i][8];});
      e.sources=[...new Set([...rows.map(r=>r[8]),...references.map(r=>r.source).filter(Boolean),...extraSources])];
      entries[word]=e;return e;
    }
    entry("fashionable", [
      ["in-current-style","时髦的；流行的；时兴的","adj.",["时髦的","流行的","时兴的","时尚的","风行一时的"],["in-vogue-style","current-popular-fashion"],"Wearing second-hand clothes has become surprisingly fashionable among students who care about the planet.","在关心地球的学生中，穿二手衣服已变得出奇地时髦。",null,"https://www.vocabulary.com/dictionary/fashionable"],
      ["elegant-refined","有品位的；优雅讲究的","adj.",["有品位的","优雅的","讲究的","格调高的"],["elegant-refined"],"Her understated dress and careful manners struck everyone as quietly fashionable.","她素雅的连衣裙和得体的举止让人觉得她有一种含蓄的优雅。",null,"https://www.vocabulary.com/dictionary/fashionable"]
    ],
    [
      {"terms":["上流社会的"],"decision":"scope-excluded","reason":"旧译'上流社会的'来自过时的 fashionable society 搭配，现代词典不把该义单列为常用形容词义项。","source":"https://www.vocabulary.com/dictionary/fashionable"}
    ]);
    entry("handsome", [
      ["good-looking","英俊的；帅气的","adj.",["英俊的","帅气的","相貌堂堂的","好看的"],["attractive-appearance"],"The actor was considered unusually handsome when he first appeared on screen in the 1990s.","这位演员20世纪90年代初登银幕时被认为格外英俊。",null,"https://www.vocabulary.com/dictionary/handsome"],
      ["large-amount","（金额）可观的；丰厚的","adj.",["相当可观的","可观的","丰厚的","大笔的"],["large-amount"],"Selling the old factory brought the family a handsome sum of money.","卖掉旧工厂给这家人带来了一笔可观的收入。",null,"https://www.vocabulary.com/dictionary/handsome"],
      ["generous-giving","大方的；慷慨的","adj.",["大方的","慷慨的","出手大方的","豪爽的"],["generous-giving"],"Our neighbours are handsome hosts, always offering guests far more food than they can eat.","我们的邻居待客十分大方，总是给客人准备远超食量的饭菜。",null,"https://www.vocabulary.com/dictionary/handsome"],
      ["well-made-appearance","美观的；精致的","adj.",["美观的","精致的","做工考究的"],["well-made-quality"],"The carpenter turned the rough oak into a handsome dining table that has lasted thirty years.","木匠把粗糙的橡木做成了一张美观结实的餐桌，用了三十年。",null,"https://www.vocabulary.com/dictionary/handsome"]
    ],
    [
      {"terms":["灵敏的"],"decision":"scope-excluded","reason":"旧词典中 handsome 形容猎犬'灵敏'的义项已经废弃，现代词典不再收录。","source":"https://www.vocabulary.com/dictionary/handsome"}
    ]);
    entry("charming", [
      ["delightful-attractive","迷人的；讨人喜欢的；令人愉快的","adj.",["迷人的","有吸引力的","讨人喜欢的","令人愉快的","可爱的"],["delightful-attractive"],"The village inn, with its low beams and open fire, was a charming place to spend the night.","这家乡村小旅馆有着低矮的横梁和敞开的壁炉，是个过夜的好地方，十分迷人。",null,"https://www.vocabulary.com/dictionary/charming"]
    ]);
    entry("ugly", [
      ["unattractive-appearance","丑陋的；难看的","adj.",["丑陋的","难看的","不美观的"],["unattractive-appearance"],"The new office block is so ugly that residents have started a campaign to have it repainted.","新办公楼难看得让居民发起了一场要求重新粉刷的运动。",null,"https://www.vocabulary.com/dictionary/ugly"],
      ["menacing-nasty","险恶的；丑恶的；令人不快的","adj.",["险恶的","丑恶的","邪恶的","令人不快的"],["menacing-morally-bad"],"The argument turned ugly when neighbours began shouting insults across the fence.","当邻居们隔着篱笆互相辱骂时，争吵变得难看起来。",null,"https://www.vocabulary.com/dictionary/ugly"],
      ["horrifying","（伤口、场面）骇人的；可怕的","adj.",["骇人的","可怕的","恐怖的"],["horrifying"],"The rescue team had to treat an ugly wound on the climber's leg before carrying him down.","救援队不得不先处理登山者腿上那道骇人的伤口，然后才把他抬下山。",null,"https://www.vocabulary.com/dictionary/ugly"]
    ],
    [
      {"terms":["不祥的"],"decision":"scope-excluded","reason":"旧译'不祥的'其实是 ominous 的释义，现代英语中 ugly 不表示预兆不祥。","source":"https://www.vocabulary.com/dictionary/ugly"},
      {"terms":["丑陋的人(或物)"],"decision":"scope-excluded","reason":"'丑陋的人(或物)'的名词用法在当代英语中罕见，现代词典多不单列名词义项。","source":"https://www.vocabulary.com/dictionary/ugly"}
    ]);
    entry("beautiful", [
      ["delighting-senses","美丽的；漂亮的；好看的","adj.",["美丽的","漂亮的","好看的","优美的"],["beautiful-appearance"],"A field of wild poppies beside the railway line looked beautiful in the early morning light.","铁路旁的一片野罂粟在晨光中显得很美。",null,"https://www.vocabulary.com/dictionary/beautiful"],
      ["enjoyable-weather","（天气）美好的；令人愉悦的","adj.",["美好的","令人愉悦的","美妙的"],["pleasant-enjoyable"],"We were lucky to have beautiful weather for the whole week of the walking holiday.","徒步假期整整一周都赶上了好天气，我们很幸运。",null,"https://www.vocabulary.com/dictionary/beautiful"]
    ]);
    entry("perfect", [
      ["flawless-complete","完美的；理想的；无瑕的","adj.",["完美的","理想的","无瑕的","完美无缺的"],["flawless-complete"],"The glassblower shaped a perfect sphere without a single bubble or scratch.","玻璃吹制工做出了一个完美的球体，没有一丝气泡或划痕。",null,"https://www.vocabulary.com/dictionary/perfect"],
      ["precise-exact","准确的；精确的；恰好的","adj.",["准确的","精确的","恰好的","分毫不差的"],["precise-exact"],"Her timing was perfect: she finished the speech just as the clock struck noon.","她的时间把握得恰到好处：时钟敲响正午时她刚好结束演讲。",null,"https://www.vocabulary.com/dictionary/perfect"],
      ["utter-complete","完全的；十足的；彻底的","adj.",["完全的","十足的","彻底的"],["utter-complete"],"It was a perfect waste of money to buy a second printer we never used.","买第二台我们从未用过的打印机完全是浪费钱。",null,"https://www.vocabulary.com/dictionary/perfect"],
      ["make-perfect","使完善；使完美；改进","v.",["使完善","改进","使完美","完善"],["improve-make-perfect"],"She spent the winter in Madrid to perfect her Spanish before the exam.","为了备考，她在马德里度过冬天以提高西班牙语。",null,"https://www.vocabulary.com/dictionary/perfect"]
    ],
    [
      {"terms":["完成时"],"decision":"restricted-verified","reason":"语法术语：perfect 作名词指'完成时/完成体'，属受限的语法专业语境，正文不另设义项。","source":"https://www.vocabulary.com/dictionary/perfect"}
    ]);
    entry("perfection", [
      ["flawless-state","完美；完善；尽善尽美","n.",["完美","完善","完整性","尽善尽美"],["flawless-state"],"The chef tasted the sauce repeatedly and still felt it fell short of perfection.","厨师反复品尝酱汁，仍觉得它算不上完美。",null,"https://www.vocabulary.com/dictionary/perfection"],
      ["ideal-embodiment","完美的典范；理想化身","n.",["典范","完美的化身","完美典型","理想化身"],["ideal-embodiment"],"To many critics, the cathedral is the very perfection of Gothic design.","在许多评论家看来，这座大教堂正是哥特式设计的完美典范。",null,"https://www.vocabulary.com/dictionary/perfection"]
    ],
    [
      {"terms":["完成"],"decision":"scope-excluded","reason":"旧译'完成'是过时义项，现代英语 perfection 不表示'完成'，完成义由 completion 承担。","source":"https://www.vocabulary.com/dictionary/perfection"},
      {"terms":["极端"],"decision":"scope-excluded","reason":"旧词典的'极端'义项在现代英语中已废弃，perfection 不表示极端。","source":"https://www.vocabulary.com/dictionary/perfection"}
    ]);
    entry("tendency", [
      ["inclination-habit","倾向；癖性；习惯做法","n.",["倾向","趋向","偏好","习性"],["inclination-habit"],"He has a tendency to interrupt whenever he thinks he knows the answer.","每当他认为自己知道答案时，他总会忍不住打断别人。","have a tendency to do sth","https://www.vocabulary.com/dictionary/tendency"],
      ["trend-direction","趋势；动向；走势","n.",["趋势","动向","走势"],["trend-direction"],"Rising food prices show a clear tendency to level off after the harvest.","食品价格上涨呈现出收获季后趋于平稳的明显趋势。",null,"https://www.vocabulary.com/dictionary/tendency"]
    ]);
    entry("popularity", [
      ["being-well-liked","受欢迎；得人心；流行程度","n.",["受欢迎","受大众欢迎","人气","流行","普及"],["being-well-liked"],"The popularity of electric scooters has grown faster than the city's bike lanes can handle.","电动滑板车的受欢迎程度增长得比城市自行车道所能承受的还快。",null,"https://www.vocabulary.com/dictionary/popularity"]
    ],
    [
      {"terms":["名声"],"decision":"scope-excluded","reason":"旧译'名声'混淆了 popularity 与 fame：popularity 指受欢迎程度，不指名声。","source":"https://www.vocabulary.com/dictionary/popularity"}
    ]);
    entry("figure", [
      ["number-amount","数字；数量；金额","n.",["数字","数量","数值","价格","金额"],["number-amount"],"The latest figures show that visitor numbers rose by twelve percent last year.","最新数据显示，去年游客数量增长了百分之十二。",null,"https://www.vocabulary.com/dictionary/figure"],
      ["notable-person","人物；名人；知名人士","n.",["人物","名人","人士","知名人物"],["notable-person"],"She became a leading figure in the campaign to protect the city's old trees.","她成为保护城市古树运动中的一位领军人物。",null,"https://www.vocabulary.com/dictionary/figure"],
      ["shape-diagram","形状；图形；图表","n.",["形状","图形","图表","轮廓","外形"],["shape-figure-diagram"],"The report includes a figure that compares rainfall in the north and south.","报告里有一张比较南北降雨量的图表。",null,"https://www.vocabulary.com/dictionary/figure"],
      ["think-estimate","认为；估计；推算","v.",["认为","估计","推算","计算","演算"],["think-estimate"],"I figure we should leave before six if we want to avoid the traffic.","我估计如果想避开交通高峰，我们应该在六点前出发。",null,"https://www.vocabulary.com/dictionary/figure"]
    ],
    [
      {"terms":["描绘","表示"],"decision":"scope-excluded","reason":"旧词典把 figure 的 represent 义直译为'描绘、表示'，该用法现已过时，正文不收。","source":"https://www.vocabulary.com/dictionary/figure"},
      {"terms":["出现"],"decision":"context-required","reason":"figure 表示'出现/占一席之地'时须用在 figure in/among 等短语中，属搭配受限义项。","source":"https://www.vocabulary.com/dictionary/figure"}
    ]);
    entry("belt", [
      ["waist-belt","腰带；皮带；带子","n.",["腰带","皮带","带子","束带","带"],["waist-belt"],"He tightened his belt by one notch after losing weight on the hiking trip.","徒步旅行减重后，他把腰带收紧了一个孔。",null,"https://www.vocabulary.com/dictionary/belt"],
      ["region-zone","地带；区域；区","n.",["地带","区域","区","带"],["geographic-zone"],"Farmers in the wheat belt are worried about another dry summer.","小麦产区的农民担心又一个干旱的夏天。",null,"https://www.vocabulary.com/dictionary/belt"]
    ]);
    entry("cap", [
      ["headwear","帽子；便帽","n.",["帽子","便帽","鸭舌帽","帽"],["cap-headwear"],"She pulled her cap down to keep the sun out of her eyes.","她把帽子往下拉，免得阳光晃眼。",null,"https://www.vocabulary.com/dictionary/cap"],
      ["lid-cover","盖子；罩；瓶盖","n.",["盖子","盖","罩","瓶盖"],["lid-cover"],"Please put the cap back on the bottle so the lemonade stays fizzy.","请把瓶盖盖回去，这样柠檬水才不会跑气。",null,"https://www.vocabulary.com/dictionary/cap"],
      ["cover-top","覆盖；位于…顶端","v.",["覆盖","盖住","笼罩"],["cover-top"],"Thick snow capped the mountains for most of the winter.","那年冬天大部分时间，厚厚的积雪覆盖着群山。",null,"https://www.vocabulary.com/dictionary/cap"],
      ["upper-limit","上限；限额","n.",["上限","限额","最高限度"],["upper-limit","maximum-allowed-limit"],"The government placed a cap on the price of bread during the shortage.","短缺期间，政府对面包价格设定了上限。","a cap on sth","https://www.vocabulary.com/dictionary/cap"]
    ],
    [
      {"terms":["戴帽子"],"decision":"scope-excluded","reason":"'戴帽子'的动词用法罕见，现代英语通常说 put on a cap。","source":"https://www.vocabulary.com/dictionary/cap"},
      {"terms":["脱帽致意"],"decision":"scope-excluded","reason":"'脱帽致意'是古旧用法，现代英语用 take off one's hat 表达。","source":"https://www.vocabulary.com/dictionary/cap"},
      {"terms":["胜过"],"decision":"scope-excluded","reason":"cap 表示'胜过'仅见于 to cap it all 等固定说法，已非独立常用义。","source":"https://www.vocabulary.com/dictionary/cap"},
      {"terms":["容量","调用程序分析","代码分析程序","计算机辅助生产","计算机辅助印刷"],"decision":"scope-excluded","reason":"这些是 CAP 缩略语的计算机/工业释义（容量、代码分析程序、计算机辅助生产/印刷），不属于 cap 单词义项。","source":"https://www.vocabulary.com/dictionary/cap"}
    ]);
    entry("brim", [
      ["hat-brim","帽檐；帽边","n.",["帽檐","帽边","边"],["hat-brim"],"He wore a straw hat with a wide brim to shade his neck.","他戴着一顶宽檐草帽，给脖子遮阳。",null,"https://www.vocabulary.com/dictionary/brim"],
      ["container-edge","（容器的）边沿；口","n.",["边缘","边沿","口沿","边"],["container-edge"],"She filled the glass to the brim and carried it carefully to the table.","她把杯子倒得满满的，小心翼翼地端到桌边。","to the brim","https://www.vocabulary.com/dictionary/brim"],
      ["be-full","充满；满溢；注满","v.",["注满","满溢","使满溢","充满","盈满"],["be-full-overflow"],"His eyes brimmed with tears when the old friends met after twenty years.","二十年后再相见时，老朋友们眼里满是泪水。","brim with sth","https://www.vocabulary.com/dictionary/brim"]
    ],
    [
      {"terms":["(河)边"],"decision":"scope-excluded","reason":"旧译'(河)边'有误，brim 不表示河岸，河岸应作 riverbank。","source":"https://www.vocabulary.com/dictionary/brim"}
    ]);
    entry("needle", [
      ["sewing-needle","针；缝衣针","n.",["针","缝衣针","编织针"],["sewing-needle"],"My grandmother threaded a needle without her glasses, which always amazed me.","我祖母不戴眼镜也能穿针，这总让我惊叹。",null,"https://www.vocabulary.com/dictionary/needle"],
      ["medical-needle","注射针；针头","n.",["针头","注射针","针管"],["medical-needle"],"The nurse used a clean needle for each patient at the clinic.","诊所为每位病人使用一根干净的针头。",null,"https://www.vocabulary.com/dictionary/needle"],
      ["instrument-pointer","（仪表）指针","n.",["指针","表针","刻度针"],["instrument-pointer"],"The needle on the fuel gauge was already close to empty.","油量表上的指针已经接近空位。",null,"https://www.vocabulary.com/dictionary/needle"],
      ["provoke-annoy","（用话）刺激；激怒；招惹","v.",["刺激","激怒","招惹","挑逗"],["provoke-annoy"],"His classmates kept needling him about his new haircut until he laughed.","同学们一直拿他的新发型打趣，直到他笑了起来。",null,"https://www.vocabulary.com/dictionary/needle"]
    ],
    [
      {"terms":["尖"],"decision":"scope-excluded","reason":"'尖'指 needle 的针尖，是部件而非 needle 的词义。","source":"https://www.vocabulary.com/dictionary/needle"},
      {"terms":["用针缝","缝纫"],"decision":"scope-excluded","reason":"needle 作动词不表示'缝纫'，现代词典只列'刺、激怒'义，缝纫应作 sew。","source":"https://www.vocabulary.com/dictionary/needle"},
      {"terms":["探针"],"decision":"scope-excluded","reason":"'探针'是 probe 的对译，needle 不指探针。","source":"https://www.vocabulary.com/dictionary/needle"}
    ]);
    entry("pin", [
      ["fastener-noun","别针；大头针；图钉；销钉","n.",["别针","大头针","图钉","针","销钉","销子","栓"],["fastening-pin"],"She fastened the note to the board with a single pin.","她用一枚图钉把便条钉在公告板上。",null,"https://www.vocabulary.com/dictionary/pin"],
      ["fasten-with-pin","（用别针）别住；钉住","v.",["别住","钉住","用针别住","将...用针别住","固定"],["fasten-with-pin"],"He pinned the badge to his jacket before the ceremony began.","仪式开始前，他把徽章别在外套上。",null,"https://www.vocabulary.com/dictionary/pin"],
      ["immobilize","压住；使不能动；牵制","v.",["压住","使不能动","牵制","钳制"],["immobilize-hold"],"The fallen branch pinned the hiker's leg until rescue workers arrived.","倒下的树枝压住了徒步者的腿，直到救援人员赶到。",null,"https://www.vocabulary.com/dictionary/pin"],
      ["attribute-blame","把…归咎于；归罪于","v.",["归咎于","归罪于"],["attribute-blame"],"The manager tried to pin the mistake on a new employee who had just joined.","经理想把错误归咎于一名刚入职的新员工。","pin sth on sb","https://www.vocabulary.com/dictionary/pin"]
    ],
    [
      {"terms":["插头"],"decision":"scope-excluded","reason":"旧译'插头'是 plug 的释义，pin 只指插脚，不指插头。","source":"https://www.vocabulary.com/dictionary/pin"},
      {"terms":["管脚"],"decision":"restricted-verified","reason":"电子元件语境中 pin 指接插件/芯片的'管脚/引脚'，属受限技术义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/pin"},
      {"terms":["品(液量单位)","针的","销子的","闩的"],"decision":"scope-excluded","reason":"这些是旧词典为 pin 标注的液量单位与形容词/机械附属义，现代英语已不用，正文不收。","source":"https://www.vocabulary.com/dictionary/pin"}
    ]);
    entry("string", [
      ["cord-thread","细绳；线；绳子","n.",["细绳","线","绳子","弦"],["cord-thread"],"She tied the parcel with a piece of string she found in the drawer.","她用抽屉里找到的一截细绳把包裹捆好。",null,"https://www.vocabulary.com/dictionary/string"],
      ["series-sequence","一连串；一系列","n.",["一串","一系列","一连串","成串"],["series-sequence"],"The team enjoyed a string of victories after changing its coach.","换教练后，这支球队取得了一连串胜利。","a string of sth","https://www.vocabulary.com/dictionary/string"],
      ["text-string","字符串；字符序列","n.",["字符串","字符序列"],["text-string"],"The program crashed because the string contained a character it could not read.","程序崩溃了，因为字符串里含有它无法读取的字符。",null,"https://www.vocabulary.com/dictionary/string"],
      ["thread-on-string","串起；把…串在一起；捆扎","v.",["串起","串","穿成串","成串","捆扎","缚","扎","成一串"],["thread-on-string"],"They strung the lights across the garden for the wedding party.","为了婚礼聚会，他们把彩灯串在花园里。",null,"https://www.vocabulary.com/dictionary/string"]
    ],
    [
      {"terms":["收紧"],"decision":"scope-excluded","reason":"旧译'收紧'是 tighten 的释义，string 不表示收紧。","source":"https://www.vocabulary.com/dictionary/string"}
    ]);
    entry("chain", [
      ["metal-chain","链子；链条；链","n.",["链子","链条","链"],["metal-chain"],"He kept the gate closed with a heavy chain and a padlock.","他用一条粗重的链子和一把挂锁把大门锁好。",null,"https://www.vocabulary.com/dictionary/chain"],
      ["series-sequence","一连串；一系列；连锁","n.",["一连串","一系列","连锁","系列"],["series-sequence"],"A chain of small decisions led to the company's sudden collapse.","一系列小小的决策导致了公司的突然崩溃。","a chain of sth","https://www.vocabulary.com/dictionary/chain"],
      ["restraint-bond","束缚；枷锁；桎梏","n.",["束缚","枷锁","桎梏","羁绊"],["restraint-bond"],"She felt the chains of routine holding her back from trying something new.","她觉得日常琐事的枷锁阻碍自己去尝试新事物。",null,"https://www.vocabulary.com/dictionary/chain"],
      ["fasten-with-chain","用链条锁住；拴住","v.",["用铁链锁住","用铁练锁住","锁住","拴住"],["fasten-with-chain"],"The workers chained the bicycles to the rack outside the station.","工人们把自行车锁在车站外的车架上。",null,"https://www.vocabulary.com/dictionary/chain"]
    ],
    [
      {"terms":["囚禁"],"decision":"scope-excluded","reason":"旧译'囚禁'是 imprison 的释义，chain 只表示用链条拴住或束缚，不直接表示囚禁。","source":"https://www.vocabulary.com/dictionary/chain"}
    ]);
    entry("tight", [
      ["constricted","紧的；紧绷的；紧身的","adj.",["紧的","紧绷的","紧身的","勒紧的"],["tight-constricted"],"These new shoes are too tight across the toes for a long walk.","这双新鞋脚趾处太紧，不适合长时间走路。",null,"https://www.vocabulary.com/dictionary/tight"],
      ["sealed-impermeable","密封的；严实的；不透的","adj.",["密封的","严实的","不透的"],["sealed-impermeable"],"Keep the jar tight so the coffee beans do not lose their flavour.","把罐子盖严，免得咖啡豆失去香味。",null,"https://www.vocabulary.com/dictionary/tight"],
      ["strict-demanding","严格的；严厉的；严密的","adj.",["严格的","严厉的","严密的"],["strict-demanding","strict-disapproving"],"Security at the airport was tight after the warning, so queues moved slowly.","接到警告后机场安检十分严密，队伍移动得很慢。",null,"https://www.vocabulary.com/dictionary/tight"],
      ["firmly-closely","紧紧地；牢牢地","ad.",["紧紧地","牢牢地"],["firmly-closely"],"She held tight to the railing as the ferry rocked in the waves.","渡轮在浪中摇晃时，她紧紧抓住栏杆。","hold tight to sth","https://www.vocabulary.com/dictionary/tight"]
    ],
    [
      {"terms":["吝啬的"],"decision":"context-required","reason":"tight 表示'小气/吝啬'属非正式口语，需语境支撑，正文未单列。","source":"https://www.vocabulary.com/dictionary/tight"}
    ]);
    entry("trousers", [
      ["trousers-garment","裤子；长裤","n. pl.",["裤子","长裤","西裤"],["trousers-garment"],"He wore grey trousers and a white shirt to the job interview.","他穿着灰色长裤和白衬衫去参加面试。",null,"https://www.vocabulary.com/dictionary/trousers"]
    ]);
    entry("overall", [
      ["comprehensive-total","总体的；全面的；全部的","adj.",["全部的","总体的","全面的","全体的","从头至尾的","一切在内的"],["comprehensive-total"],"The overall cost of the trip was lower than we had expected.","这次旅行的总费用比我们预期的低。",null,"https://www.vocabulary.com/dictionary/overall"],
      ["generally-in-total","总的说来；总体上；总的来说","ad.",["总的说来","总体上","总的来说","从头到尾"],["generally-in-total"],"Overall, the survey suggests that young people read more than their parents did.","总的来说，调查表明年轻人比他们的父母读得更多。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/overall"],
      ["work-overalls","背带裤；罩衫；工作服","n.",["背带裤","罩衫","工作服","工装裤"],["work-overalls"],"The painter put on old overalls before starting on the ceiling.","油漆工在刷天花板前穿上了旧工作服。",null,"https://www.vocabulary.com/dictionary/overall"]
    ]);
    entry("white", [
      ["colour-white","白色的；白色（颜色）","adj./n.",["白色的","白色","洁白","雪白"],["colour-white"],"The walls of the old lighthouse were painted white to make them visible from the sea.","旧灯塔的墙壁被漆成白色，以便从海上就能看见。",null,"https://www.vocabulary.com/dictionary/white"],
      ["white-race","白种人的；白种人","adj./n.",["白种人","白人的","白种的","白人"],["racial-group-white"],"The census asks residents to describe their ethnic background, including whether they are white.","人口普查要求居民说明自己的族裔背景，包括是否为白人。",null,"https://www.vocabulary.com/dictionary/white"],
      ["pale-complexion","苍白的；面无血色的","adj.",["苍白的","惨白的","面无血色"],["pale-complexion"],"Her face turned white when the nurse read out the test results.","护士念出检查结果时，她的脸一下子变得苍白。",null,"https://www.vocabulary.com/dictionary/white"],
      ["white-part","蛋白；蛋清；眼白","n.",["蛋白","蛋清","眼白","白色部分"],["egg-white","white-of-eye"],"Separate the white from the yolk and beat it until stiff peaks form.","把蛋白和蛋黄分开，然后搅打到硬性发泡。",null,"https://www.vocabulary.com/dictionary/white"]
    ],
    [
      {"terms":["纯洁的","空白的"],"decision":"scope-excluded","reason":"旧译“纯洁的”属于 white 的文学、古旧义（如 white knight），“空白的”只对应 white margins 这类未书写纸面的受限用法，现代常用语中均不单列，故排除。","source":"https://www.vocabulary.com/dictionary/white"},
      {"terms":["幸运的"],"decision":"scope-excluded","reason":"所查 vocabulary.com 与 dictionaryapi.dev 的 white 词条均无“幸运的”义项，旧译属于误收，故不纳入本批。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/white"}
    ]);
    entry("yellow", [
      ["colour-yellow","黄色；黄色颜料","n.",["黄色","黄颜色","黄色颜料"],["yellow-pigment"],"The artist mixed yellow with a little blue to paint the autumn leaves.","画家把黄色和一点蓝色混合，用来画秋天的树叶。",null,"https://www.vocabulary.com/dictionary/yellow"],
      ["yellow-coloured","黄色的","adj.",["黄色的","黄澄澄的"],["colour-yellow"],"A yellow line along the platform warns passengers to stand back from the edge.","站台边的一条黄线提醒乘客不要靠近边缘。",null,"https://www.vocabulary.com/dictionary/yellow"],
      ["cowardly","胆怯的；懦弱的","adj.",["胆怯的","懦弱的","胆小的"],["cowardly"],"His opponents called him yellow because he refused to enter the ring.","对手说他胆小，因为他拒绝上场。",null,"https://www.vocabulary.com/dictionary/yellow"],
      ["turn-yellow","（使）变黄；发黄","v.",["变黄","使变黄","发黄"],["become-yellow"],"The pages of the old diary have yellowed with age and damp.","那本旧日记的纸页因年久受潮而发黄。",null,"https://www.vocabulary.com/dictionary/yellow"]
    ]);
    entry("brown", [
      ["brown-coloured","褐色的；棕色的","adj.",["褐色的","棕色的","咖啡色的"],["colour-brown"],"He wore a brown leather jacket that had belonged to his father.","他穿着一件曾属于他父亲的棕色皮夹克。",null,"https://www.vocabulary.com/dictionary/brown"],
      ["colour-brown-n","褐色；棕色","n.",["褐色","棕色","咖啡色"],["brown-pigment"],"The autumn forest is a mixture of brown, gold and deep red.","秋天的森林是褐色、金色与深红的混合。",null,"https://www.vocabulary.com/dictionary/brown"],
      ["make-brown","（使）变褐；煎成褐色","v.",["(使)变褐色","变褐","煎黄","煎成褐色"],["become-brown","cook-until-brown"],"Brown the onions in a hot pan before adding the tomatoes.","加入番茄之前，先把洋葱在热锅里煎成褐色。",null,"https://www.vocabulary.com/dictionary/brown"]
    ]);
    entry("purple", [
      ["colour-purple","紫色的；紫色","adj./n.",["紫色的","紫色","紫红色"],["colour-purple"],"She painted the bedroom walls purple and hung a matching curtain.","她把卧室墙壁刷成紫色，还挂上了相配的窗帘。",null,"https://www.vocabulary.com/dictionary/purple"],
      ["imperial","帝王的；帝位；皇权","adj./n.",["帝王的","帝位","皇权","王权的"],["imperial-rank"],"In ancient Rome, purple cloth was reserved for the emperor and his family.","在古罗马，紫色布料专供皇帝及其家族使用。",null,"https://www.vocabulary.com/dictionary/purple"],
      ["ornate-prose","华而不实的；辞藻华丽的","adj.",["华而不实的","辞藻华丽的","浮华的"],["ornate-language"],"The critic dismissed the novel as purple prose full of empty images.","评论家把这部小说斥为辞藻华丽却意象空洞的文字。",null,"https://www.vocabulary.com/dictionary/purple"],
      ["turn-purple","（使）成紫色；变紫","v.",["(使)成紫色","变紫","染成紫色"],["become-purple"],"The sky purpled as the sun sank behind the distant hills.","太阳落到远山背后时，天空变成了紫色。",null,"https://www.vocabulary.com/dictionary/purple"]
    ]);
    entry("diamond", [
      ["precious-stone","钻石；金刚石","n.",["钻石","金刚石","宝石"],["gemstone-diamond"],"The ring held a small diamond that had been in the family for generations.","那枚戒指镶着一颗家族传承数代的小钻石。",null,"https://www.vocabulary.com/dictionary/diamond"],
      ["rhombus","菱形；斜方形","n.",["菱形","斜方形"],["geometric-rhombus"],"The floor tiles form a diamond pattern in the centre of the hall.","地砖在门厅中央拼出菱形图案。",null,"https://www.vocabulary.com/dictionary/diamond"],
      ["card-suit","（纸牌）方块；方块牌","n.",["方块","方块牌","方块花色"],["playing-card-suit"],"He laid down the ace of diamonds and won the final trick.","他打出方块 A，赢下了最后一墩。",null,"https://www.vocabulary.com/dictionary/diamond"]
    ]);
    entry("fake", [
      ["counterfeit-thing","假货；赝品","n.",["假货","赝品","仿制品","冒牌货"],["counterfeit-object"],"The market was full of fake handbags sold at suspiciously low prices.","市场上到处是以低得可疑的价格出售的假名牌包。",null,"https://www.vocabulary.com/dictionary/fake"],
      ["not-genuine","假的；伪造的","adj.",["假的","伪造的","仿制的","冒充的"],["not-genuine","imitation-not-genuine"],"The inspector could tell the signature was fake at a glance.","检查员一眼就看出那个签名是假的。",null,"https://www.vocabulary.com/dictionary/fake"],
      ["forge","伪造；仿造；假冒","v.",["假造","仿造","伪造","假冒"],["forge-falsify"],"He faked his grandmother's signature to take money out of her account.","他伪造了祖母的签名，从她的账户里取钱。",null,"https://www.vocabulary.com/dictionary/fake"],
      ["pretend","假装；伪装","v.",["伪装","假装","装出","佯装"],["feign-pretend"],"She faked a smile when her rival won the competition.","对手赢得比赛时，她挤出一丝假笑。",null,"https://www.vocabulary.com/dictionary/fake"]
    ],
    [
      {"terms":["欺骗","诡计"],"decision":"scope-excluded","reason":"旧译“欺骗”“诡计”对应 fake 作动词“诈骗”、名词“骗局”的偏旧用法，现代常用语中主要用 cheat 或 trick 表达，故本批不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/fake"}
    ]);
    entry("fuel", [
      ["energy-substance","燃料；燃油","n.",["燃料","燃油","燃煤"],["fuel-substance"],"The old tractor runs on a cheap fuel made from vegetable oil.","那台旧拖拉机使用一种由植物油制成的廉价燃料。",null,"https://www.vocabulary.com/dictionary/fuel"],
      ["stimulus","刺激因素；推动力","n.",["刺激因素","推动力","催化剂"],["stimulus-motivation"],"Rumours about the factory closure became fuel for the protest.","工厂即将关闭的传闻成了抗议活动的推动力。",null,"https://www.vocabulary.com/dictionary/fuel"],
      ["supply-fuel","给…加燃料；为…提供燃料","v.",["加燃料","供燃料","加油","补充燃料","得到燃料"],["supply-fuel"],"The plane stopped in Iceland to fuel before crossing the Atlantic.","飞机在冰岛停下来加油，然后飞越大西洋。",null,"https://www.vocabulary.com/dictionary/fuel"],
      ["intensify","助长；加剧；激起","v.",["助长","加剧","激起","刺激"],["intensify-conflict"],"Angry comments online only fueled the argument between the two neighbours.","网上的愤怒评论只是加剧了两位邻居之间的争吵。",null,"https://www.vocabulary.com/dictionary/fuel"]
    ],
    [
      {"terms":["木炭"],"decision":"scope-excluded","reason":"旧译“木炭”只是燃料的一种具体材料，查词汇网站与 dictionaryapi.dev 均未把木炭列为 fuel 的独立义项，故不单列。","source":"https://www.vocabulary.com/dictionary/fuel"}
    ]);
    entry("pit", [
      ["hole-in-ground","深坑；坑洞；凹陷处","n.",["深坑","坑洞","凹陷处","坑"],["hole-in-ground"],"The children dug a deep pit in the sand and filled it with water.","孩子们在沙地里挖了一个深坑，然后往里灌满水。",null,"https://www.vocabulary.com/dictionary/pit"],
      ["mine-shaft","矿井；煤矿；矿坑","n.",["矿井","煤矿","矿坑","采石场"],["mine-shaft"],"Hundreds of miners lost their jobs when the coal pit closed.","煤矿关闭时，数百名矿工失去了工作。",null,"https://www.vocabulary.com/dictionary/pit"],
      ["fruit-stone","果核；核","n.",["果核","果核儿","核","果心"],["fruit-stone"],"She removed the pit from the cherry and dropped it into a bowl.","她把樱桃核去掉，丢进一个碗里。",null,"https://www.vocabulary.com/dictionary/pit"],
      ["set-against","使相斗；使竞争；使对抗","v.",["使相斗","使竞争","使对抗","使较量"],["set-against"],"The coach pitted the young defender against the league's best striker.","教练让年轻的防守球员与联赛最佳射手对抗。","pit sb against sb","https://www.vocabulary.com/dictionary/pit"]
    ],
    [
      {"terms":["陷阱"],"decision":"restricted-verified","reason":"经 vocabulary.com 核实，pit 有“隐蔽坑洞式陷阱”（a trap in the form of a concealed hole）义，属受限比喻语境，本批不单列。","source":"https://www.vocabulary.com/dictionary/pit"},
      {"terms":["深渊"],"decision":"restricted-verified","reason":"经 vocabulary.com 核实，pit 可指地狱、无底深渊（the abode of Satan 等），属宗教与文学语境，本批不单列。","source":"https://www.vocabulary.com/dictionary/pit"},
      {"terms":["使凹下","使有麻点","使留疤痕","起凹点","凹陷"],"decision":"restricted-verified","reason":"经 vocabulary.com 与 dictionaryapi.dev 核实，pit 作动词可指在表面弄出凹坑、麻点或留下疤痕（如酸雨侵蚀金属），属具体物质语境，本批不单列。","source":"https://www.vocabulary.com/dictionary/pit"},
      {"terms":["去...之核"],"decision":"restricted-verified","reason":"经 vocabulary.com 核实，pit 作动词可指去掉水果的核（remove the pits from），属烹饪语境，本批不单列而用果核名词义覆盖。","source":"https://www.vocabulary.com/dictionary/pit"},
      {"terms":["地窖","窖藏","绝境"],"decision":"scope-excluded","reason":"旧译“地窖”“窖藏”“绝境”在 vocabulary.com 与 dictionaryapi.dev 的 pit 词条中均无对应的独立义项，属误收或过度引申，故排除。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/pit"}
    ]);
    entry("whitewash", [
      ["lime-paint","白色涂料；石灰水","n.",["白色涂料","石灰水","白涂料"],["lime-wash"],"The farmer mixed lime and water to make whitewash for the barn walls.","农夫把石灰和水混合，制成粉刷谷仓墙壁的白色涂料。",null,"https://www.vocabulary.com/dictionary/whitewash"],
      ["paint-white","粉刷；刷白","v.",["粉刷","刷白","涂白"],["paint-white"],"They whitewashed the garden wall just before the summer festival.","夏季庆典前，他们把花园围墙刷白了。",null,"https://www.vocabulary.com/dictionary/whitewash"],
      ["cover-up","粉饰；掩盖（错误或丑闻）","v.",["粉饰","掩盖","掩饰","洗白"],["cover-up-faults"],"The report was accused of trying to whitewash the company's safety failures.","这份报告被指责试图粉饰公司的安全失误。",null,"https://www.vocabulary.com/dictionary/whitewash"],
      ["shutout-defeat","（体育）零分惨败；完胜","n.",["得零分的惨败","零分惨败","完胜","零封"],["shutout-defeat"],"The home team suffered a five-nil whitewash in front of their own fans.","主队在自家球迷面前以零比五惨败。",null,"https://www.vocabulary.com/dictionary/whitewash"]
    ]);
    entry("inferior", [
      ["lower-quality","较差的；次等的","adj.",["次等的","较差的","劣等的","低劣的"],["lower-quality"],"The cheaper model uses inferior materials and breaks down quickly.","较便宜的型号使用较差的材料，很快就坏了。",null,"https://www.vocabulary.com/dictionary/inferior"],
      ["lower-rank","下级的；地位较低的","adj.",["下级的","地位低的","低一级的"],["lower-rank"],"He rarely spoke to his inferior officers as if they were his equals.","他很少以平等的态度与下级军官说话。",null,"https://www.vocabulary.com/dictionary/inferior"],
      ["subordinate","部下；下属","n.",["部下","下属","下级"],["subordinate-person"],"A good manager listens to advice from subordinates and inferiors alike.","优秀的管理者会听取下属和级别较低者的建议。",null,"https://www.vocabulary.com/dictionary/inferior"],
      ["located-below","下方的；在下的","adj.",["下方的","在下的","下部的"],["located-below"],"The inferior surface of the leaf is covered with tiny hairs.","叶片的下表面覆盖着细小的绒毛。",null,"https://www.vocabulary.com/dictionary/inferior"]
    ],
    [
      {"terms":["次品"],"decision":"scope-excluded","reason":"旧译“次品”来自 inferior goods（次等品、低档商品）这类搭配，inferior 单用作名词只指地位较低的人，故不单列。","source":"https://www.vocabulary.com/dictionary/inferior"},
      {"terms":["下标(符号)"],"decision":"restricted-verified","reason":"经 vocabulary.com 核实，inferior 可指排印在下方或下角的下标字符（subscript），属排版与数学术语，本批不单列。","source":"https://www.vocabulary.com/dictionary/inferior"}
    ]);
    entry("economy", [
      ["economic-system","经济；经济体系","n.",["经济","经济体","经济体系"],["economic-system"],"Tourism now plays a major role in the island's economy.","旅游业如今在岛上的经济中起主要作用。",null,"https://www.vocabulary.com/dictionary/economy"],
      ["thrift","节约；节俭；有效管理（资源）","n.",["节约","节俭","节省","理财"],["thrift-saving"],"The family practised economy by growing their own vegetables.","这家人靠自己种菜来节约开支。",null,"https://www.vocabulary.com/dictionary/economy"],
      ["economy-class","（客机、列车）经济舱","n.",["经济舱","经济座位","经济客位"],["economy-class"],"We flew economy because the business-class tickets were far too expensive.","我们坐经济舱，因为商务舱机票实在太贵了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/economy"]
    ],
    [
      {"terms":["整体"],"decision":"scope-excluded","reason":"旧译“整体”来自 economy 指系统或有机整体（如 the economy of nature）的旧义，现代常用语中几乎不用，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/economy"}
    ]);
    entry("trade", [
      ["commerce","贸易；商业；生意","n.",["贸易","商业","生意","买卖"],["commerce"],"Trade between the two countries has grown steadily over the past decade.","过去十年间，两国之间的贸易稳步增长。",null,"https://www.vocabulary.com/dictionary/trade"],
      ["exchange","交换；对换；（一笔）交易","n.",["交易","对换","互换","交换"],["equal-exchange"],"The boys made a fair trade: a comic for a football sticker.","男孩们做了一笔公平的交换：一本漫画换一张足球贴纸。",null,"https://www.vocabulary.com/dictionary/trade"],
      ["skilled-occupation","行业；手艺；职业","n.",["行业","手艺","职业","同行"],["skilled-occupation"],"He learned the trade of cabinet-making from his uncle.","他从叔叔那里学会了做橱柜这门手艺。",null,"https://www.vocabulary.com/dictionary/trade"],
      ["do-business","进行交易；经商；做买卖","v.",["进行交易","做买卖","经商","用...进行交换"],["buy-sell"],"Villagers trade their honey for rice at the weekly market.","村民们在每周集市上用蜂蜜换大米。","trade sth for sth","https://www.vocabulary.com/dictionary/trade"]
    ],
    [
      {"terms":["顾客"],"decision":"restricted-verified","reason":"经 vocabulary.com 核实，trade 可指商店获得的顾客光顾量（the business given by customers），属商业语境，本批不单列。","source":"https://www.vocabulary.com/dictionary/trade"},
      {"terms":["信风"],"decision":"restricted-verified","reason":"经 vocabulary.com 核实，trade winds 指信风，此处 trade 来自“恒定路线”的古义，属气象术语，本批不单列。","source":"https://www.vocabulary.com/dictionary/trade"},
      {"terms":["购物"],"decision":"scope-excluded","reason":"旧译“购物”对应 trade at a shop 这类旧搭配，现代英语通常用 shop，trade 单用不含购物义，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/trade"}
    ]);
    entry("commercial", [
      ["commerce-related","商业的；商务的","adj.",["商业的","商务的","营业的"],["commerce-related"],"The city centre has become a purely commercial district with few homes.","市中心已变成几乎没有住宅的纯商业区。",null,"https://www.vocabulary.com/dictionary/commercial"],
      ["commercial-grade","商用的；商品化的","adj.",["商用的","商品化的","批量生产的"],["commercial-grade"],"The kitchen was fitted with commercial-grade equipment built for heavy use.","厨房配备了为高强度使用而设计的商用级设备。",null,"https://www.vocabulary.com/dictionary/commercial"],
      ["television-ad","（电视、电台的）商业广告","n.",["商业广告节目","商业广告","广告"],["broadcast-advert"],"The commercial lasted thirty seconds and showed a family eating cereal.","这则广告长三十秒，展示了一家人吃麦片的场景。",null,"https://www.vocabulary.com/dictionary/commercial"]
    ]);
    entry("firm", [
      ["company","公司；商号","n.",["公司","商号","企业"],["business-company"],"She joined a law firm in London after finishing her degree.","她毕业后加入了伦敦的一家律师事务所。",null,"https://www.vocabulary.com/dictionary/firm"],
      ["resolute","坚定的；确定的","adj.",["坚定的","坚强的","确定的","坚决的"],["resolute-certain"],"The mayor was firm that the new bridge would be built on time.","市长坚定地表示新桥会按时建成。","be firm that","https://www.vocabulary.com/dictionary/firm"],
      ["solid","牢固的；结实的；坚硬的","adj.",["牢固的","结实的","坚硬的","稳固的"],["solid-sturdy","substantial-solid-build"],"The mattress is firm enough to support your back.","这张床垫足够坚实，能支撑你的背部。",null,"https://www.vocabulary.com/dictionary/firm"],
      ["steady-price","（价格、行情）坚挺的；稳定的","adj.",["坚挺的","稳定的","行情坚挺的"],["steady-market-price"],"Coffee prices remained firm despite a record harvest in Brazil.","尽管巴西迎来创纪录的丰收，咖啡价格依然坚挺。",null,"https://www.vocabulary.com/dictionary/firm"]
    ],
    [
      {"terms":["使牢固","使坚定","变稳固","变坚实"],"decision":"restricted-verified","reason":"经 vocabulary.com 核实，firm 作动词可指使牢固、使坚实或变得稳固（如 firm the muscles），多用于具体动作，本批以形容词义覆盖，故不单列。","source":"https://www.vocabulary.com/dictionary/firm"},
      {"terms":["稳固地"],"decision":"restricted-verified","reason":"经 vocabulary.com 核实，firm 可作副词，意为坚定地、稳固地（stand firm），属固定搭配，本批不单列。","source":"https://www.vocabulary.com/dictionary/firm"},
      {"terms":["严格的"],"decision":"scope-excluded","reason":"旧译“严格的”大致对应 firm discipline 一类搭配，主流词典未把 strict 列为 firm 的独立义项，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/firm"}
    ]);
    entry("deal", [
      ["agreement","交易；协议；协定","n.",["交易","协议","协定","买卖"],["agreement-transaction"],"The two governments finally reached a deal on sharing the river water.","两国政府终于就共享河水达成协议。","reach a deal","https://www.vocabulary.com/dictionary/deal"],
      ["cope-with","处理；应付；对待","v.",["处理","应付","对待","解决"],["handle-cope"],"The staff were trained to deal with angry customers calmly.","员工接受了培训，学会冷静应对愤怒的顾客。","deal with sth/sb","https://www.vocabulary.com/dictionary/deal"],
      ["distribute","分配；分发；发牌","v.",["分配","分发","发牌","给予"],["distribute-cards"],"It is your turn to deal the cards to the other players.","轮到你给其他玩家发牌了。",null,"https://www.vocabulary.com/dictionary/deal"],
      ["large-amount","大量；数量","n.",["数量","大量","许多"],["large-amount"],"The project took a great deal of time and money to finish.","完成这个项目花费了大量的时间和金钱。","a great deal of","https://www.vocabulary.com/dictionary/deal"]
    ],
    [
      {"terms":["做生意"],"decision":"restricted-verified","reason":"经 vocabulary.com 核实，deal 作动词可指做生意、经营（deal in gold），属商业语境，本批以交易名词义覆盖，故不单列。","source":"https://www.vocabulary.com/dictionary/deal"},
      {"terms":["松木板"],"decision":"restricted-verified","reason":"经 vocabulary.com 核实，deal 可指松木等易锯的软木板材（a plank of softwood），属木材行业术语，本批不单列。","source":"https://www.vocabulary.com/dictionary/deal"}
    ]);
    entry("account", [
      ["bank-account","账户；帐号","n.",["帐户","帐号","账户","账号"],["bank-account"],"She opened a savings account at the bank near her office.","她在办公室附近的银行开了一个储蓄账户。",null,"https://www.vocabulary.com/dictionary/account"],
      ["financial-record","账目；账单；结账单","n.",["帐目","账目","账单","结账单","算账","报帐"],["financial-record"],"The manager asked for a detailed account of the company's spending.","经理要求提供公司开支的详细账目。",null,"https://www.vocabulary.com/dictionary/account"],
      ["narrative-report","叙述；描述；报告","n.",["报告","叙述","描述","说明"],["narrative-report"],"The witness gave a clear account of what happened that night.","目击者清楚地叙述了那晚发生的事。",null,"https://www.vocabulary.com/dictionary/account"],
      ["explain-proportion","说明（原因）；（比例上）占；导致","v.",["解释","占","导致","说明原因"],["explain-cause","proportion-of-total"],"Online sales account for a third of the company's total revenue.","网上销售占公司总营收的三分之一。","account for sth","https://www.vocabulary.com/dictionary/account"]
    ],
    [
      {"terms":["理由"],"decision":"restricted-verified","reason":"经 vocabulary.com 核实，account 有“理由、根据”义（如 on my account、on account of），属固定搭配语境，本批不单列。","source":"https://www.vocabulary.com/dictionary/account"},
      {"terms":["估价"],"decision":"restricted-verified","reason":"经 dictionaryapi.dev 核实，account 有“估计、估价”义（an estimate or valuation），现代常用语中少见，本批不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/account"},
      {"terms":["利润","报偿","报答"],"decision":"scope-excluded","reason":"旧译“利润”“报偿”“报答”在所查 account 词条中没有对应的独立义项，其中报偿、报答与 payment 混淆，属误收，故排除。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/account"},
      {"terms":["杀死","认为"],"decision":"scope-excluded","reason":"旧译“杀死”“认为”来自 account for（消灭）与 account sb a fool（认为）等古旧或军事用法，现代常用语中不单列，故排除。","source":"https://www.vocabulary.com/dictionary/account"}
    ]);
    entry("cash", [
      ["physical-money","现金；现款","n.",["现金","现款","现钞"],["physical-money"],"The shop only accepts cash, so bring some notes with you.","这家店只收现金，所以请随身带些纸币。",null,"https://www.vocabulary.com/dictionary/cash"],
      ["exchange-for-cash","兑现；把…换成现金","v.",["兑现","换成现金","套现"],["exchange-for-cash"],"He cashed the cheque at the bank on his way to work.","他在上班路上到银行把支票兑现了。",null,"https://www.vocabulary.com/dictionary/cash"]
    ]);
    entry("salary", [
      ["fixed-pay","薪水；工资","n.",["薪水","工资","薪金"],["fixed-pay"],"Her new job offers a higher salary but requires longer hours.","她的新工作薪水更高，但工作时间更长。",null,"https://www.vocabulary.com/dictionary/salary"]
    ],
    [
      {"terms":["给...加薪"],"decision":"scope-excluded","reason":"旧译“给...加薪”把 salary 作动词误解为加薪；词典中该动词指按周或更长期限支付薪金（to pay a salary），现代常用语中几乎不用，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/salary"}
    ]);
    entry("payment", [
      ["paying-money","付款；支付","n.",["付款","支付","缴纳","偿还"],["act-of-paying"],"Payment must be made within thirty days of receiving the invoice.","必须在收到发票后三十天内付款。",null,"https://www.vocabulary.com/dictionary/payment"],
      ["sum-paid","款项；支付的金额","n.",["支付的款项","款项","付款额"],["sum-paid"],"The first payment of two hundred pounds is due next week.","第一笔两百英镑的款项下周到期。",null,"https://www.vocabulary.com/dictionary/payment"],
      ["requital","报答；回报","n.",["报答","报偿","回报"],["requital"],"He gave her a small gift as payment for her help.","他送了她一件小礼物，作为对她帮助的报答。",null,"https://www.vocabulary.com/dictionary/payment"]
    ]);
    entry("wealth", [
      ["riches","财富；财产","n.",["财富","财产","钱财","资源","富裕"],["riches"],"The family's wealth came from a chain of hotels along the coast.","这个家族的财富来自沿海一带的连锁酒店。",null,"https://www.vocabulary.com/dictionary/wealth"],
      ["abundance","大量；丰富；充裕","n.",["丰富","大量","充裕"],["abundance"],"The library offers a wealth of information about local history.","这座图书馆提供大量关于当地历史的信息。","a wealth of sth","https://www.vocabulary.com/dictionary/wealth"]
    ]);
    entry("increase", [
      ["become-greater","增加；增大；提高","v.",["增加","增大","提高","上升"],["increase-quantity"],"Sales of electric bikes increased sharply after the city cut parking fees.","城市下调停车费后，电动自行车的销量大幅增长。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/increase"],
      ["amount-gained","增长量；增长幅度","n.",["增长","增加量","增长幅度","上升幅度"],["increase-amount"],"The company reported a modest increase in profits for the third quarter.","公司报告第三季度利润有小幅增长。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/increase"]
    ]);
    entry("decrease", [
      ["become-smaller","减少；降低；减小","v.",["减少","减小","降低","下降"],["decrease-quantity"],"Bicycle thefts decreased by half after the new street lights were installed.","安装新路灯后，自行车失窃案减少了一半。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/decrease"],
      ["amount-lost","减少量；下降幅度","n.",["减少量","下降幅度","降幅"],["decrease-amount"],"The report notes a small decrease in rainfall across the southern counties.","报告指出南部各郡的降雨量有小幅下降。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/decrease"]
    ]);
    entry("expand", [
      ["grow-in-scope","扩大；扩展；扩张","v.",["扩大","扩展","扩张","增加"],["expand-size-scope"],"The airline plans to expand its route network across Southeast Asia next year.","这家航空公司计划明年在东南亚扩展航线网络。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/expand"],
      ["swell","膨胀；胀大","v.",["膨胀","胀大","体积变大"],["expand-material-volume"],"Metal rails expand in summer heat, so engineers leave small gaps between sections.","铁轨在夏季高温下会膨胀，因此工程师在各段之间留出小缝隙。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/expand"],
      ["give-detail","详述；展开说明","v.",["详述","展开","进一步说明"],["expand-on-topic"],"The minister refused to expand on his earlier remarks about the budget.","部长拒绝就他此前关于预算的表态作进一步说明。","expand on sth","https://api.dictionaryapi.dev/api/v2/entries/en/expand"]
    ]);
    entry("reduce", [
      ["make-less","减少；降低；缩小","v.",["减少","降低","缩小","削减"],["reduce-amount"],"The factory reduced its water use by recycling coolant on site.","这家工厂通过现场回收冷却液减少了用水量。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/reduce"],
      ["lose-weight","减肥；减轻体重","v.",["减肥","减轻体重","瘦下来"],["reduce-body-weight"],"He reduced by ten kilos after giving up beer and late-night snacks.","他戒掉啤酒和夜宵后减了十公斤。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/reduce"],
      ["break-into-parts","分解；归纳为","v.",["分解","把...分解","把...归纳","简化成"],["reduce-to-parts"],"Any large problem can be reduced to a few smaller questions.","任何大的问题都可以归纳为几个更小的问题。","reduce sth to sth","https://api.dictionaryapi.dev/api/v2/entries/en/reduce"],
      ["bring-low","使衰弱；使陷入更差境地","v.",["使衰退","使沦落","使变得"],["reduce-to-worse-state"],"The long illness reduced him to a shadow of his former self.","长期患病使他衰弱得判若两人。","reduce sb to sth","https://api.dictionaryapi.dev/api/v2/entries/en/reduce"]
    ]);
    entry("diminish", [
      ["become-less","减少；变小；减弱","v.",["(使)减少","(使)变小","减弱"],["diminish-quantity"],"The noise from the motorway diminished as we drove further west.","随着我们往西开，高速公路的噪音逐渐减弱。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/diminish"],
      ["belittle","贬低；削弱重要性","v.",["贬低","削弱","轻视"],["diminish-importance"],"Constant criticism can diminish a child's confidence in the classroom.","不断的批评会削弱孩子在课堂上的自信。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/diminish"]
    ]);
    entry("decelerate", [
      ["slow-vehicle","（使）减速；放慢","v.",["(使)减速","减速","放慢速度"],["decelerate-speed"],"The train decelerated gently as it approached the flooded bridge.","列车在接近被洪水淹没的桥时缓缓减速。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/decelerate"],
      ["slow-growth","使增长放缓","v.",["放缓","减慢","使放慢"],["decelerate-growth"],"Higher interest rates decelerated the growth of house prices last year.","较高的利率使去年房价的上涨速度放缓。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/decelerate"]
    ]);
    entry("improve", [
      ["make-better","改良；改善；提高","v.",["改良","改善","提高...的价值","增加"],["improve-quality"],"Adding a second lane improved traffic flow on the ring road.","增设一条车道改善了环城路的交通流量。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/improve"],
      ["become-better","变好；好转","v.",["变得更好","好转","有进步"],["improve-over-time"],"Her spoken French improved quickly once she moved to Lyon.","她搬到里昂后，法语口语进步很快。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/improve"]
    ],
    [
      {"terms":["利用"],"decision":"scope-excluded","reason":"旧译“利用”对应 improve one's time 这类善用时间的古旧书面用法，现代常用语中已少见，本批只保留改良与变好义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/improve"}
    ]);
    entry("improvement", [
      ["making-better","改善；进步","n.",["改善","进步","改良"],["improvement-process"],"The new timetable brought a real improvement in bus punctuality.","新的时刻表使公交准点率有了明显改善。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/improvement"],
      ["better-version","改进之处；比原来好的事物","n.",["好转","改进","更好的版本"],["improvement-result"],"The latest model is a clear improvement on the one we bought in 2019.","最新款明显比我们 2019 年买的那款要好。","an improvement on sth","https://api.dictionaryapi.dev/api/v2/entries/en/improvement"]
    ],
    [
      {"terms":["利用"],"decision":"scope-excluded","reason":"旧译“利用”来自 improvement 指“善用、有效运用”的旧义，现代常用语中几乎只保留改进义，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/improvement"}
    ]);
    entry("sufficient", [
      ["enough","足够的；充分的","adj.",["足够的","充分的","够用的"],["sufficient-amount"],"There is sufficient evidence to charge the driver with careless driving.","有足够的证据以粗心驾驶起诉这名司机。","sufficient for sth","https://api.dictionaryapi.dev/api/v2/entries/en/sufficient"]
    ]);
    entry("lack", [
      ["shortage","缺乏；不足；短缺","n.",["缺乏","不足","短少","短缺"],["lack-shortage"],"A lack of clean water forced the clinic to close for two days.","清洁用水不足迫使诊所关闭了两天。","a lack of sth","https://www.vocabulary.com/dictionary/lack"],
      ["be-without","缺少；没有；需要","v.",["缺乏","无","需要","缺少"],["lack-be-without"],"The final report lacks any figures on costs.","最终报告缺少任何关于成本的数字。",null,"https://www.vocabulary.com/dictionary/lack"]
    ]);
    entry("employ", [
      ["give-work","雇用；聘用","v.",["雇用","聘用","聘请"],["hire-employ"],"The council employs more than three hundred people in street cleaning.","市政委员会雇用了三百多人从事街道清扫。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/employ"],
      ["make-use-of","使用；采用；运用","v.",["使用","采用","运用"],["employ-use-method"],"The study employed a simple questionnaire to collect answers.","该研究使用了一份简单的问卷来收集答案。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/employ"],
      ["in-someones-pay","受雇；受聘状态","n.",["受雇","任职","雇用关系"],["employ-state"],"The gardener has been in the family's employ for twenty years.","这名园丁受雇于这家人已有二十年。","in sb's employ","https://api.dictionaryapi.dev/api/v2/entries/en/employ"]
    ],
    [
      {"terms":["使从事于"],"decision":"scope-excluded","reason":"旧译“使从事于”来自 employ oneself in（忙于做某事）的反身用法，现代常用语中少用，本批只保留雇用、使用与受雇义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/employ"}
    ]);
    entry("hire", [
      ["rent-something","租用；租借","v.",["租用","租借","租"],["hire-rent-item"],"We hired a small boat for the afternoon and rowed to the island.","我们租了一条小船划到岛上，用了一下午。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hire"],
      ["give-someone-work","雇用；雇请","v.",["雇用","雇请","聘用"],["hire-employ"],"The bakery hired two students for the summer season.","这家面包店为夏季雇了两名学生。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hire"],
      ["rental-payment","租金；租借费","n.",["租金","租费","租借费用"],["hire-payment"],"Bicycle hire costs eight pounds a day at the station.","在车站租自行车每天八英镑。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hire"],
      ["let-out","出租；出借","v.",["出租","出借","对外租出"],["hire-out"],"They hire out their basement for parties at weekends.","他们周末把地下室出租给人办聚会。","hire sth out","https://api.dictionaryapi.dev/api/v2/entries/en/hire"]
    ],
    [
      {"terms":["受雇"],"decision":"scope-excluded","reason":"旧译“受雇”对应 hire oneself out as 这类被雇一方用法，属词组搭配而非单词独立义项，现代英语通常说 be hired 或 hire out as，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/hire"}
    ]);
    entry("labour", [
      ["hard-work","劳动；努力；工作","n.",["劳动","努力","工作","劳作"],["labour-work"],"Farming here still depends on manual labour at harvest time.","这里务农在收获季节仍依靠体力劳动。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/labour"],
      ["workers","劳工；工人总称","n.",["劳工","工人","劳动力"],["labour-workforce"],"The union says cheap labour abroad is costing local jobs.","工会表示，国外的廉价劳工正在使本地就业岗位流失。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/labour"],
      ["childbirth","分娩；临产","n.",["分娩","临产","生产"],["labour-childbirth"],"She was in labour for eleven hours before the twins arrived.","她分娩了十一个小时才生下双胞胎。","be in labour","https://api.dictionaryapi.dev/api/v2/entries/en/labour"],
      ["toil-verb","苦干；辛勤劳作","v.",["苦干","辛勤工作","劳作"],["labour-toil-verb"],"They laboured all summer to repair the stone wall.","他们整个夏天都在辛苦修补那道石墙。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/labour"]
    ],
    [
      {"terms":["详细分析"],"decision":"scope-excluded","reason":"旧译“详细分析”对应 labour the point（反复强调某一点）这一固定词组，属搭配义而非单词独立义项，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/labour"},
      {"terms":["使厌烦"],"decision":"scope-excluded","reason":"旧译“使厌烦”来自 belabour（反复敲打、纠缠）的引申义，labour 条目本身未列此义，故不收录。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/labour"}
    ]);
    entry("job", [
      ["paid-position","工作；职业；职位","n.",["职业","工作","职位","岗位"],["job-employment"],"She found a job in a bookshop two weeks after graduating.","毕业两周后，她在一家书店找到了工作。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/job"],
      ["task","任务；活儿；事情","n.",["零活","事情","作业","活儿"],["job-task"],"Painting the whole fence is a job for two people.","把整道栅栏刷完是两个人干的活。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/job"],
      ["odd-jobs","做零工；打零工","v.",["做零工","打杂","打零工"],["job-casual-work"],"Students jobbed at the fair for cash during the holidays.","学生们假期在集市上打零工挣现金。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/job"]
    ],
    [
      {"terms":["做股票经纪","代客买卖","批发"],"decision":"scope-excluded","reason":"旧译来自 jobber（批发商、证券经纪商）的行业用法，job 一词在现代英语中不再单独表示这些意思，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/job"},
      {"terms":["假公济私","欺骗"],"decision":"scope-excluded","reason":"旧译来自 job 指“借公职谋私的不正当交易”的古旧用法，条目虽列 corrupt official business，但现代已基本不用，故不收录。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/job"},
      {"terms":["承包"],"decision":"scope-excluded","reason":"旧译“承包”对应 job out（把工程分包出去）的词组用法，不属于 job 单词本身的常用义项，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/job"}
    ]);
    entry("career", [
      ["working-life","职业生涯；事业","n.",["生涯","职业","事业","专业"],["career-path"],"He spent his whole career in the same small engineering firm.","他的整个职业生涯都在同一家小型工程公司度过。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/career"],
      ["rush-uncontrolled","疾驰；失控猛冲","v.",["疾驰","猛冲","飞驰"],["career-move-fast"],"The truck careered off the wet road and hit a fence.","卡车在湿滑路面上失控冲出行车道，撞上了栅栏。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/career"]
    ],
    [
      {"terms":["成功"],"decision":"scope-excluded","reason":"旧译“成功”并非 career 的词典义项，可能来自 career success 之类短语的合并翻译，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/career"},
      {"terms":["履历"],"decision":"scope-excluded","reason":"旧译“履历”在英语中通常说 CV 或 résumé，career 表示职业或生涯，不表示履历，故不收录。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/career"}
    ]);
    entry("profession", [
      ["skilled-occupation","职业；专业","n.",["职业","工种","专业","行业"],["profession-occupation"],"Nursing is a profession that demands patience and steady nerves.","护理是一门需要耐心和沉稳的职业。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/profession"],
      ["declaration","声明；表白","n.",["表白","声明","公开表示"],["profession-declaration"],"Her professions of loyalty convinced nobody at the meeting.","她在会上表达的忠诚没有一个人相信。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/profession"]
    ]);
    entry("interview", [
      ["job-meeting","面试；面谈","n.",["面试","面谈","求职面谈"],["interview-job"],"His interview for the trainee post lasted almost two hours.","他为这个实习生岗位参加的面试持续了将近两个小时。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/interview"],
      ["media-meeting","采访；访问","n.",["访问","接见","采访"],["interview-media"],"The singer gave a short interview to a local radio station.","这位歌手接受了当地一家广播电台的简短采访。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/interview"],
      ["ask-questions","对…进行面谈；询问","v.",["对...进行面谈(试)","询问","约谈"],["interview-question"],"Police interviewed the neighbours but learned very little.","警方询问了邻居，但几乎没得到什么线索。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/interview"]
    ]);
    entry("retire", [
      ["stop-working","退休；退役","v.",["退休","退役","退职"],["retire-from-work"],"My father retired at sixty after thirty-five years at the bank.","我父亲在银行工作三十五年后于六十岁退休。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/retire"],
      ["withdraw-quietly","退居；隐退","v.",["隐居","引退","退居"],["retire-withdraw"],"After the speech the guests retired to the garden for tea.","致辞结束后，客人们退到花园里喝茶。","retire to sth","https://api.dictionaryapi.dev/api/v2/entries/en/retire"],
      ["move-back-troops","撤退；后退","v.",["撤退","退却","使...撤退","退去"],["retire-troops"],"The regiment retired across the river before dawn.","该团在黎明前渡过河撤退。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/retire"]
    ],
    [
      {"terms":["辞退"],"decision":"scope-excluded","reason":"旧译“辞退”指雇主主动解雇，对应 dismiss 或 lay off；retire 表示使某人退职或退役，方向不同，故不并入本批义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/retire"}
    ]);
    entry("clerk", [
      ["office-worker","办事员；职员；文书","n.",["办事员","职员","文书"],["clerk-office"],"The clerk checked the files and found the missing invoice.","办事员查看了档案，找到了那张丢失的发票。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/clerk"],
      ["shop-assistant","店员；售货员","n.",["店员","售货员","柜台人员"],["clerk-shop"],"A clerk at the counter wrapped the plates in newspaper.","柜台的一名店员用报纸把盘子包了起来。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/clerk"],
      ["work-as-clerk","当店员；做文书工作","v.",["当店员","做文书","从事文书工作"],["clerk-work-verb"],"He clerked in his uncle's grocery store during the holidays.","假期里他在叔叔的杂货店当店员。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/clerk"]
    ]);
    entry("attendance", [
      ["being-present","出席；到场","n.",["出席","到场","参加"],["attendance-presence"],"Attendance at the safety briefing is compulsory for all new staff.","所有新员工都必须出席安全说明会。","attendance at sth","https://api.dictionaryapi.dev/api/v2/entries/en/attendance"],
      ["number-present","出席人数；到场人数","n.",["出席的人数","到场人数","上座人数"],["attendance-count"],"Attendance at the final match topped forty thousand.","决赛的到场人数超过了四万。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/attendance"]
    ],
    [
      {"terms":["照料","管理","资助"],"decision":"scope-excluded","reason":"旧译来自 attendance 在 in attendance on sb（侍奉、照料某人）和 medical attendance（医疗照护）中的旧用法；本次核对条目只列出席与出席人数义，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/attendance"}
    ]);
    entry("population", [
      ["people-count","人口；人口数量","n.",["人口","人口数","居民人数"],["population-people"],"The population of the town doubled after the new railway opened.","新铁路开通后，这个镇的人口翻了一番。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/population"],
      ["group-studied","群体；总体；种群","n.",["群体","总体","种群"],["population-group"],"Researchers studied a population of wild bees across five valleys.","研究人员在五条山谷中研究了一个野生蜂群。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/population"]
    ]);
    entry("community", [
      ["local-community","社区；共同体","n.",["社区","共同体","社群"],["community-local-group"],"The new library became a meeting place for the whole community.","新图书馆成了整个社区的聚会场所。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/community"],
      ["shared-group","（有共同特征的）群体；社会","n.",["公众","社会","群体"],["community-shared-group"],"The scientific community welcomed the results with caution.","科学界对这些结果持谨慎的欢迎态度。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/community"]
    ],
    [
      {"terms":["共有"],"decision":"scope-excluded","reason":"旧译“共有”来自 community of goods（财产共有）这类旧用法，现代常用语中几乎不用，本批只保留社区与群体义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/community"}
    ]);
    entry("public", [
      ["people-in-general","公众；民众","n.",["公众","民众","大众"],["public-people"],"The public was shocked by the cost of the new stadium.","公众对这座新体育场的高昂造价感到震惊。",null,"https://www.vocabulary.com/dictionary/public"],
      ["open-to-all","公共的；公立的；公用的","adj.",["公众的","公共的","公立的","公用的"],["public-open-to-all"],"Public transport in the city runs until midnight on Fridays.","这座城市的公共交通在周五运行到午夜。",null,"https://www.vocabulary.com/dictionary/public"]
    ]);
    entry("civil", [
      ["citizen-related","公民的；市民的；民用的","adj.",["市民的","公民的","国民的","民用的"],["civil-citizen"],"The new law grants civil rights to all residents of the district.","新法律赋予该区所有居民公民权利。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/civil"],
      ["polite","有礼貌的；客气的","adj.",["有礼貌的","客气的","文明的"],["civil-polite","polite-courteous"],"The two neighbours were civil to each other at the meeting.","两位邻居在会上彼此客客气气。","be civil to sb","https://api.dictionaryapi.dev/api/v2/entries/en/civil"],
      ["non-criminal","民事的（非刑事）","adj.",["民事的","民事诉讼的"],["civil-legal"],"The dispute ended in a civil case rather than a criminal one.","这场纠纷最终以民事案件而非刑事案件了结。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/civil"]
    ]);
    entry("national", [
      ["of-a-country","国家的；全国性的","adj.",["国家的","国立的","全国性的"],["national-country"],"The national average hides huge differences between regions.","全国平均水平掩盖了各地区之间的巨大差异。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/national"],
      ["ethnic","民族的；本国的","adj.",["民族的","本国的"],["national-identity"],"Folk songs form part of the national identity of the region.","民歌是该地区民族认同的一部分。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/national"],
      ["citizen","国民；公民","n.",["国民","国民的","公民","国人"],["national-citizen"],"Two foreign nationals were detained at the border on Friday.","两名外国公民周五在边境被拘留。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/national"]
    ]);
    entry("global", [
      ["worldwide","全球的；全世界的","adj.",["全球的","全世界的","世界范围的"],["global-worldwide"],"Global demand for lithium has tripled in five years.","五年间全球对锂的需求增长了两倍。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/global"],
      ["overall","总体的；全面的","adj.",["综合的","总体的","全面的","普遍的","通用的"],["global-overall"],"The report offers a global view of the company's spending.","这份报告全面呈现了公司的支出情况。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/global"],
      ["ball-shaped","球形的；球状的","adj.",["球形的","球状的"],["global-spherical"],"The sculpture is a global mass of polished steel and glass.","这座雕塑是一个由抛光钢和玻璃构成的球形体。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/global"]
    ],
    [
      {"terms":["共用"],"decision":"scope-excluded","reason":"旧译“共用”疑为 common 一类词的混入，global 条目只列全球、总体与球形义，没有“共用”义，故不收录。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/global"}
    ]);
    entry("foreign", [
      ["from-another-country","外国的；外来的","adj.",["外国的","外来的","境外的"],["foreign-country"],"Foreign students now make up a fifth of the intake.","外国学生现在占招生人数的五分之一。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/foreign"],
      ["diplomatic","外交的；涉外的","adj.",["外交的","涉外的"],["foreign-policy"],"The minister outlined the country's foreign policy in a short speech.","部长在简短讲话中概述了该国的外交政策。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/foreign"],
      ["unfamiliar","陌生的；与…格格不入的","adj.",["不相关的","陌生的","格格不入的"],["foreign-unfamiliar"],"The idea of waiting in line was foreign to him.","排队等候这种事对他来说很陌生。","foreign to sth","https://api.dictionaryapi.dev/api/v2/entries/en/foreign"]
    ],
    [
      {"terms":["外省的"],"decision":"scope-excluded","reason":"旧译“外省的”对应 foreign 在美式英语中指外州（out-of-state）的区域用法，汉语中“省”的行政区划不对应，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/foreign"}
    ]);
    entry("abroad", [
      ["in-another-country","在国外；到国外","adv.",["往国外","往国外的","在国外"],["abroad-foreign-country"],"She worked abroad for three years before returning to teach.","她在国外工作了三年才回国教书。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/abroad"],
      ["spreading-around","到处；广泛流传","adv.",["到处","广泛四散的","四处传开"],["abroad-widely"],"Rumours of the closure were soon abroad in the village.","关闭的传言很快在村里传开。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/abroad"]
    ],
    [
      {"terms":["到室外","在室外的"],"decision":"scope-excluded","reason":"旧译来自 abroad 指在户外、不在屋内的古旧用法，现代英语基本改用 outdoors，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/abroad"}
    ]);
    entry("state", [
      ["condition","状态；情形；状况","n.",["状态","情形","状况"],["state-condition"],"The house was in a poor state after years of neglect.","多年无人照管后，这所房子状况很差。","in a ... state","https://api.dictionaryapi.dev/api/v2/entries/en/state"],
      ["country","国家；政府；州","n.",["国家","政府","州","州的"],["state-polity"],"The state funds most of the school's running costs.","学校的大部分运营费用由国家出资。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/state"],
      ["say-formally","说明；陈述；规定","v.",["说明","陈述","规定"],["state-declare"],"The form asks you to state your reasons in fifty words.","表格要求你用五十个词说明理由。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/state"],
      ["formal-official","国家的；正式的；礼仪用的","adj.",["国家的","正式的","礼仪用的"],["state-formal"],"The state visit included a banquet at the old palace.","这次国事访问包括在旧王宫举行的一场宴会。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/state"]
    ],
    [
      {"terms":["领土","国务","社会地位"],"decision":"scope-excluded","reason":"旧译这三项分别对应 state 表示领土、国事与社会地位的书面用法，本次核对条目只在国家义下列出社会地位等引申，未单列常用义，故并入追溯不设学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/state"}
    ]);
    entry("worldwide", [
      ["all-over-world","全世界的；全球范围的","adj.",["全世界的","全球范围的","遍及全球的"],["worldwide-global"],"The brand runs a worldwide network of repair centres.","这个品牌拥有一个全球范围的维修中心网络。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/worldwide"],
      ["throughout-world","在世界各地；遍及全球","adv.",["在世界各地","遍及全球","全球地"],["worldwide-everywhere"],"The album sold two million copies worldwide within a year.","这张专辑一年内在世界各地卖了两百万张。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/worldwide"]
    ]);
    entry("office", [
      ["workplace-room","办公室；办事处","n.",["办公室","办事处","事务所"],["office-workplace"],"Her office is on the fourth floor, next to the archive.","她的办公室在四楼，紧挨着档案室。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/office"],
      ["public-position","公职；职务；职责","n.",["公职","职责","职务"],["office-public-post"],"He held office as mayor for two terms and then retired.","他担任了两届市长，随后退休。","hold office","https://api.dictionaryapi.dev/api/v2/entries/en/office"],
      ["government-body","（政府的）部；局；处","n.",["部","局","处"],["office-government-body"],"The foreign office issued a fresh travel warning on Monday.","外交部周一发布了新的旅行警告。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/office"]
    ]);
    entry("department", [
      ["organization-division","部门；科；处","n.",["部门","科","处","部"],["department-division"],"Please send the invoice to the accounts department this week.","本周请把发票寄给财务部门。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/department"],
      ["university-faculty","（大学的）系","n.",["系","院系"],["department-faculty"],"She joined the department of history as a lecturer last year.","她去年作为讲师加入了历史系。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/department"],
      ["government-ministry","（政府的）部；机关","n.",["机关","部委","政府部门"],["department-ministry"],"The department of health published new guidelines on sugar.","卫生部发布了关于糖的新指南。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/department"]
    ]);
    entry("officer", [
      ["military-officer","军官；警官","n.",["军官","警官"],["officer-military"],"The officer ordered his men to hold the bridge.","这名军官命令部下守住桥。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/officer"],
      ["official-person","官员；公务员；主管","n.",["官员","公务员","主管"],["officer-official"],"A senior officer of the bank approved the loan.","银行的一位高级主管批准了这笔贷款。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/officer"],
      ["command-verb","指挥；统率","v.",["指挥","统率","率领"],["officer-command"],"He officered the company during the summer exercise.","夏季演习期间他指挥这个连队。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/officer"]
    ]);
    entry("police", [
      ["law-force","警察；警方","n.",["警察","警察当局","警方"],["police-force"],"The police closed the road for three hours after the accident.","事故发生后，警方封闭道路三个小时。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/police"],
      ["keep-order","维持治安；管辖；监督","v.",["维持治安","治安","管辖","监督"],["police-keep-order"],"Extra guards policed the crowd outside the stadium.","额外的警卫在体育场外维持人群秩序。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/police"]
    ]);
    entry("headquarters", [
      ["main-office","总部；总公司；本部","n.",["总部","本部","总署","总公司"],["headquarters-main-office"],"The company moved its headquarters to a smaller city.","公司把总部搬到了一座较小的城市。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/headquarters"],
      ["military-command","司令部；指挥部","n.",["司令部","指挥部","总部人员"],["headquarters-military"],"The general returned to headquarters to plan the next move.","将军回到司令部筹划下一步行动。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/headquarters"]
    ]);
    entry("meeting", [
      ["assembly","会议；集会；会谈","n.",["会议","集会","会谈","开会"],["meeting-assembly"],"The board meeting was moved to Thursday afternoon.","董事会会议改到了周四下午。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/meeting"],
      ["encounter","会面；相遇","n.",["会面","相遇","碰面"],["meeting-encounter"],"Their first meeting was in a crowded bookshop in Paris.","他们第一次见面是在巴黎一家拥挤的书店里。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/meeting"]
    ]);
    entry("process", [
      ["course-of-events","过程；进程","n.",["过程","进程","流程","进行"],["process-course"],"Learning a language is a slow process that rewards patience.","学一门语言是个缓慢的过程，需要耐心。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/process"],
      ["procedure","程序；步骤","n.",["程序","步骤","手续"],["process-procedure"],"The application process takes about six weeks.","申请程序大约需要六周。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/process"],
      ["treat-verb","加工；处理","v.",["加工","使...接受处理","对...处置","处理"],["process-treat"],"The factory processes raw cocoa beans into powder.","这家工厂把生可可豆加工成粉末。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/process"]
    ],
    [
      {"terms":["对...起诉"],"decision":"scope-excluded","reason":"旧译来自 process 作动词的“对…提起诉讼”义，条目虽列 take legal proceedings against，但现代英语多用 sue 或 prosecute，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/process"},
      {"terms":["经加工的"],"decision":"scope-excluded","reason":"旧译“经加工的”是 processed 的分词形容词义，本批按名词与动词收录 process，不单列形容词义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/process"},
      {"terms":["有特殊光效的"],"decision":"scope-excluded","reason":"旧译来自摄影术语 process（特殊冲洗或合成效果），属专业领域用法，本次核对条目未列，本批不收录。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/process"}
    ]);
    entry("announce", [
      ["make-known","宣布；公布；预告","v.",["宣布","公布","预告"],["announce-make-known"],"The government announced a new tax on empty homes.","政府宣布对空置房屋征收新税。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/announce"],
      ["pronounce-judgment","宣告；宣判","v.",["宣告","宣判","宣读"],["announce-judgment"],"The judge announced the sentence after a short pause.","法官稍作停顿后宣布了判决。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/announce"]
    ],
    [
      {"terms":["声称","显示"],"decision":"scope-excluded","reason":"旧译“声称/显示”来自 announce 在旧词典中表示宣称、表明的引申，本次核对条目只列公开宣布与宣判义，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/announce"},
      {"terms":["当报幕员","宣布参加竞选"],"decision":"scope-excluded","reason":"旧译分别对应 announcer（报幕员）与 announce for（宣布参选）这类派生词和固定词组，不属于 announce 单词的独立义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/announce"}
    ]);
    entry("declaration", [
      ["formal-statement","宣告；宣布；声明","n.",["宣告","宣布","声明","说明"],["declaration-formal-statement"],"The two sides signed a joint declaration on climate targets.","双方签署了关于气候目标的联合声明。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/declaration"],
      ["customs-list","申报；申报单","n.",["申报","申报单","报关单"],["declaration-customs"],"Fill in the customs declaration before you reach the desk.","到达柜台前请填写海关申报单。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/declaration"]
    ]);
    entry("statement", [
      ["spoken-or-written","声明；陈述；表态","n.",["陈述","声明","表态"],["statement-declaration"],"The company issued a short statement denying the report.","公司发表简短声明否认了该报道。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/statement"],
      ["financial-record","财务报表；结算单","n.",["报表","结算单","账单"],["statement-financial"],"The bank statement showed three unexplained withdrawals.","银行对账单上有三笔无法解释的取款。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/statement"],
      ["program-instruction","（计算机）语句；指令","n.",["语句","程序语句","指令"],["statement-code"],"Remove the line that contains the faulty print statement.","删除包含有问题的打印语句的那一行。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/statement"]
    ]);
    entry("crime", [
      ["crime-illegal-act","犯罪；罪行","n.",["犯罪","罪行","罪"],["illegal-act"],"The police recorded a sharp rise in vehicle crime across the city last year.","警方记录到去年全市机动车犯罪大幅上升。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/crime"],
      ["crime-moral-wrongdoing","罪恶；罪孽","n.",["罪恶","罪孽"],["moral-wrongdoing"],"She believed that betraying a close friend was a crime against trust itself.","她认为背叛好友是对信任本身的罪恶。",null,"https://www.vocabulary.com/dictionary/crime"]
    ]);
    entry("steal", [
      ["steal-take-illegally","偷窃；窃取","v.",["偷窃","窃取","偷"],["take-illegally"],"Someone stole my bicycle from the rack outside the library yesterday afternoon.","昨天下午有人从图书馆外的车架上偷走了我的自行车。","steal sth from sb/sth","https://api.dictionaryapi.dev/api/v2/entries/en/steal"],
      ["steal-plagiarize","剽窃（想法、作品）","v.",["剽窃","抄袭"],["plagiarize-work"],"The young director was accused of stealing the plot of a famous novel.","这位年轻导演被指剽窃一部著名小说的情节。","steal sth from sb","https://api.dictionaryapi.dev/api/v2/entries/en/steal"],
      ["steal-move-secretly","偷偷地做；悄悄行动","v.",["偷偷地做","偷偷地行动","悄悄移动"],["move-surreptitiously"],"She stole quietly out of the room before the meeting ended.","她在会议结束前悄悄溜出了房间。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steal"],
      ["steal-bargain","便宜货；超值的东西","n.",["便宜货","超值之物"],["bargain-deal"],"For a coat in such good condition, thirty pounds was a real steal.","对一件状况这么好的外套来说，三十英镑真是捡了便宜。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steal"]
    ],
    [
      {"terms":["偷垒"],"decision":"restricted-verified","reason":"旧译“偷垒”是棒球术语（stolen base）的动词说法，仅在棒球比赛语境成立，本批不单列常用义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/steal"},
      {"terms":["断球"],"decision":"restricted-verified","reason":"旧译“断球”指篮球等比赛中抢断对方球（steal the ball），属球类运动专业术语，本批不列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/steal"}
    ]);
    entry("thief", [
      ["thief-person-who-steals","小偷；窃贼","n.",["小偷","贼","窃贼"],["person-who-steals"],"A thief slipped into the shop and took three watches from the display.","一名窃贼溜进商店，从展柜里拿走了三块手表。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/thief"]
    ],
    [
      {"terms":["取样"],"decision":"scope-excluded","reason":"旧译“取样”与 thief 的常用义无关，可能来自 wine thief（取酒样管）这一专业器具名称，超出本批常用义范围。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/thief"}
    ]);
    entry("obey", [
      ["obey-comply","服从；遵从；顺从","v.",["服从","遵从","顺从"],["comply-with-order"],"The soldiers obeyed the order to retreat without asking a single question.","士兵们服从撤退命令，没有问任何问题。","obey sb/sth","https://api.dictionaryapi.dev/api/v2/entries/en/obey"]
    ]);
    entry("own", [
      ["own-belonging-to-self","自己的；本人的","det.",["自己的","本人的"],["belonging-to-self"],"After years of sharing a flat, she finally has her own studio.","合租多年后，她终于有了自己的工作室。",null,"https://www.vocabulary.com/dictionary/own"],
      ["own-possess","拥有；占有","v.",["拥有","占有"],["have-possession"],"My grandparents own a small farmhouse near the river outside town.","我的祖父母在城外河边拥有一座小农舍。","own sth","https://www.vocabulary.com/dictionary/own"],
      ["own-admit","承认；坦白","v.",["承认","坦白"],["admit-truth"],"He finally owned up to breaking the window during the storm.","他终于承认在暴风雨中打破了窗户。","own up to sth","https://www.vocabulary.com/dictionary/own"]
    ],
    [
      {"terms":["自己人"],"decision":"scope-excluded","reason":"旧译“自己人”是对 one of our own 这类短语的意译，own 本身并不表示“自己人”，故不单列学习义项。","source":"https://www.vocabulary.com/dictionary/own"}
    ]);
    entry("owner", [
      ["owner-possessor","所有者；物主","n.",["拥有者","物主","所有人","所有者"],["possessor"],"The owner of the missing dog offered a generous reward for its safe return.","那只失踪狗的主人悬赏重金，盼它平安归来。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/owner"],
      ["owner-business-proprietor","业主；企业主","n.",["业主","企业主","店主"],["business-proprietor"],"The owner of the restaurant greets regular customers by name.","这家餐馆的业主会叫出常客的名字。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/owner"]
    ]);
    entry("demand", [
      ["demand-forceful-request","要求；强烈要求","n.",["要求","强烈要求"],["forceful-request"],"The workers' demands for safer conditions were finally accepted by the management.","工人们关于改善安全条件的要求最终被管理层接受。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/demand"],
      ["demand-market-need","需求；需求量","n.",["需求","需求量","市场需求"],["market-demand"],"Falling demand for printed newspapers has forced several titles to close.","印刷报纸需求的下降迫使几家报刊停刊。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/demand"],
      ["demand-insist","（坚决）要求；索取","v.",["坚决要求","索取","索要"],["insist-claim"],"The customer demanded a full refund after the machine broke down twice.","机器两次出现故障后，这位顾客坚决要求全额退款。","demand sth / demand that…","https://api.dictionaryapi.dev/api/v2/entries/en/demand"],
      ["demand-require","需要；必需","v.",["需要","急需","必需"],["require-need"],"Training for the marathon demands discipline and several months of steady work.","马拉松训练需要自律和好几个月的持续努力。","demand sth","https://api.dictionaryapi.dev/api/v2/entries/en/demand"]
    ],
    [
      {"terms":["查询"],"decision":"scope-excluded","reason":"旧译“查询”并非 demand 的常用义，可能与 inquiry、query 一类词混淆；现代词典未列此义，故只作追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/demand"}
    ]);
    entry("false", [
      ["false-not-true","错误的；不正确的","adj.",["错误的","不正确的"],["not-true"],"The report was based on false information and had to be withdrawn.","那份报告基于错误信息，只能被撤回。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/false"],
      ["false-artificial","假的；伪造的","adj.",["假的","伪造的","人造的"],["fake-artificial"],"He was stopped at the border with a false passport in his bag.","他在边境被拦下，包里有一本伪造的护照。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/false"],
      ["false-dishonest","虚伪的；不忠实的","adj.",["虚伪的","不忠实的","不老实的"],["deceitful-unloyal"],"A false friend disappears as soon as you really need help.","虚伪的朋友会在你真正需要帮助时消失。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/false"]
    ],
    [
      {"terms":["不准确地","欺诈地"],"decision":"scope-excluded","reason":"旧译“不准确地、欺诈地”对应现代常用的副词 falsely；false 作副词仅见于 play sb false 等古旧或固定说法，故不单列义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/false"}
    ]);
    entry("reasonable", [
      ["reasonable-sensible","合理的；有道理的","adj.",["合理的","有道理的","正当的"],["fair-sensible","reasonable-justified"],"Her explanation sounded reasonable, so the committee agreed to reconsider the plan.","她的解释听起来有道理，于是委员会同意重新考虑该计划。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/reasonable"],
      ["reasonable-person","通情达理的；明理的","adj.",["通情达理的","明理的"],["sensible-person"],"A reasonable employer will listen to your concerns before making a decision.","通情达理的雇主会在做决定前听取你的顾虑。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/reasonable"],
      ["reasonable-price","公道的；价格合理的","adj.",["公道的","价格合理的","不贵的"],["fair-price"],"The rent for a flat this central is surprisingly reasonable.","这么市中心的一套公寓，租金居然相当公道。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/reasonable"],
      ["reasonable-moderate","适度的；尚可的","adj.",["适当的","适度的","尚可的"],["moderate-acceptable"],"The hotel room was small but of a reasonable size for one person.","这间酒店客房不大，但对一个人来说大小还算合适。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/reasonable"]
    ]);
    entry("suitable", [
      ["suitable-appropriate","合适的；适宜的","adj.",["合适的","适宜的","适当的"],["appropriate-for-purpose","suitable-for-purpose"],"This film is not suitable for children under twelve years old.","这部电影不适合十二岁以下的儿童观看。","suitable for sb/sth；suitable to do sth","https://api.dictionaryapi.dev/api/v2/entries/en/suitable"],
      ["suitable-well-matched","相配的；般配的","adj.",["相配的","般配的"],["well-matched"],"Her family thought the young doctor was a suitable match for her.","她的家人认为那位年轻医生与她很般配。","a suitable match for sb","https://api.dictionaryapi.dev/api/v2/entries/en/suitable"]
    ]);
    entry("battle", [
      ["military-engagement","战役；战斗；交战","n.",["战役","战斗","交战","会战"],["military-engagement"],"The battle for the hill lasted three days before the defenders finally withdrew.","争夺这座山头的战斗持续了三天，守军最终撤退。","the battle for sth","https://www.vocabulary.com/dictionary/battle"],
      ["struggle-ordeal","斗争；较量；艰苦的努力","n.",["斗争","较量","争斗","奋力争取"],["struggle-conflict"],"She fought a long battle against the council's plan to close the village library.","她为反对议会关闭乡村图书馆的计划进行了长期的斗争。","a battle against/over sth","https://www.vocabulary.com/dictionary/battle"],
      ["fight-struggle","与…斗争；奋力搏斗","v.",["搏斗","斗争","奋战","艰难前行"],["fight-struggle"],"Rescue teams battled through deep snow to reach the stranded climbers.","救援队冒着深雪艰难前行，去营救被困的登山者。","battle through/against sth","https://www.vocabulary.com/dictionary/battle"]
    ]);
    entry("attack", [
      ["military-offensive","攻击；进攻；袭击","n.",["攻击","进攻","袭击","突击"],["military-offensive"],"The attack began at dawn, when enemy soldiers crossed the frozen river.","进攻在黎明时分开始，当时敌军士兵正越过结冰的河流。",null,"https://www.vocabulary.com/dictionary/attack"],
      ["verbal-criticism","抨击；指责；（言辞上的）攻击","n.",["抨击","指责","批评","非难"],["verbal-criticism"],"The minister's speech was a fierce attack on the proposed tax cuts.","这位部长的演讲对拟议的减税方案进行了猛烈抨击。","an attack on sb/sth","https://www.vocabulary.com/dictionary/attack"],
      ["tackle-task","动手干；全力对付（任务或问题）","v.",["动手干","着手处理","全力对付","干劲十足地做"],["tackle-task-vigorously"],"After breakfast he attacked the pile of marking with unexpected energy.","早饭后，他出人意料地干劲十足，开始处理那堆待批改的作业。","attack a task/problem","https://www.vocabulary.com/dictionary/attack"]
    ]);
    entry("oppose", [
      ["be-against","反对；不赞成","v.",["反对","不赞成","抵制","持反对意见"],["be-against"],"Local residents strongly oppose the plan to build a new road through the meadow.","当地居民强烈反对修建一条穿过草甸的新公路的计划。","oppose sth/doing sth","https://www.vocabulary.com/dictionary/oppose"],
      ["resist-fight","抗争；抵抗；以…对抗","v.",["抗争","抵抗","对抗","以...对抗","反抗"],["resist-fight-against"],"The small union opposed the company's demands with a month-long strike.","这个小工会以长达一个月的罢工来对抗公司的要求。","oppose sth with sth","https://www.vocabulary.com/dictionary/oppose"]
    ]);
    entry("enemy", [
      ["hostile-person","敌人；仇敌；对头","n.",["敌人","仇敌","对头","宿敌"],["hostile-person"],"He never forgave his former partner and still treats him as a personal enemy.","他从未原谅从前的合伙人，至今仍把他当作私人的仇敌。",null,"https://www.vocabulary.com/dictionary/enemy"],
      ["opposing-force","敌军；敌国；敌方部队","n.",["敌军","敌国","敌方","敌方部队"],["opposing-military-force"],"The enemy advanced through the valley under cover of thick morning fog.","敌军借着清晨的浓雾掩护，穿过山谷向前推进。","the enemy（集合名词，常带定冠词）","https://www.vocabulary.com/dictionary/enemy"],
      ["of-enemy","敌人的；敌方的","adj.",["敌人的","敌方的","敌军的"],["of-enemy"],"Enemy aircraft were reported circling the harbour shortly before midnight.","据报道，敌方飞机在午夜前不久一直在港口上空盘旋。","attributive only（只作定语）","https://www.vocabulary.com/dictionary/enemy"]
    ]);
    entry("rival", [
      ["competitor","竞争对手；对手；竞争者","n.",["竞争对手","对手","竞争者","竞争方"],["competitor"],"The two companies have been rivals for a decade in the smartphone market.","这两家公司在智能手机市场上已经做了十年的竞争对手。",null,"https://www.vocabulary.com/dictionary/rival"],
      ["formidable-equal","劲敌；可与之匹敌的人（或物）","n.",["劲敌","匹敌者","可匹敌的事物","强敌"],["formidable-equal"],"In the final she faced her toughest rival, a player ranked above her.","决赛中她遇上了最难对付的劲敌——一位排名高于她的选手。",null,"https://www.vocabulary.com/dictionary/rival"],
      ["compete-match","与…竞争；匹敌；比得上","v.",["与…竞争","匹敌","比得上","抗衡","相比"],["compete-match"],"No local restaurant can rival the view from the terrace of the old hotel.","当地没有哪家餐馆能比得上那家老旅馆露台上的景色。","rival sth in sth","https://www.vocabulary.com/dictionary/rival"],
      ["competing-attributive","竞争的；对手的","adj.",["竞争的","对手的","相互竞争的"],["competing-attributive"],"Rival fans clashed outside the stadium before the cup final kicked off.","杯赛决赛开球前，对立的球迷在体育场外发生了冲突。","attributive only（只作定语）","https://www.vocabulary.com/dictionary/rival"]
    ]);
    entry("warn", [
      ["notify-danger","警告；提醒；发出警告","v.",["警告","提醒","警示","发出警告"],["notify-danger"],"Doctors warn that the new virus could spread quickly during the winter months.","医生警告说，这种新病毒可能在冬季迅速传播。","warn that...","https://www.vocabulary.com/dictionary/warn"],
      ["admonish-counsel","告诫；劝告（某人不要做某事）","v.",["告诫","劝告","叮嘱","提醒某人别做"],["admonish-counsel"],"Her teacher warned her not to leave the experiment unattended overnight.","老师告诫她不要让实验整夜无人看管。","warn sb not to do sth / warn sb against sth","https://www.vocabulary.com/dictionary/warn"],
      ["notify-in-advance","（预先）通知；告知","v.",["通知","预先告知","提前告知"],["notify-in-advance"],"Please warn the kitchen that twenty extra guests will arrive for dinner.","请提前通知厨房，晚餐会多来二十位客人。","warn sb of sth","https://www.vocabulary.com/dictionary/warn"]
    ]);
    entry("promise", [
      ["commit-vow","承诺；答应；保证","v.",["承诺","答应","保证","许诺"],["commit-vow"],"She promised to send the report before Friday, but the file never arrived.","她答应在周五前把报告发过来，但文件始终没有到。","promise to do sth / promise sb sth","https://www.vocabulary.com/dictionary/promise"],
      ["vow-noun","诺言；承诺；约定","n.",["诺言","约定","誓言","允诺"],["vow-noun"],"He broke his promise to take the children camping, and they were deeply disappointed.","他违背了带孩子去露营的诺言，孩子们非常失望。","keep/break a promise","https://www.vocabulary.com/dictionary/promise"],
      ["give-grounds-expectation","预示；有…的可能；有望","v.",["预示","有希望","有望","预示着"],["give-grounds-for-expectation"],"The first warm days of March promised an early spring that year.","那年三月初的几个暖天预示着春天会来得早。",null,"https://www.vocabulary.com/dictionary/promise"],
      ["potential-promise","潜力；前途；（成功的）希望","n.",["潜力","前途","成功的希望","发展前景"],["potential-promise"],"Critics say the young pianist shows real promise but needs better teaching.","评论家说这位年轻钢琴家很有潜力，但需要更好的指导。","show promise","https://www.vocabulary.com/dictionary/promise"]
    ]);
    entry("capture", [
      ["seize-by-force","捕获；俘获；夺取","v.",["捕获","俘获","夺取","擒获","占领"],["seize-by-force"],"Rebels captured the radio station shortly before the president fled the capital.","叛乱者在总统逃离首都前不久夺取了广播电台。",null,"https://www.vocabulary.com/dictionary/capture"],
      ["act-of-capturing","捕获行动；俘获","n.",["捕获行动","俘获行动","捕获","缉捕"],["act-of-capturing"],"The capture of the escaped tiger took wildlife officers nearly two weeks.","野生动物官员花了近两周时间才捕获那只逃跑的老虎。","the capture of sb/sth","https://www.vocabulary.com/dictionary/capture"],
      ["attract-attention","吸引；引起（注意、想象）","v.",["吸引","引起","抓住（注意力）","激发"],["attract-hold-attention"],"The documentary captured the imagination of a generation of young scientists.","这部纪录片激发了一代年轻科学家的想象力。","capture sb's attention/imagination","https://www.vocabulary.com/dictionary/capture"],
      ["record-express","拍摄；记录；（准确）表现","v.",["拍摄","记录","准确表达","生动再现"],["record-image-sound","express-faithfully"],"Her novel captures the boredom and fear of daily life during the siege.","她的小说准确表现了围困期间日常生活中的无聊与恐惧。","capture sth on film/in words","https://www.vocabulary.com/dictionary/capture"]
    ],
    [
      {"terms":["战利品"],"decision":"scope-excluded","reason":"旧译'战利品'指缴获的物品（对应 spoils/prize），所读词条把名词义限定为捕获行动或被捕获者，不指战利品。","source":"https://www.vocabulary.com/dictionary/capture"}
    ]);
    entry("abandon", [
      ["give-up-plan","放弃；抛弃（计划、主张）","v.",["放弃","抛弃","舍弃","中止"],["give-up-plan"],"The council abandoned its plan to pedestrianise the high street after protests.","在抗议之后，议会放弃了把主街改为步行街的计划。","abandon a plan/idea","https://www.vocabulary.com/dictionary/abandon"],
      ["desert-leave-behind","遗弃；离弃；弃置（人、地方、交通工具）","v.",["遗弃","离弃","弃置","丢下不管"],["desert-leave-behind"],"The crew abandoned the sinking ship and swam towards the nearest lifeboat.","船员们弃下沉船，朝最近的救生艇游去。",null,"https://www.vocabulary.com/dictionary/abandon"],
      ["unrestrained-freedom","放纵；放任；无拘束","n.",["放纵","放任","无拘束","尽情"],["unrestrained-freedom"],"The dancers threw themselves into the music with joyful abandon.","舞者们随着音乐尽情起舞，洋溢着欢快。","with abandon","https://www.vocabulary.com/dictionary/abandon"],
      ["yield-to-emotion","沉溺于；使屈从（情感）","v.",["沉溺","使屈从","沉湎于","任由…支配"],["yield-to-emotion"],"He abandoned himself to grief for a week before returning to work.","他沉溺于悲痛中一个星期，之后才回去工作。","abandon oneself to sth","https://www.vocabulary.com/dictionary/abandon"]
    ],
    [
      {"terms":["狂热"],"decision":"scope-excluded","reason":"旧译'狂热'接近 fanaticism 或 zeal，而词条中 abandon 指放纵、无拘束的松弛状态，并非狂热的信念。","source":"https://www.vocabulary.com/dictionary/abandon"}
    ]);
    entry("triumph", [
      ["victory-success","胜利；成功；凯旋","n.",["胜利","成功","凯旋","大捷"],["victory-success"],"The team's triumph in the final was celebrated across the whole city.","全城都在庆祝这支球队在决赛中的胜利。","a triumph over sb/sth","https://www.vocabulary.com/dictionary/triumph"],
      ["exultation","（胜利的）喜悦；欢欣；得意","n.",["欢欣","喜悦","得意","胜利的喜悦"],["exultation-of-victory"],"There was a note of triumph in her voice as she read the letter aloud.","她大声读那封信时，声音里带着一丝得意。",null,"https://www.vocabulary.com/dictionary/triumph"],
      ["prevail-win","战胜；获胜；得胜","v.",["得胜","获胜","战胜","占上风"],["prevail-win"],"Common sense finally triumphed over panic when the fire alarm sounded.","火警响起时，理智最终战胜了恐慌。","triumph over sb/sth","https://www.vocabulary.com/dictionary/triumph"]
    ]);
    entry("weapon", [
      ["instrument-of-combat","武器；兵器","n.",["武器","兵器","凶器","器械"],["instrument-of-combat"],"The museum displays a bronze sword that villagers once used as a weapon.","博物馆展出一把青铜剑，村民曾把它当作武器使用。",null,"https://www.vocabulary.com/dictionary/weapon"],
      ["means-of-persuasion","手段；工具","n.",["手段","工具","有力手段","招数"],["means-of-persuasion"],"In the debate, her calm smile proved a more effective weapon than any statistic.","在辩论中，她镇定的微笑比任何统计数据都更管用。",null,"https://www.vocabulary.com/dictionary/weapon"]
    ],
    [
      {"terms":["武装"],"decision":"scope-excluded","reason":"旧译'武装'指武器与装备的集合（arms），weapon 通常指单件武器，二者范围不同。","source":"https://www.vocabulary.com/dictionary/weapon"}
    ]);
    entry("military", [
      ["armed-forces","军队；军方；武装部队","n.",["军队","军方","武装部队","部队"],["armed-forces"],"The military has promised to send more engineers to the flooded region.","军方已承诺向洪灾地区派遣更多工程兵。","the military","https://www.vocabulary.com/dictionary/military"],
      ["relating-to-armed-forces","军事的；军用的","adj.",["军事的","军用的","军事上的"],["military-affairs"],"The bridge was closed for two days because of military exercises nearby.","由于附近举行军事演习，这座桥关闭了两天。",null,"https://www.vocabulary.com/dictionary/military"],
      ["soldierly-character","军人的；军队的","adj.",["军人的","军队的","士兵的"],["soldierly-character"],"New recruits spend weeks learning military discipline and basic first aid.","新兵要花数周时间学习军队纪律和基础急救。",null,"https://www.vocabulary.com/dictionary/military"]
    ],
    [
      {"terms":["适于战争的"],"decision":"scope-excluded","reason":"旧译'适于战争的'是早期词典对 warlike 的释义，现代 military 已不单列此义。","source":"https://www.vocabulary.com/dictionary/military"}
    ]);
    entry("soldier", [
      ["enlisted-service-member","士兵；军人","n.",["士兵","军人","战士","兵"],["enlisted-soldier"],"The young soldier wrote to his mother every week during his first posting abroad.","这名年轻士兵首次驻外期间每周给母亲写信。",null,"https://www.vocabulary.com/dictionary/soldier"],
      ["serve-as-soldier","当兵；服役","v.",["当兵","从军","服役"],["military-service"],"He soldiered for six years before returning to the family farm.","他当了六年兵，然后回到家里的农场。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/soldier"],
      ["persevere-soldier-on","坚持下去；硬撑","v.",["坚持下去","硬撑","咬牙坚持"],["perseverance"],"Despite the injury, she soldiered on and finished the marathon.","尽管受了伤，她还是咬牙坚持跑完了马拉松。","soldier on","https://api.dictionaryapi.dev/api/v2/entries/en/soldier"]
    ],
    [
      {"terms":["兵蚁"],"decision":"restricted-verified","reason":"兵蚁是昆虫学专业术语，仅指白蚁等社会性昆虫中负责防卫的兵级个体。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/soldier"},
      {"terms":["尽职"],"decision":"scope-excluded","reason":"旧译'尽职'由'服役、尽责'引申而来，现代英语中 soldier 并不表示尽职。","source":"https://www.vocabulary.com/dictionary/soldier"},
      {"terms":["偷懒","磨洋工"],"decision":"scope-excluded","reason":"旧译'偷懒、磨洋工'是 soldier 的罕用口语义，当代通用词典与考试语境均不使用。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/soldier"}
    ]);
    entry("general", [
      ["applying-to-all","总体的；全面的；一般的","adj.",["一般","一般的","普遍的","总体的","全面的","总的"],["all-members-category"],"The report gives a general overview of how coastal towns are adapting to rising seas.","这份报告概述了沿海城镇如何适应海平面上升。",null,"https://www.vocabulary.com/dictionary/general"],
      ["approximate-vague","大致的；笼统的；不具体的","adj.",["大致的","大体的","笼统的","概括的","大体"],["approximate-description"],"Her directions were too general to help us find the hidden path.","她的指引太笼统，帮不了我们找到那条隐蔽的小路。",null,"https://www.vocabulary.com/dictionary/general"],
      ["non-specialist-ordinary","普通的；非专业的；常规的","adj.",["普通的","非专业的","常规","常规的","通常的"],["non-specialist"],"The guide is written for a general reader rather than for specialists.","这本指南是写给普通读者而非专业人士的。",null,"https://www.vocabulary.com/dictionary/general"],
      ["senior-officer","将军；上将","n.",["将军","上将","将领"],["senior-military-rank"],"The general ordered his troops to withdraw before dawn.","将军命令部队在黎明前撤退。",null,"https://www.vocabulary.com/dictionary/general"]
    ]);
    entry("veteran", [
      ["former-service-member","退伍军人；老兵","n.",["退伍军人","老兵","退役老兵"],["former-soldier"],"The veteran rarely spoke about the years he spent guarding the northern border.","这位老兵很少谈起他在北部边境驻守的那些年。",null,"https://www.vocabulary.com/dictionary/veteran"],
      ["experienced-person","老手；资深人士","n.",["老手","资深人士","老资格"],["experienced-person"],"As a veteran of three start-ups, she knew which investors to avoid.","作为三家初创企业的老手，她知道该避开哪些投资人。",null,"https://www.vocabulary.com/dictionary/veteran"],
      ["seasoned","经验丰富的；老练的","adj.",["经验丰富的","老练的","久经沙场的"],["seasoned-experience"],"The clinic relies on a veteran nurse who has handled every kind of emergency.","这家诊所依靠一位经验丰富的护士，她处理过各种紧急情况。",null,"https://www.vocabulary.com/dictionary/veteran"]
    ],
    [
      {"terms":["老树"],"decision":"scope-excluded","reason":"旧译'老树'只在林业术语 veteran tree（古树）中成立，日常词义不指树木。","source":"https://www.vocabulary.com/dictionary/veteran"},
      {"terms":["老兵的"],"decision":"scope-excluded","reason":"旧译'老兵的'是定语直译，现代汉语习惯说'退伍军人的'，词典不单列该义。","source":"https://www.vocabulary.com/dictionary/veteran"}
    ]);
    entry("scout", [
      ["reconnaissance-person","侦察员；侦察兵；哨兵","n.",["侦察员","侦察兵","哨兵","探子","斥候"],["reconnaissance-scout"],"The scout crawled to the ridge and counted the enemy tents below.","侦察兵爬到山脊上，数了数下面的敌军帐篷。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/scout"],
      ["reconnoiter-search","侦察；搜寻；跟踪监视","v.",["侦察","搜索","搜寻","监视","跟踪"],["reconnoiter"],"Two officers scouted the abandoned factory before the rescue team entered.","两名警官在救援队进入前侦察了那座废弃工厂。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/scout"],
      ["talent-spotter","星探；球探；人才物色者","n.",["星探","球探","人才物色者","猎头"],["talent-recruiter"],"A scout from a major club watched the teenager play three times that month.","一家大俱乐部的球探那个月看了这名少年三场比赛。","talent scout","https://www.vocabulary.com/dictionary/scout"]
    ],
    [
      {"terms":["侦察机"],"decision":"scope-excluded","reason":"旧译'侦察机'是 scout plane 的省略说法，scout 单独使用不表示飞机。","source":"https://www.vocabulary.com/dictionary/scout"},
      {"terms":["守候","巡视"],"decision":"scope-excluded","reason":"旧译'守候、巡视'侧重放哨或巡逻，scout 的核心是主动侦察与搜寻。","source":"https://www.vocabulary.com/dictionary/scout"},
      {"terms":["嘲笑","嘲弄"],"decision":"scope-excluded","reason":"旧译'嘲笑、嘲弄'对应古旧动词义 to scoff，现代英语已废弃不用。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/scout"},
      {"terms":["发现"],"decision":"scope-excluded","reason":"旧译'发现'来自 scout 物色人才的引申，单独使用并不表示发现。","source":"https://www.vocabulary.com/dictionary/scout"}
    ]);
    entry("pioneer", [
      ["trailblazing-founder","先驱；先锋；创始人","n.",["先驱","先锋","创始人","开创者"],["trailblazer"],"The engineer is regarded as a pioneer of wireless communication in her country.","这位工程师被视为她所在国家无线通信的先驱。",null,"https://www.vocabulary.com/dictionary/pioneer"],
      ["early-settler","拓荒者；早期定居者","n.",["拓荒者","垦荒者","早期定居者","移民先驱"],["early-settler"],"Pioneers crossed the mountains in covered wagons long before the railway arrived.","早在铁路修通之前，拓荒者就乘着带篷马车翻越了群山。",null,"https://www.vocabulary.com/dictionary/pioneer"],
      ["initiate-open-way","开创；倡导；开辟","v.",["开创","倡导","开辟","提倡","作先驱","开路"],["initiate-innovation"],"The school pioneered a scheme that lets pupils run their own small businesses.","这所学校开创了一项让学生经营自己小生意的计划。",null,"https://www.vocabulary.com/dictionary/pioneer"]
    ],
    [
      {"terms":["最早的","开拓的","先驱的","有开拓者特点的"],"decision":"scope-excluded","reason":"旧译形容词义来自早期词典，现代英语把 pioneer 作定语名词使用，不单列形容词。","source":"https://www.vocabulary.com/dictionary/pioneer"}
    ]);
    entry("shield", [
      ["defensive-shield","盾；盾牌","n.",["盾","盾牌","护盾"],["defensive-shield"],"The museum's oldest exhibit is a wooden shield covered in stretched hide.","博物馆最古老的展品是一面蒙着拉伸兽皮的木盾。",null,"https://www.vocabulary.com/dictionary/shield"],
      ["protective-barrier","防护物；屏障；屏蔽","n.",["防护物","防卫物","屏障","屏蔽","护罩"],["protective-barrier"],"The reactor is protected by a thick concrete shield that blocks radiation.","反应堆由一层厚厚的混凝土屏蔽层保护着，可以阻挡辐射。",null,"https://www.vocabulary.com/dictionary/shield"],
      ["protect-screen","保护；遮蔽；庇护","v.",["保护","遮蔽","庇护","护卫","起保护作用"],["protect-defend"],"Tall hedges shield the garden from the noise of the main road.","高高的树篱把花园与主干道的噪音隔开。","shield sb/sth from sth","https://www.vocabulary.com/dictionary/shield"]
    ],
    [
      {"terms":["保护者"],"decision":"scope-excluded","reason":"旧译'保护者'指人（protector），shield 作名词只指防护物或盾牌。","source":"https://www.vocabulary.com/dictionary/shield"},
      {"terms":["挡开","避开"],"decision":"scope-excluded","reason":"旧译'挡开、避开'接近 ward off 或 dodge，shield 强调遮挡防护而非主动躲开。","source":"https://www.vocabulary.com/dictionary/shield"}
    ]);
    entry("surround", [
      ["encircle","包围；围住","v.",["包围","围住","围困","合围"],["encircle"],"Police surrounded the building at dawn and asked everyone inside to come out.","警察在黎明时包围了那栋楼，要求里面的人全部出来。",null,"https://www.vocabulary.com/dictionary/surround"],
      ["form-ring-around","环绕；围绕","v.",["环绕","围绕","环抱","围绕在四周"],["ring-around"],"A ring of tall pines surrounds the lake where we camp every summer.","一圈高大的松树环绕着我们每年夏天露营的那个湖。",null,"https://www.vocabulary.com/dictionary/surround"],
      ["border-area","周边；周围环境","n.",["周边","周围","四周","围绕物"],["surrounding-area"],"The fireplace has a decorative tile surround that dates from the 1920s.","这个壁炉有一圈20世纪20年代风格的装饰瓷砖围边。",null,"https://www.vocabulary.com/dictionary/surround"]
    ]);
    entry("prohibit", [
      ["forbid-by-rule","禁止；明令不准","v.",["禁止","不准","严禁","明令禁止"],["legal-forbid"],"The city prohibits smoking in all playgrounds and outside school gates.","该市禁止在所有游乐场和校门外吸烟。","prohibit sb from doing sth","https://www.vocabulary.com/dictionary/prohibit"]
    ],
    [
      {"terms":["阻止"],"decision":"scope-excluded","reason":"旧译'阻止'是 prohibit 的引申理解，已读词典只列'明令禁止'这一核心义。","source":"https://www.vocabulary.com/dictionary/prohibit"}
    ]);
    entry("puncture", [
      ["small-pierced-hole","刺痕；小孔","n.",["刺痕","小孔","扎孔"],["small-pierced-hole"],"A small puncture in the fuel line was enough to bring the whole machine to a halt.","燃油管上的一个小刺孔就足以让整台机器停下来。",null,"https://www.vocabulary.com/dictionary/puncture"],
      ["medical-puncture-act","穿刺；穿孔","n.",["穿刺","穿孔","放液穿刺"],["lumbar-puncture-procedure"],"Doctors performed a lumbar puncture to test the fluid surrounding her spinal cord.","医生做了一次腰椎穿刺，以化验她脊髓周围的液体。",null,"https://www.vocabulary.com/dictionary/puncture"],
      ["pierce-with-sharp-object","刺穿；扎破；被刺穿","v.",["刺穿","扎破","刺","被刺穿"],["pierce-with-sharp-object"],"A sharp stone punctured the tyre of my bicycle halfway along the coastal path.","一颗尖石扎破了我自行车的外胎，当时我正骑在海岸小径的半途。",null,"https://www.vocabulary.com/dictionary/puncture"],
      ["deflate-or-undermine","戳破；削弱；揭穿","v.",["揭穿","戳破","削弱"],["deflate-or-undermine"],"The new evidence punctured the company's claim that its bottles were fully recyclable.","新证据戳破了该公司关于其瓶子完全可回收的说法。",null,"https://www.vocabulary.com/dictionary/puncture"]
    ]);
    entry("blood", [
      ["bodily-fluid","血；血液","n.",["血","血液","血水"],["bodily-fluid"],"The nurse took a sample of blood from his arm and sent it to the laboratory.","护士从他手臂上取了血样，送到实验室。",null,"https://www.vocabulary.com/dictionary/blood"],
      ["lineage-descent","血统；家世","n.",["血统","家世","出身"],["lineage-descent"],"She claims royal blood on her mother's side, though no documents support it.","她声称母系有王室血统，尽管没有任何文件可以佐证。",null,"https://www.vocabulary.com/dictionary/blood"],
      ["temperament-disposition","气质；性情","n.",["气质","性情","脾气"],["temperament-disposition"],"His hot blood often got him into arguments he later regretted.","他火爆的脾气常常让他卷入事后懊悔的争吵。",null,"https://www.vocabulary.com/dictionary/blood"],
      ["smear-with-blood","用血涂；使沾血","v.",["用血涂","使沾血","血染"],["smear-with-blood"],"Hunters in some traditions blood the young initiate after the first kill.","在一些传统中，猎人在首次猎杀后用血涂抹年轻的入会者。",null,"https://www.vocabulary.com/dictionary/blood"]
    ],
    [
      {"terms":["流血","使出血"],"decision":"scope-excluded","reason":"'流血、使出血'实为动词 bleed 的释义，blood 作动词在当代英语只表示'使沾血'，不表示出血。","source":"https://www.vocabulary.com/dictionary/blood"},
      {"terms":["生命"],"decision":"scope-excluded","reason":"'生命'是旧词典对 blood 的过度引申，现代词典只收'血、血统、气质'等义，不单列'生命'。","source":"https://www.vocabulary.com/dictionary/blood"}
    ]);
    entry("pain", [
      ["physical-suffering","疼痛；痛","n.",["疼痛","疼","痛楚"],["physical-suffering"],"The pain in her knee grew worse every time she climbed the stairs.","她每次爬楼梯，膝盖的疼痛就更厉害一些。",null,"https://www.vocabulary.com/dictionary/pain"],
      ["emotional-distress","痛苦；悲痛","n.",["痛苦","悲痛","苦恼"],["emotional-distress"],"The pain of losing his closest friend never quite left him.","失去最亲密朋友的痛苦始终没有真正离开他。",null,"https://www.vocabulary.com/dictionary/pain"],
      ["cause-suffering","使痛苦；使疼痛","v.",["使痛苦","使疼痛","使苦恼"],["cause-suffering","sting-cause-distress"],"It pained him to admit that his son had been right all along.","承认儿子一直是对的，这让他很痛苦。",null,"https://www.vocabulary.com/dictionary/pain"],
      ["effort-trouble","辛苦；费力","n.",["辛苦","费心","辛劳"],["effort-trouble"],"She took great pains to make the guests feel welcome in her tiny flat.","她煞费苦心地让客人在她的小公寓里感到受欢迎。","多用复数 take pains to do sth","https://www.vocabulary.com/dictionary/pain"]
    ],
    [
      {"terms":["作痛"],"decision":"scope-excluded","reason":"'作痛'是不及物动词 ache 的用法，pain 作动词在现代英语中只作及物动词，表示'使痛苦'。","source":"https://www.vocabulary.com/dictionary/pain"}
    ]);
    entry("sore", [
      ["painful-tender","疼痛的；酸痛的","adj.",["痛的","酸痛的","疼痛的"],["painful-tender"],"My throat was so sore that I could hardly swallow anything for two days.","我喉咙疼得厉害，两天几乎什么都咽不下去。",null,"https://www.vocabulary.com/dictionary/sore"],
      ["skin-lesion","痛处；溃疡；疮","n.",["痛处","溃疡","疮"],["skin-lesion"],"A small sore appeared on his lip and refused to heal for a week.","他嘴唇上出现了一个小疮，一个星期都没好。",null,"https://www.vocabulary.com/dictionary/sore"],
      ["annoyed-angry","恼火的；生气的","adj.",["恼火的","生气的","气愤的"],["annoyed-angry"],"He was still sore about losing the match to a much younger player.","他还在为输给一个年轻得多的对手而恼火。","常与 about、over 连用","https://www.vocabulary.com/dictionary/sore"],
      ["causing-distress","引起痛苦的；令人难受的","adj.",["引起痛苦的","令人痛苦的","难受的"],["causing-distress"],"The loss of the old market was a sore blow to residents who had shopped there all their lives.","老市场的消失对一辈子在那里买东西的居民来说是一个令人痛苦的打击。","多与 blow、point、trial 等词搭配","https://www.vocabulary.com/dictionary/sore"]
    ],
    [
      {"terms":["悲伤的"],"decision":"scope-excluded","reason":"'悲伤的'对应 sad 或 grieved，sore 表示'疼痛的、恼火的、令人痛苦的'，并不直接表示悲伤。","source":"https://www.vocabulary.com/dictionary/sore"}
    ]);
    entry("finger", [
      ["hand-digit","手指","n.",["手指","指头"],["hand-digit"],"He cut his finger while slicing bread and wrapped it in a clean cloth.","他切面包时割破了手指，用一块干净的布包了起来。",null,"https://www.vocabulary.com/dictionary/finger"],
      ["glove-finger-part","（手套的）指部；指状物","n.",["手套的指部","指状物","指状部分"],["glove-finger-part"],"One finger of the glove had worn through, so she mended it with wool.","那只手套的一个指部磨破了，她用毛线补好了。",null,"https://www.vocabulary.com/dictionary/finger"],
      ["touch-with-fingers","用手指触摸；拨弄","v.",["用手指触摸","拨弄","抚摸"],["touch-with-fingers"],"She fingered the edge of the letter nervously before opening it.","她紧张地用手指摸着信封的边缘，然后才把它打开。",null,"https://www.vocabulary.com/dictionary/finger"],
      ["identify-inform-against","指证；告发","v.",["指证","告发","检举"],["identify-inform-against"],"The witness fingered two men who had been standing near the entrance.","证人指证了两名一直站在入口附近的男子。","finger sb to the police","https://api.dictionaryapi.dev/api/v2/entries/en/finger"]
    ]);
    entry("flesh", [
      ["body-tissue","肉；肉体","n.",["肉","肉体","人体"],["body-tissue"],"The knife cut deep into the flesh of his forearm, missing the bone by a centimetre.","刀深深切进他前臂的肉里，差一厘米就伤到骨头。",null,"https://www.vocabulary.com/dictionary/flesh"],
      ["fruit-pulp","（水果蔬菜的）果肉","n.",["果肉","肉质部分"],["fruit-pulp"],"Cut the mango in half and scoop the soft flesh out with a spoon.","把芒果切成两半，用勺子把软软的果肉挖出来。",null,"https://www.vocabulary.com/dictionary/flesh"],
      ["mortal-human-nature","人性；血肉之躯","n.",["人性","血肉之躯","凡人"],["mortal-human-nature"],"Monks believed that the spirit must be trained to resist the demands of the flesh.","修士们认为必须训练精神去抵抗肉体的欲求。",null,"https://www.vocabulary.com/dictionary/flesh"],
      ["feed-with-flesh","以肉喂（猎犬、猎鹰）；激起嗜血欲","v.",["以肉喂","激起...的杀戳情绪","使嗜血"],["feed-with-flesh"],"The falconer fleshed the young hawk on its first kill to sharpen its hunting instinct.","驯鹰人在幼鹰第一次捕猎后让它吃猎物的肉，以增强它的捕猎本能。","flesh a hawk on sth 用猎物给鹰开食","https://api.dictionaryapi.dev/api/v2/entries/en/flesh"]
    ],
    [
      {"terms":["使肥","长胖"],"decision":"scope-excluded","reason":"flesh 作动词表示'使长胖、长肉'在当代英语已罕用，现代词典多不单列该义。","source":"https://www.vocabulary.com/dictionary/flesh"},
      {"terms":["肉欲"],"decision":"scope-excluded","reason":"'肉欲'是旧词典的宗教引申义，现代词典把抽象义处理为'肉体、人性'，不单列'肉欲'。","source":"https://www.vocabulary.com/dictionary/flesh"},
      {"terms":["亲属"],"decision":"scope-excluded","reason":"flesh 表示'亲属、血亲'仅见于古旧词典，现代英语该义由 relative、kin 等词承担。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/flesh"},
      {"terms":["人类","众生"],"decision":"scope-excluded","reason":"现代词典不以 flesh 表示'人类、众生'，该义一般由 mankind、humanity 承担。","source":"https://www.vocabulary.com/dictionary/flesh"},
      {"terms":["赋以血肉"],"decision":"context-required","reason":"'赋以血肉'实为短语动词 flesh out 的意译，必须与 out 连用，不能单独列为及物动词义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/flesh"}
    ]);
    entry("nerve", [
      ["bundle-of-neurons","神经","n.",["神经","神经干"],["bundle-of-neurons"],"The surgeon warned that the damaged nerve might never fully recover its function.","外科医生警告说，受损的神经可能永远无法完全恢复功能。",null,"https://www.vocabulary.com/dictionary/nerve"],
      ["courage-boldness","勇气；胆量","n.",["勇气","胆量","魄力"],["courage-boldness"],"It took real nerve to tell the manager that his plan would never work.","当面告诉经理他的计划行不通，需要真正的勇气。",null,"https://www.vocabulary.com/dictionary/nerve"],
      ["leaf-vein","叶脉；翅脉","n.",["叶脉","翅脉"],["leaf-vein"],"Hold the leaf up to the light and you can see every nerve running through it.","把叶子对着光举起来，就能看到贯穿其中的每一根叶脉。","多用于植物学语境","https://api.dictionaryapi.dev/api/v2/entries/en/nerve"],
      ["give-courage","鼓起勇气；使有勇气","v.",["鼓起勇气","使振作","给...勇气"],["give-courage"],"She nerved herself to knock on the door of the head teacher's office.","她鼓起勇气去敲校长办公室的门。","nerve oneself to do sth","https://www.vocabulary.com/dictionary/nerve"]
    ],
    [
      {"terms":["精神"],"decision":"scope-excluded","reason":"'精神'含义过宽且与'勇气'重叠，现代词典把 nerve 的抽象义限定为'勇气、胆量、厚脸皮'。","source":"https://www.vocabulary.com/dictionary/nerve"}
    ]);
    entry("lump", [
      ["compact-mass","块；团","n.",["块","团","大块"],["compact-mass"],"He dropped a lump of sugar into the coffee and stirred it slowly.","他往咖啡里放了一块方糖，慢慢搅动。",null,"https://www.vocabulary.com/dictionary/lump"],
      ["abnormal-swelling","肿块；瘤","n.",["肿块","瘤","硬块"],["abnormal-swelling"],"The doctor found a small lump under her jaw and sent her for a scan.","医生在她下颌下面发现了一个小肿块，就让她去做扫描。",null,"https://www.vocabulary.com/dictionary/lump"],
      ["group-together","混在一起；归并","v.",["混在一起","归并","混为一谈"],["group-together"],"The report lumps together very different schools and calls them all failing.","这份报告把十分不同的学校混为一谈，统统称为不合格。","lump A together (with B)","https://www.vocabulary.com/dictionary/lump"],
      ["foolish-person","笨人；傻瓜","n.",["笨人","傻瓜","蠢人"],["foolish-person"],"The foreman called him a lazy lump and told him to start working.","工头骂他是个懒散的笨蛋，叫他开始干活。",null,"https://www.vocabulary.com/dictionary/lump"]
    ],
    [
      {"terms":["很多"],"decision":"scope-excluded","reason":"'很多'疑为 a lot of 的误植，lump 本身并无'很多'之义，现代词典不列该义项。","source":"https://www.vocabulary.com/dictionary/lump"},
      {"terms":["使成块状","结块"],"decision":"scope-excluded","reason":"'使成块状、结块'在当代英语用 form lumps 或 go lumpy 表达，lump 作动词不单列此义。","source":"https://www.vocabulary.com/dictionary/lump"}
    ]);
    entry("wound", [
      ["injury-cut","伤口；创伤","n.",["伤口","创伤","伤"],["injury-cut"],"The wound on his leg became infected because he never cleaned it properly.","他腿上的伤口因为从未好好清理而感染了。",null,"https://www.vocabulary.com/dictionary/wound"],
      ["injure-physically","使受伤；弄伤","v.",["使受伤","伤害","弄伤"],["injure-physically"],"The explosion wounded three workers who were standing near the loading bay.","爆炸使三名站在装卸区附近的工人受伤。",null,"https://www.vocabulary.com/dictionary/wound"],
      ["hurt-feelings","伤害感情；刺痛","v.",["伤害感情","刺痛","伤...的心"],["hurt-feelings"],"Her careless remark wounded him more than she could possibly have guessed.","她那句漫不经心的话伤他之深，远超她的想象。",null,"https://www.vocabulary.com/dictionary/wound"]
    ],
    [
      {"terms":["缠绕"],"decision":"restricted-verified","reason":"'缠绕'是 wind 的过去式与过去分词同形词，读 /waʊnd/，与表示伤口的 wound（/wuːnd/）同形异音，属另一词条。","source":"https://www.vocabulary.com/dictionary/wound"}
    ]);
    entry("naked", [
      ["unclothed","裸体的；裸露的","adj.",["裸体的","裸露的","赤身裸体的"],["unclothed"],"The children ran naked through the sprinkler on the hottest afternoon of the year.","一年中最热的那天下午，孩子们光着身子在喷水器下跑来跑去。",null,"https://www.vocabulary.com/dictionary/naked"],
      ["plain-undisguised","无装饰的；不加掩饰的","adj.",["无装饰的","不加掩饰的","赤裸裸的"],["plain-undisguised"],"He told the naked truth about the company's debts, without softening a single word.","他毫不掩饰地讲了公司的债务真相，一个字都没有软化。","常见于 the naked truth、the naked eye 等固定搭配","https://www.vocabulary.com/dictionary/naked"],
      ["unprotected-exposed","无保护的；不设防的","adj.",["无保护的","不设防的","暴露的"],["unprotected-exposed"],"The camp lay naked on the hillside, visible to anyone with binoculars.","营地暴露在山坡上，任何有望远镜的人都能看见。",null,"https://www.vocabulary.com/dictionary/naked"],
      ["destitute-lacking","赤贫的；一无所有的","adj.",["赤贫的","一无所有的","缺乏...的"],["destitute-lacking"],"After the fire the family was left naked of possessions and dependent on neighbours.","火灾之后，这家人一无所有，只能依靠邻居。","naked of sth 缺乏某物","https://api.dictionaryapi.dev/api/v2/entries/en/naked"]
    ]);
    entry("fear", [
      ["dread","恐惧；恐怖","n.",["恐惧","恐怖","惊恐"],["fear-dread"],"She could not hide the fear in her voice when the lights went out.","灯灭时，她声音里的恐惧怎么也藏不住。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/fear"],
      ["be-afraid-of","害怕；畏惧","v.",["害怕","畏惧","惧怕"],["fear-be-afraid"],"Many children fear the dark long after they learn to sleep alone.","许多孩子早已学会独自睡觉，却仍然害怕黑暗。","fear sb/sth","https://api.dictionaryapi.dev/api/v2/entries/en/fear"],
      ["worry-about","担心；为…担忧","v.",["担心","为...担心","担忧"],["worry-concern"],"Her parents feared for her safety when the storm cut the phone lines.","暴风雨切断电话线时，她父母为她的安全担心。","fear for sb/sth","https://api.dictionaryapi.dev/api/v2/entries/en/fear"],
      ["revere","敬畏；崇敬","v.",["敬畏","崇敬"],["reverence-awe"],"The villagers fear the old river god more than they love him.","村民们对河中的老神与其说是爱，不如说是敬畏。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/fear"]
    ]);
    entry("anger", [
      ["rage","愤怒；怒气","n.",["忿怒","愤怒","怒气"],["anger-rage"],"He hid his anger behind a fixed smile throughout the interview.","整个面试过程中，他把怒气藏在一成不变的微笑后面。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/anger"],
      ["enrage","激怒；使发怒","v.",["激怒","使发怒","惹怒"],["anger-provoke"],"Her careless remark angered every member of the committee.","她那句轻率的话激怒了委员会的每一位成员。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/anger"],
      ["become-angry","发怒；动怒","v.",["发怒","动怒","生气"],["anger-become"],"He angers quickly when his figures are questioned in public.","一旦他的数据在公开场合受到质疑，他就很快发怒。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/anger"]
    ]);
    entry("hate", [
      ["hatred","仇恨；憎恶","n.",["仇恨","憎恶","恨意"],["hate-hatred"],"Years of bullying turned his fear into hate.","多年的欺凌让他的恐惧变成了仇恨。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hate"],
      ["detest","憎恨；厌恶；恨","v.",["憎恨","恨","厌恶","讨厌"],["hate-detest"],"She hates being interrupted whenever she is reading the news.","她播新闻时讨厌被人打断。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hate"]
    ]);
    entry("envy", [
      ["jealousy","嫉妒；羡慕（名词）","n.",["嫉妒","羡慕","眼红"],["envy-jealousy"],"Her envy of his promotion poisoned every conversation they had.","她对他升职的嫉妒毒化了他们之间的每一次谈话。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/envy"],
      ["covet","羡慕；妒忌（动词）","v.",["羡慕（别人的东西）","妒忌"],["envy-covet"],"I envy the way she stays calm when the whole room is shouting.","我很羡慕她在满屋人叫嚷时还能保持镇定。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/envy"]
    ]);
    entry("guilty", [
      ["culpable","有罪的；犯罪的；有过失的","adj.",["有罪的","犯罪的","有过失的"],["guilt-legal"],"The jury found him guilty of falsifying three years of accounts.","陪审团认定他伪造三年账目的罪名成立。","be guilty of sth","https://api.dictionaryapi.dev/api/v2/entries/en/guilty"],
      ["feeling-guilt","内疚的；自觉有罪的；心虚的","adj.",["自觉有错的","心虚的","自觉有罪的","内疚的"],["shame-guilt-feeling"],"She felt guilty about leaving the dog alone all day.","她一整天把狗独自留在家里，为此感到内疚。","feel guilty about sth","https://api.dictionaryapi.dev/api/v2/entries/en/guilty"]
    ]);
    entry("ashamed", [
      ["feeling-shame","羞愧的；惭愧的；羞耻的","adj.",["羞耻的","惭愧的","羞愧的"],["shame-guilt-feeling"],"He was ashamed of the way he had spoken to his sister.","他为那样跟姐姐说话而感到羞愧。","be ashamed of sth","https://api.dictionaryapi.dev/api/v2/entries/en/ashamed"]
    ]);
    entry("confuse", [
      ["bewilder","使困惑；使糊涂","v.",["使困惑","使糊涂","使迷惑"],["confusion-bewilder"],"The instructions confused even the engineers who wrote the software.","这些说明连编写该软件的工程师都搞糊涂了。",null,"https://www.vocabulary.com/dictionary/confuse"],
      ["mix-up","混淆；搞混；分不清","v.",["混淆","搞混","分不清"],["confusion-mix-up"],"Reporters often confuse the two brothers because they share a surname.","记者们常把这两兄弟搞混，因为他们同姓。","confuse A with B","https://www.vocabulary.com/dictionary/confuse"],
      ["complicate","使混乱；搅乱","v.",["使混乱","搅乱","扰乱"],["confusion-disorder"],"New evidence only confused the picture the police had built.","新证据只是让警方拼出的案情更加混乱。",null,"https://www.vocabulary.com/dictionary/confuse"]
    ]);
    entry("embarrass", [
      ["humiliate","使尴尬；使窘迫","v.",["使尴尬","使窘迫","使难堪"],["embarrass-humiliate"],"His joke embarrassed the guest so much that she left early.","他的玩笑让那位客人十分难堪，她提前离开了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/embarrass"],
      ["hinder","使为难；使陷入困境；阻碍","v.",["使为难","使陷入困境","阻碍"],["hinder-progress"],"The opposition embarrassed the bill by adding a hundred amendments.","反对派提出上百条修正案，使这项法案陷入困境。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/embarrass"]
    ]);
    entry("endure", [
      ["bear-pain","忍受；忍耐","v.",["忍受","忍耐","耐","承受"],["endurance-bear"],"The prisoners endured months of cold without blankets or hot food.","囚犯们没有毯子和热饭，忍受了数月的严寒。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/endure"],
      ["tolerate","容忍；将就","v.",["容忍","将就","容得下"],["tolerance-endure"],"She can endure noise, but she cannot endure being ignored.","她能容忍噪音，却无法容忍被人忽视。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/endure"],
      ["last","持续；持久","v.",["(正式)持久","持续","延续"],["durability-last"],"The bridge has endured for three centuries and still carries traffic.","这座桥已屹立三百年，如今仍在通行。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/endure"]
    ],
    [
      {"terms":["仍能工作","继续工作"],"decision":"scope-excluded","reason":"旧译把 endure 用于机器“仍能工作、继续工作”，但条目里 endure 只表示忍受痛苦或（事物）持续存在，没有机器运转义，故保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/endure"}
    ]);
    entry("willing", [
      ["ready-to-do","乐意的；愿意的；甘愿的","adj.",["乐意的","甘愿的","愿意的"],["willingness-ready"],"Few farmers were willing to sell land at the price the city offered.","很少有农民愿意按市里出的价格卖地。","be willing to do sth","https://www.vocabulary.com/dictionary/willing"],
      ["given-glady","自愿的；心甘情愿的","adj.",["自愿的","心甘情愿的"],["voluntary-consent"],"The plan worked because it had the willing support of local teachers.","这项计划成功，是因为得到了当地教师心甘情愿的支持。",null,"https://www.vocabulary.com/dictionary/willing"]
    ]);
    entry("modest", [
      ["humble","谦逊的；不夸耀的","adj.",["谦逊的","羞怯的","谦虚的"],["modesty-humility"],"He is modest about his research even when others praise it.","即使别人称赞他的研究，他也很谦逊。","be modest about sth","https://api.dictionaryapi.dev/api/v2/entries/en/modest"],
      ["moderate-size","适度的；不大的","adj.",["适度的","适当的","不大的"],["moderate-amount"],"They bought a modest flat near the station with their savings.","他们用积蓄在车站附近买了一套不大的公寓。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/modest"],
      ["decent-clothing","端庄的；衣着得体的","adj.",["端庄的","得体的"],["modesty-dress"],"The school asks visitors to wear modest clothing out of respect.","学校要求来访者衣着端庄以示尊重。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/modest"]
    ]);
    entry("curious", [
      ["inquisitive","好奇的；求知的","adj.",["好奇的","求知的","好问的"],["curiosity-inquisitive"],"The children were curious about why the river had turned green.","孩子们很想知道河水为什么变绿了。","be curious about sth","https://api.dictionaryapi.dev/api/v2/entries/en/curious"],
      ["odd","古怪的；奇怪的","adj.",["古怪的","奇怪的","奇特的"],["strangeness-odd"],"A curious smell came from the box they had found in the attic.","他们从阁楼找到的箱子里散发出一种奇怪的气味。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/curious"]
    ]);
    entry("careful", [
      ["cautious","小心的；谨慎的","adj.",["小心的","谨慎的","当心的"],["caution-careful"],"Be careful with the glass jars; the road ahead is full of holes.","搬玻璃罐时要小心，前面的路满是坑洼。","be careful with sth","https://api.dictionaryapi.dev/api/v2/entries/en/careful"],
      ["thorough","仔细的；细致的；周密的","adj.",["仔细的","细致的","周密的"],["thoroughness"],"A careful comparison of the two maps revealed a missing stream.","仔细比对两张地图之后，一条消失的小溪被发现。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/careful"]
    ]);
    entry("tough", [
      ["difficult","艰难的；艰苦的","adj.",["艰苦的","艰难的","难对付的"],["difficulty-hard"],"The first year of teaching is tough for almost everyone.","对几乎所有人来说，教书的第一年都很艰难。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tough"],
      ["sturdy","坚固的；坚韧的；结实的","adj.",["坚固的","坚韧的","结实的"],["strength-sturdy","substantial-solid-build"],"The boots are tough enough to survive a winter on the moors.","这双靴子足够结实，能在荒原上熬过一个冬天。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tough"],
      ["chewy","咬不动的；嚼不烂的","adj.",["咬不动的","嚼不烂的"],["food-texture-tough"],"The meat was so tough that the knife would hardly cut it.","那块肉太老，刀几乎切不动。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tough"],
      ["strict-and-rough","强硬的；粗暴的","adj.",["强硬的","粗暴的","厉害"],["toughness-attitude"],"The city has taken a tough line on drivers who ignore the bus lanes.","该市对无视公交专用道的司机采取了强硬态度。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tough"]
    ],
    [
      {"terms":["恶棍"],"decision":"restricted-verified","reason":"条目确认 tough 作名词指以暴力索取的人（toughs），属口语旧用法，仅在帮派语境成立，故保留追溯而不作为学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/tough"}
    ]);
    entry("strict", [
      ["disciplinarian","严格的；严厉的","adj.",["严格的","严厉的","严明的"],["strictness-discipline","strict-disapproving"],"The school is strict about phones but relaxed about uniforms.","这所学校对手机管得很严，对校服却很宽松。","be strict about sth","https://api.dictionaryapi.dev/api/v2/entries/en/strict"],
      ["exact","精确的；严格意义上的","adj.",["精确的","严格意义上的"],["precision-exact"],"In the strict sense, a tomato is a fruit, not a vegetable.","严格说来，番茄是水果，而不是蔬菜。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/strict"],
      ["complete-control","绝对的；详尽周密的","adj.",["绝对的","详尽的","严密周全的"],["thoroughness-total"],"Their strict control of spending saved the charity thousands of pounds.","他们对开支的严格控制为这家慈善机构省下了数千英镑。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/strict"]
    ]);
    entry("severe", [
      ["intense","严重的；剧烈的","adj.",["严重的","尖锐的","剧烈的"],["severity-intensity"],"A severe drought has left the reservoir at a third of its capacity.","严重的干旱让水库只剩三分之一的水量。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/severe"],
      ["harsh","严厉的；苛刻的","adj.",["严厉的","苛刻的","严格的"],["harshness-punishment","strict-demanding"],"Critics called the sentence severe for a first offence.","批评者认为，对初犯者来说这一判决过重。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/severe"],
      ["serious-expression","严肃的；不苟言笑的","adj.",["严肃的","严峻的","不苟言笑的"],["serious-expression"],"Her severe expression softened as soon as the child began to laugh.","孩子一笑，她严肃的神情就缓和了下来。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/severe"],
      ["plain","朴素的；不加装饰的","adj.",["朴素的","不加装饰的","简朴的"],["austerity-plain","plain-unadorned-style"],"The room was severe: white walls, a bed and one wooden chair.","房间很素净：白墙、一张床和一把木椅。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/severe"]
    ]);
    entry("stubborn", [
      ["obstinate","顽固的；执拗的","adj.",["顽固的","执拗的","不听话的"],["stubbornness"],"He is too stubborn to admit that the first plan failed.","他太固执，不肯承认第一个方案失败了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/stubborn"],
      ["hard-to-remove","难以去除的；棘手的","adj.",["棘手的","难对付的","顽固难除的"],["persistence-tenacity"],"Doctors struggled with a stubborn infection that kept coming back.","医生们费力对付一种反复发作的顽固感染。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/stubborn"]
    ]);
    entry("careless", [
      ["negligent","粗心的；疏忽的","adj.",["粗心的","疏忽的","马虎的"],["carelessness-negligence"],"One careless driver at the junction caused the whole delay.","路口一名粗心的司机造成了整场延误。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/careless"],
      ["unconcerned","不在意的；无忧无虑的","adj.",["不关心的","无忧无虑的","满不在乎的"],["indifference-careless"],"Years ago he was careless of advice; now he asks everyone.","多年前他不听劝告，如今却逢人便问。","be careless of sth","https://api.dictionaryapi.dev/api/v2/entries/en/careless"]
    ]);
    entry("restless", [
      ["unable-to-stay-still","坐立不安的；不安静的","adj.",["不安静的","不宁的","慌张的"],["restlessness-fidget"],"The children grew restless during the third hour of the journey.","旅程到了第三个小时，孩子们开始坐不住了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/restless"],
      ["sleepless","睡不安稳的；得不到休息的","adj.",["休息不充分的","不得安宁的"],["sleepless-rest"],"It was a restless night, with the wind banging at the shutters.","那是个不眠之夜，风不停拍打着百叶窗。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/restless"]
    ]);
    entry("enthusiastic", [
      ["eager","热心的；热情的","adj.",["热心的","热烈的","热情的"],["enthusiasm-eager"],"The staff were enthusiastic about the plan until they saw the budget.","员工们起初对这项计划很热心，直到看见了预算。","be enthusiastic about sth","https://api.dictionaryapi.dev/api/v2/entries/en/enthusiastic"],
      ["fervent","狂热的；过分热情的","adj.",["狂热的","痴迷的"],["zeal-fanatical"],"His enthusiastic support for the project worried the finance committee.","他对该项目近乎狂热的支持让财务委员会感到担忧。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/enthusiastic"]
    ]);
    entry("hurry", [
      ["haste","匆忙；急忙","n.",["匆忙","急忙","急促"],["hurry-haste"],"In her hurry she left the passport on the kitchen table.","匆忙之中，她把护照落在厨房桌上。","in a hurry","https://api.dictionaryapi.dev/api/v2/entries/en/hurry"],
      ["move-fast","赶快；赶紧","v.",["赶快","急忙","赶紧"],["hurry-move-fast"],"He hurried along the corridor without looking up from his phone.","他沿着走廊匆匆走去，眼睛也不从手机上抬起。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hurry"],
      ["urge-on","催促；使赶快","v.",["催促","急派","催"],["hurry-urge"],"The nurse hurried the visitors up so the ward could settle.","护士催访客们快点离开，好让病房安静下来。","hurry sb up","https://api.dictionaryapi.dev/api/v2/entries/en/hurry"]
    ]);
    entry("grab", [
      ["seize","抓住；抓取","v.",["抓握","抓取","攫取","抓住"],["grab-seize"],"She grabbed the child's arm as the bus pulled away.","公交车开动时，她一把抓住孩子的胳膊。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/grab"],
      ["take-forcibly","抢夺；抢占","v.",["掠夺","强占","霸占","抢去","捕获"],["grab-take-forcibly"],"Investors grabbed the last cheap flats within a single morning.","投资者们在一个上午之内抢光了最后一批便宜公寓。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/grab"],
      ["quick-meal","匆匆吃喝；抓紧时间吃","v.",["匆匆吃","随便吃点"],["grab-quick-meal"],"We grabbed a sandwich between the two lectures.","两节课之间，我们匆匆吃了个三明治。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/grab"]
    ],
    [
      {"terms":["东方沿岸帆船"],"decision":"restricted-verified","reason":"条目确认 grab 可指印度马拉巴尔海岸使用的两桅或三桅帆船，属航海史专门术语，仅在历史航海语境成立，故保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/grab"}
    ]);
    entry("catch", [
      ["seize-capture","接住；抓住（移动中的东西）","v.",["捕捉","抓住","抓","接住"],["catch-capture"],"He caught the keys with one hand and the door swung shut.","他单手接住钥匙，门随即关上了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/catch"],
      ["take-transport","赶上（交通工具）","v.",["赶上","搭上"],["catch-be-in-time"],"We ran for the platform and caught the last train north.","我们跑向站台，赶上了北行的末班车。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/catch"],
      ["contract-illness","感染（疾病）；染上","v.",["感染","染上"],["catch-contract-illness"],"Half the class caught the same cold within a week.","一周之内，半个班都染上了同样的感冒。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/catch"],
      ["hear-understand","听清楚；听明白","v.",["听清楚","听明白"],["catch-hear-understand"],"I could not catch what she said over the noise of the drill.","电钻声太吵，我听不清她说了什么。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/catch"]
    ],
    [
      {"terms":["陷阱"],"decision":"scope-excluded","reason":"旧译“陷阱”对应 trap 或 catch 的“圈套”说法，条目中 catch 的名词义指捕获量、搭扣、暗藏难点，并无“陷阱”义，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/catch"},
      {"terms":["捕捉之物"],"decision":"scope-excluded","reason":"条目确有名词义“捕获量、捕获物”，但本词以四个动词义为主，名词义未单列，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/catch"},
      {"terms":["拉手"],"decision":"scope-excluded","reason":"旧译“拉手”指把手，条目中 catch 指门闩、搭扣一类卡扣装置，与“把手”不同，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/catch"},
      {"terms":["燃着"],"decision":"context-required","reason":"旧译“燃着”来自 catch fire 这一固定搭配，catch 单独使用不含“燃烧”义，须与 fire 连用。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/catch"}
    ]);
    entry("touch", [
      ["physical-contact","碰；触；触摸","v.",["碰","触","轻触","接触","触摸","触及","使接触"],["touch-physical"],"She touched his sleeve to warn him that the manager was behind them.","她碰了碰他的袖子，提醒他经理就在他们身后。",null,"https://www.vocabulary.com/dictionary/touch"],
      ["sense-of-touch","触觉；触感","n.",["触觉"],["touch-sense"],"Touch is the first sense a baby uses to explore the world.","触觉是婴儿探索世界时最先使用的感官。",null,"https://www.vocabulary.com/dictionary/touch"],
      ["move-emotionally","感动；触动","v.",["感动","触动"],["touch-emotional"],"Her letter touched him more than any speech at the ceremony.","她的来信比典礼上的任何讲话都更让他感动。",null,"https://www.vocabulary.com/dictionary/touch"],
      ["small-amount","少许；一点儿","n.",["少许","一点儿"],["touch-small-amount"],"There is a touch of frost on the car windscreen this morning.","今天早上车窗上带了一丝霜。",null,"https://www.vocabulary.com/dictionary/touch"]
    ],
    [
      {"terms":["机灵","格调","弹力","缺点"],"decision":"scope-excluded","reason":"核对条目，touch 没有“机灵、格调、弹力、缺点”这些义项；旧译应分别对应 knack、style、elasticity、flaw，故保留追溯。","source":"https://www.vocabulary.com/dictionary/touch"},
      {"terms":["达到","接近"],"decision":"scope-excluded","reason":"条目另有“延伸到、触及某处”的动词用法，本批只保留接触、触觉、感动、少量四个高频义，未单列“达到/接近”。","source":"https://www.vocabulary.com/dictionary/touch"},
      {"terms":["涉及","影响到","使轻度受害"],"decision":"scope-excluded","reason":"旧译“涉及/影响到/使轻度受害”对应 touch on 或 affect 的表达，条目中 touch 单独表示“轻微影响”的用法罕见，本批未单列。","source":"https://www.vocabulary.com/dictionary/touch"},
      {"terms":["提到"],"decision":"context-required","reason":"旧译“提到”来自 touch on（谈及）这一固定搭配，touch 单独使用不含“提及”义。","source":"https://www.vocabulary.com/dictionary/touch"}
    ]);
    entry("smash", [
      ["break-violently","打碎；粉碎；碎裂","v.",["打碎","粉碎","碎裂","砸碎"],["smash-break"],"The ball smashed the kitchen window and landed in the sink.","球打碎了厨房的窗户，落进了水槽。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/smash"],
      ["hit-hard","猛击；猛撞；击溃","v.",["猛击","猛撞","击溃"],["smash-hit-hard","strike-with-force"],"He smashed the ball past the goalkeeper from thirty metres.","他在三十米外把球猛射过守门员。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/smash"],
      ["crash-sound","哗啦声；撞击声","n.",["打碎时哗啦声","轰隆一声","哗啦一声"],["smash-noise"],"We heard a smash of glass, then running feet in the corridor.","我们听到玻璃哗啦一声碎裂，接着走廊里响起奔跑的脚步声。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/smash"],
      ["big-success","轰动一时的成功之作","n.",["非常轰动的","了不起的"],["smash-hit-success"],"Her second novel was a smash and sold a million copies.","她的第二部小说轰动一时，卖出了一百万册。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/smash"]
    ],
    [
      {"terms":["扣球","杀球"],"decision":"restricted-verified","reason":"条目确有“网球/羽毛球高压扣杀”的名词义，属专项体育术语，只在球类技术语境成立，故保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/smash"},
      {"terms":["经营失败","破产","使破产"],"decision":"scope-excluded","reason":"条目中及物义为“彻底毁掉、使破灭”，名词 bankruptcy 义属旧用；本批不单列“经营失败/使破产”，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/smash"},
      {"terms":["硬币","假硬币","使用假硬币","使裂变"],"decision":"scope-excluded","reason":"核对条目，smash 没有“硬币、假硬币、使用假硬币、使裂变”这些义项（旧词典材料有误），保留追溯而不列入学习范围。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/smash"}
    ]);
    entry("scratch", [
      ["itch","搔；抓；挠（止痒）","v.",["搔","抓","挠"],["scratch-itch"],"He scratched his arm where the mosquito had bitten him.","他挠了挠被蚊子叮过的手臂。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/scratch"],
      ["mark","抓痕；擦伤","n.",["抓痕","擦伤"],["scratch-mark"],"There were deep scratches on both doors of the stolen car.","被盗汽车的两扇车门上都有深深的刮痕。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/scratch"],
      ["scrape","刮；擦；刮花（表面）","v.",["刮","擦","刮花"],["scratch-scrape"],"The branch scratched the paint along the whole side of the van.","树枝把厢式货车整侧的漆都刮花了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/scratch"],
      ["cancel","划掉；取消","v.",["勾抹掉","擦除","划掉"],["scratch-cancel"],"The editor scratched two paragraphs and rewrote the ending.","编辑划掉了两段，重写了结尾。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/scratch"]
    ],
    [
      {"terms":["刮擦声","发刮擦声","挖出"],"decision":"scope-excluded","reason":"条目确认“刮擦声”与“用爪子挖洞”的用法存在，但本批只保留四个高频义，未单列声音与挖掘义，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/scratch"},
      {"terms":["乱写","乱涂"],"decision":"scope-excluded","reason":"条目确有“潦草地写、乱涂”义，但现代英语罕用，本批不单列，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/scratch"},
      {"terms":["零分","起跑线"],"decision":"restricted-verified","reason":"旧译“零分、起跑线”对应体育与考试场景的专门说法（scratch line、start from scratch），仅在受限语境成立，故保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/scratch"},
      {"terms":["勉强糊口"],"decision":"context-required","reason":"旧译“勉强糊口”来自 scratch a living 这一固定搭配，scratch 单独使用不含此义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/scratch"},
      {"terms":["碰巧的"],"decision":"scope-excluded","reason":"核对条目，scratch 没有“碰巧的”这一形容词义（旧词典材料有误），保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/scratch"},
      {"terms":["凑合的","打草稿用的"],"decision":"scope-excluded","reason":"条目的形容词义指“临时凑成的、草稿用的”（scratch team、scratch paper），属特定搭配，本批不单列学习义项，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/scratch"}
    ]);
    entry("split", [
      ["divide","劈开；裂开；切开","v.",["劈开","裂开","被劈开","切开"],["split-divide"],"He split the log with a single blow of the axe.","他一斧子就把圆木劈开了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/split"],
      ["fissure","裂缝；裂口","n.",["裂缝"],["split-fissure","crack-fissure"],"Water had got into a split in the pipe and frozen there.","水渗进了管子上的一条裂缝，并在里面结了冰。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/split"],
      ["separate","分开；使分裂；拆分","v.",["分裂","使分裂","分离","分开","使分离","拆分"],["split-separate"],"The party split over the question of raising fuel taxes.","该党在提高燃油税的问题上发生了分裂。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/split"],
      ["faction","派系；派别","n.",["派系","派别"],["split-faction"],"A split within the cabinet leaked the whole plan to the press.","内阁内部的派系分裂把整个计划泄露给了媒体。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/split"]
    ],
    [
      {"terms":["裂片"],"decision":"scope-excluded","reason":"条目确有“劈下的一片、碎片”这一名词义，但属罕用，本批不单列，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/split"},
      {"terms":["柳条"],"decision":"scope-excluded","reason":"核对条目，split 没有“柳条”义（旧词典材料有误），保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/split"},
      {"terms":["劈开的"],"decision":"scope-excluded","reason":"条目的形容词义指“分裂的、意见不一的”（多用于党派），本批以动词与名词义为主，未单列形容词义，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/split"}
    ]);
    entry("collide", [
      ["hit-together","碰撞；相撞","v.",["碰撞","互撞"],["collide-physical"],"The cyclist collided with a van at the blind corner.","骑车人在视线受阻的拐角处与一辆厢式货车相撞。","collide with sth","https://api.dictionaryapi.dev/api/v2/entries/en/collide"],
      ["conflict","抵触；发生冲突","v.",["抵触","冲突"],["collide-conflict"],"Her duty to her family collided with her duty to the court.","她对家庭的责任与对法庭的责任发生了冲突。","collide with sth","https://api.dictionaryapi.dev/api/v2/entries/en/collide"]
    ]);
    entry("contact", [
      ["communication","联系；联络","n.",["联系","交际"],["contact-communication"],"We lost contact with the rescue team after the second avalanche.","第二次雪崩之后，我们与救援队失去了联系。","be in contact with sb","https://api.dictionaryapi.dev/api/v2/entries/en/contact"],
      ["physical","接触；触碰","n.",["接触","使接触"],["contact-physical"],"The disease spreads through direct contact with infected animals.","这种病通过直接接触受感染的动物传播。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/contact"],
      ["acquaintance","熟人；可用的人脉","n.",["熟人"],["contact-acquaintance"],"She used a contact in the ministry to get the file released.","她通过部里的一个熟人让那份文件得以公开。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/contact"],
      ["get-in-touch","联系（某人）","v.",["联系","联络"],["contact-get-in-touch"],"Please contact the office if your details change.","如果您的信息有变动，请联系办公室。","contact sb","https://api.dictionaryapi.dev/api/v2/entries/en/contact"]
    ]);
    entry("steer", [
      ["control-direction","驾驶；掌舵；控制方向","v.",["驾驶","掌舵","控制","航行","行驶"],["steer-control-direction"],"She steered the boat between the rocks without slowing down.","她驾船在礁石间穿行，没有减速。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steer"],
      ["guide","引导；把…引向","v.",["引导","导向"],["steer-guide"],"She steered the conversation away from her brother's divorce.","她把谈话引开，避开了哥哥离婚的话题。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steer"],
      ["advice","劝告；指点","n.",["劝告","驾驶指示"],["steer-advice"],"The committee gave the minister a steer on how to present the figures.","委员会就如何呈现这些数字给了部长一个指点。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steer"]
    ]);
    entry("descend", [
      ["go-down","下降；下来；走下","v.",["下降","走下","下来"],["descend-go-down"],"The plane began to descend through thick cloud towards the runway.","飞机开始穿过浓云向跑道下降。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/descend"],
      ["inherit","世代相传；传下来","v.",["世代相传","传下"],["descend-inherit"],"The estate descended to his niece, who had never met him.","这份产业传给了他的侄女，而她从未见过他。","descend to sb","https://api.dictionaryapi.dev/api/v2/entries/en/descend"],
      ["condescend","屈尊；降低身份","v.",["屈尊"],["descend-condescend"],"He would never descend to borrowing money from his own students.","他绝不会屈尊向自己的学生借钱。","descend to doing sth","https://api.dictionaryapi.dev/api/v2/entries/en/descend"],
      ["attack-suddenly","突然袭击；蜂拥而至","v.",["袭击","蜂拥而至"],["descend-attack"],"Reporters descended on the village the moment the story broke.","消息一传出，记者们就蜂拥而至那个村子。","descend on sb/sth","https://api.dictionaryapi.dev/api/v2/entries/en/descend"]
    ]);
    entry("sail", [
      ["canvas","帆；篷","n.",["帆","篷","帆状物"],["sail-canvas"],"They raised the sail as soon as the harbour wall was behind them.","一驶出防波堤，他们就升起了帆。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sail"],
      ["travel-on-water","航行；启航；驾船","v.",["航行","启航","张帆而行","航行于","驾船"],["sail-travel-water"],"We sailed from Athens to Crete overnight on a small ferry.","我们乘一艘小渡轮从雅典夜航到克里特。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sail"],
      ["trip","航程；乘船游览","n.",["航程"],["sail-trip"],"A sail along the coast takes about two hours in good weather.","天气好时，沿海航行一趟大约要两小时。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sail"]
    ],
    [
      {"terms":["帆船"],"decision":"restricted-verified","reason":"sail 作可数名词指帆船只见于 twenty sail 这类旧式集体说法，现代英语通常在航运计数语境出现，故保留追溯而不作为学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/sail"}
    ]);
    entry("cross", [
      ["go-across","横过；越过；穿过","v.",["横过","越过","穿过"],["cross-go-across"],"We crossed the bridge before the water reached the road.","我们在水漫上路面之前过了桥。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cross"],
      ["symbol","十字架；十字形记号；交叉","n.",["十字架","十字架形物件","十字标","交叉"],["cross-symbol"],"A small cross marks the spot where the chapel once stood.","一个小十字标记着礼拜堂原来的位置。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cross"],
      ["angry","生气的；恼火的","adj.",["生气的","恼火的"],["cross-angry"],"She gets cross when the post arrives after eleven.","邮件过了十一点才到，她就会生气。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cross"],
      ["breed","杂交；使杂交","v.",["杂交","使杂交"],["cross-breed","hybridise-breed"],"The gardener crossed a wild rose with a garden variety.","园丁把野蔷薇与园艺品种杂交。","cross sth with sth","https://api.dictionaryapi.dev/api/v2/entries/en/cross"]
    ],
    [
      {"terms":["交叉路"],"decision":"restricted-verified","reason":"交叉路口的说法多见于英国与爱尔兰地名（如 Gerrards Cross），作为普通名词属受限用法，本批未单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/cross"},
      {"terms":["磨难"],"decision":"context-required","reason":"旧译“磨难”来自 a cross to bear 这一固定表达，cross 单用不含“磨难”义，须与 bear 等连用。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/cross"},
      {"terms":["交叉的","相反的"],"decision":"scope-excluded","reason":"条目的形容词义指“横向的、相反的”，现代英语少用，本批只保留“生气的”这一形容词义，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/cross"}
    ]);
    entry("disappear", [
      ["vanish","消失；不见（从视野中）","v.",["消失","隐没"],["disappear-vanish"],"The ship disappeared behind the headland within minutes.","几分钟之内，那艘船就消失在岬角之后。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/disappear"],
      ["go-missing","（物品）不见了；丢失","v.",["不见","丢失"],["disappear-go-missing"],"Two files disappeared from the cabinet during the move.","搬家期间，柜子里有两份文件不见了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/disappear"]
    ]);
    entry("drift", [
      ["carried","漂流；飘荡","v.",["漂流","(使)漂流","飘"],["drift-carried"],"The empty boat drifted until it caught on the reeds.","空船漂流着，直到被芦苇挂住。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/drift"],
      ["aimless","漂泊；随波逐流","v.",["漂泊","随波逐流"],["drift-aimless"],"After the factory closed he drifted from one casual job to another.","工厂关门后，他从一份零工漂到另一份零工。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/drift"],
      ["trend","趋势；动向","n.",["动向","趋势"],["drift-trend"],"The drift of young families out of the town worries the council.","年轻家庭逐渐迁出小镇的趋势让议会担忧。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/drift"]
    ],
    [
      {"terms":["漂流物"],"decision":"scope-excluded","reason":"旧译“漂流物”对应 flotsam；条目中 drift 作名词指缓慢流动、吹积物或趋势，未单列“漂流物”，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/drift"}
    ]);
    entry("plunge", [
      ["dive","跳进；投入（水中）","v.",["跳进","跳水","钻进"],["plunge-dive"],"He plunged into the cold lake and swam straight for the far bank.","他跳进冰冷的湖水，径直向对岸游去。","plunge into sth","https://api.dictionaryapi.dev/api/v2/entries/en/plunge"],
      ["fall-sharply","暴跌；猛跌；下降","v.",["猛跌","下降","落下"],["plunge-fall"],"Oil prices plunged when the cartel failed to agree on cuts.","该卡特尔未能就减产达成一致，油价随即暴跌。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/plunge"],
      ["thrust","使插入；使投入；把…戳进","v.",["使投入","使插入","投入"],["plunge-thrust"],"She plunged the knife into the soil to test how wet it was.","她把刀插入土中，试探土的湿度。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/plunge"],
      ["commit","投身于；开始从事","v.",["开始从事","投身于","陷入"],["plunge-commit"],"After the divorce she plunged into charity work.","离婚后，她投身于慈善工作。","plunge into sth","https://api.dictionaryapi.dev/api/v2/entries/en/plunge"]
    ],
    [
      {"terms":["跳水池"],"decision":"restricted-verified","reason":"条目确有名词义“游泳池”，但属旧式或方言用法，现代英语通常说 swimming pool，故保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/plunge"},
      {"terms":["盲目投资","使陷入","使遭受"],"decision":"scope-excluded","reason":"旧译把 plunge 与其搭配 plunge into debt、plunge a nation into war 混为独立义项；条目中它们属“使陷入某种状态”的搭配用法，本批未单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/plunge"}
    ]);
    entry("bounce", [
      ["rebound","弹起；反弹","v.",["弹跳","反跳","使跳回","打回","弹起"],["bounce-rebound"],"The ball bounced twice on the pavement and rolled into the road.","球在人行道上弹了两下，滚进了马路。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bounce"],
      ["jump-up-down","蹦跳；上下跳动","v.",["跳","跳跃"],["bounce-jump"],"The child bounced on the bed until her father came in.","孩子在床上蹦个不停，直到父亲进来。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bounce"],
      ["elasticity","弹力；弹性","n.",["弹力","弹性"],["bounce-elasticity","elasticity"],"This old ball has lost most of its bounce.","这个旧球已经几乎没有弹性了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bounce"]
    ],
    [
      {"terms":["撞击"],"decision":"scope-excluded","reason":"旧译“撞击”对应 a heavy blow 的旧用名词义，条目中标为罕用，本批只保留弹跳与弹性义，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/bounce"}
    ]);
    entry("jump", [
      ["leap","跳；跳跃；跃过","v.",["跳跃","跃过","使跳跃","跳起"],["jump-leap-verb"],"The cat jumped from the table to the window sill without a sound.","猫从桌上无声地跳到窗台。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/jump"],
      ["rise-sharply","暴涨；突升；猛增","v.",["暴涨","突升","猛增"],["jump-rise-sharply"],"House prices in the village jumped by a fifth in one year.","一年之内，村里的房价暴涨了五分之一。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/jump"],
      ["startle","惊跳；吓了一跳","v.",["惊跳","受惊"],["jump-startle"],"I jumped when the phone rang right behind me.","电话就在我身后响起，我吓了一跳。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/jump"],
      ["leap-n","跳跃（一次跳的动作）","n.",["跳","跳跃（名词）"],["jump-leap-noun"],"A jump of two metres won him the event.","两米的跳跃成绩让他赢得了这个项目。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/jump"]
    ],
    [
      {"terms":["转移","跳转"],"decision":"restricted-verified","reason":"“转移、跳转”对应计算机程序中改变执行位置的 jump 指令，属技术领域用法，只在编程语境成立，故保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/jump"},
      {"terms":["跳动"],"decision":"scope-excluded","reason":"旧译“跳动”指心跳（heartbeat），条目中 jump 没有“有节律地跳动”义，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/jump"}
    ]);
    entry("bend", [
      ["curve","使弯曲；变弯曲；弯曲","v.",["使弯曲","变弯曲","弯曲"],["bend-curve-verb"],"He bent the wire into a hook and hung the pot on it.","他把铁丝弯成钩子，把锅挂上去。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bend"],
      ["submit","屈服；使屈服","v.",["屈服","使屈服"],["bend-submit"],"The council finally bent to pressure from residents.","议会最终屈服于居民的压力。","bend to sth","https://api.dictionaryapi.dev/api/v2/entries/en/bend"],
      ["curve-n","弯道；拐弯处","n.",["弯道","拐弯处"],["bend-curve-noun"],"There is a sharp bend after the second bridge.","过了第二座桥有一处急弯。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bend"]
    ]);
    entry("drag", [
      ["pull","拖；拉；拖曳","v.",["拖","拖拉","拉"],["drag-pull"],"They dragged the fallen branch off the path before dark.","天黑前，他们把倒下的树枝拖离小路。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/drag"],
      ["move-slowly","拖着脚步走；缓慢费力地移动","v.",["沉重缓慢地走","拖着走"],["drag-move-slowly"],"The last walkers dragged themselves up the final slope.","最后一批步行者拖着步子爬上最后一段坡。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/drag"],
      ["on-screen","拖动（屏幕上的对象）","v.",["拖动","拖拽"],["drag-on-screen"],"Drag the file into the folder and release the button.","把文件拖到文件夹里，然后松开鼠标键。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/drag"],
      ["nuisance","累赘；令人厌烦的事","n.",["拖累","累赘"],["drag-nuisance"],"Waiting in that queue every morning is a real drag.","每天早上排那个队真是件苦差事。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/drag"]
    ]);
    entry("bowl", [
      ["bowl-container","碗；碗状容器","n.",["碗","碗状容器","一碗的量"],["bowl-container"],"She filled a large bowl with tomatoes and carried it out to the garden.","她把一个大碗装满西红柿，端到花园里。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bowl"],
      ["lawn-bowls-game","草地滚球（运动）；木球（滚球用球）","n.",["滚木球","木球","草地滚球"],["lawn-bowls-sport"],"On Sunday mornings the retired men play bowls on the green behind the church.","每逢周日上午，那些退休老人就在教堂后面的草坪上打草地滚球。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bowl"],
      ["bowl-a-ball","投球（板球等）","v.",["投球","投出（球）"],["bowl-a-ball"],"She bowled six overs without conceding a single run.","她投了六轮球，一分未失。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bowl"],
      ["move-smoothly","（车辆等）平稳快速地行驶","v.",["快而稳地行驶","平稳疾驰"],["move-smoothly"],"The bus bowled along the empty coastal road well past midnight.","那辆巴士在空无一人的滨海公路上平稳疾驰，早过了午夜。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bowl"]
    ],
    [
      {"terms":["大酒杯"],"decision":"scope-excluded","reason":"旧译“大酒杯”是碗状大饮器的古旧说法（如 punch bowl），现代常用义已并入“碗、碗状容器”，故不单列学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/bowl"}
    ]);
    entry("oven", [
      ["oven-chamber","烤箱；烤炉","n.",["烤箱","烘箱","烤炉"],["oven-chamber"],"Heat the oven to two hundred degrees before you put the bread in.","把面包放进去之前，先把烤箱预热到两百度。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/oven"]
    ],
    [
      {"terms":["灶"],"decision":"scope-excluded","reason":"“灶”在英语中通常对应 stove 或 cooker；oven 指封闭的烘烤腔体，本次词条只列“烤箱”一义，故保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/oven"},
      {"terms":["子宫"],"decision":"scope-excluded","reason":"“子宫”是 oven 的古旧隐喻义（多见于宗教语体），现代常用词典不列此义，故不设学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/oven"}
    ]);
    entry("bell", [
      ["bell-instrument","铃；钟","n.",["铃","钟","铃铛"],["bell-instrument"],"A small brass bell hung above the shop door and rang whenever someone entered.","店门上方挂着一只小铜铃，有人进来时就会响。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bell"],
      ["bell-signal-sound","铃声；钟声（信号）","n.",["铃声","钟声","铃声信号"],["bell-signal-sound"],"At the first bell, the pupils packed their bags and headed for the yard.","第一遍铃声响起时，学生们收拾书包，朝操场走去。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bell"],
      ["bell-shaped-object","钟状物；（乐器的）喇叭口","n.",["钟状物","喇叭口","钟形部分"],["bell-shaped-object"],"The bell of the trumpet was badly dented after the fall.","小号落地后，喇叭口被撞得很厉害。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bell"],
      ["attach-bell","给…装铃；系上铃铛","v.",["给…装铃","系铃铛于"],["attach-bell"],"The shepherd bells his oldest goat so the flock is easier to find.","牧羊人给最老的那只山羊系上铃铛，这样羊群更容易找到。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bell"]
    ]);
    entry("iron", [
      ["iron-metal","铁","n.",["铁","铁质","铁料"],["iron-metal"],"The old gate was made of iron and had rusted through in two places.","那扇旧大门是铁制的，已经有两处锈穿了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/iron"],
      ["iron-appliance","熨斗；熨烫（衣物）","n./v.",["熨斗","烙铁","熨","烫平"],["clothes-iron","press-clothes"],"She ironed his shirt on the kitchen table while the soup was heating.","汤在加热的时候，她在厨房桌上熨他的衬衫。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/iron"],
      ["irons-shackles","镣铐","n.",["镣铐","脚镣"],["shackles"],"The prisoners shuffled into the yard with irons still locked around their ankles.","囚犯们拖着脚走进院子，脚踝上仍锁着镣铐。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/iron"],
      ["iron-firm","坚强的；强硬的","adj.",["坚强","刚强","不可动摇","铁腕的"],["unyielding-firm"],"Her iron will kept the team going through the worst months of the project.","她坚强的意志支撑团队度过了项目最艰难的几个月。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/iron"]
    ],
    [
      {"terms":["铁器"],"decision":"restricted-verified","reason":"旧译“铁器”是铁制品的统称，现代词典的常用名词义为金属铁、熨斗、镣铐等，故保留追溯而不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/iron"},
      {"terms":["用铁包"],"decision":"scope-excluded","reason":"“用铁包”对应 iron 作动词的“给…装上铁件”古旧义（to iron a wagon），现代英语已不用，仅保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/iron"}
    ]);
    entry("metal", [
      ["metal-material","金属","n.",["金属","金属材料"],["metal-material"],"The frame is made of light metal, so the whole chair weighs under three kilos.","框架用轻金属制成，因此整把椅子不到三公斤。",null,"https://www.vocabulary.com/dictionary/metal"],
      ["metal-alloy","合金","n.",["合金","金属混合物"],["metal-alloy"],"The smith mixed copper with tin to produce a metal hard enough for blades.","铁匠把铜和锡熔合，制出一种硬度足以做刀刃的合金。",null,"https://www.vocabulary.com/dictionary/metal"],
      ["made-of-metal","金属制的","adj.",["金属制的","金属质地的","金属做的"],["made-of-metal"],"A metal ladder stood against the wall of the barn, slick with rain.","一架金属梯子靠在谷仓墙上，被雨淋得湿滑。",null,"https://www.vocabulary.com/dictionary/metal"],
      ["cover-with-metal","以金属覆盖；用碎石铺（路）","v.",["以金属覆盖","用碎石铺路","铺碎石"],["cover-with-metal"],"The council metalled the lane so that farm vehicles could use it in winter.","市政部门给这条小路铺上了碎石，好让农用车在冬天也能通行。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/metal"]
    ],
    [
      {"terms":["金属制品"],"decision":"scope-excluded","reason":"“金属制品”在英语中通常说 metalwork 或 metalware，不是 metal 的独立义项，故保留追溯。","source":"https://www.vocabulary.com/dictionary/metal"},
      {"terms":["本质","质料"],"decision":"restricted-verified","reason":"该义为 metal 的古旧用法，相当于 substance 或 matter（“质料、本质”），现代英语已改用 mettle 拼写，故不设学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/metal"}
    ]);
    entry("cord", [
      ["thin-rope","细绳；绳索；绳带","n.",["细绳","绳索","绳子","绳带","带"],["thin-twisted-rope"],"The curtains were held open with a thin cord tied to a brass hook.","窗帘是用一根系在黄铜钩上的细绳撑开的。",null,"https://www.vocabulary.com/dictionary/cord"],
      ["power-lead","电线；电源线","n.",["电线","电源线","软电线","电缆线"],["insulated-electrical-cord"],"Check the lamp's cord for cracks before you plug it into the socket.","把灯插进插座之前，先检查一下它的电线有没有裂口。",null,"https://www.vocabulary.com/dictionary/cord"],
      ["anatomical-strand","（脊髓、声带等的）索状结构","n.",["索","索状组织","神经索","腱索"],["cordlike-anatomical-structure"],"The surgeon warned that the vocal cords could be damaged during the operation.","外科医生提醒说，手术过程中声带可能会受损。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cord"],
      ["bond-tie","束缚；羁绊；纽带","n.",["束缚","羁绊","纽带","情感联系"],["emotional-bond-restraint"],"The old letters were a cord that still tied her to a childhood she hardly remembered.","那些旧信是一条绳索，仍把她与一个她几乎记不清的童年连在一起。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cord"]
    ]);
    entry("fence", [
      ["barrier-enclosure","栅栏；围栏；篱笆","n.",["栅栏","围栏","篱笆","围墙","木栅"],["barrier-enclosure"],"A low wooden fence separates the vegetable garden from the neighbour's field.","一道低矮的木栅栏把菜园和邻居的田地隔开。",null,"https://www.vocabulary.com/dictionary/fence"],
      ["enclose-with-fence","用栅栏围住；圈起","v.",["用篱笆围住","用栅栏围起","围起来","圈起"],["enclose-with-barrier"],"Farmers fence the new orchard to keep deer away from the young trees.","农场主把新果园围起来，防止鹿啃食幼树。","fence sth in/off","https://www.vocabulary.com/dictionary/fence"],
      ["sword-sport","击剑；练习剑术","v.",["击剑","练习剑术","从事击剑","剑术"],["fencing-sport"],"She fences twice a week at a club that trains Olympic hopefuls.","她每周在一家培养奥运苗子的俱乐部练两次击剑。",null,"https://www.vocabulary.com/dictionary/fence"],
      ["stolen-goods-dealer","买卖赃物的人；收赃者","n.",["买卖赃物的人","收赃人","销赃者","赃物中间人"],["dealer-in-stolen-goods"],"Police suspected that the antique dealer was a fence for stolen jewellery.","警方怀疑那名古董商是收购被盗珠宝的中间人。",null,"https://www.vocabulary.com/dictionary/fence"]
    ],
    [
      {"terms":["防护"],"decision":"scope-excluded","reason":"旧译'防护'来自 fence 作 defend or guard 的古旧用法，现代常用词典已不单列该义，表示防护一般用 protect。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/fence"},
      {"terms":["搪塞"],"decision":"context-required","reason":"'搪塞'只出现在 fence with a question 这类固定搭配里表示含糊回避，脱离该搭配不能独立成义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/fence"}
    ]);
    entry("garbage", [
      ["discarded-waste","垃圾；废物","n.",["垃圾","废物","废弃物","生活垃圾"],["discarded-waste"],"Residents complained that garbage had not been collected from their street for two weeks.","居民抱怨说，他们那条街的垃圾已经两周没人收了。",null,"https://www.vocabulary.com/dictionary/garbage"],
      ["worthless-nonsense","废话；无用信息","n.",["无用信息","废话","胡言乱语","无价值的内容"],["worthless-information"],"Most of what that website publishes is garbage dressed up as scientific research.","那家网站发布的内容大多是被包装成科学研究的废话。",null,"https://www.vocabulary.com/dictionary/garbage"],
      ["waste-receptacle","垃圾桶；垃圾箱","n.",["垃圾桶","垃圾箱","废物桶"],["waste-receptacle"],"He scraped the burnt toast straight into the garbage without saying a word.","他一声不响地把烤焦的面包刮进垃圾桶。",null,"https://www.vocabulary.com/dictionary/garbage"]
    ]);
    entry("tub", [
      ["bathtub","浴缸；浴盆","n.",["浴盆","浴缸","洗澡盆"],["bathtub"],"The children filled the tub with warm water and bubbles after playing outside.","孩子们在外面玩过之后，把浴缸放满了温水和泡泡。",null,"https://www.vocabulary.com/dictionary/tub"],
      ["open-vessel","桶；盆；大容器","n.",["桶","盆","大容器","木盆"],["open-container"],"She bought a large tub of ice cream for the birthday party on Saturday.","她为周六的生日聚会买了一大桶冰淇淋。",null,"https://www.vocabulary.com/dictionary/tub"],
      ["bathe-in-tub","洗澡；洗盆浴","v.",["洗澡","洗盆浴","沐浴","盆浴"],["bathe-in-tub"],"On winter evenings the boys would tub in the same lukewarm water.","冬天的晚上，男孩们就用同一盆温水洗澡。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tub"],
      ["store-in-tub","把…装入桶；用桶盛装","v.",["装入桶","装桶","盛在桶里","用桶装"],["store-in-tub"],"Workers tub the freshly picked olives in brine before they are shipped.","工人们把刚摘下的橄榄装进盐水桶里，然后再运出去。","tub sth in sth","https://api.dictionaryapi.dev/api/v2/entries/en/tub"]
    ],
    [
      {"terms":["被放在桶里洗"],"decision":"scope-excluded","reason":"旧译'被放在桶里洗'把 tub 当成'洗涤'的被动式，词典中 tub 作动词只表示在浴盆中洗澡或把东西装入桶。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/tub"}
    ]);
    entry("mill", [
      ["grain-mill","磨坊；面粉厂","n.",["磨坊","磨粉厂","面粉厂","碾磨厂"],["grain-grinding-mill"],"The old water mill beside the river still grinds wheat for local bakers.","河边那座老旧的水磨坊仍在为当地面包师磨小麦。",null,"https://www.vocabulary.com/dictionary/mill"],
      ["manufacturing-plant","制造厂；工厂","n.",["制造厂","工厂","加工厂"],["manufacturing-plant"],"Hundreds of workers lost their jobs when the steel mill closed last winter.","去年冬天那家钢厂关闭时，数百名工人失业。",null,"https://www.vocabulary.com/dictionary/mill"],
      ["grind-to-powder","碾磨；磨碎","v.",["碾磨","磨细","磨碎","碾碎"],["grind-to-powder"],"Workers mill the roasted beans into a fine powder before packing them.","工人把烘焙过的豆子磨成细粉，然后再包装。",null,"https://www.vocabulary.com/dictionary/mill"],
      ["move-aimlessly","乱转；无目的地走动","v.",["乱转","转悠","来回走动","无目的地走动","使乱转"],["move-aimlessly"],"After the concert, fans milled around the stage hoping to meet the band.","音乐会结束后，歌迷们在舞台周围转来转去，希望能见到乐队。","mill around/about","https://www.vocabulary.com/dictionary/mill"]
    ],
    [
      {"terms":["压榨机"],"decision":"restricted-verified","reason":"'压榨机'只对应 cider mill、cane mill 这类榨取果汁的专用设备，属受限的行业用法而非通用义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/mill"},
      {"terms":["搅拌"],"decision":"scope-excluded","reason":"mill 不表示'搅拌'，现代词典所列动词义为碾磨、轧制或乱转，'搅拌'应当用 stir 或 mix。","source":"https://www.vocabulary.com/dictionary/mill"},
      {"terms":["被碾磨"],"decision":"context-required","reason":"'被碾磨'只是碾磨义项的被动语态形式，必须与具体受事搭配，不能单独列为一个义项。","source":"https://www.vocabulary.com/dictionary/mill"}
    ]);
    entry("food", [
      ["nourishing-substance","食物；食品","n.",["食物","食品","吃的东西","饭食"],["nourishing-substance"],"The shelter provides hot food and a bed for anyone who arrives before midnight.","收容所为午夜前到来的任何人提供热饭和床位。",null,"https://www.vocabulary.com/dictionary/food"],
      ["nutrient-nourishment","养料；养分","n.",["养料","养分","营养物","滋养物"],["nutrient-nourishment"],"Young plants draw food from the soil through a network of fine roots.","幼苗通过细密的根系从土壤中吸取养料。",null,"https://www.vocabulary.com/dictionary/food"],
      ["mental-stimulus","精神食粮；思考素材","n.",["精神食粮","思考素材","思想养料","值得思考的东西"],["food-for-thought"],"The lecture gave the audience plenty of food for thought about urban design.","这场讲座让听众对城市设计有了许多值得思考的东西。","food for thought","https://www.vocabulary.com/dictionary/food"]
    ]);
    entry("restaurant", [
      ["eating-establishment","餐馆；饭店；餐厅","n.",["餐馆","饭店","餐厅","饮食店"],["eating-establishment"],"We booked a table at a small Italian restaurant two streets from the station.","我们在离车站两条街的一家意大利小餐馆订了桌。",null,"https://www.vocabulary.com/dictionary/restaurant"]
    ]);
    entry("salt", [
      ["seasoning","盐；食盐","n.",["盐","食盐","氯化钠"],["sodium-chloride"],"Too much salt in processed meals raises blood pressure and strains the heart.","加工食品中盐分过多会使血压升高，加重心脏负担。",null,"https://www.vocabulary.com/dictionary/salt"],
      ["add-or-preserve","加盐于；用盐腌","v.",["加盐于","用盐腌","撒盐","腌制"],["salt-food"],"Fishermen once salted cod on deck to keep it edible for months.","过去渔民在甲板上把鳕鱼腌起来，好让它能保存数月。","salt sth","https://www.vocabulary.com/dictionary/salt"],
      ["containing-salt","含盐的；咸的","adj.",["含盐的","咸的","盐腌的","盐味的"],["containing-salt"],"The marsh is fed by salt water that seeps in with every high tide.","这片沼泽靠每次涨潮时渗进来的咸水补给。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/salt"],
      ["add-liveliness","给…增添风趣；使生动","v.",["增添风趣","使生动","使更有趣","加点趣味"],["add-zest-liveliness"],"Good speakers salt their talks with stories that keep the audience awake.","优秀的演讲者会用故事给演讲增添趣味，让听众不打瞌睡。","salt sth with sth","https://www.vocabulary.com/dictionary/salt"]
    ],
    [
      {"terms":["风趣","刺激"],"decision":"context-required","reason":"'风趣；刺激'只见于 Attic salt 一类书面固定说法，独立的名词义在现代英语中已很少使用。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/salt"},
      {"terms":["风趣的","辛辣的"],"decision":"scope-excluded","reason":"旧词典把 salt 的形容词义训为'风趣的、辛辣的'，现代常用词典只保留'含盐的、腌制的'，其余属古旧书面用法。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/salt"}
    ]);
    entry("sweet", [
      ["sugary-taste","甜的；含糖的","adj.",["甜的","甜味的","含糖的","甜丝丝的"],["sugary-taste"],"The ripe mangoes were so sweet that we ate three of them at once.","那些熟芒果太甜了，我们一口气吃了三个。",null,"https://www.vocabulary.com/dictionary/sweet"],
      ["kind-gentle","和蔼的；体贴的；可爱的","adj.",["和蔼的","温柔的","体贴的","可爱的","讨人喜欢的"],["kind-gentle"],"It was sweet of your brother to drive us all the way to the airport.","你哥哥真好，一路开车把我们送到机场。","it is sweet of sb to do sth","https://www.vocabulary.com/dictionary/sweet"],
      ["pleasing-to-senses","悦耳的；芳香的","adj.",["悦耳的","动听的","芳香的","好闻的"],["pleasing-to-senses"],"A sweet smell of jasmine drifted through the open window all evening.","整个晚上，一股茉莉花的芳香从敞开的窗户飘进来。",null,"https://www.vocabulary.com/dictionary/sweet"],
      ["confection-dessert","糖果；甜食；甜点","n.",["糖果","甜食","甜点","蜜饯"],["confection-dessert"],"The shop sells sweets, biscuits and other treats to children on their way home.","这家店向放学回家的孩子出售糖果、饼干和其他零食。",null,"https://www.vocabulary.com/dictionary/sweet"]
    ],
    [
      {"terms":["甜蜜"],"decision":"scope-excluded","reason":"旧译'甜蜜'实为名词 sweetness 的意思，sweet 在现代英语中很少单独作名词表示'甜蜜'。","source":"https://www.vocabulary.com/dictionary/sweet"},
      {"terms":["情人"],"decision":"scope-excluded","reason":"'情人'是 sweetheart 的旧式称呼，现代口语已改用 sweetheart、honey 等词，sweet 单用不再指情人。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/sweet"},
      {"terms":["漂亮的"],"decision":"scope-excluded","reason":"'漂亮的'对应词典标注为文学古旧的 pleasing to the eye 用法，现代口语不用 sweet 形容外貌。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/sweet"},
      {"terms":["不咸的"],"decision":"restricted-verified","reason":"'不咸的'只用于 sweet water、sweet butter 这类固定搭配，分别指淡水和不咸的黄油。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/sweet"},
      {"terms":["灵活的","轻快的"],"decision":"scope-excluded","reason":"旧英汉词典把 sweet 的引申义误收为'灵活的、轻快的'，现代词典并没有这两个独立义项。","source":"https://www.vocabulary.com/dictionary/sweet"}
    ]);
    entry("corn", [
      ["corn-maize-crop","玉米；玉蜀黍","n.",["玉蜀黍","苞米","包谷"],["corn-maize-plant"],"Farmers in the region harvest corn in late September, when the ears are heavy and the stalks have dried.","该地区的农民在九月下旬收割玉米，那时玉米穗沉甸甸的，玉米秆也已经干枯。",null,"https://www.vocabulary.com/dictionary/corn"],
      ["corn-grain-kernel","谷物；谷粒","n.",["谷粒","谷类","玉米粒"],["corn-grain-kernel"],"A handful of corn is enough to feed the hens before they are let out of the coop.","一把谷粒就够在把母鸡放出鸡舍之前喂饱它们了。",null,"https://www.vocabulary.com/dictionary/corn"],
      ["corn-foot-callus","鸡眼；胼胝","n.",["鸡眼","胼胝","老茧"],["foot-corn-callus"],"Tight shoes gave him a painful corn on his little toe, so he switched to wider ones.","过紧的鞋子使他小脚趾上长了疼痛的鸡眼，于是他换成了更宽松的鞋。",null,"https://www.vocabulary.com/dictionary/corn"],
      ["corn-preserve-salt","用盐腌制","v.",["腌","腌制","盐渍"],["corn-preserve-with-salt"],"Butchers here corn the beef for a week before slicing it thinly for sandwiches.","这里的肉贩把牛肉用盐腌制一周，然后再切成薄片做三明治。","corn sth","https://www.vocabulary.com/dictionary/corn"]
    ],
    [
      {"terms":["使成颗粒"],"decision":"scope-excluded","reason":"该义指火药等物料造粒的罕用动词用法，词典页面未收，且与本词条饮食义无关。","source":"https://www.vocabulary.com/dictionary/corn"}
    ]);
    entry("hamburger", [
      ["hamburger-sandwich","汉堡包","n.",["汉堡","汉堡包","牛肉汉堡"],["hamburger-beef-sandwich"],"She ordered a hamburger with extra pickles and ate it while waiting for the bus.","她点了一个加双份酸黄瓜的汉堡包，边等公共汽车边吃。",null,"https://www.vocabulary.com/dictionary/hamburger"],
      ["hamburger-ground-beef","碎牛肉；牛肉馅","n.",["肉饼","纯精牛肉","汉堡牛排"],["ground-beef-patty"],"The recipe asks for two pounds of hamburger, browned slowly with onions and garlic.","这道菜谱需要两磅碎牛肉，配上洋葱和大蒜慢慢煸炒至变色。",null,"https://www.vocabulary.com/dictionary/hamburger"]
    ],
    [
      {"terms":["汉堡(德国港口)"],"decision":"scope-excluded","reason":"此处指德国城市汉堡，属专有地名而非 hamburger 的词义，超出本词条收录范围。","source":"https://www.vocabulary.com/dictionary/hamburger"}
    ]);
    entry("bean", [
      ["bean-edible-seed","豆；豆子","n.",["豆","豆子","豆类"],["bean-edible-seed"],"Soak the beans overnight so they cook faster in the stew tomorrow.","把豆子浸泡一夜，这样明天炖的时候更容易煮烂。",null,"https://www.vocabulary.com/dictionary/bean"],
      ["bean-legume-plant","豆科植物；豆秧","n.",["豆科植物","豆秧","豆棵"],["bean-legume-plant"],"Bean plants fix nitrogen in the soil, which helps the next crop grow.","豆科植物能把氮固定在土壤中，这有助于下一茬作物生长。",null,"https://www.vocabulary.com/dictionary/bean"],
      ["bean-head-slang","脑袋（俚语）","n.",["脑袋","头","脑壳"],["bean-head-slang"],"He banged his bean on the low beam and saw stars for a minute.","他的脑袋撞到了低矮的横梁上，眼前冒了一分钟的金星。",null,"https://www.vocabulary.com/dictionary/bean"]
    ],
    [
      {"terms":["油嘴"],"decision":"scope-excluded","reason":"“油嘴”与 bean 任何已核实义项都不对应，疑为旧版教材误译，故予排除。","source":"https://www.vocabulary.com/dictionary/bean"}
    ]);
    entry("alcohol", [
      ["alcohol-ethanol","酒精；乙醇","n.",["酒精","乙醇"],["alcohol-ethanol"],"The label warns that the hand gel contains seventy percent alcohol by volume.","标签上提示，这款免洗手凝胶的酒精含量按体积计为百分之七十。",null,"https://www.vocabulary.com/dictionary/alcohol"],
      ["alcohol-chemical-compounds","醇；醇类化合物","n.",["醇","醇类","醇类化合物"],["alcohol-chemical-compound"],"Chemists classify this alcohol as a diol because each molecule carries two hydroxyl groups.","化学家把这种醇归为二醇，因为它的每个分子都带有两个羟基。",null,"https://www.vocabulary.com/dictionary/alcohol"],
      ["alcohol-beverage","酒；含酒精饮料","n.",["酒","酒精饮料","烈酒"],["alcohol-beverage"],"He gave up alcohol completely after his doctor warned him about his liver.","医生就他的肝脏提出警告后，他就彻底戒酒了。",null,"https://www.vocabulary.com/dictionary/alcohol"]
    ]);
    entry("cigar", [
      ["cigar-tobacco-roll","雪茄","n.",["雪茄","雪茄烟","雪茄卷烟"],["cigar-tobacco-roll"],"An old man sat on the porch, smoking a cigar and watching the river.","一位老人坐在门廊上抽着雪茄，望着河水。",null,"https://www.vocabulary.com/dictionary/cigar"]
    ]);
    entry("cafeteria", [
      ["cafeteria-self-service","自助餐厅；自助食堂","n.",["自助餐厅","自助食堂","员工餐厅"],["cafeteria-self-service-restaurant"],"Students queue in the cafeteria at noon and carry their trays to the tables.","中午学生们在自助食堂排队，然后把餐盘端到餐桌旁。",null,"https://www.vocabulary.com/dictionary/cafeteria"]
    ]);
    entry("skill", [
      ["skill-learned-ability","技能；技巧","n.",["技巧","技能","技术","本领"],["skill-learned-ability"],"Learning to repair a bicycle is a practical skill that saves money.","学会修自行车是一项实用的技能，还能省钱。",null,"https://www.vocabulary.com/dictionary/skill"],
      ["skill-problem-solving","（专业领域的）本领；技艺","n.",["技艺","专业本领","解决问题的能力"],["skill-domain-ability"],"Her skill in negotiating contracts made her invaluable to the small firm.","她在合同谈判方面的本领使她对这家小公司来说不可或缺。","skill in sth / skill in doing sth","https://www.vocabulary.com/dictionary/skill"]
    ],
    [
      {"terms":["熟练","熟练工人"],"decision":"scope-excluded","reason":"“熟练”是形容词性用法（skilled），“熟练工人”对应 skilled worker 这一派生短语，均非 skill 的名词义项。","source":"https://www.vocabulary.com/dictionary/skill"}
    ]);
    entry("smart", [
      ["smart-quick-learning","聪明的；伶俐的","adj.",["聪明的","伶俐的","聪慧的"],["smart-quick-learning"],"The smart children in her class finished the puzzle long before the others.","她班上那些聪明的孩子远比其他孩子更早拼完拼图。",null,"https://www.vocabulary.com/dictionary/smart"],
      ["smart-shrewd","精明的；巧妙的","adj.",["精明的","巧妙的","有头脑的"],["smart-shrewd-resourceful"],"It was a smart move to buy the tickets early, before prices doubled.","在票价翻倍之前提前买票是个精明的举动。",null,"https://www.vocabulary.com/dictionary/smart"],
      ["smart-stylish","漂亮的；时髦的","adj.",["漂亮的","时髦的","潇洒的"],["smart-stylish-elegant"],"He wore a smart grey suit to the interview and looked far more confident.","他穿着一套漂亮的灰色西装去面试，看上去自信多了。",null,"https://www.vocabulary.com/dictionary/smart"],
      ["smart-sting-pain","刺痛；火辣辣地疼","v.",["刺痛","刺痛的","火辣辣地疼"],["smart-sting-pain"],"The cut on my thumb began to smart when I rinsed it under the tap.","当我用自来水冲洗拇指上的伤口时，它开始刺痛起来。",null,"https://www.vocabulary.com/dictionary/smart"]
    ],
    [
      {"terms":["敏捷的","剧烈的"],"decision":"context-required","reason":"“敏捷的”只见于 smart pace、smart salute 等固定搭配，“剧烈的”限于 a smart blow，独立义项不常用，故不单列。","source":"https://www.vocabulary.com/dictionary/smart"},
      {"terms":["痛苦"],"decision":"scope-excluded","reason":"“痛苦”是 smart 已废弃的名词义（a smart 指一阵疼痛），当代词典页面只收动词，属过时用法。","source":"https://www.vocabulary.com/dictionary/smart"}
    ]);
    entry("method", [
      ["method-systematic-way","方法；办法","n.",["方法","办法","法"],["method-systematic-way"],"The team tested a new method for measuring air quality in crowded stations.","该团队试验了一种测量拥挤车站空气质量的新方法。","a method of / for doing sth","https://www.vocabulary.com/dictionary/method"],
      ["method-acting","方法派表演（体验派演技）","n.",["方法派表演","体验派表演","方法派演技"],["method-acting-technique"],"Young actors here train in the method, drawing on their own memories for each role.","这里的年轻演员学习方法派表演，为每个角色调动自身的记忆。","the method","https://www.vocabulary.com/dictionary/method"]
    ],
    [
      {"terms":["条理","秩序"],"decision":"scope-excluded","reason":"“条理、秩序”是 method 的书面语引申义，本词条词典页面已不单列，且与核心义项重复，暂不收录。","source":"https://www.vocabulary.com/dictionary/method"}
    ]);
    entry("subject", [
      ["subject-topic","主题；话题","n.",["主题","话题","议题","题材"],["subject-topic-theme"],"The lecturer changed the subject when a student asked about the recent scandal.","当一名学生问起最近的丑闻时，讲师转换了话题。",null,"https://www.vocabulary.com/dictionary/subject"],
      ["subject-school-discipline","学科；科目","n.",["学科","科目","专业","课程"],["subject-branch-of-knowledge"],"Biology is her favourite subject because the lessons include frequent field trips.","生物是她最喜欢的科目，因为课程中常有野外考察。",null,"https://www.vocabulary.com/dictionary/subject"],
      ["subject-grammar","主语","n.",["主语","主词"],["subject-grammatical-constituent"],"In the sentence 'the old bridge collapsed', the old bridge is the subject.","在句子“那座旧桥坍塌了”中，“那座旧桥”是主语。",null,"https://www.vocabulary.com/dictionary/subject"],
      ["subject-expose-suffer","使遭受；使服从","v.",["使遭受","使服从","使经受","使屈从"],["subject-cause-to-experience"],"The new regulations subject every applicant to a lengthy security check.","新规定使每位申请人都要接受漫长的安全检查。","subject sb/sth to sth","https://www.vocabulary.com/dictionary/subject"]
    ],
    [
      {"terms":["对象","受试者"],"decision":"restricted-verified","reason":"“对象”指绘画或摄影的取景对象，“受试者”指实验研究的受试人员，两者都受具体领域语境限制，故不单列义项。","source":"https://www.vocabulary.com/dictionary/subject"},
      {"terms":["臣民"],"decision":"restricted-verified","reason":"“臣民”只用于君主制语境，指君主统治下的国民，属受限的历史政治用法，未列入通用义项。","source":"https://www.vocabulary.com/dictionary/subject"},
      {"terms":["受支配的"],"decision":"restricted-verified","reason":"“受支配的”仅作定语修饰被统治的民族或地区（如 subject peoples），使用范围狭窄，故不单列。","source":"https://www.vocabulary.com/dictionary/subject"},
      {"terms":["易受影响的","取决于的"],"decision":"context-required","reason":"“易受影响的、取决于的”只在 be subject to 这一固定结构中成立，脱离该搭配不能独立成义，故并入搭配说明。","source":"https://www.vocabulary.com/dictionary/subject"}
    ]);
    entry("course", [
      ["course-educational-program","课程","n.",["课程","教程","课"],["course-educational-program"],"She enrolled in a six-week course on data analysis at the local college.","她在当地学院报名了一门为期六周的数据分析课程。","a course in/on sth","https://www.vocabulary.com/dictionary/course"],
      ["course-route-direction","路线；道路","n.",["路线","道路","航道","走向"],["course-route-direction"],"The sailors adjusted their course to avoid the shallow water near the reef.","水手们调整了航线，以避开礁石附近的浅水区。",null,"https://www.vocabulary.com/dictionary/course"],
      ["course-process","过程；进程","n.",["过程","进程","历程"],["course-process-development"],"Historians studied how the course of the war changed ordinary people's lives.","历史学家研究了战争进程如何改变了普通人的生活。","in the course of sth","https://www.vocabulary.com/dictionary/course"],
      ["course-dish","一道菜","n.",["一道菜","菜","菜肴"],["course-meal-dish"],"The waiter brought the main course, a rich lamb stew with herbs.","服务员端上了主菜——一道香草炖羊肉。",null,"https://www.vocabulary.com/dictionary/course"]
    ],
    [
      {"terms":["追"],"decision":"scope-excluded","reason":"“追”指带猎犬追猎野兔的古老动词用法，现代英语已极少使用，超出本词条学校语境范围。","source":"https://www.vocabulary.com/dictionary/course"},
      {"terms":["(使)跑"],"decision":"scope-excluded","reason":"“(使)跑”把 course 表示液体奔流的动词义误作及物使役用法，属旧版教材的错误对译。","source":"https://www.vocabulary.com/dictionary/course"}
    ]);
    entry("lesson", [
      ["lesson-class-period","课；一节课","n.",["课","课时","一堂课","课程"],["lesson-class-session"],"Our first lesson on Monday morning is chemistry, followed by two hours of maths.","我们周一上午的第一节课是化学，接下来是两小时数学。",null,"https://www.vocabulary.com/dictionary/lesson"],
      ["lesson-moral","教训；鉴戒","n.",["教训","鉴戒","警示"],["lesson-moral-teaching"],"Losing that contract taught him a lesson about reading the small print.","丢掉那份合同让他吸取了教训：要仔细阅读细则。","teach sb a lesson","https://www.vocabulary.com/dictionary/lesson"],
      ["lesson-study-task","课业；功课","n.",["课业","功课","作业"],["lesson-assigned-study-task"],"Her piano teacher sets a new lesson each week for her to master alone.","她的钢琴老师每周布置一份新功课让她独立掌握。",null,"https://www.vocabulary.com/dictionary/lesson"]
    ]);
    entry("practice", [
      ["practice-repeated-exercise","练习；训练","n.",["练习","训练","排练"],["practice-repeated-exercise"],"Daily practice at the piano improved her timing and confidence within months.","每天练钢琴使她的节奏感和自信心在几个月内都有提高。",null,"https://www.vocabulary.com/dictionary/practice"],
      ["practice-custom-habit","惯例；习惯做法","n.",["惯例","习惯","常规","习俗"],["practice-customary-behavior"],"It is common practice in this office to answer emails before nine o'clock.","在这个办公室，九点前回复邮件是常见的惯例。","it is common/standard practice to do sth","https://www.vocabulary.com/dictionary/practice"],
      ["practice-profession","开业；业务；执业","n.",["开业","业务","执业","事务所"],["practice-professional-work"],"After ten years in a large firm, she started her own legal practice.","在一家大公司工作十年后，她开办了自己的律师事务所。",null,"https://www.vocabulary.com/dictionary/practice"],
      ["practice-action-versus-theory","实践；实行","n.",["实践","实行","实际行动"],["practice-action-versus-theory"],"The plan looks elegant on paper, but in practice it wastes both time and money.","这个计划在纸面上看起来很不错，但实践中既浪费时间又浪费金钱。","in practice","https://www.vocabulary.com/dictionary/practice"]
    ],
    [
      {"terms":["实习"],"decision":"restricted-verified","reason":"“实习”只出现在 teaching practice、clinical practice 等教育或医疗专业语境中，指有指导的岗位实践，故不单列。","source":"https://www.vocabulary.com/dictionary/practice"}
    ]);
    entry("paper", [
      ["paper-material","纸；纸张","n.",["纸","纸张","纸制品"],["paper-cellulose-material"],"The printer jammed because a sheet of paper was stuck behind the roller.","打印机卡住了，因为有一张纸卡在滚筒后面。",null,"https://www.vocabulary.com/dictionary/paper"],
      ["paper-newspaper","报纸","n.",["报纸","报章"],["paper-newspaper-publication"],"He reads the local paper every morning to check the football results.","他每天早晨看当地报纸，查看足球比赛结果。",null,"https://www.vocabulary.com/dictionary/paper"],
      ["paper-essay","文章；论文","n.",["文章","论文","报告","作业"],["paper-written-essay"],"Her term paper examined how coastal cities adapt to rising sea levels.","她的学期论文探讨了沿海城市如何适应海平面上升。",null,"https://www.vocabulary.com/dictionary/paper"],
      ["paper-wallpaper-verb","贴壁纸；糊纸","v.",["贴壁纸","贴壁纸于","用纸糊","糊纸"],["paper-cover-with-wallpaper"],"They decided to paper the bedroom themselves instead of hiring a decorator.","他们决定自己给卧室贴壁纸，而不是雇装修工。","paper sth","https://www.vocabulary.com/dictionary/paper"]
    ],
    [
      {"terms":["文件","证件"],"decision":"context-required","reason":"“文件、证件”须用复数 papers，并出现在 travel papers、identity papers 等搭配中，单数 paper 并无此义。","source":"https://www.vocabulary.com/dictionary/paper"},
      {"terms":["证券"],"decision":"restricted-verified","reason":"“证券”只用于 commercial paper、negotiable paper 等金融术语，指可流通的票据，属受限的专业用法。","source":"https://www.vocabulary.com/dictionary/paper"},
      {"terms":["用纸包装"],"decision":"scope-excluded","reason":"“用纸包装”是 paper 的临时动词用法，词典页面只收“覆盖纸张、贴壁纸”两个动词义，故不单列。","source":"https://www.vocabulary.com/dictionary/paper"},
      {"terms":["纸做的","纸上的"],"decision":"scope-excluded","reason":"“纸做的、纸上的”是名词作定语的临时组合（如 paper bag、paper profits），并非独立的形容词义项。","source":"https://www.vocabulary.com/dictionary/paper"}
    ]);
    entry("knowledge", [
      ["knowledge-learning","知识；学问","n.",["知识","学问","学识","见闻"],["knowledge-learned-information","scholarly-knowledge"],"Her knowledge of local plants helped the team identify edible roots during the hike.","她对当地植物的了解帮助团队在徒步途中辨认出可食用的根茎。",null,"https://www.vocabulary.com/dictionary/knowledge"],
      ["knowledge-awareness","认识；知晓","n.",["认识","知道","知晓","了解"],["knowledge-awareness-of-fact"],"To my knowledge, no one has yet tested this method on a large scale.","据我所知，还没有人在大规模范围内检验过这种方法。","to my knowledge","https://www.vocabulary.com/dictionary/knowledge"]
    ]);
    entry("principle", [
      ["principle-guiding-rule","原则；准则","n.",["原则","准则","信条","道义"],["principle-guiding-rule"],"She refused the offer on principle, even though it would have doubled her salary.","尽管这份工作能让她的薪水翻倍，她还是出于原则拒绝了。","on principle","https://www.vocabulary.com/dictionary/principle"],
      ["principle-scientific-law","原理；定律","n.",["原理","定律","法则"],["principle-scientific-law"],"The device works on the same principle as a bicycle pump.","这个装置的工作原理与自行车打气筒相同。","on the principle that","https://www.vocabulary.com/dictionary/principle"]
    ],
    [
      {"terms":["主义"],"decision":"scope-excluded","reason":"“主义”通常对应 -ism 后缀（如 socialism），旧版教材把 principle 与 doctrine 混同，属错误对译。","source":"https://www.vocabulary.com/dictionary/principle"}
    ]);
    entry("daily", [
      ["daily-every-day","每日的；每天的","adj.",["每日的","每天的","天天的"],["daily-occurring-each-day"],"A daily walk of thirty minutes keeps her joints flexible and her mood steady.","每天散步三十分钟能让她的关节保持灵活、情绪保持平稳。",null,"https://www.vocabulary.com/dictionary/daily"],
      ["daily-ordinary-routine","日常的；例行的","adj.",["日常的","例行的","平常的"],["daily-ordinary-routine"],"The report describes the daily operations of a small family bakery.","这份报告描述了一家小型家庭面包店的日常经营。",null,"https://www.vocabulary.com/dictionary/daily"],
      ["daily-adverb","每天；每日地","adv.",["每日地","日常地","天天"],["daily-adverb-every-day"],"The ferry runs daily between the island and the mainland, weather permitting.","天气允许时，渡轮每天往返于岛屿和大陆之间。",null,"https://www.vocabulary.com/dictionary/daily"],
      ["daily-newspaper","日报","n.",["日报","日报纸"],["daily-newspaper-publication"],"The city's oldest daily published a special section on its hundredth anniversary.","该市历史最悠久的日报在百年创刊纪念日推出了专版。",null,"https://www.vocabulary.com/dictionary/daily"]
    ]);
    entry("monthly", [
      ["monthly-every-month","每月的；按月的","adj.",["每月的","按月的","月度"],["monthly-occurring-each-month"],"Her monthly rent takes nearly half of the salary she earns at the clinic.","她每月的房租几乎占了她在这家诊所工资的一半。",null,"https://www.vocabulary.com/dictionary/monthly"],
      ["monthly-adverb","每月一次；按月","adv.",["每月一次的","每月地","按月地"],["monthly-adverb-once-a-month"],"The committee meets monthly to review spending and approve new projects.","委员会每月开会一次，审查开支并批准新项目。",null,"https://www.vocabulary.com/dictionary/monthly"],
      ["monthly-magazine","月刊","n.",["月刊","月刊杂志"],["monthly-periodical-magazine"],"He subscribes to a science monthly that explains new research in plain language.","他订阅了一本用通俗语言讲解新研究的科学月刊。",null,"https://www.vocabulary.com/dictionary/monthly"]
    ]);
    entry("quarterly", [
      ["quarterly-of-a-quarter","季度的；每季的","adj.",["季度的","每季的","按季度的"],["quarterly-three-month-cycle"],"The firm publishes a quarterly report so that investors can track its progress four times a year.","该公司发布季度报告，以便投资者一年四次跟踪其进展。",null,"https://www.vocabulary.com/dictionary/quarterly"],
      ["quarterly-every-three-months","按季地；每三个月一次","adv.",["按季","每三个月","每季一次","按季度地"],["quarterly-at-three-month-intervals"],"Interest on the savings account is compounded quarterly, which slowly increases the balance.","该储蓄账户的利息按季复利计算，余额因此慢慢增加。",null,"https://www.vocabulary.com/dictionary/quarterly"],
      ["quarterly-periodical","季刊","n.",["季刊","季度刊物"],["quarterly-periodical-publication"],"She subscribes to a literary quarterly that arrives in March, June, September and December.","她订阅了一份文学季刊，分别在三月、六月、九月和十二月寄到。",null,"https://www.vocabulary.com/dictionary/quarterly"]
    ],
    [
      {"terms":["（纹章）四分排列的"],"decision":"scope-excluded","reason":"该义仅用于纹章学，指盾徽图案四等分排列，与时间频率义无关，雅思阅读不涉及。","source":"https://www.vocabulary.com/dictionary/quarterly"}
    ]);
    entry("yearly", [
      ["yearly-every-year","每年的；一年一度的","adj.",["每年的","一年一度的","年度的"],["yearly-annual-occurrence"],"The village holds a yearly festival that attracts visitors from neighbouring towns every August.","这个村庄每年八月举办一年一度的节庆，吸引邻近城镇的游客。",null,"https://www.vocabulary.com/dictionary/yearly"],
      ["yearly-once-a-year","每年；一年一次","adv.",["每年","一年一次","年年"],["yearly-each-year"],"The committee reviews the safety rules yearly and updates them whenever new evidence appears.","委员会每年审查安全规则，并在出现新证据时加以更新。",null,"https://www.vocabulary.com/dictionary/yearly"],
      ["yearly-annual-publication","年鉴；年刊","n.",["年鉴","年刊","年度出版物"],["yearly-reference-book"],"This almanac is a yearly that farmers consult before deciding which crops to plant.","这本历书是一种年鉴，农民在决定种哪些作物之前会查阅它。",null,"https://www.vocabulary.com/dictionary/yearly"]
    ]);
    entry("modern", [
      ["modern-present-era","现代的；当代的","adj.",["现代的","当代的","近代的"],["modern-present-day","present-time"],"Modern medicine has greatly reduced the number of deaths from infectious diseases.","现代医学大大降低了传染病导致的死亡人数。",null,"https://www.vocabulary.com/dictionary/modern"],
      ["modern-new-style","时髦的；新式的","adj.",["时髦的","新式的","时尚的"],["modern-fashionable-style"],"The couple replaced their heavy wooden cabinets with modern furniture in pale colours.","这对夫妇把厚重的木柜换成了浅色的新式家具。",null,"https://www.vocabulary.com/dictionary/modern"],
      ["modern-contemporary-person","现代人；当代人","n.",["现代人","当代人"],["modern-contemporary-person"],"As a modern, she distrusts traditions that cannot be explained by evidence.","作为现代人，她怀疑那些无法用证据解释的传统。",null,"https://www.vocabulary.com/dictionary/modern"]
    ],
    [
      {"terms":["有思想的人"],"decision":"scope-excluded","reason":"该旧译把名词 modern 误解为“有思想的人”，词典名词义仅指当代人或倡导新观念者，属明显误译。","source":"https://www.vocabulary.com/dictionary/modern"}
    ]);
    entry("first", [
      ["first-in-order","第一的；首个的","adj.",["第一","第一的","首个的","排在首位的"],["first-in-sequence"],"The first chapter of the report explains why the survey was commissioned.","报告的第一章解释了这项调查为何受委托进行。",null,"https://www.vocabulary.com/dictionary/first"],
      ["first-before-others","首先；最先","adv.",["首先","最先","起初"],["first-before-anything-else"],"First, check that the windows are closed; then switch off the main power supply.","首先，检查窗户是否关好；然后关闭主电源。",null,"https://www.vocabulary.com/dictionary/first"],
      ["first-foremost-rank","首要的；优先的","adj.",["优先","优先的","首要的"],["first-ranking-above-all","higher-priority"],"Safety is our first concern when we design equipment for young children.","为幼儿设计设备时，安全是我们首要考虑的问题。",null,"https://www.vocabulary.com/dictionary/first"],
      ["first-beginning","开始；开端","n.",["开始","开端","起始"],["first-beginning-point"],"From the first, the project faced delays caused by bad weather and scarce funding.","从一开始，这个项目就因恶劣天气和资金短缺而延误。",null,"https://www.vocabulary.com/dictionary/first"]
    ],
    [
      {"terms":["（汽车）一挡","（棒球）一垒"],"decision":"restricted-verified","reason":"这两条属专业领域义：一挡指汽车最低前进挡，一垒指棒球守备位置，仅见于专项语境。","source":"https://www.vocabulary.com/dictionary/first"}
    ]);
    entry("secondly", [
      ["secondly-in-second-place","第二；其次","adv.",["第二","其次","再者"],["secondly-second-in-order"],"Secondly, the plan ignores the cost of maintaining the new railway line.","其次，该计划忽略了维护这条新铁路线的成本。",null,"https://www.vocabulary.com/dictionary/secondly"]
    ]);
    entry("midday", [
      ["midday-noon","正午；中午","n.",["正午","中午","晌午"],["midday-noon-time"],"We stopped for a simple lunch at midday, when the sun was hottest.","正午太阳最烈的时候，我们停下来吃了顿简单的午饭。",null,"https://www.vocabulary.com/dictionary/midday"],
      ["midday-attributive","正午的；中午的","adj.",["正午的","中午的"],["midday-attributive-use"],"The midday heat forced the workers to rest under the shade of a large tree.","正午的酷热迫使工人们在树荫下休息。",null,"https://www.vocabulary.com/dictionary/midday"]
    ]);
    entry("midnight", [
      ["midnight-twelve-at-night","午夜；子夜；半夜","n.",["午夜","子夜","半夜","零点"],["midnight-twelve-o-clock"],"The last train leaves just before midnight, so we had to walk home.","末班火车在午夜前开走，所以我们只好步行回家。",null,"https://www.vocabulary.com/dictionary/midnight"]
    ],
    [
      {"terms":["午夜的","半夜的"],"decision":"context-required","reason":"这两个旧译是名词作定语的形容用法（如午夜航班、半夜铃声），所读词典未单列形容词义项，宜按“午夜/半夜+名词”随语境处理。","source":"https://www.vocabulary.com/dictionary/midnight"}
    ]);
    entry("overnight", [
      ["overnight-through-the-night","整夜；在夜间","adv.",["整夜","通宵","在夜间","连夜"],["overnight-during-the-night"],"Soak the dried beans overnight, then boil them slowly for about an hour.","把干豆浸泡一整夜，然后用小火煮大约一小时。",null,"https://www.vocabulary.com/dictionary/overnight"],
      ["overnight-lasting-all-night","通宵的；整夜的","adj.",["通宵的","整夜的","一夜的"],["overnight-all-night-long"],"They took an overnight train to the coast and arrived before breakfast.","他们乘坐通宵列车去海边，在早饭前到达。",null,"https://www.vocabulary.com/dictionary/overnight"],
      ["overnight-very-quickly","一夜之间；突然","adv.",["一夜之间","突然","骤然"],["overnight-suddenly"],"Public opinion did not change overnight; it shifted gradually over several years.","公众舆论并非一夜之间改变，而是几年间逐渐转变的。",null,"https://www.vocabulary.com/dictionary/overnight"],
      ["overnight-stay","过夜；一夜的逗留","n.",["一夜的逗留","过夜","留宿"],["overnight-stay"],"We planned a single overnight in the mountain hut before climbing further.","我们打算在山间小屋过一夜，然后再继续往上爬。","an overnight (in/at a place)","https://api.dictionaryapi.dev/api/v2/entries/en/overnight"]
    ],
    [
      {"terms":["前一天晚上","前夜的","在前一夜"],"decision":"scope-excluded","reason":"这几条旧译对应“前夜、前一天晚上”的罕用名词义，词典标注为古旧用法，现代英语已不用。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/overnight"},
      {"terms":["晚上的"],"decision":"scope-excluded","reason":"该旧译过于宽泛，“晚上的”泛指傍晚以后，未体现 overnight 的“整夜、过夜”核心含义，释义不准确。","source":"https://www.vocabulary.com/dictionary/overnight"},
      {"terms":["昨晚一晚上"],"decision":"scope-excluded","reason":"该旧译把“昨晚”与“一整夜”混作一条，属OCR合并造成的错误对译，标准义应为“整夜、在夜间”。","source":"https://www.vocabulary.com/dictionary/overnight"}
    ]);
  }
  if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch11=register;
})(typeof window==='object'?window:globalThis);
