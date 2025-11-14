import { Cliente } from "./Cliente";
import { Conta } from "./Conta";
import { ContaCorrente } from "./ContaCorrente";

export class ContaCorrente extends Conta {
    static #qtdContasCorrente = 0;
    #id;
    #saldo = 0.0;
    #titular;
    #limiteContaCorrente = 0.0;
    #viradaMes = 0;

    constructor(cliente, saldo = 0.0, limite = 0.0) {
        this.#titular = cliente;
        this.#saldo = saldo < 0.0 ? 0.0 : saldo;
        this.#limiteContaCorrente = limite < 0.0 ? 0.0 : limite;
        ContaCorrente.#qtdContasCorrente++;
        this.#id = "" + new Date().getFullYear() + ContaCorrente.#qtdContasCorrente;
    }
    get qtContasCorrente() {
        return ContaCorrente.#qtdContasCorrente;
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
    get limiteContaCorrente() {
        return this.#limiteContaCorrente;
    }
    set limiteContaCorrente(novoLimite) {
        if (novoLimite >= 0.0) {
            this.#limiteContaCorrente = novoLimite;
            return this.#limiteContaCorrente;
        }
        return null;
    }
      sacar(valor) {
        if (valor <= 0) {
            return false;
        }

        if (valor <= this.saldo) {
            this._saldo -= valor;
            return true;
        }

        return false;
    }

    depositar(valor) {
        if (valor <= 0) {
            return false;
        }

        this._saldo += valor;
        return true;
    }
    transferir(valor, contaDestino) {
        if (contaDestino instanceof Conta && this.sacar(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }
    aplicarJuros() {
        const taxaJuros = 0.10;
        if (this.#saldo < 0) {
            this.#saldo -= this.#saldo * taxaJuros;
        }
        this.#viradaMes++;
    }
    toString() {
        let info = `ID: ${this.#id}\nTitular: ${this.#titular.nome}\nSaldo: R$ ${this.#saldo.toFixed(2)}\nLimite Conta Corrente: R$ ${this.#limiteContaCorrente.toFixed(2)}`;

        if (this.#saldo < 0) {
            info += `\n Atenção: Conta com saldo negativo!`;
        } else if (this.#saldo === 0) {
            info += `\n Saldo zerado.`;
        } else {
            info += `\n Conta com saldo positivo.`;
        }

        return info;
    }

}