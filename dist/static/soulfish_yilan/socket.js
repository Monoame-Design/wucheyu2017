 const socket = io("http://172.104.58.18:3000");
 console.log(socket)
 // Function to capture soul and send color to server
 function captureSoul(color) {
     socket.emit('captureSoul', color);
 }

 //  // Listen for the 'addFish' event from the server
 //  socket.on('addFish', (color) => {
 //      generateNewFish(color);
 //  });

 //  // Implement generateNewFish function
 //  function generateNewFish(color) {
 //      // Update the fish to the assigned color
 //      console.log(`New fish generated with color: ${color}`);

 //      // Add logic to update the fish in the exhibition
 //  }

 // Listen for newFish event from the server
 socket.on('newFish', (colorHex) => {
     console.log(`Received new fish with color: ${colorHex}`);
     smoothChangeNewFish(colorHex)
     // You can add code here to handle the received color hex
 });