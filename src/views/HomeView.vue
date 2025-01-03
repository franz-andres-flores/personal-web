<template>
  <div class="home-view">
    <div class="container">
      <ul class="social-icons pt-3">
        <li class="social-item">
          <a class="social-link text-light" href="https://www.facebook.com/franz.flores.7" target="_blank"><i
              class="ti-facebook" aria-hidden="true"></i></a>
        </li>
        <li class="social-item">
          <a class="social-link text-light" href="https://x.com/franzandresflo" target="_blank"><i class="ti-twitter"
              aria-hidden="true"></i></a>
        </li>
        <li class="social-item">
          <a class="social-link text-light" href="https://github.com/FranzAndresFlores" target="_blank"><i
              class="ti-github" aria-hidden="true"></i></a>
        </li>
        <li class="social-item">
          <a class="social-link text-light" href="https://linkedin.com/in/franz-flores-945441238" target="_blank"><i
              class="ti-linkedin" aria-hidden="true"></i></a>
        </li>
      </ul>

      <div class="home-content">
        <h1 class="home-title">Franz Flores</h1>
        <h6 class="home-mono">Full Stack Developer</h6>
        <div class="home-btns">
          <a class="btn btn-primary btn-separator">Ver Experiencia</a>
          <a class="btn btn-secondary">Ver Portafolio</a>
        </div>
      </div>

    </div>
  </div>


</template>

<script lang="ts">
import { defineComponent } from 'vue';

import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    NavbarComponent,
    FooterComponent
  },
  setup() {
    return {}
  }
})
</script>

<style>
.home-view {
  background-color: #17263C;
  color: #fff;
}

/*social icons*/
.text-light {
  color: #f8f9fa !important;
}

a.text-light:hover,
a.text-light:focus {
  color: #cbd3da !important;
}

/*container*/
.home-content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 83vh;
  flex-direction: column;
}

.home-title {
  font-size: calc(40px + (120 - 40) * ((100vw - 300px) / (1600 - 300)));
  font-weight: bold;
  line-height: .7;
  margin-bottom: 25px;
  color: #cbd3da;
}

.home-subtitle {
  font-weight: 200;
  font-size: calc(20px + (45 - 20) * ((100vw - 300px) / (1600 - 300)));
}

.home-mono {
  letter-spacing: 5px;
  font-weight: 500;
  font-size: calc(12px + (19 - 12) * ((100vw - 300px) / (1600 - 300)));
  margin-bottom: 40px;
}

.btn-separator {
  margin-right: 10px;
}

</style>
