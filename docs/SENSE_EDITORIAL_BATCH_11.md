# 第十一批义项整理（编辑候选，尚未接入）

日期：2026-11-07。开工基线：`25c21dac3815dfbaa1ace92c5293302df289cabc`（v1.10.0）。本批工作在独立分支 `batch-11-editorial` 上完成，**没有**合并回 main，没有改变桌面入口、按需目录、离线缓存或版本号，也没有发布安装包。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第十一批编辑候选 | 200 | 594 |
| 前十批，用于正式练习 | 1,530 | 3,788 |
| 候选目录若接入后的累计 | 1,730 | 4,382 |
| 正式词库中尚未建立义项结构的词 | 2,517 | — |

200 个词均不在开工基线已整理的 1,530 词键内，不改变原公共词 ID。本批为**编辑候选**：`src/VocabDesk/Website/sense-batch-11.js` 尚未被生产 `sense-catalog.js` 注册，正式索引仍为 1,530 词 / 3,788 义项；只有复核通过后才按项目流程接入。

## 未学筛选

用桌面应用本机公开学习状态的只读拷贝，由既有官方宿主程序在页面脚本执行前导出，不访问、不修改真实用户目录，也不把任何学习记录写入仓库。任意 seen / correct / wrong / lastSeen 或逐题记录命中即排除，并按归一化拼写关联历史 ID；导出中缺少的词不认定为未学。筛选结果：已学 0、导出缺词 0、重复 0。筛选结论只针对本次导出时点，不声称持续实时监控；具体时间、原始记录与候选证据仅存本机忽略目录。

## 编辑边界

- 同一语义的中文近义表达合理归组，真正不同的对象、用法和词性分开；每词 1–4 义，不靠重复拆义凑数。例句逐义体现具体语境，不用“该词在现代社会很重要”一类模板。
- 每义有稳定 ID、词性、中文说明、近义排除标记、核对来源与原创双语例句；必要搭配保留 `construction`，如 `account for`、`abandon oneself to`、`be subject to`、`fence sth in/off`。
- 逐项保留旧译映射及参考决定，不统一扔进 `scope-excluded`。本批 187 组参考决定：`scope-excluded` 136、`restricted-verified` 37、`context-required` 14；行业专用、古旧、误收与搭配受限义分别说明。
- 通过声明范围审核不表示穷尽所有历史义、专业义或习语；原始中文和音标未批量改写，旧词来源仍可追溯。
- 近义排除同时检查新旧批次与本批内部交叉。真等价义共享 `concepts`，训练器据此保守排除歧义，例如 suitable/appropriate、modern/contemporary、strict/stern、tight/stern、civil/polite、knowledge/learning、cap/ceiling、reasonable/legitimate、fashionable/vogue、bounce/spring、cross/hybridise、split/crack、fake/artificial、first/prior、smash/crack、firm/substantial、tough/substantial、pain/sting、severe/rigorous、severe/simple。

## 来源与访问限制

每个义项的 `source` 都是本次实际读取过的词典条目；英文例句与中文译文为 WordOrbit 原创，不摘抄词典例句。本批义项级来源 594 条中，`www.vocabulary.com` 334 条、`api.dictionaryapi.dev` 260 条（部分词两源交叉核对）。`sourceLog` 另记录真实尝试过的失败访问，这些条目不作为任何义项的引用来源。

- `dictionary.cambridge.org`、`collinsdictionary.com` 在本次环境返回 Cloudflare 403；仅记录真实尝试，未引用其内容。
- `www.merriam-webster.com` 页面常只返回标题、正文不可读；未引用。
- `api.dictionaryapi.dev` 偶发 502 / 429，重试或改用 vocabulary.com 后才作为来源。

## 验证

