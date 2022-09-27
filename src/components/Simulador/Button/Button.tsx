import { IoChevronDownOutline, IoChevronUpOutline } from "react-icons/io5"
import { Link } from "react-scroll"

import { Container } from "./styles"

type Props = {
  handleOpenSimulator: () => void,
  exibir: boolean,
}

const Button = ({ handleOpenSimulator, exibir }: Props) => {


  return (
    <Container>
      <Link className="link" to="simulador" spy={true} smooth={true} offset={0} duration={500}>
        <button id="simulador" onClick={handleOpenSimulator}>Faça uma simulação
          {exibir ? <IoChevronUpOutline className="icon" /> : <IoChevronDownOutline className="icon" />}
        </button>
      </Link>
    </Container>
  )
}

export default Button