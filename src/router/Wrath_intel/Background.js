import Intelligence from "@/components/Intelligence";

const background = [
    {
        path: 'marcion_bio',
        component: Intelligence,
        props: {
            title: '马西昂修士：个人简介 Brother Marcion, Biography',
            translation: [
                '马西昂曾经是兄弟会中一个宗教派别的领袖，那时他的职责是让大众紧紧依附于凯恩的预言，随着第二次泰伯利亚战争接近尾声，马西昂对兄弟会及其领导人大失所望。' +
                '此后的马西昂愈发我行我素，在Nod遭受了一系列灾难性的失利后，马西昂成为第一个与Nod决裂的人，他将逝世的先知称为骗子，率部撤回澳大利亚内陆地区，对此，核心集团几乎没有人感到惊讶。',
                '马西昂并没有沉寂太久；他高超的演说技巧和高度自律的苦行僧生活方式，为他赢得了许多来自后来被称之为黄区的地方的人的支持。' +
                '在与Nod决裂之后的一年内，马西昂将他的追随者组织成了一支神权政体下的纪律严明的军队——“新”黑手。' +
                '他们致力于传播“泰伯利亚预言的真相和纯粹性”，随着Nod剩余势力的分裂日益严重，他们的支持率也在不断增长。',
                '有关“GDI插手了马西昂和Nod决裂一事”的传闻，目前尚未得到证实。',
            ],
            original: [
                'Once the leader of the Brotherhood\'s religious wing, charged with proselytizing the prophecies of Kane, Marcion grew disillusioned with the Brotherhood and its leader as the Second Tiberium War drew to a close.' +
                'Increasingly outspoken, few within the Inner Circle were surprised when Marcion was the first to break with Nod following their devastating series of losses, branding the deceased Prophet a charlatan and retreating to the Australian outback.',
                'Marcion was not quiet for long; his powerful oratorical skills and deeply ascetic lifestyle won him many devotees in what would come to be known as yellow zones. ' +
                'Within a year of his break with Nod, Marcion had organized his followers into a disciplined theocratic army - the \'new\' Black Hand. ' +
                'Dedicated to spreading \'truth and purity of the Tiberium prophecy,\' their popular support continues to grow amongst the increasingly splintered Nod survivors.',
                'Rumors that GDI had a hand in Marcion\'s break with Kane remain unsubstantiated. ',
            ],
            tr_source: '黑手领袖传记',
            tr_remark: '节选自 卡洛斯-德尔玛《凯恩：梦想家还是狂人？》',
            or_source: 'Biographical Details of Black Hand Leader',
            or_remark: 'Excerpt from \'Kane: Visionary or Maniac?\' by Carlos Del Mar',
            pic_src: require('../../assets/wrath_pictures/Marcion_Mugshot.png'),
        },
    },
    {
        path: 'lowest_ebb',
        component: Intelligence,
        props: {
            title: '凯恩 - 我生涯的最低谷 Kane - My Lowest Ebb',
            translation: [
                '我的兄弟们，那些逝去的人，一定对我满怀蔑视。' +
                '在一千年之后，他们所预判的我命运的最终愿景还是实现了。' +
                '我变得无能为力，成了一个伪君子，一个失败者，我的存在本身就是对我所认知的一切正确与真实的嘲讽。' +
                '曾经的先知，这个世界的弥赛亚，现在却身陷囹圄。' +
                '当我躺在这里，被这些管子，被这个变形的，毁坏的身体外壳所困住时，Nod兄弟会已经被那些假冒我意志的人的内讧和异端邪说撕扯得四分五裂。' +
                '我的追随者们，是否已经星飞云散了？',
                '我想，并非如此。',
                '那么，是这样吗，我为之奋斗的一切，我为之付出的一切，都成了徒劳，化作尘埃了吗？',
                '这绝不可能......',
                '......我必须康复，我必须活下去，我必须站起来走出这个低谷......',
                '......在那之后，真正地，我要让这个可怜的世界——以及我亲爱的逝去的兄弟们——感受到我的怒火。',
            ],
            original: [
                'My brothers, the departed, are surely looking down at me with contempt. ' +
                'After millenia, their ultimate vision of my fate has been realized. ' +
                'I have been rendered impotent, a sham, a failure, my very existence a mockery of all that I know to be right and true. ' +
                'Once a prophet, the messiah for this world, now imprisoned. ' +
                'As I lie here, trapped in these tubes, in this twisted, ruined shell of a body, the Brotherhood of Nod has been torn asunder by the infighting and heresy of those who presume to speak in my stead. ' +
                'Is it any wonder my followers have scattered to the four winds?',
                'I think not. ',
                'So, has it come to this, that all that I fought for, all that I have sacrificed, is as dust? ',
                'This cannot be... ',
                '...I must heal, I must survive, I must claw myself up from this pit...',
                '...and then, truly, shall this pitiful world - and my dear departed brothers - know my wrath. ',
            ],
            tr_source: '节选自 先知凯恩的私人录音带',
            tr_remark: '【此内容来源不公开】',
            or_source: 'Excerpt from private audiologs of the prophet Kane',
            or_remark: '[Source Redacted]',
            pic_src: require('../../assets/wrath_pictures/Kane_Headshot.png'),
        },
    },
    {
        path: 'a_spark',
        component: Intelligence,
        props: {
            title: 'Kane - A Spark... 凯恩 - 一点思想的火花',
            translation: [
                '我诅咒这个面具，诅咒这些禁锢我的管子，因为即使我的肉体复原，我的思想也只能在一片黑暗中独自徘徊。' +
                '这样一种隔绝，对我而言是沉重的包袱。' +
                '我必须全神贯注，一刻不停地思考，以免就此精神错乱，万劫不复。',
                '我必须去准备......去计划......',
                '......于是我的思想传递给了我的创造，CABAL，现在在某种意义上，它就是我的化身。' +
                '最终，这个人工智能取得的成绩只不过是肆意妄为的破坏，替那些将我称为疯子的异端落实了他们对我的评价。' +
                '然而，在这个人工智能的内心深处，在它核心思想的最深处，是一点火花，一盏明灯，一种信念。',
                '那是一种隐晦至深，却......伟大非凡之物。' +
                '我必须在它之上进一步去思考。'
            ],
            original: [
                'Curse this mask, these tubes that imprison me, for even as my flesh is restored, my mind is left to wander alone in darkness. ' +
                'This isolation, it weighs heavily upon me. ' +
                'I must focus, think, lest insanity take me once and for all.',
                'I must prepare...I must plan... ',
                '...and so it is that my thoughts turn to CABAL, that which was my creation and is now, in a way, part of what I have become. ' +
                'In the end, the AI\'s legacy was little more than wanton destruction, proof to the heretics that I am nothing but the madman they claim me to be. ' +
                'Yet, deep within that AI, within its very conception, there lies a spark, a light, a sign.',
                'There is something there, something hidden, something...great. ' +
                'I must think more on this.',
            ],
            tr_source: '节选自 先知凯恩的私人录音带',
            tr_remark: '【此内容来源不公开】',
            or_source: 'Excerpt from private audiologs of the prophet Kane',
            or_remark: '[Source Redacted]',
            pic_src: require('../../assets/wrath_pictures/Kane_Headshot.png'),
        },
    },
    {
        path: 'awakening',
        component: Intelligence,
        props: {
            title: '凯恩 - 苏醒 Kane - Awakening',
            translation: [
                '......这一天终于来临，我终于摆脱了这个令我万分憎恶的机器的束缚，我终于重新踏足于地面。' +
                '是的，我的脸颊已然伤痕累累，而且我必须向那些搜寻我的人隐瞒这一点，但我的双手，我的眼睛，我的思想，它们会帮助我开始新的统治。',
                '我已经苦等了许多年，我一直置身于废墟之中，徜徉在我内心的黑暗角落，在那些黑暗的角落里，我获得了灵感......我发现了一种愿景，有了一个计划。' +
                '现在是时候让梦想照进现实了。',
                '世界在沉睡，受制于它的无知，对将要来临的事情浑然不觉......',
            ],
            original: [
                '...and so the day comes, the day when at last I emerge from this hated apparatus and again walk upon the Earth. ' +
                'My face is scarred, true, and thus must be kept hidden from those who seek me, but my hands, my eyes, my mind, these are mine again to command.',
                'Years I have waited, body in ruins, roaming the darkened recesses of my own mind, and in those darkened corners I found inspiration...I found a vision, a plan. Now it is time to make that vision a reality.',
                'The world sleeps, hostage to its own ignorance, for it knows not what is yet to come...',
            ],
            tr_source: '节选自 先知凯恩的私人录音带',
            tr_remark: '【此内容来源不公开】',
            or_source: 'Excerpt from private audiologs of the prophet Kane',
            or_remark: '[Source Redacted]',
            pic_src: require('../../assets/wrath_pictures/Kane_Headshot.png'),
        },
    },
    {
        path: 'realization',
        component: Intelligence,
        props: {
            title: '凯恩 - 理想照进现实 Kane - Realization',
            translation: [
                '上帝赐福于保卫塔西佗碎片的人，因为在这些碎片之中，我找到了将我......在幽闭中......的想象转化为现实的方法。' +
                '这是一段艰难困苦的旅途，没错，但每度过一天，每越过一道障碍，我都距离我的最终目标更近了一步......那就是创造！',
            ],
            original: [
                'Blessed be he who has preserved these shards of the Tacitus, for within them I find the means to transform the visions of my...confinement...into reality. ' +
                'The journey is arduous, true, but with each day spent, each gauntlet passed, I move one step closer to my ultimate goal...creation!',
            ],
            tr_source: '节选自 先知凯恩的私人录音带',
            tr_remark: '【此内容来源不公开】',
            or_source: 'Excerpt from private audiologs of the prophet Kane',
            or_remark: '[Source Redacted]',
            pic_src: require('../../assets/wrath_pictures/Kane_Headshot.png'),
        },
    },
    {
        path: 'black_hand_origins',
        component: Intelligence,
        props: {
            title: '黑手 - 起源 Black Hand - Origins',
            translation: [
                '作为异教中的异教，黑手的起源可以追溯到Nod的初创时期。' +
                '最开始，黑手的身份类似于宗教警察，其任务是以强制手段保持信徒对凯恩教谕的遵循，接下来的几年中，黑手的权力得到了显著的扩张。' +
                '到第二次泰伯利亚战争时期，这个异教组织已经成为了由凯恩钦定的宗教事务管理者，负责将先知的预言广泛传播，让信徒保持对凯恩的归附，还负责维持兄弟会内部的纪律和原则......在必要时会动用武力。',
                '在兄弟会内部，黑手始终是一个具有独立的政治、宗教和军事派别的平行组织。',
                '不过，尽管黑手力量强大，影响深远，但直到近年，它依然保持着出人意料的低调姿态，它的礼仪、信义乃至其存在一直都被隐藏在神秘与混沌的面纱之后，从未超越Nod而让世人所知。' +
                '然而，随着第二次泰伯利亚战争接近尾声，一切都发生了变化。' +
                '凯恩“逝世”之后，安东-斯拉维克，一位德高望重的军事领导人，晋升为整个Nod兄弟会的领袖，随后他自称他本是一名黑手教长，自幼就皈依于这个异教。' +
                '无需多言，斯拉维克的晋升让黑手得到了密切关注，不过黑手对这种关注并不欢迎。',
                '很自然的是，许多黑手内部人员对黑手新的公众形象感到恼怒，而内部人员的异议又迅速升级为一系列激烈的公开对抗，一派是斯拉维克的忠实拥护者，另一派则是将他称为原教旨黑手的叛徒的人。' +
                '在反对斯拉维克的队伍中，很快就有一个能力足以与斯拉维克平起平坐的人物崭露头角，他名叫马西昂，是一位有着一腔热血的传教士。' +
                '随着领导者的确定和战线的划定，最初仅存在于教义层面的分歧也迅速恶化为全面的分裂，甚至威胁到了Nod本身的存在。',
                '尽管核心集团一再尝试着弥合这一裂痕，形势还是在不久之后失控了，斯拉维克遭到刺杀，撒手人寰，马西昂则与他的追随者一同撤退到澳大利亚内陆地区，进行自我流放。' +
                '这一连串的灾难导致兄弟会的其余部分分裂成了数不胜数的子阵营，每一个子阵营都宣称自己信奉的是先知的“正统”。' +
                '具有讽刺意味的是，马西昂的新黑手是剩余的四个与兄弟会传说中的过往存在联系的子阵营之一。',
                '现在，马西昂自封为真正的先知，并反过来把凯恩称作异教徒和诈骗家，他开始在世界上留下他自己的印记。',
            ],
            original: [
                'A cult within a cult, the origins of the Black Hand date back to soon after the founding of Nod itself. ' +
                'Initially established as a form of religious police and tasked with enforcing adherence to the teachings of Kane, in the ensuing years the Black Hand saw their purview expand significantly. ' +
                'By the time of the Second Tiberium War, the cult had become Kane\'s chosen wardens of all things religious, charged with the distributing and proselytizing of his prophecies while also maintaining spiritual discipline within the Brotherhood...by force if necessary.',
                'The Black Hand maintains a parallel organization within the Brotherhood with political, religious and military wings. ',
                'Yet, for all of their power and influence, until recently the Black Hand had managed to maintain a surprisingly low profile, shrouding their rituals, beliefs and, to the world beyond Nod, their very existence in a veil of mystery and obfuscation. ' +
                'However, as the Second Tiberium War drew to a close, all this would change. ' +
                'With Kane\'s "death", Anton Slavik, a respected military leader, rose to become leader of the Brotherhood of Nod - and revealed himself to be a Black Hand prelate, raised from childhood within the cult. ' +
                'Needless to say, Slavik\'s ascent drew significant attention to the Black Hand, attention that was not always welcomed.',
                'Unsurprisingly, many within the Black Hand chafed at the cult\'s new public profile, with internal dissent quickly escalating into a series of impassioned public confrontations between Slavik loyalists and those who claimed the Nod leader to be a traitor to the Black Hand\'s true purpose. ' +
                'From within the anti-Slavik ranks there soon rose a figure who could stand toe-to-toe with Slavik, an impassioned and popular preacher by the name of Brother Marcion. ' +
                'With leaders chosen and battle-lines drawn, what had started as a doctrinal disagreement had quickly escalated into a schism that threatened the very existence of Nod itself.',
                'Despite the Inner Circle\'s repeated attempts to heal the rift, the situation soon spun out of control, leaving Slavik dead at the hands of an assassin and Marcion and his followers retreating to self-imposed exile in the Australian outback. ' +
                'These cataclysmic events splintered the remainder of the Brotherhood into countless sub-factions, each claiming to follow the "true" word of the Prophet, with, ironically, Marcion\'s new Black Hand serving as one of four surviving links to the Brotherhood\'s storied past.',
                'Now claiming himself to be the one true prophet, and, in turn, branding Kane a heretic and charlatan, Marcion sets forth to make his own mark upon the world.',
            ],
            tr_source: 'Nod子阵营 黑手 背景资料',
            tr_remark: '节选自 埃尔伯特-古德曼《我所认识的马西昂》',
            or_source: 'Background on the Black Hand Nod splinter faction',
            or_remark: 'Excerpt from \'Marcion - as I Knew Him\', by Elbert Goldman',
            pic_src: require('../../assets/wrath_pictures/BlackHand_Art1.jpg'),
        },
    },
    {
        path: 'steel_talons_origins',
        component: Intelligence,
        props: {
            title: '钢爪 - 起源 Steel Talons - Origins',
            translation: [
                '第二次泰伯利亚战争落下帷幕，之后Nod兄弟会也四分五裂，于是GDI认为这个准国家和狂热的异教不会再构成对人类的重大威胁。' +
                '因此，GDI将它的战略目标从打击Nod转向改造地球上那些被泰伯利亚所摧残的地区。' +
                'GDI为这一目标进行了巨大的预算调整，绝大部分预算转向了相关的研发领域，于是已经持续了几十年的GDI军事技术蓬勃发展期也就此告终。',
                '自不必说，军队中有些人对这一新的发展方向提出了质疑——特别是约书亚-“米奇”-米切尔将军，他因第二次泰伯利亚战争的功绩而受勋，以年轻、善于进攻和战术层面的创新而闻名。' +
                '米切尔认为，尽管Nod或许已经战败，但如若GDI就此断定在地球上的泰伯利亚日益肆虐，民众情绪普遍沮丧的当下，在民众中不会诞生Nod的继承者，那将是相当愚蠢的。' +
                '因此他坚持认为，与其将这些资金用于控制泰伯利亚，不如用于研发新的作战技术，以应对可预见的新的潜在冲突。',
                '在经历了漫长的、翻来覆去的听证会之后，米切尔最终取得了局部胜利。' +
                '虽然GDI拒绝将研发预算的一大部分用于将军的提议，但他们还是同意资助米切尔领导下的一个全新的实验性作战技术集群。' +
                '这支精锐、新颖的部队被米切尔的赞赏者们——特别是著名的战争英雄尼克-“浩劫”-帕克——命名为“钢爪”，它在Nod派系分裂和混战的背景下迅速崭露头角，因其在战场上表现出的卓越的作战效率和一以贯之的秘密性而驰名。',
            ],
            original: [
                'With the end of the Second Tiberium War and the Brotherhood of Nod\'s subsequent implosion, GDI came to believe that the quasi-state and fanatical cult no longer represented a significant threat to Earth\'s population. ' +
                'Consequently, GDI shifted its strategic goals from defeating Nod to the reclamation of those parts of the planet previously consumed by Tiberium. ' +
                'The vast majority of GDI\'s research and development budget was repurposed to further that goal, bringing to a close the period of rapid technological development that had characterized GDI\'s military over the previous several decades.',
                'Needless to say, there were several within the military who questioned this new directive - notably General Joshua \'Mitch\' Mitchell, a decorated veteran of the Second Tiberium War renowned for his youth, aggressiveness and tactical innovation. ' +
                'Mitchell contended that while Nod may have been defeated, it would be foolish for GDI to assume that no successor would rise from the dispirited populace of an increasingly Tiberium-stricken earth. ' +
                'Therefore, he argued, funds allocated towards Tiberium control should instead be earmarked for the research and development of new combat technology, in anticipation of this next potential conflict.',
                'After a lengthy, volatile hearing, Mitchell emerged with a partial victory.' +
                ' While GDI refused to divert a significant part of its R&D budget to the General\'s cause, they did agree to fund a new experimental combat technology division under Mitchell. ' +
                'Dubbed the \'Steel Talons\' by Mitchell\'s admirers - notably famed war hero Nick \'Havoc\' Parker - this elite, unconventional combat battalion quickly rose to prominence in the splinter faction skirmishes that followed Nod\'s implosion, becoming known both for their ruthless efficiency on the battlefield and for the shroud of secrecy they maintained at all other times.',
            ],
            tr_source: 'GDI实验性战斗集群 钢爪 背景资料',
            tr_remark: '节选自 哈维尔-德雅尔丹《GDI与未来战争》',
            or_source: 'Background on the GDI Steel Talons experimental warfare division',
            or_remark: 'Excerpt from \'GDI and the Future of War\', by Xavier Des Jardins',
        },
    },
];

export default background;