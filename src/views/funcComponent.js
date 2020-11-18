export default {
  methods: {
    handelClick() {
      console.log("handelClick")
    },
    $_handleInputUser(e) {
      console.log(e.target.value)
      this.$set(this.formInline, "user", e.target.value)
    }
  },
  data() {
    return {
      formInline: {}
    }
  },
  render() {
    let data = {
      on: {
        click: this.handelClick
      }
    }
    return (
      <div>
        <h3 {...data}>123456</h3>
        {this.$slots.default}
        <input value={this.formInline.user} onInput={this.$_handleInputUser} placeholder="请输入用户名" />
      </div>
    )
  }
}
