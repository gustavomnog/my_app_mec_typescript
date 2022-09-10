import { Container } from "./styles"


const CheckModulos = ({ nomeModulo, selecionado }: {nomeModulo:string, selecionado:boolean}) => {


  return (
    <Container>
      <label className={selecionado ? "containerBold" : "container"}>
        <div className="input-wrapper">
          <input type="checkbox" checked={selecionado}  readOnly/>
          <span className="checkmark"></span>
        </div>
        <span className="text">{nomeModulo}</span>
      </label>
    </Container>
  )
}

export default CheckModulos