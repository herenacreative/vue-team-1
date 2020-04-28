
<template>
  <div id="daftarkontak">
    <a href="#"><i class="el-icon-back"></i></a>
    <el-card class="box-card">
      <div v-for="o in 4" :key="o">
       </div>
    </el-card> 
    <i class="el-icon-edit"></i>
        <el-form :label-position="top" :model="formPhoneBook">
          <el-form-item label="Name">
            <el-input v-model="formPhoneBook.name"></el-input>
          </el-form-item>
          
          <el-form-item label="Phone">
            <el-input v-model="formPhoneBook.phone"></el-input>
          </el-form-item>
          
          <el-form-item label="Address">
            <el-input v-model="formPhoneBook.address"></el-input>
          </el-form-item>

           <el-form-item>
            <el-button size="small">Save</el-button>
          </el-form-item>
        </el-form>

      
  </div>
</template>

<script>
  export default {
    name : 'formEdit',
    data() {
      return {
        formPhoneBook: {
          name: '',
          phone: '',
          address: ''
        }
      };
    }
  }
</script>

<style>


  .box-card {
    height: 100px;
    background-color: rgb(107, 226, 96);
  }
  .el-button{
    width: 100%;
  }
</style>