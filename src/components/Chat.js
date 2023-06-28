import MessageItem from "./MessageItem";
import MessageBar from "./MessageBar";
import axios from "axios";

export default function Chat({messages, setMessages, loggedUser, receiver}) {
    let sendMessage = (event) => {
        event.preventDefault()
        let msgInput = document.getElementById("message-bar-input")
        let msgText = msgInput.value

        const message = {
            author: loggedUser,
            receiver: receiver,
            text: msgText,
            time: Date.now()
        };

        axios.post('http://localhost:3001/api/messages/addMessage', message)
            .then(res => {
                console.log("Messaggio creato con successo")
                console.log(res.data)
            })
            .catch(error => {
                console.error(error);
            });

        msgInput.value = ""
        setMessages([...messages, {text: msgText, author: loggedUser}])
    }

    return <div id="chat">
        <div id="messages">
            { messages.map( (message, idx) => {
                let side = message.author === loggedUser ? "right" : "left"
                return <MessageItem key={"msg"+idx} message={message} side={side} />
            } ) }
        </div>
        <MessageBar submitHandler={sendMessage} />
    </div>
}