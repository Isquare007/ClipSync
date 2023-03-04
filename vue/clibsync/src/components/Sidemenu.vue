<template>
    <div class="navbarcontainer w-container">
        <div class="navbar-content">
            <nav role="navigation" class="navbar-menu w-nav-menu">
                <div class="nav"><img src="../assets/LOgo.svg" loading="eager" alt="" class="logo" />
                    <div class="navoption">
                        <router-link to="/texts" active-class="active" class="_14-regular">Texts</router-link>
                    </div>
                    <div class="navoption">
                        <router-link to="/pictures" active-class="active" class="_14-regular">Pictures</router-link>
                    </div>
                    <div class="navoption">
                        <router-link to="/documents" active-class="active" class="_14-regular">Document</router-link>
                    </div>
                    <button class="log-out _14-regular" v-on:click="signOut()">
                        <img src="../assets/log_out.svg" class="log-btn">
                        Log Out
                    </button>
                </div>
            </nav>
        </div>
        <div class="menu-button">
            <button @click="menuTrigger()" class="dropbtn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 18H21V16H3V18ZM3 13H21V11H3V13ZM3 6V8H21V6H3Z" fill="black" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script>
import { getAuth, signOut } from 'firebase/auth';
export default {
    methods: {
        menuTrigger() {
            const dropdownContent = document.querySelector('.navbar-content');
            dropdownContent.classList.toggle('show');
        },
        signOut() {
            const auth = getAuth();
            signOut(auth).then(() => {
                // Sign-out successful.
                console.log('User signed out successfully.');
                this.$router.push({name: 'LoginForm'});
            }).catch((error) => {
                // An error happened.
                console.error(error);
            });
        }
    }
}
</script>