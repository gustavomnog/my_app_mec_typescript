import { Container } from "./styles"

type Props = {
  nomeModulo:string, 
  selecionado:boolean,
}

const CheckModulos = ({ nomeModulo, selecionado }: Props) => {


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