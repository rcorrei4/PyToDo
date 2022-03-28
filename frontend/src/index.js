import React from 'react';
import ReactDOM from 'react-dom';
import logo from './PyToDo.png';
import hello from './hello.svg';
import './index.css';

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
      "headers": {
        "content-type": "application/json",
        "accept": "application/json"
      },
      "body": JSON.stringify({
        username: this.state.username,
        password: this.state.password
      }),
    })
    .then(response => response.json())
    .then(response => {
      console.log(response)
    })
    
    event.preventDefault();
  }

  render () {
  	return (
  		<form onSubmit={this.handleSubmit}>
			<div class="col-3">
            	<input name="username" class="effect-7" type="text" placeholder="Username" value={this.state.username} onChange={this.handleInputChange} />
              	<span class="focus-border">
                <i></i>
              	</span>
          	</div>
          	<div class="col-3">
            	<input name="password" class="effect-7" type="password" placeholder="Password" value={this.state.password} onChange={this.handleInputChange}/>
              	<span class="focus-border">
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

class Login extends React.Component {
  render() {
    return (
     <body>
		<div>
			<header>
				<img src={logo} />
				<h3>New user? <a href="{% url 'register' %}">Sign Up</a></h3>
			</header>
			<div class="login">
				<img src={hello} width="50%" />
				<div class="form-div">
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

// ========================================

ReactDOM.render(
  <Login />,
  document.getElementById('root')
);
