// import { connect } from 'http2';
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-app.js';
import { getAuth, onAuthStateChanged, connectAuthEmulator, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-auth.js';
import { getDatabase, ref, set, onValue } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-database.js';
// import { getFirestore } from 'https://www.gstatic.com/firebasejs/9.17.1/firebase-firestore.js';

const firebaseConfig = initializeApp({
    apiKey: "AIzaSyBXhUo_ELj_qmWXaowRsrUih9HN27RpdZE",
    authDomain: "clipsync-1.firebaseapp.com",
    databaseURL: "https://clipsync-1-default-rtdb.firebaseio.com",
    projectId: "clipsync-1",
    storageBucket: "clipsync-1.appspot.com",
    messagingSenderId: "690979459053",
    appId: "1:690979459053:web:17da89ff7ca9e332bfe1e4",
    measurementId: "G-5TLB54S34G"
});
const auth = getAuth(firebaseConfig);
// const database = getDatabase(firebaseConfig);
// const db = getFirestore(firebaseConfig)

function writeUserData(userId, email, name) {
    const db = getDatabase();
    const reference = ref(db, 'users/' + userId)
    
    set(reference, {
        username: name,
        email: email
    })
}




onAuthStateChanged(auth, user => {
    if(user != null ) {
        console.log(user);
        console.log('logged in');
    }
    else {
        console.log('No User');
    }
})
// const db = getFirestore(app);

// connectAuthEmulator(auth, "http://localhost:9099")
const loginEmailPassword = async () => {
    const loginEmail = txtEmail.value;
    console.log(loginEmail)
    const loginPassword = txtPassword.value;

    try{
        const userCredential = await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential.user)
    }
    catch(error) {
        console.log(error)
    }
}

// const createAccount = async () => {x
//     const user_name = username.value
//     console.log(user_name);
//     const email_ = email.value
//     const password_ = password.value

//     await createUserWithEmailAndPassword(auth, user_name, email_, password_)
//     writeUserData(auth, user_name, email_);

//     if (validateEmail == false || validatePassword == false) {
//         alert ('Please provide a valid email or password')
//         return 
//     }

//     //Adding new user to firebase database

// }

// function writeUserData(userId, user_name, email_) {
//     const db = getDatabase();
//     const reference = ref(db, 'users/' + userId)

//     set(reference, {
//         username: user_name,
//         email: email_,
//     })    
// }

// writeUserData("12u3i91", "belac", "akkaian@gmail");
// console.log(createAccount);

// function validateEmail (email) {
//     const expression = /^[^@]+@\w+(\.\w+)+\w$/;
//     if (expression.test(email) === true) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function validatePassword (password) {
//     if (password < 8) {
//         return false
//     }
//     return true
// }
loginButton.addEventListener("click", loginEmailPassword)

const createAccount = async () => {
    const username = txtUsername.value;
    console.log(username);
    var loginEmail = txtEmail.value;
    console.log(loginEmail)
    const loginPassword = txtPassword.value;

    try{
        const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
        console.log(userCredential);
        console.log(userCredential.user)
        var user_id = userCredential.user.uid;
        console.log(user_id);
    }
    catch(error) {
        console.log(error)
    }

    writeUserData(user_id, loginEmail, username);
}
registerButton.addEventListener("click", createAccount)
