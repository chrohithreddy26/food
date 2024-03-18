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
var foodDb = firebase.database().ref('catering');

document.getElementById('signup').addEventListener('submit', submitSignup);
document.getElementById('login').addEventListener('submit', submitLogin);

function submitSignup(e) {
  e.preventDefault();
  var name = getElementVal('txt');
  var email = getElementVal('email');
  var pwd = getElementVal('pwd');
  signupUser(name, email, pwd);
}

function submitLogin(e) {
  e.preventDefault();
  var email = getElementVal('login-email');
  var pwd = getElementVal('login-pwd');
  loginUser(email, pwd);
}

const signupUser = (name, email, pwd) => {
  var details = foodDb.push({
    name: name,
    email: email,
    password: pwd
  });
  alert("Registration successful! Please login.");
}
var loginUser = (email, pwd) => {
  firebase.auth().signInWithEmailAndPassword(email, pwd)
    .then(() => {
      // Login successful
      alert("Login successful!");
      document.querySelector('.main').classList.add('hidden'); // Hide the signup/login form
      document.getElementById('food-content').classList.remove('hidden'); // Show the food content
    })
    .catch((error) => {
      var errorMessage = error.message;
      alert("INVALID");
    });
}


var getElementVal = (id) => {
  return document.getElementById(id).value;
}
