import View from "../components/View";
const nod_routes = [
    {
        path: '/legion',
        component: View,
        props: {
            menu_items: [
                {index: 1, title: 'Nod兄弟会战地情报', dest: '/legion'},
                {index: 2, title: '凯恩的兵工厂', dest: '/legion'},
                {index: 3, title: 'Nod兄弟会档案馆', dest: '/legion'},
            ]
        }
    },
];

export default nod_routes;