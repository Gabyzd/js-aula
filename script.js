// Parte 1
console.log("JavaScript carregado!");

//Parte 2
const nomeAluno = "Zuri";
let idadeteste = 20;
const matriculado = true;

console.log(nomeAluno);
console.log(idadeteste);
console.log(matriculado);

console.log(typeof nomeAluno);
console.log(typeof idadeteste);
console.log(typeof matriculado);

//Parte 3
let variavel1 = 60;
let variavel2 = 30;

console.log("soma:", variavel1 + variavel2);
console.log("subtração:", variavel1 - variavel2);
console.log("multiplicação:", variavel1 * variavel2);
console.log("divisão:", variavel1/variavel2);
console.log("resto da divisão:", variavel1 % variavel2);

// O primeiro número é maior que o segundo?
// Sim, já que variavel1 = 60 e variavel2 = 30, desse modo 60 > 30.
console.log("variavel1 é maior que variavel2?", variavel1 > variavel2);

// Eles são estritamente iguais?
// Não já que 60 é diferente de 30, ou seja não pode ser 60 === 30
console.log("variavel1 é estritamente igual a variavel2?", variavel1 === variavel2);

// Parte 4
const n1 = Number(prompt("Digite o primeiro número:"));
const n2 = Number(prompt("Digite o segundo número:"));

console.log("soma:", n1 + n2);
console.log(typeof n1);
console.log(typeof n2);

//Parte 5
//5.1
const idade1 = Number(prompt("Digite sua idade:"));
if (idade1 >= 18){
    console.log("Maior de idade");
} else{
    console.log("Menor de idade");
}

//5.2
const nota = Number(prompt("Digite sua nota:"));
if (nota >= 90){
    console.log("Excelente");
} else if(nota <= 89 && nota >= 70){
    console.log("Aprovado");
}else{
    console.log("Reprovado");
}

//5.3
const num = Number(prompt("Digite um número:"));
if (num % 2 === 0){
    console.log(num,"É um número par");
} else{
    console.log(num,"É um número ímpar");
}

//Parte 6
// erros encontrados no antigo código:
// erro 1 prompt devolve string, faltava converter com Number();
// erro 2 o simbolo de comparação estava incorreto, visto que === é comparação e = é atribuição;
// erro 3 Idade (I maiúsculo) não existe, a variável é idade;
// obs: faltava o ; no primeiro console.log.

const idade = Number(prompt("Idade:"));

 if (idade === 18) {
   console.log("Tem exatamente 18 anos");
 } else {
   console.log("Idade diferente de 18");
 }

 console.log(idade);

 // deesafio final - Situação do aluno
 const nomeestudante = prompt("Digite seu nome:");
 const not1 = Number(prompt("Digite sua primeira nota:"));
 const not2 = Number(prompt("Digite sua segunda nota:"));

 const media = (not1 + not2)/2
 let situacao;

 if (media >= 70){
    situacao = "Aprovado";
 }else{
    situacao = "Reprovado";
 }

console.log(`Aluno: ${nomeestudante} | Média: ${media} | Situação: ${situacao}`);
