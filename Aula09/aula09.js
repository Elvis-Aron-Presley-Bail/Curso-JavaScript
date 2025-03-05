let titulo = document.querySelector('h1')
titulo.textContent = 'Aula 09 Manipular CSS'
//titulo.innerHTML = 'Aula 09 Manipular CSS'
let imagem = document.querySelector('#foto')
imagem.setAttribute('src', './pride-fc.jpg')
imagem.setAttribute('width', '250px')

/* MANIPULAR CSS */
//document.querySelector('h1').style.color = 'red'
titulo.style.color = 'red'
titulo.style.backgroundColor = '#000'
titulo.style.borderBottom = '2px solid red'
titulo.style.padding = '0.625rem'
titulo.style.borderRadius = '5px'

let box = document.querySelectorAll('.box')
box[0].setAttribute('class', 'escura')
//box[0].removeAttribute('class')

////////// MODOS DE COR //////////
let tela = document.querySelector('main')

let btnDark = document.querySelector('#btdark')

let btnLight = document.querySelector('#btlight')

btnDark.addEventListener('click', modoDark)
btnLight.addEventListener('click', modoLight)

function modoDark() {
    //event.preventDefault()
    console.log('modo dark')
    tela.classList.add('dark')
    tela.classList.remove('light')
}

function modoLight() {
    //event.preventDefault()
    console.log('modo light')
    tela.classList.remove('dark')
    tela.classList.add('light')
}

/* LINK DA AULA: https://www.youtube.com/watch?v=ZYqrSpi845U&list=PLnex8IkmReXxZEXje06kW1uCwm5iC8M_Z&index=9 */