import { useState } from "react"
import { ListaModulos } from "../../interfaces/types"

import { Container } from "./styles"


type Props = {
  listaAtual: ListaModulos[],
  handleCheckModulo: (moduloAlterado: React.ChangeEvent<HTMLInputElement>) => void,
}

const CheckModulos = ({ listaAtual, handleCheckModulo }: Props) => {
  const [lista, setLista] = useState(listaAtual)


  return (
    <>
      {
        lista.map(modulo => {
          return (
            <Container key={modulo.ID}>
              <label className="container">
                <div className="input-wrapper">
                  <input type="checkbox" id={String(modulo.ID)} onChange={handleCheckModulo} checked={modulo.MARC ? true : false} />
                  <span className="checkmark"></span>
                </div>
                <span className={modulo.MARC ? "textBold" : "text"}>{modulo.DESCRICAO}</span>
              </label>
            </Container>
          )
        })
      }
    </>
  )
}

export default CheckModulos