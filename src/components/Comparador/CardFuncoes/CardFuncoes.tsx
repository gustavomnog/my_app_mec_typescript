import { useState } from "react"
import { IoBanOutline, IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"
import { BsCheck2Circle } from "react-icons/bs"
import Ajuda from "./Ajuda/Ajuda"
import { Funcoes } from "../../interfaces/types"

import { Container, Titulo, ContainerFuncoes, LinhaFuncoes, ButtonExibir } from "./styles"
import { Link } from "react-scroll"

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
    <Container id={tituloGrupo}>
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
                      {funcao.CM_SIST_MEC === "S" ? <BsCheck2Circle className="icon" /> : <span>{funcao.CM_COND}</span>}
                    </div>
                    <div className="box">
                      {funcao.CM_SIST_MECBOX === "S"
                        ? <BsCheck2Circle className="icon" />
                        : funcao.CM_COND != null ? <span>{funcao.CM_COND}</span> : <IoBanOutline className="icon iconBan" />}
                    </div>
                  </div>
                </LinhaFuncoes>
              )
            })
          }
        </ContainerFuncoes>
      )}
      <Link className="link" to={tituloGrupo} spy={true} smooth={true} offset={-200} duration={500}>
      <ButtonExibir>
        <button onClick={handleShowFunction}>{exibirFuncoes ? "Ocultar funções" : "Ver funçoes"}
          {exibirFuncoes ? <IoChevronUpOutline className="icon" /> : <IoChevronDownOutline className="icon" />}
        </button>
      </ButtonExibir>
      </Link>
    </Container>
  )
}


export default CardFuncoes