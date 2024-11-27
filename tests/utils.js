function getVariableType(var_) {
  return Object.prototype.toString.call(var_).slice(8, -1).toLowerCase();
}