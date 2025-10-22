import WebSocket, { WebSocketServer } from 'ws';
const wss = new WebSocketServer({ port: 8080 });

interface User{
    socket: WebSocket;
    room: string
}

let allSocketers: User[] = [];

[
    {socket: socket1, room: "123123"},
    {socket: socket2, room: "123321"}
]

let allSockets: WebSocket[] = [];

wss.on("connection", (socket) => {
    allSockets.push(socket);

    console.log("user connected #");

    socket.on("message", (message) => {
        console.log("message recieved " + message.toString());
        allSockets.forEach(s => {
            s.send(message.toString() + ": sent from the server")
        })
    })
    socket.on("disconnect", () => {
        allSockets.filter(x => x != socket);
    })
});
