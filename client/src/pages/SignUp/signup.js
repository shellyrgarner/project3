import React, { Component } from "react";
// import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
import { Button } from "react-bootstrap";
import "./signup.css";
import axios from "axios";
// import { Redirect } from "react-router-dom";
// import { Input, FormBtn } from "../../components/Form";
import { Input } from "../../components/Form";


class SignUp extends Component {
    // constructor(props) {
    //     super(props);

        // this.state = {
           
        state = {
            username: "",
            email: "",
            password: "",
            messageFromServer: "",
            showError: false,
            registerError: false,
            loginError: false
        // };
    };

    // validateForm() {
    //     return this.state.username.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
    // }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log('sign-up-form, email: ');
        console.log(this.state.email);
        if (this.state.username === '' || this.state.email === '' || this.state.password === '') {
            this.setState({
                showError: true,
                loginError: false,
                registerError: true
            });
        } 
        else {
            console.log(this.state);
            axios.post('/auth/signup', {
                email: this.state.email,
                password: this.state.password,
                username: this.state.username
            })
                .then((response) => localStorage.setItem('token', response.data.token))
                // console.log("token:" + response.data.token)
                .catch((error) => console.log('sign up server error: ', error));

                this.props.history.push('/conferences');
        }
    };

    render() {
        // const { messageFromServer, showError, loginError, registerError } = this.state;
        const { showError, loginError, registerError } = this.state;
        
        // if (messageFromServer === '') {
        return (
            <div className="SignUp">
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
               
                    <Button href="/conferences"
                            blockb
                            bsSize="large"
                            // disabled={!this.validateForm()}
                            type="submit"
                            onClick={this.handleSubmit}
                        > 
                            SignUp
                        </Button>
                    {/* <FormBtn
                        type="submit"
                        onClick={this.handleSubmit}
                    >
                        SignUp
                    </FormBtn> */}
                </form>
                {showError === true &&
                    registerError === true && (
                        <div>
                            <p>Username and password are required fields.</p>
                        </div>
                    )}
                {showError === true &&
                    loginError === true && (
                        <div>
                            <p>That Email is already taken. Please choose another or login.</p>
                        </div>
                    )}
            </div>
        );
    }
    // else {
    //     return <Redirect to={`/conferences`} />;

    // }
    // }
}
export default SignUp;