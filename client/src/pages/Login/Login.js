import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import Hero from "../../components/Hero";


class Login extends Component {


    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""

        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }


    render() {

        return (
            <Hero imgClass="hero-img3">
                <div className="logo">
                    <div className="Login">
                        <form onSubmit={this.handleSubmit}>
                            <FormGroup controlId="email" bsSize="lg">
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    autoFocus
                                    type="email"
                                    value={this.state.email}
                                    onChange={this.handleChange}
                                />
                            </FormGroup>
                            <FormGroup controlId="password" bsSize="lg">
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    value={this.state.password}
                                    onChange={this.handleChange}
                                    type="password"
                                />
                            </FormGroup>
                            <Button href="/conferences"
                                blockb="true"
                                bsSize="large"
                                disabled={!this.validateForm()}
                                type="submit"
                            >
                                Login
                </Button>
                            <Button href="/signup"
                                blockb="true"
                                bsSize="large"
                                type="submit"
                            >
                                Sign Up
                </Button>
                        </form>
                    </div>
                </div>
            </Hero>
        );
    }

}


export default Login;