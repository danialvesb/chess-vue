<template>
  <div class="app-template">
    <div class="header-template">
      <slot name="header-template"/>
    </div>
    <div class="body-template">
      <slot name="body-template" />
    </div>
    <div class="fotter-template">
      <slot name="fotter-template" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-template'
}
</script>

<style lang="stylus">
@import 'styles.styl'
</style>
