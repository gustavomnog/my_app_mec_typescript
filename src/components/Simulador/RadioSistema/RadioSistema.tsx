import Container from "./styles"

type Props = {
  sistema: string,
  handleCheckSystem: () => void,
}

const RadioSistema = ({ sistema, handleCheckSystem }: Props) => {
  return (
    <Container>
      <label className={sistema === "MECAUTO" ? "containerMecauto" : "containerBox"}>
        <div className="input-wrapper">
          <input type="radio" name="radio" onClick={handleCheckSystem} defaultChecked={sistema === "MECAUTO" ? true : false} />
          <span className="checkmark"></span>
        </div>
        <span className="text">{sistema}</span>
      </label>
    </Container>
  )
}



export default RadioSistema