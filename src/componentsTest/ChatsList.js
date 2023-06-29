import ChatItem from "./ChatsListItem";

export default function ChatsList({chats_list, loggedUser}) {
    return (
        <div id="chats-bar">
            <h3> Chat di {loggedUser} </h3>
            {chats_list.map((chat, idx) =>
                <ChatItem key={"chat" + idx} chatUser={chat.user}/>
            )}
        </div>
    )
}