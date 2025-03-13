let aviso = document.querySelector('#aviso')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

// selecionar caixas de texto por id
let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')
let cxMedia = document.querySelector('#media')
let cxSituacao = document.querySelector('#situacao')

// CALCULAR MEDIA
function calcularMedia(n1, n2) {
    return (n1 + n2) / 2
}

// DEFINIR SITUACAO FINAL COM BASE NA MEDIA
function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''

    if (mediaFinal >= 7) {
        situacaoFinal = 'Aprovado(a)'
    } else if (mediaFinal <= 3) {
        situacaoFinal = 'Reprovado(a)'
    } else {
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}

// FORMATAR A CAIXA DE SITUACAO FINAL
function formatarSituacao(situacaoFinal) {
    switch(situacaoFinal) {

        case 'Aprovado(a)':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('aprovado')
            break

        case 'Reprovado(a)':
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.remove('recuperacao')
            cxSituacao.classList.add('reprovado')
            break

        case 'Recuperação':
            cxSituacao.classList.remove('reprovado')
            cxSituacao.classList.remove('aprovado')
            cxSituacao.classList.add('recuperacao')
            break

        default:
            console.log('Situacao indefinida')
    }
}

// VALIDAR E GERAR FLASH MESSAGE
function validarNumero(numero) {
    let num1 = cxNota1.value
    let num2 = cxNota2.value
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset() // limpar form
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('alerta')
        setTimeout(function() {
            aviso.textContent = ''
            aviso.classList.remove('alerta')
        }, 2000)
    }
}

btnCalcular.addEventListener('click', function(e) {
// pegar o valor que está dentro das caixas
// usar metodo parseFloat para converter string para float (ter certeza que é numero)

    let nota1 = parseFloat(cxNota1.value)
    let nota2 = parseFloat(cxNota2.value)
    let media = calcularMedia(nota1, nota2)

    if(isNaN(media) || media < 0){
        console.log('Não é um número')
        cxSituacao.value = ''
    } else {
        cxMedia.value = parseFloat(media)
        cxSituacao.value = situacaoFinal(media)
        formatarSituacao(situacaoFinal(media))
    }

    e.preventDefault()
})

// APOS LIMPAR TIRAR AS CLASS DA CX SITUACAO
btnLimpar.addEventListener('click', () => {
    cxSituacao.classList.remove('aprovado')
    cxSituacao.classList.remove('reprovado')
    cxSituacao.classList.remove('recuperacao')
})

/* LINK DA AULA: https://www.youtube.com/watch?v=tImS42-v-fw&list=PLnex8IkmReXxZEXje06kW1uCwm5iC8M_Z&index=15 */