## Funcionalidades Principais

* **Navegação por Abas:** Interface intuitiva com abas para Início, Produtos e Categorias.
* **Listagem de Categorias:** Explore produtos por categorias específicas.
* **Listagem de Produtos:** Visualize todos os produtos disponíveis.
* **Detalhes do Produto:** Veja informações detalhadas sobre cada produto.
* **(Outras funcionalidades que você possa ter)**

## Tecnologias Utilizadas

* [Expo](https://expo.dev/)
* [React Native](https://reactnative.dev/)
* [Expo Router](https://expo.github.io/router/)
* [@react-navigation/native](https://reactnavigation.org/) (Se você ainda estiver usando)
* [@expo/vector-icons](https://icons.expo.fyi/) (Para ícones)
* **(Outras dependências importantes)**

## Estrutura de Pastas

* `app/`: Contém os arquivos de rotas e telas da aplicação (usando Expo Router).
    * `(tabs)/`: Layout da Tab Bar e telas dentro dela (Início, Produtos).
    * `categorias/`: Tela de listagem de categorias e tela de produtos por categoria (`[categoria].tsx`).
    * `produto/`: Tela de detalhes do produto (`[id].tsx`).
* `data/`: Contém os dados estáticos do aplicativo (categorias, produtos).
* `types/`: Contém as definições de tipo para TypeScript.
* `assets/`: Contém recursos como imagens e ícones.
* ... (outras pastas)
