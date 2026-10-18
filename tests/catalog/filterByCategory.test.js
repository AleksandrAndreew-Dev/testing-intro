const products = require('../../src/data/products');
const { filterByCategory } = require('../../src/catalog');

function findIds(items) {
  return items.map(item => item.id)
}
describe('filterByCategory', () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(findIds(filterByCategory(products, 'all'))).toStrictEqual([1, 2, 3, 4, 5, 6])
  });
  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(findIds(filterByCategory(products, undefined))).toStrictEqual([1, 2, 3, 4, 5, 6])
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(findIds(filterByCategory(products, ''))).toStrictEqual([1, 2, 3, 4, 5, 6])
  });
  test("'electronics' возвращает товары с ID [1, 2]", () => {
    expect(findIds(filterByCategory(products, 'electronics'))).toStrictEqual([1, 2])
  });
  test("'books' возвращает товары с ID [3, 6]", () => {
    expect(findIds(filterByCategory(products, 'books'))).toStrictEqual([3, 6])
  });
  test("'home' возвращает товары с ID [4, 5]", () => {
    expect(findIds(filterByCategory(products, 'home'))).toStrictEqual([4, 5])
  });
  test("'clothes' возвращает пустой массив", () => {
    expect(findIds(filterByCategory(products, 'clothes'))).toStrictEqual([])
  });
  test("'toys' возвращает пустой массив", () => {
    expect(findIds(filterByCategory(products, 'toys'))).toStrictEqual([])
  });
  test("'sports' возвращает пустой массив", () => {
    expect(findIds(filterByCategory(products, 'sports'))).toStrictEqual([])
  });
});
