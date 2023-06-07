import ChatItem from "./ChatItem";

export default function ChatsBar({chats_list}) {
    return <div id="chats-bar">
        <h3> DGM Direct </h3>
        {chats_list.map((chat, idx) =>
            <ChatItem key={"chat" + idx} chatData={chat}/>
        )}
    </div>
}