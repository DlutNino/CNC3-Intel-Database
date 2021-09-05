import Intelligence from "@/components/Intelligence";

const inner_circle = [
    {
        path: 'once_again_nuclear',
        component: Intelligence,
        props: {
            title: '又一次，我们拥有了核力量<br/> Once Again a Nuclear Power',
            translation: [
                '“......Nod兄弟会再一次拥有了核力量。' +
                '我们将会运用我们的核弹头和运载系统，让我们地球上的敌人在核火力的洗礼中被扫除殆尽......”',
            ],
            original: [
                '"...the Brotherhood of Nod is once again a nuclear power. ' +
                'We shall use our warheads and delivery systems to cleanse our enemies from the Earth in a bath of nuclear fire..."',
            ],
            tr_source: '节选自 一条致兄弟会的信息',
            tr_remark: '发送于 在澳大利亚内陆地区重夺核弹头后',
            or_source: 'Excerpt from a Message to the Brotherhood',
            or_remark: 'Transmitted upon recapture of nuclear warheads in the Australian Outback',
            pic_src: require('../../assets/nod_pictures/IDB_Nod.png'),
        },
    },
];

export default inner_circle;