let nome = "Picachu das galáxias"
let xp = 5670

if (xp < 1000){
    console.log("O Herói "+ nome + " está no nível Ferro")
}else if (xp >= 1000 && xp <2001){
    console.log("O Herói "+ nome + " está no nível Bronze")
}else if (xp > 2000 && xp < 5001){
    console.log("O Herói "+ nome + " está no nível Prata")
}else if (xp > 5000 && xp < 7001){
    console.log("O Herói "+ nome + " está no nível Ouro")
}else if (xp > 7000 && xp < 8001){
    console.log("O Herói " + nome + " está no nível Platina")
}else if (xp > 8000 && xp < 9001){
    console.log("O Herói " + nome + " está no nível Ascendente")
}else if (xp > 9000 && xp < 10001){
    console.log("O Herói " + nome + " está no nível Imortal")
}else if (xp > 10000){
    console.log("O Herói " + nome + " está no nível Radiante")
}else{
    console.log("Insira um valor válido para o XP")
}


