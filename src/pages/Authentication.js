import React, {useEffect} from "react";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

export default function Authentication({login}) {
    useEffect(() => {
        document.title = login ? 'DGM Direct | Login' : 'DGM Direct | Registrazione';
    })

    /* * Si effettua il renderizzamento al form di accesso o di registrazione in base
    *    al valore del flag login, impostato in "App.js"
    * */
    return (
        <>
            {props.login ? <LoginForm/> : <SignUpForm/>
            }
        </>
    )
}