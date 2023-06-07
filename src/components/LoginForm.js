import React from "react";
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.css';

export default function LoginForm(props) {
    const handleSubmit = () => {
        console.log("Invio form riuscito")

        // TODO - Verifica del login dal database
    }
    return (
        <>
            <p>Login</p>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username"/>
                <input type="text" name="username" placeholder="Inserire username o email"/>

                <label htmlFor="password"/>
                <input type="password" name="password" placeholder="Inserire password"/>
            </form>
            <p>Non hai ancora un account?<Link to="/signup">Registrati</Link></p>
        </>
    )
}