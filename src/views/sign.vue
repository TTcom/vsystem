<template>
  <div class="sign">
    <transition name="fadeqa">
      <div class="container" v-show="isdata" @keyup.enter="login">
        <h2>We Are The Avengers</h2>
        <div class="signinput">
          <input type="text" placeholder="your name" id="username" v-model="username" @change="inputchange" />
        </div>
        <div class="signinput">
          <input type="password" placeholder="your password" v-model="password" />
        </div>
        <div class="signinput">
          <el-button type="primary" :loading="islogining" :disabled="islogining" @click="login">{{ islogining ? "logining" : "login" }}</el-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
//import { Login } from "common/api/login"
export default {
  data() {
    return {
      isdata: false,
      username: "",
      password: "",
      islogining: false
    }
  },
  mounted() {
    setTimeout(() => {
      this.isdata = true
    }, 250)
  },
  methods: {
    inputchange() {
      console.log(this.username)
      let user = JSON.parse(localStorage.getItem("vsys_user"))
      if (user && user.account == this.username) {
        this.password = user.password
      }
    },
    login() {
      if (!this.usertest()) {
        return
      }

      if (this.islogining) {
        return
      }
      this.islogining = true
      //let params = { account: this.username, password: this.password }
      this.$router.push("/vue")
      // Login(params)
      //   .then(res => {
      //     console.log(res)
      //     if (res.code == 0) {
      //       this.$message({
      //         showClose: true,
      //         message: "登录成功",
      //         type: "success"
      //       })
      //       localStorage.setItem("vsys_user", JSON.stringify(params))
      //       localStorage.setItem("vsys_token", res.data)
      //       this.$router.push("/file")
      //     } else {
      //       this.$errorMessage({
      //         showClose: true,
      //         message: res.msg,
      //         type: "error"
      //       })
      //     }
      //   })
      //   .finally(() => {
      //     console.log("finally")
      //     this.islogining = false
      //   })
    },
    usertest() {
      if (!this.username) {
        this.$errorMessage({
          showClose: true,
          message: "用户名不可为空",
          type: "error"
        })
        return false
      }
      if (!this.password) {
        this.$errorMessage({
          showClose: true,
          message: "密码不可为空",
          type: "error"
        })
        return false
      }

      return true
    }
  }
}
</script>

<style lang="scss" scoped>
.sign {
  display: flex;
  width: 100%;
  height: 100%;
  background: #f0f2f5 url(../common/img/img.svg) no-repeat 50%;
  background-size: 100%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  perspective: 500px;
  .container {
    position: relative;
    padding-bottom: 230px;
    height: 100px;
    transition: all 0.5s;
    top: 0;
    text-align: center;
    width: 360px;
    h2 {
      margin-bottom: 30px;
    }
    .signinput {
      input {
        height: 40px;
        background-color: white;
        width: 100%;
        box-sizing: border-box;
        border: 1px solid #d9d9d9;
        border-radius: 4px;
      }
      button {
        margin-top: 15px;
        width: 100%;
      }
      margin-bottom: 15px;
    }
  }
  .fadeqa-enter {
    opacity: 0;
    position: absolute;
    top: -25px;
  }
  .fadeqa-enter-active {
    transition: all 0.5s;
  }
  .fadeqa-enter-to {
    opacity: 1;
  }
}
</style>
