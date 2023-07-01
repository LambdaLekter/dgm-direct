import '../style/ChatList.css'
import userImage from "../img/user.png";

export default function ChatsListItem({
                                          loggedUser,
                                          chatUser,
                                          chatMessage,
                                          setReceiver,
                                          updateMessages,
                                          setInitialChat,
                                          isSelected,
                                          onSelect
                                      }) {
    const changeReceiver = () => {
        const receiverUser = chatUser.username
        setInitialChat(false)
        setReceiver(receiverUser)
        updateMessages(loggedUser, receiverUser)
        onSelect()
    }

    return (
        <>
            <div
                className={`userChat ${isSelected ? "selected" : ""}`}
                onClick={changeReceiver}>
                <img src={userImage} alt=""/>
                <div className="userChatInfo">
                    {chatUser ? <div>{chatUser.username}</div> : <div>[Dati non trovati]</div>}
                    {chatMessage && <div className="last-chat-message">{chatMessage.text}</div>}
                </div>
            </div>
        </>
    )
}