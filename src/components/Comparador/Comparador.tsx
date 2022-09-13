import { useEffect, useState } from "react"
import api from "../../services/api"
import CardFuncoes from "./CardFuncoes/CardFuncoes"

import { Container, Titulo, ContainerSistema, Sistema } from "./styles"

interface FuncoesApi {
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


const Comparador = () => {
  const [carregando, setCarregando] = useState<boolean>(true)
  const [listaAtual, setListaAtual] = useState<FuncoesApi[][]>([] as FuncoesApi[][])

  useEffect(() => {
    async function ObterFuncoes() {

      let listaFuncoesApi = [] as FuncoesApi[]
      await api.get("/tabelas")
        .then(({ data }) => {
          listaFuncoesApi = data
        })


      const gruposFuncoes: string[] = []
      listaFuncoesApi.forEach(funcao => {
        if (!gruposFuncoes.includes(funcao.CM_GRUPO)) {
          gruposFuncoes.push(funcao.CM_GRUPO)
        }
      })

      const listaFuncoesTratada = gruposFuncoes.map((chave: string) => {
        const funcoes = listaFuncoesApi.filter(funcao => funcao.CM_GRUPO === chave)
        return funcoes
      })


      setListaAtual(listaFuncoesTratada)
      setCarregando(false)
    }

    ObterFuncoes()

  }, [])


  if (carregando) {
    return (
      <></>
    )
  } else {

    return (
      <Container>
        <Titulo>Compare a diferença entre os sistemas</Titulo>
        <ContainerSistema>
          <Sistema className="mecauto">MECAUTO</Sistema>
          <Sistema className="box">MECAUTO-BOX</Sistema>
        </ContainerSistema>
        {
          listaAtual.map((grupo, index) => {

            return (
              <CardFuncoes key={index} grupo={grupo} />
            )
          })
        }
      </Container>
    )
  }
}



export default Comparador