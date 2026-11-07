# WordOrbit 词汇义项更新任务交接

2026-11-07 第十一批的具体执行要求见 [第十一批 200 词任务书](TASK_BATCH_11_200_WORDS.md)。本轮由另一个 agent 先完成编辑与隔离测试，再交回原 agent 复核；复核前不修改生产接入或发布桌面版本。该任务书的本轮交付顺序优先于下面的一般接入流程。

更新：2026-11-06，v1.10.0。项目目录 `C:/Users/17526/Documents/Codex/IELTS-Vocab-App`；仓库 <https://github.com/yilaxin/WordOrbit>，分支 main。先读 `AGENTS.md`，检查工作区和远端，不覆盖其他人的修改。

## 当前基线与下一批

下一批编号为 **11**。先检查实际最新提交；如已有后续批次，不得重复使用编号或词表。本轮用户明确要求已整理数据接入正式练习，因此第九、十批和五词补充均已用于正式桌面版，不是尚未接入的开发资料。

| 范围 | 词数 | 义项/原创英汉例句组 |
| --- | ---: | ---: |
| 01 | 10 | 59 |
| 02，含本次五词补充 | 20 | 123 |
| 03 | 100 | 229 |
| 04 | 200 | 415 |
| 05 | 200 | 376 |
| 06 | 200 | 475 |
| 07 | 200 | 628 |
| 08，独立复核后 | 200 | 538 |
| 09 | 200 | 499 |
| 10 | 200 | 446 |
| 累计，全部接入 | **1,530** | **3,788** |

正式公共词 4,247，尚未结构化 2,717；无部分审核词、未决旧译或未映射旧译。曾部分审核的 branch/trunk/stem/field/range 当前共 57 个学习义项，其中新增 17 个，见 `sense-completion-02.js`。不改写前八批最初 1,130/2,826 的历史时点。第九批时点实际新写 516 组例句（17+499）；第十批另新增 446 组。这些是编辑数量，不能反推用户学习数量。

最新公开说明为 `docs/SENSE_EDITORIAL_BATCH_10.md`；架构与保存约定见 `docs/SENSE_TRAINING_IMPLEMENTATION.md` 及历史接入说明 `docs/SENSE_PRACTICE_v1.8.0.md`。同机私人来源、导出时间及证据见忽略目录 `.build/SENSE_EDITORIAL_HANDOFF_LOCAL.md`，不得上传。

## 可信的未学筛选

1. 优先通过用户实际使用的词轨窗口，在公共词库点击“导出数据”取得新快照。使用 Windows 自动化前先完整读取 computer-use 技能及其必读文件；从返回的窗口中唯一选定词轨，不猜窗口或拿隔离测试实例当实际用户。
2. 只做正常导出，不答题、不导入、不清空；不要直接读写运行中的 WebView2 用户目录。截图和原始导出都不上传。
3. 核对 JSON 内部 exportedAt、非空 words、对象 records、数组 attempts。文件修改时间、历史候选池或缺少记录不能替代完整授权导出。
4. records 的 seen/correct/wrong 任一为正、存在 lastSeen、attempts 的 id 或 wordId 命中，均排除；用归一化拼写关联历史编号。导出中没有该词不能算未学。
5. 公共词源为独立捕获表 `.build/vocabulary-audit-catalog.json`，只用 formal=true 的公共词。排除当前 sense-catalog 的所有词键，不只排除最新批次或 complete=true。
6. 确认目标 200 是不同单词，不是义项、例句或题数；不能用私人星球、星云或彗星凑数。
7. 原始导出、时间、已学列表、候选池和选择证据只写 `.build`，确认 git check-ignore 生效。

如拿不到新进度，可使用仍能读取且确有授权的较旧完整导出，但必须向用户说明准确时间和局限，不能声称实时未学。只有历史候选缓存时，把新词标为未确认草稿，不能伪造筛选通过。

## 编辑要求

