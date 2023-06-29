import React from "react";
import Navbar from "./Navbar"
import ChatsListTest from "./ChatsListTest";

export default function Sidebar(loggedUser) {
    return (
        <div className="sidebar">
            <Navbar loggedUser={loggedUser}/>
            <ChatsListTest/>
        </div>
    )
}