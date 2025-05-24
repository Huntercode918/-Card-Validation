![Bandeiras de cartões](credit-card-brand-detector/credit-card-brand-detector/images/add%20all%20the%20flags%20mentioned%20in%20this%20image.png)
<p align="center">
  <img src="credit-card-brand-detector/credit-card-brand-detector/images/add%20all%20the%20flags%20mentioned%20in%20this%20image.png" alt="Bandeiras de cartões" />
</p>
# Identificador de Bandeira de Cartão de Crédito

Este projeto é uma aplicação simples em JavaScript capaz de identificar a bandeira de um cartão de crédito (Visa, MasterCard, American Express, etc.) a partir do número informado.

## Objetivos

- Identificar a bandeira do cartão com base no número (BIN).
- Demonstrar o uso do GitHub Copilot como ferramenta de auxílio ao desenvolvimento, acelerando a escrita de código e aumentando a produtividade.

## Como usar

```javascript
const { identifyBrand } = require('./creditCardUtils');

console.log(identifyBrand("4111 1111 1111 1111")); // Saída esperada: Visa
console.log(identifyBrand("5500-0000-0000-0004")); // Saída esperada: MasterCard
console.log(identifyBrand("3400 0000 0000 009"));  // Saída esperada: American Express
```

## Estrutura do Projeto

- `creditCardUtils.js`: Função principal de identificação.
- `tests/`: Testes automatizados.
- `images/`: (Opcional) Capturas de tela do projeto.
- `package.json`: Dependências e scripts do projeto.

## Testes

Execute os testes com:

```bash
npm test
```

## Tecnologias utilizadas

- Node.js
- JavaScript (ES6+)
- GitHub Copilot (sugestões de código e auxílio ao desenvolvimento)

## Licença

MIT
