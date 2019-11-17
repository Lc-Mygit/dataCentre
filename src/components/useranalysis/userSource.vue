<template>
  <div class="userSource-Box">
    <el-row :gutter="12">
      <el-col :span="8">
        <div class="top-pagename">
          <div class="line"></div>用户来源
        </div>
      </el-col>
    </el-row>

    <el-row>
      <div class="channel-table">渠道列表</div>
    </el-row>

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

    <!-- 用户来源图表区域 -->
    <div class="userSourceChart-Box">
      <el-row>
        <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24">
          <el-card shadow="hover" style="margin-top:15px">
            <div class="userSource-title">用户来源</div>
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
            <div class="echart-Box">
              <div id="chartdata" style="width:100%;height:600px"></div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
    <!-- 表格统计区域 -->
    <div class="table-Box">
      <el-card shadow="hover">
        <el-row :gutter="10" type="flex" justify="space-between">
          <el-col :span="2" :xs="10" :sm="12" :md="6" :lg="2">
            <el-select v-model="selectTableVal" clearable placeholder="请选择"  style="width:130px">
              <el-option
                v-for="item in channelArr"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </el-col>
          <!-- 今日，近七天，近30天 -->
          <el-col :span="12" :xs="20" :sm="20" :md="16" :lg="12">
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
            <el-button type="primary" icon="el-icon-upload2" @click="downloadTable()" :loading="downloadLoading">导出</el-button>
          
          </el-col>
        </el-row>
        <!-- 表格内容区域 -->
        <div class="table-contain">
          <el-row>
              <el-table 
                class="Usertable"
                :header-cell-style="{background:'#f5f5f5',color:'#606266'}"
                :data="tableData"
                style="width: 100%"
                :default-sort="{prop:'cumulative', order: 'descending'}"
              >
                <el-table-column prop="name" label="渠道名称" sortable width="120"  align='left'>
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
            </el-row>  
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
  name: "userSource",
  data() {
    return {
      downloadLoading:false,
      tableData: [
        {
          //表格的排序数据
          name: "智小美",
          newUsers:62,
          activeUser:"2,292",
          startCount:"19,899", 
          firstStart:"00:00:22",
          dayUse:"00:00:22",
          date: "2016-05-02",
          cumulative : "3,639(100%)"
        },
        {
          name: "智智小店",
          newUsers:62,
          activeUser:"2,292",
          startCount:"19,899", 
          firstStart:"00:00:22",
          dayUse:"00:00:22",
          date: "2016-05-02",
          cumulative : "3,639(100%)"
        },
        {
          name: "单位职工",
          newUsers:62,
          activeUser:"2,292",
          startCount:"19,899", 
          firstStart:"00:00:22",
          dayUse:"00:00:22",
          date: "2016-05-02",
          cumulative : "3,639(100%)"
        },
        {
          name: "智智物业",
          newUsers:62,
          activeUser:"2,292",
          startCount:"19,899", 
          firstStart:"00:00:22",
          dayUse:"00:00:22",
          date: "2016-05-02",
          cumulative : "3,639(100%)"
        },
        {
          name: "智小充",
          newUsers:62,
          activeUser:"2,292",
          startCount:"19,899", 
          firstStart:"00:00:22",
          dayUse:"00:00:22",
          date: "2016-05-02",
          cumulative : "3,639(100%)"
        },
        {
          name: "智智校园",
          newUsers:62,
          activeUser:"2,292",
          startCount:"19,899", 
          firstStart:"00:00:22",
          dayUse:"00:00:22",
          date: "2016-05-02",
          cumulative : "3,639(100%)"
        }
      ],
      channelArr: [
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
      dateRangeValue: "", //日期范围的值
      selectChannelVal: "全部来源", //用户来源下拉选中的值,
      selectTableVal: "全部来源", //表格部分的下拉选择的值
      charts: "" //存储图表的元素id
    };
  },
  watch: {
    dateRangeValue: function(val) {
      console.log(this.dateRangeValue, "监听值");
    }
  },
  methods: {
    //把表格导出Excel文件
    downloadTable(){
       //console.log("导出",this.downloadLoading) //sertable
        this.downloadLoading = true;
       // 设置当前日期
        let time = new Date();
        let year = time.getFullYear();
        let month = time.getMonth() + 1;
        let day = time.getDate();
        let name = year + "" + month + "" + day; 
      //选中要导出的表格  
        let wb = XLSX.utils.table_to_book(document.querySelector(".Usertable"));  
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
       // return wbout;

    },
    //今日，近七天，近30天的筛选
    LatestTimeDate(val) {
      console.log(val);
    },
    //点击用户来源 显示图表
    EvtuserSource(val) {
      console.log(val);
    },
    //画折线图
    drawlineChart(id) {
      this.charts = this.$echarts.init(document.getElementById(id));
      this.charts.setOption({
        title: {
          text: "用户来源折线图统计"
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
      //自适应大小
        let _this = this;
        window.onresize = function(){
              _this.charts.resize();
        }    
    }
  },
  mounted() {
    //图表的初始化
    this.$nextTick(function() {
      this.drawlineChart("chartdata");
    });
    console.log( new Date().Format('yyyy-MM-dd HH:mm:ss') )
  }
};
</script>

<style scoped>
.userSource-Box {
  margin-left: 20px;
}
.userSource-Box .top-pagename {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 90px;
  margin-top: 15px;
  font-size: 18px;
}
.userSource-Box .top-pagename .line {
  width: 5px;
  height: 25px;
  background-color: #1cb8ab;
}
.userSource-Box .channel-table {
  /* margin-top: 40px;
    margin-bottom: 10px; */
  margin: 40px 0 10px 5px;
  font-size: 22px;
  font-weight: bold;
}
.userSourceChart-Box .userSource-title {
  font-size: 22px;
  font-weight: bold;
}
.userSourceChart-Box .Button-group {
  margin-top: 40px;
}
.userSource-Box .echart-Box {
  margin-top: 35px;
}
.userSource-Box .table-Box {
  margin-top: 15px;
}
.userSource-Box .table-contain{
  margin-top: 30px;
}
/* .Usertable .el-table th.is-sortable{ 
  background-color: #f5f5f5;
} */

.row-gutter{
  width: 400px;
  height:40px;
  display: flex;
  flex-direction:row;
  justify-content: space-between;
}

</style>
