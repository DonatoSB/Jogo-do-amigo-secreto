//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
function adicionarAmigo(){
let inputAmigo=document.getElementById("amigo");
let nomeAmigo=inputAmigo.value.trim();
if(!nomeAmigo){
    alert("Por favor digite o nome do(a) amigo(a)!");
}else if(amigos.includes(nomeAmigo)){ 
    alert ("Este nome já está na lista do sorteio!");
    return
}else{ amigos.push(nomeAmigo)}
atualizarListaAmigos();
inputAmigo.value="";
}
atualizarListaAmigos();
function atualizarListaAmigos(){
    let listaAmigos=document.getElementById("listaAmigos");
    listaAmigos.innerHTML="";
    
    for(let i=0;i<amigos.length;i++){
        let item=document.createElement("li");
        item.textContent=amigos[i];
        listaAmigos.appendChild(item);
    }
}

function sortearAmigo(){
    if(amigos.length<3){
        alert("Adicione mais amigos para sortear!")
        return
    }else{
    let amigoSorteado=amigos[Math.floor(Math.random()*amigos.length)];
    let resultado=document.getElementById("resultado");
    resultado.textContent = `O(A) amigo(a) sorteado(a) é: ${amigoSorteado}!🎉`;

       
}
}
   
reiniciarSorteio();
function reiniciarSorteio(){
    let resultado=document.getElementById("resultado");
    resultado.textContent="";
    amigos=[];
    atualizarListaAmigos();
    alert("Novo sorteio!");
}