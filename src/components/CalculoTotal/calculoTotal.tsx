
import { Valores } from "../interfaces/types"

function valorTotal(valorSistema: Valores, descontoFilial: string, acessos: number) {
  let i: keyof typeof valorSistema
  for (i in valorSistema) {
    if (acessos > 0 && acessos <= 5) {
      valorSistema[i] = (valorSistema[i] * (0.1 * (acessos))) + valorSistema[i]
    } else if (acessos >= 6) {
      const cincoPrimeiros = (valorSistema[i] * (0.1 * 5)) + valorSistema[i]
      valorSistema[i] = ((valorSistema[i] * (0.05 * (acessos - 5)))) + cincoPrimeiros
    }

    if (descontoFilial === "S") {
      valorSistema[i] = valorSistema[i] - ((valorSistema[i] * 10) / 100)
    }

  }



  return valorSistema
}


export default valorTotal