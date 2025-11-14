import { Pessoa } from "./Pessoa.js";

export class Cliente extends Pessoa {
  _dtNascimento;

  constructor(nome, cpf, dtNascimento = "2000/01/01") {
    super(nome, cpf);
    this._dtNascimento = dtNascimento;
  }

  get dtNascimento() { return this._dtNascimento; }
  set dtNascimento(novaData) {
    if (!novaData || novaData.toString().length !== 10) return null;
    this._dtNascimento = novaData;
    return this._dtNascimento;
  }

  toString() {
    return `${super.toString()}\nNascimento: ${this._dtNascimento}`;
  }
}
