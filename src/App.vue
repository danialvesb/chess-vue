<template>
  <div id="app">
    <app-template>
      <template slot="header-template">
        <ui-header />
      </template>
    </app-template>
  </div>
</template>

<script>
import appTemplate from '@/templates/app-template/app-template.vue'
import uiHeader from '@/components/ui-header/ui-header.vue'

export default {
  name: 'App',
  components: { appTemplate, uiHeader }
}
</script>
