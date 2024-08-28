import { Component } from "react";
import { Label, Input, Row, Col, Card, CardHeader, CardBody, CardFooter, Button, Container } from "reactstrap";
import { Link, useNavigate } from 'react-router-dom';

const withRouter = (url) => {
    const navigate = useNavigate();
    navigate.withRouter
}

export default class LoginPage extends Component {




    render() {
        return (
            <Container className="fit-screen d-flex justify-content-center align-items-center flex-column">
                <Row>
                    <Col>
                        <h1>Voluntarium</h1>
                    </Col>
                </Row>
                <hr />
                <Row className="w-75">
                    <Col xs={5}>
                        <Card>
                            <CardHeader className="bg-dark text-light fw-bold"> Voluntário </CardHeader>
                            <CardBody>
                                <Label>Login</Label>
                                <Input
                                    type="text"
                                    onChange={(e) => this.setValue({ voluntary: { username: e.target.value } })}
                                />
                                <Label>Senha</Label>
                                <Input
                                    type="text"
                                    onChange={(e) => this.setValue({ voluntary: { password: e.target.value } })}
                                />
                            </CardBody>
                            <CardFooter className="text-end">
                                <Button
                                    color="link"
                                ><Link to="/cadastro/voluntario">Cadastrar</Link></Button>
                                <Button
                                    color="primary"
                                >Logar</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                    <Col xs={2}></Col>
                    <Col xs={5}>
                        <Card>
                            <CardHeader className="bg-dark text-light fw-bold"> Associação </CardHeader>
                            <CardBody>
                                <Label>Login</Label>
                                <Input
                                    type="text"
                                    onChange={(e) => this.setValue({ association: { username: e.target.value } })}
                                />
                                <Label>Senha</Label>
                                <Input
                                    type="text"
                                    onChange={(e) => this.setValue({ association: { password: e.target.value } })}
                                />

                            </CardBody>
                            <CardFooter className="text-end">
                                <Button
                                    color="link"
                                ><Link to="/cadastro/associacao">Cadastrar</Link></Button>
                                <Button
                                    color="primary"
                                >Logar</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}