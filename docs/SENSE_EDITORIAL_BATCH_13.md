# 第十三批义项整理与正式接入

日期：2026-11-09。版本：v1.13.0。基线：ed1a428e58d9c476cc2a7fed3ad39ff48608e91e（v1.12.0）。

| 范围 | 单词 | 义项及原创英汉例句组 |
| --- | ---: | ---: |
| 第十三批 | 200 | 619 |
| 前十二批 | 1,930 | 5,020 |
| 累计正式范围 | 2,130 | 5,639 |
| 其余尚未结构化的正式词 | 2,117 | — |

## 筛选与编辑范围

通过应用正常导出最新学习快照，按公共词 ID 及归一化拼写排除旧整词记录、逐题作答及已完成义项记录，并排除前十二批已有结构的词。导出中不存在的词不认定为未学。本批 200 词均通过独立审计，无已学命中、无重复、无缺词。此结论针对筛选快照。

原始导出、导出时间、个人统计、候选池及选择证据只留在本机忽略目录，不进入 GitHub 或发布包。原公共词 ID 和个人学习数据不批量重写。

每个词按常用教学范围建立稳定义项 ID、词性、中文说明、近义排除概念、词典来源和原创英汉例句。实际读取 200 个 Merriam-Webster 词条，并补读 bear、round、scale、fire、bar、race 的后续定义。公开文件只存来源链接，不复制词典例句。常用义按语义区分，不追求固定数量，也不声称收尽专业、历史或习语用法。

旧释义逐项映射到义项别名或 117 组逐词参考决定。未纳入教学范围的旧译有具体说明，不用它们制造错误同义选项。例如 race 的通信计划缩写、raw 的写后读、van 的增值网不是本批英语常用义；human 不与 humane 的有同情心混淆；argument 的数学参数保留范围说明。

## 重点区别

- bear 区分熊、忍受、承载、带有、生育、结果及转向；fire 区分火、炉具、炮火、激情、射击、解雇、点燃、激励及烧制。
- scale 区分规模、比例尺、刻度、秤、鳞片、音阶、水垢、攀登、按比例调整及去鳞；round 区分形状、约数、围绕、轮次、巡视、饮料、弹药、绕过、数字取整及磨圆。
- seal 的印章和盖章、brick 的砖与砌砖、punch 的工具与打孔等词性用法分别配例句。
- construction 明确标记 cook the books、pave the way、keep a lid on、frighten away 等，避免脱离搭配泛化。
- frighten/terrify、rubbish/junk/trash、enlarge/magnify、bear/tolerate/endure、happen/occur、gain/increase、tail/trail/follow 等共享近义排除概念。反向或仅表面文字相似的意义不合并，如活火山/死火山、银色/黄色、鳞片/攀登。

## 接入与验证

生产注册、按需模块、首页小型索引和离线缓存同步接入。首页累计 2,130 词 / 5,639 义项；其余词仍可基础练习。公共词库展开逐义展示词性、搭配和英汉例句。

回归检查包括实际全词池四轮各 50 词覆盖 619 个新目标，无重复或近义冲突选项、无回忆降级；全部历史例句去重；旧译覆盖；浏览器精确定位 scale 的十个义项，并验证续练、备份、清除边界及离线行为。原生检查使用独立数据目录，不操作个人记录。

## 本批公共词表

| 组 | 单词 |
| --- | --- |
| 1 | `flower` · `fire` · `skin` · `bear` · `hedge` · `rat` · `seal` · `tail` · `stable` · `bar` |
| 2 | `list` · `straight` · `round` · `rate` · `scale` · `survey` · `theory` · `pump` · `generate` · `guard` |
| 3 | `race` · `step` · `pull` · `stuff` · `raw` · `rubbish` · `junk` · `trash` · `section` · `tag` |
| 4 | `fan` · `lag` · `slight` · `silver` · `rod` · `candy` · `lid` · `paste` · `pond` · `cook` |
| 5 | `locate` · `brick` · `drill` · `supermarket` · `toilet` · `cart` · `bind` · `ditch` · `pave` · `van` |
| 6 | `unite` · `steady` · `slogan` · `personal` · `fair` · `session` · `silence` · `trap` · `pretend` · `cheat` |
| 7 | `equip` · `hit` · `punch` · `chop` · `stab` · `starve` · `aggressive` · `terror` · `frighten` · `happen` |
| 8 | `proceed` · `escape` · `interrupt` · `shrink` · `withdraw` · `discard` · `enclose` · `disturb` · `halt` · `interfere` |
| 9 | `wife` · `youth` · `guest` · `customer` · `engagement` · `appoint` · `married` · `individual` · `divorce` · `boss` |
| 10 | `committee` · `beg` · `act` · `react` · `reflect` · `activity` · `active` · `revive` · `peer` · `vow` |
| 11 | `argument` · `reply` · `explanation` · `argue` · `swear` · `clap` · `urgent` · `follow` · `loosen` · `mess` |
| 12 | `attract` · `astonish` · `annoy` · `upset` · `bewilder` · `ironic` · `panic` · `terrify` · `bully` · `tempt` |
| 13 | `designate` · `distribute` · `reverse` · `assure` · `wish` · `attempt` · `strive` · `sort` · `launch` · `commence` |
| 14 | `exploit` · `explore` · `omit` · `exert` · `cancel` · `erase` · `rescue` · `obtain` · `gain` · `supply` |
| 15 | `enlarge` · `magnify` · `update` · `leak` · `spill` · `uphold` · `backup` · `contain` · `specify` · `deserve` |
| 16 | `sink` · `plummet` · `invite` · `greet` · `recollect` · `impress` · `repeat` · `character` · `personality` · `emotion` |
| 17 | `trait` · `feature` · `characteristic` · `human` · `mental` · `desire` · `detach` · `gaze` · `integrate` · `purpose` |
| 18 | `pierce` · `restore` · `shake` · `twist` · `tease` · `trail` · `wipe` · `organic` · `visible` · `habit` |
| 19 | `vague` · `blind` · `quiet` · `broken` · `disable` · `weird` · `weigh` · `weight` · `painful` · `weaken` |
| 20 | `separate` · `drug` · `refresh` · `easy` · `happiness` · `fun` · `please` · `keen` · `gentle` · `fortune` |
