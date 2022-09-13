import { useState } from "react"
import { IoBan, IoCheckmarkCircleOutline, IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"
import Ajuda from "./Ajuda/Ajuda"

import { Container, Titulo, Tabela, BodyTabela, LinhaTabela, CelulaTabela, ButtonExibir } from "./styles"

interface Funcoes {
  CM_COD_FUNCAO: number,
  CM_GRUPO: string,
  CM_DESC_FUNC: null | string,
  CM_SIST_MEC: null | string,
  CM_SIST_MECBOX: string,
  CM_COND: null | string,
  CM_ORDEM_GRUPO: number,
  CM_ORDEM_FUNC: number,
  CM_AJUDA: null | string,
}

type Props = {
  grupo: Funcoes[],
}

const CardFuncoes = ({ grupo }: Props) => {
  const [exibirFuncoes, setExibirFuncoes] = useState<boolean>(false)

  const tituloGrupo = grupo[0].CM_GRUPO

  const handleShowFunction = () => {
    setExibirFuncoes(!exibirFuncoes)
  }


  return (
    <Container>
      <Titulo>{tituloGrupo}</Titulo>
      {exibirFuncoes && (
        <Tabela>
          <BodyTabela>
            {
              grupo.map(funcao => {
                return (
                  <>
                    <LinhaTabela>
                      <CelulaTabela className="funcao">
                        {funcao.CM_DESC_FUNC}
                        <Ajuda ajuda={funcao.CM_AJUDA} />
                      </CelulaTabela>
                      <CelulaTabela className="mecauto">
                        {funcao.CM_SIST_MEC === "S" ? <IoCheckmarkCircleOutline className="icon" /> : <span>{funcao.CM_COND}</span>}
                      </CelulaTabela>
                      <CelulaTabela className="box">
                        {funcao.CM_SIST_MECBOX === "S"
                          ? <IoCheckmarkCircleOutline className="icon" />
                          : funcao.CM_COND != null ? <span>{funcao.CM_COND}</span> : <IoBan className="icon iconBan" />}
                      </CelulaTabela>
                    </LinhaTabela>
                  </>
                )
              })
            }
          </BodyTabela>
        </Tabela>
      )}
      <ButtonExibir>
        <button onClick={handleShowFunction}>{exibirFuncoes ? "Ocultar funções" : "Ver funçoes"}
          {exibirFuncoes ? <IoChevronUpOutline className="icon" /> : <IoChevronDownOutline className="icon" />}
        </button>
      </ButtonExibir>


    </Container>
  )
}


export default CardFuncoes