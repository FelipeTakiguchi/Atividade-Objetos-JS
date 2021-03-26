let nome = '';
let valor = 0.0;
const restaurantes = [];
let valorTotalGasto = 0.0;
let maiorGasto = 0.0;
let indexRestaurante = 0.0;

const calculaGorjeta = function() {
    if(this.valor < 50){
        this.gorjeta = parseFloat(this.valor) * 0.2;
    } else if(this.valor >= 50 && this.valor <= 200){
        this.gorjeta = parseFloat(this.valor) * 0.15;
    } else if(this.valor > 200){
        this.gorjeta = parseFloat(this.valor) * 0.1;
    } else{
        //valores invalidos
    }

    return this.gorjeta;
};

const calculaValorTotal = function() {
    this.valorTotal = parseFloat(this.valor) + parseFloat(this.gorjeta);
    return this.valorTotal;
};

const tostring = function() {
    return "Restaurante do " + this.nome + " - [Valor: R$ " + this.valor.toFixed(2) + " | Gorjeta: R$ " + this.gorjeta.toFixed(2) + " | Total: R$ " + this.valorTotal.toFixed(2) + "]";
};

restaurantes.calculaTotalGasto = function() {
    valorTotalGasto = 0;
    for (let i = 0; i < restaurantes.length; i++) {
        valorTotalGasto = parseFloat(restaurantes[i].valorTotal) + parseFloat(valorTotalGasto);
    }
    return valorTotalGasto;
};

restaurantes.calculaMediaTotal = function() {
    let total = restaurantes.calculaTotalGasto();
    return (parseFloat(total) / parseInt(restaurantes.length));
};

restaurantes.maiorGasto = function() {
    for (let i = 0; i < restaurantes.length; i++) {
        if(restaurantes[i].valorTotal > maiorGasto){    
            maiorGasto = restaurantes[i].valorTotal;
            indexRestaurante = i;
        }
    }
    return restaurantes[indexRestaurante];
}

restaurantes.imprimir = function() {
    valorFloat = parseFloat(restaurantes.maiorGasto().valorTotal);
    console.log("Restaurantes visitados no feriado: " + restaurantes.length
                + "\nLista de Gastos:");
    for (let i = 0; i < restaurantes.length; i++) {
        console.log(restaurantes[i].tostring());
    }
    console.log("Total Gasto: R$" + restaurantes.calculaTotalGasto().toFixed(2));
    console.log(`Média de Gastos: R$ ${restaurantes.calculaMediaTotal().toFixed(2)}`);
    console.log("Restaurante com maior gasto: " 
    + restaurantes.maiorGasto().nome + " (R$" + valorFloat + ")");
};

const qntdRestaurantes = prompt("Informe a quantidade de restaurantes visitados: ");

for (let i = 0; i < qntdRestaurantes; i++) {
    nome = prompt("Informe o nome do restaurante: ");
    valor = prompt("Informe o valor da compra: ");

    let restaurante = {
        nome: '',
        valor: 0.0,
        gorjeta: 0.0,
        valorTotal: 0.0,
        calculaGorjeta: calculaGorjeta,
        calculaValorTotal: calculaValorTotal,
        tostring: tostring,
    };    

    restaurante.nome = nome;
    restaurante.valor = parseFloat(valor);
    restaurante.calculaGorjeta();
    restaurante.calculaValorTotal();
 
    restaurantes[i] = restaurante;
}

restaurantes.imprimir();