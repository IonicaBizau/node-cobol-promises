[![cobol-promises](http://i.imgur.com/DfsVV3F.png)](#)

# cobol-promises [![Support this project][donate-now]][paypal-donations]

COBOL bridge for NodeJS with promises support.

## Installation

```sh
$ npm i cobol-promises
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

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md