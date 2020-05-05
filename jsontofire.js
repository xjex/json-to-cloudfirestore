const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
  apiKey: "apikey-here",
  authDomain: "authdomain",
  projectId: "projectid-here"
  });
  
var db = firebase.firestore();
var fs = require("fs");
var menu =fs.readFileSync("dummy.json");
var data = JSON.parse(menu);

data.forEach(function(obj) {
       db.collection('collection-name-here').add({
       
         id: obj.email, //change obj.your-key
         name: obj.username,
         description: obj.password,
         id: obj.uid
        
        // this will store each json data to each documents
       
   
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});

//credits to medium.com