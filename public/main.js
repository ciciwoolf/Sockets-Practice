var socket = io.connect('http://localhost:8083', {'forceNew': true })

 /*getElementByID method gets data from html */
 function addMessage(e) {
  var message = {
     author: document.getElementById('username').value,
     text: document.getElementById('text').value
    };
    
    console.log(message)
    socket.emit('new-message', message);
    return false; 
}

socket.on('new-message', function(data){
    console.log("I am listening for new data", data);   //this works
    

   });

  function render (data) {
    var html = `<div> <strong>${data.author}:</strong> ${data.text}</div>`;

    document.getElementById('messages').innerHTML = html;

   }


 //it is <ul> in the index html - should it also be that here? 

  
