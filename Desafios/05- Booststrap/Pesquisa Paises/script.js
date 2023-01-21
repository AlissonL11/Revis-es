document.getElementById('card').style.setProperty('display', 'none', 'important')


function search(){                   //criando a função a ser acionada quando pressionado o botao "pesquisar"
    document.getElementById('card').style.setProperty('display', 'block', 'important')
    let country = document.getElementById('country').value   //retirando a entrada colocada no input
    let finalURL = `https://restcountries.com/v3.1/name/${country}?fullText=true`  //atribuindo o que foi escrito no input ao link da API utilizada.
    console.log(finalURL)

    fetch(finalURL)      //chamando a API para nossa aplicação
        .then(function(response){
            return response.json()  //transformando o fetch em Json
        })
        .then(function(data){        //utilizando o Json, vamos chamar as informações que queremos para colocar no card.

            //exibindo informações coletadas pela API (apenas no console do navegador)

            console.log(data[0])
            console.log(data[0].population)
            console.log(data[0].capital[0])
            console.log(data[0].continents[0])

            //iniciando alterações visuais no card (definindo as ID's)

            let flag = document.getElementById('flag')
            let name = document.getElementById('name')
            let capital = document.getElementById('capital')
            let continent = document.getElementById('continent')
            let population = document.getElementById('population')

            //fazendo as alterações aparecerem visualmente no card
            name.innerHTML = country
            capital.innerHTML = data[0].capital[0]
            continent.innerHTML = data[0].continents[0]
            population.innerHTML = data[0].population

            flag.src = data[0].flags.svg // para a bandeira, alteramos o src, já q é uma imagem, e nao um texto.
        })
}