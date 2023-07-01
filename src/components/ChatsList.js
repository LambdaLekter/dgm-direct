import ChatsListItem from "./ChatsListItem";
import {useState} from "react";
import ChatListItem from "./ChatsListItem";

export default function ChatsList({chats, loggedUser, setReceiver, updateMessages}) {
    const getChatsItems = () => {
        if(chats && chats.length > 0){
            return chats.map((chat, idx) => {
                return <ChatListItem
                    key={"chat" + idx}
                    loggedUser={loggedUser}
                    chatUser={chat.user}
                    chatMessage={chat.message}
                    setReceiver={setReceiver}
                    updateMessages={updateMessages} />
            } )
        } else {
            return <div>Seleziona un amico per iniziare a chattare!</div>
        }
    }

    return (
        <>
            { getChatsItems() }
        </>
    )
}