export class Funcionario {
  _nome;
  _cpf;
  _salario;
  _dtAdmissao;

  constructor(nome, cpf, salario = 0.0, dtAdmissao = "2000/01/01") {
    this._nome = nome ? nome.toString().toUpperCase() : "NOME NÃO INFORMADO";
    this._cpf = cpf ? cpf.toString() : "CPF NÃO INFORMADO";
    this._salario = salario;
    this._dtAdmissao = dtAdmissao;
  }

  get nome() { return this._nome; }
  get cpf() { return this._cpf; }
  get salario() { return this._salario; }
  get dtAdmissao() { return this._dtAdmissao; }

  set nome(novoNome) {
    if (!novoNome || novoNome.toString().trim() === "") return null;
    this._nome = novoNome.toString().toUpperCase();
    return this._nome;
  }

  set salario(novoSalario) {
    if (isNaN(novoSalario) || novoSalario < 0) return null;
    this._salario = novoSalario;
    return this._salario;
  }

  set dtAdmissao(novaData) {
    if (!novaData || novaData.toString().length !== 10) return null;
    this._dtAdmissao = novaData;
    return this._dtAdmissao;
  }

  toString() {
    return `Nome: ${this._nome}\nCPF: ${this._cpf}\nSalário: R$ ${this._salario.toFixed(2)}\nData de Admissão: ${this._dtAdmissao}`;
  }
}
