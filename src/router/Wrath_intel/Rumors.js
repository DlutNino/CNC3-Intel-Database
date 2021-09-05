import Intelligence from "@/components/Intelligence";

const rumors = [
    {
        path: 'corruption_marcion',
        component: Intelligence,
        props: {
            title: '马西昂修士的堕落 The Corruption of Brother Marcion',
            translation: [
                '（沉寂）',
                '......帕克呼叫GDI中央指挥部，你......',
                '（沉寂）',
                '......一切都在按照计划进行。' +
                '第一个目标已经达成，并且大获成功。' +
                '马西昂现在将帕克探员视作他自己模式下的正统Nod的狂热信徒。' +
                '事实证明，我们的目标非常乐于听到他人对凯恩的猜疑。' +
                '接下来转向第二个目标——为“清除”斯拉维克奠定基础。',
                '（沉寂）',
                '种子已经播下了......',
                '（沉寂）',
                '帕克汇报完毕。',
            ],
            original: [
                '(static)',
                '...Park contacting central GDI Central Command, do you...',
                '(static)',
                '...mission unfolding as planned. ' +
                'First objective has been met and was an unqualified success. ' +
                'Marcion now regards Agent Park as an orthodox Nod fanatic in his own mold. ' +
                'Target is proving very receptive to messages of distrust re: Kane. ' +
                'Moving on to second objective - laying the groundwork for the "removal" of Slavik.',
                '(static)',
                'Seeds have been planted... ',
                '(static)',
                'Park out.',
            ],
            tr_source: '截获一条GDI通讯',
            tr_remark: '此通讯由修士 欧瑟斯-卡塔尔 截获并破译',
            or_source: 'Intercepted GDI Transmission',
            or_remark: 'Intercepted and decoded by Brother Othus Qatar',
            pic_src: require('../../assets/wrath_pictures/Command_Post.png'),
        },
    },
];

export default rumors;