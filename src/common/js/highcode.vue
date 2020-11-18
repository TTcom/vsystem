<template>
  <div class="highcode">
    <prism :language="language">{{ code }}</prism>
  </div>
</template>
<script>
import Prism from "vue-prism-component"
export default {
  name: "highcode",
  components: {
    Prism
  },
  props: {
    code: {
      default: "",
      type: String
    },
    language: {
      default: "",
      type: String
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped></style>
