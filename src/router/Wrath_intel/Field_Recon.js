import Intelligence from "@/components/Intelligence";

const field_recon = [
    {
        path: 'another_explosion',
        component: Intelligence,
        props: {
            title: '设施中再度发生爆炸？<br/> Another explosion in the facility?',
            translation: [
                '致：澳大利亚GDI泰伯利亚研究所主席 詹姆斯-德格鲁特博士',
                '寄：美国华盛顿特区秘密研发局主任 艾略特-史密斯-约翰逊',
                '--------------------',
                '主题：又一次爆炸？！',
                '--------------------',
                '杰克，我再也找不到任何借口了。' +
                '如果再发生一次这样的“意外事故”，议会就会追究我的责任，并且冻结你的预算。' +
                '仅去年一年，你就失去了24名左右的工作人员，而且你非常清楚，他们不是普通平庸的帮你拿烧杯的助手，他们都是泰伯利亚领域的顶尖科学家，学识珍贵，无可取代。' +
                '杰克，你并须明白，大家真的只是不想为你工作，不想被已经发生的这些事情波及到，不管我们在他们的工资簿上加多少个0都无济于事。',
                '我知道你从液态的泰伯利亚中看到了许多可能性，我也真的要对你的激情表示赞扬，但现在对于议会中那些严重怀疑这一研究路线是否会赔上数十亿钱款和许多生命的人，我开始站在他们一边了。',
                '听着，杰克，我已经尽力了，现在我无能为力，也身心俱疲了。' +
                '仔细调查这起事故，给出一个合理的解释，不然我们将会对你采取强制措施。',
                '——艾略特',
            ],
            original: [
                'To: Dr. James De Groot, Chair, GDI Institute for Tiberium Research, [Redacted], Australia',
                'From: Eliot Smith-Johnson, Director, Department of Covert R&D, Washington DC, USA',
                '--------------------',
                'Subject: Another explosion?! ',
                '--------------------',
                'Jack, I\'m running out of excuses here. ' +
                'One more \'accident\' like that and the Council will have my neck - and your budget. ' +
                'You\'ve lost almost two dozen workers in the last year alone and, as you are WELL aware, these aren\'t your garden-variety beaker-slingers, these are top-ranked Tib scientists and they\'re getting harder to replace! ' +
                'You have to understand, Jack, people just don\'t want to work for you, not with all that\'s happened already, no matter how many zeroes we add to their paychecks.',
                'I understand the potential you see in Liquid Tiberium, and I applaud your passion, but I\'m beginning to side with those in the council who seriously doubt whether this line of inquiry will amount to anything other than billions of credits - and lives - down the drain.',
                'Listen Jack, I\'m at the end of my tether here. ' +
                'Get it together and start producing results or we\'re going to shut you down.',
                ' - Eliot',
            ],
            tr_source: '【截获一条关于澳大利亚秘密液态泰伯利亚科研项目的GDI通讯】',
            tr_remark: '此通讯由黑手教长 卢修斯-比卡 截获',
            or_source: 'Intercepted GDI Transmission regarding secret Liquid Tiberium research in Australia',
            or_remark: 'Intercepted by Black Hand Prelate Lucius Bika',
            pic_src: require('../../assets/wrath_pictures/New_Tiberium_Growth.jpg'),
        },
    },
    {
        path: 'tacitus',
        component: Intelligence,
        props: {
            title: '塔西佗 The Tacitus',
            translation: [
                '塔西佗是一座来自外星，起源年代未知的档案库，是“升天”预言中的关键，是凯恩建立Nod兄弟会的核心信义。' +
                '自两年前从Nod手中夺回该设备以来，它一直被存放在GDI的夏延山军事要塞群中，保持着安全状态，据说此前凯恩已经想方设法地从塔西佗中提取出了若干信息。' +
                '第二次泰伯利亚战争结束时，这些数据随Nod一同销声匿迹，这导致我们没有任何确凿的证据来证明所谓的先知到底想要用塔西佗来做些什么。',
                '鉴于在过去的三年中Nod的活动少之又少，我们只能断定，他的计划碰壁了。',
                '尽管布德罗博士在21世纪30年代初期取得了突破，但我们尝试与该设备对接的进展始终非常缓慢。' +
                '它到底存储着些什么信息，这些信息对于凯恩又有何种价值，仍然是受到相关部门密切关注的重大议题。',
            ],
            original: [
                'An archive of unknown age and alien origin, the Tacitus is key to the ascension prophecies, the core mythology around which Kane built the Brotherhood of Nod. ' +
                'While the device has remained safe in GDI’s fortified Cheyenne Mountain complex since its recapture from Nod two years ago, it is believed that Kane managed to extract an unknown amount of information beforehand. ' +
                'This data vanished with Nod at the end of the Second Tiberium War, leaving us with no concrete evidence as to what the so-called Prophet planned to use it for.',
                'Given the lack of Nod activity over the last three years, one can only conclude that he failed.',
                'Despite Dr. Boudreau’s breakthroughs in the early 2030’s, progress continues to be slow for our own attempts to interface with the device. ' +
                'What information it holds, and what value said information had to Kane, continue to be matters of serious concern for this agency.',
            ],
            tr_source: '【截获一条GDI短篇情报】',
            tr_remark: '此简报由Nod情报部门取得',
            or_source: 'Intercepted GDI Intelligence Briefing',
            or_remark: 'Obtained by Nod Intelligence, Date Redacted',
            pic_src: require('../../assets/wrath_pictures/Tiberium_Spike.png'),
        },
    },
];

export default field_recon;