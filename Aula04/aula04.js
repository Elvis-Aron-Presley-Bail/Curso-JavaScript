let produtos = ['Arroz', 'Feijão', 'Leite']
var codigos = Array(10, 20, 30)
let meses = ['Jan', 'Fev', 'Mar', 'Abr']
meses[0] = 'Janeiro'

// ADICIONAR no final push = empurre
produtos.push('Açúcar', 'Trigo')
codigos.push(40, 50, 60 ,70)
meses.push('Mai', 'Jun', 'Ago' , '07')

// REMOVER ultimo elemento pop = estourar
produtos.pop()
codigos.pop()
meses.pop()
meses.pop()

// ADICIONAR no inicio unshift
produtos.unshift('Uva', 'Maçã')

// REMOVER do inicio shift
produtos.shift()

// REMOVER de uma posicao especifica splice
// splice = emendar
// EX: posicao inicial(1), quantos remover a partir do 1(3)
codigos.splice(1, 3)

// COPIAR array slice = fatiar porção
// posicao inicial, quantos copiar
let meses1 = meses.slice()
let meses2 = meses.slice(0, 3)

// VER TAMANHO DO ARRAY length = comprimento
// meses.length
// meses1.length
// meses2.length

// spreed operator ...
let teste = [...produtos, 'Ovo', 'Pera']

/* LINK DA AULA: https://www.youtube.com/watch?v=XisY6rpfbiw&list=PLnex8IkmReXxZEXje06kW1uCwm5iC8M_Z&index=4 */