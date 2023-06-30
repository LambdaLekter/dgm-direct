import '../style/ChatList.css'

export default function ChatsListItem({loggedUser, chatUser, setReceiver, updateMessages}) {
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
                    { chatUser ? <span>{chatUser.username}</span>
                    : <span>[Dati non trovati]</span> }
                </div>
            </div>
        </>
    )
}