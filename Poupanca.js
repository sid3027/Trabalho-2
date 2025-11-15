import { Conta } from "./conta.js";

export class Poupanca extends Conta {
  static qtdContasPoupanca = 0;
  _aniversario = 1;

  constructor(titular, saldo = 0.0, aniversario = 1) {
    super(titular, saldo);
    this._aniversario = (aniversario >= 1 && aniversario <= 31) ? aniversario : 1;
    Poupanca.qtdContasPoupanca++;
  }

  static get qtContasPoupanca() { return Poupanca.qtdContasPoupanca; }

  get aniversarioConta() { return this._aniversario; }
  set aniversarioConta(novoAniversario) {
    if (novoAniversario >= 1 && novoAniversario <= 31) {
      this._aniversario = novoAniversario;
      return this._aniversario;
    }
    return null;
  }

  viraMes() {
    const taxaRendimento = 0.005; // 0.5% ao mês
    if (this._saldo > 0) {
      this._saldo += this._saldo * taxaRendimento;
    }
  }

  toString() {
    let info = `${super.toString()}\nAniversário da Conta: ${this._aniversario}`;
    if (this._saldo === 0) info += `\nSaldo zerado.`;
    else info += `\nConta com saldo ${this._saldo < 0 ? "negativo" : "positivo"}.`;
    return info;
  }
}
