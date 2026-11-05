# 第八批独立复核记录

> 历史时点记录：下文描述独立复核完成时的数据状态。用户随后要求先行接入，v1.8.0 已上线完整审核子集；当前范围与使用方式见 [义项接入说明](SENSE_PRACTICE_v1.8.0.md)。

日期：2026-11-05。复核对象为第八批初始数据提交 [f439567](https://github.com/yilaxin/WordOrbit/commit/f439567e2f6107c5b3c5d32a295955a54ed1c9d2)，以复核开始时的 `06723be` 为比较基线。检查范围是本批 200 个公共词的义项、英汉例句、未学筛选和义项训练相关测试。

## 结论与数量

初始的 43 项结构/出题测试能够通过，但未发现数项常见义遗漏、错误的旧译解释、词性与例句不一致及不自然表达，因此不能仅凭这些测试宣称内容无误。复核已逐条阅读本批数据，对有疑问的条目查阅原始词典并修正，新增能捕捉这些错误的语义回归。没有声称穷尽每词的所有专业、古旧和习语用法。

| 项目 | 初始数据 | 复核后 |
| --- | ---: | ---: |
| 本批不同公共词 | 200 | 200 |
| 本批义项组 | 499 | 538 |
| 本批原创双语例句组 | 499 | 538 |
| 累计结构化词 | 1,130 | 1,130 |
| 累计义项及例句组 | 2,787 | 2,826 |
| 通过声明学习范围检查的词 | 1,125 | 1,125 |
| 上述可训练词的义项组 | 2,747 | 2,786 |
| 未结构化公共词 | 3,117 | 3,117 |
| 相关回归测试通过数 | 43 | 48 |

修正共涉及 51 词，新增 42 个义项组，撤并 3 个组，净增 39 个。已有例句中改写英文 23 条、中文 25 条；另为新增 42 个组分别编写原创英汉例句。前七批 930 词的完整运行时条目经基线比较保持一致；第二批五个部分审核词及十个未决旧译片段仍保留阻断。

## 主要内容问题和依据

| 问题 | 修正与学习边界 | 核对依据 |
| --- | --- | --- |
| `seed` 排除了去籽与促使产生，未设种子选手名词义 | 补去籽、促使想法产生及种子选手；与播种、结籽、体育排位动词区别。旧“催…发育”仅作受限追溯，不当通用生物学译法 | [Cambridge: seed](https://dictionary.cambridge.org/dictionary/english/seed) |
| `fringe` 无刘海，附加福利只留参考 | 增加刘海及明确限定的 `fringe benefit(s)`；边缘排列例句不再只标“加流苏” | [Cambridge: fringe](https://dictionary.cambridge.org/dictionary/english/fringe), [fringe benefit](https://dictionary.cambridge.org/dictionary/english/fringe-benefit) |
| `literature` 宣传资料被错误排除 | 补宣传印刷品、产品说明资料，不与学术文献混为一个目标 | [Cambridge: literature](https://dictionary.cambridge.org/dictionary/english/literature) |
| `functional` 缺实用设计义，`Lord` 缺宗教称呼 | 补常见用法，保留各自语境 | [Cambridge: functional](https://dictionary.cambridge.org/dictionary/english/functional), [lord](https://dictionary.cambridge.org/dictionary/english/lord) |
| `bench` 法官席与替补席合并，例句只展示体育义 | 分开司法和体育例句，补让球员坐替补席的动词义 | [Cambridge: bench](https://dictionary.cambridge.org/dictionary/english/bench) |
| `surgery` 把英式诊所和手术室放在同一标签 | 分清英式诊所/诊室、门诊时间、议员接待，以及美加手术室用法，分别配例句 | [Cambridge: surgery](https://dictionary.cambridge.org/dictionary/english/surgery), [Collins: surgery](https://www.collinsdictionary.com/dictionary/english/surgery) |
| `diabetes` 把多尿症当通用单词义 | 糖尿病与完整搭配 `diabetes insipidus`（尿崩症）明确区别；删除无限定“多尿症”答案别名 | [Cambridge: diabetes](https://dictionary.cambridge.org/us/dictionary/english/diabetes), [diabetes insipidus](https://dictionary.cambridge.org/dictionary/english/diabetes-insipidus) |
| `rug` 的参考说明也把“揭露某人”解释错了 | 明确旧译错误；相关习语表示突然撤走支持或使人陷入困境。盖毯义标主要英式并加近义排除 | [Cambridge: pull the rug/carpet from under someone's feet](https://dictionary.cambridge.org/dictionary/english/pull-the-rug-carpet-from-under-feet), [Collins: rug](https://www.collinsdictionary.com/dictionary/english/rug) |
| `microbe` 无条件等同细菌；`temple` 混入鬓角头发 | 微生物只可在特定语境指病菌；太阳穴区域和鬓边头发分清，不拿旧片段充当无条件答案 | [Collins: microbe](https://www.collinsdictionary.com/dictionary/english/microbe), [Cambridge: temple](https://dictionary.cambridge.org/dictionary/english/temple) |
| `vice` 副职用法词性不当，工具标签易混成手持钳子 | 副职标职位前缀；工具标台钳/台虎钳；旧“老虎钳”说明限制 | [Cambridge: vice](https://dictionary.cambridge.org/dictionary/english/vice) |
| `brood` 一家孩子、`hostel` 学生/工人宿舍被遗漏 | 补词典正常用法；限制为相应家庭/住宿语境，不做任意泛化 | [Cambridge: brood](https://dictionary.cambridge.org/dictionary/english/brood), [hostel](https://dictionary.cambridge.org/dictionary/english/hostel) |
| `broom` 金雀花因与清扫无关被排除 | 补有独立证据的植物义；义项彼此无关不能成为排除理由 | [Collins: broom](https://www.collinsdictionary.com/dictionary/english/broom) |
| `pot` 把 `pot shot` 整体释义当单词普通名词义，且边界说明失实 | 撤出该短语目标；增装罐保存、共同资金/奖金池、一锅的量和台球入袋；奖杯、在锅中煮确有词典记录，改为明确的受限参考，不再断言不存在 | [Collins: pot](https://www.collinsdictionary.com/dictionary/english/pot) |
| `substantial` 的职责例句不自然，真实/实体义重复 | 真实有形义合并，另设“大体/主要方面一致”的正式用法；食物义不泛作任意“有内容的” | [Cambridge: substantial](https://dictionary.cambridge.org/dictionary/english/substantial), [Collins: substantial](https://www.collinsdictionary.com/us/dictionary/english/substantial) |
| `recent` 两个目标实际重复，中文可能误作历史分期 | 合并为新近时间义；不作为“近代史”或“先进”译法 | [Collins: recent](https://www.collinsdictionary.com/dictionary/english/recent) |
| `invader` 参考说明声称只能指人 | 补生物入侵者语境，并保留“侵入物”译法的限制；不泛作任意物件 | [Merriam-Webster: invader](https://www.merriam-webster.com/dictionary/invader), [Collins: invade](https://www.collinsdictionary.com/dictionary/english/invade) |
| `melon` 被误写成与化学无关、等于 melamine | 原始研究明确区分 melon 聚合物与 melamine。专业中文片段仍在本批范围外，但撤回错误化学解释 | [原始研究：From 1D to 3D Graphitic Carbon Nitride (Melon)](https://pubs.acs.org/doi/10.1021/acs.inorgchem.1c02769) |

其他修正包括 `crack` 撞击、屈服和动词开玩笑，`sting` 诱捕、毒刺、刺痛及过高收费，`draft` 征召和抽调的动词，`steward` 活动工作人员，`brass` 高层和厚颜，`cannon` 碰撞反弹，`grid` 地图方格与发车排列，以及 `hostess` 餐厅接待和女主持人。来源随具体义项保存。

例句编辑修正了 `shady` 的野餐搭配、`burgeon` 的行业/时间/十亿美元译句、`plantation` 的采茶译句、`synthesise` 中阳光供能而非原料的表述、`cassette` 的不当装片说明、`optimal` 的泛化温度断言。`foremost` 副词和 `pledge` 祝酒动词的例句与词性对应；`intestine` 形容词、`burgeon` 名词等注明古旧或罕用。虚构例句不冒充具体年份史实或未来新闻。

## 稳定 ID 处理

未重排或按序重新编号旧 ID。撤并项保留说明，不把它们挪作其他新义：

| 撤并 ID | 处理 |
| --- | --- |
| `recent.modern-near` | 同一新近时间义并入 `short-while-ago`，错误泛化旧译作参考 |
| `substantial.material-entity` | 与有形真实含义合并到 `real-not-illusion`，另增不同的 `general-agreement` |
| `pot.potshot` | 不再按单词普通名词义训练，短语在参考项中追溯 |

新数据未接入正式练习，没有用户已经使用这些编辑 ID 的学习记录迁移问题。将来正式接入前，仍需完成完整范围、题面提示和迁移设计。

## 未学筛选复核

原 agent 使用本机学习目录的只读副本导出学习状态，并非正常界面导出。本次从实际词轨桌面应用公共词库的“导出数据”取得新的完整授权导出，核对内部导出时间及 `words / records / attempts`。按计数、最后学习时间、作答历史及归一化同词不同 ID 排除已学，结果：本批 200 词全部通过，无已学命中，无重复，无非正式词，无导出缺失词。

具体导出时间、原副本证据、本次完整导出和筛选结果仅存本机忽略目录。该结论只适用于本次导出时点，不表示之后持续实时未学。没有答题、导入、清空或直接改写用户学习数据；私人星球、星云和彗星内容不在公共数据修改范围中。

## 验证结果与限制

- 初始 43 项相关测试通过；修正后原测试加 5 项新语义回归，共 **48 项通过**。新测试在初始数据上 **5 项全部失败**，验证了对具体内容缺陷的检出能力，不只是把数量改成新的常量。
- 四个互不重叠的 50 词训练批次，覆盖 538 个新义项目标，固定种子共 942 道基础题，0 道因干扰项不足而降级的回忆卡；验证固定选项、反向整词近义排除、末尾错题、序列化和完成条件。
- 累计 2,826 条英文例句无精确重复。结构、来源 URL、目标词形和双语存在性检查全部通过；这些检查不能证明穷尽所有词典义或所有句子均无进一步编辑空间。
- 覆盖审计未映射旧片段 0、正式目录外词 0；仍有历史十个未决片段，未伪造为已解决。前七批 930 词完整运行时内容与原基线一致。
- 八批义项数据在离线浏览器环境加载一致，正式 `index.html` 未加载该模块。**本次只修正开发中的公共义项数据、测试和文档，没有接入桌面练习、替换程序或发布安装包。**

完整命令见 [第八批说明](SENSE_EDITORIAL_BATCH_08.md)。公开回归位于 `tests/sense-batch-08.test.cjs` 和 `tests/sense-batch-08-review.test.cjs`；本机完整核对单由覆盖审计生成 `.build/sense-batch-08-review.md`。下一批仍为 09，必须重新取进度并排除当前全部 1,130 个已结构化词，不能继续使用本批快照冒充新进度。
