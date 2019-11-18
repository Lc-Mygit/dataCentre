
/**
 * 这里配置开发环境写死的路由和菜单，方便开发
 */

//静态路由
var routeDevList = [
    {
        path: '/routedev',
        component: resolve => require(['../components/test/RouteDev'], resolve),
        meta: {
            title: '静态路由'
        }
    },
    {
        path: '/userSource',
        component: resolve => require(['../components/useranalysis/userSource'], resolve),
        meta: {
            title: '用户来源'
        }
    },
    {
        path: '/userPortrait',
        component: resolve => require(['../components/useranalysis/userPortrait'], resolve),
        meta: {
            title: '用户画像'
        }
    },
    {
        path:'/downloadCount',
        component: resolve => require(['../components/useranalysis/downloadCount'], resolve),
        meta: {
            title: '下载渠道'
        }
    },
    {
        path:'/deviceTerminal',
        component: resolve => require(['../components/useranalysis/deviceTerminal'], resolve),
        meta: {
            title: '设备终端'
        }
    },
    {
        path:'/userAnalysisIndex',
        component: resolve => require(['../components/useranalysis/userAnalysisIndex'], resolve),
        meta: {
            title: '用户分析'
        }
    },
    /*数据统计表*/
    {
        path:'/statisticalTable',
        component: resolve => require(['../components/statisticalTable/statisticalTable'], resolve),
        meta: {
            title:'数据统计表'
        }
    },
    //商家分析
    {
        path:'/businessanalysis',
        component: resolve => require(['../components/businessanalysis/businessanalysisIndex'], resolve),
        meta: {
            title:'商家分析'
        }
    },
    {
        path:'/salescount',
        component: resolve => require(['../components/businessanalysis/salescount'], resolve),
        meta: {
            title:'销售统计'
        }
    },    

];
//=========静态菜单======== 可写死菜单  
var menuDevList = [
    {
        icon: 'el-icon-date',
        index: Math.random()+'',
        title: '用户分析',
        subs: [
            {
                index: 'userSource',
                title: '用户来源'
            },
            {
                index: 'userPortrait',
                title: '用户画像'
            },
            // {
            //     index: 'downloadCount',
            //     title: '用户中心'
            // },
            // {
            //     index: 'userSource',
            //     title: '用户中心'
            // },
        ]
    }
]



var routeDev = {
    ROUTE_DEV: true,//是否写入静态路由（开关）
    routeDevList: routeDevList,
    MENU_DEV: true,//是否写入静态菜单（开关）
    menuDevList: menuDevList,
}
export default routeDev;