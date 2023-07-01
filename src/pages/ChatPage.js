import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Chat from "../components/Chat";
import axios from "axios";
import Cookies from 'universal-cookie'
import ButtonsBar from "../components/ButtonsBar";
import Sidebar from "../components/Sidebar";

import 'bootstrap/dist/css/bootstrap.css';
import {Container, Col, Row} from "react-bootstrap";
import {uniqueChats} from "../utils";

export default function ChatPage() {
    const [loggedUser, setLoggedUser] = useState("nonno") // TODO rimuovere il valore di default
    const [receiver, setReceiver] = useState("")
    const [friends, setFriends] = useState([])
    const [chats, setChats] = useState([])
    const [messages, setMessages] = useState([])
    const [initialChat, setInitialChat] = useState(true)
    const [selectedTab, setSelectedTab] = useState("C")
    const cookies = new Cookies();
    const navigate = useNavigate();

    const updateMessages = async (user1, user2) => {
        const res = await axios.post(`http://localhost:3001/api/messages/${user1}/${user2}`)
        setMessages(res.data)
    }

    useEffect(() => {
        const init = async (user) => {
            const friendsRes = await axios.post(`http://localhost:3001/api/users/getFriends/${user}`)
            const friendsData = friendsRes.data
            setFriends(friendsData)

            const chatsRes = await axios.post(`http://localhost:3001/api/users/getChats/${user}`)
            const chatsData = uniqueChats(chatsRes.data)
            setChats(chatsData)

            if (friendsData.length > 0) {
                let receiverUser;
                if(chatsData.length > 0) {
                    receiverUser = chatsData[0].user.username
                } else {
                    setInitialChat(true)
                    receiverUser = friendsData[0].username
                }
                setReceiver(receiverUser)
                await updateMessages(loggedUser, receiverUser)
            } else {
                setInitialChat(true)
            }
        }

        // Verifica se il login è stato effettuato, altrimenti reindirizza alla pagina apposita
        let loggedUsername = loggedUser
        // if(!cookies.get("username")) {
        //     console.log("Login non effettuato. Reindirizzamento...")
        //     navigate("/login");
        // } else {
        //     loggedUsername = cookies.get("username")
        //     setLoggedUser(loggedUsername)
        // }

        init(loggedUsername).then(() => console.log("Inizializzazione effettuata"))
    }, [])

    const friendsStates = {friends, setFriends}
    const chatSet = {chats, setChats, initialChat, setInitialChat}

    return (
        <>
            <div>
                <Container className="App" fluid>
                    <Row>
                        <Col md={1} id="button-bar-div">
                            <ButtonsBar setSelectedTab={setSelectedTab}/>
                        </Col>

                        <Col md={3} id="side-tab">
                            <Sidebar
                                loggedUser={loggedUser}
                                selectedTab={selectedTab}
                                friendsStates={friendsStates}
                                chatSet={chatSet}
                                setReceiver={setReceiver}
                                updateMessages={updateMessages}
                            />
                        </Col>

                        <Col md={6} id="chat">
                            <Chat
                                messages={messages}
                                setMessages={setMessages}
                                loggedUser={loggedUser}
                                receiver={receiver}
                                chatSet={chatSet}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

// TODO: Sistemare l'input text usato per la ricerca di un nuovo amico
// TODO: Mantenere lo stato di selezionato sui pulsanti nella ButtonsBar
// TODO: Inserire lo stato di selezionato sulle chat nella lista