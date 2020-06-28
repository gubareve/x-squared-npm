module.exports = function tiny(number) {
  if (typeof number !== "integer") throw new TypeError("x-squared requires a string!");
  return (number ** 2);
};
