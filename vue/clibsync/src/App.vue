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

export default {
    mounted() {
        // const userId = firebase.auth().currentUser.uid;
        // this.storage('2EpaUOFlvvOC30ZOLEoh7qABuJy2')
    },
    components: {
        Sidemenu,
        Cliptext
    },
    data() {
        return {
            content: ""
        }
    },
    methods: {
        // storage(id) {
        //     let data;
        //     fetch(`https://clipsync-1-default-rtdb.firebaseio.com/copied_data/${id}.json`)
        //     .then(response => {
        //         if (response.ok) {
        //         return response.json();
        //         } else {
        //         throw new Error('Failed to fetch data');
        //         }
        //     })
        //     .then(usersData => {
        //         let arr = Object.entries(usersData).reverse();
        //         let reversedObj = Object.fromEntries(arr);
        //         this.content = reversedObj;
        //         console.log(typeof(this.content));
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
        // },
    }
}


</script>
