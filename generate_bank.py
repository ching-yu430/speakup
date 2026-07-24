import json
import os

words = []
phrases = []
sentences = []

def add_word(en, zh, cat):
    words.append({'en': en, 'zh': zh, 'cat': cat})

def add_phrase(en, zh, cat):
    phrases.append({'en': en, 'zh': zh, 'cat': cat})

def add_sentence(en, zh, cat):
    sentences.append({'en': en, 'zh': zh, 'cat': cat})

# 1. Base Words (about 100)
base_words = [
    # TOEIC
    ['candidate', '應徵者', '多益必考'], ['resume', '履歷', '多益必考'], ['interview', '面試', '多益必考'],
    ['contract', '合約', '多益必考'], ['negotiation', '談判', '多益必考'], ['revenue', '營收', '多益必考'],
    ['profit', '利潤', '多益必考'], ['budget', '預算', '多益必考'], ['schedule', '時程', '多益必考'],
    ['proposal', '提案', '多益必考'],
    # Business
    ['meeting', '會議', '商業'], ['colleague', '同事', '商業'], ['manager', '經理', '商業'],
    ['strategy', '策略', '商業'], ['marketing', '行銷', '商業'], ['investment', '投資', '商業'],
    ['partnership', '合作關係', '商業'], ['client', '客戶', '商業'], ['presentation', '簡報', '商業'],
    ['deadline', '截止日期', '商業'],
    # Travel
    ['flight', '航班', '旅遊'], ['baggage', '行李', '旅遊'], ['passport', '護照', '旅遊'],
    ['accommodation', '住宿', '旅遊'], ['destination', '目的地', '旅遊'], ['itinerary', '行程', '旅遊'],
    ['tourist', '遊客', '旅遊'], ['souvenir', '紀念品', '旅遊'], ['customs', '海關', '旅遊'],
    ['boarding', '登機', '旅遊'],
    # Medical
    ['symptom', '症狀', '醫療'], ['prescription', '處方', '醫療'], ['pharmacy', '藥局', '醫療'],
    ['surgery', '手術', '醫療'], ['clinic', '診所', '醫療'], ['diagnosis', '診斷', '醫療'],
    ['treatment', '治療', '醫療'], ['vaccine', '疫苗', '醫療'], ['infection', '感染', '醫療'],
    ['emergency', '急診', '醫療'],
    # Daily Life
    ['grocery', '雜貨', '日常生活'], ['laundry', '洗衣', '日常生活'], ['commute', '通勤', '日常生活'],
    ['recipe', '食譜', '日常生活'], ['appliance', '家電', '日常生活'], ['furniture', '家具', '日常生活'],
    ['neighborhood', '社區', '日常生活'], ['chore', '家務', '日常生活'], ['habit', '習慣', '日常生活'],
    ['routine', '日常作息', '日常生活'],
    # Tech
    ['software', '軟體', '科技'], ['hardware', '硬體', '科技'], ['database', '資料庫', '科技'],
    ['network', '網路', '科技'], ['algorithm', '演算法', '科技'], ['developer', '開發者', '科技'],
    ['application', '應用程式', '科技'], ['server', '伺服器', '科技'], ['cloud', '雲端', '科技'],
    ['security', '安全', '科技'],
    # Slang
    ['chill', '放鬆', '俚語'], ['flex', '炫耀', '俚語'], ['ghost', '神隱', '俚語'],
    ['salty', '惱羞', '俚語'], ['shady', '可疑的', '俚語'], ['lit', '超讚', '俚語'],
    ['dope', '酷', '俚語'], ['goat', '史上最棒', '俚語'], ['cringe', '尷尬', '俚語'],
    ['bet', '沒問題', '俚語'],
    # Emotions
    ['anxious', '焦慮的', '情緒'], ['thrilled', '非常興奮的', '情緒'], ['depressed', '沮喪的', '情緒'],
    ['grateful', '感激的', '情緒'], ['frustrated', '挫折的', '情緒'], ['overwhelmed', '不知所措的', '情緒'],
    ['relieved', '鬆了一口氣的', '情緒'], ['jealous', '嫉妒的', '情緒'], ['furious', '狂怒的', '情緒'],
    ['sympathetic', '有同情心的', '情緒'],
    # Sports
    ['tournament', '錦標賽', '運動'], ['athlete', '運動員', '運動'], ['stadium', '體育場', '運動'],
    ['championship', '冠軍賽', '運動'], ['referee', '裁判', '運動'], ['coach', '教練', '運動'],
    ['defense', '防守', '運動'], ['offense', '進攻', '運動'], ['penalty', '罰則', '運動'],
    ['tackle', '擒抱/抄截', '運動'],
    # Shopping
    ['discount', '折扣', '購物'], ['receipt', '收據', '購物'], ['refund', '退款', '購物'],
    ['cashier', '收銀員', '購物'], ['cart', '購物車', '購物'], ['aisle', '走道', '購物'],
    ['bargain', '特價品', '購物'], ['voucher', '折價券', '購物'], ['warranty', '保固', '購物'],
    ['inventory', '庫存', '購物']
]

