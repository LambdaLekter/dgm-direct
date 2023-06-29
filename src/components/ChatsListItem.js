export default function ChatsListItem({user}) {
    return (
        <>
            <div className="userChat">
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