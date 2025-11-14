import {Funcionario} from "./Funcionario.js";
import {Cliente} from "./Cliente.js";

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
