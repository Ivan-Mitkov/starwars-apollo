import React from "react";
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Navbar=styled.div`
width:100%;
height:10vh;
background:#aaaaaa;

`;
 


const NavBar = ({toggleTheme}) => {
   
    return (
        <Navbar>
            navbar
            <button onClick={toggleTheme}>Toggle theme</button>
        </Navbar>
    )
}

export default NavBar
