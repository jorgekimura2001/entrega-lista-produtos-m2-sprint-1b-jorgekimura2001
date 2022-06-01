// Selecionando elemento ul do HTML
const ul = document.querySelector(".listaProdutos");
// const spanTotal = document.querySelector('#precoTotal')
const carrinho = document.querySelector('.carrinho__itens')
const carrinhoVazio__titulo = document.querySelector('.carrinho__vazio--titulo')
const carrinhoVazio__conteudo = document.querySelector('.carrinho__vazio--conteudo')

// Função para adicionar id à cada objeto
function adicionarId (){
  let id = 0;
  produtos.forEach((elem)=>{
    elem['id'] = id
    id++ 
  })
}
adicionarId()

function montarListaProdutos(listaProdutos) {
  ul.classList.remove('mudarLado');
  ul.innerHTML = "";
  
  // spanTotal.innerText = `R$ ${listaProdutos.reduce((total, produto) => total + parseFloat(produto.preco), 0)}.00`;
  listaProdutos.forEach((produto) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");
    span.classList.add("span--categoria");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const btn = document.createElement('button');
    btn.classList.add('list__btn')
    btn.id = produto.id

    // Adicionando dados do produto aos elementos
    img.src = produto.img;
    img.alt = produto.nome;
    span.innerText = produto.secao; // categoria
    h3.innerText = produto.nome; // nome do produto
    p.innerText = `R$ ${produto.preco}`; // preco do produto
    btn.innerText = "Adicionar ao carrinho"

    // Adicionando o elementos para o li
    li.append(img, h3, span, p, btn);
    // Adicionando li ao HTML
    ul.appendChild(li);

    btn.addEventListener('click', carrinhoTemplate)
  });

  // Adicionando evento ao botão para quando ser clicado criar a div no carrinho
  
}
montarListaProdutos(produtos);

function montarListaProdutosFiltrados(listaProdutos) {
  ul.classList.remove('.listaProdutos');
  ul.classList.add('mudarLado');
  ul.innerHTML = "";
 // spanTotal.innerText = `R$ ${listaProdutos.reduce((total, produto) => total + parseFloat(produto.preco), 0)}.00`;
  listaProdutos.forEach((produto) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");
    span.classList.add("span--categoria");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const btn = document.createElement('button');
    btn.classList.add('list__btn')

    // Adicionando dados do produto aos elementos
    img.src = produto.img;
    img.alt = produto.nome;
    span.innerText = produto.secao; // categoria
    h3.innerText = produto.nome; // nome do produto
    p.innerText = `R$ ${produto.preco}`; // preco do produto
    btn.innerText = 'Adicionar ao carrinho'
    

    // Adicionando o elementos para o li
    li.append(img, h3, span, p, btn);
    // Adicionando li ao HTML
    ul.appendChild(li);
  });
}

// Função para mostrar todos os produtos
function filtrarTodos() {
  montarListaProdutos(produtos);
}

// Função para filtrar frutas
function filtrarPorHortifruti() {
  const listaHortifruti = produtos.filter((produto) => {
    return produto.secao === "Hortifruti";
  });
  montarListaProdutosFiltrados(listaHortifruti); // primeiro cria-se a variavel que fará um filtro e só vai retornar produtos da secao hortifruti
}

// Função para filtrar itens de panificadora
function filtrarPorPanificadora() {
  const listaPanificadora = produtos.filter((produto) => {
    return produto.secao === "Panificadora";
  });
  montarListaProdutosFiltrados(listaPanificadora);
}

// Função para filtrar itens laticinios
function filtrarPorLaticinio() {
  const listaLaticinio = produtos.filter((produto) => {
    return produto.secao === "Laticínios";
  });
  montarListaProdutosFiltrados(listaLaticinio);
}

// Selecionando botoes no HTML
// Primeiro seleciona o botao e depois coloca um escutador (addEventListener) que irá realizar a função de filtrar
// Secao de fruta
const botaoMostrarHortifruti = document.querySelector(
  ".estiloGeralBotoes--filtrarHortifruti"
);
botaoMostrarHortifruti.addEventListener("click", filtrarPorHortifruti);

