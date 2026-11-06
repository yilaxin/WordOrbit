# 第九批义项整理与正式接入

日期：2026-11-06。开工基线：`4ecb93cd9c874556f1650deaf33e98132b25326f`（v1.8.1）。本轮用户同时授权数据整理、复核、接入练习及桌面/GitHub 更新，发布版本 v1.9.0。

## 数量与边界

| 范围 | 词数 | 义项/原创英汉例句组 |
| --- | ---: | ---: |
| 第九批新词 | 200 | 499 |
| 第二批五词完成复核后 | 5 | 57（其中本次新增 17） |
| 01–08 当前累计，含五词补充 | 1,130 | 2,843 |
| 全部已结构化且接入 | 1,330 | 3,342 |
| 正式公共词中尚未结构化 | 2,917 | — |

本次实际新写 516 组英汉例句：五词补充 17 组，加新批次 499 组。五词原先已有的 40 组此前未进入完整覆盖训练，本版一并启用，因此上线范围比 v1.8.1 多 205 词、556 个义项。

第九批 200 词与开工前全部 1,130 个词键无重叠。未学依据为通过正常桌面导出取得的完整授权快照；任一 seen/correct/wrong、lastSeen 或逐题记录命中即排除，并按归一化拼写关联历史 ID。导出里没有的词不能算未学。真实时间、记录、候选池与筛选报告只存本机忽略目录；这是一份导出时点的核对，不声称持续实时监控。

## 词义和例句

逐词核对 Collins 原始词条，必要时查 Merriam-Webster。`jeopardise`、`emphasise` 使用明确列出英式变体的 `jeopardize`、`emphasize` 条目；`alumni` 跟进 `alumnus`，`dorm` 跟进 `dormitory`。`joggers`、`gas up`、`turn turtle`、`soup up` 等使用已读的具体搭配条目；数据库 query 另使用 Microsoft SQL 查询原始文档。来源逐义保留，不将词典例句复制为训练句。

英文例句与中文译句逐项人工对照，程序另检查词形、重复、来源、字段与出题结构。例句本身均为本项目原创。`esteem` 的同一尊敬义及 `skilful` 的同一技能义没有为增加数量而重复拆分；语义有实质区别的类型另立 ID，例如 appropriate 的合适/挪用/拨款、chemistry 的学科/化学性质/人际默契、resolution 的六个用法。

每个参考旧译分别标记 `context-required`、`restricted-verified` 或 `scope-excluded` 并解释原因。`scope-excluded` 不表示历史上不存在此用法；例如 stationer 的书商、natural 的侮辱性旧人物名词、satisfactory 的神学义均明确说明历史或领域限制。`oriental` 指人的过时及可能冒犯用法不作常用正确选项；cattle 不泛指全部家畜，fluency 不保证雄辩或说服能力。

## 五词补充

源文件 `sense-completion-02.js` 保留全部 40 个原义项 ID，补入 17 个新义项；range 的 land ID 聚焦分布区，另用 grazing-land 承接放牧地，避免一道题混入两个不同用法。五词此前没有进入 v1.8.1 的义项训练，因此不会使已保存的旧义项目标增删。

| 词 | 原义项 | 新增 | 当前 |
| --- | ---: | ---: | ---: |
| branch | 6 | 2 | 8 |
| trunk | 7 | 2 | 9 |
| stem | 6 | 3 | 9 |
| field | 10 | 5 | 15 |
| range | 11 | 5 | 16 |

枝纹装饰已由 Merriam-Webster 的 branch 及物义查明，stem 的名词阻挡物/堤障也由该词典第二名词条目查明；保留其少用范围。trunk“箱形的”不能从船舱名词定义中的 boxlike 推导成泛用形容词。field“野生的”不能随意替代 wild，range“平行”也不是任意平行线的通用译法。未决片段不再留作未审核状态，也没有混进训练选项。

## 正式练习与验证

首页和准备页继续使用原有“义项全覆盖”入口。目录版本升为 9，公共索引重建为 1,330/3,342；旧义项训练的持久化格式仍为版本 1，旧词 ID 不改名。两个新模块按首次词库/练习访问加载，离线缓存纳入它们。没有新增网络词典依赖或私人数据迁移。

