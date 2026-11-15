# 第二十批义项整理与正式接入

日期：2026-11-15。版本：v1.20.0。基线：0b532b3deaa567cb03ac7ada5bf7d71190d5c816（v1.19.0）。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第二十批 | 200 | 472 |
| 前十九批 | 3,271 | 8,184 |
| 累计正式范围 | 3,471 | 8,656 |
| 其余尚未结构化的正式词 | 776 | — |

## 筛选与数据边界

通过正常应用界面导出当前学习快照，以公共 ID、归一化拼写、整词学习记录、逐题作答和完成记录确认正向学习证据，排除前十九批词。200 词均有已学证据、在导出词表中出现且未整理，无重复和缺失。已学不表示每个新义项均已掌握。nino、primate 继续跳过；proliferate、sterility 的旧音标待另行核查，本批改选同主题且符合条件的 mosquito、camel，不借本批认证这些旧音标。

学习导出、具体时间、候选池、私人审计和测试用户目录仅在本机忽略目录保存，不进入 GitHub 或发行包。原词 ID、笔记、收藏、学习记录及未完成练习保持兼容；私人词库、星云和生活彗星独立存储。

## 编辑范围与来源

逐词核对 Merriam-Webster 的实际条目及必要变体、派生关系。colour 使用 color 的定义，cheque 使用 check 中的支票名词义；counsellor 使用 counselor，instalment 使用 installment，rhythmical 使用 rhythmic。mating 按 mate 的交配及接合动词核对动名词用法。全部英汉例句为本项目原创，来源保存实际条目链接，不复制词典例句。

每义保存稳定 ID、词性、中文解释、必要构式、近义选项排除与对应英汉例句。范围为明确列出的教学义，不宣称穷尽所有历史、习语或专业义。旧译逐项由已采用别名或范围说明保留，未确认的宽泛表达不会因原词库已有而自动成为正确答案。

complex 按当前 /kəmˈpleks/ 训练复杂的形容词，通常首音节重读的综合体、情结等名词留作参考；transfer 按 /trænsˈfɜː(r)/ 训练转移动词；bombard 按 /bɒmˈbɑːd/ 训练炮击、信息围攻和粒子轰击动词，不混入首音节重读的古炮名词。

cover 拆分为覆盖、涵盖、支付、报道、行进距离、保险保障、盖罩、封面、遮蔽、代班及翻唱十一义；stock 区分库存、股票、牲畜、高汤、备货、惯常的和家系七义。sense 分开感官、感觉、合理性、义项和察觉；colour 的颜色、气色、队服或旗帜颜色、涂色及影响各有例句。

groom 区分新郎、马夫、梳洗、培养与为实施侵害而诱骗建立信任。idiot 只采用带侮辱性的蠢人称呼供理解语境，不认证历史医学旧称。respondent 分开受访者及特定程序中的答辩方，不把所有用法一律当作刑事被告。fatigues 的军用工作服使用复数；tire 的轮胎采用美式拼写，英式 tyre 及古旧头饰不混配。

## 接入与验证

生产目录、按需列表、小型首页索引和离线缓存同步接入。相关词采用保守的选项排除，涵盖 thrive/flourish、depict/describe、tire/exhaust/fatigue、demise/death/perish、allure/lure/bait、booklet/pamphlet、falsehood/lie 和 exhaust/beat 等；排除关系不表示所有词义完全同义。棋子马、后与车等中文相似但不同的答案保持区别。

全词池四轮各 50 词覆盖全部 472 个新目标，检查固定选项、无重复、无回忆降级、逐义完成和尾部重做；同时回归历史模块与学习状态。全库例句去重及来源结构完整性检查通过后再发布。浏览器精确定位 stock 的七义及备货、高汤例句，检查原样续练、备份恢复、清除及离线行为。桌面自检使用独立数据目录。

## 本批公共词表

| 组 | 单词 |
| --- | --- |
| 1 | `mist` · `misty` · `smoggy` · `quake` · `seismic` · `avalanche` · `terrain` · `swamp` · `landscape` · `delta` · `continent` · `cave` |
| 2 | `mosquito` · `camel` · `offspring` · `ancient` · `mating` · `curl` · `claw` · `worm` · `whale` · `parasite` · `spider` · `butterfly` |
| 3 | `impetus` · `inspire` · `motivate` · `idiot` · `wisdom` · `aptitude` · `clever` · `capable` · `excellent` · `respect` · `painstaking` · `reputation` |
| 4 | `add` · `assemble` · `gather` · `auxiliary` · `versatile` · `bypass` · `bypath` · `dial` · `laptop` · `sensor` · `multimedia` · `sense` |
| 5 | `spiritual` · `knight` · `queen` · `thrive` |
| 6 | `gallery` · `exhibition` · `sculpture` · `depict` · `describe` · `drawing` · `musical` · `classical` · `solo` · `rhythmical` · `competition` |
| 7 | `ink` · `rubber` · `cover` · `edge` · `memorandum` · `element` · `booklet` · `label` · `jar` · `knob` · `bucket` |
| 8 | `collar` · `stitch` · `thread` · `strap` · `wool` · `colour` · `stain` · `pink` · `ragged` · `tighten` · `button` |
| 9 | `sausage` · `yogurt` · `cheese` · `fish` · `butter` · `sandwich` · `spaghetti` · `pudding` · `pie` · `scallion` · `vinegar` |
| 10 | `complex` · `spacious` · `brickwork` · `plaza` · `castle` · `lever` · `mason` · `apparatus` · `masonry` · `screw` · `dam` |
| 11 | `seaman` · `deck` · `turbine` · `ferry` · `rail` · `arrive` · `lull` · `tunnel` · `postage` · `transfer` · `carrier` |
| 12 | `respondent` · `poll` · `succession` · `safety` · `ambition` · `welfare` · `nomination` · `ambitious` · `harmony` · `guideline` · `flourish` |
| 13 | `absence` · `quota` · `share` · `turnover` · `dump` · `stock` · `deposit` · `copper` · `instalment` · `cheque` · `incentive` |
| 14 | `succumb` · `mortgage` · `access` · `ownership` · `request` · `routine` · `consequent` · `falsehood` · `instruction` · `violence` · `bombard` |
| 15 | `terrific` · `turmoil` · `scenario` · `limit` · `boundary` · `turbulence` · `occasionally` · `dreadful` · `tactic` · `contend` · `blueprint` |
| 16 | `counsellor` · `solicitor` · `umpire` · `cashier` · `groom` · `coward` · `hostage` · `beggar` · `behave` · `respond` · `exhale` |
| 17 | `revenge` · `kidnap` · `hijack` · `smuggler` · `bait` · `strangle` · `massacre` · `impede` · `allure` · `temptation` · `lure` |
| 18 | `demise` · `bruise` · `scar` · `fatal` · `overwork` · `death` · `tire` · `tired` · `exhaust` · `fatigue` · `faint` |
| 19 | `eco-friendly` · `perish` · `preserve` · `reed` · `shade-tolerant` |
