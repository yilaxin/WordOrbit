# 第十二批义项整理与正式接入

日期：2026-11-08。版本：v1.12.0。基线：02153610f8f90fef25a29a8c494b055f557efabf（v1.11.0）。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第十二批 | 200 | 643 |
| 前十一批 | 1,730 | 4,377 |
| 累计正式范围 | 1,930 | 5,020 |
| 其余尚未结构化的正式词 | 2,317 | — |

## 未学与未整理筛选

从应用公共词库页正常导出最新学习进度，以正式公共词 ID 和归一化拼写核对。只选择同时未命中旧整词记录、逐题记录及已完成义项记录，并且不在前十一批目录中的词；导出中不存在的词不认定为未学。200 词无已学命中、无重复、无导出缺词。结论仅针对本次快照，不声称实时未学。

原始进度、具体导出时间、候选池、选择审计和个人统计仅留在本机忽略目录，不进入源码、截图、安装包或 GitHub。本次未更改原公共词 ID 或批量重写学习记录。

## 编辑与来源

200 词逐词建立常用教学范围，每义包含稳定 ID、词性、中文说明、近义排除概念、来源及原创英汉例句；需要固定结构时另标 construction。每词按实际语义分组，不凑固定义项数，不宣称穷尽历史义、专业义或全部习语。

本批义项级来源：www.merriam-webster.com 635 条；www.collinsdictionary.com 8 条。200 个 Merriam-Webster 条目均通过检索工具实际读取；programme、single 的英式用法及 present 的节目主持用法另核对 Collins。直接抓取被拒绝的访问不当作已核实来源。公开模块只保留来源 URL，不复制词典英文例句。

旧释义逐项映射到新义项或 82 组具体参考决定，区分专业/历史范围、受限用法及需上下文说明的旧译。例如 goal 不解释为守门员；sum、speed、memory 的旧软件功能名称不作为英语义项认证；programme 保留原书拼写并说明计算机语境的 program 变体。

## 重点复核

- import 区分进口、数据导入、进口商品和重要含义；与 export 的反向概念保持可区分。
- content 分开内容、含量、形容词满足、动词使满足及名词满足感；present 区分在场、目前、现在、礼物、展示、颁发、主持和引见。
- draw 的绘画、拉动、吸引、推论、名词平局、动词打平及抽签分别配例句；minor 的未成年人/未成年的与辅修科目/辅修、single 的单程票/单程的分开。
- score 的得分与评分分开；net 保留网、网捕、净额、净赚和互联网；固定搭配包括 pay attention to、be supposed to、fix one's eyes on、single out 等。
- 对已确认的近义用法共享排除概念，包括 pay/wage、dwindle/decrease、fix/mend、assist/support、tolerate/endure、maintain/assert，以及本批内 license/permit、chart/graph/diagram、mix/blend、comprehension/understanding。

## 接入与验证

新批次进入生产注册、小型公共索引、首次访问按需加载及离线缓存。首页读取 1,930 词 / 5,020 义项汇总；未结构化词继续基础练习。个人词库、星云文章和生活彗星各自本机存储。

单元回归覆盖实际 1,930 词池中四轮各 50 词、643 新目标完整覆盖、无重复与近义冲突选项、无回忆降级、全部历史例句去重、词性区分、旧译决定、已完成义项的未学排除。浏览器回归覆盖新词页面、按需加载、原记录不改写、固定题目续练、备份导入、清除范围、反向题隐藏提示和离线行为。原生自检始终使用独立数据目录。

## 本批公共词表

| 组 | 单词 |
| --- | --- |
| 1 | `consume` · `promotion` · `swap` · `impose` · `dwindle` · `enrich` · `product` · `attend` · `sale` · `production` |
| 2 | `reliance` · `treasure` · `possess` · `worthy` · `valuable` · `value` · `pay` · `occupy` · `recommendation` · `failure` |
| 3 | `loss` · `chance` · `fail` · `change` · `develop` · `development` · `developed` · `law` · `rule` · `norm` |
| 4 | `agreement` · `standard` · `donate` · `downsize` · `export` · `import` · `equal` · `grand` · `effective` · `condition` |
| 5 | `scheme` · `license` · `permit` · `master` · `doctor` · `platform` · `quality` · `coverage` · `category` · `manual` |
| 6 | `volume` · `minor` · `social` · `subjective` · `political` · `majority` · `logic` · `logical` · `plus` · `sum` |
| 7 | `minus` · `chart` · `cube` · `graph` · `diagram` · `graphic` · `blend` · `mix` · `schedule` · `term` |
| 8 | `practise` · `elementary` · `profound` · `forum` · `basic` · `selective` · `heading` · `present` · `point` · `opinion` |
| 9 | `suppose` · `introduction` · `represent` · `prediction` · `representative` · `understanding` · `comprehension` · `conclusion` · `content` · `deliberate` |
| 10 | `data` · `dictate` · `even` · `disagree` · `discipline` · `displace` · `dissolve` · `fee` · `introduce` · `instance` |
| 11 | `length` · `major` · `novice` · `nuance` · `outset` · `qualify` · `philosophy` · `praise` · `resolve` · `surface` |
| 12 | `detail` · `overlap` · `induce` · `agree` · `grade` · `rank` · `queue` · `score` · `grant` · `appreciate` |
| 13 | `award` · `apply` · `prize` · `advance` · `discover` · `disclose` · `uncover` · `net` · `expose` · `reveal` |
| 14 | `correct` · `mistake` · `circumstance` · `mission` · `experience` · `experienced` · `language` · `assign` · `single` · `discuss` |
| 15 | `programme` · `draw` · `option` · `training` · `mobile` · `kick` · `throw` · `goal` · `slip` · `simulate` |
| 16 | `room` · `store` · `space` · `maintain` · `fix` · `enter` · `exit` · `beam` · `block` · `concrete` |
| 17 | `speed` · `package` · `burden` · `delay` · `load` · `curb` · `memory` · `stamp` · `attractive` · `internal` |
| 18 | `suggest` · `advise` · `proposal` · `hint` · `assist` · `affirm` · `encourage` · `monitor` · `clarify` · `admit` |
| 19 | `prepare` · `seize` · `pursue` · `blame` · `proof` · `occasion` · `compete` · `comfort` · `occur` · `damage` |
| 20 | `care` · `cure` · `relief` · `relax` · `satisfy` · `admire` · `resemble` · `discourage` · `tolerate` · `ignore` |
