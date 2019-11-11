<template>
  <div>
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">
            我是设备终端
           <i class="el-icon-user"></i>
        </el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="hover">鼠标悬浮时显示</el-card>
      </el-col>
      <el-col :span="8">
        <el-card shadow="never">从不显示</el-card>
      </el-col>
    </el-row>
  </div>
</template>    

<script>
export default {
  name: "deviceTerminal",
  data() {
    return {};
  },
  mouthods(){},
  mounted(){}

};
</script>

<style scoped>
</style>
