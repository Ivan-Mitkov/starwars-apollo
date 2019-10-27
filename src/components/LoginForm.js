import React, { Component } from 'react';



export default class LoginForm extends Component {
  state = { email: '',password:'' };

  onChangeEmail = event => {
    const email = event.target.value;
    // console.log(email)
    this.setState(s => ({ email }));
  };
  onChangePass = event => {
    const password = event.target.value;
    // console.log(password)
    this.setState(s => ({ password }));
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login({ variables: { email: this.state.email,password:this.state.password } });
  };

  render() {
    return (
      
        <form onSubmit={this.onSubmit}>
          <input
            required
            type="email"
            name="email"
            placeholder="Email"
            data-testid="login-input"
            onChange={this.onChangeEmail}
          />
          <input
            required
            type="password"
            name="password"
            placeholder="password"
            data-testid="login-input"
            onChange={this.onChangePass}
          />
          <button type="submit">Log in</button>
        </form>
    
    );
  }
}

/**
 * STYLED COMPONENTS USED IN THIS FILE ARE BELOW HERE
 */

// const Container = styled('div')({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   flexGrow: 1,
//   paddingBottom: unit * 6,
//   color: 'white',
//   backgroundColor: colors.primary,
//   backgroundImage: `url(${space})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
// });

// const svgClassName = css({
//   display: 'block',
//   fill: 'currentColor',
// });

// const Header = styled('header')(svgClassName, {
//   width: '100%',
//   marginBottom: unit * 5,
//   padding: unit * 2.5,
//   position: 'relative',
// });

// const StyledLogo = styled(Logo)(size(56), {
//   display: 'block',
//   margin: '0 auto',
//   position: 'relative',
// });

// const StyledCurve = styled(Curve)(size('100%'), {
//   fill: colors.primary,
//   position: 'absolute',
//   top: 0,
//   left: 0,
// });

// const Heading = styled('h1')({
//   margin: `${unit * 3}px 0 ${unit * 6}px`,
// });

// const StyledRocket = styled(Rocket)(svgClassName, {
//   width: 250,
// });

// const StyledForm = styled('form')({
//   width: '100%',
//   maxWidth: 406,
//   padding: unit * 3.5,
//   borderRadius: 3,
//   boxShadow: '6px 6px 1px rgba(0, 0, 0, 0.25)',
//   color: colors.text,
//   backgroundColor: 'white',
// });

// const StyledInput = styled('input')({
//   width: '100%',
//   marginBottom: unit * 2,
//   padding: `${unit * 1.25}px ${unit * 2.5}px`,
//   border: `1px solid ${colors.grey}`,
//   fontSize: 16,
//   outline: 'none',
//   ':focus': {
//     borderColor: colors.primary,
//   },
// });