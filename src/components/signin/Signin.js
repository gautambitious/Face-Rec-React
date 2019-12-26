import React, { Component} from 'react';

class Signin extends Component{
  constructor(props){
    super(props);
    this.state = {
      passwordText: '',
      emailText: ''
    }
  }
  onPasswordChange = (event) => {
    this.setState({passwordText: event.target.value});
  }
  onEmailChange = (event) => {
    this.setState({emailText: event.target.value})
  }
  onButtonSubmit = () => {
    const data=JSON.stringify({
      email: this.state.emailText,
      password: this.state.passwordText
    });
    fetch("http://localhost:5000/signin", {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: data})
    .then((res) => res.json())
    .then((res) => {
      if(res === "done"){
        this.props.onRouteChanged("home")
      }
    })
  }
  render(){
    const onRouteChanged=this.props.onRouteChanged;
    return (
      <article className="br3 ba shadow-2 grow center b--black-10 mv4 w-100 w-50-m w-25-l mw6 center">
        <main className="pa4 black-80">
          <div className="measure" >
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f4 fw6 ph0 mh0">Sign In</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="email" name="email-address"  onChange={this.onEmailChange} id="email-address" />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                <input className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password" onChange={this.onPasswordChange}  id="password" />
              </div>
            </fieldset>
            <div className="">
              <input className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" onClick={this.onButtonSubmit} type="submit" value="Sign in" />
            </div>
            <div className="lh-copy mt3">
              <p onClick={() => onRouteChanged('register')} className="f6 link dim black db pointer">Register</p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;
