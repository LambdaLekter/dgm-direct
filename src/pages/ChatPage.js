import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ChatsBar from "../components/ChatsBar";
import Chat from "../components/Chat";
import axios from "axios";
import Cookies from 'universal-cookie'
import ButtonBar from "../components/ButtonBar";

const init_chats = [
    {user: "Domenico"},
    {user: "Michele"},
    {user: "Giuseppe"},
    {user: "Francescomaria"},
    {user: "Filippo"}
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
const init_friends = (user, setFriends) => {
    axios.post(`http://localhost:3001/api/users/getFriends/${user}`)
        .then(res => {
            setFriends(res.data)
        })
        .catch(error => {
            console.error(error);
        });
}

export default function ChatPage() {
    const [loggedUser, setLoggedUser] = useState("")
    const [receiver, setReceiver] = useState("")
    const [friends, setFriends] = useState([])
    const [messages, setMessages] = useState([])
    const [showFriends, setShowFriends] = useState(false)
    const cookies = new Cookies();
    const navigate = useNavigate();

    useEffect(() => {
        // Verifica se il login è stato effettuato
        if(!cookies.get("username")) {
            console.log("Login non effettuato. Reindirizzamento...")
            navigate("/login");
        } else {
            setLoggedUser(cookies.get("username"))
            init_friends(loggedUser, setFriends)
        }
    })

    init_messages(loggedUser, receiver, setMessages)

    return (
        <>
            <div className="App">
                <ButtonBar />
                <ChatsBar
                    chats_list={init_chats}
                    loggedUser={loggedUser}
                />
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