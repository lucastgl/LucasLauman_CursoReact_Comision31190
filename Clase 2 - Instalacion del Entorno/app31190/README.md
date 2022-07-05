# Proyect Ecommerce "My Way"

> This project is the final deliverable for the React course taught at Coder House.

## Running Locally

```bash
$ git clone https://github.com/lucastgl/LucasLauman_CursoReact_Comision31190/tree/EntregaFinal_EcommerceRACT
$ cd app31190
$ npm install
$ npm start
```

## Environment Variables

This project uses firebase. In the service/firebase directory, inside the index.js file, you 
will find that the configuration variables have the following constants:

  - apiKey: process.env.REACT_APP_apiKey,
  - authDomain: process.env.REACT_APP_authDomain,
  - projectId: process.env.REACT_APP_projectId,
  - storageBucket: process.env.REACT_APP_storageBucket,
  - messagingSenderId: process.env.REACT_APP_messagingSenderId,
  - appId: process.env.REACT_APP_appId

For security reasons the original .env file was not pushed, but we can find the .env.example. 
In this file we can find the same constants which can be filled with data from a new database for testing. 

Remember to rename the .env.example file to .env for proper operation.

## Necessary collections and their fields

For products to appear in the web menu and their respective categories, a collection 
called "products" must be generated and each product must have the fields:

[string] category:
[string] description:
[string] img:
[string] material:
[string] name:
[string] origin:
[string] price:
[number] stock:

In category, the possible fields are "Sneakers", "Joggers" and "Hodies".

## Built Using

- [Create-React-App](https://create-react-app.dev/)
- [Firebase](https://firebase.com)
- [Font Awesome](https://fontawesome.com/kits)

## Demonstration of purchase

![](DemoDeCompra.gif)