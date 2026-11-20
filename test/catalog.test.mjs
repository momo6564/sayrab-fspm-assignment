import test from 'node:test';
import assert from 'node:assert/strict';
import { browseProducts, normalizeProduct } from '../src/merchandise/catalog.mjs';

const products = [
  { id: 'h1', name: 'Campaign Hoodie', category: 'Apparel', price: 25, available: true, options: ['S', 'M'] },
  { id: 'm1', name: 'Campaign Mug', category: 'Accessories', price: 10, available: false },
  { id: 't1', name: 'Support Tee', category: 'Apparel', price: 15, available: true },
];
test('product cards expose normalized display information', () => {
  const item = normalizeProduct(products[0]);
  assert.equal(item.name, 'Campaign Hoodie');
  assert.equal(item.price, 25);
  assert.deepEqual(item.options, ['S', 'M']);
});
test('category, text search and availability filters work together', () => {
  assert.deepEqual(browseProducts(products, { category: 'APPAREL', availableOnly: true }).map(p => p.id), ['h1', 't1']);
  assert.deepEqual(browseProducts(products, { query: 'mug', availableOnly: true }), []);
});
test('invalid products are rejected', () => {
  assert.throws(() => normalizeProduct({ id: 'a', name: 'Broken', price: -1 }), TypeError);
});
