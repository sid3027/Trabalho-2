export class Pessoa {
  _nome;
  _cpf;

  constructor(nome, cpf) {
    this._nome = nome ? nome.toString().toUpperCase() : "NOME NÃO INFORMADO";
    this._cpf = cpf ? cpf.toString() : "CPF NÃO INFORMADO";
  }

  get nome() { return this._nome; }
  get cpf() { return this._cpf; }

  set nome(novoNome) {
    if (!novoNome || novoNome.toString().trim() === "") return null;
    this._nome = novoNome.toString().toUpperCase();
    return this._nome;
  }

  set cpf(novoCpf) {
    if (!novoCpf || novoCpf.toString().trim() === "") return null;
    this._cpf = novoCpf.toString();
    return this._cpf;
  }

  toString() {
    return `Nome: ${this._nome}\nCPF: ${this._cpf}`;
  }
}
