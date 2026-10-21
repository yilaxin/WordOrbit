# 待核验词查证记录 · 2026-10-22

## 范围与结果

v1.4.0 的隔离新用户运行结果：词库总数 4,249，正式可练习 4,147，待核验 102。102 个待核验拼写均为有效英文，没有把 OCR 残缺字符串改成“审核通过”。它们本来已有 ECDICT 释义和 verified 状态，但中文质量过滤规则误拒了正常的词典语言。

修订后：总数仍为 **4,249**，正式可练习 **4,249**，待核验 **0**；不是新添 102 个重复词。另修订两条原本通过过滤、但中文只有 `<主英> = hybridize / hybridization` 的引用条目，补成实质释义。因此编辑修订文件合计 **104 条**。

## 查证与编辑

逐词搜索 Cambridge 英汉/学习词典；accustom 使用 Collins。英式词形从词典的 UK spelling / usually 标签核对，不因为美式词典展示 `-ize` 而替换原词的 `-ise`。参考入口保存在 `reviewed-dictionary.js` 的每条 `sourceUrl`；中文为结合现有 MIT ECDICT 的编辑学习释义，不转载词典全文或例句。取常见学习义项，保留多义词的主要义项，不只取首义；不声称涵盖所有古义、专业义或所有考试中的特殊语境。

示例：

| 词条 | 处理 |
| --- | --- |
| facilitate、situate、reassure 等 | “使…”开头是正常译义，不应被当作例句残片 |
| enzyme | “酶”是有效单字译义，不应要求至少两个汉字 |
| consult、payment、instalment | “查阅”“付款”“分期”等不应作为全面禁用词 |
| jeopardise、fertilise、eco-friendly | 保留有效拼写，修正损坏音标或补齐缺失音标 |
| flyby | 补充航天器近距飞掠与飞机检阅飞行含义 |
| expand、prompt | 删除旧 DOS 命令说明，保留现代学习义项 |
| hybridise、hybridisation | 将单纯拼写引用替换为实际中文释义 |

主要参考：[Cambridge 英汉词典](https://dictionary.cambridge.org/dictionary/english-chinese-simplified/)、[jeopardize](https://dictionary.cambridge.org/dictionary/english-chinese-simplified/jeopardize)、[fertilize](https://dictionary.cambridge.org/dictionary/english-chinese-simplified/fertilize)、[instalment](https://dictionary.cambridge.org/dictionary/english-chinese-simplified/instalment)、[hybridize](https://dictionary.cambridge.org/dictionary/english-chinese-simplified/hybridize)、[hybridization](https://dictionary.cambridge.org/dictionary/english-chinese-simplified/hybridization)、[Collins accustom](https://www.collinsdictionary.com/dictionary/english/accustom)、[ECDICT](https://github.com/skywind3000/ECDICT)。

## 规则与升级保护

- 仅对修订文件里的完整释义精确匹配开放旧 OCR 启发式的例外；仍要求中文、合理长度、无占位符、无句子终止符与代码标签。未查证的 OCR 句子残片不因此开放。
- 在应用读取旧词库前合并离线修订，再更新同一 ID 的 meaning、fullMeaning、ipa、pos 和词典来源。保留原页码、主题、笔记、标签、例句、学习记录、收藏与训练状态。
- 旧 OCR 修复函数不再把已有可靠词典释义的条目重置成扫描文字或覆盖个人笔记；启动时不再无条件清空已保存的题目选项。失效选项由现有题目校验按需重建。
- 不访问私人星云/我的词库的正文来做修订；各自持久化数据不变。仅当用户主动添加新私人词并选择离线补全时，才会使用更新后的词典。
- 修订为小型静态数据，无新增联网、轮询、模型、图片或后台服务；网页离线缓存版本递增，桌面应用直接读本地文件。

## 可复现验证

`node --test tests/reviewed-dictionary.test.cjs` 核对 104 条数据范围、来源、拼写形状、译义与音标格式；`node tests/reviewed-dictionary.browser.cjs` 在独立 Edge/Playwright 上下文检查全书数目、104 条双向四选项、误识别残片仍排除、50+50 双阶段及旧记录升级。升级测试只使用合成记录和私人样本，比较原 ID、记录、收藏、笔记、标签、已保存选项及两个私人数据库，确认没有外部 HTTP 请求。

本次范围是当前随附题库的待核验处理，并非重新逐页 OCR 或对原书零遗漏的证明。未来未匹配的用户导入词仍需另行核验。
