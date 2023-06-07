import { io } from "socket.io-client";

const URL = "http://localhost:3000";
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
    console.log(event, args);
});

socket.on("connect_error", (err) => {
    if (err.message === "invalid username") {
        console.log("Invalid Username")
    }
});

export default socket;