<template>
    <div class="salescount-Box">
        <el-row :gutter="12">
            <el-col :span="8">
                <div class="top-pagename">
                    <div class="line"></div>销售统计
                </div>
            </el-col>
        </el-row>

        <!-- 销售数据统计 和 日期选择范围 -->
        <div class="head-sale-date">
                <!-- 左侧标题 -->
                <div style="margin-left:5px;font-size:22px;font-weight:bold;">
                     销售数据统计
                </div>
                <!-- 右侧日期范围 -->
                <div>
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
        </div>  

        <!-- 销售统计的图表 -->
        <div class="sale-echat-contain">
             <el-card shadow="hover">
                  <!-- select 选择控件 -->
                  <div class="select">
                       <el-select v-model="selectVal" clearable placeholder="请选择"  style="width:130px">
                        <el-option
                            v-for="item in tiemArr"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        ></el-option>
                        </el-select>
                  </div>
                <!-- 支付订单 金额的 折线图表  -->
                <div class="chart-contain">
                     <div id="payment-chart" style="width:100%;height:550px"></div>
                </div>
            </el-card>
        </div> 

        <!--数据明细表格-->
        <div class="table-Detail-contain">
            <el-card shadow="hover">
                <div class="detaildata-contain">
                    <div class="detail-data">数据明细</div> 
                    <div>
                            <el-tooltip class="item" effect="dark" content="点击按钮下载表格" placement="top">  
                                <el-button type="primary" icon="el-icon-upload2" @click="downloadTable()" :loading="downloadLoading">导出</el-button>
                            </el-tooltip>  
                    </div>
                </div>
                <!-- 表格内容 -->
                 <div class="table-contain">
                        <el-table 
                            class="deviceTerminal-table" 
                            :header-cell-style="{background:'#f5f5f5',color:'#606266'}"
                            :data="tableData"
                            style="width: 100%"
                        >
                                <el-table-column prop="key1" label="日期" width="180"  align='left'>
                                
                                </el-table-column>
                                <el-table-column prop="key2" label="销售总额" align='center'></el-table-column>
                                <el-table-column prop="key3" label="订单量"   align='center'></el-table-column>
                                <el-table-column prop="key4" label="下单人数"  align='center'></el-table-column>
                                <el-table-column prop="key5" label="客单价"   align='center'></el-table-column>
                                <el-table-column prop="key6" label="笔单价"    align='center'></el-table-column>
                                <el-table-column prop="key7" label="退款订单数"  align='center'></el-table-column>
                                <el-table-column prop="key8" label="退款金额"    align='center'></el-table-column>
                                <el-table-column prop="key9" label="平台服务费收入"    align='center'></el-table-column>
                        </el-table>

                        <!--分页控件的位置-->
                        <div class="pagination-contain"> 
                            <el-pagination
                                background=""
                                :current-page="1"
                                :page-sizes="[100, 200, 300, 400]"
                                :page-size="100"
                                layout="total, prev, pager, next, jumper,sizes"
                                :total="1000">
                            </el-pagination>
                        </div>    
                </div> 
            </el-card>
        </div>

        <!-- 前十名商家 商家的销售，和好评率 统计。 -->
        <div class="Topten-contain">
            <el-card shadow="hover">
                 <div class="title">Top10 商家</div>
                 <div class="buttongroup"> 
                      <el-button-group>
                          <el-button plain @click="EvtuserSelect('销售')">销售</el-button>
                          <el-button plain @click="EvtuserSelect('好评率')">好评率</el-button>
                      </el-button-group>
                  </div>
                <!--柱状图图表-->
                <div id="Topten" style="width:100%;height:515px"></div>
            </el-card>   
        </div>

                 

    </div>
</template>

