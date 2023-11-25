export function fetchAllNavigations() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://test.cyclecircle.one/api/v1/categories");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllHotlists() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://localhost:8080/hotlists");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllPromises() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://localhost:8080/promises");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllBanners() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://localhost:8080/banners");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllSpotlights() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://localhost:8080/spotlights");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllOurBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://localhost:8080/our_brands");
    const data = await response.json();
    resolve({ data });
  });
}
export function fetchAllInclusiveBrands() {
  return new Promise(async (resolve) => {
    const response = await fetch("https://localhost:8080/inclusive_brands");
    const data = await response.json();
    resolve({ data });
  });
}
