var hamburguer = document.querySelector(".hamburguer")
hamburguer.addEventListener("click",function(){
    var container = document.querySelector(".container")
    container.classList.toggle('show-menu')
})
document.querySelector("#qtde").addEventListener("change",atualizarpreco)
document.querySelector("#js").addEventListener("change",atualizarpreco)
document.querySelector("#layout-sim").addEventListener("change",atualizarpreco)
document.querySelector("#layout-nao").addEventListener("change",atualizarpreco)
document.querySelector("#prazo").addEventListener("change",function (){
    document.querySelector("label")
    const prazo = document.querySelector("#prazo").value
    document.querySelector("label[for=prazo]").innerHTML = `Prazo: ${prazo} semanas`
    atualizarpreco()
})
function atualizarpreco(){
    const qtde = document.querySelector("#qtde").value
    let preco = qtde * 100;
    const temJS = document.querySelector("#js").checked
    const incluiLayout = document.querySelector("#layout-sim").checked
    const prazo = document.querySelector("#prazo").value
    if (temJS) preco *= 1.1
    if (incluiLayout) preco = preco + 500
    let taxaUrgencia = 1 - prazo*0.1
    preco *= 1 + taxaUrgencia 
    document.querySelector("#preço").innerHTML = `R$ ${preco.toFixed(2)}`
}