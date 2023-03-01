

<template>
    <Header />
    <div class="containerOne">
        <div class="interfaceOne">
            <img src="../assets/display2.png">
            <h1>Copy. Paste. Sync.</h1>
            <p>Experience Unmatched Convenience and Accessibility</p>
        </div>
        <div class="login_form">
            <h1>Log In</h1>
            <!-- <h4> New to Clib Sync? <a href=""><span style="color: #1f8f76">Create a new account</span></a></h4> -->
            <h4> New to Clib Sync? <router-link to="/create"><span style="color: #1f8f76">Create a new
                        account</span></router-link></h4>
            <hr style="display: inline-block; width: 45%;">
            <span style="display: inline;">or</span>
            <hr style="display: inline-block; width: 45%;">
            <div class="fieldsOne">
                <input type="text" placeholder="Email or Username" v-model="Email">
                <input type="password" placeholder="Password" v-model="Password">
                <p>Forgot password?</p>
                <button v-on:click="LoginUser()">Log In</button>
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import { getAuth, connectAuthEmulator, signInWithEmailAndPassword } from '@firebase/auth';
export default {
    name: 'LoginForm',
    components: {
        Header
    },
    data() {
        return {
            Email: '',
            Password: ''
        }
    },
    methods: {
        async LoginUser() {
            const auth = getAuth();
            const email = this.Email;
            const password = this.Password;
            try {
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                const userData = userCredential.user;
                localStorage.setItem('user_data', JSON.stringify(userData));
                this.$router.push({ name: 'HomePage' });
            }
            catch (error) {
                console.log(error)
            }
        }
    }
}
</script>

<style>
.containerOne {
    position: absolute;
    border: 1px solid #f0f0f0;
    width: auto;
    height: auto;
    margin-top: 60px;
    margin-left: 20%;
    /* margin-right: auto; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    /* gap: 20px; */
    /* background-color: #F5F5F5; */
}

div.interfaceOne {
    font-family: 'Mulish', sans-serif;
    font-style: normal;
}

div.interfaceOne h1 {
    font-weight: 600;
    font-size: 40px;
    line-height: 44px;
}

div.interfaceOne p {
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
}

.interfaceOne img {
    margin-left: 11.5%;
    margin-bottom: 40px;
}

.login_form {
    margin-top: 35%;
    box-sizing: border-box;
    /* margin-left: 8%; */
    padding: 0 8%;
    /* margin-right: auto; */
    width: 450px;
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    border-radius: 15px;
    box-shadow: -3px 14px 42px rgba(61, 95, 0, 0.1);
    display: block;
    justify-content: center;
    font-family: 'Mulish', sans-serif;
    font-style: normal;
}

.login_form h1 {
    font-weight: 600;
    font-size: 24px;
    line-height: 28px;
    padding-top: 10px;
    margin-bottom: 7px;
}

.login_form h4 {
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
}

.login_form a {
    text-decoration: none;
    font-weight: 700;
    /* color: black; */
}

.fieldsOne {
    display: flex;
    flex-direction: column;
    margin-top: 18%;
}

.fieldsOne input {
    width: 375px;
    height: 41px;
    margin-bottom: 20px;
    margin-right: auto;
    margin-left: auto;
    /* border: 1px solid #1f8f76; */
    border: 1px solid #f0f0f0;
    border-radius: 8px;
}

.fieldsOne button {
    height: 41px;
    width: 375px;
    background: #1F8F76;
    border-radius: 8px;
    border: 1px solid;
    margin-bottom: 20px;
    color: #FFFFFF;
}

.fieldsOne button:hover {
    opacity: 0.4;
}

.fieldsOne p {
    /* position: sticky; */
    margin-left: 70%;
    /* margin-right: auto; */
    margin-bottom: 20px;
    font-size: 12px;
}</style>