/* Latent Roast · 全站内容数据
 * 每天更新：在 daily 数组末尾追加一条课程（字段见 README.md）。配图放到 images/YYYY-MM-DD.png。
 * 课程总表在 Notion「Morning Gradient · Lessons」。这里只放已推送 / 当天要推的课。
 * 冲煮记录：更新 brews / recipe。其他页面不用改。
 * 所有文字都要遵循 ROUTINE.md 里的 STE 写作规则和术语表。
 * 注意：这是 JS 文件。最外层是 window.LR_DATA = {...};
 */
window.LR_DATA = {
  "meta": {
    "title": "Latent Roast",
    "subtitle": "豪力的咖啡数据实验室",
    "updated": "2026-10-02",
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
    }
  ],
  "beans": [
    {
      "id": "giant-steps",
      "name": "Giant Steps",
      "roaster": "Blue Bottle",
      "type": "拼配 · 偏深烘",
      "notes": "巧克力、厚重",
      "roastDate": "2026-09-16"
    }
  ],
  "recipe": {
    "label": "第 2 杯计划",
    "bean": "giant-steps",
    "dose": 30,
    "water": 350,
    "tempC": 93,
    "grind": "6.6",
    "grindPrev": "7.0",
    "target": "3:00–3:15",
    "why": "第 1 杯的总时间只有约 2:30。它偏酸、单薄，属于萃取不足。所以这一杯把研磨调细 4 格（7.0 → 6.6）。",
    "prep": [
      "S3 归零：把外圈顺时针转到底，让“0”对准红标。",
      "把外圈<b>逆时针转到 6.6</b>。（不归零也可以：从 7.0 顺时针调细 4 格。）",
      "磨 30 g 豆。粉的粗细像粗海盐。",
      "把 Fellow 设到 <b>93 °C</b>。",
      "把 Blue Bottle 滤纸放进滤杯。<b>不要预湿</b>滤纸。",
      "把滤杯和分享壶放到秤上。",
      "倒入粉，轻轻铺平。",
      "按 <b>TARE</b> 归零。",
      "<b>开始第 1 次注水的同时</b>，按 Timer。（秤在手冲模式下会自动开始计时。）"
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
        "if": "还是偏酸 / 单薄，或总时间 &lt; 3:00",
        "then": "下一杯把 S3 调细到 <b>6.3</b>"
      },
      {
        "if": "发苦 / 发涩",
        "then": "下一杯刻度不变，把水温降到 <b>91 °C</b>"
      },
      {
        "if": "好喝，而且总时间在 3:00–3:15",
        "then": "固定这个配方，记为 Giant Steps 最佳配方"
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
      "text": "冲第 2 杯。然后把 S3 刻度、总时间和口感发给我。",
      "done": false
    },
    {
      "text": "注册 Fellow（register.fellowproducts.com）",
      "done": true
    },
    {
      "text": "在 Notion 建好 Coffee Log（豆子表 + 冲煮表）",
      "done": false
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
  ]
};
