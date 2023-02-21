// import { connect } from 'http2';
// import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
// import { getAuth, onAuthStateChanged, connectAuthEmulator, createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// const firebaseAppConfig = getFirebaseConfig();
// initializeApp(firebaseAppConfig);

const firebaseConfig = {
    apiKey: "AIzaSyBXhUo_ELj_qmWXaowRsrUih9HN27RpdZE",
    authDomain: "clipsync-1.firebaseapp.com",
    databaseURL: "https://clipsync-1-default-rtdb.firebaseio.com",
    projectId: "clipsync-1",
    storageBucket: "clipsync-1.appspot.com",
    messagingSenderId: "690979459053",
    appId: "1:690979459053:web:17da89ff7ca9e332bfe1e4",
    measurementId: "G-5TLB54S34G"
};

firebase.initializeApp(firebaseConfig);
// const app = initializeApp(firebaseConfig);
var auth = firebase.auth()
var  database = firebase.database()
// const auth = getAuth(firebaseConfi 
// onAuthStateChanged(auth, user => {
//     if(user != null ) {
//         console.log('logged in');
//     }
//     else {
//         console.log('No User');
//     }
// })

// connectAuthEmulator(auth, "http://localhost:9099")
// const auth = firebase.auth()
// const database = firebase.database()

// registers new users to website
// const registerButton = document.getElementById("registerButton");
// registerButton.addEventListener("click", function() {
//     console.log('Here');
//     register_newUser();
// })
function register_newUser () {
    // Get all input from form in html file
    const username = document.querySelector("input[id='username']").value
    console.log(username);
    const email = document.querySelector("input[id='email']").value
    console.log(email)
    const password = document.querySelector("input[id='password']").value

    if (validateEmail(email) == false || validatePassword(password) == false) {
        alert ('Please provide a valid email or password')
        // return
    }
    alert('Create User?');

    if (!username || !email || !password) {
        alert('Please enter a value for all fields');
        return;
    }
    else {
        console.log(username)
        console.log(email)
        alert('User and Email here')
    }
    //Authenticating user

    // const signInEmailPassword = await createUserWithEmailAndPassword(auth, email, password);
    // console.log(signInEmailPassword)

    // createUserWithEmailAndPassword 
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // const user = auth.currentUser
            const user = userCredential.user;
            alert('User created')
            console.log(user)

            // Adding new user to firebase database

            const database_ref = database.ref()

            // create User's Data
            const user_data = {
                username: username,
                email: email,
                last_login: Date.now()
            }

            alert('User created!')

            // Saving user_data to database 
            database_ref.child('users/' + user.uid).set(user_data)
        })
        .catch(function(error) {
            var error_code = error.code;
            const error_message = error.message;

            alert(error_message)
        })
}

function validateEmail (email) {
    const expression = /^[^@]+@\w+(\.\w+)+\w$/;
    if (expression.test(email) === true) {
        return true;
    }
    else {
        return false;
    }
}

function validatePassword (password) {
    if (password < 8) {
        return false
    }
    return true
}

