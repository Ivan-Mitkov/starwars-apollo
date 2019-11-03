import React, { Component } from 'react';
import styled from "styled-components";
import { withTheme } from "styled-components";
import Button from './ButtonLoadMore';

const Container=styled.div`
width:80%;
min-width:300px;
margin:0 auto;
height:80vh;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
background-color:black;
`;

const Title=styled.div`
font-size:10rem;
color:${props=>props.theme.Yellow};
@media (max-width: 800px) {
   font-size:7rem;
   line-height:10rem;
  }
@media (max-width: 500px) {
   font-size:3rem;
   line-height:10rem;
  }

`;
const ContainerInput=styled.div`
flex-grow:2;
background-color:${props=>props.theme.cards.background};
width:90%;
margin:20px;
padding:20px;
border-radius:8px;

`;
const Form=styled.form`
height:90%;
width:100%;


`;
const InputDiv=styled.div`
margin:0 auto;
display:flex;
flex-direction:column;
justify-content:space-evenly;
align-items:flex-end;
height:90%;
width:60%;
@media (max-width:800px) {
  width:80%;
}
@media (max-width:600px) {
  width:100%;
}
`;
const Input=styled.input`
width:100%;
line-height:3rem;
border-radius:8px;
font-size:1.5rem;
${props => {
    return { ...props.theme.input };
  }}
`;

const Error=styled.div`
font-size:2rem;
color:red;
`;


 class LoginForm extends Component {
   
  state = { email: 'demo@st6.io',password:'demo1234' };

  onChangeEmail = event => {
    const email = event.target.value;
   
    this.setState(s => ({ email }));
  };
  onChangePass = event => {
    const password = event.target.value;
  
    this.setState(s => ({ password }));
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.login({ variables: { email: this.state.email,password:this.state.password } });
  };



  render() {
    // console.log(this.props)
    return (
      <Container>
        <Title>SWAPP</Title>
        {this.props.error&&<Error>{this.props.error}</Error>}
        <ContainerInput>

      
        <Form onSubmit={this.onSubmit}>
          <InputDiv>
          <Input
            required
            type="email"
            name="email"
            placeholder="Email"
            data-testid="login-input"
            onChange={this.onChangeEmail}
            // value='demo@st6.io'
          />
          <Input
            required
            type="password"
            name="password"
            placeholder="password"
            data-testid="login-input"
            // value="demo1234"
            onChange={this.onChangePass}
          />
          <Button text="Log in" type="submit"></Button>
          </InputDiv>
        </Form>
        </ContainerInput>

        </Container>
    );
  }
}
export default withTheme(LoginForm) 
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