<template>
  <nav class="ui-header">
    <header-brand />
    <header-ul />
  </nav>
</template>

<script>
import headerBrand from './components/header-brand/header-brand.vue'
import HeaderUl from './components/header-ul/header-ul.vue'

export default {
  components: { headerBrand, HeaderUl },
  name: 'ui-header'
}
</script>

<style scoped lang="stylus">
@import 'styles.styl'
</style>
