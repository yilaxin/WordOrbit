/* Batch 05: bounded learning senses and original bilingual examples. No learner data. */
(function(scope){
  'use strict';
  function register(add){
    const entries={},cam=w=>'https://dictionary.cambridge.org/dictionary/english/'+w,col=w=>'https://www.collinsdictionary.com/dictionary/english/'+w;
    function entry(word,rows){
      const e=add(word,rows.map(r=>{r=r.slice();if(typeof r[4]==='string')r[4]=[r[4]];return r;}));
      e.reviewDate='2026-11-05';entries[word]=e;return e;
    }
    function reference(word,terms,reason,decision='context-required',source=cam(word)){
      entries[word].referenceOnly.push({terms,decision,reason,source});
    }
    entry('absorb',[
      ['take-in','吸收液体、光或热等','v.',['吸收'],'take-in-substance','The dry soil absorbed the first shower within minutes.','干燥的土壤几分钟内就吸收了第一场阵雨。'],
      ['attention','使全神贯注；占据注意力','v.',['使全神贯注'],'engross-attention','The puzzle absorbed the children throughout the journey.','整个旅途中，谜题让孩子们全神贯注。'],
      ['learn','理解并记住信息','v.',['理解'],'assimilate-information','New recruits need time to absorb the safety instructions.','新员工需要时间理解并记住安全说明。'],
      ['impact','缓冲；承受冲击或变化的影响','v.',['承受','忍受'],'cushion-impact','The padded case absorbs shocks during transport.','带衬垫的箱子能缓冲运输途中的震动。'],
      ['incorporate','将较小组织或部分并入整体','v.',['同化'],'incorporate-into-whole','The larger firm absorbed two small suppliers into its operations.','大公司把两家小供应商并入了自己的业务体系。'],
      ['cost','承担额外费用而不转嫁','v.',['承担'],'bear-extra-cost','The retailer absorbed the higher delivery costs instead of raising prices.','零售商承担了增加的配送费用，没有提价。']
    ]);
    entry('emission',[
      ['release','气体、热、光等的排放或发射','n.',['发射','射出'],'release-gas-energy','The sensor measures the emission of heat from the roof.','传感器测量屋顶释放的热量。'],
      ['output','排放出的物质；排放量','n.',['排放物'],'released-output','Traffic emissions fell after the introduction of electric buses.','引入电动公交车后，交通排放下降了。']
    ]);
    entry('flora',[
      ['plants','某地区或时期的植物群；植物区系','n.',['植物群','植物区系','植物丛'],'regional-plants','The survey recorded changes in the island\'s native flora.','调查记录了岛上本土植物群的变化。'],
      ['microbes','身体某部位的微生物群','n.',['菌丛'],'body-microbiota','The study examined the gut flora of healthy adult volunteers.','研究考察了健康成年志愿者的肠道微生物群。']
    ]);
    entry('fauna',[
      ['animals','某地区或时期的动物群；动物区系','n.',['动物群','动物区系'],'regional-animals','The protected valley supports a rich variety of fauna.','受保护的山谷养育了丰富多样的动物群。']
    ]);
    entry('mammal',[
      ['animal','哺乳动物','n.',['哺乳动物'],'mammalian-animal','The bat is a mammal despite its ability to fly.','蝙蝠虽然能够飞行，但属于哺乳动物。']
    ]);
    entry('reptile',[
      ['animal','爬行动物；爬行动物的','n./modifier',['爬行动物','爬虫','爬虫类的'],'reptilian-animal','This reptile uses warm rocks to help regulate its body temperature.','这种爬行动物借助温热的岩石调节体温。']
    ]);
    entry('vertebrate',[
      ['spine','脊椎动物；有脊椎的','n./adj.',['脊椎动物','有椎骨的','有脊椎的'],'animal-with-backbone','Fish are vertebrates, whereas insects lack a backbone.','鱼类是脊椎动物，而昆虫没有脊柱。']
    ]);
    entry('nocturnal',[
      ['night','夜间发生的；夜间活动的','adj.',['夜的','夜间的'],'active-at-night','Cameras recorded the nocturnal animals without disturbing them.','摄像机记录了夜行动物的活动，没有惊扰它们。']
    ]);
    entry('dormant',[
      ['inactive','休眠的；暂时不活动但可能再活跃的','adj.',['睡眠状态的','静止的','休眠的','不活动的','休止的'],'temporarily-inactive','The seeds remain dormant until enough moisture reaches them.','种子在获得足够水分前一直处于休眠状态。']
    ]);
    entry('breed',[
      ['reproduce','繁殖；饲养或培育以产生后代','v.',['养育','饲养','繁殖'],'animal-reproduction','The centre breeds rare birds before releasing them into suitable habitats.','中心繁育珍稀鸟类，然后把它们放归适合的栖息地。'],
      ['type','品种；某类人或事物','n.',['种类','品种'],'distinct-type','This breed of sheep tolerates the wet climate well.','这个绵羊品种很能适应潮湿气候。'],
      ['cause','滋生；引起某种感受或情况','v.',['引起'],'cause-to-develop','A lack of clear information can breed unnecessary suspicion.','缺乏明确信息可能滋生不必要的猜疑。']
    ]);
    entry('sow',[
      ['seeds','播种','v.',['播种'],'plant-seeds','Farmers sow the beans after the danger of frost has passed.','霜冻风险过去后，农民才播种豆子。'],
      ['cause','散布；引起并使某种情绪或情况蔓延','v.',['散布','传播'],'cause-to-develop','Contradictory announcements sowed confusion among passengers.','相互矛盾的公告让乘客产生了混乱。'],
      ['pig','成年母猪（与动词读音不同）','n.',['母猪'],'female-pig','The sow rested in a shaded pen with her piglets.','母猪和小猪在有遮阴的圈里休息。']
    ]);
    entry('arable',[
      ['land','适合种植农作物的；可耕种的','adj.',['适于耕种的','可耕的'],'land-for-crops','Only a small proportion of the island is arable land.','岛上只有一小部分土地适合耕种。']
    ]);
    entry('plough',[
      ['farm','犁；用犁耕地','n./v.',['犁','用犁耕田','耕'],'till-soil','The farmer used a plough to turn the soil before planting.','农民在种植前用犁翻土。'],
      ['progress','费力穿过；艰难推进','v.',['开路'],'force-through-obstacle','The rescue vehicle ploughed through deep snow to reach the village.','救援车艰难穿过深雪，抵达村庄。','plough through'],
      ['stars','北斗七星（英式，专有名称）','n.',['北斗七星'],'big-dipper-asterism','The guide used the Plough to help the group locate the North Star.','向导利用北斗七星帮助大家找到北极星。','the Plough']
    ]);
    entry('perennial',[
      ['lasting','长期存在的；反复出现的','adj.',['常年的','长期的','反复的'],'persisting-or-recurring','Funding is a perennial problem for small museums.','资金是小型博物馆长期面临的问题。'],
      ['plant','多年生的；多年生植物','adj./n.',['多年生的'],'perennial-plant','This perennial produces new shoots each spring.','这种多年生植物每年春天都会长出新芽。']
    ]);
    entry('horticulture',[
      ['gardening','园艺；园艺学','n.',['园艺'],'cultivation-garden-plants','She studied horticulture before managing the botanical garden.','她在管理植物园之前学习过园艺。']
    ]);
    entry('meadow',[
      ['grassland','草地；常有野花或用于放牧的草场','n.',['草地','牧场'],'grassy-field','The meadow provides food for insects as well as grazing animals.','这片草地既为昆虫也为食草动物提供食物。']
    ]);
    entry('forestry',[
      ['management','林业；培育和管理森林的学科或活动','n.',['林学','林业'],'forest-management','Sustainable forestry balances timber production with habitat protection.','可持续林业兼顾木材生产与栖息地保护。']
    ]);
    entry('decompose',[
      ['rot','腐烂；使有机物腐解','v.',['(使)腐烂'],'organic-deterioration','Fallen leaves decompose faster in warm, damp conditions.','落叶在温暖潮湿的条件下腐解得更快。'],
      ['parts','分解；使整体分成较小部分','v.',['分解'],'break-into-components','The analysis decomposes total spending into several categories.','分析把总支出分解为几个类别。']
    ]);
    entry('classify',[
      ['group','按特征分类、归类或分级','v.',['分类','归类','分等','分级'],'sort-into-groups','The library classifies the reports by subject and publication year.','图书馆按主题和出版年份对报告分类。'],
      ['secret','将文件或信息列为机密','v.',['列为机密'],'official-secrecy','The agency classified the documents because they contained security details.','机构因文件含有安全细节而将其列为机密。']
    ]);
    entry('reclaim',[
      ['recover','取回；重新获得；索回已付的钱','v.',['取回'],'get-back-possession','Passengers can reclaim lost bags at the information desk.','乘客可以在问询处领回遗失的行李。'],
      ['land','开垦；使土地可用于耕作或建设','v.',['开垦','改造'],'make-land-usable','The project reclaimed polluted industrial land for public use.','项目整治了受污染的工业用地，供公众使用。'],
      ['recycle','从废物中回收可再利用的材料','v.',['回收'],'recover-waste-material','The plant reclaims metals from discarded electronic devices.','工厂从废弃电子设备中回收金属。']
    ]);
    entry('eclipse',[
      ['astronomy','日食或月食；天体被遮蔽的现象','n.',['日食','月食'],'astronomical-obscuration','Clouds prevented the observers from seeing the lunar eclipse.','云层使观测者无法看到月食。'],
      ['outshine','使相形见绌；光彩或重要性被压过','v.',['使黯然失色'],'outshine-in-importance','The smaller exhibition was eclipsed by the international festival.','较小的展览被国际艺术节抢去了风头。'],
      ['decline','地位、影响力或声望的衰落','n.',['(地位名誉等的)消失'],'decline-in-prominence','The closure marked the eclipse of an industry that once dominated the town.','工厂关闭标志着曾主导这个城镇的行业走向衰落。']
    ]);
    entry('lunar',[
      ['moon','月球的；按月亮运行周期计算的','adj.',['阴历的','月的'],'moon-related','The lunar calendar follows cycles of the Moon.','阴历依据月亮运行的周期来计时。']
    ]);
    entry('extraterrestrial',[
      ['beyond-earth','地球之外的；地外生物或外星人','adj./n.',['地球外的','地球大气圈外的'],'outside-earth','The team searched for evidence of extraterrestrial life.','团队寻找地外生命的证据。']
    ]);
    entry('diameter',[
      ['circle','直径；穿过圆心连接两端的距离','n.',['直径','直经','径'],'circle-diameter','The pipe has a diameter of twelve centimetres.','这根管道的直径为十二厘米。']
    ]);
    entry('radius',[
      ['geometry','半径；圆心到圆周的距离','n.',['半径'],'circle-radius','Doubling the radius increases the area of a circle fourfold.','半径翻倍会使圆面积变为原来的四倍。'],
      ['area','以某点为中心的一定范围','n.',['范围'],'distance-around-centre','The clinic serves villages within a radius of twenty kilometres.','诊所为方圆二十公里内的村庄提供服务。']
    ]);
    entry('spectrum',[
      ['waves','光谱；按频率排列的波段范围','n.',['光谱'],'electromagnetic-spectrum','The instrument measures light outside the visible spectrum.','仪器测量可见光谱之外的光。'],
      ['range','从一个极端到另一极端的一系列','n.',['范围','系列'],'range-of-positions','The forum included speakers from a broad political spectrum.','论坛的发言者来自广泛的政治立场。']
    ]);
    entry('molecule',[
      ['chemistry','分子；保持某种物质化学性质的微小单位','n.',['分子'],'chemical-molecule','Each water molecule contains two hydrogen atoms and one oxygen atom.','每个水分子包含两个氢原子和一个氧原子。']
    ]);
    entry('atom',[
      ['chemistry','原子；化学元素的基本单位','n.',['原子'],'chemical-atom','The model shows the electrons around the nucleus of an atom.','模型展示了原子核周围的电子。'],
      ['tiny','微量；极少的一点','n.',['微粒','微量'],'very-small-amount','There was not an atom of evidence to support the accusation.','没有丝毫证据支持这项指控。','not an atom of']
    ]);
    entry('ultraviolet',[
      ['light','紫外线的；紫外辐射','adj./n.',['紫外线的','紫外线'],'ultraviolet-radiation','The filter blocks ultraviolet light while allowing visible light through.','滤光片阻挡紫外线，同时让可见光通过。']
    ]);
    entry('quantum',[
      ['physics','量子；能量等的最小离散单位','n./modifier',['量子'],'discrete-physical-unit','The lecture explains why a quantum of light is called a photon.','讲座解释了为什么光的一个量子被称为光子。']
    ]);
    entry('diligent',[
      ['careful','勤奋的；认真用功的','adj.',['勤勉的','用功的'],'careful-and-hardworking','The diligent archivist checked each date against the original records.','认真负责的档案管理员把每个日期都与原始记录核对。']
    ]);
    entry('mentor',[
      ['guide','导师；长期提供指导的良师益友；指导','n./v.',['指导者','良师益友'],'experienced-personal-guide','Her mentor helped her prepare for the transition into management.','她的导师帮助她为转入管理岗位做准备。']
    ]);
    entry('lecturer',[
      ['teacher','大学或学院的讲师','n.',['讲师','讲课人'],'university-teacher','The lecturer encouraged students to question the assumptions in the model.','讲师鼓励学生质疑模型中的假设。'],
      ['speaker','就某个主题作演讲的人','n.',['演讲者','讲演人'],'public-lecture-speaker','The visiting lecturer described her work on ancient trade routes.','来访演讲者介绍了她对古代贸易路线的研究。']
    ]);
    entry('syllabus',[
      ['course','教学大纲；课程规定的学习内容','n.',['提纲','教学大纲','要目'],'prescribed-course-content','The new syllabus includes a practical unit on water quality.','新教学大纲包含一项水质实践单元。']
    ]);
    entry('compulsory',[
      ['required','按规定必须做的；强制或必修的','adj.',['强制性的','必须做的','义务性的','必修的'],'required-by-rule','Attendance at the safety briefing is compulsory for all visitors.','所有访客都必须参加安全说明会。']
    ]);
    entry('elective',[
      ['course','可选择修读的；选修课程','adj./n.',['选修的','选修课程'],'optional-course','She chose an elective on urban history alongside her science courses.','她在科学课程之外选择了一门城市史选修课。'],
      ['voting','由选举产生的；涉及选举的','adj.',['选举的','根据选举的'],'chosen-by-election','The student council is an elective body rather than an appointed committee.','学生会是由选举产生的机构，而不是任命的委员会。'],
      ['medical','可安排时间而非紧急进行的医疗操作','adj.',['择期的'],'scheduled-not-emergency','The hospital keeps separate schedules for elective and emergency procedures.','医院为择期手术和急诊手术分别安排日程。']
    ]);
    entry('seminar',[
      ['discussion','专题讨论会；由教师或专家指导的研讨课','n.',['研究班','专题讨论会','讨论会','专家讨论会'],'expert-led-discussion','Each student presented a short argument during the seminar.','每位学生都在研讨课上作了一次简短论述。']
    ]);
    entry('assignment',[
      ['task','分派的工作；课程作业；派驻任务','n.',['功课','任务'],'assigned-work','The assignment asks students to compare two explanations of the evidence.','这份作业要求学生比较对证据的两种解释。'],
      ['allocation','任务、职责或资源的分配','n.',['分配'],'allocation-of-responsibility','The assignment of laboratory space depends on the size of each project.','实验室空间的分配取决于各项目的规模。'],
      ['transfer','合同或财产权利的转让','n.',['转让'],'transfer-of-rights','The agreement requires consent before the assignment of the lease.','协议要求在转让租约前取得同意。']
    ]);
    entry('revise',[
      ['change','修改；修订；重新考虑并调整','v.',['校订','修正','改样','校正'],'correct-or-update','The authors revised the conclusion after checking the additional data.','作者核查新增数据后修改了结论。'],
      ['study','复习已学内容以准备考试（英式）','v.',['复习'],'study-again-for-exam','We revised the main biological processes before the examination.','考试前，我们复习了主要生物过程。']
    ]);
    entry('scrutinise',[
      ['examine','仔细检查；详细研究','v.',['仔细检查','细看','审查','详细研究'],'detailed-examination','The reviewer scrutinised the methods before accepting the results.','审稿人在接受结果之前仔细检查了研究方法。']
    ]);
    entry('hypothesis',[
      ['explanation','有待检验的假设；解释','n.',['假设'],'testable-explanation','The experiment tested the hypothesis that warmer water accelerates growth.','实验检验了水温更高会加快生长这一假设。']
    ]);
    entry('infer',[
      ['reason','根据已有信息推断','v.',['推论出','推断','作推论'],'reason-from-evidence','We inferred from the empty nests that the birds had already left.','我们从空巢推断鸟儿已经离开。','infer ... from']
    ]);
    entry('deduce',[
      ['reason','根据已知事实推论；演绎得出','v.',['推论','演绎出','推断','推出','演绎'],'reason-from-evidence','The researchers deduced the likely temperature from the mineral deposits.','研究人员根据矿物沉积推断出了可能的温度。']
    ]);
    entry('predict',[
      ['forecast','预测；预言或预报未来情况','v.',['预知','预言','预报'],'forecast-future','The model predicts how travel demand will change over the next decade.','模型预测未来十年出行需求将如何变化。']
    ]);
    entry('detect',[
      ['discover','察觉；发现隐蔽或不明显的事物','v.',['发现','察觉','查明'],'notice-hidden-signs','The auditor detected an unusual pattern in the invoices.','审计员发现了发票中一种不寻常的规律。'],
      ['instrument','通过仪器或特定方法探测到','v.',['探测'],'instrument-detection','The sensor can detect very small changes in air pressure.','传感器能够探测到气压的微小变化。']
    ]);
    entry('evaluate',[
      ['assess','评估质量、价值或重要性','v.',['评估','评价'],'assess-value-quality','The panel evaluated each proposal against the same criteria.','评审小组依据相同标准评估了每项提案。'],
      ['calculate','求出表达式或数量的值','v.',['求值'],'calculate-expression-value','Students evaluated the expression after substituting the given values.','学生代入给定数值后求出了表达式的值。']
    ]);
    entry('compute',[
      ['calculate','计算；用数学方法求得数值','v.',['计算','估算'],'mathematical-calculation','The program computes the average temperature for each month.','程序计算每个月的平均温度。']
    ]);
    entry('compress',[
      ['physical','压紧；压缩体积','v.',['压缩','压紧','受压缩小'],'reduce-physical-volume','The machine compresses loose paper into compact bales.','机器把散纸压成紧密的纸包。'],
      ['shorten','压缩文字、信息或活动时间','v.',['缩短内容'],'condense-content-time','The editor compressed the interview into a short news report.','编辑把访谈压缩成了一篇简短新闻报道。'],
      ['digital','减少数字文件所占空间；压缩数据','v.',['数据压缩'],'reduce-digital-size','The software compresses images before sending them over the network.','软件在通过网络发送图片前先进行压缩。'],
      ['dressing','敷布；用于局部敷贴的布垫','n.',['敷布'],'medical-compress','The nurse placed a cool compress on the swollen area.','护士在肿胀部位敷了一块凉布。']
    ]);
    entry('convert',[
      ['change','转换形式或用途；改装','v.',['转换','转化','改装'],'change-form-use','The owners converted the warehouse into a community theatre.','业主把仓库改造成了社区剧院。'],
      ['units','换算单位；兑换货币','v.',['兑换'],'change-units-currency','The table converts miles into kilometres.','表格把英里换算成公里。'],
      ['belief','改变信仰或立场；使皈依；改信者','v./n.',['改变信仰','使皈依','皈依者','改变信念的人'],'adopt-new-belief','The campaign converted several sceptics into supporters of the scheme.','宣传活动让几位怀疑者转而支持这项计划。']
    ]);
    entry('accumulate',[
      ['collect','逐渐积累；聚集增多','v.',['积聚','堆积'],'gradual-build-up','Sediment accumulated behind the barrier after each storm.','每次风暴过后，屏障后方都会积聚沉积物。']
    ]);
    entry('feudal',[
      ['system','封建制度的；涉及封地与等级义务的','adj.',['封建制度的','封地的','领地的'],'feudal-social-system','The historian examined land ownership under the feudal system.','历史学家考察了封建制度下的土地所有权。']
    ]);
    entry('tribe',[
      ['community','部落；有共同文化与历史的群体','n.',['宗族','部落'],'tribal-community','The museum worked with members of the tribe to describe its history accurately.','博物馆与该部落成员合作，准确介绍其历史。'],
      ['group','一大家子；有共同特点的一群人（非正式）','n.',['一群人'],'informal-affinity-group','The whole tribe of cousins gathered for the family celebration.','一大群堂表兄弟姐妹齐聚家庭庆典。']
    ]);
    entry('humanitarian',[
      ['welfare','人道主义的；关心减轻人类苦难的人','adj./n.',['人道主义者','博爱者','人道主义的','博爱的'],'human-welfare-relief','The organisation delivered humanitarian supplies to displaced families.','组织向流离失所的家庭运送了人道主义物资。']
    ]);
    entry('native',[
      ['birthplace','出生地的；本国或本地的人','adj./n.',['本地人','当地人','本国的'],'place-of-birth','A native of the city, she knew its narrow streets well.','作为这座城市的本地人，她熟悉这里狭窄的街道。'],
      ['indigenous','土生土长的；原生而非引入的','adj.',['土产','当地原生的'],'indigenous-to-region','The restoration plan uses only native tree species.','修复计划只使用当地原生树种。'],
      ['inborn','与生俱来的；天赋的','adj.',['与生俱来的','自然的'],'inborn-ability','His native curiosity led him to test every explanation.','他与生俱来的好奇心使他想检验每种解释。']
    ]);
    entry('pottery',[
      ['objects','陶器；烧制成的陶土制品或材料','n.',['陶器'],'fired-clay-objects','Fragments of pottery revealed how food had been stored.','陶器碎片揭示了当时储存食物的方式。'],
      ['craft','制陶技艺或活动','n.',['制陶'],'making-clay-objects','The evening class introduces pottery through simple bowls and cups.','夜校通过制作简单的碗杯介绍制陶技艺。'],
      ['workplace','陶器厂；制陶作坊','n.',['陶器厂'],'pottery-workshop','The old pottery now houses an exhibition of local ceramics.','旧陶器厂如今设有当地陶瓷展览。']
    ]);
    entry('engrave',[
      ['cut','雕刻；把文字或图案刻在硬质表面','v.',['刻上','雕刻'],'incise-hard-surface','The craftsperson engraved the date on the silver plate.','工匠把日期刻在了银盘上。'],
      ['memory','使深深铭记；使难以忘怀','v.',['铭记'],'lasting-memory','The view from the summit remained engraved in her memory.','峰顶的景色一直深深印在她的记忆中。','be engraved in/on memory']
    ]);
    entry('cathedral',[
      ['church','主教座堂；一个教区的主要教堂','n.',['大教堂'],'diocesan-main-church','The cathedral became the focus of the town\'s annual music festival.','主教座堂成为城镇年度音乐节的中心场所。']
    ]);
    entry('nostalgia',[
      ['past','怀旧；回忆往事时带有惆怅的眷恋','n.',['向往过去','怀旧之情'],'longing-for-past','The familiar radio theme filled her with nostalgia for childhood.','熟悉的广播主题曲让她充满了对童年的怀念。']
    ]);
    entry('adversity',[
      ['hardship','逆境；不幸或艰难处境','n.',['逆境','不幸','灾祸','灾难'],'difficult-circumstances','The community supported its youngest members through adversity.','社区支持最年轻的成员渡过逆境。']
    ]);
    entry('prosper',[
      ['thrive','繁荣；兴旺；事业发展顺利','v.',['繁荣','兴隆','成功'],'thrive-and-succeed','Small workshops prospered after the railway opened new markets.','铁路开辟新市场后，小作坊繁荣起来。']
    ]);
    entry('phoneme',[
      ['speech','音位；能区别词义的语音单位','n.',['音位'],'contrastive-speech-unit','Changing one phoneme can turn one word into another.','改变一个音位就可能把一个词变成另一个词。']
    ]);
    entry('inflection',[
      ['grammar','词形变化；表示语法功能的变化形式','n.',['词形变化'],'grammatical-word-change','The inflection marks the plural form of the noun.','这个词形变化标示了名词的复数形式。'],
      ['voice','说话时的语调或音调变化','n.',['变调','音调变化'],'speech-pitch-pattern','A rising inflection made the reply sound uncertain.','上升语调让这句回答听起来不太确定。']
    ]);
    entry('prefix',[
      ['word','加在词前形成新词的前缀','n.',['前缀'],'word-initial-affix','The prefix changes the meaning of the adjective without changing its ending.','前缀改变了形容词的意思，却不改变词尾。'],
      ['name','加在名称开头的称号或文字','n.',['称谓'],'name-initial-title','The company added a regional prefix to distinguish its local branches.','公司在名称前增加地区前缀，以区分各地分支。'],
      ['phone','电话号码前的地区或服务代码','n.',['地区号码'],'telephone-prefix','Callers must enter the international prefix before the country code.','拨打电话时必须在国家代码前输入国际拨号前缀。']
    ]);
    entry('antonym',[
      ['opposite','反义词','n.',['反义词'],'word-with-opposite-meaning','The worksheet asks learners to supply an antonym for each adjective.','练习单要求学习者为每个形容词填写一个反义词。']
    ]);
    entry('paraphrase',[
      ['reword','用不同措辞表达原意；改述的文字','v./n.',['释义','解述','改写','意译'],'reword-same-meaning','The student paraphrased the passage without changing its central argument.','学生改述了这段文字，没有改变其核心论点。']
    ]);
    entry('narration',[
      ['story','讲述故事或事件；叙述','n.',['叙述','故事','叙述文'],'telling-events','The novel shifts from first-person narration to an outside observer.','小说从第一人称叙述转到了旁观者视角。'],
      ['voiceover','影片或节目的解说词；旁白','n.',['旁白'],'documentary-voiceover','The narration explains the migration route while the map changes.','地图变化时，旁白解释着迁徙路线。']
    ]);
    entry('compile',[
      ['collect','汇集资料并编纂；整理成书或列表','v.',['编辑','编纂','收集'],'collect-and-organize-information','The volunteers compiled a directory of local support services.','志愿者编制了一份当地援助服务名录。'],
      ['program','把程序代码编译为可执行形式','v.',['编译'],'compile-program-code','The developer compiled the program after correcting the syntax error.','开发者修正语法错误后编译了程序。']
    ]);
    entry('gesture',[
      ['movement','表达意思的手势或姿态；作手势','n./v.',['手势','姿态','作手势','作姿态'],'expressive-body-movement','The guide gestured towards the path leading down to the river.','向导做手势指向通往河边的小路。'],
      ['symbolic','表达意愿或感情的象征性举动','n.',['表示心意的举动'],'symbolic-action','The free meal was a gesture of thanks to the volunteers.','这顿免费餐是向志愿者表达谢意的举动。']
    ]);
    entry('debate',[
      ['discussion','就不同观点展开辩论或讨论','n./v.',['辩论','讨论','争论'],'discussion-of-opposing-views','Residents debated whether the old market should be preserved.','居民讨论了是否应保留旧市场。'],
      ['consider','仔细考虑一个选择；权衡','v.',['权衡'],'consider-options','She debated whether to accept the distant research post.','她仔细考虑是否接受那个远方的研究职位。']
    ]);
    entry('singular',[
      ['grammar','语法上的单数；单数的','n./adj.',['单数'],'grammatical-singular','The singular form of this noun has no final letter s.','这个名词的单数形式末尾没有字母 s。'],
      ['unusual','异常的；独特而引人注意的','adj.',['异常的'],'remarkably-unusual','The building has a singular beauty that attracts many photographers.','这幢建筑具有独特的美，吸引了许多摄影师。'],
      ['one','单一的；仅有一个的（正式）','adj.',['单一的'],'single-exclusive','The team pursued a singular aim throughout the expedition.','探险期间，团队始终追求着一个目标。']
    ]);
    entry('symphony',[
      ['music','交响曲；通常由多个乐章组成的管弦乐作品','n.',['交响乐','交响曲'],'orchestral-multimovement-work','The orchestra performed a newly discovered symphony at the festival.','乐团在音乐节上演奏了一首新发现的交响曲。']
    ]);
    entry('opera',[
      ['music','歌剧；以歌唱为主要表现形式的戏剧','n.',['歌剧'],'sung-dramatic-work','The opera tells the story through both solo singing and a chorus.','这部歌剧通过独唱和合唱讲述故事。']
    ]);
    entry('comedy',[
      ['genre','喜剧；以幽默为目的的作品或表演','n.',['喜剧'],'humorous-genre','The theatre selected a comedy for its summer programme.','剧院为夏季演出季选择了一部喜剧。'],
      ['humour','事情的滑稽之处；可笑的情景','n.',['有趣的事情'],'amusing-situation','The comedy of the misunderstanding became clear only afterwards.','这场误会的滑稽之处后来才显现出来。']
    ]);
    entry('aesthetic',[
      ['beauty','美学的；审美的；外观优美的','adj.',['美学的','审美的','有美感的'],'appreciation-of-beauty','The panels serve an acoustic purpose as well as an aesthetic one.','这些板材既具有声学作用，也具有审美作用。'],
      ['style','某种艺术或设计风格','n.',['美学风格'],'visual-artistic-style','The gallery has a minimalist aesthetic with almost no decorative detail.','画廊具有极简风格，几乎没有装饰细节。']
    ]);
    entry('carve',[
      ['shape','雕刻；切削硬材料以形成形状或图案','v.',['雕刻'],'shape-by-cutting','The sculptor carved a bird from a single piece of wood.','雕刻家用一整块木头雕出了一只鸟。'],
      ['meat','把熟肉切成片','v.',['切开'],'slice-cooked-meat','He carved the roast into thin slices for the guests.','他把烤肉切成薄片给客人。']
    ]);
    entry('photograph',[
      ['image','照片；用相机拍照','n./v.',['相片','照片','照相','摄影'],'camera-image','The photograph shows the station before it was rebuilt.','这张照片显示了车站重建前的样子。']
    ]);
    entry('improvisation',[
      ['performance','即兴表演；未经预先编排的作品','n.',['即兴而作','即席演奏','即席作品'],'unplanned-performance','The jazz workshop ends with a group improvisation.','爵士乐工作坊以集体即兴演奏结束。'],
      ['resourceful','利用现有资源临时应变或制作','n.',['临时应变'],'make-do-with-resources','A little improvisation turned the boxes into useful seats.','稍加临时改造，这些箱子就变成了实用的座位。']
    ]);
    entry('athletics',[
      ['track-field','田径运动，包括跑、跳和投掷等','n.',['田径'],'track-and-field','The athletics meeting includes sprinting and long-jump events.','田径运动会包括短跑和跳远项目。'],
      ['sport','体育运动（美式广义用法）','n.',['体育运动'],'sports-generally','The school balances athletics with academic and artistic activities.','学校兼顾体育、学业和艺术活动。']
    ]);
    entry('championship',[
      ['contest','锦标赛；决出冠军的比赛','n.',['锦标赛'],'champion-deciding-competition','The club will host the regional swimming championship.','俱乐部将举办地区游泳锦标赛。'],
      ['title','冠军地位或称号','n.',['冠军身份','冠军称号'],'champion-title','The team retained its championship after an unbeaten season.','球队在整个赛季保持不败后保住了冠军头衔。'],
      ['support','对某人、权利或主张的捍卫支持','n.',['捍卫'],'active-support-for-cause','Her championship of equal access changed the university\'s policy.','她对平等入学机会的捍卫改变了大学的政策。']
    ]);
    entry('vigorous',[
      ['energy','充满活力的；强健或茁壮的','adj.',['精力充沛的','元气旺盛的','茁壮的'],'energetic-strong','Vigorous root growth helped the seedlings survive the dry spell.','旺盛的根系生长帮助幼苗熬过了干旱期。'],
      ['force','有力的；激烈或坚决的','adj.',['有力的'],'forceful-intense','The proposal faced vigorous opposition from local businesses.','提案遭到了当地企业的强烈反对。']
    ]);
    entry('cement',[
      ['building','水泥；用于制成砂浆或混凝土的材料','n.',['水泥'],'construction-cement','The workers mixed cement with sand and water to make mortar.','工人把水泥与沙和水混合，制成砂浆。'],
      ['adhesive','胶结剂；用胶结剂黏牢或涂覆','n./v.',['胶结剂','胶合','用水泥涂','黏牢'],'bonding-adhesive','The dentist used cement to secure the crown.','牙医用胶结剂固定了牙冠。'],
      ['strengthen','巩固关系、协议或地位','v.',['巩固'],'strengthen-relationship','The joint project cemented links between the two colleges.','联合项目巩固了两所学院之间的联系。']
    ]);
    entry('canvas',[
      ['cloth','帆布；用于帐篷、帆或包的结实织物','n.',['帆布'],'strong-coarse-cloth','The tent was made of heavy canvas treated to resist rain.','帐篷用经过防雨处理的厚帆布制成。'],
      ['art','画布；画在画布上的画','n.',['画布','油画'],'painting-surface','The artist covered the canvas with broad strokes of blue.','画家用宽大的蓝色笔触涂满了画布。']
    ]);
    entry('lumber',[
      ['timber','加工用于建筑等的木材（美式）','n.',['木材'],'prepared-timber','The yard stores lumber under cover to keep it dry.','货场把木材存放在遮棚下，保持其干燥。'],
      ['move','缓慢笨拙而沉重地移动','v.',['笨拙地移动','喧闹地向前走','隆隆地移动'],'heavy-awkward-movement','The loaded truck lumbered up the steep hill.','满载货物的卡车沉重缓慢地爬上陡坡。'],
      ['junk','无用的旧家具或杂物（英式）','n.',['破旧家俱','废物'],'unwanted-old-objects','The attic was filled with lumber from earlier renovations.','阁楼里堆满了以前装修留下的旧杂物。']
    ]);
    entry('crystal',[
      ['solid','晶体；形状规则的结晶','n.',['结晶'],'regular-solid-crystal','Salt crystals formed as the water evaporated.','随着水蒸发，盐晶体形成了。'],
      ['quartz','水晶；水晶制成的装饰品','n./modifier',['水晶','水晶装饰品','水晶的'],'quartz-crystal','The pendant contains a polished piece of crystal.','吊坠中嵌着一块抛光水晶。'],
      ['glass','优质晶质玻璃；其制品','n./modifier',['晶质玻璃'],'high-quality-cut-glass','The cabinet displayed crystal glasses made by local craftspeople.','柜内展示了当地工匠制作的晶质玻璃杯。']
    ]);
    entry('lubricate',[
      ['machine','加润滑剂；减少机械摩擦','v.',['润滑','给…加润滑油'],'reduce-mechanical-friction','The mechanic lubricated the hinge to stop the squeaking.','机械师润滑了铰链，使其不再吱吱作响。'],
      ['ease','使过程或关系运转顺畅','v.',['使运转顺畅'],'ease-process','Regular informal meetings lubricate cooperation between departments.','经常举行非正式会议有助于部门间顺畅合作。']
    ]);
    entry('sponge',[
      ['material','海绵；多孔吸水的清洁材料','n.',['海绵','海绵状的东西'],'absorbent-porous-material','A damp sponge removed the dust without scratching the surface.','湿海绵擦去了灰尘，没有划伤表面。'],
      ['clean','用湿海绵或布擦洗','v.',['用海绵擦拭'],'wipe-with-damp-cloth','She sponged the mud from the waterproof jacket.','她用湿布擦去了防水夹克上的泥。'],
      ['cake','海绵蛋糕；松软的蛋糕','n.',['海绵蛋糕'],'light-sponge-cake','The baker filled the sponge with fresh fruit and cream.','糕点师在海绵蛋糕中夹入了鲜果和奶油。'],
      ['depend','揩油；靠他人供给生活所需','v.',['依赖他人供养'],'live-at-others-expense','He refused to sponge off his relatives while looking for work.','找工作期间，他不愿靠亲戚白白供养。','sponge off/on']
    ]);
    entry('staple',[
      ['fastener','订书钉；U形固定钉；用钉固定','n./v.',['订书钉','钩环','钉住'],'u-shaped-fastener','Please staple the receipt to the completed form.','请把收据订在填好的表格上。'],
      ['basic','主要食品、产品或常用品；主要的','n./adj.',['主要产物','常用品','主要要素','原料','主要的','重要的'],'basic-regular-product','Rice is a staple food for much of the population.','稻米是当地许多人的主食。']
    ]);
    entry('glue',[
      ['adhesive','胶；用胶黏合','n./v.',['胶','粘性物','粘合','胶合'],'bonding-adhesive','The restorer used reversible glue to repair the paper tear.','修复师用可去除的胶修补了纸张裂口。'],
      ['hold-together','使注意力牢牢集中于；目不转睛地关注','v.',['专注于'],'engross-attention','The children were glued to the documentary about migrating whales.','孩子们目不转睛地看着关于鲸鱼迁徙的纪录片。','be glued to']
    ]);
    entry('razor',[
      ['shave','剃刀；用剃刀修剪','n./v.',['剃刀','剃'],'hair-removal-blade','He packed a razor and a small mirror for the trip.','他为旅行装好了一把剃刀和一面小镜子。']
    ]);
    entry('fuse',[
      ['safety','保险丝；过载时熔断的安全装置','n.',['保险丝'],'electrical-fuse','A blown fuse stopped the machine from drawing more current.','熔断的保险丝阻止机器继续通电。'],
      ['ignition','导火线；引爆装置','n.',['导火线'],'explosive-ignition-device','The display included an old fuse used to ignite fireworks.','展览中有一根过去用于点燃烟花的导火线。'],
      ['join','融合；使合为一体','v.',['融合'],'join-into-whole','The design fuses traditional materials with modern construction methods.','设计把传统材料与现代施工方法融为一体。'],
      ['melt','熔化；使受热熔合','v.',['熔化'],'melt-and-join','The heat fused the glass fragments into a single mass.','高温把玻璃碎片熔合成了一整块。']
    ]);
    entry('embroider',[
      ['stitch','刺绣；用绣线装饰织物','v.',['刺绣','镶边','装饰','绣花'],'decorate-with-stitches','The craft group embroidered local flowers onto the cloth.','手工小组把当地花卉绣在布上。'],
      ['story','添油加醋地讲述；虚构细节','v.',['添油加醋'],'embellish-story','He embroidered the account until the short walk sounded like an expedition.','他给叙述添油加醋，把一次短途散步说得像场探险。']
    ]);
    entry('embellish',[
      ['decorate','加以装饰；使更美观','v.',['修饰','装饰'],'add-decoration','The hall was embellished with hand-painted tiles.','大厅用手绘瓷砖作了装饰。'],
      ['story','给故事增添或改动细节；润色','v.',['润色'],'embellish-story','The narrator embellished the story with details no witness had mentioned.','叙述者用没有目击者提到的细节润色了故事。']
    ]);
    entry('cosmetics',[
      ['products','化妆品；改善外观的美容用品','n. plural',['化妆品','美容用品'],'appearance-enhancing-products','The shop sells cosmetics in refillable containers.','商店出售采用可补充装容器的化妆品。']
    ]);
    entry('elegant',[
      ['appearance','优雅的；外观或举止高雅的','adj.',['优雅的','端庄的','高雅的'],'graceful-appearance','The elegant staircase became the central feature of the restored hall.','优雅的楼梯成了修复后大厅的中心特色。'],
      ['solution','简洁而巧妙的；漂亮有效的','adj.',['简洁巧妙的'],'simple-effective-solution','The engineer found an elegant solution that required no extra moving parts.','工程师找到了一个无需额外活动零件的巧妙解决办法。']
    ]);
    entry('masquerade',[
      ['disguise','伪装；冒充；掩盖真相的表象','n./v.',['伪装','假装'],'false-appearance','The advertisement masqueraded as an independent product review.','这则广告伪装成了独立的产品评测。','masquerade as'],
      ['party','化装舞会；戴面具的聚会','n.',['化装舞会'],'masked-costume-party','Guests arrived at the masquerade wearing elaborate masks.','宾客戴着精致面具来到化装舞会。']
    ]);
    entry('indecent',[
      ['offensive','猥亵的；尤其在性方面冒犯道德的','adj.',['下流的','猥亵的'],'sexually-offensive','The broadcaster removed the indecent remark from the family programme.','广播机构从家庭节目中删去了那句猥亵言论。'],
      ['improper','不合时宜的；不适当的','adj.',['不礼貌的'],'improper-for-situation','The committee acted with indecent haste before the evidence was reviewed.','证据尚未审查，委员会便仓促采取了不合适的行动。']
    ]);
    entry('clasp',[
      ['hold','紧握；抱紧；紧握的动作','v./n.',['紧握'],'firm-hand-or-arm-hold','She clasped the railing as the boat moved.','船移动时，她紧紧抓住栏杆。'],
      ['fastener','扣子；搭扣；扣紧','n./v.',['扣子','钩','扣紧'],'fastening-clasp','The bracelet has a small silver clasp.','手镯有一个小银搭扣。']
    ]);
    entry('ribbon',[
      ['strip','丝带；缎带；长而窄的带状物','n.',['缎带','带状物','带状条'],'long-narrow-strip','A ribbon of mist stretched across the valley.','一道带状薄雾横亘山谷。'],
      ['ink','打字机或打印机的色带','n.',['色带'],'inked-printer-strip','The old typewriter needed a fresh ribbon before it could print clearly.','旧打字机需要更换色带才能清晰打字。']
    ]);
    entry('bracelet',[
      ['wrist','手镯；戴在腕部的装饰带','n.',['手镯','腕带'],'wrist-ornament','The bracelet was made from recycled glass beads.','这条手镯由回收玻璃珠制成。']
    ]);
    entry('necklace',[
      ['neck','项链；戴在颈部的饰物','n.',['项链'],'neck-ornament','The museum displayed a necklace found in the ancient burial site.','博物馆展出了一条在古代墓葬遗址发现的项链。']
    ]);
    entry('banquet',[
      ['meal','正式宴会；通常为多人举办的丰盛餐会','n.',['宴会'],'large-formal-meal','The conference ended with a banquet for delegates and hosts.','会议以为代表和东道主举办的宴会结束。']
    ]);
    entry('refreshment',[
      ['food','茶点；少量食物与饮料','n.',['点心'],'light-food-and-drink','Refreshments were served during the interval between talks.','两场报告之间的休息时间提供了茶点。','refreshments'],
      ['renewal','恢复精神或体力的休息或享受','n.',['起提神作用的事物','精神爽快'],'restorative-refreshment','The shaded garden offered welcome refreshment after the hot walk.','炎热的步行之后，阴凉花园令人愉快地恢复了精神。']
    ]);
    entry('appetiser',[
      ['starter','开胃小食；正餐前的头盘','n.',['开胃食品','开胃物'],'meal-starter','The appetiser was a small bowl of roasted vegetables.','头盘是一小碗烤蔬菜。']
    ]);
    entry('cutlery',[
      ['utensils','进餐用的刀、叉、勺等餐具','n.',['刀叉餐具'],'eating-knives-forks-spoons','Reusable cutlery replaced the disposable forks at the festival.','节日活动用可重复使用的餐具替代了一次性叉子。']
    ]);
    entry('buffet',[
      ['meal','自助餐；供人自行取用菜肴的餐食','n.',['自助餐'],'self-service-meal','The buffet included clearly labelled vegetarian dishes.','自助餐包括了标识清晰的素食菜肴。'],
      ['counter','车站等的小餐馆或售餐柜台','n.',['小卖部'],'station-food-counter','Passengers bought sandwiches at the station buffet.','乘客在车站小餐馆买了三明治。'],
      ['hit','反复冲击；连续猛烈打击（与名词读音不同）','v.',['殴打','冲击','连续打'],'repeated-forceful-hits','Strong winds buffeted the tents through the night.','强风整夜冲击着帐篷。']
    ]);
    entry('delicious',[
      ['taste','美味的；气味诱人的','adj.',['美味的'],'pleasant-food-taste','The delicious aroma of baked bread reached the street.','烤面包的诱人香气飘到了街上。'],
      ['pleasure','令人十分愉快的；妙趣横生的','adj.',['令人愉快的'],'very-pleasurable','There was a delicious irony in the expert making the simplest mistake.','专家犯了最简单的错误，其中颇有妙趣横生的讽刺意味。']
    ]);
    entry('sour',[
      ['taste','酸的；发酸变质的；使变酸','adj./v.',['酸的','酸臭的','发酵的','变酸','发酵','使变酸'],'acidic-or-soured-taste','The milk turned sour after being left in the warm kitchen.','牛奶放在温暖的厨房后变酸了。'],
      ['unfriendly','不友好的；愠怒不快的','adj.',['愠怒的'],'unfriendly-disposition','His sour expression made the new visitors feel unwelcome.','他不悦的表情让新访客觉得自己不受欢迎。'],
      ['deteriorate','关系或局面变坏；使失望或不快','v./adj.',['讨厌的','厌烦','变坏','使失望'],'become-unpleasant','Repeated delays soured relations between the two organisations.','反复延误使两个组织的关系恶化。']
    ]);
    entry('roast',[
      ['cook','烤；烘焙；烤制的食物或肉','v./adj./n.',['烤肉','烘烤','烘烤的','烤过的','烤','炙','烘焙'],'cook-by-dry-heat','The chef roasted the carrots until their edges browned.','厨师把胡萝卜烤到边缘变成褐色。'],
      ['criticise','严厉批评；在表演中善意调侃','v./n.',['嘲笑'],'severe-or-comic-criticism','The comedian roasted the host with jokes about his famous lateness.','喜剧演员拿主持人出了名的迟到习惯开玩笑，调侃了他。']
    ]);
    entry('grind',[
      ['powder','磨碎；碾成粉末','v.',['磨','碾','磨碎'],'reduce-to-powder','The mill grinds dried grain into flour.','磨坊把晒干的谷物磨成面粉。'],
      ['rub','磨光或磨利；摩擦产生刺耳声','v.',['磨擦','磨光'],'rub-hard-surfaces','The old gears ground against each other when the motor started.','电动机启动时，旧齿轮相互摩擦发出了刺耳声。'],
      ['toil','艰苦乏味的日常工作','n.',['苦差'],'tedious-hard-work','The long commute made the daily grind even more tiring.','漫长通勤让日常苦差更加令人疲惫。'],
      ['grain','研磨颗粒的粗细程度','n.',['研磨粒度'],'ground-particle-size','A finer grind changes how quickly the coffee releases its flavour.','更细的研磨颗粒会改变咖啡释放风味的速度。']
    ]);
    entry('soak',[
      ['wet','使湿透；液体大量渗入','v.',['浸','湿透','使上下湿透','吸入','吸收','渗透'],'saturate-with-liquid','Rain soaked the unprotected notebooks inside the open bag.','雨水浸透了敞开的包里没有保护的笔记本。'],
      ['immerse','长时间浸泡；一次泡洗','v./n.',['浸泡'],'leave-in-liquid','She left the beans to soak overnight before cooking them.','她把豆子浸泡了一夜再烹煮。'],
      ['take-in','尽情吸收信息、气氛或体验','v.',['吸收体验'],'absorb-experience','The visitors paused to soak up the atmosphere of the old square.','访客停下来，尽情感受古老广场的气氛。','soak up']
    ]);
    entry('scaffold',[
      ['building','脚手架；建筑施工的临时支架','n.',['脚手架'],'temporary-building-platform','The workers inspected the scaffold before climbing onto it.','工人在爬上脚手架之前检查了它。'],
      ['execution','旧时执行死刑的高台','n.',['绞刑台'],'execution-platform','The historical display included a drawing of the public scaffold.','历史展览中有一幅公共行刑台的图画。']
    ]);
    entry('carpenter',[
      ['trade','木匠；制作或修理木结构的人','n.',['木匠'],'woodwork-craftsperson','The carpenter repaired the window frames without replacing the original wood.','木匠修好了窗框，没有更换原有木料。']
    ]);
    entry('chimney',[
      ['smoke','烟囱；供烟气排出的通道','n.',['烟囱'],'smoke-outlet','The chimney carried smoke above the neighbouring roofs.','烟囱把烟气排到了邻近屋顶上方。'],
      ['rock','可供攀登的狭窄垂直岩隙','n.',['垂直岩隙'],'vertical-rock-passage','The climbers ascended a narrow chimney between two rock walls.','攀登者沿两面岩壁之间的狭窄垂直岩隙向上攀爬。']
    ]);
    entry('cellar',[
      ['room','地下室；地窖','n.',['地窖','地下室'],'underground-storage-room','The cellar kept the vegetables cool throughout the summer.','地窖让蔬菜整个夏天都保持凉爽。'],
      ['wine','藏酒；藏酒的地窖或酒的收藏','n.',['藏酒'],'stored-wine-collection','The restaurant is known for its carefully chosen cellar.','餐馆以其精心挑选的藏酒闻名。']
    ]);
    entry('porch',[
      ['entrance','门廊；建筑入口或一侧有顶的区域','n.',['门廊'],'covered-entrance','They waited under the porch while the rain passed.','他们在门廊下等雨过去。']
    ]);
    entry('elevator',[
      ['lift','电梯；垂直运送人或物的升降机','n.',['电梯','升降机'],'vertical-building-lift','The elevator provides access to all four floors of the museum.','电梯方便人们到达博物馆的全部四层。'],
      ['conveyor','提升货物或谷物的输送装置','n.',['提升机'],'goods-lifting-conveyor','The grain elevator moved the harvest into the storage silo.','谷物提升机把收获的粮食送进了储粮仓。']
    ]);
    entry('escalator',[
      ['stairs','自动扶梯；移动的阶梯','n.',['电动扶梯','自动扶梯','升降阶梯'],'moving-stairway','The escalator carries passengers from the platform to the ticket hall.','自动扶梯把乘客从站台送到售票大厅。']
    ]);
    entry('viaduct',[
      ['bridge','跨越山谷等地形的长高架桥','n.',['高架桥'],'long-elevated-bridge','The railway crosses the valley on a stone viaduct.','铁路通过一座石制高架桥跨过山谷。']
    ]);
    entry('layout',[
      ['arrangement','空间、设备或页面的布局；布局图','n.',['布局','陈列','规划图','页面布局','版面编排','版面'],'spatial-page-arrangement','The revised layout gives wheelchair users more space between tables.','修改后的布局为轮椅使用者在桌间留出了更多空间。']
    ]);
    entry('vicinity',[
      ['nearby','附近；周边地区','n.',['附近','邻近','附近地区','近处'],'surrounding-area','Several cycle routes are available in the vicinity of the lake.','湖泊附近有几条可供选择的骑行路线。','in the vicinity of']
    ]);
    entry('embark',[
      ['board','登船或登机；使上船或飞机','v.',['乘船','上飞机','使上船','使上飞机'],'board-transport','The passengers embarked shortly before sunset.','乘客在日落前不久登船。'],
      ['begin','开始从事重要或耗时的活动','v.',['着手','从事','使从事'],'begin-major-undertaking','The institute embarked on a long-term study of coastal change.','研究所开始了一项关于海岸变化的长期研究。','embark on/upon']
    ]);
    entry('submerge',[
      ['water','潜入水中；使浸没或被水淹没','v.',['淹没','浸没','使潜入水中','潜入水中'],'go-below-water','The survey team found a road submerged beneath the reservoir.','勘察队发现了一条淹没在水库下的道路。'],
      ['hide','完全掩盖；使不明显或被压倒','v.',['掩盖','湮没'],'cover-completely','The central issue was submerged beneath a flood of minor complaints.','核心问题被大量琐碎投诉淹没了。']
    ]);
    entry('locomotive',[
      ['engine','铁路机车；牵引列车的车头','n./modifier',['火车头','机车','火车头的'],'railway-traction-engine','The restored locomotive pulled three passenger carriages.','修复后的机车牵引着三节客车。']
    ]);
    entry('velocity',[
      ['speed','运动速度；物理中含方向的速度','n.',['速度','迅速'],'speed-of-motion','The experiment measured the velocity of water through the pipe.','实验测量了水流经管道时的速度。']
    ]);
    entry('transmit',[
      ['signals','传送信号或信息；广播发射','v.',['传输','传达','发射','传播','发射信号','传送'],'communicate-message','The satellite transmits weather data to a station on the ground.','卫星把气象数据传送到地面站。'],
      ['disease','传播疾病；传染','v.',['传染'],'transmit-disease','The study traced how the infection was transmitted between households.','研究追踪了感染如何在家庭之间传播。'],
      ['inherit','遗传；把特征或传统传给后代','v.',['遗传','留传下来'],'pass-between-generations','Stories transmitted through generations preserve the community\'s history.','代代相传的故事保存了社区的历史。']
    ]);
    entry('transition',[
      ['change','转变；向另一状态过渡；过渡期','n./v.',['转变','转换','变迁','过渡时期'],'change-between-states','The programme supports the transition from school to work.','项目支持从学校向工作的过渡。'],
      ['link','文章、音乐或节目中连接部分的过渡','n.',['衔接'],'link-between-sections','A brief transition connects the two contrasting sections of the essay.','一段简短过渡连接了文章中相互对照的两部分。']
    ]);
    entry('expiration',[
      ['expiry','期限届满；有效期终止（尤美式）','n.',['终止','满期'],'end-of-valid-period','The card must be renewed before its expiration date.','卡片必须在有效期届满前更新。'],
      ['breathing','呼气；把气体呼出','n.',['呼出','呼气','呼'],'breathing-out','The monitor records changes in airflow during expiration.','监测器记录呼气时气流的变化。']
    ]);
    entry('canal',[
      ['waterway','运河；人工修建的输水或航运水道','n.',['运河','水道','沟渠'],'artificial-waterway','The canal connects inland factories with the coastal port.','运河把内陆工厂与沿海港口连接起来。'],
      ['body','身体内的管道','n.',['管'],'anatomical-canal','The diagram shows the position of the ear canal.','图示展示了耳道的位置。']
    ]);
    entry('carriage',[
      ['horse','四轮马车','n.',['马车'],'horse-drawn-vehicle','A restored carriage shows how wealthy travellers once crossed the region.','一辆修复的马车展示了昔日富裕旅行者如何穿越这个地区。'],
      ['train','火车客车车厢（英式）','n.',['客车'],'rail-passenger-car','The front carriage has space for bicycles and larger bags.','前部车厢有放自行车和大包的空间。'],
      ['transport','货物运输；运费','n.',['运输','搬运费','运费'],'goods-transport-charge','The quoted price includes carriage to the customer\'s address.','报价包括运送到客户地址的运费。'],
      ['posture','体态；举止仪态','n.',['举止'],'bodily-posture-bearing','The dancer\'s upright carriage made every movement look controlled.','舞者挺拔的体态让每个动作都显得从容可控。']
    ]);
    entry('canoe',[
      ['boat','轻型狭长划艇；乘划艇航行','n./v.',['独木舟','轻舟','乘独木舟','用独木舟运'],'paddle-powered-narrow-boat','They travelled along the sheltered river in a canoe.','他们乘轻舟沿避风的河道前行。']
    ]);
    entry('republic',[
      ['government','共和国；无君主的共和政体','n.',['共和国','共和政体'],'republican-state','The textbook compares a republic with a constitutional monarchy.','教材比较了共和国与君主立宪制。']
    ]);
    entry('federal',[
      ['system','联邦制的；由地区与中央分担权力的','adj.',['联邦的','联邦制的'],'federal-power-system','The country adopted a federal system with regional legislatures.','该国采用了设有地区立法机构的联邦制。'],
      ['central','联邦中央政府的','adj.',['联邦中央政府的'],'national-federal-government','The project receives funding from both federal and local authorities.','项目同时获得联邦中央与地方当局的资助。']
    ]);
    entry('immigrate',[
      ['settle','移民入境；移入另一国家定居','v.',['移入','移民入境','移居外国定居'],'enter-country-to-settle','Her grandparents immigrated to the country in search of secure work.','她的祖父母为寻找稳定工作移居到了这个国家。']
    ]);
    entry('asylum',[
      ['protection','避难；因无法安全回国而获得的庇护','n.',['庇护'],'refuge-protection','The family sought asylum after fleeing political persecution.','这个家庭逃离政治迫害后寻求了庇护。'],
      ['institution','收容机构；旧时对精神病院的称呼','n.',['收容所','养育院'],'historical-care-institution','The archive contains records from a former asylum.','档案馆保存着一所旧收容机构的记录。']
    ]);
    entry('franchise',[
      ['business','特许经营权；特许经营的企业；授予经营权','n./v.',['特许经营权'],'licensed-business-operation','The company sells each franchise with training for the new owner.','公司出售每项特许经营权时，都为新业主提供培训。'],
      ['vote','选举权；公民投票权','n.',['公民权'],'right-to-vote','The campaign demanded an extension of the franchise.','这场运动要求扩大选举权。','the franchise'],
      ['media','同一品牌或角色的一系列作品','n.',['系列作品'],'shared-media-series','The successful film developed into a franchise with several sequels.','成功的电影发展成了拥有多部续作的系列。'],
      ['sports','职业联赛中获准运营的球队','n.',['职业球队'],'licensed-sports-team','The new franchise recruited experienced players for its first season.','新成立的职业球队为首个赛季招募了经验丰富的球员。']
    ]);
    entry('entitle',[
      ['right','给予权利；使有资格享用','v.',['给...权利','使有资格'],'grant-right-or-eligibility','The pass entitles holders to free entry to the exhibition.','通行证使持有人有权免费参观展览。','entitle someone to'],
      ['name','给书、作品等题名','v.',['取名为','给予名称','叫做','称呼'],'give-title','She entitled the final chapter A New Beginning.','她把最后一章题为《新的开始》。']
    ]);
    entry('delegation',[
      ['group','代表团；代表较大群体发言的人','n.',['代表团','派遣代表团'],'representative-group','The delegation met local officials to discuss water management.','代表团与当地官员会面，讨论水资源管理。'],
      ['authority','授权；委派职责或任务','n.',['代表的地位(或权力)','派遣','委任','委托'],'assignment-of-authority','Clear delegation of duties prevented two teams from duplicating the work.','明确委派职责避免了两个团队重复工作。']
    ]);
    entry('senate',[
      ['legislature','某些政治制度中的参议院','n.',['参议院','立法机构'],'upper-legislative-house','The bill was debated in the senate before returning to the lower house.','法案在参议院辩论后被送回下议院。'],
      ['university','大学等机构的评议会或管理委员会','n.',['评议会'],'university-governing-council','The university senate approved the revised examination rules.','大学评议会批准了修改后的考试规则。']
    ]);
    entry('liberty',[
      ['freedom','自由；依法享有的行动或表达权利','n.',['自由','自由权'],'freedom-and-rights','The debate concerned the balance between public safety and individual liberty.','辩论涉及公共安全与个人自由之间的平衡。'],
      ['permission','有权或获准做某事','n.',['许可'],'permission-to-act','The researcher was not at liberty to disclose confidential interviews.','研究人员无权披露保密访谈。','at liberty to'],
      ['presumption','冒昧；未经允许的越界行为','n.',['冒失'],'presumptuous-action','He took the liberty of moving the meeting to a larger room.','他擅自把会议改到了更大的房间。','take the liberty of'],
      ['alteration','对事实或作品作自由改动','n.',['任意改动'],'unauthorized-creative-change','The adaptation takes liberties with the order of historical events.','改编作品任意调整了历史事件的顺序。','take liberties with']
    ]);
    entry('proclaim',[
      ['announce','公开或正式宣布；宣告','v.',['宣布','公告','宣言','宣告','公布'],'public-official-announcement','The mayor proclaimed the opening of the new public park.','市长宣布新公园正式开放。'],
      ['show','明确表明；使显而易见','v.',['表明'],'make-clearly-known','The elaborate entrance proclaimed the building\'s importance to the town.','精致的入口彰显了这幢建筑对城镇的重要性。']
    ]);
    entry('lease',[
      ['agreement','租约；约定付费使用财产的协议或租期','n.',['租约','租期'],'rental-agreement','The lease allows the tenants to renew for another year.','租约允许租户续租一年。'],
      ['rent','按租约出租或租用','v.',['租','出租','租出','租得'],'rent-property','The business leases a small office near the station.','这家企业在车站附近租用了一间小办公室。']
    ]);
    entry('voucher',[
      ['payment','代金券；优惠券；可抵扣费用的凭单','n.',['凭证','凭单'],'payment-or-discount-coupon','The voucher can be exchanged for a meal at any participating cafe.','凭券可在任何参与活动的咖啡馆兑换一餐。']
    ]);
    entry('retail',[
      ['sale','零售；向最终消费者出售；零售的','n./v./adj.',['零售','零售的'],'sell-direct-to-consumer','The cooperative retails its produce through a small village shop.','合作社通过村里一家小商店零售农产品。'],
      ['story','转述；传播消息或故事（正式）','v.',['详述','传播'],'retell-report','The newspaper retailed the rumour without checking its source.','报纸未经核查消息来源就传播了传闻。']
    ]);
    entry('wholesale',[
      ['trade','批发；以批发方式交易的','n./v./adj./adv.',['批发','批发的','照批发方式','经营批发业'],'sell-bulk-to-business','The farm sells most of its fruit wholesale to local distributors.','农场把大部分水果批发给当地经销商。'],
      ['scale','大规模的；不加区分地广泛进行的','adj./adv.',['大规模的','大规模'],'large-indiscriminate-scale','The proposal would require wholesale changes to the existing timetable.','提案将要求对现有时间表作全面大规模调整。']
    ]);
    entry('donation',[
      ['gift','捐赠；捐出的金钱、物品或其他东西','n.',['捐赠物','捐款','捐赠','赠品'],'charitable-gift','A donation of spare equipment helped the school open its science club.','捐赠的闲置设备帮助学校开办了科学社团。']
    ]);
    entry('taxation',[
      ['system','征税；税收制度','n.',['课税','征税','抽税','纳税','税制'],'levying-tax-system','The report compares taxation in several economies.','报告比较了几个经济体的税收制度。'],
      ['amount','所征或应缴的税款','n.',['税款','估定的税额'],'amount-of-tax','The chart shows how much income remains after taxation.','图表显示了缴税后剩余多少收入。']
    ]);
    entry('deflation',[
      ['economy','通货紧缩；物价总体水平下降','n.',['通货紧缩'],'general-price-decline','Persistent deflation can cause households to postpone major purchases.','持续的通货紧缩可能使家庭推迟大额采购。'],
      ['air','放气；因气体减少而缩小','n.',['放气','缩小','解除气胀'],'air-release-shrinkage','Slow deflation reduced the balloon\'s size over several hours.','缓慢放气使气球在几个小时内缩小了。'],
      ['confidence','信心、热情或力量的减弱','n.',['信心减弱'],'loss-of-confidence','There was a sense of deflation when the expected funding failed to arrive.','预期资金未能到位时，大家感到一阵泄气。']
    ]);
    entry('payroll',[
      ['list','受雇人员及其工资的名册','n.',['工资名单','饷金名单','工资表','工资单'],'employee-pay-list','Seasonal workers were added to the payroll in June.','季节工在六月被加入了工资名册。'],
      ['total','需要支付的工资总额','n.',['发放的工资总额'],'total-wage-bill','The extra staff increased the monthly payroll considerably.','额外员工使月度工资总额大幅增加。']
    ]);
    entry('accountable',[
      ['responsible','有责任作出说明的；可被问责的','adj.',['负有责任的'],'answerable-for-actions','The manager is accountable to the board for the use of public funds.','经理须就公共资金的使用向董事会负责。','accountable to ... for ...']
    ]);
    entry('cooperate',[
      ['joint','为共同目的合作；协力','v.',['合作','协力'],'work-together','The laboratories cooperate on projects that require expensive equipment.','这些实验室在需要昂贵设备的项目上合作。'],
      ['comply','配合他人要求；提供协助','v.',['配合'],'help-by-complying','Visitors were asked to cooperate with the safety inspection.','访客被要求配合安全检查。']
    ]);
    entry('enact',[
      ['law','制定并使法律生效；付诸实施','v.',['制定法律','颁布'],'put-law-into-force','The council enacted rules protecting the historic waterfront.','议会制定了保护历史滨水区的规定。'],
      ['perform','扮演；把故事或事件演出来','v.',['扮演'],'perform-dramatic-events','The pupils enacted a scene from the novel.','学生把小说中的一个场景表演了出来。']
    ]);
    entry('accuse',[
      ['charge','指控或指责某人做错事','v.',['指责','控告','归咎于'],'allege-wrongdoing','Residents accused the factory of polluting the river.','居民指责工厂污染河流。','accuse someone of something']
    ]);
    entry('sue',[
      ['legal','提起诉讼；向法院起诉','v.',['控告','起诉','提出诉讼'],'bring-civil-legal-action','The buyer sued the supplier for failing to deliver the goods.','买方因供应商未能交货而起诉了对方。'],
      ['appeal','正式请求；求和等（正式搭配）','v.',['请求','提出请求'],'formally-appeal','After months of fighting, the leaders decided to sue for peace.','数月战斗后，领导人决定求和。','sue for peace']
    ]);
    entry('confine',[
      ['limit','把活动、问题等限制在一定范围','v.',['限制'],'restrict-to-limits','The researcher confined the analysis to publicly available records.','研究人员把分析限定在公开可用的记录范围内。','confine ... to'],
      ['keep-in','使不能离开某处；禁闭','v.',['使不外出','禁闭'],'keep-within-place','The storm confined the hikers to their shelter for two days.','暴风雨把徒步者困在避难处两天。'],
      ['bounds','边界；界限或范围（通常复数）','n.',['边缘','范围','区域'],'outer-limits','The discussion moved beyond the confines of the original question.','讨论超出了原始问题的范围。','the confines of']
    ]);
    entry('anonymous',[
      ['unnamed','姓名不公开或不详的；匿名的','adj.',['姓氏不详的','无名的'],'identity-not-revealed','The survey allowed anonymous responses to sensitive questions.','调查允许对敏感问题匿名作答。'],
      ['featureless','缺乏个性或特色的；不引人注意的','adj.',['无特色的'],'without-distinctive-character','The offices occupied an anonymous building on the edge of town.','办公室设在城镇边缘一幢毫无特色的建筑里。']
    ]);
    entry('genuine',[
      ['authentic','真实的；确为所声称的；非伪造的','adj.',['真正的','真实的'],'authentic-not-fake','Tests confirmed that the signature was genuine.','检测确认了签名是真迹。'],
      ['sincere','真诚的；感情诚恳的','adj.',['诚恳的'],'sincere-feeling','The volunteers showed genuine concern for isolated residents.','志愿者对孤立无援的居民表现出了真诚关怀。']
    ]);
    entry('mandatory',[
      ['required','依法或按规定必须履行的','adj.',['强制的','必须履行的','法定的'],'required-by-rule','A safety check is mandatory before the equipment can be used.','设备使用前必须进行安全检查。']
    ]);
    entry('petition',[
      ['public','请愿书；签名要求当局采取行动；请愿','n./v.',['请愿','陈情书','正式请求','恳求'],'formal-public-request','The residents signed a petition asking for a safer crossing.','居民签署请愿书，要求设置更安全的过街通道。'],
      ['court','向法院提交的正式申请或诉状','n./v.',['诉状','申请'],'formal-court-application','The court considered the petition before setting a hearing date.','法院在安排听证日期前审查了申请。']
    ]);
    entry('procedure',[
      ['process','办事程序；正式手续或操作规程','n.',['程序','过程','手续','规程'],'established-set-of-actions','The guide explains the procedure for reporting a lost passport.','指南解释了报告护照遗失的程序。'],
      ['medical','医疗操作或手术','n.',['医疗操作'],'medical-intervention','The specialist explained the procedure before asking for consent.','专科医生在征求同意前解释了医疗操作。']
    ]);
    entry('consequence',[
      ['result','结果；行为或情况造成的后果','n.',['结果','后果'],'result-of-action','One consequence of the closure was a longer journey to work.','关闭带来的一个后果是上班路程变长。'],
      ['importance','重要性；影响力（正式）','n.',['重要性'],'significance-importance','The small difference is of little consequence to the overall result.','这个小差异对总体结果无关紧要。','of consequence']
    ]);
    entry('turbulent',[
      ['unsettled','动荡的；充满突变、争执或骚乱的','adj.',['骚乱的','紊乱的'],'unstable-disorderly','The industry faced a turbulent period of mergers and closures.','行业经历了兼并和关闭频发的动荡时期。'],
      ['flow','气流或水流猛烈不规则的','adj.',['狂暴的'],'irregular-violent-flow','The aircraft encountered turbulent air above the mountains.','飞机在山脉上方遇到了紊乱气流。']
    ]);
    entry('devastate',[
      ['damage','严重破坏；摧毁地方或事物','v.',['毁坏','使荒废','毁灭','掠夺'],'cause-major-destruction','The fire devastated several blocks of historic buildings.','大火严重破坏了几个街区的历史建筑。'],
      ['emotion','使极度震惊或悲伤','v.',['使悲痛欲绝'],'severe-emotional-distress','The sudden closure devastated workers who had spent decades there.','突然关闭让在那里工作了几十年的工人悲痛不已。']
    ]);
    entry('humiliate',[
      ['shame','羞辱；使丢脸或失去自尊','v.',['羞辱','使蒙羞','使丢脸'],'cause-shame','Public criticism humiliated the trainee instead of helping her improve.','公开批评让学员感到受辱，而没有帮助她改进。'],
      ['defeat','使惨败；以大比分击败','v.',['使惨败'],'crushing-defeat','The inexperienced side was humiliated in its first competitive match.','经验不足的一方在首次正式比赛中惨败。']
    ]);
    entry('conquer',[
      ['control','征服土地或人群；以武力取得控制','v.',['征服'],'take-control-by-force','The army conquered the coastal towns before advancing inland.','军队征服沿海城镇后继续向内陆推进。'],
      ['overcome','战胜困难、对手或恐惧','v.',['克服','战胜','得胜'],'overcome-obstacle','Practice helped her conquer her fear of public speaking.','练习帮助她克服了公开演讲的恐惧。']
    ]);
    entry('resistance',[
      ['opposition','抵抗；反对；拒绝接受改变','n.',['反抗','抵抗'],'opposition-to-force-change','The proposal met strong resistance from residents.','提案遭到了居民的强烈反对。'],
      ['tolerance','抵抗疾病、药物或损害的能力','n.',['抵抗力','耐力','抗性','抗药性'],'resist-damage-disease','The study measured the bacteria\'s resistance to antibiotics.','研究测量了细菌对抗生素的耐药性。'],
      ['force','阻碍运动的阻力','n.',['阻力'],'physical-resisting-force','The streamlined shape reduces air resistance.','流线型外形减少了空气阻力。'],
      ['electricity','电阻；对电流的阻碍程度','n.',['电阻'],'electrical-resistance','The wire\'s resistance increased as its temperature rose.','随着温度升高，导线的电阻增大。'],
      ['movement','反抗占领者的地下抵抗组织','n.',['抵抗组织'],'anti-occupation-movement','The museum documents the local resistance during the occupation.','博物馆记录了占领期间当地抵抗组织的活动。']
    ]);
    entry('obstacle',[
      ['barrier','障碍物；阻碍进展的因素','n.',['障碍','妨害物','阻碍'],'barrier-to-progress','The lack of affordable transport remains an obstacle to employment.','缺乏负担得起的交通仍是就业的障碍。']
    ]);
    entry('sacrifice',[
      ['give-up','为他人或更重要目标作出牺牲；舍弃','n./v.',['牺牲'],'give-up-for-higher-goal','They sacrificed some free time to keep the community centre open.','他们牺牲了一些休息时间，让社区中心保持开放。'],
      ['religious','向神献祭；祭品或祭祀仪式','n./v.',['供奉','祭品','祭祀','献祭'],'religious-offering','The text describes the role of sacrifice in the ancient ceremony.','文献描述了献祭在古代仪式中的作用。']
    ]);
    entry('patriotism',[
      ['country','爱国心；对国家的热爱与自豪','n.',['爱国心','爱国精神','爱国主义'],'love-of-country','The exhibition explores how music expressed patriotism during that period.','展览探讨了那个时期音乐如何表达爱国情感。']
    ]);
    entry('manoeuvre',[
      ['movement','需要技巧的动作；操纵物体转向或移动','n./v.',['调动','操纵'],'skilled-controlled-movement','The driver manoeuvred the bus into a narrow parking space.','司机操纵公交车驶入狭窄停车位。'],
      ['military','军事调动；演习','n./v.',['调遣','演习'],'planned-military-movement','The soldiers practised a coordinated manoeuvre during the exercise.','士兵在演习中练习了一项协同机动。'],
      ['strategy','为获取优势而运用策略；巧妙安排','n./v.',['策略','用策略'],'strategic-advantage-seeking','The negotiator used a careful manoeuvre to reopen discussions.','谈判者运用了一项谨慎策略，重新启动讨论。']
    ]);
    entry('trespass',[
      ['land','未经许可进入他人土地或建筑；非法侵入','v./n.',['擅自进入','非法侵入','侵入'],'unauthorized-land-entry','Signs warned walkers not to trespass on the restoration site.','标牌警告步行者不要擅自进入修复工地。'],
      ['impose','侵占他人权利、时间或耐心；打扰','v.',['侵害','打扰','冒犯'],'impose-on-others','She apologised for trespassing on the lecturer\'s time.','她为占用讲师的时间表示歉意。','trespass on/upon']
    ]);
    entry('orphan',[
      ['child','失去双亲的孩子；使成为孤儿','n./v.',['孤儿','无双亲的','孤儿的','使成孤儿'],'child-without-parents','The charity supports children orphaned by conflict.','慈善机构援助因冲突而成为孤儿的儿童。']
    ]);
    entry('nephew',[
      ['family','侄子；外甥；配偶兄弟姐妹的儿子','n.',['侄子','外甥'],'sibling-son','Her nephew stayed with her while attending a nearby college.','她的侄子在附近学院上学期间住在她家。']
    ]);
    entry('niece',[
      ['family','侄女；外甥女；配偶兄弟姐妹的女儿','n.',['侄女','甥女'],'sibling-daughter','He helped his niece prepare a model for the school science fair.','他帮助侄女为学校科学展准备模型。']
    ]);
    entry('spouse',[
      ['partner','配偶；丈夫或妻子','n.',['配偶'],'married-partner','Employees may bring a spouse to the annual dinner.','员工可以携配偶参加年度晚宴。']
    ]);
    entry('heir',[
      ['inherit','财产、头衔等的继承人','n.',['继承人','嗣子','后嗣'],'legal-inheritor','The document named her as the heir to the family estate.','文件将她指定为家族地产的继承人。'],
      ['tradition','思想、传统或地位的继承者','n.',['传统继承者'],'inheritor-of-tradition','The movement sees itself as an heir to earlier campaigns for equality.','这场运动把自己视为早期平等运动的继承者。']
    ]);
    entry('successor',[
      ['following','接任者；接替前者的事物','n.',['继承者','接任者','后继'],'person-or-thing-following','The director trained her successor before retiring.','主任退休前培训了接任者。']
    ]);
    entry('professional',[
      ['occupation','专业人员；需要专门训练的职业的','n./adj.',['专业人才','专业的'],'trained-occupation','A qualified professional inspected the damaged roof.','一位合格的专业人员检查了受损屋顶。'],
      ['paid','以此谋生的；职业而非业余的','adj./n.',['职业的'],'paid-not-amateur','She became a professional musician after several years of part-time performance.','兼职演出几年后，她成为了职业音乐家。'],
      ['conduct','做事专业、可靠而得体的','adj.',['专业可靠的'],'competent-work-conduct','The receptionist remained professional even when visitors became impatient.','即使访客不耐烦，接待员仍保持了专业态度。']
    ]);
    entry('intimate',[
      ['close','亲密的；私人而不公开的','adj.',['亲密的','私人的','隐私的','密切的'],'close-private-relationship','The letters reveal an intimate friendship that lasted for decades.','这些信件展现了一段持续数十年的亲密友谊。'],
      ['knowledge','了解深入而详尽的','adj.',['详尽的'],'detailed-personal-knowledge','Her intimate knowledge of local tides helped the survey team.','她对当地潮汐的深入了解帮助了勘察队。'],
      ['friend','密友；亲近的朋友','n.',['密友'],'close-friend','Only a few intimates knew about his plans to retire.','只有几位密友知道他的退休打算。'],
      ['suggest','间接暗示；透露意图（与形容词读音不同）','v.',['暗示','透露','告知'],'indirectly-suggest','The chair intimated that further changes might be necessary.','主席暗示可能还需要进一步修改。']
    ]);
    entry('kin',[
      ['relatives','亲属；家族成员；血缘关系','n.',['亲戚','同族','血缘关系','家族'],'family-relatives','The form asks for the name of the patient\'s next of kin.','表格要求填写患者最近亲属的姓名。','next of kin']
    ]);
    entry('commuter',[
      ['travel','经常往返于家与工作地点的通勤者','n.',['乘公共车辆上下班者'],'regular-home-work-traveller','The new cycle path offers commuters an alternative to the crowded bus.','新自行车道为通勤者提供了拥挤公交车之外的选择。']
    ]);
    entry('stipulate',[
      ['condition','明确规定；把某事作为条件要求','v.',['规定'],'specify-required-condition','The contract stipulates that all materials must be locally sourced.','合同明确规定所有材料必须来自本地。']
    ]);
    entry('convince',[
      ['belief','使相信；使确信某事属实','v.',['使相信','使确信','使信服','使人认识错误'],'persuade-belief','The detailed evidence convinced the panel that the results were reliable.','详细证据使评审小组相信结果可靠。'],
      ['action','说服某人采取行动','v.',['说服'],'persuade-action','They convinced the owner to preserve the original windows.','他们说服业主保留原有窗户。','convince someone to do']
    ]);
    entry('reassure',[
      ['comfort','使安心；消除疑虑；再作保证','v.',['使安心','安慰','使打消疑虑','再次保证'],'comfort-reduce-worry','The regular updates reassured families waiting for news.','定期通报让等待消息的家庭安心了。']
    ]);
    entry('rectify',[
      ['correct','纠正错误；矫正不理想状况','v.',['订正','矫正','改正','调正','校正'],'correct-problem','The publisher rectified the error in the next edition.','出版社在下一版纠正了这个错误。'],
      ['electricity','整流；把交流电转为直流电','v.',['整流'],'convert-ac-to-dc','The circuit rectifies the alternating current before it reaches the battery.','电路在交流电进入电池前进行整流。']
    ]);
    entry('offset',[
      ['balance','抵消；补偿负面影响','v./n.',['抵消','弥补'],'counterbalance-effect','Lower energy bills offset part of the cost of insulation.','更低的能源账单抵消了部分保温施工费用。'],
      ['printing','胶印；用间接转印方式印刷','n./modifier',['胶印'],'offset-printing','The brochure was produced by offset printing for a large print run.','为大批量印制，这本宣传册采用了胶印。'],
      ['displacement','偏移量；相对参照位置的距离','n.',['偏移量'],'relative-position-displacement','The engineer measured the offset between the two parallel lines.','工程师测量了两条平行线之间的偏移距离。']
    ]);
    entry('propel',[
      ['move','推动；使向前运动','v.',['推进'],'drive-forward','A small electric motor propels the boat across the lake.','一台小型电动机推动小船穿过湖面。'],
      ['cause','驱使；促使进入新地位或境况','v.',['驱使'],'drive-to-outcome','The discovery propelled the young researcher into the public spotlight.','这项发现把年轻研究人员推到了公众关注的中心。']
    ]);
    entry('exaggerate',[
      ['overstate','夸大程度、重要性或数量；夸张','v.',['夸大','夸张'],'overstate-reality','The advertisement exaggerates the savings most households can expect.','广告夸大了大多数家庭能预期获得的节省。']
    ]);
    entry('prolong',[
      ['extend','延长持续时间；使拖长','v.',['延长','拖延','拖长'],'extend-duration','The extra inspection prolonged the closure by two days.','额外检查使关闭时间延长了两天。']
    ]);
    entry('differentiate',[
      ['distinguish','区分；辨别差异；使具有不同特点','v.',['区别','区分'],'recognize-difference','The test differentiates genuine samples from artificial imitations.','测试区分真样品与人工仿制品。'],
      ['biology','细胞分化；发展为不同功能的形式','v.',['分化'],'biological-differentiation','The cells differentiate into several specialised types as the tissue develops.','组织发育时，细胞分化成几种专门类型。'],
      ['mathematics','求导数；微分','v.',['求导'],'mathematical-differentiation','Students differentiated the function to find its rate of change.','学生对函数求导，找出其变化率。'],
      ['teaching','按不同学习者需求调整教学','v.',['差异化教学'],'adapt-teaching-to-ability','Teachers differentiate their lessons to support learners at different levels.','教师调整课程，以支持处于不同水平的学习者。']
    ]);
    entry('manipulate',[
      ['control','操纵人或局势以谋取优势','v.',['操纵','利用'],'control-for-own-advantage','The investigation examined how traders manipulated market expectations.','调查考察了交易者如何操纵市场预期。'],
      ['handle','熟练操作、移动或处理物体','v.',['操作','巧妙地处理'],'skilful-physical-handling','The robot can manipulate fragile objects without crushing them.','机器人能够操作易碎物体而不将其压碎。'],
      ['data','人为改动资料以制造误导结果','v.',['假造'],'dishonest-data-alteration','The review found that the figures had been manipulated to hide losses.','审查发现数据被篡改以掩盖损失。']
    ]);
    entry('insomnia',[
      ['sleep','失眠；难以入睡或维持睡眠的状况','n.',['失眠症','失眠'],'difficulty-sleeping','The study asked participants how insomnia affected their working day.','研究询问了参与者失眠如何影响他们的工作日。']
    ]);
    entry('allergy',[
      ['reaction','过敏；对特定物质的异常免疫反应','n.',['变应性','变态反应'],'allergic-reaction','Her food allergy was clearly noted on the school record.','学校档案清楚记录了她的食物过敏情况。']
    ]);
    entry('arthritis',[
      ['joint','关节炎；引起关节疼痛、肿胀或僵硬的疾病','n.',['关节炎'],'joint-inflammation','Arthritis made it difficult for him to turn the small handle.','关节炎让他难以转动那个小把手。']
    ]);
    entry('hypertension',[
      ['pressure','高血压；血压持续偏高的状况','n.',['高血压','血压过高'],'high-blood-pressure','The report compares the prevalence of hypertension across age groups.','报告比较了不同年龄组高血压的患病率。']
    ]);
    entry('hygiene',[
      ['cleanliness','卫生；保持身体或环境清洁以维护健康的做法','n.',['卫生保健','卫生学','保健法','卫生'],'health-protecting-cleanliness','Food hygiene forms an important part of the training course.','食品卫生是培训课程的重要部分。']
    ]);
    entry('vaccinate',[
      ['immunise','接种疫苗；进行预防接种','v.',['预防接种'],'administer-vaccine','The survey recorded how many participants had been vaccinated against the disease.','调查记录了多少参与者接种过预防这种疾病的疫苗。','vaccinate against']
    ]);
    entry('antibiotic',[
      ['bacteria','抗生素；具有抑制或杀灭细菌作用的','n./adj.',['抗生素','抗生的'],'antibacterial-medicine','The laboratory tested which antibiotic inhibited the bacterial growth.','实验室测试了哪种抗生素能抑制细菌生长。']
    ]);
    entry('acupuncture',[
      ['needles','针刺疗法；用细针刺激特定身体部位的治疗方式','n.',['针刺','针刺疗法'],'needle-based-treatment','The review compared studies of acupuncture that used different methods.','综述比较了采用不同方法的针刺疗法研究。']
    ]);
    entry('strenuous',[
      ['effort','费力的；需要很大体力或精力的','adj.',['奋发的','费劲的','艰苦的'],'requiring-great-effort','The strenuous climb took longer than the group had expected.','这次艰苦攀登比团队预计的时间更长。']
    ]);
    entry('spontaneous',[
      ['unplanned','自发的；未经安排或强迫的','adj.',['自然的','自发的','未经琢磨的'],'unplanned-voluntary','A spontaneous round of applause followed the announcement.','宣布消息后，现场自发响起了一阵掌声。'],
      ['internal','自然产生的；不由外部因素直接引起的','adj.',['特发的','自生的'],'arising-without-external-trigger','The researchers observed spontaneous movement in the cell culture.','研究人员观察到了细胞培养物中的自发运动。']
    ]);
    function append(word,row,source){
      const [id,label,pos,aliases,concept,en,zh,construction]=row;
      entries[word].senses.push({id,label,pos,aliases,concepts:[concept],source,construction:construction||null,example:{en,zh,reviewed:true,origin:'original-wordorbit'}});
    }
    append('eclipse',['obscure','遮蔽天体；使发生食','v.',['引起日食','引起月食'],'astronomical-obscuration','The simulation shows the Moon eclipsing the Sun as seen from Earth.','模拟展示了从地球看月亮遮住太阳的过程。'],col('eclipse'));
    append('assignment',['value','给变量或属性赋值的操作','n.',['赋值'],'setting-variable-value','The assignment changes the stored value without creating a new variable.','这次赋值改变了存储的值，没有创建新变量。'],'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Assignment');
    append('sponge',['absorb','用海绵等吸去液体；像海绵一样吸收','v.',['吸收掉','海绵般吸收'],'take-in-substance','A clean cloth sponged up the water around the sink.','干净的布吸掉了水槽周围的水。','sponge up'],col('sponge'));
    append('sponge',['animal','海绵动物；多孔固着的水生动物','n.',['海绵动物'],'aquatic-sponge-animal','The marine biologist photographed a sponge growing on the reef.','海洋生物学家拍摄了礁石上生长的一只海绵动物。'],col('sponge'));
    append('lumber',['logging','采伐并加工木材（尤美式）','v.',['砍伐木材'],'harvest-forest-timber','The company lumbered the hillside before stricter protections were introduced.','在更严格的保护措施出台前，公司曾在山坡上采伐木材。'],col('lumber'));
    append('allergy',['aversion','强烈反感；总想回避（非正式比喻）','n.',['反感','厌恶'],'strong-aversion','He jokingly described his dislike of meetings as an allergy to committees.','他开玩笑说，自己不爱开会是对委员会有强烈反感。','an allergy to'],col('allergy'));
    append('quantum',['amount','一定的量或份额（正式）','n.',['量'],'specified-quantity','The tribunal considered the quantum of compensation separately from liability.','裁判机构将赔偿金额与责任问题分开审议。'],'https://www.collinsdictionary.com/us/dictionary/english/quantum');
    append('soak',['information','迅速理解并记住信息','v.',['吸收信息'],'assimilate-information','The learners soaked up new vocabulary during conversations with local families.','学习者在与当地家庭交谈时迅速吸收了新词汇。','soak up'],'https://dictionary.cambridge.org/us/dictionary/english/soak-up');
    append('soak',['resources','耗去大量或全部可用资源','v.',['耗尽资源'],'use-up-resources','The roof repairs soaked up most of the maintenance budget.','屋顶维修耗去了大部分维护预算。','soak up'],'https://dictionary.cambridge.org/us/dictionary/english/soak-up');
    append('transmit',['energy','传导光、热或声音；传递机械动力','v.',['传导能量'],'transfer-energy-force','The rotating shaft transmits power from the motor to the wheels.','旋转轴把动力从电动机传递到车轮。'],col('transmit'));
    // Explicit decisions for legacy fragments outside these declared learning senses.
    for(const [word,terms,reason]of [
      ['absorb',['买进'],'公司并购吸纳须体现并入整体，不等于购买任意商品。'],
      ['emission',['发行','遗精'],'发行证券和生理专门用法不纳入本批气体、光热排放学习范围。'],
      ['reptile',['卑鄙的人','卑鄙的','爬行的'],'贬损人的比喻及一般爬行姿态不作为本批动物类别的同义义项。'],
      ['nocturnal',['夜曲的'],'音乐体裁需要 nocturne 等具体术语，不把夜间的一般描述等同于所有夜曲。'],
      ['plough',['犁过的地'],'通常属于 under the plough 等搭配；本批耕作工具和动作不泛指任何地块。'],
      ['forestry',['森林地','林地'],'本批指管理森林的学科或活动；林地本身宜用 forest 或 woodland，不自动等同。'],
      ['classify',['分粒'],'按粒度分级是分类动作的专业应用，不另列为任意粉碎或造粒行为。'],
      ['reclaim',['感化','纠正','喊叫','抗议'],'历史或特定语境的旧标签不纳入索回、土地整治和材料回收的常用训练。'],
      ['lunar',['微亮的(指光)','银的'],'诗意、炼金术等扩展旧用法不等于一般月球或阴历义，不作为本批考点。'],
      ['radius',['辐射光线'],'放射状结构的专门用法不与几何半径或周边距离无条件互换。'],
      ['molecule',['些微'],'本批训练化学分子；不把一般少量与分子单位混用。'],
      ['atom',['核能'],'核能相关复合表达不意味着单独 atom 总是核能。'],
      ['syllabus',['摘要','课程表'],'本批限教学内容大纲，不是任意文章摘要，也不等同于列明上课时间的 timetable。'],
      ['assignment',['归因','陈述'],'属性归属等专业用法需要具体宾语；本批不把普通陈述都认作 assignment。'],
      ['evaluate',['赋值'],'数学 evaluate 是求值，程序 assignment 才是给变量赋值，两者不互换。'],
      ['tribe',['族(生物分类)'],'生物分类学等级是专门定义，本批限社会群体，不作为同一考点。'],
      ['humanitarian',['基督凡人论者','凡人论的'],'历史神学术语不纳入现代人道援助与减轻人类苦难的范围。'],
      ['nostalgia',['乡愁','怀乡病'],'现代常见义侧重对过去的眷恋；当前想家的 homesickness 与旧医学用法不无条件等同。'],
      ['prosper',['使成功','使昌盛'],'本批训练常见不及物动词繁荣成功；不据少见使动用法生成任意宾语。'],
      ['phoneme',['音素'],'严格区分能区别词义的音位与具体语音 phone，旧宽泛译法不单列考点。'],
      ['inflection',['屈曲'],'本批限语言词形和语调；几何曲线等专业意义不混入语言题。'],
      ['narration',['陈诉','原告陈述者事实'],'诉讼中的历史标签不作为一般故事叙述或影片旁白的独立常用义。'],
      ['photograph',['逼真的描绘'],'形象描绘的比喻不等于任意文字叙述；本批限摄影。'],
      ['sponge',['抹掉','采集海绵'],'擦除的特定搭配和采集海绵职业用法不作为本批独立考点。'],
      ['staple',['分级'],'纤维商品规格等专业动词用法不纳入订钉和基本产品范围。'],
      ['lumber',['隆隆声','乱堆'],'旧拟声及堆积杂物的特殊用法不等于所有噪声和堆放动作。'],
      ['crystal',['水晶一样的','透明的'],'crystal-clear 等搭配与晶体材料不等于任意透明物，本批不出无限定透明义题。'],
      ['masquerade',['参加化装舞会'],'本批保留舞会名词及冒充用法，不由旧标签推导独立常用动词题。'],
      ['ribbon',['用丝带装饰','把...撕成条状','形成带状','格式栏'],'专门动词和软件界面术语不纳入本批带状物及打印色带的范围。'],
      ['bracelet',['腕纹(掌侧横列腕部的线纹)'],'掌纹术语不属于一般腕部饰物，不进入本批考题。'],
      ['cutlery',['刀剑制造业','刃具制造业','刀剑','刃具'],'本批采用现代餐具义；旧制造行业及泛指所有刃具的范围不直接沿用。'],
      ['buffet',['碗橱','搏斗','奋斗'],'家具及历史动词义不进入本批餐饮与连续冲击范围；两种读音不混同。'],
      ['sour',['拙劣的','不健全的','酸味','酸饮料'],'评价性旧译、作为味觉术语的名词及特定鸡尾酒名不纳入本批常用形容词和变化动词。'],
      ['grind',['摩擦声','用功的学生','折磨','压榨','苦干'],'拟声名词、地区性贬称与 grind away/down 等搭配需另有语境；本批不认证为任意磨碎的同义项。'],
      ['soak',['大雨','浸洗掉'],'大雨名词和 soak out 等特定去除用法不纳入本批直接浸泡与 soak up 搭配。'],
      ['porch',['走廊'],'入口有顶区域与建筑内部连接房间的 corridor 不等同。'],
      ['chimney',['灯罩'],'灯具排烟玻璃罩是特定器物，不是任意 lampshade 的通称。'],
      ['locomotive',['运转的','移动的'],'运动机能相关的专业形容词义不等于所有正在移动的物体。'],
      ['expiration',['断气','死亡'],'古旧或少见的死亡义不作为现代期限届满与呼气的训练项。'],
      ['canal',['开运河'],'少见的修建运河动词不作为本批常用水道名词考点。'],
      ['transition',['临时转调','跃迁'],'音乐和物理学的专业变化定义不与任何状态过渡无条件互换。'],
      ['republic',['团体','界'],'republic of letters 等固定表达不表示所有团体或行业都可叫 republic。'],
      ['federal',['联合的','同盟的','联盟的'],'本批限联邦政治制度及中央层级，不表示任意联合都具有联邦制。'],
      ['liberty',['特权','自由区域'],'旧特许权与地方管辖区域义不等于所有人的自由权利；本批不作独立考点。'],
      ['franchise',['特权','免赔额','给以特权','给以...公民权'],'历史特许权、保险免赔额及旧使动用法不纳入本批常见经营、投票、媒体和体育范围。'],
      ['voucher',['证人','保证人','证明者','证实...的可靠性'],'本批采用现代凭券义；不据旧词形把 voucher 当作 vouch for 的直接替代。'],
      ['accountable',['可说明的','可解释的'],'现代常用义要求对行动负责并说明，不能把任何能解释的现象都称作 accountable。'],
      ['enact',['法令','法规','条例'],'本词为动词，不把法律文件名词直接当成已审核词性。'],
      ['confine',['邻接','交界'],'少见不及物旧义不纳入本批限制、禁闭及 confines 边界。'],
      ['anonymous',['无记录'],'匿名不等于没有档案或不存在记录。'],
      ['genuine',['真性的'],'旧标签不明确，本批用非伪造和真诚两组明确释义替代，不另列含糊考点。'],
      ['consequence',['推断'],'结果关系不等于思考推断这一行为；本批不与 inference 混同。'],
      ['sacrifice',['贱卖'],'低价出售属于特殊商业用法，本批仅训练为目标舍弃及宗教献祭。'],
      ['orphan',['弧体'],'疑似旧译残片，不是所核常用孤儿义的有效释义。'],
      ['kin',['有亲属关系的','性质类似的','同类的'],'较少见表语形容词或类似 akin 的用法保留范围说明；不把任何相似物都当作家属。'],
      ['commuter',['月季票乘客','非(当地)居民'],'通勤不限定公共交通或持票种类，也不泛指所有非当地居民。'],
      ['stipulate',['保证'],'stipulate 核心是明确条件，不等于无条件保证某事会发生。'],
      ['rectify',['精馏'],'化学分馏提纯是专门语境，不纳入本批纠错与电整流的范围。'],
      ['offset',['把...并列','旁系','支管','装支管'],'偏移构造、分支与专业动词用法不作为本批补偿、胶印和位置偏移的通用同义项。'],
      ['prolong',['冷凝管'],'实验器具名词的少用旧义不等于延长时间动词。'],
      ['hypertension',['过度紧张','张力过强','压力过高'],'本批限医学高血压，不把所有情绪紧张或一般机械压力过高都叫 hypertension。'],
      ['acupuncture',['施以针灸'],'较少见动词用法不纳入本批疗法名词；中文采用针刺而非把艾灸无条件包含进来。'],
      ['compress',['压缩程序'],'compress 是压缩动作；软件程序或 UNIX 命令名需具体语境，不指所有压缩软件。'],
      ['petition',['祈求','祷文'],'宗教祈祷的语境义不与公共请愿和法院申请直接等同。'],
      ['proclaim',['赞扬'],'宗教颂扬等特定用法不等于一般正式宣布，本批不作独立考点。']
    ])reference(word,terms,reason,'scope-excluded');
    // Actual supporting pages for uses not fully described by the main learner entry.
    for(const [word,ids,source]of [
      ['forestry',['management'],col('forestry')],['radius',['geometry','area'],col('radius')],
      ['scrutinise',['examine'],cam('scrutinize')],['antonym',['opposite'],col('antonym')],
      ['appetiser',['starter'],cam('appetizer')],['asylum',['protection','institution'],col('asylum')],
      ['voucher',['payment'],col('voucher')],['taxation',['system','amount'],col('taxation')],
      ['insomnia',['sleep'],col('insomnia')],['compress',['digital','dressing'],col('compress')],
      ['evaluate',['calculate'],col('evaluate')],['pottery',['workplace'],col('pottery')],
      ['compile',['program'],'https://dictionary.cambridge.org/us/dictionary/english/recompile'],
      ['singular',['one'],col('singular')],['lumber',['junk'],col('lumber')],
      ['lubricate',['ease'],col('lubricate')],['cellar',['wine'],col('cellar')],
      ['embark',['begin'],cam('embark-on-upon')],['expiration',['breathing'],col('expiration')],
      ['offset',['printing','displacement'],'https://www.collinsdictionary.com/us/dictionary/english/offset'],
      ['sue',['appeal'],col('sue')],['soak',['take-in'],'https://dictionary.cambridge.org/us/dictionary/english/soak-up'],
      ['glue',['hold-together'],col('glue')],['retail',['story'],col('retail')],
      ['transmit',['inherit'],col('transmit')],['senate',['university'],col('senate')],
      ['trespass',['impose'],cam('trespass-on-upon')]
    ])for(const id of ids)entries[word].senses.find(s=>s.id===id).source=source;
    // Verbal printing use is supported by the same offset entry.
    entries.offset.senses.find(s=>s.id==='printing').aliases.push('用胶印法印');
    entries.offset.senses.find(s=>s.id==='printing').pos='n./v./modifier';
  }
  if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch05=register;
})(typeof window==='object'?window:globalThis);
