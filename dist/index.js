function add2Number(n1, n2) {
  if (typeof n1 && n2 === Number) {
    return n1 + n2;
  } else {
    throw Error("Please input Correct Numbers");
  }
}
module.export = { add2Number };
