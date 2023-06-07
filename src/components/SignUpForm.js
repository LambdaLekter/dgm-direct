import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Container, Form, Button, FloatingLabel, Col, Row, InputGroup} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faAt, faLock} from '@fortawesome/free-solid-svg-icons';
import '../style/form.css'

export default function SignUpForm() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [user, setUser] = useState({firstName: '', lastName: '', username: '', email: '', password: ''})

    const [validated, setValidated] = useState(false);

    const handleSubmit = e => {
        console.log("Invio form riuscito")

        // Validazione input del form client-side
        const form = e.currentTarget
        if (!form.checkValidity()) {
            e.preventDefault()
            e.stopPropagation()
        }
        setValidated(true)

        // TODO - Scrittura del nuovo utente su database
        if (password === confirmPassword) {
            setUser({
                firstName: {firstName},
                lastName: {lastName},
                username: {username},
                email: {email},
                password: {password}
            })
            alert("Registrazione effettuata correttamente")

            // TODO Redirect alla pagina di profilo o alla Home con le varie chat
        } else {
            e.preventDefault()
            alert("Le password inserite sono diverse")
        }
    }

    return (
        <>
            <div className="signup-form d-flex align-items-center vh-100">
                <Container fluid="md">
                    <Row className="justify-content-center">
                        <Col>
                            <Form className="bg-white p-4 pb-2 rounded-4" noValidate validated={validated}
                                  onSubmit={handleSubmit}>
                                <h2 align="center">Registrati sulla piattaforma</h2>
                                <Row className="mb-2">
                                    <Col className="my-1">
                                        <FloatingLabel controlId="floatingInput" label="Nome">
                                            <Form.Control type="text"
                                                          id="inputNome"
                                                          placeholder="Inserire nome"
                                                          value={firstName}
                                                          onChange={e => setFirstName(e.target.value)}
                                                          required
                                            />
                                        </FloatingLabel>
                                    </Col>

                                    <Col className="my-1">
                                        <FloatingLabel controlId="floatingInput" label="Cognome">
                                            <Form.Control type="text"
                                                          id="inputCognome"
                                                          placeholder="Inserire cognome"
                                                          value={lastName}
                                                          onChange={e => setLastName(e.target.value)}
                                                          required
                                            />
                                        </FloatingLabel>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="my-1">
                                        <InputGroup className="mb-2" hasValidation>
                                            <InputGroup.Text><FontAwesomeIcon icon={faUser}/></InputGroup.Text>
                                            <FloatingLabel controlId="floatingInput" label="Username">
                                                <Form.Control type="text"
                                                              id="inputUsername"
                                                              placeholder="Inserire username"
                                                              value={username}
                                                              onChange={e => setUsername(e.target.value)}
                                                              required
                                                />
                                            </FloatingLabel>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="my-1">
                                        <InputGroup className="mb-2" hasValidation>
                                            <InputGroup.Text><FontAwesomeIcon icon={faAt}/></InputGroup.Text>
                                            <FloatingLabel controlId="floatingInput" label="Email">
                                                <Form.Control type="email"
                                                              id="inputEmail"
                                                              placeholder="Inserire indirizzo email"
                                                              value={email}
                                                              onChange={e => setEmail(e.target.value)}
                                                              required
                                                />
                                            </FloatingLabel>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className="my-1">
                                        <InputGroup className="mb-2">
                                            <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                            <FloatingLabel controlId="floatingInput" label="Password">
                                                <Form.Control type="password"
                                                              id="inputPassword"
                                                              placeholder="Inserire password"
                                                              value={password}
                                                              onChange={e => setPassword(e.target.value)}
                                                              aria-describedby="passwordHelpBlock"
                                                              required
                                                />
                                                {/*<Form.Text id="passwordHelpBlock" muted>*/}
                                                {/*    La password deve essere lunga 8-20 caratteri, contenere leggere e numeri*/}
                                                {/*    e non deve contenere spazi, caratteri speciali o emoticon.*/}
                                                {/*</Form.Text>*/}
                                            </FloatingLabel>
                                        </InputGroup>
                                    </Col>
                                    <Col className="my-1">
                                        <InputGroup className="mb-2">
                                            <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                            <FloatingLabel controlId="floatingInput" label="Ripeti password">
                                                <Form.Control type="password"
                                                              id="inputConfirmPassword"
                                                              placeholder="Ripeti password"
                                                              value={confirmPassword}
                                                              onChange={e => setConfirmPassword(e.target.value)}
                                                              aria-describedby="passwordHelpBlock"
                                                              required
                                                />
                                                {/*<Form.Text id="passwordHelpBlock" muted>*/}
                                                {/*    La password deve essere lunga 8-20 caratteri, contenere leggere e numeri*/}
                                                {/*    e non deve contenere spazi, caratteri speciali o emoticon.*/}
                                                {/*</Form.Text>*/}
                                            </FloatingLabel>
                                        </InputGroup>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button type="submit" className="mb-2">Registrati!</Button>
                                </Row>
                                <div>
                                    <p align="center">Hai già un account? <Link to="/login">Login</Link></p>
                                </div>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}