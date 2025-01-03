<template>
  <div class="app-wrapper">
    <NavbarComponent />
    <div class="app-container">
      <RouterView />
    </div>
    <FooterComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from 'vue-router';
import NavbarComponent from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default defineComponent({
  name: 'AppVue',
  components: {
    RouterView,
    NavbarComponent,
    FooterComponent
  },
  setup() {
    return {}
  }
})
</script>

<style>
html, body, .app-wrapper {
  height: 100%;
  margin: 0;
}

.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-container {
  flex: 1;
}

footer {
  text-align: center;
  padding: 1rem 0;
  border-top: 1px solid #ddd;
}
</style>