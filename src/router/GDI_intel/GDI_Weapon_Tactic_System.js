import Intelligence from "@/components/Intelligence";

const weapon_tactic_system = [
    {
        path: 'riflemen',
        component: Intelligence,
        props: {
            title: '步枪兵 Riflemen',
            translation: [
                '装备有GD2型步枪的GDI步枪兵，是GDI军队的中流砥柱。',
                '接受过反步兵作战技术训练的他们被部署在所有战区。',
                '步枪兵在防御建筑中时作用最为显著，当需要防守固定地点时，他们还携带了用于挖掘散兵坑的装备。',
                '在缺乏足够强力的重武器支援的情况下，无论如何步枪兵都不应直面敌方的重型装甲单位，特别是敌军还拥有喷火武器时。',
            ],
            original: [
                'Equipped with the GD2 rifle, GDI Riflemen are the mainstay of GDI military forces.',
                'They are deployed to all combat zones and trained in anti-infantry combat techniques.',
                'Riflemen are most effective when garrisoned in fortified structures, and are equipped to dig foxholes when the need arises to defend a fixed position.',
                'Riflemen should never be deployed against heavy armor,especially flame weapons, without significant heavy-weapon Support.',
            ],
            tr_source: '战地手册-基础步兵',
            tr_remark: 'GDI - 作战单位与武器',
            or_source: 'Field Manual - Basic Infantry',
            or_remark: 'GDI - Units and Weapons',
            pic_src: require('../../assets/gdi_pictures/GD2.jpg'),
        },
    },
    {
        path: 'missile_squad',
        component: Intelligence,
        props: {
            title: '导弹兵小队 Missile Squad',
            translation: [
                'GDI导弹兵小队统一装备有用于最大限度毁伤战车和飞行器的FGM-90。',
                '像吉普车或越野车这样的轻型战车是导弹兵小队的绝佳攻击目标。',
                '导弹兵小队通常与规模更大的步枪兵小队联合行动，不过当他们位于民居或APC这样能为他们阻挡反步兵火力的驻军点中时，他们的作战效果相当可观。',
            ],
            original: [
                'GDI Missile Squads are armed with the FGM-90, which is designed to inflict maximum damage to vehicles and aircraft.',
                'Light vehicles like jeeps and buggies are excellent targets for Missile Squads.',
                'Missile Squads are normally deployed in tandem with larger Rifleman squads, but can be used to great effect from garrisoned positions in civilian buildings or APCs where they are protected from anti-infantry fire.',
            ],
            tr_source: '战地手册-基础步兵',
            tr_remark: 'GDI - 作战单位与武器',
            or_source: 'Field Manual - Basic Infantry',
            or_remark: 'GDI - Units and Weapons',
        },
    },
    {
        path: 'engineer',
        component: Intelligence,
        props: {
            title: '工兵 Engineer',
            translation: [
                'GDI战地工程师能够占领敌方建筑并修理受损的建筑（包括桥梁和基地建筑）。',
                '指挥官可以派遣一名工程师潜入敌方基地建筑内从而将其占据——或者令其进入一座受损的建筑进行彻底的修复。',
                '派遣一名工程师进入桥梁自动维修门楼内，可修缮损毁的桥梁。',
                '作为一名战地工程师，一些至关重要的行为准则应被永远牢记于心：',
                '1. 绝不在敌占区内单独行动。你身着的标准配置防弹衣在大多数现代武器面前不堪一击。',
                '2. 你装备有一把标准GD45型袖珍手枪，仅将其作为你别无选择时的手段，因为它无法击穿大多数现代装甲或护甲。',
                '3. 一旦你成功进入了敌方建筑物，一定要以最快速度使中央计算机终端停止运转，并安装你的覆盖程序，从而与距离你最近的GDI指挥部取得连接。',
                '4. 当你进入一座受损建筑时，确保你能够启动损害管制程序使其迅速运行完毕。在自动损管系统发挥作用后，你将会明确该如何着手于更加繁复和规模更加庞大的维修工作。',
                '5. 永远戴好你的安全帽。',
            ],
            original: [
                'GDI combat engineers are able to capture enemy buildings and repair structures (including bridges and base buildings).',
                'Deploy an engineer into an enemy base structure in order to capture it - or send an engineer into a damaged building to fix it back up again.',
                'Damaged bridges can be repaired by deploying an engineer into the bridge auto-repair gatehouses.',
                'As a combat engineer a few cardinal rules should be kept in mind at all times:',
                '1. Never act alone in hostile territory. Your standard issue body armor is ineffective against most modern weapons.',
                '2. You are equipped with a standard GD45 sidearm. Only use it as a last resort as it will not penetrate most modern body armor.',
                '3. Once you gain access to an enemy structure be sure to disable the central computer terminal immediately and install your override program to connect the structure to the nearest command post.',
                '4. When entering a damaged structure be sure to initiate damage control programs for immediate results. Once the automation has kicked in you will be clear to commence more extensive repairs.',
                '5. Keep your hard-hat on at all times.',
            ],
            tr_source: '节选自 战地工程师教材',
            tr_remark: 'GDI - 作战单位与武器',
            or_source: 'Engineer Combat Primer Excerpt',
            or_remark: 'GDI - Units and Weapons',
            pic_src: require('../../assets/gdi_pictures/Engineer.jpg'),
        },
    },
    {
        path: 'mcv',
        component: Intelligence,
        props: {
            title: '机动基地车 M.C.V.',
            translation: [
                '作为一座前沿基地的根基与核心，机动基地车（MCV）被部署在所有主要战场。',
                'MCV能够在一切障碍相对较少的地形上行进。',
                'MCV不具备任何自卫能力。',
                '当一辆MCV抵达它的目的地时，它可以立即迅速展开成为一座建筑工厂，能够建造生产建筑，泰伯利亚精炼厂和其它前沿基地所需要的建筑物。',
                '建筑工厂可以随时被收起从而回到机动的MCV形态，但我们的建议是，仅当建筑工厂所支持的基地不再使用时才将其收起。',
            ],
            original: [
                'Mobile Construction Vehicles, or MCVs, are deployed to all major theatres to serve as the foundation for a forward operating base.',
                'The MCV is capable of rolling over any relatively clear terrain.',
                'It\'s not equipped for self-defense.',
                'When an MCV reaches its destination it can immediately unpack into a construction Yard capable of building production structures, a Tiberium Refinery, and other elements needed for a forward base.',
                'The Construction Yard can be packed up into the MCV at any time, although it is only advised when the base it supports is no longer being used.',
            ],
            tr_source: '战地工程师教材',
            tr_remark: 'GDI - 作战单位与武器',
            or_source: 'Engineer Combat Primer',
            or_remark: 'GDI - Units and Weapons',
            pic_src: require('../../assets/gdi_pictures/GDI_MCV.png'),
        },
    },
    {
        path: 'barracks',
        component: Intelligence,
        props: {
            title: '兵营 Barracks',
            translation: [
                'GDI的大本营由许多高度便携式和模块化的建筑组成。',
                '这使得在恶劣气候下和偏远地区中建造和拆除居所变得轻松快捷。',
                '在持久耐用的装甲镀层板保护下，驻扎在GDI基地的人员能够免受泰伯利亚污染和离子风暴的影响，但是如果没有兵工厂的支援，他们将无法获取先进的武器装备。',
            ],
            original: [
                'GDI base camps are created using highly portable，modular buildings.',
                'This allows for easy construction and tear-down of shelters in harsh climates and remote locations.',
                'Personnel stationed at GDI bases will find themselves protected from Tiberium contamination and ion storms due to the durable armor plating, but will not have access to advanced weaponry without the support of an Armory.',
            ],
            tr_source: '战地手册-后勤保障',
            tr_remark: 'GDI - 作战单位与武器',
            or_source: 'Field Manual - Logistics',
            or_remark: 'GDI - Units and Weapons',
            pic_src: require('../../assets/gdi_pictures/Barracks.png'),
        },
    },
    {
        path: 'apc',
        component: Intelligence,
        props: {
            title: '装甲运兵车 APC',
            translation: [
                'GDI装甲运兵车(APC)，是一种通过装甲舱室运输士兵的六轮全地形车辆。',
                '可调节尺寸的枪眼让车内士兵能够向车外目标开火。',
                '在APC中部署一队导弹兵，APC就可以发射导弹。',
                'APC具有多个出口，因此乘员可以迅速撤离，从而能够以最短的准备时间进入露天交火状态。',
            ],
            original: [
                'The GDI Armored Personnel Carrier, or APC, is a six-wheeled all-terrain vehicle that can transport infantry in an armored compartment.',
                'Dynamically sized fire slits permit the soldiers riding in the vehicle to shoot at targets outside the APC.',
                'Deploy a Missile Squad into an APC and the vehicle effectively gains the ability to fire missiles.',
                'Passengers can be evacuated quickly through multiple exits from the APC, so the vehicle can drop soldiers right into a firefight with minimum downtime for unloading.',
            ],
            tr_source: '战地手册-APC',
            tr_remark: 'GDI - 作战单位与武器',
            or_source: 'Field Manual - APC',
            or_remark: 'GDI - Units and Weapons',
            pic_src: require('../../assets/gdi_pictures/APC.png'),
        },
    },
    {
        path: 'grenadier',
        component: Intelligence,
        props: {
            title: '掷弹兵 Grenadier',
            translation: [
                '如果你想迅速清扫一座驻军建筑物，只需派出一队掷弹兵，他们就可以完成这项任务。',
                '他们投掷的火箭助推手榴弹甚至可以打击高大建筑的顶层。',
                '更令人赞叹的是，手榴弹上配备了微型AI和制导系统，能够控制飞行路线，使手榴弹直接通过窗户进入建筑。',
                '掷弹兵能够把驻守在建筑内的敌军士兵炸飞。',
            ],
            original: [
                'If you need to clear a garrisoned building fast, deploy a Grenadier squad and they\'ll get the job done.',
                'Their rocket propelled grenades can even hit the upper stories of taller structures.',
                'Even better, the grenades have minimal on-board AI and guidance and steer themselves right through windows.',
                'Grenadiers will blow the garrisoned enemy troops right out of the side of the building.',
            ],
            tr_source: '战地指南-战术行动：掷弹兵小队',
            or_source: 'TacOps Field Guide: Grenadier Squad',
            pic_src: require('../../assets/gdi_pictures/Grenadier.png'),
        },
    },
    {
        path: 'sniper',
        component: Intelligence,
        props: {
            title: '狙击小队 Sniper Team',
            translation: [
                '狙击小队能够几乎弹无虚发地击杀敌方步兵。',
                '他们运用了隐形技术，在静止时不会被肉眼观测到，也不会被普通设备探测到。',
                '狙击小队中的观察手具有非凡的指示能力，让指挥官可以在半径数英里的范围内为神像火炮机甲指定攻击目标。',
                '在战场上，神像的机组人员可以观察并锁定为他们指示目标的狙击小队四周的一切敌方单位和建筑。',
            ],
            original: [
                'Sniper Teams are able to take down enemy infantry with deadly precision.',
                'They employ stealth so they can\'t be seen or detected while motionless.',
                'Finally, the spotter in a Sniper Team allows you to designate targets for any Juggernaut artillery unit for miles around.',
                'The Juggernaut crew will be able to see and target enemy units and structures anywhere near active Sniper Teams in the environment.',
            ],
            tr_source: '战地指南-战术行动：狙击小队',
            or_source: 'TacOps Field Guide: Sniper Team',
        },
    },
    {
        path: 'command_post',
        component: Intelligence,
        props: {
            title: '指挥部 Command Post',
            translation: [
                '在所有战区，在任何天气条件下，GDI前沿基地都扮演着GDI军事行动的枢纽。' +
                '而GDI前沿基地的心脏就是指挥部。',
                '战地指挥官通过指挥部与各区域的GDI资源保持联系，在指挥部中聚合情报，从而迅速对局势变化做出应对。',
                '大功率雷达和通讯设备让军官们能够获取来自战场的即时反馈，但请特别留意，这些设备会大量消耗你的基地电网产生的电力。',
            ],
            original: [
                'GDI forward bases act as the hubs for GDI operations in all Zones and weather conditions.',
                'The heart of any GDI forward base is the Command Post.',
                'From this structure field commanders can maintain contact with regional GDI resources and centralize intelligence for rapid response.',
                'High-powered radar and communications equipment allow officers real-time feedback from units in the field, but note that this gear will draw significant power from your base grid.',
            ],
            tr_source: '战地手册-指挥所',
            or_source: 'Field Manual - Command Structure',
            pic_src: require('../../assets/gdi_pictures/Command_Post.png'),
        },
    },
    {
        path: 'airfield',
        component: Intelligence,
        props: {
            title: '机场 Airfield',
            translation: [
                '空军部队通常用于支援特定的地面力量。',
                '一座模块化的GDI机场建成后，它可以无限期地维护多达四架战机。',
                '机场能够为奥卡攻击机提供加油、维修和装弹服务，也可以通过加装先进的科技设备对垂直起降式火鹰战机进行维护。',
                '机场直接控制着每架战机的一小部分工作单元，所以失去机场的支持和联络，这些战机的导航系统可能会出现故障，同时考虑到全球性的离子风暴的干扰，战机可能会失去延程飞行的能力。',
            ],
            original: [
                'Air assets are often dedicated to support a particular ground force.',
                'The modular GDI Airfield can be established to maintain up to four combat aircraft indefinitely.',
                'The facility is capable of refueling, repairing,and rearming Orca ground attack aircraft, but can also sustain Firehawk VTOL attack jets with the addition of advanced technical equipment.',
                'Airfields each directly control a small element of aircraft, so without an Airfield these craft may suffer guidance failure and the inability to maintain extended operations considering global ion storm interference.',
            ],
            tr_source: '战地手册-前沿空军基地',
            or_source: 'Field Manual - Forward Air Bases',
            pic_src: require('../../assets/gdi_pictures/Airfield.png'),
        },
    },
    {
        path: 'orca',
        component: Intelligence,
        props: {
            title: '奥卡攻击机 Orca Attack Aircraft',
            translation: [
                '数十年以来，具有高机动性且体质轻盈的奥卡空中武器平台一直在支援着GDI的地面作战。',
                '当前与其它GDI军事力量一同部署在世界各地的奥卡Mk Ⅳ，是一种具有顶尖技术水平的全新战机。',
                '奥卡Mk Ⅳ可以从小型停机坪上垂直起降，具有高巡航速度，超长射程以及长时间悬停的能力，是一种真正的多功能武器系统。',
                '它挂载的空对地导弹可以对各种各样的目标实施打击，包括敌方战车和建筑物。',
                '奥卡Mk Ⅳ还可以装载一个传感器阵列，即使是运用最先进隐形技术的Nod单位也无处遁形。',
                '战地指挥官应特别留意奥卡攻击机不具备空战能力，当在Nod兄弟会握有空中优势的地区行动时，应派遣挂载空对空导弹的火鹰战机护卫奥卡攻击机。',
            ],
            original: [
                'The highly maneuverable and light-weight Orca aerial weapons platform has supported GDI ground campaigns for decades.',
                'The Mk Ⅳ version currently deployed with GDI forces worldwide is an all-new, state-of-the art aircraft.',
                'With VTOL capability that allows it to operate from small pads, a high cruising speed, long range, and the ability to hover for extended periods, the Mk Ⅳ Orca is a truly versatile weapon system.',
                'Its air-to-ground missiles can strike a wide variety of targets including enemy vehicles and structures.',
                'The Mk Ⅳ can also be equipped with a sensor array capable of detecting even the most advanced Nod stealth units.',
                'Field commanders should note that Orcas are not capable of engaging targets in the air and should be escorted by Firehawk attack jets carrying air-to-air missiles when operating in areas where Nod commands air superiority.',
            ],
            tr_source: '战地指南-战术行动：奥卡Mk Ⅳ',
            or_source: 'TacOps Field Guide: Mark Ⅳ Orca',
            pic_src: require('../../assets/gdi_pictures/Orca.png'),
        },
    },
    {
        path: 'commando',
        component: Intelligence,
        props: {
            title: '突击队员 Commando',
            translation: [
                'GDI军备中最致命的武器并非一辆坦克或一架战机，而是一位血肉之躯的战士。',
                'GDI的精英突击队员真正意义上诠释了“一个人就是一支军队”，GDI突击队经历了长达50年的底蕴积累和薪火相传，队员们都经历了艰苦卓绝的训练，训练项目的人身事故率高达22%，而且有多达97%的幸存者无法坚持下去而中途退出（即使被挑选接受训练的已经是各个服务部门中最优秀的佼佼者）。',
                '突击队员全副武装，身披特制的作战护甲，腿绑固态燃料驱动的喷气式跳跃机，手持一把属于高级机密的高射速轨道炮，腰挂数包足以摧毁一整栋大楼的不可思议的新型炸药。',
                'GDI的武器实验室用它们所研发的各种GDI未来武器的原型机武装这些突击队员，因此在战场上再无他人拥有突击队员的装备。',
                '最精锐的突击队员还接受了使用炸药引爆大型机甲腿部从而使其瘫痪的训练，而这也是GDI退役了许多在第二次泰伯利亚战争中作为GDI军队中流砥柱的双足机甲的原因之一（鉴于步行机甲的这个弱点似乎同样可以被Nod兄弟会的精英部队所利用）。',
            ],
            original: [
                'The deadliest weapon in the GDI arsenal isn\'t a tank or an aircraft - it\'s a human being.',
                'GDI\'s elite Commando is truly an "army of one", backed by 50 years of tradition and trained in a grueling program that has a 22% fatality rate and a 97% drop-out rate for the survivors (even after starting with the very best of the best in all branches of service).',
                'Commandos are equipped with special battle armor， solid fuel jump jets, a top secret rail gun with a high rate of fire, and det-packs that can take down an entire building with an exotic new explosive.',
                'GDI weapons labs equip Commandos with the prototypes of GDI\'s next-gen weapons, so nobody else on the battlefield has the toys these boys have.',
                'The most elite Commandos are also trained to use their det-packs on the legs of large walkers, one of the reasons that GDI retired many of the bipedal walkers that were a mainstay in the second Tiberium War (given that this new vulnerability seemed like it could be exploited by Nod elite units as well).',
            ],
            tr_source: '战地指南-战术行动：突击队员',
            or_source: 'TacOps Field Guide: Commando',
            pic_src: require('../../assets/gdi_pictures/Commando.png'),
        },
    },
    {
        path: 'predator',
        component: Intelligence,
        props: {
            title: '捕食者主战坦克 Predator Battle Tank',
            translation: [
                '65吨级的捕食者坦克主炮口径为150毫米，可以使用穿甲弹痛击任何战车或建筑。',
                '以大型装甲车的标准审视，它的速度、机动性和操纵性堪称上乘。',
                '当集群作战的捕食者坦克取得压倒性的数量优势时，它们能够迅速冲破敌军的防御阵线，将敌军步兵直接碾碎在履带之下。',
                '它们的装甲性能令人赞叹，但是在直面穿甲火箭弹和大口径火炮的攻击时，依然显得无能为力。',
            ],
            original: [
                'Equipped with a 150mm cannon, this 65 ton tank packs an armor-piercing punch against any vehicle or structure.',
                'It\'s also fast and quite maneuverable for a large armored vehicle.',
                'Devastating in numbers, Predator tanks can rip through enemy encampments quickly, as well as crush infantry under their tracks.',
                'They have excellent armor, but are vulnerable to armor-piercing rocket and cannon attacks.',
            ],
            tr_source: '2047世界兵器：GDI主战坦克 MBT-6捕食者',
            or_source: 'Weapons of the World 2047: GDI Main Battle Tank - MBT-6 Predator',
            pic_src: require('../../assets/gdi_pictures/Predator.png'),
        },
    },
    {
        path: 'base_defense',
        component: Intelligence,
        props: {
            title: 'GDI基地防御工事 GDI Base Defenses',
            translation: [
                'GDI拥有三种用于驱逐敌军的基础基地防御建筑：警戒塔、守护者重炮和防空炮。',
                '警戒塔高达30英尺，顶端安装有双联装20毫米轨道机炮。' +
                '这种反步兵防御塔使用红外光谱成像系统和新一代传感器侦测隐形单位，足以将敌军步兵撕成碎片。' +
                '它的设计精密而巧妙，可以自动对任何进入它最大射程范围的地面单位开火，可以自动区分步兵和坦克并优先解决步兵，从而最大限度地发挥其杀伤性弹药的威力，扬长避短。',
                '守护者重炮的口径为105毫米，足以穿透重型坦克的装甲。' +
                '它是一种针对战车的武器，面对步兵时效果欠佳。',
                '防空炮是一种双联装30毫米加特林机炮，对空中目标发射贫铀弹。' +
                '它拥有精准度拔群的火控系统和惊人的射速，面对任何种类的飞行器时都游刃有余。',
            ],
            original: [
                'GDI has 3 basic base defenses with which to ward off enemy attacks: The Watchtower, the Guardian Cannon, and the AA Battery.',
                'The Watchtower stands 30ft tall with twin 20mm railguns mounted atop it.',
                'Equipped with an IR spotlight and next-gen sensor to detect stealthed units, this anti-infantry defense tears enemy infantry to shreds.' +
                'Programmed to attack any ground unit that comes within its range, the Watchtower is also able to distinguish between infantry and tanks, and will prioritize the infantry over tanks so as to maximize the lethality of its anti-personnel ammunition.',
                'The Guardian Cannon is equipped with a 105mm gun capable of ripping through the heavy armor of tanks.',
                'The Guardian is an anti-vehicle weapon and is not as effective against infantry.',
                'The Anti-Air Battery has twin 30mm Gatling guns firing depleted Uranium shells at air targets.',
                'With a deadly accurate fire control system and a staggering rate of fire, the AA Battery is very effective against any form of aircraft.',
            ],
            tr_source: '节选自 技术手册(2047)',
            or_source: 'Excerpt Technical Manual 2047',
            pic_src: require('../../assets/gdi_pictures/Guardian_Cannon.png'),
        },
    },
    {
        path: 'crane',
        component: Intelligence,
        props: {
            title: '起重机 Crane',
            translation: [
                '如果一座前沿基地需要快速成型或扩展，请考虑建造一座起重机，为建筑工厂增加一条新的生产线。' +
                '纳米组装器、计算机和控制单元可以同时工作于两座基地建筑。',
            ],
            original: [
                'If a forward base needs to go up fast, consider building a Crane to open up a second production queue at the Construction Yard.',
                'The nano-assemblers, computers, and control units will be able to work on two base structures simultaneously.',
            ],
            tr_source: '战地指南-基地后勤保障',
            or_source: 'Base Logistics Field Guide',
            pic_src: require('../../assets/gdi_pictures/Crane.png'),
        },
    },
    {
        path: 'zone_troopers',
        component: Intelligence,
        props: {
            title: '战区重装兵 Zone Troopers',
            translation: [
                '战区重装兵是GDI的精锐重型步兵，具有卓越的机动性、护甲和强劲的火力，能够独力消灭敌军的步兵和轻型战车等目标。',
                '战区重装兵身披动力装甲，手持轨道炮，腿绑能帮助他们翻越障碍或横跨河流的喷气式跳跃机，是GDI各种常规步兵中肩扛重担的老大哥。',
            ],
            original: [
                'GDI Zone Troopers are elite heavy infantry with exceptional mobility, armor, and enough firepower to take out enemy targets ranging from infantry to light vehicles.',
                'Equipped with power armor, rail guns, and jump jets that can boost them over obstacles or across rivers, Zone Troopers do the heavy lifting for the GDI Infantry.',
            ],
            tr_source: '战地指南-战术行动：战区重装兵',
            or_source: 'TacOps Field Guide: Zone Troopers',
            pic_src: require('../../assets/gdi_pictures/Zone_Troopers.png'),
        },
    },
    {
        path: 'repair_drone',
        component: Intelligence,
        props: {
            title: '战争工厂：维修无人机 War Factory Repair Drones',
            translation: [
                '众所周知，战争工厂可以生产战车。但是你知道吗？战争工厂还可以维修战车。',
                '升级后的战争工厂配备有全自动维修无人机，可以在极短的时间内对遭受重创的战车执行最复杂的维修工作。',
                '怎样操作呢？只需要靠近它。' +
                '受损坦克、APC或是越野车的车组人员应将他们的战车开回或运回基地中的战争工厂，当战车进入战争工厂四周的维修范围后，无人机将自动开始执行维修作业。',
            ],
            original: [
                'Everyone knows that War Factories build vehicles.',
                'But did you know that a War Factory can also perform repairs?',
                'War Factories have been upgraded with autonomous repair drones that can perform even the most complex repairs to severely damaged vehicles in a very short period of time.',
                'How does it work? Just get close.',
                'Vehicle crews in damaged tanks, APCs, and buggies should bring their vehicles back to the base War Factory and the drones will begin repair operations when the vehicles are in proximity to the factory structure.',
            ],
            tr_source: '最新军备速递',
            or_source: 'Capability Update',
            pic_src: require('../../assets/gdi_pictures/Repair_Drone.png'),
        },
    },
    {
        path: 'surveyor',
        component: Intelligence,
        props: {
            title: '基地扩张：勘探者<br/> Base Expansion using the Surveyor',
            translation: [
                '一些前沿基地的建筑工厂可以生产勘探者扩展车（勘探者的生产按钮位于基地控制界面的“支援建筑物”选项卡的最下方），这种车辆可以展开成为一个小型前哨站。',
                '勘探者可以在任何能够建造基地建筑的地形上展开。',
                '一座扩展基地建立后，主基地的建筑工厂可以在扩展基地中建造所有建筑，包括精炼厂、战争工厂、基地防御工事等。',
                '勘探者与它展开形成的前哨站是为在战略目标（如偏远的泰伯利亚矿区）附近开疆拓土而量身定做的工具（你可以在前哨站附近建造精炼厂，从而避免收割机在有敌军活动的地区长距离往返和长时间通勤，保护收割机）。',
            ],
            original: [
                'Some forward base Construction Yards can build Surveyor vehicles (found under the Support Structure Tab of the base control interface) which have the capability to deploy into a small Outpost.',
                'Surveyors can be given the command to deploy on any terrain where base structures can be built.',
                'Once an Expansion Base is established, the Construction Yard in the main base can be used to build any structure nearby, including Refineries, War Factories, base defenses, and whatever else might be useful.',
                'The Surveyor and the Outpost it creates are superb tools for claiming territory near strategic targets like remote Tiberium fields (so refineries can be built nearby, saving harvesters from a long commute through possible enemy-controlled terrain).',
            ],
            tr_source: 'GDI战地手册-勘探者',
            or_source: 'GDI Field Manual - Surveyor',
            pic_src: require('../../assets/gdi_pictures/Surveyor.png'),
        },
    },
    {
        path: 'rig',
        component: Intelligence,
        props: {
            title: '雷格：展开成为前线作战基地<br/> Rig Deployment into a forward Battle Base',
            translation: [
                '如今，身处一些前沿基地的GDI战地指挥官可以使用世界上最独具一格的力量投射系统之一：雷格。',
                '雷格的设计用途是深入敌方领土并迅速展开成为一座全副武装的作战基地。',
                '作战基地配备了守护者重炮和一座导弹发射器，能够有效打击敌方战车和战机。',
                '一个附加的优点是，雷格加装了全自动无人机，可以在交战状态下对GDI的战车进行即时维修。',
                '雷格（作战基地）是攻城略地或守卫领土的绝佳选择，它为采取经典的“步步为营，清剿守护”策略来夺取泰伯利亚矿区或逐步占领目标地带的GDI战地指挥官提供了有力的支持。',
            ],
            original: [
                'GDI field commanders in some forward bases have access to one of the most unique power projection systems in the world: The Rig.',
                'The Rig is a vehicle that is designed to roll deep into enemy territory and quickly deploy into a heavily armed Battle Base structure.',
                'Equipped with Guardian cannons and a missile launcher, the Battle Base is capable of engaging enemy vehicles and aircraft.',
                'As an added bonus, Rigs carry a complement of auto-drones for making field repairs to GDI vehicles.',
                'The Rig/Battle Base combination is ideal for claiming and holding terrain, enabling GDI field commanders to employ a classic "clear and hold" strategy for securing Tiberium fields or gradually taking over an objective area.',
            ],
            tr_source: 'GDI战地手册-坚守阵线',
            or_source: 'GDI Field Manual - Holding The Line',
            pic_src: require('../../assets/gdi_pictures/Rig.jpg'),
        },
    },
    {
        path: 'firehawk',
        component: Intelligence,
        props: {
            title: '火鹰战机 Firehawk Attack Jets',
            translation: [
                '火鹰战机是一种行动迅速，机动性优良，可以挂载空对空导弹或空对地导弹的垂直起降式战机。',
                '当火鹰战机位于机场停机坪上时，战地指挥官可以选择其挂载导弹的种类。',
                '拥有科技中心的前沿基地可以为火鹰战机加装特制的火箭助推器，火箭助推器可以让火鹰战机冲上平流层，以近轨道速度飞行，从而无视任何敌方的防空系统。',
                '请特别留意，在助推段结束，重返地球大气层的过程中，火鹰战机在面对防空火力时会异常脆弱。',
            ],
            original: [
                'The Firehawk is a fast and highly maneuverable VTOL attack jet that can carry air-to-ground or air-to-air missiles.',
                'Field commanders can make their load-out choices while the Firehawk is on the pad at an airfield.',
                'Forward bases with a Tech Center structure can equip Firehawks with special rocket boosters that allow the aircraft to punch into the stratosphere and go near-orbital in order to hop over enemy air defenses.',
                'Note that Firehawks are vulnerable to AA fire in the actual target zone during the re-entry after the boost phase.',
            ],
            tr_source: '战地指南-战术行动：火鹰',
            or_source: 'TacOps Field Guide: Firehawk',
            pic_src: require('../../assets/gdi_pictures/Firehawk.jpg'),
        },
    },
];

export default weapon_tactic_system;