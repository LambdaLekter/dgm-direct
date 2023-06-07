import React, {useState} from "react";
import {Link} from "react-router-dom";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.css';

export default function LoginForm(props) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = () => {
        console.log("Invio form riuscito")

        // TODO - Verifica del login dal database
    }
    return (
        <>
            <p>Login</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username o email</Form.Label>
                    <Form.Control type="text" id="inputUsername" placeholder="Inserire username o email"
                                  onChange={e => setUsername(e.target.value)}/>

                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" id="inputPassword" placeholder="Inserire password"
                                  onChange={e => setPassword(e.target.value)}/>
                </Form.Group>
                <Button type="submit">Entra!</Button>
            </Form>
            <p>Non hai ancora un account?<Link to="/signup">Registrati</Link></p>
        </>
    )
}