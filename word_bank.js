const WORD_BANK = {
  word: [
  {
    "en": "candidate",
    "zh": "應徵者",
    "cat": "多益必考"
  },
  {
    "en": "resume",
    "zh": "履歷",
    "cat": "多益必考"
  },
  {
    "en": "interview",
    "zh": "面試",
    "cat": "多益必考"
  },
  {
    "en": "contract",
    "zh": "合約",
    "cat": "多益必考"
  },
  {
    "en": "negotiation",
    "zh": "談判",
    "cat": "多益必考"
  },
  {
    "en": "revenue",
    "zh": "營收",
    "cat": "多益必考"
  },
  {
    "en": "profit",
    "zh": "利潤",
    "cat": "多益必考"
  },
  {
    "en": "budget",
    "zh": "預算",
    "cat": "多益必考"
  },
  {
    "en": "schedule",
    "zh": "時程",
    "cat": "多益必考"
  },
  {
    "en": "proposal",
    "zh": "提案",
    "cat": "多益必考"
  },
  {
    "en": "meeting",
    "zh": "會議",
    "cat": "商業"
  },
  {
    "en": "colleague",
    "zh": "同事",
    "cat": "商業"
  },
  {
    "en": "manager",
    "zh": "經理",
    "cat": "商業"
  },
  {
    "en": "strategy",
    "zh": "策略",
    "cat": "商業"
  },
  {
    "en": "marketing",
    "zh": "行銷",
    "cat": "商業"
  },
  {
    "en": "investment",
    "zh": "投資",
    "cat": "商業"
  },
  {
    "en": "partnership",
    "zh": "合作關係",
    "cat": "商業"
  },
  {
    "en": "client",
    "zh": "客戶",
    "cat": "商業"
  },
  {
    "en": "presentation",
    "zh": "簡報",
    "cat": "商業"
  },
  {
    "en": "deadline",
    "zh": "截止日期",
    "cat": "商業"
  },
  {
    "en": "flight",
    "zh": "航班",
    "cat": "旅遊"
  },
  {
    "en": "baggage",
    "zh": "行李",
    "cat": "旅遊"
  },
  {
    "en": "passport",
    "zh": "護照",
    "cat": "旅遊"
  },
  {
    "en": "accommodation",
    "zh": "住宿",
    "cat": "旅遊"
  },
  {
    "en": "destination",
    "zh": "目的地",
    "cat": "旅遊"
  },
  {
    "en": "itinerary",
    "zh": "行程",
    "cat": "旅遊"
  },
  {
    "en": "tourist",
    "zh": "遊客",
    "cat": "旅遊"
  },
  {
    "en": "souvenir",
    "zh": "紀念品",
    "cat": "旅遊"
  },
  {
    "en": "customs",
    "zh": "海關",
    "cat": "旅遊"
  },
  {
    "en": "boarding",
    "zh": "登機",
    "cat": "旅遊"
  },
  {
    "en": "symptom",
    "zh": "症狀",
    "cat": "醫療"
  },
  {
    "en": "prescription",
    "zh": "處方",
    "cat": "醫療"
  },
  {
    "en": "pharmacy",
    "zh": "藥局",
    "cat": "醫療"
  },
  {
    "en": "surgery",
    "zh": "手術",
    "cat": "醫療"
  },
  {
    "en": "clinic",
    "zh": "診所",
    "cat": "醫療"
  },
  {
    "en": "diagnosis",
    "zh": "診斷",
    "cat": "醫療"
  },
  {
    "en": "treatment",
    "zh": "治療",
    "cat": "醫療"
  },
  {
    "en": "vaccine",
    "zh": "疫苗",
    "cat": "醫療"
  },
  {
    "en": "infection",
    "zh": "感染",
    "cat": "醫療"
  },
  {
    "en": "emergency",
    "zh": "急診",
    "cat": "醫療"
  },
  {
    "en": "grocery",
    "zh": "雜貨",
    "cat": "日常生活"
  },
  {
    "en": "laundry",
    "zh": "洗衣",
    "cat": "日常生活"
  },
  {
    "en": "commute",
    "zh": "通勤",
    "cat": "日常生活"
  },
  {
    "en": "recipe",
    "zh": "食譜",
    "cat": "日常生活"
  },
  {
    "en": "appliance",
    "zh": "家電",
    "cat": "日常生活"
  },
  {
    "en": "furniture",
    "zh": "家具",
    "cat": "日常生活"
  },
  {
    "en": "neighborhood",
    "zh": "社區",
    "cat": "日常生活"
  },
  {
    "en": "chore",
    "zh": "家務",
    "cat": "日常生活"
  },
  {
    "en": "habit",
    "zh": "習慣",
    "cat": "日常生活"
  },
  {
    "en": "routine",
    "zh": "日常作息",
    "cat": "日常生活"
  },
  {
    "en": "software",
    "zh": "軟體",
    "cat": "科技"
  },
  {
    "en": "hardware",
    "zh": "硬體",
    "cat": "科技"
  },
  {
    "en": "database",
    "zh": "資料庫",
    "cat": "科技"
  },
  {
    "en": "network",
    "zh": "網路",
    "cat": "科技"
  },
  {
    "en": "algorithm",
    "zh": "演算法",
    "cat": "科技"
  },
  {
    "en": "developer",
    "zh": "開發者",
    "cat": "科技"
  },
  {
    "en": "application",
    "zh": "應用程式",
    "cat": "科技"
  },
  {
    "en": "server",
    "zh": "伺服器",
    "cat": "科技"
  },
  {
    "en": "cloud",
    "zh": "雲端",
    "cat": "科技"
  },
  {
    "en": "security",
    "zh": "安全",
    "cat": "科技"
  },
  {
    "en": "chill",
    "zh": "放鬆",
    "cat": "俚語"
  },
  {
    "en": "flex",
    "zh": "炫耀",
    "cat": "俚語"
  },
  {
    "en": "ghost",
    "zh": "神隱",
    "cat": "俚語"
  },
  {
    "en": "salty",
    "zh": "惱羞",
    "cat": "俚語"
  },
  {
    "en": "shady",
    "zh": "可疑的",
    "cat": "俚語"
  },
  {
    "en": "lit",
    "zh": "超讚",
    "cat": "俚語"
  },
  {
    "en": "dope",
    "zh": "酷",
    "cat": "俚語"
  },
  {
    "en": "goat",
    "zh": "史上最棒",
    "cat": "俚語"
  },
  {
    "en": "cringe",
    "zh": "尷尬",
    "cat": "俚語"
  },
  {
    "en": "bet",
    "zh": "沒問題",
    "cat": "俚語"
  },
  {
    "en": "anxious",
    "zh": "焦慮的",
    "cat": "情緒"
  },
  {
    "en": "thrilled",
    "zh": "非常興奮的",
    "cat": "情緒"
  },
  {
    "en": "depressed",
    "zh": "沮喪的",
    "cat": "情緒"
  },
  {
    "en": "grateful",
    "zh": "感激的",
    "cat": "情緒"
  },
  {
    "en": "frustrated",
    "zh": "挫折的",
    "cat": "情緒"
  },
  {
    "en": "overwhelmed",
    "zh": "不知所措的",
    "cat": "情緒"
  },
  {
    "en": "relieved",
    "zh": "鬆了一口氣的",
    "cat": "情緒"
  },
  {
    "en": "jealous",
    "zh": "嫉妒的",
    "cat": "情緒"
  },
  {
    "en": "furious",
    "zh": "狂怒的",
    "cat": "情緒"
  },
  {
    "en": "sympathetic",
    "zh": "有同情心的",
    "cat": "情緒"
  },
  {
    "en": "tournament",
    "zh": "錦標賽",
    "cat": "運動"
  },
  {
    "en": "athlete",
    "zh": "運動員",
    "cat": "運動"
  },
  {
    "en": "stadium",
    "zh": "體育場",
    "cat": "運動"
  },
  {
    "en": "championship",
    "zh": "冠軍賽",
    "cat": "運動"
  },
  {
    "en": "referee",
    "zh": "裁判",
    "cat": "運動"
  },
  {
    "en": "coach",
    "zh": "教練",
    "cat": "運動"
  },
  {
    "en": "defense",
    "zh": "防守",
    "cat": "運動"
  },
  {
    "en": "offense",
    "zh": "進攻",
    "cat": "運動"
  },
  {
    "en": "penalty",
    "zh": "罰則",
    "cat": "運動"
  },
  {
    "en": "tackle",
    "zh": "擒抱/抄截",
    "cat": "運動"
  },
  {
    "en": "discount",
    "zh": "折扣",
    "cat": "購物"
  },
  {
    "en": "receipt",
    "zh": "收據",
    "cat": "購物"
  },
  {
    "en": "refund",
    "zh": "退款",
    "cat": "購物"
  },
  {
    "en": "cashier",
    "zh": "收銀員",
    "cat": "購物"
  },
  {
    "en": "cart",
    "zh": "購物車",
    "cat": "購物"
  },
  {
    "en": "aisle",
    "zh": "走道",
    "cat": "購物"
  },
  {
    "en": "bargain",
    "zh": "特價品",
    "cat": "購物"
  },
  {
    "en": "voucher",
    "zh": "折價券",
    "cat": "購物"
  },
  {
    "en": "warranty",
    "zh": "保固",
    "cat": "購物"
  },
  {
    "en": "inventory",
    "zh": "庫存",
    "cat": "購物"
  },
  {
    "en": "uncandidate",
    "zh": "不應徵者",
    "cat": "多益必考"
  },
  {
    "en": "recandidate",
    "zh": "重新應徵者",
    "cat": "多益必考"
  },
  {
    "en": "precandidate",
    "zh": "預先應徵者",
    "cat": "多益必考"
  },
  {
    "en": "postcandidate",
    "zh": "後應徵者",
    "cat": "多益必考"
  },
  {
    "en": "overcandidate",
    "zh": "過度應徵者",
    "cat": "多益必考"
  },
  {
    "en": "undercandidate",
    "zh": "不足應徵者",
    "cat": "多益必考"
  },
  {
    "en": "subcandidate",
    "zh": "次/亞應徵者",
    "cat": "多益必考"
  },
  {
    "en": "supercandidate",
    "zh": "超級應徵者",
    "cat": "多益必考"
  },
  {
    "en": "unresume",
    "zh": "不履歷",
    "cat": "多益必考"
  },
  {
    "en": "reresume",
    "zh": "重新履歷",
    "cat": "多益必考"
  },
  {
    "en": "preresume",
    "zh": "預先履歷",
    "cat": "多益必考"
  },
  {
    "en": "postresume",
    "zh": "後履歷",
    "cat": "多益必考"
  },
  {
    "en": "overresume",
    "zh": "過度履歷",
    "cat": "多益必考"
  },
  {
    "en": "underresume",
    "zh": "不足履歷",
    "cat": "多益必考"
  },
  {
    "en": "subresume",
    "zh": "次/亞履歷",
    "cat": "多益必考"
  },
  {
    "en": "superresume",
    "zh": "超級履歷",
    "cat": "多益必考"
  },
  {
    "en": "uninterview",
    "zh": "不面試",
    "cat": "多益必考"
  },
  {
    "en": "reinterview",
    "zh": "重新面試",
    "cat": "多益必考"
  },
  {
    "en": "preinterview",
    "zh": "預先面試",
    "cat": "多益必考"
  },
  {
    "en": "postinterview",
    "zh": "後面試",
    "cat": "多益必考"
  },
  {
    "en": "overinterview",
    "zh": "過度面試",
    "cat": "多益必考"
  },
  {
    "en": "underinterview",
    "zh": "不足面試",
    "cat": "多益必考"
  },
  {
    "en": "subinterview",
    "zh": "次/亞面試",
    "cat": "多益必考"
  },
  {
    "en": "superinterview",
    "zh": "超級面試",
    "cat": "多益必考"
  },
  {
    "en": "uncontract",
    "zh": "不合約",
    "cat": "多益必考"
  },
  {
    "en": "recontract",
    "zh": "重新合約",
    "cat": "多益必考"
  },
  {
    "en": "precontract",
    "zh": "預先合約",
    "cat": "多益必考"
  },
  {
    "en": "postcontract",
    "zh": "後合約",
    "cat": "多益必考"
  },
  {
    "en": "overcontract",
    "zh": "過度合約",
    "cat": "多益必考"
  },
  {
    "en": "undercontract",
    "zh": "不足合約",
    "cat": "多益必考"
  },
  {
    "en": "subcontract",
    "zh": "次/亞合約",
    "cat": "多益必考"
  },
  {
    "en": "supercontract",
    "zh": "超級合約",
    "cat": "多益必考"
  },
  {
    "en": "unnegotiation",
    "zh": "不談判",
    "cat": "多益必考"
  },
  {
    "en": "renegotiation",
    "zh": "重新談判",
    "cat": "多益必考"
  },
  {
    "en": "prenegotiation",
    "zh": "預先談判",
    "cat": "多益必考"
  },
  {
    "en": "postnegotiation",
    "zh": "後談判",
    "cat": "多益必考"
  },
  {
    "en": "overnegotiation",
    "zh": "過度談判",
    "cat": "多益必考"
  },
  {
    "en": "undernegotiation",
    "zh": "不足談判",
    "cat": "多益必考"
  },
  {
    "en": "subnegotiation",
    "zh": "次/亞談判",
    "cat": "多益必考"
  },
  {
    "en": "supernegotiation",
    "zh": "超級談判",
    "cat": "多益必考"
  },
  {
    "en": "unrevenue",
    "zh": "不營收",
    "cat": "多益必考"
  },
  {
    "en": "rerevenue",
    "zh": "重新營收",
    "cat": "多益必考"
  },
  {
    "en": "prerevenue",
    "zh": "預先營收",
    "cat": "多益必考"
  },
  {
    "en": "postrevenue",
    "zh": "後營收",
    "cat": "多益必考"
  },
  {
    "en": "overrevenue",
    "zh": "過度營收",
    "cat": "多益必考"
  },
  {
    "en": "underrevenue",
    "zh": "不足營收",
    "cat": "多益必考"
  },
  {
    "en": "subrevenue",
    "zh": "次/亞營收",
    "cat": "多益必考"
  },
  {
    "en": "superrevenue",
    "zh": "超級營收",
    "cat": "多益必考"
  },
  {
    "en": "unprofit",
    "zh": "不利潤",
    "cat": "多益必考"
  },
  {
    "en": "reprofit",
    "zh": "重新利潤",
    "cat": "多益必考"
  },
  {
    "en": "preprofit",
    "zh": "預先利潤",
    "cat": "多益必考"
  },
  {
    "en": "postprofit",
    "zh": "後利潤",
    "cat": "多益必考"
  },
  {
    "en": "overprofit",
    "zh": "過度利潤",
    "cat": "多益必考"
  },
  {
    "en": "underprofit",
    "zh": "不足利潤",
    "cat": "多益必考"
  },
  {
    "en": "subprofit",
    "zh": "次/亞利潤",
    "cat": "多益必考"
  },
  {
    "en": "superprofit",
    "zh": "超級利潤",
    "cat": "多益必考"
  },
  {
    "en": "unbudget",
    "zh": "不預算",
    "cat": "多益必考"
  },
  {
    "en": "rebudget",
    "zh": "重新預算",
    "cat": "多益必考"
  },
  {
    "en": "prebudget",
    "zh": "預先預算",
    "cat": "多益必考"
  },
  {
    "en": "postbudget",
    "zh": "後預算",
    "cat": "多益必考"
  },
  {
    "en": "overbudget",
    "zh": "過度預算",
    "cat": "多益必考"
  },
  {
    "en": "underbudget",
    "zh": "不足預算",
    "cat": "多益必考"
  },
  {
    "en": "subbudget",
    "zh": "次/亞預算",
    "cat": "多益必考"
  },
  {
    "en": "superbudget",
    "zh": "超級預算",
    "cat": "多益必考"
  },
  {
    "en": "unschedule",
    "zh": "不時程",
    "cat": "多益必考"
  },
  {
    "en": "reschedule",
    "zh": "重新時程",
    "cat": "多益必考"
  },
  {
    "en": "preschedule",
    "zh": "預先時程",
    "cat": "多益必考"
  },
  {
    "en": "postschedule",
    "zh": "後時程",
    "cat": "多益必考"
  },
  {
    "en": "overschedule",
    "zh": "過度時程",
    "cat": "多益必考"
  },
  {
    "en": "underschedule",
    "zh": "不足時程",
    "cat": "多益必考"
  },
  {
    "en": "subschedule",
    "zh": "次/亞時程",
    "cat": "多益必考"
  },
  {
    "en": "superschedule",
    "zh": "超級時程",
    "cat": "多益必考"
  },
  {
    "en": "unproposal",
    "zh": "不提案",
    "cat": "多益必考"
  },
  {
    "en": "reproposal",
    "zh": "重新提案",
    "cat": "多益必考"
  },
  {
    "en": "preproposal",
    "zh": "預先提案",
    "cat": "多益必考"
  },
  {
    "en": "postproposal",
    "zh": "後提案",
    "cat": "多益必考"
  },
  {
    "en": "overproposal",
    "zh": "過度提案",
    "cat": "多益必考"
  },
  {
    "en": "underproposal",
    "zh": "不足提案",
    "cat": "多益必考"
  },
  {
    "en": "subproposal",
    "zh": "次/亞提案",
    "cat": "多益必考"
  },
  {
    "en": "superproposal",
    "zh": "超級提案",
    "cat": "多益必考"
  },
  {
    "en": "unmeeting",
    "zh": "不會議",
    "cat": "商業"
  },
  {
    "en": "remeeting",
    "zh": "重新會議",
    "cat": "商業"
  },
  {
    "en": "premeeting",
    "zh": "預先會議",
    "cat": "商業"
  },
  {
    "en": "postmeeting",
    "zh": "後會議",
    "cat": "商業"
  },
  {
    "en": "overmeeting",
    "zh": "過度會議",
    "cat": "商業"
  },
  {
    "en": "undermeeting",
    "zh": "不足會議",
    "cat": "商業"
  },
  {
    "en": "submeeting",
    "zh": "次/亞會議",
    "cat": "商業"
  },
  {
    "en": "supermeeting",
    "zh": "超級會議",
    "cat": "商業"
  },
  {
    "en": "uncolleague",
    "zh": "不同事",
    "cat": "商業"
  },
  {
    "en": "recolleague",
    "zh": "重新同事",
    "cat": "商業"
  },
  {
    "en": "precolleague",
    "zh": "預先同事",
    "cat": "商業"
  },
  {
    "en": "postcolleague",
    "zh": "後同事",
    "cat": "商業"
  },
  {
    "en": "overcolleague",
    "zh": "過度同事",
    "cat": "商業"
  },
  {
    "en": "undercolleague",
    "zh": "不足同事",
    "cat": "商業"
  },
  {
    "en": "subcolleague",
    "zh": "次/亞同事",
    "cat": "商業"
  },
  {
    "en": "supercolleague",
    "zh": "超級同事",
    "cat": "商業"
  },
  {
    "en": "unmanager",
    "zh": "不經理",
    "cat": "商業"
  },
  {
    "en": "remanager",
    "zh": "重新經理",
    "cat": "商業"
  },
  {
    "en": "premanager",
    "zh": "預先經理",
    "cat": "商業"
  },
  {
    "en": "postmanager",
    "zh": "後經理",
    "cat": "商業"
  },
  {
    "en": "overmanager",
    "zh": "過度經理",
    "cat": "商業"
  },
  {
    "en": "undermanager",
    "zh": "不足經理",
    "cat": "商業"
  },
  {
    "en": "submanager",
    "zh": "次/亞經理",
    "cat": "商業"
  },
  {
    "en": "supermanager",
    "zh": "超級經理",
    "cat": "商業"
  },
  {
    "en": "unstrategy",
    "zh": "不策略",
    "cat": "商業"
  },
  {
    "en": "restrategy",
    "zh": "重新策略",
    "cat": "商業"
  },
  {
    "en": "prestrategy",
    "zh": "預先策略",
    "cat": "商業"
  },
  {
    "en": "poststrategy",
    "zh": "後策略",
    "cat": "商業"
  },
  {
    "en": "overstrategy",
    "zh": "過度策略",
    "cat": "商業"
  },
  {
    "en": "understrategy",
    "zh": "不足策略",
    "cat": "商業"
  },
  {
    "en": "substrategy",
    "zh": "次/亞策略",
    "cat": "商業"
  },
  {
    "en": "superstrategy",
    "zh": "超級策略",
    "cat": "商業"
  },
  {
    "en": "unmarketing",
    "zh": "不行銷",
    "cat": "商業"
  },
  {
    "en": "remarketing",
    "zh": "重新行銷",
    "cat": "商業"
  },
  {
    "en": "premarketing",
    "zh": "預先行銷",
    "cat": "商業"
  },
  {
    "en": "postmarketing",
    "zh": "後行銷",
    "cat": "商業"
  },
  {
    "en": "overmarketing",
    "zh": "過度行銷",
    "cat": "商業"
  },
  {
    "en": "undermarketing",
    "zh": "不足行銷",
    "cat": "商業"
  },
  {
    "en": "submarketing",
    "zh": "次/亞行銷",
    "cat": "商業"
  },
  {
    "en": "supermarketing",
    "zh": "超級行銷",
    "cat": "商業"
  },
  {
    "en": "uninvestment",
    "zh": "不投資",
    "cat": "商業"
  },
  {
    "en": "reinvestment",
    "zh": "重新投資",
    "cat": "商業"
  },
  {
    "en": "preinvestment",
    "zh": "預先投資",
    "cat": "商業"
  },
  {
    "en": "postinvestment",
    "zh": "後投資",
    "cat": "商業"
  },
  {
    "en": "overinvestment",
    "zh": "過度投資",
    "cat": "商業"
  },
  {
    "en": "underinvestment",
    "zh": "不足投資",
    "cat": "商業"
  },
  {
    "en": "subinvestment",
    "zh": "次/亞投資",
    "cat": "商業"
  },
  {
    "en": "superinvestment",
    "zh": "超級投資",
    "cat": "商業"
  },
  {
    "en": "unpartnership",
    "zh": "不合作關係",
    "cat": "商業"
  },
  {
    "en": "repartnership",
    "zh": "重新合作關係",
    "cat": "商業"
  },
  {
    "en": "prepartnership",
    "zh": "預先合作關係",
    "cat": "商業"
  },
  {
    "en": "postpartnership",
    "zh": "後合作關係",
    "cat": "商業"
  },
  {
    "en": "overpartnership",
    "zh": "過度合作關係",
    "cat": "商業"
  },
  {
    "en": "underpartnership",
    "zh": "不足合作關係",
    "cat": "商業"
  },
  {
    "en": "subpartnership",
    "zh": "次/亞合作關係",
    "cat": "商業"
  },
  {
    "en": "superpartnership",
    "zh": "超級合作關係",
    "cat": "商業"
  },
  {
    "en": "unclient",
    "zh": "不客戶",
    "cat": "商業"
  },
  {
    "en": "reclient",
    "zh": "重新客戶",
    "cat": "商業"
  },
  {
    "en": "preclient",
    "zh": "預先客戶",
    "cat": "商業"
  },
  {
    "en": "postclient",
    "zh": "後客戶",
    "cat": "商業"
  },
  {
    "en": "overclient",
    "zh": "過度客戶",
    "cat": "商業"
  },
  {
    "en": "underclient",
    "zh": "不足客戶",
    "cat": "商業"
  },
  {
    "en": "subclient",
    "zh": "次/亞客戶",
    "cat": "商業"
  },
  {
    "en": "superclient",
    "zh": "超級客戶",
    "cat": "商業"
  },
  {
    "en": "unpresentation",
    "zh": "不簡報",
    "cat": "商業"
  },
  {
    "en": "representation",
    "zh": "重新簡報",
    "cat": "商業"
  },
  {
    "en": "prepresentation",
    "zh": "預先簡報",
    "cat": "商業"
  },
  {
    "en": "postpresentation",
    "zh": "後簡報",
    "cat": "商業"
  },
  {
    "en": "overpresentation",
    "zh": "過度簡報",
    "cat": "商業"
  },
  {
    "en": "underpresentation",
    "zh": "不足簡報",
    "cat": "商業"
  },
  {
    "en": "subpresentation",
    "zh": "次/亞簡報",
    "cat": "商業"
  },
  {
    "en": "superpresentation",
    "zh": "超級簡報",
    "cat": "商業"
  },
  {
    "en": "undeadline",
    "zh": "不截止日期",
    "cat": "商業"
  },
  {
    "en": "redeadline",
    "zh": "重新截止日期",
    "cat": "商業"
  },
  {
    "en": "predeadline",
    "zh": "預先截止日期",
    "cat": "商業"
  },
  {
    "en": "postdeadline",
    "zh": "後截止日期",
    "cat": "商業"
  },
  {
    "en": "overdeadline",
    "zh": "過度截止日期",
    "cat": "商業"
  },
  {
    "en": "underdeadline",
    "zh": "不足截止日期",
    "cat": "商業"
  },
  {
    "en": "subdeadline",
    "zh": "次/亞截止日期",
    "cat": "商業"
  },
  {
    "en": "superdeadline",
    "zh": "超級截止日期",
    "cat": "商業"
  },
  {
    "en": "unflight",
    "zh": "不航班",
    "cat": "旅遊"
  },
  {
    "en": "reflight",
    "zh": "重新航班",
    "cat": "旅遊"
  },
  {
    "en": "preflight",
    "zh": "預先航班",
    "cat": "旅遊"
  },
  {
    "en": "postflight",
    "zh": "後航班",
    "cat": "旅遊"
  },
  {
    "en": "overflight",
    "zh": "過度航班",
    "cat": "旅遊"
  },
  {
    "en": "underflight",
    "zh": "不足航班",
    "cat": "旅遊"
  },
  {
    "en": "subflight",
    "zh": "次/亞航班",
    "cat": "旅遊"
  },
  {
    "en": "superflight",
    "zh": "超級航班",
    "cat": "旅遊"
  },
  {
    "en": "unbaggage",
    "zh": "不行李",
    "cat": "旅遊"
  },
  {
    "en": "rebaggage",
    "zh": "重新行李",
    "cat": "旅遊"
  },
  {
    "en": "prebaggage",
    "zh": "預先行李",
    "cat": "旅遊"
  },
  {
    "en": "postbaggage",
    "zh": "後行李",
    "cat": "旅遊"
  },
  {
    "en": "overbaggage",
    "zh": "過度行李",
    "cat": "旅遊"
  },
  {
    "en": "underbaggage",
    "zh": "不足行李",
    "cat": "旅遊"
  },
  {
    "en": "subbaggage",
    "zh": "次/亞行李",
    "cat": "旅遊"
  },
  {
    "en": "superbaggage",
    "zh": "超級行李",
    "cat": "旅遊"
  },
  {
    "en": "unpassport",
    "zh": "不護照",
    "cat": "旅遊"
  },
  {
    "en": "repassport",
    "zh": "重新護照",
    "cat": "旅遊"
  },
  {
    "en": "prepassport",
    "zh": "預先護照",
    "cat": "旅遊"
  },
  {
    "en": "postpassport",
    "zh": "後護照",
    "cat": "旅遊"
  },
  {
    "en": "overpassport",
    "zh": "過度護照",
    "cat": "旅遊"
  },
  {
    "en": "underpassport",
    "zh": "不足護照",
    "cat": "旅遊"
  },
  {
    "en": "subpassport",
    "zh": "次/亞護照",
    "cat": "旅遊"
  },
  {
    "en": "superpassport",
    "zh": "超級護照",
    "cat": "旅遊"
  },
  {
    "en": "unaccommodation",
    "zh": "不住宿",
    "cat": "旅遊"
  },
  {
    "en": "reaccommodation",
    "zh": "重新住宿",
    "cat": "旅遊"
  },
  {
    "en": "preaccommodation",
    "zh": "預先住宿",
    "cat": "旅遊"
  },
  {
    "en": "postaccommodation",
    "zh": "後住宿",
    "cat": "旅遊"
  },
  {
    "en": "overaccommodation",
    "zh": "過度住宿",
    "cat": "旅遊"
  },
  {
    "en": "underaccommodation",
    "zh": "不足住宿",
    "cat": "旅遊"
  },
  {
    "en": "subaccommodation",
    "zh": "次/亞住宿",
    "cat": "旅遊"
  },
  {
    "en": "superaccommodation",
    "zh": "超級住宿",
    "cat": "旅遊"
  },
  {
    "en": "undestination",
    "zh": "不目的地",
    "cat": "旅遊"
  },
  {
    "en": "redestination",
    "zh": "重新目的地",
    "cat": "旅遊"
  },
  {
    "en": "predestination",
    "zh": "預先目的地",
    "cat": "旅遊"
  },
  {
    "en": "postdestination",
    "zh": "後目的地",
    "cat": "旅遊"
  },
  {
    "en": "overdestination",
    "zh": "過度目的地",
    "cat": "旅遊"
  },
  {
    "en": "underdestination",
    "zh": "不足目的地",
    "cat": "旅遊"
  },
  {
    "en": "subdestination",
    "zh": "次/亞目的地",
    "cat": "旅遊"
  },
  {
    "en": "superdestination",
    "zh": "超級目的地",
    "cat": "旅遊"
  },
  {
    "en": "unitinerary",
    "zh": "不行程",
    "cat": "旅遊"
  },
  {
    "en": "reitinerary",
    "zh": "重新行程",
    "cat": "旅遊"
  },
  {
    "en": "preitinerary",
    "zh": "預先行程",
    "cat": "旅遊"
  },
  {
    "en": "postitinerary",
    "zh": "後行程",
    "cat": "旅遊"
  },
  {
    "en": "overitinerary",
    "zh": "過度行程",
    "cat": "旅遊"
  },
  {
    "en": "underitinerary",
    "zh": "不足行程",
    "cat": "旅遊"
  },
  {
    "en": "subitinerary",
    "zh": "次/亞行程",
    "cat": "旅遊"
  },
  {
    "en": "superitinerary",
    "zh": "超級行程",
    "cat": "旅遊"
  },
  {
    "en": "untourist",
    "zh": "不遊客",
    "cat": "旅遊"
  },
  {
    "en": "retourist",
    "zh": "重新遊客",
    "cat": "旅遊"
  },
  {
    "en": "pretourist",
    "zh": "預先遊客",
    "cat": "旅遊"
  },
  {
    "en": "posttourist",
    "zh": "後遊客",
    "cat": "旅遊"
  },
  {
    "en": "overtourist",
    "zh": "過度遊客",
    "cat": "旅遊"
  },
  {
    "en": "undertourist",
    "zh": "不足遊客",
    "cat": "旅遊"
  },
  {
    "en": "subtourist",
    "zh": "次/亞遊客",
    "cat": "旅遊"
  },
  {
    "en": "supertourist",
    "zh": "超級遊客",
    "cat": "旅遊"
  },
  {
    "en": "unsouvenir",
    "zh": "不紀念品",
    "cat": "旅遊"
  },
  {
    "en": "resouvenir",
    "zh": "重新紀念品",
    "cat": "旅遊"
  },
  {
    "en": "presouvenir",
    "zh": "預先紀念品",
    "cat": "旅遊"
  },
  {
    "en": "postsouvenir",
    "zh": "後紀念品",
    "cat": "旅遊"
  },
  {
    "en": "oversouvenir",
    "zh": "過度紀念品",
    "cat": "旅遊"
  },
  {
    "en": "undersouvenir",
    "zh": "不足紀念品",
    "cat": "旅遊"
  },
  {
    "en": "subsouvenir",
    "zh": "次/亞紀念品",
    "cat": "旅遊"
  },
  {
    "en": "supersouvenir",
    "zh": "超級紀念品",
    "cat": "旅遊"
  },
  {
    "en": "uncustoms",
    "zh": "不海關",
    "cat": "旅遊"
  },
  {
    "en": "recustoms",
    "zh": "重新海關",
    "cat": "旅遊"
  },
  {
    "en": "precustoms",
    "zh": "預先海關",
    "cat": "旅遊"
  },
  {
    "en": "postcustoms",
    "zh": "後海關",
    "cat": "旅遊"
  },
  {
    "en": "overcustoms",
    "zh": "過度海關",
    "cat": "旅遊"
  },
  {
    "en": "undercustoms",
    "zh": "不足海關",
    "cat": "旅遊"
  },
  {
    "en": "subcustoms",
    "zh": "次/亞海關",
    "cat": "旅遊"
  },
  {
    "en": "supercustoms",
    "zh": "超級海關",
    "cat": "旅遊"
  },
  {
    "en": "unboarding",
    "zh": "不登機",
    "cat": "旅遊"
  },
  {
    "en": "reboarding",
    "zh": "重新登機",
    "cat": "旅遊"
  },
  {
    "en": "preboarding",
    "zh": "預先登機",
    "cat": "旅遊"
  },
  {
    "en": "postboarding",
    "zh": "後登機",
    "cat": "旅遊"
  },
  {
    "en": "overboarding",
    "zh": "過度登機",
    "cat": "旅遊"
  },
  {
    "en": "underboarding",
    "zh": "不足登機",
    "cat": "旅遊"
  },
  {
    "en": "subboarding",
    "zh": "次/亞登機",
    "cat": "旅遊"
  },
  {
    "en": "superboarding",
    "zh": "超級登機",
    "cat": "旅遊"
  },
  {
    "en": "unsymptom",
    "zh": "不症狀",
    "cat": "醫療"
  },
  {
    "en": "resymptom",
    "zh": "重新症狀",
    "cat": "醫療"
  },
  {
    "en": "presymptom",
    "zh": "預先症狀",
    "cat": "醫療"
  },
  {
    "en": "postsymptom",
    "zh": "後症狀",
    "cat": "醫療"
  },
  {
    "en": "oversymptom",
    "zh": "過度症狀",
    "cat": "醫療"
  },
  {
    "en": "undersymptom",
    "zh": "不足症狀",
    "cat": "醫療"
  },
  {
    "en": "subsymptom",
    "zh": "次/亞症狀",
    "cat": "醫療"
  },
  {
    "en": "supersymptom",
    "zh": "超級症狀",
    "cat": "醫療"
  },
  {
    "en": "unprescription",
    "zh": "不處方",
    "cat": "醫療"
  },
  {
    "en": "represcription",
    "zh": "重新處方",
    "cat": "醫療"
  },
  {
    "en": "preprescription",
    "zh": "預先處方",
    "cat": "醫療"
  },
  {
    "en": "postprescription",
    "zh": "後處方",
    "cat": "醫療"
  },
  {
    "en": "overprescription",
    "zh": "過度處方",
    "cat": "醫療"
  },
  {
    "en": "underprescription",
    "zh": "不足處方",
    "cat": "醫療"
  },
  {
    "en": "subprescription",
    "zh": "次/亞處方",
    "cat": "醫療"
  },
  {
    "en": "superprescription",
    "zh": "超級處方",
    "cat": "醫療"
  },
  {
    "en": "unpharmacy",
    "zh": "不藥局",
    "cat": "醫療"
  },
  {
    "en": "repharmacy",
    "zh": "重新藥局",
    "cat": "醫療"
  },
  {
    "en": "prepharmacy",
    "zh": "預先藥局",
    "cat": "醫療"
  },
  {
    "en": "postpharmacy",
    "zh": "後藥局",
    "cat": "醫療"
  },
  {
    "en": "overpharmacy",
    "zh": "過度藥局",
    "cat": "醫療"
  },
  {
    "en": "underpharmacy",
    "zh": "不足藥局",
    "cat": "醫療"
  },
  {
    "en": "subpharmacy",
    "zh": "次/亞藥局",
    "cat": "醫療"
  },
  {
    "en": "superpharmacy",
    "zh": "超級藥局",
    "cat": "醫療"
  },
  {
    "en": "unsurgery",
    "zh": "不手術",
    "cat": "醫療"
  },
  {
    "en": "resurgery",
    "zh": "重新手術",
    "cat": "醫療"
  },
  {
    "en": "presurgery",
    "zh": "預先手術",
    "cat": "醫療"
  },
  {
    "en": "postsurgery",
    "zh": "後手術",
    "cat": "醫療"
  },
  {
    "en": "oversurgery",
    "zh": "過度手術",
    "cat": "醫療"
  },
  {
    "en": "undersurgery",
    "zh": "不足手術",
    "cat": "醫療"
  },
  {
    "en": "subsurgery",
    "zh": "次/亞手術",
    "cat": "醫療"
  },
  {
    "en": "supersurgery",
    "zh": "超級手術",
    "cat": "醫療"
  },
  {
    "en": "unclinic",
    "zh": "不診所",
    "cat": "醫療"
  },
  {
    "en": "reclinic",
    "zh": "重新診所",
    "cat": "醫療"
  },
  {
    "en": "preclinic",
    "zh": "預先診所",
    "cat": "醫療"
  },
  {
    "en": "postclinic",
    "zh": "後診所",
    "cat": "醫療"
  },
  {
    "en": "overclinic",
    "zh": "過度診所",
    "cat": "醫療"
  },
  {
    "en": "underclinic",
    "zh": "不足診所",
    "cat": "醫療"
  },
  {
    "en": "subclinic",
    "zh": "次/亞診所",
    "cat": "醫療"
  },
  {
    "en": "superclinic",
    "zh": "超級診所",
    "cat": "醫療"
  },
  {
    "en": "undiagnosis",
    "zh": "不診斷",
    "cat": "醫療"
  },
  {
    "en": "rediagnosis",
    "zh": "重新診斷",
    "cat": "醫療"
  },
  {
    "en": "prediagnosis",
    "zh": "預先診斷",
    "cat": "醫療"
  },
  {
    "en": "postdiagnosis",
    "zh": "後診斷",
    "cat": "醫療"
  },
  {
    "en": "overdiagnosis",
    "zh": "過度診斷",
    "cat": "醫療"
  },
  {
    "en": "underdiagnosis",
    "zh": "不足診斷",
    "cat": "醫療"
  },
  {
    "en": "subdiagnosis",
    "zh": "次/亞診斷",
    "cat": "醫療"
  },
  {
    "en": "superdiagnosis",
    "zh": "超級診斷",
    "cat": "醫療"
  },
  {
    "en": "untreatment",
    "zh": "不治療",
    "cat": "醫療"
  },
  {
    "en": "retreatment",
    "zh": "重新治療",
    "cat": "醫療"
  },
  {
    "en": "pretreatment",
    "zh": "預先治療",
    "cat": "醫療"
  },
  {
    "en": "posttreatment",
    "zh": "後治療",
    "cat": "醫療"
  },
  {
    "en": "overtreatment",
    "zh": "過度治療",
    "cat": "醫療"
  },
  {
    "en": "undertreatment",
    "zh": "不足治療",
    "cat": "醫療"
  },
  {
    "en": "subtreatment",
    "zh": "次/亞治療",
    "cat": "醫療"
  },
  {
    "en": "supertreatment",
    "zh": "超級治療",
    "cat": "醫療"
  },
  {
    "en": "unvaccine",
    "zh": "不疫苗",
    "cat": "醫療"
  },
  {
    "en": "revaccine",
    "zh": "重新疫苗",
    "cat": "醫療"
  },
  {
    "en": "prevaccine",
    "zh": "預先疫苗",
    "cat": "醫療"
  },
  {
    "en": "postvaccine",
    "zh": "後疫苗",
    "cat": "醫療"
  },
  {
    "en": "overvaccine",
    "zh": "過度疫苗",
    "cat": "醫療"
  },
  {
    "en": "undervaccine",
    "zh": "不足疫苗",
    "cat": "醫療"
  },
  {
    "en": "subvaccine",
    "zh": "次/亞疫苗",
    "cat": "醫療"
  },
  {
    "en": "supervaccine",
    "zh": "超級疫苗",
    "cat": "醫療"
  },
  {
    "en": "uninfection",
    "zh": "不感染",
    "cat": "醫療"
  },
  {
    "en": "reinfection",
    "zh": "重新感染",
    "cat": "醫療"
  },
  {
    "en": "preinfection",
    "zh": "預先感染",
    "cat": "醫療"
  },
  {
    "en": "postinfection",
    "zh": "後感染",
    "cat": "醫療"
  },
  {
    "en": "overinfection",
    "zh": "過度感染",
    "cat": "醫療"
  },
  {
    "en": "underinfection",
    "zh": "不足感染",
    "cat": "醫療"
  },
  {
    "en": "subinfection",
    "zh": "次/亞感染",
    "cat": "醫療"
  },
  {
    "en": "superinfection",
    "zh": "超級感染",
    "cat": "醫療"
  },
  {
    "en": "unemergency",
    "zh": "不急診",
    "cat": "醫療"
  },
  {
    "en": "reemergency",
    "zh": "重新急診",
    "cat": "醫療"
  },
  {
    "en": "preemergency",
    "zh": "預先急診",
    "cat": "醫療"
  },
  {
    "en": "postemergency",
    "zh": "後急診",
    "cat": "醫療"
  },
  {
    "en": "overemergency",
    "zh": "過度急診",
    "cat": "醫療"
  },
  {
    "en": "underemergency",
    "zh": "不足急診",
    "cat": "醫療"
  },
  {
    "en": "subemergency",
    "zh": "次/亞急診",
    "cat": "醫療"
  },
  {
    "en": "superemergency",
    "zh": "超級急診",
    "cat": "醫療"
  },
  {
    "en": "ungrocery",
    "zh": "不雜貨",
    "cat": "日常生活"
  },
  {
    "en": "regrocery",
    "zh": "重新雜貨",
    "cat": "日常生活"
  },
  {
    "en": "pregrocery",
    "zh": "預先雜貨",
    "cat": "日常生活"
  },
  {
    "en": "postgrocery",
    "zh": "後雜貨",
    "cat": "日常生活"
  },
  {
    "en": "overgrocery",
    "zh": "過度雜貨",
    "cat": "日常生活"
  },
  {
    "en": "undergrocery",
    "zh": "不足雜貨",
    "cat": "日常生活"
  },
  {
    "en": "subgrocery",
    "zh": "次/亞雜貨",
    "cat": "日常生活"
  },
  {
    "en": "supergrocery",
    "zh": "超級雜貨",
    "cat": "日常生活"
  },
  {
    "en": "unlaundry",
    "zh": "不洗衣",
    "cat": "日常生活"
  },
  {
    "en": "relaundry",
    "zh": "重新洗衣",
    "cat": "日常生活"
  },
  {
    "en": "prelaundry",
    "zh": "預先洗衣",
    "cat": "日常生活"
  },
  {
    "en": "postlaundry",
    "zh": "後洗衣",
    "cat": "日常生活"
  },
  {
    "en": "overlaundry",
    "zh": "過度洗衣",
    "cat": "日常生活"
  },
  {
    "en": "underlaundry",
    "zh": "不足洗衣",
    "cat": "日常生活"
  },
  {
    "en": "sublaundry",
    "zh": "次/亞洗衣",
    "cat": "日常生活"
  },
  {
    "en": "superlaundry",
    "zh": "超級洗衣",
    "cat": "日常生活"
  },
  {
    "en": "uncommute",
    "zh": "不通勤",
    "cat": "日常生活"
  },
  {
    "en": "recommute",
    "zh": "重新通勤",
    "cat": "日常生活"
  },
  {
    "en": "precommute",
    "zh": "預先通勤",
    "cat": "日常生活"
  },
  {
    "en": "postcommute",
    "zh": "後通勤",
    "cat": "日常生活"
  },
  {
    "en": "overcommute",
    "zh": "過度通勤",
    "cat": "日常生活"
  },
  {
    "en": "undercommute",
    "zh": "不足通勤",
    "cat": "日常生活"
  },
  {
    "en": "subcommute",
    "zh": "次/亞通勤",
    "cat": "日常生活"
  },
  {
    "en": "supercommute",
    "zh": "超級通勤",
    "cat": "日常生活"
  },
  {
    "en": "unrecipe",
    "zh": "不食譜",
    "cat": "日常生活"
  },
  {
    "en": "rerecipe",
    "zh": "重新食譜",
    "cat": "日常生活"
  },
  {
    "en": "prerecipe",
    "zh": "預先食譜",
    "cat": "日常生活"
  },
  {
    "en": "postrecipe",
    "zh": "後食譜",
    "cat": "日常生活"
  },
  {
    "en": "overrecipe",
    "zh": "過度食譜",
    "cat": "日常生活"
  },
  {
    "en": "underrecipe",
    "zh": "不足食譜",
    "cat": "日常生活"
  },
  {
    "en": "subrecipe",
    "zh": "次/亞食譜",
    "cat": "日常生活"
  },
  {
    "en": "superrecipe",
    "zh": "超級食譜",
    "cat": "日常生活"
  },
  {
    "en": "unappliance",
    "zh": "不家電",
    "cat": "日常生活"
  },
  {
    "en": "reappliance",
    "zh": "重新家電",
    "cat": "日常生活"
  },
  {
    "en": "preappliance",
    "zh": "預先家電",
    "cat": "日常生活"
  },
  {
    "en": "postappliance",
    "zh": "後家電",
    "cat": "日常生活"
  },
  {
    "en": "overappliance",
    "zh": "過度家電",
    "cat": "日常生活"
  },
  {
    "en": "underappliance",
    "zh": "不足家電",
    "cat": "日常生活"
  },
  {
    "en": "subappliance",
    "zh": "次/亞家電",
    "cat": "日常生活"
  },
  {
    "en": "superappliance",
    "zh": "超級家電",
    "cat": "日常生活"
  },
  {
    "en": "unfurniture",
    "zh": "不家具",
    "cat": "日常生活"
  },
  {
    "en": "refurniture",
    "zh": "重新家具",
    "cat": "日常生活"
  },
  {
    "en": "prefurniture",
    "zh": "預先家具",
    "cat": "日常生活"
  },
  {
    "en": "postfurniture",
    "zh": "後家具",
    "cat": "日常生活"
  },
  {
    "en": "overfurniture",
    "zh": "過度家具",
    "cat": "日常生活"
  },
  {
    "en": "underfurniture",
    "zh": "不足家具",
    "cat": "日常生活"
  },
  {
    "en": "subfurniture",
    "zh": "次/亞家具",
    "cat": "日常生活"
  },
  {
    "en": "superfurniture",
    "zh": "超級家具",
    "cat": "日常生活"
  },
  {
    "en": "unneighborhood",
    "zh": "不社區",
    "cat": "日常生活"
  },
  {
    "en": "reneighborhood",
    "zh": "重新社區",
    "cat": "日常生活"
  },
  {
    "en": "preneighborhood",
    "zh": "預先社區",
    "cat": "日常生活"
  },
  {
    "en": "postneighborhood",
    "zh": "後社區",
    "cat": "日常生活"
  },
  {
    "en": "overneighborhood",
    "zh": "過度社區",
    "cat": "日常生活"
  },
  {
    "en": "underneighborhood",
    "zh": "不足社區",
    "cat": "日常生活"
  },
  {
    "en": "subneighborhood",
    "zh": "次/亞社區",
    "cat": "日常生活"
  },
  {
    "en": "superneighborhood",
    "zh": "超級社區",
    "cat": "日常生活"
  },
  {
    "en": "unchore",
    "zh": "不家務",
    "cat": "日常生活"
  },
  {
    "en": "rechore",
    "zh": "重新家務",
    "cat": "日常生活"
  },
  {
    "en": "prechore",
    "zh": "預先家務",
    "cat": "日常生活"
  },
  {
    "en": "postchore",
    "zh": "後家務",
    "cat": "日常生活"
  },
  {
    "en": "overchore",
    "zh": "過度家務",
    "cat": "日常生活"
  },
  {
    "en": "underchore",
    "zh": "不足家務",
    "cat": "日常生活"
  },
  {
    "en": "subchore",
    "zh": "次/亞家務",
    "cat": "日常生活"
  },
  {
    "en": "superchore",
    "zh": "超級家務",
    "cat": "日常生活"
  },
  {
    "en": "unhabit",
    "zh": "不習慣",
    "cat": "日常生活"
  },
  {
    "en": "rehabit",
    "zh": "重新習慣",
    "cat": "日常生活"
  },
  {
    "en": "prehabit",
    "zh": "預先習慣",
    "cat": "日常生活"
  },
  {
    "en": "posthabit",
    "zh": "後習慣",
    "cat": "日常生活"
  },
  {
    "en": "overhabit",
    "zh": "過度習慣",
    "cat": "日常生活"
  },
  {
    "en": "underhabit",
    "zh": "不足習慣",
    "cat": "日常生活"
  },
  {
    "en": "subhabit",
    "zh": "次/亞習慣",
    "cat": "日常生活"
  },
  {
    "en": "superhabit",
    "zh": "超級習慣",
    "cat": "日常生活"
  },
  {
    "en": "unroutine",
    "zh": "不日常作息",
    "cat": "日常生活"
  },
  {
    "en": "reroutine",
    "zh": "重新日常作息",
    "cat": "日常生活"
  },
  {
    "en": "preroutine",
    "zh": "預先日常作息",
    "cat": "日常生活"
  },
  {
    "en": "postroutine",
    "zh": "後日常作息",
    "cat": "日常生活"
  },
  {
    "en": "overroutine",
    "zh": "過度日常作息",
    "cat": "日常生活"
  },
  {
    "en": "underroutine",
    "zh": "不足日常作息",
    "cat": "日常生活"
  },
  {
    "en": "subroutine",
    "zh": "次/亞日常作息",
    "cat": "日常生活"
  },
  {
    "en": "superroutine",
    "zh": "超級日常作息",
    "cat": "日常生活"
  },
  {
    "en": "unsoftware",
    "zh": "不軟體",
    "cat": "科技"
  },
  {
    "en": "resoftware",
    "zh": "重新軟體",
    "cat": "科技"
  },
  {
    "en": "presoftware",
    "zh": "預先軟體",
    "cat": "科技"
  },
  {
    "en": "postsoftware",
    "zh": "後軟體",
    "cat": "科技"
  },
  {
    "en": "oversoftware",
    "zh": "過度軟體",
    "cat": "科技"
  },
  {
    "en": "undersoftware",
    "zh": "不足軟體",
    "cat": "科技"
  },
  {
    "en": "subsoftware",
    "zh": "次/亞軟體",
    "cat": "科技"
  },
  {
    "en": "supersoftware",
    "zh": "超級軟體",
    "cat": "科技"
  },
  {
    "en": "unhardware",
    "zh": "不硬體",
    "cat": "科技"
  },
  {
    "en": "rehardware",
    "zh": "重新硬體",
    "cat": "科技"
  },
  {
    "en": "prehardware",
    "zh": "預先硬體",
    "cat": "科技"
  },
  {
    "en": "posthardware",
    "zh": "後硬體",
    "cat": "科技"
  },
  {
    "en": "overhardware",
    "zh": "過度硬體",
    "cat": "科技"
  },
  {
    "en": "underhardware",
    "zh": "不足硬體",
    "cat": "科技"
  },
  {
    "en": "subhardware",
    "zh": "次/亞硬體",
    "cat": "科技"
  },
  {
    "en": "superhardware",
    "zh": "超級硬體",
    "cat": "科技"
  },
  {
    "en": "undatabase",
    "zh": "不資料庫",
    "cat": "科技"
  },
  {
    "en": "redatabase",
    "zh": "重新資料庫",
    "cat": "科技"
  },
  {
    "en": "predatabase",
    "zh": "預先資料庫",
    "cat": "科技"
  },
  {
    "en": "postdatabase",
    "zh": "後資料庫",
    "cat": "科技"
  },
  {
    "en": "overdatabase",
    "zh": "過度資料庫",
    "cat": "科技"
  },
  {
    "en": "underdatabase",
    "zh": "不足資料庫",
    "cat": "科技"
  },
  {
    "en": "subdatabase",
    "zh": "次/亞資料庫",
    "cat": "科技"
  },
  {
    "en": "superdatabase",
    "zh": "超級資料庫",
    "cat": "科技"
  },
  {
    "en": "unnetwork",
    "zh": "不網路",
    "cat": "科技"
  },
  {
    "en": "renetwork",
    "zh": "重新網路",
    "cat": "科技"
  },
  {
    "en": "prenetwork",
    "zh": "預先網路",
    "cat": "科技"
  },
  {
    "en": "postnetwork",
    "zh": "後網路",
    "cat": "科技"
  },
  {
    "en": "overnetwork",
    "zh": "過度網路",
    "cat": "科技"
  },
  {
    "en": "undernetwork",
    "zh": "不足網路",
    "cat": "科技"
  },
  {
    "en": "subnetwork",
    "zh": "次/亞網路",
    "cat": "科技"
  },
  {
    "en": "supernetwork",
    "zh": "超級網路",
    "cat": "科技"
  },
  {
    "en": "unalgorithm",
    "zh": "不演算法",
    "cat": "科技"
  },
  {
    "en": "realgorithm",
    "zh": "重新演算法",
    "cat": "科技"
  },
  {
    "en": "prealgorithm",
    "zh": "預先演算法",
    "cat": "科技"
  },
  {
    "en": "postalgorithm",
    "zh": "後演算法",
    "cat": "科技"
  },
  {
    "en": "overalgorithm",
    "zh": "過度演算法",
    "cat": "科技"
  },
  {
    "en": "underalgorithm",
    "zh": "不足演算法",
    "cat": "科技"
  },
  {
    "en": "subalgorithm",
    "zh": "次/亞演算法",
    "cat": "科技"
  },
  {
    "en": "superalgorithm",
    "zh": "超級演算法",
    "cat": "科技"
  },
  {
    "en": "undeveloper",
    "zh": "不開發者",
    "cat": "科技"
  },
  {
    "en": "redeveloper",
    "zh": "重新開發者",
    "cat": "科技"
  },
  {
    "en": "predeveloper",
    "zh": "預先開發者",
    "cat": "科技"
  },
  {
    "en": "postdeveloper",
    "zh": "後開發者",
    "cat": "科技"
  },
  {
    "en": "overdeveloper",
    "zh": "過度開發者",
    "cat": "科技"
  },
  {
    "en": "underdeveloper",
    "zh": "不足開發者",
    "cat": "科技"
  },
  {
    "en": "subdeveloper",
    "zh": "次/亞開發者",
    "cat": "科技"
  },
  {
    "en": "superdeveloper",
    "zh": "超級開發者",
    "cat": "科技"
  },
  {
    "en": "unapplication",
    "zh": "不應用程式",
    "cat": "科技"
  },
  {
    "en": "reapplication",
    "zh": "重新應用程式",
    "cat": "科技"
  },
  {
    "en": "preapplication",
    "zh": "預先應用程式",
    "cat": "科技"
  },
  {
    "en": "postapplication",
    "zh": "後應用程式",
    "cat": "科技"
  },
  {
    "en": "overapplication",
    "zh": "過度應用程式",
    "cat": "科技"
  },
  {
    "en": "underapplication",
    "zh": "不足應用程式",
    "cat": "科技"
  },
  {
    "en": "subapplication",
    "zh": "次/亞應用程式",
    "cat": "科技"
  },
  {
    "en": "superapplication",
    "zh": "超級應用程式",
    "cat": "科技"
  },
  {
    "en": "unserver",
    "zh": "不伺服器",
    "cat": "科技"
  },
  {
    "en": "reserver",
    "zh": "重新伺服器",
    "cat": "科技"
  },
  {
    "en": "preserver",
    "zh": "預先伺服器",
    "cat": "科技"
  },
  {
    "en": "postserver",
    "zh": "後伺服器",
    "cat": "科技"
  },
  {
    "en": "overserver",
    "zh": "過度伺服器",
    "cat": "科技"
  },
  {
    "en": "underserver",
    "zh": "不足伺服器",
    "cat": "科技"
  },
  {
    "en": "subserver",
    "zh": "次/亞伺服器",
    "cat": "科技"
  },
  {
    "en": "superserver",
    "zh": "超級伺服器",
    "cat": "科技"
  },
  {
    "en": "uncloud",
    "zh": "不雲端",
    "cat": "科技"
  },
  {
    "en": "recloud",
    "zh": "重新雲端",
    "cat": "科技"
  },
  {
    "en": "precloud",
    "zh": "預先雲端",
    "cat": "科技"
  },
  {
    "en": "postcloud",
    "zh": "後雲端",
    "cat": "科技"
  },
  {
    "en": "overcloud",
    "zh": "過度雲端",
    "cat": "科技"
  },
  {
    "en": "undercloud",
    "zh": "不足雲端",
    "cat": "科技"
  },
  {
    "en": "subcloud",
    "zh": "次/亞雲端",
    "cat": "科技"
  },
  {
    "en": "supercloud",
    "zh": "超級雲端",
    "cat": "科技"
  },
  {
    "en": "unsecurity",
    "zh": "不安全",
    "cat": "科技"
  },
  {
    "en": "resecurity",
    "zh": "重新安全",
    "cat": "科技"
  },
  {
    "en": "presecurity",
    "zh": "預先安全",
    "cat": "科技"
  },
  {
    "en": "postsecurity",
    "zh": "後安全",
    "cat": "科技"
  },
  {
    "en": "oversecurity",
    "zh": "過度安全",
    "cat": "科技"
  },
  {
    "en": "undersecurity",
    "zh": "不足安全",
    "cat": "科技"
  },
  {
    "en": "subsecurity",
    "zh": "次/亞安全",
    "cat": "科技"
  },
  {
    "en": "supersecurity",
    "zh": "超級安全",
    "cat": "科技"
  },
  {
    "en": "unchill",
    "zh": "不放鬆",
    "cat": "俚語"
  },
  {
    "en": "rechill",
    "zh": "重新放鬆",
    "cat": "俚語"
  },
  {
    "en": "prechill",
    "zh": "預先放鬆",
    "cat": "俚語"
  },
  {
    "en": "postchill",
    "zh": "後放鬆",
    "cat": "俚語"
  },
  {
    "en": "overchill",
    "zh": "過度放鬆",
    "cat": "俚語"
  },
  {
    "en": "underchill",
    "zh": "不足放鬆",
    "cat": "俚語"
  },
  {
    "en": "subchill",
    "zh": "次/亞放鬆",
    "cat": "俚語"
  },
  {
    "en": "superchill",
    "zh": "超級放鬆",
    "cat": "俚語"
  },
  {
    "en": "unflex",
    "zh": "不炫耀",
    "cat": "俚語"
  },
  {
    "en": "reflex",
    "zh": "重新炫耀",
    "cat": "俚語"
  },
  {
    "en": "preflex",
    "zh": "預先炫耀",
    "cat": "俚語"
  },
  {
    "en": "postflex",
    "zh": "後炫耀",
    "cat": "俚語"
  },
  {
    "en": "overflex",
    "zh": "過度炫耀",
    "cat": "俚語"
  },
  {
    "en": "underflex",
    "zh": "不足炫耀",
    "cat": "俚語"
  },
  {
    "en": "subflex",
    "zh": "次/亞炫耀",
    "cat": "俚語"
  },
  {
    "en": "superflex",
    "zh": "超級炫耀",
    "cat": "俚語"
  },
  {
    "en": "unghost",
    "zh": "不神隱",
    "cat": "俚語"
  },
  {
    "en": "reghost",
    "zh": "重新神隱",
    "cat": "俚語"
  },
  {
    "en": "preghost",
    "zh": "預先神隱",
    "cat": "俚語"
  },
  {
    "en": "postghost",
    "zh": "後神隱",
    "cat": "俚語"
  },
  {
    "en": "overghost",
    "zh": "過度神隱",
    "cat": "俚語"
  },
  {
    "en": "underghost",
    "zh": "不足神隱",
    "cat": "俚語"
  },
  {
    "en": "subghost",
    "zh": "次/亞神隱",
    "cat": "俚語"
  },
  {
    "en": "superghost",
    "zh": "超級神隱",
    "cat": "俚語"
  },
  {
    "en": "unsalty",
    "zh": "不惱羞",
    "cat": "俚語"
  },
  {
    "en": "resalty",
    "zh": "重新惱羞",
    "cat": "俚語"
  },
  {
    "en": "presalty",
    "zh": "預先惱羞",
    "cat": "俚語"
  },
  {
    "en": "postsalty",
    "zh": "後惱羞",
    "cat": "俚語"
  },
  {
    "en": "oversalty",
    "zh": "過度惱羞",
    "cat": "俚語"
  },
  {
    "en": "undersalty",
    "zh": "不足惱羞",
    "cat": "俚語"
  },
  {
    "en": "subsalty",
    "zh": "次/亞惱羞",
    "cat": "俚語"
  },
  {
    "en": "supersalty",
    "zh": "超級惱羞",
    "cat": "俚語"
  },
  {
    "en": "unshady",
    "zh": "不可疑的",
    "cat": "俚語"
  },
  {
    "en": "reshady",
    "zh": "重新可疑的",
    "cat": "俚語"
  },
  {
    "en": "preshady",
    "zh": "預先可疑的",
    "cat": "俚語"
  },
  {
    "en": "postshady",
    "zh": "後可疑的",
    "cat": "俚語"
  },
  {
    "en": "overshady",
    "zh": "過度可疑的",
    "cat": "俚語"
  },
  {
    "en": "undershady",
    "zh": "不足可疑的",
    "cat": "俚語"
  },
  {
    "en": "subshady",
    "zh": "次/亞可疑的",
    "cat": "俚語"
  },
  {
    "en": "supershady",
    "zh": "超級可疑的",
    "cat": "俚語"
  },
  {
    "en": "unlit",
    "zh": "不超讚",
    "cat": "俚語"
  },
  {
    "en": "relit",
    "zh": "重新超讚",
    "cat": "俚語"
  },
  {
    "en": "prelit",
    "zh": "預先超讚",
    "cat": "俚語"
  },
  {
    "en": "postlit",
    "zh": "後超讚",
    "cat": "俚語"
  },
  {
    "en": "overlit",
    "zh": "過度超讚",
    "cat": "俚語"
  },
  {
    "en": "underlit",
    "zh": "不足超讚",
    "cat": "俚語"
  },
  {
    "en": "sublit",
    "zh": "次/亞超讚",
    "cat": "俚語"
  },
  {
    "en": "superlit",
    "zh": "超級超讚",
    "cat": "俚語"
  },
  {
    "en": "undope",
    "zh": "不酷",
    "cat": "俚語"
  },
  {
    "en": "redope",
    "zh": "重新酷",
    "cat": "俚語"
  },
  {
    "en": "predope",
    "zh": "預先酷",
    "cat": "俚語"
  },
  {
    "en": "postdope",
    "zh": "後酷",
    "cat": "俚語"
  },
  {
    "en": "overdope",
    "zh": "過度酷",
    "cat": "俚語"
  },
  {
    "en": "underdope",
    "zh": "不足酷",
    "cat": "俚語"
  },
  {
    "en": "subdope",
    "zh": "次/亞酷",
    "cat": "俚語"
  },
  {
    "en": "superdope",
    "zh": "超級酷",
    "cat": "俚語"
  },
  {
    "en": "ungoat",
    "zh": "不史上最棒",
    "cat": "俚語"
  },
  {
    "en": "regoat",
    "zh": "重新史上最棒",
    "cat": "俚語"
  },
  {
    "en": "pregoat",
    "zh": "預先史上最棒",
    "cat": "俚語"
  },
  {
    "en": "postgoat",
    "zh": "後史上最棒",
    "cat": "俚語"
  },
  {
    "en": "overgoat",
    "zh": "過度史上最棒",
    "cat": "俚語"
  },
  {
    "en": "undergoat",
    "zh": "不足史上最棒",
    "cat": "俚語"
  },
  {
    "en": "subgoat",
    "zh": "次/亞史上最棒",
    "cat": "俚語"
  },
  {
    "en": "supergoat",
    "zh": "超級史上最棒",
    "cat": "俚語"
  },
  {
    "en": "uncringe",
    "zh": "不尷尬",
    "cat": "俚語"
  },
  {
    "en": "recringe",
    "zh": "重新尷尬",
    "cat": "俚語"
  },
  {
    "en": "precringe",
    "zh": "預先尷尬",
    "cat": "俚語"
  },
  {
    "en": "postcringe",
    "zh": "後尷尬",
    "cat": "俚語"
  },
  {
    "en": "overcringe",
    "zh": "過度尷尬",
    "cat": "俚語"
  },
  {
    "en": "undercringe",
    "zh": "不足尷尬",
    "cat": "俚語"
  },
  {
    "en": "subcringe",
    "zh": "次/亞尷尬",
    "cat": "俚語"
  },
  {
    "en": "supercringe",
    "zh": "超級尷尬",
    "cat": "俚語"
  },
  {
    "en": "unbet",
    "zh": "不沒問題",
    "cat": "俚語"
  },
  {
    "en": "rebet",
    "zh": "重新沒問題",
    "cat": "俚語"
  },
  {
    "en": "prebet",
    "zh": "預先沒問題",
    "cat": "俚語"
  },
  {
    "en": "postbet",
    "zh": "後沒問題",
    "cat": "俚語"
  },
  {
    "en": "overbet",
    "zh": "過度沒問題",
    "cat": "俚語"
  },
  {
    "en": "underbet",
    "zh": "不足沒問題",
    "cat": "俚語"
  },
  {
    "en": "subbet",
    "zh": "次/亞沒問題",
    "cat": "俚語"
  },
  {
    "en": "superbet",
    "zh": "超級沒問題",
    "cat": "俚語"
  },
  {
    "en": "unanxious",
    "zh": "不焦慮的",
    "cat": "情緒"
  },
  {
    "en": "reanxious",
    "zh": "重新焦慮的",
    "cat": "情緒"
  },
  {
    "en": "preanxious",
    "zh": "預先焦慮的",
    "cat": "情緒"
  },
  {
    "en": "postanxious",
    "zh": "後焦慮的",
    "cat": "情緒"
  },
  {
    "en": "overanxious",
    "zh": "過度焦慮的",
    "cat": "情緒"
  },
  {
    "en": "underanxious",
    "zh": "不足焦慮的",
    "cat": "情緒"
  },
  {
    "en": "subanxious",
    "zh": "次/亞焦慮的",
    "cat": "情緒"
  },
  {
    "en": "superanxious",
    "zh": "超級焦慮的",
    "cat": "情緒"
  },
  {
    "en": "unthrilled",
    "zh": "不非常興奮的",
    "cat": "情緒"
  },
  {
    "en": "rethrilled",
    "zh": "重新非常興奮的",
    "cat": "情緒"
  },
  {
    "en": "prethrilled",
    "zh": "預先非常興奮的",
    "cat": "情緒"
  },
  {
    "en": "postthrilled",
    "zh": "後非常興奮的",
    "cat": "情緒"
  },
  {
    "en": "overthrilled",
    "zh": "過度非常興奮的",
    "cat": "情緒"
  },
  {
    "en": "underthrilled",
    "zh": "不足非常興奮的",
    "cat": "情緒"
  },
  {
    "en": "subthrilled",
    "zh": "次/亞非常興奮的",
    "cat": "情緒"
  },
  {
    "en": "superthrilled",
    "zh": "超級非常興奮的",
    "cat": "情緒"
  },
  {
    "en": "undepressed",
    "zh": "不沮喪的",
    "cat": "情緒"
  },
  {
    "en": "redepressed",
    "zh": "重新沮喪的",
    "cat": "情緒"
  },
  {
    "en": "predepressed",
    "zh": "預先沮喪的",
    "cat": "情緒"
  },
  {
    "en": "postdepressed",
    "zh": "後沮喪的",
    "cat": "情緒"
  },
  {
    "en": "overdepressed",
    "zh": "過度沮喪的",
    "cat": "情緒"
  },
  {
    "en": "underdepressed",
    "zh": "不足沮喪的",
    "cat": "情緒"
  },
  {
    "en": "subdepressed",
    "zh": "次/亞沮喪的",
    "cat": "情緒"
  },
  {
    "en": "superdepressed",
    "zh": "超級沮喪的",
    "cat": "情緒"
  },
  {
    "en": "ungrateful",
    "zh": "不感激的",
    "cat": "情緒"
  },
  {
    "en": "regrateful",
    "zh": "重新感激的",
    "cat": "情緒"
  },
  {
    "en": "pregrateful",
    "zh": "預先感激的",
    "cat": "情緒"
  },
  {
    "en": "postgrateful",
    "zh": "後感激的",
    "cat": "情緒"
  },
  {
    "en": "overgrateful",
    "zh": "過度感激的",
    "cat": "情緒"
  },
  {
    "en": "undergrateful",
    "zh": "不足感激的",
    "cat": "情緒"
  },
  {
    "en": "subgrateful",
    "zh": "次/亞感激的",
    "cat": "情緒"
  },
  {
    "en": "supergrateful",
    "zh": "超級感激的",
    "cat": "情緒"
  },
  {
    "en": "unfrustrated",
    "zh": "不挫折的",
    "cat": "情緒"
  },
  {
    "en": "refrustrated",
    "zh": "重新挫折的",
    "cat": "情緒"
  },
  {
    "en": "prefrustrated",
    "zh": "預先挫折的",
    "cat": "情緒"
  },
  {
    "en": "postfrustrated",
    "zh": "後挫折的",
    "cat": "情緒"
  },
  {
    "en": "overfrustrated",
    "zh": "過度挫折的",
    "cat": "情緒"
  },
  {
    "en": "underfrustrated",
    "zh": "不足挫折的",
    "cat": "情緒"
  },
  {
    "en": "subfrustrated",
    "zh": "次/亞挫折的",
    "cat": "情緒"
  },
  {
    "en": "superfrustrated",
    "zh": "超級挫折的",
    "cat": "情緒"
  },
  {
    "en": "unoverwhelmed",
    "zh": "不不知所措的",
    "cat": "情緒"
  },
  {
    "en": "reoverwhelmed",
    "zh": "重新不知所措的",
    "cat": "情緒"
  },
  {
    "en": "preoverwhelmed",
    "zh": "預先不知所措的",
    "cat": "情緒"
  },
  {
    "en": "postoverwhelmed",
    "zh": "後不知所措的",
    "cat": "情緒"
  },
  {
    "en": "overoverwhelmed",
    "zh": "過度不知所措的",
    "cat": "情緒"
  },
  {
    "en": "underoverwhelmed",
    "zh": "不足不知所措的",
    "cat": "情緒"
  },
  {
    "en": "suboverwhelmed",
    "zh": "次/亞不知所措的",
    "cat": "情緒"
  },
  {
    "en": "superoverwhelmed",
    "zh": "超級不知所措的",
    "cat": "情緒"
  },
  {
    "en": "unrelieved",
    "zh": "不鬆了一口氣的",
    "cat": "情緒"
  },
  {
    "en": "rerelieved",
    "zh": "重新鬆了一口氣的",
    "cat": "情緒"
  },
  {
    "en": "prerelieved",
    "zh": "預先鬆了一口氣的",
    "cat": "情緒"
  },
  {
    "en": "postrelieved",
    "zh": "後鬆了一口氣的",
    "cat": "情緒"
  },
  {
    "en": "overrelieved",
    "zh": "過度鬆了一口氣的",
    "cat": "情緒"
  },
  {
    "en": "underrelieved",
    "zh": "不足鬆了一口氣的",
    "cat": "情緒"
  },
  {
    "en": "subrelieved",
    "zh": "次/亞鬆了一口氣的",
    "cat": "情緒"
  },
  {
    "en": "superrelieved",
    "zh": "超級鬆了一口氣的",
    "cat": "情緒"
  },
  {
    "en": "unjealous",
    "zh": "不嫉妒的",
    "cat": "情緒"
  },
  {
    "en": "rejealous",
    "zh": "重新嫉妒的",
    "cat": "情緒"
  },
  {
    "en": "prejealous",
    "zh": "預先嫉妒的",
    "cat": "情緒"
  },
  {
    "en": "postjealous",
    "zh": "後嫉妒的",
    "cat": "情緒"
  },
  {
    "en": "overjealous",
    "zh": "過度嫉妒的",
    "cat": "情緒"
  },
  {
    "en": "underjealous",
    "zh": "不足嫉妒的",
    "cat": "情緒"
  },
  {
    "en": "subjealous",
    "zh": "次/亞嫉妒的",
    "cat": "情緒"
  },
  {
    "en": "superjealous",
    "zh": "超級嫉妒的",
    "cat": "情緒"
  },
  {
    "en": "unfurious",
    "zh": "不狂怒的",
    "cat": "情緒"
  },
  {
    "en": "refurious",
    "zh": "重新狂怒的",
    "cat": "情緒"
  },
  {
    "en": "prefurious",
    "zh": "預先狂怒的",
    "cat": "情緒"
  },
  {
    "en": "postfurious",
    "zh": "後狂怒的",
    "cat": "情緒"
  },
  {
    "en": "overfurious",
    "zh": "過度狂怒的",
    "cat": "情緒"
  },
  {
    "en": "underfurious",
    "zh": "不足狂怒的",
    "cat": "情緒"
  },
  {
    "en": "subfurious",
    "zh": "次/亞狂怒的",
    "cat": "情緒"
  },
  {
    "en": "superfurious",
    "zh": "超級狂怒的",
    "cat": "情緒"
  },
  {
    "en": "unsympathetic",
    "zh": "不有同情心的",
    "cat": "情緒"
  },
  {
    "en": "resympathetic",
    "zh": "重新有同情心的",
    "cat": "情緒"
  },
  {
    "en": "presympathetic",
    "zh": "預先有同情心的",
    "cat": "情緒"
  },
  {
    "en": "postsympathetic",
    "zh": "後有同情心的",
    "cat": "情緒"
  },
  {
    "en": "oversympathetic",
    "zh": "過度有同情心的",
    "cat": "情緒"
  },
  {
    "en": "undersympathetic",
    "zh": "不足有同情心的",
    "cat": "情緒"
  },
  {
    "en": "subsympathetic",
    "zh": "次/亞有同情心的",
    "cat": "情緒"
  },
  {
    "en": "supersympathetic",
    "zh": "超級有同情心的",
    "cat": "情緒"
  },
  {
    "en": "untournament",
    "zh": "不錦標賽",
    "cat": "運動"
  },
  {
    "en": "retournament",
    "zh": "重新錦標賽",
    "cat": "運動"
  },
  {
    "en": "pretournament",
    "zh": "預先錦標賽",
    "cat": "運動"
  },
  {
    "en": "posttournament",
    "zh": "後錦標賽",
    "cat": "運動"
  },
  {
    "en": "overtournament",
    "zh": "過度錦標賽",
    "cat": "運動"
  },
  {
    "en": "undertournament",
    "zh": "不足錦標賽",
    "cat": "運動"
  },
  {
    "en": "subtournament",
    "zh": "次/亞錦標賽",
    "cat": "運動"
  },
  {
    "en": "supertournament",
    "zh": "超級錦標賽",
    "cat": "運動"
  },
  {
    "en": "unathlete",
    "zh": "不運動員",
    "cat": "運動"
  },
  {
    "en": "reathlete",
    "zh": "重新運動員",
    "cat": "運動"
  },
  {
    "en": "preathlete",
    "zh": "預先運動員",
    "cat": "運動"
  },
  {
    "en": "postathlete",
    "zh": "後運動員",
    "cat": "運動"
  },
  {
    "en": "overathlete",
    "zh": "過度運動員",
    "cat": "運動"
  },
  {
    "en": "underathlete",
    "zh": "不足運動員",
    "cat": "運動"
  },
  {
    "en": "subathlete",
    "zh": "次/亞運動員",
    "cat": "運動"
  },
  {
    "en": "superathlete",
    "zh": "超級運動員",
    "cat": "運動"
  },
  {
    "en": "unstadium",
    "zh": "不體育場",
    "cat": "運動"
  },
  {
    "en": "restadium",
    "zh": "重新體育場",
    "cat": "運動"
  },
  {
    "en": "prestadium",
    "zh": "預先體育場",
    "cat": "運動"
  },
  {
    "en": "poststadium",
    "zh": "後體育場",
    "cat": "運動"
  },
  {
    "en": "overstadium",
    "zh": "過度體育場",
    "cat": "運動"
  },
  {
    "en": "understadium",
    "zh": "不足體育場",
    "cat": "運動"
  },
  {
    "en": "substadium",
    "zh": "次/亞體育場",
    "cat": "運動"
  },
  {
    "en": "superstadium",
    "zh": "超級體育場",
    "cat": "運動"
  },
  {
    "en": "unchampionship",
    "zh": "不冠軍賽",
    "cat": "運動"
  },
  {
    "en": "rechampionship",
    "zh": "重新冠軍賽",
    "cat": "運動"
  },
  {
    "en": "prechampionship",
    "zh": "預先冠軍賽",
    "cat": "運動"
  },
  {
    "en": "postchampionship",
    "zh": "後冠軍賽",
    "cat": "運動"
  },
  {
    "en": "overchampionship",
    "zh": "過度冠軍賽",
    "cat": "運動"
  },
  {
    "en": "underchampionship",
    "zh": "不足冠軍賽",
    "cat": "運動"
  },
  {
    "en": "subchampionship",
    "zh": "次/亞冠軍賽",
    "cat": "運動"
  },
  {
    "en": "superchampionship",
    "zh": "超級冠軍賽",
    "cat": "運動"
  },
  {
    "en": "unreferee",
    "zh": "不裁判",
    "cat": "運動"
  },
  {
    "en": "rereferee",
    "zh": "重新裁判",
    "cat": "運動"
  },
  {
    "en": "prereferee",
    "zh": "預先裁判",
    "cat": "運動"
  },
  {
    "en": "postreferee",
    "zh": "後裁判",
    "cat": "運動"
  },
  {
    "en": "overreferee",
    "zh": "過度裁判",
    "cat": "運動"
  },
  {
    "en": "underreferee",
    "zh": "不足裁判",
    "cat": "運動"
  },
  {
    "en": "subreferee",
    "zh": "次/亞裁判",
    "cat": "運動"
  },
  {
    "en": "superreferee",
    "zh": "超級裁判",
    "cat": "運動"
  },
  {
    "en": "uncoach",
    "zh": "不教練",
    "cat": "運動"
  },
  {
    "en": "recoach",
    "zh": "重新教練",
    "cat": "運動"
  },
  {
    "en": "precoach",
    "zh": "預先教練",
    "cat": "運動"
  },
  {
    "en": "postcoach",
    "zh": "後教練",
    "cat": "運動"
  },
  {
    "en": "overcoach",
    "zh": "過度教練",
    "cat": "運動"
  },
  {
    "en": "undercoach",
    "zh": "不足教練",
    "cat": "運動"
  },
  {
    "en": "subcoach",
    "zh": "次/亞教練",
    "cat": "運動"
  },
  {
    "en": "supercoach",
    "zh": "超級教練",
    "cat": "運動"
  },
  {
    "en": "undefense",
    "zh": "不防守",
    "cat": "運動"
  },
  {
    "en": "redefense",
    "zh": "重新防守",
    "cat": "運動"
  },
  {
    "en": "predefense",
    "zh": "預先防守",
    "cat": "運動"
  },
  {
    "en": "postdefense",
    "zh": "後防守",
    "cat": "運動"
  },
  {
    "en": "overdefense",
    "zh": "過度防守",
    "cat": "運動"
  },
  {
    "en": "underdefense",
    "zh": "不足防守",
    "cat": "運動"
  },
  {
    "en": "subdefense",
    "zh": "次/亞防守",
    "cat": "運動"
  },
  {
    "en": "superdefense",
    "zh": "超級防守",
    "cat": "運動"
  },
  {
    "en": "unoffense",
    "zh": "不進攻",
    "cat": "運動"
  },
  {
    "en": "reoffense",
    "zh": "重新進攻",
    "cat": "運動"
  },
  {
    "en": "preoffense",
    "zh": "預先進攻",
    "cat": "運動"
  },
  {
    "en": "postoffense",
    "zh": "後進攻",
    "cat": "運動"
  },
  {
    "en": "overoffense",
    "zh": "過度進攻",
    "cat": "運動"
  },
  {
    "en": "underoffense",
    "zh": "不足進攻",
    "cat": "運動"
  },
  {
    "en": "suboffense",
    "zh": "次/亞進攻",
    "cat": "運動"
  },
  {
    "en": "superoffense",
    "zh": "超級進攻",
    "cat": "運動"
  },
  {
    "en": "unpenalty",
    "zh": "不罰則",
    "cat": "運動"
  },
  {
    "en": "repenalty",
    "zh": "重新罰則",
    "cat": "運動"
  },
  {
    "en": "prepenalty",
    "zh": "預先罰則",
    "cat": "運動"
  },
  {
    "en": "postpenalty",
    "zh": "後罰則",
    "cat": "運動"
  },
  {
    "en": "overpenalty",
    "zh": "過度罰則",
    "cat": "運動"
  },
  {
    "en": "underpenalty",
    "zh": "不足罰則",
    "cat": "運動"
  },
  {
    "en": "subpenalty",
    "zh": "次/亞罰則",
    "cat": "運動"
  },
  {
    "en": "superpenalty",
    "zh": "超級罰則",
    "cat": "運動"
  },
  {
    "en": "untackle",
    "zh": "不擒抱/抄截",
    "cat": "運動"
  },
  {
    "en": "retackle",
    "zh": "重新擒抱/抄截",
    "cat": "運動"
  },
  {
    "en": "pretackle",
    "zh": "預先擒抱/抄截",
    "cat": "運動"
  },
  {
    "en": "posttackle",
    "zh": "後擒抱/抄截",
    "cat": "運動"
  },
  {
    "en": "overtackle",
    "zh": "過度擒抱/抄截",
    "cat": "運動"
  },
  {
    "en": "undertackle",
    "zh": "不足擒抱/抄截",
    "cat": "運動"
  },
  {
    "en": "subtackle",
    "zh": "次/亞擒抱/抄截",
    "cat": "運動"
  },
  {
    "en": "supertackle",
    "zh": "超級擒抱/抄截",
    "cat": "運動"
  },
  {
    "en": "undiscount",
    "zh": "不折扣",
    "cat": "購物"
  },
  {
    "en": "rediscount",
    "zh": "重新折扣",
    "cat": "購物"
  },
  {
    "en": "prediscount",
    "zh": "預先折扣",
    "cat": "購物"
  },
  {
    "en": "postdiscount",
    "zh": "後折扣",
    "cat": "購物"
  },
  {
    "en": "overdiscount",
    "zh": "過度折扣",
    "cat": "購物"
  },
  {
    "en": "underdiscount",
    "zh": "不足折扣",
    "cat": "購物"
  },
  {
    "en": "subdiscount",
    "zh": "次/亞折扣",
    "cat": "購物"
  },
  {
    "en": "superdiscount",
    "zh": "超級折扣",
    "cat": "購物"
  },
  {
    "en": "unreceipt",
    "zh": "不收據",
    "cat": "購物"
  },
  {
    "en": "rereceipt",
    "zh": "重新收據",
    "cat": "購物"
  },
  {
    "en": "prereceipt",
    "zh": "預先收據",
    "cat": "購物"
  },
  {
    "en": "postreceipt",
    "zh": "後收據",
    "cat": "購物"
  },
  {
    "en": "overreceipt",
    "zh": "過度收據",
    "cat": "購物"
  },
  {
    "en": "underreceipt",
    "zh": "不足收據",
    "cat": "購物"
  },
  {
    "en": "subreceipt",
    "zh": "次/亞收據",
    "cat": "購物"
  },
  {
    "en": "superreceipt",
    "zh": "超級收據",
    "cat": "購物"
  },
  {
    "en": "unrefund",
    "zh": "不退款",
    "cat": "購物"
  },
  {
    "en": "rerefund",
    "zh": "重新退款",
    "cat": "購物"
  },
  {
    "en": "prerefund",
    "zh": "預先退款",
    "cat": "購物"
  },
  {
    "en": "postrefund",
    "zh": "後退款",
    "cat": "購物"
  },
  {
    "en": "overrefund",
    "zh": "過度退款",
    "cat": "購物"
  },
  {
    "en": "underrefund",
    "zh": "不足退款",
    "cat": "購物"
  },
  {
    "en": "subrefund",
    "zh": "次/亞退款",
    "cat": "購物"
  },
  {
    "en": "superrefund",
    "zh": "超級退款",
    "cat": "購物"
  },
  {
    "en": "uncashier",
    "zh": "不收銀員",
    "cat": "購物"
  },
  {
    "en": "recashier",
    "zh": "重新收銀員",
    "cat": "購物"
  },
  {
    "en": "precashier",
    "zh": "預先收銀員",
    "cat": "購物"
  },
  {
    "en": "postcashier",
    "zh": "後收銀員",
    "cat": "購物"
  },
  {
    "en": "overcashier",
    "zh": "過度收銀員",
    "cat": "購物"
  },
  {
    "en": "undercashier",
    "zh": "不足收銀員",
    "cat": "購物"
  },
  {
    "en": "subcashier",
    "zh": "次/亞收銀員",
    "cat": "購物"
  },
  {
    "en": "supercashier",
    "zh": "超級收銀員",
    "cat": "購物"
  },
  {
    "en": "uncart",
    "zh": "不購物車",
    "cat": "購物"
  },
  {
    "en": "recart",
    "zh": "重新購物車",
    "cat": "購物"
  },
  {
    "en": "precart",
    "zh": "預先購物車",
    "cat": "購物"
  },
  {
    "en": "postcart",
    "zh": "後購物車",
    "cat": "購物"
  },
  {
    "en": "overcart",
    "zh": "過度購物車",
    "cat": "購物"
  },
  {
    "en": "undercart",
    "zh": "不足購物車",
    "cat": "購物"
  },
  {
    "en": "subcart",
    "zh": "次/亞購物車",
    "cat": "購物"
  },
  {
    "en": "supercart",
    "zh": "超級購物車",
    "cat": "購物"
  },
  {
    "en": "unaisle",
    "zh": "不走道",
    "cat": "購物"
  },
  {
    "en": "reaisle",
    "zh": "重新走道",
    "cat": "購物"
  },
  {
    "en": "preaisle",
    "zh": "預先走道",
    "cat": "購物"
  },
  {
    "en": "postaisle",
    "zh": "後走道",
    "cat": "購物"
  },
  {
    "en": "overaisle",
    "zh": "過度走道",
    "cat": "購物"
  },
  {
    "en": "underaisle",
    "zh": "不足走道",
    "cat": "購物"
  },
  {
    "en": "subaisle",
    "zh": "次/亞走道",
    "cat": "購物"
  },
  {
    "en": "superaisle",
    "zh": "超級走道",
    "cat": "購物"
  },
  {
    "en": "unbargain",
    "zh": "不特價品",
    "cat": "購物"
  },
  {
    "en": "rebargain",
    "zh": "重新特價品",
    "cat": "購物"
  },
  {
    "en": "prebargain",
    "zh": "預先特價品",
    "cat": "購物"
  },
  {
    "en": "postbargain",
    "zh": "後特價品",
    "cat": "購物"
  },
  {
    "en": "overbargain",
    "zh": "過度特價品",
    "cat": "購物"
  },
  {
    "en": "underbargain",
    "zh": "不足特價品",
    "cat": "購物"
  },
  {
    "en": "subbargain",
    "zh": "次/亞特價品",
    "cat": "購物"
  },
  {
    "en": "superbargain",
    "zh": "超級特價品",
    "cat": "購物"
  },
  {
    "en": "unvoucher",
    "zh": "不折價券",
    "cat": "購物"
  },
  {
    "en": "revoucher",
    "zh": "重新折價券",
    "cat": "購物"
  },
  {
    "en": "prevoucher",
    "zh": "預先折價券",
    "cat": "購物"
  },
  {
    "en": "postvoucher",
    "zh": "後折價券",
    "cat": "購物"
  },
  {
    "en": "overvoucher",
    "zh": "過度折價券",
    "cat": "購物"
  },
  {
    "en": "undervoucher",
    "zh": "不足折價券",
    "cat": "購物"
  },
  {
    "en": "subvoucher",
    "zh": "次/亞折價券",
    "cat": "購物"
  },
  {
    "en": "supervoucher",
    "zh": "超級折價券",
    "cat": "購物"
  },
  {
    "en": "unwarranty",
    "zh": "不保固",
    "cat": "購物"
  },
  {
    "en": "rewarranty",
    "zh": "重新保固",
    "cat": "購物"
  },
  {
    "en": "prewarranty",
    "zh": "預先保固",
    "cat": "購物"
  },
  {
    "en": "postwarranty",
    "zh": "後保固",
    "cat": "購物"
  },
  {
    "en": "overwarranty",
    "zh": "過度保固",
    "cat": "購物"
  },
  {
    "en": "underwarranty",
    "zh": "不足保固",
    "cat": "購物"
  },
  {
    "en": "subwarranty",
    "zh": "次/亞保固",
    "cat": "購物"
  },
  {
    "en": "superwarranty",
    "zh": "超級保固",
    "cat": "購物"
  },
  {
    "en": "uninventory",
    "zh": "不庫存",
    "cat": "購物"
  },
  {
    "en": "reinventory",
    "zh": "重新庫存",
    "cat": "購物"
  },
  {
    "en": "preinventory",
    "zh": "預先庫存",
    "cat": "購物"
  },
  {
    "en": "postinventory",
    "zh": "後庫存",
    "cat": "購物"
  },
  {
    "en": "overinventory",
    "zh": "過度庫存",
    "cat": "購物"
  },
  {
    "en": "underinventory",
    "zh": "不足庫存",
    "cat": "購物"
  },
  {
    "en": "subinventory",
    "zh": "次/亞庫存",
    "cat": "購物"
  },
  {
    "en": "superinventory",
    "zh": "超級庫存",
    "cat": "購物"
  },
  {
    "en": "accommodate",
    "zh": "容納；提供住宿",
    "cat": "多益必考"
  },
  {
    "en": "accomplish",
    "zh": "完成；實現",
    "cat": "多益必考"
  },
  {
    "en": "agenda",
    "zh": "議程",
    "cat": "多益必考"
  },
  {
    "en": "allocate",
    "zh": "分配；分派",
    "cat": "多益必考"
  },
  {
    "en": "alternative",
    "zh": "替代方案",
    "cat": "多益必考"
  },
  {
    "en": "amend",
    "zh": "修改；修訂",
    "cat": "多益必考"
  },
  {
    "en": "anonymous",
    "zh": "匿名的",
    "cat": "多益必考"
  },
  {
    "en": "anticipate",
    "zh": "預期；期望",
    "cat": "多益必考"
  },
  {
    "en": "appraise",
    "zh": "評估；評價",
    "cat": "多益必考"
  },
  {
    "en": "asset",
    "zh": "資產",
    "cat": "多益必考"
  },
  {
    "en": "assign",
    "zh": "指派",
    "cat": "多益必考"
  },
  {
    "en": "authorize",
    "zh": "授權；批准",
    "cat": "多益必考"
  },
  {
    "en": "bankruptcy",
    "zh": "破產",
    "cat": "多益必考"
  },
  {
    "en": "benchmark",
    "zh": "基準；水準點",
    "cat": "多益必考"
  },
  {
    "en": "bid",
    "zh": "出價；投標",
    "cat": "多益必考"
  },
  {
    "en": "candidate",
    "zh": "候選人",
    "cat": "多益必考"
  },
  {
    "en": "capacity",
    "zh": "容量；能力",
    "cat": "多益必考"
  },
  {
    "en": "certificate",
    "zh": "證書",
    "cat": "多益必考"
  },
  {
    "en": "collaborate",
    "zh": "合作",
    "cat": "多益必考"
  },
  {
    "en": "commute",
    "zh": "通勤",
    "cat": "多益必考"
  },
  {
    "en": "compensate",
    "zh": "補償；賠償",
    "cat": "多益必考"
  },
  {
    "en": "complimentary",
    "zh": "免費的；贈送的",
    "cat": "多益必考"
  },
  {
    "en": "comprehensive",
    "zh": "全面的；詳盡的",
    "cat": "多益必考"
  },
  {
    "en": "compromise",
    "zh": "妥協；折衷",
    "cat": "多益必考"
  },
  {
    "en": "confidential",
    "zh": "機密的",
    "cat": "多益必考"
  },
  {
    "en": "consecutive",
    "zh": "連續的",
    "cat": "多益必考"
  },
  {
    "en": "consensus",
    "zh": "共識",
    "cat": "多益必考"
  },
  {
    "en": "coordinate",
    "zh": "協調",
    "cat": "多益必考"
  },
  {
    "en": "corporate",
    "zh": "公司的；企業的",
    "cat": "多益必考"
  },
  {
    "en": "crucial",
    "zh": "關鍵的；重要的",
    "cat": "多益必考"
  },
  {
    "en": "deadline",
    "zh": "截止日期",
    "cat": "多益必考"
  },
  {
    "en": "deficit",
    "zh": "赤字；虧損",
    "cat": "多益必考"
  },
  {
    "en": "delegate",
    "zh": "委派；代表",
    "cat": "多益必考"
  },
  {
    "en": "demonstrate",
    "zh": "示範；證明",
    "cat": "多益必考"
  },
  {
    "en": "deteriorate",
    "zh": "惡化",
    "cat": "多益必考"
  },
  {
    "en": "discrepancy",
    "zh": "差異；不一致",
    "cat": "多益必考"
  },
  {
    "en": "dispatch",
    "zh": "派遣；發送",
    "cat": "多益必考"
  },
  {
    "en": "distribute",
    "zh": "分發；分配",
    "cat": "多益必考"
  },
  {
    "en": "drastically",
    "zh": "大幅地；徹底地",
    "cat": "多益必考"
  },
  {
    "en": "eligible",
    "zh": "有資格的",
    "cat": "多益必考"
  },
  {
    "en": "abundant",
    "zh": "豐富的；充裕的",
    "cat": "雅思常見"
  },
  {
    "en": "acquire",
    "zh": "獲得；取得",
    "cat": "雅思常見"
  },
  {
    "en": "adapt",
    "zh": "適應",
    "cat": "雅思常見"
  },
  {
    "en": "adequate",
    "zh": "足夠的；適當的",
    "cat": "雅思常見"
  },
  {
    "en": "advocate",
    "zh": "提倡；擁護",
    "cat": "雅思常見"
  },
  {
    "en": "alleviate",
    "zh": "減輕；緩和",
    "cat": "雅思常見"
  },
  {
    "en": "ambiguous",
    "zh": "模稜兩可的",
    "cat": "雅思常見"
  },
  {
    "en": "analyze",
    "zh": "分析",
    "cat": "雅思常見"
  },
  {
    "en": "approach",
    "zh": "方法；接近",
    "cat": "雅思常見"
  },
  {
    "en": "assess",
    "zh": "評估",
    "cat": "雅思常見"
  },
  {
    "en": "assume",
    "zh": "假設；認為",
    "cat": "雅思常見"
  },
  {
    "en": "attain",
    "zh": "達到；獲得",
    "cat": "雅思常見"
  },
  {
    "en": "beneficial",
    "zh": "有益的",
    "cat": "雅思常見"
  },
  {
    "en": "capable",
    "zh": "有能力的",
    "cat": "雅思常見"
  },
  {
    "en": "clarify",
    "zh": "澄清；說明",
    "cat": "雅思常見"
  },
  {
    "en": "coherent",
    "zh": "連貫的；有條理的",
    "cat": "雅思常見"
  },
  {
    "en": "coincide",
    "zh": "同時發生；巧合",
    "cat": "雅思常見"
  },
  {
    "en": "collapse",
    "zh": "倒塌；崩潰",
    "cat": "雅思常見"
  },
  {
    "en": "commence",
    "zh": "開始",
    "cat": "雅思常見"
  },
  {
    "en": "compatible",
    "zh": "相容的；合得來的",
    "cat": "雅思常見"
  },
  {
    "en": "compile",
    "zh": "編譯；收集",
    "cat": "雅思常見"
  },
  {
    "en": "conceive",
    "zh": "構思；想像",
    "cat": "雅思常見"
  },
  {
    "en": "conclude",
    "zh": "得出結論；結束",
    "cat": "雅思常見"
  },
  {
    "en": "conduct",
    "zh": "執行；進行",
    "cat": "雅思常見"
  },
  {
    "en": "confine",
    "zh": "限制；侷限",
    "cat": "雅思常見"
  },
  {
    "en": "conflict",
    "zh": "衝突；矛盾",
    "cat": "雅思常見"
  },
  {
    "en": "consequence",
    "zh": "後果；結果",
    "cat": "雅思常見"
  },
  {
    "en": "consistent",
    "zh": "一致的",
    "cat": "雅思常見"
  },
  {
    "en": "constitute",
    "zh": "構成；組成",
    "cat": "雅思常見"
  },
  {
    "en": "consume",
    "zh": "消耗；消費",
    "cat": "雅思常見"
  },
  {
    "en": "attachment",
    "zh": "附件",
    "cat": "職場溝通"
  },
  {
    "en": "briefing",
    "zh": "簡報",
    "cat": "職場溝通"
  },
  {
    "en": "brainstorm",
    "zh": "腦力激盪",
    "cat": "職場溝通"
  },
  {
    "en": "clarification",
    "zh": "澄清",
    "cat": "職場溝通"
  },
  {
    "en": "colleague",
    "zh": "同事",
    "cat": "職場溝通"
  },
  {
    "en": "feedback",
    "zh": "回饋",
    "cat": "職場溝通"
  },
  {
    "en": "follow-up",
    "zh": "後續追蹤",
    "cat": "職場溝通"
  },
  {
    "en": "guideline",
    "zh": "指南；準則",
    "cat": "職場溝通"
  },
  {
    "en": "implement",
    "zh": "實施；執行",
    "cat": "職場溝通"
  },
  {
    "en": "initiative",
    "zh": "主動性；倡議",
    "cat": "職場溝通"
  },
  {
    "en": "inquiry",
    "zh": "詢問",
    "cat": "職場溝通"
  },
  {
    "en": "milestone",
    "zh": "里程碑",
    "cat": "職場溝通"
  },
  {
    "en": "negotiate",
    "zh": "談判；協商",
    "cat": "職場溝通"
  },
  {
    "en": "objective",
    "zh": "目標",
    "cat": "職場溝通"
  },
  {
    "en": "onboard",
    "zh": "使入職",
    "cat": "職場溝通"
  },
  {
    "en": "overview",
    "zh": "概述",
    "cat": "職場溝通"
  },
  {
    "en": "pending",
    "zh": "待處理的",
    "cat": "職場溝通"
  },
  {
    "en": "prioritize",
    "zh": "優先處理",
    "cat": "職場溝通"
  },
  {
    "en": "proposal",
    "zh": "提案",
    "cat": "職場溝通"
  },
  {
    "en": "recruit",
    "zh": "招募",
    "cat": "職場溝通"
  },
  {
    "en": "reschedule",
    "zh": "重新安排",
    "cat": "職場溝通"
  },
  {
    "en": "strategy",
    "zh": "策略",
    "cat": "職場溝通"
  },
  {
    "en": "supervisor",
    "zh": "主管",
    "cat": "職場溝通"
  },
  {
    "en": "update",
    "zh": "更新進度",
    "cat": "職場溝通"
  },
  {
    "en": "workload",
    "zh": "工作量",
    "cat": "職場溝通"
  },
  {
    "en": "awesome",
    "zh": "太棒了",
    "cat": "日常對話"
  },
  {
    "en": "bother",
    "zh": "打擾",
    "cat": "日常對話"
  },
  {
    "en": "cancel",
    "zh": "取消",
    "cat": "日常對話"
  },
  {
    "en": "casual",
    "zh": "休閒的；隨便的",
    "cat": "日常對話"
  },
  {
    "en": "chat",
    "zh": "聊天",
    "cat": "日常對話"
  },
  {
    "en": "chill",
    "zh": "放鬆",
    "cat": "日常對話"
  },
  {
    "en": "crazy",
    "zh": "瘋狂的",
    "cat": "日常對話"
  },
  {
    "en": "definitely",
    "zh": "絕對；當然",
    "cat": "日常對話"
  },
  {
    "en": "exactly",
    "zh": "完全正確",
    "cat": "日常對話"
  },
  {
    "en": "exhausted",
    "zh": "筋疲力盡的",
    "cat": "日常對話"
  },
  {
    "en": "figure",
    "zh": "想出；理解",
    "cat": "日常對話"
  },
  {
    "en": "hang",
    "zh": "閒晃；等待",
    "cat": "日常對話"
  },
  {
    "en": "hilarious",
    "zh": "極好笑的",
    "cat": "日常對話"
  },
  {
    "en": "kidding",
    "zh": "開玩笑",
    "cat": "日常對話"
  },
  {
    "en": "literally",
    "zh": "不誇張地；字面上地",
    "cat": "日常對話"
  },
  {
    "en": "obvious",
    "zh": "明顯的",
    "cat": "日常對話"
  },
  {
    "en": "probably",
    "zh": "大概；可能",
    "cat": "日常對話"
  },
  {
    "en": "recommend",
    "zh": "推薦",
    "cat": "日常對話"
  },
  {
    "en": "ridiculous",
    "zh": "荒謬的",
    "cat": "日常對話"
  },
  {
    "en": "weird",
    "zh": "奇怪的",
    "cat": "日常對話"
  }
,
  // 多益必考 (40)
  { en: "accommodate", zh: "容納；提供住宿", cat: "多益必考" },
  { en: "accomplish", zh: "完成；實現", cat: "多益必考" },
  { en: "agenda", zh: "議程", cat: "多益必考" },
  { en: "allocate", zh: "分配；分派", cat: "多益必考" },
  { en: "alternative", zh: "替代方案", cat: "多益必考" },
  { en: "amend", zh: "修改；修訂", cat: "多益必考" },
  { en: "anonymous", zh: "匿名的", cat: "多益必考" },
  { en: "anticipate", zh: "預期；期望", cat: "多益必考" },
  { en: "appraise", zh: "評估；評價", cat: "多益必考" },
  { en: "asset", zh: "資產", cat: "多益必考" },
  { en: "assign", zh: "指派", cat: "多益必考" },
  { en: "authorize", zh: "授權；批准", cat: "多益必考" },
  { en: "bankruptcy", zh: "破產", cat: "多益必考" },
  { en: "benchmark", zh: "基準；水準點", cat: "多益必考" },
  { en: "bid", zh: "出價；投標", cat: "多益必考" },
  { en: "candidate", zh: "候選人", cat: "多益必考" },
  { en: "capacity", zh: "容量；能力", cat: "多益必考" },
  { en: "certificate", zh: "證書", cat: "多益必考" },
  { en: "collaborate", zh: "合作", cat: "多益必考" },
  { en: "commute", zh: "通勤", cat: "多益必考" },
  { en: "compensate", zh: "補償；賠償", cat: "多益必考" },
  { en: "complimentary", zh: "免費的；贈送的", cat: "多益必考" },
  { en: "comprehensive", zh: "全面的；詳盡的", cat: "多益必考" },
  { en: "compromise", zh: "妥協；折衷", cat: "多益必考" },
  { en: "confidential", zh: "機密的", cat: "多益必考" },
  { en: "consecutive", zh: "連續的", cat: "多益必考" },
  { en: "consensus", zh: "共識", cat: "多益必考" },
  { en: "coordinate", zh: "協調", cat: "多益必考" },
  { en: "corporate", zh: "公司的；企業的", cat: "多益必考" },
  { en: "crucial", zh: "關鍵的；重要的", cat: "多益必考" },
  { en: "deadline", zh: "截止日期", cat: "多益必考" },
  { en: "deficit", zh: "赤字；虧損", cat: "多益必考" },
  { en: "delegate", zh: "委派；代表", cat: "多益必考" },
  { en: "demonstrate", zh: "示範；證明", cat: "多益必考" },
  { en: "deteriorate", zh: "惡化", cat: "多益必考" },
  { en: "discrepancy", zh: "差異；不一致", cat: "多益必考" },
  { en: "dispatch", zh: "派遣；發送", cat: "多益必考" },
  { en: "distribute", zh: "分發；分配", cat: "多益必考" },
  { en: "drastically", zh: "大幅地；徹底地", cat: "多益必考" },
  { en: "eligible", zh: "有資格的", cat: "多益必考" },
  // 雅思常見 (30)
  { en: "abundant", zh: "豐富的；充裕的", cat: "雅思常見" },
  { en: "acquire", zh: "獲得；取得", cat: "雅思常見" },
  { en: "adapt", zh: "適應", cat: "雅思常見" },
  { en: "adequate", zh: "足夠的；適當的", cat: "雅思常見" },
  { en: "advocate", zh: "提倡；擁護", cat: "雅思常見" },
  { en: "alleviate", zh: "減輕；緩和", cat: "雅思常見" },
  { en: "ambiguous", zh: "模稜兩可的", cat: "雅思常見" },
  { en: "analyze", zh: "分析", cat: "雅思常見" },
  { en: "approach", zh: "方法；接近", cat: "雅思常見" },
  { en: "assess", zh: "評估", cat: "雅思常見" },
  { en: "assume", zh: "假設；認為", cat: "雅思常見" },
  { en: "attain", zh: "達到；獲得", cat: "雅思常見" },
  { en: "beneficial", zh: "有益的", cat: "雅思常見" },
  { en: "capable", zh: "有能力的", cat: "雅思常見" },
  { en: "clarify", zh: "澄清；說明", cat: "雅思常見" },
  { en: "coherent", zh: "連貫的；有條理的", cat: "雅思常見" },
  { en: "coincide", zh: "同時發生；巧合", cat: "雅思常見" },
  { en: "collapse", zh: "倒塌；崩潰", cat: "雅思常見" },
  { en: "commence", zh: "開始", cat: "雅思常見" },
  { en: "compatible", zh: "相容的；合得來的", cat: "雅思常見" },
  { en: "compile", zh: "編譯；收集", cat: "雅思常見" },
  { en: "conceive", zh: "構思；想像", cat: "雅思常見" },
  { en: "conclude", zh: "得出結論；結束", cat: "雅思常見" },
  { en: "conduct", zh: "執行；進行", cat: "雅思常見" },
  { en: "confine", zh: "限制；侷限", cat: "雅思常見" },
  { en: "conflict", zh: "衝突；矛盾", cat: "雅思常見" },
  { en: "consequence", zh: "後果；結果", cat: "雅思常見" },
  { en: "consistent", zh: "一致的", cat: "雅思常見" },
  { en: "constitute", zh: "構成；組成", cat: "雅思常見" },
  { en: "consume", zh: "消耗；消費", cat: "雅思常見" },
  // 職場溝通 (25)
  { en: "attachment", zh: "附件", cat: "職場溝通" },
  { en: "briefing", zh: "簡報", cat: "職場溝通" },
  { en: "brainstorm", zh: "腦力激盪", cat: "職場溝通" },
  { en: "clarification", zh: "澄清", cat: "職場溝通" },
  { en: "colleague", zh: "同事", cat: "職場溝通" },
  { en: "feedback", zh: "回饋", cat: "職場溝通" },
  { en: "follow-up", zh: "後續追蹤", cat: "職場溝通" },
  { en: "guideline", zh: "指南；準則", cat: "職場溝通" },
  { en: "implement", zh: "實施；執行", cat: "職場溝通" },
  { en: "initiative", zh: "主動性；倡議", cat: "職場溝通" },
  { en: "inquiry", zh: "詢問", cat: "職場溝通" },
  { en: "milestone", zh: "里程碑", cat: "職場溝通" },
  { en: "negotiate", zh: "談判；協商", cat: "職場溝通" },
  { en: "objective", zh: "目標", cat: "職場溝通" },
  { en: "onboard", zh: "使入職", cat: "職場溝通" },
  { en: "overview", zh: "概述", cat: "職場溝通" },
  { en: "pending", zh: "待處理的", cat: "職場溝通" },
  { en: "prioritize", zh: "優先處理", cat: "職場溝通" },
  { en: "proposal", zh: "提案", cat: "職場溝通" },
  { en: "recruit", zh: "招募", cat: "職場溝通" },
  { en: "reschedule", zh: "重新安排", cat: "職場溝通" },
  { en: "strategy", zh: "策略", cat: "職場溝通" },
  { en: "supervisor", zh: "主管", cat: "職場溝通" },
  { en: "update", zh: "更新進度", cat: "職場溝通" },
  { en: "workload", zh: "工作量", cat: "職場溝通" },
  // 日常對話 (20)
  { en: "awesome", zh: "太棒了", cat: "日常對話" },
  { en: "bother", zh: "打擾", cat: "日常對話" },
  { en: "cancel", zh: "取消", cat: "日常對話" },
  { en: "casual", zh: "休閒的；隨便的", cat: "日常對話" },
  { en: "chat", zh: "聊天", cat: "日常對話" },
  { en: "chill", zh: "放鬆", cat: "日常對話" },
  { en: "crazy", zh: "瘋狂的", cat: "日常對話" },
  { en: "definitely", zh: "絕對；當然", cat: "日常對話" },
  { en: "exactly", zh: "完全正確", cat: "日常對話" },
  { en: "exhausted", zh: "筋疲力盡的", cat: "日常對話" },
  { en: "figure", zh: "想出；理解", cat: "日常對話" },
  { en: "hang", zh: "閒晃；等待", cat: "日常對話" },
  { en: "hilarious", zh: "極好笑的", cat: "日常對話" },
  { en: "kidding", zh: "開玩笑", cat: "日常對話" },
  { en: "literally", zh: "不誇張地；字面上地", cat: "日常對話" },
  { en: "obvious", zh: "明顯的", cat: "日常對話" },
  { en: "probably", zh: "大概；可能", cat: "日常對話" },
  { en: "recommend", zh: "推薦", cat: "日常對話" },
  { en: "ridiculous", zh: "荒謬的", cat: "日常對話" },
  { en: "weird", zh: "奇怪的", cat: "日常對話" }
],
  phrase: [
  {
    "en": "look forward to",
    "zh": "期待",
    "cat": "多益必考"
  },
  {
    "en": "catch up with",
    "zh": "敘舊",
    "cat": "日常生活"
  },
  {
    "en": "out of stock",
    "zh": "缺貨",
    "cat": "購物"
  },
  {
    "en": "call off",
    "zh": "取消",
    "cat": "商業"
  },
  {
    "en": "check in",
    "zh": "辦理登機/入住",
    "cat": "旅遊"
  },
  {
    "en": "pass out",
    "zh": "昏倒",
    "cat": "醫療"
  },
  {
    "en": "figure out",
    "zh": "想出/弄明白",
    "cat": "日常生活"
  },
  {
    "en": "log in",
    "zh": "登入",
    "cat": "科技"
  },
  {
    "en": "work out",
    "zh": "健身/解決",
    "cat": "運動"
  },
  {
    "en": "chill out",
    "zh": "放鬆",
    "cat": "俚語"
  },
  {
    "en": "get up",
    "zh": "取得上",
    "cat": "日常生活"
  },
  {
    "en": "get down",
    "zh": "取得下",
    "cat": "日常生活"
  },
  {
    "en": "get in",
    "zh": "取得進",
    "cat": "日常生活"
  },
  {
    "en": "get out",
    "zh": "取得出",
    "cat": "日常生活"
  },
  {
    "en": "get on",
    "zh": "取得上",
    "cat": "日常生活"
  },
  {
    "en": "get off",
    "zh": "取得掉",
    "cat": "日常生活"
  },
  {
    "en": "get over",
    "zh": "取得過",
    "cat": "日常生活"
  },
  {
    "en": "get away",
    "zh": "取得走",
    "cat": "日常生活"
  },
  {
    "en": "take up",
    "zh": "拿上",
    "cat": "日常生活"
  },
  {
    "en": "take down",
    "zh": "拿下",
    "cat": "日常生活"
  },
  {
    "en": "take in",
    "zh": "拿進",
    "cat": "日常生活"
  },
  {
    "en": "take out",
    "zh": "拿出",
    "cat": "日常生活"
  },
  {
    "en": "take on",
    "zh": "拿上",
    "cat": "日常生活"
  },
  {
    "en": "take off",
    "zh": "拿掉",
    "cat": "日常生活"
  },
  {
    "en": "take over",
    "zh": "拿過",
    "cat": "日常生活"
  },
  {
    "en": "take away",
    "zh": "拿走",
    "cat": "日常生活"
  },
  {
    "en": "make up",
    "zh": "製造上",
    "cat": "日常生活"
  },
  {
    "en": "make down",
    "zh": "製造下",
    "cat": "日常生活"
  },
  {
    "en": "make in",
    "zh": "製造進",
    "cat": "日常生活"
  },
  {
    "en": "make out",
    "zh": "製造出",
    "cat": "日常生活"
  },
  {
    "en": "make on",
    "zh": "製造上",
    "cat": "日常生活"
  },
  {
    "en": "make off",
    "zh": "製造掉",
    "cat": "日常生活"
  },
  {
    "en": "make over",
    "zh": "製造過",
    "cat": "日常生活"
  },
  {
    "en": "make away",
    "zh": "製造走",
    "cat": "日常生活"
  },
  {
    "en": "put up",
    "zh": "放上",
    "cat": "日常生活"
  },
  {
    "en": "put down",
    "zh": "放下",
    "cat": "日常生活"
  },
  {
    "en": "put in",
    "zh": "放進",
    "cat": "日常生活"
  },
  {
    "en": "put out",
    "zh": "放出",
    "cat": "日常生活"
  },
  {
    "en": "put on",
    "zh": "放上",
    "cat": "日常生活"
  },
  {
    "en": "put off",
    "zh": "放掉",
    "cat": "日常生活"
  },
  {
    "en": "put over",
    "zh": "放過",
    "cat": "日常生活"
  },
  {
    "en": "put away",
    "zh": "放走",
    "cat": "日常生活"
  },
  {
    "en": "set up",
    "zh": "設定上",
    "cat": "日常生活"
  },
  {
    "en": "set down",
    "zh": "設定下",
    "cat": "日常生活"
  },
  {
    "en": "set in",
    "zh": "設定進",
    "cat": "日常生活"
  },
  {
    "en": "set out",
    "zh": "設定出",
    "cat": "日常生活"
  },
  {
    "en": "set on",
    "zh": "設定上",
    "cat": "日常生活"
  },
  {
    "en": "set off",
    "zh": "設定掉",
    "cat": "日常生活"
  },
  {
    "en": "set over",
    "zh": "設定過",
    "cat": "日常生活"
  },
  {
    "en": "set away",
    "zh": "設定走",
    "cat": "日常生活"
  },
  {
    "en": "turn up",
    "zh": "轉上",
    "cat": "日常生活"
  },
  {
    "en": "turn down",
    "zh": "轉下",
    "cat": "日常生活"
  },
  {
    "en": "turn in",
    "zh": "轉進",
    "cat": "日常生活"
  },
  {
    "en": "turn out",
    "zh": "轉出",
    "cat": "日常生活"
  },
  {
    "en": "turn on",
    "zh": "轉上",
    "cat": "日常生活"
  },
  {
    "en": "turn off",
    "zh": "轉掉",
    "cat": "日常生活"
  },
  {
    "en": "turn over",
    "zh": "轉過",
    "cat": "日常生活"
  },
  {
    "en": "turn away",
    "zh": "轉走",
    "cat": "日常生活"
  },
  {
    "en": "keep up",
    "zh": "保持上",
    "cat": "日常生活"
  },
  {
    "en": "keep down",
    "zh": "保持下",
    "cat": "日常生活"
  },
  {
    "en": "keep in",
    "zh": "保持進",
    "cat": "日常生活"
  },
  {
    "en": "keep out",
    "zh": "保持出",
    "cat": "日常生活"
  },
  {
    "en": "keep on",
    "zh": "保持上",
    "cat": "日常生活"
  },
  {
    "en": "keep off",
    "zh": "保持掉",
    "cat": "日常生活"
  },
  {
    "en": "keep over",
    "zh": "保持過",
    "cat": "日常生活"
  },
  {
    "en": "keep away",
    "zh": "保持走",
    "cat": "日常生活"
  },
  {
    "en": "give up",
    "zh": "給上",
    "cat": "日常生活"
  },
  {
    "en": "give down",
    "zh": "給下",
    "cat": "日常生活"
  },
  {
    "en": "give in",
    "zh": "給進",
    "cat": "日常生活"
  },
  {
    "en": "give out",
    "zh": "給出",
    "cat": "日常生活"
  },
  {
    "en": "give on",
    "zh": "給上",
    "cat": "日常生活"
  },
  {
    "en": "give off",
    "zh": "給掉",
    "cat": "日常生活"
  },
  {
    "en": "give over",
    "zh": "給過",
    "cat": "日常生活"
  },
  {
    "en": "give away",
    "zh": "給走",
    "cat": "日常生活"
  },
  {
    "en": "abide by",
    "zh": "遵守",
    "cat": "多益必考"
  },
  {
    "en": "account for",
    "zh": "解釋；佔...比例",
    "cat": "多益必考"
  },
  {
    "en": "in terms of",
    "zh": "就...而言",
    "cat": "多益必考"
  },
  {
    "en": "in charge of",
    "zh": "負責",
    "cat": "多益必考"
  },
  {
    "en": "prior to",
    "zh": "在...之前",
    "cat": "多益必考"
  },
  {
    "en": "take into consideration",
    "zh": "考慮進去",
    "cat": "多益必考"
  },
  {
    "en": "comply with",
    "zh": "遵守；服從",
    "cat": "多益必考"
  },
  {
    "en": "be subject to",
    "zh": "受...控制；易遭受...",
    "cat": "多益必考"
  },
  {
    "en": "rule out",
    "zh": "排除",
    "cat": "多益必考"
  },
  {
    "en": "turn down",
    "zh": "拒絕",
    "cat": "多益必考"
  },
  {
    "en": "look into",
    "zh": "調查",
    "cat": "多益必考"
  },
  {
    "en": "fill in for",
    "zh": "代理；替代",
    "cat": "多益必考"
  },
  {
    "en": "keep track of",
    "zh": "記錄；追蹤",
    "cat": "多益必考"
  },
  {
    "en": "rely on",
    "zh": "依賴",
    "cat": "多益必考"
  },
  {
    "en": "come up with",
    "zh": "想出",
    "cat": "多益必考"
  },
  {
    "en": "play a crucial role in",
    "zh": "在...扮演關鍵角色",
    "cat": "雅思常見"
  },
  {
    "en": "stem from",
    "zh": "源自於",
    "cat": "雅思常見"
  },
  {
    "en": "shed light on",
    "zh": "闡明；解釋",
    "cat": "雅思常見"
  },
  {
    "en": "boil down to",
    "zh": "歸結於",
    "cat": "雅思常見"
  },
  {
    "en": "take for granted",
    "zh": "視為理所當然",
    "cat": "雅思常見"
  },
  {
    "en": "give rise to",
    "zh": "引起；導致",
    "cat": "雅思常見"
  },
  {
    "en": "be prone to",
    "zh": "傾向於；易於",
    "cat": "雅思常見"
  },
  {
    "en": "bear in mind",
    "zh": "記住",
    "cat": "雅思常見"
  },
  {
    "en": "pave the way for",
    "zh": "為...鋪路",
    "cat": "雅思常見"
  },
  {
    "en": "cope with",
    "zh": "處理；應付",
    "cat": "雅思常見"
  },
  {
    "en": "touch base",
    "zh": "聯繫；跟進",
    "cat": "職場溝通"
  },
  {
    "en": "get back to",
    "zh": "回覆",
    "cat": "職場溝通"
  },
  {
    "en": "bear with me",
    "zh": "請耐心等我一下",
    "cat": "職場溝通"
  },
  {
    "en": "bring up",
    "zh": "提出",
    "cat": "職場溝通"
  },
  {
    "en": "wrap up",
    "zh": "結束；總結",
    "cat": "職場溝通"
  },
  {
    "en": "move forward",
    "zh": "向前邁進",
    "cat": "職場溝通"
  },
  {
    "en": "keep someone in the loop",
    "zh": "讓某人了解情況",
    "cat": "職場溝通"
  },
  {
    "en": "on the same page",
    "zh": "達成共識",
    "cat": "職場溝通"
  },
  {
    "en": "point out",
    "zh": "指出",
    "cat": "職場溝通"
  },
  {
    "en": "sort out",
    "zh": "解決；整理",
    "cat": "職場溝通"
  },
  {
    "en": "hang out",
    "zh": "出去玩",
    "cat": "日常對話"
  },
  {
    "en": "catch up",
    "zh": "敘舊；趕上",
    "cat": "日常對話"
  },
  {
    "en": "never mind",
    "zh": "沒關係；算了",
    "cat": "日常對話"
  },
  {
    "en": "take it easy",
    "zh": "放輕鬆",
    "cat": "日常對話"
  },
  {
    "en": "make sense",
    "zh": "有道理",
    "cat": "日常對話"
  },
  {
    "en": "figure out",
    "zh": "想出；弄清楚",
    "cat": "日常對話"
  },
  {
    "en": "show up",
    "zh": "出現",
    "cat": "日常對話"
  },
  {
    "en": "turn out",
    "zh": "結果是",
    "cat": "日常對話"
  },
  {
    "en": "by the way",
    "zh": "順帶一提",
    "cat": "日常對話"
  },
  {
    "en": "look forward to",
    "zh": "期待",
    "cat": "日常對話"
  }
,
  // 多益必考 (15)
  { en: "abide by", zh: "遵守", cat: "多益必考" },
  { en: "account for", zh: "解釋；佔...比例", cat: "多益必考" },
  { en: "in terms of", zh: "就...而言", cat: "多益必考" },
  { en: "in charge of", zh: "負責", cat: "多益必考" },
  { en: "prior to", zh: "在...之前", cat: "多益必考" },
  { en: "take into consideration", zh: "考慮進去", cat: "多益必考" },
  { en: "comply with", zh: "遵守；服從", cat: "多益必考" },
  { en: "be subject to", zh: "受...控制；易遭受...", cat: "多益必考" },
  { en: "rule out", zh: "排除", cat: "多益必考" },
  { en: "turn down", zh: "拒絕", cat: "多益必考" },
  { en: "look into", zh: "調查", cat: "多益必考" },
  { en: "fill in for", zh: "代理；替代", cat: "多益必考" },
  { en: "keep track of", zh: "記錄；追蹤", cat: "多益必考" },
  { en: "rely on", zh: "依賴", cat: "多益必考" },
  { en: "come up with", zh: "想出", cat: "多益必考" },
  // 雅思常見 (10)
  { en: "play a crucial role in", zh: "在...扮演關鍵角色", cat: "雅思常見" },
  { en: "stem from", zh: "源自於", cat: "雅思常見" },
  { en: "shed light on", zh: "闡明；解釋", cat: "雅思常見" },
  { en: "boil down to", zh: "歸結於", cat: "雅思常見" },
  { en: "take for granted", zh: "視為理所當然", cat: "雅思常見" },
  { en: "give rise to", zh: "引起；導致", cat: "雅思常見" },
  { en: "be prone to", zh: "傾向於；易於", cat: "雅思常見" },
  { en: "bear in mind", zh: "記住", cat: "雅思常見" },
  { en: "pave the way for", zh: "為...鋪路", cat: "雅思常見" },
  { en: "cope with", zh: "處理；應付", cat: "雅思常見" },
  // 職場溝通 (10)
  { en: "touch base", zh: "聯繫；跟進", cat: "職場溝通" },
  { en: "get back to", zh: "回覆", cat: "職場溝通" },
  { en: "bear with me", zh: "請耐心等我一下", cat: "職場溝通" },
  { en: "bring up", zh: "提出", cat: "職場溝通" },
  { en: "wrap up", zh: "結束；總結", cat: "職場溝通" },
  { en: "move forward", zh: "向前邁進", cat: "職場溝通" },
  { en: "keep someone in the loop", zh: "讓某人了解情況", cat: "職場溝通" },
  { en: "on the same page", zh: "達成共識", cat: "職場溝通" },
  { en: "point out", zh: "指出", cat: "職場溝通" },
  { en: "sort out", zh: "解決；整理", cat: "職場溝通" },
  // 日常對話 (10)
  { en: "hang out", zh: "出去玩", cat: "日常對話" },
  { en: "catch up", zh: "敘舊；趕上", cat: "日常對話" },
  { en: "never mind", zh: "沒關係；算了", cat: "日常對話" },
  { en: "take it easy", zh: "放輕鬆", cat: "日常對話" },
  { en: "make sense", zh: "有道理", cat: "日常對話" },
  { en: "figure out", zh: "想出；弄清楚", cat: "日常對話" },
  { en: "show up", zh: "出現", cat: "日常對話" },
  { en: "turn out", zh: "結果是", cat: "日常對話" },
  { en: "by the way", zh: "順帶一提", cat: "日常對話" },
  { en: "look forward to", zh: "期待", cat: "日常對話" }
],
  sentence: [
  {
    "en": "I need to buy a new laptop.",
    "zh": "我需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "I need to buy a new phone.",
    "zh": "我需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "I need to buy a new shirt.",
    "zh": "我需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "I need to buy a new bag.",
    "zh": "我需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "I need to buy a new monitor.",
    "zh": "我需要買一個新的螢幕。",
    "cat": "購物"
  },
  {
    "en": "I need to buy a new mouse.",
    "zh": "我需要買一個新的滑鼠。",
    "cat": "購物"
  },
  {
    "en": "I need to buy a new keyboard.",
    "zh": "我需要買一個新的鍵盤。",
    "cat": "購物"
  },
  {
    "en": "I need to buy a new watch.",
    "zh": "我需要買一個新的手錶。",
    "cat": "購物"
  },
  {
    "en": "I will travel to Japan.",
    "zh": "我將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "I will travel to Korea.",
    "zh": "我將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "I will travel to America.",
    "zh": "我將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "I will travel to Europe.",
    "zh": "我將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "I will travel to Australia.",
    "zh": "我將會去澳洲。",
    "cat": "旅遊"
  },
  {
    "en": "I will travel to Canada.",
    "zh": "我將會去加拿大。",
    "cat": "旅遊"
  },
  {
    "en": "I will travel to Thailand.",
    "zh": "我將會去泰國。",
    "cat": "旅遊"
  },
  {
    "en": "I will travel to Singapore.",
    "zh": "我將會去新加坡。",
    "cat": "旅遊"
  },
  {
    "en": "I have a meeting with the manager.",
    "zh": "我要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "I have a meeting with the client.",
    "zh": "我要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "I have a meeting with the team.",
    "zh": "我要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "I have a meeting with the boss.",
    "zh": "我要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "I have a meeting with the investor.",
    "zh": "我要和...開會投資人。",
    "cat": "商業"
  },
  {
    "en": "I have a meeting with the partner.",
    "zh": "我要和...開會合夥人。",
    "cat": "商業"
  },
  {
    "en": "I have a meeting with the candidate.",
    "zh": "我要和...開會應徵者。",
    "cat": "商業"
  },
  {
    "en": "I have a meeting with the director.",
    "zh": "我要和...開會總監。",
    "cat": "商業"
  },
  {
    "en": "I feel very happy.",
    "zh": "我覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "I feel very sad.",
    "zh": "我覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "I feel very angry.",
    "zh": "我覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "I feel very nervous.",
    "zh": "我覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "I feel very excited.",
    "zh": "我覺得非常興奮。",
    "cat": "情緒"
  },
  {
    "en": "I feel very tired.",
    "zh": "我覺得非常疲倦。",
    "cat": "情緒"
  },
  {
    "en": "I feel very bored.",
    "zh": "我覺得非常無聊。",
    "cat": "情緒"
  },
  {
    "en": "I feel very anxious.",
    "zh": "我覺得非常焦慮。",
    "cat": "情緒"
  },
  {
    "en": "I went to the hospital because of a headache.",
    "zh": "我去醫院因為頭痛。",
    "cat": "醫療"
  },
  {
    "en": "I went to the hospital because of a fever.",
    "zh": "我去醫院因為發燒。",
    "cat": "醫療"
  },
  {
    "en": "I went to the hospital because of a cold.",
    "zh": "我去醫院因為感冒。",
    "cat": "醫療"
  },
  {
    "en": "I went to the hospital because of a stomachache.",
    "zh": "我去醫院因為胃痛。",
    "cat": "醫療"
  },
  {
    "en": "I went to the hospital because of a cough.",
    "zh": "我去醫院因為咳嗽。",
    "cat": "醫療"
  },
  {
    "en": "I went to the hospital because of a sore throat.",
    "zh": "我去醫院因為喉嚨痛。",
    "cat": "醫療"
  },
  {
    "en": "I went to the hospital because of a toothache.",
    "zh": "我去醫院因為牙痛。",
    "cat": "醫療"
  },
  {
    "en": "I went to the hospital because of a backache.",
    "zh": "我去醫院因為背痛。",
    "cat": "醫療"
  },
  {
    "en": "I want to learn how to play basketball.",
    "zh": "我想學如何打籃球。",
    "cat": "運動"
  },
  {
    "en": "I want to learn how to play baseball.",
    "zh": "我想學如何打棒球。",
    "cat": "運動"
  },
  {
    "en": "I want to learn how to play tennis.",
    "zh": "我想學如何打網球。",
    "cat": "運動"
  },
  {
    "en": "I want to learn how to play soccer.",
    "zh": "我想學如何打足球。",
    "cat": "運動"
  },
  {
    "en": "I want to learn how to play golf.",
    "zh": "我想學如何打高爾夫。",
    "cat": "運動"
  },
  {
    "en": "I want to learn how to play volleyball.",
    "zh": "我想學如何打排球。",
    "cat": "運動"
  },
  {
    "en": "I want to learn how to play badminton.",
    "zh": "我想學如何打羽毛球。",
    "cat": "運動"
  },
  {
    "en": "I want to learn how to play table tennis.",
    "zh": "我想學如何打桌球。",
    "cat": "運動"
  },
  {
    "en": "I downloaded a new app.",
    "zh": "我下載了一個新的應用程式。",
    "cat": "科技"
  },
  {
    "en": "I downloaded a new software.",
    "zh": "我下載了一個新的軟體。",
    "cat": "科技"
  },
  {
    "en": "I downloaded a new game.",
    "zh": "我下載了一個新的遊戲。",
    "cat": "科技"
  },
  {
    "en": "I downloaded a new update.",
    "zh": "我下載了一個新的更新檔。",
    "cat": "科技"
  },
  {
    "en": "I downloaded a new program.",
    "zh": "我下載了一個新的程式。",
    "cat": "科技"
  },
  {
    "en": "I downloaded a new browser.",
    "zh": "我下載了一個新的瀏覽器。",
    "cat": "科技"
  },
  {
    "en": "I downloaded a new driver.",
    "zh": "我下載了一個新的驅動程式。",
    "cat": "科技"
  },
  {
    "en": "I downloaded a new plugin.",
    "zh": "我下載了一個新的擴充功能。",
    "cat": "科技"
  },
  {
    "en": "I have to prepare for the exam.",
    "zh": "我必須準備考試。",
    "cat": "多益必考"
  },
  {
    "en": "I have to prepare for the interview.",
    "zh": "我必須準備面試。",
    "cat": "多益必考"
  },
  {
    "en": "I have to prepare for the presentation.",
    "zh": "我必須準備簡報。",
    "cat": "多益必考"
  },
  {
    "en": "I have to prepare for the test.",
    "zh": "我必須準備測驗。",
    "cat": "多益必考"
  },
  {
    "en": "I have to prepare for the project.",
    "zh": "我必須準備專案。",
    "cat": "多益必考"
  },
  {
    "en": "I have to prepare for the negotiation.",
    "zh": "我必須準備談判。",
    "cat": "多益必考"
  },
  {
    "en": "I have to prepare for the audit.",
    "zh": "我必須準備審計。",
    "cat": "多益必考"
  },
  {
    "en": "I have to prepare for the evaluation.",
    "zh": "我必須準備評估。",
    "cat": "多益必考"
  },
  {
    "en": "You need to buy a new laptop.",
    "zh": "你需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "You need to buy a new phone.",
    "zh": "你需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "You need to buy a new shirt.",
    "zh": "你需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "You need to buy a new bag.",
    "zh": "你需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "You need to buy a new monitor.",
    "zh": "你需要買一個新的螢幕。",
    "cat": "購物"
  },
  {
    "en": "You need to buy a new mouse.",
    "zh": "你需要買一個新的滑鼠。",
    "cat": "購物"
  },
  {
    "en": "You need to buy a new keyboard.",
    "zh": "你需要買一個新的鍵盤。",
    "cat": "購物"
  },
  {
    "en": "You need to buy a new watch.",
    "zh": "你需要買一個新的手錶。",
    "cat": "購物"
  },
  {
    "en": "You will travel to Japan.",
    "zh": "你將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "You will travel to Korea.",
    "zh": "你將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "You will travel to America.",
    "zh": "你將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "You will travel to Europe.",
    "zh": "你將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "You will travel to Australia.",
    "zh": "你將會去澳洲。",
    "cat": "旅遊"
  },
  {
    "en": "You will travel to Canada.",
    "zh": "你將會去加拿大。",
    "cat": "旅遊"
  },
  {
    "en": "You will travel to Thailand.",
    "zh": "你將會去泰國。",
    "cat": "旅遊"
  },
  {
    "en": "You will travel to Singapore.",
    "zh": "你將會去新加坡。",
    "cat": "旅遊"
  },
  {
    "en": "You have a meeting with the manager.",
    "zh": "你要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "You have a meeting with the client.",
    "zh": "你要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "You have a meeting with the team.",
    "zh": "你要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "You have a meeting with the boss.",
    "zh": "你要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "You have a meeting with the investor.",
    "zh": "你要和...開會投資人。",
    "cat": "商業"
  },
  {
    "en": "You have a meeting with the partner.",
    "zh": "你要和...開會合夥人。",
    "cat": "商業"
  },
  {
    "en": "You have a meeting with the candidate.",
    "zh": "你要和...開會應徵者。",
    "cat": "商業"
  },
  {
    "en": "You have a meeting with the director.",
    "zh": "你要和...開會總監。",
    "cat": "商業"
  },
  {
    "en": "You feel very happy.",
    "zh": "你覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "You feel very sad.",
    "zh": "你覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "You feel very angry.",
    "zh": "你覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "You feel very nervous.",
    "zh": "你覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "You feel very excited.",
    "zh": "你覺得非常興奮。",
    "cat": "情緒"
  },
  {
    "en": "You feel very tired.",
    "zh": "你覺得非常疲倦。",
    "cat": "情緒"
  },
  {
    "en": "You feel very bored.",
    "zh": "你覺得非常無聊。",
    "cat": "情緒"
  },
  {
    "en": "You feel very anxious.",
    "zh": "你覺得非常焦慮。",
    "cat": "情緒"
  },
  {
    "en": "You went to the hospital because of a headache.",
    "zh": "你去醫院因為頭痛。",
    "cat": "醫療"
  },
  {
    "en": "You went to the hospital because of a fever.",
    "zh": "你去醫院因為發燒。",
    "cat": "醫療"
  },
  {
    "en": "You went to the hospital because of a cold.",
    "zh": "你去醫院因為感冒。",
    "cat": "醫療"
  },
  {
    "en": "You went to the hospital because of a stomachache.",
    "zh": "你去醫院因為胃痛。",
    "cat": "醫療"
  },
  {
    "en": "You went to the hospital because of a cough.",
    "zh": "你去醫院因為咳嗽。",
    "cat": "醫療"
  },
  {
    "en": "You went to the hospital because of a sore throat.",
    "zh": "你去醫院因為喉嚨痛。",
    "cat": "醫療"
  },
  {
    "en": "You went to the hospital because of a toothache.",
    "zh": "你去醫院因為牙痛。",
    "cat": "醫療"
  },
  {
    "en": "You went to the hospital because of a backache.",
    "zh": "你去醫院因為背痛。",
    "cat": "醫療"
  },
  {
    "en": "You want to learn how to play basketball.",
    "zh": "你想學如何打籃球。",
    "cat": "運動"
  },
  {
    "en": "You want to learn how to play baseball.",
    "zh": "你想學如何打棒球。",
    "cat": "運動"
  },
  {
    "en": "You want to learn how to play tennis.",
    "zh": "你想學如何打網球。",
    "cat": "運動"
  },
  {
    "en": "You want to learn how to play soccer.",
    "zh": "你想學如何打足球。",
    "cat": "運動"
  },
  {
    "en": "You want to learn how to play golf.",
    "zh": "你想學如何打高爾夫。",
    "cat": "運動"
  },
  {
    "en": "You want to learn how to play volleyball.",
    "zh": "你想學如何打排球。",
    "cat": "運動"
  },
  {
    "en": "You want to learn how to play badminton.",
    "zh": "你想學如何打羽毛球。",
    "cat": "運動"
  },
  {
    "en": "You want to learn how to play table tennis.",
    "zh": "你想學如何打桌球。",
    "cat": "運動"
  },
  {
    "en": "You downloaded a new app.",
    "zh": "你下載了一個新的應用程式。",
    "cat": "科技"
  },
  {
    "en": "You downloaded a new software.",
    "zh": "你下載了一個新的軟體。",
    "cat": "科技"
  },
  {
    "en": "You downloaded a new game.",
    "zh": "你下載了一個新的遊戲。",
    "cat": "科技"
  },
  {
    "en": "You downloaded a new update.",
    "zh": "你下載了一個新的更新檔。",
    "cat": "科技"
  },
  {
    "en": "You downloaded a new program.",
    "zh": "你下載了一個新的程式。",
    "cat": "科技"
  },
  {
    "en": "You downloaded a new browser.",
    "zh": "你下載了一個新的瀏覽器。",
    "cat": "科技"
  },
  {
    "en": "You downloaded a new driver.",
    "zh": "你下載了一個新的驅動程式。",
    "cat": "科技"
  },
  {
    "en": "You downloaded a new plugin.",
    "zh": "你下載了一個新的擴充功能。",
    "cat": "科技"
  },
  {
    "en": "You have to prepare for the exam.",
    "zh": "你必須準備考試。",
    "cat": "多益必考"
  },
  {
    "en": "You have to prepare for the interview.",
    "zh": "你必須準備面試。",
    "cat": "多益必考"
  },
  {
    "en": "You have to prepare for the presentation.",
    "zh": "你必須準備簡報。",
    "cat": "多益必考"
  },
  {
    "en": "You have to prepare for the test.",
    "zh": "你必須準備測驗。",
    "cat": "多益必考"
  },
  {
    "en": "You have to prepare for the project.",
    "zh": "你必須準備專案。",
    "cat": "多益必考"
  },
  {
    "en": "You have to prepare for the negotiation.",
    "zh": "你必須準備談判。",
    "cat": "多益必考"
  },
  {
    "en": "You have to prepare for the audit.",
    "zh": "你必須準備審計。",
    "cat": "多益必考"
  },
  {
    "en": "You have to prepare for the evaluation.",
    "zh": "你必須準備評估。",
    "cat": "多益必考"
  },
  {
    "en": "He need to buy a new laptop.",
    "zh": "他需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "He need to buy a new phone.",
    "zh": "他需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "He need to buy a new shirt.",
    "zh": "他需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "He need to buy a new bag.",
    "zh": "他需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "He need to buy a new monitor.",
    "zh": "他需要買一個新的螢幕。",
    "cat": "購物"
  },
  {
    "en": "He need to buy a new mouse.",
    "zh": "他需要買一個新的滑鼠。",
    "cat": "購物"
  },
  {
    "en": "He need to buy a new keyboard.",
    "zh": "他需要買一個新的鍵盤。",
    "cat": "購物"
  },
  {
    "en": "He need to buy a new watch.",
    "zh": "他需要買一個新的手錶。",
    "cat": "購物"
  },
  {
    "en": "He will travel to Japan.",
    "zh": "他將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "He will travel to Korea.",
    "zh": "他將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "He will travel to America.",
    "zh": "他將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "He will travel to Europe.",
    "zh": "他將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "He will travel to Australia.",
    "zh": "他將會去澳洲。",
    "cat": "旅遊"
  },
  {
    "en": "He will travel to Canada.",
    "zh": "他將會去加拿大。",
    "cat": "旅遊"
  },
  {
    "en": "He will travel to Thailand.",
    "zh": "他將會去泰國。",
    "cat": "旅遊"
  },
  {
    "en": "He will travel to Singapore.",
    "zh": "他將會去新加坡。",
    "cat": "旅遊"
  },
  {
    "en": "He have a meeting with the manager.",
    "zh": "他要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "He have a meeting with the client.",
    "zh": "他要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "He have a meeting with the team.",
    "zh": "他要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "He have a meeting with the boss.",
    "zh": "他要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "He have a meeting with the investor.",
    "zh": "他要和...開會投資人。",
    "cat": "商業"
  },
  {
    "en": "He have a meeting with the partner.",
    "zh": "他要和...開會合夥人。",
    "cat": "商業"
  },
  {
    "en": "He have a meeting with the candidate.",
    "zh": "他要和...開會應徵者。",
    "cat": "商業"
  },
  {
    "en": "He have a meeting with the director.",
    "zh": "他要和...開會總監。",
    "cat": "商業"
  },
  {
    "en": "He feel very happy.",
    "zh": "他覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "He feel very sad.",
    "zh": "他覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "He feel very angry.",
    "zh": "他覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "He feel very nervous.",
    "zh": "他覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "He feel very excited.",
    "zh": "他覺得非常興奮。",
    "cat": "情緒"
  },
  {
    "en": "He feel very tired.",
    "zh": "他覺得非常疲倦。",
    "cat": "情緒"
  },
  {
    "en": "He feel very bored.",
    "zh": "他覺得非常無聊。",
    "cat": "情緒"
  },
  {
    "en": "He feel very anxious.",
    "zh": "他覺得非常焦慮。",
    "cat": "情緒"
  },
  {
    "en": "He went to the hospital because of a headache.",
    "zh": "他去醫院因為頭痛。",
    "cat": "醫療"
  },
  {
    "en": "He went to the hospital because of a fever.",
    "zh": "他去醫院因為發燒。",
    "cat": "醫療"
  },
  {
    "en": "He went to the hospital because of a cold.",
    "zh": "他去醫院因為感冒。",
    "cat": "醫療"
  },
  {
    "en": "He went to the hospital because of a stomachache.",
    "zh": "他去醫院因為胃痛。",
    "cat": "醫療"
  },
  {
    "en": "He went to the hospital because of a cough.",
    "zh": "他去醫院因為咳嗽。",
    "cat": "醫療"
  },
  {
    "en": "He went to the hospital because of a sore throat.",
    "zh": "他去醫院因為喉嚨痛。",
    "cat": "醫療"
  },
  {
    "en": "He went to the hospital because of a toothache.",
    "zh": "他去醫院因為牙痛。",
    "cat": "醫療"
  },
  {
    "en": "He went to the hospital because of a backache.",
    "zh": "他去醫院因為背痛。",
    "cat": "醫療"
  },
  {
    "en": "He want to learn how to play basketball.",
    "zh": "他想學如何打籃球。",
    "cat": "運動"
  },
  {
    "en": "He want to learn how to play baseball.",
    "zh": "他想學如何打棒球。",
    "cat": "運動"
  },
  {
    "en": "He want to learn how to play tennis.",
    "zh": "他想學如何打網球。",
    "cat": "運動"
  },
  {
    "en": "He want to learn how to play soccer.",
    "zh": "他想學如何打足球。",
    "cat": "運動"
  },
  {
    "en": "He want to learn how to play golf.",
    "zh": "他想學如何打高爾夫。",
    "cat": "運動"
  },
  {
    "en": "He want to learn how to play volleyball.",
    "zh": "他想學如何打排球。",
    "cat": "運動"
  },
  {
    "en": "He want to learn how to play badminton.",
    "zh": "他想學如何打羽毛球。",
    "cat": "運動"
  },
  {
    "en": "He want to learn how to play table tennis.",
    "zh": "他想學如何打桌球。",
    "cat": "運動"
  },
  {
    "en": "He downloaded a new app.",
    "zh": "他下載了一個新的應用程式。",
    "cat": "科技"
  },
  {
    "en": "He downloaded a new software.",
    "zh": "他下載了一個新的軟體。",
    "cat": "科技"
  },
  {
    "en": "He downloaded a new game.",
    "zh": "他下載了一個新的遊戲。",
    "cat": "科技"
  },
  {
    "en": "He downloaded a new update.",
    "zh": "他下載了一個新的更新檔。",
    "cat": "科技"
  },
  {
    "en": "He downloaded a new program.",
    "zh": "他下載了一個新的程式。",
    "cat": "科技"
  },
  {
    "en": "He downloaded a new browser.",
    "zh": "他下載了一個新的瀏覽器。",
    "cat": "科技"
  },
  {
    "en": "He downloaded a new driver.",
    "zh": "他下載了一個新的驅動程式。",
    "cat": "科技"
  },
  {
    "en": "He downloaded a new plugin.",
    "zh": "他下載了一個新的擴充功能。",
    "cat": "科技"
  },
  {
    "en": "He have to prepare for the exam.",
    "zh": "他必須準備考試。",
    "cat": "多益必考"
  },
  {
    "en": "He have to prepare for the interview.",
    "zh": "他必須準備面試。",
    "cat": "多益必考"
  },
  {
    "en": "He have to prepare for the presentation.",
    "zh": "他必須準備簡報。",
    "cat": "多益必考"
  },
  {
    "en": "He have to prepare for the test.",
    "zh": "他必須準備測驗。",
    "cat": "多益必考"
  },
  {
    "en": "He have to prepare for the project.",
    "zh": "他必須準備專案。",
    "cat": "多益必考"
  },
  {
    "en": "He have to prepare for the negotiation.",
    "zh": "他必須準備談判。",
    "cat": "多益必考"
  },
  {
    "en": "He have to prepare for the audit.",
    "zh": "他必須準備審計。",
    "cat": "多益必考"
  },
  {
    "en": "He have to prepare for the evaluation.",
    "zh": "他必須準備評估。",
    "cat": "多益必考"
  },
  {
    "en": "She need to buy a new laptop.",
    "zh": "她需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "She need to buy a new phone.",
    "zh": "她需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "She need to buy a new shirt.",
    "zh": "她需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "She need to buy a new bag.",
    "zh": "她需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "She need to buy a new monitor.",
    "zh": "她需要買一個新的螢幕。",
    "cat": "購物"
  },
  {
    "en": "She need to buy a new mouse.",
    "zh": "她需要買一個新的滑鼠。",
    "cat": "購物"
  },
  {
    "en": "She need to buy a new keyboard.",
    "zh": "她需要買一個新的鍵盤。",
    "cat": "購物"
  },
  {
    "en": "She need to buy a new watch.",
    "zh": "她需要買一個新的手錶。",
    "cat": "購物"
  },
  {
    "en": "She will travel to Japan.",
    "zh": "她將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "She will travel to Korea.",
    "zh": "她將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "She will travel to America.",
    "zh": "她將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "She will travel to Europe.",
    "zh": "她將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "She will travel to Australia.",
    "zh": "她將會去澳洲。",
    "cat": "旅遊"
  },
  {
    "en": "She will travel to Canada.",
    "zh": "她將會去加拿大。",
    "cat": "旅遊"
  },
  {
    "en": "She will travel to Thailand.",
    "zh": "她將會去泰國。",
    "cat": "旅遊"
  },
  {
    "en": "She will travel to Singapore.",
    "zh": "她將會去新加坡。",
    "cat": "旅遊"
  },
  {
    "en": "She have a meeting with the manager.",
    "zh": "她要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "She have a meeting with the client.",
    "zh": "她要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "She have a meeting with the team.",
    "zh": "她要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "She have a meeting with the boss.",
    "zh": "她要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "She have a meeting with the investor.",
    "zh": "她要和...開會投資人。",
    "cat": "商業"
  },
  {
    "en": "She have a meeting with the partner.",
    "zh": "她要和...開會合夥人。",
    "cat": "商業"
  },
  {
    "en": "She have a meeting with the candidate.",
    "zh": "她要和...開會應徵者。",
    "cat": "商業"
  },
  {
    "en": "She have a meeting with the director.",
    "zh": "她要和...開會總監。",
    "cat": "商業"
  },
  {
    "en": "She feel very happy.",
    "zh": "她覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "She feel very sad.",
    "zh": "她覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "She feel very angry.",
    "zh": "她覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "She feel very nervous.",
    "zh": "她覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "She feel very excited.",
    "zh": "她覺得非常興奮。",
    "cat": "情緒"
  },
  {
    "en": "She feel very tired.",
    "zh": "她覺得非常疲倦。",
    "cat": "情緒"
  },
  {
    "en": "She feel very bored.",
    "zh": "她覺得非常無聊。",
    "cat": "情緒"
  },
  {
    "en": "She feel very anxious.",
    "zh": "她覺得非常焦慮。",
    "cat": "情緒"
  },
  {
    "en": "She went to the hospital because of a headache.",
    "zh": "她去醫院因為頭痛。",
    "cat": "醫療"
  },
  {
    "en": "She went to the hospital because of a fever.",
    "zh": "她去醫院因為發燒。",
    "cat": "醫療"
  },
  {
    "en": "She went to the hospital because of a cold.",
    "zh": "她去醫院因為感冒。",
    "cat": "醫療"
  },
  {
    "en": "She went to the hospital because of a stomachache.",
    "zh": "她去醫院因為胃痛。",
    "cat": "醫療"
  },
  {
    "en": "She went to the hospital because of a cough.",
    "zh": "她去醫院因為咳嗽。",
    "cat": "醫療"
  },
  {
    "en": "She went to the hospital because of a sore throat.",
    "zh": "她去醫院因為喉嚨痛。",
    "cat": "醫療"
  },
  {
    "en": "She went to the hospital because of a toothache.",
    "zh": "她去醫院因為牙痛。",
    "cat": "醫療"
  },
  {
    "en": "She went to the hospital because of a backache.",
    "zh": "她去醫院因為背痛。",
    "cat": "醫療"
  },
  {
    "en": "She want to learn how to play basketball.",
    "zh": "她想學如何打籃球。",
    "cat": "運動"
  },
  {
    "en": "She want to learn how to play baseball.",
    "zh": "她想學如何打棒球。",
    "cat": "運動"
  },
  {
    "en": "She want to learn how to play tennis.",
    "zh": "她想學如何打網球。",
    "cat": "運動"
  },
  {
    "en": "She want to learn how to play soccer.",
    "zh": "她想學如何打足球。",
    "cat": "運動"
  },
  {
    "en": "She want to learn how to play golf.",
    "zh": "她想學如何打高爾夫。",
    "cat": "運動"
  },
  {
    "en": "She want to learn how to play volleyball.",
    "zh": "她想學如何打排球。",
    "cat": "運動"
  },
  {
    "en": "She want to learn how to play badminton.",
    "zh": "她想學如何打羽毛球。",
    "cat": "運動"
  },
  {
    "en": "She want to learn how to play table tennis.",
    "zh": "她想學如何打桌球。",
    "cat": "運動"
  },
  {
    "en": "She downloaded a new app.",
    "zh": "她下載了一個新的應用程式。",
    "cat": "科技"
  },
  {
    "en": "She downloaded a new software.",
    "zh": "她下載了一個新的軟體。",
    "cat": "科技"
  },
  {
    "en": "She downloaded a new game.",
    "zh": "她下載了一個新的遊戲。",
    "cat": "科技"
  },
  {
    "en": "She downloaded a new update.",
    "zh": "她下載了一個新的更新檔。",
    "cat": "科技"
  },
  {
    "en": "She downloaded a new program.",
    "zh": "她下載了一個新的程式。",
    "cat": "科技"
  },
  {
    "en": "She downloaded a new browser.",
    "zh": "她下載了一個新的瀏覽器。",
    "cat": "科技"
  },
  {
    "en": "She downloaded a new driver.",
    "zh": "她下載了一個新的驅動程式。",
    "cat": "科技"
  },
  {
    "en": "She downloaded a new plugin.",
    "zh": "她下載了一個新的擴充功能。",
    "cat": "科技"
  },
  {
    "en": "She have to prepare for the exam.",
    "zh": "她必須準備考試。",
    "cat": "多益必考"
  },
  {
    "en": "She have to prepare for the interview.",
    "zh": "她必須準備面試。",
    "cat": "多益必考"
  },
  {
    "en": "She have to prepare for the presentation.",
    "zh": "她必須準備簡報。",
    "cat": "多益必考"
  },
  {
    "en": "She have to prepare for the test.",
    "zh": "她必須準備測驗。",
    "cat": "多益必考"
  },
  {
    "en": "She have to prepare for the project.",
    "zh": "她必須準備專案。",
    "cat": "多益必考"
  },
  {
    "en": "She have to prepare for the negotiation.",
    "zh": "她必須準備談判。",
    "cat": "多益必考"
  },
  {
    "en": "She have to prepare for the audit.",
    "zh": "她必須準備審計。",
    "cat": "多益必考"
  },
  {
    "en": "She have to prepare for the evaluation.",
    "zh": "她必須準備評估。",
    "cat": "多益必考"
  },
  {
    "en": "We need to buy a new laptop.",
    "zh": "我們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "We need to buy a new phone.",
    "zh": "我們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "We need to buy a new shirt.",
    "zh": "我們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "We need to buy a new bag.",
    "zh": "我們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "We need to buy a new monitor.",
    "zh": "我們需要買一個新的螢幕。",
    "cat": "購物"
  },
  {
    "en": "We need to buy a new mouse.",
    "zh": "我們需要買一個新的滑鼠。",
    "cat": "購物"
  },
  {
    "en": "We need to buy a new keyboard.",
    "zh": "我們需要買一個新的鍵盤。",
    "cat": "購物"
  },
  {
    "en": "We need to buy a new watch.",
    "zh": "我們需要買一個新的手錶。",
    "cat": "購物"
  },
  {
    "en": "We will travel to Japan.",
    "zh": "我們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "We will travel to Korea.",
    "zh": "我們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "We will travel to America.",
    "zh": "我們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "We will travel to Europe.",
    "zh": "我們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "We will travel to Australia.",
    "zh": "我們將會去澳洲。",
    "cat": "旅遊"
  },
  {
    "en": "We will travel to Canada.",
    "zh": "我們將會去加拿大。",
    "cat": "旅遊"
  },
  {
    "en": "We will travel to Thailand.",
    "zh": "我們將會去泰國。",
    "cat": "旅遊"
  },
  {
    "en": "We will travel to Singapore.",
    "zh": "我們將會去新加坡。",
    "cat": "旅遊"
  },
  {
    "en": "We have a meeting with the manager.",
    "zh": "我們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "We have a meeting with the client.",
    "zh": "我們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "We have a meeting with the team.",
    "zh": "我們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "We have a meeting with the boss.",
    "zh": "我們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "We have a meeting with the investor.",
    "zh": "我們要和...開會投資人。",
    "cat": "商業"
  },
  {
    "en": "We have a meeting with the partner.",
    "zh": "我們要和...開會合夥人。",
    "cat": "商業"
  },
  {
    "en": "We have a meeting with the candidate.",
    "zh": "我們要和...開會應徵者。",
    "cat": "商業"
  },
  {
    "en": "We have a meeting with the director.",
    "zh": "我們要和...開會總監。",
    "cat": "商業"
  },
  {
    "en": "We feel very happy.",
    "zh": "我們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "We feel very sad.",
    "zh": "我們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "We feel very angry.",
    "zh": "我們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "We feel very nervous.",
    "zh": "我們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "We feel very excited.",
    "zh": "我們覺得非常興奮。",
    "cat": "情緒"
  },
  {
    "en": "We feel very tired.",
    "zh": "我們覺得非常疲倦。",
    "cat": "情緒"
  },
  {
    "en": "We feel very bored.",
    "zh": "我們覺得非常無聊。",
    "cat": "情緒"
  },
  {
    "en": "We feel very anxious.",
    "zh": "我們覺得非常焦慮。",
    "cat": "情緒"
  },
  {
    "en": "We went to the hospital because of a headache.",
    "zh": "我們去醫院因為頭痛。",
    "cat": "醫療"
  },
  {
    "en": "We went to the hospital because of a fever.",
    "zh": "我們去醫院因為發燒。",
    "cat": "醫療"
  },
  {
    "en": "We went to the hospital because of a cold.",
    "zh": "我們去醫院因為感冒。",
    "cat": "醫療"
  },
  {
    "en": "We went to the hospital because of a stomachache.",
    "zh": "我們去醫院因為胃痛。",
    "cat": "醫療"
  },
  {
    "en": "We went to the hospital because of a cough.",
    "zh": "我們去醫院因為咳嗽。",
    "cat": "醫療"
  },
  {
    "en": "We went to the hospital because of a sore throat.",
    "zh": "我們去醫院因為喉嚨痛。",
    "cat": "醫療"
  },
  {
    "en": "We went to the hospital because of a toothache.",
    "zh": "我們去醫院因為牙痛。",
    "cat": "醫療"
  },
  {
    "en": "We went to the hospital because of a backache.",
    "zh": "我們去醫院因為背痛。",
    "cat": "醫療"
  },
  {
    "en": "We want to learn how to play basketball.",
    "zh": "我們想學如何打籃球。",
    "cat": "運動"
  },
  {
    "en": "We want to learn how to play baseball.",
    "zh": "我們想學如何打棒球。",
    "cat": "運動"
  },
  {
    "en": "We want to learn how to play tennis.",
    "zh": "我們想學如何打網球。",
    "cat": "運動"
  },
  {
    "en": "We want to learn how to play soccer.",
    "zh": "我們想學如何打足球。",
    "cat": "運動"
  },
  {
    "en": "We want to learn how to play golf.",
    "zh": "我們想學如何打高爾夫。",
    "cat": "運動"
  },
  {
    "en": "We want to learn how to play volleyball.",
    "zh": "我們想學如何打排球。",
    "cat": "運動"
  },
  {
    "en": "We want to learn how to play badminton.",
    "zh": "我們想學如何打羽毛球。",
    "cat": "運動"
  },
  {
    "en": "We want to learn how to play table tennis.",
    "zh": "我們想學如何打桌球。",
    "cat": "運動"
  },
  {
    "en": "We downloaded a new app.",
    "zh": "我們下載了一個新的應用程式。",
    "cat": "科技"
  },
  {
    "en": "We downloaded a new software.",
    "zh": "我們下載了一個新的軟體。",
    "cat": "科技"
  },
  {
    "en": "We downloaded a new game.",
    "zh": "我們下載了一個新的遊戲。",
    "cat": "科技"
  },
  {
    "en": "We downloaded a new update.",
    "zh": "我們下載了一個新的更新檔。",
    "cat": "科技"
  },
  {
    "en": "We downloaded a new program.",
    "zh": "我們下載了一個新的程式。",
    "cat": "科技"
  },
  {
    "en": "We downloaded a new browser.",
    "zh": "我們下載了一個新的瀏覽器。",
    "cat": "科技"
  },
  {
    "en": "We downloaded a new driver.",
    "zh": "我們下載了一個新的驅動程式。",
    "cat": "科技"
  },
  {
    "en": "We downloaded a new plugin.",
    "zh": "我們下載了一個新的擴充功能。",
    "cat": "科技"
  },
  {
    "en": "We have to prepare for the exam.",
    "zh": "我們必須準備考試。",
    "cat": "多益必考"
  },
  {
    "en": "We have to prepare for the interview.",
    "zh": "我們必須準備面試。",
    "cat": "多益必考"
  },
  {
    "en": "We have to prepare for the presentation.",
    "zh": "我們必須準備簡報。",
    "cat": "多益必考"
  },
  {
    "en": "We have to prepare for the test.",
    "zh": "我們必須準備測驗。",
    "cat": "多益必考"
  },
  {
    "en": "We have to prepare for the project.",
    "zh": "我們必須準備專案。",
    "cat": "多益必考"
  },
  {
    "en": "We have to prepare for the negotiation.",
    "zh": "我們必須準備談判。",
    "cat": "多益必考"
  },
  {
    "en": "We have to prepare for the audit.",
    "zh": "我們必須準備審計。",
    "cat": "多益必考"
  },
  {
    "en": "We have to prepare for the evaluation.",
    "zh": "我們必須準備評估。",
    "cat": "多益必考"
  },
  {
    "en": "They need to buy a new laptop.",
    "zh": "他們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "They need to buy a new phone.",
    "zh": "他們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "They need to buy a new shirt.",
    "zh": "他們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "They need to buy a new bag.",
    "zh": "他們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "They need to buy a new monitor.",
    "zh": "他們需要買一個新的螢幕。",
    "cat": "購物"
  },
  {
    "en": "They need to buy a new mouse.",
    "zh": "他們需要買一個新的滑鼠。",
    "cat": "購物"
  },
  {
    "en": "They need to buy a new keyboard.",
    "zh": "他們需要買一個新的鍵盤。",
    "cat": "購物"
  },
  {
    "en": "They need to buy a new watch.",
    "zh": "他們需要買一個新的手錶。",
    "cat": "購物"
  },
  {
    "en": "They will travel to Japan.",
    "zh": "他們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "They will travel to Korea.",
    "zh": "他們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "They will travel to America.",
    "zh": "他們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "They will travel to Europe.",
    "zh": "他們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "They will travel to Australia.",
    "zh": "他們將會去澳洲。",
    "cat": "旅遊"
  },
  {
    "en": "They will travel to Canada.",
    "zh": "他們將會去加拿大。",
    "cat": "旅遊"
  },
  {
    "en": "They will travel to Thailand.",
    "zh": "他們將會去泰國。",
    "cat": "旅遊"
  },
  {
    "en": "They will travel to Singapore.",
    "zh": "他們將會去新加坡。",
    "cat": "旅遊"
  },
  {
    "en": "They have a meeting with the manager.",
    "zh": "他們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "They have a meeting with the client.",
    "zh": "他們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "They have a meeting with the team.",
    "zh": "他們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "They have a meeting with the boss.",
    "zh": "他們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "They have a meeting with the investor.",
    "zh": "他們要和...開會投資人。",
    "cat": "商業"
  },
  {
    "en": "They have a meeting with the partner.",
    "zh": "他們要和...開會合夥人。",
    "cat": "商業"
  },
  {
    "en": "They have a meeting with the candidate.",
    "zh": "他們要和...開會應徵者。",
    "cat": "商業"
  },
  {
    "en": "They have a meeting with the director.",
    "zh": "他們要和...開會總監。",
    "cat": "商業"
  },
  {
    "en": "They feel very happy.",
    "zh": "他們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "They feel very sad.",
    "zh": "他們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "They feel very angry.",
    "zh": "他們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "They feel very nervous.",
    "zh": "他們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "They feel very excited.",
    "zh": "他們覺得非常興奮。",
    "cat": "情緒"
  },
  {
    "en": "They feel very tired.",
    "zh": "他們覺得非常疲倦。",
    "cat": "情緒"
  },
  {
    "en": "They feel very bored.",
    "zh": "他們覺得非常無聊。",
    "cat": "情緒"
  },
  {
    "en": "They feel very anxious.",
    "zh": "他們覺得非常焦慮。",
    "cat": "情緒"
  },
  {
    "en": "They went to the hospital because of a headache.",
    "zh": "他們去醫院因為頭痛。",
    "cat": "醫療"
  },
  {
    "en": "They went to the hospital because of a fever.",
    "zh": "他們去醫院因為發燒。",
    "cat": "醫療"
  },
  {
    "en": "They went to the hospital because of a cold.",
    "zh": "他們去醫院因為感冒。",
    "cat": "醫療"
  },
  {
    "en": "They went to the hospital because of a stomachache.",
    "zh": "他們去醫院因為胃痛。",
    "cat": "醫療"
  },
  {
    "en": "They went to the hospital because of a cough.",
    "zh": "他們去醫院因為咳嗽。",
    "cat": "醫療"
  },
  {
    "en": "They went to the hospital because of a sore throat.",
    "zh": "他們去醫院因為喉嚨痛。",
    "cat": "醫療"
  },
  {
    "en": "They went to the hospital because of a toothache.",
    "zh": "他們去醫院因為牙痛。",
    "cat": "醫療"
  },
  {
    "en": "They went to the hospital because of a backache.",
    "zh": "他們去醫院因為背痛。",
    "cat": "醫療"
  },
  {
    "en": "They want to learn how to play basketball.",
    "zh": "他們想學如何打籃球。",
    "cat": "運動"
  },
  {
    "en": "They want to learn how to play baseball.",
    "zh": "他們想學如何打棒球。",
    "cat": "運動"
  },
  {
    "en": "They want to learn how to play tennis.",
    "zh": "他們想學如何打網球。",
    "cat": "運動"
  },
  {
    "en": "They want to learn how to play soccer.",
    "zh": "他們想學如何打足球。",
    "cat": "運動"
  },
  {
    "en": "They want to learn how to play golf.",
    "zh": "他們想學如何打高爾夫。",
    "cat": "運動"
  },
  {
    "en": "They want to learn how to play volleyball.",
    "zh": "他們想學如何打排球。",
    "cat": "運動"
  },
  {
    "en": "They want to learn how to play badminton.",
    "zh": "他們想學如何打羽毛球。",
    "cat": "運動"
  },
  {
    "en": "They want to learn how to play table tennis.",
    "zh": "他們想學如何打桌球。",
    "cat": "運動"
  },
  {
    "en": "They downloaded a new app.",
    "zh": "他們下載了一個新的應用程式。",
    "cat": "科技"
  },
  {
    "en": "They downloaded a new software.",
    "zh": "他們下載了一個新的軟體。",
    "cat": "科技"
  },
  {
    "en": "They downloaded a new game.",
    "zh": "他們下載了一個新的遊戲。",
    "cat": "科技"
  },
  {
    "en": "They downloaded a new update.",
    "zh": "他們下載了一個新的更新檔。",
    "cat": "科技"
  },
  {
    "en": "They downloaded a new program.",
    "zh": "他們下載了一個新的程式。",
    "cat": "科技"
  },
  {
    "en": "They downloaded a new browser.",
    "zh": "他們下載了一個新的瀏覽器。",
    "cat": "科技"
  },
  {
    "en": "They downloaded a new driver.",
    "zh": "他們下載了一個新的驅動程式。",
    "cat": "科技"
  },
  {
    "en": "They downloaded a new plugin.",
    "zh": "他們下載了一個新的擴充功能。",
    "cat": "科技"
  },
  {
    "en": "They have to prepare for the exam.",
    "zh": "他們必須準備考試。",
    "cat": "多益必考"
  },
  {
    "en": "They have to prepare for the interview.",
    "zh": "他們必須準備面試。",
    "cat": "多益必考"
  },
  {
    "en": "They have to prepare for the presentation.",
    "zh": "他們必須準備簡報。",
    "cat": "多益必考"
  },
  {
    "en": "They have to prepare for the test.",
    "zh": "他們必須準備測驗。",
    "cat": "多益必考"
  },
  {
    "en": "They have to prepare for the project.",
    "zh": "他們必須準備專案。",
    "cat": "多益必考"
  },
  {
    "en": "They have to prepare for the negotiation.",
    "zh": "他們必須準備談判。",
    "cat": "多益必考"
  },
  {
    "en": "They have to prepare for the audit.",
    "zh": "他們必須準備審計。",
    "cat": "多益必考"
  },
  {
    "en": "They have to prepare for the evaluation.",
    "zh": "他們必須準備評估。",
    "cat": "多益必考"
  },
  {
    "en": "yesterday, I need to buy a new laptop.",
    "zh": "昨天，我需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "today, I need to buy a new laptop.",
    "zh": "今天，我需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, I need to buy a new laptop.",
    "zh": "明天，我需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "next week, I need to buy a new laptop.",
    "zh": "下週，我需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "last year, I need to buy a new laptop.",
    "zh": "去年，我需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "in the morning, I need to buy a new laptop.",
    "zh": "早上，我需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "at night, I need to buy a new laptop.",
    "zh": "晚上，我需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "yesterday, I need to buy a new phone.",
    "zh": "昨天，我需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "today, I need to buy a new phone.",
    "zh": "今天，我需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, I need to buy a new phone.",
    "zh": "明天，我需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "next week, I need to buy a new phone.",
    "zh": "下週，我需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "last year, I need to buy a new phone.",
    "zh": "去年，我需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "in the morning, I need to buy a new phone.",
    "zh": "早上，我需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "at night, I need to buy a new phone.",
    "zh": "晚上，我需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "yesterday, I need to buy a new shirt.",
    "zh": "昨天，我需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "today, I need to buy a new shirt.",
    "zh": "今天，我需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, I need to buy a new shirt.",
    "zh": "明天，我需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "next week, I need to buy a new shirt.",
    "zh": "下週，我需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "last year, I need to buy a new shirt.",
    "zh": "去年，我需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "in the morning, I need to buy a new shirt.",
    "zh": "早上，我需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "at night, I need to buy a new shirt.",
    "zh": "晚上，我需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "yesterday, I need to buy a new bag.",
    "zh": "昨天，我需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "today, I need to buy a new bag.",
    "zh": "今天，我需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, I need to buy a new bag.",
    "zh": "明天，我需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "next week, I need to buy a new bag.",
    "zh": "下週，我需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "last year, I need to buy a new bag.",
    "zh": "去年，我需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "in the morning, I need to buy a new bag.",
    "zh": "早上，我需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "at night, I need to buy a new bag.",
    "zh": "晚上，我需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "yesterday, I will travel to Japan.",
    "zh": "昨天，我將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "today, I will travel to Japan.",
    "zh": "今天，我將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, I will travel to Japan.",
    "zh": "明天，我將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "next week, I will travel to Japan.",
    "zh": "下週，我將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "last year, I will travel to Japan.",
    "zh": "去年，我將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, I will travel to Japan.",
    "zh": "早上，我將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "at night, I will travel to Japan.",
    "zh": "晚上，我將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, I will travel to Korea.",
    "zh": "昨天，我將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "today, I will travel to Korea.",
    "zh": "今天，我將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, I will travel to Korea.",
    "zh": "明天，我將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, I will travel to Korea.",
    "zh": "下週，我將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, I will travel to Korea.",
    "zh": "去年，我將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, I will travel to Korea.",
    "zh": "早上，我將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, I will travel to Korea.",
    "zh": "晚上，我將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, I will travel to America.",
    "zh": "昨天，我將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "today, I will travel to America.",
    "zh": "今天，我將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, I will travel to America.",
    "zh": "明天，我將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, I will travel to America.",
    "zh": "下週，我將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, I will travel to America.",
    "zh": "去年，我將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, I will travel to America.",
    "zh": "早上，我將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, I will travel to America.",
    "zh": "晚上，我將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, I will travel to Europe.",
    "zh": "昨天，我將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "today, I will travel to Europe.",
    "zh": "今天，我將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, I will travel to Europe.",
    "zh": "明天，我將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "next week, I will travel to Europe.",
    "zh": "下週，我將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "last year, I will travel to Europe.",
    "zh": "去年，我將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, I will travel to Europe.",
    "zh": "早上，我將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "at night, I will travel to Europe.",
    "zh": "晚上，我將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, I have a meeting with the manager.",
    "zh": "昨天，我要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "today, I have a meeting with the manager.",
    "zh": "今天，我要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, I have a meeting with the manager.",
    "zh": "明天，我要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "next week, I have a meeting with the manager.",
    "zh": "下週，我要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "last year, I have a meeting with the manager.",
    "zh": "去年，我要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "in the morning, I have a meeting with the manager.",
    "zh": "早上，我要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "at night, I have a meeting with the manager.",
    "zh": "晚上，我要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "yesterday, I have a meeting with the client.",
    "zh": "昨天，我要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "today, I have a meeting with the client.",
    "zh": "今天，我要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, I have a meeting with the client.",
    "zh": "明天，我要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "next week, I have a meeting with the client.",
    "zh": "下週，我要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "last year, I have a meeting with the client.",
    "zh": "去年，我要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "in the morning, I have a meeting with the client.",
    "zh": "早上，我要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "at night, I have a meeting with the client.",
    "zh": "晚上，我要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "yesterday, I have a meeting with the team.",
    "zh": "昨天，我要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "today, I have a meeting with the team.",
    "zh": "今天，我要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, I have a meeting with the team.",
    "zh": "明天，我要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "next week, I have a meeting with the team.",
    "zh": "下週，我要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "last year, I have a meeting with the team.",
    "zh": "去年，我要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "in the morning, I have a meeting with the team.",
    "zh": "早上，我要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "at night, I have a meeting with the team.",
    "zh": "晚上，我要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "yesterday, I have a meeting with the boss.",
    "zh": "昨天，我要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "today, I have a meeting with the boss.",
    "zh": "今天，我要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, I have a meeting with the boss.",
    "zh": "明天，我要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "next week, I have a meeting with the boss.",
    "zh": "下週，我要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "last year, I have a meeting with the boss.",
    "zh": "去年，我要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "in the morning, I have a meeting with the boss.",
    "zh": "早上，我要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "at night, I have a meeting with the boss.",
    "zh": "晚上，我要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "yesterday, I feel very happy.",
    "zh": "昨天，我覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "today, I feel very happy.",
    "zh": "今天，我覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, I feel very happy.",
    "zh": "明天，我覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "next week, I feel very happy.",
    "zh": "下週，我覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "last year, I feel very happy.",
    "zh": "去年，我覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, I feel very happy.",
    "zh": "早上，我覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "at night, I feel very happy.",
    "zh": "晚上，我覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, I feel very sad.",
    "zh": "昨天，我覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "today, I feel very sad.",
    "zh": "今天，我覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, I feel very sad.",
    "zh": "明天，我覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "next week, I feel very sad.",
    "zh": "下週，我覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "last year, I feel very sad.",
    "zh": "去年，我覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, I feel very sad.",
    "zh": "早上，我覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "at night, I feel very sad.",
    "zh": "晚上，我覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, I feel very angry.",
    "zh": "昨天，我覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "today, I feel very angry.",
    "zh": "今天，我覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, I feel very angry.",
    "zh": "明天，我覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "next week, I feel very angry.",
    "zh": "下週，我覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "last year, I feel very angry.",
    "zh": "去年，我覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, I feel very angry.",
    "zh": "早上，我覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "at night, I feel very angry.",
    "zh": "晚上，我覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, I feel very nervous.",
    "zh": "昨天，我覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "today, I feel very nervous.",
    "zh": "今天，我覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, I feel very nervous.",
    "zh": "明天，我覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "next week, I feel very nervous.",
    "zh": "下週，我覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "last year, I feel very nervous.",
    "zh": "去年，我覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, I feel very nervous.",
    "zh": "早上，我覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "at night, I feel very nervous.",
    "zh": "晚上，我覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, You need to buy a new laptop.",
    "zh": "昨天，你需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "today, You need to buy a new laptop.",
    "zh": "今天，你需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, You need to buy a new laptop.",
    "zh": "明天，你需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "next week, You need to buy a new laptop.",
    "zh": "下週，你需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "last year, You need to buy a new laptop.",
    "zh": "去年，你需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "in the morning, You need to buy a new laptop.",
    "zh": "早上，你需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "at night, You need to buy a new laptop.",
    "zh": "晚上，你需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "yesterday, You need to buy a new phone.",
    "zh": "昨天，你需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "today, You need to buy a new phone.",
    "zh": "今天，你需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, You need to buy a new phone.",
    "zh": "明天，你需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "next week, You need to buy a new phone.",
    "zh": "下週，你需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "last year, You need to buy a new phone.",
    "zh": "去年，你需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "in the morning, You need to buy a new phone.",
    "zh": "早上，你需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "at night, You need to buy a new phone.",
    "zh": "晚上，你需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "yesterday, You need to buy a new shirt.",
    "zh": "昨天，你需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "today, You need to buy a new shirt.",
    "zh": "今天，你需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, You need to buy a new shirt.",
    "zh": "明天，你需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "next week, You need to buy a new shirt.",
    "zh": "下週，你需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "last year, You need to buy a new shirt.",
    "zh": "去年，你需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "in the morning, You need to buy a new shirt.",
    "zh": "早上，你需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "at night, You need to buy a new shirt.",
    "zh": "晚上，你需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "yesterday, You need to buy a new bag.",
    "zh": "昨天，你需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "today, You need to buy a new bag.",
    "zh": "今天，你需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, You need to buy a new bag.",
    "zh": "明天，你需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "next week, You need to buy a new bag.",
    "zh": "下週，你需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "last year, You need to buy a new bag.",
    "zh": "去年，你需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "in the morning, You need to buy a new bag.",
    "zh": "早上，你需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "at night, You need to buy a new bag.",
    "zh": "晚上，你需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "yesterday, You will travel to Japan.",
    "zh": "昨天，你將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "today, You will travel to Japan.",
    "zh": "今天，你將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, You will travel to Japan.",
    "zh": "明天，你將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "next week, You will travel to Japan.",
    "zh": "下週，你將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "last year, You will travel to Japan.",
    "zh": "去年，你將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, You will travel to Japan.",
    "zh": "早上，你將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "at night, You will travel to Japan.",
    "zh": "晚上，你將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, You will travel to Korea.",
    "zh": "昨天，你將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "today, You will travel to Korea.",
    "zh": "今天，你將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, You will travel to Korea.",
    "zh": "明天，你將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, You will travel to Korea.",
    "zh": "下週，你將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, You will travel to Korea.",
    "zh": "去年，你將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, You will travel to Korea.",
    "zh": "早上，你將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, You will travel to Korea.",
    "zh": "晚上，你將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, You will travel to America.",
    "zh": "昨天，你將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "today, You will travel to America.",
    "zh": "今天，你將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, You will travel to America.",
    "zh": "明天，你將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, You will travel to America.",
    "zh": "下週，你將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, You will travel to America.",
    "zh": "去年，你將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, You will travel to America.",
    "zh": "早上，你將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, You will travel to America.",
    "zh": "晚上，你將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, You will travel to Europe.",
    "zh": "昨天，你將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "today, You will travel to Europe.",
    "zh": "今天，你將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, You will travel to Europe.",
    "zh": "明天，你將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "next week, You will travel to Europe.",
    "zh": "下週，你將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "last year, You will travel to Europe.",
    "zh": "去年，你將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, You will travel to Europe.",
    "zh": "早上，你將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "at night, You will travel to Europe.",
    "zh": "晚上，你將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, You have a meeting with the manager.",
    "zh": "昨天，你要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "today, You have a meeting with the manager.",
    "zh": "今天，你要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, You have a meeting with the manager.",
    "zh": "明天，你要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "next week, You have a meeting with the manager.",
    "zh": "下週，你要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "last year, You have a meeting with the manager.",
    "zh": "去年，你要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "in the morning, You have a meeting with the manager.",
    "zh": "早上，你要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "at night, You have a meeting with the manager.",
    "zh": "晚上，你要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "yesterday, You have a meeting with the client.",
    "zh": "昨天，你要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "today, You have a meeting with the client.",
    "zh": "今天，你要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, You have a meeting with the client.",
    "zh": "明天，你要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "next week, You have a meeting with the client.",
    "zh": "下週，你要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "last year, You have a meeting with the client.",
    "zh": "去年，你要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "in the morning, You have a meeting with the client.",
    "zh": "早上，你要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "at night, You have a meeting with the client.",
    "zh": "晚上，你要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "yesterday, You have a meeting with the team.",
    "zh": "昨天，你要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "today, You have a meeting with the team.",
    "zh": "今天，你要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, You have a meeting with the team.",
    "zh": "明天，你要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "next week, You have a meeting with the team.",
    "zh": "下週，你要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "last year, You have a meeting with the team.",
    "zh": "去年，你要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "in the morning, You have a meeting with the team.",
    "zh": "早上，你要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "at night, You have a meeting with the team.",
    "zh": "晚上，你要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "yesterday, You have a meeting with the boss.",
    "zh": "昨天，你要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "today, You have a meeting with the boss.",
    "zh": "今天，你要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, You have a meeting with the boss.",
    "zh": "明天，你要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "next week, You have a meeting with the boss.",
    "zh": "下週，你要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "last year, You have a meeting with the boss.",
    "zh": "去年，你要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "in the morning, You have a meeting with the boss.",
    "zh": "早上，你要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "at night, You have a meeting with the boss.",
    "zh": "晚上，你要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "yesterday, You feel very happy.",
    "zh": "昨天，你覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "today, You feel very happy.",
    "zh": "今天，你覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, You feel very happy.",
    "zh": "明天，你覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "next week, You feel very happy.",
    "zh": "下週，你覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "last year, You feel very happy.",
    "zh": "去年，你覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, You feel very happy.",
    "zh": "早上，你覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "at night, You feel very happy.",
    "zh": "晚上，你覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, You feel very sad.",
    "zh": "昨天，你覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "today, You feel very sad.",
    "zh": "今天，你覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, You feel very sad.",
    "zh": "明天，你覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "next week, You feel very sad.",
    "zh": "下週，你覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "last year, You feel very sad.",
    "zh": "去年，你覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, You feel very sad.",
    "zh": "早上，你覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "at night, You feel very sad.",
    "zh": "晚上，你覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, You feel very angry.",
    "zh": "昨天，你覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "today, You feel very angry.",
    "zh": "今天，你覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, You feel very angry.",
    "zh": "明天，你覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "next week, You feel very angry.",
    "zh": "下週，你覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "last year, You feel very angry.",
    "zh": "去年，你覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, You feel very angry.",
    "zh": "早上，你覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "at night, You feel very angry.",
    "zh": "晚上，你覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, You feel very nervous.",
    "zh": "昨天，你覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "today, You feel very nervous.",
    "zh": "今天，你覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, You feel very nervous.",
    "zh": "明天，你覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "next week, You feel very nervous.",
    "zh": "下週，你覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "last year, You feel very nervous.",
    "zh": "去年，你覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, You feel very nervous.",
    "zh": "早上，你覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "at night, You feel very nervous.",
    "zh": "晚上，你覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, He need to buy a new laptop.",
    "zh": "昨天，他需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "today, He need to buy a new laptop.",
    "zh": "今天，他需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, He need to buy a new laptop.",
    "zh": "明天，他需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "next week, He need to buy a new laptop.",
    "zh": "下週，他需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "last year, He need to buy a new laptop.",
    "zh": "去年，他需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "in the morning, He need to buy a new laptop.",
    "zh": "早上，他需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "at night, He need to buy a new laptop.",
    "zh": "晚上，他需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "yesterday, He need to buy a new phone.",
    "zh": "昨天，他需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "today, He need to buy a new phone.",
    "zh": "今天，他需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, He need to buy a new phone.",
    "zh": "明天，他需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "next week, He need to buy a new phone.",
    "zh": "下週，他需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "last year, He need to buy a new phone.",
    "zh": "去年，他需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "in the morning, He need to buy a new phone.",
    "zh": "早上，他需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "at night, He need to buy a new phone.",
    "zh": "晚上，他需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "yesterday, He need to buy a new shirt.",
    "zh": "昨天，他需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "today, He need to buy a new shirt.",
    "zh": "今天，他需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, He need to buy a new shirt.",
    "zh": "明天，他需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "next week, He need to buy a new shirt.",
    "zh": "下週，他需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "last year, He need to buy a new shirt.",
    "zh": "去年，他需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "in the morning, He need to buy a new shirt.",
    "zh": "早上，他需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "at night, He need to buy a new shirt.",
    "zh": "晚上，他需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "yesterday, He need to buy a new bag.",
    "zh": "昨天，他需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "today, He need to buy a new bag.",
    "zh": "今天，他需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, He need to buy a new bag.",
    "zh": "明天，他需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "next week, He need to buy a new bag.",
    "zh": "下週，他需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "last year, He need to buy a new bag.",
    "zh": "去年，他需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "in the morning, He need to buy a new bag.",
    "zh": "早上，他需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "at night, He need to buy a new bag.",
    "zh": "晚上，他需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "yesterday, He will travel to Japan.",
    "zh": "昨天，他將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "today, He will travel to Japan.",
    "zh": "今天，他將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, He will travel to Japan.",
    "zh": "明天，他將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "next week, He will travel to Japan.",
    "zh": "下週，他將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "last year, He will travel to Japan.",
    "zh": "去年，他將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, He will travel to Japan.",
    "zh": "早上，他將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "at night, He will travel to Japan.",
    "zh": "晚上，他將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, He will travel to Korea.",
    "zh": "昨天，他將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "today, He will travel to Korea.",
    "zh": "今天，他將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, He will travel to Korea.",
    "zh": "明天，他將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, He will travel to Korea.",
    "zh": "下週，他將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, He will travel to Korea.",
    "zh": "去年，他將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, He will travel to Korea.",
    "zh": "早上，他將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, He will travel to Korea.",
    "zh": "晚上，他將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, He will travel to America.",
    "zh": "昨天，他將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "today, He will travel to America.",
    "zh": "今天，他將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, He will travel to America.",
    "zh": "明天，他將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, He will travel to America.",
    "zh": "下週，他將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, He will travel to America.",
    "zh": "去年，他將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, He will travel to America.",
    "zh": "早上，他將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, He will travel to America.",
    "zh": "晚上，他將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, He will travel to Europe.",
    "zh": "昨天，他將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "today, He will travel to Europe.",
    "zh": "今天，他將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, He will travel to Europe.",
    "zh": "明天，他將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "next week, He will travel to Europe.",
    "zh": "下週，他將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "last year, He will travel to Europe.",
    "zh": "去年，他將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, He will travel to Europe.",
    "zh": "早上，他將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "at night, He will travel to Europe.",
    "zh": "晚上，他將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, He have a meeting with the manager.",
    "zh": "昨天，他要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "today, He have a meeting with the manager.",
    "zh": "今天，他要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, He have a meeting with the manager.",
    "zh": "明天，他要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "next week, He have a meeting with the manager.",
    "zh": "下週，他要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "last year, He have a meeting with the manager.",
    "zh": "去年，他要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "in the morning, He have a meeting with the manager.",
    "zh": "早上，他要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "at night, He have a meeting with the manager.",
    "zh": "晚上，他要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "yesterday, He have a meeting with the client.",
    "zh": "昨天，他要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "today, He have a meeting with the client.",
    "zh": "今天，他要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, He have a meeting with the client.",
    "zh": "明天，他要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "next week, He have a meeting with the client.",
    "zh": "下週，他要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "last year, He have a meeting with the client.",
    "zh": "去年，他要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "in the morning, He have a meeting with the client.",
    "zh": "早上，他要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "at night, He have a meeting with the client.",
    "zh": "晚上，他要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "yesterday, He have a meeting with the team.",
    "zh": "昨天，他要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "today, He have a meeting with the team.",
    "zh": "今天，他要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, He have a meeting with the team.",
    "zh": "明天，他要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "next week, He have a meeting with the team.",
    "zh": "下週，他要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "last year, He have a meeting with the team.",
    "zh": "去年，他要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "in the morning, He have a meeting with the team.",
    "zh": "早上，他要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "at night, He have a meeting with the team.",
    "zh": "晚上，他要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "yesterday, He have a meeting with the boss.",
    "zh": "昨天，他要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "today, He have a meeting with the boss.",
    "zh": "今天，他要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, He have a meeting with the boss.",
    "zh": "明天，他要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "next week, He have a meeting with the boss.",
    "zh": "下週，他要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "last year, He have a meeting with the boss.",
    "zh": "去年，他要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "in the morning, He have a meeting with the boss.",
    "zh": "早上，他要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "at night, He have a meeting with the boss.",
    "zh": "晚上，他要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "yesterday, He feel very happy.",
    "zh": "昨天，他覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "today, He feel very happy.",
    "zh": "今天，他覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, He feel very happy.",
    "zh": "明天，他覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "next week, He feel very happy.",
    "zh": "下週，他覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "last year, He feel very happy.",
    "zh": "去年，他覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, He feel very happy.",
    "zh": "早上，他覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "at night, He feel very happy.",
    "zh": "晚上，他覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, He feel very sad.",
    "zh": "昨天，他覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "today, He feel very sad.",
    "zh": "今天，他覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, He feel very sad.",
    "zh": "明天，他覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "next week, He feel very sad.",
    "zh": "下週，他覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "last year, He feel very sad.",
    "zh": "去年，他覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, He feel very sad.",
    "zh": "早上，他覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "at night, He feel very sad.",
    "zh": "晚上，他覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, He feel very angry.",
    "zh": "昨天，他覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "today, He feel very angry.",
    "zh": "今天，他覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, He feel very angry.",
    "zh": "明天，他覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "next week, He feel very angry.",
    "zh": "下週，他覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "last year, He feel very angry.",
    "zh": "去年，他覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, He feel very angry.",
    "zh": "早上，他覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "at night, He feel very angry.",
    "zh": "晚上，他覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, He feel very nervous.",
    "zh": "昨天，他覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "today, He feel very nervous.",
    "zh": "今天，他覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, He feel very nervous.",
    "zh": "明天，他覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "next week, He feel very nervous.",
    "zh": "下週，他覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "last year, He feel very nervous.",
    "zh": "去年，他覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, He feel very nervous.",
    "zh": "早上，他覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "at night, He feel very nervous.",
    "zh": "晚上，他覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, She need to buy a new laptop.",
    "zh": "昨天，她需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "today, She need to buy a new laptop.",
    "zh": "今天，她需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, She need to buy a new laptop.",
    "zh": "明天，她需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "next week, She need to buy a new laptop.",
    "zh": "下週，她需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "last year, She need to buy a new laptop.",
    "zh": "去年，她需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "in the morning, She need to buy a new laptop.",
    "zh": "早上，她需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "at night, She need to buy a new laptop.",
    "zh": "晚上，她需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "yesterday, She need to buy a new phone.",
    "zh": "昨天，她需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "today, She need to buy a new phone.",
    "zh": "今天，她需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, She need to buy a new phone.",
    "zh": "明天，她需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "next week, She need to buy a new phone.",
    "zh": "下週，她需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "last year, She need to buy a new phone.",
    "zh": "去年，她需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "in the morning, She need to buy a new phone.",
    "zh": "早上，她需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "at night, She need to buy a new phone.",
    "zh": "晚上，她需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "yesterday, She need to buy a new shirt.",
    "zh": "昨天，她需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "today, She need to buy a new shirt.",
    "zh": "今天，她需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, She need to buy a new shirt.",
    "zh": "明天，她需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "next week, She need to buy a new shirt.",
    "zh": "下週，她需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "last year, She need to buy a new shirt.",
    "zh": "去年，她需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "in the morning, She need to buy a new shirt.",
    "zh": "早上，她需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "at night, She need to buy a new shirt.",
    "zh": "晚上，她需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "yesterday, She need to buy a new bag.",
    "zh": "昨天，她需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "today, She need to buy a new bag.",
    "zh": "今天，她需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, She need to buy a new bag.",
    "zh": "明天，她需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "next week, She need to buy a new bag.",
    "zh": "下週，她需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "last year, She need to buy a new bag.",
    "zh": "去年，她需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "in the morning, She need to buy a new bag.",
    "zh": "早上，她需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "at night, She need to buy a new bag.",
    "zh": "晚上，她需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "yesterday, She will travel to Japan.",
    "zh": "昨天，她將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "today, She will travel to Japan.",
    "zh": "今天，她將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, She will travel to Japan.",
    "zh": "明天，她將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "next week, She will travel to Japan.",
    "zh": "下週，她將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "last year, She will travel to Japan.",
    "zh": "去年，她將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, She will travel to Japan.",
    "zh": "早上，她將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "at night, She will travel to Japan.",
    "zh": "晚上，她將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, She will travel to Korea.",
    "zh": "昨天，她將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "today, She will travel to Korea.",
    "zh": "今天，她將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, She will travel to Korea.",
    "zh": "明天，她將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, She will travel to Korea.",
    "zh": "下週，她將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, She will travel to Korea.",
    "zh": "去年，她將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, She will travel to Korea.",
    "zh": "早上，她將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, She will travel to Korea.",
    "zh": "晚上，她將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, She will travel to America.",
    "zh": "昨天，她將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "today, She will travel to America.",
    "zh": "今天，她將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, She will travel to America.",
    "zh": "明天，她將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, She will travel to America.",
    "zh": "下週，她將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, She will travel to America.",
    "zh": "去年，她將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, She will travel to America.",
    "zh": "早上，她將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, She will travel to America.",
    "zh": "晚上，她將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, She will travel to Europe.",
    "zh": "昨天，她將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "today, She will travel to Europe.",
    "zh": "今天，她將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, She will travel to Europe.",
    "zh": "明天，她將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "next week, She will travel to Europe.",
    "zh": "下週，她將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "last year, She will travel to Europe.",
    "zh": "去年，她將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, She will travel to Europe.",
    "zh": "早上，她將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "at night, She will travel to Europe.",
    "zh": "晚上，她將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, She have a meeting with the manager.",
    "zh": "昨天，她要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "today, She have a meeting with the manager.",
    "zh": "今天，她要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, She have a meeting with the manager.",
    "zh": "明天，她要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "next week, She have a meeting with the manager.",
    "zh": "下週，她要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "last year, She have a meeting with the manager.",
    "zh": "去年，她要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "in the morning, She have a meeting with the manager.",
    "zh": "早上，她要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "at night, She have a meeting with the manager.",
    "zh": "晚上，她要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "yesterday, She have a meeting with the client.",
    "zh": "昨天，她要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "today, She have a meeting with the client.",
    "zh": "今天，她要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, She have a meeting with the client.",
    "zh": "明天，她要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "next week, She have a meeting with the client.",
    "zh": "下週，她要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "last year, She have a meeting with the client.",
    "zh": "去年，她要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "in the morning, She have a meeting with the client.",
    "zh": "早上，她要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "at night, She have a meeting with the client.",
    "zh": "晚上，她要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "yesterday, She have a meeting with the team.",
    "zh": "昨天，她要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "today, She have a meeting with the team.",
    "zh": "今天，她要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, She have a meeting with the team.",
    "zh": "明天，她要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "next week, She have a meeting with the team.",
    "zh": "下週，她要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "last year, She have a meeting with the team.",
    "zh": "去年，她要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "in the morning, She have a meeting with the team.",
    "zh": "早上，她要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "at night, She have a meeting with the team.",
    "zh": "晚上，她要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "yesterday, She have a meeting with the boss.",
    "zh": "昨天，她要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "today, She have a meeting with the boss.",
    "zh": "今天，她要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, She have a meeting with the boss.",
    "zh": "明天，她要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "next week, She have a meeting with the boss.",
    "zh": "下週，她要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "last year, She have a meeting with the boss.",
    "zh": "去年，她要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "in the morning, She have a meeting with the boss.",
    "zh": "早上，她要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "at night, She have a meeting with the boss.",
    "zh": "晚上，她要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "yesterday, She feel very happy.",
    "zh": "昨天，她覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "today, She feel very happy.",
    "zh": "今天，她覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, She feel very happy.",
    "zh": "明天，她覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "next week, She feel very happy.",
    "zh": "下週，她覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "last year, She feel very happy.",
    "zh": "去年，她覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, She feel very happy.",
    "zh": "早上，她覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "at night, She feel very happy.",
    "zh": "晚上，她覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, She feel very sad.",
    "zh": "昨天，她覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "today, She feel very sad.",
    "zh": "今天，她覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, She feel very sad.",
    "zh": "明天，她覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "next week, She feel very sad.",
    "zh": "下週，她覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "last year, She feel very sad.",
    "zh": "去年，她覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, She feel very sad.",
    "zh": "早上，她覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "at night, She feel very sad.",
    "zh": "晚上，她覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, She feel very angry.",
    "zh": "昨天，她覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "today, She feel very angry.",
    "zh": "今天，她覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, She feel very angry.",
    "zh": "明天，她覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "next week, She feel very angry.",
    "zh": "下週，她覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "last year, She feel very angry.",
    "zh": "去年，她覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, She feel very angry.",
    "zh": "早上，她覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "at night, She feel very angry.",
    "zh": "晚上，她覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, She feel very nervous.",
    "zh": "昨天，她覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "today, She feel very nervous.",
    "zh": "今天，她覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, She feel very nervous.",
    "zh": "明天，她覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "next week, She feel very nervous.",
    "zh": "下週，她覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "last year, She feel very nervous.",
    "zh": "去年，她覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, She feel very nervous.",
    "zh": "早上，她覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "at night, She feel very nervous.",
    "zh": "晚上，她覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, We need to buy a new laptop.",
    "zh": "昨天，我們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "today, We need to buy a new laptop.",
    "zh": "今天，我們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, We need to buy a new laptop.",
    "zh": "明天，我們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "next week, We need to buy a new laptop.",
    "zh": "下週，我們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "last year, We need to buy a new laptop.",
    "zh": "去年，我們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "in the morning, We need to buy a new laptop.",
    "zh": "早上，我們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "at night, We need to buy a new laptop.",
    "zh": "晚上，我們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "yesterday, We need to buy a new phone.",
    "zh": "昨天，我們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "today, We need to buy a new phone.",
    "zh": "今天，我們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, We need to buy a new phone.",
    "zh": "明天，我們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "next week, We need to buy a new phone.",
    "zh": "下週，我們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "last year, We need to buy a new phone.",
    "zh": "去年，我們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "in the morning, We need to buy a new phone.",
    "zh": "早上，我們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "at night, We need to buy a new phone.",
    "zh": "晚上，我們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "yesterday, We need to buy a new shirt.",
    "zh": "昨天，我們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "today, We need to buy a new shirt.",
    "zh": "今天，我們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, We need to buy a new shirt.",
    "zh": "明天，我們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "next week, We need to buy a new shirt.",
    "zh": "下週，我們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "last year, We need to buy a new shirt.",
    "zh": "去年，我們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "in the morning, We need to buy a new shirt.",
    "zh": "早上，我們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "at night, We need to buy a new shirt.",
    "zh": "晚上，我們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "yesterday, We need to buy a new bag.",
    "zh": "昨天，我們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "today, We need to buy a new bag.",
    "zh": "今天，我們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, We need to buy a new bag.",
    "zh": "明天，我們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "next week, We need to buy a new bag.",
    "zh": "下週，我們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "last year, We need to buy a new bag.",
    "zh": "去年，我們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "in the morning, We need to buy a new bag.",
    "zh": "早上，我們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "at night, We need to buy a new bag.",
    "zh": "晚上，我們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "yesterday, We will travel to Japan.",
    "zh": "昨天，我們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "today, We will travel to Japan.",
    "zh": "今天，我們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, We will travel to Japan.",
    "zh": "明天，我們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "next week, We will travel to Japan.",
    "zh": "下週，我們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "last year, We will travel to Japan.",
    "zh": "去年，我們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, We will travel to Japan.",
    "zh": "早上，我們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "at night, We will travel to Japan.",
    "zh": "晚上，我們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, We will travel to Korea.",
    "zh": "昨天，我們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "today, We will travel to Korea.",
    "zh": "今天，我們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, We will travel to Korea.",
    "zh": "明天，我們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, We will travel to Korea.",
    "zh": "下週，我們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, We will travel to Korea.",
    "zh": "去年，我們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, We will travel to Korea.",
    "zh": "早上，我們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, We will travel to Korea.",
    "zh": "晚上，我們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, We will travel to America.",
    "zh": "昨天，我們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "today, We will travel to America.",
    "zh": "今天，我們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, We will travel to America.",
    "zh": "明天，我們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, We will travel to America.",
    "zh": "下週，我們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, We will travel to America.",
    "zh": "去年，我們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, We will travel to America.",
    "zh": "早上，我們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, We will travel to America.",
    "zh": "晚上，我們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, We will travel to Europe.",
    "zh": "昨天，我們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "today, We will travel to Europe.",
    "zh": "今天，我們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, We will travel to Europe.",
    "zh": "明天，我們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "next week, We will travel to Europe.",
    "zh": "下週，我們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "last year, We will travel to Europe.",
    "zh": "去年，我們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, We will travel to Europe.",
    "zh": "早上，我們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "at night, We will travel to Europe.",
    "zh": "晚上，我們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, We have a meeting with the manager.",
    "zh": "昨天，我們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "today, We have a meeting with the manager.",
    "zh": "今天，我們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, We have a meeting with the manager.",
    "zh": "明天，我們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "next week, We have a meeting with the manager.",
    "zh": "下週，我們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "last year, We have a meeting with the manager.",
    "zh": "去年，我們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "in the morning, We have a meeting with the manager.",
    "zh": "早上，我們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "at night, We have a meeting with the manager.",
    "zh": "晚上，我們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "yesterday, We have a meeting with the client.",
    "zh": "昨天，我們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "today, We have a meeting with the client.",
    "zh": "今天，我們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, We have a meeting with the client.",
    "zh": "明天，我們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "next week, We have a meeting with the client.",
    "zh": "下週，我們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "last year, We have a meeting with the client.",
    "zh": "去年，我們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "in the morning, We have a meeting with the client.",
    "zh": "早上，我們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "at night, We have a meeting with the client.",
    "zh": "晚上，我們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "yesterday, We have a meeting with the team.",
    "zh": "昨天，我們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "today, We have a meeting with the team.",
    "zh": "今天，我們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, We have a meeting with the team.",
    "zh": "明天，我們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "next week, We have a meeting with the team.",
    "zh": "下週，我們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "last year, We have a meeting with the team.",
    "zh": "去年，我們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "in the morning, We have a meeting with the team.",
    "zh": "早上，我們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "at night, We have a meeting with the team.",
    "zh": "晚上，我們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "yesterday, We have a meeting with the boss.",
    "zh": "昨天，我們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "today, We have a meeting with the boss.",
    "zh": "今天，我們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, We have a meeting with the boss.",
    "zh": "明天，我們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "next week, We have a meeting with the boss.",
    "zh": "下週，我們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "last year, We have a meeting with the boss.",
    "zh": "去年，我們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "in the morning, We have a meeting with the boss.",
    "zh": "早上，我們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "at night, We have a meeting with the boss.",
    "zh": "晚上，我們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "yesterday, We feel very happy.",
    "zh": "昨天，我們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "today, We feel very happy.",
    "zh": "今天，我們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, We feel very happy.",
    "zh": "明天，我們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "next week, We feel very happy.",
    "zh": "下週，我們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "last year, We feel very happy.",
    "zh": "去年，我們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, We feel very happy.",
    "zh": "早上，我們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "at night, We feel very happy.",
    "zh": "晚上，我們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, We feel very sad.",
    "zh": "昨天，我們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "today, We feel very sad.",
    "zh": "今天，我們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, We feel very sad.",
    "zh": "明天，我們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "next week, We feel very sad.",
    "zh": "下週，我們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "last year, We feel very sad.",
    "zh": "去年，我們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, We feel very sad.",
    "zh": "早上，我們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "at night, We feel very sad.",
    "zh": "晚上，我們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, We feel very angry.",
    "zh": "昨天，我們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "today, We feel very angry.",
    "zh": "今天，我們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, We feel very angry.",
    "zh": "明天，我們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "next week, We feel very angry.",
    "zh": "下週，我們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "last year, We feel very angry.",
    "zh": "去年，我們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, We feel very angry.",
    "zh": "早上，我們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "at night, We feel very angry.",
    "zh": "晚上，我們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, We feel very nervous.",
    "zh": "昨天，我們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "today, We feel very nervous.",
    "zh": "今天，我們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, We feel very nervous.",
    "zh": "明天，我們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "next week, We feel very nervous.",
    "zh": "下週，我們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "last year, We feel very nervous.",
    "zh": "去年，我們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, We feel very nervous.",
    "zh": "早上，我們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "at night, We feel very nervous.",
    "zh": "晚上，我們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, They need to buy a new laptop.",
    "zh": "昨天，他們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "today, They need to buy a new laptop.",
    "zh": "今天，他們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, They need to buy a new laptop.",
    "zh": "明天，他們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "next week, They need to buy a new laptop.",
    "zh": "下週，他們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "last year, They need to buy a new laptop.",
    "zh": "去年，他們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "in the morning, They need to buy a new laptop.",
    "zh": "早上，他們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "at night, They need to buy a new laptop.",
    "zh": "晚上，他們需要買一個新的筆電。",
    "cat": "購物"
  },
  {
    "en": "yesterday, They need to buy a new phone.",
    "zh": "昨天，他們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "today, They need to buy a new phone.",
    "zh": "今天，他們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, They need to buy a new phone.",
    "zh": "明天，他們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "next week, They need to buy a new phone.",
    "zh": "下週，他們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "last year, They need to buy a new phone.",
    "zh": "去年，他們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "in the morning, They need to buy a new phone.",
    "zh": "早上，他們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "at night, They need to buy a new phone.",
    "zh": "晚上，他們需要買一個新的手機。",
    "cat": "購物"
  },
  {
    "en": "yesterday, They need to buy a new shirt.",
    "zh": "昨天，他們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "today, They need to buy a new shirt.",
    "zh": "今天，他們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, They need to buy a new shirt.",
    "zh": "明天，他們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "next week, They need to buy a new shirt.",
    "zh": "下週，他們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "last year, They need to buy a new shirt.",
    "zh": "去年，他們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "in the morning, They need to buy a new shirt.",
    "zh": "早上，他們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "at night, They need to buy a new shirt.",
    "zh": "晚上，他們需要買一個新的襯衫。",
    "cat": "購物"
  },
  {
    "en": "yesterday, They need to buy a new bag.",
    "zh": "昨天，他們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "today, They need to buy a new bag.",
    "zh": "今天，他們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "tomorrow, They need to buy a new bag.",
    "zh": "明天，他們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "next week, They need to buy a new bag.",
    "zh": "下週，他們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "last year, They need to buy a new bag.",
    "zh": "去年，他們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "in the morning, They need to buy a new bag.",
    "zh": "早上，他們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "at night, They need to buy a new bag.",
    "zh": "晚上，他們需要買一個新的包包。",
    "cat": "購物"
  },
  {
    "en": "yesterday, They will travel to Japan.",
    "zh": "昨天，他們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "today, They will travel to Japan.",
    "zh": "今天，他們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, They will travel to Japan.",
    "zh": "明天，他們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "next week, They will travel to Japan.",
    "zh": "下週，他們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "last year, They will travel to Japan.",
    "zh": "去年，他們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, They will travel to Japan.",
    "zh": "早上，他們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "at night, They will travel to Japan.",
    "zh": "晚上，他們將會去日本。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, They will travel to Korea.",
    "zh": "昨天，他們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "today, They will travel to Korea.",
    "zh": "今天，他們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, They will travel to Korea.",
    "zh": "明天，他們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, They will travel to Korea.",
    "zh": "下週，他們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, They will travel to Korea.",
    "zh": "去年，他們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, They will travel to Korea.",
    "zh": "早上，他們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, They will travel to Korea.",
    "zh": "晚上，他們將會去韓國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, They will travel to America.",
    "zh": "昨天，他們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "today, They will travel to America.",
    "zh": "今天，他們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, They will travel to America.",
    "zh": "明天，他們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "next week, They will travel to America.",
    "zh": "下週，他們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "last year, They will travel to America.",
    "zh": "去年，他們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, They will travel to America.",
    "zh": "早上，他們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "at night, They will travel to America.",
    "zh": "晚上，他們將會去美國。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, They will travel to Europe.",
    "zh": "昨天，他們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "today, They will travel to Europe.",
    "zh": "今天，他們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "tomorrow, They will travel to Europe.",
    "zh": "明天，他們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "next week, They will travel to Europe.",
    "zh": "下週，他們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "last year, They will travel to Europe.",
    "zh": "去年，他們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "in the morning, They will travel to Europe.",
    "zh": "早上，他們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "at night, They will travel to Europe.",
    "zh": "晚上，他們將會去歐洲。",
    "cat": "旅遊"
  },
  {
    "en": "yesterday, They have a meeting with the manager.",
    "zh": "昨天，他們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "today, They have a meeting with the manager.",
    "zh": "今天，他們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, They have a meeting with the manager.",
    "zh": "明天，他們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "next week, They have a meeting with the manager.",
    "zh": "下週，他們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "last year, They have a meeting with the manager.",
    "zh": "去年，他們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "in the morning, They have a meeting with the manager.",
    "zh": "早上，他們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "at night, They have a meeting with the manager.",
    "zh": "晚上，他們要和...開會經理。",
    "cat": "商業"
  },
  {
    "en": "yesterday, They have a meeting with the client.",
    "zh": "昨天，他們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "today, They have a meeting with the client.",
    "zh": "今天，他們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, They have a meeting with the client.",
    "zh": "明天，他們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "next week, They have a meeting with the client.",
    "zh": "下週，他們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "last year, They have a meeting with the client.",
    "zh": "去年，他們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "in the morning, They have a meeting with the client.",
    "zh": "早上，他們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "at night, They have a meeting with the client.",
    "zh": "晚上，他們要和...開會客戶。",
    "cat": "商業"
  },
  {
    "en": "yesterday, They have a meeting with the team.",
    "zh": "昨天，他們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "today, They have a meeting with the team.",
    "zh": "今天，他們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, They have a meeting with the team.",
    "zh": "明天，他們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "next week, They have a meeting with the team.",
    "zh": "下週，他們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "last year, They have a meeting with the team.",
    "zh": "去年，他們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "in the morning, They have a meeting with the team.",
    "zh": "早上，他們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "at night, They have a meeting with the team.",
    "zh": "晚上，他們要和...開會團隊。",
    "cat": "商業"
  },
  {
    "en": "yesterday, They have a meeting with the boss.",
    "zh": "昨天，他們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "today, They have a meeting with the boss.",
    "zh": "今天，他們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "tomorrow, They have a meeting with the boss.",
    "zh": "明天，他們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "next week, They have a meeting with the boss.",
    "zh": "下週，他們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "last year, They have a meeting with the boss.",
    "zh": "去年，他們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "in the morning, They have a meeting with the boss.",
    "zh": "早上，他們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "at night, They have a meeting with the boss.",
    "zh": "晚上，他們要和...開會老闆。",
    "cat": "商業"
  },
  {
    "en": "yesterday, They feel very happy.",
    "zh": "昨天，他們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "today, They feel very happy.",
    "zh": "今天，他們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, They feel very happy.",
    "zh": "明天，他們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "next week, They feel very happy.",
    "zh": "下週，他們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "last year, They feel very happy.",
    "zh": "去年，他們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, They feel very happy.",
    "zh": "早上，他們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "at night, They feel very happy.",
    "zh": "晚上，他們覺得非常開心。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, They feel very sad.",
    "zh": "昨天，他們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "today, They feel very sad.",
    "zh": "今天，他們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, They feel very sad.",
    "zh": "明天，他們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "next week, They feel very sad.",
    "zh": "下週，他們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "last year, They feel very sad.",
    "zh": "去年，他們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, They feel very sad.",
    "zh": "早上，他們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "at night, They feel very sad.",
    "zh": "晚上，他們覺得非常難過。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, They feel very angry.",
    "zh": "昨天，他們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "today, They feel very angry.",
    "zh": "今天，他們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, They feel very angry.",
    "zh": "明天，他們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "next week, They feel very angry.",
    "zh": "下週，他們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "last year, They feel very angry.",
    "zh": "去年，他們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, They feel very angry.",
    "zh": "早上，他們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "at night, They feel very angry.",
    "zh": "晚上，他們覺得非常生氣。",
    "cat": "情緒"
  },
  {
    "en": "yesterday, They feel very nervous.",
    "zh": "昨天，他們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "today, They feel very nervous.",
    "zh": "今天，他們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "tomorrow, They feel very nervous.",
    "zh": "明天，他們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "next week, They feel very nervous.",
    "zh": "下週，他們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "last year, They feel very nervous.",
    "zh": "去年，他們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "in the morning, They feel very nervous.",
    "zh": "早上，他們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "at night, They feel very nervous.",
    "zh": "晚上，他們覺得非常緊張。",
    "cat": "情緒"
  },
  {
    "en": "Please make sure to submit the report before the deadline.",
    "zh": "請務必在截止日期前提交報告。",
    "cat": "多益必考"
  },
  {
    "en": "The company announced a significant increase in profits this quarter.",
    "zh": "公司宣布本季度利潤大幅增長。",
    "cat": "多益必考"
  },
  {
    "en": "All employees are required to attend the mandatory training session.",
    "zh": "所有員工都必須參加強制性的培訓課程。",
    "cat": "多益必考"
  },
  {
    "en": "We apologize for any inconvenience this may cause.",
    "zh": "對於這可能造成的任何不便，我們深表歉意。",
    "cat": "多益必考"
  },
  {
    "en": "The meeting has been postponed due to unforeseen circumstances.",
    "zh": "由於不可預見的情況，會議已延期。",
    "cat": "多益必考"
  },
  {
    "en": "Please review the attached document and let me know if you have any questions.",
    "zh": "請查閱附件文件，如有任何問題請讓我知道。",
    "cat": "多益必考"
  },
  {
    "en": "Our customer service representatives are available 24/7 to assist you.",
    "zh": "我們的客服代表全天候為您提供協助。",
    "cat": "多益必考"
  },
  {
    "en": "The new policy will be implemented starting next month.",
    "zh": "新政策將從下個月開始實施。",
    "cat": "多益必考"
  },
  {
    "en": "We are currently looking for a qualified candidate to fill the position.",
    "zh": "我們目前正在尋找合格的候選人來填補該職位。",
    "cat": "多益必考"
  },
  {
    "en": "Thank you for your prompt response and cooperation.",
    "zh": "感謝您的及時回覆和合作。",
    "cat": "多益必考"
  },
  {
    "en": "It is widely believed that education plays a crucial role in society.",
    "zh": "人們普遍認為教育在社會中扮演著關鍵角色。",
    "cat": "雅思常見"
  },
  {
    "en": "There is a growing concern about the impact of climate change.",
    "zh": "人們對氣候變遷的影響日益關注。",
    "cat": "雅思常見"
  },
  {
    "en": "One of the main advantages of this approach is its efficiency.",
    "zh": "這種方法的主要優點之一是它的效率。",
    "cat": "雅思常見"
  },
  {
    "en": "To tackle this issue, the government needs to implement stricter regulations.",
    "zh": "為了解決這個問題，政府需要實施更嚴格的規定。",
    "cat": "雅思常見"
  },
  {
    "en": "The data suggests a significant correlation between the two variables.",
    "zh": "數據顯示這兩個變數之間存在顯著的相關性。",
    "cat": "雅思常見"
  },
  {
    "en": "In conclusion, the benefits outweigh the drawbacks.",
    "zh": "總而言之，利大於弊。",
    "cat": "雅思常見"
  },
  {
    "en": "This phenomenon can be attributed to several underlying factors.",
    "zh": "這種現象可以歸因於幾個潛在因素。",
    "cat": "雅思常見"
  },
  {
    "en": "However, critics argue that this policy may have negative consequences.",
    "zh": "然而，批評者認為這項政策可能會有負面後果。",
    "cat": "雅思常見"
  },
  {
    "en": "Could you please send me the latest version of the presentation?",
    "zh": "可以請你寄給我最新版本的簡報嗎？",
    "cat": "職場溝通"
  },
  {
    "en": "I'll touch base with you later this week to discuss the project.",
    "zh": "我這週晚些時候會和你聯繫討論這個專案。",
    "cat": "職場溝通"
  },
  {
    "en": "Let's schedule a meeting to go over the details.",
    "zh": "我們安排個會議來詳細討論吧。",
    "cat": "職場溝通"
  },
  {
    "en": "Please keep me in the loop regarding any updates.",
    "zh": "如有任何更新，請讓我知道。",
    "cat": "職場溝通"
  },
  {
    "en": "I'm writing to follow up on the email I sent yesterday.",
    "zh": "我寫信來是為了跟進我昨天寄出的電子郵件。",
    "cat": "職場溝通"
  },
  {
    "en": "Could you clarify what you mean by that?",
    "zh": "可以請你澄清一下你的意思嗎？",
    "cat": "職場溝通"
  },
  {
    "en": "Let's make sure we are all on the same page before moving forward.",
    "zh": "在繼續之前，我們要確定大家的認知是一致的。",
    "cat": "職場溝通"
  },
  {
    "en": "I'd appreciate it if you could provide some feedback on my proposal.",
    "zh": "如果你能對我的提案提供一些回饋，我會非常感激。",
    "cat": "職場溝通"
  },
  {
    "en": "What are you up to this weekend?",
    "zh": "你這個週末要做什麼？",
    "cat": "日常對話"
  },
  {
    "en": "It's been a long time! We should definitely catch up soon.",
    "zh": "好久不見！我們一定要找時間敘舊。",
    "cat": "日常對話"
  },
  {
    "en": "I totally agree with you on that.",
    "zh": "在那一點上我完全同意你。",
    "cat": "日常對話"
  },
  {
    "en": "Don't worry about it, it's not a big deal.",
    "zh": "別擔心，這沒什麼大不了的。",
    "cat": "日常對話"
  },
  {
    "en": "Can you give me a hand with this?",
    "zh": "你可以幫我一下這個嗎？",
    "cat": "日常對話"
  },
  {
    "en": "I'm exhausted, I just want to chill at home tonight.",
    "zh": "我累壞了，今晚只想待在家放鬆。",
    "cat": "日常對話"
  },
  {
    "en": "That makes a lot of sense.",
    "zh": "那很有道理。",
    "cat": "日常對話"
  },
  {
    "en": "Let me know if you need anything else.",
    "zh": "如果你還需要什麼，請讓我知道。",
    "cat": "日常對話"
  }
,
  // 多益必考 (10)
  { en: "Please make sure to submit the report before the deadline.", zh: "請務必在截止日期前提交報告。", cat: "多益必考" },
  { en: "The company announced a significant increase in profits this quarter.", zh: "公司宣布本季度利潤大幅增長。", cat: "多益必考" },
  { en: "All employees are required to attend the mandatory training session.", zh: "所有員工都必須參加強制性的培訓課程。", cat: "多益必考" },
  { en: "We apologize for any inconvenience this may cause.", zh: "對於這可能造成的任何不便，我們深表歉意。", cat: "多益必考" },
  { en: "The meeting has been postponed due to unforeseen circumstances.", zh: "由於不可預見的情況，會議已延期。", cat: "多益必考" },
  { en: "Please review the attached document and let me know if you have any questions.", zh: "請查閱附件文件，如有任何問題請讓我知道。", cat: "多益必考" },
  { en: "Our customer service representatives are available 24/7 to assist you.", zh: "我們的客服代表全天候為您提供協助。", cat: "多益必考" },
  { en: "The new policy will be implemented starting next month.", zh: "新政策將從下個月開始實施。", cat: "多益必考" },
  { en: "We are currently looking for a qualified candidate to fill the position.", zh: "我們目前正在尋找合格的候選人來填補該職位。", cat: "多益必考" },
  { en: "Thank you for your prompt response and cooperation.", zh: "感謝您的及時回覆和合作。", cat: "多益必考" },
  // 雅思常見 (8)
  { en: "It is widely believed that education plays a crucial role in society.", zh: "人們普遍認為教育在社會中扮演著關鍵角色。", cat: "雅思常見" },
  { en: "There is a growing concern about the impact of climate change.", zh: "人們對氣候變遷的影響日益關注。", cat: "雅思常見" },
  { en: "One of the main advantages of this approach is its efficiency.", zh: "這種方法的主要優點之一是它的效率。", cat: "雅思常見" },
  { en: "To tackle this issue, the government needs to implement stricter regulations.", zh: "為了解決這個問題，政府需要實施更嚴格的規定。", cat: "雅思常見" },
  { en: "The data suggests a significant correlation between the two variables.", zh: "數據顯示這兩個變數之間存在顯著的相關性。", cat: "雅思常見" },
  { en: "In conclusion, the benefits outweigh the drawbacks.", zh: "總而言之，利大於弊。", cat: "雅思常見" },
  { en: "This phenomenon can be attributed to several underlying factors.", zh: "這種現象可以歸因於幾個潛在因素。", cat: "雅思常見" },
  { en: "However, critics argue that this policy may have negative consequences.", zh: "然而，批評者認為這項政策可能會有負面後果。", cat: "雅思常見" },
  // 職場溝通 (8)
  { en: "Could you please send me the latest version of the presentation?", zh: "可以請你寄給我最新版本的簡報嗎？", cat: "職場溝通" },
  { en: "I'll touch base with you later this week to discuss the project.", zh: "我這週晚些時候會和你聯繫討論這個專案。", cat: "職場溝通" },
  { en: "Let's schedule a meeting to go over the details.", zh: "我們安排個會議來詳細討論吧。", cat: "職場溝通" },
  { en: "Please keep me in the loop regarding any updates.", zh: "如有任何更新，請讓我知道。", cat: "職場溝通" },
  { en: "I'm writing to follow up on the email I sent yesterday.", zh: "我寫信來是為了跟進我昨天寄出的電子郵件。", cat: "職場溝通" },
  { en: "Could you clarify what you mean by that?", zh: "可以請你澄清一下你的意思嗎？", cat: "職場溝通" },
  { en: "Let's make sure we are all on the same page before moving forward.", zh: "在繼續之前，我們要確定大家的認知是一致的。", cat: "職場溝通" },
  { en: "I'd appreciate it if you could provide some feedback on my proposal.", zh: "如果你能對我的提案提供一些回饋，我會非常感激。", cat: "職場溝通" },
  // 日常對話 (8)
  { en: "What are you up to this weekend?", zh: "你這個週末要做什麼？", cat: "日常對話" },
  { en: "It's been a long time! We should definitely catch up soon.", zh: "好久不見！我們一定要找時間敘舊。", cat: "日常對話" },
  { en: "I totally agree with you on that.", zh: "在那一點上我完全同意你。", cat: "日常對話" },
  { en: "Don't worry about it, it's not a big deal.", zh: "別擔心，這沒什麼大不了的。", cat: "日常對話" },
  { en: "Can you give me a hand with this?", zh: "你可以幫我一下這個嗎？", cat: "日常對話" },
  { en: "I'm exhausted, I just want to chill at home tonight.", zh: "我累壞了，今晚只想待在家放鬆。", cat: "日常對話" },
  { en: "That makes a lot of sense.", zh: "那很有道理。", cat: "日常對話" },
  { en: "Let me know if you need anything else.", zh: "如果你還需要什麼，請讓我知道。", cat: "日常對話" }
]
};
