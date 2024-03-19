const firebaseConfig = {
  apiKey: "AIzaSyD26o1zRiQj2EvHqeb9sr6NGt_wrQcl0Ug",
  authDomain: "nimble-yen-409711.firebaseapp.com",
  databaseURL: "https://nimble-yen-409711-default-rtdb.firebaseio.com",
  projectId: "nimble-yen-409711",
  storageBucket: "nimble-yen-409711.appspot.com",
  messagingSenderId: "136522270698",
  appId: "1:136522270698:web:ab303e1e9dc29d44275493",
  measurementId: "G-9207FNDP1N"
};

firebase.initializeApp(firebaseConfig);
const auth=firebase.auth();


const loginForm=document.getElementById("login");
 const signup=document.getElementById("signup");

signup.addEventListener('submit',(e)=>{
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('pwd').value;

  auth.createUserWithEmailAndPassword(email, password,)
    .then((userCredential) => {
      // Registration successful
      console.log("created"+userCredential.password)
 alert("Registerd successfully Pls Login in");
 
    })
    .catch((error) => {
      // Handle registration errors
      alert(error.message)
      console.error('Registration error:', error.message);
    });
});

loginForm.addEventListener('submit',(e)=>{
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-pwd').value;

  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Registration successful
      console.log("logged in"+userCredential)
      document.querySelector('header').classList.add('hidden'); // Hide the signup/login form
      document.querySelector('.main').classList.add('hidden'); // Hide the signup/login form
      document.getElementById('food-content').classList.remove('hidden'); // Show the food content;
    })
    .catch((error) => {
      // Handle registration errors
      console.error('Registration error:', error.message);
    });
});






     

