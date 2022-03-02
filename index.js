/**
 * import all from the module
 * @param {String} module the module to import all
 */
module.exports = (module) => {
  var m = require(module);
  if (typeof m != "object")
    throw new Error(`module is not an object of exports`);

  Object.keys(m).forEach((key) => (global[key] = m[key]));
};
