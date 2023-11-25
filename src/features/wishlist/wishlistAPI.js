export function fetchAllWishlists() {
    return new Promise(async (resolve) => {
      const response = await fetch("https://localhost:8080/wishlists");
      const data = await response.json();
      resolve({ data });
    });
  }