- 逐词查阅 Collins、Cambridge、Merriam-Webster 等出版方原始条目；技术义用原始官方文档。搜索摘要、原书 OCR 或拼接 URL 不是“查过”的证据。访问失败要换可核实来源，并保留实际支持该义的地址。
- 每义有稳定 id、label、pos、aliases、concepts、source、必要 construction，以及独立原创 example.en/zh。不同语义分开，不限制每词两个义项；相同意思不能为凑数重复拆分。
- 英文自然、语法和搭配正确，包含目标词或正确屈折；中文准确保留否定、数量、对象及语气。禁止通用模板和直接照抄词典例句。程序检查不代替人工逐句复核。
- 避免一个正确选项混装真正不同的用法。不同学科或搭配义可单列；中文同义表达可合理归组。像 range 的物种分布区与放牧地应分别出题。
- 旧中文片段逐项映射，错误、过宽、专业、过时或歧视性译法给具体原因和来源。context-required、restricted-verified、scope-excluded 只表示各自处理；不得用统一 scope-excluded 隐藏正常常用义的遗漏。真正未查明的项保留 outside-scope-unresolved/complete=false，不伪造审核通过。
- 同义、近义和上下位歧义与所有历史批次交叉核对；共享 concepts 是保守排除规则，不表示任意语法互换。例：turtle 美式宽泛义/tortoise、spaceship/spacecraft、tasty/delicious、foresee/anticipate、skilled/skilful。
- 本任务默认不批量改正式旧词条 ID、原词库的译文或音标；接入通过显示覆盖层完成，原始数据可追溯。

## 文件和注册

- `sense-batch-10.js` 可作新模块格式参考；下一批 `sense-batch-11.js` 导出注册函数和浏览器全局 `WordOrbitSenseBatch11`。
- 在总目录审核归一化循环之前注册；更新目录 version、batches 和 reviewDate。add 按 word 键赋值，会覆盖同名条目，必须比较新增集合与开工前所有键。
- 若用户要求正式接入，更新 sense-study 的按需模块列表，重建 sense-ready-index，离线 worker 纳入新资源、递增缓存版本；不把大型批次直接加入 index.html。
- 公共 ID 索引只由公共捕获与内置 OCR/索引别名生成，不能把学习导出当索引输入。保留历史公共 ID，不把任意私人编号当正式词。
- 默认后续批次是编辑还是同步桌面，应以用户当次要求为准；数据资料单独提交不冒充已接入，真正接入则按 AGENTS 发布新桌面版本。

## 练习与记录约束

每轮从本轮未完成的已审核公共词中随机最多 50 词；不足 50 不从下一轮补齐。逐义语境→反向关联→多义检查，题量随义项和错题变化。原题、选项和目标快照锁定；答错追加到真正末尾；重复提交不重复计分；全目标和追加题完成才结束。

干扰项只来自其他可信词，排除本词任意真义，反向题还查候选整词全部真义。可信干扰项不足时明确回忆自评，不编造填充项。不把旧单次答对推断为全部义项掌握。

公共 JSON 备份包含义项进度及未完成训练。保留旧 schema=wordorbit-sense-batch/version=1 的可续练格式，新增其他词不能打乱旧轮。若要改已在正式练习中的义项 ID/目标集，必须设计兼容并验证，不能以“重新开始”掩盖丢进度。

私人星球、星云、生活彗星数据库和备份互不干扰，不读取、不迁移、不上传。所有浏览器和桌面测试用合成记录及独立 profile；桌面自检必须带 --data-dir，不关闭用户 App。

## 验证与交付

在项目根目录执行：

```text
node scripts/Audit-SenseCoverage.cjs
node scripts/Audit-SenseBatchSelection.cjs --progress <本机授权完整导出.json> --batch 11 --count 200
node scripts/Build-SenseReadyIndex.cjs
node --test tests/*.test.cjs
node tests/sense-study.browser.cjs
node tests/nebula-offline.browser.cjs
```

尖括号须换成实际文件路径；Playwright 浏览器测试需可用的 Edge。若不接入，不应擅自重建发布索引或发布安装包。

新批测试至少覆盖 200 个词去重、逐义字段和例句、与全部历史英文句去重、来源/搭配、旧译处理、具体近义边界、四批各 50 词的完整目标和降级次数、末尾错题、固定选项、序列化与完成条件。更新历史测试的 VM 依赖列表；历史单批新增数量保留，补充计数要明确单列，不能盲目改预期。

核对公开文档词表、源文件和本机筛选表完全相同。更新累计统计、当前交接和本机私人证据说明。

仅暂存本任务公共源码、测试和文档；检查 diff、暂存清单、私密数据和无关文件。不 git add .、不强制加入忽略文件、不强推。正常提交并同步 main；若接入桌面，递增版本、提交后重建与实际 SHA 一致的 ARM64 程序，通过隔离自检后更新桌面入口，再推版本标签并用 Publish-GitHubRelease.ps1 -Publish 校验附件后公开。

最终报告实际新词、义项、原创双语例句数量，未学筛选的时间与局限，测试结果，文件和 GitHub 链接，是否已接入桌面。只有核实远端和发布结果后才说已同步。下一批不自动安排，无新定时任务。
