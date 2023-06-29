import ChatItem from "./ChatsListItem";

export default function ChatsList({chats_list, loggedUser}) {
    return (
        <div id="chats-bar">
            {/* TODO: Inserire una navbar per il nome dell'utente */}
            <h3> Chat di {loggedUser} </h3>
            {chats_list.map((chat, idx) =>
                <ChatItem key={"chat" + idx} chatUser={chat.user}/>
            )}
        </div>
    )
}