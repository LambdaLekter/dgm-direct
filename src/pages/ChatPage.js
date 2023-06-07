import React, {useState} from "react";
import ChatsBar from "../components/ChatsBar";
import Chat from "../components/Chat";

export default function ChatPage() {
    const init_loggedUser = "Giuseppe"
    const [loggedUser, setLoggedUser] = useState(init_loggedUser)

    const init_chats = [
        {user: "Domenico"},
        {user: "Michele"}
    ]
    const init_messages = [
        {text: "MSG1", author: "Giuseppe"},
        {text: "MSG2", author: "Giuseppe"},
        {text: "MSG3", author: "Domenico"},
        {text: "MSG4", author: "Giuseppe"},
        {text: "MSG5", author: "Domenico"}
    ]

    return (
        <>
            <div className="App">
                <ChatsBar chats_list={init_chats}/>
                <Chat messages={init_messages} loggedUser={loggedUser}/>
            </div>
        </>
    )
}