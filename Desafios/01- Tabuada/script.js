function tabuada() {
    var num1 = window.document.getElementById('num1') //pega o primeiro numero (input)
    var num2 = window.document.getElementById('num2') //pega o segundo numero (input)

    

    if(num1.value.length == 0 || num2.value.length == 0){
        window.alert('CONFIRA OS CAMPOS E TENTE NOVAMENTE!') //CONFERE SE OS CAMPOS ESTAO VAZIOS, COM BASE NO NUMERO DE CARACTERES INSERIDOS
    }else{

        var x = Number(num1.value) //primeiro número transformado em valor numerico
        var y = Number(num2.value) //segundo número transformado em valor numerico

        var z = '' // recebe o valor das multiplicações

        var repeticao = 0 // estrutura de repetição, começando em 0

        var resposta = window.document.getElementById('resultado') //chama o evento resultado, no html

        

        resposta.innerHTML = `A tabuada do ${x} é:<br>` //IMPRIME O RESULTADO
        
        do {
            z = x*repeticao
            resposta.innerHTML += `${x} X ${repeticao} = ${z} <br>` //linha responsavel por exibir os resultados

            repeticao = repeticao+1
        } while(repeticao<=y) //faz a conta se repetir, até que o valor final seja igual o primeiro * o segundo numero}

    }
}