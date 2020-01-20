import React, {Component} from 'react';

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: "",
      password: "",
      email: ""
    }
  }
  onNameChange = (event) => {
    this.setState({name: event.target.value})
  }
  onPasswordChange = (event) => {
    this.setState({password: event.target.value})
  }
  onEmailChange = (event) => {
    this.setState({email: event.target.value})
  }
  onButtonSubmit = () => {
    const {name, password, email} = this.state
    fetch("http://localhost:5000/register", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email
      })
    }).then((res) => res.json())
    .then((res) => {
      if(res === "success"){
        this.props.onRouteChanged('home');
      }
    })
    .catch(console.log)
  }
  render(){
    return (
      <article className="br3 ba shadow-2 grow center b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Register</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="text" name="name" onChange={this.onNameChange} id="name" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy className" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address" onChange={this.onEmailChange} id="email-address" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" onChange={this.onPasswordChange} id="password" />
              </div>
            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.onButtonSubmit} type="submit" value="Register" />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Register;
