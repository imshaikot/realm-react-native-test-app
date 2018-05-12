<h1 align="center">ShowSourcing Test App</h1>

<p align="center"> `React` used for UI component, `react-native` for mobile UI and compiling,  `eslint` for code linting and standardization, `realm` database for data exchanges</p>

## Installation
(this documentation assumes that the subsequent development environment has all necessary common dependencies are installed and configured, such as node.js, yarn, xcode, Android SDK)

```bash
$ yarn
```

## Start debugging on iOS

```bash
$ yarn run:ios
```

## Start debugging on Android

```bash
$ yarn run:android
```

## Test code lint using eslint

```bash
$ npm run lint
```

## Build app package
(although there're a number of different process to get ultimate APK and IPA file)

```bash
$ yarn build:android && yarn build:ios
```
