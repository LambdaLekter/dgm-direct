import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ChatsBar from "../components/ChatsBar";
import Chat from "../components/Chat";
import axios from "axios";
import Cookies from 'universal-cookie'
import ButtonBar from "../components/ButtonBar";
import FriendsBar from "../components/FriendsBar";

const init_chats = [
    {user: "Domenico"},
    {user: "Michele"},
    {user: "Giuseppe"},
    {user: "Francescomaria"},
    {user: "Filippo"}
]

export default function ChatPage() {
    const [loggedUser, setLoggedUser] = useState("")
    const [receiver, setReceiver] = useState("sorm")
    const [friends, setFriends] = useState([])
    const [messages, setMessages] = useState([])
    const [selectedTab, setSelectedTab] = useState("C")
    const cookies = new Cookies();
    const navigate = useNavigate();

    useEffect(async () => {
        // Verifica se il login è stato effettuato, altrimenti reindirizza alla pagina apposita
        if(!cookies.get("username")) {
            console.log("Login non effettuato. Reindirizzamento...")
            navigate("/login");
        } else {
            setLoggedUser(cookies.get("username"))

            let res = await axios.post(`http://localhost:3001/api/users/getFriends/${user}`)
            let friends = res.data
            setFriends(friends)
            setReceiver(friends[0].username)

            res = await axios.post(`http://localhost:3001/api/messages/${loggedUser}/${receiver}`)
            setMessages(res.data)
        }
    })

    return (
        <>
            <div className="App">
                <ButtonBar setSelectedTab={setSelectedTab}/>

                { /* In base a quale pulsante viene premuto visualizziamo una scheda diversa (di default le chat) */ }
                { selectedTab === "F" && <FriendsBar friends={friends} setFriends={setFriends} loggedUser={loggedUser} /> }
                { selectedTab === "C" && <ChatsBar chats_list={init_chats} loggedUser={loggedUser} /> }
                { selectedTab === "N" && <div>IN DEVELOPMENT</div> }

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