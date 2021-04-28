const ftoc = function (feren) {
  let celc = (feren - 32) * (5 / 9);
  return Math.round(celc * 10) / 10;
}

const ctof = function (celc) {
  let feren = (celc * (9 / 5)) + 32;
  return Math.round(feren * 10) / 10
}

module.exports = {
  ftoc,
  ctof
}
