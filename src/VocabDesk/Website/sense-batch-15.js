/* Batch 15: reviewed public learning scope, original bilingual examples.
 * Source entries were read during review. No learner state is included. */
(function(scope){
 'use strict';
 function register(add){
  function entry(word,rows,refs){
   const e=add(word,rows,refs);e.reviewDate='2026-11-11';
   e.senses.forEach((s,i)=>s.source=rows[i][8]);
   e.sources=[...new Set([...rows.map(r=>r[8]),...refs.map(r=>r.source)])];
   return e;
  }
  entry("super",[
   ["excellent","极好的；超级的","adj.",["极好的","超级的","上等的"],["super-excellent","excellent-quality","swell-excellent"],"We had a super meal at the little café.","我们在小咖啡馆吃了一顿很棒的饭。",null,"https://www.merriam-webster.com/dictionary/super"],
   ["very","非常；特别","adv.",["非常","特别","十分的"],["super-very"],"The instructions were super easy to follow.","这些说明特别容易照着做。",null,"https://www.merriam-webster.com/dictionary/super"],
   ["manager","楼宇管理员（美式口语）","n.",["楼宇管理员（美式口语）","管理人"],["super-manager"],"The super came upstairs to fix the leaking pipe.","楼宇管理员上楼来修漏水的管道。",null,"https://www.merriam-webster.com/dictionary/super"]
  ],[{"terms":["跑龙套角色","冗员","特级品","特大号","特大的","过分的"],"decision":"scope-excluded","reason":"跑龙套者、冗员、名词特级品及特大号未纳入本批；形容词极好不等于所有体积大的事物。","source":"https://www.merriam-webster.com/dictionary/super"}]);
  entry("interesting",[
   ["engaging","有趣的；引人关注的","adj.",["有趣的","引人关注的"],["interesting-engaging"],"The museum has an interesting collection of old clocks.","博物馆收藏了一批有趣的老钟。",null,"https://www.merriam-webster.com/dictionary/interesting"]
  ],[]);
  entry("heaven",[
   ["religion","天堂","n.",["天堂"],["heaven-religion"],"In the story, the hero dreams of reaching heaven.","故事中，主人公梦想进入天堂。",null,"https://www.merriam-webster.com/dictionary/heaven"],
   ["sky","天空；苍穹","n.",["天空","苍穹"],["heaven-sky"],"Stars filled the heavens above the desert.","沙漠上空的苍穹布满繁星。",null,"https://www.merriam-webster.com/dictionary/heaven"],
   ["bliss","极乐之地；无比幸福的状态","n.",["极乐之地","无比幸福的状态"],["heaven-bliss"],"A quiet afternoon by the lake was heaven after the busy week.","忙碌一周后，在湖边安静地度过一个下午简直是极乐。",null,"https://www.merriam-webster.com/dictionary/heaven"]
  ],[{"terms":["上帝"],"decision":"scope-excluded","reason":"本批区分天堂、天空和极乐，不把上帝身份直接当作地点或状态的同义词。","source":"https://www.merriam-webster.com/dictionary/heaven"}]);
  entry("emerge",[
   ["appear","出现；露出","v.",["出现","露出","浮现"],["emerge-appear","appearing-known"],"A small boat emerged from the fog.","一艘小船从雾中出现。",null,"https://www.merriam-webster.com/dictionary/emerge"],
   ["known","显露；被知晓","v.",["显露","被知晓","(事实)显露"],["emerge-known","appearing-known"],"New details emerged during the investigation.","调查过程中出现了新的细节。",null,"https://www.merriam-webster.com/dictionary/emerge"],
   ["become","逐渐成为；脱颖而出","v.",["逐渐成为","脱颖而出","形成"],["emerge-become"],"She emerged as the strongest candidate.","她脱颖而出，成为最有实力的候选人。","emerge as","https://www.merriam-webster.com/dictionary/emerge"]
  ],[]);
  entry("gush",[
   ["flow","涌出；喷涌","v.",["涌出","喷涌","迸出"],["gush-flow"],"Water gushed from the broken pipe.","水从破管道里喷涌而出。",null,"https://www.merriam-webster.com/dictionary/gush"],
   ["speak","滔滔不绝地热情诉说","v.",["滔滔不绝地热情诉说","滔滔不绝地讲话"],["gush-speak"],"He gushed about the wonderful welcome he had received.","他滔滔不绝地讲述自己受到的热情欢迎。",null,"https://www.merriam-webster.com/dictionary/gush"],
   ["flow-noun","一股喷流","n.",["一股喷流"],["gush-flow-noun"],"A sudden gush of air blew the papers off the desk.","一股突如其来的气流把纸吹下了桌子。",null,"https://www.merriam-webster.com/dictionary/gush"]
  ],[{"terms":["滔滔不绝的讲话"],"decision":"scope-excluded","reason":"讲话名词未单列；热情诉说的动词与喷流名词已分别训练。","source":"https://www.merriam-webster.com/dictionary/gush"}]);
  entry("situate",[
   ["place","使位于；把……置于","v.",["使位于","把……置于","使坐落于"],["situate-place","putting-location"],"They situated the new shelter beside the river.","他们把新避难所设在河边。",null,"https://www.merriam-webster.com/dictionary/situate"],
   ["context","把……置于背景中","v.",["把……置于背景中","使处于某种情境"],["situate-context"],"The introduction situates the novel in its historical context.","引言把这部小说置于其历史背景中加以说明。",null,"https://www.merriam-webster.com/dictionary/situate"]
  ],[]);
  entry("exceed",[
   ["limit","超过；超出","v.",["超过","超出","超越","胜过","超过其他"],["exceed-limit"],"The final cost exceeded our budget.","最终费用超出了我们的预算。",null,"https://www.merriam-webster.com/dictionary/exceed"]
  ],[]);
  entry("alternate",[
   ["turns","交替；轮流","v.",["交替","轮流"],["alternate-turns"],"The two nurses alternate on the night shift.","两名护士轮流值夜班。",null,"https://www.merriam-webster.com/dictionary/alternate"],
   ["switch","使交替；交替采用","v.",["使交替","交替采用"],["alternate-switch","exchange-change-alternative"],"Alternate gentle exercise with periods of rest.","在轻度锻炼之间安排休息。","alternate A with B","https://www.merriam-webster.com/dictionary/alternate"]
  ],[{"terms":["交替的","轮流的","间隔的","每隔一个的","替代者","候补者"],"decision":"scope-excluded","reason":"当前整词发音为 /ˈɒltəneɪt/，本批只训练动词交替；形容词和候补者名词通常为 /-nət/，已核对而暂不纳入同一发音下的训练。","source":"https://www.merriam-webster.com/dictionary/alternate"}]);
  entry("manually",[
   ["hand","手工地；人工操作地","adv.",["手工地","人工操作地","用手地","人工地"],["manually-hand"],"Each label is checked manually before shipping.","每张标签在发货前都经过人工检查。",null,"https://www.merriam-webster.com/dictionary/manually"]
  ],[]);
  entry("politic",[
   ["prudent","审慎的；明智的","adj.",["审慎的","明智的","精明的","策略的"],["politic-prudent"],"It seemed politic to postpone the announcement.","推迟公布消息似乎是明智之举。",null,"https://www.merriam-webster.com/dictionary/politic"]
  ],[]);
  entry("logically",[
   ["reasoning","合乎逻辑地；有条理地","adv.",["合乎逻辑地","有条理地"],["logically-reasoning"],"She arranged the evidence logically before writing her report.","写报告前，她把证据有条理地整理好了。",null,"https://www.merriam-webster.com/dictionary/logically"],
   ["expected","按理说；必然地","adv.",["按理说","必然地","从逻辑上说"],["logically-expected","logical-expected"],"Logically, the larger container should hold more water.","按理说，更大的容器应当能装更多水。",null,"https://www.merriam-webster.com/dictionary/logically"]
  ],[]);
  entry("merger",[
   ["combination","合并；企业合并","n.",["合并","企业合并","归并","购并"],["merger-combination"],"The merger brought the two publishers under one name.","合并使两家出版社统一使用一个名称。",null,"https://www.merriam-webster.com/dictionary/merger"]
  ],[]);
  entry("requisite",[
   ["necessary","必需的；必要的","adj.",["必需的","必要的","需要的"],["requisite-necessary"],"Applicants must have the requisite experience.","申请人必须具备必要的经验。",null,"https://www.merriam-webster.com/dictionary/requisite"],
   ["requirement","必需品；必备条件","n.",["必需品","必备条件","要素","必要物品"],["requisite-requirement","requirements-needed"],"Patience is a requisite for this delicate work.","耐心是做这项精细工作的必备条件。",null,"https://www.merriam-webster.com/dictionary/requisite"]
  ],[]);
  entry("ranking",[
   ["position","排名；等级位置","n.",["排名","等级位置","等级","地位"],["ranking-position"],"Her world ranking rose after the tournament.","锦标赛后，她的世界排名上升了。",null,"https://www.collinsdictionary.com/dictionary/english/ranking"],
   ["list","排行榜；名次表","n.",["排行榜","名次表"],["ranking-list"],"The team appears near the top of the rankings.","这支队伍位于排行榜前列。",null,"https://www.collinsdictionary.com/dictionary/english/ranking"],
   ["senior","级别最高的；资深的","adj.",["级别最高的","资深的","上级的","头等的"],["ranking-senior"],"The ranking officer approved the request.","最高级别的军官批准了申请。",null,"https://www.collinsdictionary.com/dictionary/english/ranking"]
  ],[{"terms":["超群的"],"decision":"scope-excluded","reason":"超群的评价义未单列，本批区分排名、排行榜和资深职位。","source":"https://www.collinsdictionary.com/dictionary/english/ranking"}]);
  entry("utilities",[
   ["services","公用事业；水电等服务","n. pl.",["公用事业","水电等服务","水电煤气等公共服务"],["utilities-services"],"The rent includes utilities such as water and electricity.","房租包括水电等公用服务费用。",null,"https://www.merriam-webster.com/dictionary/utilities"],
   ["software","实用程序；工具软件","n. pl.",["实用程序","工具软件","实用工具"],["utilities-software"],"These utilities help users recover damaged files.","这些工具软件帮助用户恢复损坏的文件。",null,"https://www.merriam-webster.com/dictionary/utilities"]
  ],[{"terms":["公共设施"],"decision":"scope-excluded","reason":"本批公用服务限水电等事业，公共设施范围更广，不能把任何公共设施都称为 utilities。","source":"https://www.merriam-webster.com/dictionary/utilities"}]);
  entry("fantastic",[
   ["excellent","极好的；出色的","adj.",["极好的","出色的"],["fantastic-excellent","excellent-quality"],"The students did a fantastic job restoring the garden.","学生们在修复花园方面做得非常出色。",null,"https://www.merriam-webster.com/dictionary/fantastic"],
   ["imaginary","奇幻的；想象出来的","adj.",["奇幻的","想象出来的","奇妙的","稀奇的","空想的"],["fantastic-imaginary"],"The story describes fantastic creatures living beneath the sea.","故事描绘了生活在海底的奇幻生物。",null,"https://www.merriam-webster.com/dictionary/fantastic"],
   ["unbelievable","难以置信的；极大的","adj.",["难以置信的","极大的"],["fantastic-unbelievable"],"The antique chair sold for a fantastic sum.","那把古董椅卖出了惊人的高价。",null,"https://www.merriam-webster.com/dictionary/fantastic"]
  ],[]);
  entry("turning",[
   ["junction","转弯处；岔路口","n.",["转弯处","岔路口"],["turning-junction"],"Take the second turning on the left.","在左边第二个路口转弯。",null,"https://www.merriam-webster.com/dictionary/turning"],
   ["machining","车削；车床加工","n.",["车削","车床加工","车削工作"],["turning-machining"],"Metal turning requires careful control of speed.","金属车削需要仔细控制速度。",null,"https://www.merriam-webster.com/dictionary/turning"]
  ],[{"terms":["旋转"],"decision":"scope-excluded","reason":"旋转本身的过程未另列，本批选道路岔口和车床加工。","source":"https://www.merriam-webster.com/dictionary/turning"}]);
  entry("illuminate",[
   ["light","照亮；照明","v.",["照亮","照明","使灿烂"],["illuminate-light","fire-light"],"A single lamp illuminated the narrow staircase.","一盏灯照亮了狭窄的楼梯。",null,"https://www.merriam-webster.com/dictionary/illuminate"],
   ["explain","阐明；使清楚","v.",["阐明","使清楚","说明"],["illuminate-explain"],"The diagram illuminates the relationship between the two systems.","图示阐明了两个系统之间的关系。",null,"https://www.merriam-webster.com/dictionary/illuminate"]
  ],[{"terms":["用灯装饰"],"decision":"scope-excluded","reason":"节庆灯饰装饰用法未单列；提供照明不必然是装饰建筑。","source":"https://www.merriam-webster.com/dictionary/illuminate"}]);
  entry("messenger",[
   ["person","信使；送信人","n.",["信使","送信人","报信者","使者","送信者","通信员"],["messenger-person"],"A messenger delivered the sealed note before dawn.","一位信使在黎明前送来了密封的便条。",null,"https://www.merriam-webster.com/dictionary/messenger"]
  ],[]);
  entry("await",[
   ["wait","等待；期待","v.",["等待","期待","等候","等待着"],["await-wait"],"We await the results of the final inspection.","我们等待最后检查的结果。",null,"https://www.merriam-webster.com/dictionary/await"],
   ["in-store","将发生在……身上；等着","v.",["将发生在……身上","等着"],["await-in-store"],"A difficult climb awaited them beyond the village.","村庄外还有一段艰难的攀登等着他们。",null,"https://www.merriam-webster.com/dictionary/await"]
  ],[]);
  entry("opt",[
   ["choose","选择；决定采用","v.",["选择","决定采用"],["opt-choose"],"She opted for the smaller suitcase.","她选了那个较小的手提箱。","opt for","https://www.merriam-webster.com/dictionary/opt"]
  ],[]);
  entry("mil",[
   ["unit","密耳；千分之一英寸","n.",["密耳","千分之一英寸","毫英寸"],["mil-unit"],"The coating is five mils thick.","涂层厚五密耳。",null,"https://www.merriam-webster.com/dictionary/mil"]
  ],[{"terms":["军队域名"],"decision":"scope-excluded","reason":"军队域名为 .mil 的计算机标记，不与密耳测量单位混合。","source":"https://www.merriam-webster.com/dictionary/mil"}]);
  entry("lead",[
   ["guide","带领；引导","v.",["带领","引导"],["lead-guide"],"The guide led us through the old market.","导游带着我们穿过老市场。",null,"https://www.merriam-webster.com/dictionary/lead"],
   ["manage","领导；指挥","v.",["领导","指挥"],["lead-manage"],"She leads a team of twelve engineers.","她领导着一个十二人的工程师团队。",null,"https://www.merriam-webster.com/dictionary/lead"],
   ["route","通向；通往","v.",["通向","通往"],["lead-route"],"The narrow path leads to the harbour.","这条窄路通往港口。","lead to","https://www.merriam-webster.com/dictionary/lead"],
   ["cause","导致；引起","v.",["导致","引起"],["lead-cause","generate-cause"],"Poor drainage can lead to flooding.","排水不良可能导致洪水。","lead to","https://www.merriam-webster.com/dictionary/lead"],
   ["front","领先；处于首位","v.",["领先","处于首位"],["lead-front","beat-defeat"],"Our team led by three points at halftime.","中场休息时，我们队领先三分。",null,"https://www.merriam-webster.com/dictionary/lead"],
   ["advantage","领先地位；领先优势","n.",["领先地位","领先优势"],["lead-advantage"],"The runner maintained a narrow lead.","这位跑步者保持着微弱的领先优势。",null,"https://www.merriam-webster.com/dictionary/lead"],
   ["clue","线索","n.",["线索"],["lead-clue"],"The missing receipt gave the investigators a new lead.","丢失的收据给调查人员提供了新线索。",null,"https://www.merriam-webster.com/dictionary/lead"],
   ["role","主角；主演","n.",["主角","主演"],["lead-role"],"She played the lead in the school production.","她在学校的演出中担任主角。",null,"https://www.merriam-webster.com/dictionary/lead"],
   ["wire","导线；连接线","n.",["导线","连接线"],["lead-wire"],"Check the power lead before switching on the machine.","打开机器前检查电源线。",null,"https://www.merriam-webster.com/dictionary/lead"],
   ["main","主要的；领头的","adj.",["主要的","领头的","首要的"],["lead-main"],"The lead researcher presented the findings.","首席研究员介绍了研究结果。",null,"https://www.merriam-webster.com/dictionary/lead"]
  ],[{"terms":["铅"],"decision":"scope-excluded","reason":"金属铅读 /led/，与原整词音标 /liːd/ 不同；本批仅收录带领、领先、线索、主角及导线等 /liːd/ 用法，不把金属义配上错误读音。","source":"https://www.merriam-webster.com/dictionary/lead"}]);
  entry("slightly",[
   ["small-degree","略微；稍微","adv.",["略微","稍微","些微地"],["slightly-small-degree"],"The door was slightly open when we arrived.","我们到达时，门微微开着。",null,"https://www.merriam-webster.com/dictionary/slightly"]
  ],[{"terms":["苗条地"],"decision":"scope-excluded","reason":"苗条地为较少见派生旧译，本批只训练小程度的稍微。","source":"https://www.merriam-webster.com/dictionary/slightly"}]);
  entry("corm",[
   ["stem","球茎","n.",["球茎"],["corm-stem"],"Plant each corm with its growing tip facing upward.","种植每个球茎时，让生长点朝上。",null,"https://www.merriam-webster.com/dictionary/corm"]
  ],[]);
  entry("sweeten",[
   ["sugar","使变甜；给……加糖","v.",["使变甜","给……加糖","加糖"],["sweeten-sugar"],"She sweetened the tea with honey.","她用蜂蜜给茶调甜。",null,"https://www.merriam-webster.com/dictionary/sweeten"],
   ["attractive","使更有吸引力；改善条件","v.",["使更有吸引力","改善条件"],["sweeten-attractive"],"The seller sweetened the deal with free delivery.","卖家提供免费送货，让交易更有吸引力。",null,"https://www.merriam-webster.com/dictionary/sweeten"],
   ["mood","使心情变好；使态度温和","v.",["使心情变好","使态度温和","使更高兴或友善"],["sweeten-mood"],"The unexpected compliment sweetened his mood.","意外的赞扬让他的心情好了起来。",null,"https://www.merriam-webster.com/dictionary/sweeten"]
  ],[{"terms":["使更悦耳"],"decision":"scope-excluded","reason":"声音变悦耳的引申未单列，味道、情绪及交易条件已有对应语境。","source":"https://www.merriam-webster.com/dictionary/sweeten"}]);
  entry("concretely",[
   ["specific","具体地；确切地","adv.",["具体地","确切地"],["concretely-specific","statement-clear"],"Explain concretely how the money will be spent.","具体说明这笔钱怎么花。",null,"https://www.merriam-webster.com/dictionary/concretely"]
  ],[]);
  entry("placement",[
   ["position","放置；安置","n.",["放置","安置","布置"],["placement-position","putting-location"],"The placement of the mirrors makes the room look larger.","镜子的摆放使房间显得更大。",null,"https://www.merriam-webster.com/dictionary/placement"],
   ["job","工作安置；实习安排","n.",["工作安置","实习安排","工作安排"],["placement-job"],"Her course includes a six-week work placement.","她的课程包括六周的工作实习。",null,"https://www.merriam-webster.com/dictionary/placement"]
  ],[{"terms":["编班","定位球"],"decision":"scope-excluded","reason":"定位球和学校分班属特定语境，本批只选放置及工作实习安排。","source":"https://www.merriam-webster.com/dictionary/placement"}]);
  entry("outward",[
   ["external","外表的；外部的","adj.",["外表的","外部的","外在的"],["outward-external","outsides-external"],"There were no outward signs of damage.","看不出外部有受损迹象。",null,"https://www.merriam-webster.com/dictionary/outward"],
   ["away","向外地；朝外","adv.",["向外地","朝外","向外"],["outward-away","toward-outside"],"Push the panels outward to open the shelter.","把板向外推，打开棚屋。",null,"https://www.merriam-webster.com/dictionary/outward"]
  ],[{"terms":["向外的","往外的"],"decision":"scope-excluded","reason":"本批外向方向用副词例句，向外的形容词不从该副词自动推导。","source":"https://www.merriam-webster.com/dictionary/outward"}]);
  entry("external",[
   ["outside","外部的；外面的","adj.",["外部的","外面的","外部","外面","表面的"],["external-outside","outsides-external"],"The building's external walls need repair.","建筑物的外墙需要修缮。",null,"https://www.merriam-webster.com/dictionary/external"],
   ["from-outside","来自外界的；外来的","adj.",["来自外界的","外来的"],["external-from-outside"],"The project depends on external funding.","这个项目依赖外部资助。",null,"https://www.merriam-webster.com/dictionary/external"]
  ],[{"terms":["客观的"],"decision":"scope-excluded","reason":"客观的涉及独立于心灵的哲学语境，不能与一般外墙或外部资助任意互换。","source":"https://www.merriam-webster.com/dictionary/external"}]);
  entry("inward",[
   ["inside","向内的；内部的","adj.",["向内的","内部的"],["inward-inside","inside-inner"],"The gate opened with an inward movement.","门向内转动着打开了。",null,"https://www.merriam-webster.com/dictionary/inward"],
   ["mental","内心的；精神上的","adj.",["内心的","精神上的"],["inward-mental","inward-mind"],"She felt an inward sense of relief.","她内心感到了一阵宽慰。",null,"https://www.merriam-webster.com/dictionary/inward"],
   ["towards-inside","向内地；向中心地","adv.",["向内地","向中心地"],["inward-towards-inside"],"The edges of the leaves curl inward.","叶片边缘向内卷曲。",null,"https://www.merriam-webster.com/dictionary/inward"]
  ],[{"terms":["本来的"],"decision":"scope-excluded","reason":"本来的不等于内心或向内，本批不把这一宽泛旧译当成通用答案。","source":"https://www.merriam-webster.com/dictionary/inward"}]);
  entry("inner",[
   ["inside","内部的；里面的","adj.",["内部的","里面的","内部"],["inner-inside","inside-inner"],"The box has a soft inner lining.","盒子有柔软的内衬。",null,"https://www.merriam-webster.com/dictionary/inner"],
   ["private","内心的；隐秘的","adj.",["内心的","隐秘的"],["inner-private","inward-mind"],"The diary reveals her inner thoughts.","日记揭示了她内心的想法。",null,"https://www.merriam-webster.com/dictionary/inner"],
   ["central","核心的；亲近的","adj.",["核心的","亲近的"],["inner-central"],"Only members of the inner circle knew the plan.","只有核心圈子的人知道计划。",null,"https://www.merriam-webster.com/dictionary/inner"]
  ],[]);
  entry("materialism",[
   ["philosophy","唯物主义","n.",["唯物主义"],["materialism-philosophy"],"The lecture compared materialism with idealism.","讲座比较了唯物主义与唯心主义。",null,"https://www.merriam-webster.com/dictionary/materialism"],
   ["values","物质至上；物质主义","n.",["物质至上","物质主义"],["materialism-values"],"The novel criticizes the materialism of wealthy society.","小说批评了富裕社会的物质至上观。",null,"https://www.merriam-webster.com/dictionary/materialism"]
  ],[]);
  entry("significance",[
   ["importance","重要性；意义","n.",["重要性","意义"],["significance-importance"],"The discovery has great significance for the local community.","这一发现对当地社区意义重大。",null,"https://www.merriam-webster.com/dictionary/significance"],
   ["meaning","含义；所指","n.",["含义","所指","意味"],["significance-meaning"],"She did not understand the significance of his gesture.","她不明白他那个手势的含义。",null,"https://www.merriam-webster.com/dictionary/significance"]
  ],[{"terms":["有效","有效性"],"decision":"scope-excluded","reason":"有效和有效性容易与 efficacy 混淆，本批只选重要性与含义。","source":"https://www.merriam-webster.com/dictionary/significance"}]);
  entry("increasing",[
   ["growing","不断增加的；日益增长的","adj.",["不断增加的","日益增长的","越来越多的","逐渐增长的"],["increasing-growing"],"The town faces increasing pressure on its water supply.","城镇供水面临越来越大的压力。",null,"https://www.collinsdictionary.com/dictionary/english/increasing"]
  ],[]);
  entry("coiner",[
   ["money","铸币者；造币者","n.",["铸币者","造币者"],["coiner-money"],"The coiner checked the weight of each new coin.","造币者检查了每枚新硬币的重量。",null,"https://www.merriam-webster.com/dictionary/coiner"],
   ["words","新词创造者","n.",["新词创造者","创造者"],["coiner-words"],"The coiner of the phrase preferred to remain anonymous.","这个短语的创造者希望保持匿名。",null,"https://www.merriam-webster.com/dictionary/coiner"],
   ["counterfeiter","伪币制造者","n.",["伪币制造者","伪造货币者","制造伪币者"],["coiner-counterfeiter"],"The detective traced the false coins to a local coiner.","侦探追查假硬币，找到了当地的一名伪币制造者。",null,"https://www.merriam-webster.com/dictionary/coiner"]
  ],[]);
  entry("coppery",[
   ["colour","铜色的；似铜的","adj.",["铜色的","似铜的","铜一样的"],["coppery-colour"],"The leaves turned coppery in the autumn sun.","树叶在秋日阳光下变成了铜色。",null,"https://www.merriam-webster.com/dictionary/coppery"]
  ],[{"terms":["含铜的","铜制的","铜的"],"decision":"scope-excluded","reason":"似铜或呈铜色不表示一定含铜、由铜制成；不将材料成分作为外观形容词的必然含义。","source":"https://www.merriam-webster.com/dictionary/coppery"}]);
  entry("promptly",[
   ["quickly","迅速地；立即","adv.",["迅速地","立即","敏捷地"],["promptly-quickly","rapid-response"],"The staff responded promptly to the complaint.","工作人员迅速回应了投诉。",null,"https://www.merriam-webster.com/dictionary/promptly"],
   ["punctually","准时地；恰好在某时","adv.",["准时地","恰好在某时"],["promptly-punctually"],"The meeting began promptly at eight.","会议八点准时开始。",null,"https://www.merriam-webster.com/dictionary/promptly"]
  ],[]);
  entry("dismission",[
   ["removal","解雇；免职","n.",["解雇","免职"],["dismission-removal"],"The inquiry led to the manager's dismission.","调查导致经理被免职。",null,"https://www.merriam-webster.com/dictionary/dismission"],
   ["rejection","驳回；不予考虑","n.",["驳回","不予考虑"],["dismission-rejection"],"The committee's dismission of the proposal surprised its supporters.","委员会驳回提案，让支持者们感到意外。",null,"https://www.merriam-webster.com/dictionary/dismission"]
  ],[]);
  entry("potent",[
   ["powerful","强有力的；有影响力的","adj.",["强有力的","有影响力的","有力的","有说服力的"],["potent-powerful"],"The photograph became a potent symbol of the campaign.","这张照片成了这场运动有力的象征。",null,"https://www.merriam-webster.com/dictionary/potent"],
   ["effective","效力强的；效果显著的","adj.",["效力强的","效果显著的","有效的"],["potent-effective"],"The substance produces a potent smell even in small amounts.","这种物质即使只有少量，也会散发浓烈的气味。",null,"https://www.merriam-webster.com/dictionary/potent"]
  ],[{"terms":["有性交能力的"],"decision":"scope-excluded","reason":"生殖能力义属于特定生理语境，本批只选影响力和作用强度。","source":"https://www.merriam-webster.com/dictionary/potent"}]);
  entry("supremacy",[
   ["power","至高地位；霸权；优势","n.",["至高地位","霸权","优势","至高无上","霸权地位","至上","至高权力","无上权力"],["supremacy-power","lead-advantage"],"The two teams competed for supremacy in the league.","两队争夺联赛的霸主地位。",null,"https://www.merriam-webster.com/dictionary/supremacy"]
  ],[]);
  entry("suicide",[
   ["act","自杀","n.",["自杀"],["suicide-act"],"The charity supports families affected by suicide.","这家慈善机构帮助受到自杀事件影响的家庭。",null,"https://www.merriam-webster.com/dictionary/suicide"],
   ["self-defeat","自毁前途的行为","n.",["自毁前途的行为"],["suicide-self-defeat"],"Ignoring the customers would be commercial suicide.","无视顾客会是商业上的自毁行为。",null,"https://www.merriam-webster.com/dictionary/suicide"]
  ],[{"terms":["自杀者","自杀的"],"decision":"scope-excluded","reason":"本批用名词行为及自毁前途的比喻，不把行为自动替换为实施者身份或形容词。","source":"https://www.merriam-webster.com/dictionary/suicide"}]);
  entry("demanding",[
   ["difficult","要求高的；费力的","adj.",["要求高的","费力的"],["demanding-difficult"],"Restoring the damaged manuscript was demanding work.","修复受损手稿是一项费力的工作。",null,"https://www.merriam-webster.com/dictionary/demanding"],
   ["insistent","苛求的；难以满足的","adj.",["苛求的","难以满足的"],["demanding-insistent"],"The demanding client requested another revision.","这位要求苛刻的客户又要求修改一次。",null,"https://www.merriam-webster.com/dictionary/demanding"]
  ],[]);
  entry("requirement",[
   ["need","需要的东西；必备条件","n.",["需要的东西","必备条件","需求","必要条件"],["requirement-need","requirements-needed"],"Good ventilation is a basic requirement for the workshop.","良好通风是车间的基本要求。",null,"https://www.merriam-webster.com/dictionary/requirement"],
   ["rule","规定；必须满足的要求","n.",["规定","必须满足的要求","要求","合同要求"],["requirement-rule","requirements-needed"],"The new safety requirement applies to every vehicle.","新的安全规定适用于每一辆车。",null,"https://www.merriam-webster.com/dictionary/requirement"]
  ],[]);
  entry("enormity",[
   ["scale","巨大程度；严重性","n.",["巨大程度","严重性","巨大"],["enormity-scale"],"Only later did we grasp the enormity of the damage.","后来我们才明白损失有多严重。",null,"https://www.merriam-webster.com/dictionary/enormity"],
   ["evil","穷凶极恶；极恶劣的行为","n.",["穷凶极恶","极恶劣的行为","暴行","极恶","重罪","大罪"],["enormity-evil"],"The trial exposed the enormity of the crime.","审判揭示了罪行的极端恶劣程度。",null,"https://www.merriam-webster.com/dictionary/enormity"]
  ],[]);
  entry("twinkle",[
   ["shine","闪烁；闪耀","v.",["闪烁","闪耀"],["twinkle-shine"],"Lights twinkled across the distant hillside.","远处山坡上的灯光闪烁着。",null,"https://www.merriam-webster.com/dictionary/twinkle"],
   ["gleam","闪光；眼中喜悦的光","n.",["闪光","眼中喜悦的光"],["twinkle-gleam"],"There was a playful twinkle in her eyes.","她的眼中闪着调皮的光。",null,"https://www.merriam-webster.com/dictionary/twinkle"]
  ],[{"terms":["瞬息","使闪耀"],"decision":"scope-excluded","reason":"瞬息需 in a twinkle；使闪耀的及物用法未从闪烁动作自动建立。","source":"https://www.merriam-webster.com/dictionary/twinkle"}]);
  entry("explosion",[
   ["blast","爆炸","n.",["爆炸","爆炸(声)"],["explosion-blast"],"The explosion shattered windows along the street.","爆炸震碎了街边的窗户。",null,"https://www.merriam-webster.com/dictionary/explosion"],
   ["increase","激增；爆发","n.",["激增","爆发"],["explosion-increase"],"The town has seen an explosion in bicycle use.","镇上自行车使用量激增。",null,"https://www.merriam-webster.com/dictionary/explosion"]
  ],[]);
  entry("explosive",[
   ["blast","易爆炸的；爆炸性的","adj.",["易爆炸的","爆炸性的","爆炸的"],["explosive-blast"],"The workers kept explosive materials in a secure store.","工人们把易爆物品放在安全仓库里。",null,"https://www.merriam-webster.com/dictionary/explosive"],
   ["volatile","易引起冲突的；一触即发的","adj.",["易引起冲突的","一触即发的","易爆发的","暴躁的"],["explosive-volatile"],"The debate became explosive after the accusation.","指控提出后，辩论变得一触即发。",null,"https://www.merriam-webster.com/dictionary/explosive"],
   ["substance","炸药；爆炸物","n.",["炸药","爆炸物"],["explosive-substance"],"The team found no explosives in the abandoned vehicle.","检查小组没有在废弃车辆中发现爆炸物。",null,"https://www.merriam-webster.com/dictionary/explosive"]
  ],[{"terms":["爆破音"],"decision":"scope-excluded","reason":"语音学爆破音为专门名词，未并入易爆属性和炸药物件。","source":"https://www.merriam-webster.com/dictionary/explosive"}]);
  entry("deflection",[
   ["change","偏转；转向","n.",["偏转","转向","歪斜","偏","偏向","偏离","偏转(光)"],["deflection-change"],"The goalkeeper's touch caused a slight deflection of the ball.","守门员碰了一下球，使球轻微变向。",null,"https://www.merriam-webster.com/dictionary/deflection"],
   ["avoidance","转移注意；回避","n.",["转移注意","回避"],["deflection-avoidance"],"His joke was a deflection from the difficult question.","他的笑话是在转移对那个难题的注意。",null,"https://www.merriam-webster.com/dictionary/deflection"]
  ],[{"terms":["波(心电图)"],"decision":"scope-excluded","reason":"心电图波形是专业语境，本批只训练方向偏转及转移注意。","source":"https://www.merriam-webster.com/dictionary/deflection"}]);
  entry("starvation",[
   ["hunger","饥饿；饿死","n.",["饥饿","饿死","饥锇(指长时期的)"],["starvation-hunger","starve-hunger"],"The relief supplies protected the isolated village from starvation.","救济物资使这个偏远村庄免受饥饿之苦。",null,"https://www.merriam-webster.com/dictionary/starvation"]
  ],[{"terms":["绝食"],"decision":"scope-excluded","reason":"自愿绝食是具体行为，不等同于所有饥饿或食物不足。","source":"https://www.merriam-webster.com/dictionary/starvation"}]);
  entry("aggress",[
   ["attack","侵犯；挑衅；发动攻击","v.",["侵犯","挑衅","发动攻击","侵略","攻击"],["aggress-attack"],"The treaty forbids either side to aggress against the other.","条约禁止任何一方侵犯另一方。","aggress against","https://www.merriam-webster.com/dictionary/aggress"]
  ],[]);
  entry("prevention",[
   ["avoidance","预防；防止","n.",["预防","防止","阻止"],["prevention-avoidance"],"The workshop focuses on the prevention of workplace accidents.","培训重点讲授如何预防工作场所事故。",null,"https://www.merriam-webster.com/dictionary/prevention"]
  ],[{"terms":["妨碍"],"decision":"scope-excluded","reason":"妨碍不一定完全防止事件发生，本批不将其作为无条件同义词。","source":"https://www.merriam-webster.com/dictionary/prevention"}]);
  entry("horrible",[
   ["awful","可怕的；令人恐惧的","adj.",["可怕的","令人恐惧的"],["horrible-awful"],"They heard a horrible scream from the dark tunnel.","他们听见黑暗隧道里传来一声可怕的尖叫。",null,"https://www.merriam-webster.com/dictionary/horrible"],
   ["unpleasant","糟糕的；令人不快的","adj.",["糟糕的","令人不快的","极讨厌的"],["horrible-unpleasant","unpleasant-experience","nasty-unpleasant"],"The soup had a horrible burnt taste.","汤有一股难喝的焦味。",null,"https://www.merriam-webster.com/dictionary/horrible"]
  ],[{"terms":["遭透的"],"decision":"scope-excluded","reason":"遭透的为糟透的疑似录入误字；本批以糟糕的明确标签训练，不认证误字本身。","source":"https://www.merriam-webster.com/dictionary/horrible"}]);
  entry("compel",[
   ["force","强迫；迫使","v.",["强迫","迫使"],["compel-force"],"The storm compelled us to turn back.","暴风雨迫使我们返回。",null,"https://www.merriam-webster.com/dictionary/compel"],
   ["command","使无法抗拒；引起","v.",["使无法抗拒","引起"],["compel-command"],"Her quiet authority compelled attention.","她沉静而威严的气质让人无法不注意。",null,"https://www.merriam-webster.com/dictionary/compel"]
  ],[]);
  entry("mitigation",[
   ["reduction","缓解；减轻","n.",["缓解","减轻","缓和","减"],["mitigation-reduction"],"The plan includes measures for the mitigation of flood damage.","计划包含了减轻洪灾损失的措施。",null,"https://www.merriam-webster.com/dictionary/mitigation"]
  ],[]);
  entry("protestor",[
   ["person","抗议者；示威者","n.",["抗议者","示威者","持异议者"],["protestor-person"],"A protestor handed out leaflets outside the station.","一名抗议者在车站外发传单。",null,"https://www.merriam-webster.com/dictionary/protestor"]
  ],[{"terms":["拒付者","(期票等的)拒付者"],"decision":"scope-excluded","reason":"票据拒付者为专门商业法律语境，不与普通示威者混合。","source":"https://www.merriam-webster.com/dictionary/protestor"}]);
  entry("progressive",[
   ["gradual","逐步发展的；渐进的","adj.",["逐步发展的","渐进的","前进的"],["progressive-gradual","gradual-progress"],"The treatment was followed by a progressive improvement in movement.","治疗后，活动能力逐步改善。",null,"https://www.merriam-webster.com/dictionary/progressive"],
   ["reforming","进步的；支持改革的","adj.",["进步的","支持改革的"],["progressive-reforming"],"The school adopted a progressive approach to teaching.","学校采用了进步的教学方式。",null,"https://www.merriam-webster.com/dictionary/progressive"],
   ["political-person","进步派人士；改革支持者","n.",["进步派人士","改革支持者","改革论者","进步论者"],["progressive-political-person"],"Several progressives supported the proposal.","几位进步派人士支持了这项提案。",null,"https://www.merriam-webster.com/dictionary/progressive"]
  ],[{"terms":["累进的"],"decision":"scope-excluded","reason":"累进税及级差增长的技术义未另列，本批区分渐进、进步政策和进步派人士。","source":"https://www.merriam-webster.com/dictionary/progressive"}]);
  entry("resistant",[
   ["oppose","抵制的；不愿接受的","adj.",["抵制的","不愿接受的","抵抗的","反抗的"],["resistant-oppose"],"Some residents were resistant to the new parking rules.","一些居民抵制新的停车规定。","resistant to","https://www.merriam-webster.com/dictionary/resistant"],
   ["withstand","能抵抗的；耐……的","adj.",["能抵抗的","耐……的","耐...的"],["resistant-withstand"],"The fabric is resistant to water and stains.","这种布料耐水且耐污。",null,"https://www.merriam-webster.com/dictionary/resistant"]
  ],[{"terms":["抵抗者","反抗者"],"decision":"scope-excluded","reason":"抵抗者是名词；本批反对和耐受属性用形容词例句，不自动认证名词身份。","source":"https://www.merriam-webster.com/dictionary/resistant"}]);
  entry("contribution",[
   ["help","贡献；促成作用","n.",["贡献","促成作用"],["contribution-help"],"Her research made a lasting contribution to the field.","她的研究对这个领域作出了持久的贡献。",null,"https://www.merriam-webster.com/dictionary/contribution"],
   ["donation","捐款；捐助物","n.",["捐款","捐助物","捐助","捐助之物","补助品"],["contribution-donation"],"The collection includes a generous contribution from local businesses.","募捐所得包含当地企业的一笔慷慨捐款。",null,"https://www.merriam-webster.com/dictionary/contribution"],
   ["article","投稿；稿件","n.",["投稿","稿件"],["contribution-article"],"The editor accepted his contribution to the magazine.","编辑接受了他给杂志的投稿。",null,"https://www.merriam-webster.com/dictionary/contribution"]
  ],[]);
  entry("sex",[
   ["biological","性别","n.",["性别"],["sex-biological"],"The form asks for the animal's age and sex.","表格要求填写动物的年龄和性别。",null,"https://www.merriam-webster.com/dictionary/sex"],
   ["activity","性行为","n.",["性行为"],["sex-activity"],"The survey included questions about attitudes towards sex.","调查包含了有关性行为态度的问题。",null,"https://www.merriam-webster.com/dictionary/sex"],
   ["determine","辨别性别","v.",["辨别性别","区别...的性别"],["sex-determine"],"The researchers sexed the young birds before releasing them.","研究人员辨别幼鸟的性别后将其放飞。",null,"https://www.merriam-webster.com/dictionary/sex"]
  ],[{"terms":["性欲","引起...的性欲"],"decision":"scope-excluded","reason":"性欲及激发性欲不是性行为或辨别性别的直接同义用法，本批不单列这些引申。","source":"https://www.merriam-webster.com/dictionary/sex"}]);
  entry("related",[
   ["connected","相关的；有关联的","adj.",["相关的","有关联的","有关系的"],["related-connected"],"The report discusses traffic and other related problems.","报告讨论了交通及其他相关问题。",null,"https://www.merriam-webster.com/dictionary/related"],
   ["family","有亲属关系的","adj.",["有亲属关系的"],["related-family","person-related"],"We share a surname, but we are not related.","我们同姓，但没有亲属关系。",null,"https://www.merriam-webster.com/dictionary/related"]
  ],[{"terms":["讲述的","叙述的"],"decision":"scope-excluded","reason":"讲述的是 relate 的过去分词用法，本批形容词相关的及有亲属关系的与它区分。","source":"https://www.merriam-webster.com/dictionary/related"}]);
  entry("madam",[
   ["address","女士；夫人（礼貌称呼）","n.",["女士","夫人（礼貌称呼）","夫人"],["madam-address"],"Could I see your ticket, madam?","女士，可以让我看一下您的票吗？",null,"https://www.merriam-webster.com/dictionary/madam"]
  ],[]);
  entry("respective",[
   ["individual","各自的；分别的","adj.",["各自的","分别的"],["respective-individual"],"The teams returned to their respective hotels.","各队回到了各自的旅馆。",null,"https://www.merriam-webster.com/dictionary/respective"]
  ],[]);
  entry("separately",[
   ["apart","分开地；分别地","adv.",["分开地","分别地","分开","不相连","分隔","分离","单独","独立","各自","各别","分离地"],["separately-apart"],"Store the wet towels separately from the dry ones.","把湿毛巾与干毛巾分开存放。",null,"https://www.merriam-webster.com/dictionary/separately"]
  ],[{"terms":["不同","脱离肉体","灵魂"],"decision":"scope-excluded","reason":"脱离肉体和灵魂不是该副词的普通独立义；不同也不必然是分开处理。","source":"https://www.merriam-webster.com/dictionary/separately"}]);
  entry("accustom",[
   ["habituate","使习惯于","v.",["使习惯于","使适应","使熟悉"],["accustom-habituate"],"She accustomed herself to the early morning shift.","她使自己适应了清晨的班次。","accustom oneself to","https://www.merriam-webster.com/dictionary/accustom"]
  ],[]);
  entry("nourishing",[
   ["nutritious","有营养的；滋养的","adj.",["有营养的","滋养的","滋养多的"],["nourishing-nutritious"],"They prepared a nourishing soup for the travellers.","他们给旅人准备了一份营养丰富的汤。",null,"https://www.merriam-webster.com/dictionary/nourishing"]
  ],[]);
  entry("vibration",[
   ["oscillation","振动；颤动","n.",["振动","颤动"],["vibration-oscillation"],"We could feel the vibration of the engine through the floor.","我们能透过地板感到发动机的振动。",null,"https://www.merriam-webster.com/dictionary/vibration"]
  ],[]);
  entry("reshuffle",[
   ["reorganize","重新安排；改组","v.",["重新安排","改组","撤换"],["reshuffle-reorganize","shuffle-reorganize"],"The coach reshuffled the players before the final match.","教练在决赛前重新安排了队员。",null,"https://www.merriam-webster.com/dictionary/reshuffle"],
   ["reorganization","人员改组；调整","n.",["人员改组","调整"],["reshuffle-reorganization"],"The cabinet reshuffle brought three new ministers into office.","内阁改组带来了三位新部长。",null,"https://www.merriam-webster.com/dictionary/reshuffle"]
  ],[{"terms":["重新洗牌"],"decision":"scope-excluded","reason":"重新洗牌的字面动作未单列，本批动词和名词均限人员或组织改组。","source":"https://www.merriam-webster.com/dictionary/reshuffle"}]);
  entry("steerable",[
   ["controllable","可转向的；可操纵的","adj.",["可转向的","可操纵的","易驾驶的","易操纵的","可控制的"],["steerable-controllable"],"The camera sits on a steerable platform.","摄像机安装在一个可转向的平台上。",null,"https://www.merriam-webster.com/dictionary/steerable"]
  ],[{"terms":["易改变位置的"],"decision":"scope-excluded","reason":"可转向不意味着任何位置都容易改变，不能把所有移动能力作为转向能力的同义解释。","source":"https://www.merriam-webster.com/dictionary/steerable"}]);
  entry("steering",[
   ["mechanism","转向装置；操纵系统","n.",["转向装置","操纵系统","掌舵","操纵"],["steering-mechanism"],"The mechanic checked the steering before the road test.","机械工在路试前检查了转向系统。",null,"https://www.collinsdictionary.com/dictionary/english/steering"],
   ["guiding","指导性的；负责统筹的","adj.",["指导性的","负责统筹的","指导"],["steering-guiding"],"A steering committee will oversee the restoration project.","一个指导委员会将监督修复项目。",null,"https://www.collinsdictionary.com/dictionary/english/steering"]
  ],[]);
  entry("gambler",[
   ["bettor","赌徒；赌博者","n.",["赌徒","赌博者"],["gambler-bettor"],"The gambler left the table after losing his last chip.","赌徒输掉最后一枚筹码后离开了桌子。",null,"https://www.merriam-webster.com/dictionary/gambler"],
   ["risk-taker","敢冒险的人","n.",["敢冒险的人","投机商人"],["gambler-risk-taker"],"As a businessman, he was a gambler willing to back unusual ideas.","作为商人，他敢于冒险，愿意支持不寻常的想法。",null,"https://www.merriam-webster.com/dictionary/gambler"]
  ],[]);
  entry("deviation",[
   ["departure","偏离；偏差","n.",["偏离","偏差","背离","误差","偏斜"],["deviation-departure"],"Any deviation from the planned route must be reported.","任何偏离计划路线的情况都必须报告。",null,"https://www.merriam-webster.com/dictionary/deviation"]
  ],[]);
  entry("decimation",[
   ["destruction","大规模毁坏；大量损失","n.",["大规模毁坏","大量损失","大批杀害"],["decimation-destruction"],"The disease caused the decimation of the orchard.","疾病给果园造成了大规模损失。",null,"https://www.merriam-webster.com/dictionary/decimation"],
   ["historical","抽杀十分之一（历史用语）","n.",["抽杀十分之一（历史用语）","每十人杀一人"],["decimation-historical"],"The historian examined decimation as a punishment in the Roman army.","历史学家研究了罗马军队中抽杀十分之一这种惩罚。",null,"https://www.merriam-webster.com/dictionary/decimation"]
  ],[]);
  entry("distribution",[
   ["sharing","分配；分发","n.",["分配","分发"],["distribution-sharing","distribute-share"],"Volunteers organized the distribution of food parcels.","志愿者组织了食品包的分发。",null,"https://www.merriam-webster.com/dictionary/distribution"],
   ["spread","分布；散布状况","n.",["分布","散布状况"],["distribution-spread","distribute-spread"],"The map shows the distribution of rainfall across the island.","地图显示了全岛的降雨分布。",null,"https://www.merriam-webster.com/dictionary/distribution"],
   ["supply","经销；配送","n.",["经销","配送"],["distribution-supply","distribute-supply"],"The company handles the distribution of medical equipment.","这家公司负责医疗设备的经销配送。",null,"https://www.merriam-webster.com/dictionary/distribution"]
  ],[]);
  entry("distributor",[
   ["supplier","经销商；分销商","n.",["经销商","分销商","销售者"],["distributor-supplier"],"The publisher appointed a new distributor for the region.","出版社为该地区指定了一家新的经销商。",null,"https://www.merriam-webster.com/dictionary/distributor"],
   ["engine","分电器","n.",["分电器"],["distributor-engine"],"The mechanic replaced the engine's faulty distributor.","机械工更换了发动机有故障的分电器。",null,"https://www.merriam-webster.com/dictionary/distributor"],
   ["person","分发者；分配者","n.",["分发者","分配者","分布者","散布者"],["distributor-person"],"Each distributor carried a stack of leaflets.","每位分发者都拿着一叠传单。",null,"https://www.merriam-webster.com/dictionary/distributor"]
  ],[{"terms":["分配器","配电盘","自动拆版机"],"decision":"scope-excluded","reason":"分配器、配电盘和自动拆版机是不同专业物件；本批只选分销商、分发者和发动机分电器。","source":"https://www.merriam-webster.com/dictionary/distributor"}]);
  entry("stipulation",[
   ["condition","规定；约定条件","n.",["规定","约定条件","约束","约定","契约","订定","条款"],["stipulation-condition"],"They accepted the loan with the stipulation that it be repaid within a year.","他们接受了这笔贷款，条件是一年内还清。",null,"https://www.merriam-webster.com/dictionary/stipulation"]
  ],[]);
  entry("disposal",[
   ["removal","处理；清除","n.",["处理","清除","丢掉","销毁","处置"],["disposal-removal","dispose-remove"],"The village needs a safer system for waste disposal.","村庄需要更安全的废物处理系统。",null,"https://www.merriam-webster.com/dictionary/disposal"],
   ["availability","支配；可供使用","n.",["支配","可供使用"],["disposal-availability"],"You will have a small workshop at your disposal.","你将有一个小车间可供使用。","at one's disposal","https://www.merriam-webster.com/dictionary/disposal"],
   ["sale","出售；转让","n.",["出售","转让"],["disposal-sale"],"The disposal of the land funded the building repairs.","出售土地所得为建筑修缮提供了资金。",null,"https://www.merriam-webster.com/dictionary/disposal"]
  ],[{"terms":["排列","布置"],"decision":"scope-excluded","reason":"排列布置的旧义未纳入本批；废物清除、可支配及资产转让分别训练。","source":"https://www.merriam-webster.com/dictionary/disposal"}]);
  entry("conductive",[
   ["conducting","导电的；导热的","adj.",["导电的","导热的","传导性的","有传导力的","传导的"],["conductive-conducting"],"The coating forms a conductive layer over the surface.","涂层在表面形成了一层导电层。",null,"https://www.merriam-webster.com/dictionary/conductive"]
  ],[]);
  entry("exploitation",[
   ["use","开发；利用","n.",["开发","利用","开采"],["exploitation-use","exploit-use"],"The report examines the commercial exploitation of solar energy.","报告研究了太阳能的商业开发。",null,"https://www.merriam-webster.com/dictionary/exploitation"],
   ["unfair","剥削；不公正的利用","n.",["剥削","不公正的利用","榨取"],["exploitation-unfair","exploit-unfair"],"The new rules aim to prevent the exploitation of young workers.","新规定旨在防止对年轻工人的剥削。",null,"https://www.merriam-webster.com/dictionary/exploitation"]
  ],[]);
  entry("clearly",[
   ["understandably","清楚地；明白地","adv.",["清楚地","明白地","清晰地"],["clearly-understandably","statement-clear"],"Please write the address clearly on the label.","请在标签上写清楚地址。",null,"https://www.merriam-webster.com/dictionary/clearly"],
   ["obviously","显然；无疑地","adv.",["显然","无疑地","明显地"],["clearly-obviously","logical-expected"],"The bridge is clearly unsafe after the flood.","洪水过后，这座桥显然不安全。",null,"https://www.merriam-webster.com/dictionary/clearly"]
  ],[]);
  entry("augmentation",[
   ["increase","增加；扩大；增强","n.",["增加","扩大","增强","增长","增进"],["augmentation-increase","increase-amount"],"The project required an augmentation of the water supply.","这个项目需要增加供水。",null,"https://www.merriam-webster.com/dictionary/augmentation"]
  ],[{"terms":["增加物"],"decision":"scope-excluded","reason":"增加物是具体增添的东西，本批只训练增加这一过程或结果量，不泛化为任何物件。","source":"https://www.merriam-webster.com/dictionary/augmentation"}]);
  entry("assort",[
   ["classify","分类；归类","v.",["分类","归类","把...分类","把...归为一类"],["assort-classify","method-classification","sort-classify"],"The shells were assorted by size and colour.","贝壳按大小和颜色分类了。",null,"https://www.merriam-webster.com/dictionary/assort"],
   ["harmonize","相配；协调","v.",["相配","协调"],["assort-harmonize"],"The pale curtains assort well with the wooden furniture.","浅色窗帘与木制家具很协调。","assort with","https://www.merriam-webster.com/dictionary/assort"]
  ],[{"terms":["交往"],"decision":"scope-excluded","reason":"交往需 assort with 的人际语境；本批相配例句限物品协调，不把全部交往等同于协调。","source":"https://www.merriam-webster.com/dictionary/assort"}]);
  entry("celebrated",[
   ["famous","著名的；闻名的","adj.",["著名的","闻名的","驰名的","有名的"],["celebrated-famous"],"The village is the birthplace of a celebrated composer.","这个村庄是一位著名作曲家的出生地。",null,"https://www.merriam-webster.com/dictionary/celebrated"]
  ],[]);
  entry("attribution",[
   ["credit","归属；注明作者","n.",["归属","注明作者"],["attribution-credit","term-giving-credit"],"The attribution of the painting remains uncertain.","这幅画的作者归属仍不确定。",null,"https://www.merriam-webster.com/dictionary/attribution"],
   ["cause","归因","n.",["归因"],["attribution-cause"],"His attribution of the failure to bad luck ignored the evidence.","他把失败归因于运气不好，无视了证据。",null,"https://www.merriam-webster.com/dictionary/attribution"]
  ],[{"terms":["属性"],"decision":"scope-excluded","reason":"属性通常应区分 attribute；本批只选归属署名和归因，不直接用属性替换归因过程。","source":"https://www.merriam-webster.com/dictionary/attribution"}]);
  entry("impressive",[
   ["striking","令人印象深刻的；令人钦佩的","adj.",["令人印象深刻的","令人钦佩的","给人深刻印象的"],["impressive-striking","amazed-awe"],"The students built an impressive model of the solar system.","学生们做出了一个令人赞叹的太阳系模型。",null,"https://www.merriam-webster.com/dictionary/impressive"]
  ],[{"terms":["威严的"],"decision":"scope-excluded","reason":"有威严不一定留下令人钦佩的印象，本批不把威严作为通用同义答案。","source":"https://www.merriam-webster.com/dictionary/impressive"}]);
  entry("pervasive",[
   ["widespread","普遍存在的；遍布的","adj.",["普遍存在的","遍布的","普遍的","到处蔓延的","到处渗透的"],["pervasive-widespread","widespread-distribution"],"The investigation uncovered a pervasive culture of secrecy.","调查揭露了一种普遍存在的保密文化。",null,"https://www.merriam-webster.com/dictionary/pervasive"]
  ],[{"terms":["流行的"],"decision":"scope-excluded","reason":"流行可能指时尚受欢迎；本批只训练遍布与普遍存在，二者不总能互换。","source":"https://www.merriam-webster.com/dictionary/pervasive"}]);
  entry("substitution",[
   ["replacement","代替；替换","n.",["代替","替换","置换"],["substitution-replacement"],"The substitution of glass for plastic reduced waste.","用玻璃替代塑料减少了废弃物。",null,"https://www.merriam-webster.com/dictionary/substitution"],
   ["mathematics","代入（数学）","n.",["代入（数学）"],["substitution-mathematics"],"Substitution of the known values gives the final answer.","代入已知数值即可得出最终答案。",null,"https://www.merriam-webster.com/dictionary/substitution"]
  ],[{"terms":["代替物"],"decision":"scope-excluded","reason":"代替物是具体替代者，本批名词只选替换过程和数学代入。","source":"https://www.merriam-webster.com/dictionary/substitution"}]);
  entry("mouthful",[
   ["quantity","一口的量；满口","n.",["一口的量","满口","一口"],["mouthful-quantity"],"He took a mouthful of water before speaking.","他喝了一口水才开口说话。",null,"https://www.merriam-webster.com/dictionary/mouthful"],
   ["words","拗口的词句；冗长的名称","n.",["拗口的词句","冗长的名称"],["mouthful-words"],"The museum's official name is quite a mouthful.","博物馆的正式名称相当拗口。",null,"https://www.merriam-webster.com/dictionary/mouthful"]
  ],[]);
  entry("invalid",[
   ["not-valid","无效的；不成立的","adj.",["无效的","不成立的"],["invalid-not-valid"],"The ticket is invalid after midnight.","这张票过了午夜就无效。",null,"https://www.merriam-webster.com/dictionary/invalid"]
  ],[{"terms":["病人","残废者","有病的"],"decision":"scope-excluded","reason":"原音标 /ɪnˈvælɪd/ 对应无效的；病人及体弱相关用法读音不同，暂不混入本批同一整词发音的训练，旧称亦不作人物标签。","source":"https://www.merriam-webster.com/dictionary/invalid"}]);
  entry("suffering",[
   ["pain","痛苦；苦难","n.",["痛苦","苦难","受苦"],["suffering-pain"],"The drought brought great suffering to farming families.","干旱给农民家庭带来了巨大苦难。",null,"https://www.merriam-webster.com/dictionary/suffering"]
  ],[]);
  entry("lament",[
   ["mourn","哀悼；悲叹；痛惜","v.",["哀悼","悲叹","痛惜","悔恨","恸哭"],["lament-mourn","sad-mourning","mourn-grieve","grieve-mourn"],"Residents lamented the loss of the old theatre.","居民们痛惜老剧院的消失。",null,"https://www.merriam-webster.com/dictionary/lament"],
   ["expression","哀歌；悲叹之词","n.",["哀歌","悲叹之词","挽歌","悼词"],["lament-expression"],"The poem is a lament for a vanished way of life.","这首诗是为一种消逝的生活方式而作的哀歌。",null,"https://www.merriam-webster.com/dictionary/lament"]
  ],[]);
  entry("weakly",[
   ["feebly","虚弱地；无力地","adv.",["虚弱地","无力地","微弱地"],["weakly-feebly"],"She raised her hand weakly from the bed.","她从床上无力地抬起手。",null,"https://www.collinsdictionary.com/dictionary/english/weakly"],
   ["unconvincingly","不够有力地；软弱地","adv.",["不够有力地","软弱地"],["weakly-unconvincingly"],"He protested weakly but accepted the change.","他无力地抗议了一下，还是接受了改变。",null,"https://www.collinsdictionary.com/dictionary/english/weakly"]
  ],[{"terms":["弱的","虚弱的"],"decision":"scope-excluded","reason":"本批选副词虚弱地及无力地；形容词体弱的已核对但未单列为副词答案。","source":"https://www.collinsdictionary.com/dictionary/english/weakly"}]);
  entry("refreshing",[
   ["reviving","使恢复精神的；清新的","adj.",["使恢复精神的","清新的","凉爽的","提神的","消除疲劳的"],["refreshing-reviving","experience-revive"],"The cool breeze was refreshing after the long walk.","长途步行后，凉风令人神清气爽。",null,"https://www.merriam-webster.com/dictionary/refreshing"],
   ["novel","令人耳目一新的","adj.",["令人耳目一新的","别具一格的"],["refreshing-novel"],"Her honesty was a refreshing change.","她的坦诚让人耳目一新。",null,"https://www.merriam-webster.com/dictionary/refreshing"]
  ],[]);
  entry("easily",[
   ["without-difficulty","容易地；轻松地","adv.",["容易地","轻松地"],["easily-without-difficulty"],"The new lid opens easily with one hand.","新盖子用一只手就能轻松打开。",null,"https://www.merriam-webster.com/dictionary/easily"],
   ["by-far","无疑地；远远地","adv.",["无疑地","远远地"],["easily-by-far"],"This is easily the best photograph in the collection.","这无疑是这批照片中最好的一张。",null,"https://www.merriam-webster.com/dictionary/easily"],
   ["readily","很可能；轻易地","adv.",["很可能","轻易地"],["easily-readily"],"A loose cable could easily cause another failure.","松动的电缆很容易再次引发故障。",null,"https://www.merriam-webster.com/dictionary/easily"]
  ],[{"terms":["流利地"],"decision":"scope-excluded","reason":"流利地需语言表达语境；容易做某事不必然达到语言流利。","source":"https://www.merriam-webster.com/dictionary/easily"}]);
  entry("commonly",[
   ["usually","通常；一般地","adv.",["通常","一般地","一般","普通"],["commonly-usually"],"The bird is commonly seen near freshwater lakes.","这种鸟通常见于淡水湖附近。",null,"https://www.merriam-webster.com/dictionary/commonly"]
  ],[]);
  entry("amazing",[
   ["astonishing","令人惊讶的；令人惊叹的","adj.",["令人惊讶的","令人惊叹的","令人惊异的"],["amazing-astonishing","amazed-awe"],"The telescope revealed an amazing number of distant stars.","望远镜显示出数量惊人的遥远恒星。",null,"https://www.merriam-webster.com/dictionary/amazing"],
   ["excellent","极好的；出色的","adj.",["极好的","出色的"],["amazing-excellent","excellent-quality"],"The volunteers did an amazing job clearing the path.","志愿者们把小路清理得非常好。",null,"https://www.merriam-webster.com/dictionary/amazing"]
  ],[]);
  entry("lovely",[
   ["beautiful","美丽的；可爱的","adj.",["美丽的","可爱的"],["lovely-beautiful"],"The cottage has a lovely view of the valley.","从这座小屋可以看到山谷的美丽景色。",null,"https://www.merriam-webster.com/dictionary/lovely"],
   ["pleasant","令人愉快的；美好的","adj.",["令人愉快的","美好的"],["lovely-pleasant"],"We spent a lovely afternoon with old friends.","我们与老朋友度过了一个愉快的下午。",null,"https://www.merriam-webster.com/dictionary/lovely"]
  ],[{"terms":["有趣的"],"decision":"scope-excluded","reason":"有趣不必然美丽或令人愉快，本批不与 interesting 完全等同。","source":"https://www.merriam-webster.com/dictionary/lovely"}]);
  entry("surprising",[
   ["unexpected","令人惊讶的；出人意料的","adj.",["令人惊讶的","出人意料的"],["surprising-unexpected","amazed-awe"],"The experiment produced a surprising result.","实验产生了出人意料的结果。",null,"https://www.merriam-webster.com/dictionary/surprising"]
  ],[]);
  entry("gently",[
   ["softly","轻柔地；温和地","adv.",["轻柔地","温和地","温柔地","轻轻地"],["gently-softly","soft-gentle"],"She gently brushed the dust from the painting.","她轻轻刷去了画上的灰尘。",null,"https://www.merriam-webster.com/dictionary/gently"],
   ["gradually","平缓地；缓缓地","adv.",["平缓地","缓缓地"],["gently-gradually"],"The path slopes gently towards the sea.","小路缓缓向海边倾斜。",null,"https://www.merriam-webster.com/dictionary/gently"]
  ],[{"terms":["逐渐地"],"decision":"scope-excluded","reason":"平缓坡度不同于所有逐渐变化，本批不将逐渐地作为通用译法。","source":"https://www.merriam-webster.com/dictionary/gently"}]);
  entry("unmanly",[
   ["stereotype","不符合传统男性气概的（评价用语）","adj.",["不符合传统男性气概的（评价用语）","无男子气概的","怯懦的"],["unmanly-stereotype"],"He rejected the belief that crying was unmanly.","他反对哭泣就缺乏男子气概的看法。",null,"https://www.merriam-webster.com/dictionary/unmanly"]
  ],[{"terms":["女子气的"],"decision":"scope-excluded","reason":"该词带有传统性别角色评价；不把女性特征本身当作怯懦，例句明确呈现对这种刻板观念的反对。","source":"https://www.merriam-webster.com/dictionary/unmanly"}]);
  entry("directly",[
   ["straight","直接地；径直地","adv.",["直接地","径直地","直率地","直截了当地"],["directly-straight"],"The pipe carries water directly into the tank.","管道把水直接送入水箱。",null,"https://www.merriam-webster.com/dictionary/directly"],
   ["immediately","立即；马上","adv.",["立即","马上","(非正式)立即"],["directly-immediately","rapid-response"],"She answered the question directly, without pausing.","她没有停顿，立即回答了问题。",null,"https://www.merriam-webster.com/dictionary/directly"],
   ["exactly","恰好；正好","adv.",["恰好","正好","正好地"],["directly-exactly"],"The lamp hangs directly above the table.","灯正好悬在桌子上方。",null,"https://www.merriam-webster.com/dictionary/directly"]
  ],[{"terms":["一...(就...)","一当...就...","直接的"],"decision":"scope-excluded","reason":"一……就……属于连接词用法，直接的是形容词式旧译；本批只训练副词直接、立即及恰好。","source":"https://www.merriam-webster.com/dictionary/directly"}]);
  entry("earnestly",[
   ["seriously","认真地；诚挚地","adv.",["认真地","诚挚地"],["earnestly-seriously"],"He earnestly asked for another chance to explain.","他诚恳地请求再给他一次解释的机会。",null,"https://www.merriam-webster.com/dictionary/earnestly"]
  ],[]);
  entry("proudly",[
   ["pride","自豪地；骄傲地","adv.",["自豪地","骄傲地","傲慢地","自大地","得意洋洋地"],["proudly-pride"],"She proudly showed us the chair she had built.","她自豪地给我们看她亲手做的椅子。",null,"https://www.merriam-webster.com/dictionary/proudly"]
  ],[]);
  entry("sternly",[
   ["strictly","严厉地；严肃地","adv.",["严厉地","严肃地","严格地"],["sternly-strictly","stern-manner"],"The teacher sternly reminded them to follow the rules.","老师严肃地提醒他们遵守规则。",null,"https://www.merriam-webster.com/dictionary/sternly"]
  ],[]);
  entry("promising",[
   ["potential","有希望的；有前途的","adj.",["有希望的","有前途的","有出息的","很可能成功的"],["promising-potential"],"The young musician gave a promising first performance.","这位年轻音乐家首次演出就展现了潜力。",null,"https://www.merriam-webster.com/dictionary/promising"]
  ],[]);
  entry("awesome",[
   ["awe","令人敬畏的；令人惊叹的","adj.",["令人敬畏的","令人惊叹的","令人赞叹的","令人畏惧的"],["awesome-awe","amazed-awe"],"The glacier's awesome size silenced the visitors.","冰川令人敬畏的规模让游客们屏住了声息。",null,"https://www.merriam-webster.com/dictionary/awesome"],
   ["excellent","极好的（非正式用语）","adj.",["极好的（非正式用语）","极好的"],["awesome-excellent","excellent-quality","swell-excellent"],"The new skate park is awesome.","新滑板公园棒极了。",null,"https://www.merriam-webster.com/dictionary/awesome"]
  ],[]);
  entry("mutual",[
   ["reciprocal","相互的；彼此的","adj.",["相互的","彼此的"],["mutual-reciprocal","mutual-each-other"],"Their partnership is built on mutual respect.","他们的合作建立在相互尊重之上。",null,"https://www.merriam-webster.com/dictionary/mutual"],
   ["shared","共同的；共有的","adj.",["共同的","共有的"],["mutual-shared"],"We met through a mutual friend.","我们通过一位共同的朋友认识。",null,"https://www.merriam-webster.com/dictionary/mutual"]
  ],[]);
  entry("similarly",[
   ["likewise","同样地；相似地","adv.",["同样地","相似地","相像地","类似于"],["similarly-likewise"],"The second group reacted similarly to the change.","第二组对变化作出了类似反应。",null,"https://www.merriam-webster.com/dictionary/similarly"]
  ],[]);
  entry("severely",[
   ["seriously","严重地；剧烈地","adv.",["严重地","剧烈地","严重"],["severely-seriously"],"The bridge was severely damaged in the storm.","这座桥在暴风雨中严重受损。",null,"https://www.merriam-webster.com/dictionary/severely"],
   ["strictly","严厉地；苛刻地","adv.",["严厉地","苛刻地","严格","尖锐","严肃","严厉"],["severely-strictly","stern-manner"],"The committee severely criticized the lack of preparation.","委员会严厉批评了准备不足的问题。",null,"https://www.merriam-webster.com/dictionary/severely"]
  ],[{"terms":["朴素"],"decision":"scope-excluded","reason":"朴素的用法需服饰或风格语境，本批只训练程度严重及批评严厉。","source":"https://www.merriam-webster.com/dictionary/severely"}]);
  entry("mournful",[
   ["sad","悲伤的；哀伤的","adj.",["悲伤的","哀伤的","悲恸的","悲哀的","令人惋惜的"],["mournful-sad","sad-mourning","grief-sadness"],"A mournful tune drifted from the empty hall.","空荡荡的大厅里传来一曲哀伤的旋律。",null,"https://www.merriam-webster.com/dictionary/mournful"]
  ],[]);
  entry("angry",[
   ["annoyed","生气的；愤怒的","adj.",["生气的","愤怒的"],["angry-annoyed","angry-feeling"],"The driver was angry about the blocked entrance.","司机对入口被堵住感到生气。",null,"https://www.merriam-webster.com/dictionary/angry"],
   ["inflamed","红肿发炎的","adj.",["红肿发炎的"],["angry-inflamed"],"There was an angry red patch around the scratch.","抓痕周围有一块红肿发炎的皮肤。",null,"https://www.merriam-webster.com/dictionary/angry"]
  ],[]);
  entry("troublesome",[
   ["difficult","麻烦的；令人烦恼的","adj.",["麻烦的","令人烦恼的","令人讨厌的"],["troublesome-difficult","unpleasant-experience","bother-trouble"],"The old printer has become increasingly troublesome.","那台旧打印机越来越让人头疼。",null,"https://www.merriam-webster.com/dictionary/troublesome"]
  ],[]);
  entry("unpleasant",[
   ["disagreeable","令人不快的；讨厌的","adj.",["令人不快的","讨厌的","使人厌恶的","令人不舒服的","粗鲁的","不友好的"],["unpleasant-disagreeable","unpleasant-experience","nasty-unpleasant"],"An unpleasant smell came from the blocked drain.","堵塞的排水管里散发出难闻的气味。",null,"https://www.merriam-webster.com/dictionary/unpleasant"]
  ],[]);
  entry("vex",[
   ["annoy","使烦恼；使恼怒","v.",["使烦恼","使恼怒","使恼火","使困扰","给…惹麻烦"],["vex-annoy","annoy-irritate","annoy-disrupt","irritate-annoy","causing-annoyance","disturb-interrupt","bother-annoy"],"The repeated delays vexed the passengers.","接连的延误使乘客们烦躁。",null,"https://www.merriam-webster.com/dictionary/vex"]
  ],[]);
  entry("indignant",[
   ["outraged","愤慨的；义愤的","adj.",["愤慨的","义愤的","愤怒的"],["indignant-outraged","angry-feeling"],"She was indignant at the unfair accusation.","她对不公正的指责感到愤慨。",null,"https://www.merriam-webster.com/dictionary/indignant"]
  ],[]);
  entry("wick",[
   ["cord","灯芯；烛芯","n.",["灯芯","烛芯","油绳"],["wick-cord"],"Trim the candle's wick before lighting it.","点蜡烛前，修剪一下烛芯。",null,"https://www.merriam-webster.com/dictionary/wick"],
   ["absorb","吸走；导走液体","v.",["吸走","导走液体"],["wick-absorb"],"The fabric wicks moisture away from the skin.","这种布料把水分从皮肤表面导走。",null,"https://www.merriam-webster.com/dictionary/wick"]
  ],[]);
  entry("unsatisfactory",[
   ["inadequate","不令人满意的；不合要求的","adj.",["不令人满意的","不合要求的"],["unsatisfactory-inadequate"],"The first repair produced an unsatisfactory result.","第一次维修的结果令人不满意。",null,"https://www.merriam-webster.com/dictionary/unsatisfactory"]
  ],[]);
  entry("unkind",[
   ["cruel","不友善的；刻薄的","adj.",["不友善的","刻薄的","不仁慈的","不亲切的"],["unkind-cruel"],"It was unkind to laugh at his mistake.","嘲笑他的错误是不友善的。",null,"https://www.merriam-webster.com/dictionary/unkind"]
  ],[]);
  entry("unsuitable",[
   ["inappropriate","不合适的；不适宜的","adj.",["不合适的","不适宜的","不适合的","不适当的"],["unsuitable-inappropriate"],"These shoes are unsuitable for walking on ice.","这双鞋不适合在冰上行走。",null,"https://www.merriam-webster.com/dictionary/unsuitable"]
  ],[]);
  entry("reluctance",[
   ["unwillingness","不情愿；勉强","n.",["不情愿","勉强"],["reluctance-unwillingness"],"His reluctance to speak delayed the decision.","他不愿发言，耽误了决策。",null,"https://www.merriam-webster.com/dictionary/reluctance"]
  ],[{"terms":["磁阻"],"decision":"scope-excluded","reason":"磁阻是磁路专业物理量，不与主观不情愿混合。","source":"https://www.merriam-webster.com/dictionary/reluctance"}]);
  entry("slothful",[
   ["lazy","懒惰的；怠惰的","adj.",["懒惰的","怠惰的"],["slothful-lazy"],"The story contrasts a slothful ruler with his hardworking servants.","故事把懒惰的统治者与勤劳的仆人作了对比。",null,"https://www.merriam-webster.com/dictionary/slothful"]
  ],[]);
  entry("medieval",[
   ["historical","中世纪的","adj.",["中世纪的","中古的"],["medieval-historical"],"The town is famous for its medieval walls.","这座城镇以中世纪城墙闻名。",null,"https://www.merriam-webster.com/dictionary/medieval"],
   ["backward","野蛮落后的；仿佛中世纪的","adj.",["野蛮落后的","仿佛中世纪的"],["medieval-backward"],"The journalist described the prison conditions as medieval.","记者形容监狱条件野蛮落后，仿佛中世纪。",null,"https://www.merriam-webster.com/dictionary/medieval"]
  ],[]);
  entry("million",[
   ["number","一百万","number",["一百万","百万"],["million-number"],"The city has a population of one million.","这座城市有一百万人口。",null,"https://www.merriam-webster.com/dictionary/million"],
   ["many","极大量；无数","n.",["极大量","无数"],["million-many"],"There were a million things she wanted to ask.","她有无数事情想问。",null,"https://www.merriam-webster.com/dictionary/million"]
  ],[]);
  entry("incidentally",[
   ["by-way","顺便提一下","adv.",["顺便提一下","顺便"],["incidentally-by-way"],"Incidentally, the museum is free on Sundays.","顺便说一下，博物馆周日免费开放。",null,"https://www.merriam-webster.com/dictionary/incidentally"],
   ["by-chance","偶然地；附带地","adv.",["偶然地","附带地","伴随地","偶然"],["incidentally-by-chance"],"The documents were discovered incidentally during the repairs.","维修时偶然发现了这些文件。",null,"https://www.merriam-webster.com/dictionary/incidentally"]
  ],[]);
  entry("belong",[
   ["ownership","属于；归……所有","v.",["属于","归……所有"],["belong-ownership"],"The red bicycle belongs to my sister.","那辆红色自行车属于我姐姐。","belong to","https://www.merriam-webster.com/dictionary/belong"],
   ["membership","是……的成员；属于某类","v.",["是……的成员","属于某类"],["belong-membership"],"He belongs to a local photography club.","他是当地一家摄影俱乐部的成员。","belong to","https://www.merriam-webster.com/dictionary/belong"],
   ["proper-place","应在某处；适合放在某处","v.",["应在某处","适合放在某处","合适"],["belong-proper-place"],"These books belong on the top shelf.","这些书应放在最上层架子上。",null,"https://www.merriam-webster.com/dictionary/belong"],
   ["acceptance","有归属感；融入","v.",["有归属感","融入"],["belong-acceptance"],"After a few weeks, she finally felt that she belonged.","几周后，她终于有了归属感。",null,"https://www.merriam-webster.com/dictionary/belong"]
  ],[]);
  entry("defensive",[
   ["protective","防御的；防卫性的","adj.",["防御的","防卫性的","防卫的","防备用的","自卫的"],["defensive-protective"],"The castle has strong defensive walls.","城堡有坚固的防御城墙。",null,"https://www.merriam-webster.com/dictionary/defensive"],
   ["self-protective","戒备的；为自己辩护的","adj.",["戒备的","为自己辩护的"],["defensive-self-protective"],"He became defensive when asked about the missing notes.","被问及丢失的笔记时，他变得很戒备。",null,"https://www.merriam-webster.com/dictionary/defensive"]
  ],[{"terms":["守势","防卫姿势","防卫物"],"decision":"scope-excluded","reason":"守势、防卫姿势及防卫物为名词语境，本批只训练防卫和心理戒备的形容词。","source":"https://www.merriam-webster.com/dictionary/defensive"}]);
  entry("despatch",[
   ["send","派遣；发送","v.",["派遣","发送","发运"],["despatch-send"],"The office despatched a technician to inspect the lift.","办公室派了一名技术员检查电梯。",null,"https://www.merriam-webster.com/dictionary/dispatch"],
   ["complete","迅速处理；办妥","v.",["迅速处理","办妥"],["despatch-complete"],"She despatched the remaining paperwork before lunch.","她在午饭前迅速处理完了剩余文书工作。",null,"https://www.merriam-webster.com/dictionary/dispatch"],
   ["report","急件；新闻报道","n.",["急件","新闻报道","快信"],["despatch-report","word-publish"],"The newspaper printed a despatch from its overseas correspondent.","报纸刊登了驻外记者的一篇报道。",null,"https://www.merriam-webster.com/dictionary/dispatch"],
   ["sending","发送；发出","n.",["发送","发出"],["despatch-sending"],"The parcels are packed and ready for despatch.","包裹已打包好，随时可以发出。",null,"https://www.merriam-webster.com/dictionary/dispatch"]
  ],[]);
  entry("destruct",[
   ["self-destroy","自毁；使销毁","v.",["自毁","使销毁"],["destruct-self-destroy","ruin-destroy","destruction-damage"],"The test rocket was designed to destruct if it left the safe zone.","试验火箭被设计为一旦偏离安全区域就自毁。",null,"https://www.merriam-webster.com/dictionary/destruct"]
  ],[]);
  entry("ethic",[
   ["principles","道德准则；行为信念","n.",["道德准则","行为信念","道德规范","伦理"],["ethic-principles"],"A strong work ethic helped the team finish on time.","强烈的敬业精神帮助团队按时完成了工作。",null,"https://www.merriam-webster.com/dictionary/ethic"]
  ],[]);
  entry("each",[
   ["individual","每个；各个","determiner",["每个","各个","每一"],["each-individual"],"Each ticket has a different number.","每张票都有不同的号码。",null,"https://www.merriam-webster.com/dictionary/each"],
   ["pronoun","各自；每一个人或物","pron.",["各自","每一个人或物"],["each-pronoun"],"Each received a map before the walk.","散步前，每个人都得到了一张地图。",null,"https://www.merriam-webster.com/dictionary/each"]
  ],[{"terms":["个人"],"decision":"scope-excluded","reason":"每一个人可由代词表示，但普通名词个人不等于 each；本批分开限定词和代词用法。","source":"https://www.merriam-webster.com/dictionary/each"}]);
  entry("frustrating",[
   ["annoying","令人沮丧的；令人懊恼的","adj.",["令人沮丧的","令人懊恼的"],["frustrating-annoying","unpleasant-experience"],"It was frustrating to lose the file just before finishing.","快完成时丢失文件，真令人沮丧。",null,"https://www.merriam-webster.com/dictionary/frustrating"]
  ],[]);
  entry("father-in-law",[
   ["relative","岳父；公公","n.",["岳父","公公"],["father-in-law-relative"],"My father-in-law taught me how to repair the gate.","我的岳父教我如何修理大门。",null,"https://www.merriam-webster.com/dictionary/father-in-law"]
  ],[]);
  entry("quest",[
   ["search","追求；寻求","n.",["追求","寻求","寻找"],["quest-search"],"The team continued its quest for a cleaner source of energy.","团队继续寻找更清洁的能源来源。",null,"https://www.merriam-webster.com/dictionary/quest"],
   ["seek","寻求；探索","v.",["寻求","探索","找"],["quest-seek"],"The explorers quested for a route through the mountains.","探险者们寻找穿越群山的路线。","quest for","https://www.merriam-webster.com/dictionary/quest"]
  ],[{"terms":["调查","追寻猎物"],"decision":"scope-excluded","reason":"法律调查和狩猎追寻的旧用法未单列；本批仅选一般追求和探索。","source":"https://www.merriam-webster.com/dictionary/quest"}]);
  entry("intuitive",[
   ["instinctive","直觉的；凭直觉得到的","adj.",["直觉的","凭直觉得到的"],["intuitive-instinctive"],"Her intuitive understanding of the problem surprised us.","她凭直觉理解了问题，让我们很惊讶。",null,"https://www.merriam-webster.com/dictionary/intuitive"],
   ["usable","直观易用的","adj.",["直观易用的"],["intuitive-usable"],"The new controls are intuitive even for beginners.","新控件即使对初学者也很直观易用。",null,"https://www.merriam-webster.com/dictionary/intuitive"]
  ],[]);
  entry("ketchup",[
   ["sauce","番茄酱","n.",["番茄酱","蕃茄酱"],["ketchup-sauce"],"He added a little ketchup to his chips.","他在薯条上加了一点番茄酱。",null,"https://www.merriam-webster.com/dictionary/ketchup"]
  ],[]);
  entry("mesmerise",[
   ["fascinate","使着迷；使入迷","v.",["使着迷","使入迷","迷住","吸引全部注意力"],["mesmerise-fascinate","absorb-interest","engross-attention","attract-draw","attract-entice"],"The slow movement of the fish mesmerised the child.","鱼缓缓游动，让孩子看入了迷。",null,"https://www.merriam-webster.com/dictionary/mesmerize"],
   ["hypnotize","对……施催眠术","v.",["对……施催眠术","对…施催眠术"],["mesmerise-hypnotize"],"The stage performer claimed he could mesmerise a volunteer.","舞台表演者声称自己能给志愿者催眠。",null,"https://www.merriam-webster.com/dictionary/mesmerize"]
  ],[]);
  entry("retell",[
   ["narrate","复述；重新讲述","v.",["复述","重新讲述","再讲","重说"],["retell-narrate"],"She retold the legend in simpler language.","她用更简单的语言复述了传说。",null,"https://www.merriam-webster.com/dictionary/retell"]
  ],[{"terms":["重复"],"decision":"scope-excluded","reason":"复述以讲述内容为对象，不等于任何动作的重复。","source":"https://www.merriam-webster.com/dictionary/retell"}]);
  entry("short-day",[
   ["photoperiod","短日照的","adj.",["短日照的"],["short-day-photoperiod"],"The greenhouse has a separate area for short-day plants.","温室里有一个专门种植短日照植物的区域。",null,"https://www.merriam-webster.com/dictionary/short-day"]
  ],[]);
  entry("silent",[
   ["quiet","无声的；安静的","adj.",["无声的","安静的"],["silent-quiet"],"The engine remained silent when he turned the key.","他转动钥匙时，发动机毫无声响。",null,"https://www.merriam-webster.com/dictionary/silent"],
   ["uncommunicative","沉默的；不发表意见的","adj.",["沉默的","不发表意见的"],["silent-uncommunicative"],"She stayed silent throughout the discussion.","整个讨论中，她一直保持沉默。",null,"https://www.merriam-webster.com/dictionary/silent"],
   ["film","无声电影的","adj.",["无声电影的"],["silent-film"],"The cinema screened a restored silent film.","电影院放映了一部修复后的无声电影。",null,"https://www.merriam-webster.com/dictionary/silent"],
   ["letter","不发音的","adj.",["不发音的"],["silent-letter"],"The word has a silent letter at the beginning.","这个词开头有一个不发音的字母。",null,"https://www.merriam-webster.com/dictionary/silent"]
  ],[{"terms":["静止的","无症状的"],"decision":"scope-excluded","reason":"静止不必然无声，医学无症状不等于沉默；本批选声音、发言、影片及字母发音四类。","source":"https://www.merriam-webster.com/dictionary/silent"}]);
  entry("wasabi",[
   ["condiment","芥末调味酱；山葵酱","n.",["芥末调味酱","山葵酱"],["wasabi-condiment"],"The chef served the sushi with a small mound of wasabi.","厨师在寿司旁配了一小堆山葵酱。",null,"https://www.merriam-webster.com/dictionary/wasabi"],
   ["plant","山葵","n.",["山葵","（吃生鱼片沾用）山葵"],["wasabi-plant"],"Wasabi grows well beside cool, clear streams.","山葵在清凉洁净的溪流旁生长良好。",null,"https://www.merriam-webster.com/dictionary/wasabi"]
  ],[]);
  entry("well-being",[
   ["welfare","健康幸福；福祉","n.",["健康幸福","福祉"],["well-being-welfare","epithet-existence"],"The new garden improved the residents' sense of well-being.","新花园提升了居民的幸福感。",null,"https://www.merriam-webster.com/dictionary/well-being"]
  ],[{"terms":["安宁的","康乐的"],"decision":"scope-excluded","reason":"这是健康幸福状态的名词，不把安宁的和康乐的形容词形式直接认证为名词答案。","source":"https://www.merriam-webster.com/dictionary/well-being"}]);
 }
 if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch15=register;
})(typeof window==='object'?window:globalThis);
