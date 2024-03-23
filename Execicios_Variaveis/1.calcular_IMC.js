//calcular o IMC de uma pessoa

// IMC =

// Este valor representa o peso da pessoa em quilogramas.
let peso = 46; 

// Este valor representa a altura da pessoa em metros.
let altura = 1.49 

// altura ** 2 // // Nesta linha, você está calculando o IMC usando a fórmula do IMC, que é peso dividido pela altura ao quadrado.
//cálculo da altura elevada ao quadrado. Então, você divide o peso pelo resultado disso para obter o IMC
let imc = peso / Math.pow(altura, 2); 
                                     
// Por fim, você imprime o resultado do IMC na tela usando console.log(). A mensagem exibida será algo como "Seu IMC é X", onde X é o valor calculado do IMC.
console.log(`Seu IMC é ${imc}`);
