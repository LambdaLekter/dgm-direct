import React from "react";
import {useNavigate} from "react-router-dom";
import {Button, Nav} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faUserGroup, faBell, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import Cookies from 'universal-cookie'

export default function ButtonsBar({setSelectedTab, setLoggedUser}) {
    const navigate = useNavigate()
    const cookie = new Cookies()

    const getHandler = (tab) => {
        return () => {
            setSelectedTab(tab)
        }
    }

    const logout = () => {
        setLoggedUser("")
        cookie.remove("username")

        // TODO: Reindirizzamento ad una pagina Home
        navigate("/login")
    }

    return (
        <Nav id="button-bar" className="flex-column">
            <Button title="Chat" variant="primary" size="md" className="rounded-circle mb-3" onClick={getHandler("C")}>
                <FontAwesomeIcon icon={faComments}/>
            </Button>
            <Button title="Amici" variant="primary" size="md" className="rounded-circle mb-3" onClick={getHandler("F")}>
                <FontAwesomeIcon icon={faUserGroup}/>
            </Button>
            <Button title="Notifiche" variant="primary" size="md" className="rounded-circle mb-3" onClick={getHandler("N")}>
                <FontAwesomeIcon icon={faBell} shake/>
            </Button>
            <Button title="Logout" variant="primary" size="md" className="rounded-circle mb-3" onClick={logout}>
                <FontAwesomeIcon icon={faArrowRightFromBracket}/>
            </Button>

            {/* TODO: Cambiare lo stato di attivo per i bottoni della sidebar */}
            {/* TODO: Fissare i pulsanti della sidebar allo scorrimento */}
        </Nav>
        // <div id="button-bar">
        //     <div className="d-grid gap-2">
        //         <Button variant="primary" size="lg" onClick={getHandler("C")}>
        //             <FontAwesomeIcon icon={faComments}/>
        //         </Button>
        //         <Button variant="secondary" size="lg" onClick={getHandler("F")}>
        //             <FontAwesomeIcon icon={faUserGroup}/>
        //         </Button>
        //         <Button variant="secondary" size="lg" onClick={getHandler("N")}>
        //             <FontAwesomeIcon icon={faBell} shake/>
        //         </Button>
        //         <Button variant="secondary" size="lg" onClick={logout}>
        //             <FontAwesomeIcon icon={faArrowRightFromBracket}/>
        //         </Button>
        //     </div>
        //
        //     {/*TODO - Cambiare lo stato di attivo per i bottoni della sidebar */}
        //     {/*TODO - Fissare i pulsanti della sidebar allo scorrimento*/}
        // </div>
    )
}