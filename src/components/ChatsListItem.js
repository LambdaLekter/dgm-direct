export default function ChatsListItem({user}) {
    return (
        <>
            <div className="userChat">
                {/* TODO: Assegnare ad ogni utente una immagine di profilo diversa */}
                <img src="https://picsum.photos/200" alt=""/>
                {/*<img src={} alt=""/>*/}
                <div className="userChatInfo">
                    <span>{user.username}</span>
                </div>
            </div>

            {/*<div className="chat-item">*/}
            {/*    {user.username}*/}
            {/*</div>*/}
        </>
    )
}