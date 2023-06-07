import React from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

export default function Authentication(props) {
    console.log(props.login)

    /*
        * Si effettua il renderizzamento al form di accesso o di registrazione in base
        * al valore del flag login, impostato dalle Routes in "App.js"
     */
    return (
        <>
            {props.login ? <LoginForm/> : <SignUpForm/>
            }
        </>
    )
}