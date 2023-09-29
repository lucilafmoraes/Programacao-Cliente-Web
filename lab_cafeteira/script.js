const menu = document.querySelectorAll(".item")
let total = 0
let carrinho = []



function Item(nome, preco) {
    this.nome = nome
    this.preco = parseFloat(preco.substr(2))
}

const addChart = product => {
    carrinho.push(product)
}
const addProductList = (selector, product) => {
    const listaItensDOM = document.querySelector(selector)
    listaItensDOM.innerHTML += `<li>${product.nome}</li>`
}
const updateDisplay = (selector, value) => {

    const valorTotalDOM = document.querySelector(selector)
    valorTotalDOM.innerHTML = value
}
menu.forEach(item => {
    item.addEventListener("click", () => {
        //pegar o item clicado

        const elemClicado = evento.target
        if(elemClicado.class.contains("item")){
            //recuperar o item clicado
            const nomeItem = elemClicado.querySelector("figcaption").textContent
            const precoItem = elemClicado.querySelector(".item-price").textContent
            const produtoSelecionado = new nomeItem(nomeItem, precoItem)
            console.log(`Produto escolhido: ${nomeItem}
                        preço: ${precoItem}`)
        } 
 })   
    //adicionar no carinho
    addProductList(".itens", produtoSelecionado)
    //somar valor total
    total += produtoselecionado.preco
    updateDisplay(".total", total)
});
