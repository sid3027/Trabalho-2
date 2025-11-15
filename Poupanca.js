import { Conta } from "./Conta.js";

export class Poupanca extends Conta {
    #rendimento;

    constructor(id, titular, saldo, rendimento){
        super(id, titular, saldo)
        this.#rendimento = rendimento;
    }

    get rendimento(){
        return this.#rendimento;
    }

    viraMes(){
        const saldoAtual = this.saldo;
        const rendimentoMes = saldoAtual * this.#rendimento;
        super.depositar(rendimentoMes);
    }
}