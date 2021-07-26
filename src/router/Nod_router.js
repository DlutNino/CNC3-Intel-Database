import View from "../components/View";
const nod_routes = [
    {
        path: '/legion/:id',
        component: View,
        props: {
            menu_items: [
                {index: 1, title: 'Nod兄弟会战地情报', dest: '/legion/field_intel'},
                {index: 2, title: '凯恩的兵工厂', dest: '/legion/arsenal'},
                {index: 3, title: 'Nod兄弟会档案馆', dest: '/legion/archives'},
            ]
        }
    },
];

export default nod_routes;