- 新增 `tests/sense-batch-11.test.cjs` 4 项测试：候选目录隔离、200 词/594 义项字段与原创例句、全历史 3,788 例句去重、四轮各 50 词覆盖 594 个新目标、全量 1,730 词池选项安全、0 次回忆降级、生产目录仍为版本 10。
- 全套 `tests/sense-*.test.cjs` 67 项通过、0 失败，日志在本地忽略目录。
- 候选目录 1,730 词 / 4,382 义项，生产目录仍为 1,530 词 / 3,788 义项；`sense-ready-index.js` 与桌面入口未改。
- 逐义人工复核表、来源访问日志、四轮覆盖统计与选择证据只存本机忽略目录。内容复核通过前不发布桌面版。

## 公共词表

词表由本批公共模块生成，不包含学习记录。逐义内容见 `src/VocabDesk/Website/sense-batch-11.js`。

| 组 | 主题 | 单词 |
| --- | --- | --- |
| 1 | 时尚外观 | `fashionable` · `handsome` · `charming` · `ugly` · `beautiful` · `perfect` · `perfection` · `tendency` · `popularity` · `figure` |
| 2 | 服饰配饰 | `belt` · `cap` · `brim` · `needle` · `pin` · `string` · `chain` · `tight` · `trousers` · `overall` |
| 3 | 颜色与材料 | `white` · `yellow` · `brown` · `purple` · `diamond` · `fake` · `fuel` · `pit` · `whitewash` · `inferior` |
| 4 | 经济商业 | `economy` · `trade` · `commercial` · `firm` · `deal` · `account` · `cash` · `salary` · `payment` · `wealth` |
| 5 | 数量变化 | `increase` · `decrease` · `expand` · `reduce` · `diminish` · `decelerate` · `improve` · `improvement` · `sufficient` · `lack` |
| 6 | 劳动就业 | `employ` · `hire` · `labour` · `job` · `career` · `profession` · `interview` · `retire` · `clerk` · `attendance` |
| 7 | 社会公共 | `population` · `community` · `public` · `civil` · `national` · `global` · `foreign` · `abroad` · `state` · `worldwide` |
| 8 | 政府治理 | `office` · `department` · `officer` · `police` · `headquarters` · `meeting` · `process` · `announce` · `declaration` · `statement` |
| 9 | 法律秩序 | `crime` · `steal` · `thief` · `obey` · `own` · `owner` · `demand` · `false` · `reasonable` · `suitable` |
| 10 | 冲突争端 | `battle` · `attack` · `oppose` · `enemy` · `rival` · `warn` · `promise` · `capture` · `abandon` · `triumph` |
| 11 | 军事装备 | `weapon` · `military` · `soldier` · `general` · `veteran` · `scout` · `pioneer` · `shield` · `surround` · `prohibit` |
| 12 | 身体感官 | `puncture` · `blood` · `pain` · `sore` · `finger` · `flesh` · `nerve` · `lump` · `wound` · `naked` |
| 13 | 情绪心理 | `fear` · `anger` · `hate` · `envy` · `guilty` · `ashamed` · `confuse` · `embarrass` · `endure` · `willing` |
| 14 | 性格描述 | `modest` · `curious` · `careful` · `tough` · `strict` · `severe` · `stubborn` · `careless` · `restless` · `enthusiastic` |
| 15 | 日常动作 | `hurry` · `grab` · `catch` · `touch` · `smash` · `scratch` · `split` · `collide` · `contact` · `steer` |
| 16 | 移动方向 | `descend` · `sail` · `cross` · `disappear` · `drift` · `plunge` · `bounce` · `jump` · `bend` · `drag` |
| 17 | 物品工具 | `bowl` · `oven` · `bell` · `iron` · `metal` · `cord` · `fence` · `garbage` · `tub` · `mill` |
| 18 | 饮食健康 | `food` · `restaurant` · `salt` · `sweet` · `corn` · `hamburger` · `bean` · `alcohol` · `cigar` · `cafeteria` |
| 19 | 学校学习 | `skill` · `smart` · `method` · `subject` · `course` · `lesson` · `practice` · `paper` · `knowledge` · `principle` |
| 20 | 时间频率 | `daily` · `monthly` · `quarterly` · `yearly` · `modern` · `first` · `secondly` · `midday` · `midnight` · `overnight` |