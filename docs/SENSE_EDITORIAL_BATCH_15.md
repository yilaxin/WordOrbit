# 第十五批义项整理与正式接入

日期：2026-11-11。版本：v1.15.0。基线：14875ed717c772521ce69a1e06db2732508c481a（v1.14.0）。本批数量按用户确认调整为 141 词。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第十五批 | 141 | 254 |
| 前十四批 | 2,330 | 6,177 |
| 累计正式范围 | 2,471 | 6,431 |
| 其余尚未结构化的正式词 | 1,776 | — |

## 筛选与数据边界

正常启动已有应用，从公共词库页导出最新学习快照，以正式公共词 ID 和归一化拼写排除已学整词记录、逐题作答、已完成义项记录及前十四批已整理词。导出缺词不视为未学。本批 141 词独立审计通过，无已学命中、无重复、无缺词；结论仅针对筛选时快照。

个人导出、具体时间、候选池和私有统计只留在本机忽略目录，不进入 GitHub、截图或发行包。原公共词 ID、笔记、收藏和学习记录不批量重写。私人词库、星云和生活彗星继续独立存储。

## 编辑与实际来源

每义包含稳定 ID、词性、中文解释、近义排除概念、来源 URL 及原创英汉例句；构式依赖另外标记 construction。每词按实际用法分组，不凑固定数量，不声称穷尽词典中的全部历史、专业及习语义。

141 词逐词读取 Merriam-Webster，并补读异读词及变体的实际定义。ranking、steering、weakly、increasing 的名词、形容词或副词用法另读 Collins。despatch 和 mesmerise 保留原词库英式拼写，先核实变体关系，再链接实际给定义的 dispatch 和 mesmerize 条目。仅导航、错误或变体交叉引用页面不单独作为充分定义证据。公开模块只保存来源链接，不复制词典英文例句。

旧译全部映射到义项别名或 57 组具体范围说明。mil 的军队域名、protestor 的票据拒付专门语境、separately 的灵魂等旧译不并入普通教学义。significance 不等同于有效性；coppery 的似铜外观不保证含铜或由铜制成。

## 发音与语义范围

当前应用仍使用整词音标和发音。本批将以下异读范围明确分开，避免把不同读音的义项配上同一个音标：

- lead 保留 /liːd/ 的带领、领导、通向、导致、领先、领先优势、线索、主角、导线和主要的共十义；金属铅 /led/ 在参考决定中说明，暂不进入该整词发音下的训练。
- invalid 按 /ɪnˈvælɪd/ 训练无效的，不混入病人或体弱相关的另一读音。
- alternate 按原 /ˈɒltəneɪt/ 训练动词交替；形容词及候补者名词的 /-nət/ 用法保留范围说明。

其他复核包括：utilities 区分水电服务与软件工具；materialism 区分哲学唯物论和物质至上；coiner 区分造币、新词创造及伪币制造；distribution 区分分发、分布和配送；disposal 区分清除、可支配及转让。each 的限定词和代词分别配例句。unmanly 的例句呈现对性别刻板观念的反对，不将女性特征等同于怯懦。

super/fantastic/amazing/awesome 的赞美用法、vex/annoy、mesmerise/fascinate、lament/mourn、assort/sort 等共享近义排除概念；相反或不同范围的意义保持可区分。

## 接入与验证

生产目录、按需模块、首页小型索引和离线缓存同步接入。累计 2,471 词、6,431 个义项进入已整理筛选和义项练习；其他正式词保留基础练习。

回归覆盖全词池分三轮 50、50、41 词完成本批全部 254 个目标，完成后不再抽取；检查无重复、近义冲突选项或回忆降级，所有历史例句去重。浏览器精确定位 lead 的十义，检查训练例句范围、原样续练、备份恢复和离线行为。桌面自检使用独立数据目录。

## 本批公共词表

| 组 | 单词 |
| --- | --- |
| 1 | `super` · `interesting` · `heaven` · `emerge` · `gush` · `situate` · `exceed` · `alternate` · `manually` · `politic` |
| 2 | `logically` · `merger` · `requisite` · `ranking` · `utilities` · `fantastic` · `turning` · `illuminate` · `messenger` · `await` |
| 3 | `opt` · `mil` · `lead` · `slightly` · `corm` · `sweeten` · `concretely` · `placement` · `outward` · `external` |
| 4 | `inward` · `inner` · `materialism` · `significance` · `increasing` · `coiner` · `coppery` · `promptly` · `dismission` · `potent` |
| 5 | `supremacy` · `suicide` · `demanding` · `requirement` · `enormity` · `twinkle` · `explosion` · `explosive` · `deflection` · `starvation` |
| 6 | `aggress` · `prevention` · `horrible` · `compel` · `mitigation` · `protestor` · `progressive` · `resistant` · `contribution` · `sex` |
| 7 | `related` · `madam` · `respective` · `separately` · `accustom` · `nourishing` · `vibration` · `reshuffle` · `steerable` · `steering` |
| 8 | `gambler` · `deviation` · `decimation` · `distribution` · `distributor` · `stipulation` · `disposal` · `conductive` · `exploitation` · `clearly` |
| 9 | `augmentation` · `assort` · `celebrated` · `attribution` · `impressive` · `pervasive` · `substitution` · `mouthful` · `invalid` · `suffering` |
| 10 | `lament` · `weakly` · `refreshing` · `easily` · `commonly` · `amazing` · `lovely` · `surprising` · `gently` · `unmanly` |
| 11 | `directly` · `earnestly` · `proudly` · `sternly` · `promising` · `awesome` · `mutual` · `similarly` · `severely` · `mournful` |
| 12 | `angry` · `troublesome` · `unpleasant` · `vex` · `indignant` · `wick` · `unsatisfactory` · `unkind` · `unsuitable` · `reluctance` |
| 13 | `slothful` · `medieval` · `million` · `incidentally` · `belong` · `defensive` · `despatch` · `destruct` · `ethic` · `each` |
| 14 | `frustrating` · `father-in-law` · `quest` · `intuitive` · `ketchup` · `mesmerise` · `retell` · `short-day` · `silent` · `wasabi` |
| 15 | `well-being` |
