import Intelligence from "@/components/Intelligence";

const kane_arsenal = [
    {
        path: 'militants_rocket',
        component: Intelligence,
        props: {
            title: '武装分子和火箭部队 Militants and Rocket Troopers',
            translation: [
                '“......兄弟会的精英士兵——比如黑手或者影子小队——单兵素质高超，但数量相对较少。' +
                '如果说精英士兵是兄弟会的柳叶尖刀，必须审时度势，有的放矢，那么数以百万计的武装分子和火箭部队就如同一把强悍的战锤或者说是战斧。' +
                '他们的力量源自他们的绝对数量，我们持续不断地从那些生活在黄区，对生活绝望而不惜冒险参军的人口中招募兵员，每次都有数十万人入伍。' +
                '我们为他们提供必要的训练、武器和装备，让他们成为效忠于兄弟会的一把巨大的钝刀......”',
            ],
            original: [
                '"...the Brotherhood\'s elite soldiers - like the Black Hands or the Shadows - are highly capable but relatively few in number. ' +
                'If the elite soldier is the Brotherhood\'s scalpel, to be used with devastating precision, then the militants and rocket troopers in their millions are like a great war hammer or battleaxe. ' +
                'Their power comes from their sheer numbers, and we continue to recruit them by the hundreds of thousands from the desperate populations of the Yellow Zones. ' +
                'We give them enough training, weapons, and equipment to make them a vast blunt instrument of war for the Brotherhood..."',
            ],
            tr_source: '节选自 兄弟会作战行动手册',
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
            tr_source: '节选自 圣徒马西昂的著作',
            tr_remark: ' —— Nod圣徒 马西昂',
            or_source: 'Excerpt from writings of Confessor Marcion',
            or_remark: ' - Nod Confessor Marcion',
            pic_src: require('../../assets/nod_pictures/IDB_Nod.png'),
        },
    },
    {
        path: 'saboteur',
        component: Intelligence,
        props: {
            title: '破坏者 Saboteur',
            translation: [
                'Nod的战地工程师群体——被称作破坏者——囊括了一部分最为忠诚和杰出的神职人员。',
                '破坏者运用他们特殊的才能和技巧来夺取重要的敌方建筑。' +
                '破坏者还可以在某些民用建筑和桥梁上放置装有近炸引信的炸药。',
                '要想成为一名破坏者，必须经历多年的训练，训练内容在科学和厚黑学两方面兼而有之，包括破坏、渗透、盗用和劫持等。',
            ],
            original: [
                'Nod\'s elite society of combat engineers - known as the Saboteurs - includes some of the most loyal and brilliant clerics. ',
                'Saboteurs use their special talents and skills to take over key enemy structures. ' +
                'Saboteurs can also rig certain civilian structures and bridges with proximity-detonated explosive charges. ',
                'A Saboteur is made by years of training in science and in the dark arts of sabotage, infiltration, appropriation, and hijacking.',
            ],
            tr_source: '摘自 《战火洗礼》',
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
                '它也是武装分子和火箭部队学习技术的学院，是狂热信徒举行离别仪式的舞台，还是圣徒从战俘口中套取机密、维持我军纯洁性和真诚性的审讯中心。' +
                '它还可以作为破坏者和突击队员在执行秘密行动之前睡眠休整的住所。',
            ],
            original: [
                'The Hand of Nod is not just a barracks and armory for Nod infantry. ' +
                'It is also a place of learning for militants and rocket troopers, a sanctuary for Fanatics as they perform their departure rituals, and an interrogation center for Confessors as they extract secrets from enemy captives and keep the hearts of our own troops pure and true. ' +
                'Saboteurs and Commandos may also choose to bunk down in the Hand of Nod prior to launching their secret operations.',
            ],
            tr_source: '摘自 《战火洗礼》',
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
                '启动第三次泰伯利亚战争所需的准备工作必须得到高度保密。' +
                '兄弟会起初打算主要通过空运来增援作战部队，但出于隐蔽兵力和隐藏行动的双重需要，加之离子风暴的发生愈发频繁，最终被迫放弃了这一计划。',
                '兄弟会目前正在使用他们“分毫不差”的终极武器转运方式：在战区内就地生产战车。' +
                'Nod战争工厂大多设在地下，应用纳米组装机和重工业机器人来制造和维修坦克、摩托车、越野车以及其它类型的战车。' +
                '维修无人机环绕战争工厂的地表部分飞行，战车靠近战争工厂时可以得到自动维修。',
            ],
            original: [
                'Preparations for the start of the Third Tiberium War required a very high degree of secrecy. ' +
                'The need for concealment and stealth coupled with the ever-increasing number of ion storms has forced the Brotherhood to move away from airlift as the primary source of reinforcements for combat units. ',
                'The Brotherhood is now employing the ultimate in "just in time" weapons delivery: Vehicles are being built on-site within the theatre of operations. ' +
                'Nod War Factories are housed mostly underground and use nano-assemblers and heavy industrial robots to construct and repair tanks, bikes, buggies, and other vehicles. ' +
                'Repair drones orbit around the surface features of the War Factory; vehicles in proximity to the War Factory will be automatically repaired.',
            ],
            tr_source: '摘自 《战火洗礼》',
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
                'Nod影子小队是一支精锐的特种部队，其训练科目与古代的忍者有颇多相似之处，他们可以进行长途渗透，深入敌后。' +
                '影子小队应用了隐形技术，他们携带的武器射速飞快，面对敌军步兵时枪枪致命，他们还装备了可折叠的动力悬挂式滑翔机，可以让他们飞上蓝天。',
                '影子小队成员携带的最强力的武器是一种炸弹，内含新式炸药。' +
                '运用这些炸弹，一组影子小队可以一次性炸毁一座敌方建筑。' +
                '这种新式炸药的化学成分是我军通过间谍活动取得的，来自于一座从事下一代化学炸药研发工作的GDI实验室。',
                '以下内容节选自我军截获的GDI情报速递：',
                '“......GDI部队正深陷于他们在战场上遭遇过的最可怕的噩梦之中：一队又一队隐身的、飞行的、可以摧毁整座建筑物的高科技忍者。' +
                '我们建议负责防御的指挥官加大应对隐形部队的力度，将常规巡逻的频率提高到原来的两倍......”',
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
            tr_source: '摘自 《精英步兵行动指南》的概要部分',
            or_source: 'From Summary Section of "Elite Infantry Operations Guide"',
            pic_src: require('../../assets/nod_pictures/IDB_Nod.png'),
        },
    },
    {
        path: 'venom',
        component: Intelligence,
        props: {
            title: '毒液巡逻空艇 Venom Patrol Craft',
            translation: [
                '“......目前，兄弟会已经将毒液投入服役，拥有垂直起降式侦察机的将不再只有GDI一家。' +
                '毒液在面对GDI的奥卡攻击机时甚至占据上风，因为它的武器既可以对地，也可以对空。' +
                '一架毒液可以袭扰地面目标，也可以击落敌方的奥卡攻击机......”',
            ],
            original: [
                '"...now that the Brotherhood has deployed the Venom, GDI no longer has a monopoly on VTOL scout aircraft. ' +
                'The Venom is one up on the GDI Orca, however, since it can strike both air and ground targets. ' +
                'A Venom can engage ground targets but can also blow Orcas right out of the sky..."',
            ],
            tr_source: '摘自 《兄弟会兵器》',
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
                '名为黑手的重型步兵部队手持便携式火焰喷射器，可以给敌方步兵带来一场浩劫。' +
                '新一代喷火坦克更加强势，其战斗力足以将数百名敌军步兵化为灰烬，在一瞬间就能够扫清驻军建筑物中的敌方部队。',
                '请妥善恰当地运用这些喷火兵器，让GDI的步兵变成百无一用的炮灰。',
            ],
            original: [
                'Flamethrowers are powerful anti-infantry weapons. ' +
                'They have a staggering psychological effect that sometimes goes beyond their superlative combat effectiveness. ',
                'Now that our labs have created a form of concentrated fuel that permits extended combat operations, a new generation of flame weapons has been deployed with infantry and on vehicles. ' +
                'Black Hand heavy infantry units carry portable flamethrowers that can wreak havoc on enemy infantry. ' +
                'The next generation Flame Tank is even more powerful, capable of incinerating enemy infantry by the hundreds and clearing enemy garrisoned buildings in a matter of seconds. ',
                'Use these flame weapons well and render GDI infantry useless on the battlefield.',
            ],
            tr_source: '摘自 《战火洗礼》',
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
                '“......为了执行战地行动，兄弟会正在部署新一代的基地防御工事。' +
                '为了尽最大可能增强灵活性、杀伤能力和生存能力，每一座基地防御工事都将由四个组件组成：一个枢纽和三座炮塔。' +
                '所有炮塔都归属枢纽掌控——枢纽安装了中央瞄准器和火控系统。' +
                '枢纽还配备有纳米组装器，用于维修或重建受损的炮塔。' +
                '共有三种定位各不相同的基地防御工事：负责防空的地对空导弹塔，反装甲激光塔以及反步兵的切割塔......”',
            ],
            original: [
                '"...the Brotherhood is deploying a new generation of base defenses for field operations. ' +
                'To maximize flexibility, lethality, and survivability, each base defense will consist of four components: A hub and three turrets. ' +
                'The turrets are all slaved to the hub - which acts as the central targeting and fire control system. ' +
                'The hub is also equipped with nano-assemblers to repair or rebuild damaged turrets. ' +
                'There are three different base defense types: Anti-aircraft surface to air missiles, anti-vehicle lasers, and anti-personal shredder guns..."',
            ],
            tr_source: '摘自 《兄弟会兵器》',
            tr_remark: '和平源自力量！',
            or_source: 'From "Weapons of the Brotherhood"',
            or_remark: 'Peace Through Power!',
            pic_src: require('../../assets/nod_pictures/Base_Defenses.png'),
        },
    },
    {
        path: 'disruption_tower',
        component: Intelligence,
        props: {
            title: '隐形塔 Disruption Tower',
            translation: [
                'GDI在外太空的主导地位给我们制造了许多难题。' +
                '他们利用天基武器和探测器平台对抗我军，令我们深感困扰。',
                '我们的主要反制手段是我们的隐形科技，近来，我们开始在重要目标周围建立隐形塔。' +
                '隐形塔在其周围区域制造了一个广阔的隐形场，处于隐形场中的战车和建筑在活动时不会被侦测到。' +
                '隐形塔本身是肉眼可见的，因此必须采取适当的安全措施，防止其遭受袭击。',
                '我们在偏远地区建造了一些不具备实际功能的隐形塔，借此干扰敌军的情报收集工作。',
            ],
            original: [
                'GDI\'s dominance of space has complicated our lives. ' +
                'Their ability to leverage their space-based weapon and sensor platforms against us is a serious concern. ',
                'Our primary countermeasure is our stealth technology, and recently we have begun deploying Disruption Towers around valuable assets. ' +
                'The Disruption Tower creates a large stealth bubble over an area, allowing our vehicles and structures to operate undetected. ' +
                'The tower itself is still visible, so be sure to utilize proper security measures to prevent direct assault. ',
                'Dummy Disruption Towers have been erected in remote locations to foil human-intelligence gathering efforts.',
            ],
            tr_source: '摘自 《战火洗礼》',
            or_source: 'From "Rites of War"',
            pic_src: require('../../assets/nod_pictures/Disruption_Tower.png'),
        },
    },
    {
        path: 'vertigo_bomber',
        component: Intelligence,
        props: {
            title: '眩晕轰炸机 Vertigo Bomber',
            translation: [
                '“......这种蝙蝠翼型隐形轰炸机采用了最新的视觉和雷达隐形技术。' +
                '然而，当飞机投下威力巨大的炸弹时，必须脱离隐形场，此时的眩晕轰炸机将无比脆弱，不过只要轰炸机的空对地武器解除攻击状态，隐形场会迅速重新生成......”',
            ],
            original: [
                '"...this batwing stealth bomber employs the very latest in optical and radar stealth technology. ' +
                'However, the aircraft will experience a moment of vulnerability when it must \'de-cloak\' to drop its massively powerful bomb, but as soon as the air-to-ground weapon is away, the stealth field can be reengaged quickly..."',
            ],
            tr_source: '摘自 《兄弟会兵器》',
            or_source: 'From "Weapons of the Brotherhood"',
            pic_src: require('../../assets/nod_pictures/Vertigo.jpg'),
        },
    },
    {
        path: 'stealth_tank',
        component: Intelligence,
        props: {
            title: '隐形坦克 Stealth Tank',
            translation: [
                '“......新式隐形坦克速度迅捷，机动灵活，威力致命。' +
                '这种多功能武器系统装备有打击战车和建筑物时均效果卓越的导弹发射器，在指挥官处于进攻态势，对敌人形成压制，并且能充分发挥隐形技术的优势时，它的表现最为出色。' +
                '以灵活、机巧的方式使用隐形坦克可以提升其存活率和作战效率——在向毫无戒备的目标发射导弹之前，车组人员必须计算得出坦克与目标间的准确距离，以及在开火后脱离现场所需的时间。' +
                '在坦克安全离开目标区域，隐形场重新生成之后，导弹发射器就可以进行重新装填，为坦克的下一次袭击做准备......”',
            ],
            original: [
                '"...the new Stealth Tank is fast, maneuverable, and deadly. ' +
                'Equipped with missile launchers that are effective against both vehicles and structures, this versatile weapon system is most useful when commanders are aggressive, taking the fight to the enemy and making maximum use of the stealth generators. ' +
                'A deft touch will enhance the survivability and effectiveness of the Stealth Tank - tank crews should know exactly how close to get before unleashing missiles at an unsuspecting target and how quickly they must leave the scene after firing. ' +
                'Once the stealth bubble has reformed and the tank is safely away from the target zone, the missile launchers can be re-armed and the tank made ready for another strike..."',
            ],
            tr_source: '摘自 《兄弟会兵器》',
            or_source: 'From "Weapons of the Brotherhood"',
            pic_src: require('../../assets/nod_pictures/StealthTank2047.jpg'),
        },
    },
    {
        path: 'obelisk_of_light',
        component: Intelligence,
        props: {
            title: '光明石碑 Obelisk of Light',
            translation: [
                '......光明石碑是Nod的标志性建筑，目前，Nod部队正在沿各前线阵地修建新一代款式的光明石碑。' +
                '在加装了额外的串行通道电容器之后，光明石碑的功能似乎也得到了进一步提升。' +
                '尽管新一代设计的建筑结构与其前作并没有明显差异，但激光武器的核心得到了强化，虽然输出功率有所下降，但输出的持续时间有所延长。',
                '一个重要发现是，光明石碑现在可以被设置为扫射模式，用于打击像步兵和民用车辆这样不具备装甲的目标。' +
                '在这种模式下，激光以相对较低的功率进行弧状扫射，产生切割运动，每次开火都可以一次性击中成群的步兵。',
                '在电容器改进后，Nod的远程火炮平台光束炮可以对光明石碑进行过载充能。' +
                '当一台或多台光束炮将它们的激光武器聚焦在碑底的接收器上时，石碑会将接收到的能量直接传入其镜像阵列，其射程随之得到增加。',
                '镜像阵列的瞄准能力有待提升，这也表明战机依然是战场上的光明石碑的最大克星......',
            ],
            original: [
                '...Nod forces are deploying a new generation of their iconic Obelisk of Light along front-line positions. ' +
                'It appears that the Obelisk\'s functionality has been improved with additional serial-channel capacitors. ' +
                'Although the basic architecture of the design does not deviate greatly from earlier generations, the core of the laser weapon has been enhanced for increased firing duration when the power output is reduced. ',
                'Evidently the tower can now be set to sustained-fire mode when used against unarmored targets such as infantry and civilian vehicles. ' +
                'This allows the laser to fire at limited power in an arc, resulting in a cutting motion that can strike several infantry per emission.',
                'The advanced capacitor also allows over-charging of the tower by Nod\'s long-range artillery platform, the Beam Cannon. ' +
                'When one or more Beam Cannons focus their laser weapons at a receptor on the base of the tower it can fire over increased range by directly feeding the added energy into its mirror array. ',
                'The limited targeting ability of the mirror array still suggests aircraft as the optimal answer for any Obelisks encountered on the field...',
            ],
            tr_source: '<<截获GDI通讯>>',
            tr_remark: '通讯源：GDI情报部门侦察队',
            or_source: '<< Intercepted GDI Transmission >>',
            or_remark: 'Source: GDI InOps Recon Team ',
            pic_src: require('../../assets/nod_pictures/Obelisk_of_Light.png'),
        },
    },
    {
        path: 'avatar',
        component: Intelligence,
        props: {
            title: '圣灵 Avatar',
            translation: [
                '您所驾驶的是Nod兵工厂中外形最震慑人心、能力最出类拔萃的武器系统之一，这是您的福分。' +
                '您指挥着一架高达10米的双足战斗步行机甲，一台全地形的战争机器，它的外观令人胆寒，他在战场上的出现给GDI的部队带来了无限的恐惧。',
                '圣灵机甲所配备的基础激光武器在打击战车和建筑时效果斐然，经过升级后，圣灵机甲还可以释放出更强大的战斗力。',
                'Nod工程师为圣灵开发了一个独一无二的功能：它可以将其它Nod战车的关键系统拆解下来，安装到自己身上。' +
                '您可以拆下隐形坦克的隐形发生器，突击摩托的隐形探测器，喷火坦克的反步兵火焰喷射器，或是光束炮的主炮，然后立即将这些武器为自己所用。' +
                '一架圣灵可以为自己加装所有的四种辅助系统。',
                '尽管在系统迁移的过程中，圣灵会摧毁被拆解的战车并杀死其车组人员，但死者心中一清二楚，他们是为了兄弟会而捐躯的，因此他们死而无憾。',
            ],
            original: [
                'You have the privilege of piloting one of the most fearsome and capable weapon systems in the arsenal of the Brotherhood. ' +
                'You command a bipedal combat walker that stands ten meters tall, an all-terrain war machine so intimidating that its very presence on the battlefield strikes fear into the hearts of GDI troops.',
                'The base laser weapon on the Avatar is very effective against vehicles and structures, but the Avatar can be upgraded with significantly more combat power. ',
                'Nod engineers have built a unique capability into the Avatar: It can adapt key systems from other Nod vehicles for its own use. ' +
                'You can remove the stealth generator from a Stealth Tank, the stealth detector from an Attack Bike, the anti-infantry flame-thrower from a Flame Tank, or the beam cannon from an artillery vehicle and use them immediately. ' +
                'An Avatar can equip itself with all four secondary systems. ',
                'Although the Avatar destroys the donor vehicle and kills the crew in the process of recovering the new system, rest easy in the knowledge that the dead have given their lives for the Brotherhood.',
            ],
            tr_source: '节选自 致圣灵机组人员的简报',
            or_source: 'Excerpt from Avatar Crew Briefing',
            pic_src: require('../../assets/nod_pictures/AvatarWarmech.jpg'),
        },
    },
    {
        path: 'beam_cannon',
        component: Intelligence,
        props: {
            title: '光束炮 Beam Cannon',
            translation: [
                '“......单打独斗时的光束炮已经是一种能力不俗的远程武器，而当它们成群结队时，其战斗力更加惊人。' +
                '光束炮群可以将它们发射的光束汇合，从而显著地提升光束的威力。' +
                '光束炮还可以为光明石碑上的电容器充能。' +
                '光束炮最大的优越性在于，它采用了多用途的六轮底盘，在诸多火炮系统中，它的速度、灵活性和射程都达到了前所未有的高度......”',
            ],
            original: [
                '"...the Beam Cannon is a fearsome long range weapon in its own right, but its combinatorial power is staggering. ' +
                'Multiple Beam Cannons can combine their beams to dramatically increase their combat power. ' +
                'A Beam Cannon can also drive the capacitors of an Obelisk of Light. ' +
                'Best of all, the Beam Cannon is mounted on a versatile six-wheeled chassis with speed, agility, and range that is unprecedented for an artillery system..."',
            ],
            tr_source: '节选自 《兄弟会兵器》',
            or_source: 'Excerpt From "Weapons of the Brotherhood"',
            pic_src: require('../../assets/nod_pictures/Beamartillery.jpg'),
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

export default kane_arsenal;