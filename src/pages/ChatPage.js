import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import Chat from "../components/Chat";
import axios from "axios";
import Cookies from 'universal-cookie'
import ButtonsBar from "../components/ButtonsBar";
import Sidebar from "../components/Sidebar";

import 'bootstrap/dist/css/bootstrap.css';
import {Container, Col, Row} from "react-bootstrap";

export default function ChatPage() {
    const [loggedUser, setLoggedUser] = useState("nonno") // TODO rimuovere il default
    const [receiver, setReceiver] = useState("")
    const [friends, setFriends] = useState([])
    const [messages, setMessages] = useState([])
    const [friendless, setFriendless] = useState(false)
    const [selectedTab, setSelectedTab] = useState("C")
    const cookies = new Cookies();
    const navigate = useNavigate();

    const updateMessages = async (user1, user2) => {
        const res = await axios.post(`http://localhost:3001/api/messages/${user1}/${user2}`)
        setMessages(res.data)
    }

    useEffect(() => {
        const init = async (user) => {
            const res = await axios.post(`http://localhost:3001/api/users/getFriends/${user}`)
            const friendsData = res.data
            setFriends(friendsData)

            if (friendsData.length > 0) {
                const receiverUser = friendsData[0].username
                setReceiver(receiverUser)
                await updateMessages(loggedUser, receiverUser)
            } else {
                setFriendless(true)
            }
        }

        // Verifica se il login è stato effettuato, altrimenti reindirizza alla pagina apposita
        // if(!cookies.get("username")) {
        //     console.log("Login non effettuato. Reindirizzamento...")
        //     navigate("/login");
        // } else {
        //     setLoggedUser(cookies.get("username"))
        // }

        init(loggedUser).then(() => console.log("Inizializzazione effettuata"))
    }, [])

    const friendsStates = {friends, setFriends, setFriendless}

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
                                friendless={friendless}
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
// TODO: bypassare la scritta per friendless se esiste una chat
// TODO: Sistemare message-bar che, in assenza di messaggi, si sposta in alto (ricordare le modifiche fatte su chat-wrapper)