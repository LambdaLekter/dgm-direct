import React, {useState} from "react";
import {Link} from "react-router-dom";
import axios from 'axios';
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

    const [validated, setValidated] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        // Validazione input del form client-side
        const form = e.currentTarget
        if (!form.checkValidity()) {
            e.stopPropagation()
        }
        setValidated(true)

        if (password === confirmPassword) {
            console.log("Aggiunta di un utente")

            const newUser = {
                firstName: firstName,
                lastName: lastName,
                username: username,
                email: email,
                password: password
            };

            axios.post('http://localhost:3001/api/users/addUser', newUser)
                .then(res => {
                    console.log("Utente creato con successo")
                    console.log(res.data)
                })
                .catch(error => {
                    console.error(error);
                });
        } else {
            alert("Le password inserite sono diverse")
        }

        // TODO Redirect alla Home con le varie chat
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
                                        <FloatingLabel label="Nome">
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
                                        <FloatingLabel label="Cognome">
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
                                            <FloatingLabel label="Username">
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
                                            <FloatingLabel label="Email">
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
                                            <FloatingLabel label="Password">
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
                                            <FloatingLabel label="Ripeti password">
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