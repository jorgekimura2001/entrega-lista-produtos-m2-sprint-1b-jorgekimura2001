// Selecionando elemento ul do HTML
const ul = document.querySelector(".listaProdutos");
const spanTotal = document.querySelector('#precoTotal')

function montarListaProdutos(listaProdutos) {
  ul.classList.remove('mudarLado');
  ul.innerHTML = "";
  spanTotal.innerText = `R$ ${listaProdutos.reduce((total, produto) => total + produto.preco, 0)}.00`;
  listaProdutos.forEach((produto) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");
    span.classList.add("span--categoria");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    // Adicionando dados do produto aos elementos
    img.src = produto.img;
    img.alt = produto.nome;
    span.innerText = produto.secao; // categoria
    h3.innerText = produto.nome; // nome do produto
    p.innerText = `R$ ${produto.preco}.00`; // preco do produto

    // Adicionando o elementos para o li
    li.append(img, h3, span, p);
    // Adicionando li ao HTML
    ul.appendChild(li);
  });
}
montarListaProdutos(produtos);

function montarListaProdutosFiltrados (listaProdutos){
  ul.classList.remove('.listaProdutos');
  ul.classList.add('mudarLado');
  ul.innerHTML = "";
  spanTotal.innerText = `R$ ${listaProdutos.reduce((total, produto) => total + produto.preco, 0)}.00`;
  listaProdutos.forEach((produto) => {
    const li = document.createElement("li");
    const img = document.createElement("img");
    const span = document.createElement("span");
    span.classList.add("span--categoria");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    // Adicionando dados do produto aos elementos
    img.src = produto.img;
    img.alt = produto.nome;
    span.innerText = produto.secao; // categoria
    h3.innerText = produto.nome; // nome do produto
    p.innerText = `R$ ${produto.preco}.00`; // preco do produto

    // Adicionando o elementos para o li
    li.append(img, h3, span, p);
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


