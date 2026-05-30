function calculoRankeada (win, loss){
    let rank = wins - loss
    let level = ""

    if (rank < 10){
        level = "Ferro"
    }else if (rank< 10 && rank <= 20){
        level = "Bronze"
    }else if (rank > 20 && rank <= 50){
        level = "Prata"
    }else if (rank > 50 && rank <= 80){
        level = "Ouro"
    }else if (rank > 80 && rank <= 90){
        level = "Diamante"
    }else if (rak > 90 && rank <= 100){
        level = "Lendário"
    }else if (rank >= 101){
        level = "Imortal"
    }else{
        level = "Inválido"
    }
    return "O Herói está no nível " + rank + " e está no nível "+ level    
}

let victories = 300
let defeats = 170

let rankeada = calculoRankeada(victories, defeats)
console.log(rankeada)
