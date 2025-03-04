# Pokedex

Este é um projeto de Pokedex desenvolvido com React. Ele permite que os usuários pesquisem e visualizem informações sobre diferentes Pokémons, além de marcar seus Pokémons favoritos.

## Funcionalidades

- Pesquisar Pokémons por nome.
- Visualizar detalhes dos Pokémons, incluindo imagem, tipos e ID.
- Marcar e desmarcar Pokémons como favoritos.
- Paginação para navegar entre diferentes páginas de Pokémons.
- Armazenamento de favoritos no `localStorage`.

## Tecnologias Utilizadas

- React
- Context API
- Fetch API
- CSS

## Estrutura do Projeto

```
pokedex-project/
├── public/
├── src/
│ ├── components/
│ │ ├── Navbar.jsx
│ │ ├── Pagination.jsx
│ │ ├── Pokedex.jsx
│ │ ├── Pokemon.jsx
│ │ ├── Searchbar.jsx
│ ├── contexts/
│ │ ├── favoriteContext.jsx
│ ├── api.jsx
│ ├── App.css
│ ├── App.jsx
│ ├── main.jsx
├── README.md
```

## Como Executar o Projeto

1. Clone o repositório:
   ```bash
   git clone https://github.com/Danyel492/pokedex-project.git
   ```

1. Navegue até o diretório do projeto:

    ```bash
    cd pokedex-project
    ```

3. Instale as dependências:

    ```bash
    npm install
    ```

4. Inicie o servidor de desenvolvimento:

    ```bash
    npm run dev
    ```

5. Abra o navegador e acesse:
`http://localhost:5173`

> [!IMPORTANT]
> Caso a porta 5173 esteja ocupada, ao iniciar o servidor na etapa 4 irá aparecer a próxima porta disponível

E pronto.

## Habilidade desenvolvidas no projeto

Este projeto de Pokedex desenvolve várias habilidades importantes em desenvolvimento web e React como:
1. React Basics:

    - Criação de componentes funcionais.
    - Uso de hooks como useState e useEffect.
    - Gerenciamento de estado em componentes.

2. Context API:

    - Criação e uso de contextos para gerenciar estados globais.
    - Uso de useContext para acessar dados do contexto.

3. API Integration:

    - Fazer requisições HTTP usando fetch.
    - Manipulação de dados recebidos de uma API.
    - Tratamento de erros em requisições.

4. Component Composition:

    - Composição de componentes reutilizáveis.
    - Passagem de props entre componentes.

5. Event Handling:

    - Manipulação de eventos de clique e mudança de input.
    - Criação de funções de callback para eventos.

6. Conditional Rendering:

    - Renderização condicional de componentes com base no estado.

7. CSS Styling:

    - Aplicação de estilos CSS em componentes React.
    - Uso de classes CSS para estilização.

8. Local Storage:

    - Armazenamento e recuperação de dados no localStorage.

9. Pagination:

    - Implementação de paginação para navegação entre páginas de dados.

10. Error Handling:

    - Tratamento de erros em operações assíncronas.
    - Exibição de mensagens de erro para o usuário.

11. User Experience:

    - Implementação de feedback visual para ações do usuário (ex: carregando, favoritos).
    - Criação de uma interface amigável e intuitiva.

12. Code Organization:

    - Estruturação de um projeto React.
    - Organização de arquivos e componentes de forma modular.