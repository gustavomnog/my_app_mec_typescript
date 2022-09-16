import { useState } from "react"
import { IoBan, IoCheckmarkCircleOutline, IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"
import Ajuda from "./Ajuda/Ajuda"
import { Funcoes } from "../../interfaces/types"

import { Container, Titulo, ContainerFuncoes, LinhaFuncoes, ButtonExibir } from "./styles"

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
        <ContainerFuncoes>
          {
            grupo.map(funcao => {
              return (
                <LinhaFuncoes key={funcao.CM_COD_FUNCAO}>
                  <div className="funcao" >
                    {funcao.CM_DESC_FUNC}
                    <Ajuda ajuda={funcao.CM_AJUDA} />
                  </div>
                  <div className="iconsWrapper">
                    <div className="mecauto">
                      {funcao.CM_SIST_MEC === "S" ? <IoCheckmarkCircleOutline className="icon" /> : <span>{funcao.CM_COND}</span>}
                    </div>
                    <div className="box">
                      {funcao.CM_SIST_MECBOX === "S"
                        ? <IoCheckmarkCircleOutline className="icon" />
                        : funcao.CM_COND != null ? <span>{funcao.CM_COND}</span> : <IoBan className="icon iconBan" />}
                    </div>
                  </div>
                </LinhaFuncoes>
              )
            })
          }
        </ContainerFuncoes>
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