import { Component } from "react";
import { Button, Col, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { GenericEntity } from "../utils/GenericEntity";
import { URL_Register } from "../services/URLs";
import { toast } from "react-toastify";
import InputDoubleChecked from "./InputDoubleChecked";
import { configureInterceptors } from "../utils/EspecialFunctions";

export default class ModalAssociationRegister extends Component {
    state = {
        isOpen: false,
        model: {},
        errors: {},
        valid: {}
    }

    setValue(cmp) {
        this.setState({ model: Object.assign(this.state.model, cmp) });
        this.check();
    }

    check() {
        const { valid, model } = this.state;
        const RegEx = /\w+@\w+.\w+[.]\w+/g
        valid.email = RegEx.test(model.email);
        this.setState({ valid });
    }

    validate() {
        const { errors, valid, model } = this.state;
        let has = false;

        if (!valid.email) {
            errors.email = true;
            has = true;
        }
        if (model.password == undefined) {
            errors.password = true;
            has = true;
        }
        if (model.name.length < 3 || model.name == null) {
            errors.name = true;
            has = true;
        }

        this.setState({ errors });

        return !has;
    }

    onSave() {
        if (!this.validate()) return;
        const { model } = this.state;
        const entity = new GenericEntity({ url: `${URL_Register}`, ...model });
        configureInterceptors();
        toast.promise(entity.save(), { pending: "Registrando...", error: "Falha ao registrar!", success: "Registrado com sucesso!" });
        if (onClose) onClose();
    }

    render() {
        const { model, valid, errors } = this.state;
        const { isOpen, onClose } = this.props;
        return (
            <Modal isOpen={isOpen} toggle={() => onClose()}>
                <ModalHeader toggle={() => onClose()}>Cadastrar Associação</ModalHeader>
                <ModalBody>
                    <Row>
                        <Col>
                            <Label>Nome</Label>
                            <Input
                                type="text"
                                value={model.name}
                                onChange={(e) => this.setValue({ name: e.target.value })}
                            />
                            <Label>E-mail</Label>
                            <Input
                                type="email"
                                value={model.email}
                                onChange={(e) => this.setValue({ email: e.target.value })}
                                valid={valid?.email}
                                invalid={errors?.email}
                            />
                        </Col>
                    </Row>
                    <InputDoubleChecked
                        onChange={(pass) => this.setValue({ password: pass.valid ? pass.value : undefined })}
                    />
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => this.onSave()}>
                        Registrar
                    </Button>{' '}
                    <Button color="danger" onClick={() => onClose()}>
                        Cancelar
                    </Button>
                </ModalFooter>
            </Modal>
        )
    }
}