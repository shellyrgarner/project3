import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button } from "react-bootstrap"; import "./login.css";
import Hero from "../../components/Hero";
import axios from "axios";
// import { Input, FormBtn } from "../../components/Form";
import { Input } from "../../components/Form";
import { withRouter } from "react-router-dom";
import Footer from "../../components/Footer";
import { Container } from "../../components/Grid";

class Login extends Component {
    // constructor(props) {
    //     super(props);

    // this.state = {
    state = {
        email: "",
        password: "",
        error: ""
    };
    // }

    // validateForm() {
    //     return this.state.email.length > 0 && this.state.password.length > 0;
    // 
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }
    handleRedirect = event => {
        event.preventDefault();
        this.props.history.push('/signup')
    }

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state.email);
        // console.log(this.state.password);
        // console.log("login check!");

        if (!this.state.email || !this.state.password) {
            this.setState({ error: 'Need Email and Password Please' });
        }


        // else {
        //     axios.post('/auth/login', {
        //         email: this.state.email,
        //         password: this.state.password               
        //     })
        //         .then((response) => localStorage.setItem('token', response.data.token))
        //         .catch((error) => console.log('login error: ' + error));

        //         // this.props.history.push('/conferences');
        //         // location.reload();
        // }  

        try {
            const { data } = axios.post('/auth/login', {
                email: this.state.email,
                password: this.state.password

            });
            console.log("login data: " + data)
            console.log(this.state.email);
            console.log(this.state.password);
            

            localStorage.setItem('token', data.token);

            this.props.history.push('/conferences');
            location.reload(); // eslint-disable-line
        }
        catch (ex) {
            if (ex.response && ex.response.status === 400) {
                const errors = { ...this.state.errors };
                errors.username = ex.response.data;
                this.setState({ errors });
                console.log("error:" + errors.response.data)
            }

        }
        //catch (err) {
        //     // this.setState({ error: err.response.data.message }); //getting cant set headers error on this 
        //     this.setState({ error: err.response.data}); //getting cant set headers error on this 

        // }
    };




    render() {
        return (
            <Hero imgClass="hero-img3" classes="Login-hero">
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
                            <br></br>
                            {/* <p>Or</p> */}
                            <Button href="/signup"
                                blockb="true"
                                bsSize="large"
                                type="submit"
                                onClick={this.handleRedirect}
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


export default withRouter(Login);