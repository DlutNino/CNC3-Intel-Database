import Intelligence from "@/components/Intelligence";

const news_wire = [
    {
        path: 'ghost_machine',
        component: Intelligence,
        props: {
            title: '机器中的幽灵 The Ghost in the Machine',
            translation: [
                '第二次泰伯利亚战争中最为非比寻常的篇章之一在昨天随着一声爆炸而落下帷幕，GDI陆军工兵队引爆了据说是CABAL的最后一个地堡——一个管道交错纵横的地下巢穴，隶属于这个穷凶极恶的，对人类发动战争的人工智能。',
                '记者联系到了退役的战争英雄、前任变异事件局局长保罗-柯尔特斯将军，邀请他对此发表评论，柯尔特斯强调了他在击败CABAL的过程中所起到的重要作用，并将他失利的对手贬斥为“......一个留着山羊胡子，有拿破仑情结的二流的E.V.A.系统。”' +
                '柯尔特斯还声称他拒绝了GDI对他发出的出席起爆仪式的邀请，理由是他对现任领导层饱受争议的泰伯利亚抑制政策和对Nod兄弟会”卑躬屈膝“的态度持反对意见。',
                '关于“这座地堡揭示了生活于悬浮舱内的人类或类人生命形式的存在证据”之类的谣言，被GDI发言人艾琳娜-谢泼德迅速地击碎了......',
            ],
            original: [
                'One of the more unusual chapters of the Second Tiberium War came to an explosive close yesterday as the GDI Corps of Engineers detonated what is believed to be the last remaining CABAL bunker - the tube-filled underground lairs from which the rogue Artificial Intelligence waged brief war upon humanity. ',
                'Contacted for comment, retired war hero and former head of the Bureau of Mutant Affairs, Gen. Paul Cortez, lauded for his role in CABAL\'s defeat, dismissed his fallen foe as "...a second-rate EVA with a goatee and Napoleon complex." ' +
                'Cortez also claimed to have refused a GDI invitation to attend the detonation ceremony, citing his opposition to the current leadership\'s controversial Tiberium containment policy and "weak kneed" approach to the Brotherhood of Nod.',
                'Rumors that this particular bunker displayed evidence of human or humanoid life forms in suspension capsules were quickly dismissed by GDI spokesperson Arlene Shepherd...',
            ],
            tr_source: '【节选自 2043年5月28日 INN全息简报】',
            or_source: 'Excerpt from INN Holobrief, May 28th, 2043',
        },
    },
    {
        path: 'mammoth_mk2_off',
        component: Intelligence,
        props: {
            title: '猛犸 MkⅡ步行机甲退役<br/> Discontinuation of the Mammoth MkⅡ Walker',
            translation: [
                '对许多人而言，今天是一个悲伤的日子，因为在今天，最后一台现役的猛犸MkⅡ步行机甲叮当作响地蹒跚走出GDI位于圣佩德罗的战争工厂，永远地走入并封存于历史之中。' +
                '拥有双联装轨道炮、战场霸主地位和独具一格的方正外形的猛犸MkⅡ，在第二次泰伯利亚战争期间被视为自由的标志性象征。' +
                '它的退役和废弃招致了许多人的怒火，特别是退役战争英雄、广受欢迎的保守派专家、“凯恩尚在人间”理论的知名拥护者尼克-“浩劫”-帕克上尉。',
                '“MkⅡ过去是，现在也仍然是我们在对抗狂热的Nod追随者的战争中最为强悍的兵器。' +
                '它的废弃不过是GDI官僚主义的吝啬和‘难道我们不能和睦共处吗’这般矫揉造作的自由主义论调的又一个令人唾弃的事迹......GDI又一次愚蠢地正中凯恩下怀。”',
                '在数英里之外的封锁区已经爆发了抗议活动，工厂对此的情绪与其说是愤怒，倒不如说是逆来顺受。' +
                '备受争议的新式四胎全地形MkⅢ方案已经在千里之外的雷克雅未克投入生产，圣佩德罗的许多人对他们的工作和社区的未来充满担心......',
            ],
            original: [
                'It was a sad day for many today as the last Mammoth Mark II Walker to enter active combat duty clanked its way out of GDI\'s San Pedro war factory and into history. ' +
                'With its twin rail guns, battlefield dominance, and unusual boxy profile, the Mk. II became an iconic symbol of freedom during the Second Tiberium War. ' +
                'Its discontinuation has been greeted by many with anger, notably Captain Nick "Havoc" Parker, retired war hero, popular conservative pundit, and noted proponent of the "Kane lives" theory.',
                '"The Mark II was and continues to be one of our most powerful tools in the war against Nod fanaticism. ' +
                'This discontinuation is nothing but another disgusting example of GDI bureaucratic penny pinching and namby pamby \'can\'t we all just get along\' liberalism... once again, GDI is playing right into Kane\'s hands."',
                'With protests held at containment areas several miles away, the mood at the factory was more resigned than angry. ' +
                'Production of the controversial new four-tread all-terrain Mark III is scheduled to take place in far off Reykjavik, with many in San Pedro fearing for their jobs and the future of their community...',
            ],
            tr_source: '【节选自 2039年3月12日 INN全息简报】',
            or_source: 'Excerpt from INN Holobrief, March 12th, 2039',
        },
    },
    {
        path: 'blunder_gdi',
        component: Intelligence,
        props: {
            title: '几乎令GDI终结的致命失误<br/> The Blunder that Nearly Finished GDI',
            translation: [
                '“......我们自认为我们的空间站和离子炮是所有军备中最安全的。' +
                '正因为此，我们将我们最富有才干的军事人员、最重要的指挥与控制系统以及最强大的武器送入太空。' +
                '然而我们几乎完全忽视了我方太空军备的一个致命弱点——所有的地面设施全部位于一个防御薄弱的地点，一旦产生故障就无可挽回。' +
                'Nod在一个最糟糕的时刻抓住了这个弱点，彼时我们的所有政治和军事领导人员全部位于费城空间站。' +
                '这是一桩惊天动地的灾难性事件。”',
                '“更加糟糕的还在后面。' +
                '经过W3N调查记者的的深入研究，发现我们之所以做出将A-SAT控制系统安置在戈达德航天中心的地面上的决定不过是因为成本问题。' +
                '但现在太空通信公司将不得不花费数百亿美元为计算机和工作人员建造一个全新的轨道平台。' +
                '这既令人怒火中烧，又让人啼笑皆非。' +
                '太空中的安全一直是一种幻觉——GDI险些死无葬身之地，只是因为太空通信公司想要节省部分资金......”',
            ],
            original: [
                '"...we thought our space stations and Ion Cannons were the safest of our military assets. ' +
                'We put our most valuable military personnel, our most important command and control systems, and our most powerful weapons in space for this very reason. ' +
                'Little did we know that our space assets had a deadly vulnerability - a single point of failure located in a poorly defended installation ON THE GROUND. ' +
                'Nod exploited this vulnerability at the worst possible time, when our entire political and military leadership was on board the Philadelphia. ' +
                'This is a scandal of staggering magnitude."',
                '"It gets worse.' +
                'W3N investigative reporters dug into this story and discovered that the decision to locate our A-SAT control systems on the ground at Goddard Space Center was made because of cost. ' +
                'SpaceCom would have had to build an entire new orbital platform just for the computers and crew at a cost of tens of billions. ' +
                'This is an outrage. ' +
                'Security in space was an illusion all along - and GDI was almost wiped out because SpaceCom wanted to save some money..."',
            ],
            tr_source: '【W3N 《弗兰克60分》发言稿】',
            or_source: 'W3N Transcript from The Frank Hour',
            pic_src: require('../../assets/gdi_pictures/Philadelphia_1.jpg'),
        },
    },
    {
        path: 'kane_fascination',
        component: Intelligence,
        props: {
            title: '东欧的魅力令凯恩迷恋<br/> Kane\'s Fascination with Eastern Europe',
            translation: [
                '“......为何凯恩对于重建东欧的计划如此执着？' +
                '他对萨拉热窝的迷恋究竟源于何物？' +
                '数十年以来，东欧一直都是Nod活动的一个焦点，而其中的奥秘我们尚未完全揭开......”',
            ],
            original: [
                '"...why is Kane determined to rebuild in Eastern Europe? ' +
                'What is his fascination with Sarajevo? ' +
                'Eastern Europe has been a focal point for Nod activity for decades and the reasons aren\'t completely clear..."',
            ],
            tr_source: '【节选自 W3N关于凯恩的专题节目】',
            or_source: 'Excerpt from W3N Special on Kane',
            pic_src: require('../../assets/gdi_pictures/Eastern_Europe.png'),
        },
    },
    {
        path: 'storm_shelter',
        component: Intelligence,
        props: {
            title: 'GDI的避风塘 GDI Storm Shelters',
            translation: [
                'GDI的避风塘遍布所有蓝区和一些被预先选定的黄区作战地点。' +
                '它们通常位于人口重心和政府机构附近。' +
                '最早的避风塘是在数起离子风暴毁灭人口密集区的事件发生后建造的，包括那次导致富有名望的莫比乌斯博士及其手下高级职员遇难的意外事件。',
                '离子风暴避难所一般的位置在地下的10~30米之间，但是与大面积的地下水或地下泰伯利亚矿床的距离不能少于70米。' +
                '它们的外层结构是8英尺厚的钢筋混凝土墙，墙中内置了集成式声波发射器以遏制周围的泰伯利亚蔓延。' +
                '年代较晚的避风塘内部有公寓、自助餐厅、医疗设施、车辆维护库、大功率发电机以及有备无患的更多声波发射器。',
                '在高风险地区，一些避风塘成为了社会活动中心，承办了各种体育、音乐和美术活动，从而在大众心中成为了文化象征，荣膺了诸如“第七矿区”“旧日蓝调”“孵化舱”等雅号。',
                '近年来，许多私人组织收取极为高昂的费用，为公司和个人定制小型的避风塘。' +
                '在极少数情况下，这些私人避风塘通过地下隧道与GDI的官方避风塘相连通。' +
                '法律规定，拥有与GDI的公共避风塘相连通的私人避风塘的公民在C级及以上紧急状态期间必须允许请求援助的人进入。',
                '备注：到达一个陌生的黄区或蓝区之后，请特别注意要尽快探明周边避风塘的方位。' +
                '它们可以通过国际通用的离子风暴避难所标识被轻松辨别。',
            ],
            original: [
                'GDI Storm Shelters are located throughout all Blue Zones and in select Yellow Zone operational areas. ' +
                'They are generally found in close proximity to population centers and government installations. ' +
                'The earliest shelters were built after Ion Storms decimated population centers, including an incident resulting in the death of the famed Dr. Mobius and his top staff. ',
                'Ion Storm Shelters are typically located between 10 and 30 meters below ground level, but no closer than 70 meters to significant deposits of underground water or Tiberium. ' +
                'Their construction includes 8 foot thick, steel-reinforced concrete walls with integrated sonic emitters to prevent nearby Tiberium growth. ' +
                'Newer shelters include dormitories, cafeterias, medical facilities, vehicle maintenance garages, long-term power generators and redundant sonic emitters. ',
                'In high-risk areas some shelters have gained cultural significance as centers of social activity from sports to art and music events, gaining nicknames such as "Sector 7", "Old Blue" and "The Hatch".',
                'In recent years many private organizations have developed smaller shelters for corporations and individuals at exorbitant prices. ' +
                'On rare occasion these private shelters link with official GDI shelters via underground tunnels. ' +
                'Private citizens with shelters that link to GDI public shelters are required by law to allow access to anyone who requests aid during class C emergencies and above.',
                'NOTE: Upon arrival at an unfamiliar Blue or Yellow Zone, take special care to familiarize yourself with the locations of nearby storm shelters. ' +
                'They can also be easily identified by the international Ion Storm Shelter symbol.',
            ],
            tr_source: '【节选自 GDI应急程序报文-避风塘协议】',
            tr_remark: '此致敬意 GDI紧急援助委员会',
            or_source: 'Excerpt from GDI Emergency Procedures Packet - Storm Shelter Protocol',
            or_remark: 'Courtesy GDI Emergency Aid Commission',
        },
    },
];

export default news_wire;