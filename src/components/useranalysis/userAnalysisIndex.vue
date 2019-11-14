<template>   
    <div class="userAnalysisIndex-Box">
        <el-row :gutter="12">
            <el-col :span="8">
            <div class="top-pagename">
                <div class="line"></div>用户分析
            </div>
            </el-col>
        </el-row>
       
        <!--按钮和下拉选项组合 区域-->
        <div class="button-select-Box">   
            <el-button-group>
                <el-button plain @click="Evtactive('今日')">今日</el-button>
                <el-button plain @click="Evtactive('近7天')">近7天</el-button>
                <el-button plain @click="Evtactive('近30天')">近30天</el-button>
            </el-button-group>

             <!-- 日期选择范围 -->
            <el-date-picker
                style="width:230px"
                v-model="dateRangeValue"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                value-format="yyyy-MM-dd"
            ></el-date-picker>  
        </div>   

        <!-- 用户统计 图标区 -->
        <div class="user-statistics-contain">
            <el-row :gutter="20">
                <el-col :span="12">
                    <el-card shadow="hover">
                        <div class="itemflex-box">
                            <div class="left-item">
                                <!-- 左边文字 -->
                                <div class="text-content">  
                                     <div class="text-title">新增用户</div>
                                     <div class="num-val">40</div>
                                     <div>
                                         <span style="color:#999">同比</span>  
                                         <span class="percent-val">10% </span>  
                                         <span style="margin-left:8px">
                                              <i style="font-size:25px;color:#f00" class="iconfont iconxjt"></i>
                                        </span> 
                                     </div>
                                </div>  
                                <!-- 右边图标 -->
                                <div class="icon-content"> 
                                      <i style="color:#00a0eb;font-size:45px" class="iconfont iconxinzengyonghu"></i>
                                </div>
                            </div>
                            <div class="right-item">
                                    <!-- 左边文字 -->
                                    <div class="text-content">  
                                        <div class="text-title">活跃用户</div>
                                        <div class="num-val">2,054</div>   
                                        <div> 
                                            <span style="color:#999">同比</span> 
                                            <span class="percent-val">10% </span> 
                                            <span style="margin-left:8px"> <i style="font-size:25px;color:#43d3c9" class="iconfont iconshangjiantou"></i></span> 
                                        </div>
                                    </div>  
                                    <!-- 右边图标 -->
                                    <div class="icon-content"> 
                                        <i style="color:#f2921a;font-size:45px" class="iconfont iconhuoyueyonghu"></i>
                                    </div>    
                            </div>
                        </div> 

                         <div class="itemflex-box">
                            <div class="left-item">
                                   <!-- 左边文字 -->
                                    <div class="text-content">  
                                        <div class="text-title">新用户次日留存日</div>
                                        <div class="num-val">40.23%</div>
                                        <div>
                                            <span style="color:#999">同比</span>  
                                            <span class="percent-val">40.23% </span>  
                                            <span style="margin-left:8px">
                                                <i style="font-size:25px;color:#43d3c9" class="iconfont iconshangjiantou"></i>
                                            </span> 
                                        </div>
                                    </div>  
                                     <!-- 右边图标 -->
                                    <div class="icon-content"> 
                                        <i style="color:#18c8bb;font-size:45px" class="iconfont iconjinripingjunciriliucunshuai"></i>  
                                    </div>
                                     
                            </div>
                            <div class="right-item">
                                     <!-- 左边文字 -->
                                    <div class="text-content">  
                                        <div class="text-title">平均使用时长</div>
                                        <div class="num-val">00:02:48</div>
                                        <div>
                                            <span style="color:#999">同比</span>  
                                            <span class="percent-val">40.23% </span>  
                                            <span style="margin-left:8px">
                                                <i style="font-size:25px;color:#43d3c9" class="iconfont iconshangjiantou"></i>
                                            </span> 
                                        </div>
                                    </div>  
                                     <!-- 右边图标 -->
                                    <div class="icon-content"> 
                                        <i style="color:#f0d627;font-size:45px" class="iconfont iconshichang"></i>  
                                    </div>
                            </div>
                        </div> 
                    </el-card> 
 
                </el-col>    
                <el-col :span="12">
                    <el-card shadow="hover">
                               <div class="itemflex-box">
                                    <div class="left-item">
                                        <!-- 左边文字 -->
                                            <div class="text-content">  
                                                <div class="text-title">充值用户数</div>
                                                <div class="num-val">2,054</div>
                                                <div>
                                                    <span style="color:#999">同比</span>  
                                                    <span class="percent-val">-10% </span>  
                                                    <span style="margin-left:8px">
                                                        <i style="font-size:25px;color:#43d3c9" class="iconfont iconshangjiantou"></i>
                                                    </span> 
                                                </div>
                                            </div>  
                                            <!-- 右边图标 -->
                                            <div class="icon-content"> 
                                                <i style="color:#a24df1;font-size:45px" class="iconfont iconshuju"></i>  
                                            </div>
                                    </div>
                                    <div class="right-item">
                                            <!-- 左边文字 -->
                                            <div class="text-content">  
                                                <div class="text-title">用户充值总额</div>
                                                <div class="num-val">2，054</div>
                                                <div>
                                                    <span style="color:#999">同比</span>  
                                                    <span class="percent-val">58% </span>  
                                                    <span style="margin-left:8px">
                                                        <i style="font-size:25px;color:#43d3c9" class="iconfont iconshangjiantou"></i>
                                                    </span> 
                                                </div>
                                            </div>  
                                            <!-- 右边图标 -->
                                            <div class="icon-content"> 
                                                <i style="color:#4309eb;font-size:45px" class="iconfont icondanweitongji"></i>  
                                            </div>
                                    </div>
                        </div>     
                        <div class="itemflex-box">
                            <div class="left-item">
                                   <!-- 左边文字 -->
                                    <div class="text-content">  
                                        <div class="text-title">累计用户数</div>
                                        <div class="num-val">5，888</div>
                                        <div>
                                            <span style="color:#999">同比</span>  
                                            <span class="percent-val">40.23% </span>  
                                            <span style="margin-left:8px">
                                                <i style="font-size:25px;color:#43d3c9" class="iconfont iconshangjiantou"></i>
                                            </span> 
                                        </div>
                                    </div>  
                                     <!-- 右边图标 -->
                                    <div class="icon-content"> 
                                        <i style="color:#06ba35;font-size:45px" class="iconfont iconyonghu"></i>  
                                    </div>
                            </div>
                            <div class="right-item">
                                     <!-- 左边文字 -->
                                    <div class="text-content">  
                                        <div class="text-title">总崩溃率</div>
                                        <div class="num-val">5%</div>
                                        <div>
                                            <span style="color:#999">同比</span>  
                                            <span class="percent-val">15% </span>  
                                            <span style="margin-left:8px">
                                                <i style="font-size:25px;color:#43d3c9" class="iconfont iconshangjiantou"></i>
                                            </span> 
                                        </div>
                                    </div>  
                                     <!-- 右边图标 -->
                                    <div class="icon-content"> 
                                        <i style="color:#ff5f5f;font-size:45px" class="iconfont iconbengkui"></i>  
                                    </div>
                            </div>
                              <!--下拉菜单按版本查询-->
                             <div class="Dropdown-versions">
                                    <el-dropdown trigger="click">
                                    <span class="el-dropdown-link">
                                        <i style="color:#42a4fd;font-size:18px" class="iconfont iconbanben1"></i>
                                        <span style="color:#40a3ff;font-size:18px;">按版本查询</span>    
                                        <i style="color:#42a4fd;font-size:20px" class="el-icon-arrow-down el-icon--right"></i>
                                    </span> 
                                    <el-dropdown-menu slot="dropdown">
                                        <el-dropdown-item>1.0.0.1</el-dropdown-item>
                                        <el-dropdown-item>1.0.0.2</el-dropdown-item>
                                        <el-dropdown-item>1.0.0.3</el-dropdown-item>
                                        <el-dropdown-item>1.0.0.4</el-dropdown-item>
                                        <el-dropdown-item>1.0.0.5</el-dropdown-item>
                                    </el-dropdown-menu>
                                    </el-dropdown>
                            </div>   
                        </div> 
                    </el-card>  
                </el-col>      
            </el-row>    
        </div>

        <!-- 实时统计区域 -->
        <div class="realmeasured-contain">
            <el-card shadow="hover">
                <!-- 标题和导出 -->
                <div class="title-download">
                     <div style="font-size:22px;font-weight:bold">实时统计</div>   <!-- @click="downloadTable()" :loading="downloadLoading" -->
                     <div class="download-button">
                           <i style="color:#41a5fd;font-size:30px" class="iconfont icondaochu"></i> 
                           <span style="color:#41a5fd;font-size:18px;margin-left:3px;top:-3px;position:relative;">导出</span> 
                     </div>      
                </div>
                <!-- 分割线 -->
                <div class="divider-line"></div>
                <!--基本指标-->
                <div class="basic-target">
                    <span title="基本指标">基本指标</span>
                    <el-tooltip class="item" effect="light" placement="right">
                        <div slot="content" >
                            <div style="line-height:30px">
                               这里展示截至今日上个整点时刻的各指标的当日总数据 <br>
                                <span style="color:#2196F3"> 变化率：</span>截至今日上个整点时刻的该日数据相对于昨日同时段的变化率<br>
                                <span style="color:#2196F3"> 新增用户：</span>第一次启动应用的用户（以设备为判断标准）<br>        
                                <span style="color:#2196F3">启动次数：</span>打开应用视为启动。完全退出或后台运行超过30s后再次进入应用，视为一次新启动。开发过程中可以通过setSessionContinueMillis来自定义两次启动的间隔，默认30s。<br>  
                                <span style="color:#2196F3">时段累计日活：</span>启动过应用的用户（去重），启动过一次的用户即视为活跃用户，包括新用户与老用户。这里展示的是截止到各个整点时刻的当日活跃用户<br> 
                                <span style="color:#2196F3">分时活跃用户：</span>活跃用户在24小时中的分布情况（每小时间去重）<br> 
                             </div>    
                        </div>
                             <i style="color:#19cab8;font-size:25px" class="iconfont iconjieda"></i> 
                    </el-tooltip>
                </div>   
                
                <!-- 基本指标的切换 -->
                <div class="basictarget-active-Box">
                      <div class="item">
                            <div class="text-content">  
                                <div class="text-title">新增用户（今日）</div>
                                    <div class="num-val">40</div>
                                    <div>
                                        <span style="color:#999">昨日</span>  
                                        <span class="percent-val">10% </span>  
                                        <span style="margin-left:8px">
                                        <i style="font-size:25px;color:#43d3c9" class="iconfont iconshangjiantou"></i>
                                    </span> 
                                </div>
                            </div>  
                     </div>  
                      <div class="item">
                                <div class="text-content">  
                                    <div class="text-title">启动次数（今日）</div>
                                        <div class="num-val">9,524</div>
                                        <div>
                                            <span style="color:#999">昨日</span>  
                                            <span class="percent-val">10% </span>  
                                            <span style="margin-left:8px">
                                            <i style="font-size:25px;color:#43d3c9" class="iconfont iconshangjiantou"></i>
                                        </span> 
                                    </div>
                                </div>    
                        </div>  
                      <div class="item">
                            <div class="text-content">  
                                <div class="text-title">时段累计日活（今日）</div>
                                    <div class="num-val">5,466</div>
                                    <div>
                                        <span style="color:#999">昨日</span>  
                                        <span class="percent-val">-10% </span>  
                                        <span style="margin-left:8px">
                                        <i style="font-size:25px;color:#f00" class="iconfont iconxjt"></i>
                                    </span> 
                                </div>
                            </div>       
                      </div>  
                      <div class="item">
                            <div class="text-content">  
                                <div class="text-title">分时活跃用户（今日）</div>
                                    <div class="num-val">2356</div>
                                    <div>
                                        <span style="color:#999">昨日</span>  
                                        <span class="percent-val">-10% </span>  
                                        <span style="margin-left:8px">
                                        <i style="font-size:25px;color:#f00" class="iconfont iconxjt"></i>
                                    </span> 
                                </div>
                            </div>      
                      </div>  
                </div>

                <!-- 实时统计 折线图表区域 -->
                <div class="measuredChart-chart">
                     <div id="measuredChart" style="witch:1200px;height:500px"></div> 
                     <!-- 表格详情  展开数据明细 -->
                     <div class="measuredChart-table">
                          <el-collapse accordion>
                                <el-collapse-item>
                                    <template slot="title">
                                    展开数据明细<i class="header-icon el-icon-info"></i>
                                    </template>
                                     <div>嘿嘿，我是明细的数据</div>   
                                </el-collapse-item>   
                          </el-collapse> 
                     </div>
                </div>
                



            </el-card>  
        </div>
    </div>
