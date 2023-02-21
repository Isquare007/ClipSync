<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <body class="body"><a data-animation="over-left" data-collapse="small" data-duration="400" data-easing="ease-in"
        data-easing2="ease-out" role="banner" class="navbar-logo-left w-nav">
        <div class="navbarcontainer w-container">
            <div class="navbar-content">
                <nav role="navigation" class="navbar-menu w-nav-menu">
                    <div class="nav"><img
                            src="./assets/LOgo.svg"
                            loading="eager" alt="" class="logo" />
                        <div class="selected-text"><img
                                src="./assets/Vectors-Wrapper.svg"
                                loading="lazy" alt="" class="vectors-wrapper" />
                            <a href="" class="texts-select">Texts</a>
                        </div>
                        <div class="pictures">
                            <a href="" class="_14-regular">Pictures</a>
                        </div>
                        <div class="document">
                            <a href="" class="_14-regular">Document</a>
                        </div>
                    </div>
                </nav>
            </div>
            <div class="menu-button">
                <button class="dropbtn">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="black"/>
                    </svg>
                </button>
        </div>
    </div>
    </a>
  </body>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
