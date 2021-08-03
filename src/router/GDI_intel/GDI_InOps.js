import Intelligence from "@/components/Intelligence";

const inops = [
    {
        path: 'garrisoning',
        component: Intelligence,
        props: {
            title: '驻军 Garrisoning',
            translation: [
                '在城市中作战是一项棘手且危险的任务。' +
                '在城市环境下作战时，战地指挥官应尽一切可能减少部队伤亡。',
                '派遣步兵进驻民用建筑物是一种一举多得的战术，既可显著增强前线的防御力量，又能一定程度上保障士兵的人身安全。' +
                '建筑物可以为步兵提供隐蔽和火力点，步兵射击建筑外的敌军时不会直接暴露于敌方火力之中。' +
                '驻军后的建筑物可以保护士兵免受装载于战车上的重型杀伤性武器的攻击。',
                '尽管如此，战地指挥官仍然要当心那些专门用于清扫建筑内驻军的敌方单位，特别是装备有手榴弹和火焰喷射器的单位。',
                '谨记：在露天战场中陷入敌军的交叉火力网了吗？请命令你的士兵进驻一座建筑。',
            ],
            original: [
                'Urban combat is a messy and dangerous business.',
                'When fighting in a city environment, field commanders should use every advantage to minimize casualties.',
                'Garrisoning civilian structures with infantry is a tactic that generates multiple rewards, including massive defensive bonuses and increased safety for the troops.',
                'Buildings can provide cover and a fire base for infantry as they shoot at targets outside without being directly exposed to enemy fire.',
                'Garrisoned buildings protect soldiers from heavy anti-personnel weapons mounted on vehicles.',
                'That being said, field commanders should be wary of enemy units that specialize in clearing garrisoned buildings, particularly those equipped with grenades and flamethrowers.',
                'Remember: Caught in the cross-fire while you\'re out in the open? Order your troops into a building.',
            ],
            tr_source: '【派遣步兵驻守建筑物】',
            or_source: 'Garrisoning Structures with Infantry',
        },
    },
    {
        path: 'transport',
        component: Intelligence,
        props: {
            title: '呼叫运输机 Calling for Transport',
            translation: [
                '在前沿基地拥有一座机场之后，一些GDI步兵和战车就可以几乎随时随地呼叫运输机。' +
                '作战单位可以在战场上通过无线电联络运输机，一架垂直起降式V-35 “公牛”运输机将飞往该作战单位所在地点，运用它的推力矢量发动机降落并接载该作战单位。',
                '作战单位把目的地告知公牛的机组人员后，运输机会将其运送到位并降落在目标地点。',
                '请特别留意公牛运输机和它运载的单位在空中飞行时极度脆弱————无论遭遇哪种类型的防空单位，公牛都会成为任人宰杀的活靶子。',
            ],
            original: [
                'Once a forward base has an Airfield, many GDI infantry and vehicles gain the ability to call for transport at almost anytime.',
                'The unit can radio for transport from the field and a V-35 Ox VTOL air lifter will fly to the unit\'s location, drop down on its thrust vectored engines, and pick up the unit.',
                'Once a destination is communicated to the Ox crew, the aircraft will ferry the airlifted unit to its destination and set it down on target.',
                'Keep in mind that units are extremely vulnerable while in the air - an Ox is a juicy target for an enemy unit that has any form of anti-air capability.',
            ],
            tr_source: '【空运步兵与战车】',
            or_source: 'Airlift for Infantry and Vehicles',
            pic_src: require('../../assets/gdi_pictures/Ox_tran_concept.jpg'),
        },
    },
    {
        path: 'crates',
        component: Intelligence,
        props: {
            title: '后勤物资箱：充满机遇的目标<br/> Logistics Crates: Targets of Opportunity',
            translation: [
                'GDI和Nod都把出色的机动性和迅速的部署视为制胜之道。' +
                '部队似乎总是会来回进行转移以保持兵力分配的平衡，而且经常要急行军。' +
                '鉴于许多命令和行动是在仓促匆忙中被执行的，大量的辎重被抛在队伍后面是司空见惯的事情。',
                '现如今，装满备用军需品，核心数据以及其它军械和补给品的后勤物资箱在我们的蓝区和黄区已是随处可见。',
                'GDI和Nod都采用模块化的G-771G型集装箱，这种集装箱的设计标准已被商业航运界沿用数十年。',
                '无论身居何地，你都能发现这些集装箱————而且对我们身处野外的士兵而言，它们是充满机遇的目标。' +
                '只要打开一个集装箱，他们就很有可能获得一些能派上用场的物品。',
                'G-771G型集装箱极易被发现：只需寻找装饰有斜条纹的灰色几何体箱子即可。' +
                '它们在视野中非常引人注目，而且任何人都可以毫不费力地打开。',
                '预祝满载而归。',
            ],
            original: [
                'Both GDI and Nod rely on mobility and rapid deployment for success.',
                'Armies seem to come and go all the time as the balance of power shifts, often very quickly.',
                'Given the haste with which these operations are conducted, it\'s not a surprise that a lot of equipment is being left behind.',
                'Our Blue Zones and Yellow Zones are becoming littered with logistics crates filled with military spares, data cores, and other equipment and supplies.',
                'Both sides use the modular G-771G container, a standard crate used by the commercial shipping industry for decades.',
                'You\'ll find these containers everywhere - and they should be considered targets of opportunity for our boys in the field.',
                'If your troops crack one of these containers open, odds are they\'ll find something useful.',
                'G-771G containers are easy to spot: just look for geometric gray crates trimmed with diagonal stripes.',
                'They stick out like a sore thumb and anyone can pop them open with a bit of elbow grease.',
                '\n',
                'Good Hunting.',
            ],
            tr_source: '【后勤军士长布洛克-利特福德的备忘录】',
            or_source: 'Memo from Supply Sergeant Brock Littleford',
            pic_src: require('../../assets/gdi_pictures/Crate.png'),
        },
    },
    {
        path: 'liquid_tiberium',
        component: Intelligence,
        props: {
            title: '液态泰伯利亚科研 Liquid Tiberium Research',
            translation: [
                '近日，一支位于北非的GDI突击队突袭了一处原本被认为是化学武器工厂的Nod研究设施，却意外地发现这是一个先进的Nod泰伯利亚武器科研项目。' +
                '随后，科学部门对设施残骸的评估证实了，几项大规模的泰伯利亚武器化研究工作正在进行中。' +
                '我军情报员关注的焦点是，关于Nod在创造可产生空前破坏力的液态泰伯利亚设备这方面取得重大进展的证据。',
                '液体形态是泰伯利亚的一种相对较新的存在形式，其性质鲜为我们所知。' +
                'Nod兄弟会对液态泰伯利亚的科研工作大概比我们的科学部门提前了5~10年。',
                '也有迹象表明，Nod正在研发一种更常规的机载泰伯利亚炸药，和一种通过亚临界反应引爆泰伯利亚晶体矿床的催化剂。',
                '结合过去的Nod科研工作相关情报（大多是零星和重复的）进行综合分析表明，北非的Nod实验室只不过是几个参与泰伯利亚武器化工作的研究设施之一。',
            ],
            original: [
                'An advanced Nod Tiberium weapon research program was recently uncovered when a GDI strike team in North Africa stormed a Nod facility originally thought to be a chemical weapons factory.',
                'Science Division evaluation of the wreckage subsequently confirmed several large scale Tiberium weaponization efforts underway.',
                'Of most concern to InOps is evidence of significant progress towards the creation of a Liquid Tiberium device of unprecedented destructive power.',
                'The liquid form of Tiberium is a relatively new manifestation of the alien substance and its properties are not well known.',
                'Nod\'s Liquid Tiberium research appears to be 5 to 10 years ahead of Science Division.',
                'There were also indications that Nod is working on a more conventional airborne Tiberium explosive and a catalyst for detonating existing Tiberium crystal deposits in a sub-critical reaction.',
                'Analysis of past Nod R&D efforts (which tend to be redundant and decentralized in nature) suggests the Nod lab in North Africa was only one of several facilities participating in the Tiberium weaponization efforts.',
            ],
            tr_source: '【Nod兄弟会将新形态泰伯利亚武器化】',
            or_source: 'Nod Weaponizing New Form of Tiberium',
            pic_src: require('../../assets/gdi_pictures/Tiberium_Liquid.png'),
        },
    },
    {
        path: 'nod_aircraft',
        component: Intelligence,
        props: {
            title: 'Nod兄弟会：空军 Nod Aircraft',
            translation: [
                '自第二次泰伯利亚战争以来，Nod兄弟会的空军有了长足的发展，飞行器设计水准持续进步。',
                'Nod正在部署垂直起降式的“毒液”侦察机，蝙蝠翼型“眩晕”隐形轰炸机，能运送兵员和军械的大型运输机，以及“末日审判”高空远程轰炸机。',
                '毒液仅配备了轻型武器和装甲，但是可以对地面和空中各种各样的目标发动攻击————它们甚至可以在空战中压制我军的奥卡攻击机。',
                '眩晕轰炸机可以避开大多数GDI探测设备的侦测，只有在向目标战车和建筑倾泻大威力炸弹时才会显形。',
                'Nod运输机对应我军的V-35 “公牛”运输机，是一种能够接载和运输各种各样的兵员和军械的垂直起降式飞行器。',
                '“末日审判”轰炸机在战场上难得一见，一旦现身对我们来说就意味着大事不妙。' +
                '“末日审判”被用于运送集束地雷和一些堪称是奇思妙想的空对地武器。',
            ],
            original: [
                'Nod aircraft have evolved considerably since TW2.',
                'Nod is fielding the VTOL Venom scout (pictured below), the batwing Vertigo stealth bomber, a Carryall that can transport troops and equipment, and a high altitude, long range bomber called the Armageddon.',
                'Venoms are lightly armed and armored but can take on a wide variety of targets on the ground and in the air - they are even capable of engaging our Orcas in air-to-air combat.',
                'The Vertigo evades detection by most GDI sensors and only "de-cloaks" to drop its powerful bombs on target structures and vehicles.',
                'The Nod Carryall is the counterpart to our V-35 Ox, a VTOL aircraft that can pick up and transport a wide variety of troops and equipment.',
                'Finally, the Armageddon is seen infrequently but when it appears on the battlefield, it is usually bringing bad news.',
                'Nod Armageddon aircraft are used to deliver cluster mines and a number of exotic air-to-ground weapons.',
            ],
            tr_source: '【战地指南-情报员：第三次泰伯利亚战争中的Nod空军】',
            or_source: 'InOps Field Guide to Nod Aircraft in TW3 Theatres of War',
            pic_src: require('../../assets/gdi_pictures/Venom.jpg'),
        },
    },
    {
        path: 'flame_tank',
        component: Intelligence,
        props: {
            title: 'Nod兄弟会：新式喷火坦克 New Nod Flame Tank',
            translation: [
                '喷火坦克是Nod兄弟会的经典反步兵武器系统，目前最新型号的喷火坦克已经投入服役。' +
                '新式喷火坦克的装甲更加厚重，炮塔瞄准性能有所提升，并且使用了双重火焰喷射器，可以在不重新装填燃料的情况下保持更长时间的输出。' +
                '它取代了第二次泰伯利亚战争中Nod使用的老式”恶魔之舌“坦克。',
                '对于所有种类的步兵来说，喷火坦克都象征着死亡与毁灭，而且它能够以恐怖的效率清扫建筑物中的驻军。',
                '情报员建议战地指挥官使用配备反装甲火炮或火箭发射器的装甲车或战机驱逐和消灭喷火坦克。' +
                '装甲车的封闭式乘员舱还可以在火焰喷射器制造的熊熊大火中保护车内人员。',
            ],
            original: [
                'Nod has fielded a new version of their classic anti-infantry weapon system known as the Flame Tank.',
                'The new model carries heavier armor, has a turret to allow for easier targeting, and uses dual flame throwers that can stay in action for long periods of time without refueling.',
                'It replaces the older "Devil\'s Tongue" last used in TW2.',
                'Flame Tanks are devastating against all forms of infantry and can clear out garrisoned buildings with terrifying efficiency.',
                'InOps advises field commanders to engage Flame Tanks with armored vehicles or aircraft firing cannons or rockets.',
                'The enclosed crew compartments in armored vehicles will also protect against the inferno generated by the flame throwers.',
            ],
            tr_source: '【Nod新型恐怖兵器服役】',
            or_source: 'Nod Deploys New Tool of Terror',
            pic_src: require('../../assets/gdi_pictures/New_Flame_Tank.jpg'),
        },
    },
    {
        path: 'commandeering_tiberium_spikes',
        component: Intelligence,
        props: {
            title: '征用泰伯利亚采炼柱<br/> Commandeering Tiberium Spikes',
            translation: [
                '高耸的泰伯利亚采炼柱在一些蓝区和黄区地带星罗棋布，点缀着那里的风景。' +
                '这些自动开采平台缓缓地对地下泰伯利亚矿床进行提取，并且就地进行精炼，因此采炼柱中的资源可以立即投入使用。',
                'GDI高层鼓励指挥官征用战地的泰伯利亚采炼柱，为他们的前沿作战基地的正常运转提供经济支持。' +
                '工作于泰伯利亚采炼柱中的战地工程师可以将资源输送到基地的生产建筑物中。',
                'GDI高层鼓励指挥官以GDI特殊票券的形式向被征用的采炼柱的合法所有者提供补偿，这些票券可以在雷克雅未克兑换为现金存入银行账户。',
                '请特别留意，采炼柱的提取速率取决于地下泰伯利亚矿床的规模和地理条件，因此各地采炼柱在同等时长内的收益有所不同。',
            ],
            original: [
                'The landscape of many Blue and Yellow Zones is dotted with tall cylindrical structures known as Tiberium Spikes.',
                'These automated extraction platforms slowly pull Tiberium out of subterranean deposits and refine it on location so that resources are available for immediate use.',
                'GDI commanders are encouraged to commandeer Tiberium Spikes in the field to help sustain their forward operating bases.',
                'A combat engineer deployed into a Tiberium Spike can channel resources to the production structures of a base.',
                'Commanders are encouraged to provide compensation to the legitimate owners of commandeered Tiberium Spikes in the form of GDI vouchers that can be redeemed in Reykjavik for credits.',
                'Note that spikes extract at different rates depending on the size and nature of the underlying Tiberium deposits, so the flow of resources may vary from location to location.',
            ],
            tr_source: '【泰伯利亚采炼柱】',
            or_source: 'Tiberium Spikes',
            pic_src: require('../../assets/gdi_pictures/Tiberium_Spike.png'),
        },
    },
    {
        path: 'emp_centre',
        component: Intelligence,
        props: {
            title: 'EMP控制中心 EMP Control Centre',
            translation: [
                '战地指挥官要时刻对EMP控制中心的四座圆柱发射塔保持警惕。',
                '这些外表诡怪的建筑是过去几十年中我军为遏制Nod兄弟会的攻势而在一些蓝区和黄区建立的。' +
                '当时的机制是，在意味着敌军来袭的民防警报响起时，志愿兵要以最快的速度进入EMP控制中心并执行操作————控制中心会迅速发射电磁脉冲令Nod的进攻部队陷入瘫痪。',
                '此后的很多年里，Nod兄弟会几乎销声匿迹，于是这些中心也多半废弃停用，现如今它们成为了GDI和Nod双方先到先得的中立建筑。' +
                '派遣一名战地工程师进入并占据EMP控制中心即可使用它来对抗敌军。'
            ],
            original: [
                'Field commanders should stay on the look-out for the four cylindrical towers of the EMP Control Center.',
                'These odd structures were erected during the last few decades in a number of Yellow Zones and Blue Zones as a deterrent to Nod attack.',
                'The theory was that a volunteer crew would race to the EMP Control Center when the civil defense sirens sounded warning of an attack - they would fire off the EMP and disable attacking forces.',
                'After years with little Nod activity, the centers were mostly abandoned and are now being used opportunistically by GDI and Nod forces.',
                'Deploy a combat engineer into the EMP Control Center to capture it and use it against enemy forces.',
            ],
            tr_source: '【电磁脉冲控制中心】',
            or_source: 'Electromagnetic Pulse Control Centre',
            pic_src: require('../../assets/gdi_pictures/Empcontrol.jpg'),
        },
    },
    {
        path: 'cairo_nuclear',
        component: Intelligence,
        props: {
            title: '开罗的核弹发射井 Cairo Nuclear Launch Facility',
            translation: [
                '《费城事件的罪魁祸首：Nod兄弟会在开罗的核弹发射井》',
                '* * *',
                '我军情报员证实，摧毁费城空间站的导弹来源于一座与开罗的Nod核弹发射设施相连通的地下发射井。',
                '在费城事件发生之前，我军的卫星监视系统很难侦测到这一设施，因为该设施的大部分结构深埋于地下或被精心掩蔽。' +
                '第三次泰伯利亚战争拉开帷幕后，Nod拆除了发射设施周围的隐蔽系统，并将设施的其它部分转移到地上，以便于执行发射操作。',
                '制造费城事件的地下发射井目前处于休眠状态，而Nod现阶段的发射操作转移到了发射周期比前者短得多的中央升降台。',
            ],
            original: [
                'Strike on Philadelphia originated at Nod\'s Cairo Nuclear Launch Facility',
                '* * *',
                'InOps has confirmed that the missile used to destroy the Philadelphia was launched from an underground silo connected to Nod\'s Nuclear Launch Facility in Cairo.',
                'Detection of this facility by sat-surveillance prior to the Philadelphia incident was difficult because most of the structures were buried underground or disguised.',
                'Since the start of TW3, Nod has removed the masking structures around their buildings and brought other elements of the facility above ground to facilitate launch operations.',
                'The underground silo that launched the Philadelphia strike is now inactive, with Nod\'s launch operations transferred to a central raised platform with a much lower cycle time between missile launches.',
            ],
            tr_source: '【情报员速递】',
            or_source: 'InOps FLASH Report',
            pic_src: require('../../assets/gdi_pictures/Cairo_Launch_Facility.png'),
        },
    },
    {
        path: 'nod_nuclear',
        component: Intelligence,
        props: {
            title: 'Nod兄弟会：核武器库 Nod\'s Nuclear Arsenal',
            translation: [
                '开罗的核设施进一步强化了Nod兄弟会的核力量。' +
                '曾经Nod仅仅拥有一支机动核部队，而现如今他们已经手握一座规模庞大的中央核武器库。',
                '关于Nod兄弟会实行核武器集中制的原因众说纷纭，包括多疑症（凯恩担心他手下的指挥官叛变并对他的追随者使用核武器），为某些无人知晓的紧急行动作准备，提高核武器系统的运作效率等，但其真实目的我们始终不得而知。',
                '不管怎样，有一点我们无比明确：摧毁开罗的核设施，让Nod兄弟会的核作战实力化为乌有。',
            ],
            original: [
                'Nod has consolidated its nuclear arsenal at its Cairo nuke facility.',
                'What was once a mobile nuclear force is now a massive central arsenal.',
                'The reason for the centralization of Nod\'s nukes is not known, although speculation ranges from paranoia (Kane afraid that his commanders might rebel and use nukes on Kane loyalists) to preparation for some unknown operational contingency or a gain in efficiency of operations.',
                'Whatever the reason, we do know one thing for sure: Take out the Cairo facility and we deprive Nod of its nuclear capability.',
            ],
            tr_source: '【情报员速递】',
            or_source: 'InOps FLASH Report',
            pic_src: require('../../assets/gdi_pictures/Nod_Nuclear_Missile.png'),
        },
    },
    {
        path: 'power_management',
        component: Intelligence,
        props: {
            title: '电力管理 Power Management',
            translation: [
                '《应急工程报告》',
                '作者：S.鲍文 准尉',
                '地点：克罗地亚，GDI前沿作战基地 "Echo-2"',
                '* * *',
                'S.鲍文：',
                '发电厂宕机了，我们的基地电网也受到了损坏————我们没有足够的电力来维持所有设备同时运转。',
                '让你的防御工事保持供电的唯一途径是暂时关停当前不需要工作的建筑。' +
                '如果你下令关闭了一半的基地防御工事，我们就能够集中足够的电力让另一半保持正常运转。' +
                '如果一座正在运行的防御工事被摧毁，它将不再消耗电力，这样你就可以开启另一座防御工事接管前者的工作。' +
                '你可能还要下令关闭那些暂时闲置的防御工事，将供应它们的电力分配给那些形势已经迫在眉睫的枪塔和炮塔。',
                '在战火中调控电力的艺术是在这里生存下来的关键。',
            ],
            original: [
                'Emergency Engineering Report',
                'Warrant Officer S.Bowen',
                'GDI Forward Operation Base "Echo-2" Croatia',
                '* * *',
                'SBowenWrenchMonkey: ',
                'Power Plants are down and our base grid is compromised - there just isn\'t enough juice to keep everything running at the same time.',
                'The only way you\'re going to keep those defenses online is to power down anything you\'re not using.',
                'If you shut down half of the base defenses we should be able to squeeze out enough power to keep the other half online.',
                'If one of the active defenses gets destroyed it won\'t draw power, so you can turn on another defense to take over.',
                'You may also need to shut down defenses that aren\'t active to re-route power to guns and turrets that are under immediate threat.',
                'Juggling power under fire is the key to survival here.',
            ],
            tr_source: '【您收到一条短讯】',
            or_source: '<<Incoming Text Message>>',
            pic_src: require('../../assets/gdi_pictures/GDI_Power_Plant.png'),
        },
    },
    {
        path: 'ion_disruption',
        component: Intelligence,
        props: {
            title: 'Nod兄弟会：离子炮干扰技术<br/> Nod Ion Cannon Disruption Tech',
            translation: [
                '自戈达德航天中心遭受袭击以来，GDI的轨道离子炮作战平台始终处于离线状态。' +
                '所幸目前修缮工作已圆满完成，离子炮重新恢复运行。',
                '然而，目前我们无法对某些目标实施离子炮打击，因为Nod兄弟会部署了一种新的反制手段：离子炮干扰器阵列。' +
                '它们被Nod摆放在许多要地。',
                '所有的战地指挥官都应该时刻意识到离子炮干扰技术的存在，并且密切关注干扰器阵列。' +
                '在召唤离子炮打击之前，必须先使用常规武器清除这些干扰器。',
            ],
            original: [
                'GDI\'s orbital Ion Cannon battle stations have been offline ever since the attack on Goddard Space Center.',
                'Repairs have now been completed and the Ion Cannons are back in action.',
                'However, we are currently unable to strike certain targets due to Nod\'s deployment of a new countermeasure: Ion Cannon Disruptor Arrays.',
                'These structures have been erected in multiple locations.',
                'All field commanders should be aware of the existence of Ion Cannon disruption technology and be on the lookout for the disrupter array structures.',
                'Take out the disrupters with conventional weapons before you call in an Ion Cannon strike.',
            ],
            tr_source: '【Nod离子炮干扰技术投入使用】',
            or_source: 'Nod deploying Ion Cannon Disruption technology',
            pic_src: require('../../assets/gdi_pictures/Third_ion_cannon.jpg'),
        },
    },
    {
        path: 'sonic_n_invader',
        component: Intelligence,
        props: {
            title: '声波武器与外星侵略者<br/> Sonic Weapons and the Invaders',
            translation: [
                '《声波武器对抗入侵者的奇效》',
                '撰稿人：第21装甲师 军医 伊琳娜-施瓦茨贝格博士',
                '* * *',
                '饱受入侵者蹂躏的慕尼黑仅剩断壁残垣，满目灰烬与碎石，尸骸枕藉，生机难觅，不忍赘述。' +
                '尽管如此，当我和我的团队秘密穿过城市郊区的废墟搜寻幸存者时，我们偶然取得一些或许可以成为希望火种的发现。',
                '当我们在夜色保护下穿越这片废土时，我们意外地遇到了GDI第76机械化步兵师一个排的余部，很显然，他们隶属于我军后卫部队，他们成功的行动让一些在某种程度上能够决定战争前景的重要人物得以逃生。' +
                '在与他们交谈的过程中，我们很快对一件事情有了清晰的认识：行动的胜利很大程度上要归功于对一种出人意料的武器的运用——声波。',
                '--------------------',
                '以下文字引自我记录在记事本上的一段通讯内容：',
                '“我们马不停蹄地开火，但那些如同金属怪物一般的家伙无穷无尽地向我们发起冲锋，在它们同伴的尸体上匍匐前进，对那些尸体视若无睹。' +
                '终于，那些狗娘养的东西还是把我们逼退到墙边，就在我觉得我们已经在劫难逃的时候，一个脑子像鬼一样好使的工兵灵光一现，他成功地把慕尼黑老旧的声波塔防御网络重新激活了，只听砰的一声巨响，那些该死的发射塔开始像狂暴的器官兽一样把那些混蛋侵略者撕成碎片。' +
                '那个画面可真是美不胜收......”',
                '阿诺德.P.柯丁顿上士，第76机械化步兵师“查理连”第3排',
                '--------------------',
                '是的，我们原本用于清扫地表泰伯利亚和控制蓝区泰伯利亚生长速度的声波塔似乎能够给我们新的敌人一记重拳。' +
                '现在我们需要进一步调查来解答一些疑惑——外星人的生命结构是否与泰伯利亚晶体相似？难道这正是它们造访地球的原因？' +
                '不过至少我们已经可以放心大胆地使用声波痛击这些外星人，把他们打得落花流水。',
                '不管怎么说，前途依然光明。',
            ],
            original: [
                'Effects of sonic weapons on the Invaders',
                'Dispatch from Dr.Elian Schwartzberg, Battlefield Medic, 21st Armored Division',
                '* * *',
                'Needless to say, there is very little in the way of hope to be found in the ash covered, body strewn rubble of post-invasion Munich.',
                'Even so, as my team covertly made its way through the outskirts of that ruined city, searching for survivors, we stumbled across something that might just be that source of hope.',
                'Crossing the wastelands under guard of night, we encountered the surviving members of a GDI combat platoon from the 76th Mechanized, apparently flush from a successful rearguard action that enabled the escape of some VIPs that are somehow key to the war effort.',
                'In conversation it quickly became apparent that much of said success was due to the intervention from a particularly unexpected source - sonics.',
                'To quote, from a transcript recorded on my CommInt unit: ',
                '"We kept firin\', but the metallic [expletive] just kept on coming right at us, crawling over their own dead like it weren\'t nothing.' +
                'Then, right when I knew we was about to be killed, right when those [expletive] had us up against the wall, one of those smart [expletive] engineers figured out a way to get the old Munich Sonic Emitter grid back online and then, BAM!, the damn emitter towers just started chewing up those invading [expletive] like a Visceroid gone rabid.' +
                'It was a thing of [expletive] beauty..."',
                'Staff Sergeant Arnold P. Coddington, 3rd Platoon, Charlie Company, 76th Mechanized Infantry Division',
                'Yes, it appears that the Sonic Emitters we use to reclaim our land from Tiberium - and to control and regulate Tiberium growth throughout the reclaimed Blue Zones - are capable of inflicting great harm upon our newfound enemies.',
                'Further investigation is required before we can determine the why - are the aliens structurally similar to the crystal? Is that why they are here?' +
                'For now we can certainly make use of the what - Sonics hurt the aliens. Hurt them bad.',
                'We may stand a chance after all.',
            ],
            tr_source: '【情报员速递】',
            or_source: 'InOps FLASH Report',
            pic_src: require('../../assets/gdi_pictures/Shock_Trooper.png'),
        },
    },
    {
        path: 'alien_n_tacitus',
        component: Intelligence,
        props: {
            title: '外星人：起源及其与塔西佗的联系<br/> Alien Origins, Connections to the Tacitus',
            translation: [
                '研究与发展部门',
                '收件人：全体战地指挥官',
                '外星人起源 - 与塔西佗的联系',
                '* * *',
                '自外星人展开入侵的那一刻起，GDI科研团队就开始竭尽全力去收集所有由外星人发送的数据和有关外星人的实物证据。' +
                '对外星人所传输数据的分析表明，我们从凯恩手中夺回的塔西佗与外星人之间存在着某种联系。',
                '侵略部队所传输的数据与塔西佗中的数据结构似乎有着类似的组成方式。' +
                '这一点让我们推断，入侵者正是思金人，或者是其中的某个派系。' +
                '然而经过详尽的对比，显而易见的是，侵略部队与塔西佗中记录的生命源在语言习惯和外形等方面存在巨大的鸿沟。' +
                '也许它们之间有着某种遥远的联系，抑或是它们的文化之间存在一些古老的交流？',
                '我们使用目前最先进的译码计算机破解的一条讯息表明，外星人正在谈论它们曾经遭遇的另外一个外星种族。' +
                '我们无法翻译其它外星种族使用的词汇，但我们的编码计算机返回了一些零星的词语，比如“兄弟”、“升天”、“敌人”、“思金人”等等。' +
                '这使得我们对这些入侵者本质的认知产生了一些障碍，因为它们与目前我们所知的思金人有着许多共同点。' +
                '它们似乎不太可能属于那个把塔西佗带到地球的外星种族，但它们之间存在的联系却又是毋庸置疑的。',
                '如若证据确凿，那么塔西佗就将成为我们最具价值的军事资产。' +
                '我们必须设法解开它的秘密。',
            ],
            original: [
                'R&D Division',
                'Attn: Battle Commanders',
                'Alien Origins - Connections to the Tacitus',
                '* * *',
                'GDI science teams have been gathering every possible bit of transmitted data and physical evidence about the aliens since the moment of invasion.',
                'Data analysis of alien transmissions has indicated some connection between the Tacitus recovered from Kane and the invaders.',
                'The transmissions recorded from the invasion force seem to be patterned in a similar way to the data structure in the Tacitus.',
                'This leads us to believe that the invaders are the Scrin, or perhaps some faction thereof.',
                'It is clear upon closer examination that this invasion force demonstrates acute differences from the source of the Tacitus in dialect and physical form.',
                'Perhaps they shared some distant connection, or there was some ancient contact between their cultures? ',
                'One transmission we decoded using our most advanced decryption computers indicated alien chatter regarding another alien race they had previously encountered.',
                'We were unable to translate the word for the other alien race, but the encryption computer returned the terms brother, ascended, enemy and Scrin.',
                'This casts some confusion on the nature of the invaders, as they share a multitude of attributes with what we have come to know as the Scrin.',
                'It seems unlikely that this is the very same alien race that brought the Tacitus to Earth, but the connection is undeniable. ',
                'If this is true, we should consider the Tacitus our most valuable military asset.',
                'We must somehow find a way to unlock its secrets. ',
            ],
            tr_source: '【对入侵者起源的初步调查结果】',
            tr_remark: 'GDI情报员速递 - 来自 外星生命研究所主任 A.巴斯博士',
            or_source: 'Results of initial investigation into the origins of the invaders',
            or_remark: 'GDI InOPS FLASH Report - DR.A.Bass, PHD, Director of Extraterrestrial Research',
            pic_src: require('../../assets/gdi_pictures/Soldier_vs_Scrin.png'),
        },
    },
];

export default inops;