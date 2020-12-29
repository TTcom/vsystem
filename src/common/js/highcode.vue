<template>
  <div class="highcode">
    <prism inline :language="language">
      <slot></slot>
    </prism>
  </div>
</template>
<script>
import Prism from "vue-prism-component"

import "prismjs/components/prism-rust"

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
      default: "javascript",
      type: String
    }
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped></style>
