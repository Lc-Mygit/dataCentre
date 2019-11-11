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

    <el-row :gutter="20">
      <el-col :span="6" :xs="14" :sm="10" :md="6" :lg="6">
        <el-card shadow="hover">
          <el-date-picker
           style="width:100%"
            v-model="dateRangeValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-card>
      </el-col>
      <el-col :span="4" :xs="10" :sm="8" :md="4" :lg="4">
        <el-card shadow="hover">
          <el-select v-model="selectChannelVal" clearable placeholder="请选择" style="width:100%">
            <el-option
              v-for="item in channelArr"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-card>
      </el-col>
     </el-row>
        
     <!-- 用户来源图表区域 -->
     <div class="userSourceChart-Box">
        <el-row>
            <el-col :span="24" :xs="24" :sm="24" :md="24" :lg="24">
                    <el-card shadow="hover" style="margin-top:15px"> 
                        <div class="userSource-title">用户来源</div>
                        <div class="Button-group"> 
                             <el-checkbox-group v-model="Button_userSourceVal">
                                <el-checkbox-button v-for="(item,index) in userSourceEchartArr" :label="item" :key="index">{{item}}</el-checkbox-button>
                            </el-checkbox-group>
                        </div>
                    </el-card>
            </el-col>
        </el-row>     
    </div>
    
    

  </div>
</template>    

<script>
export default {
  name: "userSource",
  data() {
    return {
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
          value: "智慧校园",
          label: "智慧校园"
        }
      ],
      dateRangeValue: "", //日期范围的值
      selectChannelVal:"全部来源", //用户来源下拉选中的值,
      Button_userSourceVal:[],      
      userSourceEchartArr:["新增用户","活跃用户","启动次数","平均单次使用时长","平均单日使用时长","用户留存率"]
    };
  },
  watch: {
    'dateRangeValue': function(val) {
      console.log(this.dateRangeValue, "监听值");
    },
    'Button_userSourceVal':function(){
       
        if( this.Button_userSourceVal > 1 ){
            this.Button_userSourceVal.splice(0,1)
        }
         console.log(this.Button_userSourceVal,"监听选项")
    }
  },
  mouthods() {},
  mounted() {}
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
.userSourceChart-Box .userSource-title{
    font-size: 22px;
    font-weight: bold;
}
.userSourceChart-Box .Button-group{
    margin-top: 40px;
}

</style>
