import { Cliente } from "./Cliente";

export class Conta{
    static #qtdContas = 0;
    #id;
    #saldo;
    #titular;

    constructor(cliente, saldo = 0.0) {
        this.#titular = cliente;
        this.#saldo = saldo < 0.0 ? 0.0: saldo;
        Conta.#qtdContas++;
        this.#id = "" + new Date().getFullYear();
                      + Conta.#qtdContas;
    }

    static get qtContas() {
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
                "\Titular = " + this.#titular.toString() +
                "\Saldo = R$ " + this.#saldo.toFixed(2)
        );
    }

} 