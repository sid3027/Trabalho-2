import {Funcionario} from "./Funcionario.js";
import {Cliente} from "./Cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { Poupanca } from "./Poupanca.js";

let func = new Funcionario("12345", "Rivaldo", "123.456.789-12", "01/01/2001", 1200.00);
//Executando no debug, observe como funciona o método constructor da classe Funcionario

console.log (func);

if(func.nome == "Pedro"){
    console.log ("Pedro é o funcionário!");
} else {
    console.log("O funcionário não é o Pedro!");
}

func.nome = "Maradona";
//Perceba com o debug, que a instrução acima executa o método set nome(...) da superclasse Pessoa.

console.log("Dados do Funcionario:\n" + func);//("Dados do Funcionario:\n" + func.toString());
//Observe com o debug, que a instrução acima executa o método toString() da subclasse Funcionario,
//que sobrescreve (override) o método de mesmo nome da superclasse Pessoa

let cli1 = new Cliente("Roberto Carlos", "987.654.321-00", "02/02/2002");
let cli2 = new Cliente("Zico", "654.321.987-11", "03/03/2003", 500, -500.0, "VIP");

let vetPessoas = [func, cli1, cli2];

console.log("\nNomes das Pessoas:\n");
vetPessoas.forEach( (objPessoa) => {
    console.log(objPessoa.toString());
    //objPessoa.categoria = "VIP";
    //console.log(objPessoa.categoria + " - " + objPessoa.constructor.name);
});

console.log(vetPessoas[0]);

let c1 = new Cliente("Jon", "111.222.333-44", "04/11/2004", 20, 50.0, "VIP");
let c2 = new Cliente("Daenerys", "222.333.444-55", "01/05/2000",15, 40.0, "PCD");
let c3 = new Cliente("Arya", "333.444.555-66", "17/08/1998", 33,);
let c4 = new Cliente("Sansa", "444.555.666-77", "20/04/1990", 10, 120.0, "VIP");
let c5 = new Cliente("Cersei", "555.666.777-88", "09/07/1984", 25, 70.0, "COMUM");
let c6 = new Cliente("Drogo", "666.777.888-99", "23/10/2010", 60, 55.0, "COMUM");
let c7 = new Cliente("Bran", "777.888.999-00", "15/12/2001", 100);
let c8 = new Cliente("Tyrion", "888.999.000-11", "22/02/2002", 46, 30.0, "COMUM");
let c9 = new Cliente("Hodor", "999.000.111-22", "17/06/1988", 12, 90.0, "PCD");
let c10 = new Cliente("Jorah", "000.111.222-33", "26/09/1977", 70, 99.3, "VIP");

let vetClientes = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10];
console.log(vetClientes);

let cc1 = new ContaCorrente(101, c1, 500, 10, c1.limiteCredito, 0.02);
let cc2 = new ContaCorrente(102, c1, 1500, 10, c1.limiteCredito, 0.02);
let cc3 = new ContaCorrente(103, c2, 800, 10, c2.limiteCredito, 0.02);
let cc4 = new ContaCorrente(104, c4, 2000, 10, c4.limiteCredito, 0.02);
let cc5 = new ContaCorrente(105, c5, 1000, 10, c5.limiteCredito, 0.02);
let cc6 = new ContaCorrente(106, c10, 2500, 10, c10.limiteCredito, 0.02);
let pp1 = new Poupanca(201, c7, 1200, 0.005);
let pp2 = new Poupanca(202, c8, 300, 0.005);
let pp3 = new Poupanca(203, c9, 2000, 0.005);
let pp4 = new Poupanca(204, c2, 150, 0.005);

let vetContas = [cc1, cc2, cc3, cc4, cc5, cc6,pp1, pp2, pp3, pp4];
console.log(vetContas);

for(let Conta of vetContas){
    console.log(Conta.toString());
}

for (let Conta of vetContas) {
    Conta.viraMes();
}

console.log("\n=== SALDOS APÓS VIRADA DO MÊS ===");

for (let Conta of vetContas) {
    console.log(Conta.toString());
}

function pesquisarContas(vetor, termo) {
    if (!termo) return [];
    termo = termo.toLowerCase();

    return vetor.filter(Conta => {
        const titular = Conta.titular;
        if (!titular) return false;

        const nome = (titular.nome || "").toLowerCase();
        const cpf = (titular.cpf || "").toLowerCase();

        return nome.includes(termo) || cpf.includes(termo);
    });
}

let achadas = pesquisarContas(vetContas, "JON");    

if (achadas.length == 0) {
    console.log("Este cliente não possui conta!");
} else {
    achadas.forEach(Conta => {
        console.log("=== CONTA DO CLIENTE ===")
        console.log(Conta.toString());
    });
}

