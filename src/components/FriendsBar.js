import {useState} from "react";
import ChatListItem from "./ChatsListItem";
import axios from "axios";
import '../style/FriendsBar.css'

import {Form, InputGroup, Button, ListGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";

export default function FriendsBar({
                                       friends,
                                       setFriends,
                                       loggedUser,
                                       setInitialChat,
                                       setReceiver,
                                       updateMessages,
                                       chatList,
                                       handleSelectChat
                                   }) {
    const [inputText, setInputText] = useState("")
    const onAddFriend = (event) => {
        event.preventDefault()
        if (inputText !== "") {
            let body = {
                username: loggedUser,
                newFriend: inputText
            }
            axios.post(`http://localhost:3001/api/users/addFriend`, body)
                .then(res => {
                    console.log(`Amico aggiunto: ${res.data}`)
                    setFriends([...friends, res.data])
                    setInputText("")
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }

    // ! Funzione per mostrare, staticamente, gli utenti amici del loggato
    const getFriendsItems = () => {
        if (friends && friends.length > 0) {
            return friends.map((friend, idx) => {
                return <ChatListItem
                    key={friend.username}
                    loggedUser={loggedUser}
                    chatUser={friend}
                    setReceiver={setReceiver}
                    setInitialChat={setInitialChat}
                    updateMessages={updateMessages}
                    onSelect={() => handleSelectChat(friend.username)}
                    isSelected={chatList.selectedChat === friend.username}
                />
            })
        } else {
            return <div>Inserisci il tuo primo amico!</div>
        }
    }

    // ! Funzione per filtrare dinamicamente gli amici in base all'input nel Form.Control e si può facilmente
    // ! adattare per cercare amici da aggiungere, cambiando ovviamente l'array di riferimento
    // const getFriendsItems = () => {
    //     const filteredFriends = filterFriends();
    //
    //     if (filteredFriends.length > 0) {
    //         return filteredFriends.map(friend => (
    //             <ChatListItem
    //                 key={friend.username}
    //                 loggedUser={loggedUser}
    //                 chatUser={friend}
    //                 setReceiver={setReceiver}
    //                 setInitialChat={setInitialChat}
    //                 updateMessages={updateMessages}
    //                 onSelect={() => handleSelectChat(friend.username)}
    //                 isSelected={chatList.selectedChat === friend.username}
    //             />
    //         ))
    //     } else {
    //         return <div>Nessun amico corrispondente trovato.</div>;
    //     }
    // }
    // const filterFriends = () => {
    //     return friends.filter(friend =>
    //         friend.username.toLowerCase().includes(inputText.toLowerCase())
    //     )
    // }

    return (
        <div id="friends-bar">
            <Form onSubmit={onAddFriend}>
                {/*<InputGroup>*/}
                {/*    <Form.Control*/}
                {/*        type="text"*/}
                {/*        placeholder="Cerca un amico da aggiungere..."*/}
                {/*        value={inputText}*/}
                {/*        onChange={e => setInputText(e.target.value)}*/}
                {/*        autoComplete="off"*/}
                {/*    />*/}
                {/*</InputGroup>*/}
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Scrivi un messaggio..."
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        autoComplete="off"
                    />
                    <Button
                        type="submit"
                        variant={inputText === "" ? "secondary" : "primary"}
                        disabled={inputText === "" && true}>
                        <FontAwesomeIcon icon={faUserPlus}/>
                    </Button>
                </InputGroup>
            </Form>


            {/*<ListGroup>*/}
            {/*    {getFriendsItems()}*/}
            {/*</ListGroup>*/}

            {getFriendsItems()}
        </div>
    )
}