import MessageItem from "./MessageItem";
import MessageBar from "./MessageBar";
import axios from "axios";

import 'bootstrap/dist/css/bootstrap.css';
import {Container, Col, Row} from "react-bootstrap";

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

        if (msgText !== "") {
            // * Controllo per inviare un messaggio solo qualora il campo di testo contenga qualcosa

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
    }

    return (
        <Container fluid id="chat">
            <Row style={{ height: '100%' }}>
                <Col>
                    {/* TODO (per Para) - La prego di ridurre la grandezza del testo dei messaggi, non sono
                        ancora ipovedente */}
                    <div id="messages">
                        {messages.map((message, idx) => {
                            let side = message.author === loggedUser ? "right" : "left"
                            return <MessageItem key={"msg" + idx} message={message} side={side}/>
                        })}
                    </div>

                    <div id="message-bar">
                        <MessageBar submitHandler={sendMessage}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}