# 首批义项整理记录

日期：2026-11-04。初审为 10 个正式词、58 个学习义项组；二次复核后为 59 个义项组、59 组原创英汉例句。最初四个未决词的处理决定已补齐，10 词均通过本批明确声明的学习范围检查。

这不是 4,247 词全库完成声明，也不是“所有雅思义项”的官方清单。学习范围依据列出的学习型词典条目确定，生僻或不确定旧译保留参考及原因，不覆盖原词库。初审和训练可用性分开统计。

| 单词 | 义项组数 | 本批状态 | 主要区分 |
| --- | ---: | --- | --- |
| current | 5 | 声明的学习范围可用于开发验证 | 当前、通行、水气流、电流、思潮 |
| spring | 8 | 声明的学习范围可用于开发验证 | 春季、弹簧、弹性、泉、跃起、涌现、源于、突然告知 |
| issue | 6 | 声明的学习范围可用于开发验证 | 问题、报刊期次、发行、发布、配发、流出 |
| approach | 5 | 声明的学习范围可用于开发验证 | 接近、方法、接洽、通路、近似；“入门”不作为无搭配的独立义 |
| record | 6 | 声明的学习范围可用于开发验证 | 信息记录、履历、音乐唱片、最高纪录、录制、仪器测记 |
| interest | 6 | 声明的学习范围可用于开发验证 | 兴趣、爱好、利息、利益、权益、利益集团；个人关系影响力等注明限制 |
| fine | 8 | 声明的学习范围可用于开发验证 | 满意、身体好、优质、细小、细微、晴朗、罚款、纤巧；工艺动词义留作已核实的限制用法参考 |
| matter | 5 | 声明的学习范围可用于开发验证 | 事情、毛病、物质、内容、要紧 |
| object | 5 | 声明的学习范围可用于开发验证 | 物品、对象、目的、宾语、反对 |
| steep | 5 | 声明的学习范围可用于开发验证 | 陡峭、急剧、价格过高、浸泡、深受影响；夸张义和少用名词义有依据，但不列为本批常用考点 |

## 来源与内容边界

词义核对使用 Cambridge English Dictionary 的各单词条目、Learner's Dictionary，以及 Collins 的相应词条。每个学习义项保存实际支持该用法的来源链接。中文释义分组和 59 组教学例句为 WordOrbit 编写，不摘录词典例句，不把来自语料库的随机例句自动判为语义匹配。

- https://dictionary.cambridge.org/dictionary/english/issue
- https://dictionary.cambridge.org/dictionary/english/steep
- https://dictionary.cambridge.org/dictionary/english/record
- https://dictionary.cambridge.org/dictionary/english/object
- https://www.collinsdictionary.com/us/dictionary/english/current
- https://www.collinsdictionary.com/us/dictionary/english/spring

完整逐义项来源、词性、近义表达、搭配条件及例句在 `src/VocabDesk/Website/sense-catalog.js`。`referenceOnly` 明确保存旧译未纳入本批学习范围的原因，区分有依据但限制使用、缺少搭配、不支持孤立用法等情况。二次复核没有把这些参考自动升级成考点，也没有修改原词库全文。

二次复核的关键决定：Collins 确认 steep 的非正式夸张义、interest 的关系影响力及涉及利益用法、fine 的酒液澄清等工艺用法存在，因此不能直接把旧译删成“错误”。这些内容保留来源和使用限制。interests 的利益集团义新增一组原创例句。fine 的身体状态与满意程度按 Learner 词典区分语境，纤巧外形与细微差别也保留上下文说明；出题时同词另一真实义项不得成为干扰项。

运行 `node scripts/Audit-SenseCoverage.cjs` 可从独立捕获的公共词库重新生成 `.build/sense-batch-01-trace.json` 和 `.build/sense-batch-01-review.md`。首批涉及的旧翻译片段均能追溯到义项或参考保留说明，未映射片段为 0。这个指标只说明没有无声丢弃旧片段，不等于旧译全部正确。

## 校验和下一步

`tests/sense-catalog.test.cjs` 检查真实词条、唯一义项 ID、词性、来源、原创例句标记、例句中目标词、无通用模板、未完成条目阻断、跨词同义关系及真实数据生成变动题量。核心测试仍使用额外合成数据覆盖 50 词等边界。

本批训练数据尚未载入正式网页或桌面入口，也没有修改学习记录。新增 20 词的后续进展见 `SENSE_EDITORIAL_BATCH_02.md`；在全书范围达标前不得将这些小批次当成全书随机训练已经完成。
