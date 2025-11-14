import { Cliente } from "./Cliente";

export class Cliente  {
  #nome;
  #cpf;
  #dtNascimento;

  constructor(nome, cpf, dtNascimento = "2000/01/01") {
    this.#nome = nome ? nome.toString().toUpperCase() : "NOME NÃO INFORMADO";
    this.#cpf = cpf ? cpf.toString() : "CPF NÃO INFORMADO";
    this.#dtNascimento = dtNascimento;
  }

  get nome() {
    return this.#nome;
  }

  get cpf() {
    return this.#cpf;
  }

  get dtNascimento() {
    return this.#dtNascimento;
  }

  set nome(novoNome) {
    if (!novoNome || novoNome.toString().trim() === "") return null;
    this.#nome = novoNome.toString().toUpperCase();
    return this.#nome;
  }

  set dtNascimento(novaData) {
    if (!novaData || novaData.toString().length !== 10) return null;
    this.#dtNascimento = novaData;
    return this.#dtNascimento;
  }

  toString() {
    return `Nome: ${this.#nome}\nCPF: ${this.#cpf}\nNascimento: ${this.#dtNascimento}`;
  }
}
