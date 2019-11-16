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

        <!-- 用户画像区域 -->
        <div class="Userportrait-Box">
            <el-card shadow="hover">
                 <div class="head-contain">
                        <div class="title">用户画像</div> 
                        <div class="select"><el-link type="primary">详情</el-link></div>
                 </div>
                  <!-- 分割线 -->
                  <div class="line"></div>
                   <el-row :gutter="12">
                             <!-- 左侧地图 图表部分 -->
                            <el-col :span="12">  
                            <div class="map-content">
                                <div id="map-city" style="width:100%;height:700px;background-color: #f7f7f7;"></div>
                            </div>
                            </el-col>   
                            <!-- 右侧男女 图表部分 -->
                            <el-col :span="12">
                            <div class="gender-content">
                                    <div id="gender-histogram" style="width:100%;height:700px;"></div>
                            </div>
                           </el-col>   
                    </el-row>           
    

                  
                    <el-row :gutter="12">
                        <!-- 年龄分布 -->
                        <el-col :span="12">
                            <div class="age-structure map-content">
                                     <div id="age-structure" style="width:100%;height:700px;background-color: #f7f7f7;"></div>
                            </div>
                        </el-col>
                        <!-- 用户喜好 -->
                        <el-col :span="12">
                            <div class="user-preferences map-content">
                                <div style="text-align:center;font-size:18px;font-weight: bold;">用户喜好</div>
                                <!-- 按钮组 -->
                                <div style="margin:20px 0 20px 20px">
                                    <el-button-group>
                                        <el-button plain >新增用户</el-button>
                                        <el-button plain >活跃用户</el-button>
                                        <el-button plain >累积用户</el-button>
                                    </el-button-group>
                                </div>
                                <!--玫瑰图 用户喜好图表-->
                                <div id="user-preferences" style="width:100%;height:700px">
                                    
                                </div>

                            </div>
                        </el-col>          
                    </el-row>     
            </el-card>
        </div>


    </div>
</template>

