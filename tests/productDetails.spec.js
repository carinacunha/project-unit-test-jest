const productDetails = require('../src/productDetails');
/*
  A função productDetails recebe duas strings que representam nomes de produtos, e retorna um array contendo dois objetos com os detalhes dos respectivos produtos.

  Parâmetros:
  - Uma string;
  - Uma string;

  Comportamento:
  productDetails('Alcool gel', 'Máscara')

  // Retorna:
  [
    {
      name: 'Alcool gel'
      details: {
        productId: 'Alcool gel123'
      }
    },
    {
      name: 'Máscara'
      details: {
        productId: 'Máscara123'
      }
    }
  ]

  Escreva pelo menos cinco testes para essa função para garantir que a implementação de productDetails está correta.

*/

describe('6 - Implemente os casos de teste para a função `productDetails`', () => {
  it('Verifica se a função `productDetails` tem o comportamento esperado', () => {
    // fail('Teste vazio!');
    // ESCREVA SEUS TESTES ABAIXO:
    // Teste se productDetails é uma função.
    expect(typeof productDetails).toBe('function');

    // Teste se o retorno da função é um array.
    expect(productDetails()).toEqual(Object.assign(productDetails()));

    // Teste se o array retornado pela função contém dois itens dentro.
    expect(Object.assign(productDetails()).length).toEqual(2);

    // Teste se os dois itens dentro do array retornado pela função são objetos.
    expect(typeof productDetails('alcool')).toBe('object');

    // Teste se quando passado parâmetros diferentes entre si, os dois objetos também são diferentes entre si.
    expect(productDetails()).toEqual(Object.assign(productDetails()));

    // Teste se os dois productIds terminam com 123.
    const objOne = Object.values(productDetails('alcool', 'water')[0]);
    const detailsOne = Object.values(objOne)[1];
    expect(Object.values(detailsOne)[0]).toEqual('alcool123');
  });

});
