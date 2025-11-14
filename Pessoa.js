export class Pessoa {   
    #nome;  
    #cpf;      

    constructor(nome, cpf) {
        this.#nome = nome ? nome.toString().toUpperCase() : "NOME NÃO INFORMADO";
        this.#cpf = cpf ? cpf.toString() : "CPF NÃO INFORMADO";
    }
    get nome() {
        return this.#nome;
    }
    get cpf() {
        return this.#cpf;
    }
    set nome(novoNome) {
        if (!novoNome || novoNome.toString().trim() === "") return null;
        this.#nome = novoNome.toString().toUpperCase();
        return this.#nome;
    }
    set cpf(novoCpf) {
        if (!novoCpf || novoCpf.toString().trim() === "") return null;
        this.#cpf = novoCpf.toString();
        return this.#cpf;
    }
    toString() {
        return `Nome: ${this.#nome}\nCPF: ${this.#cpf}`;
    }
}