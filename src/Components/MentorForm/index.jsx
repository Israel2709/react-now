import React, { Component } from 'react'
import defaultPic from '../../assets/img/user-img.png'
import { Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap'
import firebase from '../../services/firebase'

class MentorForm extends Component {
    constructor() {
        super();
        this.state = {
            name: "Sample Name",
            module: "Sample Module",
            bio: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam harum provident impedit dicta explicabo adipisci ipsum! Illum assumenda quae cupiditate!",
            pic: null,
            previewUrl: null
        }
        this.handleFileChange = this.handleFileChange.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleUpload = this.handleUpload.bind(this)
    }

    handleFileChange(event) {
        console.log(event.target)
        this.setState({
            pic: event.target.files[0],
            previewUrl: URL.createObjectURL(event.target.files[0])
        })
    }

    handleInputChange(event) {
        console.log(event.target.value)
        console.log(event.target.name)
        let inputName = event.target.name
        let inputValue = event.target.value
        this.setState({ [inputName]: inputValue })
    }

    handleUpload() {
        
        /*const formData = new FormData();
        formData.append('image',this.state.pic, this.state.pic.name)*/
        var file = this.state.pic
        var ref = firebase.storage().ref('/mentorPics');

        ref.child(file.name).put(file).then(function (snapshot) {
            console.log('Uploaded a blob or file!');
        });

    }

    render() {
        return (
            <>
                <h1>Hola Koders</h1>
                <Container>
                    <Row>
                        <Col xs='12'>
                            <Form className="bg-dark border rounded p-3 text-white shadow">
                                <Row>
                                    <Col xs='12' md='6'>
                                        <FormGroup>
                                            <Label className="text-left">Nombre:</Label>
                                            <Input type="text" name="name" placeholder="Enter mentor name" value={this.state.name} onChange={this.handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label className="text-left">Módulo:</Label>
                                            <Input type="text" name="module" placeholder="Enter mentor module" value={this.state.module} onChange={this.handleInputChange} />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label for="exampleText">Biografía:</Label>
                                            <Input type="textarea" name="bio" rows="5" value={this.state.bio} onChange={this.handleInputChange} />
                                        </FormGroup>
                                    </Col>
                                    <Col xs='12' md='6' className="d-flex flex-column justify-content-center">

                                        {<img src={this.state.previewUrl ? this.state.previewUrl : defaultPic} alt="Mentor Pic" className="w-75 mx-auto d-block" />}
                                        <FormGroup>
                                            <Label for="exampleFile">Foto:</Label>
                                            <Input type="file" name="file" id="exampleFile" onChange={this.handleFileChange} />
                                        </FormGroup>
                                    </Col>
                                    <Button onClick={this.handleUpload}>Submit</Button>
                                </Row>

                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}

export default MentorForm