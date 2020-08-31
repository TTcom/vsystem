<template>
  <div class="onimpress">
    <div id="impress" data-transition-duration="1000">
      <div id="markdown" class="step slide markdown" data-rel-x="0" data-rel-y="900">
         Impress.js presentations * This presentation was written entirely in Markdown * Added by popular request * Easy way to make quick, simple yet
        aesthetic, presentations * Authoring without all the clutter of HTML ----- # Markdown.js * Provided by [Markdown.js](https://github.com/evilstreak/markdown-js) in
        [extras/](https://github.com/impress/impress.js/tree/master/extras) * Jot down your bullet points in *Markdown* & have it automatically converted to HTML * Note: The
        Markdown is converted into a presentation client side, in the browser. This is unlike existing tools like 
      </div>

      <div id="title-slide" class="step slide title markdown" data-x="2000" data-y="5000">
        # Title slide ## This slide has different CSS class than the previous ones
      </div>

      <div id="tilted-slide" class="step slide markdown" data-rotate="-85" data-x="2000" data-y="2000" data-z="1000" data-scale="4">
        # Simplicity of Markdown & Full power of Impress.js * This slide sets its own `rotate`, `x`, `y`, and even `z` coordinates * Note that the Mother Teresa slide earlier was
        pimped with some custom CSS, all the while the content was written in simple Markdown.
      </div>

      <div class="step slide title markdown" data-rotate="-85" data-x="4000" data-y="2000" data-markdown-dialect="Maruku">
        This is an example of a slide with a specific Markdown dialect. ===============================================================
      </div>

      <div id="js-slide" class="step slide" data-rotate="0" data-x="4000" data-y="5000">
        <h1>CSS &amp; JavaScript magic</h1>

        <p>Just to emphasize my point, this last slide allows you to use a JavaScript powered menu to toggle the CSS style:</p>

        <p>
          <a href="#" onclick="enableBwCss();" class="css-menu-bw">Black &amp; white</a>, <a href="#" onclick="enableDevopsCss();" class="css-menu-devopsy">Devopsy</a>,
          <a href="#" onclick="enableEffectsCss();" class="css-menu-effects">Effects overload</a>
        </p>

        <p>Simplicity of Markdown married with full power of Impress.js!</p>
      </div>

      <div id="overview" class="step" data-x="5000" data-y="4000" data-scale="10" style="pointer-events: none;" data-rotate="5"></div>
    </div>
    <button type="button" style="width:120px" onclick="impress().prev(); return false;">上</button>
    <button type="button" style="width:120px" onclick="impress().next(); return false;">下</button>
  </div>
</template>
<script>
export default {
  name: "onimpress",
  mounted() {
     require("@/common/js/impress")
     impress().init()
  }
}
</script>
<style lang="scss" scoped>
.onimpress{
   @import url("@/common/css/markdown-slides.css");
}

</style>
