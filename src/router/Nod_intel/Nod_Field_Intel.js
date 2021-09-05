import Intelligence from "@/components/Intelligence";

const field_intel = [
    {
        path: 'tiberium_spikes',
        component: Intelligence,
        props: {
            title: '泰伯利亚采炼柱 Tiberium Spikes',
            translation: [
                '占领战场上的泰伯利亚采炼柱可以为你的作战行动提供后勤支援。' +
                '在各个黄区和蓝区你能够发现数以百计的这种泰伯利亚开采和加工设施。',
                '派遣一名破坏者进入一座采炼柱并将其据为己有——采炼柱的机器会从地下的矿床中持续地提炼泰伯利亚并就地进行加工，为你的部队提供源源不断的资金流，支持作战。',
            ],
            original: [
                'Capture Tiberium Spikes in your theatre of war to provide logistical support for combat operations. ' +
                'You\'ll find these Tiberium mining and processing units deployed by the hundreds in various Yellow and Blue Zones.',
                'Send a Saboteur into a Spike and claim it for your own - your forces will benefit from a constant flow of resources as the machine extracts Tiberium from underground deposits and processes it on-site.',
            ],
            tr_source: '节选自 兄弟会作战后勤指南',
            or_source: 'Excerpt from the Brotherhood Combat Logistics Guide',
            pic_src: require('../../assets/nod_pictures/Tiberium_Spike.png'),
        },
    },
    {
        path: 'tactical_doctrine',
        component: Intelligence,
        props: {
            title: 'Nod战术条令 Nod Tactical Doctrine',
            translation: [
                '“......Nod行动条令明文规定，指挥官应当掌控作战行动的节奏，在出现最佳时机，抵达最优地点之前，应避免与敌军正面碰撞。' +
                '绝密、速度、机动性、合理的部队组成以及行动灵活性的结合是都是致胜的法宝......”',
            ],
            original: [
                '"...Nod operational doctrine states that commanders should control the tempo of combat operations, avoiding direct contact with the enemy until the time and place are just right. ' +
                'Stealth, speed, mobility, force composition, and operational flexibility are the key to success..."',
            ],
            tr_source: '节选自 兄弟会作战行动手册',
            or_source: 'Excerpt from the Brotherhood Combat Operations Manual',
            pic_src: require('../../assets/nod_pictures/Temple_Prime_Interior.jpg'),
        },
    },
    {
        path: 'refinery_harvesting',
        component: Intelligence,
        props: {
            title: '精炼与收割作业 Refinery and Harvesting Operations',
            translation: [
                '模块化的泰伯利亚精炼厂可以被迅速、高效地建立，而且采用了最新的泰伯利亚加工技术。',
                '最新型的Nod收割机不仅工作速度飞快，而且可以通过车载隐形技术躲避侦测。' +
                '你能够在敌人的眼皮底下收割资源，让GDI的后勤官员大惑不解地自问：“那片泰伯利亚矿区去哪里了？”......',
            ],
            original: [
                'Modular Tiberium refineries can be set up quickly and efficiently on-site, using the latest Tiberium processing technology.',
                'The latest generation Nod harvesters are not just fast, but they are also able to avoid detection with on-board stealth technology. ' +
                'You\'ll be able to harvest resources right under the nose of the enemy, leaving GDI logistics officers scratching their heads and asking themselves, \'Where\'d that Tiberium field go?\'...',
            ],
            tr_source: '节选自 兄弟会作战后勤指南',
            tr_remark: '和平源自力量！',
            or_source: 'Excerpt from the Brotherhood Combat Logistics Guide',
            or_remark: 'Peace through power!',
            pic_src: require('../../assets/nod_pictures/Nod_Refinery.png'),
        },
    },
    {
        path: 'guns_of_amazon',
        component: Intelligence,
        props: {
            title: '亚马孙腹地的炮台 The Guns of the Amazon',
            translation: [
                '自亚马孙沙漠进行转移的车队的撤退路线被GDI的远程炮兵阵地所阻断。' +
                '在收到进一步指示之前，名为“沙漠之蝰”、“锐蝮蛇”和“巨蝮蛇”的车队将分别在E、S和B标记点停留等待。' +
                '护卫队将在每个车队周围布置一道防御阵线。',
                '一旦GDI的炮兵阵地被摧毁，毒蛇巢穴将立即发出通知。',
            ],
            original: [
                'Evacuation routes for convoys in transit from the Amazon Desert have been compromised by long range GDI artillery emplacements. ' +
                'Convoys designated as Sand Viper, Lancehead, and Bushmaster will hold at markers Echo, Sierra, and Bravo until further notice. ' +
                'Escorts will set up a defensive perimeter around each convoy.',
                'Viper\'s Nest Actual will advise when the GDI emplacements have been neutralized.',
            ],
            tr_source: '<<通讯建立>><br/><br/>发报源：毒蛇巢穴<br/>紧急级别：君主<br/>扰码指数：Q-R-1',
            tr_remark: '<<通讯完毕>>',
            or_source: '<< Incoming Transmission >><br/><br/>Source: Viper\'s Nest Actual<br/>Priority: Monarch<br/>Scramble Index: Quebec-Romeo-1',
            or_remark: '<< Transmission Offline >>',
            pic_src: require('../../assets/nod_pictures/Guns_of_the_Amazon.png'),
        },
    },
    {
        path: 'transport',
        component: Intelligence,
        props: {
            title: '呼叫运输空艇 Calling for Transport',
            translation: [
                '只要一座Nod基地中有可以执行任务的飞行器，处于飞行器活动半径范围内的Nod地面单位就可以呼叫运输空艇。',
                '身处野外的作战单位可以通过无线电通讯请求将其从当前位置进行空运。',
                '运输空艇将会降落到指定位置，接载需要转移的作战单位，并将其运送至目的地。',
                '请小心，不要让运输空艇直接暴露在敌方的防空火力之下，因为此时的运输空艇完全是活靶子，你将要面对失去所运输的步兵或战车的风险。',
            ],
            original: [
                'Once aircraft have begun operating from a Nod base, many Nod ground units in the general area gain the ability to call for transport. ',
                'Units can radio in from the field requesting airlift from their current position. ',
                'Carryalls will deploy, pick up the units needing transportation, and ferry them to a target destination. ',
                'Be careful about exposing the Carryalls to enemy anti-aircraft fire because Carryalls are vulnerable targets and you run the risk of losing your infantry or vehicles in transit.',
            ],
            tr_source: '摘自 兄弟会作战行动手册',
            or_source: 'From the Brotherhood Combat Operations Manual',
            pic_src: require('../../assets/nod_pictures/Carryall.png'),
        },
    },
    {
        path: 'intercepted_transmission',
        component: Intelligence,
        props: {
            title: '截获通讯 Intercepted Transmission',
            translation: [
                '“*乱码* ...... 偏离路线 ...... *难以破译* ...... 兄弟相残 ...... *难以破译* ...... 事情终于得到解决，一个新的方向 ...... *乱码* ...... 赶快部署部队 ...... *乱码* ...... 铜斑蛇 ......”',
            ],
            original: [
                '"*garbled* ... strayed from the path ... *unintelligible* ... brother against brother ... *unintelligible* ... things finally set right, a new course ... *garbled* ... rapid deployment force ... *garbled* ... Copperhead Actual ..."',
            ],
            tr_source: '<<通讯建立>><br/><br/>发报源：不明，可能来自印度次大陆上空<br/>紧急级别：亚伯<br/>扰码指数：U-I-9',
            tr_remark: '<<通讯完毕>>',
            or_source: '<< Incoming Transmission >><br/><br/>Source: Unknown, possibly airborne over Indian subcontinent<br/>Priority: Abel<br/>Scramble Index: Uniform-India-9',
            or_remark: '<< Transmission Offline >>',
            pic_src: require('../../assets/nod_pictures/IDB_Nod.png'),
        },
    },
    {
        path: 'interrogation_report',
        component: Intelligence,
        props: {
            title: '黑手审讯报告 Black Hand Interrogation Report',
            translation: [
                '“......在死掉之前，受刑者承认，GDI的澳-新特种武器分遣队将把核弹头从位于布罗肯希尔的基地转移到悉尼地区境内的某处。' +
                '这些核弹头将在GDI军队派出的一支护卫队的护送下进行转移。' +
                '这些弹头的爆炸当量尚未得到确认，但可以推测出大体在100-300千吨范围内。' +
                '日期、具体时间和路线信息如下......”',
            ],
            original: [
                '\'...before expiring, subject confirmed that GDI\'s A-NZ special weapons detachment will be moving nuclear warheads from the base at Broken Hill to a location within the Sydney zone border. ' +
                'Multiple warheads will be transported in a convoy escorted by GDI military units. ' +
                'Blast yields for the warheads have not been confirmed, but are likely to be in the 100-300 kiloton range. ' +
                'Date, time, and route information are as follows...\'',
            ],
            tr_source: '黑手圣徒 巴尔赞<br/>《审讯报告》<br/>主题：GDI核科技/布罗肯希尔',
            or_source: 'Black Hand Confessor Barzan<br/>Interrogation Report<br/>Subject: GDI Nuclear Tech / Broken Hill',
            pic_src: require('../../assets/nod_pictures/Confessor_Intel.png'),
        },
    },
    {
        path: 'aus_new_zealand',
        component: Intelligence,
        props: {
            title: '澳大利亚-新西兰战区评估<br/> Australia-New Zealand Theatre Assessment',
            translation: [
                'GDI和兄弟会都在澳大利亚安排有意义重大的行动。' +
                '一旦我们发起对GDI的进攻，那么这一地区似乎将不可避免地成为一个主战场。',
                '吉莲-卡塔尔亲自监督了澳-新战区的战前准备工作，包括位于艾尔斯巨岩的战区指挥所的修建，以及横跨澳大利亚内陆地区的多个地下基地的部署。',
                '在过去三年中，澳-新战区的步兵师和装甲师一直在使用当地生产的武器装备进行高强度训练。' +
                '届时，澳-新战区的兄弟会部队已为战争做好了万全准备。',
            ],
            original: [
                'GDI and the Brotherhood both have significant operations in Australia. ' +
                'It seems inevitable that this region will become a major theatre of war once the offensive against GDI gets under way. ',
                'Kilian Qatar has personally overseen the preparations in the A-NZ theatre including the construction of a full regional command facility at Ayers Rock and the establishment of multiple underground bases throughout the Australian Outback. ',
                'A-NZ infantry and armored divisions have been training intensively for the last three years using weapons and equipment that are manufactured locally at a rapid pace. ' +
                'When the time comes, the Brotherhood\'s A-NZ forces will be ready.',
            ],
            tr_source: 'Nod军情报告<br/>2046年三月',
            or_source: 'Nod Intelligence Report<br/>March 2046 ',
            pic_src: require('../../assets/nod_pictures/Australia_2.png'),
        },
    },
    {
        path: 'invasion_global',
        component: Intelligence,
        props: {
            title: '一次波及全球的入侵 An Invasion Global in Scope',
            translation: [
                '“......侵略者袭击了世界各地的GDI部队，Nod部队和平民目标，其作风野蛮而凶残。' +
                '据报道，敌人规模最大的活动发生在红区边缘地带和大型人口中心。' +
                '对兄弟会而言万幸的是，较大的城市往往位于蓝区，因此GDI的势力范围似乎受到了最严重的损害......”',
            ],
            original: [
                '"...the invaders have attacked GDI and Nod forces and civilian targets around the world with savage force. ' +
                'The largest scale enemy activity has been reported near Red Zone borders and in the larger population centers. ' +
                'Fortunately for the Brotherhood, the larger cities tend to be in Blue Zones, so it looks like GDI strongholds are taking the worst of the punishment..."',
            ],
            tr_source: '节选自 澳大利亚-新西兰每日军情简报',
            or_source: 'Excerpt from A-NZ Daily Intelligence Briefing',
            pic_src: require('../../assets/nod_pictures/Scrin_Mothership.jpg'),
        },
    },
    {
        path: 'cease_fire_order',
        component: Intelligence,
        props: {
            title: '停火令 Cease Fire Order',
            translation: [
                '自今天23：00起，澳-新战区的所有指挥官必须停止对GDI军队的攻击行动。' +
                '在新的通知下达前，这条临时的停火令始终有效。',
                '由上级选定的澳-新战区指挥官必须奉命与GDI部队协同行动，共同对抗战区内的外星侵略军。',
                '铜斑蛇会向受此命令影响的澳-新战区部队提供联系信息并指定联络官。',
                '凡违反停火令者，格杀勿论。',
            ],
            original: [
                'All A-NZ commanders will cease offensive operations against GDI military units at 2300 today. ' +
                'A temporary "cease fire" order will be in effect until further notice. ',
                'Selected A-NZ commanders will be asked to begin coordinated operations with GDI units against invader forces in the A-NZ theatre. ',
                'Copperhead Actual will provide contact information and liaison officers to the affected A-NZ units.',
                'Any violation of the cease fire order will result in immediate execution of the violator.',
            ],
            tr_source: '<<通讯开始>><br/><br/>发报源：A-NZ总部，铜斑蛇<br/>紧急级别：亚伯<br/>扰码指数：C-J-4',
            tr_remark: '<<通讯完毕>>',
            or_source: '<< Begin Transmission >><br/><br/>Source: A-NZ HQ, Copperhead Actual<br/>Priority: Abel<br/>Scramble Index: Charlie-Juliet-4',
            or_remark: '<< End Transmission >>',
            pic_src: require('../../assets/nod_pictures/IDB_Nod.png'),
        },
    },
    {
        path: '',
        component: Intelligence,
        props: {
            title: '',
            translation: [
                '',
            ],
            original: [
                '',
            ],
            tr_source: '',
            tr_remark: '',
            or_source: '',
            or_remark: '',
            pic_src: require('../../assets/nod_pictures/Vertigo.jpg'),
        },
    },
];

export default field_intel;