// Secao itens de panificadora
const botaoMostrarPanificadora = document.querySelector(
  ".estiloGeralBotoes--filtrarPanificadora"
);
botaoMostrarPanificadora.addEventListener("click", filtrarPorPanificadora);

// Secao itens laticinios
const botaoMostrarLaticinios = document.querySelector(
  ".estiloGeralBotoes--filtrarLaticinios"
);
botaoMostrarLaticinios.addEventListener("click", filtrarPorLaticinio);

// Todos os produtos
const botaoMostrarTodos = document.querySelector(
  ".estiloGeralBotoes--mostrarTodos"
);
botaoMostrarTodos.addEventListener("click", filtrarTodos);

// Função para quando a pessoa digitar aparecer o produto 
function filtrarInput(event){
  const semProduto = false
  const value = event.target.value.trim().toLowerCase()
  const listaFiltro = produtos.filter((produto) => {
      return produto.nome.toLowerCase().includes(value) 
    })
    montarListaProdutosFiltrados(listaFiltro)
  if(listaFiltro.length === 0){
    return semProduto
  }
}

// Div para caso não tenha o produto buscado
const divAviso = document.createElement('div')
divAviso.id = 'aviso'
divAviso.innerText = 'Esse produto está indisponível no momento! >_<'

// Campo de pesquisa
const input = document.getElementById('inputPesquisar');
input.addEventListener('input', (e) => {
  if (filtrarInput(e) == false){ 
    if(document.querySelector('#aviso') === null){
     ul.append(divAviso)
    }
  }
});
// Função para filtrar o botão
function filtrarBotao(){
  const semProduto = false
  const value = input.value.trim().toLowerCase()
  const listaFiltro = produtos.filter((produto) => {
    return produto.nome.toLowerCase().includes(value) 
  })
  montarListaProdutosFiltrados(listaFiltro)
  if (listaFiltro.length === 0){
    return semProduto
  }
}

// selecionei o botao do html e coloquei um escutador nele
const botaoPesquisar = document.getElementById('btnPesquisar');
botaoPesquisar.addEventListener('click', (e) => {
  if (filtrarBotao(e) == false){ 
    if(document.querySelector('#aviso') === null){
     ul.append(divAviso)
    }
  }
});


// selecionar o btn criado por Dom e adicionar ao carrinho 
// Função para quando ser clicado criar a div 
function carrinhoTemplate(evt){
  produtos.forEach((produto) => { 
    if(produto.id === parseFloat(evt.target.id)){
      criarCardCarrinho(produto)
    }
  })
}
let compras = []
// Função para criar o card com a img, nome, secao, preco e o icone de remover produto
function criarCardCarrinho (produto){
    carrinhoVazio__titulo.classList.add('carrinho--escondido')
    carrinhoVazio__conteudo.classList.add('carrinho--escondido')

    const divCard__carrinho = document.createElement('div');
      const figureCard__carrinho = document.createElement('figure');
        const imgCard__carrinho = document.createElement('img');
        imgCard__carrinho.src = produto.img
      figureCard__carrinho.appendChild(imgCard__carrinho)

      const divConteudo__carrinho = document.createElement('div')
        const tituloCard__carrinho = document.createElement('h3');
        tituloCard__carrinho.innerText = produto.nome;
        const secaoCard__carrinho = document.createElement('span');
        secaoCard__carrinho.innerText = produto.secao
        const precoCard__carrinho = document.createElement('p');
        precoCard__carrinho.innerText = `R$ ${produto.preco}`;
        const btnRemover__carrinho = document.createElement('button');
        btnRemover__carrinho.innerText = '🗑️';
        btnRemover__carrinho.classList.add('carrinho__btn--remover')
        btnRemover__carrinho.addEventListener('click', removerCarrinho); 
      divConteudo__carrinho.append(tituloCard__carrinho, secaoCard__carrinho, precoCard__carrinho, btnRemover__carrinho)

    divCard__carrinho.append(figureCard__carrinho, divConteudo__carrinho)
    carrinho.appendChild(divCard__carrinho) 
    return carrinho
}

// Função para remover item do carrinho 
function removerCarrinho(event){
  
}