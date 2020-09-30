<template>
  <div class="onlearncontent">
    <h3>
      {{ title }}
    </h3>
    <div class="on_text">
      {{ content }}
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    }
  }
}
</script>
