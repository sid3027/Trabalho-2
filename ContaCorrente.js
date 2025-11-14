import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta {
  static qtdContasCorrente = 0;
  _limite = 0.0;
  _viradaMes = 0;

  constructor(titular, saldo = 0.0, limite = 0.0) {
    super(titular, saldo);
    this._limite = limite < 0 ? 0.0 : limite;
    ContaCorrente.qtdContasCorrente++;
  }

  static get qtContasCorrente() { return ContaCorrente.qtdContasCorrente; }
  get limite() { return this._limite; }
  set limite(novoLimite) {
    if (novoLimite >= 0) {
      this._limite = novoLimite;
      return this._limite;
    }
    return null;
  }

  sacar(valor) {
    if (valor <= 0) return false;
    if (valor <= this._saldo + this._limite) {
      this._saldo -= valor;
      return true;
    }
    return false;
  }

  viraMes() {
    const taxaJuros = 0.10; // 10% sobre dívida
    if (this._saldo < 0) {
      this._saldo -= Math.abs(this._saldo) * taxaJuros;
    }
    this._viradaMes++;
  }

  toString() {
    let info = `${super.toString()}\nLimite: R$ ${this._limite.toFixed(2)}`;
    if (this._saldo < 0) info += `\nAtenção: Conta com saldo negativo!`;
    else if (this._saldo === 0) info += `\nSaldo zerado.`;
    else info += `\nConta com saldo positivo.`;
    return info;
  }
}
