function identifyBrand(cardNumber) {
  cardNumber = cardNumber.replace(/\s|-/g, '');

  if (cardNumber.startsWith('4')) {
    return "Visa";
  } else if (["51", "52", "53", "54", "55"].includes(cardNumber.slice(0, 2))) {
    return "MasterCard";
  } else if (["34", "37"].includes(cardNumber.slice(0, 2))) {
    return "American Express";
  } else if (cardNumber.startsWith('6011') || cardNumber.startsWith('65')) {
    return "Discover";
  } else if (
    ["636368", "438935", "504175", "451416", "636297"].includes(cardNumber.slice(0, 6)) ||
    ["5067", "4576", "4011"].includes(cardNumber.slice(0, 4))
  ) {
    return "Elo";
  } else if (
    ["606282", "384100", "384140", "384160"].includes(cardNumber.slice(0, 6))
  ) {
    return "Hipercard";
  } else {
    return "Desconhecida";
  }
}

module.exports = { identifyBrand };