import { Component } from "react";
import { Col, Input, Label, Row } from "reactstrap";

export default class InputDoubleChecked extends Component {

    state = {
        senha1: "",
        senha2: "",
        engine: {
            valid: {
                senha1: false,
            },
        },
        model: {}
    }

    validate() {
        const { engine, model } = this.state;
        if (model.senha1 == model.senha2 && model.senha1 == "") return;

        engine.valid.senha = false; // reset valid;

        const __HAS_ALPHANUMERIC = /\w+/g;
        const __HAS_LOWER = /[a-z]/g;
        const __HAS_UPPER = /[A-Z]/g;
        const __HAS_SPECIAL_CHAR = /\W+/g;

        if (
            model.senha1.length >= 6 &&
            __HAS_ALPHANUMERIC.test(model.senha1) &&
            __HAS_LOWER.test(model.senha1) &&
            __HAS_UPPER.test(model.senha1) &&
            __HAS_SPECIAL_CHAR.test(model.senha1) &&
            model.senha1 == model.senha2
        ) {
            engine.valid.senha = true;
        }

        this.setState({ engine });
        return engine.valid.senha;
    }

    setValue(cmp) {
        const { onChange } = this.props;
        this.setState({ model: Object.assign(this.state.model, cmp) },
            () => {
                const { model } = this.state;
                if (onChange) onChange({ value: model.senha1, valid: this.validate() });
            });
    }

    render() {
        const { engine, model } = this.state;
        return (
            <Row>
                <Col>
                    <Label>Senha</Label>
                    <Input
                        type="password"
                        onChange={(e) => this.setValue({ senha1: e.target.value })}
                        valid={engine.valid.senha}
                        invalid={!!model?.senha1 && !engine.valid.senha}
                    />
                </Col>
                <Col>
                    <Label>Repita a Senha</Label>
                    <Input
                        type="password"
                        onChange={(e) => this.setValue({ senha2: e.target.value })}
                        valid={engine.valid.senha}
                        invalid={!!model.senha1 && !engine.valid.senha}
                    />
                </Col>
            </Row>
        )
    }
}