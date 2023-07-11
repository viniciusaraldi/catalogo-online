import conectaApi from "./conectaApi.js";

async function mostraProdutos(busca) {
    const elemento = document.querySelector('.secao');
    const dados = await busca; 
    dados.forEach(dado => {
        elemento.innerHTML += `
        <div class="box">
            <h1 class="box-name">${dado.name}</h1>
            <h1 class="box-name">${dado.descricao}</h1>
            <h1 class="box-name">${dado.preco.$numberDecimal}</h1>
        </div>
        `

    })
    console.log(await busca);
}

mostraProdutos(conectaApi());