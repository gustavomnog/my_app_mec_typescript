import { useState, useEffect } from "react"
import { useParams } from 'react-router-dom';

import Topo from "./Topo/Topo"
import Header from "../Header/Header"
import api from "../../services/api"
import Loading from "../Loading/Loading"
import Orcamento from "./Orcamento/Orcamento"
import valorTotal from "../CalculoTotal/calculoTotal"
import Simulador from "../Simulador/Simulador";
import Comparador from "../Comparador/Comparador";

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

interface ModulosApi {
  CM_COD_MODULO: number,
  CM_NUM_ID: number,
  CM_DESCRICAO: string,
  CM_VAL_MEN: number,
  CM_VAL_TRI: number,
  CM_VAL_SEM: number,
  CM_SEM_2: number,
  CM_VAL_ANU: number,
  CM_ANU_2: number,
  CM_ANU_3: number,
  CM_ANU_4: number,
}

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

const Proposta = () => {
  let { codproposta, codcliente } = useParams()

  const [nome, setNome] = useState<string>("")
  const [validade, setValidade] = useState(new Date())
  const [acessos, setAcessos] = useState(0)
  const [descontoFilial, setDescontoFilial] = useState<string>("")
  const [listaAtual, setListaAtual] = useState<Modulos[]>([])
  const [valoresMec, setValoresMec] = useState<Valores>({} as Valores)
  const [valoresBox, setValoresBox] = useState<Valores>({} as Valores)
  const [totalMecauto, setTotalMecauto] = useState<Valores>({} as Valores)
  const [totalBox, setTotalBox] = useState<Valores>({} as Valores)

  const [carregando, setCarregando] = useState(true)


  useEffect(() => {
    let listaModulos: ModulosApi[]
    let modulosProposta: { CM_COD_MODULO: number }[]

    async function Consultar() {

      await api.get(`/proposta/${codproposta}/${codcliente}`)
        .then(({ data }) => {
          setNome(data.CM_NOME)
          setValidade(new Date(data.CM_DATA_VALIDADE.substring(0, 10) + 'T01:00:00'))
          setAcessos(data.CM_ACESSOS)
          setDescontoFilial(data.CM_DESCONTO_FILIAL)
        })

      await api.get(`/modulos/${codproposta}`)
        .then(({ data }) => listaModulos = data)

      await api.get(`/proposta/modulos/${codproposta}`)
        .then(({ data }) => modulosProposta = data)

      const lista = listaModulos.map(modulo => {
        const selecionado = modulosProposta.find(item => item.CM_COD_MODULO === modulo.CM_COD_MODULO)
        return {
          CODMODULO: modulo.CM_COD_MODULO,
          DESCRICAO: modulo.CM_DESCRICAO,
          ID: modulo.CM_NUM_ID,
          ANU: modulo.CM_VAL_ANU / 100,
          ANU2: modulo.CM_ANU_2 / 100,
          ANU3: modulo.CM_ANU_3 / 100,
          ANU4: modulo.CM_ANU_4 / 100,
          SEM: modulo.CM_VAL_SEM / 100,
          SEM2: modulo.CM_SEM_2 / 100,
          TRI: modulo.CM_VAL_TRI / 100,
          MEN: modulo.CM_VAL_MEN / 100,
          MARC: selecionado ? true : false
        }
      })

      setListaAtual(lista)

      let valoresMecauto: Valores = {} as Valores
      

      let valoresBox: Valores = {} as Valores


      await api.get('/proposta/precosist/22')
        .then(({ data }) => {
          valoresMecauto = data
          setValoresMec(data)
        })

      let valorMecModulos = {
        MEN: valoresMecauto.MEN,
        TRI: valoresMecauto.TRI,
        SEM: valoresMecauto.SEM,
        SEM2: valoresMecauto.SEM2,
        ANU: valoresMecauto.ANU,
        ANU2: valoresMecauto.ANU2,
        ANU3: valoresMecauto.ANU3,
        ANU4: valoresMecauto.ANU4
      }


      await api.get('/proposta/precosist/35')
        .then(({ data }) => {
          valoresBox = data
          setValoresBox(data)
        })

      let valorBoxModulos = {
        MEN: valoresBox.MEN,
        TRI: valoresBox.TRI,
        SEM: valoresBox.SEM,
        SEM2: valoresBox.SEM2,
        ANU: valoresBox.ANU,
        ANU2: valoresBox.ANU2,
        ANU3: valoresBox.ANU3,
        ANU4: valoresBox.ANU4
      }


      const marcados = lista.filter(modulo => modulo.MARC === true)



      marcados.forEach(modulo => {
        let mec: keyof typeof valorMecModulos
        for (mec in valorMecModulos) {
          valorMecModulos[mec] = valorMecModulos[mec] + modulo[mec]
        }
        let box: keyof typeof valorBoxModulos
        for ( box in valorBoxModulos) {
          valorBoxModulos[box] = valorBoxModulos[box] + modulo[box]
        }
      })

       const valorTotalMec = valorTotal(valorMecModulos, descontoFilial, acessos)
       setTotalMecauto(valorTotalMec)

       const valorTotalBox = valorTotal(valorBoxModulos, descontoFilial, acessos)
       setTotalBox(valorTotalBox)

      setCarregando(false)

    }
    Consultar()
  }, [])

  if (carregando) {
    return (
      <>
        <Header />
        <Loading />
      </>
    )
  } else {
    
    return (
      <>
        <Topo nome={nome} validade={validade} />
        <Orcamento
          lista={listaAtual}
          valorTotalMec={totalMecauto}
          valorTotalBox={totalBox}
          acessos={acessos}
        />
        <Simulador
          lista={listaAtual}
          valoresMec={valoresMec}
          valoresBox={valoresBox}
          descontoFilial={descontoFilial}
          acessosProposta={acessos}
        />
        <Comparador />
      </>
    )
  }
}

export default Proposta