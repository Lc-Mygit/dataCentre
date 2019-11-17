<template>
  <div class="downloadCount-Box">
    <el-row :gutter="12">
        <el-col :span="8">
          <div class="top-pagename">
            <div class="line"></div>下载渠道
          </div>
        </el-col>
      </el-row>
      <el-row>
        <div class="channel-table">渠道列表</div>
      </el-row>

      <!--日期和select下拉-->
          <div class="row-gutter">  
              <div> 
                    <el-date-picker
                      style="width:240px"
                      v-model="dateRangeValue"
                      type="daterange"
                      range-separator="至"
                      start-placeholder="开始日期"
                      end-placeholder="结束日期"
                      value-format="yyyy-MM-dd"
                    ></el-date-picker>
              </div>
            
              <div> 
                  <el-select v-model="selectChannelVal" clearable placeholder="请选择" style="width:135px">
                      <el-option
                        v-for="item in channelArr"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      ></el-option>
                  </el-select>
              </div>
        </div>
        
        <!-- 图表区域 -->
        <div class="Chart-box">
              <el-card shadow="hover" style="margin-top:15px">
                  <div class="head-contain">
                      <div class="title">下载渠道</div>
                      <div class="select">
                           <el-select v-model="selectChannelVal" clearable placeholder="请选择" style="width:135px">
                              <el-option
                                v-for="item in channelArr"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              ></el-option>
                          </el-select>
                      </div>
                  </div>
                  <!-- 按钮组合 区域 -->
                   <div class="Button-group">
                    <el-button-group>
                      <el-button plain @click="EvtuserSource('新增用户')">新增用户</el-button>
                      <el-button plain @click="EvtuserSource('活跃用户')">活跃用户</el-button>
                      <el-button plain @click="EvtuserSource('启动次数')">启动次数</el-button>
                      <el-button plain @click="EvtuserSource('平均单次使用时长')">平均单次使用时长</el-button>
                      <el-button plain @click="EvtuserSource('平均单日使用时长')">平均单日使用时长</el-button>
                      <el-button plain @click="EvtuserSource('用户留存率')">用户留存率</el-button>
                    </el-button-group>
                  </div>
                  <!-- 图表内容区域 -->
                  <div class="chart-contain">
                        <div id="chartdata" style="width:100%;height:600px"></div>
                  </div>
              </el-card>
        </div>
        <!-- 表格区域 -->
        <div class="table-box">
            <el-card shadow="hover" style="margin-top:15px">
                <div class="tableBox-head">
                    <!-- 左边区域 -->
                    <div class="left-contain">  
                          <el-select v-model="selectChannelVal" clearable placeholder="请选择" style="width:135px">
                              <el-option
                                v-for="item in versionsArr"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                              ></el-option>
                          </el-select>

                    </div>
                    <!-- 右边区域 -->
                    <div class="right-contain"> 
                             <el-button-group>
                                <el-button plain @click="LatestTimeDate('今日')">今日</el-button>
                                <el-button plain @click="LatestTimeDate('近7天')">近7天</el-button>
                                <el-button plain @click="LatestTimeDate('近30天')">近30天</el-button>
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
                              <!--导出-->
                            <el-tooltip class="item" effect="dark" content="点击按钮下载表格" placement="top">  
                                <el-button type="primary" icon="el-icon-upload2" @click="downloadTable()" :loading="downloadLoading">导出</el-button>
                            </el-tooltip>  
                    </div>
                </div>
                       <!-- 表格内容区域 -->
                      <div class="table-contain">
                            <el-table 
                               class="download-table" 
                              :header-cell-style="{background:'#f5f5f5',color:'#606266'}"
                              :data="tableData"
                              style="width: 100%"
                              :default-sort="{prop:'cumulative', order: 'descending'}"
                            >
                              <el-table-column prop="name" label="渠道名称" sortable width="180"  align='left'>
                                   <template slot-scope="scope">
                                     <span style="color:#38ccbe">{{scope.row.name}}</span>
                                  </template>
                              </el-table-column>

                              <el-table-column prop="newUsers" label="新增用户" sortable width="180" align='center'></el-table-column>
                              <el-table-column prop="activeUser" label="活跃用户"  sortable align='center'></el-table-column>

                                <el-table-column prop="startCount" label="启动次数" sortable width="180" align='center'></el-table-column>
                                <el-table-column prop="firstStart" label="平均单次使用时长" sortable width="180" align='center'></el-table-column>
                                <el-table-column prop="dayUse" label="平均单日使用时长"  sortable align='center'></el-table-column>
                                <el-table-column prop="cumulative" label="累计用户%"  sortable  align='center'></el-table-column>
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
  name: "downloadCount",
  data() {
    return {
      downloadLoading:false,
      versionsVal:"全部版本", //select 版本的值
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
     selectChannelVal:"全部渠道",
     dateRangeValue:null,
     channelArr:[
        {
          value: "全部渠道",
          label: "全部渠道"
        },
        {
          value: "App store",
          label: "App store"
        },
        {
          value: "华为应用市场",
          label: "华为应用市场"
        },
        {
          value: "官网",
          label: "官网"
        },
        {
          value: "二维码下载",
          label: "二维码下载"
        },
        {
          value: "用户分享",
          label: "用户分享"
        },
        {
          value: "单位邀请码",
          label: "单位邀请码"
        }
     ],  
     tableData: [
              {
                //表格的排序数据
                name: "App store",
                newUsers:62,
                activeUser:"2,292",
                startCount:"19,899", 
                firstStart:"00:00:22",
                dayUse:"00:00:22",
                date: "2016-05-02",
                cumulative : "3,639(100%)"
              },
              {
                name: "华为应用市场",
                newUsers:62,
                activeUser:"2,292",
                startCount:"19,899", 
                firstStart:"00:00:22",
                dayUse:"00:00:22",
                date: "2016-05-02",
                cumulative : "3,639(100%)"
              },
              {
                name: "官网",
                newUsers:62,
                activeUser:"2,292",
                startCount:"19,899", 
                firstStart:"00:00:22",
                dayUse:"00:00:22",
                date: "2016-05-02",
                cumulative : "3,639(100%)"
              },
              {
                name: "二维码下载",
                newUsers:62,
                activeUser:"2,292",
                startCount:"19,899", 
                firstStart:"00:00:22",
                dayUse:"00:00:22",
                date: "2016-05-02",
                cumulative : "3,639(100%)"
              },
              {
                name: "用户分享",
                newUsers:62,
                activeUser:"2,292",
                startCount:"19,899", 
                firstStart:"00:00:22",
                dayUse:"00:00:22",
                date: "2016-05-02",
                cumulative : "3,639(100%)"
              },
              {
                name: "单位邀请码",
                newUsers:62,
                activeUser:"2,292",
                startCount:"19,899", 
                firstStart:"00:00:22",
                dayUse:"00:00:22",
                date: "2016-05-02",
                cumulative : "3,639(100%)"
              }
     ],
          charts:"", //存储 图表元素的id
    };
  },
  watch:{
    "dateRangeValue":function(){
      console.log(this.dateRangeValue,"日期范围监听");
    }
  },
  methods:{  
    //导出excel文件
    downloadTable(){
      
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let name = year + "" + month + "" + day; 
      //选中要导出的表格  
        let wb = XLSX.utils.table_to_book(document.querySelector(".download-table"));  
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
    //选择日期， 今日 ，近7天，近30天
    LatestTimeDate(val){

    },
    //按钮区域的组合
    EvtuserSource(text){

    },
    //渲染图表
    drawlineChart(id){
      this.charts = this.$echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
         // text: "下载渠道折线图统计"
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
            "App store",
            "华为应用市场",
            "官网",
            "二维码下载",
            "用户分享",
            "单位职工",
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
            name: "App store",
            type: "line",
            stack: "总量1",
            data: [1200, 2800, 3421, 3564, 3356, 2335, 4203]
          },
          {
            name: "华为应用市场",
            type: "line",
            stack: "总量2",
            data: [2200, 3232, 4201, 3482, 3156, 3185, 4500]
          },
          {
            name: "官网",
            type: "line",
            stack: "总量3",
            data: [2150, 3232, 4201, 3154, 3190, 2330, 3410]
          },
          {
            name: "二维码下载",
            type: "line",
            stack: "总量4",
            data: [2356, 3332, 4301, 3334, 4390, 5330, 3320]
          },
          {
            name: "用户分享",
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
      //自适应大小
        let _this = this;
        window.onresize = function(){
              _this.charts.resize();
        }   
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
.downloadCount-Box {
  margin-left: 20px;
}
.downloadCount-Box .top-pagename {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 90px;
  margin-top: 15px;
  font-size: 18px;
}
.downloadCount-Box .top-pagename .line {
  width: 5px;
  height: 25px;
  background-color: #1cb8ab;
}
.downloadCount-Box .channel-table{
  margin: 40px 0 10px 5px;
  font-size: 22px;
  font-weight: bold;
}
.row-gutter{
  width: 400px;
  height:40px;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
}

.Chart-box .head-contain{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.Chart-box .Button-group{
  margin: 25px 0 25px 0;
}

.head-contain .title{
    font-size: 22px;
    font-weight: bold;
}

/* 表格区域 */ 
.table-box .tableBox-head{
   display:flex;
   flex-direction:row;
   justify-content:space-between; 
   height: 40px;
   width: 100%;  
   white-space:nowrap;
}

.table-box .table-contain{
    margin-top: 25px;
}



</style>
