

   
   
   let botao = document.querySelector("#botao")
    botao.addEventListener("click",function(event){
        event.preventDefault                                        
        let form= document.querySelector("#Formulario")

        //definindo e relacionando as variaveis do formulario
        var novaEmpresa = novoElemento(novaEmpresa)
        montaTr(novaEmpresa)
        let erro = validaForm(novaEmpresa)
        if(erro.length>0){
            mostraErros(erro)
             return;
        }
        let mensagemErros=document.querySelector(".classeErro")
        mensagemErros.innerHTML=""
        adicionaEmpresa(novaEmpresa)
        //form.reset()
        Armazena(novaEmpresa)
    })

    
function calculaMultiplo(custo,acoes,lucratividade){
    let multiploPL= 0
    multiploPL=((custo*acoes/lucratividade))
    return multiploPL.toFixed(3)
    
}

function novoElemento(novaEmpresa){
    let form= document.querySelector("#Formulario")
     novaEmpresa={
        nome:form.nome.value,
        lucro:form.lucro.value,
        preco:form.valor.value,
        numero:form.numeroDeAcoes.value,
        multiplo:calculaMultiplo(form.valor.value, form.numeroDeAcoes.value, form.lucro.value)
    }
    //console.log(novaEmpresa) 
    return novaEmpresa  
}

function adicionaEmpresa(novaEmpresa){
    let tabela= document.querySelector(".linhasComuns");
    let empresa = montaTr(novaEmpresa)
    tabela.appendChild(empresa);
}

function montaTr(novaEmpresa){
    let novaLinha=document.createElement("tr")
    novaLinha.appendChild(criaTd(novaEmpresa.nome))
    novaLinha.appendChild(criaTd(novaEmpresa.lucro))
    novaLinha.appendChild(criaTd(novaEmpresa.preco))
    novaLinha.appendChild(criaTd(novaEmpresa.numero))
    novaLinha.appendChild(criaTd(novaEmpresa.multiplo))
    novaLinha.appendChild(verificaRentabilidade(novaEmpresa))
    return novaLinha
    
}
function criaTd(info){
    let novatd=document.createElement("td")
    novatd.textContent=(info)
    return novatd;
}


