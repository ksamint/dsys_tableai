// Expert-AI Studio copy — from the Table AI seed business plan (Oct 2026). 中文 in 繁體 (Hong Kong usage). Every string is {zh, en}.
SITE.studio = {
  num: "00",
  eyebrow: B("專家 AI 工作室", "Expert-AI Studio"),
  tagline: B("把行業專家的判斷路徑，轉化為企業可部署的 AI 智能體、訓練與評測數據，以及可問責的決策基準", "Turning industry experts' decision paths into deployable enterprise AI agents, training and evaluation data, and accountable decision benchmarks"),
  cta1: B("了解專家 AI 產品", "Explore Expert-AI Products"),
  pageTitle: B("把專家判斷變成可部署、可問責的 AI", "Turning Expert Judgement into Deployable, Accountable AI"),
  overview: B("工作室概述", "Studio Overview"),
  overviewText: B("Table AI 是一家專家 AI 工作室：把行業專家的判斷路徑，轉化為企業可部署的 AI 智能體、訓練與評測數據，以及可問責的決策基準。模式已在餐飲行業的侍天跑通，正複制到金融 IT 等高價值行業。", "Table AI is an Expert-AI Studio: it turns industry experts' decision paths into deployable enterprise AI agents, training and evaluation data, and accountable decision benchmarks. The model has been proven in the restaurant industry through Tiansight and is being replicated in high-value sectors such as financial IT."),
  problem: {
    eyebrow: B("問題與時機", "Problem & Timing"),
    title: B("企業 AI 落地卡在三個環節", "Enterprise AI Adoption Stalls at Three Points"),
    items: [
      { label: B("環節 01", "Point 01"), title: B("模型不會做專業判斷", "Models Cannot Make Professional Judgements"), desc: B("通用大模型在專業場景會產生幻覺。", "General-purpose models hallucinate in professional scenarios.") },
      { label: B("環節 02", "Point 02"), title: B("決策無法審計", "Decisions Cannot Be Audited"), desc: B("企業內部的專家經驗從未被結構化，無法變成訓練數據或評測標準。", "Expert experience inside the enterprise has never been structured, so it cannot become training data or evaluation standards.") },
      { label: B("環節 03", "Point 03"), title: B("沒有人為結果負責", "No One Is Accountable for the Outcome"), desc: B("算法無法承擔專業責任。", "Algorithms cannot carry professional accountability.") },
    ],
  },
  products: {
    eyebrow: B("產品與解決方案", "Products & Solutions"),
    title: B("一位專家的決策路徑，三種可重複銷售的產品", "One Expert's Decision Path, Three Repeatable Products"),
    intro: B("每一件產品都由具名專家簽核，解決「算法無法承擔專業責任」的問題。", "Every product is signed off by a named expert, addressing the problem that algorithms cannot carry professional accountability."),
    buyers: B("買家", "Buyers"), proto: B("已驗證的原型", "Validated Prototype"), viewAll: B("查看工作室", "View the Studio"),
    items: [
      { num: "01", title: B("專家智能體", "Expert Agent"), desc: B("以專家決策路徑構建的垂直智能體，專家在環中簽核（Human-in-the-loop）。", "Vertical agents built on expert decision paths, with expert sign-off in the loop (Human-in-the-loop)."), buyers: B("企業業務部門、連鎖品牌", "Enterprise business units, chain brands"), proto: B("侍天「第二大腦」經營分析系統", "Tiansight 'Second Brain' operations analytics system") },
      { num: "02", title: B("專家數據與評分標準", "Expert Data & Rubrics"), desc: B("SFT / RL 數據、決策規則、繁簡中英三語語料。", "SFT / RL data, decision rules, and Traditional Chinese, Simplified Chinese and English corpora."), buyers: B("垂直模型團隊、實驗室", "Vertical model teams, labs"), proto: B("菜單與門店經營診斷規則庫", "Menu and store-operations diagnostic rule base") },
      { num: "03", title: B("專家評測集", "Expert Evals"), desc: B("可審計的行業評測基準，用於智能體驗收與合規審查。", "Auditable industry benchmarks for agent acceptance and compliance review."), buyers: B("金融機構、監管合規部門", "Financial institutions, regulatory compliance departments"), proto: B("7 天經營診斷報告流程", "7-day operations diagnostic report process") },
    ],
  },
  method: {
    eyebrow: B("方法論與技術路線", "Methodology & Technology"),
    title: B("從隱性經驗到機器可讀的規則", "From Tacit Experience to Machine-Readable Rules"),
    items: [
      { title: B("L.I.D. 引導式教練體系", "L.I.D. Guided Coaching System"), content: B("專家知識的提取採用創始人在 EHL 高管培訓中建立的 L.I.D. 引導式教練體系：用結構化訪談與案例復盤，把專家「為什麼這樣判斷」寫成機器可讀的規則與反例。", "Expert knowledge is extracted with the L.I.D. guided coaching system the founder built in EHL executive education: structured interviews and case reviews turn why an expert judges the way they do into machine-readable rules and counter-examples.") },
      { title: B("規模化驗證", "Proven at Scale"), content: B("團隊此前完成過約 200 萬字的課程本地化，證明這套方法能規模化。", "The team previously localised around two million characters of course material, demonstrating that the method scales.") },
      { title: B("不自研基礎模型", "No Proprietary Foundation Model"), content: B("在通用模型（DeepSeek、通義、Claude 等）之上搭建智能體編排、評測工具鏈與專家簽核工作流，對接客戶現有平台。", "Agent orchestration, evaluation tooling and expert sign-off workflows are built on general-purpose models (DeepSeek, Tongyi, Claude and others) and connected to customers' existing platforms.") },
      { title: B("可追溯的問責回路", "Traceable Accountability Loop"), content: B("專家的決策路徑經知識提取後分流為三種產品，交付給企業客戶；客戶端的每份輸出都回到具名專家簽核。", "After knowledge extraction, an expert's decision path branches into three products delivered to enterprise customers; every output on the customer side returns to a named expert for sign-off.") },
    ],
  },
  ladder: {
    eyebrow: B("商業模式", "Business Model"),
    title: B("收費階梯", "Pricing Ladder"),
    intro: B("先以診斷建立信任，再以月費陪跑鎖定續約，最後以智能體部署加成效分成放大單客價值。", "Diagnosis builds trust, monthly coaching secures renewal, and agent deployment with an outcome fee expands the value of each customer."),
    items: [
      { num: "01", title: B("診斷 / 評測", "Diagnosis / Evaluation"), term: B("一次性，4–8 週", "One-off, 4–8 weeks") },
      { num: "02", title: B("陪跑 / 數據訂閱", "Coaching / Data Subscription"), term: B("年度訂閱", "Annual subscription") },
      { num: "03", title: B("智能體部署 + 成效分成", "Agent Deployment + Outcome Fee"), term: B("多年框架協議", "Multi-year framework agreement") },
    ],
  },
  tiansight: {
    eyebrow: B("早期驗證", "Early Validation"),
    title: B("侍天：已跑通的模式", "Tiansight: A Proven Model"),
    content: B("侍天是 Table AI 在餐飲行業的專家 AI 原型。入口是菜單設計與經營數據分析，客戶提交 6 個月經營數據後 7 天內取得診斷報告，再進入月度復盤陪跑或「第二大腦」系統。", "Tiansight is Table AI's Expert-AI prototype in the restaurant industry. The entry point is menu design and operations data analysis: customers submit six months of operating data and receive a diagnostic report within seven days, then move into monthly review coaching or the 'Second Brain' system."),
    brandsLabel: B("合作品牌", "Partner Brands"),
    brands: ["石頭先生的漢堡", "蘇幫袁", "潮發潮汕牛肉", "吳裕泰", "清水亭", "3699 河鮮小館", "遊園京夢", "韻 1980 新派淮揚菜"],
    url: "https://tiansight.apuch.cn", visit: B("訪問侍天", "Visit Tiansight"),
  },
  ctaTitle: B("探索 OPC Global 專家網絡", "Explore the OPC Global Expert Network"), ctaLabel: B("了解網絡", "Discover the Network"),
};
