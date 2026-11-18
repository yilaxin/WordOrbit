/* Batch 25: reviewed public learning scope, original bilingual examples.
 * Source entries were read during review. No learner state is included. */
(function(scope){
 'use strict';
 function register(add){
  function entry(word,rows,refs){
   const e=add(word,rows,refs);e.reviewDate='2026-11-18';
   e.senses.forEach((s,i)=>s.source=rows[i][8]);
   e.sources=[...new Set([...rows.map(r=>r[8]),...refs.map(r=>r.source)])];
   return e;
  }
  entry("primate",[
   ["sense-1","灵长类动物","n.",["灵长类动物"],["primate-1","mammalian-animal"],"The researcher compared the hand movements of several primates.","研究人员比较了几种灵长类动物的手部动作。",null,"https://www.collinsdictionary.com/dictionary/english/primate"],
   ["sense-2","首席主教","n.",["首席主教"],["primate-2","senior-church-leader","diagonal-chess-piece"],"The primate addressed representatives from churches across the region.","首席主教向来自该地区各教会的代表发表了讲话。","宗教称号；此义也可读 /ˈpraɪmət/","https://www.collinsdictionary.com/dictionary/english/primate"],
   ["sense-3","灵长类的","adj.",["灵长类的"],["primate-3","mammalian-animal"],"The museum has a collection of primate skeletons.","博物馆收藏了一批灵长类动物骨骼。",null,"https://www.collinsdictionary.com/dictionary/english/primate"]
  ],[{"terms":["大主教","灵长目动物","灵长类"],"decision":"scope-excluded","source":"https://www.collinsdictionary.com/dictionary/english/primate","reason":"采用灵长类动物名词、灵长类形容词和首席主教名词；旧译“大主教”范围过宽，primate 强调某教区群或地区中具有优先地位的主教，并非所有 archbishop。动物相关旧译为同义表述，保留溯源，不重复设立相同考点。"}]);
  entry("proliferate",[
   ["sense-1","迅速增殖；大量繁殖","v.",["迅速增殖","大量繁殖"],["proliferate-1","multiply-1","increase-quantity","increase-amount","animal-reproduction","distinct-type","cause-to-develop","multiply-2","multiply-3","mushroom-1","fungal-organism","mushroom-2","reproduce-1","clone-1","clone-2","reproduce-2"],"The cells proliferate quickly under these laboratory conditions.","这些细胞在这样的实验室条件下迅速增殖。",null,"https://www.merriam-webster.com/dictionary/proliferate"],
   ["sense-2","激增；迅速扩散","v.",["激增","迅速扩散"],["proliferate-2","multiply-1","increase-quantity","increase-amount","animal-reproduction","distinct-type","cause-to-develop","multiply-2","multiply-3","mushroom-1","fungal-organism","mushroom-2","reproduce-1","clone-1","clone-2","reproduce-2"],"Small online shops proliferated after delivery services improved.","配送服务改善后，小型网店大量涌现。",null,"https://www.merriam-webster.com/dictionary/proliferate"],
   ["sense-3","使大量增加；使迅速扩散","v.",["使大量增加","使迅速扩散"],["proliferate-3","multiply-1","increase-quantity","increase-amount","animal-reproduction","distinct-type","cause-to-develop","multiply-2","multiply-3","mushroom-1","fungal-organism","mushroom-2","reproduce-1","clone-1","clone-2","reproduce-2"],"The scheme would proliferate small agencies instead of creating a single authority.","这个方案会使小机构大量增加，而不是建立一个统一的管理部门。",null,"https://www.merriam-webster.com/dictionary/proliferate"]
  ],[{"terms":["增殖","扩散","使激增"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/proliferate","reason":"生物学迅速增殖、一般数量激增与及物使大量增加分列。旧译是这些义项的概括表述，保留溯源，避免将不含迅速或大量限制的宽泛表达当作另一个义项。"}]);
  entry("sterility",[
   ["sense-1","不育；不孕","n.",["不育","不孕"],["sterility-1","unproductive-land","unable-to-reproduce","unproductive-effort"],"The study examined sterility in several hybrid plants.","这项研究考察了几种杂交植物的不育现象。",null,"https://www.merriam-webster.com/dictionary/sterile"],
   ["sense-2","无菌状态","n.",["无菌状态"],["sterility-2"],"The laboratory checked the sterility of the sealed containers.","实验室检查了密封容器的无菌状态。",null,"https://www.merriam-webster.com/dictionary/sterile"],
   ["sense-3","土地贫瘠；不毛","n.",["土地贫瘠","不毛"],["sterility-3","unproductive-land","unable-to-reproduce","unproductive-effort"],"The survey linked the sterility of the soil to a lack of nutrients.","调查把土壤贫瘠与养分缺乏联系起来。",null,"https://www.merriam-webster.com/dictionary/sterile"],
   ["sense-4","缺乏创意或生气；内容贫乏","n.",["缺乏创意或生气","内容贫乏","缺乏创意或生气"],["sterility-4","unproductive-land","unable-to-reproduce","unproductive-effort"],"The critic regretted the sterility of the exhibition's central theme.","评论家对展览核心主题缺乏创意感到遗憾。",null,"https://www.merriam-webster.com/dictionary/sterile"]
  ],[{"terms":["不毛","内容贫乏","无菌"],"decision":"scope-excluded","source":"https://www.merriam-webster.com/dictionary/sterile","reason":"不育、无菌状态、土壤贫瘠和缺乏创意四个语境分列，旧译在此保留溯源，不重复设立相同考点；词源形容词页面明确列 sterility 衍生名词，另核对独立名词条目。"}]);
 }
 if(typeof module==='object'&&module.exports)module.exports=register;else scope.WordOrbitSenseBatch25=register;
})(typeof window==='object'?window:globalThis);
