import React from "react";
import {Link} from "react-router-dom";

export default function SignUpForm() {
    const handleSubmit = () => {
        console.log("Invio form riuscito")
    }
    return (
        <>
            <p>Entra a far parte di DGM Direct🪃</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="inputUsername"/>
                <input type="text" name="inputUsername" placeholder="Inserire username o email"/>

                <label htmlFor="inputEmail"/>
                <input type="email" name="inputEmail" placeholder="Inserire email"/>

                <label htmlFor="inputPassword"/>
                <input type="password" name="inputPassword" placeholder="Inserire password"/>

                <label htmlFor="confirmPassword"/>
                <input type="password" name="confirmPassword" placeholder="Ripetere password"/>
            </form>
            <p>Hai già un account? <Link to="/login">"Login"</Link></p>
        </>
    )
}