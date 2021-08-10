import BodyView from "../components/BodyView";
import field_intel from "@/router/Nod_intel/Nod_Field_Intel";
import kane_arsenal from "@/router/Nod_intel/Nod_Arsenal";
import archives from "@/router/Nod_intel/Nod_Archives";

const nod_routes = [
    {
        path: '/legion/index',
        redirect: '/legion/archives/brotherhood_of_nod',
    },
    {
        path: '/legion/:id',
        component: BodyView,
        props: {
            menu_items: [
                {index: 1, title: 'Nod兄弟会战地情报', dest: '/legion/field_intel',
                    children: [
                        {index: 1, title: '泰伯利亚采炼柱', dest: 'tiberium_spikes'},
                        {index: 2, title: 'Nod战术条令', dest: 'tactical_doctrine'},
                        {index: 3, title: '精炼与收割作业', dest: 'refinery_harvesting'},
                    ]},
                {index: 2, title: '凯恩的兵工厂', dest: '/legion/arsenal',
                    children: [
                        {index: 1, title: '武装分子和火箭部队', dest: 'militants_rocket'},
                        {index: 2, title: '狂热信徒', dest: 'fanatics'},
                        {index: 3, title: '破坏者', dest: 'saboteur'},
                        {index: 4, title: 'Nod之手', dest: 'hand_of_nod'},
                        {index: 5, title: 'Nod战争工厂', dest: 'war_factory'},
                        {index: 6, title: '影子小队', dest: 'shadow_team'},
                        {index: 7, title: '毒液巡逻空艇', dest: 'venom'},
                        {index: 8, title: '喷火兵器', dest: 'flame_weapons'},
                        {index: 9, title: '基地防御工事', dest: 'base_defenses'},
                    ]},
                {index: 3, title: 'Nod兄弟会档案馆', dest: '/legion/archives',
                    children: [
                        {index: 1, title: 'Nod兄弟会', dest: 'brotherhood_of_nod'},
                        {index: 2, title: 'Nod在世界上的地位', dest: 'world_place'},
                        {index: 3, title: 'GDI A-SAT系统的地面控制', dest: 'a_sat_control'},
                    ]},
            ]
        },
        children: [].concat(field_intel).concat(kane_arsenal).concat(archives),
    },
];

export default nod_routes;