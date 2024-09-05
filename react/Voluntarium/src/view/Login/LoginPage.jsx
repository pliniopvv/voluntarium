import { Component } from "react";
import { Label, Input, Row, Col, Card, CardHeader, CardBody, CardFooter, Button, Container } from "reactstrap";
import ModalVoluntaryRegister from "../../shared/ModalVoluntaryRegister";
import { toast } from "react-toastify";
import { configureInterceptors, setToken } from "../../utils/EspecialFunctions";
import ModalAssociationRegister from "../../shared/ModalAssociationRegister";
import { URL_Login, URL_Register } from "../../services/URLs";
import axios from "axios";
import withRouter from "../../shared/withRouter";

class LoginPage extends Component {

    state = {
        modal: {
            voluntary: {
                isOpen: false
            },
            association: {
                isOpen: false
            }
        },
        model: {}
    }

    setValue(cmp) {
        this.setState({ model: Object.assign(this.state.model, cmp) });
    }

    toggle(win) {
        const { modal } = this.state;
        modal[win].isOpen = !modal[win].isOpen;
        this.setState({ modal });
    }

    async login(type) {
        configureInterceptors();
        await this.loginAll();
        // const cmds = [];
        // cmds['association'] = this.associationLogin.bind(this);
        // cmds['voluntary'] = this.voluntaryLogin.bind(this);
        // await cmds[type]();
    }


    async loginAll() {
        const { model } = this.state;
        const request = axios.post(`${URL_Login}`, model);
        const resp = await toast.promise(request, {
            pending: "Logando ...",
            success: "Logado, redirecionando.",
            error: "Falha em logar, verifique usuário/senha e tente novamente."
        });
        if (resp.status == 200)
            this.finishLogin(resp.data);
        else
            toast.error("Erro desconhecido, favor informar o desenvolvedor.");
    }

    finishLogin(data) {
        const { access_token } = data;
        const { navigate } = this.props;
        setToken(access_token);
        navigate("/");
    }

    async associationLogin() {
        toast.success("Logado como Associação");
    }
    async voluntaryLogin() {
        toast.success("Logado como Voluntário");
    }

    render() {
        const { modal } = this.state;
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
                                    onChange={(e) => this.setValue({ email: e.target.value })}
                                />
                                <Label>Senha</Label>
                                <Input
                                    type="text"
                                    onChange={(e) => this.setValue({ password: e.target.value })}
                                />
                            </CardBody>
                            <CardFooter className="text-end">
                                <Button
                                    color="link"
                                    onClick={() => this.toggle('voluntary')}
                                >Cadastrar</Button>
                                <Button
                                    color="primary"
                                    onClick={() => this.login('voluntary')}
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
                                    onChange={(e) => this.setValue({ email: e.target.value })}
                                />
                                <Label>Senha</Label>
                                <Input
                                    type="text"
                                    onChange={(e) => this.setValue({ password: e.target.value })}
                                />

                            </CardBody>
                            <CardFooter className="text-end">
                                <Button
                                    color="link"
                                    onClick={() => this.toggle('association')}
                                >Cadastrar</Button>
                                <Button
                                    color="primary"
                                    onClick={() => this.login('association')}
                                >Logar</Button>
                            </CardFooter>
                        </Card>
                    </Col>
                </Row>
                <ModalVoluntaryRegister isOpen={modal.voluntary.isOpen} onClose={() => this.toggle('voluntary')} />
                <ModalAssociationRegister isOpen={modal.association.isOpen} onClose={() => this.toggle('association')} />
            </Container>
        )
    }
}

export default withRouter(LoginPage);