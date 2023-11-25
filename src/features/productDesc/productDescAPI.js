export function fetchPrductDetails(prod_ID) {
    return new Promise(async (resolve) => {
      const response = await fetch(`https://test.cyclecircle.one/api/v1/product/${prod_ID}`);
      const data = await response.json();
      resolve({ data });
    });
  }