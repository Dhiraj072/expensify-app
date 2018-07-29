# Expensify-App

A web application to track your expenses. 
Demo application is running live [here](https://your-expense-tracker.herokuapp.com/)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

* Yarn v1.3.2 - Installation instructions [here](https://yarnpkg.com/lang/en/docs/install/)
* Node v8.9.3 - Installation instructions [here](https://nodejs.org/en/download/package-manager/)
* Firebase project - Helpful if you are familiar with using firebase. Read [setting up firebase for your project] https://firebase.google.com/docs/web/setup

### Installing

Clone the repository and cd to it

```
$ git clone https://github.com/Dhiraj072/expensify-app
$ cd expensify-app
```

Install packages

```
$ yarn install
```

Run dev server

```
$ yarn install
```

Create firebase properties file

```
$ vi .env.development
```

And fill up following firebase account properties in the file

```
FIREBASE_API_KEY=<>
FIREBASE_AUTH_DOMAIN=<>
FIREBASE_DATABASE_URL=<>
FIREBASE_PROJECT_ID=<>
FIREBASE_STORAGE_BUCKET=<>
FIREBASE_MESSAGING_SENDER_ID=<>
```

Run development server

```
$ yarn dev-server
```


Finally, access the application at http://localhost:8081/

## Built With

* [React](https://reactjs.org/) - The web framework used
* [Redux](https://redux.js.org/) - State container
* [Yarn](https://yarnpkg.com/en/) - Dependency Management
* [Webpack](https://webpack.js.org/) - Module bundler
* [Jest](https://jestjs.io/) - Testing framework
* [Firebase](https://firebase.google.com/) - Databse

## Authors

* [Dhiraj](https://github.com/dhiraj072)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* [Andrew Mead](https://mead.io/) for his excellent [udemy course](https://www.udemy.com/react-2nd-edition/)
