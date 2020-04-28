<template>
  <div id="readPhonebook">
    <a href="#"><i class="el-icon-back"></i></a>
    <el-card class="box-card">
      <div v-for="o in 4" :key="o">
       </div>
    </el-card> 
    <el-card class="box-card">
      <div v-for="o in 4" :key="o">
           <a><i class="el-icon-edit"></i></a>
           <h3>sinta - 089688880964</h3>
           <label>jalan. dramaga</label>
       </div>
    </el-card>

       
  </div>
</template>

<script>
  export default {
    name : 'readPhonebook'
  }
</script>

<style>
  .box-card {
    height: 120px;
    background: rgb(107, 226, 96);
  }
</style>