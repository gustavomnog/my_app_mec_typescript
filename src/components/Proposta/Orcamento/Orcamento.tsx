import CheckModulos from "../../CheckModulos/CheckModulos"
import Card from "../Card/Card"
import { ListaModulos, Valores } from "../../../interfaces/types"

import { Container, ContainerCards, ContainerModulos, Modulos, Titulo, TituloModulos, Obs } from "./styles"


type Props = {
  lista: ListaModulos[],
  valorTotalMec: Valores,
  valorTotalBox: Valores,
  acessos: number,
}
const Orcamento = ({ lista, valorTotalMec, valorTotalBox, acessos }: Props) => {

  return (
    <Container>
      <Titulo>Seu orçamento</Titulo>
      <ContainerModulos>
        <TituloModulos>
          <span>Esses são os módulos disponíveis. Os que estão marcados, são os que você solicitou:</span>
        </TituloModulos>
        <Modulos>
        <CheckModulos listaAtual={lista}/>
        </Modulos>
      </ContainerModulos>
      <ContainerCards>
        <Card valorSistema={valorTotalMec} acessos={acessos} sistema={'mecauto'} />
        <Card valorSistema={valorTotalBox} acessos={acessos} sistema={'mecauto-box'} />
      </ContainerCards>
      <Obs>
        <span>* Um acesso está incluso no plano e quatro são cortesia. A partir do sexto acesso, é cobrado valor adicional.</span>
        <span>* Os descontos citados acima, são em comparação ao plano MENSAL.</span>
      </Obs>
    </Container>

  )
}


export default Orcamento