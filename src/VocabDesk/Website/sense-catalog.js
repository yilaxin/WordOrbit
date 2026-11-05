/* Editorial batches 01-06. Definitions checked against the named dictionary entries.
 * Chinese grouping and all bilingual teaching examples are written for WordOrbit.
 * complete means the explicitly declared learning scope, NOT all dictionary senses.
 * This pack is not yet loaded by the desktop app. No user data is included.
 */
(function(scope){
  'use strict';
  const entries={},date='2026-11-04';let editorialBatch='01';
  function add(word,rows,references=[],extraSources=[]){
    const source='https://dictionary.cambridge.org/dictionary/english/'+word;
    entries[word]={batch:editorialBatch,reviewed:true,complete:true,reviewDate:date,scope:'常见学习义项及列出的常用搭配；不宣称穷尽词典、习语和专业义',examplePolicy:'original-wordorbit',sources:[source,...extraSources],referenceOnly:references,senses:rows.map(([id,label,pos,aliases,concepts,en,zh,construction])=>({id,label,pos,aliases,concepts,source,construction:construction||null,example:{en,zh,reviewed:true,origin:'original-wordorbit'}}))};
    return entries[word];
  }
  add('current',[
    ['now','当前的；现在的','adj.',['现在的','当前的'],['present-time'],'The current timetable includes an evening class.','目前的课程表包含一节晚间课程。'],
    ['accepted','通行的；现行有效的','adj.',['流通的','流行的','通用的'],['prevailing-valid'],'This spelling remains current in scientific writing.','这种拼写在科学写作中仍然通用。'],
    ['fluid-flow','水流；气流','n.',['涌流','流','水流','气流'],['fluid-flow'],'A strong current carried the floating branch downstream.','一股强劲的水流把漂浮的树枝带向下游。'],
    ['electric-flow','电流','n.',['电流'],['electric-current'],'The meter measures the current passing through the wire.','仪表测量流经导线的电流。'],
    ['trend','思潮；趋势','n.',['趋势','思潮'],['social-trend'],'The essay examines a current of optimism in post-war literature.','这篇文章考察了战后文学中的一股乐观思潮。']
  ],[],['https://www.collinsdictionary.com/us/dictionary/english/current']);
  add('spring',[
    ['season','春季；春天','n.',['春季','春天'],['spring-season'],'The orchard opens to visitors each spring.','果园每年春天向游客开放。'],
    ['coil','弹簧','n.',['弹簧'],['elastic-coil'],'A broken spring stopped the clock from working.','一根断裂的弹簧使钟停止了运转。'],
    ['elasticity','弹性；弹力','n.',['弹性','弹力'],['elasticity'],'The old cushion has lost most of its spring.','这个旧坐垫已失去大部分弹性。'],
    ['water-source','泉；泉水源头','n.',['泉','源泉'],['water-spring'],'Clear water from a mountain spring supplies the village.','来自山泉的清水供给这个村庄。'],
    ['leap','跳跃；突然跃起','n./v.',['跳跃','跃起'],['sudden-leap'],'The cat can spring from the floor onto the high shelf.','这只猫能从地板跃上高处的架子。'],
    ['appear','突然出现；涌现','v.',['突然出现','涌出'],['sudden-emergence'],'New businesses spring up around the station.','新的商家在车站周围不断涌现。','spring up'],
    ['originate','源于；起因于','v.',['源于'],['originate-from'],'Her confidence seems to spring from years of practice.','她的自信似乎源于多年的练习。','spring from'],
    ['surprise','突然提出或告知','v.',['突然告知','突然提出'],['surprise-announcement'],'Please do not spring a new deadline on the team without warning.','请不要毫无预告地突然向团队提出新的截止日期。','spring sth on sb']
  ],[],['https://dictionary.cambridge.org/dictionary/learner-english/spring','https://www.collinsdictionary.com/us/dictionary/english/spring']);
  add('issue',[
    ['problem','问题；议题；争论点','n.',['问题','议题','争论点'],['topic-problem'],'The report treats water access as a public health issue.','这份报告把获取水源视为一个公共卫生问题。'],
    ['edition','报刊的一期或期号','n.',['一期','期号'],['periodical-edition'],'The March issue contains a feature on coastal erosion.','三月刊包含一篇关于海岸侵蚀的专题文章。'],
    ['issuance','发行；一批发行物','n.',['发行','发行物'],['official-issuance'],'Collectors examined the new issue of commemorative stamps.','收藏者仔细查看了新发行的一套纪念邮票。'],
    ['publish','发布；公布','v.',['公布','发布'],['publish-official'],'The agency will issue revised guidance after the review.','该机构将在审查后发布修订后的指导意见。'],
    ['supply','发给；配发','v.',['发给','配发'],['official-supply'],'The office will issue each visitor with a temporary pass.','办公室将给每位访客发放临时通行证。'],
    ['emerge','流出；传出','v.',['涌出','流出','传出'],['emerge-from'],'A thin stream of steam began to issue from the vent.','一缕蒸汽开始从通风口冒出。','issue from']
  ],[],['https://dictionary.cambridge.org/dictionary/english/issue-from']);
  add('approach',[
    ['near','接近；临近','n./v.',['接近','靠近'],['approach-nearer'],'As we approach the coast, the air becomes cooler.','随着我们接近海岸，空气变得更凉。'],
    ['method','方法；处理方式','n./v.',['方法','处理方式'],['method-treatment'],'The team chose a practical approach to reducing food waste.','团队选择了一种减少食物浪费的务实方法。'],
    ['contact','接洽；找人商谈','n./v.',['找...商量','接洽'],['contact-request'],'We plan to approach the library about hosting the exhibition.','我们打算就举办展览一事与图书馆接洽。'],
    ['access','通路；进路','n.',['通路','进路'],['access-route'],'Ice blocked the northern approach to the bridge.','冰封住了通往桥梁的北侧道路。'],
    ['approximate','近似；接近某数值、水平或性质','n./v.',['近似'],['approximation'],'The number of applications may approach two thousand.','申请数量可能接近两千。']
  ],[{terms:['入门'],decision:'context-required',reason:'二次核对学习型词典的接近、方法及通路义后，不把孤立的“入门”当成普遍独立义；具体语境可归入方法或接近，原译仅保留参考。',source:'https://www.collinsdictionary.com/us/dictionary/english/approach'}],['https://www.collinsdictionary.com/us/dictionary/english/approach']);
  add('record',[
    ['written','记录；档案；记载信息','n./v.',['记录','档案','记载'],['stored-information'],'Volunteers record the water level at the same time each day.','志愿者每天在相同时间记录水位。'],
    ['history','履历；以往表现','n.',['履历'],['performance-history'],'The supplier has a reliable record of meeting deadlines.','这家供应商过去一直能可靠地按时交付。'],
    ['music','唱片；录制的音乐作品','n.',['唱片'],['music-record'],'She found a jazz record in a second-hand shop.','她在一家二手商店找到了一张爵士乐唱片。'],
    ['best','最高纪录；最佳成绩','n.',['纪录'],['best-performance'],'The runner hopes to break the school record this season.','这位跑步选手希望在本赛季打破校纪录。'],
    ['media','录音；录像','v.',['录音','录像'],['record-media'],'Students record short interviews for the oral history project.','学生们为口述历史项目录制简短的访谈。'],
    ['measure','测得并显示','v.',['显示'],['measure-register'],'The instrument can record a small change in pressure.','这种仪器能够测出并记录微小的压力变化。']
  ]);
  add('interest',[
    ['attention','兴趣；趣味；使感兴趣','n./v.',['兴趣','趣味','使感兴趣'],['curiosity-attention'],'The unusual rock formation may interest visiting geologists.','这种不寻常的岩石构造可能会引起来访地质学家的兴趣。'],
    ['hobby','爱好；嗜好','n.',['爱好','嗜好'],['leisure-interest'],'Her interests include birdwatching and restoring old furniture.','她的爱好包括观鸟和修复旧家具。'],
    ['money','利息','n.',['利息'],['loan-interest'],'The loan agreement states how the interest is calculated.','贷款协议说明了利息的计算方式。'],
    ['benefit','利益；好处','n.',['利益'],['personal-benefit'],'The committee must consider the interests of local residents.','委员会必须考虑当地居民的利益。'],
    ['stake','权益；股份','n.',['权益','股份'],['ownership-stake'],'The family retains an interest in the publishing company.','这个家族仍持有这家出版公司的部分权益。'],
    ['groups','利益集团；有关方面','n. plural',['利益集团','有关方面'],['interest-groups'],'Competing commercial interests urged the council to change the proposal.','相互竞争的商业利益集团敦促地方议会修改提案。','interests']
  ],[{terms:['势力'],decision:'restricted-verified',reason:'Collins 收有个人关系带来的影响力义；不等于一般力量。本批常用考点另纳入复数 interests 的利益集团义，关系影响力仅作扩展参考。',source:'https://www.collinsdictionary.com/us/dictionary/english/interest'},{terms:['与...有关系'],decision:'restricted-verified',reason:'Collins 收有及物动词涉及、影响利益的用法；孤立中文过宽，不能理解为任意事物之间的联系，不作本批独立考点。',source:'https://www.collinsdictionary.com/us/dictionary/english/interest'}],['https://www.collinsdictionary.com/us/dictionary/english/interest']);
  add('fine',[
    ['satisfactory','可以的；令人满意的；顺利地','adj./adv.',['好的','很好'],['satisfactory-condition'],'The proposed meeting time is fine for everyone on the team.','提议的会议时间对团队的每个人都合适。'],
    ['healthy','身体好的；健康的','adj.',['健康的'],['healthy-condition'],'After a short rest, she felt fine and continued walking.','稍作休息后，她感觉身体恢复了，便继续步行。'],
    ['excellent','优良的；高品质的','adj.',['优良的','高品质的'],['excellent-quality'],'The museum displays fine examples of local pottery.','博物馆展示了当地陶器中的精品。'],
    ['small','细小的；细薄的','adj.',['细小的'],['small-grain'],'Fine sand had worked its way into the camera case.','细沙已经钻进了相机包。'],
    ['subtle','细微的；精细的','adj.',['精细','精细的','细微的'],['subtle-detail'],'There is a fine distinction between caution and fear.','谨慎和恐惧之间有细微的差别。'],
    ['weather','晴朗的','adj.',['晴天','晴朗的'],['sunny-weather'],'We expect fine weather during the weekend survey.','我们预计周末调查期间天气晴朗。'],
    ['penalty','罚款；罚金；处以罚款','n./v.',['罚款','罚金'],['money-penalty'],'The council may fine companies that dump waste illegally.','地方政府可能会对非法倾倒废弃物的公司处以罚款。'],
    ['delicate','精致纤巧的','adj.',['精致的','纤巧的'],['delicate-appearance'],'The portrait captures the fine features of her face.','这幅肖像描绘出了她精致的面部特征。']
  ],[{terms:['精炼','澄清','变清','变细'],decision:'restricted-verified',reason:'Collins 收有使更细、精制及使酒液澄清等动词用法；这些工艺语境不等于一般的解释清楚，保留为本批常用范围以外的参考。',source:'https://www.collinsdictionary.com/dictionary/english/fine'}],['https://dictionary.cambridge.org/dictionary/learner-english/fine','https://www.collinsdictionary.com/dictionary/english/fine']);
  entries.fine.groupingNote='身体状况与可接受程度按 Learner 词典 WELL / GOOD 保留不同语境；细微差别与纤巧外形分别考理解，绝不将同词另一真实义项作为干扰。';
  add('matter',[
    ['affair','事情；议题','n.',['事件','事情'],['topic-problem'],'We should discuss this matter before the next meeting.','我们应在下次会议前讨论这件事。'],
    ['problem','毛病；不适的原因','n.',['原因','毛病'],['underlying-problem'],'The mechanic asked what the matter was with the engine.','修理工询问发动机出了什么毛病。','the matter with'],
    ['substance','物质；实体材料','n.',['物质','实体'],['physical-substance'],'Living organisms exchange matter with their surroundings.','生物体与周围环境交换物质。'],
    ['content','材料；内容','n.',['素材','材料','内容'],['written-content'],'The editor removed advertising matter from the collection.','编辑从这本文集中删除了广告材料。'],
    ['importance','要紧；有关系','v.',['重要','有关系'],['importance'],'Small changes in temperature can matter to these insects.','温度的微小变化可能对这些昆虫至关重要。']
  ]);
  add('object',[
    ['thing','物体；物品','n.',['物体','物品'],['physical-object'],'Each metal object was weighed before the experiment.','实验前，每件金属物体都被称了重。'],
    ['target','对象','n.',['对象'],['attention-target'],'The restored painting became an object of public curiosity.','修复后的画作成为公众好奇的对象。'],
    ['goal','目标；目的','n.',['目标','目的'],['intended-goal'],'The object of the exercise is to improve coordination.','这项练习的目的是改善协调能力。'],
    ['grammar','宾语','n.',['宾语'],['grammatical-object'],"In 'Birds eat seeds', 'seeds' is the object of 'eat'.",'在 Birds eat seeds 这个句子中，seeds 是 eat 的宾语。'],
    ['oppose','反对；提出异议','v.',['反对','提出异议'],['express-opposition'],'Several residents object to the proposed road expansion.','几位居民反对拟议中的道路扩建。']
  ]);
  add('steep',[
    ['slope','陡峭的；坡度大的','adj.',['险峻的','陡峭的','陡的'],['sharp-slope'],'The steep path above the lake requires careful footing.','湖泊上方的陡峭小路需要小心落脚。'],
    ['change','急剧的；幅度很大的','adj.',['急剧升降的','急剧的'],['rapid-large-change'],'The town experienced a steep decline in factory employment.','这座城镇的工厂就业人数大幅下降。'],
    ['price','价格过高的；过分的','adj.',['价格过高的','昂贵的'],['excessive-price'],'The delivery fee seems steep for such a small parcel.','对这么小的包裹而言，运费似乎过高了。'],
    ['soak','浸泡；浸渍','v.',['浸渍','浸','泡','浸泡'],['soak-liquid'],'Steep the dried mushrooms in warm water before cooking.','烹饪前，把干蘑菇放在温水中浸泡。'],
    ['imbued','充满；深受影响','v.',['充满','深受影响'],['deeply-imbued'],'The annual ceremony is steeped in local tradition.','这一年度仪式深深植根于当地传统。','be steeped in']
  ],[{terms:['悬崖'],decision:'restricted-verified',reason:'Collins 的少用名词义为陡坡或陡倾斜面；旧译“悬崖”过窄，不能反过来当作 cliff 的通用替代，本批仅作扩展参考。',source:'https://www.collinsdictionary.com/us/dictionary/english/steep'},{terms:['夸大的'],decision:'restricted-verified',reason:'Collins 确有非正式的极端、夸张义，常形容说法或故事；不是无依据的错译。与本批价格过高义区分，保留用法说明，不强制列入常用训练。',source:'https://www.collinsdictionary.com/us/dictionary/english/steep'}],['https://www.collinsdictionary.com/us/dictionary/english/steep']);
  editorialBatch='02';
  add('atmosphere',[
    ['gases','大气；星球周围的气体层','n.',['大气'],['planetary-atmosphere'],'The probe measured gases in the atmosphere of Venus.','探测器测量了金星大气层中的气体。'],
    ['air','某处的空气','n.',['空气'],['local-air'],'Dust made the atmosphere inside the workshop difficult to breathe.','粉尘使车间内的空气令人难以呼吸。'],
    ['mood','气氛；氛围','n.',['气氛','氛围'],['situational-mood'],'Quiet music created a calm atmosphere in the waiting room.','轻柔的音乐为候诊室营造了平静的氛围。'],
    ['pressure','标准大气压（压强单位）','n.',['大气压'],['pressure-unit'],'The report expresses the chamber pressure in atmospheres.','报告以标准大气压为单位表示舱内压强。']
  ]);
  add('climate',[
    ['weather','气候；具有某种气候的地区','n.',['气候','气候区'],['long-term-weather'],'A dry climate limits the crops that farmers can grow.','干燥的气候限制了农民能够种植的作物种类。'],
    ['situation','社会风气；局势；某时期的氛围','n.',['社会趋势','社会风气','局势'],['situational-mood'],'Small firms delayed investment in the uncertain economic climate.','小企业在不确定的经济形势下推迟了投资。']
  ]);
  add('environment',[
    ['nature','自然环境；生态环境','n.',['环境','自然环境'],['natural-environment'],'Reducing plastic waste helps protect the marine environment.','减少塑料垃圾有助于保护海洋环境。'],
    ['surroundings','生活或工作的周围条件；外部环境','n.',['外界','周围条件','工作环境'],['surrounding-conditions'],'The library provides a quiet environment for independent study.','图书馆为自主学习提供了安静的环境。'],
    ['computing','计算机或程序的运行环境','n.',['运行环境'],['computing-environment'],'The software was tested in an isolated environment before release.','这款软件在发布前经过了隔离运行环境中的测试。']
  ],[{terms:['围绕'],decision:'unsupported-as-standalone',reason:'所核词典将 environment 列为名词；不能把动词“围绕”直接作为本词含义，周围条件已归入 surroundings。',source:'https://dictionary.cambridge.org/dictionary/english/environment'}]);
  add('erode',[
    ['wear','侵蚀；使逐渐磨损或受侵蚀','v.',['腐蚀','侵蚀','受腐蚀'],['physical-erosion'],'Repeated floods erode the soil along the riverbank.','反复的洪水侵蚀了河岸沿线的土壤。'],
    ['weaken','逐渐削弱；逐步损害','v.',['削弱','损害'],['gradual-weakening'],'Repeated delays can erode public trust in the service.','一再延误会逐渐削弱公众对这项服务的信任。']
  ]);
  add('plateau',[
    ['land','高原；高而平坦的地带','n.',['高地','高原','平顶','坪'],['high-flat-land'],'Villages on the plateau depend on a short summer growing season.','高原上的村庄依靠短暂的夏季生长季节。'],
    ['level','稳定水平；平台期；达到稳定水平','n./v.',['(上升后的)稳定水平','平台期'],['stable-level'],'After rapid early growth, sales began to plateau.','早期快速增长之后，销售额开始趋于稳定。']
  ]);
  entries.plateau.editorialNote='补入原词条未列出的动词词性；平顶、坪仅按高而平坦的地貌归组，不教作任意物体顶部。';
  add('hydrogen',[
    ['element','氢；氢气（元素符号 H）','n.',['氢','氢气'],['hydrogen-element'],'The demonstration used a small sample of hydrogen to illustrate its low density.','演示用少量氢气说明其密度很低。']
  ],[{terms:['氢H-2'],decision:'notation-not-sense',reason:'氢的元素符号为 H；旧标签中的 H-2 不作为独立英语义项，也不能替代规范元素名称。',source:'https://dictionary.cambridge.org/dictionary/english/hydrogen'}]);
  add('testimony',[
    ['statement','证言；证词；正式陈述','n.',['证言','声明','证词'],['formal-evidence-statement'],'The witness gave testimony about the events outside the station.','证人就车站外发生的事情提供了证词。'],
    ['proof','证明；有力证据','n.',['证据','证明'],['evidence-proof'],'The restored wetlands are testimony to the success of the conservation project.','恢复后的湿地证明了这个保护项目的成功。','be testimony to']
  ]);
  add('prosecute',[
    ['legal','依法起诉；在法庭上担任控方','v.',['告发','起诉','作检察官'],['criminal-proceedings'],'The agency may prosecute firms that repeatedly break the law.','该机构可能对一再违法的企业提起诉讼。'],
    ['pursue','持续开展；把某事进行到底（正式）','v.',['彻底进行','执行','从事'],['pursue-to-completion'],'The commission vowed to prosecute its investigation despite the pressure.','委员会誓言顶住压力继续开展调查。']
  ],[],['https://www.collinsdictionary.com/us/dictionary/english/prosecute']);
  entries.prosecute.editorialNote='告发须放在司法起诉语境，不能泛指举报；作检察官指案件中担任控方，不表示职业任命。';
  add('cell',[
    ['biology','细胞','n.',['细胞'],['biological-cell'],'The microscope revealed several damaged cells in the leaf.','显微镜显示叶片中有几个受损的细胞。'],
    ['room','单人小室；单间牢房','n.',['单间牢房','小室'],['small-room'],'The prisoner spent the night in a small cell near the entrance.','囚犯在入口附近的一间小牢房里过了一夜。'],
    ['battery','电池单元；产生电能的装置','n.',['电池','电池单元'],['electrical-cell'],'Each cell in the battery stores energy through chemical reactions.','电池组中的每个电池单元都通过化学反应储存能量。'],
    ['compartment','蜂房；分隔成的小格','n.',['蜂房','小格'],['small-compartment'],'The bees filled the cells of the honeycomb with honey.','蜜蜂把蜂蜜填进蜂巢的小格中。'],
    ['group','小型基层组织；秘密小组','n.',['基层小组','秘密小组'],['organizational-cell'],'The report described a secret political cell operating in the city.','报告描述了在这座城市活动的一个秘密政治小组。'],
    ['phone','手机（美式口语）','n.',['手机'],['mobile-phone'],'She left her cell at home and could not receive the message.','她把手机忘在了家里，没能收到那条消息。']
  ]);
  add('tissue',[
    ['biology','动植物的组织','n.',['组织'],['biological-tissue'],'The researchers examined tissue from the damaged leaf.','研究人员检查了受损叶片的组织。'],
    ['wipe','纸巾；面巾纸','n.',['纸巾','面巾纸'],['disposable-tissue'],'He used a tissue to wipe a drop of water from his glasses.','他用纸巾擦掉眼镜上的一滴水。'],
    ['wrapping','薄包装纸；薄棉纸','n.',['棉纸','薄包装纸'],['wrapping-tissue'],'Layers of tissue protected the glass ornament during transport.','运输时，多层薄包装纸保护着这件玻璃饰品。'],
    ['lies','一连串相互交织的谎言','n.',['一套','一连串谎言'],['fabricated-web'],'The investigation exposed his account as a tissue of lies.','调查揭露了他的叙述是一连串编织的谎言。','a tissue of lies']
  ],[{terms:['薄的织物','薄纱'],decision:'restricted-verified',reason:'Collins 收有轻薄织物义；现代通用学习以组织、纸巾、薄包装纸为主，纺织旧义在本批仅作扩展参考。',source:'https://www.collinsdictionary.com/us/dictionary/english/tissue'}],['https://www.collinsdictionary.com/us/dictionary/english/tissue']);
  add('culture',[
    ['customs','文化；群体的习俗与观念','n.',['文化','习俗'],['shared-customs'],'The exhibition explores how food reflects local culture.','展览探讨了食物如何体现当地文化。'],
    ['arts','文学艺术；文化活动','n.',['文学艺术','文化活动'],['arts-activities'],'The festival brings music, theatre and other forms of culture to rural towns.','这个节日把音乐、戏剧和其他文化活动带到乡村城镇。'],
    ['refinement','文化修养；知识与审美素养','n.',['修养','文化修养'],['intellectual-refinement'],'The biographer describes her as a woman of great culture and intellectual curiosity.','这位传记作者把她描述为一位文化修养深厚、求知欲强的女性。'],
    ['cultivation','栽培；种植','n.',['耕种','栽培'],['crop-cultivation'],'The region has a long history of olive culture.','这个地区种植橄榄的历史悠久。'],
    ['laboratory','培养细胞或微生物；培养物','n./v.',['培养','培养物'],['biological-culture'],'The laboratory will culture the bacteria under controlled conditions.','实验室将在受控条件下培养这些细菌。']
  ],[],['https://www.collinsdictionary.com/us/dictionary/english/culture']);
  add('rock',[
    ['stone','岩石；石块；岩礁','n.',['岩石','岩礁','石头','暗礁'],['natural-stone'],'Waves broke against a dark rock near the harbour entrance.','海浪拍打着港口入口附近的一块暗色岩礁。'],
    ['music','摇滚乐','n.',['摇滚乐'],['rock-music'],'The band combines traditional instruments with rock.','这支乐队把传统乐器与摇滚乐结合起来。'],
    ['dependable','可靠的支柱；可依靠的人','n.',['基石','支柱'],['dependable-support'],'Throughout the difficult move, her sister was her rock.','在艰难的搬家过程中，她姐姐一直是她可靠的支柱。'],
    ['move','摇动；使来回摇晃','v.',['摇动','摇摆','使摇晃','摇'],['back-forth-motion'],'Small waves gently rock the boat beside the jetty.','小浪轻轻摇动着栈桥旁的小船。'],
    ['shock','使震惊；使动摇','v.',['使动摇','使震惊'],['shock-destabilize'],'The sudden loss of funding rocked the research institute.','资金突然中断使这家研究机构受到震动。'],
    ['sweet','条状硬糖（英式）','n.',['条状硬糖'],['seaside-candy'],'The seaside shop sold sticks of brightly coloured rock.','海边小店出售色彩鲜艳的条状硬糖。']
  ],[{terms:['宝石','穿得好看','很棒'],decision:'restricted-verified',reason:'所核 Cambridge 页面另列宝石、穿戴时尚及很棒等俚语；本批记录存在这些用法，但暂不列入常用学术训练。',source:'https://dictionary.cambridge.org/dictionary/english/rock'}]);
  add('branch',[
    ['tree','树枝','n.',['树枝'],['tree-branch'],'A low branch shaded the path beside the pond.','一根低垂的树枝为池塘边的小路遮阴。'],
    ['office','分店；分部；分支机构','n.',['支店','分部','分店'],['local-office'],'The bank opened a new branch near the university.','银行在大学附近开设了一家新分行。'],
    ['division','学科或组织的分支；家族支系','n.',['分支','支系'],['subdivision'],'Botany is a branch of biology concerned with plants.','植物学是生物学中研究植物的一个分支。'],
    ['water-road','支流；支路','n.',['支流','支路'],['branch-route'],'The eastern branch of the river passes through the village.','这条河东侧的支流穿过村庄。'],
    ['divide','分岔；分出支路','v.',['出枝','分割','分岔'],['divide-into-branches'],'The path branches just beyond the old bridge.','小路在旧桥稍远处出现分岔。'],
    ['expand','拓展到新的业务或领域','v.',['拓展'],['business-expansion'],'The publisher plans to branch out into educational games.','这家出版社计划拓展到教育游戏领域。','branch out']
  ],[{terms:['用枝状叶脉刺绣花纹装饰'],decision:'outside-scope-unresolved',reason:'装饰工艺术语不在本批学习型条目范围；保留旧片段，不把它认证为常用义或用于出题。',source:'https://dictionary.cambridge.org/dictionary/english/branch'},{terms:['目录分支'],decision:'context-required',reason:'可视为分支结构在目录中的应用，不能在没有计算机语境时把它当成额外常用义项。',source:'https://dictionary.cambridge.org/dictionary/english/branch'}]);
  add('trunk',[
    ['tree','树干','n.',['树干','树干的'],['tree-stem'],'The hollow trunk provided shelter for several birds.','中空的树干为几只鸟提供了栖身之所。'],
    ['body','躯干','n.',['躯干','躯干的'],['body-torso'],'The exercise strengthens the muscles of the trunk.','这项练习增强躯干肌肉的力量。'],
    ['nose','象鼻','n.',['象鼻'],['elephant-nose'],'The elephant lifted a fallen branch with its trunk.','大象用鼻子举起了一根掉落的树枝。'],
    ['case','大旅行箱；储物箱','n.',['箱子','旅行箱'],['large-storage-case'],'The family kept old photographs in a wooden trunk.','这家人把旧照片存放在一个木箱里。'],
    ['car','汽车行李厢（美式）','n.',['汽车行李厢'],['car-luggage-space'],'We put the camping equipment in the trunk before leaving.','出发前，我们把露营装备放进汽车行李厢。'],
    ['route','干线；主要运输或通信线路','n./modifier',['干线','干线的','中继线'],['main-network-line'],'The town is connected to the coast by a trunk railway line.','一条铁路干线把这座城镇与海岸连接起来。','trunk line'],
    ['shorts','男式游泳短裤；运动短裤','n. plural',['游泳短裤','运动短裤'],['swimming-shorts'],'He packed his swimming trunks for the weekend trip.','他为周末旅行装好了游泳短裤。','trunks']
  ],[{terms:['主干'],decision:'restricted-verified',reason:'解剖学中可指神经或血管主干；不同于树干及躯干，专业语境本批保留参考。',source:'https://dictionary.cambridge.org/dictionary/english/trunk'},{terms:['把...放入旅行箱内','箱形的','母线'],decision:'outside-scope-unresolved',reason:'这些旧动词、形状或电气术语未由本批学习范围确认，不能由名词旅行箱或干线自行推导后认证；仅留追溯记录。',source:'https://www.collinsdictionary.com/dictionary/english/trunk'}],['https://www.collinsdictionary.com/dictionary/english/trunk','https://www.collinsdictionary.com/us/dictionary/english/trunk-line']);
  add('stem',[
    ['plant','植物的茎；梗','n.',['茎','干'],['plant-stem'],'The flower has a hollow stem that bends easily.','这种花的茎中空，容易弯曲。'],
    ['slender','杯脚；细长的柄或支撑部','n.',['柄','杯脚'],['slender-support'],'She held the glass by its stem to avoid warming the drink.','她握住杯脚，以免让饮料变热。'],
    ['grammar','词干','n.',['词干'],['word-stem'],'In the word walkers, the stem is walker and the plural ending is s.','在 walkers 一词中，词干是 walker，复数词尾是 s。'],
    ['stop','遏止；阻止不良趋势或流动','v.',['阻止','堵住'],['restrain-flow'],'Improved drainage can help stem the flow of water into the tunnel.','改善排水有助于阻止水流进入隧道。'],
    ['originate','源于；起因于','v.',['源于','起因于'],['originate-from'],'Many of the delays stem from incomplete application forms.','许多延误源于申请表填写不完整。','stem from'],
    ['remove','去掉果实或叶片的梗','v.',['摘掉茎','去梗'],['remove-stalk'],'Wash and stem the cherries before adding them to the bowl.','把樱桃洗净去梗，再放入碗中。']
  ],[{terms:['船首','血统','装柄于','逆行'],decision:'restricted-verified',reason:'Collins 收有船首构件、家系、装茎柄、顶着潮流前进等专门用法；“逆行”不泛指违法逆向行驶，本批不将这些扩展义作为常用考点。',source:'https://www.collinsdictionary.com/dictionary/english/stem'},{terms:['堵塞物'],decision:'outside-scope-unresolved',reason:'旧名词标签未在本批学习型条目确认；不能从阻止流动的动词义自动造出名词义。',source:'https://www.collinsdictionary.com/dictionary/english/stem'}],['https://www.collinsdictionary.com/dictionary/english/stem']);
  add('reserve',[
    ['keep','保留；留作特定用途','v.',['保留','保存'],['keep-for-purpose'],'The library will reserve this room for quiet study.','图书馆将把这间房留作安静自习之用。'],
    ['book','预订','v.',['预订'],['advance-booking'],'Please reserve a seat before the booking deadline.','请在预订截止时间前订好座位。'],
    ['supply','储备；储备品；贮量；储备金','n.',['储备品','贮量','储备金'],['emergency-supply'],'The island keeps a reserve of drinking water for dry periods.','这座岛储备饮用水，以备干旱时期使用。'],
    ['land','自然保护区','n.',['自然保护区'],['protected-natural-area'],'Visitors must stay on marked paths inside the nature reserve.','游客在自然保护区内必须沿标记好的小路行走。'],
    ['people','后备军；替补队员','n.',['后备军','替补队员'],['backup-personnel'],'The coach named two reserves in case a player was injured.','教练安排了两名替补队员，以防球员受伤。'],
    ['restraint','拘谨；不轻易表露情感','n.',['拘谨','节制'],['emotional-restraint'],'Her initial reserve gradually disappeared as she got to know the group.','随着逐渐熟悉这个小组，她最初的拘谨慢慢消失了。'],
    ['doubt','保留意见；疑虑','n.',['保留意见','疑虑'],['reservation-doubt'],'After checking his work, the supervisor recommended him without reserve.','检查了他的工作后，主管毫无保留地推荐了他。','without reserve'],
    ['price','拍卖底价','n.',['拍卖底价'],['auction-minimum'],'The painting did not sell because no bid reached the reserve.','由于没有出价达到底价，这幅画未能售出。'],
    ['judgment','暂不作判断；保留判断','v.',['延期','推迟','保留判断'],['defer-judgment'],'We should reserve judgment until the independent review is complete.','我们应等独立审查完成后再作判断。','reserve judgment']
  ]);
  entries.reserve.editorialNote='延期、推迟只在暂不作判断等特定语境下映射，不教作推迟会议的通用动词。';
  add('support',[
    ['endorse','支持；赞成；为球队助威','n./v.',['支持','赞成'],['endorsement','team-encouragement'],'Most residents support the plan to expand the public library.','大多数居民支持扩建公共图书馆的计划。'],
    ['help','援助；帮助；后援','n./v.',['援助','支援','帮助','后援'],['practical-emotional-help'],'Volunteers support older residents with shopping and transport.','志愿者在购物和出行方面帮助老年居民。'],
    ['provide','供养；资助；维持生存','n./v.',['供养','资助'],['financial-provision','sustain-life'],'The small farm can support the family throughout the year.','这个小农场能够全年供养这家人。'],
    ['hold','支撑；支撑物','n./v.',['支撑','支撑物'],['physical-support'],'Two steel columns support the roof above the platform.','两根钢柱支撑着站台上方的屋顶。'],
    ['evidence','佐证；为观点提供依据','n./v.',['证实','佐证'],['evidence-proof'],'The new measurements support the earlier explanation of the change.','新的测量结果为先前对这一变化的解释提供了佐证。'],
    ['accept','容忍；接受（正式）','v.',['忍受','容忍'],['tolerate-behaviour'],'The committee will not support behaviour that puts volunteers at risk.','委员会不会容忍使志愿者面临危险的行为。'],
    ['performer','暖场表演者；助演乐队','n.',['暖场表演者'],['opening-performer'],'A local band performed as the support for the visiting singer.','一支本地乐队为来访歌手担任暖场演出。']
  ]);
  add('root',[
    ['plant','植物的根','n.',['根'],['plant-root'],'The long roots help the tree reach water below the dry soil.','长根帮助树木吸收干燥土层下的水。'],
    ['origin','根源；根本；出身背景','n.',['根本','根源','基础'],['underlying-origin'],'The review traced the root of the delay to a missing permit.','审查发现延误的根源在于缺少一份许可证。'],
    ['anatomy','牙根；发根等埋入身体的部分','n.',['牙根','发根'],['anatomical-root'],'The dentist examined the root of the damaged tooth.','牙医检查了受损牙齿的牙根。'],
    ['word','词根','n.',['词根'],['word-root'],'The word unhappy contains the root happy and the prefix un-.','unhappy 一词包含词根 happy 和前缀 un-。'],
    ['math','方根；方程的根','n.',['方根','方程的根'],['mathematical-root'],'The positive square root of eighty-one is nine.','八十一的正平方根是九。'],
    ['grow','生根；使植物生根','v.',['生根','使扎根'],['grow-roots'],'These cuttings usually root in damp soil within a few weeks.','这些插条通常会在几周内在湿土中生根。'],
    ['fixed','使牢牢固定；使深深植根于','v.',['固定','使固定','源于'],['deeply-imbued','fixed-in-place'],'The custom is rooted in the history of the fishing community.','这种习俗深深植根于这个渔业社区的历史。','be rooted in'],
    ['search','翻找；用鼻子拱土寻找','v.',['寻找','用鼻拱','用鼻拱土'],['rummage-search'],'The pigs root among the fallen leaves for food.','猪在落叶中拱着鼻子寻找食物。'],
    ['find','费力找出；终于找到','v.',['搜出','费力找出'],['find-after-search'],'She rooted out an old map from the boxes in the attic.','她从阁楼的箱子里翻出了一张旧地图。','root out'],
    ['remove','找到并根除；彻底清除','v.',['根除','肃清'],['eradicate'],'The review aims to root out errors in the payment system.','此次审查旨在彻底清除支付系统中的错误。','root out'],
    ['cheer','为某人或某队加油；支持','v.',['捧场','支持'],['team-encouragement'],'The students will root for their classmate in the final.','学生们将在决赛中为他们的同学加油。','root for']
  ],[{terms:['底部'],decision:'context-required',reason:'仅能在根部、基部等特定结构中理解，不能把任意物体的底部都译为 root；本批不作独立考点。',source:'https://dictionary.cambridge.org/dictionary/english/root'},{terms:['和弦根音'],decision:'restricted-verified',reason:'所核词典另列音乐根音义，本批暂不加入专业音乐训练。',source:'https://dictionary.cambridge.org/dictionary/english/root'}],['https://dictionary.cambridge.org/dictionary/english/root-for','https://dictionary.cambridge.org/dictionary/english/root-out']);
  add('field',[
    ['land','田地；牧场','n.',['田地'],['agricultural-land'],'The farmer left one field empty to allow the soil to recover.','农民让一块田休耕，以便土壤恢复。'],
    ['sport','运动场；赛场','n.',['场地','运动场'],['sports-ground'],'The school built a new field for football and hockey.','学校新建了一个足球和曲棍球运动场。'],
    ['subject','领域；专业','n.',['领域','域'],['subject-area'],'She works in the field of renewable energy.','她从事可再生能源领域的工作。'],
    ['practical','实地；野外工作的；实地进行的','n./modifier',['野外的','田间的','实地'],['practical-outdoor-work'],'The students collected field data on coastal birds.','学生们在实地收集了海岸鸟类的数据。'],
    ['force','物理场；力的作用区域','n.',['场','物理场'],['physical-force-field'],'The instrument measures changes in the magnetic field.','这台仪器测量磁场的变化。'],
    ['data','数据库字段；表格中的信息栏','n.',['字段','信息栏'],['database-field'],'Enter your email address in the final field.','请在最后一个信息栏填写你的电子邮箱地址。'],
    ['competitors','全体参赛者','n.',['全体参赛者'],['competitor-set'],'The race attracted a strong field of experienced runners.','这场比赛吸引了一批实力强劲、经验丰富的跑步选手。'],
    ['answer','应对问题；回答询问','v.',['应对问题','回答询问'],['handle-questions'],'The researcher will field questions after the presentation.','研究人员将在报告后回答提问。'],
    ['team','派出队伍或候选人参赛','v.',['使上场','派出队伍'],['enter-competition'],'The college will field two teams in the tournament.','学院将在锦标赛中派出两支队伍。'],
    ['ball','接球并防守（板球、棒球等）','v.',['接球防守'],['ball-fielding'],'She fielded the ball near the boundary and threw it back.','她在边界附近接住球并把它投了回去。']
  ],[{terms:['战场'],decision:'context-required',reason:'战斗等语境中的 field 可指作战现场；本批不将战场与任意田地或赛场互换。',source:'https://dictionary.cambridge.org/dictionary/english/field'},{terms:['使...晒在场上','野生的','田赛的'],decision:'outside-scope-unresolved',reason:'旧译涉及特定工艺、复合词或形容词环境，未在本批逐一确认，保留追溯，不作为已核实考点。',source:'https://dictionary.cambridge.org/dictionary/english/field'}]);
  add('range',[
    ['set','一系列；一组；产品系列','n.',['一系列','产品系列'],['set-of-related-items'],'The shop offers a range of affordable outdoor clothing.','这家商店出售一系列价格实惠的户外服装。'],
    ['limits','范围；上下限之间的区间','n.',['范围','量程','域'],['bounded-range'],'Most readings fell within the expected range.','大多数读数落在预期范围内。'],
    ['mountains','山脉','n.',['山脉'],['mountain-chain'],'Snow covered the highest peaks of the mountain range.','积雪覆盖了这条山脉最高的山峰。'],
    ['distance','射程；航程；可达距离','n.',['射程','距离','航程'],['effective-distance'],'The electric bus has enough range to complete the route without recharging.','这辆电动公交车的续航里程足以让它无需再次充电就能跑完全程。'],
    ['practice','射击场；练习场','n.',['射击场','练习场'],['practice-ground'],'Beginners practised their swings on the golf range.','初学者在高尔夫练习场练习挥杆。'],
    ['land','放牧地；动植物的分布区域','n.',['放牧地','分布区域'],['grazing-distribution-area'],'The species has a limited range in the northern mountains.','这个物种在北部山区的分布区域有限。'],
    ['cooker','炉灶（美式）；大型炉具','n.',['炉灶'],['cooking-stove'],'The kitchen has an electric range beside the sink.','厨房水槽旁有一台电炉灶。'],
    ['vary','在某范围内变化；从……到……不等','v.',['延伸','变化'],['vary-between-limits'],'The fees range from twenty to eighty pounds.','费用从二十英镑到八十英镑不等。','range from ... to ...'],
    ['arrange','排列；使成行','v.',['排列','使并列'],['arrange-in-order'],'The chairs were ranged along the wall for the visitors.','椅子沿墙排好，供访客使用。'],
    ['roam','自由漫游；在区域内活动','v.',['漫游','放牧'],['free-roaming'],'The sheep range freely over the hillside during summer.','夏季，羊群在山坡上自由活动。'],
    ['cover','讨论或文章涉及多个话题','v.',['涉及话题'],['cover-subjects'],'The discussion ranged over transport, housing and local employment.','讨论涉及交通、住房和当地就业等话题。','range over']
  ],[{terms:['排','行','行列'],decision:'context-required',reason:'排列成行已纳入 arrange；旧名词标签在本批仅保留参考，不与一系列相关事物完全等同。',source:'https://dictionary.cambridge.org/dictionary/english/range'},{terms:['归类于','平行'],decision:'outside-scope-unresolved',reason:'旧译缺少搭配或技术语境，本批未确认为独立常用义，不从词形自行推断。',source:'https://dictionary.cambridge.org/dictionary/english/range'}]);
  editorialBatch='03';
  const registerBatch03=typeof module==='object'&&module.exports?require('./sense-batch-03.js'):scope.WordOrbitSenseBatch03;
  if(typeof registerBatch03!=='function')throw Error('Missing editorial batch 03');
  registerBatch03(add);
  editorialBatch='04';
  const registerBatch04=typeof module==='object'&&module.exports?require('./sense-batch-04.js'):scope.WordOrbitSenseBatch04;
  if(typeof registerBatch04!=='function')throw Error('Missing editorial batch 04');
  registerBatch04(add);
  editorialBatch='05';
  const registerBatch05=typeof module==='object'&&module.exports?require('./sense-batch-05.js'):scope.WordOrbitSenseBatch05;
  if(typeof registerBatch05!=='function')throw Error('Missing editorial batch 05');
  registerBatch05(add);
  editorialBatch='06';
  const registerBatch06=typeof module==='object'&&module.exports?require('./sense-batch-06.js'):scope.WordOrbitSenseBatch06;
  if(typeof registerBatch06!=='function')throw Error('Missing editorial batch 06');
  registerBatch06(add);
  // Per-sense references point to the page that actually supports that use.
  for(const id of ['accepted','trend'])entries.current.senses.find(s=>s.id===id).source='https://www.collinsdictionary.com/us/dictionary/english/current';
  entries.spring.senses.find(s=>s.id==='elasticity').source='https://www.collinsdictionary.com/us/dictionary/english/spring';
  entries.spring.senses.find(s=>s.id==='originate').source='https://dictionary.cambridge.org/dictionary/learner-english/spring';
  entries.spring.senses.find(s=>s.id==='surprise').source='https://dictionary.cambridge.org/dictionary/learner-english/spring';
  entries.issue.senses.find(s=>s.id==='emerge').source='https://dictionary.cambridge.org/dictionary/english/issue-from';
  entries.approach.senses.find(s=>s.id==='approximate').source='https://www.collinsdictionary.com/us/dictionary/english/approach';
  entries.interest.senses.find(s=>s.id==='groups').source='https://www.collinsdictionary.com/us/dictionary/english/interest';
  entries.prosecute.senses.find(s=>s.id==='pursue').source='https://www.collinsdictionary.com/us/dictionary/english/prosecute';
  entries.culture.senses.find(s=>s.id==='refinement').source='https://www.collinsdictionary.com/us/dictionary/english/culture';
  entries.tissue.senses.find(s=>s.id==='lies').source='https://www.collinsdictionary.com/us/dictionary/english/tissue';
  entries.trunk.senses.find(s=>s.id==='route').source='https://www.collinsdictionary.com/us/dictionary/english/trunk-line';
  for(const id of ['grammar','remove'])entries.stem.senses.find(s=>s.id===id).source='https://www.collinsdictionary.com/dictionary/english/stem';
  // These particular phrasal constructions require their own dictionary entries.
  const constructions={branch:{expand:'branch-out'},stem:{originate:'stem-from'},root:{find:'root-out',remove:'root-out',cheer:'root-for'}};
  for(const [word,items]of Object.entries(constructions))for(const [id,page]of Object.entries(items))entries[word].senses.find(s=>s.id===id).source='https://dictionary.cambridge.org/dictionary/english/'+page;
  entries.root.senses.find(s=>s.id==='fixed').source='https://www.collinsdictionary.com/dictionary/english/root';
  entries.root.sources.push('https://dictionary.cambridge.org/dictionary/learner-english/be-rooted-in-sth');
  // Unresolved OLD fragments remain visible in the audit; they are not certified
  // merely because the explicitly bounded teaching selection is usable.
  for(const entry of Object.values(entries)){
    entry.unresolvedReferences=entry.referenceOnly.filter(r=>r.decision==='outside-scope-unresolved').map(r=>r.terms).flat();
    if(entry.unresolvedReferences.length){entry.complete=false;entry.pendingReview='常用义项已初审；旧译仍有未决项：'+entry.unresolvedReferences.join('；')+'。整词暂不进入完整覆盖训练。';}
    entry.sources=[...new Set([...entry.sources,...entry.senses.map(s=>s.source),...entry.referenceOnly.map(r=>r.source).filter(Boolean)])];
  }
  const api={version:6,batches:['01','02','03','04','05','06'],reviewDate:'2026-11-05',publicationState:'editorial-development',scope:'declared-learning-scope-not-exhaustive-dictionary',entries};
  if(typeof module==='object'&&module.exports)module.exports=api;else scope.WORDORBIT_SENSE_CATALOG=api;
})(typeof window==='object'?window:globalThis);
