// Dependencies
var Cobol = require("cobol")
  , Promise = require("promiscuous")
  ;

/**
 * CobolPromises
 * The function receives the [same parameters like the `cobol` package](https://github.com/IonicaBizau/node-cobol#documentation), but returns a promise.
 *
 * @name CobolPromises
 * @function
 * @param {Object} input See [`cobol` docs](https://github.com/IonicaBizau/node-cobol#documentation).
 * @param {Object} options See [`cobol` docs](https://github.com/IonicaBizau/node-cobol#documentation).
 * @param {Function} callback See [`cobol` docs](https://github.com/IonicaBizau/node-cobol#documentation).
 * @return {Promise} The COBOL promise you.
 */
function CobolPromises(input, options, callback) {
    return new Promise(function (resolve, reject) {
        Cobol(input, options, function (err, stdout, stderr) {
            if (err) { return reject(err); }
            resolve(stdout, stderr);
        });
    });
}

module.exports = CobolPromises;
