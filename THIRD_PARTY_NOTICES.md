# 资料来源与致谢

词轨随附的词典与例句含第三方内容，公开下载或再分发时须保留相应署名与许可。

- **ECDICT**：离线释义与音标来源之一。项目：<https://github.com/skywind3000/ECDICT>；MIT License，Copyright (c) 2025 Linwei。完整许可见其 [LICENSE](https://github.com/skywind3000/ECDICT/blob/master/LICENSE)。
- **WordOrbit 修订学习词条（2026-10-22）**：`reviewed-dictionary.js` 含 104 条编辑整理的简明中文学习释义。拼写、主要义项和读音参考 [Cambridge Dictionary](https://dictionary.cambridge.org/dictionary/english-chinese-simplified/) 与 [Collins Dictionary](https://www.collinsdictionary.com/dictionary/english/accustom)，结合既有 ECDICT；每条保留参考链接。仅整理单词语言事实和简短中文义项，不打包相关网站正文、词典例句或音频；未取得、也不声称拥有 Cambridge 或 Collins 词典内容的整体再分发许可。本项目与上述词典出版者无隶属关系。
- **Tatoeba**：部分英汉例句来自 <https://tatoeba.org/en/downloads>。其下载页注明文本采用 [CC BY 2.0 FR](https://creativecommons.org/licenses/by/2.0/fr/)；应用保留原始句子标识。未使用 Tatoeba 音频文件。
- **OPUS Wikimedia**：部分平行例句取自 <https://opus.nlpl.eu/Wikimedia.php>，原始文本来自 Wikimedia。重用具体句子时应参考对应 Wikimedia 页面及 OPUS 语料说明；本项目不拥有这些句子的版权。
- **《雅思词汇真经》**：词表来源书籍。封面、扫描页、排版和正文属于各自权利人；本项目与原书作者或出版社无隶属关系。项目发布者已确认拥有公开再分发该扫描件的授权，并将整本 PDF 作为单独的 Release 附件提供；此声明不表示本项目取得原书版权。

部分词条例句由项目编写。v1.4.1 已处理当前随附词库的待核验词；后续未查证的导入内容仍需核验，可在词库中编辑个人版本。词条并非权威词典全文，也不保证零错误。

**WordOrbit 全库复查修订（v1.4.2，2026-10-22）**：`catalog-repairs.js` 整理 153 份简明中文学习释义、596 份逐词音标参考及常见异读说明，参考 Cambridge、Collins，耐阴用法参考 [RHS](https://www.rhs.org.uk/garden-design/shade-gardening)，结合 ECDICT。逐词保留来源网址；部分规则复数/派生读音注明构词依据，未声称独立词典列有相同英式音标。仅语言事实与简短义项整理，不收录相关网站正文、音频、词典例句或其他品牌素材，不宣称获得整站词典内容再分发许可。旧 ECDICT 次重音点号另做格式规范化。原书疑词 revoltive 不编造发音并暂不出题，当前正式词库 4,247、资料疑词 1；上文 v1.4.1 的全数通过是历史结果。完整边界见 `docs/VOCABULARY_AUDIT_v1.4.2.md`。

v1.4.3 仅调整顶部私人词库入口显示名称为“我的星球”及离线缓存版本；未新增词典、素材、字体或第三方依赖，以上资料来源和许可保持不变。

v1.5.0 的生活彗星为本项目编写的原生 WebGL/Canvas 程序化绘制（彗核、蓝紫尾迹与星点），没有新增三维框架、外部材质、字体或词典内容。用户提供的视觉参考未作为图片打包或再分发。私人生活记录由用户在本机填写，不属于随附公开资料。

v1.5.1 仅修复彗星的鼠标、滚轮和编辑框交互，并补充隔离输入测试；未新增第三方依赖、图片、词典内容或私人数据处理服务。

v1.5.2 新增由内置 OpenAI image_gen 生成的原创银河背景，原图 `design/comets-milkyway-v1.png`，最终提示词与处理说明见 `design/comets-background-prompt.md`。用户提供的参考照片仅用于理解风格，没有作为资源打包或再分发。该图片为生成式视觉素材，非实拍天文照片，也不用于天体定位。显示 WebP 仅做机械缩放及格式压缩；开发脚本可使用 sharp，App 不打包 Node/sharp 运行时。原来的交互彗星仍为本项目 WebGL/Canvas 绘制，私人记录不进入素材或发布包。
