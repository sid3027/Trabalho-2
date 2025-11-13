import { Conta } from "./Conta";

export class ContaCorrente extends Conta{
    #tarifa;
    #limiteCredito;
    #juros;
    #saldoDevedor;

    constructor(id, titular, saldo, tarifa, limiteCredito, juros, saldoDevedor){
        super(id, titular, saldo);
        this.#tarifa = tarifa;
        this.#limiteCredito = limiteCredito;
        this.#juros = juros;
        this.#saldoDevedor = 0;
    }

    get tarifa(){
        return this.#tarifa;
    }

    get limiteCredito(){
        return this.#limiteCredito;
    }

    get juros(){
        return this.#juros;
    }

    get saldoDevedor(){
        return this.#saldoDevedor;
    }

    sacar(valor){
        if(valor <= (super.saldo + this.#limiteCredito - this.#saldoDevedor)){
            if(!super.sacar(valor)){
                valor -= super.saldo;
                super.sacar(super.saldo);
                this.#saldoDevedor += valor;
            }
            return true;
        }
        return false; 
    }

    depositar(valor){
        if(this.#saldoDevedor > 0){
            valor -= this.#saldoDevedor;
            valor += saldo;
        }
    }
}