# 第十六批义项整理与正式接入

日期：2026-11-11。版本：v1.16.0。基线：f85ed23530c2df3ea0ee0f4ea5f517ea7178f9af（v1.15.0）。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第十六批 | 200 | 442 |
| 前十五批 | 2,471 | 6,431 |
| 累计正式范围 | 2,671 | 6,873 |
| 其余尚未结构化的正式词 | 1,576 | — |

## 筛选与数据边界

本批改为从已经背过、尚未整理的正式词中选择。通过正常应用界面导出的学习快照，结合公共词 ID、归一化拼写、整词学习记录、逐题作答和已完成义项记录确认学习证据，并排除前十五批词。200 词均有学习证据、均出现在导出词表中，且无重复或缺失。这里的“已背过”表示存在学习证据，不表示所有义项已经掌握。

新增 Audit-LearnedSenseBatchSelection.cjs 复用原审计器的历史记录归并逻辑，并要求正向学习证据；原未学筛选审计器保持原有行为。具体导出时间、候选池、学习记录和审计详情只留在本机忽略目录。公开源码和发行包不包含个人学习数据。原词 ID、笔记、收藏、学习记录和旧义项完成状态不批量重写，新义项不会因整词学过而自动标记完成。

## 编辑与实际来源

逐词核对 200 个 Merriam-Webster 条目，并复核多义词与交叉引用的实际定义。civilisation 保留原词库英式拼写，定义链接指向 civilization；bureaucratism 按实际交叉引用链接至 bureaucracy 的官僚作风用法。每义保存稳定 ID、词性、中文解释、近义排除概念、来源链接和原创英汉例句；有固定构式的义项另标 construction。例句由本项目编写，不复制词典例句。

旧译通过义项别名或 121 组具体范围说明保留可追溯性。longitude 不等于经线，microphone 不等于扬声器；found 的建立及基于用法与 find 的过去式分开；remote 的旧式软件工具名、hierarchy 的新闻组专门用法保留范围说明。各词按教学范围取舍，不声称覆盖全部历史、专业或习语义。

## 多义、发音与近义边界

pitch 整理 11 义，order 9 义，screen 7 义，default 5 义，分别用具体语境区分。minute 按当前整词 /ˈmɪnɪt/ 发音整理分钟、片刻、会议记录及记录会议四义，另一读音的微小、细致用法保留参考说明，避免发音混配。hydrosphere 包含水体及水汽；botanical 与 biological、annual 与 perennial、literacy 与 illiteracy 等不误并。

blossom/flower、contaminate/pollute、explain/clarify、sacred/hallowed/holy、mock/rib/tease、finance/endow/fund 等补充跨批近义选项排除。范围并不相同的词仍保留各自义项、构式与例句。

## 接入与验证

公共词库、生产目录、按需模块、小型首页索引和离线缓存同步接入。四轮各 50 词覆盖本批 442 个目标，完成后不再抽取；回归检查选项锁定、近义排除、无回忆降级、全库例句去重、学习状态与续练兼容。浏览器精确定位 pitch 的十一义并检查对应例句，继续覆盖备份恢复和离线行为。桌面自检使用独立数据目录，私人词库、星云和生活彗星保持隔离。

## 本批公共词表

| 组 | 单词 |
| --- | --- |
| 1 | `hydrosphere` · `lithosphere` · `altitude` · `horizon` · `erupt` · `eruption` · `crust` · `mantle` · `longitude` · `oxygen` |
| 2 | `photosynthesis` · `botanical` · `cultivate` · `seedling` · `biodiversity` · `suburb` · `pollution` · `remote` · `contaminate` · `distance` |
| 3 | `endanger` · `habitat` · `bud` · `blossom` · `ripen` · `germ` · `ripe` · `wither` · `terrace` |
| 4 | `orbit` · `cosmic` · `hare` · `frog` · `bite` · `hive` · `barrier` · `anatomy` · `epidemic` |
| 5 | `curriculum` · `tuition` · `literacy` · `assessment` · `observatory` · `substance` · `telescope` · `spectacle` · `sample` |
| 6 | `automate` · `device` · `thorough` · `inductive` · `detailed` · `exemplify` · `agreeable` · `manifest` · `observe` |
| 7 | `heritage` · `civilisation` · `keyboard` · `screen` · `vision` · `microphone` · `fantasy` · `wireless` · `purify` |
| 8 | `dialect` · `evolve` · `vocabulary` · `sacred` · `hallowed` · `choir` · `empire` · `church` · `chronology` |
| 9 | `athlete` · `suffix` · `adjective` · `abbreviation` · `adverb` · `synonym` · `preposition` · `tension` · `abbreviate` |
| 10 | `durable` · `transparent` · `skate` · `tent` · `dive` · `camp` · `leap` · `hunt` · `trip` |
| 11 | `trend` · `garment` · `bronze` · `pitch` · `plaster` · `linen` · `cotton` · `plastic` · `nylon` |
| 12 | `ingredient` · `dietary` · `immune` · `slender` · `edible` · `barbecue` · `treatment` · `order` · `chef` |
| 13 | `itinerary` · `destination` · `commute` · `vehicle` · `interior` · `navigate` · `voyage` · `aviation` · `travel` |
| 14 | `jurisdiction` · `penalty` · `legislate` · `official` · `default` · `allowance` · `impotent` · `oblige` · `rejection` |
| 15 | `conflict` · `alliance` · `strategy` · `tank` · `target` · `pistol` · `glitter` · `blade` · `sword` |
| 16 | `psychological` · `psychology` · `shoulder` · `tongue` · `jaw` · `waist` · `thumb` · `rib` · `thigh` |
| 17 | `annual` · `simultaneous` · `moment` · `midst` · `ongoing` · `everlasting` · `consecutive` · `finally` · `minute` |
| 18 | `chew` · `toast` · `squeeze` · `stir` · `found` · `structure` · `stability` · `obstruct` · `landmark` |
| 19 | `marxism` · `hierarchy` · `government` · `communist` · `common` · `bureaucratism` · `banner` · `president` · `premier` |
| 20 | `market` · `endow` · `industry` · `advertise` · `merchant` · `endowment` · `finance` · `coupon` · `exchange` |
| 21 | `gay` · `infant` · `sibling` · `gang` · `teenager` · `lover` · `folk` · `relative` · `teen` |
| 22 | `explain` · `quarrel` · `whistle` · `notice` · `mock` · `urge` · `scold` · `provoke` · `boast` |

反向题候选按词索引，避免为同一候选反复扫描全词池；保留每词全部义项的近义安全检查、原过滤顺序和随机调用。相同随机种子、完整 2,671 词池的对照生成结果逐字段一致，并重新运行全量及浏览器回归。
