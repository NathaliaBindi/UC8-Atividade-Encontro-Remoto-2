let listadepecas = ["Filtro do Ar", "Motor", "Amortecedor" ]

if (listadepecas.length < 10 ) {
    console.log ("É possível cadastrar mais peças")
} else {
    console.log ("Não há mais espaço na lista")

}

let peso = 50;
if (peso < 100) {
    console.log ("A peça deve pesar no mínimo 100g")
} else {
    console.log ("A peça possui peso adequado")
}

let nomepeca = "Disco de Freio"
if (nomepeca.length > 3) {
    console.log ("Nome de peça está adequado para o cadastro")
} else {
    console.log ("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}
