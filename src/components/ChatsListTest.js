import ChatItem from "./ChatsListItem";

export default function ChatsListTest({chats_list, loggedUser}) {
    return (
        <>
            {
                chats_list.map((chat, idx) =>
                    <ChatItem key={"chat" + idx} chatUser={chat.user}/>
                )
            }
        </>
    )
}