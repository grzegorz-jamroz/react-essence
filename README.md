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

1\. Install dependencies

```
yarn install
```

2\. Create new Firebase project [here](https://console.firebase.google.com)

3\. Rename `firebaseConfig-example.json` with `firebaseConfig.json` (it is located inside `react-essence\assets\js\Firebase\firebaseConfig-example.json`)

4\. Get your Firebase configuration (You will find it inside `Project Overview -> General -> Your apps -> Firebase SDK snippet`)

5\. Replace data inside `firebaseConfig.json` with your firebaseConfig data

```json
{
  "apiKey": "apiKey",
  "authDomain": "authDomain",
  "databaseURL": "databaseURL",
  "projectId": "projectId",
  "storageBucket": "storageBucket",
  "messagingSenderId": "messagingSenderId",
  "appId": "appId",
  "measurementId": "measurementId"
}
```

6\. Add test data for project - check: [Add fixtures to Firebase](#add-fixtures-to-firebase)

7\. Compile assets (css, js, images, fonts etc.) - check: [Compile assets once](#compile-assets-once)

8\. Run server - check: [Run server](#run-server)

9\. Open in browser `http://localhost:3000`

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

#### Add fixtures to Firebase 
(it removes all collections and insert fresh test data)

```
yarn run fixtures
```

#### Prettier

```
yarn run format
```

#### ESLint

```
yarn run lint
```

#### Build mocks
(if you change some TypeScripts inside `react-essence\assets\js\mocks\src` you can compile it with this command)

```
yarn run mocks
```
