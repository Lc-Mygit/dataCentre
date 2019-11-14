<template> 
    <div class="statisticalTable-Box">
        <el-card shadow="hover">

            <div class="head-control"> 
                <!-- select 选项 -->
                    <el-select v-model="selectChannelVal" clearable placeholder="请选择" style="width:135px" @change="changeValue">
                            <el-option
                                v-for="item in SourceDataArr"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                    </el-select>
                <!-- 时间范围的选择 -->
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
                 <!--搜索按钮-->
                 <div> <el-button type="primary" icon="el-icon-search">查询</el-button> </div>
                 <div> <el-button plain @click="DawnloadExcel()">导出excel</el-button>  </div>
            </div>

             <el-row :gutter="12">
                   <el-col :span="8">
                        <div class="top-pagename">
                        <div class="line"></div>{{selectChannelVal}}总览
                        </div>
                    </el-col>
            </el-row>    

            <!-- 数据表格区域 -->
            <div class="table-box">
                <!-- 单位表格 -->
               <div v-show="flagTable.units">  
                    <el-table 
                        class="civilServant-table"
                        :header-cell-style="{background:'#f5f5f5',color:'#606266'}"
                        :data="civilServantArr"
                        style="width: 100%"
                        border
                    >
                    <el-table-column prop="key1" label="新增单位"   align='left'></el-table-column>
                    <el-table-column prop="key2" label="单位总数"   align='center'></el-table-column>
                    <el-table-column prop="key3" label="增长率（单位）"   align='center'></el-table-column>

                    <el-table-column prop="key4" label="新增职工"   align='center'></el-table-column>
                    <el-table-column prop="key5" label="职工数"  align='center'></el-table-column>
                    <el-table-column prop="key6" label="增长率（职工）"   align='center'></el-table-column>
                    <el-table-column prop="key7" label="新增充值（元）"    align='center'></el-table-column>
                    <el-table-column prop="key8" label="充值总额（元）"    align='center'></el-table-column>
                    <el-table-column prop="key9" label="新增预充值（元）"    align='center'></el-table-column>
                    <el-table-column prop="key10" label="预充值总额（元）"    align='center'></el-table-column>
                    <el-table-column prop="key11" label="职工消费总额（元）"    align='center'></el-table-column>
                    <el-table-column prop="key12" label="消费人数"    align='center'></el-table-column>
                </el-table>   
            </div>    
            <!-- 商家表格 -->
            <div v-show="flagTable.merchant">  
                    <el-table 
                        class="civilServant-table"
                        :header-cell-style="{background:'#f5f5f5',color:'#606266'}"
                        :data="merchantArr"
                        style="width: 100%"
                        border
                    >
                        <el-table-column prop="key1" label="新增商家"   align='left'></el-table-column>
                        <el-table-column prop="key2" label="商家总数"   align='center'></el-table-column>
                        <el-table-column prop="key3" label="增长率（商家）"   align='center'></el-table-column>
                        <el-table-column prop="key4" label="新增公务就餐商家"   align='center'></el-table-column>
                        <el-table-column prop="key5" label="支持公务就餐商家"  align='center'></el-table-column>
                        <el-table-column prop="key6" label="新增销售额（元）"   align='center'></el-table-column>
                        <el-table-column prop="key7" label="销售总额（元）"    align='center'></el-table-column>
                        <el-table-column prop="key8" label="增长率（销售额）"    align='center'></el-table-column>
                        <el-table-column prop="key9" label="新增提现（元）"    align='center'></el-table-column>
                        <el-table-column prop="key10" label="提现总额（元）"    align='center'></el-table-column>
                       
                    </el-table>   
             </div>   
               <!-- 用户表格 -->
              <div v-show="flagTable.user">
                      <el-table 
                        class="civilServant-table"
                        :header-cell-style="{background:'#f5f5f5',color:'#606266'}"
                        :data="UserArr"
                        style="width: 100%"
                        border
                      >
                        <el-table-column prop="key1" label="新增用户"   align='left'></el-table-column>
                        <el-table-column prop="key2" label="累计用户数"   align='center'></el-table-column>
                        <el-table-column prop="key3" label="活跃用户"   align='center'></el-table-column>
                        <el-table-column prop="key4" label="沉默用户"   align='center'></el-table-column>
                        <el-table-column prop="key5" label="用户留存率"  align='center'></el-table-column>
                        <el-table-column prop="key6" label="用户充值数"   align='center'></el-table-column>
                        <el-table-column prop="key7" label="用户充值总额（元）"    align='center'></el-table-column>
                        <el-table-column prop="key8" label="启动次数"    align='center'></el-table-column>
                        <el-table-column prop="key9" label="总崩溃率"    align='center'></el-table-column>
                       
                    </el-table>   

              </div>  



            </div>   
        </el-card>    
    </div>
