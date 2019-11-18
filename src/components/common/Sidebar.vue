<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" @open="unfoldNav" :default-active="onRoutes" :collapse="collapse" background-color="#ffffff"
            text-color="#b1b1b1" active-text-color="#8cdfd8" router>
           <template v-for="(item,i) in menuArr">
                <template v-if="item.subs&&item.subs.length">
                    <el-submenu :index="item.index" :key="i"> 
                        <template slot="title">
                               <i style="color:#666;font-size:22px" :class="item.icon"></i> <span slot="title" style="font-size:18px">{{ item.title }}</span>
                        </template>
                        <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">
                            {{ subItem.title }}
                        </el-menu-item>
                    </el-submenu>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
    import bus from './bus';
    import { mapGetters } from 'vuex'
    export default {
        data() {            
            return {
                collapse: false,
                items: [
                    {
                        icon: 'el-icon-setting',
                        index: 'index',
                        title: '系统首页',
                    },
                    {
                        icon: 'el-icon-tickets',
                        index: 'table',
                        title: '基础模块',
                        subs: [
                            {
                                index: 'searchinput',
                                title: '查询输入页'
                            },
                            {
                                index: 'tabpage',
                                title: '标签选项卡'
                            },
                             {
                                index: 'tablepage',
                                title: '综合表格页'
                            },
                             {
                                index: 'formpage',
                                title: '表单页'
                            },
                             {
                                index: 'treepage',
                                title: '树组件页'
                            }
                        ]
                    },
                     {
                        icon: 'el-icon-setting',
                        index: '3',
                        title: '系统管理',
                        subs: [
                            {
                                index: 'organizationTree',
                                title: '机构管理'
                            }, 
                            {
                                index: 'sysUser',
                                title: '用户管理'
                            }, 
                            {
                                index: 'sysRole',
                                title: '角色管理'
                            }, 
                            {
                                index: 'sysAcl',
                                title: '角色资源授权'
                            }, 
                            {
                                index: 'sysResource',
                                title: '资源管理'
                            }, 
                            {
                                index: 'sysMenu',
                                title: '菜单管理'
                            }
                             

                        ]
                    },
                    // {
                    //     icon: 'el-icon-message',
                    //     index: 'tabs',
                    //     title: 'tab选项卡'
                    // },
                    // {
                    //     icon: 'el-icon-date',
                    //     index: '3',
                    //     title: '表单相关',
                    //     subs: [
                    //         {
                    //             index: 'form',
                    //             title: '基本表单'
                    //         },
                    //         {
                    //             index: 'editor',
                    //             title: '富文本编辑器'
                    //         },
                    //         {
                    //             index: 'markdown',
                    //             title: 'markdown编辑器'
                    //         },
                    //         {
                    //             index: 'upload',
                    //             title: '文件上传'
                    //         }
                    //     ]
                    // },
                    // {
                    //     icon: 'el-icon-star-on',
                    //     index: 'charts',
                    //     title: 'schart图表'
                    // },
                    // {
                    //     icon: 'el-icon-rank',
                    //     index: 'drag',
                    //     title: '拖拽列表'
                    // },
                    // {
                    //     icon: 'el-icon-warning',
                    //     index: 'permission',
                    //     title: '权限测试'
                    // },
                    {
                        icon: 'el-icon-error',
                        index: '404',
                        title: '404页面'
                    }
                ],
                //添加数据中心 左侧菜单
                 menuArr:[
                    {
                        icon: 'iconfont iconyonghu',
                        index: 'userAnalysisIndex',
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
                            {
                                index: 'downloadCount',
                                title: '下载渠道'
                            }, 
                            {
                                index: 'deviceTerminal',
                                title: '设备终端'
                            }
                        ]
                    },
                    //商家分析页面
                    {
                        icon: 'iconfont iconshangjiashu',
                        index: 'businessanalysis',
                        title: '商家分析',
                        subs: [ 
                            {
                            index: 'salescount',
                             title: '销售统计'
                            }, 
                         ]
                    },
                    
                    //数据统计表
                    {
                        icon: 'iconfont iconshuju',
                        index: 'statisticalTable',
                        title: '数据统计表',
                        subs: [ 
                            {
                            index: 'statisticalTable',
                             title: '数据统计表'
                            } 
                         ]
                    }
                    
                 ]
            }
        },
        watch:{
            'menuList':function(val){
                console.log("监听菜单",val)
            }
        },
        computed:mapGetters({
            menuList:'getMenuList',
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }),     
        methods:{
            //点击展开
            unfoldNav(_val){
                console.log(_val,"左侧菜单的监听")
                this.$router.push({path:'/'+_val});//路由的跳转
            }
        },
        created(){
            // 通过 Event Bus 进行组件间通信，来折叠侧边栏
            bus.$on('collapse', msg => {
                this.collapse = msg;
            })
        }
    }
</script>

<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        left: 0;
        top: 70px;
        bottom:0;
        overflow-y: scroll;
        -moz-user-select: none;
        user-select: none;
    }
    .sidebar::-webkit-scrollbar{
        width: 0;
    }
    .sidebar-el-menu:not(.el-menu--collapse){
        width: 250px;
    }
    .sidebar > ul {
        height:100%;
    }
</style>
