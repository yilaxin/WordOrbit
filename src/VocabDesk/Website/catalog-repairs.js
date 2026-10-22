/* Whole-catalog editorial repairs, 2026-10-22. Language facts and short study
 * glosses only; no dictionary page text, examples, audio or runtime requests. */
(function(root){
 'use strict';
 const meaningRows=`
device|n.|装置；设备；器具；方法；手段；策略；修辞手法；爆炸装置
secondary|adj.|次要的；第二位的；中学的；辅助的；派生的；次生的；继发的
acid|n. / adj.|酸；酸性物质；迷幻药；酸的；酸性的；酸味的；尖刻的
basic|adj. / n.|基本的；基础的；根本的；初级的；碱性的；基本原理；基本要素
copy|n. / v.|副本；复制品；一本；一份；稿件；广告文案；复制；复印；抄写；抄袭；模仿
grant|v. / n.|授予；给予；准许；承认；补助金；助学金；拨款
domain|n.|领域；范围；领地；势力范围；域；域名；定义域
echo|n. / v.|回声；回音；反响；呼应；回响；重复；附和；反映
binary|adj. / n.|二进制的；二元的；由两部分组成的；二进制；双星
shift|v. / n.|移动；转移；改变；转换；推卸；换挡；摆脱；出售；变化；轮班；当班时间；轮班职工；直筒连衣裙
edit|v.|编辑；编校；修订；剪辑；删改
concert|n. / v.|音乐会；演奏会；一致；协力；共同商定；协调
pop|n. / v. / adj. / adv.|流行音乐；汽水；砰的一声；突然出现；突然去一下；使爆开；弹出；流行的；通俗的；突然地；砰地
move|v. / n.|移动；搬动；搬家；迁居；行动；进展；使感动；提议；步骤；举措；棋步；搬迁
slip|v. / n.|滑动；滑倒；溜走；悄悄放入；滑落；下降；出错；泄露；滑倒；差错；纸条；便条；衬裙
mop|n. / v.|拖把；蓬乱的头发；用拖把拖洗；擦拭；清除
label|n. / v.|标签；标记；称号；唱片公司；贴标签；标注；把…归类为
bell|n. / v.|铃；钟；铃声；钟声；钟状物；给…装铃
tin|n. / adj. / v.|锡；马口铁；罐；罐头；锡制的；镀锡的；镀锡；装罐保存
nut|n.|坚果；果仁；螺母；螺帽；狂热爱好者；怪人
stove|n.|炉子；火炉；炉灶
drunk|adj. / n.|喝醉的；醉酒的；陶醉的；醉汉
found|v.|建立；创立；创办；奠基于；铸造；发现；找到
saw|n. / v.|锯；锯子；格言；谚语；锯开；锯切；来回拉动；看见
exit|n. / v.|出口；通道；离开；退出；退场；离场
install|v.|安装；设置；安置；使就职；任命
power|n. / v.|力量；能力；权力；控制力；势力；强国；动力；电力；功率；放大倍数；幂；乘方；给…提供动力；驱动
share|n. / v.|份额；一份；股份；股票；分担的责任；分享；共用；分配；分担；共有；倾诉；吐露
choice|n. / adj.|选择；选择权；可供选择的人或物；精选品；上等的；优质的
protocol|n.|协议；议定书；外交礼仪；行为准则；操作规程；通信协议
bound|adj. / n. / v.|必定的；很可能的；前往的；受约束的；装订的；跳跃；界限；范围；跳跃前进；限制
act|n. / v.|行为；行动；举动；法案；法令；一幕；表演；采取行动；起作用；表现；扮演；假装
capture|v. / n.|捕获；俘获；夺取；吸引；引起；准确表达；拍摄；记录；捕获行动；战利品
sort|n. / v.|种类；类型；某一类人；分类；整理；排序；挑选；妥善处理
erase|v.|擦掉；抹去；删除；消除
backup|n. / adj.|备份；备用物；后援；支援；备用的；后备的；伴奏的；伴唱的
replace|v.|替换；代替；取代；更换；放回原处
broken|adj.|破碎的；损坏的；断裂的；中断的；不连贯的；蹩脚的；破裂的；心灰意冷的；被违背的
apologise|v.|道歉；赔不是；为…表示歉意
beat|v. / n. / adj.|打；敲；击败；胜过；搅打；跳动；拍动；节拍；节奏；心跳；辖区；筋疲力尽的
bore|v. / n.|使厌烦；使无聊；钻孔；钻挖；令人厌烦的人或事；孔；孔径；涌潮；承受；携带
born|adj. / v.|出生的；诞生的；天生的；与生俱来的；出生；诞生
crew|n. / v.|全体船员；机组人员；全体工作人员；一组人；一帮人；担任船员；为…配备船员
command|n. / v.|命令；指令；指挥；控制；司令部；部队；掌握；命令；指挥；控制；赢得；俯瞰
data|n.|数据；资料；信息
lay|v. / adj. / n.|放置；铺设；产卵；下蛋；布置；奠定；提出；下注；躺下；非神职的；外行的；叙事诗
mode|n.|方式；模式；状态；风格；调式；众数
path|n.|小路；道路；路线；路径；途径；轨迹；行动方向
pause|v. / n.|暂停；停顿；中止；停顿时间；间歇；休止符
print|v. / n.|印刷；打印；出版；用印刷体书写；冲印；印制；印刷品；印刷字体；印记；指纹；照片；印花
restore|v.|恢复；使复原；修复；修补；归还；恢复原职；还原
wound|n. / v.|伤口；创伤；伤害；使受伤；伤害感情；缠绕
librarian|n.|图书馆员；图书管理员
session|n.|一段时间；一次活动；会议；会期；开庭期；学期；会话
discipline|n. / v.|纪律；自律；学科；训练；管教；惩戒；约束；训练；处罚
mall|n.|购物中心；商场；步行购物街；林荫步道
make-up|n.|化妆品；化妆；构成；组成；性格；补考；补做的课业
deployment|n.|部署；调动；展开；运用；有效配置
despatch|v. / n.|派遣；发送；发运；迅速处理；急件；快信；新闻报道
decorate|v.|装饰；布置；装修；授予勋章
dispute|n. / v.|争论；争议；纠纷；争执；质疑；对…提出异议；争夺
discussion|n.|讨论；商讨；议论；论述
dissertation|n.|学位论文；专题论文；学术论述
clearly|adv.|清楚地；清晰地；明显地；显然
manually|adv.|手工地；用手地；人工地
desolate|adj. / v.|荒凉的；荒无人烟的；孤寂的；凄凉的；使荒废；使悲痛
medium|n. / adj.|媒介；媒体；方法；手段；介质；灵媒；中等的；适中的；中等熟度的
cell|n.|细胞；单间牢房；电池；蜂房；小室；基层小组
awesome|adj.|极好的；令人赞叹的；令人敬畏的；令人畏惧的
party|n. / v.|聚会；派对；政党；一群人；一方；当事人；参加聚会；寻欢作乐
fair|adj. / n. / adv.|公平的；合理的；相当好的；尚可的；浅色的；晴朗的；展览会；交易会；集市；公平地
spring|n. / v.|春天；春季；弹簧；弹性；泉；源泉；跳跃；跃起；突然出现；涌出；源于
issue|n. / v.|问题；议题；争论点；一期；期号；发行；发行物；公布；发布；发给；涌出
literature|n.|文学；文学作品；文献；研究资料；宣传印刷品；产品说明资料
subject|n. / adj. / v.|主题；话题；学科；科目；主语；对象；受试者；臣民；受支配的；易受影响的；取决于的；使遭受；使服从
present|adj. / n. / v.|出席的；在场的；现存的；目前的；现在；目前；礼物；呈现；提交；赠送；介绍；主持节目
object|n. / v.|物体；物品；对象；目标；目的；宾语；反对；提出异议
permit|v. / n.|允许；许可；准许；使成为可能；许可证；执照；通行证
produce|v. / n.|生产；制造；产生；引起；出示；提出；制作；农产品
content|n. / adj. / v.|内容；目录；所含之物；含量；满足感；满意的；满足的；使满足
refuse|v. / n.|拒绝；谢绝；不接受；垃圾；废弃物
desert|n. / v. / adj.|沙漠；荒漠；荒凉的地区；遗弃；抛弃；擅离；开小差；荒芜的
lead|v. / n. / adj.|带领；引导；领导；通向；导致；领先；主角；领先地位；线索；导线；铅；首要的
minute|n. / adj. / v.|分钟；片刻；瞬间；会议记录；微小的；细微的；极详细的；记录会议内容
record|n. / v.|记录；档案；履历；唱片；纪录；记载；录音；录像；记录；显示
project|n. / v.|项目；工程；计划；课题；规划；预计；预测；投射；放映；突出；发射；表达印象
perfect|adj. / v. / n.|完美的；理想的；完全的；准确的；使完善；改进；完成时
intimate|adj. / n. / v.|亲密的；私人的；隐私的；详尽的；密切的；密友；暗示；透露；告知
separate|adj. / v. / n.|分开的；单独的；独立的；分离；分隔；区分；分居；单件衣服
deliberate|adj. / v.|故意的；蓄意的；深思熟虑的；从容不迫的；仔细考虑；商议
convert|v. / n.|转换；转化；改装；兑换；改变信仰；使皈依；皈依者；改变信念的人
estimate|v. / n.|估计；估算；估价；判断；估计值；估价单
graduate|n. / v. / adj.|大学毕业生；毕业生；毕业；取得学位；逐渐转向；大学毕业的；研究生的
import|v. / n.|进口；输入；引进；导入；进口商品；含义；重要性
export|v. / n.|出口；输出；传播；导出；出口商品；出口业务
increase|v. / n.|增加；增长；增大；提高；增加量；增长幅度
decrease|v. / n.|减少；减小；降低；减少量；下降幅度
moderate|adj. / v. / n.|适度的；中等的；温和的；稳健的；使缓和；减轻；主持；温和派
protest|n. / v.|抗议；反对；抗议活动；抗议书；提出抗议；坚决声称；申辩
transfer|v. / n.|转移；传递；转让；调动；转学；转车；汇款；搬迁；转账；转会
alternate|adj. / v. / n.|交替的；轮流的；间隔的；每隔一个的；交替；轮流；替代者；候补者
bow|n. / v.|弓；蝴蝶结；琴弓；船头；鞠躬；低头；屈服；使弯曲；用弓拉奏
row|n. / v.|排；行；一排座位；一排房屋；划船；争吵；吵闹；争吵声
sow|v. / n.|播种；散布；传播；母猪
pill|n. / v.|药丸；药片；口服避孕药；药丸状小球；起毛球
alumni|n. plural|校友；毕业生
algae|n. plural|藻类；海藻
criteria|n. plural|标准；准则；评判条件
trousers|n. plural|裤子；长裤
scissors|n. plural|剪刀
bacteria|n. plural|细菌
eaves|n. plural|屋檐；檐口
turtle|n.|龟；海龟
thermal|adj. / n.|热的；热量的；保暖的；温泉的；上升热气流；保暖内衣
dairy|n. / adj.|乳品场；奶牛场；乳品店；乳制品；乳制品的；奶制的
fare|n. / v.|交通费；票价；车费；乘客；饭菜；食物；进展；过活
cunning|adj. / n.|狡猾的；狡诈的；巧妙的；灵巧的；狡猾；诡计；机巧
scatter|v. / n.|撒播；散布；使分散；散开；驱散；零星散布物
logical|adj.|符合逻辑的；合乎情理的；逻辑学的；必然的
logically|adv.|合乎逻辑地；有条理地；从逻辑上说
periodically|adv.|周期性地；定期地；时而；间或
increasing|adj.|不断增加的；越来越多的；逐渐增长的
aggress|v.|侵犯；侵略；挑衅；攻击
aggressiveness|n.|攻击性；侵略性；咄咄逼人；进取心；积极主动
irregularly|adv.|不规则地；不定期地；不均匀地；不整齐地
cosmos|n.|宇宙；有序的整体；秩序；波斯菊
ironic|adj.|讽刺的；反讽的；令人啼笑皆非的；出乎意料的
understanding|n. / adj.|理解；理解力；谅解；共识；协议；善解人意的；体谅人的
southern|adj.|南方的；南部的；来自南方的
exploitation|n.|开发；开采；利用；剥削；榨取
takeaway|n. / adj.|外卖食品；外卖餐馆；要点；主要收获；供外带的
scrutinise|v.|仔细检查；细看；审查；详细研究
utilities|n. plural|公用事业；水电煤气等公共服务；公共设施；实用工具；实用程序
discounter|n.|折扣商店；折扣零售商；贴现人
dampness|n.|潮湿；湿气；湿度
ripener|n.|催熟剂；使成熟的人或物
rainforest|n.|热带雨林；雨林
biorhythm|n.|生物节律；生物节奏
shade-tolerant|adj.|耐阴的
carbon dioxide|n.|二氧化碳
el nino|n.|厄尔尼诺现象；赤道太平洋海水异常增暖现象
new zealand|n.|新西兰
coed|adj. / n.|男女同校的；男女混合的；男女同校大学的女生
learned|adj.|博学的；有学问的；学术的；习得的
novel|n. / adj.|长篇小说；新颖的；新奇的
hail|n. / v. / interj.|冰雹；一阵；招呼；呼喊；赞扬；称颂；下冰雹；致敬；万岁
silence|n. / v.|寂静；安静；沉默；缄默；音讯全无；使安静；使沉默；压制
farewell|n. / interj. / adj.|告别；辞行；再见；再会；告别的
dear|adj. / n. / interj. / adv.|亲爱的；心爱的；尊敬的；昂贵的；亲爱的人；好人；天哪；高价地
finger|n. / v.|手指；手套的指部；指状物；用手指触摸；拨弄；指证；告发
flag|n. / v.|旗；旗帜；标志；信号；标记；石板；鸢尾；做标记；提醒注意；打旗号；疲乏；衰退；下垂
mandatory|adj.|强制的；必须履行的；法定的
cosmetics|n. plural|化妆品；美容用品
`.trim().split('\n');
 const entries=Object.create(null);
 for(const row of meaningRows){const [word,pos,meaning]=row.split('|');if(!word||!pos||!meaning||entries[word])throw Error('Invalid catalog repair row');entries[word]={pos,meaning,reviewedMeaning:true};}
 // Filled with checked, word-specific phonetic repairs; never guess at runtime.
 const pronunciations={
  "linguistic": {
    "ipa": "/lɪŋˈɡwɪstɪk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/linguistic",
    "accent": "UK"
  },
  "leisure": {
    "ipa": "/ˈleʒə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/leisure",
    "accent": "UK"
  },
  "wellbeing": {
    "ipa": "/ˌwelˈbiːɪŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/wellbeing",
    "accent": "UK"
  },
  "core": {
    "ipa": "/kɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/core",
    "accent": "UK"
  },
  "destroy": {
    "ipa": "/dɪˈstrɔɪ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/destroy",
    "accent": "UK"
  },
  "hurricane": {
    "ipa": "/ˈhʌrɪkən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/hurricane",
    "accent": "UK"
  },
  "tornado": {
    "ipa": "/tɔːˈneɪdəʊ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/tornado",
    "accent": "UK"
  },
  "thermodynamic": {
    "ipa": "/ˌθɜːməʊdaɪˈnæmɪk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/thermodynamic",
    "accent": "UK"
  },
  "smog": {
    "ipa": "/smɒɡ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/smog",
    "accent": "UK"
  },
  "torrent": {
    "ipa": "/ˈtɒrənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/torrent",
    "accent": "UK"
  },
  "earthquake": {
    "ipa": "/ˈɜːθkweɪk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/earthquake",
    "accent": "UK"
  },
  "smoggy": {
    "ipa": "/ˈsmɒɡi/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/smoggy",
    "accent": "UK"
  },
  "plateau": {
    "ipa": "/ˈplætəʊ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/plateau",
    "accent": "UK"
  },
  "shore": {
    "ipa": "/ʃɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/shore",
    "accent": "UK"
  },
  "source": {
    "ipa": "/sɔːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/source",
    "accent": "UK"
  },
  "vertical": {
    "ipa": "/ˈvɜːtɪkəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/vertical",
    "accent": "UK"
  },
  "moist": {
    "ipa": "/mɔɪst/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/moist",
    "accent": "UK"
  },
  "warm": {
    "ipa": "/wɔːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/warm",
    "accent": "UK"
  },
  "thermal": {
    "ipa": "/ˈθɜːməl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/thermal",
    "accent": "UK"
  },
  "meteorological": {
    "ipa": "/ˌmiːtiərəˈlɒdʒɪkəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/meteorological",
    "accent": "UK"
  },
  "moisture": {
    "ipa": "/ˈmɔɪstʃə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/moisture",
    "accent": "UK"
  },
  "dampness": {
    "ipa": "/ˈdæmpnəs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/dampness",
    "accent": "UK"
  },
  "thaw": {
    "ipa": "/θɔː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/thaw",
    "accent": "UK"
  },
  "rainfall": {
    "ipa": "/ˈreɪnfɔːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/rainfall",
    "accent": "UK"
  },
  "forecast": {
    "ipa": "/ˈfɔːkɑːst/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/forecast",
    "accent": "UK"
  },
  "northeast": {
    "ipa": "/ˌnɔːθˈiːst/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/northeast",
    "accent": "UK"
  },
  "abnormal": {
    "ipa": "/æbˈnɔːməl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/abnormal",
    "accent": "UK"
  },
  "oriental": {
    "ipa": "/ˌɔːriˈentəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/oriental",
    "accent": "UK"
  },
  "irreversible": {
    "ipa": "/ˌɪrɪˈvɜːsəbəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/irreversible",
    "accent": "UK"
  },
  "dirty": {
    "ipa": "/ˈdɜːti/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/dirty",
    "accent": "UK"
  },
  "suburb": {
    "ipa": "/ˈsʌbɜːb/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/suburb",
    "accent": "UK"
  },
  "outskirts": {
    "ipa": "/ˈaʊtskɜːts/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/outskirts",
    "accent": "UK"
  },
  "suburban": {
    "ipa": "/səˈbɜːbən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/suburban",
    "accent": "UK"
  },
  "poisonous": {
    "ipa": "/ˈpɔɪzənəs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/poisonous",
    "accent": "UK"
  },
  "fertile": {
    "ipa": "/ˈfɜːtaɪl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/fertile",
    "accent": "UK"
  },
  "desertification": {
    "ipa": "/dɪˌzɜːtɪfɪˈkeɪʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/desertification",
    "accent": "UK"
  },
  "waterfall": {
    "ipa": "/ˈwɔːtəfɔːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/waterfall",
    "accent": "UK"
  },
  "circulation": {
    "ipa": "/ˌsɜːkjəˈleɪʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/circulation",
    "accent": "UK"
  },
  "emerge": {
    "ipa": "/ɪˈmɜːdʒ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/emerge",
    "accent": "UK"
  },
  "ecology": {
    "ipa": "/iˈkɒlədʒi/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/ecology",
    "accent": "UK"
  },
  "organism": {
    "ipa": "/ˈɔːɡənɪzəm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/organism",
    "accent": "UK"
  },
  "respiratory": {
    "ipa": "/rɪˈspɪrətəri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/respiratory",
    "accent": "UK"
  },
  "herbal": {
    "ipa": "/ˈhɜːbəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/herbal",
    "accent": "UK"
  },
  "herbivore": {
    "ipa": "/ˈhɜːbɪvɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/herbivore",
    "accent": "UK"
  },
  "variation": {
    "ipa": "/ˌveəriˈeɪʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/variation",
    "accent": "UK"
  },
  "diversity": {
    "ipa": "/daɪˈvɜːsəti/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/diversity",
    "accent": "UK"
  },
  "sow": {
    "ipa": "/səʊ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/sow",
    "accent": "UK"
  },
  "diverse": {
    "ipa": "/daɪˈvɜːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/diverse",
    "accent": "UK"
  },
  "germinate": {
    "ipa": "/ˈdʒɜːmɪneɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/germinate",
    "accent": "UK"
  },
  "burgeon": {
    "ipa": "/ˈbɜːdʒən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/burgeon",
    "accent": "UK"
  },
  "germ": {
    "ipa": "/dʒɜːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/germ",
    "accent": "UK"
  },
  "rainforest": {
    "ipa": "/ˈreɪnfɒrɪst/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/rainforest",
    "accent": "UK"
  },
  "lawn": {
    "ipa": "/lɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/lawn",
    "accent": "UK"
  },
  "straw": {
    "ipa": "/strɔː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/straw",
    "accent": "UK"
  },
  "thorn": {
    "ipa": "/θɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/thorn",
    "accent": "UK"
  },
  "absorb": {
    "ipa": "/əbˈzɔːb/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/absorb",
    "accent": "UK"
  },
  "circle": {
    "ipa": "/ˈsɜːkəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/circle",
    "accent": "UK"
  },
  "algal": {
    "ipa": "/ˈælɡəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/algal",
    "accent": "UK"
  },
  "ecologist": {
    "ipa": "/iˈkɒlədʒɪst/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/ecologist",
    "accent": "UK"
  },
  "carnivore": {
    "ipa": "/ˈkɑːnɪvɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/carnivore",
    "accent": "UK"
  },
  "vertebrate": {
    "ipa": "/ˈvɜːtɪbrət/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/vertebrate",
    "accent": "UK"
  },
  "fauna": {
    "ipa": "/ˈfɔːnə/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/fauna",
    "accent": "UK"
  },
  "flora": {
    "ipa": "/ˈflɔːrə/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/flora",
    "accent": "UK"
  },
  "swarm": {
    "ipa": "/swɔːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/swarm",
    "accent": "UK"
  },
  "herdsman": {
    "ipa": "/ˈhɜːdzmən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/herdsman",
    "accent": "UK"
  },
  "offspring": {
    "ipa": "/ˈɒfsprɪŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/offspring",
    "accent": "UK"
  },
  "courtship": {
    "ipa": "/ˈkɔːtʃɪp/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/courtship",
    "accent": "UK"
  },
  "spawn": {
    "ipa": "/spɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/spawn",
    "accent": "UK"
  },
  "curl": {
    "ipa": "/kɜːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/curl",
    "accent": "UK"
  },
  "claw": {
    "ipa": "/klɔː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/claw",
    "accent": "UK"
  },
  "worm": {
    "ipa": "/wɜːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/worm",
    "accent": "UK"
  },
  "tortoise": {
    "ipa": "/ˈtɔːtəs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/tortoise",
    "accent": "UK"
  },
  "turtle": {
    "ipa": "/ˈtɜːtəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/turtle",
    "accent": "UK"
  },
  "parasitic": {
    "ipa": "/ˌpærəˈsɪtɪk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/parasitic",
    "accent": "UK"
  },
  "horn": {
    "ipa": "/hɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/horn",
    "accent": "UK"
  },
  "bear": {
    "ipa": "/beə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/bear",
    "accent": "UK"
  },
  "horse": {
    "ipa": "/hɔːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/horse",
    "accent": "UK"
  },
  "falcon": {
    "ipa": "/ˈfɒlkən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/falcon",
    "accent": "UK"
  },
  "hawk": {
    "ipa": "/hɔːk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/hawk",
    "accent": "UK"
  },
  "squirrel": {
    "ipa": "/ˈskwɪrəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/squirrel",
    "accent": "UK"
  },
  "hare": {
    "ipa": "/heə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/hare",
    "accent": "UK"
  },
  "roar": {
    "ipa": "/rɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/roar",
    "accent": "UK"
  },
  "vitamin": {
    "ipa": "/ˈvɪtəmɪn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/vitamin",
    "accent": "UK"
  },
  "alternate": {
    "ipa": "/ˈɒltəneɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/alternate",
    "accent": "UK"
  },
  "alternative": {
    "ipa": "/ɒlˈtɜːnətɪv/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/alternative",
    "accent": "UK"
  },
  "exterminate": {
    "ipa": "/ɪkˈstɜːmɪneɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/exterminate",
    "accent": "UK"
  },
  "sheepdog": {
    "ipa": "/ˈʃiːpdɒɡ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/sheepdog",
    "accent": "UK"
  },
  "cosmos": {
    "ipa": "/ˈkɒzmɒs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/cosmos",
    "accent": "UK"
  },
  "universe": {
    "ipa": "/ˈjuːnɪvɜːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/universe",
    "accent": "UK"
  },
  "interstellar": {
    "ipa": "/ˌɪntəˈstelə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/interstellar",
    "accent": "UK"
  },
  "universal": {
    "ipa": "/ˌjuːnɪˈvɜːsəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/universal",
    "accent": "UK"
  },
  "extraterrestrial": {
    "ipa": "/ˌekstrətəˈrestriəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/extraterrestrial",
    "accent": "UK"
  },
  "curve": {
    "ipa": "/kɜːv/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/curve",
    "accent": "UK"
  },
  "aircraft": {
    "ipa": "/ˈeəkrɑːft/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/aircraft",
    "accent": "UK"
  },
  "observatory": {
    "ipa": "/əbˈzɜːvətəri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/observatory",
    "accent": "UK"
  },
  "formation": {
    "ipa": "/fɔːˈmeɪʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/formation",
    "accent": "UK"
  },
  "discernible": {
    "ipa": "/dɪˈsɜːnəbəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/discernible",
    "accent": "UK"
  },
  "circuit": {
    "ipa": "/ˈsɜːkɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/circuit",
    "accent": "UK"
  },
  "indiscernible": {
    "ipa": "/ˌɪndɪˈsɜːnəbəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/indiscernible",
    "accent": "UK"
  },
  "cataclysmic": {
    "ipa": "/ˌkætəˈklɪzmɪk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/de/aussprache/englisch/cataclysmic",
    "accent": "UK"
  },
  "despair": {
    "ipa": "/dɪˈspeə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/despair",
    "accent": "UK"
  },
  "learn": {
    "ipa": "/lɜːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/learn",
    "accent": "UK"
  },
  "university": {
    "ipa": "/ˌjuːnɪˈvɜːsəti/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/university",
    "accent": "UK"
  },
  "expertise": {
    "ipa": "/ˌekspɜːˈtiːz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/expertise",
    "accent": "UK"
  },
  "learning": {
    "ipa": "/ˈlɜːnɪŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/learning",
    "accent": "UK"
  },
  "learned": {
    "ipa": "/ˈlɜːnɪd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/learned",
    "accent": "UK"
  },
  "affair": {
    "ipa": "/əˈfeə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/affair",
    "accent": "UK"
  },
  "controversial": {
    "ipa": "/ˌkɒntrəˈvɜːʃəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/controversial",
    "accent": "UK"
  },
  "emphasise": {
    "ipa": "/ˈemfəsaɪz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/emphasize",
    "accent": "UK"
  },
  "spoil": {
    "ipa": "/spɔɪl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/spoil",
    "accent": "UK"
  },
  "notorious": {
    "ipa": "/nəʊˈtɔːriəs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/notorious",
    "accent": "UK"
  },
  "headmaster": {
    "ipa": "/ˌhedˈmɑːstə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/headmaster",
    "accent": "UK"
  },
  "certify": {
    "ipa": "/ˈsɜːtɪfaɪ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/certify",
    "accent": "UK"
  },
  "master": {
    "ipa": "/ˈmɑːstə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/master",
    "accent": "UK"
  },
  "fresher": {
    "ipa": "/ˈfreʃə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/fresher",
    "accent": "UK"
  },
  "sophomore": {
    "ipa": "/ˈsɒfəmɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/sophomore",
    "accent": "UK"
  },
  "platform": {
    "ipa": "/ˈplætfɔːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/platform",
    "accent": "UK"
  },
  "coed": {
    "ipa": "/ˌkəʊˈed/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/co-ed",
    "accent": "UK"
  },
  "orientation": {
    "ipa": "/ˌɔːrienˈteɪʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/orientation",
    "accent": "UK"
  },
  "dorm": {
    "ipa": "/dɔːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/dorm",
    "accent": "UK"
  },
  "hall": {
    "ipa": "/hɔːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/hall",
    "accent": "UK"
  },
  "librarian": {
    "ipa": "/laɪˈbreəriən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/librarian",
    "accent": "UK"
  },
  "author": {
    "ipa": "/ˈɔːθə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/author",
    "accent": "UK"
  },
  "story": {
    "ipa": "/ˈstɔːri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/story",
    "accent": "UK"
  },
  "journal": {
    "ipa": "/ˈdʒɜːnəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/journal",
    "accent": "UK"
  },
  "record": {
    "ipa": "/rɪˈkɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/record",
    "accent": "UK"
  },
  "draft": {
    "ipa": "/drɑːft/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/draft",
    "accent": "UK"
  },
  "recorder": {
    "ipa": "/rɪˈkɔːdə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/recorder",
    "accent": "UK"
  },
  "audit": {
    "ipa": "/ˈɔːdɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/audit",
    "accent": "UK"
  },
  "geographic": {
    "ipa": "/ˌdʒiəˈɡræfɪk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/geographic",
    "accent": "UK"
  },
  "logically": {
    "ipa": "/ˈlɒdʒɪkəli/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/logically",
    "accent": "UK"
  },
  "historian": {
    "ipa": "/hɪˈstɔːriən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/historian",
    "accent": "UK"
  },
  "merger": {
    "ipa": "/ˈmɜːdʒə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/merger",
    "accent": "UK"
  },
  "variable": {
    "ipa": "/ˈveəriəbəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/variable",
    "accent": "UK"
  },
  "circular": {
    "ipa": "/ˈsɜːkjələ(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/circular",
    "accent": "UK"
  },
  "circulate": {
    "ipa": "/ˈsɜːkjəleɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/circulate",
    "accent": "UK"
  },
  "proportion": {
    "ipa": "/prəˈpɔːʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/proportion",
    "accent": "UK"
  },
  "mercury": {
    "ipa": "/ˈmɜːkjəri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/mercury",
    "accent": "UK"
  },
  "dilution": {
    "ipa": "/daɪˈluːʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/dilution",
    "accent": "UK"
  },
  "formula": {
    "ipa": "/ˈfɔːmjələ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/formula",
    "accent": "UK"
  },
  "inert": {
    "ipa": "/ɪˈnɜːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/inert",
    "accent": "UK"
  },
  "term": {
    "ipa": "/tɜːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/term",
    "accent": "UK"
  },
  "course": {
    "ipa": "/kɔːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/course",
    "accent": "UK"
  },
  "terminal": {
    "ipa": "/ˈtɜːmɪnəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/terminal",
    "accent": "UK"
  },
  "forum": {
    "ipa": "/ˈfɔːrəm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/forum",
    "accent": "UK"
  },
  "essay": {
    "ipa": "/ˈeseɪ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/essay",
    "accent": "UK"
  },
  "point": {
    "ipa": "/pɔɪnt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/point",
    "accent": "UK"
  },
  "discern": {
    "ipa": "/dɪˈsɜːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/discern",
    "accent": "UK"
  },
  "recognise": {
    "ipa": "/ˈrekəɡnaɪz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/recognize",
    "accent": "UK"
  },
  "discerning": {
    "ipa": "/dɪˈsɜːnɪŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/discerning",
    "accent": "UK"
  },
  "infer": {
    "ipa": "/ɪnˈfɜː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/infer",
    "accent": "UK"
  },
  "compare": {
    "ipa": "/kəmˈpeə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/compare",
    "accent": "UK"
  },
  "research": {
    "ipa": "/rɪˈsɜːtʃ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/research",
    "accent": "UK"
  },
  "observe": {
    "ipa": "/əbˈzɜːv/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/observe",
    "accent": "UK"
  },
  "determine": {
    "ipa": "/dɪˈtɜːmɪn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/determine",
    "accent": "UK"
  },
  "questionnaire": {
    "ipa": "/ˌkwestʃəˈneə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/questionnaire",
    "accent": "UK"
  },
  "researcher": {
    "ipa": "/rɪˈsɜːtʃə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/researcher",
    "accent": "UK"
  },
  "determinant": {
    "ipa": "/dɪˈtɜːmɪnənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/determinant",
    "accent": "UK"
  },
  "determined": {
    "ipa": "/dɪˈtɜːmɪnd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/determined",
    "accent": "UK"
  },
  "row": {
    "ipa": "/rəʊ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/row",
    "accent": "UK"
  },
  "score": {
    "ipa": "/skɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/score",
    "accent": "UK"
  },
  "reward": {
    "ipa": "/rɪˈwɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/reward",
    "accent": "UK"
  },
  "award": {
    "ipa": "/əˈwɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/award",
    "accent": "UK"
  },
  "patent": {
    "ipa": "/ˈpeɪtənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/patent",
    "accent": "UK"
  },
  "specialise": {
    "ipa": "/ˈspeʃəlaɪz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/specialize",
    "accent": "UK"
  },
  "byproduct": {
    "ipa": "/ˈbaɪˌprɒdʌkt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/by-product",
    "accent": "UK"
  },
  "auxiliary": {
    "ipa": "/ɔːɡˈzɪliəri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/auxiliary",
    "accent": "UK"
  },
  "versatile": {
    "ipa": "/ˈvɜːsətaɪl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/versatile",
    "accent": "UK"
  },
  "network": {
    "ipa": "/ˈnetwɜːk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/network",
    "accent": "UK"
  },
  "laptop": {
    "ipa": "/ˈlæptɒp/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/laptop",
    "accent": "UK"
  },
  "software": {
    "ipa": "/ˈsɒftweə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/software",
    "accent": "UK"
  },
  "keyboard": {
    "ipa": "/ˈkiːbɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/keyboard",
    "accent": "UK"
  },
  "audio": {
    "ipa": "/ˈɔːdiəʊ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/audio",
    "accent": "UK"
  },
  "distil": {
    "ipa": "/dɪˈstɪl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/distil",
    "accent": "UK"
  },
  "framework": {
    "ipa": "/ˈfreɪmwɜːk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/framework",
    "accent": "UK"
  },
  "turn": {
    "ipa": "/tɜːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/turn",
    "accent": "UK"
  },
  "turning": {
    "ipa": "/ˈtɜːnɪŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/turning",
    "accent": "UK"
  },
  "pinpoint": {
    "ipa": "/ˈpɪnpɔɪnt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/pinpoint",
    "accent": "UK"
  },
  "circumstance": {
    "ipa": "/ˈsɜːkəmstɑːns/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/circumstance",
    "accent": "UK"
  },
  "flaw": {
    "ipa": "/flɔː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/flaw",
    "accent": "UK"
  },
  "flawless": {
    "ipa": "/ˈflɔːləs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/flawless",
    "accent": "UK"
  },
  "foreigner": {
    "ipa": "/ˈfɒrənə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/foreigner",
    "accent": "UK"
  },
  "humanitarian": {
    "ipa": "/hjuːˌmænɪˈteəriən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/humanitarian",
    "accent": "UK"
  },
  "church": {
    "ipa": "/tʃɜːtʃ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/church",
    "accent": "UK"
  },
  "royal": {
    "ipa": "/ˈrɔɪəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/royal",
    "accent": "UK"
  },
  "chronology": {
    "ipa": "/krəˈnɒlədʒi/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/chronology",
    "accent": "UK"
  },
  "lord": {
    "ipa": "/lɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/lord",
    "accent": "UK"
  },
  "adversity": {
    "ipa": "/ədˈvɜːsəti/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/adversity",
    "accent": "UK"
  },
  "oral": {
    "ipa": "/ˈɔːrəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/oral",
    "accent": "UK"
  },
  "verbal": {
    "ipa": "/ˈvɜːbəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/verbal",
    "accent": "UK"
  },
  "adverb": {
    "ipa": "/ˈædvɜːb/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/adverb",
    "accent": "UK"
  },
  "interpret": {
    "ipa": "/ɪnˈtɜːprət/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/interpret",
    "accent": "UK"
  },
  "brainstorm": {
    "ipa": "/ˈbreɪnstɔːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/brainstorm",
    "accent": "UK"
  },
  "commentator": {
    "ipa": "/ˈkɒmənteɪtə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/commentator",
    "accent": "UK"
  },
  "foresee": {
    "ipa": "/fəˈsiː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/foresee",
    "accent": "UK"
  },
  "circus": {
    "ipa": "/ˈsɜːkəs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/circus",
    "accent": "UK"
  },
  "rehearsal": {
    "ipa": "/rəˈhɜːsəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/rehearsal",
    "accent": "UK"
  },
  "perform": {
    "ipa": "/pəˈfɔːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/perform",
    "accent": "UK"
  },
  "portrait": {
    "ipa": "/ˈpɔːtrət/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/portrait",
    "accent": "UK"
  },
  "aesthetic": {
    "ipa": "/esˈθetɪk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/aesthetic",
    "accent": "UK"
  },
  "draw": {
    "ipa": "/drɔː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/draw",
    "accent": "UK"
  },
  "drawing": {
    "ipa": "/ˈdrɔːɪŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/drawing",
    "accent": "UK"
  },
  "indoor": {
    "ipa": "/ˌɪnˈdɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/indoor",
    "accent": "UK"
  },
  "outdoor": {
    "ipa": "/ˈaʊtˌdɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/outdoor",
    "accent": "UK"
  },
  "sprawl": {
    "ipa": "/sprɔːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/sprawl",
    "accent": "UK"
  },
  "outdoors": {
    "ipa": "/ˌaʊtˈdɔːz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/outdoors",
    "accent": "UK"
  },
  "volleyball": {
    "ipa": "/ˈvɒlibɔːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/volleyball",
    "accent": "UK"
  },
  "excursion": {
    "ipa": "/ɪkˈskɜːʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/excursion",
    "accent": "UK"
  },
  "jogger": {
    "ipa": "/ˈdʒɒɡə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/jogger",
    "accent": "UK"
  },
  "merchandise": {
    "ipa": "/ˈmɜːtʃəndaɪz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/merchandise",
    "accent": "UK"
  },
  "raw": {
    "ipa": "/rɔː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/raw",
    "accent": "UK"
  },
  "detergent": {
    "ipa": "/dɪˈtɜːdʒənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/detergent",
    "accent": "UK"
  },
  "portfolio": {
    "ipa": "/ˌpɔːtˈfəʊliəʊ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/portfolio",
    "accent": "UK"
  },
  "curtain": {
    "ipa": "/ˈkɜːtən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/curtain",
    "accent": "UK"
  },
  "vacuum": {
    "ipa": "/ˈvækjuːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/vacuum",
    "accent": "UK"
  },
  "portable": {
    "ipa": "/ˈpɔːtəbəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/portable",
    "accent": "UK"
  },
  "hurdle": {
    "ipa": "/ˈhɜːdəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/hurdle",
    "accent": "UK"
  },
  "forge": {
    "ipa": "/fɔːdʒ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/forge",
    "accent": "UK"
  },
  "drawer": {
    "ipa": "/drɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/drawer",
    "accent": "UK"
  },
  "lead": {
    "ipa": "/liːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/lead",
    "accent": "UK"
  },
  "adorn": {
    "ipa": "/əˈdɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/adorn",
    "accent": "UK"
  },
  "embroider": {
    "ipa": "/ɪmˈbrɔɪdə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/embroider",
    "accent": "UK"
  },
  "perfect": {
    "ipa": "/ˈpɜːfekt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/perfect",
    "accent": "UK"
  },
  "cosmetics": {
    "ipa": "/kɒzˈmetɪks/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/dictionary/learner-english/cosmetics",
    "accent": "UK"
  },
  "uniform": {
    "ipa": "/ˈjuːnɪfɔːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/uniform",
    "accent": "UK"
  },
  "laundry": {
    "ipa": "/ˈlɔːndri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/laundry",
    "accent": "UK"
  },
  "wardrobe": {
    "ipa": "/ˈwɔːdrəʊb/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/wardrobe",
    "accent": "UK"
  },
  "skirt": {
    "ipa": "/skɜːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/skirt",
    "accent": "UK"
  },
  "purse": {
    "ipa": "/pɜːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/purse",
    "accent": "UK"
  },
  "purple": {
    "ipa": "/ˈpɜːpəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/purple",
    "accent": "UK"
  },
  "order": {
    "ipa": "/ˈɔːdə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/order",
    "accent": "UK"
  },
  "appetiser": {
    "ipa": "/ˈæpətaɪzə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/appetizer",
    "accent": "UK"
  },
  "fork": {
    "ipa": "/fɔːk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/fork",
    "accent": "UK"
  },
  "porcelain": {
    "ipa": "/ˈpɔːsəlɪn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/porcelain",
    "accent": "UK"
  },
  "saucer": {
    "ipa": "/ˈsɔːsə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/saucer",
    "accent": "UK"
  },
  "furnace": {
    "ipa": "/ˈfɜːnɪs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/furnace",
    "accent": "UK"
  },
  "turnip": {
    "ipa": "/ˈtɜːnɪp/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/turnip",
    "accent": "UK"
  },
  "pear": {
    "ipa": "/peə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/pear",
    "accent": "UK"
  },
  "orange": {
    "ipa": "/ˈɒrɪndʒ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/orange",
    "accent": "UK"
  },
  "watermelon": {
    "ipa": "/ˈwɔːtəˌmelən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/watermelon",
    "accent": "UK"
  },
  "porridge": {
    "ipa": "/ˈpɒrɪdʒ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/porridge",
    "accent": "UK"
  },
  "turkey": {
    "ipa": "/ˈtɜːki/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/turkey",
    "accent": "UK"
  },
  "corm": {
    "ipa": "/kɔːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/corm",
    "accent": "UK"
  },
  "popcorn": {
    "ipa": "/ˈpɒpkɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/popcorn",
    "accent": "UK"
  },
  "dairy": {
    "ipa": "/ˈdeəri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/dairy",
    "accent": "UK"
  },
  "pork": {
    "ipa": "/pɔːk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/pork",
    "accent": "UK"
  },
  "yogurt": {
    "ipa": "/ˈjɒɡət/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/yogurt",
    "accent": "UK"
  },
  "salt": {
    "ipa": "/sɒlt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/salt",
    "accent": "UK"
  },
  "salty": {
    "ipa": "/ˈsɒlti/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/salty",
    "accent": "UK"
  },
  "sauce": {
    "ipa": "/sɔːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/sauce",
    "accent": "UK"
  },
  "perfume": {
    "ipa": "/ˈpɜːfjuːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/perfume",
    "accent": "UK"
  },
  "thirsty": {
    "ipa": "/ˈθɜːsti/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/thirsty",
    "accent": "UK"
  },
  "stir": {
    "ipa": "/stɜː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/stir",
    "accent": "UK"
  },
  "concretely": {
    "ipa": "/kɒŋˈkriːtli/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/concretely",
    "accent": "UK"
  },
  "porch": {
    "ipa": "/pɔːtʃ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/porch",
    "accent": "UK"
  },
  "corridor": {
    "ipa": "/ˈkɒrɪdɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/corridor",
    "accent": "UK"
  },
  "stair": {
    "ipa": "/steə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/stair",
    "accent": "UK"
  },
  "nursery": {
    "ipa": "/ˈnɜːsəri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/nursery",
    "accent": "UK"
  },
  "staircase": {
    "ipa": "/ˈsteəkeɪs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/staircase",
    "accent": "UK"
  },
  "eaves": {
    "ipa": "/iːvz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/dictionary/learner-english/eaves",
    "accent": "UK"
  },
  "vault": {
    "ipa": "/vɒlt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/vault",
    "accent": "UK"
  },
  "reserve": {
    "ipa": "/rɪˈzɜːv/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/reserve",
    "accent": "UK"
  },
  "washbowl": {
    "ipa": "/ˈwɒʃbəʊl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/fr/prononciation/anglais/washbowl",
    "accent": "UK"
  },
  "store": {
    "ipa": "/stɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/store",
    "accent": "UK"
  },
  "urban": {
    "ipa": "/ˈɜːbən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/urban",
    "accent": "UK"
  },
  "void": {
    "ipa": "/vɔɪd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/void",
    "accent": "UK"
  },
  "airtight": {
    "ipa": "/ˈeətaɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/airtight",
    "accent": "UK"
  },
  "brickwork": {
    "ipa": "/ˈbrɪkwɜːk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/zht/%E7%99%BC%E9%9F%B3/%E8%8B%B1%E8%AA%9E/brickwork",
    "accent": "UK"
  },
  "castle": {
    "ipa": "/ˈkɑːsəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/castle",
    "accent": "UK"
  },
  "saw": {
    "ipa": "/sɔː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/saw",
    "accent": "UK"
  },
  "install": {
    "ipa": "/ɪnˈstɔːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/install",
    "accent": "UK"
  },
  "external": {
    "ipa": "/ɪkˈstɜːnəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/external",
    "accent": "UK"
  },
  "internal": {
    "ipa": "/ɪnˈtɜːnəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/internal",
    "accent": "UK"
  },
  "voyage": {
    "ipa": "/ˈvɔɪɪdʒ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/voyage",
    "accent": "UK"
  },
  "port": {
    "ipa": "/pɔːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/port",
    "accent": "UK"
  },
  "haunt": {
    "ipa": "/hɔːnt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/haunt",
    "accent": "UK"
  },
  "airline": {
    "ipa": "/ˈeəlaɪn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/airline",
    "accent": "UK"
  },
  "airplane": {
    "ipa": "/ˈeəpleɪn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/airplane",
    "accent": "UK"
  },
  "fare": {
    "ipa": "/feə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/fare",
    "accent": "UK"
  },
  "automobile": {
    "ipa": "/ˈɔːtəməbiːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/automobile",
    "accent": "UK"
  },
  "garage": {
    "ipa": "/ˈɡærɑːʒ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/garage",
    "accent": "UK"
  },
  "emergency": {
    "ipa": "/ɪˈmɜːdʒənsi/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/emergency",
    "accent": "UK"
  },
  "turbine": {
    "ipa": "/ˈtɜːbaɪn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/turbine",
    "accent": "UK"
  },
  "stern": {
    "ipa": "/stɜːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/stern",
    "accent": "UK"
  },
  "burden": {
    "ipa": "/ˈbɜːdən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/burden",
    "accent": "UK"
  },
  "transfer": {
    "ipa": "/trænsˈfɜː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/transfer",
    "accent": "UK"
  },
  "authority": {
    "ipa": "/ɔːˈθɒrəti/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/authority",
    "accent": "UK"
  },
  "conservative": {
    "ipa": "/kənˈsɜːvətɪv/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/conservative",
    "accent": "UK"
  },
  "mayor": {
    "ipa": "/meə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/mayor",
    "accent": "UK"
  },
  "service": {
    "ipa": "/ˈsɜːvɪs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/service",
    "accent": "UK"
  },
  "importance": {
    "ipa": "/ɪmˈpɔːtəns/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/importance",
    "accent": "UK"
  },
  "organisation": {
    "ipa": "/ˌɔːɡənaɪˈzeɪʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/organization",
    "accent": "UK"
  },
  "worldwide": {
    "ipa": "/ˌwɜːldˈwaɪd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/worldwide",
    "accent": "UK"
  },
  "consortium": {
    "ipa": "/kənˈsɔːtiəm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/consortium",
    "accent": "UK"
  },
  "foreign": {
    "ipa": "/ˈfɒrən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/foreign",
    "accent": "UK"
  },
  "abroad": {
    "ipa": "/əˈbrɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/abroad",
    "accent": "UK"
  },
  "prefer": {
    "ipa": "/prɪˈfɜː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/prefer",
    "accent": "UK"
  },
  "checklist": {
    "ipa": "/ˈtʃeklɪst/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/checklist",
    "accent": "UK"
  },
  "welfare": {
    "ipa": "/ˈwelfeə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/welfare",
    "accent": "UK"
  },
  "viewpoint": {
    "ipa": "/ˈvjuːpɔɪnt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/viewpoint",
    "accent": "UK"
  },
  "standpoint": {
    "ipa": "/ˈstændpɔɪnt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/standpoint",
    "accent": "UK"
  },
  "declare": {
    "ipa": "/dɪˈkleə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/declare",
    "accent": "UK"
  },
  "affirm": {
    "ipa": "/əˈfɜːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/affirm",
    "accent": "UK"
  },
  "affirmative": {
    "ipa": "/əˈfɜːmətɪv/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/affirmative",
    "accent": "UK"
  },
  "portuguese": {
    "ipa": "/ˌpɔːtʃəˈɡiːz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/portuguese",
    "accent": "UK"
  },
  "german": {
    "ipa": "/ˈdʒɜːmən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/german",
    "accent": "UK"
  },
  "merchant": {
    "ipa": "/ˈmɜːtʃənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/merchant",
    "accent": "UK"
  },
  "purchase": {
    "ipa": "/ˈpɜːtʃəs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/purchase",
    "accent": "UK"
  },
  "afford": {
    "ipa": "/əˈfɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/afford",
    "accent": "UK"
  },
  "discounter": {
    "ipa": "/dɪsˈkaʊntə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/discounter",
    "accent": "UK"
  },
  "invoice": {
    "ipa": "/ˈɪnvɔɪs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/invoice",
    "accent": "UK"
  },
  "spare": {
    "ipa": "/speə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/spare",
    "accent": "UK"
  },
  "firm": {
    "ipa": "/fɜːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/firm",
    "accent": "UK"
  },
  "share": {
    "ipa": "/ʃeə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/share",
    "accent": "UK"
  },
  "turnover": {
    "ipa": "/ˈtɜːnˌəʊvə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/turnover",
    "accent": "UK"
  },
  "worthy": {
    "ipa": "/ˈwɜːði/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/worthy",
    "accent": "UK"
  },
  "worthless": {
    "ipa": "/ˈwɜːθləs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/worthless",
    "accent": "UK"
  },
  "earn": {
    "ipa": "/ɜːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/earn",
    "accent": "UK"
  },
  "reimburse": {
    "ipa": "/ˌriːɪmˈbɜːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/reimburse",
    "accent": "UK"
  },
  "personnel": {
    "ipa": "/ˌpɜːsənˈel/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/personnel",
    "accent": "UK"
  },
  "clerk": {
    "ipa": "/klɑːk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/clerk",
    "accent": "UK"
  },
  "workforce": {
    "ipa": "/ˈwɜːkfɔːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/workforce",
    "accent": "UK"
  },
  "workaholic": {
    "ipa": "/ˌwɜːkəˈhɒlɪk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/workaholic",
    "accent": "UK"
  },
  "employ": {
    "ipa": "/ɪmˈplɔɪ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/employ",
    "accent": "UK"
  },
  "personal": {
    "ipa": "/ˈpɜːsənəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/personal",
    "accent": "UK"
  },
  "employer": {
    "ipa": "/ɪmˈplɔɪə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/employer",
    "accent": "UK"
  },
  "employee": {
    "ipa": "/ɪmˈplɔɪiː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/employee",
    "accent": "UK"
  },
  "abortion": {
    "ipa": "/əˈbɔːʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/abortion",
    "accent": "UK"
  },
  "chance": {
    "ipa": "/tʃɑːns/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/chance",
    "accent": "UK"
  },
  "choice": {
    "ipa": "/tʃɔɪs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/choice",
    "accent": "UK"
  },
  "law": {
    "ipa": "/lɔː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/law",
    "accent": "UK"
  },
  "norm": {
    "ipa": "/nɔːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/norm",
    "accent": "UK"
  },
  "benchmark": {
    "ipa": "/ˈbentʃmɑːk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/benchmark",
    "accent": "UK"
  },
  "lawyer": {
    "ipa": "/ˈlɔɪə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/lawyer",
    "accent": "UK"
  },
  "enforce": {
    "ipa": "/ɪnˈfɔːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/enforce",
    "accent": "UK"
  },
  "court": {
    "ipa": "/kɔːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/court",
    "accent": "UK"
  },
  "default": {
    "ipa": "/dɪˈfɒlt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/default",
    "accent": "UK"
  },
  "performance": {
    "ipa": "/pəˈfɔːməns/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/performance",
    "accent": "UK"
  },
  "enforcement": {
    "ipa": "/ɪnˈfɔːsmənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/enforcement",
    "accent": "UK"
  },
  "fair": {
    "ipa": "/feə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/fair",
    "accent": "UK"
  },
  "boycott": {
    "ipa": "/ˈbɔɪkɒt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/boycott",
    "accent": "UK"
  },
  "persecute": {
    "ipa": "/ˈpɜːsɪkjuːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/persecute",
    "accent": "UK"
  },
  "persecution": {
    "ipa": "/ˌpɜːsɪˈkjuːʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/persecution",
    "accent": "UK"
  },
  "unfair": {
    "ipa": "/ʌnˈfeə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/unfair",
    "accent": "UK"
  },
  "murmur": {
    "ipa": "/ˈmɜːmə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/murmur",
    "accent": "UK"
  },
  "controversy": {
    "ipa": "/ˈkɒntrəvɜːsi/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/dictionary/english/controversy?topic=arguments-and-disagreements",
    "accent": "UK"
  },
  "murder": {
    "ipa": "/ˈmɜːdə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/murder",
    "accent": "UK"
  },
  "fraud": {
    "ipa": "/frɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/fraud",
    "accent": "UK"
  },
  "murderer": {
    "ipa": "/ˈmɜːdərə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/murderer",
    "accent": "UK"
  },
  "mortgage": {
    "ipa": "/ˈmɔːɡɪdʒ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/mortgage",
    "accent": "UK"
  },
  "false": {
    "ipa": "/fɒls/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/false",
    "accent": "UK"
  },
  "falsehood": {
    "ipa": "/ˈfɒlshʊd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/falsehood",
    "accent": "UK"
  },
  "enormity": {
    "ipa": "/ɪˈnɔːməti/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/uk/pronunciation/english/enormity",
    "accent": "UK"
  },
  "burst": {
    "ipa": "/bɜːst/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/burst",
    "accent": "UK"
  },
  "flare": {
    "ipa": "/fleə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/flare",
    "accent": "UK"
  },
  "sword": {
    "ipa": "/sɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/sword",
    "accent": "UK"
  },
  "prepare": {
    "ipa": "/prɪˈpeə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/prepare",
    "accent": "UK"
  },
  "deployment": {
    "ipa": "/dɪˈplɔɪmənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/deployment",
    "accent": "UK"
  },
  "aggressiveness": {
    "ipa": "/əˈɡresɪvnəs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/aggressiveness",
    "accent": "UK"
  },
  "assault": {
    "ipa": "/əˈsɒlt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/assault",
    "accent": "UK"
  },
  "deter": {
    "ipa": "/dɪˈtɜː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/deter",
    "accent": "UK"
  },
  "halter": {
    "ipa": "/ˈhɒltə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/halter",
    "accent": "UK"
  },
  "turbulent": {
    "ipa": "/ˈtɜːbjələnt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/turbulent",
    "accent": "UK"
  },
  "turmoil": {
    "ipa": "/ˈtɜːmɔɪl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/turmoil",
    "accent": "UK"
  },
  "turbulence": {
    "ipa": "/ˈtɜːbjələns/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/turbulence",
    "accent": "UK"
  },
  "blueprint": {
    "ipa": "/ˈbluːprɪnt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/blueprint",
    "accent": "UK"
  },
  "warn": {
    "ipa": "/wɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/warn",
    "accent": "UK"
  },
  "force": {
    "ipa": "/fɔːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/force",
    "accent": "UK"
  },
  "refute": {
    "ipa": "/rɪˈfjuːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/refute",
    "accent": "UK"
  },
  "warning": {
    "ipa": "/ˈwɔːnɪŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/warning",
    "accent": "UK"
  },
  "occur": {
    "ipa": "/əˈkɜː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/occur?a=british",
    "accent": "UK"
  },
  "withdraw": {
    "ipa": "/wɪðˈdrɔː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/withdraw",
    "accent": "UK"
  },
  "disturbance": {
    "ipa": "/dɪˈstɜːbəns/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/disturbance",
    "accent": "UK"
  },
  "forgo": {
    "ipa": "/fɔːˈɡəʊ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/forgo",
    "accent": "UK"
  },
  "glory": {
    "ipa": "/ˈɡlɔːri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/glory",
    "accent": "UK"
  },
  "surname": {
    "ipa": "/ˈsɜːneɪm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/surname",
    "accent": "UK"
  },
  "heir": {
    "ipa": "/eə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/heir",
    "accent": "UK"
  },
  "spouse": {
    "ipa": "/spaʊs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/spouse",
    "accent": "UK"
  },
  "orphan": {
    "ipa": "/ˈɔːfən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/orphan",
    "accent": "UK"
  },
  "landlord": {
    "ipa": "/ˈlændlɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/landlord",
    "accent": "UK"
  },
  "appoint": {
    "ipa": "/əˈpɔɪnt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/appoint",
    "accent": "UK"
  },
  "divorce": {
    "ipa": "/dɪˈvɔːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/divorce",
    "accent": "UK"
  },
  "nurse": {
    "ipa": "/nɜːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/nurse",
    "accent": "UK"
  },
  "attorney": {
    "ipa": "/əˈtɜːni/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/attorney",
    "accent": "UK"
  },
  "haircut": {
    "ipa": "/ˈheəkʌt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/haircut",
    "accent": "UK"
  },
  "nursing": {
    "ipa": "/ˈnɜːsɪŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/nursing",
    "accent": "UK"
  },
  "toil": {
    "ipa": "/tɔɪl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/toil",
    "accent": "UK"
  },
  "nourish": {
    "ipa": "/ˈnʌrɪʃ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/nourish",
    "accent": "UK"
  },
  "mow": {
    "ipa": "/məʊ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/mow",
    "accent": "UK"
  },
  "support": {
    "ipa": "/səˈpɔːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/support",
    "accent": "UK"
  },
  "nourishment": {
    "ipa": "/ˈnʌrɪʃmənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/nourishment",
    "accent": "UK"
  },
  "nourishing": {
    "ipa": "/ˈnʌrɪʃɪŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/nourishing",
    "accent": "UK"
  },
  "assert": {
    "ipa": "/əˈsɜːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/assert",
    "accent": "UK"
  },
  "urge": {
    "ipa": "/ɜːdʒ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/urge",
    "accent": "UK"
  },
  "swear": {
    "ipa": "/sweə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/swear",
    "accent": "UK"
  },
  "applaud": {
    "ipa": "/əˈplɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/applaud",
    "accent": "UK"
  },
  "urgent": {
    "ipa": "/ˈɜːdʒənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/urgent",
    "accent": "UK"
  },
  "steerable": {
    "ipa": "/ˈstɪərəbəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/steerable",
    "accent": "UK"
  },
  "nightmare": {
    "ipa": "/ˈnaɪtmeə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/nightmare",
    "accent": "UK"
  },
  "ironic": {
    "ipa": "/aɪˈrɒnɪk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/ironic",
    "accent": "UK"
  },
  "impair": {
    "ipa": "/ɪmˈpeə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/impair",
    "accent": "UK"
  },
  "reverse": {
    "ipa": "/rɪˈvɜːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/reverse",
    "accent": "UK"
  },
  "yearn": {
    "ipa": "/jɜːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/yearn",
    "accent": "UK"
  },
  "sort": {
    "ipa": "/sɔːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/sort",
    "accent": "UK"
  },
  "launch": {
    "ipa": "/lɔːntʃ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/launch",
    "accent": "UK"
  },
  "exploit": {
    "ipa": "/ɪkˈsplɔɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/exploit",
    "accent": "UK"
  },
  "explore": {
    "ipa": "/ɪkˈsplɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/explore",
    "accent": "UK"
  },
  "exert": {
    "ipa": "/ɪɡˈzɜːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/exert",
    "accent": "UK"
  },
  "exploitation": {
    "ipa": "/ˌeksplɔɪˈteɪʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/exploitation",
    "accent": "UK"
  },
  "resort": {
    "ipa": "/rɪˈzɔːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/resort",
    "accent": "UK"
  },
  "offset": {
    "ipa": "/ˌɒfˈset/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/offset",
    "accent": "UK"
  },
  "augment": {
    "ipa": "/ɔːɡˈment/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/augment",
    "accent": "UK"
  },
  "augmentation": {
    "ipa": "/ˌɔːɡmenˈteɪʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/augmentation",
    "accent": "UK"
  },
  "cause": {
    "ipa": "/kɔːz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/cause",
    "accent": "UK"
  },
  "deserve": {
    "ipa": "/dɪˈzɜːv/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/deserve",
    "accent": "UK"
  },
  "farewell": {
    "ipa": "/ˌfeəˈwel/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/farewell",
    "accent": "UK"
  },
  "assort": {
    "ipa": "/əˈsɔːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/assort",
    "accent": "UK"
  },
  "accord": {
    "ipa": "/əˈkɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/accord",
    "accent": "UK"
  },
  "recall": {
    "ipa": "/rɪˈkɔːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/recall",
    "accent": "UK"
  },
  "surmount": {
    "ipa": "/səˈmaʊnt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/surmount",
    "accent": "UK"
  },
  "mortify": {
    "ipa": "/ˈmɔːtɪfaɪ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/mortify",
    "accent": "UK"
  },
  "personality": {
    "ipa": "/ˌpɜːsənˈæləti/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/personality",
    "accent": "UK"
  },
  "forehead": {
    "ipa": "/ˈfɒrɪd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/forehead",
    "accent": "UK"
  },
  "gorge": {
    "ipa": "/ɡɔːdʒ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/gorge",
    "accent": "UK"
  },
  "jaw": {
    "ipa": "/dʒɔː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/jaw",
    "accent": "UK"
  },
  "organ": {
    "ipa": "/ˈɔːɡən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/organ",
    "accent": "UK"
  },
  "organic": {
    "ipa": "/ɔːˈɡænɪk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/organic",
    "accent": "UK"
  },
  "joint": {
    "ipa": "/dʒɔɪnt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/joint",
    "accent": "UK"
  },
  "biorhythm": {
    "ipa": "/ˈbaɪəʊrɪðəm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/biorhythm",
    "accent": "UK"
  },
  "aural": {
    "ipa": "/ˈɔːrəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/aural",
    "accent": "UK"
  },
  "yawn": {
    "ipa": "/jɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/yawn",
    "accent": "UK"
  },
  "dwarf": {
    "ipa": "/dwɔːf/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/dwarf",
    "accent": "UK"
  },
  "snore": {
    "ipa": "/snɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/snore",
    "accent": "UK"
  },
  "overweight": {
    "ipa": "/ˌəʊvəˈweɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/overweight",
    "accent": "UK"
  },
  "hurt": {
    "ipa": "/hɜːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/hurt",
    "accent": "UK"
  },
  "trauma": {
    "ipa": "/ˈtrɔːmə/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/trauma",
    "accent": "UK"
  },
  "corpus": {
    "ipa": "/ˈkɔːpəs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/corpus",
    "accent": "UK"
  },
  "overwork": {
    "ipa": "/ˌəʊvəˈwɜːk/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/overwork",
    "accent": "UK"
  },
  "mortal": {
    "ipa": "/ˈmɔːtəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/mortal",
    "accent": "UK"
  },
  "exhaust": {
    "ipa": "/ɪɡˈzɔːst/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/exhaust",
    "accent": "UK"
  },
  "sore": {
    "ipa": "/sɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/sore",
    "accent": "UK"
  },
  "care": {
    "ipa": "/keə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/care",
    "accent": "UK"
  },
  "surgeon": {
    "ipa": "/ˈsɜːdʒən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/surgeon",
    "accent": "UK"
  },
  "surgery": {
    "ipa": "/ˈsɜːdʒəri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/surgery",
    "accent": "UK"
  },
  "precaution": {
    "ipa": "/prɪˈkɔːʃən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/precaution",
    "accent": "UK"
  },
  "normally": {
    "ipa": "/ˈnɔːməli/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/normally",
    "accent": "UK"
  },
  "joy": {
    "ipa": "/dʒɔɪ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/joy",
    "accent": "UK"
  },
  "joyful": {
    "ipa": "/ˈdʒɔɪfəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/joyful",
    "accent": "UK"
  },
  "earnest": {
    "ipa": "/ˈɜːnɪst/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/earnest",
    "accent": "UK"
  },
  "directly": {
    "ipa": "/daɪˈrektli/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/directly",
    "accent": "UK"
  },
  "earnestly": {
    "ipa": "/ˈɜːnɪstli/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/earnestly",
    "accent": "UK"
  },
  "careful": {
    "ipa": "/ˈkeəfəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/careful",
    "accent": "UK"
  },
  "sternly": {
    "ipa": "/ˈstɜːnli/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/sternly",
    "accent": "UK"
  },
  "sternness": {
    "ipa": "/ˈstɜːnnəs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pl/pronunciation/english/sternness",
    "accent": "UK"
  },
  "carefully": {
    "ipa": "/ˈkeəfəli/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/carefully",
    "accent": "UK"
  },
  "thoughtful": {
    "ipa": "/ˈθɔːtfəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/thoughtful",
    "accent": "UK"
  },
  "apologise": {
    "ipa": "/əˈpɒlədʒaɪz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/apologize",
    "accent": "UK"
  },
  "mercy": {
    "ipa": "/ˈmɜːsi/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/mercy",
    "accent": "UK"
  },
  "awesome": {
    "ipa": "/ˈɔːsəm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/awesome",
    "accent": "UK"
  },
  "sturdy": {
    "ipa": "/ˈstɜːdi/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/sturdy",
    "accent": "UK"
  },
  "trustworthy": {
    "ipa": "/ˈtrʌstˌwɜːði/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/trustworthy",
    "accent": "UK"
  },
  "fortune": {
    "ipa": "/ˈfɔːtʃuːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/fortune",
    "accent": "UK"
  },
  "fortunate": {
    "ipa": "/ˈfɔːtʃənət/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/fortunate",
    "accent": "UK"
  },
  "unfortunate": {
    "ipa": "/ʌnˈfɔːtʃənət/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/unfortunate",
    "accent": "UK"
  },
  "mournful": {
    "ipa": "/ˈmɔːnfəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/mournful",
    "accent": "UK"
  },
  "awful": {
    "ipa": "/ˈɔːfəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/awful",
    "accent": "UK"
  },
  "adverse": {
    "ipa": "/ˈædvɜːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/adverse",
    "accent": "UK"
  },
  "unsatisfactory": {
    "ipa": "/ʌnˌsætɪsˈfæktəri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/unsatisfactory",
    "accent": "UK"
  },
  "ignore": {
    "ipa": "/ɪɡˈnɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/ignore",
    "accent": "UK"
  },
  "naughty": {
    "ipa": "/ˈnɔːti/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/naughty",
    "accent": "UK"
  },
  "awkward": {
    "ipa": "/ˈɔːkwəd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/awkward",
    "accent": "UK"
  },
  "careless": {
    "ipa": "/ˈkeələs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/careless",
    "accent": "UK"
  },
  "anniversary": {
    "ipa": "/ˌænɪˈvɜːsəri/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/anniversary",
    "accent": "UK"
  },
  "dawn": {
    "ipa": "/dɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/dawn",
    "accent": "UK"
  },
  "first": {
    "ipa": "/ˈfɜːst/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/first",
    "accent": "UK"
  },
  "permanent": {
    "ipa": "/ˈpɜːmənənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/permanent",
    "accent": "UK"
  },
  "periodically": {
    "ipa": "/ˌpɪəriˈɒdɪkəli/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/periodically",
    "accent": "UK"
  },
  "chore": {
    "ipa": "/tʃɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/chore",
    "accent": "UK"
  },
  "clause": {
    "ipa": "/klɔːz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/clause",
    "accent": "UK"
  },
  "boil": {
    "ipa": "/bɔɪl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/boil",
    "accent": "UK"
  },
  "border": {
    "ipa": "/ˈbɔːdə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/border",
    "accent": "UK"
  },
  "bore": {
    "ipa": "/bɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/bore",
    "accent": "UK"
  },
  "coin": {
    "ipa": "/kɔɪn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/coin",
    "accent": "UK"
  },
  "born": {
    "ipa": "/bɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/born",
    "accent": "UK"
  },
  "defer": {
    "ipa": "/dɪˈfɜː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/defer",
    "accent": "UK"
  },
  "commercial": {
    "ipa": "/kəˈmɜːʃəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/commercial",
    "accent": "UK"
  },
  "convert": {
    "ipa": "/kənˈvɜːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/convert",
    "accent": "UK"
  },
  "curb": {
    "ipa": "/kɜːb/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/curb",
    "accent": "UK"
  },
  "coordinate": {
    "ipa": "/kəʊˈɔːdɪneɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/coordinate",
    "accent": "UK"
  },
  "cord": {
    "ipa": "/kɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/cord",
    "accent": "UK"
  },
  "curse": {
    "ipa": "/kɜːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/curse",
    "accent": "UK"
  },
  "corn": {
    "ipa": "/kɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/corn",
    "accent": "UK"
  },
  "deploy": {
    "ipa": "/dɪˈplɔɪ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/deploy",
    "accent": "UK"
  },
  "concern": {
    "ipa": "/kənˈsɜːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/concern",
    "accent": "UK"
  },
  "desert": {
    "ipa": "/ˈdezət/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/desert",
    "accent": "UK"
  },
  "conduct": {
    "ipa": "/kənˈdʌkt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/conduct",
    "accent": "UK"
  },
  "daring": {
    "ipa": "/ˈdeərɪŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/daring",
    "accent": "UK"
  },
  "confirm": {
    "ipa": "/kənˈfɜːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/confirm",
    "accent": "UK"
  },
  "crawl": {
    "ipa": "/krɔːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/crawl",
    "accent": "UK"
  },
  "dormant": {
    "ipa": "/ˈdɔːmənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/dormant",
    "accent": "UK"
  },
  "egalitarian": {
    "ipa": "/ɪˌɡælɪˈteəriən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/egalitarian",
    "accent": "UK"
  },
  "ego": {
    "ipa": "/ˈiːɡəʊ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/ego",
    "accent": "UK"
  },
  "downtown": {
    "ipa": "/ˌdaʊnˈtaʊn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/downtown",
    "accent": "UK"
  },
  "dirt": {
    "ipa": "/dɜːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/dirt",
    "accent": "UK"
  },
  "each": {
    "ipa": "/iːtʃ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/zhs/%E5%8F%91%E9%9F%B3/%E8%8B%B1%E8%AF%AD/each",
    "accent": "UK"
  },
  "disturb": {
    "ipa": "/dɪˈstɜːb/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/disturb",
    "accent": "UK"
  },
  "ease": {
    "ipa": "/iːz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/ease",
    "accent": "UK"
  },
  "export": {
    "ipa": "/ɪkˈspɔːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/export",
    "accent": "UK"
  },
  "germany": {
    "ipa": "/ˈdʒɜːməni/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/germany",
    "accent": "UK"
  },
  "glare": {
    "ipa": "/ɡleə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/glare",
    "accent": "UK"
  },
  "glorious": {
    "ipa": "/ˈɡlɔːriəs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/glorious",
    "accent": "UK"
  },
  "fur": {
    "ipa": "/fɜː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/fur",
    "accent": "UK"
  },
  "furnish": {
    "ipa": "/ˈfɜːnɪʃ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/furnish",
    "accent": "UK"
  },
  "fault": {
    "ipa": "/fɒlt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/fault",
    "accent": "UK"
  },
  "ferment": {
    "ipa": "/fəˈment/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/ferment",
    "accent": "UK"
  },
  "hairdressing": {
    "ipa": "/ˈheəˌdresɪŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/hairdressing",
    "accent": "UK"
  },
  "halt": {
    "ipa": "/hɒlt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/halt",
    "accent": "UK"
  },
  "hamburger": {
    "ipa": "/ˈhæmˌbɜːɡə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/hamburger",
    "accent": "UK"
  },
  "import": {
    "ipa": "/ɪmˈpɔːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/import",
    "accent": "UK"
  },
  "hormone": {
    "ipa": "/ˈhɔːməʊn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/hormone",
    "accent": "UK"
  },
  "horsepower": {
    "ipa": "/ˈhɔːspaʊə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/horsepower",
    "accent": "UK"
  },
  "horticulture": {
    "ipa": "/ˈhɔːtɪkʌltʃə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/horticulture",
    "accent": "UK"
  },
  "headquarters": {
    "ipa": "/ˌhedˈkwɔːtəz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/headquarters",
    "accent": "UK"
  },
  "irregularly": {
    "ipa": "/ɪˈreɡjələli/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/irregularly",
    "accent": "UK"
  },
  "herb": {
    "ipa": "/hɜːb/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/herb",
    "accent": "UK"
  },
  "herd": {
    "ipa": "/hɜːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/herd",
    "accent": "UK"
  },
  "insert": {
    "ipa": "/ɪnˈsɜːt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/insert",
    "accent": "UK"
  },
  "hip-hop": {
    "ipa": "/ˈhɪphɒp/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/hip-hop",
    "accent": "UK"
  },
  "journalist": {
    "ipa": "/ˈdʒɜːnəlɪst/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/journalist",
    "accent": "UK"
  },
  "journey": {
    "ipa": "/ˈdʒɜːni/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/journey",
    "accent": "UK"
  },
  "memorial": {
    "ipa": "/məˈmɔːriəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/memorial",
    "accent": "UK"
  },
  "minute": {
    "ipa": "/ˈmɪnɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/minute",
    "accent": "UK"
  },
  "ford": {
    "ipa": "/fɔːd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/ford",
    "accent": "UK"
  },
  "loudspeaker": {
    "ipa": "/ˌlaʊdˈspiːkə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/loudspeaker",
    "accent": "UK"
  },
  "nerve": {
    "ipa": "/nɜːv/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/nerve",
    "accent": "UK"
  },
  "morphine": {
    "ipa": "/ˈmɔːfiːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/morphine",
    "accent": "UK"
  },
  "nocturnal": {
    "ipa": "/nɒkˈtɜːnəl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/nocturnal",
    "accent": "UK"
  },
  "orchestra": {
    "ipa": "/ˈɔːkɪstrə/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/orchestra",
    "accent": "UK"
  },
  "northwest": {
    "ipa": "/ˌnɔːθˈwest/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/northwest",
    "accent": "UK"
  },
  "ore": {
    "ipa": "/ɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/ore",
    "accent": "UK"
  },
  "mourn": {
    "ipa": "/mɔːn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/mourn",
    "accent": "UK"
  },
  "ornament": {
    "ipa": "/ˈɔːnəmənt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/ornament",
    "accent": "UK"
  },
  "outside": {
    "ipa": "/ˌaʊtˈsaɪd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/outside",
    "accent": "UK"
  },
  "pause": {
    "ipa": "/pɔːz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/pause",
    "accent": "UK"
  },
  "paw": {
    "ipa": "/pɔː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/paw",
    "accent": "UK"
  },
  "overall": {
    "ipa": "/ˌəʊvəˈrɔːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/overall",
    "accent": "UK"
  },
  "oar": {
    "ipa": "/ɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/oar",
    "accent": "UK"
  },
  "overseas": {
    "ipa": "/ˌəʊvəˈsiːz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/overseas",
    "accent": "UK"
  },
  "purpose": {
    "ipa": "/ˈpɜːpəs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/purpose",
    "accent": "UK"
  },
  "poison": {
    "ipa": "/ˈpɔɪzən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/poison",
    "accent": "UK"
  },
  "quartz": {
    "ipa": "/ˈkwɔːts/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/quartz",
    "accent": "UK"
  },
  "pore": {
    "ipa": "/pɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/pore",
    "accent": "UK"
  },
  "pour": {
    "ipa": "/pɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/pour",
    "accent": "UK"
  },
  "pitfall": {
    "ipa": "/ˈpɪtfɔːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/pitfall",
    "accent": "UK"
  },
  "preserve": {
    "ipa": "/prɪˈzɜːv/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/preserve",
    "accent": "UK"
  },
  "scrutinise": {
    "ipa": "/ˈskruːtɪnaɪz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/te/pronunciation/english/scrutinize",
    "accent": "UK"
  },
  "restore": {
    "ipa": "/rɪˈstɔː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/restore",
    "accent": "UK"
  },
  "reform": {
    "ipa": "/rɪˈfɔːm/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/reform",
    "accent": "UK"
  },
  "reinforce": {
    "ipa": "/ˌriːɪnˈfɔːs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/reinforce",
    "accent": "UK"
  },
  "surface": {
    "ipa": "/ˈsɜːfɪs/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/surface",
    "accent": "UK"
  },
  "spur": {
    "ipa": "/spɜː(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/spur",
    "accent": "UK"
  },
  "subordinate": {
    "ipa": "/səˈbɔːdɪnət/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/subordinate",
    "accent": "UK"
  },
  "stare": {
    "ipa": "/steə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/stare",
    "accent": "UK"
  },
  "takeaway": {
    "ipa": "/ˈteɪkəweɪ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/takeaway",
    "accent": "UK"
  },
  "toilet": {
    "ipa": "/ˈtɔɪlət/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/toilet",
    "accent": "UK"
  },
  "vegetarian": {
    "ipa": "/ˌvedʒɪˈteəriən/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/vegetarian",
    "accent": "UK"
  },
  "torture": {
    "ipa": "/ˈtɔːtʃə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/torture",
    "accent": "UK"
  },
  "verb": {
    "ipa": "/vɜːb/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/verb",
    "accent": "UK"
  },
  "virtue": {
    "ipa": "/ˈvɜːtʃuː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/virtue",
    "accent": "UK"
  },
  "up-to-date": {
    "ipa": "/ˌʌptəˈdeɪt/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/up-to-date",
    "accent": "UK"
  },
  "throng": {
    "ipa": "/θrɒŋ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/throng",
    "accent": "UK"
  },
  "whirl": {
    "ipa": "/wɜːl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/whirl",
    "accent": "UK"
  },
  "worship": {
    "ipa": "/ˈwɜːʃɪp/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/worship",
    "accent": "UK"
  },
  "well-known": {
    "ipa": "/ˌwelˈnəʊn/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/well-known",
    "accent": "UK"
  },
  "x-rated": {
    "ipa": "/ˈeksˌreɪtɪd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/x-rated",
    "accent": "UK"
  },
  "x-ray": {
    "ipa": "/ˈeksreɪ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/x-ray",
    "accent": "UK"
  },
  "carbon dioxide": {
    "ipa": "/ˌkɑːbəndaɪˈɒksaɪd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/carbon-dioxide",
    "accent": "UK"
  },
  "el nino": {
    "ipa": "/elˈniːnjəʊ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/el-nino",
    "accent": "UK"
  },
  "lay-off": {
    "ipa": "/ˈleɪɒf/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/layoff",
    "accent": "UK"
  },
  "alumni": {
    "ipa": "/əˈlʌmnaɪ/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/alumni",
    "accent": "UK"
  },
  "algae": {
    "ipa": "/ˈælɡiː/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/algae",
    "accent": "UK"
  },
  "bacteria": {
    "ipa": "/bækˈtɪəriə/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/bacteria",
    "accent": "UK"
  },
  "new zealand": {
    "ipa": "/ˌnjuːˈziːlənd/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/us/pronunciation/english/new-zealand",
    "accent": "UK"
  },
  "normal": {
    "ipa": "/ˈnɔːməl/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/pronunciation/english/normal",
    "accent": "UK"
  },
  "rhythmical": {
    "ipa": "/ˈrɪðmɪkəl/",
    "pronunciationSourceUrl": "https://www.collinsdictionary.com/dictionary/english/rhythmic",
    "accent": "UK"
  },
  "protestor": {
    "ipa": "/prəˈtestə(r)/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/dictionary/english/protester",
    "accent": "UK"
  },
  "short-day": {
    "ipa": "/ˈʃɔrtˌdeɪ/",
    "pronunciationSourceUrl": "https://www.collinsdictionary.com/dictionary/english/short-day",
    "accent": "US"
  },
  "tropics": {
    "ipa": "/ˈtrɒpɪks/",
    "pronunciationSourceUrl": "https://www.collinsdictionary.com/dictionary/english/tropics",
    "accent": "UK"
  },
  "criteria": {
    "ipa": "/kraɪˈtɪəriə/",
    "pronunciationSourceUrl": "https://www.collinsdictionary.com/dictionary/english/criterion",
    "accent": "UK"
  },
  "utilities": {
    "ipa": "/juːˈtɪlətiz/",
    "pronunciationSourceUrl": "https://dictionary.cambridge.org/dictionary/english/utility",
    "accent": "UK",
    "pronunciationBasis": "词典所列 utility 的规则复数"
  },
  "ripener": {
    "ipa": "/ˈraɪpənə(r)/",
    "pronunciationSourceUrl": "https://www.collinsdictionary.com/dictionary/english/ripen",
    "accent": "UK",
    "pronunciationBasis": "词典所列派生形式及其构词读音"
  },
  "coiner": {
    "ipa": "/ˈkɔɪnə(r)/",
    "pronunciationSourceUrl": "https://www.collinsdictionary.com/dictionary/english/coin",
    "accent": "UK",
    "pronunciationBasis": "词典所列派生形式及其构词读音"
  }
};
 const meaningSources={
  "device": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/device",
  "secondary": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/secondary",
  "acid": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/acid",
  "basic": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/basic",
  "copy": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/copy",
  "grant": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/grant",
  "domain": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/domain",
  "echo": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/echo",
  "binary": "https://dictionary.cambridge.org/dictionary/english/binary",
  "shift": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/shift",
  "edit": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/edit",
  "concert": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/concert",
  "pop": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/pop",
  "move": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/move",
  "slip": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/slip",
  "mop": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/mop",
  "label": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/label?q=label_2",
  "bell": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/bell",
  "tin": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/tin",
  "nut": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/nut",
  "stove": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/stove",
  "drunk": "https://dictionary.cambridge.org/us/dictionary/english-chinese-simplified/drunk",
  "found": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/found",
  "saw": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/saw",
  "exit": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/exit",
  "install": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/install",
  "power": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/power",
  "share": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/share",
  "choice": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/choice",
  "protocol": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/protocol",
  "bound": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/bound",
  "act": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/act",
  "capture": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/capture",
  "sort": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/sort",
  "erase": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/erase",
  "backup": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/backup",
  "replace": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/replace",
  "broken": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/broken",
  "apologise": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/apologize",
  "beat": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/beat",
  "bore": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/bore",
  "born": "https://dictionary.cambridge.org/dictionary/english/born",
  "crew": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/crew",
  "command": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/command",
  "data": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/data",
  "lay": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/lay",
  "mode": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/mode",
  "path": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/path",
  "pause": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/pause",
  "print": "https://dictionary.cambridge.org/dictionary/english/print",
  "restore": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/restore",
  "wound": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/wound",
  "librarian": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/librarian",
  "session": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/session",
  "discipline": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/discipline",
  "mall": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/mall",
  "make-up": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/make-up",
  "deployment": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/deployment",
  "despatch": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/despatch",
  "decorate": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/decorate",
  "dispute": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/dispute",
  "discussion": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/discussion",
  "dissertation": "https://dictionary.cambridge.org/us/dictionary/english-chinese-simplified/dissertation",
  "clearly": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/clearly",
  "manually": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/manually",
  "desolate": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/desolate",
  "medium": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/medium",
  "cell": "https://dictionary.cambridge.org/dictionary/english/cell",
  "awesome": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/awesome",
  "party": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/party",
  "novel": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/novel",
  "fair": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/fair",
  "spring": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/spring",
  "issue": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/issue",
  "literature": "https://dictionary.cambridge.org/us/dictionary/english-chinese-simplified/literature",
  "subject": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/subject",
  "present": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/present",
  "object": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/object",
  "permit": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/permit",
  "produce": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/produce",
  "content": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/content",
  "refuse": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/refuse",
  "desert": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/desert",
  "lead": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/lead",
  "minute": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/minute",
  "record": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/record",
  "project": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/project",
  "perfect": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/perfect",
  "intimate": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/intimate",
  "separate": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/separate",
  "deliberate": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/deliberate",
  "convert": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/convert",
  "estimate": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/estimate",
  "graduate": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/graduate",
  "import": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/import",
  "export": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/export",
  "increase": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/increase",
  "decrease": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/decrease",
  "moderate": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/moderate",
  "protest": "https://dictionary.cambridge.org/us/dictionary/english-chinese-simplified/protest",
  "transfer": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/transfer",
  "reject": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/reject",
  "alternate": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/alternate",
  "bow": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/bow",
  "row": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/row",
  "sow": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/sow",
  "pill": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/pill",
  "alumni": "https://dictionary.cambridge.org/us/dictionary/english/alumni",
  "algae": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/algae",
  "criteria": "https://dictionary.cambridge.org/dictionary/english/criteria",
  "trousers": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/trousers",
  "scissors": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/scissors",
  "bacteria": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/bacteria",
  "rainfall": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/rainfall",
  "fauna": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/fauna",
  "flora": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/flora",
  "turtle": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/turtle",
  "thermal": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/thermal",
  "dairy": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/dairy",
  "fare": "https://dictionary.cambridge.org/dictionary/english/fare",
  "longing": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/longing",
  "cunning": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/cunning",
  "scatter": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/scatter",
  "logical": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/logical",
  "logically": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/logically",
  "periodically": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/periodically",
  "aggress": "https://www.collinsdictionary.com/zh/dictionary/english/aggress",
  "aggression": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/aggression",
  "aggressiveness": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/aggressiveness",
  "irregularly": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/irregularly",
  "smoggy": "https://dictionary.cambridge.org/dictionary/english/smoggy?topic=clouds-dew-fog-and-steam",
  "linguistic": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/linguistic",
  "discernible": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/discernible",
  "discerning": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/discerning",
  "cosmos": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/cosmos",
  "ironic": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/ironic",
  "biorhythm": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/biorhythm",
  "satellite": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/satellite",
  "understanding": "https://dictionary.cambridge.org/us/dictionary/learner-english/understanding",
  "southern": "https://dictionary.cambridge.org/dictionary/english-chinese-traditional/southern",
  "exploitation": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/exploitation",
  "takeaway": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/takeaway",
  "scrutinise": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/scrutinize",
  "dampness": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/dampness",
  "ripener": "https://www.collinsdictionary.com/zh/dictionary/english-chinese_traditional/ripen",
  "discounter": "https://dictionary.cambridge.org/dictionary/english/discounter",
  "new zealand": "https://dictionary.cambridge.org/dictionary/learner-english/new-zealand",
  "coed": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/co-ed",
  "rainforest": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/rainforest",
  "carbon dioxide": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/carbon-dioxide",
  "el nino": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/el-nino",
  "learned": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/learned",
  "eaves": "https://dictionary.cambridge.org/us/dictionary/english/eaves",
  "increasing": "https://dictionary.cambridge.org/dictionary/english-chinese-simplified/increase",
  "utilities": "https://dictionary.cambridge.org/dictionary/english/utility",
  "shade-tolerant": "https://www.rhs.org.uk/garden-design/shade-gardening"
};
 for(const word of ['hail','silence','farewell','dear','finger','flag','mandatory','cosmetics'])meaningSources[word]='https://dictionary.cambridge.org/dictionary/'+(word==='cosmetics'?'learner-english/':'english-chinese-simplified/')+word;
 for(const [word,entry] of Object.entries(entries)){if(!meaningSources[word])throw Error('Missing meaning source: '+word);entry.meaningSourceUrl=meaningSources[word];}
 Object.assign(pronunciations,{
  understanding:{ipa:'/ˌʌndəˈstændɪŋ/',pronunciationSourceUrl:'https://dictionary.cambridge.org/pronunciation/english/understanding',accent:'UK'},
  abbreviation:{ipa:'/əˌbriːviˈeɪʃən/',pronunciationSourceUrl:'https://dictionary.cambridge.org/dictionary/chinese-simplified-english/简称',accent:'UK'},
  finger:{ipa:'/ˈfɪŋɡə(r)/',pronunciationSourceUrl:'https://dictionary.cambridge.org/dictionary/english-chinese-simplified/finger',accent:'UK'},
  dear:{ipa:'/dɪə(r)/',pronunciationSourceUrl:'https://dictionary.cambridge.org/dictionary/english-chinese-simplified/dear',accent:'UK'},
 });
 const notes={
  record:'名词“记录、纪录”读 /ˈrekɔːd/；动词“记录、录制”读 /rɪˈkɔːd/。',
  present:'形容词、名词读 /ˈprezənt/；动词“呈现、赠送”读 /prɪˈzent/。',
  conduct:'名词“行为”读 /ˈkɒndʌkt/；动词“实施、指挥、传导”读 /kənˈdʌkt/。',
  lead:'“带领、领先”读 /liːd/；金属“铅”读 /led/。',
  subject:'名词、形容词读 /ˈsʌbdʒekt/；动词“使遭受、使服从”读 /səbˈdʒekt/。',
  object:'名词“物体、目标”读 /ˈɒbdʒekt/；动词“反对”读 /əbˈdʒekt/。',
  permit:'动词“允许”读 /pəˈmɪt/；名词“许可证”读 /ˈpɜːmɪt/。',
  refuse:'动词“拒绝”读 /rɪˈfjuːz/；名词“垃圾”读 /ˈrefjuːs/。',
  desert:'名词“沙漠”读 /ˈdezət/；动词“遗弃、擅离”读 /dɪˈzɜːt/。',
  minute:'“分钟、会议记录”读 /ˈmɪnɪt/；形容词“微小的”读 /maɪˈnjuːt/。',
  wound:'“伤口、使受伤”读 /wuːnd/；作 wind（缠绕）的过去式、过去分词时读 /waʊnd/。',
  bow:'“弓、蝴蝶结、琴弓”读 /bəʊ/；“鞠躬、船头”读 /baʊ/。',
  row:'“排、行、划船”读 /rəʊ/；“争吵、吵闹”读 /raʊ/。',
  sow:'动词“播种”读 /səʊ/；名词“母猪”读 /saʊ/。',
  found:'既可为“建立、创办、铸造”，也可作 find（发现、找到）的过去式、过去分词，均读 /faʊnd/。',
  saw:'“锯、锯开”读 /sɔː/；也可作 see（看见）的过去式。',
  drunk:'“喝醉的、醉汉”读 /drʌŋk/；也是 drink（喝）的过去分词，不是过去式。',
  born:'“出生的、天生的”读 /bɔːn/；也是 bear（生育）的过去分词形式之一。',
  lay:'“放置、下蛋”等动词读 /leɪ/；也是 lie（躺）的过去式，不是现在时“躺”。',
  learned:'形容词“博学的”读 /ˈlɜːnɪd/；作 learn 的过去式、过去分词时读 /lɜːnd/。',
  separate:'动词读 /ˈsepəreɪt/；形容词“分开的、独立的”读 /ˈsepərət/。',
  graduate:'动词“毕业”读 /ˈɡrædʒueɪt/；名词“毕业生”、形容词读 /ˈɡrædʒuət/。',
  estimate:'动词读 /ˈestɪmeɪt/；名词“估计、估价”读 /ˈestɪmət/。',
  deliberate:'形容词“故意的、深思熟虑的”读 /dɪˈlɪbərət/；动词“仔细考虑”读 /dɪˈlɪbəreɪt/。',
  intimate:'形容词、名词读 /ˈɪntɪmət/；动词“暗示、透露”读 /ˈɪntɪmeɪt/。',
  moderate:'形容词、名词读 /ˈmɒdərət/；动词“缓和、主持”读 /ˈmɒdəreɪt/。',
  alternate:'形容词、名词读 /ɒlˈtɜːnət/；动词“交替”读 /ˈɒltəneɪt/。',
  perfect:'形容词“完美的”读 /ˈpɜːfekt/；动词“使完善”读 /pəˈfekt/。',
  reject:'动词“拒绝”读 /rɪˈdʒekt/；名词“不合格品”读 /ˈriːdʒekt/。',
  project:'名词“项目”读 /ˈprɒdʒekt/；动词“预测、投射”读 /prəˈdʒekt/。',
  convert:'动词“转换”读 /kənˈvɜːt/；名词“改变信仰者”读 /ˈkɒnvɜːt/。',
  import:'动词读 /ɪmˈpɔːt/；名词“进口、进口商品”读 /ˈɪmpɔːt/。',
  export:'动词读 /ɪkˈspɔːt/；名词“出口、出口商品”读 /ˈekspɔːt/。',
  increase:'动词读 /ɪnˈkriːs/；名词“增加量”读 /ˈɪŋkriːs/。',
  decrease:'动词读 /dɪˈkriːs/；名词“减少量”读 /ˈdiːkriːs/。',
  protest:'动词读 /prəˈtest/；名词“抗议”读 /ˈprəʊtest/。',
  transfer:'动词读 /trænsˈfɜː(r)/；名词“转移、调动”读 /ˈtrænsfɜː(r)/。',
  ferment:'动词“发酵”读 /fəˈment/；名词“骚动、动荡”读 /ˈfɜːment/。',
  subordinate:'形容词、名词读 /səˈbɔːdɪnət/；动词“使从属”读 /səˈbɔːdɪneɪt/。',
  content:'名词“内容、含量”读 /ˈkɒntent/；“满意的、使满足、满足感”读 /kənˈtent/。',
 };
 for(const [word,value] of Object.entries(pronunciations))Object.assign(entries[word]||= {},value);
 for(const [word,pronunciationNote] of Object.entries(notes))Object.assign(entries[word]||= {},{pronunciationNote});
 entries.revoltive={meaning:'厌恶的；反感的（原书用法，现代常用词典未核实）',pos:'adj.',ipa:'—',referenceOnly:true,reviewReason:'原书第 230 页确有此词形，但未能在所查 Cambridge、Collins 等主流词典核实对应标准释义与发音。保留原形作资料，不参与正式练习；请区分 revolted（感到厌恶的）与 revolting（令人厌恶的）。'};
 const result=Object.freeze({edition:'2026-10-22',entries:Object.freeze(entries),meaningCount:meaningRows.length,ipaCount:Object.keys(pronunciations).length});
 if(typeof module==='object'&&module.exports)module.exports=result;
 if(root){
  root.CATALOG_REPAIRS=result;
  for(const [word,entry] of Object.entries(entries)){
   const previous=root.EXTERNAL_VOCAB?.[word]||{};
   (root.EXTERNAL_VOCAB||= {})[word]={...previous,...entry,...(entry.ipa?{reviewedIpa:!entry.referenceOnly}:{}),...(entry.meaning?{reviewed:!entry.referenceOnly,reviewSource:'WordOrbit whole-catalog review 2026-10-22'}:{})};
  }
 }
})(typeof window==='object'?window:null);
