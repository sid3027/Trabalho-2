export class Pessoa {      
    #nome;
    #cpf;
    #dataNascimento;

    constructor(nome, cpf, dataNascimento) {
        this.#nome = nome.toUpperCase();
        this.#cpf = cpf;
        this.#dataNascimento = dataNascimento || "2000/01/01";
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome) {
        if (novoNome) {
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
        if (novaData && novaData.length === 10) {
            this.#dataNascimento = novaData;
        }
    }

    toString() {
        return `Nome: ${this.#nome}\nCPF: ${this.#cpf}\nData de Nascimento: ${this.#dataNascimento}`;
    }
} 

