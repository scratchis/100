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
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name=message_data['name'];
message=message_data['message'];
like=message_data['like'];
name_with_tag="<h4>"+name+"<img class='user_tick' src='tick.png'></h4>";
message_with_tag="<h4 class='message_h4'>"+message+"<h4>";
like_button="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'";
span_with_tag="<span class='glyphicon glyphicon-thunbs-up'>Like: "+like+"</span></button><hr>";
row=name_with_tag+message_with_tag+like_button+span_with_tag;
document.getElementById("output").innerHTML+=row;
//End code

 } });  }); };
getData();
function updateLike(message_id){
  console.log("clicked on like button - "+ message_id);
  button_id=message_id;
  likes=document.getElementById(button_id).value;
  updated_likes=Number(likes)+1;
  console.log(updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
        like:updated_likes
  });
}
function logout(){
  localStorage.removeItem("user_name")
  localStorage.removeItem("room_name")
  window.location.replace("index.html");
}