<script>
import JSON from './../../assets/province/guangxi.json';  //guangxi.json
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
               },
               //渲染城市地图图表
               deawCitymap(id){
                   
                  let echarts = this.$echarts.init(document.getElementById(id));
                  this.$echarts.registerMap('广西', JSON);
                        echarts.setOption({
                         title:{
                            show:true,
                            text:'地域分布',
                            x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                            y: 'top',
                         },
                         tooltip: {
                            show: true,
                            formatter: function(params) {
                                if (params.data){
                                    return  "城市："+params.name + '</br>用户数：' + params.data['value']
                                } 
                            },
                        },    
                        visualMap:{
                                min: 373,
                                max: 7500,
                                text:['高','低'],
                                realtime: false,
                                calculable: true,
                                inRange: {
                                    color: ['lightskyblue','yellow', 'orangered']
                                }
                            },
                        legend: {
                                orient: 'horizontal',
                                bottom: 0,
                                data: ['总数']
                        },    
                        series: [{
                            type: 'map',
                            map: '广西',
                            selectedMode:'single',
                            itemStyle:{
                                normal:{
                                    label:{
                                        show:true
                                    }
                                },
                                emphasis:{
                                    label:{
                                        show:true
                                    }
                                }
                            },
                            data:[
                                {name: '南宁市', value: 789},
                                {name: '柳州市', value: 500},
                                {name: '桂林市', value: 615},
                                {name: '梧州市', value: 4822},
                                {name: '北海市', value: 786},
                                {name: '防城港市', value: 3256},
                                {name: '钦州市', value: 2353},
                                {name: '贵港市', value: 568},
                                {name: '玉林市', value: 641},
                                {name: '百色市', value: 7000},
                                {name: '贺州市', value: 1542},
                                {name: '河池市', value: 6826},
                                {name: '来宾市', value: 5424},
                                {name: '崇左市', value: 1456},
                            ]
                        }]
                    });

                    window.onresize = function(){
                            echarts.resize();
                    }
                  
               },
               deawGender(id){
                    let echarts = this.$echarts.init(document.getElementById(id));
                    echarts.setOption( {
                           title:{
                                show:true,
                                text:'性别分布',
                                x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                                y: 'top',
                            },
                                tooltip: {
                                    trigger: 'axis',
                                    formatter:'{a}:{c}',
                                    axisPointer: {
                                        type: 'cross',
                                        crossStyle: {
                                            color: '#999'
                                        }
                                    }
                                },
                                grid: {
                                show:false,
                                top:'30',
                                bottom:'60',
                                right:'60',
                                left:'60'
                                },
                                legend: {
                                    show:true,
                                    selectedMode:'single',    //设置显示单一图例的图形，点击可切换
                                    bottom:10,
                                    left:50,
                                    textStyle:{
                                    color:'#666',
                                    fontSize:12,
                                  
                                },
                                 itemGap:20,
                                    data:['男','女','未知'],
                                     inactiveColor:'#ccc'
                                },
                                xAxis: [
                                    {
                                        type: 'category',
                                        data: ['男', '女', '未知'],
                                  
                                        axisPointer: {
                                            type: 'shadow'

                                        },
                                 
                                          axisTick: {
                                            show:false,
                                            interval: 0
                               },

                                    }
                                ],

                            //设置两个y轴，左边显示数量，右边显示概率

                                yAxis: [
                                    {
                                        type: 'value',
                            //             name: '数量',
                                        show:true,
                                       interval: 2000,
                                    },
                                    {
                                        type: 'value',
                            //             name: '概率',
                                        min: 0,
                                        max: 100,
                                        interval: 5,
                                        axisLabel: {
                                            formatter: '{value} %'
                                        }
                                    }
                                ],

                            //每个设备分数量、概率2个指标，只要让他们的name一致，即可通过，legeng进行统一的切换

                                series: [
                                    {
                                        name:'男',
                                        type:'bar',
                                        data:[6455,5800,7700],
                                        barWidth : '50%',
                                        
                                    },
                                     {
                                        name:'男',
                                        type:'line',
                                        yAxisIndex: 1,    //这里要设置哪个y轴，默认是最左边的是0，然后1，2顺序来。
                                        data:[75,65,85],
                                        symbolSize:10,
                                        itemStyle:{
                                        normal:{
                                        color:"#DDA0DD"
                                        }
                                       
                                        }
                                    },
                                    {
                                        name:'女',
                                        type:'bar',
                                        data:[5456,2564,6563],
                                        barWidth : '50%',
                                    },
                                    {
                                        name:'女',
                                        type:'line',
                                        yAxisIndex: 1,
                                        data:[20,56,58],
                                        symbolSize:10,
                                        itemStyle:{
                                        normal:{
                                        color:"#87CEFA"
                                        }
                                       
                                        }
                                    },
                                    {
                                        name:'未知',
                                        type:'bar',
                                        data:[600,570,680,650,640,600,570,
                                        450,400,380,300,900,800,700,680,650,640,],

                                        barWidth : '50%',
                                    },
                                    {
                                        name:'未知',
                                        type:'line',
                                        yAxisIndex: 1,
                                        data:[75,65,85,66,45,55,56,42,78,69,70,36,42,50,65,75,80],
                                        symbolSize:10,
                                        itemStyle:{
                                        normal:{
                                        color:"#CD5C5C"
                                        }
                                       
                                        }
                                    }
                                ]
                        });
                    window.onresize = function(){
                            echarts.resize();
                    }
               },
               //年龄分布
               deawAgeStructure(id){
                    let echarts = this.$echarts.init(document.getElementById(id));
                    echarts.setOption({
                             title:{
                                show:true,
                                text:'年龄分布',
                                x:'center',//水平安放位置，默认为'left'，可选为：'center' | 'left' | 'right' | {number}（x坐标，单位px）
                                y: 'top',
                            },
                            color: ['#3398DB'],
                            tooltip : {
                                trigger: 'axis',
                                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                                }
                            },
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis : [
                                {
                                    type : 'category',
                                    data : ['10-19岁', '20-29岁', '30-39岁', '40-49岁', '50-59岁', '60岁以上'],
                                    axisTick: {
                                        alignWithLabel: true
                                    }
                                }
                            ],
                            yAxis : [
                                {
                                    type : 'value'
                                }
                            ],
                            legend: {
                                orient: 'horizontal',  //横向
                                padding: [
                                    5,  // 上
                                    10, // 右
                                    5,  // 下
                                    10, // 左
                                ],
                                bottom:0,
                                data: ['本站','互联网']
                            },
                            series : [
                                {
                                    name:'本站',
                                    type:'bar',
                                    barWidth: '20%',
                                    data:[18, 65, 56, 45, 51,25, 33],
                                    itemStyle:{
                                        //通常情况下：
                                        normal:{  
                                            //每个柱子的颜色即为colorList数组里的每一项，如果柱子数目多于colorList的长度，则柱子颜色循环使用该数组中的颜色
                                            color: function (params){
                                                var colorList = [
                                                    '#ff7f50'
                                                    ];
                                                return colorList[params.dataIndex];
                                            },
                                            // color: '#a453f7',  //设置所有柱状图颜色
                                        }
                                    }    
                                },
                                {
                                    name:'互联网',
                                    type:'bar',
                                    barWidth: '20%',
                                    data:[56, 22, 23, 34, 54, 47, 45]
                                }
                            ]
                        }); 
                        window.onresize = function(){
                            echarts.resize();
                        }  
               },
               deawUserpreferences(id){
                   //图表自适应
                   let echarts = this.$echarts.init(document.getElementById(id));
                   echarts.setOption({
                            textStyle: {
                                //fontSize: 20,   // 调节字体大小
                                
                            },
                            title : {
                                text: '',       // 主标题名称
                                subtext: '',    // 副标题名称
                                x:'center'      // 标题的位置
                            },
                            tooltip : {
                                trigger: 'item',
                                formatter: "{a} <br/>{b} : {c} ({d}%)"
                            },
                            legend: {
                                orient: 'horizontal',         // 标签名称垂直排列
                                bottom:100,
                                x: 'center',                //标签的位置
                                               
                                data:['公务就餐','智智物业','农业补贴',
                                     '充值缴费','智智校园','游戏','其他']
                            },                              // 标签变量名称
                            toolbox: {
                                show : true,
                                feature : {
                                    mark : {show: true},
                                    dataView : {show: true,readOnly: true},
                                    magicType : {
                                        show: true,
                                        type: ['pie', 'funnel']
                                    },
                                    restore : {show: true},
                                    saveAsImage : {show: true}          // 保存图片
                                }
                            },
                            calculable : true,
                            series : [
                                {
                                    name:'面积模式',                    // 图表名称
                                    type:'pie',                         // 图表类型
                                    radius : [30, 200],                 // 图表内外半径大小
                                    center : ['50%', '40%'],            // 图表位置
                                    roseType : 'area',
                                    label: {
                                        normal: {
                                            show: true,
                                            formatter: '{b}({d}%)'      // 显示百分比
                                        }
                                    },
                                    data:[
                                        {value:180, name:'公务就餐'},           // 变量对应的具体数据
                                        {value:180, name:'智智物业'},
                                        {value:165, name:'农业补贴'},
                                        {value:151, name:'充值缴费'},
                                        {value:97, name:'智智校园'},
                                        {value:81, name:'游戏'},
                                        {value:29, name:'其他'}
                                    ]
                                }
                            ]
                        });
                        //自适应大小
                        window.onresize = function(){
                                echarts.resize();
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
                    this.deawCitymap("map-city");
                    this.deawGender("gender-histogram");
                    this.deawAgeStructure("age-structure");
                    this.deawUserpreferences("user-preferences");//用户喜好 玫瑰图
                }); 

              
           }    
    }   
    // https://gallery.echartsjs.com/editor.html?c=xY9RUiDDNe
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
    .edit-indicators-contain .line,.download-usersource-Box .line,.Userportrait-Box .line{
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
    .download-usersource-Box .head-contain,.Userportrait-Box .head-contain{
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
    .download-usersource-Box .head-contain .title,.Userportrait-Box .head-contain .title{
           font-size: 22px;
           font-weight: bold;
     }
    .download-usersource-Box .head-contain .select,.Userportrait-Box .head-contain .select{
          color:#369bf3;
          cursor: pointer;
    }   
    .download-usersource-Box .Echart-contain{
        height: 440px;
    }
    .download-usersource-Box .buttongroup-box{
        margin: 20px 0 20px 0;
    }

    /*.......用户画像区域....*/ 
    .Userportrait-Box .map-content,.Userportrait-Box .gender-content{
        width: 100%;
        height: 740px;
        border: 1px dashed #369bf3;
    }
    
</style>