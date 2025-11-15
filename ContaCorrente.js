import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  #tarifa;
  #limiteCredito;
  #juros;
  #saldoDevedor;

  constructor(id, titular, saldo, tarifa, limiteCredito, juros){
    super(id, titular, saldo);
    this.#tarifa = tarifa;
    this.#limiteCredito = limiteCredito;
    this.#juros = juros;
    this.#saldoDevedor = 0;
  }

  get tarifa(){ 
    return this.#tarifa; 
  }

  get limiteCredito(){
    return this.#limiteCredito; 
  }

  get juros(){ 
    return this.#juros; 
  }

  get saldoDevedor(){ 
    return this.#saldoDevedor; 
  }

  sacar(valor) {
    const saldoAtual = this.saldo;

    if (valor <= (saldoAtual + this.#limiteCredito - this.#saldoDevedor)){
      if (valor <= saldoAtual) {
        return super.sacar(valor);
      }
      const diferenca = valor - saldoAtual;
      super.sacar(saldoAtual);
      this.#saldoDevedor += diferenca;

      return true;
    }
    return false;
  }

  depositar(valor) {
    if (this.#saldoDevedor > 0) {
      if (valor >= this.#saldoDevedor) {
        valor -= this.#saldoDevedor;
        this.#saldoDevedor = 0;
      } else {
        this.#saldoDevedor -= valor;
        return;
      }
    }

    super.depositar(valor);
  }

  limiteDisponivel() {
    return this.#limiteCredito - this.#saldoDevedor;
  }

  viraMes() {
    if (!this.sacar(this.#tarifa)) {
        this.#saldoDevedor += this.#tarifa;
    }

    if (this.#saldoDevedor > 0) {
      this.#saldoDevedor *= (1 + this.#juros);
    }
  }
}
