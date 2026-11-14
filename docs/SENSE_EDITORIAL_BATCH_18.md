# 第十八批义项整理与正式接入

日期：2026-11-14。版本：v1.18.0。基线：d9cafb68858d1df4fffa9843fa7b550908fbebc6（v1.17.0）。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第十八批 | 200 | 359 |
| 前十七批 | 2,871 | 7,464 |
| 累计正式范围 | 3,071 | 7,823 |
| 其余尚未结构化的正式词 | 1,176 | — |

## 筛选与数据边界

通过正常应用界面导出当前学习快照，以公共 ID、归一化拼写、整词学习记录、逐题作答和完成记录确认正向学习证据，排除前十七批词。200 词均有已学证据、在导出词表中出现且未整理，无重复和缺失。已学不表示每个新义项均已掌握。nino 的旧条拼写、音标和释义不匹配，本批跳过，改选同主题且符合条件的 granite；不借本批认证旧错误。

学习导出、具体时间、候选池、私人审计和测试用户目录仅在本机忽略目录保存，不进入 GitHub 或发行包。原词 ID、笔记、收藏、学习记录及未完成练习保持兼容；私人词库、星云和生活彗星独立存储。

## 编辑范围与来源

逐词核对 Merriam-Webster 的实际条目及必要变体、派生关系。artefact 定义指向 artifact，jewellery 定义指向 jewelry，simulative 核对 simulate 中的形容词派生；storey 使用 story 页面第二个名词条的楼层义，不混入故事。全部例句为本项目原创，来源只保存链接，不复制词典例句。

每义保存稳定 ID、词性、中文解释、必要构式、近义选项排除与对应英汉例句。范围为明确列出的教学义，不宣称穷尽所有历史、习语或专业义。旧译逐项由已采用别名或范围说明保留，未确认的宽泛表达不会因原词库已有而自动成为正确答案。

impact 按当前 /ˈɪmpækt/ 训练名词撞击及影响；combine 按 /kəmˈbaɪn/ 训练结合动词，另读联合收割机名词留作参考。rotate 仅采用旋转及轮换动词；patent 采用专利相关名词、动词及定语，不混入显而易见或医学通畅义。dwarf 采用矮星、矮生动植物及使显得矮小的动词，带语境及冒犯风险的人称旧译不作普通教学称谓。

mark 的痕迹、分数、标明、纪念和评分分别配例句；mint 区分薄荷、铸币厂、铸币与完好如新；security 区分安全、担保、证券和安保；bond 区分联系、债券、粘合与化学键。降水和化学沉淀、圆圈与社交圈、遗传学与遗传构成等以实际语境区分。

## 接入与验证

生产目录、按需列表、小型首页索引和离线缓存同步接入。相关词采用保守的选项排除，涵盖 hurricane/typhoon、cosmos/universe、jail/prison、destroy/demolish、rotate/turn、infect/contaminate、bet/stake 等，排除关系不表示所有词义完全同义。

全词池四轮各 50 词覆盖全部 359 个新目标，检查固定选项、无重复、无回忆降级、逐义完成和尾部重做；同时回归历史模块与学习状态。全库例句去重及来源结构完整性检查通过后再发布。浏览器精确定位 mark 的五义与评分例句，检查原样续练、备份恢复、清除及离线行为。桌面自检使用独立数据目录。

## 本批公共词表

| 组 | 单词 |
| --- | --- |
| 1 | `granite` · `endangered` · `destroy` · `magnetic` · `gale` · `hurricane` · `mineral` · `tornado` · `typhoon` · `marble` |
| 2 | `precipitation` · `drown` · `puff` · `dense` · `surrounding` · `situation` · `petrol` · `botany` · `ecology` · `genetics` |
| 3 | `release` · `mint` · `reef` · `circle` · `algal` · `demolish` · `productive` · `extinction` · `impact` · `immense` |
| 4 | `cosmos` · `universe` · `meteorite` · `terrestrial` · `universal` · `vent` · `propulsion` · `expedition` · `pressure` · `flyby` |
| 5 | `collision` · `circuit` · `refraction` · `radioactive` · `distinctive` · `distinction` · `learn` · `university` · `expertise` · `educe` |
| 6 | `mark` · `achievement` · `underestimate` · `reward` · `overestimate` · `fellowship` · `technology` · `patent` · `mechanic` · `devise` |
| 7 | `flaw` · `accuracy` · `precisely` · `custom` · `renaissance` · `slavery` · `ethical` · `foreigner` · `anthropologist` · `aboriginal` |
| 8 | `linguistics` · `grammatical` · `wedgy` · `accent` · `utterance` · `verbal` · `syllable` · `clause` · `contention` · `eloquence` |
| 9 | `message` · `criticism` · `propaganda` · `disseminate` · `expect` · `gossip` · `magic` · `concert` · `mimic` · `simulative` |
| 10 | `souvenir` · `necessity` · `artefact` · `kit` · `sewerage` · `lotion` · `soap` · `reuse` · `litter` · `waste` |
| 11 | `jewellery` · `luxurious` · `tend` · `gem` · `veil` · `adorn` · `pigment` · `dye` · `fascinating` · `graceful` |
| 12 | `drink` · `onion` · `pea` · `berry` · `turnip` · `pear` · `plum` · `strip` · `orange` |
| 13 | `aisle` · `shed` · `nursery` · `staircase` · `cradle` · `storey` · `handrail` · `column` · `reception` |
| 14 | `carry` · `coach` · `highway` · `signpost` · `truck` · `automobile` · `tractor` · `wheel` · `cycle` |
| 15 | `bureaucracy` · `consortium` · `league` · `nationality` · `crown` · `emigrate` · `colony` · `reign` · `puppet` |
| 16 | `security` · `bond` · `increment` · `escalate` · `adequate` · `diminution` · `insufficient` · `expansive` · `agent` |
| 17 | `investigate` · `whisper` · `jail` · `prison` · `reasonably` · `commit` · `sin` · `restriction` · `criminal` |
| 18 | `invade` · `threat` · `aggressiveness` · `deprivation` · `invasion` · `threaten` · `assault` · `challenge` · `siege` |
| 19 | `client` · `miss` · `marry` · `wedding` · `depend` · `marriage` · `member` · `solely` · `acquaintance` |
| 20 | `vibrate` · `rotate` · `sway` · `connect` · `combine` · `penetrate` · `bet` · `stake` · `nightmare` |
| 21 | `yawn` · `dwarf` · `moan` · `infection` · `clone` · `symptom` · `illness` · `infect` · `disabled` |
