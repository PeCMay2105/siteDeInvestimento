let tabela = document.querySelector("tbody")
//let id = document.getAttribute("data-id")
tabela.addEventListener("contextmenu",function(event){
    event.preventDefault()
    let bloco = event.target;
    let id = bloco.dataset.id
    console.log(id)
    let linha = bloco.parentNode;
    
    arrayEmpresa.splice(id-1,1)
    let string = JSON.stringify(arrayEmpresa)
    localStorage.setItem('Empresa Adicionada',string)


    linha.classList.add("invisivel")
    setTimeout(function() {linha.remove()}, 400)


})
