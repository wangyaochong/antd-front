export const pageRoutes = [
    { path: '/', component: 'index' },
    { path: '/index/index', component: 'index/index' },
    {
        path: '/user/user',
        component: 'user/_layout',
        menu: {
            name: '股票列表x',
            icon: 'StockOutlined',
        },
        routes: [
            {
                path: '/user/user/sub',
                component: 'user/userSub',
                menu: {
                    name: 'sub1',
                    icon: 'StockOutlined',
                },
            },
            {
                path: '/user/user/sub2',
                component: 'user/userSub2',
                menu: {
                    name: 'sub2',
                    icon: 'StockOutlined'

                },
            }
        ]
    },
    { path: '/dvatest', component: 'dvatest' }
];

