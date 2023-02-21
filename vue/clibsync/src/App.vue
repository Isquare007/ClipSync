<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
</script> -->

<template>

<Sidemenu />
<RouterView />
</template>

<script>
import Sidemenu from './components/Sidemenu.vue';

export default {
    components: {
        Sidemenu
    },
    data() {
        return {

        }
    }
}


</script>
