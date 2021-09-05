import BodyView from "../components/BodyView";
import field_recon from "@/router/Wrath_intel/Field_Recon";
import weaponry from "@/router/Wrath_intel/Weaponry";
import rumors from "@/router/Wrath_intel/Rumors";
import background from "@/router/Wrath_intel/Background";

const wrath_routes = [
    {
        path: '/kane_wrath/index',
        redirect: '/kane_wrath/field_recon/tacitus',
    },
    {
        path: '/kane_wrath/:id',
        component: BodyView,
        props: {
            menu_items: [
                {index: 1, title: '战地侦察', dest: '/kane_wrath/field_recon',
                    children: [
                        {index: 1, title: '设施中再度发生爆炸？', dest: 'another_explosion'},
                        {index: 2, title: '塔西佗', dest: 'tacitus'},
                    ]},
                {index: 2, title: '兵器', dest: '/kane_wrath/weaponry',
                    children: [
                        {index: 1, title: '圣徒队', dest: 'confessor_cabal'},
                        {index: 2, title: 'GDI - 弹弓', dest: 'slingshot'},
                        {index: 3, title: 'GDI - 锤头鲨', dest: 'hammerhead'},
                        {index: 4, title: 'GDI - 战斗工兵', dest: 'combat_engineer'},
                        {index: 5, title: 'GDI - 巨兽', dest: 'behemoth'},
                        {index: 6, title: '重型收割机', dest: 'heavy_harvester'},
                    ]},
                {index: 3, title: '传闻', dest: '/kane_wrath/rumor',
                    children: [
                        {index: 1, title: '马西昂修士的堕落', dest: 'corruption_marcion'},
                    ]},
                {index: 4, title: '背景资料', dest: '/kane_wrath/background',
                    children: [
                        {index: 1, title: '马西昂修士：个人简介', dest: 'marcion_bio'},
                        {index: 2, title: '凯恩 - 我生涯的最低谷', dest: 'lowest_ebb'},
                        {index: 3, title: '凯恩 - 一点思想的火花', dest: 'a_spark'},
                        {index: 4, title: '凯恩 - 苏醒', dest: 'awakening'},
                        {index: 5, title: '凯恩 - 理想照进现实', dest: 'realization'},
                        {index: 6, title: '黑手 - 起源', dest: 'black_hand_origins'},
                        {index: 7, title: '钢爪 - 起源', dest: 'steel_talons_origins'},
                    ]},
            ],
        },
        children: [].concat(field_recon).concat(weaponry).concat(rumors).concat(background),
    },
];

export default wrath_routes;