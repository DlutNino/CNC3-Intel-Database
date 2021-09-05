import Intelligence from "@/components/Intelligence";

const archives = [
    {
        path: 'brotherhood_of_nod',
        component: Intelligence,
        props: {
            title: 'Nod兄弟会 The Brotherhood of Nod',
            translation: [
                '欢迎来到Nod兄弟会。' +
                '你加入的是一个全球性的组织，在这里，数百万成员和睦共处，齐心协力，以和平之名，为了使整个世界实现统一，为了让人类的真正潜力得到发掘而努力奋斗。',
                '我们与泰伯利亚之间的关系一直都遭到世人误解。' +
                '大多数人都没有意识到我们信仰的根源可以追溯到几千年前，比1995年这种绿色水晶首次在地球上现身要早得多......而那也尽在我们的伟大领袖凯恩的预言之中。',
                '当由富裕国家勾结而成的，被称作全球防御组织的法西斯政治联盟试图掌控这神圣的绿色水晶时，兄弟会昼夜不停不知疲倦地四处收集珍贵的水晶样品......为了研究它，发掘它作为一种新能源的潜力，探索它的无限可能性。' +
                '无论基于我们的研究成果还是源于我们的崇高信仰，我们都深信不疑，泰伯利亚就是赐予人类的终极礼物。' +
                '它是通往未来的钥匙。',
                '随着泰伯利亚遍布地球，我们的运动也在蓬勃发展。' +
                '主流媒体将我们定名为“恐怖分子”，但我们揭露了GDI才是真正的罪人。' +
                '他们单方面重新划定了国际边界线，将Nod的追随者逐入了萧瑟贫瘠的黄区，并自行宣称安定富足的蓝区归他们所有。',
            ],
            original: [
                'Welcome to the Brotherhood of Nod.' +
                'You have joined a global order with millions of members all working together in harmony to unite the world in the name of peace - and realize the true potential of mankind.',
                'Our relationship with Tiberium has always been greatly misunderstood. ' +
                'Most people do not realize that the roots of our faith extend back several millennia, long before the emergence of the green crystal on Earth in 1995... an event prophesized by our great leader, Kane.',
                'While the fascist political consortium of wealthy nations known as the Global Defense Initiative attempted to control the sacred green crystal, the Brotherhood worked tirelessly to acquire samples of the precious crystal... to study it, to unlock its potential as a new energy source, to explore its possibilities. ' +
                'Through our research and our faith, we have affirmed that Tiberium is the ultimate gift to mankind. ' +
                'It is the key to the future.',
                'Our movement grew rapidly as Tiberium spread across the Earth. ' +
                'The mainstream media branded us as \'terrorists\' but we exposed GDI as the real criminals. ' +
                'They unilaterally redrew international border lines, relegating Nod followers into inhospitable Yellow Zones while they claimed the pristine and exclusive Blue Zones all for themselves.',
            ],
            tr_source: '节选自 为新兵举办的Nod组织介绍会',
            or_source: 'Excerpt from a Nod orientation briefing for new recruits',
            pic_src: require('../../assets/nod_pictures/Hand_of_Nod_spirit.png'),
        },
    },
    {
        path: 'world_place',
        component: Intelligence,
        props: {
            title: 'Nod在世界上的地位 Nod\'s Place in the World',
            translation: [
                'Nod兄弟会为劳苦大众而斗争——占据总数80%的，身陷黄区勉强活命的，饱受战火蹂躏和贫穷折磨而又被GDI所抛弃的人口。' +
                'Nod利用泰伯利亚为自己提供燃料和资金方面的支持，竭尽所能不知疲倦地致力于让处于一片混乱中的秩序恢复正常。' +
                '我们维持街道治安，向饥饿者分发食物，提供紧急医疗救助，抚慰精神空虚的人，让原本绝望的人振作起来。',
                'GDI将自己塑造成世界的守护者和拯救者，但事实上二者皆非。' +
                'GDI腐败而偏向徇私：世界上20%的人口——地球上最富有的那些人——在蓝区安稳度日，消耗了地球上的大多数自然资源，运用他们规模庞大的军力，强行剥夺被压迫者本是天生具有的开采和开发的泰伯利亚的权力，以维持现状。',
                '强者披着自由的外衣堂而皇之地压迫弱者——而GDI霸权的唯一对手正是兄弟会。' +
                '在和平和进步旗号的召唤下，Nod兄弟会聚集了各路力量。' +
                'Nod是推翻GDI暴政的全部希望。' +
                '兄弟会......团结......和平。',
            ],
            original: [
                'The Brotherhood of Nod champions the common people - the 80% of the world\'s population that struggles to get by in Yellow Zones torn by war, wracked by poverty, and abandoned by GDI. ' +
                'Using Tiberium to fuel and fund our efforts, Nod works tirelessly to bring order from the chaos. ' +
                'We make the streets safe, distribute food to the hungry, provide emergency medical care, minister to those who feel a spiritual vacuum, and inspire hope in people who would otherwise have none.',
                'GDI casts itself as the world\'s guardian and savior, but they are neither. GDI is corrupt and unjust: 20% of the world\'s population - the most wealthy people on the planet - live in the Blue Zones, consuming the majority of the world\'s natural resources, wielding their vast military power to maintain the status quo by depriving the downtrodden of their god-given right to mine and exploit Tiberium.',
                'The powerful oppress the weak in the hollow name of freedom - and the only counter to GDI\'s power is the Brotherhood. ' +
                'Nod meets strength with strength in the name of peace and progress. ' +
                'Nod is the only hope against GDI tyranny.' +
                'Brotherhood...Unity...Peace.',
            ],
            tr_source: '来自 一本黄区信息手册<br/><br/>《Nod: 代表着宗教信仰，亮剑向腐败暴君》',
            or_source: 'From a Yellow Zone information pamphlet<br/><br/>Nod: Representative of the Religious and a foil to a corrupt oppressor',
            // pic_src: require('../../assets/nod_pictures/Qatar.jpg'),
        },
    },
    {
        path: 'a_sat_control',
        component: Intelligence,
        props: {
            title: 'GDI A-SAT系统的地面控制<br/> Ground Control for GDI\'s A-SAT Systems',
            translation: [
                '长期以来，核心集团对于GDI在外太空的支配地位都怀有极大的恐惧。' +
                'GDI的轨道武器平台、指挥与控制空间站和间谍卫星被强大的反导弹系统所严密守护着，似乎无懈可击，所向无敌。' +
                '这条运行在轨道上的死亡之链的基础，是一张由天基动能杀伤武器、激光甚至还有离子炮本体组成的网络——用于拦截和摧毁来袭的导弹。' +
                '多年以来，GDI在太空中的军备力量始终令兄弟会望洋兴叹，这导致了一种感觉的产生，那就是在经历了数十年的斗争后，GDI将会决定性地占据上风。',
                '但是我们的特工捕捉到了GDI系统中的一个瑕疵：出于某种费解的原因，GDI将他们的离子炮和A-SAT系统的操作人员和控制中心都安置在了地面上。' +
                '更令我们欣喜的是，这些重要的人员和设备都集中在东北部蓝区的一座独立设施内。' +
                '我们经过深思熟虑制定了一个周密的计划，对戈达德航天中心发动突然袭击，如果成功，可能会导致GDI的所有离子炮及整个A-SAT系统全部处于离线状态，这将给予兄弟会几天甚至几周的时间在全球范围内安排作战行动，不受天基武器和电子千里眼的任何阻碍。',
                'GDI的核心指挥枢纽位于费城空间站中，这让我们得以进一步扩展计划。' +
                '在A-SAT控制系统瓦解之后，我们立即发射一枚导弹击毁了费城空间站，令GDI的整个指挥与控制系统陷入群龙无首、七零八落的局面中。',
            ],
            original: [
                'The Inner Circle has long feared GDI\'s dominance of space. ' +
                'GDI\'s orbital weapons platforms, command & control stations, and spy satellites are protected by a powerful anti-missile system that seemed invulnerable and invincible. ' +
                'This orbital necklace of death is based on a network of space-based kinetic kill weapons, lasers, and even the Ion Cannons themselves - used to intercept and destroy incoming missiles. ' +
                'GDI space assets have been out of reach of the Brotherhood for years, leading to a sense that the balance of power in a decades-long struggle would eventually tip decisively against the Brotherhood.',
                'But our operatives discovered a flaw in the GDI system: For some unfathomable reason, GDI put the crews and control centers for their Ion Cannons and their A-SAT system on the ground. ' +
                'Even better, the critical personnel and equipment are concentrated in a single facility in the northeastern Blue Zone. ' +
                'A well-planned surprise strike on Goddard Space Center could take all of GDI\'s Ion Cannons and their entire A-SAT system offline, giving the Brotherhood days and possibly weeks to conduct combat operations across the planet unhindered by space-based weapons and prying eyes.',
                'As a bonus, the primary GDI world command hub is based on board the space station Philadelphia. ' +
                'A missile strike on the Philadelphia immediately after the destruction of the A-SAT control systems could render the entire GDI command and control structure headless and reeling.',
            ],
            tr_source: '节选自 核心集团内部绝密情报会议',
            or_source: 'Excerpt from "Eyes Only" Inner Circle Intelligence Report',
            pic_src: require('../../assets/nod_pictures/Third_ion_cannon.jpg'),
        },
    },
];

export default archives;