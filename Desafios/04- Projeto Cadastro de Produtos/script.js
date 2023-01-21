class Produto{

    constructor(){              //aqui serão salvas as informaçoes imputadas
        this.id = 1;            //definição da ID da tabela
        this.arrayProdutos = [] //array criado para salvar a informação quando clicar no botao salvar
    }
////////////////////////////////////////////////////////////////////////////
    Adicionar(){                    //função a ser ativada quando clicado o botao "adicionar"
        let produto = this.lerDados() //objeto produto sendo criado aqui <<<<<<<<<<<<<<<<<
        
        if(this.Validar(produto) == true){  //verofica se a função "validar" (lá embaixo) está true ou false.
            this.Salvar(produto)            //caso Validar = true (campos preenchidos), executa a função Salvar produto.
        }

        this.Listar()   //ativa a funçao "listar"(Lá embaixooo...).
        this.Cancelar() //chama a funcao "Cancelar", após listar (para deixar os campos em branco, para receber novos dados)
    }
////////////////////////////////////////////////////////////////////////////
    lerDados(){    //é quem cria o produto
        let produto = {}  //produto começa vazio (variável)

        produto.id = this.id;    //definindo a ID na tabela do produto, no caso 1
        produto.nomeProduto = document.getElementById('pNome').value  //pegando do input o nome e atribuindo a um objeto
        produto.precoProduto = document.getElementById('pPreco').value //pegando do input o preço e atribuindo a um objeto
        
        return produto  // retorna os valores para o objeto produto.

    }
////////////////////////////////////////////////////////////////////////////
    Validar(produto){       //estrutura condicional criada para verificar se os campos produto e preço estao preenchidos. Caso não estejam, irá retornar mensagem de erro.
        let msg = '';       //mensagem inicial, do alerta (variável 'msg' criada, para ser usada na função)

        if(produto.nomeProduto == ''){             //verifica se o campo "nome do protuto" tá vazio
            msg += 'Insira o nome do produto! \n'  //mensagem caso não haja nome do produto
        }

        if(produto.precoProduto == ''){             //verifica se o campo "preço do protuto" tá vazio
            msg += 'Insira o preço do produto! \n'  //mensagem caso nao haja preço do produto
        }

        if(msg != ''){       //se houver mensagem de erro, retorna false;
            alert(msg)       //faz o alerta aparecer na tela.
            return false     // caso haja erro, a funçao validar se torna 'falsa', afetando a funlçao "adicionar"
        }

        return true     // se nao houver erro, retorna true, afetando a função "adicionar"
    }
////////////////////////////////////////////////////////////////////////////
    Salvar(produto){                         //função para salvar as informações dentro do array "arrayProdutos"
        this.arrayProdutos.push(produto);    //caso executado, empurra as informaçoes pra dentro do objeto "produto"
        this.id++;                           //adiciona +1 a contagem ao id
    }
////////////////////////////////////////////////////////////////////////////
    Listar(){    //vai listar visualmente os itens adicionados; cria os "td" (linhas)
         let corpo = document.getElementById('corpo')    
         corpo.innerText = '' 

         for (let i = 0; i < this.arrayProdutos.length; i++){    //vai manipular as informaçoes e adicioná-las, linha a linha (estrutura de repetição)
            let tr = corpo.insertRow()         //Faz com que seja inserida, visualmente uma linha
            
            let td_id = tr.insertCell();         //inserindo as colunas nas linhas
            let td_nome = tr.insertCell();       //inserindo as colunas nas linhas
            let td_preço = tr.insertCell();      //inserindo as colunas nas linhas
            let td_del = tr.insertCell();        //inserindo as colunas nas linhas

            td_id.innerText = this.arrayProdutos[i].id;                 //pegando o valor da id armazenada no array
            td_nome.innerText = this.arrayProdutos[i].nomeProduto;      //pegando o valor do nome armazenada no array
            td_preço.innerText = this.arrayProdutos[i].precoProduto;    //pegando o valor do preço armazenada no array

            let imagem = document.createElement('img')                  //definindo e criando o objeto 'img'
            imagem.src = 'lixo.png'
            td_del.appendChild(imagem)                                  // adicionando um 'filho' a coluna (para inserir a imagem na célula)

            imagem.setAttribute("onclick", "produto.Deletar("+this.arrayProdutos[i].id+")")  //chama a função "deletar" ao clicar na imagem.
            
         }
    }
////////////////////////////////////////////////////////////////////////////
    Cancelar(){    //funçao para apagar os valores dentro do input. será atribuído ao botao cancelar
        document.getElementById('pNome').value = ''
        document.getElementById('pPreco').value = ''

    }
////////////////////////////////////////////////////////////////////////////
    Deletar(id){                                                   //função para deletar o produto
        let corpo = document.getElementById('corpo')

        for(let i = 0; i < this.arrayProdutos.length; i++){        //funcao para procurar o item exatamente pela id, e apagar
            if(this.arrayProdutos[i].id == id){
                this.arrayProdutos.splice(i, 1)                     
                corpo.deleteRow(i)
            }
            alert('ITEM DELETADO!')
        }
    }
}

////////////////////////////////////////////////////////////////////////////
var produto = new Produto(); //definindo que o "prduto" é um objeto da classe/criando a variável produto. Objeto que aciona a funçaõ "adicionar" ao pressionar o botao, e ele aciona a classe, criando um novo produto.