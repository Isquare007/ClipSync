<!-- <script setup>
import { RouterLink, RouterView } from 'vue-router'
</script> -->

<template>

<Sidemenu
/>

<RouterView :content="content" />
</template>

<script>
import Sidemenu from './components/Sidemenu.vue';
import Cliptext from './components/Cliptext.vue';
import data from './database.json'

export default {

    components: {
        Sidemenu,
        Cliptext
    },
    data() {
        return {
            content: data,
        }
    }
}


</script>
