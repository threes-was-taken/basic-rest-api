# Basic REST API

This project is a basic REST API built with Fastify and TypeScript. It provides endpoints to manage cats and dogs.

## Table of Contents

- [Basic REST API](#basic-rest-api)
  - [Table of Contents](#table-of-contents)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Endpoints](#endpoints)
    - [Cats](#cats)
    - [Dogs](#dogs)
    - [Ping](#ping)
  - [Environment Variables](#environment-variables)
  - [Scripts](#scripts)
  - [License](#license)

## Installation

1. Clone the repository:
  ```sh
  git clone git@github.com:threes-was-taken/basic-rest-api.git
  cd basic-rest-api
  ```
2. Install dependencies:
  ```sh
  yarn install
  ```

3. Create a .env file based on the provided .env example:
  ```sh
  cp .env.example .env
  ```

## Usage
To start the development server, run:
  ```sh
  yarn dev
  ```

To build the project, run:
  ```sh
  yarn build
  ```

To start the production server, run:
  ```sh
  yarn start
  ```

## Endpoints
### Cats
- `GET /api/v1/cats` - Retrieve a list of cats

### Dogs
- `GET /api/v1/dogs` - Retrieve a list of dogs

### Ping
- `GET /api/v1/ping` - Check if the server is running

## Environment Variables
The following environment variables are used in this project:

`PORT` - The port on which the server runs (default: 3000)  
`NODE_ENV` - The environment in which the server runs (default: development)  
`LOG_LEVEL` - The log level for the server (default: info)  
`LOG_PRETTY` - Whether to pretty-print logs (default: false)

## Scripts
`yarn dev` - Start the development server
`yarn build` - Build the project
`yarn start` - Start the production server
`yarn lint` - Run ESLint
`yarn format` - Run Prettier
`yarn test` - Run tests
`yarn test:watch` - Run tests in watch mode

## License
This project is licensed under the [MIT License](LICENSE.md).