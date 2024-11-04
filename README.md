# GitHub Repo Finder

Um aplicativo de busca de repositórios no GitHub, onde é possível adicionar e listar repositórios por meio da integração com a API do GitHub. O projeto utiliza **React**, **Styled Components** para a estilização, e **Axios** para fazer requisições HTTP.

## Funcionalidades

- **Busca de Repositório**: Insira o nome do repositório no formato `usuario/repo` e busque informações diretamente da API do GitHub.
- **Adicionar Repositório**: Adicione repositórios à lista de favoritos.
- **Remover Repositório**: Remova repositórios da lista de favoritos com um clique.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para criação de interfaces de usuário.
- **Styled Components**: Biblioteca para estilização de componentes com CSS-in-JS.
- **Axios**: Biblioteca para fazer requisições HTTP.

## Estrutura do Projeto
- **src/components**: Contém os componentes reutilizáveis, incluindo ``Input``, ``Button`` e ``ItemRepo``.
- **src/services**: Contém a configuração do Axios para chamadas à API do GitHub.
- **src/styles**: Contém o arquivo de estilo global, e arquivos de estilização dos componentes com Styled Components.


## Como rodar o projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/MonicaAlvesP/trilha-react-desafio-2.git
   ```
2. Navegue até o diretório do projeto:
   ```bash
   cd trilha-react-desafio-2
   ```
3. Instale as dependências:
   ```bash
   npm install
   ```
4. Inicie o projeto:
   ```bash
   npm run dev
   ```
5. Abra o navegador e acesse http://localhost:3000 para visualizar o projeto.


## Exemplo de Uso
1. Insira o nome de um repositório público do GitHub no formato ``usuario/repo``.
2. Clique em "Buscar".
3. Se o repositório existir e ainda não estiver na lista, ele será adicionado.
3. Clique no botão de remoção para excluir o repositório da lista.

<details align="left">
  <sumary></sumary>
    <p>O projeto foi criado como parte de um desafio proposto pela <b>Digital Innovation One</b>.</p>
  <div align="right">
    Feito com 💜 por <a href="https://github.com/MonicaAlvesP?tab=repositories">MA</a>
  </div>
</details>