for w in base_words:
    add_word(w[0], w[1], w[2])

# Generate more words using prefixes/suffixes
prefixes = ['un', 're', 'pre', 'post', 'over', 'under', 'sub', 'super']
prefix_meaning = {
    'un': '不', 're': '重新', 'pre': '預先', 'post': '後', 
    'over': '過度', 'under': '不足', 'sub': '次/亞', 'super': '超級'
}

for w in base_words:
    for p in prefixes:
        add_word(f"{p}{w[0]}", f"{prefix_meaning[p]}{w[1]}", w[2])

# 2. Base Phrases
base_phrases = [
    ['look forward to', '期待', '多益必考'],
    ['catch up with', '敘舊', '日常生活'],
    ['out of stock', '缺貨', '購物'],
    ['call off', '取消', '商業'],
    ['check in', '辦理登機/入住', '旅遊'],
    ['pass out', '昏倒', '醫療'],
    ['figure out', '想出/弄明白', '日常生活'],
    ['log in', '登入', '科技'],
    ['work out', '健身/解決', '運動'],
    ['chill out', '放鬆', '俚語']
]

for p in base_phrases:
    add_phrase(p[0], p[1], p[2])

# Generate more phrases (Combinatorics)
verbs = ['get', 'take', 'make', 'put', 'set', 'turn', 'keep', 'give']
preps = ['up', 'down', 'in', 'out', 'on', 'off', 'over', 'away']
verb_meanings = ['取得', '拿', '製造', '放', '設定', '轉', '保持', '給']
prep_meanings = ['上', '下', '進', '出', '上', '掉', '過', '走']

for vi, v in enumerate(verbs):
    for pi, p in enumerate(preps):
        add_phrase(f"{v} {p}", f"{verb_meanings[vi]}{prep_meanings[pi]}", '日常生活')

# 3. Sentences Generation (Combinatorics)
subjects = [
    {'en': 'I', 'zh': '我'},
    {'en': 'You', 'zh': '你'},
    {'en': 'He', 'zh': '他'},
    {'en': 'She', 'zh': '她'},
    {'en': 'We', 'zh': '我們'},
    {'en': 'They', 'zh': '他們'}
]

