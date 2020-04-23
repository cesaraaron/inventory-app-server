# Inventory-App Server
The server of [inventory-app][2]

# Getting started
### Prerequisites
- Yarn

### Installing

```sh
# Clone the repo
$ git clone https://github.com/cesaraaron/inventory-app-server && cd inventory-app-server

# Install dependencies
$ yarn install
```

If you already have a prima server up and running, create a `.env.local` file on the root directory with the following keys set to:

```sh
PRISMA_ENDPOINT= # the url of the prisma server
PRISMA_SECRET= # can be anything
APP_SECRET= # can be anything
```

Then run:

```sh
$ yarn deploy
```

If you don't have a server:

```sh
$ yarn deploy -n
```

When prompt:

1. Use a demo server.

2. If you haven't registered with Prisma Cloud before, the CLI will now open a browser window asking you to sign up.

3. Follow the instructions in the browser to register with Prisma Cloud.

4. Select either demo-eu1 or demo-us1

5. Just confirm the suggested values by hitting Enter two times.

Copy the `endpoint` value of [./database/prisma.yml](./database/prisma.yml) and paste it into `PRISMA_ENDPOINT` of `.env.local`

Start the development server:

```sh
$ yarn dev
```

# Deployment
### Prerequisites
- [yarn](https://yarnpkg.com/lang/en/docs/install/)
- [docker](https://docs.docker.com/install/)
- [docker-compose](https://docs.docker.com/compose/install/#install-compose)
- [pm2](https://github.com/Unitech/pm2)
- [dotenv-cli](https://github.com/entropitor/dotenv-cli)

> Make sure the `managementApiSecret` of [docker-compose.yaml](./docker-compose.yml) matches the `PRISMA_MANAGEMENT_API_SECRET` in `.env.production` before deploying.



### Installing

```sh
# Clone the repo
$ git clone https://github.com/cesaraaron/inventory-app-server && cd inventory-app-server


# Install dependencies
$ yarn install

# Fetch the prisma & mysql docker images and run them in the background
$ docker-compose up -d

# Build the graphql-yoga server
$ yarn build

# Create a local .env.production file on your server and add your env variables
# If you already have a .env.production file with all the 4 varialbes set, skip this step.
$ cp .env .env.production && vim .env.production

# Run the graphql-yoga server in the background
$ dotenv -e .env.production -- pm2 start dist/index.js --name inventory-app-server
```

# Built with
- [prisma](https://github.com/prisma/prisma)
- [graphql-yoga](https://github.com/prisma/graphql-yoga)
- [typescript](https://github.com/Microsoft/TypeScript)

# License
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE.md) file for details


[1]: https://www.prisma.io/docs/tutorials/deploy-prisma-servers/digital-ocean-(manual)-texoo6aemu/

[2]: https://github.com/cesaraaron/inventory-app
