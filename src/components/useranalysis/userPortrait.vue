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
              </div>
            </div>
             <!-- 男女动画 图表 -->
             <div id="men-women-portrait" style="width:100%;height:330px">我我我</div> 

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
                      width="120"
                      label="年龄"
                      align='left'
                      >
                      <template slot-scope="scope">
                         
                        <i style="color:#1ac8bb" class="iconfont iconicon26"></i>
                        <span>{{scope.row.age}}</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label=""
        
                      align='left'
                     >
                      <template slot-scope="scope">
                          <el-progress type="line" :percentage="transition(scope.row.percent)"></el-progress>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label="百分比"
                      align='center'
                      width="80"
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
                      width="120"
                      >
                      <template slot-scope="scope">
                        <span>{{scope.row.citylevel}}</span>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label=""
                      align='left'
                     >
                      <template slot-scope="scope">
                          <el-progress type="line" :percentage="scope.row.percent"></el-progress>
                      </template>
                    </el-table-column>

                    <el-table-column
                      label="百分比"
                      align='center'
                      width="80"
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
                   <div id="chartdata" style="width:100%;height:700px"></div>
              </div>

            </el-card>  
        </el-row>  
    </div>    
      <!--------对话框------->
        <el-dialog :title="dialogTitle" :visible.sync="dialogTableVisible">
          <div class="dialog-contain">  
                <div class="line"></div>

                <el-table :data="dialogData" border  :header-cell-style="{background:'#f5f5f5',color:'#606266'}">
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
                  xAxis:[
                      {
                          type : 'category',
                          data : ['公务就餐', '充值缴费', '智智物业', '智智校园', '公务就餐', '公务就餐', '公务就餐'],
                          axisTick: {
                              alignWithLabel: true
                          }
                      }
                  ],
                  yAxis:[
                      {
                          type : 'value'
                      }
                  ],
                  series:[
                      {
                          name:'直接访问',
                          type:'bar',
                          barWidth:'20%',
                          data:[10, 52, 51, 64, 14, 56, 80]
                      }
                  ],
                  //x轴文字旋转
              });
              //自适应大小
              let _this = this;
              window.onresize = function(){
                    _this.charts.resize();
              }    
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
    },
    //男女动画 图表
    drawMenAndWomen(id){
        let symbols = [
            'path://M18.2629891,11.7131596 L6.8091608,11.7131596 C1.6685112,11.7131596 0,13.032145 0,18.6237673 L0,34.9928467 C0,38.1719847 4.28388932,38.1719847 4.28388932,34.9928467 L4.65591984,20.0216948 L5.74941883,20.0216948 L5.74941883,61.000787 C5.74941883,65.2508314 11.5891201,65.1268798 11.5891201,61.000787 L11.9611506,37.2137775 L13.1110872,37.2137775 L13.4831177,61.000787 C13.4831177,65.1268798 19.3114787,65.2508314 19.3114787,61.000787 L19.3114787,20.0216948 L20.4162301,20.0216948 L20.7882606,34.9928467 C20.7882606,38.1719847 25.0721499,38.1719847 25.0721499,34.9928467 L25.0721499,18.6237673 C25.0721499,13.032145 23.4038145,11.7131596 18.2629891,11.7131596 M12.5361629,1.11022302e-13 C15.4784742,1.11022302e-13 17.8684539,2.38997966 17.8684539,5.33237894 C17.8684539,8.27469031 15.4784742,10.66467 12.5361629,10.66467 C9.59376358,10.66467 7.20378392,8.27469031 7.20378392,5.33237894 C7.20378392,2.38997966 9.59376358,1.11022302e-13 12.5361629,1.11022302e-13',
            'path://M28.9624207,31.5315864 L24.4142575,16.4793596 C23.5227152,13.8063773 20.8817445,11.7111088 17.0107398,11.7111088 L12.112691,11.7111088 C8.24168636,11.7111088 5.60080331,13.8064652 4.70917331,16.4793596 L0.149791395,31.5315864 C-0.786976655,34.7595013 2.9373074,35.9147532 3.9192135,32.890727 L8.72689855,19.1296485 L9.2799493,19.1296485 C9.2799493,19.1296485 2.95992025,43.7750224 2.70031069,44.6924335 C2.56498417,45.1567684 2.74553639,45.4852068 3.24205501,45.4852068 L8.704461,45.4852068 L8.704461,61.6700801 C8.704461,64.9659872 13.625035,64.9659872 13.625035,61.6700801 L13.625035,45.360657 L15.5097899,45.360657 L15.4984835,61.6700801 C15.4984835,64.9659872 20.4191451,64.9659872 20.4191451,61.6700801 L20.4191451,45.4852068 L25.8814635,45.4852068 C26.3667633,45.4852068 26.5586219,45.1567684 26.4345142,44.6924335 C26.1636859,43.7750224 19.8436568,19.1296485 19.8436568,19.1296485 L20.3966199,19.1296485 L25.2043926,32.890727 C26.1862111,35.9147532 29.9105828,34.7595013 28.9625083,31.5315864 L28.9624207,31.5315864 Z M14.5617154,0 C17.4960397,0 19.8773132,2.3898427 19.8773132,5.33453001 C19.8773132,8.27930527 17.4960397,10.66906 14.5617154,10.66906 C11.6274788,10.66906 9.24611767,8.27930527 9.24611767,5.33453001 C9.24611767,2.3898427 11.6274788,0 14.5617154,0 L14.5617154,0 Z',
            'path://M512 292.205897c80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 65.503248 592.855572 0 512 0 431.144428 0 365.641179 65.503248 365.641179 146.358821 365.641179 227.214393 431.144428 292.205897 512 292.205897zM512 731.282359c-80.855572 0-146.358821 65.503248-146.358821 146.358821 0 80.855572 65.503248 146.358821 146.358821 146.358821 80.855572 0 146.358821-65.503248 146.358821-146.358821C658.358821 796.273863 592.855572 731.282359 512 731.282359z'
        ];
        let bodyMax = 100; //指定图形界限的值
        let labelSetting = {
            normal: {
                show: true,
                position: 'bottom',
                offset: [0, 10],
                formatter: function(param) {
                    return (param.value / bodyMax * 100).toFixed(0) + '%';
                },
                textStyle: {
                    fontSize: 18,
                    fontFamily: 'Arial',
                    color: '#686868'
                }
            }
        }
        let markLineSetting = { //设置标线
              symbol: 'none',
              lineStyle: {
                  normal: {
                      opacity: 0.3
                  }
              },
              data: [{
                  type: 'max',
                  label: {
                      normal: {
                          formatter: 'max: {c}'
                      }
                  }
              }, {
                  type: 'min',
                  label: {
                      normal: {
                          formatter: 'min: {c}'
                      }
                  }
              }]
        };
        let charts = this.$echarts.init(document.getElementById(id));
        charts.setOption({
                 tooltip: {
                    show: true, //鼠标放上去显示悬浮数据
                    alwaysShowContent:true,
                    formatter: function(param) {
                        return  param.name !=="x" ? param.name+"性人数=  "+ param.value : "";
                    },
                },
                legend: {
                    show:false,
                    data: ['男', '女'],
                    // selectedMode: 'single',
                    itemWidth: 10, //图例的宽度
                    itemHeight: 10, //图例的高度
                    itemGap: 30,
                    orient: 'horizontal',
                    bottom: 20,
                    top: 0,
                    icon: 'rect',
                    // selectedMode: false, //取消图例上的点击事件
                    textStyle: {
                        color: '#808492'
                    },
                     
                      tooltip: {
                          show: true
                      }
                },
                grid: {
                    // left: '20%',
                    // right: '20%',
                    top: '20%',
                    bottom: '20%',
                    containLabel: true
                },
                xAxis: {
                    data: ['男', 'x', '女'],
                    axisTick: {
                        show: false
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: false
                    }
                },
                yAxis: {
                    max: bodyMax,
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        // 刻度线
                        show: false
                    },
                    axisLine: {
                        // 轴线
                        show: false
                    },
                    axisLabel: {
                        // 轴坐标文字
                        show: false
                    }
                },
                series: [{
                      
                        type: 'pictorialBar',
                        symbolClip: true,
                        symbolBoundingData: bodyMax,
                        label: labelSetting,
                        data: [{
                                name: '男',
                                value: 40,
                                symbol: symbols[0],
                                itemStyle: {
                                    normal: {
                                        color: 'rgba(105,204,230)' //单独控制颜色
                                    }
                                },
                            },
                           {

                           },
                            { 
                                name: '女',
                                value: 60,
                                symbol: symbols[1],
                                itemStyle: {
                                    normal: {
                                        color: 'rgba(255,130,130)' //单独控制颜色
                                    }
                                },
                            }
                        ],
                        // markLine: markLineSetting,
                        z: 10
                    },
                    /*{
                        name: 'typeB',
                        type: 'pictorialBar',
                        symbolClip: true,
                        symbolBoundingData: bodyMax,
                        label: labelSetting,
                        data: [{
                                value: 70,
                                symbol: symbols[0]
                            },
                            {},
                            {
                                value: 30,
                                symbol: symbols[1]
                            }
                        ],
                        // markLine: markLineSetting,
                        z: 10
                    },*/
                    {
                        // 设置背景底色，不同的情况用这个
                      //  name: 'full',
                        type: 'pictorialBar', //异型柱状图 图片、SVG PathData
                        symbolBoundingData: bodyMax,
                        animationDuration: 0,
                        itemStyle: {
                            normal: {
                                color: '#ccc' //设置全部颜色，统一设置
                            }
                        },
                        z: 10,
                        data: [{
                                itemStyle: {
                                    normal: {
                                        color: 'rgba(105,204,230,0.40)' //单独控制颜色
                                    }
                                },
                                value: 46122,
                                symbol: symbols[0]
                            },
                            {
                                // 设置中间冒号
                                itemStyle: {
                                    normal: {
                                        color: '#1DA1F2' //单独控制颜色
                                    }
                                },
                                value: 56656,
                                symbol: symbols[2],
                                symbolSize: [8, '18%'],
                                symbolOffset: [0, '-200%']
                            },
                            {
                                itemStyle: {
                                    normal: {
                                        color: 'rgba(255,130,130,0.40)' //单独控制颜色
                                    }
                                },
                                value: 76524,
                                symbol: symbols[1]
                            }
                        ]
                    }
                ]});
            //自适应大小
            window.onresize = function(){
                  charts.resize();
            }                 
    }
  },
  mounted(){
      //图表的初始化
      this.$nextTick(function() {
        this.drawlineChart("chartdata");
        this.drawMenAndWomen("men-women-portrait");
        
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
