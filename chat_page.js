// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7S40dpUVNRjP8tUAla7IZnkhXS3BJdc8",
    authDomain: "let-us-chat-44a97.firebaseapp.com",
    projectId: "let-us-chat-44a97",
    storageBucket: "let-us-chat-44a97.appspot.com",
    messagingSenderId: "454051658818",
    appId: "1:454051658818:web:244cb9c32bce02acc981db"
  };
  function logout(){
    window.location = "index.html";
  }
  var user_name=localStorage.getData("user_name");
  var room_name=localStorage.getData("room_name");
  var username;
  // user_name  room_name*//
  function send(){
    var message=document.getElementById("message").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0
    });
    document.getElementById("message").value=0;
  }