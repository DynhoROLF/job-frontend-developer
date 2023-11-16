## Começando

Primeiro, instale as dependências digitando esse código dentro da pasta de job-frontend-developer/web/

```bash
npm install
# or
yarn install
# or
pnpm install - o utilizado
# or
bun install
```
Depois, inicie o Projeto

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

E um Adicional para conseguir rodar as APIs, é necessário criar um arquivo na raiz do job-frontend-developer/web/ com o nome: .env.local
Dentro desse arquivo adicione as chaves para poder utilizar as requisições. Nesse formato: 
```
NEXT_PUBLIC_YOUTUBE_KEY=AIzaSyCKkUjL9N-LNCWlFiWxSgV2W7oZqf33Nlc
NEXT_PUBLIC_TICKETMASTER_KEY=x9TAS10ua31T7nONj8geuWe7Cnp7OixA
```
( Chaves fornecidas para o projeto )

Abra [http://localhost:3000](http://localhost:3000) com o seu browser para ver o resultado

### Escolhas e Configurações do Projeto
- Optei por iniciar o projeto com NextJS por ser o framework mais atualizado para se trabalhar com o React/Typescript.
- Importei as configurações do ESLint da Rocketseat, pois acredito que a Rocketseat é uma das melhores e mais atualizadas escolas de programação do Brasil.
- Utilizei o ChakraUI e o Tailwindcss, apesar de preferir utilizar apenas o tailwind ou outra biblioteca de Customização de Front para o desenvolvimento do projeto.
- Foi a primeira vez trabalhando com a API do Youtube e do TicketMaster e utilizei o formato de Hook para conseguir reaproveitar o código em todas as requisições do Projeto.
- Também foi a primeira vez que utilizei o formato de [slug] para configurar uma página no NextJS.

### Problemas encontrados
- Não consegui colocar para me ceritificar que vieram todos os dados da banda do TicketMaster antes de renderizar os compontentes do React ( front ) e por isso, tem vezes que a requisição trás as informações filtrando cada campo e tem vezes que não. E pelos testes realizados ( console.log() ) tem certas bandas pesquisadas que trazem os dados em um formato e tem outras que vem do jeito correto.
- O jeito de pegar as informações de "items" por exemplo, aparecem de um jeito que não estariam declaradas nos Props ou Types e por isso não tem como colocar no Vercel para ser acessado por um link direto. ( Igual o Heroku ).
- Problemas na utilização da API em relação ao Token. Tive que criar token em 3 contas diferentes para conseguir continuar debugando o Projeto.
