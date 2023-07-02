import React from "react";
import Navbar from "./Navbar"
import ChatsList from "./ChatsList";
import FriendsBar from "./FriendsBar";
import AddFriendBar from "./AddFriendBar";

export default function Sidebar({
                                    loggedUser,
                                    selectedTab,
                                    friendsStates,
                                    chatSet,
                                    chatList,
                                    setReceiver,
                                    updateMessages
                                }) {

    const handleSelectChat = (chatId) => {
        chatList.setSelectedChat(chatId);
    };

    return (
        <div>
            <Navbar selectedTab={selectedTab}/>
            <div id="side-list">
                { /* In base a quale pulsante viene premuto visualizziamo una scheda diversa (di default le chat) */}
                {selectedTab === "C" &&
                    <ChatsList
                        className="side-list-chats"
                        loggedUser={loggedUser}
                        chats={chatSet.chats}
                        setChats={chatSet.setChats}
                        setInitialChat={chatSet.setInitialChat}
                        setReceiver={setReceiver}
                        updateMessages={updateMessages}

                        chatList={chatList}
                        handleSelectChat={handleSelectChat}
                    />
                }
                {selectedTab === "F" &&
                    <FriendsBar
                        loggedUser={loggedUser}
                        friends={friendsStates.friends}
                        setFriends={friendsStates.setFriends}
                        setInitialChat={chatSet.setInitialChat}
                        setReceiver={setReceiver}
                        updateMessages={updateMessages}

                        chatList={chatList}
                        handleSelectChat={handleSelectChat}/>
                }
                {selectedTab === "N" &&
                    <AddFriendBar
                        loggedUser={loggedUser}
                        friends={friendsStates.friends}
                        setFriends={friendsStates.setFriends}
                        setInitialChat={chatSet.setInitialChat}
                        setReceiver={setReceiver}
                        updateMessages={updateMessages}

                        chatList={chatList}
                        handleSelectChat={handleSelectChat}
                    />
                }
            </div>
        </div>
    )
}