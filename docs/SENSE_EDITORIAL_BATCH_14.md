# 第十四批义项整理与正式接入

日期：2026-11-10。版本：v1.14.0。基线：97bbb0098847418a98bec9263df3a6972f1a331e（v1.13.0）。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第十四批 | 200 | 538 |
| 前十三批 | 2,130 | 5,639 |
| 累计正式范围 | 2,330 | 6,177 |
| 其余尚未结构化的正式词 | 1,917 | — |

## 未学与未整理筛选

从应用正常导出最新公共学习快照，按公共词 ID 和归一化拼写排除整词已学记录、逐题作答和已完成义项记录，并排除前十三批已有结构的词。只在导出确实包含的正式公共词中选取，不将记录缺失解释为从未学习。本批 200 词独立审计通过：无已学命中、无重复、无缺词；结论针对筛选时快照。

学习导出、具体导出时间、候选池和个人统计仅存本机忽略目录，不进入源码、截图或发行包。本次不批量重写公共词 ID、个人笔记、收藏或学习记录，测试使用合成数据及独立环境。

## 编辑范围与来源

每义包含稳定 ID、词性、中文说明、近义排除概念、逐义来源及原创英汉例句，需要搭配时另列 construction。每词按实际语义分组，不凑固定义项数，不声称穷尽专业、古旧或全部习语用法。

逐词读取 200 个 Merriam-Webster 条目，补读 bound、counter、grave、lap、bore、feel、view、plate、might、husband、mow、hug、bless 等多义条目。baptise 经正文确认是 baptize 的拼写变体，义项直接链接到实际提供定义的 baptize 页面。未将只显示交叉引用或导航的页面当作充分定义证据。公开模块只保留链接，不复制词典英文例句。

旧译逐项映射到教学义项或 128 组具体范围说明。例如 RAID 磁盘阵列不作为 raid 突袭的词义；bore 中承受、携带是 bear 的过去式；resume 的简历名词与本批恢复动词区分；repent 的匍匐生根旧译不并入后悔；fortunate 不简单等同于幸福的。

## 重点语义

- counter 分开柜台、计数器、筹码、反驳和 run counter to；bound 分开一定会、有义务、前往、动词跳跃、名词一跳、界限、构成边界和装订好的。
- beat 分开击打、打败、搅打、搏动、节拍、巡区、筋疲力尽及打破纪录；grave 的坟墓、严重和庄重分别配例句。
- lap 分开腿面、圈数、旅程阶段、舔食、水波轻拍和领先一圈；bore 分开钻孔动作、使无聊、无趣事物、内径和孔。
- feel 区分触摸、感到、认为、摸起来、同情、触感氛围及摸索；view 区分看法、景观、视野、观看和看待。
- 固定构式包括 bound for、be bound to、resort to、hammer out、feel for、dispose of、cop out、mow down 等。bore/bear、resume/résumé 和 mow 的不同读音组不相互复制。
- 对 stack/heap、irritate/annoy/bother、dread/fear、evil/wicked、cop/obtain、mourn/sorrow、lap/knee、contest/dispute 等近义用法共享排除概念。文字相似但不同义的主动/被动语态、先进/激进不合并。

## 接入与回归

新模块进入生产注册、首次访问按需加载、小型首页索引及离线缓存。累计 2,330 词 / 6,177 义项可用于义项全覆盖练习，其余正式词继续基础练习。

回归覆盖实际全词池四轮各 50 词、538 新义项目标全覆盖，无重复和近义冲突选项、无回忆降级；历史例句去重、词性形态、旧译映射及按需加载。浏览器精确定位 bound 的八个义项，并检查原样续练、备份导入、清除边界及离线加载。桌面自检始终使用独立数据目录。

## 本批公共词表

| 组 | 单词 |
| --- | --- |
| 1 | `plate` · `stack` · `heap` · `pick` · `rear` · `ruin` · `pattern` · `ox` · `rub` · `envelope` |
| 2 | `chunk` · `squash` · `spoil` · `wit` · `roster` · `recorder` · `spur` · `advanced` · `founder` · `counter` |
| 3 | `king` · `princess` · `wedge` · `knot` · `feast` · `pop` · `tumble` · `rim` · `spotlight` · `shear` |
| 4 | `fashion` · `prevail` · `gum` · `suck` · `plumb` · `weld` · `haunt` · `expire` · `oar` · `arena` |
| 5 | `harness` · `cop` · `bound` · `reject` · `performance` · `murmur` · `contradict` · `mute` · `require` · `raid` |
| 6 | `cheek` · `fool` · `flame` · `flare` · `preparation` · `violate` · `revolt` · `dread` · `rein` · `rivalry` |
| 7 | `fierce` · `evil` · `funeral` · `grave` · `hover` · `forgo` · `tablet` · `guardian` · `herald` · `husband` |
| 8 | `beat` · `burrow` · `campaign` · `contest` · `hammer` · `intrude` · `hell` · `might` · `landing` · `mislead` |
| 9 | `oppress` · `offend` · `progress` · `pitfall` · `protest` · `rebel` · `torture` · `darling` · `beloved` · `chase` |
| 10 | `sole` · `nursing` · `toil` · `deed` · `mow` · `glimpse` · `peep` · `twin` · `haste` · `overtake` |
| 11 | `scrape` · `shuffle` · `tow` · `integral` · `baptise` · `obsess` · `gamble` · `marvel` · `maze` · `invoke` |
| 12 | `loom` · `dispose` · `resort` · `ooze` · `testify` · `muffle` · `overshadow` · `bless` · `farewell` · `salute` |
| 13 | `invitation` · `retrospect` · `pervade` · `repetition` · `stature` · `backbone` · `contemplate` · `contempt` · `curse` · `glare` |
| 14 | `flatter` · `incline` · `hug` · `kneel` · `replenish` · `whirl` · `gorge` · `chamber` · `lap` · `dumb` |
| 15 | `lame` · `passive` · `negate` · `startle` · `remarkable` · `fancy` · `fortunate` · `irritate` · `nuisance` · `harass` |
| 16 | `adverse` · `hostile` · `radical` · `bother` · `adversary` · `wicked` · `volatile` · `nasty` · `rash` · `uneasy` |
| 17 | `timid` · `fuss` · `reluctant` · `sigh` · `weep` · `ignorant` · `cunning` · `oblivious` · `naughty` · `ridiculous` |
| 18 | `stupid` · `clumsy` · `sluggish` · `impulse` · `stereotype` · `anniversary` · `finish` · `night` · `bore` · `born` |
| 19 | `concern` · `distress` · `ease` · `freedom` · `furious` · `feel` · `isolate` · `illusion` · `liberal` · `mood` |
| 20 | `mourn` · `resume` · `repent` · `swell` · `view` · `virtue` · `opening` · `precede` · `former` · `meanwhile` |
