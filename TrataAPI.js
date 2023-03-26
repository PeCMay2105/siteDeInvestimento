import { empresas } from "./Requisita.js"; 
// variaveis de escopo global
const localCard = document.getElementById("Pesquisadas")
const botao = document.getElementById("botaoPesquisa")
const empresa = document.querySelector("#pesquisa")
console.log(empresa)
async function criaCard(sigla){
    const retornoAPI = await empresas.requisitaDaApi(sigla)
    const infos = retornoAPI.results[0]
    console.log(infos)
    montaCard(infos)
}

async function montaCard(dados){
    const info = await dados;
    localCard.innerHTML = `<div class="card">
    <h2 class="subTitulo">Nome:  ${info.shortName} </h2><br>
    <p class="itens">Valor atual:  ${info.regularMarketPrice}  R$</p>
    <p class="itens">média de 200 dias:  ${info.twoHundredDayAverage}  R$</p>
    <p class="itens">Máxima anual:  ${info.fiftyTwoWeekHigh}  R$</p>
    <p class="itens">Mínima anual:  ${info.fiftyTwoWeekLow}  R$</p>
    <p class="itens">variação anual:  ${info.fiftyTwoWeekRange}  R$</p>
    <p class="itens">Média diária de volume (intervalo de 10 dias): ${info.averageDailyVolume10Day} </p>
    </div>`
}

let armazenador = botao.addEventListener("click", event =>{
    let infosEmpresa = empresa.value
    event.preventDefault()
    console.log(infosEmpresa)
    return criaCard(infosEmpresa)
})

/* let sigla = "PETR4"
const teste = criaCard(sigla) */