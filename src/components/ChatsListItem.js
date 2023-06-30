export default function ChatsListItem({chatUser}) {
    return (
        <>
            <div className="userChat">
                {/* TODO: Assegnare ad ogni utente una immagine di profilo diversa */}
                <img src="https://picsum.photos/200" alt=""/>
                {/*<img src={} alt=""/>*/}
                <div className="userChatInfo">
                    { chatUser ? <span>{chatUser.username}</span>
                    : <span>[Dati non trovati]</span> }
                </div>
            </div>

            {/*<div className="chat-item">*/}
            {/*    {user.username}*/}
            {/*</div>*/}
        </>
    )
}