<script>
export default {
    name:"salescount",
        data(){
            return{
                tableData:[ {key1:"2019-11-18",key2:35846,key3:35846,key4:35846,key5:35846,key6:35846,key7:35846,key8:35846,key9:35846},{key1:"2019-11-18",key2:35846,key3:35846,key4:35846,key5:35846,key6:35846,key7:35846,key8:35846,key9:35846,},{key1:"2019-11-18",key2:35846,key3:35846,key4:35846,key5:35846,key6:35846,key7:35846,key8:35846,key9:35846,} ],
                downloadLoading:false,
                dateRangeValue:null,
                selectVal:"按天",
                tiemArr:[
                    {lable:"按天",value:"按天"},{lable:"按周",value:"按周"},{lable:"按月",value:"按月"}
                ],
            }
        },
        methods:{
            EvtuserSelect(val){
                console.log(val)
            },
            downloadTable(){
                console.log("导出表格");
            },
            //渲染支付金额的折线图
            drawlineChart(id){
                let charts = this.$echarts.init(document.getElementById(id));
                charts.setOption({
                    color:["#32cec3"],
                    tooltip: {
                        show:true,
                        trigger: 'axis',
                        formatter:function(prams,index){              
                            return prams[0].name+"</br>支付订单的订单实付金额的总额="+"<span style=''>"+ prams[0].value +"</span>"
                        }
                    },
                    legend:{
                        show:true,
                        type:'plain',
                        // data:[],
                        bottom:0,
                        x:"45%",
                        data:["支付订单的订单实付金额的总额"]
                    },
                    xAxis:{
                        type: 'category',
                        data: ['2019-11-10', '2019-11-11', '2019-11-12', '2019-11-13', '2019-11-14', '2019-11-15', '2019-11-16','2019-11-17'],
                       // boundaryGap:true,  
                        axisTick: {  //刻度对齐
                            alignWithLabel: true
                        },
                    },
                    yAxis: {
                        type: 'value',
                        axisLabel:{
                            formatter: function(param){
                                return param/10000 + "万"
                            }
                        }
                    },
                    
                    series: [{
                        name:"支付订单的订单实付金额的总额",
                        symbol:'circle',     //折点设定为实心点
                        symbolSize: 17,   //设定实心点的大小
                        data:[56246,5541,3561,6889,24667,6644,88549,5456],
                        type: 'line'
                    }]
                });
                //图表自适应大小
                window.onresize = function(){
                    charts.resize();
                }    
            },
            //前十商家的销售额 好评率。图表
            drawTopten(id){
                let charts = this.$echarts.init(document.getElementById(id));
                charts.setOption({
                    color:['#19c6ca'],
                    tooltip:{
                        trigger: 'axis',
                        axisPointer:{            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    legend:{
                        data:['2019-11-04 ~~ 2019-11-11的销售额'], 
                        bottom:0,
                        x:"45%"
                    },
                    grid:{
                        left: '3%',
                        right: '4%',
                        bottom: '8%',
                        containLabel: true
                    },
                    xAxis:[
                        {
                            type : 'category',
                            data : ['李家河鲜', '李家柴火鸡', '湘妹子家常菜', '串串火锅', '福建沙县小吃', '北南羊蝎子', '扬州拉面','三品王','柳源螺蛳粉','横县鱼生'],
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
                    series : [
                        {
                            name:'2019-11-04 ~~ 2019-11-11的销售额',
                            type:'bar',
                            barWidth: '30%',
                            data:[5654, 5465, 2485, 3545, 7390, 9330, 6220,5468,2655,18795]
                        }
                    ]
                })


                //图表自适应大小
                window.onresize = function(){
                    charts.resize();
                }  
            }
        },
        mounted(){
            //图表的初始化
            this.$nextTick(function() {
                this.drawlineChart("payment-chart");
                this.drawTopten("Topten");
            });
        }
}
</script>


<style scoped>

.salescount-Box{
    margin-left:20px;
}
.salescount-Box .top-pagename {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 90px;
  margin-top: 15px;
  font-size: 18px;
}
.salescount-Box .top-pagename .line{
  width: 5px;
  height: 25px;
  background-color: #1cb8ab;
}

.salescount-Box .head-sale-date{
    width: 100%;
    height: 40px;
    margin: 20px 0 20px 0;
    display: flex;
    flex-direction: row;
    flex-flow: nowrap;
    justify-content: space-between;
    align-items: center;
    white-space: nowrap;
}

.sale-echat-contain .chart-contain{
    margin: 20px 0 20px 0;
 
}

.salescount-Box .table-Detail-contain{
     margin: 20px 0 20px 0;
}

.table-Detail-contain{}

.detaildata-contain{
  display:flex;
  flex-direction:row;
  justify-content:space-between;  
  white-space:nowrap;
}
.detaildata-contain .detail-data,.Topten-contain .title{ 
    font-size: 22px;
    font-weight: bold;
}
.table-Detail-contain .table-contain{
  margin: 30px 0 30px 0;
}

.table-Detail-contain .pagination-contain{
    display: flex;
    flex-direction: row-reverse;
    margin: 20px 0 20px 0;
}

.Topten-contain .buttongroup{
    margin: 35px 0 35px 0;
}

</style>