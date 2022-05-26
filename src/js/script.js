// Selecionando elemento ul do HTML
const ul = document.querySelector(".containerListaProdutos ul");

function montarListaProdutos(listaProdutos) {
  ul.innerHTML = "";

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

// Função para mostrar todos os produtos
function filtrarTodos() {
  montarListaProdutos(produtos);
}

// Função para filtrar frutas
function filtrarPorHortifruti() {
  const listaHortifruti = produtos.filter((produto) => {
    return produto.secao === "Hortifruti";
  });
  montarListaProdutos(listaHortifruti);
}

// Função para filtrar itens de panificadora
function filtrarPorPanificadora() {
  const listaPanificadora = produtos.filter((produto) => {
    return produto.secao === "Panificadora";
  });
  montarListaProdutos(listaPanificadora);
}

// Função para filtrar itens laticinios
function filtrarPorLaticinio() {
  const listaLaticinio = produtos.filter((produto) => {
    return produto.secao === "Laticínios";
  });
  montarListaProdutos(listaLaticinio);
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

// addEventListener para quando a pessoa estiver digitando aparecer o produto

const input = document.querySelector('#inputPesquisar')

console.log(input)
