const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBvBheGoO6EGNOoBquiIiAKIneae6dQZYU",
  authDomain: "gen-ai-web.firebaseapp.com",
  databaseURL: "https://gen-ai-web-default-rtdb.firebaseio.com",
  projectId: "gen-ai-web",
  storageBucket: "gen-ai-web.firebasestorage.app",
  messagingSenderId: "266109203719",
  appId: "1:266109203719:web:ee2a93477b69ac570c81a2",
  measurementId: "G-HJE5NR631L"
  };

  // initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database

var LoginInfoDB = firebase.database().ref("LoginInfo");

document.getElementById('LoginForm').addEventListener('submit',submitForm);
function submitForm(e){
  e.preventDefault();

  var Name = getElementVal("Name");
  var Email = getElementVal("Email");
  var Password= getElementVal("Password");

  savedMessages(Name, Email, Password);

  //console.log(Name, Email, Password);
}

const savedMessages = (Name, Email, Password) => {
  var newLoginInfo = LoginInfoDB.push();

  newLoginInfo.set({
    Name: Name,
    Email:Email,
    Password: Password,
  });
};
const getElementVal = (id) => {
  return document.getElementById(id).value;
};