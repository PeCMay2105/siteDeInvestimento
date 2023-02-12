
const arrayEmpresa = []
function Armazena(Empresa){
    console.log(Empresa)
    let lista = Empresa
    arrayEmpresa.push(lista)
    //
    localStorage.setItem("Empresa Adicionada", JSON.stringify(arrayEmpresa))
    console.log(arrayEmpresa)
    console.log(arrayEmpresa[0].lucro)

}

function pegaDados(){
   let teste = JSON.parse(localStorage.getItem("Empresa Adicionada"))
    console.log(teste)
    console.log(teste[0].lucro)

    for(let i=0; i<5; i++){
        let objetos = teste[i]
        montaTr(objetos)
    console.log(montaTr(objetos))
    adicionaEmpresa(objetos)
    }

    /* montaTr(teste)
    console.log(montaTr(teste))
    adicionaEmpresa(teste) */
}
pegaDados()