import endpoint from "./endpoint.js";

export async function getIds(products) {
  return Promise.all(
    products.map((product) =>
      fetch(`${endpoint.belianiUs}:7777/product-ids/${product.main_id}`)
    )
  )
    .then((r) => Promise.all(r.map((ids) => ids.json())))
    .then((r) => Promise.all(r.map((ids) => ids)))
    .catch((err) => {
      throw new Error(err);
    });
}

export async function getLink(id) {
  try {
    const response = await fetch(
      `${endpoint.belianiUs}:7777/product-links/${id}`
    );
    return await response.json();
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProduct(product) {
  try {
    const response = await fetch(`${endpoint.belianiUs}:7777/get-products/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product),
    })
    const data = await response.json();
    return data
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductPrice(id) {
  try {
    const response = await fetch(
      `${endpoint.belianiUs}:7777/product/${id}`
    ).then((r) => r.json());

    const data = JSON.parse(response.res)[id];
    return data;
  } catch (error) {
    throw new Error(error);
  }
}

export async function getProductsPrice(ids) {
  try {
    const response = await fetch(
      `${endpoint.belianiUs}:7777/products/?ids=${JSON.stringify(ids)}`
    ).then((r) => r.json());
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
