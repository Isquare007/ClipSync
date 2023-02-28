<template>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Heebo&family=Noto+Serif+Khojki&family=Pacifico&family=Mulish&family=Raleway&family=Roboto&display=swap" rel="stylesheet">
  <router-view/>
  <!-- <SignupForm/> -->
  <!-- <LoginForm/> -->

</template>

<script>
import Header from './components/Header.vue';
import SignupForm from './views/SignupForm.vue';
import LoginForm from './views/LoginForm.vue';
export default {
  name: 'App',
  components: {
    SignupForm,
    LoginForm,
    Header
  }
}
</script>