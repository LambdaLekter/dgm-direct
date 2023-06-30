import ChatsListItem from "./ChatsListItem";

export default function ChatsList({chats_list}) {
    return (
        <>
            { chats_list.map((chat, idx) =>
                    <ChatsListItem key={"chat" + idx} chatUser={chat.user}/>
            ) }
        </>
    )
}