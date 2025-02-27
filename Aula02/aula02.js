//  Curso de JS Aula 02 Sintaxe, Variáveis, Constantes, Tipos

document.write('Olá Mundo')
console.log('Olá Mundo')
alert('Olá Mundo')

//comentário em uma linha

/*comentário em
várias linhas*/

let mensagem = "Minha mensagem"   //string
let mensagem2 = 'Minha mensagem'  //string
let meuPeso = 83.5                //number
let minhaAltura = 1.75            //number
let minhaIdade = 40               //number
let ehDoador = false              //boolean
let teste = null                  //null

/* CRIAR CONSTANTES E ATRIBUIR VALOR*/
const PI = 3.1415
const TAXA = 0.5

teste = 'Algum conteúdo'

/* ESCREVER O CONTEUDO DE VARIAVEIS E CONSTANTES */
document.write('<p> Mensagem: ' + mensagem + '</p>')

document.write(`Mensagem2: ${mensagem2}`)

document.write('<p> Peso: ' + meuPeso + '</p>')

document.write(`Altura: ${minhaAltura}`)

document.write('<p> Idade: ' + minhaIdade + '</p>')

document.write(`Doador? ${ehDoador}`)

document.write('<p> Teste: ' + teste + '</p>')

document.write('<p> PI: ' + PI + '</p>')

document.write('<p> TAXA: ' + TAXA + '</p>')

/* LINK DA AULA: https://www.youtube.com/watch?v=qsqeHCVYkMU&list=PLnex8IkmReXxZEXje06kW1uCwm5iC8M_Z&index=2 */