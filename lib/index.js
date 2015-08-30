// Dependencies
var Cobol = require("cobol")
  , Promise = require("promiscuous")
  ;

/**
 * Cobol
 * The function receives the [same parameters like the `cobol` package](https://github.com/IonicaBizau/node-cobol#documentation), but returns a promise.
 *
 * @name Cobol
 * @function
 * @param {Object} input See [`cobol` docs](https://github.com/IonicaBizau/node-cobol#documentation).
 * @param {Object} options See [`cobol` docs](https://github.com/IonicaBizau/node-cobol#documentation).
 * @param {Function} callback See [`cobol` docs](https://github.com/IonicaBizau/node-cobol#documentation).
 * @return {Promise} The COBOL promise you.
 */
function Cobol(input, options, callback) {
    return new Promise(function (resolve, reject) {
        if (typeof callback === "function") {
            Cobol(input, options, function (err) {
                if (err) { return reject(err); }
                resolve.apply(this, arguments);
            });
        } else {
            Cobol(input, options);
        }
    });
}

module.exports = Cobol;
