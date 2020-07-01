/**
Will return true if some argument is null or undefined.
*/
function isNullOrUndefined (...args) {
  for (const arg of args) {
    if (typeof arg === 'undefined' || arg == null) {
      return true;
    }
  }
  return false;
}

module.exports = isNullOrUndefined;
