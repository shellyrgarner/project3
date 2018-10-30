import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import "./profile.css";
import Webcam from "react-webcam";


class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '', camera: [] };
    }

    _handleSubmit(e) {
        e.preventDefault();
        // TODO: do something with -> this.state.file
        console.log('handle uploading-', this.state.file);
    }

    _handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(file)
    }

    setRef = webcam => {
        this.webcam = webcam;
      };

      capture = () => {
        const videoSrc = this.webcam.getVideo();
      };
      
      render() {
          
        const videoConstraints = {
            facingMode: "user"
          };

        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="yourImage" />);
        } else {
            $imagePreview = (<div className="previewText">Upload your picture..</div>);
        }


        return (
            <Container>
                <Row>
                    <Col size="md-6">
                        <div className="previewComponent">
                            <form onSubmit={(e) => this._handleSubmit(e)}>
                                <input className="fileInput"
                                    type="file"
                                    onChange={(e) => this._handleImageChange(e)} />
                                <button className="submitButton"
                                    type="submit"
                                    onClick={(e) => this._handleSubmit(e)}>Upload Image</button>
                            </form>
                            <div className="imgPreview">
                                {$imagePreview}
                            </div>
                        </div>
                        <br></br>
                        <div className="panel panel-default">
                            <div className="panel-heading">Website <i className="fa fa-link fa-1x" /></div>
                            <div className="panel-body"><a href="http://yourwebsite.com">yourwebsite.com</a></div>
                        </div>
                        <div className="tab-content">
                            <div className="tab-pane active" id="home">
                                <hr />
                                <form className="form" action="##" method="post" id="registrationForm">
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="first_name"><h4>First name</h4></label>
                                            <input type="text" className="form-control" name="first_name" id="first_name" placeholder="first name" title="enter your first name if any." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="last_name"><h4>Last name</h4></label>
                                            <input type="text" className="form-control" name="last_name" id="last_name" placeholder="last name" title="enter your last name if any." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="phone"><h4>Phone</h4></label>
                                            <input type="text" className="form-control" name="phone" id="phone" placeholder="enter phone" title="enter your phone number if any." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="mobile"><h4>Mobile</h4></label>
                                            <input type="text" className="form-control" name="mobile" id="mobile" placeholder="enter mobile number" title="enter your mobile number if any." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="email"><h4>Email</h4></label>
                                            <input type="email" className="form-control" name="email" id="email" placeholder="you@email.com" title="enter your email." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="email"><h4>Location</h4></label>
                                            <input type="email" className="form-control" id="location" placeholder="somewhere" title="enter a location" />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="password"><h4>Password</h4></label>
                                            <input type="password" className="form-control" name="password" id="password" placeholder="password" title="enter your password." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-6">
                                            <label htmlFor="password2"><h4>Verify</h4></label>
                                            <input type="password" className="form-control" name="password2" id="password2" placeholder="password2" title="enter your password2." />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <div className="col-xs-12">
                                            <br />
                                            <button className="btn btn-lg btn-success" type="submit"><i className="glyphicon glyphicon-ok-sign" /> Save</button>
                                            <button className="btn btn-lg" type="reset"><i className="glyphicon glyphicon-repeat" /> Reset</button>
                                        </div>
                                    </div>
                                </form>
                            </div></div>
                    </Col>
                    <Col size="md-6">
                        <Webcam width={500} height={550} videoConstraints={videoConstraints}/>
                        <button onClick={this.capture} style={{textAlign:"center"}}>Start video</button>
                    </Col>
                </Row>
            </Container>

        );
    }
}




export default Profile;