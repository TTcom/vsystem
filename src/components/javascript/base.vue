<template>
  <div class="base onlearncontent">
    <h4 class="on_text">布尔值也可作为比较的结果：</h4>
    <highcode :language="'javascript'"> let isGreater = 4 > 1;</highcode>
    <highcode :language="'javascript'"> alert( isGreater ); // true（比较的结果是 "yes"）</highcode>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss"></style>
