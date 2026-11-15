# 第二十一批义项整理与正式接入

日期：2026-11-15。版本：v1.21.0。基线：f6d2714ad45d32070e84fae7024e052577a8bfe3（v1.20.0）。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第二十一批 | 200 | 474 |
| 前二十批 | 3,471 | 8,656 |
| 累计正式范围 | 3,671 | 9,130 |
| 其余尚未结构化的正式词 | 576 | — |

## 筛选与数据边界

通过正常应用界面导出当前学习快照，以公共 ID、归一化拼写、整词学习记录、逐题作答和完成记录确认正向学习证据，排除前二十批词。200 词均有已学证据、在导出词表中出现且未整理，无重复和缺失。已学不表示每个新义项均已掌握。nino、primate、proliferate、sterility 的旧条仍待单独核查，本批继续跳过。

学习导出、具体时间、候选池、私人审计和测试用户目录仅在本机忽略目录保存，不进入 GitHub 或发行包。原词 ID、笔记、收藏、学习记录及未完成练习保持兼容；私人词库、星云和生活彗星独立存储。

## 编辑范围与来源

逐词核对实际词典条目。197 词采用 Merriam-Webster；fresher、Australia、Zealand 采用 Collins 的对应条目。fresher 采用大学一年级新生名词，不把自动跳转的 fresh 比较级当成此名词的来源；Australia 和 Zealand 使用实际专名定义，不采用相似搜索结果。

mould 使用 mold，grey 使用 gray，make-up 使用 makeup 的定义；带连字符的 make-up 名词不与 make up 动词短语混淆。所有英汉例句为本项目原创，来源只保存实际链接，不复制词典例句。

每义保存稳定 ID、词性、中文解释、必要构式、近义选项排除与对应英汉例句。范围为明确列出的教学义，不宣称穷尽所有历史、习语或专业义。旧译逐项由已采用别名或范围说明保留，未确认的宽泛表达不会因原词库已有而自动成为正确答案。

entrance 按当前 /ˈentrəns/ 采用入口及进入名词，另读的使入迷动词留作参考；refuse 按 /rɪˈfjuːz/ 采用拒绝动词，另读的垃圾名词不混入；ornament 按 /ˈɔːnəmənt/ 采用名词；segregate 采用 /-geɪt/ 动词。补充核对发现来源也收录 upgrade 动词首音节重读、delegate 名词 /-geɪt/ 的变体，因此分列常用名词和动词，避免把重音差异说成绝对二分。outside 的来源也列出重音变体，按实际用法区分四种词性。

check 拆分检查、制止、托运、检查名词、支票、勾号、账单与将军八义；fit 区分健康、合适、尺寸合身、安装、配合程度、情绪一阵与疾病发作七义；clear、way、pole、swallow 的常用多义分别配例句。weave 的 wove、undo 的 undid 及相关规则变形均在例句与检查中覆盖。

Pole、Greek、Jewish、Arabian、Australia、Zealand 按专名习惯在例句中大写，旧公共 ID 保持兼容。Zealand 指丹麦西兰岛，不是 New Zealand；Arabian 不无条件等同阿拉伯语名称 Arabic。savage 的凶猛、残暴及攻击用法分列，不把带偏见的旧人群称呼作中性教学；headmaster 采用传统男校长称谓。sanitary 采用卫生形容词，不仅凭旧译认证公共厕所名词。

## 接入与验证

生产目录、按需列表、小型首页索引和离线缓存同步接入。相关词采用保守的选项排除，涵盖 entrance/entry、check/cheque、way/path、weary/tired、eminent/famous、burst/fit、dear/beloved 等；排除关系不表示各词所有义项完全同义。南北极、小提琴和大提琴、不同体育项目等中文相似但含义不同的选项保持区别。

