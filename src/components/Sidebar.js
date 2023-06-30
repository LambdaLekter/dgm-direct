import React from "react";
import Navbar from "./Navbar"
import FriendsBar from "./FriendsBar";
import ChatsList from "./ChatsList";

const init_chats = [
    {user: {username: "Domenico"}},
    {user: {username: "Michele"}},
    {user: {username: "Giuseppe"}},
    {user: {username: "Francescomaria"}},
    {user: {username: "Filippo"}}
]

export default function Sidebar({loggedUser, selectedTab, friendsStates, setReceiver, updateMessages}) {
    return (
        <div>
            <Navbar loggedUser={loggedUser}/>
            { /* In base a quale pulsante viene premuto visualizziamo una scheda diversa (di default le chat) */}
            { selectedTab === "F" &&
                <FriendsBar
                    friends={friendsStates.friends}
                    setFriends={friendsStates.setFriends}
                    loggedUser={loggedUser}
                    setFriendless={friendsStates.setFriendless}
                    setReceiver={setReceiver}
                    updateMessages={updateMessages} />
            }
            { selectedTab === "C" &&
                <ChatsList
                    chats_list={init_chats}
                    loggedUser={loggedUser}
                    setReceiver={setReceiver}
                    updateMessages={updateMessages} />
            }
            { selectedTab === "N" &&
                <div> Coming soon... </div>
            }
        </div>
    )
}