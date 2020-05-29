# Image Editor

An Image Editing and Cropping application that provides a cropping interface to generate 4 different sizes of a fixed
size square image. The application runs completely on the client side and uses **Firebase** to store images.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

You need to have `node@12` and `yarn` installed on your system to run this application locally.

Also, you need to create a `.env` file with your firebase configuration.
```shell script
apiKey=<YOUR apiKey>
authDomain=<YOUR authDomain>
databaseURL=<YOUR databaseURL>
projectId=<YOUR projectId>
storageBucket=<YOUR storageBucket>
messagingSenderId=<YOUR messagingSenderId>
appId=<YOUR appId>
```

### Installing

To install project dependencies run:
```shell script
yarn install
```

## Running the tests

You can run the unit tests using the command:
```shell script
yarn test
```

## Deployment

This project uses **Firebase Hosting** for deployment.
To deploy using **Firebase** follow [this documentation](https://firebase.google.com/docs/hosting#implementation_path).

## Built With

* [React](https://reactjs.org/) - The library used
* [Firebase](https://firebase.google.com/) - Deployment and storage service
* [Webpack](https://webpack.js.org/) - Asset bundling
* [Travis](https://travis-ci.com/) - CI & CD tool
* [react-cropper](https://roadmanfong.github.io/react-cropper/) - Image cropping UI

## Authors

* **Surya Kant Bansal** - *Initial work* - [skb1129](https://github.com/skb1129)
