// EXERCÍCIOS COM JS

// EXERCÍCIO 01
document.write('<h2> Informações </h2>')

let lutador = 'Fedor Vladimirovich Emelianenko'
let nacionalidade = 'Russo'
let idade = 44
let peso = 106
let altura = 1.83

document.write(`Lutador: ${lutador} <br>`)
document.write(`Nacionalidade: ${nacionalidade} <br>`)
document.write('Idade: ' + idade + ' anos <br>')
document.write('Peso: ' + peso + ' Kg <br>')
document.write('Altura: ' + altura + ' m <br>')

// EXERCÍCIO 02
document.write('<h2> Frase do Dia </h2>')

const dia = 10
const mes = 9
const ano = 2021
const frase = 'Seja curioso. Leia tudo. Tente coisas novas. O que as pessoas chamam de inteligência se resume a curiosidade.'
const autor = 'Aaron Swartz'

document.write(`${dia}/${mes}/${ano} <br>`)
document.write(frase + '<br>')
document.write(autor + '<br>')

// EXERCÍCIO 03
document.write('<h2> Array de Meses do Ano </h2>')

let meses = ['Janeiro' , 'Fevereiro' , 'Março']

document.write(meses + ',' + '...')

// EXERCÍCIO 04
document.write('<h2> Objeto Jogo </h2>')

const informaçoes = {
    jogo: 'League Of Legends - LOL',
    desenvolvido: 'Riot Games',
    lancamento : 2009
}

document.write('Jogo: ' + informaçoes.jogo + '<br>')
document.write('Desenvolvido por: ' + informaçoes.desenvolvido + '<br>')
document.write('Lançamento: ' + informaçoes.lancamento)

/* LINK DA AULA: https://www.youtube.com/watch?v=JLoNhPo5wUQ&list=PLnex8IkmReXxZEXje06kW1uCwm5iC8M_Z&index=7 */