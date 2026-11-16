# 第二十二批义项整理与正式接入

日期：2026-11-16。版本：v1.22.0。基线：76722467398174e7119f7f38357c69485eddfeab（v1.21.0）。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第二十二批 | 200 | 559 |
| 前二十一批 | 3,671 | 9,130 |
| 累计正式范围 | 3,871 | 9,689 |
| 其余尚未结构化的正式词 | 376 | — |

## 筛选与数据边界

通过正常应用界面导出最新学习快照，以公共 ID、归一化拼写、整词学习记录、逐题作答和完成记录确认正向学习证据，并排除前二十一批词。200 词全部有已学证据、在导出词表中出现且未整理，无重复、缺失或未学混入。已学不表示每个新义项均已掌握。nino、primate、proliferate、sterility 的旧条仍待单独核查，本批继续跳过。

学习导出、候选池、私人审计和测试用户目录仅在本机忽略目录保存，不进入 GitHub 或发行包。原词 ID、笔记、收藏、学习记录及未完成练习保持兼容。私人词库、星云和生活彗星独立存储；本次不导出这些模块的私人内容。

## 编辑范围与来源

逐词核对实际词典条目。196 词以 [Merriam-Webster](https://www.merriam-webster.com/dictionary/strain) 为主；[Mediterranean](https://www.collinsdictionary.com/dictionary/english/mediterranean)、[Atlantic](https://www.collinsdictionary.com/dictionary/english/atlantic)、[Pacific](https://www.collinsdictionary.com/dictionary/english/pacific) 采用 Collins，核对海洋名称与相关形容词。[dismissible](https://www.vocabulary.com/dictionary/dismissible) 使用实际可访问的 Vocabulary.com 定义，不采用不可访问的同名链接。flat 的电池没电义补充核对 [Collins](https://www.collinsdictionary.com/dictionary/english/flat)。enrol、catalogue、honour、favour 保留原英式拼写，来源指向实际 enroll、catalog、honor、favor 条目。

每义保存稳定 ID、词性、中文解释、必要构式、保守的近义选项排除和原创英汉例句。所有例句为本项目编写，未复制词典例句。范围限于明确列出的教学义，不宣称穷尽历史、习语或专业义。182 组旧译参考说明保留未单列的原词库解释；不因旧库已有便自动认证，也不将本批未采用等同于原译必然错误。

sanction 区分批准与制裁，并分别呈现名词和动词；flat 分列平坦、扁平、平淡、固定费用、轮胎没气、饮料跑气、音高、公寓、降号、电池没电及副词用法，共十三义。stand 九义、strain 八义、lay 八义、can 七义均配有相应语境。

lay 的放置动词用法不与 lie 的过去式混淆。supplement 按当前 /-mənt/ 仅采用名词；subordinate 按 /-nət/ 采用形容词和名词，另读的动词留作参考。sake 按 /seɪk/ 训练 for the sake of，不混入另读的日本清酒。hectic 补入当代常用的忙乱义，旧医学扩展保留参考。

地名及国籍用法在例句中按专名大写；小写 pacific 的和平义与大写 Pacific 区分。Britain 的英国与大不列颠岛分别呈现。statistics 区分单数概念的统计学与复数搭配的统计数据。coed 女生名词配历史语境，hireling 提示贬义，pigeon、donkey 的过时或侮辱性人称不作中性通用称谓；Mediterranean 的旧人种体型分类不作现代中性教学。xerox 复印动词与 Xerox 商标身份分清。

## 接入与验证

公共目录、按需词库列表、首页小型索引和离线缓存同步接入。前二十一批 3,671 个条目的内容保持原样，新增例句与全库既有例句无重复。

27 组相关词和 199 条历史词链接用于保守排除歧义干扰，包括 brook/stream、crowd/throng、pigeon/mug、loser/casualty、safeguard/protection 等。排除关系不表示这些词所有义项完全同义。Atlantic/Pacific、optimistic/pessimistic、positive/negative 及不同政治思想名称保持含义区别。

全词池四轮各 50 词检查全部 559 个新目标、固定选项、无重复、无回忆降级与逐义完成；同时回归历史批次、学习状态、旧版 ID 与原样续练。浏览器精确定位 sanction 四义及批准、制裁例句，检查备份恢复、清除和离线行为；桌面自检使用独立数据目录。发布前核对暂存路径与机密，下载包经内容检查与远端 SHA-256 核验后公开。

## 本批公共词表

| 组 | 单词 |
| --- | --- |
| 1 | `erosion` · `mediterranean` · `atlantic` · `shore` · `pacific` · `tide` · `ocean` · `brook` · `marine` · `stream` · `navigation` · `gulf` · `beach` · `source` · `shallow` · `parallel` · `superficial` · `narrow` · `flat` · `smooth` · `oceania` · `rough` · `mainland` · `peninsula` · `sandy` · `stony` · `vertical` |
| 2 | `pigeon` · `brute` · `crowd` · `crawl` · `donkey` · `fin` · `flexible` · `intelligence` · `lay` · `secrete` · `suffer` · `throng` · `wrong` |
| 3 | `coed` · `senior` · `register` · `enrol` · `accommodation` · `hall` · `library` · `article` · `literary` · `bibliography` · `story` · `biography` · `journal` · `poem` · `series` · `index` · `catalogue` · `file` · `profile` · `inventory` · `brochure` · `chapter` · `frame` · `reel` · `politics` · `statistics` · `minority` |
| 4 | `slide` · `hop` · `journalist` · `strain` |
| 5 | `admission` · `switzerland` · `greece` · `europe` · `euro` · `australian` · `britain` · `egalitarian` · `germany` · `flag` · `overseas` · `reform` · `swiss` · `unique` |
| 6 | `remunerate` · `workforce` · `recommend` · `interviewer` · `hireling` · `sack` · `result` · `dismiss` · `opportunity` · `dismissible` · `loser` · `choose` · `sanction` · `solve` · `choice` · `cooperation` · `management` · `manager` · `regulation` · `benchmark` · `treaty` · `normal` · `coin` · `crisis` · `direct` · `discharge` · `growth` |
| 7 | `executive` · `bury` · `fleet` · `naval` · `navy` · `collapse` · `nuclear` · `risk` · `harmful` · `quit` · `stand` · `harm` · `disturbance` · `interference` · `resist` · `victory` · `defend` · `safeguard` · `defeat` · `victorious` · `contribute` · `devote` · `owe` · `statue` · `honour` · `glory` · `spy` |
| 8 | `commencement` · `omission` · `recover` · `redeem` · `render` · `augment` · `amplify` · `seep` · `evacuate` · `regard` · `saturate` · `cause` · `forgive` · `sake` · `regarding` · `regardless` · `impart` · `seek` · `retrieve` · `participate` · `celebrate` · `accord` · `congratulate` · `recall` · `participant` · `celebration` |
| 9 | `prescribe` · `dose` · `alleviate` · `usual` · `optimistic` · `indifferent` · `pessimistic` · `positive` · `negligible` · `negative` · `normally` · `thrill` · `delight` · `cheer` · `joke` · `exhilarate` · `laugh` · `pleasant` · `joyful` · `desirable` · `exciting` · `hectic` · `fond` · `generous` · `favour` · `excite` |
| 10 | `mushroom` · `radish` · `supplement` · `takeaway` · `vegetarian` |
| 11 | `pirate` |
| 12 | `subordinate` |
| 13 | `xerox` · `can` |
