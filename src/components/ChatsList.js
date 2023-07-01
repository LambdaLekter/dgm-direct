import ChatsListItem from "./ChatsListItem";

export default function ChatsList({
                                      chats,
                                      loggedUser,
                                      setReceiver,
                                      updateMessages,
                                      setInitialChat,
                                      chatList,
                                      handleSelectChat
                                  }) {

    // const handleSelectChat = (chatId) => {
    //     console.log(chatId)
    //     setSelectedChat(chatId);
    // };

    const getChatsItems = () => {
        if (chats && chats.length > 0) {
            return chats.map((chat, idx) => {
                return <ChatsListItem
                    key={chat.user.username}
                    loggedUser={loggedUser}
                    chatUser={chat.user}
                    chatMessage={chat.message}
                    setReceiver={setReceiver}
                    updateMessages={updateMessages}
                    setInitialChat={setInitialChat}
                    onSelect={() => handleSelectChat(chat.user.username)}
                    isSelected={chatList.selectedChat === chat.user.username}
                />
            })
        } else {
            return <div>Seleziona un amico per iniziare a chattare!</div>
        }
    }

    return (
        <>
            {getChatsItems()}
        </>
    )
}