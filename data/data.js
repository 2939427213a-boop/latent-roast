/* Latent Roast · 全站内容数据
 * 每天更新：在 daily 数组末尾追加一条课程（字段见 README.md）。配图放到 images/YYYY-MM-DD.png。
 * 课程总表在 Notion「Morning Gradient · Lessons」。这里只放已推送 / 当天要推的课。
 * 冲煮记录：更新 brews / recipe。其他页面不用改。
 * 所有文字都要遵循 ROUTINE.md 里的写作规则和术语表。
 * 注意：这是 JS 文件。最外层是 window.LR_DATA = {...};
 */
window.LR_DATA = {
  "meta": {
    "title": "Latent Roast",
    "subtitle": "豪力的咖啡数据实验室",
    "updated": "2026-10-20",
    "location": "纽约 · 海拔 0 ft"
  },
  "curriculum": {
    "levels": [
      "入门",
      "进阶",
      "深入"
    ],
    "perCell": 2,
    "branches": [
      {
        "code": "EX",
        "name": "萃取原理",
        "desc": "酸苦甜从哪来、萃取率、浓度、通道"
      },
      {
        "code": "GR",
        "name": "研磨",
        "desc": "粒径、细粉、流速、刻度地图"
      },
      {
        "code": "WA",
        "name": "水",
        "desc": "水质、矿物质、纽约自来水"
      },
      {
        "code": "RT",
        "name": "比例与温度",
        "desc": "粉水比、水温"
      },
      {
        "code": "PO",
        "name": "注水",
        "desc": "闷蒸、分段、搅拌、流速"
      },
      {
        "code": "FD",
        "name": "滤杯与滤纸",
        "desc": "锥形 / 平底、滤纸、流速"
      },
      {
        "code": "OR",
        "name": "产区",
        "desc": "国家、海拔、风土"
      },
      {
        "code": "PR",
        "name": "处理法",
        "desc": "水洗、日晒、蜜处理、厌氧"
      },
      {
        "code": "VA",
        "name": "豆种",
        "desc": "阿拉比卡、铁皮卡、波旁、瑰夏"
      },
      {
        "code": "RO",
        "name": "烘焙与养豆",
        "desc": "烘焙度、排气、赏味期、储存"
      },
      {
        "code": "TA",
        "name": "品鉴与风味",
        "desc": "好酸坏酸、风味轮、杯测"
      },
      {
        "code": "MA",
        "name": "器具维护",
        "desc": "清洁、除垢、磨豆机保养"
      },
      {
        "code": "IN",
        "name": "行业与文化",
        "desc": "烘焙商、咖啡馆、纽约咖啡地图"
      }
    ],
    "next": null,
    "notion": "https://app.notion.com/p/5c1900b451aa49ecaa3bda352243a425"
  },
  "daily": [
    {
      "date": "2026-10-03",
      "code": "EX1",
      "branch": "萃取原理",
      "level": "入门",
      "lesson_no": 1,
      "title": "偏酸 = 萃取不足？",
      "summary": "偏酸、单薄、尾韵短，总时间也偏短（约 2:30）。这些信号说明，问题很可能是萃取不足。水还没带出足够的可溶物，就已经流走了。第一步：只调细研磨，让总时间回到 3:00 左右。",
      "body": "**萃取率**是咖啡粉溶进杯子里的比例。UC Davis 团队在 SCA 发表了一项研究。研究发现：萃取率越低，酸感越强。苦味和焦木味则随浓度和萃取率一起上升。所以，“偏酸 + 单薄 + 2:30 就滴完”指向萃取不足。\n\n常听到一个说法：“酸先出，甜随后，苦最后。”这个说法好记。但 Coffee ad Astra 的作者自己提醒：“快溶物偏酸”的证据还不充分。更稳的说法是：萃取太少时，杯里只有一部分风味，整体失衡。\n\n注意两个容易犯的错误：\n- 同一研究还发现：**浓度越高，酸感也越强**。30 g 粉 : 350 g 水（粉水比约 1:11.7）偏浓。以后单独测试这个变量。\n- 如果**又酸又苦**，原因可能是萃取不均（通道效应）。这时继续调细，结果反而更糟。",
      "takeaways": [
        "萃取率低，酸感就强。总时间短是佐证。",
        "先只调研磨。一次只改一个变量。",
        "又酸又苦时，先检查萃取均匀度。不要一直调细。"
      ],
      "try_today": "1. 把 S3 从 7.0 调细到 6.6（4 格）。\n2. 其他参数不变：30 g / 350 g / 93 °C / 同样的 4 段注水。\n3. 记下总时间（目标 **3:00–3:15**）。\n4. 尝一尝：酸感有没有变圆？",
      "sources": [
        {
          "label": "SCA · Towards a New Brewing Chart（UC Davis，25 Issue 13）",
          "url": "https://sca.coffee/sca-news/25/issue-13/towards-a-new-brewing-chart-xpj8t",
          "reliability": "高 · 同行评审研究的作者科普版"
        },
        {
          "label": "Coffee ad Astra · The Dynamics of Coffee Extraction",
          "url": "https://coffeeadastra.com/2019/01/29/the-dynamics-of-coffee-extraction/",
          "reliability": "中高 · 物理学家的模型，作者注明部分为推测"
        },
        {
          "label": "BeanBench · Why Is My Coffee Sour?",
          "url": "https://beanbench.coffee/learn/sour-coffee-under-extracted-pour-over/",
          "reliability": "中 · 科普汇总，附文献引用"
        }
      ],
      "illustration_prompt": "Hand-drawn comic illustration, ink lines, soft green and cream watercolor, sketchbook paper texture, morning light, gentle humor. Left: a frowning ceramic cone pour-over dripper over a glass server, a lemon beside it, a small stopwatch reading 2:30. Right: a smiling green hand grinder whose top dial is turned finer by a finger, small arrow 7.0 → 6.6. No other text. Leave clear space at top-left and top-center for 1–2 speech bubbles (bubbles are overlaid by the site).",
      "image": "images/2026-10-03.png",
      "tag": "",
      "image_alt": "左边：一个皱着眉的陶瓷滤杯，旁边放着柠檬。右边：一台微笑的手摇磨豆机，一根手指正在把刻度调细。",
      "bubbles": [
        {
          "text": "嘶……好酸。\n才 **2:30** 就滴完了",
          "x": 3,
          "y": 1,
          "tail": "left"
        },
        {
          "text": "调细 4 格！\n**7.0 → 6.6**",
          "x": 50,
          "y": 4,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "溶出顺序（常见说法，大致）",
        "steps": [
          {
            "label": "酸",
            "color": "#D9BE55"
          },
          {
            "label": "甜 · 醇厚度",
            "color": "#9CAF94"
          },
          {
            "label": "苦 · 涩",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "7.0 → 6.6",
      "illustration_note": "配图沿用方向 A 的插画（用户选中的参考手绘 morning-gradient-design/assets/ref-full.jpg），气泡由网页叠加"
    },
    {
      "date": "2026-10-04",
      "code": "TA1",
      "branch": "品鉴与风味",
      "level": "入门",
      "lesson_no": 2,
      "title": "好酸 vs 坏酸",
      "summary": "品鉴桌上，「酸」常被当成贬义词。其实分两种：酸质是有结构、会收进甜感的明亮感；偏酸是尖、薄、空，像没甜感撑着的柠檬汁。第 2 杯热时酸感仍明显但入口顺了——今天练的，就是用舌头把这两种酸分开。",
      "body": "**酸质**是精品咖啡里的好词：明亮、有果味、有结构，像熟苹果的清脆。**偏酸**才是缺陷：尖、薄、空，在舌头两侧拉扯，咽下后没有甜感接住。\n\n怎么分？问三句：这酸有没有甜感垫底？口感是圆还是薄？尾韵是收进柔和，还是留下空、尖的边？\n\nUC Davis 在 SCA 的研究写得很清楚：同一豆，冲煮参数不同时，**sour taste（酸感）变化最大**。高浓度（TDS）+ 低萃取率（PE）→ 酸感最强；低浓度 + 高萃取率 → 酸感最弱。所以「这豆太酸」常常其实是「这杯冲少了」。\n\n结合你的杯：第 1 杯约 2:30，尖、薄——偏酸，萃取不足。第 2 杯热时酸感仍在，但入口顺了、咽下不回酸——调细到 6.6 在往对的方向走。Giant Steps 是深烘拼配，目标不是明亮酸质，而是低酸、丝滑、柔和。今天冲第 3 杯时，判断剩下的酸是还没萃够的**偏酸**，还是被甜和醇厚度托住的一点点提亮。",
      "takeaways": [
        "酸质 ≠ 偏酸。有甜、有结构的是酸质；尖、薄、空的是偏酸。",
        "UC Davis：酸感在高浓度、低萃取时最强。冲煮能大幅改酸感。",
        "你要低酸柔和杯。今天用舌头诊断，不改研磨，只把总时间测准。"
      ],
      "try_today": "1. 冲第 3 杯：S3 6.6 / 30 g / 350 g / 93 °C。先按 Timer，严格按注水表开始时刻注水。\n2. 热着小口尝：酸是「尖、薄、空」，还是「圆、有果味、咽下后不硌」？\n3. 记下总时间（目标 **3:00–3:15**）。一次只改计时，不改研磨。",
      "sources": [
        {
          "label": "SCA · Manipulating and Measuring a Key Attribute in Drip Brew Coffee（UC Davis，25 Issue 15）",
          "url": "https://sca.coffee/sca-news/25/issue-15/manipulating-and-measuring-a-key-attribute-in-drip-brew-coffee-zwlhz",
          "reliability": "高 · 同行评审研究的作者科普版"
        },
        {
          "label": "SCA · Towards a New Brewing Chart（UC Davis，25 Issue 13）",
          "url": "https://sca.coffee/sca-news/25/issue-13/towards-a-new-brewing-chart-xpj8t",
          "reliability": "高 · 感官实验，sourness 随 TDS↑ PE↓ 上升"
        },
        {
          "label": "Cascara · Bright vs sour",
          "url": "https://cascara.cafe/guide/coffee-acidity-explained",
          "reliability": "中 · 科普，区分 brightness 与 sourness"
        }
      ],
      "illustration_prompt": "Hand-drawn comic illustration, ink lines, soft green and cream watercolor, sketchbook paper texture, morning light, gentle humor. Left: frowning ceramic pour-over dripper with a lemon (harsh sour). Right: smiling dripper and cup with a glowing ripe citrus (pleasant brightness). No text in the image. Leave clear space at top-left and top-center for speech bubbles.",
      "image": "images/2026-10-04.png",
      "tag": "",
      "image_alt": "左边：皱眉的滤杯旁边放着柠檬。右边：微笑的滤杯和杯子，旁边是发光的熟柑橘。",
      "bubbles": [
        {
          "text": "这酸……是好酸\n还是坏酸？",
          "x": 3,
          "y": 1,
          "tail": "left"
        },
        {
          "text": "有甜垫底 → **酸质**\n尖薄空 → **偏酸**",
          "x": 52,
          "y": 4,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "酸的两端（品鉴用）",
        "steps": [
          {
            "label": "偏酸 · 尖薄",
            "color": "#D9BE55"
          },
          {
            "label": "酸质 · 有甜",
            "color": "#9CAF94"
          },
          {
            "label": "低酸 · 柔和",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "尝：尖还是圆？",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加"
    },
    {
      "date": "2026-10-05",
      "code": "GR1",
      "branch": "研磨",
      "level": "入门",
      "lesson_no": 3,
      "title": "研磨粗细与流速",
      "summary": "研磨粗细同时拧着两件事：咖啡床让水走多快（流速），和每克粉露出多少表面让水去溶解。调细，水走得慢、接触久、表面也多——两股力都把萃取往上推。所以总时间是研磨的读数，但前提是注水节奏固定、计时器真的在走。",
      "body": "**机制一：流速。** 手冲是渗滤：水在重力下穿过一层咖啡床。Barista Hustle 用达西定律（Darcy's Law）解释：流速取决于这层床的“透水性”（hydraulic conductivity）。粗粉之间缝隙大，像水泼在一堆砖上，一下就穿过去；细粉缝隙小，像泼在沙堡上，水得慢慢渗。粉床越深，水走的路越长，也越慢。\n\n**机制二：表面积。** Coffee ad Astra 讲得很透：单看一颗粒子，粗细不影响表面那层细胞的萃取速度；但同样 30 g 粉，磨得越细，总表面积越大，整体溶出就越快。粗颗粒里面还有很多深层细胞，水几乎够不着，萃取更不均匀，也相当于“白放了一部分粉”。\n\n**两股力同向。** 调细 = 接触时间变长 + 可溶表面变多，萃取率（EY）一起往上走。调粗则两者一起往下。这就是为什么刻度 7.0 那杯 2:30 就滴完，喝起来偏酸、单薄。\n\n**结合你的杯：** 6.6 那杯总时间约 3:45，但那是估计——没按 Timer、注水也慢。总时间同时受研磨和注水节奏影响；只有注水表固定，总时间才能当研磨的读数用。所以今天还是不动刻度，先拿到一个真实的总时间。",
      "takeaways": [
        "调细：水走得慢 + 表面积变大，两股力都让萃取变多；调粗则相反。",
        "总时间是研磨的读数，但只有注水节奏固定、Timer 真的在走时才准。",
        "S3 每次只动 2–4 格，一次只改一个变量。"
      ],
      "try_today": "1. 冲 Giant Steps：S3 6.6 / 30 g / 350 g / 93 °C，刻度不动。\n2. 先按秤上的 Timer 键，看到读数在走，再开始闷蒸。\n3. 按注水表的开始时刻注水（计时器读数，从按下 Timer 开始累计）：0:00 / 0:40 / 1:10 / 1:40。\n4. 滴滤结束时记下计时器读数，这就是总时间（目标 **3:00–3:15**）。\n5. 看滴滤：最后是均匀地滴，还是快结束时明显变慢、水积在粉面上？",
      "sources": [
        {
          "label": "Barista Hustle · P 3.01 Flow（Grind and Flow）",
          "url": "https://www.baristahustle.com/lesson/p-3-01-flow/",
          "reliability": "中高 · 专业咖啡教育课程，用达西定律解释粉床与流速"
        },
        {
          "label": "Coffee ad Astra · The Dynamics of Coffee Extraction",
          "url": "https://coffeeadastra.com/2019/01/29/the-dynamics-of-coffee-extraction/",
          "reliability": "中高 · 天体物理学家的萃取模型；作者注明模型未经实测验证"
        }
      ],
      "illustration_prompt": "Hand-drawn comic illustration, ink lines, soft sage-green and cream watercolor, sketchbook paper texture (#F4EEE1), gentle humor. Center: a cute slim hand grinder with a face holding a magnifying glass. Left: a ceramic dripper with coarse grounds, water rushing straight through, dripper dizzy and sweaty. Right: a dripper with finer grounds, water trickling evenly into a glass carafe, dripper calm and content. No text. Leave space at top-left and top-center for speech bubbles.",
      "image": "images/2026-10-05.png",
      "tag": "",
      "image_alt": "中间是拿着放大镜的手摇磨豆机。左边粗粉的滤杯被水一冲而过，满头大汗；右边细一点的粉，水慢慢均匀滴下，滤杯很淡定。",
      "bubbles": [
        {
          "text": "水一下就冲过去了……\n难怪偏酸、单薄",
          "x": 3,
          "y": 1,
          "tail": "left"
        },
        {
          "text": "调细 → 水走得慢\n表面多 → **萃取变多**",
          "x": 52,
          "y": 4,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "研磨粗细 → 流速 → 味道",
        "steps": [
          {
            "label": "粗 · 快 · 偏酸",
            "color": "#D9BE55"
          },
          {
            "label": "适中 · 3:00–3:15",
            "color": "#9CAF94"
          },
          {
            "label": "细 · 慢 · 偏苦",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "先按 Timer",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加"
    },
    {
      "date": "2026-10-06",
      "code": "RO2",
      "branch": "烘焙与养豆",
      "level": "入门",
      "lesson_no": 4,
      "title": "深烘豆的养豆期",
      "summary": "养豆其实是两条线在同时走：豆子里的 CO₂ 慢慢排出，香气也在慢慢散失、氧化。烘得越深，细胞结构越脆、越多孔，两条线都走得越快——所以深烘豆需要的养豆最短，香气退得也最早。Giant Steps 今天养豆第 20 天，没坏，但现在要做的是保住剩下的香气。",
      "body": "**机制一：排气。** 烘焙会在豆子里生成大量 CO₂。太新鲜的豆子，气体会挡在水和粉之间，让萃取不稳定。但 Scott Rao 指出：手冲时，粉一打湿，气体就直接逸散到空气里，不像意式那样在粉饼里形成背压。所以手冲本来就比意式更不需要长时间养豆。\n\n**机制二：细胞结构。** Rao 的观察是：烘得越浅，细胞壁越结实、越不多孔，越需要多养几天才到风味高峰；滚筒烘焙的传导热会削弱豆子外层细胞，让豆子更多孔，也更不需要养。深烘走得更远：结构更脆，气体和香气都散得快。他说深烘出油的豆他最多养一天，几天后可能就有一点哈喇味（这是他的个人经验，不是实验数据）。\n\n**机制三：保存。** Rao 还说：保存条件决定老化速度。真空冷冻几乎让时间停下，温暖环境会加速劣化。Blue Bottle 官方说法是：高阻隔袋加单向排气阀，未开封最多 100 天；开封后建议 14 天内喝完。\n\n**结合你的杯：** 10/3 那杯，整豆、研磨后、入杯的香气都弱，像普通热美式。这和“深烘 + 养豆第 17 天，挥发性香气已经散掉一部分”对得上——不是你冲错了，是豆子的时钟。所以香气弱不要靠研磨去“补”：研磨改的是萃取，补不回已经散掉的香气。剩下约 280 g，按你 10/2 第一次冲时开封算，10/16 前喝完最好。",
      "takeaways": [
        "养豆是两条线：CO₂ 往外排（太新鲜萃取不稳），香气同时在散失、氧化；烘得越深，两条线走得越快。",
        "手冲比意式更不需要长时间养豆：粉打湿时气体直接逸散，不形成背压。",
        "香气弱是豆子的时钟，不是研磨问题。挤出空气、封紧、放阴凉柜子（别放冰箱），开封 14 天内喝完。"
      ],
      "try_today": "1. 冲第 3 杯：S3 6.6 / 30 g / 350 g / 93 °C，刻度不动。先按秤上的 Timer 键。\n2. 按注水表的开始时刻注水（计时器读数，从按下 Timer 开始累计）：0:00 / 0:40 / 1:10 / 1:40。\n3. 闷蒸时看粉面：鼓起多高、冒泡多不多？这是养豆第 20 天的排气读数，记一句。\n4. 开袋先闻 3 秒整豆，磨完再闻一次，和 10/3 比：更弱，还是差不多？\n5. 滴滤结束时记下计时器读数（总时间，目标 **3:00–3:15**）。冲完把袋里空气挤出、封紧，放回阴凉柜子。",
      "sources": [
        {
          "label": "Scott Rao · Resting Roasts: Is Fresher Better?（2023-05-29）",
          "url": "https://www.scottrao.com/blog/restingbeans",
          "reliability": "中高 · 资深烘焙顾问的实践经验；作者自己说没人确切知道养豆期间具体改变了什么"
        },
        {
          "label": "Blue Bottle · How long does your coffee stay fresh?",
          "url": "https://support.bluebottlecoffee.com/hc/en-us/articles/12753763630875-How-long-does-your-coffee-stay-fresh",
          "reliability": "中高 · 你这袋豆的烘焙商官方说法；带一点营销口吻"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic illustration, black ink lines with soft sage-green and warm cream watercolor on cream paper texture, gentle humor. Three cute coffee bean bags with faces on a wooden kitchen shelf: left bag puffy and excited, middle bag relaxed and happy with aroma swirls, right bag sleepy and slightly wrinkled with only a faint wisp of aroma. Lower right: a ceramic pour-over dripper and a glass carafe with faces look up at the bags. Empty paper at top-left and top-center. No text.",
      "image": "images/2026-10-06.png",
      "tag": "",
      "image_alt": "木架上三袋有表情的咖啡豆：左边刚烘好、鼓鼓的很兴奋；中间放松地飘着香气；右边有点皱、犯困，香气只剩一缕。下方的滤杯和分享壶抬头看着它们。",
      "bubbles": [
        {
          "text": "第 20 天……\n香气在往外跑",
          "x": 3,
          "y": 4,
          "tail": "left"
        },
        {
          "text": "挤出空气、封紧、避热\n**14 天内喝完**",
          "x": 3,
          "y": 40,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "养豆天数 → 排气 → 香气",
        "steps": [
          {
            "label": "刚烘好 · 气多 · 萃取不稳",
            "color": "#D9BE55"
          },
          {
            "label": "气散了 · 香气还在",
            "color": "#9CAF94"
          },
          {
            "label": "第 20 天 · 香气渐散",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "看闷蒸鼓多高",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加"
    },
    {
      "date": "2026-10-09",
      "code": "RT2",
      "branch": "比例与温度",
      "level": "入门",
      "lesson_no": 5,
      "title": "水温怎么选",
      "summary": "水温是萃取的油门：越热，溶出越快，也越容易把后段的苦和涩一起带出来。深烘豆多孔、好溶，所以通常用比浅烘低一点的水温；但降太多，杯子会单薄、偏酸。你那杯 93 °C 热时偏酸、放凉发苦，先别急着动水温，因为总时间还没测准。",
      "body": "**机制一：温度是油门。** 水越热，可溶物溶出越快。温度主要改变“出多快、出多深”。推得越深，后段的苦和涩越容易进杯；推得不够，杯里只剩先出来的酸，单薄、偏酸。\n\n**机制二：深烘豆好溶。** 烘得越深，豆子越多孔。Barista Hustle 的 UX 文章提到，深烘颗粒的密度更低、孔隙更多。好溶就意味着同样的水温更容易推过头。Coffee ad Astra 的作者写道：深烘豆用沸水容易发苦、有焦烤味，这时调低壶温会好很多（这是他的个人经验，写的是爱乐压）。\n\n**机制三：壶上的数字不是粉床的温度。** 在 Barista Hustle 的浸泡实验里，93 °C 的水倒进没预热的容器，搅进粉后马上量到 87 °C，第 4 分钟是 83 °C。那不是手冲滤杯，但方向一样：水一落到粉上就开始降温。所以从 93 °C 降到 91 °C 是真实的变化，但不是剧变。\n\n**机制四：先定配方，再动温度。** Scott Rao 的建议：同一烘焙度的豆子，把水温、粉重、粉水比定下来，只用研磨把总时间调进目标范围。只有在萃取做得好、仍尝到缺陷味的时候，才试更低的水温。\n\n**结合你的杯：** 10/3 那杯 93 °C，热的时候偏酸，放凉后苦味浮出来。按 Rao 的顺序，现在还不能说是水温的问题：那杯总时间约 3:45 是估计值，没按 Timer。而降水温会让萃取变慢，对一杯本来就偏酸的咖啡，可能更酸。你偏爱低酸、丝滑、柔和，所以今天保持 93 °C，先拿到真实总时间。如果总时间落在 3:00–3:15、热的时候不再偏酸、放凉后仍苦，下一杯才降到 **91 °C**，只改这一个变量。",
      "takeaways": [
        "水温是萃取的油门：越热越快，越容易把苦和涩带出来；太低则单薄、偏酸。",
        "深烘豆多孔好溶，通常比浅烘用更低的水温。壶上的读数也高于粉床的实际温度。",
        "一次只改一个变量：先用研磨把总时间调准；萃取做好了还发苦，再降水温。"
      ],
      "try_today": "1. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。先按秤上的 Timer 键。\n2. 下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计。0:00 开始闷蒸，注到 60 g。\n3. 0:40 开始第 2 段，注到 150 g。\n4. 1:10 开始第 3 段，注到 250 g。\n5. 1:40 开始第 4 段，注到 350 g。滴滤结束时记下总时间（目标 **3:00–3:15**）。\n6. 趁热喝一口。留约 30 g 放 20 分钟再喝一口，看苦味有没有浮出来。这一口决定下一杯要不要降到 91 °C。",
      "sources": [
        {
          "label": "Scott Rao · How to approach brewing different coffees（2024-02-26）",
          "url": "https://www.scottrao.com/blog/2024/2/26/how-to-approach-brewing-different-coffees",
          "reliability": "中高 · 资深咖啡顾问的实践建议，不是实验数据"
        },
        {
          "label": "Coffee ad Astra · Reaching Fuller Flavor Profiles with the AeroPress（2021-09-07）",
          "url": "https://coffeeadastra.com/2021/09/07/reaching-fuller-flavor-profiles-with-the-aeropress/",
          "reliability": "中高 · 重机制的咖啡科学博客；深烘降温这句是作者的个人经验，而且写的是爱乐压"
        },
        {
          "label": "Barista Hustle · The UX Brew Method（2025-03-22，Steven Abbott 等）",
          "url": "https://www.baristahustle.com/research-papers/the-ux-brew-method/",
          "reliability": "中 · 温度读数来自浸泡实验装置，不是手冲滤杯，只用来说明“水落到粉上会降温”"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic illustration, black ink lines with soft sage-green and warm cream watercolor on cream paper. A matte black gooseneck kettle with a face holds a tiny thermometer like a baton; a white ceramic dripper on a glass carafe looks up at it; lower right, a cooled cup with a grimacing face next to a cheerful steaming cup; a few dark beans with faces. Empty paper at top-left and top-center. No text.",
      "image_alt": "一只有表情的黑色手冲壶举着小温度计，像在指挥；旁边的白色滤杯坐在分享壶上抬头看它。右下角，一杯放凉的咖啡皱着眉，旁边一杯冒着热气的咖啡在笑。",
      "bubbles": [
        {
          "text": "93 °C，放凉后\n苦味冒出来了……",
          "x": 3,
          "y": 4,
          "tail": "left"
        },
        {
          "text": "先测准总时间\n再决定降不降到 **91 °C**",
          "x": 3,
          "y": 40,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "水温（大致）",
        "steps": [
          {
            "label": "太低 · 单薄 · 偏酸",
            "color": "#D9BE55"
          },
          {
            "label": "合适 · 甜 · 醇厚度",
            "color": "#9CAF94"
          },
          {
            "label": "太高 · 苦 · 涩",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "93 °C 不动",
      "image": "images/2026-10-09.png",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加"
    },
    {
      "date": "2026-10-10",
      "code": "PO1",
      "branch": "注水",
      "level": "入门",
      "lesson_no": 6,
      "title": "闷蒸在做什么",
      "summary": "闷蒸有两件事要做：让每一粒粉都先喝饱水，再把烘焙时留在粉里的气体放出去。粉大约能吸住自身重量 2 倍的水，所以你配方里 30 g 粉闷蒸注到 60 g，刚好是 2 倍。水太少会留下干粉团，水太多又容易堵住滤纸、让滴滤变慢。",
      "body": "**机制一：先让粉喝饱水。** Barista Hustle 的说法是：咖啡粉大约能吸住自身重量 2 倍的水。闷蒸就是先倒一小份水，给粉时间把水吸进去。没吸饱的地方会留下干粉团。水走后面几段时会绕开干粉团，有的粉萃取过度，有的萃取不足，杯里就会又酸又苦。\n\n**机制二：把气体放出去。** 烘焙时产生的气体还留在粉里。闷蒸时粉面会鼓起来、冒泡，就是气体在往外跑。先让它跑掉，后面的水才容易进到粉里。\n\n**机制三：闷蒸水不是越多越好。** Barista Hustle 做过一组 V60 实验（15 g 粉 / 250 g 水），只改闷蒸水量。闷蒸水越多，后面主注水流过粉床的速度就越慢，说明滤纸被细粉堵得越厉害。他们的建议是：闷蒸水量取粉重的 2–3 倍。少于这个范围，容易留干粉团；多于这个范围，容易堵，也更容易出现通道效应。\n\n**机制四：搅拌不一定更好。** 同一家的另一组实验里，闷蒸时用勺子搅拌，粉反而吸进的水更少，总时间多了大约 10 秒；最后杯子的浓度（TDS）几乎没差别。所以闷蒸时轻一点，不必搅。\n\n**结合你的杯：** 你的配方是 30 g 粉、闷蒸注到 60 g，正好是 2 倍，在推荐范围的下沿。Giant Steps 今天养豆第 24 天，又是深烘，粉里剩下的气体比刚开袋时少，所以粉面可能鼓得不高、泡也少。这本身不是问题。今天要看的是：闷蒸结束时，粉面上还有没有干的、颜色浅的粉团。如果有，下一杯才把闷蒸加到 75 g（2.5 倍），只改这一个变量。",
      "takeaways": [
        "闷蒸两件事：让所有粉先吸饱水，再把烘焙时留下的气体放出去。",
        "闷蒸水量取粉重的 2–3 倍。太少留干粉团、萃取不均；太多容易堵滤纸、拖慢滴滤。",
        "你现在 30 g 粉闷蒸 60 g = 2 倍。今天先看有没有干粉团，再决定要不要加到 75 g。"
      ],
      "try_today": "1. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。先按秤上的 Timer 键，看到读数在走再开始。\n2. 下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计。0:00 开始闷蒸，从中心往外画小圈，注到 60 g，尽量把所有粉都淋湿。不要搅拌。\n3. 闷蒸的 40 秒里看粉面：鼓得多高、泡多不多，有没有干的、颜色浅的粉团。记一句。\n4. 0:40 开始第 2 段，注到 150 g。1:10 开始第 3 段，注到 250 g。1:40 开始第 4 段，注到 350 g。\n5. 滴滤结束时记下计时器读数，这就是总时间（目标 **3:00–3:15**）。\n6. 留约 30 g 放 20 分钟再尝一口，看苦味有没有浮出来（这一口决定要不要降到 91 °C）。",
      "sources": [
        {
          "label": "Barista Hustle · Blooming and Clogging（2021-04-03）",
          "url": "https://www.baristahustle.com/blooming-and-clogging/",
          "reliability": "中高 · 专业咖啡教育机构的对照实验；样本小，用的是 V60，不是 Blue Bottle 滤杯"
        },
        {
          "label": "Barista Hustle · Blooming Marvellous（2021-10-30）",
          "url": "https://www.baristahustle.com/blooming-marvellous/",
          "reliability": "中高 · 同上，有重复实验和 T 检验；结论是“搅拌不明显提高浓度”，不是“哪种闷蒸最好”"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic illustration, black ink lines with soft sage-green and warm cream watercolor on cream paper. A white ceramic dripper on a glass carafe; the coffee bed puffs up into a soft dome with tiny bubbles and wisps of gas rising. A matte black gooseneck kettle with a friendly face waits patiently, a pocket watch dangling from its handle. Two dark roasted beans with faces at lower right, one gasping. Empty paper at top-left and top-center. No text.",
      "image_alt": "白色滤杯坐在玻璃分享壶上，杯里的咖啡粉像面团一样鼓起来，冒出小气泡。右边一只有表情的黑色手冲壶耐心地等着，壶把上挂着一块怀表。右下角两颗咖啡豆，一颗张大了嘴。",
      "bubbles": [
        {
          "text": "刚倒水就鼓起来了……\n要不要接着倒？",
          "x": 3,
          "y": 4,
          "tail": "left"
        },
        {
          "text": "先等 40 秒，让粉喝饱水\n闷蒸 60 g = 粉重 **2 倍**",
          "x": 3,
          "y": 40,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "闷蒸水量（粉重的几倍）",
        "steps": [
          {
            "label": "不到 2 倍 · 干粉团 · 萃取不均",
            "color": "#D9BE55"
          },
          {
            "label": "2–3 倍 · 均匀湿透",
            "color": "#9CAF94"
          },
          {
            "label": "太多 · 堵滤纸 · 滴滤变慢",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "60 g = 2 倍",
      "image": "images/2026-10-10.png",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加"
    },
    {
      "date": "2026-10-11",
      "code": "EX2",
      "branch": "萃取原理",
      "level": "入门",
      "lesson_no": 7,
      "title": "第一周复盘 · 萃取的三个变量",
      "summary": "手冲里能推动萃取率的，主要是三个变量：研磨粗细、水温、接触时间（就是总时间）。粉水比主要管浓度，后面 RT1 再讲。这三个变量互相牵连：调细会让滴滤变慢，总时间也跟着变长。所以一次只动一个，而且总时间必须测准。",
      "body": "**先分清两个数。** 萃取率（EY）是豆子里有多少溶进了杯里；浓度（TDS）是杯里有多浓。UC Davis 的研究把它们写成同一条质量守恒式，再用粉水比连起来。\n\n**机制一：浸泡会走到终点，手冲不会。** UC Davis 做过浸泡实验：泡够约 20 分钟后，萃取率稳定在约 21%。从 80 °C 到 99 °C，从很细到很粗，终点几乎一样。水温和研磨只改变走到终点的速度，不改变终点。手冲 3 分钟左右就结束，远没到终点，所以速度就是一切：磨得越细（表面积越大、粉床越紧），水越热，接触越久，萃取率越高。论文自己也写了：滴滤可以靠流速、粉水比和总时间组合出不同的浓度和萃取率，浸泡做不到。\n\n**机制二：水温是通过萃取率起作用的。** 同一组人做过滴滤实验：87 / 90 / 93 °C 三种水温，调研磨和流速，把浓度和萃取率做成一样。训练过的品鉴员几乎尝不出水温的差别。决定味道的是浓度和萃取率本身。\n\n**机制三：酸跟着萃取率走。** 在那项滴滤实验里，“酸”是变化最大的味道：浓度高、萃取率低的时候最酸，萃取率升高后酸明显下降。苦和涩则主要跟着浓度走。醇厚感（Viscous）也随浓度上升。\n\n**结合你这一周：** 第 1 杯 S3 刻度 7.0、总时间 2:30，偏酸，醇厚度不足，是萃取率偏低的典型样子。所以第 2 杯只动了研磨，调细到 6.6，水温 93 °C 没动。第 2 杯入口顺了很多，但没按 Timer，总时间约 3:45 是估计值。三个变量里，研磨已经动过，水温 RT2 讲过先不动，只剩时间还没测准。时间也是另外两个变量的结果，测不准它，就不知道 6.6 到底是不是对的刻度。",
      "takeaways": [
        "手冲里推动萃取率的三个变量：研磨粗细、水温、接触时间。粉水比主要管浓度。",
        "三个变量互相牵连：调细会拖长总时间。所以一次只动一个，并且每杯测准总时间。",
        "UC Davis 的滴滤实验里，萃取率升高后酸明显下降。想要低酸、柔和，方向是把萃取率往上推，而不是降水温。"
      ],
      "try_today": "1. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。今天是周日，趁上午冲，下午不喝。\n2. 先按秤上的 Timer 键，看到读数在走再开始。下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计。\n3. 0:00 开始闷蒸，注到 60 g。0:40 开始第 2 段，注到 150 g。1:10 开始第 3 段，注到 250 g。1:40 开始第 4 段，注到 350 g。\n4. 滴滤结束时记下计时器读数，这就是总时间（目标 **3:00–3:15**）。\n5. 只记三件事：总时间、热的时候酸不酸、醇厚度够不够。语音说一句就行。",
      "sources": [
        {
          "label": "Liang, Chan, Ristenpart · An equilibrium desorption model for the strength and extraction yield of full immersion brewed coffee（Scientific Reports，2021-03-25）",
          "url": "https://www.nature.com/articles/s41598-021-85787-1",
          "reliability": "高 · UC Davis 同行评审论文，数据完整；但研究的是浸泡，不是手冲，手冲部分是作者在讨论里的推论"
        },
        {
          "label": "Batali, Ristenpart, Guinard · Brew temperature, at fixed brew strength and extraction, has little impact on the sensory profile of drip brew coffee（Scientific Reports，2020-10-05）",
          "url": "https://www.nature.com/articles/s41598-020-73341-4",
          "reliability": "高 · UC Davis 同行评审论文，训练过的品鉴小组盲测；用的是商用滴滤机和单一支中浅烘豆，不是 Blue Bottle 滤杯和深烘拼配"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic illustration, black ink lines with soft sage-green and warm cream watercolor on cream paper. A white ceramic cone dripper on a glass carafe looks thoughtful, hand on chin. Around it, like a small team meeting: a matte-black hand grinder, a black gooseneck kettle holding a thermometer, and a small brass hourglass with a face. A kitchen scale in front, beans with faces at lower right, one taking notes. Empty paper at top-left and top-center. No text.",
      "image_alt": "一只白色滤杯坐在玻璃分享壶上，托着下巴在想事情。旁边站着三个有表情的伙伴：黑色手摇磨豆机、夹着温度计的黑色手冲壶、一个小沙漏。前面是一台秤，右下角两颗咖啡豆，一颗在本子上记笔记。",
      "bubbles": [
        {
          "text": "一周两杯……\n到底该动哪个？",
          "x": 3,
          "y": 4,
          "tail": "left"
        },
        {
          "text": "研磨、水温、时间\n**一次只动 1 个**",
          "x": 3,
          "y": 40,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "萃取率（UC Davis 滴滤实验，大致）",
        "steps": [
          {
            "label": "低 · 酸突出",
            "color": "#D9BE55"
          },
          {
            "label": "中 · 酸变柔",
            "color": "#9CAF94"
          },
          {
            "label": "高 · 焦香上来",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "测总时间",
      "image": "images/2026-10-11.png",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加"
    },
    {
      "date": "2026-10-12",
      "code": "FD1",
      "branch": "滤杯与滤纸",
      "level": "入门",
      "lesson_no": 8,
      "title": "滤杯形状与流速",
      "summary": "你这只 Blue Bottle 滤杯是平底的，底下只有一个中心孔。同样的粉、水、温度，换成锥形滤杯（比如 V60），杯里的味道就会变——UC Davis 做过盲测。平底粉床厚度更均匀，旁路更少，深烘时更容易往巧克力、木质、柔和那边走；锥形更容易把酸和苦拉出来。流速主要由底部孔和粉床一起决定，所以你更要靠研磨和计时把总时间卡进 3:00–3:15。",
      "body": "**你手里的是什么。** Blue Bottle 滤杯是平底，底下一孔。它和 Kalita Wave 同属平底阵营，但 Wave 是三孔，Blue Bottle 是单孔。Prima Coffee 的横向对比里，同样条件下这只杯的萃取率略高，杯子偏甜、偏圆。\n\n**机制一：形状会改水流，从而改味道。** UC Davis Coffee Center 和 SCA 做过盲测：其他变量固定，只换平底篮和半锥形篮。非专家品鉴员能分辨出两种形状做出的杯子（中等研磨时 45 人里 25 人猜对，p=0.004）。训练过的小组进一步描述：浅烘时，平底更偏干果、甜、花香，锥形更偏柑橘、莓果、酸；深烘时，平底更偏巧克力、可可、木质，锥形苦更重。你喜欢低酸、丝滑饱满、柔和——平底滤杯本身就在帮这个方向。\n\n**机制二：锥形旁路多，平底更“必须穿过粉床”。** Coffee ad Astra（Jonathan Gagné）把旁路（bypass）定义为绕过粉床、不怎么参与萃取的水。锥形滤杯（V60）滤纸面积大、不易堵，但旁路也多；磨得越细、粉床阻力越大，旁路占比越高，杯子容易又淡又涩。平底把粉床摊平，粉床厚度更均匀，水更难从边上溜走。Scott Rao 也写过：Kalita 这类平底更容易做出均匀萃取，但往往要分段注水。\n\n**机制三：流速是孔 + 粉床一起定的。** 锥形大孔时，流速很大程度上跟你的注水节奏走；平底小孔会自己限流，所以“手感”更宽容，但总时间仍然受研磨粗细影响（粉床越细、越深，滴得越慢）。你第 1 杯 S3 7.0、总时间约 2:30，偏酸、醇厚度不足——那是萃取不足。第 2 杯调细到 6.6 后入口顺了。今天不换滤杯、不改研磨，只把计时做准，顺便低头看一眼粉床是不是大体平整。",
      "takeaways": [
        "Blue Bottle 滤杯是平底单孔。形状会改变水流路径，UC Davis 盲测证明它会改变味道。",
        "平底粉床更均匀、旁路更少，深烘时更容易往巧克力、木质、柔和走；锥形更容易拉出酸和苦。",
        "平底小孔会限流，但总时间仍主要由研磨决定。今天配方不动，重点还是测准总时间，并看粉床是否平整。"
      ],
      "try_today": "1. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。先按秤上的 Timer 键，看到读数在走再开始。\n2. 下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计。0:00 开始闷蒸，注到 60 g。\n3. 0:40 开始第 2 段，注到 150 g。1:10 开始第 3 段，注到 250 g。1:40 开始第 4 段，注到 350 g。\n4. 滴滤时低头看粉床：表面是不是大体平整？水是不是从中间孔均匀往下走，而不是在一边冲出一个坑？\n5. 滴滤结束记下计时器读数，这就是总时间（目标 **3:00–3:15**）。热着尝：酸是不是比第 1 杯更圆？醇厚度够不够？",
      "sources": [
        {
          "label": "Frost, Guinard, Ristenpart · Flat vs. Cone: Basket Shape is as Important as Grind Size in Drip Brew Coffee（SCA 25 Magazine Issue 8 / UC Davis）",
          "url": "https://sca.coffee/sca-news/25-magazine/issue-8/english/flat-vs-cone-basket-shape-is-as-important-as-grind-size-in-drip-brew-coffee-25-magazine-issue-8-lpgsg",
          "reliability": "高 · SCA 刊载的 UC Davis Coffee Center 盲测与感官描述；用的是商用滴滤机可换篮，不是手冲滤杯"
        },
        {
          "label": "Scott Rao · Some Observations on Hand Pours（2016-10-08）",
          "url": "https://www.scottrao.com/blog/2016/10/8/some-observations-on-hand-pours",
          "reliability": "中高 · 资深烘焙/冲煮作者的一手观察与分类；不是受控实验"
        },
        {
          "label": "Jonathan Gagné · The Four Rules of Optimal Coffee Percolation（Coffee ad Astra，2021-03-04）",
          "url": "https://coffeeadastra.com/2021/03/04/the-four-rules-of-optimal-coffee-percolation/",
          "reliability": "中高 · 物理学家写的渗滤机制（旁路、堵塞、均匀流动）；部分流量数字是作者的示意估算"
        },
        {
          "label": "Michael Butterworth · Guest Review: Flat-Bottom Coffee Drippers（Prima Coffee，2017）",
          "url": "https://prima-coffee.com/learn/article/comparisons/guest-review-flat-bottom-coffee-drippers/32818",
          "reliability": "中 · 从业者横向对比，明确写了 Blue Bottle 单孔平底与略高萃取、偏甜偏圆；样本量小"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic, black ink with soft sage-green and cream watercolor on cream paper #F4EEE1. Left: smiling white ceramic flat-bottom dripper on glass carafe. Right: surprised white cone dripper with ribs, water pouring in. Gooseneck kettle lower left, coffee beans with faces lower right. Empty upper-left/center for bubbles. No text.",
      "image_alt": "左边一只微笑的白色平底滤杯坐在玻璃分享壶上，右边一只惊讶的白色锥形滤杯，水正倒进去。左下角露出手冲壶壶嘴，右下角几颗有表情的咖啡豆。",
      "bubbles": [
        {
          "text": "平底 vs 锥形\n味道真的不一样？",
          "x": 3,
          "y": 4,
          "tail": "left"
        },
        {
          "text": "形状改水流\n**平底更柔和**",
          "x": 3,
          "y": 40,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "滤杯形状（UC Davis 深烘大致倾向）",
        "steps": [
          {
            "label": "锥形 · 酸/苦更易出来",
            "color": "#D9BE55"
          },
          {
            "label": "平底 · 巧克力·木质",
            "color": "#9CAF94"
          },
          {
            "label": "你的 Blue Bottle",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "看粉床",
      "image": "images/2026-10-12.png",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加（Figma generate_image，原生 GenerateImage 本轮不可用）"
    },
    {
      "date": "2026-10-13",
      "code": "RT1",
      "branch": "比例与温度",
      "level": "入门",
      "lesson_no": 9,
      "title": "粉水比",
      "summary": "粉水比主要管浓度（TDS），研磨、水温和总时间主要管萃取率。你现在 30 g : 350 g = 1:11.7，大约 86 g 粉 / 升水——比手冲常见的 1:15–1:17、也比 SCA 家用滴滤测试用的 55 g/L（约 1:18）浓得多。第 2 杯放凉后「入口很浓」，很可能就是浓度偏高，而不一定是萃取过度。今天先不改比例，把总时间测准；尝的时候分清「浓」和「偏酸」。",
      "body": "**两件事，别混在一起。** 浓度（TDS）说的是杯里溶解物有多浓；萃取率（EY）说的是粉里有多少比例溶进了水。Lockhart 1957 年的冲煮控制图把这两件事画在一起：纵轴是浓度，横轴是萃取率，粉水比是斜线。SCA / UC Davis（Frost 等人）后来用感官实验确认：苦和涩往往更跟**高浓度**绑在一起；酸感会随浓度升高、随萃取率降低而更强；甜感反而在低浓度时更明显。\n\n**粉水比主要推浓度。** Coffee ad Astra 写得很直白：要同时落在多数人喜欢的浓度（约 1.15–1.35% TDS）和萃取率（约 18–22%）里，手冲常用质量比大约在 **1:15–1:17**。SCA 家用滴滤机标准（310-2021）测试用的标准粉水比是 **55 g 粉 / kg 水**（约 1:18），目标浓度约 1.15–1.55%。Barista Hustle 的 Coffee Compass 也把「想更浓 → 加粉或减水」「想更淡 → 减粉或加水」和「想多萃 → 调细 / 拉长总时间」拆开。\n\n**你的数字。** 30 g : 350 g = **1:11.7**，换算大约 **86 g/L**。这比上面那些参考区间浓一截。第 1 杯总时间约 2:30、偏酸、醇厚度不足——那是萃取不足。第 2 杯调细到 S3 6.6 后入口顺了，但放凉后「入口很浓」、苦味浮出来：浓，多半是粉水比带来的高浓度；苦，可能是深烘 + 变凉后甜感撑不住，也可能还有一点萃取不均。你喜欢低酸、丝滑饱满、柔和——偏浓本身可以帮醇厚度，但别把「浓」当成「已经萃够了」。\n\n**今天只改一件事：还是不改比例。** 配方保持 30:350 / S3 6.6 / 93 °C。先把计时做准，测出真实总时间。尝的时候问自己：热着喝，是糊口的**浓**，还是舌头两侧尖的**偏酸**？如果总时间进了 3:00–3:15、热着也不偏酸，只是觉得太浓，下一杯再只动粉水比（例如水量加到 390–400 g），一次一个变量。",
      "takeaways": [
        "粉水比主要管浓度（TDS）；研磨、水温、总时间主要管萃取率。浓 ≠ 已经萃够。",
        "你现在 30:350 = 1:11.7（约 86 g/L），比手冲常见 1:15–1:17 和 SCA 测试用的 55 g/L 都浓。",
        "今天配方不动。测准总时间；尝的时候分清「浓」和「偏酸」。真要改比例，下一杯再只动水量。"
      ],
      "try_today": "1. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。心里记一下：这是粉水比 1:11.7。\n2. 先按秤上的 Timer 键，看到读数在走再开始。下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计。\n3. 0:00 开始闷蒸，注到 60 g。0:40 开始第 2 段，注到 150 g。1:10 开始第 3 段，注到 250 g。1:40 开始第 4 段，注到 350 g。\n4. 滴滤结束记下计时器读数（目标总时间 **3:00–3:15**）。\n5. 热着小口尝：是糊口、压舌头的**浓**，还是两侧尖、咽下空的**偏酸**？醇厚度够不够丝滑？",
      "sources": [
        {
          "label": "Frost, Batali, Guinard, Ristenpart · Towards a New Brewing Chart（SCA 25 Magazine Issue 13 / UC Davis）",
          "url": "https://sca.coffee/sca-news/25/issue-13/towards-a-new-brewing-chart-xpj8t",
          "reliability": "高 · SCA 刊载的 UC Davis Coffee Center 感官描述实验；说明浓度与萃取率如何分别拉动苦、酸、甜等属性"
        },
        {
          "label": "SCA Standard 310-2021 · Home Coffee Brewers（标准粉水比 55 g/kg）",
          "url": "https://coffeegeek.com/wp-content/uploads/2023/10/SCAGoldCupStandard.pdf",
          "reliability": "高 · SCA 正式标准；测试用标准粉水比 55 g 粉 / kg 水，目标浓度约 1.15–1.55%；针对家用电动滴滤机，不是手冲滤杯"
        },
        {
          "label": "Jonathan Gagné · How to Brew Better Coffee with a V60 §4.1 Coffee to Water Ratio（Coffee ad Astra，2018）",
          "url": "https://coffeeadastra.com/2018/11/30/brewing-better-coffee/",
          "reliability": "中高 · 物理学家写的冲煮变量拆解；手冲常用 1:15–1:17；部分 TDS/萃取换算是近似"
        },
        {
          "label": "Barista Hustle · The Coffee Compass（2021）",
          "url": "https://www.baristahustle.com/coffee-compass/",
          "reliability": "中高 · 把「加减粉水」和「加减萃取」拆成可操作指南；基于行业经验与教学，不是单篇受控实验"
        }
      ],
      "illustration_prompt": "hand-drawn sketchbook comic, ink lines, sage-green and cream watercolor on #F4EEE1 paper; smiling gooseneck kettle pouring into flat-bottom dripper on a scale; see-saw balancing a water droplet and a heap of grounds (coffee-to-water ratio); top-left left blank for speech bubbles; no text.",
      "image_alt": "右上角一只微笑的鼠尾草绿手冲壶正往平底滤杯里注水，滤杯坐在玻璃分享壶和电子秤上；旁边一座木质跷跷板，一端是水滴，一端是一小堆咖啡粉。左侧大片奶油色纸面留白给气泡。",
      "bubbles": [
        {
          "text": "粉多水少\n就一定更浓？",
          "x": 3,
          "y": 4,
          "tail": "left"
        },
        {
          "text": "粉水比管浓度\n**研磨管萃取**",
          "x": 3,
          "y": 40,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "粉水比（大致浓度倾向）",
        "steps": [
          {
            "label": "1:18 · SCA 测试点",
            "color": "#D9BE55"
          },
          {
            "label": "1:15–1:17 · 手冲常见",
            "color": "#9CAF94"
          },
          {
            "label": "你的 1:11.7",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "分清浓淡",
      "image": "images/2026-10-13.png",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加（父进程生成插画）"
    },
    {
      "date": "2026-10-14",
      "code": "EX3",
      "branch": "萃取原理",
      "level": "进阶",
      "lesson_no": 10,
      "title": "TDS 与萃取率",
      "summary": "浓度（TDS）说的是杯里有多浓；萃取率（EY）说的是粉里有多少比例溶进了水。它们被粉水比连在一起，但不是一回事：同样的浓度、不同的萃取率，味道会差很多。SCA / UC Davis 的感官图里，苦随浓度和萃取率一起升；酸随浓度升、随萃取率降；甜反而在低浓度时更明显。你没有折射仪也没关系——热着喝时分清「糊口的浓」和「两侧尖的偏酸」。配方仍不动，先把总时间测准。",
      "body": "**两轴，不是一句话。** 浓度（TDS）= 杯里溶解物有多浓。萃取率（EY / PE）= 干粉里有多少比例溶进了水。Lockhart 1957 年把它们画成冲煮控制图：纵轴浓度、横轴萃取率，粉水比是斜线——质量守恒把三件事锁在一起，但味道不只跟其中一轴走。\n\n**同样的浓，味道可以完全不同。** Coffee ad Astra（Jonathan Gagné）写过一个思想实验：三杯同样冲到约 1.3% TDS，但萃取率分别约 18%、22%、27%，加水调到同一浓度后，味道仍差一截——偏低更偏植物/酸、中间更平衡、偏高更苦更涩。滤杯咖啡常见浓度大约在 **1.3–1.45% TDS**，平均萃取率多在 **约 19–23%**（可溶物上限大约 30%，再高也挤不出更多「好东西」）。\n\n**感官图怎么走。** SCA / UC Davis（Frost 等人）的新冲煮控制图：苦和焦木/灰随 **高浓度 + 高萃取率** 一起升；酸随浓度升、随萃取率降（左上角更酸）；甜反而在 **低浓度 + 低萃取率** 更明显；有的焙度里黑巧克力会在高萃取、偏低浓度一侧更突出。Barista Hustle 的 Coffee Compass 也把「加减粉水（改浓度）」和「调细/拉长总时间（改萃取）」拆成两条路。\n\n**你的杯子。** 30:350 = 1:11.7，粉水比偏浓，所以第 2 杯放凉后「入口很浓」首先像高浓度，不一定是萃取过度。热的时候若还有两侧尖的偏酸，更像萃取率还不够、或萃取不均。你没有折射仪：用舌头当两轴——糊口、压舌头 → 浓（TDS）；两侧尖、咽下空 → 萃取不足（EY 偏低）。配方保持 S3 6.6 / 93 °C / 30:350，先测准总时间进 3:00–3:15。",
      "takeaways": [
        "TDS 是浓度，EY 是萃取率；粉水比把它们连在一起，但浓 ≠ 已经萃够。",
        "同样浓度、不同萃取率，味道可以差很多（Coffee ad Astra）；苦随两轴升，酸随浓度升、随萃取率降（SCA / UC Davis）。",
        "今天配方不动。测准总时间；热着喝时分清「浓」和「偏酸」。"
      ],
      "try_today": "1. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。心里记两轴：粉水比主要推浓度，研磨与总时间主要推萃取率。\n2. 先按秤上的 Timer 键，看到读数在走再开始。下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计。\n3. 0:00 开始闷蒸，注到 60 g。0:40 开始第 2 段，注到 150 g。1:10 开始第 3 段，注到 250 g。1:40 开始第 4 段，注到 350 g。\n4. 滴滤结束记下计时器读数（目标总时间 **3:00–3:15**）。\n5. 热着小口尝：糊口、压舌头 → 更像高浓度；两侧尖、咽下空 → 更像萃取不足。醇厚度够不够丝滑？",
      "sources": [
        {
          "label": "Frost, Batali, Guinard, Ristenpart · Towards a New Brewing Chart（SCA 25 Magazine Issue 13 / UC Davis）",
          "url": "https://sca.coffee/sca-news/25/issue-13/towards-a-new-brewing-chart-xpj8t",
          "reliability": "高 · SCA 刊载的 UC Davis Coffee Center 感官描述实验；说明苦、酸、甜等属性如何分别随浓度与萃取率变化"
        },
        {
          "label": "Jonathan Gagné · The Dynamics of Coffee Extraction（Coffee ad Astra，2019-01-29）",
          "url": "https://coffeeadastra.com/2019/01/29/the-dynamics-of-coffee-extraction/",
          "reliability": "中高 · 物理学家写的 TDS vs EY 机制与同浓度不同萃取率的思想实验；部分动力学模型未与实验全面对照"
        },
        {
          "label": "Jonathan Gagné · Measuring and Reporting Extraction Yield（Coffee ad Astra，2019-02-17）",
          "url": "https://coffeeadastra.com/2019/02/17/measuring-and-reporting-extraction-yields/",
          "reliability": "中高 · 渗滤/浸泡下如何从 TDS 算萃取率、液体滞留比；公式细节偏进阶，日常冲煮不必逐项复算"
        },
        {
          "label": "Barista Hustle · The Coffee Compass（2021）",
          "url": "https://www.baristahustle.com/coffee-compass/",
          "reliability": "中高 · 把「加减粉水（浓度）」和「加减萃取」拆成可操作指南；基于行业经验与教学，不是单篇受控实验"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic, black ink with soft sage-green and cream watercolor on cream paper #F4EEE1. 16:9. Right side: a smiling gooseneck kettle and flat-bottom dripper on a scale, with a simple two-axis chart vignette (vertical arrow as a thick line for strength/concentration, horizontal arrow for extraction) made of coffee beans and water droplets as cartoon characters standing on the axes. Empty upper-left and center for speech bubbles. No text in the image.",
      "image_alt": "右边一只微笑的鼠尾草绿手冲壶和平底滤杯坐在秤上；旁边用咖啡豆和水滴小人摆成简单的两轴示意图（纵轴浓度、横轴萃取）。左侧大片奶油色纸面留白给气泡。",
      "bubbles": [
        {
          "text": "浓和萃够\n是一回事？",
          "x": 3,
          "y": 4,
          "tail": "left"
        },
        {
          "text": "浓度看 TDS\n**萃取看 EY**",
          "x": 3,
          "y": 40,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "冲煮控制图两轴（大致）",
        "steps": [
          {
            "label": "低 EY · 偏酸",
            "color": "#D9BE55"
          },
          {
            "label": "浓度 · TDS",
            "color": "#9CAF94"
          },
          {
            "label": "高 EY · 偏苦",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "分清两轴",
      "image": "images/2026-10-14.png",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加（父进程 GenerateImage）"
    },
    {
      "date": "2026-10-15",
      "code": "WA1",
      "branch": "水",
      "level": "入门",
      "lesson_no": 11,
      "title": "水里的矿物质",
      "summary": "水不是「就是水」。硬度（GH，主要是钙和镁）帮水把风味分子带出来；碱度（KH，主要是碳酸氢根）会中和杯里的酸。碱度太高，杯子会发闷、发苦、变平；硬度太低，杯子容易空、偏酸。SCA 一类的目标大致是碱度约 40 ppm as CaCO3、硬度落在可冲区。你喜欢低酸、丝滑饱满——今天先分清这两轴，配方不动，明天再谈纽约自来水。",
      "body": "**两轴：硬度 vs 碱度。** 硬度（GH / total hardness）≈ 水里钙（Ca²⁺）和镁（Mg²⁺）的量。Barista Hustle 写得很直：这些带双正电的离子，和肥皂起反应的那股力，也参与把咖啡里的风味分子拽出来。碱度（alkalinity，常测成 KH）≈ 碳酸氢根（HCO₃⁻）的缓冲能力——它会中和咖啡酸。SCA 合作稿里写：氢碳酸盐太高，会和细腻的咖啡酸反应，杯子变得 unbalanced、bitter、flat；多数人更偏好偏软、碳酸硬度偏低的水。\n\n**别把碱度当成 pH。** SCA 25 Issue 9（Wellinger）强调：在接近中性的区间里，碱度对杯里可滴定酸、进而对「酸感」的影响，远大于 pH 读数本身。Coffee ad Astra 也把碱度窄目标（约 40 ppm as CaCO₃）排在钙硬度（约 17–85 ppm as CaCO₃，对应较旧的 SCAA 表）前面：碱度过高会盖住芳香酸。测水时若只能测一个，他建议优先测 KH。\n\n**你的杯子。** Giant Steps 是深烘拼配，你又偏好低酸、丝滑饱满。碱度过高会把本来就不多的酸质压平，苦和闷更容易冒出来——这和第 2 杯放凉后「苦浮出来」不是同一机制，但方向一致：别再叠一层「水把酸掐死」。硬度太低则杯子容易空、尖。今天不换水、不调配方：S3 6.6 / 93 °C / 30:350，先把总时间测准进 3:00–3:15，舌头只负责分清「尖酸」和「被缓冲后的平」。明天 WA2 再谈纽约自来水能不能冲。",
      "takeaways": [
        "硬度（Ca / Mg）提味；碱度（HCO₃⁻）调酸——两轴，不是「水硬不硬」一句话。",
        "碱度过高 → 发闷、发苦、变平；多数人更偏好偏软水（SCA partner / Coffee ad Astra）。",
        "今天配方与水源都不动。测准总时间；热着喝时分清尖酸 vs 被缓冲后的平。"
      ],
      "try_today": "1. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。心里记两轴：硬度提味，碱度调酸。\n2. 先按秤上的 Timer 键，看到读数在走再开始。下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计。\n3. 0:00 开始闷蒸，注到 60 g。0:40 开始第 2 段，注到 150 g。1:10 开始第 3 段，注到 250 g。1:40 开始第 4 段，注到 350 g。\n4. 滴滤结束记下计时器读数（目标总时间 **3:00–3:15**）。\n5. 热着小口尝：酸是「尖」还是已被水「压平」？醇厚度够不够丝滑？今天只观察，不改水。",
      "sources": [
        {
          "label": "SCA · Water and the Taste of Coffee（partner / BRITA organoleptic，citing Wellinger & Water for Coffee）",
          "url": "https://sca.coffee/sca-news/news-from-our-partners/water-and-the-taste-of-coffee-ay9gh",
          "reliability": "高 · SCA 刊载的合作稿；明确 HCO₃⁻ 缓冲酸、过高则 flat/bitter，并归纳多数人偏好偏软水"
        },
        {
          "label": "Marco Wellinger · Water and Coffee Acidity（SCA 25 Magazine Issue 9）",
          "url": "https://sca.coffee/sca-news/25/issue-9/english/water-and-coffee-acidity-how-to-adapt-your-water-for-different-extraction-methods-25-magazine-issue-9-pxjby",
          "reliability": "高 · SCA 刊载的 ZHAW 水化学稿；说明碱度对杯酸的影响远大于 pH，并讨论滤杯 vs 意式比例"
        },
        {
          "label": "Jonathan Gagné · Water for Coffee Extraction（Coffee ad Astra，2018-12-16）",
          "url": "https://coffeeadastra.com/2018/12/16/water-for-coffee-extraction/",
          "reliability": "中高 · 梳理 SCA/SCAA 目标区间（碱度≈40、钙硬度约 17–85 ppm as CaCO₃）与高碱度盖酸机制；部分配方对照未做全面盲测"
        },
        {
          "label": "Barista Hustle · Water Hardness（2020-09-19）",
          "url": "https://www.baristahustle.com/water-hardness/",
          "reliability": "中高 · 讲清 GH=Ca+Mg、KH/碱度缓冲酸、过高发平；教学稿，非单篇受控感官实验"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic, black ink with soft sage-green and cream watercolor on cream paper #F4EEE1. 16:9. Right side: smiling gooseneck kettle and flat-bottom dripper; small cartoon mineral characters — calcium/magnesium hardness ions pulling flavor notes from coffee grounds, and a bicarbonate buffer character gently toning down sharp acid sparks. Empty upper-left and center for speech bubbles. No text in the image.",
      "image_alt": "右边一只微笑的鼠尾草绿手冲壶和平底滤杯；旁边有钙/镁硬度小人从咖啡粉里拽出风味，碳酸氢根缓冲小人把尖酸火花调柔。左侧奶油色纸面留白给气泡。",
      "bubbles": [
        {
          "text": "水就是水？",
          "x": 3,
          "y": 4,
          "tail": "left"
        },
        {
          "text": "硬度提味\n**碱度调酸**",
          "x": 3,
          "y": 40,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "水的两轴（大致）",
        "steps": [
          {
            "label": "碱度低 · 酸更尖",
            "color": "#D9BE55"
          },
          {
            "label": "硬度 · 提味",
            "color": "#9CAF94"
          },
          {
            "label": "碱度高 · 发闷",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "硬度碱度",
      "image": "images/2026-10-15.png",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加（父进程 GenerateImage）"
    },
    {
      "date": "2026-10-16",
      "code": "WA2",
      "branch": "水",
      "level": "入门",
      "lesson_no": 12,
      "title": "纽约自来水能冲吗",
      "summary": "能冲。NYC DEP 2025 年报：硬度平均约 32 mg/L as CaCO₃（约 18–100），碱度平均约 25（约 16–72）。对照 SCA 一类目标（碱度约 40、钙硬度约 17–85），纽约水偏软、碱度略低，但落在可冲区。不用急着上 RO。今天配方仍不动，先把总时间测准；若氯味烦，冷水静置过夜或碳滤就行。",
      "body": "**结论先说：纽约自来水能冲手冲。** DEP《2025 Drinking Water Supply and Quality Report》分布系统取样：硬度 18–100 mg/L as CaCO₃，平均 32；碱度 16–72，平均 25；钙平均约 9 mg/L、镁约 2.4 mg/L；游离余氯平均约 0.6 mg/L；pH 平均约 7.3。2025 年 Catskill/Delaware 约 91%、Croton 约 9%。DEP FAQ 也写：Cat/Del 偏软或略硬，Croton 中等硬；全市平均硬度大约 1.8 grain/gallon。\n\n**对照昨天的两轴。** Coffee ad Astra 归纳的 SCA 目标大致是：碱度贴近 40 ppm as CaCO₃，钙硬度约 17–85 ppm as CaCO₃。纽约平均硬度 32 落在可冲区偏软一侧；平均碱度 25 比「约 40」略低——缓冲少一点，酸质更容易露出来。你喜欢低酸、丝滑饱满，又在喝深烘拼配 Giant Steps：碱度略低不等于「必须换水」，只是杯子可能比 SCA 靶心水稍尖一点。别把「能喝」和「靶心水」混成一件事。\n\n**实操，不折腾。** 配方与水源都不改：S3 6.6 / 93 °C / 30:350，先把总时间测进 3:00–3:15。若闻到氯味，冷水静置过夜或过一遍活性炭滤壶即可（会去掉氯，硬度/碱度大体还在）。不要用离子交换软水器把硬度换没——那会把昨天说的「硬度提味」轴砍掉。公寓楼管线偶尔会让你家水龙头和全市平均不一样；真要精调，再用 GH/KH 试纸测自己厨房的冷水。养豆已第 30 天，香气会更淡，这和水是另一件事。",
      "takeaways": [
        "DEP 2025：硬度均约 32、碱度均约 25 mg/L as CaCO₃——偏软可冲，不是「必须 RO」。",
        "碱度略低于 SCA≈40 → 缓冲少，酸质更容易露；深烘 + 你偏好低酸，先观察，不急换水。",
        "氯味：静置过夜或碳滤。别用软水器抽空硬度。配方仍不动，先测准总时间。"
      ],
      "try_today": "1. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。用厨房冷水龙头的水（别用热水龙头）。\n2. 先按秤上的 Timer 键，看到读数在走再开始。下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计。\n3. 0:00 开始闷蒸，注到 60 g。0:40 开始第 2 段，注到 150 g。1:10 开始第 3 段，注到 250 g。1:40 开始第 4 段，注到 350 g。\n4. 滴滤结束记下计时器读数（目标总时间 **3:00–3:15**）。\n5. 热着小口尝：酸是「尖」还是「平」？醇厚度够不够丝滑？今天只观察水源，不改研磨。",
      "sources": [
        {
          "label": "NYC DEP · 2025 Drinking Water Supply and Quality Report",
          "url": "https://www.nyc.gov/assets/dep/downloads/pdf/water/drinking-water/drinking-water-supply-quality-report/2025-drinking-water-supply-quality-report.pdf",
          "reliability": "高 · 官方年报；硬度/碱度/钙镁/余氯为分布系统实测范围与均值"
        },
        {
          "label": "NYC DEP · Drinking Water FAQs（硬度与水源）",
          "url": "https://www.nyc.gov/site/dep/water/drinking-water-frequently-asked-questions.page",
          "reliability": "高 · 官方说明 Cat/Del 偏软、Croton 中等硬及全市平均硬度"
        },
        {
          "label": "Jonathan Gagné · Water for Coffee Extraction（Coffee ad Astra）",
          "url": "https://coffeeadastra.com/2018/12/16/water-for-coffee-extraction/",
          "reliability": "中高 · 归纳 SCA 碱度≈40、钙硬度约 17–85 ppm as CaCO₃；部分配方对照未全面盲测"
        },
        {
          "label": "Barista Hustle · Water Hardness",
          "url": "https://www.baristahustle.com/water-hardness/",
          "reliability": "中高 · 讲清 GH/碱度与萃取、缓冲；教学稿，非单篇受控感官实验"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic, black ink with soft sage-green and cream watercolor on cream paper #F4EEE1. 16:9. Right side: smiling NYC water tower pouring into a gooseneck kettle beside a flat-bottom dripper. Empty upper-left for speech bubbles. No text in the image.",
      "image_alt": "右边一只微笑的纽约水塔往鼠尾草绿手冲壶里倒水，旁边是平底滤杯；左侧奶油色纸面留白给气泡。",
      "bubbles": [
        {
          "text": "纽约水\n能冲吗？",
          "x": 3,
          "y": 4,
          "tail": "left"
        },
        {
          "text": "能。偏软\n**先测准时间**",
          "x": 3,
          "y": 42,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "纽约水 vs 靶心（大致）",
        "steps": [
          {
            "label": "碱度偏低 · 酸更易露",
            "color": "#D9BE55"
          },
          {
            "label": "硬度约 32 · 可冲",
            "color": "#9CAF94"
          },
          {
            "label": "别软化抽空",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "能冲",
      "image": "images/2026-10-16.png",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加（GenerateImage）"
    },
    {
      "date": "2026-10-17",
      "code": "PO2",
      "branch": "注水",
      "level": "入门",
      "lesson_no": 13,
      "title": "分段注水与流速",
      "summary": "水穿过粉床，靠的是粉床上方那层水的重量往下压。段与段之间水位一落，往下压的力就小，水流变慢、也更不均匀：有的粉被绕开（萃取不足），有的通道被冲得太多（萃取过度），杯里就容易又酸又涩。所以分段注水真正要管的是：每段注得稳不稳、段间隔里粉床有没有露出来。今天配方不动，只练「水位不落底」。",
      "body": "**先说机制。** 手冲是渗滤：水靠重力穿过粉床。推它往下走的，是粉床上方那层水的重量；挡它的，是粉床的阻力。Coffee ad Astra 的 Jonathan Gagné 引用了一篇粉床流体模拟论文：流速太低时，水在粉床里走得不均匀，一些粉团被水流绕开，这部分就萃取不足。他据此推测，连续注水可能比两段注水萃取更均匀，因为它省掉了段间「水位低、往下压的水少、流速慢」的那段时间。他也写到：段数越多，萃取越不均匀，除非把研磨调粗来补偿——一是水位低的时间更多，二是粉层降温、水更粘。（这些是作者基于模拟的推论，不是定论。）\n\n**再说注水本身。** 注水也是搅动。Barista Hustle 的测试里，用 Hario Buono 壶要慢到约 3 ml/秒，水柱才接近垂直；平常的流速下水柱总带一点弧度，会把粉床推成斜面。壶嘴贴近液面，冲击和湍流小；所以他们建议注完水后再轻轻搅动或摇一下，把粉床整平。\n\n**放回你的杯子。** 你用的是 Blue Bottle 4 段（每段约 90–100 g，0:00 / 0:40 / 1:10 / 1:40 开始），段间隔只有 30 秒左右，本来就不算「多段慢等」。第 1 杯 S3 7.0 总时间约 2:30、偏酸单薄；第 2 杯 6.6 约 3:45 但没按 Timer，是估计值。这说明现在最大的不确定不是研磨，而是计时和注水节奏。今天不改变量，只把注水做稳：每段一口气、细流、绕小圈注完，下一段开始前粉床上始终留着一层水，不让它露出来。均匀一点的萃取，正好对你的口味：少一点「尖酸 + 涩」，多一点圆和饱满。",
      "takeaways": [
        "推水往下走的是粉床上方的水重。段间水位落底 → 压力小、流速慢 → 萃取不均（又酸又涩）。",
        "段数越多越容易不均，除非调粗补偿；Blue Bottle 4 段间隔约 30 秒，不算多，先把它做稳。",
        "壶嘴贴近液面、细流绕小圈；最后一段注完轻摇滤杯把粉床整平。今天不改变量，先测准总时间。"
      ],
      "try_today": "1. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。\n2. 先按秤上的 Timer 键，看到读数在走再开始。下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计，不是每段持续多久。\n3. 0:00 开始闷蒸，注到 60 g。0:40 开始第 2 段，注到 150 g。1:10 开始第 3 段，注到 250 g。1:40 开始第 4 段，注到 350 g。\n4. 每段：壶嘴放低、细流、绕小圈，一口气注到目标克数。下一段开始前看一眼——粉床上还有水吗？露出来了就记一句「第几段露床」。\n5. 第 4 段注完，端起滤杯轻轻转一圈，让粉床变平。滴滤结束记下计时器读数（目标总时间 **3:00–3:15**）。\n6. 热着小口尝：酸是尖还是圆？醇厚度够不够丝滑？",
      "sources": [
        {
          "label": "Jonathan Gagné · Extraction Uniformity and Channeling（Coffee ad Astra，2019-10-04）",
          "url": "https://coffeeadastra.com/2019/10/04/extraction-uniformity-and-channeling/",
          "reliability": "中高 · 物理学家解读粉床流体模拟论文；连续注水、多段注水的结论作者自己标为推测"
        },
        {
          "label": "Barista Hustle · P 1.06 The Mechanics of Pouring",
          "url": "https://www.baristahustle.com/lesson/p1-06-the-mechanics-of-pouring/",
          "reliability": "中高 · 教学课程，含自家手冲壶流速测试（约 3 ml/s 才接近垂直水柱）"
        },
        {
          "label": "Manual Coffee Brewing · Pulse Pouring vs. Continuous Pouring",
          "url": "https://manualcoffeebrewing.com/intro-to-pouring-techniques-pulse-pouring-and-continuous-pouring/",
          "reliability": "中 · 个人博客经验；用于分段注水的定义和常见每段 50–100 mL / 约 4 段"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic, black ink with soft sage-green and cream watercolor on cream paper #F4EEE1. 16:9. A smiling sage-green gooseneck kettle pours a thin steady stream into a smiling flat-bottom dripper on a glass server; a smiling hand grinder and small scale on the right. Empty top-center and upper-right paper for speech bubbles. No text in the image.",
      "image_alt": "左边一只微笑的鼠尾草绿手冲壶细流注进微笑的平底滤杯，下面是玻璃分享壶；右边是微笑的手摇磨豆机和小秤；上方中间留白给气泡。",
      "bubbles": [
        {
          "text": "段与段之间\n要等多久？",
          "x": 38,
          "y": 4,
          "tail": "left"
        },
        {
          "text": "别让粉床\n**露出来**",
          "x": 62,
          "y": 20,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "段间水位（大致）",
        "steps": [
          {
            "label": "露床 · 流慢不均",
            "color": "#D9BE55"
          },
          {
            "label": "薄薄一层水 · 稳",
            "color": "#9CAF94"
          },
          {
            "label": "满杯溢边 · 易绕流",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "不露床",
      "image": "",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加（GenerateImage）"
    },
    {
      "date": "2026-10-18",
      "code": "GR3",
      "branch": "研磨",
      "level": "进阶",
      "lesson_no": 14,
      "title": "细粉与均匀度",
      "summary": "研磨不是一个粒径，而是一整组粒径分布：同一刻度仍会同时产生细粉与较大颗粒。细粉贡献很大表面积，也会改变粉床阻力。2024 年 espresso 实验发现：细粉比例增加会降低渗透性、拉长萃取时间，但并未发现高细粉样品必然更难喝——所以「细粉越少越好」「磨得越细一定越苦」都过度简化。均匀度的价值是减少颗粒间萃取差异、让配方更可控，不是追求零细粉。你的 S3 是锥刀、Giant Steps 是深烘且已养到第 32 天，本来就会偏多细粉；今天配方不动，先把总时间测准，再观察粉里有没有明显大小差异。",
      "body": "**刻度不是一个数，是一条分布。** Coffee ad Astra 把一杯手冲想成：每一种粒径各自冲出一小杯，再混进你的杯子。分布宽，就相当于很多萃取不足的颗粒和一些萃取过度的细粉叠在一起。高品质磨豆机的意义，是把这条分布收窄，让平均萃取率可以推得更高，还不至于先被干涩拖垮。\n\n**细粉主要改的是渗透性。** 2024 年 *Scientific Reports*（Smrke 等）在 espresso 里系统加细粉（<100 µm）：细粉越多，粉床渗透性越低、流速越慢、总时间越长；但对萃取效率的额外贡献似乎不大。感官上，他们也没看到「细粉多 = 一定难喝」。结论限于压力萃取条件，不能直接抄到手冲的克数——但机制可以借：手冲里细粉同样会堵滤纸孔隙、拖慢滴滤，也会贡献更大表面积。\n\n**细粉不是越少越好。** Scott Rao 的「适中」说：细粉太多，局部堵死 → 通道 → 干涩；细粉太少，颗粒之间空隙过大 → 水走捷径，同样会把涩味大分子带出来。锥刀一般比平刀产更多细粉；深烘、偏干的豆也更容易碎出细粉。你的 Timemore S3 + Giant Steps（深烘拼配，养豆第 32 天）正好落在「细粉偏多」这一侧——这不是故障，是起点。\n\n**放回你的杯子。** 第 1 杯 S3 7.0、总时间约 2:30，偏酸单薄；第 2 杯 6.6、约 3:45 但没按 Timer。还没测准真实总时间之前，不要为了「去细粉」去筛粉或换磨——那会一次动好几个变量。今天只做两件事：按 Timer 把总时间测进 3:00–3:15；磨完粉看一眼分布，建立直觉。",
      "takeaways": [
        "同一刻度 = 细粉 + 主峰 + 大颗粒的混合；杯里是它们的平均。",
        "细粉主要降低渗透性、拖慢流速；2024 espresso 实验未证明「细粉多必然难喝」。",
        "适中的细粉让空隙更均匀；过少或过多都可能带来干涩。S3 锥刀 + 深烘 Day 32 → 细粉偏多是常态。"
      ],
      "try_today": "1. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。\n2. 先按秤上的 Timer 键，看到读数在走再开始。下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计，不是每段持续多久。\n3. 0:00 开始闷蒸，注到 60 g。0:40 开始第 2 段，注到 150 g。1:10 开始第 3 段，注到 250 g。1:40 开始第 4 段，注到 350 g。\n4. 磨完粉后捏一点在白纸上看一眼：有没有像面粉一样的细粉，和像粗海盐的大颗粒混在一起？不用筛、不用另做一杯——只是建立「分布」的直觉。\n5. 第 4 段注完轻摇滤杯整平粉床。滴滤结束记下计时器读数（目标总时间 **3:00–3:15**）。热着小口尝：酸是尖还是圆？有没有干涩？",
      "sources": [
        {
          "label": "Smrke et al. · The role of fines in espresso extraction dynamics（Scientific Reports, 2024）",
          "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC10920694/",
          "reliability": "高 · 同行评审原始实验；结论限于所测 espresso 条件，不能直接当手冲定量结论"
        },
        {
          "label": "Jonathan Gagné · How to Brew Better Coffee with a V60 · Grind Size and Uniformity（Coffee ad Astra, 2018）",
          "url": "https://coffeeadastra.com/2018/11/30/brewing-better-coffee/",
          "reliability": "中高 · 物理学家博客；粒径分布图与「杯是多种粒径的混合平均」机制写得清楚"
        },
        {
          "label": "Scott Rao · The happy medium amount of fines（2023）",
          "url": "https://www.scottrao.com/blog/happymediumfines",
          "reliability": "中高 · 经验推测 + 引用 Gagné；提出细粉过少/过多都会带来涩感的「适中」说"
        },
        {
          "label": "Barista Hustle · The Grinder Paper: Explained（2017）",
          "url": "https://www.baristahustle.com/the-grinder-paper-explained/",
          "reliability": "中高 · 解读 Scientific Reports 研磨论文；细粉贡献绝大部分表面积"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic, black ink with soft sage-green and cream watercolor on cream paper #F4EEE1. 16:9. A smiling Timemore-style conical hand grinder pours mixed-size grounds onto white paper — tiny flour-like fines mixed with larger coarse-salt particles, some cute faces. Smiling flat-bottom dripper and gooseneck kettle lower right. Large empty upper-left/top-center for speech bubbles. No text in the image.",
      "image_alt": "微笑的手摇磨豆机把大小不一的咖啡粉倒在白纸上，细粉和大颗粒混在一起；右下角是微笑的平底滤杯和手冲壶；左上留白给气泡。",
      "bubbles": [
        {
          "text": "细粉是不是\n越少越好？",
          "x": 8,
          "y": 4,
          "tail": "left"
        },
        {
          "text": "先看**分布**\n别急着筛",
          "x": 52,
          "y": 18,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "细粉量（大致）",
        "steps": [
          {
            "label": "太少 · 空隙大",
            "color": "#D9BE55"
          },
          {
            "label": "适中 · 空隙匀",
            "color": "#9CAF94"
          },
          {
            "label": "太多 · 易堵易涩",
            "color": "#5B4636"
          }
        ]
      },
      "try_big": "看分布",
      "image": "",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩；气泡由网页叠加。本回合 executor 无 cursor GenerateImage，图留空占位。"
    },
    {
      "date": "2026-10-19",
      "code": "OR1",
      "branch": "产区",
      "level": "入门",
      "lesson_no": 15,
      "title": "咖啡带与主要产区",
      "summary": "「咖啡带」是南北回归线之间那一圈，但真正画出边界的是温度，不是纬度。阿拉比卡最适年均约 18–21 °C，怕霜冻，也怕长期 30 °C 上下的高温。赤道附近太热，所以好咖啡多长在热带高地，用海拔换凉爽。你的 Giant Steps 来自乌干达、巴布亚新几内亚和苏门答腊，三个都贴着赤道。",
      "body": "**带子是温度画出来的。** NOAA 的整理说，阿拉比卡占全球咖啡产量约 70%，最适温度 18–21 °C，年均最多能忍到约 24 °C。再热，果实成熟会加快，品质反而下降；长期 30 °C 上下会伤树。CIAT 与 World Coffee Research 的研究（Bunn 等，PLOS ONE 2015）给的经济门槛是：年均约 20 °C、年降雨 1200 mm 以上；霜冻几天就能冻伤甚至冻死植株。所以「回归线之间」只是粗框。他们统计，北纬 30° 到南纬 33° 这一大圈里，真正适合阿拉比卡的土地只占约 7.2%。\n\n**赤道附近靠海拔降温。** 同一研究里，适合阿拉比卡的土地海拔中位数约 1024 m。最稳定的一类叫「恒温型」：几乎没有季节温差，海拔中位数约 1575 m，集中在哥伦比亚、埃塞俄比亚、肯尼亚和印尼这类赤道高地。巴西南部在热带边缘，季节温差大，要防霜。海拔为什么改变风味，明天 OR2 细讲。\n\n**「产区味」是一个打包。** 气候、品种、处理法会一起写进豆子。Kenneth Davids（Coffee Review）认为，苏门答腊那种醇厚度高、酸低的性格，更多来自当地特殊的处理和分段干燥，而不只是土壤和气候。处理法在 10/21 的 PR1 讲。\n\n**放回你的杯子。** Giant Steps 是乌干达、巴布亚新几内亚、苏门答腊的有机拼配，再烘到深烘，本来就是冲着低酸、厚重去的。所以第 1 杯的偏酸，更可能是萃取不足（总时间 2:30），不是产地的问题。今天配方仍不改，先把第 3 杯的总时间测准。",
      "takeaways": [
        "咖啡带的真正边界是温度：阿拉比卡最适约 18–21 °C，怕霜冻，也怕长期 30 °C 上下。",
        "赤道附近用海拔换凉爽：适合的土地海拔中位数约 1024 m，最稳定的「恒温型」高地约 1575 m。",
        "产区味 = 气候 + 品种 + 处理法。Giant Steps（乌干达 + 巴新 + 苏门答腊，深烘）天生偏低酸厚重；偏酸先查萃取。"
      ],
      "try_today": "1. 冲之前看一眼豆袋：上面写了哪些产地？和「乌干达、巴布亚新几内亚、苏门答腊」一致吗？记一句。\n2. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。\n3. 先按秤上的 Timer 键，看到读数在走再开始。下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计，不是每段持续多久。\n4. 0:00 开始闷蒸，注到 60 g。0:40 开始第 2 段，注到 150 g。1:10 开始第 3 段，注到 250 g。1:40 开始第 4 段，注到 350 g。\n5. 滴滤结束记下计时器读数（目标总时间 **3:00–3:15**）。热着小口喝：是巧克力、可可那种低沉的味道多，还是酸多？",
      "sources": [
        {
          "label": "NOAA Climate.gov · Climate & Coffee（2015，Kew 的 Aaron Davis 审阅）",
          "url": "https://www.climate.gov/news-features/climate-and/climate-coffee",
          "reliability": "高 · 美国政府气候机构科普，经植物学家审阅；温度数字有出处"
        },
        {
          "label": "Bunn et al. · Multiclass Classification of Agro-Ecological Zones for Arabica Coffee（PLOS ONE, 2015）",
          "url": "https://doi.org/10.1371/journal.pone.0140490",
          "reliability": "高 · 同行评审，CIAT 与 World Coffee Research 合作；基于 3545 个阿拉比卡产地格点"
        },
        {
          "label": "Kenneth Davids · Sumatra Coffees（Coffee Review, 1998）",
          "url": "https://www.coffeereview.com/sumatras/",
          "reliability": "中 · 资深杯测师的实地观察与观点，年代较早；「处理法决定苏门答腊性格」是他的判断，不是实验结论"
        },
        {
          "label": "Good Eggs · Blue Bottle Giant Steps 商品页",
          "url": "https://www.goodeggs.com/bluebottlecoffeessfbay/giant-steps-coffee-beans/5b7f30310d3d20000fa71123",
          "reliability": "中 · 第三方零售页转述 Blue Bottle 的产地信息；Blue Bottle 官网今天拒绝访问，未能直接核对"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic, black ink with soft sage-green and cream watercolor on cream paper #F4EEE1. 16:9. A hand-drawn globe with a soft green band around the middle between the tropics (the coffee belt), cute smiling coffee cherry plants dotted along the band. Lower right: a smiling kraft coffee bag holding a magnifying glass and a smiling pour-over dripper look up at the globe. Large empty upper-left/top-center for speech bubbles. No text in the image.",
      "image_alt": "手绘地球仪，中间绕着一条绿色的咖啡带，带上有一排微笑的咖啡果苗；右下角是拿着放大镜的牛皮纸豆袋和微笑的手冲滤杯，抬头看着地球；左上留白给气泡。",
      "bubbles": [
        {
          "text": "咖啡为什么\n只长在这一圈？",
          "x": 6,
          "y": 6,
          "tail": "left"
        },
        {
          "text": "不是纬度\n是**温度**",
          "x": 60,
          "y": 8,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "年均温度（阿拉比卡）",
        "steps": [
          {
            "label": "太冷 · 怕霜冻",
            "color": "#9CB3C4"
          },
          {
            "label": "约 18–21 °C · 最适",
            "color": "#9CAF94"
          },
          {
            "label": "太热 · 熟太快",
            "color": "#C8794A"
          }
        ]
      },
      "try_big": "看产地",
      "image": "",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩已生成，但图片文件今天没有落到 box 上，image 先留空（占位）。"
    },
    {
      "date": "2026-10-20",
      "code": "OR2",
      "branch": "产区",
      "level": "入门",
      "lesson_no": 16,
      "title": "海拔与风味",
      "summary": "海拔本身不加风味，它改的是温度：越往上越凉，咖啡果熟得越慢，种子有更多时间存糖和风味前体，豆子也往往更致密。但「多高才算高」要看纬度：赤道附近要 1000–2000 m 才够凉，离赤道远的地方几百米就够。研究还显示，海拔的效果常被遮荫和处理法改写，不是一条直线。",
      "body": "**海拔是温度的代号。** Barista Hustle 引用农学家 Leonardo Henao：白天约 17–23 °C 时，阿拉比卡的代谢和往种子里存糖最顺；在热带，这个温度多半要到海拔 1000–2000 m 才有。巴西农场主 Luiz Saldanha 说得更直接：高海拔本身不是品质的原因，降温才是。白天光合作用，夜里低温让代谢放慢，糖和有机酸才存得住。\n\n**熟得慢，存得多。** Worku 等（Food Research International 2018，埃塞俄比亚 1150–1820 m、108 个样本）在引言里总结：低温拉长果实成熟期，风味前体积累更多。他们测到：每升高 100 m，绿原酸约少 1.23 g/kg，咖啡因约少 0.12 g/kg；蔗糖随海拔增加，但只在水洗豆里显著；酸质只在遮荫种植时随海拔上升。Hu 等（Foods 2024，云南普洱 930–1520 m）发现：越高，坚果、烘烤类香气越少，焦糖、甜香越多；杯测的酸质和醇厚度几乎不随海拔变。\n\n**同一个数字，要配纬度读。** Saldanha 的农场在南纬 23.25°，只有 600–750 m，靠秋冬降温；他说同样 600 m 放在赤道附近的哥伦比亚，完全是另一回事。\n\n**放回你的杯子。** Giant Steps 的三个产地（乌干达、巴布亚新几内亚、苏门答腊）都贴着赤道，得靠海拔降温。但我今天打开的来源都没有给出这三处的具体海拔，所以不报数字。深烘会盖掉不少产地差别；对你要的低酸、丝滑、柔和，烘焙度和萃取比海拔更直接。配方仍不改，先把第 3 杯的总时间测准。",
      "takeaways": [
        "海拔是温度的代号：热带要 1000–2000 m 才有白天约 17–23 °C。凉 → 果实熟得慢 → 种子存的糖和风味前体更多，豆子往往更致密。",
        "海拔要配纬度读：离赤道越远，降到同样温度需要的海拔越低。同样 600 m，在回归线附近和在赤道附近完全不同。",
        "海拔不是一条直线：埃塞俄比亚研究里蔗糖只在水洗豆里随海拔显著增加、酸质只在遮荫时上升；普洱研究里酸质和醇厚度几乎不变。想要低酸柔和，先看烘焙度和萃取。"
      ],
      "try_today": "1. 早上冲。下午不喝咖啡（10/2 下午那杯让你熬到凌晨 2 点）。\n2. 冲之前看豆袋：有没有写海拔（m 或 masl）？有就记下数字；没有就记「没写」。\n3. 配方不变：S3 刻度 6.6 / 粉重 30 g / 水量 350 g / 93 °C。\n4. 先按秤上的 Timer 键，看到读数在走再开始。下面的时间都是计时器读数（开始时刻），从按下 Timer 开始累计，不是每段持续多久。\n5. 0:00 开始闷蒸，注到 60 g。0:40 开始第 2 段，注到 150 g。1:10 开始第 3 段，注到 250 g。1:40 开始第 4 段，注到 350 g。\n6. 滴滤结束记下计时器读数（目标总时间 **3:00–3:15**）。热着小口喝：焦糖、可可那种甜和低沉多，还是酸多？",
      "sources": [
        {
          "label": "Worku et al. · Effect of altitude on biochemical composition and quality of green arabica coffee beans can be affected by shade and postharvest processing method（Food Research International, 2018）",
          "url": "https://www.sciencedirect.com/science/article/abs/pii/S0963996917307858",
          "reliability": "高 · 同行评审，108 个埃塞俄比亚样本，给出每 100 m 的量化变化；今天只读到摘要、引言和部分正文预览"
        },
        {
          "label": "Hu et al. · The Growing Altitude Influences the Flavor Precursors, Sensory Characteristics and Cupping Quality of the Pu’er Coffee Bean（Foods, 2024）",
          "url": "https://doi.org/10.3390/foods13233842",
          "reliability": "中高 · 同行评审开放全文；但只采了一个村、5 个海拔点、单一品种，作者自己承认样本少"
        },
        {
          "label": "Barista Hustle · T 1.03 Altitude and Latitude — Interview with Willem Boot",
          "url": "https://www.baristahustle.com/lesson/t-1-03-altitude-and-latitude-a-balancing-act/",
          "reliability": "中高 · 专业咖啡教育平台，引用文献和农学家；访谈里「酸随海拔升高」是 Boot 的推测，他说自己没测过"
        },
        {
          "label": "Barista Hustle · T 1.03.1 Coffee Farming at High Latitudes — Interview with Luiz Roberto Saldanha",
          "url": "https://www.baristahustle.com/lesson/t-1-03-1-coffee-farming-at-high-latitudes-interview-with-luiz-roberto-saldanha/",
          "reliability": "中 · 一线农场主兼 Q Grader 的经验观点；「降温才是原因」「越高豆子越致密」没有附数据"
        }
      ],
      "illustration_prompt": "Hand-drawn sketchbook comic, black ink with soft sage-green and cream watercolor on cream paper #F4EEE1. 16:9. A misty mountain summit with a calm, smiling coffee cherry resting in cool fog; below, a sleepy, sweaty coffee cherry lounging in a warm sunny valley; a winding path connects them down the slope. Bottom-right: a curious pour-over dripper character looking up the mountain. Large empty space upper-left / top-center for speech bubbles. No text in the image.",
      "image_alt": "手绘水彩山景：雾气缭绕的山顶上，一颗神情安静、微笑的咖啡果；山下阳光很暖的山谷里，一颗昏昏欲睡的咖啡果；一条弯弯的小路连着上下。右下角一只好奇的手冲滤杯抬头看山；左上留白给气泡。",
      "bubbles": [
        {
          "text": "同样是咖啡果\n山顶和山谷差在哪？",
          "x": 5,
          "y": 5,
          "tail": "left"
        },
        {
          "text": "**凉**一点\n熟得**慢**一点",
          "x": 44,
          "y": 6,
          "tail": "left"
        }
      ],
      "gradient": {
        "label": "热带海拔与成熟（大致）",
        "steps": [
          {
            "label": "低海拔 · 热 · 熟得快",
            "color": "#C8794A"
          },
          {
            "label": "约 1000–2000 m · 白天约 17–23 °C",
            "color": "#9CAF94"
          },
          {
            "label": "太高 · 太冷 · 怕霜冻",
            "color": "#9CB3C4"
          }
        ]
      },
      "try_big": "看海拔",
      "image": "",
      "tag": "",
      "illustration_note": "方向 A 手绘水彩已生成，但图片文件今天没有落到 box 上，image 先留空（占位）。"
    }
  ],
  "beans": [
    {
      "id": "giant-steps",
      "name": "Giant Steps",
      "roaster": "Blue Bottle",
      "type": "拼配 · 偏深烘",
      "notes": "巧克力、厚重 · 产地：乌干达、巴布亚新几内亚、苏门答腊（有机拼配）",
      "roastDate": "2026-09-16"
    }
  ],
  "recipe": {
    "label": "第 3 杯计划",
    "bean": "giant-steps",
    "dose": 30,
    "water": 350,
    "tempC": 93,
    "grind": "6.6",
    "grindPrev": "6.6",
    "target": "3:00–3:15",
    "why": "<b>第 2 杯结果</b>（2026-10-03，养豆第 17 天）：S3 6.6 / 93 °C / 30 g : 350 g。总时间约 3:45。这是估计值，因为没有按 Timer。总时间偏长，原因是注水操作，不是研磨。豪力的评分是 5.5–6 / 10。<br><br><b>热的时候</b>：酸感仍明显，但入口顺了很多。咽下后不回酸。尾韵偏醇厚。这杯不明亮，也不算美味。<br><br><b>放凉后</b>（放到午饭后）：入口很浓。酸感仍在。苦味浮出来了，热的时候尝不出。原因有三个。第一，咖啡变凉后，甜感变弱，压不住苦味。第二，绿原酸内酯会慢慢分解成奎宁酸。奎宁酸又酸又涩。第三，变凉会暴露萃取不均或萃取过度。深烘豆变凉后更容易发苦。请趁热喝。<br><br><b>香气</b>：整豆、研磨后和杯里的香气都弱，像普通热美式，比新鲜挂耳还弱。原因有两个。第一，深烘拼配的香气本来就内敛。第二，到养豆第 17 天，挥发性香气已经随 CO₂ 散失，并且氧化了。挂耳每包都充氮密封，所以香气留在包里，打开时一次释放。<br><br><b>品鉴技巧</b>：用舌尖小口喝，然后直接咽下。这样尝到的酸感少很多。<br><br><b>下次改</b>：这一杯不改研磨，只把计时做准。S3 保持 6.6。先按 Timer，再严格按下面注水表的开始时刻注水。测出真实总时间。目标是 3:00–3:15。<br><br><br><br><b>今日课 OR2</b>：海拔与风味。海拔是温度的代号：越高越凉，果实熟得越慢，种子存的糖和风味前体更多。但要配纬度读，效果也会被遮荫和处理法改写。Giant Steps 三个产地都贴着赤道，具体海拔今天没查到可靠数字。深烘 + 你要低酸柔和，烘焙度和萃取比海拔更直接。配方不改，按 Timer 测准总时间。冲之前看一眼豆袋上有没有写海拔。明天 PR1 讲处理法。",
    "prep": [
      "S3 归零：把外圈顺时针转到底，让“0”对准红标。",
      "把外圈<b>逆时针转到 6.6</b>。（不归零也可以：从 7.0 顺时针调细 4 格。）",
      "磨 30 g 豆。粉的粗细像粗海盐。",
      "把 Fellow 设到 <b>93 °C</b>。",
      "把 Blue Bottle 滤纸放进滤杯。<b>不要预湿</b>滤纸。",
      "把滤杯和分享壶放到秤上。",
      "倒入粉，轻轻铺平。",
      "按 <b>TARE</b> 归零。",
      "<b>先按秤上的 Timer 键</b>，确认读数开始走动。然后马上开始闷蒸。（第 2 杯误按了秤右上角的键，没有计时。）"
    ],
    "timeline": [
      {
        "t": "0:00",
        "action": "开始闷蒸，注到 60 g。停止注水，等待。",
        "total": "60 g",
        "kind": "pour"
      },
      {
        "t": "0:40",
        "action": "开始第 2 段，注到 150 g。停止注水，等待。",
        "total": "150 g",
        "kind": "pour"
      },
      {
        "t": "1:10",
        "action": "开始第 3 段，注到 250 g。停止注水，等待。",
        "total": "250 g",
        "kind": "pour"
      },
      {
        "t": "1:40",
        "action": "开始第 4 段，注到 350 g。",
        "total": "350 g",
        "kind": "pour"
      },
      {
        "t": "≈1:50",
        "action": "停止注水。让咖啡自然滴滤。",
        "total": "350 g",
        "kind": "wait"
      },
      {
        "t": "3:00–3:15",
        "action": "滴滤结束。<b>记下这时的计时器读数</b>，它就是总时间。",
        "total": "—",
        "kind": "end"
      }
    ],
    "pourNote": "左列时间是<b>计时器读数</b>，表示每段的<b>开始时刻</b>。所有时间都从按下 Timer 开始累计。它们<b>不是每段持续多久</b>。计时器到 0:40，开始第 2 段。到 1:10，开始第 3 段。到 1:40，开始第 4 段。<br><br>每段注水时，从中心向外画螺旋，再绕回中心。注水只占大约前 2 分钟。剩下的时间都是滴滤。",
    "ifThen": [
      {
        "if": "总时间在 3:00–3:15，但放凉后还是发苦",
        "then": "下一杯只改一个变量：S3 调粗 2 格（例如 6.6 → 6.8），<b>或</b>把水温降到 <b>91 °C</b>"
      },
      {
        "if": "总时间在 3:00–3:15，热的时候和放凉后都不苦",
        "then": "固定这个配方，记为 Giant Steps 最佳配方"
      },
      {
        "if": "按注水表注水后，总时间仍超过 3:15",
        "then": "下一杯刻度先不变。检查注水速度，再考虑调粗"
      },
      {
        "if": "总时间 &lt; 3:00，而且偏酸 / 单薄",
        "then": "下一杯把 S3 调细到 <b>6.3</b>"
      },
      {
        "if": "闷蒸结束时粉面上还有干的、颜色浅的粉团",
        "then": "下一杯只改闷蒸：注到 <b>75 g</b>（粉重 2.5 倍），其他不变"
      }
    ]
  },
  "brews": [
    {
      "n": 1,
      "date": "2026-10-02",
      "bean": "giant-steps",
      "grind": "7.0",
      "tempC": 93,
      "dose": 30,
      "water": 350,
      "time": "≈2:30",
      "taste": "偏酸，醇厚度不足，偶尔有过度烘焙的味道",
      "score": null,
      "diagnosis": "萃取不足",
      "next": "S3 调细到 6.6",
      "status": "done"
    },
    {
      "n": 2,
      "date": "2026-10-03",
      "bean": "giant-steps",
      "grind": "6.6",
      "tempC": 93,
      "dose": 30,
      "water": 350,
      "time": "≈3:45（估计）",
      "taste": "热的时候：酸感仍明显，但入口顺了很多。咽下后不回酸。尾韵偏醇厚。不明亮，也不算美味。放凉后：入口很浓。酸感仍在。苦味浮出来了。香气弱，像普通热美式。评分 5.5–6 / 10。",
      "score": "5.5–6 / 10",
      "diagnosis": "总时间没测准（没按 Timer）。放凉后发苦，说明有一部分萃取过度或萃取不均",
      "next": "S3 保持 6.6。先按 Timer，再严格按注水表的开始时刻注水，测出真实总时间",
      "status": "done"
    },
    {
      "n": 3,
      "date": "",
      "bean": "giant-steps",
      "grind": "6.6",
      "tempC": 93,
      "dose": 30,
      "water": 350,
      "time": "目标 3:00–3:15",
      "taste": "",
      "score": null,
      "diagnosis": "",
      "next": "",
      "status": "planned"
    }
  ],
  "todos": [
    {
      "text": "冲第 3 杯。先按 Timer。然后把真实总时间、热的时候和放凉后的口感发给我。",
      "done": false
    },
    {
      "text": "冲第 2 杯（2026-10-03）：S3 6.6，约 3:45（估计），评分 5.5–6 / 10。",
      "done": true
    },
    {
      "text": "注册 Fellow（register.fellowproducts.com）",
      "done": true
    },
    {
      "text": "在 Notion 建好 Coffee Log（豆子表 + 冲煮表）",
      "done": true
    }
  ],
  "gear": [
    {
      "id": "s3",
      "name": "Timemore 栗子 S3",
      "sub": "手摇磨豆机 · 绿色 · 每格 0.015 mm",
      "quick": [
        [
          "归零",
          "1. 把底部锁紧旋钮顺时针拧到最紧。<br>2. 把外圈顺时针转到底，让“0”对准红标。"
        ],
        [
          "调粗 / 调细",
          "从 0 起：<b>逆时针转 = 调粗</b>，顺时针转 = 调细。"
        ],
        [
          "手冲区间",
          "说明书范围 <b>5.0–8.0</b> · 当前刻度 <b>6.6</b>"
        ],
        [
          "每次装豆",
          "最多 30 g"
        ]
      ],
      "details": [
        {
          "h": "说明书研磨表（刻度；说明书的单位写作 Clicks）",
          "table": [
            [
              "Espresso",
              "0 – 1.0"
            ],
            [
              "Moka",
              "0.5 – 2.0"
            ],
            [
              "Pour over",
              "5.0 – 8.0"
            ],
            [
              "French press",
              "8.0 – 9.0"
            ]
          ]
        },
        {
          "h": "刻度怎么读",
          "p": "外圈每两个整数之间约有 10 格。1 格 = 0.015 mm。例如：“调细 3 格”就是 7.0 → 6.7。"
        },
        {
          "h": "部件",
          "p": "A 盖子<br>B 折叠摇把<br>C 外调刻度盘<br>D 机身<br>E 底部锁紧旋钮：不要用它调研磨。平时保持拧紧。逆时针拧几圈，可以取出内磨芯。<br>F 粉仓<br>G 硅胶垫"
        },
        {
          "h": "折叠",
          "p": "折叠：<br>1. 把延伸管向外拉，离开机身。<br>2. 把摇把向下折。<br>使用：<br>1. 抬起摇把。<br>2. 把摇把卡进自锁位。"
        },
        {
          "h": "故障 & 保养",
          "p": "刻度盘太松时：<br>1. 握住机身，轻轻晃动摇把。<br>2. 听到“咔”一声，就好了。<br>3. 如果还是松，取出磨芯，清洁磨芯。<br>清洁时只用刷子或气吹。<b>不要用任何液体</b>。磨芯很锋利。建议不要自己拆换磨芯。"
        },
        {
          "h": "说明书矛盾处",
          "p": "说明书里有一句：“从 START POINT 顺时针转到所需刻度”。这句话和“顺时针 = 调细”矛盾。请以“从 0 逆时针转 = 调粗”为准。"
        }
      ]
    },
    {
      "id": "fellow",
      "name": "Fellow Stagg EKG Pro",
      "sub": "电热手冲壶 · Woodland + Walnut · 0.9 L",
      "badge": "已注册 ✓",
      "quick": [
        [
          "开 / 待机",
          "按一下旋钮"
        ],
        [
          "设温度",
          "转动旋钮。单位已设为 °C。"
        ],
        [
          "计时",
          "长按旋钮 2 秒，启动 Brew Stopwatch"
        ],
        [
          "Pre-boil",
          "<b>保持关闭</b>。纽约自来水本身安全。打开它只会多等几分钟。"
        ]
      ],
      "details": [
        {
          "h": "菜单（Menu 键）",
          "p": "General（WiFi / 语言）· Units °F/°C · Altitude（设 <b>0 ft</b>）· Pre-boil · Chime · Schedule · Hold 15/30/45/60 min · Guide mode"
        },
        {
          "h": "Pre-boil 是什么",
          "p": "说明书原文：“Boil to sanitize water before heating to your target temperature”。意思是：水壶先把水烧开消毒，再降到目标温度。它对味道的影响可以忽略。但每壶水要多等几分钟。"
        },
        {
          "h": "规格 & 保修",
          "p": "1000–1200 W · 保修 2 年 · 已注册（不买延保）· WiFi / 固件更新用 Fellow app · <b>不要放在炉灶上</b>"
        }
      ]
    },
    {
      "id": "scale",
      "name": "Timemore 黑镜 Basic 3",
      "sub": "电子秤 · 白色 · 0.1 g · <b>无蓝牙</b>",
      "keymap": true,
      "quick": [
        [
          "左下 · 时钟",
          "<b>Timer</b>：短按 = 开始 / 暂停。长按 = 重置。"
        ],
        [
          "右上 · 饼图",
          "<b>Ratio</b>：短按 = 记录粉重。长按 = 打开 / 关闭粉水比。"
        ],
        [
          "右下 · 电源",
          "<b>TARE</b>：短按 = 归零。长按 = 休眠。"
        ],
        [
          "侧边开关",
          "拨到 off = 关机。拨向 M = 开机，并切换模式（标准 / 手冲 / 意式）。"
        ]
      ],
      "details": [
        {
          "h": "手冲模式",
          "p": "1. 按 TARE 归零。<br>2. 倒入粉。<br>3. 短按 Ratio。<br>4. 按 Timer。秤开始 3 秒倒计时。<br>秤检测到注水后，会自动开始计时。停止注水 40 秒后，秤会自动停止计时。"
        },
        {
          "h": "其他按键",
          "p": "长按 Timer 4 秒：打开 / 关闭声音。<br>快速连按 TARE 6 次：切换 g / oz。<br>意式模式下，重量变化超过 50 g 时，秤会自动唤醒。"
        },
        {
          "h": "规格",
          "p": "0.2–2000 g · Type-C 5V/1A–2A · 1600 mAh · 闲置 3 分钟自动关机 · 不防水"
        },
        {
          "h": "蓝牙",
          "p": "这台秤没有蓝牙，不能连接 App。所以你要手动记录数据。如果以后想自动记录重量 / 流速曲线，你需要换一台蓝牙秤。例如 Acaia，或者带蓝牙的 Timemore 黑镜型号。"
        }
      ]
    },
    {
      "id": "dripper",
      "name": "Blue Bottle 陶瓷滤杯",
      "sub": "日本有田 Kyuemon 窑 · 专用滤纸",
      "quick": [
        [
          "滤纸",
          "<b>不要预湿</b>"
        ],
        [
          "研磨粗细",
          "像粗海盐"
        ],
        [
          "水温",
          "90.5–96 °C（195–205 °F）"
        ],
        [
          "粉重 / 350 g 水",
          "拼配 30 g · 单品 22–24 g"
        ]
      ],
      "details": [
        {
          "h": "为什么拼配用 30 g，单品用 22–24 g",
          "p": "拼配豆烘得偏深，容易萃取。多用一些粉（粉水比约 1:11.7），醇厚度和甜感会更强。浅烘单品较难萃取。它需要更多水（粉水比约 1:15），才能冲出清晰度和酸质。闷蒸水量：拼配 60 g，单品 40 g。"
        },
        {
          "h": "对照：Fellow 小册子配方",
          "p": "参数：93.5–96 °C · 20 g / 320 g（1:16）· 研磨粗细：中至中粗 · 总时间 2:45–3:30<br>步骤：<br>1. 预湿滤纸。<br>2. 闷蒸：注水到 40 g，等 30–40 s。<br>3. 依次注水到 150 g → 250 g → 320 g（秤上累计重量）。"
        }
      ]
    }
  ],
  "method": {
    "summary": "大多数人只记“豆子 + 参数 + 一句口感”。长期最有价值的，是能跨杯、跨袋比较的数据。",
    "minimal": [
      "豆子",
      "养豆天数（自动算）",
      "S3 刻度",
      "粉重 / 水量",
      "水温 °C",
      "总时间",
      "一句口感",
      "评分 1–5",
      "下次改什么"
    ],
    "perBag": [
      "烘焙商",
      "产地",
      "处理法",
      "品种",
      "烘焙度",
      "烘焙日期",
      "价格 / 重量",
      "官方风味",
      "最佳配方",
      "是否回购"
    ],
    "compound": [
      "<b>养豆天数 × 风味</b>（按烘焙商分）：从第 7–10 天开始记录。之后每 3–5 天记一次。",
      "<b>你自己的 S3 刻度地图</b>：按处理法 × 烘焙度，记下最佳刻度。",
      "<b>“下次改 X”</b>：一次只改一个变量（参考 <a href=\"https://www.baristahustle.com/wp-content/uploads/2021/09/Coffee-Compass.pdf\">Coffee Compass</a>）。",
      "<b>偏好画像</b>：有一位作者记录了 3 年、200 多款豆。这位作者发现，80% 的高分豆是水洗非洲豆（<a href=\"https://www.smkfh.com/gao-bie-za-luan-wu-zhang-jian-li-ni-de-ge-ren/\">来源</a>）。",
      "<b>成本 / 库存</b>（算每杯成本）· <b>维护日期</b> · 有折射仪时，记录浓度 TDS / 萃取率 EY（<a href=\"https://www.scottrao.com/blog/2018/10/4/using-extraction-levels-to-rate-grinders\">Scott Rao</a>）"
    ],
    "pitfalls": [
      "记录疲劳：只在调新豆或做实验时详细记录。日常记录在 30 秒内完成。",
      "评分要用固定锚点：1 = 免费也不喝，5 = 愿意多付钱。进阶可参考 <a href=\"https://sca.coffee/sca-news/sca-new-cva-cupping-standards-7ga28\">SCA CVA</a>。",
      "不要写“细一点 / 好喝”。要写具体内容，例如“7.0 → 6.6 / 黑巧、尾韵微涩”。",
      "心情、湿度、每杯拍照都是可选项。"
    ],
    "tools": [
      {
        "name": "Notion 两表",
        "rec": true,
        "desc": "豆子表 + 冲煮表。用公式自动算养豆天数和每杯成本。推荐。"
      },
      {
        "name": "Beanconqueror",
        "desc": "免费。讨论里提到最多。字段丰富，可以导出数据。",
        "url": "https://beanconqueror.com/blog/customize-your-workflow/"
      },
      {
        "name": "Filtru",
        "desc": "专门的咖啡日志 App，界面更简洁。",
        "url": "https://getfiltru.com/coffee-journal-app/"
      }
    ],
    "sources": [
      [
        "Reddit · 记录哪些变量",
        "https://www.reddit.com/r/pourover/comments/18eapiv/starting_a_pourover_log_what_variables_should_i/"
      ],
      [
        "Reddit · 大家怎么记",
        "https://www.reddit.com/r/pourover/comments/1rp3a93/how_do_you_folks_log_your_brews/"
      ]
    ]
  },
  "changelog": [
    {
      "date": "2026-10-20",
      "items": [
        "推送 Morning Gradient 第 16 课 OR2「海拔与风味」（来源：Worku 等 Food Research International 2018、Hu 等 Foods 2024、Barista Hustle T 1.03 Willem Boot、Barista Hustle T 1.03.1 Luiz Saldanha）。",
        "配图：已生成，但文件没落到 box 上，image 留空（占位）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15；新增观察「看豆袋上有没有写海拔」。",
        "Giant Steps 养豆第 34 天，约 280 g（340−30−30）。新闻：「100% Kona」造假案追加 4 项联邦税务指控，审判可能推迟；Roast 杂志公布 2027 年度烘焙商（Dessert Oasis、Utopian Coffee）。"
      ]
    },
    {
      "date": "2026-10-19",
      "items": [
        "推送 Morning Gradient 第 15 课 OR1「咖啡带与主要产区」（来源：NOAA Climate.gov Climate & Coffee、Bunn 等 PLOS ONE 2015、Coffee Review Sumatra Coffees、Good Eggs Giant Steps 商品页）。",
        "配图：已生成，但文件没落到 box 上，image 留空（占位）。",
        "豆子卡补上 Giant Steps 产地：乌干达、巴布亚新几内亚、苏门答腊。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15；新增观察「看豆袋上的产地」。",
        "Giant Steps 养豆第 33 天，约 280 g（340−30−30）。新闻：Sprudge 报道西西里已能小量种出阿拉比卡（气候变暖的副作用）；2027 年 7 项世界咖啡大赛的时间地点全部敲定（世界手冲大赛和杯测赛在波哥大）。"
      ]
    },
    {
      "date": "2026-10-18",
      "items": [
        "推送 Morning Gradient 第 14 课 GR3「细粉与均匀度」（来源：Scientific Reports 2024 fines in espresso、Coffee ad Astra Grind Size and Uniformity、Scott Rao happy medium fines、Barista Hustle The Grinder Paper Explained）。",
        "配图：本回合 GenerateImage 不可用，image 留空（占位）；昨日 PO2 同理无图。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15；新增观察「磨完粉看一眼粒径分布」。",
        "Giant Steps 养豆第 32 天，约 280 g（340−30−30）。新闻：近 48 小时内无特别值得说的（夏威夷联邦咖啡研究项目昨日已提）。"
      ]
    },
    {
      "date": "2026-10-17",
      "items": [
        "推送 Morning Gradient 第 13 课 PO2「分段注水与流速」（来源：Coffee ad Astra Extraction Uniformity and Channeling、Barista Hustle P 1.06 The Mechanics of Pouring、Manual Coffee Brewing Pulse vs Continuous）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15；新增注水要点「下一段开始前不露床」。",
        "Giant Steps 养豆第 31 天，约 280 g。新闻：夏威夷大学牵头的联邦咖啡与可可研究项目（DCN）；哥伦比亚 2025/26 产量与出口降超 12%（PDG 周报）。"
      ]
    },
    {
      "date": "2026-10-16",
      "items": [
        "推送 Morning Gradient 第 12 课 WA2「纽约自来水能冲吗」（来源：NYC DEP 2025 水质年报、DEP Drinking Water FAQs、Coffee ad Astra Water for Coffee Extraction、Barista Hustle Water Hardness）。",
        "配图：images/2026-10-16.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。Giant Steps 养豆第 30 天；新闻无值得说的。"
      ]
    },
    {
      "date": "2026-10-15",
      "items": [
        "推送 Morning Gradient 第 11 课 WA1「水里的矿物质」（来源：SCA Water and the Taste of Coffee、SCA 25/9 Wellinger、Coffee ad Astra Water for Coffee Extraction、Barista Hustle Water Hardness）。",
        "配图：images/2026-10-15.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。新增观察：分清硬度与碱度两轴；新闻无值得说的。"
      ]
    },
    {
      "date": "2026-10-14",
      "items": [
        "推送 Morning Gradient 第 10 课 EX3「TDS 与萃取率」（来源：SCA/UC Davis Towards a New Brewing Chart、Coffee ad Astra Dynamics + Measuring EY、Barista Hustle Coffee Compass）。",
        "配图：images/2026-10-14.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。新增观察：分清浓度（TDS）与萃取率（EY）两轴。"
      ]
    },
    {
      "date": "2026-10-13",
      "items": [
        "推送 Morning Gradient 第 9 课 RT1「粉水比」（来源：SCA/UC Davis Towards a New Brewing Chart、SCA 310-2021、Coffee ad Astra、Barista Hustle Coffee Compass）。",
        "配图：images/2026-10-13.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。新增观察：分清「浓」与「偏酸」。"
      ]
    },
    {
      "date": "2026-10-12",
      "items": [
        "推送 Morning Gradient 第 8 课 FD1「滤杯形状与流速」（来源：SCA/UC Davis Flat vs Cone、Scott Rao、Coffee ad Astra、Prima Coffee Blue Bottle 滤杯对比）。",
        "配图：images/2026-10-12.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。新增观察：滴滤时粉床是否平整、水是否从中心孔均匀流下。"
      ]
    },
    {
      "date": "2026-10-11",
      "items": [
        "推送 Morning Gradient 第 7 课 EX2「第一周复盘 · 萃取的三个变量」（来源：UC Davis 两篇 Scientific Reports 论文）。",
        "配图：images/2026-10-11.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。重点只有一个：按 Timer，测准总时间。"
      ]
    },
    {
      "date": "2026-10-10",
      "items": [
        "推送 Morning Gradient 第 6 课 PO1「闷蒸在做什么」。",
        "配图：images/2026-10-10.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。新增观察：闷蒸结束时有没有干粉团；配方页“如果…就…”加了一条闷蒸 75 g 的规则。"
      ]
    },
    {
      "date": "2026-10-09",
      "items": [
        "推送 Morning Gradient 第 5 课 RT2「水温怎么选」（10/7–10/8 暂停期间漏推，课程整体顺延 2 天，一课不跳）。",
        "配图：images/2026-10-09.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。新增：留一口放凉 20 分钟，用来判断下一杯要不要降到 91 °C。"
      ]
    },
    {
      "date": "2026-10-06",
      "items": [
        "推送 Morning Gradient 第 4 课 RO2「深烘豆的养豆期」。",
        "配图：images/2026-10-06.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。新增观察：闷蒸鼓起多高、整豆和研磨后的香气。"
      ]
    },
    {
      "date": "2026-10-05",
      "items": [
        "推送 Morning Gradient 第 3 课 GR1「研磨粗细与流速」。",
        "配图：images/2026-10-05.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。先按 Timer，拿到真实总时间再决定要不要动刻度。"
      ]
    },
    {
      "date": "2026-10-04",
      "items": [
        "推送 Morning Gradient 第 2 课 TA1「好酸 vs 坏酸」。",
        "配图：images/2026-10-04.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 3 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。先按 Timer。品鉴重点：区分酸质与偏酸。"
      ]
    },
    {
      "date": "2026-10-03",
      "items": [
        "记入第 2 杯（2026-10-03）：S3 6.6 / 93 °C / 30 g : 350 g / 总时间约 3:45（估计，没按 Timer）/ 评分 5.5–6 / 10。",
        "第 2 杯的口感：热的时候入口顺，不回酸，尾韵偏醇厚。放凉后苦味浮出来。香气弱。",
        "冲煮日记改为第 3 杯计划：S3 保持 6.6，先按 Timer，严格按注水表的开始时刻注水，目标总时间 3:00–3:15。",
        "修改前的 data.js 备份在 backup/v9-pre-brew2-20261003-1732/。"
      ]
    },
    {
      "date": "2026-10-03",
      "items": [
        "新增页面「市场研究」（research.html）：全自动手冲咖啡机市场研究。",
        "这个页面使用 Hermes Design 风格（致敬 Nous Research）。其他页面保持原样。",
        "Notion 新增「市场研究 · Market Notes」库。报告全文也写在那里。"
      ]
    },
    {
      "date": "2026-10-03",
      "items": [
        "推送 Morning Gradient 第 1 课 EX1「偏酸 = 萃取不足？」。",
        "配图：images/2026-10-03.png（方向 A 水彩插画）。",
        "今日冲煮计划仍是第 2 杯：S3 6.6 / 93 °C / 30:350 / 目标总时间 3:00–3:15。"
      ]
    },
    {
      "date": "2026-10-02",
      "items": [
        "全站文字按 ASD-STE100 简明语言规则改写：短句、一句一事、主动语态、步骤编号。",
        "统一术语（见 ROUTINE.md 的术语表）。例如：“格”统一指 S3 的 1 格 = 0.015 mm；“刻度”只指 S3 上的数字。",
        "注水表说明：所有时间都是从按下 Timer 开始累计的开始时刻。",
        "修改前的版本备份在 backup/v7-pre-ste/。"
      ]
    },
    {
      "date": "2026-10-02",
      "items": [
        "Morning Gradient 课程体系改为 13 个分支 × 3 个级别（每格 2 课，共 78 课）。每个分支有课号前缀（EX / GR / WA …）。",
        "示例课换成正式第 1 课 EX1「偏酸 = 萃取不足？」（2026-10-03）。内容与 Notion「Morning Gradient · Lessons」一致。",
        "课程卡显示课号。来源标注可靠度。课程地图每格显示“✓ 已学 / 2”。",
        "今日卡片改为方向 A（用户 2026-10-02 选定）。",
        "方向 A 卡片包含：一幅大水彩插画、1–2 个对话气泡、大标题、短解释、“酸 → 甜 · 醇厚度 → 苦 · 涩”水彩圆点、鼠尾草绿“今天试试”便签。卡片仍可展开全文。",
        "内置霞鹜文楷 / Caveat 字体子集（assets/fonts/，约 4.4 MB）。Mac 上没装这两款字体，也能正常显示。"
      ]
    },
    {
      "date": "2026-10-02",
      "items": [
        "拆成多页静态站：index（Morning Gradient）/ brew-today / brews / gear / about。",
        "各页共用 assets/style.css、assets/app.js、data/data.js（window.LR_DATA）。在 file:// 下也能直接打开。",
        "Morning Gradient 改为课程体系：分支 × 级别地图、按分支筛选的往期、展开全文、配图（images/）。"
      ]
    },
    {
      "date": "2026-10-02",
      "items": [
        "命名为 Latent Roast / Morning Gradient（原“豪力的咖啡手册” / “今日咖学”）"
      ]
    },
    {
      "date": "2026-10-02",
      "items": [
        "信息架构调整：Morning Gradient → 冲煮日记 → 全部记录 → 装备（默认折叠）。",
        "新增 daily 每日知识卡数组（先放 1 条示例）。页面显示日期等于今天的那条；没有就显示最新一条。页面附“往期”列表。",
        "“记录方法”和“更新日志”移到页脚“关于”，默认折叠。"
      ]
    },
    {
      "date": "2026-10-02",
      "items": [
        "页面改为“手册”结构：当前配方 / 冲煮记录 / 装备速查 / 记录方法 / 更新日志。",
        "注水表改成“计时器读数 | 动作 | 秤上累计重量”。表下说明：时间是开始时刻，不是持续时长。",
        "当前配方改为第 2 杯计划：S3 7.0 → 6.6，目标总时间 3:00–3:15。",
        "记入第 1 杯：7.0 / 93 °C / 30:350 / ≈2:30。判断为萃取不足。",
        "Fellow 已注册，不买延保。建议关闭 Pre-boil。",
        "内容和排版分离：所有内容放在顶部的 JSON 里。"
      ]
    },
    {
      "date": "2026-10-02",
      "items": [
        "初版：装备到齐汇报、第一杯配方、装备指南、记录方法研究。"
      ]
    }
  ],
  "research": {
    "title": "全自动手冲咖啡机 · 市场研究",
    "kicker": "MARKET NOTES · 001 · AUTO POUR-OVER",
    "date": "2026-10-03",
    "notion": "https://app.notion.com/p/3ee5c472f0c581118c4be6316370bf73",
    "lede": "2026 年 9 月，两家大公司进入了全自动手冲机市场。Cosori 在 9 月 10 日发布 Juni。Breville 在 9 月最后一周发布 Spiral Luxe。这份报告整理了主要玩家、用户群、竞争格局和用户反馈。每个数字都附来源链接和可靠度。",
    "method": "研究时间：2026-10-03（ET）。来源：行业媒体、官网、上手评测、X 帖子。Reddit 和京东商品页拦截了抓取，所以本报告不引用它们的原帖。没有找到可靠的销量或市场份额数据，所以本报告不写市场规模。",
    "findings": [
      "**品类正在升温。** 2026 年 9 月有两家大家电公司入场：Cosori Juni（9/10，$299.99 起）和 Breville Spiral Luxe（9 月底，$599.95）。[S11][S1]",
      "**$600 是主战场。** xBloom Studio（$599）和 Spiral Luxe（$599.95）都内置磨豆机，价格几乎相同。[S5][S1]",
      "**两家的路线不同。** xBloom 是单杯、蓝牙 App、有 xPod 豆仓生态。Spiral Luxe 不联网，出 20 oz 一壶，靠按键和屏幕操作。[S5][S1]",
      "**$300–$450 是入门档。** Cosori Juni 不带磨豆机。Gevi BrewOne 带 60 mm 平刀，官网现价 $449。[S11][S17]",
      "**xBloom 有中国背景。** 创始团队来自 Apple。种子轮 1500 万美元来自中国投资方。国内以“钢琴师”名称销售，一位用户 2024 年花 3888 元购入。[S8][S10]",
      "**可靠性是最大风险。** Gevi 有水量传感器故障的用户报告。xBloom 评测提到学习曲线和单次最多 25 g 粉。[X3][S7]",
      "**Spiral Luxe 还没有真实用户反馈。** 截至 10/3，X 上只有发布类帖子。建议等 4–8 周的独立评测再判断。[X6]",
      "**商用端已成熟。** 布鲁克林的 Poursteady 在 SCA 2015 获最佳新品，零售价 $7,875 起。[S20][S21]"
    ],
    "players": [
      {
        "name": "Breville Spiral Luxe",
        "maker": "Breville Group（悉尼；旗下有 Baratza、Lelit）",
        "kind": "大公司",
        "price": "$599.95",
        "launch": "2026-09（Breville 官网、Williams Sonoma）",
        "grinder": "内置 40 mm 平刀，无级调节",
        "cups": "一壶 20 oz（约 590 ml）",
        "pods": "无豆仓生态；可用预磨粉",
        "connect": "不联网（无 Wi-Fi / 蓝牙）",
        "notes": [
          "喷嘴按螺旋路径移动注水。",
          "可调粉水比、水温、注水段数和停顿。",
          "水温只有 3 档：190 / 198 / 205 °F（约 88 / 92 / 96 °C）。",
          "按粉水比算粉重，再按时间定量研磨。"
        ],
        "src": [
          "S1",
          "S3"
        ]
      },
      {
        "name": "xBloom Studio",
        "maker": "TBDx Inc（2021 年成立于硅谷）",
        "kind": "创业公司",
        "price": "$599（国内约 3888 元）",
        "launch": "初代 2022；Studio 现售",
        "grinder": "内置 48 mm 锥刀，80 档，每档 18.75 μm",
        "cups": "单杯 8–11 oz；最多 25 g 粉",
        "pods": "xPod 整豆豆仓 + NFC 配方卡；也可用自己的豆",
        "connect": "蓝牙 5.0 + App",
        "notes": [
          "内置秤，精度 0.1 g。",
          "注水方式：中心、绕圈、螺旋。",
          "水箱 946 ml；可接水管。",
          "xPod 8 颗装 $17–28。"
        ],
        "src": [
          "S5",
          "S6",
          "S7",
          "S10"
        ]
      },
      {
        "name": "Cosori Juni",
        "maker": "Cosori（VeSync 旗下，加州 Tustin）",
        "kind": "大公司",
        "price": "$299.99（玻璃壶）/ $349.99（不锈钢壶）",
        "launch": "2026-09-10",
        "grinder": "无",
        "cups": "锥形篮最多 600 ml；平底篮最多 1.5 L",
        "pods": "无",
        "connect": "VeSync App；扫豆袋生成 AI 配方",
        "notes": [
          "篮子旋转，喷嘴移动，做 360° 螺旋注水。",
          "水温 80–96 °C。",
          "可选震动，注水前整平粉层。",
          "SCA 认证；2026 红点奖。"
        ],
        "src": [
          "S11",
          "S12"
        ]
      },
      {
        "name": "Fellow Aiden",
        "maker": "Fellow（旧金山）",
        "kind": "专业品牌",
        "price": "$399.95",
        "launch": "现售",
        "grinder": "无",
        "cups": "单杯到 10 杯（1.5 L）",
        "pods": "无；Fellow Drops 按周推豆，配方自动同步",
        "connect": "App（预约、配方、固件）",
        "notes": [
          "双淋水头，不是移动喷嘴。",
          "可调闷蒸和脉冲注水。",
          "SCA 认证。",
          "保温壶 1 小时后实测 160.9 °F（约 71.6 °C）。"
        ],
        "src": [
          "S13",
          "S14"
        ]
      },
      {
        "name": "Gevi BrewOne 4-in-1",
        "maker": "Gevi（中国制造）",
        "kind": "专业品牌",
        "price": "$449（官网促销；原价 $699.99）",
        "launch": "2021 年起",
        "grinder": "内置 60 mm 平刀，51 档",
        "cups": "1–4 杯；水箱 640 ml",
        "pods": "无",
        "connect": "触屏；配方可保存和分享",
        "notes": [
          "内置秤，精度 0.1 g。",
          "三个旋转出水口。",
          "研磨、称重、烧水、冲煮四合一。",
          "2021 红点奖。"
        ],
        "src": [
          "S17",
          "S18"
        ]
      },
      {
        "name": "Hiroia Hikaru",
        "maker": "Hiroia（台湾；最初是 Hario 参与的合资公司）",
        "kind": "专业品牌",
        "price": "$799",
        "launch": "2023",
        "grinder": "无",
        "cups": "最多 3 杯；水箱 700 ml",
        "pods": "无",
        "connect": "蓝牙 5.2 + App；二维码分享配方",
        "notes": [
          "中心淋水头，5 个出水孔，不绕圈。",
          "10 档流速：3–12 ml/s。",
          "水温 80–96 °C。",
          "内置秤；附 V60 滤杯。"
        ],
        "src": [
          "S15",
          "S1"
        ]
      },
      {
        "name": "Ratio Eight S2",
        "maker": "Ratio（美国）",
        "kind": "专业品牌（相邻品类）",
        "price": "$699",
        "launch": "现售",
        "grinder": "无",
        "cups": "最多 40 oz（约 1.2 L）",
        "pods": "无",
        "connect": "无；一键两档配方",
        "notes": [
          "这是设计型滴滤机，不是移动喷嘴。",
          "实木、手吹玻璃、不锈钢水路。",
          "放在这里做审美参照。"
        ],
        "src": [
          "S19"
        ]
      },
      {
        "name": "Poursteady PS1 / PS2",
        "maker": "Steady Equipment（纽约布鲁克林）",
        "kind": "商用",
        "price": "PS2 $7,875 起；PS1 5 杯 $12,508 起",
        "launch": "PS1 获 SCA 2015 最佳新品",
        "grinder": "无",
        "cups": "同时冲 2–5 杯；约每分钟 1 杯",
        "pods": "无",
        "connect": "Wi-Fi / 以太网；Web App 同步配方",
        "notes": [
          "需要台下锅炉。",
          "面向咖啡馆。"
        ],
        "src": [
          "S20",
          "S21"
        ]
      },
      {
        "name": "Hiroia Samantha II",
        "maker": "Hiroia（台湾）",
        "kind": "商用",
        "price": "$1,599",
        "launch": "现售",
        "grinder": "无",
        "cups": "商用单头",
        "pods": "无",
        "connect": "蓝牙 + Wi-Fi；云端管理多台",
        "notes": [
          "自动进水和排水。",
          "15 档流速：2–16 ml/s。",
          "App 只支持 iOS。"
        ],
        "src": [
          "S16"
        ]
      },
      {
        "name": "百胜图 Barsetto O2（BAP-O2）",
        "maker": "百胜图（广东）",
        "kind": "国内品牌",
        "price": "未核实（京东页无法打开）",
        "launch": "2022 年获红顶奖提名",
        "grinder": "内置 60 mm 镀钛刀盘",
        "cups": "未核实",
        "pods": "无",
        "connect": "Wi-Fi + 小程序分享配方",
        "notes": [
          "三条水柱，360° 环绕注水。",
          "世界冲煮冠军杜嘉宁代言。"
        ],
        "src": [
          "S22"
        ]
      }
    ],
    "others": "还有三个已确认存在的玩家：Hario Smart 7（2016，品类早期产品）、韩国 iRhea（商用）、Hiroia 初代 Samantha（2018，台湾）。来源：[S1]。本报告没有核实它们的现价。",
    "groups": [
      {
        "who": "忙碌的手冲爱好者",
        "want": "要手冲的味道，但早上没时间。",
        "fit": "Spiral Luxe、xBloom Studio",
        "why": "Breville 公开把这群人列为第一目标。两台都内置磨豆机，省掉最慢的一步。",
        "src": [
          "S1"
        ]
      },
      {
        "who": "胶囊机升级用户",
        "want": "要一键方便，也要现磨精品豆。",
        "fit": "xBloom（xPod）、Spiral Luxe",
        "why": "xPod 把烘焙商的配方写进 NFC 卡。Breville 也点名这群人。",
        "src": [
          "S1",
          "S6"
        ]
      },
      {
        "who": "探索型单杯用户",
        "want": "每天换豆，想认识新烘焙商。",
        "fit": "xBloom Studio",
        "why": "xPod 来自多家美国精品烘焙商，CoffeeGeek 称它是好的“季节性探索服务”。",
        "src": [
          "S6"
        ]
      },
      {
        "who": "家庭 / 多人",
        "want": "一次冲一壶，价格敏感。",
        "fit": "Cosori Juni、Fellow Aiden",
        "why": "Juni 最多 1.5 L，$299.99 起。Aiden 单杯到 10 杯。",
        "src": [
          "S11",
          "S13"
        ]
      },
      {
        "who": "参数玩家",
        "want": "要逐段控制流速、水温和停顿。",
        "fit": "Gevi BrewOne、Hiroia Hikaru、xBloom App",
        "why": "Gevi 有实时 Barista Mode。Hikaru 有 10 档流速和自建配方。",
        "src": [
          "S18",
          "S15"
        ]
      },
      {
        "who": "咖啡馆 / 酒店 / 办公室",
        "want": "稳定出杯，减少培训。",
        "fit": "Poursteady、Samantha II、iRhea",
        "why": "这些机器支持多头同冲、云端同步和自动进水。",
        "src": [
          "S20",
          "S16",
          "S1"
        ]
      }
    ],
    "tiers": [
      {
        "tier": "入门 · $300–$450",
        "items": "Cosori Juni $299.99 / $349.99 · Fellow Aiden $399.95 · Gevi BrewOne $449（促销）",
        "src": [
          "S11",
          "S13",
          "S17"
        ]
      },
      {
        "tier": "主战场 · ~$600（内置磨豆）",
        "items": "xBloom Studio $599 · Breville Spiral Luxe $599.95",
        "src": [
          "S5",
          "S1"
        ]
      },
      {
        "tier": "设计 / 纯粹 · $700–$800",
        "items": "Ratio Eight S2 $699（相邻品类）· Hiroia Hikaru $799",
        "src": [
          "S19",
          "S15"
        ]
      },
      {
        "tier": "商用 · $1,599 起",
        "items": "Samantha II $1,599 · Poursteady PS2 $7,875 起 · PS1 5 杯 $12,508 起",
        "src": [
          "S16",
          "S21"
        ]
      }
    ],
    "axes": [
      "**磨豆机：内置 vs 不内置。** 内置的有 xBloom、Spiral Luxe、Gevi、百胜图 O2。不内置的有 Juni、Aiden、Hikaru。内置磨豆机让价格跳到 $450–$600。",
      "**出杯量：单杯 vs 一壶。** xBloom 只做单杯（最多 25 g 粉）。Spiral Luxe 出 20 oz。Juni 和 Aiden 能出 1.5 L。",
      "**生态：豆仓 vs 开放。** 只有 xBloom 有 xPod 豆仓生态。它仍然允许用自己的豆和 Kalita Wave 155 滤纸。Fellow 用 Drops 推豆，但不锁定。",
      "**联网：App / AI vs 离线。** Juni 主打 AI 配方和口味反馈。xBloom 和 Aiden 靠 App 编配方。Spiral Luxe 完全离线，只在本机保存配方。",
      "**注水方式：移动喷嘴 vs 淋水头。** Spiral Luxe、xBloom、Juni、Gevi 模仿人手绕圈。Hikaru 和 Aiden 用固定淋水头。Hiroia 认为绕圈容易注水不均。"
    ],
    "chinaUS": [
      "**美国市场：大公司靠渠道。** Breville 在自家官网和 Williams Sonoma 销售。Cosori 先在官网卖，之后上 Amazon。Fellow Aiden 在官网销售，并附 $25 的 Fellow Drops 咖啡额度。[S1][S11][S13]",
      "**xBloom：美国公司，中国资本。** TBDx 总部在旧金山湾区。2022 年种子轮 1500 万美元来自一组中国投资方。首批 11 家烘焙商里有 1 家在中国。[S8]",
      "**中国市场：xBloom 以“钢琴师”销售。** 京东有 FW-02C 型号页（本次无法打开）。数字尾巴一位用户 2024 年自费 3888 元购入。他建议用自己的豆，不建议买鲜豆杯，原因是口味少、成本高。[S10]",
      "**国内竞品：百胜图 O2。** 它把研磨、称重和冲煮做成一体，有 Wi-Fi 小程序。官方称它获红点奖和红顶奖提名。现价没有核实。[S22]",
      "**X 上的地域信号。** xBloom 的 X 讨论大量来自海湾地区（科威特、沙特）和日本。日本有用户通过租赁试用。这些是个人帖子，只能当作信号。[X2][X9][X10]",
      "**缺口。** 本次没有找到可靠的中国或美国销量 / 份额数据。“xBloom 在中国很大”这一说法，本报告无法用公开数据证实。"
    ],
    "feedback": [
      {
        "product": "xBloom Studio",
        "pros": [
          "CoffeeGeek：出杯达到“比赛级”；三个预设可一键出杯，不用手机。[S6]",
          "Tom's Guide：App 很好；秤很灵敏；磨豆机能力强。[S7]",
          "国内用户：不懂手冲也能喝到满意的一杯。[S10]"
        ],
        "cons": [
          "Tom's Guide：三个旋钮没有标签，上手有学习曲线；单次最多 25 g 粉，不适合一壶。[S7]",
          "CoffeeGeek：水箱小；磨豆机磨不到意式细度。Tom's Guide 的结论相反：能磨意式，但流速偏快。[S6][S7]",
          "韩国用户：配方最多 9 段注水，10 段配方要改写。[X1]"
        ]
      },
      {
        "product": "Breville Spiral Luxe",
        "pros": [
          "Engadget 称它是“明显高端”的厨房电器。这是发布新闻，不是实测。[S3]",
          "40 mm 小刀盘是有意的取舍，目的是缩小机身。[S1]"
        ],
        "cons": [
          "截至 10/3，X 上只有发布帖（如 @kotecinho 9/30 的帖子约 1.2 万次浏览），没有真实用户反馈。[X6]",
          "水温只有 3 档。按时间定量研磨，不是称重定量。[S1]",
          "Engadget：更便宜的机器也能做得不错，只是没有螺旋注水和内置磨豆。[S3]"
        ]
      },
      {
        "product": "Cosori Juni",
        "pros": [
          "功能最多的入门款：AI 配方、震动整粉、1.5 L 大容量。[S11]",
          "海湾地区用户称它是“更便宜的 xBloom 竞品”。[X7]"
        ],
        "cons": [
          "T3 质疑手冲机是否需要 AI。T3 只写了新闻，没有实测。[S12]",
          "不带磨豆机。真实口味评测还很少。"
        ]
      },
      {
        "product": "Fellow Aiden",
        "pros": [
          "Yahoo 实测：使用简单，口感饱满，单杯到 10 杯都行。[S14]",
          "X 用户：用了一年以上，出杯稳定。[X5]"
        ],
        "cons": [
          "Yahoo 实测：保温壶 1 小时后只有 160.9 °F，是测试过的机器里最低；机身大多是塑料。[S14]",
          "X 用户：不想让热水接触大量塑料，换成了 Ratio Eight。[X4]"
        ]
      },
      {
        "product": "Gevi BrewOne",
        "pros": [
          "Coffeeness：可编程程度高；平刀出色；适合极客。[S18]",
          "官网评论：客服响应快。官网评论由品牌托管，可靠度偏低。[S17]"
        ],
        "cons": [
          "日本用户：水量传感器故障导致机器无法使用，换传感器后恢复；他称这是该机型的“老毛病”。[X3]",
          "官网评论：有人遇到水位读取失败、磨豆机故障；有人说出水碰不到粉层边缘，中间冲出坑。[S17]",
          "Coffeeness：学习曲线陡。[S18]"
        ]
      },
      {
        "product": "Hiroia Hikaru",
        "pros": [
          "官方：中心淋水头 + 变流速，避免绕圈不均。[S15]",
          "X 用户：自动机清洁频繁，他推荐 Hikaru 这类更简单的机器。[X8]"
        ],
        "cons": [
          "$799 且不带磨豆机。真实用户反馈很少。"
        ]
      }
    ],
    "takeaways": [
      "**先想清楚要省哪一步。** 你现在用 S3 手摇磨。每天最费时的是手摇研磨，不是注水。只有内置磨豆机的机器（xBloom、Spiral Luxe）能省掉这一步。",
      "**你的口味需要低水温选项。** 你喜欢低酸、丝滑、偏深烘。Spiral Luxe 只有 88 / 92 / 96 °C 三档。Juni、Hikaru 支持 80–96 °C。xBloom 可在 App 里逐段设水温。",
      "**单杯选 xBloom，一壶选 Spiral Luxe。** xBloom 单次最多 25 g 粉。Spiral Luxe 出 20 oz。你一杯用 30 g 粉，超过了 xBloom 的上限。",
      "**Spiral Luxe 先观望。** 它 9 月底才发布。等 4–8 周的独立评测和用户反馈，再决定。",
      "**审美上值得看三台。** Ratio Eight S2（实木 + 手吹玻璃）、xBloom 鼠尾草绿 + 金色款、Fellow Aiden（极简立方体）。",
      "**本地可看商用机。** Poursteady 在布鲁克林。纽约的精品咖啡馆可能在用它，可以去喝一杯作对照。",
      "**这是一个好的内容选题。** 品类在 9 月升温，中文深度对比很少。Latent Roast 可以做一期“自动手冲 vs S3 手冲”的盲测记录。"
    ],
    "sources": [
      {
        "id": "S1",
        "label": "Daily Coffee News · Breville Enters the Automated Pourover Stream（2026-09-30）",
        "url": "https://dailycoffeenews.com/2026/09/30/breville-enters-the-automated-pourover-stream-with-the-spiral-luxe-brewer/",
        "rel": "高 · 行业媒体（Roast Magazine），有 Breville 采访原话和品类历史"
      },
      {
        "id": "S2",
        "label": "Daily Coffee News · Weekly Coffee News（2026-10-02）",
        "url": "https://dailycoffeenews.com/2026/10/02/weekly-coffee-news-marketplace-launches-dollys-new-coffee-commercial/",
        "rel": "高 · 你给的线索；确认了 $599.95 和发布"
      },
      {
        "id": "S3",
        "label": "Engadget · Breville's New $600 Coffee Machine（2026-09-30）",
        "url": "https://www.engadget.com/2273802/brevilles-new-600-coffee-machine-makes-pour-overs-from-scratch/",
        "rel": "中高 · 科技媒体，基于厂商资料，未上手"
      },
      {
        "id": "S5",
        "label": "xBloom Studio 官网产品页",
        "url": "https://xbloom.com/pages/xbloom-studio",
        "rel": "中高 · 官方规格可信；口味说法是营销"
      },
      {
        "id": "S6",
        "label": "CoffeeGeek · xBloom Studio: Competition-Level Pour Over on Autopilot（2026-07-03）",
        "url": "https://coffeegeek.com/blog/new-products/xbloom-studio-competition-level-pour-over-on-autopilot/",
        "rel": "高 · 专业器具媒体，上手初评；完整评测未发布"
      },
      {
        "id": "S7",
        "label": "Tom's Guide · xBloom Studio review（2025-11-12）",
        "url": "https://www.tomsguide.com/home/coffee-makers/xbloom-studio-coffee-maker-review",
        "rel": "中高 · 数月上手；样机由英国经销商提供"
      },
      {
        "id": "S8",
        "label": "Daily Coffee News · The Forthcoming xBloom（2022-10-12）",
        "url": "https://dailycoffeenews.com/2022/10/12/the-forthcoming-xbloom-automates-single-serve-brews-based-on-roasters-specifications/",
        "rel": "高 · 公司背景、创始人和融资；数据截至 2022"
      },
      {
        "id": "S10",
        "label": "数字尾巴 · 沉浸式体验 xBloom Studio（2024-08-13）",
        "url": "https://www.dgtle.com/article-1707872-1.html",
        "rel": "中 · 单个国内用户自费购买；价格是 2024 年的"
      },
      {
        "id": "S11",
        "label": "PR Newswire · Cosori Juni 发布（2026-09-10）",
        "url": "https://www.prnewswire.com/news-releases/now-available-cosori-brings-precision-engineering-to-specialty-coffee-with-juni-its-premium-automatic-pour-over-coffee-machine-302874802.html",
        "rel": "中高 · 官方新闻稿；规格和价格可信，口味说法是营销"
      },
      {
        "id": "S12",
        "label": "T3 · Cosori's new drip coffee machine（2026-09-14）",
        "url": "https://www.t3.com/home-living/coffee-machines/cosoris-new-drip-coffee-machine-is-hypnotising-to-watch-it-changed-my-mind-about-pour-over-coffee",
        "rel": "中 · 新闻解读，未实测"
      },
      {
        "id": "S13",
        "label": "Fellow · Aiden Precision Coffee Maker 官网",
        "url": "https://fellowproducts.com/products/aiden-precision-coffee-maker",
        "rel": "中高 · 官方规格和价格"
      },
      {
        "id": "S14",
        "label": "Yahoo · Fellow Aiden review（2026-04-28）",
        "url": "https://shopping.yahoo.com/home-garden/kitchen/review/fellow-aiden-coffee-maker-review-190713717.html",
        "rel": "中高 · 多周上手，含保温测温"
      },
      {
        "id": "S15",
        "label": "Hiroia · Hikaru 官网",
        "url": "https://www.hiroia.com/products/hikaru",
        "rel": "中高 · 官方规格和价格"
      },
      {
        "id": "S16",
        "label": "Hiroia · Samantha II 官网",
        "url": "https://www.hiroia.com/products/samantha-ii",
        "rel": "中高 · 官方规格和价格"
      },
      {
        "id": "S17",
        "label": "Gevi · BrewOne 4-in-1 官网",
        "url": "https://gevi.com/products/gevi-brewone-premium-pour-over-coffee-machine",
        "rel": "中 · 官方规格可信；页内评论由品牌托管"
      },
      {
        "id": "S18",
        "label": "Coffeeness · Gevi 4 in 1 Review",
        "url": "https://www.coffeeness.de/en/gevi-4-in-1-review/",
        "rel": "中 · 联盟营销站；内容更新于 2023，价格字段前后矛盾，不引用其价格"
      },
      {
        "id": "S19",
        "label": "Ratio · Eight Series 2 官网",
        "url": "https://ratiocoffee.com/products/ratio-eight-series-2-coffee-maker",
        "rel": "中高 · 官方规格和价格"
      },
      {
        "id": "S20",
        "label": "Poursteady · PS1 官网",
        "url": "https://poursteady.com/automated-pourover-coffee-machines/ps1",
        "rel": "中高 · 官方规格；官网不公开价格"
      },
      {
        "id": "S21",
        "label": "Voltage Coffee Supply · Pour-Over Coffee Machines",
        "url": "https://www.voltagecoffeesupply.com/collections/pour-over-coffee-machines",
        "rel": "中高 · 授权零售商的公开标价"
      },
      {
        "id": "S22",
        "label": "百胜图 · BAP-O2 获红顶奖提名（2022-12-17）",
        "url": "https://barsetto.com/news/details_481_847.html",
        "rel": "中 · 品牌公关稿"
      },
      {
        "id": "X1",
        "label": "X @acidsound · xBloom 最多 9 段注水（2026-06-06）",
        "url": "https://x.com/acidsound/status/2063209841318125812",
        "rel": "低–中 · 单个用户的实操记录"
      },
      {
        "id": "X2",
        "label": "X @nejikuman · 在日本租赁 xBloom（2026-08-10）",
        "url": "https://x.com/nejikuman/status/2086722413430255849",
        "rel": "低 · 个人帖子"
      },
      {
        "id": "X3",
        "label": "X @crazy_yu555666 · Gevi 水量传感器故障（2026-07-19）",
        "url": "https://x.com/crazy_yu555666/status/2079039999966851113",
        "rel": "低–中 · 单个用户；与官网评论里的水位故障一致"
      },
      {
        "id": "X4",
        "label": "X @WestinFlower · 从 Aiden 换到 Ratio Eight（2026-08-14）",
        "url": "https://x.com/WestinFlower/status/2088238197494980911",
        "rel": "低 · 个人观点"
      },
      {
        "id": "X5",
        "label": "X @jeremyjudkins_ · Aiden 用了一年以上（2026-08-30）",
        "url": "https://x.com/jeremyjudkins_/status/2094149790041030920",
        "rel": "低 · 个人帖子"
      },
      {
        "id": "X6",
        "label": "X @kotecinho · Spiral Luxe 发布帖（2026-09-30）",
        "url": "https://x.com/kotecinho/status/2105385330321055926",
        "rel": "低 · 只能说明关注度，不是使用反馈"
      },
      {
        "id": "X7",
        "label": "X @Specialon_ · Juni 是更便宜的 xBloom 竞品（2026-09-10）",
        "url": "https://x.com/Specialon_/status/2097964066954207602",
        "rel": "低 · 个人观点"
      },
      {
        "id": "X8",
        "label": "X @m_schneider · 自动机清洁频繁（2026-06-27）",
        "url": "https://x.com/m_schneider/status/2070783157922590977",
        "rel": "低 · 个人观点"
      },
      {
        "id": "X9",
        "label": "X @itswadha0 · 买了 xBloom，贵但值（2026-06-24）",
        "url": "https://x.com/itswadha0/status/2069896622125769080",
        "rel": "低 · 个人帖子"
      },
      {
        "id": "X10",
        "label": "X @nyaokiyoko · 日本售价 105,050 日元（2026-08-01）",
        "url": "https://x.com/nyaokiyoko/status/2083763500166582471",
        "rel": "低 · 电视节目转帖；价格未核实"
      }
    ]
  }
};
