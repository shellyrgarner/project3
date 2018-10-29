import React, { Component } from "react";
import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import "./login.css";
import Hero from "../../components/Hero";
import axios from "axios";
import { Input, TextArea, FormBtn } from "../../components/Form";
import Footer from "../../components/Footer";
import { Container } from "../../components/Grid";

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: "",
            error: ""
        };
    }

    // validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // 
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state.email);
        console.log(this.state.password);
        console.log("login check!");

        if (!this.state.email || !this.state.password) {
            this.setState({ error: 'Need Email and Password Please' });
        }

        try {
            const { data } = axios.post('/auth/login', {
                email: this.state.email,
                password: this.state.password
            });

            localStorage.setItem('token', data.token);            

            this.props.history.push('/conferences');
            location.reload(); // eslint-disable-line
        } catch (err) {
            // this.setState({ error: err.response.data.message });
        }
    };




    render() {
        return (
            <Hero imgClass="hero-img3">
                <div className="logo">
                    <div className="Login">
                        <form>
                            <Input
                                placeholder="UserName"
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                            <Input
                                placeholder="Email"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                            <Input
                                placeholder="Password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                            <Button
                                blockb="true"
                                bsSize="large"
                                // disabled={!this.validateForm()}
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                Login
                            </Button>
                            <Button href="/signup"
                                blockb="true"
                                bsSize="large"
                                type="submit"
                                onClick={this.handleSubmit}
                            >
                                Sign Up
                            </Button> 
            
                        {/* <form onSubmit={this.handleSubmit}>
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
                            <Button
                                blockb="true"
                                bsSize="large"
                                // disabled={!this.validateForm()}
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
                            </Button> */}
                        </form>
                    </div>
                </div>
            </Hero>

        );
    }

}


export default Login;