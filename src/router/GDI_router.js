import BodyView from "../components/BodyView";
import weapon_tactic_system from "@/router/GDI_intel/GDI_Weapon_Tactic_System";
import inops from "@/router/GDI_intel/GDI_InOps";
import eyewitness_accounts from "@/router/GDI_intel/GDI_Eyewitness_Accounts";
import archives from "@/router/GDI_intel/GDI_Archives";
import news_wire from "@/router/GDI_intel/GDI_NewsWire";

const gdi_routes = [
    {
      path: '/eva/index',
      redirect: '/eva/archives/tiberium',
    },
    {
        path: '/eva/:id',
        component: BodyView,
        props: {
            menu_items: [
                {index: 1, title: 'GDI InOps', dest: '/eva/inops',
                    children: [
                        {index: 1, title: '驻守', dest: 'garrisoning'},
                        {index: 2, title: '呼叫运输机', dest: 'transport'},
                        {index: 3, title: '后勤物资箱：充满机遇的目标', dest: 'crates'},
                        {index: 4, title: '液态泰伯利亚科研', dest: 'liquid_tiberium'},
                        {index: 5, title: 'Nod兄弟会：空军', dest: 'nod_aircraft'},
                        {index: 6, title: 'Nod兄弟会：新式喷火坦克', dest: 'flame_tank'},
                        {index: 7, title: '征用泰伯利亚采炼柱', dest: 'commandeering_tiberium_spikes'},
                        {index: 8, title: 'EMP控制中心', dest: 'emp_centre'},
                        {index: 9, title: '开罗：核弹发射井', dest: 'cairo_nuclear'},
                        {index: 10, title: 'Nod兄弟会：核武器库', dest: 'nod_nuclear'},
                        {index: 11, title: '电力管理', dest: 'power_management'},
                        {index: 12, title: 'Nod兄弟会：离子炮干扰技术', dest: 'ion_disruption'},
                        {index: 13, title: 'Nod兄弟会：圣灵步行机甲', dest: 'nod_avatar'},
                        {index: 14, title: '声波武器与外星侵略者', dest: 'sonic_n_invader'},
                        {index: 15, title: '外星人：起源及其与塔西佗的联系', dest: 'alien_n_tacitus'},
                        {index: 16, title: '外星人：摄魂师', dest: 'mastermind'},
                        {index: 17, title: '外星人：裂缝产生器', dest: 'rift_generator'},
                    ]},
                {index: 2, title: 'GDI新闻专线', dest: '/eva/news',
                    children: [
                        {index: 1, title: '机器中的幽灵', dest: 'ghost_machine'},
                        {index: 2, title: '猛犸 MkⅡ步行机甲退役', dest: 'mammoth_mk2_off'},
                        {index: 3, title: '几乎终结GDI的致命失误', dest: 'blunder_gdi'},
                        {index: 4, title: '凯恩的东欧情结', dest: 'kane_fascination'},
                        {index: 5, title: 'GDI的避风塘', dest: 'storm_shelter'},
                        {index: 6, title: '外星巨塔烟消云散！', dest: 'alien_tower_destroyed'},
                    ]},
                {index: 3, title: 'GDI前线纪实', dest: '/eva/eyewitness',
                    children: [
                        {index: 1, title: 'Nod兄弟会：隐形科技', dest: 'stealth_tech'},
                        {index: 2, title: 'Nod兄弟会：基地防御工事', dest: 'nod_base_defense'},
                        {index: 3, title: 'GDI战地侦察：科隆陷落', dest: 'cologne_fall'},
                        {index: 4, title: 'GDI战地侦察：伯尔尼陷落', dest: 'berne_fall'},
                    ]},
                {index: 4, title: 'GDI兵器，战术与系统', dest: '/eva/military',
                    children: [
                        {index: 1, title: '步枪兵', dest: 'riflemen'},
                        {index: 2, title: '导弹兵小队', dest: 'missile_squad'},
                        {index: 3, title: '工兵', dest: 'engineer'},
                        {index: 4, title: '机动基地车', dest: 'mcv'},
                        {index: 5, title: '兵营', dest: 'barracks'},
                        {index: 6, title: 'APC', dest: 'apc'},
                        {index: 7, title: '掷弹兵', dest: 'grenadier'},
                        {index: 8, title: '狙击小队', dest: 'sniper'},
                        {index: 9, title: '指挥部', dest: 'command_post'},
                        {index: 10, title: '机场', dest: 'airfield'},
                        {index: 11, title: '奥卡攻击机', dest: 'orca'},
                        {index: 12, title: '突击队员', dest: 'commando'},
                        {index: 13, title: '捕食者主战坦克', dest: 'predator'},
                        {index: 14, title: 'GDI基地防御工事', dest: 'base_defense'},
                        {index: 15, title: '起重机', dest: 'crane'},
                        {index: 16, title: '战区重装兵', dest: 'zone_troopers'},
                        {index: 17, title: '战争工厂：维修无人机', dest: 'repair_drone'},
                        {index: 18, title: '基地扩张：勘探者', dest: 'surveyor'},
                        {index: 19, title: '雷格：展开成为前线作战基地', dest: 'rig'},
                        {index: 20, title: '火鹰战机', dest: 'firehawk'},
                    ]},
                {index: 5, title: 'GDI档案室', dest: '/eva/archives',
                    children: [
                        {index: 1, title: 'GDI基地关闭', dest: 'base_closure'},
                        {index: 2, title: '泰伯利亚', dest: 'tiberium'},
                        {index: 3, title: '红区，黄区与蓝区', dest: 'red_yellow_blue'},
                        {index: 4, title: '关于Nod兄弟会', dest: 'nod_brotherhood'},
                        {index: 5, title: '全球防御组织', dest: 'gdi'},
                        {index: 6, title: '泰伯利亚污染对健康的影响', dest: 'tiberium_contamination'},
                        {index: 7, title: '黄区生活', dest: 'yellow_life'},
                        {index: 8, title: 'GDI的核武器', dest: 'gdi_nuclear'},
                        {index: 9, title: '红区看上去是什么样子？', dest: 'red_zone_like'},
                        {index: 10, title: '红区地貌：泰伯利亚裂谷', dest: 'tiberium_chasms'},
                    ]},
            ]
        },
        children: [].concat(weapon_tactic_system).concat(inops).concat(eyewitness_accounts).concat(archives).concat(news_wire),
    }
    ];

export default gdi_routes;

