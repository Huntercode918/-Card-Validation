const { identifyBrand } = require('../creditCardUtils');

function testIdentifyBrand(cardNumber, expected) {
  const result = identifyBrand(cardNumber);
  if (result === expected) {
    console.log(`✅ [OK] ${cardNumber} => ${result}`);
  } else {
    console.error(`❌ [FAIL] ${cardNumber} => ${result} (esperado: ${expected})`);
  }
}

testIdentifyBrand("4111 1111 1111 1111", "Visa");
testIdentifyBrand("5500-0000-0000-0004", "MasterCard");
testIdentifyBrand("3400 0000 0000 009", "American Express");
testIdentifyBrand("6011 0000 0000 0004", "Discover");
testIdentifyBrand("6363680000000000", "Elo");
testIdentifyBrand("6062825624254001", "Hipercard");
testIdentifyBrand("1234567890123456", "Desconhecida");