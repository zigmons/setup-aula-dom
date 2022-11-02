const produtos = [
    {    
        id: "prod001",
        nome : "Fire Stick",
        preco: 360.05,
        cor: "preto",
        imagem: "fire-stick.jpg",
        descricao: "Fire TV Stick | Streaming em Full HD com Alexa | Com Controle Remoto por Voz com Alexa (inclui comandos de TV)"
    },
    {
        id: "prod002",
        nome : "Kindle",
        preco: 299.05,
        cor: "preto",
        imagem: "kindle.jpg",
        descricao: "Kindle 10a. geração com bateria de longa duração - Cor Preta"
    },
    {
        id: "prod003",
        nome : "Capa Kindle",
        preco: 69,
        cor: "preto",
        imagem: "capa-kindle.jpg",
        descricao: "Capa de tecido resistente à água para Kindle Paperwhite (10ª Geração não compatível com as versões anteriores do Kindle Paperwhite ou com 11ª Geração lançada em 2021) - Cor Azul"
    },
    {
        id: "prod004",
        nome : "Echo Dot",
        preco: 270.55,
        cor: "preto",
        imagem: "echo-dot.jpg",
        descricao: "Echo Dot (3ª Geração): Smart Speaker com Alexa - Cor Preta"       
    }
]

// Mockup de Banco de Dados de usuario

const admin ={
    email: "admin@gmail.com",
    password: "admin",
    nome:"Rafael",
    sobrenome: "Sousa",
}



function showLogin(){
    document.getElementById("div-form-login").style.visibility="visible"
}

function login(){
    let emaildigitado = document.getElementById("input-email").value
    let senhadigitada = document.getElementById("input-password").value

    if(emaildigitado === admin.email && senhadigitada === admin.password){
        //ocultar formulario de login
        document.getElementById("div-form-login").style.display = "none"
        document.getElementById("btn-login").style.display = "none"
        document.getElementById("img-profile").style.visibility="visible"

        const welcome = document.createElement('h2');
        welcome.innerText = `Bem Vindo, ${admin.nome}`;
        document.getElementById("galeria-de-produtos").prepend(welcome)
        
        exibirProdutos()

    }else{
        alert("Email ou senha invalidos!")
    }
}

const galeriaDeProdutos = document.getElementById("div-galeria")

function exibirProdutos(){
    for (i=0; i< produtos.length; i++){
        // Criando um div para o produto
        let produto = document.createElement("div");
        produto.setAttribute("class", "produto")

        // Criando , exibindo o nome do produto e adicionando o nome do produto ao div do produto
        let nomeProduto = document.createElement("h3");
        nomeProduto.innerText = produtos[i].nome;
        produto.append(nomeProduto)
        // Exibindo imagem
        let imagemProduto = document.createElement("img");
        imagemProduto.src = `assets/products/${produtos[i].imagem}`
        produto.append(imagemProduto);
        // // Preco
        let precoProduto = document.createElement("p");
        precoProduto.innerText =  `R$ ${produtos[i].preco}`;
        produto.append(precoProduto);

        let descricaoProduto = document.createElement("p");
        descricaoProduto.innerText = produtos[i].descricao
        produto.append(descricaoProduto)
        



        // Adicionando o produto a galeria
        galeriaDeProdutos.append(produto);

    }

}