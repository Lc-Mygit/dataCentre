<template>
  <div>
      <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名" width="180"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
        </el-table>
  </div>
</template>
<style>
.hongbao_zanzhu {
  display: block;
  position: fixed;
  text-align: center;
  bottom: 336px;
  width: 230px;
  right: 0;
  font-size: 23px;
  color: #505458;
}
.hongbao {
  position: fixed;
  bottom: 0;
  right: 0;
  height: 330px;
  width: 230px;
}
.zanzhulist{
  border:1px dashed gray;
  display: inline-block;
}
.zanzhutb  tr td:first-child{
  text-align: right;
}
.zanzhutb  tr td:nth-child(2){
  width:80px;
}
</style>
<script>
import apis from "../apis/apis";
export default {
  data() {
    return {
      zanzhu:[],
      tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }]
    }
  },
  methods: {
    rollBackTables() {
      var text = "数据还原";
      apis.shiroApi
        .rollBackTables()
        .then(data => {
          var alertText = "";
          if (data.data.status == "SUCCESS") {
            text += "成功";
            alertText = text + ",请重新登陆";
          } else {
            text += "失败";
            alertText = text + ",请重试";
          }
          this.$alert(alertText, "提示", {
            confirmButtonText: "确定"
          });
          log(text);
        })
        .catch(e => {
          this.$alert("数据还原异常,请重试", "提示", {
            confirmButtonText: "确定"
          });
          text += "失败";
          log(text);
        });
      console.log(text);

      function log(text) {
        var loginLog = {
          ip: returnCitySN["cip"],
          city: returnCitySN["cname"] + "-" + text
        };

        apis.shiroApi.loginLog(loginLog);
      }
    },
    openZanZhu(){
      this.$common.OpenNewPage(this,'zanzhu');
    },
    getZanZhu(){
      apis.mayiApi.getZanZhu().then(res=>{
        if(res.status=="200"){
          if(res.data.dataList){
            this.zanzhu=res.data.dataList;
          }
        }
      }).catch(
        
      );
    },
    getDate(param){
      return this.$common.toDate(param);
    } 
  },
  mounted() {
    this.getZanZhu();
  },
  computed:{
    
  }
};
</script>
