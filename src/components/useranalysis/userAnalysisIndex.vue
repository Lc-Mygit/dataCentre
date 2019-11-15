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
                     <div id="measuredChart" style="witch:100%;height:500px"></div> 
                     <!-- 表格详情  展开数据明细 -->
                     <div class="measuredChart-table">
                          <el-collapse accordion>
                                <el-collapse-item>
                                    <template slot="title">
                                        <span style="color: rgb(33, 150, 243);font-size: 17px;">展开数据明细</span>  
                                    </template>
                                     <div class="inner-table-box">
                                        <el-table  
                                            class="detail-table"
                                            :header-cell-style="{background:'#f5f5f5',color:'#606266'}"
                                            :data="detailTableArr"
                                            style="width: 100%"
                                           
                                            border
                                        >
                                         <!-- v-loading="true" -->
                                            <el-table-column prop="key1" label="日期"   align='left'></el-table-column>
                                            <el-table-column prop="key2" label="新增用户"   align='center'></el-table-column>
                                            <el-table-column prop="key3" label="启动次数"   align='center'></el-table-column>
                                            <el-table-column prop="key4" label="累计日活"   align='center'></el-table-column>
                                            <el-table-column prop="key5" label="活跃用户"  align='center'></el-table-column>
                                            <!-- <el-table-column prop="key6" label="新增销售额（元）"   align='center'></el-table-column>
                                            <el-table-column prop="key7" label="销售总额（元）"    align='center'></el-table-column>
                                            <el-table-column prop="key8" label="增长率（销售额）"    align='center'></el-table-column>
                                            <el-table-column prop="key9" label="新增提现（元）"    align='center'></el-table-column>
                                            <el-table-column prop="key10" label="提现总额（元）"    align='center'></el-table-column> -->
                                        </el-table>   
                                            <!-- 分页控件 -->
                                        <div class="pagination-box"> 
                                                <el-pagination
                                                    background
                                                    :page-sizes="[10, 20, 30, 40]"
                                                    layout="total, prev, pager, next"
                                                    :total="1000">
                                                </el-pagination> 
                                        </div> 
                                    </div>   
                                </el-collapse-item>   
                          </el-collapse>           
                         <!-- 日期选择范围 控件 -->
                         <div class="datepicker-right"> 
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


                     </div>
                </div>
            </el-card>
        </div>
        <!-- 编辑指标 表区域 -->
        <div class="edit-indicators-contain">
            <el-card shadow="hover">
                <div class="head-indicators">
                      <div style="margin-left:20px">
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
                      <div>
                          <span style="color:#3799f4;font-size:17px;cursor:pointer;">编辑指标</span>  
                      </div>
                </div>
    
                <!-- 分割线 -->
                <div class="line"></div>
                
                <!-- 按钮组区域 -->
                <div class="button-group">
                        <div class="button-item button-active">新增用户</div> 
                        <div class="button-item">活跃用户</div>  
                        <div class="button-item">累计用户</div>
                        <div class="button-item">用户留存率</div>
                        <div class="button-item">启动次数</div>
                        <div class="button-item">崩溃数</div>
                        <div class="button-item">崩溃率</div>
                        <div class="button-item">沉默用户</div>
                </div>
                <!-- 新增用户 图表区域 -->
                <div class="Add-userChart">
                    <div id="adduserChart" style="100%;height:500px"></div>
                    <!--表格详情  展开数据明细 -->
                    <el-collapse accordion>
                                <el-collapse-item>
                                    <template slot="title">
                                        <span style="color: rgb(33, 150, 243);font-size: 17px;">展开数据明细</span>  
                                    </template>
                                     <div class="inner-table-box">
                                        <el-table  
                                            class="detail-table"
                                            :header-cell-style="{background:'#f5f5f5',color:'#606266'}"
                                            :data="detailTableArr"
                                            style="width: 100%"
                                           
                                            border
                                        >
                                         <!-- v-loading="true" -->
                                            <el-table-column prop="key1" label="日期"   align='center'></el-table-column>
                                            <el-table-column prop="key2" label="新增用户"   align='center'></el-table-column>
                                            <el-table-column prop="key3" label="活跃用户"   align='center'></el-table-column>
                                            <el-table-column prop="key4" label="累计用户"   align='center'></el-table-column>
                                            <el-table-column prop="key5" label="用户留存率"  align='center'></el-table-column>
                                            <el-table-column prop="key2" label="启动次数"   align='center'></el-table-column>
                                            <el-table-column prop="key4" label="崩溃数"    align='center'></el-table-column>

                                            <!-- <el-table-column prop="key8" label="增长率（销售额）"    align='center'></el-table-column>
                                            <el-table-column prop="key9" label="新增提现（元）"    align='center'></el-table-column>
                                            <el-table-column prop="key10" label="提现总额（元）"    align='center'></el-table-column>  -->
                                        </el-table>   
                                            <!-- 分页控件 -->
                                        <div class="pagination-box"> 
                                                <el-pagination
                                                    background
                                                    :page-sizes="[10, 20, 30, 40]"
                                                    layout="total, prev, pager, next"
                                                    :total="1000">
                                                </el-pagination> 
                                        </div> 
                                    </div>   
                                </el-collapse-item>   
                        </el-collapse>              
                </div>
            </el-card>  
        </div>   

        <!-- 下载渠道和用户来源的--区域 -->
        <div class="download-usersource-Box">
            <el-row :gutter="12">
                <!--下载渠道图表-->
                <div class="download-content">
                    <el-col :span="12">
                        <el-card shadow="hover">
                            <div class="head-contain">
                                <div class="title">下载渠道</div> 
                                <div class="select"><el-link type="primary">详情</el-link></div>
                            </div>
                            <!-- 分割线 -->
                            <div class="line"></div>
                            <div class="Echart-contain">
                                 <!-- 下载渠道图表 Echart -->
                                 <div id="deawDownloadChart" style="width:100%;height:400px"></div>

                            </div>
                        </el-card>   
                    </el-col>
                </div>
                <!--用户来源-->
                <div class="userSource-content">
                    <el-col :span="12">
                        <el-card shadow="hover">   
                             <div class="head-contain">
                                <div class="title">用户来源</div>
                                <div class="select"> 详情 </div>
                             </div>
                            <!-- 分割线 -->
                            <div class="line"></div>
                            <div class="Echart-contain">
                                    <div class="buttongroup-box">
                                         <el-button-group>
                                            <el-button plain>新增用户</el-button>
                                            <el-button plain>活跃用户</el-button>
                                            <el-button plain>累计用户</el-button>
                                        </el-button-group>
                                    </div>
                                    <div id="userSourcechart" style="width:100%;height:400px;"></div>
                                   
                            </div>
                        </el-card>   
                    </el-col>
                </div>
            </el-row>   
             
        </div>

    </div>
