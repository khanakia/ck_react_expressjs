var xdec2 = atob;
function xdec(e) { try { v = xdec2(e.substring(2)) } catch (n) { v = "" } return v }

console.log(xdec("MuY2JtZnUtNWE1NmIuZmlyZWJhc2VhcHAuY29t"))
// cbmfu-5a56b.firebaseapp.com

console.log(xdec("e9aHR0cHM6Ly9jYm1mdS01YTU2Yi5maXJlYmFzZWlvLmNvbQ=="))
// https://cbmfu-5a56b.firebaseio.com

console.log(xdec("UtY2JtZnUtNWE1NmIuYXBwc3BvdC5jb20="))
// cbmfu-5a56b.appspot.com

// // See https://firebase.google.com/docs/web/setup#project_setup for how to
// // auto-generate this config
var config = {
  apiKey: "apiKey",
  authDomain: "cbmfu-5a56b.firebaseapp.com",
  databaseURL: "https://cbmfu-5a56b.firebaseio.com",
  storageBucket: "cbmfu-5a56b.appspot.com"

};

firebase.initializeApp(config);

// var rootRef = firebase.database().ref();

var t = firebase.database().ref("/lval");
    t.on("value", function(e) { 
    	var a = xdec(e.val());
        console.log(JSON.parse(a));

     })

// console.log(rootRef)