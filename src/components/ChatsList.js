import ChatsListItem from "./ChatsListItem";
import {useState} from "react";

export default function ChatsList({chats_list, loggedUser, setReceiver, updateMessages}) {
    const [selectedChat, setSelectedChat] = useState(null)

    const handleChatSelection = e => {

    }

    return (
        <>
            { chats_list.map((chat, idx) =>
                    <ChatsListItem
                        key={"chat" + idx}
                        chatUser={chat.user}
                        // onChange={handleChatSelection}
                        loggedUser={loggedUser}
                        setReceiver={setReceiver}
                        updateMessages={updateMessages}
                    />
            ) }
        </>
    )
}