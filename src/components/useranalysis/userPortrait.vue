<template>
  <div class="userPortrait-Box">
    <el-row :gutter="12">
      <el-col :span="8">
        <div class="top-pagename">
          <div class="line"></div>用户画像
        </div>
      </el-col>
    </el-row>
    <el-row>
      <div class="channel-table">渠道列表</div>
    </el-row>
    <!-- 图表区域 -->
    <div class="tableChart">
      <el-row :gutter="1">
        <!-- 性别部分 -->
        <el-col :span="8">
          <el-card shadow="hover" class="common-height">
            <div class="title-box">
              <div class="title-text">性别</div>
              <div class="title-icon">
                <p @click="genderDetail('性别')">
                  <i style="font-size:30px;color:#1ac8bb" class="iconfont icongengduo"></i>
                </p>
                <!-- <i class="el-icon-view"></i> -->
              </div>
            </div>
          </el-card>
        </el-col>
        <!-- 年龄部分 -->
        <el-col :span="8">
          <el-card shadow="hover" class="common-height">
            <div class="title-box">
              <div class="title-text">年龄</div>
              <div class="title-icon">
                <p @click="genderDetail('年龄')">
                  <i style="font-size:30px;color:#1ac8bb" class="iconfont icongengduo"></i>
                </p>
              </div>
            </div>

            <div class="age-table">
                 <el-table
                 :data="tableData"
                  :header-cell-style="{background:'#f5f5f5',color:'#606266'}"
                 > 
                  <el-table-column
                      label="年龄"
                      align='center'
                      >
                      <template slot-scope="scope">
                         
                        <i style="color:#1ac8bb" class="iconfont iconicon26"></i>
                        <span>{{scope.row.age}}</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label=""
                      width="150"
                      show-text="false"
                     >
                      <template slot-scope="scope">
                          <el-progress type="line" :percentage="transition(scope.row.percent)"></el-progress>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label="百分比"
                      align='center'
                      >
                      <template slot-scope="scope">
                         {{scope.row.percent}}
                      </template>
                    </el-table-column>
                 </el-table>
            </div>

          </el-card>
        </el-col>
        <!-- 城市等级部分 -->
        <el-col :span="8">
          <el-card shadow="hover" class="common-height">
            <div class="title-box">
              <div class="title-text">城市等级</div>
              <div class="title-icon">
                <p @click="genderDetail('城市等级')">
                  <i style="font-size:30px;color:#1ac8bb" class="iconfont icongengduo"></i>
                </p>
              </div>
            </div>

            <div class="city-table"> 
              <el-table
                 :data="CitytableData"
                  :header-cell-style="{background:'#f5f5f5',color:'#606266'}"
                 > 
                  <el-table-column
                      label="城市等级"
                      align='center'
                      >
                      <template slot-scope="scope">
                        <span>{{scope.row.citylevel}}</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label=""
                      width="150"
                     >
                      <template slot-scope="scope">
                          <el-progress type="line" :percentage="scope.row.percent"></el-progress>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label="百分比"
                      align='center'
                      >
                      <template slot-scope="scope">
                         {{scope.row.percent}}
                      </template>
                    </el-table-column>
                 </el-table>
            </div>  
          </el-card>
        </el-col>
      </el-row>
    </div>

    <!--用户喜好的区域-->
    <div class="userpreferences-Box">
        <el-row>
            <el-card shadow="hover">  
              <div class="userlike-title">用户喜好</div> 
              <div class="line"></div>
              <div class="buttongroup-box">
                  <div class="buttongroup"> 
                      <el-button-group>
                          <el-button plain @click="EvtuserSelect('新增用户')">新增用户</el-button>
                          <el-button plain @click="EvtuserSelect('活跃用户')">活跃用户</el-button>
                          <el-button plain @click="EvtuserSelect('累计用户')">累计用户</el-button>
                      </el-button-group>
                  </div>
                  <div class="right-icon">
                       <p @click="genderDetail('用户喜好')">
                          <i style="font-size:30px;color:#1ac8bb" class="iconfont icongengduo"></i>
                      </p>
                  </div>


              </div>  

              <!--柱状图区域-->
              <div class="histogram-Box">
                   <div id="chartdata" style="width:1200px;height:500px"></div>
              </div>

            </el-card>  
        </el-row>  
    </div>    
      <!--------对话框------->
        <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible">
          <div class="dialog-contain">  
                <div class="line"></div>

                <el-table :data="dialogData" border>
                    <el-table-column property="date" sortable :label="dialogTitle" width="150"></el-table-column>
                    <el-table-column property="name" sortable label="人数" width="200"></el-table-column>
                    <el-table-column property="address" sortable label="百分比"></el-table-column>
                  </el-table>
                   
                    <div class="pagination">
                        <el-pagination
                          background
                          layout="prev, pager, next"
                          :total="50">
                        </el-pagination>
                    </div>
             </div>  
        </el-dialog>
       <!-------////对话框------->  
  </div>
