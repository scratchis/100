// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7S40dpUVNRjP8tUAla7IZnkhXS3BJdc8",
    authDomain: "let-us-chat-44a97.firebaseapp.com",
    projectId: "let-us-chat-44a97",
    storageBucket: "let-us-chat-44a97.appspot.com",
    messagingSenderId: "454051658818",
    appId: "1:454051658818:web:244cb9c32bce02acc981db"
  }
  function addRoom(){
    var roomName = document.getElementById("room_name").value;
    localStorage.setItem(room,roomName);
    window.location="chat_page.js";
    document.getElementById.innerHTML=row;
  }
  function logout(){
    window.location = "index.html";
    localStorage.removeItem("user_name")
    localStorage.removeItem("room_name")
  }
  getElementById("welcome-tag").setItem="<h1 id='welcome-tag' >Welcome "+username+"!</h1>";
  function getData(){
    firebase.database().ref("/").on('value',function(snapshot) {document.getElementById("output").innerHTML="";snapshot.forEach(function(childSnapshot) {childKey=childShapshot.key;Room_names=childKey;row="<div class='room_name' id="+Room_names+" onclick='rediectToRoomName(this.id)'>#"+Room_names+"</div><hr>"});});}
    function rediectToRoomName(){

    }