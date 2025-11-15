export class Conta {
  static qtdContas = 0;

  _id;
  _saldo = 0.0;
  _titular;

  constructor(titular, saldo = 0.0) {
    this._titular = titular;
    this._saldo = saldo < 0 ? 0.0 : saldo;
    Conta.qtdContas++;
    this._id = `${new Date().getFullYear()}${Conta.qtdContas}`;
  }

  static get qtContas() { return Conta.qtdContas; }

  get id() { return this._id; }
  get titular() { return this._titular; }
  set titular(cliente) {
    if (cliente !== undefined) {
      this._titular = cliente;
      return cliente;
    }
    return null;
  }

  get saldo() { return this._saldo; }

  sacar(valor) {
    if (valor > 0 && valor <= this._saldo) {
      this._saldo -= valor;
      return true;
    }
    return false;
  }

  depositar(valor) {
    if (valor > 0) {
      this._saldo += valor;
      return true;
    }
    return false;
  }

  transferir(valor, contaDestino) {
    if (contaDestino instanceof Conta && this.sacar(valor)) {
      contaDestino.depositar(valor);
      return true;
    }
    return false;
  }

  viraMes() {
    // base: nada por padrão
  }

  toString() {
    return `ID: ${this._id}\nTitular: ${this._titular?.nome ?? "SEM TITULAR"}\nSaldo: R$ ${this._saldo.toFixed(2)}`;
  }
}
