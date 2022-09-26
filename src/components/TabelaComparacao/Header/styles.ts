import styled from "styled-components"


const Container = styled.header`
display: flex;
justify-content: center;
align-items: center;
height: 70px;
background: var(--background-red);

@media (max-width: 600px) { 
  width: 600px;
 }
`
const Logo = styled.img`
width: 16rem;
`


export {Container, Logo}