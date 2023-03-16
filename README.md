<h1 align="center">Notifications Service(Ignite Lab)</h1>

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

### Rodando

```bash
# Rodando o projeto
$ npm run start:dev

# Abrir o banco de dados do prisma
$ npx prisma studio
```

### Prisma configuração

```bash
# Instalação cli
$ npm i prisma

# Dependencia de producao
$ npm i @prisma/client

# Rodar
$ npx prisma init --datasource-provider sqlite

# Criar tabelas
$ npx prisma migrate dev
```

### Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Prisma](https://www.prisma.io/)
- [NestJS](https://docs.nestjs.com/)
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
