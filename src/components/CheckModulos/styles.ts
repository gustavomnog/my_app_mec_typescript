import styled from "styled-components"


const Container = styled.div`
padding-bottom: 16.13px;


.hoverEnable {
  cursor: pointer;
  
  :hover .checkmark {
    background-color: var(--background);
  }
}

label {
  display: flex;
  align-items: center;
}

.input-wrapper {
  position: relative;
  width: 0px;
  height: 20px;
  padding-right: 25px;
}

.inputCheck{
  opacity:0 ;
  width: 0;
  height: 0;
}

.inputCheck:checked + .checkmark {
  background-color: var(--blue);
}

.inputCheck:checked + .checkmark::after{
  display: block;
}

.checkmark{
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: var(--background-white);
  border: 2px solid var(--blue);
  border-radius: 5px; 
}

.checkmark::after {
  content: "";
  position: absolute;
  display: none;
  left: 4px;
  width: 5px;
  height: 10px;
  border: 1px solid #FFFFFF;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

.textBold {
  font-weight: bold;
}



  `


export { Container }