templates = [
    {
        'en': 'need to buy a new', 'zh': '需要買一個新的', 'cat': '購物',
        'objects': [{'en':'laptop', 'zh':'筆電'}, {'en':'phone', 'zh':'手機'}, {'en':'shirt', 'zh':'襯衫'}, {'en':'bag', 'zh':'包包'}, {'en':'monitor', 'zh':'螢幕'}, {'en':'mouse', 'zh':'滑鼠'}, {'en':'keyboard', 'zh':'鍵盤'}, {'en':'watch', 'zh':'手錶'}]
    },
    {
        'en': 'will travel to', 'zh': '將會去', 'cat': '旅遊',
        'objects': [{'en':'Japan', 'zh':'日本'}, {'en':'Korea', 'zh':'韓國'}, {'en':'America', 'zh':'美國'}, {'en':'Europe', 'zh':'歐洲'}, {'en':'Australia', 'zh':'澳洲'}, {'en':'Canada', 'zh':'加拿大'}, {'en':'Thailand', 'zh':'泰國'}, {'en':'Singapore', 'zh':'新加坡'}]
    },
    {
        'en': 'have a meeting with the', 'zh': '要和...開會', 'cat': '商業',
        'objects': [{'en':'manager', 'zh':'經理'}, {'en':'client', 'zh':'客戶'}, {'en':'team', 'zh':'團隊'}, {'en':'boss', 'zh':'老闆'}, {'en':'investor', 'zh':'投資人'}, {'en':'partner', 'zh':'合夥人'}, {'en':'candidate', 'zh':'應徵者'}, {'en':'director', 'zh':'總監'}]
    },
    {
        'en': 'feel very', 'zh': '覺得非常', 'cat': '情緒',
        'objects': [{'en':'happy', 'zh':'開心'}, {'en':'sad', 'zh':'難過'}, {'en':'angry', 'zh':'生氣'}, {'en':'nervous', 'zh':'緊張'}, {'en':'excited', 'zh':'興奮'}, {'en':'tired', 'zh':'疲倦'}, {'en':'bored', 'zh':'無聊'}, {'en':'anxious', 'zh':'焦慮'}]
    },
    {
        'en': 'went to the hospital because of a', 'zh': '去醫院因為', 'cat': '醫療',
        'objects': [{'en':'headache', 'zh':'頭痛'}, {'en':'fever', 'zh':'發燒'}, {'en':'cold', 'zh':'感冒'}, {'en':'stomachache', 'zh':'胃痛'}, {'en':'cough', 'zh':'咳嗽'}, {'en':'sore throat', 'zh':'喉嚨痛'}, {'en':'toothache', 'zh':'牙痛'}, {'en':'backache', 'zh':'背痛'}]
    },
    {
        'en': 'want to learn how to play', 'zh': '想學如何打', 'cat': '運動',
        'objects': [{'en':'basketball', 'zh':'籃球'}, {'en':'baseball', 'zh':'棒球'}, {'en':'tennis', 'zh':'網球'}, {'en':'soccer', 'zh':'足球'}, {'en':'golf', 'zh':'高爾夫'}, {'en':'volleyball', 'zh':'排球'}, {'en':'badminton', 'zh':'羽毛球'}, {'en':'table tennis', 'zh':'桌球'}]
    },
    {
        'en': 'downloaded a new', 'zh': '下載了一個新的', 'cat': '科技',
        'objects': [{'en':'app', 'zh':'應用程式'}, {'en':'software', 'zh':'軟體'}, {'en':'game', 'zh':'遊戲'}, {'en':'update', 'zh':'更新檔'}, {'en':'program', 'zh':'程式'}, {'en':'browser', 'zh':'瀏覽器'}, {'en':'driver', 'zh':'驅動程式'}, {'en':'plugin', 'zh':'擴充功能'}]
    },
    {
        'en': 'have to prepare for the', 'zh': '必須準備', 'cat': '多益必考',
        'objects': [{'en':'exam', 'zh':'考試'}, {'en':'interview', 'zh':'面試'}, {'en':'presentation', 'zh':'簡報'}, {'en':'test', 'zh':'測驗'}, {'en':'project', 'zh':'專案'}, {'en':'negotiation', 'zh':'談判'}, {'en':'audit', 'zh':'審計'}, {'en':'evaluation', 'zh':'評估'}]
    }
]

for sub in subjects:
    for tpl in templates:
        for obj in tpl['objects']:
            add_sentence(f"{sub['en']} {tpl['en']} {obj['en']}.", f"{sub['zh']}{tpl['zh']}{obj['zh']}。", tpl['cat'])

time_phrases = [
    {'en': 'yesterday', 'zh': '昨天'},
    {'en': 'today', 'zh': '今天'},
    {'en': 'tomorrow', 'zh': '明天'},
    {'en': 'next week', 'zh': '下週'},
    {'en': 'last year', 'zh': '去年'},
    {'en': 'in the morning', 'zh': '早上'},
    {'en': 'at night', 'zh': '晚上'}
]

for sub in subjects:
    for tpl in templates[:4]:
        for obj in tpl['objects'][:4]:
            for time in time_phrases:
                add_sentence(f"{time['en']}, {sub['en']} {tpl['en']} {obj['en']}.", f"{time['zh']}，{sub['zh']}{tpl['zh']}{obj['zh']}。", tpl['cat'])

print(f"Words: {len(words)}")
print(f"Phrases: {len(phrases)}")
print(f"Sentences: {len(sentences)}")
print(f"Total: {len(words) + len(phrases) + len(sentences)}")

output_path = os.path.join(os.path.dirname(__file__), 'word_bank.js')
output_content = f"const WORD_BANK = {{\n  word: {json.dumps(words, indent=2, ensure_ascii=False)},\n  phrase: {json.dumps(phrases, indent=2, ensure_ascii=False)},\n  sentence: {json.dumps(sentences, indent=2, ensure_ascii=False)}\n}};\n"

with open(output_path, 'w', encoding='utf-8') as f:
    f.write(output_content)

print("Successfully written to word_bank.js")
