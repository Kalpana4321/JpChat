
document.addEventListener("DOMContentLoaded", function(){

  const websocketClient = new WebSocket("ws://localhost:12345/");

  const messageContainer = document.querySelector("message_container");
  const messageInput = document.querySelector("name=message_input");
  const sendmessageButton = document.querySelector("name=send_message_button");

  websocketClient.onopen = function(){
      console.log("client connected!");  

      sendmessageButton.onclick = function(){
          websocketClient.send(messageInput.value);
      };

    websocketClient.onmessage = function(message){
      const newmessage = document.createElement("div");
      newmessage.innerHTML = message.data;
      messageContainer.appendChild(newmessage);
    };

  };  

}, false);