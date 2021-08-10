import Intelligence from "@/components/Intelligence";

const kane_arsenal = [
    {
        path: 'militants_rocket',
        component: Intelligence,
        props: {
            title: '武装分子和火箭部队 Militants and Rocket Troopers',
            translation: [
                '“......兄弟会的精英士兵——比如黑手或者影子小队——单兵素质高超，但数量相对较少。' +
                '如果说精英士兵是兄弟会的柳叶尖刀，必须审时度势，有的放矢，那么数以百万计的武装分子和火箭部队就如同一把强大的战锤或者说战斧。' +
                '他们的力量源自他们的绝对数量，我们持续不断地在黄区那些对生活绝望而不惜冒险参军的人口中招募兵员，每次都有数十万人入伍。' +
                '我们为他们提供足以参与战斗的训练、武器和装备，让他们成为效忠于兄弟会的一把巨大的钝刀......”',
            ],
            original: [
                '"...the Brotherhood\'s elite soldiers - like the Black Hands or the Shadows - are highly capable but relatively few in number. ' +
                'If the elite soldier is the Brotherhood\'s scalpel, to be used with devastating precision, then the militants and rocket troopers in their millions are like a great war hammer or battleaxe. ' +
                'Their power comes from their sheer numbers, and we continue to recruit them by the hundreds of thousands from the desperate populations of the Yellow Zones. ' +
                'We give them enough training, weapons, and equipment to make them a vast blunt instrument of war for the Brotherhood..."',
            ],
            tr_source: '【节选自 兄弟会作战行动手册】',
            or_source: 'Excerpt from the Brotherhood Combat Operations Manual',
            pic_src: require('../../assets/nod_pictures/Militant_group.jpg'),
        },
    },
    {
        path: 'fanatics',
        component: Intelligence,
        props: {
            title: '狂热信徒 Fanatics',
            translation: [
                '看啊，那是我们最崇高圣洁的兄弟！' +
                '他们从不因生活的贫乏单调而心灵蒙尘，也绝不对GDI的暴政怀有半分容忍。' +
                '他们牺牲了自己，却为我们，为每一个在他们光荣的觉醒中奋身拼搏的斗士谋取了解放。' +
                '他们在烈焰中将凯恩的箴言心口相传，用自己神圣的灵魂之火净化着这片蒙受压迫的土地。',
            ],
            original: [
                '"Behold the noblest of our brothers! ' +
                'They shall suffer not the dread of this meager existence, nor shall they tolerate the tyranny of GDI. ' +
                'Through their sacrifice they bring liberation to each and every one of us who struggles on in their glorious wake. ' +
                'They will cleanse the land of oppression with the flames of their very souls, as they deliver Kane\'s word in fire."',
            ],
            tr_source: '【节选自 圣徒马西昂的著作】',
            tr_remark: ' —— Nod圣徒 马西昂',
            or_source: 'Excerpt from writings of Confessor Marcion',
            or_remark: ' - Nod Confessor Marcion',
        },
    },
    {
        path: 'saboteur',
        component: Intelligence,
        props: {
            title: '破坏者 Saboteur',
            translation: [
                'Nod的战地工程师群体——被称作破坏者——囊括了一部分最为忠诚和杰出的宗教人员。' +
                '破坏者运用他们特殊的才能和技巧来将关键的敌方建筑据为己有。' +
                '破坏者还可以在某些民用建筑和桥梁上放置装有近炸引信的炸药。' +
                '要想成为一名破坏者，必须经历多年的训练，训练内容在科学和厚黑学两方面兼而有之，包括破坏、渗透、盗用和劫持等。',
            ],
            original: [
                'Nod\'s elite society of combat engineers - known as the Saboteurs - includes some of the most loyal and brilliant clerics. ' +
                'Saboteurs use their special talents and skills to take over key enemy structures. ' +
                'Saboteurs can also rig certain civilian structures and bridges with proximity-detonated explosive charges. ' +
                'A Saboteur is made by years of training in science and in the dark arts of sabotage, infiltration, appropriation, and hijacking.',
            ],
            tr_source: '【摘自 《战火洗礼》】',
            or_source: 'From "Rites of War"',
            pic_src: require('../../assets/nod_pictures/Saboteur.png'),
        },
    },
    {
        path: 'hand_of_nod',
        component: Intelligence,
        props: {
            title: 'Nod之手 Hand of Nod',
            translation: [
                'Nod之手不仅仅是Nod步兵的军营和军械库。' +
                '它也是武装分子和火箭部队提升作战能力的学院，是狂热信徒举行离别仪式的舞台，还是圣徒从敌军战俘口中套取机密、维持我军内部纯洁性和真诚性的审讯中心。' +
                '它还可能会成为破坏者和突击队员在执行秘密行动之前睡眠休整的场所。',
            ],
            original: [
                'The Hand of Nod is not just a barracks and armory for Nod infantry. ' +
                'It is also a place of learning for militants and rocket troopers, a sanctuary for Fanatics as they perform their departure rituals, and an interrogation center for Confessors as they extract secrets from enemy captives and keep the hearts of our own troops pure and true. ' +
                'Saboteurs and Commandos may also choose to bunk down in the Hand of Nod prior to launching their secret operations.',
            ],
            tr_source: '【摘自 《战火洗礼》】',
            or_source: 'From "Rites of War"',
            pic_src: require('../../assets/nod_pictures/Hand_of_Nod.png'),
        },
    },
    {
        path: 'war_factory',
        component: Intelligence,
        props: {
            title: 'Nod战争工厂 Nod War Factory',
            translation: [
                '为启动第三次泰伯利亚战争而做的准备工作必须得到超高程度的保密。' +
                '出于隐蔽兵力和隐藏行动的双重需要，加之离子风暴发生次数的不断增加，兄弟会最终被迫放弃了将空运作为战斗部队主要增援途径的计划。',
                '兄弟会目前正在使用他们“分毫不差”的终极武器转运手段：在战区内现场制造战车。' +
                'Nod战争工厂大多设在地下，应用纳米组装机和重工业机器人来制造和维修坦克、摩托车、越野车和其它类型的战车。' +
                '维修无人机环绕战争工厂的表面飞行，战车靠近战争工厂时可以得到自动维修。',
            ],
            original: [
                'Preparations for the start of the Third Tiberium War required a very high degree of secrecy. ' +
                'The need for concealment and stealth coupled with the ever-increasing number of ion storms has forced the Brotherhood to move away from airlift as the primary source of reinforcements for combat units. ',
                'The Brotherhood is now employing the ultimate in "just in time" weapons delivery: Vehicles are being built on-site within the theatre of operations. ' +
                'Nod War Factories are housed mostly underground and use nano-assemblers and heavy industrial robots to construct and repair tanks, bikes, buggies, and other vehicles. ' +
                'Repair drones orbit around the surface features of the War Factory; vehicles in proximity to the War Factory will be automatically repaired.',
            ],
            tr_source: '【摘自 《战火洗礼》】',
            or_source: 'From "Rites of War"',
            pic_src: require('../../assets/nod_pictures/Nod_War_Factory.png'),
        },
    },
    {
        path: 'shadow_team',
        component: Intelligence,
        props: {
            title: '影子小队 Shadow Team',
            translation: [
                'Nod影子小队是一支精锐的特种部队，其训练科目与古代的忍者有颇多相似之处，可以长途渗透，深入敌后。' +
                '影子小队应用了隐形技术，手持对敌军步兵来说是致命的高射速武器，身装提供飞行能力的可折叠动力悬挂式滑翔机。',
                '影子小队成员携带的最强力的武器是一颗内含一种新式炸药的炸弹。' +
                '运用这些炸弹，一组影子小队可以一次性摧毁一座敌方建筑。' +
                '这种炸药的化学成分是我军通过间谍活动取得的，来自于一座从事下一代化学炸药研发工作的GDI实验室。',
                '以下内容节选自我军截获的GDI情报速递：',
                '“......GDI部队正深陷于他们在战场上遭遇过的最可怕的噩梦之中：一队又一队隐身的、飞行的、可以摧毁整座建筑物的高科技忍者。' +
                '我们建议负责防御任务的指挥官加大应对隐形部队的力度，将常规巡逻的频率翻倍......”',
            ],
            original: [
                'Trained using many of the same techniques that were used to shape the ancient Ninja, the Nod Shadows are elite special forces troops capable of infiltrating well behind enemy lines. ' +
                'Shadows employ stealth, carry rapid-fire weapons that are deadly against enemy infantry, and are equipped with collapsible powered hang-gliders that give them the ability to fly. ',
                'The most powerful weapon carried by a Shadow is a bomb incorporating a new type of explosive. ' +
                'Shadows can use these bombs to destroy enemy structures with a single blast. ' +
                'The chemical composition for the explosive was obtained by espionage, stolen right out of a GDI lab working on next-generation chemical explosives',
                'Excerpt from an intercepted GDI Intel FLASH Report:',
                '"...GDI troops are coming up against their worst nightmare in the field: Teams of stealthy, flying, high-tech ninjas that can destroy entire buildings. ' +
                'Commanders charged with defensive operations are advised to double up on stealth countermeasures and patrols..."',
            ],
            tr_source: '【摘自 《精英步兵行动指南》的概要部分】',
            or_source: 'From Summary Section of "Elite Infantry Operations Guide"',
        },
    },
    {
        path: 'venom',
        component: Intelligence,
        props: {
            title: '毒液巡逻空艇 Venom Patrol Craft',
            translation: [
                '“......目前，兄弟会已经将毒液投入服役，拥有垂直起降式侦察机的将不再只有GDI一家。' +
                '毒液在面对GDI的奥卡战机时甚至占据上风，因为它同时拥有对空和对地的攻击火力。' +
                '一架毒液可以袭扰地面目标，也可以让奥卡战机从天空坠落。”',
            ],
            original: [
                '"...now that the Brotherhood has deployed the Venom, GDI no longer has a monopoly on VTOL scout aircraft. ' +
                'The Venom is one up on the GDI Orca, however, since it can strike both air and ground targets. ' +
                'A Venom can engage ground targets but can also blow Orcas right out of the sky..."',
            ],
            tr_source: '【摘自 《兄弟会兵器》】',
            tr_remark: '和平源自力量！',
            or_source: 'From "Weapons of the Brotherhood"',
            or_remark: 'Peace Through Power!',
            pic_src: require('../../assets/nod_pictures/Venom.jpg'),
        },
    },
    {
        path: 'flame_weapons',
        component: Intelligence,
        props: {
            title: '喷火兵器 Flame Weapons',
            translation: [
                '火焰喷射器是强而有力的反步兵武器。' +
                '他们能够带给敌人一种超乎想象的心理震慑，有时甚至超越了他们纯粹战斗力的上限。',
                '现在，我们的实验室已经成功开发出一种能够支撑长时间作战行动的浓缩燃料，新一代的喷火兵器也已经应用于步兵和战车上。' +
                '名为黑手的重型步兵部队手持便携式火焰喷射器，足以给敌方步兵带来一场浩劫。' +
                '新一代喷火坦克更加强势，其战斗力能够将数百名敌军步兵化为灰烬，在一瞬间就能够扫清驻军建筑物中的敌方部队。',
                '请妥善恰当地运用这些喷火兵器，把GDI的步兵变成战场上百无一用的炮灰。',
            ],
            original: [
                'Flamethrowers are powerful anti-infantry weapons. ' +
                'They have a staggering psychological effect that sometimes goes beyond their superlative combat effectiveness. ',
                'Now that our labs have created a form of concentrated fuel that permits extended combat operations, a new generation of flame weapons has been deployed with infantry and on vehicles. ' +
                'Black Hand heavy infantry units carry portable flamethrowers that can wreak havoc on enemy infantry. ' +
                'The next generation Flame Tank is even more powerful, capable of incinerating enemy infantry by the hundreds and clearing enemy garrisoned buildings in a matter of seconds. ',
                'Use these flame weapons well and render GDI infantry useless on the battlefield.',
            ],
            tr_source: '【摘自 《战火洗礼》】',
            tr_remark: '和平源自力量。',
            or_source: 'From "Rites of War"',
            or_remark: 'Peace Through Power.',
            pic_src: require('../../assets/nod_pictures/BlackHand.jpg'),
        },
    },
    {
        path: 'base_defenses',
        component: Intelligence,
        props: {
            title: '基地防御工事 Base Defenses',
            translation: [
                '“......兄弟会正在为他们的战地行动部署新一代的基地防御工事。' +
                '为了尽最大可能增强灵活性、杀伤能力和生存能力，每一座基地防御工事都将由四个组件组成：一个核心和三座炮塔。' +
                '所有炮塔都归属核心掌控——核心装配了中央瞄准器和火控系统。' +
                '核心还配备有纳米组装器，用于维修或重建受损的炮塔。' +
                '共有三种定位各异的基地防御工事：防空的地对空导弹塔，反装甲激光塔以及反步兵的切割塔......”',
            ],
            original: [
                '"...the Brotherhood is deploying a new generation of base defenses for field operations. ' +
                'To maximize flexibility, lethality, and survivability, each base defense will consist of four components: A hub and three turrets. ' +
                'The turrets are all slaved to the hub - which acts as the central targeting and fire control system. ' +
                'The hub is also equipped with nano-assemblers to repair or rebuild damaged turrets. ' +
                'There are three different base defense types: Anti-aircraft surface to air missiles, anti-vehicle lasers, and anti-personal shredder guns..."',
            ],
            tr_source: '【摘自 《兄弟会兵器》】',
            tr_remark: '和平源自力量！',
            or_source: 'From "Weapons of the Brotherhood"',
            or_remark: 'Peace Through Power!',
            pic_src: require('../../assets/nod_pictures/Base_Defenses.png'),
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
            tr_source: '【】',
            tr_remark: '',
            or_source: '',
            or_remark: '',
        },
    },
];

export default kane_arsenal;