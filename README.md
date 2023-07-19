# Credit Cards Type Validation

## Description

This is a simples credit card type validation which detect card type like Visa, Mastercard, American Express and also gives number of digits of CVC of specific card.


## Installation

Use the package manager [npm](https://www.npmjs.com/) to install dependencies.

```bash
npm i cards-validation-2btech
```

## Usage

```javascript
const { cardType, cvcLength } = require('cards-validation-2btech');

console.log(cardType('4111111111111111')); // Visa
console.log(cardType('5555555555554444')); // Mastercard
console.log(cardType('378282246310005')); // American Express
console.log(cardType('3530111333300000')); // JCB
console.log(cardType('6304000000000000')); // Maestro

console.log(cvcLength('4111111111111111')); // 3
console.log(cvcLength('5555555555554444')); // 3
console.log(cvcLength('378282246310005')); // 4
console.log(cvcLength('3530111333300000')); // 3
console.log(cvcLength('6304000000000000')); // 3
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
ISC

## Author
[2btech LLC]( https://www.2btechinc.com/ )

[kha333n]( https://github.com/kha333n )

**NOTE: This package is build for our specific needs, if you want to add more card types or want to contribute, please feel free to contact us.**

**OR**

**if you have very basic need too and want to use this package in your project, please make sure to test it first to check weather it fulfill your needs or not.**
