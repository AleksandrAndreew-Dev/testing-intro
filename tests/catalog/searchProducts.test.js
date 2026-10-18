const products = require('../../src/data/products');
const { searchProducts } = require('../../src/catalog');

describe('searchProducts', () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const exp = searchProducts(products, 'Наушники')[0].id;
    expect(exp).toBe(1);
  });
  test("'Чистый код' возвращает товар с ID 6", () => {
    const exp = searchProducts(products, 'Чистый код')[0].id;
    expect(exp).toBe(6);
  });
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const exp = searchProducts(products, 'Настольная лампа')[0].id;
    expect(exp).toBe(4);
  });
  test("'javascript' возвращает товар с ID 3", () => {
    const exp = searchProducts(products, 'javascript')[0].id;
    expect(exp).toBe(3);
  });
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const exp = searchProducts(products, 'ЧЕХОЛ')[0].id;
    expect(exp).toBe(5);
  });
  test("'наушники' возвращает товар с ID 1", () => {
    const exp = searchProducts(products, 'наушники')[0].id;
    expect(exp).toBe(1);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const exp = searchProducts(products, '').map(item => item.id);
    expect(exp).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const exp = searchProducts(products, '   ').map(item => item.id);
    expect(exp).toEqual([1, 2, 3, 4, 5, 6]);
  });
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const exp = searchProducts(products, '\t\n').map(item => item.id);
    expect(exp).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
