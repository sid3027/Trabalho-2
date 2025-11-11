// Classe Cliente
// Representa o titular de uma conta no banco.

export class Cliente {

  // Atributos privados 
  #nome;
  #cpf;
  #dataNascimento;

  // Construtor: usado para criar um novo cliente
  constructor(nome, cpf, dataNascimento) {
    this.#nome = nome.toUpperCase(); 
    this.#cpf = cpf;

    
    if (dataNascimento != undefined && dataNascimento != "") {
      this.#dataNascimento = dataNascimento;
    } else {
      this.#dataNascimento = "2000/01/01";
    }
  }

  
  get nome() {
    return this.#nome;
  }

  
  set nome(novoNome) {
    if (novoNome != "") {
      this.#nome = novoNome.toUpperCase();
    }
  }

  
  get cpf() {
    return this.#cpf;
  }

  
  get dataNascimento() {
    return this.#dataNascimento;
  }

  set dataNascimento(novaData) {
    if (novaData != "" && novaData.length == 10) {
      this.#dataNascimento = novaData;
    }
  }

  // Mostra as informações do cliente em formato de texto
  toString() {
    return "Nome: " + this.#nome +
           "\nCPF: " + this.#cpf +
           "\nData de Nascimento: " + this.#dataNascimento;
  }
}
