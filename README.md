# superchat-frontend-challenge
## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NodeJS](https://nodejs.org/) and NPM

### 1.2 Project configuration

Start by cloning this project on your workstation.

``` sh
https://github.com/BohdanLevkoDigis/superchat-frontend-challenge.git
```

The next thing will be to install all the dependencies of the project.

```sh
npm i && cd client && npm i
```

Once the dependencies are installed, add a directory in the root folder "config" , add configuration file "default.json" ( you can use example {
  "port": 5000,
  "mongoUrl": "mongodb+srv://admin:dfcpassword@cluster0.fdxei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
}
)

Now you a ready to go!

### 1.3 Launch and discover

You are now ready to launch the application using the command below.

```sh
npm run dev
```
```

You can now head to `http://localhost:3000/` and see the SPA. 

## 2. Project structure

This template was made with a well-defined directory structure.

```sh
client
src/
├── src
│   ├── utils
│   ├── services
│   ├── assets/  # The common assets
│   ├── components/ 
│   │   ├── CardPreview/ # Component to preview repo card 
│   │   │   ├── CardPreview.tsx 
│   │   │   ├── styles.ts 
│   │   ├── FormComponent/  # Form component to receive data from user
│   │   │   ├── FormComponent.tsx  # The model that will be returned in the response
│   │   │   ├── styles.ts 
│   ├── pages/  # Rendering Pages
│   │   ├── CardPage/ # Page to render each card
│   │   │   ├── CardPage.tsx 
│   │   │   ├── styles.ts 
│   │   ├── LinkCreation/  # Page of creation new link
│   │   │   ├── LinkCreation.tsx  # The model that will be returned in the response
│   │   │   ├── styles.ts 
│   └── App.tsx / #Root component
│   └── App.css

server
src/
├── uploads / static files
├── config / config of project
├── src
│   ├── models
│   ├── services
│   ├── utils
│   ├── assets/  # The common assets
│   ├── repoLink  / controler, service, route for repoLink
│   │   ├── repoLink.routes.ts
│   │   ├── repoLink.service.ts
│   │   ├── repoLink.controler.ts
│   └── index.ts / #Root component
│   └── index.d.ts 
```

## 3. Default NPM commands

The NPM commands below are already included with this template and can be used to quickly run, build and test your project.

```sh
# Start the application server using the ts-node
npm run server 

# Start the application client
npm run client
```

## 4. Project goals

The goal of this project is to provide SPA for a test task.

## 5. Tech.stack

- React
- TypeScript
- Express
- MongoDB
- Axios
