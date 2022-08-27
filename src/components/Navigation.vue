<script lang="ts">
import type test from 'node:test'
import { defineComponent } from 'vue'
import { useRouter, useRoute } from 'vue-router'

export default defineComponent({

  setup() {
    let tabChoose = false
    const route = useRoute()

    const tabChooser = (tab: string) => {
      return route.path.indexOf(tab) > -1
    }

    return {
      tabChooser
    }
  }
})
</script>

<template>
  <div class="main">
    <div class="menu">
      <RouterLink to="/airecognize" :class="{'tab-chooose': tabChooser('airecognize')}">AI識別</RouterLink>
      <RouterLink to="/autobetting" :class="{'tab-chooose': tabChooser('autobetting')}">自動游戲</RouterLink>
      <RouterLink to="/game" :class="{'tab-chooose': tabChooser('game')}">游戲開發</RouterLink>
      <RouterLink to="contact" :class="{'tab-chooose': tabChooser('contact')}">聯係方式</RouterLink>
    </div>
  </div>
</template>

<style scoped>
.main {
  margin: 30px auto;
}

.menu {
  display: flex;
  justify-content: space-around;
  font-weight: 400;
  font-size: 24px;
  line-height: 29px;
}

.tab-chooose {
  text-decoration: underline;
  text-decoration-color: red;
  text-underline-offset: 10px;
}
</style>
