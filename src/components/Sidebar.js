import React from "react";
import Navbar from "./Navbar"
import FriendsBar from "./FriendsBar";
import ChatsList from "./ChatsList";

const init_chats = [
    { user: {
            _id: "649972077a92e418bbb3e00e",
            firstName: "Sara",
            lastName: "capiamo",
            username: "sorm",
            email: "ciao@gmail.cock",
            password: "$2a$10$mkvgvozC9u1qf14EhPE40unEY2otAOKDO/8wrXWyUbdKmsEcFBqBi",
            friends: [
                "64970a32e2b1ba30107e22f7"
            ],
            __v: 0
        }, message: {}},
    { user: {
            _id: "649972077a92e418bbb3e00e",
            firstName: "Sara",
            lastName: "capiamo",
            username: "sorm",
            email: "ciao@gmail.cock",
            password: "$2a$10$mkvgvozC9u1qf14EhPE40unEY2otAOKDO/8wrXWyUbdKmsEcFBqBi",
            friends: [
                "64970a32e2b1ba30107e22f7"
            ],
            __v: 0
        }},
    { user: {
            _id: "64970a32e2b1ba30107e22f7",
            firstName: "Bruno",
            lastName: "password",
            username: "fratm",
            email: "billu@domin",
            password: "$2a$10$zIojg.neUDwsAS13ef8p6.rV6EOEkbA/v79Wf4nFWANWWEvjPBpc2",
            friends: [
                "649972077a92e418bbb3e00e",
                "649c5b58a16ded706a4d619d"
            ],
            __v: 0
    } },
    { user: {
            _id: "649972077a92e418bbb3e00e",
            firstName: "Sara",
            lastName: "capiamo",
            username: "sorm",
            email: "ciao@gmail.cock",
            password: "$2a$10$mkvgvozC9u1qf14EhPE40unEY2otAOKDO/8wrXWyUbdKmsEcFBqBi",
            friends: [
                "64970a32e2b1ba30107e22f7"
            ],
            __v: 0
        }},
    { user: {
            _id: "64970a32e2b1ba30107e22f7",
            firstName: "Bruno",
            lastName: "password",
            username: "fratm",
            email: "billu@domin",
            password: "$2a$10$zIojg.neUDwsAS13ef8p6.rV6EOEkbA/v79Wf4nFWANWWEvjPBpc2",
            friends: [
                "649972077a92e418bbb3e00e",
                "649c5b58a16ded706a4d619d"
            ],
            __v: 0
        } }
]

export default function Sidebar({loggedUser, selectedTab, friendsStates, chatsStates, setReceiver, updateMessages}) {
    return (
        <div>
            <Navbar selectedTab={selectedTab}/>
            <div id="side-list">
                { /* In base a quale pulsante viene premuto visualizziamo una scheda diversa (di default le chat) */}
                { selectedTab === "F" &&
                    <FriendsBar
                        loggedUser={loggedUser}
                        friends={friendsStates.friends}
                        setFriends={friendsStates.setFriends}
                        setFriendless={friendsStates.setFriendless}
                        setReceiver={setReceiver}
                        updateMessages={updateMessages} />
                }
                { selectedTab === "C" &&
                    <ChatsList
                        className="side-list-chats"
                        loggedUser={loggedUser}
                        chats={chatsStates.chats}
                        setChats={chatsStates.setChats}
                        setChatless={chatsStates.setChatless}
                        setReceiver={setReceiver}
                        updateMessages={updateMessages} />
                }
                { selectedTab === "N" &&
                    <div> Coming soon... </div>
                }
            </div>
        </div>
    )
}