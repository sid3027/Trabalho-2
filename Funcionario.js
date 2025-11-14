export class Funcionario {
    #nome;
    #cpf;
    #salario;
    #dtAdmissao;

    constructor(nome, cpf, salario = 0.0, dtAdmissao = "2000/01/01") {
        this.#nome = nome ? nome.toString().toUpperCase() : "NOME NÃO INFORMADO";
        this.#cpf = cpf ? cpf.toString() : "CPF NÃO INFORMADO";
        this.#salario = salario;
        this.#dtAdmissao = dtAdmissao;
    }
    get nome() {
        return this.#nome;
    }
    get cpf() {
        return this.#cpf;
    }
    get salario() {
        return this.#salario;
    }
    get dtAdmissao() {
        return this.#dtAdmissao;
    }
    set nome(novoNome) {
        if (!novoNome || novoNome.toString().trim() === "") return null;
        this.#nome = novoNome.toString().toUpperCase();
        return this.#nome;
    }
    set salario(novoSalario) {
        if (isNaN(novoSalario) || novoSalario < 0) return null;
        this.#salario = novoSalario;
        return this.#salario;
    }
    set dtAdmissao(novaData) {
        if (!novaData || novaData.toString().length !== 10) return null;
        this.#dtAdmissao = novaData;
        return this.#dtAdmissao;
    }
    toString() {
        return `Nome: ${this.#nome}\nCPF: ${this.#cpf}\nSalário: R$ ${this.#salario.toFixed(2)}\nData de Admissão: ${this.#dtAdmissao}`;
    }
}