<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
          hello this is card
            <el-page-header @back="goBack" content="detail">
            </el-page-header>
      </div>
      <div>
          <el-form ref="employeeForm" :model="form" label-width="120px">
              <el-row :guuter="10">


              </el-row>
          </el-form>
      </div>

    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>
