# Talentos Api

## Sobre

Talentos Api é voltada para o gerenciamento de desenvolvedores, podendo cadastrar e vincular seu nível.

## Tecnologia

Para criação dessa api foi utilizado o framework [NestJs](https://github.com/nestjs/nest)

## Execução

Para rodar o projeto necessita ter instalado na maquina o [npm](https://www.npmjs.com/) e o [Nest CLI](https://docs.nestjs.com/cli/overview);

```sh
npm i
npm run start:dev
```
Se tudo ocorrer bem a api vai estar disponível em [localhost:3000](http://localhost:3000), se desejar pode-se trocar a porta de execução no arquivo src/main.ts

## Documentação

O projeto está usando o swagger para documentar a Api, para acessar utilize a rota [localhost:3000/doc](http://localhost:3000/doc)

Para facilitar os testes no arquivo Insomnia_2022-01-06_talento_api.json contem as rotas utilizadas em desenvolvimento.