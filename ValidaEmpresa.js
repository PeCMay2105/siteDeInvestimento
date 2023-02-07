//valida campos do formulario
function validaForm(novaEmpresa){
   let erros = []
    let nome=novaEmpresa.nome;
    let lucro=novaEmpresa.lucro;
    let preco=novaEmpresa.preco;
    let numero=novaEmpresa.numero
    if(nome.length==0||lucro.length==0||preco.length==0||numero.length==0){
        erros.push("Algo no formulário não foi preenchido")
    }
    else{}

    validaNumeros(novaEmpresa);

    return erros;

}

//testa a existência de vírgulas
function validaNumeros(novaEmpresa){
    for(let i=0; i>0 && i<4;i++){
        let dados=novaEmpresa[i]
        let conteudo=dados.value
        let expressao= new RegExp(conteudo,i)
    
    if(expressao.test(",")){
        erros.push("adicione os números sem ','")
    }
    else{}
    }
}

function mostraErros(erros){
    let listaErro=document.querySelector(".classeErro")
    listaErro.innerHTML = ""
    erros.forEach(function(cadaErro){
        let item= document.createElement("li")
        item.textContent=cadaErro
        item.classList.add("mensagemErro")
        listaErro.appendChild(item)
    })
}

