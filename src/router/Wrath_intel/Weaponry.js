import Intelligence from "@/components/Intelligence";

const weaponry = [
    {
        path: 'confessor_cabal',
        component: Intelligence,
        props: {
            title: '圣徒队 Confessor Cabal',
            translation: [
                '自第二次泰伯利亚战争以来，Nod圣徒越来越成为战场上的常客，但直到黑手进入马西昂修士统治的后斯拉维克时代，这些身披护甲的教士才真正凭借自己的实力成为了公认的高性能战斗人员。',
                '为了巩固自己作为一个“纯粹”本教信仰者的地位，标榜自己没有受到其前任所谓异端的玷污，马西昂采取了激进的措施，用一大批做好战斗准备的圣徒取代了他标准的Nod武装分子先遣队，这些圣徒装备有机枪和内含精神药物的致幻手榴弹，用以更好地传播他的意志......并将他的对手置于刀剑之下。',
            ],
            original: [
                'While the Nod Confessor has been an increasingly common sight on the battlefield since the Second Tiberium War, it was not until the establishment of Brother Marcion\'s post-Slavik Black Hand that these armored priests were considered effective combatants in their own right. ',
                'Seeking to bolster his own standing as a \'pure\' religious figure, untainted by the purported heresy of his predecessor, Marcion took the radical step of replacing his standard Nod Militant advance guard with regiments of combat-ready Confessors, armed, as always, with machine guns and psychotropic hallucinogenic grenades, all the better to spread his word...and put his enemies to the sword.',
            ],
            tr_source: '【Nod精英圣徒详解】',
            tr_remark: '摘自 Nod档案馆',
            or_source: 'Details on Nod\'s elite confessor infantry',
            or_remark: 'From the Nod Archives',
            pic_src: require('../../assets/wrath_pictures/Black_Hand.png'),
        },
    },
    {
        path: 'slingshot',
        component: Intelligence,
        props: {
            title: 'GDI-弹弓 GDI Slingshot',
            translation: [
                '在第二次泰伯利亚战争的余波中，GDI中止了耗资无数、失败风险高的悬浮科技计划方案，而GDI弹弓则是个例外——它作为这项曾在GDI诸多项目中占主导地位的计划的最后成果，在经历了漫长的十年开发后才最终结束测试。',
                '与此前的同类单位相比，这种专门用于防空的战车对离子风暴干扰的抗性更强，但弹弓仍然是一种相对脆弱的单位——它牺牲了装甲和副武器，换取了迅捷的速度、良好的机动性和性能强悍的四管火炮，即使是最难以战胜的空中对手也会在弹弓的火力下颓然坠地。',
            ],
            original: [
                'With GDI\'s shuttering of its costly, failure prone HoverTech initiative in the aftermath of the Second Tiberium War, the GDI Slingshot is something of an anomaly - the last bastion of this once dominant GDI program, finally out of testing after a decade-long development phase. ',
                'While this exclusively anti-air vehicle is less vulnerable to Ion Storm interference than its predecessors, the Slingshot remains a relatively fragile unit - trading armor and additional weaponry for high speed, maneuverability and a powerful quad cannon that can quickly bring even the most powerful aerial opponent crashing to the ground.',
            ],
            tr_source: '【GDI 弹弓防空悬浮战车 详解】',
            tr_remark: '摘自 GDI档案室',
            or_source: 'Details on GDI\'s Slingshot anti-air hover vehicle',
            or_remark: 'From the GDI Archives',
            pic_src: require('../../assets/wrath_pictures/GDI_Slingshot.jpg'),
        },
    },
    {
        path: 'hammerhead',
        component: Intelligence,
        props: {
            title: 'GDI-锤头鲨 GDI Hammerhead',
            translation: [
                '作为20世纪的突击/运输综合性武装直升机的直系继承者，大型重装直升机锤头鲨的设计定位是活动半径相对较为有限的GDI奥卡攻击机在更远程范围中的补充。',
                '锤头鲨装备有多门火神炮，其内部空间足以运送一整个步兵团，它的秘密武器就是它巨大的补给存储量，让它能够在战场上连续数日执行任务，无需加油或重新进行武装。',
            ],
            original: [
                'A direct descendant of the assault/transport hybrid attack choppers of the 20th century, the large, heavily-armored Hammerhead was designed to act as a longer ranged compliment to the relatively range-limited GDI Orca. ' +
                'Armed with multiple Vulcan Cannons and enough space to transport an entire infantry regiment, the Hammerhead\'s secret weapon is its massive supply storage capacity, allowing the aircraft to operate in the field for days at a time without needing to either refuel or rearm.',
            ],
            tr_source: '【GDI 锤头鲨重型突击运输机 详解】',
            tr_remark: '摘自 GDI档案室',
            or_source: 'Details on GDI\'s Hammerhead heavy assault aircraft',
            or_remark: 'From the GDI Archives',
            pic_src: require('../../assets/wrath_pictures/GDI_Hammerhead.jpg'),
        },
    },
    {
        path: 'combat_engineer',
        component: Intelligence,
        props: {
            title: 'GDI-战斗工兵 GDI Combat Engineer',
            translation: [
                '完全放弃作战训练是GDI工程兵团的一项悠久的传统，其成员更愿意把他们的时间花在研究建筑工程学和电子战技术上。' +
                '然而，Nod的势力无声无息地渗透进了平民群众之中，让工兵面临的风险大增，导致了一系列后果令人难以承受的伤亡事件，夺走了工程兵团中一些最为优秀、最具智慧的人才的生命。',
                'GDI对此的应对策略是，让所有需要披挂上阵的工程兵团成员都参与一个作战训练项目，为每个人配备一把手枪和一身经过小幅度改进的防弹衣。' +
                '这一措施的成效仍有待观察，但初步的调查结果显示，军团成员依然更倾向于“让战士去战斗”。',
            ],
            original: [
                'It has been a longstanding tradition of the GDI Engineering Corps to forego weapons training, with its members preferring to spend their time studying structural engineering and electronic subterfuge. ' +
                'However, Nod infiltration of the civilian population has placed Engineers at increased risk, resulting in a series of devastating casualties that have stripped the Corps of many of their best and brightest.',
                'In response, GDI has initiated a combat training program for any Engineering Corps member facing a battlefield assignment, outfitting each with a pistol and slightly upgraded body armor. ' +
                'The outcome of this effort remains to be seen, but initial reports indicate that the Corps members still prefer to \'let the fighters do the fighting.\'',
            ],
            tr_source: '【GDI 工程兵团的武器装备 详解】',
            tr_remark: '摘自 GDI档案室',
            or_source: 'Details on arming of GDI\'s Engineer Corps',
            or_remark: 'From the GDI Archives',
        },
    },
    {
        path: 'behemoth',
        component: Intelligence,
        props: {
            title: 'GDI-巨兽 GDI Behemoth',
            translation: [
                '作为GDI军械库中不可或缺的一份子，神像机动火炮步行机甲有着武器有效载荷不足的短板，在短兵相接贴近对抗时显得无计可施。' +
                '有太多太多的神像被人数不过一个步兵团的Nod部队化为一片灰烬，一个对此感到万分沮丧的GDI工程兵团临时尝试在机甲的底座上加装了一个可以进驻步兵的吊舱。',
                '这一奇思妙想最终大获成功，不必多说，遭遇改进版神像的Nod巡逻部队的下场极为悲惨，于是改进版神像取得了“巨兽”的昵称，在不久之后被批准进行全面开发。' +
                '经过钢爪部队一段时间的实战测试之后，巨兽有望成为全球GDI部队的远距离炮兵力量的顶梁柱。',
            ],
            original: [
                'While an essential part of the GDI arsenal, the limited weapon payload of the Juggernaut Mobile Artillery walker\'s left the vehicle uniquely vulnerable to close-range engagement. ' +
                'After one too many Juggernauts were rendered a smoldering heap by little more than a Nod infantry regiment, a frustrated GDI Engineering Corps jury-rigged an infantry-capable garrison pod onto the walker\'s chassis. ',
                'The end result was so successful, not to mention devastating to the ill-fated Nod recon patrols that came across it, that this updated walker, nicknamed the Behemoth, was soon approved for full development. ' +
                'After a period of field testing with the Steel Talons, the Behemoth is expected to provide long range artillery support across the globe.',
            ],
            tr_source: '【GDI 改良版突击步行机甲 详解】',
            tr_remark: '摘自 GDI档案室',
            or_source: 'Details on GDI\'s modified assault walker',
            or_remark: 'From the GDI Archives',
        },
    },
    {
        path: 'heavy_harvester',
        component: Intelligence,
        props: {
            title: '重型收割机 Heavy Harvester',
            translation: [
                '米切尔将军高度重视战场上的灵活性，这一原则甚至体现在他的钢爪部队所使用的用于收集资源的收割机上。',
                '钢爪收割机并非装备标准的可旋转机枪，而是拥有一个可以进驻步兵的吊舱，可以根据指挥官的判断和分析来应对各种各样的危险和威胁。',
            ],
            original: [
                'General Mitchell places a high value on battlefield flexibility, a doctrine that spreads even to the Harvesters his Steel Talons employ for resource gathering. ',
                'Rather than the standard turret machine gun, the Steel Talon Harvester is outfitted with an infantry capable garrison pod, allowing the vehicle to be adapted to counter whatever threat the commander deems most pressing.',
            ],
            tr_source: '【GDI 新型可驻军收割机 详解】',
            tr_remark: '摘自 GDI档案室',
            or_source: 'Details on GDI\'s new, garrisonable harvester',
            or_remark: 'From the GDI Archives',
        },
    },
];

export default weaponry;