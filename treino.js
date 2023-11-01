const nome = "Rafaela";

function getEventoAleatorio(){
    let numero = Math.floor(Math.random()*3)
    let esporte = ""
    if (numero === 0) {
        esporte = "Maratona"
    } else if (numero === 1) {
        esporte = "Triathlon"
    } else {
        esporte = "Pentathlon"
    }   
    return esporte
}

function getDiasTreino(esporte){
    let tempo = 0

    if (esporte === "Maratona"){
        tempo = 50
    } else if (esporte === "Triathlon") {
        tempo = 100
    } else {
        tempo = 200
    } 
    return tempo
}

function logEvento(nome, esporte) {
    console.log(`O participante ${nome} participará do evento de ${esporte}`)
}

function logTempo(nome, tempo) {
    console.log(`A pessoa ${nome} treinará por ${tempo}`)
}

esporte = getEventoAleatorio()
tempo = getDiasTreino(esporte)
logEvento(nome, esporte)
logTempo(nome, tempo)