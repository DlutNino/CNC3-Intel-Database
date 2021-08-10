import Intelligence from "@/components/Intelligence";

const eyewitness_accounts = [
    {
        path: 'stealth_tech',
        component: Intelligence,
        props: {
            title: 'Nod兄弟会：隐形科技 Nod Stealth Technology',
            translation: [
                '《Nod新一代隐形科技成为严重威胁》',
                '* * *',
                '在第一次泰伯利亚战争中，Nod科学家开发出了一种车载隐形装置，那是一种隐形场发生器，可以产生一个能量场，使得特定物体周围的光线发生折射，从而起到肉眼和雷达均不可观测到物体的效果。' +
                'Nod首先在其声名远扬的隐形坦克上应用了这种新技术。' +
                'GDI最终开发出了相应的探测设备和反制手段，让Nod的隐形科技成为无用功，但Nod在隐形科学的研究方面持续取得进步，这场“隐形军备竞赛”自此愈演愈烈。',
                '最新的Nod隐形技术成功地让它们的许多战车和其它作战单位规避了多数GDI最新一代传感器的侦测。' +
                '实战结果表明，Nod隐形部队在对抗我军时效果非常显著。' +
                '无论是隐形科技，还是反制措施，Nod的水平都已经远在我们之上。',
                'GDI战地指挥官应深刻认识到，必须应用最新的G-Tech型探测器才能侦测到Nod隐形单位。' +
                '不幸的是，最新型号的探测器尚未得到普及。' +
                '目前仅有GDI的斗犬侦察车和基地防御工事符合最新的隐形探测技术的标准。' +
                '其它单位，比如战区重装兵，必须在得到扫描仪包的升级后才能进行探测，奥卡攻击机可以加装传感器吊舱或使用充电式脉冲扫描仪侦测附近隐藏起来的敌人。',
                '请注意，有隐形科技加持的作战单位无论静止时还是移动时都可以维持隐形场，但一旦其发动攻击，隐形场就将消失，显露原形。' +
                '此外，有报道称，Nod已经建造了一座隐形塔，它可以在相当大的范围内产生隐形场，让许多作战单位甚至是建筑居于其中。' +
                '可以想象的是，Nod能让一整座基地在一瞬间无影无踪。',
            ],
            original: [
                'Nod\'s Next-gen Stealth Technology Poses a Serious Threat',
                '* * *',
                'In the First Tiberium War, Nod scientists developed a cloaking device that could be mounted on a vehicle, a stealth generator that created an energy field that could literally bend light around a particular object, rendering it invisible to the eye and radar. ' +
                'Nod first deployed this new technology on the infamous Stealth tank. ' +
                'GDI eventually developed new sensors and countermeasures that neutralized Nod\'s stealth technology, but Nod continued to evolve the science of stealth and the "stealth arms race" has continued unabated ever since.',
                'Nod\'s new stealth technology is allowing a number of their vehicles and units to successfully evade detection by most current-gen GDI sensors. ' +
                'As a result, Nod stealth units are proving brutally effective against our forces in the field. ' +
                'Nod has clearly leapfrogged GDI in stealth technology and countermeasures.',
                'GDI field commanders should be aware that the latest G-Tech sensors are required for detection of Nod stealth units. ' +
                'Unfortunately, the newest sensors are not widely deployed. ' +
                'Only GDI Pitbull scout vehicles and base defenses come standard with the latest stealth detecting technology. ' +
                'Other units like Zone Troopers must be upgraded with scanner packs, and Orca aircraft can be equipped with sensor pods or use a recharging pulse scan to detect nearby hidden enemies.',
                'Note that units equipped with stealth technology can sustain the stealth field while inactive or moving, but once any offensive action is taken, the field will break down and the unit will become visible. ' +
                'Also, there are reports that Nod has constructed a stealth disruption tower that can project a field large enough to encompass multiple units and even structures. ' +
                'It\'s conceivable that Nod forces could cloak an entire base.',
            ],
            tr_source: '【情报员：ECAP警报 “洞察对手”】',
            or_source: 'InOps ECAP Alert "Know Your Enemy"',
            pic_src: require('../../assets/gdi_pictures/StealthTank.jpg'),
        },
    },
    {
        path: 'nod_base_defense',
        component: Intelligence,
        props: {
            title: 'Nod兄弟会：基地防御工事 Nod Base Defenses',
            translation: [
                '《Nod基地防御工事》',
                '* * *',
                '战地指挥官应时刻意识到Nod部队已经开始在阵地上建立具有某些独一无二的性能的新式基地防御工事。' +
                '每座基地防御工事由四个部分组成：一个中央枢纽以及三个可以在枢纽四周规定半径范围内部署的炮塔（枢纽是防御系统的心脏，控制着所有从属于它的炮塔）。' +
                '枢纽可以修复甚至是重建从属于它的三个炮塔。' +
                '欲除此工事，必毁其枢纽。' +
                '这是确保防御工事彻底被瓦解的唯一方法。',
                '此外，指挥官应该注意到这些新式防御工事分为三种不同的形式，对应三种不同的用途：反战车，反步兵和防空。' +
                '反战车防御工事使用激光，防空炮塔发射地对空导弹，反步兵炮塔的武器是一个枪筒集群，发射大量弹药破片，如同一把巨大无比的霰弹枪。',
            ],
            original: [
                'Nod Base Defenses',
                '* * *',
                'Field commanders should be aware that Nod forces have begun deploying new base defenses with some unique properties. ' +
                'Each base defense consists of four components: A central hub and three turrets that can be deployed within a radius of the hub (the hub is the heart of the defense system and controls all of the associated turrets). ' +
                'A hub can repair and even rebuild the three turrets that are slaved to it. ' +
                'To take out one of these new base defenses, destroy the hub. ' +
                'That\'s the only way to make sure the structure is neutralized for good. ',
                'Also, commanders should note that these new defenses are being deployed in three distinct flavors: Anti-vehicle, anti-infantry, and anti-aircraft. ' +
                'Anti-vehicle defenses employ lasers, anti-aircraft turrets fire SAM missiles, and the anti-infantry turrets use an array of gun barrels that fire massive blasts of shrapnel almost like giant shotguns.',
            ],
            tr_source: '【情报员：ECAP警报 “洞察对手”】',
            or_source: 'InOps ECAP Alert "Know Your Enemy"',
            pic_src: require('../../assets/gdi_pictures/Base_Defenses.png'),
        },
    },
    {
        path: 'cologne_fall',
        component: Intelligence,
        props: {
            title: 'GDI战地侦察：科隆陷落<br/> GDI Field Recon - the Fall of Cologne',
            translation: [
                '我坦承，即使在该死的外星杂种袭击慕尼黑之后，我们依然不觉得科隆会对它们有多大的吸引力。' +
                '我们从2038年左右就开始进行模拟，科隆从未具备任何超过“次要战略价值”评级的条件。' +
                '我们认为外星人的评估标准也是如此......看来我们大错特错了。',
                '当我们探测到第一波进攻的时候，除了组织部队形成基本的防御态势以外，我们已经来不及做任何事情了。' +
                '所幸，我们用大半天的时间基本完成了平民疏散工作，但在组织防御这方面我们远远落后于形势的变化，至于战略规划更是无从谈起。' +
                '很快，一切就都土崩瓦解了，连空气都让人感觉身处地狱之中......唉......宇宙飞船以极限速度袭来，我们半数的部队甚至还没来得及开火就已经不复存在了。' +
                '剩余的人员四散脱逃，躲入所有我们认为足够坚固，至少能够暂时抵挡住火力的建筑物内寻求隐蔽。' +
                '紧接着供电被切断，被一同宣判死刑的还有我们的通讯、雷达以及任何夺回这座城市的机会。',
                '有一次，地狱般的疯狂的战斗突然平息了下来，战场上几乎是一片死寂——除了激光武器引发的奇怪的爆炸声、尖叫声和无线电发出的声音以外。' +
                '然后，忽然间，天空被一片鲜绿色点亮，寂静也变成了一阵震耳欲聋的爆炸性的嚎叫。' +
                '我心如死灰......这些畜生把所有的泰伯利亚仓库都毁掉了......整个改造工程，几年的呕心沥血，在弹指一挥间化为乌有......在德国中部的心脏地带诞生了一片巨大的泰伯利亚矿区。',
                '随后，它们的地面部队纷至沓来......高大的步行机甲和小身材的粉碎行者将我们的坦克赶尽杀绝，成片的蜂群发出刺耳尖利的鸣声，将我军步兵吞噬，化为人行道上东倒西歪而面目全非的尸体。',
                '我下令撤退，然后死死攥住我的枪，飞奔着逃走......',
            ],
            original: [
                'To be honest, even after the [expletive] hit Munich, we didn\'t think Cologne would draw much in the way of attention. ' +
                'We\'ve been running simulations since 2038 or so and Cologne has never rated anything more than \'minor strategic value.\' ' +
                'We figured that this would count for the aliens too...guess we were wrong. ',
                'By the time we detected the first wave, it was too late to form anything more than a basic defense. ' +
                'Fortunately, we\'d been evacuating civilians for the better part of the day, but we were way behind on erecting defensive structures, let alone planning any kind of strategy. ' +
                'Things fell apart fast, those infernal air... uh... spacecraft came streaking in, wiping out half of our troops before they could even fire a shot. ' +
                'The rest of us scattered, taking shelter in whatever structures we figured were solid enough to withstand fire, at least temporarily. ' +
                'Then the power went out, and with it our communications, our radar and any damn chance of us taking the city back.',
                'At one point the insane hell of combat calmed down and it was almost quiet on the battlefield - the odd burst of laser fire, a scream, some radio static. ' +
                'Then, all at once, the sky lit up bright green and the silence became a deafening explosive howl. ' +
                'My heart sank...the [expletive] had taken out the Tib silos, all of them...the entire reclamation project, years of work, undone in a few seconds...a giant [expletive] Tib field spawned right at the heart of central Germany.',
                'Then their ground units came...giant walkers and little disintegrator things taking out our tanks, clouds of razor sharp buzzing things reducing our infantry to unidentifiable piles of wet flesh on the sidewalk.',
                'I called a retreat, grabbed my gun and ran...',
            ],
            tr_source: '【摘自GDI镇卫指挥官的证词，详尽描述了外星人对科隆的侵略】',
            tr_remark: 'GDI在科隆的镇卫指挥官 埃利奥特-格鲁勃 的证词录音',
            or_source: 'Deposition of GDI Watch Commander, detailing the Alien invasion of Cologne',
            or_remark: 'Audio Transcript - Deposition of GDI Watch Commander Elliot Gruber, Cologne',
            pic_src: require('../../assets/gdi_pictures/Stormrider_Intel.png'),
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

export default eyewitness_accounts;