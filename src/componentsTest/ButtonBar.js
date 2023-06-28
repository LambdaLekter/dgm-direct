import React from "react";
import {useNavigate} from "react-router-dom";
import {Button} from 'react-bootstrap'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faUserGroup, faBell, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';

export default function ButtonBar({setSelectedTab, setLoggedUser}) {
    const navigate = useNavigate()

    const getHandler = (tab) => {
        return () => { setSelectedTab(tab) }
    }

    const logout = () => {
        setLoggedUser("")
        navigate("/login")
    }

    return <div id="button-bar">

        <div className="d-grid gap-2">
            <Button variant="primary" size="lg" onClick={getHandler("C")}>
                <FontAwesomeIcon icon={faComments} />
            </Button>
            <Button variant="secondary" size="lg" onClick={getHandler("F")}>
                <FontAwesomeIcon icon={faUserGroup} />
            </Button>
            <Button variant="secondary" size="lg" onClick={getHandler("N")}>
                <FontAwesomeIcon icon={faBell} shake />
            </Button>
            <Button variant="secondary" size="lg" onClick={logout}>
                <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </Button>
        </div>

        {/*TODO - Cambiare lo stato di attivo per i bottoni della sidebar*/}
        {/*TODO - Fissare i pulsanti della sidebar allo scorrimento*/}
    </div>
}