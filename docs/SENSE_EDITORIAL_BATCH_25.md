# 第二十五批：最后四项核查、纠错与义项接入

日期：2026-11-18。版本：v1.25.0。基线：c1beab99ba0c701a4aa8bb1ec698b7d3a9669f48（v1.24.0）。

| 处理 | 结果 |
| --- | --- |
| nino | 原书实际为 El Niño；合并错误 OCR 残片至既有 el nino，不新增男子名义项 |
| primate | 规范主读音，保留已证实的读音变体；新增 3 个义项及原创双语例句 |
| proliferate | 修正混写元音的旧音标；新增 3 个义项及原创双语例句 |
| sterility | 确认旧主重音有依据，规范 IPA 字形；新增 4 个义项及原创双语例句 |
| 正式词库 | 去重后 4,246 词，全部具有明确范围内的结构化义项，共 10,560 个义项及原创例句组 |
| 正式词未结构化 | 0；原有 revoltive 资料疑词仍独立保留，不在正式词范围内 |

## 原书核查结论

本机原书为扫描 PDF，不能仅凭空白文本提取判断词形。本次直接渲染并查看 PDF 物理第 10、38、40 页，分别对应印刷第 003、032、034 页。早期 OCR 的 source_page 采用物理页号，与书末索引补录所用印刷页码不同；本次保留两种来源记录，不批量重写全书页码。

印刷第 003 页确为完整的 El Niño，释义为厄尔尼诺现象，原书并没有在此收录男子名 nino。原 OCR 将 El 当成音标 /el/、将 Niño 截成 nino，之后离线词典又误配成人名。此残片与 index-el-nino 指向同一个词，故按已确认重复项合并，不虚构第四个独立词义。

印刷第 032 页 primate 为灵长类动物，读音含 /eɪt/；第 034 页 proliferate 为迅速增殖、剧增，sterility 为不生育。词典核查又确认三词的其它常用义项。本批例句全部重新编写，不复制原书或词典例句，不上传原书页图。

## 词典复核与读音

- [primate：Collins](https://www.collinsdictionary.com/dictionary/english/primate) 与 [Merriam-Webster](https://www.merriam-webster.com/dictionary/primate)：主读音采用 /ˈpraɪmeɪt/。首席主教义也可读 /ˈpraɪmət/，来源还列美式 /ˈpraɪmɪt/ 变体。旧 /ˈpraɪmit/ 不应仅凭近似外形就被判成完全不存在的发音。词义分为灵长类动物、首席主教、灵长类的；首席主教强调地区内的优先地位，并非所有大主教的泛称。
- [proliferate：Collins](https://www.collinsdictionary.com/dictionary/english/proliferate) 与 [Merriam-Webster](https://www.merriam-webster.com/dictionary/proliferate)：采用英式 /prəˈlɪfəˌreɪt/，来源另列美式 /proʊ-/。旧 /prəəʊ-/ 混合了元音形式；主重音原本在第二音节，不将已有正确重音也判错。分列生物迅速增殖、一般数量激增或扩散、使大量增加的及物用法。
- [sterility：Collins](https://www.collinsdictionary.com/dictionary/english/sterility)、[独立名词条目](https://www.merriam-webster.com/dictionary/sterility) 与 [sterile 的衍生名词及相关义项](https://www.merriam-webster.com/dictionary/sterile)：采用 Collins 英式 /stɛˈrɪlɪtɪ/；第二音节重读已获证实，旧重音并非错误。分列不育、无菌状态、土地贫瘠、缺乏创意或生气。
- [El Niño：Merriam-Webster](https://www.merriam-webster.com/dictionary/El%20Ni%C3%B1o) 与 [Collins](https://www.collinsdictionary.com/dictionary/english/el-nino)：公共检索键保留 el nino，规范写法使用 El Niño，音标采用 /el ˈniːnjəʊ/。复用第二十四批已核对的气候义和原创例句，不凭重复残片新增相同义项。

Cambridge 页面本次返回访问拒绝，未将访问失败当作核验成功；本批公开来源均为实际读取的 Collins 或 Merriam-Webster 页面。

## 升级与记录保护

纠错覆盖层修订三个新词和 El Niño 的释义、词性、音标及来源。原始 OCR 文件保持可追溯，运行时修正已确认错误。

nino 合并只匹配原始 id=ocr-nino、source=ocr、word=nino 三项条件；不会全局改写用户自定名字或私人词库。同一公共词同时存在时，合并 seen/correct/wrong，等级取较高值、保留最近学习时间与较早到期时间，并保留笔记、标签、收藏、尝试记录和整本遍历完成记录。已保存的基础练习题目改用正确词与释义，已答题不重新计分。

若旧备份只有 ocr-nino，则将该词拼写修正为 el nino，保留原 ID；首页小型索引将 ocr-nino 列为已确认公共别名。既有 El Niño 义项完成记录不被清空，新整理的三词也不会因整词已背过就自动标为义项完成。多次升级不会重复累加成绩。

私人学习记录、核查工作文件与隔离测试资料仅保存在本机，不进入源码提交或下载包。revoltive 是此前单独保留的原书资料疑词，继续不参与正式练习；本批没有擅自认证它。

## 验证与发布

审核三个新词 10 个义项及对应原创英汉例句，保留旧释义范围说明与保守近义排除。全库来源追踪无未映射片段、无未决片段，正式 4,246 词全部可进入义项练习。此前 4,243 词的义项与例句保持原样。

新增最后 3 词全目标练习、有效发音变体、旧公共 ID 资格与重复项排除检查；浏览器使用合成记录覆盖两条同存、仅旧条存在、反复启动、旧备份导入、自定名字不受影响，以及 primate/sterility 逐义展示。回归历史义项批次、发音提示、基础词库、恢复备份、续练、离线与首页主题词数。桌面自检使用独立数据目录，不关闭用户现有窗口。

通过检查后提交本批公共改动，提交后重建 Windows ARM64 程序；正常推送 main 与 v1.25.0 标签，ZIP 与 SHA-256 附件先上传草稿、核对内容后公开。
