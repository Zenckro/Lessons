//Objects

const pessoa1 = {
    nome: `Emanuel`,
   sobrenome: `Azevedo`,
    idade: `15`
}

//Factory function creating person

//arguments
function criaPessoa (nome, sobrenome, idade) {
    return {nome, sobrenome, idade};
}
//parameters
const pessoa01 = criaPessoa(`Emanuel`,`Oliveira`,`15`)

console.log(pessoa01.nome, pessoa01.sobrenome)
