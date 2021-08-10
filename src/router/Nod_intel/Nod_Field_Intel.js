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
];

export default field_intel;