import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Button, Nav} from 'react-bootstrap'
import Cookies from 'universal-cookie'

import '../style/ButtonsBar.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faComments, faUserGroup, faBell, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';

export default function ButtonsBar({selectedTab, setSelectedTab,setLoggedUser}) {
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
        <Nav className="flex-column">
            <Button
                title="Le tue chat"
                variant="primary"
                size="md"
                className={`rounded-circle mb-3 navbar-button ${selectedTab === "C" ? "selected-button" : ""}`}
                onClick={getHandler("C")}>
                <FontAwesomeIcon icon={faComments}/>
            </Button>
            <Button
                title="Amici"
                variant="primary"
                size="md"
                className={`rounded-circle mb-3 navbar-button ${selectedTab === "F" ? "selected-button" : ""}`}
                onClick={getHandler("F")}>
                <FontAwesomeIcon icon={faUserGroup}/>
            </Button>
            <Button
                title="Notifiche"
                variant="primary"
                size="md"
                className={`rounded-circle mb-5 navbar-button ${selectedTab === "N" ? "selected-button" : ""}`}
                onClick={getHandler("N")}>
                <FontAwesomeIcon icon={faBell}/>
            </Button>
            <Button
                title="Logout"
                variant="danger"
                size="md"
                className="rounded-circle navbar-button logout-button"
                onClick={logout}>
                <FontAwesomeIcon icon={faArrowRightFromBracket}/>
            </Button>
        </Nav>
    )
}