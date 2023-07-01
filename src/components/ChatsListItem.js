import '../style/ChatList.css'

export default function ChatsListItem({loggedUser, chatUser, chatMessage, setReceiver, updateMessages}) {
    const changeReceiver = () => {
        const receiverUser = chatUser.username
        setReceiver(receiverUser)
        updateMessages(loggedUser, receiverUser)
    }

    return (
        <>
            <div className="userChat" onClick={changeReceiver}>
                {/* TODO: Assegnare ad ogni utente una immagine di profilo diversa */}
                <img src="https://picsum.photos/200" alt=""/>
                {/*<img src={} alt=""/>*/}
                <div className="userChatInfo">
                    { chatUser ? <div>{chatUser.username}</div> : <div>[Dati non trovati]</div> }
                    { chatMessage && <div className="last-chat-message">{chatMessage.text}</div> }
                </div>
            </div>
        </>
    )
}