
async function requisitaDaApi(sigla){
    try{
    const result = await fetch(`https://brapi.dev/api/quote/${sigla}?range=1d&interval=1d&fundamental=true&dividends=true`)
    const resultFormat = await result.json()
    //console.log(resultFormat.results)
    return resultFormat;
    }
    catch{
        throw console.error("Empresa não encontrada");
    }
}



export const empresas = {
    requisitaDaApi
}
//requisitaDaApi()