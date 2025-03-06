function carregou() {
    console.log('Página carregada com sucesso!')
}

function rolouPagina() {
    console.log('Página rolando')
}

function focou() {
    console.log('Foco no título')
}

function focoNoCampo() {
    console.log('Foco no campo de texto')
}

function semFocoNoCampo() {
    console.log('Saiu o foco no campo de texto')
}

let letras = document.querySelector('input[type=text]')
function avisarQueTeclou() {
    let numLetras = 1
    console.log('Está teclando ' + (letras.value.length + numLetras))
}

let botao1 = document.querySelector('#btn1')
let botao2 = document.querySelector('#btn2')
let botaoEnviar = document.querySelector('#btn3')

// mouseover a seta do mouse esta no elemento
botao1.addEventListener('mouseover' , function () {
    console.log('Foco no botão 1')
})

// focusout ou blur quando sai o foco pressionado tab
botao2.addEventListener('blur' , function() {
    console.log('Foco no botão 2')
})

// 1 click do mouse
botaoEnviar.addEventListener('click' , function (event) {
    event.preventDefault() // não executa o reload da pagina, que é um evento padrao do 'type=submit'
    console.log('Clicou no botão Enviar')
})

// onload = executado quando a página carrega
// onscroll = executado quando a página é rolada
// onmouseover = executado quando o mouse passa por cima do elemento
// onfocus = executado quando está focado na caixa de texto
// onfocusout = executado quando sai o foco da caixa de texto
// onkeypress = executado quando pessiona alguma tecla do teclado

/* LINK DA AULA: https://www.youtube.com/watch?v=i5CbnQQGZAU&list=PLnex8IkmReXxZEXje06kW1uCwm5iC8M_Z&index=11 */