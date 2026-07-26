const WORD_BANK = {
  word: [
  {
    "en": "candidate",
    "zh": "\u61c9\u5fb5\u8005",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "resume",
    "zh": "\u5c65\u6b77",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "interview",
    "zh": "\u9762\u8a66",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "contract",
    "zh": "\u5408\u7d04",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "negotiation",
    "zh": "\u8ac7\u5224",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "revenue",
    "zh": "\u71df\u6536",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "profit",
    "zh": "\u5229\u6f64",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "budget",
    "zh": "\u9810\u7b97",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "schedule",
    "zh": "\u6642\u7a0b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "proposal",
    "zh": "\u63d0\u6848",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "meeting",
    "zh": "\u6703\u8b70",
    "cat": "\u5546\u696d"
  },
  {
    "en": "colleague",
    "zh": "\u540c\u4e8b",
    "cat": "\u5546\u696d"
  },
  {
    "en": "manager",
    "zh": "\u7d93\u7406",
    "cat": "\u5546\u696d"
  },
  {
    "en": "strategy",
    "zh": "\u7b56\u7565",
    "cat": "\u5546\u696d"
  },
  {
    "en": "marketing",
    "zh": "\u884c\u92b7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "investment",
    "zh": "\u6295\u8cc7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "partnership",
    "zh": "\u5408\u4f5c\u95dc\u4fc2",
    "cat": "\u5546\u696d"
  },
  {
    "en": "client",
    "zh": "\u5ba2\u6236",
    "cat": "\u5546\u696d"
  },
  {
    "en": "presentation",
    "zh": "\u7c21\u5831",
    "cat": "\u5546\u696d"
  },
  {
    "en": "deadline",
    "zh": "\u622a\u6b62\u65e5\u671f",
    "cat": "\u5546\u696d"
  },
  {
    "en": "flight",
    "zh": "\u822a\u73ed",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "baggage",
    "zh": "\u884c\u674e",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "passport",
    "zh": "\u8b77\u7167",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "accommodation",
    "zh": "\u4f4f\u5bbf",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "destination",
    "zh": "\u76ee\u7684\u5730",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "itinerary",
    "zh": "\u884c\u7a0b",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tourist",
    "zh": "\u904a\u5ba2",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "souvenir",
    "zh": "\u7d00\u5ff5\u54c1",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "customs",
    "zh": "\u6d77\u95dc",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "boarding",
    "zh": "\u767b\u6a5f",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "symptom",
    "zh": "\u75c7\u72c0",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "prescription",
    "zh": "\u8655\u65b9",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "pharmacy",
    "zh": "\u85e5\u5c40",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "surgery",
    "zh": "\u624b\u8853",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "clinic",
    "zh": "\u8a3a\u6240",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "diagnosis",
    "zh": "\u8a3a\u65b7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "treatment",
    "zh": "\u6cbb\u7642",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "vaccine",
    "zh": "\u75ab\u82d7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "infection",
    "zh": "\u611f\u67d3",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "emergency",
    "zh": "\u6025\u8a3a",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "grocery",
    "zh": "\u96dc\u8ca8",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "laundry",
    "zh": "\u6d17\u8863",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "commute",
    "zh": "\u901a\u52e4",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "recipe",
    "zh": "\u98df\u8b5c",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "appliance",
    "zh": "\u5bb6\u96fb",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "furniture",
    "zh": "\u5bb6\u5177",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "neighborhood",
    "zh": "\u793e\u5340",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "chore",
    "zh": "\u5bb6\u52d9",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "habit",
    "zh": "\u7fd2\u6163",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "routine",
    "zh": "\u65e5\u5e38\u4f5c\u606f",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "software",
    "zh": "\u8edf\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "hardware",
    "zh": "\u786c\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "database",
    "zh": "\u8cc7\u6599\u5eab",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "network",
    "zh": "\u7db2\u8def",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "algorithm",
    "zh": "\u6f14\u7b97\u6cd5",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "developer",
    "zh": "\u958b\u767c\u8005",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "application",
    "zh": "\u61c9\u7528\u7a0b\u5f0f",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "server",
    "zh": "\u4f3a\u670d\u5668",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "cloud",
    "zh": "\u96f2\u7aef",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "security",
    "zh": "\u5b89\u5168",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "chill",
    "zh": "\u653e\u9b06",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "flex",
    "zh": "\u70ab\u8000",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "ghost",
    "zh": "\u795e\u96b1",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "salty",
    "zh": "\u60f1\u7f9e",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "shady",
    "zh": "\u53ef\u7591\u7684",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "lit",
    "zh": "\u8d85\u8b9a",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "dope",
    "zh": "\u9177",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "goat",
    "zh": "\u53f2\u4e0a\u6700\u68d2",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "cringe",
    "zh": "\u5c37\u5c2c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "bet",
    "zh": "\u6c92\u554f\u984c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "anxious",
    "zh": "\u7126\u616e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "thrilled",
    "zh": "\u975e\u5e38\u8208\u596e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "depressed",
    "zh": "\u6cae\u55aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "grateful",
    "zh": "\u611f\u6fc0\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "frustrated",
    "zh": "\u632b\u6298\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "overwhelmed",
    "zh": "\u4e0d\u77e5\u6240\u63aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "relieved",
    "zh": "\u9b06\u4e86\u4e00\u53e3\u6c23\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "jealous",
    "zh": "\u5ac9\u5992\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "furious",
    "zh": "\u72c2\u6012\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "sympathetic",
    "zh": "\u6709\u540c\u60c5\u5fc3\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tournament",
    "zh": "\u9326\u6a19\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "athlete",
    "zh": "\u904b\u52d5\u54e1",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "stadium",
    "zh": "\u9ad4\u80b2\u5834",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "championship",
    "zh": "\u51a0\u8ecd\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "referee",
    "zh": "\u88c1\u5224",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "coach",
    "zh": "\u6559\u7df4",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "defense",
    "zh": "\u9632\u5b88",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "offense",
    "zh": "\u9032\u653b",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "penalty",
    "zh": "\u7f70\u5247",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "tackle",
    "zh": "\u64d2\u62b1/\u6284\u622a",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "discount",
    "zh": "\u6298\u6263",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "receipt",
    "zh": "\u6536\u64da",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "refund",
    "zh": "\u9000\u6b3e",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "cashier",
    "zh": "\u6536\u9280\u54e1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "cart",
    "zh": "\u8cfc\u7269\u8eca",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "aisle",
    "zh": "\u8d70\u9053",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "bargain",
    "zh": "\u7279\u50f9\u54c1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "voucher",
    "zh": "\u6298\u50f9\u5238",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "warranty",
    "zh": "\u4fdd\u56fa",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "inventory",
    "zh": "\u5eab\u5b58",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "uncandidate",
    "zh": "\u4e0d\u61c9\u5fb5\u8005",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "recandidate",
    "zh": "\u91cd\u65b0\u61c9\u5fb5\u8005",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "precandidate",
    "zh": "\u9810\u5148\u61c9\u5fb5\u8005",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "postcandidate",
    "zh": "\u5f8c\u61c9\u5fb5\u8005",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "overcandidate",
    "zh": "\u904e\u5ea6\u61c9\u5fb5\u8005",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "undercandidate",
    "zh": "\u4e0d\u8db3\u61c9\u5fb5\u8005",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "subcandidate",
    "zh": "\u6b21/\u4e9e\u61c9\u5fb5\u8005",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "supercandidate",
    "zh": "\u8d85\u7d1a\u61c9\u5fb5\u8005",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "unresume",
    "zh": "\u4e0d\u5c65\u6b77",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "reresume",
    "zh": "\u91cd\u65b0\u5c65\u6b77",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "preresume",
    "zh": "\u9810\u5148\u5c65\u6b77",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "postresume",
    "zh": "\u5f8c\u5c65\u6b77",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "overresume",
    "zh": "\u904e\u5ea6\u5c65\u6b77",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "underresume",
    "zh": "\u4e0d\u8db3\u5c65\u6b77",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "subresume",
    "zh": "\u6b21/\u4e9e\u5c65\u6b77",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "superresume",
    "zh": "\u8d85\u7d1a\u5c65\u6b77",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "uninterview",
    "zh": "\u4e0d\u9762\u8a66",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "reinterview",
    "zh": "\u91cd\u65b0\u9762\u8a66",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "preinterview",
    "zh": "\u9810\u5148\u9762\u8a66",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "postinterview",
    "zh": "\u5f8c\u9762\u8a66",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "overinterview",
    "zh": "\u904e\u5ea6\u9762\u8a66",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "underinterview",
    "zh": "\u4e0d\u8db3\u9762\u8a66",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "subinterview",
    "zh": "\u6b21/\u4e9e\u9762\u8a66",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "superinterview",
    "zh": "\u8d85\u7d1a\u9762\u8a66",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "uncontract",
    "zh": "\u4e0d\u5408\u7d04",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "recontract",
    "zh": "\u91cd\u65b0\u5408\u7d04",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "precontract",
    "zh": "\u9810\u5148\u5408\u7d04",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "postcontract",
    "zh": "\u5f8c\u5408\u7d04",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "overcontract",
    "zh": "\u904e\u5ea6\u5408\u7d04",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "undercontract",
    "zh": "\u4e0d\u8db3\u5408\u7d04",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "subcontract",
    "zh": "\u6b21/\u4e9e\u5408\u7d04",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "supercontract",
    "zh": "\u8d85\u7d1a\u5408\u7d04",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "unnegotiation",
    "zh": "\u4e0d\u8ac7\u5224",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "renegotiation",
    "zh": "\u91cd\u65b0\u8ac7\u5224",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "prenegotiation",
    "zh": "\u9810\u5148\u8ac7\u5224",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "postnegotiation",
    "zh": "\u5f8c\u8ac7\u5224",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "overnegotiation",
    "zh": "\u904e\u5ea6\u8ac7\u5224",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "undernegotiation",
    "zh": "\u4e0d\u8db3\u8ac7\u5224",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "subnegotiation",
    "zh": "\u6b21/\u4e9e\u8ac7\u5224",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "supernegotiation",
    "zh": "\u8d85\u7d1a\u8ac7\u5224",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "unrevenue",
    "zh": "\u4e0d\u71df\u6536",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "rerevenue",
    "zh": "\u91cd\u65b0\u71df\u6536",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "prerevenue",
    "zh": "\u9810\u5148\u71df\u6536",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "postrevenue",
    "zh": "\u5f8c\u71df\u6536",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "overrevenue",
    "zh": "\u904e\u5ea6\u71df\u6536",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "underrevenue",
    "zh": "\u4e0d\u8db3\u71df\u6536",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "subrevenue",
    "zh": "\u6b21/\u4e9e\u71df\u6536",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "superrevenue",
    "zh": "\u8d85\u7d1a\u71df\u6536",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "unprofit",
    "zh": "\u4e0d\u5229\u6f64",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "reprofit",
    "zh": "\u91cd\u65b0\u5229\u6f64",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "preprofit",
    "zh": "\u9810\u5148\u5229\u6f64",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "postprofit",
    "zh": "\u5f8c\u5229\u6f64",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "overprofit",
    "zh": "\u904e\u5ea6\u5229\u6f64",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "underprofit",
    "zh": "\u4e0d\u8db3\u5229\u6f64",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "subprofit",
    "zh": "\u6b21/\u4e9e\u5229\u6f64",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "superprofit",
    "zh": "\u8d85\u7d1a\u5229\u6f64",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "unbudget",
    "zh": "\u4e0d\u9810\u7b97",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "rebudget",
    "zh": "\u91cd\u65b0\u9810\u7b97",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "prebudget",
    "zh": "\u9810\u5148\u9810\u7b97",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "postbudget",
    "zh": "\u5f8c\u9810\u7b97",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "overbudget",
    "zh": "\u904e\u5ea6\u9810\u7b97",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "underbudget",
    "zh": "\u4e0d\u8db3\u9810\u7b97",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "subbudget",
    "zh": "\u6b21/\u4e9e\u9810\u7b97",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "superbudget",
    "zh": "\u8d85\u7d1a\u9810\u7b97",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "unschedule",
    "zh": "\u4e0d\u6642\u7a0b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "reschedule",
    "zh": "\u91cd\u65b0\u6642\u7a0b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "preschedule",
    "zh": "\u9810\u5148\u6642\u7a0b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "postschedule",
    "zh": "\u5f8c\u6642\u7a0b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "overschedule",
    "zh": "\u904e\u5ea6\u6642\u7a0b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "underschedule",
    "zh": "\u4e0d\u8db3\u6642\u7a0b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "subschedule",
    "zh": "\u6b21/\u4e9e\u6642\u7a0b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "superschedule",
    "zh": "\u8d85\u7d1a\u6642\u7a0b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "unproposal",
    "zh": "\u4e0d\u63d0\u6848",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "reproposal",
    "zh": "\u91cd\u65b0\u63d0\u6848",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "preproposal",
    "zh": "\u9810\u5148\u63d0\u6848",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "postproposal",
    "zh": "\u5f8c\u63d0\u6848",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "overproposal",
    "zh": "\u904e\u5ea6\u63d0\u6848",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "underproposal",
    "zh": "\u4e0d\u8db3\u63d0\u6848",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "subproposal",
    "zh": "\u6b21/\u4e9e\u63d0\u6848",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "superproposal",
    "zh": "\u8d85\u7d1a\u63d0\u6848",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "unmeeting",
    "zh": "\u4e0d\u6703\u8b70",
    "cat": "\u5546\u696d"
  },
  {
    "en": "remeeting",
    "zh": "\u91cd\u65b0\u6703\u8b70",
    "cat": "\u5546\u696d"
  },
  {
    "en": "premeeting",
    "zh": "\u9810\u5148\u6703\u8b70",
    "cat": "\u5546\u696d"
  },
  {
    "en": "postmeeting",
    "zh": "\u5f8c\u6703\u8b70",
    "cat": "\u5546\u696d"
  },
  {
    "en": "overmeeting",
    "zh": "\u904e\u5ea6\u6703\u8b70",
    "cat": "\u5546\u696d"
  },
  {
    "en": "undermeeting",
    "zh": "\u4e0d\u8db3\u6703\u8b70",
    "cat": "\u5546\u696d"
  },
  {
    "en": "submeeting",
    "zh": "\u6b21/\u4e9e\u6703\u8b70",
    "cat": "\u5546\u696d"
  },
  {
    "en": "supermeeting",
    "zh": "\u8d85\u7d1a\u6703\u8b70",
    "cat": "\u5546\u696d"
  },
  {
    "en": "uncolleague",
    "zh": "\u4e0d\u540c\u4e8b",
    "cat": "\u5546\u696d"
  },
  {
    "en": "recolleague",
    "zh": "\u91cd\u65b0\u540c\u4e8b",
    "cat": "\u5546\u696d"
  },
  {
    "en": "precolleague",
    "zh": "\u9810\u5148\u540c\u4e8b",
    "cat": "\u5546\u696d"
  },
  {
    "en": "postcolleague",
    "zh": "\u5f8c\u540c\u4e8b",
    "cat": "\u5546\u696d"
  },
  {
    "en": "overcolleague",
    "zh": "\u904e\u5ea6\u540c\u4e8b",
    "cat": "\u5546\u696d"
  },
  {
    "en": "undercolleague",
    "zh": "\u4e0d\u8db3\u540c\u4e8b",
    "cat": "\u5546\u696d"
  },
  {
    "en": "subcolleague",
    "zh": "\u6b21/\u4e9e\u540c\u4e8b",
    "cat": "\u5546\u696d"
  },
  {
    "en": "supercolleague",
    "zh": "\u8d85\u7d1a\u540c\u4e8b",
    "cat": "\u5546\u696d"
  },
  {
    "en": "unmanager",
    "zh": "\u4e0d\u7d93\u7406",
    "cat": "\u5546\u696d"
  },
  {
    "en": "remanager",
    "zh": "\u91cd\u65b0\u7d93\u7406",
    "cat": "\u5546\u696d"
  },
  {
    "en": "premanager",
    "zh": "\u9810\u5148\u7d93\u7406",
    "cat": "\u5546\u696d"
  },
  {
    "en": "postmanager",
    "zh": "\u5f8c\u7d93\u7406",
    "cat": "\u5546\u696d"
  },
  {
    "en": "overmanager",
    "zh": "\u904e\u5ea6\u7d93\u7406",
    "cat": "\u5546\u696d"
  },
  {
    "en": "undermanager",
    "zh": "\u4e0d\u8db3\u7d93\u7406",
    "cat": "\u5546\u696d"
  },
  {
    "en": "submanager",
    "zh": "\u6b21/\u4e9e\u7d93\u7406",
    "cat": "\u5546\u696d"
  },
  {
    "en": "supermanager",
    "zh": "\u8d85\u7d1a\u7d93\u7406",
    "cat": "\u5546\u696d"
  },
  {
    "en": "unstrategy",
    "zh": "\u4e0d\u7b56\u7565",
    "cat": "\u5546\u696d"
  },
  {
    "en": "restrategy",
    "zh": "\u91cd\u65b0\u7b56\u7565",
    "cat": "\u5546\u696d"
  },
  {
    "en": "prestrategy",
    "zh": "\u9810\u5148\u7b56\u7565",
    "cat": "\u5546\u696d"
  },
  {
    "en": "poststrategy",
    "zh": "\u5f8c\u7b56\u7565",
    "cat": "\u5546\u696d"
  },
  {
    "en": "overstrategy",
    "zh": "\u904e\u5ea6\u7b56\u7565",
    "cat": "\u5546\u696d"
  },
  {
    "en": "understrategy",
    "zh": "\u4e0d\u8db3\u7b56\u7565",
    "cat": "\u5546\u696d"
  },
  {
    "en": "substrategy",
    "zh": "\u6b21/\u4e9e\u7b56\u7565",
    "cat": "\u5546\u696d"
  },
  {
    "en": "superstrategy",
    "zh": "\u8d85\u7d1a\u7b56\u7565",
    "cat": "\u5546\u696d"
  },
  {
    "en": "unmarketing",
    "zh": "\u4e0d\u884c\u92b7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "remarketing",
    "zh": "\u91cd\u65b0\u884c\u92b7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "premarketing",
    "zh": "\u9810\u5148\u884c\u92b7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "postmarketing",
    "zh": "\u5f8c\u884c\u92b7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "overmarketing",
    "zh": "\u904e\u5ea6\u884c\u92b7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "undermarketing",
    "zh": "\u4e0d\u8db3\u884c\u92b7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "submarketing",
    "zh": "\u6b21/\u4e9e\u884c\u92b7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "supermarketing",
    "zh": "\u8d85\u7d1a\u884c\u92b7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "uninvestment",
    "zh": "\u4e0d\u6295\u8cc7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "reinvestment",
    "zh": "\u91cd\u65b0\u6295\u8cc7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "preinvestment",
    "zh": "\u9810\u5148\u6295\u8cc7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "postinvestment",
    "zh": "\u5f8c\u6295\u8cc7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "overinvestment",
    "zh": "\u904e\u5ea6\u6295\u8cc7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "underinvestment",
    "zh": "\u4e0d\u8db3\u6295\u8cc7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "subinvestment",
    "zh": "\u6b21/\u4e9e\u6295\u8cc7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "superinvestment",
    "zh": "\u8d85\u7d1a\u6295\u8cc7",
    "cat": "\u5546\u696d"
  },
  {
    "en": "unpartnership",
    "zh": "\u4e0d\u5408\u4f5c\u95dc\u4fc2",
    "cat": "\u5546\u696d"
  },
  {
    "en": "repartnership",
    "zh": "\u91cd\u65b0\u5408\u4f5c\u95dc\u4fc2",
    "cat": "\u5546\u696d"
  },
  {
    "en": "prepartnership",
    "zh": "\u9810\u5148\u5408\u4f5c\u95dc\u4fc2",
    "cat": "\u5546\u696d"
  },
  {
    "en": "postpartnership",
    "zh": "\u5f8c\u5408\u4f5c\u95dc\u4fc2",
    "cat": "\u5546\u696d"
  },
  {
    "en": "overpartnership",
    "zh": "\u904e\u5ea6\u5408\u4f5c\u95dc\u4fc2",
    "cat": "\u5546\u696d"
  },
  {
    "en": "underpartnership",
    "zh": "\u4e0d\u8db3\u5408\u4f5c\u95dc\u4fc2",
    "cat": "\u5546\u696d"
  },
  {
    "en": "subpartnership",
    "zh": "\u6b21/\u4e9e\u5408\u4f5c\u95dc\u4fc2",
    "cat": "\u5546\u696d"
  },
  {
    "en": "superpartnership",
    "zh": "\u8d85\u7d1a\u5408\u4f5c\u95dc\u4fc2",
    "cat": "\u5546\u696d"
  },
  {
    "en": "unclient",
    "zh": "\u4e0d\u5ba2\u6236",
    "cat": "\u5546\u696d"
  },
  {
    "en": "reclient",
    "zh": "\u91cd\u65b0\u5ba2\u6236",
    "cat": "\u5546\u696d"
  },
  {
    "en": "preclient",
    "zh": "\u9810\u5148\u5ba2\u6236",
    "cat": "\u5546\u696d"
  },
  {
    "en": "postclient",
    "zh": "\u5f8c\u5ba2\u6236",
    "cat": "\u5546\u696d"
  },
  {
    "en": "overclient",
    "zh": "\u904e\u5ea6\u5ba2\u6236",
    "cat": "\u5546\u696d"
  },
  {
    "en": "underclient",
    "zh": "\u4e0d\u8db3\u5ba2\u6236",
    "cat": "\u5546\u696d"
  },
  {
    "en": "subclient",
    "zh": "\u6b21/\u4e9e\u5ba2\u6236",
    "cat": "\u5546\u696d"
  },
  {
    "en": "superclient",
    "zh": "\u8d85\u7d1a\u5ba2\u6236",
    "cat": "\u5546\u696d"
  },
  {
    "en": "unpresentation",
    "zh": "\u4e0d\u7c21\u5831",
    "cat": "\u5546\u696d"
  },
  {
    "en": "representation",
    "zh": "\u91cd\u65b0\u7c21\u5831",
    "cat": "\u5546\u696d"
  },
  {
    "en": "prepresentation",
    "zh": "\u9810\u5148\u7c21\u5831",
    "cat": "\u5546\u696d"
  },
  {
    "en": "postpresentation",
    "zh": "\u5f8c\u7c21\u5831",
    "cat": "\u5546\u696d"
  },
  {
    "en": "overpresentation",
    "zh": "\u904e\u5ea6\u7c21\u5831",
    "cat": "\u5546\u696d"
  },
  {
    "en": "underpresentation",
    "zh": "\u4e0d\u8db3\u7c21\u5831",
    "cat": "\u5546\u696d"
  },
  {
    "en": "subpresentation",
    "zh": "\u6b21/\u4e9e\u7c21\u5831",
    "cat": "\u5546\u696d"
  },
  {
    "en": "superpresentation",
    "zh": "\u8d85\u7d1a\u7c21\u5831",
    "cat": "\u5546\u696d"
  },
  {
    "en": "undeadline",
    "zh": "\u4e0d\u622a\u6b62\u65e5\u671f",
    "cat": "\u5546\u696d"
  },
  {
    "en": "redeadline",
    "zh": "\u91cd\u65b0\u622a\u6b62\u65e5\u671f",
    "cat": "\u5546\u696d"
  },
  {
    "en": "predeadline",
    "zh": "\u9810\u5148\u622a\u6b62\u65e5\u671f",
    "cat": "\u5546\u696d"
  },
  {
    "en": "postdeadline",
    "zh": "\u5f8c\u622a\u6b62\u65e5\u671f",
    "cat": "\u5546\u696d"
  },
  {
    "en": "overdeadline",
    "zh": "\u904e\u5ea6\u622a\u6b62\u65e5\u671f",
    "cat": "\u5546\u696d"
  },
  {
    "en": "underdeadline",
    "zh": "\u4e0d\u8db3\u622a\u6b62\u65e5\u671f",
    "cat": "\u5546\u696d"
  },
  {
    "en": "subdeadline",
    "zh": "\u6b21/\u4e9e\u622a\u6b62\u65e5\u671f",
    "cat": "\u5546\u696d"
  },
  {
    "en": "superdeadline",
    "zh": "\u8d85\u7d1a\u622a\u6b62\u65e5\u671f",
    "cat": "\u5546\u696d"
  },
  {
    "en": "unflight",
    "zh": "\u4e0d\u822a\u73ed",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "reflight",
    "zh": "\u91cd\u65b0\u822a\u73ed",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "preflight",
    "zh": "\u9810\u5148\u822a\u73ed",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "postflight",
    "zh": "\u5f8c\u822a\u73ed",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "overflight",
    "zh": "\u904e\u5ea6\u822a\u73ed",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "underflight",
    "zh": "\u4e0d\u8db3\u822a\u73ed",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "subflight",
    "zh": "\u6b21/\u4e9e\u822a\u73ed",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "superflight",
    "zh": "\u8d85\u7d1a\u822a\u73ed",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "unbaggage",
    "zh": "\u4e0d\u884c\u674e",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "rebaggage",
    "zh": "\u91cd\u65b0\u884c\u674e",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "prebaggage",
    "zh": "\u9810\u5148\u884c\u674e",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "postbaggage",
    "zh": "\u5f8c\u884c\u674e",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "overbaggage",
    "zh": "\u904e\u5ea6\u884c\u674e",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "underbaggage",
    "zh": "\u4e0d\u8db3\u884c\u674e",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "subbaggage",
    "zh": "\u6b21/\u4e9e\u884c\u674e",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "superbaggage",
    "zh": "\u8d85\u7d1a\u884c\u674e",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "unpassport",
    "zh": "\u4e0d\u8b77\u7167",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "repassport",
    "zh": "\u91cd\u65b0\u8b77\u7167",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "prepassport",
    "zh": "\u9810\u5148\u8b77\u7167",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "postpassport",
    "zh": "\u5f8c\u8b77\u7167",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "overpassport",
    "zh": "\u904e\u5ea6\u8b77\u7167",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "underpassport",
    "zh": "\u4e0d\u8db3\u8b77\u7167",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "subpassport",
    "zh": "\u6b21/\u4e9e\u8b77\u7167",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "superpassport",
    "zh": "\u8d85\u7d1a\u8b77\u7167",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "unaccommodation",
    "zh": "\u4e0d\u4f4f\u5bbf",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "reaccommodation",
    "zh": "\u91cd\u65b0\u4f4f\u5bbf",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "preaccommodation",
    "zh": "\u9810\u5148\u4f4f\u5bbf",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "postaccommodation",
    "zh": "\u5f8c\u4f4f\u5bbf",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "overaccommodation",
    "zh": "\u904e\u5ea6\u4f4f\u5bbf",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "underaccommodation",
    "zh": "\u4e0d\u8db3\u4f4f\u5bbf",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "subaccommodation",
    "zh": "\u6b21/\u4e9e\u4f4f\u5bbf",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "superaccommodation",
    "zh": "\u8d85\u7d1a\u4f4f\u5bbf",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "undestination",
    "zh": "\u4e0d\u76ee\u7684\u5730",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "redestination",
    "zh": "\u91cd\u65b0\u76ee\u7684\u5730",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "predestination",
    "zh": "\u9810\u5148\u76ee\u7684\u5730",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "postdestination",
    "zh": "\u5f8c\u76ee\u7684\u5730",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "overdestination",
    "zh": "\u904e\u5ea6\u76ee\u7684\u5730",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "underdestination",
    "zh": "\u4e0d\u8db3\u76ee\u7684\u5730",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "subdestination",
    "zh": "\u6b21/\u4e9e\u76ee\u7684\u5730",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "superdestination",
    "zh": "\u8d85\u7d1a\u76ee\u7684\u5730",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "unitinerary",
    "zh": "\u4e0d\u884c\u7a0b",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "reitinerary",
    "zh": "\u91cd\u65b0\u884c\u7a0b",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "preitinerary",
    "zh": "\u9810\u5148\u884c\u7a0b",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "postitinerary",
    "zh": "\u5f8c\u884c\u7a0b",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "overitinerary",
    "zh": "\u904e\u5ea6\u884c\u7a0b",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "underitinerary",
    "zh": "\u4e0d\u8db3\u884c\u7a0b",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "subitinerary",
    "zh": "\u6b21/\u4e9e\u884c\u7a0b",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "superitinerary",
    "zh": "\u8d85\u7d1a\u884c\u7a0b",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "untourist",
    "zh": "\u4e0d\u904a\u5ba2",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "retourist",
    "zh": "\u91cd\u65b0\u904a\u5ba2",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "pretourist",
    "zh": "\u9810\u5148\u904a\u5ba2",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "posttourist",
    "zh": "\u5f8c\u904a\u5ba2",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "overtourist",
    "zh": "\u904e\u5ea6\u904a\u5ba2",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "undertourist",
    "zh": "\u4e0d\u8db3\u904a\u5ba2",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "subtourist",
    "zh": "\u6b21/\u4e9e\u904a\u5ba2",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "supertourist",
    "zh": "\u8d85\u7d1a\u904a\u5ba2",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "unsouvenir",
    "zh": "\u4e0d\u7d00\u5ff5\u54c1",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "resouvenir",
    "zh": "\u91cd\u65b0\u7d00\u5ff5\u54c1",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "presouvenir",
    "zh": "\u9810\u5148\u7d00\u5ff5\u54c1",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "postsouvenir",
    "zh": "\u5f8c\u7d00\u5ff5\u54c1",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "oversouvenir",
    "zh": "\u904e\u5ea6\u7d00\u5ff5\u54c1",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "undersouvenir",
    "zh": "\u4e0d\u8db3\u7d00\u5ff5\u54c1",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "subsouvenir",
    "zh": "\u6b21/\u4e9e\u7d00\u5ff5\u54c1",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "supersouvenir",
    "zh": "\u8d85\u7d1a\u7d00\u5ff5\u54c1",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "uncustoms",
    "zh": "\u4e0d\u6d77\u95dc",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "recustoms",
    "zh": "\u91cd\u65b0\u6d77\u95dc",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "precustoms",
    "zh": "\u9810\u5148\u6d77\u95dc",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "postcustoms",
    "zh": "\u5f8c\u6d77\u95dc",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "overcustoms",
    "zh": "\u904e\u5ea6\u6d77\u95dc",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "undercustoms",
    "zh": "\u4e0d\u8db3\u6d77\u95dc",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "subcustoms",
    "zh": "\u6b21/\u4e9e\u6d77\u95dc",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "supercustoms",
    "zh": "\u8d85\u7d1a\u6d77\u95dc",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "unboarding",
    "zh": "\u4e0d\u767b\u6a5f",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "reboarding",
    "zh": "\u91cd\u65b0\u767b\u6a5f",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "preboarding",
    "zh": "\u9810\u5148\u767b\u6a5f",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "postboarding",
    "zh": "\u5f8c\u767b\u6a5f",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "overboarding",
    "zh": "\u904e\u5ea6\u767b\u6a5f",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "underboarding",
    "zh": "\u4e0d\u8db3\u767b\u6a5f",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "subboarding",
    "zh": "\u6b21/\u4e9e\u767b\u6a5f",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "superboarding",
    "zh": "\u8d85\u7d1a\u767b\u6a5f",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "unsymptom",
    "zh": "\u4e0d\u75c7\u72c0",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "resymptom",
    "zh": "\u91cd\u65b0\u75c7\u72c0",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "presymptom",
    "zh": "\u9810\u5148\u75c7\u72c0",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "postsymptom",
    "zh": "\u5f8c\u75c7\u72c0",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "oversymptom",
    "zh": "\u904e\u5ea6\u75c7\u72c0",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "undersymptom",
    "zh": "\u4e0d\u8db3\u75c7\u72c0",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "subsymptom",
    "zh": "\u6b21/\u4e9e\u75c7\u72c0",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "supersymptom",
    "zh": "\u8d85\u7d1a\u75c7\u72c0",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "unprescription",
    "zh": "\u4e0d\u8655\u65b9",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "represcription",
    "zh": "\u91cd\u65b0\u8655\u65b9",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "preprescription",
    "zh": "\u9810\u5148\u8655\u65b9",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "postprescription",
    "zh": "\u5f8c\u8655\u65b9",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "overprescription",
    "zh": "\u904e\u5ea6\u8655\u65b9",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "underprescription",
    "zh": "\u4e0d\u8db3\u8655\u65b9",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "subprescription",
    "zh": "\u6b21/\u4e9e\u8655\u65b9",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "superprescription",
    "zh": "\u8d85\u7d1a\u8655\u65b9",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "unpharmacy",
    "zh": "\u4e0d\u85e5\u5c40",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "repharmacy",
    "zh": "\u91cd\u65b0\u85e5\u5c40",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "prepharmacy",
    "zh": "\u9810\u5148\u85e5\u5c40",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "postpharmacy",
    "zh": "\u5f8c\u85e5\u5c40",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "overpharmacy",
    "zh": "\u904e\u5ea6\u85e5\u5c40",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "underpharmacy",
    "zh": "\u4e0d\u8db3\u85e5\u5c40",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "subpharmacy",
    "zh": "\u6b21/\u4e9e\u85e5\u5c40",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "superpharmacy",
    "zh": "\u8d85\u7d1a\u85e5\u5c40",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "unsurgery",
    "zh": "\u4e0d\u624b\u8853",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "resurgery",
    "zh": "\u91cd\u65b0\u624b\u8853",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "presurgery",
    "zh": "\u9810\u5148\u624b\u8853",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "postsurgery",
    "zh": "\u5f8c\u624b\u8853",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "oversurgery",
    "zh": "\u904e\u5ea6\u624b\u8853",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "undersurgery",
    "zh": "\u4e0d\u8db3\u624b\u8853",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "subsurgery",
    "zh": "\u6b21/\u4e9e\u624b\u8853",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "supersurgery",
    "zh": "\u8d85\u7d1a\u624b\u8853",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "unclinic",
    "zh": "\u4e0d\u8a3a\u6240",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "reclinic",
    "zh": "\u91cd\u65b0\u8a3a\u6240",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "preclinic",
    "zh": "\u9810\u5148\u8a3a\u6240",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "postclinic",
    "zh": "\u5f8c\u8a3a\u6240",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "overclinic",
    "zh": "\u904e\u5ea6\u8a3a\u6240",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "underclinic",
    "zh": "\u4e0d\u8db3\u8a3a\u6240",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "subclinic",
    "zh": "\u6b21/\u4e9e\u8a3a\u6240",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "superclinic",
    "zh": "\u8d85\u7d1a\u8a3a\u6240",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "undiagnosis",
    "zh": "\u4e0d\u8a3a\u65b7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "rediagnosis",
    "zh": "\u91cd\u65b0\u8a3a\u65b7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "prediagnosis",
    "zh": "\u9810\u5148\u8a3a\u65b7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "postdiagnosis",
    "zh": "\u5f8c\u8a3a\u65b7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "overdiagnosis",
    "zh": "\u904e\u5ea6\u8a3a\u65b7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "underdiagnosis",
    "zh": "\u4e0d\u8db3\u8a3a\u65b7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "subdiagnosis",
    "zh": "\u6b21/\u4e9e\u8a3a\u65b7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "superdiagnosis",
    "zh": "\u8d85\u7d1a\u8a3a\u65b7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "untreatment",
    "zh": "\u4e0d\u6cbb\u7642",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "retreatment",
    "zh": "\u91cd\u65b0\u6cbb\u7642",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "pretreatment",
    "zh": "\u9810\u5148\u6cbb\u7642",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "posttreatment",
    "zh": "\u5f8c\u6cbb\u7642",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "overtreatment",
    "zh": "\u904e\u5ea6\u6cbb\u7642",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "undertreatment",
    "zh": "\u4e0d\u8db3\u6cbb\u7642",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "subtreatment",
    "zh": "\u6b21/\u4e9e\u6cbb\u7642",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "supertreatment",
    "zh": "\u8d85\u7d1a\u6cbb\u7642",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "unvaccine",
    "zh": "\u4e0d\u75ab\u82d7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "revaccine",
    "zh": "\u91cd\u65b0\u75ab\u82d7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "prevaccine",
    "zh": "\u9810\u5148\u75ab\u82d7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "postvaccine",
    "zh": "\u5f8c\u75ab\u82d7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "overvaccine",
    "zh": "\u904e\u5ea6\u75ab\u82d7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "undervaccine",
    "zh": "\u4e0d\u8db3\u75ab\u82d7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "subvaccine",
    "zh": "\u6b21/\u4e9e\u75ab\u82d7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "supervaccine",
    "zh": "\u8d85\u7d1a\u75ab\u82d7",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "uninfection",
    "zh": "\u4e0d\u611f\u67d3",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "reinfection",
    "zh": "\u91cd\u65b0\u611f\u67d3",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "preinfection",
    "zh": "\u9810\u5148\u611f\u67d3",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "postinfection",
    "zh": "\u5f8c\u611f\u67d3",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "overinfection",
    "zh": "\u904e\u5ea6\u611f\u67d3",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "underinfection",
    "zh": "\u4e0d\u8db3\u611f\u67d3",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "subinfection",
    "zh": "\u6b21/\u4e9e\u611f\u67d3",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "superinfection",
    "zh": "\u8d85\u7d1a\u611f\u67d3",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "unemergency",
    "zh": "\u4e0d\u6025\u8a3a",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "reemergency",
    "zh": "\u91cd\u65b0\u6025\u8a3a",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "preemergency",
    "zh": "\u9810\u5148\u6025\u8a3a",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "postemergency",
    "zh": "\u5f8c\u6025\u8a3a",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "overemergency",
    "zh": "\u904e\u5ea6\u6025\u8a3a",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "underemergency",
    "zh": "\u4e0d\u8db3\u6025\u8a3a",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "subemergency",
    "zh": "\u6b21/\u4e9e\u6025\u8a3a",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "superemergency",
    "zh": "\u8d85\u7d1a\u6025\u8a3a",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "ungrocery",
    "zh": "\u4e0d\u96dc\u8ca8",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "regrocery",
    "zh": "\u91cd\u65b0\u96dc\u8ca8",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "pregrocery",
    "zh": "\u9810\u5148\u96dc\u8ca8",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "postgrocery",
    "zh": "\u5f8c\u96dc\u8ca8",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "overgrocery",
    "zh": "\u904e\u5ea6\u96dc\u8ca8",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "undergrocery",
    "zh": "\u4e0d\u8db3\u96dc\u8ca8",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "subgrocery",
    "zh": "\u6b21/\u4e9e\u96dc\u8ca8",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "supergrocery",
    "zh": "\u8d85\u7d1a\u96dc\u8ca8",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "unlaundry",
    "zh": "\u4e0d\u6d17\u8863",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "relaundry",
    "zh": "\u91cd\u65b0\u6d17\u8863",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "prelaundry",
    "zh": "\u9810\u5148\u6d17\u8863",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "postlaundry",
    "zh": "\u5f8c\u6d17\u8863",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "overlaundry",
    "zh": "\u904e\u5ea6\u6d17\u8863",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "underlaundry",
    "zh": "\u4e0d\u8db3\u6d17\u8863",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "sublaundry",
    "zh": "\u6b21/\u4e9e\u6d17\u8863",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "superlaundry",
    "zh": "\u8d85\u7d1a\u6d17\u8863",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "uncommute",
    "zh": "\u4e0d\u901a\u52e4",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "recommute",
    "zh": "\u91cd\u65b0\u901a\u52e4",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "precommute",
    "zh": "\u9810\u5148\u901a\u52e4",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "postcommute",
    "zh": "\u5f8c\u901a\u52e4",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "overcommute",
    "zh": "\u904e\u5ea6\u901a\u52e4",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "undercommute",
    "zh": "\u4e0d\u8db3\u901a\u52e4",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "subcommute",
    "zh": "\u6b21/\u4e9e\u901a\u52e4",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "supercommute",
    "zh": "\u8d85\u7d1a\u901a\u52e4",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "unrecipe",
    "zh": "\u4e0d\u98df\u8b5c",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "rerecipe",
    "zh": "\u91cd\u65b0\u98df\u8b5c",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "prerecipe",
    "zh": "\u9810\u5148\u98df\u8b5c",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "postrecipe",
    "zh": "\u5f8c\u98df\u8b5c",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "overrecipe",
    "zh": "\u904e\u5ea6\u98df\u8b5c",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "underrecipe",
    "zh": "\u4e0d\u8db3\u98df\u8b5c",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "subrecipe",
    "zh": "\u6b21/\u4e9e\u98df\u8b5c",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "superrecipe",
    "zh": "\u8d85\u7d1a\u98df\u8b5c",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "unappliance",
    "zh": "\u4e0d\u5bb6\u96fb",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "reappliance",
    "zh": "\u91cd\u65b0\u5bb6\u96fb",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "preappliance",
    "zh": "\u9810\u5148\u5bb6\u96fb",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "postappliance",
    "zh": "\u5f8c\u5bb6\u96fb",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "overappliance",
    "zh": "\u904e\u5ea6\u5bb6\u96fb",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "underappliance",
    "zh": "\u4e0d\u8db3\u5bb6\u96fb",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "subappliance",
    "zh": "\u6b21/\u4e9e\u5bb6\u96fb",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "superappliance",
    "zh": "\u8d85\u7d1a\u5bb6\u96fb",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "unfurniture",
    "zh": "\u4e0d\u5bb6\u5177",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "refurniture",
    "zh": "\u91cd\u65b0\u5bb6\u5177",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "prefurniture",
    "zh": "\u9810\u5148\u5bb6\u5177",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "postfurniture",
    "zh": "\u5f8c\u5bb6\u5177",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "overfurniture",
    "zh": "\u904e\u5ea6\u5bb6\u5177",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "underfurniture",
    "zh": "\u4e0d\u8db3\u5bb6\u5177",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "subfurniture",
    "zh": "\u6b21/\u4e9e\u5bb6\u5177",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "superfurniture",
    "zh": "\u8d85\u7d1a\u5bb6\u5177",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "unneighborhood",
    "zh": "\u4e0d\u793e\u5340",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "reneighborhood",
    "zh": "\u91cd\u65b0\u793e\u5340",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "preneighborhood",
    "zh": "\u9810\u5148\u793e\u5340",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "postneighborhood",
    "zh": "\u5f8c\u793e\u5340",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "overneighborhood",
    "zh": "\u904e\u5ea6\u793e\u5340",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "underneighborhood",
    "zh": "\u4e0d\u8db3\u793e\u5340",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "subneighborhood",
    "zh": "\u6b21/\u4e9e\u793e\u5340",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "superneighborhood",
    "zh": "\u8d85\u7d1a\u793e\u5340",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "unchore",
    "zh": "\u4e0d\u5bb6\u52d9",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "rechore",
    "zh": "\u91cd\u65b0\u5bb6\u52d9",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "prechore",
    "zh": "\u9810\u5148\u5bb6\u52d9",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "postchore",
    "zh": "\u5f8c\u5bb6\u52d9",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "overchore",
    "zh": "\u904e\u5ea6\u5bb6\u52d9",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "underchore",
    "zh": "\u4e0d\u8db3\u5bb6\u52d9",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "subchore",
    "zh": "\u6b21/\u4e9e\u5bb6\u52d9",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "superchore",
    "zh": "\u8d85\u7d1a\u5bb6\u52d9",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "unhabit",
    "zh": "\u4e0d\u7fd2\u6163",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "rehabit",
    "zh": "\u91cd\u65b0\u7fd2\u6163",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "prehabit",
    "zh": "\u9810\u5148\u7fd2\u6163",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "posthabit",
    "zh": "\u5f8c\u7fd2\u6163",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "overhabit",
    "zh": "\u904e\u5ea6\u7fd2\u6163",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "underhabit",
    "zh": "\u4e0d\u8db3\u7fd2\u6163",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "subhabit",
    "zh": "\u6b21/\u4e9e\u7fd2\u6163",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "superhabit",
    "zh": "\u8d85\u7d1a\u7fd2\u6163",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "unroutine",
    "zh": "\u4e0d\u65e5\u5e38\u4f5c\u606f",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "reroutine",
    "zh": "\u91cd\u65b0\u65e5\u5e38\u4f5c\u606f",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "preroutine",
    "zh": "\u9810\u5148\u65e5\u5e38\u4f5c\u606f",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "postroutine",
    "zh": "\u5f8c\u65e5\u5e38\u4f5c\u606f",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "overroutine",
    "zh": "\u904e\u5ea6\u65e5\u5e38\u4f5c\u606f",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "underroutine",
    "zh": "\u4e0d\u8db3\u65e5\u5e38\u4f5c\u606f",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "subroutine",
    "zh": "\u6b21/\u4e9e\u65e5\u5e38\u4f5c\u606f",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "superroutine",
    "zh": "\u8d85\u7d1a\u65e5\u5e38\u4f5c\u606f",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "unsoftware",
    "zh": "\u4e0d\u8edf\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "resoftware",
    "zh": "\u91cd\u65b0\u8edf\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "presoftware",
    "zh": "\u9810\u5148\u8edf\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "postsoftware",
    "zh": "\u5f8c\u8edf\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "oversoftware",
    "zh": "\u904e\u5ea6\u8edf\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "undersoftware",
    "zh": "\u4e0d\u8db3\u8edf\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "subsoftware",
    "zh": "\u6b21/\u4e9e\u8edf\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "supersoftware",
    "zh": "\u8d85\u7d1a\u8edf\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "unhardware",
    "zh": "\u4e0d\u786c\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "rehardware",
    "zh": "\u91cd\u65b0\u786c\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "prehardware",
    "zh": "\u9810\u5148\u786c\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "posthardware",
    "zh": "\u5f8c\u786c\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "overhardware",
    "zh": "\u904e\u5ea6\u786c\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "underhardware",
    "zh": "\u4e0d\u8db3\u786c\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "subhardware",
    "zh": "\u6b21/\u4e9e\u786c\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "superhardware",
    "zh": "\u8d85\u7d1a\u786c\u9ad4",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "undatabase",
    "zh": "\u4e0d\u8cc7\u6599\u5eab",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "redatabase",
    "zh": "\u91cd\u65b0\u8cc7\u6599\u5eab",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "predatabase",
    "zh": "\u9810\u5148\u8cc7\u6599\u5eab",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "postdatabase",
    "zh": "\u5f8c\u8cc7\u6599\u5eab",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "overdatabase",
    "zh": "\u904e\u5ea6\u8cc7\u6599\u5eab",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "underdatabase",
    "zh": "\u4e0d\u8db3\u8cc7\u6599\u5eab",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "subdatabase",
    "zh": "\u6b21/\u4e9e\u8cc7\u6599\u5eab",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "superdatabase",
    "zh": "\u8d85\u7d1a\u8cc7\u6599\u5eab",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "unnetwork",
    "zh": "\u4e0d\u7db2\u8def",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "renetwork",
    "zh": "\u91cd\u65b0\u7db2\u8def",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "prenetwork",
    "zh": "\u9810\u5148\u7db2\u8def",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "postnetwork",
    "zh": "\u5f8c\u7db2\u8def",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "overnetwork",
    "zh": "\u904e\u5ea6\u7db2\u8def",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "undernetwork",
    "zh": "\u4e0d\u8db3\u7db2\u8def",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "subnetwork",
    "zh": "\u6b21/\u4e9e\u7db2\u8def",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "supernetwork",
    "zh": "\u8d85\u7d1a\u7db2\u8def",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "unalgorithm",
    "zh": "\u4e0d\u6f14\u7b97\u6cd5",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "realgorithm",
    "zh": "\u91cd\u65b0\u6f14\u7b97\u6cd5",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "prealgorithm",
    "zh": "\u9810\u5148\u6f14\u7b97\u6cd5",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "postalgorithm",
    "zh": "\u5f8c\u6f14\u7b97\u6cd5",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "overalgorithm",
    "zh": "\u904e\u5ea6\u6f14\u7b97\u6cd5",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "underalgorithm",
    "zh": "\u4e0d\u8db3\u6f14\u7b97\u6cd5",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "subalgorithm",
    "zh": "\u6b21/\u4e9e\u6f14\u7b97\u6cd5",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "superalgorithm",
    "zh": "\u8d85\u7d1a\u6f14\u7b97\u6cd5",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "undeveloper",
    "zh": "\u4e0d\u958b\u767c\u8005",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "redeveloper",
    "zh": "\u91cd\u65b0\u958b\u767c\u8005",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "predeveloper",
    "zh": "\u9810\u5148\u958b\u767c\u8005",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "postdeveloper",
    "zh": "\u5f8c\u958b\u767c\u8005",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "overdeveloper",
    "zh": "\u904e\u5ea6\u958b\u767c\u8005",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "underdeveloper",
    "zh": "\u4e0d\u8db3\u958b\u767c\u8005",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "subdeveloper",
    "zh": "\u6b21/\u4e9e\u958b\u767c\u8005",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "superdeveloper",
    "zh": "\u8d85\u7d1a\u958b\u767c\u8005",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "unapplication",
    "zh": "\u4e0d\u61c9\u7528\u7a0b\u5f0f",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "reapplication",
    "zh": "\u91cd\u65b0\u61c9\u7528\u7a0b\u5f0f",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "preapplication",
    "zh": "\u9810\u5148\u61c9\u7528\u7a0b\u5f0f",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "postapplication",
    "zh": "\u5f8c\u61c9\u7528\u7a0b\u5f0f",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "overapplication",
    "zh": "\u904e\u5ea6\u61c9\u7528\u7a0b\u5f0f",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "underapplication",
    "zh": "\u4e0d\u8db3\u61c9\u7528\u7a0b\u5f0f",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "subapplication",
    "zh": "\u6b21/\u4e9e\u61c9\u7528\u7a0b\u5f0f",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "superapplication",
    "zh": "\u8d85\u7d1a\u61c9\u7528\u7a0b\u5f0f",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "unserver",
    "zh": "\u4e0d\u4f3a\u670d\u5668",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "reserver",
    "zh": "\u91cd\u65b0\u4f3a\u670d\u5668",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "preserver",
    "zh": "\u9810\u5148\u4f3a\u670d\u5668",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "postserver",
    "zh": "\u5f8c\u4f3a\u670d\u5668",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "overserver",
    "zh": "\u904e\u5ea6\u4f3a\u670d\u5668",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "underserver",
    "zh": "\u4e0d\u8db3\u4f3a\u670d\u5668",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "subserver",
    "zh": "\u6b21/\u4e9e\u4f3a\u670d\u5668",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "superserver",
    "zh": "\u8d85\u7d1a\u4f3a\u670d\u5668",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "uncloud",
    "zh": "\u4e0d\u96f2\u7aef",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "recloud",
    "zh": "\u91cd\u65b0\u96f2\u7aef",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "precloud",
    "zh": "\u9810\u5148\u96f2\u7aef",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "postcloud",
    "zh": "\u5f8c\u96f2\u7aef",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "overcloud",
    "zh": "\u904e\u5ea6\u96f2\u7aef",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "undercloud",
    "zh": "\u4e0d\u8db3\u96f2\u7aef",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "subcloud",
    "zh": "\u6b21/\u4e9e\u96f2\u7aef",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "supercloud",
    "zh": "\u8d85\u7d1a\u96f2\u7aef",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "unsecurity",
    "zh": "\u4e0d\u5b89\u5168",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "resecurity",
    "zh": "\u91cd\u65b0\u5b89\u5168",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "presecurity",
    "zh": "\u9810\u5148\u5b89\u5168",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "postsecurity",
    "zh": "\u5f8c\u5b89\u5168",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "oversecurity",
    "zh": "\u904e\u5ea6\u5b89\u5168",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "undersecurity",
    "zh": "\u4e0d\u8db3\u5b89\u5168",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "subsecurity",
    "zh": "\u6b21/\u4e9e\u5b89\u5168",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "supersecurity",
    "zh": "\u8d85\u7d1a\u5b89\u5168",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "unchill",
    "zh": "\u4e0d\u653e\u9b06",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "rechill",
    "zh": "\u91cd\u65b0\u653e\u9b06",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "prechill",
    "zh": "\u9810\u5148\u653e\u9b06",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "postchill",
    "zh": "\u5f8c\u653e\u9b06",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "overchill",
    "zh": "\u904e\u5ea6\u653e\u9b06",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "underchill",
    "zh": "\u4e0d\u8db3\u653e\u9b06",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "subchill",
    "zh": "\u6b21/\u4e9e\u653e\u9b06",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "superchill",
    "zh": "\u8d85\u7d1a\u653e\u9b06",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "unflex",
    "zh": "\u4e0d\u70ab\u8000",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "reflex",
    "zh": "\u91cd\u65b0\u70ab\u8000",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "preflex",
    "zh": "\u9810\u5148\u70ab\u8000",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "postflex",
    "zh": "\u5f8c\u70ab\u8000",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "overflex",
    "zh": "\u904e\u5ea6\u70ab\u8000",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "underflex",
    "zh": "\u4e0d\u8db3\u70ab\u8000",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "subflex",
    "zh": "\u6b21/\u4e9e\u70ab\u8000",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "superflex",
    "zh": "\u8d85\u7d1a\u70ab\u8000",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "unghost",
    "zh": "\u4e0d\u795e\u96b1",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "reghost",
    "zh": "\u91cd\u65b0\u795e\u96b1",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "preghost",
    "zh": "\u9810\u5148\u795e\u96b1",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "postghost",
    "zh": "\u5f8c\u795e\u96b1",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "overghost",
    "zh": "\u904e\u5ea6\u795e\u96b1",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "underghost",
    "zh": "\u4e0d\u8db3\u795e\u96b1",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "subghost",
    "zh": "\u6b21/\u4e9e\u795e\u96b1",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "superghost",
    "zh": "\u8d85\u7d1a\u795e\u96b1",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "unsalty",
    "zh": "\u4e0d\u60f1\u7f9e",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "resalty",
    "zh": "\u91cd\u65b0\u60f1\u7f9e",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "presalty",
    "zh": "\u9810\u5148\u60f1\u7f9e",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "postsalty",
    "zh": "\u5f8c\u60f1\u7f9e",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "oversalty",
    "zh": "\u904e\u5ea6\u60f1\u7f9e",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "undersalty",
    "zh": "\u4e0d\u8db3\u60f1\u7f9e",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "subsalty",
    "zh": "\u6b21/\u4e9e\u60f1\u7f9e",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "supersalty",
    "zh": "\u8d85\u7d1a\u60f1\u7f9e",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "unshady",
    "zh": "\u4e0d\u53ef\u7591\u7684",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "reshady",
    "zh": "\u91cd\u65b0\u53ef\u7591\u7684",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "preshady",
    "zh": "\u9810\u5148\u53ef\u7591\u7684",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "postshady",
    "zh": "\u5f8c\u53ef\u7591\u7684",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "overshady",
    "zh": "\u904e\u5ea6\u53ef\u7591\u7684",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "undershady",
    "zh": "\u4e0d\u8db3\u53ef\u7591\u7684",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "subshady",
    "zh": "\u6b21/\u4e9e\u53ef\u7591\u7684",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "supershady",
    "zh": "\u8d85\u7d1a\u53ef\u7591\u7684",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "unlit",
    "zh": "\u4e0d\u8d85\u8b9a",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "relit",
    "zh": "\u91cd\u65b0\u8d85\u8b9a",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "prelit",
    "zh": "\u9810\u5148\u8d85\u8b9a",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "postlit",
    "zh": "\u5f8c\u8d85\u8b9a",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "overlit",
    "zh": "\u904e\u5ea6\u8d85\u8b9a",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "underlit",
    "zh": "\u4e0d\u8db3\u8d85\u8b9a",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "sublit",
    "zh": "\u6b21/\u4e9e\u8d85\u8b9a",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "superlit",
    "zh": "\u8d85\u7d1a\u8d85\u8b9a",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "undope",
    "zh": "\u4e0d\u9177",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "redope",
    "zh": "\u91cd\u65b0\u9177",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "predope",
    "zh": "\u9810\u5148\u9177",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "postdope",
    "zh": "\u5f8c\u9177",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "overdope",
    "zh": "\u904e\u5ea6\u9177",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "underdope",
    "zh": "\u4e0d\u8db3\u9177",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "subdope",
    "zh": "\u6b21/\u4e9e\u9177",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "superdope",
    "zh": "\u8d85\u7d1a\u9177",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "ungoat",
    "zh": "\u4e0d\u53f2\u4e0a\u6700\u68d2",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "regoat",
    "zh": "\u91cd\u65b0\u53f2\u4e0a\u6700\u68d2",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "pregoat",
    "zh": "\u9810\u5148\u53f2\u4e0a\u6700\u68d2",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "postgoat",
    "zh": "\u5f8c\u53f2\u4e0a\u6700\u68d2",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "overgoat",
    "zh": "\u904e\u5ea6\u53f2\u4e0a\u6700\u68d2",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "undergoat",
    "zh": "\u4e0d\u8db3\u53f2\u4e0a\u6700\u68d2",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "subgoat",
    "zh": "\u6b21/\u4e9e\u53f2\u4e0a\u6700\u68d2",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "supergoat",
    "zh": "\u8d85\u7d1a\u53f2\u4e0a\u6700\u68d2",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "uncringe",
    "zh": "\u4e0d\u5c37\u5c2c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "recringe",
    "zh": "\u91cd\u65b0\u5c37\u5c2c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "precringe",
    "zh": "\u9810\u5148\u5c37\u5c2c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "postcringe",
    "zh": "\u5f8c\u5c37\u5c2c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "overcringe",
    "zh": "\u904e\u5ea6\u5c37\u5c2c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "undercringe",
    "zh": "\u4e0d\u8db3\u5c37\u5c2c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "subcringe",
    "zh": "\u6b21/\u4e9e\u5c37\u5c2c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "supercringe",
    "zh": "\u8d85\u7d1a\u5c37\u5c2c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "unbet",
    "zh": "\u4e0d\u6c92\u554f\u984c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "rebet",
    "zh": "\u91cd\u65b0\u6c92\u554f\u984c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "prebet",
    "zh": "\u9810\u5148\u6c92\u554f\u984c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "postbet",
    "zh": "\u5f8c\u6c92\u554f\u984c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "overbet",
    "zh": "\u904e\u5ea6\u6c92\u554f\u984c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "underbet",
    "zh": "\u4e0d\u8db3\u6c92\u554f\u984c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "subbet",
    "zh": "\u6b21/\u4e9e\u6c92\u554f\u984c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "superbet",
    "zh": "\u8d85\u7d1a\u6c92\u554f\u984c",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "unanxious",
    "zh": "\u4e0d\u7126\u616e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "reanxious",
    "zh": "\u91cd\u65b0\u7126\u616e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "preanxious",
    "zh": "\u9810\u5148\u7126\u616e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "postanxious",
    "zh": "\u5f8c\u7126\u616e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "overanxious",
    "zh": "\u904e\u5ea6\u7126\u616e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "underanxious",
    "zh": "\u4e0d\u8db3\u7126\u616e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "subanxious",
    "zh": "\u6b21/\u4e9e\u7126\u616e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "superanxious",
    "zh": "\u8d85\u7d1a\u7126\u616e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "unthrilled",
    "zh": "\u4e0d\u975e\u5e38\u8208\u596e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "rethrilled",
    "zh": "\u91cd\u65b0\u975e\u5e38\u8208\u596e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "prethrilled",
    "zh": "\u9810\u5148\u975e\u5e38\u8208\u596e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "postthrilled",
    "zh": "\u5f8c\u975e\u5e38\u8208\u596e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "overthrilled",
    "zh": "\u904e\u5ea6\u975e\u5e38\u8208\u596e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "underthrilled",
    "zh": "\u4e0d\u8db3\u975e\u5e38\u8208\u596e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "subthrilled",
    "zh": "\u6b21/\u4e9e\u975e\u5e38\u8208\u596e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "superthrilled",
    "zh": "\u8d85\u7d1a\u975e\u5e38\u8208\u596e\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "undepressed",
    "zh": "\u4e0d\u6cae\u55aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "redepressed",
    "zh": "\u91cd\u65b0\u6cae\u55aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "predepressed",
    "zh": "\u9810\u5148\u6cae\u55aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "postdepressed",
    "zh": "\u5f8c\u6cae\u55aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "overdepressed",
    "zh": "\u904e\u5ea6\u6cae\u55aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "underdepressed",
    "zh": "\u4e0d\u8db3\u6cae\u55aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "subdepressed",
    "zh": "\u6b21/\u4e9e\u6cae\u55aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "superdepressed",
    "zh": "\u8d85\u7d1a\u6cae\u55aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "ungrateful",
    "zh": "\u4e0d\u611f\u6fc0\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "regrateful",
    "zh": "\u91cd\u65b0\u611f\u6fc0\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "pregrateful",
    "zh": "\u9810\u5148\u611f\u6fc0\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "postgrateful",
    "zh": "\u5f8c\u611f\u6fc0\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "overgrateful",
    "zh": "\u904e\u5ea6\u611f\u6fc0\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "undergrateful",
    "zh": "\u4e0d\u8db3\u611f\u6fc0\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "subgrateful",
    "zh": "\u6b21/\u4e9e\u611f\u6fc0\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "supergrateful",
    "zh": "\u8d85\u7d1a\u611f\u6fc0\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "unfrustrated",
    "zh": "\u4e0d\u632b\u6298\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "refrustrated",
    "zh": "\u91cd\u65b0\u632b\u6298\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "prefrustrated",
    "zh": "\u9810\u5148\u632b\u6298\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "postfrustrated",
    "zh": "\u5f8c\u632b\u6298\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "overfrustrated",
    "zh": "\u904e\u5ea6\u632b\u6298\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "underfrustrated",
    "zh": "\u4e0d\u8db3\u632b\u6298\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "subfrustrated",
    "zh": "\u6b21/\u4e9e\u632b\u6298\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "superfrustrated",
    "zh": "\u8d85\u7d1a\u632b\u6298\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "unoverwhelmed",
    "zh": "\u4e0d\u4e0d\u77e5\u6240\u63aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "reoverwhelmed",
    "zh": "\u91cd\u65b0\u4e0d\u77e5\u6240\u63aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "preoverwhelmed",
    "zh": "\u9810\u5148\u4e0d\u77e5\u6240\u63aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "postoverwhelmed",
    "zh": "\u5f8c\u4e0d\u77e5\u6240\u63aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "overoverwhelmed",
    "zh": "\u904e\u5ea6\u4e0d\u77e5\u6240\u63aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "underoverwhelmed",
    "zh": "\u4e0d\u8db3\u4e0d\u77e5\u6240\u63aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "suboverwhelmed",
    "zh": "\u6b21/\u4e9e\u4e0d\u77e5\u6240\u63aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "superoverwhelmed",
    "zh": "\u8d85\u7d1a\u4e0d\u77e5\u6240\u63aa\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "unrelieved",
    "zh": "\u4e0d\u9b06\u4e86\u4e00\u53e3\u6c23\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "rerelieved",
    "zh": "\u91cd\u65b0\u9b06\u4e86\u4e00\u53e3\u6c23\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "prerelieved",
    "zh": "\u9810\u5148\u9b06\u4e86\u4e00\u53e3\u6c23\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "postrelieved",
    "zh": "\u5f8c\u9b06\u4e86\u4e00\u53e3\u6c23\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "overrelieved",
    "zh": "\u904e\u5ea6\u9b06\u4e86\u4e00\u53e3\u6c23\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "underrelieved",
    "zh": "\u4e0d\u8db3\u9b06\u4e86\u4e00\u53e3\u6c23\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "subrelieved",
    "zh": "\u6b21/\u4e9e\u9b06\u4e86\u4e00\u53e3\u6c23\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "superrelieved",
    "zh": "\u8d85\u7d1a\u9b06\u4e86\u4e00\u53e3\u6c23\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "unjealous",
    "zh": "\u4e0d\u5ac9\u5992\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "rejealous",
    "zh": "\u91cd\u65b0\u5ac9\u5992\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "prejealous",
    "zh": "\u9810\u5148\u5ac9\u5992\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "postjealous",
    "zh": "\u5f8c\u5ac9\u5992\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "overjealous",
    "zh": "\u904e\u5ea6\u5ac9\u5992\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "underjealous",
    "zh": "\u4e0d\u8db3\u5ac9\u5992\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "subjealous",
    "zh": "\u6b21/\u4e9e\u5ac9\u5992\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "superjealous",
    "zh": "\u8d85\u7d1a\u5ac9\u5992\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "unfurious",
    "zh": "\u4e0d\u72c2\u6012\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "refurious",
    "zh": "\u91cd\u65b0\u72c2\u6012\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "prefurious",
    "zh": "\u9810\u5148\u72c2\u6012\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "postfurious",
    "zh": "\u5f8c\u72c2\u6012\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "overfurious",
    "zh": "\u904e\u5ea6\u72c2\u6012\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "underfurious",
    "zh": "\u4e0d\u8db3\u72c2\u6012\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "subfurious",
    "zh": "\u6b21/\u4e9e\u72c2\u6012\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "superfurious",
    "zh": "\u8d85\u7d1a\u72c2\u6012\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "unsympathetic",
    "zh": "\u4e0d\u6709\u540c\u60c5\u5fc3\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "resympathetic",
    "zh": "\u91cd\u65b0\u6709\u540c\u60c5\u5fc3\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "presympathetic",
    "zh": "\u9810\u5148\u6709\u540c\u60c5\u5fc3\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "postsympathetic",
    "zh": "\u5f8c\u6709\u540c\u60c5\u5fc3\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "oversympathetic",
    "zh": "\u904e\u5ea6\u6709\u540c\u60c5\u5fc3\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "undersympathetic",
    "zh": "\u4e0d\u8db3\u6709\u540c\u60c5\u5fc3\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "subsympathetic",
    "zh": "\u6b21/\u4e9e\u6709\u540c\u60c5\u5fc3\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "supersympathetic",
    "zh": "\u8d85\u7d1a\u6709\u540c\u60c5\u5fc3\u7684",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "untournament",
    "zh": "\u4e0d\u9326\u6a19\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "retournament",
    "zh": "\u91cd\u65b0\u9326\u6a19\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "pretournament",
    "zh": "\u9810\u5148\u9326\u6a19\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "posttournament",
    "zh": "\u5f8c\u9326\u6a19\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "overtournament",
    "zh": "\u904e\u5ea6\u9326\u6a19\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "undertournament",
    "zh": "\u4e0d\u8db3\u9326\u6a19\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "subtournament",
    "zh": "\u6b21/\u4e9e\u9326\u6a19\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "supertournament",
    "zh": "\u8d85\u7d1a\u9326\u6a19\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "unathlete",
    "zh": "\u4e0d\u904b\u52d5\u54e1",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "reathlete",
    "zh": "\u91cd\u65b0\u904b\u52d5\u54e1",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "preathlete",
    "zh": "\u9810\u5148\u904b\u52d5\u54e1",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "postathlete",
    "zh": "\u5f8c\u904b\u52d5\u54e1",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "overathlete",
    "zh": "\u904e\u5ea6\u904b\u52d5\u54e1",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "underathlete",
    "zh": "\u4e0d\u8db3\u904b\u52d5\u54e1",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "subathlete",
    "zh": "\u6b21/\u4e9e\u904b\u52d5\u54e1",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "superathlete",
    "zh": "\u8d85\u7d1a\u904b\u52d5\u54e1",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "unstadium",
    "zh": "\u4e0d\u9ad4\u80b2\u5834",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "restadium",
    "zh": "\u91cd\u65b0\u9ad4\u80b2\u5834",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "prestadium",
    "zh": "\u9810\u5148\u9ad4\u80b2\u5834",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "poststadium",
    "zh": "\u5f8c\u9ad4\u80b2\u5834",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "overstadium",
    "zh": "\u904e\u5ea6\u9ad4\u80b2\u5834",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "understadium",
    "zh": "\u4e0d\u8db3\u9ad4\u80b2\u5834",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "substadium",
    "zh": "\u6b21/\u4e9e\u9ad4\u80b2\u5834",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "superstadium",
    "zh": "\u8d85\u7d1a\u9ad4\u80b2\u5834",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "unchampionship",
    "zh": "\u4e0d\u51a0\u8ecd\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "rechampionship",
    "zh": "\u91cd\u65b0\u51a0\u8ecd\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "prechampionship",
    "zh": "\u9810\u5148\u51a0\u8ecd\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "postchampionship",
    "zh": "\u5f8c\u51a0\u8ecd\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "overchampionship",
    "zh": "\u904e\u5ea6\u51a0\u8ecd\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "underchampionship",
    "zh": "\u4e0d\u8db3\u51a0\u8ecd\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "subchampionship",
    "zh": "\u6b21/\u4e9e\u51a0\u8ecd\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "superchampionship",
    "zh": "\u8d85\u7d1a\u51a0\u8ecd\u8cfd",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "unreferee",
    "zh": "\u4e0d\u88c1\u5224",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "rereferee",
    "zh": "\u91cd\u65b0\u88c1\u5224",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "prereferee",
    "zh": "\u9810\u5148\u88c1\u5224",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "postreferee",
    "zh": "\u5f8c\u88c1\u5224",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "overreferee",
    "zh": "\u904e\u5ea6\u88c1\u5224",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "underreferee",
    "zh": "\u4e0d\u8db3\u88c1\u5224",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "subreferee",
    "zh": "\u6b21/\u4e9e\u88c1\u5224",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "superreferee",
    "zh": "\u8d85\u7d1a\u88c1\u5224",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "uncoach",
    "zh": "\u4e0d\u6559\u7df4",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "recoach",
    "zh": "\u91cd\u65b0\u6559\u7df4",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "precoach",
    "zh": "\u9810\u5148\u6559\u7df4",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "postcoach",
    "zh": "\u5f8c\u6559\u7df4",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "overcoach",
    "zh": "\u904e\u5ea6\u6559\u7df4",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "undercoach",
    "zh": "\u4e0d\u8db3\u6559\u7df4",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "subcoach",
    "zh": "\u6b21/\u4e9e\u6559\u7df4",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "supercoach",
    "zh": "\u8d85\u7d1a\u6559\u7df4",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "undefense",
    "zh": "\u4e0d\u9632\u5b88",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "redefense",
    "zh": "\u91cd\u65b0\u9632\u5b88",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "predefense",
    "zh": "\u9810\u5148\u9632\u5b88",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "postdefense",
    "zh": "\u5f8c\u9632\u5b88",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "overdefense",
    "zh": "\u904e\u5ea6\u9632\u5b88",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "underdefense",
    "zh": "\u4e0d\u8db3\u9632\u5b88",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "subdefense",
    "zh": "\u6b21/\u4e9e\u9632\u5b88",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "superdefense",
    "zh": "\u8d85\u7d1a\u9632\u5b88",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "unoffense",
    "zh": "\u4e0d\u9032\u653b",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "reoffense",
    "zh": "\u91cd\u65b0\u9032\u653b",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "preoffense",
    "zh": "\u9810\u5148\u9032\u653b",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "postoffense",
    "zh": "\u5f8c\u9032\u653b",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "overoffense",
    "zh": "\u904e\u5ea6\u9032\u653b",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "underoffense",
    "zh": "\u4e0d\u8db3\u9032\u653b",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "suboffense",
    "zh": "\u6b21/\u4e9e\u9032\u653b",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "superoffense",
    "zh": "\u8d85\u7d1a\u9032\u653b",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "unpenalty",
    "zh": "\u4e0d\u7f70\u5247",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "repenalty",
    "zh": "\u91cd\u65b0\u7f70\u5247",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "prepenalty",
    "zh": "\u9810\u5148\u7f70\u5247",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "postpenalty",
    "zh": "\u5f8c\u7f70\u5247",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "overpenalty",
    "zh": "\u904e\u5ea6\u7f70\u5247",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "underpenalty",
    "zh": "\u4e0d\u8db3\u7f70\u5247",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "subpenalty",
    "zh": "\u6b21/\u4e9e\u7f70\u5247",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "superpenalty",
    "zh": "\u8d85\u7d1a\u7f70\u5247",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "untackle",
    "zh": "\u4e0d\u64d2\u62b1/\u6284\u622a",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "retackle",
    "zh": "\u91cd\u65b0\u64d2\u62b1/\u6284\u622a",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "pretackle",
    "zh": "\u9810\u5148\u64d2\u62b1/\u6284\u622a",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "posttackle",
    "zh": "\u5f8c\u64d2\u62b1/\u6284\u622a",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "overtackle",
    "zh": "\u904e\u5ea6\u64d2\u62b1/\u6284\u622a",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "undertackle",
    "zh": "\u4e0d\u8db3\u64d2\u62b1/\u6284\u622a",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "subtackle",
    "zh": "\u6b21/\u4e9e\u64d2\u62b1/\u6284\u622a",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "supertackle",
    "zh": "\u8d85\u7d1a\u64d2\u62b1/\u6284\u622a",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "undiscount",
    "zh": "\u4e0d\u6298\u6263",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "rediscount",
    "zh": "\u91cd\u65b0\u6298\u6263",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "prediscount",
    "zh": "\u9810\u5148\u6298\u6263",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "postdiscount",
    "zh": "\u5f8c\u6298\u6263",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "overdiscount",
    "zh": "\u904e\u5ea6\u6298\u6263",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "underdiscount",
    "zh": "\u4e0d\u8db3\u6298\u6263",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "subdiscount",
    "zh": "\u6b21/\u4e9e\u6298\u6263",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "superdiscount",
    "zh": "\u8d85\u7d1a\u6298\u6263",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "unreceipt",
    "zh": "\u4e0d\u6536\u64da",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "rereceipt",
    "zh": "\u91cd\u65b0\u6536\u64da",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "prereceipt",
    "zh": "\u9810\u5148\u6536\u64da",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "postreceipt",
    "zh": "\u5f8c\u6536\u64da",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "overreceipt",
    "zh": "\u904e\u5ea6\u6536\u64da",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "underreceipt",
    "zh": "\u4e0d\u8db3\u6536\u64da",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "subreceipt",
    "zh": "\u6b21/\u4e9e\u6536\u64da",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "superreceipt",
    "zh": "\u8d85\u7d1a\u6536\u64da",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "unrefund",
    "zh": "\u4e0d\u9000\u6b3e",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "rerefund",
    "zh": "\u91cd\u65b0\u9000\u6b3e",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "prerefund",
    "zh": "\u9810\u5148\u9000\u6b3e",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "postrefund",
    "zh": "\u5f8c\u9000\u6b3e",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "overrefund",
    "zh": "\u904e\u5ea6\u9000\u6b3e",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "underrefund",
    "zh": "\u4e0d\u8db3\u9000\u6b3e",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "subrefund",
    "zh": "\u6b21/\u4e9e\u9000\u6b3e",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "superrefund",
    "zh": "\u8d85\u7d1a\u9000\u6b3e",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "uncashier",
    "zh": "\u4e0d\u6536\u9280\u54e1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "recashier",
    "zh": "\u91cd\u65b0\u6536\u9280\u54e1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "precashier",
    "zh": "\u9810\u5148\u6536\u9280\u54e1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "postcashier",
    "zh": "\u5f8c\u6536\u9280\u54e1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "overcashier",
    "zh": "\u904e\u5ea6\u6536\u9280\u54e1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "undercashier",
    "zh": "\u4e0d\u8db3\u6536\u9280\u54e1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "subcashier",
    "zh": "\u6b21/\u4e9e\u6536\u9280\u54e1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "supercashier",
    "zh": "\u8d85\u7d1a\u6536\u9280\u54e1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "uncart",
    "zh": "\u4e0d\u8cfc\u7269\u8eca",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "recart",
    "zh": "\u91cd\u65b0\u8cfc\u7269\u8eca",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "precart",
    "zh": "\u9810\u5148\u8cfc\u7269\u8eca",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "postcart",
    "zh": "\u5f8c\u8cfc\u7269\u8eca",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "overcart",
    "zh": "\u904e\u5ea6\u8cfc\u7269\u8eca",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "undercart",
    "zh": "\u4e0d\u8db3\u8cfc\u7269\u8eca",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "subcart",
    "zh": "\u6b21/\u4e9e\u8cfc\u7269\u8eca",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "supercart",
    "zh": "\u8d85\u7d1a\u8cfc\u7269\u8eca",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "unaisle",
    "zh": "\u4e0d\u8d70\u9053",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "reaisle",
    "zh": "\u91cd\u65b0\u8d70\u9053",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "preaisle",
    "zh": "\u9810\u5148\u8d70\u9053",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "postaisle",
    "zh": "\u5f8c\u8d70\u9053",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "overaisle",
    "zh": "\u904e\u5ea6\u8d70\u9053",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "underaisle",
    "zh": "\u4e0d\u8db3\u8d70\u9053",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "subaisle",
    "zh": "\u6b21/\u4e9e\u8d70\u9053",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "superaisle",
    "zh": "\u8d85\u7d1a\u8d70\u9053",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "unbargain",
    "zh": "\u4e0d\u7279\u50f9\u54c1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "rebargain",
    "zh": "\u91cd\u65b0\u7279\u50f9\u54c1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "prebargain",
    "zh": "\u9810\u5148\u7279\u50f9\u54c1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "postbargain",
    "zh": "\u5f8c\u7279\u50f9\u54c1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "overbargain",
    "zh": "\u904e\u5ea6\u7279\u50f9\u54c1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "underbargain",
    "zh": "\u4e0d\u8db3\u7279\u50f9\u54c1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "subbargain",
    "zh": "\u6b21/\u4e9e\u7279\u50f9\u54c1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "superbargain",
    "zh": "\u8d85\u7d1a\u7279\u50f9\u54c1",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "unvoucher",
    "zh": "\u4e0d\u6298\u50f9\u5238",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "revoucher",
    "zh": "\u91cd\u65b0\u6298\u50f9\u5238",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "prevoucher",
    "zh": "\u9810\u5148\u6298\u50f9\u5238",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "postvoucher",
    "zh": "\u5f8c\u6298\u50f9\u5238",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "overvoucher",
    "zh": "\u904e\u5ea6\u6298\u50f9\u5238",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "undervoucher",
    "zh": "\u4e0d\u8db3\u6298\u50f9\u5238",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "subvoucher",
    "zh": "\u6b21/\u4e9e\u6298\u50f9\u5238",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "supervoucher",
    "zh": "\u8d85\u7d1a\u6298\u50f9\u5238",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "unwarranty",
    "zh": "\u4e0d\u4fdd\u56fa",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "rewarranty",
    "zh": "\u91cd\u65b0\u4fdd\u56fa",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "prewarranty",
    "zh": "\u9810\u5148\u4fdd\u56fa",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "postwarranty",
    "zh": "\u5f8c\u4fdd\u56fa",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "overwarranty",
    "zh": "\u904e\u5ea6\u4fdd\u56fa",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "underwarranty",
    "zh": "\u4e0d\u8db3\u4fdd\u56fa",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "subwarranty",
    "zh": "\u6b21/\u4e9e\u4fdd\u56fa",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "superwarranty",
    "zh": "\u8d85\u7d1a\u4fdd\u56fa",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "uninventory",
    "zh": "\u4e0d\u5eab\u5b58",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "reinventory",
    "zh": "\u91cd\u65b0\u5eab\u5b58",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "preinventory",
    "zh": "\u9810\u5148\u5eab\u5b58",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "postinventory",
    "zh": "\u5f8c\u5eab\u5b58",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "overinventory",
    "zh": "\u904e\u5ea6\u5eab\u5b58",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "underinventory",
    "zh": "\u4e0d\u8db3\u5eab\u5b58",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "subinventory",
    "zh": "\u6b21/\u4e9e\u5eab\u5b58",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "superinventory",
    "zh": "\u8d85\u7d1a\u5eab\u5b58",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "accommodate",
    "zh": "\u5bb9\u7d0d\uff1b\u63d0\u4f9b\u4f4f\u5bbf",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "accomplish",
    "zh": "\u5b8c\u6210\uff1b\u5be6\u73fe",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "agenda",
    "zh": "\u8b70\u7a0b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "allocate",
    "zh": "\u5206\u914d\uff1b\u5206\u6d3e",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "alternative",
    "zh": "\u66ff\u4ee3\u65b9\u6848",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "amend",
    "zh": "\u4fee\u6539\uff1b\u4fee\u8a02",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "anonymous",
    "zh": "\u533f\u540d\u7684",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "anticipate",
    "zh": "\u9810\u671f\uff1b\u671f\u671b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "appraise",
    "zh": "\u8a55\u4f30\uff1b\u8a55\u50f9",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "asset",
    "zh": "\u8cc7\u7522",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "assign",
    "zh": "\u6307\u6d3e",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "authorize",
    "zh": "\u6388\u6b0a\uff1b\u6279\u51c6",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "bankruptcy",
    "zh": "\u7834\u7522",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "benchmark",
    "zh": "\u57fa\u6e96\uff1b\u6c34\u6e96\u9ede",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "bid",
    "zh": "\u51fa\u50f9\uff1b\u6295\u6a19",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "candidate",
    "zh": "\u5019\u9078\u4eba",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "capacity",
    "zh": "\u5bb9\u91cf\uff1b\u80fd\u529b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "certificate",
    "zh": "\u8b49\u66f8",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "collaborate",
    "zh": "\u5408\u4f5c",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "commute",
    "zh": "\u901a\u52e4",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "compensate",
    "zh": "\u88dc\u511f\uff1b\u8ce0\u511f",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "complimentary",
    "zh": "\u514d\u8cbb\u7684\uff1b\u8d08\u9001\u7684",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "comprehensive",
    "zh": "\u5168\u9762\u7684\uff1b\u8a73\u76e1\u7684",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "compromise",
    "zh": "\u59a5\u5354\uff1b\u6298\u8877",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "confidential",
    "zh": "\u6a5f\u5bc6\u7684",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "consecutive",
    "zh": "\u9023\u7e8c\u7684",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "consensus",
    "zh": "\u5171\u8b58",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "coordinate",
    "zh": "\u5354\u8abf",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "corporate",
    "zh": "\u516c\u53f8\u7684\uff1b\u4f01\u696d\u7684",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "crucial",
    "zh": "\u95dc\u9375\u7684\uff1b\u91cd\u8981\u7684",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "deadline",
    "zh": "\u622a\u6b62\u65e5\u671f",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "deficit",
    "zh": "\u8d64\u5b57\uff1b\u8667\u640d",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "delegate",
    "zh": "\u59d4\u6d3e\uff1b\u4ee3\u8868",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "demonstrate",
    "zh": "\u793a\u7bc4\uff1b\u8b49\u660e",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "deteriorate",
    "zh": "\u60e1\u5316",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "discrepancy",
    "zh": "\u5dee\u7570\uff1b\u4e0d\u4e00\u81f4",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "dispatch",
    "zh": "\u6d3e\u9063\uff1b\u767c\u9001",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "distribute",
    "zh": "\u5206\u767c\uff1b\u5206\u914d",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "drastically",
    "zh": "\u5927\u5e45\u5730\uff1b\u5fb9\u5e95\u5730",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "eligible",
    "zh": "\u6709\u8cc7\u683c\u7684",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "abundant",
    "zh": "\u8c50\u5bcc\u7684\uff1b\u5145\u88d5\u7684",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "acquire",
    "zh": "\u7372\u5f97\uff1b\u53d6\u5f97",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "adapt",
    "zh": "\u9069\u61c9",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "adequate",
    "zh": "\u8db3\u5920\u7684\uff1b\u9069\u7576\u7684",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "advocate",
    "zh": "\u63d0\u5021\uff1b\u64c1\u8b77",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "alleviate",
    "zh": "\u6e1b\u8f15\uff1b\u7de9\u548c",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "ambiguous",
    "zh": "\u6a21\u7a1c\u5169\u53ef\u7684",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "analyze",
    "zh": "\u5206\u6790",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "approach",
    "zh": "\u65b9\u6cd5\uff1b\u63a5\u8fd1",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "assess",
    "zh": "\u8a55\u4f30",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "assume",
    "zh": "\u5047\u8a2d\uff1b\u8a8d\u70ba",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "attain",
    "zh": "\u9054\u5230\uff1b\u7372\u5f97",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "beneficial",
    "zh": "\u6709\u76ca\u7684",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "capable",
    "zh": "\u6709\u80fd\u529b\u7684",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "clarify",
    "zh": "\u6f84\u6e05\uff1b\u8aaa\u660e",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "coherent",
    "zh": "\u9023\u8cab\u7684\uff1b\u6709\u689d\u7406\u7684",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "coincide",
    "zh": "\u540c\u6642\u767c\u751f\uff1b\u5de7\u5408",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "collapse",
    "zh": "\u5012\u584c\uff1b\u5d29\u6f70",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "commence",
    "zh": "\u958b\u59cb",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "compatible",
    "zh": "\u76f8\u5bb9\u7684\uff1b\u5408\u5f97\u4f86\u7684",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "compile",
    "zh": "\u7de8\u8b6f\uff1b\u6536\u96c6",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "conceive",
    "zh": "\u69cb\u601d\uff1b\u60f3\u50cf",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "conclude",
    "zh": "\u5f97\u51fa\u7d50\u8ad6\uff1b\u7d50\u675f",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "conduct",
    "zh": "\u57f7\u884c\uff1b\u9032\u884c",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "confine",
    "zh": "\u9650\u5236\uff1b\u4fb7\u9650",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "conflict",
    "zh": "\u885d\u7a81\uff1b\u77db\u76fe",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "consequence",
    "zh": "\u5f8c\u679c\uff1b\u7d50\u679c",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "consistent",
    "zh": "\u4e00\u81f4\u7684",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "constitute",
    "zh": "\u69cb\u6210\uff1b\u7d44\u6210",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "consume",
    "zh": "\u6d88\u8017\uff1b\u6d88\u8cbb",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "attachment",
    "zh": "\u9644\u4ef6",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "briefing",
    "zh": "\u7c21\u5831",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "brainstorm",
    "zh": "\u8166\u529b\u6fc0\u76ea",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "clarification",
    "zh": "\u6f84\u6e05",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "colleague",
    "zh": "\u540c\u4e8b",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "feedback",
    "zh": "\u56de\u994b",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "follow-up",
    "zh": "\u5f8c\u7e8c\u8ffd\u8e64",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "guideline",
    "zh": "\u6307\u5357\uff1b\u6e96\u5247",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "implement",
    "zh": "\u5be6\u65bd\uff1b\u57f7\u884c",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "initiative",
    "zh": "\u4e3b\u52d5\u6027\uff1b\u5021\u8b70",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "inquiry",
    "zh": "\u8a62\u554f",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "milestone",
    "zh": "\u91cc\u7a0b\u7891",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "negotiate",
    "zh": "\u8ac7\u5224\uff1b\u5354\u5546",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "objective",
    "zh": "\u76ee\u6a19",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "onboard",
    "zh": "\u4f7f\u5165\u8077",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "overview",
    "zh": "\u6982\u8ff0",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "pending",
    "zh": "\u5f85\u8655\u7406\u7684",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "prioritize",
    "zh": "\u512a\u5148\u8655\u7406",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "proposal",
    "zh": "\u63d0\u6848",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "recruit",
    "zh": "\u62db\u52df",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "reschedule",
    "zh": "\u91cd\u65b0\u5b89\u6392",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "strategy",
    "zh": "\u7b56\u7565",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "supervisor",
    "zh": "\u4e3b\u7ba1",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "update",
    "zh": "\u66f4\u65b0\u9032\u5ea6",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "workload",
    "zh": "\u5de5\u4f5c\u91cf",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "awesome",
    "zh": "\u592a\u68d2\u4e86",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "bother",
    "zh": "\u6253\u64fe",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "cancel",
    "zh": "\u53d6\u6d88",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "casual",
    "zh": "\u4f11\u9592\u7684\uff1b\u96a8\u4fbf\u7684",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "chat",
    "zh": "\u804a\u5929",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "chill",
    "zh": "\u653e\u9b06",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "crazy",
    "zh": "\u760b\u72c2\u7684",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "definitely",
    "zh": "\u7d55\u5c0d\uff1b\u7576\u7136",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "exactly",
    "zh": "\u5b8c\u5168\u6b63\u78ba",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "exhausted",
    "zh": "\u7b4b\u75b2\u529b\u76e1\u7684",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "figure",
    "zh": "\u60f3\u51fa\uff1b\u7406\u89e3",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "hang",
    "zh": "\u9592\u6643\uff1b\u7b49\u5f85",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "hilarious",
    "zh": "\u6975\u597d\u7b11\u7684",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "kidding",
    "zh": "\u958b\u73a9\u7b11",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "literally",
    "zh": "\u4e0d\u8a87\u5f35\u5730\uff1b\u5b57\u9762\u4e0a\u5730",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "obvious",
    "zh": "\u660e\u986f\u7684",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "probably",
    "zh": "\u5927\u6982\uff1b\u53ef\u80fd",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "recommend",
    "zh": "\u63a8\u85a6",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "ridiculous",
    "zh": "\u8352\u8b2c\u7684",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "weird",
    "zh": "\u5947\u602a\u7684",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  }
,
  // \u591a\u76ca\u5fc5\u8003 (40)
  { en: "accommodate", zh: "\u5bb9\u7d0d\uff1b\u63d0\u4f9b\u4f4f\u5bbf", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "accomplish", zh: "\u5b8c\u6210\uff1b\u5be6\u73fe", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "agenda", zh: "\u8b70\u7a0b", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "allocate", zh: "\u5206\u914d\uff1b\u5206\u6d3e", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "alternative", zh: "\u66ff\u4ee3\u65b9\u6848", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "amend", zh: "\u4fee\u6539\uff1b\u4fee\u8a02", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "anonymous", zh: "\u533f\u540d\u7684", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "anticipate", zh: "\u9810\u671f\uff1b\u671f\u671b", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "appraise", zh: "\u8a55\u4f30\uff1b\u8a55\u50f9", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "asset", zh: "\u8cc7\u7522", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "assign", zh: "\u6307\u6d3e", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "authorize", zh: "\u6388\u6b0a\uff1b\u6279\u51c6", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "bankruptcy", zh: "\u7834\u7522", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "benchmark", zh: "\u57fa\u6e96\uff1b\u6c34\u6e96\u9ede", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "bid", zh: "\u51fa\u50f9\uff1b\u6295\u6a19", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "candidate", zh: "\u5019\u9078\u4eba", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "capacity", zh: "\u5bb9\u91cf\uff1b\u80fd\u529b", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "certificate", zh: "\u8b49\u66f8", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "collaborate", zh: "\u5408\u4f5c", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "commute", zh: "\u901a\u52e4", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "compensate", zh: "\u88dc\u511f\uff1b\u8ce0\u511f", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "complimentary", zh: "\u514d\u8cbb\u7684\uff1b\u8d08\u9001\u7684", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "comprehensive", zh: "\u5168\u9762\u7684\uff1b\u8a73\u76e1\u7684", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "compromise", zh: "\u59a5\u5354\uff1b\u6298\u8877", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "confidential", zh: "\u6a5f\u5bc6\u7684", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "consecutive", zh: "\u9023\u7e8c\u7684", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "consensus", zh: "\u5171\u8b58", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "coordinate", zh: "\u5354\u8abf", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "corporate", zh: "\u516c\u53f8\u7684\uff1b\u4f01\u696d\u7684", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "crucial", zh: "\u95dc\u9375\u7684\uff1b\u91cd\u8981\u7684", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "deadline", zh: "\u622a\u6b62\u65e5\u671f", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "deficit", zh: "\u8d64\u5b57\uff1b\u8667\u640d", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "delegate", zh: "\u59d4\u6d3e\uff1b\u4ee3\u8868", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "demonstrate", zh: "\u793a\u7bc4\uff1b\u8b49\u660e", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "deteriorate", zh: "\u60e1\u5316", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "discrepancy", zh: "\u5dee\u7570\uff1b\u4e0d\u4e00\u81f4", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "dispatch", zh: "\u6d3e\u9063\uff1b\u767c\u9001", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "distribute", zh: "\u5206\u767c\uff1b\u5206\u914d", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "drastically", zh: "\u5927\u5e45\u5730\uff1b\u5fb9\u5e95\u5730", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "eligible", zh: "\u6709\u8cc7\u683c\u7684", cat: "\u591a\u76ca\u5fc5\u8003" },
  // \u96c5\u601d\u5e38\u898b (30)
  { en: "abundant", zh: "\u8c50\u5bcc\u7684\uff1b\u5145\u88d5\u7684", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "acquire", zh: "\u7372\u5f97\uff1b\u53d6\u5f97", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "adapt", zh: "\u9069\u61c9", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "adequate", zh: "\u8db3\u5920\u7684\uff1b\u9069\u7576\u7684", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "advocate", zh: "\u63d0\u5021\uff1b\u64c1\u8b77", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "alleviate", zh: "\u6e1b\u8f15\uff1b\u7de9\u548c", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "ambiguous", zh: "\u6a21\u7a1c\u5169\u53ef\u7684", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "analyze", zh: "\u5206\u6790", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "approach", zh: "\u65b9\u6cd5\uff1b\u63a5\u8fd1", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "assess", zh: "\u8a55\u4f30", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "assume", zh: "\u5047\u8a2d\uff1b\u8a8d\u70ba", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "attain", zh: "\u9054\u5230\uff1b\u7372\u5f97", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "beneficial", zh: "\u6709\u76ca\u7684", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "capable", zh: "\u6709\u80fd\u529b\u7684", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "clarify", zh: "\u6f84\u6e05\uff1b\u8aaa\u660e", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "coherent", zh: "\u9023\u8cab\u7684\uff1b\u6709\u689d\u7406\u7684", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "coincide", zh: "\u540c\u6642\u767c\u751f\uff1b\u5de7\u5408", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "collapse", zh: "\u5012\u584c\uff1b\u5d29\u6f70", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "commence", zh: "\u958b\u59cb", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "compatible", zh: "\u76f8\u5bb9\u7684\uff1b\u5408\u5f97\u4f86\u7684", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "compile", zh: "\u7de8\u8b6f\uff1b\u6536\u96c6", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "conceive", zh: "\u69cb\u601d\uff1b\u60f3\u50cf", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "conclude", zh: "\u5f97\u51fa\u7d50\u8ad6\uff1b\u7d50\u675f", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "conduct", zh: "\u57f7\u884c\uff1b\u9032\u884c", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "confine", zh: "\u9650\u5236\uff1b\u4fb7\u9650", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "conflict", zh: "\u885d\u7a81\uff1b\u77db\u76fe", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "consequence", zh: "\u5f8c\u679c\uff1b\u7d50\u679c", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "consistent", zh: "\u4e00\u81f4\u7684", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "constitute", zh: "\u69cb\u6210\uff1b\u7d44\u6210", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "consume", zh: "\u6d88\u8017\uff1b\u6d88\u8cbb", cat: "\u96c5\u601d\u5e38\u898b" },
  // \u8077\u5834\u6e9d\u901a (25)
  { en: "attachment", zh: "\u9644\u4ef6", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "briefing", zh: "\u7c21\u5831", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "brainstorm", zh: "\u8166\u529b\u6fc0\u76ea", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "clarification", zh: "\u6f84\u6e05", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "colleague", zh: "\u540c\u4e8b", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "feedback", zh: "\u56de\u994b", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "follow-up", zh: "\u5f8c\u7e8c\u8ffd\u8e64", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "guideline", zh: "\u6307\u5357\uff1b\u6e96\u5247", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "implement", zh: "\u5be6\u65bd\uff1b\u57f7\u884c", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "initiative", zh: "\u4e3b\u52d5\u6027\uff1b\u5021\u8b70", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "inquiry", zh: "\u8a62\u554f", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "milestone", zh: "\u91cc\u7a0b\u7891", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "negotiate", zh: "\u8ac7\u5224\uff1b\u5354\u5546", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "objective", zh: "\u76ee\u6a19", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "onboard", zh: "\u4f7f\u5165\u8077", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "overview", zh: "\u6982\u8ff0", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "pending", zh: "\u5f85\u8655\u7406\u7684", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "prioritize", zh: "\u512a\u5148\u8655\u7406", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "proposal", zh: "\u63d0\u6848", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "recruit", zh: "\u62db\u52df", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "reschedule", zh: "\u91cd\u65b0\u5b89\u6392", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "strategy", zh: "\u7b56\u7565", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "supervisor", zh: "\u4e3b\u7ba1", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "update", zh: "\u66f4\u65b0\u9032\u5ea6", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "workload", zh: "\u5de5\u4f5c\u91cf", cat: "\u8077\u5834\u6e9d\u901a" },
  // \u65e5\u5e38\u5c0d\u8a71 (20)
  { en: "awesome", zh: "\u592a\u68d2\u4e86", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "bother", zh: "\u6253\u64fe", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "cancel", zh: "\u53d6\u6d88", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "casual", zh: "\u4f11\u9592\u7684\uff1b\u96a8\u4fbf\u7684", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "chat", zh: "\u804a\u5929", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "chill", zh: "\u653e\u9b06", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "crazy", zh: "\u760b\u72c2\u7684", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "definitely", zh: "\u7d55\u5c0d\uff1b\u7576\u7136", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "exactly", zh: "\u5b8c\u5168\u6b63\u78ba", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "exhausted", zh: "\u7b4b\u75b2\u529b\u76e1\u7684", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "figure", zh: "\u60f3\u51fa\uff1b\u7406\u89e3", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "hang", zh: "\u9592\u6643\uff1b\u7b49\u5f85", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "hilarious", zh: "\u6975\u597d\u7b11\u7684", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "kidding", zh: "\u958b\u73a9\u7b11", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "literally", zh: "\u4e0d\u8a87\u5f35\u5730\uff1b\u5b57\u9762\u4e0a\u5730", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "obvious", zh: "\u660e\u986f\u7684", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "probably", zh: "\u5927\u6982\uff1b\u53ef\u80fd", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "recommend", zh: "\u63a8\u85a6", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "ridiculous", zh: "\u8352\u8b2c\u7684", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "weird", zh: "\u5947\u602a\u7684", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  {"en": "applicant", "zh": "申請人", "cat": "面試"},
  {"en": "qualification", "zh": "資格", "cat": "面試"},
  {"en": "strengths", "zh": "優點", "cat": "面試"},
  {"en": "weaknesses", "zh": "缺點", "cat": "面試"},
  {"en": "experience", "zh": "經驗", "cat": "面試"},
  {"en": "portfolio", "zh": "作品集", "cat": "面試"},
  {"en": "references", "zh": "推薦人", "cat": "面試"},
  {"en": "background", "zh": "背景", "cat": "面試"},
  {"en": "hire", "zh": "雇用", "cat": "面試"},
  {"en": "vacancy", "zh": "空缺", "cat": "面試"},
  {"en": "assessment", "zh": "評估", "cat": "面試"},
  {"en": "competence", "zh": "能力", "cat": "面試"},
  {"en": "recruit", "zh": "招募", "cat": "面試"},
  {"en": "headhunter", "zh": "獵頭", "cat": "面試"},
  {"en": "onboarding", "zh": "入職", "cat": "面試"},
  {"en": "evaluation", "zh": "考核", "cat": "面試"},
  {"en": "expectation", "zh": "期望", "cat": "面試"},
  {"en": "potential", "zh": "潛力", "cat": "面試"},
  {"en": "shortlist", "zh": "候選名單", "cat": "面試"},
  {"en": "screening", "zh": "篩選", "cat": "面試"},
  {"en": "probation", "zh": "試用期", "cat": "面試"},
  {"en": "promotion", "zh": "晉升", "cat": "面試"},
  {"en": "salary", "zh": "薪水", "cat": "面試"},
  {"en": "compensation", "zh": "報酬", "cat": "面試"},
  {"en": "benefits", "zh": "福利", "cat": "面試"},
  {"en": "turnover", "zh": "流動率", "cat": "面試"},
  {"en": "appraisal", "zh": "績效評估", "cat": "面試"},
  {"en": "panel", "zh": "面試小組", "cat": "面試"},
  {"en": "aptitude", "zh": "資質", "cat": "面試"},
  {"en": "credential", "zh": "證書", "cat": "面試"},
  {"en": "agenda", "zh": "議程", "cat": "開會"},
  {"en": "minutes", "zh": "會議紀錄", "cat": "開會"},
  {"en": "chairperson", "zh": "主席", "cat": "開會"},
  {"en": "attendee", "zh": "出席者", "cat": "開會"},
  {"en": "consensus", "zh": "共識", "cat": "開會"},
  {"en": "motion", "zh": "動議", "cat": "開會"},
  {"en": "adjourn", "zh": "休會", "cat": "開會"},
  {"en": "brainstorm", "zh": "腦力激盪", "cat": "開會"},
  {"en": "facilitate", "zh": "促進", "cat": "開會"},
  {"en": "venue", "zh": "場地", "cat": "開會"},
  {"en": "whiteboard", "zh": "白板", "cat": "開會"},
  {"en": "projector", "zh": "投影機", "cat": "開會"},
  {"en": "handout", "zh": "講義", "cat": "開會"},
  {"en": "bulletin", "zh": "公報", "cat": "開會"},
  {"en": "briefing", "zh": "簡報", "cat": "開會"},
  {"en": "update", "zh": "更新", "cat": "開會"},
  {"en": "feedback", "zh": "回饋", "cat": "開會"},
  {"en": "overview", "zh": "概覽", "cat": "開會"},
  {"en": "milestone", "zh": "裡程碑", "cat": "開會"},
  {"en": "deliverable", "zh": "交付成果", "cat": "開會"},
  {"en": "objective", "zh": "目標", "cat": "開會"},
  {"en": "summary", "zh": "總結", "cat": "開會"},
  {"en": "actionable", "zh": "可執行的", "cat": "開會"},
  {"en": "timeline", "zh": "時間表", "cat": "開會"},
  {"en": "quorum", "zh": "法定人數", "cat": "開會"},
  {"en": "proxy", "zh": "代理人", "cat": "開會"},
  {"en": "postpone", "zh": "延期", "cat": "開會"},
  {"en": "reschedule", "zh": "重新安排", "cat": "開會"},
  {"en": "cancel", "zh": "取消", "cat": "開會"},
  {"en": "convene", "zh": "召集", "cat": "開會"},
  {"en": "thesis", "zh": "論文", "cat": "學術"},
  {"en": "dissertation", "zh": "博士論文", "cat": "學術"},
  {"en": "hypothesis", "zh": "假設", "cat": "學術"},
  {"en": "journal", "zh": "期刊", "cat": "學術"},
  {"en": "peer", "zh": "同儕", "cat": "學術"},
  {"en": "review", "zh": "評論", "cat": "學術"},
  {"en": "publication", "zh": "出版物", "cat": "學術"},
  {"en": "scholarship", "zh": "獎學金", "cat": "學術"},
  {"en": "grant", "zh": "補助金", "cat": "學術"},
  {"en": "methodology", "zh": "方法論", "cat": "學術"},
  {"en": "abstract", "zh": "摘要", "cat": "學術"},
  {"en": "citation", "zh": "引用", "cat": "學術"},
  {"en": "bibliography", "zh": "參考書目", "cat": "學術"},
  {"en": "plagiarism", "zh": "抄襲", "cat": "學術"},
  {"en": "faculty", "zh": "教職員", "cat": "學術"},
  {"en": "curriculum", "zh": "課程", "cat": "學術"},
  {"en": "syllabus", "zh": "教學大綱", "cat": "學術"},
  {"en": "lecture", "zh": "講授", "cat": "學術"},
  {"en": "seminar", "zh": "研討會", "cat": "學術"},
  {"en": "tutorial", "zh": "輔導課", "cat": "學術"},
  {"en": "campus", "zh": "校園", "cat": "學術"},
  {"en": "alumni", "zh": "校友", "cat": "學術"},
  {"en": "tuition", "zh": "學費", "cat": "學術"},
  {"en": "enrollment", "zh": "註冊", "cat": "學術"},
  {"en": "major", "zh": "主修", "cat": "學術"},
  {"en": "minor", "zh": "輔修", "cat": "學術"},
  {"en": "credit", "zh": "學分", "cat": "學術"},
  {"en": "transcript", "zh": "成績單", "cat": "學術"},
  {"en": "diploma", "zh": "文憑", "cat": "學術"},
  {"en": "degree", "zh": "學位", "cat": "學術"},
  {"en": "party", "zh": "派對", "cat": "社交"},
  {"en": "gathering", "zh": "聚會", "cat": "社交"},
  {"en": "banquet", "zh": "宴會", "cat": "社交"},
  {"en": "reception", "zh": "招待會", "cat": "社交"},
  {"en": "toast", "zh": "敬酒", "cat": "社交"},
  {"en": "host", "zh": "主人", "cat": "社交"},
  {"en": "guest", "zh": "客人", "cat": "社交"},
  {"en": "invitation", "zh": "邀請", "cat": "社交"},
  {"en": "RSVP", "zh": "敬請賜覆", "cat": "社交"},
  {"en": "mingle", "zh": "交際", "cat": "社交"},
  {"en": "network", "zh": "建立人脈", "cat": "社交"},
  {"en": "acquaintance", "zh": "熟人", "cat": "社交"},
  {"en": "companion", "zh": "同伴", "cat": "社交"},
  {"en": "buddy", "zh": "夥伴", "cat": "社交"},
  {"en": "pal", "zh": "好友", "cat": "社交"},
  {"en": "mate", "zh": "朋友", "cat": "社交"},
  {"en": "introvert", "zh": "內向者", "cat": "社交"},
  {"en": "extrovert", "zh": "外向者", "cat": "社交"},
  {"en": "charisma", "zh": "魅力", "cat": "社交"},
  {"en": "charm", "zh": "吸引力", "cat": "社交"},
  {"en": "etiquette", "zh": "禮儀", "cat": "社交"},
  {"en": "courtesy", "zh": "禮貌", "cat": "社交"},
  {"en": "manner", "zh": "舉止", "cat": "社交"},
  {"en": "polite", "zh": "有禮貌的", "cat": "社交"},
  {"en": "rude", "zh": "粗魯的", "cat": "社交"},
  {"en": "awkward", "zh": "尷尬的", "cat": "社交"},
  {"en": "casual", "zh": "休閒的", "cat": "社交"},
  {"en": "formal", "zh": "正式的", "cat": "社交"},
  {"en": "dressy", "zh": "講究的", "cat": "社交"},
  {"en": "smart", "zh": "時髦的", "cat": "社交"}
  ],
  phrase: [
{"en": "submit a resume", "zh": "提交履歷", "cat": "多益必考"},
{"en": "schedule an interview", "zh": "安排面試", "cat": "多益必考"},
{"en": "sign a contract", "zh": "簽訂合約", "cat": "多益必考"},
{"en": "negotiate a deal", "zh": "談判交易", "cat": "多益必考"},
{"en": "generate revenue", "zh": "創造營收", "cat": "多益必考"},
{"en": "increase profit", "zh": "增加利潤", "cat": "多益必考"},
{"en": "allocate a budget", "zh": "分配預算", "cat": "多益必考"},
{"en": "propose a plan", "zh": "提出計畫", "cat": "多益必考"},
{"en": "meet a deadline", "zh": "趕上期限", "cat": "多益必考"},
{"en": "review a document", "zh": "審查文件", "cat": "多益必考"},
{"en": "attend a seminar", "zh": "參加研討會", "cat": "多益必考"},
{"en": "conduct a survey", "zh": "進行調查", "cat": "多益必考"},
{"en": "implement a policy", "zh": "實施政策", "cat": "多益必考"},
{"en": "evaluate performance", "zh": "評估績效", "cat": "多益必考"},
{"en": "promote a product", "zh": "推銷產品", "cat": "多益必考"},
{"en": "launch a campaign", "zh": "發起活動", "cat": "多益必考"},
{"en": "target an audience", "zh": "鎖定受眾", "cat": "多益必考"},
{"en": "analyze data", "zh": "分析數據", "cat": "多益必考"},
{"en": "solve a problem", "zh": "解決問題", "cat": "多益必考"},
{"en": "provide feedback", "zh": "提供回饋", "cat": "多益必考"},
{"en": "request a refund", "zh": "要求退款", "cat": "多益必考"},
{"en": "process an order", "zh": "處理訂單", "cat": "多益必考"},
{"en": "cancel a reservation", "zh": "取消預約", "cat": "多益必考"},
{"en": "confirm an appointment", "zh": "確認預約", "cat": "多益必考"},
{"en": "update a profile", "zh": "更新個人資料", "cat": "多益必考"},
{"en": "upgrade a system", "zh": "升級系統", "cat": "多益必考"},
{"en": "install a software", "zh": "安裝軟體", "cat": "多益必考"},
{"en": "troubleshoot an issue", "zh": "排除故障", "cat": "多益必考"},
{"en": "maintain equipment", "zh": "維護設備", "cat": "多益必考"},
{"en": "repair a machine", "zh": "修理機器", "cat": "多益必考"},
{"en": "hold a meeting", "zh": "開會", "cat": "商業"},
{"en": "reach an agreement", "zh": "達成協議", "cat": "商業"},
{"en": "expand the market", "zh": "拓展市場", "cat": "商業"},
{"en": "boost sales", "zh": "提升銷售", "cat": "商業"},
{"en": "cut costs", "zh": "削減成本", "cat": "商業"},
{"en": "invest in stocks", "zh": "投資股票", "cat": "商業"},
{"en": "build a partnership", "zh": "建立合作關係", "cat": "商業"},
{"en": "serve a client", "zh": "服務客戶", "cat": "商業"},
{"en": "make a presentation", "zh": "做簡報", "cat": "商業"},
{"en": "meet the target", "zh": "達到目標", "cat": "商業"},
{"en": "develop a strategy", "zh": "製定策略", "cat": "商業"},
{"en": "conduct market research", "zh": "進行市場研究", "cat": "商業"},
{"en": "launch a startup", "zh": "創辦新創公司", "cat": "商業"},
{"en": "manage a team", "zh": "管理團隊", "cat": "商業"},
{"en": "hire an employee", "zh": "雇用員工", "cat": "商業"},
{"en": "fire a worker", "zh": "解雇工人", "cat": "商業"},
{"en": "promote a staff", "zh": "晉升員工", "cat": "商業"},
{"en": "train a newcomer", "zh": "培訓新人", "cat": "商業"},
{"en": "outsource a project", "zh": "外包專案", "cat": "商業"},
{"en": "merge with a company", "zh": "與公司合併", "cat": "商業"},
{"en": "acquire a business", "zh": "收購企業", "cat": "商業"},
{"en": "declare bankruptcy", "zh": "宣布破產", "cat": "商業"},
{"en": "pay off a debt", "zh": "還清債務", "cat": "商業"},
{"en": "apply for a loan", "zh": "申請貸款", "cat": "商業"},
{"en": "open an account", "zh": "開立帳戶", "cat": "商業"},
{"en": "transfer money", "zh": "轉帳", "cat": "商業"},
{"en": "withdraw cash", "zh": "提款", "cat": "商業"},
{"en": "deposit funds", "zh": "存款", "cat": "商業"},
{"en": "exchange currency", "zh": "兌換貨幣", "cat": "商業"},
{"en": "invest in real estate", "zh": "投資房地產", "cat": "商業"},
{"en": "book a flight", "zh": "訂機票", "cat": "旅遊"},
{"en": "pack baggage", "zh": "打包行李", "cat": "旅遊"},
{"en": "check a passport", "zh": "檢查護照", "cat": "旅遊"},
{"en": "reserve accommodation", "zh": "預訂住宿", "cat": "旅遊"},
{"en": "reach a destination", "zh": "抵達目的地", "cat": "旅遊"},
{"en": "plan an itinerary", "zh": "規劃行程", "cat": "旅遊"},
{"en": "guide a tourist", "zh": "引導遊客", "cat": "旅遊"},
{"en": "buy a souvenir", "zh": "買紀念品", "cat": "旅遊"},
{"en": "go through customs", "zh": "通過海關", "cat": "旅遊"},
{"en": "board a plane", "zh": "登機", "cat": "旅遊"},
{"en": "rent a car", "zh": "租車", "cat": "旅遊"},
{"en": "take a train", "zh": "搭火車", "cat": "旅遊"},
{"en": "ride a bus", "zh": "搭公車", "cat": "旅遊"},
{"en": "catch a ferry", "zh": "趕渡輪", "cat": "旅遊"},
{"en": "call a taxi", "zh": "叫計程車", "cat": "旅遊"},
{"en": "check in at a hotel", "zh": "在飯店辦理入住", "cat": "旅遊"},
{"en": "check out of a hotel", "zh": "辦理退房", "cat": "旅遊"},
{"en": "ask for directions", "zh": "問路", "cat": "旅遊"},
{"en": "look at a map", "zh": "看地圖", "cat": "旅遊"},
{"en": "take photos", "zh": "拍照", "cat": "旅遊"},
{"en": "try local food", "zh": "嘗試當地美食", "cat": "旅遊"},
{"en": "visit a museum", "zh": "參觀博物館", "cat": "旅遊"},
{"en": "explore a city", "zh": "探索城市", "cat": "旅遊"},
{"en": "relax on a beach", "zh": "在海灘放鬆", "cat": "旅遊"},
{"en": "hike in the mountains", "zh": "在山區健行", "cat": "旅遊"},
{"en": "buy a ticket", "zh": "買票", "cat": "旅遊"},
{"en": "wait in line", "zh": "排隊等候", "cat": "旅遊"},
{"en": "miss a flight", "zh": "錯過航班", "cat": "旅遊"},
{"en": "delay a trip", "zh": "延誤行程", "cat": "旅遊"},
{"en": "cancel a tour", "zh": "取消行程", "cat": "旅遊"},
{"en": "relieve a symptom", "zh": "緩解症狀", "cat": "醫療"},
{"en": "fill a prescription", "zh": "配藥", "cat": "醫療"},
{"en": "visit a pharmacy", "zh": "去藥局", "cat": "醫療"},
{"en": "perform a surgery", "zh": "進行手術", "cat": "醫療"},
{"en": "go to a clinic", "zh": "去診所", "cat": "醫療"},
{"en": "make a diagnosis", "zh": "做出診斷", "cat": "醫療"},
{"en": "receive a treatment", "zh": "接受治療", "cat": "醫療"},
{"en": "get a vaccine", "zh": "打疫苗", "cat": "醫療"},
{"en": "prevent an infection", "zh": "預防感染", "cat": "醫療"},
{"en": "call an emergency", "zh": "呼叫急診", "cat": "醫療"},
{"en": "see a doctor", "zh": "看醫生", "cat": "醫療"},
{"en": "take a pill", "zh": "吃藥丸", "cat": "醫療"},
{"en": "check blood pressure", "zh": "量血壓", "cat": "醫療"},
{"en": "draw blood", "zh": "抽血", "cat": "醫療"},
{"en": "take an x-ray", "zh": "照X光", "cat": "醫療"},
{"en": "stay in a hospital", "zh": "住院", "cat": "醫療"},
{"en": "recover from an illness", "zh": "從疾病中康復", "cat": "醫療"},
{"en": "cure a disease", "zh": "治癒疾病", "cat": "醫療"},
{"en": "suffer from a cold", "zh": "患感冒", "cat": "醫療"},
{"en": "feel dizzy", "zh": "感到頭暈", "cat": "醫療"},
{"en": "have a fever", "zh": "發燒", "cat": "醫療"},
{"en": "cough heavily", "zh": "劇烈咳嗽", "cat": "醫療"},
{"en": "sneeze frequently", "zh": "頻繁打噴嚏", "cat": "醫療"},
{"en": "feel nauseous", "zh": "感到噁心", "cat": "醫療"},
{"en": "have a headache", "zh": "頭痛", "cat": "醫療"},
{"en": "make an appointment", "zh": "預約掛號", "cat": "醫療"},
{"en": "cancel an appointment", "zh": "取消掛號", "cat": "醫療"},
{"en": "consult a specialist", "zh": "諮詢專科醫生", "cat": "醫療"},
{"en": "undergo a test", "zh": "接受檢查", "cat": "醫療"},
{"en": "wait for a result", "zh": "等待結果", "cat": "醫療"},
{"en": "buy grocery", "zh": "買雜貨", "cat": "日常生活"},
{"en": "do the laundry", "zh": "洗衣服", "cat": "日常生活"},
{"en": "commute to work", "zh": "通勤上班", "cat": "日常生活"},
{"en": "follow a recipe", "zh": "遵循食譜", "cat": "日常生活"},
{"en": "turn on an appliance", "zh": "打開家電", "cat": "日常生活"},
{"en": "assemble furniture", "zh": "組裝家具", "cat": "日常生活"},
{"en": "walk around the neighborhood", "zh": "在社區散步", "cat": "日常生活"},
{"en": "do a chore", "zh": "做家事", "cat": "日常生活"},
{"en": "form a habit", "zh": "養成習慣", "cat": "日常生活"},
{"en": "keep a routine", "zh": "保持作息", "cat": "日常生活"},
{"en": "wake up early", "zh": "早起", "cat": "日常生活"},
{"en": "make the bed", "zh": "整理床鋪", "cat": "日常生活"},
{"en": "brush teeth", "zh": "刷牙", "cat": "日常生活"},
{"en": "take a shower", "zh": "洗澡", "cat": "日常生活"},
{"en": "have breakfast", "zh": "吃早餐", "cat": "日常生活"},
{"en": "pack a lunch", "zh": "帶便當", "cat": "日常生活"},
{"en": "take out the trash", "zh": "倒垃圾", "cat": "日常生活"},
{"en": "wash the dishes", "zh": "洗碗", "cat": "日常生活"},
{"en": "sweep the floor", "zh": "掃地", "cat": "日常生活"},
{"en": "mop the floor", "zh": "拖地", "cat": "日常生活"},
{"en": "feed a pet", "zh": "餵寵物", "cat": "日常生活"},
{"en": "water the plants", "zh": "澆植物", "cat": "日常生活"},
{"en": "go for a walk", "zh": "去散步", "cat": "日常生活"},
{"en": "read a book", "zh": "看書", "cat": "日常生活"},
{"en": "watch television", "zh": "看電視", "cat": "日常生活"},
{"en": "listen to music", "zh": "聽音樂", "cat": "日常生活"},
{"en": "surf the internet", "zh": "上網", "cat": "日常生活"},
{"en": "chat with friends", "zh": "和朋友聊天", "cat": "日常生活"},
{"en": "go to bed", "zh": "上床睡覺", "cat": "日常生活"},
{"en": "set an alarm", "zh": "設定鬧鐘", "cat": "日常生活"},
{"en": "update a software", "zh": "更新軟體", "cat": "科技"},
{"en": "install hardware", "zh": "安裝硬體", "cat": "科技"},
{"en": "access a database", "zh": "存取資料庫", "cat": "科技"},
{"en": "connect to a network", "zh": "連線到網路", "cat": "科技"},
{"en": "design an algorithm", "zh": "設計演算法", "cat": "科技"},
{"en": "hire a developer", "zh": "雇用開發者", "cat": "科技"},
{"en": "develop an application", "zh": "開發應用程式", "cat": "科技"},
{"en": "maintain a server", "zh": "維護伺服器", "cat": "科技"},
{"en": "upload to the cloud", "zh": "上傳到雲端", "cat": "科技"},
{"en": "improve security", "zh": "改善安全", "cat": "科技"},
{"en": "write a code", "zh": "寫程式碼", "cat": "科技"},
{"en": "debug a program", "zh": "對程式除錯", "cat": "科技"},
{"en": "test a system", "zh": "測試系統", "cat": "科技"},
{"en": "deploy a project", "zh": "部署專案", "cat": "科技"},
{"en": "backup data", "zh": "備份資料", "cat": "科技"},
{"en": "format a drive", "zh": "格式化磁碟機", "cat": "科技"},
{"en": "reboot a computer", "zh": "重新開機", "cat": "科技"},
{"en": "click a link", "zh": "點擊連結", "cat": "科技"},
{"en": "download a file", "zh": "下載檔案", "cat": "科技"},
{"en": "compress a folder", "zh": "壓縮資料夾", "cat": "科技"},
{"en": "create an account", "zh": "建立帳號", "cat": "科技"},
{"en": "log in a website", "zh": "登入網站", "cat": "科技"},
{"en": "log out a system", "zh": "登出系統", "cat": "科技"},
{"en": "reset a password", "zh": "重設密碼", "cat": "科技"},
{"en": "scan for a virus", "zh": "掃描病毒", "cat": "科技"},
{"en": "block a user", "zh": "封鎖使用者", "cat": "科技"},
{"en": "delete a message", "zh": "刪除訊息", "cat": "科技"},
{"en": "share a post", "zh": "分享貼文", "cat": "科技"},
{"en": "browse a page", "zh": "瀏覽網頁", "cat": "科技"},
{"en": "search a keyword", "zh": "搜尋關鍵字", "cat": "科技"},
{"en": "chill out", "zh": "放鬆", "cat": "俚語"},
{"en": "flex on someone", "zh": "向某人炫耀", "cat": "俚語"},
{"en": "ghost someone", "zh": "神隱/不理某人", "cat": "俚語"},
{"en": "act salty", "zh": "惱羞成怒", "cat": "俚語"},
{"en": "look shady", "zh": "看起來可疑", "cat": "俚語"},
{"en": "be totally lit", "zh": "超讚", "cat": "俚語"},
{"en": "sound dope", "zh": "聽起來很酷", "cat": "俚語"},
{"en": "be the goat", "zh": "史上最棒", "cat": "俚語"},
{"en": "feel cringe", "zh": "感到尷尬", "cat": "俚語"},
{"en": "you bet", "zh": "沒問題/當然", "cat": "俚語"},
{"en": "hang out", "zh": "出去玩", "cat": "俚語"},
{"en": "spill the tea", "zh": "八卦", "cat": "俚語"},
{"en": "catch feelings", "zh": "動情", "cat": "俚語"},
{"en": "lowkey want", "zh": "暗自想要", "cat": "俚語"},
{"en": "highkey love", "zh": "高調喜愛", "cat": "俚語"},
{"en": "no cap", "zh": "不蓋你/真的", "cat": "俚語"},
{"en": "slay it", "zh": "表現出色", "cat": "俚語"},
{"en": "vibing with", "zh": "與...很合拍", "cat": "俚語"},
{"en": "simp for", "zh": "對...過度討好", "cat": "俚語"},
{"en": "snack on", "zh": "吃零食", "cat": "俚語"},
{"en": "bussin food", "zh": "超好吃的食物", "cat": "俚語"},
{"en": "sus person", "zh": "可疑的人", "cat": "俚語"},
{"en": "clout chaser", "zh": "愛蹭熱度的人", "cat": "俚語"},
{"en": "drip check", "zh": "穿搭檢查", "cat": "俚語"},
{"en": "big yikes", "zh": "大感不妙/糟糕", "cat": "俚語"},
{"en": "take the L", "zh": "認輸/承受失敗", "cat": "俚語"},
{"en": "bet on it", "zh": "包在我身上", "cat": "俚語"},
{"en": "hype up", "zh": "炒熱氣氛", "cat": "俚語"},
{"en": "squad goals", "zh": "死黨典範", "cat": "俚語"},
{"en": "throw shade", "zh": "暗諷", "cat": "俚語"},
{"en": "feel anxious", "zh": "感到焦慮", "cat": "情緒"},
{"en": "be thrilled", "zh": "非常興奮", "cat": "情緒"},
{"en": "get depressed", "zh": "變得沮喪", "cat": "情緒"},
{"en": "be grateful for", "zh": "對...感感激", "cat": "情緒"},
{"en": "feel frustrated", "zh": "感到挫折", "cat": "情緒"},
{"en": "feel overwhelmed", "zh": "感到不知所措", "cat": "情緒"},
{"en": "feel relieved", "zh": "感到鬆了一口氣", "cat": "情緒"},
{"en": "be jealous of", "zh": "嫉妒...", "cat": "情緒"},
{"en": "be furious at", "zh": "對...狂怒", "cat": "情緒"},
{"en": "be sympathetic", "zh": "有同情心", "cat": "情緒"},
{"en": "express anger", "zh": "表達憤怒", "cat": "情緒"},
{"en": "hide emotions", "zh": "隱藏情緒", "cat": "情緒"},
{"en": "control temper", "zh": "控製脾氣", "cat": "情緒"},
{"en": "burst into tears", "zh": "突然大哭", "cat": "情緒"},
{"en": "smile happily", "zh": "開心地笑", "cat": "情緒"},
{"en": "feel miserable", "zh": "感到悲慘", "cat": "情緒"},
{"en": "be terrified", "zh": "感到恐懼", "cat": "情緒"},
{"en": "feel embarrassed", "zh": "感到尷尬", "cat": "情緒"},
{"en": "be proud of", "zh": "為...感到驕傲", "cat": "情緒"},
{"en": "feel guilty", "zh": "感到內疚", "cat": "情緒"},
{"en": "cheer someone up", "zh": "使某人振作", "cat": "情緒"},
{"en": "calm down", "zh": "冷靜下來", "cat": "情緒"},
{"en": "freak out", "zh": "嚇壞了/崩潰", "cat": "情緒"},
{"en": "lose patience", "zh": "失去耐心", "cat": "情緒"},
{"en": "stay positive", "zh": "保持正面", "cat": "情緒"},
{"en": "feel lonely", "zh": "感到孤單", "cat": "情緒"},
{"en": "be surprised", "zh": "感到驚訝", "cat": "情緒"},
{"en": "feel disappointed", "zh": "感到失望", "cat": "情緒"},
{"en": "be confused", "zh": "感到困惑", "cat": "情緒"},
{"en": "feel exhausted", "zh": "感到筋疲力盡", "cat": "情緒"},
{"en": "win a tournament", "zh": "贏得錦標賽", "cat": "運動"},
{"en": "train an athlete", "zh": "訓練運動員", "cat": "運動"},
{"en": "build a stadium", "zh": "建造體育場", "cat": "運動"},
{"en": "win a championship", "zh": "贏得冠軍賽", "cat": "運動"},
{"en": "argue with a referee", "zh": "與裁判爭論", "cat": "運動"},
{"en": "listen to a coach", "zh": "聽教練的話", "cat": "運動"},
{"en": "play defense", "zh": "防守", "cat": "運動"},
{"en": "play offense", "zh": "進攻", "cat": "運動"},
{"en": "pay a penalty", "zh": "受罰則", "cat": "運動"},
{"en": "tackle a player", "zh": "擒抱/抄截球員", "cat": "運動"},
{"en": "score a goal", "zh": "得分/進球", "cat": "運動"},
{"en": "break a record", "zh": "打破紀錄", "cat": "運動"},
{"en": "join a team", "zh": "加入球隊", "cat": "運動"},
{"en": "warm up", "zh": "熱身", "cat": "運動"},
{"en": "work out", "zh": "健身", "cat": "運動"},
{"en": "lift weights", "zh": "舉重", "cat": "運動"},
{"en": "run a marathon", "zh": "跑馬拉松", "cat": "運動"},
{"en": "play soccer", "zh": "踢足球", "cat": "運動"},
{"en": "shoot a basketball", "zh": "投籃", "cat": "運動"},
{"en": "hit a baseball", "zh": "擊打棒球", "cat": "運動"},
{"en": "swim a lap", "zh": "游一趟", "cat": "運動"},
{"en": "ride a bicycle", "zh": "騎腳踏車", "cat": "運動"},
{"en": "do yoga", "zh": "做瑜伽", "cat": "運動"},
{"en": "stretch muscles", "zh": "伸展肌肉", "cat": "運動"},
{"en": "get injured", "zh": "受傷", "cat": "運動"},
{"en": "recover from injury", "zh": "從受傷中恢復", "cat": "運動"},
{"en": "cheer for a team", "zh": "為球隊歡呼", "cat": "運動"},
{"en": "watch a match", "zh": "看比賽", "cat": "運動"},
{"en": "blow a whistle", "zh": "吹哨子", "cat": "運動"},
{"en": "throw a ball", "zh": "丟球", "cat": "運動"},
{"en": "offer a discount", "zh": "提供折扣", "cat": "購物"},
{"en": "keep a receipt", "zh": "保留收據", "cat": "購物"},
{"en": "ask for a refund", "zh": "要求退款", "cat": "購物"},
{"en": "pay the cashier", "zh": "付錢給收銀員", "cat": "購物"},
{"en": "push a cart", "zh": "推購物車", "cat": "購物"},
{"en": "walk down the aisle", "zh": "走過走道", "cat": "購物"},
{"en": "find a bargain", "zh": "找到特價品", "cat": "購物"},
{"en": "use a voucher", "zh": "使用折價券", "cat": "購物"},
{"en": "extend a warranty", "zh": "延長保固", "cat": "購物"},
{"en": "check the inventory", "zh": "檢查庫存", "cat": "購物"},
{"en": "try on clothes", "zh": "試穿衣服", "cat": "購物"},
{"en": "stand in line", "zh": "排隊", "cat": "購物"},
{"en": "swipe a card", "zh": "刷卡", "cat": "購物"},
{"en": "pay in cash", "zh": "付現金", "cat": "購物"},
{"en": "scan a barcode", "zh": "掃描條碼", "cat": "購物"},
{"en": "compare prices", "zh": "比較價格", "cat": "購物"},
{"en": "return an item", "zh": "退回商品", "cat": "購物"},
{"en": "exchange an item", "zh": "換貨", "cat": "購物"},
{"en": "shop online", "zh": "網購", "cat": "購物"},
{"en": "add to cart", "zh": "加入購物車", "cat": "購物"},
{"en": "place an order", "zh": "下訂單", "cat": "購物"},
{"en": "track a package", "zh": "追蹤包裹", "cat": "購物"},
{"en": "receive a delivery", "zh": "收到快遞", "cat": "購物"},
{"en": "write a review", "zh": "寫評論", "cat": "購物"},
{"en": "browse a catalog", "zh": "瀏覽目錄", "cat": "購物"},
{"en": "go window shopping", "zh": "逛街看看", "cat": "購物"},
{"en": "buy in bulk", "zh": "大量購買", "cat": "購物"},
{"en": "look for a deal", "zh": "尋找優惠", "cat": "購物"},
{"en": "checkout counter", "zh": "結帳櫃檯", "cat": "購物"},
{"en": "gift wrap", "zh": "禮物包裝", "cat": "購物"},
{"en": "broaden horizons", "zh": "開拓視野", "cat": "雅思常見"},
{"en": "acquire knowledge", "zh": "獲得知識", "cat": "雅思常見"},
{"en": "overcome obstacles", "zh": "克服障礙", "cat": "雅思常見"},
{"en": "play a crucial role", "zh": "扮演關鍵角色", "cat": "雅思常見"},
{"en": "have a negative impact", "zh": "有負面影響", "cat": "雅思常見"},
{"en": "make a contribution", "zh": "做出貢獻", "cat": "雅思常見"},
{"en": "draw a conclusion", "zh": "得出結論", "cat": "雅思常見"},
{"en": "take into consideration", "zh": "考慮進去", "cat": "雅思常見"},
{"en": "pose a threat", "zh": "構成威脅", "cat": "雅思常見"},
{"en": "raise awareness", "zh": "提高意識", "cat": "雅思常見"},
{"en": "tackle an issue", "zh": "處理問題", "cat": "雅思常見"},
{"en": "reach a consensus", "zh": "達成共識", "cat": "雅思常見"},
{"en": "face a dilemma", "zh": "面臨困境", "cat": "雅思常見"},
{"en": "implement a strategy", "zh": "實施策略", "cat": "雅思常見"},
{"en": "maintain a balance", "zh": "保持平衡", "cat": "雅思常見"},
{"en": "foster creativity", "zh": "培養創造力", "cat": "雅思常見"},
{"en": "relieve stress", "zh": "減輕壓力", "cat": "雅思常見"},
{"en": "enhance performance", "zh": "提升表現", "cat": "雅思常見"},
{"en": "pursue a career", "zh": "追求事業", "cat": "雅思常見"},
{"en": "meet the demand", "zh": "滿足需求", "cat": "雅思常見"},
{"en": "cause damage", "zh": "造成損害", "cat": "雅思常見"},
{"en": "protect the environment", "zh": "保護環境", "cat": "雅思常見"},
{"en": "reduce emissions", "zh": "減少排放", "cat": "雅思常見"},
{"en": "preserve heritage", "zh": "保存遺產", "cat": "雅思常見"},
{"en": "promote equality", "zh": "促進平等", "cat": "雅思常見"},
{"en": "gain an advantage", "zh": "取得優勢", "cat": "雅思常見"},
{"en": "suffer the consequences", "zh": "承擔後果", "cat": "雅思常見"},
{"en": "allocate resources", "zh": "分配資源", "cat": "雅思常見"},
{"en": "conduct an experiment", "zh": "進行實驗", "cat": "雅思常見"},
{"en": "evaluate the effectiveness", "zh": "評估有效性", "cat": "雅思常見"},
{"en": "schedule a meeting", "zh": "安排會議", "cat": "職場溝通"},
{"en": "send an email", "zh": "寄電子郵件", "cat": "職場溝通"},
{"en": "reply to a message", "zh": "回覆訊息", "cat": "職場溝通"},
{"en": "discuss a project", "zh": "討論專案", "cat": "職場溝通"},
{"en": "give an update", "zh": "給予進度更新", "cat": "職場溝通"},
{"en": "clarify a point", "zh": "澄清一點", "cat": "職場溝通"},
{"en": "request information", "zh": "索取資訊", "cat": "職場溝通"},
{"en": "attach a file", "zh": "附加檔案", "cat": "職場溝通"},
{"en": "forward an email", "zh": "轉寄電子郵件", "cat": "職場溝通"},
{"en": "cc someone", "zh": "副本抄送某人", "cat": "職場溝通"},
{"en": "set an agenda", "zh": "設定議程", "cat": "職場溝通"},
{"en": "take minutes", "zh": "做會議紀錄", "cat": "職場溝通"},
{"en": "wrap up a meeting", "zh": "結束會議", "cat": "職場溝通"},
{"en": "give a presentation", "zh": "做簡報", "cat": "職場溝通"},
{"en": "handle a complaint", "zh": "處理客訴", "cat": "職場溝通"},
{"en": "negotiate a salary", "zh": "談判薪水", "cat": "職場溝通"},
{"en": "ask for a raise", "zh": "要求加薪", "cat": "職場溝通"},
{"en": "take a day off", "zh": "請一天假", "cat": "職場溝通"},
{"en": "call in sick", "zh": "打電話請病假", "cat": "職場溝通"},
{"en": "meet a deadline", "zh": "趕上期限", "cat": "職場溝通"},
{"en": "miss a deadline", "zh": "錯過期限", "cat": "職場溝通"},
{"en": "postpone a meeting", "zh": "延遲會議", "cat": "職場溝通"},
{"en": "cancel an event", "zh": "取消活動", "cat": "職場溝通"},
{"en": "confirm a schedule", "zh": "確認行程", "cat": "職場溝通"},
{"en": "give feedback", "zh": "給予回饋", "cat": "職場溝通"},
{"en": "receive constructive criticism", "zh": "接受建設性批評", "cat": "職場溝通"},
{"en": "brainstorm ideas", "zh": "腦力激盪", "cat": "職場溝通"},
{"en": "assign a task", "zh": "指派任務", "cat": "職場溝通"},
{"en": "report progress", "zh": "報告進度", "cat": "職場溝通"},
{"en": "sign a document", "zh": "簽署文件", "cat": "職場溝通"},
{"en": "how are you", "zh": "你好嗎", "cat": "日常對話"},
{"en": "nice to meet you", "zh": "很高興認識你", "cat": "日常對話"},
{"en": "see you later", "zh": "待會見", "cat": "日常對話"},
{"en": "have a good day", "zh": "祝你有美好的一天", "cat": "日常對話"},
{"en": "what's up", "zh": "最近好嗎/怎麼了", "cat": "日常對話"},
{"en": "excuse me", "zh": "不好意思", "cat": "日常對話"},
{"en": "I am sorry", "zh": "對不起", "cat": "日常對話"},
{"en": "thank you so much", "zh": "非常感謝", "cat": "日常對話"},
{"en": "you are welcome", "zh": "不客氣", "cat": "日常對話"},
{"en": "no problem", "zh": "沒問題", "cat": "日常對話"},
{"en": "I don't know", "zh": "我不知道", "cat": "日常對話"},
{"en": "I think so", "zh": "我也這麼認為", "cat": "日常對話"},
{"en": "I agree with you", "zh": "我同意你的看法", "cat": "日常對話"},
{"en": "that sounds great", "zh": "聽起來很棒", "cat": "日常對話"},
{"en": "let me see", "zh": "讓我看看", "cat": "日常對話"},
{"en": "just a moment", "zh": "稍等一下", "cat": "日常對話"},
{"en": "could you help me", "zh": "你能幫我嗎", "cat": "日常對話"},
{"en": "where are you from", "zh": "你來自哪裡", "cat": "日常對話"},
{"en": "what do you do", "zh": "你是做什麼工作的", "cat": "日常對話"},
{"en": "how old are you", "zh": "你幾歲", "cat": "日常對話"},
{"en": "what time is it", "zh": "現在幾點", "cat": "日常對話"},
{"en": "how much is it", "zh": "這個多少錢", "cat": "日常對話"},
{"en": "I am hungry", "zh": "我餓了", "cat": "日常對話"},
{"en": "I am tired", "zh": "我累了", "cat": "日常對話"},
{"en": "I am lost", "zh": "我迷路了", "cat": "日常對話"},
{"en": "can you repeat that", "zh": "能請你再說一次嗎", "cat": "日常對話"},
{"en": "I don't understand", "zh": "我不懂", "cat": "日常對話"},
{"en": "speak slowly", "zh": "說慢一點", "cat": "日常對話"},
{"en": "what does this mean", "zh": "這是什麼意思", "cat": "日常對話"},
{"en": "how to spell it", "zh": "怎麼拼", "cat": "日常對話"},

  {
    "en": "look forward to",
    "zh": "\u671f\u5f85",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "catch up with",
    "zh": "\u6558\u820a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "out of stock",
    "zh": "\u7f3a\u8ca8",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "call off",
    "zh": "\u53d6\u6d88",
    "cat": "\u5546\u696d"
  },
  {
    "en": "check in",
    "zh": "\u8fa6\u7406\u767b\u6a5f/\u5165\u4f4f",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "pass out",
    "zh": "\u660f\u5012",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "figure out",
    "zh": "\u60f3\u51fa/\u5f04\u660e\u767d",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "log in",
    "zh": "\u767b\u5165",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "work out",
    "zh": "\u5065\u8eab/\u89e3\u6c7a",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "chill out",
    "zh": "\u653e\u9b06",
    "cat": "\u4fda\u8a9e"
  },
  {
    "en": "get up",
    "zh": "\u53d6\u5f97\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "get down",
    "zh": "\u53d6\u5f97\u4e0b",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "get in",
    "zh": "\u53d6\u5f97\u9032",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "get out",
    "zh": "\u53d6\u5f97\u51fa",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "get on",
    "zh": "\u53d6\u5f97\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "get off",
    "zh": "\u53d6\u5f97\u6389",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "get over",
    "zh": "\u53d6\u5f97\u904e",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "get away",
    "zh": "\u53d6\u5f97\u8d70",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "take up",
    "zh": "\u62ff\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "take down",
    "zh": "\u62ff\u4e0b",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "take in",
    "zh": "\u62ff\u9032",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "take out",
    "zh": "\u62ff\u51fa",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "take on",
    "zh": "\u62ff\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "take off",
    "zh": "\u62ff\u6389",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "take over",
    "zh": "\u62ff\u904e",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "take away",
    "zh": "\u62ff\u8d70",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "make up",
    "zh": "\u88fd\u9020\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "make down",
    "zh": "\u88fd\u9020\u4e0b",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "make in",
    "zh": "\u88fd\u9020\u9032",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "make out",
    "zh": "\u88fd\u9020\u51fa",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "make on",
    "zh": "\u88fd\u9020\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "make off",
    "zh": "\u88fd\u9020\u6389",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "make over",
    "zh": "\u88fd\u9020\u904e",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "make away",
    "zh": "\u88fd\u9020\u8d70",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "put up",
    "zh": "\u653e\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "put down",
    "zh": "\u653e\u4e0b",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "put in",
    "zh": "\u653e\u9032",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "put out",
    "zh": "\u653e\u51fa",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "put on",
    "zh": "\u653e\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "put off",
    "zh": "\u653e\u6389",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "put over",
    "zh": "\u653e\u904e",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "put away",
    "zh": "\u653e\u8d70",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "set up",
    "zh": "\u8a2d\u5b9a\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "set down",
    "zh": "\u8a2d\u5b9a\u4e0b",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "set in",
    "zh": "\u8a2d\u5b9a\u9032",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "set out",
    "zh": "\u8a2d\u5b9a\u51fa",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "set on",
    "zh": "\u8a2d\u5b9a\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "set off",
    "zh": "\u8a2d\u5b9a\u6389",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "set over",
    "zh": "\u8a2d\u5b9a\u904e",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "set away",
    "zh": "\u8a2d\u5b9a\u8d70",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "turn up",
    "zh": "\u8f49\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "turn down",
    "zh": "\u8f49\u4e0b",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "turn in",
    "zh": "\u8f49\u9032",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "turn out",
    "zh": "\u8f49\u51fa",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "turn on",
    "zh": "\u8f49\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "turn off",
    "zh": "\u8f49\u6389",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "turn over",
    "zh": "\u8f49\u904e",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "turn away",
    "zh": "\u8f49\u8d70",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "keep up",
    "zh": "\u4fdd\u6301\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "keep down",
    "zh": "\u4fdd\u6301\u4e0b",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "keep in",
    "zh": "\u4fdd\u6301\u9032",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "keep out",
    "zh": "\u4fdd\u6301\u51fa",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "keep on",
    "zh": "\u4fdd\u6301\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "keep off",
    "zh": "\u4fdd\u6301\u6389",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "keep over",
    "zh": "\u4fdd\u6301\u904e",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "keep away",
    "zh": "\u4fdd\u6301\u8d70",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "give up",
    "zh": "\u7d66\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "give down",
    "zh": "\u7d66\u4e0b",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "give in",
    "zh": "\u7d66\u9032",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "give out",
    "zh": "\u7d66\u51fa",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "give on",
    "zh": "\u7d66\u4e0a",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "give off",
    "zh": "\u7d66\u6389",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "give over",
    "zh": "\u7d66\u904e",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "give away",
    "zh": "\u7d66\u8d70",
    "cat": "\u65e5\u5e38\u751f\u6d3b"
  },
  {
    "en": "abide by",
    "zh": "\u9075\u5b88",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "account for",
    "zh": "\u89e3\u91cb\uff1b\u4f54...\u6bd4\u4f8b",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "in terms of",
    "zh": "\u5c31...\u800c\u8a00",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "in charge of",
    "zh": "\u8ca0\u8cac",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "prior to",
    "zh": "\u5728...\u4e4b\u524d",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "take into consideration",
    "zh": "\u8003\u616e\u9032\u53bb",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "comply with",
    "zh": "\u9075\u5b88\uff1b\u670d\u5f9e",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "be subject to",
    "zh": "\u53d7...\u63a7\u5236\uff1b\u6613\u906d\u53d7...",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "rule out",
    "zh": "\u6392\u9664",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "turn down",
    "zh": "\u62d2\u7d55",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "look into",
    "zh": "\u8abf\u67e5",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "fill in for",
    "zh": "\u4ee3\u7406\uff1b\u66ff\u4ee3",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "keep track of",
    "zh": "\u8a18\u9304\uff1b\u8ffd\u8e64",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "rely on",
    "zh": "\u4f9d\u8cf4",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "come up with",
    "zh": "\u60f3\u51fa",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "play a crucial role in",
    "zh": "\u5728...\u626e\u6f14\u95dc\u9375\u89d2\u8272",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "stem from",
    "zh": "\u6e90\u81ea\u65bc",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "shed light on",
    "zh": "\u95e1\u660e\uff1b\u89e3\u91cb",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "boil down to",
    "zh": "\u6b78\u7d50\u65bc",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "take for granted",
    "zh": "\u8996\u70ba\u7406\u6240\u7576\u7136",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "give rise to",
    "zh": "\u5f15\u8d77\uff1b\u5c0e\u81f4",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "be prone to",
    "zh": "\u50be\u5411\u65bc\uff1b\u6613\u65bc",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "bear in mind",
    "zh": "\u8a18\u4f4f",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "pave the way for",
    "zh": "\u70ba...\u92ea\u8def",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "cope with",
    "zh": "\u8655\u7406\uff1b\u61c9\u4ed8",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "touch base",
    "zh": "\u806f\u7e6b\uff1b\u8ddf\u9032",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "get back to",
    "zh": "\u56de\u8986",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "bear with me",
    "zh": "\u8acb\u8010\u5fc3\u7b49\u6211\u4e00\u4e0b",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "bring up",
    "zh": "\u63d0\u51fa",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "wrap up",
    "zh": "\u7d50\u675f\uff1b\u7e3d\u7d50",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "move forward",
    "zh": "\u5411\u524d\u9081\u9032",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "keep someone in the loop",
    "zh": "\u8b93\u67d0\u4eba\u4e86\u89e3\u60c5\u6cc1",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "on the same page",
    "zh": "\u9054\u6210\u5171\u8b58",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "point out",
    "zh": "\u6307\u51fa",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "sort out",
    "zh": "\u89e3\u6c7a\uff1b\u6574\u7406",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "hang out",
    "zh": "\u51fa\u53bb\u73a9",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "catch up",
    "zh": "\u6558\u820a\uff1b\u8d95\u4e0a",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "never mind",
    "zh": "\u6c92\u95dc\u4fc2\uff1b\u7b97\u4e86",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "take it easy",
    "zh": "\u653e\u8f15\u9b06",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "make sense",
    "zh": "\u6709\u9053\u7406",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "figure out",
    "zh": "\u60f3\u51fa\uff1b\u5f04\u6e05\u695a",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "show up",
    "zh": "\u51fa\u73fe",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "turn out",
    "zh": "\u7d50\u679c\u662f",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "by the way",
    "zh": "\u9806\u5e36\u4e00\u63d0",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "look forward to",
    "zh": "\u671f\u5f85",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  }
,
  // \u591a\u76ca\u5fc5\u8003 (15)
  { en: "abide by", zh: "\u9075\u5b88", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "account for", zh: "\u89e3\u91cb\uff1b\u4f54...\u6bd4\u4f8b", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "in terms of", zh: "\u5c31...\u800c\u8a00", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "in charge of", zh: "\u8ca0\u8cac", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "prior to", zh: "\u5728...\u4e4b\u524d", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "take into consideration", zh: "\u8003\u616e\u9032\u53bb", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "comply with", zh: "\u9075\u5b88\uff1b\u670d\u5f9e", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "be subject to", zh: "\u53d7...\u63a7\u5236\uff1b\u6613\u906d\u53d7...", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "rule out", zh: "\u6392\u9664", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "turn down", zh: "\u62d2\u7d55", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "look into", zh: "\u8abf\u67e5", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "fill in for", zh: "\u4ee3\u7406\uff1b\u66ff\u4ee3", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "keep track of", zh: "\u8a18\u9304\uff1b\u8ffd\u8e64", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "rely on", zh: "\u4f9d\u8cf4", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "come up with", zh: "\u60f3\u51fa", cat: "\u591a\u76ca\u5fc5\u8003" },
  // \u96c5\u601d\u5e38\u898b (10)
  { en: "play a crucial role in", zh: "\u5728...\u626e\u6f14\u95dc\u9375\u89d2\u8272", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "stem from", zh: "\u6e90\u81ea\u65bc", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "shed light on", zh: "\u95e1\u660e\uff1b\u89e3\u91cb", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "boil down to", zh: "\u6b78\u7d50\u65bc", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "take for granted", zh: "\u8996\u70ba\u7406\u6240\u7576\u7136", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "give rise to", zh: "\u5f15\u8d77\uff1b\u5c0e\u81f4", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "be prone to", zh: "\u50be\u5411\u65bc\uff1b\u6613\u65bc", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "bear in mind", zh: "\u8a18\u4f4f", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "pave the way for", zh: "\u70ba...\u92ea\u8def", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "cope with", zh: "\u8655\u7406\uff1b\u61c9\u4ed8", cat: "\u96c5\u601d\u5e38\u898b" },
  // \u8077\u5834\u6e9d\u901a (10)
  { en: "touch base", zh: "\u806f\u7e6b\uff1b\u8ddf\u9032", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "get back to", zh: "\u56de\u8986", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "bear with me", zh: "\u8acb\u8010\u5fc3\u7b49\u6211\u4e00\u4e0b", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "bring up", zh: "\u63d0\u51fa", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "wrap up", zh: "\u7d50\u675f\uff1b\u7e3d\u7d50", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "move forward", zh: "\u5411\u524d\u9081\u9032", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "keep someone in the loop", zh: "\u8b93\u67d0\u4eba\u4e86\u89e3\u60c5\u6cc1", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "on the same page", zh: "\u9054\u6210\u5171\u8b58", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "point out", zh: "\u6307\u51fa", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "sort out", zh: "\u89e3\u6c7a\uff1b\u6574\u7406", cat: "\u8077\u5834\u6e9d\u901a" },
  // \u65e5\u5e38\u5c0d\u8a71 (10)
  { en: "hang out", zh: "\u51fa\u53bb\u73a9", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "catch up", zh: "\u6558\u820a\uff1b\u8d95\u4e0a", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "never mind", zh: "\u6c92\u95dc\u4fc2\uff1b\u7b97\u4e86", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "take it easy", zh: "\u653e\u8f15\u9b06", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "make sense", zh: "\u6709\u9053\u7406", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "figure out", zh: "\u60f3\u51fa\uff1b\u5f04\u6e05\u695a", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "show up", zh: "\u51fa\u73fe", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "turn out", zh: "\u7d50\u679c\u662f", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "by the way", zh: "\u9806\u5e36\u4e00\u63d0", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "look forward to", zh: "\u671f\u5f85", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  {"en": "first impression", "zh": "第一印象", "cat": "面試"},
  {"en": "job offer", "zh": "工作邀約", "cat": "面試"},
  {"en": "cover letter", "zh": "求職信", "cat": "面試"},
  {"en": "career path", "zh": "職涯規劃", "cat": "面試"},
  {"en": "technical skills", "zh": "技術技能", "cat": "面試"},
  {"en": "soft skills", "zh": "軟技能", "cat": "面試"},
  {"en": "problem solving", "zh": "解決問題", "cat": "面試"},
  {"en": "team player", "zh": "團隊合作者", "cat": "面試"},
  {"en": "work under pressure", "zh": "抗壓能力", "cat": "面試"},
  {"en": "cultural fit", "zh": "文化契合度", "cat": "面試"},
  {"en": "career goal", "zh": "職涯目標", "cat": "面試"},
  {"en": "track record", "zh": "過往紀錄", "cat": "面試"},
  {"en": "competitive salary", "zh": "具競爭力的薪資", "cat": "面試"},
  {"en": "notice period", "zh": "離職預告期", "cat": "面試"},
  {"en": "dress code", "zh": "服裝規定", "cat": "面試"},
  {"en": "relevant experience", "zh": "相關經驗", "cat": "面試"},
  {"en": "communication skills", "zh": "溝通技巧", "cat": "面試"},
  {"en": "leadership qualities", "zh": "領導特質", "cat": "面試"},
  {"en": "time management", "zh": "時間管理", "cat": "面試"},
  {"en": "adapt to change", "zh": "適應改變", "cat": "面試"},
  {"en": "handling conflict", "zh": "處理衝突", "cat": "面試"},
  {"en": "role model", "zh": "榜樣", "cat": "面試"},
  {"en": "long-term vision", "zh": "長期願景", "cat": "面試"},
  {"en": "key achievement", "zh": "關鍵成就", "cat": "面試"},
  {"en": "professional development", "zh": "專業發展", "cat": "面試"},
  {"en": "transferable skills", "zh": "可轉移技能", "cat": "面試"},
  {"en": "working environment", "zh": "工作環境", "cat": "面試"},
  {"en": "growth mindset", "zh": "成長心態", "cat": "面試"},
  {"en": "mutual agreement", "zh": "雙方同意", "cat": "面試"},
  {"en": "follow up", "zh": "跟進", "cat": "面試"},
  {"en": "action item", "zh": "待辦事項", "cat": "開會"},
  {"en": "conference call", "zh": "電話會議", "cat": "開會"},
  {"en": "opening remarks", "zh": "開場白", "cat": "開會"},
  {"en": "closing remarks", "zh": "結語", "cat": "開會"},
  {"en": "point of view", "zh": "觀點", "cat": "開會"},
  {"en": "move on", "zh": "繼續", "cat": "開會"},
  {"en": "get started", "zh": "開始", "cat": "開會"},
  {"en": "take notes", "zh": "做筆記", "cat": "開會"},
  {"en": "floor is yours", "zh": "請發言", "cat": "開會"},
  {"en": "wrap up", "zh": "總結", "cat": "開會"},
  {"en": "stay on track", "zh": "保持正軌", "cat": "開會"},
  {"en": "run out of time", "zh": "時間不夠", "cat": "開會"},
  {"en": "any other business", "zh": "臨時動議", "cat": "開會"},
  {"en": "follow up", "zh": "跟進", "cat": "開會"},
  {"en": "touch base", "zh": "聯繫", "cat": "開會"},
  {"en": "on the same page", "zh": "達成共識", "cat": "開會"},
  {"en": "bring up", "zh": "提出", "cat": "開會"},
  {"en": "look into", "zh": "調查", "cat": "開會"},
  {"en": "figure out", "zh": "弄清楚", "cat": "開會"},
  {"en": "sort out", "zh": "解決", "cat": "開會"},
  {"en": "deal with", "zh": "處理", "cat": "開會"},
  {"en": "point out", "zh": "指出", "cat": "開會"},
  {"en": "sum up", "zh": "總結", "cat": "開會"},
  {"en": "go over", "zh": "檢查", "cat": "開會"},
  {"en": "break down", "zh": "分解", "cat": "開會"},
  {"en": "kick off", "zh": "開始", "cat": "開會"},
  {"en": "catch up", "zh": "敘舊/趕上", "cat": "開會"},
  {"en": "back to square one", "zh": "回到原點", "cat": "開會"},
  {"en": "bottom line", "zh": "底線", "cat": "開會"},
  {"en": "big picture", "zh": "大局", "cat": "開會"},
  {"en": "literature review", "zh": "文獻探討", "cat": "學術"},
  {"en": "data collection", "zh": "數據收集", "cat": "學術"},
  {"en": "empirical study", "zh": "實證研究", "cat": "學術"},
  {"en": "qualitative research", "zh": "質性研究", "cat": "學術"},
  {"en": "quantitative research", "zh": "量化研究", "cat": "學術"},
  {"en": "statistical analysis", "zh": "統計分析", "cat": "學術"},
  {"en": "case study", "zh": "案例研究", "cat": "學術"},
  {"en": "field work", "zh": "田野調查", "cat": "學術"},
  {"en": "primary source", "zh": "第一手資料", "cat": "學術"},
  {"en": "secondary source", "zh": "第二手資料", "cat": "學術"},
  {"en": "academic integrity", "zh": "學術誠信", "cat": "學術"},
  {"en": "intellectual property", "zh": "智慧財產權", "cat": "學術"},
  {"en": "critical thinking", "zh": "批判性思考", "cat": "學術"},
  {"en": "higher education", "zh": "高等教育", "cat": "學術"},
  {"en": "distance learning", "zh": "遠距教學", "cat": "學術"},
  {"en": "student loan", "zh": "學貸", "cat": "學術"},
  {"en": "extracurricular activity", "zh": "課外活動", "cat": "學術"},
  {"en": "office hours", "zh": "辦公時間", "cat": "學術"},
  {"en": "group project", "zh": "團體報告", "cat": "學術"},
  {"en": "final exam", "zh": "期末考", "cat": "學術"},
  {"en": "midterm exam", "zh": "期中考", "cat": "學術"},
  {"en": "grading system", "zh": "評分系統", "cat": "學術"},
  {"en": "academic probation", "zh": "留校察看", "cat": "學術"},
  {"en": "honors program", "zh": "榮譽學程", "cat": "學術"},
  {"en": "study abroad", "zh": "出國留學", "cat": "學術"},
  {"en": "research assistant", "zh": "研究助理", "cat": "學術"},
  {"en": "teaching assistant", "zh": "教學助理", "cat": "學術"},
  {"en": "guest speaker", "zh": "客座演講者", "cat": "學術"},
  {"en": "panel discussion", "zh": "小組討論", "cat": "學術"},
  {"en": "poster session", "zh": "海報展示", "cat": "學術"},
  {"en": "small talk", "zh": "閒聊", "cat": "社交"},
  {"en": "ice breaker", "zh": "破冰", "cat": "社交"},
  {"en": "mutual friend", "zh": "共同朋友", "cat": "社交"},
  {"en": "keep in touch", "zh": "保持聯繫", "cat": "社交"},
  {"en": "catch up", "zh": "敘舊/趕上", "cat": "社交"},
  {"en": "hang out", "zh": "出去玩", "cat": "社交"},
  {"en": "drop by", "zh": "順道拜訪", "cat": "社交"},
  {"en": "show up", "zh": "出現", "cat": "社交"},
  {"en": "turn down", "zh": "拒絕", "cat": "社交"},
  {"en": "stand up", "zh": "放鴿子", "cat": "社交"},
  {"en": "hit it off", "zh": "一拍即合", "cat": "社交"},
  {"en": "get along", "zh": "相處融洽", "cat": "社交"},
  {"en": "fall out", "zh": "鬧翻", "cat": "社交"},
  {"en": "make up", "zh": "和好", "cat": "社交"},
  {"en": "drift apart", "zh": "漸行漸遠", "cat": "社交"},
  {"en": "lose touch", "zh": "失去聯繫", "cat": "社交"},
  {"en": "stay in touch", "zh": "保持聯繫", "cat": "社交"},
  {"en": "social media", "zh": "社群媒體", "cat": "社交"},
  {"en": "profile picture", "zh": "大頭貼", "cat": "社交"},
  {"en": "status update", "zh": "狀態更新", "cat": "社交"},
  {"en": "news feed", "zh": "動態消息", "cat": "社交"},
  {"en": "friend request", "zh": "好友邀請", "cat": "社交"},
  {"en": "direct message", "zh": "私訊", "cat": "社交"},
  {"en": "group chat", "zh": "群組聊天", "cat": "社交"},
  {"en": "video call", "zh": "視訊通話", "cat": "社交"},
  {"en": "voice message", "zh": "語音訊息", "cat": "社交"},
  {"en": "emoji", "zh": "表情符號", "cat": "社交"},
  {"en": "hashtag", "zh": "主題標籤", "cat": "社交"},
  {"en": "viral", "zh": "爆紅的", "cat": "社交"},
  {"en": "trending", "zh": "熱門的", "cat": "社交"}
  ],
  sentence: [
{"en": "Please submit your resume by Friday.", "zh": "請在週五前提交您的履歷。", "cat": "多益必考"},
{"en": "We need to schedule an interview next week.", "zh": "我們需要安排下週面試。", "cat": "多益必考"},
{"en": "They will sign a contract tomorrow.", "zh": "他們明天會簽訂合約。", "cat": "多益必考"},
{"en": "He tried to negotiate a better deal.", "zh": "他試圖談判一個更好的交易。", "cat": "多益必考"},
{"en": "The company generated a lot of revenue.", "zh": "這家公司創造了大量營收。", "cat": "多益必考"},
{"en": "Our goal is to increase profit this year.", "zh": "我們今年的目標是增加利潤。", "cat": "多益必考"},
{"en": "We must allocate a budget for this project.", "zh": "我們必須為這個專案分配預算。", "cat": "多益必考"},
{"en": "She will propose a new plan at the meeting.", "zh": "她將在會議上提出新計畫。", "cat": "多益必考"},
{"en": "It's crucial to meet the deadline.", "zh": "趕上期限至關重要。", "cat": "多益必考"},
{"en": "I need you to review this document.", "zh": "我需要你審查這份文件。", "cat": "多益必考"},
{"en": "He is going to attend a seminar in Tokyo.", "zh": "他將去東京參加研討會。", "cat": "多益必考"},
{"en": "They plan to conduct a customer survey.", "zh": "他們計畫進行客戶調查。", "cat": "多益必考"},
{"en": "The government will implement a new policy.", "zh": "政府將實施新政策。", "cat": "多益必考"},
{"en": "Managers evaluate performance annually.", "zh": "經理每年評估績效。", "cat": "多益必考"},
{"en": "We are promoting our new product online.", "zh": "我們正在網路上推銷我們的新產品。", "cat": "多益必考"},
{"en": "The marketing team launched a campaign.", "zh": "行銷團隊發起了一項活動。", "cat": "多益必考"},
{"en": "We need to target a younger audience.", "zh": "我們需要鎖定更年輕的受眾。", "cat": "多益必考"},
{"en": "The analyst is analyzing the sales data.", "zh": "分析師正在分析銷售數據。", "cat": "多益必考"},
{"en": "Can you help me solve this problem?", "zh": "你能幫我解決這個問題嗎？", "cat": "多益必考"},
{"en": "Thank you for providing valuable feedback.", "zh": "感謝您提供寶貴的回饋。", "cat": "多益必考"},
{"en": "The customer requested a full refund.", "zh": "客戶要求全額退款。", "cat": "多益必考"},
{"en": "It takes time to process an order.", "zh": "處理訂單需要時間。", "cat": "多益必考"},
{"en": "I would like to cancel my reservation.", "zh": "我想取消我的預約。", "cat": "多益必考"},
{"en": "Please confirm your appointment by email.", "zh": "請透過電子郵件確認您的預約。", "cat": "多益必考"},
{"en": "Don't forget to update your profile.", "zh": "別忘了更新你的個人資料。", "cat": "多益必考"},
{"en": "We are going to upgrade the system tonight.", "zh": "我們今晚將升級系統。", "cat": "多益必考"},
{"en": "You need to install the latest software.", "zh": "你需要安裝最新的軟體。", "cat": "多益必考"},
{"en": "The technician will troubleshoot the issue.", "zh": "技術人員將排除故障。", "cat": "多益必考"},
{"en": "It's important to maintain the equipment regularly.", "zh": "定期維護設備很重要。", "cat": "多益必考"},
{"en": "They hired someone to repair the machine.", "zh": "他們雇了人來修理機器。", "cat": "多益必考"},
{"en": "We will hold a meeting at 10 AM.", "zh": "我們將在上午 10 點開會。", "cat": "商業"},
{"en": "The two companies reached an agreement finally.", "zh": "兩家公司終於達成了協議。", "cat": "商業"},
{"en": "Our plan is to expand the market in Asia.", "zh": "我們的計畫是拓展亞洲市場。", "cat": "商業"},
{"en": "This new feature will boost our sales.", "zh": "這個新功能將提升我們的銷售。", "cat": "商業"},
{"en": "We need to cut costs to survive.", "zh": "我們需要削減成本以生存。", "cat": "商業"},
{"en": "Many people invest in stocks for retirement.", "zh": "許多人為退休而投資股票。", "cat": "商業"},
{"en": "They built a strong partnership over the years.", "zh": "他們多年來建立了強大的合作關係。", "cat": "商業"},
{"en": "We always serve our clients with passion.", "zh": "我們總是用熱情服務客戶。", "cat": "商業"},
{"en": "She is making a presentation to the board.", "zh": "她正在向董事會做簡報。", "cat": "商業"},
{"en": "I hope we can meet the target this month.", "zh": "我希望我們這個月能達到目標。", "cat": "商業"},
{"en": "The CEO developed a new business strategy.", "zh": "執行長製定了一項新的商業策略。", "cat": "商業"},
{"en": "We must conduct market research first.", "zh": "我們必須先進行市場研究。", "cat": "商業"},
{"en": "He launched a startup right after college.", "zh": "他大學一畢業就創辦了一家新創公司。", "cat": "商業"},
{"en": "Managing a team requires good communication skills.", "zh": "管理團隊需要良好的溝通技巧。", "cat": "商業"},
{"en": "The HR department plans to hire an employee.", "zh": "人資部門計畫雇用一名員工。", "cat": "商業"},
{"en": "The factory had to fire a worker.", "zh": "工廠不得不解雇一名工人。", "cat": "商業"},
{"en": "She was promoted to a senior position.", "zh": "她被晉升為高級職位。", "cat": "商業"},
{"en": "It takes two weeks to train a newcomer.", "zh": "培訓一名新人需要兩週。", "cat": "商業"},
{"en": "They decided to outsource the project.", "zh": "他們決定外包該專案。", "cat": "商業"},
{"en": "Our company will merge with a larger one.", "zh": "我們的公司將與一家更大的公司合併。", "cat": "商業"},
{"en": "Facebook acquired Instagram in 2012.", "zh": "Facebook 在 2012 年收購了 Instagram。", "cat": "商業"},
{"en": "The airline declared bankruptcy last year.", "zh": "那家航空公司去年宣布破產。", "cat": "商業"},
{"en": "He worked hard to pay off a huge debt.", "zh": "他努力工作以還清巨額債務。", "cat": "商業"},
{"en": "She went to the bank to apply for a loan.", "zh": "她去銀行申請貸款。", "cat": "商業"},
{"en": "I would like to open a savings account.", "zh": "我想開立一個儲蓄帳戶。", "cat": "商業"},
{"en": "You can transfer money online easily.", "zh": "你可以輕鬆地在網上轉帳。", "cat": "商業"},
{"en": "He went to the ATM to withdraw cash.", "zh": "他去自動提款機提款。", "cat": "商業"},
{"en": "Please deposit funds into this account.", "zh": "請將資金存入此帳戶。", "cat": "商業"},
{"en": "Where can I exchange currency around here?", "zh": "這附近哪裡可以兌換貨幣？", "cat": "商業"},
{"en": "Investing in real estate can be profitable.", "zh": "投資房地產可能是有利可圖的。", "cat": "商業"},
{"en": "I need to book a flight to London.", "zh": "我需要訂一張去倫敦的機票。", "cat": "旅遊"},
{"en": "Did you pack your baggage yet?", "zh": "你打包好行李了嗎？", "cat": "旅遊"},
{"en": "The officer checked my passport carefully.", "zh": "官員仔細檢查了我的護照。", "cat": "旅遊"},
{"en": "We should reserve accommodation in advance.", "zh": "我們應該提前預訂住宿。", "cat": "旅遊"},
{"en": "They finally reached their destination.", "zh": "他們終於抵達了目的地。", "cat": "旅遊"},
{"en": "She is planning an itinerary for her trip.", "zh": "她正在為她的旅行規劃行程。", "cat": "旅遊"},
{"en": "The local expert guided the tourist around.", "zh": "當地專家帶領遊客四處參觀。", "cat": "旅遊"},
{"en": "I bought a souvenir for my mom.", "zh": "我給媽媽買了一個紀念品。", "cat": "旅遊"},
{"en": "It took an hour to go through customs.", "zh": "通過海關花了一個小時。", "cat": "旅遊"},
{"en": "Passengers are boarding the plane now.", "zh": "乘客們現在正在登機。", "cat": "旅遊"},
{"en": "We rented a car to drive around the island.", "zh": "我們租了一輛車環島行駛。", "cat": "旅遊"},
{"en": "You can take a train to the next city.", "zh": "你可以搭火車去下一個城市。", "cat": "旅遊"},
{"en": "Riding a bus is cheaper than taking a taxi.", "zh": "搭公車比搭計程車便宜。", "cat": "旅遊"},
{"en": "Hurry up or we will miss the ferry.", "zh": "快點，否則我們會錯過渡輪。", "cat": "旅遊"},
{"en": "Let's call a taxi to go back to the hotel.", "zh": "我們叫輛計程車回飯店吧。", "cat": "旅遊"},
{"en": "We will check in at the hotel at 3 PM.", "zh": "我們將在下午 3 點在飯店辦理入住。", "cat": "旅遊"},
{"en": "Don't forget to return the key when you check out.", "zh": "退房時別忘了還鑰匙。", "cat": "旅遊"},
{"en": "If you get lost, just ask for directions.", "zh": "如果你迷路了，就問路吧。", "cat": "旅遊"},
{"en": "He was looking at a map to find the station.", "zh": "他正在看地圖尋找車站。", "cat": "旅遊"},
{"en": "Tourists love taking photos here.", "zh": "遊客喜歡在這裡拍照。", "cat": "旅遊"},
{"en": "You must try the local food in Thailand.", "zh": "你一定要嘗試泰國的當地美食。", "cat": "旅遊"},
{"en": "We visited a famous museum yesterday.", "zh": "我們昨天參觀了一家著名的博物館。", "cat": "旅遊"},
{"en": "I want to explore the city on foot.", "zh": "我想徒步探索這座城市。", "cat": "旅遊"},
{"en": "They spent the whole day relaxing on the beach.", "zh": "他們花了一整天在海灘上放鬆。", "cat": "旅遊"},
{"en": "We went hiking in the mountains last weekend.", "zh": "我們上週末去山區健行了。", "cat": "旅遊"},
{"en": "Where can I buy a ticket for the show?", "zh": "我可以在哪裡買到演出的票？", "cat": "旅遊"},
{"en": "We waited in line for two hours.", "zh": "我們排隊等了兩個小時。", "cat": "旅遊"},
{"en": "He woke up late and missed his flight.", "zh": "他起晚了，錯過了航班。", "cat": "旅遊"},
{"en": "The bad weather delayed our trip.", "zh": "壞天氣延誤了我們的行程。", "cat": "旅遊"},
{"en": "They had to cancel the tour due to illness.", "zh": "由於生病，他們不得不取消行程。", "cat": "旅遊"},
{"en": "This medicine will relieve your symptoms.", "zh": "這藥會緩解你的症狀。", "cat": "醫療"},
{"en": "You can fill your prescription at any pharmacy.", "zh": "你可以在任何藥局配藥。", "cat": "醫療"},
{"en": "He visited a pharmacy to buy some painkillers.", "zh": "他去藥局買了一些止痛藥。", "cat": "醫療"},
{"en": "The doctor will perform a surgery tomorrow.", "zh": "醫生明天將進行手術。", "cat": "醫療"},
{"en": "I need to go to a clinic for a checkup.", "zh": "我需要去診所做個檢查。", "cat": "醫療"},
{"en": "The specialist made an accurate diagnosis.", "zh": "專科醫生做出了準確的診斷。", "cat": "醫療"},
{"en": "She is receiving treatment for her back pain.", "zh": "她正在接受背痛治療。", "cat": "醫療"},
{"en": "Have you got the flu vaccine yet?", "zh": "你打流感疫苗了嗎？", "cat": "醫療"},
{"en": "Wash your hands to prevent infection.", "zh": "洗手以預防感染。", "cat": "醫療"},
{"en": "Call an emergency number if it gets worse.", "zh": "如果情況惡化，請撥打緊急電話。", "cat": "醫療"},
{"en": "You look pale; you should see a doctor.", "zh": "你看起來很蒼白；你應該去看醫生。", "cat": "醫療"},
{"en": "Take one pill twice a day after meals.", "zh": "飯後每天吃兩次，每次一粒藥丸。", "cat": "醫療"},
{"en": "The nurse checked my blood pressure.", "zh": "護士幫我量了血壓。", "cat": "醫療"},
{"en": "They need to draw blood for the test.", "zh": "他們需要抽血化驗。", "cat": "醫療"},
{"en": "The dentist took an X-ray of my teeth.", "zh": "牙醫給我的牙齒照了 X 光。", "cat": "醫療"},
{"en": "My grandfather had to stay in the hospital.", "zh": "我祖父不得不住院。", "cat": "醫療"},
{"en": "It takes weeks to recover from the illness.", "zh": "從這種疾病中康復需要幾週時間。", "cat": "醫療"},
{"en": "Scientists are trying to cure the disease.", "zh": "科學家正試圖治癒這種疾病。", "cat": "醫療"},
{"en": "She has been suffering from a cold all week.", "zh": "她整個星期都患感冒。", "cat": "醫療"},
{"en": "I feel dizzy when I stand up quickly.", "zh": "我站起來太快時感到頭暈。", "cat": "醫療"},
{"en": "The baby has a high fever.", "zh": "這嬰兒發高燒。", "cat": "醫療"},
{"en": "He was coughing heavily last night.", "zh": "他昨晚劇烈咳嗽。", "cat": "醫療"},
{"en": "I have been sneezing frequently since morning.", "zh": "從早上起我就一直在頻繁打噴嚏。", "cat": "醫療"},
{"en": "The smell of the food makes me feel nauseous.", "zh": "食物的氣味讓我感到噁心。", "cat": "醫療"},
{"en": "I have a terrible headache today.", "zh": "我今天頭痛得厲害。", "cat": "醫療"},
{"en": "I want to make an appointment with Dr. Smith.", "zh": "我想預約史密斯醫生。", "cat": "醫療"},
{"en": "I had to cancel my appointment due to work.", "zh": "由於工作，我不得不取消我的預約掛號。", "cat": "醫療"},
{"en": "You should consult a specialist for that.", "zh": "你應該為此諮詢專科醫生。", "cat": "醫療"},
{"en": "She had to undergo a thorough medical test.", "zh": "她必須接受徹底的醫學檢查。", "cat": "醫療"},
{"en": "We are still waiting for the test result.", "zh": "我們還在等待檢查結果。", "cat": "醫療"},
{"en": "I usually buy grocery on weekends.", "zh": "我通常在週末買雜貨。", "cat": "日常生活"},
{"en": "She has to do the laundry tonight.", "zh": "她今晚必須洗衣服。", "cat": "日常生活"},
{"en": "It takes an hour to commute to work.", "zh": "通勤上班需要一個小時。", "cat": "日常生活"},
{"en": "I cooked this dish by following a recipe.", "zh": "我按照食譜煮了這道菜。", "cat": "日常生活"},
{"en": "Don't forget to turn off the appliance.", "zh": "別忘了關掉家電。", "cat": "日常生活"},
{"en": "It took him hours to assemble the furniture.", "zh": "他花了幾個小時組裝家具。", "cat": "日常生活"},
{"en": "We walked around the neighborhood after dinner.", "zh": "晚飯後我們在社區散步。", "cat": "日常生活"},
{"en": "Everyone in the house has to do a chore.", "zh": "家裡的每個人都必須做家事。", "cat": "日常生活"},
{"en": "It is hard to form a good habit.", "zh": "養成好習慣很難。", "cat": "日常生活"},
{"en": "I try to keep a regular routine.", "zh": "我盡量保持規律的作息。", "cat": "日常生活"},
{"en": "I wake up early every morning.", "zh": "我每天早上都早起。", "cat": "日常生活"},
{"en": "Make your bed before you leave.", "zh": "離開前把你的床整理好。", "cat": "日常生活"},
{"en": "You should brush your teeth twice a day.", "zh": "你應該每天刷牙兩次。", "cat": "日常生活"},
{"en": "I prefer to take a shower at night.", "zh": "我更喜歡在晚上洗澡。", "cat": "日常生活"},
{"en": "We had a delicious breakfast today.", "zh": "我們今天吃了一頓美味的早餐。", "cat": "日常生活"},
{"en": "She packs a lunch for her kid everyday.", "zh": "她每天為她的孩子帶便當。", "cat": "日常生活"},
{"en": "Can you take out the trash for me?", "zh": "你能幫我倒垃圾嗎？", "cat": "日常生活"},
{"en": "I will wash the dishes after we eat.", "zh": "我們吃完後我會洗碗。", "cat": "日常生活"},
{"en": "Please sweep the floor carefully.", "zh": "請仔細掃地。", "cat": "日常生活"},
{"en": "He mopped the floor until it was clean.", "zh": "他把地拖得乾乾淨淨。", "cat": "日常生活"},
{"en": "Did you feed the pet this morning?", "zh": "你今天早上餵寵物了嗎？", "cat": "日常生活"},
{"en": "My mom waters the plants every evening.", "zh": "我媽媽每天傍晚都會給植物澆水。", "cat": "日常生活"},
{"en": "Let's go for a walk in the park.", "zh": "我們去公園散步吧。", "cat": "日常生活"},
{"en": "I love reading a book before sleeping.", "zh": "我喜歡睡前看書。", "cat": "日常生活"},
{"en": "They are watching television in the living room.", "zh": "他們正在客廳看電視。", "cat": "日常生活"},
{"en": "Listening to music helps me relax.", "zh": "聽音樂有助於我放鬆。", "cat": "日常生活"},
{"en": "He spends hours surfing the internet.", "zh": "他花好幾個小時上網。", "cat": "日常生活"},
{"en": "She is chatting with friends on the phone.", "zh": "她正在電話上和朋友聊天。", "cat": "日常生活"},
{"en": "It is time to go to bed.", "zh": "是時候上床睡覺了。", "cat": "日常生活"},
{"en": "I set an alarm for 6 AM.", "zh": "我設定了早上 6 點的鬧鐘。", "cat": "日常生活"},
{"en": "You must update the software regularly.", "zh": "你必須定期更新軟體。", "cat": "科技"},
{"en": "The IT guy is installing new hardware.", "zh": "資訊人員正在安裝新硬體。", "cat": "科技"},
{"en": "Only admins can access the database.", "zh": "只有管理員才能存取資料庫。", "cat": "科技"},
{"en": "I cannot connect to the network here.", "zh": "我在這裡無法連線到網路。", "cat": "科技"},
{"en": "They designed a complex algorithm for it.", "zh": "他們為此設計了一個複雜的演算法。", "cat": "科技"},
{"en": "We are looking to hire a senior developer.", "zh": "我們正在尋找雇用一名資深開發者。", "cat": "科技"},
{"en": "She developed an application for iOS.", "zh": "她開發了一個 iOS 應用程式。", "cat": "科技"},
{"en": "It's hard to maintain a server 24/7.", "zh": "全天候維護伺服器很難。", "cat": "科技"},
{"en": "All files are automatically uploaded to the cloud.", "zh": "所有檔案都會自動上傳到雲端。", "cat": "科技"},
{"en": "The company wants to improve its network security.", "zh": "公司希望改善其網路安全。", "cat": "科技"},
{"en": "He spent all night writing a code.", "zh": "他整晚都在寫程式碼。", "cat": "科技"},
{"en": "Debugging a program can be frustrating.", "zh": "對程式除錯可能會令人沮喪。", "cat": "科技"},
{"en": "We need to test the system before launch.", "zh": "我們需要在發布前測試系統。", "cat": "科技"},
{"en": "The team will deploy the project tonight.", "zh": "團隊今晚將部署專案。", "cat": "科技"},
{"en": "Always backup data before updating.", "zh": "更新前務必備份資料。", "cat": "科技"},
{"en": "He had to format the drive to fix the error.", "zh": "他不得不格式化磁碟機以修復錯誤。", "cat": "科技"},
{"en": "Try to reboot the computer first.", "zh": "先試著把電腦重新開機。", "cat": "科技"},
{"en": "Do not click the suspicious link.", "zh": "不要點擊可疑的連結。", "cat": "科技"},
{"en": "It takes time to download a large file.", "zh": "下載大檔案需要時間。", "cat": "科技"},
{"en": "Please compress the folder before sending it.", "zh": "請在發送前壓縮資料夾。", "cat": "科技"},
{"en": "You can create an account for free.", "zh": "你可以免費建立一個帳號。", "cat": "科技"},
{"en": "I can't log in the website right now.", "zh": "我現在無法登入該網站。", "cat": "科技"},
{"en": "Remember to log out the system when you leave.", "zh": "離開時記得登出系統。", "cat": "科技"},
{"en": "I forgot my pin, so I had to reset a password.", "zh": "我忘了密碼，所以我必須重設密碼。", "cat": "科技"},
{"en": "The antivirus software is scanning for a virus.", "zh": "防毒軟體正在掃描病毒。", "cat": "科技"},
{"en": "I decided to block the annoying user.", "zh": "我決定封鎖這個煩人的使用者。", "cat": "科技"},
{"en": "She deleted a message by mistake.", "zh": "她不小心刪除了一條訊息。", "cat": "科技"},
{"en": "Many people shared the post on Facebook.", "zh": "許多人在 Facebook 上分享了這篇貼文。", "cat": "科技"},
{"en": "He is just browsing a page without reading it.", "zh": "他只是在瀏覽網頁而沒有閱讀它。", "cat": "科技"},
{"en": "Try to search a keyword to find it quickly.", "zh": "試著搜尋關鍵字以快速找到它。", "cat": "科技"},
{"en": "Let's just chill out at home tonight.", "zh": "我們今晚就在家放鬆吧。", "cat": "俚語"},
{"en": "He loves to flex on someone with his new car.", "zh": "他喜歡用他的新車向某人炫耀。", "cat": "俚語"},
{"en": "Why did she ghost someone like him?", "zh": "她為什麼要對像他這樣的人神隱？", "cat": "俚語"},
{"en": "Don't act salty just because you lost.", "zh": "別因為輸了就惱羞成怒。", "cat": "俚語"},
{"en": "That guy standing there looks shady.", "zh": "站在那邊的那個人看起來可疑。", "cat": "俚語"},
{"en": "The party last night was totally lit.", "zh": "昨晚的派對超讚的。", "cat": "俚語"},
{"en": "That song sounds dope, who sings it?", "zh": "那首歌聽起來很酷，誰唱的？", "cat": "俚語"},
{"en": "Michael Jordan is the goat in basketball.", "zh": "麥可喬丹是籃球界史上最棒的。", "cat": "俚語"},
{"en": "I always feel cringe when I watch this video.", "zh": "我看這部影片時總覺得很尷尬。", "cat": "俚語"},
{"en": "If you ask me if I can do it, you bet.", "zh": "如果你問我能不能做到，當然沒問題。", "cat": "俚語"},
{"en": "We should hang out this weekend.", "zh": "我們這個週末應該出去玩。", "cat": "俚語"},
{"en": "Come on, spill the tea about what happened.", "zh": "快點，八卦一下發生了什麼事。", "cat": "俚語"},
{"en": "I think I might catch feelings for her.", "zh": "我想我可能對她動情了。", "cat": "俚語"},
{"en": "I lowkey want to stay home today.", "zh": "我今天暗自想待在家裡。", "cat": "俚語"},
{"en": "She highkey loves that new movie.", "zh": "她高調喜愛那部新電影。", "cat": "俚語"},
{"en": "This burger is the best, no cap.", "zh": "這漢堡是最棒的，不蓋你。", "cat": "俚語"},
{"en": "She slayed it at the performance yesterday.", "zh": "她昨天在表演中表現出色。", "cat": "俚語"},
{"en": "I'm totally vibing with this new track.", "zh": "我完全和這首新歌很合拍。", "cat": "俚語"},
{"en": "He is totally simping for that streamer.", "zh": "他完全在對那個實況主過度討好。", "cat": "俚語"},
{"en": "I like to snack on chips while watching TV.", "zh": "我喜歡邊看電視邊吃零食。", "cat": "俚語"},
{"en": "This pizza is bussin, you have to try it.", "zh": "這披薩超好吃，你必須試試。", "cat": "俚語"},
{"en": "That guy acting weird is a bit sus.", "zh": "那個舉止怪異的傢伙有點可疑。", "cat": "俚語"},
{"en": "Don't be a clout chaser, just be yourself.", "zh": "別當個愛蹭熱度的人，做你自己。", "cat": "俚語"},
{"en": "His outfit is amazing, definite drip check passed.", "zh": "他的穿搭太棒了，絕對通過了穿搭檢查。", "cat": "俚語"},
{"en": "When I saw the price tag, I was like, big yikes.", "zh": "當我看到標價時，我心想，糟糕。", "cat": "俚語"},
{"en": "Sometimes you just have to take the L.", "zh": "有時候你就是得認輸。", "cat": "俚語"},
{"en": "You want me to finish this? Bet on it.", "zh": "你想讓我完成這個？包在我身上。", "cat": "俚語"},
{"en": "They tried to hype up the crowd before the game.", "zh": "他們試圖在比賽前炒熱觀眾的氣氛。", "cat": "俚語"},
{"en": "You and your best friend are squad goals.", "zh": "你和你的死黨真是死黨典範。", "cat": "俚語"},
{"en": "I can't believe she threw shade at me in public.", "zh": "我不敢相信她竟然在公開場合暗諷我。", "cat": "俚語"},
{"en": "I feel anxious before big exams.", "zh": "大考前我感到焦慮。", "cat": "情緒"},
{"en": "She was thrilled to hear the good news.", "zh": "聽到好消息她非常興奮。", "cat": "情緒"},
{"en": "He gets depressed during the winter.", "zh": "他在冬天會變得沮喪。", "cat": "情緒"},
{"en": "I am grateful for your help.", "zh": "我對你的幫助很感激。", "cat": "情緒"},
{"en": "It's normal to feel frustrated when learning.", "zh": "學習時感到挫折是正常的。", "cat": "情緒"},
{"en": "I feel overwhelmed by all this work.", "zh": "這麼多工作讓我感到不知所措。", "cat": "情緒"},
{"en": "I felt relieved after finishing the project.", "zh": "完成專案後我感到鬆了一口氣。", "cat": "情緒"},
{"en": "She is jealous of her sister's success.", "zh": "她嫉妒她姐姐的成功。", "cat": "情緒"},
{"en": "He was furious at the mistake.", "zh": "他對這個錯誤感到狂怒。", "cat": "情緒"},
{"en": "We should be sympathetic to those in need.", "zh": "我們應該對需要幫助的人有同情心。", "cat": "情緒"},
{"en": "It's healthy to express anger appropriately.", "zh": "適當地表達憤怒是健康的。", "cat": "情緒"},
{"en": "He tried to hide his emotions from everyone.", "zh": "他試圖向所有人隱藏他的情緒。", "cat": "情緒"},
{"en": "You need to learn to control your temper.", "zh": "你需要學會控製你的脾氣。", "cat": "情緒"},
{"en": "She burst into tears when she saw him.", "zh": "當她看到他時，她突然大哭起來。", "cat": "情緒"},
{"en": "He smiled happily when he saw the puppy.", "zh": "當他看到小狗時，他開心地笑了。", "cat": "情緒"},
{"en": "The bad weather makes me feel miserable.", "zh": "壞天氣讓我感到悲慘。", "cat": "情緒"},
{"en": "I am terrified of spiders.", "zh": "我對蜘蛛感到恐懼。", "cat": "情緒"},
{"en": "I felt embarrassed when I tripped over.", "zh": "當我絆倒時，我感到很尷尬。", "cat": "情緒"},
{"en": "I am so proud of your achievements.", "zh": "我為你的成就感到非常驕傲。", "cat": "情緒"},
{"en": "He feels guilty for breaking the vase.", "zh": "他為打破花瓶感到內疚。", "cat": "情緒"},
{"en": "Let's try to cheer him up with some ice cream.", "zh": "我們試著用冰淇淋讓他振作起來吧。", "cat": "情緒"},
{"en": "Please calm down and tell me what happened.", "zh": "請冷靜下來，告訴我發生了什麼事。", "cat": "情緒"},
{"en": "Don't freak out, it's just a small bug.", "zh": "別嚇壞了，這只是一隻小蟲子。", "cat": "情緒"},
{"en": "I am losing patience with this slow computer.", "zh": "我對這台慢電腦失去耐心了。", "cat": "情緒"},
{"en": "Try to stay positive even in tough times.", "zh": "即使在艱難時期也要盡量保持正面。", "cat": "情緒"},
{"en": "She feels lonely living in a new city.", "zh": "住在一個新城市讓她感到孤單。", "cat": "情緒"},
{"en": "I was surprised by his sudden visit.", "zh": "我對他的突然來訪感到驚訝。", "cat": "情緒"},
{"en": "We feel disappointed with the movie.", "zh": "我們對這部電影感到失望。", "cat": "情緒"},
{"en": "I am confused about the instructions.", "zh": "我對這些指示感到困惑。", "cat": "情緒"},
{"en": "After a long day of work, I feel exhausted.", "zh": "經過漫長的一天工作後，我感到筋疲力盡。", "cat": "情緒"},
{"en": "Our team hopes to win the tournament.", "zh": "我們的球隊希望贏得錦標賽。", "cat": "運動"},
{"en": "It takes years to train a professional athlete.", "zh": "訓練一名職業運動員需要多年的時間。", "cat": "運動"},
{"en": "The city is planning to build a new stadium.", "zh": "該市正計畫建造一座新的體育場。", "cat": "運動"},
{"en": "They won the championship last year.", "zh": "他們去年贏得了冠軍賽。", "cat": "運動"},
{"en": "Don't argue with the referee during the game.", "zh": "比賽中不要與裁判爭論。", "cat": "運動"},
{"en": "You should always listen to your coach.", "zh": "你應該總是聽教練的話。", "cat": "運動"},
{"en": "They need to play better defense.", "zh": "他們需要打出更好的防守。", "cat": "運動"},
{"en": "The offense was struggling to score.", "zh": "進攻方正努力得分。", "cat": "運動"},
{"en": "The player had to pay a penalty for the foul.", "zh": "該球員因犯規不得不受罰則。", "cat": "運動"},
{"en": "He tackled the player to stop the play.", "zh": "他擒抱了該球員以停止進攻。", "cat": "運動"},
{"en": "Messi scored a brilliant goal.", "zh": "梅西進了一個精彩的球。", "cat": "運動"},
{"en": "She broke the world record in swimming.", "zh": "她打破了游泳世界紀錄。", "cat": "運動"},
{"en": "I decided to join the school basketball team.", "zh": "我決定加入學校籃球隊。", "cat": "運動"},
{"en": "Always warm up before doing intense exercise.", "zh": "做劇烈運動前務必熱身。", "cat": "運動"},
{"en": "He works out at the gym three times a week.", "zh": "他每週在健身房健身三次。", "cat": "運動"},
{"en": "She lifts weights to build her strength.", "zh": "她舉重來增強力量。", "cat": "運動"},
{"en": "Running a marathon requires a lot of endurance.", "zh": "跑馬拉松需要很大的耐力。", "cat": "運動"},
{"en": "Kids love to play soccer in the park.", "zh": "孩子們喜歡在公園裡踢足球。", "cat": "運動"},
{"en": "He can shoot a basketball from far away.", "zh": "他能從很遠的地方投籃。", "cat": "運動"},
{"en": "The batter hit a baseball over the fence.", "zh": "打擊者把棒球擊出了全壘打牆外。", "cat": "運動"},
{"en": "I swim 20 laps every morning.", "zh": "我每天早上游 20 趟。", "cat": "運動"},
{"en": "We rode bicycles around the lake.", "zh": "我們騎腳踏車繞著湖轉。", "cat": "運動"},
{"en": "Doing yoga helps me stay flexible.", "zh": "做瑜伽幫助我保持柔軟。", "cat": "運動"},
{"en": "Don't forget to stretch your muscles after a run.", "zh": "跑步後別忘了伸展肌肉。", "cat": "運動"},
{"en": "He got injured during the football match.", "zh": "他在足球比賽中受傷了。", "cat": "運動"},
{"en": "It took him months to recover from the injury.", "zh": "他花了幾個月的時間才從受傷中恢復過來。", "cat": "運動"},
{"en": "The fans cheered for their favorite team.", "zh": "球迷們為他們最喜歡的球隊歡呼。", "cat": "運動"},
{"en": "We watched a thrilling tennis match yesterday.", "zh": "我們昨天看了一場激動人心的網球比賽。", "cat": "運動"},
{"en": "The referee blew the whistle to end the game.", "zh": "裁判吹哨結束了比賽。", "cat": "運動"},
{"en": "Throw the ball to me!", "zh": "把球丟給我！", "cat": "運動"},
{"en": "This store offers a 20% discount today.", "zh": "這家店今天提供 8 折優惠。", "cat": "購物"},
{"en": "Please keep the receipt for your records.", "zh": "請保留收據以供紀錄。", "cat": "購物"},
{"en": "If it's broken, you can ask for a refund.", "zh": "如果壞了，你可以要求退款。", "cat": "購物"},
{"en": "I paid the cashier and left the store.", "zh": "我付錢給收銀員後就離開了商店。", "cat": "購物"},
{"en": "She was pushing a shopping cart in the supermarket.", "zh": "她正在超市裡推著購物車。", "cat": "購物"},
{"en": "We walked down the aisle to find the milk.", "zh": "我們走過走道去尋找牛奶。", "cat": "購物"},
{"en": "I found a real bargain at the flea market.", "zh": "我在跳蚤市場找到了一個真正的特價品。", "cat": "購物"},
{"en": "Can I use this voucher for my purchase?", "zh": "我可以使用這張折價券來購買嗎？", "cat": "購物"},
{"en": "It costs extra to extend the warranty.", "zh": "延長保固需要額外付費。", "cat": "購物"},
{"en": "Let me check the inventory to see if we have more.", "zh": "讓我檢查庫存看看我們是否還有更多。", "cat": "購物"},
{"en": "You can try on clothes in the fitting room.", "zh": "你可以在試衣間試穿衣服。", "cat": "購物"},
{"en": "We had to stand in line for 15 minutes to pay.", "zh": "我們必須排隊 15 分鐘才能付款。", "cat": "購物"},
{"en": "Just swipe your card here.", "zh": "只要在這裡刷卡即可。", "cat": "購物"},
{"en": "Do you want to pay in cash or by credit card?", "zh": "你想付現金還是用信用卡付款？", "cat": "購物"},
{"en": "The cashier scanned the barcode on the item.", "zh": "收銀員掃描了商品上的條碼。", "cat": "購物"},
{"en": "It's smart to compare prices before buying.", "zh": "購買前比較價格是明智的。", "cat": "購物"},
{"en": "I need to return this item because it's too small.", "zh": "我需要退回這個商品因為它太小了。", "cat": "購物"},
{"en": "Can I exchange this item for a different color?", "zh": "我可以把這個商品換成別的顏色嗎？", "cat": "購物"},
{"en": "Many people prefer to shop online nowadays.", "zh": "現在許多人喜歡網購。", "cat": "購物"},
{"en": "I added the shoes to my online shopping cart.", "zh": "我把這雙鞋加入了我的網購購物車。", "cat": "購物"},
{"en": "I will place an order for the books tomorrow.", "zh": "我明天會下訂單買這些書。", "cat": "購物"},
{"en": "You can track your package on our website.", "zh": "你可以在我們的網站上追蹤你的包裹。", "cat": "購物"},
{"en": "I received a delivery from Amazon this morning.", "zh": "我今天早上收到了一個來自亞馬遜的快遞。", "cat": "購物"},
{"en": "He wrote a bad review for the product.", "zh": "他為這個產品寫了一篇差評。", "cat": "購物"},
{"en": "She was browsing a catalog for new furniture.", "zh": "她正在瀏覽一本新家具的目錄。", "cat": "購物"},
{"en": "We are not buying anything, just going window shopping.", "zh": "我們不買任何東西，只是逛街看看。", "cat": "購物"},
{"en": "Buying in bulk can save you a lot of money.", "zh": "大量購買可以為你省下很多錢。", "cat": "購物"},
{"en": "I am always looking for a good deal.", "zh": "我總是在尋找好優惠。", "cat": "購物"},
{"en": "Please proceed to the checkout counter.", "zh": "請前往結帳櫃檯。", "cat": "購物"},
{"en": "Do you need gift wrap for this present?", "zh": "你需要為這份禮物做禮物包裝嗎？", "cat": "購物"},
{"en": "Traveling can broaden your horizons.", "zh": "旅行可以開拓你的視野。", "cat": "雅思常見"},
{"en": "Students go to university to acquire knowledge.", "zh": "學生上大學是為了獲得知識。", "cat": "雅思常見"},
{"en": "He worked hard to overcome many obstacles.", "zh": "他努力工作以克服許多障礙。", "cat": "雅思常見"},
{"en": "Technology plays a crucial role in our lives.", "zh": "科技在我們的生活中扮演著關鍵角色。", "cat": "雅思常見"},
{"en": "Pollution has a negative impact on health.", "zh": "污染對健康有負面影響。", "cat": "雅思常見"},
{"en": "She made a significant contribution to science.", "zh": "她對科學做出了重大貢獻。", "cat": "雅思常見"},
{"en": "We can draw a conclusion from these facts.", "zh": "我們可以從這些事實中得出結論。", "cat": "雅思常見"},
{"en": "You must take his lack of experience into consideration.", "zh": "你必須把他的經驗不足考慮進去。", "cat": "雅思常見"},
{"en": "Global warming poses a threat to our planet.", "zh": "全球暖化對我們的星球構成威脅。", "cat": "雅思常見"},
{"en": "The campaign aims to raise awareness of mental health.", "zh": "該活動旨在提高人們對心理健康的意識。", "cat": "雅思常見"},
{"en": "Governments need to tackle the issue of poverty.", "zh": "政府需要處理貧困問題。", "cat": "雅思常見"},
{"en": "The committee failed to reach a consensus.", "zh": "委員會未能達成共識。", "cat": "雅思常見"},
{"en": "Many young people face a dilemma when choosing a job.", "zh": "許多年輕人在選擇工作時面臨困境。", "cat": "雅思常見"},
{"en": "We need to implement a strategy to reduce waste.", "zh": "我們需要實施一項策略來減少浪費。", "cat": "雅思常見"},
{"en": "It's important to maintain a balance between work and life.", "zh": "保持工作與生活之間的平衡很重要。", "cat": "雅思常見"},
{"en": "Schools should foster creativity in children.", "zh": "學校應該培養孩子們的創造力。", "cat": "雅思常見"},
{"en": "Exercise is a good way to relieve stress.", "zh": "運動是減輕壓力的好方法。", "cat": "雅思常見"},
{"en": "A good diet can enhance athletic performance.", "zh": "良好的飲食可以提升運動表現。", "cat": "雅思常見"},
{"en": "She wants to pursue a career in medicine.", "zh": "她想在醫學領域追求事業。", "cat": "雅思常見"},
{"en": "The supply is not enough to meet the demand.", "zh": "供應不足以滿足需求。", "cat": "雅思常見"},
{"en": "The storm caused severe damage to the city.", "zh": "這場風暴對城市造成了嚴重的損害。", "cat": "雅思常見"},
{"en": "We all have a duty to protect the environment.", "zh": "我們都有責任保護環境。", "cat": "雅思常見"},
{"en": "Factories must reduce their carbon emissions.", "zh": "工廠必須減少其碳排放。", "cat": "雅思常見"},
{"en": "It is vital to preserve our cultural heritage.", "zh": "保存我們的文化遺產至關重要。", "cat": "雅思常見"},
{"en": "The law promotes gender equality in the workplace.", "zh": "該法律促進了工作場所的性別平等。", "cat": "雅思常見"},
{"en": "Learning a second language can help you gain an advantage.", "zh": "學習第二語言可以幫助你取得優勢。", "cat": "雅思常見"},
{"en": "If you break the rules, you will suffer the consequences.", "zh": "如果你違反規定，你將承擔後果。", "cat": "雅思常見"},
{"en": "The government should allocate more resources to education.", "zh": "政府應該分配更多資源給教育。", "cat": "雅思常見"},
{"en": "Scientists conducted an experiment to test the theory.", "zh": "科學家們進行了一項實驗來檢驗這個理論。", "cat": "雅思常見"},
{"en": "We must evaluate the effectiveness of this program.", "zh": "我們必須評估這個計畫的有效性。", "cat": "雅思常見"},
{"en": "Let's schedule a meeting for next Monday.", "zh": "我們安排下週一開會吧。", "cat": "職場溝通"},
{"en": "I will send an email with the details.", "zh": "我會寄一封包含詳細資訊的電子郵件。", "cat": "職場溝通"},
{"en": "Please reply to my message as soon as possible.", "zh": "請盡快回覆我的訊息。", "cat": "職場溝通"},
{"en": "We need to discuss the new project tomorrow.", "zh": "我們明天需要討論新專案。", "cat": "職場溝通"},
{"en": "Can you give me an update on your progress?", "zh": "你能給我你的進度更新嗎？", "cat": "職場溝通"},
{"en": "I'd like to clarify a point regarding the budget.", "zh": "我想澄清一點關於預算的問題。", "cat": "職場溝通"},
{"en": "I am writing to request more information about the product.", "zh": "我寫信是為了索取關於該產品的更多資訊。", "cat": "職場溝通"},
{"en": "I forgot to attach the file in my last email.", "zh": "我忘了在上一封電子郵件中附加檔案。", "cat": "職場溝通"},
{"en": "I will forward the email to our manager.", "zh": "我會將這封電子郵件轉寄給我們的經理。", "cat": "職場溝通"},
{"en": "Please cc me when you reply to the client.", "zh": "當你回覆客戶時，請副本抄送給我。", "cat": "職場溝通"},
{"en": "We need to set an agenda before the meeting starts.", "zh": "我們需要在會議開始前設定議程。", "cat": "職場溝通"},
{"en": "Who is going to take minutes today?", "zh": "今天誰來做會議紀錄？", "cat": "職場溝通"},
{"en": "Let's wrap up the meeting since we are out of time.", "zh": "既然我們沒時間了，就結束會議吧。", "cat": "職場溝通"},
{"en": "He is nervous about giving a presentation to the board.", "zh": "他對向董事會做簡報感到緊張。", "cat": "職場溝通"},
{"en": "The customer service team handles complaints professionally.", "zh": "客服團隊專業地處理客訴。", "cat": "職場溝通"},
{"en": "It's common to negotiate a salary during an interview.", "zh": "在面試時談判薪水是很常見的。", "cat": "職場溝通"},
{"en": "She decided to ask for a raise after a year.", "zh": "她決定在一年後要求加薪。", "cat": "職場溝通"},
{"en": "I need to take a day off to visit my family.", "zh": "我需要請一天假去拜訪我的家人。", "cat": "職場溝通"},
{"en": "He called in sick because he had a fever.", "zh": "他打電話請病假因為他發燒了。", "cat": "職場溝通"},
{"en": "We have to work overtime to meet the deadline.", "zh": "我們必須加班以趕上期限。", "cat": "職場溝通"},
{"en": "If you miss the deadline, there will be a penalty.", "zh": "如果你錯過期限，將會有罰款。", "cat": "職場溝通"},
{"en": "We had to postpone the meeting to next week.", "zh": "我們不得不將會議延遲到下週。", "cat": "職場溝通"},
{"en": "The company canceled the event due to rain.", "zh": "由於下雨，公司取消了活動。", "cat": "職場溝通"},
{"en": "Please confirm your schedule with my assistant.", "zh": "請與我的助理確認您的行程。", "cat": "職場溝通"},
{"en": "Managers should give regular feedback to employees.", "zh": "經理應該定期給予員工回饋。", "cat": "職場溝通"},
{"en": "He is good at receiving constructive criticism.", "zh": "他擅長接受建設性批評。", "cat": "職場溝通"},
{"en": "Let's brainstorm some ideas for the marketing campaign.", "zh": "讓我們為行銷活動腦力激盪一些想法。", "cat": "職場溝通"},
{"en": "The boss assigned a new task to me.", "zh": "老闆指派了一項新任務給我。", "cat": "職場溝通"},
{"en": "I will report my progress at the end of the week.", "zh": "我將在本週末報告我的進度。", "cat": "職場溝通"},
{"en": "Please sign this document before you leave.", "zh": "請在離開前簽署這份文件。", "cat": "職場溝通"},
{"en": "Hey, how are you doing today?", "zh": "嘿，你今天好嗎？", "cat": "日常對話"},
{"en": "It's really nice to meet you.", "zh": "真的很高興認識你。", "cat": "日常對話"},
{"en": "I have to go now, see you later.", "zh": "我現在得走了，待會見。", "cat": "日常對話"},
{"en": "Thanks for your help, have a good day.", "zh": "謝謝你的幫忙，祝你有美好的一天。", "cat": "日常對話"},
{"en": "Hey man, what's up?", "zh": "嘿老兄，最近好嗎？", "cat": "日常對話"},
{"en": "Excuse me, where is the restroom?", "zh": "不好意思，請問洗手間在哪裡？", "cat": "日常對話"},
{"en": "I am sorry for being late.", "zh": "我很抱歉遲到了。", "cat": "日常對話"},
{"en": "Thank you so much for the gift.", "zh": "非常感謝你的禮物。", "cat": "日常對話"},
{"en": "You are welcome to visit us anytime.", "zh": "歡迎你隨時來拜訪我們。", "cat": "日常對話"},
{"en": "No problem, I am glad to help.", "zh": "沒問題，我很高興能幫忙。", "cat": "日常對話"},
{"en": "I honestly don't know the answer.", "zh": "我老實說不知道答案。", "cat": "日常對話"},
{"en": "Is it going to rain? I think so.", "zh": "會下雨嗎？我也這麼認為。", "cat": "日常對話"},
{"en": "I completely agree with you on this point.", "zh": "在這一點上我完全同意你的看法。", "cat": "日常對話"},
{"en": "A beach vacation? That sounds great!", "zh": "海灘度假？聽起來很棒！", "cat": "日常對話"},
{"en": "Let me see if I can find it.", "zh": "讓我看看能不能找到它。", "cat": "日常對話"},
{"en": "Just a moment, please hold the line.", "zh": "稍等一下，請不要掛斷。", "cat": "日常對話"},
{"en": "Could you help me carry this box?", "zh": "你能幫我搬這個箱子嗎？", "cat": "日常對話"},
{"en": "You have an accent, where are you from?", "zh": "你有口音，你來自哪裡？", "cat": "日常對話"},
{"en": "I'm curious, what do you do for a living?", "zh": "我很好奇，你是做什麼工作的？", "cat": "日常對話"},
{"en": "If you don't mind me asking, how old are you?", "zh": "如果你不介意我問的話，你幾歲？", "cat": "日常對話"},
{"en": "Excuse me, do you know what time it is?", "zh": "不好意思，你知道現在幾點嗎？", "cat": "日常對話"},
{"en": "I like this shirt, how much is it?", "zh": "我喜歡這件襯衫，這個多少錢？", "cat": "日常對話"},
{"en": "Let's grab some food, I am really hungry.", "zh": "我們去吃點東西吧，我真的很餓。", "cat": "日常對話"},
{"en": "I've been working all day, I am so tired.", "zh": "我工作了一整天，我好累。", "cat": "日常對話"},
{"en": "Can you show me the map? I think I am lost.", "zh": "你能給我看地圖嗎？我想我迷路了。", "cat": "日常對話"},
{"en": "I didn't catch that, can you repeat that please?", "zh": "我沒聽清楚，能請你再說一次嗎？", "cat": "日常對話"},
{"en": "I'm sorry, I don't understand what you mean.", "zh": "對不起，我不懂你的意思。", "cat": "日常對話"},
{"en": "Could you please speak slowly?", "zh": "能請你說慢一點嗎？", "cat": "日常對話"},
{"en": "I saw this word, what does this mean?", "zh": "我看到這個字，這是什麼意思？", "cat": "日常對話"},
{"en": "Your name is interesting, how to spell it?", "zh": "你的名字很有趣，怎麼拼？", "cat": "日常對話"},

  {
    "en": "I need to buy a new laptop.",
    "zh": "\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "I need to buy a new phone.",
    "zh": "\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "I need to buy a new shirt.",
    "zh": "\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "I need to buy a new bag.",
    "zh": "\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "I need to buy a new monitor.",
    "zh": "\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u87a2\u5e55\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "I need to buy a new mouse.",
    "zh": "\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u6ed1\u9f20\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "I need to buy a new keyboard.",
    "zh": "\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u9375\u76e4\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "I need to buy a new watch.",
    "zh": "\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u9336\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "I will travel to Japan.",
    "zh": "\u6211\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "I will travel to Korea.",
    "zh": "\u6211\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "I will travel to America.",
    "zh": "\u6211\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "I will travel to Europe.",
    "zh": "\u6211\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "I will travel to Australia.",
    "zh": "\u6211\u5c07\u6703\u53bb\u6fb3\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "I will travel to Canada.",
    "zh": "\u6211\u5c07\u6703\u53bb\u52a0\u62ff\u5927\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "I will travel to Thailand.",
    "zh": "\u6211\u5c07\u6703\u53bb\u6cf0\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "I will travel to Singapore.",
    "zh": "\u6211\u5c07\u6703\u53bb\u65b0\u52a0\u5761\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "I have a meeting with the manager.",
    "zh": "\u6211\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "I have a meeting with the client.",
    "zh": "\u6211\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "I have a meeting with the team.",
    "zh": "\u6211\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "I have a meeting with the boss.",
    "zh": "\u6211\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "I have a meeting with the investor.",
    "zh": "\u6211\u8981\u548c...\u958b\u6703\u6295\u8cc7\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "I have a meeting with the partner.",
    "zh": "\u6211\u8981\u548c...\u958b\u6703\u5408\u5925\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "I have a meeting with the candidate.",
    "zh": "\u6211\u8981\u548c...\u958b\u6703\u61c9\u5fb5\u8005\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "I have a meeting with the director.",
    "zh": "\u6211\u8981\u548c...\u958b\u6703\u7e3d\u76e3\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "I feel very happy.",
    "zh": "\u6211\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "I feel very sad.",
    "zh": "\u6211\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "I feel very angry.",
    "zh": "\u6211\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "I feel very nervous.",
    "zh": "\u6211\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "I feel very excited.",
    "zh": "\u6211\u89ba\u5f97\u975e\u5e38\u8208\u596e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "I feel very tired.",
    "zh": "\u6211\u89ba\u5f97\u975e\u5e38\u75b2\u5026\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "I feel very bored.",
    "zh": "\u6211\u89ba\u5f97\u975e\u5e38\u7121\u804a\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "I feel very anxious.",
    "zh": "\u6211\u89ba\u5f97\u975e\u5e38\u7126\u616e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "I went to the hospital because of a headache.",
    "zh": "\u6211\u53bb\u91ab\u9662\u56e0\u70ba\u982d\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "I went to the hospital because of a fever.",
    "zh": "\u6211\u53bb\u91ab\u9662\u56e0\u70ba\u767c\u71d2\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "I went to the hospital because of a cold.",
    "zh": "\u6211\u53bb\u91ab\u9662\u56e0\u70ba\u611f\u5192\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "I went to the hospital because of a stomachache.",
    "zh": "\u6211\u53bb\u91ab\u9662\u56e0\u70ba\u80c3\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "I went to the hospital because of a cough.",
    "zh": "\u6211\u53bb\u91ab\u9662\u56e0\u70ba\u54b3\u55fd\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "I went to the hospital because of a sore throat.",
    "zh": "\u6211\u53bb\u91ab\u9662\u56e0\u70ba\u5589\u56a8\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "I went to the hospital because of a toothache.",
    "zh": "\u6211\u53bb\u91ab\u9662\u56e0\u70ba\u7259\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "I went to the hospital because of a backache.",
    "zh": "\u6211\u53bb\u91ab\u9662\u56e0\u70ba\u80cc\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "I want to learn how to play basketball.",
    "zh": "\u6211\u60f3\u5b78\u5982\u4f55\u6253\u7c43\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "I want to learn how to play baseball.",
    "zh": "\u6211\u60f3\u5b78\u5982\u4f55\u6253\u68d2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "I want to learn how to play tennis.",
    "zh": "\u6211\u60f3\u5b78\u5982\u4f55\u6253\u7db2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "I want to learn how to play soccer.",
    "zh": "\u6211\u60f3\u5b78\u5982\u4f55\u6253\u8db3\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "I want to learn how to play golf.",
    "zh": "\u6211\u60f3\u5b78\u5982\u4f55\u6253\u9ad8\u723e\u592b\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "I want to learn how to play volleyball.",
    "zh": "\u6211\u60f3\u5b78\u5982\u4f55\u6253\u6392\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "I want to learn how to play badminton.",
    "zh": "\u6211\u60f3\u5b78\u5982\u4f55\u6253\u7fbd\u6bdb\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "I want to learn how to play table tennis.",
    "zh": "\u6211\u60f3\u5b78\u5982\u4f55\u6253\u684c\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "I downloaded a new app.",
    "zh": "\u6211\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u61c9\u7528\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "I downloaded a new software.",
    "zh": "\u6211\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u8edf\u9ad4\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "I downloaded a new game.",
    "zh": "\u6211\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u904a\u6232\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "I downloaded a new update.",
    "zh": "\u6211\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u66f4\u65b0\u6a94\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "I downloaded a new program.",
    "zh": "\u6211\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "I downloaded a new browser.",
    "zh": "\u6211\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u700f\u89bd\u5668\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "I downloaded a new driver.",
    "zh": "\u6211\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u9a45\u52d5\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "I downloaded a new plugin.",
    "zh": "\u6211\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u64f4\u5145\u529f\u80fd\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "I have to prepare for the exam.",
    "zh": "\u6211\u5fc5\u9808\u6e96\u5099\u8003\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "I have to prepare for the interview.",
    "zh": "\u6211\u5fc5\u9808\u6e96\u5099\u9762\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "I have to prepare for the presentation.",
    "zh": "\u6211\u5fc5\u9808\u6e96\u5099\u7c21\u5831\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "I have to prepare for the test.",
    "zh": "\u6211\u5fc5\u9808\u6e96\u5099\u6e2c\u9a57\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "I have to prepare for the project.",
    "zh": "\u6211\u5fc5\u9808\u6e96\u5099\u5c08\u6848\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "I have to prepare for the negotiation.",
    "zh": "\u6211\u5fc5\u9808\u6e96\u5099\u8ac7\u5224\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "I have to prepare for the audit.",
    "zh": "\u6211\u5fc5\u9808\u6e96\u5099\u5be9\u8a08\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "I have to prepare for the evaluation.",
    "zh": "\u6211\u5fc5\u9808\u6e96\u5099\u8a55\u4f30\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "You need to buy a new laptop.",
    "zh": "\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "You need to buy a new phone.",
    "zh": "\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "You need to buy a new shirt.",
    "zh": "\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "You need to buy a new bag.",
    "zh": "\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "You need to buy a new monitor.",
    "zh": "\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u87a2\u5e55\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "You need to buy a new mouse.",
    "zh": "\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u6ed1\u9f20\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "You need to buy a new keyboard.",
    "zh": "\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u9375\u76e4\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "You need to buy a new watch.",
    "zh": "\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u9336\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "You will travel to Japan.",
    "zh": "\u4f60\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "You will travel to Korea.",
    "zh": "\u4f60\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "You will travel to America.",
    "zh": "\u4f60\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "You will travel to Europe.",
    "zh": "\u4f60\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "You will travel to Australia.",
    "zh": "\u4f60\u5c07\u6703\u53bb\u6fb3\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "You will travel to Canada.",
    "zh": "\u4f60\u5c07\u6703\u53bb\u52a0\u62ff\u5927\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "You will travel to Thailand.",
    "zh": "\u4f60\u5c07\u6703\u53bb\u6cf0\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "You will travel to Singapore.",
    "zh": "\u4f60\u5c07\u6703\u53bb\u65b0\u52a0\u5761\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "You have a meeting with the manager.",
    "zh": "\u4f60\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "You have a meeting with the client.",
    "zh": "\u4f60\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "You have a meeting with the team.",
    "zh": "\u4f60\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "You have a meeting with the boss.",
    "zh": "\u4f60\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "You have a meeting with the investor.",
    "zh": "\u4f60\u8981\u548c...\u958b\u6703\u6295\u8cc7\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "You have a meeting with the partner.",
    "zh": "\u4f60\u8981\u548c...\u958b\u6703\u5408\u5925\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "You have a meeting with the candidate.",
    "zh": "\u4f60\u8981\u548c...\u958b\u6703\u61c9\u5fb5\u8005\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "You have a meeting with the director.",
    "zh": "\u4f60\u8981\u548c...\u958b\u6703\u7e3d\u76e3\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "You feel very happy.",
    "zh": "\u4f60\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "You feel very sad.",
    "zh": "\u4f60\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "You feel very angry.",
    "zh": "\u4f60\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "You feel very nervous.",
    "zh": "\u4f60\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "You feel very excited.",
    "zh": "\u4f60\u89ba\u5f97\u975e\u5e38\u8208\u596e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "You feel very tired.",
    "zh": "\u4f60\u89ba\u5f97\u975e\u5e38\u75b2\u5026\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "You feel very bored.",
    "zh": "\u4f60\u89ba\u5f97\u975e\u5e38\u7121\u804a\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "You feel very anxious.",
    "zh": "\u4f60\u89ba\u5f97\u975e\u5e38\u7126\u616e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "You went to the hospital because of a headache.",
    "zh": "\u4f60\u53bb\u91ab\u9662\u56e0\u70ba\u982d\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "You went to the hospital because of a fever.",
    "zh": "\u4f60\u53bb\u91ab\u9662\u56e0\u70ba\u767c\u71d2\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "You went to the hospital because of a cold.",
    "zh": "\u4f60\u53bb\u91ab\u9662\u56e0\u70ba\u611f\u5192\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "You went to the hospital because of a stomachache.",
    "zh": "\u4f60\u53bb\u91ab\u9662\u56e0\u70ba\u80c3\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "You went to the hospital because of a cough.",
    "zh": "\u4f60\u53bb\u91ab\u9662\u56e0\u70ba\u54b3\u55fd\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "You went to the hospital because of a sore throat.",
    "zh": "\u4f60\u53bb\u91ab\u9662\u56e0\u70ba\u5589\u56a8\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "You went to the hospital because of a toothache.",
    "zh": "\u4f60\u53bb\u91ab\u9662\u56e0\u70ba\u7259\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "You went to the hospital because of a backache.",
    "zh": "\u4f60\u53bb\u91ab\u9662\u56e0\u70ba\u80cc\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "You want to learn how to play basketball.",
    "zh": "\u4f60\u60f3\u5b78\u5982\u4f55\u6253\u7c43\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "You want to learn how to play baseball.",
    "zh": "\u4f60\u60f3\u5b78\u5982\u4f55\u6253\u68d2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "You want to learn how to play tennis.",
    "zh": "\u4f60\u60f3\u5b78\u5982\u4f55\u6253\u7db2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "You want to learn how to play soccer.",
    "zh": "\u4f60\u60f3\u5b78\u5982\u4f55\u6253\u8db3\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "You want to learn how to play golf.",
    "zh": "\u4f60\u60f3\u5b78\u5982\u4f55\u6253\u9ad8\u723e\u592b\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "You want to learn how to play volleyball.",
    "zh": "\u4f60\u60f3\u5b78\u5982\u4f55\u6253\u6392\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "You want to learn how to play badminton.",
    "zh": "\u4f60\u60f3\u5b78\u5982\u4f55\u6253\u7fbd\u6bdb\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "You want to learn how to play table tennis.",
    "zh": "\u4f60\u60f3\u5b78\u5982\u4f55\u6253\u684c\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "You downloaded a new app.",
    "zh": "\u4f60\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u61c9\u7528\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "You downloaded a new software.",
    "zh": "\u4f60\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u8edf\u9ad4\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "You downloaded a new game.",
    "zh": "\u4f60\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u904a\u6232\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "You downloaded a new update.",
    "zh": "\u4f60\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u66f4\u65b0\u6a94\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "You downloaded a new program.",
    "zh": "\u4f60\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "You downloaded a new browser.",
    "zh": "\u4f60\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u700f\u89bd\u5668\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "You downloaded a new driver.",
    "zh": "\u4f60\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u9a45\u52d5\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "You downloaded a new plugin.",
    "zh": "\u4f60\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u64f4\u5145\u529f\u80fd\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "You have to prepare for the exam.",
    "zh": "\u4f60\u5fc5\u9808\u6e96\u5099\u8003\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "You have to prepare for the interview.",
    "zh": "\u4f60\u5fc5\u9808\u6e96\u5099\u9762\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "You have to prepare for the presentation.",
    "zh": "\u4f60\u5fc5\u9808\u6e96\u5099\u7c21\u5831\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "You have to prepare for the test.",
    "zh": "\u4f60\u5fc5\u9808\u6e96\u5099\u6e2c\u9a57\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "You have to prepare for the project.",
    "zh": "\u4f60\u5fc5\u9808\u6e96\u5099\u5c08\u6848\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "You have to prepare for the negotiation.",
    "zh": "\u4f60\u5fc5\u9808\u6e96\u5099\u8ac7\u5224\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "You have to prepare for the audit.",
    "zh": "\u4f60\u5fc5\u9808\u6e96\u5099\u5be9\u8a08\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "You have to prepare for the evaluation.",
    "zh": "\u4f60\u5fc5\u9808\u6e96\u5099\u8a55\u4f30\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "He need to buy a new laptop.",
    "zh": "\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "He need to buy a new phone.",
    "zh": "\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "He need to buy a new shirt.",
    "zh": "\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "He need to buy a new bag.",
    "zh": "\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "He need to buy a new monitor.",
    "zh": "\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u87a2\u5e55\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "He need to buy a new mouse.",
    "zh": "\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u6ed1\u9f20\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "He need to buy a new keyboard.",
    "zh": "\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u9375\u76e4\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "He need to buy a new watch.",
    "zh": "\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u9336\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "He will travel to Japan.",
    "zh": "\u4ed6\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "He will travel to Korea.",
    "zh": "\u4ed6\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "He will travel to America.",
    "zh": "\u4ed6\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "He will travel to Europe.",
    "zh": "\u4ed6\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "He will travel to Australia.",
    "zh": "\u4ed6\u5c07\u6703\u53bb\u6fb3\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "He will travel to Canada.",
    "zh": "\u4ed6\u5c07\u6703\u53bb\u52a0\u62ff\u5927\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "He will travel to Thailand.",
    "zh": "\u4ed6\u5c07\u6703\u53bb\u6cf0\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "He will travel to Singapore.",
    "zh": "\u4ed6\u5c07\u6703\u53bb\u65b0\u52a0\u5761\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "He have a meeting with the manager.",
    "zh": "\u4ed6\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "He have a meeting with the client.",
    "zh": "\u4ed6\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "He have a meeting with the team.",
    "zh": "\u4ed6\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "He have a meeting with the boss.",
    "zh": "\u4ed6\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "He have a meeting with the investor.",
    "zh": "\u4ed6\u8981\u548c...\u958b\u6703\u6295\u8cc7\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "He have a meeting with the partner.",
    "zh": "\u4ed6\u8981\u548c...\u958b\u6703\u5408\u5925\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "He have a meeting with the candidate.",
    "zh": "\u4ed6\u8981\u548c...\u958b\u6703\u61c9\u5fb5\u8005\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "He have a meeting with the director.",
    "zh": "\u4ed6\u8981\u548c...\u958b\u6703\u7e3d\u76e3\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "He feel very happy.",
    "zh": "\u4ed6\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "He feel very sad.",
    "zh": "\u4ed6\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "He feel very angry.",
    "zh": "\u4ed6\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "He feel very nervous.",
    "zh": "\u4ed6\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "He feel very excited.",
    "zh": "\u4ed6\u89ba\u5f97\u975e\u5e38\u8208\u596e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "He feel very tired.",
    "zh": "\u4ed6\u89ba\u5f97\u975e\u5e38\u75b2\u5026\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "He feel very bored.",
    "zh": "\u4ed6\u89ba\u5f97\u975e\u5e38\u7121\u804a\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "He feel very anxious.",
    "zh": "\u4ed6\u89ba\u5f97\u975e\u5e38\u7126\u616e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "He went to the hospital because of a headache.",
    "zh": "\u4ed6\u53bb\u91ab\u9662\u56e0\u70ba\u982d\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "He went to the hospital because of a fever.",
    "zh": "\u4ed6\u53bb\u91ab\u9662\u56e0\u70ba\u767c\u71d2\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "He went to the hospital because of a cold.",
    "zh": "\u4ed6\u53bb\u91ab\u9662\u56e0\u70ba\u611f\u5192\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "He went to the hospital because of a stomachache.",
    "zh": "\u4ed6\u53bb\u91ab\u9662\u56e0\u70ba\u80c3\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "He went to the hospital because of a cough.",
    "zh": "\u4ed6\u53bb\u91ab\u9662\u56e0\u70ba\u54b3\u55fd\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "He went to the hospital because of a sore throat.",
    "zh": "\u4ed6\u53bb\u91ab\u9662\u56e0\u70ba\u5589\u56a8\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "He went to the hospital because of a toothache.",
    "zh": "\u4ed6\u53bb\u91ab\u9662\u56e0\u70ba\u7259\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "He went to the hospital because of a backache.",
    "zh": "\u4ed6\u53bb\u91ab\u9662\u56e0\u70ba\u80cc\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "He want to learn how to play basketball.",
    "zh": "\u4ed6\u60f3\u5b78\u5982\u4f55\u6253\u7c43\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "He want to learn how to play baseball.",
    "zh": "\u4ed6\u60f3\u5b78\u5982\u4f55\u6253\u68d2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "He want to learn how to play tennis.",
    "zh": "\u4ed6\u60f3\u5b78\u5982\u4f55\u6253\u7db2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "He want to learn how to play soccer.",
    "zh": "\u4ed6\u60f3\u5b78\u5982\u4f55\u6253\u8db3\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "He want to learn how to play golf.",
    "zh": "\u4ed6\u60f3\u5b78\u5982\u4f55\u6253\u9ad8\u723e\u592b\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "He want to learn how to play volleyball.",
    "zh": "\u4ed6\u60f3\u5b78\u5982\u4f55\u6253\u6392\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "He want to learn how to play badminton.",
    "zh": "\u4ed6\u60f3\u5b78\u5982\u4f55\u6253\u7fbd\u6bdb\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "He want to learn how to play table tennis.",
    "zh": "\u4ed6\u60f3\u5b78\u5982\u4f55\u6253\u684c\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "He downloaded a new app.",
    "zh": "\u4ed6\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u61c9\u7528\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "He downloaded a new software.",
    "zh": "\u4ed6\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u8edf\u9ad4\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "He downloaded a new game.",
    "zh": "\u4ed6\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u904a\u6232\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "He downloaded a new update.",
    "zh": "\u4ed6\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u66f4\u65b0\u6a94\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "He downloaded a new program.",
    "zh": "\u4ed6\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "He downloaded a new browser.",
    "zh": "\u4ed6\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u700f\u89bd\u5668\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "He downloaded a new driver.",
    "zh": "\u4ed6\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u9a45\u52d5\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "He downloaded a new plugin.",
    "zh": "\u4ed6\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u64f4\u5145\u529f\u80fd\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "He have to prepare for the exam.",
    "zh": "\u4ed6\u5fc5\u9808\u6e96\u5099\u8003\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "He have to prepare for the interview.",
    "zh": "\u4ed6\u5fc5\u9808\u6e96\u5099\u9762\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "He have to prepare for the presentation.",
    "zh": "\u4ed6\u5fc5\u9808\u6e96\u5099\u7c21\u5831\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "He have to prepare for the test.",
    "zh": "\u4ed6\u5fc5\u9808\u6e96\u5099\u6e2c\u9a57\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "He have to prepare for the project.",
    "zh": "\u4ed6\u5fc5\u9808\u6e96\u5099\u5c08\u6848\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "He have to prepare for the negotiation.",
    "zh": "\u4ed6\u5fc5\u9808\u6e96\u5099\u8ac7\u5224\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "He have to prepare for the audit.",
    "zh": "\u4ed6\u5fc5\u9808\u6e96\u5099\u5be9\u8a08\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "He have to prepare for the evaluation.",
    "zh": "\u4ed6\u5fc5\u9808\u6e96\u5099\u8a55\u4f30\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "She need to buy a new laptop.",
    "zh": "\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "She need to buy a new phone.",
    "zh": "\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "She need to buy a new shirt.",
    "zh": "\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "She need to buy a new bag.",
    "zh": "\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "She need to buy a new monitor.",
    "zh": "\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u87a2\u5e55\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "She need to buy a new mouse.",
    "zh": "\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u6ed1\u9f20\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "She need to buy a new keyboard.",
    "zh": "\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u9375\u76e4\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "She need to buy a new watch.",
    "zh": "\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u9336\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "She will travel to Japan.",
    "zh": "\u5979\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "She will travel to Korea.",
    "zh": "\u5979\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "She will travel to America.",
    "zh": "\u5979\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "She will travel to Europe.",
    "zh": "\u5979\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "She will travel to Australia.",
    "zh": "\u5979\u5c07\u6703\u53bb\u6fb3\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "She will travel to Canada.",
    "zh": "\u5979\u5c07\u6703\u53bb\u52a0\u62ff\u5927\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "She will travel to Thailand.",
    "zh": "\u5979\u5c07\u6703\u53bb\u6cf0\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "She will travel to Singapore.",
    "zh": "\u5979\u5c07\u6703\u53bb\u65b0\u52a0\u5761\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "She have a meeting with the manager.",
    "zh": "\u5979\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "She have a meeting with the client.",
    "zh": "\u5979\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "She have a meeting with the team.",
    "zh": "\u5979\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "She have a meeting with the boss.",
    "zh": "\u5979\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "She have a meeting with the investor.",
    "zh": "\u5979\u8981\u548c...\u958b\u6703\u6295\u8cc7\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "She have a meeting with the partner.",
    "zh": "\u5979\u8981\u548c...\u958b\u6703\u5408\u5925\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "She have a meeting with the candidate.",
    "zh": "\u5979\u8981\u548c...\u958b\u6703\u61c9\u5fb5\u8005\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "She have a meeting with the director.",
    "zh": "\u5979\u8981\u548c...\u958b\u6703\u7e3d\u76e3\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "She feel very happy.",
    "zh": "\u5979\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "She feel very sad.",
    "zh": "\u5979\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "She feel very angry.",
    "zh": "\u5979\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "She feel very nervous.",
    "zh": "\u5979\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "She feel very excited.",
    "zh": "\u5979\u89ba\u5f97\u975e\u5e38\u8208\u596e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "She feel very tired.",
    "zh": "\u5979\u89ba\u5f97\u975e\u5e38\u75b2\u5026\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "She feel very bored.",
    "zh": "\u5979\u89ba\u5f97\u975e\u5e38\u7121\u804a\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "She feel very anxious.",
    "zh": "\u5979\u89ba\u5f97\u975e\u5e38\u7126\u616e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "She went to the hospital because of a headache.",
    "zh": "\u5979\u53bb\u91ab\u9662\u56e0\u70ba\u982d\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "She went to the hospital because of a fever.",
    "zh": "\u5979\u53bb\u91ab\u9662\u56e0\u70ba\u767c\u71d2\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "She went to the hospital because of a cold.",
    "zh": "\u5979\u53bb\u91ab\u9662\u56e0\u70ba\u611f\u5192\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "She went to the hospital because of a stomachache.",
    "zh": "\u5979\u53bb\u91ab\u9662\u56e0\u70ba\u80c3\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "She went to the hospital because of a cough.",
    "zh": "\u5979\u53bb\u91ab\u9662\u56e0\u70ba\u54b3\u55fd\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "She went to the hospital because of a sore throat.",
    "zh": "\u5979\u53bb\u91ab\u9662\u56e0\u70ba\u5589\u56a8\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "She went to the hospital because of a toothache.",
    "zh": "\u5979\u53bb\u91ab\u9662\u56e0\u70ba\u7259\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "She went to the hospital because of a backache.",
    "zh": "\u5979\u53bb\u91ab\u9662\u56e0\u70ba\u80cc\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "She want to learn how to play basketball.",
    "zh": "\u5979\u60f3\u5b78\u5982\u4f55\u6253\u7c43\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "She want to learn how to play baseball.",
    "zh": "\u5979\u60f3\u5b78\u5982\u4f55\u6253\u68d2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "She want to learn how to play tennis.",
    "zh": "\u5979\u60f3\u5b78\u5982\u4f55\u6253\u7db2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "She want to learn how to play soccer.",
    "zh": "\u5979\u60f3\u5b78\u5982\u4f55\u6253\u8db3\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "She want to learn how to play golf.",
    "zh": "\u5979\u60f3\u5b78\u5982\u4f55\u6253\u9ad8\u723e\u592b\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "She want to learn how to play volleyball.",
    "zh": "\u5979\u60f3\u5b78\u5982\u4f55\u6253\u6392\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "She want to learn how to play badminton.",
    "zh": "\u5979\u60f3\u5b78\u5982\u4f55\u6253\u7fbd\u6bdb\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "She want to learn how to play table tennis.",
    "zh": "\u5979\u60f3\u5b78\u5982\u4f55\u6253\u684c\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "She downloaded a new app.",
    "zh": "\u5979\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u61c9\u7528\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "She downloaded a new software.",
    "zh": "\u5979\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u8edf\u9ad4\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "She downloaded a new game.",
    "zh": "\u5979\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u904a\u6232\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "She downloaded a new update.",
    "zh": "\u5979\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u66f4\u65b0\u6a94\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "She downloaded a new program.",
    "zh": "\u5979\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "She downloaded a new browser.",
    "zh": "\u5979\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u700f\u89bd\u5668\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "She downloaded a new driver.",
    "zh": "\u5979\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u9a45\u52d5\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "She downloaded a new plugin.",
    "zh": "\u5979\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u64f4\u5145\u529f\u80fd\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "She have to prepare for the exam.",
    "zh": "\u5979\u5fc5\u9808\u6e96\u5099\u8003\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "She have to prepare for the interview.",
    "zh": "\u5979\u5fc5\u9808\u6e96\u5099\u9762\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "She have to prepare for the presentation.",
    "zh": "\u5979\u5fc5\u9808\u6e96\u5099\u7c21\u5831\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "She have to prepare for the test.",
    "zh": "\u5979\u5fc5\u9808\u6e96\u5099\u6e2c\u9a57\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "She have to prepare for the project.",
    "zh": "\u5979\u5fc5\u9808\u6e96\u5099\u5c08\u6848\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "She have to prepare for the negotiation.",
    "zh": "\u5979\u5fc5\u9808\u6e96\u5099\u8ac7\u5224\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "She have to prepare for the audit.",
    "zh": "\u5979\u5fc5\u9808\u6e96\u5099\u5be9\u8a08\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "She have to prepare for the evaluation.",
    "zh": "\u5979\u5fc5\u9808\u6e96\u5099\u8a55\u4f30\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "We need to buy a new laptop.",
    "zh": "\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "We need to buy a new phone.",
    "zh": "\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "We need to buy a new shirt.",
    "zh": "\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "We need to buy a new bag.",
    "zh": "\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "We need to buy a new monitor.",
    "zh": "\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u87a2\u5e55\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "We need to buy a new mouse.",
    "zh": "\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u6ed1\u9f20\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "We need to buy a new keyboard.",
    "zh": "\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u9375\u76e4\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "We need to buy a new watch.",
    "zh": "\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u9336\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "We will travel to Japan.",
    "zh": "\u6211\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "We will travel to Korea.",
    "zh": "\u6211\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "We will travel to America.",
    "zh": "\u6211\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "We will travel to Europe.",
    "zh": "\u6211\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "We will travel to Australia.",
    "zh": "\u6211\u5011\u5c07\u6703\u53bb\u6fb3\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "We will travel to Canada.",
    "zh": "\u6211\u5011\u5c07\u6703\u53bb\u52a0\u62ff\u5927\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "We will travel to Thailand.",
    "zh": "\u6211\u5011\u5c07\u6703\u53bb\u6cf0\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "We will travel to Singapore.",
    "zh": "\u6211\u5011\u5c07\u6703\u53bb\u65b0\u52a0\u5761\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "We have a meeting with the manager.",
    "zh": "\u6211\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "We have a meeting with the client.",
    "zh": "\u6211\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "We have a meeting with the team.",
    "zh": "\u6211\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "We have a meeting with the boss.",
    "zh": "\u6211\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "We have a meeting with the investor.",
    "zh": "\u6211\u5011\u8981\u548c...\u958b\u6703\u6295\u8cc7\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "We have a meeting with the partner.",
    "zh": "\u6211\u5011\u8981\u548c...\u958b\u6703\u5408\u5925\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "We have a meeting with the candidate.",
    "zh": "\u6211\u5011\u8981\u548c...\u958b\u6703\u61c9\u5fb5\u8005\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "We have a meeting with the director.",
    "zh": "\u6211\u5011\u8981\u548c...\u958b\u6703\u7e3d\u76e3\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "We feel very happy.",
    "zh": "\u6211\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "We feel very sad.",
    "zh": "\u6211\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "We feel very angry.",
    "zh": "\u6211\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "We feel very nervous.",
    "zh": "\u6211\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "We feel very excited.",
    "zh": "\u6211\u5011\u89ba\u5f97\u975e\u5e38\u8208\u596e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "We feel very tired.",
    "zh": "\u6211\u5011\u89ba\u5f97\u975e\u5e38\u75b2\u5026\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "We feel very bored.",
    "zh": "\u6211\u5011\u89ba\u5f97\u975e\u5e38\u7121\u804a\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "We feel very anxious.",
    "zh": "\u6211\u5011\u89ba\u5f97\u975e\u5e38\u7126\u616e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "We went to the hospital because of a headache.",
    "zh": "\u6211\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u982d\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "We went to the hospital because of a fever.",
    "zh": "\u6211\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u767c\u71d2\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "We went to the hospital because of a cold.",
    "zh": "\u6211\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u611f\u5192\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "We went to the hospital because of a stomachache.",
    "zh": "\u6211\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u80c3\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "We went to the hospital because of a cough.",
    "zh": "\u6211\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u54b3\u55fd\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "We went to the hospital because of a sore throat.",
    "zh": "\u6211\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u5589\u56a8\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "We went to the hospital because of a toothache.",
    "zh": "\u6211\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u7259\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "We went to the hospital because of a backache.",
    "zh": "\u6211\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u80cc\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "We want to learn how to play basketball.",
    "zh": "\u6211\u5011\u60f3\u5b78\u5982\u4f55\u6253\u7c43\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "We want to learn how to play baseball.",
    "zh": "\u6211\u5011\u60f3\u5b78\u5982\u4f55\u6253\u68d2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "We want to learn how to play tennis.",
    "zh": "\u6211\u5011\u60f3\u5b78\u5982\u4f55\u6253\u7db2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "We want to learn how to play soccer.",
    "zh": "\u6211\u5011\u60f3\u5b78\u5982\u4f55\u6253\u8db3\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "We want to learn how to play golf.",
    "zh": "\u6211\u5011\u60f3\u5b78\u5982\u4f55\u6253\u9ad8\u723e\u592b\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "We want to learn how to play volleyball.",
    "zh": "\u6211\u5011\u60f3\u5b78\u5982\u4f55\u6253\u6392\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "We want to learn how to play badminton.",
    "zh": "\u6211\u5011\u60f3\u5b78\u5982\u4f55\u6253\u7fbd\u6bdb\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "We want to learn how to play table tennis.",
    "zh": "\u6211\u5011\u60f3\u5b78\u5982\u4f55\u6253\u684c\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "We downloaded a new app.",
    "zh": "\u6211\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u61c9\u7528\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "We downloaded a new software.",
    "zh": "\u6211\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u8edf\u9ad4\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "We downloaded a new game.",
    "zh": "\u6211\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u904a\u6232\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "We downloaded a new update.",
    "zh": "\u6211\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u66f4\u65b0\u6a94\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "We downloaded a new program.",
    "zh": "\u6211\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "We downloaded a new browser.",
    "zh": "\u6211\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u700f\u89bd\u5668\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "We downloaded a new driver.",
    "zh": "\u6211\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u9a45\u52d5\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "We downloaded a new plugin.",
    "zh": "\u6211\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u64f4\u5145\u529f\u80fd\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "We have to prepare for the exam.",
    "zh": "\u6211\u5011\u5fc5\u9808\u6e96\u5099\u8003\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "We have to prepare for the interview.",
    "zh": "\u6211\u5011\u5fc5\u9808\u6e96\u5099\u9762\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "We have to prepare for the presentation.",
    "zh": "\u6211\u5011\u5fc5\u9808\u6e96\u5099\u7c21\u5831\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "We have to prepare for the test.",
    "zh": "\u6211\u5011\u5fc5\u9808\u6e96\u5099\u6e2c\u9a57\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "We have to prepare for the project.",
    "zh": "\u6211\u5011\u5fc5\u9808\u6e96\u5099\u5c08\u6848\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "We have to prepare for the negotiation.",
    "zh": "\u6211\u5011\u5fc5\u9808\u6e96\u5099\u8ac7\u5224\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "We have to prepare for the audit.",
    "zh": "\u6211\u5011\u5fc5\u9808\u6e96\u5099\u5be9\u8a08\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "We have to prepare for the evaluation.",
    "zh": "\u6211\u5011\u5fc5\u9808\u6e96\u5099\u8a55\u4f30\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "They need to buy a new laptop.",
    "zh": "\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "They need to buy a new phone.",
    "zh": "\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "They need to buy a new shirt.",
    "zh": "\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "They need to buy a new bag.",
    "zh": "\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "They need to buy a new monitor.",
    "zh": "\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u87a2\u5e55\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "They need to buy a new mouse.",
    "zh": "\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u6ed1\u9f20\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "They need to buy a new keyboard.",
    "zh": "\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u9375\u76e4\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "They need to buy a new watch.",
    "zh": "\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u9336\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "They will travel to Japan.",
    "zh": "\u4ed6\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "They will travel to Korea.",
    "zh": "\u4ed6\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "They will travel to America.",
    "zh": "\u4ed6\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "They will travel to Europe.",
    "zh": "\u4ed6\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "They will travel to Australia.",
    "zh": "\u4ed6\u5011\u5c07\u6703\u53bb\u6fb3\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "They will travel to Canada.",
    "zh": "\u4ed6\u5011\u5c07\u6703\u53bb\u52a0\u62ff\u5927\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "They will travel to Thailand.",
    "zh": "\u4ed6\u5011\u5c07\u6703\u53bb\u6cf0\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "They will travel to Singapore.",
    "zh": "\u4ed6\u5011\u5c07\u6703\u53bb\u65b0\u52a0\u5761\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "They have a meeting with the manager.",
    "zh": "\u4ed6\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "They have a meeting with the client.",
    "zh": "\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "They have a meeting with the team.",
    "zh": "\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "They have a meeting with the boss.",
    "zh": "\u4ed6\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "They have a meeting with the investor.",
    "zh": "\u4ed6\u5011\u8981\u548c...\u958b\u6703\u6295\u8cc7\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "They have a meeting with the partner.",
    "zh": "\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5408\u5925\u4eba\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "They have a meeting with the candidate.",
    "zh": "\u4ed6\u5011\u8981\u548c...\u958b\u6703\u61c9\u5fb5\u8005\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "They have a meeting with the director.",
    "zh": "\u4ed6\u5011\u8981\u548c...\u958b\u6703\u7e3d\u76e3\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "They feel very happy.",
    "zh": "\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "They feel very sad.",
    "zh": "\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "They feel very angry.",
    "zh": "\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "They feel very nervous.",
    "zh": "\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "They feel very excited.",
    "zh": "\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u8208\u596e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "They feel very tired.",
    "zh": "\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u75b2\u5026\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "They feel very bored.",
    "zh": "\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u7121\u804a\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "They feel very anxious.",
    "zh": "\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u7126\u616e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "They went to the hospital because of a headache.",
    "zh": "\u4ed6\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u982d\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "They went to the hospital because of a fever.",
    "zh": "\u4ed6\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u767c\u71d2\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "They went to the hospital because of a cold.",
    "zh": "\u4ed6\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u611f\u5192\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "They went to the hospital because of a stomachache.",
    "zh": "\u4ed6\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u80c3\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "They went to the hospital because of a cough.",
    "zh": "\u4ed6\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u54b3\u55fd\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "They went to the hospital because of a sore throat.",
    "zh": "\u4ed6\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u5589\u56a8\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "They went to the hospital because of a toothache.",
    "zh": "\u4ed6\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u7259\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "They went to the hospital because of a backache.",
    "zh": "\u4ed6\u5011\u53bb\u91ab\u9662\u56e0\u70ba\u80cc\u75db\u3002",
    "cat": "\u91ab\u7642"
  },
  {
    "en": "They want to learn how to play basketball.",
    "zh": "\u4ed6\u5011\u60f3\u5b78\u5982\u4f55\u6253\u7c43\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "They want to learn how to play baseball.",
    "zh": "\u4ed6\u5011\u60f3\u5b78\u5982\u4f55\u6253\u68d2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "They want to learn how to play tennis.",
    "zh": "\u4ed6\u5011\u60f3\u5b78\u5982\u4f55\u6253\u7db2\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "They want to learn how to play soccer.",
    "zh": "\u4ed6\u5011\u60f3\u5b78\u5982\u4f55\u6253\u8db3\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "They want to learn how to play golf.",
    "zh": "\u4ed6\u5011\u60f3\u5b78\u5982\u4f55\u6253\u9ad8\u723e\u592b\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "They want to learn how to play volleyball.",
    "zh": "\u4ed6\u5011\u60f3\u5b78\u5982\u4f55\u6253\u6392\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "They want to learn how to play badminton.",
    "zh": "\u4ed6\u5011\u60f3\u5b78\u5982\u4f55\u6253\u7fbd\u6bdb\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "They want to learn how to play table tennis.",
    "zh": "\u4ed6\u5011\u60f3\u5b78\u5982\u4f55\u6253\u684c\u7403\u3002",
    "cat": "\u904b\u52d5"
  },
  {
    "en": "They downloaded a new app.",
    "zh": "\u4ed6\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u61c9\u7528\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "They downloaded a new software.",
    "zh": "\u4ed6\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u8edf\u9ad4\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "They downloaded a new game.",
    "zh": "\u4ed6\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u904a\u6232\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "They downloaded a new update.",
    "zh": "\u4ed6\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u66f4\u65b0\u6a94\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "They downloaded a new program.",
    "zh": "\u4ed6\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "They downloaded a new browser.",
    "zh": "\u4ed6\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u700f\u89bd\u5668\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "They downloaded a new driver.",
    "zh": "\u4ed6\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u9a45\u52d5\u7a0b\u5f0f\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "They downloaded a new plugin.",
    "zh": "\u4ed6\u5011\u4e0b\u8f09\u4e86\u4e00\u500b\u65b0\u7684\u64f4\u5145\u529f\u80fd\u3002",
    "cat": "\u79d1\u6280"
  },
  {
    "en": "They have to prepare for the exam.",
    "zh": "\u4ed6\u5011\u5fc5\u9808\u6e96\u5099\u8003\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "They have to prepare for the interview.",
    "zh": "\u4ed6\u5011\u5fc5\u9808\u6e96\u5099\u9762\u8a66\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "They have to prepare for the presentation.",
    "zh": "\u4ed6\u5011\u5fc5\u9808\u6e96\u5099\u7c21\u5831\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "They have to prepare for the test.",
    "zh": "\u4ed6\u5011\u5fc5\u9808\u6e96\u5099\u6e2c\u9a57\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "They have to prepare for the project.",
    "zh": "\u4ed6\u5011\u5fc5\u9808\u6e96\u5099\u5c08\u6848\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "They have to prepare for the negotiation.",
    "zh": "\u4ed6\u5011\u5fc5\u9808\u6e96\u5099\u8ac7\u5224\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "They have to prepare for the audit.",
    "zh": "\u4ed6\u5011\u5fc5\u9808\u6e96\u5099\u5be9\u8a08\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "They have to prepare for the evaluation.",
    "zh": "\u4ed6\u5011\u5fc5\u9808\u6e96\u5099\u8a55\u4f30\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "yesterday, I need to buy a new laptop.",
    "zh": "\u6628\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, I need to buy a new laptop.",
    "zh": "\u4eca\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, I need to buy a new laptop.",
    "zh": "\u660e\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, I need to buy a new laptop.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, I need to buy a new laptop.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, I need to buy a new laptop.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, I need to buy a new laptop.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, I need to buy a new phone.",
    "zh": "\u6628\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, I need to buy a new phone.",
    "zh": "\u4eca\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, I need to buy a new phone.",
    "zh": "\u660e\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, I need to buy a new phone.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, I need to buy a new phone.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, I need to buy a new phone.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, I need to buy a new phone.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, I need to buy a new shirt.",
    "zh": "\u6628\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, I need to buy a new shirt.",
    "zh": "\u4eca\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, I need to buy a new shirt.",
    "zh": "\u660e\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, I need to buy a new shirt.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, I need to buy a new shirt.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, I need to buy a new shirt.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, I need to buy a new shirt.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, I need to buy a new bag.",
    "zh": "\u6628\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, I need to buy a new bag.",
    "zh": "\u4eca\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, I need to buy a new bag.",
    "zh": "\u660e\u5929\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, I need to buy a new bag.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, I need to buy a new bag.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, I need to buy a new bag.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, I need to buy a new bag.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, I will travel to Japan.",
    "zh": "\u6628\u5929\uff0c\u6211\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, I will travel to Japan.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, I will travel to Japan.",
    "zh": "\u660e\u5929\uff0c\u6211\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, I will travel to Japan.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, I will travel to Japan.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, I will travel to Japan.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, I will travel to Japan.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, I will travel to Korea.",
    "zh": "\u6628\u5929\uff0c\u6211\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, I will travel to Korea.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, I will travel to Korea.",
    "zh": "\u660e\u5929\uff0c\u6211\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, I will travel to Korea.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, I will travel to Korea.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, I will travel to Korea.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, I will travel to Korea.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, I will travel to America.",
    "zh": "\u6628\u5929\uff0c\u6211\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, I will travel to America.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, I will travel to America.",
    "zh": "\u660e\u5929\uff0c\u6211\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, I will travel to America.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, I will travel to America.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, I will travel to America.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, I will travel to America.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, I will travel to Europe.",
    "zh": "\u6628\u5929\uff0c\u6211\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, I will travel to Europe.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, I will travel to Europe.",
    "zh": "\u660e\u5929\uff0c\u6211\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, I will travel to Europe.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, I will travel to Europe.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, I will travel to Europe.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, I will travel to Europe.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, I have a meeting with the manager.",
    "zh": "\u6628\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, I have a meeting with the manager.",
    "zh": "\u4eca\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, I have a meeting with the manager.",
    "zh": "\u660e\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, I have a meeting with the manager.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, I have a meeting with the manager.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, I have a meeting with the manager.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, I have a meeting with the manager.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, I have a meeting with the client.",
    "zh": "\u6628\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, I have a meeting with the client.",
    "zh": "\u4eca\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, I have a meeting with the client.",
    "zh": "\u660e\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, I have a meeting with the client.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, I have a meeting with the client.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, I have a meeting with the client.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, I have a meeting with the client.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, I have a meeting with the team.",
    "zh": "\u6628\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, I have a meeting with the team.",
    "zh": "\u4eca\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, I have a meeting with the team.",
    "zh": "\u660e\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, I have a meeting with the team.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, I have a meeting with the team.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, I have a meeting with the team.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, I have a meeting with the team.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, I have a meeting with the boss.",
    "zh": "\u6628\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, I have a meeting with the boss.",
    "zh": "\u4eca\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, I have a meeting with the boss.",
    "zh": "\u660e\u5929\uff0c\u6211\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, I have a meeting with the boss.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, I have a meeting with the boss.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, I have a meeting with the boss.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, I have a meeting with the boss.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, I feel very happy.",
    "zh": "\u6628\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, I feel very happy.",
    "zh": "\u4eca\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, I feel very happy.",
    "zh": "\u660e\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, I feel very happy.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, I feel very happy.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, I feel very happy.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, I feel very happy.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, I feel very sad.",
    "zh": "\u6628\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, I feel very sad.",
    "zh": "\u4eca\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, I feel very sad.",
    "zh": "\u660e\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, I feel very sad.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, I feel very sad.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, I feel very sad.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, I feel very sad.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, I feel very angry.",
    "zh": "\u6628\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, I feel very angry.",
    "zh": "\u4eca\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, I feel very angry.",
    "zh": "\u660e\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, I feel very angry.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, I feel very angry.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, I feel very angry.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, I feel very angry.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, I feel very nervous.",
    "zh": "\u6628\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, I feel very nervous.",
    "zh": "\u4eca\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, I feel very nervous.",
    "zh": "\u660e\u5929\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, I feel very nervous.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, I feel very nervous.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, I feel very nervous.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, I feel very nervous.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, You need to buy a new laptop.",
    "zh": "\u6628\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, You need to buy a new laptop.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, You need to buy a new laptop.",
    "zh": "\u660e\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, You need to buy a new laptop.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, You need to buy a new laptop.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, You need to buy a new laptop.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, You need to buy a new laptop.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, You need to buy a new phone.",
    "zh": "\u6628\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, You need to buy a new phone.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, You need to buy a new phone.",
    "zh": "\u660e\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, You need to buy a new phone.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, You need to buy a new phone.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, You need to buy a new phone.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, You need to buy a new phone.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, You need to buy a new shirt.",
    "zh": "\u6628\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, You need to buy a new shirt.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, You need to buy a new shirt.",
    "zh": "\u660e\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, You need to buy a new shirt.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, You need to buy a new shirt.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, You need to buy a new shirt.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, You need to buy a new shirt.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, You need to buy a new bag.",
    "zh": "\u6628\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, You need to buy a new bag.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, You need to buy a new bag.",
    "zh": "\u660e\u5929\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, You need to buy a new bag.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, You need to buy a new bag.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, You need to buy a new bag.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, You need to buy a new bag.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, You will travel to Japan.",
    "zh": "\u6628\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, You will travel to Japan.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, You will travel to Japan.",
    "zh": "\u660e\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, You will travel to Japan.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, You will travel to Japan.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, You will travel to Japan.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, You will travel to Japan.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, You will travel to Korea.",
    "zh": "\u6628\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, You will travel to Korea.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, You will travel to Korea.",
    "zh": "\u660e\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, You will travel to Korea.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, You will travel to Korea.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, You will travel to Korea.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, You will travel to Korea.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, You will travel to America.",
    "zh": "\u6628\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, You will travel to America.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, You will travel to America.",
    "zh": "\u660e\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, You will travel to America.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, You will travel to America.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, You will travel to America.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, You will travel to America.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, You will travel to Europe.",
    "zh": "\u6628\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, You will travel to Europe.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, You will travel to Europe.",
    "zh": "\u660e\u5929\uff0c\u4f60\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, You will travel to Europe.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, You will travel to Europe.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, You will travel to Europe.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, You will travel to Europe.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, You have a meeting with the manager.",
    "zh": "\u6628\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, You have a meeting with the manager.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, You have a meeting with the manager.",
    "zh": "\u660e\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, You have a meeting with the manager.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, You have a meeting with the manager.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, You have a meeting with the manager.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, You have a meeting with the manager.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, You have a meeting with the client.",
    "zh": "\u6628\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, You have a meeting with the client.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, You have a meeting with the client.",
    "zh": "\u660e\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, You have a meeting with the client.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, You have a meeting with the client.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, You have a meeting with the client.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, You have a meeting with the client.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, You have a meeting with the team.",
    "zh": "\u6628\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, You have a meeting with the team.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, You have a meeting with the team.",
    "zh": "\u660e\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, You have a meeting with the team.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, You have a meeting with the team.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, You have a meeting with the team.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, You have a meeting with the team.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, You have a meeting with the boss.",
    "zh": "\u6628\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, You have a meeting with the boss.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, You have a meeting with the boss.",
    "zh": "\u660e\u5929\uff0c\u4f60\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, You have a meeting with the boss.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, You have a meeting with the boss.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, You have a meeting with the boss.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, You have a meeting with the boss.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, You feel very happy.",
    "zh": "\u6628\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, You feel very happy.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, You feel very happy.",
    "zh": "\u660e\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, You feel very happy.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, You feel very happy.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, You feel very happy.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, You feel very happy.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, You feel very sad.",
    "zh": "\u6628\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, You feel very sad.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, You feel very sad.",
    "zh": "\u660e\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, You feel very sad.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, You feel very sad.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, You feel very sad.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, You feel very sad.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, You feel very angry.",
    "zh": "\u6628\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, You feel very angry.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, You feel very angry.",
    "zh": "\u660e\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, You feel very angry.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, You feel very angry.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, You feel very angry.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, You feel very angry.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, You feel very nervous.",
    "zh": "\u6628\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, You feel very nervous.",
    "zh": "\u4eca\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, You feel very nervous.",
    "zh": "\u660e\u5929\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, You feel very nervous.",
    "zh": "\u4e0b\u9031\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, You feel very nervous.",
    "zh": "\u53bb\u5e74\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, You feel very nervous.",
    "zh": "\u65e9\u4e0a\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, You feel very nervous.",
    "zh": "\u665a\u4e0a\uff0c\u4f60\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, He need to buy a new laptop.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, He need to buy a new laptop.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, He need to buy a new laptop.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, He need to buy a new laptop.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, He need to buy a new laptop.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, He need to buy a new laptop.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, He need to buy a new laptop.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, He need to buy a new phone.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, He need to buy a new phone.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, He need to buy a new phone.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, He need to buy a new phone.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, He need to buy a new phone.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, He need to buy a new phone.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, He need to buy a new phone.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, He need to buy a new shirt.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, He need to buy a new shirt.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, He need to buy a new shirt.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, He need to buy a new shirt.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, He need to buy a new shirt.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, He need to buy a new shirt.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, He need to buy a new shirt.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, He need to buy a new bag.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, He need to buy a new bag.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, He need to buy a new bag.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, He need to buy a new bag.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, He need to buy a new bag.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, He need to buy a new bag.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, He need to buy a new bag.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, He will travel to Japan.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, He will travel to Japan.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, He will travel to Japan.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, He will travel to Japan.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, He will travel to Japan.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, He will travel to Japan.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, He will travel to Japan.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, He will travel to Korea.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, He will travel to Korea.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, He will travel to Korea.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, He will travel to Korea.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, He will travel to Korea.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, He will travel to Korea.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, He will travel to Korea.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, He will travel to America.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, He will travel to America.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, He will travel to America.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, He will travel to America.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, He will travel to America.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, He will travel to America.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, He will travel to America.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, He will travel to Europe.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, He will travel to Europe.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, He will travel to Europe.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, He will travel to Europe.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, He will travel to Europe.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, He will travel to Europe.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, He will travel to Europe.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, He have a meeting with the manager.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, He have a meeting with the manager.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, He have a meeting with the manager.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, He have a meeting with the manager.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, He have a meeting with the manager.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, He have a meeting with the manager.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, He have a meeting with the manager.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, He have a meeting with the client.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, He have a meeting with the client.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, He have a meeting with the client.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, He have a meeting with the client.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, He have a meeting with the client.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, He have a meeting with the client.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, He have a meeting with the client.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, He have a meeting with the team.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, He have a meeting with the team.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, He have a meeting with the team.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, He have a meeting with the team.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, He have a meeting with the team.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, He have a meeting with the team.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, He have a meeting with the team.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, He have a meeting with the boss.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, He have a meeting with the boss.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, He have a meeting with the boss.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, He have a meeting with the boss.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, He have a meeting with the boss.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, He have a meeting with the boss.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, He have a meeting with the boss.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, He feel very happy.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, He feel very happy.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, He feel very happy.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, He feel very happy.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, He feel very happy.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, He feel very happy.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, He feel very happy.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, He feel very sad.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, He feel very sad.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, He feel very sad.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, He feel very sad.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, He feel very sad.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, He feel very sad.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, He feel very sad.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, He feel very angry.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, He feel very angry.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, He feel very angry.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, He feel very angry.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, He feel very angry.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, He feel very angry.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, He feel very angry.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, He feel very nervous.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, He feel very nervous.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, He feel very nervous.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, He feel very nervous.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, He feel very nervous.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, He feel very nervous.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, He feel very nervous.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, She need to buy a new laptop.",
    "zh": "\u6628\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, She need to buy a new laptop.",
    "zh": "\u4eca\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, She need to buy a new laptop.",
    "zh": "\u660e\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, She need to buy a new laptop.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, She need to buy a new laptop.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, She need to buy a new laptop.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, She need to buy a new laptop.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, She need to buy a new phone.",
    "zh": "\u6628\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, She need to buy a new phone.",
    "zh": "\u4eca\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, She need to buy a new phone.",
    "zh": "\u660e\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, She need to buy a new phone.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, She need to buy a new phone.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, She need to buy a new phone.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, She need to buy a new phone.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, She need to buy a new shirt.",
    "zh": "\u6628\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, She need to buy a new shirt.",
    "zh": "\u4eca\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, She need to buy a new shirt.",
    "zh": "\u660e\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, She need to buy a new shirt.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, She need to buy a new shirt.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, She need to buy a new shirt.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, She need to buy a new shirt.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, She need to buy a new bag.",
    "zh": "\u6628\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, She need to buy a new bag.",
    "zh": "\u4eca\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, She need to buy a new bag.",
    "zh": "\u660e\u5929\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, She need to buy a new bag.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, She need to buy a new bag.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, She need to buy a new bag.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, She need to buy a new bag.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, She will travel to Japan.",
    "zh": "\u6628\u5929\uff0c\u5979\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, She will travel to Japan.",
    "zh": "\u4eca\u5929\uff0c\u5979\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, She will travel to Japan.",
    "zh": "\u660e\u5929\uff0c\u5979\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, She will travel to Japan.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, She will travel to Japan.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, She will travel to Japan.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, She will travel to Japan.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, She will travel to Korea.",
    "zh": "\u6628\u5929\uff0c\u5979\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, She will travel to Korea.",
    "zh": "\u4eca\u5929\uff0c\u5979\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, She will travel to Korea.",
    "zh": "\u660e\u5929\uff0c\u5979\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, She will travel to Korea.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, She will travel to Korea.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, She will travel to Korea.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, She will travel to Korea.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, She will travel to America.",
    "zh": "\u6628\u5929\uff0c\u5979\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, She will travel to America.",
    "zh": "\u4eca\u5929\uff0c\u5979\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, She will travel to America.",
    "zh": "\u660e\u5929\uff0c\u5979\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, She will travel to America.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, She will travel to America.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, She will travel to America.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, She will travel to America.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, She will travel to Europe.",
    "zh": "\u6628\u5929\uff0c\u5979\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, She will travel to Europe.",
    "zh": "\u4eca\u5929\uff0c\u5979\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, She will travel to Europe.",
    "zh": "\u660e\u5929\uff0c\u5979\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, She will travel to Europe.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, She will travel to Europe.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, She will travel to Europe.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, She will travel to Europe.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, She have a meeting with the manager.",
    "zh": "\u6628\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, She have a meeting with the manager.",
    "zh": "\u4eca\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, She have a meeting with the manager.",
    "zh": "\u660e\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, She have a meeting with the manager.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, She have a meeting with the manager.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, She have a meeting with the manager.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, She have a meeting with the manager.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, She have a meeting with the client.",
    "zh": "\u6628\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, She have a meeting with the client.",
    "zh": "\u4eca\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, She have a meeting with the client.",
    "zh": "\u660e\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, She have a meeting with the client.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, She have a meeting with the client.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, She have a meeting with the client.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, She have a meeting with the client.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, She have a meeting with the team.",
    "zh": "\u6628\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, She have a meeting with the team.",
    "zh": "\u4eca\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, She have a meeting with the team.",
    "zh": "\u660e\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, She have a meeting with the team.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, She have a meeting with the team.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, She have a meeting with the team.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, She have a meeting with the team.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, She have a meeting with the boss.",
    "zh": "\u6628\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, She have a meeting with the boss.",
    "zh": "\u4eca\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, She have a meeting with the boss.",
    "zh": "\u660e\u5929\uff0c\u5979\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, She have a meeting with the boss.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, She have a meeting with the boss.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, She have a meeting with the boss.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, She have a meeting with the boss.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, She feel very happy.",
    "zh": "\u6628\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, She feel very happy.",
    "zh": "\u4eca\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, She feel very happy.",
    "zh": "\u660e\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, She feel very happy.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, She feel very happy.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, She feel very happy.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, She feel very happy.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, She feel very sad.",
    "zh": "\u6628\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, She feel very sad.",
    "zh": "\u4eca\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, She feel very sad.",
    "zh": "\u660e\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, She feel very sad.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, She feel very sad.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, She feel very sad.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, She feel very sad.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, She feel very angry.",
    "zh": "\u6628\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, She feel very angry.",
    "zh": "\u4eca\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, She feel very angry.",
    "zh": "\u660e\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, She feel very angry.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, She feel very angry.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, She feel very angry.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, She feel very angry.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, She feel very nervous.",
    "zh": "\u6628\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, She feel very nervous.",
    "zh": "\u4eca\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, She feel very nervous.",
    "zh": "\u660e\u5929\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, She feel very nervous.",
    "zh": "\u4e0b\u9031\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, She feel very nervous.",
    "zh": "\u53bb\u5e74\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, She feel very nervous.",
    "zh": "\u65e9\u4e0a\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, She feel very nervous.",
    "zh": "\u665a\u4e0a\uff0c\u5979\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, We need to buy a new laptop.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, We need to buy a new laptop.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, We need to buy a new laptop.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, We need to buy a new laptop.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, We need to buy a new laptop.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, We need to buy a new laptop.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, We need to buy a new laptop.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, We need to buy a new phone.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, We need to buy a new phone.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, We need to buy a new phone.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, We need to buy a new phone.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, We need to buy a new phone.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, We need to buy a new phone.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, We need to buy a new phone.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, We need to buy a new shirt.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, We need to buy a new shirt.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, We need to buy a new shirt.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, We need to buy a new shirt.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, We need to buy a new shirt.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, We need to buy a new shirt.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, We need to buy a new shirt.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, We need to buy a new bag.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, We need to buy a new bag.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, We need to buy a new bag.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, We need to buy a new bag.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, We need to buy a new bag.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, We need to buy a new bag.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, We need to buy a new bag.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, We will travel to Japan.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, We will travel to Japan.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, We will travel to Japan.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, We will travel to Japan.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, We will travel to Japan.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, We will travel to Japan.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, We will travel to Japan.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, We will travel to Korea.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, We will travel to Korea.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, We will travel to Korea.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, We will travel to Korea.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, We will travel to Korea.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, We will travel to Korea.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, We will travel to Korea.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, We will travel to America.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, We will travel to America.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, We will travel to America.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, We will travel to America.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, We will travel to America.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, We will travel to America.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, We will travel to America.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, We will travel to Europe.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, We will travel to Europe.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, We will travel to Europe.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, We will travel to Europe.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, We will travel to Europe.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, We will travel to Europe.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, We will travel to Europe.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, We have a meeting with the manager.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, We have a meeting with the manager.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, We have a meeting with the manager.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, We have a meeting with the manager.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, We have a meeting with the manager.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, We have a meeting with the manager.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, We have a meeting with the manager.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, We have a meeting with the client.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, We have a meeting with the client.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, We have a meeting with the client.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, We have a meeting with the client.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, We have a meeting with the client.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, We have a meeting with the client.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, We have a meeting with the client.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, We have a meeting with the team.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, We have a meeting with the team.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, We have a meeting with the team.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, We have a meeting with the team.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, We have a meeting with the team.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, We have a meeting with the team.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, We have a meeting with the team.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, We have a meeting with the boss.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, We have a meeting with the boss.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, We have a meeting with the boss.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, We have a meeting with the boss.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, We have a meeting with the boss.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, We have a meeting with the boss.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, We have a meeting with the boss.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, We feel very happy.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, We feel very happy.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, We feel very happy.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, We feel very happy.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, We feel very happy.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, We feel very happy.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, We feel very happy.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, We feel very sad.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, We feel very sad.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, We feel very sad.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, We feel very sad.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, We feel very sad.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, We feel very sad.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, We feel very sad.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, We feel very angry.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, We feel very angry.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, We feel very angry.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, We feel very angry.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, We feel very angry.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, We feel very angry.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, We feel very angry.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, We feel very nervous.",
    "zh": "\u6628\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, We feel very nervous.",
    "zh": "\u4eca\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, We feel very nervous.",
    "zh": "\u660e\u5929\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, We feel very nervous.",
    "zh": "\u4e0b\u9031\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, We feel very nervous.",
    "zh": "\u53bb\u5e74\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, We feel very nervous.",
    "zh": "\u65e9\u4e0a\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, We feel very nervous.",
    "zh": "\u665a\u4e0a\uff0c\u6211\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, They need to buy a new laptop.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, They need to buy a new laptop.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, They need to buy a new laptop.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, They need to buy a new laptop.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, They need to buy a new laptop.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, They need to buy a new laptop.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, They need to buy a new laptop.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u7b46\u96fb\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, They need to buy a new phone.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, They need to buy a new phone.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, They need to buy a new phone.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, They need to buy a new phone.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, They need to buy a new phone.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, They need to buy a new phone.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, They need to buy a new phone.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u624b\u6a5f\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, They need to buy a new shirt.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, They need to buy a new shirt.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, They need to buy a new shirt.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, They need to buy a new shirt.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, They need to buy a new shirt.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, They need to buy a new shirt.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, They need to buy a new shirt.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u896f\u886b\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, They need to buy a new bag.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "today, They need to buy a new bag.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "tomorrow, They need to buy a new bag.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "next week, They need to buy a new bag.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "last year, They need to buy a new bag.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "in the morning, They need to buy a new bag.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "at night, They need to buy a new bag.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u9700\u8981\u8cb7\u4e00\u500b\u65b0\u7684\u5305\u5305\u3002",
    "cat": "\u8cfc\u7269"
  },
  {
    "en": "yesterday, They will travel to Japan.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, They will travel to Japan.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, They will travel to Japan.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, They will travel to Japan.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, They will travel to Japan.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, They will travel to Japan.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, They will travel to Japan.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u65e5\u672c\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, They will travel to Korea.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, They will travel to Korea.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, They will travel to Korea.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, They will travel to Korea.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, They will travel to Korea.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, They will travel to Korea.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, They will travel to Korea.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u97d3\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, They will travel to America.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, They will travel to America.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, They will travel to America.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, They will travel to America.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, They will travel to America.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, They will travel to America.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, They will travel to America.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u7f8e\u570b\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, They will travel to Europe.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "today, They will travel to Europe.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "tomorrow, They will travel to Europe.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "next week, They will travel to Europe.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "last year, They will travel to Europe.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "in the morning, They will travel to Europe.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "at night, They will travel to Europe.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u5c07\u6703\u53bb\u6b50\u6d32\u3002",
    "cat": "\u65c5\u904a"
  },
  {
    "en": "yesterday, They have a meeting with the manager.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, They have a meeting with the manager.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, They have a meeting with the manager.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, They have a meeting with the manager.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, They have a meeting with the manager.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, They have a meeting with the manager.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, They have a meeting with the manager.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u7d93\u7406\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, They have a meeting with the client.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, They have a meeting with the client.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, They have a meeting with the client.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, They have a meeting with the client.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, They have a meeting with the client.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, They have a meeting with the client.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, They have a meeting with the client.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5ba2\u6236\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, They have a meeting with the team.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, They have a meeting with the team.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, They have a meeting with the team.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, They have a meeting with the team.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, They have a meeting with the team.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, They have a meeting with the team.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, They have a meeting with the team.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u5718\u968a\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, They have a meeting with the boss.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "today, They have a meeting with the boss.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "tomorrow, They have a meeting with the boss.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "next week, They have a meeting with the boss.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "last year, They have a meeting with the boss.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "in the morning, They have a meeting with the boss.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "at night, They have a meeting with the boss.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u8981\u548c...\u958b\u6703\u8001\u95c6\u3002",
    "cat": "\u5546\u696d"
  },
  {
    "en": "yesterday, They feel very happy.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, They feel very happy.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, They feel very happy.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, They feel very happy.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, They feel very happy.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, They feel very happy.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, They feel very happy.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u958b\u5fc3\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, They feel very sad.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, They feel very sad.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, They feel very sad.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, They feel very sad.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, They feel very sad.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, They feel very sad.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, They feel very sad.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u96e3\u904e\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, They feel very angry.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, They feel very angry.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, They feel very angry.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, They feel very angry.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, They feel very angry.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, They feel very angry.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, They feel very angry.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u751f\u6c23\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "yesterday, They feel very nervous.",
    "zh": "\u6628\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "today, They feel very nervous.",
    "zh": "\u4eca\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "tomorrow, They feel very nervous.",
    "zh": "\u660e\u5929\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "next week, They feel very nervous.",
    "zh": "\u4e0b\u9031\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "last year, They feel very nervous.",
    "zh": "\u53bb\u5e74\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "in the morning, They feel very nervous.",
    "zh": "\u65e9\u4e0a\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "at night, They feel very nervous.",
    "zh": "\u665a\u4e0a\uff0c\u4ed6\u5011\u89ba\u5f97\u975e\u5e38\u7dca\u5f35\u3002",
    "cat": "\u60c5\u7dd2"
  },
  {
    "en": "Please make sure to submit the report before the deadline.",
    "zh": "\u8acb\u52d9\u5fc5\u5728\u622a\u6b62\u65e5\u671f\u524d\u63d0\u4ea4\u5831\u544a\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "The company announced a significant increase in profits this quarter.",
    "zh": "\u516c\u53f8\u5ba3\u5e03\u672c\u5b63\u5ea6\u5229\u6f64\u5927\u5e45\u589e\u9577\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "All employees are required to attend the mandatory training session.",
    "zh": "\u6240\u6709\u54e1\u5de5\u90fd\u5fc5\u9808\u53c3\u52a0\u5f37\u5236\u6027\u7684\u57f9\u8a13\u8ab2\u7a0b\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "We apologize for any inconvenience this may cause.",
    "zh": "\u5c0d\u65bc\u9019\u53ef\u80fd\u9020\u6210\u7684\u4efb\u4f55\u4e0d\u4fbf\uff0c\u6211\u5011\u6df1\u8868\u6b49\u610f\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "The meeting has been postponed due to unforeseen circumstances.",
    "zh": "\u7531\u65bc\u4e0d\u53ef\u9810\u898b\u7684\u60c5\u6cc1\uff0c\u6703\u8b70\u5df2\u5ef6\u671f\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "Please review the attached document and let me know if you have any questions.",
    "zh": "\u8acb\u67e5\u95b1\u9644\u4ef6\u6587\u4ef6\uff0c\u5982\u6709\u4efb\u4f55\u554f\u984c\u8acb\u8b93\u6211\u77e5\u9053\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "Our customer service representatives are available 24/7 to assist you.",
    "zh": "\u6211\u5011\u7684\u5ba2\u670d\u4ee3\u8868\u5168\u5929\u5019\u70ba\u60a8\u63d0\u4f9b\u5354\u52a9\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "The new policy will be implemented starting next month.",
    "zh": "\u65b0\u653f\u7b56\u5c07\u5f9e\u4e0b\u500b\u6708\u958b\u59cb\u5be6\u65bd\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "We are currently looking for a qualified candidate to fill the position.",
    "zh": "\u6211\u5011\u76ee\u524d\u6b63\u5728\u5c0b\u627e\u5408\u683c\u7684\u5019\u9078\u4eba\u4f86\u586b\u88dc\u8a72\u8077\u4f4d\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "Thank you for your prompt response and cooperation.",
    "zh": "\u611f\u8b1d\u60a8\u7684\u53ca\u6642\u56de\u8986\u548c\u5408\u4f5c\u3002",
    "cat": "\u591a\u76ca\u5fc5\u8003"
  },
  {
    "en": "It is widely believed that education plays a crucial role in society.",
    "zh": "\u4eba\u5011\u666e\u904d\u8a8d\u70ba\u6559\u80b2\u5728\u793e\u6703\u4e2d\u626e\u6f14\u8457\u95dc\u9375\u89d2\u8272\u3002",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "There is a growing concern about the impact of climate change.",
    "zh": "\u4eba\u5011\u5c0d\u6c23\u5019\u8b8a\u9077\u7684\u5f71\u97ff\u65e5\u76ca\u95dc\u6ce8\u3002",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "One of the main advantages of this approach is its efficiency.",
    "zh": "\u9019\u7a2e\u65b9\u6cd5\u7684\u4e3b\u8981\u512a\u9ede\u4e4b\u4e00\u662f\u5b83\u7684\u6548\u7387\u3002",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "To tackle this issue, the government needs to implement stricter regulations.",
    "zh": "\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u653f\u5e9c\u9700\u8981\u5be6\u65bd\u66f4\u56b4\u683c\u7684\u898f\u5b9a\u3002",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "The data suggests a significant correlation between the two variables.",
    "zh": "\u6578\u64da\u986f\u793a\u9019\u5169\u500b\u8b8a\u6578\u4e4b\u9593\u5b58\u5728\u986f\u8457\u7684\u76f8\u95dc\u6027\u3002",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "In conclusion, the benefits outweigh the drawbacks.",
    "zh": "\u7e3d\u800c\u8a00\u4e4b\uff0c\u5229\u5927\u65bc\u5f0a\u3002",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "This phenomenon can be attributed to several underlying factors.",
    "zh": "\u9019\u7a2e\u73fe\u8c61\u53ef\u4ee5\u6b78\u56e0\u65bc\u5e7e\u500b\u6f5b\u5728\u56e0\u7d20\u3002",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "However, critics argue that this policy may have negative consequences.",
    "zh": "\u7136\u800c\uff0c\u6279\u8a55\u8005\u8a8d\u70ba\u9019\u9805\u653f\u7b56\u53ef\u80fd\u6703\u6709\u8ca0\u9762\u5f8c\u679c\u3002",
    "cat": "\u96c5\u601d\u5e38\u898b"
  },
  {
    "en": "Could you please send me the latest version of the presentation?",
    "zh": "\u53ef\u4ee5\u8acb\u4f60\u5bc4\u7d66\u6211\u6700\u65b0\u7248\u672c\u7684\u7c21\u5831\u55ce\uff1f",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "I'll touch base with you later this week to discuss the project.",
    "zh": "\u6211\u9019\u9031\u665a\u4e9b\u6642\u5019\u6703\u548c\u4f60\u806f\u7e6b\u8a0e\u8ad6\u9019\u500b\u5c08\u6848\u3002",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "Let's schedule a meeting to go over the details.",
    "zh": "\u6211\u5011\u5b89\u6392\u500b\u6703\u8b70\u4f86\u8a73\u7d30\u8a0e\u8ad6\u5427\u3002",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "Please keep me in the loop regarding any updates.",
    "zh": "\u5982\u6709\u4efb\u4f55\u66f4\u65b0\uff0c\u8acb\u8b93\u6211\u77e5\u9053\u3002",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "I'm writing to follow up on the email I sent yesterday.",
    "zh": "\u6211\u5beb\u4fe1\u4f86\u662f\u70ba\u4e86\u8ddf\u9032\u6211\u6628\u5929\u5bc4\u51fa\u7684\u96fb\u5b50\u90f5\u4ef6\u3002",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "Could you clarify what you mean by that?",
    "zh": "\u53ef\u4ee5\u8acb\u4f60\u6f84\u6e05\u4e00\u4e0b\u4f60\u7684\u610f\u601d\u55ce\uff1f",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "Let's make sure we are all on the same page before moving forward.",
    "zh": "\u5728\u7e7c\u7e8c\u4e4b\u524d\uff0c\u6211\u5011\u8981\u78ba\u5b9a\u5927\u5bb6\u7684\u8a8d\u77e5\u662f\u4e00\u81f4\u7684\u3002",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "I'd appreciate it if you could provide some feedback on my proposal.",
    "zh": "\u5982\u679c\u4f60\u80fd\u5c0d\u6211\u7684\u63d0\u6848\u63d0\u4f9b\u4e00\u4e9b\u56de\u994b\uff0c\u6211\u6703\u975e\u5e38\u611f\u6fc0\u3002",
    "cat": "\u8077\u5834\u6e9d\u901a"
  },
  {
    "en": "What are you up to this weekend?",
    "zh": "\u4f60\u9019\u500b\u9031\u672b\u8981\u505a\u4ec0\u9ebc\uff1f",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "It's been a long time! We should definitely catch up soon.",
    "zh": "\u597d\u4e45\u4e0d\u898b\uff01\u6211\u5011\u4e00\u5b9a\u8981\u627e\u6642\u9593\u6558\u820a\u3002",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "I totally agree with you on that.",
    "zh": "\u5728\u90a3\u4e00\u9ede\u4e0a\u6211\u5b8c\u5168\u540c\u610f\u4f60\u3002",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "Don't worry about it, it's not a big deal.",
    "zh": "\u5225\u64d4\u5fc3\uff0c\u9019\u6c92\u4ec0\u9ebc\u5927\u4e0d\u4e86\u7684\u3002",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "Can you give me a hand with this?",
    "zh": "\u4f60\u53ef\u4ee5\u5e6b\u6211\u4e00\u4e0b\u9019\u500b\u55ce\uff1f",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "I'm exhausted, I just want to chill at home tonight.",
    "zh": "\u6211\u7d2f\u58de\u4e86\uff0c\u4eca\u665a\u53ea\u60f3\u5f85\u5728\u5bb6\u653e\u9b06\u3002",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "That makes a lot of sense.",
    "zh": "\u90a3\u5f88\u6709\u9053\u7406\u3002",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  },
  {
    "en": "Let me know if you need anything else.",
    "zh": "\u5982\u679c\u4f60\u9084\u9700\u8981\u4ec0\u9ebc\uff0c\u8acb\u8b93\u6211\u77e5\u9053\u3002",
    "cat": "\u65e5\u5e38\u5c0d\u8a71"
  }
,
  // \u591a\u76ca\u5fc5\u8003 (10)
  { en: "Please make sure to submit the report before the deadline.", zh: "\u8acb\u52d9\u5fc5\u5728\u622a\u6b62\u65e5\u671f\u524d\u63d0\u4ea4\u5831\u544a\u3002", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "The company announced a significant increase in profits this quarter.", zh: "\u516c\u53f8\u5ba3\u5e03\u672c\u5b63\u5ea6\u5229\u6f64\u5927\u5e45\u589e\u9577\u3002", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "All employees are required to attend the mandatory training session.", zh: "\u6240\u6709\u54e1\u5de5\u90fd\u5fc5\u9808\u53c3\u52a0\u5f37\u5236\u6027\u7684\u57f9\u8a13\u8ab2\u7a0b\u3002", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "We apologize for any inconvenience this may cause.", zh: "\u5c0d\u65bc\u9019\u53ef\u80fd\u9020\u6210\u7684\u4efb\u4f55\u4e0d\u4fbf\uff0c\u6211\u5011\u6df1\u8868\u6b49\u610f\u3002", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "The meeting has been postponed due to unforeseen circumstances.", zh: "\u7531\u65bc\u4e0d\u53ef\u9810\u898b\u7684\u60c5\u6cc1\uff0c\u6703\u8b70\u5df2\u5ef6\u671f\u3002", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "Please review the attached document and let me know if you have any questions.", zh: "\u8acb\u67e5\u95b1\u9644\u4ef6\u6587\u4ef6\uff0c\u5982\u6709\u4efb\u4f55\u554f\u984c\u8acb\u8b93\u6211\u77e5\u9053\u3002", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "Our customer service representatives are available 24/7 to assist you.", zh: "\u6211\u5011\u7684\u5ba2\u670d\u4ee3\u8868\u5168\u5929\u5019\u70ba\u60a8\u63d0\u4f9b\u5354\u52a9\u3002", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "The new policy will be implemented starting next month.", zh: "\u65b0\u653f\u7b56\u5c07\u5f9e\u4e0b\u500b\u6708\u958b\u59cb\u5be6\u65bd\u3002", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "We are currently looking for a qualified candidate to fill the position.", zh: "\u6211\u5011\u76ee\u524d\u6b63\u5728\u5c0b\u627e\u5408\u683c\u7684\u5019\u9078\u4eba\u4f86\u586b\u88dc\u8a72\u8077\u4f4d\u3002", cat: "\u591a\u76ca\u5fc5\u8003" },
  { en: "Thank you for your prompt response and cooperation.", zh: "\u611f\u8b1d\u60a8\u7684\u53ca\u6642\u56de\u8986\u548c\u5408\u4f5c\u3002", cat: "\u591a\u76ca\u5fc5\u8003" },
  // \u96c5\u601d\u5e38\u898b (8)
  { en: "It is widely believed that education plays a crucial role in society.", zh: "\u4eba\u5011\u666e\u904d\u8a8d\u70ba\u6559\u80b2\u5728\u793e\u6703\u4e2d\u626e\u6f14\u8457\u95dc\u9375\u89d2\u8272\u3002", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "There is a growing concern about the impact of climate change.", zh: "\u4eba\u5011\u5c0d\u6c23\u5019\u8b8a\u9077\u7684\u5f71\u97ff\u65e5\u76ca\u95dc\u6ce8\u3002", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "One of the main advantages of this approach is its efficiency.", zh: "\u9019\u7a2e\u65b9\u6cd5\u7684\u4e3b\u8981\u512a\u9ede\u4e4b\u4e00\u662f\u5b83\u7684\u6548\u7387\u3002", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "To tackle this issue, the government needs to implement stricter regulations.", zh: "\u70ba\u4e86\u89e3\u6c7a\u9019\u500b\u554f\u984c\uff0c\u653f\u5e9c\u9700\u8981\u5be6\u65bd\u66f4\u56b4\u683c\u7684\u898f\u5b9a\u3002", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "The data suggests a significant correlation between the two variables.", zh: "\u6578\u64da\u986f\u793a\u9019\u5169\u500b\u8b8a\u6578\u4e4b\u9593\u5b58\u5728\u986f\u8457\u7684\u76f8\u95dc\u6027\u3002", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "In conclusion, the benefits outweigh the drawbacks.", zh: "\u7e3d\u800c\u8a00\u4e4b\uff0c\u5229\u5927\u65bc\u5f0a\u3002", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "This phenomenon can be attributed to several underlying factors.", zh: "\u9019\u7a2e\u73fe\u8c61\u53ef\u4ee5\u6b78\u56e0\u65bc\u5e7e\u500b\u6f5b\u5728\u56e0\u7d20\u3002", cat: "\u96c5\u601d\u5e38\u898b" },
  { en: "However, critics argue that this policy may have negative consequences.", zh: "\u7136\u800c\uff0c\u6279\u8a55\u8005\u8a8d\u70ba\u9019\u9805\u653f\u7b56\u53ef\u80fd\u6703\u6709\u8ca0\u9762\u5f8c\u679c\u3002", cat: "\u96c5\u601d\u5e38\u898b" },
  // \u8077\u5834\u6e9d\u901a (8)
  { en: "Could you please send me the latest version of the presentation?", zh: "\u53ef\u4ee5\u8acb\u4f60\u5bc4\u7d66\u6211\u6700\u65b0\u7248\u672c\u7684\u7c21\u5831\u55ce\uff1f", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "I'll touch base with you later this week to discuss the project.", zh: "\u6211\u9019\u9031\u665a\u4e9b\u6642\u5019\u6703\u548c\u4f60\u806f\u7e6b\u8a0e\u8ad6\u9019\u500b\u5c08\u6848\u3002", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "Let's schedule a meeting to go over the details.", zh: "\u6211\u5011\u5b89\u6392\u500b\u6703\u8b70\u4f86\u8a73\u7d30\u8a0e\u8ad6\u5427\u3002", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "Please keep me in the loop regarding any updates.", zh: "\u5982\u6709\u4efb\u4f55\u66f4\u65b0\uff0c\u8acb\u8b93\u6211\u77e5\u9053\u3002", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "I'm writing to follow up on the email I sent yesterday.", zh: "\u6211\u5beb\u4fe1\u4f86\u662f\u70ba\u4e86\u8ddf\u9032\u6211\u6628\u5929\u5bc4\u51fa\u7684\u96fb\u5b50\u90f5\u4ef6\u3002", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "Could you clarify what you mean by that?", zh: "\u53ef\u4ee5\u8acb\u4f60\u6f84\u6e05\u4e00\u4e0b\u4f60\u7684\u610f\u601d\u55ce\uff1f", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "Let's make sure we are all on the same page before moving forward.", zh: "\u5728\u7e7c\u7e8c\u4e4b\u524d\uff0c\u6211\u5011\u8981\u78ba\u5b9a\u5927\u5bb6\u7684\u8a8d\u77e5\u662f\u4e00\u81f4\u7684\u3002", cat: "\u8077\u5834\u6e9d\u901a" },
  { en: "I'd appreciate it if you could provide some feedback on my proposal.", zh: "\u5982\u679c\u4f60\u80fd\u5c0d\u6211\u7684\u63d0\u6848\u63d0\u4f9b\u4e00\u4e9b\u56de\u994b\uff0c\u6211\u6703\u975e\u5e38\u611f\u6fc0\u3002", cat: "\u8077\u5834\u6e9d\u901a" },
  // \u65e5\u5e38\u5c0d\u8a71 (8)
  { en: "What are you up to this weekend?", zh: "\u4f60\u9019\u500b\u9031\u672b\u8981\u505a\u4ec0\u9ebc\uff1f", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "It's been a long time! We should definitely catch up soon.", zh: "\u597d\u4e45\u4e0d\u898b\uff01\u6211\u5011\u4e00\u5b9a\u8981\u627e\u6642\u9593\u6558\u820a\u3002", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "I totally agree with you on that.", zh: "\u5728\u90a3\u4e00\u9ede\u4e0a\u6211\u5b8c\u5168\u540c\u610f\u4f60\u3002", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "Don't worry about it, it's not a big deal.", zh: "\u5225\u64d4\u5fc3\uff0c\u9019\u6c92\u4ec0\u9ebc\u5927\u4e0d\u4e86\u7684\u3002", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "Can you give me a hand with this?", zh: "\u4f60\u53ef\u4ee5\u5e6b\u6211\u4e00\u4e0b\u9019\u500b\u55ce\uff1f", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "I'm exhausted, I just want to chill at home tonight.", zh: "\u6211\u7d2f\u58de\u4e86\uff0c\u4eca\u665a\u53ea\u60f3\u5f85\u5728\u5bb6\u653e\u9b06\u3002", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "That makes a lot of sense.", zh: "\u90a3\u5f88\u6709\u9053\u7406\u3002", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  { en: "Let me know if you need anything else.", zh: "\u5982\u679c\u4f60\u9084\u9700\u8981\u4ec0\u9ebc\uff0c\u8acb\u8b93\u6211\u77e5\u9053\u3002", cat: "\u65e5\u5e38\u5c0d\u8a71" },
  {"en": "Tell me about yourself.", "zh": "請你自我介紹。", "cat": "面試"},
  {"en": "What are your greatest strengths?", "zh": "你最大的優點是什麼？", "cat": "面試"},
  {"en": "What is your biggest weakness?", "zh": "你最大的缺點是什麼？", "cat": "面試"},
  {"en": "Why do you want this job?", "zh": "為什麼你想要這份工作？", "cat": "面試"},
  {"en": "Where do you see yourself in five years?", "zh": "你對自己五年內的規劃是什麼？", "cat": "面試"},
  {"en": "Why should we hire you?", "zh": "為什麼我們應該錄用你？", "cat": "面試"},
  {"en": "What is your greatest professional achievement?", "zh": "你最大的職業成就是什麼？", "cat": "面試"},
  {"en": "Tell me about a challenge or conflict you faced at work.", "zh": "請談談你在工作上面臨的挑戰或衝突。", "cat": "面試"},
  {"en": "How do you handle stress and pressure?", "zh": "你如何處理壓力和重擔？", "cat": "面試"},
  {"en": "What are your salary expectations?", "zh": "你的期望薪資是多少？", "cat": "面試"},
  {"en": "Are you willing to relocate?", "zh": "你願意配合調職嗎？", "cat": "面試"},
  {"en": "Do you have any questions for us?", "zh": "你有任何問題想問我們嗎？", "cat": "面試"},
  {"en": "How did you hear about this position?", "zh": "你是如何得知這個職缺的？", "cat": "面試"},
  {"en": "Why are you leaving your current job?", "zh": "你為什麼要離開目前的工作？", "cat": "面試"},
  {"en": "Describe your work style.", "zh": "描述你的工作風格。", "cat": "面試"},
  {"en": "What motivates you?", "zh": "什麼能激勵你？", "cat": "面試"},
  {"en": "How do you prioritize your work?", "zh": "你如何安排工作的優先順序？", "cat": "面試"},
  {"en": "Tell me about a time you made a mistake.", "zh": "請談談你曾經犯過錯誤的一次經歷。", "cat": "面試"},
  {"en": "What is your ideal work environment?", "zh": "你理想的工作環境是什麼？", "cat": "面試"},
  {"en": "How do you deal with difficult customers?", "zh": "你如何應對難搞的客戶？", "cat": "面試"},
  {"en": "Describe a time you showed leadership.", "zh": "請描述一次你展現領導力的經歷。", "cat": "面試"},
  {"en": "What are your career aspirations?", "zh": "你的職業抱負是什麼？", "cat": "面試"},
  {"en": "How would your boss describe you?", "zh": "你的老闆會如何形容你？", "cat": "面試"},
  {"en": "What do you like least about your current job?", "zh": "你最不喜歡目前工作的哪一點？", "cat": "面試"},
  {"en": "Can you explain this gap in your resume?", "zh": "你能解釋履歷上的這段空白期嗎？", "cat": "面試"},
  {"en": "When can you start?", "zh": "你什麼時候可以開始上班？", "cat": "面試"},
  {"en": "Are you a team player?", "zh": "你是個具有團隊精神的人嗎？", "cat": "面試"},
  {"en": "How do you stay organized?", "zh": "你如何保持井然有序？", "cat": "面試"},
  {"en": "What is your proudest accomplishment?", "zh": "你最引以為豪的成就是什麼？", "cat": "面試"},
  {"en": "Thank you for your time today.", "zh": "感謝您今天撥冗。", "cat": "面試"},
  {"en": "Let us get down to business.", "zh": "讓我們言歸正傳。", "cat": "開會"},
  {"en": "Does everyone have a copy of the agenda?", "zh": "每個人都有議程表了嗎？", "cat": "開會"},
  {"en": "The first item on the agenda is...", "zh": "議程上的第一個項目是...", "cat": "開會"},
  {"en": "Can we move on to the next point?", "zh": "我們可以進入下一點嗎？", "cat": "開會"},
  {"en": "I would like to hand it over to John.", "zh": "我想把時間交給約翰。", "cat": "開會"},
  {"en": "What are your thoughts on this?", "zh": "你對此有什麼想法？", "cat": "開會"},
  {"en": "Do you agree with this proposal?", "zh": "你同意這個提議嗎？", "cat": "開會"},
  {"en": "I see your point, but...", "zh": "我明白你的意思，但是...", "cat": "開會"},
  {"en": "Let us take a short break.", "zh": "我們稍微休息一下。", "cat": "開會"},
  {"en": "We are running out of time.", "zh": "我們的時間快沒了。", "cat": "開會"},
  {"en": "To sum up, we have agreed to...", "zh": "總結來說，我們同意...", "cat": "開會"},
  {"en": "Are there any questions?", "zh": "有任何問題嗎？", "cat": "開會"},
  {"en": "Let us table this discussion for now.", "zh": "我們暫時擱置這個討論。", "cat": "開會"},
  {"en": "Who is taking the minutes?", "zh": "誰在做會議紀錄？", "cat": "開會"},
  {"en": "Please keep your points brief.", "zh": "請長話短說。", "cat": "開會"},
  {"en": "We need to reach a consensus.", "zh": "我們需要達成共識。", "cat": "開會"},
  {"en": "Let us brainstorm some ideas.", "zh": "讓我們來腦力激盪一些想法。", "cat": "開會"},
  {"en": "Can you elaborate on that?", "zh": "你能詳細說明一下嗎？", "cat": "開會"},
  {"en": "I propose that we...", "zh": "我提議我們...", "cat": "開會"},
  {"en": "Let us put it to a vote.", "zh": "我們來表決吧。", "cat": "開會"},
  {"en": "The motion is carried.", "zh": "動議通過。", "cat": "開會"},
  {"en": "Let us schedule a follow-up meeting.", "zh": "我們安排一次後續會議吧。", "cat": "開會"},
  {"en": "Thank you all for coming.", "zh": "謝謝大家的參與。", "cat": "開會"},
  {"en": "The meeting is adjourned.", "zh": "會議結束。", "cat": "開會"},
  {"en": "Could you speak up, please?", "zh": "可以請你大聲一點嗎？", "cat": "開會"},
  {"en": "Your microphone is on mute.", "zh": "你的麥克風被靜音了。", "cat": "開會"},
  {"en": "Can everyone see my screen?", "zh": "大家都能看到我的螢幕嗎？", "cat": "開會"},
  {"en": "Let us stick to the agenda.", "zh": "我們按照議程來吧。", "cat": "開會"},
  {"en": "We are getting off track.", "zh": "我們偏題了。", "cat": "開會"},
  {"en": "I will send out the minutes later.", "zh": "我稍後會寄出會議紀錄。", "cat": "開會"},
  {"en": "The results support the hypothesis.", "zh": "結果支持這項假設。", "cat": "學術"},
  {"en": "Further research is needed to...", "zh": "需要進一步的研究來...", "cat": "學術"},
  {"en": "This study aims to investigate...", "zh": "本研究旨在探討...", "cat": "學術"},
  {"en": "The data was analyzed using...", "zh": "數據是使用...進行分析。", "cat": "學術"},
  {"en": "In conclusion, the findings suggest...", "zh": "總結來說，研究結果顯示...", "cat": "學術"},
  {"en": "Based on the evidence, we can argue that...", "zh": "基於這些證據，我們可以主張...", "cat": "學術"},
  {"en": "The article discusses the impact of...", "zh": "這篇文章討論了...的影響。", "cat": "學術"},
  {"en": "According to recent studies...", "zh": "根據最近的研究...", "cat": "學術"},
  {"en": "It is widely accepted that...", "zh": "人們普遍認為...", "cat": "學術"},
  {"en": "The methodology has several limitations.", "zh": "該方法論有幾個局限性。", "cat": "學術"},
  {"en": "This theory provides a framework for...", "zh": "這個理論為...提供了一個框架。", "cat": "學術"},
  {"en": "The literature on this topic is extensive.", "zh": "關於這個主題的文獻非常豐富。", "cat": "學術"},
  {"en": "We conducted a series of experiments.", "zh": "我們進行了一系列的實驗。", "cat": "學術"},
  {"en": "The sample size was relatively small.", "zh": "樣本數相對較小。", "cat": "學術"},
  {"en": "The correlation does not imply causation.", "zh": "相關性不代表因果關係。", "cat": "學術"},
  {"en": "The paper will be published next month.", "zh": "這篇論文將於下個月發表。", "cat": "學術"},
  {"en": "She was awarded a full scholarship.", "zh": "她獲得了全額獎學金。", "cat": "學術"},
  {"en": "He is currently writing his dissertation.", "zh": "他目前正在寫博士論文。", "cat": "學術"},
  {"en": "The deadline for submission is Friday.", "zh": "提交截止日期是星期五。", "cat": "學術"},
  {"en": "Please cite your sources properly.", "zh": "請正確引用您的來源。", "cat": "學術"},
  {"en": "Plagiarism is a serious academic offense.", "zh": "抄襲是嚴重的學術違規行為。", "cat": "學術"},
  {"en": "The professor's lecture was insightful.", "zh": "教授的演講很有見地。", "cat": "學術"},
  {"en": "The syllabus outlines the course requirements.", "zh": "教學大綱概述了課程要求。", "cat": "學術"},
  {"en": "I need to attend a seminar this afternoon.", "zh": "我今天下午需要參加一個研討會。", "cat": "學術"},
  {"en": "The university has a diverse student body.", "zh": "這所大學的學生群體非常多元化。", "cat": "學術"},
  {"en": "The campus facilities are state-of-the-art.", "zh": "校園設施是最先進的。", "cat": "學術"},
  {"en": "She graduated with a bachelor's degree.", "zh": "她獲得了學士學位。", "cat": "學術"},
  {"en": "He is pursuing a master's degree.", "zh": "他正在攻讀碩士學位。", "cat": "學術"},
  {"en": "They are applying for a research grant.", "zh": "他們正在申請研究補助金。", "cat": "學術"},
  {"en": "The conference will be held in Paris.", "zh": "會議將在巴黎舉行。", "cat": "學術"},
  {"en": "How is it going?", "zh": "最近怎麼樣？", "cat": "社交"},
  {"en": "Long time no see!", "zh": "好久不見！", "cat": "社交"},
  {"en": "What have you been up to?", "zh": "你最近在忙什麼？", "cat": "社交"},
  {"en": "It is great to see you again.", "zh": "很高興再次見到你。", "cat": "社交"},
  {"en": "How are things with you?", "zh": "你一切都好嗎？", "cat": "社交"},
  {"en": "I am doing well, thanks.", "zh": "我過得很好，謝謝。", "cat": "社交"},
  {"en": "Not much, just the usual.", "zh": "沒什麼特別的，就老樣子。", "cat": "社交"},
  {"en": "Can not complain.", "zh": "還過得去。", "cat": "社交"},
  {"en": "Please make yourself at home.", "zh": "請當作自己家。", "cat": "社交"},
  {"en": "Can I get you something to drink?", "zh": "需要幫你拿點喝的嗎？", "cat": "社交"},
  {"en": "Thanks for inviting me.", "zh": "謝謝你邀請我。", "cat": "社交"},
  {"en": "I had a wonderful time.", "zh": "我度過了一段美好的時光。", "cat": "社交"},
  {"en": "We should do this again sometime.", "zh": "我們改天應該再聚聚。", "cat": "社交"},
  {"en": "Let us keep in touch.", "zh": "我們保持聯絡吧。", "cat": "社交"},
  {"en": "Give my regards to your family.", "zh": "代我問候你的家人。", "cat": "社交"},
  {"en": "Have a safe trip home.", "zh": "回家路上小心。", "cat": "社交"},
  {"en": "Take care!", "zh": "保重！", "cat": "社交"},
  {"en": "See you later!", "zh": "待會見！", "cat": "社交"},
  {"en": "It was nice meeting you.", "zh": "很高興認識你。", "cat": "社交"},
  {"en": "I have heard a lot about you.", "zh": "我久仰你的大名。", "cat": "社交"},
  {"en": "What do you do for a living?", "zh": "你是做什麼工作的？", "cat": "社交"},
  {"en": "Where are you from?", "zh": "你來自哪裡？", "cat": "社交"},
  {"en": "Do you come here often?", "zh": "你常來這裡嗎？", "cat": "社交"},
  {"en": "Are you on Facebook or Instagram?", "zh": "你有在用 Facebook 或 Instagram 嗎？", "cat": "社交"},
  {"en": "Can I add you on Line?", "zh": "我可以加你的 Line 嗎？", "cat": "社交"},
  {"en": "Let us grab a coffee sometime.", "zh": "我們找時間去喝杯咖啡吧。", "cat": "社交"},
  {"en": "Do you want to hang out this weekend?", "zh": "你這週末想出去玩嗎？", "cat": "社交"},
  {"en": "I am busy tonight, maybe next time?", "zh": "我今晚有事，也許下次吧？", "cat": "社交"},
  {"en": "Sorry for the late reply.", "zh": "抱歉這麼晚才回覆。", "cat": "社交"},
  {"en": "Let me know if you need anything.", "zh": "如果你需要什麼請讓我知道。", "cat": "社交"}
  ]
};
