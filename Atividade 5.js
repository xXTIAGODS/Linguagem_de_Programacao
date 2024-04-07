const lista = [5,10,15,20,25]

function valoresMaioresQueMedia(lista) {
    const media = lista.reduce((acu, ele) => acu + ele, 0) / lista.length
    return lista.filter(item => item > media)
}

function menorValor(lista) {
    return Math.min(...lista)
}

function somaDosItens(lista) {
    return lista.reduce((acu, ele) => acu + ele, 0)
}

function valoresMenoresQue20(lista) {
    return lista.filter(item => item < 20)
}

function primeiroEUltimo(lista) {
    const primeiro = lista[0]
    const ultimo = lista[lista.length - 1]
    return [primeiro, ultimo]
}

console.log("Valores maiores que a média:", valoresMaioresQueMedia(lista))
console.log("Menor valor da lista:", menorValor(lista))
console.log("Soma dos itens da lista:", somaDosItens(lista))
console.log("Valores menores que 20:", valoresMenoresQue20(lista))
console.log("Primeiro e último valor da lista:", primeiroEUltimo(lista))