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

Versões utilizadas no projeto
```sh
{
  'talentos-api': '0.0.1',
  npm: '6.14.4',
  ares: '1.16.0',
  brotli: '1.0.7',
  cldr: '36.0',
  http_parser: '2.9.3',
  icu: '65.1',
  llhttp: '2.0.4',
  modules: '72',
  napi: '5',
  nghttp2: '1.40.0',
  node: '12.16.3',
  openssl: '1.1.1g',
  tz: '2019c',
  unicode: '12.1',
  uv: '1.34.2',
  v8: '7.8.279.23-node.35',
  zlib: '1.2.11'
}
```