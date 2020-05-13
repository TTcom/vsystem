<template>
  <div class="onrightTitle">
    <div class="headertop">
      <div class="htleft">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item>首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="(item, index) in breadContentarr" :key="index">{{
            item
          }}</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="htright" @mouseenter="isShowUserList = true" @mouseleave="thisisleave">
        <img src="../common/img/txicon.svg" />
        <span>Jarvis</span>
        <transition name="userlistfade">
          <div class="userspare" v-show="isShowUserList">
            <ul>
              <li>个人中心</li>
              <li @click="goOut">退出登录</li>
            </ul>
          </div>
        </transition>
      </div>
    </div>
    <div class="headerbottom">
      <div class="headerimg">
        <img src="../common/img/txicon.svg" />
      </div>
      <div class="greet veralimiddle">
        {{ greetcontent }}
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex"
import { loginOut } from "common/api/login"
export default {
  data() {
    return {
      isShowUserList: false,
      greetcontent: "",
      greetText: [
        {
          text: "早上好，Jarvis，用力呼吸新的空气，开始美好的一天吧！"
        },
        {
          text: "上午好，Jarvis，开始用行动证明自己吧！"
        },
        {
          text: "中午好，Jarvis，累了就睡会儿吧！"
        },
        {
          text: "下午好，Jarvis，把事情做到最好！"
        },
        {
          text: "晚上好，Jarvis，记得吃饭，记得睡觉！"
        }
      ]
    }
  },
  watch: {
    $route() {
      this.changeTitletext()
    }
  },
  computed: {
    ...mapGetters(["breadContentarr"])
  },
  mounted() {
    this.changeTitletext()
    this.getNowTime()
    setInterval(() => {
      this.getNowTime()
    }, 1000)
  },
  methods: {
    goOut() {
      loginOut().then(res => {
        console.log(res)
        if (res.code == 0) {
          this.$message({ showClose: true, message: "退出成功", type: "success" })
          this.$router.push("/")
        } else {
          this.$message({ showClose: true, message: res.data.msg, type: "error" })
          this.$router.push("/")
        }
      })
    },
    ...mapActions(["OnbreadContentarr"]),
    changeTitletext() {
      let arr = []

      arr = this.$route.meta.split("-")
      this.OnbreadContentarr(arr)
    },
    thisisleave() {
      this.isShowUserList = false
      console.log(this.isShowUserList)
    },
    getNowTime() {
      let date = new Date().getHours()

      if (date >= 19 && date <= 23) {
        this.greetcontent = this.greetText[4].text
      }
      if (date >= 0 && date <= 4) {
        this.greetcontent = this.greetText[4].text
      }
      if (date >= 5 && date <= 8) {
        this.greetcontent = this.greetText[0].text
      }
      if (date >= 9 && date <= 11) {
        this.greetcontent = this.greetText[1].text
      }
      if (date >= 12 && date <= 13) {
        this.greetcontent = this.greetText[2].text
      }
      if (date >= 14 && date <= 18) {
        this.greetcontent = this.greetText[3].text
      }
    }
  }
}
</script>
<style lang="scss">
.onrightTitle {
  transition: all 0.5s;
  width: 100%;
  background: #fff;
  padding: 16px 25px 0;
  box-sizing: border-box;
  padding-bottom: 16px;
  padding-top: 0;
  .headertop {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .htright {
      padding: 10px 10px;
      cursor: pointer;
      position: relative;

      img {
        width: 30px;
        vertical-align: middle;
        border-radius: 72px;
        margin-right: 10px;
      }

      .userspare {
        position: absolute;
        top: 55px;
        right: 0;
        transition: all 0.3s;

        &:before {
          position: absolute;
          top: -10px;
          right: 0;
          bottom: 0;
          left: 0;
          content: "  ";
          background-color: none;
        }

        ul {
          position: relative;
          padding: 4px 0;
          text-align: left;
          background-color: #fff;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);

          li {
            clear: both;
            width: 160px;
            margin: 0;
            padding: 5px 12px;
            color: rgba(0, 0, 0, 0.65);
            font-weight: 400;
            font-size: 14px;
            line-height: 22px;
            white-space: nowrap;
            cursor: pointer;
            transition: all 0.3s;

            &:hover {
              background-color: #f6ffed;
              color: #52c41a;
            }
          }
        }
      }

      .userlistfade-enter {
        top: 45px;
        opacity: 0;
      }
    }

    .htright:hover {
      background: rgba(0, 0, 0, 0.025);
    }

    .el-breadcrumb__inner {
      color: rgba(0, 0, 0, 0.45);
    }

    .el-breadcrumb__separator {
      font-weight: normal;
      color: rgba(0, 0, 0, 0.45);
    }
  }

  .headerbottom {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    .greet {
      color: black;
      font-size: 18px;
    }

    .headerimg {
      display: inline-block;
      vertical-align: middle;
      margin-right: 20px;
      width: 72px;
      height: 72px;

      img {
        display: block;
        width: 100%;
        height: 100%;
        border-radius: 72px;
      }
    }
    .headerimg:hover {
      transform: rotate(666turn);
      transition-delay: 1s;
      transition-property: all;
      transition-duration: 59s;
      transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
    }
  }
}
</style>
