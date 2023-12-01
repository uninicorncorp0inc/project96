var firebaseConfig = {
      apiKey: "AIzaSyCA2U8L0kmFvqUXXwhM3pPIe_qt_5xCYow",
      authDomain: "class94-facetube.firebaseapp.com",
      databaseURL: "https://class94-facetube-default-rtdb.firebaseio.com",
      projectId: "class94-facetube",
      storageBucket: "class94-facetube.appspot.com",
      messagingSenderId: "986524540176",
      appId: "1:986524540176:web:b8cf67de12b8e9729b1995"
    };
    






    
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name")
//To store the name of the person and the name of the room
document.getElementById("user_name").innerHTML = "Welcome " + user_name;
function getData(){
      firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     
      
      });});}
getData();


function addRoom(){
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location.replace("kwitter_page.html");

}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html");

}

function getRoom(){
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;

            console.log(Room_names);

            row = " <div class = 'room_name' id = " +  Room_names + " onclick = 'redirectToRoomName(this.id)' > # "+ Room_names + " </div> <hr>"; 
            document.getElementById("output").innerHTML += row;
});});}

getRoom();

function redirectToRoomName(Room_names){
      localStorage.setItem("room_name", Room_names);
      window.location = "kwitter_page.html";
}