全词池四轮各 50 词覆盖全部 474 个新目标，检查固定选项、无重复、无回忆降级、逐义完成和尾部重做；同时回归历史模块与学习状态。全库例句去重及来源结构完整性检查通过后再发布。浏览器精确定位 check 的八义及核对、支票例句，检查原样续练、备份恢复、清除及离线行为。桌面自检使用独立数据目录。

大型词池的浏览器启动检查发现重复归一化释义造成的等待。本版只在单次出题中预处理并缓存概念集合与规范化标签，不跨轮缓存，不修改输入及公开的重叠判定函数。相同公共词池、固定随机种子的 50 词样本生成 129 个目标、232 道题，本机耗时从约 31.8 秒降至 2.5 秒；优化前后完整题目、选项、顺序和续练快照逐项相同。另以合成数据检查修改别名或概念后的新轮次不读取旧缓存，已生成轮次保持原样。

## 本批公共词表

| 组 | 单词 |
| --- | --- |
| 1 | `oasis` · `glacier` · `pole` · `axis` · `globe` · `deteriorate` · `hemisphere` · `equator` · `degrade` · `arctic` · `upgrade` · `antarctic` · `degradation` |
| 2 | `parasitic` · `pup` · `lamb` · `horn` · `bull` · `horse` · `zebra` · `calf` · `hawk` · `goose` · `owl` · `swallow` · `mouse` |
| 3 | `eminent` · `notorious` · `notoriety` · `scholar` · `headmaster` · `tutor` · `faculty` · `candidate` · `certify` · `diploma` · `embassy` · `fresher` · `sophomore` |
| 4 | `sensory` · `calculate` · `fault` · `measure` · `mode` · `mould` · `polytechnic` · `tool` |
| 5 | `violin` · `cello` · `harmonica` · `trumpet` · `patron` · `famous` · `fame` · `badminton` · `outdoor` · `movement` · `move` · `tennis` · `volleyball` |
| 6 | `opaque` · `phone` · `vacuum` · `camera` · `portable` · `hurdle` · `lantern` · `raincoat` · `dredge` · `forge` · `factor` · `scissors` · `weave` |
| 7 | `sugar` · `pepper` · `garlic` · `salty` · `spice` · `sauce` · `bitter` · `yummy` · `digestion` · `diet` · `gourmet` · `lick` · `milk` |
| 8 | `trim` · `maintenance` · `entrance` · `entry` · `install` · `design` · `exterior` · `booth` · `lavatory` · `outside` · `peripheral` |
| 9 | `succeed` · `propose` · `declare` · `aid` · `claim` · `affirmative` · `courage` · `greek` · `jewish` · `arabian` · `australia` · `zealand` |
| 10 | `accelerate` · `prompt` · `income` · `cheap` · `worthless` · `valuation` · `subsidy` · `earn` · `undertaking` · `occupation` · `remuneration` · `occupational` |
| 11 | `bomb` · `blast` · `burst` · `struggle` · `spark` · `violent` · `explode` · `command` · `copyright` · `instruct` · `just` · `mutter` |
| 12 | `competent` · `contestant` · `force` · `event` · `warning` · `devil` · `savage` · `punishment` · `reckless` · `execute` · `foul` · `punish` |
| 13 | `nourishment` · `response` · `reflection` · `intake` · `survive` · `glance` · `chore` · `delegate` · `deputy` · `dear` · `kiss` · `proponent` |
| 14 | `undo` · `disguise` · `refuse` · `exclude` · `itch` · `effort` · `yearn` · `ranger` · `delete` · `tackle` · `clear` · `cope` |
| 15 | `weary` · `weak` · `sanitary` · `medical` · `fitness` · `fit` · `clinical` · `quarantine` · `segregate` · `check` · `injection` · `pharmacy` |
| 16 | `blot` · `cloak` · `dress` · `grey` · `hat` · `make-up` · `ornament` · `pretty` · `sleeve` |
| 17 | `crew` · `defer` · `memorial` · `mail` · `parade` · `parcel` · `path` · `swift` · `vanish` · `way` |
