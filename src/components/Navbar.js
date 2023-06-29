import React, {useContext} from 'react'
import Cookie from 'universal-cookie'

export default function Navbar({loggedUser}) {
    const cookie = new Cookie()

    return (
        <div className="navbar">
            <div className="user">
                {/*<img src={currentUser.photoURL} alt="" className="imgProfile"/>*/}
                {/*<span>{cookie.get("Username")}</span>*/}
                <h4 className="user">{loggedUser}</h4>
            </div>
        </div>
    )
}