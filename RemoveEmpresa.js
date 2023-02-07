let tabela = document.querySelector("tbody")
tabela.addEventListener("contextmenu",function(event){
    event.preventDefault()
    let bloco = event.target;
    let linha = bloco.parentNode;
    linha.classList.add("invisivel")
    setTimeout(function(){
        linha.remove()
    },400)
})
