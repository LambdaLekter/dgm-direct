import React, {useState} from "react";
import {Link} from "react-router-dom";
import Form from "react-bootstrap/Form";
import 'bootstrap/dist/css/bootstrap.css';
import {FormGroup} from "react-bootstrap";
import Button from "react-bootstrap/Button";

export default function SignUpForm() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [user, setUser] = useState({username: '', email: '', password: ''})
    const handleSubmit = e => {
        console.log("Invio form riuscito")
        if (password === confirmPassword) {
            setUser({
                username: {username},
                email: {email},
                password: {password}
            })
            return <p>Registrazione effettuata correttamente</p>
        }
    }

    return (
        <>
            <p>Entra a far parte di DGM Direct🪃</p>
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Form.Label htmlFor="inputUsername">Username</Form.Label>
                    <Form.Control type="text" id="" placeholder="Inserire username o email"
                                  onChange={e => setUsername(e.target.value)}/>

                    <Form.Label htmlFor="inputEmail">Email</Form.Label>
                    <Form.Control type="email" id="inputEmail" placeholder="Inserire email"
                                  onChange={e => setEmail(e.target.value)}/>

                    <Form.Label htmlFor="inputPassword">Password</Form.Label>
                    <Form.Control type="password" id="inputPassword" placeholder="Inserire password"
                                  onChange={e => setPassword(e.target.value)}
                                  aria-describedby="passwordHelpBlock1"/>
                    <Form.Text id="passwordHelpBlock1" muted>
                        La password deve essere lunga 8-20 caratteri, contenere leggere e numeri
                        e non deve contenere spazi, caratteri speciali o emoticon.
                    </Form.Text>

                    <Form.Label htmlFor="inputConfirmPassword" defaultValue="">Conferma password</Form.Label>
                    <Form.Control type="password" id="inputConfirmPassword" placeholder="Ripetere password"
                                  onChange={e => setConfirmPassword(e.target.value)}
                                  aria-describedby="passwordHelpBlock2"/>
                    <Form.Text id="passwordHelpBlock2" muted>
                        La password deve essere lunga 8-20 caratteri, contenere leggere e numeri
                        e non deve contenere spazi, caratteri speciali o emoticon.
                    </Form.Text>
                </FormGroup>
                <br/>
                <Button type="submit">Registrati!</Button>
            </Form>
            <p>Hai già un account? <Link to="/login">"Login"</Link></p>
        </>
    )
}