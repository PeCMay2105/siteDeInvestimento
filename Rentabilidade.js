
function verificaRentabilidade(novaEmpresa){
    let multiploRec= novaEmpresa.multiplo;

    if(multiploRec>25){
        let TdRent=criaTd("Não rentável")
        TdRent.classList.add('naoRentavel')
        //console.log('não rentável')
        return TdRent
    }
    else{
        let TdRent=criaTd("Rentável")
        TdRent.classList.add('rentavel')
        //console.log('rentável')
        return TdRent
    }
}