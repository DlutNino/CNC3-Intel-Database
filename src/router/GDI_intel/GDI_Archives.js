import Intelligence from "@/components/Intelligence";

const archives = [
    {
        path: 'base_closure',
        component: Intelligence,
        props: {
            title: 'GDI基地关闭 GDI Base Closure',
            translation: [
                '......截至2043年，GDI已关闭了其在全球60%以上的军事基地，包括部署在北卡罗来纳州、巴西和东欧等地的军力。' +
                '近期的军事基地削减是由于Nod活动的减少——在凯恩去世之后，兄弟会似乎已经处于四分五裂之中......',
            ],
            original: [
                '...as of 2043 GDI has closed over 60% of their military bases around the world, including installations in North Carolina, Brazil, and Eastern Europe.' +
                'The most recent cutbacks are due to a decrease in Nod activity - with Kane dead, the Brotherhood seems to be splintering apart...',
            ],
            tr_source: '【节选自 2043的一篇新闻报道】',
            or_source: 'Scrap of News Article from 2043',
        },
    },
    {
        path: 'tiberium',
        component: Intelligence,
        props: {
            title: '泰伯利亚 Tiberium Primer',
            translation: [
                '泰伯利亚是一种科学上的奇观，一种超群绝伦的资源，一条引爆战争的导火索，而且远不止于此。' +
                '它是我们前所未见之物，而它的形态还处于不断变化之中。',
                '我们几乎可以肯定的是，泰伯利亚是天外来物。' +
                '这种物质绝不可能是人造的，而且在半个世纪前它首次出现在地球上之前，没有任何证据表明它的存在。' +
                '早期的泰伯利亚几乎都是有机体，像植物一样从地下生根发芽，长出荚果，吸取地底的矿物质，并释放出毒气云。' +
                '随着时间的推移，泰伯利亚展现出了进化与演变的能力。',
                '到了2047年，地球上大多数泰伯利亚都以最为世人所熟知的一种常见形式存在：一种可自我复制的质子晶格，其所触及之物皆可化为同类，并在此过程中散发出剂量骇人的辐射。',
                '泰伯利亚是否正在将地球变成一颗外星生命的宜居星球？它是武器？还是某种生物？' +
                '也许在晶体栅格中蕴含着某种意识，一个量子晶体大脑的智慧正随着不断的生长而与日俱增。' +
                '关于泰伯利亚的本质和出现原因解析的理论已经是数不胜数。' +
                '然而归根结底，它的起源和意图——如果它真的有意图的话——仍是未解之谜。',
                'GDI为遏制泰伯利亚蔓延所付出的努力从未半途而废。' +
                '随着泰伯利亚的规模达到临界水平，新的、更加险恶的变异物质渐渐浮出水面，21世纪中叶的地球形势已是无比严峻。' +
                '然而，GDI在这些绿色水晶身上发现了一个能为他们所利用的漏洞。' +
                'GDI工程师推演得出了泰伯利亚的共振频率......他们在此基础上发明了能够分解泰伯利亚晶体的声波谐振器。',
                '我们在这里为学生，工程师和科学家们提供一种对这种天外来物的高层次的科学解释：',
                '最新形态的泰伯利亚是一种由外来重粒子结合形成的致密的“动态质子晶格”。' +
                '当泰伯利亚与其它物质相接触时，重粒子与目标物质的原子核发生随机碰撞，将其直接粉碎（对于较小的原子核）或逐渐击落原子核的质子和中子（对于较重的原子核）。' +
                '泰伯利亚捕获了碰撞过程产生的少量独立的质子并将其吸收到自身结构中，从而将其他物质转化为更多的泰伯利亚。' +
                '当一个重粒子——μ介子或是τ介子——与一个原子核碰撞时，会引起裂变，最终的结果是产生α, β, γ或是其它形式的电磁辐射（例如红外辐射）。' +
                '在转化过程中，与泰伯利亚所接触物质的原子核的质子数或中子数可能会发生变化（通常会减少）。',
            ],
            original: [
                'Tiberium is a scientific curiosity, a vastly powerful resource, an unprecedented environmental cataclysm, a catalyst for war, and much more.',
                'It\'s like nothing we\'ve ever seen before and it is constantly transforming itself.',
                'We are almost certain Tiberium is extraterrestrial in origin; it is not man-made and there is no evidence of the substance on Earth prior to its first appearance half a century ago.',
                'Early forms of Tiberium were almost organic, sprouting out of the ground in what seemed to be plant-like pods, leaching minerals out of the Earth and emitting clouds of toxic gas.',
                'Over time, Tiberium showed it had the ability to evolve and change.',
                'By 2047, most Tiberium on Earth has manifested in what we know as its most common form: A self-replicating proton lattice that turns any matter it touches into more of itself, giving off powerful radiation in the process. ' +
                'It can change anything it comes into contact with into more Tiberium.',
                'Is Tiberium terraforming the Earth into a planet suitable for alien life? Is it a weapon? It is a creature of some kind? ' +
                'Perhaps some kind of consciousness resides in the crystal lattices, a quantum crystalline brain that grows ever smarter as it grows and grows.',
                'There are many theories about what Tiberium actually is... and why it is here. ' +
                'Ultimately, its origin and its purpose - if it has one - are still a mystery.',
                'GDI has not given up on trying to contain the spread of Tiberium. ' +
                'With Tiberium infestation reaching critical levels and new, more sinister variants of the substance turning up, things started to look pretty grim for planet Earth in the middle of the 21st century. ' +
                'However, GDI has found a vulnerability in the green crystal that they have begun to exploit. ' +
                'GDI engineers have found the resonant frequency for Tiberium... and they have created sonic resonators that are capable of breaking up Tiberium crystals.',
                'A high level scientific explanation of the alien substance is included here for students, engineers, and scientists:',
                'The most recent form of Tiberium is a dense "dynamic proton lattice" held together by exotic heavy particles. ' +
                'When Tiberium comes into contact with other matter, the heavy particles randomly collide with the nuclei of the target matter, smashing it to pieces (in the case of smaller nuclei) or incrementally knocking off protons or neutrons (in the case of heavier nuclei). ' +
                'Tiberium captures a fraction of the protons that are ejected during this collision process and incorporates them into its own structure, thus transmuting matter into more Tiberium. ' +
                'Whenever one of the heavy particles - a muon or tauon - collides with an atomic nucleus, fission occurs, which results in the production of alpha, beta, and gamma radiation as well as other forms of electromagnetic radiation (like infra-red). ' +
                'During the transmutation process, nuclei that Tiberium has come into contact with may be changed into nuclei with different (usually fewer) numbers of protons or neutrons.',
            ],
            tr_source: '【泰伯利亚：恩赐还是诅咒？】',
            or_source: 'Tiberium: A gift or a curse?',
            pic_src: require('../../assets/gdi_pictures/Tiberium.jpg'),
        },
    },
    {
        path: 'red_yellow_blue',
        component: Intelligence,
        props: {
            title: '红区，黄区与蓝区 Red, Yellow and Blue Zones',
            translation: [
                '泰伯利亚横行肆虐，导致30%的地球陆地完全无法居住。' +
                '地表的大片区域被标明为“红区”——荒无人烟、风暴交加且受到规模巨大的泰伯利亚污染的地区。' +
                '冒险闯入、尝试穿越甚至只是接近这些废土都是危险性十足的行为。',
                '除红区以外，泰伯利亚污染在地球上另外50%左右的陆地上都造成了不同程度的环境破坏。' +
                '在生态受损且战火纷飞以致生灵涂炭的黄区，泰伯利亚矿区星罗棋布——在城市中心区，农田，遍布整个环境。' +
                '泰伯利亚引发的气候变化导致了无穷无尽的干旱、洪水和各种恶劣天气（包括摄人心魄的6级飓风、风速高达500英里/时的龙卷风和极度剧烈的雷暴）的循环。' +
                '毁灭性的离子风暴有时会脱离红区的范围袭入黄区，为边境地区的城镇带来一场浩劫。',
                '地表上仅有20%左右的陆地还处在相对安宁平和的状态。' +
                '蓝区遭受泰伯利亚侵扰的程度最小，而且相对而言远离了硝烟。' +
                '蓝区民众的生活相对舒适，他们居住在坐落于层峦叠翠的山谷中或是风光宜人的农田中的高科技未来城市内。',
            ],
            original: [
                'Tiberium infestation has rendered 30% of the planet totally uninhabitable. ' +
                'Large swaths of the Earth\'s surface have been designated as "Red Zones" - areas that are desolate, swept by storms, and contaminated by vast amounts of Tiberium. ' +
                'Venturing into, over, or even near these wastelands can be extremely dangerous.',
                'Beyond the Red Zones, Tiberium contamination has caused varying levels of environmental damage in another 50% of the Earth\'s populated areas. ' +
                'In the ecologically compromised and war torn Yellow Zones, Tiberium fields are common - growing in the middle of cities, on farmland, and throughout the environment. ' +
                'Tiberium-related climate change has caused an endless cycle of droughts, floods, and severe weather of all types including spectacular Category 6 hurricanes, tornadoes with wind speeds of 500 miles per hour, and exceedingly violent thunderstorms. ' +
                'Especially destructive Ion Storms occasionally rage out of the Red Zones to wreak havoc on cities and towns in the borderlands.',
                'Only 20% of the Earth\'s surface is in relatively pristine condition. ' +
                'Blue Zones suffer from minimal Tiberium infestation and have been relatively untouched by war. ' +
                'The populations of the Blue Zones live in relative comfort, going about their lives in high-tech futuristic cities that sit in forested valleys or nestle in pastoral farmland.',
            ],
            pic_src: require('../../assets/gdi_pictures/Tiberiumbridge.jpg'),
        },
    },
    {
        path: 'nod_brotherhood',
        component: Intelligence,
        props: {
            title: '关于Nod兄弟会 About the Brotherhood of Nod',
            translation: [
                'GDI对Nod的认知是，一个由名叫凯恩的人格魅力光芒四射的高功能反社会者领导的，痴迷于为有史以来最严重的生态灾难火上浇油的恐怖组织，狼子野心，阴险狡诈，以令人难以理解的方式自我维持着。' +
                '但兄弟会对自己的看法截然不同。' +
                'Nod成员坚信，他们是正处于向新秩序过渡的阵痛期中的世界的代理人和这场变革的驱动者，是穷苦大众和受压迫者的代表，也是GDI此前不受任何约束的权力的制衡者。',
                'Nod坐拥在全球范围内对抗GDI和发动战争所需的人员、资源和军事力量。' +
                '然而，Nod兄弟会并非一个主权国家，而是一个奇形怪状的新型混合组织，同时具有宗教运动、跨国公司和民族国家的诸多特征。' +
                '考虑到现代战争的惊人需求、高昂成本和巨大规模，Nod所具有的能与GDI正面交锋的实力是耸人听闻的。',
                'Nod每个月都能从边境地区对生活麻木绝望的民众之中招募数以千计的新成员。' +
                '在满目萧然的黄区的破败的城市、村镇和前哨站中，Nod化整为零，悄无声息地执行着他们的政治、军事和后勤行动。' +
                '他们成功地将规模庞大且错综复杂的基础设施隐蔽起来以免GDI发现，在神不知鬼不觉中进行远途转移的艺术已经被Nod军队运用得炉火纯青，即使是使用最新一代探测设备的卫星和无人机也难以寻觅到Nod的行踪。',
                'Nod的核心组织体系复杂，科技水平先进，但他们同样拥有一支由来自黄区的训练仓促、装备简陋的新兵组成的大规模游击军队。' +
                'Nod野战军是一个有趣的组合：军事素质和武器装备双双低下的民兵部队，搭配少数装备有最先进的通讯设备和武器系统的训练有素的精英士兵。',
                'Nod的军事力量从外观到功能都是新奇且具有实验性的，但他们部队的耐久性令人疑虑。' +
                'Nod工兵往往视死如归，通常会以牺牲安全性和防护能力为代价来提升他们的机动性、行进速度和操作便捷性。' +
                '他们的高端军事设备通过泰伯利亚驱动，运转速度快但又相当脆弱，致命但缺乏稳定性。' +
                'Nod将火箭、机枪、火焰喷射器、生化毒素武器、激光、核武器等攻击性武器安装在他们的战车上。' +
                '他们甚至拥有多种基于泰伯利亚开发的武器。',
            ],
            original: [
                'GDI views Nod as a dangerous, virulent, and inexplicably self-sustaining terrorist group obsessed with accelerating the worst ecological catastrophe in history, led by a charismatic and brilliant sociopath named Kane. ' +
                'The Brotherhood sees itself quite differently. ' +
                'Nod believes that it is the agent of change for a world in the throes of transition to a new order, the representative of the poor and the oppressed, and a foil to the previously unchecked power of GDI.',
                'Nod has the people, resources, organization, and raw military power necessary to stand against GDI and wage war on a global scale. ' +
                'Yet the Brotherhood of Nod isn\'t a country; it\'s a strange new hybrid organization that has the combined characteristics of a religious movement, a multinational corporation, and a nation-state. ' +
                'Given the awesome demands of modern warfare, with its terrible cost and vast scale, Nod\'s ability to go toe-to-toe with GDI is astonishing.',
                'Nod is able to recruit thousands of new members every month from the desperate populations of the borderlands. ' +
                'Their political, military, and logistical operations are decentralized and buried deep inside crumbling cities, towns, and outposts in the decaying Yellow Zones. ' +
                'A vast and sophisticated infrastructure is disguised from GDI, and Nod has perfected the art of moving military assets and forces quickly over long distances without detection, even by satellite or drone aircraft with the latest generation sensors.',
                'Nod\'s core organization is very sophisticated and high-tech but they also have a large guerilla force composed of hastily trained and minimally equipped recruits from the Yellow Zones. ' +
                'Nod\'s field forces are an interesting mix of low tech "militia" troops and smaller numbers of highly trained, elite soldiers equipped with state of the art communications gear and the most advanced weapon systems available.',
                'Nod\'s military assets are experimental and exotic in both appearance and function, but the durability of their units is suspect. ' +
                'Nod engineers are not afraid to risk human life and will often sacrifice safety and protection for increased abilities and speed. ' +
                'Their high-end military hardware runs on Tiberium and tends to be fast but vulnerable, lethal but unstable. ' +
                'Nod offensive weapons deployed on vehicles range from rockets, machine guns, and flame throwers to toxins, lasers, and nuclear weapons. ' +
                'They also have a number of Tiberium-based weapons.',
            ],
        },
    },
    {
        path: 'gdi',
        component: Intelligence,
        props: {
            title: '全球防御组织 The Global Defense Initiative',
            translation: [
                '全球防御组织最初是在联合国的保护伞下由发达国家组成的秘密军事组织。' +
                'GDI的使命是：遏制泰伯利亚蔓延，迫使其逆向扩散，抗击邪恶势力Nod兄弟会。',
                '随着时间的推移，GDI逐渐获得了完全的独立自主与各方面的最高权力，而成员国的国家身份也逐渐淡化甚至消失。' +
                '到2047年，这个过程已接近尾声：尽管在规章层面依然存在成员国的概念，但实际上GDI已经演化为一个统一的政治军事超级国家。',
                'GDI控制着地球上仅剩的尚未遭受严重的泰伯利亚侵袭的地区。' +
                '这种水晶一般的天外来物正在蚕食着地球的剩余部分，导致了一场环境层面的大灾变，使得30%的陆地完全无法居住，另外50%的陆地也不适宜人类文明的存续和发展。' +
                'GDI所完全控制的区域被称为”蓝区“，因为在那里泰伯利亚规模极小，而且相对而言远离了硝烟与烽火（相比之下”黄区“生态受损，战火纷飞，而”红区“更是泰伯利亚横行霸道的人间地狱）。',
                'GDI与Nod之间的冲突此前曾两度升级为全面的世界大战——第一次泰伯利亚战争爆发时，双方其实还都羽翼未丰，而几年之后又爆发了另一场世界范围的火线风暴。',
            ],
            original: [
                'The Global Defense Initiative began as a secret military alliance of advanced nations under the United Nations umbrella.' +
                'GDI\'s mission: To contain Tiberium, reverse its spread, and fight the sinister Brotherhood of Nod.',
                'Over time, power and sovereignty have been gradually ceded to GDI and the national identities of the participating countries have faded.' +
                'In 2047, that process has reached its final stages: while there are still technically individual Member Nations, the reality is that GDI has become a unified political and military super-state.',
                'GDI controls the only areas of the Earth that have not been significantly compromised by Tiberium infestation.' +
                'The crystalline alien substance is slowly consuming the rest of the planet, causing an environmental cataclysm that has made 30% of the Earth uninhabitable and another 50% of the Earth\'s surface exceedingly unfriendly to civilization.' +
                'GDI\'s home territories are known as "Blue Zones" since they are mostly clear of Tiberium and have been relatively untouched by war (in contrast to the ecologically ravaged and war-torn "Yellow Zones" and the Tiberium infested hellscapes designated as "Red Zones").',
                'The clash between GDI and Nod has escalated into full world wars twice before - the First Tiberium War (TWI) erupted when both powers were in their formative states and that terrible war was followed by another worldwide firestorm several years later.',
            ],
        },
    },
    {
        path: 'tiberium_contamination',
        component: Intelligence,
        props: {
            title: '泰伯利亚污染对健康的影响<br/> Health Effects of Tiberium Contamination',
            translation: [
                '如果你接触到泰伯利亚的话会发生什么呢？绝不会有什么好事。',
                '如果你直接接触泰伯利亚，绿色物质将在20秒内开始与你的皮肤融合。' +
                '你会体验到强烈的灼烧感，类似于触碰热锅或者酸液溅到皮肤上的感觉。' +
                '若未立即接受治疗，就会恶化为全面感染。' +
                '你的肌肉将开始结晶，呈现出浅绿色玻璃一般的外观，最终你的内脏器官将停止工作，因为泰伯利亚将刚性结晶流道遍布你的全身。',
                '如果你吸入了泰伯利亚晶体，它将嵌入你的肺部。' +
                '随着你的肺组织开始结晶，你将失去利用氧气的能力。' +
                '你会开始咳血，并最终死于过量失血。',
                '有时——由于某些未知的原因——泰伯利亚感染会导致细胞突变。' +
                '这些突变的方向匪夷所思，并非癌症，不会致人于死地，而是会让人体产生变异。' +
                '这种情形背后的机制尚不为人所知。',
            ],
            original: [
                'What happens if you\'re exposed to Tiberium? Nothing good.',
                'If you come into direct contact with Tiberium, the green matter will start to fuse with your skin within about 20 seconds.' +
                'You\'ll feel an intense burning sensation, similar to touching a hot pan or spilling acid on your skin.' +
                'A full blown infection will manifest if you aren\'t treated immediately.' +
                'Your flesh will begin to take on a glassy-greenish appearance as it begins to crystallize; eventually your internal organs will shut down as Tiberium extends rigid crystalline runners throughout your body.',
                'If you breathe in the crystal, then it will become embedded in your lungs.' +
                'You\'ll lose the ability to process oxygen as your lung tissue crystallizes.' +
                'Eventually you\'ll start coughing up blood and will hemorrhage to death.',
                'In some cases - and for unknown reasons - Tiberium infection will trigger cellular mutation.' +
                'It\'s not cancer in that the mutations seem strangely directed; they don\'t kill you, but your body will begin to transform.' +
                'The mechanism for this situation is not well understood.',
            ],
            pic_src: require('../../assets/gdi_pictures/Tiberium_Symbol.png'),
        },
    },
    {
        path: 'yellow_life',
        component: Intelligence,
        props: {
            title: '黄区生活 Life in a Yellow Zone',
            translation: [
                '泰伯利亚污染在各个方面直接或间接地影响着黄区。' +
                '气候变化，冰川消融，极端天气频发，泰伯利亚矿区野蛮生长，数十载的战乱甚至导致了数个黄区的社会崩溃。' +
                '遭受泰伯利亚蹂躏最严重的地区，许多城市落入军阀或犯罪组织的掌控，甚至陷入完全的无政府状态——或者沦为邪恶势力Nod兄弟会的附庸。',
                '在满目疮痍的黄区生活会令人无精打采。' +
                '你的住所可能位于一座断绝自来水供应的破败腐朽的建筑物中。' +
                '电力供应毫无稳定性，时通时断。食物短缺。医生稀少。' +
                '偶尔会有来自象征着安定与高科技的蓝区的人道主义组织工作人员提供食品援助和医疗服务。',
                '勉力维持生计只是一切的开始。' +
                '泰伯利亚污染是生活中不可回避的冷酷恶魔，每年都有数以千计的居民死于吸入烟雾、灰尘和其它浮粒中裹挟的显微晶体。' +
                '如果头顶的云层曾在红区中爆发离子风暴的区域驻足，那么泰伯利亚甚至会伴随着雨滴在天空中四处飘荡。' +
                '由于许多黄区常年干旱，当地居民往往会以恐惧、忧虑和喜悦交织的复杂心情迎接降雨。',
                '在噩梦般的黄区生活中，泰伯利亚还不是唯一的威胁。' +
                '即使泰伯利亚没有找上门来，你也很可能会成为暴力犯罪的受害者，陷入军阀之间争夺地盘的混战中，或者不幸被计入全球防御组织与Nod兄弟会的世界大战中的非军事人员伤亡数字。',
            ],
            original: [
                'Tiberium contamination affects Yellow Zones directly and indirectly.' +
                'Climate change, melting glacial ice, extreme weather, Tiberium field growth, and decades of war have caused social collapse in several Yellow Zones.' +
                'Many cities in the most afflicted areas are run by warlords and criminal organizations or have degenerated into anarchy - or they have fallen under the thrall of the sinister Brotherhood of Nod.',
                'Existence in the worst-off Yellow Zones is not pleasant at all.' +
                'Your home is likely to be in a decaying building with no running water.' +
                'Power comes on for a few hours a day at erratic times. Food is scarce. Doctors are rare.' +
                'On a few occasions, food aid or medical care will be provided by humanitarian workers visiting from the pristine and high tech Blue Zones.',
                'A subsistence living is just the start.' +
                'Tiberium contamination is a fact of life, and thousands die every year from inhaling microscopic crystals that are carried in smog, clouds of dust, and other airborne particulates.' +
                'Tiberium may even fall out of the sky suspended in rain drops if the clouds overhead have passed through a Red Zone during or after an Ion Storm.' +
                'Because of the drought conditions in many Yellow Zones, rain showers are often greeted by the local populations with an odd mix of fear, dread, and joy.',
                'In the harsh reality of a Yellow Zone, Tiberium is not the only threat.' +
                'If Tiberium doesn\'t get you, then you are likely to fall victim to a violent crime, get caught in the crossfire between warlords clashing over turf, or become a collateral damage statistic in the global war between the armies of the Global Defense Initiative and the Brotherhood of Nod.',
            ],
        },
    },
    {
        path: 'gdi_nuclear',
        component: Intelligence,
        props: {
            title: 'GDI核武器概述 GDI\'s Nuclear Weapons',
            translation: [
                'GDI依然掌握着一座分布于世界各洲关键地点的核武器库（包括位于澳大利亚荒芜的大自流盆地的一个大型核基地，北美黄区防御森严的发射井，以及其它偏远地区的设施）。',
                'GDI领导人曾在很久之前郑重承诺无论形势如何，绝不在实战中动用核武器，即使在Nod兄弟会拥有其核力量后依然信守这一诺言。' +
                'GDI的核武器数量并不充裕，但是都与运载系统（包括洲际弹道导弹）共同存储，随时保持最高战备状态，以在GDI领导层决意使用时立即准备就绪。',
                'GDI奉行的核政策所面临的最困难的考验发生在费城事件后的第三次泰伯利亚战争初期，尽管如此，鉴于Nod部队往往化整为零，而且已经深入GDI所掌控的蓝区，核武器在遏制Nod的军事浪潮这方面所能取得的成效还是令人怀疑的。',
                '一些人认为GDI关于绝不使用核武器的承诺不过是表面文章，因为在宣誓时，GDI已经部署了另一种具有大规模杀伤性和高精准度的新型武器——离子炮。',
            ],
            original: [
                'GDI still possesses a nuclear arsenal stored at key locations around the world (including a large nuke base in the desolate outback of Australia, heavily defended silos in North American Yellow Zones, and installations in other remote areas).',
                'GDI leaders long ago made a vow not to ever use nuclear weapons no matter how bad the situation got and kept that vow even as Nod acquired its own nuclear capability.' +
                'GDI\'s nukes are few in number but are stored with delivery systems (including ICBMs) and kept at top operational readiness just in case GDI leaders ever change their minds.',
                'The most difficult test of GDI nuclear policy came in the early days of TW3 right after the strike on the Philadelphia, but even then it\'s questionable how effective nukes would have been in stemming the Nod tide given that Nod\'s forces were highly decentralized and Nod troops were staging operations deep in GDI Blue Zones.',
                'Some view GDI\'s pledge not to use nukes as a cynical one given that they deployed a new precision weapon of mass destruction - the Ion Cannon - right at the time they made their vow.',
            ],
        },
    },
];

export default archives;