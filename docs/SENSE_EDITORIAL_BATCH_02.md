# 第二批义项复核与覆盖扩展

日期：2026-11-04。新增 20 个正式词，106 个义项组及 106 组原创英汉例句。加上复核后的首批，累计 30 词、165 义项组、165 组例句。

其中 25 词、125 义项组通过声明的学习范围检查；5 词的常用义项已初审，但仍有 10 个旧译片段未决，整词保持阻断。这里只是新义项训练的数据进度，不代表原有题库仅有 30 词，也不代表 4,247 词全书改造已完成。

## 新增词汇

| 单词 | 义项组 | 状态 | 区分重点 |
| --- | ---: | --- | --- |
| atmosphere | 4 | 声明范围可用 | 行星大气、当地空气、氛围、压强单位 |
| climate | 2 | 声明范围可用 | 气候与社会经济形势；气候区属于气候语境 |
| environment | 3 | 声明范围可用 | 生态环境、周围条件、计算机运行环境 |
| erode | 2 | 声明范围可用 | 物理侵蚀与逐渐削弱信任等抽象影响 |
| plateau | 2 | 声明范围可用 | 高原与平台期，补入达到稳定水平的动词用法 |
| hydrogen | 1 | 声明范围可用 | 氢元素、氢气不拆成两个考点；旧 H-2 标签不作另一义项 |
| testimony | 2 | 声明范围可用 | 正式证词与某事成功的证明；词性为名词 |
| prosecute | 2 | 声明范围可用 | 法律起诉与正式语体的持续开展；告发需司法语境 |
| cell | 6 | 声明范围可用 | 细胞、小室、电池单元、蜂房小格、组织小组、美式手机 |
| tissue | 4 | 声明范围可用 | 生物组织、纸巾、薄包装纸、a tissue of lies |
| culture | 5 | 声明范围可用 | 群体文化、艺术活动、文化修养、栽培、生物培养 |
| rock | 6 | 声明范围可用 | 岩石、摇滚、可靠支柱、摇动、震动、英式条状糖 |
| branch | 6 | 整词待复核 | 常用分支、分店、分岔、拓展已分组；装饰旧译未决 |
| trunk | 7 | 整词待复核 | 树干、躯干、象鼻、箱、行李厢、干线、短裤；部分旧译未决 |
| stem | 6 | 整词待复核 | 茎、细长支撑、词干、阻止、源于、去梗；堵塞物未决 |
| reserve | 9 | 声明范围可用 | 保留、预订、储备、保护区、后备人员、拘谨、疑虑、底价、暂缓判断 |
| support | 7 | 声明范围可用 | 赞成、帮助、供养、支撑、佐证、正式容忍、暖场表演者 |
| root | 11 | 声明范围可用 | 植物根、根源、解剖根部、词根、数学根、生根、固定植根、翻找、找出、根除、助威 |
| field | 10 | 整词待复核 | 田、运动场、领域、实地、物理场、字段、参赛者、应答、派队、接球；部分旧译未决 |
| range | 11 | 整词待复核 | 系列、区间、山脉、距离、练习场、分布地、炉具、变化、排列、漫游、话题涉及；部分旧译未决 |

“声明范围可用”仅指表内选定的常见学习义和列出的搭配，不宣称穷尽习语、专业术语或全部雅思可考含义。少见但有来源的扩展用法也保留可查说明，不用随意删除来制造完整率。

## 复核方式及边界

- 逐词查询 Cambridge 与 Collins 的词典编辑条目，区分正式释义与自动展示的语料例句；每个义项保存实际支持它的来源。
- 中文按真实语义分组，不把“侵蚀／受侵蚀”因主被动差异拆成两个独立意思。相反，erode 的物理侵蚀与削弱信任、root out 的终于找到与找到并根除分别训练。
- 165 组英汉例句均为 WordOrbit 编写，每组对应自己的目标词和义项；不复制词典例句，不套通用社会作用模板。
- atmosphere / climate 的氛围，testimony / support 的证据，以及 spring / stem 的起因等使用共享语义标记，避免跨词近义答案被当成错误干扰项。
- 所有 30 词均能在独立捕获的正式公共词表中找到；原有翻译片段均映射到义项或带理由的参考记录。未映射为 0 不等于未决为 0。

主要词义来源示例：

- [Cambridge erode](https://dictionary.cambridge.org/us/dictionary/english/erode)
- [Cambridge plateau](https://dictionary.cambridge.org/dictionary/english/plateau)
- [Cambridge atmosphere](https://dictionary.cambridge.org/dictionary/english/atmosphere)
- [Cambridge root out](https://dictionary.cambridge.org/dictionary/english/root-out)
- [Collins prosecute](https://www.collinsdictionary.com/us/dictionary/english/prosecute)
- [Collins culture](https://www.collinsdictionary.com/us/dictionary/english/culture)

## 可复现检查及后续工作

`node scripts/Audit-SenseCoverage.cjs` 使用 `.build/vocabulary-audit-catalog.json` 公共捕获生成累计的 `sense-editorial-trace.json`、`sense-editorial-review.md`，并分别生成批次 01、02 的追溯表和人工可读核对单。报告单列 10 个未决片段；出现丢失映射或不属于正式词表的词时返回失败。运行 `scripts/Audit-Vocabulary.cjs` 可重新捕获公共词表，不读取用户日常学习档案。

第二批结束时，4,247 词中仍有 4,217 词未建立新结构。branch、trunk、stem、field、range 的未决片段继续保留；后续按未学词优先要求完成的新增 100 词见 `SENSE_EDITORIAL_BATCH_03.md`。新模块仍未被正式入口加载；未修改桌面程序、旧学习记录、私人词库、星云或彗星数据，也未发布替换 v1.7.0 的安装包。