</template>

<script>
    export default{
        name: "userAnalysisIndex",
           data() {
             return {
                dateRangeValue:null,
                charts:"",
             }
           },
           methods:{
               //今日，近7天，近30天
               Evtactive(val){
                   alert(val)
               },
               drawlineChart(id){
                    this.charts = this.$echarts.init(document.getElementById(id));
                    this.charts.setOption({
                        title: {
                        text: ""
                        },
                        tooltip: {
                        trigger: "axis"
                        },
                        legend: {
                        bottom:0,
                        itemHeight:20,
                        padding: [
                            90,  // 上
                            0, // 右
                            0,  // 下
                            0, // 左
                        ],
                        data: [
                            "智小美",
                            "智智小店",
                            "智智物业",
                            "智小充",
                            "智智校园",
                            "单位职工"
                        ]
                        },
                        grid: {
                        left: "3%",
                        right: "4%",
                        bottom: "5%",
                        containLabel: true
                        },
                        toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                        },
                        xAxis: {
                        type: "category",
                        boundaryGap: false,
                        data: [
                            "2019-11-01",
                            "2019-11-02",
                            "2019-11-03",
                            "2019-11-04",
                            "2019-11-05",
                            "2019-11-06",
                            "2019-11-11"
                        ]
                        },
                        yAxis: {
                        type: "value"
                        },
                        series: [
                        {
                            name: "智小美",
                            type: "line",
                            stack: "总量1",
                            data: [1200, 2800, 3421, 3564, 3356, 2335, 4203]
                        },
                        {
                            name: "智智小店",
                            type: "line",
                            stack: "总量2",
                            data: [2200, 3232, 4201, 3482, 3156, 3185, 4500]
                        },
                        {
                            name: "智智物业",
                            type: "line",
                            stack: "总量3",
                            data: [2150, 3232, 4201, 3154, 3190, 2330, 3410]
                        },
                        {
                            name: "智小充",
                            type: "line",
                            stack: "总量4",
                            data: [2356, 3332, 4301, 3334, 4390, 5330, 3320]
                        },
                        {
                            name: "智智校园",
                            type: "line",
                            stack: "总量5",
                            data: [3820, 2932, 4901, 3934, 2290, 3330, 4320]
                        },
                        {
                            name: "单位职工",
                            type: "line",
                            stack: "总量6",
                            data: [3820, 4932, 3901, 3934, 4290, 3330, 3900]
                        }
                        ]
                    });
               }
           },
           mounted(){
               //图表的初始化
                this.$nextTick(function() {
                    this.drawlineChart("measuredChart");
                });
           }    
    }   
