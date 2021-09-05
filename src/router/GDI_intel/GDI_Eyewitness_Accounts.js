import Intelligence from "@/components/Intelligence";

const eyewitness_accounts = [
    {
        path: 'stealth_tech',
        component: Intelligence,
        props: {
            title: 'Nod兄弟会：隐形科技 Nod Stealth Technology',
            translation: [
                '在第一次泰伯利亚战争中，Nod科学家开发出了一种车载隐形装置，那是一种隐形场发生器，可以产生一个能量场，在能量场周围的光线会发生折射，这样，肉眼和雷达都无法观测到能量场中的物体。' +
                'Nod首先在其声名远扬的隐形坦克上应用了这种新技术。' +
                'GDI最终开发出了相应的探测设备和反制手段，让Nod的隐形科技成为无用功，但Nod在隐形科学方面的研究持续取得进步，这场“隐形军备竞赛”自此愈演愈烈。',
                '最新的Nod隐形科技让他们的许多战车和其它作战单位成功地规避了多数GDI的最新款传感器的侦测。' +
                '实战结果表明，Nod隐形部队在对抗我军时效果非常显著。' +
                '无论是隐形科技，还是反制措施，Nod的水平都已经远在我们之上。',
                'GDI战地指挥官应深刻认识到，必须应用最新的G-Tech型探测器才能侦测到Nod隐形单位。' +
                '不幸的是，最新款的探测器尚未得到普及。' +
                '目前仅有GDI的斗犬侦察车和基地防御工事达到了最新的隐形探测技术标准所要求的水平。' +
                '其它单位，比如战区重装兵，必须在得到扫描仪包的升级后才能进行探测，奥卡攻击机则可以加装传感器吊舱或使用充能脉冲扫描仪侦测附近隐藏起来的敌人。',
                '请注意，有隐形科技加持的作战单位无论静止时还是移动时都可以维持隐形场，不过一旦其发动攻击，隐形场就将消失，它们将显露原形。' +
                '此外，有报道称，Nod已经建造了一座隐形塔，它可以在非常广阔的范围内产生隐形场，保护大量作战单位甚至是建筑。' +
                '可以想象的是，Nod现在具备了让一整座基地在一瞬间变得无影无踪的能力。',
            ],
            original: [
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
            tr_source: '情报员：ECAP警报 “洞察对手”<br/><br/>《Nod的新一代隐形科技形成了严重威胁》',
            or_source: 'InOps ECAP Alert "Know Your Enemy"<br/><br/>Nod\'s Next-gen Stealth Technology Poses a Serious Threat',
            pic_src: require('../../assets/gdi_pictures/StealthTank.jpg'),
        },
    },
    {
        path: 'nod_base_defense',
        component: Intelligence,
        props: {
            title: 'Nod兄弟会：基地防御工事 Nod Base Defenses',
            translation: [
                '战地指挥官应该清醒地认识到，Nod部队已经开始在阵地上建立具有某些独一无二的性能的新式基地防御工事。',
                '每座基地防御工事由四个部分组成：一个中央枢纽，以及三个可以在枢纽四周一定半径范围内部署的炮塔（枢纽是防御系统的心脏，控制着所有从属于它的炮塔）。' +
                '枢纽可以修复甚至是重建从属于它的三个炮塔。' +
                '欲除此工事，必毁其枢纽。' +
                '这是确保防御工事被彻底摧毁的唯一方法。',
                '此外，指挥官还应注意到，这些新式防御工事分为三种不同的形式，对应着三种不同的用途：反战车，反步兵和防空。' +
                '反战车防御工事使用激光，防空炮塔发射地对空导弹，反步兵炮塔的武器是一个枪筒集群，发射大量弹药破片，如同一把巨大无比的霰弹枪。',
            ],
            original: [
                'Field commanders should be aware that Nod forces have begun deploying new base defenses with some unique properties. ',
                'Each base defense consists of four components: A central hub and three turrets that can be deployed within a radius of the hub (the hub is the heart of the defense system and controls all of the associated turrets). ' +
                'A hub can repair and even rebuild the three turrets that are slaved to it. ' +
                'To take out one of these new base defenses, destroy the hub. ' +
                'That\'s the only way to make sure the structure is neutralized for good. ',
                'Also, commanders should note that these new defenses are being deployed in three distinct flavors: Anti-vehicle, anti-infantry, and anti-aircraft. ' +
                'Anti-vehicle defenses employ lasers, anti-aircraft turrets fire SAM missiles, and the anti-infantry turrets use an array of gun barrels that fire massive blasts of shrapnel almost like giant shotguns.',
            ],
            tr_source: '情报员：ECAP警报 “洞察对手”<br/><br/>《Nod基地防御工事》',
            or_source: 'InOps ECAP Alert "Know Your Enemy"<br/><br/>Nod Base Defenses',
            pic_src: require('../../assets/gdi_pictures/Base_Defenses.png'),
        },
    },
    {
        path: 'cologne_fall',
        component: Intelligence,
        props: {
            title: 'GDI战地侦察：科隆陷落<br/> GDI Field Recon - the Fall of Cologne',
            translation: [
                '我承认，即使在该死的外星杂种袭击慕尼黑之后，我们依然不觉得科隆会对它们有多大的吸引力。' +
                '我们从2038年左右就开始进行模拟，历次模拟结果表明，科隆从来没有任何东西的评级能超过“次要战略价值”。' +
                '我们认为外星人的评估标准也是如此......看来我们大错特错了。',
                '当我们探测到第一波进攻的时候，除了组织部队形成基本的防御态势以外，我们已经来不及做任何事情了。' +
                '所幸，我们用了大半天的时间，基本上完成了平民疏散工作，但在组织防御这方面，我们远远落后于形势的变化，至于战略规划更是无从谈起。' +
                '很快，一切就都土崩瓦解了，连空气都让人感觉身处地狱之中......唉......宇宙飞船以我们认知中的极限速度袭来，我们半数的部队甚至还没来得及开火就已经不复存在了。' +
                '剩余的人员四散脱逃，躲入所有我们认为足够坚固，至少能够暂时抵挡住火力的建筑物内寻求隐蔽。' +
                '紧接着供电被切断，被一同宣判死刑的还有我们的通讯、雷达以及任何夺回这座城市的机会。',
                '有一阵子，如同地狱般的疯狂的战斗突然平息了下来，战场上几乎是一片死寂——除了激光武器引发的诡异的爆炸声、尖叫声和无线电发出的声音以外。' +
                '然后，忽然间，天空被一片鲜绿色点亮，寂静也变成了一阵震耳欲聋的怒嚎，是爆炸的声音。' +
                '我心如死灰......这些畜生把所有的泰伯利亚仓库都毁掉了......整个改造工程，几年的辛苦付出，在短短几秒内化为乌有......在德国的中部心脏地带诞生了一片巨大的泰伯利亚矿区。',
                '随后，它们的地面部队纷至沓来......高大的步行机甲和小身材的粉碎行者将我们的坦克赶尽杀绝，成片的蜂群发出刺耳尖利的鸣声，吞噬着我军的步兵，把他们化为人行道上东倒西歪、面目全非的尸骨。',
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
            tr_source: '摘自GDI镇卫指挥官的证词，详尽描述了外星人对科隆的侵略',
            tr_remark: 'GDI在科隆的镇卫指挥官 埃利奥特-格鲁勃 的证词录音',
            or_source: 'Deposition of GDI Watch Commander, detailing the Alien invasion of Cologne',
            or_remark: 'Audio Transcript - Deposition of GDI Watch Commander Elliot Gruber, Cologne',
            pic_src: require('../../assets/gdi_pictures/Stormrider_Intel.png'),
        },
    },
    {
        path: 'berne_fall',
        component: Intelligence,
        props: {
            title: 'GDI战地侦察：伯尔尼陷落<br/> GDI Field Recon - the Fall of Berne',
            translation: [
                '“我正准备下班时，疏散令下达了。' +
                '所有频道上都充斥着电喇叭、警报器和广播的声音。' +
                '甚至那些该死的大幅广告牌和路标都在告诉我们，赶快离开这座城镇。' +
                '我试图打电话给我妻子，但是所有的网络都被阻断了......被阻断或者说是静止了。' +
                '我们住在城中心的工人家属住宅区。' +
                '我当时负责监督东边的一段泰伯利亚防护墙的最后一部分修建工作。' +
                '离我的住处足有半个城市远。',
                '行驶了不到十分钟，我就不得不弃车，然后开始跑步。' +
                '第一次警报响起后，车辆出口在十分钟以内就挤作一团了，整座城市都因此陷入了全面的拥堵。' +
                '几秒钟后，我疾速冲过一座全息视觉播报亭，那座播报亭仍在播送讯息，而我从那些讯息中能看到的只有毁灭。' +
                '死亡。烈焰......',
                '（目击证人把头埋进双手，用几乎听不到的微弱声音喃喃自语了48秒）',
                '......我飞奔着，开始听到低沉的嗡嗡声。' +
                '起初我以为这只是公共广播系统的静电干扰，因为广播系统的声音在几分钟前就消失了。' +
                '但并非如此，那种声音要强烈得多。' +
                '像是一部运转的机器，但不知为何，我觉得那是活物发出的声音。' +
                '声音越来越响，仿佛在随着我的冲刺而逐渐提高分贝，天空忽然暗了下来，城墙开始坍塌，而当初建造那些城墙时我是出过力的......天空中出现了数不胜数的不明物体......',
                '（目击证人把头埋进双手，用几乎听不到的微弱声音喃喃自语了32秒）',
                '......它们是蓝色的，体表具有光泽，散发出暗淡的光芒。是具有生命的机器。' +
                '我不知疲倦地狂奔着。我的肺部仿佛有烈火在燃烧，肋骨像被钢针扎到那样刺痛，但好在我离城区越来越近了。' +
                '天空中又出现了一个不明物体，就像此前那些一样，但是它遮天蔽日，声音震耳欲聋，是一个硕大无朋的圆环，围绕着中央的某种像是控制舱的物体旋转着。' +
                '我离它距离太近，无法完全理解它的工作原理。' +
                '他几乎把我，把伯尔尼的整个市中心都统统覆盖住，然后开始闪耀光芒，看起来是在吸收某种能量。',
                '我低下头飞速奔跑。',
                '在一瞬间，万物归于沉寂，似乎这个庞然大物把所有的声音都从空气中吸走了。' +
                '之后就是光，无处不在，刺眼夺目的强光。' +
                '我不由自主地跌倒，下意识地挡住了我的双眼。',
                '我只能感受到光亮，光亮，以及死寂。',
                '当我到达目的地时，那里......伯尔尼市中心已不复存在，工人家属住宅区也无影无踪。' +
                '一切都完了。剩下的只是一个从地上挖出的深坑，这个深坑所在的地方曾经是一座城市。' +
                '在深坑的中间，有一些蓝色的不明物......蓝色的，在不停地闪烁着......”',
            ],
            original: [
                '\'I was about to go off the clock when the evacuate order came through. ' +
                'Klaxons, sirens, broadcasts on every channel. ' +
                'Even the damn billboards and street signs were telling us to get out of town. ' +
                'I called my wife, or tried, but every network was jammed...jammed or just static. ' +
                'We lived in the central district, worker family housing. ' +
                'I had been supervising the final touches on my chunk of the anti-Tib wall, out on the east side. ' +
                'Half a city away.',
                'Within ten minutes, I had abandoned my car and started to run. ' +
                'The vehicle exit points had jammed up less than ten minutes after the first alert, plunging the city into gridlock. ' +
                'Seconds later, I was sprinting past Holovision kiosks, and the ones that were still broadcasting, all I could see was destruction. ' +
                'Death. Fire...',
                '(the subject places head in hands, mutters inaudibly for 48 seconds)',
                '...so I\'m running and I start to hear this low hum. ' +
                'At first I think it\'s just the static from the public address system, gone dead a few minutes earlier. ' +
                'It isn\'t, it\'s something more. ' +
                'Like a machine, but alive, also, somehow. ' +
                'It starts to grow, the sound larger and larger as I sprint, and the sky is now dark, and the city walls are falling, the city walls I helped build...and there are things, things in the sky...',
                '(the subject places head in hands, mutters inaudibly for 32 seconds)',
                '...glowing, blue and glossy. Machines, but alive. ' +
                'I keep running. My lungs burn, my sides ache, but I\'m getting close to the city. ' +
                'There\'s a thing in the sky, like the others, but huge, noise deafening, a massive ring, rotating around a central object, some kind of control pod. ' +
                'I am too close to take it all in, to know how it works. ' +
                'It\'s nearly over me, over central Berne, and now it\'s glowing, drawing up some kind of energy.',
                'I lower my head and run.',
                'For a second, everything is silent, as if the gigantic thing had sucked the sound right out of the air. ' +
                'Then light, everywhere, all consuming. ' +
                'I fall, shielding my eyes.',
                'Light, light and silence.',
                'When I come to, there...there is no central Berne, no worker family housing. ' +
                'All gone. Just a pit, gouged from the earth, a pit where a city used to be. ' +
                'At the center, there is something blue...blue and glittering...\'',
            ],
            tr_source: '摘自平民目击者的证词，详尽描述了外星人对伯尔尼的侵略',
            tr_remark: '来自伯尔尼的民用工程队领班 马丁-霍夫索默 在催眠回溯技术作用下的证词录音（译文）',
            or_source: 'Deposition of Civilian Witness, detailing the Alien invasion of Berne',
            or_remark: 'Audio Transcript (Translated) - Deposition of civilian engineering corps foreman Martin Hoffesommer, Berne, under hypnotic regression',
            pic_src: require('../../assets/gdi_pictures/Fall_of_Berne.png'),
        },
    },
];

export default eyewitness_accounts;