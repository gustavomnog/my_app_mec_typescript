import CheckModulos from "../CheckModulos/CheckModulos"
import CardMecauto from "../CardMecauto/CardMecauto"
import CardBox from "../CardBox/CardBox"

import { Container, ContainerCards, ContainerModulos, Modulos, Titulo, TituloModulos, Obs } from "./styles"

interface ListaModulos {
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

interface Valores {
  MEN: number,
  TRI: number,
  SEM: number,
  SEM2: number,
  ANU: number,
  ANU2: number,
  ANU3: number,
  ANU4: number,
}

type Props = {
  lista: ListaModulos[], 
  valorTotalMec: Valores, 
  valorTotalBox: Valores, 
  acessos: number,
}
const Orcamento = ({ lista, valorTotalMec, valorTotalBox, acessos}: Props) => {
  
  return (
    <Container>
      <Titulo>Seu orçamento</Titulo>
      <ContainerModulos>
        <TituloModulos>
          <span>Esses são os módulos disponíveis. Os que estão marcados, são os que você solicitou:</span>
        </TituloModulos>
        <Modulos>
          {
            lista.map((modulo: ListaModulos) => {

              return (
                <CheckModulos
                  key={modulo.ID}
                  nomeModulo={modulo.DESCRICAO}
                  selecionado={modulo.MARC}
                />)
            })
          }
        </Modulos>
      </ContainerModulos>
      <ContainerCards>
        <CardMecauto valorSistemaMec={valorTotalMec} acessos={acessos}/>
        <CardBox valorSistemaBox={valorTotalBox} acessos={acessos} />
      </ContainerCards>
      <Obs>
        <span>* Um acesso está incluso no plano e quatro são cortesia. A partir do sexto acesso, é cobrado valor adicional.</span>
        <span>* Os descontos citados acima, são em comparação ao plano MENSAL.</span>
      </Obs>
    </Container>

  )
}


export default Orcamento