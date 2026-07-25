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
  { en: "weird", zh: "\u5947\u602a\u7684", cat: "\u65e5\u5e38\u5c0d\u8a71" }
],
  phrase: [
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
  { en: "look forward to", zh: "\u671f\u5f85", cat: "\u65e5\u5e38\u5c0d\u8a71" }
],
  sentence: [
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
  { en: "Let me know if you need anything else.", zh: "\u5982\u679c\u4f60\u9084\u9700\u8981\u4ec0\u9ebc\uff0c\u8acb\u8b93\u6211\u77e5\u9053\u3002", cat: "\u65e5\u5e38\u5c0d\u8a71" }
]
};
