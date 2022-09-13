import { useState } from "react"
import { IoHelpCircleOutline } from "react-icons/io5"

type Props = {
  ajuda: null | string
}

const Ajuda = ({ ajuda }: Props) => {
  const [exibirAjuda, setExibirAjuda] = useState(false)

  const handleShowHelp = () => {
    setExibirAjuda(!exibirAjuda)
  }
  return (
    <>
      {ajuda != null ? <IoHelpCircleOutline onClick={handleShowHelp} className="iconHelp" /> : ""}
      {exibirAjuda && (<span>{ajuda}</span>)}
    </>
  )
}

export default Ajuda