import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import ChatsList from "../componentsTest/ChatsList";
import Chat from "../componentsTest/Chat";
import axios from "axios";
import Cookies from 'universal-cookie'
import ButtonsBar from "../componentsTest/ButtonsBar";
import FriendsBar from "../componentsTest/FriendsBar";

import 'bootstrap/dist/css/bootstrap.css';
import {Container, Col, Row} from "react-bootstrap";

const init_chats = [
    {user: "Domenico"},
    {user: "Michele"},
    {user: "Giuseppe"},
    {user: "Francescomaria"},
    {user: "Filippo"}
]

export default function ChatPage() {
    const [loggedUser, setLoggedUser] = useState("fratm")
    const [receiver, setReceiver] = useState("sorm")
    const [friends, setFriends] = useState([])
    const [messages, setMessages] = useState([])
    const [selectedTab, setSelectedTab] = useState("C")
    const cookies = new Cookies();
    const navigate = useNavigate();

    useEffect(() => {
        // Verifica se il login è stato effettuato, altrimenti reindirizza alla pagina apposita
        // if(!cookies.get("username")) {
        //     console.log("Login non effettuato. Reindirizzamento...")
        //     navigate("/login");
        // } else {
        //     setLoggedUser(cookies.get("username"))

        let init = async () => {
            let res = await axios.post(`http://localhost:3001/api/users/getFriends/${loggedUser}`)
            let friends = res.data
            setFriends(friends)

            if (friends.length > 0) setReceiver(friends[0].username)

            res = await axios.post(`http://localhost:3001/api/messages/${loggedUser}/${receiver}`)
            setMessages(res.data)
        }
        init()
        // }
    }, [])

    return (
        <>
            {/* TODO - Fissato il massimo scorrimento verticale, permettere lo scorrimento della sola chat*/}
            <div className="vh-100">
                <Container className="App" fluid>
                    <Row>
                        <Col md={1} id="button-bar-div">
                            <ButtonsBar setSelectedTab={setSelectedTab}/>
                        </Col>

                        <Col md={3} id="side-list">
                            {/*TODO: Div per la lista delle chat o degli amici*/}
                            { /* In base a quale pulsante viene premuto visualizziamo una scheda diversa (di default le chat) */}

                            {selectedTab === "F" &&
                                <FriendsBar friends={friends} setFriends={setFriends} loggedUser={loggedUser}/>}
                            {selectedTab === "C" && <ChatsList chats_list={init_chats} loggedUser={loggedUser}/>}
                            {selectedTab === "N" && <div>Coming soon...</div>}
                        </Col>

                        <Col md={6} id="chat">
                            <Chat
                                messages={messages}
                                setMessages={setMessages}
                                loggedUser={loggedUser}
                                receiver={receiver}
                            />
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

// TODO - Gestire la situazione senza amici (sadge)