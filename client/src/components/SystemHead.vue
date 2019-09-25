<template>
  <div id="top-up">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo top"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">
        <h2>haoliland后台管理系统</h2>
      </el-menu-item>

      <el-menu-item class="unlogin">
        <router-link to="/login" id="header-login" class="username">Hi,</router-link>
        <span  id="header-login" @click="unLogin">退出</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  // computed: {
  //   userInfo: {
  //     set: function(val) {},
  //     get: function() {
  //       return this.$store.state.userInfo;
  //     }
  //   }
  // },
  data() {
    return {
      activeIndex2: "1"
    };
  },

  // created: function() {
  //   this.userInfo = this.$store.state.userInfo;
  // },
  // methods: {
  //   handleSelect(key, keyPath) {
  //     console.log(key, keyPath);
  //   },
  //   unLogin() {
  //     this.$store.commit("removeUserInfo"); //同步

  //     this.axios
  //       .post("/user/unlogin", this.$store.state.userInfo)
  //       .then(res => {
  //         console.log(res);
  //       })
  //       .catch(err => {
  //         console.log(err);
  //       });
  //     this.$router.go(0);
  //   }
  // },
  created() {
    if (this.$route.path == "/reg") {
      this.activeIndex2 = "7";
    }
    console.log(this.$route.path);
  }
};
</script>
<style >
* {
  padding: 0;
  margin: 0;
}
#top-up{
  width:100%;
  height:61px;
}
.el-menu--horizontal>.el-menu-item.unlogin {
    float: right;
  width: 140px;
  margin-top: -4px;
  margin-left: 11px;
  cursor: pointer;
}
.username {
  width: 60px;
  text-decoration: none;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>>