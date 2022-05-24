// Selecionando elemento ul do HTML
const ul = document.querySelector('.containerListaProdutos ul');

function montarListaProdutos (listaProdutos){
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');

        // Adicionando dados do produto aos elementos
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        // Adicionando o elementos para o li
        li.append(img, h3, p, span);
        // Adicionando li ao HTML
        ul.appendChild(li);
    });
    
}
montarListaProdutos(produtos)

// Função para mostrar todos os produtos
function filtrarTodos (){
       montarListaProdutos(produtos) 
    };

// Função para filtrar frutas
function filtrarPorHortifruti() {
    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });
    montarListaProdutos(listaHortifruti);
}
// Selecionando botao em nosso HTML
    const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');

    // Adicionando event listener de clique, e executando a função de filtro
    botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);

    // Selecionando o botao no HTML e adicionando event listener de clique para executar a função de mostrar todos
    const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos')
    botaoMostrarTodos.addEventListener('click', filtrarTodos)

    // Vou ter de colocar um addEventListener para quando a pessoa digitar o nome só aparecer 

function acharProduto (){
    const acharItem = produtos.filter((produto) => {
        return produto.categoria
    })
    console.log(acharItem)
}
acharProduto(produtos)