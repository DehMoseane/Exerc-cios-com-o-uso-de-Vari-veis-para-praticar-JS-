// Quanto possuo em dinheiro
const meuDinheiro = 80.00;

// valor do produto
const valorDoProduto = 129.99;

//calcular desconto
const valorDoDesconto = valorDoProduto - meuDinheiro;

const cupom = (valorDoDesconto * 100) / valorDoProduto;

console.log("Você precisa de um cumpom de", cupom, "% de desconto");