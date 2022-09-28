function storesRomans() {
  const romans = {
    I : 1,
    IV : 4,
    V : 5,
    IX : 9,
    X : 10,
    XL : 40,
    L : 50,
    XC : 90,
    C : 100,
    CD : 400,
    D : 500,
    CM : 900,
    M : 1000,
  }
  return romans;
}

function romanNumerals(stringRomanNumerals) {
  const numbersRomans = storesRomans();
  let result = 0;
  for (let i = 0; i < stringRomanNumerals.length; i += 1) {
    for (let key in numbersRomans) {
      if (stringRomanNumerals[i] === key) {
        result += numbersRomans[key];
      }
    }
  }
  return result;
}
console.log(romanNumerals('CMXCIX'))