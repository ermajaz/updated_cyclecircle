export function fetchAllCategoryProducts(CategoryID) {
    return new Promise(async (resolve) => {
        const response = await fetch(`http://139.59.60.238:8000/api/v1/product_categories/${CategoryID}`);
        const data = await response.json();
        resolve({ data });
    });
}
export function fetchAllSubCategoryProducts(SubCategoryID) {
    return new Promise(async (resolve) => {
        const response = await fetch(`https://test.cyclecircle.one/api/v1/product_subcategories/${SubCategoryID}`);
        const data = await response.json();
        resolve({ data });
    });
}
export function fetchAllSubCategories(CategoryID) {
    return new Promise(async (resolve) => {
        const response = await fetch(`https://test.cyclecircle.one/api/v1/subCategories/${CategoryID}`);
        const data = await response.json();
        resolve({ data });
    });
}
export function fetchAllBrands() {
    return new Promise(async (resolve) => {
        const response = await fetch(`https://test.cyclecircle.one/api/v1/brand`);
        const data = await response.json();
        resolve({ data });
    });
}
export function fetchAllMaterials() {
    return new Promise(async (resolve) => {
        const response = await fetch(`https://test.cyclecircle.one/api/v1/material`);
        const data = await response.json();
        resolve({ data });
    });
}