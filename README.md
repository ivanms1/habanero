# Habanero

## Technology stack

- Backend: [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/), [tRPC](https://trpc.io/) and [Prisma](https://www.prisma.io/)
- Frontend: [React.js](https://reactjs.org/), [Next.js](https://nextjs.org/) and [tRPC](https://trpc.io/)

## Monorepo Setup

- `apps/api`: [Express](https://expressjs.com/) app that hosts the [tRPC](https://trpc.io/) server.
- `apps/web`: Main app powered by [Next.js](https://nextjs.org).
- `apps/admin`: [Next.js](https://nextjs.org) app for admin purposes.
- `packages/ui`: Internal component library used by both `web` and `admin` applications.
- `packages/trpc`: Libary that exports [tRPC](https://trpc.io/) router and context for the apps in the monorepo to consume.
- `packages/auth`: Libary that exports [NextAuth.js](https://next-auth.js.org/) configuration for the apps in the monorepo to consume.
- `packages/eslint-config-custom`: Libary that contains custom [eslint](https://eslint.org/) rules for the monorepo.
- `packages/tsconfig`: Libary that contains custom [tsconfig](https://www.typescriptlang.org/tsconfig) rules for the monorepo.

## Requirements

- **Yarn**

This repository uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager.

- **Node.js**

This repository uses [Node.js](https://nodejs.org/en/) as a runtime environment. Version 18.0.0 or higher is required.

- **PostgreSQL Database**

  To run the backend, a connection to a database is needed. The easiest way to run a Postgres DB locally is via [Docker](https://www.docker.com/).

  Once you have Docker installed run this command:

  ```
  docker run --detach --publish 5432:5432 -e POSTGRES_PASSWORD=postgres --name habanero postgres:10.12
  ```

## Running the app

- Install all dependencies, on the root folder run

  ```
  yarn app:install
  ```

- Initialize the database or sync the database schema

  ```
  yarn db:push
  ```

- Generate the pr the prismas client and types

  ```
  yarn db:generate
  ```

- Run app

  - Start the backend

    ```
    yarn dev:api
    ```

  - Start backend + web

    ```
    yarn dev:web
    ```

  - Start backend + admin

    ```
    yarn dev:admin
    ```
