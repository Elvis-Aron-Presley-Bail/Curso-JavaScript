// DOM = Document Object Model
//Arvore com elementos desde o Browser, a Janela do Browser, o Documento e cada elemento HTML que formam os conteudos.
/*
navigator
window
  location
  document -> html -> head e body
  history
*/

// PARA MANIPULAR O DOM PRECISAMOS
// indicar qual objeto usar, depois
// chamar um método(função) para
// selecionar ele, seus dados, trazer informações, etc.

// .querySelector()
// selecionar elementos com base na tag, #id ou .class
let titulo = document.querySelector('#titulo')
// console.log(titulo)

// .textContent
// propriedade ou atributo textContent
// serve para acessar ou alterar conteudo de um elemento que foi selecionado
// console.log(titulo.textContent)
// console.log(titulo.innerHTML)

titulo.textContent = 'DOM'
// console.log(titulo.textContent)

// .querySelectorAll()
// selecioanar todos elementos com base na tag, #id ou .class
let testando = document.querySelectorAll('.box')
// console.log(testando)
document.write(testando[0].textContent)
document.write(testando[1].textContent)
document.write(testando[2].textContent)
testando[0].textContent = 'texto qualquer'

// Existem também os métodos
// MAS, PREFIRA USAR O .querySelector()
/*
.getElementByTagName()
.getElementById()
.getElementByClassName
*/

let testeTag = document.getElementsByTagName('div')
//console.log(testeTag)
//document.write(testeTag[0].textContent)
//document.write(testeTag[1].textContent)

let testeId = document.getElementById('titulo')
//console.log(testeId)

let testeClass = document.getElementsByClassName('box')
//console.log(testeClass)
//document.write(testeTag[0].textContent)
//document.write(testeTag[1].textContent)

/* LINK DA AULA: https://www.youtube.com/watch?v=0dBY09OJm04&list=PLnex8IkmReXxZEXje06kW1uCwm5iC8M_Z&index=8 */