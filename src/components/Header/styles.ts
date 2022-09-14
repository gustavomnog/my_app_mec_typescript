import styled from "styled-components"


const Container = styled.header`
display: flex;
`

const ContainerLeft = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50vw;
height: 70px;
background: var(--background-grey);
font-weight: 900;
font-size: 30px;

@media (max-width: 800px) { 
  font-size: 23px;
 }
`
const ContainerRight = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 50vw;
height: 70px;
background: var(--background-red);
text-align: center;
`

const Logo = styled.img`
width: 21.87rem;
height: 4rem;
margin: auto;

@media (max-width: 800px) { 
  width: 16rem;
 }
`


export {ContainerLeft, Container, ContainerRight, Logo}