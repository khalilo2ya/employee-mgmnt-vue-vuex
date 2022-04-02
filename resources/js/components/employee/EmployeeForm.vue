<template>
  <div class="container">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-page-header @back="goBack" :content="`${scope} form`">
        </el-page-header>
      </div>
      <div>
        <el-form ref="employeeForm" :model="form" label-width="120px">
          <el-row :guuter="10">
            <el-form-item label="Name" required prop="name">
              <el-input
                v-model="form.name"
                aria-placeholder="Employee Name"
              ></el-input>
            </el-form-item>
            <el-form-item label="Department" required prop="department">
              <el-input
                v-model="form.department"
                aria-placeholder="Department"
              ></el-input>
            </el-form-item>
            <el-form-item label="Section" required prop="section">
              <el-input
                v-model="form.section"
                aria-placeholder="Section"
              ></el-input>
            </el-form-item>
            <el-form-item label="Email" required prop="email">
              <el-input
                v-model="form.email"
                aria-placeholder="Email Adress"
              ></el-input>
            </el-form-item>
          </el-row>
          <el-row :guuter="10">
            <el-form-item>
              <el-button type="success" @click="saveForm('employeeForm')"
                >Save</el-button
              >
            </el-form-item>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "employee-form",
  props: {
    scope: String,
  },
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      form: {
        name: null,
        department: null,
        section: null,
        email: null,
      },
    };
  },
  methods: {
    goBack() {
      window.location.href = "/employees";
    },
    saveForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.dispatch('saveEmployee', this.form);
        } /*else {
          console.log("error submit!!");
          return false;
        }*/
      });
    },
  },
};
</script>
