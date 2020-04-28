<template>
    <el-table :data="tableData">
    <el-table-column prop="" width="">
        <div class="demo-image">
        <div class="block" v-for="fit in fits" :key="fit">
            <span class="demonstration">{{ fit }}</span>
            <el-image
            style="width: 30px; height: 30px"
            :src="url"
            :fit="fit"></el-image>
        </div>
        </div>
    </el-table-column>
    <el-table-column prop="name" >
    </el-table-column>
     <el-table-column>
        <a><i class="el-icon-star-on"></i></a>
    </el-table-column>
    <el-table-column>
        <el-button size="mini" round>Delete</el-button>
    </el-table-column>
    </el-table>
   
</template>

<script>
export default {
  name : 'favorites',
    data() {
     const item = {
        fits: ['cover'],
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
        name: 'Tom',
      };
      return {
        tableData: Array(10).fill(item)
      }
    }
  };
</script>

<style>

</style>