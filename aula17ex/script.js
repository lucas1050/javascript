let num = window.document.querySelector('input#txtn')
let list = window.document.querySelector('select#txtl')
let res = window.document.querySelector('div#res')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}
//Adicionar números na lista 
function adicionar() {
    if(isNumero(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('Option')
        item.text = `Valor ${num.value} adicionado`
        list.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}   

function finalizar() {
        if (valores.length == 0) {
            window.alert('Adicione valores antes de finalizar')
        } else { 
            let tot = valores.length
            let maior = valores[0]
            let menor = valores[0]
            let soma = 0
            let media = 0
            //Analise de numero maior e menor
            for(let pos in valores) {
                soma += valores[pos]
                if (valores[pos] > maior)
                    maior = valores[pos]
                if (valores[pos] < menor)
                    menor = valores[pos]
            }
            media = soma / tot
            res.innerHTML = ''
            res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrado</p>`
            res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
            res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
            res.innerHTML += `<p>Somando todos os valores, temos ${soma}</p>`
            res.innerHTML += `<p>A media dos valores digitados é ${media}</p>`
    }
}