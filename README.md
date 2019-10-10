# React Essence

## Demo

[essence.rockujemy.pl](https://essence.rockujemy.pl/)

## Description

**Project inspired with [Essence](https://colorlib.com/wp/template/essence/) eCommerce template created by [Colorlib](https://colorlib.com/)**

I would like to write some react components similar with Essence template.

## Roadmap

* Navbar
    * Logo
    * Cart Toggler
        1. Amount of all items in cart - counter
    * Menu Toggler
* Sidebar
    * Menu
    * Cart
        * Summary
        * CartItems list
            * CartItem
                1. quantity counter
                2. unit price
                3. increase button
                4. decrease button
                5. delete button
                6. CartItem details (name, type, price)

## Installation

#### Install dependencies

```
yarn install
```

#### Create dummy data

1\. Install TypeScript globally if you don't have it yet

```
npm install -g typescript
```

2\. enter to directory

```
cd assets/js/mocks/src
```

3\. run

```
tsc
```

4\. Create new Firebase project [here](https://console.firebase.google.com)

5\. Rename `firebaseConfig-example.json` with `firebaseConfig.json` (it is located inside `react-essence\assets\js\Firebase\firebaseConfig-example.json`)

6\. Get your Firebase configuration (You will find it inside `Project Overview -> General -> Your apps -> Firebase SDK snippet`)

7\. Replace data inside `firebaseConfig.json` with your firebaseConfig data

```json
{
  "apiKey": "AIzaSyC6CiPTHU4HApF09WcKpbwz4iPFynSmO_s",
  "authDomain": "react-essence.firebaseapp.com",
  "databaseURL": "https://react-essence.firebaseio.com",
  "projectId": "react-essence",
  "storageBucket": "",
  "messagingSenderId": "628617378803",
  "appId": "1:628617378803:web:6753c25ca3c7a500be7086",
  "measurementId": "G-FXXQQHV9NF"
}
```

8\. Add test data for project 

```
yarn run fixtures
```

## Development

#### Run server

```
yarn run server
```

#### Compile assets once 

```
yarn encore dev
```

#### Recompile assets automatically when files change

```
yarn encore dev --watch
```

#### Prettier

```
yarn run format
```

#### ESLint

```
yarn run lint
```
