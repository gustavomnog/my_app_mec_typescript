import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"

import Proposta from "./components/Proposta/Proposta"
import Tabela from "./components/TabelaComparacao/Tabela"
import GlobalStyle from "./globalstyles/GlobalStyles"

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path=":codproposta/:codcliente" element={<Proposta />} />
          <Route path="tabela" element={<Tabela />} />
        </Routes>
        <GlobalStyle />
      </>
    </BrowserRouter>
  )
}

export default App
