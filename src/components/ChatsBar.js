import ChatItem from "./ChatItem";

export default function ChatsBar({chats_list, loggedUser}) {
    return <div id="chats-bar">
        <h3> Chat di {loggedUser} </h3>
        {chats_list.map((chat, idx) =>
            <ChatItem key={"chat" + idx} chatUser={chat.user}/>
        )}
    </div>
}