import React from "react";
import {
    Form,
    Col,
    FormGroup,
    Label,
    Input,
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";

const formContainer = {
    justifyContent: "center"
};

export default class AddModal extends React.Component {
    constructor(props) {
        super(props);

        //非表示で初期化する
        this.state = {
            modal: false,
            title: ""
        };
        this.toggle = this.toggle.bind(this);
    }
    //表示・非表示切り替える
    toggle() {
        this.setState({
            modal: !this.state.modal
        });
        console.log("date:" + this.state.date, "title:" + this.state.title);
    }

    render() {
        return (
            <div>
                <Button color="info" onClick={this.toggle}>1日の目標カロリーの編集</Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}
                    className={this.props.className}
                >
                    <ModalHeader toggle={this.toggle}>登録画面</ModalHeader>
                    <ModalBody>
                        <Form style={formContainer}>
                            <FormGroup>
                                <Label for="title" sm={8}>目標カロリー</Label>
                                <Col sm={10}>
                                    <Input
                                        sm={7}
                                        type="number"
                                        name="title"
                                        id="title"
                                        placeholder="目標カロリーを入力してください"
                                        onChange={e => this.setState({ title: e.target.value })}
                                        value={this.state.title}
                                    />
                                    <span>kcal</span>
                                </Col>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.toggle}>登録！</Button>
                        <Button color="secondary" onClick={this.toggle}>キャンセル</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
