/**
 * import all from the module
 * @param {String} module the module to import all
 */
module.exports = (module) => {
  try {
    require(module);
  } catch (e) {
    throw new Error(e.message);
  }
  var m = require(module);

  Object.keys(m).forEach((key) => (global[key] = m[key]));
};
