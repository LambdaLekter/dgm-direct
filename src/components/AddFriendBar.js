import {useState, useEffect} from "react";
import ChatsListItem from "./ChatsListItem";
import axios from "axios";
import '../style/FriendsBar.css'

import {Form, InputGroup, ListGroup} from 'react-bootstrap'

export default function FriendsBar({
                                       friends, setFriends,
                                       loggedUser,
                                       setInitialChat,
                                       setReceiver,
                                       updateMessages,
                                       chatList,
                                       handleSelectChat
                                   }) {

    const [inputAddFriend, setInputAddFriend] = useState("")
    const [filteredUsersItems, setFilteredUsersItems] = useState([]);

    // ! Funzione per filtrare dinamicamente gli amici in base all'input nel Form.Control e si può facilmente
    // ! adattare per cercare amici da aggiungere, cambiando ovviamente l'array di riferimento
    // const getFriendsItems = () => {
    //     if(inputAddFriend === "") {
    //         return <div className="list-message">Digita l'username per aggiungere<br/>un amico </div>
    //     } else {
    //         axios.post(`http://localhost:3001/api/users/getNotFriends/${loggedUser}`)
    //             .then(res => {
    //                 let filteredUsers = []
    //                 if (res.status !== 200) return
    //                 filteredUsers = res.data.filter(user =>
    //                     user.username.toLowerCase().includes(inputAddFriend.toLowerCase())
    //                 );
    //
    //                 if (filteredUsers.length > 0) {
    //                     return filteredUsers.map(user => (
    //                         <ChatsListItem
    //                             key={"friend" + user.username}
    //                             loggedUser={loggedUser}
    //                             chatUser={user}
    //                             chatNewFriend={true}
    //                             setInitialChat={setInitialChat}
    //                             onAddFriend={onAddFriend}
    //                         />
    //                     ))
    //                 } else {
    //                     return <div className="list-message">Nessun risultato</div>;
    //                 }
    //             })
    //             .catch(error => {
    //                 console.error(error)
    //             })
    //     }
    // }

    useEffect(() => {
        if (inputAddFriend !== "") {
            axios.post(`http://localhost:3001/api/users/getNotFriends/${loggedUser}`)
                .then(res => {
                    if (res.status !== 200) return;
                    const filteredUsers = res.data.filter(user =>
                        user.username.toLowerCase().includes(inputAddFriend.toLowerCase())
                    );
                    setFilteredUsersItems(filteredUsers);
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            setFilteredUsersItems([]);
        }
    }, [inputAddFriend, loggedUser]);

    return (
        <div id="friends-bar">
            <Form>
                <InputGroup>
                    <Form.Control
                        type="text"
                        placeholder="Aggiungi un amico..."
                        value={inputAddFriend}
                        onChange={(e) => setInputAddFriend(e.target.value)}
                        autoComplete="off"
                    />
                </InputGroup>
            </Form>
            {/*<ListGroup>*/}
            {/*    {filteredUsersItems}*/}
            {/*</ListGroup>*/}

            <ListGroup>
                { inputAddFriend === "" ? (
                    <div className="list-message">Digita l'username per aggiungere<br />un amico</div>
                ) : (
                    filteredUsersItems.length > 0 ? (
                        filteredUsersItems.map(user => (
                            <ChatsListItem
                                key={"friend" + user.username}
                                loggedUser={loggedUser}
                                chatUser={user}
                                chatNewFriend={true}
                                friends={friends}
                                setFriends={setFriends}
                                setInitialChat={setInitialChat}
                                inputAddFriend={inputAddFriend}
                                setInputAddFriend={setInputAddFriend}
                            />
                        ))
                    ) : (
                        <div className="list-message">Nessun risultato</div>
                    )
                )}
            </ListGroup>
        </div>
    )
}