import React, {useContext} from 'react'
import Cookie from 'universal-cookie'
import '../style/Navbar.css'

export default function Navbar({selectedTab}) {
    const cookie = new Cookie()

    return (
        <div className="navbar" onContextMenu={e => e.preventDefault()}>
            {/*<img src={currentUser.photoURL} alt="" className="imgProfile"/>*/}
            {/*<h4 className="user">{cookie.get("Username")}</span>*/}
            <div className="navbar-title">
                {selectedTab === "C" && <>Le tue chat</>}
                {selectedTab === "F" && <>I tuoi amici</>}
                {selectedTab === "N" && <>Notifiche</>}
            </div>
        </div>
    )
}