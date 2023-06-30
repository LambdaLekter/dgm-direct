import ChatsListItem from "./ChatsListItem";
import {useState} from "react";

export default function ChatsList({chats_list}) {
    const [selectedChat, setSelectedChat] = useState(null)

    return (
        <>
            { chats_list.map((chat, idx) =>
                    <ChatsListItem key={"chat" + idx} chatUser={chat.user}/>
            ) }
        </>
    )
}