/* Public editorial batch 04. Original bilingual examples; no learner records.
 * Learning scope is bounded and stated; legacy glosses are traced separately.
 */
(function(scope){
  'use strict';
  function register(add){
    const registered={};
    const cam=w=>'https://dictionary.cambridge.org/dictionary/english/'+w;
    const col=w=>'https://www.collinsdictionary.com/dictionary/english/'+w;
    const ref=(terms,decision,reason,source)=>({terms,decision,reason,source});
    function entry(word,rows,references=[],overrides={}){
      const e=add(word,rows.map(r=>{r=r.slice();if(typeof r[4]==='string')r[4]=[r[4]];return r;}),references);
      registered[word]=e;
      for(const [id,source]of Object.entries(overrides))e.senses.find(s=>s.id===id).source=source;
      return e;
    }
    entry('toxic',[
      ['poison','有毒的；由毒物引起的','adj.',['有毒的','中毒的','毒物的'],'poisonous','The laboratory stores toxic chemicals in clearly marked containers.','实验室把有毒化学品存放在标识清晰的容器中。'],
      ['harmful','长期造成伤害或不快的；有害的','adj.',['有害的'],'harmful-relationship','A toxic workplace can damage trust between colleagues.','有害的工作环境可能破坏同事之间的信任。']
    ]);
    entry('pollute',[
      ['environment','污染；使空气、水或土壤有害','v.',['污染','弄脏'],'environmental-contamination','Untreated wastewater can pollute the river below the factory.','未经处理的废水可能污染工厂下游的河流。']
    ],[ref(['玷污'],'context-required','抽象道德上的玷污需要具体语境；本批仅训练环境或物质污染，不与所有损害名誉的用词互换。',cam('pollute'))]);
    entry('barren',[
      ['land','贫瘠的；不长植物的','adj.',['贫瘠的','荒地'],'unproductive-land','Very little vegetation survives on the barren hillside.','贫瘠的山坡上几乎没有植被存活。'],
      ['sterile','不能生育或繁殖的（旧或专门用法）','adj.',['不育的'],'unable-to-reproduce','The barren mare could not produce a foal.','这匹不能繁殖的母马无法生下马驹。'],
      ['unproductive','无成果的；没有产生新想法的','adj.',['无成果的'],'unproductive-effort','Months of barren discussion produced no workable agreement.','数月毫无成果的讨论没有产生可行的协议。']
    ]);
    entry('fertile',[
      ['soil','肥沃的；适合植物生长的','adj.',['肥沃的','生产多的'],'productive-soil','The fertile soil supports several crops each year.','肥沃的土壤支持每年种植多季作物。'],
      ['reproduction','能生育的；可受精或发育的','adj.',['可繁殖的','能生育的'],'able-to-reproduce','Only fertile eggs were selected for the breeding programme.','繁育项目只选择能够发育的受精卵。'],
      ['ideas','富于创造力的；能产生大量想法的','adj.',['富于创造力的'],'productive-imagination','Her fertile imagination turned a simple observation into a new story.','她丰富的想象力把一个简单观察变成了新故事。']
    ]);
    entry('evaporate',[
      ['liquid','蒸发；使液体变成气体','v.',['蒸发','失去水分','使蒸发','使脱水'],'liquid-vaporization','The shallow pool will evaporate quickly in the afternoon sun.','浅水池中的水会在午后的阳光下迅速蒸发。'],
      ['disappear','逐渐消失；使不复存在','v.',['消失','使消失'],'gradual-disappearance','Their early confidence evaporated when the test results arrived.','检测结果出来后，他们最初的信心消失了。']
    ]);
    entry('reservoir',[
      ['water','水库；储水池','n.',['贮水池','水库'],'stored-water-body','The reservoir supplies drinking water to several nearby towns.','水库为附近几个城镇供应饮用水。'],
      ['supply','储藏处；大量储备','n.',['贮藏处','贮备','储藏'],'reserve-supply','The archive is a reservoir of knowledge about local industry.','这座档案馆储藏着丰富的地方工业知识。']
    ]);
    entry('density',[
      ['mass','密度；单位体积内的质量','n.',['密度'],'mass-per-volume','The experiment compared the density of salt water and fresh water.','实验比较了盐水和淡水的密度。'],
      ['concentration','人员或事物的密集程度','n.',['密集程度'],'concentration-per-area','Housing density is highest around the central railway station.','中央火车站周围的住房密集程度最高。'],
      ['thickness','浓密程度；难以穿透的稠密性','n.',['浓密程度'],'thick-closely-packed','The density of the fog made the harbour lights difficult to see.','浓雾使港口灯光难以看清。']
    ]);
    entry('genetic',[
      ['genes','遗传的；基因或遗传学相关的','adj.',['遗传的','遗传学的'],'genes-inheritance','The study examined genetic differences between the two populations.','研究考察了两个种群之间的遗传差异。']
    ],[ref(['创始的','起源的','生殖的'],'scope-excluded','起源研究等扩展术语需要学科条件；本批声明基因及遗传范围，不把它当作一般开始或繁殖动作的形容词。',cam('genetic'))]);
    entry('diverse',[
      ['varied','多种多样的；彼此不同的','adj.',['不同的','变化多的'],'coexisting-variety','The course attracts students from diverse cultural backgrounds.','这门课程吸引了来自不同文化背景的学生。']
    ]);
    entry('harvest',[
      ['crop','收割；收获期；收获的作物','n./v.',['收获','收获物','收获期','收割'],'gather-crops','Farmers began the harvest before the autumn rains.','农民在秋雨到来前开始收获。'],
      ['collect','采集可用资源、细胞或数据','v.',['采集'],'collect-useful-resources','The system can harvest rainwater from the roof.','这个系统可以收集屋顶的雨水。'],
      ['benefit','获得成果或好处；所得成果','n./v.',['成果'],'benefits-from-effort','The team is beginning to harvest the benefits of years of careful research.','团队开始收获多年细致研究带来的成果。']
    ]);
    entry('fungus',[
      ['organism','真菌；霉菌、蘑菇等','n.',['真菌','真菌类植物','霉菌','蕈'],'fungal-organism','A fungus growing on the damp wood caused the beam to decay.','潮湿木材上生长的真菌使横梁腐朽了。']
    ],[ref(['海绵肿'],'scope-excluded','旧医学标签不在本批一般真菌范围；不将其认证为普通生物分类的释义。',cam('fungus'))]);
    entry('germinate',[
      ['seed','发芽；使种子开始生长','v.',['发芽','使发芽'],'seed-sprouting','The seeds germinate best in warm, moist soil.','这些种子在温暖湿润的土壤中最容易发芽。'],
      ['idea','想法或计划开始形成；萌芽','v.',['萌芽','开始发育','使发育'],'idea-development','The idea for the community garden began to germinate during winter.','社区花园的想法在冬季开始萌芽。']
    ]);
    entry('decay',[
      ['rot','腐烂；腐朽；使腐败','n./v.',['腐败','(使)腐败'],'organic-deterioration','Fruit left in a warm room will decay more quickly.','放在温暖房间里的水果会更快腐烂。'],
      ['decline','衰退；逐渐恶化','n./v.',['衰退','(使)衰退'],'gradual-deterioration','The report traced the decay of the abandoned industrial district.','报告追溯了这片废弃工业区的衰败过程。'],
      ['radioactive','放射性衰变','n./v.',['放射性衰变'],'radioactive-decay','The instrument measures the rate at which the isotope decays.','这台仪器测量该同位素的衰变速率。']
    ]);
    entry('enzyme',[
      ['catalyst','酶；促进生物化学反应的物质','n.',['酶'],'biological-catalyst','The enzyme helps break down starch into smaller molecules.','这种酶帮助把淀粉分解成更小的分子。']
    ]);
    entry('nutrient',[
      ['substance','营养物质；提供营养的','n./modifier',['营养的','滋养的','营养物','滋养物'],'nourishing-substance','The roots absorb nutrients dissolved in the soil water.','根吸收溶解在土壤水分中的营养物质。']
    ]);
    entry('mechanism',[
      ['machine','机械装置；相互配合的零件结构','n.',['机械','结构'],'working-mechanical-parts','A simple mechanism keeps the lid closed when the machine is running.','机器运转时，一个简单装置让盖子保持关闭。'],
      ['process','机制；实现某事的过程或办法','n.',['机构','机理','技巧','历程'],'organized-operating-process','The policy creates a mechanism for reporting unsafe working conditions.','这项政策建立了报告不安全工作环境的机制。'],
      ['psychology','应对困难的心理机制','n.',['心理机制'],'psychological-coping','Humour can serve as a coping mechanism during stressful periods.','幽默可以在压力时期起到心理应对机制的作用。']
    ]);
    entry('extinct',[
      ['species','灭绝的；不再存在的','adj.',['灭绝的','消灭了的'],'no-longer-existing','The bird became extinct after its breeding habitat disappeared.','繁殖栖息地消失后，这种鸟灭绝了。'],
      ['volcano','不再活动的；死火山的','adj.',['熄灭的'],'inactive-volcano','The village stands near the slopes of an extinct volcano.','村庄位于一座死火山的山坡附近。']
    ],[ref(['耗尽的','过时的','无效的'],'context-required','不再存在或活动不等于任意资源用尽、过时或失效；不将这些宽泛旧标签自动认证为独立常用义。',cam('extinct'))]);
    entry('species',[
      ['biology','物种；生物分类中的种','n.',['种','类'],'biological-species','Several species of frog breed in the wetland.','几种青蛙在这片湿地繁殖。']
    ],[ref(['外形','茶剂'],'scope-excluded','这些旧或专门标签不属于本批生物物种义，不将其认证为现代常用释义。',cam('species'))]);
    entry('ancestor',[
      ['family','祖先；祖宗','n.',['祖先','祖宗'],'earlier-family-generation','Her ancestors moved to the valley more than two centuries ago.','她的祖先在两个多世纪前迁到了这座山谷。'],
      ['precursor','早期祖型；后来事物的前身','n.',['祖型','前身'],'evolutionary-precursor','This early calculating machine was an ancestor of the modern computer.','这台早期计算机器是现代计算机的前身。']
    ]);
    entry('descendant',[
      ['family','后代；子孙；后裔','n.',['后裔','子孙'],'later-family-generation','The descendants of the founders still live in the village.','创始人的后代仍住在村里。'],
      ['development','由早期事物发展而来的后继形式','n.',['后继形式'],'later-derived-form','The modern instrument is a descendant of an earlier wooden design.','这种现代仪器由更早的木制设计发展而来。']
    ],[ref(['传下的','下降的'],'scope-excluded','旧形容词标签不在本批名词后代与后继形式范围，不与 descending 或 hereditary 无条件混用。',cam('descendant'))]);
    entry('bacteria',[
      ['microbes','细菌（bacterium 的复数）','n. plural',['细菌'],'bacterial-organisms','The water sample contained several types of bacteria.','这份水样含有几类细菌。']
    ]);
    entry('virus',[
      ['biological','病毒；病毒造成的感染或疾病','n.',['病毒','滤过性病毒'],'biological-virus','The laboratory identified the virus in several samples.','实验室在几个样本中鉴定出了该病毒。'],
      ['computer','计算机病毒；能复制传播的恶意程序','n.',['计算机病毒'],'malicious-computer-program','The virus damaged files on the unprotected computer.','病毒破坏了那台未受保护计算机上的文件。']
    ],[ref(['毒害'],'context-required','本批区分生物病毒与计算机病毒，不把一般危害都译为 virus。',cam('virus'))]);
    entry('metabolism',[
      ['process','新陈代谢；维持生命的化学过程','n.',['新陈代谢','代谢'],'life-chemical-processes','The study examined how temperature affects the metabolism of fish.','研究考察了温度如何影响鱼类的新陈代谢。']
    ],[ref(['变态'],'unsupported-as-standalone','所核现代学习条目中的 metabolism 不等于生物变态 metamorphosis，不将旧标签作为通用义。',cam('metabolism'))]);
    entry('protein',[
      ['substance','蛋白质；与蛋白质有关的','n./modifier',['蛋白质','蛋白质的'],'protein-molecule','The researchers measured the amount of protein in each seed sample.','研究人员测量了每份种子样本中的蛋白质含量。']
    ]);
    entry('instinct',[
      ['innate','本能；无需学习的自然行为倾向','n.',['本能'],'innate-behaviour','The chicks followed their mother by instinct.','雏鸟凭本能跟随母鸟。'],
      ['intuition','直觉；不经推理的判断力','n.',['直觉'],'intuitive-judgment','Her instinct told her that the figures needed another check.','她的直觉告诉她，这些数字需要再核查一次。']
    ],[ref(['充满着的'],'scope-excluded','这是不同读音及句法条件下的旧形容词用法；本批只训练本能与直觉的名词，不据名词读音推导考题。',cam('instinct'))]);
    entry('hibernate',[
      ['winter','冬眠；在寒冷时期休眠','v.',['过冬','冬眠','避寒'],'winter-dormancy','Some small mammals hibernate when food becomes scarce in winter.','一些小型哺乳动物在冬季食物匮乏时冬眠。']
    ]);
    entry('interstellar',[
      ['space','恒星之间的；星际的','adj.',['星际的'],'between-stars','The probe will measure particles in interstellar space.','探测器将测量星际空间中的粒子。']
    ]);
    entry('celestial',[
      ['sky','天空的；天体的；天上的','adj.',['天的','天空的'],'sky-space-related','The chart shows the positions of several celestial objects.','图表显示了几个天体的位置。'],
      ['heaven','天国的；天堂般的（文学用法）','adj.',['天国的'],'heavenly-literary','The poem imagines a celestial realm beyond ordinary human experience.','诗歌描绘了超越普通人类经验的天国境界。']
    ]);
    entry('probe',[
      ['inquiry','深入调查；探究；试探询问','n./v.',['探索','调查'],'detailed-examination','The committee began a probe into the missing funds.','委员会开始深入调查失踪资金。'],
      ['instrument','探针；用工具探查内部','n./v.',['探针','用探针探测'],'investigative-instrument','The technician inserted a probe to measure the temperature inside the pipe.','技术人员插入探针，测量管道内部的温度。'],
      ['space','无人太空探测器','n.',['探测器'],'unmanned-space-probe','The space probe sent back measurements from the outer atmosphere.','太空探测器传回了外层大气的测量数据。']
    ]);
    entry('module',[
      ['component','系统中有独立功能的组件或模块','n.',['组件','模块'],'functional-component','The damaged module can be replaced without changing the whole system.','损坏的模块可以更换，不必改动整个系统。'],
      ['course','可独立学习的课程单元','n.',['课程单元'],'course-unit','The final module covers the design of simple experiments.','最后一个课程单元介绍简单实验的设计。'],
      ['space','可独立工作的航天器舱段','n.',['航天舱段'],'spacecraft-section','The landing module separated from the main spacecraft.','着陆舱与主航天器分离了。']
    ],[ref(['模数'],'scope-excluded','数学或工程中的模数需特定学科定义；本批只声明独立组件、课程单元与航天舱段。',cam('module'))]);
    entry('primary',[
      ['importance','首要的；最主要的；基本的','adj.',['主要的','根本的','首要的','基本的'],'highest-importance','Safety is the primary concern during the inspection.','检查期间，安全是首要考虑。'],
      ['first','最初的；直接或原始来源的','adj.',['初期的','原始的','一次的'],'first-original-source','The historian relied on primary sources such as diaries and letters.','历史学家依靠日记、书信等第一手资料。'],
      ['education','小学教育的；初级教育的','adj.',['小学教育的'],'primary-education','The scheme supplies books to rural primary schools.','该计划为农村小学提供图书。'],
      ['election','政党的候选人初选','n.',['候选人初选'],'candidate-selection-election','Party members chose their candidate in a primary.','党员通过初选选出了候选人。']
    ],[ref(['最主要者','原色','初等量'],'scope-excluded','原色等需要 compound 或专门语境；本批不把这些标签一并认证为无限定的普通名词义。',cam('primary'))]);
    entry('institute',[
      ['organization','研究所；专门学院；学会','n.',['学会','学院','协会'],'specialist-institution','The institute conducts research on coastal ecosystems.','这个研究所开展海岸生态系统研究。'],
      ['introduce','设立；开始实行制度或程序','v.',['创立','开始','制定'],'put-system-into-action','The council will institute a new process for handling complaints.','地方议会将设立新的投诉处理程序。']
    ],[ref(['任命'],'scope-excluded','特定任命用法不在本批设立程序及专门机构范围；不作为一般 appoint 的同义干扰。',cam('institute'))]);
    entry('academy',[
      ['institution','专门院校；促进科学或艺术的学会','n.',['学院','院校','学会'],'specialist-institution','She trained at an academy that specialises in contemporary dance.','她在一所专门教授当代舞的学院接受训练。'],
      ['school','具有特定办学制度的中学或学校','n.',['学校'],'academy-school','The academy introduced a new programme for younger pupils.','这所学校为低年级学生推出了新项目。'],
      ['sport','培养年轻运动员的训练机构','n.',['青年训练机构'],'youth-sports-training','The club academy develops players before they join the senior team.','俱乐部青训机构培养球员，帮助他们进入成年队。']
    ]);
    entry('literate',[
      ['reading','有读写能力的','adj.',['有读写能力的'],'reading-writing-ability','The programme helps adults become fully literate.','这个项目帮助成年人掌握完整的读写能力。'],
      ['knowledge','熟悉某领域知识的；有相关素养的','adj.',['有相关素养的'],'subject-literacy','The course aims to make students more scientifically literate.','这门课程旨在提高学生的科学素养。']
    ],[ref(['学者','精通文学的','受过教育的'],'scope-excluded','本批训练读写能力及明确领域的基本素养；不把识字能力自动等同于文学专长、所有教育经历或学者身份。',cam('literate'))]);
    entry('illiteracy',[
      ['reading','不识字；缺乏读写能力','n.',['文盲'],'lack-reading-writing','The campaign reduced adult illiteracy in several remote communities.','这项行动减少了几个偏远社区的成人文盲现象。'],
      ['knowledge','对某领域缺乏基本知识','n.',['无知'],'lack-subject-knowledge','Financial illiteracy can make complex contracts difficult to evaluate.','缺乏金融常识会让复杂合同难以评估。']
    ]);
    entry('numerate',[
      ['ability','有基本计算能力的；具备数学素养的','adj.',['有基本计算能力的'],'basic-numerical-ability','Employers expect trainees to be numerate as well as literate.','雇主期望学员既有基本计算能力，也有读写能力。']
    ],[ref(['算出来','列举','读出'],'scope-excluded','旧译为少用动词或其他用法；本批补入现代学习型词典中的形容词计算能力义，不由旧动词标签推导题目。',cam('numerate'))]);
    entry('motivation',[
      ['drive','积极性；做事的动力','n.',['刺激','推动','促动','诱导'],'drive-to-act','Clear feedback increased the learners\' motivation to practise.','清晰的反馈提高了学习者练习的积极性。'],
      ['reason','动机；采取行动的原因','n.',['动机'],'reason-for-action','The interview explored her motivation for changing careers.','访谈探讨了她转换职业的动机。']
    ]);
    entry('inspiration',[
      ['ideas','灵感；突然出现的好主意','n.',['灵感','妙计'],'creative-idea','The designer found inspiration in the shapes of coastal shells.','设计师从海岸贝壳的形状中获得灵感。'],
      ['person','鼓舞人心的人或事物','n.',['鼓舞人心的人或物'],'encouraging-person','Her patient teaching was an inspiration to the new volunteers.','她耐心的教学鼓舞了新志愿者。']
    ],[ref(['吸气','吸'],'scope-excluded','呼吸生理中的专门用法不属于本批创造灵感与精神鼓舞的学习范围。',cam('inspiration'))]);
    entry('qualification',[
      ['credential','资格证明；学历或职业资历','n.',['资格'],'formal-credential','The post requires a recognised qualification in engineering.','这个岗位要求获得认可的工程专业资格。'],
      ['suitability','使人适合某工作的能力、条件或经历','n.',['条件'],'suitability-requirement','Patience is an important qualification for this kind of work.','耐心是从事这类工作的重要条件。'],
      ['limitation','限制条件；对说法的限定或保留','n.',['限制','限定'],'reservation-doubt','She accepted the findings with one important qualification.','她接受了研究结果，但提出了一项重要保留条件。']
    ]);
    entry('certificate',[
      ['document','证书；证明某事实或资格的文件','n.',['证书','证明书'],'official-certification','The certificate confirms that the equipment passed its safety inspection.','这份证书确认设备通过了安全检查。'],
      ['certify','发给证书；用证书批准或证明','v.',['发给证明书','用证书批准','用证书证明'],'issue-certification','The board certificated the trainees after they completed the course.','学员完成课程后，委员会向他们颁发了证书。']
    ]);
    entry('contrast',[
      ['difference','明显差别；形成对照的事物','n.',['差别','对照物','反差'],'noticeable-difference','The contrast between the busy street and the quiet garden was striking.','繁忙街道与安静花园之间的反差十分鲜明。'],
      ['compare','对比；形成鲜明对照','n./v.',['对比','使对比','成对照'],'compare-differences','The article contrasts two approaches to protecting wetlands.','文章对比了保护湿地的两种方法。'],
      ['image','影像的对比度；明暗反差','n.',['对比度'],'image-light-dark-difference','Increasing the contrast made the faint marks easier to see.','提高对比度使浅淡的痕迹更容易看清。']
    ]);
    entry('illustrate',[
      ['explain','阐明；用例子说明','v.',['举例说明','阐明'],'explain-with-example','The chart illustrates how rainfall changes across the year.','图表说明了降雨量如何在一年中变化。'],
      ['pictures','为文字配图；作图解','v.',['作图解'],'provide-illustrations','The artist will illustrate a book about nocturnal animals.','这位画家将为一本关于夜行动物的书配图。']
    ]);
    entry('determine',[
      ['control','决定；直接影响结果','v.',['决定'],'control-an-outcome','Soil moisture helps determine which plants can survive.','土壤湿度有助于决定哪些植物能存活。'],
      ['discover','查明；测定事实或数值','v.',['查明','测定'],'establish-a-fact','The test will determine whether the sample contains salt.','这项测试将查明样本是否含盐。'],
      ['resolve','下决心；决意','v.',['决心'],'firm-decision','She determined to complete the training despite the difficult schedule.','尽管日程紧张，她仍决心完成培训。']
    ]);
    entry('questionnaire',[
      ['form','问卷；成套调查问题','n.',['调查表','问卷'],'survey-question-set','Participants completed an anonymous questionnaire about their travel habits.','参与者填写了一份关于出行习惯的匿名问卷。']
    ]);
    entry('inquiry',[
      ['question','询问；查询；询盘','n.',['质询','询盘','询问','查询'],'request-for-information','The office received an inquiry about the new training programme.','办公室收到了一项关于新培训项目的询问。'],
      ['investigation','正式调查；系统探究','n.',['探索','调查'],'detailed-examination','An independent inquiry examined the cause of the failure.','一项独立调查考察了故障原因。']
    ]);
    entry('feedback',[
      ['response','对表现或结果的反馈意见','n.',['反馈','反应'],'performance-response','The tutor gave detailed feedback on the first draft.','导师对初稿给出了详细反馈。'],
      ['system','系统输出返回输入的反馈过程','n.',['系统反馈'],'output-input-loop','The device uses feedback to keep the temperature stable.','这台装置利用反馈保持温度稳定。'],
      ['sound','音响回授；扩音器啸叫','n.',['音响啸叫'],'audio-feedback','Moving the microphone away from the speaker reduced the feedback.','把麦克风移离扬声器减少了啸叫。']
    ]);
    entry('technique',[
      ['method','技巧；需要技能的技术或方法','n.',['技巧','技术','方法','工艺方法'],'skilled-method','The workshop teaches a technique for repairing damaged paper.','工作坊教授一种修复受损纸张的技术。']
    ]);
    entry('invent',[
      ['create','发明；创造前所未有的东西','v.',['发明','创作'],'create-new-design','The team invented a low-cost device for collecting rainwater.','团队发明了一种低成本雨水收集装置。'],
      ['fabricate','编造；虚构不真实的故事或借口','v.',['虚构'],'fabricate-untrue-account','He invented an excuse for missing the meeting.','他编造了一个缺席会议的借口。']
    ]);
    entry('discovery',[
      ['finding','发现的过程；被发现的新事物','n.',['发现','被发现的事物','发觉'],'new-finding','The discovery of the old well changed the excavation plan.','古井的发现改变了发掘计划。']
    ],[ref(['要求告知'],'scope-excluded','诉讼中的资料披露义有专门程序条件；本批不把普通发现与任何信息请求混同。',cam('discovery'))]);
    entry('equipment',[
      ['tools','设备；装备；完成活动所需的器材（不可数）','n.',['装备','设备','装置'],'equipment-set','All safety equipment must be checked before the climb.','攀登前必须检查所有安全装备。']
    ],[ref(['才能'],'scope-excluded','个人具备的素质属于扩展比喻范围，不把 equipment 当作一般 talent 的同义词。',cam('equipment'))]);
    entry('framework',[
      ['physical','框架；支撑结构；骨架','n.',['结构','骨架'],'supporting-structure','The steel framework was completed before the outer walls were added.','加装外墙前，钢制框架已完工。'],
      ['conceptual','理论、规则或计划的基本体系','n.',['参照标准','准则','观点','构架组织'],'organizing-principles','The agreement provides a framework for future cooperation.','协议为未来合作提供了基本框架。']
    ]);
    entry('adapt',[
      ['adjust','适应；使适应新的条件','v.',['适应','使适应'],'adjust-to-conditions','The plants adapted to the dry conditions over many generations.','这些植物经过许多代逐渐适应了干燥环境。'],
      ['alter','调整或改装以适合新用途','v.',['调整','改造','改装'],'partial-alteration','The workshop adapted an old bicycle to carry small deliveries.','工作坊改装了一辆旧自行车，用于运送小件物品。'],
      ['story','改编作品以用于其他媒介','v.',['改编'],'adapt-creative-work','The director adapted the novel for a radio drama.','导演把这部小说改编成广播剧。']
    ]);
    entry('adjust',[
      ['alter','调整；校准；作小幅改变','v.',['调整','校准','被调节'],'partial-alteration','Adjust the lens until the image becomes sharp.','调整镜头，直到图像清晰。'],
      ['adapt','适应新情况；使熟悉并适应','v.',['使适应于','适应于','相互熟悉而适应'],'adjust-to-conditions','It took the new pupils several weeks to adjust to the timetable.','新生用了几周时间才适应课程表。']
    ]);
    entry('accurate',[
      ['correct','准确的；正确反映事实的','adj.',['正确的','准确的'],'factually-correct','The report gives an accurate account of the events.','报告准确叙述了事件经过。'],
      ['precise','测量或瞄准精确的','adj.',['精确的'],'measurement-precision','An accurate balance is essential for weighing small samples.','称量小样本必须使用精确的天平。']
    ]);
    entry('precise',[
      ['exact','精确的；明确的；细节严密的','adj.',['精确的','严谨的','明确的','精密的','正确的'],'measurement-precision','The instructions specify the precise amount of liquid required.','说明明确规定了所需液体的精确用量。'],
      ['careful','做事一丝不苟的；严谨细致的','adj.',['一丝不苟的'],'meticulous-person','She is precise in the way she labels every specimen.','她给每件标本贴标签时都一丝不苟。']
    ]);
    entry('convention',[
      ['meeting','大会；某职业或兴趣群体的正式集会','n.',['大会'],'organized-large-meeting','The convention brought together teachers from across the country.','大会汇集了来自全国各地的教师。'],
      ['custom','惯例；公认的做法或表达规则','n.',['惯例','约定'],'established-custom','The writer challenged the convention of telling the story in chronological order.','作家挑战了按时间顺序讲故事的惯例。'],
      ['agreement','正式协定；国际公约','n.',['协定'],'international-agreement','The countries signed a convention on protecting migratory birds.','这些国家签署了一项保护候鸟的公约。']
    ]);
    entry('ideology',[
      ['beliefs','意识形态；思想体系；组织所依据的观念','n.',['思想体系','意识形态','观念形态'],'organized-belief-system','The course compares the ideology behind several political movements.','课程比较了几场政治运动背后的思想体系。']
    ],[ref(['观念学','空论'],'scope-excluded','旧哲学学科或评价性标签不属于本批思想体系的常用范围，不据其产生额外已审核考点。',cam('ideology'))]);
    entry('anthropology',[
      ['study','人类学；研究人类、社会、文化及身体发展的学科','n.',['人类学'],'human-culture-study','Anthropology helped her understand the village\'s kinship traditions.','人类学帮助她理解了村庄的亲属关系传统。']
    ]);
    entry('etiquette',[
      ['conduct','礼仪；特定群体或场合的行为规范','n.',['礼仪','礼节','成规','规则'],'social-conduct-rules','The guide explains dining etiquette for visitors unfamiliar with local customs.','指南为不熟悉当地习俗的访客讲解用餐礼仪。']
    ]);
    entry('excavate',[
      ['archaeology','发掘被埋藏的古代遗物或遗址','v.',['挖出'],'archaeological-digging','Archaeologists will excavate the area beside the ruined wall.','考古学家将发掘残墙旁的区域。'],
      ['dig','挖掘；挖空形成坑或通道','v.',['挖空','凿通'],'remove-earth','The workers excavated a trench for the new water pipe.','工人挖了一条沟，铺设新水管。']
    ]);
    entry('symbol',[
      ['sign','符号；代表对象的标记或代码','n.',['符号','代号','码元'],'representational-sign','Each symbol on the map represents a different type of building.','地图上的每个符号代表一种不同建筑。'],
      ['idea','象征；使人联想到某观念的事物','n.',['象征'],'symbolic-object','The restored bridge became a symbol of cooperation between the towns.','修复后的桥成为两座城镇合作的象征。']
    ],[ref(['信条'],'context-required','代表思想的标志不等于任意教义或信条；本批仅训练符号和象征义。',cam('symbol'))]);
    entry('syntax',[
      ['language','句法；词语构成句子的排列规则','n.',['句法','语法','句子构造'],'sentence-arrangement','The two languages differ in both vocabulary and syntax.','这两种语言在词汇和句法上都有差异。'],
      ['computing','计算机语言的语法规则','n.',['程序语法'],'programming-syntax','A missing bracket caused a syntax error in the program.','缺少一个括号导致程序出现语法错误。']
    ]);
    entry('grammar',[
      ['rules','语法；语法的研究或使用','n.',['语法学','语法检查'],'language-form-rules','The exercise focuses on grammar rather than spelling.','这项练习侧重语法而不是拼写。'],
      ['book','语法书','n.',['语法书'],'grammar-reference-book','He consulted a grammar to check the use of the tense.','他查阅了一本语法书，核对时态的用法。']
    ],[ref(['入门书'],'context-required','限介绍语言语法的书，不是任意学科入门书的通用名称。',cam('grammar'))]);
    entry('intonation',[
      ['speech','语调；说话时声音的升降','n.',['语调','声调'],'speech-pitch-pattern','Rising intonation can make the statement sound like a question.','上升语调可能使这句陈述听起来像问句。'],
      ['music','歌唱或演奏的音准','n.',['音乐音准'],'musical-pitch-accuracy','The conductor stopped the rehearsal to improve the choir\'s intonation.','指挥暂停排练，改善合唱团的音准。']
    ],[ref(['朗诵','唱'],'context-required','语调或音准描述发声方式，不等于所有朗诵或歌唱活动。',cam('intonation'))]);
    entry('phonetic',[
      ['sounds','语音的；语音学的；按发音表示的','adj.',['语音的','语音学的','表示语音的','语音差异的'],'speech-sounds','The dictionary uses phonetic symbols to show pronunciation.','词典用语音符号标示发音。']
    ]);
    entry('consonant',[
      ['sound','辅音；表示辅音的字母','n.',['辅音'],'consonant-sound','The word begins with a consonant followed by a vowel.','这个单词以辅音开头，后面接一个元音。'],
      ['agreement','一致的；相符的（正式）','adj.',['一致的','调和的'],'in-agreement','The proposed changes are consonant with the original aims of the project.','拟议修改与项目最初的目标一致。','consonant with']
    ],[],{agreement:col('consonant')});
    entry('alphabet',[
      ['letters','字母表；某语言按固定顺序排列的字母','n.',['字母','字母表'],'ordered-letter-set','Children practised writing the alphabet before learning whole words.','孩子们在学习完整单词前练习书写字母表。']
    ]);
    entry('oral',[
      ['spoken','口头的；口述而非书面的','adj.',['口头的','口述的'],'spoken-not-written','The project records oral accounts of life in the fishing village.','这个项目记录了渔村生活的口述资料。'],
      ['mouth','口腔的；通过口部的','adj.',['口部的'],'mouth-related','The clinic provides advice on oral hygiene.','诊所提供口腔卫生方面的建议。'],
      ['exam','口试','n.',['口试'],'spoken-examination','The oral lasted fifteen minutes and covered three topics.','口试持续了十五分钟，涉及三个话题。']
    ]);
    entry('vowel',[
      ['sound','元音；表示元音的字母；元音的','n./modifier',['元音','元音的'],'vowel-sound','The final vowel is longer in the second recording.','第二段录音中的最后一个元音更长。']
    ]);
    entry('pronoun',[
      ['substitute','代词；代替名词或名词短语的词','n.',['代词'],'noun-substitute','The pronoun they refers to the students mentioned earlier.','代词 they 指前面提到的学生。']
    ]);
    entry('entertainment',[
      ['amusement','娱乐活动；供人欣赏的表演','n.',['娱乐','娱乐表演'],'recreational-amusement','The festival offers free entertainment in the public square.','节日在公共广场提供免费娱乐表演。'],
      ['hospitality','为客户等安排的款待活动','n.',['款待'],'business-hospitality','The company reduced its budget for client entertainment.','公司削减了客户招待预算。']
    ]);
    entry('interpret',[
      ['meaning','解释；理解或判断含义','v.',['解释','理解'],'explain-meaning','Researchers must interpret the results in the context of the small sample.','研究人员必须结合样本较小的情况来解释结果。'],
      ['translate','口译；把所说内容转换成另一种语言','v.',['翻译'],'spoken-language-translation','A volunteer interpreted for visitors who did not speak the local language.','一位志愿者为不会说当地语言的访客做口译。'],
      ['perform','以个人理解演绎作品','v.',['演出'],'artistic-interpretation','The pianist interpreted the final movement with unusual restraint.','钢琴家以不同寻常的克制演绎了最后一个乐章。']
    ]);
    entry('communicate',[
      ['information','交流；传递信息或表达感受','v.',['显露','传达','通讯'],'exchange-information','The team uses diagrams to communicate complex ideas clearly.','团队用图示清楚地传达复杂想法。'],
      ['disease','传播疾病','v.',['感染'],'transmit-disease','The report explains how the infection can be communicated through contact.','报告解释了这种感染如何通过接触传播。'],
      ['rooms','房间等相通；通过门连接','v.',['相通'],'rooms-connected','The two study rooms communicate through a narrow doorway.','两间自习室通过一个狭窄门口相通。']
    ]);
    entry('negotiate',[
      ['agreement','谈判；协商达成协议','v.',['商议','谈判','交涉','谈妥'],'reach-agreement','The unions will negotiate a new agreement with the employers.','工会将与雇主协商一份新协议。'],
      ['navigate','成功通过难走的路线；处理难题','v.',['处理'],'manage-difficult-route','The driver negotiated the narrow bend without touching the wall.','司机顺利通过狭窄弯道，没有碰到墙。'],
      ['finance','转让或兑现票据等金融文件','v.',['转让'],'transfer-financial-document','The bank explained the conditions for negotiating the cheque.','银行解释了兑现这张支票的条件。']
    ]);
    entry('editor',[
      ['person','编辑；编者；负责出版内容的人','n.',['编者','编辑','主笔'],'publication-editor','The editor checked every quotation before publication.','编辑在出版前核查了每处引文。'],
      ['software','编辑器；修改文字或媒体的程序','n.',['编辑器','编辑装置'],'editing-software','The text editor highlighted an unmatched bracket.','文本编辑器高亮显示了一个不匹配的括号。']
    ]);
    entry('critic',[
      ['reviewer','评论家；专业评述作品的人','n.',['批评家','鉴定家'],'professional-reviewer','The film critic praised the performances but questioned the ending.','影评人赞赏演员的表演，但对结尾提出了质疑。'],
      ['opponent','持批评意见的人；反对者','n.',['反对者'],'express-disapproval','A critic of the policy argued that it would increase inequality.','一位政策批评者认为，这项政策会加剧不平等。']
    ]);
    entry('recreation',[
      ['leisure','娱乐；休闲消遣','n.',['娱乐','消遣','休息','休养'],'recreational-amusement','The park provides space for recreation as well as wildlife.','公园既为野生生物提供空间，也供人们休闲。']
    ],[ref(['再创造'],'context-required','re-creation 的重新创造义有构词、读音或上下文区别，不与休闲娱乐不加区分地混题。',cam('recreation'))]);
    entry('improvise',[
      ['perform','即兴表演或创作','v.',['即席创作'],'unplanned-performance','The musicians improvised a short piece while the stage was being prepared.','准备舞台时，音乐家们即兴演奏了一小段音乐。'],
      ['make-do','临时制作；用现有材料应急','v.',['临时做'],'make-do-with-resources','We improvised a shelter from a sheet and two branches.','我们用一块布和两根树枝临时搭了个遮蔽处。']
    ]);
    entry('melody',[
      ['tune','旋律；曲调','n.',['曲子','美妙音乐','曲调'],'musical-tune','The melody returns softly near the end of the song.','歌曲结尾处，旋律轻柔地再次出现。']
    ]);
    entry('sponsor',[
      ['funding','赞助者；提供经费或物资支持','n./v.',['赞助者','赞助'],'financial-sponsorship','A local business agreed to sponsor the school concert.','一家当地企业同意赞助学校音乐会。'],
      ['proposal','倡议人；正式提出议案或组织活动','n./v.',['发起者','倡议者','发起','倡议'],'official-proposal-support','Several members agreed to sponsor the proposal for a new library.','几位成员同意联名倡议新建图书馆。'],
      ['responsibility','保证人；正式承担对某人的责任','n./v.',['保证人'],'formal-personal-guarantee','The programme requires an adult to sponsor each young participant.','项目要求每位年轻参与者有一名成年人担任保证人。'],
      ['religion','教父或教母；在洗礼中担任保荐人','n./v.',['教父'],'baptismal-sponsor','Her aunt acted as her sponsor at the baptism.','她的姑妈在洗礼中担任了她的保荐人。']
    ]);
    entry('merchandise',[
      ['goods','商品；货物','n.',['商品','货物'],'commercial-goods','The shop displays locally made merchandise near the entrance.','商店在入口附近展示本地制作的商品。'],
      ['market','推销商品；销售相关衍生产品','v.',['交易','买卖'],'promote-goods-sales','The company merchandises its products through specialist retailers.','公司通过专业零售商推销产品。']
    ]);
    entry('crude',[
      ['raw','天然未加工的；原油','adj./n.',['天然的','天然的物质'],'unprocessed-substance','The pipeline carries crude oil to the refinery.','管道把原油输送到炼油厂。'],
      ['rough','粗略的；制作粗糙的','adj.',['粗糙的'],'roughly-made','They built a crude model to test the basic design.','他们搭建了一个粗略模型，测试基本设计。'],
      ['rude','粗鲁的；冒犯人的','adj.',['粗鲁的'],'offensive-vulgar','His crude remarks made several guests uncomfortable.','他的粗鲁言论让几位客人感到不自在。']
    ]);
    entry('utensil',[
      ['tool','器具；用具；尤指厨房工具','n.',['器皿','用具'],'functional-device','Every cooking utensil was washed before the demonstration.','演示前，每件烹调用具都清洗过了。']
    ]);
    entry('landfill',[
      ['waste','垃圾填埋；填埋场','n.',['垃圾堆','垃圾填埋地'],'buried-waste-disposal','Recycling reduced the amount of waste sent to landfill.','回收减少了送往填埋场的垃圾量。']
    ]);
    entry('detergent',[
      ['cleaner','洗涤剂；清洁剂','n.',['清洁剂','洗涤剂'],'washing-substance','The new detergent removes grease at lower temperatures.','这种新洗涤剂在较低温度下也能去除油脂。']
    ]);
    entry('stationery',[
      ['writing','文具；信纸等书写用品','n.',['文具','信纸'],'writing-supplies','The office keeps spare stationery in a labelled cupboard.','办公室把备用文具放在贴有标签的柜子里。']
    ]);
    entry('leaflet',[
      ['paper','传单；散发传单','n./v.',['传单'],'information-handout','The leaflet explains how to register for the evening classes.','传单说明了如何报名夜校课程。']
    ],[ref(['小叶'],'scope-excluded','植物复叶组成单位是专门植物学用法，本批声明面向公众的信息传单范围。',cam('leaflet'))]);
    entry('opacity',[
      ['physical','不透明性；阻碍光线通过的程度','n.',['不透明','不透明体','浑浊','不透光'],'light-blocking-property','The coating increases the opacity of the glass.','涂层提高了玻璃的不透明程度。'],
      ['information','不透明；信息难以理解或查明','n.',['信息不透明'],'lack-of-transparency','The opacity of the contract made the charges hard to compare.','合同信息不透明，使各项费用难以比较。']
    ],[ref(['电波不透过','不透明区','浊斑'],'scope-excluded','这些物理或医学标签需要专门测量和部位条件，本批不作无条件常用义考点。',cam('opacity'))]);
    entry('material',[
      ['substance','材料；物资；制造东西的物质','n.',['材料','物资'],'physical-making-substance','The design uses recycled material for the outer panels.','设计使用再生材料制作外侧面板。'],
      ['cloth','布料；织物','n.',['布料'],'woven-material','The coat is made from a light waterproof material.','这件外套用轻薄的防水布料制成。'],
      ['information','素材；供研究或创作的资料','n.',['素材','资料'],'source-information','The archive contains material for a study of regional trade.','档案馆有可用于研究地区贸易的资料。'],
      ['physical','物质的；与金钱或实物有关的','adj.',['物质的','肉体的'],'physical-not-spiritual','The survey measured material living conditions rather than personal happiness.','调查询问的是物质生活条件，而不是个人幸福感。'],
      ['important','重要的；对判断有实质影响的','adj.',['重要的'],'significant-for-decision','The report omitted a material fact about the project\'s cost.','报告遗漏了有关项目成本的一项重要事实。']
    ]);
    entry('duplicate',[
      ['copy','完全相同的副本；复制；重复的','n./v./adj.',['副本','复本','复制品','复制的','复制'],'exact-copy','The clerk kept a duplicate of the signed agreement.','职员保留了已签协议的副本。'],
      ['repeat','重复进行已有工作或过程','v.',['重复工作'],'repeat-existing-effort','The teams shared their results so they would not duplicate the same tests.','团队共享了结果，以免重复相同的测试。']
    ],[ref(['二重的','使加倍'],'context-required','复制可产生第二份，但不等于任意数值乘二；本批不把 duplicate 与 double 无条件互换。',cam('duplicate'))]);
    entry('fibre',[
      ['thread','纤维；细丝状结构或材料','n.',['纤维','构造','纤维制品'],'threadlike-material','Each fibre in the fabric was examined under a microscope.','织物中的每根纤维都在显微镜下接受检查。'],
      ['diet','膳食纤维','n.',['膳食纤维'],'dietary-fibre','Whole grains provide fibre as well as other nutrients.','全谷物提供膳食纤维及其他营养物质。']
    ]);
    entry('leather',[
      ['material','皮革；皮革制品；皮制的','n./modifier',['皮革','皮制品','皮革的','皮制的'],'tanned-animal-hide','The bag has a strong leather strap and a metal clasp.','包上装有结实的皮带和金属搭扣。']
    ],[ref(['马镫的皮带','鞭苔','抽打'],'scope-excluded','马具及打人的旧或非正式用法不在本批皮革材料范围，保留旧标签而不认证为常用考点。',cam('leather')),ref(['覆以皮革'],'context-required','皮革覆盖需具体工艺语境；本批以材料和材料修饰用途归组。',cam('leather'))]);
    entry('luxury',[
      ['comfort','奢华；豪华舒适的生活或环境','n./modifier',['奢侈','豪华','奢侈的','豪华的'],'expensive-comfort','The hotel promises luxury without excessive energy use.','酒店承诺提供豪华舒适，同时避免过度耗能。'],
      ['extra','非必需的享受；难得的便利或奢侈品','n.',['非必需的享受'],'pleasant-nonessential','For a busy parent, an uninterrupted afternoon can be a luxury.','对忙碌的父母而言，不受打扰的下午可能是一种奢侈享受。']
    ]);
    entry('extravagant',[
      ['spending','奢侈浪费的；花费过度的','adj.',['奢侈的','挥霍无度的','浪费的'],'excessive-spending','The council rejected an extravagant plan for the reception.','地方议会否决了过于奢侈的接待计划。'],
      ['excessive','过分的；夸大的；超出合理范围的','adj.',['夸大的'],'exaggerated-size-importance','The advertisement made extravagant claims about the product.','广告对产品作出了夸大的宣称。']
    ]);
    entry('exquisite',[
      ['beautiful','精致的；细腻优美的','adj.',['精致的','细腻的'],'delicate-beauty','The museum displayed an exquisite miniature carved from wood.','博物馆展出了一件精美的微型木雕。'],
      ['intense','感受强烈的；判断极为敏锐的','adj.',['敏锐的'],'exceptional-intensity','The musician showed an exquisite sense of timing.','这位音乐家展现出极其敏锐的节奏时机感。']
    ]);
    entry('uniform',[
      ['clothing','制服；某群体统一穿着的服装','n.',['制服'],'group-standard-clothing','Every guide wears a uniform that visitors can recognise easily.','每位导游都穿着便于访客辨认的制服。'],
      ['consistent','一致的；均匀不变的','adj.',['统一的','一律的','始终如一的'],'consistent-without-variation','The oven keeps a uniform temperature across all shelves.','烤箱让各层搁架的温度保持均匀一致。']
    ]);
    entry('textile',[
      ['cloth','纺织品；与织物生产有关的','n./modifier',['纺织品','织的','纺织的'],'woven-material','The textile was woven from locally grown cotton.','这种纺织品由当地种植的棉花织成。'],
      ['industry','纺织业（常用复数 textiles）','n.',['纺织业'],'cloth-manufacturing-industry','Textiles once provided most of the jobs in the town.','纺织业曾经提供了镇上的大多数工作岗位。','textiles']
    ]);
    entry('velvet',[
      ['cloth','天鹅绒；天鹅绒制的','n./modifier',['天鹅绒','天鹅绒的'],'soft-pile-cloth','The theatre seats were covered in dark red velvet.','剧院座椅覆着暗红色天鹅绒。']
    ]);
    entry('shabby',[
      ['worn','破旧的；衣衫褴褛的','adj.',['衣衫褴褛的','低劣的','破旧的'],'worn-untidy-condition','The shabby waiting room needed new chairs and fresh paint.','破旧的候车室需要换椅子并重新粉刷。'],
      ['unfair','卑鄙的；不公正或不尊重人的','adj.',['吝啬的','卑鄙的'],'unfair-treatment','The workers complained about the company\'s shabby treatment of temporary staff.','工人抱怨公司不公正地对待临时员工。']
    ]);
    entry('tailor',[
      ['clothes','裁缝；按尺寸缝制服装','n./v.',['裁缝','成衣匠','缝制','做裁缝'],'custom-clothing-making','The tailor altered the jacket so that it fitted properly.','裁缝修改了夹克，使它合身。'],
      ['adapt','为特定需要量身调整或制作','v.',['制作','使适应'],'adapt-to-specific-needs','The tutor tailored the exercises to each learner\'s goals.','导师按每位学习者的目标调整了练习。']
    ]);
    entry('recipe',[
      ['cooking','食谱；烹饪的配料和步骤','n.',['食谱'],'cooking-instructions','The recipe calls for fresh tomatoes rather than a ready-made sauce.','这份食谱要求使用新鲜番茄，而不是现成酱汁。'],
      ['result','导致某种结果的方法或因素','n.',['秘诀'],'method-producing-result','Ignoring maintenance is a recipe for expensive repairs.','忽视维护会导致昂贵的维修费用。','a recipe for']
    ],[ref(['处方','取(处方头语)'],'scope-excluded','旧处方与拉丁缩写词源不作为现代烹饪或结果搭配的独立常用义考查。',cam('recipe'))]);
    entry('cater',[
      ['food','提供餐饮及相关服务','v.',['提供饮食及服务'],'event-food-service','A local restaurant will cater the conference lunch.','一家当地餐馆将为会议提供午餐。'],
      ['needs','满足某类人的需要；迎合偏好','v.',['投合','迎合'],'meet-specific-needs','The museum caters for visitors who need information in large print.','博物馆为需要大字版信息的访客提供相应服务。','cater for/to']
    ],[],{needs:col('cater')});
    entry('provision',[
      ['supply','提供；供应；所提供的资金、设备或服务','n.',['(政府提供的)钱和设备'],'supplying-resources','The provision of free transport improved access to the clinic.','提供免费交通改善了人们前往诊所的条件。'],
      ['preparation','预先准备；为未来需要作安排','n.',['准备'],'arrangement-for-future','The building plan makes provision for an extra classroom.','建筑方案为增建一间教室预作安排。','make provision for'],
      ['food','食品等补给品（通常用复数）','n.',['供应品'],'food-supplies','The walkers packed enough provisions for three days.','徒步者带上了足够三天使用的补给品。','provisions'],
      ['clause','法律或合同的规定；条款','n.',['规定','条款'],'legal-contract-clause','One provision in the lease prohibits smoking indoors.','租约中的一项条款禁止在室内吸烟。'],
      ['equip','为……供应食品和其他必需品','v.',['供给...食物及必需品'],'supply-essential-stores','The vessel was provisioned before it left the harbour.','这艘船离港前已补充好必需品。'],
      ['finance','为预期损失或开支预留的金额','n.',['财务准备金'],'financial-loss-reserve','The bank increased its provision for loans that might not be repaid.','银行增加了可能无法收回的贷款的损失准备金。']
    ]);
    entry('beverage',[
      ['drink','饮料；可供饮用的液体','n.',['饮料','饮料(如牛奶、茶、咖啡、啤酒等)'],'drink-liquid','Water was the only beverage available at the remote campsite.','偏远营地唯一可供饮用的饮料是水。']
    ]);
    entry('sober',[
      ['alcohol','未醉的；不饮酒的','adj.',['未醉的','节制的'],'not-intoxicated','A sober passenger arranged a taxi for the group.','一位没有喝醉的乘客为大家叫了出租车。'],
      ['serious','严肃冷静的；考虑周全而不过分乐观的','adj.',['稳重的','严肃的','不夸大的','合理的'],'serious-realistic','The report offers a sober assessment of the project risks.','报告对项目风险作出了冷静、务实的评估。'],
      ['plain','颜色或风格朴素、不鲜艳的','adj.',['朴素的'],'subdued-style','He chose a sober grey suit for the formal ceremony.','他为正式典礼选了一套素雅的灰色西装。'],
      ['become-serious','使冷静或严肃起来','v.',['使严肃','变严肃'],'make-serious','The news of further cuts sobered everyone at the meeting.','进一步削减经费的消息让与会者都严肃起来。'],
      ['sober-up','醒酒；使恢复清醒','v.',['使醒酒','从醉里醒来'],'recover-from-intoxication','They waited for him to sober up before discussing the incident.','他们等他酒醒之后才讨论这件事。','sober up']
    ]);
    entry('crop',[
      ['plant','庄稼；种植供食用或利用的作物','n.',['农作物'],'cultivated-plants','Rice is the main crop grown on these flooded fields.','稻米是这些灌水农田里种植的主要作物。'],
      ['yield','一季的收成；一批同类事物','n.',['产量'],'harvest-or-cohort','The orchard produced a smaller crop after the late frost.','晚霜过后，果园的收成减少了。'],
      ['short-hair','剪得很短的发型','n.',['平头'],'short-haircut','She replaced her long hair with a neat crop.','她把长发剪成了利落的短发。'],
      ['cut','剪短；修剪；裁去图片边缘','v.',['修剪','裁剪'],'cut-short-or-trim','The editor cropped the photograph to remove the empty foreground.','编辑裁掉了照片中空白的前景。'],
      ['cultivate','种植或收获作物','v.',['收割','种植','收获'],'cultivate-harvest-crops','The land has been cropped continuously for several decades.','这片土地已经连续种植作物几十年了。']
    ]);
    entry('flavour',[
      ['taste','食物或饮料的味道；风味','n.',['味','滋味','香味','气味','风味'],'food-taste','Roasting the peppers gives the soup a richer flavour.','烤过的甜椒让汤的风味更加浓郁。'],
      ['character','独特的风格、特色或情调','n.',['情味','情趣','风韵'],'distinctive-character','The old street names give the district a maritime flavour.','老街道的名字赋予这个地区独特的海洋气息。'],
      ['season','调味；给事物增添特色','v.',['给...调味','给...增添风趣','加香料','加味于'],'add-taste-or-character','The rice was flavoured with a little lemon juice.','米饭用少量柠檬汁调了味。']
    ],[ref(['调味香料'],'context-required','通常指 flavouring；flavour 的味道或特色不是任意一份香料的名称。',cam('flavour'))]);
    entry('spicy',[
      ['food','含香料的；有辛辣味的','adj.',['香的','多香料的','辛辣的'],'seasoned-hot-food','The spicy bean stew was served with plain rice.','这份辛辣的炖豆配着原味米饭端了上来。'],
      ['risque','内容刺激的；带有性暗示的（非正式）','adj.',['下流的'],'risque-content','The magazine removed a spicy anecdote from its family edition.','杂志从家庭版中删去了一则带有性暗示的轶事。']
    ]);
    entry('hunger',[
      ['food','饥饿；食物匮乏','n.',['饥饿','饥荒'],'lack-of-food','The relief programme aims to reduce hunger in isolated villages.','救援项目旨在缓解偏远村庄的饥饿问题。'],
      ['desire','强烈渴望；渴求','n./v.',['渴望'],'strong-desire','The young journalist had a hunger for reliable evidence.','这位年轻记者强烈渴求可靠证据。','a hunger for / hunger for']
    ],[ref(['使挨饿','挨饿'],'scope-excluded','作挨饿或使饥饿的旧动词用法不纳入本批现代常用训练；不与 hunger for 渴望混为一义。',cam('hunger'))]);
    entry('inedible',[
      ['food','不能吃的；不适合食用的','adj.',['不适于食用的'],'not-fit-to-eat','The bread had become so mouldy that it was inedible.','面包霉变得很严重，已经不能吃了。']
    ],[],{food:'https://www.collinsdictionary.com/us/dictionary/english/inedible'});
    entry('infrastructure',[
      ['public','交通、能源、通信等公共基础设施','n.',['基础设施'],'public-support-facilities','The storm damaged the island\'s transport infrastructure.','风暴破坏了岛上的交通基础设施。'],
      ['support','组织或系统运行所需的基础结构','n.',['基础结构'],'system-support-structure','The university upgraded its digital infrastructure for remote learning.','大学升级了支持远程学习的数字基础结构。']
    ]);
    entry('construct',[
      ['build','建造；用各部分组成整体','v.',['构造','建造'],'physical-building','Engineers constructed the bridge without blocking the river.','工程师在不堵塞河道的情况下建造了这座桥。'],
      ['formulate','构思并形成论点、故事等','v.',['对...进行构思'],'formulate-ideas','The students constructed an argument from several independent sources.','学生们依据几个独立来源构建了论证。'],
      ['concept','人为构建的概念或理论模型','n.',['构成物'],'constructed-concept','Researchers treated the measure of success as a social construct.','研究人员把成功的衡量标准视为一种社会建构。']
    ],[ref(['作图'],'context-required','几何作图属于按给定条件构造图形，不能把所有绘画都叫 construct。',cam('construct'))]);
    entry('establish',[
      ['found','建立；创办；确立制度或关系','v.',['建立','制定'],'found-organization-system','The charity established a training centre near the station.','慈善机构在车站附近建立了一所培训中心。'],
      ['position','使地位、声誉或习惯得到稳固确立','v.',['确立'],'secure-recognized-position','The first exhibition established her reputation as a photographer.','第一次展览确立了她作为摄影师的声誉。'],
      ['verify','查明事实；证实','v.',['查明','证实'],'verify-facts','The investigation established that the alarm had failed.','调查证实警报器发生了故障。']
    ],[ref(['移植生长'],'scope-excluded','植物定植的专业语境不纳入本批常用训练；不是任意移植动作的通用译法。',cam('establish'))]);
    entry('reside',[
      ['live','居住；定居（正式）','v.',['住','居留','居住'],'live-at-place','The applicant currently resides in a small coastal town.','申请人目前居住在一座沿海小镇。'],
      ['lie-in','权力、性质等归于或存在于','v.',['属于'],'belong-or-lie-in','Responsibility for safety resides with the site manager.','安全责任由现场经理承担。','reside in/with']
    ]);
    entry('residential',[
      ['homes','住宅的；以居住为主的','adj.',['住宅的','与居住有关的','有关居住的','房产的:居所的','适于居住的'],'housing-related','Heavy vehicles are not allowed on this residential street.','这条住宅区街道不允许重型车辆通行。'],
      ['on-site','提供住宿的；需要在场所居住的','adj.',['住校的'],'living-on-site','The college offers a residential course with meals and accommodation.','学院开设了一门提供食宿的住宿制课程。']
    ]);
    entry('habitable',[
      ['liveable','适合人居住的；可居住的','adj.',['适于居住的','可居住的'],'suitable-for-human-habitation','The damaged house was not habitable until the roof was repaired.','受损房屋在屋顶修好之前不适合居住。']
    ]);
    entry('corridor',[
      ['building','建筑物内连接房间的走廊；通道','n.',['走廊','回廊'],'indoor-passage','The laboratory is at the far end of the corridor.','实验室在走廊的最远端。'],
      ['strip','连接地区的狭长地带；交通或通行走廊','n.',['人口密集地带'],'connecting-land-strip','The rail corridor links several densely populated towns.','这条铁路走廊连接了几个稠密的城镇。']
    ]);
    entry('ceiling',[
      ['room','房间的天花板','n.',['天花板'],'room-overhead-surface','A small lamp hung from the centre of the ceiling.','一盏小灯挂在天花板中央。'],
      ['limit','最高限额；上限','n.',['顶点','顶线','上限'],'maximum-allowed-limit','The council set a ceiling on annual parking charges.','议会为年度停车收费设定了上限。']
    ]);
    entry('pillar',[
      ['column','支撑建筑的柱子；柱状物','n.',['柱子','柱','脚'],'supporting-column','Stone pillars support the roof of the entrance hall.','石柱支撑着门厅的屋顶。'],
      ['support','重要支柱；栋梁；核心支持者或原则','n.',['栋梁','台柱','重要的支持者'],'essential-support','Public trust is a pillar of an effective health service.','公众信任是高效医疗服务的重要支柱。']
    ]);
    entry('malfunction',[
      ['failure','机器、设备或系统的故障；发生故障','n./v.',['故障','失灵','发生故障','不起作用'],'failure-to-function','A sensor malfunction caused the doors to remain closed.','传感器故障导致门一直关着。']
    ],[ref(['疾病'],'context-required','身体器官功能障碍可用 malfunction，但不能泛指所有疾病。',cam('malfunction'))]);
    entry('attraction',[
      ['interest','吸引力；引发兴趣或好感','n.',['吸引','吸引力'],'appeal-interest','The attraction of flexible working is clear to many parents.','弹性工作的吸引力对许多家长而言显而易见。'],
      ['feature','有吸引力的事物；景点','n.',['吸引人的事物'],'visitor-attraction','The restored lighthouse has become a popular tourist attraction.','修复后的灯塔成了热门旅游景点。'],
      ['force','物理上的吸引作用','n.',['引力'],'physical-attractive-force','The experiment demonstrates the attraction between opposite magnetic poles.','实验展示了异名磁极之间的吸引作用。']
    ]);
    entry('airline',[
      ['company','航空公司；经营空中客货运输的企业','n.',['航空公司'],'air-transport-company','The airline added two flights to meet summer demand.','航空公司增开了两个航班，以满足夏季需求。']
    ],[ref(['航线','航线的设备'],'scope-excluded','旧航路或航运系统用法保留追溯；本批训练现代最常用的航空公司义，不把它等同于单条 air route。','https://www.collinsdictionary.com/us/dictionary/english/airline')],{company:'https://www.collinsdictionary.com/us/dictionary/english/airline'});
    entry('passage',[
      ['route','通道；走廊；身体内的管道','n.',['通道','走廊'],'connecting-passage','A narrow passage connects the courtyard to the street.','一条狭窄的通道连接庭院和街道。'],
      ['excerpt','文章或音乐的一段','n.',['一段'],'text-music-excerpt','The teacher asked us to summarise the final passage of the article.','老师让我们概括文章的最后一段。'],
      ['journey','航行；旅程；通过某处','n.',['通过','航行','经过','横渡'],'travel-through','Ice made the ship\'s passage through the channel difficult.','浮冰使船只穿越海峡变得困难。'],
      ['time','时间的流逝','n.',['时间流逝'],'time-elapsing','The passage of time made the old disagreement less important.','随着时间流逝，过去的分歧变得不那么重要了。','the passage of time'],
      ['law','法案的通过','n.',['法案通过'],'legislative-approval','The passage of the bill allowed the new service to begin.','法案通过后，新服务得以启动。']
    ],[ref(['移居','争吵','(使)马以斜横步前进','使传代'],'scope-excluded','迁徙、交锋及马术、细胞培养的专门旧译不进入本批常用义项，不据此出题。',cam('passage'))]);
    entry('intersection',[
      ['roads','道路交叉口；交叉点','n.',['十字路口','交叉点'],'crossing-location','New traffic lights were installed at the busy intersection.','繁忙路口安装了新的交通信号灯。'],
      ['common','集合的交集；领域等的重叠部分','n.',['交集'],'shared-set-overlap','The course explores the intersection of law and medical ethics.','课程探讨法律与医学伦理的交叉领域。']
    ],[ref(['逻辑乘','与'],'context-required','布尔集合语境下的交集可对应逻辑 AND；不能将普通连词与作为 intersection 的通用释义。',cam('intersection'))]);
    entry('pavement',[
      ['footpath','人行道（英式）','n.',['人行道'],'pedestrian-path','Please keep bicycles off the pavement beside the school gate.','请勿在校门旁的人行道上骑自行车。'],
      ['surface','硬质铺设的路面（尤美式）','n.',['路面','铺面路','铺路材料'],'paved-surface','The pavement cracked after several weeks of extreme heat.','连续数周高温后，铺设的路面出现了裂缝。']
    ]);
    entry('harbour',[
      ['port','港口；避风港','n.',['港'],'sheltered-port','Fishing boats returned to the harbour before the storm arrived.','暴风雨到来前，渔船返回了港口。'],
      ['feelings','心怀；怀有某种想法或感情','v.',['怀有'],'hold-feelings','Some residents still harbour doubts about the proposed airport.','一些居民仍然对拟建机场心存疑虑。'],
      ['shelter','窝藏；庇护；为……提供藏身处','v.',['庇护','藏匿'],'hide-or-shelter','The abandoned shed was used to harbour stolen goods.','废弃棚屋被用来藏匿赃物。'],
      ['contain','含有；成为病菌等的栖藏处','v.',['含有病菌'],'contain-organisms','Untreated water may harbour harmful bacteria.','未经处理的水可能藏有有害细菌。']
    ],[ref(['避难所','(使)入港停泊'],'scope-excluded','泛指庇护地或使船停泊的旧用法不另作现代常用考点；港口名词与窝藏动词分开。',cam('harbour'))]);
    entry('vessel',[
      ['ship','船；大型船只','n.',['船'],'watercraft','The research vessel carried equipment for sampling deep water.','考察船载着采集深水样本的设备。'],
      ['container','盛装液体等的容器','n.',['容器','(容)器'],'liquid-container','The liquid was heated in a sealed glass vessel.','液体在密封的玻璃容器内被加热。'],
      ['tube','血管；植物的输导管','n.',['脉管','管'],'biological-transport-tube','The diagram shows how blood flows through a narrow vessel.','图示展示了血液如何流经一条细小血管。']
    ]);
    entry('transit',[
      ['movement','运输；运送过程；过境通行','n./v.',['经过','通行','运输','运送','使通过','通过'],'transport-through','The fragile instruments were damaged in transit.','这些易碎仪器在运输途中受损。','in transit'],
      ['network','公共交通运输系统（尤美式）','n.',['运输线'],'public-transport-system','The city expanded its transit network to serve new suburbs.','城市扩展了公共交通网络，为新郊区提供服务。']
    ],[ref(['转变'],'scope-excluded','本批区分运输 transit 与状态转变 transition，不用单独旧译转变出题。',cam('transit'))]);
    entry('convey',[
      ['message','表达；传达信息或感情','v.',['传达'],'communicate-message','The chart conveys the scale of the increase more clearly than a table.','图表比表格更清楚地传达了增长的幅度。'],
      ['transport','运送；搬运','v.',['运输','搬运'],'transport-material','A covered belt conveys grain from the store to the mill.','一条封闭输送带把谷物从仓库运到磨坊。']
    ],[ref(['转让','转让(财产等)'],'scope-excluded','法律上的产权转让义保留旧译追溯；本批不将一般传递与产权处分等同。',cam('convey'))]);
    entry('postpone',[
      ['delay','推迟；把预定事项延后','v.',['延迟','使延期','缓办','搁延','延缓'],'reschedule-later','The organisers postponed the outdoor concert until the following week.','组织者把户外音乐会推迟到了下一周。']
    ],[ref(['延缓发作'],'context-required','某事件发生被延后的具体语境，不单列为医学功能或治疗结论。',cam('postpone'))]);
    entry('diplomatic',[
      ['relations','外交的；涉及国家间关系的','adj.',['外交的','外交上的'],'international-diplomacy','The two countries restored diplomatic relations after lengthy talks.','经过长时间谈判，两国恢复了外交关系。'],
      ['tact','说话做事得体的；善于避免冒犯的','adj.',['老练的'],'tactful-handling','Her diplomatic reply acknowledged both sides without worsening the dispute.','她得体的回答照顾到了双方，没有加剧争端。']
    ],[ref(['文献上的'],'scope-excluded','文书学的专门用法不纳入本批常用外交与处事义。',cam('diplomatic'))]);
    entry('regime',[
      ['government','政权；统治体制或统治时期','n.',['政权','当权期间','政体','社会制度'],'governing-system','The new regime introduced tighter controls on the press.','新政权对新闻媒体施加了更严格的管控。'],
      ['system','管理规则；制度；有计划的生活或训练安排','n.',['体制','制度','生活制度'],'organized-rules-routine','The training regime includes regular rest days.','训练安排包括定期休息日。']
    ],[ref(['情态'],'scope-excluded','缺少具体专业语境的旧标签不作为现代常用词义。',cam('regime'))]);
    entry('authority',[
      ['power','职权；支配或作决定的权力','n.',['权力','代理权','授权'],'official-power','Only the director has authority to approve the expenditure.','只有主任有权批准这笔开支。'],
      ['body','当局；掌管公共事务的机构','n.',['当权者','当局'],'official-public-body','The local authority is responsible for collecting household waste.','地方当局负责收集生活垃圾。'],
      ['expert','某领域的权威人士或权威来源','n.',['权威','专家'],'recognized-expert','The historian is an authority on early urban development.','这位历史学家是早期城市发展方面的权威。']
    ]);
    entry('neutral',[
      ['impartial','中立的；不支持任何一方的','adj.',['中立的'],'not-taking-sides','A neutral observer monitored the negotiations.','一位中立观察员监督了谈判。'],
      ['party','中立者；中立国','n.',['中立者','中立国'],'neutral-party','The agreement required the armed forces to respect neutrals.','协议要求武装部队尊重中立国。'],
      ['colour','不鲜艳的；中性色的','adj./n.',['非彩色'],'subdued-colour','Neutral colours make the small room feel less crowded.','中性色让这间小屋显得没那么拥挤。'],
      ['chemistry','化学性质中性的；既非酸也非碱的','adj.',['中性的'],'neither-acid-nor-alkali','The indicator showed that the solution was neutral.','指示剂显示该溶液呈中性。'],
      ['gear','汽车等变速装置的空挡','n.',['空档'],'disengaged-gear','The driver put the vehicle into neutral before stopping the engine.','驾驶员在关闭发动机前把车挂入空挡。']
    ]);
    entry('bilateral',[
      ['two-parties','双边的；由双方参加的','adj.',['双边的','双方的'],'two-party-relations','The ministers signed a bilateral agreement on student exchanges.','两位部长签署了一项关于学生交流的双边协议。'],
      ['two-sides','两侧的；身体两侧均有的','adj.',['有两边的','两侧的'],'both-physical-sides','The diagram shows the bilateral symmetry of the butterfly.','图示展示了蝴蝶两侧对称的结构。']
    ]);
    entry('municipal',[
      ['city','市政的；城市或城镇政府管理的','adj.',['市政的','市的'],'local-city-government','The municipal library stays open late on weekdays.','市立图书馆在工作日开放到较晚时间。']
    ],[ref(['自治区的','内政的'],'context-required','本批限城市或城镇层级；不将任意自治地区或国家内政称为 municipal。',cam('municipal'))]);
    entry('administration',[
      ['management','管理；行政工作','n.',['行政','管理'],'organizational-management','Online forms reduced the time spent on routine administration.','网上表格减少了处理日常行政工作的时间。'],
      ['government','政府；政府任期内的执政班子','n.',['政府机关'],'government-in-office','The incoming administration promised to improve public transport.','即将上任的政府承诺改善公共交通。'],
      ['giving','药物等的施用；正式给予或执行','n.',['给药'],'administering-treatment','The instructions describe the administration of the medicine by a trained professional.','说明书描述了由受训专业人员施用该药物的方式。']
    ]);
    entry('demographic',[
      ['population','人口的；人口统计特征的','adj.',['人口统计的','人口学的'],'population-characteristics','Demographic changes have increased demand for smaller homes.','人口结构变化增加了对小型住宅的需求。'],
      ['group','具有共同人口特征的群体','n.',['人口群体'],'population-segment','The survey included a younger demographic than earlier studies.','与早期研究相比，这项调查包含了更年轻的人群。']
    ]);
    entry('nominate',[
      ['candidate','提名为候选人；推荐获奖','v.',['提名','提名...为候选人','推荐'],'propose-candidate','The committee nominated three researchers for the annual award.','委员会提名了三位研究人员角逐年度奖项。'],
      ['appoint','指定；任命承担职务','v.',['任命','指定'],'designate-role','Each department nominated one person to coordinate the move.','每个部门指定一人协调搬迁。']
    ],[ref(['命名'],'context-required','nominate 是指定人选等，不等于为任何事物取名字；不以命名的宽泛旧标签出题。',cam('nominate'))]);
    entry('perspective',[
      ['viewpoint','视角；观点；看待问题的方式','n.',['(观察问题的)视角','看法'],'viewpoint','The interviews provide a different perspective on working from home.','这些访谈为居家办公提供了不同的视角。'],
      ['proportion','对重要性或比例的客观判断','n.',['客观判断'],'balanced-proportion','Comparing the figures with last year helps put the change in perspective.','把数据与去年比较，有助于客观看待这项变化。','put/keep ... in perspective'],
      ['depth','透视法；表现空间远近的画法或效果','n./modifier',['远景','透视感','透视法','透视图','透视的','透视法的','透视'],'visual-depth-representation','The drawing uses perspective to make the distant houses appear smaller.','这幅画用透视法把远处的房屋画得较小。']
    ]);
    entry('entrepreneur',[
      ['business','创业者；承担经营风险的企业家','n.',['企业家'],'business-founder-risk','The entrepreneur tested demand before opening a second shop.','这位创业者在开第二家店之前先测试了市场需求。']
    ],[ref(['主办人','承包商'],'context-required','创业经营者可能主办项目，但不能将所有活动主办人或一般承包商都叫 entrepreneur。',cam('entrepreneur'))]);
    entry('currency',[
      ['money','货币；某地区使用的通货','n.',['货币','通货','货币型'],'national-money','Visitors can exchange foreign currency at the airport.','游客可以在机场兑换外币。'],
      ['acceptance','广泛流传或被接受；通行','n.',['流通','通用'],'wide-acceptance','The idea gained currency after several successful trials.','几次成功试验后，这一想法得到了广泛认可。','gain currency']
    ]);
    entry('tariff',[
      ['duty','进出口关税；关税税率表','n.',['关税','关税表'],'import-export-duty','The tariff increased the cost of importing steel.','关税提高了进口钢材的成本。'],
      ['prices','收费标准；服务价格表','n.',['价格表','收费表','价目表'],'schedule-of-charges','The hotel publishes a separate tariff for conference facilities.','酒店单独公布了会议设施的收费表。']
    ],[ref(['课以关税'],'scope-excluded','较少见动词用法不纳入本批常用名词训练。',cam('tariff'))]);
    entry('recession',[
      ['economy','经济衰退；经济活动持续下降的时期','n.',['衰退'],'economic-contraction','Small businesses struggled to obtain credit during the recession.','经济衰退期间，小企业很难获得信贷。']
    ],[ref(['后退','凹处','归还','退缩'],'scope-excluded','本批限现代经济常用义；形状、退缩及历史返还用法不直接作为经济释义或干扰项。',cam('recession'))]);
    entry('debt',[
      ['money','债务；欠款；借款后应偿付的钱','n.',['债务','借款','欠款'],'money-owed','The company reduced its debt by selling an unused warehouse.','公司通过出售一座闲置仓库减少了债务。'],
      ['gratitude','欠下的人情；感激之情','n.',['人情债'],'owed-gratitude','The rescue team earned a debt of gratitude from the villagers.','救援队让村民们感激不尽。','a debt of gratitude']
    ],[ref(['罪过'],'scope-excluded','宗教或历史语境中的旧义不纳入现代财务和感恩用法。',cam('debt'))]);
    entry('deficit',[
      ['budget','收支赤字；支出超过收入的差额','n.',['赤字'],'budget-shortfall','The council raised parking fees to reduce its budget deficit.','议会提高了停车费，以减少预算赤字。'],
      ['lack','不足；缺额；比赛中落后的分数','n.',['不足额','短缺'],'amount-shortfall','The team overcame a two-goal deficit in the final minutes.','球队在最后几分钟扳回了两球的落后局面。']
    ]);
    entry('affluent',[
      ['wealth','富裕的；经济条件宽裕的','adj.',['丰富的','富裕的'],'wealthy','Affluent households spend a larger share of their income on leisure travel.','富裕家庭把更大比例的收入用于休闲旅行。']
    ],[ref(['支流','富人'],'scope-excluded','本批训练现代常见的富裕形容词；旧名词和地理专业用法不作考点。',cam('affluent'))]);
    entry('transaction',[
      ['deal','交易；一项业务的办理','n.',['交易','办理'],'business-deal','The receipt records the date and value of the transaction.','收据记录了交易日期和金额。'],
      ['computing','作为整体完成或撤销的一组数据处理操作','n.',['事务处理'],'database-transaction','The database cancelled the transaction when the connection failed.','连接中断时，数据库撤销了该事务。']
    ],[ref(['学报','和解协议'],'scope-excluded','学会会刊通常涉及复数 Transactions，法律旧义另需语境；不混入本批交易和数据事务。',cam('transaction'))]);
    entry('sustainable',[
      ['environment','可持续的；不耗竭资源或严重破坏环境的','adj.',['环境可持续的'],'ecologically-maintainable','The farm uses sustainable methods that protect soil quality.','农场采用保护土壤质量的可持续耕作方法。'],
      ['continuable','能够长期维持的；可持续承担的','adj.',['足可支撑的','养得起的','可以忍受的'],'maintainable-long-term','Working every night is not a sustainable routine for the team.','每晚加班不是这支团队能够长期维持的工作方式。']
    ],[],{environment:col('sustainable'),continuable:col('sustainable')});
    entry('reimburse',[
      ['repay','偿还他人已支付的费用；报销','v.',['付还','偿还','赔偿','偿付','赔还'],'repay-expenses','The employer reimbursed her for the train fare.','雇主报销了她的火车票费用。','reimburse someone for something']
    ]);
    entry('enforce',[
      ['law','强制执行法律、规则或裁定','v.',['执行','予以强制执行'],'enforce-rules','Inspectors enforce the rules on safe food storage.','检查员强制执行食品安全储存规定。'],
      ['impose','强行施加；迫使某种状态得到维持','v.',['强迫','坚持'],'impose-condition','The storm enforced a complete halt to construction work.','风暴迫使建筑工程完全停工。']
    ]);
    entry('constraint',[
      ['limit','限制；约束因素','n.',['约束'],'limiting-factor','Limited storage space is a major constraint on the project.','储存空间有限是这个项目的一项主要制约因素。'],
      ['compulsion','强迫；对行动自由的约束','n.',['强制'],'compelled-restraint','Participation must be voluntary and free from constraint.','参与必须自愿，不受强迫。']
    ]);
    entry('mandate',[
      ['authority','选民等授予的治理或行动授权','n.',['授权'],'authority-to-act','The election gave the council a mandate to improve public transport.','选举赋予议会改善公共交通的授权。'],
      ['order','正式命令或要求；依法要求','n./v.',['命令','指令','要求'],'official-requirement','The regulation mandates regular inspections of passenger lifts.','这项规定要求定期检查载客电梯。']
    ],[ref(['委任统治'],'scope-excluded','历史上的委任统治制度不作为本批常用授权或法定要求义项。',cam('mandate'))]);
    entry('prejudice',[
      ['bias','偏见；成见；使产生偏见','n./v.',['偏见','成见','使存偏见','使有成见'],'unfair-prejudgment','The workshop challenged prejudice against older job applicants.','研讨会质疑了对年长求职者的偏见。'],
      ['harm','损害某人的利益、权利或机会','v.',['侵害'],'harm-interests','Publishing the names could prejudice the witnesses\' safety.','公布姓名可能危及证人的安全。']
    ]);
    entry('justice',[
      ['fairness','公正；公平；合乎正义的对待','n.',['正义','公平','公正','正确'],'fair-treatment','Equal access to education is a question of social justice.','平等获得教育是一个社会公正问题。'],
      ['law','司法；法律的实施与审判','n.',['司法','审判'],'judicial-process','The report examines delays in the criminal justice system.','报告研究了刑事司法系统中的拖延问题。'],
      ['judge','法官；某些高级法院法官的称呼','n.',['法官'],'senior-judge','The justice explained the court\'s decision in a written opinion.','法官在书面意见中解释了法院的裁决。']
    ]);
    entry('mediate',[
      ['dispute','调停；斡旋；促成双方解决争议','v.',['斡旋','调停','调解'],'resolve-conflict','An independent adviser mediated between the landlord and the tenants.','一位独立顾问在房东与房客之间进行调解。','mediate between'],
      ['indirect','居间的；通过中介发生的（正式或专门）','adj.',['居间的','间接的'],'indirect-intermediary','The philosophy essay distinguishes mediate knowledge from direct experience.','这篇哲学论文区分了间接知识与直接经验。']
    ],[],{indirect:col('mediate')});
    entry('justify',[
      ['reason','证明合理或正当；为……辩护','v.',['替...辩护','证明','证明合法'],'give-valid-reasons','The expected benefits do not justify the extra cost.','预期收益不足以证明额外开支是合理的。'],
      ['text','使文字行两端对齐','v.',['段落重排','两端对齐'],'align-text-margins','The designer justified the text so both margins formed straight lines.','设计师把文字设为两端对齐，使两侧边缘都成直线。']
    ]);
    entry('jury',[
      ['court','陪审团；负责审理案件事实的人员','n.',['陪审团'],'legal-jury','The jury listened to the evidence before reaching a verdict.','陪审团听取证据后才作出裁决。'],
      ['competition','比赛或奖项的评审团','n.',['评判委员会'],'competition-judges','An international jury selected the winning documentary.','一个国际评审团选出了获奖纪录片。']
    ],[ref(['应急的'],'context-required','临时应急的意义常见于 jury-rigged 等特定表达，不把普通 jury 单独当成应急形容词。',cam('jury'))]);
    entry('restrain',[
      ['physical','制住；用身体或装置限制行动','v.',['阻止','束缚','制止'],'physical-restraint','The safety harness restrains the passenger during sudden movement.','突然移动时，安全带会限制乘客身体的移动。'],
      ['control','抑制；遏制；控制感情或增长','v.',['抑制','遏制'],'limit-hold-back','Higher borrowing costs may restrain consumer spending.','更高的借贷成本可能抑制消费支出。']
    ]);
    entry('privilege',[
      ['advantage','特权；只有部分人享有的优势或权利','n.',['特权','特别恩典'],'special-advantage','Access to safe drinking water should not be a privilege of wealthy communities.','获得安全饮用水不应是富裕社区的特权。'],
      ['honour','荣幸；难得的机会','n.',['荣幸'],'honoured-opportunity','It was a privilege to interview the pioneering scientist.','能采访这位先驱科学家是一种荣幸。'],
      ['exemption','法律上的特免权或保密权','n.',['特免'],'legal-special-right','The lawyer explained why the correspondence was protected by legal privilege.','律师解释了为什么这封通信受到法律保密特权的保护。'],
      ['favour','给予特权；优先看待或对待','v.',['给与...特权'],'give-preferential-treatment','The selection process should not privilege applicants from famous schools.','选拔过程不应优待名校申请者。']
    ],[ref(['基本权利'],'context-required','privilege 与普遍享有的基本权利不能任意互换；本批把特权与公平可及的权利区分。',cam('privilege'))]);
    entry('defence',[
      ['protection','防御；保护措施或屏障','n.',['防卫','防卫设备'],'protect-against-attack','The sea wall is the town\'s main defence against flooding.','海堤是这座城镇抵御洪水的主要屏障。'],
      ['military','国防；军队及相关事务','n.',['国防'],'national-military-protection','Parliament debated the proposed increase in defence spending.','议会辩论了拟议的国防开支增长。'],
      ['argument','为某人或某事作出的辩护','n.',['辩护'],'supportive-argument','Her article offers a defence of public investment in the arts.','她的文章为公共资金投入艺术事业作了辩护。'],
      ['court','诉讼中的辩护；辩方','n.',['(诉讼程序中的)辩护'],'legal-defence','The defence questioned the reliability of the witness.','辩方质疑了这名证人的可靠性。'],
      ['sport','体育比赛中的防守；防守队员','n.',['防守'],'sports-defending','The team\'s defence prevented several late attacks.','球队的防守阻止了比赛末段的几次进攻。']
    ]);
    entry('conspiracy',[
      ['plot','阴谋；共同策划违法或有害行为','n.',['同谋','阴谋','阴谋集团','通谋','共谋'],'secret-harmful-plan','Investigators uncovered a conspiracy to manipulate the bidding process.','调查人员揭露了一起操纵招标程序的阴谋。']
    ]);
    entry('deter',[
      ['discourage','威慑；使因后果或困难而不敢做','v.',['制止','吓住','威慑'],'discourage-by-consequences','The high admission fee may deter families from visiting the museum.','高昂的门票可能让家庭不愿前往博物馆。','deter someone from doing something']
    ]);
    entry('rebellion',[
      ['uprising','针对政府或权威的叛乱；起义','n.',['谋反','叛乱','造反'],'organized-uprising','The rebellion spread when soldiers refused to follow orders.','士兵拒绝服从命令后，叛乱扩大了。'],
      ['resistance','对规则、要求或权威的反抗','n.',['反抗','反叛'],'resistance-to-authority','The new uniform rules provoked a small rebellion among the pupils.','新的校服规定引起了学生们的一阵反抗。']
    ]);
    entry('refute',[
      ['disprove','驳斥；以证据证明观点不成立','v.',['反驳','驳斥','驳倒'],'disprove-claim','The new measurements refute the claim that the lake is shrinking.','新测量数据驳斥了该湖正在缩小的说法。']
    ]);
    entry('catastrophe',[
      ['disaster','大灾难；造成严重破坏的事件或局面','n.',['大灾难','大祸'],'major-disaster','The early warning system helped prevent a humanitarian catastrophe.','预警系统帮助避免了一场人道主义灾难。']
    ],[ref(['突变'],'scope-excluded','数学突变理论等专业义不等于任意突然变化，不纳入本批常用灾难义。',cam('catastrophe'))]);
    entry('compromise',[
      ['agreement','妥协；折中方案；通过让步达成一致','n./v.',['妥协','折中','折中方案','和解','妥协处理'],'agreement-by-concession','Both sides accepted a compromise on working hours.','双方就工作时间接受了一个折中方案。'],
      ['standards','降低原则或标准；作出有损原则的让步','v.',['降低标准'],'weaken-principles','The laboratory would not compromise its safety standards to save money.','实验室不会为了省钱而降低安全标准。'],
      ['endanger','危及；损害安全、声誉或有效性','v.',['危害'],'put-at-risk','Sharing the password could compromise the security of the whole system.','共享密码可能危及整个系统的安全。']
    ]);
    entry('retreat',[
      ['withdraw','撤退；后退；从某种立场退让','n./v.',['撤退','退避','隐退'],'withdraw-from-position','The walkers retreated when falling rocks blocked the path.','落石堵住小路后，徒步者退了回去。'],
      ['quiet-place','安静的隐居处；休养地','n.',['休息寓所','隐居'],'secluded-resting-place','The cabin became a quiet retreat for writers.','这间小屋成了作家们安静的隐居处。'],
      ['reflection','暂离日常生活的静修或集中研讨活动','n.',['静修活动'],'organized-reflection-break','The team held a weekend retreat to discuss long-term goals.','团队举行了周末集中研讨活动，讨论长期目标。'],
      ['decline','价格或数值回落','v.',['回落'],'price-decline','Share prices retreated after the earnings announcement.','盈利公告发布后，股价回落了。']
    ],[ref(['退(棋)'],'context-required','棋局中退回位置是后退的具体用法，不概括为任意棋步；本批不另出棋术题。',cam('retreat'))]);
    entry('withstand',[
      ['resist','承受；经受住；抵挡而不受破坏','v.',['抵住','顶住','经得起'],'endure-without-failing','The shelter was designed to withstand strong coastal winds.','这个避难所的设计能够抵御强劲的沿海风。']
    ]);
    entry('camouflage',[
      ['visual','利用环境色形进行伪装；保护色或伪装物','n./v.',['伪装','伪装物'],'blend-with-surroundings','The insect\'s green wings provide camouflage among the leaves.','昆虫的绿色翅膀使它能伪装在树叶之间。'],
      ['hide-truth','掩饰；掩盖真实情况的幌子','n./v.',['掩饰','幌子'],'hide-underlying-truth','The cheerful announcement camouflaged a serious shortage of funds.','这则乐观的公告掩盖了资金严重短缺的事实。']
    ]);
    entry('supervisor',[
      ['manager','监督者；负责指导工作或研究的人','n.',['管理者','监督者','指导者','视导员'],'overseeing-person','Her research supervisor helped her refine the survey questions.','她的研究导师帮助她改进了调查问题。']
    ],[ref(['管理程序'],'scope-excluded','计算机操作系统的监督程序是专业旧义，本批只训练人的职务。',cam('supervisor'))]);
    entry('juvenile',[
      ['young','未成年的；幼小的；未成年个体','adj./n.',['少年','少年的'],'not-yet-adult','The reserve monitors juvenile turtles before they reach the sea.','保护区监测尚未到达海中的幼龟。'],
      ['immature','幼稚的；行为不成熟的','adj.',['不成熟的'],'childishly-immature','The chair asked members to stop making juvenile jokes during the hearing.','主持人要求成员们在听证会上停止开幼稚的玩笑。']
    ],[ref(['少年读物','适于少年的'],'scope-excluded','面向青少年的出版分类用法不作为本批独立考点。',cam('juvenile'))]);
    entry('adolescence',[
      ['development','青春期；从儿童向成人过渡的时期','n.',['青春期','青年期'],'transition-to-adulthood','Sleep patterns often change during adolescence.','睡眠模式在青春期往往会发生变化。']
    ]);
    entry('tenant',[
      ['renter','租户；承租土地或房屋的人或组织','n.',['承租人','房客'],'property-renter','The tenant reported the broken heater to the landlord.','租户向房东报告了暖气损坏的情况。']
    ],[ref(['居住者','租借','占据者'],'context-required','本批强调租赁关系；不是所有居住者都是 tenant，旧动词租借不作为常用独立考点。',cam('tenant'))]);
    entry('dependent',[
      ['reliant','依靠他人或其他事物的；依赖的','adj.',['依赖的','从属的'],'reliant-on-support','The village is dependent on a single road for essential supplies.','村庄依靠唯一的一条道路获得必需物资。','dependent on'],
      ['conditional','取决于某种条件的','adj.',['取决于'],'conditional-on','The opening date is dependent on the final safety inspection.','开放日期取决于最后的安全检查。','dependent on'],
      ['person','受抚养者；依靠他人供养的人','n.',['依赖他人者'],'financially-supported-person','The application asks how many dependents live in the household.','申请表询问家庭中有多少受抚养者。']
    ]);
    entry('consultant',[
      ['adviser','顾问；提供专业建议的人','n.',['顾问'],'professional-adviser','The consultant recommended a simpler system for tracking orders.','顾问建议采用更简单的订单跟踪系统。'],
      ['doctor','高级专科医师（英式）','n.',['顾问医师'],'senior-specialist-doctor','A consultant reviewed the patient\'s test results with the junior doctors.','一位高级专科医师与初级医生一起复核了患者的检查结果。']
    ],[ref(['征询意见者'],'unsupported-as-standalone','现代常用 consultant 是提供专业意见的人，不是一般向别人征求意见的人。',cam('consultant'))]);
    entry('adopt',[
      ['family','依法收养孩子；领养动物','v.',['收养'],'take-into-family','The family adopted a dog from the local rescue centre.','这家人从当地救助中心领养了一只狗。'],
      ['use','采用方法或做法；采纳态度；正式通过','v.',['采用','正式通过','接受','采取'],'accept-and-use','The council adopted a new plan for reducing road traffic.','议会正式通过了一项减少道路交通的新方案。']
    ]);
    entry('nourish',[
      ['food','滋养；提供维持生长与健康的营养','v.',['滋养','使健壮'],'provide-nourishment','The rich soil nourishes the young trees during their first year.','肥沃的土壤在幼树生长的第一年为它们提供养分。'],
      ['develop','培养；助长；怀有并维持想法或感情','v.',['怀有'],'sustain-idea-feeling','Regular discussions nourished her interest in environmental history.','经常讨论培养了她对环境史的兴趣。']
    ]);
    entry('encounter',[
      ['meet','偶然遇见；相遇；一次会面','n./v.',['相会','相遇','遭遇','遇见','邂逅','偶然相遇'],'chance-meeting','I encountered a former classmate while waiting for the train.','等火车时，我偶然遇到了一位老同学。'],
      ['difficulty','遭遇困难、问题或阻力','v.',['遇到困难'],'experience-difficulty','The drilling team encountered hard rock below the clay.','钻探队在黏土下遇到了坚硬岩层。'],
      ['contest','比赛中的交锋；一次对抗','n.',['会战'],'competitive-meeting','Their first encounter in the tournament ended in a draw.','他们在锦标赛中的首次交锋以平局结束。']
    ]);
    entry('companion',[
      ['person','同伴；经常陪伴或一起旅行的人','n.',['朋友','陪伴'],'accompanying-person','Her travelling companion kept a detailed record of their journey.','她的旅伴详细记录了这次旅程。'],
      ['guide','介绍某主题的指南或参考书','n.',['指南'],'subject-reference-book','The illustrated companion explains the history of each building.','这本图解指南说明了每幢建筑的历史。']
    ],[ref(['升降口围罩'],'scope-excluded','船舶结构的专业旧义不纳入现代同伴和指南的学习范围。',cam('companion'))]);
    entry('assert',[
      ['claim','坚称；断言；明确主张','v.',['主张','坚称','断言','宣称'],'state-firmly','The company asserted that its packaging was fully recyclable.','公司坚称其包装可以完全回收利用。'],
      ['rights','维护或行使权利、权威','v.',['维护'],'exercise-rights-authority','Residents began to assert their right to clean drinking water.','居民开始维护自己获得清洁饮用水的权利。'],
      ['self','自信地表达立场；表现出主见','v.',['表现主见'],'confident-self-expression','The workshop helped quiet students assert themselves in group discussions.','研讨活动帮助不爱说话的学生在小组讨论中自信地表达自己。','assert oneself']
    ]);
    entry('integration',[
      ['combine','整合；将部分有效结合为整体','n.',['综合','集成','整合'],'effective-combination','The integration of bus and rail tickets simplified commuting.','公交与铁路票务整合简化了通勤。'],
      ['social','融入；不同社会群体的融合','n.',['与环境协调的行为'],'social-inclusion','Language classes can support the integration of new residents.','语言课程可以帮助新居民融入社会。'],
      ['maths','数学中的积分运算','n.',['积分'],'mathematical-integration','The students used integration to calculate the area under the curve.','学生们用积分计算曲线下方的面积。']
    ]);
    entry('deviate',[
      ['direction','偏离路线或方向','v.',['偏离'],'depart-from-route','The driver deviated from the planned route to avoid a closed bridge.','驾驶员为避开一座封闭的桥偏离了原定路线。','deviate from'],
      ['norm','偏离规范、计划或通常做法','v.',['脱离','脱离常规的'],'depart-from-norm','The experiment must not deviate from the agreed procedure.','实验不得偏离商定的程序。','deviate from']
    ],[ref(['使偏离','脱离常规的人'],'scope-excluded','本批训练常见不及物动词；较少见使动用法及带贬义的旧名词标签不作考点。',cam('deviate'))]);
    entry('intervene',[
      ['involve','介入；干预或调停以改变局面','v.',['调停','干涉','进场干预'],'intentional-intervention','The mediator intervened before the disagreement became a formal dispute.','调解人在分歧演变成正式争端前介入了。'],
      ['between','发生在期间；介于两事之间并造成阻隔','v.',['插入'],'event-between','Several urgent tasks intervened before she could finish the report.','她完成报告之前，又插进来了几项紧急任务。']
    ]);
    entry('impair',[
      ['damage','损害；削弱功能、能力或效果','v.',['损害','减少','削弱','伤害'],'reduce-effectiveness','Poor lighting can impair a driver\'s ability to judge distance.','照明不足会削弱驾驶员判断距离的能力。']
    ]);
    entry('conceal',[
      ['sight','隐藏；遮住使看不见','v.',['隐藏','掩盖','隐匿'],'hide-from-view','A row of trees conceals the storage buildings from the road.','一排树木挡住了仓储建筑，从路上看不到它们。'],
      ['knowledge','隐瞒信息或感情；保守秘密','v.',['隐瞒','保守秘密'],'hide-information','The report did not conceal the limitations of the survey.','报告没有隐瞒这项调查的局限。']
    ],[],{sight:col('conceal'),knowledge:col('conceal')});
    entry('undertake',[
      ['task','承担；着手进行困难或重要任务','v.',['试图','从事','承担','接受','承包'],'take-on-task','The institute will undertake a five-year study of coastal erosion.','研究所将开展一项为期五年的海岸侵蚀研究。'],
      ['promise','承诺；保证将做某事','v.',['保证','同意'],'promise-to-do','The supplier undertook to replace any faulty equipment.','供应商承诺更换任何有故障的设备。','undertake to do']
    ]);
    entry('aspire',[
      ['ambition','渴望取得成就；立志达到','v.',['渴望','立志于'],'ambitious-goal','She aspires to lead a research team studying renewable energy.','她立志领导一支研究可再生能源的团队。','aspire to do / aspire to something']
    ]);
    entry('fulfil',[
      ['duty','履行责任或承诺；完成任务','v.',['实践','履行','实行','完成','结束','履行(契约)'],'carry-out-obligation','The contractor fulfilled every obligation in the agreement.','承包商履行了协议中的每项义务。'],
      ['needs','满足要求、需要或愿望','v.',['满足'],'meet-requirements','The new library fulfils a need for quiet study space.','新图书馆满足了人们对安静学习空间的需求。'],
      ['purpose','起到预定作用；实现潜能或目标','v.',['实现'],'achieve-purpose-potential','The mentoring programme helps young researchers fulfil their potential.','导师项目帮助年轻研究人员发挥潜能。'],
      ['satisfaction','使感到满足；使获得成就感','v.',['使满足'],'personal-fulfilment','Creative work fulfils her in a way that routine office tasks do not.','创造性工作给她带来的满足感是日常办公室事务无法提供的。']
    ],[ref(['满期'],'context-required','履行期限要求需要完整宾语和合同语境；fulfil 不单独等于时间到期。',cam('fulfil'))]);
    entry('distinguish',[
      ['difference','区分；辨别两者之间的差异','v.',['区别','辨别'],'recognize-difference','The test distinguishes temporary stress from a longer-term problem.','这项测试区分短暂压力与长期问题。','distinguish A from B / distinguish between'],
      ['feature','使具有区别于别人的特征','v.',['使有特色'],'set-apart-by-feature','The library\'s flexible opening hours distinguish it from similar institutions.','这家图书馆灵活的开放时间使它区别于类似机构。'],
      ['perceive','看清；听清；辨认出来','v.',['辨认'],'perceive-clearly','Through the fog, we could barely distinguish the outline of the tower.','透过雾气，我们几乎辨认不出塔的轮廓。'],
      ['excel','表现突出；使自己出众','v.',['表现出众'],'excel-and-earn-respect','She distinguished herself by solving a problem that had delayed the project.','她解决了一个拖延项目的问题，表现十分出色。','distinguish oneself']
    ]);
    entry('wellbeing',[
      ['welfare','身心健康与幸福；安康','n.',['健康','幸福','福利','舒适','安宁'],'health-and-happiness','Regular social contact contributes to the wellbeing of older residents.','经常与人交往有助于年长居民的身心健康。']
    ],[],{welfare:cam('well-being')});
    entry('stimulus',[
      ['encouragement','促进发展的因素；激励或刺激措施','n.',['激励','刺激品'],'encourage-activity','The new railway provided a stimulus to regional trade.','新铁路促进了地区贸易的发展。'],
      ['reaction','引起身体或感官反应的刺激','n.',['刺激'],'physiological-stimulus','The experiment measured how quickly participants responded to a visual stimulus.','实验测量了参与者对视觉刺激作出反应的速度。']
    ],[ref(['刺激特'],'unsupported-as-standalone','旧译中不成词的残片，不作为独立中文义项。',cam('stimulus'))]);
    entry('chronic',[
      ['illness','长期存在或反复发作的；慢性的','adj.',['慢性的'],'long-lasting-illness','The study examines how chronic pain affects daily activities.','研究考察了慢性疼痛如何影响日常活动。'],
      ['habit','积习难改的；反复出现且严重的','adj.',['习惯性的'],'persistent-habit-problem','Chronic staff shortages have delayed the opening of the centre.','长期人员短缺推迟了中心的开放。']
    ],[ref(['慢性病患者'],'scope-excluded','旧名词用法不纳入常用训练；描述患者通常用有明确中心名词的短语。','https://www.collinsdictionary.com/us/dictionary/english/chronic')],{illness:'https://www.collinsdictionary.com/us/dictionary/english/chronic',habit:'https://www.collinsdictionary.com/us/dictionary/english/chronic'});
    entry('trauma',[
      ['emotional','创伤性经历；严重的心理创伤','n.',['创伤'],'psychological-trauma','Counsellors helped the survivors deal with the trauma of losing their homes.','咨询人员帮助幸存者应对失去家园带来的心理创伤。'],
      ['injury','身体外伤；严重的组织损伤','n.',['外伤','损伤'],'physical-trauma','The hospital has a specialist unit for patients with major trauma.','医院有专门收治严重外伤患者的病区。']
    ]);
    entry('lethal',[
      ['deadly','致命的；足以造成死亡或严重伤害的','adj.',['致命的'],'causing-death','The investigators measured potentially lethal concentrations of gas.','调查人员测量了可能致命的气体浓度。']
    ],[ref(['致死因子'],'scope-excluded','遗传学名词等技术旧义不纳入本批常见形容词训练。',cam('lethal'))]);
    entry('prescription',[
      ['medicine','处方；按处方配给的药物','n.',['处方','药方'],'medical-prescription','The pharmacist checked the prescription before preparing the medicine.','药剂师在配药前检查了处方。'],
      ['vision','眼镜或隐形眼镜的矫正度数处方','n./modifier',['验光处方'],'optical-prescription','Her prescription changed, so she needed new lenses.','她的验光度数变了，因此需要更换镜片。'],
      ['proposal','为解决问题而提出的方案或规定','n.',['命令','指定'],'prescribed-solution','The report offers no simple prescription for reducing urban inequality.','报告没有提出减少城市不平等的简单解决方案。']
    ]);
    entry('precaution',[
      ['prevention','预防措施；为避免危险而预先采取的行动','n.',['预防','留心','警戒','预先警告'],'preventive-measure','They stored copies of the records elsewhere as a precaution against fire.','他们在别处保存了记录的副本，作为防火措施。','take precautions / as a precaution']
    ]);
    entry('remedy',[
      ['treatment','药物；缓解或治疗疾病的方法','n.',['药物','治疗法','治疗'],'treatment-for-illness','The exhibition compares traditional remedies used in different regions.','展览比较了不同地区使用的传统疗法。'],
      ['solution','补救办法；纠正问题或缺陷','n./v.',['补救','矫正','改善','修补','修缮'],'correct-problem','The council took steps to remedy the shortage of street lighting.','议会采取措施纠正路灯不足的问题。'],
      ['legal','法律上的救济；法院提供的纠正或赔偿办法','n.',['赔偿'],'legal-redress','The adviser explained what legal remedies were available under the contract.','顾问解释了依照合同可以获得哪些法律救济。']
    ]);
    entry('enthusiasm',[
      ['eagerness','热情；热心参与的强烈兴趣','n.',['巨大的热情','热心'],'eager-interest','Her enthusiasm encouraged more volunteers to join the project.','她的热情鼓励了更多志愿者加入项目。'],
      ['interest','特别喜爱的活动或事物','n.',['爱好'],'particular-interest','Birdwatching is one of his more recent enthusiasms.','观鸟是他近来特别喜爱的活动之一。']
    ]);
    entry('rigorous',[
      ['careful','严密的；仔细而彻底的','adj.',['严密的','精确的'],'thorough-careful','The researchers used rigorous checks to identify errors in the data.','研究人员通过严密检查来发现数据中的错误。'],
      ['strict','严格的；严厉的；要求很高的','adj.',['严厉的','严酷的','严格的','苛刻的'],'strict-demanding','Applicants must complete a rigorous selection process.','申请者必须完成严格的选拔程序。']
    ]);
    // Explicit boundaries, rather than forcing broad legacy labels into a sense.
    for(const [word,terms,reason]of [
      ['crude',['未成熟的'],'粗略、未加工不等于任意生物尚未成熟，不能与 unripe 无条件互换。'],
      ['neutral',['无色的'],'中性色不等于透明或没有颜色，不把 colorless 当作中性色的同义项。'],
      ['retreat',['向后倾'],'后撤动作不等于任何向后倾斜的姿态，旧译不脱离语境认证。'],
      ['mediate',['处于中间'],'较少见的位置义保留追溯，本批不作为一般处在中央的表达训练。']
    ])registered[word].referenceOnly.push(ref(terms,'context-required',reason,cam(word)));
    // Supporting pages actually consulted for uses absent from the main learner entry.
    for(const [word,ids,source]of [
      ['ancestor',['precursor'],col('ancestor')],
      ['certificate',['certify'],'https://www.collinsdictionary.com/us/dictionary/english/certificate'],
      ['questionnaire',['form'],'https://www.collinsdictionary.com/us/dictionary/english/questionnaire'],
      ['extravagant',['spending','excessive'],col('extravagant')],
      ['shabby',['worn','unfair'],col('shabby')],
      ['sober',['plain'],col('sober')],
      ['reside',['lie-in'],col('reside')],
      ['transaction',['computing'],col('transaction')],
      ['justify',['text'],col('justify')]
    ])for(const id of ids)registered[word].senses.find(s=>s.id===id).source=source;
  }
  if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch04=register;
})(typeof window==='object'?window:globalThis);
