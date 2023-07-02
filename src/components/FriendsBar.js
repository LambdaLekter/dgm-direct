import {useState} from "react";
import ChatsListItem from "./ChatsListItem";
import axios from "axios";
import '../style/FriendsBar.css'

import {Form, InputGroup} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function FriendsBar({
                                       friends, setFriends,
                                       loggedUser,
                                       setInitialChat,
                                       setReceiver,
                                       updateMessages,
                                       chatList,
                                       handleSelectChat
                                   }) {

    const [inputFriend, setInputFriend] = useState("")

    // ! Funzione per mostrare, staticamente, gli utenti amici del loggato
    // const getFriendsItems = () => {
    //     if (friends && friends.length > 0) {
    //         return friends.map((friend) => {
    //             return <ChatsListItem
    //                 key={"friend"+friend.username}
    //                 loggedUser={loggedUser}
    //                 chatUser={friend}
    //                 setReceiver={setReceiver}
    //                 friends={friends}
    //                 setFriends={setFriends}
    //                 setInitialChat={setInitialChat}
    //                 updateMessages={updateMessages}
    //                 onSelect={() => handleSelectChat(friend.username)}
    //                 isSelected={chatList.selectedChat === friend.username}
    //             />
    //         })
    //     } else {
    //         return <div className="list-message">Inserisci il tuo primo amico!</div>
    //     }
    // }

    // ! Funzione per filtrare dinamicamente gli amici in base all'input nel Form.Control e si può facilmente
    // ! adattare per cercare amici da aggiungere, cambiando ovviamente l'array di riferimento
    const getFriendsItems = () => {
        const filteredFriends = filterFriends();

        if (filteredFriends.length > 0) {
            return filteredFriends.map(friend => (
                <ChatsListItem
                    key={"friend" + friend.username}
                    loggedUser={loggedUser}
                    chatUser={friend}
                    chatNewFriend={false}
                    setReceiver={setReceiver}
                    friends={friends}
                    setFriends={setFriends}
                    setInitialChat={setInitialChat}
                    updateMessages={updateMessages}
                    onSelect={() => handleSelectChat(friend.username)}
                    isSelected={chatList.selectedChat === friend.username}
                />
            ))
        } else {
            return <div className="list-message">Nessun amico corrispondente trovato</div>;
        }
    }
    const filterFriends = () => {
        return friends.filter(friend =>
            friend.username.toLowerCase().includes(inputFriend.toLowerCase())
        )
    }

    return (
        <div id="friends-bar">
            <Form onSubmit={e => e.preventDefault()}>
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Cerca tra i tuoi amici..."
                        value={inputFriend}
                        onChange={(e) => setInputFriend(e.target.value)}
                        autoComplete="off"
                    />
                </InputGroup>
            </Form>
            {getFriendsItems()}
        </div>
    )
}