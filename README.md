# Foxbox challenge
This is my submission for the code challenge from [Foxbox](https://foxbox.co/)

<a href="#badge">
  <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square">
</a>

## Installation

```
yarn
cd ios
pod install

react-native run-[ios, android]
```

## Using
* Redux
* Redux Thunk
* React Native Elements
* React Navigation
* React Native Linear Gradient
* ReduxSauce
* Seamless Immutable

## How to make the list more performant
First, make use of virtualzation. I already use FlatList which comes with it out of the box.
Cache images, one option is to use [fast image](https://github.com/DylanVann/react-native-fast-image).
Use Pure Components or `React.memo()` for function components.

## License
[MIT](https://choosealicense.com/licenses/mit/)