# 第十批义项整理与正式接入

日期：2026-11-06。开工基线：`251099d10516815396b998df01e2e4a0f06affec`（v1.9.0）。本批发布为 v1.10.0。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第十批新增 | 200 | 446 |
| 前九批，含五词补充 | 1,330 | 3,342 |
| 累计，全部用于正式练习 | 1,530 | 3,788 |
| 尚未建立新结构的正式词 | 2,717 | — |

本批 200 个词与开工前全部已整理词键无交集，不改变原公共词 ID。逐词查询 Collins 出版方条目，hybridise 跟进明确标有英式变体的 hybridize，apologise 跟进 apologize。词义与示例来源分开：source 是词义核对出处；英文句及对应中文译文是 WordOrbit 原创，不摘抄词典例句。

## 未学筛选

使用实际桌面 App 的正常公共词库导出，不访问或修改运行中的浏览器用户目录。任意 seen/correct/wrong、lastSeen 或逐题记录命中即排除，并按归一化拼写关联历史 ID。导出中缺少的词不得认定未学；排除前九批全部 1,330 词。筛选报告中已学、缺少公共来源、导出缺词均为 0。真实记录、时间、候选池及筛选证据只存本机忽略目录；结论针对导出时点，不声称持续实时监控。

## 编辑边界

- 同一语义的中文同义表达合理归组，真正不同的对象、用法和词性分开；不固定每词两义。例句分别体现具体考点，不用“该词在现代社会很重要”等模板。
- 各义项有稳定 ID、词性、中文说明、近义排除标记、核对来源与原创双语例句；必要搭配如 infringe on/upon、at the mercy of、grandfather in 明确保留。
- 国名和国籍词保留既有小写公共检索键，例句使用正常英文大写；不把 Russia 与 Soviet Union 互换，也不把美洲原住民各语言混称单一“印第安语”。
- 逐项保留旧译映射及参考决定；不是统一扔进 scope-excluded。比如 barn 的核截面单位、limb 的天体视边缘、grandfather 的旧规豁免均另有查明的学习义；旧式、行业专用和语境不足的片段给出具体说明。
- 通过声明范围审核不表示穷尽所有历史义、专业义或习语。原始中文和音标未批量改写，旧词来源仍可追溯。
- 近义排除覆盖新旧词交叉关系，含 alga/algae、attorney/lawyer、thoughtful/considerate、undermine/erode、limb/branch、saucer/dish、juice/energy、sympathy/sympathetic 的对应义。

## 接入与验证

按需目录版本 10；重建公共索引 1,530/3,788；离线缓存 v40 收入新模块。持久化训练格式仍为 version 1，新增词不重排已保存的原题、选项或作答。

- 94 项单元测试全部通过，包括逐义字段、目标词形、全历史英文句去重、明确近义边界、旧译处理、固定选项、末尾错题和幂等提交。
- 四批各 50 个互不重复的新词覆盖全部 446 个新目标；另在完整 1,530 词选项池中验证同样的四轮覆盖，回忆降级为 0。
- 最终实际浏览器一轮 50 词、107 个义项目标、194 道基础题通过；验证按需加载、旧轮精确续做、多选反馈、备份恢复、清空范围及移动布局。不同随机词组的题量随义项变化。
- 离线首次加载及三个私人板块的独立持久化回归通过。
- ARM64 桌面程序独立配置自检及合成旧记录升级通过，均加载 1,530/3,788；升级保留 3 条合成作答，星图、私人板块及原生彗星滚轮检查同时通过。未用真实学习目录做测试。

## 公共词表

词表由本批公共模块生成，不包含学习记录。逐义内容见 `src/VocabDesk/Website/sense-batch-10.js`。

| 组 | 单词 |
| --- | --- |
| 1 | `endangerment` · `migration` · `magnificence` · `calendar` · `respire` · `ripener` · `logo` · `alga` · `algae` · `extinguish` |
| 2 | `infringe` · `undermine` · `considerable` · `outcome` · `massive` · `favourable` · `hybridise` · `subgroup` · `discernible` · `distinct` |
| 3 | `indiscernible` · `cataclysmic` · `desperate` · `overwhelming` · `hopeless` · `despair` · `cricket` · `dragon` · `cock` · `cage` |
| 4 | `barn` · `devour` · `shepherd` · `exterminate` · `sheepdog` · `ecliptic` · `brainstorm` · `typist` · `logogram` · `olympic` |
| 5 | `sprawl` · `glide` · `ski` · `hike` · `limb` · `pedal` · `stool` · `knit` · `lime` · `miner` |
| 6 | `jade` · `unbutton` · `purse` · `sock` · `stocking` · `vest` · `bead` · `stainless` · `refectory` · `foodie` |
| 7 | `knife` · `spoon` · `saucer` · `pancake` · `soda` · `coffee` · `juice` · `eggplant` · `turkey` · `nut` |
| 8 | `chocolate` · `perfume` · `hungry` · `furnace` · `erection` · `airtight` · `expanse` · `pyramid` · `garage` · `packet` |
| 9 | `socialist` · `revolutionary` · `meltdown` · `checklist` · `standpoint` · `outlook` · `successive` · `spanish` · `african` · `european` |
| 10 | `italian` · `latin` · `soviet` · `indian` · `portuguese` · `roman` · `russian` · `spain` · `africa` · `italy` |
| 11 | `russia` · `france` · `canadian` · `french` · `german` · `canada` · `workaholic` · `employer` · `employee` · `abortion` |
| 12 | `lossless` · `lawyer` · `cheater` · `commander` · `bullet` · `missile` · `propeller` · `trench` · `troop` · `tomb` |
| 13 | `maritime` · `monument` · `medal` · `devotion` · `surname` · `gender` · `grandfather` · `cousin` · `honeymoon` · `neighbourhood` |
| 14 | `veterinary` · `fireman` · `gardener` · `attorney` · `fisherman` · `haircut` · `forehead` · `eyelash` · `skull` · `neck` |
| 15 | `beard` · `throat` · `chin` · `liver` · `stomach` · `fist` · `chest` · `fingerprint` · `ankle` · `skeleton` |
| 16 | `biorhythm` · `visual` · `lifestyle` · `aural` · `dental` · `asleep` · `snore` · `sneeze` · `pregnancy` · `condom` |
| 17 | `detriment` · `insane` · `corpus` · `hospital` · `clinic` · `morphine` · `hormone` · `headache` · `knee` · `mankind` |
| 18 | `manly` · `optical` · `merry` · `laughter` · `joy` · `rejoice` · `satisfaction` · `zeal` · `zealous` · `gentleman` |
| 19 | `honesty` · `polite` · `frank` · `impolite` · `hospitable` · `romantic` · `considerate` · `thoughtful` · `apologise` · `apology` |
| 20 | `mercy` · `sympathy` · `robust` · `temperate` · `similarity` · `agony` · `grief` · `grieve` · `miserable` · `unfortunate` |
