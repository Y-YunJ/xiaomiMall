const Mock = require('mockjs')

let idxGoods={
  "goods": [
    {
      "id": 4220,
      "itemName": "手机",
      "imgName": "phone",
      "itemList": [
        {
          "id": 42202000,
          "name": "小米11 Pro",
          "imgName": "2000.jpg",
          "tips": "1/1.12 GN2｜骁龙888",
          "nowPrice": "4499元起",
          "oldPrice": "4999元"
        },
        {
          "id": 42202001,
          "name": "Xiaomi MIX 4",
          "imgName": "2001.jpg",
          "tips": "CUP全面屏",
          "nowPrice": "4999元起",
          "oldPrice": ""
        },
        {
          "id": 42202002,
          "name": "Note 10 Pro",
          "imgName": "2002.jpg",
          "tips": "天玑1100年度旗舰芯",
          "nowPrice": "1599元起",
          "oldPrice": "1699元"
        },
        {
          "id": 42202003,
          "name": "Redmi Note 10 5G",
          "imgName": "2003.jpg",
          "tips": "5G小金刚｜旗舰长续航",
          "nowPrice": "1099元起",
          "oldPrice": ""
        },
        {
          "id": 42202004,
          "name": "小米MIX FOLD",
          "imgName": "2004.jpg",
          "tips": "折叠大屏｜自研芯片",
          "nowPrice": "9999元起",
          "oldPrice": ""
        },
        {
          "id": 42202005,
          "name": "小米11 Ultra",
          "imgName": "2005.jpg",
          "tips": "1/1.12 GN2｜2K四微曲屏",
          "nowPrice": "5499元起",
          "oldPrice": "5999元"
        },
        {
          "id": 42202006,
          "name": "小米11 青春版",
          "imgName": "2006.jpg",
          "tips": "小米11 青春版 轻薄",
          "nowPrice": "2099元起",
          "oldPrice": "2299元"
        },
        {
          "id": 42202007,
          "name": "K40 游戏增强版",
          "imgName": "2007.jpg",
          "tips": "轻薄电竞设计",
          "nowPrice": "1999元起",
          "oldPrice": ""
        }
      ]
    },
    {
      "id": 4223,
      "itemName": "家电",
      "imgName": "houseHold",
      "itemList": [
        {
          "subItemName": "热门",
          "subItemList": [
            {
              "id": 42203000,
              "name": "小米电视6 65 OLED",
              "imgName": "3000.jpg",
              "tips": "小米电视6 65 OLED",
              "nowPrice": "7699元",
              "oldPrice": ""
            },
            {
              "id": 42203001,
              "name": "小米电视6 至尊版 65英寸",
              "imgName": "3001.jpg",
              "tips": "画质新境界",
              "nowPrice": "7999元",
              "oldPrice": ""
            },
            {
              "id": 42203002,
              "name": "小米电视 ES55 2022款",
              "imgName": "3002.jpg",
              "tips": "多分区，画质轻旗舰",
              "nowPrice": "3199元",
              "oldPrice": "3499元"
            },
            {
              "id": 42203003,
              "name": "米家互联网对开门冰箱 540L",
              "imgName": "3003.jpg",
              "tips": "重磅新品福利特惠",
              "nowPrice": "2799元",
              "oldPrice": "3699元"
            },
            {
              "id": 42203004,
              "name": "米家超薄电磁炉",
              "imgName": "3004.jpg",
              "tips": "纤薄美学，精准猛火",
              "nowPrice": "499元",
              "oldPrice": ""
            },
            {
              "id": 42203005,
              "name": "米家集尘扫拖机器人",
              "imgName": "3005.jpg",
              "tips": "自动倒垃圾，45天手不沾尘",
              "nowPrice": "2799元",
              "oldPrice": "2999元"
            },
            {
              "id": 42203006,
              "name": "Redmi全自动波轮洗衣机1A 8kg",
              "imgName": "3006.jpg",
              "tips": "一键操作，父母都爱用",
              "nowPrice": "799元",
              "oldPrice": "899元"
            }
          ],
          "lastItem": {
            "id": 42203007,
            "name": "米家互联网烟灶套装（天然气）",
            "imgName": "3007.jpg",
            "tips": "",
            "nowPrice": "1899元",
            "oldPrice": ""
          }
        },
        {
          "subItemName": "电视影音",
          "subItemList": [
            {
              "id": 32233008,
              "name": "小米电视4A 70英寸",
              "imgName": "3008.jpg",
              "tips": "大屏更享受",
              "nowPrice": "3399元",
              "oldPrice": "3999元"
            },
            {
              "id": 32233009,
              "name": "全面屏电视 55英寸E55X",
              "imgName": "3009.jpg",
              "tips": "潮流全面屏设计",
              "nowPrice": "2199元",
              "oldPrice": "2599元"
            },
            {
              "id": 32233010,
              "name": "小米电视4A 60英寸",
              "imgName": "3010.jpg",
              "tips": "人工智能语音系统,超高清画质",
              "nowPrice": "2799元",
              "oldPrice": ""
            },
            {
              "id": 32233011,
              "name": "小米电视 EA75 2022款",
              "imgName": "3011.jpg",
              "tips": "新一代金属全面屏",
              "nowPrice": "4499元",
              "oldPrice": "4999元"
            },
            {
              "id": 32233012,
              "name": "小米全面屏电视65英寸 E65X",
              "imgName": "3012.jpg",
              "tips": "全面屏设计",
              "nowPrice": "2999元",
              "oldPrice": "3299元"
            },
            {
              "id": 32233013,
              "name": "小米电视4C 32英寸",
              "imgName": "3013.jpg",
              "tips": "高清液晶屏，人工智能系统",
              "nowPrice": "799元",
              "oldPrice": "1099元"
            },
            {
              "id": 32233014,
              "name": "Redmi智能电视A55",
              "imgName": "3014.jpg",
              "tips": "澎湃音效影院级体验",
              "nowPrice": "1988元",
              "oldPrice": "2199元"
            }
          ],
          "lastItem": {
            "id": 32233015,
            "name": "Redmi MAX 86 超大屏电视",
            "imgName": "3015.jpg",
            "tips": "",
            "nowPrice": "7999元",
            "oldPrice": ""
          }
        }
      ]
    },
    {
      "id": 4225,
      "itemName": "智能",
      "imgName": "intellect",
      "itemList": [
        {
          "subItemName": "热门",
          "subItemList": [
            {
              "id": 42255000,
              "name": "Xiaomi Sound",
              "imgName": "5000.jpg",
              "tips": "小米高保真智能音箱",
              "nowPrice": "499元",
              "oldPrice": ""
            },
            {
              "id": 42255001,
              "name": "小米路由器AX3000",
              "imgName": "5001.jpg",
              "tips": "小米路由器AX3000",
              "nowPrice": "349元",
              "oldPrice": ""
            },
            {
              "id": 42255002,
              "name": "Redmi路由器AX3000",
              "imgName": "5002.jpg",
              "tips": "疾速WiFi6，更快一步。",
              "nowPrice": "249元",
              "oldPrice": "269元"
            },
            {
              "id": 42255003,
              "name": "小米全自动智能门锁 Pro",
              "imgName": "5003.jpg",
              "tips": "一步到位，全面高能",
              "nowPrice": "2199元",
              "oldPrice": ""
            },
            {
              "id": 42255004,
              "name": "小米智能门锁 E",
              "imgName": "5004.jpg",
              "tips": "告别钥匙，畅享便捷生活",
              "nowPrice": "949元",
              "oldPrice": "999元"
            },
            {
              "id": 42255005,
              "name": "小米小爱音箱 Play",
              "imgName": "5005.jpg",
              "tips": "听音乐、语音遥控家电",
              "nowPrice": "109元",
              "oldPrice": ""
            },
            {
              "id": 42255006,
              "name": "米家智能窗帘",
              "imgName": "5006.jpg",
              "tips": "窗帘开合随心控",
              "nowPrice": "749元",
              "oldPrice": "799元"
            }
          ],
          "lastItem": {
            "id": 42255007,
            "name": "小米体脂秤2",
            "imgName": "5007.jpg",
            "tips": "",
            "nowPrice": "99元 ",
            "oldPrice": ""
          }
        },
        {
          "subItemName": "安防",
          "subItemList": [
            {
              "id": 42255008,
              "name": "小米全自动智能门锁",
              "imgName": "5008.jpg",
              "tips": "高端全自动，一触即开门",
              "nowPrice": "1599元",
              "oldPrice": "1799元"
            },
            {
              "id": 42255009,
              "name": "小米智能门锁 Pro",
              "imgName": "5009.jpg",
              "tips": "旗舰摄像头门锁，安全一步到位",
              "nowPrice": "1499元1599元",
              "oldPrice": ""
            },
            {
              "id": 42255010,
              "name": "小米智能门锁 1S",
              "imgName": "5010.jpg",
              "tips": "经典门锁再进一步",
              "nowPrice": "1199元",
              "oldPrice": "1299元"
            },
            {
              "id": 42255011,
              "name": "小米智能门锁 E",
              "imgName": "5011.jpg",
              "tips": "告别钥匙，畅享便捷生活",
              "nowPrice": "949元",
              "oldPrice": "999元"
            },
            {
              "id": 42255012,
              "name": "小米智能摄像机 云台版2K",
              "imgName": "5012.jpg",
              "tips": "2K超清，家庭看护更放心",
              "nowPrice": "199元",
              "oldPrice": ""
            },
            {
              "id": 42255013,
              "name": "小米智能摄像机 标准版2K",
              "imgName": "5013.jpg",
              "tips": "小米智能摄像机 标准版2K",
              "nowPrice": "129元",
              "oldPrice": ""
            },
            {
              "id": 42255014,
              "name": "小米智能摄像机云台版Pro",
              "imgName": "5014.jpg",
              "tips": "2K超清画质，AI 智能升级",
              "nowPrice": "299元",
              "oldPrice": ""
            }
          ],
          "lastItem": {
            "id": 42255015,
            "name": "小米室外摄像机 电池版",
            "imgName": "5015.jpg",
            "tips": "",
            "nowPrice": "349元",
            "oldPrice": ""
          }
        },
        {
          "subItemName": "出行",
          "subItemList": [
            {
              "id": 42255016,
              "name": "九号平衡车",
              "imgName": "5016.jpg",
              "tips": "年轻人的酷玩具",
              "nowPrice": "1699元",
              "oldPrice": "1999元"
            },
            {
              "id": 42255017,
              "name": "九号平衡车燃动版",
              "imgName": "5017.jpg",
              "tips": "燃动升级，随走随停",
              "nowPrice": "1899元",
              "oldPrice": "2299元"
            },
            {
              "id": 42255018,
              "name": "米家电动滑板车1S",
              "imgName": "5018.jpg",
              "tips": "型出格，行出色",
              "nowPrice": "1799元",
              "oldPrice": "1999元"
            },
            {
              "id": 42255019,
              "name": "小米米家电动滑板车Pro",
              "imgName": "5019.jpg",
              "tips": "性能提升，动力更强劲",
              "nowPrice": "2499元",
              "oldPrice": "2799元"
            },
            {
              "id": 42255020,
              "name": "米兔折叠婴儿推车",
              "imgName": "5020.jpg",
              "tips": "出发去向往的地方",
              "nowPrice": "699元",
              "oldPrice": ""
            },
            {
              "id": 42255021,
              "name": "九号平衡车 Plus",
              "imgName": "5021.jpg",
              "tips": "一个形影不离的新伙伴",
              "nowPrice": "2799元",
              "oldPrice": "3499元"
            },
            {
              "id": 42255022,
              "name": "小米小背包",
              "imgName": "5022.jpg",
              "tips": "城市休闲，简约设计",
              "nowPrice": "29元",
              "oldPrice": ""
            }
          ],
          "lastItem": {
            "id": 42255023,
            "name": "小米旅行箱 青春款",
            "imgName": "5023.jpg",
            "tips": "",
            "nowPrice": "189元起",
            "oldPrice": ""
          }
        }
      ]
    },
    {
      "id": 4224,
      "itemName": "搭配",
      "imgName": "match",
      "itemList": [
        {
          "subItemName": "热门",
          "subItemList": [
            {
              "id": 42244000,
              "name": "小米降噪耳机 Pro FlipBuds Pro",
              "imgName": "4000.jpg",
              "tips": "主动降噪 超长续航",
              "nowPrice": "799元",
              "oldPrice": ""
            },
            {
              "id": 42244001,
              "name": "Redmi AirDots 3 Pro",
              "imgName": "4002.jpg",
              "tips": "智能降噪 超低延迟",
              "nowPrice": "299元",
              "oldPrice": "349元"
            },
            {
              "id": 42244002,
              "name": "小米手环6 NFC版",
              "imgName": "4002.jpg",
              "tips": "全屏实力",
              "nowPrice": "259元",
              "oldPrice": "279元"
            },
            {
              "id": 42244003,
              "name": "Redmi AirDots 2真无线蓝牙耳机",
              "imgName": "4003.jpg",
              "tips": "支持蓝牙5.0，自动秒连，拿起就能用",
              "nowPrice": "79元",
              "oldPrice": "99元"
            },
            {
              "id": 42244004,
              "name": "Redmi 手表",
              "imgName": "4004.jpg",
              "tips": "35g超轻/1.4\"大屏/多功能NFC/7天长续航",
              "nowPrice": "269元",
              "oldPrice": "299元"
            },
            {
              "id": 42244005,
              "name": "小米手表Color 运动版",
              "imgName": "4005.jpg",
              "tips": "超长续航，支持血氧功能649元699元",
              "nowPrice": "649元",
              "oldPrice": "699元"
            },
            {
              "id": 42244006,
              "name": "小米真无线蓝牙耳机Air 2s",
              "imgName": "4006.jpg",
              "tips": "全面升级，智慧真无线",
              "nowPrice": "369元",
              "oldPrice": "399元"
            }
          ],
          "lastItem": {
            "id": 42244007,
            "name": "小米真无线蓝牙耳机Air 2 Pro",
            "imgName": "4007.jpg",
            "tips": "",
            "nowPrice": "449元",
            "oldPrice": ""
          }
        },
        {
          "subItemName": "耳机音箱",
          "subItemList": [
            {
              "id": 42244008,
              "name": "Xiaomi Sound",
              "imgName": "4008.jpg",
              "tips": "小米高保真智能音箱",
              "nowPrice": "499元",
              "oldPrice": ""
            },
            {
              "id": 42244009,
              "name": "小米降噪耳机 Pro FlipBuds Pro",
              "imgName": "4009.jpg",
              "tips": "主动降噪 超长续航",
              "nowPrice": "799元",
              "oldPrice": ""
            },
            {
              "id": 42244010,
              "name": "Redmi AirDots 3 Pro",
              "imgName": "4010.jpg",
              "tips": "智能降噪 超低延迟",
              "nowPrice": "299元",
              "oldPrice": "349元"
            },
            {
              "id": 42244011,
              "name": "小米小爱音箱Play 增强版",
              "imgName": "4011.jpg",
              "tips": "是音箱也是床头时钟",
              "nowPrice": "129元",
              "oldPrice": "149元"
            },
            {
              "id": 42244012,
              "name": "Redmi AirDots 2真无线蓝牙耳机",
              "imgName": "4012.jpg",
              "tips": "支持蓝牙5.0，自动秒连，拿起就能用",
              "nowPrice": "79元",
              "oldPrice": "99元"
            },
            {
              "id": 42244013,
              "name": "小米AI音箱（第二代）",
              "imgName": "4013.jpg",
              "tips": "小米AI音箱（第二代）",
              "nowPrice": "199元",
              "oldPrice": ""
            },
            {
              "id": 42244014,
              "name": "小米真无线蓝牙耳机Air 2s",
              "imgName": "4014.jpg",
              "tips": "全面升级，智慧真无线",
              "nowPrice": "369元",
              "oldPrice": "399元"
            }
          ],
          "lastItem": {
            "id": 42244015,
            "name": "小米小爱音箱 Pro",
            "imgName": "4015.jpg",
            "tips": "",
            "nowPrice": "299元",
            "oldPrice": ""
          }
        }
      ]
    },
    {
      "id": 4226,
      "itemName": "配件",
      "imgName": "fitting",
      "itemList": [
        {
          "subItemName": "热门",
          "subItemList": [
            {
              "id": 42266000,
              "name": "高速无线充套装",
              "imgName": "6000.jpg",
              "tips": "快速无线闪充，Qi充电标准",
              "nowPrice": "149元",
              "oldPrice": ""
            },
            {
              "id": 42266001,
              "name": "小米无线充电宝青春版10000mAh",
              "imgName": "6001.jpg",
              "tips": "能量满满，无线有线都能充",
              "nowPrice": "109元129元",
              "oldPrice": ""
            },
            {
              "id": 42266002,
              "name": "小米插线板（含3口USB 2A快充）",
              "imgName": "6002.jpg",
              "tips": "3个USB充电口，支持快充",
              "nowPrice": "59元",
              "oldPrice": ""
            },
            {
              "id": 42266003,
              "name": "米家魔方转换器",
              "imgName": "6003.jpg",
              "tips": "方寸之间，能量无限",
              "nowPrice": "59元",
              "oldPrice": ""
            },
            {
              "id": 42266004,
              "name": "米家插线板 快充版 27W",
              "imgName": "6004.jpg",
              "tips": "安全的大功率快充插线板",
              "nowPrice": "69元",
              "oldPrice": ""
            },
            {
              "id": 42266005,
              "name": "米家筋膜枪",
              "imgName": "6005.jpg",
              "tips": "米家筋膜枪",
              "nowPrice": "499元",
              "oldPrice": ""
            },
            {
              "id": 42266006,
              "name": "米家插线板6位基础版（含3口USB 2A快充）",
              "imgName": "6006.jpg",
              "tips": "小巧设计，便捷不占地儿",
              "nowPrice": "69元",
              "oldPrice": "79元"
            }
          ],
          "lastItem": {
            "id": 42266007,
            "name": "小米车载充电器快充版",
            "imgName": "6007.jpg",
            "tips": "",
            "nowPrice": "69元",
            "oldPrice": ""
          }
        },
        {
          "subItemName": "充电器",
          "subItemList": [
            {
              "id": 42266008,
              "name": "高速无线充套装",
              "imgName": "6008.jpg",
              "tips": "快速无线闪充，Qi充电标准",
              "nowPrice": "149元",
              "oldPrice": ""
            },
            {
              "id": 42266009,
              "name": "小米无线充电宝青春版10000mAh",
              "imgName": "6009.jpg",
              "tips": "能量满满，无线有线都能充",
              "nowPrice": "109元",
              "oldPrice": "129元"
            },
            {
              "id": 42266010,
              "name": "小米插线板（含3口USB 2A快充）",
              "imgName": "6010.jpg",
              "tips": "3个USB充电口，支持快充",
              "nowPrice": "59元",
              "oldPrice": ""
            },
            {
              "id": 42266011,
              "name": "米家魔方转换器",
              "imgName": "6011.jpg",
              "tips": "方寸之间，能量无限",
              "nowPrice": "59元",
              "oldPrice": ""
            },
            {
              "id": 42266012,
              "name": "米家插线板 快充版 27W",
              "imgName": "6012.jpg",
              "tips": "安全的大功率快充插线板",
              "nowPrice": "69元",
              "oldPrice": ""
            },
            {
              "id": 42266013,
              "name": "米家筋膜枪",
              "imgName": "6013.jpg",
              "tips": "米家筋膜枪",
              "nowPrice": "499元",
              "oldPrice": ""
            },
            {
              "id": 42266014,
              "name": "米家插线板6位基础版（含3口USB 2A快充）",
              "imgName": "6014.jpg",
              "tips": "小巧设计，便捷不占地儿",
              "nowPrice": "69元",
              "oldPrice": "79元"
            }
          ],
          "lastItem": {
            "id": 42266015,
            "name": "小米车载充电器快充版",
            "imgName": "6015.jpg",
            "tips": "",
            "nowPrice": "69元",
            "oldPrice": ""
          }
        }
      ]
    },
    {
      "id": 4229,
      "itemName": "周边",
      "imgName": "stuff",
      "itemList": [
        {
          "subItemName": "热门",
          "subItemList": [
            {
              "id": 42299000,
              "name": "米家声波电动牙刷T300",
              "imgName": "9000.jpg",
              "tips": "31000次/分钟震动，刷的干净",
              "nowPrice": "99元",
              "oldPrice": ""
            },
            {
              "id": 42299001,
              "name": "米家声波电动牙刷T500",
              "imgName": "9001.jpg",
              "tips": "刷的干净、智能护齿",
              "nowPrice": "169元",
              "oldPrice": "179元"
            },
            {
              "id": 42299002,
              "name": "米家声波电动牙刷T700",
              "imgName": "9002.jpg",
              "tips": "米家声波电动牙刷T700",
              "nowPrice": "369元",
              "oldPrice": "399元"
            },
            {
              "id": 42299003,
              "name": "米家电动剃须刀 S700",
              "imgName": "9003.jpg",
              "tips": "陶瓷净须，开局之作",
              "nowPrice": "369元",
              "oldPrice": "499元"
            },
            {
              "id": 42299004,
              "name": "米家电动剃须刀S100",
              "imgName": "9004.jpg",
              "tips": "浮动双刀头 全身水洗",
              "nowPrice": "78元",
              "oldPrice": "79元"
            },
            {
              "id": 42299005,
              "name": "米家电动剃须刀S500",
              "imgName": "9005.jpg",
              "tips": "浮动贴面更干净，减压设计更舒适",
              "nowPrice": "199元",
              "oldPrice": ""
            },
            {
              "id": 42299006,
              "name": "米家电动剃须刀S300",
              "imgName": "9006.jpg",
              "tips": "青年“无须”新选择",
              "nowPrice": "99元",
              "oldPrice": ""
            }
          ],
          "lastItem": {
            "id": 42299007,
            "name": "日常元素抽纸 青春版 24包/箱",
            "imgName": "9007.jpg",
            "tips": "",
            "nowPrice": "27.9元",
            "oldPrice": ""
          }
        },
        {
          "subItemName": "出行",
          "subItemList": [
            {
              "id": 42299008,
              "name": "九号卡丁车Pro兰博基尼汽车定制版",
              "imgName": "9008.jpg",
              "tips": "九号卡丁车Pro兰博基尼汽车定制版",
              "nowPrice": "9999元",
              "oldPrice": ""
            },
            {
              "id": 42299009,
              "name": "米家飞行员太阳镜 Pro",
              "imgName": "9009.jpg",
              "tips": "尼龙偏光，轻巧佩戴",
              "nowPrice": "199元",
              "oldPrice": ""
            },
            {
              "id": 42299010,
              "name": "九号平衡车",
              "imgName": "9010.jpg",
              "tips": "年轻人的酷玩具",
              "nowPrice": "1699元",
              "oldPrice": "1999元"
            },
            {
              "id": 42299011,
              "name": "小米米家电动滑板车Pro",
              "imgName": "9011.jpg",
              "tips": "性能提升，动力更强劲",
              "nowPrice": "2499元",
              "oldPrice": "2799元"
            },
            {
              "id": 42299012,
              "name": "米家经典方框太阳镜",
              "imgName": "9012.jpg",
              "tips": "复古设计，偏光自修复",
              "nowPrice": "89元",
              "oldPrice": "99元"
            },
            {
              "id": 42299013,
              "name": "小米车载充电器快充版1A1C 100W",
              "imgName": "9013.jpg",
              "tips": "小米车载充电器快充版1A1C 100W",
              "nowPrice": "99元",
              "oldPrice": ""
            },
            {
              "id": 42299014,
              "name": "小米对讲机Lite",
              "imgName": "9014.jpg",
              "tips": "小米对讲机Lite",
              "nowPrice": "99元起",
              "oldPrice": "129元"
            }
          ],
          "lastItem": {
            "id": 42299015,
            "name": "小米无线充电宝30W 10000mAh",
            "imgName": "9015.jpg",
            "tips": "",
            "nowPrice": "199元",
            "oldPrice": ""
          }
        }
      ]
    }
  ]
}
let navGoods={
  "goods": {
    "小米手机": [
      {
        "id": 32201000,
        "imgName": "60.png",
        "name": "小米10 Pro",
        "price": "4999元起"
      },
      {
        "id": 32201001,
        "imgName": "61.png",
        "name": "小米10",
        "price": "3999元起"
      },
      {
        "id": 32201002,
        "imgName": "62.png",
        "name": "小米CC9 Pro",
        "price": "2599元起"
      },
      {
        "id": 32201003,
        "imgName": "63.png",
        "name": "小米9 Pro 5G",
        "price": "3699元起"
      },
      {
        "id": 32201004,
        "imgName": "64.png",
        "name": "小米CC9",
        "price": "1499元起"
      },
      {
        "id": 32201005,
        "imgName": "65.png",
        "name": "小米CC9e",
        "price": "1299元"
      }
    ],
    "Redmi 红米": [
      {
        "id": 32201006,
        "imgName": "66.jpg",
        "name": "Redmi K30",
        "price": "1599元起"
      },
      {
        "id": 32201007,
        "imgName": "67.jpg",
        "name": "Redmi K30 5G",
        "price": "1999元起"
      },
      {
        "id": 32201008,
        "imgName": "68.png",
        "name": "Redmi 8A",
        "price": "599元起"
      },
      {
        "id": 32201009,
        "imgName": "69.png",
        "name": "Redmi Note 8",
        "price": "899元起"
      },
      {
        "id": 32201010,
        "imgName": "70.png",
        "name": "Redmi Note 8 Pro",
        "price": "1299元起"
      },
      {
        "id": 32201011,
        "imgName": "71.png",
        "name": "Redmi 8",
        "price": "699元"
      }
    ],
    "电视": [
      {
        "id": 32201012,
        "imgName": "72.jpg",
        "name": "Redmi 红米电视 70英寸 R70A",
        "price": "3299元"
      },
      {
        "id": 32201013,
        "imgName": "73.jpg",
        "name": "小米壁画电视 65英寸",
        "price": "6999元"
      },
      {
        "id": 32201014,
        "imgName": "74.jpg",
        "name": "小米全面屏电视E55A",
        "price": "1799元"
      },
      {
        "id": 32201015,
        "imgName": "75.png",
        "name": "小米电视4A 32英寸",
        "price": "699元"
      },
      {
        "id": 32201016,
        "imgName": "76.jpg",
        "name": "小米电视4A 55英寸",
        "price": "1699元"
      },
      {
        "id": 32201017,
        "imgName": "77.jpg",
        "name": "小米电视4A 65英寸",
        "price": "2599元"
      }
    ],
    "笔记本": [
      {
        "id": 32201018,
        "imgName": "78.jpg",
        "name": "小米电视4A 65英寸",
        "price": "2599元"
      },
      {
        "id": 32201019,
        "imgName": "79.png",
        "name": "小米电视4A 65英寸",
        "price": "2599元"
      },
      {
        "id": 32201020,
        "imgName": "80.png",
        "name": "小米电视4A 65英寸",
        "price": "2599元"
      },
      {
        "id": 32201021,
        "imgName": "81.png",
        "name": "小米电视4A 65英寸",
        "price": "2599元"
      },
      {
        "id": 32201022,
        "imgName": "82.png",
        "name": "小米电视4A 65英寸",
        "price": "2599元"
      },
      {
        "id": 32201023,
        "imgName": "83.png",
        "name": "小米电视4A 65英寸",
        "price": "2599元"
      }
    ],
    "家电": [
      {
        "id": 32201024,
        "imgName": "84.png",
        "name": "米家互联网空调C1（一级效能）",
        "price": "2399元"
      },
      {
        "id": 32201025,
        "imgName": "85.png",
        "name": "米家互联网空调（一级效能）",
        "price": "1999元"
      },
      {
        "id": 32201026,
        "imgName": "86.jpg",
        "name": "Redmi全自动波轮洗衣机1A",
        "price": "799元"
      },
      {
        "id": 32201027,
        "imgName": "87.png",
        "name": "米家互联网洗烘一体机10kg",
        "price": "1999元"
      },
      {
        "id": 32201028,
        "imgName": "88.jpg",
        "name": "小米净水器",
        "price": "1299元"
      },
      {
        "id": 32201029,
        "imgName": "89.jpg",
        "name": "米家扫地机器人",
        "price": "1399元"
      }
    ],
    "路由器": [
      {
        "id": 32201030,
        "imgName": "90.png",
        "name": "小米AIoT路由器AX3600",
        "price": "599元"
      },
      {
        "id": 32201031,
        "imgName": "91.png",
        "name": "Redmi路由器AC2100",
        "price": "169元"
      },
      {
        "id": 32201032,
        "imgName": "92.png",
        "name": "小米路由器AC2100",
        "price": "229元"
      },
      {
        "id": 32201033,
        "imgName": "93.jpg",
        "name": "小米路由器 Mesh",
        "price": "999元"
      },
      {
        "id": 32201034,
        "imgName": "94.jpg",
        "name": "小米路由器4A 千兆版",
        "price": "129元"
      },
      {
        "id": 32201035,
        "imgName": "95.jpg",
        "name": "小米路由器 4C",
        "price": "59元"
      }
    ],
    "智能硬件": [
      {
        "id": 32201036,
        "imgName": "96.jpg",
        "name": "小米米家智能摄像机云台版",
        "price": "199元"
      },
      {
        "id": 32201037,
        "imgName": "97.jpg",
        "name": "小米小爱老师",
        "price": "449元起"
      },
      {
        "id": 32201038,
        "imgName": "98.jpg",
        "name": "小米米家智能门锁",
        "price": "1299元"
      },
      {
        "id": 32201039,
        "imgName": "99.jpg",
        "name": "小米小爱触屏音箱",
        "price": "199元"
      },
      {
        "id": 32201040,
        "imgName": "100.png",
        "name": "Redmi小爱音箱 Play",
        "price": "79元"
      },
      {
        "id": 32201041,
        "imgName": "101.jpg",
        "name": "查看全部",
        "price": "智能硬件",
        "showMore": true
      }
    ]
  }
}
let sliderGoods={
  "goods": [
    {
      "id": 4220,
      "itemName": "手机 电话卡",
      "itemsList": [
        {
          "id": 42201102,
          "imgName": "102.png",
          "name": "小米10 Pro"
        },
        {
          "id": 42201103,
          "imgName": "103.png",
          "name": "小米10"
        },
        {
          "id": 42201104,
          "imgName": "104.jpg",
          "name": "Redmi K30 4G"
        },
        {
          "id": 42201105,
          "imgName": "105.jpg",
          "name": "Redmi K30 5G"
        },
        {
          "id": 42201106,
          "imgName": "106.png",
          "name": "小米CC9 Pro"
        },
        {
          "id": 42201107,
          "imgName": "107.png",
          "name": "Redmi 8A"
        },
        {
          "id": 42201108,
          "imgName": "108.png",
          "name": "Redmi 8"
        },
        {
          "id": 42201109,
          "imgName": "109.png",
          "name": "小米MIX Alpha"
        },
        {
          "id": 42201110,
          "imgName": "110.png",
          "name": "小米9 Pro 5G"
        },
        {
          "id": 42201111,
          "imgName": "111.png",
          "name": "Redmi Note 8 Pro"
        },
        {
          "id": 42201112,
          "imgName": "112.png",
          "name": "Redmi Note 8"
        },
        {
          "id": 42201113,
          "imgName": "113.png",
          "name": "小米CC9"
        },
        {
          "id": 42201114,
          "imgName": "114.png",
          "name": "小米CC9美图定制版"
        },
        {
          "id": 42201115,
          "imgName": "115.png",
          "name": "小米CC9e"
        },
        {
          "id": 42201116,
          "imgName": "116.png",
          "name": "小米MIX 3"
        },
        {
          "id": 42201117,
          "imgName": "117.png",
          "name": "黑鲨手机2 Pro"
        },
        {
          "id": 42201118,
          "imgName": "118.jpg",
          "name": "Redmi 7A"
        },
        {
          "id": 42201119,
          "imgName": "119.jpg",
          "name": "Redmi Note 7 Pro"
        },
        {
          "id": 42201120,
          "imgName": "120.jpg",
          "name": "移动4G+专区"
        },
        {
          "id": 42201121,
          "imgName": "121.jpg",
          "name": "小米移动 电话卡"
        },
        {
          "id": 42201122,
          "imgName": "122.png",
          "name": "手机上门维修"
        },
        {
          "id": 42201123,
          "imgName": "123.jpg",
          "name": "云服务空间月卡"
        }
      ]
    },
    {
      "id": 4221,
      "itemName": "电视 盒子",
      "itemsList": [
        {
          "id": 42211124,
          "imgName": "124.png",
          "name": "小米电视5 55英寸"
        },
        {
          "id": 42211125,
          "imgName": "125.png",
          "name": "小米电视5 65英寸"
        },
        {
          "id": 42211126,
          "imgName": "126.png",
          "name": "小米电视5 75英寸"
        },
        {
          "id": 42211127,
          "imgName": "127.png",
          "name": "小米电视5 Pro 55英寸"
        },
        {
          "id": 42211128,
          "imgName": "128.png",
          "name": "小米电视5 Pro 65英寸"
        },
        {
          "id": 42211129,
          "imgName": "129.png",
          "name": "小米电视5 Pro 75英寸"
        },
        {
          "id": 42211130,
          "imgName": "130.jpg",
          "name": "Redmi 红米电视 70英寸"
        },
        {
          "id": 42211131,
          "imgName": "131.jpg",
          "name": "全面屏电视Pro 65英寸"
        },
        {
          "id": 42211132,
          "imgName": "132.jpg",
          "name": "全面屏电视Pro 55英寸"
        },
        {
          "id": 42211133,
          "imgName": "133.jpg",
          "name": "小米壁画电视 65英寸"
        },
        {
          "id": 42211134,
          "imgName": "134.jpg",
          "name": "小米全面屏电视"
        },
        {
          "id": 42211135,
          "imgName": "135.png",
          "name": "小米电视4A 32英寸"
        },
        {
          "id": 42211136,
          "imgName": "136.png",
          "name": "小米电视4A 43英寸青春版"
        },
        {
          "id": 42211137,
          "imgName": "137.jpg",
          "name": "小米电视4A 49英寸"
        },
        {
          "id": 42211138,
          "imgName": "138.png",
          "name": "小米电视4A 50英寸"
        },
        {
          "id": 42211139,
          "imgName": "139.png",
          "name": "小米电视4A 55英寸"
        },
        {
          "id": 42211140,
          "imgName": "140.png",
          "name": "小米电视4A 58英寸"
        },
        {
          "id": 42211141,
          "imgName": "141.png",
          "name": "小米电视4A 65英寸"
        },
        {
          "id": 42211142,
          "imgName": "142.png",
          "name": "小米电视4C 32英寸"
        },
        {
          "id": 42211143,
          "imgName": "143.jpg",
          "name": "小米电视4C 40英寸"
        },
        {
          "id": 42211144,
          "imgName": "144.png",
          "name": "小米电视4C 43英寸"
        },
        {
          "id": 42211145,
          "imgName": "145.png",
          "name": "小米电视4C 50英寸"
        },
        {
          "id": 42211146,
          "imgName": "146.jpg",
          "name": "小米电视4C 55英寸"
        },
        {
          "id": 42211147,
          "imgName": "147.png",
          "name": "小米电视4X 43英寸"
        }
      ]
    },
    {
      "id": 4222,
      "itemName": "笔记本 显示器 平板",
      "itemsList": [
        {
          "id": 42221148,
          "imgName": "148.jpg",
          "name": "RedmiBook 13"
        },
        {
          "id": 42221149,
          "imgName": "149.png",
          "name": "小米笔记本 15.6\""
        },
        {
          "id": 42221150,
          "imgName": "150.png",
          "name": "小米笔记本 13.3\""
        },
        {
          "id": 42221151,
          "imgName": "151.jpg",
          "name": "小米笔记本 12.5\""
        },
        {
          "id": 42221152,
          "imgName": "152.png",
          "name": "RedmiBook 14"
        },
        {
          "id": 42221153,
          "imgName": "153.jpg",
          "name": "小米笔记本"
        },
        {
          "id": 42221154,
          "imgName": "154.png",
          "name": "显示器"
        },
        {
          "id": 42221155,
          "imgName": "155.jpg",
          "name": "小米平板4"
        },
        {
          "id": 42221156,
          "imgName": "156.png",
          "name": "键鼠套装"
        },
        {
          "id": 42221157,
          "imgName": "157.png",
          "name": "鼠标"
        },
        {
          "id": 42221158,
          "imgName": "158.png",
          "name": "转接器"
        },
        {
          "id": 42221159,
          "imgName": "159.jpg",
          "name": "平板配件"
        },
        {
          "id": 42221160,
          "imgName": "160.jpg",
          "name": "小米笔记本内胆包"
        }
      ]
    },
    {
      "id": 4223,
      "itemName": "家电 插线板",
      "itemsList": [
        {
          "id": 42231161,
          "imgName": "161.jpg",
          "name": "冰箱"
        },
        {
          "id": 42231162,
          "imgName": "162.png",
          "name": "立式空调"
        },
        {
          "id": 42231163,
          "imgName": "163.png",
          "name": "壁挂空调"
        },
        {
          "id": 42231164,
          "imgName": "164.png",
          "name": "滚筒洗衣机"
        },
        {
          "id": 42231165,
          "imgName": "165.jpg",
          "name": "Redmi全自动波轮洗衣机"
        },
        {
          "id": 42231166,
          "imgName": "166.jpg",
          "name": "净水器"
        },
        {
          "id": 42231167,
          "imgName": "167.jpg",
          "name": "微波炉"
        },
        {
          "id": 42231168,
          "imgName": "168.jpg",
          "name": "电烤箱"
        },
        {
          "id": 42231169,
          "imgName": "169.jpg",
          "name": "扫地机器人"
        },
        {
          "id": 42231170,
          "imgName": "170.jpg",
          "name": "吸尘器"
        },
        {
          "id": 42231171,
          "imgName": "171.jpg",
          "name": "空气净化器"
        },
        {
          "id": 42231172,
          "imgName": "172.jpg",
          "name": "电饭煲"
        },
        {
          "id": 42231173,
          "imgName": "173.jpg",
          "name": "电磁炉"
        },
        {
          "id": 42231174,
          "imgName": "174.jpg",
          "name": "电水壶"
        },
        {
          "id": 42231175,
          "imgName": "175.jpg",
          "name": "滤水壶"
        },
        {
          "id": 42231176,
          "imgName": "176.png",
          "name": "落地风扇"
        },
        {
          "id": 42231177,
          "imgName": "177.png",
          "name": "投影仪"
        },
        {
          "id": 42231178,
          "imgName": "178.jpg",
          "name": "灯具"
        },
        {
          "id": 42231179,
          "imgName": "179.jpg",
          "name": "插线板"
        },
        {
          "id": 42231180,
          "imgName": "180.jpg",
          "name": "新风机"
        },
        {
          "id": 42231181,
          "imgName": "181.jpg",
          "name": "电暖器"
        },
        {
          "id": 42231182,
          "imgName": "182.jpg",
          "name": "电压力锅"
        },
        {
          "id": 42231183,
          "imgName": "183.jpg",
          "name": "料理机"
        },
        {
          "id": 42231184,
          "imgName": "184.jpg",
          "name": "电煮壶"
        }
      ]
    },
    {
      "id": 4224,
      "itemName": "出行 穿戴",
      "itemsList": [
        {
          "id": 42241185,
          "imgName": "185.png",
          "name": "小米手环6 NFC版"
        },
        {
          "id": 42241186,
          "imgName": "186.png",
          "name": "小米手环6 标准版"
        },
        {
          "id": 42241187,
          "imgName": "187.png",
          "name": "Redmi 手表"
        },
        {
          "id": 42241188,
          "imgName": "188.png",
          "name": "小米手环5NFC"
        },
        {
          "id": 42241189,
          "imgName": "189.png",
          "name": "小米手环5"
        },
        {
          "id": 42241190,
          "imgName": "190.png",
          "name": "小米手表"
        },
        {
          "id": 42241191,
          "imgName": "191.png",
          "name": "平衡车"
        },
        {
          "id": 42241192,
          "imgName": "192.png",
          "name": "滑板车"
        },
        {
          "id": 42241193,
          "imgName": "193.png",
          "name": "自行车"
        },
        {
          "id": 42241194,
          "imgName": "194.png",
          "name": "车载充电器"
        },
        {
          "id": 42241195,
          "imgName": "195.png",
          "name": "智能记录仪"
        },
        {
          "id": 42241196,
          "imgName": "196.png",
          "name": "充气宝"
        },
        {
          "id": 42241197,
          "imgName": "197.png",
          "name": "石英表"
        }
      ]
    },
    {
      "id": 4225,
      "itemName": "智能 路由器",
      "itemsList": [
        {
          "id": 42251199,
          "imgName": "199.jpg",
          "name": "打印机"
        },
        {
          "id": 42251200,
          "imgName": "200.png",
          "name": "喷墨打印机"
        },
        {
          "id": 42251201,
          "imgName": "201.png",
          "name": "喷墨打印机墨水"
        },
        {
          "id": 42251202,
          "imgName": "202.png",
          "name": "小米路由器"
        },
        {
          "id": 42251203,
          "imgName": "203.jpg",
          "name": "智能家庭"
        },
        {
          "id": 42251204,
          "imgName": "204.jpg",
          "name": "对讲机"
        },
        {
          "id": 42251205,
          "imgName": "205.jpg",
          "name": "摄像机"
        },
        {
          "id": 42251206,
          "imgName": "206.jpg",
          "name": "照相机"
        },
        {
          "id": 42251207,
          "imgName": "207.jpg",
          "name": "智能门锁"
        },
        {
          "id": 42251208,
          "imgName": "208.jpg",
          "name": "智能门铃"
        },
        {
          "id": 42251209,
          "imgName": "209.png",
          "name": "小爱老师"
        },
        {
          "id": 42251210,
          "imgName": "210.png",
          "name": "Redmi路由器"
        },
        {
          "id": 42251211,
          "imgName": "211.jpg",
          "name": "小爱音箱"
        },
        {
          "id": 42251212,
          "imgName": "212.png",
          "name": "云服务空间年卡"
        },
        {
          "id": 42251213,
          "imgName": "213.png",
          "name": "云服务空间月卡"
        }
      ]
    },
    {
      "id": 4226,
      "itemName": "电源 配件",
      "itemsList": [
        {
          "id": 42261214,
          "imgName": "214.png",
          "name": "移动电源"
        },
        {
          "id": 42261215,
          "imgName": "215.jpg",
          "name": "数据线"
        },
        {
          "id": 42261217,
          "imgName": "217.png",
          "name": "充电器"
        },
        {
          "id": 42261218,
          "imgName": "218.jpg",
          "name": "电池"
        },
        {
          "id": 42261219,
          "imgName": "219.jpg",
          "name": "自拍杆"
        },
        {
          "id": 42261220,
          "imgName": "220.jpg",
          "name": "手机壳"
        },
        {
          "id": 42261221,
          "imgName": "221.jpg",
          "name": "手机贴膜"
        },
        {
          "id": 42261222,
          "imgName": "222.png",
          "name": "无线充电器"
        },
        {
          "id": 42261223,
          "imgName": "223.jpg",
          "name": "平板配件"
        },
        {
          "id": 42261224,
          "imgName": "224.jpg",
          "name": "黑鲨配件"
        },
        {
          "id": 42261225,
          "imgName": "225.jpg",
          "name": "其他配件"
        }
      ]
    },
    {
      "id": 4227,
      "itemName": "健康 儿童",
      "itemsList": [
        {
          "id": 42271226,
          "imgName": "226.jpg",
          "name": "洗手机"
        },
        {
          "id": 42271227,
          "imgName": "227.jpg",
          "name": "剃须刀"
        },
        {
          "id": 42271228,
          "imgName": "228.jpg",
          "name": "修剪器"
        },
        {
          "id": 42271229,
          "imgName": "229.jpg",
          "name": "牙刷"
        },
        {
          "id": 42271230,
          "imgName": "230.jpg",
          "name": "吹风机"
        },
        {
          "id": 42271231,
          "imgName": "231.jpg",
          "name": "体重秤"
        },
        {
          "id": 42271232,
          "imgName": "232.jpg",
          "name": "体脂秤"
        },
        {
          "id": 42271233,
          "imgName": "233.jpg",
          "name": "早教启智"
        },
        {
          "id": 42271234,
          "imgName": "234.jpg",
          "name": "益智积木"
        },
        {
          "id": 42271235,
          "imgName": "235.jpg",
          "name": "儿童手表"
        },
        {
          "id": 42271236,
          "imgName": "236.jpg",
          "name": "儿童滑板车"
        },
        {
          "id": 42271237,
          "imgName": "237.jpg",
          "name": "婴儿推车"
        },
        {
          "id": 42271238,
          "imgName": "238.jpg",
          "name": "理发器"
        },
        {
          "id": 42271239,
          "imgName": "239.jpg",
          "name": "走步机"
        },
        {
          "id": 42271240,
          "imgName": "240.jpg",
          "name": "智能遥控车"
        },
        {
          "id": 42271243,
          "imgName": "243.png",
          "name": "健身车"
        },
        {
          "id": 42271245,
          "imgName": "245.jpg",
          "name": "点读机"
        }
      ]
    },
    {
      "id": 4228,
      "itemName": "耳机 音箱",
      "itemsList": [
        {
          "id": 42281246,
          "imgName": "246.jpg",
          "name": "Redmi AirDots 3"
        },
        {
          "id": 42281247,
          "imgName": "247.jpg",
          "name": "Xiaomi Sound"
        },
        {
          "id": 42281248,
          "imgName": "248.jpg",
          "name": "Redmi小爱触屏音箱 8"
        },
        {
          "id": 42281249,
          "imgName": "249.jpg",
          "name": "小爱触屏音箱Pro 8"
        },
        {
          "id": 42281250,
          "imgName": "250.jpg",
          "name": "小爱音箱 Pro"
        },
        {
          "id": 42281251,
          "imgName": "251.jpg",
          "name": "小米小爱音箱"
        },
        {
          "id": 42281252,
          "imgName": "252.jpg",
          "name": "小米小爱触屏音箱"
        },
        {
          "id": 42281253,
          "imgName": "253.jpg",
          "name": "Redmi音箱"
        },
        {
          "id": 42281254,
          "imgName": "254.jpg",
          "name": "小米小爱音箱 Play"
        },
        {
          "id": 42281255,
          "imgName": "255.jpg",
          "name": "线控耳机"
        },
        {
          "id": 42281256,
          "imgName": "256.jpg",
          "name": "蓝牙耳机"
        },
        {
          "id": 42281257,
          "imgName": "257.jpg",
          "name": "头戴耳机"
        },
        {
          "id": 42281258,
          "imgName": "258.jpg",
          "name": "品牌耳机"
        },
        {
          "id": 42281259,
          "imgName": "259.jpg",
          "name": "蓝牙音箱"
        },
        {
          "id": 42281260,
          "imgName": "260.jpg",
          "name": "小米AI音箱"
        },
        {
          "id": 42281261,
          "imgName": "261.jpg",
          "name": "小米小爱音箱HD"
        },
        {
          "id": 42281262,
          "imgName": "262.jpg",
          "name": "k歌耳机"
        }
      ]
    },
    {
      "id": 4229,
      "itemName": "生活 箱包",
      "itemsList": [
        {
          "id": 42291263,
          "imgName": "263.jpg",
          "name": "小背包"
        },
        {
          "id": 42291264,
          "imgName": "264.jpg",
          "name": "双肩包"
        },
        {
          "id": 42291265,
          "imgName": "265.jpg",
          "name": "胸包"
        },
        {
          "id": 42291266,
          "imgName": "266.jpg",
          "name": "旅行箱"
        },
        {
          "id": 42291267,
          "imgName": "267.jpg",
          "name": "运动鞋"
        },
        {
          "id": 42291268,
          "imgName": "268.jpg",
          "name": "眼镜"
        },
        {
          "id": 42291269,
          "imgName": "269.jpg",
          "name": "床垫"
        },
        {
          "id": 42291270,
          "imgName": "270.jpg",
          "name": "枕头"
        },
        {
          "id": 42291271,
          "imgName": "271.jpg",
          "name": "螺丝刀"
        },
        {
          "id": 42291272,
          "imgName": "272.jpg",
          "name": "保温杯"
        },
        {
          "id": 42291273,
          "imgName": "273.jpg",
          "name": "驱蚊器"
        },
        {
          "id": 42291274,
          "imgName": "274.jpg",
          "name": "毛巾/浴巾"
        },
        {
          "id": 42291275,
          "imgName": "275.jpg",
          "name": "米兔"
        },
        {
          "id": 42291276,
          "imgName": "276.jpg",
          "name": "笔"
        }
      ]
    }
  ]
}

Mock.mock('idxGoods','get',idxGoods)
Mock.mock('navGoods','get',navGoods)
Mock.mock('sliderGoods','get',sliderGoods)
