class ContaCorrente extends Conta {
    #limite;

    constructor(agencia, numero, titular, limite = 500) {
        super(agencia, numero, titular);
        this.#limite = limite;
    }

    get limite() {
        return this.#limite;
    }

    sacar(valor) {
        if (valor > 0 && valor <= this.saldo + this.#limite) {
            this._alterarSaldo(-valor);
            return true;
        }
        return false;
    }
    viraMes() {
        const tarifaMensal = 20;
        this.sacar(tarifaMensal);
    }
    toString() {
        return (
            "=== Conta Corrente ===\n" +
            super.toString() +
            `\nLimite: R$ ${this.#limite.toFixed(2)}`
        );
    }
}

import { Pessoa } from "./Pessoa.js";
// Teste das classes ContaCorrente e Pessoa : sujestao de uso 
const cliente1 = new Pessoa("Bruno", "11122233344");
const cliente2 = new Pessoa("Ana", "55544433322");

const conta1 = new ContaCorrente("0001", "1234-5", cliente1, 1000);
const conta2 = new ContaCorrente("0001", "5432-1", cliente2, 500);

conta1.depositar(800);
conta2.depositar(300);
conta1.sacar(200);
conta2.transferir(100, conta1);


console.log(conta1.toString());
console.log("---------------------");
console.log(conta2.toString());
console.log("\n--- Após virar o mês ---");
conta1.viraMes();
conta2.viraMes();
console.log(conta1.toString());
console.log("---------------------");
console.log(conta2.toString());
