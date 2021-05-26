# Aprendendo sobre o Adonis

## O que aprendi 🤓

Para criarmos uma aplicação com adonis, podemos usar o seguinte código

```
yarn create adonis-ts-app <nome do projeto>
```

Para a criação de controlleres usamos o seguinte comando, onde ele ficara

```
node ace make:controllers User
```

### Criando a conexão com o banco de dados

Para a criação da conexão do banco de dados, precisamos seguir algumas etapas de instalação

- Baixar o `lucid`
- Baixar o SGBD que deseja utilizar, no meu caso o `pg`
- E por ultimo configurar as nossas variaveis de ambiente

Para baixar o lucid, rode o comando:

```
yarn add @adonisjs/lucid@alpha
```

Para baixar o PostgresSQL, rode o comando:

```
yarn -D add pg
```

Após tudo isso, vamos rodar o comando para que o adonis crie nossos arquivos de configuração, com o:

```
node ace invoke @adonisjs/lucid
```

Após rodar é só selecionar suas configurações

Com isso entre no seu arquivo `.env` e `.env.example` e coloque as informações de database, password e usename para conexão com seu banco de dados escolhido

### Criando Models no adonis

Rode o seguinte comando, para a criação do seu model:

```
node ace make:model <Nome do model que quer criar>
```

---

### Criando as Migrations no adonis

Rode o seguinte comando, para a criação do seu model:

```
node ace make:migration <Nome da migration que quer criar>
```

Após a criação da mesma, podemos rodalas para adicionar as tabelas no banco de dados, com o comando:

```
yarn build && node ace migration:run
```

### Criando o middlewarw de autenticação

Primeiro vamos instalar o pacote de autenticação do adonis, é só rodar o comando:

```
yarn add @adonisjs/auth
```

após isso vamos fazer com que o adonis configure esse pacote, para que possamos usar a instancia de auth em nossa aplicação, só rodar o comando:

```
node ace configure @adonisjs/auth
```

e escolher as configuração referente a sua aplicação
