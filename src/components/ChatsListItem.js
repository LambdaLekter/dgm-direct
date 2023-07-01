import '../style/ChatList.css'

export default function ChatsListItem({loggedUser, chatUser, chatMessage, setReceiver, updateMessages, setInitialChat}) {
    const changeReceiver = () => {
        const receiverUser = chatUser.username
        setInitialChat(false)
        setReceiver(receiverUser)
        updateMessages(loggedUser, receiverUser)
    }

    return (
        <>
            <div className="userChat" onClick={changeReceiver}>
                {/* TODO: Assegnare agli utente l'immagine di profilo standard */}
                <img src="https://picsum.photos/200" alt=""/>
                <div className="userChatInfo">
                    { chatUser ? <div>{chatUser.username}</div> : <div>[Dati non trovati]</div> }
                    { chatMessage && <div className="last-chat-message">{chatMessage.text}</div> }
                </div>
            </div>
        </>
    )
}