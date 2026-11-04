/* Public editorial content only. No learner progress or private selection metadata.
 * Dictionary meanings are paraphrased; every bilingual example is WordOrbit-original.
 * Register before sense-catalog.js in a browser; CommonJS loads this explicitly.
 */
(function(scope){
  'use strict';
  function register(add){
    const cam=w=>'https://dictionary.cambridge.org/dictionary/english/'+w;
    const col=w=>'https://www.collinsdictionary.com/dictionary/english/'+w;
    const ref=(terms,decision,reason,source)=>({terms,decision,reason,source});
    function entry(word,rows,references=[],overrides={}){
      const e=add(word,rows,references);
      for(const [id,source]of Object.entries(overrides))e.senses.find(s=>s.id===id).source=source;
      return e;
    }
    entry('predator',[
      ['animal','捕食其他动物的动物；捕食者','n.',['食肉动物','捕食者'],['hunting-animal'],'The owl is a predator that hunts mainly at night.','猫头鹰是一种主要在夜间捕猎的捕食者。'],
      ['exploiter','掠夺者；利用他人牟利或施害的人','n.',['掠夺者'],['exploitative-person'],'The investigation exposed a financial predator who targeted elderly savers.','调查揭露了一名专门对老年储户下手的金融掠夺者。']
    ]);
    entry('conservation',[
      ['protection','自然或文化遗产的保护；保育','n.',['保护','保育'],['heritage-nature-protection'],'The charity funds the conservation of historic bridges.','这家慈善机构资助历史桥梁的保护工作。'],
      ['saving','自然资源的节约；保存','n.',['保存','节约'],['resource-conservation'],'Water conservation becomes essential during a long drought.','在长期干旱期间，节约用水变得至关重要。'],
      ['physics','守恒（物理量总量不变）','n.',['守恒'],['physical-conservation'],'The calculation assumes conservation of energy throughout the experiment.','这项计算假定整个实验过程遵循能量守恒。']
    ]);
    entry('migrate',[
      ['seasonal','动物迁徙；季节性移栖','v.',['随季节而移居','迁徙'],['animal-migration'],'These birds migrate to warmer coastal areas each autumn.','这些鸟每年秋天都会迁徙到较温暖的沿海地区。'],
      ['people','迁居；迁往别处生活或工作','v.',['移往','迁居'],['human-migration'],'Workers often migrate to nearby towns when seasonal farm work ends.','季节性农活结束后，工人们常迁往附近的城镇。'],
      ['transfer','逐渐转移到别处','v.',['移动','转移'],['gradual-transfer'],'As shopping habits change, trade may migrate away from the town centre.','随着购物习惯改变，商业活动可能逐渐从镇中心转移出去。'],
      ['computing','迁移数据、软件或计算机系统','v.',['迁移程序','迁移数据'],['computing-migration'],'The team will migrate the database to a new server overnight.','团队将在夜间把数据库迁移到新服务器上。']
    ]);
    entry('pollen',[
      ['powder','花粉','n.',['花粉'],['flower-pollen'],'Wind carries pollen from the flowers to neighbouring plants.','风把花粉从花朵带到附近的植物上。']
    ],[ref(['传授花粉给'],'restricted-verified','Collins 收有授粉的旧及物用法；现代一般用 pollinate，本批不将二者词形混用。',col('pollen'))]);
    entry('scent',[
      ['smell','气味；香味','n.',['气味','香味'],['perceived-smell'],'The scent of orange blossom drifted through the open window.','橙花的香味飘过敞开的窗户。'],
      ['perfume','香水（尤英式）','n.',['香水'],['perfume-liquid'],'She bought a small bottle of scent as a birthday gift.','她买了一小瓶香水作为生日礼物。'],
      ['trail','可追踪的气味；踪迹；线索','n.',['踪迹','痕迹','线索'],['detectable-trail'],'Rain washed away the scent that the search dog had been following.','雨冲掉了搜救犬一直追踪的气味。'],
      ['ability','嗅觉；发现线索的敏锐能力','n.',['嗅觉'],['smell-detection-ability'],'The hound has a keen scent and can locate animals hidden in thick grass.','这只猎犬嗅觉敏锐，能找到藏在密草中的动物。'],
      ['detect','嗅到；察觉；预感','v.',['闻出','嗅','发觉','嗅猎'],['detect-by-smell-or-intuition'],'The dog scented food inside the closed bag.','狗嗅到了封闭袋子里的食物。'],
      ['perfume-verb','使充满香气；散发气味','v.',['使充满气味','发出气味'],['perfume-an-area'],'Fresh lavender scented the entrance hall.','新鲜的薰衣草让门厅充满香气。']
    ],[],{ability:col('scent'),'perfume-verb':col('scent')});
    entry('astronaut',[
      ['traveller','宇航员；接受航天训练的人','n.',['太空旅行者','宇航员','美国太空人'],['space-traveller'],'The astronaut practised repairing equipment while wearing thick gloves.','这位宇航员戴着厚手套练习维修设备。']
    ]);
    entry('galaxy',[
      ['stars','星系；银河系','n.',['银河','星系','银河系'],['stellar-system'],'The telescope detected a faint galaxy beyond the nearby cluster.','望远镜探测到了附近星系团之外的一个暗淡星系。'],
      ['celebrities','一群显赫或杰出的人物','n.',['一群(显赫的人物)'],['distinguished-gathering'],'The festival brought together a galaxy of celebrated musicians.','这个艺术节汇集了一批著名音乐家。','a galaxy of']
    ]);
    entry('exploration',[
      ['travel','探险；对未知地区的考察','n.',['探险','踏勘'],['exploratory-travel'],'Underwater exploration revealed a previously unknown cave entrance.','水下探险发现了一个先前未知的洞穴入口。'],
      ['resources','勘探；寻找自然资源','n.',['探测','勘探'],['resource-prospecting'],'Mineral exploration was restricted near the protected wetlands.','受保护湿地附近的矿产勘探受到限制。'],
      ['examination','深入探讨；研究可能性','n.',['探察','深入探讨'],['detailed-examination'],'The essay offers an exploration of how memory shapes identity.','这篇文章深入探讨了记忆如何塑造身份认同。']
    ]);
    entry('spacecraft',[
      ['vehicle','航天器；宇宙飞船','n.',['航天飞船','航天器'],['space-vehicle'],'The unmanned spacecraft returned images of the distant moon.','这艘无人航天器传回了那颗遥远卫星的图像。']
    ]);
    entry('dimension',[
      ['measurement','尺寸；长宽高等方向的量度','n.',['尺寸'],['physical-size-measurement'],'The architect checked the dimensions of every doorway.','建筑师核查了每个门口的尺寸。'],
      ['aspect','方面；观察事物的角度','n.',['方面','角度'],['aspect-of-situation'],'The interview added a personal dimension to the historical account.','这次访谈给那段历史叙述增添了个人视角。'],
      ['extent','规模；程度','n.',['规模','程度'],['scale-extent'],'The survey revealed the full dimensions of the housing shortage.','调查揭示了住房短缺问题的全部规模。'],
      ['mathematics','维；维数；空间维度','n.',['次元','维数','空间维度'],['spatial-dimension'],'A line has one dimension, whereas a plane has two.','直线是一维的，而平面是二维的。']
    ],[ref(['面积'],'context-required','尺寸可能用于描述面积，但 dimension 不能普遍替代 area；只按尺寸或规模语境理解。',col('dimension')),ref(['标出尺寸'],'restricted-verified','Collins 收有工程图上标注尺寸的动词义，本批不强制加入技术制图训练。',col('dimension'))],{extent:col('dimension'),mathematics:col('dimension')});
    entry('scholarship',[
      ['study','学问；严谨学术研究及其成果','n.',['学问','学术成就'],['scholarly-research'],'Her book combines careful scholarship with clear explanations.','她的著作把严谨的学术研究与清晰的讲解结合起来。'],
      ['award','奖学金','n.',['奖学金'],['education-funding-award'],'The scholarship covers tuition fees for the first year.','这笔奖学金支付第一年的学费。']
    ]);
    entry('composition',[
      ['writing','作文；写作','n.',['作文'],['student-writing'],'Each student wrote a short composition about a memorable journey.','每位学生都写了一篇关于难忘旅程的短文。'],
      ['music','作曲；创作的音乐作品','n.',['创作','作曲'],['musical-composition'],'The orchestra performed a new composition by a local composer.','乐团演奏了一位当地作曲家创作的新作品。'],
      ['arrangement','画面构图；元素的布局','n.',['构图','布局'],['artistic-arrangement'],'The painting has a balanced composition with a bright figure at its centre.','这幅画构图均衡，中央有一个明亮的人物形象。'],
      ['makeup','组成；成分；构成比例','n.',['组成','成分'],['constituent-makeup'],'The study compared the chemical composition of three soil samples.','研究比较了三份土壤样品的化学成分。']
    ]);
    entry('fossil',[
      ['remains','化石；保存在岩层中的生物遗迹','n./modifier',['化石','化石的'],['preserved-organism-remains'],'The fossil preserved the outline of an ancient leaf.','这块化石保存了一片古代叶子的轮廓。'],
      ['old-person','思想陈旧、拒绝新观念的人（幽默或贬义）','n.',['古物','陈腐的','守旧的'],['outdated-person'],'He jokingly called himself an old fossil because he still wrote letters by hand.','他开玩笑地说自己是个老古董，因为他仍然手写书信。','an old fossil']
    ]);
    entry('specimen',[
      ['sample','标本；样品；典型实例','n./modifier',['样品','标本','试料','试样'],['representative-sample'],'The museum displayed a well-preserved specimen of the rare butterfly.','博物馆展出了一件保存完好的稀有蝴蝶标本。'],
      ['medical','供检验的血液、尿液等样本','n.',['检验样本'],['medical-test-sample'],'The clinic sent the blood specimen to the laboratory.','诊所把血液样本送到了实验室。']
    ]);
    entry('acquire',[
      ['obtain','获得；取得财产或物品','v.',['获得'],['obtain-possession'],'The museum hopes to acquire a collection of early maps.','博物馆希望购得一批早期地图。'],
      ['learn','学到；逐渐形成技能、习惯等','v.',['学到','习得'],['learn-or-develop'],'Children acquire new vocabulary through repeated meaningful use.','儿童通过反复进行有意义的使用来习得新词汇。'],
      ['business','收购企业；取得股份或权利','v.',['收购','取得权利'],['business-acquisition'],'The company plans to acquire a smaller software firm.','这家公司计划收购一家规模较小的软件企业。'],
      ['illness','后天感染；患上疾病','v.',['后天感染'],['contract-disease'],'Patients can acquire infections during a long hospital stay.','患者在长期住院期间可能感染疾病。']
    ],[ref(['目标锁定'],'scope-excluded','属于雷达或武器跟踪等专门搭配，本批只声明一般获得、习得、收购与后天感染的学习范围，不将孤立旧标签认证为常用义。',cam('acquire'))]);
    entry('secondary',[
      ['importance','次要的；从属或辅助的','adj.',['次要的','第二位的','辅助的'],['lower-importance'],'Cost was a secondary concern after safety had been assured.','确保安全之后，成本才是次要考虑。'],
      ['derived','由原有事物产生的；次生的；继发的','adj.',['派生的','次生的','继发的'],['derived-subsequent'],'The report distinguishes the main cause from its secondary effects.','报告区分了主要原因与由此产生的次生影响。'],
      ['school','中等教育的；中学的','adj.',['中学的'],['secondary-education'],'The programme supports science teaching in secondary schools.','该项目支持中学的科学教学。']
    ]);
    entry('innovation',[
      ['process','创新；引入新观念或方法','n.',['改革','创新','刷新'],['innovation-process'],'The grant encourages innovation in affordable housing design.','这项资助鼓励在可负担住房设计方面进行创新。'],
      ['result','新方法；创新成果','n.',['新方法','创新成果'],['new-method-product'],'The adjustable handle is a useful innovation for users with limited mobility.','可调节手柄是方便行动受限者的一项实用创新。']
    ]);
    entry('prototype',[
      ['model','原型；供后续开发的样机或最初模型','n.',['原型','样机'],['initial-development-model'],'Engineers tested the prototype before approving mass production.','工程师在批准量产前测试了样机。']
    ]);
    entry('breakthrough',[
      ['advance','突破；解决难题的重大进展或发现','n./modifier',['突破','新发现','新进展'],['major-advance'],'The team achieved a breakthrough in storing energy safely.','团队在安全储能方面取得了突破。']
    ]);
    entry('research',[
      ['study','研究；系统调查；进行研究','n./v.',['研究','调查','考察'],['scholarly-research'],'The students will research how noise affects concentration.','学生们将研究噪声如何影响注意力。']
    ]);
    entry('appliance',[
      ['device','器具；设备；家用电器','n.',['器械','用具','器'],['functional-device'],'The kitchen has several energy-efficient appliances.','厨房里有几台节能电器。'],
      ['application','知识或技能的运用（正式）','n.',['应用','运用'],['practical-application'],'The project demonstrates the practical appliance of scientific knowledge.','这个项目展示了科学知识的实际运用。']
    ],[ref(['矫正器'],'scope-excluded','牙科等医疗器具属于特定器械语境，本批不将未限定部位的旧译另立为医学考点。',col('appliance'))],{application:col('appliance')});
    entry('gauge',[
      ['instrument','测量仪表；计量器','n.',['计量器','测量仪表'],['measuring-instrument'],'The pressure gauge showed a steady increase inside the tank.','压力表显示罐内压力持续上升。'],
      ['measure','测量；估量数量或大小','v.',['精确计量','估量'],['measure-size-amount'],'Technicians used a sensor to gauge the depth of the water.','技术人员使用传感器测量水深。'],
      ['judge','判断；估计感受或反应','v.',['估计','判断'],['assess-reaction'],'The questionnaire helped gauge public support for the new service.','问卷有助于判断公众对新服务的支持程度。'],
      ['indicator','判断标准；衡量依据','n.',['标准度量','衡量依据'],['assessment-indicator'],'Repeat visits are one gauge of customer satisfaction.','重复来访是衡量顾客满意度的一项指标。'],
      ['engineering','轨距；线材厚度或直径的规格','n.',['线规','轨距'],['engineering-dimension'],'The two railway systems use a different gauge.','这两个铁路系统采用不同的轨距。']
    ]);
    entry('artifact',[
      ['object','人工制品；具有历史价值的器物','n.',['人工制品','人工产物'],['human-made-object'],'The excavation uncovered a metal artifact beneath the floor.','发掘在地板下发现了一件金属器物。'],
      ['error','实验或测量方法造成的人为现象；伪影','n.',['人为现象','伪影'],['measurement-artifact'],'The bright line in the scan was an artifact of the imaging process.','扫描图中的亮线是成像过程产生的伪影。']
    ]);
    entry('dynasty',[
      ['family-rule','王朝；世代掌权或居领导地位的家族','n.',['朝代','王朝'],['hereditary-ruling-family'],'The exhibition traces the pottery styles of several dynasties.','展览追溯了几个朝代的陶器风格。']
    ]);
    entry('ritual',[
      ['ceremony','仪式；礼仪；仪式性的','n./modifier',['仪式','典礼','宗教仪式','仪式的','依仪式进行的'],['formal-ceremony'],'The community holds a ritual to mark the beginning of the harvest.','这个社区举行仪式，庆祝收获季的开始。'],
      ['routine','固定不变的日常做法；惯例','n.',['固定做法','惯例'],['habitual-routine'],'Checking the weather became part of her morning ritual.','查看天气成了她每天早晨固定要做的事。']
    ]);
    entry('tradition',[
      ['custom','传统；长期沿袭的习俗或惯例','n.',['传统','惯例'],['established-custom'],'The village continues a tradition of repairing tools together each spring.','村庄延续着每年春天一起维修工具的传统。'],
      ['oral','世代流传的故事、信念或口述传统','n.',['传说','口述传统'],['handed-down-belief'],'According to local tradition, the old tower once guided sailors home.','按照当地流传的说法，那座古塔曾为返航的水手指路。']
    ],[ref(['交付','移交'],'restricted-verified','Collins 收有罗马法、苏格兰法中的动产所有权正式交付义；不是现代交付包裹的通用词，本批仅留扩展参考。',col('tradition'))],{oral:col('tradition')});
    entry('archaeology',[
      ['study','考古学；通过遗迹与器物研究过去','n.',['考古学'],['archaeological-study'],'Archaeology helped reveal how people stored food in the ancient settlement.','考古学帮助揭示了古代聚落居民储存食物的方式。']
    ]);
    entry('linguistic',[
      ['language','语言的；语言学的','adj.',['语言的','语言学的'],['language-related'],'The study compared linguistic patterns in two neighbouring regions.','研究比较了两个相邻地区的语言模式。']
    ]);
    entry('bilingual',[
      ['speaker','能熟练使用两种语言的','adj.',['双语的','熟练使用两种语言的'],['two-language-speaker'],'The bilingual guide answered questions in both English and Spanish.','这位双语导游用英语和西班牙语回答问题。'],
      ['material','使用两种语言编写、开展或交流的','adj.',['双语编写的','使用两种语言的'],['two-language-content'],'The museum provides bilingual labels for its main exhibits.','博物馆为主要展品提供双语标签。']
    ]);
    entry('idiom',[
      ['phrase','习语；不能仅按字面理解的固定表达','n.',['习语','成语'],['fixed-nonliteral-phrase'],'The teacher explained the idiom with a short story rather than a literal translation.','老师用一个短故事解释这个习语，而不是逐字翻译。'],
      ['language','某地区或群体特有的语言表达方式','n.',['惯用语法','方言'],['distinctive-language-style'],'The dialogue uses the local idiom to make the characters sound natural.','对话使用当地的表达方式，让人物说话显得自然。'],
      ['art','艺术、音乐或建筑的独特表现风格','n.',['艺术风格'],['artistic-expression-style'],'The composer blended a jazz idiom with traditional folk melodies.','这位作曲家把爵士风格与传统民歌曲调融合起来。']
    ]);
    entry('pronounce',[
      ['sound','发音；读出词或字母','v.',['发音'],['articulate-word'],'Could you pronounce the place name slowly for the visitors?','你能为访客慢慢读出这个地名吗？'],
      ['declare','正式宣布；明确断言','v.',['宣告','断言'],['formal-declaration'],'The inspectors pronounced the building safe after checking the repairs.','检查人员核查维修情况后宣布该建筑安全。']
    ]);
    entry('spectator',[
      ['observer','观众；不参与活动的旁观者','n.',['观众','目击者','旁观者'],['nonparticipating-observer'],'Every spectator received a map showing the race route.','每位观众都收到了一张标有比赛路线的地图。']
    ]);
    entry('tournament',[
      ['competition','锦标赛；多轮比赛组成的竞赛','n.',['比赛','竞赛','锦标赛'],['multi-match-competition'],'The chess tournament lasted three days and attracted players from six schools.','这场国际象棋锦标赛持续三天，吸引了六所学校的选手。']
    ],[ref(['联赛'],'context-required','tournament 指包含一系列比赛的竞赛，不能与任何 league 联赛无条件互换；具体赛制需看语境。',cam('tournament'))]);
    entry('leisure',[
      ['free-time','闲暇；不用工作或履行职责的时间','n./modifier',['空闲','闲暇','悠闲','空闲的','有闲的'],['free-time'],'The shorter working week gave staff more time for leisure.','较短的工作周让员工有更多闲暇时间。'],
      ['convenience','在方便时；从容地','phrase',['在方便时','从容地'],['unhurried-convenience'],'You can examine the exhibition catalogue at your leisure.','你可以在方便的时候从容查看展览目录。','at your leisure']
    ]);
    entry('rehearsal',[
      ['practice','排练；预演；正式行动前的练习','n.',['预演','排演','练习'],['performance-rehearsal'],'The actors held a final rehearsal before the theatre opened.','剧院开放前，演员们进行了最后一次排练。'],
      ['recounting','逐项复述；再次陈述（正式）','n.',['叙述','复述','详述','列举事实'],['recount-familiar-matters'],'The meeting ended with a rehearsal of complaints that everyone had heard before.','会议以再次陈述众人早已听过的抱怨而告终。']
    ],[],{recounting:col('rehearsal')});
    entry('rhythm',[
      ['sound','音乐、诗歌或舞蹈的节奏；韵律','n.',['节奏','韵律'],['sound-beat-pattern'],'The drummer changed the rhythm halfway through the song.','鼓手在歌曲进行到一半时改变了节奏。'],
      ['movement','动作的规律节奏','n.',['动作节奏'],['regular-movement-pattern'],'The rowers settled into a steady rhythm after the first minute.','一分钟后，划船运动员进入了稳定的划动节奏。'],
      ['cycle','自然或生物活动的周期；节律','n.',['张弛节律','节律'],['biological-natural-cycle'],"Night work can disrupt the body's usual rhythm of sleep and waking.",'夜间工作可能打乱身体通常的睡眠与觉醒节律。']
    ],[ref(['旋律','匀称'],'context-required','rhythm 核心是规律节拍或变化，不把它与 melody 的音高旋律或一般对称性互换；原标签只留作语境参考。',cam('rhythm'))]);
    entry('synthetic',[
      ['artificial','合成的；人造材料；合成物质','adj./n.',['合成物质','人造的','合成的'],['artificially-synthesized'],'The jacket uses synthetic fibres that dry quickly after rain.','这件夹克使用雨后能很快变干的合成纤维。'],
      ['insincere','虚假的；装出来的','adj.',['虚假的','装出来的'],['insincere-display'],'Her synthetic enthusiasm disappeared as soon as the camera was switched off.','摄像机关掉后，她装出来的热情立刻消失了。']
    ],[ref(['综合(性)的'],'restricted-verified','Collins 的语法综合语、逻辑综合命题等用法有特定学科条件，不等于任意全面或综合，本批作扩展参考。',col('synthetic'))],{insincere:col('synthetic')});
    entry('texture',[
      ['surface','表面质地；纹理；材料组织结构','n./v.',['(织物的)密度','(材料等的)结构','纹理','质地'],['surface-quality'],'The rough texture of the stone made it easy to grip.','石头粗糙的质地使它很容易握住。'],
      ['food','食物的口感；软硬粗细程度','n.',['口感'],['food-mouthfeel'],'Ground almonds gave the cake a firmer texture.','磨碎的杏仁让蛋糕的口感更加紧实。'],
      ['art','音乐或作品的层次；艺术肌理','n./v.',['作品层次','艺术肌理'],['artistic-layering'],'Overlapping voices created a rich texture in the final chorus.','相互叠合的人声让最后一段合唱呈现丰富的层次。'],
      ['graphics','三维模型表面贴图；添加贴图','n./v.',['贴图','添加贴图'],['computer-surface-texture'],'The designer added a wood texture to the virtual table.','设计师给虚拟桌子添加了木纹贴图。']
    ],[ref(['头发的层次'],'scope-excluded','所核页面另有发型层次义，本批以表面质地、食物、作品与三维贴图为明确学习范围。',cam('texture'))]);
    entry('fabric',[
      ['cloth','织物；布料','n.',['织物','布'],['woven-material'],'The curtains were made from a heavy fabric that blocked the light.','窗帘由能挡光的厚布料制成。'],
      ['structure','整体结构；社会或组织的基本构成','n.',['结构','构造','组织'],['underlying-structure'],'Local schools are an important part of the social fabric.','当地学校是社会结构的重要组成部分。']
    ],[ref(['建筑物'],'scope-excluded','建筑实体结构属于特定搭配，本批不把 fabric 直接当作 building 的通用同义词。',cam('fabric')),ref(['工厂'],'unsupported-as-standalone','所核现代英语学习条目不支持工厂作为本词的通用义，不能按其他语言相似词形推导。',cam('fabric'))]);
    entry('recycle',[
      ['material','回收加工；循环利用废弃材料','v.',['回收利用','再循环','使再循环'],['material-recycling'],'The factory will recycle discarded bottles into insulation.','工厂将把废弃瓶子回收加工成保温材料。'],
      ['reuse','重新使用；把旧内容或物品改作他用','v.',['再利用','重新使用'],['repurpose-reuse'],'The designer recycled old exhibition panels as shelves.','设计师把旧展板改作搁板重新使用。']
    ]);
    entry('cushion',[
      ['pad','软垫；靠垫；起支承作用的软层','n.',['垫子','橡皮软垫'],['soft-padding'],'A thick cushion made the wooden chair more comfortable.','一个厚软垫让木椅坐起来更舒适。'],
      ['protection','缓冲物；减轻不利影响；保护','n./v.',['缓冲','加垫褥'],['soften-impact','reduce-harm-severity'],'Emergency savings can cushion the effect of a temporary loss of income.','应急储蓄可以缓冲暂时失去收入带来的影响。'],
      ['billiards','台球桌边的弹性围边','n.',['台球弹性围边'],['billiard-table-edge'],'The ball struck the cushion and rolled towards the centre of the table.','球撞上弹性围边后滚向球桌中央。']
    ],[ref(['掩盖'],'context-required','减轻影响不等于隐瞒事实；旧译缺少限定，不作为一般 hide 的同义考点。',cam('cushion'))]);
    entry('outfit',[
      ['clothes','一套服装','n.',['一套服装'],['clothing-ensemble'],'She chose a waterproof outfit for the coastal walk.','她为海岸徒步选择了一套防水服装。'],
      ['equipment','一套专用装备或工具','n.',['用具','配备'],['equipment-set'],'The camping outfit included a tent, a stove and a sleeping bag.','这套露营装备包括帐篷、炉具和睡袋。'],
      ['organization','机构；公司；团队（非正式）','n.',['机构'],['organization-group'],'The small design outfit works mainly with local businesses.','这家小型设计公司主要与当地企业合作。'],
      ['equip','为某人或某物配备衣物、装备','v.',['供应','得到装备','配备装备'],['equip-with-supplies'],'The grant will outfit the laboratory with new microscopes.','这笔资助将为实验室配备新的显微镜。']
    ]);
    entry('accessory',[
      ['extra','附件；配件；服饰配饰','n.',['附件','零件','附加物'],['supplementary-object'],'A waterproof cover is a useful accessory for this camera.','防水罩是这台相机的一件实用配件。'],
      ['crime','从犯；协助犯罪的人','n.',['从犯','同谋'],['criminal-assistant'],'The driver was charged as an accessory to the robbery.','这名司机被指控为抢劫案的从犯。'],
      ['additional','附属的；补充的；辅助的','adj.',['附属的','补充的','非主要的','副的'],['additional-subordinate'],'The accessory equipment is stored separately from the main machine.','辅助设备与主机分开存放。']
    ],[ref(['同谋的','帮凶的'],'restricted-verified','Collins 形容词用法限协助某行为，尤其犯罪；本批法律理解纳入名词从犯，不另出重复的形容词题。',col('accessory'))],{additional:col('accessory')});
    entry('fragile',[
      ['breakable','易碎的；容易损坏的','adj.',['易碎的','脆的'],['easily-broken'],'The fragile glass bowl was wrapped in several layers of paper.','易碎的玻璃碗被包在几层纸里。'],
      ['vulnerable','脆弱的；难以承受压力或变化的','adj.',['脆弱的'],['vulnerable-condition'],'The peace agreement remained fragile after weeks of disagreement.','数周的分歧之后，这份和平协议依然脆弱。']
    ],[],{vulnerable:'https://dictionary.cambridge.org/dictionary/learner-english/fragile'});
    entry('costume',[
      ['traditional','某时期或民族的传统服装','n.',['装束','传统服装'],['historical-national-dress'],'The exhibition includes a traditional costume from each region.','展览收录了每个地区的一套传统服装。'],
      ['performance','戏服；化装服装','n.',['服装','戏服','化装服'],['performance-disguise-clothes'],'The actor repaired a torn costume before the evening performance.','演员在晚场演出前修补了一件撕破的戏服。']
    ]);
    entry('nutrition',[
      ['nourishment','营养；摄入和利用食物的过程','n.',['营养'],['nourishment-process'],"Good nutrition supports children's growth and ability to concentrate.",'良好的营养支持儿童的生长和专注能力。'],
      ['study','营养学','n.',['营养学'],['nutrition-science'],'She studies nutrition to understand how different diets affect health.','她学习营养学，以了解不同饮食如何影响健康。']
    ],[ref(['营养品'],'context-required','nutrition 可指摄入的营养及营养过程，不把任意营养补充剂或保健品直接命名为 nutrition。',cam('nutrition'))]);
    entry('obesity',[
      ['condition','肥胖；体脂过多的状态','n.',['肥胖','多脂'],['excess-body-fat'],'The survey examined the relationship between obesity and access to fresh food.','调查研究了肥胖与获取新鲜食物的便利程度之间的关系。']
    ]);
    entry('appetite',[
      ['food','食欲','n.',['食欲'],['desire-for-food'],'A long walk in the cold air gave the children a healthy appetite.','在冷空气中长时间散步后，孩子们食欲很好。'],
      ['desire','强烈欲望；对某事的兴趣或需求','n.',['欲望','爱好'],['strong-desire'],'There is a growing appetite for reliable information about climate change.','人们对可靠气候变化信息的需求日益增长。','appetite for']
    ]);
    entry('cuisine',[
      ['style','烹调风格；菜系；相应的菜肴','n.',['烹调风格','烹调法','烹饪'],['cooking-style'],'The restaurant combines coastal cuisine with locally grown vegetables.','这家餐厅把沿海菜系与当地种植的蔬菜结合起来。']
    ],[ref(['厨房'],'restricted-verified','Collins 明确标为古旧用法；现代厨房通常用 kitchen，不列为本批常用考点。',col('cuisine'))]);
    entry('digest',[
      ['food','消化食物','v.',['消化'],['digest-food'],'Some animals can digest plant material that humans cannot use.','有些动物能消化人类无法利用的植物材料。'],
      ['understand','理解并吸收信息','v.',['理解'],['absorb-information'],'The audience needed time to digest the unexpected findings.','听众需要时间理解并吸收这些出乎意料的发现。'],
      ['summary','文摘；摘要；简要汇编','n.',['文摘','摘要'],['written-summary'],'The newsletter contains a digest of recent transport research.','通讯包含近期交通研究的摘要。']
    ]);
    entry('architecture',[
      ['profession','建筑学；建筑设计活动','n.',['建筑学'],['building-design-discipline'],'She studied architecture before joining a team that designs public libraries.','她加入公共图书馆设计团队前学习了建筑学。'],
      ['style','建筑风格；建筑式样','n.',['建筑式样'],['building-style'],'The station combines modern architecture with traditional materials.','车站把现代建筑风格与传统材料结合起来。'],
      ['system','计算机系统或组织的体系结构','n.',['体系结构'],['system-organization'],'A simpler software architecture made the application easier to maintain.','更简单的软件体系结构让应用更易于维护。']
    ]);
    entry('skyscraper',[
      ['building','摩天大楼','n.',['摩天楼'],['very-tall-building'],'The new skyscraper casts a long shadow across the square.','新建的摩天大楼在广场上投下长长的影子。']
    ],[ref(['三角形天帆'],'scope-excluded','航海旧术语不属于本批现代城市建筑学习范围，保留旧标签但不将其认证为常用考点。',cam('skyscraper'))]);
    entry('venue',[
      ['event','活动、会议或演出的举办场所','n.',['发生地点','活动场所'],['event-location'],'The old warehouse became a popular venue for community concerts.','旧仓库成了深受欢迎的社区音乐会场所。'],
      ['court','审判地；法院审理案件所在地区','n.',['审判地'],['trial-location'],'The lawyers requested a change of venue before the trial began.','律师在审判开始前申请变更审判地。']
    ],[ref(['犯罪地点'],'context-required','法律上的 venue 涉及审理管辖地区，不把它直接等同于案发现场 crime scene。',cam('venue'))]);
    entry('renovate',[
      ['repair','翻修；修复并改善建筑或旧物','v.',['更新','革新','刷新','修复'],['repair-improve-old-structure'],'The council will renovate the old swimming pool instead of demolishing it.','地方政府将翻修旧游泳池，而不是将其拆除。']
    ],[ref(['使恢复活力'],'restricted-verified','Collins 收有使精神或健康恢复的用法；本批以建筑旧物修复为常用学习范围，恢复精神义留作扩展。',col('renovate'))]);
    entry('shelter',[
      ['place','避难所；收容所；遮蔽处','n.',['庇护所','避难所','隐蔽处'],['protective-place'],'The empty school served as a temporary shelter after the flood.','洪水过后，空置的学校成了临时避难所。'],
      ['protection','庇护；保护；躲避恶劣环境','n./v.',['庇护','掩蔽','保护','躲避'],['protection-from-danger'],'We sheltered under the bridge until the hail stopped.','我们在桥下躲避，直到冰雹停止。'],
      ['hide','窝藏；给某人秘密藏身处','v.',['隐匿','窝藏'],['hide-a-person'],'The story describes villagers who sheltered a fugitive in a remote barn.','故事描写了把一名逃亡者藏在偏远谷仓里的村民。'],
      ['tax','合法庇护收入以减少税负','v.',['合法避税'],['tax-shelter'],'The article explains how some investments can shelter income from tax.','文章解释了某些投资如何为收入提供合法税收庇护。']
    ]);
    entry('scenic',[
      ['landscape','风景优美的；能观赏自然美景的','adj.',['风景好的'],['beautiful-landscape'],'The scenic railway follows the river through a narrow valley.','这条风景优美的铁路沿河穿过狭窄的山谷。'],
      ['theatre','舞台布景的；与舞台景物有关的','adj.',['舞台的','布景的'],['stage-scenery-related'],'The scenic designer built a forest backdrop for the play.','舞台布景设计师为这部戏搭建了森林背景。']
    ],[ref(['戏剧性的'],'context-required','舞台布景相关不等于 exciting 或 dramatic 的一般戏剧性效果，需限制语境。',col('scenic')),ref(['风光影片','风景照片'],'scope-excluded','旧名词标签不在本批常用形容词范围，不从风景好的直接推导新的名词考点。',col('scenic'))],{theatre:col('scenic')});
    entry('luggage',[
      ['bags','行李；旅行携带的箱包（不可数）','n.',['行李','皮箱'],['travel-baggage'],'Passengers must collect their luggage before leaving the terminal.','乘客离开航站楼前必须领取行李。']
    ]);
    entry('freight',[
      ['goods','货物；大宗运输的货运','n.',['船货','货运'],['transported-cargo'],'Most freight on this route travels by rail rather than road.','这条路线上的大部分货物通过铁路而非公路运输。'],
      ['charge','运费','n.',['运费'],['cargo-transport-charge'],'The supplier agreed to pay the freight on the replacement parts.','供应商同意支付替换零件的运费。'],
      ['transport','以货运方式运输；装载货物','v.',['装货','以货运运送'],['transport-cargo'],'The fruit is freighted to regional markets overnight.','水果在夜间通过货运送往各地区市场。'],
      ['laden','使充满；使承载某种意义或负担（正式）','v.',['使充满'],['laden-with-associations'],'The final speech was freighted with memories of the lost community.','最后的演说满载着对那个已消失社区的回忆。','be freighted with']
    ],[ref(['租(或出租)(船等)'],'scope-excluded','旧标签所指租船语境不在本批货物、运费、货运与承载含义的学习范围内，不将其认证为一般租用义。',cam('freight'))],{laden:col('freight')});
    entry('fare',[
      ['price','票价；车船等交通费','n.',['交通费','票价','车费'],['passenger-transport-price'],'The bus fare includes a transfer to the airport shuttle.','公交票价包含换乘机场接驳车的费用。'],
      ['passenger','付费乘坐出租车的乘客','n.',['乘客'],['paying-taxi-passenger'],'The taxi driver picked up a fare outside the station.','出租车司机在车站外接到了一位乘客。'],
      ['food','供应的饭菜；食物（正式或旧用法）','n.',['饭菜','食物'],['served-food'],'The café serves simple regional fare made with seasonal ingredients.','这家咖啡馆供应以时令食材制作的简单地方菜。'],
      ['progress','进展；处于某种境况','v.',['进展','过活'],['manage-in-circumstances'],'Small shops may fare better when the pedestrian street reopens.','步行街重新开放后，小商店的境况可能会好转。']
    ]);
    entry('route',[
      ['path','路线；固定往返路径','n.',['路径','路线'],['travel-path'],'The walking route avoids the busiest roads.','这条步行路线避开了最繁忙的道路。'],
      ['method','达到目的的途径或方法','n.',['途径'],['method-treatment'],'An apprenticeship offers a practical route into skilled employment.','学徒培训为从事技术工作提供了实用途径。'],
      ['send','安排路线；按特定路径发送','v.',['确定路线','按规定路线发送','传递','路由设定程序'],['direct-along-path'],'The system routes urgent messages to the duty manager.','系统把紧急消息发送给值班经理。']
    ]);
    entry('sovereignty',[
      ['power','主权；独立统治权','n.',['主权','统治权'],['sovereign-authority'],"The agreement recognises each state's sovereignty over its own territory.",'协议承认每个国家对本国领土的主权。']
    ],[ref(['独立国','主权国家'],'restricted-verified','Collins 收有可数名词独立政治实体义；本批以现代最常用的抽象主权义训练，勿将两者词性数量混同。',col('sovereignty'))]);
    entry('democracy',[
      ['government','民主制度；民主政体','n.',['民主政治','民主主义','民主','民主政体'],['democratic-system'],'The course examines the role of public debate in a democracy.','这门课程考察公众辩论在民主制度中的作用。'],
      ['country','民主国家','n.',['民主国家'],['democratic-country'],'Several democracies took part in the comparative study.','几个民主国家参加了这项比较研究。'],
      ['participation','组织内部成员平等参与决策','n.',['平等参与决策'],['shared-group-decisions'],'The cooperative uses workplace democracy to decide major policies.','这家合作社通过工作场所的民主决策来制定重大政策。']
    ]);
    entry('legislation',[
      ['laws','法律；法规的总称','n.',['法律','法规'],['enacted-laws'],'The new legislation sets limits on industrial water pollution.','新法规对工业水污染设定了限值。'],
      ['process','立法；制定法律的过程','n.',['立法'],['lawmaking-process'],'Public consultation is an important stage in the process of legislation.','公众咨询是立法过程中的一个重要阶段。']
    ]);
    entry('citizen',[
      ['country','公民；具有某国法定身份的人','n.',['公民','国民'],['national-citizenship'],'Every citizen can request information about the public budget.','每位公民都可以申请了解公共预算的信息。'],
      ['town','市民；城镇居民','n.',['市民'],['town-resident'],'Citizens of the town volunteered to restore the riverside path.','镇上的居民自愿参加了河边小路的修复工作。']
    ]);
    entry('inflation',[
      ['prices','通货膨胀；整体物价持续上涨','n.',['通货膨胀'],['general-price-increase'],'High inflation reduced the purchasing power of household savings.','高通胀削弱了家庭储蓄的购买力。'],
      ['air','充气；气体使物体膨胀','n.',['胀大','充气吹胀','膨胀'],['filling-with-air'],'The technician checked the tyre pressure after inflation.','技术人员在充气后检查了轮胎气压。'],
      ['exaggeration','夸大；人为抬高数量或重要性','n.',['夸张','夸大'],['exaggerated-size-importance'],'The audit revealed inflation of the attendance figures.','审计发现出席人数被夸大了。']
    ]);
    entry('revenue',[
      ['income','企业或政府的经常性收入；税收','n.',['收入','岁入','税收'],['regular-organizational-income'],"Ticket sales provide most of the museum's revenue.",'门票销售提供了博物馆的大部分收入。']
    ],[ref(['税务局'],'context-required','税务机构名称中的 Revenue 是特定专名或简称，不能把任意普通收入一词译为税务局。',cam('revenue'))]);
    entry('inequality',[
      ['social','不平等；资源或机会分配不均','n.',['不平等','不平均'],['unequal-distribution'],'The report examines inequality in access to higher education.','报告考察了接受高等教育机会的不平等。'],
      ['difference','数量、大小或程度不相等','n.',['不同','数量不等'],['unequal-magnitude'],'The inequality in the two sample sizes affected the comparison.','两个样本大小不相等，影响了比较结果。'],
      ['math','不等式；数量间的不等关系','n.',['不等式'],['mathematical-inequality'],'The students solved an inequality to find the possible values of x.','学生们解了一个不等式，求出 x 的可能取值。']
    ],[ref(['不平坦'],'restricted-verified','Collins 收有表面不规则或不平整义；本批仅保留扩展说明，避免与常见社会及数学义混同。',col('inequality'))],{difference:col('inequality'),math:col('inequality')});
    entry('consumption',[
      ['use','消费；消耗；消费量或耗用量','n.',['消费','消费量','消耗量','耗量'],['resource-goods-use'],"Better insulation reduced the building's energy consumption.",'改善保温降低了建筑的能源消耗。'],
      ['food','食用；饮用','n.',['食用','饮用'],['eating-drinking'],'The water was tested before being approved for human consumption.','这批水经检验后才获准供人饮用。'],
      ['audience','供某群体阅读、接受或了解','n.',['供人了解'],['intended-information-audience'],'The draft was prepared for internal consumption only.','这份草稿仅供内部了解。','for internal/public consumption']
    ],[ref(['痨病'],'restricted-verified','Cambridge 标为 tuberculosis 的旧称；不是现代消费义，不强制列入本批常用训练。',cam('consumption'))]);
    entry('legitimate',[
      ['lawful','合法的；符合规则的','adj.',['合法的'],['lawful-permitted'],'The inspector checked that the business had legitimate permission to operate.','检查员核实了这家企业拥有合法经营许可。'],
      ['reasonable','正当的；合理可接受的','adj.',['正当的'],['reasonable-justified'],'Residents raised legitimate concerns about noise near the school.','居民对学校附近的噪声提出了合理关切。'],
      ['birth','婚生的（法律或历史用语）','adj.',['婚生的'],['born-within-marriage'],'The historian examined how the law distinguished legitimate heirs from other claimants.','历史学家考察了法律如何区分婚生继承人与其他申请人。'],
      ['authorize','使合法；使得到正式认可','v.',['认为正当','使合法'],['make-lawful'],'The decree was intended to legitimate the new governing body.','该法令旨在使新管理机构获得正式合法地位。']
    ],[ref(['立为嫡嗣'],'restricted-verified','此旧译涉及婚生身份的法律认可，不把 legitimate 当作普遍指定继承人的同义词；本批仅保留范围说明。',col('legitimate'))],{authorize:col('legitimate')});
    entry('obligation',[
      ['duty','义务；责任；必须履行的事','n.',['义务','责任','必须做的事','承诺'],['binding-duty'],'The landlord has an obligation to maintain the heating system.','房东有维护供暖系统的义务。'],
      ['debt','合同上的付款责任；债务','n.',['债务'],['financial-obligation'],'The company could not meet its financial obligations after sales collapsed.','销售崩溃后，公司无法履行其付款义务。'],
      ['gratitude','因受帮助而欠下的人情或感激之情','n.',['欠下的人情'],['debt-of-gratitude'],'She felt an obligation to the neighbours who had helped her family.','她觉得对帮助过家人的邻居欠着一份人情。']
    ],[],{gratitude:col('obligation')});
    entry('equity',[
      ['fairness','公平；公正','n.',['公平','公正'],['fair-treatment'],'The policy aims to improve equity in access to healthcare.','这项政策旨在改善医疗服务获取机会的公平性。'],
      ['value','扣除债务后的产权净值；所有者权益','n.',['权益','产权'],['net-ownership-value'],'After paying down the mortgage, they had more equity in the house.','偿还了一部分抵押贷款后，他们在房屋中拥有了更多净值权益。'],
      ['shares','股票；股权资本','n.',['股票','股权资本'],['ownership-stake'],'The fund invests part of its assets in equities.','该基金把部分资产投资于股票。']
    ]);
    entry('appeal',[
      ['request','呼吁；恳求；郑重请求','n./v.',['恳求','诉请','呼吁','要求'],['earnest-request'],'The charity launched an appeal for warm clothing.','慈善机构发出了征集保暖衣物的呼吁。'],
      ['legal','上诉；对裁定申请复审','n./v.',['上诉','将...上诉'],['review-official-decision'],'The residents will appeal against the planning decision.','居民将对规划决定提出上诉。'],
      ['attract','吸引力；使人感兴趣','n./v.',['吸引力','有吸引力'],['attractiveness-interest'],'The quieter route may appeal to travellers who dislike crowds.','较安静的路线可能会吸引不喜欢人群的旅行者。']
    ]);
    entry('witness',[
      ['observer','目击者；亲眼看见','n./v.',['目击者','目击'],['see-an-event'],'Several cyclists witnessed the accident near the junction.','几名骑车人在路口附近目睹了事故。'],
      ['court','证人；在法庭提供证言的人','n.',['证人','作证人'],['court-witness'],'The witness answered questions about the missing documents.','证人回答了有关丢失文件的问题。'],
      ['attest','见证并签名确认文件或行为','n./v.',['证明','作证'],['formal-attestation'],'A colleague agreed to witness the signature on the form.','一位同事同意见证表格上的签名。'],
      ['experience','某时期或地方经历、发生某事','v.',['经历','发生'],['experience-historical-change'],'The town witnessed rapid growth after the railway opened.','铁路开通后，这座城镇经历了快速发展。'],
      ['proof','证明；提供某事为真的依据','phrase',['表明','作为证据','证据','证词'],['evidence-proof'],'The surviving letters bear witness to the hardships faced by the family.','保存下来的信件证明了这个家庭曾面临的困境。','bear witness to']
    ],[],{proof:cam('bear-witness-to')});
    entry('casualty',[
      ['person','伤亡者；事故或战争中的死伤人员','n.',['伤亡','受害者'],['injured-or-killed-person'],'Rescue teams carried each casualty to a safe place.','救援队把每名伤员转移到了安全地点。'],
      ['affected','因某事受损的人或事物','n.',['受损事物'],['adversely-affected-entity'],'The evening bus service was a casualty of the budget cuts.','晚间公交服务成了预算削减的牺牲品。'],
      ['hospital','急诊室（英式）','n.',['急诊室'],['emergency-department'],'The driver was taken to casualty for an examination.','司机被送到急诊室接受检查。']
    ],[ref(['意外事故','事故'],'restricted-verified','所核商业词典在保险语境中收有损失或致损事故义；不将一般 casualty 与 accident 无条件互换。',cam('casualty'))]);
    entry('evidence',[
      ['proof','证据；根据；表明事实的迹象','n.',['根据','证据','迹象','凭证'],['evidence-proof'],'The samples provided evidence of earlier farming on the site.','这些样品提供了该遗址早期存在农业活动的证据。']
    ]);
    entry('mitigate',[
      ['lessen','减轻；缓和不利影响','v.',['温和','缓和','减轻'],['reduce-harm-severity'],'Planting trees can mitigate the effects of summer heat in city streets.','植树可以减轻夏季高温对城市街道的影响。']
    ]);
    entry('surrender',[
      ['defeat','投降；停止抵抗；自首','n./v.',['使投降','投降','自首'],['accept-defeat'],'The remaining soldiers agreed to surrender before nightfall.','剩余士兵同意在夜幕降临前投降。'],
      ['give-up','交出；放弃权利或控制权','n./v.',['交出','放弃','让与'],['relinquish-control'],'Visitors must surrender their passes when they leave the secure area.','访客离开受控区域时必须交还通行证。']
    ]);
    entry('colleague',[
      ['coworker','同事；同僚','n.',['同事','同僚'],['work-associate'],'My colleague checked the calculations before we sent the report.','发送报告前，我的同事核查了计算结果。']
    ]);
    entry('volunteer',[
      ['help','志愿者；志愿服务的；自愿提供帮助','n./v./modifier',['志愿者','志愿的','自愿'],['voluntary-service'],'Several neighbours volunteered to repair the playground fence.','几位邻居自愿参加修理游乐场围栏的工作。'],
      ['information','主动提供未被要求的信息','v.',['主动提供信息'],['offer-information-unasked'],'During the interview, she volunteered a detail that explained the missing record.','访谈中，她主动提供了一条细节，解释了那份记录缺失的原因。']
    ]);
    entry('empathy',[
      ['understanding','共情；设身处地理解他人感受','n.',['移情作用','共鸣','移情','神入'],['understand-another-feelings'],'Listening without interrupting helped the students develop empathy.','不打断地倾听帮助学生培养共情能力。']
    ]);
    entry('apprentice',[
      ['training','学徒；拜师学艺；使当学徒','n./v.',['学徒','生手','使做学徒'],['learn-trade-with-expert'],'The apprentice learned to repair watches under an experienced craftsperson.','这名学徒在经验丰富的工匠指导下学习维修手表。']
    ]);
    entry('implement',[
      ['execute','执行；实施；使计划生效','v.',['实现','使生效','执行'],['put-plan-into-action'],'The school will implement the new timetable next term.','学校将在下学期实施新的课程表。'],
      ['tool','工具；器具','n.',['工具','器具','手段'],['functional-device'],'The farmer stored each implement in the dry shed.','农民把每件农具存放在干燥的棚屋里。']
    ]);
    entry('facilitate',[
      ['enable','使便利；使更容易或能够实现','v.',['使便利','促进','促成','帮助推进'],['enable-easier-process'],'Clear signs facilitate movement through the crowded station.','清晰的标识让人们更容易通过拥挤的车站。'],
      ['discussion','协助开展讨论；引导达成结果','v.',['引导讨论'],['guide-group-process'],'An independent chair will facilitate the discussion between the two groups.','一位独立主持人将引导两个小组之间的讨论。']
    ]);
    entry('trigger',[
      ['gun','枪械的扳机','n.',['扳机','扳柄'],['gun-release-part'],'The safety lock prevents the trigger from moving accidentally.','保险锁能防止扳机意外移动。'],
      ['cause','触发因素；引起事件或启动装置','n./v.',['触发器','触发','引起','切换开关'],['start-event-or-device'],'A sudden drop in temperature can trigger the warning system.','温度突然下降可能触发预警系统。'],
      ['emotion','引发强烈负面情绪或痛苦回忆','n./v.',['情绪触发因素'],['evoke-distressing-memory'],'The familiar alarm sound triggered an upsetting memory for him.','熟悉的警报声触发了他一段令人不安的回忆。']
    ],[ref(['发射','松开扳柄'],'context-required','扣动扳机可导致发射，但不把 trigger 当作任意发射或松开动作的通用词。',cam('trigger'))]);
    entry('modify',[
      ['change','修改；调整；使较为缓和','v.',['修正','变更','缓和','减轻','被修改','修改'],['partial-alteration'],'The engineer modified the handle to make it easier to grip.','工程师调整了手柄，使它更容易握住。'],
      ['grammar','修饰词语；限定或补充词语含义','v.',['修饰'],['grammatical-modification'],'In the phrase very slowly, very modifies slowly.','在 very slowly 这一短语中，very 修饰 slowly。']
    ]);
    entry('eliminate',[
      ['remove','消除；排除；去掉不需要的事物','v.',['除去','排除','剔除','消除'],['remove-unwanted'],'The new filter eliminates most visible particles from the water.','新过滤器能去除水中大多数可见颗粒。'],
      ['competition','淘汰；使不能继续参赛','v.',['淘汰'],['knock-out-of-competition'],'The team was eliminated after losing the final qualifying match.','这支队伍输掉最后一场资格赛后被淘汰了。']
    ],[ref(['杀害'],'restricted-verified','Cambridge 另列消灭对手的俚语杀害义；本批记录其存在，不作为常用学术训练。',cam('eliminate'))]);
    entry('anxiety',[
      ['worry','焦虑；忧虑；令人担心的事情','n.',['焦虑','忧虑','令人焦虑的事'],['worried-feeling'],'Unclear instructions caused unnecessary anxiety among the new students.','不清晰的说明让新生感到不必要的焦虑。'],
      ['eagerness','急切；渴望做成某事','n.',['急切','渴望'],['eager-urgency','strong-desire'],'In her anxiety to finish early, she overlooked a small error.','她急于提前完成，忽略了一个小错误。','anxiety to do sth'],
      ['condition','持续焦虑的心理健康状况','n.',['焦虑状况'],['persistent-anxiety-condition'],'The study followed adults receiving professional support for anxiety.','研究追踪了正在接受专业焦虑支持的成年人。']
    ]);
    entry('resilient',[
      ['recover','受挫后能恢复的；适应力强的','adj.',['恢复力强的','适应力强的'],['recover-after-adversity'],'The community proved resilient after the closure of its main factory.','主要工厂关闭后，这个社区表现出了很强的恢复能力。'],
      ['elastic','有弹性的；受压后能恢复原状的','adj.',['弹回的','有弹力的','回弹的','回能的'],['elasticity'],'The resilient foam returned to its original shape after the weight was removed.','重物移开后，有弹性的泡沫恢复了原状。']
    ]);
    entry('therapy',[
      ['treatment','治疗；帮助康复的疗法','n.',['治疗','疗法'],['restorative-treatment'],'The clinic offers speech therapy for people recovering from a stroke.','诊所为中风后康复的人提供言语治疗。']
    ]);
    entry('immunity',[
      ['disease','对疾病的免疫力；免疫性','n.',['免疫','免疫性'],['disease-resistance'],'The researchers measured immunity to the virus in the study group.','研究人员测量了研究组对该病毒的免疫力。'],
      ['legal','法律豁免；免受起诉或责任追究','n.',['免除','法律豁免'],['legal-protection-from-action'],'The agreement did not grant immunity from prosecution.','协议没有给予免受起诉的豁免。']
    ]);
    entry('recovery',[
      ['health','康复；身体或精神状态恢复','n.',['恢复','复原','痊愈'],['health-restoration'],'Her recovery was gradual, and she returned to work part time.','她逐渐康复，并以兼职方式重新开始工作。'],
      ['economy','经济、业务或价格的复苏','n.',['复苏'],['economic-improvement'],'The recovery in local tourism created new jobs.','当地旅游业的复苏创造了新的就业岗位。'],
      ['regain','找回；收回；恢复丢失的数据或物品','n.',['重获','找回'],['regain-lost-item'],'The backup made recovery of the missing files possible.','备份使恢复丢失文件成为可能。'],
      ['resources','开采回收自然资源；提取可用物质','n.',['资源回收','提取'],['resource-extraction-recovery'],'The process improves the recovery of valuable metals from discarded equipment.','这一工艺提高了从废弃设备中回收有价金属的效率。']
    ]);
    entry('duration',[
      ['time','持续时间；延续的时长','n.',['持续时间','持续'],['time-length'],'The duration of the experiment depended on the temperature.','实验的持续时间取决于温度。']
    ]);
    entry('contemporary',[
      ['modern','当代的；现代的','adj.',['当代的','现代的'],['present-time'],'The gallery displays contemporary art from across the region.','画廊展出来自整个地区的当代艺术作品。'],
      ['same-period','同时代的；属于所述历史时期的','adj.',['同时代的','属于同一时期的'],['same-historical-period'],'The historian compared the diary with contemporary newspaper reports.','历史学家把日记与同时期的报纸报道作了比较。'],
      ['person','同代人；年龄相仿的人','n.',['同时代的人','同龄人'],['same-age-generation'],'Her contemporaries remembered her as an energetic campaigner.','她的同代人记得她是一位精力充沛的活动家。']
    ]);
    entry('prior',[
      ['earlier','先前的；事先的；早于某时','adj./phrase',['较早的','在先的'],['earlier-in-time'],'No prior experience is required for the introductory workshop.','参加入门工作坊不需要先前经验。'],
      ['priority','更重要的；优先的','adj.',['更重要的','优先的'],['higher-priority'],'The emergency team has a prior claim on the available vehicles.','应急团队对可用车辆有优先使用权。'],
      ['monk','小修道院院长；大修道院副院长','n.',['小隐修院院长','大隐修院副院长'],['monastic-leader'],'The prior welcomed visitors to the monastery library.','修道院院长欢迎访客来到修道院图书馆。']
    ],[],{monk:col('prior')});
    entry('imminent',[
      ['soon','即将发生的；迫近的','adj.',['即将来临的','逼近的'],['about-to-happen'],'Dark clouds suggested that heavy rain was imminent.','乌云表明大雨即将来临。']
    ]);
    entry('ecosystem',[
      ['nature','生态系统；生物与环境的关系整体','n.',['生态系统','生态系'],['ecological-system'],'Removing one species can disturb the balance of an entire ecosystem.','移除一个物种可能扰乱整个生态系统的平衡。'],
      ['network','相互依赖的行业、技术或社会生态体系','n.',['行业生态体系'],['interdependent-network'],'Small developers play an important role in the software ecosystem.','小型开发者在软件生态体系中发挥着重要作用。']
    ]);
    entry('vegetation',[
      ['plants','植被；某地区的植物总称','n.',['植物','植被'],['regional-plant-life'],'Dense vegetation protected the soil from heavy rain.','茂密的植被保护土壤免受暴雨冲刷。']
    ],[ref(['贽生物','贽疣','增殖体'],'restricted-verified','Collins 收有病理学异常赘生物义；旧标签中的贽不是规范赘字，不将其当作一般植物义的翻译。',col('vegetation')),ref(['生长','增殖'],'scope-excluded','植物生长或病理过程均需专业语境，本批只训练区域植被义，不把它当作任意增长的同义词。',col('vegetation'))]);
    entry('organism',[
      ['living','生物；有机体；生命个体','n.',['生物','有机体','机体'],['individual-living-entity'],'Each organism depends on a reliable source of energy.','每个生物体都依赖可靠的能量来源。'],
      ['system','像生物体一样相互依存的复杂组织','n.',['社会组织','复杂组织'],['interdependent-network'],'The sociologist describes the city as a complex social organism.','这位社会学家把城市描述为一个复杂的社会有机体。']
    ],[],{system:col('organism')});
    entry('diversity',[
      ['variety','多样性；不同种类或观点并存','n.',['差异','多样性'],['coexisting-variety'],'The meadow supports a remarkable diversity of flowering plants.','这片草地生长着种类丰富的开花植物。']
    ]);
    entry('yield',[
      ['produce','出产；产生结果或信息；产量','n./v.',['生产量','出产','给予'],['produce-useful-output'],'The field trial yielded useful information about drought-resistant crops.','田间试验提供了有关耐旱作物的有用信息。'],
      ['return','收益；产生投资回报','n./v.',['投资收益'],['investment-return'],'The report compares the yield on several long-term investments.','报告比较了几项长期投资的收益率。'],
      ['give-way','屈服；让出权利或控制','v.',['让出','放弃','使屈服','屈服','投降'],['relinquish-control'],'The council refused to yield control of the public land.','地方议会拒绝放弃对这块公共土地的控制。'],
      ['traffic','让路；让其他车辆先行','v.',['让路'],['traffic-priority'],'Drivers must yield to cyclists at this crossing.','司机在这个路口必须让骑车人先行。'],
      ['pressure','在压力下弯曲、断裂或塌陷','v.',['倒塌','受压变形'],['give-under-pressure'],'The weakened beam began to yield under the heavy load.','受损的梁在重负下开始弯曲变形。','yield under']
    ]);
  }
  if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch03=register;
})(typeof window==='object'?window:globalThis);
