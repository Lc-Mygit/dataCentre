<template>
  <div class="deviceTerminal-Box">
      <el-row :gutter="12">
        <el-col :span="8">
          <div class="top-pagename">
            <div class="line"></div>设备终端
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div class="channel-table">设备终端</div>
      </el-row>

      <!-- 按钮和下拉选项组合 区域 -->
      <div class="button-select-Box">
             <!-- 左侧按钮  -->
            <div class="button-left">
                 <el-button-group>
                      <el-button plain @click="Evtactive('机型')">机型</el-button>
                      <el-button plain @click="Evtactive('分辨率')">分辨率</el-button>
                      <el-button plain @click="Evtactive('操作系统')">操作系统</el-button>
                  </el-button-group>

            </div>
             <!-- 右侧下拉选择  -->
            <div class="select-right">
                  <!-- 版本select -->
                 <el-select v-model="versionsVal" clearable placeholder="请选择"  style="width:130px">
                    <el-option
                      v-for="item in versionsArr"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>
                  
                  <!-- 来源select-->
                  <el-select v-model="sourceVal" clearable placeholder="请选择"  style="width:130px">
                      <el-option
                        v-for="item in sourceArr"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                  </el-select>
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

      <!-- top机型  图表区域 -->
      <div class="toptype-chart-Box">
           <el-card shadow="hover">
              <div class="top-title">{{chartTitle}}</div>
              <!-- 图表按钮组 -->
              <div class="chart-group-contain">
                    <el-button-group>
                      <el-button plain @click="ChartButton('新增用户')">新增用户</el-button>
                      <el-button plain @click="ChartButton('活跃用户')">活跃用户</el-button>
                  </el-button-group>
              </div> 

              <!-- 柱状直方图 -->
              <div class="Bar-Chart-contain">
                  <div id="chartdata" style="width:1200px;height:530px"></div>
              </div>

           </el-card>    
      </div> 
      <!-- 表格区域 -->
      <div class="Table-box">
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
                              :default-sort="{prop:'cumulative', order: 'descending'}"
                            >
                              <el-table-column prop="name" label="机型" width="180"  align='left'>
                                   <!-- <template slot-scope="scope">
                                     <span style="color:#38ccbe">{{scope.row.name}}</span>
                                  </template> -->
                              </el-table-column>

                              <el-table-column prop="newUsers" label="新增用户"  width="180" align='center'></el-table-column>
                              <el-table-column prop="activeUser" label="新增用户占比"   align='center'></el-table-column>

                                <el-table-column prop="startCount" label="启动次数"  width="180" align='center'></el-table-column>
                                <el-table-column prop="firstStart" label="启动次数占比"  width="180" align='center'></el-table-column>
                                <el-table-column prop="cumulative" label="崩溃率%"    align='center'></el-table-column>
                          </el-table>
              </div>

          </el-card>
      </div>
  </div>
</template>    

<script>

//引入导出Excel文件的依赖。
import FileSaver from "file-saver";
import XLSX from "xlsx";

