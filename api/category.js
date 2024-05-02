import endpoint from "./endpoint.js";

export async function getCategory(category, country) {
  try {
    const response = await fetch(
      `${endpoint.belianiUs}:7777/category/?category=${category}&country=${country}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
