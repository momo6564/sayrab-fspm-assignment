export function normalizeProduct(product) {
  if (!product || typeof product !== 'object') throw new TypeError('Product required');
  const price = Number(product.price);
  if (!product.id || !product.name || !Number.isFinite(price) || price < 0)
    throw new TypeError('Product must contain id, name and nonnegative price');
  return {
    id: String(product.id),
    name: String(product.name).trim(),
    category: String(product.category ?? 'Other').trim(),
    price,
    imageUrl: typeof product.imageUrl === 'string' ? product.imageUrl : '',
    available: product.available !== false,
    options: Array.isArray(product.options) ? [...product.options] : [],
  };
}

export function browseProducts(products, { category = '', availableOnly = false, query = '' } = {}) {
  if (!Array.isArray(products)) throw new TypeError('products must be an array');
  const categoryNeedle = String(category).trim().toLowerCase();
  const queryNeedle = String(query).trim().toLowerCase();
  return products.map(normalizeProduct).filter((product) =>
    (!categoryNeedle || product.category.toLowerCase() === categoryNeedle) &&
    (!queryNeedle || product.name.toLowerCase().includes(queryNeedle)) &&
    (!availableOnly || product.available)
  );
}
