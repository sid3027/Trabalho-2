import { Cliente } from "./Cliente";
import { Conta } from "./Conta";

export class Poupanca extends Conta {
    static #qtdContasPoupanca = 0;
    #id;
    #saldo = 0.0;
    #titular;
    #aniversarioConta = 0;

    constructor(cliente, saldo = 0.0) {
        this.#titular = cliente;
        this.#saldo = saldo < 0.0 ? 0.0 : saldo;
        Poupanca.#qtdContasPoupanca++;
        this.#id = "" + new Date().getFullYear() + Poupanca.#qtdContasPoupanca;
    }
    get qtContasPoupanca() {
        return Poupanca.#qtdContasPoupanca;
    }
    get id() {
        return this.#id;
    }
    get titular() {
        return this.#titular;
    }
    set titular(cliente) {
        if (cliente != undefined && cliente instanceof Cliente) {
            this.#titular = cliente;
            return cliente;
        }
        return null;
    }
    get saldo() {
        return this.#saldo;
    }
    get aniversarioConta() {
        return this.#aniversarioConta;
    }
    set aniversarioConta(novoAniversario) {
        if (novoAniversario >= 1 && novoAniversario <= 31) {
            this.#aniversarioConta = novoAniversario;
            return this.#aniversarioConta;
        }
        return null;
    }
    sacar(valor) {
        if (valor <= this.#saldo) {
            this.#saldo -= valor;
            return true;
        }
        return false;
    }
    depositar(valor) {
        if (valor > 0.00) {
            this.#saldo += valor;
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
    toString() {
        let info = `ID: ${this.#id}\nTitular: ${this.#titular.nome}\nSaldo: R$ ${this.#saldo.toFixed(2)}\nAniversário da Conta: ${this.#aniversarioConta}`;
        if (this.#saldo === 0) {
            info += `\n Saldo zerado.`;
        } else {
            info += `\n Conta com saldo positivo.`;
        }
        return info;
    }
}