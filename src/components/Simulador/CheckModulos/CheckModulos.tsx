import { useState } from "react"
import { Container } from "./styles"

interface Modulos {
  CODMODULO: number,
  DESCRICAO: string,
  ID: number,
  ANU: number,
  ANU2: number,
  ANU3: number,
  ANU4: number,
  SEM: number,
  SEM2: number,
  TRI: number,
  MEN: number,
  MARC: boolean,
}

type Props = {
  listaAtual:Modulos[], 
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
                  <input type="checkbox" id={String(modulo.ID)} defaultChecked={modulo.MARC} onChange={handleCheckModulo} />
                  <span className="checkmark"></span>
                </div>
                <span className="text">{modulo.DESCRICAO}</span>
              </label>
            </Container>
          )
        })
      }
    </>
  )
}

export default CheckModulos