export default {
  name: "deviceTerminal",
  data() {
    return{ 
        tableData:[
            {
                name: "小米8",
                newUsers:62,
                activeUser:"19.92%",
                startCount:"19,899", 
                firstStart:"20.68%",
                dayUse:"00:00:22",
                date: "2016-05-02",
                cumulative : "26%"
            },
            {
              name: "小米8",
              newUsers:62,
              activeUser:"19.92%",
              startCount:"19,899", 
              firstStart:"20.68%",
              dayUse:"00:00:22",
              date: "2016-05-02",
              cumulative : "26%"
            },
            {
              name: "小米8",
              newUsers:62,
              activeUser:"19.92%",
              startCount:"19,899", 
              firstStart:"20.68%",
              dayUse:"00:00:22",
              date: "2016-05-02",
              cumulative : "26%"
            },
            {
              name: "小米8",
              newUsers:62,
              activeUser:"19.92%",
              startCount:"19,899", 
              firstStart:"20.68%",
              dayUse:"00:00:22",
              date: "2016-05-02",
              cumulative : "26%"
            },
            {
              name: "小米8",
              newUsers:62,
              activeUser:"19.92%",
              startCount:"19,899", 
              firstStart:"20.68%",
              dayUse:"00:00:22",
              date: "2016-05-02",
              cumulative : "26%"
            },
            {
              name: "小米8",
              newUsers:62,
              activeUser:"19.92%",
              startCount:"19,899", 
              firstStart:"20.68%",
              dayUse:"00:00:22",
              date: "2016-05-02",
              cumulative : "26%"
            },
            {
              name: "小米8",
              newUsers:62,
              activeUser:"19.92%",
              startCount:"19,899", 
              firstStart:"20.68%",
              dayUse:"00:00:22",
              date: "2016-05-02",
              cumulative : "26%"
            },
        ],
        downloadLoading:false,
        chartTitle:"Top 机型",
        dateRangeValue:null,
        versionsVal:"全部版本",
        sourceVal:"全部来源",
        //版本数据
        versionsArr:[
            {
              value: "全部版本",
              label: "全部版本"
            },
            {
              value: "1.0.0.1",
              label: "1.0.0.1"
            },
            {
              value: "1.0.0.3",
              label: "1.0.0.3"
            },
            {
              value: "1.0.0.4",
              label: "1.0.0.4"
            },
        ],
        sourceArr:[
              {
                value: "全部来源",
                label: "全部来源"
              },
              {
                value: "智小美",
                label: "智小美"
              },
              {
                value: "智智小店",
                label: "智智小店"
              },
              {
                value: "单位职工",
                label: "单位职工"
              },
              {
                value: "智智物业",
                label: "智智物业"
              },
              {
                value: "智小充",
                label: "智小充"
              },
              {
                value: "智智校园",
                label: "智智校园"
              }
        ],
    };
  },
  methods:{
    //导出表格 Excel文件
    downloadTable(){
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let name = year + "" + month + "" + day; 
      //选中要导出的表格  
        let wb = XLSX.utils.table_to_book(document.querySelector(".deviceTerminal-table"));  
      //获取二进制输出
        let wbout = XLSX.write(wb,{
          bookType: "xlsx",
          bookSST: true,
          type: "array"
        });
        try{  
            //name(当前时间)+'.xlsx'表示导出的excel表格名字
            FileSaver.saveAs(
               new Blob([wbout], { type: "application/octet-stream"}),
               name + ".xlsx",
            );
           
        }catch (e) {
          if (typeof console !== "undefined") console.log(e, wbout);
        }
    },    
    //新增用户  活跃用户
    ChartButton(val){
      console.log(val)
    },
    //切换 机型，分辨率，操作系统
    Evtactive(val){
      console.log(val)
    },
    //柱状图  Top 手机机型
    drawlineChart(id){
        let charts = this.$echarts.init(document.getElementById(id));
        charts.setOption(
           {
             color: ['#19c5cd'],
                tooltip : {
                    trigger:'axis',
                    axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                        type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    }
                },
                grid:{
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                xAxis:[
                    {
                        type : 'category',
                        data : ['iPhone X', 'iPhone7 Plus','iPhone XR', 'iPhone7', 'iPhone XS Max', 'iPhone 6s','iPhone8 Plus','iPhone8','iPhone6s Plus','iPhone12,5'],
                        axisTick: {
                            alignWithLabel: true
                        },
                        boundaryGap: true,
                        axisLabel:{
                            interval:0,  
                            rotate:30, 
                        }
                   
                    }
                ],
                //底部的说明 描述
                legend:{
                    // bottom:0,
                    // itemHeight:20,
                    padding:[
                        90,  // 上
                        0, // 右
                        0,  // 下
                        0, // 左
                    ],
                    // data:[
                    //   "智小美",
                    //   "智智小店",
                    //   "智智物业",
                    //   "智小充",
                    //   "智智校园",
                    //   "单位职工"
                    // ]
                    bottom: 10,
                    left: 'center',
                    data: ['2019-11-1~2019-11-13 新增用户']
                },
                yAxis:[   
                        {  
                          type: 'value',  
                          axisLabel: {  
                              show: true,  
                              interval: 'auto',  
                              formatter: '{value} %'  
                          },  
                          show: true,
                          splitLine :{    //网格线
                              lineStyle:{
                                  type:'dashed'    //设置网格线类型 dotted：虚线   solid:实线
                              },
                              show:true //隐藏或显示
                          }
  
                        }  
                ],
                series : [
                    {
                        type:'bar',
                        barWidth: '30%',
                          itemStyle: {
                            normal: {
                              label: {
                                show: true,
                                position: 'top',//数据在中间显示
                                formatter:'{c}%'//百分比显示
                              }
                            }
                          },
                        data:[11,12,14,15,31,15,5,19,15.8,20]
                    }
                ] 
           });
    }
  },
  mounted(){
     //图表的初始化
      this.$nextTick(function() {
        this.drawlineChart("chartdata");
      });
  }

};
</script>

<style scoped>

.deviceTerminal-Box {
  margin-left: 20px;
}
.deviceTerminal-Box .top-pagename {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 90px;
  margin-top: 15px;
  font-size: 18px;
}
.deviceTerminal-Box .top-pagename .line {
  width: 5px;
  height: 25px;
  background-color: #1cb8ab;
}
.deviceTerminal-Box .tableChart {
  margin: 20px 0 20px 0;
}
.deviceTerminal-Box .channel-table {
  /* margin-top: 40px;
         margin-bottom: 10px; */
  margin: 40px 0 10px 5px;
  font-size: 22px;
  font-weight: bold;
}

.button-select-Box{
  display:flex;
  flex-direction: row;
  justify-content: space-between;
  height: 40px;
  white-space:nowrap;
  margin: 10px 0 20px 0;
}
.toptype-chart-Box .top-title{
    font-size: 22px;
    font-weight: bold;
}
.chart-group-contain{
  margin: 25px 0 25px 0;
}
.deviceTerminal-Box .Table-box{
 margin: 25px 0 25px 0;
}
.detaildata-contain{
  display:flex;
  flex-direction:row;
  justify-content:space-between;  
  white-space:nowrap;
}
.detaildata-contain .detail-data{
    font-size: 22px;
    font-weight: bold;
}
.Table-box .table-contain{
  margin: 30px 0 30px 0;
}

</style>
