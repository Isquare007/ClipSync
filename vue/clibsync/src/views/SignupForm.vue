<template>
    <Header />
    <div class="container">
        <div class="interface">
            <img src="../assets/display.png">
            <h1>Copy. Paste. Sync.</h1>
            <p>Experience Unmatched Convenience and Accessibility</p>
        </div>
        <div class="signup_form">
            <h1>Create Account</h1>
            <!-- <h4> Already have an account? <a href=""><span style="color: #1f8f76">Log in</span></a></h4> -->
            <h4> Already have an account? <router-link to="/login"><span style="color: #1f8f76">Log In</span></router-link>
            </h4>
            <hr style="display: inline-block; width: 45%;">
            <span style="display: inline;">or</span>
            <hr style="display: inline-block; width: 45%;">
            <div class="fields">
                <div class="name">
                    <input type="text" placeholder="First Name" v-model="FirstName">
                    <input type="text" placeholder="Last Name" v-model="LastName">
                </div>
                <input type="text" placeholder="Email" v-model="Email">
                <input type="password" placeholder="Password" v-model="Password">
                <button v-on:click="createAccount()">Create Account</button>
                <p>
                    By continuing, you agree ClibSync <a href=""><span style="color: #1f8f76;">Terms of Service</span></a>
                    and <a href=""><span style="color: #1f8f76;">Privacy Policy</span></a>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
// import '../assets/main.css'
import Header from '../components/Header.vue';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth';
import { getDatabase, ref, set, onValue } from 'firebase/database';
export default {
    name: 'SignupForm',
    components: {
        Header
    },
    data() {
        return {
            FirstName: '',
            LastName: '',
            Email: '',
            Password: ''
        }
    },
    methods: {
        writeUserData(userId, email, fname, lname) {
            const db = getDatabase();
            const reference = ref(db, 'users/' + userId)

            set(reference, {
                first_name: fname,
                last_name: lname,
                email: email,
                created_at: new Date().toISOString(),
                updated_at: new Date().toISOString()
            })
        },
        async createAccount() {
            const auth = getAuth();
            const FirstName = this.FirstName;
            const LastName = this.LastName;
            const email = this.Email;
            const password = this.Password;
            console.log(FirstName, LastName)
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log(userCredential);
                const userData = userCredential.user;
                console.log(userData);
                var user_id = userCredential.user.uid;
                console.log(user_id);
                localStorage.setItem('user_data', JSON.stringify(userData)); // Keeps userSigned by registering userData on localStorag
                this.$router.push({ name: 'texts' }) //Takes signed up user to the home/dash
            }
            catch (error) {
                console.log(error)
            }
            this.writeUserData(user_id, email, FirstName, LastName);
        }
    }
}
</script>

<style scoped>
.container {
    position: absolute;
    border: 1px solid #f0f0f0;
    width: auto;
    height: auto;
    margin-top: 70px;
    margin-left: 20%;
    margin-right: 11.5%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* gap: 40px; */
    /* background-color: #F5F5F5; */
}

div.interface {
    font-family: 'Mulish', sans-serif;
    font-style: normal;
}

div.interface h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 44px;
}

div.interface p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
}

.interface img {
    margin-left: 20%;
    width: 70%;
    height: 50%;
}

.signup_form {
    margin-top: 16%;
    margin-left: auto;
    padding: 0 8%;
    /* margin-right: auto; */
    /* width: 450px; */
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 15px;
    box-shadow: -3px 14px 42px rgba(61, 95, 0, 0.1);
    display: block;
    justify-content: center;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
}

.signup_form h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    padding-top: 10px;
    margin-bottom: 7px;
}

.signup_form h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
}

.signup_form a {
    text-decoration: none;
    font-weight: 700;
    /* color: black; */
}

.fields {
    display: flex;
    flex-direction: column;
    margin-top: 18%;
}

.fields input {
    width: 100%;
    height: 41px;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    /* border: 1px solid #1f8f76; */
    border: 1px solid #f0f0f0;
    border-radius: 8px;
}

.name {
    display: flex;
    flex-direction: row;
    gap: 15px;
}

.name input {
    width: 50%;
}

.fields button {
    height: 41px;
    width: 100%;
    background: #1F8F76;
    border-radius: 8px;
    border: 1px solid;
    margin-bottom: 20px;
    color: #FFFFFF;
}

.fields button:hover {
    opacity: 0.4;
}

.fields p {
    margin-bottom: 20px;
}


@media screen and (max-width: 576px) {
    #app {
        height: auto !important;
    }

    .container {
        display: block;
        margin-right: 10%;
        margin-left: 8.65%;
        margin-top: 90px;
    }

    .fields input {
        width: 100%;
    }

    .fields button {
        width: 100%;
    }

    .interface img {
        margin-left: 20%;
        width: 70%;
        height: 70%;
    }
}

@media screen and (max-width: 768px) {
    #app {
        height: auto !important;
    }

    .container {
        display: block;
        margin-right: 15% !important;
        margin-left: 17% !important;
        margin-top: 90px;
    }

    .fields input {
        width: 100%;
    }

    .fields button {
        width: 100%;
    }

    .interface img {
        margin-left: 20%;
        width: 70%;
        height: 70%;
    }
}

@media screen and (max-width: 992px) {
    #app {
        height: auto !important;
    }

    .container {
        /* display: block; */
        margin-right: 5%;
        margin-left: 5%;
        margin-top: 90px;
    }

    .fields input {
        width: 100%;
    }

    .fields button {
        width: 100%;
    }

    .interface img {
        margin-left: 20%;
        width: 80%;
        height: 57%;
    }
}


*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  position: relative;
  font-weight: normal;
}

body {
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
  transition: color 0.5s, background-color 0.5s;
  line-height: 1.6;
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
    Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>