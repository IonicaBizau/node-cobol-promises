[![cobol-promises](http://i.imgur.com/DfsVV3F.png)](#)

# cobol-promises [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/cobol-promises.svg)](https://www.npmjs.com/package/cobol-promises) [![Downloads](https://img.shields.io/npm/dt/cobol-promises.svg)](https://www.npmjs.com/package/cobol-promises) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> COBOL bridge for NodeJS with promises support.

## Installation

```sh
$ npm i --save cobol-promises
```

## Example

```js
// Dependencies
var Cobol = require("cobol-promises")
  , Promise = require("promiscuous")
  ;

// Create a hello world
var helloWorld1 = Cobol(function () { /*
       IDENTIFICATION DIVISION.
       PROGRAM-ID. HELLO.
       PROCEDURE DIVISION.

       PROGRAM-BEGIN.
       DISPLAY "Hello world".

       PROGRAM-DONE.
       STOP RUN.
 */ });

// Create another hello world
var helloWorld2 = Cobol(function () { /*
       IDENTIFICATION DIVISION.
       PROGRAM-ID. HELLO.
       PROCEDURE DIVISION.

       PROGRAM-BEGIN.
       DISPLAY "Hello world second time!".

       PROGRAM-DONE.
       STOP RUN.
 */ });

Promise.all([helloWorld1, helloWorld2]).then(function (res) {
    console.log(res);
}).catch(function(err) {
    console.log("Something bad happened!" + err);
});
// => ["Hello world", "Hello world second time!"]
```

## Documentation

### `CobolPromises(input, options, callback)`
The function receives the [same parameters like the `cobol` package](https://github.com/IonicaBizau/node-cobol#documentation), but returns a promise.

#### Params
- **Object** `input`: See [`cobol` docs](https://github.com/IonicaBizau/node-cobol#documentation).
- **Object** `options`: See [`cobol` docs](https://github.com/IonicaBizau/node-cobol#documentation).
- **Function** `callback`: See [`cobol` docs](https://github.com/IonicaBizau/node-cobol#documentation).

#### Return
- **Promise** The COBOL promise you.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md