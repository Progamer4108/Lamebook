var firebaseConfig = {
      apiKey: "AIzaSyChpq0pL_M0DjVvx7HWL8eSWana2kGAJoA",
      authDomain: "hidf-f57dd.firebaseapp.com",
      databaseURL: "https://hidf-f57dd-default-rtdb.firebaseio.com",
      projectId: "hidf-f57dd",
      storageBucket: "hidf-f57dd.appspot.com",
      messagingSenderId: "956817451481",
      appId: "1:956817451481:web:16213cf9c921613f8ed1c8",
      measurementId: "G-LCW9MYG0Y4"
};
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  console.log("Room Name - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick = 'redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;
            });
      });
}
getData();

function addRoom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}