</template>

<script>
    export default{
        name: "userAnalysisIndex",
           data() {
             return {
                 Sourcecharts:"",
                detailTableArr:[
                    {key1:"2019-11-11",key2:256,key3:5423,key4:6203,key5:8956},
                    {key1:"2019-11-12",key2:256,key3:5423,key4:6203,key5:8956},
                    {key1:"2019-11-13",key2:256,key3:5423,key4:6203,key5:8956},
                    {key1:"2019-11-14",key2:256,key3:5423,key4:6203,key5:8956},
                    {key1:"2019-11-15",key2:256,key3:5423,key4:6203,key5:8956},    
                    {key1:"2019-11-16",key2:256,key3:5423,key4:6203,key5:8956},      
                    {key1:"2019-11-17",key2:256,key3:5423,key4:6203,key5:8956},        
                ],
                dateRangeValue:null,
                charts:"",
             }
           },
           methods:{
               //今日，近7天，近30天
               Evtactive(val){
                   alert(val)
               },
               //图表
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
                     //自适应
                    window.onresize = function () {
                        charts.resize();
                    }
               },
               //新增用户图表
               deawAddUser(id){
                     let charts = this.$echarts.init(document.getElementById(id));
                     charts.setOption(  
                        {
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
                                "新增用户"
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
                                name: "新增用户",
                                type: "line",
                                stack: "总量1",
                                data: [45, 65, 85, 68, 26, 31, 57],
                                symbolSize: 20,   //设定实心点的大小
                                itemStyle : {  
                                    normal : {  
                                        color:'#19c9be',  
                                        lineStyle:{  
                                            color:'#19c9be'  
                                        }  
                                    }  
                               },  
                            },
                        ]
    
                    });
                    //自适应
                    window.onresize = function(){
                        charts.resize();
                    }
               },
               //下载渠道的图表
               deawDownload(id){
                   let charts = this.$echarts.init(document.getElementById(id));
                   charts.setOption( {
                            tooltip: {
                                trigger: 'item',
                                formatter: "{a} <br/>{b}: {c} ({d}%)"
                            },
                            legend: {
                                orient: 'vertical',
                                x: 'left',
                                data:['官网下载','华为Store','扫码下载','用户分享','ios Store']
                            },
                            series: [
                                {
                                    name:'访问来源',
                                    type:'pie',
                                    radius: ['50%', '70%'],
                                    avoidLabelOverlap: false,
                                    label: {
                                        normal: {  
                      
                                            show: true,
                                            position: 'outside'
                                        },
                                        emphasis: {
                                            show: true,
                                            textStyle: {
                                                fontSize: '30',
                                                fontWeight: 'bold'
                                            }
                                        }
                                    },
                                    labelLine: {
                                        normal: {
                                            show: true
                                        }
                                    },
                                    data:[
                                        {value:335, name:'官网下载'},
                                        {value:310, name:'华为Store'},
                                        {value:234, name:'扫码下载'},
                                        {value:135, name:'用户分享'},
                                        {value:1548, name:'ios Store'}
                                    ]
                                }
                            ]
                        });
                        window.onresize = function () {
                            charts.resize();
                        }
               },
               //用户来源
               deawUserSource(id){
                     this.Sourcecharts = this.$echarts.init(document.getElementById(id));
                     this.Sourcecharts.setOption( {
                            title : {
                                text: '',
                                subtext: '',
                                x:'center'
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient: 'vertical',
                                left: 'left',
                                data: ['智智小店','智小美','单位端','智小充','智智物业']
                            },
                            series : [
                                {
                                    name: '访问来源',
                                    type: 'pie',
                                    radius : '55%',
                                    center: ['50%', '60%'],
                                    data:[
                                        {value:335, name:'智智小店'},
                                        {value:310, name:'智小美'},
                                        {value:234, name:'单位端'},
                                        {value:135, name:'智小充'},
                                        {value:1548, name:'智智物业'}
                                    ],
                                    itemStyle: {
                                        emphasis: {
                                            shadowBlur: 10,
                                            shadowOffsetX: 0,
                                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                                        }
                                    }
                                }
                            ]
                        });
                        window.onresize = function () {
                            this.Sourcecharts.resize();
                        }
               }
           },
           mounted(){
               //图表的初始化
                this.$nextTick(function(){
                    this.drawlineChart("measuredChart");
                    this.deawAddUser("adduserChart");
                    this.deawDownload("deawDownloadChart");
                    this.deawUserSource("userSourcechart");  
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
    .measuredChart-table{
        margin: 50px 0 30px 0;
        position: relative;
    }

    .measuredChart-table .datepicker-right{
        position: absolute;
        right: 0;
        /* transform: translateY(-50%); */
        top: 5px;
    }
    
    .measuredChart-table .inner-table-box,.edit-indicators-contain .inner-table-box{
        position: relative;
        padding-bottom: 60px
    }
    .measuredChart-table .pagination-box,.edit-indicators-contain .pagination-box{
        position: absolute;
        right: 0;
        bottom: 0;
    }

    /*编辑指标区域  .edit-indicators-contain{  }*/     
   
    .edit-indicators-contain .head-indicators{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-flow: nowrap;
    }
    .edit-indicators-contain .line,.download-usersource-Box .line{
        width: 100%;
        height: 1px;
        background-color: #f5f5f5;
        margin: 25px 0 25px 0;
    } 
    .edit-indicators-contain .button-group{
        width: 1248px;
        height: 48px;
        display: flex;
        flex-direction: row;
        flex-flow: nowrap;
    }
    .edit-indicators-contain .button-group .button-item{
        width: 157px;
        height: 100%;
        line-height: 48px;
        text-align: center;
        border: 1px solid #c5c5c5;
        cursor: pointer;
        color: #333333;
    }
    .button-active{
        border: 1px solid #4ccec4 !important;
        color: #4ccec4 !important;
    }
    .edit-indicators-contain .Add-userChart{
        margin: 30px 0 30px 0;
    }
/* <!-- 下载渠道和用户来源的--区域 --> */
    .download-usersource-Box{
        margin: 20px 0 20px 0;
    }
    .download-usersource-Box .head-contain{
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-orient: horizontal;
            -webkit-box-direction: normal;
            -ms-flex-direction: row;
            flex-direction: row;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            flex-flow: nowrap;
    }
    .download-usersource-Box .head-contain .title{
           font-size: 22px;
           font-weight: bold;
     }
    .download-usersource-Box .head-contain .select{
          color:#369bf3;
          cursor: pointer;
    }   
    .download-usersource-Box .Echart-contain{
        height: 440px;
    }
    .download-usersource-Box .buttongroup-box{
        margin: 20px 0 20px 0;
    }
</style>