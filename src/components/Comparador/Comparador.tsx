import { useEffect, useState } from "react"
import api from "../../services/api"
import CardFuncoes from "./CardFuncoes/CardFuncoes"
import { Funcoes } from "../interfaces/types"

import { Container, Titulo, ContainerSistema, Sistema } from "./styles"
import Loading from "../Loading/Loading"


const Comparador = () => {
  const [carregando, setCarregando] = useState<boolean>(true)
  const [listaAtual, setListaAtual] = useState<Funcoes[][]>([] as Funcoes[][])


  useEffect(() => {
    async function ObterFuncoes() {

      let listaFuncoesApi = [] as Funcoes[]
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
      <Loading />
    )
  } else {

    return (
      <Container id="comparador">
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