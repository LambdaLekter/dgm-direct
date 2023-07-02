import '../style/ChatList.css'
import userImage from "../img/user.png";

import {Button} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faXmark, faUserMinus, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import {useState} from "react";

export default function ChatsListItem({
                                          loggedUser,
                                          chatUser,
                                          chatMessage,
                                          chatNewFriend,
                                          setReceiver,
                                          updateMessages,
                                          setInitialChat,
                                          friends, setFriends,
                                          isSelected,
                                          onSelect,
                                          onAddFriend
                                      }) {

    const [confirmDelete, setConfirmDelete] = useState(false);

    const changeReceiver = () => {
        if (onSelect) {
            const receiverUser = chatUser.username
            setReceiver(receiverUser)
            updateMessages(loggedUser, receiverUser)
            setInitialChat(false)
            onSelect()
        }
    }

    const handleDelete = () => {
        const body = {
            username: loggedUser,
            friend: chatUser.username
        }
        axios.post(`http://localhost:3001/api/users/removeFriend`, body)
            .then(res => {
                setFriends([...friends].filter((friend) => friend._id !== res.data._id))
                setInitialChat(true)
                console.log(`Utente rimosso: ${res.data.username}`)
            })
            .catch(error => {
                console.error(error);
            });
    }

    const handleCancel = () => {
        setConfirmDelete(false);

    };

    const showConfirmationButtons = () => {
        if (confirmDelete) {
            return (
                <>
                    <Button variant="success" className="delete-confirm" onClick={handleDelete}>
                        <FontAwesomeIcon icon={faCheck}/>
                    </Button>
                    <Button variant="danger" className="delete-cancel" onClick={handleCancel}>
                        <FontAwesomeIcon icon={faXmark}/>
                    </Button>
                </>
            );
        } else {
            return (
                <Button variant="danger" className="delete-button" onClick={() => setConfirmDelete(true)}>
                    <FontAwesomeIcon icon={faUserMinus}/>
                </Button>
            );
        }
    };

    const classes = `userChat ${isSelected ? "selected-chat" : ""} ${chatMessage ? "chat-item" : "friend-item"}`

    return (
        <>
            <div
                className={!chatNewFriend ? classes : "newFriend"}
                onClick={!chatNewFriend ? changeReceiver : null}
            >
                <img src={userImage} alt="proPic"/>
                {chatUser ?
                    <div className="username">{chatUser.username}</div>
                    : <div>[Dati non trovati]</div>}
                {chatMessage ?
                    <div className="last-chat-message">{chatMessage.text}</div> :
                    // showConfirmationButtons()
                    !chatNewFriend ?
                        showConfirmationButtons() :
                        <Button variant="success" className="add-friend" onClick={onAddFriend}>
                            <FontAwesomeIcon icon={faUserPlus}/>
                        </Button>
                }
            </div>
        </>
    )
}