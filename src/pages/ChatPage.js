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
    const [loggedUser, setLoggedUser] = useState("fratm") // TODO rimuovere il default
    const [receiver, setReceiver] = useState("")
    const [friends, setFriends] = useState([])
    const [messages, setMessages] = useState([])
    const [friendless, setFriendless] = useState(false)
    const [selectedTab, setSelectedTab] = useState("C")
    const cookies = new Cookies();
    const navigate = useNavigate();

    useEffect(() => {
        let init = async () => {
            let res = await axios.post(`http://localhost:3001/api/users/getFriends/${loggedUser}`)
            let friendsData = res.data
            setFriends(friendsData)

            if (friendsData.length > 0) {
                const receiverUsername = friendsData[0].username
                setReceiver(receiverUsername)
                res = await axios.post(`http://localhost:3001/api/messages/${loggedUser}/${receiverUsername}`)
                setMessages(res.data)
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

        init().then(() => console.log("Inizializzazione effettuata"))
    }, [])

    const friendsStates = [friends, setFriends, setFriendless]

    return (
        <>
            {/* TODO - Fissato il massimo scorrimento verticale, permettere lo scorrimento della sola chat*/}
            <div>
                <Container className="App" fluid>
                    <Row>
                        <Col md={1} id="button-bar-div">
                            <ButtonsBar setSelectedTab={setSelectedTab}/>
                        </Col>

                        <Col md={3} id="side-list">
                            { /* TODO: Div per la lista delle chat o degli amici */}
                            { /* In base a quale pulsante viene premuto visualizziamo una scheda diversa (di default le chat) */}

                            <Sidebar
                                loggedUser={loggedUser}
                                selectedTab={selectedTab}
                                friendsStates={friendsStates}
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