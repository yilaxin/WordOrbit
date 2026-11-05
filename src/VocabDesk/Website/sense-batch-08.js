/* Batch 08: 200 formal public words; every retained sense names the dictionary entry
 * that was actually read, and all bilingual examples are original WordOrbit writing.
 * No learner data is included. Complete entries are loaded on demand by the app. */
(function(scope){
  'use strict';
  function register(add){
    const entries={};
    function entry(word,rows,references,extraSources){
      references=references||[];extraSources=extraSources||[];
      const e=add(word,rows.map(r=>{const c=r.slice();if(typeof c[4]==='string')c[4]=[c[4]];return c;}),references,extraSources);
      e.reviewDate='2026-11-05';
      e.senses.forEach((s,i)=>{s.source=rows[i][8];});
      e.sources=[...new Set([...rows.map(r=>r[8]),...references.map(r=>r.source).filter(Boolean),...(extraSources||[])])];
      entries[word]=e;return e;
    }
    entry("rural", [
      ["countryside","乡村的；农村的；与农业有关的","adj.",["乡下的","田园的","乡村风味的","农村的","乡村的","有关农业的"],["rural-countryside-life"],"Life in rural areas is quieter, but the buses run only twice a day.","乡村地区的生活更安静，但公交车每天只来两趟。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/rural"]
    ]);
    entry("outskirts", [
      ["city-edge","市郊；近郊（城市边缘地带）","n.",["近郊","市郊"],["outskirts-city-periphery","geographical-periphery"],"The factory was built on the outskirts of the city, where land was cheaper.","这家工厂建在城市近郊，那里地价更便宜。","on the outskirts of","https://api.dictionaryapi.dev/api/v2/entries/en/outskirts"]
    ]);
    entry("desolate", [
      ["uninhabited","荒凉的；荒无人烟的","adj.",["荒凉的","荒无人烟的"],["desolate-uninhabited-land"],"Only a few stone walls still stand in that desolate valley.","那片荒凉的山谷里只剩下几堵石墙。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/desolate"],
      ["dreary-lonely","凄凉的；孤寂的","adj.",["孤寂的","凄凉的"],["desolate-gloomy-mood"],"The empty house looked desolate in the grey winter light.","那所空房子在灰暗的冬日光线中显得凄凉。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/desolate"],
      ["lay-waste","使荒芜；使荒废","v.",["使荒废"],["desolate-devastate-land","cause-major-destruction"],"War had desolated the farmland and driven most families away.","战争使农田荒废，多数家庭被迫离开。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/desolate"],
      ["make-sad","使悲痛；使孤寂","v.",["使悲痛"],["desolate-cause-grief","severe-emotional-distress"],"The loss of her closest friend desolated her for months.","失去最亲密的朋友使她悲痛了好几个月。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/desolate"]
    ]);
    entry("desertification", [
      ["land-to-desert","（土壤）荒漠化；沙漠化","n.",["（土壤）荒漠化","沙漠化"],["desertification-soil-degradation"],"Overgrazing and long droughts have sped up desertification across the region.","过度放牧和长期干旱加速了该地区的荒漠化。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/desertification"]
    ]);
    entry("waterfall", [
      ["cascade","瀑布","n.",["瀑布"],["waterfall-river-drop"],"We could hear the waterfall long before we reached the gorge.","还没走到峡谷，我们就听到了瀑布的声音。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/waterfall"]
    ]);
    entry("shady", [
      ["shaded","荫凉的；成荫的；背阴的","adj.",["荫凉的","成荫的","阴暗的"],["shady-sheltered-from-sun"],"They found a shady spot under the oak and unpacked their picnic basket.","他们在橡树下找了个阴凉处，打开野餐篮取出食物。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/shady"],
      ["suspicious","可疑的；见不得人的","adj.",["成问题的","令人怀疑的"],["shady-dishonest"],"The deal looked shady, so she asked a lawyer to read the contract.","这笔交易看起来可疑，于是她请律师看了合同。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/shady"]
    ], [
      {"terms":["隐蔽的"],"decision":"scope-excluded","reason":"核对条目中 shady 的阴影义指遮荫、背光，不含“隐蔽、藏匿”义；旧译“隐蔽的”未获条目支持，本批不单列义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/shady"}
    ]);
    entry("paradise", [
      ["heaven","天堂（人死后灵魂所居之处）","n.",["天堂"],["paradise-heaven"],"Many of the islanders believe their ancestors now live in paradise.","许多岛民相信他们的祖先如今住在天堂。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/paradise"],
      ["ideal-place","乐园；极美的地方","n.",["乐园"],["paradise-ideal-place"],"For a keen diver, this quiet coral bay is a paradise.","对热衷潜水的人来说，这片安静的珊瑚湾就是乐园。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/paradise"],
      ["eden","伊甸园","n.",["伊甸园"],["paradise-garden-of-eden"],"The old painting shows Adam and Eve being driven out of paradise.","那幅古画描绘亚当和夏娃被逐出伊甸园。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/paradise"]
    ]);
    entry("margin", [
      ["page-margin","页边空白；页边距","n.",["页边的空白","页边距"],["margin-page-edge"],"The teacher wrote a short comment in the margin of my essay.","老师在我文章的页边空白处写了一句简短评语。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/margin"],
      ["surface-edge","边缘；边沿","n.",["边缘"],["margin-border-of-surface","geographical-periphery"],"Small wooden huts stand along the margin of the lake.","小木屋排列在湖边。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/margin"],
      ["group-limit","界限；临界线","n.",["界限"],["margin-group-limit"],"The drought pushed small farms to the margins of economic survival.","旱灾把小农场推到了勉强维持生计的边缘。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/margin"],
      ["leeway","余地；余裕","n.",["余裕"],["margin-spare-room"],"The plan allows a margin of two days in case of delays.","该计划留出了两天的余裕，以防延误。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/margin"],
      ["difference","差额；差数","n.",["差数","差额"],["margin-score-gap"],"She won the race by a margin of only three seconds.","她以仅三秒的差额赢得了比赛。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/margin"],
      ["profit","利润；赚头","n.",["利润","赚头"],["margin-seller-profit"],"The shop keeps a narrow margin on milk in order to attract customers.","这家店在牛奶上只保留很薄的利润，以吸引顾客。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/margin"],
      ["deposit","保证金；按金","n.",["保证金"],["margin-trading-collateral"],"The broker required additional margin before allowing the trade to proceed.","经纪商要求追加保证金后才允许继续这笔交易。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/margin"],
      ["annotate","在…页边加注；给…加边","v.",["加边于","加旁注于"],["margin-add-notes"],"The editor margined the draft with queries for the writer.","编辑在草稿的页边写下了给作者的问题。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/margin"]
    ]);
    entry("fringe", [
      ["tassels","流苏；穗；饰边","n.",["流苏","穗"],["fringe-tassel-border"],"Bright red fringe hung from the edge of the dancer's shawl.","舞者披肩的边缘垂着鲜红的流苏。",null,"https://dictionary.cambridge.org/dictionary/english/fringe"],
      ["periphery","边缘；外围","n.",["边缘","端"],["fringe-outer-periphery","geographical-periphery"],"Their house stands on the southern fringe of the forest.","他们的房子位于森林南缘。",null,"https://dictionary.cambridge.org/dictionary/english/fringe"],
      ["marginal-group","边缘群体；非主流派别","n.",["边缘群体","非主流派别"],["fringe-marginal-group"],"The party pushed its most extreme members to the fringe.","该党把最极端的成员挤到了边缘位置。",null,"https://dictionary.cambridge.org/dictionary/english/fringe"],
      ["decorate-edge","沿…边缘排列；为…镶边","v.",["加穗于","加饰边于","为…镶边","沿边排列"],["fringe-decorate-edge","border-along-edge"],"Pale grass fringed the narrow path that led to the gate.","浅色的草镶在小径的边缘，一直通到大门。",null,"https://dictionary.cambridge.org/dictionary/english/fringe"],
      ["nonmainstream","边缘的；非主流的","adj.",["边缘的"],["fringe-nonmainstream"],"Fringe theatre groups in this city rarely fill large halls.","边缘戏剧团体很少能坐满大厅。",null,"https://www.collinsdictionary.com/dictionary/english/fringe"],
      ["hair","（英）刘海","n.",["刘海"],["forehead-hair"],"She cut her fringe shorter so that it no longer covered her eyebrows.","她把刘海剪短了些，不再遮住眉毛。",null,"https://dictionary.cambridge.org/dictionary/english/fringe"],
      ["additional-benefit","附加福利；额外好处（fringe benefit）","n.（搭配）",["附加福利","额外好处"],["employment-perk"],"A free bus pass is one of the fringe benefits of working at the museum.","免费公交月票是在这家博物馆工作的附加福利之一。","fringe benefit(s)","https://dictionary.cambridge.org/dictionary/english/fringe-benefit"]
    ], [
      {"terms":["初步"],"decision":"scope-excluded","reason":"核对条目中 fringe 无“初步”义；该旧译可能是由“边缘”引申出的汉语猜测，未获词典支持。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/fringe"},
      {"terms":["附加的"],"decision":"context-required","reason":"fringe benefits 是已核实的常用搭配，现单列附加福利义；不可把 fringe 无条件译为任何事物的“附加的”。","source":"https://dictionary.cambridge.org/dictionary/english/fringe-benefit"}
    ]);
    entry("crack", [
      ["fissure","裂缝；裂口","n.",["裂缝"],["crack-fissure"],"A thin crack ran across the ceiling after the earthquake.","地震后，天花板上横着一条细裂缝。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/crack"],
      ["sharp-sound","爆裂声；啪的一声","n.",["爆裂声"],["crack-sharp-report"],"The crack of a breaking branch woke us in the middle of the night.","半夜里树枝断裂的爆裂声把我们吵醒了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/crack"],
      ["break-apart","（使）裂开；破裂","v.",["(使)爆裂","(使)裂开"],["crack-split-open"],"The frozen lake cracked under the weight of the sled.","结冰的湖面在雪橇的重压下裂开了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/crack"],
      ["sharp-sound-verb","（使）发出爆裂声；噼啪作响","v.",["(使)发出爆裂声"],["crack-sharp-sound-verb"],"The driver's whip cracked over the horses and the cart moved off.","车夫的鞭子在马匹上方啪地一响，马车便启程了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/crack"],
      ["solve","破解（密码、系统）；解决（难题）","v.",["破解","解决"],["crack-solve-code"],"It took the team two years to crack the encryption.","这个团队花了两年时间才破解加密。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/crack"],
      ["joke","玩笑；俏皮话","n.",["玩笑","俏皮话"],["crack-witty-remark"],"He made a crack about my new haircut and everyone laughed.","他拿我的新发型开了个玩笑，大家都笑了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/crack"],
      ["first-rate","第一流的；顶级的","adj.",["第一流的"],["crack-top-quality"],"She is a crack shot who rarely misses a moving target.","她是个神枪手，很少打不中移动目标。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/crack"],
      ["attempt","尝试；试一试","n.",["尝试","试一试"],["crack-attempt","attempt-undertaking"],"Why not take a crack at the puzzle before checking the answer?","为什么不在看答案之前先试着解一下这个谜题？","take a crack at","https://api.dictionaryapi.dev/api/v2/entries/en/crack"],
      ["give-way","（因压力）崩溃；屈服","vi.",["崩溃","屈服"],["psychological-breakdown"],"After days of questioning, the suspect finally cracked and revealed the hiding place.","经过数日盘问，嫌疑人终于撑不住了，说出了藏匿地点。","crack under pressure","https://dictionary.cambridge.org/dictionary/english/crack"],
      ["tell-joke","说（笑话）；开玩笑","vt.",["说笑话","开玩笑"],["tell-joke"],"Maya cracked a joke to ease the tension before the interview.","面试前，玛雅说了个笑话来缓和紧张气氛。","crack a joke","https://dictionary.cambridge.org/dictionary/english/crack"],
      ["hit","猛击；撞击","v.",["猛击","撞击"],["strike-with-force"],"I slipped on the wet step and cracked my elbow against the rail.","我在湿台阶上滑倒，胳膊肘猛撞到了栏杆上。","crack something against/on something","https://dictionary.cambridge.org/dictionary/english/crack"]
    ], [
      {"terms":["啪地一声"],"decision":"context-required","reason":"拟声词用法另有词典记录；当前 sharp-sound 仅训练名词声音义，不以名词例句证明副词用法。","source":"https://www.collinsdictionary.com/dictionary/english/crack"}
    ]);
    entry("seed", [
      ["plant-seed","种子；籽","n.",["种子","籽"],["seed-plant-ovule"],"She pressed a single seed into each pot of damp soil.","她在每盆湿土里按下一粒种子。",null,"https://dictionary.cambridge.org/dictionary/english/seed"],
      ["origin","起源；萌芽（想法等的开端）","n.",["萌芽"],["seed-origin-germ"],"The seed of the quarrel was planted years before anyone noticed.","这场争吵的起因在很多年前就埋下了，当时没人察觉。",null,"https://dictionary.cambridge.org/dictionary/english/seed"],
      ["offspring","子孙；后裔（文学、古旧）","n.",["子孙"],["seed-offspring"],"Their neighbours claim to be the seed of an old royal house.","他们的邻居自称是古老王族的后裔。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/seed"],
      ["sow","播种；在…播种","v.",["播种","在...播种"],["seed-sow-field"],"Farmers seed the fields in early April, once the frost has gone.","霜冻一过，农民就在四月初播种。",null,"https://dictionary.cambridge.org/dictionary/english/seed"],
      ["produce-seed","结籽；结实","v.",["结实"],["seed-produce-seed"],"The lettuces had begun to seed, so the leaves tasted bitter.","生菜已经开始结籽，所以叶子尝起来发苦。",null,"https://dictionary.cambridge.org/dictionary/english/seed"],
      ["tournament-ranking","把…列为种子选手（排定种子位）","v.",["列为种子选手","排种子位"],["seed-tournament-ranking"],"The organisers seeded her third, despite her low world ranking.","尽管世界排名不高，主办方仍把她列为三号种子。",null,"https://dictionary.cambridge.org/dictionary/english/seed"],
      ["deseed","去除（果蔬）的籽","vt.",["去籽"],["remove-fruit-seeds"],"She seeded the tomatoes before adding them to the cold soup.","她先去掉番茄籽，再把番茄加入冷汤。",null,"https://dictionary.cambridge.org/dictionary/english/seed"],
      ["cause-development","播下（想法等）的种子；促使产生","vt.",["促使产生","播下想法的种子"],["seed-origin-germ"],"A visit to the deserted harbour seeded her idea for a novel.","一次废弃港口之行在她心中播下了创作小说的想法。",null,"https://dictionary.cambridge.org/dictionary/english/seed"],
      ["ranked-player","种子选手","n.",["种子选手"],["seed-tournament-ranking"],"The top seed lost her opening match to an unranked teenager.","头号种子选手在首场比赛中输给了一位没有排名的少年。",null,"https://dictionary.cambridge.org/dictionary/english/seed"]
    ], [
      {"terms":["精液"],"decision":"scope-excluded","reason":"核对条目确实列有 seed 的生理义“精液”，但不适合作为雅思学习义项，本批不收录。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/seed"},
      {"terms":["脱...籽"],"decision":"context-required","reason":"已核实 seed 作及物动词可表示去除果蔬的籽，现纳入 deseed；不等于所有谷物加工意义的“脱粒”。","source":"https://dictionary.cambridge.org/dictionary/english/seed"},
      {"terms":["催...发育"],"decision":"context-required","reason":"已核实使想法或事物产生、发展的用法，纳入 cause-development；不是普遍的生物催生长用语。","source":"https://dictionary.cambridge.org/dictionary/english/seed"}
    ]);
    entry("burgeon", [
      ["sprout","（植物）发芽；抽芽","v.",["发芽","萌芽"],["burgeon-sprout-plant"],"The roses burgeon in April and are in full bloom by June.","玫瑰在四月抽芽，到六月便盛开了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/burgeon"],
      ["grow-rapidly","迅速发展；激增","v.",["迅速发展","激增"],["burgeon-grow-rapidly"],"Online tutoring burgeoned into a billion-dollar industry within a decade.","在线辅导在十年内迅速发展成规模达十亿美元的行业。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/burgeon"],
      ["bud","芽；嫩芽（罕用名词）","n.",["芽","嫩枝"],["burgeon-bud-shoot"],"The vine's tender burgeon appeared after the last frost.","最后一场霜过后，藤蔓长出了嫩芽。",null,"https://www.collinsdictionary.com/dictionary/english/burgeon"]
    ]);
    entry("fruit", [
      ["edible-fruit","水果；果类","n.",["水果","果类"],["fruit-edible-produce"],"We bought fresh fruit at the market and ate it by the river.","我们在市场买了新鲜水果，在河边吃掉了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/fruit"],
      ["plant-fruit","（植物的）果实；种实","n.",["果实","种实"],["fruit-plant-ovary"],"The tree drops its fruit in autumn, and deer come to feed.","这棵树秋天落果，鹿会来觅食。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/fruit"],
      ["result","成果；结果","n.",["结果"],["fruit-outcome-result"],"Their patience bore fruit when the missing letters finally arrived.","那些丢失的信件终于寄到时，他们的耐心有了结果。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/fruit"],
      ["bear-fruit","结果实","v.",["结果实","结出果实"],["fruit-bear-fruit"],"These apple trees fruit only once every two years.","这些苹果树每两年才结一次果。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/fruit"]
    ]);
    entry("rot", [
      ["decay-process","腐烂；腐败（过程）","n.",["腐烂"],["rot-decay-process"],"Damp had turned the wooden floor of the barn to rot.","潮气使谷仓的木地板腐烂了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/rot"],
      ["decompose","腐烂；变质","v.",["烂"],["rot-decompose"],"Half the apples rotted before we could sell them.","一半的苹果还没等我们卖出去就烂了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/rot"],
      ["cause-decay","使腐烂；使腐朽","v.",["使腐烂","使腐朽","腐蚀"],["rot-cause-decay"],"Standing water rots the roots of young trees.","积水会使幼树的根腐烂。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/rot"],
      ["moral-corruption","（使）腐化；（使）堕落","v.",["败坏","堕落","使堕落"],["rot-moral-corruption"],"The novelist shows how unchecked power can rot a leader's conscience.","这位小说家描写了不受约束的权力如何腐蚀领导者的良知。",null,"https://www.collinsdictionary.com/dictionary/english/rot"],
      ["decline","衰败；恶化","n.",["衰败","恶化"],["gradual-deterioration"],"The closure of the library marked the point when the rot set in for the town centre.","图书馆关闭，标志着镇中心开始走向衰败。","the rot sets in / stop the rot","https://www.collinsdictionary.com/dictionary/english/rot"],
      ["languish","日渐衰弱；在困境中消沉","vi.",["日渐衰弱","消沉"],["languish-in-confinement"],"The novel follows a prisoner left to rot in an isolated fortress.","这部小说描写了一名被遗弃在偏远要塞中日渐消沉的囚犯。","rot in prison","https://www.collinsdictionary.com/dictionary/english/rot"]
    ], [
      {"terms":["憔悴"],"decision":"context-required","reason":"rot 可在被囚禁等语境中指日渐衰弱、消沉，现纳入 languish；不能无条件译作形容面容的“憔悴”。","source":"https://www.collinsdictionary.com/dictionary/english/rot"}
    ]);
    entry("herb", [
      ["culinary-herb","香草（调味用的草本植物）","n.",["香草"],["herb-culinary-seasoning"],"Chop the fresh herbs finely and stir them into the sauce.","把新鲜香草切碎，拌进酱汁里。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/herb"],
      ["medicinal-herb","药草；草药","n.",["药草","草药"],["herb-medicinal-plant"],"Her grandmother treated coughs with herbs grown in the garden.","她祖母用园子里种的草药治咳嗽。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/herb"],
      ["nonwoody-plant","草本植物","n.",["草","草本"],["herb-nonwoody-plant"],"The meadow is rich in herbs and small flowering plants.","这片草甸上长满了草本植物和小花。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/herb"]
    ]);
    entry("plantation", [
      ["crop-estate","种植园；大农场","n.",["种植园","大农场"],["plantation-crop-estate"],"Workers on the tea plantation begin picking leaves at dawn.","茶叶种植园的工人黎明时就开始采茶。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/plantation"],
      ["tree-farm","人工林；林场","n.",["人工林","林场"],["plantation-commercial-tree-farm"],"A plantation of pines now covers the hillside that was once bare.","曾经光秃的山坡如今覆盖着一片松树人工林。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/plantation"]
    ], [
      {"terms":["栽植(如牙或其他组织的植入、再植和移植)"],"decision":"scope-excluded","reason":"该片段是医学“植入、移植”的专门义，核对条目未列，且与雅思常用义无关，本批不收录。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/plantation"},
      {"terms":["植树造林"],"decision":"restricted-verified","reason":"Collins 确认 plantation 有名词“种植（行为）”的罕用义；本批只训练种植园和人工林，不再以名词词性为由否定动作名词。","source":"https://api.collinsdictionary.com/dictionary/english/plantation"},
      {"terms":["新开垦地"],"decision":"context-required","reason":"历史语境的 plantation 可指殖民地或新建定居点；不是任何新开垦农地的通称，本批不训练历史殖民义。","source":"https://www.collinsdictionary.com/us/dictionary/english/plantation"}
    ]);
    entry("hybridisation", [
      ["crossbreeding","杂交；杂交过程","n.",["杂交","杂交过程"],["hybridisation-crossbreeding"],"Hybridisation of two wheat varieties produced a hardier crop.","两个小麦品种的杂交培育出了更耐寒的作物。",null,"https://www.vocabulary.com/dictionary/hybridisation"]
    ], [
      {"terms":["杂化"],"decision":"scope-excluded","reason":"“杂化”是有机化学中“轨道杂化”的专业义，本次核对的通用词典条目只列生物杂交义，未列该义，本批不设学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/hybridisation"}
    ]);
    entry("bunch", [
      ["cluster","串；束（花果、钥匙等）","n.",["串","束"],["bunch-cluster-tied"],"He brought a bunch of grapes and a loaf of bread.","他带来一串葡萄和一条面包。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bunch"],
      ["group-of-people","一群人；一伙人","n.",["一群人","一伙人"],["bunch-group-of-people","human-group"],"The usual bunch meets at the cafe on Friday evenings.","那伙人每周五晚上在咖啡馆碰面。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bunch"],
      ["gather","使成束；聚拢","v.",["使成束","聚拢"],["bunch-gather-cluster"],"She bunched the herbs together and tied them with string.","她把香草拢成一束，用绳子扎好。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bunch"]
    ], [
      {"terms":["骨肿块(马)"],"decision":"scope-excluded","reason":"该义为兽医专业用法，核对条目中 bunch 作名词为“串、束、一群”等，未见“马的骨肿块”义，本批不设。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/bunch"}
    ]);
    entry("lawn", [
      ["mown-grass","草坪；草地","n.",["草地","草坪"],["lawn-mown-grass"],"He mows the lawn every Saturday morning before breakfast.","他每周六早饭前修剪草坪。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/lawn"]
    ], [
      {"terms":["上等细麻布"],"decision":"scope-excluded","reason":"词典确列 lawn 的“细亚麻布”古旧纺织义，但非本批常用义；保留追溯，不设学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/lawn"},
      {"terms":["细筛"],"decision":"scope-excluded","reason":"核对条目中 lawn 无“细筛”义，该旧译未获词典支持，本批不收录。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/lawn"}
    ]);
    entry("forest", [
      ["tree-tract","森林","n.",["森林"],["forest-tree-tract"],"The forest covers the lower slopes and hides several streams.","森林覆盖着较低的山坡，遮住了几条小溪。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/forest"],
      ["woodland-area","林区；林地","n.",["林区"],["forest-woodland-area"],"Deer are still protected inside this ancient royal forest.","在这片古老的皇家林区内，鹿仍受到保护。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/forest"],
      ["plant-trees","植树于；造林","v.",["植树于"],["forest-plant-trees"],"They forested the bare ridge after the landslide.","滑坡之后，他们在光秃的山脊上植树。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/forest"]
    ]);
    entry("creature", [
      ["living-being","生物；（尤指）动物","n.",["动物","生物"],["creature-living-being"],"Tiny creatures live in the cracks between the rocks.","微小的生物生活在岩石的缝隙里。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/creature"],
      ["person","人（含怜悯或轻蔑）","n.",["人"],["creature-person-pitiable"],"The poor creature had walked for miles without food.","这个可怜的人没吃东西走了好几英里。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/creature"],
      ["created-thing","创造物；产物","n.",["创造物"],["creature-thing-created"],"The dragon is a creature of legend, not of nature.","龙是传说中的创造物，而非自然界的生物。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/creature"]
    ]);
    entry("beast", [
      ["wild-animal","野兽；大型动物","n.",["野兽","动物"],["beast-wild-animal"],"The beast came down to the river at dusk to drink.","那头野兽在黄昏时到河边喝水。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/beast"],
      ["brutal-person","畜生；凶残的人","n.",["畜生"],["beast-brutal-person"],"Only a beast would treat a tired horse that way.","只有畜生才会那样对待一匹疲惫的马。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/beast"]
    ], [
      {"terms":["兽性"],"decision":"scope-excluded","reason":"核对条目把 beast 作名词释为动物或凶残的人，没有“兽性”这一抽象名词义；旧译按汉语习惯补足，本批不设义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/beast"}
    ]);
    entry("cub", [
      ["young-animal","幼兽（熊、狮、狼、狐等的崽）","n.",["幼兽"],["cub-animal-young"],"The lioness carried each cub to the shade by the neck.","母狮把每只幼崽叼到阴凉处。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cub"],
      ["young-person","年轻人；毛头小子","n.",["年轻人"],["cub-young-person"],"As a cub of nineteen, he knew almost nothing about the trade.","十九岁的毛头小子，他对这一行几乎一无所知。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cub"]
    ]);
    entry("brood", [
      ["clutch","一窝（雏鸟、幼崽）","n.",["一窝"],["brood-young-clutch"],"The hen kept her brood warm beneath her wings.","母鸡把一窝小鸡护在翅膀下取暖。",null,"https://dictionary.cambridge.org/dictionary/english/brood"],
      ["incubate","孵（蛋）","v.",["孵"],["brood-incubate-eggs"],"The male penguin broods the egg for about two months.","雄性企鹅孵蛋大约两个月。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/brood"],
      ["mull-over","沉思；闷闷不乐地想","v.",["沉思"],["brood-mull-over"],"She sat by the window, brooding on the letter for hours.","她坐在窗边，对着那封信沉思了几个小时。","brood on/over sth","https://dictionary.cambridge.org/dictionary/english/brood"],
      ["children","（诙谐）一家孩子","n.",["一家的孩子"],["family-children","human-group"],"He arrived at the campsite with his noisy brood and a car full of sleeping bags.","他带着自己那群吵闹的孩子和满车睡袋来到营地。",null,"https://dictionary.cambridge.org/dictionary/english/brood"]
    ], [
      {"terms":["一伙"],"decision":"context-required","reason":"brood 可诙谐地指一家的孩子，已纳入 children；不可泛指任意一伙成年人。","source":"https://dictionary.cambridge.org/dictionary/english/brood"}
    ]);
    entry("sting", [
      ["insect-pierce","蜇；叮","v.",["叮"],["sting-insect-pierce"],"A wasp stung her on the wrist while she was gardening.","她做园艺时，一只黄蜂蜇了她的手腕。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sting"],
      ["painful-wound","蜇伤；刺痛","n.",["刺痛"],["sting-painful-wound"],"The sting left a red mark that itched for days.","蜇伤留下了一个发红的印子，痒了好几天。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sting"],
      ["cause-distress","使苦恼；使痛苦","v.",["使苦恼"],["sting-cause-distress"],"He was stung by their refusal to help.","他们拒绝帮忙，这使他很痛苦。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sting"],
      ["goad","刺激；激励","n.",["刺激"],["sting-goad-incitement"],"He needed the sting of competition to perform at his best.","他需要竞争的刺激才能发挥出最佳水平。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sting"],
      ["smart","引起刺痛；感到刺痛","v.",["引起刺痛","感到刺痛"],["sting-painful-wound"],"Sweat stung her eyes as she climbed the last flight of stairs.","她爬最后一段楼梯时，汗水刺得眼睛生疼。",null,"https://dictionary.cambridge.org/dictionary/english/sting"],
      ["stinger","（昆虫等的）毒刺","n.",["毒刺"],["venom-injecting-point"],"The diagram shows the sting at the tip of the insect's abdomen.","图中标出了昆虫腹部末端的毒刺。",null,"https://dictionary.cambridge.org/dictionary/english/sting"],
      ["police-operation","诱捕行动；设圈套侦查","n.",["诱捕行动","设圈套侦查"],["undercover-police-operation"],"An undercover sting led police to the stolen paintings.","一次卧底诱捕行动使警方找到了被盗画作。",null,"https://dictionary.cambridge.org/dictionary/english/sting"],
      ["overcharge","向…索取过高费用；狠敲一笔","vt.",["索取过高费用","狠敲一笔"],["overcharge-customer"],"The hotel stung us for an extra forty pounds to park overnight.","酒店额外收了我们四十英镑的过夜停车费，真够宰人的。","sting someone for an amount","https://dictionary.cambridge.org/dictionary/english/sting"]
    ], [
      {"terms":["讽刺"],"decision":"scope-excluded","reason":"核对条目中 sting 没有“讽刺”这一独立义项，只有“讽刺短诗结尾的警句”这一冷僻用法；本批不设。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/sting"}
    ]);
    entry("fur", [
      ["animal-coat","毛皮；软毛","n.",["毛皮"],["fur-animal-coat"],"The fox's thick fur protects it from the cold wind.","狐狸浓密的毛抵御着寒风。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/fur"],
      ["line-with-pelt","用毛皮衬（或镶）","v.",["以毛皮制作"],["fur-line-with-pelt"],"The heavy cloak was furred inside to keep out the wind.","这件厚斗篷内侧用毛皮衬着以挡风。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/fur"],
      ["scale-deposit","生水垢；积垢","v.",["使生水垢","积水垢"],["fur-scale-deposit"],"The kettle furred up quickly because the water here is hard.","这里的水硬，水壶很快就积了水垢。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/fur"]
    ], [
      {"terms":["使生苔","生苔"],"decision":"scope-excluded","reason":"核对条目中 fur 的动词义指覆盖毛皮或毛皮状覆盖层（如水垢），未列“生苔”义；旧译保留追溯，不设义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/fur"}
    ]);
    entry("paw", [
      ["animal-foot","爪子；脚掌","n.",["爪"],["paw-animal-foot"],"The dog hurt its front paw on the broken glass.","狗的前爪被碎玻璃弄伤了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/paw"],
      ["human-hand","（戏谑或贬义）手","n.",["手"],["paw-human-hand"],"Get your dirty paws off my books before you tear a page.","把你的脏手从我的书上拿开，别撕破书页。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/paw"],
      ["scrape-with-foot","用爪子抓（或扒、推）","v.",["用爪子抓","向...乱抓","以蹄扒地","拼命抓"],["paw-scrape-with-foot"],"The cat pawed at the door until somebody opened it.","猫不停地用爪子扒门，直到有人把它打开。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/paw"],
      ["rummage","乱翻；笨拙地拨弄","v.",["笨拙地使用"],["paw-rummage-clumsily"],"He pawed through the drawer looking for his keys.","他在抽屉里乱翻，找他的钥匙。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/paw"]
    ], [
      {"terms":["费力地前进"],"decision":"scope-excluded","reason":"核对条目中 paw 并无“费力前进”义，该旧译未获词典支持，本批不设义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/paw"}
    ]);
    entry("ivory", [
      ["tusk","象牙","n.",["象牙"],["ivory-elephant-tusk"],"The museum displays an ivory carving beside a sign explaining threats to elephants.","博物馆展出一件象牙雕刻，旁边的说明牌介绍了大象面临的威胁。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/ivory"],
      ["cream-colour-noun","乳白色；象牙色","n.",["乳白色"],["ivory-cream-colour"],"The walls were painted a soft ivory that caught the morning light.","墙被刷成柔和的乳白色，映着晨光。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/ivory"],
      ["made-of-tusk","象牙制的","adj.",["象牙制的"],["ivory-made-of-tusk"],"An ivory comb lay on the dressing table.","梳妆台上放着一把象牙梳子。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/ivory"],
      ["cream-coloured","乳白色的；象牙色的","adj.",["乳白色的"],["ivory-cream-coloured"],"She wore an ivory silk dress to the ceremony.","她在典礼上穿了一条乳白色的丝裙。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/ivory"]
    ]);
    entry("saddle", [
      ["rider-seat","马鞍；鞍","n.",["鞍","马鞍"],["saddle-rider-seat"],"He tightened the saddle before leading the horse outside.","他紧了紧马鞍，然后把马牵了出去。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/saddle"],
      ["vehicle-seat","车座；鞍形物","n.",["车座","鞍状物"],["saddle-vehicle-seat"],"The bicycle saddle was far too high for a child.","这个自行车座对孩子来说太高了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/saddle"],
      ["put-on-saddle","给（马等）装鞍；备鞍","v.",["装以马鞍"],["saddle-put-on-saddle"],"She saddled the mare in the dark and rode off.","她摸黑给母马备好鞍，骑上走了。",null,"https://www.collinsdictionary.com/dictionary/english/saddle"],
      ["burden","使负担；使承担","v.",["使负担"],["saddle-burden-someone"],"The new rules saddled small firms with extra paperwork.","新规定给小公司增加了额外的文书负担。","saddle sb with sth","https://api.dictionaryapi.dev/api/v2/entries/en/saddle"],
      ["mount","跨上马鞍；上马","vi.",["跨上马鞍"],["mount-horse"],"The riders saddled up at sunrise and followed the river east.","骑手们日出时上马，沿河向东行进。","saddle up","https://www.collinsdictionary.com/dictionary/english/saddle"]
    ]);
    entry("tortoise", [
      ["land-reptile","陆龟；龟","n.",["龟"],["tortoise-land-reptile"],"The tortoise slowly crossed the road towards the grass.","那只陆龟慢慢穿过马路，爬向草地。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tortoise"]
    ], [
      {"terms":["行动迟缓的人"],"decision":"scope-excluded","reason":"核对条目只列 tortoise 的动物义；旧译“行动迟缓的人”是汉语比喻延伸，未见于条目，本批不设义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/tortoise"}
    ]);
    entry("catalyst", [
      ["chemical-catalyst","催化剂","n.",["触媒","接触剂","催化剂"],["catalyst-chemical-reaction"],"A catalyst speeds up the reaction without being used up itself.","催化剂能加快反应，而自身不会被消耗。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/catalyst"],
      ["driver-of-change","促进因素；刺激因素","n.",["刺激因素","促进因素"],["catalyst-driver-of-change"],"The exhibition became a catalyst for change in the town.","这场展览成了小镇变革的促进因素。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/catalyst"]
    ]);
    entry("microbe", [
      ["microorganism","微生物（尤指病菌）","n.",["微生物","病菌"],["microbe-microorganism"],"Some microbes in the soil break down dead leaves.","土壤中的一些微生物会分解枯叶。",null,"https://www.collinsdictionary.com/dictionary/english/microbe"]
    ], [
      {"terms":["细菌"],"decision":"context-required","reason":"microbe 泛指微生物，尤其可指致病细菌；不能把所有微生物都等同于细菌。","source":"https://www.collinsdictionary.com/dictionary/english/microbe"}
    ]);
    entry("metabolic", [
      ["of-metabolism","新陈代谢的；代谢的","adj.",["新陈代谢的","代谢的"],["metabolic-body-chemistry"],"Regular exercise can improve metabolic health in older adults.","规律锻炼能改善老年人的代谢健康。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/metabolic"]
    ], [
      {"terms":["变化的","变形的"],"decision":"scope-excluded","reason":"条目虽列“与变态、变化有关”的罕用义，但现代英语几乎不用；旧译保留追溯，本批只训练“新陈代谢的”这一常用义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/metabolic"}
    ]);
    entry("functional", [
      ["of-function","功能的；机能的","adj.",["功能的","机能的","官能的"],["functional-of-function"],"The two brain regions have quite different functional roles.","这两个脑区的功能作用相当不同。",null,"https://dictionary.cambridge.org/dictionary/english/functional"],
      ["in-working-order","正常运转的；可用的","adj.",["正常运转的","可用的"],["functional-in-working-order"],"The heating system is old but still functional.","暖气系统很旧，但仍能正常使用。",null,"https://dictionary.cambridge.org/dictionary/english/functional"],
      ["practical","实用的；重功能的","adj.",["实用的","重功能的"],["practical-useful-design"],"The hostel's furniture was plain and functional, with storage under every bed.","旅舍家具朴素实用，每张床下都有储物空间。",null,"https://dictionary.cambridge.org/dictionary/english/functional"]
    ]);
    entry("experimental", [
      ["based-on-experiment","实验的；以实验为基础的","adj.",["实验的","根据实验的"],["experimental-based-on-experiment"],"Chemistry is an experimental science, learned mainly in the laboratory.","化学是一门实验科学，主要在实验室里学习。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/experimental"],
      ["trial-exploratory","试验性的；探索性的","adj.",["试验性的","探索性的"],["experimental-trial-exploratory"],"The band's experimental sound divided fans who had loved their old style.","这支乐队试验性的音乐让歌迷分成了两派。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/experimental"]
    ]);
    entry("optimal", [
      ["best-possible","最佳的；最理想的；最优的","adj.",["最佳的","最理想的","最优的"],["optimal-best-possible"],"The team tested several settings to find the optimal temperature for this experiment.","研究团队测试了几种设置，以找出最适合本次实验的温度。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/optimal"]
    ]);
    entry("minimal", [
      ["smallest-amount","最小的；最低限度的；极微的","adj.",["最小的","极微的","最小限度的","最低的"],["minimal-smallest-amount"],"The damage was minimal, so no repairs were needed.","损坏极小，因此无需修理。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/minimal"],
      ["simple-style","极简的（形式简单的）","adj.",["极简的","形式简单的"],["minimal-simple-style"],"The room was furnished in a minimal style: one chair, one table.","房间以极简风格布置：一把椅子，一张桌子。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/minimal"]
    ]);
    entry("substantial", [
      ["large-amount","大量的；可观的","adj.",["大量的","可观的"],["substantial-large-amount"],"A substantial number of students walk to school every day.","相当多的学生每天步行上学。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/substantial"],
      ["real-not-illusion","真实存在的；有形的（正式）","adj.",["真实存在的","物质的"],["substantial-real-material"],"In the story, the ghost becomes substantial enough to lift a chair.","在这个故事里，幽灵获得了实体，甚至能够举起一把椅子。",null,"https://www.collinsdictionary.com/dictionary/english/substantial"],
      ["solid-build","结实的；坚固的","adj.",["结实的"],["substantial-solid-build"],"The bridge rests on substantial stone piers built in 1750.","这座桥架在建于1750年的坚固石墩上。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/substantial"],
      ["filling-meal","丰盛的；能填饱肚子的（食物）","adj.",["丰盛的","有内容的"],["substantial-filling-meal"],"We wanted a substantial breakfast before the long drive.","长途开车前，我们想吃一顿丰盛的早餐。",null,"https://www.collinsdictionary.com/dictionary/english/substantial"],
      ["general-agreement","大体上的；主要方面的（正式）","adj.",["实质上的","大体上的"],["general-essential-agreement"],"The two teams reached substantial agreement, although a few details remained unsettled.","两队在主要方面达成了一致，不过仍有几个细节尚未敲定。","substantial agreement","https://dictionary.cambridge.org/dictionary/english/substantial"]
    ], [
      {"terms":["重要材料(或事物)","有实际价值的东西"],"decision":"restricted-verified","reason":"条目确实列有名词义“实质部分、要旨”，但现代英语极少使用，且与形容词义区分度低；本批只训练形容词义项，旧译保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/substantial"}
    ]);
    entry("synthesise", [
      ["chemical-combine","合成；使合成（物质）","v.",["合成","用合成法合成","接合"],["synthesise-chemical-combine"],"Plants use energy from sunlight to synthesise sugars from carbon dioxide and water.","植物利用阳光提供的能量，由二氧化碳和水合成糖。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/synthesise"],
      ["combine-findings","综合；整合（信息、观点）","v.",["vi. 综合","综合地处理"],["synthesise-combine-findings"],"The essay synthesises findings from four separate studies.","这篇文章综合了四项独立研究的发现。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/synthesise"]
    ]);
    entry("formation", [
      ["coming-into-being","形成；产生","n.",["形成"],["formation-coming-into-being"],"The formation of ice crystals depends on temperature and dust.","冰晶的形成取决于温度和尘埃。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/formation"],
      ["structure-shape","构造；结构","n.",["构造","结构"],["formation-structure-shape"],"The strange rock formation along the cliff is made of soft sandstone.","悬崖沿线那处奇特的岩石构造由软砂岩构成。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/formation"],
      ["troop-arrangement","编队；队形","n.",["编队"],["formation-troop-arrangement"],"The geese flew in a V formation above the frozen lake.","雁群在结冰的湖面上空排成V字形队形飞行。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/formation"]
    ]);
    entry("lecture", [
      ["talk","讲座；演讲（大学授课）","n.",["演讲","讲演","讲座"],["academic-talk","formal-address"],"Professor Hale opened his lecture on volcanoes with a short video.","黑尔教授用一段短片开始了他的火山讲座。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/lecture"],
      ["scolding-n","训斥；告诫","n.",["训诫"],["scolding-rebuke"],"My uncle gave me a long lecture about saving money.","我叔叔就攒钱的事长篇大论地教训了我一顿。","give sb a lecture","https://api.dictionaryapi.dev/api/v2/entries/en/lecture"],
      ["teach","讲课；开讲座","v.",["讲授"],["university-teaching"],"She lectures in economics at a small college near the coast.","她在海岸附近的一所小型学院讲授经济学。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/lecture"],
      ["scold-v","训斥；说教","v.",["谴责","说教"],["reproach-verb"],"The coach lectured the team for twenty minutes after the defeat.","失利之后，教练训了球队二十分钟。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/lecture"]
    ], [
      {"terms":["讲稿"],"decision":"scope-excluded","reason":"旧词库的“讲稿”指讲演所用的书面文稿；本次核对的条目中 lecture 作名词只指演讲或讲座这一活动，未列“讲稿”义，故不设为学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/lecture"}
    ]);
    entry("literature", [
      ["literary-works","文学；文学作品","n.",["文学","文学作品"],["literary-writing"],"She studied French literature at university before becoming a translator.","她上大学时学的是法国文学，后来当了翻译。",null,"https://dictionary.cambridge.org/dictionary/english/literature"],
      ["research-papers","文献；研究资料","n.",["文献","研究资料"],["academic-publications"],"The literature on sleep and memory has grown enormously in the past decade.","过去十年间，有关睡眠与记忆的研究文献大量增加。","the literature on sth","https://dictionary.cambridge.org/dictionary/english/literature"],
      ["promotional-information","宣传印刷品；产品说明资料","n.",["宣传印刷品","产品说明资料"],["promotional-printed-material"],"The assistant gave us literature comparing the company's home insurance plans.","工作人员给了我们介绍并比较该公司住房保险方案的宣传资料。",null,"https://dictionary.cambridge.org/dictionary/english/literature"]
    ]);
    entry("librarian", [
      ["library-keeper","图书馆员；图书管理员","n.",["图书馆员","图书管理员"],["library-staff"],"The librarian helped me find two old maps in the basement.","图书管理员帮我在地下室找到了两张旧地图。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/librarian"]
    ]);
    entry("fiction", [
      ["imaginative-prose","小说；虚构文学作品","n.",["小说"],["imaginative-prose"],"He reads crime fiction on the train every morning.","他每天早上在火车上读犯罪小说。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/fiction"],
      ["fabrication","虚构；捏造的说法","n.",["虚构故事","虚构的事实","捏造"],["invented-falsehood"],"His account of the missing keys turned out to be pure fiction.","他关于钥匙丢失的说法后来被证明纯属编造。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/fiction"]
    ], [
      {"terms":["拟制"],"decision":"scope-excluded","reason":"旧词库的“拟制”是法律术语 legal fiction（法律上把某事实视为存在）；本次核对条目虽提到 legal fiction，但属专业法律义，本批不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/fiction"}
    ]);
    entry("encyclopedia", [
      ["reference-work","百科全书","n.",["百科全书"],["comprehensive-reference-work"],"The old encyclopedia on the shelf still has a volume missing.","书架上那套旧百科全书仍然缺一卷。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/encyclopedia"]
    ]);
    entry("diary", [
      ["journal","日记；日记簿","n.",["日记","日记簿"],["personal-journal"],"She wrote three lines in her diary before switching off the light.","她关灯前在日记里写了三行字。","keep a diary","https://api.dictionaryapi.dev/api/v2/entries/en/diary"],
      ["appointment-book","日程记事本；记事簿","n.",["日程簿","记事本"],["appointment-scheduler"],"I checked my diary and found the meeting had moved to Thursday.","我查了记事本，发现会议改到了星期四。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/diary"]
    ]);
    entry("poetry", [
      ["verse","诗；诗歌（总称）","n.",["诗","韵文","诗歌艺术"],["verse-literature"],"Her poetry has been translated into more than ten languages.","她的诗歌已被译成十多种语言。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/poetry"],
      ["poetic-quality","诗意；优美动人的特质","n.",["诗意"],["aesthetic-grace"],"The dancer's movement across the stage was pure poetry.","那位舞者在舞台上的动作充满诗意。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/poetry"]
    ]);
    entry("documentary", [
      ["factual-film","纪录片","n.",["记录片"],["factual-film"],"The documentary follows four families through a year of drought.","这部纪录片跟拍了四个家庭在干旱一年里的经历。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/documentary"],
      ["document-related","文件的；文书的","a.",["文件的"],["document-based"],"Documentary evidence must be submitted with the application form.","申请时须随表提交书面证据。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/documentary"],
      ["factual-style","纪实的；客观记录的","a.",["纪实的"],["objective-recording"],"The film blends documentary footage with interviews shot last winter.","这部影片把纪实影像与去年冬天拍摄的访谈交织在一起。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/documentary"]
    ]);
    entry("draft", [
      ["first-version","草稿；草案","n.",["草稿","草案"],["preliminary-version"],"Her first draft was twice as long as the final report.","她的初稿长度是最终报告的两倍。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/draft"],
      ["air-current","气流；穿堂风","n.",["气流"],["cold-air-current"],"A cold draft came under the door and chilled my feet.","一股冷风从门底下钻进来，冻得我脚发凉。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/draft"],
      ["payment-order","汇票；付款凭单","n.",["汇票"],["bill-of-exchange"],"Payment was made by draft drawn on a bank in London.","款项是以一张伦敦银行开出的汇票支付的。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/draft"],
      ["conscription","（美）征兵制；征召","n.",["征兵"],["military-conscription"],"He left the country in 1968 to avoid the draft.","1968 年他离开本国以逃避征兵。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/draft"],
      ["compose","起草；草拟","v.",["起草"],["write-preliminary-text"],"Two lawyers drafted the contract in a single afternoon.","两位律师用一下午就起草了这份合同。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/draft"],
      ["enlist","征召入伍","vt.",["征召入伍"],["military-conscription"],"He was drafted into the army shortly after leaving college.","他离开大学不久便被征召入伍。","draft someone into the army","https://www.collinsdictionary.com/dictionary/english/draft"],
      ["assign","抽调；选派","vt.",["抽调","选派"],["assign-extra-personnel"],"The council drafted in extra engineers to inspect the damaged bridges.","市议会抽调了更多工程师检查受损桥梁。","draft in / draft into","https://www.collinsdictionary.com/dictionary/english/draft"]
    ]);
    entry("sketch", [
      ["drawing","素描；速写","n.",["素描","速写"],["quick-drawing"],"He made a quick sketch of the harbour before the light faded.","趁天还没黑，他快速画了一幅港口速写。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sketch"],
      ["rough-plan","草图；粗略的方案","n.",["草图"],["rough-outline"],"The architect showed us a rough sketch of the new library.","建筑师给我们看了新图书馆的草图。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sketch"],
      ["comic-scene","小品；幽默短剧","n.",["小品"],["short-comic-scene"],"The show ends with a funny sketch about two lost tourists.","演出以一个关于两名迷路游客的搞笑短剧收尾。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sketch"],
      ["draw","画素描；画速写","v.",["画素描或速写"],["draw-hastily"],"She sketched the sleeping cat in the margin of her notebook.","她在笔记本页边速写了那只睡着的猫。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sketch"],
      ["outline","概述；简述","v.",["描绘略图"],["summarize-briefly"],"He sketched the main events of the case in a few sentences.","他用几句话概述了案件的主要经过。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sketch"]
    ]);
    entry("gizmo", [
      ["gadget","小装置；小玩意儿","n.",["小发明","小玩意儿"],["unspecified-device"],"This little gizmo opens stubborn jars in seconds.","这个小玩意儿几秒钟就能打开拧不开的罐子。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/gizmo"]
    ]);
    entry("innovator", [
      ["creator","创新者；革新者","n.",["创新者","改革者"],["creator-of-new-ideas"],"The company was founded by an innovator who hated paperwork.","这家公司由一位讨厌文书工作的创新者创立。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/innovator"],
      ["early-adopter","率先采用新事物的人","n.",["先行采用者"],["first-user-of-novelty"],"Early innovators paid a high price for the first home computers.","最早的采用者为第一代家用电脑付出了高昂代价。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/innovator"]
    ]);
    entry("calculator", [
      ["device","计算器","n.",["计算器"],["calculating-machine"],"Students may not use a calculator during the first part of the exam.","考试第一部分学生不得使用计算器。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/calculator"],
      ["person","计算者；核算员","n.",["计算者"],["person-who-computes"],"In the 1930s a team of calculators checked each table by hand.","20 世纪 30 年代，一队计算员手工核对每一张表格。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/calculator"]
    ]);
    entry("microcomputer", [
      ["small-computer","微型计算机；微机","n.",["微电脑","微机","微型计算机","微计算机"],["microprocessor-computer"],"The lab's first microcomputer had only sixty-four kilobytes of memory.","实验室的第一台微型计算机只有六十四千字节内存。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/microcomputer"]
    ]);
    entry("loudspeaker", [
      ["transducer","扬声器；喇叭","n.",["扩音器","喇叭","扬声器"],["sound-transducer"],"A crackly loudspeaker announced the delay to every platform.","一个沙沙作响的喇叭向每个站台播报了晚点消息。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/loudspeaker"],
      ["enclosure","音箱；扬声器箱","n.",["音箱"],["speaker-cabinet"],"Two tall loudspeakers stood on either side of the stage.","两个高高的音箱立在舞台两侧。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/loudspeaker"]
    ]);
    entry("byproduct", [
      ["secondary-product","副产品","n.",["副产品"],["incidental-product"],"Sawdust is a byproduct of cutting timber into boards.","锯末是把木材锯成板材时产生的副产品。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/by-product"],
      ["side-effect","附带结果；意外的副作用","n.",["附带结果"],["unintended-consequence"],"Traffic jams are a byproduct of free parking in the city centre.","交通拥堵是市中心免费停车带来的附带后果。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/by-product"]
    ]);
    entry("high-definition", [
      ["high-resolution","高清晰度的；高清的","a.",["非常鲜明的","高清晰度的"],["high-resolution-image"],"She watched the match on a high-definition screen at the gym.","她在健身房的高清屏幕上看了这场比赛。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/high%20definition"]
    ]);
    entry("domain", [
      ["field","领域；范围（知识或活动）","n.",["领域","范围"],["field-of-expertise"],"Tax law is not really my domain, so ask a specialist.","税法不算是我的领域，去问专家吧。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/domain"],
      ["territory","领地；领土","n.",["领地","势力范围"],["controlled-territory"],"The duke's domain stretched from the river to the northern hills.","公爵的领地从河边一直延伸到北面的丘陵。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/domain"],
      ["dns-name","域名；（计算机网络的）域","n.",["域名","域"],["internet-domain-name"],"The club finally registered a shorter domain for its website.","俱乐部终于为网站注册了一个更短的域名。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/domain"],
      ["math-domain","定义域（数学）","n.",["定义域"],["function-input-set"],"The function has no value at zero, so zero lies outside its domain.","该函数在零处没有取值，因此零不在其定义域内。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/domain"]
    ]);
    entry("usage", [
      ["manner","用法；使用方式","n.",["用法","使用","使用用途","使用情况"],["manner-of-use"],"The manual explains the correct usage of each cleaning product.","说明书写明了每种清洁用品的正确用法。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/usage"],
      ["amount-used","使用量；消耗量","n.",["使用量","用量"],["usage-consumption-amount"],"Household water usage rose sharply during the three-week heatwave.","在三周的热浪期间，家庭用水量急剧上升。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/usage"],
      ["convention","惯用法；约定俗成的用法","n.",["惯用法","习惯","惯例"],["accepted-practice"],"British usage prefers at the weekend to on the weekend.","英式惯用法说 at the weekend，而不说 on the weekend。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/usage"]
    ], [
      {"terms":["习惯法"],"decision":"scope-excluded","reason":"旧词库的“习惯法”是法律术语（customary law），本次核对条目未列此义，且与 usage 的常用义无关，故不设为学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/usage"}
    ]);
    entry("estimate", [
      ["calculate","估计；估算","v.",["估计","估算","估价"],["rough-calculation"],"Engineers estimate that the bridge will take three years to build.","工程师估计这座桥需要三年建成。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/estimate"],
      ["judge","判断；评价","v.",["判断","评价"],["form-opinion-of"],"She estimated him to be about forty, though he looked older.","她估计他四十岁上下，虽然他看上去更老。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/estimate"],
      ["rough-figure","估计；估计值","n.",["估计值"],["approximate-figure"],"The final cost was far above the original estimate.","最终费用远远超出最初的估算。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/estimate"],
      ["quotation","估价单；报价单","n.",["估价单"],["cost-quotation-document"],"The builder sent an estimate for the roof repairs.","建筑商寄来了屋顶维修的报价单。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/estimate"]
    ]);
    entry("pagoda", [
      ["tiered-temple","宝塔；佛塔","n.",["宝塔"],["tiered-tower-temple"],"A stone pagoda stands at the top of the hill.","山顶上矗立着一座石塔。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/pagoda"]
    ]);
    entry("slave", [
      ["enslaved-person","奴隶","n.",["奴隶"],["person-held-in-servitude"],"The novel describes how a slave escaped from a cotton farm.","这部小说讲述了一名奴隶如何从棉花农场逃走。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/slave"],
      ["dependent","受…支配的人；…的奴隶","n.",["受支配者"],["person-controlled-by-habit"],"He is a slave to his phone and checks it every minute.","他完全被手机支配，每分钟都要看一眼。","a slave to sth","https://api.dictionaryapi.dev/api/v2/entries/en/slave"],
      ["toil","拼命干；苦干","v.",["拼命工作"],["exhausting-labour"],"She slaved over the stove all afternoon to feed twelve guests.","她整个下午在灶台前忙活，为十二位客人做饭。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/slave"],
      ["subordinate-device","从设备；从动装置（旧技术称谓）","n.",["从动装置","从设备"],["master-slave-device"],"The manual for the old computer labels the second hard drive as the slave.","这台老电脑的手册将第二块硬盘标为“从盘”。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/slave"]
    ], [
      {"terms":["卑鄙的人"],"decision":"scope-excluded","reason":"旧词库的“卑鄙的人”对应条目里的 abject person/wretch，是古旧且带强烈贬义的口语用法，与现代 slave（奴隶）常用义不同，本批不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/slave"}
    ]);
    entry("inhabitant", [
      ["resident","居民；居住者","n.",["居民","居住者"],["place-resident"],"Only forty inhabitants remain on the island during winter.","冬季岛上只剩下四十名居民。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/inhabitant"]
    ]);
    entry("inhabit", [
      ["dwell","居住于；栖息于","v.",["居住于","栖息"],["live-in-place"],"Rare bats inhabit the caves along this stretch of coast.","这一带海岸的洞穴里栖息着稀有蝙蝠。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/inhabit"],
      ["occupy","存在于；占据（空间或思想）","v.",["占据"],["pervade-a-space"],"Old fears still inhabit the back of her mind.","旧的恐惧仍盘踞在她心底。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/inhabit"]
    ]);
    entry("pot", [
      ["vessel","锅；罐；壶；盆（容器）","n.",["盆","罐","壶","锅"],["cooking-vessel"],"Let the soup simmer in a covered pot for an hour.","让汤在盖着盖的锅里炖一个小时。",null,"https://www.vocabulary.com/dictionary/pot"],
      ["flowerpot","花盆","n.",["花盆"],["plant-container"],"Move the fern into a bigger pot before its roots get crowded.","在根长满之前，把蕨类移进大一点的花盆。",null,"https://www.vocabulary.com/dictionary/pot"],
      ["plant","把（植物）栽入盆中","v.",["装入盆中"],["put-plant-in-container"],"She potted the young tomato plants on the balcony.","她把番茄幼苗栽进了阳台上的花盆。",null,"https://www.collinsdictionary.com/dictionary/english/pot"],
      ["preserve","把（食品等）装罐保存","vt.",["装罐保存"],["preserve-food-in-container"],"They potted the cooked meat in small jars for the journey.","他们把熟肉装进小罐保存，留待旅途中食用。",null,"https://www.collinsdictionary.com/dictionary/english/pot"],
      ["money-pool","共同资金；赌注总额；奖金池","n.",["共同资金","赌注总额","奖金池"],["pooled-money"],"Everyone added a few pounds to the pot to pay for the farewell gift.","大家各往公共资金里添了几英镑，用来买告别礼物。",null,"https://www.collinsdictionary.com/dictionary/english/pot"],
      ["pocket-ball","把（台球）击入球袋","vt.",["把球击入袋"],["pocket-billiard-ball"],"She potted the red ball but left herself a difficult next shot.","她把红球打进袋里，却给下一杆留下了难局。","pot a ball","https://www.collinsdictionary.com/dictionary/english/pot"],
      ["potful","一壶；一锅；一罐（的量）","n.",["一壶的量","一锅的量"],["containerful-quantity"],"A single pot of soup fed all six of us after the walk.","步行结束后，一锅汤就够我们六个人吃了。","a pot of","https://www.collinsdictionary.com/dictionary/english/pot"]
    ], [
      {"terms":["随手射击"],"decision":"context-required","reason":"旧例句实际使用复合词 pot shot，不能把整个短语的释义视为 pot 单词的普通名词义；狩猎中的射击用法不列入本批训练。","source":"https://www.collinsdictionary.com/dictionary/english/pot"},
      {"terms":["奖杯"],"decision":"restricted-verified","reason":"Collins 核实英式非正式 pot 可指奖杯，属受限用法；本批主要训练容器、奖金池和台球等常用语境，不再声称词典未列。","source":"https://www.collinsdictionary.com/dictionary/english/pot"},
      {"terms":["在锅中煮"],"decision":"restricted-verified","reason":"Collins 确有在锅中煮的动词义；本批不训练这一较少用法，不再声称不存在。","source":"https://www.collinsdictionary.com/dictionary/english/pot"},
      {"terms":["坩埚"],"decision":"context-required","reason":"熔炼容器可称 melting pot；不能把日常容器例句当作专业坩埚义的证据。","source":"https://www.collinsdictionary.com/dictionary/english/pot"}
    ]);
    entry("ford", [
      ["crossing","浅滩；可涉水而过处","n.",["浅滩"],["shallow-river-crossing"],"The old ford is too deep to cross after heavy rain.","大雨过后，那处旧浅滩水深得无法通过。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/ford"],
      ["wade","涉水而过","v.",["涉过","涉水"],["wade-across-water"],"They forded the stream where it widened near the mill.","他们在磨坊附近河面变宽的地方涉水过了溪。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/ford"]
    ], [
      {"terms":["福特汽车"],"decision":"scope-excluded","reason":"“福特汽车”是专有名词 Ford（汽车品牌名），与普通名词 ford（浅滩）无关，本批只收普通名词与动词义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/ford"}
    ]);
    entry("tape", [
      ["adhesive","胶带；带子","n.",["带子","带"],["adhesive-strip"],"Wrap the parcel with tape before you take it downstairs.","把包裹用胶带封好再拿下楼。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tape"],
      ["magnetic","磁带；录音带","n.",["录音带","磁带"],["magnetic-recording-medium"],"My grandfather still keeps interviews on tape in a shoebox.","我祖父还把访谈录在磁带里，收在一个鞋盒中。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tape"],
      ["measuring","卷尺","n.",["卷尺"],["measuring-tape"],"The carpenter measured the gap with a steel tape.","木匠用钢卷尺量了缝隙。",null,"https://www.vocabulary.com/dictionary/tape"],
      ["stick","用胶带粘贴；捆扎","v.",["以带子绑起"],["fasten-with-tape"],"He taped the notice to the glass door of the shop.","他把通知用胶带贴在商店的玻璃门上。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tape"],
      ["record","录音；录制","v.",["录音"],["record-audio-video"],"They taped the interview in a quiet room upstairs.","他们在楼上安静的房间里录了这次访谈。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tape"]
    ], [
      {"terms":["测量"],"decision":"scope-excluded","reason":"旧词库把 tape 释为“测量”；核对条目中 tape 作动词只有粘贴与录制义，表示测量要用 measure 或 tape measure 短语，故不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/tape"},
      {"terms":["窄带"],"decision":"scope-excluded","reason":"“窄带”是通信术语 narrowband，与 tape（带子、磁带）不是同一概念，疑为旧词库把 band 误作 tape，本批不收录。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/tape"}
    ]);
    entry("cassette", [
      ["audio-cassette","盒式磁带","n.",["盒式磁带"],["audio-tape-case"],"He found an old cassette of his mother singing in 1985.","他找到一盘母亲 1985 年唱歌的老磁带。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cassette"],
      ["film-cassette","暗盒；胶卷盒","n.",["暗盒"],["lightproof-film-container"],"The photographer checked the film cassette before loading the camera.","摄影师在给相机装胶卷前检查了胶卷盒。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cassette"]
    ], [
      {"terms":["珠宝箱","字盒"],"decision":"scope-excluded","reason":"“珠宝箱”是法语 cassette 的借义，“字盒”是旧印刷术语（排字用的活字盒）；现代英语均已不用，本次核对条目也未列，故不设为义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/cassette"}
    ]);
    entry("audio", [
      ["sound-signal","音频；声音信号","n.",["声频"],["sound-signal"],"The audio on this recording is too faint to transcribe.","这段录音的音频太弱，无法转写。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/audio"],
      ["sound-related","音频的；声音的","a.",["音频的","声音的"],["sound-related"],"She downloaded the audio version of the novel for the drive.","她下载了这部小说的有声版，好在开车时听。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/audio"]
    ]);
    entry("gear", [
      ["cogwheel","齿轮","n.",["齿轮"],["toothed-wheel"],"One gear in the clock had worn down and stopped turning.","钟里有一个齿轮磨损了，不再转动。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/gear"],
      ["gear-ratio","挡位；排挡","n.",["排挡","挡位"],["transmission-position"],"Change to a lower gear before the road climbs steeply.","在道路开始陡坡前换到低挡。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/gear"],
      ["equipment","装备；用具","n.",["工具","装备"],["outdoor-equipment"],"Climbing gear filled the back of the van.","货车后部装满了登山装备。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/gear"],
      ["adapt","使适应；针对…而设计","v.",["使适应","适合","安排"],["adapt-to-purpose"],"The course is geared towards students with no science background.","这门课针对没有理科基础的学生设计。","gear sth to/towards sth","https://api.dictionaryapi.dev/api/v2/entries/en/gear"],
      ["mesh","（使）啮合；用齿轮连接","v.",["以齿轮连起","连接上","开动"],["interlock-gears"],"The mechanism gears the two shafts together so that they turn at different speeds.","这个机构用齿轮连接两根轴，使它们以不同速度转动。",null,"https://www.collinsdictionary.com/dictionary/english/gear"]
    ]);
    entry("pope", [
      ["bishop-of-rome","教皇；罗马教皇","n.",["罗马教皇"],["roman-catholic-head"],"The pope addressed a crowd of thousands from the balcony.","教皇在阳台上向数千名群众讲话。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/pope"]
    ], [
      {"terms":["主教"],"decision":"scope-excluded","reason":"“主教”是 bishop 的通用译法；pope 专指罗马主教（教皇），旧词库把两者混同，故不并入本批义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/pope"}
    ]);
    entry("monk", [
      ["monastic","修士；僧侣","n.",["修道士","僧侣","和尚"],["monastic-man"],"A monk opened the gate and led us into the courtyard.","一位修士打开大门，领我们进了院子。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/monk"]
    ]);
    entry("temple", [
      ["shrine","庙宇；神殿；寺院","n.",["庙宇","圣堂"],["worship-building"],"We climbed the steps of the temple just before sunset.","日落前我们登上庙宇的台阶。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/temple"],
      ["head-side","太阳穴","n.",["太阳穴","颞颥","颞部"],["side-of-head"],"A grey streak showed at his temple above the ear.","他耳朵上方的太阳穴处露出一缕灰白的头发。",null,"https://dictionary.cambridge.org/dictionary/english/temple"]
    ], [
      {"terms":["礼拜堂"],"decision":"scope-excluded","reason":"旧词库把 temple 释为“教堂/礼拜堂”；现代英语中基督教教堂通常说 church，temple 指犹太教、印度教或佛教的礼拜场所，故不并入本批义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/temple"},
      {"terms":["鬓角"],"decision":"context-required","reason":"temple 指耳前上方的太阳穴区域；hair at the temples 可说鬓边头发，但 temple 本身不是鬓角头发。","source":"https://dictionary.cambridge.org/dictionary/english/temple"},
      {"terms":["教堂"],"decision":"context-required","reason":"temple 是某些宗教的礼拜建筑，通常译庙宇、神殿；不能泛指一切 church，也不能绝对声称基督教从不使用 temple。","source":"https://dictionary.cambridge.org/dictionary/english/temple"}
    ]);
    entry("priest", [
      ["clergy","祭司；牧师；神父","n.",["祭司","牧师","神父","神质人员","僧侣"],["religious-clergy"],"A priest blessed the boat before it left the harbour.","船离港前，一位神父为它祝福。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/priest"]
    ], [
      {"terms":["泰斗"],"decision":"scope-excluded","reason":"“泰斗”来自 high priest of the arts 一类比喻说法，不是 priest 的词典义项，现代英语也极少这样用，故不收录。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/priest"}
    ]);
    entry("bible", [
      ["scripture","《圣经》","n.",["圣经"],["christian-scripture"],"He reads a page of the Bible every night before bed.","他每晚睡前读一页《圣经》。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bible"],
      ["handbook","权威著作；必备指南","n.",["权威指南"],["authoritative-handbook"],"Her cookbook became the bible of home bakers in the region.","她的食谱书成了这一带家庭烘焙者的必备指南。",null,"https://www.vocabulary.com/dictionary/bible"]
    ]);
    entry("majesty", [
      ["grandeur","雄伟；壮丽；庄严","n.",["雄伟","庄严","威严"],["impressive-grandeur"],"The majesty of the mountains silenced everyone in the bus.","群山的雄伟让车上的人都安静下来。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/majesty"],
      ["royal-title","陛下（对君主的尊称）；王权","n.",["王权","最高权威"],["royal-address"],"The letter was addressed to His Majesty the King.","这封信是写给国王陛下的。","Your/His Majesty","https://www.vocabulary.com/dictionary/majesty"]
    ]);
    entry("lord", [
      ["feudal-master","领主；统治者；老爷","n.",["统治者","领主"],["feudal-master"],"The lord of the manor collected rent from every farmer.","庄园领主向每一户农民收租。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/lord"],
      ["title","勋爵；阁下（英国贵族或法官的头衔）","n.",["阁下","勋爵"],["british-noble-title"],"Lord Ashby spoke for only five minutes in the debate.","阿什比勋爵在辩论中只讲了五分钟。",null,"https://www.vocabulary.com/dictionary/lord"],
      ["domineer","作威作福；摆架子","v.",["作威作福","称王"],["domineering-behaviour"],"He lords it over the interns whenever the manager is away.","经理一走，他就对实习生颐指气使。","lord it over sb","https://api.dictionaryapi.dev/api/v2/entries/en/lord"],
      ["ennoble","封…为贵族（罕用）","v.",["使成贵族"],["grant-noble-title"],"In the historical novel, the king lords a merchant for financing his fleet.","在这部历史小说中，国王因一位商人资助其舰队而封他为贵族。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/lord"],
      ["god","（大写，基督教中）主；上帝；耶稣","n.",["上帝","主"],["deity-god"],"The congregation sang a hymn thanking the Lord for his mercy.","会众唱起赞美诗，感谢主的仁慈。","the Lord","https://dictionary.cambridge.org/dictionary/english/lord"]
    ]);
    entry("throne", [
      ["royal-seat","宝座；王座","n.",["王座"],["royal-seat"],"The throne in the great hall is carved from dark oak.","大厅里的宝座是用深色橡木雕刻成的。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/throne"],
      ["monarchy","王位；王权；君主","n.",["君主","王位","王权"],["monarch-position"],"He came to the throne at the age of nine.","他九岁时登上王位。","come to the throne","https://api.dictionaryapi.dev/api/v2/entries/en/throne"]
    ]);
    entry("wreath", [
      ["garland","花环；花冠；（葬礼用）花圈","n.",["花圈","花环","花冠"],["circular-garland"],"They laid a wreath of white roses at the memorial.","他们在纪念碑前献上一个白玫瑰花圈。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/wreath"],
      ["curl","（烟、雾等的）环状物","n.",["圈状物"],["curling-shape"],"A wreath of smoke hung above the chimney pots.","一缕环状的烟悬在烟囱上方。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/wreath"]
    ], [
      {"terms":["花冠体(细胞核分裂的一时期)"],"decision":"scope-excluded","reason":"“花冠体”是细胞分裂某一时期的旧译名，属细胞学专业义；本次核对条目未列该义，本批不收录。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/wreath"}
    ]);
    entry("ceremony", [
      ["ritual","典礼；仪式","n.",["典礼","仪式"],["formal-ritual-event"],"The opening ceremony began with a drum performance by local children.","开幕式以当地儿童表演的鼓乐开始。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/ceremony"],
      ["etiquette","礼节；礼仪（繁文缛节）","n.",["礼节"],["formal-etiquette"],"The tea was served with great ceremony in the old house.","在老宅里，茶是以极讲究的礼节奉上的。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/ceremony"]
    ]);
    entry("pastime", [
      ["leisure-activity","消遣；娱乐活动","n.",["消遣","娱乐","消遣活动","娱乐活动"],["leisure-pursuit","time-passing"],"Fishing is his favourite pastime on quiet summer evenings by the lake.","钓鱼是他在湖边宁静夏夜最喜欢的消遣。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/pastime"]
    ], [
      {"terms":["游戏"],"decision":"scope-excluded","reason":"旧译“游戏”偏指 game；pastime 指为消磨时间而从事的任何娱乐活动，不限于游戏，故不并入本批义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/pastime"}
    ]);
    entry("commentator", [
      ["news-commentator","（时事）评论员","n.",["评论员","时事评论员","评论家"],["media-pundit","opinion-commentary"],"The political commentator argued that the new tax would hurt small shops.","这位政治评论员认为新税会伤害小商铺。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/commentator"],
      ["sports-commentator","（体育比赛）解说员；实况广播员","n.",["实况广播员","解说员","体育解说员"],["sports-announcer","match-commentary"],"The commentator's voice rose as the striker ran towards the penalty area.","当前锋跑向禁区时，解说员的声音提高了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/commentator"]
    ], [
      {"terms":["注释者"],"decision":"scope-excluded","reason":"旧义“注释者”指为书籍作注的 annotator，属古旧用法；现代 commentator 主要指媒体评论员或赛事解说员。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/commentator"}
    ]);
    entry("golf", [
      ["golf-sport","高尔夫球（运动）","n.",["高尔夫球"],["golf-sport","ball-game"],"She took up golf after retiring and now plays every weekend.","她退休后开始打高尔夫球，现在每个周末都打。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/golf"],
      ["play-golf","打高尔夫球","v.",["打高尔夫球"],["play-golf"],"They golfed together on the coast during their summer holiday.","暑假里他们在海边一起打高尔夫球。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/golf"]
    ]);
    entry("billiards", [
      ["cue-game","台球；桌球","n.",["台球","桌球"],["cue-sport","table-ball-game"],"The hotel basement has a billiards table that guests can use free.","酒店地下室有一张台球桌，客人可以免费使用。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/billiards"]
    ]);
    entry("soccer", [
      ["association-football","足球（英式足球）","n.",["英式足球","足球"],["association-football","team-sport"],"My nephew plays soccer for a local club on Saturday mornings.","我侄子星期六上午为当地一家俱乐部踢足球。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/soccer"]
    ]);
    entry("stride", [
      ["long-step","大步；跨步","n.",["大步"],["long-step"],"He crossed the platform in three long strides and reached the train.","他三大步穿过站台，赶上了火车。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/stride"],
      ["step-length","步幅","n.",["步幅"],["step-distance"],"The runner lengthened her stride on the final bend of the race.","那名跑者在比赛最后一个弯道加大了步幅。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/stride"],
      ["progress","进展；进步","n.",["进步"],["progress-advance"],"The clinic has made great strides in reducing waiting times this year.","这家诊所今年在缩短等候时间方面取得了很大进展。","make strides","https://www.vocabulary.com/dictionary/stride"],
      ["walk-long","大步走；迈大步走","v.",["迈大步走"],["walk-long-steps"],"She strode into the meeting and put the folder on the table.","她大步走进会议室，把文件夹放在桌上。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/stride"],
      ["step-across","跨过；跨越","v.",["跨过","跨"],["step-over"],"The farmer strode over the low wall without slowing down at all.","农夫完全没有减速就跨过了那道矮墙。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/stride"]
    ], [
      {"terms":["步态"],"decision":"scope-excluded","reason":"旧译“步态”对应 gait；核对的条目中 stride 只列“大步/步幅/进展”等义，未把“步态”作为独立义项，故不并入。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/stride"}
    ]);
    entry("toss", [
      ["throw-lightly","抛；掷；扔","v.",["投掷","抛"],["throw-lightly"],"He tossed the keys onto the table and sank into the armchair.","他把钥匙扔到桌上，一屁股坐进扶手椅。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/toss"],
      ["coin-flip","掷硬币决定","v.",["掷钱币决定","掷钱币决定某事"],["coin-flip-decision"],"They tossed a coin to decide who would drive first.","他们掷硬币决定谁先开车。","toss a coin","https://api.dictionaryapi.dev/api/v2/entries/en/toss"],
      ["toss-and-turn","辗转反侧；翻来覆去","v.",["辗转"],["toss-and-turn"],"She tossed and turned all night before the job interview.","面试前一晚她整夜辗转反侧。","toss and turn","https://api.dictionaryapi.dev/api/v2/entries/en/toss"],
      ["pitch-about","摇荡；颠簸；使摇晃","v.",["摇摆","震荡","摇荡","颠簸"],["pitch-about","rock-violently"],"The small boat was tossed about by the waves for several hours.","小船在浪中颠簸了好几个小时。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/toss"],
      ["jerk-head","猛甩（头）","v.",["猛抬"],["jerk-head"],"The horse tossed its head and refused to enter the trailer.","那匹马猛甩一下头，不肯进拖车。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/toss"],
      ["mix-salad","拌；翻动（沙拉）","v.",["拌"],["mix-salad"],"Toss the warm potatoes with oil and herbs before serving.","上桌前把热土豆与油和香草拌匀。","toss a salad","https://api.dictionaryapi.dev/api/v2/entries/en/toss"],
      ["throw-noun","抛；掷（的动作）","n.",["一掷","抛掷"],["single-throw"],"A quick toss sent the ball sailing over the fence.","轻轻一抛，球就飞过了围栏。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/toss"]
    ], [
      {"terms":["使不安"],"decision":"restricted-verified","reason":"“使不安”对应 toss 的书面义“使烦躁、使不安”（agitate），现代口语通常改用 upset 或 disturb，属受限用法，本批不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/toss"},
      {"terms":["被到处扔"],"decision":"scope-excluded","reason":"旧片段是 be tossed about 的被动直译，表示“被抛来抛去”，属于摇荡义的被动形式，不是独立义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/toss"}
    ]);
    entry("knock", [
      ["rap","敲；敲击；敲门","v.",["敲","敲打","敲门","敲击"],["rap-on-surface"],"She knocked twice on the door and waited for an answer.","她敲了两下门，等着回应。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/knock"],
      ["bump","碰撞；撞上","v.",["互撞"],["bump-collide"],"I knocked my elbow against the shelf while reaching for the jar.","我伸手拿罐子时胳膊肘撞到了架子。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/knock"],
      ["criticize","批评；贬低","v.",["攻击"],["criticize-denigrate"],"It is easy to knock a proposal you have never actually read.","批评一个你从未真正读过的提案是很容易的。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/knock"],
      ["rapping-sound","敲击声；敲门声","n.",["敲击声","敲门声"],["rapping-sound"],"A sharp knock at the door interrupted our quiet conversation.","一阵急促的敲门声打断了我们安静的谈话。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/knock"],
      ["setback","打击；挫折","n.",["打击"],["setback-blow"],"The industry took a heavy knock when exports fell last year.","去年出口下降时，该行业遭受了沉重打击。","take a knock","https://api.dictionaryapi.dev/api/v2/entries/en/knock"]
    ]);
    entry("flip", [
      ["turn-over","翻转；翻动","v.",["翻转"],["turn-over"],"He flipped the old record over to play the other side.","他把那张旧唱片翻过来，播放另一面。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/flip"],
      ["toss-flick","轻抛；用指轻弹","v.",["掷","弹","用指轻弹","抛"],["toss-lightly","flick-with-finger"],"She flipped the coin into the air and called heads.","她把硬币弹向空中，喊了正面。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/flip"],
      ["flip-through","快速翻阅","v.",["翻阅"],["browse-pages"],"He flipped through the magazine while waiting for the train.","等火车时他快速翻阅那本杂志。","flip through","https://www.vocabulary.com/dictionary/flip"],
      ["somersault","空翻；筋斗","n.",["空翻","筋斗"],["somersault-rotation"],"The gymnast landed a backward flip and raised both arms.","体操运动员完成了一个后空翻，举起双臂。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/flip"],
      ["flippant","轻率的；无礼的","adj.",["无礼的"],["flippant-disrespectful"],"His flip remark about the accident upset the victim's family.","他对那场事故的轻率言论让受害者家人很难过。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/flip"],
      ["flip-out","（突然）发怒；失控","v.",["发火"],["lose-control-anger"],"She flipped out when she saw the damage to her car.","看到车被损坏，她一下子火冒三丈。","flip out","https://www.vocabulary.com/dictionary/flip"]
    ], [
      {"terms":["轻击","抽打","蹦跳"],"decision":"scope-excluded","reason":"这三个旧译分别指“轻拍/鞭打/蹦跳”，是旧词典对 flip 的罕见或方言释义；现代常用条目以翻转、轻抛、翻阅等为主，故不列为本批义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/flip"}
    ]);
    entry("indoor", [
      ["inside-building","室内的；户内的","adj.",["户内的","室内的"],["inside-building"],"The school built an indoor pool so lessons continue through winter.","学校建了一个室内游泳池，这样冬天也能上课。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/indoor"]
    ]);
    entry("blanket", [
      ["bed-covering","毯子；毛毯","n.",["毛毯","毯子"],["bed-covering"],"She wrapped the sleeping child in a heavy wool blanket.","她把熟睡的孩子裹在厚厚的羊毛毯里。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/blanket"],
      ["covering-layer","覆盖层；厚厚一层","n.",["覆盖层","厚层"],["covering-layer"],"A blanket of snow covered the fields by morning.","到早晨，一层白雪覆盖了田野。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/blanket"],
      ["cover-over","覆盖；掩盖","v.",["掩盖","覆盖"],["cover-over"],"Thick fog blanketed the valley and delayed all morning flights.","浓雾笼罩山谷，导致所有上午航班延误。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/blanket"],
      ["sweeping","全面的；总括的","adj.",["总共的","一揽子"],["all-encompassing"],"The city introduced a blanket ban on smoking in public parks.","该市对公园内吸烟实行全面禁令。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/blanket"]
    ]);
    entry("pillow", [
      ["head-cushion","枕头","n.",["枕头","靠垫"],["head-cushion"],"He fluffed the pillow and turned off the bedside lamp.","他拍了拍枕头，关掉了床头灯。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/pillow"],
      ["rest-head","枕；把…枕在","v.",["作...的枕头","垫","枕于","靠在枕上"],["rest-head-on"],"She pillowed her head on a folded jacket and fell asleep.","她把头枕在叠好的外套上睡着了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/pillow"]
    ], [
      {"terms":["枕状岩"],"decision":"scope-excluded","reason":"“枕状岩”是地质术语 pillow lava（枕状熔岩）的一部分，属专业搭配，不是 pillow 的独立常用义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/pillow"}
    ]);
    entry("candle", [
      ["wax-light","蜡烛","n.",["蜡烛"],["wax-light-source"],"The power failed, so we lit candles and played cards.","停电了，我们点上蜡烛打牌。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/candle"],
      ["inspect-by-light","对着光检查（蛋）","v.",["对着光检查"],["inspect-egg-by-light"],"The farmer candled the eggs to see which ones had developed.","农夫对着光检查鸡蛋，看哪些已经受精发育。","candle eggs","https://api.dictionaryapi.dev/api/v2/entries/en/candle"]
    ]);
    entry("wax", [
      ["waxy-substance","蜡；蜡状物","n.",["蜡","蜡状物"],["waxy-substance"],"Heat the wax gently until it melts, then pour it into a mould.","把蜡慢慢加热至融化，然后倒进模具。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/wax"],
      ["apply-wax","给…上蜡；打蜡","v.",["上蜡于","打蜡"],["apply-wax-polish"],"He waxed the floor every spring to keep the boards protected.","他每年春天给地板打蜡，以保护木板。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/wax"],
      ["increase","变大；增强；（月亮）渐盈","v.",["增加","变大","增大","(月亮)渐盈","月亮渐满"],["grow-increase","moon-waxing"],"Public interest in the old railway waxed as the anniversary approached.","随着纪念日临近，公众对那条老铁路的兴趣日渐浓厚。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/wax"]
    ], [
      {"terms":["一阵发怒"],"decision":"restricted-verified","reason":"英式口语 in a wax 表示“发怒”，只在固定表达中出现且罕用，本批不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/wax"}
    ]);
    entry("broom", [
      ["sweeping-tool","扫帚","n.",["扫帚"],["sweeping-tool"],"She swept the kitchen floor with a stiff broom.","她用一把硬毛扫帚扫了厨房地板。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/broom"],
      ["sweep","扫；扫除","v.",["扫除"],["sweep-clean"],"He broomed the leaves off the path before the guests arrived.","客人到来之前，他把小路上的落叶扫干净了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/broom"],
      ["flowering-shrub","金雀花类灌木","n.",["金雀花"],["yellow-flowered-shrub"],"Yellow broom covered the hillside beside the old quarry.","旧采石场旁的山坡上长满了开黄花的金雀花类灌木。",null,"https://www.collinsdictionary.com/dictionary/english/broom"]
    ]);
    entry("mat", [
      ["floor-mat","垫子；地垫","n.",["垫"],["floor-mat"],"Please wipe your boots on the mat by the front door.","请在前门旁的垫子上擦擦靴子。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/mat"],
      ["picture-border","衬边；画框卡纸","n.",["衬边"],["picture-border-mount"],"The photo looked better once it was placed in a white mat.","照片放进白色衬边后好看多了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/mat"],
      ["tangle","一丛；一团（缠结物）","n.",["丛"],["tangled-mass"],"The cat left a mat of fur on the sofa cushion.","猫在沙发垫上留下了一团缠结的毛。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/mat"],
      ["tangle-up","缠结；使缠结","v.",["纠缠在一起","使缠结"],["tangle-together"],"The ropes matted together after weeks in the rain.","绳子在雨里放了几个星期后缠结在一起。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/mat"],
      ["cover-with-mat","铺垫子于；铺席于","v.",["铺席于...上"],["cover-with-mat"],"Workers matted the muddy entrance with straw before the ceremony.","工人们在仪式前用稻草铺在泥泞的入口处。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/mat"]
    ], [
      {"terms":["粗糙的","无光泽的","使无光泽"],"decision":"scope-excluded","reason":"这三个旧译对应同音异形词 matte（哑光、无光泽），mat 是其异体拼写；本词条按地垫等常用义处理，不并入。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/mat"}
    ]);
    entry("rug", [
      ["floor-rug","小地毯","n.",["小块地毯","小地毯"],["floor-rug"],"A faded rug covered the wooden floor of the cottage.","一块褪色的地毯铺在小屋的木地板上。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/rug"],
      ["blanket-throw","（主要英式）盖毯；旅行毯","n.",["盖毯","厚毛毯","毯子","旅行毯"],["rug-blanket-throw","bed-covering"],"He wrapped a thick rug around his shoulders as the wind rose.","风大起来时，他把一条厚毛毯裹在肩上。",null,"https://www.collinsdictionary.com/dictionary/english/rug"]
    ], [
      {"terms":["揭露某人"],"decision":"scope-excluded","reason":"旧译错误。pull the rug out from under someone 是突然撤走支持或使某人陷入困境，不是揭露某人；rug 单词本身也无此义。","source":"https://dictionary.cambridge.org/dictionary/english/pull-the-rug-carpet-from-under-feet"}
    ]);
    entry("carpet", [
      ["floor-covering","地毯","n.",["地毯"],["floor-carpet"],"The hotel corridor was lined with a thick red carpet.","酒店走廊铺着厚厚的红地毯。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/carpet"],
      ["carpet-like-layer","地毯状覆盖物","n.",["地毯状物"],["carpet-like-cover"],"A carpet of wild flowers stretched across the hillside.","一片野花像地毯一样铺满山坡。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/carpet"],
      ["lay-carpet","给…铺地毯","v.",["铺以地毯"],["install-carpet"],"They carpeted the stairs to reduce noise in the flat.","他们给楼梯铺上地毯，以减少公寓里的噪音。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/carpet"],
      ["cover-thickly","覆盖；铺满","v.",["铺盖"],["cover-thickly"],"Fallen leaves carpeted the path after the storm.","暴风雨过后，落叶铺满了小路。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/carpet"]
    ]);
    entry("steel", [
      ["steel-metal","钢；钢铁；钢制品","n.",["钢","钢铁","钢制品"],["steel-alloy","steel-goods"],"The bridge is built from steel produced in local mills.","这座桥用当地工厂生产的钢材建造。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steel"],
      ["hardness","坚硬；坚韧","n.",["坚硬","坚固"],["hardness-resilience"],"There was steel in his voice as he refused the offer.","他拒绝那个提议时，语气里带着钢铁般的坚定。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steel"],
      ["made-of-steel","钢制的；钢铁业的","adj.",["钢的","钢制的","钢铁业的"],["made-of-steel","steel-industry"],"The steel industry employs thousands of workers in this region.","钢铁业在该地区雇用数千名工人。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steel"],
      ["steely","坚强的；钢铁般的","adj.",["坚强的"],["resolute-strength"],"Her steel determination kept the rescue team searching after dark.","她钢铁般的决心让救援队在天黑后仍继续搜寻。",null,"https://www.collinsdictionary.com/dictionary/english/steel"],
      ["fortify","使坚强；使有决心","v.",["坚强","使坚强","使冷酷"],["fortify-oneself"],"She steeled herself for the difficult conversation with her father.","她硬起心肠，准备和父亲进行那场艰难的谈话。","steel oneself","https://api.dictionaryapi.dev/api/v2/entries/en/steel"]
    ], [
      {"terms":["钢化"],"decision":"scope-excluded","reason":"“钢化”是冶金术语 steelify（把铁炼成钢）的直译，属专业用法，本批不列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/steel"}
    ]);
    entry("brass", [
      ["brass-alloy","黄铜；黄铜制品","n.",["黄铜","黄铜制品"],["brass-alloy","brass-objects"],"The door handles are made of polished brass.","门把手是抛光黄铜做的。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/brass"],
      ["brass-instruments","铜管乐器（总称）","n.",["铜管乐器"],["brass-instruments"],"The brass came in too loudly during the final movement.","在最后一个乐章，铜管乐器声音太响了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/brass"],
      ["made-of-brass","黄铜制的；铜管乐器的","adj.",["黄铜的","铜管乐器的"],["made-of-brass","brass-band"],"A brass band played marches in the town square all afternoon.","一支铜管乐队整个下午在镇广场演奏进行曲。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/brass"],
      ["coat-with-brass","镀黄铜于","v.",["镀以黄铜"],["coat-with-brass"],"The fittings were brassed to resist corrosion near the sea.","这些配件镀了黄铜，以抵御海边的腐蚀。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/brass"],
      ["senior-officials","（非正式）高层人物；高级军官","n.",["高层人物","高级军官"],["senior-leadership"],"The top brass visited the depot but left before the night shift began.","高层人物参观了仓库，但夜班开始前就离开了。","the (top) brass","https://www.collinsdictionary.com/dictionary/english/brass"],
      ["nerve","厚脸皮；厚颜","n.",["厚脸皮","厚颜"],["impudent-boldness"],"He had the brass to ask for a refund after breaking the camera himself.","他自己弄坏了相机，居然还厚着脸皮要求退款。","have the brass to do something","https://www.collinsdictionary.com/dictionary/english/brass"]
    ], [
      {"terms":["支付"],"decision":"scope-excluded","reason":"在核对的词典条目中 brass 没有“支付”义；该旧译可能来自 brass 作“钱”的俚语义的误加动词化，故不采信。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/brass"}
    ]);
    entry("liquor", [
      ["spirits","烈酒；酒","n.",["酒"],["distilled-spirits"],"The bar keeps imported liquor in a locked cabinet.","酒吧把进口烈酒锁在柜子里。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/liquor"],
      ["liquid","液体；溶液；汤汁","n.",["液体","汁","溶液"],["liquid-fluid","cooking-liquid"],"Keep the cooking liquor and use it as a base for the sauce.","把煮出的汤汁留着，用作酱汁的底料。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/liquor"]
    ], [
      {"terms":["浸水"],"decision":"scope-excluded","reason":"“浸水”是旧词典对 liquor 作动词“浸泡”的罕用释义；核对的条目中动词义为“喝酒/使喝酒”，故不列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/liquor"},
      {"terms":["喝酒"],"decision":"restricted-verified","reason":"动词义“喝酒、纵饮”在现代英语中已罕用，多见于旧文学；本批只保留名词义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/liquor"}
    ]);
    entry("brandy", [
      ["brandy-spirit","白兰地（酒）","n.",["白兰地酒","白兰地"],["brandy-spirit"],"He poured a little brandy into his coffee to warm up.","他在咖啡里倒了一点白兰地暖身。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/brandy"]
    ]);
    entry("whisky", [
      ["whisky-spirit","威士忌（酒）","n.",["威士忌酒","威士忌"],["whisky-spirit"],"The distillery ages its whisky in oak casks for twelve years.","这家酒厂把威士忌在橡木桶中陈酿十二年。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/whisky"]
    ], [
      {"terms":["轻便马车"],"decision":"scope-excluded","reason":"“轻便马车”是 whisky 的罕用古义（一种轻便马车），现代英语几乎不用，本批只保留酒义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/whisky"}
    ]);
    entry("drunk", [
      ["intoxicated","喝醉的；醉酒的","adj.",["喝醉的","醉酒的"],["alcohol-intoxicated"],"He was too drunk to unlock his own front door.","他醉得连自家前门都打不开。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/drunk"],
      ["elated","陶醉的；沉醉的","adj.",["陶醉的"],["elated-by-success"],"Drunk with success, the young coach promised a trophy next season.","年轻教练因成功而陶醉，承诺下赛季拿冠军。","drunk with","https://api.dictionaryapi.dev/api/v2/entries/en/drunk"],
      ["intoxicated-person","醉汉","n.",["醉汉"],["intoxicated-person"],"A drunk was shouting at the bus stop at two in the morning.","凌晨两点，一个醉汉在公交站大喊大叫。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/drunk"]
    ]);
    entry("tobacco", [
      ["tobacco-leaf","烟草；烟叶","n.",["烟草"],["tobacco-leaf"],"The region's economy once depended on tobacco and cotton.","该地区经济曾经依赖烟草和棉花。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tobacco"]
    ], [
      {"terms":["香烟"],"decision":"scope-excluded","reason":"“香烟”是 cigarette 的译法；tobacco 指制烟用的烟叶/烟草，不指成品卷烟。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/tobacco"}
    ]);
    entry("cigarette", [
      ["cigarette-roll","香烟；纸烟","n.",["香烟","纸烟"],["cigarette-roll"],"He stepped outside to smoke a cigarette during the break.","休息时他走到外面抽了支香烟。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cigarette"]
    ]);
    entry("vegetable", [
      ["edible-vegetable","蔬菜","n.",["蔬菜"],["edible-vegetable"],"The market sells fresh vegetables grown within ten miles of town.","这个市场出售在镇子十英里内种植的新鲜蔬菜。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/vegetable"],
      ["plant","植物","n.",["植物"],["plant-organism"],"In old herbals, every vegetable was described alongside its medicinal uses.","在古老的草药书中，每种植物都连同其药用价值一起记述。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/vegetable"],
      ["of-plants","蔬菜的；植物的","adj.",["蔬菜的","植物的"],["of-vegetables","of-plants"],"She switched to vegetable oil after reading about saturated fats.","读了关于饱和脂肪的资料后，她改用植物油。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/vegetable"]
    ], [
      {"terms":["无精打采之人"],"decision":"scope-excluded","reason":"旧译不准确：vegetable 的口语引申义是“植物人”（脑损伤后无法与外界互动的人），并非泛指无精打采的人。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/vegetable"}
    ]);
    entry("melon", [
      ["melon-fruit","瓜；甜瓜","n.",["瓜","甜瓜"],["melon-fruit"],"She sliced a ripe melon and shared it with the children.","她切了一个熟甜瓜，分给孩子们吃。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/melon"]
    ], [
      {"terms":["红利"],"decision":"scope-excluded","reason":"“红利”属俚语/行业语用法（指额外分红），核对的常用词典条目未列此义，本批不单列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/melon"},
      {"terms":["赃物"],"decision":"scope-excluded","reason":"“赃物”义在核对的条目中查无实据，疑与俚语 melon（钱）混淆，故不采信。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/melon"},
      {"terms":["三聚二氰亚胺"],"decision":"scope-excluded","reason":"melon 在碳氮材料研究中确可指一种聚合物，与 melamine（三聚氰胺）相关但不相同。旧中文化学片段不列入本批日常学习范围，也不再断言 melon 无化学用法或将两者等同。","source":"https://pubs.acs.org/doi/10.1021/acs.inorgchem.1c02769"}
    ]);
    entry("beefy", [
      ["muscular","粗壮的；结实的","adj.",["粗壮的","结实的"],["muscular-build","sturdy"],"A beefy security guard blocked the entrance to the stage.","一名粗壮的保安挡住了舞台入口。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/beefy"],
      ["beef-flavoured","牛肉的；像牛肉的","adj.",["(牛)多肉的","象牛肉的"],["beef-flavour","full-of-beef"],"The stew had a beefy flavour even though it contained no meat.","这炖菜虽不含肉，却有牛肉的味道。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/beefy"]
    ]);
    entry("creamy", [
      ["cream-texture","含奶油的；奶油般浓稠的","adj.",["含乳脂的","乳脂状的","含乳油的","似乳油的"],["cream-containing","cream-textured"],"The soup was thick and creamy, with a hint of garlic.","这汤浓稠顺滑，带一点蒜味。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/creamy"],
      ["cream-colour","奶油色的；米色的","adj.",["奶油色的"],["cream-coloured"],"She painted the nursery a soft creamy yellow.","她把育儿室刷成了柔和的奶油黄。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/creamy"]
    ]);
    entry("site", [
      ["location","地点；场所；位置","n.",["位置","场所","地点"],["location-place"],"The council chose a site near the river for the new library.","议会为新图书馆选了河边的一块场地。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/site"],
      ["website","网站；站点","n.",["网站","站点"],["website"],"The site crashed when thousands of fans tried to buy tickets.","数千名粉丝抢票时网站崩溃了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/site"],
      ["construction-site","工地；建筑用地","n.",["工地","建筑工地"],["construction-site"],"Visitors must wear helmets on the building site at all times.","访客在建筑工地必须始终戴安全帽。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/site"],
      ["siting","给…择址；使坐落于","v.",["给...择址"],["choose-location"],"Engineers sited the wind farm on an exposed ridge.","工程师把风电场选址在开阔的山脊上。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/site"]
    ]);
    entry("situated", [
      ["located","位于…的；坐落在…的","adj.",["位于...的","坐落在...的","坐落...的"],["located-at"],"The guesthouse is situated a short walk from the beach.","这家客栈位于离海滩步行不远的地方。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/situated"],
      ["circumstanced","处于某种境地的","adj.",["处于某种境地的"],["circumstance-position"],"With two children and no income, she was badly situated.","带着两个孩子又没有收入，她的处境很艰难。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/situated"]
    ]);
    entry("structural", [
      ["of-structure","结构的；建筑结构的","adj.",["结构的","建筑的"],["structural-damage","building-frame"],"Engineers found structural damage in two of the pillars.","工程师发现其中两根柱子有结构性损伤。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/structural"]
    ]);
    entry("grid", [
      ["grid-pattern","网格；格子；栅格","n.",["格子","栅格","网格"],["grid-pattern"],"The city's streets form a neat grid of squares.","这座城市的街道构成整齐的方格网。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/grid"],
      ["power-grid","电网；输电网","n.",["电网"],["power-grid"],"Storms knocked out the grid for three days last winter.","去年冬天暴风雨使电网中断了三天。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/grid"],
      ["map-squares","（地图上的）坐标方格网","n.",["坐标方格网"],["map-coordinate-grid"],"We used the grid on the map to locate the abandoned observatory.","我们借助地图上的坐标方格网找到了废弃天文台。",null,"https://dictionary.cambridge.org/dictionary/english/grid"],
      ["starting-positions","（赛车）发车位置；起跑排列","n.",["发车位置","起跑排列"],["motor-racing-start"],"The driver moved to the front of the grid after the qualifying session.","排位赛后，这名车手排到了发车队列的前列。","starting grid","https://dictionary.cambridge.org/dictionary/english/grid"]
    ]);
    entry("layer", [
      ["stratum","层；层次","n.",["层"],["layer-stratum"],"A thin layer of dust covered every shelf in the room.","房间里每个架子上都覆着一层薄灰。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/layer"],
      ["hen","产卵鸡","n.",["产卵鸡"],["egg-laying-hen"],"The farm keeps a hundred layers and sells the eggs locally.","农场养了一百只产卵鸡，鸡蛋在本地销售。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/layer"],
      ["stack","分层放置；层层堆放","v.",["分层堆积"],["arrange-in-layers"],"Layer the pasta and sauce in a deep baking dish.","把意面和酱料一层层铺在深烤盘里。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/layer"]
    ], [
      {"terms":["放置者"],"decision":"scope-excluded","reason":"“放置者”是旧词典对 layer 作“铺设者（如铺砖工）”的直译，现代英语罕用，通常说 tiler 或 paver。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/layer"},
      {"terms":["压植"],"decision":"scope-excluded","reason":"“压植”是园艺术语 layering（压条繁殖）的旧译，属专业技术义，本批不列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/layer"}
    ]);
    entry("bench", [
      ["park-bench","长椅","n.",["长椅子","长椅"],["park-bench"],"They ate lunch on a bench overlooking the harbour.","他们坐在俯瞰港口的长椅上吃午饭。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bench"],
      ["workbench","工作台","n.",["台","工作台"],["workbench"],"The carpenter clamped the board to the bench and began sanding.","木匠把木板夹在工作台上，开始打磨。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/bench"],
      ["court-or-sideline","（体育）替补席","n.",["替补席"],["sports-substitutes-bench"],"The young defender watched the final from the bench.","那名年轻后卫在替补席上观看决赛。",null,"https://dictionary.cambridge.org/dictionary/english/bench"],
      ["judiciary","法官席；法官（总称）","n.",["法官席","法官"],["judicial-bench"],"The lawyer turned towards the bench to request a short adjournment.","律师转向法官席，请求短暂休庭。","the bench","https://dictionary.cambridge.org/dictionary/english/bench"],
      ["leave-out-player","让（球员）坐替补席；不让上场","vt.",["让球员坐替补席"],["leave-player-out"],"The coach benched the captain after he missed two training sessions.","队长缺席两次训练后，教练不再让他上场。",null,"https://dictionary.cambridge.org/dictionary/english/bench"]
    ]);
    entry("mall", [
      ["shopping-centre","购物中心","n.",["购物中心","商场"],["shopping-centre"],"The mall was crowded with families buying winter clothes.","购物中心里挤满了买冬衣的家庭。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/mall"],
      ["promenade","步行街；林荫步道","n.",["步行购物街","林荫步道"],["pedestrian-promenade"],"An old mall lined with elms leads from the gate to the river.","一条两旁种着榆树的古老林荫步道从大门通向河边。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/mall"]
    ]);
    entry("casino", [
      ["gambling-house","赌场","n.",["卡西诺赌场","赌场"],["gambling-house"],"The casino on the waterfront closes at four in the morning.","滨水区那家赌场凌晨四点关门。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/casino"]
    ], [
      {"terms":["卡西诺牌戏"],"decision":"scope-excluded","reason":"“卡西诺牌戏”指一种纸牌游戏（casino），现代常用义为赌场，牌戏义已罕用，本批不列。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/casino"}
    ]);
    entry("hostel", [
      ["youth-hostel","青年旅舍；旅社","n.",["青年招待所","旅店"],["youth-hostel"],"We stayed in a hostel near the station and shared a dormitory.","我们住在车站附近的一家青年旅舍，合住一间宿舍。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hostel"],
      ["refuge","（慈善）收容所","n.",["收容所"],["homeless-shelter"],"The charity runs a hostel for homeless men in the old town.","这家慈善机构在老城区为无家可归的男子开办了一所收容所。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hostel"],
      ["residential-hostel","（学生或工人的）宿舍；集体宿舍","n.",["宿舍","集体宿舍"],["shared-residential-lodging"],"The students share a kitchen on each floor of their hostel.","学生们在宿舍每层共用一个厨房。",null,"https://dictionary.cambridge.org/dictionary/english/hostel"]
    ]);
    entry("downtown", [
      ["city-centre","市中心；商业中心区","n.",["市中心区","市中心"],["city-centre"],"The city's downtown has changed greatly since the new station opened.","自新车站开通以来，市中心变化很大。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/downtown"],
      ["central","市中心的","adj.",["市中心的"],["central-business-district"],"Rents for downtown apartments have risen sharply this year.","今年市中心公寓的租金大幅上涨。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/downtown"],
      ["toward-centre","在/往市中心；往闹市区","adv.",["往闹市区","在市中心"],["toward-city-centre"],"We drove downtown to see the exhibition and stayed for dinner.","我们开车去市中心看展览，并留下吃了晚饭。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/downtown"]
    ]);
    entry("steward", [
      ["estate-manager","管家；财产管理人","n.",["管家","管理人"],["steward-estate-manager","household-staff"],"The estate's steward kept careful records of every harvest and every debt.","庄园管家仔细记录每一次收成和每一笔债务。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steward"],
      ["ship-steward","（客轮等的）乘务员","n.",["乘务员"],["ship-steward","dining-officer","passenger-service-attendant"],"A steward carried our bags to the cabin before the ship sailed.","船开之前，一名乘务员把我们的包送到了客舱。",null,"https://dictionary.cambridge.org/dictionary/english/steward"],
      ["flight-attendant","（飞机上的）男乘务员；服务员","n.",["飞机的服务员","招待员"],["flight-attendant","cabin-crew","passenger-service-attendant"],"The steward helped an elderly passenger fasten her seat belt before take-off.","起飞前，那位男乘务员帮助一位老年乘客系好安全带。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steward"],
      ["union-rep","工会代表；车间职工代表","n.",["工会代表"],["shop-steward","labor-representative"],"The shop steward took the safety complaint straight to the plant manager.","工会代表直接把有关安全的投诉反映给了厂长。","shop steward","https://api.dictionaryapi.dev/api/v2/entries/en/steward"],
      ["fiscal-agent","（机构或教会的）财务管理员","n.",["(财务)管理员"],["steward-fiscal-agent","church-finance"],"Each congregation elects a steward to look after its accounts.","每个教会堂区推选一名财务管理员来管理账目。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steward"],
      ["event-attendant","（活动的）服务人员；秩序维护员","n.",["秩序维护员","活动服务人员"],["event-organizer-attendant"],"A steward directed late arrivals to the empty seats at the back.","一位现场工作人员把迟到者引向后排空座。",null,"https://dictionary.cambridge.org/dictionary/english/steward"]
    ], [
      {"terms":["事务长"],"decision":"context-required","reason":"事务长通常对应 chief/purser 一类特定职务；普通 steward 端行李的例句不证明其管理层级。","source":"https://dictionary.cambridge.org/dictionary/english/steward"},
      {"terms":["轮船"],"decision":"context-required","reason":"旧库把“轮船、飞机的服务员”拆成了片段；轮船是服务地点，不是 steward 所指的人或职业。","source":"https://dictionary.cambridge.org/dictionary/english/steward"}
    ]);
    entry("sailor", [
      ["seaman","水手；船员；海员","n.",["水手","船员","海员"],["sailor-crew-member","seafarer"],"The old sailor mended his nets while the tide crept up the beach.","潮水漫上海滩时，那位老水手在补渔网。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sailor"],
      ["sports-sailor","帆船爱好者；帆船运动员","n.",["帆船运动员"],["sailor-sport","dinghy-sailing"],"She became a keen sailor after one summer on her uncle's boat.","在叔叔的船上过了一个夏天后，她成了热心的帆船爱好者。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/sailor"]
    ]);
    entry("steamer", [
      ["steamship","汽船；轮船","n.",["汽船"],["steamer-steamship","paddle-steamer"],"A paddle steamer still takes tourists along the river in summer.","夏天仍有一艘明轮汽船载着游客沿河游览。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steamer"],
      ["steam-device","蒸汽器具；蒸锅（靠蒸汽工作的器具）","n.",["蒸汽发生器"],["steamer-appliance","garment-steamer"],"She softened the creases in the curtains with a hand-held steamer.","她用手持蒸汽熨烫机把窗帘上的褶皱熨平了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/steamer"]
    ], [
      {"terms":["蒸汽机"],"decision":"scope-excluded","reason":"旧译“蒸汽机”对应的是 steam engine，指的是机械装置；steamer 指以蒸汽驱动的器具或汽船，条目未列“蒸汽机”义，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/steamer"}
    ]);
    entry("liner", [
      ["ocean-liner","班轮；大型客轮","n.",["定期船"],["liner-passenger-ship","ocean-liner"],"The liner left Southampton with nine hundred passengers on board.","那艘班轮载着九百名乘客驶离南安普敦。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/liner"],
      ["lining","衬里；内衬（衣物或容器的内层）","n.",["衬里","衬垫"],["liner-lining","garment-lining"],"A torn liner hung loose from the inside of his winter coat.","他冬季大衣内侧的衬里破了，松松地垂着。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/liner"],
      ["cylinder-liner","缸套；套管（机器内壁的衬套）","n.",["套管","垫带"],["cylinder-liner","engine-sleeve"],"Mechanics replaced the worn cylinder liner before the engine seized again.","机械师更换了磨损的缸套，以免发动机再次卡死。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/liner"]
    ], [
      {"terms":["班机"],"decision":"context-required","reason":"旧译“班机”对应 airliner（常略作 liner，多出现在 jet liner 这类组合中）；单独用 liner 时通常指班轮或内衬，需靠 aviation 语境才成立，故只保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/airliner"},
      {"terms":["划线者"],"decision":"scope-excluded","reason":"核对条目，liner 指衬里、班轮、棒球平直球等，没有“划线的人”这一义项（划线者一般说 line-drawer），保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/liner"}
    ]);
    entry("railroad", [
      ["railway","铁路；铁路系统","n.",["铁路"],["railroad-track","railway-system"],"The railroad reached the mining town only after five difficult years.","历经五个艰难的年头，铁路才修到那座矿镇。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/railroad"],
      ["rail-company","铁路公司；铁路企业","n.",["铁路公司"],["railroad-company","rail-operator"],"The railroad refused to pay for repairs to the bridge it owned.","那家铁路公司拒绝为其拥有的桥梁支付维修费用。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/railroad"],
      ["haul-by-rail","用铁路运输","v.",["用铁路运输"],["railroad-transport","freight-by-rail"],"They railroaded the grain straight from the farm to the coast.","他们把粮食直接用铁路从农场运到海边。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/railroad"],
      ["ram-through","强行推动；草率通过（法案等）","v.",["强行推动"],["railroad-push-through","hasty-approval"],"The government railroaded the bill through parliament before the protests grew.","在抗议扩大之前，政府强行让议会通过了这项法案。","railroad sth through","https://api.dictionaryapi.dev/api/v2/entries/en/railroad"]
    ], [
      {"terms":["铺设铁路"],"decision":"scope-excluded","reason":"条目的动词义只列“用铁路运输、经营铁路、为铁路工作、乘火车”，未列“铺设铁路”（铺轨通常说 lay tracks），保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/railroad"},
      {"terms":["在铁路工作"],"decision":"restricted-verified","reason":"条目确认动词有“为铁路公司工作”的用法，但现代英语几乎不再这样用，保留追溯而不作为学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/railroad"}
    ]);
    entry("subway", [
      ["metro","地铁；地下铁路","n.",["地铁"],["subway-metro","underground-rail"],"The subway takes twenty minutes from the station to the airport.","从火车站坐地铁到机场要二十分钟。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/subway"],
      ["underpass","地下通道；地道","n.",["地道"],["subway-underpass","pedestrian-tunnel"],"Office workers crossed the road through a dim subway under the tracks.","上班族从铁轨下一条昏暗的地道穿过马路。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/subway"],
      ["ride-subway","乘地铁","v.",["乘地铁"],["subway-ride","underground-travel"],"We subwayed uptown and walked the last three blocks.","我们乘地铁到上城，最后三个街区是走过去的。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/subway"]
    ]);
    entry("tram", [
      ["streetcar","有轨电车","n.",["有轨电车"],["tram-streetcar","light-rail"],"A crowded tram rattled past the cathedral square at dusk.","黄昏时，一辆拥挤的有轨电车哐当哐当地驶过大教堂广场。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tram"],
      ["mine-cart","矿车；轨道运料车","n.",["煤车"],["tram-mine-cart","goods-tram"],"The miners pushed the loaded tram towards the shaft entrance.","矿工们把装满煤的矿车推向井口。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tram"],
      ["tram-rails","电车线路；轨道线路（较少用）","n.",["电车轨道"],["tramway-rails","street-track"],"The old tram beyond the village has been closed for years.","村子那边的老电车线路已经停用了多年。",null,"https://www.collinsdictionary.com/dictionary/english/tram"],
      ["weft-silk","纬丝；丝织纬纱（专业）","n.",["纬纱","纬丝"],["silk-tram","weft-thread"],"The weaver used a fine silk tram for the velvet's weft.","织工用纤细的丝股线作天鹅绒的纬纱。",null,"https://www.collinsdictionary.com/dictionary/english/tram"],
      ["ride-or-haul","乘电车；用轨道车运送","v.",["乘电车","用煤车运载"],["tram-travel","tram-transport"],"Visitors trammed up the hill to the castle and walked back down.","游客乘电车上了山到城堡，然后步行下山。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tram"]
    ]);
    entry("wagon", [
      ["horse-drawn","四轮马车；运货马车","n.",["四轮马车","马车"],["wagon-horse-drawn","farm-wagon"],"A farmer loaded hay onto the wagon and drove slowly to the barn.","农夫把干草装上四轮马车，慢慢赶向谷仓。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/wagon"],
      ["freight-wagon","货车；运货车（公路或铁路的载货车厢）","n.",["货车","运货车"],["wagon-freight","goods-wagon"],"Two wagons of timber stood waiting on the narrow siding.","两节装满木材的货车停在狭窄的侧线上等候。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/wagon"],
      ["paddy-wagon","囚车；警用押送车","n.",["囚车"],["paddy-wagon","police-van"],"Officers led the protesters into a waiting paddy wagon.","警员把抗议者带进一辆等候着的囚车。","paddy wagon","https://api.dictionaryapi.dev/api/v2/entries/en/wagon"]
    ]);
    entry("pedicab", [
      ["cycle-rickshaw","三轮人力车；载客三轮车","n.",["(人力)三轮车"],["pedicab-cycle-rickshaw","passenger-tricycle"],"Drivers in straw hats waited beside their pedicabs outside the night market.","戴草帽的司机在夜市外把三轮车停在路旁等候。",null,"https://www.vocabulary.com/dictionary/pedicab"]
    ]);
    entry("horsepower", [
      ["power-unit","马力（功率单位）","n.",["马力"],["horsepower-power-unit","engine-power"],"The old tractor produces barely forty horsepower, yet it climbs that slope.","这台旧拖拉机只有四十马力左右，却能爬上那道坡。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/horsepower"]
    ]);
    entry("socialism", [
      ["collective-ownership","社会主义（主张生产资料公有或由国家控制的理论与制度）","n.",["社会主义"],["socialism-collective-ownership","state-control-economy"],"The party's programme mixed socialism with a strong dose of nationalism.","该党的纲领把社会主义与浓厚的民族主义混合在一起。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/socialism"]
    ], [
      {"terms":["社会主义运动"],"decision":"context-required","reason":"旧译“社会主义运动”实际对应 the socialist movement；条目的三个义项都指理论或制度，本身不含“运动”义，需与 movement 连用才成立，故保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/socialism"}
    ]);
    entry("communism", [
      ["collective-ideology","共产主义（主张生产资料公有的政治思想与社会制度）","n.",["共产主义"],["communism-collective-ownership","classless-doctrine"],"The book traces how communism spread across eastern Europe after 1945.","这本书追溯了1945年后共产主义如何在东欧传播。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/communism"]
    ]);
    entry("revolution", [
      ["uprising","革命；政权更迭","n.",["革命"],["revolution-political","overthrow-of-regime"],"The revolution began with a bread riot and ended with a new constitution.","这场革命始于一场抢面包的骚乱，终于一部新宪法。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/revolution"],
      ["radical-change","巨变；彻底变革","n.",["大变革"],["revolution-radical-change","technological-upheaval"],"Plastic packaging brought a quiet revolution to the way food was sold.","塑料包装给食品的销售方式带来了一场静悄悄的巨变。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/revolution"],
      ["rotation","旋转；转动","n.",["旋转","回转"],["revolution-rotation","turning-around-axis"],"One revolution of the handle raises the bucket about a metre.","把手转一圈，水桶大约上升一米。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/revolution"],
      ["single-turn","一圈；转数","n.",["转数"],["revolution-single-turn","revolutions-per-minute"],"The wheel makes two hundred revolutions per minute at full speed.","全速时车轮每分钟转两百圈。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/revolution"],
      ["cycle","循环；周期性的更替","n.",["循环"],["revolution-cycle","seasonal-round"],"Farmers here plan their year around the revolution of the seasons.","这里的农民按四季循环来安排一年的农事。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/revolution"]
    ]);
    entry("republican", [
      ["anti-monarchist","共和主义者；主张共和制者","n.",["共和主义者"],["republican-advocate","anti-monarchist"],"The republican argued that a crowned head could never be held accountable.","那位共和主义者主张，君主永远无法被问责。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/republican"],
      ["party-member","（美国）共和党党员","n.",["共和党员"],["republican-party-member","us-party-politics"],"The Republican told the crowd that taxes on small firms should be cut.","这位共和党人对人群说，小企业的税应该降低。",null,"https://www.vocabulary.com/dictionary/republican"],
      ["republic-form","共和国的；共和政体的；共和主义的","adj.",["共和国的","共和政体的","共和主义的"],["republican-form-of-government","representative-government"],"They demanded a republican constitution and an elected head of state.","他们要求一部共和宪法和一位民选的国家元首。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/republican"],
      ["party-adj","（美国）共和党的","adj.",["共和党的"],["republican-party-adj","election-politics"],"Republican candidates dominated the rural districts in that election.","在那次选举中，共和党候选人在乡村选区占尽优势。",null,"https://www.vocabulary.com/dictionary/republican"]
    ]);
    entry("statesman", [
      ["elder-leader","政治家；国务活动家","n.",["政治家"],["statesman-respected-leader","national-affairs"],"The treaty was drafted by a statesman respected on both sides of the border.","这份条约由一位在边界两边都受敬重的政治家起草。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/statesman"]
    ]);
    entry("federation", [
      ["federal-state","联邦；联邦制国家","n.",["联邦","联邦政府"],["federation-federal-state","central-authority"],"The federation now includes twenty-two states with separate legal systems.","这个联邦现在包括二十二个拥有独立法律体系的州。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/federation"],
      ["alliance","联合会；联盟（组织）","n.",["联盟"],["federation-alliance","member-organisations"],"A national federation of farmers' groups lobbied for better grain prices.","一个全国性的农民团体联合会游说争取提高粮价。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/federation"],
      ["act-of-union","联合；结成联邦（行为）","n.",["联合"],["federation-act-of-union","unification-process"],"Federation took six years of talks before the colonies finally agreed.","各殖民地谈了六年，最后才同意结成联邦。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/federation"]
    ]);
    entry("demography", [
      ["population-study","人口学；人口统计学","n.",["人口统计学","人口学"],["demography-population-study","births-deaths-migration"],"Demography suggests the town will lose a third of its pupils by 2035.","人口学研究表明，到2035年这个镇将流失三分之一的学生。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/demography"]
    ]);
    entry("independence", [
      ["statehood","（国家的）独立；自主","n.",["独立","自主","自主性"],["independence-statehood","self-governance"],"The country declared independence after seventy years of foreign rule.","这个国家在外国统治七十年后宣布独立。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/independence"],
      ["self-reliance","（个人的）自立；独立性","n.",["自立","独立性"],["independence-self-reliance","personal-autonomy"],"Living alone taught him an independence he had never known at home.","独自生活让他学会了在家时从未有过的自立。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/independence"]
    ]);
    entry("behalf", [
      ["on-behalf-of","代表（某人）；以…的名义","n.",["方面"],["behalf-as-agent","representing-someone"],"She accepted the prize on behalf of the whole research team.","她代表整个研究团队领奖。","on behalf of sb","https://www.vocabulary.com/dictionary/behalf"],
      ["in-sb-interest","为了…的利益；替某人说话","n.",["利益"],["behalf-in-interest","advocating-for-someone"],"He spoke in his brother's behalf at the disciplinary hearing.","在纪律听证会上，他为哥哥说话。","in sb's behalf","https://www.vocabulary.com/dictionary/behalf"]
    ]);
    entry("procession", [
      ["parade","行列；游行队伍","n.",["队伍","列队行进"],["procession-parade","ceremonial-line"],"A long procession of mourners followed the coffin through the square.","一长列送葬者跟随灵柩穿过广场。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/procession"],
      ["succession","（接连不断的）一连串；连续的人流","n.",["连续","涌出"],["procession-succession","sequence-of-people"],"The clinic has seen a procession of patients since the factory closed.","工厂关闭以来，诊所接诊了一连串病人。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/procession"]
    ]);
    entry("enforcement", [
      ["carrying-out","（法律的）执行；实施","n.",["执行","实施"],["enforcement-implementation","law-enforcement"],"Enforcement of the new rules began only in the spring.","新规定的执行直到春天才开始。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/enforcement"],
      ["compulsion","强制；强制力","n.",["强制","厉行"],["enforcement-compulsion","coercive-power"],"The court ordered enforcement of the payment within thirty days.","法院下令在三十天内强制执行付款。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/enforcement"]
    ], [
      {"terms":["加强"],"decision":"context-required","reason":"旧译“加强”来自 strengthen enforcement 这类搭配，enforcement 本身只表示“执行、强制”，不含“加强”义，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/enforcement"}
    ]);
    entry("supreme", [
      ["highest-authority","至高的；拥有最高权力的","adj.",["至高的","至高"],["supreme-highest-authority","top-ranking"],"In the fictional kingdom, the royal council holds supreme authority over the courts.","在这个虚构王国里，王室议会拥有高于法院的最高权力。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/supreme"],
      ["utmost-degree","最大的；极度的；终极的","adj.",["最大的","极端的","终极的"],["supreme-utmost-degree","extreme-quality"],"He handled the crisis with supreme confidence and very little evidence.","他处理这场危机时表现出极大的自信，却没有多少证据。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/supreme"]
    ], [
      {"terms":["霸权"],"decision":"scope-excluded","reason":"旧译“霸权”对应的是名词 supremacy（霸权、优势地位）；supreme 是形容词，条目未列“霸权”义，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/supreme"}
    ]);
    entry("persecute", [
      ["oppress","迫害；残害（因种族、宗教或政见）","v.",["迫害","虐待"],["persecute-religious","oppress-minority"],"The regime persecuted journalists who reported on the protests.","该政权迫害那些报道抗议活动的记者。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/persecute"],
      ["harass","骚扰；纠缠；烦扰","v.",["困扰","烦扰","同...捣乱"],["persecute-harass","pester-relentlessly"],"Fans persecuted the singer with letters until she changed her address.","歌迷不断写信纠缠那位歌手，她只好换了住址。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/persecute"]
    ]);
    entry("investigation", [
      ["inquiry","调查；调查行为","n.",["调查","审查","调查研究"],["investigation-inquiry","fact-finding","detailed-examination"],"The investigation into the fire took eleven months and produced no charges.","对那场火灾的调查历时十一个月，最终没有提出任何指控。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/investigation"]
    ]);
    entry("criteria", [
      ["standards","标准；准则（criterion 的复数）","n.",["标准","准则","评判条件"],["criteria-standards","judging-conditions"],"The judges published three criteria for assessing the entries.","评委公布了三项评审参赛作品的标准。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/criteria"]
    ]);
    entry("conform", [
      ["comply","遵从；顺从（社会规范或他人期望）","v.",["遵从","顺从","顺应习俗"],["conform-obey-norms","social-pressure"],"Teenagers often conform to the dress code of their closest friends.","青少年常常遵从最亲密朋友的穿着规范。","conform to sth","https://api.dictionaryapi.dev/api/v2/entries/en/conform"],
      ["match-standard","符合；与…一致（规格或规定）","v.",["符合","一致"],["conform-meet-standard","specification-compliance"],"The new pumps conform to the noise limits set by the council.","这些新水泵符合市议会设定的噪音限值。","conform to sth","https://api.dictionaryapi.dev/api/v2/entries/en/conform"]
    ], [
      {"terms":["使一致"],"decision":"restricted-verified","reason":"条目确认有及物用法“使相似、使适应”，但现代英语很少这样用，保留追溯而不作为学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/conform"}
    ]);
    entry("deceive", [
      ["mislead","欺骗；使人误信","v.",["欺骗","行骗"],["deceive-mislead","false-impression"],"The dealer deceived her into paying for a car that was never delivered.","那名经销商骗她为一辆从未交付的车付了钱。","deceive sb into doing sth","https://api.dictionaryapi.dev/api/v2/entries/en/deceive"]
    ]);
    entry("oversee", [
      ["supervise","监督；监管（确保规章被遵守）","v.",["监督","监管","监察"],["oversee-supervise","regulatory-watch"],"An independent body will oversee the counting of the votes.","一个独立机构将监督计票过程。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/oversee"],
      ["manage","主管；负责管理（工作或项目）","v.",["管理"],["oversee-manage","project-direction"],"She oversees forty staff across three regional offices.","她负责管理三个地区办事处共四十名员工。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/oversee"]
    ]);
    entry("vice", [
      ["bad-habit","恶习；不良习惯","n.",["恶习","恶癖"],["vice-bad-habit","personal-failing"],"His only vice was an expensive taste in watches.","他唯一的恶习是喜欢买昂贵的手表。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/vice"],
      ["wickedness","罪恶；邪恶；堕落","n.",["恶行","罪恶","堕落","缺陷"],["vice-wickedness","moral-corruption"],"The novel shows how small vices grow into open cruelty.","这部小说展示了小的邪恶如何发展成公然的残忍。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/vice"],
      ["clamp-tool","台钳；台虎钳","n.",["台钳","台虎钳"],["vice-clamp-tool","bench-vise"],"He tightened the vice until the plank could not move.","他把台钳拧紧，直到木板再也动不了。",null,"https://dictionary.cambridge.org/dictionary/english/vice"],
      ["grip","钳住；夹紧","v.",["钳住"],["vice-clamp-verb","grip-hold"],"She viced the metal rod to the bench and began to file it.","她把金属棒夹在台钳上，开始锉削。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/vice"],
      ["deputy","副职的；代理的（职位前缀）","prefix",["副的"],["vice-deputy","second-in-command"],"The vice president took over when the chairman resigned in June.","主席六月辞职后，副总裁接任。","vice president","https://dictionary.cambridge.org/dictionary/english/vice"],
      ["instead-of","代替；接替（正式、较少用）","prep.",["代替"],["vice-in-place-of","succession"],"She was elected treasurer vice the officer who retired in May.","她接替五月退休的那位干事当选为财务主管。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/vice"]
    ], [
      {"terms":["老虎钳"],"decision":"context-required","reason":"vice 是工作台上固定物件的台钳、台虎钳；汉语“老虎钳”常指手持钢丝钳，不能与所有钳子等同。","source":"https://dictionary.cambridge.org/dictionary/english/vice"}
    ]);
    entry("rob", [
      ["steal-from","抢劫；抢夺（用暴力或威胁夺取）","v.",["抢夺","抢掠"],["rob-steal-from","violent-theft"],"Two men robbed the corner shop just before closing time.","两名男子在打烊前抢劫了街角那家店。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/rob"],
      ["deprive","剥夺；使丧失","v.",["剥夺"],["rob-deprive","deprive-of"],"The injury robbed him of any chance to play in the final.","这次受伤使他丧失了参加决赛的任何机会。","rob sb of sth","https://api.dictionaryapi.dev/api/v2/entries/en/rob"]
    ]);
    entry("rifle", [
      ["firearm","步枪；来复枪","n.",["来复枪","步枪"],["rifle-firearm","long-gun"],"The soldier cleaned his rifle twice before the inspection.","士兵在检查前把步枪擦了两遍。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/rifle"],
      ["search-hastily","迅速翻查；翻找","v.",["(抱有不良意图)迅速翻查"],["rifle-search","rummage-through"],"He rifled through the drawers looking for her passport.","他翻遍抽屉找她的护照。","rifle through sth","https://api.dictionaryapi.dev/api/v2/entries/en/rifle"],
      ["loot","洗劫；抢夺（财物）","v.",["抢夺"],["rifle-plunder","loot-search"],"Thieves rifled the empty house and left the cupboards open.","窃贼洗劫了那座空房子，橱柜都被打开着。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/rifle"]
    ], [
      {"terms":["用步枪射击"],"decision":"scope-excluded","reason":"核对条目，rifle 作动词只表示翻找、洗劫、给枪管刻膛线，没有“用步枪射击”义（射击用 shoot），保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/rifle"}
    ]);
    entry("cannon", [
      ["artillery","大炮；加农炮","n.",["大炮","加农炮"],["cannon-artillery","heavy-gun"],"Rusty cannon still point out to sea from the old fort.","旧要塞上的生锈大炮仍指向海面。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cannon"],
      ["bombard","炮轰；用大炮轰击","v.",["炮轰"],["cannon-bombard","shell-fire"],"The ships cannoned the harbour walls until the garrison surrendered.","舰船炮轰港口城墙，直到守军投降。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/cannon"],
      ["collide","（猛烈地）撞上；碰撞","vi.",["撞上","碰撞"],["strike-with-force"],"A cyclist swerved to avoid the dog and cannoned into a parked van.","一名骑车人为躲避狗猛地转向，撞上了一辆停着的货车。","cannon into","https://dictionary.cambridge.org/dictionary/english/cannon"],
      ["rebound","撞上后弹开；反弹","vi.",["反弹","弹开"],["rebound-after-impact"],"The ball cannoned off the post and landed beside the goalkeeper.","球击中门柱后弹开，落在守门员身旁。","cannon off","https://dictionary.cambridge.org/dictionary/english/cannon"]
    ]);
    entry("arrow", [
      ["projectile","箭","n.",["箭"],["arrow-projectile","bow-and-arrow"],"He drew the bow and sent an arrow into the straw target.","他拉开弓，把一支箭射进草靶。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/arrow"],
      ["sign-symbol","箭头符号；箭头记号","n.",["箭头记号","箭状物"],["arrow-symbol","direction-sign"],"A red arrow on the wall points to the emergency exit.","墙上的红色箭头指向紧急出口。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/arrow"]
    ]);
    entry("spear", [
      ["thrusting-weapon","矛；长枪","n.",["矛","枪"],["spear-thrusting-weapon","polearm"],"The hunters sharpened their spears beside the fire.","猎人们在火边磨尖长矛。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/spear"],
      ["pierce","用矛刺；刺；戳","v.",["用矛刺","刺","戳"],["spear-pierce","stab-thrust"],"He speared a piece of fish and dropped it into the pot.","他戳起一块鱼，丢进锅里。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/spear"],
      ["young-shoot","嫩茎；嫩枝（如芦笋、草的嫩芽）","n.",["嫩枝"],["spear-young-shoot","asparagus-spear"],"She steamed six asparagus spears and served them with butter.","她蒸了六根芦笋，配上黄油端上桌。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/spear"]
    ], [
      {"terms":["父系的"],"decision":"scope-excluded","reason":"旧译“父系的”来自古旧词组 spear side（父系），现代英语已不用；条目把该形容词义标为罕见，保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/spear"},
      {"terms":["持矛者"],"decision":"restricted-verified","reason":"条目确认 spear 可指“持矛的士兵”，但现代英语基本不用这一名词义，保留追溯而不作为学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/spear"}
    ]);
    entry("gunpowder", [
      ["explosive","火药（硝石、硫磺与木炭的混合物）","n.",["火药","有烟火药"],["gunpowder-explosive","black-powder"],"Early cannon were fired with gunpowder made from saltpetre, sulphur and charcoal.","早期的大炮用硝石、硫磺和木炭制成的火药发射。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/gunpowder"]
    ]);
    entry("deflect", [
      ["change-course","使偏转；使偏离原方向","v.",["使偏斜","偏斜"],["deflect-deviate","bounce-off-course"],"The metal shield deflected the blow away from his shoulder.","金属盾牌把这一击挡离了他的肩膀。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/deflect"],
      ["divert-attention","转移（注意力、批评或话题）；回避","v.",["转移"],["deflect-divert-attention","evade-question"],"The minister deflected criticism by announcing a review of the whole scheme.","部长宣布对整个计划进行复核，以此转移批评。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/deflect"]
    ]);
    entry("invader", [
      ["aggressor","入侵者；侵略者","n.",["侵略者"],["invader-military","foreign-aggressor"],"Villagers hid their grain in caves when the invaders approached.","入侵者逼近时，村民们把粮食藏进山洞。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/invader"],
      ["intruder","闯入者；侵入者（可指生物等）","n.",["闯入者","侵入者"],["invader-intruder","privacy-trespass","intruding-organism"],"Gardeners removed the fast-spreading invader before it crowded out the native plants.","园丁们在这种迅速蔓延的入侵植物挤走本地植物之前将它清除了。",null,"https://www.merriam-webster.com/dictionary/invader"]
    ], [
      {"terms":["侵入物"],"decision":"context-required","reason":"invader 不是只能指人。Merriam-Webster 释为入侵的事物；Collins invade 及其派生词允许植物等侵入语境。这里纳入生物侵入者，不泛指任意被放入的物件。","source":"https://www.collinsdictionary.com/dictionary/english/invade"}
    ]);
    entry("traitor", [
      ["betrayer-of-country","叛国者；叛徒","n.",["叛国者","叛徒","叛逆者"],["traitor-to-country","treason-betrayal"],"In the novel, the general is condemned as a traitor after handing over the fort.","在这部小说中，将军交出堡垒后被判为叛国者。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/traitor"],
      ["breacher-of-trust","背信者；背叛朋友或组织的人","n.",["背信者","叛逆"],["traitor-breach-of-trust","disloyal-friend"],"She called him a traitor for selling the story to a rival paper.","她骂他是背信者，因为他把这件事卖给了竞争对手的报纸。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/traitor"]
    ]);
    entry("treason", [
      ["crime-against-state","叛国罪；通敌","n.",["叛国罪","通敌"],["treason-against-state","aiding-the-enemy"],"He was charged with treason for passing maps to the enemy.","他因向敌方传递地图而被控叛国罪。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/treason"],
      ["betrayal-of-trust","背叛；不忠（对信任的背弃）","n.",["叛逆","不忠"],["treason-betrayal-trust","perfidy"],"To the old members, the merger felt like treason.","对老会员来说，这次合并感觉像是一种背叛。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/treason"]
    ]);
    entry("patrol", [
      ["round","巡逻；巡查（例行的巡视行动）","n.",["巡逻","巡视"],["patrol-round","guard-circuit"],"The guards go on patrol along the fence every two hours.","卫兵每两小时沿围栏巡逻一次。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/patrol"],
      ["patrol-unit","巡逻队；巡逻人员","n.",["巡逻员","侦察队"],["patrol-unit","scout-detachment"],"A border patrol stopped the truck and searched its cargo.","一支边境巡逻队拦下卡车并检查了货物。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/patrol"],
      ["patrol-verb","巡逻；巡查守卫","v.",["巡逻"],["patrol-verb","guard-walk"],"Volunteers patrol the beach at night to protect nesting turtles.","志愿者夜间在海滩巡逻，保护筑巢的海龟。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/patrol"]
    ]);
    entry("youngster", [
      ["young-person","年轻人；小孩","n.",["小孩","年轻人","少年","儿童","青年"],["young-person"],"Two youngsters were kicking a ball against the garage door when I walked past.","我走过时，两个小孩正对着车库门踢球。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/youngster"]
    ]);
    entry("maiden", [
      ["unmarried-girl","少女；未婚女子","n.",["年轻未婚女子","少女","处女"],["unmarried-young-woman"],"In the old painting, a maiden in a blue dress stands beside the river.","在那幅古画中，一位穿蓝裙的少女站在河边。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/maiden"],
      ["first-occurrence","初次的；首次的","adj.",["初次的"],["first-occurrence"],"The ship's maiden voyage was delayed by a storm in the Channel.","这艘船的处女航因英吉利海峡的风暴而推迟。","maiden voyage / maiden speech","https://www.vocabulary.com/dictionary/maiden"],
      ["unmarried-virgin","未婚的；处女的","adj.",["未婚的","处女的"],["unmarried-female"],"The maiden aunt in the novel refuses every offer of marriage.","小说中那位终身未婚的姑妈拒绝了每一次求婚。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/maiden"]
    ], [
      {"terms":["无经验的"],"decision":"restricted-verified","reason":"旧词典把 maiden 释为“无经验的”，现代词典只在 maiden voyage 等搭配里暗示“初次、缺乏经验”，并未单列这个形容词义项，故不设学习义项。","source":"https://www.vocabulary.com/dictionary/maiden"}
    ]);
    entry("housewife", [
      ["homemaker","家庭主妇","n.",["主妇","家庭妇女"],["homemaker-wife"],"The survey asked every housewife in the village how many hours she spent cooking.","这项调查询问村里每位家庭主妇花多少时间做饭。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/housewife"]
    ]);
    entry("comrade", [
      ["political-comrade","同志（同志间的称呼）","n.",["同志"],["political-comrade"],"The speaker greeted the audience as comrades and began his report on the harvest.","演讲者以“同志”称呼听众，随后开始汇报收成情况。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/comrade"],
      ["close-companion","伙伴；战友","n.",["伙伴"],["close-companion"],"My father and his old comrade from the war meet for lunch every spring.","我父亲和他战时的老战友每年春天都会一起吃午饭。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/comrade"]
    ]);
    entry("heroine", [
      ["female-hero","女英雄","n.",["巾帼英雄"],["female-hero"],"The villagers still tell stories about the heroine who carried children out of the flood.","村民们至今仍在讲述那位把孩子们从洪水中救出的女英雄的故事。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/heroine"],
      ["female-lead","女主角","n.",["女主角"],["female-lead-role"],"In the final scene the heroine walks off the stage without saying a word.","最后一幕中，女主角一言不发地走下舞台。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/heroine"]
    ], [
      {"terms":["烈妇"],"decision":"scope-excluded","reason":"“烈妇”是旧式贞节观念的译法，现代词典的 heroine 只有“女英雄、女主角”两类义项，因此不列为学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/heroine"},
      {"terms":["海洛因","二醋吗啡","二乙酰吗啡"],"decision":"scope-excluded","reason":"这三个片段都是毒品 heroin（海洛因）的释义，与 heroine 是同音异形词，旧词库误并成一条；heroine 本身没有毒品义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/heroine"}
    ]);
    entry("actress", [
      ["female-performer","女演员","n.",["女演员"],["female-stage-film-performer"],"The actress spent six months learning to play the violin for the role.","为了这个角色，这位女演员花了六个月学拉小提琴。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/actress"]
    ]);
    entry("chancellor", [
      ["senior-minister","（英）财政大臣；高级官员","n.",["财政大臣"],["senior-government-minister"],"The chancellor announced tax cuts for small businesses in his autumn statement.","财政大臣在秋季声明中宣布为小企业减税。","the Chancellor (of the Exchequer)","https://dictionary.cambridge.org/dictionary/english/chancellor"],
      ["head-of-government","总理；首相（德国、奥地利等）","n.",["总理","首相"],["head-of-government"],"The documentary follows a newly elected chancellor through her first week in office.","这部纪录片跟拍一位新当选总理上任后的第一周。",null,"https://www.vocabulary.com/dictionary/chancellor"],
      ["university-head","大学校长（英国多为名誉职位）","n.",["大学校长"],["university-chancellor"],"The chancellor handed each graduate a certificate at the end of the ceremony.","典礼结束时，校长为每位毕业生颁发了证书。",null,"https://dictionary.cambridge.org/dictionary/english/chancellor"]
    ], [
      {"terms":["大使馆/领事馆的一等秘书"],"decision":"restricted-verified","reason":"该义指使馆或领馆内负责文书与行政的主管（head of chancery），属于专门的驻外职务称谓，并非通用词义，故保留追溯。","source":"https://www.vocabulary.com/dictionary/chancellor"},
      {"terms":["司法官"],"decision":"restricted-verified","reason":"该义只见于英国 Lord Chancellor（大法官）等特定官职，本次核对的可读条目未把它列为独立义项，故不设学习义项。","source":"https://www.vocabulary.com/dictionary/chancellor"},
      {"terms":["大臣"],"decision":"context-required","reason":"英国语境的 the Chancellor 通常特指财政大臣，或 Lord Chancellor 等特定官职；不是任意一位大臣的通称。","source":"https://dictionary.cambridge.org/dictionary/english/chancellor"}
    ]);
    entry("barber", [
      ["haircutter","理发师","n.",["理发师"],["haircutting-tradesman"],"The barber on the corner keeps a row of combs in his window.","街角的理发师在橱窗里摆了一排梳子。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/barber"],
      ["cut-hair","为…理发；修剪胡须","v.",["给…理发"],["cut-hair-beard"],"A young apprentice barbered the old man while I waited for my turn.","我排队等候时，一位年轻学徒给那位老人理了发。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/barber"]
    ]);
    entry("butcher", [
      ["meat-vendor","屠夫；肉商","n.",["屠夫","肉商"],["meat-vendor"],"The butcher wrapped the lamb chops in brown paper and wished us a good weekend.","肉商把羊排用牛皮纸包好，祝我们周末愉快。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/butcher"],
      ["slaughter-animals","屠宰（牲畜）","v.",["屠宰"],["slaughter-livestock"],"They butcher only three pigs a week and sell every cut at the market.","他们每周只宰三头猪，把各个部位都拿到市场上卖。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/butcher"],
      ["massacre","屠杀；残杀","v.",["屠杀"],["mass-killing"],"The invading troops butchered hundreds of villagers in a single night.","入侵部队一夜之间屠杀了数百名村民。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/butcher"],
      ["ruin-clumsily","弄糟；糟蹋（表演、作品等）","v.",["弄糟"],["ruin-clumsily"],"He butchered the French words so badly that nobody understood his order.","那几个法语词他念得糟透了，没人听懂他点了什么。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/butcher"]
    ], [
      {"terms":["小贩"],"decision":"restricted-verified","reason":"该义只出现在旧词典所述“剧院、火车上的小贩”这一有限场景，现代常用词典以“屠夫、肉商”为主，故不作为学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/butcher"}
    ]);
    entry("hostess", [
      ["female-host","女主人（招待客人者）","n.",["女主人"],["female-greeter-host"],"Our hostess greeted us at the door and took our coats before dinner.","女主人在门口迎接我们，并在晚饭前接过我们的外套。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hostess"],
      ["female-innkeeper","女房东；女老板（客栈女主人）","n.",["女房东","女老板"],["female-innkeeper"],"The hostess of the small inn cooked breakfast for everyone herself.","那家小客栈的女老板亲自为大家做早饭。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hostess"],
      ["air-hostess","（客机上的）女乘务员","n.",["空姐","女乘务员"],["air-hostess","passenger-service-attendant"],"The air hostess asked us to place our bags under the seats before departure.","起飞前，女乘务员请我们把包放在座位下方。","air hostess","https://api.dictionaryapi.dev/api/v2/entries/en/hostess"],
      ["restaurant-greeter","（餐厅的）女领位员；女接待员","n.",["女领位员","女接待员"],["restaurant-reception-staff"],"The hostess checked our reservation and led us to a table by the window.","女领位员核对了我们的预订，带我们来到窗边的桌子。",null,"https://www.collinsdictionary.com/dictionary/english/hostess"],
      ["presenter","女主持人","n.",["女主持人"],["female-programme-presenter"],"The hostess introduced the next guest on the evening radio show.","女主持人在晚间广播节目中介绍了下一位嘉宾。",null,"https://www.collinsdictionary.com/dictionary/english/hostess"]
    ]);
    entry("oath", [
      ["solemn-vow","誓言；誓约","n.",["誓约","誓言","宣誓"],["solemn-vow","promise-oath"],"Witnesses must take an oath before they give evidence in court.","证人在法庭作证前必须宣誓。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/oath"],
      ["swear-word","咒骂；脏话","n.",["咒骂"],["swear-word"],"Angry oaths echoed down the corridor after he dropped the tray.","他打翻托盘后，愤怒的咒骂声在走廊里回荡。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/oath"]
    ]);
    entry("pledge", [
      ["solemn-promise-n","誓言；诺言；保证","n.",["诺言","保证","誓言"],["solemn-promise","promise-oath"],"The government's pledge to cut waiting times has not yet been kept.","政府关于缩短等候时间的承诺至今尚未兑现。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/pledge"],
      ["collateral-token","抵押品；信物","n.",["抵押","信物"],["collateral-security","token-of-faith"],"He left his watch with the pawnbroker as a pledge for the loan.","他把手表留给当铺作为借款的抵押。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/pledge"],
      ["drinking-toast","（正式、较少用）举杯祝…健康","vt.",["祝愿","举杯祝...健康"],["drinking-toast"],"The guests pledged the young couple's health before dinner began.","晚宴开始前，宾客们举杯祝这对年轻夫妇健康。","pledge someone's health","https://api.dictionaryapi.dev/api/v2/entries/en/pledge"],
      ["promise-verb","保证；发誓；使某人承诺","v.",["许诺","使发誓"],["promise-solemnly"],"She pledged to phone her mother every Sunday evening.","她保证每周日晚上给母亲打电话。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/pledge"],
      ["pawn-deposit","典当；抵押（物品）","v.",["典当"],["pawn-deposit"],"He had to pledge his car to cover the hospital bill.","他不得不把车典当出去，以支付住院费。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/pledge"]
    ], [
      {"terms":["保人"],"decision":"scope-excluded","reason":"“保人”是保证人身份的旧译，本次核对的条目把 pledge 的名词义列为誓言、抵押品、祝酒，并未单列“保证人”，故保留追溯而不作学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/pledge"}
    ]);
    entry("dispute", [
      ["argument","争论；争端；纠纷","n.",["争论","争议","纠纷","争执"],["heated-argument","legal-conflict"],"A long dispute over water rights has strained relations between the two farms.","一场长期的水权纠纷使两个农场之间的关系变得紧张。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/dispute"],
      ["question-verb","质疑；对…提出异议","v.",["质疑","对…提出异议"],["call-into-question"],"Few scientists now dispute the evidence that the ice sheets are thinning.","如今很少有科学家质疑冰盖正在变薄的证据。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/dispute"],
      ["contest-claim","争夺（土地、权力等）","v.",["争夺"],["claim-contested"],"Both countries dispute ownership of the small island and its fishing grounds.","两国都争夺这座小岛及其渔场的主权。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/dispute"]
    ]);
    entry("notify", [
      ["inform","通知；告知；通告","vt.",["通知","通告","报告"],["give-notice"],"Please notify your landlord in writing before you move out at the end of June.","请在六月底搬走之前以书面形式通知房东。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/notify"]
    ]);
    entry("hasten", [
      ["hurry","赶快；急忙（做某事）","v.",["赶快","急忙"],["hurry-up-doing"],"She hastened back to the office to fetch the files she had forgotten.","她急忙赶回办公室去取忘带的文件。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hasten"],
      ["speed-up","加速；促成；催促","vt.",["催促","加紧"],["speed-up-process"],"Rising sea levels have hastened the erosion of the coastal path.","海平面上升加速了这条海边小路的侵蚀。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/hasten"]
    ]);
    entry("applaud", [
      ["clap","鼓掌；喝彩","v.",["拍手喝彩"],["clap-approval"],"The audience stood up and applauded for well over a minute.","观众起立鼓掌了一分多钟。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/applaud"],
      ["praise","称赞；赞同","v.",["称赞","赞同"],["praise-approval"],"Doctors applauded the decision to ban smoking in public parks.","医生们赞同在公园禁烟的决定。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/applaud"]
    ]);
    entry("preach", [
      ["deliver-sermon","布道；传道","v.",["传道","讲道","布道"],["deliver-sermon"],"The vicar preached about forgiveness for nearly half an hour.","牧师讲了将近半小时关于宽恕的布道。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/preach"],
      ["moralize","说教；唠叨地劝诫","v.",["说教"],["unsolicited-advice"],"My uncle keeps preaching at me about saving money for a rainy day.","我叔叔总是唠叨着要我存钱以备不时之需。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/preach"],
      ["advocate","鼓吹；宣扬","v.",["宣讲","鼓吹"],["publicly-advocate"],"For years she preached the benefits of cycling to anyone who would listen.","多年来，她向任何愿意听的人宣扬骑自行车的好处。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/preach"]
    ]);
    entry("smuggle", [
      ["contraband","走私；偷运","v.",["偷运","走私","私运"],["smuggle-contraband"],"Customs officers found forty kilograms of ivory smuggled inside a shipment of furniture.","海关人员在一批家具货物中发现了四十公斤走私象牙。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/smuggle"]
    ]);
    entry("arouse", [
      ["evoke","引起；激起（情感、反应）；激励","v.",["引起","鼓励"],["evoke-emotion","inspire-action"],"Her strange question aroused the suspicion of the customs officer.","她那个奇怪的问题引起了海关官员的怀疑。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/arouse"],
      ["wake","唤醒；叫醒","v.",["唤醒","醒来"],["wake-from-sleep"],"The sound of the gate aroused him from a deep sleep.","大门的声音把他从沉睡中唤醒。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/arouse"]
    ]);
    entry("tilt", [
      ["slope-n","倾斜；倾角","n.",["倾斜"],["slope-angle"],"The tower has a slight tilt of about three degrees to the south.","这座塔向南有大约三度的轻微倾斜。",null,"https://www.vocabulary.com/dictionary/tilt"],
      ["incline","（使）倾斜；倾侧","v.",["使倾斜","使倾侧","翘起"],["incline-lean"],"She tilted the watering can so that the last drops reached the roots.","她倾斜洒水壶，让最后几滴水落到根部。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/tilt"],
      ["bias","倾向；偏向","n.",["倾向"],["leaning-preference"],"The committee's tilt towards larger farms worried the smallholders.","委员会偏向大农场的倾向让小型农户感到担忧。",null,"https://www.vocabulary.com/dictionary/tilt"],
      ["joust","（持矛）冲刺；比武","v.",["冲"],["lance-charge"],"The two knights tilted at each other three times before the crowd.","两名骑士在人群面前互相冲刺了三次。","tilt at somebody","https://api.dictionaryapi.dev/api/v2/entries/en/tilt"]
    ], [
      {"terms":["船篷","车篷","用帆布篷遮盖"],"decision":"scope-excluded","reason":"这三个片段是 tilt 作“船篷、车篷”及动词“用帆布篷遮盖”的古旧义，现代英语已基本不用，本批不设学习义项。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/tilt"},
      {"terms":["评击"],"decision":"restricted-verified","reason":"“评击”即“抨击”，只见于 tilt at（言语攻击）这一固定说法，本次核对的可读条目未把该及物义单列，故保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/tilt"}
    ]);
    entry("abdomen", [
      ["belly-region","腹部","n.",["腹部","腹"],["belly-region"],"The pain began in his lower abdomen and later moved to his back.","疼痛起初在他的下腹部，后来转移到了背部。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/abdomen"]
    ]);
    entry("intestine", [
      ["bowel","肠","n.",["肠"],["bowel-gut"],"The doctor said the infection had spread to his small intestine.","医生说感染已经扩散到他的小肠。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/intestine"],
      ["internal-domestic","内部的；国内的（古旧）","adj.",["内部的","国内的"],["internal-domestic"],"The historian traced the country's decline to decades of intestine strife.","这位历史学家把该国的衰落归因于数十年的内乱。",null,"https://www.collinsdictionary.com/us/dictionary/english/intestine"]
    ]);
    entry("kidney", [
      ["organ","肾；肾脏","n.",["肾"],["kidney-organ"],"She was born with only one kidney and has regular check-ups.","她天生只有一个肾，需要定期检查。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/kidney"],
      ["offal","（食用的）动物腰子","n.",["腰子"],["offal-food"],"The pie is filled with steak and kidney and a thick brown gravy.","这个馅饼里包着牛排和腰子，还有浓稠的棕色肉汁。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/kidney"],
      ["temperament","脾性；类型","n.",["个性"],["temperament-type"],"He is a politician of the old kidney, suspicious of every new idea.","他属于老派政客一类，对任何新想法都心存疑虑。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/kidney"]
    ]);
    entry("womb", [
      ["uterus","子宫","n.",["子宫"],["uterus-organ"],"The baby's heartbeat could be heard clearly through the wall of the womb.","透过子宫壁可以清楚地听到胎儿的心跳。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/womb"],
      ["origin","发源地；孕育处","n.",["发源地"],["origin-source"],"The valley is often called the womb of the country's folk music.","这条山谷常被称为这个国家民间音乐的发源地。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/womb"]
    ]);
    entry("muscle", [
      ["tissue","肌肉","n.",["肌肉","肌"],["muscle-tissue"],"He pulled a muscle in his calf during the second lap of the race.","比赛第二圈时，他拉伤了小腿肌肉。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/muscle"],
      ["strength","力气；（政治、经济）实力","n.",["臂力"],["physical-power","institutional-clout"],"The union used its financial muscle to block the proposed merger.","工会利用其财力阻止了这项拟议的合并。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/muscle"],
      ["force-way","强行挤过；用力推动","v.",["强行挤过"],["force-way-through"],"Reporters muscled their way towards the front of the crowd.","记者们用力挤到人群前面。","muscle one's way into / through","https://api.dictionaryapi.dev/api/v2/entries/en/muscle"]
    ]);
    entry("surgeon", [
      ["operating-doctor","外科医生","n.",["外科医生","军医","船医","外科医师"],["operating-doctor"],"The surgeon explained that the operation would take about four hours.","外科医生解释说手术大约需要四个小时。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/surgeon"]
    ]);
    entry("surgery", [
      ["operation","外科手术；手术","n.",["手术"],["surgical-operation"],"She needs surgery on her knee before the season starts.","赛季开始前她的膝盖需要做手术。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/surgery"],
      ["specialty","外科（学科）","n.",["外科"],["surgical-specialty"],"He trained in surgery for six years before joining the hospital.","他在加入这家医院之前接受了六年的外科训练。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/surgery"],
      ["clinic-room","（英）诊所；诊室","n.",["诊所","诊室"],["clinic-room"],"The village surgery opens at nine and closes at five on weekdays.","村里的诊所周一到周五九点开门，五点关门。",null,"https://dictionary.cambridge.org/dictionary/english/surgery"],
      ["operating-room","（美、加）手术室","n.",["手术室"],["operating-theatre"],"A nurse checked the equipment in the surgery before the surgeon arrived.","外科医生到来前，一名护士检查了手术室里的设备。",null,"https://www.collinsdictionary.com/dictionary/english/surgery"],
      ["consultation-hours","（英）门诊时间","n.",["门诊时间"],["medical-consultation-hours"],"Morning surgery ends at eleven, so I booked an appointment for ten.","上午门诊时间到十一点结束，所以我约了十点就诊。",null,"https://www.collinsdictionary.com/dictionary/english/surgery"],
      ["advice-session","（英）议员接待选民的时间","n.",["议员接待时间"],["representative-constituency-session"],"Residents queued outside the hall before the councillor's weekly surgery.","地方议员每周接待开始前，居民们就在礼堂外排起了队。",null,"https://www.collinsdictionary.com/dictionary/english/surgery"]
    ], [
      {"terms":["换球术"],"decision":"scope-excluded","reason":"“换球术”在可读的词典条目里找不到任何对应义项，疑为旧词库串行误录；surgery 没有体育换球的意思，故只保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/surgery"}
    ]);
    entry("dentist", [
      ["dental-doctor","牙医","n.",["牙科医生","牙医师"],["dental-doctor"],"I have to see the dentist because one of my fillings has come loose.","我得去看牙医，因为我的一颗补牙松动了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/dentist"]
    ]);
    entry("diabetes", [
      ["mellitus","糖尿病","n.",["糖尿病"],["diabetes-mellitus"],"Her father has lived with type 2 diabetes for more than twenty years.","她父亲患2型糖尿病已经二十多年了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/diabetes"],
      ["insipidus","尿崩症（仅限 diabetes insipidus 搭配）","n.",["尿崩症"],["diabetes-insipidus"],"The researcher wrote diabetes insipidus in full to distinguish the term from other diagnoses.","研究者把尿崩症的英语名称写全，以区别于其他诊断。","diabetes insipidus","https://dictionary.cambridge.org/dictionary/english/diabetes-insipidus"]
    ], [
      {"terms":["多尿症"],"decision":"context-required","reason":"多尿是症状描述，不能泛作 diabetes 的单词释义。尿崩症须用完整术语 diabetes insipidus，不能与通常指糖尿病的 diabetes 混为一义。","source":"https://dictionary.cambridge.org/dictionary/english/diabetes-insipidus"}
    ]);
    entry("paralyse", [
      ["cause-paralysis","使瘫痪；使麻痹","v.",["使麻痹","使瘫痪"],["cause-paralysis"],"The accident paralysed him from the waist down.","那场事故使他腰部以下瘫痪。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/paralyse"],
      ["bring-to-halt","使无法正常运转；使陷入停顿","v.",["使无法正常运作","使丧失活动能力"],["bring-to-halt"],"Heavy snow paralysed the airport for two days last winter.","去年冬天的大雪使机场瘫痪了两天。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/paralyse"]
    ]);
    entry("initially", [
      ["at-first","最初；起初","adv.",["最初","开头"],["at-the-beginning"],"Initially she planned to study law, but a summer job in a lab changed her mind.","起初她打算学法律，但在一家实验室的暑期工作改变了她的想法。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/initially"]
    ]);
    entry("intermediate", [
      ["in-between","中间的","adj.",["中间的"],["in-between-position"],"The intermediate stage of the process takes about ten minutes.","这个过程的中间阶段大约需要十分钟。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/intermediate"],
      ["mid-level","中级的；中等程度的","adj.",["中级","中级的"],["mid-level"],"She joined an intermediate class after passing the beginner's exam.","通过初级考试后，她加入了一个中级班。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/intermediate"],
      ["substance","中间物；中间产物","n.",["中间物"],["intermediate-substance"],"In this reaction a short-lived intermediate forms before the final product.","在这个反应中，最终产物之前会生成一种寿命很短的中间产物。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/intermediate"],
      ["go-between","中间人；调停者","n.",["调停者"],["go-between-person"],"He acted as an intermediate between the two families during the negotiations.","谈判期间他充当两个家庭之间的中间人。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/intermediate"],
      ["mediate","起媒介作用；居中调解","vi.",["起媒介作用"],["mediate-between"],"Small local banks intermediate between savers and borrowers in the region.","当地的小银行在储户和借款人之间充当媒介。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/intermediate"]
    ]);
    entry("meantime", [
      ["intervening-period","其间；间隔时间","n.",["间隔时间","其间"],["intervening-period"],"The new bridge will not open until spring; in the meantime, drivers must use the ferry.","新桥要到春天才通车；在此期间，司机只能乘渡轮。","in the meantime","https://api.dictionaryapi.dev/api/v2/entries/en/meantime"],
      ["meanwhile-adv","在此期间；同时","adv.",["其时"],["meanwhile"],"The children were asleep; meantime, their parents packed for the trip.","孩子们睡着了；与此同时，父母在为旅行收拾行李。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/meantime"]
    ]);
    entry("preceding", [
      ["occurring-before","在前的；先前的；前面的","adj.",["在前的","在先的","前面的","先前的"],["occurring-before"],"The preceding chapter explains how the data were collected and checked.","前一章解释了这些数据是如何收集和核对的。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/preceding"]
    ]);
    entry("precedent", [
      ["earlier-example","先例；前例","n.",["先例","前例"],["earlier-example"],"The court's ruling set a precedent that lower courts now follow.","法院的裁决确立了下级法院如今遵循的先例。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/precedent"],
      ["legal-case","（可作为依据的）判例","n.",["判例"],["court-precedent"],"Lawyers cited a precedent from 1932 to support their argument.","律师们援引了1932年的一个判例来支持他们的论点。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/precedent"],
      ["prior-adj","在先的；在前的","adj.",["在先的","在前的"],["prior-in-time"],"The committee studied precedent cases from three other provinces.","委员会研究了其他三个省的在先案例。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/precedent"]
    ]);
    entry("foremost", [
      ["most-important","最重要的；首要的","adj.",["最重要的"],["most-prominent"],"She is one of the country's foremost experts on ancient glass.","她是该国古代玻璃研究领域最重要的专家之一。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/foremost"],
      ["frontmost","最前面的","adj.",["最前面的"],["frontmost"],"He took a seat in the foremost row so that he could hear everything.","他坐在最前排，以便听清所有内容。",null,"https://www.collinsdictionary.com/dictionary/english/foremost"],
      ["at-front","首先；最重要地","adv.",["首先","最重要地","在最前"],["priority-first"],"First and foremost, the guide asks every walker to carry enough water.","首先，也是最重要的，向导要求每位徒步者带足饮用水。","first and foremost","https://www.collinsdictionary.com/dictionary/english/foremost"]
    ], [
      {"terms":["最初的"],"decision":"restricted-verified","reason":"Collins 另有 first in time 的用法；本条 frontmost 的例句只展示位置，不用它证明时间义。","source":"https://www.collinsdictionary.com/dictionary/english/foremost"}
    ]);
    entry("permanent", [
      ["lasting","永久的；持久的","adj.",["永久的","持久的"],["lasting-forever"],"The damage to the coral reef may be permanent.","珊瑚礁受到的损害可能是永久的。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/permanent"],
      ["fixed","固定的；长期的（非临时的）","adj.",["不变的","固定的"],["not-temporary"],"After two years on short contracts, she finally found a permanent job.","做了两年短期合同工之后，她终于找到了一份固定工作。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/permanent"],
      ["perm","烫发","n.",["烫发"],["hair-perm"],"She had a permanent before the wedding and regretted it the next morning.","婚礼前她烫了发，第二天早上就后悔了。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/permanent"]
    ]);
    entry("punctual", [
      ["on-time","准时的；守时的","adj.",["准时的","守时的","不误期的","准时"],["on-time"],"She is always punctual, so it was odd that she arrived twenty minutes late.","她一向守时，所以迟到二十分钟显得很奇怪。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/punctual"]
    ], [
      {"terms":["点状的"],"decision":"restricted-verified","reason":"该义见于数学与语言学（“点状的、无持续时间的”），属于专门术语，不是本批的常用义。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/punctual"},
      {"terms":["中肯的"],"decision":"scope-excluded","reason":"本次核对的条目没有“中肯的”这一义项，疑为旧词库把 punctual 与 punctilious 混为一谈，故只保留追溯。","source":"https://api.dictionaryapi.dev/api/v2/entries/en/punctual"}
    ]);
    entry("periodically", [
      ["regular-intervals","定期地；周期性地","adv.",["周期性地","定期地"],["at-regular-intervals"],"The machines are checked periodically to make sure they are safe to use.","这些机器会定期检查，以确保使用安全。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/periodically"],
      ["intermittently","时而；间或","adv.",["时而","间或"],["intermittently"],"Periodically a car would pass, but otherwise the road stayed empty.","偶尔有车经过，除此之外路上一直空荡荡的。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/periodically"]
    ]);
    entry("recent", [
      ["short-while-ago","最近的；最新的","adj.",["最近的","最新的"],["happened-shortly-ago"],"Recent rainfall has raised the level of the reservoir by nearly a metre.","最近的降雨使水库水位上升了近一米。",null,"https://api.dictionaryapi.dev/api/v2/entries/en/recent"]
    ], [
      {"terms":["近代的","新进的"],"decision":"context-required","reason":"recent 指不久前的、新近的；原 modern-near 与 short-while-ago 是同一时间含义，合并训练，不能理解为历史分期“近代”或“先进”。","source":"https://www.collinsdictionary.com/dictionary/english/recent"}
    ]);
  }
  if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch08=register;
})(typeof window==='object'?window:globalThis);
