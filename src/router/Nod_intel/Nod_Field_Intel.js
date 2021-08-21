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
                '派遣一名破坏者进入一座采炼柱并将其据为己有——采炼柱的机器会从地下的矿床中持续地提炼泰伯利亚并就地进行加工，为你的部队提供源源不断的资金流作为支持。',
            ],
            original: [
                'Capture Tiberium Spikes in your theatre of war to provide logistical support for combat operations. ' +
                'You\'ll find these Tiberium mining and processing units deployed by the hundreds in various Yellow and Blue Zones.',
                'Send a Saboteur into a Spike and claim it for your own - your forces will benefit from a constant flow of resources as the machine extracts Tiberium from underground deposits and processes it on-site.',
            ],
            tr_source: '【节选自 兄弟会作战后勤指南】',
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
                '绝密、速度、机动性、合理的部队组成、行动灵活性的结合是胜利大门之匙......”',
            ],
            original: [
                '"...Nod operational doctrine states that commanders should control the tempo of combat operations, avoiding direct contact with the enemy until the time and place are just right. ' +
                'Stealth, speed, mobility, force composition, and operational flexibility are the key to success..."',
            ],
            tr_source: '【节选自 兄弟会作战行动手册】',
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
                '模块化的泰伯利亚精炼厂运用了最新的泰伯利亚加工技术，其建立过程迅速而高效。',
                '最新一代的Nod收割机不仅工作速度飞快，而且可以通过车载隐形技术躲避侦测。' +
                '你能够在敌人的眼皮底下收割资源，让GDI的后勤官员大惑不解地自问：“那片泰伯利亚矿区去哪里了？”......',
            ],
            original: [
                'Modular Tiberium refineries can be set up quickly and efficiently on-site, using the latest Tiberium processing technology.',
                'The latest generation Nod harvesters are not just fast, but they are also able to avoid detection with on-board stealth technology. ' +
                'You\'ll be able to harvest resources right under the nose of the enemy, leaving GDI logistics officers scratching their heads and asking themselves, \'Where\'d that Tiberium field go?\'...',
            ],
            tr_source: '【节选自 兄弟会作战后勤指南】',
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
                '发报源：毒蛇巢穴',
                '紧急级别：君主',
                '扰码指数：Q-R-1',
                '从亚马孙沙漠中转移的车队的撤退路线被GDI的远程炮兵阵地所破坏。' +
                '在收到进一步指示之前，名为“沙漠之蝰”、“锐蝮蛇”和“巨蝮蛇”的车队将在E、S和B标记点停留等待。' +
                '护卫队将在每个车队周围布置一道防御阵线。',
                '当GDI的炮兵阵地被摧毁时，毒蛇巢穴将发出通知。',
            ],
            original: [
                'Source: Viper\'s Nest Actual',
                'Priority: Monarch',
                'Scramble Index: Quebec-Romeo-1',
                'Evacuation routes for convoys in transit from the Amazon Desert have been compromised by long range GDI artillery emplacements. ' +
                'Convoys designated as Sand Viper, Lancehead, and Bushmaster will hold at markers Echo, Sierra, and Bravo until further notice. ' +
                'Escorts will set up a defensive perimeter around each convoy.',
                'Viper\'s Nest Actual will advise when the GDI emplacements have been neutralized.',
            ],
            tr_source: '【通讯建立】',
            tr_remark: '通讯完毕',
            or_source: '<<Incoming Transmission>>',
            or_remark: '<<Transmission Offline>>',
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
            tr_source: '【摘自 兄弟会作战行动手册】',
            or_source: 'From the Brotherhood Combat Operations Manual',
            pic_src: require('../../assets/nod_pictures/Carryall.png'),
        },
    },
];

export default field_intel;