import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from "react-router-dom";
import logo from '../images/PyToDo.png';
import hello from '../images/hello.svg';
import '../css/login.css';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    fetch("http://127.0.0.1:8000/api/token/", {
      "method": "POST",
      "body": JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`)
      } else {
        return response.json()
      }
    })
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    });
    
    event.preventDefault();
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
      <div className="col-3">
              <input name="username" className="effect-7" type="text" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
                <span className="focus-border">
                <i></i>
                </span>
            </div>
            <div className="col-3">
              <input name="password" className="effect-7" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
                <span className="focus-border">
                <i></i>
                </span>
            </div>
      <div>
        <button type="submit">Login</button>
        <h3 href="#">Forgot password? <a href="#">Click here</a></h3>
      </div>
    </form>
  );
  }
}

class LoginPage extends React.Component {
  render() {
    return (
     <body>
    <div>
      <header>
        <img src={logo} />
        <h3>New user? <Link to="/register">Sign Up</Link></h3>
      </header>
      <div className="login">
        <img src={hello} width="50%" />
        <div className="form-div">
          <h1>Welcome back!</h1>
          <h3>Login to continue</h3>
          <Form />
        </div>
      </div>
    </div>
    </body>
    );
  }
}

export default function Login() {
  return (
    <LoginPage />
  );
}