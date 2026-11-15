/* Batch 21: reviewed public learning scope, original bilingual examples.
 * Source entries were read during review. No learner state is included. */
(function(scope){
 'use strict';
 function register(add){
  function entry(word,rows,refs){
   const e=add(word,rows,refs);e.reviewDate='2026-11-15';
   e.senses.forEach((s,i)=>s.source=rows[i][8]);
   e.sources=[...new Set([...rows.map(r=>r[8]),...refs.map(r=>r.source)])];
   return e;
  }
  entry("oasis",[
   ["sense-1","绿洲","n.",["绿洲"],["oasis-1","safety-from-danger","safe-shelter-place"],"The travellers rested beside a spring in the oasis.","旅行者在绿洲的一处泉水旁休息。",null,"https://www.merriam-webster.com/dictionary/oasis"],
   ["sense-2","提供安宁或慰藉的地方","n.",["提供安宁或慰藉的地方"],["oasis-2","safety-from-danger","safe-shelter-place"],"The little garden is an oasis of calm beside the busy road.","小花园是繁忙道路旁的一处宁静之地。",null,"https://www.merriam-webster.com/dictionary/oasis"]
  ],[{"terms":["舒适的地方","绿洲(沙漠中)","健岛(病变区中的健康组织)"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/oasis","reason":"本批 oasis 按所列词性与构式训练：绿洲（n.）、提供安宁或慰藉的地方（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("glacier",[
   ["sense-1","冰川","n.",["冰川"],["glacier-1"],"The glacier carries broken rock towards the valley.","冰川把碎石带向山谷。",null,"https://www.merriam-webster.com/dictionary/glacier"]
  ],[]);
  entry("pole",[
   ["sense-1","杆；竿","n.",["杆","竿"],["pole-1","rod-stick","rod-fishing","bar-rod","bar-pub","bar-barrier","bar-legal","bar-music","bar-block","bar-ban","bar-pressure"],"A wooden pole supports the young tree.","一根木杆支撑着幼树。",null,"https://www.merriam-webster.com/dictionary/pole"],
   ["sense-2","地极；极点","n.",["地极","极点"],["pole-2","rod-stick","rod-fishing","bar-rod","bar-pub","bar-barrier","bar-legal","bar-music","bar-block","bar-ban","bar-pressure"],"The diagram marks the planet's north pole.","图示标出了这颗行星的北极。",null,"https://www.merriam-webster.com/dictionary/pole"],
   ["sense-3","磁极；电极","n.",["磁极","电极"],["pole-3","rod-stick","rod-fishing","bar-rod","bar-pub","bar-barrier","bar-legal","bar-music","bar-block","bar-ban","bar-pressure"],"The experiment identifies the two poles of the magnet.","实验辨认出磁铁的两个磁极。",null,"https://www.merriam-webster.com/dictionary/pole"],
   ["sense-4","对立的极端","n.",["对立的极端"],["pole-4","rod-stick","rod-fishing","bar-rod","bar-pub","bar-barrier","bar-legal","bar-music","bar-block","bar-ban","bar-pressure"],"Their opinions lie at opposite poles of the debate.","他们的观点处在这场辩论的两个对立极端。",null,"https://www.merriam-webster.com/dictionary/pole"],
   ["sense-5","波兰人（首字母大写）","n.（专名）",["波兰人（首字母大写）"],["pole-5","rod-stick","rod-fishing","bar-rod","bar-pub","bar-barrier","bar-legal","bar-music","bar-block","bar-ban","bar-pressure"],"The memoir describes a Pole who settled near the harbour.","回忆录描写了一位在港口附近定居的波兰人。",null,"https://www.merriam-webster.com/dictionary/pole"],
   ["sense-6","用篙撑船或推动","v.",["用篙撑船或推动"],["pole-6","rod-stick","rod-fishing","bar-rod","bar-pub","bar-barrier","bar-legal","bar-music","bar-block","bar-ban","bar-pressure"],"They poled the boat through the shallow water.","他们撑着篙让船驶过浅水区。",null,"https://www.merriam-webster.com/dictionary/pole"]
  ],[{"terms":["波兰人","相反的极端","用竿支撑","撑篙"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pole","reason":"本批 pole 按所列词性与构式训练：杆；竿（n.）、地极；极点（n.）、磁极；电极（n.）、对立的极端（n.）、波兰人（首字母大写）（n.（专名））、用篙撑船或推动（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("axis",[
   ["sense-1","旋转轴；轴线","n.",["旋转轴","轴线"],["axis-1"],"The wheel turns around a fixed axis.","轮子绕着一根固定轴转动。",null,"https://www.merriam-webster.com/dictionary/axis"],
   ["sense-2","坐标轴","n.",["坐标轴"],["axis-2"],"Label the horizontal axis with the time intervals.","在横坐标轴上标出时间间隔。",null,"https://www.merriam-webster.com/dictionary/axis"]
  ],[{"terms":["轴"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/axis","reason":"本批 axis 按所列词性与构式训练：旋转轴；轴线（n.）、坐标轴（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("globe",[
   ["sense-1","地球；世界","n.",["地球","世界"],["globe-1"],"The project links classrooms across the globe.","这个项目连接世界各地的课堂。",null,"https://www.merriam-webster.com/dictionary/globe"],
   ["sense-2","地球仪","n.",["地球仪"],["globe-2"],"She used a globe to trace the expedition's route.","她用地球仪描出了考察路线。",null,"https://www.merriam-webster.com/dictionary/globe"],
   ["sense-3","球状物","n.",["球状物"],["globe-3"],"A glass globe protects the small lamp.","一个玻璃球罩保护着小灯。",null,"https://www.merriam-webster.com/dictionary/globe"]
  ],[{"terms":["球","天体","(使)成球状"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/globe","reason":"本批 globe 按所列词性与构式训练：地球；世界（n.）、地球仪（n.）、球状物（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("deteriorate",[
   ["sense-1","恶化；变坏","v.",["恶化","变坏"],["deteriorate-1","21-related-deteriorate-degrade-degradation"],"The road deteriorated after several wet winters.","几个多雨的冬季过后，道路状况恶化了。",null,"https://www.merriam-webster.com/dictionary/deteriorate"]
  ],[{"terms":["(使)恶化"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/deteriorate","reason":"本批 deteriorate 按所列词性与构式训练：恶化；变坏（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("hemisphere",[
   ["sense-1","地球或球体的一半","n.",["地球或球体的一半"],["hemisphere-1"],"The model shows the northern hemisphere in blue.","模型把北半球标成蓝色。",null,"https://www.merriam-webster.com/dictionary/hemisphere"],
   ["sense-2","大脑半球","n.",["大脑半球"],["hemisphere-2"],"The diagram compares the two hemispheres of the brain.","图示比较了两个大脑半球。",null,"https://www.merriam-webster.com/dictionary/hemisphere"]
  ],[{"terms":["半球","地球的半面"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/hemisphere","reason":"本批 hemisphere 按所列词性与构式训练：地球或球体的一半（n.）、大脑半球（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("equator",[
   ["sense-1","赤道","n.",["赤道"],["equator-1"],"The map draws the equator as a red line.","地图用一条红线画出赤道。",null,"https://www.merriam-webster.com/dictionary/equator"]
  ],[{"terms":["中纬线"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/equator","reason":"本批 equator 按所列词性与构式训练：赤道（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("degrade",[
   ["sense-1","使质量降低；破坏","v.",["使质量降低","破坏"],["degrade-1","21-related-deteriorate-degrade-degradation"],"Heavy traffic gradually degraded the road surface.","繁重的交通逐渐破坏了路面。",null,"https://www.merriam-webster.com/dictionary/degrade"],
   ["sense-2","贬低；羞辱","v.",["贬低","羞辱"],["degrade-2","21-related-deteriorate-degrade-degradation"],"The rules forbid language that degrades other participants.","规则禁止使用贬低其他参与者的语言。",null,"https://www.merriam-webster.com/dictionary/degrade"],
   ["sense-3","分解；降解","v.",["分解","降解"],["degrade-3","21-related-deteriorate-degrade-degradation"],"The material degrades slowly under the test conditions.","这种材料在测试条件下缓慢降解。",null,"https://www.merriam-webster.com/dictionary/degrade"]
  ],[{"terms":["(使)降级","(使)退化"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/degrade","reason":"本批 degrade 按所列词性与构式训练：使质量降低；破坏（v.）、贬低；羞辱（v.）、分解；降解（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("arctic",[
   ["sense-1","北极的","adj.",["北极的"],["arctic-1"],"The exhibition includes photographs of Arctic wildlife.","展览包括北极野生生物的照片。",null,"https://www.merriam-webster.com/dictionary/arctic"],
   ["sense-2","严寒的","adj.",["严寒的"],["arctic-2"],"An arctic wind swept through the empty streets.","一阵严寒的风扫过空荡的街道。",null,"https://www.merriam-webster.com/dictionary/arctic"]
  ],[{"terms":["极寒的","北极圈","北极"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/arctic","reason":"本批 arctic 按所列词性与构式训练：北极的（adj.）、严寒的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("upgrade",[
   ["sense-1","升级；改进版本","n.",["升级","改进版本"],["upgrade-1","improvement-process","improvement-result"],"The software upgrade adds a clearer search screen.","软件升级增加了更清晰的搜索界面。",null,"https://www.merriam-webster.com/dictionary/upgrade"],
   ["sense-2","上坡；上升坡度","n.",["上坡","上升坡度"],["upgrade-2","improvement-process","improvement-result"],"The final upgrade slowed the heavily loaded cart.","最后一段上坡让满载的手推车慢了下来。",null,"https://www.merriam-webster.com/dictionary/upgrade"],
   ["sense-3","使升级；提升质量","v.",["使升级","提升质量"],["upgrade-3","improvement-process","improvement-result"],"The team upgraded the equipment before the next survey.","团队在下一次调查前升级了设备。",null,"https://www.merriam-webster.com/dictionary/upgrade"]
  ],[{"terms":["上升","往上","提升","改良品种"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/upgrade","reason":"按来源同时采用名词和动词。来源也收录动词首音节重读的变体，不把重音当作名词动词的绝对分界。本批 upgrade 按所列词性与构式训练：升级；改进版本（n.）、上坡；上升坡度（n.）、使升级；提升质量（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("antarctic",[
   ["sense-1","南极的","adj.",["南极的"],["antarctic-1"],"The team examined an Antarctic ice sample.","团队检查了一份南极冰样。",null,"https://www.merriam-webster.com/dictionary/antarctic"]
  ],[{"terms":["南极地带的","南极地区"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/antarctic","reason":"本批 antarctic 按所列词性与构式训练：南极的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("degradation",[
   ["sense-1","退化；质量下降","n.",["退化","质量下降"],["degradation-1","21-related-deteriorate-degrade-degradation"],"The study measured the degradation of the coating.","研究测量了涂层的退化程度。",null,"https://www.merriam-webster.com/dictionary/degradation"],
   ["sense-2","贬损；尊严受辱","n.",["贬损","尊严受辱"],["degradation-2","21-related-deteriorate-degrade-degradation"],"The novel portrays the degradation suffered by the prisoners.","小说描写了囚犯遭受的尊严贬损。",null,"https://www.merriam-webster.com/dictionary/degradation"]
  ],[{"terms":["降格","堕落","降级"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/degradation","reason":"本批 degradation 按所列词性与构式训练：退化；质量下降（n.）、贬损；尊严受辱（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("parasitic",[
   ["sense-1","寄生的；寄生虫引起的","adj.",["寄生的","寄生虫引起的"],["parasitic-1","parasite-1","parasite-2"],"The course explains several parasitic relationships in nature.","课程讲解了自然界中的几种寄生关系。",null,"https://www.merriam-webster.com/dictionary/parasitic"],
   ["sense-2","依附他人而不付出的（贬义）","adj.",["依附他人而不付出的（贬义）"],["parasitic-2","parasite-1","parasite-2"],"The essay criticises a parasitic relationship between the two organisations.","文章批评了两个组织之间一方依附另一方而不付出的关系。",null,"https://www.merriam-webster.com/dictionary/parasitic"]
  ],[{"terms":["由寄生虫引起的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/parasitic","reason":"本批 parasitic 按所列词性与构式训练：寄生的；寄生虫引起的（adj.）、依附他人而不付出的（贬义）（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("pup",[
   ["sense-1","小狗；某些动物的幼崽","n.",["小狗","某些动物的幼崽"],["pup-1","offspring-1","later-family-generation","later-derived-form","offspring-2"],"The seal pup waited beside its mother.","海豹幼崽在母亲旁边等着。",null,"https://www.merriam-webster.com/dictionary/pup"],
   ["sense-2","生幼崽","v.",["生幼崽"],["pup-2","offspring-1","later-family-generation","later-derived-form","offspring-2"],"The seals pup on the sheltered beach.","海豹在避风的沙滩上产崽。",null,"https://www.merriam-webster.com/dictionary/pup"]
  ],[{"terms":["幼畜","令人讨厌的年轻人","生小狗"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pup","reason":"本批 pup 按所列词性与构式训练：小狗；某些动物的幼崽（n.）、生幼崽（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("lamb",[
   ["sense-1","羔羊","n.",["羔羊"],["lamb-1"],"A lamb followed the ewe through the gate.","一只羔羊跟着母羊穿过大门。",null,"https://www.merriam-webster.com/dictionary/lamb"],
   ["sense-2","羔羊肉","n.",["羔羊肉"],["lamb-2"],"The stew contains lamb and root vegetables.","炖菜里有羔羊肉和根茎蔬菜。",null,"https://www.merriam-webster.com/dictionary/lamb"],
   ["sense-3","产羊羔","v.",["产羊羔"],["lamb-3"],"The ewes lamb in the covered yard.","母羊在有顶棚的院子里产崽。",null,"https://www.merriam-webster.com/dictionary/lamb"]
  ],[{"terms":["小羊"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/lamb","reason":"本批 lamb 按所列词性与构式训练：羔羊（n.）、羔羊肉（n.）、产羊羔（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("horn",[
   ["sense-1","动物的角","n.",["动物的角"],["horn-1","honk-1"],"The goat caught one horn in the fence.","山羊的一只角卡进了篱笆。",null,"https://www.merriam-webster.com/dictionary/horn"],
   ["sense-2","喇叭；警报器","n.",["喇叭","警报器"],["horn-2","honk-1"],"The driver sounded the horn before the blind bend.","司机在进入看不清前方的弯道前鸣了喇叭。",null,"https://www.merriam-webster.com/dictionary/horn"],
   ["sense-3","圆号；号角","n.",["圆号","号角"],["horn-3","honk-1"],"The horn introduces the melody after the strings.","弦乐之后，圆号奏出了旋律。",null,"https://www.merriam-webster.com/dictionary/horn"]
  ],[{"terms":["角","角质","角制的","用角触","长角于"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/horn","reason":"本批 horn 按所列词性与构式训练：动物的角（n.）、喇叭；警报器（n.）、圆号；号角（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bull",[
   ["sense-1","公牛；大型动物的雄性","n.",["公牛","大型动物的雄性"],["bull-1","domestic-bovine-cattle"],"The bull stood in a separate field.","公牛站在一块单独的田地里。",null,"https://www.merriam-webster.com/dictionary/bull"],
   ["sense-2","预期价格上涨的投资者","n.",["预期价格上涨的投资者"],["bull-2","domestic-bovine-cattle"],"The article contrasts the outlook of a bull with that of a bear.","文章比较了看涨者与看跌者的预期。",null,"https://www.merriam-webster.com/dictionary/bull"]
  ],[{"terms":["买方","买空者"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bull","reason":"本批 bull 按所列词性与构式训练：公牛；大型动物的雄性（n.）、预期价格上涨的投资者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("horse",[
   ["sense-1","马","n.",["马"],["horse-1"],"The horse pulled a light cart along the lane.","马沿着小路拉着一辆轻便马车。",null,"https://www.merriam-webster.com/dictionary/horse"],
   ["sense-2","支撑架","n.",["支撑架"],["horse-2"],"The carpenter rested the boards on a wooden horse.","木匠把木板放在木支撑架上。",null,"https://www.merriam-webster.com/dictionary/horse"],
   ["sense-3","体操中的鞍马或跳马器械","n.",["体操中的鞍马或跳马器械"],["horse-3"],"The gymnast approached the horse for her next exercise.","体操运动员走向跳马器械，准备下一个动作。",null,"https://www.merriam-webster.com/dictionary/horse"]
  ],[{"terms":["骑兵","脚架","骑马","取笑","使骑马","系马于"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/horse","reason":"本批 horse 按所列词性与构式训练：马（n.）、支撑架（n.）、体操中的鞍马或跳马器械（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("zebra",[
   ["sense-1","斑马","n.",["斑马"],["zebra-1"],"A zebra drank at the edge of the waterhole.","一匹斑马在水坑边饮水。",null,"https://www.merriam-webster.com/dictionary/zebra"]
  ],[]);
  entry("calf",[
   ["sense-1","小牛；某些大型动物的幼崽","n.",["小牛","某些大型动物的幼崽"],["calf-1","offspring-1","later-family-generation","later-derived-form","offspring-2"],"The calf stayed close to the cow.","小牛紧跟着母牛。",null,"https://www.merriam-webster.com/dictionary/calf"],
   ["sense-2","小腿肚","n.",["小腿肚"],["calf-2","offspring-1","later-family-generation","later-derived-form","offspring-2"],"The steep climb made his calf ache.","陡峭的攀登使他的小腿肚酸痛。",null,"https://www.merriam-webster.com/dictionary/calf"]
  ],[{"terms":["小牛皮","腓肠"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/calf","reason":"本批 calf 按所列词性与构式训练：小牛；某些大型动物的幼崽（n.）、小腿肚（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("hawk",[
   ["sense-1","鹰","n.",["鹰"],["hawk-1","eagle-bird","eagle-emblem","golf-two-under-par"],"A hawk circled above the open field.","一只鹰在开阔田野上方盘旋。",null,"https://www.merriam-webster.com/dictionary/hawk"],
   ["sense-2","主张强硬行动的人；鹰派","n.",["主张强硬行动的人","鹰派"],["hawk-2","eagle-bird","eagle-emblem","golf-two-under-par"],"The debate divided the committee into hawks and doves.","辩论使委员会分成了鹰派与鸽派。",null,"https://www.merriam-webster.com/dictionary/hawk"],
   ["sense-3","沿街叫卖；兜售","v.",["沿街叫卖","兜售"],["hawk-3","eagle-bird","eagle-emblem","golf-two-under-par"],"Vendors hawked fresh fruit outside the station.","小贩在车站外叫卖新鲜水果。",null,"https://www.merriam-webster.com/dictionary/hawk"]
  ],[{"terms":["掠夺者","鹰派成员","放鹰行猎","像鹰一般地袭击","清嗓","咳嗽","捕捉","咳出","叫卖","散播"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/hawk","reason":"本批 hawk 按所列词性与构式训练：鹰（n.）、主张强硬行动的人；鹰派（n.）、沿街叫卖；兜售（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("goose",[
   ["sense-1","鹅","n.",["鹅"],["goose-1"],"A goose led its young towards the pond.","一只鹅领着幼鸟走向池塘。",null,"https://www.merriam-webster.com/dictionary/goose"]
  ],[{"terms":["雌鹅","鹅肉","弯把熨斗","与...性交","突然加大油门","使生色","喝倒彩"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/goose","reason":"本批 goose 按所列词性与构式训练：鹅（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("owl",[
   ["sense-1","猫头鹰","n.",["猫头鹰"],["owl-1"],"An owl called from the dark woodland.","一只猫头鹰在黑暗的林地里鸣叫。",null,"https://www.merriam-webster.com/dictionary/owl"]
  ],[{"terms":["走私"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/owl","reason":"本批 owl 按所列词性与构式训练：猫头鹰（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("swallow",[
   ["sense-1","吞咽","v.",["吞咽"],["swallow-1","take-in-substance","engross-attention","assimilate-information","cushion-impact","incorporate-into-whole","bear-extra-cost","consume-use-up","consume-eat-drink","consume-destroy","consume-engross"],"He swallowed the last mouthful of water.","他咽下了最后一口水。",null,"https://www.merriam-webster.com/dictionary/swallow"],
   ["sense-2","吞没；耗尽","v.",["吞没","耗尽"],["swallow-2","take-in-substance","engross-attention","assimilate-information","cushion-impact","incorporate-into-whole","bear-extra-cost","consume-use-up","consume-eat-drink","consume-destroy","consume-engross"],"The repairs swallowed most of the available money.","维修耗去了大部分可用资金。",null,"https://www.merriam-webster.com/dictionary/swallow"],
   ["sense-3","轻信；不加怀疑地接受","v.",["轻信","不加怀疑地接受"],["swallow-3","take-in-substance","engross-attention","assimilate-information","cushion-impact","incorporate-into-whole","bear-extra-cost","consume-use-up","consume-eat-drink","consume-destroy","consume-engross"],"She refused to swallow the unlikely explanation.","她拒绝轻信那个不大可信的解释。",null,"https://www.merriam-webster.com/dictionary/swallow"],
   ["sense-4","燕子","n.",["燕子"],["swallow-4","take-in-substance","engross-attention","assimilate-information","cushion-impact","incorporate-into-whole","bear-extra-cost","consume-use-up","consume-eat-drink","consume-destroy","consume-engross"],"A swallow built its nest beneath the roof.","一只燕子在屋檐下筑了巢。",null,"https://www.merriam-webster.com/dictionary/swallow"],
   ["sense-5","一口的量；一次吞咽","n.",["一口的量","一次吞咽"],["swallow-5","take-in-substance","engross-attention","assimilate-information","cushion-impact","incorporate-into-whole","bear-extra-cost","consume-use-up","consume-eat-drink","consume-destroy","consume-engross"],"He finished the drink in a single swallow.","他一口喝完了饮料。",null,"https://www.merriam-webster.com/dictionary/swallow"],
   ["sense-6","抑制而不流露","v.",["抑制而不流露"],["swallow-6","take-in-substance","engross-attention","assimilate-information","cushion-impact","incorporate-into-whole","bear-extra-cost","consume-use-up","consume-eat-drink","consume-destroy","consume-engross"],"She swallowed her anger and answered calmly.","她忍住怒气，平静地回答。",null,"https://www.merriam-webster.com/dictionary/swallow"]
  ],[{"terms":["喉","咽","淹没","忍受","抑制","吞下","咽下"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/swallow","reason":"本批 swallow 按所列词性与构式训练：吞咽（v.）、吞没；耗尽（v.）、轻信；不加怀疑地接受（v.）、燕子（n.）、一口的量；一次吞咽（n.）、抑制而不流露（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mouse",[
   ["sense-1","老鼠","n.",["老鼠"],["mouse-1"],"A mouse slipped behind the cupboard.","一只老鼠溜到了橱柜后面。",null,"https://www.merriam-webster.com/dictionary/mouse"],
   ["sense-2","计算机鼠标","n.",["计算机鼠标"],["mouse-2"],"Move the mouse slowly to position the pointer.","缓慢移动鼠标来放置指针。",null,"https://www.merriam-webster.com/dictionary/mouse"],
   ["sense-3","胆小羞怯的人","n.",["胆小羞怯的人"],["mouse-3"],"The character seems a mouse until the crisis begins.","这个人物在危机开始前显得胆小羞怯。",null,"https://www.merriam-webster.com/dictionary/mouse"]
  ],[{"terms":["鼠标","捕鼠","窥探","探出"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mouse","reason":"本批 mouse 按所列词性与构式训练：老鼠（n.）、计算机鼠标（n.）、胆小羞怯的人（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("eminent",[
   ["sense-1","杰出的；有声望的","adj.",["杰出的","有声望的"],["eminent-1","21-review-related-eminent-famous-fame-notorious-notoriety"],"An eminent historian reviewed the manuscript.","一位有声望的历史学家审阅了手稿。",null,"https://www.merriam-webster.com/dictionary/eminent"]
  ],[{"terms":["显赫的","有名的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/eminent","reason":"本批 eminent 按所列词性与构式训练：杰出的；有声望的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("notorious",[
   ["sense-1","臭名昭著的","adj.",["臭名昭著的"],["notorious-1","21-related-notorious-notoriety","21-review-related-eminent-famous-fame-notorious-notoriety"],"The bend is notorious for frequent accidents.","这个弯道因频繁发生事故而臭名昭著。",null,"https://www.merriam-webster.com/dictionary/notorious"]
  ],[{"terms":["声名狼藉的","众人皆知的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/notorious","reason":"本批 notorious 按所列词性与构式训练：臭名昭著的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("notoriety",[
   ["sense-1","恶名；因坏事而出名","n.",["恶名","因坏事而出名"],["notoriety-1","21-related-notorious-notoriety","reputation-1","admired-social-standing","21-review-related-eminent-famous-fame-notorious-notoriety"],"The scandal brought the company unwanted notoriety.","丑闻给公司带来了不愿承受的恶名。",null,"https://www.merriam-webster.com/dictionary/notoriety"]
  ],[{"terms":["臭名","声名狼藉"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/notoriety","reason":"本批 notoriety 按所列词性与构式训练：恶名；因坏事而出名（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("scholar",[
   ["sense-1","学者","n.",["学者"],["scholar-1"],"The scholar compared several versions of the ancient text.","学者比较了那部古代文献的几个版本。",null,"https://www.merriam-webster.com/dictionary/scholar"],
   ["sense-2","奖学金获得者","n.",["奖学金获得者"],["scholar-2"],"Each scholar received support for a year of study.","每位奖学金获得者都得到了一年的学习资助。",null,"https://www.merriam-webster.com/dictionary/scholar"]
  ],[{"terms":["有文化者","学习者"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/scholar","reason":"本批 scholar 按所列词性与构式训练：学者（n.）、奖学金获得者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("headmaster",[
   ["sense-1","男校长（传统称谓）","n.",["男校长（传统称谓）"],["headmaster-1","highest-importance","crucial-importance","educational-institution-head","money-before-interest","main-legal-party"],"The headmaster welcomed new pupils at the school gate.","男校长在校门口迎接新生。",null,"https://www.merriam-webster.com/dictionary/headmaster"]
  ],[{"terms":["(中小学)校长","监工"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/headmaster","reason":"采用男校长的传统称谓，不把它当成所有性别的通用唯一校长称呼。本批 headmaster 按所列词性与构式训练：男校长（传统称谓）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("tutor",[
   ["sense-1","私人教师；导师","n.",["私人教师","导师"],["tutor-1","coach-1","coach-2","coach-3","coach-4"],"Her tutor suggested a clearer structure for the essay.","导师为她的文章建议了一种更清晰的结构。",null,"https://www.merriam-webster.com/dictionary/tutor"],
   ["sense-2","个别辅导；教授","v.",["个别辅导","教授"],["tutor-2","coach-1","coach-2","coach-3","coach-4"],"He tutors younger students in mathematics.","他为低年级学生辅导数学。",null,"https://www.merriam-webster.com/dictionary/tutor"]
  ],[{"terms":["家庭教师","助教","监护人","当...的教师","教","指导","约束","克制","当家庭教师","受家庭教师的指导"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tutor","reason":"本批 tutor 按所列词性与构式训练：私人教师；导师（n.）、个别辅导；教授（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("faculty",[
   ["sense-1","全体教员","n.",["全体教员"],["faculty-1","aptitude-1"],"The faculty discussed changes to the course.","全体教员讨论了课程调整。",null,"https://www.merriam-webster.com/dictionary/faculty"],
   ["sense-2","大学的学院；学部","n.",["大学的学院","学部"],["faculty-2","aptitude-1"],"The faculty of engineering occupies the newer building.","工程学院设在较新的那座楼里。",null,"https://www.merriam-webster.com/dictionary/faculty"],
   ["sense-3","官能；能力","n.",["官能","能力"],["faculty-3","aptitude-1"],"The exercise tests the faculty of observation.","这项练习测试观察能力。",null,"https://www.merriam-webster.com/dictionary/faculty"]
  ],[{"terms":["才能","(大学的)系","院系"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/faculty","reason":"本批 faculty 按所列词性与构式训练：全体教员（n.）、大学的学院；学部（n.）、官能；能力（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("candidate",[
   ["sense-1","候选人；应试者","n.",["候选人","应试者"],["candidate-1"],"Each candidate answered the same interview questions.","每位候选人都回答了相同的面试问题。",null,"https://www.merriam-webster.com/dictionary/candidate"],
   ["sense-2","可能适合某事的人或物","n.",["可能适合某事的人或物"],["candidate-2"],"The empty hall is a candidate for conversion into a studio.","空置的大厅可能适合改建为工作室。",null,"https://www.merriam-webster.com/dictionary/candidate"]
  ],[{"terms":["投考者","候选","候补者"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/candidate","reason":"本批 candidate 按所列词性与构式训练：候选人；应试者（n.）、可能适合某事的人或物（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("certify",[
   ["sense-1","正式证明；认证","v.",["正式证明","认证"],["certify-1","accredit-1","accredit-2"],"The document certifies that the equipment meets the standard.","文件证明设备符合标准。",null,"https://www.merriam-webster.com/dictionary/certify"],
   ["sense-2","授予专业资格","v.",["授予专业资格"],["certify-2","accredit-1","accredit-2"],"The organisation certifies instructors after the final assessment.","该组织在最终考核后授予教练资格。",null,"https://www.merriam-webster.com/dictionary/certify"]
  ],[{"terms":["证明","保证"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/certify","reason":"本批 certify 按所列词性与构式训练：正式证明；认证（v.）、授予专业资格（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("diploma",[
   ["sense-1","文凭；毕业证书","n.",["文凭","毕业证书"],["diploma-1","official-certification","issue-certification"],"She kept her diploma in a protective folder.","她把文凭放在保护性文件夹里。",null,"https://www.merriam-webster.com/dictionary/diploma"]
  ],[]);
  entry("embassy",[
   ["sense-1","大使馆馆舍","n.",["大使馆馆舍"],["embassy-1","mission-task","mission-delegation","mission-religious"],"The visitors waited outside the embassy.","访客在大使馆外等候。",null,"https://www.merriam-webster.com/dictionary/embassy"],
   ["sense-2","大使馆全体人员；使团","n.",["大使馆全体人员","使团"],["embassy-2","mission-task","mission-delegation","mission-religious"],"The embassy issued a brief statement.","大使馆发布了一份简短声明。",null,"https://www.merriam-webster.com/dictionary/embassy"]
  ],[{"terms":["大使馆"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/embassy","reason":"本批 embassy 按所列词性与构式训练：大使馆馆舍（n.）、大使馆全体人员；使团（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fresher",[
   ["sense-1","大学一年级新生（英式）","n.",["大学一年级新生（英式）"],["fresher-1"],"The fresher joined a tour of the campus.","这位大学新生参加了校园参观。",null,"https://www.collinsdictionary.com/dictionary/english/fresher"]
  ],[{"terms":["大学一年级生"],"decision":"scope-excluded","source":"https://www.collinsdictionary.com/dictionary/english/fresher","reason":"使用 Collins 的大学一年级新生名词，不把 Merriam-Webster 自动跳转的 fresh 比较级页面当作此名词定义。本批 fresher 按所列词性与构式训练：大学一年级新生（英式）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sophomore",[
   ["sense-1","二年级学生（美式）","n.",["二年级学生（美式）"],["sophomore-1"],"The sophomore helped the new students find their classrooms.","二年级学生帮助新生找到教室。",null,"https://www.merriam-webster.com/dictionary/sophomore"],
   ["sense-2","第二年的；系列第二部的","adj.",["第二年的","系列第二部的"],["sophomore-2"],"The band's sophomore album uses a smaller orchestra.","乐队的第二张专辑采用了较小的管弦乐队。",null,"https://www.merriam-webster.com/dictionary/sophomore"]
  ],[{"terms":["(大学)二年级生","二年级学生的","二年级的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sophomore","reason":"本批 sophomore 按所列词性与构式训练：二年级学生（美式）（n.）、第二年的；系列第二部的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sensory",[
   ["sense-1","感觉的；感官的","adj.",["感觉的","感官的"],["sensory-1","sense-1","notice-hidden-signs","instrument-detection","sense-2","sense-3","sense-4","sense-5"],"The activity combines several kinds of sensory information.","这项活动结合了几类感官信息。",null,"https://www.merriam-webster.com/dictionary/sensory"]
  ],[{"terms":["知觉的","传递感觉的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sensory","reason":"本批 sensory 按所列词性与构式训练：感觉的；感官的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("calculate",[
   ["sense-1","计算","v.",["计算"],["calculate-1","mathematical-calculation","rough-calculation","form-opinion-of","approximate-figure","cost-quotation-document"],"Calculate the area before ordering the tiles.","订购瓷砖前，先计算面积。",null,"https://www.merriam-webster.com/dictionary/calculate"],
   ["sense-2","估计；推算","v.",["估计","推算"],["calculate-2","mathematical-calculation","rough-calculation","form-opinion-of","approximate-figure","cost-quotation-document"],"The team calculated that the journey would take six hours.","团队估计旅程将耗时六小时。",null,"https://www.merriam-webster.com/dictionary/calculate"]
  ],[{"terms":["预测","计划","打算"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/calculate","reason":"本批 calculate 按所列词性与构式训练：计算（v.）、估计；推算（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fault",[
   ["sense-1","过错；责任","n.",["过错","责任"],["fault-1","error-mistake","17-error","mistake-error","error-deviation","blame-hold-responsible","blame-responsibility"],"The delay was nobody's fault.","这次延误不是任何人的过错。",null,"https://www.merriam-webster.com/dictionary/fault"],
   ["sense-2","缺陷；故障","n.",["缺陷","故障"],["fault-2","error-mistake","17-error","mistake-error","error-deviation","blame-hold-responsible","blame-responsibility"],"The engineer traced the fault to a damaged cable.","工程师把故障追溯到一根损坏的电缆。",null,"https://www.merriam-webster.com/dictionary/fault"],
   ["sense-3","地质断层","n.",["地质断层"],["fault-3","error-mistake","17-error","mistake-error","error-deviation","blame-hold-responsible","blame-responsibility"],"The map shows a fault beneath the valley.","地图显示了山谷下方的一条断层。",null,"https://www.merriam-webster.com/dictionary/fault"],
   ["sense-4","指责；挑剔","v.",["指责","挑剔"],["fault-4","error-mistake","17-error","mistake-error","error-deviation","blame-hold-responsible","blame-responsibility"],"The reviewer could not fault the accuracy of the measurements.","评审者无法挑剔测量数据的准确性。",null,"https://www.merriam-webster.com/dictionary/fault"],
   ["sense-5","球类比赛的发球失误","n.",["球类比赛的发球失误"],["fault-5","error-mistake","17-error","mistake-error","error-deviation","blame-hold-responsible","blame-responsibility"],"The umpire called a fault on the first serve.","裁判判定第一次发球失误。",null,"https://www.merriam-webster.com/dictionary/fault"]
  ],[{"terms":["毛病","产生断层","弄错"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fault","reason":"本批 fault 按所列词性与构式训练：过错；责任（n.）、缺陷；故障（n.）、地质断层（n.）、指责；挑剔（v.）、球类比赛的发球失误（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("measure",[
   ["sense-1","测量","v.",["测量"],["measure-1","measuring-instrument","measure-size-amount","assess-reaction","assessment-indicator","engineering-dimension","assess-value-quality","calculate-expression-value","step-foot","step-stair","step-action","step-move"],"The sensor measures the depth of the water.","传感器测量水深。",null,"https://www.merriam-webster.com/dictionary/measure"],
   ["sense-2","评估；衡量","v.",["评估","衡量"],["measure-2","measuring-instrument","measure-size-amount","assess-reaction","assessment-indicator","engineering-dimension","assess-value-quality","calculate-expression-value","step-foot","step-stair","step-action","step-move"],"The survey measures satisfaction with the new service.","调查衡量了人们对新服务的满意度。",null,"https://www.merriam-webster.com/dictionary/measure"],
   ["sense-3","措施","n.",["措施"],["measure-3","measuring-instrument","measure-size-amount","assess-reaction","assessment-indicator","engineering-dimension","assess-value-quality","calculate-expression-value","step-foot","step-stair","step-action","step-move"],"The council introduced a measure to reduce waste.","地方议会出台了一项减少废物的措施。",null,"https://www.merriam-webster.com/dictionary/measure"],
   ["sense-4","程度；计量标准","n.",["程度","计量标准"],["measure-4","measuring-instrument","measure-size-amount","assess-reaction","assessment-indicator","engineering-dimension","assess-value-quality","calculate-expression-value","step-foot","step-stair","step-action","step-move"],"The result provides a measure of the system's reliability.","结果提供了衡量系统可靠性的标准。",null,"https://www.merriam-webster.com/dictionary/measure"],
   ["sense-5","乐曲的一小节","n.",["乐曲的一小节"],["measure-5","measuring-instrument","measure-size-amount","assess-reaction","assessment-indicator","engineering-dimension","assess-value-quality","calculate-expression-value","step-foot","step-stair","step-action","step-move"],"The pianist repeated the final measure.","钢琴家重复演奏了最后一个小节。",null,"https://www.merriam-webster.com/dictionary/measure"],
   ["sense-6","测量工具；量具","n.",["测量工具","量具"],["measure-6","measuring-instrument","measure-size-amount","assess-reaction","assessment-indicator","engineering-dimension","assess-value-quality","calculate-expression-value","step-foot","step-stair","step-action","step-move"],"Use a tape measure to check the width of the doorway.","用卷尺核对门口宽度。","tape measure","https://www.merriam-webster.com/dictionary/measure"]
  ],[{"terms":["尺寸","量度器","量度标准","范围","限度","分寸","方法","测度","估量","权衡","调节","拿(自己或自己的力量等)作较量","度量"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/measure","reason":"本批 measure 按所列词性与构式训练：测量（v.）、评估；衡量（v.）、措施（n.）、程度；计量标准（n.）、乐曲的一小节（n.）、测量工具；量具（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mode",[
   ["sense-1","方式；运行模式","n.",["方式","运行模式"],["mode-1","method-systematic-way","method-acting-technique","fashion-style","fashion-way","fashion-make"],"Switch the device to silent mode.","把设备切换到静音模式。",null,"https://www.merriam-webster.com/dictionary/mode"],
   ["sense-2","音乐调式","n.",["音乐调式"],["mode-2","method-systematic-way","method-acting-technique","fashion-style","fashion-way","fashion-make"],"The melody uses a traditional mode.","这段旋律采用了一种传统调式。",null,"https://www.merriam-webster.com/dictionary/mode"],
   ["sense-3","众数","n.",["众数"],["mode-3","method-systematic-way","method-acting-technique","fashion-style","fashion-way","fashion-make"],"The mode is the value that occurs most often in the list.","众数是列表中出现次数最多的数值。",null,"https://www.merriam-webster.com/dictionary/mode"]
  ],[{"terms":["模式","状态","风格","调式"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mode","reason":"本批 mode 按所列词性与构式训练：方式；运行模式（n.）、音乐调式（n.）、众数（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mould",[
   ["sense-1","模具；模子","n.",["模具","模子"],["mould-1"],"The worker poured the mixture into a mould.","工人把混合物倒进模具。",null,"https://www.merriam-webster.com/dictionary/mold"],
   ["sense-2","霉菌；霉","n.",["霉菌","霉"],["mould-2"],"Green mould appeared on the damp wall.","潮湿的墙上长出了绿色霉斑。",null,"https://www.merriam-webster.com/dictionary/mold"],
   ["sense-3","塑形；模制","v.",["塑形","模制"],["mould-3"],"She moulded the clay into a shallow bowl.","她把黏土塑成一个浅碗。",null,"https://www.merriam-webster.com/dictionary/mold"],
   ["sense-4","塑造性格或观念","v.",["塑造性格或观念"],["mould-4"],"Early experiences mould a person's expectations.","早期经历塑造一个人的预期。",null,"https://www.merriam-webster.com/dictionary/mold"]
  ],[{"terms":["模制品","松软沃土","形成","浇铸","用泥土覆盖","发霉"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mold","reason":"本批 mould 按所列词性与构式训练：模具；模子（n.）、霉菌；霉（n.）、塑形；模制（v.）、塑造性格或观念（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("polytechnic",[
   ["sense-1","理工学院","n.",["理工学院"],["polytechnic-1","specialist-institution","put-system-into-action"],"The polytechnic offers courses in design and engineering.","理工学院开设设计和工程课程。",null,"https://www.merriam-webster.com/dictionary/polytechnic"],
   ["sense-2","理工教育的","adj.",["理工教育的"],["polytechnic-2","specialist-institution","put-system-into-action"],"The programme expands access to polytechnic education.","这个项目扩大了接受理工教育的机会。",null,"https://www.merriam-webster.com/dictionary/polytechnic"]
  ],[{"terms":["各种工艺的","工艺教育的","工艺专科学校","理工专科学校"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/polytechnic","reason":"本批 polytechnic 按所列词性与构式训练：理工学院（n.）、理工教育的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("tool",[
   ["sense-1","工具","n.",["工具"],["tool-1","precision-measuring-tool","musical-instrument","means-to-achieve","formal-legal-financial-document","put-plan-into-action","functional-device","travel-path","method-treatment","direct-along-path"],"Choose a tool that fits the narrow opening.","选择一件能伸进狭窄开口的工具。",null,"https://www.merriam-webster.com/dictionary/tool"],
   ["sense-2","达到目的的手段","n.",["达到目的的手段"],["tool-2","precision-measuring-tool","musical-instrument","means-to-achieve","formal-legal-financial-document","put-plan-into-action","functional-device","travel-path","method-treatment","direct-along-path"],"The map is a useful tool for explaining the changes.","地图是解释这些变化的有用手段。",null,"https://www.merriam-webster.com/dictionary/tool"],
   ["sense-3","受他人操纵的人；傀儡","n.",["受他人操纵的人","傀儡"],["tool-3","precision-measuring-tool","musical-instrument","means-to-achieve","formal-legal-financial-document","put-plan-into-action","functional-device","travel-path","method-treatment","direct-along-path"],"The character becomes a tool of the powerful merchant.","这个人物成了权势商人的傀儡。",null,"https://www.merriam-webster.com/dictionary/tool"],
   ["sense-4","用工具加工或刻制","v.",["用工具加工或刻制"],["tool-4","precision-measuring-tool","musical-instrument","means-to-achieve","formal-legal-financial-document","put-plan-into-action","functional-device","travel-path","method-treatment","direct-along-path"],"The craftsman tooled a pattern into the leather.","工匠用工具在皮革上刻出了图案。",null,"https://www.merriam-webster.com/dictionary/tool"]
  ],[{"terms":["机床","用工具加工","使用工具"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tool","reason":"本批 tool 按所列词性与构式训练：工具（n.）、达到目的的手段（n.）、受他人操纵的人；傀儡（n.）、用工具加工或刻制（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("violin",[
   ["sense-1","小提琴","n.",["小提琴"],["violin-1"],"The violin carried the melody above the softer instruments.","小提琴在较柔和的乐器声之上奏出旋律。",null,"https://www.merriam-webster.com/dictionary/violin"]
  ],[]);
  entry("cello",[
   ["sense-1","大提琴","n.",["大提琴"],["cello-1"],"She tuned the cello before the rehearsal.","她在排练前给大提琴调音。",null,"https://www.merriam-webster.com/dictionary/cello"]
  ],[]);
  entry("harmonica",[
   ["sense-1","口琴","n.",["口琴"],["harmonica-1"],"He played a short tune on the harmonica.","他用口琴吹奏了一段短曲。",null,"https://www.merriam-webster.com/dictionary/harmonica"]
  ],[{"terms":["玻璃钟琴","氢气发音管"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/harmonica","reason":"本批 harmonica 按所列词性与构式训练：口琴（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("trumpet",[
   ["sense-1","小号；喇叭形管乐器","n.",["小号","喇叭形管乐器"],["trumpet-1","announce-make-known","announce-judgment","public-official-announcement","make-clearly-known"],"A trumpet sounded from the back of the stage.","舞台后方响起了小号声。",null,"https://www.merriam-webster.com/dictionary/trumpet"],
   ["sense-2","大声宣扬","v.",["大声宣扬"],["trumpet-2","announce-make-known","announce-judgment","public-official-announcement","make-clearly-known"],"The company trumpeted the success of its new design.","公司大力宣扬新设计的成功。",null,"https://www.merriam-webster.com/dictionary/trumpet"],
   ["sense-3","发出喇叭般的声音","v.",["发出喇叭般的声音"],["trumpet-3","announce-make-known","announce-judgment","public-official-announcement","make-clearly-known"],"The elephant trumpeted beyond the trees.","树后传来大象的吼叫声。",null,"https://www.merriam-webster.com/dictionary/trumpet"]
  ],[{"terms":["喇叭","喇叭声","吹喇叭","用喇叭吹出","吹嘘"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/trumpet","reason":"本批 trumpet 按所列词性与构式训练：小号；喇叭形管乐器（n.）、大声宣扬（v.）、发出喇叭般的声音（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("patron",[
   ["sense-1","赞助者；支持者","n.",["赞助者","支持者"],["patron-1","customer-buyer","customer-person","financial-sponsorship","official-proposal-support","formal-personal-guarantee","baptismal-sponsor"],"The artist thanked the patron who funded the exhibition.","艺术家感谢了资助展览的赞助者。",null,"https://www.merriam-webster.com/dictionary/patron"],
   ["sense-2","顾客；主顾","n.",["顾客","主顾"],["patron-2","customer-buyer","customer-person","financial-sponsorship","official-proposal-support","formal-personal-guarantee","baptismal-sponsor"],"Regular patrons recognised the cafe's new owner.","老顾客认出了咖啡馆的新店主。",null,"https://www.merriam-webster.com/dictionary/patron"]
  ],[{"terms":["赞助人","保护人","庇护人"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/patron","reason":"本批 patron 按所列词性与构式训练：赞助者；支持者（n.）、顾客；主顾（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("famous",[
   ["sense-1","著名的","adj.",["著名的"],["famous-1","21-related-famous-fame","21-review-related-eminent-famous-fame-notorious-notoriety"],"The town is famous for its painted pottery.","这座小镇以彩陶闻名。",null,"https://www.merriam-webster.com/dictionary/famous"]
  ],[{"terms":["出名的","极好的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/famous","reason":"本批 famous 按所列词性与构式训练：著名的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fame",[
   ["sense-1","名声；声望","n.",["名声","声望"],["fame-1","21-related-famous-fame","reputation-1","admired-social-standing","21-review-related-eminent-famous-fame-notorious-notoriety"],"The discovery brought her international fame.","这个发现使她享誉国际。",null,"https://www.merriam-webster.com/dictionary/fame"]
  ],[{"terms":["名望","传说"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fame","reason":"本批 fame 按所列词性与构式训练：名声；声望（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("badminton",[
   ["sense-1","羽毛球运动","n.",["羽毛球运动"],["badminton-1"],"They played badminton in the sports hall.","他们在体育馆打羽毛球。",null,"https://www.merriam-webster.com/dictionary/badminton"]
  ],[]);
  entry("outdoor",[
   ["sense-1","户外的；露天的","adj.",["户外的","露天的"],["outdoor-1","external-outside","outsides-external","external-from-outside"],"The school added an outdoor classroom beside the garden.","学校在花园旁增设了一间户外教室。",null,"https://www.merriam-webster.com/dictionary/outdoor"]
  ],[{"terms":["屋外的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/outdoor","reason":"本批 outdoor 按所列词性与构式训练：户外的；露天的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("movement",[
   ["sense-1","移动；动作","n.",["移动","动作"],["movement-1","21-related-movement-move","physical-movement","formal-meeting-proposal","expressive-body-movement","trend-tendency","trend-move"],"The camera recorded every movement of the bird.","相机记录了鸟的每个动作。",null,"https://www.merriam-webster.com/dictionary/movement"],
   ["sense-2","社会运动；有组织的活动","n.",["社会运动","有组织的活动"],["movement-2","21-related-movement-move","physical-movement","formal-meeting-proposal","expressive-body-movement","trend-tendency","trend-move"],"The movement began as a campaign to protect the river.","这场社会运动始于保护河流的倡议。",null,"https://www.merriam-webster.com/dictionary/movement"],
   ["sense-3","乐章","n.",["乐章"],["movement-3","21-related-movement-move","physical-movement","formal-meeting-proposal","expressive-body-movement","trend-tendency","trend-move"],"The second movement opens with a quiet flute melody.","第二乐章以一段轻柔的长笛旋律开始。",null,"https://www.merriam-webster.com/dictionary/movement"],
   ["sense-4","机械装置的机芯","n.",["机械装置的机芯"],["movement-4","21-related-movement-move","physical-movement","formal-meeting-proposal","expressive-body-movement","trend-tendency","trend-move"],"The clock's movement was cleaned during the repair.","修理时，钟的机芯得到了清洗。",null,"https://www.merriam-webster.com/dictionary/movement"],
   ["sense-5","变化；趋势","n.",["变化","趋势"],["movement-5","21-related-movement-move","physical-movement","formal-meeting-proposal","expressive-body-movement","trend-tendency","trend-move"],"The chart shows a gradual upward movement in prices.","图表显示价格逐渐上升的趋势。",null,"https://www.merriam-webster.com/dictionary/movement"]
  ],[{"terms":["运动","运转","倾向","活动"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/movement","reason":"本批 movement 按所列词性与构式训练：移动；动作（n.）、社会运动；有组织的活动（n.）、乐章（n.）、机械装置的机芯（n.）、变化；趋势（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("move",[
   ["sense-1","移动；使改变位置","v.",["移动","使改变位置"],["move-1","21-related-movement-move","shift-move","17-move","shift-change","17-change","shift-blame","shift-gear","shift-period","shift-transition","shift-dress","touch-physical","touch-sense","touch-emotional","touch-small-amount"],"Move the chair away from the doorway.","把椅子从门口移开。",null,"https://www.merriam-webster.com/dictionary/move"],
   ["sense-2","搬家；迁居","v.",["搬家","迁居"],["move-2","21-related-movement-move","shift-move","17-move","shift-change","17-change","shift-blame","shift-gear","shift-period","shift-transition","shift-dress","touch-physical","touch-sense","touch-emotional","touch-small-amount"],"The family moved to a smaller house near the station.","这家人搬到了车站附近一座较小的房子。",null,"https://www.merriam-webster.com/dictionary/move"],
   ["sense-3","感动；触动情感","v.",["感动","触动情感"],["move-3","21-related-movement-move","shift-move","17-move","shift-change","17-change","shift-blame","shift-gear","shift-period","shift-transition","shift-dress","touch-physical","touch-sense","touch-emotional","touch-small-amount"],"The final scene moved the audience to tears.","最后一幕感动得观众流下了眼泪。",null,"https://www.merriam-webster.com/dictionary/move"],
   ["sense-4","正式提出动议","v.",["正式提出动议"],["move-4","21-related-movement-move","shift-move","17-move","shift-change","17-change","shift-blame","shift-gear","shift-period","shift-transition","shift-dress","touch-physical","touch-sense","touch-emotional","touch-small-amount"],"She moved that the meeting be postponed.","她提议推迟会议。",null,"https://www.merriam-webster.com/dictionary/move"],
   ["sense-5","行动；步骤","n.",["行动","步骤"],["move-5","21-related-movement-move","shift-move","17-move","shift-change","17-change","shift-blame","shift-gear","shift-period","shift-transition","shift-dress","touch-physical","touch-sense","touch-emotional","touch-small-amount"],"The next move is to test the repaired equipment.","下一步是测试修好的设备。",null,"https://www.merriam-webster.com/dictionary/move"],
   ["sense-6","棋步；下棋的一步","n.",["棋步","下棋的一步"],["move-6","21-related-movement-move","shift-move","17-move","shift-change","17-change","shift-blame","shift-gear","shift-period","shift-transition","shift-dress","touch-physical","touch-sense","touch-emotional","touch-small-amount"],"He considered his next move before touching a piece.","他在碰棋子前考虑了下一步棋。",null,"https://www.merriam-webster.com/dictionary/move"]
  ],[{"terms":["搬动","进展","使感动","提议","举措","搬迁"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/move","reason":"本批 move 按所列词性与构式训练：移动；使改变位置（v.）、搬家；迁居（v.）、感动；触动情感（v.）、正式提出动议（v.）、行动；步骤（n.）、棋步；下棋的一步（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("tennis",[
   ["sense-1","网球运动","n.",["网球运动"],["tennis-1"],"The new courts are used for tennis in summer.","新球场夏天用于打网球。",null,"https://www.merriam-webster.com/dictionary/tennis"]
  ],[{"terms":["网球"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tennis","reason":"本批 tennis 按所列词性与构式训练：网球运动（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("volleyball",[
   ["sense-1","排球运动","n.",["排球运动"],["volleyball-1"],"Volleyball became the most popular activity at the camp.","排球成了营地最受欢迎的活动。",null,"https://www.merriam-webster.com/dictionary/volleyball"],
   ["sense-2","排球用球","n.",["排球用球"],["volleyball-2"],"A volleyball rolled under the bench.","一个排球滚到了长凳下面。",null,"https://www.merriam-webster.com/dictionary/volleyball"]
  ],[{"terms":["排球"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/volleyball","reason":"本批 volleyball 按所列词性与构式训练：排球运动（n.）、排球用球（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("opaque",[
   ["sense-1","不透明的","adj.",["不透明的"],["opaque-1","obscure-1","vague-unclear","vague-uncertain","hide-from-view","hide-information","obscure-2"],"The jar has an opaque lid that blocks the light.","罐子有一个遮光的不透明盖子。",null,"https://www.merriam-webster.com/dictionary/opaque"],
   ["sense-2","难以理解的","adj.",["难以理解的"],["opaque-2","obscure-1","vague-unclear","vague-uncertain","hide-from-view","hide-information","obscure-2"],"The instructions were too opaque for a first-time user.","这些说明对首次使用者来说过于晦涩。",null,"https://www.merriam-webster.com/dictionary/opaque"]
  ],[{"terms":["不透明物","不传热的","不传导的","阴暗的","白底"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/opaque","reason":"本批 opaque 按所列词性与构式训练：不透明的（adj.）、难以理解的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("phone",[
   ["sense-1","电话；电话机","n.",["电话","电话机"],["phone-1"],"She left her phone beside the notebook.","她把电话放在笔记本旁边。",null,"https://www.merriam-webster.com/dictionary/phone"],
   ["sense-2","打电话","v.",["打电话"],["phone-2"],"Please phone the office when the delivery arrives.","送货到达时，请给办公室打电话。",null,"https://www.merriam-webster.com/dictionary/phone"]
  ],[{"terms":["受话器","耳机","打电话给"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/phone","reason":"本批 phone 按所列词性与构式训练：电话；电话机（n.）、打电话（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("vacuum",[
   ["sense-1","真空；低压空间","n.",["真空","低压空间"],["vacuum-1","empty-space-absence","legally-invalid","devoid-of-quality"],"The pump creates a partial vacuum inside the chamber.","泵在腔室中形成部分真空。",null,"https://www.merriam-webster.com/dictionary/vacuum"],
   ["sense-2","空缺；缺乏影响的状态","n.",["空缺","缺乏影响的状态"],["vacuum-2","empty-space-absence","legally-invalid","devoid-of-quality"],"The sudden departure left a vacuum in the leadership.","突然离任使领导层出现了空缺。",null,"https://www.merriam-webster.com/dictionary/vacuum"],
   ["sense-3","真空吸尘器","n.",["真空吸尘器"],["vacuum-3","empty-space-absence","legally-invalid","devoid-of-quality"],"The vacuum is stored beneath the stairs.","吸尘器放在楼梯下面。",null,"https://www.merriam-webster.com/dictionary/vacuum"],
   ["sense-4","用吸尘器清扫","v.",["用吸尘器清扫"],["vacuum-4","empty-space-absence","legally-invalid","devoid-of-quality"],"He vacuumed the carpet before moving the furniture.","他在搬动家具前用吸尘器清扫了地毯。",null,"https://www.merriam-webster.com/dictionary/vacuum"]
  ],[{"terms":["空间","真空的","产生真空的","利用真空的","用吸尘器打扫"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/vacuum","reason":"本批 vacuum 按所列词性与构式训练：真空；低压空间（n.）、空缺；缺乏影响的状态（n.）、真空吸尘器（n.）、用吸尘器清扫（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("camera",[
   ["sense-1","照相机；摄像机","n.",["照相机","摄像机"],["camera-1","camera-image"],"The camera automatically adjusts to the changing light.","相机会根据变化的光线自动调节。",null,"https://www.merriam-webster.com/dictionary/camera"]
  ],[{"terms":["摄影机","密谈室","暗箱","摄影"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/camera","reason":"本批 camera 按所列词性与构式训练：照相机；摄像机（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("portable",[
   ["sense-1","便携的；可移动的","adj.",["便携的","可移动的"],["portable-1","mobile-movable","mobile-phone-related","mobile-phone","mobile-hanging-art"],"The portable lamp runs on a small battery.","这盏便携灯靠一块小电池供电。",null,"https://www.merriam-webster.com/dictionary/portable"],
   ["sense-2","软件可移植的","adj.",["软件可移植的"],["portable-2","mobile-movable","mobile-phone-related","mobile-phone","mobile-hanging-art"],"The code is portable across several computer systems.","这段代码可以移植到几个计算机系统。",null,"https://www.merriam-webster.com/dictionary/portable"]
  ],[{"terms":["可携带的","可搬运的","可移植的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/portable","reason":"本批 portable 按所列词性与构式训练：便携的；可移动的（adj.）、软件可移植的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("hurdle",[
   ["sense-1","跨栏用栏架","n.",["跨栏用栏架"],["hurdle-1","barrier-to-progress","barrier-physical","barrier-obstacle"],"The runner clipped the last hurdle but kept going.","跑步者碰到了最后一道栏架，但继续前进。",null,"https://www.merriam-webster.com/dictionary/hurdle"],
   ["sense-2","障碍；难关","n.",["障碍","难关"],["hurdle-2","barrier-to-progress","barrier-physical","barrier-obstacle"],"Finding a suitable site was the first hurdle.","找到合适场地是第一道难关。",null,"https://www.merriam-webster.com/dictionary/hurdle"],
   ["sense-3","跨越栏架或障碍","v.",["跨越栏架或障碍"],["hurdle-3","barrier-to-progress","barrier-physical","barrier-obstacle"],"She hurdled the low fence to reach the path.","她跨过矮篱笆来到了小路上。",null,"https://www.merriam-webster.com/dictionary/hurdle"]
  ],[{"terms":["跳栏","临时活动篱笆","用篱笆围","越过","克服"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/hurdle","reason":"本批 hurdle 按所列词性与构式训练：跨栏用栏架（n.）、障碍；难关（n.）、跨越栏架或障碍（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("lantern",[
   ["sense-1","灯笼；提灯","n.",["灯笼","提灯"],["lantern-1"],"A paper lantern hung above the entrance.","入口上方挂着一盏纸灯笼。",null,"https://www.merriam-webster.com/dictionary/lantern"]
  ],[{"terms":["航标灯","装上提灯"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/lantern","reason":"本批 lantern 按所列词性与构式训练：灯笼；提灯（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("raincoat",[
   ["sense-1","雨衣","n.",["雨衣"],["raincoat-1"],"He folded the wet raincoat and put it by the door.","他叠好湿雨衣，把它放在门旁。",null,"https://www.merriam-webster.com/dictionary/raincoat"]
  ],[]);
  entry("dredge",[
   ["sense-1","疏浚；挖取河底物","v.",["疏浚","挖取河底物"],["dredge-1","archaeological-digging","remove-earth"],"The crew dredged the harbour to deepen the channel.","工作人员疏浚港口以加深航道。",null,"https://www.merriam-webster.com/dictionary/dredge"],
   ["sense-2","翻出往事；搜寻出","v.",["翻出往事","搜寻出"],["dredge-2","archaeological-digging","remove-earth"],"The question dredged up an old memory.","这个问题勾起了一段旧记忆。","dredge up","https://www.merriam-webster.com/dictionary/dredge"],
   ["sense-3","撒粉裹住食物","v.",["撒粉裹住食物"],["dredge-3","archaeological-digging","remove-earth"],"Dredge the pieces in flour before putting them in the pan.","把这些食材放进锅前，先裹上面粉。",null,"https://www.merriam-webster.com/dictionary/dredge"]
  ],[{"terms":["挖泥机","拖网","用挖泥机疏浚","(用船)采捞"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dredge","reason":"本批 dredge 按所列词性与构式训练：疏浚；挖取河底物（v.）、翻出往事；搜寻出（v.）、撒粉裹住食物（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("forge",[
   ["sense-1","锻造炉；铁匠铺","n.",["锻造炉","铁匠铺"],["forge-1","counterfeit-fake","17-false","not-genuine","imitation-not-genuine","counterfeit-feigned","feign-pretend","pretend-feign","counterfeit-forge","forge-falsify","counterfeit-copy","counterfeit-object"],"The forge stood at the edge of the village.","铁匠铺位于村边。",null,"https://www.merriam-webster.com/dictionary/forge"],
   ["sense-2","锻造金属","v.",["锻造金属"],["forge-2","counterfeit-fake","17-false","not-genuine","imitation-not-genuine","counterfeit-feigned","feign-pretend","pretend-feign","counterfeit-forge","forge-falsify","counterfeit-copy","counterfeit-object"],"The craftsman forged the iron into a curved hook.","工匠把铁锻造成一个弯钩。",null,"https://www.merriam-webster.com/dictionary/forge"],
   ["sense-3","伪造","v.",["伪造"],["forge-3","counterfeit-fake","17-false","not-genuine","imitation-not-genuine","counterfeit-feigned","feign-pretend","pretend-feign","counterfeit-forge","forge-falsify","counterfeit-copy","counterfeit-object"],"The investigation found that someone had forged the signature.","调查发现有人伪造了签名。",null,"https://www.merriam-webster.com/dictionary/forge"],
   ["sense-4","努力建立","v.",["努力建立"],["forge-4","counterfeit-fake","17-false","not-genuine","imitation-not-genuine","counterfeit-feigned","feign-pretend","pretend-feign","counterfeit-forge","forge-falsify","counterfeit-copy","counterfeit-object"],"The project helped forge links between the two schools.","项目帮助两所学校建立了联系。",null,"https://www.merriam-webster.com/dictionary/forge"],
   ["sense-5","稳步前进","v.",["稳步前进"],["forge-5","counterfeit-fake","17-false","not-genuine","imitation-not-genuine","counterfeit-feigned","feign-pretend","pretend-feign","counterfeit-forge","forge-falsify","counterfeit-copy","counterfeit-object"],"The team forged ahead despite the delays.","尽管出现延误，团队仍稳步推进。","forge ahead","https://www.merriam-webster.com/dictionary/forge"]
  ],[{"terms":["熔炉","铁工厂","打制","锻造"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/forge","reason":"本批 forge 按所列词性与构式训练：锻造炉；铁匠铺（n.）、锻造金属（v.）、伪造（v.）、努力建立（v.）、稳步前进（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("factor",[
   ["sense-1","因素","n.",["因素"],["factor-1","element-1","constituent-part","assembled-component-unit","vector-component","element-2","element-3","element-4","ingredient-component"],"Distance was an important factor in choosing the site.","距离是选择场地的重要因素。",null,"https://www.merriam-webster.com/dictionary/factor"],
   ["sense-2","因数；因子","n.",["因数","因子"],["factor-2","element-1","constituent-part","assembled-component-unit","vector-component","element-2","element-3","element-4","ingredient-component"],"Three is a factor of twelve.","三是十二的一个因数。",null,"https://www.merriam-webster.com/dictionary/factor"],
   ["sense-3","把某因素计入","v.",["把某因素计入"],["factor-3","element-1","constituent-part","assembled-component-unit","vector-component","element-2","element-3","element-4","ingredient-component"],"The estimate factors in the cost of transport.","估算把运输费用计算在内。","factor in","https://www.merriam-webster.com/dictionary/factor"]
  ],[{"terms":["系数","基因","代理人","因式"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/factor","reason":"本批 factor 按所列词性与构式训练：因素（n.）、因数；因子（n.）、把某因素计入（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("scissors",[
   ["sense-1","剪刀（复数形式）","n.",["剪刀（复数形式）"],["scissors-1"],"Use a pair of scissors to cut along the dotted line.","用一把剪刀沿虚线剪开。",null,"https://www.merriam-webster.com/dictionary/scissors"]
  ],[{"terms":["剪刀"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/scissors","reason":"采用复数形态的剪刀；例句使用 a pair of scissors，不把其词形改成单数 scissor。本批 scissors 按所列词性与构式训练：剪刀（复数形式）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("weave",[
   ["sense-1","织；编织","v.",["织","编织"],["weave-1","knit-fabric","knit-unite","knit-heal","knit-brows"],"She wove a basket from thin willow branches.","她用细柳枝编了一个篮子。",null,"https://www.merriam-webster.com/dictionary/weave"],
   ["sense-2","编排融合","v.",["编排融合"],["weave-2","knit-fabric","knit-unite","knit-heal","knit-brows"],"The author weaves several family stories into the novel.","作者把几个家庭的故事编进了小说。",null,"https://www.merriam-webster.com/dictionary/weave"],
   ["sense-3","迂回穿行","v.",["迂回穿行"],["weave-3","knit-fabric","knit-unite","knit-heal","knit-brows"],"The cyclist weaved between the parked cars.","骑车人在停着的汽车之间迂回穿行。",null,"https://www.merriam-webster.com/dictionary/weave"],
   ["sense-4","织法；织纹","n.",["织法","织纹"],["weave-4","knit-fabric","knit-unite","knit-heal","knit-brows"],"The cloth has a loose weave that lets air through.","布料的织纹疏松，可以透气。",null,"https://www.merriam-webster.com/dictionary/weave"]
  ],[{"terms":["编法","编织式样","组合","编排","使迂回前进","纺织","迂回行进"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/weave","reason":"本批 weave 按所列词性与构式训练：织；编织（v.）、编排融合（v.）、迂回穿行（v.）、织法；织纹（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sugar",[
   ["sense-1","糖","n.",["糖"],["sugar-1","sweeten-sugar","sweeten-attractive","sweeten-mood"],"The label lists the amount of sugar in each serving.","标签列出了每份所含的糖量。",null,"https://www.merriam-webster.com/dictionary/sugar"],
   ["sense-2","加糖；使变甜","v.",["加糖","使变甜"],["sugar-2","sweeten-sugar","sweeten-attractive","sweeten-mood"],"She sugared the berries before baking the pie.","烤派前，她给浆果加了糖。",null,"https://www.merriam-webster.com/dictionary/sugar"]
  ],[{"terms":["糖块","甜言蜜语","加糖于","使甜蜜","粉饰","美化","制成糖"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sugar","reason":"本批 sugar 按所列词性与构式训练：糖（n.）、加糖；使变甜（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("pepper",[
   ["sense-1","胡椒；胡椒粉","n.",["胡椒","胡椒粉"],["pepper-1"],"Add a little black pepper to the soup.","往汤里加一点黑胡椒粉。",null,"https://www.merriam-webster.com/dictionary/pepper"],
   ["sense-2","甜椒；辣椒果实","n.",["甜椒","辣椒果实"],["pepper-2"],"The pepper turned red as it ripened.","这个椒成熟时变红了。",null,"https://www.merriam-webster.com/dictionary/pepper"],
   ["sense-3","使布满；反复抛来","v.",["使布满","反复抛来"],["pepper-3"],"The audience peppered the speaker with questions.","观众接连不断地向演讲者提问。","pepper with","https://www.merriam-webster.com/dictionary/pepper"]
  ],[{"terms":["辣椒","花椒"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pepper","reason":"本批 pepper 按所列词性与构式训练：胡椒；胡椒粉（n.）、甜椒；辣椒果实（n.）、使布满；反复抛来（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("garlic",[
   ["sense-1","大蒜","n.",["大蒜"],["garlic-1"],"The cook crushed the garlic with the flat of a knife.","厨师用刀面压碎了大蒜。",null,"https://www.merriam-webster.com/dictionary/garlic"]
  ],[]);
  entry("salty",[
   ["sense-1","咸的；含盐的","adj.",["咸的","含盐的"],["salty-1","sodium-chloride","salt-food","containing-salt","add-zest-liveliness"],"The sauce was too salty for her taste.","酱汁对她来说太咸了。",null,"https://www.merriam-webster.com/dictionary/salty"]
  ],[{"terms":["有盐分的","咸味浓的","海洋的","辛辣的","有经验的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/salty","reason":"本批 salty 按所列词性与构式训练：咸的；含盐的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("spice",[
   ["sense-1","香料；调味品","n.",["香料","调味品"],["spice-1","food-taste","distinctive-character","add-taste-or-character"],"The market stall sells spice in small paper bags.","市场摊位用小纸袋出售香料。",null,"https://www.merriam-webster.com/dictionary/spice"],
   ["sense-2","趣味；刺激性","n.",["趣味","刺激性"],["spice-2","food-taste","distinctive-character","add-taste-or-character"],"The unexpected challenge added spice to the journey.","意外的挑战给旅程增添了趣味。",null,"https://www.merriam-webster.com/dictionary/spice"],
   ["sense-3","增添趣味","v.",["增添趣味"],["spice-3","food-taste","distinctive-character","add-taste-or-character"],"The storyteller spiced the account with humorous details.","讲故事的人用幽默细节使叙述更有趣。",null,"https://www.merriam-webster.com/dictionary/spice"],
   ["sense-4","给食物加香料","v.",["给食物加香料"],["spice-4","food-taste","distinctive-character","add-taste-or-character"],"The cook spiced the rice with cardamom.","厨师用小豆蔻给米饭调味。",null,"https://www.merriam-webster.com/dictionary/spice"]
  ],[{"terms":["药料","香气","情趣","少许","加香料","使添趣味"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/spice","reason":"本批 spice 按所列词性与构式训练：香料；调味品（n.）、趣味；刺激性（n.）、增添趣味（v.）、给食物加香料（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sauce",[
   ["sense-1","调味汁；酱","n.",["调味汁","酱"],["sauce-1"],"The sauce is served separately from the vegetables.","酱汁与蔬菜单独上桌。",null,"https://www.merriam-webster.com/dictionary/sauce"]
  ],[{"terms":["酱油","给...调味","使增加趣味"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sauce","reason":"本批 sauce 按所列词性与构式训练：调味汁；酱（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bitter",[
   ["sense-1","苦的","adj.",["苦的"],["bitter-1"],"The drink has a slightly bitter taste.","这种饮料带一点苦味。",null,"https://www.merriam-webster.com/dictionary/bitter"],
   ["sense-2","痛苦的；令人难受的","adj.",["痛苦的","令人难受的"],["bitter-2"],"The closure was a bitter disappointment for the volunteers.","关闭使志愿者感到极度失望。",null,"https://www.merriam-webster.com/dictionary/bitter"],
   ["sense-3","怨恨的；充满敌意的","adj.",["怨恨的","充满敌意的"],["bitter-3"],"He remained bitter about the unfair decision.","他对不公平的决定仍怀着怨恨。",null,"https://www.merriam-webster.com/dictionary/bitter"],
   ["sense-4","刺骨的；严酷的","adj.",["刺骨的","严酷的"],["bitter-4"],"They worked outside in the bitter cold.","他们冒着刺骨的严寒在户外工作。",null,"https://www.merriam-webster.com/dictionary/bitter"]
  ],[{"terms":["怀恨的","刺骨","(使)变苦"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bitter","reason":"本批 bitter 按所列词性与构式训练：苦的（adj.）、痛苦的；令人难受的（adj.）、怨恨的；充满敌意的（adj.）、刺骨的；严酷的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("yummy",[
   ["sense-1","美味的（非正式）","adj.",["美味的（非正式）"],["yummy-1","pleasant-food-taste","very-pleasurable","pleasant-flavour","terrific-1","marvelous-1","splendid-magnificent","17-shine","splendid-excellent","exceptional-excellence","fantastic-excellent","excellent-quality","fantastic-imaginary","fantastic-unbelievable","terrific-2"],"The children said the warm bread was yummy.","孩子们说热面包很好吃。",null,"https://www.merriam-webster.com/dictionary/yummy"]
  ],[{"terms":["美味的","可口的","赏心悦目的","愉快的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/yummy","reason":"本批 yummy 按所列词性与构式训练：美味的（非正式）（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("digestion",[
   ["sense-1","消化；消化过程","n.",["消化","消化过程"],["digestion-1","digest-food","absorb-information","written-summary"],"The diagram traces food through the stages of digestion.","图示追踪了食物经过各个消化阶段的过程。",null,"https://www.merriam-webster.com/dictionary/digestion"]
  ],[{"terms":["消化力","领悟","消化作用","蒸煮","蒸煮作用","煮解","浸提","陈化"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/digestion","reason":"本批 digestion 按所列词性与构式训练：消化；消化过程（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("diet",[
   ["sense-1","日常饮食","n.",["日常饮食"],["diet-1","nourishing-substance","nutrient-nourishment","food-for-thought","nourishment-process","nutrition-science"],"The survey records changes in the family's diet.","调查记录了这个家庭日常饮食的变化。",null,"https://www.merriam-webster.com/dictionary/diet"],
   ["sense-2","特定饮食方案","n.",["特定饮食方案"],["diet-2","nourishing-substance","nutrient-nourishment","food-for-thought","nourishment-process","nutrition-science"],"The menu offers options for people following a special diet.","菜单为遵循特殊饮食方案的人提供选择。",null,"https://www.merriam-webster.com/dictionary/diet"],
   ["sense-3","节食；按规定控制饮食","v.",["节食","按规定控制饮食"],["diet-3","nourishing-substance","nutrient-nourishment","food-for-thought","nourishment-process","nutrition-science"],"The character diets for a while and then returns to his usual meals.","这个人物节食了一阵子，随后恢复了平常的饮食。",null,"https://www.merriam-webster.com/dictionary/diet"]
  ],[{"terms":["议会","照规定饮食","忌食"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/diet","reason":"本批 diet 按所列词性与构式训练：日常饮食（n.）、特定饮食方案（n.）、节食；按规定控制饮食（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("gourmet",[
   ["sense-1","美食家","n.",["美食家"],["gourmet-1"],"The gourmet carefully compared the flavours of the two dishes.","美食家仔细比较了两道菜的风味。",null,"https://www.merriam-webster.com/dictionary/gourmet"],
   ["sense-2","精致高档食品的","adj.",["精致高档食品的"],["gourmet-2"],"The shop specialises in gourmet chocolates.","这家店专营精致的高档巧克力。",null,"https://www.merriam-webster.com/dictionary/gourmet"]
  ],[]);
  entry("lick",[
   ["sense-1","舔","v.",["舔"],["lick-1"],"The dog licked the water from the bowl.","狗舔着碗里的水。",null,"https://www.merriam-webster.com/dictionary/lick"],
   ["sense-2","克服；击败（非正式）","v.",["克服","击败（非正式）"],["lick-2"],"The team finally licked the problem with the faulty valve.","团队终于解决了阀门故障这个难题。",null,"https://www.merriam-webster.com/dictionary/lick"],
   ["sense-3","舔一下","n.",["舔一下"],["lick-3"],"The child gave the ice cream a quick lick.","孩子飞快地舔了一口冰淇淋。",null,"https://www.merriam-webster.com/dictionary/lick"],
   ["sense-4","少量；一点","n.",["少量","一点"],["lick-4"],"The gate could use a lick of paint.","这扇门稍稍刷点漆就会更好。","a lick of","https://www.merriam-webster.com/dictionary/lick"]
  ],[{"terms":["少许","打","卷过","鞭打","轻轻拍打"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/lick","reason":"本批 lick 按所列词性与构式训练：舔（v.）、克服；击败（非正式）（v.）、舔一下（n.）、少量；一点（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("milk",[
   ["sense-1","奶；乳","n.",["奶","乳"],["milk-1","exploit-use","exploit-unfair","exploit-deed"],"The jug contains fresh milk from the farm.","壶里装着农场送来的鲜奶。",null,"https://www.merriam-webster.com/dictionary/milk"],
   ["sense-2","挤奶","v.",["挤奶"],["milk-2","exploit-use","exploit-unfair","exploit-deed"],"The farmer milks the cows before sunrise.","农民在日出前给奶牛挤奶。",null,"https://www.merriam-webster.com/dictionary/milk"],
   ["sense-3","利用以尽量获取好处","v.",["利用以尽量获取好处"],["milk-3","exploit-use","exploit-unfair","exploit-deed"],"The speaker milked the applause by returning for another bow.","演讲者再次回来鞠躬，尽量赢取更多掌声。",null,"https://www.merriam-webster.com/dictionary/milk"]
  ],[{"terms":["乳状物","挤乳","榨取","产乳"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/milk","reason":"本批 milk 按所列词性与构式训练：奶；乳（n.）、挤奶（v.）、利用以尽量获取好处（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("trim",[
   ["sense-1","修剪；削减","v.",["修剪","削减"],["trim-1"],"Trim the loose threads before sewing the lining.","缝衬里前，剪掉松散的线头。",null,"https://www.merriam-webster.com/dictionary/trim"],
   ["sense-2","装饰边缘","v.",["装饰边缘"],["trim-2"],"They trimmed the window with coloured ribbons.","他们用彩色丝带装饰窗边。",null,"https://www.merriam-webster.com/dictionary/trim"],
   ["sense-3","整洁的；线条简洁的","adj.",["整洁的","线条简洁的"],["trim-3"],"The cottage stood behind a trim hedge.","小屋位于一道修剪整齐的树篱后面。",null,"https://www.merriam-webster.com/dictionary/trim"],
   ["sense-4","装饰边料","n.",["装饰边料"],["trim-4"],"The jacket has a narrow strip of leather trim.","夹克上有一条窄窄的皮革饰边。",null,"https://www.merriam-webster.com/dictionary/trim"]
  ],[{"terms":["整齐","情形","整齐的","使整齐","整理","调整","见风使舵","库存管理检查规则程序"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/trim","reason":"本批 trim 按所列词性与构式训练：修剪；削减（v.）、装饰边缘（v.）、整洁的；线条简洁的（adj.）、装饰边料（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("maintenance",[
   ["sense-1","维护；保养","n.",["维护","保养"],["maintenance-1","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer"],"Regular maintenance keeps the lift working smoothly.","定期保养让电梯顺畅运行。",null,"https://www.merriam-webster.com/dictionary/maintenance"],
   ["sense-2","生活供养费用","n.",["生活供养费用"],["maintenance-2","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer"],"The agreement includes a payment for the child's maintenance.","协议包括一笔用于抚养孩子的款项。",null,"https://www.merriam-webster.com/dictionary/maintenance"]
  ],[{"terms":["保持","维修","生活费用","坚持","扶养"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/maintenance","reason":"本批 maintenance 按所列词性与构式训练：维护；保养（n.）、生活供养费用（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("entrance",[
   ["sense-1","入口","n.",["入口"],["entrance-1","21-related-entrance-entry"],"The side entrance opens onto a narrow lane.","侧门通向一条狭窄小巷。",null,"https://www.merriam-webster.com/dictionary/entrance"],
   ["sense-2","进入；出场","n.",["进入","出场"],["entrance-2","21-related-entrance-entry"],"The actor timed his entrance to the music.","演员配合音乐掌握了出场时机。",null,"https://www.merriam-webster.com/dictionary/entrance"]
  ],[{"terms":["进入点","入场","入学","开始(阶段)","就任","使出神","使入迷"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/entrance","reason":"当前 /ˈentrəns/ 仅采用入口及进入名词；使入迷的动词另读 /ɪnˈtrɑːns/，本批留作参考。本批 entrance 按所列词性与构式训练：入口（n.）、进入；出场（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("entry",[
   ["sense-1","进入；进入权","n.",["进入","进入权"],["entry-1","21-related-entrance-entry","stored-information","performance-history","music-record","best-performance","record-media","measure-register"],"The ticket allows entry to all three exhibitions.","这张票可用于进入全部三个展览。",null,"https://www.merriam-webster.com/dictionary/entry"],
   ["sense-2","条目；记录","n.",["条目","记录"],["entry-2","21-related-entrance-entry","stored-information","performance-history","music-record","best-performance","record-media","measure-register"],"Each entry in the diary includes a date.","日记中的每条记录都包含日期。",null,"https://www.merriam-webster.com/dictionary/entry"],
   ["sense-3","参赛作品或参赛者","n.",["参赛作品或参赛者"],["entry-3","21-related-entrance-entry","stored-information","performance-history","music-record","best-performance","record-media","measure-register"],"The judges examined every entry before choosing the winner.","评委在选出获胜者前审阅了每件参赛作品。",null,"https://www.merriam-webster.com/dictionary/entry"]
  ],[{"terms":["登录","入口","报关","登录项","输入项"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/entry","reason":"本批 entry 按所列词性与构式训练：进入；进入权（n.）、条目；记录（n.）、参赛作品或参赛者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("install",[
   ["sense-1","安装；设置","v.",["安装","设置"],["install-1","appoint-select","appoint-fix"],"The technician installed a new sensor beside the door.","技术员在门旁安装了一个新传感器。",null,"https://www.merriam-webster.com/dictionary/install"],
   ["sense-2","使就任；安置于职位","v.",["使就任","安置于职位"],["install-2","appoint-select","appoint-fix"],"The committee installed a new chair after the election.","选举后，委员会任命了新主席。",null,"https://www.merriam-webster.com/dictionary/install"]
  ],[{"terms":["安置","使就职","任命"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/install","reason":"本批 install 按所列词性与构式训练：安装；设置（v.）、使就任；安置于职位（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("design",[
   ["sense-1","设计；图样","n.",["设计","图样"],["design-1","devise-1","create-new-design","fabricate-untrue-account","pattern-design","pattern-regularity","pattern-model","pattern-model-verb"],"The design includes space for a larger window.","设计中留出了安装更大窗户的空间。",null,"https://www.merriam-webster.com/dictionary/design"],
   ["sense-2","意图；预谋","n.",["意图","预谋"],["design-2","devise-1","create-new-design","fabricate-untrue-account","pattern-design","pattern-regularity","pattern-model","pattern-model-verb"],"The arrangement was the result of design rather than chance.","这个安排是有意为之，而非偶然。",null,"https://www.merriam-webster.com/dictionary/design"],
   ["sense-3","设计；规划","v.",["设计","规划"],["design-3","devise-1","create-new-design","fabricate-untrue-account","pattern-design","pattern-regularity","pattern-model","pattern-model-verb"],"The students designed a bridge from simple materials.","学生们用简单材料设计了一座桥。",null,"https://www.merriam-webster.com/dictionary/design"]
  ],[{"terms":["方案","企图","计划"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/design","reason":"本批 design 按所列词性与构式训练：设计；图样（n.）、意图；预谋（n.）、设计；规划（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("exterior",[
   ["sense-1","外部；外表","n.",["外部","外表"],["exterior-1","21-related-outside-exterior-peripheral","external-outside","outsides-external","external-from-outside"],"The building's exterior is faced with pale stone.","建筑外部饰以浅色石材。",null,"https://www.merriam-webster.com/dictionary/exterior"],
   ["sense-2","外面的；用于外部的","adj.",["外面的","用于外部的"],["exterior-2","21-related-outside-exterior-peripheral","external-outside","outsides-external","external-from-outside"],"The repair requires exterior paint that can resist rain.","维修需要能抵抗雨水的外墙涂料。",null,"https://www.merriam-webster.com/dictionary/exterior"]
  ],[{"terms":["表面","外貌","外部的","外在的","表面的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/exterior","reason":"本批 exterior 按所列词性与构式训练：外部；外表（n.）、外面的；用于外部的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("booth",[
   ["sense-1","摊位；小隔间","n.",["摊位","小隔间"],["booth-1"],"The volunteer waited in the information booth.","志愿者在咨询亭里等候。",null,"https://www.merriam-webster.com/dictionary/booth"],
   ["sense-2","餐馆卡座","n.",["餐馆卡座"],["booth-2"],"They sat in a booth at the back of the cafe.","他们坐在咖啡馆后面的卡座里。",null,"https://www.merriam-webster.com/dictionary/booth"]
  ],[{"terms":["亭","摊棚","货摊","电话间"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/booth","reason":"本批 booth 按所列词性与构式训练：摊位；小隔间（n.）、餐馆卡座（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("lavatory",[
   ["sense-1","厕所；盥洗室","n.",["厕所","盥洗室"],["lavatory-1","toilet-fixture","toilet-room","washbowl-1","basin-1","bowl-container","lawn-bowls-sport","bowl-a-ball","move-smoothly","basin-2"],"The sign points to the lavatory at the end of the corridor.","指示牌指向走廊尽头的盥洗室。",null,"https://www.merriam-webster.com/dictionary/lavatory"]
  ],[{"terms":["洗脸盆"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/lavatory","reason":"本批 lavatory 按所列词性与构式训练：厕所；盥洗室（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("outside",[
   ["sense-1","外部；外面","n.",["外部","外面"],["outside-1","21-related-outside-exterior-peripheral","external-outside","outsides-external","external-from-outside"],"The outside of the box was wet.","箱子外面湿了。",null,"https://www.merriam-webster.com/dictionary/outside"],
   ["sense-2","外面的；外来的","adj.",["外面的","外来的"],["outside-2","21-related-outside-exterior-peripheral","external-outside","outsides-external","external-from-outside"],"The project depends on outside funding.","这个项目依赖外部资助。",null,"https://www.merriam-webster.com/dictionary/outside"],
   ["sense-3","在外面","adv.",["在外面"],["outside-3","21-related-outside-exterior-peripheral","external-outside","outsides-external","external-from-outside"],"The children waited outside until the rain stopped.","孩子们在外面等到雨停。",null,"https://www.merriam-webster.com/dictionary/outside"],
   ["sense-4","在……外；超出","prep.",["在……外","超出"],["outside-4","21-related-outside-exterior-peripheral","external-outside","outsides-external","external-from-outside"],"The issue falls outside the scope of the review.","这个问题超出了审查范围。",null,"https://www.merriam-webster.com/dictionary/outside"]
  ],[{"terms":["外表","外界","外表的","外界的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/outside","reason":"来源对 outside 列出两种重音；分别呈现名词、形容词、副词和介词，保留构式而不强行以一种重音排除其余用法。本批 outside 按所列词性与构式训练：外部；外面（n.）、外面的；外来的（adj.）、在外面（adv.）、在……外；超出（prep.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("peripheral",[
   ["sense-1","外围的；边缘的","adj.",["外围的","边缘的"],["peripheral-1","21-related-outside-exterior-peripheral","auxiliary-1","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer","auxiliary-2","auxiliary-3"],"The map includes several peripheral districts.","地图包括几个外围地区。",null,"https://www.merriam-webster.com/dictionary/peripheral"],
   ["sense-2","次要的；不重要的","adj.",["次要的","不重要的"],["peripheral-2","21-related-outside-exterior-peripheral","auxiliary-1","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer","auxiliary-2","auxiliary-3"],"The debate focused on peripheral details instead of the main question.","辩论集中在次要细节上，而不是主要问题。",null,"https://www.merriam-webster.com/dictionary/peripheral"],
   ["sense-3","计算机外接设备","n.",["计算机外接设备"],["peripheral-3","21-related-outside-exterior-peripheral","auxiliary-1","endorsement","team-encouragement","practical-emotional-help","financial-provision","sustain-life","physical-support","evidence-proof","tolerate-behaviour","opening-performer","auxiliary-2","auxiliary-3"],"The laptop can connect to several peripherals.","这台笔记本电脑可以连接几种外接设备。",null,"https://www.merriam-webster.com/dictionary/peripheral"]
  ],[{"terms":["周边的","周围的","圆周的","无关紧要的","肤浅的","外周的","末梢的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/peripheral","reason":"本批 peripheral 按所列词性与构式训练：外围的；边缘的（adj.）、次要的；不重要的（adj.）、计算机外接设备（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("succeed",[
   ["sense-1","成功；达到目的","v.",["成功","达到目的"],["succeed-1","achieve-accomplish","17-completion","complete-achieve","inherit-1","19-related-inherit-inheritance","inherit-2"],"The team succeeded in repairing the damaged pump.","团队成功修复了损坏的泵。",null,"https://www.merriam-webster.com/dictionary/succeed"],
   ["sense-2","接替；继承职位","v.",["接替","继承职位"],["succeed-2","achieve-accomplish","17-completion","complete-achieve","inherit-1","19-related-inherit-inheritance","inherit-2"],"She succeeded her former tutor as head of the department.","她接替原来的导师担任系主任。",null,"https://www.merriam-webster.com/dictionary/succeed"]
  ],[{"terms":["继承","继续"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/succeed","reason":"本批 succeed 按所列词性与构式训练：成功；达到目的（v.）、接替；继承职位（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("propose",[
   ["sense-1","提出建议或计划","v.",["提出建议或计划"],["propose-1","suggest-propose","suggest-indicate","suggest-remind","propose-candidate","designate-role"],"The residents proposed a safer crossing near the school.","居民建议在学校附近设置一个更安全的过街点。",null,"https://www.merriam-webster.com/dictionary/propose"],
   ["sense-2","求婚","v.",["求婚"],["propose-2","suggest-propose","suggest-indicate","suggest-remind","propose-candidate","designate-role"],"He proposed during a walk beside the lake.","他在湖边散步时求了婚。",null,"https://www.merriam-webster.com/dictionary/propose"]
  ],[{"terms":["计划","打算","建议","提议","求(婚)"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/propose","reason":"本批 propose 按所列词性与构式训练：提出建议或计划（v.）、求婚（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("declare",[
   ["sense-1","正式宣布；声明","v.",["正式宣布","声明"],["declare-1","21-related-claim-declare","announce-make-known","announce-judgment"],"The judges declared the contest open.","评委宣布比赛开始。",null,"https://www.merriam-webster.com/dictionary/declare"],
   ["sense-2","申报应税物品或收入","v.",["申报应税物品或收入"],["declare-2","21-related-claim-declare","announce-make-known","announce-judgment"],"The traveller declared the goods at the border.","旅行者在边境申报了物品。",null,"https://www.merriam-webster.com/dictionary/declare"]
  ],[{"terms":["宣布","申报","断言"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/declare","reason":"本批 declare 按所列词性与构式训练：正式宣布；声明（v.）、申报应税物品或收入（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("aid",[
   ["sense-1","援助；帮助","n.",["援助","帮助"],["aid-1","assist-help","practical-emotional-help","assist-sport"],"The village received aid after the storm.","风暴过后，村庄得到了援助。",null,"https://www.merriam-webster.com/dictionary/aid"],
   ["sense-2","辅助工具或装置","n.",["辅助工具或装置"],["aid-2","assist-help","practical-emotional-help","assist-sport"],"The diagram is an aid to understanding the mechanism.","图示是帮助理解这个装置的工具。",null,"https://www.merriam-webster.com/dictionary/aid"],
   ["sense-3","帮助；促进","v.",["帮助","促进"],["aid-3","assist-help","practical-emotional-help","assist-sport"],"The new markings aid navigation in poor light.","新的标记有助于光线不佳时辨认方向。",null,"https://www.merriam-webster.com/dictionary/aid"]
  ],[{"terms":["外援","助手","有助于","自动内部诊断"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/aid","reason":"本批 aid 按所列词性与构式训练：援助；帮助（n.）、辅助工具或装置（n.）、帮助；促进（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("claim",[
   ["sense-1","声称；断言","v.",["声称","断言"],["claim-1","21-related-claim-declare","state-firmly","exercise-rights-authority","confident-self-expression","forceful-request","market-demand","insist-claim","require-need"],"The supplier claims that the coating lasts longer.","供应商声称这种涂层更耐用。",null,"https://www.merriam-webster.com/dictionary/claim"],
   ["sense-2","要求获得；认领","v.",["要求获得","认领"],["claim-2","21-related-claim-declare","state-firmly","exercise-rights-authority","confident-self-expression","forceful-request","market-demand","insist-claim","require-need"],"She claimed the bag after describing its contents.","她描述了包内物品后，认领了那个包。",null,"https://www.merriam-webster.com/dictionary/claim"],
   ["sense-3","待核实的说法","n.",["待核实的说法"],["claim-3","21-related-claim-declare","state-firmly","exercise-rights-authority","confident-self-expression","forceful-request","market-demand","insist-claim","require-need"],"The researchers tested the claim with a new experiment.","研究人员用新实验检验了这一说法。",null,"https://www.merriam-webster.com/dictionary/claim"],
   ["sense-4","索取的要求；应有权利","n.",["索取的要求","应有权利"],["claim-4","21-related-claim-declare","state-firmly","exercise-rights-authority","confident-self-expression","forceful-request","market-demand","insist-claim","require-need"],"The document supports his claim to the property.","文件支持了他对该财产提出的权利主张。",null,"https://www.merriam-webster.com/dictionary/claim"]
  ],[{"terms":["要求","要求权","权利","主张","提出要求"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/claim","reason":"本批 claim 按所列词性与构式训练：声称；断言（v.）、要求获得；认领（v.）、待核实的说法（n.）、索取的要求；应有权利（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("affirmative",[
   ["sense-1","肯定的；赞成的","adj.",["肯定的","赞成的"],["affirmative-1"],"The proposal received an affirmative vote.","这项提议获得了赞成票。",null,"https://www.merriam-webster.com/dictionary/affirmative"],
   ["sense-2","肯定回答；赞同","n.",["肯定回答","赞同"],["affirmative-2"],"She answered in the affirmative when asked to join.","被问及是否加入时，她作出了肯定回答。","in the affirmative","https://www.merriam-webster.com/dictionary/affirmative"]
  ],[{"terms":["积极的","肯定语"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/affirmative","reason":"本批 affirmative 按所列词性与构式训练：肯定的；赞成的（adj.）、肯定回答；赞同（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("courage",[
   ["sense-1","勇气；胆量","n.",["勇气","胆量"],["courage-1","pluck-1","pluck-2","pluck-3"],"It took courage to question the popular decision.","质疑这个广受欢迎的决定需要勇气。",null,"https://www.merriam-webster.com/dictionary/courage"]
  ],[]);
  entry("greek",[
   ["sense-1","希腊人","n.（专名）",["希腊人"],["greek-1"],"The narrator meets a Greek who restores old boats.","叙述者遇见了一位修复旧船的希腊人。",null,"https://www.merriam-webster.com/dictionary/greek"],
   ["sense-2","希腊语","n.（专名）",["希腊语"],["greek-2"],"The inscription is written in Greek.","这段铭文用希腊语写成。",null,"https://www.merriam-webster.com/dictionary/greek"],
   ["sense-3","希腊的；希腊人的","adj.",["希腊的","希腊人的"],["greek-3"],"The museum displayed Greek pottery beside Roman glass.","博物馆在罗马玻璃器旁展出了希腊陶器。",null,"https://www.merriam-webster.com/dictionary/greek"]
  ],[{"terms":["希腊"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/greek","reason":"Greek 作希腊人、希腊语及相关形容词均首字母大写，旧 ID 保持兼容。本批 greek 按所列词性与构式训练：希腊人（n.（专名））、希腊语（n.（专名））、希腊的；希腊人的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("jewish",[
   ["sense-1","犹太人的；犹太教的","adj.",["犹太人的","犹太教的"],["jewish-1"],"The collection includes books on Jewish history.","馆藏包括关于犹太历史的书籍。",null,"https://www.merriam-webster.com/dictionary/jewish"]
  ],[{"terms":["犹太族的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/jewish","reason":"Jewish 为相关人群及宗教文化的形容词，不能直接替代人的名词；例句用专名大写。本批 jewish 按所列词性与构式训练：犹太人的；犹太教的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("arabian",[
   ["sense-1","阿拉伯地区或其居民的","adj.",["阿拉伯地区或其居民的"],["arabian-1"],"The atlas shows several Arabian trade routes.","地图册展示了几条阿拉伯地区的贸易路线。",null,"https://www.merriam-webster.com/dictionary/arabian"],
   ["sense-2","阿拉伯马","n.",["阿拉伯马"],["arabian-2"],"The rider chose an Arabian for the long journey.","骑手为长途旅行选择了一匹阿拉伯马。",null,"https://www.merriam-webster.com/dictionary/arabian"]
  ],[{"terms":["阿拉伯的","阿拉伯人的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/arabian","reason":"Arabian 指阿拉伯地区、其居民或阿拉伯马；不无条件等同 Arabic 这一阿拉伯语语言名称。本批 arabian 按所列词性与构式训练：阿拉伯地区或其居民的（adj.）、阿拉伯马（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("australia",[
   ["sense-1","澳大利亚；澳洲","n.（专名）",["澳大利亚","澳洲"],["australia-1"],"The atlas includes a map of Australia.","这本地图册包含一幅澳大利亚地图。",null,"https://www.collinsdictionary.com/dictionary/english/australia"]
  ],[]);
  entry("zealand",[
   ["sense-1","西兰岛（丹麦）","n.（专名）",["西兰岛（丹麦）"],["zealand-1"],"The guidebook includes a detailed map of Zealand.","旅游指南包含一幅丹麦西兰岛的详细地图。",null,"https://www.collinsdictionary.com/dictionary/english/zealand"]
  ],[{"terms":["西兰岛（丹麦最大的岛）"],"decision":"scope-excluded","source":"https://www.collinsdictionary.com/dictionary/english/zealand","reason":"本条专名 Zealand 指丹麦西兰岛，不等同 New Zealand；专名首字母大写，公共旧 ID 不改动。本批 zealand 按所列词性与构式训练：西兰岛（丹麦）（n.（专名））。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("accelerate",[
   ["sense-1","加速；促进","v.",["加速","促进"],["accelerate-1","speed-rate","speed-move-fast","speed-accelerate","hurry-up-doing","speed-up-process"],"The engine accelerated smoothly on the straight road.","发动机在笔直的道路上平稳加速。",null,"https://www.merriam-webster.com/dictionary/accelerate"]
  ],[]);
  entry("prompt",[
   ["sense-1","促使；引起","v.",["促使","引起"],["prompt-1","stimulate-1","encourage-inspire","encourage-promote"],"The complaint prompted a review of the procedure.","投诉促使人们重新审查流程。",null,"https://www.merriam-webster.com/dictionary/prompt"],
   ["sense-2","提示；给人提词","v.",["提示","给人提词"],["prompt-2","stimulate-1","encourage-inspire","encourage-promote"],"The tutor prompted him with the first word.","导师用第一个词给他提示。",null,"https://www.merriam-webster.com/dictionary/prompt"],
   ["sense-3","迅速的；及时的","adj.",["迅速的","及时的"],["prompt-3","stimulate-1","encourage-inspire","encourage-promote"],"The team gave a prompt reply to the enquiry.","团队及时答复了询问。",null,"https://www.merriam-webster.com/dictionary/prompt"],
   ["sense-4","提示；提词","n.",["提示","提词"],["prompt-4","stimulate-1","encourage-inspire","encourage-promote"],"The actor continued after a quiet prompt from the side.","侧面轻声提示后，演员继续了表演。",null,"https://www.merriam-webster.com/dictionary/prompt"],
   ["sense-5","屏幕提示或输入指令","n.",["屏幕提示或输入指令"],["prompt-5","stimulate-1","encourage-inspire","encourage-promote"],"The prompt asks the user to choose a file.","屏幕提示要求用户选择一个文件。",null,"https://www.merriam-webster.com/dictionary/prompt"]
  ],[{"terms":["激起","敏捷的","提示符","准时地"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/prompt","reason":"本批 prompt 按所列词性与构式训练：促使；引起（v.）、提示；给人提词（v.）、迅速的；及时的（adj.）、提示；提词（n.）、屏幕提示或输入指令（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("income",[
   ["sense-1","收入；收益","n.",["收入","收益"],["income-1","regular-organizational-income"],"The rent provides a small regular income.","租金带来一笔不多但固定的收入。",null,"https://www.merriam-webster.com/dictionary/income"]
  ],[{"terms":["流入"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/income","reason":"本批 income 按所列词性与构式训练：收入；收益（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cheap",[
   ["sense-1","便宜的；价格低的","adj.",["便宜的","价格低的"],["cheap-1"],"The market offers cheap vegetables at the end of the day.","市场在一天快结束时出售便宜蔬菜。",null,"https://www.merriam-webster.com/dictionary/cheap"],
   ["sense-2","低劣的；没有价值的","adj.",["低劣的","没有价值的"],["cheap-2"],"The cheap imitation broke after a few uses.","这个低劣的仿制品用了几次就坏了。",null,"https://www.merriam-webster.com/dictionary/cheap"],
   ["sense-3","低价地（非正式）","adv.",["低价地（非正式）"],["cheap-3"],"They bought the spare parts cheap at an auction.","他们在拍卖会上低价买到了备件。",null,"https://www.merriam-webster.com/dictionary/cheap"]
  ],[{"terms":["不值钱的","可鄙的","便宜地"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cheap","reason":"本批 cheap 按所列词性与构式训练：便宜的；价格低的（adj.）、低劣的；没有价值的（adj.）、低价地（非正式）（adv.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("worthless",[
   ["sense-1","无价值的；无用的","adj.",["无价值的","无用的"],["worthless-1"],"The damaged samples were worthless for the experiment.","损坏的样本对实验毫无用处。",null,"https://www.merriam-webster.com/dictionary/worthless"]
  ],[{"terms":["无益的","无足轻重的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/worthless","reason":"本批 worthless 按所列词性与构式训练：无价值的；无用的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("valuation",[
   ["sense-1","估价；价值评定","n.",["估价","价值评定"],["valuation-1"],"The museum requested a valuation of the donated painting.","博物馆要求对捐赠的画作进行估价。",null,"https://www.merriam-webster.com/dictionary/valuation"]
  ],[{"terms":["评价","价值判断","计价"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/valuation","reason":"本批 valuation 按所列词性与构式训练：估价；价值评定（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("subsidy",[
   ["sense-1","补贴；补助金","n.",["补贴","补助金"],["subsidy-1","grant-bestow","grant-concede","grant-funding"],"The project received a subsidy for restoring the old workshop.","项目获得了用于修复旧工坊的补助金。",null,"https://www.merriam-webster.com/dictionary/subsidy"]
  ],[{"terms":["津贴"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/subsidy","reason":"本批 subsidy 按所列词性与构式训练：补贴；补助金（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("earn",[
   ["sense-1","赚取；获得报酬","v.",["赚取","获得报酬"],["earn-1","gain-acquire","get-acquire","gain-increase","increase-quantity","gain-reach","gain-improvement","increase-amount","deserve-merit"],"She earns part of her income by repairing instruments.","她通过修理乐器赚取部分收入。",null,"https://www.merriam-webster.com/dictionary/earn"],
   ["sense-2","赢得；值得得到","v.",["赢得","值得得到"],["earn-2","gain-acquire","get-acquire","gain-increase","increase-quantity","gain-reach","gain-improvement","increase-amount","deserve-merit"],"The careful work earned the team's respect.","细致的工作赢得了团队的尊重。",null,"https://www.merriam-webster.com/dictionary/earn"]
  ],[{"terms":["赚得","获得","博得","欧州科学研究网"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/earn","reason":"本批 earn 按所列词性与构式训练：赚取；获得报酬（v.）、赢得；值得得到（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("undertaking",[
   ["sense-1","重大任务；事业","n.",["重大任务","事业"],["undertaking-1","business-organization","ambitious-undertaking","initiative-resourcefulness","solemn-promise","promise-oath","collateral-security","token-of-faith","drinking-toast","promise-solemnly","pawn-deposit","guarantee-1","assure-reassure","assure-ensure","guarantee-2"],"Restoring the theatre was a costly undertaking.","修复剧院是一项耗资巨大的工程。",null,"https://www.merriam-webster.com/dictionary/undertaking"],
   ["sense-2","承诺；保证","n.",["承诺","保证"],["undertaking-2","business-organization","ambitious-undertaking","initiative-resourcefulness","solemn-promise","promise-oath","collateral-security","token-of-faith","drinking-toast","promise-solemnly","pawn-deposit","guarantee-1","assure-reassure","assure-ensure","guarantee-2"],"The contractor gave an undertaking to finish before winter.","承包方承诺在冬季前完工。",null,"https://www.merriam-webster.com/dictionary/undertaking"]
  ],[{"terms":["企业","承担"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/undertaking","reason":"本批 undertaking 按所列词性与构式训练：重大任务；事业（n.）、承诺；保证（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("occupation",[
   ["sense-1","职业","n.",["职业"],["occupation-1","21-related-occupation-occupational","job-employment","job-task","job-casual-work","profession-occupation","profession-declaration"],"The form asks for the applicant's occupation.","表格要求填写申请人的职业。",null,"https://www.merriam-webster.com/dictionary/occupation"],
   ["sense-2","占用；居住使用","n.",["占用","居住使用"],["occupation-2","21-related-occupation-occupational","job-employment","job-task","job-casual-work","profession-occupation","profession-declaration"],"The building was ready for occupation after the repairs.","修缮后，建筑已可供人入住。",null,"https://www.merriam-webster.com/dictionary/occupation"],
   ["sense-3","军事占领","n.",["军事占领"],["occupation-3","21-related-occupation-occupational","job-employment","job-task","job-casual-work","profession-occupation","profession-declaration"],"The chapter describes daily life during the occupation.","这一章描写了军事占领期间的日常生活。",null,"https://www.merriam-webster.com/dictionary/occupation"]
  ],[{"terms":["占有","占有期","占领","占领军"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/occupation","reason":"本批 occupation 按所列词性与构式训练：职业（n.）、占用；居住使用（n.）、军事占领（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("remuneration",[
   ["sense-1","报酬；酬劳","n.",["报酬","酬劳"],["remuneration-1","pay-transfer-money","pay-be-profitable","pay-suffer-consequence","pay-wages","employment-pay","pay-give-attention","reward-1","prize-reward","prize-cherish","prize-outstanding","prize-lever","reward-2","fixed-pay"],"The agreement sets out the remuneration for each performance.","协议列明了每场演出的报酬。",null,"https://www.merriam-webster.com/dictionary/remuneration"]
  ],[]);
  entry("occupational",[
   ["sense-1","职业的；工作相关的","adj.",["职业的","工作相关的"],["occupational-1","21-related-occupation-occupational","trained-occupation","paid-not-amateur","competent-work-conduct"],"The survey records common occupational risks.","调查记录了常见的职业风险。",null,"https://www.merriam-webster.com/dictionary/occupational"]
  ],[{"terms":["军事占领的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/occupational","reason":"本批 occupational 按所列词性与构式训练：职业的；工作相关的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("bomb",[
   ["sense-1","炸弹","n.",["炸弹"],["bomb-1","21-related-bomb-blast-burst-explode","bombard-1","military-offensive","verbal-criticism","tackle-task-vigorously","assault-1","assault-2","bombard-2","bombard-3"],"The museum displays the casing of an old bomb.","博物馆展出了一枚旧炸弹的外壳。",null,"https://www.merriam-webster.com/dictionary/bomb"],
   ["sense-2","轰炸","v.",["轰炸"],["bomb-2","21-related-bomb-blast-burst-explode","bombard-1","military-offensive","verbal-criticism","tackle-task-vigorously","assault-1","assault-2","bombard-2","bombard-3"],"The documentary describes how the port was bombed.","纪录片描述了港口如何遭到轰炸。",null,"https://www.merriam-webster.com/dictionary/bomb"],
   ["sense-3","彻底失败（非正式）","v.",["彻底失败（非正式）"],["bomb-3","21-related-bomb-blast-burst-explode","bombard-1","military-offensive","verbal-criticism","tackle-task-vigorously","assault-1","assault-2","bombard-2","bombard-3"],"The experimental play bombed on its opening night.","这出实验性戏剧首演就彻底失败了。",null,"https://www.merriam-webster.com/dictionary/bomb"]
  ],[{"terms":["投弹于","失败"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/bomb","reason":"本批 bomb 按所列词性与构式训练：炸弹（n.）、轰炸（v.）、彻底失败（非正式）（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("blast",[
   ["sense-1","爆炸；冲击波","n.",["爆炸","冲击波"],["blast-1","21-related-bomb-blast-burst-explode","explosion-blast","explosion-increase","gust-1","gale-1","gale-2"],"The blast shattered the empty building's windows.","爆炸震碎了空建筑的窗户。",null,"https://www.merriam-webster.com/dictionary/blast"],
   ["sense-2","强劲的气流或声音","n.",["强劲的气流或声音"],["blast-2","21-related-bomb-blast-burst-explode","explosion-blast","explosion-increase","gust-1","gale-1","gale-2"],"A blast of cold air came through the open door.","一股冷空气从敞开的门涌进来。",null,"https://www.merriam-webster.com/dictionary/blast"],
   ["sense-3","非常愉快的经历（非正式）","n.",["非常愉快的经历（非正式）"],["blast-3","21-related-bomb-blast-burst-explode","explosion-blast","explosion-increase","gust-1","gale-1","gale-2"],"The children had a blast at the science fair.","孩子们在科学展览会上玩得很开心。","have a blast","https://www.merriam-webster.com/dictionary/blast"],
   ["sense-4","用炸药炸开","v.",["用炸药炸开"],["blast-4","21-related-bomb-blast-burst-explode","explosion-blast","explosion-increase","gust-1","gale-1","gale-2"],"The workers blasted a passage through the rock.","工人在岩石中炸开了一条通道。",null,"https://www.merriam-webster.com/dictionary/blast"],
   ["sense-5","猛烈批评","v.",["猛烈批评"],["blast-5","21-related-bomb-blast-burst-explode","explosion-blast","explosion-increase","gust-1","gale-1","gale-2"],"The reviewer blasted the careless use of evidence.","评审者猛烈批评了草率使用证据的做法。",null,"https://www.merriam-webster.com/dictionary/blast"]
  ],[{"terms":["一阵风","枯萎病","炸","使枯萎","猛攻","猛烈抨击","枯萎"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/blast","reason":"本批 blast 按所列词性与构式训练：爆炸；冲击波（n.）、强劲的气流或声音（n.）、非常愉快的经历（非正式）（n.）、用炸药炸开（v.）、猛烈批评（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("burst",[
   ["sense-1","爆裂；胀破","v.",["爆裂","胀破"],["burst-1","21-related-bomb-blast-burst-explode","erupt-volcano","erupt-sudden","21-review-related-burst-fit"],"The water pipe burst during the cold night.","水管在寒冷的夜晚爆裂了。",null,"https://www.merriam-webster.com/dictionary/burst"],
   ["sense-2","突然发出情感或声音","v.",["突然发出情感或声音"],["burst-2","21-related-bomb-blast-burst-explode","erupt-volcano","erupt-sudden","21-review-related-burst-fit"],"She burst into laughter at the unexpected ending.","出乎意料的结尾让她突然笑了起来。","burst into","https://www.merriam-webster.com/dictionary/burst"],
   ["sense-3","突然的一阵活动或声音","n.",["突然的一阵活动或声音"],["burst-3","21-related-bomb-blast-burst-explode","erupt-volcano","erupt-sudden","21-review-related-burst-fit"],"A short burst of applause followed the announcement.","宣布后响起了一阵短暂的掌声。",null,"https://www.merriam-webster.com/dictionary/burst"]
  ],[{"terms":["破裂","突发","爆发","充满","二进制位组","字符组","脉冲串"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/burst","reason":"本批 burst 按所列词性与构式训练：爆裂；胀破（v.）、突然发出情感或声音（v.）、突然的一阵活动或声音（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("struggle",[
   ["sense-1","努力应对；艰难前进","v.",["努力应对","艰难前进"],["struggle-1","strive-endeavour","strive-contend","contend-1","compete-rival","argue-disagree","argue-reason","argue-indicate","state-firmly","exercise-rights-authority","confident-self-expression","contend-2","contend-3"],"The old engine struggled to pull the heavy load.","旧发动机吃力地牵引重物。",null,"https://www.merriam-webster.com/dictionary/struggle"],
   ["sense-2","斗争；艰难努力","n.",["斗争","艰难努力"],["struggle-2","strive-endeavour","strive-contend","contend-1","compete-rival","argue-disagree","argue-reason","argue-indicate","state-firmly","exercise-rights-authority","confident-self-expression","contend-2","contend-3"],"The climb was a struggle in the strong wind.","强风中的攀登十分艰难。",null,"https://www.merriam-webster.com/dictionary/struggle"]
  ],[{"terms":["努力","奋斗","挣扎"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/struggle","reason":"本批 struggle 按所列词性与构式训练：努力应对；艰难前进（v.）、斗争；艰难努力（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("spark",[
   ["sense-1","火花；电火花","n.",["火花","电火花"],["spark-1","gun-release-part","start-event-or-device","evoke-distressing-memory"],"A small spark flashed beside the loose connection.","松动的接头旁闪过一小点电火花。",null,"https://www.merriam-webster.com/dictionary/spark"],
   ["sense-2","引发事件的因素","n.",["引发事件的因素"],["spark-2","gun-release-part","start-event-or-device","evoke-distressing-memory"],"The letter provided the spark for the investigation.","这封信成了调查的导火索。",null,"https://www.merriam-webster.com/dictionary/spark"],
   ["sense-3","引发；激起","v.",["引发","激起"],["spark-3","gun-release-part","start-event-or-device","evoke-distressing-memory"],"The discovery sparked a lively discussion.","这个发现引发了热烈讨论。",null,"https://www.merriam-webster.com/dictionary/spark"]
  ],[{"terms":["火星","闪光","无线电报务员","瞬间放电","活力","朝气","花花公子","情郎","发火花","求婚","发动","鼓舞","使有朝气"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/spark","reason":"本批 spark 按所列词性与构式训练：火花；电火花（n.）、引发事件的因素（n.）、引发；激起（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("violent",[
   ["sense-1","暴力的；使用伤害性力量的","adj.",["暴力的","使用伤害性力量的"],["violent-1","violence-1","violence-2"],"The report examines violent behaviour at the event.","报告考察了活动中的暴力行为。",null,"https://www.merriam-webster.com/dictionary/violent"],
   ["sense-2","猛烈的；剧烈的","adj.",["猛烈的","剧烈的"],["violent-2","violence-1","violence-2"],"A violent storm forced the boats back to harbour.","猛烈风暴迫使船只返回港口。",null,"https://www.merriam-webster.com/dictionary/violent"]
  ],[{"terms":["激烈的","极端的","凶暴的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/violent","reason":"本批 violent 按所列词性与构式训练：暴力的；使用伤害性力量的（adj.）、猛烈的；剧烈的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("explode",[
   ["sense-1","爆炸；使爆炸","v.",["爆炸","使爆炸"],["explode-1","21-related-bomb-blast-burst-explode","erupt-volcano","erupt-sudden"],"The sealed container exploded under the pressure.","密封容器在压力下爆炸了。",null,"https://www.merriam-webster.com/dictionary/explode"],
   ["sense-2","激增","v.",["激增"],["explode-2","21-related-bomb-blast-burst-explode","erupt-volcano","erupt-sudden"],"Interest in the project exploded after the exhibition.","展览后，人们对这个项目的兴趣激增。",null,"https://www.merriam-webster.com/dictionary/explode"],
   ["sense-3","情感突然爆发","v.",["情感突然爆发"],["explode-3","21-related-bomb-blast-burst-explode","erupt-volcano","erupt-sudden"],"The room exploded with laughter.","房间里突然爆发出笑声。",null,"https://www.merriam-webster.com/dictionary/explode"]
  ],[{"terms":["爆发"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/explode","reason":"本批 explode 按所列词性与构式训练：爆炸；使爆炸（v.）、激增（v.）、情感突然爆发（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("command",[
   ["sense-1","命令；指令","n.",["命令","指令"],["command-1","21-related-command-instruct","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"The device responds to a spoken command.","装置会响应语音指令。",null,"https://www.merriam-webster.com/dictionary/command"],
   ["sense-2","控制权；指挥权","n.",["控制权","指挥权"],["command-2","21-related-command-instruct","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"She took command of the rescue operation.","她接管了救援行动的指挥权。",null,"https://www.merriam-webster.com/dictionary/command"],
   ["sense-3","对技能或语言的熟练掌握","n.",["对技能或语言的熟练掌握"],["command-3","21-related-command-instruct","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"He has a strong command of written English.","他熟练掌握书面英语。",null,"https://www.merriam-webster.com/dictionary/command"],
   ["sense-4","命令；指挥","v.",["命令","指挥"],["command-4","21-related-command-instruct","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"The captain commanded the crew to return.","船长命令船员返回。",null,"https://www.merriam-webster.com/dictionary/command"],
   ["sense-5","赢得；拥有应有的关注或尊重","v.",["赢得","拥有应有的关注或尊重"],["command-5","21-related-command-instruct","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"Her careful analysis commanded the committee's attention.","她细致的分析赢得了委员会的关注。",null,"https://www.merriam-webster.com/dictionary/command"],
   ["sense-6","俯瞰；居高临下控制","v.",["俯瞰","居高临下控制"],["command-6","21-related-command-instruct","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"The terrace commands a wide view of the bay.","露台俯瞰海湾，视野开阔。",null,"https://www.merriam-webster.com/dictionary/command"]
  ],[{"terms":["控制","司令部","部队","掌握","控制"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/command","reason":"本批 command 按所列词性与构式训练：命令；指令（n.）、控制权；指挥权（n.）、对技能或语言的熟练掌握（n.）、命令；指挥（v.）、赢得；拥有应有的关注或尊重（v.）、俯瞰；居高临下控制（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("copyright",[
   ["sense-1","版权；著作权","n.",["版权","著作权"],["copyright-1","ownership-1","ownership-2"],"The notice names the holder of the copyright.","声明注明了版权持有者。",null,"https://www.merriam-webster.com/dictionary/copyright"],
   ["sense-2","取得作品版权","v.",["取得作品版权"],["copyright-2","ownership-1","ownership-2"],"The designer copyrighted the original illustrations.","设计师为原创插画取得了版权。",null,"https://www.merriam-webster.com/dictionary/copyright"]
  ],[]);
  entry("instruct",[
   ["sense-1","教授；指导","v.",["教授","指导"],["instruct-1","21-related-command-instruct","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"The guide instructed the group in basic map reading.","向导教小组成员掌握基本识图方法。",null,"https://www.merriam-webster.com/dictionary/instruct"],
   ["sense-2","指示；命令","v.",["指示","命令"],["instruct-2","21-related-command-instruct","order-command","order-purchase","order-sequence","order-calm","order-group","order-biology","order-command-verb","responsibility-compel","order-buy","order-arrange","structured-organized"],"The supervisor instructed everyone to leave the damaged room.","主管指示所有人离开受损房间。",null,"https://www.merriam-webster.com/dictionary/instruct"]
  ],[{"terms":["教","教育","通知","托办"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/instruct","reason":"本批 instruct 按所列词性与构式训练：教授；指导（v.）、指示；命令（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("just",[
   ["sense-1","公正的；合理的","adj.",["公正的","合理的"],["just-1","fair-just","fair-reasonable","fair-moderate","fair-pale","fair-weather","fair-exhibition","fair-carnival"],"They wanted a just solution to the dispute.","他们希望找到公正解决争端的办法。",null,"https://www.merriam-webster.com/dictionary/just"],
   ["sense-2","刚刚","adv.",["刚刚"],["just-2","fair-just","fair-reasonable","fair-moderate","fair-pale","fair-weather","fair-exhibition","fair-carnival"],"The last bus has just left.","末班公交车刚刚离开。",null,"https://www.merriam-webster.com/dictionary/just"],
   ["sense-3","正好；恰好","adv.",["正好","恰好"],["just-3","fair-just","fair-reasonable","fair-moderate","fair-pale","fair-weather","fair-exhibition","fair-carnival"],"The opening is just wide enough for the box.","开口恰好够箱子通过。",null,"https://www.merriam-webster.com/dictionary/just"],
   ["sense-4","仅仅；只是","adv.",["仅仅","只是"],["just-4","fair-just","fair-reasonable","fair-moderate","fair-pale","fair-weather","fair-exhibition","fair-carnival"],"The note is just a reminder of the meeting time.","这张便条只是提醒开会时间。",null,"https://www.merriam-webster.com/dictionary/just"]
  ],[{"terms":["正直的","正确的","应得的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/just","reason":"本批 just 按所列词性与构式训练：公正的；合理的（adj.）、刚刚（adv.）、正好；恰好（adv.）、仅仅；只是（adv.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mutter",[
   ["sense-1","低声含糊地说；抱怨地嘟囔","v.",["低声含糊地说","抱怨地嘟囔"],["mutter-1","murmur-sound","murmur-complain","murmur-speak","soft-speech","murmur-medical"],"He muttered a complaint about the delay.","他低声抱怨了延误。",null,"https://www.merriam-webster.com/dictionary/mutter"]
  ],[{"terms":["喃喃低语","喃喃自语","作低沉声","出怨言","抱怨地说"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mutter","reason":"本批 mutter 按所列词性与构式训练：低声含糊地说；抱怨地嘟囔（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("competent",[
   ["sense-1","胜任的；有能力的","adj.",["胜任的","有能力的"],["competent-1","21-related-fit-fitness-competent","capable-1","capable-2"],"A competent mechanic checked the machine.","一位能干的修理工检查了机器。",null,"https://www.merriam-webster.com/dictionary/competent"]
  ],[{"terms":["能干的","有效的","足够的","有权的","授权的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/competent","reason":"本批 competent 按所列词性与构式训练：胜任的；有能力的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("contestant",[
   ["sense-1","参赛者；竞争者","n.",["参赛者","竞争者"],["contestant-1","opponent-1","competitor","formidable-equal","compete-match","competing-attributive"],"Each contestant had ten minutes to present a design.","每位参赛者有十分钟展示设计。",null,"https://www.merriam-webster.com/dictionary/contestant"]
  ],[{"terms":["争辩者"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/contestant","reason":"本批 contestant 按所列词性与构式训练：参赛者；竞争者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("force",[
   ["sense-1","力；力量","n.",["力","力量"],["force-1","compel-force","compel-command"],"The sensor records the force applied to the panel.","传感器记录施加在面板上的力。",null,"https://www.merriam-webster.com/dictionary/force"],
   ["sense-2","军队；执行任务的人员群体","n.",["军队","执行任务的人员群体"],["force-2","compel-force","compel-command"],"The rescue force reached the valley before dawn.","救援队在黎明前到达山谷。",null,"https://www.merriam-webster.com/dictionary/force"],
   ["sense-3","效力；约束力","n.",["效力","约束力"],["force-3","compel-force","compel-command"],"The new rule came into force at the start of the term.","新规则在学期开始时生效。","come into force","https://www.merriam-webster.com/dictionary/force"],
   ["sense-4","强迫；迫使","v.",["强迫","迫使"],["force-4","compel-force","compel-command"],"The damaged bridge forced drivers to take another route.","受损的桥梁迫使司机改走别的路线。",null,"https://www.merriam-webster.com/dictionary/force"]
  ],[{"terms":["武力","势力","影响力","强夺","推动","提高","人工转移","强制"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/force","reason":"本批 force 按所列词性与构式训练：力；力量（n.）、军队；执行任务的人员群体（n.）、效力；约束力（n.）、强迫；迫使（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("event",[
   ["sense-1","事件；活动","n.",["事件","活动"],["event-1","affair-1","topic-problem","underlying-problem","physical-substance","written-content","importance","affair-2"],"The library hosted an event about local history.","图书馆举办了一场关于地方历史的活动。",null,"https://www.merriam-webster.com/dictionary/event"],
   ["sense-2","体育比赛项目","n.",["体育比赛项目"],["event-2","affair-1","topic-problem","underlying-problem","physical-substance","written-content","importance","affair-2"],"She entered the longest running event.","她报名参加了距离最长的跑步项目。",null,"https://www.merriam-webster.com/dictionary/event"]
  ],[{"terms":["结果","事情的进程","竞赛项目"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/event","reason":"本批 event 按所列词性与构式训练：事件；活动（n.）、体育比赛项目（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("warning",[
   ["sense-1","警告；预兆","n.",["警告","预兆"],["warning-1"],"The flashing light was a warning of low power.","闪烁的灯是电量不足的警告。",null,"https://www.merriam-webster.com/dictionary/warning"]
  ],[{"terms":["预告","通知","警戒","警告的","注意的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/warning","reason":"本批 warning 按所列词性与构式训练：警告；预兆（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("devil",[
   ["sense-1","魔鬼；恶魔","n.",["魔鬼","恶魔"],["devil-1"],"The old tale describes a traveller who tricks the devil.","古老故事描写了一位戏弄魔鬼的旅行者。",null,"https://www.merriam-webster.com/dictionary/devil"]
  ],[{"terms":["折磨","戏弄"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/devil","reason":"本批 devil 按所列词性与构式训练：魔鬼；恶魔（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("savage",[
   ["sense-1","凶猛的；残暴的","adj.",["凶猛的","残暴的"],["savage-1","cruel-1","cruel-2","fierce-aggressive","fierce-intense"],"The novel describes a savage attack on the village.","小说描述了对村庄的一次残暴袭击。",null,"https://www.merriam-webster.com/dictionary/savage"],
   ["sense-2","凶猛攻击；严厉抨击","v.",["凶猛攻击","严厉抨击"],["savage-2","cruel-1","cruel-2","fierce-aggressive","fierce-intense"],"The critics savaged the poorly researched report.","评论者严厉抨击了那份缺乏研究的报告。",null,"https://www.merriam-webster.com/dictionary/savage"]
  ],[{"terms":["未开化的","野蛮的","无礼的","残酷的","原始的","粗鲁的","未开发的","用暴力对付","原始人","粗鲁人"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/savage","reason":"凶猛残暴形容词及攻击动词分开；原住民或所谓未开化人群的旧人称不作中性称呼教学。本批 savage 按所列词性与构式训练：凶猛的；残暴的（adj.）、凶猛攻击；严厉抨击（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("punishment",[
   ["sense-1","惩罚；处罚","n.",["惩罚","处罚"],["punishment-1","21-related-punish-punishment","penalty-punishment","penalty-cost","penalty-sport"],"The story questions whether the punishment was fair.","这个故事质疑惩罚是否公平。",null,"https://www.merriam-webster.com/dictionary/punishment"]
  ],[{"terms":["刑罚","罚"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/punishment","reason":"本批 punishment 按所列词性与构式训练：惩罚；处罚（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("reckless",[
   ["sense-1","鲁莽的；不顾后果的","adj.",["鲁莽的","不顾后果的"],["reckless-1","rash-skin","rash-outbreak","rash-reckless","carelessness-negligence","indifference-careless"],"The witness described reckless driving on the narrow road.","目击者描述了狭窄道路上的鲁莽驾驶行为。",null,"https://www.merriam-webster.com/dictionary/reckless"]
  ],[{"terms":["不介意的","大意的","不注意的","粗心大意的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reckless","reason":"本批 reckless 按所列词性与构式训练：鲁莽的；不顾后果的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("execute",[
   ["sense-1","执行；完成","v.",["执行","完成"],["execute-1","carry-out-task","public-artistic-performance","operate-with-result","operate-effectively","put-plan-into-action","functional-device"],"The team executed the plan in three stages.","团队分三个阶段执行了计划。",null,"https://www.merriam-webster.com/dictionary/execute"],
   ["sense-2","处决","v.",["处决"],["execute-2","carry-out-task","public-artistic-performance","operate-with-result","operate-effectively","put-plan-into-action","functional-device"],"The history book records that the prisoner was executed.","历史书记录了那名囚犯被处决。",null,"https://www.merriam-webster.com/dictionary/execute"],
   ["sense-3","正式签署生效","v.",["正式签署生效"],["execute-3","carry-out-task","public-artistic-performance","operate-with-result","operate-effectively","put-plan-into-action","functional-device"],"The two parties executed the agreement before the work began.","开工前，双方正式签署了协议。",null,"https://www.merriam-webster.com/dictionary/execute"]
  ],[{"terms":["实行","处死","制成"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/execute","reason":"本批 execute 按所列词性与构式训练：执行；完成（v.）、处决（v.）、正式签署生效（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("foul",[
   ["sense-1","肮脏的；恶臭的","adj.",["肮脏的","恶臭的"],["foul-1"],"A foul smell came from the blocked drain.","堵塞的排水管散发出恶臭。",null,"https://www.merriam-webster.com/dictionary/foul"],
   ["sense-2","恶劣的","adj.",["恶劣的"],["foul-2"],"The sailors waited for the foul weather to pass.","水手们等待恶劣天气过去。",null,"https://www.merriam-webster.com/dictionary/foul"],
   ["sense-3","体育比赛中的犯规","n.",["体育比赛中的犯规"],["foul-3"],"The referee awarded a free kick after the foul.","犯规后，裁判判给了一个任意球。",null,"https://www.merriam-webster.com/dictionary/foul"],
   ["sense-4","对对手犯规","v.",["对对手犯规"],["foul-4"],"The defender fouled the player near the goal.","后卫在球门附近对那名球员犯规。",null,"https://www.merriam-webster.com/dictionary/foul"]
  ],[{"terms":["污秽的","邪恶的","淤塞的","弄脏","妨害","污蔑","犯规","淤塞","腐烂","缠结","违反规则地","不正当地","缠绕"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/foul","reason":"本批 foul 按所列词性与构式训练：肮脏的；恶臭的（adj.）、恶劣的（adj.）、体育比赛中的犯规（n.）、对对手犯规（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("punish",[
   ["sense-1","惩罚；处罚","v.",["惩罚","处罚"],["punish-1","21-related-punish-punishment"],"The rules punish repeated violations with disqualification.","规则规定，多次违规将被取消资格。",null,"https://www.merriam-webster.com/dictionary/punish"]
  ],[{"terms":["严厉对待"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/punish","reason":"本批 punish 按所列词性与构式训练：惩罚；处罚（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("nourishment",[
   ["sense-1","营养；滋养物","n.",["营养","滋养物"],["nourishment-1","nourishment-process","nutrition-science","nourishing-substance"],"The soil provides nourishment for the young roots.","土壤为幼根提供养分。",null,"https://www.merriam-webster.com/dictionary/nourishment"]
  ],[{"terms":["滋养品","养料","营养品"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/nourishment","reason":"本批 nourishment 按所列词性与构式训练：营养；滋养物（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("response",[
   ["sense-1","回答；答复","n.",["回答","答复"],["response-1","reply-respond","reply-answer","respond-1","react-respond","react-chemical","respond-2"],"Her letter received a brief response.","她的信收到了一份简短答复。",null,"https://www.merriam-webster.com/dictionary/response"],
   ["sense-2","反应；响应","n.",["反应","响应"],["response-2","reply-respond","reply-answer","respond-1","react-respond","react-chemical","respond-2"],"The experiment measures the plant's response to light.","实验测量植物对光的反应。",null,"https://www.merriam-webster.com/dictionary/response"]
  ],[{"terms":["应答"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/response","reason":"本批 response 按所列词性与构式训练：回答；答复（n.）、反应；响应（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("reflection",[
   ["sense-1","倒影；映像","n.",["倒影","映像"],["reflection-1"],"The still water held a clear reflection of the bridge.","平静的水面映出清晰的桥影。",null,"https://www.merriam-webster.com/dictionary/reflection"],
   ["sense-2","光或声音的反射","n.",["光或声音的反射"],["reflection-2"],"The lesson explains the reflection of light from a mirror.","这节课解释光在镜面上的反射。",null,"https://www.merriam-webster.com/dictionary/reflection"],
   ["sense-3","沉思；认真考虑","n.",["沉思","认真考虑"],["reflection-3"],"After some reflection, she revised the proposal.","仔细考虑后，她修改了提议。",null,"https://www.merriam-webster.com/dictionary/reflection"],
   ["sense-4","体现；反映某种情况的事物","n.",["体现","反映某种情况的事物"],["reflection-4"],"The delays are a reflection of the shortage of staff.","延误体现了人员短缺的情况。",null,"https://www.merriam-webster.com/dictionary/reflection"]
  ],[{"terms":["反映","想法","责难","反射"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/reflection","reason":"本批 reflection 按所列词性与构式训练：倒影；映像（n.）、光或声音的反射（n.）、沉思；认真考虑（n.）、体现；反映某种情况的事物（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("intake",[
   ["sense-1","摄入量；吸入","n.",["摄入量","吸入"],["intake-1"],"The survey recorded each person's daily intake of water.","调查记录了每个人每日的饮水量。",null,"https://www.merriam-webster.com/dictionary/intake"],
   ["sense-2","进气口；入口","n.",["进气口","入口"],["intake-2"],"The filter sits beside the air intake.","过滤器位于进气口旁。",null,"https://www.merriam-webster.com/dictionary/intake"]
  ],[{"terms":["吸入量","摄取量"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/intake","reason":"本批 intake 按所列词性与构式训练：摄入量；吸入（n.）、进气口；入口（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("survive",[
   ["sense-1","幸存；继续存在","v.",["幸存","继续存在"],["survive-1","endure-without-failing"],"Several old buildings survived the fire.","几座老建筑在火灾后幸存下来。",null,"https://www.merriam-webster.com/dictionary/survive"],
   ["sense-2","比某人活得长","v.",["比某人活得长"],["survive-2","endure-without-failing"],"The biography notes that she survived her husband by twenty years.","传记记载，她比丈夫多活了二十年。",null,"https://www.merriam-webster.com/dictionary/survive"]
  ],[{"terms":["比...活得长","生存","生还","幸免于","活下来"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/survive","reason":"本批 survive 按所列词性与构式训练：幸存；继续存在（v.）、比某人活得长（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("glance",[
   ["sense-1","迅速看一眼","v.",["迅速看一眼"],["glance-1","glimpse-look","look-brief-noun","glimpse-see","see-brief"],"She glanced at the timetable before leaving.","离开前，她迅速看了一眼时间表。",null,"https://www.merriam-webster.com/dictionary/glance"],
   ["sense-2","一瞥","n.",["一瞥"],["glance-2","glimpse-look","look-brief-noun","glimpse-see","see-brief"],"A glance at the map showed the shorter route.","瞥一眼地图就看出了较短的路线。",null,"https://www.merriam-webster.com/dictionary/glance"],
   ["sense-3","斜擦而过；碰后弹开","v.",["斜擦而过","碰后弹开"],["glance-3","glimpse-look","look-brief-noun","glimpse-see","see-brief"],"The ball glanced off the edge of the frame.","球擦到框架边缘后弹开了。","glance off","https://www.merriam-webster.com/dictionary/glance"]
  ],[{"terms":["闪光","掠过","辉矿类","扫视","提到","略说","反射","使掠过"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/glance","reason":"本批 glance 按所列词性与构式训练：迅速看一眼（v.）、一瞥（n.）、斜擦而过；碰后弹开（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("chore",[
   ["sense-1","日常杂务；令人厌烦的任务","n.",["日常杂务","令人厌烦的任务"],["chore-1","drag-pull","drag-move-slowly","drag-on-screen","drag-nuisance"],"Cleaning the filters was his least favourite chore.","清洗过滤器是他最不喜欢的杂务。",null,"https://www.merriam-webster.com/dictionary/chore"]
  ],[{"terms":["零工","家务"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/chore","reason":"本批 chore 按所列词性与构式训练：日常杂务；令人厌烦的任务（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("delegate",[
   ["sense-1","代表；受委派者","n.",["代表","受委派者"],["delegate-1","21-related-delegate-deputy","assign-allocate","assign-ascribe","assign-transfer"],"Each delegate received a copy of the agenda.","每位代表都收到了一份议程。",null,"https://www.merriam-webster.com/dictionary/delegate"],
   ["sense-2","委派；授权；交付任务","v.",["委派","授权","交付任务"],["delegate-2","21-related-delegate-deputy","assign-allocate","assign-ascribe","assign-transfer"],"The manager delegated the inspection to a small team.","经理把检查任务交给了一个小团队。",null,"https://www.merriam-webster.com/dictionary/delegate"]
  ],[{"terms":["委派...为代表"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/delegate","reason":"来源除常见的名词 /-gət/ 外也收录 /-geɪt/ 变体，故同时分列代表名词与委派动词，不将词性混为一条。本批 delegate 按所列词性与构式训练：代表；受委派者（n.）、委派；授权；交付任务（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("deputy",[
   ["sense-1","副手；代理人","n.",["副手","代理人"],["deputy-1","21-related-delegate-deputy","representative-delegate","representative-typical","representative-acting-for","subordinate-helper","subordinate-job-title"],"The deputy took charge while the director was away.","主任不在时，副手负责工作。",null,"https://www.merriam-webster.com/dictionary/deputy"],
   ["sense-2","某些议会的议员","n.",["某些议会的议员"],["deputy-2","21-related-delegate-deputy","representative-delegate","representative-typical","representative-acting-for","subordinate-helper","subordinate-job-title"],"The novel follows a deputy during a heated parliamentary debate.","小说描写了一位议员参与激烈议会辩论的经历。",null,"https://www.merriam-webster.com/dictionary/deputy"]
  ],[{"terms":["副手，代理人"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/deputy","reason":"本批 deputy 按所列词性与构式训练：副手；代理人（n.）、某些议会的议员（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("dear",[
   ["sense-1","亲爱的；珍贵的","adj.",["亲爱的","珍贵的"],["dear-1","beloved-dear","adore-beloved","beloved-person","loved-person"],"The old letters are dear to her.","这些旧信对她十分珍贵。",null,"https://www.merriam-webster.com/dictionary/dear"],
   ["sense-2","昂贵的（尤英式）","adj.",["昂贵的（尤英式）"],["dear-2","beloved-dear","adore-beloved","beloved-person","loved-person"],"Fresh fruit becomes dear when supplies are limited.","供应有限时，新鲜水果会变得昂贵。",null,"https://www.merriam-webster.com/dictionary/dear"],
   ["sense-3","亲爱的人；可爱的人","n.",["亲爱的人","可爱的人"],["dear-3","beloved-dear","adore-beloved","beloved-person","loved-person"],"The grandmother called the child her dear.","祖母称这个孩子为她的宝贝。",null,"https://www.merriam-webster.com/dictionary/dear"],
   ["sense-4","哎呀；天哪","interj.",["哎呀","天哪"],["dear-4","beloved-dear","adore-beloved","beloved-person","loved-person"],"Oh dear, I have left the tickets at home.","哎呀，我把票忘在家里了。","oh dear","https://www.merriam-webster.com/dictionary/dear"]
  ],[{"terms":["心爱的","尊敬的","昂贵的","好人","高价地"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dear","reason":"本批 dear 按所列词性与构式训练：亲爱的；珍贵的（adj.）、昂贵的（尤英式）（adj.）、亲爱的人；可爱的人（n.）、哎呀；天哪（interj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("kiss",[
   ["sense-1","亲吻；轻触","v.",["亲吻","轻触"],["kiss-1","touch-physical","touch-sense","touch-emotional","touch-small-amount"],"She kissed the child's forehead before leaving.","她离开前亲了亲孩子的额头。",null,"https://www.merriam-webster.com/dictionary/kiss"],
   ["sense-2","一个吻","n.",["一个吻"],["kiss-2","touch-physical","touch-sense","touch-emotional","touch-small-amount"],"He gave his daughter a kiss at the gate.","他在门口亲了女儿一下。",null,"https://www.merriam-webster.com/dictionary/kiss"]
  ],[{"terms":["吻","接吻"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/kiss","reason":"本批 kiss 按所列词性与构式训练：亲吻；轻触（v.）、一个吻（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("proponent",[
   ["sense-1","支持者；倡导者","n.",["支持者","倡导者"],["proponent-1"],"A proponent of the plan explained its main benefits.","计划的一位支持者解释了它的主要好处。",null,"https://www.merriam-webster.com/dictionary/proponent"]
  ],[{"terms":["建议者","提议者","辩护者"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/proponent","reason":"本批 proponent 按所列词性与构式训练：支持者；倡导者（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("undo",[
   ["sense-1","解开；松开","v.",["解开","松开"],["undo-1","reverse-opposite","reverse-back","reverse-setback","reverse-change","reverse-backward","cancel-call-off","cancel-neutralize","cancel-mark"],"She undid the knot at the top of the bag.","她解开了袋口的结。",null,"https://www.merriam-webster.com/dictionary/undo"],
   ["sense-2","撤销；消除影响","v.",["撤销","消除影响"],["undo-2","reverse-opposite","reverse-back","reverse-setback","reverse-change","reverse-backward","cancel-call-off","cancel-neutralize","cancel-mark"],"The editor undid the last change to the document.","编辑撤销了对文档的最后一次修改。",null,"https://www.merriam-webster.com/dictionary/undo"],
   ["sense-3","使毁灭；使失败","v.",["使毁灭","使失败"],["undo-3","reverse-opposite","reverse-back","reverse-setback","reverse-change","reverse-backward","cancel-call-off","cancel-neutralize","cancel-mark"],"A single careless decision undid years of patient work.","一个草率决定毁掉了多年耐心经营的成果。",null,"https://www.merriam-webster.com/dictionary/undo"]
  ],[{"terms":["取消","破坏","毁灭","扰乱","撤消"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/undo","reason":"本批 undo 按所列词性与构式训练：解开；松开（v.）、撤销；消除影响（v.）、使毁灭；使失败（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("disguise",[
   ["sense-1","伪装身份或外貌","v.",["伪装身份或外貌"],["disguise-1","21-related-disguise-cloak","hide-from-view","hide-information","blend-with-surroundings","hide-underlying-truth"],"The actor disguised himself with a hat and a false beard.","演员用帽子和假胡子伪装了自己。",null,"https://www.merriam-webster.com/dictionary/disguise"],
   ["sense-2","掩饰；隐藏真实情况","v.",["掩饰","隐藏真实情况"],["disguise-2","21-related-disguise-cloak","hide-from-view","hide-information","blend-with-surroundings","hide-underlying-truth"],"The bright paint could not disguise the damage to the wall.","鲜艳的油漆掩盖不了墙上的损坏。",null,"https://www.merriam-webster.com/dictionary/disguise"],
   ["sense-3","伪装；化装用品","n.",["伪装","化装用品"],["disguise-3","21-related-disguise-cloak","hide-from-view","hide-information","blend-with-surroundings","hide-underlying-truth"],"The detective wore a simple disguise.","侦探作了简单伪装。",null,"https://www.merriam-webster.com/dictionary/disguise"]
  ],[{"terms":["假面目","假装","隐瞒"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/disguise","reason":"本批 disguise 按所列词性与构式训练：伪装身份或外貌（v.）、掩饰；隐藏真实情况（v.）、伪装；化装用品（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("refuse",[
   ["sense-1","拒绝接受或做某事","v.",["拒绝接受或做某事"],["refuse-1","reject-refuse","reject-not-accept","reject-immune","reject-unwanted","decrease-deteriorate","politely-refuse","inflect-declinable-word"],"She refused to sign the unfinished report.","她拒绝在尚未完成的报告上签字。",null,"https://www.merriam-webster.com/dictionary/refuse"],
   ["sense-2","不准给予；拒绝提供","v.",["不准给予","拒绝提供"],["refuse-2","reject-refuse","reject-not-accept","reject-immune","reject-unwanted","decrease-deteriorate","politely-refuse","inflect-declinable-word"],"The guard refused him entry without a ticket.","没有票，门卫不准他进入。",null,"https://www.merriam-webster.com/dictionary/refuse"]
  ],[{"terms":["拒绝","谢绝","不接受","垃圾","废弃物"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/refuse","reason":"当前 /rɪˈfjuːz/ 采用拒绝动词；首音节重读且末音不同的垃圾名词不混入。本批 refuse 按所列词性与构式训练：拒绝接受或做某事（v.）、不准给予；拒绝提供（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("exclude",[
   ["sense-1","排除；不让参加","v.",["排除","不让参加"],["exclude-1","omit-leave-out","omit-fail","expel-1"],"The review excludes material published after the deadline.","审查不包括截止日期后发表的材料。",null,"https://www.merriam-webster.com/dictionary/exclude"]
  ],[{"terms":["除外","排斥","除外(诊断)"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/exclude","reason":"本批 exclude 按所列词性与构式训练：排除；不让参加（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("itch",[
   ["sense-1","痒感","n.",["痒感"],["itch-1","desire-want","want-desire","desire-longing","desire-noun"],"The rough fabric caused an itch on his neck.","粗糙的布料使他的脖子发痒。",null,"https://www.merriam-webster.com/dictionary/itch"],
   ["sense-2","发痒","v.",["发痒"],["itch-2","desire-want","want-desire","desire-longing","desire-noun"],"Her hands began to itch after touching the leaves.","摸过叶子后，她的手开始发痒。",null,"https://www.merriam-webster.com/dictionary/itch"],
   ["sense-3","渴望做某事","v.",["渴望做某事"],["itch-3","desire-want","want-desire","desire-longing","desire-noun"],"After months of practice, she was itching to perform.","练习数月后，她渴望上台表演。","itch to do","https://www.merriam-webster.com/dictionary/itch"]
  ],[{"terms":["痒","渴望","疥疮"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/itch","reason":"本批 itch 按所列词性与构式训练：痒感（n.）、发痒（v.）、渴望做某事（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("effort",[
   ["sense-1","努力；用力","n.",["努力","用力"],["effort-1","attempt-try","attempt-effort","attempt-attack"],"Lifting the gate required considerable effort.","抬起大门需要很大的力气。",null,"https://www.merriam-webster.com/dictionary/effort"],
   ["sense-2","一次尝试或努力成果","n.",["一次尝试或努力成果"],["effort-2","attempt-try","attempt-effort","attempt-attack"],"The sketch was her first effort at drawing a portrait.","这幅素描是她第一次尝试画肖像。",null,"https://www.merriam-webster.com/dictionary/effort"]
  ],[{"terms":["成就"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/effort","reason":"本批 effort 按所列词性与构式训练：努力；用力（n.）、一次尝试或努力成果（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("yearn",[
   ["sense-1","渴望；思念","v.",["渴望","思念"],["yearn-1"],"He yearned for the quiet of his childhood village.","他渴望回到童年村庄的宁静。","yearn for","https://www.merriam-webster.com/dictionary/yearn"]
  ],[{"terms":["想念","怀念","同情"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/yearn","reason":"本批 yearn 按所列词性与构式训练：渴望；思念（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("ranger",[
   ["sense-1","护林员；公园管理员","n.",["护林员","公园管理员"],["ranger-1"],"The ranger checked the trail after the storm.","风暴过后，护林员检查了小径。",null,"https://www.merriam-webster.com/dictionary/ranger"]
  ],[{"terms":["王室守林人","骑警","漫游者"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ranger","reason":"本批 ranger 按所列词性与构式训练：护林员；公园管理员（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("delete",[
   ["sense-1","删除；删去","v.",["删除","删去"],["delete-1","erase-remove","erase-delete","erase-data"],"Delete the duplicate line before saving the file.","保存文件前，删去重复的那一行。",null,"https://www.merriam-webster.com/dictionary/delete"]
  ],[]);
  entry("tackle",[
   ["sense-1","着手处理；应对","v.",["着手处理","应对"],["tackle-1","agreement-transaction","handle-cope","distribute-cards","large-amount"],"The team tackled the most urgent repair first.","团队首先处理了最紧急的维修。",null,"https://www.merriam-webster.com/dictionary/tackle"],
   ["sense-2","体育中擒抱或抢断","v.",["体育中擒抱或抢断"],["tackle-2","agreement-transaction","handle-cope","distribute-cards","large-amount"],"The defender tackled the runner before the line.","防守队员在线前擒抱住了持球跑动者。",null,"https://www.merriam-webster.com/dictionary/tackle"],
   ["sense-3","专门用具；装备","n.",["专门用具","装备"],["tackle-3","agreement-transaction","handle-cope","distribute-cards","large-amount"],"The box holds fishing tackle and spare line.","盒子里装着钓鱼用具和备用鱼线。",null,"https://www.merriam-webster.com/dictionary/tackle"],
   ["sense-4","体育中的擒抱或抢断动作","n.",["体育中的擒抱或抢断动作"],["tackle-4","agreement-transaction","handle-cope","distribute-cards","large-amount"],"The replay showed a well-timed tackle.","回放显示了一个时机恰当的擒抱动作。",null,"https://www.merriam-webster.com/dictionary/tackle"]
  ],[{"terms":["工具","复滑车","滑车","扭倒","固定","处理","抓住"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/tackle","reason":"本批 tackle 按所列词性与构式训练：着手处理；应对（v.）、体育中擒抱或抢断（v.）、专门用具；装备（n.）、体育中的擒抱或抢断动作（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("clear",[
   ["sense-1","清楚的；易懂的","adj.",["清楚的","易懂的"],["clear-1","transparent-see-through","transparent-open"],"The instructions are clear enough for a beginner.","说明足够清楚，初学者也能理解。",null,"https://www.merriam-webster.com/dictionary/clear"],
   ["sense-2","透明的；清澈的","adj.",["透明的","清澈的"],["clear-2","transparent-see-through","transparent-open"],"Clear glass allows the roots to be seen.","透明玻璃让人能看到根部。",null,"https://www.merriam-webster.com/dictionary/clear"],
   ["sense-3","晴朗的；无云的","adj.",["晴朗的","无云的"],["clear-3","transparent-see-through","transparent-open"],"A clear sky made the distant peaks visible.","晴朗的天空使远处山峰清晰可见。",null,"https://www.merriam-webster.com/dictionary/clear"],
   ["sense-4","畅通的；无障碍的","adj.",["畅通的","无障碍的"],["clear-4","transparent-see-through","transparent-open"],"Keep the emergency exit clear.","保持紧急出口畅通。",null,"https://www.merriam-webster.com/dictionary/clear"],
   ["sense-5","清除；腾空","v.",["清除","腾空"],["clear-5","transparent-see-through","transparent-open"],"They cleared the table after the meal.","饭后，他们收拾清空了桌子。",null,"https://www.merriam-webster.com/dictionary/clear"],
   ["sense-6","排除嫌疑；证明无辜","v.",["排除嫌疑","证明无辜"],["clear-6","transparent-see-through","transparent-open"],"The new evidence cleared the driver of blame.","新证据排除了司机的责任。",null,"https://www.merriam-webster.com/dictionary/clear"],
   ["sense-7","越过而不碰到","v.",["越过而不碰到"],["clear-7","transparent-see-through","transparent-open"],"The horse cleared the low wall easily.","马轻松跃过矮墙。",null,"https://www.merriam-webster.com/dictionary/clear"],
   ["sense-8","正式批准；准许通过","v.",["正式批准","准许通过"],["clear-8","transparent-see-through","transparent-open"],"The controller cleared the aircraft to land.","管制员准许飞机降落。",null,"https://www.merriam-webster.com/dictionary/clear"]
  ],[{"terms":["明确的","澄清的","清晰地","澄清","清除障碍","放晴","变清澈","空隙"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/clear","reason":"本批 clear 按所列词性与构式训练：清楚的；易懂的（adj.）、透明的；清澈的（adj.）、晴朗的；无云的（adj.）、畅通的；无障碍的（adj.）、清除；腾空（v.）、排除嫌疑；证明无辜（v.）、越过而不碰到（v.）、正式批准；准许通过（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cope",[
   ["sense-1","应对；设法处理","v.",["应对","设法处理"],["cope-1","graspable-handle","deal-with-responsibility","touch-move-by-hand","control-machine-vehicle","deal-in-goods","informal-online-name"],"The small office struggled to cope with the extra work.","小办公室费力地应对额外工作。","cope with","https://www.merriam-webster.com/dictionary/cope"],
   ["sense-2","宗教仪式中的长披风","n.",["宗教仪式中的长披风"],["cope-2","graspable-handle","deal-with-responsibility","touch-move-by-hand","control-machine-vehicle","deal-in-goods","informal-online-name"],"The museum displayed an embroidered cope.","博物馆展出了一件绣花的宗教仪式长披风。",null,"https://www.merriam-webster.com/dictionary/cope"]
  ],[{"terms":["竞争","应付","长袍"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cope","reason":"本批 cope 按所列词性与构式训练：应对；设法处理（v.）、宗教仪式中的长披风（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("weary",[
   ["sense-1","疲倦的","adj.",["疲倦的"],["weary-1","tired-1","20-related-tire-tired-exhaust-fatigue-overwork","tired-2","exhaust-1","beat-strike","hit-strike","beat-defeat","beat-mix","beat-pulse","beat-rhythm","beat-patrol","beat-exhausted","beat-record","exhaust-2","exhaust-3","exhaust-4","fatigue-1","fatigue-2","fatigue-3","fatigue-4"],"The weary walkers stopped beside a low stone wall.","疲倦的步行者在一道矮石墙旁停下。",null,"https://www.merriam-webster.com/dictionary/weary"],
   ["sense-2","厌烦的","adj.",["厌烦的"],["weary-2","tired-1","20-related-tire-tired-exhaust-fatigue-overwork","tired-2","exhaust-1","beat-strike","hit-strike","beat-defeat","beat-mix","beat-pulse","beat-rhythm","beat-patrol","beat-exhausted","beat-record","exhaust-2","exhaust-3","exhaust-4","fatigue-1","fatigue-2","fatigue-3","fatigue-4"],"She grew weary of hearing the same excuse.","她渐渐厌烦听同一个借口。","weary of","https://www.merriam-webster.com/dictionary/weary"],
   ["sense-3","使疲倦；使厌烦","v.",["使疲倦","使厌烦"],["weary-3","tired-1","20-related-tire-tired-exhaust-fatigue-overwork","tired-2","exhaust-1","beat-strike","hit-strike","beat-defeat","beat-mix","beat-pulse","beat-rhythm","beat-patrol","beat-exhausted","beat-record","exhaust-2","exhaust-3","exhaust-4","fatigue-1","fatigue-2","fatigue-3","fatigue-4"],"The repeated interruptions wearied the speaker.","反复打断使演讲者感到厌烦。",null,"https://www.merriam-webster.com/dictionary/weary"]
  ],[{"terms":["萎靡的","厌倦的","疲乏","生厌","不耐烦"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/weary","reason":"本批 weary 按所列词性与构式训练：疲倦的（adj.）、厌烦的（adj.）、使疲倦；使厌烦（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("weak",[
   ["sense-1","虚弱的；力量不足的","adj.",["虚弱的","力量不足的"],["weak-1","lacking-strength","ineffective-unconvincing","reduce-concentration","reduce-effectiveness"],"The weak branch could not support the heavy basket.","细弱的树枝承受不住沉重的篮子。",null,"https://www.merriam-webster.com/dictionary/weak"],
   ["sense-2","论据不充分的","adj.",["论据不充分的"],["weak-2","lacking-strength","ineffective-unconvincing","reduce-concentration","reduce-effectiveness"],"The conclusion rests on weak evidence.","这个结论所依据的证据不充分。",null,"https://www.merriam-webster.com/dictionary/weak"],
   ["sense-3","稀薄的；浓度低的","adj.",["稀薄的","浓度低的"],["weak-3","lacking-strength","ineffective-unconvincing","reduce-concentration","reduce-effectiveness"],"He preferred weak tea with no sugar.","他喜欢不加糖的淡茶。",null,"https://www.merriam-webster.com/dictionary/weak"]
  ],[{"terms":["不牢固的","弱的","软弱的","无力的","无权力的","(论据等)不充分的","疲软的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/weak","reason":"本批 weak 按所列词性与构式训练：虚弱的；力量不足的（adj.）、论据不充分的（adj.）、稀薄的；浓度低的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sanitary",[
   ["sense-1","卫生的；清洁而有益健康的","adj.",["卫生的","清洁而有益健康的"],["sanitary-1"],"The kitchen was kept in a sanitary condition.","厨房保持着卫生状态。",null,"https://www.merriam-webster.com/dictionary/sanitary"]
  ],[{"terms":["公共厕所"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sanitary","reason":"采用卫生及清洁形容词；不能仅凭旧译把 sanitary 当作普通的公共厕所名词。本批 sanitary 按所列词性与构式训练：卫生的；清洁而有益健康的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("medical",[
   ["sense-1","医学的；医疗的","adj.",["医学的","医疗的"],["medical-1"],"The library added several medical journals.","图书馆增添了几种医学期刊。",null,"https://www.merriam-webster.com/dictionary/medical"],
   ["sense-2","体格检查（英式）","n.",["体格检查（英式）"],["medical-2"],"She completed the medical before joining the team.","她在加入团队前完成了体检。",null,"https://www.merriam-webster.com/dictionary/medical"]
  ],[{"terms":["医生","体格检查","内科的","药的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/medical","reason":"本批 medical 按所列词性与构式训练：医学的；医疗的（adj.）、体格检查（英式）（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fitness",[
   ["sense-1","体能；身体健康","n.",["体能","身体健康"],["fitness-1","21-related-fit-fitness-competent"],"The training programme improved his fitness.","训练计划改善了他的体能。",null,"https://www.merriam-webster.com/dictionary/fitness"],
   ["sense-2","适合性；胜任程度","n.",["适合性","胜任程度"],["fitness-2","21-related-fit-fitness-competent"],"The interview assessed her fitness for the role.","面试评估了她是否适合这个职位。",null,"https://www.merriam-webster.com/dictionary/fitness"]
  ],[{"terms":["适合","合宜","合理","恰当","健康","适应性"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fitness","reason":"本批 fitness 按所列词性与构式训练：体能；身体健康（n.）、适合性；胜任程度（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("fit",[
   ["sense-1","健康的；体能良好的","adj.",["健康的","体能良好的"],["fit-1","21-related-fit-fitness-competent","appropriate-for-purpose","suitable-for-purpose","well-matched","21-review-related-burst-fit"],"Regular walking helps her stay fit.","经常步行有助于她保持健康。",null,"https://www.merriam-webster.com/dictionary/fit"],
   ["sense-2","合适的；适用的","adj.",["合适的","适用的"],["fit-2","21-related-fit-fitness-competent","appropriate-for-purpose","suitable-for-purpose","well-matched","21-review-related-burst-fit"],"The old shed is no longer fit for use.","旧棚屋已不适合使用。","fit for","https://www.merriam-webster.com/dictionary/fit"],
   ["sense-3","尺寸合适；合身","v.",["尺寸合适","合身"],["fit-3","21-related-fit-fitness-competent","appropriate-for-purpose","suitable-for-purpose","well-matched","21-review-related-burst-fit"],"The new cover fits the box exactly.","新盖子的尺寸与盒子完全吻合。",null,"https://www.merriam-webster.com/dictionary/fit"],
   ["sense-4","安装；使就位","v.",["安装","使就位"],["fit-4","21-related-fit-fitness-competent","appropriate-for-purpose","suitable-for-purpose","well-matched","21-review-related-burst-fit"],"The technician fitted a new switch to the panel.","技术员在面板上装了一个新开关。",null,"https://www.merriam-webster.com/dictionary/fit"],
   ["sense-5","合身程度；配合程度","n.",["合身程度","配合程度"],["fit-5","21-related-fit-fitness-competent","appropriate-for-purpose","suitable-for-purpose","well-matched","21-review-related-burst-fit"],"The jacket is a comfortable fit.","这件夹克穿着舒适合身。",null,"https://www.merriam-webster.com/dictionary/fit"],
   ["sense-6","突然的一阵情绪或活动","n.",["突然的一阵情绪或活动"],["fit-6","21-related-fit-fitness-competent","appropriate-for-purpose","suitable-for-purpose","well-matched","21-review-related-burst-fit"],"He threw the broken handle away in a fit of anger.","他一怒之下扔掉了坏把手。","a fit of","https://www.merriam-webster.com/dictionary/fit"],
   ["sense-7","疾病发作；痉挛","n.",["疾病发作","痉挛"],["fit-7","21-related-fit-fitness-competent","appropriate-for-purpose","suitable-for-purpose","well-matched","21-review-related-burst-fit"],"The account describes the patient's first fit.","记录描述了病人的首次发作。",null,"https://www.merriam-webster.com/dictionary/fit"]
  ],[{"terms":["适宜","发作","适宜的","对的","准备好的","适合","使合身","使适应","使合格","符合","非特"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/fit","reason":"本批 fit 按所列词性与构式训练：健康的；体能良好的（adj.）、合适的；适用的（adj.）、尺寸合适；合身（v.）、安装；使就位（v.）、合身程度；配合程度（n.）、突然的一阵情绪或活动（n.）、疾病发作；痉挛（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("clinical",[
   ["sense-1","临床的","adj.",["临床的"],["clinical-1"],"The study compares laboratory data with clinical observations.","研究比较了实验室数据与临床观察结果。",null,"https://www.merriam-webster.com/dictionary/clinical"],
   ["sense-2","冷静客观而不动感情的","adj.",["冷静客观而不动感情的"],["clinical-2"],"Her clinical analysis left little room for sentiment.","她冷静客观的分析几乎不留感情用事的余地。",null,"https://www.merriam-webster.com/dictionary/clinical"]
  ],[{"terms":["门诊部的","临证的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/clinical","reason":"本批 clinical 按所列词性与构式训练：临床的（adj.）、冷静客观而不动感情的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("quarantine",[
   ["sense-1","检疫隔离；强制隔离期","n.",["检疫隔离","强制隔离期"],["quarantine-1","isolate-separate","isolate-identify"],"The imported plants remained in quarantine.","进口植物仍处于检疫隔离中。",null,"https://www.merriam-webster.com/dictionary/quarantine"],
   ["sense-2","使隔离接受检疫","v.",["使隔离接受检疫"],["quarantine-2","isolate-separate","isolate-identify"],"The inspectors quarantined the affected animals.","检查人员隔离了受影响的动物以供检疫。",null,"https://www.merriam-webster.com/dictionary/quarantine"]
  ],[{"terms":["隔离","封锁交通","检疫期","排斥"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/quarantine","reason":"本批 quarantine 按所列词性与构式训练：检疫隔离；强制隔离期（n.）、使隔离接受检疫（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("segregate",[
   ["sense-1","分离；分开存放","v.",["分离","分开存放"],["segregate-1","separate-apart","separate-divide","separate-sort","separate-relationship","isolate-separate","isolate-identify"],"The workers segregated the damaged materials from the rest.","工人把受损材料与其余材料分开放置。",null,"https://www.merriam-webster.com/dictionary/segregate"],
   ["sense-2","实行社会隔离对待","v.",["实行社会隔离对待"],["segregate-2","separate-apart","separate-divide","separate-sort","separate-relationship","isolate-separate","isolate-identify"],"The novel depicts a school system that segregates children by race.","小说描写了一种按种族隔离儿童的学校制度。",null,"https://www.merriam-webster.com/dictionary/segregate"]
  ],[{"terms":["分离的","被隔离的","隔离","分凝","使分离","使隔离"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/segregate","reason":"当前 /ˈsegrɪgeɪt/ 采用分离和社会隔离动词，不把另读 /-gət/ 的少见名词混入。本批 segregate 按所列词性与构式训练：分离；分开存放（v.）、实行社会隔离对待（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("check",[
   ["sense-1","检查；核对","v.",["检查","核对"],["check-1","cheque-1"],"Check the measurements against the original drawing.","对照原图核对测量值。",null,"https://www.merriam-webster.com/dictionary/check"],
   ["sense-2","制止；减缓","v.",["制止","减缓"],["check-2","cheque-1"],"The barrier checked the spread of the floodwater.","屏障减缓了洪水蔓延。",null,"https://www.merriam-webster.com/dictionary/check"],
   ["sense-3","托运或寄存","v.",["托运或寄存"],["check-3","cheque-1"],"She checked her suitcase before boarding.","登机前，她托运了行李箱。",null,"https://www.merriam-webster.com/dictionary/check"],
   ["sense-4","检查；核查","n.",["检查","核查"],["check-4","cheque-1"],"The engineer made a final check before switching on the power.","工程师通电前作了最后检查。",null,"https://www.merriam-webster.com/dictionary/check"],
   ["sense-5","支票（美式拼写）","n.",["支票（美式拼写）"],["check-5","cheque-1"],"The charity received a check for the repair fund.","慈善机构收到了一张用于维修基金的支票。",null,"https://www.merriam-webster.com/dictionary/check"],
   ["sense-6","勾号；核对标记","n.",["勾号","核对标记"],["check-6","cheque-1"],"Put a check beside each completed task.","在每项完成的任务旁打一个勾。",null,"https://www.merriam-webster.com/dictionary/check"],
   ["sense-7","餐馆账单（美式）","n.",["餐馆账单（美式）"],["check-7","cheque-1"],"The waiter brought the check after dessert.","甜点之后，服务员拿来了账单。",null,"https://www.merriam-webster.com/dictionary/check"],
   ["sense-8","国际象棋中的将军","n.",["国际象棋中的将军"],["check-8","cheque-1"],"The king was in check and had to move.","王被将军了，必须移动。",null,"https://www.merriam-webster.com/dictionary/check"]
  ],[{"terms":["支票","阻止物","寄物牌","象棋中将军","阻止","寄存","托运","逐项相符","开支票","复选"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/check","reason":"本批 check 按所列词性与构式训练：检查；核对（v.）、制止；减缓（v.）、托运或寄存（v.）、检查；核查（n.）、支票（美式拼写）（n.）、勾号；核对标记（n.）、餐馆账单（美式）（n.）、国际象棋中的将军（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("injection",[
   ["sense-1","注射；注射剂","n.",["注射","注射剂"],["injection-1"],"The record notes the time of the injection.","记录注明了注射时间。",null,"https://www.merriam-webster.com/dictionary/injection"],
   ["sense-2","资金等的注入","n.",["资金等的注入"],["injection-2"],"The library received an injection of funds for new equipment.","图书馆获得了一笔用于购买新设备的资金。",null,"https://www.merriam-webster.com/dictionary/injection"]
  ],[{"terms":["注入"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/injection","reason":"本批 injection 按所列词性与构式训练：注射；注射剂（n.）、资金等的注入（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("pharmacy",[
   ["sense-1","药房；药店","n.",["药房","药店"],["pharmacy-1"],"The pharmacy stands opposite the clinic.","药房位于诊所对面。",null,"https://www.merriam-webster.com/dictionary/pharmacy"],
   ["sense-2","药学；配药专业","n.",["药学","配药专业"],["pharmacy-2"],"He studied pharmacy before working in research.","他从事研究工作前学的是药学。",null,"https://www.merriam-webster.com/dictionary/pharmacy"]
  ],[{"terms":["配药学","制药业","药剂学","调剂学"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pharmacy","reason":"本批 pharmacy 按所列词性与构式训练：药房；药店（n.）、药学；配药专业（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("blot",[
   ["sense-1","污点；墨渍","n.",["污点","墨渍"],["blot-1","stain-1","dye-1","dye-2","stain-2","stain-3","stain-4","obscure-1","vague-unclear","vague-uncertain","hide-from-view","hide-information","obscure-2"],"A dark blot covered part of the signature.","一块深色墨渍遮住了签名的一部分。",null,"https://www.merriam-webster.com/dictionary/blot"],
   ["sense-2","用吸水材料吸干","v.",["用吸水材料吸干"],["blot-2","stain-1","dye-1","dye-2","stain-2","stain-3","stain-4","obscure-1","vague-unclear","vague-uncertain","hide-from-view","hide-information","obscure-2"],"Blot the spilled water with a clean cloth.","用干净的布吸干洒出的水。",null,"https://www.merriam-webster.com/dictionary/blot"],
   ["sense-3","遮住；使看不见","v.",["遮住","使看不见"],["blot-3","stain-1","dye-1","dye-2","stain-2","stain-3","stain-4","obscure-1","vague-unclear","vague-uncertain","hide-from-view","hide-information","obscure-2"],"Thick cloud blotted out the hilltop.","厚云遮住了山顶。","blot out","https://www.merriam-webster.com/dictionary/blot"]
  ],[{"terms":["墨水渍","乱涂","使模糊","吸干","弄上墨渍","吸墨水"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/blot","reason":"本批 blot 按所列词性与构式训练：污点；墨渍（n.）、用吸水材料吸干（v.）、遮住；使看不见（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("cloak",[
   ["sense-1","斗篷；大氅","n.",["斗篷","大氅"],["cloak-1","21-related-disguise-cloak","hide-from-view","hide-information","cover-1","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit","cover-2","cover-3","cover-4","cover-5","cover-6","cover-7","cover-8","cover-9","cover-10","cover-11"],"The traveller wrapped a woollen cloak around his shoulders.","旅行者把羊毛斗篷裹在肩上。",null,"https://www.merriam-webster.com/dictionary/cloak"],
   ["sense-2","掩盖；遮蔽","v.",["掩盖","遮蔽"],["cloak-2","21-related-disguise-cloak","hide-from-view","hide-information","cover-1","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit","cover-2","cover-3","cover-4","cover-5","cover-6","cover-7","cover-8","cover-9","cover-10","cover-11"],"Fog cloaked the valley throughout the morning.","整个上午，雾笼罩着山谷。",null,"https://www.merriam-webster.com/dictionary/cloak"]
  ],[{"terms":["斗蓬","掩护","遮掩","隐匿","使披斗蓬"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/cloak","reason":"本批 cloak 按所列词性与构式训练：斗篷；大氅（n.）、掩盖；遮蔽（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("dress",[
   ["sense-1","连衣裙","n.",["连衣裙"],["dress-1","provide-clothing","cover-or-dress-in-form"],"She wore a simple blue dress to the concert.","她穿着一件简洁的蓝色连衣裙去听音乐会。",null,"https://www.merriam-webster.com/dictionary/dress"],
   ["sense-2","服装；穿着方式","n.",["服装","穿着方式"],["dress-2","provide-clothing","cover-or-dress-in-form"],"The invitation asks for formal dress.","请柬要求穿正式服装。",null,"https://www.merriam-webster.com/dictionary/dress"],
   ["sense-3","穿衣；给人穿衣","v.",["穿衣","给人穿衣"],["dress-3","provide-clothing","cover-or-dress-in-form"],"He dressed quickly when the alarm sounded.","警报响起时，他迅速穿好衣服。",null,"https://www.merriam-webster.com/dictionary/dress"],
   ["sense-4","包扎；处理伤口","v.",["包扎","处理伤口"],["dress-4","provide-clothing","cover-or-dress-in-form"],"The nurse dressed the cut before the patient left.","病人离开前，护士处理并包扎了伤口。",null,"https://www.merriam-webster.com/dictionary/dress"]
  ],[{"terms":["覆盖物","穿着","给...穿衣","整理"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/dress","reason":"本批 dress 按所列词性与构式训练：连衣裙（n.）、服装；穿着方式（n.）、穿衣；给人穿衣（v.）、包扎；处理伤口（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("grey",[
   ["sense-1","灰色的","adj.",["灰色的"],["grey-1"],"Grey clouds gathered above the harbour.","灰云聚集在港口上空。",null,"https://www.merriam-webster.com/dictionary/gray"],
   ["sense-2","阴郁的；单调的","adj.",["阴郁的","单调的"],["grey-2"],"The novel describes a grey existence in an isolated town.","小说描写了偏僻小镇里单调的生活。",null,"https://www.merriam-webster.com/dictionary/gray"],
   ["sense-3","灰色","n.",["灰色"],["grey-3"],"She chose a soft grey for the walls.","她为墙壁选择了一种柔和的灰色。",null,"https://www.merriam-webster.com/dictionary/gray"],
   ["sense-4","变灰白；使灰白","v.",["变灰白","使灰白"],["grey-4"],"His hair greyed during the years abroad.","在国外的那些年，他的头发变灰白了。",null,"https://www.merriam-webster.com/dictionary/gray"]
  ],[{"terms":["阴沉的","(使)成灰色"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/gray","reason":"本批 grey 按所列词性与构式训练：灰色的（adj.）、阴郁的；单调的（adj.）、灰色（n.）、变灰白；使灰白（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("hat",[
   ["sense-1","帽子","n.",["帽子"],["hat-1","role-1","purpose-or-duty","operate-effectively","mathematical-function","formal-social-event","role-2"],"A wide hat protected her from the sun.","一顶宽檐帽为她遮挡阳光。",null,"https://www.merriam-webster.com/dictionary/hat"],
   ["sense-2","承担的身份或角色","n.",["承担的身份或角色"],["hat-2","role-1","purpose-or-duty","operate-effectively","mathematical-function","formal-social-event","role-2"],"In this small company, she wears several hats.","在这家小公司里，她身兼数职。","wear several hats","https://www.merriam-webster.com/dictionary/hat"]
  ],[{"terms":["给...戴帽子"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/hat","reason":"本批 hat 按所列词性与构式训练：帽子（n.）、承担的身份或角色（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("make-up",[
   ["sense-1","化妆品；化妆","n.",["化妆品","化妆"],["make-up-1","student-writing","musical-composition","artistic-arrangement","constituent-makeup"],"The actor removed the stage make-up after the performance.","演出后，演员卸掉了舞台妆。",null,"https://www.merriam-webster.com/dictionary/makeup"],
   ["sense-2","组成；构成","n.",["组成","构成"],["make-up-2","student-writing","musical-composition","artistic-arrangement","constituent-makeup"],"The report examines the social make-up of the neighbourhood.","报告考察了这个社区的社会构成。",null,"https://www.merriam-webster.com/dictionary/makeup"],
   ["sense-3","补考或补做的作业","n.",["补考或补做的作业"],["make-up-3","student-writing","musical-composition","artistic-arrangement","constituent-makeup"],"The student completed a make-up after missing the original test.","错过原定测试后，学生完成了一次补考。",null,"https://www.merriam-webster.com/dictionary/makeup"]
  ],[{"terms":["性格","补考","补做的课业"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/makeup","reason":"本批 make-up 按所列词性与构式训练：化妆品；化妆（n.）、组成；构成（n.）、补考或补做的作业（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("ornament",[
   ["sense-1","装饰品；装饰","n.",["装饰品","装饰"],["ornament-1","decoration-1","decoration-2"],"A small wooden ornament hung from the shelf.","一件小木饰品挂在架子上。",null,"https://www.merriam-webster.com/dictionary/ornament"],
   ["sense-2","音乐装饰音","n.",["音乐装饰音"],["ornament-2","decoration-1","decoration-2"],"The violinist added a brief ornament to the melody.","小提琴手在旋律中加入了一段短小的装饰音。",null,"https://www.merriam-webster.com/dictionary/ornament"]
  ],[{"terms":["点缀品","教堂用品","修饰"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/ornament","reason":"当前 /ˈɔːnəmənt/ 采用装饰品与装饰音名词；动词末音 /-ment/ 留作参考。本批 ornament 按所列词性与构式训练：装饰品；装饰（n.）、音乐装饰音（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("pretty",[
   ["sense-1","漂亮的；悦目的","adj.",["漂亮的","悦目的"],["pretty-1","beautiful-appearance","pleasant-enjoyable"],"The path leads to a pretty garden beside the river.","小路通向河边一个漂亮的花园。",null,"https://www.merriam-webster.com/dictionary/pretty"],
   ["sense-2","相当；颇","adv.",["相当","颇"],["pretty-2","beautiful-appearance","pleasant-enjoyable"],"The instructions are pretty easy to follow.","这些说明相当容易照着做。",null,"https://www.merriam-webster.com/dictionary/pretty"]
  ],[{"terms":["优美的","机灵的","狡猾的","恰当的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/pretty","reason":"本批 pretty 按所列词性与构式训练：漂亮的；悦目的（adj.）、相当；颇（adv.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("sleeve",[
   ["sense-1","衣袖","n.",["衣袖"],["sleeve-1","cover-1","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit","cover-2","cover-3","cover-4","cover-5","cover-6","cover-7","cover-8","cover-9","cover-10","cover-11"],"He rolled up his sleeve before washing the tools.","清洗工具前，他卷起了衣袖。",null,"https://www.merriam-webster.com/dictionary/sleeve"],
   ["sense-2","套管；保护套","n.",["套管","保护套"],["sleeve-2","cover-1","hide-from-view","hide-information","protective-place","protection-from-danger","hide-a-person","tax-shelter","lid-cover","lid-eyelid","lid-limit","cover-2","cover-3","cover-4","cover-5","cover-6","cover-7","cover-8","cover-9","cover-10","cover-11"],"Slide the photograph into a protective sleeve.","把照片滑入保护套。",null,"https://www.merriam-webster.com/dictionary/sleeve"]
  ],[{"terms":["袖子","缝上袖子"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sleeve","reason":"本批 sleeve 按所列词性与构式训练：衣袖（n.）、套管；保护套（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("crew",[
   ["sense-1","船员或机组人员","n.",["船员或机组人员"],["crew-1"],"The crew checked the vessel before departure.","船员在出发前检查了船只。",null,"https://www.merriam-webster.com/dictionary/crew"],
   ["sense-2","共同工作的团队","n.",["共同工作的团队"],["crew-2"],"A film crew arrived to record the restoration.","摄制组前来记录修复过程。",null,"https://www.merriam-webster.com/dictionary/crew"],
   ["sense-3","担任船员；为船配备人员","v.",["担任船员","为船配备人员"],["crew-3"],"Volunteers crewed the boat during the survey.","调查期间，志愿者担任了船上的工作人员。",null,"https://www.merriam-webster.com/dictionary/crew"]
  ],[{"terms":["全体船员","机组人员","全体工作人员","一组人","一帮人","为…配备船员"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/crew","reason":"本批 crew 按所列词性与构式训练：船员或机组人员（n.）、共同工作的团队（n.）、担任船员；为船配备人员（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("defer",[
   ["sense-1","推迟；延期","v.",["推迟","延期"],["defer-1","reschedule-later","delay-postpone","delay-waiting"],"The committee deferred the decision until next week.","委员会把决定推迟到下周。",null,"https://www.merriam-webster.com/dictionary/defer"],
   ["sense-2","遵从；尊重他人判断","v.",["遵从","尊重他人判断"],["defer-2","reschedule-later","delay-postpone","delay-waiting"],"I defer to your judgement on the choice of materials.","在材料选择上，我尊重你的判断。","defer to","https://www.merriam-webster.com/dictionary/defer"]
  ],[{"terms":["听从","使推迟","使延期"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/defer","reason":"本批 defer 按所列词性与构式训练：推迟；延期（v.）、遵从；尊重他人判断（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("memorial",[
   ["sense-1","纪念物；纪念碑","n.",["纪念物","纪念碑"],["memorial-1","monument-memorial","monument-historic","monument-testament"],"The memorial records the names of the lost sailors.","纪念碑记载了遇难水手的姓名。",null,"https://www.merriam-webster.com/dictionary/memorial"],
   ["sense-2","纪念性的","adj.",["纪念性的"],["memorial-2","monument-memorial","monument-historic","monument-testament"],"The orchestra gave a memorial concert for its former conductor.","乐团为前任指挥举办了一场纪念音乐会。",null,"https://www.merriam-webster.com/dictionary/memorial"]
  ],[{"terms":["请愿书","记念的","记忆的"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/memorial","reason":"本批 memorial 按所列词性与构式训练：纪念物；纪念碑（n.）、纪念性的（adj.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("mail",[
   ["sense-1","邮件；邮政寄送的物品","n.",["邮件","邮政寄送的物品"],["mail-1","21-related-mail-parcel"],"The morning mail included a parcel from the museum.","早晨的邮件中有一个博物馆寄来的包裹。",null,"https://www.merriam-webster.com/dictionary/mail"],
   ["sense-2","邮寄；发送邮件","v.",["邮寄","发送邮件"],["mail-2","21-related-mail-parcel"],"She mailed the completed form before the deadline.","她在截止日期前寄出了填好的表格。",null,"https://www.merriam-webster.com/dictionary/mail"],
   ["sense-3","锁子甲；金属环甲","n.",["锁子甲","金属环甲"],["mail-3","21-related-mail-parcel"],"The display shows mail worn beneath a heavy coat.","展品展示了穿在厚外衣下面的锁子甲。",null,"https://www.merriam-webster.com/dictionary/mail"]
  ],[{"terms":["邮政","邮递","盔甲","给...穿盔甲"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/mail","reason":"本批 mail 按所列词性与构式训练：邮件；邮政寄送的物品（n.）、邮寄；发送邮件（v.）、锁子甲；金属环甲（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("parade",[
   ["sense-1","游行；列队展示","n.",["游行","列队展示"],["parade-1","procession-parade","ceremonial-line","procession-succession","sequence-of-people"],"The parade moved slowly through the main square.","游行队伍缓缓穿过主广场。",null,"https://www.merriam-webster.com/dictionary/parade"],
   ["sense-2","列队行进","v.",["列队行进"],["parade-2","procession-parade","ceremonial-line","procession-succession","sequence-of-people"],"The musicians paraded along the waterfront.","乐手沿着滨水道路列队行进。",null,"https://www.merriam-webster.com/dictionary/parade"],
   ["sense-3","炫耀；招摇展示","v.",["炫耀","招摇展示"],["parade-3","procession-parade","ceremonial-line","procession-succession","sequence-of-people"],"He paraded his new equipment before the other collectors.","他在其他收藏者面前炫耀自己的新设备。",null,"https://www.merriam-webster.com/dictionary/parade"]
  ],[{"terms":["阅兵","(使)列队行进"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/parade","reason":"本批 parade 按所列词性与构式训练：游行；列队展示（n.）、列队行进（v.）、炫耀；招摇展示（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("parcel",[
   ["sense-1","包裹","n.",["包裹"],["parcel-1","21-related-mail-parcel","package-parcel","package-bundle","package-wrap"],"The parcel arrived wrapped in thick brown paper.","包裹到达时包着厚牛皮纸。",null,"https://www.merriam-webster.com/dictionary/parcel"],
   ["sense-2","一块土地","n.",["一块土地"],["parcel-2","21-related-mail-parcel","package-parcel","package-bundle","package-wrap"],"The survey divides the field into several parcels.","勘测把田地分成了几块。",null,"https://www.merriam-webster.com/dictionary/parcel"],
   ["sense-3","分配；分成几份","v.",["分配","分成几份"],["parcel-3","21-related-mail-parcel","package-parcel","package-bundle","package-wrap"],"They parcelled out the work among four teams.","他们把工作分配给四个团队。","parcel out","https://www.merriam-webster.com/dictionary/parcel"]
  ],[{"terms":["部分","片","打包","部分的","局部地"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/parcel","reason":"本批 parcel 按所列词性与构式训练：包裹（n.）、一块土地（n.）、分配；分成几份（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("path",[
   ["sense-1","小路；步道","n.",["小路","步道"],["path-1","21-related-way-path","travel-path","method-treatment","direct-along-path","track-mark","17-plant-trace","track-path","track-rail","track-racing","track-recording","track-follow","17-tracking","track-monitor","track-course"],"The path winds between the garden beds.","小路蜿蜒穿过花坛。",null,"https://www.merriam-webster.com/dictionary/path"],
   ["sense-2","行进路线；轨迹","n.",["行进路线","轨迹"],["path-2","21-related-way-path","travel-path","method-treatment","direct-along-path","track-mark","17-plant-trace","track-path","track-rail","track-racing","track-recording","track-follow","17-tracking","track-monitor","track-course"],"The sensor recorded the path of the moving object.","传感器记录了移动物体的轨迹。",null,"https://www.merriam-webster.com/dictionary/path"],
   ["sense-3","行动途径；发展方向","n.",["行动途径","发展方向"],["path-3","21-related-way-path","travel-path","method-treatment","direct-along-path","track-mark","17-plant-trace","track-path","track-rail","track-racing","track-recording","track-follow","17-tracking","track-monitor","track-course"],"The course opened a new path into research.","这门课开辟了一条进入研究领域的新途径。",null,"https://www.merriam-webster.com/dictionary/path"]
  ],[{"terms":["道路","路线","路径","途径","行动方向"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/path","reason":"本批 path 按所列词性与构式训练：小路；步道（n.）、行进路线；轨迹（n.）、行动途径；发展方向（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("swift",[
   ["sense-1","迅速的；很快发生的","adj.",["迅速的","很快发生的"],["swift-1"],"The team made a swift response to the warning.","团队对警告作出了迅速反应。",null,"https://www.merriam-webster.com/dictionary/swift"],
   ["sense-2","雨燕","n.",["雨燕"],["swift-2"],"A swift circled high above the roofs.","一只雨燕在屋顶高处盘旋。",null,"https://www.merriam-webster.com/dictionary/swift"]
  ],[{"terms":["褐雨燕","快速爬行的小蜥蜴","蝙蝠蛾","大滚筒","快的","敏捷的","立刻的","迅速地","敏捷地"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/swift","reason":"本批 swift 按所列词性与构式训练：迅速的；很快发生的（adj.）、雨燕（n.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("vanish",[
   ["sense-1","消失；不复存在","v.",["消失","不复存在"],["vanish-1","disappear-vanish","disappear-go-missing"],"The footprints vanished when the rain grew heavier.","雨势加大后，脚印消失了。",null,"https://www.merriam-webster.com/dictionary/vanish"]
  ],[{"terms":["不见","成为零"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/vanish","reason":"本批 vanish 按所列词性与构式训练：消失；不复存在（v.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
  entry("way",[
   ["sense-1","道路；路线","n.",["道路","路线"],["way-1","21-related-way-path","travel-path","method-treatment","direct-along-path","method-systematic-way","method-acting-technique"],"The guide showed us the safest way to the harbour.","向导给我们指出了通向港口最安全的路线。",null,"https://www.merriam-webster.com/dictionary/way"],
   ["sense-2","方法；方式","n.",["方法","方式"],["way-2","21-related-way-path","travel-path","method-treatment","direct-along-path","method-systematic-way","method-acting-technique"],"There is a simpler way to solve the problem.","有一种更简单的方法能解决这个问题。",null,"https://www.merriam-webster.com/dictionary/way"],
   ["sense-3","距离；路程","n.",["距离","路程"],["way-3","21-related-way-path","travel-path","method-treatment","direct-along-path","method-systematic-way","method-acting-technique"],"We still had a long way to walk.","我们还要走很长的路。",null,"https://www.merriam-webster.com/dictionary/way"],
   ["sense-4","方面","n.",["方面"],["way-4","21-related-way-path","travel-path","method-treatment","direct-along-path","method-systematic-way","method-acting-technique"],"The new design is better in several ways.","新设计在几个方面更好。",null,"https://www.merriam-webster.com/dictionary/way"],
   ["sense-5","习惯；惯常做法","n.",["习惯","惯常做法"],["way-5","21-related-way-path","travel-path","method-treatment","direct-along-path","method-systematic-way","method-acting-technique"],"She soon became familiar with the villagers' ways.","她很快熟悉了村民的习惯。",null,"https://www.merriam-webster.com/dictionary/way"],
   ["sense-6","远远地；大大地（非正式）","adv.",["远远地","大大地（非正式）"],["way-6","21-related-way-path","travel-path","method-treatment","direct-along-path","method-systematic-way","method-acting-technique"],"The final cost was way above the estimate.","最终成本远远超过估算。",null,"https://www.merriam-webster.com/dictionary/way"]
  ],[{"terms":["路","路途","情形","规模","行业","非常"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/way","reason":"本批 way 按所列词性与构式训练：道路；路线（n.）、方法；方式（n.）、距离；路程（n.）、方面（n.）、习惯；惯常做法（n.）、远远地；大大地（非正式）（adv.）。其余旧译可能为同义译法、特定搭配、历史或专业扩展；本批未另立这些考点，不因此认定旧译必然错误，也不据其宽泛表达生成独立正确答案。"}]);
 }
 if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch21=register;
})(typeof window==='object'?window:globalThis);
