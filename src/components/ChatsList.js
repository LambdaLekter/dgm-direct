import ChatsListItem from "./ChatsListItem";
import {useState} from "react";

export default function ChatsList({chats_list, loggedUser, setReceiver, updateMessages}) {
    return (
        <>
            { chats_list.map((chat, idx) =>
                    <ChatsListItem
                        key={"chat" + idx}
                        chatUser={chat.user}
                        loggedUser={loggedUser}
                        setReceiver={setReceiver}
                        updateMessages={updateMessages}
                    />
            ) }
        </>
    )
}