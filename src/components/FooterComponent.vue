<template>
    <footer class="footer py-3">
        <div class="container">
            <p class="small mb-0 text-danger">
                &copy; {{ year }} Creado por <span class="text-danger">Franz Flores</span>
            </p>
        </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

export default defineComponent({
    name: 'FooterComponent',
    setup() {
        const config = reactive({
            year: new Date().getFullYear()
        });

        return {
            ...toRefs(config)
        }
    }
})
</script>

<style>
small {
    font-size: 80%;
}

.footer {
    background: #FFF;
    padding: 1rem 0;
}

.text-danger {
    font-weight: bold;
    color: #F85C70 !important;
}

a.text-danger:hover,
a.text-danger:focus {
    color: #f51330 !important;
}
</style>