</template> 

<script>

//引入导出Excel文件的依赖。
import FileSaver from "file-saver";
import XLSX from "xlsx";

export default {
    name: "userPortrait",
     data() {
         return{
             flagTable:{  //判断状态
                 units:true,
                 merchant:false,
                 user:false,
             },
             dateRangeValue:null,//日期范围
             selectChannelVal:"单位数据",
             SourceDataArr:[
                 {
                    value: "单位数据",
                    label: "单位数据"
                },
                {
                    value: "商家数据",
                    label: "商家数据"
                },
                {
                    value: "用户数据",
                    label: "用户数据"
                },
             ],
             //单位表格数据
             civilServantArr:[
                 {
                     key1:15,
                     key2:256,
                     key3:"12%",
                     key4:45,
                     key5:1056,
                     key6:"45%",
                     key7:4525,
                     key8:8563,
                     key9:2589,
                     key10:5863,
                     key11:105682,
                     key12:853,
                 },
                 {
                     key1:15,
                     key2:256,
                     key3:"12%",
                     key4:45,
                     key5:1056,
                     key6:"45%",
                     key7:4525,
                     key8:8563,
                     key9:2589,
                     key10:5863,
                     key11:105682,
                     key12:853,
                 },
                 {
                     key1:15,
                     key2:256,
                     key3:"12%",
                     key4:45,
                     key5:1056,
                     key6:"45%",
                     key7:4525,
                     key8:8563,
                     key9:2589,
                     key10:5863,
                     key11:105682,
                     key12:853,
                 },
                 
             ],
             merchantArr:[{  //商家数据
                     key1:64,
                     key2:547,
                     key3:"4%",
                     key4:5,
                     key5:256,
                     key6:4521,
                     key7:15748,
                     key8:"12%",
                     key9:5624,
                     key10:8542,
                   
                 },
                 {  
                     key1:64,
                     key2:547,
                     key3:"4%",
                     key4:5,
                     key5:256,
                     key6:4521,
                     key7:15748,
                     key8:"12%",
                     key9:5624,
                     key10:8542,
                   
                 },
            ],
            //用户数据
            UserArr:[
                {  
                     key1:56,
                     key2:486,
                     key3:405,
                     key4:72,
                     key5:"50%",
                     key6:56,
                     key7:45682,
                     key8:452,
                     key9:"0.5%",
                 },
                 {  
                     key1:56,
                     key2:486,
                     key3:405,
                     key4:72,
                     key5:"50%",
                     key6:56,
                     key7:45682,
                     key8:452,
                     key9:"0.5%",
                 },
            ],

         }
     },
     methods:{
         //导出excel格式
         DawnloadExcel(){
                let time = new Date();
                let year = time.getFullYear();
                let month = time.getMonth() + 1;
                let day = time.getDate();
                let name = year + "" + month + "" + day; 
            //选中要导出的表格  
                let wb = XLSX.utils.table_to_book(document.querySelector(".civilServant-table"));  
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
         //筛选单位，商家，用户的表格
         changeValue(val){
               console.log(val)
               if(  val == "单位数据"){
                   this.flagTable.units = true;
                   this.flagTable.merchant = false;
                   this.flagTable.user = false;
               }
               if( val == "商家数据"){
                   this.flagTable.units = false;
                   this.flagTable.merchant = true;
                   this.flagTable.user = false;
               } 
               if( val == "用户数据"){
                   this.flagTable.units = false;
                   this.flagTable.merchant = false;
                   this.flagTable.user = true;
               }
             
         }
     },
     mounted(){

     }
    
}
</script>




<style scoped>
.statisticalTable-Box .head-control{
    width: 630px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-flow: nowrap;
    margin: 10px 0 10px 0;
}

.statisticalTable-Box {
  margin-left: 20px;
}
.statisticalTable-Box .top-pagename {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 125px;
  margin-top: 15px;
  font-size: 18px;
  margin:30px 0 30px 0;
}
.statisticalTable-Box .top-pagename .line {
  width: 5px;
  height: 25px;
  background-color: #1cb8ab;
}

/**..数据表格区域..***/ 
.statisticalTable-Box .table-box{
    padding: 20px 0 20px 0

}


</style>