- 未学筛选：200 个独立词，已学、缺少公共词和导出缺词均为 0。
- 覆盖审计：未映射旧译 0、未决旧译 0、未进入正式公共词的编辑条目 0。
- 数据与核心：89 项单元测试通过；第九批拆成四个互不重叠的 50 词批次，覆盖全部 499 个新义项目标，真实选项池不需要回忆降级，验证幂等提交、快照、序列化、末尾重做及完成条件。
- 新旧来源对应及近义排除有明确回归，原八批各自新增数量未被改写；较早批次的累计例句检查另计本次五词补充。
- 全量 1,330 词选项池验证：四轮各取 50 个新词，依次覆盖 125 / 127 / 122 / 125 个义项目标，基础题为 217 / 224 / 221 / 223 道；全部 499 个新义项覆盖，回忆降级为 0。
- 离线首次加载和内存回归通过；ARM64 独立目录自检的空白配置及旧版合成记录升级均通过，均读到 1,330/3,342。主题星图、三种私人数据持久化和彗星原生滚轮交互同时通过，升级用例保留 3 条合成作答。真实学习配置未用于测试。
- 实际浏览器练习通过：50 词、129 个义项目标、229 道基础题；验证首次按需加载、选项稳定、旧轮精确续做、多选反馈、备份恢复、清空范围、离线和移动布局。反向题音标仍在提交后显示。

## 200 个新词

下表按源码词序列出；来源和逐义例句详见 `src/VocabDesk/Website/sense-batch-09.js`。此表只有公共词，不含学习进度。

| 组 | 单词 |
| --- | --- |
| 1 | `jeopardise` · `abnormal` · `eastern` · `oriental` · `appropriate` · `distant` · `suburban` · `wild` · `natural` · `artificial` |
| 2 | `intense` · `gas` · `gasoline` · `petroleum` · `respiration` · `respiratory` · `protect` · `protective` · `protection` · `surroundings` |
| 3 | `biologist` · `biology` · `origin` · `herdsman` · `turtle` · `kangaroo` · `penguin` · `panda` · `elephant` · `cattle` |
| 4 | `wolf` · `buffalo` · `fox` · `crow` · `swan` · `falcon` · `eagle` · `sparrow` · `squirrel` · `keeper` |
| 5 | `behaviour` · `sensitive` · `victim` · `captive` · `alternative` · `astrology` · `spaceship` · `aircraft` · `motive` · `subsistence` |
| 6 | `education` · `learning` · `learned` · `riddle` · `instil` · `emphasise` · `enable` · `outstanding` · `esteem` · `brilliant` |
| 7 | `skilled` · `skilful` · `reputable` · `assistant` · `diplomat` · `ambassador` · `junior` · `alumni` · `matriculation` · `dorm` |
| 8 | `canteen` · `laboratory` · `experiment` · `author` · `tale` · `sociology` · `economics` · `marketing` · `accounting` · `audit` |
| 9 | `physics` · `chemistry` · `biological` · `chemist` · `philosopher` · `historian` · `historical` · `electronics` · `arithmetic` · `quadruple` |
| 10 | `approximately` · `diagonal` · `decimal` · `cone` · `circular` · `ozone` · `dilution` · `noxious` · `timetable` · `recitation` |
| 11 | `differ` · `difference` · `different` · `demonstration` · `inquire` · `query` · `resolution` · `accomplish` · `applicable` · `calculation` |
| 12 | `simplicity` · `simple` · `aspect` · `adaptation` · `flawless` · `original` · `accidental` · `prosperous` · `dictionary` · `discussion` |
| 13 | `entertain` · `publish` · `foresee` · `anticipate` · `rumour` · `publicity` · `expectation` · `guitar` · `indoors` · `outdoors` |
| 14 | `cycling` · `picnic` · `marathon` · `jog` · `hunter` · `jogger` · `jogging` · `shampoo` · `shave` · `paperback` |
| 15 | `stationer` · `fridge` · `flashlight` · `umbrella` · `gown` · `sweater` · `handkerchief` · `skirt` · `slipper` · `hairdressing` |
| 16 | `cucumber` · `cabbage` · `tomato` · `potato` · `carrot` · `grape` · `papaya` · `peach` · `cherry` · `watermelon` |
| 17 | `mutton` · `salad` · `pizza` · `pasta` · `soup` · `biscuit` · `loaf` · `honey` · `tasty` · `thirsty` |
| 18 | `financial` · `economic` · `grocery` · `leaseholder` · `discounter` · `influx` · `enrichment` · `inadequate` · `reliable` · `beneficial` |
| 19 | `suitcase` · `railway` · `underground` · `arrival` · `transmission` · `transitional` · `carry-on` · `depart` · `journey` · `passenger` |
| 20 | `patience` · `fluency` · `uncomfortable` · `sorrow` · `curative` · `apathetic` · `satisfactory` · `grateful` · `sympathetic` · `trustworthy` |
