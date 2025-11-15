import { Poupança } from "./Poupança.js";

export class Poupança extends Conta {
    #aniversario;   
    constructor(agencia, numero, titular, aniversario) {
        super(agencia, numero, titular);
        this.#aniversario = aniversario;
    }   
    get aniversario() {
        return this.#aniversario;
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this._alterarSaldo(-valor);
            return true;
        }   
        return false;
    }
    viraMes() {
        const taxaRendimento = 0.005;
        const rendimento = this.saldo * taxaRendimento;
        this._alterarSaldo(rendimento);
    }
    toString() {
        return (
            "=== Conta Poupança ===\n" +
            super.toString() +
            `\nAniversário: ${this.#aniversario}`
        );
    }   
}
