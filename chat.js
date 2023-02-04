// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7S40dpUVNRjP8tUAla7IZnkhXS3BJdc8",
    authDomain: "let-us-chat-44a97.firebaseapp.com",
    projectId: "let-us-chat-44a97",
    storageBucket: "let-us-chat-44a97.appspot.com",
    messagingSenderId: "454051658818",
    appId: "1:454051658818:web:244cb9c32bce02acc981db"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username
function addUser(){
  username=document.getElementById("user_name").value;
  firebase.database().getElementById("user_name").update({
    purpose:"adding user"
  });
  localStorage.setItem("user_name", username);
  window.location="chat_room.html";
  username=getElementById("user_name").value
}