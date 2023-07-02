/* * Componente utilizzato per */

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

    const getChatsItems = () => {
        if (chats && chats.length > 0) {
            return chats.map((chat) => {
                return <ChatsListItem
                    key={"chat"+chat.user.username}
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
            return <div className="list-message">Seleziona un amico per iniziare a chattare!</div>
        }
    }

    return ( <> {getChatsItems()} </> )
}