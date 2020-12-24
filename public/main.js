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

   
   //1. Create variable which links variable to html element
   const sentEvent = document.getElementById("Sent");
  
  
   //2. Create a function that occurs in the event handler function
   function render (data) { 
       console.log ("Rendering yet?", data);       
    var html = `<div> <strong>${data.author}:</strong> ${data.text}</div>`;  
    console.log(html);
    return document.getElementById('messages').innerHTML = html;
    
   }

   //3. Create event handler using above 1 and 2
   sentEvent.onclick = render; 



 
   
   
 



