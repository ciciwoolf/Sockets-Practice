var socket = io.connect('/', {'forceNew': true })
const ul = document.querySelector('.chat');
const username = document.getElementById('username');
const message = document.getElementById('text');
 /*getElementByID method gets data from html */
 function addMessage(e) {
  let info = {
     author: username.value,
     text: message.value
    };
    if(username.value !== '' || message.value !== '') {
        socket.emit('new-message', info);  //sends to the server main.js, backend
    } 
    return false; 
}

//Receives content of message from server main.js
socket.on('new-message', function(data){
    console.log("I am listening for new data", data, ul);
    const listItem = document.createElement('li');
    listItem.innerHTML = `${data.author} : ${data.text}`;
    ul.appendChild(listItem);   //this works  
    username.value = '';
    message.value = '';
   });