// CRIAR OBJETO
let pessoa = {
    nome   : 'Edson',
    idade  : 40,
    peso   : 83.5,
    altura : 1.75,
    doador : false,
}

let produtos = {
    descricao : [],
    preco : []
}

const carros = {
    marca : ['Ford', 'Fiat', 'GM'],
    modelo : ['Ka', 'Uno', 'Corsa'],
    ano : [1999, 2005, 2010]
}

// como acessar uma propriedade usando .
/*
pessoa.nome
pessoa.idade
pessoa.peso
pessoa.altura
*/

// ACESSAR PROPRIEDADE usando ['']
/*
pessoa['nome']
pessoa['idade']
pessoa['peso']
pessoa['altura']
*/

// OPERAÇÃO IMC = peso / (altura * altura)
let imc = pessoa.peso / (pessoa.altura * pessoa.altura)

// LIMITAR O NUMERO de casas apos a virgula .toFixed()
console.log('IMC: ' + imc.toFixed(2))

// ALTERAR/ATUALIZAR VALOR de propriedade
pessoa.nome = 'Edson Maia'
produtos.descricao = ['Arroz']
produtos.preco = [4.99]

// COLOCAR MAIS VALORES
produtos.descricao = [...produtos.descricao, 'Feijão', 'Trigo']
produtos.preco = [...produtos.preco,           9.99  ,  4.79 ]

// Usando spreed operator em objetos const
carros.marca = [...carros.marca,      'WV']
carros.modelo = [...carros.modelo, 'Fusca']
carros.ano = [...carros.ano,         1979]

/* LINK DA AULA: https://www.youtube.com/watch?v=yFrd7712G3I&list=PLnex8IkmReXxZEXje06kW1uCwm5iC8M_Z&index=5 */