</template>    

<script>
export default {
  name: "userPortrait",
  data() {
    return {
      dialogTitle:"",
      dialogTableVisible:false,
        dialogData: [ {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }],

      tableData: [
        {
          age: "18-24岁",
          name: "王小虎",
          percent: "30%"
        },
        {
          age: "25-29岁",
          name: "王小虎",
          percent: "24%"
        },
        {
          age: "30-34岁",
          name: "王小虎",
          percent: "43%"
        },
        {
          age: "35-39岁",
          name: "王小虎",
          percent: "19%"
        },
        {
          age: "40-49岁",
          name: "王小虎",
          percent: "23%"
        },
        {
          age: "50岁及以上",
          name: "王小虎",
          percent: "20%"
        }
      ],
      CitytableData:[ 
          {citylevel:"一线城市",percent:23},
          {citylevel:"二线城市",percent:32},
          {citylevel:"三线城市",percent:14},
          {citylevel:"四线城市",percent:21},
          {citylevel:"五线城市",percent:13},
          {citylevel:"六线城市",percent:10}
      ],
      charts: "" //存储图表的元素id
    };
  },
  methods:{
    //渲染柱形图
    drawlineChart(id){
        this.charts = this.$echarts.init(document.getElementById(id));
        //创建 设置图表
        this.charts.setOption( {
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
                          data : ['公务就餐', '充值缴费', '智智物业', '智智校园', '公务就餐', '公务就餐', '公务就餐'],
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
                          name:'直接访问',
                          type:'bar',
                          barWidth:'20%',
                          data:[10, 52, 51, 64, 14, 56, 80]
                      }
                  ]
              })
    },
 
    //按钮的操作
    EvtuserSelect(val){
         alert(val);
    },
    //性别人物 男女的比例详情
    genderDetail(val) {
        this.dialogTitle = val;
        this.dialogTableVisible = true;
    },
    transition(val){
      if(val){
        return  Number( val.substring(0, val.length - 1) );
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
.userPortrait-Box {
  margin-left: 20px;
}
.userPortrait-Box .top-pagename {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 90px;
  margin-top: 15px;
  font-size: 18px;
}
.userPortrait-Box .top-pagename .line {
  width: 5px;
  height: 25px;
  background-color: #1cb8ab;
}
.userPortrait-Box .tableChart {
  margin: 20px 0 20px 0;
}
.userPortrait-Box .channel-table {
  /* margin-top: 40px;
         margin-bottom: 10px; */
  margin: 40px 0 10px 5px;
  font-size: 22px;
  font-weight: bold;
}
.tableChart .title-box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  height: 50px;
  padding-top: 5px;
  margin: auto;
}
.title-box .title-text {
  font-size: 20px;
  font-weight: bold;
}
.title-box .title-icon {
  cursor: pointer;
}
/* 年龄的表格部分 */
.age-table {}

/* 城市等级的表格部分 */
.common-height{
  height: 450px !important;
}

.userpreferences-Box .userlike-title{
   font-size: 20px;
    font-weight: bold;
}
/*分割线*/  
.userpreferences-Box .line{
  width: 100%;
  height: 1px;
  background-color: #f5f5f5;
  margin: 25px 0 25px 0;
}
.dialog-contain .line{
   width: 100%;
    height: 2px;
    background-color: #f5f5f5;
    margin: 15px 0 15px 0;
}

.userpreferences-Box .buttongroup-box{
   display: flex;
   flex-direction: row;
   justify-content: space-between; 
}

.buttongroup-box .right-icon{
  width: 50px;
  cursor: pointer;
}

</style>
