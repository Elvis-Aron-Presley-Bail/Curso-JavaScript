let carros = ['Fusca', 'Brasília', 'Gurgel']

/* FOR = para faça */
/* i = interador, interação ou index */
for (let i = 1 ; i <= 5; i++) {
    document.write(i + ' ')
}

for (let i = 5; i >= 1; i--) {
    document.write(i + ' ')
}

for (let i = 0; i < carros.length; i++)
    document.write(`<li>${carros[i]}</li>`)

let frutas = ['Pera', 'Uva', 'Maçã', 'Banana', 'Melancia']

frutas.forEach(function(fruta, i) {
    document.write(`${i} ${fruta} <br>`)
})

carros.forEach(function(carro) {
    document.write(`${carro} <br>`)
})

/* WHILE enquanto */

// criar variavel de contador fora do laço
let contador = 0

while(contador < frutas.length) {
    console.log(frutas[contador])
    contador++ //contador + 1
}
// aqui o contador esta com o valor 5
console.log(contador)

/* DO WHILE faça enquanto */

// criar variavel de contador fora do laço
let interador = 0

do {
    console.log(carros[interador])
    interador++ // contador + 1
} while(interador < carros.length)

// aqui o interador esta com o valor 3
console.log(interador)

/* LINK DA AULA: https://www.youtube.com/watch?v=GRKPbXw5I5s&list=PLnex8IkmReXxZEXje06kW1uCwm5iC8M_Z&index=13 */