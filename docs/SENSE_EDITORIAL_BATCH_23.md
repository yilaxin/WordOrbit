# 第二十三批义项整理与正式接入

日期：2026-11-17。版本：v1.23.0。基线：907c409d9d7a9411116da776f26e9fe3c9909e3d（v1.22.0）。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第二十三批 | 200 | 471 |
| 前二十二批 | 3,871 | 9,689 |
| 累计正式范围 | 4,071 | 10,160 |
| 其余尚未结构化的正式词 | 176 | — |

## 筛选与数据边界

通过应用正常导出最新学习快照，依据公共 ID、归一化拼写、整词学习记录、逐题作答及完成记录确认正向学习证据，排除前二十二批。200 词均有已学证据、出现在导出词表中且尚未整理，无重复、缺失或未学混入。整词已学不自动认证新义项全部掌握。nino、primate、proliferate、sterility 的旧条仍待单独核查，本批继续跳过。

学习导出、候选池、私人审计、来源核查摘要及隔离测试目录保存在本机忽略目录，不进入 GitHub 或发行包。本批仅发布公共词条与项目原创教学例句；原词 ID、笔记、收藏、学习记录及未完成练习保持兼容，私人词库、星云和生活彗星独立存储。

## 编辑范围与来源

逐词核对实际词典条目，199 词以 [Merriam-Webster](https://www.merriam-webster.com/dictionary/sound) 为来源；[heating](https://www.collinsdictionary.com/dictionary/english/heating) 采用实际读到的 Collins 名词条目，区分供暖与供暖系统。同名 MW 页面跳至 heat，不作为 heating 专门义项的唯一证明。meteorological 使用 [meteorology](https://www.merriam-webster.com/dictionary/meteorology) 页面明确列出的形容词小节；带连字符的 lay-off 名词核对实际 [layoff](https://www.merriam-webster.com/dictionary/layoff) 条目，分开的 lay off 动词短语不混入。

每义保存稳定 ID、词性、中文解释、必要构式、保守的近义选项排除和原创英汉例句。例句为本项目编写，不复制词典例句；初稿与实际读到的来源文本逐句比对，无整句照搬。范围为明确列出的常用教学义，不宣称穷尽全部历史、习语和专业义。180 组旧译参考说明逐项保留未另立考点的原解释，不因旧库已有就自动认证，也不把未采用等同于原译必然错误。

sound 分开声音、发声、听起来、健康完好、合理可靠、财务稳健、酣睡、sound asleep、海峡、测深及 sound out 探询十一义。tender 九义覆盖温柔、食物软嫩、触痛、幼嫩、投标、法定支付手段、接驳船、提交与投标动词；mean 七义、mind 七义、chill 七义及 hang 四义均配对应语境。

convict、conduct、excuse、insert 按当前发音采用动词，另读名词保留参考；conduct 来源同时列有动词重音变体，不声称重音能绝对区分所有词性。polish 按 /ˈpɒlɪʃ/ 采用擦亮、润色等常用义，不混入另读的 Polish 专名。来源列有 refund 动词首音节重读与 radiate 形容词 /-eɪt/ 变体，因此分别保留相容的词性。

hang 的悬挂例句用 hung，绞刑例句用 hanged；substitute A for B 明确用 A 替换 B。Celsius、Fahrenheit 保留专名大写，方向词分清位置、行进与风的来源。maths 学科概念使用单数搭配。womanly 采用传统用语的描述性语境；frigid 的带评价色彩人物旧标签、physicist 的旧手术名称及 sturdy 的疾病扩展不作当前常用考点。shilling 例句采用旧收据，不提供当前汇率或断言全部地区已停用。

## 接入与验证

公共目录、按需词库、首页小型索引及离线缓存同步接入。前二十二批 3,871 个词条保持原样；全库 10,160 组例句无重复。

31 组相关词与 163 条历史词链接用于保守排除歧义干扰，涵盖 shiver/tremble、replace/substitute、brain/mind、sound/sane/rational、hail/shower、delicate/sensitive 等。排除关系不表示每个词的所有义项完全同义；东南与西南、水平与垂直、摄氏与华氏、奇数与偶数、不同学科名称保留含义区别。

全词池四轮各 50 词检查全部 471 个新目标、固定选项、无重复、无回忆降级与逐义完成，同时回归历史批次及学习状态。浏览器精确定位 sound 十一义及海峡、可靠证据例句，验证原样续练、旧版 ID、备份恢复、清除及离线行为；桌面自检使用独立数据目录。发布前检查暂存清单和机密，下载包经内容校验及远端 SHA-256 核对后公开。

## 本批公共词表

| 组 | 单词 |
| --- | --- |
| 1 | `weather` · `smoothly` · `horizontal` · `meteorology` · `mild` · `heating` · `arid` · `moist` · `warm` · `humid` · `thermal` · `snowy` · `frost` · `meteorological` · `moisture` · `dampness` · `tropical` · `snow` · `hail` · `shiver` · `thunder` · `thaw` · `lightning` · `chill` · `downpour` · `freeze` · `rainfall` · `frigid` · `sprinkle` · `tremble` · `freezer` · `freezing` · `rainbow` · `shower` · `slope` · `celsius` · `valley` · `temperature` · `forecast` · `peak` · `hillside` · `mountain` · `southern` · `fahrenheit` · `mountainous` · `southeast` · `southwest` · `inappropriate` |
| 2 | `society` · `objection` · `objective` · `agriculture` · `logistics` · `geography` · `history` · `physicist` · `physical` · `chemical` · `agricultural` · `geographic` · `calculus` · `mechanics` · `maths` · `total` · `mechanical` · `equation` · `rational` · `subtract` · `odd` · `mean` · `dividend` · `triple` · `proximity` · `triangle` · `extent` · `dot` · `sphere` · `cent` · `circulate` · `battery` · `ounce` · `volt` · `radiate` · `eccentric` · `emit` · `hollow` · `gravity` · `rusty` · `yeast` · `inherent` · `formula` · `static` · `acidification` · `empirical` · `doctrine` · `doctrinal` |
| 3 | `generation` · `prophet` · `female` · `couple` · `competitor` · `deploy` · `glorious` · `glow` · `forbid` · `hang` · `patriot` · `pause` · `peril` · `poison` · `plight` · `reproach` · `rid` · `reinforce` |
| 4 | `remind` · `surmount` · `mortify` · `replace` · `impression` · `substitute` · `lean` · `temper` · `manner` · `attitude` · `feeling` · `emotional` · `brain` · `mind` · `bone` · `physiology` · `lipstick` · `convict` · `correspond` · `conduct` · `excuse` · `flee` · `indignity` · `ignorance` · `insert` · `mention` · `offer` · `polish` · `raise` · `sideways` · `stare` · `tap` · `worship` |
| 5 | `mysterious` · `humble` · `earnest` · `humorous` · `proud` · `womanly` · `direction` · `seriously` · `friendly` · `confidence` · `sternness` · `carefully` · `hospitality` · `gratitude` · `eager` · `ready` · `sound` · `picturesque` · `prominent` · `delicate` · `arduous` · `mundane` · `naive` · `sturdy` · `steadfast` · `tender` · `sincere` · `temperateness` · `liable` · `enterprising` · `similar` · `sane` · `familiar` · `private` · `intuition` · `implicit` · `imaginary` · `fate` · `privacy` · `sadness` · `frown` · `gloomy` · `disappoint` · `rage` · `wretched` · `hatred` · `sadly` · `irritant` |
| 6 | `input` · `lay-off` · `manage` · `refund` · `shilling` |
