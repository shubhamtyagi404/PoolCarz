import React from 'react';
import Well from 'react-bootstrap/lib/Well';
import Navbar from 'react-bootstrap/lib/Navbar';
import Panel from 'react-bootstrap/lib/Panel';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Button from 'react-bootstrap/lib/Button';
import axios from 'axios';
class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: { userName: '', password: '' } }
        this.setEmpState = this.setEmpState.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    };
    setEmpState(e) {
        var field = e.target.name;
        var value = e.target.value;
        this.state.data[field] = value;
        this.setState({ data: this.state.data });
    }

    handleLogin(e,data) {
        e.preventDefault();
        axios.post('http://localhost:3000/login',data.userName)
        .then(function(response){
            console.log("Login Success for",data.userName)
            console.log(response.status);
            if(response.status=="200"){
                this.props.history.push("/bookride");
            }
        })
        .catch(function(error){
            alert("some error occurred");
        });
    }
    render() {
        return (
            <div>
                <Navbar >
                    <Navbar.Header >
                        <Navbar.Brand >
                            <a href="#home" style={{ color: "#1E90FF", fontSize: "30px" }}><b>PoolCarz</b></a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
                <Panel>
                    <Panel.Heading style={{ backgroundColor: "#1E90FF", textAlign: "center" }}>
                        <Panel.Title componentClass="h3">Login</Panel.Title>
                    </Panel.Heading>
                    <Panel.Body>
                        <FormGroup>
                            UserName
            <FormControl type="text" style={{ width: "40%" }} name="userName" placeholder="Enter Name" value={this.state.data.userName} onChange = {this.setEmpState} />
                        </FormGroup><br />
                        <FormGroup>
                            Password
            <FormControl type="password" style={{ width: "40%" }} name="password" placeholder="Enter Password" value = {this.state.data.password} onChange = {this.setEmpState}/><br /><br />
                        </FormGroup>
                        <Button style={{ backgroundColor: "#1E90FF" }} onClick = {((e) => this.handleLogin(e, this.state.data))} >Login</Button>
                    </Panel.Body>

                </Panel>

                <footer ><Well className="footer">
                    &copy; 2019 Shubham Tyagi
        </Well></footer>

            </div>
        )
    }
}
export default Login;