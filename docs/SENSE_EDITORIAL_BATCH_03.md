# 第三批：100 词义项结构与原创例句

日期：2026-11-04。本批新增 100 个正式公共词，229 个学习义项组，229 组分别对应义项的原创英汉例句。不是新增 100 条义项，也不限制每词只能有两个意思或两道题。

截至第三批完成时，累计为 130 词、394 义项组、394 组例句；其中 125 词、354 义项组通过各批声明学习范围检查。第二批原有 5 词及其 10 个未决旧译保持阻断。当时全书其余 4,117 词尚未建立新结构；后续累计见 `SENSE_TRAINING_IMPLEMENTATION.md`。

本批是开发中的词义数据，尚未加载到正式网页或桌面练习入口。源码中的 complete 指声明范围的编辑检查通过，不代表穷尽全部词典、习语、学科术语或所有雅思可考内容；未将旧翻译字符串自动认证为已审核义项。

## 本批 100 词

下面按编辑时的语义领域列出；不修改原书主题归属。

| 领域 | 单词 |
| --- | --- |
| 动物与植物传播 | predator, conservation, migrate, pollen, scent |
| 太空与空间 | astronaut, galaxy, exploration, spacecraft, dimension |
| 教育与研究材料 | scholarship, composition, fossil, specimen, acquire, secondary |
| 科技与方法 | innovation, prototype, breakthrough, research, appliance, gauge |
| 历史与文化 | artifact, dynasty, ritual, tradition, archaeology |
| 语言 | linguistic, bilingual, idiom, pronounce |
| 娱乐与表演 | spectator, tournament, leisure, rehearsal, rhythm |
| 材料与物品 | synthetic, texture, fabric, recycle, cushion |
| 服饰与外观 | outfit, accessory, fragile, costume |
| 饮食 | nutrition, obesity, appetite, cuisine, digest |
| 建筑与场所 | architecture, skyscraper, venue, renovate, shelter |
| 交通 | scenic, luggage, freight, fare, route |
| 国家与政府 | sovereignty, democracy, legislation, citizen |
| 社会经济 | inflation, revenue, inequality, consumption |
| 法律 | legitimate, obligation, equity, appeal, witness |
| 冲突及其影响 | casualty, evidence, mitigate, surrender |
| 社会角色 | colleague, volunteer, empathy, apprentice |
| 行动 | implement, facilitate, trigger, modify, eliminate |
| 身心健康 | anxiety, resilient, therapy, immunity, recovery |
| 时间 | duration, contemporary, prior, imminent |
| 生态 | ecosystem, vegetation, organism, diversity, yield |

## 复核中补齐的区别

- scent 包含气味、香水、追踪气味、嗅觉能力、嗅出察觉及使充满香气，不用一条气味例句覆盖全部。
- composition 分开作文、作曲或乐曲、构图、组成成分；gauge 分开仪表、测量、判断、衡量依据和工程规格。
- venue 补入最常用的活动举办场所，保留法律审判地；不把犯罪地点与案发现场无条件等同。
- resilient 分开恢复力与材料弹性；immunity 分开疾病免疫与法律豁免；contemporary 分开现代、历史同时期及同代人。
- yield 补入在压力下弯曲断裂、交通让路等含义；witness 的证明用法明确使用 bear witness to，避免生硬不自然的例句。
- rehearsal 的逐项复述、freight 的承载含义等正式用法经 Collins 复核后分别补组。
- 旧译 nutrition 的营养品、fabric 的工厂、rhythm 的旋律、tournament 的联赛等加以限制或解释，避免错误扩大同义关系。

少见用法不靠直接删除制造完整率。pollen 的授粉动词、tradition 的法律交付、cuisine 的古旧厨房义、vegetation 的病理赘生物等，保留来源、使用条件和未纳入常用训练的理由。`scope-excluded` 只声明本批边界，不认证该旧标签正确；`restricted-verified` 表示来源确实支持但限特殊语境；`context-required` 表示不能脱离搭配出题。

## 例句示例（WordOrbit 原创）

**resilient：受挫后能恢复的**

The community proved resilient after the closure of its main factory.

主要工厂关闭后，这个社区表现出了很强的恢复能力。

**resilient：材料有弹性的**

The resilient foam returned to its original shape after the weight was removed.

重物移开后，有弹性的泡沫恢复了原状。

**gauge：判断反应**

The questionnaire helped gauge public support for the new service.

问卷有助于判断公众对新服务的支持程度。

## 来源、追溯与验证

词义逐词对照 Cambridge 的英文词典及 Learner 条目；少见、专门或学习型条目未覆盖的用法进一步对照 Collins。所有例句由 WordOrbit 编写，不摘录词典句子，也不将随机语料例句自动标为语义匹配。完整来源、词性、搭配、中文分组、近义标记及例句在 `src/VocabDesk/Website/sense-batch-03.js`。

主要来源示例：

- [Cambridge resilient](https://dictionary.cambridge.org/dictionary/english/resilient)
- [Cambridge venue](https://dictionary.cambridge.org/dictionary/english/venue)
- [Cambridge gauge](https://dictionary.cambridge.org/dictionary/english/gauge)
- [Cambridge bear witness to](https://dictionary.cambridge.org/dictionary/english/bear-witness-to)
- [Cambridge yield](https://dictionary.cambridge.org/dictionary/english/yield)
- [Collins rehearsal](https://www.collinsdictionary.com/dictionary/english/rehearsal)
- [Collins freight](https://www.collinsdictionary.com/dictionary/english/freight)

`node scripts/Audit-SenseCoverage.cjs` 生成本机累计与分批核对单。全部 130 词都属于正式公共词表，旧中文片段未映射数为 0。该指标表示没有无声丢弃旧片段，不表示参考标签均正确或都应训练。

测试覆盖 100 词及 229 例句的唯一性、目标词出现、来源、明确搭配与范围说明、两批各 50 词不重叠、所选义项全部出题、选项不重复、跨词近义干扰排除和 CommonJS/浏览器两种离线加载方式。个人进度校验仅在本机以用户授权导出进行，使用条件、记录、时间戳、已学名单和备份都不写进此公开数据文件。
