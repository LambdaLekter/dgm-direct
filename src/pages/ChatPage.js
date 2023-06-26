import React, {useState} from "react";
import ChatsBar from "../components/ChatsBar";
import Chat from "../components/Chat";
import axios from "axios";

const init_loggedUser = "fratm"
const init_receiver = "sorm"
const init_chats = [
    {user: "Domenico"},
    {user: "Michele"}
]
const init_messages = (user1, user2, setMessages) => {
    axios.post(`http://localhost:3001/api/messages/${user1}/${user2}`)
        .then(res => {
            setMessages(res.data)
        })
        .catch(error => {
            console.error(error);
        });
}

export default function ChatPage() {
    const [loggedUser, setLoggedUser] = useState(init_loggedUser)
    const [receiver, setReceiver] = useState(init_receiver)
    const [messages, setMessages] = useState([])

    init_messages(loggedUser, receiver, setMessages)

    return (
        <>
            <div className="App">
                <ChatsBar chats_list={init_chats}/>
                <Chat
                    messages={messages}
                    setMessages={setMessages}
                    loggedUser={loggedUser}
                    receiver={receiver}
                />
            </div>
        </>
    )
}

// TODO prendere il loggedUser dalla sessione