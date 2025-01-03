<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-bar"
                aria-controls="nav-bar" aria-expanded="false" aria-label="navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="nav-bar">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a href="#home" class="nav-link">Inicio</a>
                    </li>
                    <li class="nav-item">
                        <a href="#about" class="nav-link">Sobre mí</a>
                    </li>
                    <li class="nav-item">
                        <a href="#experience" class="nav-link">Experiencia</a>
                    </li>
                    <li class="nav-item">
                        <a href="#education" class="nav-link">Educación</a>
                    </li>
                    <li class="nav-item last-item">
                        <a href="#contact" class="nav-link">Contáctame</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'NavbarComponent',
    setup() {
        return {}
    }
})
</script>

<style>
.navbar-nav .nav-link {
    color: #F85C70 !important;
    font-weight: bold;
}

.navbar-nav .nav-link:hover {
    color: #17263C !important;
}
</style>