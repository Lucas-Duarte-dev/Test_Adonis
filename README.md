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
