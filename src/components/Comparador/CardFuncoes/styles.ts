import styled from "styled-components"


const Container = styled.div`
margin: 0 15.5px 27px 15.5px;
border: 1px solid #C2C3C5;
border-radius: 30px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

`

const Titulo = styled.div`
margin: 20px;
font-weight: 800;
font-size: 20px;

@media (max-width: 800px) { 
  font-size: 18px;
 }
`

const ContainerFuncoes = styled.div`
margin: 15px;
font-size: 20px;

@media (max-width: 800px) { 
  font-size: 17px;
 }
`
const LinhaFuncoes = styled.div`
display: flex;
align-items: center;
width:100%;
padding:5px 0 5px 0;

.funcao{
  display: flex;
  align-items: center;
  text-transform: capitalize;
  width: 365px;
  flex-wrap: wrap;

 
  .iconHelp{
    width: 1.5rem;
    height: 1.5rem;
    color: var(--blue);
    margin-left: 5px;
    cursor: pointer;
  }

  span{
    width: 362px;
    font-size: 13px;
    text-transform: none;
    margin-top: 5px;

    @media (max-width: 800px) { 
      width: 285px;
   }
  }
}

.iconsWrapper {
  display: flex;
  justify-content: space-between;
  width:334px;


  @media (max-width: 800px) { 
      padding-right: 45.5px;
      width:210px;
   }
   
  .mecauto{
    display: flex;
    justify-content: center;
    align-items: center;
    width:157px;
    
  
    @media (max-width: 800px) { 
      margin-right: 0;
      width:41px;
   }
    
    span{
    text-align: center;
    font-size: 0.8rem;
    line-height: 1rem;
    }
  }
  
  .box{
    display: flex;
    justify-content: center;
    align-items: center;
    width:157px;
  
    @media (max-width: 800px) { 
      width:41px;
   }
  
    span{
    text-align: center;
    font-size: 0.8rem;
    line-height: 1rem;
    }
  }
}

.icon {
  width: 25px;
  height:25px;
  color: var(--green-dark);
}


.iconBan{
  color: var(--red);
}
`

const ButtonExibir = styled.div`
display: flex;
justify-content:center;
align-items: center;
width: 100%;
margin: 11px 0 22px 0;

button{
  outline: none;
  border: none;
  background: none;
  display: flex;
  justify-content:center;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  color: var(--grey);
}

.icon{
  color: var(--red-dark);
  height: 1.5em;
  width: 1.5em;
  margin-left: 3px;
}
`

export { Container, Titulo, ContainerFuncoes, LinhaFuncoes, ButtonExibir }