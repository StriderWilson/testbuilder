// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var china1 = parseInt(cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] + cardNumber[4] + cardNumber[5]);
  var china2 = parseInt(cardNumber[0] + cardNumber[1] + cardNumber[2]);
  var china3 = parseInt(cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3]);
  var switch4 = parseInt(cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3]);
  var switch6 = parseInt(cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] + cardNumber[4] + cardNumber[5]);
  if ((cardNumber[0] + cardNumber[1] === '38') && (cardNumber.length === 14)) {
    return "Diner's Club";
  } else if ((cardNumber[0] + cardNumber[1] === '39') && (cardNumber.length === 14)) {
    return "Diner's Club";
  } else if ((switch4 === 4903 || switch4 === 4905 || switch4 === 4911 || switch4 === 4936 || switch4 === 6333 || switch4 === 6759) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return "Switch";
  } else if ((switch6 === 564182 || switch6 === 633110) && (cardNumber.length === 16 || cardNumber.length === 18 || cardNumber.length === 19)) {
    return "Switch";
  } else if ((cardNumber[0] + cardNumber[1] === '34') && (cardNumber.length === 15)) {
    return "American Express";
  } else if ((cardNumber[0] + cardNumber[1] === '37') && (cardNumber.length === 15)) {
    return "American Express";
  } else if ((cardNumber[0] === '4') && (cardNumber.length === 13 || cardNumber.length === 16 ||   cardNumber.length === 19)) {
    return "Visa"
  } else if ((cardNumber[0] + cardNumber[1] === '51') && (cardNumber.length === 16)) {
    return 'MasterCard'
  } else if ((cardNumber[0] + cardNumber[1] === '52') && (cardNumber.length === 16)) {
    return 'MasterCard'
  } else if ((cardNumber[0] + cardNumber[1] === '53') && (cardNumber.length === 16)) {
    return 'MasterCard'
  } else if ((cardNumber[0] + cardNumber[1] === '54') && (cardNumber.length === 16)) {
    return 'MasterCard'
  } else if ((cardNumber[0] + cardNumber[1] === '55') && (cardNumber.length === 16)) {
    return 'MasterCard'
  } else if ((cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] === '6011') && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover'
  } else if ((644 <= parseInt(cardNumber[0] + cardNumber[1] + cardNumber[2]) && parseInt(cardNumber[0] + cardNumber[1] + cardNumber[2]) <= 649) && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover'
  } else if ((cardNumber[0] + cardNumber[1] === '65') && (cardNumber.length === 16 || cardNumber.length === 19)) {
    return 'Discover'
  } else if ((cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] === '5018') && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
    return 'Maestro'
  } else if ((cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] === '5020') && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
    return 'Maestro'
  } else if ((cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] === '5038') && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
    return 'Maestro'
  } else if ((cardNumber[0] + cardNumber[1] + cardNumber[2] + cardNumber[3] === '6304') && (cardNumber.length >= 12 && cardNumber.length <= 19)) {
    return 'Maestro'
  } else if ((china1 >= 622126 && china1 <= 622925) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
    return 'China UnionPay'
  } else if ((china2 >= 624 && china2 <= 626) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
    return 'China UnionPay'
  } else if ((china3 >= 6282 && china3 <= 6288) && (cardNumber.length >= 16 && cardNumber.length <= 19)) {
    return 'China UnionPay'
  }
};


