# 第十一批义项整理与正式接入

日期：2026-11-07。发布版本：v1.11.0。第十一批在独立复核并修订后接入正式公共词库、义项全覆盖练习和离线资源。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第十一批 | 200 | 589 |
| 前十批 | 1,530 | 3,788 |
| 累计正式范围 | 1,730 | 4,377 |
| 正式词库中尚未建立义项结构的词 | 2,517 | — |

## 筛选与数据边界

用本机已有学习快照筛选，并使用应用正常导出的另一份进度交叉复核：200 词均未命中已学、导出缺词或重复。结论只针对导出时点，不代表实时学习状态；原始进度、时间、个人统计及审计明细仅留在本机忽略目录，不进入源码或安装包。未改变原公共词 ID，也不重写学习记录。

## 独立复核修订

候选稿原为 594 个义项，修订后为 589 个。每词按实际语义保留 1–5 个教学义项，不为固定数量强行合并或拆分。

- 补入 cap 的动词“限定上限”，分别保留帽子、盖子、覆盖、名词上限和动词限定；account for 的“占比”与“解释原因”分开。
- iron 的名词“熨斗”与动词“熨烫”分开，例句各自体现对应词性。
- 合并 fashionable、rival、strict、enthusiastic、military、announce、endure、decelerate 中重复或仅因程度/语境不同而拆出的用法；fashionable 不泛指一切优雅，enthusiastic 不自带“过分”的贬义。
- purple 的“帝位、皇权”用出生于帝王之家的搭配呈现，替换只体现紫色布料的例句；split 的名词例句改为内阁分歧，不把分裂本身当成泄密的人群。
- surround 的单数名词明确为壁炉围边，周围环境的 surroundings 单独说明；调整 firm、handsome、embarrass 的例句，使搭配自然。
- skill 区分一项可数技能与不可数的熟练技艺；其余原例句逐词复核，并保留历史释义的参考处理。

## 来源与范围

保留词典来源、旧译映射和参考处理，不宣称穷尽专业义、历史义或所有搭配。每个正式义项附词性、中文说明、近义排除概念及原创英汉例句；例句不摘抄词典。复核新增/调整的 cap、purple、account、split、fashionable、enthusiastic、skill 用 Merriam-Webster 条目交叉核对。来源页面不可访问的尝试不当作已读取来源。

当前义项来源分布：www.merriam-webster.com 9 条；www.vocabulary.com 326 条；api.dictionaryapi.dev 254 条。参考组共 193 组。候选期的来源访问失败日志及逐义审核材料保留在本机。

## 正式接入与验证

- 生产 sense-catalog 注册批次 11；首页小索引为 1,730 词 / 4,377 义项。首次进入词库或练习时才加载大型义项模块。
- 离线缓存包含第十一批资源并更新缓存版本；桌面程序随包包含全部词义，不依赖在线词典。
- 测试使用实际生产词池验证四轮各 50 词覆盖全部 589 个新目标、选项无重复/近义冲突、无回忆降级及全历史例句去重。
- 回归包含旧批次、续练、原记录不改写、备份与导入、清除范围、反向题隐藏提示及离线加载；桌面自检使用独立数据目录。

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