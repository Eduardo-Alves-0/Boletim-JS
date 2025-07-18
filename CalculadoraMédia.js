let nomeAluno = prompt("Qual é o seu nome:");

let nota1 = Number(prompt("Qual é a sua primeira nota:"));
let nota2 = Number(prompt("Qual é a sua segunda nota:"));
let nota3 = Number(prompt("Qual é a sua terceira nota:"));
let nota4 = Number(prompt("Qual é a sua quarta nota:"));

let media = (nota1 + nota2 + nota3 + nota4) / 4;

console.log("Aluno:", nomeAluno);
console.log("Média:", media.toFixed(2));

if (media >= 7) {
    console.log("Situação: Aprovado ✅");
} else if (media >= 4) {
    console.log("Situação: Recuperação ⚠️");
} else {
    console.log("Situação: Reprovado ❌");
}
