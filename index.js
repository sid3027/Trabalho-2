import { Cliente } from "./Cliente.js";
import { Pessoa } from "./Pessoa.js";
import { Conta } from "./conta.js";
import { ContaCorrente } from "./ContaCorrente.js";
import { Poupanca } from "./Poupanca.js";

const p1 = new Cliente("Ana Silva", "11122233344", "1990/05/10");
const p2 = new Cliente("Bruno Souza", "55566677788", "1992/08/21");
const p3 = new Pessoa("Carlos Pereira", "99988877766");

const clientes = [p1, p2, p3];

const cc1 = new ContaCorrente(p1, 500.0, 200.0);
const cc2 = new ContaCorrente(p2, 0.0, 100.0);
const cp1 = new Poupanca(p1, 1000.0, 5);
const cp2 = new Poupanca(p3, 300.0, 10);

const contas = [cc1, cc2, cp1, cp2];

console.log("=== LISTAGEM DE CONTAS ===");
contas.forEach((c, i) => {
  console.log(`--- Conta ${i+1} ---`);
  console.log(c.toString());
  console.log("");
});

console.log("=== EXECUTANDO viraMes() em todas as contas ===");
contas.forEach(c => c.viraMes());

console.log("=== SALDOS APÓS viraMes() ===");
contas.forEach((c) => {
  console.log(`${c.id} -> Titular: ${c.titular?.nome ?? "SEM TITULAR"} -> Saldo: R$ ${c.saldo.toFixed(2)}`);
});

function buscarContasPorTitular(termo) {
  const termoUpper = termo.toString().toUpperCase();
  return contas.filter(c => {
    const nome = c.titular?.nome?.toString().toUpperCase() ?? "";
    const cpf = c.titular?.cpf?.toString() ?? "";
    return nome.includes(termoUpper) || cpf.includes(termo);
  });
}

console.log("\n=== BUSCAR CONTAS POR 'ANA' ===");
const resultado1 = buscarContasPorTitular("ANA");
resultado1.forEach(c => console.log(c.toString(), "\n"));

console.log("\n=== BUSCAR CONTAS POR CPF '99988877766' ===");
const resultado2 = buscarContasPorTitular("99988877766");
resultado2.forEach(c => console.log(c.toString(), "\n"));
