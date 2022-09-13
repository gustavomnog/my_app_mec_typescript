import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"

import { Container } from "./styles"

type Props = {
  handleOpenSimulator: () => void, 
  exibir: boolean,
}

const Button = ({ handleOpenSimulator, exibir }: Props) => {


  return (
    <Container>
      <button onClick={handleOpenSimulator}>Faça uma simulação
        {exibir ? <IoChevronUpOutline className="icon" /> : <IoChevronDownOutline className="icon" />}
      </button>
    </Container>
  )
}

export default Button