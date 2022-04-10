  var turkishKeyboard = [
    {
      "0": "Q",
      "1": "Ü",
      "2": "E",
      "3": "R",
      "4": "T",
      "5": "Y",
      "6": "U",
      "7": "İ",
      "8": "O",
      "9": "P",
      "10": "Ö",
      "11": "Ğ"
    },
    {
      "0": "A",
      "1": "S",
      "2": "D",
      "3": "F",
      "4": "G",
      "5": "H",
      "6": "J",
      "7": "K",
      "8": "L",
      "9": "I",
      "10": "Ə",
    },
    {
      "0": "Z",
      "1": "X",
      "2": "C",
      "3": "V",
      "4": "B",
      "5": "N",
      "6": "M",
      "7": "Ç",
      "8": "Ş",
    }
  ];
  // DEMO: Turkish Keys: end
  
$(document).ready(() => {
      // DEMO: KioskBoard Run: begin
  KioskBoard.run('.js-kioskboard-input', {
    keysArrayOfObjects: turkishKeyboard,
    // keysNumpadArrayOfNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
    // keysSpecialCharsArrayOfStrings: ['a', 'b', 'c'],
    // keysJsonUrl: 'kioskboard-keys-turkish.json',
    language: 'tr',
    keysFontFamily: 'Barlow',
    keysFontWeight: '500',
    // keysFontSize: '20px',
    // allowRealKeyboard: true,
    // allowMobileKeyboard: true,
    // keysAllowSpacebar: false,
  });
  // DEMO: KioskBoard Run: end
  
 
})
  