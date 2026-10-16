const products = require('../../src/data/products');
const { sortProductsByPrice } = require('../../src/catalog');

function findIdsAll(items) {
  return items.map(item => item.id)
}

function findSomeIds(items, ...ids) {
  const wanted = new Set(ids);
  return items.filter(item => wanted.has(item.id)).map(item => item.id);
}

describe('sortProductsByPrice', () => {
  test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
    const exp = findIdsAll(sortProductsByPrice(products, 'asc'));
    expect(exp).toEqual([3, 6, 5, 4, 2, 1]);
  });
  test('все товары без направления сортируются как [3, 6, 5, 4, 2, 1]',
    () => {
      const exp = findIdsAll(sortProductsByPrice(products));
      expect(exp).toEqual([3, 6, 5, 4, 2, 1]);
    }
  );
  test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]",
    () => {
      const exp = findSomeIds(sortProductsByPrice(products, 'asc'), 3, 4, 1);
      expect(exp).toEqual([3, 4, 1]);
    }
  );
  test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]",
    () => {
      const exp = findIdsAll(sortProductsByPrice(products, 'desc'));
      expect(exp).toEqual([1, 2, 4, 5, 6, 3]);
    }
  );
  test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]",
    () => {
      const exp = findSomeIds(sortProductsByPrice(products, 'desc'), 3, 1, 4);
      expect(exp).toEqual([1, 4, 3]);
    }
  );
  test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]",
    () => {
      const exp = findSomeIds(sortProductsByPrice(products, 'desc'), 5, 2, 6);
      expect(exp).toEqual([2, 5, 6]);
    }
  );
  test("'asc' не меняет исходный массив [1, 3, 4]", () => {
    const original = products.filter(({ id }) => [1, 3, 4].includes(id));
    const before = original.map(item => item.id);

    const result = sortProductsByPrice(original, 'asc');
    expect(original.map(p => p.id)).toEqual(before);
    expect(original.map(p => p.id)).toEqual([1, 3, 4]);
    expect(result).not.toBe(original);
  });
  test("'desc' не меняет исходный массив [1, 3, 4]",
    () => {
      const original = products.filter(({ id }) => [1, 3, 4].includes(id));
      const before = original.map(item => item.id);

      const result = sortProductsByPrice(original, 'desc');
      expect(original.map(p => p.id)).toEqual(before);
      expect(original.map(p => p.id)).toEqual([1, 3, 4]);
      expect(result).not.toBe(original);
    }
  );
  test('направление по умолчанию не меняет исходный массив всех товаров',
    () => {
      const original = [...products];
      const before = original.map(item => item.id);
      const result = sortProductsByPrice(original);
      expect(original.map(item => item.id)).toEqual(before);
      expect(result).not.toBe(original);
    }
  );
});
