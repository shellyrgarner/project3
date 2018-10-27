import React from "react";
import { Col, Row, Container } from "../../components/Grid";
import axios from "axios";




class Settings extends React.Component {

    state = {
        selectedFile: null
    }

    fileSelectedHandler = event => {

        this.setState({
            selectedFile: event.target.files[0]
        });
    }

    filleUploadHandler = () => {
        const pic = new FormData();
        pic.append("image", this.state.selectedFile, this.state.selectedFile.name);
        axios.post(" DATABASE ", pic, {
            onUploadProgress: progressEvent => {
                console.log("Uploaded progress: " + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%")
                    .then(res => {
                        console.log(res);
                    });
            }
        })
    }


    render() {
        return (
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <input style={{display: "none"}} type="file" onChange={this.fileSelectedHandler} 
                        ref={fileInput => this.fileInput = fileInput}/>
                        <button onClick={() => this.fileInput.click()}>Pick File</button>
                        <button onClick={this.filleUploadHandler}>Upload</button>
                    </Col>
                </Row>
            </Container>

        )
    }
};


export default Settings;