import { Cliente } from "./Cliente.js";

export class Conta{
    static #qtdContas = 0;
    #id;
    #titular;
    #saldo;

    constructor(id, cliente, saldo = 0.0) {
        this.#id = id;
        this.#titular = cliente;
        this.#saldo = saldo < 0.0 ? 0.0: saldo;
        Conta.#qtdContas++;
    }

    static get qtdContas() {
        return Conta.#qtdContas;
    }

    get id() {
        return this.#id;
    }

    get titular(){
        return this.#titular;
    }

    set titular(cliente) {
        if(cliente!= undefined && cliente instanceof Cliente){
            this.#titular = cliente;
            return cliente;
        }
        return null;
    }

    get saldo() {
        return this.#saldo;
    }

    sacar(valor){
        if(valor <= this.#saldo){
            this.#saldo -= valor;
            return true;
        }
        return false;
    }

    depositar(valor){
        if(valor > 0.00){
            this.#saldo += valor;
            return true;
        }
        return false;
    }

    transferir(valor, contaDestino){
        if(contaDestino instanceof Conta && this.sacar(valor)){
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }

    toString(){
        return ("Nº Conta = " + this.#id +
                "\nTitular = " + this.#titular.toString() +
                "\nSaldo = R$ " + this.#saldo.toFixed(2));
    }

} 