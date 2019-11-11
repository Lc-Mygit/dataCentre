<template>
  <div>
     
    <el-row :gutter="12">
      <el-col :span="8">
        <el-card shadow="always">我是用户画像{{new Date()}}</el-card>
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
  name: "userPortrait",
  data() {
    return {};
  },
  mouthods() {},
  mounted() {}
};
</script>

<style scoped>



</style>
