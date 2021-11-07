const express = require("express");//access
const socket = require("socket.io");

const app = express(); //initialised and server ready

app.use(express.static("src"));

let port = 3000;
let server = app.listen(port, () => {
    console.log("listening to port " + port);
})

let io = socket(server); //initialise socket
io.on("connection", (socket) => { //pass instance of socket(jab bhi connect hoga, iss event ko chala do)
    console.log("made socket connection");
}
)
