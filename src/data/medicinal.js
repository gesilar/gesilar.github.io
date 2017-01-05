const productList = [
    {
        imgName: "medicinal/m001.jpeg",//这个对应你命名的图片名称
        series: "蚬壳胃散",
        name: "蚬壳胃散",
        price: "60",
        intro: "123adsfaas",//备注信息
    },
    {
        imgName: "medicinal/m002.jpg",//这个对应你命名的图片名称
        series: "和兴白花油",
        name: "和兴白花油",
        price: "54",
        intro: "123adsfaas",//备注信息
    },
    {
        imgName: "medicinal/m003.jpg",//这个对应你命名的图片名称
        series: "小林退热贴",
        name: "小林退热贴婴儿12片，儿童12片",
        price: "46",
        intro: "123adsfaas",//备注信息
    },
    {
        imgName: "medicinal/m003_1.jpg",//这个对应你命名的图片名称
        series: "小林退热贴",
        name: "小林退热贴承认6片",
        price: "25",
        intro: "123adsfaas",//备注信息
    },
    {
        imgName: "medicinal/m004.jpg",//这个对应你命名的图片名称
        series: "虎标肩颈舒",
        name: "虎标肩颈舒",
        price: "45",
        intro: "123adsfaas",//备注信息
    },
    {
        imgName: "medicinal/m005.jpeg",//这个对应你命名的图片名称
        series: "橙树化痰素",
        name: "橙树化痰素",
        price: "80",
        intro: "123adsfaas",//备注信息
    },
    {
        imgName: "medicinal/m006.jpeg",//这个对应你命名的图片名称
        series: "日本龙角散",
        name: "日本龙角散",
        price: "80",
        intro: "123adsfaas",//备注信息
    },
    {
        imgName: "medicinal/m007.jpg",//这个对应你命名的图片名称
        series: "五蜈蚣标止咳丸",
        name: "五蜈蚣标止咳丸",
        price: "70（10包）82（12包）",
        intro: "123adsfaas",//备注信息
    },
    {
        imgName: "medicinal/m008.jpeg",//这个对应你命名的图片名称
        series: "黄道益活络油",
        name: "黄道益活络油（50ml）",
        price: "55",
        intro: "123adsfaas",//备注信息
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"同仁堂红罐安宫牛黄丸",
        price:"HKD$720 ",
        intro:"温邪入里引起的痰壅、高热不退、牙关紧闭、惊风抽搐、神昏乱语。 口服，一次1丸，一日一次；小儿三岁以内一次1/4丸，四岁至六岁一次1 / 2丸，一日一次，或遵医嘱。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"红罐安宫牛黄丸 2粒装",
        price:"HKD$1,440 ",
        intro:"清热解毒、镇惊开窍。用于温邪入里引起的痰壅、高热不退、牙关紧闭、惊风抽搐、神昏乱语。 口服，一次1丸，一日一次；小儿三岁以内一次1/4丸，四岁至六岁一次1 / 2丸，一日一次，或遵医嘱。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"片仔癀跌打精 (60ml)",
        price:"HKD$108.00 ",
        intro:"有效治疗跌打扭伤、肩颈扭伤、腰肌劳损、手足麻痹、风湿骨痛、关节肿痛、筋膜疼痛、烧伤灼伤、擦损流血等所致的炎症痛症。片仔癀GMP药厂生产、百年老字号品牌、香港市场独家销售、香港逾百家跌打医馆使用。www.DDJ.com.hk "
    },
    {
        imgName:"test.jpg",
        series:"品名：法国双飞人药水 50ML",
        name:"英文：Peppermint Cure",
        price:"HKD$38.90 ",
        intro:"主治︰伤风感冒、肚痛、呕、蚊咬止痒、消化不良、烫火灼伤、牙痛头痛、消暑提神、驱风救急、舟车晕浪、消毒止炎。 成人每日三次，每次七至八滴，小主每日三次，每次二至三滴，用温暖茶水冲服。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"V乐敦眼药水 15ml",
        price:"HKD$49.9 ",
        intro:"舒缓眼睛疲劳 • 促进眼角膜细胞之唿吸； • 有效消除眼睛疲劳； • 舒缓因灰尘及汗水流入眼睛时引致的红筋及眼部不适； • 适合游泳前后使用, 常保眼睛健康。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"乐敦C3 Moist隐形眼镜专用眼药水 13ml",
        price:"HKD$55.9 ",
        intro:"• 舒缓因配戴各类软性、硬性、透气或即弃等隐形眼镜引起的眼睛疲劳、干涩及不适； • 有效滋润隐形眼镜，升级补湿； • 无添加防腐剂。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"佐滕制药妙盈独立支装眼药水0.5mL x 15支装",
        price:"HKD$88 ",
        intro:"红筋、疲劳、矇查查，Go Away！ 「妙盈独立支装眼药水」能纾缓眼睛疲劳、痕痒、干涩等症状，令眼睛回復明亮光彩。"
    },
    {
        imgName:"test.jpg",
        series:"品名：乐敦C3 Cool+隐形眼镜专用眼药水 13ml",
        name:"英文：55.90",
        price:" ",
        intro:"舒缓因配戴各类软性、硬性、透气或即弃等隐形眼镜引起的眼睛疲劳、干涩及不适； • 有效滋润隐形眼镜，升级补湿； • 无添加防腐； • 独特冰凉成分，冰爽清凉。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"乐敦养润水 13ml",
        price:"HKD$84.9 ",
        intro:"眼角膜晚间修护 • 加速眼部新陈代谢，在晚间修復眼角模细胞； • 蕴含4 种营养成份，能滋润眼眸，舒缓日间因使用电脑或配戴隐形眼镜而引致的眼睛疲劳； • 清除眼脂，改善视力模煳；"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"新V乐敦眼药水 13ml",
        price:"HKD$53.9 ",
        intro:"舒缓眼睛疲劳 • 含多种维他命B及特效清凉配方，有效治疗因疲劳引起的眼部不适现象； • 舒缓眼部刺激、消除红筋及痕痒，令双眼回復舒适及凉快；"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"日本白兔牌暗疮膏 18克",
        price:"HKD$96.0 ",
        intro:"有效快速解决暗疮问题 按需要每日二至三次将药膏搽于患部"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"乐信热痱水",
        price:"HKD$48.9 ",
        intro:"有效收敛、止痒，而无副作用，作用于皮肤上有清凉感觉，对医治热痱有理想而迅速之效果。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"佐藤制药喉菌敌喷剂 (20ml)",
        price:"HKD$55.0 ",
        intro:"具消炎、杀菌功效，纾缓因伤风感冒、烟酒过多、煎炸食品、用声过度等引致的咽喉红肿、刺痛及发炎。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"EG天然驱蚊喷雾 95毫升",
        price:"HKD$69.30 ",
        intro:"产品天然成份，不含化学DEET，温和不刺激，适合成人及三岁以上儿童．改良配方，气味清新，不油不腻，适合亚热带气候使用．铝瓶包装，避光，散热，防潮，保护精油有效成份。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"张权破痛油 (38ml)",
        price:"HKD$49.0 ",
        intro:"功能与主治: 止血止痛、散瘀肿、消炎生肌、 烫火灼伤、跌打刀伤、撞压瘀肿 扭挫摔伤、伤口烂肉、鼻窦创伤出血、痔疮炎肿出血、刺伤咬伤、跌打旧患、颈项硬痛、扭伤肌筋"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"星加坡鸿威 田七丁香降龙十八虎蛇通关千里追风油 (40ml)",
        price:"HKD$99.9 ",
        intro:"有效舒缓各种痛症不适： 肩膊颈紧痛，关节屈伸痛，手足麻痺痛； 腰椎骨刺痛，跌打扭伤痛，坐骨劳损痛，伤风头晕痛； 疴呕肚腹痛，蚊叮虫咬痛，追风透骨快，止痛疗效佳。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"金波士 通关活络骨刺灵油 (40ml)",
        price:"HKD$79.9 ",
        intro:"适用于各种痛症或不适： 新旧骨刺痛、肩膊颈刺痛、腰椎骨刺痛、手足骨刺痛， 坐骨神经痛、关节屈伸痛、四肢麻弊痛、坐立起步痛， 跌打扭伤痛、筋络抽搐痛、新旧瘀积痛、特强止痛油。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"陈老二 燕窝虫草白凤丸",
        price:"HKD$198.0 ",
        intro:"具有「调经、理气、止痛、补血、养颜功效」。深受妇女爱戴推祟、风行世界、是老牌妇科调补良药。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"何济公止痛退热散 (24小包)",
        price:"HKD$69.9 ",
        intro:"主治流行性感冒及伤风引起的症状：发冷发热、头痛、骨痛、牙痛，小儿发热。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"德国强力消石素 (60capsule(s))",
        price:"HKD$208.0 ",
        intro:"专为患有胆石、膀胱结石﹝俗称砂淋﹞、肾石等病而制造。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"天喜堂 天喜丸 (120capsule(s))",
        price:"HKD$550.00 ",
        intro:"天喜丸主治妇女月经失调及因月经失调而引至的各种妇科疾病，适用于月经不正常、白带、经痛、便秘、贫血、失眠多梦、产后调补不足及婚后久未成孕等症。药性平和，不寒不燥，四季皆宜。无论是己婚妇人或是未婚少女，均可进服。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"太和洞久咳丸 6瓶",
        price:"HKD$199 ",
        intro:"痰多咳、伤风咳、百日咳、小儿百日咳、寅卯时咳、阴虚内伤咳、缠绵不愈咳、喉痕声嘶、鼻流清涕、顽痰不化唿吸艰难、老人气喘咳、中年破金咳、妇女妊娠咳。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"公牛牌风痛灵",
        price:"HKD$208 ",
        intro:"家有老人，风湿痛风的必备产品：治疗风痛刺骨，腰酸背痛，刺骨麻痹，手震脚软，四肢麻木。药店很多山寨的名字＂风湿灵，痛风灵＂等等，但是最正宗的是公牛牌的这款风痛灵。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"金波士降龙十八虎蛇腰颈椎坐骨痛特灵 (40ml)",
        price:"HKD$100 ",
        intro:"腰椎骨刺痛、颈椎骨刺痛、腰椎劳损痛、坐骨挫伤痛； 肩周颈骨痛、网球手抽痛、关节屈伸痛、手足麻痹痛； 肌肉发软痛、风痛湿症痛、运动过度痛、坐立起步痛； 跌打扭伤痛、伤风头晕痛、沥呕肚腹痛、瘀血停滞痛； 骨痛湿痛症、腰椎突出痛、胸隔背冷痛、及其它肌肉疼痛。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"英国吴德物次肠痛水 148ML/瓶",
        price:"HKD$75 ",
        intro:"主要针对宝宝胃肠不适的，味道香甜，据妈妈们反映，这款肠痛水对于宝宝肚子痛有比较明显的疗效，不过对拉肚子的效果就一般。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"日本人字牌救心丸 100粒装",
        price:"HKD$538.9 ",
        intro:"可补心通阳、化瘀怯邪。药理研究证实能强心、改善心功能、扩张冠状动脉、增加心肌供血，经临床验证无副作用安全性高。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"日本白兔牌暗疮膏 18克",
        price:"HKD$96.00 ",
        intro:"有效快速解决暗疮问题"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"乐信湿疹膏",
        price:"HKD$49.90 ",
        intro:"不油腻，易于清洗、无臭及不污衣物之皮肤软膏。本品含两种特效成份：Mepyramine Maleate对因过敏引起之症状具特效；另Cetrimide主要用来扑灭因革兰式阳性或阴性菌引起之皮肤感染。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"娥罗纳英H软膏30克",
        price:"HKD$39.8 ",
        intro:"用途比较广，如因刮脸剃须后而引起的疙瘩，可预防皮肤病传染，气味也挺好的。化妆前用作粉底、可保护及滋润肌肤，早晚洗面后擦用，更可清除面孢，暗疮、粉 刺。洗碗碟后，洗衣服后用可保护皮肤。最有效的是防止粗糙，特别在冬季可滋润皮肤冻裂、冻伤等。还有治脚气，脚底粗糙掉皮都很有效。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"余仁生猴枣化痰散",
        price:"HKD$43.20 ",
        intro:"清除痰塞，清肺顺气。"
    },
    {
        imgName:"test.jpg",
        series:"婴儿药品",
        name:"林利源保婴丹",
        price:"HKD$99.00 ",
        intro:"特选用珍珠，川贝，琥珀为主辅与其他珍贵正地道药材，诚为婴儿健康治疗之圣药。对驱风除痰显着奇效。"
    },
    {
        imgName:"test.jpg",
        series:"婴儿药品",
        name:"林利源八宝惊风散",
        price:"HKD$99.00 ",
        intro:"特选用紫苏叶，珍珠，川贝母，陈皮为主辅与其他珍贵正地道药材，诚为婴儿健康治疗之圣药。"
    },
    {
        imgName:"test.jpg",
        series:"婴儿药品",
        name:"余仁生保婴丹 6樽装",
        price:"HKD$78.00 ",
        intro:"具有退热、解毒、化痰镇惊及抗惊厥的显着疗效。"
    },
    {
        imgName:"test.jpg",
        series:"伤风感冒",
        name:"伤风感冒特强热饮5包",
        price:"HKD$36.90 ",
        intro:"‧有效及迅速纾缓以来徵状，发烧、 头痛、四肢酸痛、鼻塞、咽喉痛、寒颤 ‧不会使人昏昏欲睡"
    },
    {
        imgName:"test.jpg",
        series:"伤风感冒",
        name:"必理痛伤风感冒特强热饮 - 柠檬味 5包",
        price:"HKD$41.90 ",
        intro:"‧有效及迅速纾缓以来徵状，发烧、头痛、四肢酸痛、鼻塞 ‧不会使人昏昏欲睡"
    },
    {
        imgName:"test.jpg",
        series:"伤风感冒",
        name:"必理痛伤风感冒热饮-柠檬蜜糖味5片",
        price:"HKD$41.90 ",
        intro:"‧有效及迅速纾缓以来徵状，鼻塞、头痛、喉咙痛、四肢酸痛、发烧 ‧不会使人昏昏欲睡"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"必理痛经痛配方(随身装) 12粒",
        price:"HKD$38.90 ",
        intro:"有效纾缓月经时引起的各种痛状。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"必理痛渗透止痛贴 2片",
        price:"HKD$13.50 ",
        intro:"‧水性基剂 ‧不刺激皮肤 ‧不容易过敏"
    },
    {
        imgName:"test.jpg",
        series:"伤风感冒",
        name:"必理痛特强伤风感冒丸 24粒",
        price:"HKD$65.90 ",
        intro:"更有效纾缓伤风感冒症状：发烧、咳嗽、头痛及身体痛楚，含更多维他命C。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"必理痛关节痛配方12粒",
        price:"HKD$40.90 ",
        intro:"‧持久有效纾缓腰背及关节痛 ‧功效长达8小时 ‧可于空肚时服用"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"必理痛伤风咳丸8粒",
        price:"HKD$32.90 ",
        intro:"‧更有效纾缓伤风感冒症状，发烧、咳嗽 、头痛及身体痛楚 ‧含更多维他命C"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"必理痛 特效Advance 10 粒",
        price:"HKD$31.90 ",
        intro:"‧更快有效消除头痛、发烧及各种特强痛症 ‧可于空肚时服用"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"必理痛 20粒",
        price:"HKD$39.90 ",
        intro:"主治头痛发烧、各种痛症生病，可于空肚时服用。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"双料开奶茶颗粒沖剂 20包装",
        price:"HKD$88.00 ",
        intro:"BB健康成长，BB除饮用奶粉外，仍需吸收其他营养以壮健身体。双料开奶茶颗粒沖剂，精选药食同源的山药萃取物、麦芽萃取物、茯苓萃取物、鸡内金萃取物等成份"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"衍生精装七星茶颗粒沖剂 20包装",
        price:"HKD$88.00 ",
        intro:"每当BB夜睡哭闹易醒的时候，都会影响家人睡眠质素，精装七星茶颗粒沖剂，精选药食同源的薏苡仁萃取物、赤小豆萃取物、麦芽萃取物、山楂萃取物、淡竹叶萃取物、鸡内金萃取物、甘草萃取物等。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"衍生精制保婴丹8瓶装",
        price:"HKD$99.00 ",
        intro:"由琥珀、川贝母、黄连、体外培育牛黄、天麻等成份精制而成，用于小儿急热惊风，四肢抽搐，痰涎壅盛，发热咳嗽。化积，镇惊熄风，清热豁痰。"
    },
    {
        imgName:"test.jpg",
        series:"儿童镇痛退热系列",
        name:"儿童幸福止痛退热素 16片",
        price:"HKD$19.80 ",
        intro:"迅速安全退烧。有效消除头痛、牙痛、喉咙痛及伤风感冒引起的痛楚。 所含成份最为医学界选用。 不含亚士匹灵，故不会引致儿童因服食亚士匹灵而可能产生的严重副作用和肠胃刺激。 不含糖份、不会引致蛀牙。 特别加有菓子味的咀嚼片，专为3至12岁儿童而配制。"
    },
    {
        imgName:"test.jpg",
        series:"伤风感冒",
        name:"无睡意幸福伤风素 12片",
        price:"HKD$41.00 ",
        intro:"特强退热镇痛/通鼻塞/感冒配方 无睡意配方，专为在患病时仍需集中精神工作人士而配制。 特强有效消除因伤风感冒引起之症状，包括喷嚏、发烧、鼻塞、肌肉酸痛及头痛等不适。 不含亚士匹灵，故无一般服食亚士匹灵可能会导致的肠胃刺激。"
    },
    {
        imgName:"test.jpg",
        series:"鎭痛退热",
        name:"特强幸福止痛素 12片",
        price:"HKD$28.00 18.6ml/HK$28.00 30ml/HK$39.00",
        intro:"强力特效止痛退热配方 强力有效消除各种痛症，包括头痛、牙痛、经痛、肌肉酸痛、喉咙痛、或因伤风感冒所引起之发烧疼痛。 特强止痛退热，安全快捷。 所含成份最为医学界选用。 不含亚士匹灵，故无一般服食亚士匹灵可能会导致的肠胃刺激。"
    },
    {
        imgName:"test.jpg",
        series:"鎭痛退热",
        name:"幸福止痛素 12片",
        price:"HKD$22.80 ",
        intro:"安全快捷止痛退热配方 有效快速消除各种痛症，包括头痛、牙痛、经痛、肌肉酸痛、喉咙痛、或因伤风感冒所引起之发烧疼痛。 止痛退热，安全快捷。 所含成份最为医学界选用。 不含亚士匹灵，故无一般服食亚士匹灵可能会导致的肠胃刺激。"
    },
    {
        imgName:"test.jpg",
        series:"唿吸道",
        name:"幸福百咳素 8片",
        price:"HKD$27.00 ",
        intro:"无睡意/不成瘾/止咳化痰配方 无睡意 不成瘾 止咳化痰配方"
    },
    {
        imgName:"test.jpg",
        series:"唿吸道",
        name:"幸福化痰素 24片",
        price:"HKD$39.80 ",
        intro:"化解浓痰/舒缓咳嗽配方 含有效化痰剂「愈甘醚」，能增加支气管分泌，帮助化解浓痰及减少干咳。 适用于因伤风感冒所引起的痰多咳嗽。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"小林创护宁液态胶布10克",
        price:"HKD$49.90 ",
        intro:"•超薄弹性透明液态胶布膜可覆盖患处皮肤﹐并迅速干透凝固﹐有特强持久黏贴力﹐可紧贴如肤｡ •有效隔絶并防止水分､尘垢和细菌入侵伤口﹐保护伤口免受感染并可加速伤口癒合｡ •可避免因煮食､清洗､游泳等活动时﹐伤口被水分渗入或异物磨擦而产生的痛楚｡ •专设易涂笔扫﹐简单易用﹐方便携带｡ •本品是无菌产品﹐经实验证明可防菌､抗菌﹐笔扫上及容器内亦不易被污染﹐安全可靠﹐不会引起皮肤敏感｡"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"小林喉痛露喷剂15毫升",
        price:"HKD$55.90 ",
        intro:"•对引起喉咙发炎之细菌等﹐本品有效成分能杀菌､消毒｡ •不必用棉花棒﹐专设特长喷嘴﹐可确保药液直击患部﹐有效地发挥效力｡ •特效配方Iodine﹐强效快速杀灭细菌､病毒及真菌｡ •配合清凉薄荷成分﹐甘而不苦﹐对喉咙不适有效｡ •细支装设计﹐方便携带｡"
    },
    {
        imgName:"test.jpg",
        series:"成人感冒发烧",
        name:"小林退热贴 成人6贴装",
        price:"HKD$24.90 ",
        intro:"成人发烧头痛、消暑散热，持续冷却"
    },
    {
        imgName:"test.jpg",
        series:"婴儿感冒发烧",
        name:"小林退热贴 婴儿",
        price:" 6贴装/HK$24.90 12贴装/HK$45.90",
        intro:"婴儿发烧，持续冷却，对肌肤温和"
    },
    {
        imgName:"test.jpg",
        series:"小童感冒发烧",
        name:"小林退热贴 小童",
        price:" 6贴装/HK$24.90 12贴装/HK$45.90",
        intro:"小童发烧、消暑散热，持续冷却"
    },
    {
        imgName:"test.jpg",
        series:"跌打损伤",
        name:"撒隆适清凉渗透膏贴 24片装",
        price:"HKD$119.70 ",
        intro:"• 含水份配方，能急速降低患处温度，舒缓痛楚。 • 紧密贴服，药效深层渗透。 • 易撕易贴，撕除无疼痛。"
    },
    {
        imgName:"test.jpg",
        series:"跌打损伤",
        name:"撒隆巴斯镇痛膏布40片孖装",
        price:"HKD$98.60 ",
        intro:"含维他命E成份加强配方，促进血液循环，深层渗透，迅速消炎镇痛"
    },
    {
        imgName:"test.jpg",
        series:"跌打损伤",
        name:"黄道益 活络油 50毫升",
        price:"HKD$54.90 ",
        intro:"跌打肿痛， 腰酸背痛，筋络抽缩，舒筋活络。"
    },
    {
        imgName:"test.jpg",
        series:"肌肉酸痛",
        name:"安美露肩颈热疗纾痛贴2片装",
        price:"HKD$24.90 ",
        intro:"独特U形设计﹐能紧紧贴住肩颈两侧及背部患处的衣服上﹐确保热力散发致疼痛根源﹐有效促进血液循环﹐纾缓及松弛僵硬及酸痛的肌肉﹐增加活动能力｡"
    },
    {
        imgName:"test.jpg",
        series:"肌肉酸痛",
        name:"安美露腰背热疗纾痛贴3片装",
        price:"HKD$29.90 ",
        intro:"自热暖贴提供持续18小时平均摄氏40℃天然热疗功效﹐热力迅速渗透患处﹐有效纾缓腰酸背痛､肌肉僵硬､肌肉疲劳等不适｡"
    },
    {
        imgName:"test.jpg",
        series:"外用消炎镇痛",
        name:"清新安美露 80ML",
        price:"HKD$33.90 ",
        intro:"•强效消炎镇痛药液﹐立即渗透﹐快速见效﹐药力持久｡ •弯弯樽装﹐易于涂搽﹐无须黏贴﹐不沾污双手｡ •无药味配方﹐温感镇痛﹐适合上班一族｡"
    },
    {
        imgName:"test.jpg",
        series:"外用消炎镇痛",
        name:"安美露外用消炎镇痛药液 82ML",
        price:"HKD$43.90 ",
        intro:"•精心研制消炎镇痛药液﹐迅速渗透患处﹐药力持久显着｡ •弯弯樽装﹐易于涂搽﹐无须黏贴﹐不沾污双手｡ •传统药味配方﹐凉感镇痛﹐适合年长人士｡"
    },
    {
        imgName:"test.jpg",
        series:"蚊虫叮咬",
        name:"珮氏驱蚊爽防蚊手带(反斗奇兵配饰两条装)",
        price:"HKD$41.90 ",
        intro:"利用崭新科技，将有效成份锁于手带内，长效24小时。实验证明比市面上一般驱蚊产品更有效。"
    },
    {
        imgName:"test.jpg",
        series:"蚊虫叮咬",
        name:"儿童驱蚊带 2条装",
        price:"HKD$39.80 ",
        intro:"採用天然植物精油调配出强力驱蚊功效，成份被美国环保局列为安全有效天然驱蚊剂，每条时效长达180小时，兼具防水功能，使用方便。每个包装配一个可爱吊饰。"
    },
    {
        imgName:"test.jpg",
        series:"蚊虫叮咬",
        name:"珮氏驱蚊爽喷雾(轻便装)",
        price:"HKD$28.00 ",
        intro:"蕴含天然野生红茄抽取物 IBI-246，有效驱赶蚊虫，可防止蚊虰所引至的痕痒、水泡和疙瘩。不含毒性成份DEET，而且不油不腻、清爽干净，适合成人儿童使用。"
    },
    {
        imgName:"test.jpg",
        series:"蚊虫叮咬",
        name:"珮氏驱蚊爽防蚊贴 12's",
        price:"HKD$38.90 ",
        intro:"｢驱蚊爽｣ 防蚊贴是全亚洲首创之安全驱蚊产品，适合全家使用"
    },
    {
        imgName:"test.jpg",
        series:"肌肉酸痛",
        name:"虎标颈肩舒 (特强配方) (50克)",
        price:"HKD$44.90 ",
        intro:"强舒解疼痛及迅速舒缓僵硬肌肉 不油腻、不沾手，任何时候均可使用 含清爽香气"
    },
    {
        imgName:"test.jpg",
        series:"肌肉酸痛",
        name:"虎标颈肩舒 (50克)",
        price:"HKD$39.90 ",
        intro:"有效舒缓肩膀和颈部酸痛 不油不腻，带舒缓香味"
    },
    {
        imgName:"test.jpg",
        series:"蚊虫叮咬",
        name:"虎标驱蚊贴",
        price:"HKD$33.90 ",
        intro:"有效防止蚊叮虫咬, 防蚊效力持久"
    },
    {
        imgName:"test.jpg",
        series:"万能药",
        name:"虎标万金油(白色)",
        price:"HKD$27.20 ",
        intro:"舒解头痛、鼻塞、肚痛、胃气胀及蚊叮虫咬等不适。"
    },
    {
        imgName:"test.jpg",
        series:"蚊虫叮咬/肌肉疼痛",
        name:"虎标万金油(红色)",
        price:"HKD$27.20 ",
        intro:"温感反应，有效舒缓肌肉疼痛及蚊叮虫咬引起的痕痒。"
    },
    {
        imgName:"test.jpg",
        series:"肌肉酸痛",
        name:"虎标镇痛药布(清凉) (9片装)",
        price:"HKD$60.90 18.6ml/HK$28.00 30ml/HK$39.00",
        intro:"有助长时间减轻肌肉疼痛。其清凉反应，可快速舒缓因工作或运动而引起的肌肉疲劳、肌肉酸痛、扭伤、颈梗膊痛等。"
    },
    {
        imgName:"test.jpg",
        series:"肌肉酸痛",
        name:"虎标镇痛药布(温感) (9片装)",
        price:"HKD$65.90 ",
        intro:"有助血液循环，能带来温感反应，持久镇痛，对舒缓颈部酸痛、肌肉疲劳及疼痛、背痛等，效果尤佳。"
    },
    {
        imgName:"test.jpg",
        series:"肌肉酸痛",
        name:"虎标镇痛药布(清凉) (大3片装)",
        price:"HKD$21.50 ",
        intro:"长时间减轻肌肉疼痛。其清凉反应，可快速舒缓因工作或运动而引起的肌肉疲劳、肌肉酸痛、扭伤、颈梗膊痛等。"
    },
    {
        imgName:"test.jpg",
        series:"肌肉酸痛",
        name:"虎标镇痛药布(温感) (大3片装)",
        price:"HKD$24.90 ",
        intro:"以虎标独有草本配方制造，有助血液循环，能带来温感反应，持久镇痛，对舒缓颈部酸痛、肌肉疲劳及疼痛、背痛等，效果尤佳。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"系列：蚊虫叮咬",
        price:"品名：无比膏 20g",
        intro:"英文：Mopiko Ointment"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"系列：蚊虫叮咬",
        price:"品名：无比滴 50M",
        intro:"英文：Mopidick Lotion"
    },
    {
        imgName:"test.jpg",
        series:"肠胃药",
        name:"马世良堂保胃丹",
        price:"HKD$188.00 ",
        intro:"保胃丹主治:胃弱、胃酸过多、胃痛、胃灼热、胃胀、胃炎、胃下垂或因烟酒过多引致之胃部不适、反胃或打嗝。"
    },
    {
        imgName:"test.jpg",
        series:"肠胃药",
        name:"蚬壳胃散",
        price:"HKD$59.9 ",
        intro:"专治胃痛，肝痛，背痛，虫痛，积痛，饥痛，饱痛，以及气 顶，反胃，肚胀，饱滞。"
    },
    {
        imgName:"test.jpg",
        series:"肠胃药",
        name:"乐信小儿系列 除虫素",
        price:"HKD$38.00 ",
        intro:"深受医药界人仕广泛应用，功效迅速，此乃是最新安全可靠之肠道驱虫药物。"
    },
    {
        imgName:"test.jpg",
        series:"肠胃药",
        name:"日本白兔牌便秘糖衣丸40粒",
        price:"HKD$79.00 ",
        intro:"成人(15岁或以上): 每日1次, 每次1至3粒, 睡前或空腹服用, 初服宜用最少剂量, 然后按排便情况增加或减少"
    },
    {
        imgName:"test.jpg",
        series:"肠胃药",
        name:"乐可舒通便丸30粒装",
        price:"HKD$42.30 ",
        intro:"成人及10岁以上儿童: 每日1次, 每次1-2粒 4-10岁以上儿童: 每日1次, 每次1粒, 建议睡前服用"
    },
    {
        imgName:"test.jpg",
        series:"肠胃药",
        name:"幸福泻利治",
        price:"HKD$54.80 ",
        intro:"适用于因水土不服引起之肚泻及偶发性之腹泻 旅行必备良药"
    },
    {
        imgName:"test.jpg",
        series:"肠胃药",
        name:"佐滕制药肠乐通偶发性便秘纾缓剂 36粒",
        price:"HKD$64.00 ",
        intro:"「SATOLAX ACE 肠乐通」助您解决肠道及便秘问题，而且加入维他命B6，能促进新陈代谢，改善皮肤粗糙、暗疮及痱滋等相关症状。"
    },
    {
        imgName:"test.jpg",
        series:"肠胃药",
        name:"幸福胃的素",
        price:"HKD$39.70 ",
        intro:"解胃酸、化胃气，适用于解除胃气胀、酸性消化不良、胃酸过多及胃灼热"
    },
    {
        imgName:"test.jpg",
        series:"肠胃药",
        name:"日本胃仙U100粒",
        price:"HKD$120.00 ",
        intro:"专治胃酸过多、消化不良、胃痛、胃灼热、胸作闷等胃病。成人每日三片，每次一片、于饭后使用。"
    },
    {
        imgName:"test.jpg",
        series:"肠胃药",
        name:"李众胜堂保济丸10樽装",
        price:"HKD$30.50 ",
        intro:"小丸在肠胃的接触面较大，因此更容易被肠胃吸收，功效更为迅速显着。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"系列：肠胃药",
        price:"品名：李万山钓鱼牌",
        intro:"英文：Lee Man Shan Pills"
    },
    {
        imgName:"test.jpg",
        series:"止咳",
        name:"乐必治EX化痰止咳水",
        price:"HKD$44.50 ",
        intro:"乐必治EX化痰止咳水有助纾缓因顽痰所引起之咳嗽"
    },
    {
        imgName:"test.jpg",
        series:"止咳",
        name:"乐信咳水",
        price:"HKD$48.00 ",
        intro:"本品加入清新提子味，减少儿童及成人对服药所产生之抗拒"
    },
    {
        imgName:"test.jpg",
        series:"止咳",
        name:"乐必治ME顽痰配方咳水",
        price:"HKD$50.50 ",
        intro:"有助纾缓因顽痰所引起之咳嗽"
    },
    {
        imgName:"test.jpg",
        series:"止咳",
        name:"五蜈蚣标止咳丸（10小包）",
        price:"HKD$70 ",
        intro:"出自泰国的止咳药，效果还不错，可以备点在家里。功能主治：生津，止咳，去痰。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"京都念慈菴 积热清 石斛清热冲剂 (24g)",
        price:"HKD$19.90 ",
        intro:"加入天然草本抗实火，特有名贵石斛降虚火，随身一包，全面清热。"
    },
    {
        imgName:"test.jpg",
        series:"止咳类",
        name:"京都念慈菴川贝枇杷膏无糖配方150毫升",
        price:"HKD$36.90 ",
        intro:"十二岁以上: 每日三次，每次一汤匙(十五毫升); 七至十二岁: 每日三次，每次三份之二汤匙(十毫升); 三至六岁: 每日三次，每次三份之一汤匙(五毫升)。或遵医嘱。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"系列：万能药",
        price:"品名：曼秀雷敦薄荷膏 10g",
        intro:"价格：HKD$17.90 • 薄荷渗透作用，迅速舒缓伤风引致的鼻塞、头痛、胸口翳闷、咳嗽及皮肤疼痛； • 防止皮肤及口唇干燥爆拆、擦伤、晒伤、昆虫咬伤、热痱及痕痒等； • 性质温和、成人及儿童均适用； • 适合与治疗伤风及鼻窦肿塞的药物同用； • 舒缓疲倦所带来之肌肉酸痛； • 可将一或二茶匙薄荷膏溶于沸水中，然后徐徐吸入蒸汽 可畅通唿吸及迅速舒缓鼻塞、咽喉痕痒和咳嗽；"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"和兴白花油 5ML",
        price:"HKD$17.40 ",
        intro:"碰上头晕头痛、伤风鼻塞、感冒不适、舟车晕浪、肌肉疼痛、蚊虫咬伤，用两三滴涂擦不适处就ok"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"均隆驱风油57毫升",
        price:"HKD$36.00 ",
        intro:"主治头晕头痛，舟车晕浪，伤风鼻塞，肚子疼痛，蚊叮虫咬，肌肉疼痛，腰酸背痛及扭伤挫伤。"
    },
    {
        imgName:"test.jpg",
        series:"品名：保心安膏 10g",
        name:"英文：Po Sum On Healing Balm",
        price:"HKD$24.00 ",
        intro:"可舒缓因轻微碰撞或扭伤引起的肌肉或关节疼痛，轻微头疼，舟车劳顿引起的头晕，咳嗽引起之胸部不适，风寒引起之轻微肚痛，蚊叮虫咬引起之痕痒。如果孩童使用，可由成人将保心安油搽于掌心 ，磨擦至热，然后把掌心按在其肚子上，十数秒便可见效。 因风、寒、湿等引起的肢体疼痛或四肢麻木，将保心安油/膏适量涂在患处，轻轻按摩数分钟 ，一天数次，可达到驱风除湿，通痹止痛之功效，症状得以缓解或消失。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"系列：万能药",
        price:"品名：保心安油 ",
        intro:"英文：Po Sum On Medicated Oil "
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"保济丸",
        price:"HKD$30 ",
        intro:"李众胜堂保济丸十樽庄, 主治疴呕、肚痛，各种痧症及痢症心胃气痛，身热，外感风寒，湿热扭肚暑湿，山岚瘴气，舟车晕浪，调理肠胃。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"紫花油 12毫升",
        price:"HKD$19.8 ",
        intro:"紫花油特别为传统药油调制独特薰衣草精华配方，能分层次地散发持久怡人香气，清新无油味，令人更觉心旷神怡，并能有效缓和紧张情绪、松弛神经，针对舒缓伤风鼻塞等唿吸道不适，对改善舟车晕浪、痾呕肚痛、蚊叮虫咬及小儿风痛等同样有效。"
    },
    {
        imgName:"test.jpg",
        series:"test",
        name:"干粉喷雾消毒剂55克",
        price:"HKD$59.9 ",
        intro:"本消毒剂能杀灭多种细菌、真菌、病毒 ，适用于灼伤、割伤、刮伤和擦伤等伤口消毒"
    }
]


export default productList;