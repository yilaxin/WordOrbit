/* Batch 06: scoped learning senses with original bilingual examples. No learner data. */
(function(scope){
  'use strict';
  function register(add){
    const entries={},cam=w=>'https://dictionary.cambridge.org/dictionary/english/'+w,col=w=>'https://www.collinsdictionary.com/dictionary/english/'+w;
    function entry(word,rows){
      const e=add(word,rows.map(r=>{r=r.slice();if(typeof r[4]==='string')r[4]=[r[4]];return r;}));
      e.reviewDate='2026-11-05';entries[word]=e;return e;
    }
    function reference(word,terms,reason,source=cam(word)){
      entries[word].referenceOnly.push({terms,decision:'scope-excluded',reason,source});
    }
    entry('rainforest',[
      ['forest','降雨丰沛的雨林；尤指热带雨林','n.',['热带雨林','雨林'],'high-rainfall-forest','The rainforest shelters species that cannot survive in cleared farmland.','雨林庇护着无法在开垦农田中生存的物种。']
    ]);
    entry('sunlight',[
      ['light','日光；来自太阳的光','n.',['日光','太阳光'],'solar-light','The seedlings grew towards the sunlight entering through the window.','幼苗朝着从窗户射入的阳光生长。']
    ]);
    entry('charcoal',[
      ['material','木炭；绘画用炭条','n.',['木炭'],'charred-wood-material','The artist used charcoal to sketch the dark shapes of the trees.','画家用炭条勾画了树木的深色轮廓。'],
      ['colour','炭灰色；深灰色的','n./modifier',['炭灰色'],'dark-grey-colour','The designer chose a charcoal background for the pale lettering.','设计师为浅色文字选用了炭灰色背景。']
    ]);
    entry('timber',[
      ['wood','用于建筑等的木材；成材树木','n.',['木材','木料'],'prepared-timber','The builders sourced timber from a responsibly managed forest.','建筑工人从负责任管理的森林采购木材。'],
      ['beam','建筑中的木梁或大块木料','n.',['木梁'],'large-wooden-beam','The roof timbers showed damage from years of damp conditions.','屋顶木梁显露出多年受潮造成的损伤。']
    ]);
    entry('fertilise',[
      ['soil','施肥；使土壤更肥沃','v.',['施肥','使肥沃'],'enrich-soil','The gardeners fertilise the beds with well-rotted compost.','园丁用充分腐熟的堆肥给种植畦施肥。'],
      ['reproduction','使卵受精；使植物完成受精过程','v.',['使受精','使受孕'],'biological-fertilization','Pollen from another flower can fertilise the ovules after pollination.','授粉之后，来自另一朵花的花粉可以使胚珠受精。']
    ]);
    entry('herbivore',[
      ['animal','以植物为食的动物；草食动物','n.',['草食动物'],'plant-eating-animal','The reserve supports large herbivores that graze on the open plain.','保护区养育了在开阔平原上吃草的大型草食动物。']
    ]);
    entry('carnivore',[
      ['organism','以动物为食的生物；食肉动物或食虫植物','n.',['食肉动物','食虫植物'],'animal-eating-organism','The carnivore depends on a healthy population of prey.','这种食肉动物依赖健康的猎物种群。']
    ]);
    entry('zoologist',[
      ['scientist','动物学家；研究动物的科学家','n.',['动物学家'],'animal-scientist','The zoologist tracked how the mammals responded to habitat loss.','动物学家追踪研究了哺乳动物如何应对栖息地丧失。']
    ]);
    entry('ecologist',[
      ['scientist','生态学家；研究生物与环境关系的人','n.',['生态学者'],'ecology-scientist','An ecologist advised the council on restoring the wetland.','一位生态学家就恢复湿地向议会提出了建议。']
    ]);
    entry('botanist',[
      ['scientist','植物学家','n.',['植物学家'],'plant-scientist','The botanist identified several rare plants beside the stream.','植物学家在溪边鉴定出了几种珍稀植物。']
    ]);
    entry('hatch',[
      ['young','孵化；使幼体破壳而出','v.',['孵化','孵','孵出'],'emerge-from-egg','The eggs hatched after several weeks in the protected nest.','这些卵在受保护的巢中经过几周后孵化了。'],
      ['opening','舱口；墙壁或地板上的开口或盖子','n.',['舱口'],'access-opening','The mechanic opened a hatch to inspect the engine below.','机械师打开舱口，检查下方的发动机。'],
      ['plan','策划；秘密筹划','v.',['策划'],'devise-secret-plan','The children hatched a plan to surprise their teacher.','孩子们悄悄策划了一个让老师惊喜的计划。']
    ]);
    entry('spawn',[
      ['eggs','鱼、蛙等的卵；产卵','n./v.',['(鱼)卵','产卵'],'aquatic-eggs','The pond was full of frog spawn by early spring.','初春时，池塘里满是蛙卵。'],
      ['produce','引发；产生出大量新事物','v.',['产物','酿成','大量生产'],'cause-many-new-things','The discovery spawned a series of experiments on related materials.','这项发现引发了一系列有关类似材料的实验。']
    ]);
    entry('courtship',[
      ['romance','求爱；以结婚为目的的交往时期','n.',['求爱','求婚','求爱时期'],'romantic-courtship','Their long courtship ended with a small wedding in the village.','他们长期恋爱后在村里举行了小型婚礼。'],
      ['animals','动物为吸引配偶而进行的行为','n.',['求偶行为'],'animal-mate-attraction','The male bird performs a colourful courtship display.','雄鸟进行色彩鲜艳的求偶展示。'],
      ['persuasion','争取支持、合作或青睐的过程','n.',['争取青睐'],'seeking-favour','The city\'s courtship of new investors included visits to local factories.','城市争取新投资者的活动包括参观当地工厂。']
    ]);
    entry('mature',[
      ['adult','成年或成熟的；长成或使成熟','adj./v.',['成熟的','使成熟','成熟'],'fully-developed','The mature trees provide shade that young saplings cannot yet offer.','成熟树木提供了幼树尚不能提供的荫凉。'],
      ['judgment','思想成熟的；经过充分考虑的','adj.',['充分考虑的'],'responsible-considered','She made a mature decision after weighing the needs of the whole group.','她权衡整个小组的需要后作出了成熟的决定。'],
      ['flavour','食品或饮料经陈化而风味成熟','adj./v.',['风味成熟'],'developed-food-flavour','The cheese matures in cool rooms before it is sold.','奶酪出售前在凉爽房间中熟成。'],
      ['finance','投资、债券等到期可获支付的','adj./v.',['到期的','到期'],'investment-becomes-payable','The bond will mature at the end of the agreed term.','债券将在约定期限结束时到期。']
    ]);
    entry('feed',[
      ['food','喂养；提供食物；进食','v.',['饲养','喂','吃东西','用餐'],'provide-or-eat-food','The volunteers feed the rescued animals twice a day.','志愿者每天给获救动物喂食两次。'],
      ['animal-food','饲料；一餐或一次喂食','n.',['饲料','一餐'],'animal-feed-or-meal','The farmer stored the feed where rain could not reach it.','农民把饲料存放在雨淋不到的地方。'],
      ['supply','向机器、系统或流程持续输入或输送','v.',['流入','送纸'],'continuous-supply','The sensor feeds measurements directly into the control system.','传感器把测量值直接输入控制系统。'],
      ['stream','连续传来的信息、视频或网络动态流','n.',['信息流'],'continuous-information-stream','The live feed showed the river level rising near the bridge.','实时画面显示桥附近的河流水位正在上升。'],
      ['depend','依靠某种来源维持；因某因素而壮大','v.',['靠...为生'],'derive-sustenance','The rumour fed on public uncertainty about the closure.','公众对关闭一事的不确定感助长了传闻。','feed on/off']
    ]);
    entry('herd',[
      ['animals','同类动物组成的群','n.',['兽群'],'group-of-herd-animals','A herd of deer crossed the path ahead of the walkers.','一群鹿在步行者前方穿过小路。'],
      ['people','缺乏个体区别的一大群人（常含贬意）','n.',['人群'],'undifferentiated-crowd','She preferred to explore alone rather than follow the herd.','她宁愿独自探索，而不愿随大流。'],
      ['move','把动物或人赶到一处；成群移动','v.',['群集','使成群','放牧','聚在一起'],'move-group-together','The guide herded the visitors towards the correct exit.','向导把访客们引导到正确出口。']
    ]);
    entry('pest',[
      ['harmful','危害作物等的害虫或小动物','n.',['有害之物','害虫'],'crop-damaging-organism','The traps help farmers monitor the pest without spraying the whole field.','诱捕器帮助农民监测害虫，而不必喷洒整片田地。'],
      ['annoyance','讨厌的人；不断惹麻烦的家伙','n.',['令人讨厌之物'],'annoying-person','The neighbour called the child a pest after another noisy interruption.','孩子又一次吵闹打断谈话后，邻居说他是个小讨厌鬼。']
    ]);
    entry('insect',[
      ['animal','昆虫；通常具有六足和三段身体的动物','n.',['昆虫'],'six-legged-invertebrate','The insect has antennae that detect changes in its surroundings.','这种昆虫的触角能够感知周围环境的变化。']
    ]);
    entry('bristle',[
      ['hair','短硬毛；刷子的鬃毛或硬纤维','n.',['刚毛','猪鬃'],'short-stiff-hair','The stiff bristles removed dried mud from the boot.','硬鬃毛刷掉了靴子上的干泥。'],
      ['stand','毛发竖起；使竖立','v.',['直立','使直立'],'hair-standing-up','The dog\'s fur bristled when it heard the unfamiliar sound.','狗听到陌生声音时，毛竖了起来。'],
      ['anger','表现出愤怒或被冒犯的反应','v.',['发怒'],'react-with-anger','The researcher bristled at the suggestion that the evidence had been ignored.','听到有人暗示证据被忽视了，研究人员显得很生气。','bristle at'],
      ['full','充满；密布着某种事物','v.',['充满'],'be-densely-filled','The report bristles with practical suggestions for reducing waste.','报告中满是减少浪费的实用建议。','bristle with']
    ]);
    entry('feather',[
      ['bird','羽毛；覆盖鸟体的轻柔结构','n.',['羽毛'],'bird-feather','A single feather drifted down from the nest.','一根羽毛从鸟巢中飘落。'],
      ['oar','回桨时把桨叶转为与水面平行','v.',['平转桨叶'],'turn-oar-blade-flat','The rowers feathered their oars before the next stroke.','划船者在下一次划桨前把桨叶平转。']
    ]);
    entry('geology',[
      ['science','地质学；研究地球岩石及其形成的学科','n.',['地质学'],'earth-rock-science','Geology explains why the region contains several different rock layers.','地质学解释了为什么该地区存在几种不同岩层。'],
      ['structure','某地的地质构造或地质情况','n.',['地质情况'],'regional-rock-structure','The local geology makes the slope vulnerable to landslides.','当地地质情况使山坡容易发生滑坡。']
    ]);
    entry('silt',[
      ['sediment','泥沙；水携带或沉积的细颗粒','n.',['淤泥'],'fine-waterborne-sediment','The flood left a layer of silt over the fields.','洪水在田野上留下了一层淤泥。'],
      ['block','被泥沙淤塞；使淤积','v.',['使淤塞','淤塞'],'block-with-sediment','The channel gradually silted up after the river changed course.','河流改道后，水道逐渐淤塞了。','silt up']
    ]);
    entry('debris',[
      ['remains','碎屑；破坏后留下的残骸','n.',['碎片','残骸','碎屑'],'scattered-broken-remains','Workers removed storm debris from the railway line.','工人清除了铁路线路上的风暴残骸。']
    ]);
    entry('drain',[
      ['liquid','排出液体；流干或喝光','v.',['排水','排出','喝光','流干'],'remove-liquid','The workers drained the flooded basement before checking the wiring.','工人在检查电线前排干了积水地下室。'],
      ['pipe','排水管、沟或下水道','n.',['排水沟'],'wastewater-outlet','Leaves had blocked the drain beside the road.','树叶堵住了路边的排水沟。'],
      ['resources','逐渐耗尽精力、金钱或资源','v./n.',['消耗','耗尽'],'deplete-resources','The repeated repairs became a drain on the centre\'s limited funds.','反复维修不断消耗着中心有限的资金。']
    ]);
    entry('drainage',[
      ['system','排水；让液体排走的系统或过程','n.',['排水','引流','导液'],'liquid-drainage','Improved drainage prevented water from collecting under the building.','改善排水避免了建筑物下方积水。']
    ]);
    entry('circulation',[
      ['movement','液体或空气的循环流动；血液循环','n.',['循环','环流'],'circulating-fluid','The open windows improve air circulation in the classroom.','敞开的窗户改善了教室的空气流通。'],
      ['sharing','钱、物品或信息在人群中的流通','n.',['流通'],'passing-between-people','The library withdrew the damaged books from circulation.','图书馆停止了受损图书的流通。'],
      ['copies','报刊的发行量','n.',['发行量'],'publication-circulation-count','The newspaper\'s circulation grew after it introduced a weekend edition.','报纸推出周末版后，发行量增长了。']
    ]);
    entry('evaporation',[
      ['liquid','蒸发；液体转变为气体的过程','n.',['蒸发'],'liquid-vaporization','A cover reduced evaporation from the experimental tank.','盖子减少了实验水箱的蒸发。'],
      ['disappearance','逐渐消失；不复存在','n.',['消失'],'gradual-disappearance','The sudden evaporation of public confidence forced a review of the plan.','公众信心的突然消失迫使人们重新审视计划。']
    ]);
    entry('intensity',[
      ['force','强烈程度；感受或效果的强度','n.',['强烈','紧张','强度'],'degree-of-strength','The intensity of the debate surprised the visiting students.','辩论的激烈程度让来访学生感到惊讶。'],
      ['measurement','光、声等可测量的强度','n.',['亮度'],'measured-energy-intensity','The instrument recorded light intensity at different depths.','仪器记录了不同深度的光强。']
    ]);
    entry('fluctuate',[
      ['vary','反复变化；在不同水平间起伏','v.',['变动','起伏','动摇'],'vary-between-levels','Demand for electricity fluctuates throughout the day.','电力需求全天都在波动。']
    ]);
    entry('counterbalance',[
      ['offset','起相反作用以抵消；抗衡因素','v./n.',['抵消','弥补','抗衡因素'],'counterbalance-effect','The lower rent counterbalanced the extra cost of travelling.','较低的租金抵消了额外交通费。'],
      ['weight','平衡重物；配重以保持平衡','n./v.',['使平衡','平衡力','配重物'],'physical-counterweight','A counterbalance allows the heavy door to be lifted with little effort.','配重让这扇重门不费力就能抬起。']
    ]);
    entry('dust',[
      ['powder','灰尘；尘埃；细小干燥颗粒','n.',['灰尘','尘埃','粉末','土'],'fine-dry-particles','Dust from the construction site settled on nearby windows.','工地的灰尘落在了附近窗户上。'],
      ['remove','拂去灰尘；擦去尘土','v.',['拂去灰尘'],'remove-dust','The conservator dusted the frame with a soft brush.','文物修复师用软刷拂去画框上的灰尘。'],
      ['sprinkle','轻轻撒上一层粉末','v.',['撒'],'sprinkle-fine-powder','The baker dusted the surface with flour before rolling the dough.','糕点师在擀面团前往台面上撒了一层面粉。']
    ]);
    entry('ash',[
      ['burning','灰；燃烧后留下的灰烬','n.',['灰','灰烬','灰分'],'burnt-material-residue','A thin layer of ash covered the ground after the fire.','火灾后，地面覆盖了一层薄灰。'],
      ['tree','梣树；白蜡树及其木材','n.',['白蜡树'],'ash-tree','The carpenter chose ash for the flexible wooden handle.','木匠选择白蜡木制作有韧性的木柄。']
    ]);
    entry('motion',[
      ['movement','运动；动作；移动的过程','n.',['移动','动作'],'physical-movement','The camera recorded the motion of the pendulum.','摄像机记录了钟摆的运动。'],
      ['proposal','正式提案；供会议表决的动议','n.',['请求','提议'],'formal-meeting-proposal','The committee passed a motion to publish the full report.','委员会通过了一项公布完整报告的动议。'],
      ['gesture','以手势示意；表示某意思的手势','v./n.',['手势','打手势'],'expressive-body-movement','The guard motioned for the visitors to move back.','警卫做手势示意访客后退。']
    ]);
    entry('curve',[
      ['shape','曲线；连续弯曲的线条或形状','n.',['曲线','弯曲'],'continuous-bending-line','The curve on the graph shows a gradual rise followed by a decline.','图上的曲线显示先逐渐上升，再下降。'],
      ['bend','弯曲；使成弧形','v.',['弯','使弯曲','成曲形'],'bend-continuously','The path curves around the lake before entering the forest.','小路绕湖弯行后进入森林。'],
      ['ball','球在运动中的弧线；曲线球','n.',['曲线球'],'curving-ball-path','The pitcher\'s curve changed direction just before reaching the batter.','投手投出的曲线球在接近击球手前改变了方向。']
    ]);
    entry('fragment',[
      ['piece','碎片；从整体分离的一小部分','n.',['碎片','破片','片段'],'small-broken-part','A fragment of painted pottery was found beside the wall.','墙边发现了一块彩陶碎片。'],
      ['break','分裂成小部分；使碎裂','v.',['分段'],'break-into-fragments','The ice sheet fragmented as the temperature rose.','温度升高时，冰层碎裂了。']
    ]);
    entry('compound',[
      ['chemical','化合物；不同元素化学结合的物质','n.',['化合物'],'chemical-compound','The laboratory identified a compound containing carbon and oxygen.','实验室鉴定出了一种含碳和氧的化合物。'],
      ['combination','复合体；由多个部分组成的；混合而成','n./adj.',['混合物','复合的','混合的','化合的'],'combination-of-components','The wall is covered with a compound layer of several materials.','墙体覆盖着由几种材料组成的复合层。'],
      ['word','复合词；两个或以上词组合形成的词','n.',['复合词'],'combined-word','The compound combines a noun with a second word describing its use.','这个复合词把一个名词与另一个说明其用途的词组合起来。'],
      ['enclosure','围墙内的院落或建筑群','n.',['院子'],'enclosed-building-area','The medical team worked inside a secure compound.','医疗队在一个安全的围院内工作。'],
      ['worsen','使问题更严重；使困难加重','v.',['使加重'],'make-problem-worse','Poor communication compounded the delays caused by the storm.','沟通不畅加重了风暴造成的延误。'],
      ['interest','计算复利；把利息计入本金','v.',['复利计算'],'compound-interest','The account compounds interest annually rather than monthly.','账户按年而不是按月计算复利。']
    ]);
    entry('potential',[
      ['possible','可能的；潜在而尚未实现的','adj.',['有潜力的','可能的','潜在的'],'possible-not-yet-realized','The survey identified potential sites for the new clinic.','调查确定了新诊所的潜在选址。'],
      ['capacity','潜力；发展或实现某事的可能性','n.',['潜在性','可能性','潜力','潜能'],'capacity-to-develop','The abandoned site has the potential to become a useful public space.','废弃场地有潜力成为实用的公共空间。'],
      ['physics','电势或其他物理势；单位量的势能','n.',['势','位'],'physical-potential','The voltmeter measures the difference in electrical potential between two points.','电压表测量两点之间的电势差。']
    ]);
    entry('function',[
      ['purpose','功能；作用；职责','n.',['官能','职务','功能'],'purpose-or-duty','The main function of the wetland is to store and filter water.','湿地的主要作用是储存和过滤水。'],
      ['operate','正常运作；起作用；履行职责','v.',['运行','行使职责'],'operate-effectively','The pump cannot function without a reliable power supply.','没有可靠电源，水泵无法运作。'],
      ['math','函数；输入与唯一输出之间的关系','n.',['函数'],'mathematical-function','The function assigns one output value to each input.','该函数为每个输入指定一个输出值。'],
      ['event','正式社交活动或典礼','n.',['活动'],'formal-social-event','The hall is used for weddings and other public functions.','大厅用于婚礼及其他公共活动。']
    ]);
    entry('acoustic',[
      ['sound','声音的；声学的；听觉的','adj.',['听觉的','声学的','音响的','听的'],'sound-hearing-related','The panels improve the acoustic quality of the lecture room.','这些板材改善了讲课室的声学效果。'],
      ['instrument','不依靠电子扩音的；原声的','adj.',['原声的'],'non-electrically-amplified','The singer performed with an acoustic guitar.','歌手用原声吉他伴奏演唱。'],
      ['room','房间或建筑的音响效果（复数）','n. plural',['音响效果'],'room-sound-properties','The hall\'s acoustics allow quiet instruments to be heard clearly.','大厅的音响效果使声音较轻的乐器也能被清楚听到。','acoustics']
    ]);
    entry('excrete',[
      ['waste','排泄；从身体或细胞排出废物','v.',['排泄'],'remove-biological-waste','The experiment measured how quickly the organism excreted excess salt.','实验测量了该生物排出多余盐分的速度。']
    ]);
    entry('principal',[
      ['main','主要的；首要的；最重要的','adj.',['主要的','最重要的','首要的'],'highest-importance','The principal cause of the delay was a shortage of trained staff.','延误的主要原因是缺少受过培训的员工。'],
      ['leader','学校或学院的负责人；校长','n.',['校长','首长'],'educational-institution-head','The principal met parents to explain the revised timetable.','校长与家长会面，解释修改后的课程表。'],
      ['money','本金；不计利息的借贷或投资金额','n.',['本金','资本'],'money-before-interest','The payment reduced the principal as well as the interest owed.','这笔付款既减少了本金，也减少了应付利息。'],
      ['party','主要当事人；授权代理人行事的委托人','n.',['主犯','委托人'],'main-legal-party','The agent signed the agreement on behalf of the principal.','代理人代表委托人签署了协议。']
    ]);
    entry('dean',[
      ['university','大学院长；负责特定事务的教务负责人','n.',['院长','学院院长','教务长'],'university-faculty-head','The dean announced a new research programme for the faculty.','院长宣布了学院的新研究项目。'],
      ['church','主教座堂等的教长；高级牧师','n.',['主持牧师'],'cathedral-senior-cleric','The dean welcomed visitors to the cathedral\'s anniversary service.','教长欢迎访客参加主教座堂的周年礼拜。'],
      ['seniority','某行业或群体中资历最深的领袖人物','n.',['资深领袖'],'senior-leading-member','She is widely regarded as the dean of local environmental journalism.','她被广泛视为当地环境新闻界的元老。']
    ]);
    entry('professor',[
      ['academic','教授；大学中具有高级学术职位的教师','n.',['教授'],'senior-university-academic','The professor supervises research on sustainable building materials.','教授指导可持续建筑材料方面的研究。']
    ]);
    entry('pupil',[
      ['learner','学生；接受学校或专家教导的人','n.',['学生','门生'],'taught-learner','Each pupil prepared a short presentation about the local river.','每名学生准备了一份关于当地河流的简短报告。'],
      ['eye','瞳孔；眼睛中央让光进入的开口','n.',['瞳孔'],'eye-light-opening','The pupil becomes smaller in bright light.','强光下，瞳孔会缩小。']
    ]);
    entry('graduate',[
      ['person','毕业生；完成学校或大学课程的人','n.',['大学毕业生','毕业生'],'completed-education-person','The scheme helps recent graduates find their first research posts.','这个计划帮助新近毕业生找到第一份研究工作。'],
      ['complete','毕业；取得学位','v.',['毕业','取得学位'],'finish-education','She graduated from university before joining the survey team.','她大学毕业后加入了调查团队。'],
      ['advance','逐渐转向更高级或不同的阶段','v.',['逐渐转向'],'progress-to-next-level','The learners graduated from short conversations to formal presentations.','学习者从简短交谈逐步过渡到正式报告。','graduate from ... to ...'],
      ['postdegree','大学毕业后的；研究生阶段的（尤美式）','modifier',['大学毕业的','研究生的'],'postgraduate-study','The graduate programme combines advanced classes with independent research.','研究生课程把高级课程与独立研究结合起来。']
    ]);
    entry('dissertation',[
      ['academic','学位论文；深入讨论专题的长篇学术文章','n.',['学位论文','专题论文','学术论述'],'extended-academic-thesis','Her dissertation examines how coastal communities respond to erosion.','她的学位论文考察沿海社区如何应对侵蚀。']
    ]);
    entry('essay',[
      ['writing','讨论某主题的短文；随笔；课程论文','n.',['随笔','短文','评论'],'short-discursive-writing','The essay compares two explanations of urban population growth.','这篇短文比较了对城市人口增长的两种解释。'],
      ['attempt','尝试；试图完成某事（正式）','v./n.',['企图','试图'],'attempt-undertaking','The author essays a new approach to the familiar historical question.','作者尝试用一种新方法处理这个熟悉的历史问题。']
    ]);
    entry('project',[
      ['plan','有明确目标的项目、计划或研究课题','n.',['项目','工程','计划','课题','规划'],'planned-undertaking','The project will restore the footpath without disturbing nesting birds.','项目将在不惊扰筑巢鸟类的情况下修复步道。'],
      ['estimate','根据已知信息预计未来数值','v.',['预计','预测'],'forecast-future','The team projected passenger demand for the next five years.','团队预测了未来五年的客运需求。'],
      ['image','投射影像；放映','v.',['投射','放映'],'cast-image-on-surface','The lecturer projected a map onto the wall.','讲师把地图投影到墙上。'],
      ['protrude','伸出；突出于表面','v.',['突出'],'extend-outwards','A narrow balcony projects over the entrance.','一座狭窄阳台突出在入口上方。'],
      ['impression','表现出某种形象或感受','v.',['表达印象'],'convey-personal-image','The speaker tried to project confidence despite the uncertain results.','尽管结果尚不确定，发言者仍试图表现出信心。'],
      ['voice','使声音传得远而清楚','v.',['使声音传远'],'carry-voice','The actor learned to project her voice across the large hall.','演员学会了让声音清楚地传遍大厅。']
    ]);
    entry('deadline',[
      ['limit','截止日期或时间；最后期限','n.',['最后期限','截止期限','截止日期'],'last-allowed-time','The team submitted its findings two days before the deadline.','团队在截止日期前两天提交了研究结果。']
    ]);
    entry('semester',[
      ['term','学年中通常为一半的学期','n.',['学期'],'half-year-academic-term','Students choose their optional courses at the start of each semester.','学生在每学期开始时选择选修课程。']
    ]);
    entry('reference',[
      ['mention','提及；谈到某人或某事','n.',['提及'],'mention-in-discourse','The speech contained no reference to the proposed closure.','演讲没有提到拟议的关闭。'],
      ['consult','参考；为查找信息而查阅','n.',['参考','参照'],'consult-information','Keep the diagram for future reference.','留存这张图以备日后参考。'],
      ['source','文献出处；引文来源；列出参考文献','n./v.',['引用','给...加上参考资料'],'cited-information-source','Every reference in the report was checked against the original publication.','报告中的每条参考文献都与原始出版物核对过。'],
      ['recommendation','推荐信；证明品行能力的人','n.',['推荐信'],'employment-character-reference','The employer requested a reference from her previous supervisor.','雇主要求她提供前任主管的推荐证明。'],
      ['code','便于识别或查找的编号','n.',['参考编号'],'identifying-reference-code','Please include the booking reference when contacting the office.','联系办公室时，请提供预订编号。']
    ]);
    entry('quote',[
      ['words','引用原话；引文','v./n.',['引用','引述'],'repeat-exact-words','The journalist quoted the mayor\'s statement accurately.','记者准确引用了市长的声明。'],
      ['example','举出事实或例子作依据','v.',['举证'],'cite-supporting-example','The report quotes several successful projects as evidence.','报告举出了几个成功项目作为证据。'],
      ['price','报价；提出的价格','v./n.',['报(价)'],'proposed-price','The contractor quoted a fixed price for repairing the roof.','承包商为修理屋顶报了一个固定价格。']
    ]);
    entry('context',[
      ['circumstances','事件发生的背景；理解所需的情况','n.',['背景','来龙去脉'],'surrounding-circumstances','The policy makes more sense in the context of the housing shortage.','把这项政策放在住房短缺的背景下看，就更容易理解了。'],
      ['language','某词句前后的上下文','n.',['上下文'],'surrounding-language','The meaning of the phrase becomes clear from its context.','短语的含义从上下文中变得清楚了。']
    ]);
    entry('outline',[
      ['shape','轮廓；勾画外形','n./v.',['轮廓','描画轮廓'],'outer-shape','The outline of the island appeared as the fog lifted.','雾散时，岛屿轮廓显现了出来。'],
      ['summary','概要；大纲；概述要点','n./v.',['大纲','概要','描述要点'],'summary-of-main-points','The chair outlined the main stages of the consultation.','主持人概述了征询意见的主要阶段。']
    ]);
    entry('gist',[
      ['main-point','主旨；不涉及细节的要点','n.',['要点','要旨'],'essential-main-message','I understood the gist of the lecture despite missing a few technical terms.','尽管没听懂几个术语，我还是理解了讲座主旨。']
    ]);
    entry('elicit',[
      ['obtain','引出信息或反应；设法使人提供','v.',['引出','引起'],'draw-out-response','Open questions elicited more detailed accounts from the participants.','开放式问题引出了参与者更详细的叙述。']
    ]);
    entry('presume',[
      ['believe','根据可能性推定或相信','v.',['假定','推测','相信'],'assume-with-likelihood','The researchers presumed that the missing readings were caused by a faulty sensor.','研究人员推测缺失读数是由传感器故障造成的。'],
      ['overstep','擅自做无权做的事；冒昧','v.',['擅自','擅自行动'],'act-without-right','I would not presume to decide on behalf of the whole group.','我不会擅自替整个小组作决定。','presume to do']
    ]);
    entry('assume',[
      ['suppose','未经证实而认为；假定','v.',['假定'],'take-as-true','The model assumes that each household uses the same amount of water.','模型假定每户用水量相同。'],
      ['take','承担职责；取得控制或地位','v.',['承担'],'take-responsibility','The deputy assumed responsibility while the director was away.','主任不在时，副主任承担了责任。'],
      ['form','开始具有某种形态或特征','v.',['呈现'],'take-on-characteristic','The issue assumed greater importance after the new results appeared.','新结果出现后，这个问题变得更加重要。'],
      ['pretend','装出感情或身份；假装','v.',['装腔作势'],'adopt-false-appearance','He assumed an air of confidence before addressing the audience.','他在对听众讲话前装出了一副自信神态。']
    ]);
    entry('conclude',[
      ['finish','结束发言、活动或文章','v.',['结束'],'bring-to-end','The presentation concluded with questions from the audience.','报告以听众提问结束。'],
      ['reason','考虑证据后作出结论或推断','v.',['作结论','推断'],'reason-from-evidence','The team concluded that the change was unlikely to be accidental.','团队得出结论，认为变化不太可能是偶然的。'],
      ['agreement','达成协议；完成正式交易','v.',['达成协议'],'complete-formal-agreement','The two organisations concluded an agreement to share laboratory equipment.','两个组织达成了共享实验设备的协议。']
    ]);
    entry('persist',[
      ['continue','持续存在；在通常时限之后仍未消失','v.',['持续'],'continue-existing','The shortage persisted even after deliveries resumed.','即使恢复供货，短缺仍持续存在。'],
      ['insist','不顾困难或反对继续坚持','v.',['坚持','固执','坚称'],'continue-despite-opposition','She persisted with the experiment until the inconsistent readings were explained.','她坚持实验，直到不一致的读数得到解释。','persist in/with']
    ]);
    entry('parameter',[
      ['limit','界限；决定活动范围的条件','n.',['范围条件'],'defining-limits','The committee set clear parameters for the consultation.','委员会为征询意见设定了明确范围。'],
      ['quantity','参数；模型中用于确定关系的量','n.',['参变数','参变量','参数','参量'],'model-defining-quantity','Changing one parameter altered the model\'s predicted temperature.','改变一个参数就改变了模型预测的温度。']
    ]);
    entry('variable',[
      ['quantity','变量；可能改变的数量或因素','n.',['易变的事物','变数','可变物','变量'],'changeable-factor','The experiment controlled every variable except water temperature.','实验控制了除水温以外的每个变量。'],
      ['changing','可变的；不定或易变的','adj.',['可变的','不定的','易变的','变量的'],'not-constant','The island has highly variable weather throughout the year.','岛上全年天气多变。']
    ]);
    entry('fraction',[
      ['number','分数；一个数除以另一个数所得的表示','n.',['分数'],'fractional-number','The fraction one quarter is equivalent to twenty-five percent.','四分之一这个分数相当于百分之二十五。'],
      ['part','很小的一部分；少量','n.',['小部分','部分','成分'],'small-part-of-whole','Only a fraction of the original forest remains.','原始森林只剩下很小一部分。']
    ]);
    entry('proportion',[
      ['share','某部分占整体的比例；一部分','n.',['比例','比率','部分'],'relative-part-share','A growing proportion of journeys are made by bicycle.','骑自行车的出行比例正在上升。'],
      ['balance','各部分之间的大小关系；匀称','n.',['均衡'],'balanced-relative-size','The architect adjusted the windows to improve the proportions of the facade.','建筑师调整了窗户，改善立面的比例关系。'],
      ['size','大小；规模（通常复数）','n.',['面积'],'overall-dimensions','The problem had reached serious proportions before action was taken.','采取行动前，问题已经扩大到严重程度。','proportions']
    ]);
    entry('ratio',[
      ['comparison','两个数量的比；比率','n.',['比','比率','比例'],'ratio-between-quantities','The ratio of teachers to pupils improved after the school hired more staff.','学校增聘员工后，教师与学生的比例有所改善。']
    ]);
    entry('geometry',[
      ['mathematics','几何学；研究空间与形状关系的数学分支','n.',['几何学'],'spatial-mathematics','Geometry helps engineers calculate the shape of the structure.','几何学帮助工程师计算结构的形状。'],
      ['arrangement','某物各部分的空间形状与排列','n.',['空间构型'],'spatial-arrangement','The molecule\'s geometry influences how it interacts with light.','分子的空间构型影响其与光的相互作用。']
    ]);
    entry('algebra',[
      ['mathematics','代数学；用字母和符号表示数及其关系的数学','n.',['代数学'],'symbolic-mathematics','The course introduces algebra through simple equations.','课程通过简单方程引入代数学。']
    ]);
    entry('matrix',[
      ['numbers','矩阵；按行列排列的数或符号','n.',['矩阵'],'rectangular-symbol-array','Each column of the matrix represents a different measurement.','矩阵的每一列代表一种不同测量值。'],
      ['material','基质；包围或固定其他物质的材料','n.',['基质','脉石'],'surrounding-support-material','The fossil remained embedded in a hard rock matrix.','化石仍嵌在坚硬的岩石基质中。'],
      ['environment','事物形成或发展的环境体系','n.',['母体'],'developmental-context','The study places the poem within the matrix of its social and political setting.','研究把这首诗放在其社会政治环境体系中考察。']
    ]);
    entry('friction',[
      ['physical','摩擦；阻碍物体相对滑动的力','n.',['摩擦'],'physical-resisting-force','Lubrication reduces friction between the moving parts.','润滑减少了活动零件之间的摩擦。'],
      ['conflict','人与群体之间的摩擦；不和','n.',['不和'],'interpersonal-disagreement','Unclear responsibilities caused friction between the departments.','职责不清导致部门之间出现摩擦。']
    ]);
    entry('dilute',[
      ['liquid','稀释；浓度低的或稀释过的','v./adj.',['冲淡','稀释','淡的','稀释的'],'reduce-concentration','The technician diluted the sample before measuring its concentration.','技术人员测定浓度前稀释了样品。'],
      ['weaken','削弱作用、价值或强度','v.',['削弱'],'reduce-effectiveness','Adding too many exceptions would dilute the effect of the rule.','增加过多例外会削弱规则的效果。']
    ]);
    entry('software',[
      ['programs','软件；控制计算机工作的程序','n.',['软件','软设备'],'computer-programs','The software checks the data for missing values before analysis.','软件在分析前检查数据中的缺失值。']
    ]);
    entry('network',[
      ['connections','网络；互相连接的线路、机构或事物','n.',['网络','广播网','网状物'],'connected-system','The rail network links the inland towns with the coast.','铁路网把内陆城镇与海岸连接起来。'],
      ['computers','计算机网络；连接计算机共享信息','n./v.',['计算机联网'],'linked-computers','The schools are networked so that they can share teaching materials.','这些学校的计算机联网，以便共享教学资料。'],
      ['contacts','人际关系网；建立职业联系','n./v.',['人脉'],'professional-contact-group','The conference gives new researchers a chance to network.','会议让新研究人员有机会建立职业联系。']
    ]);
    entry('browser',[
      ['program','浏览器；访问互联网内容的软件','n.',['浏览程序'],'web-browser','The browser displays a warning when a page cannot be loaded.','页面无法加载时，浏览器会显示提示。'],
      ['person','随意翻阅书刊或浏览商品的人','n.',['浏览书本的人'],'casual-browsing-person','The bookshop has comfortable chairs for browsers who want to stay a while.','书店为想逗留片刻的浏览者准备了舒适座椅。']
    ]);
    entry('radar',[
      ['detection','雷达；利用无线电回波定位的系统','n.',['雷达','无线电探测器','雷达图'],'radio-object-detection','Radar detected the approaching vessel through the fog.','雷达透过雾探测到了驶近的船只。'],
      ['awareness','注意范围；某事是否受到关注（比喻搭配）','n.',['关注范围'],'awareness-of-issue','The small project remained off the radar of national newspapers.','这个小项目一直没有受到全国性报纸的关注。','on/off the radar']
    ]);
    entry('lens',[
      ['optical','透镜；相机镜头或眼镜镜片','n.',['透镜','镜头','镜片'],'optical-focusing-element','The new lens allows the camera to capture distant details.','新镜头让相机能够捕捉远处细节。'],
      ['eye','晶状体；眼内聚焦光线的透明结构','n.',['晶状体'],'eye-focusing-lens','The diagram shows the lens behind the pupil.','图示显示了瞳孔后方的晶状体。']
    ]);
    entry('microscope',[
      ['instrument','显微镜；放大微小物体供观察的仪器','n.',['显微镜'],'microscopic-viewing-instrument','Under the microscope, the leaf surface showed a pattern of tiny pores.','显微镜下，叶面显现出细小气孔组成的图案。']
    ]);
    entry('optics',[
      ['science','光学；研究光及光学仪器的学科','n.',['光学'],'science-of-light','The student studied optics before designing the camera system.','学生在设计相机系统之前学习了光学。'],
      ['perception','公众看到的形象或印象；舆论观感','n.',['公众观感'],'public-perception','The committee worried about the optics of holding a lavish dinner during budget cuts.','委员会担心削减预算期间举办奢华晚宴会给公众留下怎样的印象。']
    ]);
    entry('binary',[
      ['numbers','二进制的；只使用0和1的记数制','adj./n.',['二进制的','二进制'],'base-two-system','The device stores each reading in binary.','设备用二进制存储每个读数。'],
      ['two','二元的；分成两个部分或相反类别的','adj./n.',['二元的','由两部分组成的'],'two-part-distinction','The survey avoided a binary choice between complete support and total opposition.','调查避免把选择仅分为完全支持和彻底反对两类。']
    ]);
    entry('digital',[
      ['data','数字的；用离散数据表示或处理的','adj.',['数字的','数字式'],'discrete-data-technology','The archive keeps digital copies of the original maps.','档案馆保存了原始地图的数字副本。'],
      ['display','以数字显示信息的','adj.',['数字显示的'],'numerical-display','The digital display shows the temperature to one decimal place.','数字显示屏把温度显示到小数点后一位。'],
      ['online','与计算机或互联网技术有关的','adj.',['网络技术的'],'computer-internet-related','The course develops digital skills for finding reliable information online.','课程培养在线查找可靠信息的数字技能。']
    ]);
    entry('generator',[
      ['electricity','发电机；产生电力的机器','n.',['发电机'],'electricity-producing-machine','The backup generator supplies electricity during power cuts.','备用发电机在停电时供电。'],
      ['producer','产生某物的设备、人或机构','n.',['产生器','生产者','发生器'],'producer-of-output','The program includes a generator that creates random sample data.','程序包含一个生成随机样本数据的生成器。']
    ]);
    entry('refine',[
      ['purify','精炼；除去杂质使纯净','v.',['精炼','净化','使精炼','被精炼','被净化'],'remove-impurities','The factory refines raw sugar before packaging it.','工厂在包装前精炼原糖。'],
      ['improve','通过细微调整改进方法、想法或设计','v.',['改进'],'improve-by-small-changes','The team refined the survey after testing it with a small group.','团队先用一个小组测试调查，然后对其作了细致改进。']
    ]);
    entry('condense',[
      ['shorten','浓缩内容；缩短文字而保留要点','v.',['压缩','缩短'],'condense-content-time','The editor condensed the long interview into a two-page article.','编辑把长篇访谈浓缩成了一篇两页文章。'],
      ['thicken','去除部分水分使液体浓缩','v.',['浓缩'],'concentrate-liquid','The process condenses milk by removing some of its water.','该过程通过去除部分水分来浓缩牛奶。'],
      ['gas','凝结；使气体变成液体或固体','v.',['凝结','使凝结'],'gas-to-liquid','Water vapour condensed on the cool glass.','水蒸气在凉玻璃上凝结了。']
    ]);
    entry('distil',[
      ['liquid','蒸馏；加热汽化再冷凝以分离或提纯','v.',['vi. 蒸馏','用蒸馏法提取'],'separate-by-vaporization','The apparatus distils water to remove dissolved impurities.','装置通过蒸馏去除水中溶解的杂质。'],
      ['essence','提炼出最重要的内容或精华','v.',['提取...的精华'],'extract-essential-content','The summary distils years of research into a few clear recommendations.','摘要把多年研究提炼成了几条清晰建议。']
    ]);
    entry('ventilation',[
      ['air','通风；新鲜空气的流动或换气系统','n.',['通风','空气流通','换气'],'fresh-air-exchange','The new windows provide better ventilation without mechanical fans.','新窗户无需机械风扇便能改善通风。'],
      ['medical','机械辅助呼吸；向肺内外输送空气','n.',['辅助通气'],'assisted-lung-airflow','The training explains how medical ventilation supports a patient\'s breathing.','培训解释了机械通气如何支持患者呼吸。'],
      ['discussion','公开表达意见以供讨论','n.',['公开讨论'],'airing-opinions','The meeting allowed the ventilation of concerns that had previously been ignored.','会议让此前被忽视的担忧得以公开表达和讨论。']
    ]);
    entry('sewage',[
      ['wastewater','生活污水及其中的排泄废物','n.',['脏水','污水','污物'],'human-wastewater','The plant treats sewage before releasing the water into the river.','处理厂在把水排入河流前处理生活污水。']
    ]);
    entry('pivot',[
      ['axis','枢轴；使物体绕固定点转动','n./v.',['枢轴','支点','旋转运动','枢轴的','(如)在枢轴上转动的','在枢轴上转动','装枢轴于','以...为中心旋转'],'rotation-support-point','The arm pivots around a joint fixed to the base.','机械臂围绕固定在底座上的关节转动。'],
      ['central','关键人物或事物；活动的中心','n.',['中枢','关键人物'],'central-organizing-element','The station became the pivot of the town\'s transport network.','车站成为城镇交通网络的枢纽。'],
      ['change','改变方向、策略或事业路线','v./n.',['随着转移'],'strategic-change-direction','The company pivoted from printed guides to digital learning tools.','公司从印刷指南转向数字学习工具。','pivot from ... to ...']
    ]);
    entry('operate',[
      ['machine','操作机器；机器或系统运转','v.',['操作','运转'],'operate-equipment','The pump operates automatically when the water reaches a certain level.','水达到一定高度时，水泵自动运转。'],
      ['business','经营；开展业务或活动','v.',['活动'],'conduct-business','The organisation operates in several remote regions.','这个组织在几个偏远地区开展业务。'],
      ['medical','给某人动手术','v.',['动手术'],'perform-surgery','The surgeon operated on the damaged joint.','外科医生为受损关节做了手术。','operate on']
    ]);
    entry('transform',[
      ['change','彻底改变外观、性质或状态；改造','v.',['彻底改变','改观','改造','转换','使变形','使转化'],'complete-change','The restoration transformed the abandoned yard into a public garden.','修复工程把废弃院落变成了一座公共花园。']
    ]);
    entry('simplify',[
      ['less-complex','简化；使更容易理解或操作','v.',['单一化','简单化'],'reduce-complexity','Clear diagrams simplify the explanation of the water cycle.','清晰图示使水循环的解释更容易理解。']
    ]);
    entry('innovative',[
      ['new-ideas','创新的；采用或善于提出新想法的','adj.',['革新的','创新的','富有革新精神的'],'new-creative-methods','The school tested an innovative way of teaching practical science.','学校测试了一种教授实践科学的创新方法。']
    ]);
    entry('epic',[
      ['story','史诗；篇幅宏大、通常涉及历史的叙事作品','n./adj.',['史诗','叙事诗','史诗的','叙事诗的'],'long-heroic-narrative','The epic recounts a difficult voyage across an unfamiliar sea.','这部史诗讲述了一次穿越陌生海域的艰难航行。'],
      ['scale','规模宏大、历时长而艰难的','adj.',['宏大的'],'large-arduous-scale','Building the railway was an epic engineering challenge.','修建这条铁路是一项规模宏大的工程挑战。'],
      ['excellent','极好的；令人惊叹的（非正式）','adj.',['极好的'],'informal-excellent','The young visitors described the planetarium show as epic.','年轻访客称天文馆的表演精彩极了。']
    ]);
    entry('museum',[
      ['institution','博物馆；收藏并展示重要物品的机构','n.',['博物馆'],'collection-display-institution','The museum preserves tools used by earlier generations of farmers.','博物馆保存了前几代农民使用的工具。']
    ]);
    entry('belief',[
      ['conviction','相信某事属实的信念；信任','n.',['信念','相信'],'conviction-of-truth','Her belief in the value of education shaped the project.','她对教育价值的信念影响了项目。'],
      ['principle','宗教、道德或生活中的信仰观念','n.',['信仰'],'held-principles','The study compares beliefs about family responsibilities across generations.','研究比较了不同代人对于家庭责任的观念。']
    ]);
    entry('soul',[
      ['spirit','被认为非物质的灵魂；内心情感','n.',['灵魂','心灵','精神','鬼魂'],'inner-spiritual-self','The poem describes a soul searching for peace.','诗歌描述了一个寻求安宁的灵魂。'],
      ['essence','精髓；赋予事物生命力的核心','n.',['精髓'],'essential-character','The old market is often called the soul of the neighbourhood.','旧市场常被称为这个街区的灵魂。'],
      ['person','某种人；一个人（用于描述或计数）','n.',['人'],'individual-person','Not a soul was visible on the platform at dawn.','黎明时站台上一个人影都没有。'],
      ['embodiment','某品质的化身或典型','n.',['化身','典型'],'embodiment-of-quality','Throughout the crisis, she remained the soul of patience.','整个危机期间，她始终是耐心的典范。','the soul of'],
      ['music','灵魂乐；源于非裔美国音乐传统的音乐','n./modifier',['灵魂乐'],'soul-music','The festival programme included jazz and soul.','音乐节节目包括爵士乐和灵魂乐。']
    ]);
    entry('nobility',[
      ['class','贵族阶层；具有较高世袭地位的人','n.',['贵族','贵族阶级'],'hereditary-social-class','The records show how the nobility controlled much of the land.','记录显示贵族阶层如何控制着大量土地。'],
      ['quality','品格高尚；行为的崇高品质','n.',['高尚'],'noble-character','The story emphasises the nobility of helping strangers without reward.','故事强调了不求回报帮助陌生人的高尚品质。']
    ]);
    entry('prosperity',[
      ['success','繁荣；经济成功且生活富足的状态','n.',['繁荣','茂盛','成功'],'economic-thriving','The port brought a period of prosperity to the surrounding towns.','港口给周边城镇带来了一段繁荣时期。']
    ]);
    entry('moral',[
      ['ethics','有关是非的；合乎道德的','adj.',['道德的','品性端正的'],'ethical-right-and-wrong','The committee discussed the moral implications of using the data.','委员会讨论了使用这些数据的道德影响。'],
      ['standards','道德标准；行为准则（常用复数）','n.',['道德','品行'],'standards-of-conduct','The novel questions the morals of a society built on exploitation.','小说质疑了一个建立在剥削之上的社会的道德准则。','morals'],
      ['lesson','故事或经历中的寓意；教训','n.',['寓意'],'lesson-from-story','The moral of the story is that small acts of honesty matter.','故事的寓意是，诚实的小举动也很重要。'],
      ['support','给予信心或情感支持的（特定搭配）','adj.',['精神上的'],'emotional-encouragement','Her colleague came to the interview for moral support.','同事陪她参加面试，为她提供精神支持。','moral support']
    ]);
    entry('immoral',[
      ['wrong','不道德的；违反公认的是非标准的','adj.',['不道德的','邪恶的','放荡的','道德败坏的'],'ethically-wrong','The report described the exploitation of children as immoral.','报告把剥削儿童的行为描述为不道德的。']
    ]);
    entry('alien',[
      ['foreign','外国的；非本国公民的外国人（法律用语）','adj./n.',['外国人','外侨','外国的'],'foreign-noncitizen','The historical document used alien to describe residents without citizenship.','这份历史文件用 alien 指没有本国公民身份的居民。'],
      ['unfamiliar','陌生的；与某种习惯或本性不相容的','adj.',['相异的'],'unfamiliar-incompatible','The practice seemed alien to visitors unfamiliar with local traditions.','不熟悉当地传统的访客觉得这种做法很陌生。'],
      ['space','外星的；外星生物','adj./n.',['外星的'],'extraterrestrial-being','The film imagines how humans might communicate with an alien.','影片设想了人类可能如何与外星生物交流。']
    ]);
    entry('alienate',[
      ['support','使疏远；使失去支持或认同','v.',['使疏远','使不友好','离间'],'lose-support-or-affection','The abrupt decision alienated many long-standing supporters.','突然的决定使许多长期支持者疏远了。'],
      ['belonging','使感到格格不入；使与群体隔绝','v.',['使感到格格不入'],'feel-socially-excluded','The unfamiliar rules alienated new members of the community.','陌生规则让社区新成员感到格格不入。']
    ]);
    entry('expression',[
      ['show','表达思想或感情；表现形式','n.',['表达','表现'],'communication-of-feeling','The sculpture is an expression of the artist\'s concern for the coast.','雕塑表达了艺术家对海岸的关切。'],
      ['face','面部神情；表情','n.',['表情'],'facial-look','Her puzzled expression showed that the explanation was unclear.','她困惑的表情说明解释不够清楚。'],
      ['words','词语；惯用说法或措辞','n.',['词语','措辞'],'particular-wording','The expression has a different meaning in informal conversation.','这个说法在非正式交谈中有不同含义。'],
      ['math','数学表达式；由数和符号组成的式子','n.',['表达式'],'mathematical-expression','The expression contains two variables and a constant.','表达式包含两个变量和一个常数。'],
      ['gene','基因表达；遗传信息产生作用的过程','n.',['基因表达'],'gene-expression','The researchers compared gene expression in the two samples.','研究人员比较了两个样本中的基因表达。']
    ]);
    entry('tense',[
      ['anxious','紧张的；令人焦虑或不安的','adj.',['紧张的'],'anxious-strained','The meeting became tense when the budget cuts were announced.','宣布削减预算时，会议气氛变得紧张。'],
      ['tight','绷紧的；使肌肉或身体紧绷','adj./v.',['拉紧的','(使)紧张','(使)拉紧'],'tighten-muscles','Her shoulders tensed as she waited for the result.','等待结果时，她的肩膀绷紧了。'],
      ['grammar','时态；动词表示时间关系的形式','n.',['时态'],'grammatical-tense','The writer uses the present tense to make the scene feel immediate.','作者用现在时使场景显得就在眼前。']
    ]);
    entry('plural',[
      ['grammar','复数；表示不止一个的词形；复数的','n./adj.',['复数','复数的'],'grammatical-plural','The plural of this noun changes its internal vowel.','这个名词的复数形式要改变词中元音。']
    ]);
    entry('phrase',[
      ['words','短语；构成句子一部分的一组词','n.',['惯用语','词组','成语','短语'],'word-group','The phrase at the end of the sentence identifies the location.','句末短语说明了地点。'],
      ['wording','用特定措辞表达','v.',['措词','用短语表达'],'choose-wording','The question was phrased carefully to avoid suggesting an answer.','问题的措辞经过仔细斟酌，以免暗示答案。'],
      ['music','乐句；旋律中的一个表达单元','n./v.',['乐句','把(乐曲)分成短句'],'musical-phrase','The violinist repeated the opening phrase more softly.','小提琴家更轻柔地重复了开头的乐句。']
    ]);
    entry('communication',[
      ['exchange','沟通；交流思想或信息的过程','n.',['交流'],'exchange-information','Regular communication helped the two teams avoid duplicate work.','经常沟通帮助两个团队避免重复工作。'],
      ['message','传达的消息、信件或公告','n.',['消息'],'transmitted-message','The office sent a written communication confirming the new arrangements.','办公室发出书面通知，确认了新安排。'],
      ['systems','通讯方式、设备或行业（常用复数）','n.',['通讯','通信'],'communication-systems','The storm damaged communications across the island.','风暴破坏了全岛的通讯。','communications']
    ]);
    entry('correspondent',[
      ['reporter','驻外或专题通讯记者','n.',['通讯记者'],'news-correspondent','The science correspondent interviewed the researchers after the launch.','科学记者在发射后采访了研究人员。'],
      ['letter','写信或通信的人','n.',['通信者'],'letter-exchanging-person','The archive preserves letters exchanged with hundreds of correspondents.','档案馆保存了与数百位通信者往来的信件。']
    ]);
    entry('announcer',[
      ['speaker','广播电视播音员；现场节目或赛事宣告员','n.',['节目报告员','宣告者'],'broadcast-event-introducer','The announcer asked passengers to move away from the platform edge.','播音员请乘客远离站台边缘。']
    ]);
    entry('handout',[
      ['document','分发的讲义、资料或宣传印刷品','n.',['分发的印刷品资料','广告物品'],'distributed-information-sheet','The handout summarises the evidence discussed in the seminar.','讲义概括了研讨课中讨论的证据。'],
      ['aid','免费提供的钱物；救济品','n.',['施舍物','救济品'],'free-material-assistance','The programme offers training rather than relying entirely on handouts.','项目提供培训，而不完全依赖救济。']
    ]);
    entry('critical',[
      ['disapproval','批评的；指出问题或表示不赞成的','adj.',['批评的'],'express-disapproval','The review was critical of the weak evidence behind the claim.','评审批评了该主张背后薄弱的证据。'],
      ['analysis','审慎分析优缺点的；有判断力的','adj.',['审辨的'],'analytical-judgment','Students practise critical reading by comparing conflicting sources.','学生通过比较矛盾来源来练习批判性阅读。'],
      ['crucial','至关重要的；对结果有决定作用的','adj.',['决定性的'],'crucial-importance','Reliable water supplies are critical to the success of the settlement.','可靠供水对聚居地的成功至关重要。'],
      ['illness','病情危急的；有生命危险的','adj.',['危险的','危象的'],'life-threatening-condition','The hospital reported that two patients remained in critical condition.','医院报告说，两名患者仍处于危急状态。'],
      ['threshold','临界的；达到发生重要变化的界限的','adj.',['临界的'],'threshold-of-change','The experiment measured the critical temperature at which the material changed state.','实验测量了材料改变状态时的临界温度。']
    ]);
    entry('edit',[
      ['revise','编辑；修订文字或剪辑影像以准备发表','v./n.',['编辑','编校','修订','剪辑','删改'],'prepare-content-for-publication','The team edited the interview to remove repeated explanations.','团队剪辑访谈，删去了重复解释。'],
      ['responsibility','担任编辑；负责刊物的内容','v.',['主编'],'oversee-publication','She edits a journal devoted to the history of medicine.','她主编一本专门研究医学史的期刊。']
    ]);
    entry('artistic',[
      ['arts','艺术或艺术家的；有关艺术创作的','adj.',['艺术的','艺术家的'],'art-related','The museum encourages artistic activity as well as historical study.','博物馆鼓励艺术活动，也鼓励历史研究。'],
      ['talent','有艺术才能或审美能力的','adj.',['富有艺术性的'],'creative-artistic-ability','Her artistic skills helped the team design an engaging exhibition.','她的艺术才能帮助团队设计了引人入胜的展览。']
    ]);
    entry('drama',[
      ['theatre','戏剧；戏剧创作或表演艺术','n.',['戏剧','戏剧艺术'],'dramatic-art','The students used drama to explore a historical disagreement.','学生通过戏剧探索了一场历史分歧。'],
      ['excitement','充满紧张或激动的事件；戏剧性','n.',['戏剧性事件'],'exciting-emotional-event','The rescue brought an unexpected moment of drama to the quiet afternoon.','救援给安静的下午带来了意料之外的紧张时刻。']
    ]);
    entry('perform',[
      ['task','执行；完成工作、动作或职责','v.',['进行','履行','完成','执行'],'carry-out-task','The technician performed the safety checks before opening the laboratory.','技术人员在开放实验室前完成了安全检查。'],
      ['entertain','演出；表演音乐、舞蹈或戏剧','v.',['表演','演出'],'public-artistic-performance','The orchestra performed a new work by a local composer.','乐团演奏了一位当地作曲家的新作品。'],
      ['function','表现得好或差；运行并取得某种效果','v.',['行动','工作'],'operate-with-result','The material performed well under repeated stress.','材料在反复受力下表现良好。']
    ]);
    entry('imitate',[
      ['copy','模仿行为或声音；仿照制作','v.',['模仿','效法','仿造'],'copy-behaviour-model','The young birds imitate sounds made by adults.','幼鸟模仿成年鸟发出的声音。']
    ]);
    entry('painting',[
      ['picture','绘画作品；画作','n.',['画'],'painted-picture','The painting shows the harbour before the modern docks were built.','画作展示了现代码头建成前的港口。'],
      ['activity','绘画；涂刷油漆的活动','n.',['绘画','油漆','涂漆'],'applying-paint','The building will reopen after the painting is finished.','涂漆工作完成后，建筑将重新开放。']
    ]);
    entry('collect',[
      ['gather','收集；使逐渐聚集在一起','v.',['收集','聚集'],'gather-together','Rainwater collects in the shallow depression beside the path.','雨水积聚在小路旁的浅洼地中。'],
      ['hobby','作为爱好收藏某类物品','v.',['收藏'],'hobby-collection','He collects old maps showing changes to the coastline.','他收藏展示海岸线变化的旧地图。'],
      ['money','收取费用；领取应得款项或募集钱物','v.',['募集','领取','收取'],'receive-or-raise-payment','The volunteers collected donations for the damaged community hall.','志愿者为受损社区大厅募集捐款。'],
      ['pick-up','到某处接人或取走物品','v.',['接走'],'pick-up-person-object','Please collect your equipment from the office after the briefing.','说明会后，请到办公室领取设备。'],
      ['calm','恢复镇静；整理思绪','v.',['恢复镇静'],'regain-composure','She paused to collect herself before answering the difficult question.','她停下来定了定神，才回答这个难题。','collect oneself'],
      ['charge','由接收方付费的或以此方式进行的','adj./adv.',['由收件人或受话人付费的','到付地'],'recipient-pays-charge','He asked whether the hotel could accept a collect call.','他询问酒店能否接听由受话方付费的电话。']
    ]);
    entry('jazz',[
      ['music','爵士乐；源于非裔美国音乐传统的音乐形式','n./modifier',['爵士乐','爵士乐的'],'jazz-music','The cafe hosts live jazz every Friday evening.','咖啡馆每周五晚举办现场爵士乐演出。'],
      ['liven','使更活泼、有趣或吸引人','v.',['使活泼'],'make-more-lively','The designer jazzed up the poster with a brighter colour palette.','设计师用更明亮的配色让海报活泼起来。','jazz up'],
      ['perform','演奏爵士乐；随着爵士乐跳舞','v.',['演奏爵士乐','跳爵士舞','奏爵士乐'],'perform-dance-jazz','The band jazzed while couples danced beside the stage.','乐队演奏着爵士乐，一对对舞者在舞台旁起舞。']
    ]);
    entry('energetic',[
      ['energy','精力充沛的；积极有活力的','adj.',['精力充沛的','积极的'],'energetic-strong','The energetic volunteers cleared the path before midday.','干劲十足的志愿者在中午前清理好了小路。']
    ]);
    entry('gym',[
      ['place','健身房；室内体育训练场所','n.',['+体育馆'],'indoor-exercise-facility','The gym has space for both exercise classes and individual training.','健身房既有集体训练课空间，也有个人训练空间。'],
      ['activity','体育课；身体训练活动','n.',['体育训练','体育课','体操'],'physical-exercise-class','The pupils changed their shoes before gym.','学生在上体育课前换了鞋。']
    ]);
    entry('stretch',[
      ['extend','伸展身体；拉长材料；伸展动作','v./n.',['伸展','张开','使过度伸展'],'lengthen-by-pulling','The fabric stretches slightly without losing its shape.','布料可以略微拉伸而不失去形状。'],
      ['span','延伸或持续；一段路程或时间','v./n.',['连绵','一段路','一段时间','延伸'],'extent-in-space-time','The quiet stretch of coast extends beyond the lighthouse.','这段安静的海岸延伸到灯塔以外。'],
      ['resources','使能力或资源达到极限','v.',['使力所不及'],'push-capacity-limit','The extra visitors stretched the museum\'s limited staff.','额外访客让博物馆有限的人手应接不暇。'],
      ['truth','牵强解释；夸大或曲解事实','v.',['曲解'],'overextend-interpretation','Calling the small improvement a breakthrough would stretch the truth.','把这点小改进称为突破，有些夸大事实。'],
      ['elastic','弹性的；可伸缩的','modifier',['可伸缩的','弹性的'],'elastic-material','The jacket includes stretch panels to allow easier movement.','夹克加入了弹性布片，方便活动。']
    ]);
    entry('portfolio',[
      ['case','装图画或文件的大薄夹；作品夹','n.',['皮包','公文包','文件夹'],'flat-document-case','She carried the large drawings in a protective portfolio.','她用保护作品夹携带大幅图纸。'],
      ['work','展示能力的作品集或工作成果集','n.',['艺术代表作选辑'],'representative-work-collection','The applicant included three building designs in her portfolio.','申请者在作品集中放入了三份建筑设计。'],
      ['investment','个人或机构持有的投资组合','n.',['有价证券财产目录'],'investment-holdings-set','The report lists the different assets in the fund\'s portfolio.','报告列出了基金投资组合中的不同资产。'],
      ['office','政府成员负责的事务；部长职务','n.',['部长职务','阁员职务'],'ministerial-responsibility','The new minister took over the education portfolio.','新部长接管了教育事务。']
    ]);
    entry('briefcase',[
      ['bag','公文包；携带办公文件的包','n.',['公事包'],'business-document-case','The lawyer placed the signed papers in her briefcase.','律师把签好的文件放进了公文包。']
    ]);
    entry('shutter',[
      ['window','窗外遮板或商店卷帘；用遮板关闭','n./v.',['百叶窗','关闭物','为...装百叶窗','以百叶窗遮闭'],'window-protective-cover','The shop lowered its metal shutters at closing time.','商店打烊时放下了金属卷帘。'],
      ['camera','相机快门；短暂开启以控制曝光的装置','n.',['照相机快门'],'camera-exposure-gate','A slow shutter speed made the moving water appear blurred.','较慢的快门速度使流动的水显得模糊。'],
      ['close','关闭机构或业务（尤美式）','v.',['关闭业务'],'close-business','The company shuttered the smaller branch after years of losses.','公司在多年亏损后关闭了较小的分支机构。']
    ]);
    entry('pane',[
      ['glass','窗或门上的一块玻璃；窗格','n.',['窗玻璃','方框','方格','窗格'],'flat-window-glass','The broken pane was replaced before the storm arrived.','破裂的窗玻璃在风暴来临前更换了。'],
      ['screen','软件窗口中独立显示内容的窗格','n.',['界面窗格'],'screen-content-section','The preview pane shows the selected page without opening a separate window.','预览窗格无需打开单独窗口就能显示所选页面。']
    ]);
    entry('bolt',[
      ['fastener','螺栓；与螺母配合紧固的金属件','n.',['螺钉'],'threaded-metal-fastener','The engineer checked each bolt holding the steel frame together.','工程师检查了固定钢架的每个螺栓。'],
      ['lock','门闩；插闩锁住门窗','n./v.',['门闩','闩住'],'sliding-door-lock','She bolted the door before leaving through the side entrance.','她从侧门离开前给门上了闩。'],
      ['lightning','一道闪电','n.',['闪电'],'lightning-flash','A bolt of lightning struck the tree beside the field.','一道闪电击中了田边的树。'],
      ['cloth','一卷布料或墙纸','n.',['一卷布'],'roll-of-material','The shopkeeper measured fabric from a large bolt of cotton.','店主从一大卷棉布上量取布料。'],
      ['escape','突然快跑；动物受惊逃走','v.',['脱缰'],'sudden-running-escape','The horse bolted when a branch fell nearby.','附近树枝掉落时，马受惊跑开了。'],
      ['swallow','狼吞虎咽；快速吞下','v.',['囫囵吞下','囫囵吞枣'],'eat-too-quickly','He bolted his lunch before rushing to the meeting.','他匆匆吞下午饭，赶去开会。'],
      ['arrow','弩射出的短箭','n.',['弩箭'],'crossbow-arrow','The museum displayed an iron bolt beside the medieval crossbow.','博物馆在中世纪弩旁展示了一支铁制短箭。']
    ]);
    entry('barrel',[
      ['container','桶；中部鼓起的圆形容器','n.',['桶'],'rounded-storage-container','The barrel collected rainwater from the roof.','桶收集了屋顶流下的雨水。'],
      ['measure','一桶的量；石油等的容量计量单位','n.',['桶量'],'barrel-volume-unit','The chart records oil production in barrels per day.','图表以每天多少桶记录石油产量。'],
      ['gun','枪管；火器的管状部分','n.',['枪管'],'firearm-tube','The restorer cleaned the barrel of the historical firearm.','修复师清理了历史火器的枪管。'],
      ['move','高速或不顾一切地移动','v.',['飞快移动'],'move-very-fast','The empty cart barrelled down the steep track.','空车沿陡峭轨道飞速滑下。']
    ]);
    entry('pail',[
      ['bucket','提桶；通常有弯把手的容器','n.',['桶','提桶'],'handled-bucket','The children filled a pail with water from the pump.','孩子们用水泵把一只提桶装满了水。']
    ]);
    entry('refrigerator',[
      ['cooler','冰箱；低温储存食物的制冷设备','n.',['电冰箱','冷藏库','致冷器'],'food-cooling-appliance','The samples were stored in a laboratory refrigerator.','样本被存放在实验室冰箱中。']
    ]);
    entry('ladder',[
      ['climb','梯子；有横档供攀爬的器具','n.',['梯','梯状物'],'climbing-rungs','The worker secured the ladder before inspecting the gutter.','工人在检查屋檐排水槽前固定好了梯子。'],
      ['progress','晋升阶梯；一系列逐步提高的阶段','n.',['发迹的途径'],'career-progression-stages','The programme offers the first step on a career ladder in conservation.','项目提供了进入自然保护职业发展阶梯的第一步。'],
      ['stocking','长筒袜抽丝的长破口；发生抽丝','n./v.',['袜子抽丝'],'run-in-stocking','A sharp chair edge caused a ladder in her tights.','锋利的椅子边缘让她的连裤袜抽丝了。']
    ]);
    entry('shelf',[
      ['board','搁板；存放物品的水平架板','n.',['架子','搁板'],'horizontal-storage-board','The shelf holds reference books used during the workshops.','搁板上放着工作坊期间使用的参考书。'],
      ['rock','陆架；悬崖上的平坦岩层','n.',['岩架'],'flat-rock-ledge','The divers followed the rock shelf before the seabed dropped steeply.','潜水员沿岩架前行，再往前海底就陡然下降。']
    ]);
    entry('stylish',[
      ['appearance','有格调的；时髦而好看的','adj.',['现代风格的','流行的','潇洒的'],'attractive-fashionable-style','The small hotel has a stylish interior made from simple local materials.','小旅馆用简单的当地材料打造了有格调的室内空间。']
    ]);
    entry('decent',[
      ['acceptable','相当好的；达到令人满意标准的','adj.',['像样的'],'satisfactory-quality','The hostel offers decent accommodation at an affordable price.','旅舍以实惠价格提供了像样的住宿。'],
      ['proper','得体正派的；体谅他人的','adj.',['有分寸的','得体的','大方的'],'proper-kind-behaviour','It was decent of the neighbours to help without being asked.','邻居们不用别人开口就伸出援手，真是厚道。'],
      ['covered','衣着足以见人的（非正式）','adj.',['衣着齐整的'],'sufficiently-dressed','She asked whether everyone was decent before opening the changing-room door.','她在打开更衣室门前问大家是否都穿好了衣服。']
    ]);
    entry('grace',[
      ['movement','动作的优雅；体态之美','n.',['优雅','风度'],'graceful-appearance','The dancer moved across the stage with remarkable grace.','舞者以非凡的优雅穿过舞台。'],
      ['conduct','礼貌从容；体面而有分寸的举止','n.',['体面'],'dignified-considerate-behaviour','She accepted the disappointing result with grace.','她体面从容地接受了令人失望的结果。'],
      ['mercy','仁慈；神的恩典或赦免','n.',['慈悲','恩惠','赦免','恩典'],'benevolent-divine-favour','The hymn gives thanks for divine grace.','赞美诗为神的恩典表达感谢。'],
      ['prayer','饭前或饭后的谢恩祷告','n.',['谢恩祷告'],'meal-thanksgiving-prayer','The family said grace before the meal began.','用餐前，一家人作了谢恩祷告。'],
      ['time','宽限期；额外允许的时间','n.',['宽限期'],'extra-time-allowed','The library gave borrowers a week\'s grace before charging overdue fees.','图书馆给借阅者一周宽限期，之后才收逾期费。'],
      ['adorn','使增色；为某处或活动带来光彩','v.',['使优美'],'add-beauty-or-honour','A painted ceiling graces the entrance hall.','彩绘天花板为门厅增添了光彩。']
    ]);
    entry('elegance',[
      ['grace','优雅；外观或举止的高雅','n.',['高雅','典雅','优雅'],'graceful-appearance','The room\'s elegance comes from its proportions rather than expensive decoration.','房间的典雅源于比例，而不是昂贵装饰。'],
      ['solution','方法或解释的简洁巧妙','n.',['简洁巧妙'],'simple-effective-solution','The elegance of the proof lies in its single clear argument.','证明的巧妙在于它仅用了一条清晰论证。']
    ]);
    entry('clothe',[
      ['dress','给人提供衣服；为……穿衣','v.',['给...穿衣'],'provide-clothing','The charity helps to feed and clothe families affected by the flood.','慈善机构帮助受洪水影响的家庭解决衣食问题。'],
      ['cover','覆盖；使具有某种外观或形式（正式）','v.',['盖上','赋予'],'cover-or-dress-in-form','The hills were clothed in thick mist at dawn.','黎明时，群山被浓雾覆盖。']
    ]);
    entry('sew',[
      ['stitch','缝纫；用针线制作、连接或缝合','v.',['缝纫','缝合','缝'],'join-with-needle-thread','She sewed a strong patch over the torn pocket.','她在破口袋上缝了一块结实的补丁。']
    ]);
    entry('spin',[
      ['rotate','旋转；使快速转动','v./n.',['旋转','自旋','使旋转'],'rotate-around-axis','The wheel continued to spin after the motor stopped.','电动机停下后，轮子仍在旋转。'],
      ['thread','纺纱；生物吐丝或结网','v.',['纺织','纺','纺纱','吐丝','作茧','结网'],'produce-thread','The workshop demonstrates how wool is spun into yarn.','工作坊演示羊毛如何被纺成纱线。'],
      ['story','编织故事；有意按某角度解释信息','v./n.',['编造'],'present-particular-version','The announcement put a positive spin on the disappointing figures.','公告对令人失望的数据作了正面解读。'],
      ['drive','短途兜风；乘车或骑车一游','n.',['疾驰'],'short-pleasure-ride','They took the repaired bicycle for a spin around the park.','他们骑着修好的自行车在公园里兜了一圈。'],
      ['dizzy','感到头晕或混乱','v./n.',['头晕'],'dizzy-disoriented-state','Her head was spinning after hours of conflicting explanations.','听了几小时相互矛盾的解释，她头都晕了。']
    ]);
    entry('stripe',[
      ['line','与背景颜色不同的长条纹或带状纹','n.',['斑纹','条纹','纹'],'contrasting-colour-band','A bright stripe along the sleeve makes the jacket easier to see.','袖子上的亮色条纹让夹克更容易被看见。'],
      ['type','某一种类或立场（尤美式）','n.',['类型'],'particular-variety','The forum welcomed environmental campaigners of every stripe.','论坛欢迎各类环保活动人士参加。','of every stripe']
    ]);
    entry('patch',[
      ['area','与周围不同的一小块区域；工作辖区','n.',['片','斑'],'small-distinct-area','A patch of wild flowers survived beside the road.','路边保留了一小片野花。'],
      ['repair','补丁；缝补或修补破损处','n./v.',['补缀','碎片','修补'],'repair-piece','The old roof was patched until a full repair could be arranged.','旧屋顶先补了补，等以后安排全面维修。'],
      ['skin','贴在皮肤上的小片材料或药贴','n.',['皮肤贴片'],'skin-applied-patch','The trial compared the adhesive strength of several skin patches.','试验比较了几种皮肤贴片的黏附强度。'],
      ['software','用于修复软件问题的补丁；打补丁','n./v.',['软件补丁'],'software-correction-update','The patch corrected a fault that caused the program to close.','补丁修正了导致程序关闭的故障。'],
      ['period','某种状况持续的一段时间','n.',['一段时期'],'period-with-characteristic','The business went through a difficult patch before demand recovered.','需求恢复之前，企业经历了一段困难时期。'],
      ['reconcile','修复关系；解决分歧','v.',['平息'],'repair-disagreement','The neighbours patched up their disagreement about the shared path.','邻居们解决了关于共用小路的分歧。','patch up']
    ]);
    entry('rag',[
      ['cloth','破布；抹布；破旧衣物（常用复数）','n.',['碎布','抹布','破旧衣服'],'worn-cloth','The mechanic wiped the oil from her hands with a rag.','机械师用抹布擦去了手上的油。'],
      ['publication','质量低劣的报纸或杂志（贬义）','n.',['低劣报刊'],'poor-quality-newspaper','He dismissed the sensational newspaper as a rag.','他把那份耸人听闻的报纸贬为低劣小报。'],
      ['tease','取笑或戏弄（非正式）','v.',['揶揄','戏弄'],'tease-someone','His friends ragged him gently about arriving in mismatched socks.','朋友们拿他穿着不配对的袜子到场这件事善意地取笑他。']
    ]);
    entry('menu',[
      ['food','菜单；可供选择的餐食清单','n.',['菜单'],'available-food-list','The menu clearly identifies dishes containing nuts.','菜单清楚标明了含坚果的菜品。'],
      ['choices','程序中供选择操作的菜单；选项清单','n.',['(功能)选择单'],'available-action-list','Choose the language from the menu before starting the exercise.','开始练习前，从菜单中选择语言。']
    ]);
    entry('snack',[
      ['food','正餐之间的小吃或少量餐食；吃零食','n./v.',['小吃','点心','快餐','吃零食','吃快餐'],'small-between-meals-food','The walkers stopped for a snack before crossing the ridge.','徒步者在翻越山脊前停下来吃了点东西。']
    ]);
    entry('supper',[
      ['meal','晚餐；夜间较晚吃的一顿便餐','n.',['晚餐'],'evening-meal','The family shared a simple supper after the long journey.','长途旅行后，一家人一起吃了顿简单晚餐。']
    ]);
    entry('grain',[
      ['crop','谷物；植物的谷粒或种子','n.',['谷粒','谷类'],'cereal-grain','The harvest was stored as dry grain in covered bins.','收获的谷物晒干后储存在有盖粮仓中。'],
      ['particle','细小颗粒；很少的一点','n.',['颗粒'],'tiny-particle-amount','A grain of sand was trapped inside the camera.','一粒沙子卡在了相机里。'],
      ['texture','木材等的纹理；纤维方向','n.',['纹理'],'material-fibre-direction','The carpenter cut along the grain to avoid splitting the wood.','木匠顺着纹理切割，以免木头劈裂。']
    ]);
    entry('wheat',[
      ['crop','小麦；用于制面粉的小麦谷粒','n.',['小麦'],'wheat-cereal','The farm grows wheat on the drier fields.','农场在较干燥的田地里种植小麦。']
    ]);
    entry('porridge',[
      ['food','用燕麦等谷物煮成的热粥','n.',['粥','糊'],'cooked-cereal-porridge','A bowl of warm porridge was served before the early departure.','清早出发前，端上了一碗热粥。']
    ]);
    entry('peel',[
      ['skin','果蔬的皮；削皮或剥壳','n./v.',['皮','外壳','削...皮','剥去...的壳'],'fruit-vegetable-covering','She peeled the potatoes and saved the skins for compost.','她削好土豆，把皮留下堆肥。'],
      ['layer','表层逐渐剥落；小心揭下一层','v.',['蜕皮','剥落','脱皮'],'remove-or-lose-surface-layer','The old paint began to peel after water entered the wall.','水渗入墙体后，旧油漆开始剥落。']
    ]);
    entry('hull',[
      ['ship','船体；船的主体外壳','n.',['船体'],'main-ship-body','The survey found damage to the hull below the waterline.','检查发现船体水线以下有损伤。'],
      ['plant','果实或种子的外壳；去掉外壳或蒂叶','n./v.',['壳','皮','去壳'],'plant-outer-covering','The machine separates the grain from its hull.','机器把谷粒与外壳分离。']
    ]);
    entry('vanilla',[
      ['flavour','香草；香子兰及其用于调味的产物','n./modifier',['香草','香子兰'],'vanilla-flavouring','The recipe uses a small amount of vanilla to flavour the custard.','食谱用少量香草给蛋奶酱调味。'],
      ['basic','基础标准的；没有额外功能的','adj.',['基础款的'],'basic-without-extras','The vanilla version of the program has no optional extensions.','程序的基础版本没有可选扩展。']
    ]);
    entry('ginger',[
      ['spice','姜；姜味的；用姜调味','n./modifier/v.',['姜','用姜调味'],'ginger-spice','Fresh ginger gives the soup a warm, spicy flavour.','鲜姜让汤带有温暖的辛香味。'],
      ['colour','姜黄色或红褐色；这种颜色的','n./adj.',['姜黄色','姜黄色的'],'ginger-brown-colour','A ginger cat slept beside the kitchen window.','一只姜黄色猫在厨房窗边睡觉。'],
      ['liveliness','活力；使活泼或振奋（非正式）','n./v.',['精力','使活泼','使有生气'],'make-more-lively','The speaker gingered up the presentation with a few lively examples.','演讲者用几个生动例子让报告活跃起来。','ginger up']
    ]);
    entry('mansion',[
      ['house','大型豪华住宅；宅邸','n.',['大厦','宅邸'],'large-luxury-house','The former mansion now houses a small public museum.','昔日宅邸如今设有一座小型公共博物馆。']
    ]);
    entry('apartment',[
      ['home','一套公寓；建筑内独立的一组住房','n.',['公寓'],'self-contained-flat','The apartment has a small kitchen overlooking the courtyard.','公寓的小厨房面向庭院。'],
      ['grand-rooms','宫殿等中的一套大型房间（常用复数）','n.',['房间'],'grand-suite-of-rooms','Visitors can tour the royal apartments during the summer.','游客可以在夏季参观王室套房。','apartments']
    ]);
    entry('lodge',[
      ['building','乡间小屋；门房；供休闲住宿的房舍','n.',['小屋','门房','旅舍'],'small-country-building','The lodge stands beside the path into the forest.','小屋坐落在通往森林的小路旁。'],
      ['branch','社团等的地方分会及聚会处','n.',['支部','分会'],'local-association-branch','The local lodge organised a meeting for all its members.','地方分会为全体会员组织了一次会议。'],
      ['stay','暂住或寄宿；为人安排住处','v.',['临时住宿','寄宿','投宿','安顿','容纳'],'stay-in-paid-lodgings','She lodged with a local family during the field course.','野外课程期间，她寄宿在当地一家人家里。'],
      ['submit','正式提交申请、投诉或抗议','v.',['提出'],'formally-submit','The residents lodged a complaint about the night-time noise.','居民正式投诉了夜间噪声。'],
      ['stuck','卡住；嵌入而停留','v.',['把...射入'],'become-stuck','A piece of debris lodged in the narrow pipe.','一块碎屑卡在了细管中。'],
      ['deposit','把物品存放在安全处','v.',['存放'],'deposit-for-safekeeping','The documents were lodged with the solicitor until the sale was complete.','交易完成前，文件交由律师保管。']
    ]);
    entry('villa',[
      ['house','乡间别墅；度假用住宅','n.',['别墅'],'country-holiday-house','The family rented a villa overlooking the coast.','一家人租了一栋俯瞰海岸的别墅。']
    ]);
    entry('cabin',[
      ['house','简陋的小屋；木屋','n.',['小屋'],'small-simple-house','The researchers stayed in a cabin near the observation site.','研究人员住在观测点附近的一间木屋里。'],
      ['transport','船上住舱；飞机客舱或驾驶舱','n.',['客舱'],'enclosed-transport-space','The crew checked the cabin before passengers boarded.','乘客登机前，机组人员检查了客舱。']
    ]);
    entry('lobby',[
      ['entrance','大厅；公共建筑入口处的空间','n.',['大厅','休息室'],'public-entrance-hall','The group waited in the hotel lobby for their guide.','一行人在酒店大厅等候向导。'],
      ['influence','游说官员；争取政策支持的团体','v./n.',['游说议员者','游说议员','游说'],'pressure-political-decision','The cycling lobby asked the council for safer junctions.','自行车游说团体要求议会改善路口安全。']
    ]);
    entry('radiator',[
      ['room','暖气片；向室内散热的装置','n.',['暖气装置'],'room-heating-device','The radiator beneath the window keeps the room warm.','窗下的暖气片让房间保持温暖。'],
      ['engine','发动机等的散热器','n.',['散热器'],'engine-cooling-device','The mechanic checked the radiator after the engine overheated.','发动机过热后，机械师检查了散热器。']
    ]);
    entry('suspension',[
      ['pause','暂时中止活动、服务或资格','n.',['暂停','中止'],'temporary-stoppage','The bridge inspection led to a temporary suspension of bus services.','桥梁检查导致公交服务暂时停运。'],
      ['support','悬挂；通过拉索等承托的状态','n.',['悬挂'],'hanging-support','The model demonstrates the suspension of the deck from steel cables.','模型演示了桥面如何由钢索悬吊。'],
      ['vehicle','车辆悬架；减轻路面震动的系统','n.',['车辆悬架'],'vehicle-shock-support','The new suspension improves comfort on rough roads.','新悬架改善了崎岖路面上的乘坐舒适度。'],
      ['mixture','悬浮液；固体颗粒不溶解而悬浮的混合物','n.',['悬浮','悬浮体','悬浮液'],'suspended-solid-mixture','The sample contained a suspension of fine clay particles.','样品含有细黏土颗粒的悬浮液。']
    ]);
    entry('assembly',[
      ['gathering','集会；聚集的一群人或学校大会','n.',['集会','集合','与会者'],'organized-gathering','The headteacher spoke about the new library at morning assembly.','校长在晨会上介绍了新图书馆。'],
      ['legislature','议会；具有决策或立法职能的代表机构','n.',['议会'],'legislative-assembly','The regional assembly debated the transport proposal.','地区议会辩论了交通提案。'],
      ['construction','装配；把部件组装成整体','n.',['装配','组装'],'putting-parts-together','The instructions explain the assembly of the folding table.','说明解释了折叠桌的组装方法。'],
      ['unit','组装成的零件组合；组件','n.',['组件'],'assembled-component-unit','The damaged pump assembly was replaced as a single unit.','损坏的水泵组件被作为一个整体更换。']
    ]);
    entry('furnish',[
      ['furniture','为房屋等配备家具','v.',['装设'],'equip-with-furniture','The charity furnished the new flat with donated tables and beds.','慈善机构用捐来的桌子和床为新公寓配了家具。'],
      ['supply','提供所需资料、证据或物品（正式）','v.',['供给','提供','供应'],'supply-needed-items','The survey furnished evidence of a growing demand for evening classes.','调查提供了夜校课程需求增长的证据。']
    ]);
    entry('pilot',[
      ['aviator','飞机驾驶员；驾驶飞机','n. / v.',['飞行员','驾驶'],'aircraft-pilot','An experienced pilot landed the aircraft safely in thick fog.','一位经验丰富的飞行员在浓雾中将飞机安全降落。'],
      ['harbour','引航员；引导船舶通过港口或危险水域','n. / v.',['领航员','领航'],'harbour-navigation','A local pilot guided the tanker through the narrow harbour entrance.','一位当地引航员引导油轮通过狭窄的港口入口。'],
      ['trial','试点；试验性的；先试行以评估效果','n. / adj. / v.',['试用','试点的'],'preliminary-trial','The council will pilot the recycling scheme in three neighbourhoods.','市政委员会将在三个社区试行这项回收计划。'],
      ['guide','引导方案等顺利通过程序（正式）','v.',['引导'],'guide-through-process','The minister piloted the education bill through parliament.','部长引导教育法案在议会完成审议。'],
      ['flame','长明火；燃气设备中用于点火的小火焰','n.',['长明火'],'gas-pilot-flame','The technician checked the pilot before restarting the gas heater.','技术人员在重启燃气取暖器之前检查了长明火。']
    ]);
    entry('visa',[
      ['entry-permit','签证；允许进入、离开或停留于某国的官方许可','n.',['签证'],'travel-entry-permit','She applied for a student visa before accepting the university offer.','她在接受大学录取之前申请了学生签证。']
    ]);
    entry('atlas',[
      ['maps','地图集；某一领域的图解资料集','n.',['地图集','图表集'],'collection-of-maps','The atlas shows how the coastline changed over two centuries.','这本地图集展示了海岸线在两个世纪间的变化。'],
      ['vertebra','寰椎；支撑头骨的第一颈椎（解剖学）','n.',['寰椎'],'first-cervical-vertebra','The atlas supports the skull and helps the head move.','寰椎支撑头骨，并帮助头部活动。']
    ]);
    entry('lane',[
      ['road','乡间小路；狭窄街巷','n.',['小路','巷','弄'],'narrow-road','The lane behind the church leads to a small orchard.','教堂后面的小路通向一片小果园。'],
      ['strip','车道；跑道或泳道等划分出的通道','n.',['车道','跑道','泳道'],'designated-travel-strip','Keep in the left lane until you reach the next junction.','在到达下一个路口之前，请保持在左侧车道行驶。']
    ]);
    entry('ambulance',[
      ['vehicle','救护车；运送病人或伤者的专用车辆','n.',['救护车'],'emergency-medical-vehicle','An ambulance took the injured cyclist to hospital.','救护车将受伤的骑车人送往医院。']
    ]);
    entry('lorry',[
      ['truck','卡车；运送重物或货物的载重汽车（英式）','n.',['卡车','货车','载重汽车'],'freight-road-vehicle','The lorry delivered fresh vegetables to the market before dawn.','卡车在天亮前将新鲜蔬菜送到了市场。']
    ]);
    entry('tyre',[
      ['wheel-cover','轮胎；车轮外缘的充气或实心橡胶圈（英式）','n.',['轮胎'],'rubber-wheel-cover','Check the pressure in each tyre before a long journey.','长途出行前，请检查每个轮胎的气压。']
    ]);
    entry('wreck',[
      ['remains','失事船只；严重损坏的车辆、建筑物等残骸','n.',['失事','残骸'],'wrecked-object-remains','Divers found the wreck of a fishing boat near the reef.','潜水员在礁石附近发现了一艘渔船的残骸。'],
      ['destroy','严重损坏；毁掉计划、生活等','v.',['破坏','使失事','拆毁'],'severe-destruction','A sudden storm wrecked their plans for an outdoor concert.','一场突如其来的暴风雨毁掉了他们举办露天音乐会的计划。'],
      ['person','身心疲惫或情绪崩溃的人（非正式）','n.',['身心俱疲的人'],'exhausted-distressed-person','After three sleepless nights, he felt like a complete wreck.','连续三个夜晚没有睡觉后，他觉得自己身心俱疲。']
    ]);
    entry('aboard',[
      ['transport','在船、飞机或其他交通工具上；上船、登机或上车','adv. / prep.',['在船上','在飞机或车辆上','上船','登机','上车'],'on-board-transport','All passengers must be aboard the ferry ten minutes before departure.','所有乘客必须在开船前十分钟登上渡轮。']
    ]);
    entry('stern',[
      ['strict','严厉的；严肃而不宽容的','adj.',['严厉的','严格的'],'strict-disapproving','The coach gave the team a stern warning about arriving late.','教练就迟到问题严厉警告了全队。'],
      ['demanding','严峻的；需要坚定应对的','adj.',['严峻的'],'demanding-serious-test','The mountain stage will be a stern test of the riders’ endurance.','山地赛段将严峻考验车手的耐力。'],
      ['ship','船尾；船体后部','n.',['尾部','船尾'],'rear-of-vessel','Two lifeboats were secured near the stern of the ship.','两艘救生艇被固定在船尾附近。']
    ]);
    entry('conservative',[
      ['traditional','保守的；倾向维护传统、反对剧烈变革的；保守派人士','adj. / n.',['保守的','守旧的'],'traditional-political-outlook','The proposal faced opposition from conservative members of the committee.','该提案遭到委员会中保守派成员的反对。'],
      ['appearance','衣着或风格传统而不过分时髦的','adj.',['传统稳重的'],'traditional-appearance','She chose a conservative suit for the formal interview.','她为正式面试挑选了一套传统稳重的西装。'],
      ['estimate','估计谨慎偏低的；投资等稳健、少冒险的','adj.',['谨慎的','稳健的'],'cautious-low-risk','Even a conservative estimate puts the repair cost above ten thousand pounds.','即使谨慎估计，维修费用也超过一万英镑。']
    ]);
    entry('minister',[
      ['government','部长；负责政府某一部门的高级官员','n.',['部长'],'government-department-head','The health minister announced funding for rural clinics.','卫生部长宣布为乡村诊所提供资金。'],
      ['religion','牧师；主持宗教活动的教职人员','n.',['牧师'],'religious-minister','A local minister conducted the wedding in the village church.','一位当地牧师在村里的教堂主持了婚礼。'],
      ['diplomat','公使；地位通常低于大使的外交代表','n.',['公使'],'diplomatic-minister','The minister represented his country in negotiations with the host government.','公使代表本国与驻在国政府进行了谈判。'],
      ['care','照料；满足他人需要（minister to，正式）','v.',['服侍','救助'],'attend-to-needs','Volunteers ministered to the needs of families displaced by the flood.','志愿者照顾了因洪水而流离失所的家庭的需要。','minister to someone / their needs']
    ]);
    entry('mayor',[
      ['leader','市长；城镇的主要民选或礼仪性领导人','n.',['市长'],'municipal-leader','The mayor opened a new pedestrian bridge across the river.','市长为一座横跨河流的新步行桥揭幕。']
    ]);
    entry('bureau',[
      ['office','政府部门、局；提供信息等服务的办事处','n.',['局','办公处','司','处'],'specialized-office','The tourist bureau provides free maps of the old town.','旅游咨询处免费提供古城区地图。'],
      ['furniture','带抽屉的写字台；五斗柜（美式）','n.',['写字台','五斗柜'],'drawer-writing-furniture','She kept the old letters in a drawer of the wooden bureau.','她把旧信件保存在木制写字台的一个抽屉里。']
    ]);
    entry('dominate',[
      ['control','支配；控制；在竞争或活动中占主要优势','v.',['支配','占优势'],'dominant-control','A few large firms dominate the national mobile phone market.','少数大公司主导着全国的手机市场。'],
      ['prominence','在视觉上占据突出位置；成为最显著的特征','v.',['占据显著位置'],'visual-prominence','A medieval castle dominates the skyline above the harbour.','一座中世纪城堡在港口上方的天际线上格外显眼。']
    ]);
    entry('influential',[
      ['influence','有影响力的；能够影响他人的决定或行为的','adj.',['有影响的','有势力的'],'capacity-to-influence','Her research became influential in the debate on urban transport.','她的研究在城市交通问题的讨论中产生了重要影响。']
    ]);
    entry('immigration',[
      ['settlement','移民；为长期居住而迁入另一国家的过程','n.',['移民','移居'],'inward-international-migration','Immigration has contributed to the city’s linguistic diversity.','移民促进了这座城市的语言多样性。'],
      ['control','入境检查；负责检查护照和入境资格的部门或地点','n.',['入境检查'],'border-entry-control','We waited at immigration for nearly an hour after the flight landed.','飞机降落后，我们在入境检查处等了将近一个小时。']
    ]);
    entry('preference',[
      ['liking','偏爱；相对更喜欢的事物或选择','n.',['偏爱','喜爱物'],'relative-liking','The survey found a strong preference for quieter study spaces.','调查发现，人们明显更喜欢安静的学习空间。'],
      ['priority','优先权；优先考虑或给予的待遇','n.',['优先'],'preferential-priority','Preference will be given to applicants with relevant experience.','具有相关经验的申请者将被优先考虑。']
    ]);
    entry('prospect',[
      ['possibility','可能性；对将来某件事的预期','n.',['可能性','机会'],'future-possibility','The prospect of studying abroad encouraged her to improve her English.','出国学习的可能性促使她提高英语水平。'],
      ['success','前景；取得成功或发展的机会（常用复数）','n.',['前景','前途'],'future-success-opportunities','The new railway should improve employment prospects in the region.','新铁路应能改善该地区的就业前景。'],
      ['candidate','潜在客户；有望成功的候选人','n.',['潜在客户','有望成功的人'],'promising-person-customer','The sales team contacted several prospects after the exhibition.','展会结束后，销售团队联系了几位潜在客户。'],
      ['view','景色；从某处看到的开阔景象（正式）','n.',['景象'],'wide-scenic-view','The terrace offers a fine prospect of the valley below.','从露台上可以饱览下方山谷的美景。'],
      ['mineral','勘探；寻找矿物、石油等资源','v.',['勘探','探矿'],'search-for-minerals','Geologists prospected for copper in the remote mountains.','地质学家在偏远山区勘探铜矿。','prospect for minerals / oil']
    ]);
    entry('viewpoint',[
      ['opinion','观点；看待问题的角度','n.',['观点'],'perspective-opinion','The article examines the policy from a parent’s viewpoint.','这篇文章从家长的角度审视了该政策。'],
      ['place','观景点；可以看到特定景色的位置','n.',['观景点'],'scenic-viewing-place','A short path leads to a viewpoint above the waterfall.','一条短小径通向瀑布上方的观景点。']
    ]);
    entry('afford',[
      ['resources','负担得起费用；抽得出时间或精力','v.',['买得起','足以'],'sufficient-resources','Many students cannot afford to rent a flat near the campus.','许多学生负担不起校园附近公寓的租金。','afford something / to do something'],
      ['risk','承担得起某种后果或风险（通常用于否定句）','v.',['承担得起'],'tolerate-costly-consequence','We cannot afford to ignore the warning signs of water pollution.','我们承受不起忽视水污染预警信号的后果。','cannot afford to do something'],
      ['provide','提供机会、便利或保护等（正式）','v.',['给予'],'provide-opportunity-protection','The thick walls afford some protection from the summer heat.','厚墙能够一定程度上抵御夏季的炎热。']
    ]);
    entry('insure',[
      ['insurance','为……投保；承保；购买保险以防损失','v.',['保险','投保'],'insurance-contract-action','They insured the equipment against theft before shipping it abroad.','他们在把设备运往国外之前为其投保了盗窃险。','insure something against a risk'],
      ['ensure','确保；使某事必然发生（主要为美式用法）','v.',['确保'],'make-certain','Careful preparation helps insure that the experiment can be repeated.','细致的准备有助于确保实验能够重复进行。']
    ]);
    entry('insurance',[
      ['cover','保险；以缴费换取特定损失赔付的安排及相关业务','n.',['保险','保险业'],'financial-risk-cover','Travel insurance covered the cost of replacing her lost luggage.','旅行保险赔付了她更换遗失行李的费用。'],
      ['precaution','预防措施；应对不利情况的保障','n.',['预防措施'],'precautionary-protection','Keeping a second copy is useful insurance against accidental data loss.','保留第二份副本是防止数据意外丢失的有效保障。']
    ]);
    entry('bid',[
      ['auction','出价；竞价；提出的购买价格','n. / v.',['出价'],'auction-price-offer','She bid two hundred pounds for the antique clock.','她为那座古董钟出价两百英镑。'],
      ['tender','投标；为争取合同而提出的报价或方案','n. / v.',['投标'],'contract-tender','Three companies submitted bids to build the new station.','三家公司提交了修建新车站的投标方案。'],
      ['attempt','争取；力图实现某事的尝试','n.',['请求'],'attempt-to-achieve','The city improved its transport system in a bid to reduce congestion.','这座城市改善了交通系统，力图缓解拥堵。','a bid to do something / for something'],
      ['formal','吩咐；向人致以问候、告别等（正式）','v.',['命令','吩咐','表示'],'formal-command-greeting','The host bid the departing guests farewell at the door.','主人在门口向离去的客人道别。','bid someone farewell / welcome; bid someone do something']
    ]);
    entry('estate',[
      ['land','大片地产；通常带有住宅的乡间土地','n.',['不动产','房地产'],'large-land-property','The estate includes farmland, woodland and a nineteenth-century house.','这片地产包括农田、林地和一座十九世纪的房屋。'],
      ['development','统一规划的住宅区或工业区（英式）','n.',['住宅区','工业区'],'planned-building-development','A new bus route connects the housing estate to the town centre.','一条新公交线路把住宅区与市中心连接起来。'],
      ['assets','个人财产总额；尤指死后留下的遗产','n.',['财产','遗产'],'total-personal-assets','Her estate was divided equally between her two children.','她的遗产由两个孩子平分。'],
      ['car','旅行车；后部有较大载物空间的汽车（英式）','n.',['旅行车'],'estate-car','They hired an estate to carry the camping equipment.','他们租了一辆旅行车来装运露营装备。','an estate / estate car']
    ]);
    entry('legacy',[
      ['bequest','遗赠；由遗嘱留下的钱财或物品','n.',['遗赠物','遗产'],'testamentary-bequest','A legacy from a former student funded the library extension.','一位校友留下的遗赠资助了图书馆扩建。'],
      ['influence','遗留影响；过去留下并持续作用的事物或后果','n.',['祖先传下来之物'],'lasting-past-influence','The abandoned mines are a lasting legacy of the region’s industrial past.','废弃矿井是该地区工业历史留下的持久印记。'],
      ['technology','遗留的；仍在使用但已较陈旧的技术或系统','adj.',['遗留系统的'],'older-retained-technology','The bank replaced its legacy software in carefully planned stages.','银行分阶段、按周密计划更换了其旧有软件。']
    ]);
    entry('wage',[
      ['pay','工资；通常按小时、天或周计算的劳动报酬','n.',['工资'],'employment-pay','The workers negotiated a higher hourly wage.','工人们通过谈判争取到了更高的时薪。'],
      ['campaign','发动、进行战争、斗争或运动','v.',['开展','进行'],'conduct-war-campaign','Residents are waging a campaign against illegal dumping.','居民们正在开展反对非法倾倒垃圾的行动。','wage war / a campaign / a struggle']
    ]);
    entry('personnel',[
      ['staff','全体工作人员；职员','n.',['人员','全体人员','职工'],'organization-staff','Only trained personnel may enter the laboratory.','只有受过培训的工作人员才可进入实验室。'],
      ['department','人事部门；与雇员招聘和管理有关的工作','n.',['人事部门','人事科(处)','人事'],'human-resources-function','Please send your updated address to personnel.','请把更新后的地址交给人事部门。']
    ]);
    entry('resign',[
      ['leave','辞职；辞去职务或退出组织','v.',['辞职'],'voluntary-job-departure','The director resigned after ten years in the role.','主任任职十年后辞职了。'],
      ['accept','无奈地接受；使自己顺从无法改变的情况','v.',['使顺从','屈从'],'reluctant-acceptance','She resigned herself to spending the weekend finishing the report.','她无奈地接受了要用整个周末完成报告这件事。','resign oneself to something / doing something']
    ]);
    entry('collaborate',[
      ['joint-work','合作；共同研究、创作或完成工作','v.',['合作','合著'],'joint-productive-work','Engineers collaborated with biologists to design the monitoring device.','工程师与生物学家合作设计了监测装置。'],
      ['enemy','与敌方合作；通敌','v.',['勾结','通敌'],'enemy-collaboration','The historian examined evidence that officials had collaborated with the occupying forces.','历史学家查阅了官员曾与占领军合作的证据。']
    ]);
    entry('restrict',[
      ['limit','限制数量、范围、行动或使用资格；约束','v.',['限制','限定','约束'],'impose-limits','The reserve restricts visitor numbers to protect nesting birds.','保护区限制游客数量，以保护筑巢的鸟类。','restrict something to someone / something']
    ]);
    entry('supervise',[
      ['oversee','监督；指导并确保工作或活动正确、安全进行','v.',['监督','管理','指导'],'oversee-activity','A qualified instructor supervised the students during the experiment.','一位具备资质的指导老师在实验期间监督学生操作。']
    ]);
    entry('condemn',[
      ['criticize','强烈谴责；公开表示某事不可接受','v.',['责备','谴责'],'strong-public-disapproval','The organization condemned attacks on medical workers.','该组织强烈谴责针对医护人员的袭击。'],
      ['sentence','判处刑罚；使注定遭受不幸的处境','v.',['判刑','定罪','宣告有罪'],'sentence-or-doom','The court condemned the prisoner to life imprisonment.','法庭判处该囚犯终身监禁。','condemn someone to something'],
      ['unsafe','宣布建筑物、食品等不安全或不宜使用','v.',['宣布不宜使用'],'officially-unfit','Inspectors condemned the building after finding severe structural damage.','检查人员发现严重的结构损坏后，宣布该建筑不宜使用。']
    ]);
    entry('bribe',[
      ['corruption','贿赂；为谋取不当利益而给钱物；所给的钱物','n. / v.',['贿赂','收买','行贿'],'corrupt-inducement','The contractor offered a bribe to obtain confidential bidding information.','承包商试图行贿，以获取保密的投标信息。']
    ]);
    entry('stigma',[
      ['disgrace','污名；与某事相关的社会偏见或耻辱','n.',['耻辱','污名'],'social-discredit','The campaign aims to reduce the stigma surrounding mental illness.','这项宣传活动旨在减少围绕精神疾病的污名。'],
      ['flower','柱头；花中承接花粉的雌蕊部分','n.',['柱头'],'flower-pollen-receptor','Pollen must reach the stigma before fertilisation can occur.','花粉必须到达柱头，受精才有可能发生。'],
      ['mark','特征性斑痕或体征（医学等专业语境）','n.',['小斑','特征'],'characteristic-physical-mark','The specialist looked for a characteristic stigma of the inherited disorder.','专科医生检查了这种遗传病的一项特征性体征。']
    ]);
    entry('trial',[
      ['court','审判；法庭审理案件的过程','n.',['审判'],'court-proceedings','The trial lasted six weeks and involved more than twenty witnesses.','审判持续了六周，涉及二十多名证人。'],
      ['test','试验；试用；试验性的；试行以检验效果','n. / adj. / v.',['试验','试验性的'],'evaluative-trial','The hospital is conducting a trial of a new screening method.','医院正在试验一种新的筛查方法。'],
      ['difficulty','考验；令人烦恼或难以忍受的人或事','n.',['艰苦','麻烦事','考验'],'trying-difficulty','Repeated delays were a severe trial of the passengers’ patience.','一再延误严重考验了乘客的耐心。'],
      ['selection','选拔赛；用以决定参赛或入选资格的比赛（常用复数）','n.',['选拔赛'],'selection-competition','She qualified for the national team at the swimming trials.','她在游泳选拔赛中获得了国家队资格。']
    ]);
    entry('plague',[
      ['disease','鼠疫；造成大量死亡的严重传染病','n.',['瘟疫'],'epidemic-plague-disease','The museum exhibit explains how plague spread through medieval ports.','博物馆展览解释了鼠疫如何通过中世纪港口传播。'],
      ['infestation','大量有害生物的侵袭；令人困扰的大量事物','n.',['灾祸'],'overwhelming-harmful-number','A plague of locusts destroyed crops across the region.','蝗灾摧毁了该地区各处的庄稼。','a plague of insects / problems'],
      ['trouble','不断困扰；使苦恼或受折磨','v.',['折磨','使苦恼','使得灾祸'],'persistent-trouble','Technical faults plagued the service throughout its first month.','技术故障在服务上线的第一个月里一直困扰着它。']
    ]);
    entry('paralysis',[
      ['physical','瘫痪；身体全部或部分失去运动能力','n.',['麻痹','瘫痪'],'loss-of-movement','The spinal injury caused paralysis in both legs.','脊柱损伤导致双腿瘫痪。'],
      ['inaction','瘫痪状态；无法行动或作出决定','n.',['停顿'],'inability-to-act','Political disagreement led to months of administrative paralysis.','政治分歧导致行政工作瘫痪了数月。']
    ]);
    entry('transplant',[
      ['medical','移植器官、组织等；移植手术或移植的器官、组织','n. / v.',['移植','移植手术','移植物','移植器官'],'medical-transplantation','The patient received a kidney transplant from a living donor.','患者接受了一位活体捐献者捐献的肾脏移植。'],
      ['plant','移栽；把植物从一处栽到另一处','v.',['移栽'],'plant-relocation','Transplant the seedlings once they have developed several strong leaves.','幼苗长出几片健壮的叶子后再进行移栽。'],
      ['relocate','使迁居；把人、事物或做法移到新环境','v.',['使迁移','使移居'],'relocation-to-new-setting','The novel transplants an ancient myth into a modern coastal city.','这部小说把一个古老神话移置到一座现代海滨城市。']
    ]);
    entry('disease',[
      ['illness','疾病；影响人、动物或植物正常机能的病症','n.',['疾病','病'],'pathological-illness','Researchers are studying a disease that damages young olive trees.','研究人员正在研究一种损害幼橄榄树的疾病。'],
      ['social','弊病；严重损害社会或群体的坏现象（比喻）','n.',['弊病'],'harmful-social-condition','The essay describes corruption as a disease that weakens public trust.','这篇文章把腐败描述为侵蚀公众信任的弊病。']
    ]);
    // Sources name the primary entry consulted for the particular use. Examples
    // and Chinese teaching labels above are original, not copied dictionary text.
    function source(word,ids,url){for(const id of ids)entries[word].senses.find(s=>s.id===id).source=url;}
    for(const word of ['rainforest','carnivore','ash','museum','moral','plural','artistic','grace','ginger'])for(const s of entries[word].senses)s.source=col(word);
    for(const s of entries.assembly.senses)s.source='https://www.collinsdictionary.com/us/dictionary/english/assembly';
    for(const s of entries.courtship.senses)s.source='https://www.oxfordlearnersdictionaries.co.uk/definition/english/courtship';
    source('principal',['party'],col('principal'));
    for(const s of entries.fertilise.senses)s.source=col('fertilize');
    source('essay',['attempt'],col('essay'));
    source('parameter',['quantity'],col('parameter'));
    source('critical',['threshold'],col('critical'));
    source('counterbalance',['weight'],'https://www.collinsdictionary.com/us/dictionary/english/counterbalance');
    source('potential',['physics'],col('potential'));
    source('shutter',['close'],col('shutter'));
    source('pane',['screen'],'https://learn.microsoft.com/en-us/style-guide/a-z-word-list-term-collections/p/pane');
    source('elegance',['solution'],col('elegance'));
    source('nobility',['quality'],'https://www.collinsdictionary.com/us/dictionary/english/nobility');
    source('clothe',['cover'],col('clothe'));
    source('project',['voice'],col('project'));
    source('legacy',['technology'],col('legacy'));
    source('plague',['infestation'],col('plague'));
    source('rag',['tease'],col('rag'));
    source('jazz',['perform'],col('jazz'));
    source('jazz',['liven'],'https://dictionary.cambridge.org/us/dictionary/english/jazz-up');
    source('minister',['care'],'https://dictionary.cambridge.org/us/dictionary/english/minister-to');
    // Conservative exclusions also cover broader/narrower and cross-POS near
    // equivalents. Shared tags prevent plausible alternatives being marked wrong.
    function guard(word,id,...tags){entries[word].senses.find(s=>s.id===id).concepts.push(...tags);}
    guard('immigration','settlement','enter-country-to-settle');
    guard('collaborate','joint-work','work-together');
    guard('restrict','limit','restrict-to-limits');
    guard('plague','disease','pathological-illness');
    guard('perform','function','operate-effectively');
    guard('principal','main','crucial-importance');

    // Every legacy fragment keeps a deliberate boundary decision. These records
    // do not certify excluded fragments or silently broaden the teaching labels.
    reference('timber',['用木材建造'],'旧动词涉及以木材支撑或建造；本批教木材及木梁名词，不把所有建造行为视为 timber。');
    reference('fertilise',['使受粉'],'授粉是花粉转移，受精是生殖细胞结合，两过程不同；本批使用受精义，不沿用使受粉作为等义标签。',col('fertilize'));
    reference('feed',['放牧'],'让牲畜取食时可用 feed，但放牧还含管理、赶放语义；本批仅教喂食或进食，不将两者完全等同。');
    reference('feather',['长羽毛','用羽毛装饰'],'旧动词涉及羽毛生长或装饰；本批范围为羽毛名词和划桨转桨用法，不扩展为全部同形动词。');
    reference('insect',['卑鄙的人'],'旧译含对人的贬称，比喻色彩强；本批学习昆虫生物义，不将人格评价作普通释义。');
    reference('pest',['瘟疫','鼠疫'],'此类历史疾病用法不纳入本批；当前学习害虫及讨厌的人，不以 pest 替代 plague。');
    reference('excrete',['分泌'],'排泄指排出代谢废物，不能与腺体的分泌 secrete 泛泛互换；本批不采纳分泌旧标签。');
    reference('dust',['花粉','骚乱','弄成粉末','化为粉末'],'花粉、骚乱及粉碎相关旧译具有特定复合词、旧式或技术语境；本批范围为尘土、除尘和撒粉，不据此生成其他独立考点。');
    reference('motion',['意向'],'议案 motion 是正式提交讨论的提议，不能直接等同心理意向 intention；本批不沿用该旧译。');
    reference('dean',['外交团长'],'外交团长属于特定职位搭配；本批保留教育、教会及资深领袖用法，不将其推广为任意外交负责人。');
    reference('pupil',['未成年人'],'学生未必未成年；旧法律监护意义不纳入本批，不把年龄与学生身份等同。');
    reference('matrix',['子宫','模型'],'旧译含解剖词源及泛化的模型标签；本批限定矩阵、基质和形成环境，不能与任意模型互换。');
    reference('proportion',['使成比例','使均衡'],'本批教比例、相称关系和尺寸名词；动词的按比例调整不在本批独立训练范围。');
    reference('fraction',['破片','分散'],'本批用分数及很小一部分名词；不把碎片、分散动作自动视为常用 fraction 考点。');
    reference('friction',['摩擦治疗'],'按摩或治疗属于特定医学语境；本批教物理摩擦与人际摩擦，不作治疗操作训练。');
    reference('project',['发射'],'project 可有投射、射出语境，但本批的投影及突出等义不等于所有发射 launch；该旧译不作为独立考点。');
    reference('outline',['分级'],'outline 侧重轮廓或提纲；没有凭孤立旧译推导为 grade 或 classify 的分级动作。');
    reference('gist',['依据'],'gist 指要旨，不等于一切依据或证据；本批不采纳孤立的依据标签。');
    reference('assume',['僭越'],'擅自取得权力须有特定宾语及语境；本批接掌职责不等同所有僭越行为。');
    reference('presume',['意味着'],'presume 的假定不等于 imply 的意味着；此旧译不作为本批独立义。');
    reference('elicit',['推导出'],'elicit 是引出回应、信息等，不是根据前提推导结论的 deduce；不沿用此旧译。');
    reference('reference',['索引'],'参考编号不等于完整索引 index；本批明确教识别编号，索引旧标签仅保留追溯。');
    reference('lens',['给...摄影'],'本批教光学镜片与晶状体；旧动词摄影用法不在当前学习范围。');
    reference('browser',['吃嫩叶的动物'],'动物取食嫩叶是专门生态用法；本批只教网页浏览器及浏览者，保留该边界。');
    reference('binary',['双星'],'天文学双星属于特定名词用法；本批教二进制及二元的，不将任意成对事物都视为双星。');
    reference('digital',['数字仪表','数字式电子表(或时钟)','数字'],'本批使用数字技术及显示方式等形容词义；数字仪表需补足具体名词，digital 不等于数字 number。');
    reference('evaporation',['脱水'],'蒸发可造成水分流失，但脱水还可通过其他机制发生；本批不将两过程作为等义概念。');
    reference('condense',['凝固'],'凝结可涉及气体变为液体或固体，不能将任意液体凝固 freezing 都译为 condense；保留过程限制。');
    reference('refine',['使优雅'],'本批改进义主要用于方法和设计；使举止文雅的特定语境不独立加入，避免与所有优雅变化等同。');
    reference('pivot',['程序员交互验证和编制工具','数据透视表'],'前者为缩写名称，后者需限定 pivot table 等技术搭配；本批教枢轴、核心和转向，不把缩写或复合词当作一般词义。');
    reference('distil',['滴下','渗出'],'此类旧式液体滴出用法不纳入当前学习范围；本批教蒸馏和提炼要点。');
    reference('alienate',['转让'],'法律上的财产权让与属于专门用法；本批教疏远与离心感，不作为普通转让的通用表达。');
    reference('soul',['黑人的'],'soul 可修饰特定非裔美国音乐或文化形式；不能无条件等同所有黑人相关事物，本批只明确教灵魂乐。');
    reference('plural',['两个以上的'],'语法复数为多于一个，并非必须多于两个；本批不沿用这个数量错误。',col('plural'));
    reference('communication',['交通'],'communications 在交通联系等搭配中有专门意义；本批教信息交流、消息及通信系统，不将单数词泛作道路交通。');
    reference('correspondent',['客户','代理商行','代理银行'],'银行代理行须有 correspondent bank 等特定业务语境；本批教通讯记者与通信者，不把所有客户当作 correspondent。');
    reference('critical',['极期的'],'旧医学分期译法不作为通用形容词义；本批病情危重与物理临界均明确限定语境。');
    reference('imitate',['冒充'],'模仿他人言行不必然声称自己就是对方；不将 imitate 与身份冒充 impersonate 完全等同。');
    reference('jazz',['喧闹','喧吵的','游荡'],'旧译涉及俚语、特定年代或派生语境；本批限定音乐、演奏跳舞及 jazz up，不笼统教成喧闹或漫游。',col('jazz'));
    reference('shutter',['关闭者'],'本批教百叶窗、快门及关闭营业；泛指关闭者的造词性名词不作为常见独立考点。',col('shutter'));
    reference('pane',['嵌窗玻璃于'],'本批教玻璃片及软件窗格名词；装玻璃的旧动词不纳入本批。');
    reference('bolt',['筛子','意外事件','发射','脱口而出','筛','射箭','退出党派','突然'],'筛粉动词、退出政党、美式特殊名词和状语/短语等须各有明确语境；本批限定紧固件、门闩、闪电、布匹、逃跑、狼吞虎咽及弩箭，不把这些孤立旧译冒充通用词义。');
    reference('barrel',['装入桶内'],'装桶动词不在当前范围；本批教桶、容量、枪管及高速移动。');
    reference('refrigerator',['冷冻机'],'冰箱通常用于冷藏，并非必然使食物冻结；不与 freezer 或一切冷冻机械等同。');
    reference('ladder',['成名'],'阶梯可比喻职业晋升，但本词不直接表达成名动作；不把结果当作独立动词义。');
    reference('spin',['情绪低落'],'head spinning 表示头晕或信息过载，不能等同情绪低落；进入失控状态的特定 spin 短语另需语境。');
    reference('patch',['傻瓜','掩饰','拼凑'],'旧人称贬词及宽泛动作标签不纳入本批；patch up 的修补或和解须明确搭配，不能泛指一切掩饰。');
    reference('rag',['碎片','碎屑','少量','责骂','喧闹'],'旧译含一般碎片、极少量、训斥及学生恶作剧名词；本批限破布、低劣报刊和取笑，不凭词形把它们全部等义合并。',col('rag'));
    reference('peel',['脱去衣服'],'脱衣须特定 peel off 用法；本批剥皮与剥落不自动覆盖该穿衣场景。');
    reference('grain',['本质','(使)成谷粒'],'旧译涉及性情比喻或加工动词；本批教谷物、颗粒与纹理，不推广为一切本质或造粒行为。');
    reference('lodge',['倒伏'],'农作物倒伏属于农业专门动词；本批教住所、组织、住宿、提交、卡住和寄存。');
    reference('cabin',['关在小屋'],'旧动词具有被限制空间的语境；本批学习小屋、船舱及机舱名词。');
    reference('radiator',['辐射体'],'物理学泛指辐射体的专门术语不纳入本批；当前范围为暖气片和发动机散热器。');
    reference('pilot',['航船者','导向器','驾驶仪','向导','领导人','引导的','控制的'],'引航员不等于所有航船者；自动驾驶装置、一般领导者及泛化形容词需专门搭配，不能由 pilot 的引导用法无条件推导。');
    reference('visa',['签发'],'签发动词只适用于批准签证等具体事务，不能推广为签发任意文件；本批学习签证名词。');
    reference('atlas',['自动测试和负载分析系统'],'此为专有缩写解释，不作为英语 atlas 的通用意义。');
    reference('lane',['单行道'],'车道未必是单行道，one-way street 才明确表示单行；本批改用车道标签。');
    reference('tyre',['装轮胎于'],'给车辆装轮胎的动词不在本批范围；保留英式轮胎名词与美式 tire 的拼写区别。');
    reference('wreck',['(船)失事','营救失事船只'],'本批教破坏及残骸；船失事的不及物表达与打捞/营救的专门旧义不自动并入普通残骸名词。');
    reference('stern',['坚定的','坚决的'],'严肃坚定可用于特定人生态度或考验语境；本批明确教严厉与严峻，不等同任意坚定或决心。');
    reference('stern',['臀'],'旧身体部位俚称不纳入本批；船尾与严厉、严峻语境分别学习。');
    reference('conservative',['有保存力的','防腐剂','保存剂'],'旧译属于历史或专门保存用语；本批学习政治态度、传统风格及谨慎估计，不把 conservative 当作一般防腐剂。');
    reference('minister',['主持宗教仪式'],'牧师可以主持仪式，但本批不从职业名词推导一个可搭配任意仪式的及物动词；minister to 照料另行明确。');
    reference('preference',['首选项'],'软件设置里的偏好项目是具体界面命名；本批教偏好和优先权，不把所有选项都说成 preference。');
    reference('insurance',['保险费'],'insurance 可在费用语境中借指保险花费，但 premium 才明确指保费；本批不把合同保障与费用无条件等同。');
    reference('bid',['宣布'],'bid farewell 等致意搭配已明确；不把 bid 当作可宣布任意消息的 announce。');
    reference('estate',['(人生的)阶段','阶层'],'旧译涉及古老身份或等级及固定宗教表达；本批限定地产、规划区、财产遗产和旅行车。');
    reference('wage',['报应','报偿'],'此类含义通常依赖旧式复数表达，如行为的后果；本批限定劳动工资及发动斗争，不泛作 reward。');
    reference('resign',['放弃'],'可辞去职位或 resign oneself to 无奈接受；不表示放弃任意物品或计划，本批保留宾语与搭配限制。');
    reference('stigma',['烙印','小孔','眼点','气孔'],'烙印历史义及动物眼点、呼吸孔等属于特定专业或旧式用法；本批保留社会污名、花柱头及明确医学体征，不泛化为任意孔洞。',col('stigma'));
    reference('plague',['天罚','麻烦'],'宗教解释不是通用疾病定义；麻烦限持续困扰或大量灾患的语境，不与任意小麻烦直接等同。');
    reference('compound',['化合','和解','妥协','使复合','使化合'],'旧译含法律和解及化学配制等特定动词；本批化合物名词不等于化合动作，混合、加重和复利各按已声明范围学习。');
    reference('fragment',['段落'],'fragment 可以是文本残片，但不等于完整段落 paragraph；本批只教碎片和碎裂。');
    reference('furnish',['配料'],'furnish 为配备或提供，不是调配配料；本批不将旧译作独立考点。');
    reference('fluctuate',['使波动','使动摇'],'当前学习用法为不及物上下波动；不以旧使动标签生成任意及物句。');
    reference('herd',['牧人'],'本批教兽群、人群及赶拢，牧人 herder 不能从 herd 名词直接推导。');
    reference('trial',['审讯的'],'本批教审判名词和试验性的形容词；at trial 等语境不使 trial 成为描述一切审讯的普通形容词。');
  }
  if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch06=register;
})(typeof window==='object'?window:globalThis);
