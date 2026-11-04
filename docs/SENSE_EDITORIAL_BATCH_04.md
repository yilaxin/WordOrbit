# 第四批：200 词义项结构与原创例句

日期：2026-11-04。本批新增 200 个互不重复的正式公共词，415 个学习义项组，以及逐组匹配的 415 组原创英汉例句。与前三批的 130 个词不重复，不限制每词两个义项或两道题。

本批完成后，累计建立结构的词为 330 个，义项组和原创例句各 809 组。其中 325 词、769 义项组通过各批声明学习范围检查。第二批原有的 5 个部分审核词、10 个未决旧译继续保持阻断；全库 4,247 个正式词中另有 3,917 词尚未建立新结构。

**这是开发中的词义数据，尚未接入正式网页和桌面练习。** 本次没有替换桌面程序或发布新安装包。`complete` 表示本批明确声明的学习范围已检查，不表示穷尽全部词典义项、习语、学科术语或所有雅思可能考到的用法。

## 200 词名单

以下领域仅用于编辑核对，不改变书中主题，不决定将来练习的抽词顺序。

| 领域 | 单词 |
| --- | --- |
| 环境与农业 | toxic, pollute, barren, fertile, evaporate, reservoir, density, genetic, diverse, harvest |
| 生物与演化 | fungus, germinate, decay, enzyme, nutrient, mechanism, extinct, species, ancestor, descendant |
| 微生物、生命与太空 | bacteria, virus, metabolism, protein, instinct, hibernate, interstellar, celestial, probe, module |
| 教育与学习 | primary, institute, academy, literate, illiteracy, numerate, motivation, inspiration, qualification, certificate |
| 研究与技术 | contrast, illustrate, determine, questionnaire, inquiry, feedback, technique, invent, discovery, equipment |
| 方法与文化 | framework, adapt, adjust, accurate, precise, convention, ideology, anthropology, etiquette, excavate |
| 语言 | symbol, syntax, grammar, intonation, phonetic, consonant, alphabet, oral, vowel, pronoun |
| 交流与娱乐 | entertainment, interpret, communicate, negotiate, editor, critic, recreation, improvise, melody, sponsor |
| 材料与用品 | merchandise, crude, utensil, landfill, detergent, stationery, leaflet, opacity, material, duplicate |
| 服饰与外观 | fibre, leather, luxury, extravagant, exquisite, uniform, textile, velvet, shabby, tailor |
| 饮食 | recipe, cater, provision, beverage, sober, crop, flavour, spicy, hunger, inedible |
| 建筑与居住 | infrastructure, construct, establish, reside, residential, habitable, corridor, ceiling, pillar, malfunction |
| 交通与旅行 | attraction, airline, passage, intersection, pavement, harbour, vessel, transit, convey, postpone |
| 政府与公共事务 | diplomatic, regime, authority, neutral, bilateral, municipal, administration, demographic, nominate, perspective |
| 经济与经营 | entrepreneur, currency, tariff, recession, debt, deficit, affluent, transaction, sustainable, reimburse |
| 法律与约束 | enforce, constraint, mandate, prejudice, justice, mediate, justify, jury, restrain, privilege |
| 冲突与应对 | defence, conspiracy, deter, rebellion, refute, catastrophe, compromise, retreat, withstand, camouflage |
| 角色与关系 | supervisor, juvenile, adolescence, tenant, dependent, consultant, adopt, nourish, encounter, companion |
| 行为与目标 | assert, integration, deviate, intervene, impair, conceal, undertake, aspire, fulfil, distinguish |
| 身心与措施 | wellbeing, stimulus, chronic, trauma, lethal, prescription, precaution, remedy, enthusiasm, rigorous |

## 这批重点补齐的区别

- `numerate` 补入现代常见的“有基本计算能力的”，避免只有“算出来、列举”等旧标签。
- `sustainable` 区分环境资源的可持续与工作方式、方案等能够长期维持。
- `crop` 区分庄稼、收成、短发、裁剪和种植；`ceiling` 区分天花板和上限。
- `harbour` 区分港口、心怀感情、窝藏和藏有病菌；`vessel` 区分船、容器和生物输导管。
- `dependent` 区分依赖、取决于条件和受抚养者；`prescription` 区分药物处方、验光处方和解决问题的方案。
- `trauma` 区分心理创伤与身体外伤；`distinguish` 区分辨别差异、使有特色、辨认和表现出众。
- 特定搭配单独记录，如 `cater for/to`、`sober up`、`assert oneself`、`distinguish oneself`。
- `municipal` 不泛指所有内政；`consultant` 不误教为征求别人意见者；`neutral` 的中性色不等于完全无色；`metabolism` 不等于生物变态。

中文旧译逐片段记录为已分组、需语境、范围外或不支持独立使用；没有靠删除旧字符串隐藏缺口。范围外标签不被认证为正确的常用义项，也不进入干扰项。

## 原创例句示例

**ceiling：天花板**

A small lamp hung from the centre of the ceiling.

一盏小灯挂在天花板中央。

**ceiling：上限**

The council set a ceiling on annual parking charges.

议会为年度停车收费设定了上限。

**harbour：心怀**

Some residents still harbour doubts about the proposed airport.

一些居民仍然对拟建机场心存疑虑。

**sustainable：能够长期维持**

Working every night is not a sustainable routine for the team.

每晚加班不是这支团队能够长期维持的工作方式。

## 来源与验证

词义以 Cambridge 英文学习词典逐词核对，部分词、正式或专门用法用 Collins 补充核对。中文释义分组和所有例句为 WordOrbit 编写，不摘录词典例句，不用通用句式批量替换词形。每组保存来源、词性、必要搭配、近义排除标记、英文例句和对应中文。

主要核对条目示例：[Cambridge crop](https://dictionary.cambridge.org/dictionary/english/crop)、[Cambridge dependent](https://dictionary.cambridge.org/dictionary/english/dependent)、[Cambridge trauma](https://dictionary.cambridge.org/dictionary/english/trauma)、[Collins sustainable](https://www.collinsdictionary.com/dictionary/english/sustainable)、[Collins justify](https://www.collinsdictionary.com/dictionary/english/justify)。完整内容及逐义项来源在 `src/VocabDesk/Website/sense-batch-04.js`。

- 覆盖审计确认本批 200 词均在正式词表，旧译片段未映射数为 0。
- `tests/sense-batch-04.test.cjs` 检查 200 词、415 义项及例句数量、例句不重复、包含目标词或其屈折词形、来源与词义边界。
- 用这 200 词生成四个不重叠的 50 词批次，检查全部义项目标、按实际义项变化的题量、选项快照、近义干扰排除、错题末尾重做及完成条件。测试不读取真实学习档案。
- 未学筛选工具支持显式 `--batch 04 --count 200`；学习记录核对仅在本机读取授权导出，个性化证据仅保存在忽略目录，不随代码公开。

运行 `node scripts/Audit-SenseCoverage.cjs` 可生成本机 `.build/sense-batch-04-review.md`，其中包含全部义项、例句和旧译处理说明。该审核单生成过程不读取私人学习数据。
