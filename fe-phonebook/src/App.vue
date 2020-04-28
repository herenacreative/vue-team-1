<template>
  <div id="app">
    <el-container>
    <el-header>
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
        <el-menu-item index="1"><a href="#" target="_blank"><i class="el-icon-user-solid"></i><span>PHONE BOOK</span></a></el-menu-item>
        <el-menu-item index="2"><a href="#" target="_blank"><i class="el-icon-star-on"></i><span>FAVORITES</span></a></el-menu-item>
        <el-menu-item index="3"><a href="#" target="_blank"><i class="el-icon-phone"></i><span>ADD CONTACT</span></a></el-menu-item>
      </el-menu>
    </el-header>
   
      <el-main>
        <Phonebook/>
        <formEdit/>
        <readPhonebook/>
        <favorites/>
      </el-main>

      
    </el-container>
  </div>
</template>

<script>
import Phonebook from "@/components/Phonebook.vue";
import formEdit from "@/components/formEdit.vue";
import readPhonebook from "@/components/readPhonebook.vue";
import favorites from "@/components/favorites.vue";

export default {
 name: 'App',
 components: {
   Phonebook,
   formEdit,
   readPhonebook,
   favorites
 }, 
 activeIndex: '1',

};
</script>

<style>
.el-container{
  max-width: 550px;
  margin: auto;
}
.el-menu-item{
  font-size: small;
}
</style>
