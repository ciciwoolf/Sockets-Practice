var socket = io.connect('http://localhost:8083', {'forceNew': true })

 /*getElementByID method gets data from html */
 function addMessage(e) {
  var message = {
     author: document.getElementById('username').value,
     text: document.getElementById('text').value
    };
    
    console.log("Here is the", message)

    socket.emit('new-message', message);  //sends to the server main.js, backend
    return false; 
}

//Receives content of message from server main.js
socket.on('new-message', function(data){
    console.log("I am listening for new data", data);   //this works    

   });

    //this event listener isn't doing anything
   document.getElementById("Sent").addEventListener("click", function render (data) {
    
    var html = `<div> <strong>${data.author}:</strong> ${data.text}</div>`;      

    document.getElementById('messages').innerHTML = html;

   });



