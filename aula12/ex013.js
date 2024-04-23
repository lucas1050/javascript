var agora = new Date()
var diaSem = agora.getDate()
console.log(diaSem)

switch(diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1: {
        console.log('Segunda')
        break
    }
    case 2: {
        console.log('terça')
        break
    }
    case 3: {
        console.log('quarta')
        break   
    }
    case 4: {
        console.log('quinta')
        break   
    }
    case 5: {
        console.log('sexta')
        break   
    }
    case 6: {
        console.log('sabado')   
        break
    }

    default:
        console.log('[ERRO] Dia inválido')
        break
}