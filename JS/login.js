'use strict';
//Name input box
let uName = document.getElementById('uName');
//Password input box
let pwd = document.getElementById('pwd');

//For testing purposes only - not final code
function checkCred() {
    if(uName.value == "name" && pwd.value == "password") {
        alert("Come in!");
    }
    else {
        alert("If you're not on the list, you're not coming in");
    }
}