</script>


<style scoped>
    .userAnalysisIndex-Box{
        margin-left: 20px;
    }
    .userAnalysisIndex-Box .top-pagename{
        display: flex;
        justify-content: space-between;
        flex-direction: row;
        width: 90px;
        margin-top: 15px;
        font-size: 18px;
    }
    .userAnalysisIndex-Box .top-pagename .line {
        width: 5px;
        height: 25px;
        background-color: #1cb8ab;
    }
    .userAnalysisIndex-Box .button-select-Box{
        margin: 30px 0 15px 0;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 475px;
        flex-flow: nowrap;
    }
    /*用户统计 图标区*/
    .user-statistics-contain .itemflex-box{
        width: 100%;
        height: 190px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        /* border: 1px dashed #f00; */
        flex-flow: nowrap;
        align-items: center;
        position: relative;
    }
    .itemflex-box .left-item,.itemflex-box .right-item{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-flow: nowrap;
         align-items: center;
        width: 50%;
    }
    .text-content .text-title{
        font-size: 18px;
    } 
    .text-content .num-val{
        margin: 10px 0 10px 0;
        font-size: 25px;
        font-weight: bold;
    }
    .text-content .percent-val{
        color:#333333;
        font-size:18px;
        font-weight:bold;
    }
    .itemflex-box .Dropdown-versions{
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .itemflex-box .Dropdown-versions:hover{
        cursor: pointer;
    }
/*实时统计区域*/     
    .realmeasured-contain{
        margin: 20px 0 20px 0;
    }
    .realmeasured-contain .title-download{
        display: flex;
        flex-direction: row;
        justify-content:space-between;
        flex-wrap: nowrap;
        align-items: center
    }
    .title-download .download-button{
        cursor: pointer;
    }
    /* 分割线    */
    .realmeasured-contain .divider-line{
        width: 100%;
        height: 2px;
        background-color:#f5f5f5;
        margin: 20px 0 20px 0;
    }
    .realmeasured-contain .basic-target span{
        font-size: 18px;
    }
    .basic-target .iconjieda:hover{
        cursor: pointer;
    }
    .basic-target .tooltip-content{
        width:380px !important;
        line-height: 30px;
    }

    /*基本指标的切换 按钮*/ 
    .basictarget-active-Box{
        margin: 20px 0 20px 0;
        display: flex;
        flex-direction: row;
        overflow: hidden;
    }
    .basictarget-active-Box .item{
        width: 210px;
        height: 153px;
        display: flex;
        justify-content: center;
        align-items: center;
      
    }
    .basictarget-active-Box .item:hover{
        cursor:pointer;
        border:0.5px solid  #1ac9bc;
        
    }
</style>