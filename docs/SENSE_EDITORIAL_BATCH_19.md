# 第十九批义项整理与正式接入

日期：2026-11-15。版本：v1.19.0。基线：9974958e7c6648223e6cfc64068902812cb632e5（v1.18.0）。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第十九批 | 200 | 361 |
| 前十八批 | 3,071 | 7,823 |
| 累计正式范围 | 3,271 | 8,184 |
| 其余尚未结构化的正式词 | 976 | — |

## 筛选与数据边界

通过正常应用界面导出当前学习快照，以公共 ID、归一化拼写、整词学习记录、逐题作答和完成记录确认正向学习证据，排除前十八批词。200 词均有已学证据、在导出词表中出现且未整理，无重复和缺失。已学不表示每个新义项均已掌握。nino 的旧条拼写、音标和释义不匹配，继续跳过；primate 的旧音标需要单独核查，本批改选同主题且符合条件的 interbreed，不借本批认证旧音标。

学习导出、具体时间、候选池、私人审计和测试用户目录仅在本机忽略目录保存，不进入 GitHub 或发行包。原词 ID、笔记、收藏、学习记录及未完成练习保持兼容；私人词库、星云和生活彗星独立存储。

## 编辑范围与来源

逐词核对 Merriam-Webster 的实际条目及必要变体、派生关系。utilise 定义使用 utilize，parlour 使用 parlor，jeans 使用 jean 中的复数衣物义；goods 使用 good 页面中的复数名词定义，不混入形容词。全部例句为本项目原创，来源保存实际条目链接，不复制词典例句。

每义保存稳定 ID、词性、中文解释、必要构式、近义选项排除与对应英汉例句。范围为明确列出的教学义，不宣称穷尽所有历史、习语或专业义。旧译逐项由已采用别名或范围说明保留，未确认的宽泛表达不会因原词库已有而自动成为正确答案。

coordinate 按当前 /kəʊˈɔːdɪneɪt/ 训练协调动词；坐标名词及形容词留作参考。absent 按当前 /ˈæbsənt/ 训练缺席及心不在焉的形容词，另一重音的动词不混入。lie 区分躺卧、位于或存在、说谎及谎言名词：前两者过去式与过去分词为 lay/lain，说谎为 lied/lied；例句分别体现 lay 和 lied。

bel 为贝尔，一贝尔等于十分贝，不等同于 bell。specialist 的专业设备用法按来源处理为名词作定语。stewardess 保留较旧的女性乘务员称谓范围，通用称谓 flight attendant 在参考说明中提示。

drop 的七义、match 的五义、count 的五义与 lift 的五义分别配例句；另区分 spirit 的精神、灵魂、本意、烈酒与秘密带走，scene 的戏剧场景、现场、景象、失态与活动圈子。reconcile 覆盖和解、调和、接受事实与账目核对；不将一条宽泛中文释义当作全部用法。

## 接入与验证

生产目录、按需列表、小型首页索引和离线缓存同步接入。相关词采用保守的选项排除，涵盖 amaze/astound、neglect/disregard、injure/hurt、cargo/goods、rely/depend、specialist/surgeon 等；排除关系不表示所有词义完全同义。

全词池四轮各 50 词覆盖全部 361 个新目标，检查固定选项、无重复、无回忆降级、逐义完成和尾部重做；同时回归历史模块与学习状态。全库例句去重及来源结构完整性检查通过后再发布。浏览器精确定位 lie 的四义及其 lay、lied 例句，检查原样续练、备份恢复、清除及离线行为。桌面自检使用独立数据目录。

## 本批公共词表

| 组 | 单词 |
| --- | --- |
| 1 | `gust` · `breeze` · `magma` · `tsunami` · `thermodynamic` · `drought` · `flooding` · `smog` · `torrent` · `fume` · `earthquake` |
| 2 | `gene` · `mutation` · `variation` · `reproduce` · `rake` · `pluck` · `bundle` · `bough` · `coordinate` · `efficient` · `drop` |
| 3 | `maximal` · `seasonal` · `interbreed` · `zoology` · `wildlife` · `cruel` · `originate` · `flock` · `derive` · `swarm` |
| 4 | `dynamics` · `dynamic` · `pleasure` · `comet` · `crater` |
| 5 | `acquisition` · `institution` · `affair` · `controversial` · `recruit` · `puzzle` · `obscure` · `problem` · `stimulate` · `enhance` |
| 6 | `innovate` · `technological` · `engineering` · `concentrate` · `focus` · `foundation` · `utilise` · `concentration` · `count` · `measurable` |
| 7 | `inherit` · `local` · `exotic` · `antique` · `inheritance` · `religion` · `spirit` · `decoration` · `decorative` · `archaeological` |
| 8 | `animation` · `movie` · `artist` · `craftsman` · `role` · `tragedy` · `scene` · `art` · `craft` · `portrait` |
| 9 | `mattress` · `tube` · `mop` · `sweep` · `quilt` · `sheet` · `towel` · `match` · `cable` · `pamphlet` |
| 10 | `appear` · `jeans` · `laundry` · `wardrobe` · `overcoat` · `glove` · `scarf` · `jacket` · `wallet` · `boot` |
| 11 | `lemon` · `reap` · `flour` · `kiwi` · `livestock` · `chicken` · `popcorn` · `beef` · `dairy` · `pork` |
| 12 | `vault` · `lift` · `parlour` · `kitchen` · `fireplace` · `cabinet` · `basin` · `washbowl` · `studio` · `urban` |
| 13 | `brake` · `honk` · `motor` · `dash` · `captain` · `hazard` · `emergency` · `dock` · `anchor` · `stewardess` |
| 14 | `colonial` · `liberate` · `ethnic` · `slum` · `racial` · `clan` · `resident` · `populate` · `prefer` · `elect` |
| 15 | `entity` · `redundant` · `invest` · `company` · `negotiation` · `goods` · `cargo` · `absent` · `guarantee` · `rely` |
| 16 | `murder` · `trick` · `confess` · `fraud` · `reconcile` · `liar` · `lie` · `murderer` · `confession` · `accredit` |
| 17 | `cease` · `opponent` · `halter` · `prevent` · `betray` · `prohibition` · `betrayal` · `bel` · `terrorist` · `terrible` |
| 18 | `friendship` · `affection` · `stranger` · `partner` · `hero` · `council` · `specialist` · `director` · `actor` · `nurse` |
| 19 | `amaze` · `neglect` · `involve` · `disregard` · `irony` · `marvelous` · `astound` · `overlook` · `bias` · `expel` |
| 20 | `overweight` · `patient` · `dysfunction` · `cancer` · `fever` · `pimple` · `choke` · `injure` · `hurt` · `fluent` |
| 21 | `noun` · `narrate` · `verb` |
