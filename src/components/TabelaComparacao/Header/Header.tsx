import { Container, Logo } from './styles'
import logo from '../../Header/logoHeader.svg'

const Header = () => {
  return (
      <Container>
          <Logo src={logo} />
      </Container>
  )
}

export default Header