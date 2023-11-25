import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import { listingProduct } from "../../../data";
import { Link, useParams } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { FavoriteBorderOutlined } from "@mui/icons-material";
import DoneOutlineOutlinedIcon from "@mui/icons-material/DoneOutlineOutlined";
import ListingPagination from "../Pagination/ListingPagination";
import SideFilterComponent from "../Filter/SideFilterComponent";
import ListingHeader from "../Filter/FilterHeader/ListingHeader";
import SubCategoriesComponent from "../SubCategories/SubCategoriesComponent";
import { useDispatch, useSelector } from "react-redux";
import { selectAllFilter } from "../../../store/slices/allFilterSlice";
import {
  fetchAllCategoryProductsAsync,
  selectAllCategoryProducts,
  setSelectedCategoryID,
  fetchAllSubCategoriesAsync,
  selectAllSubCategories,
} from "../../../features/listingPage/listingPageSlice";
import { setBreadcrumb } from "../../../store/slices/breadCrumbsSlice";

function ListingProduct() {
  const dispatch = useDispatch();
  const listingProduct = useSelector(selectAllCategoryProducts);
  const subCategories = useSelector(selectAllSubCategories);
  const allfilter = useSelector(selectAllFilter);
  // console.log("filter", allfilter);
  const { CategoryID, categoryName } = useParams();
  // console.log(CategoryID, categoryName);

  useEffect(() => {
    // Dispatch action to set selected CategoryID when component mounts
    dispatch(setSelectedCategoryID(CategoryID));
    // Fetch products based on CategoryID
    dispatch(fetchAllCategoryProductsAsync(CategoryID));
    dispatch(fetchAllSubCategoriesAsync(CategoryID));
    // Update breadcrumb
    dispatch(
      setBreadcrumb({
        categoryId: CategoryID,
        category: categoryName,
        CategoryID:CategoryID,
        SubCategoryID:null,
        subCategory: "",
        productName: "",
        ProductID:null,
      })
    );
  }, [dispatch, CategoryID, categoryName]);

  const [items, setItems] = useState(listingProduct?.products || []);

  useEffect(() => {
    if (listingProduct && listingProduct.products) {
      // Check if allfilter has brands or materials or rating or minPrice or maxPrice
      if (
        allfilter.brands.length > 0 ||
        allfilter.materials.length > 0 ||
        allfilter.rating ||
        allfilter.minPrice ||
        allfilter.maxPrice
      ) {
        // Filter the products based on the brands, materials, rating, and price range
        const filteredItems = listingProduct.products.filter(
          (product) =>
            (allfilter.brands.length === 0 ||
              allfilter.brands.includes(product.SKU[0]?.manufacture_name)) &&
            (allfilter.materials.length === 0 ||
              allfilter.materials.includes(product.SKU[0]?.material_name)) &&
            (allfilter.rating === 0 ||
              parseFloat(product?.net_rating) >= parseFloat(allfilter.rating)) &&
            (allfilter.minPrice === 0 ||
              parseFloat(product.SKU[0]?.Sale_price) >=
                parseFloat(allfilter.minPrice)) &&
            (allfilter.maxPrice === 0 ||
              parseFloat(product.SKU[0]?.Sale_price) <=
                parseFloat(allfilter.maxPrice))
        );
  
        // Create a shallow copy of the filteredItems array
        let sortedItems = [...filteredItems];
  
        // Sort the array based on sortPrice or sortRating
        if (allfilter.sortPrice === 'desc') {
          sortedItems.sort((a, b) => b.SKU[0].Sale_price - a.SKU[0].Sale_price);
        } else if (allfilter.sortPrice === 'asc') {
          sortedItems.sort((a, b) => a.SKU[0].Sale_price - b.SKU[0].Sale_price);
        } else if (allfilter.sortRating === 'desc') {
          sortedItems.sort((a, b) => b.net_rating - a.net_rating);
        } else if (allfilter.sortRating === 'asc') {
          sortedItems.sort((a, b) => a.net_rating - b.net_rating);
        }
  
        setItems(sortedItems);
      } else {
        // Create a shallow copy of the listingProduct.products array
        let sortedItems = [...listingProduct.products];
  
        // Sort the array based on sortPrice or sortRating
        if (allfilter.sortPrice === 'desc') {
          sortedItems.sort((a, b) => b.SKU[0].Sale_price - a.SKU[0].Sale_price);
        } else if (allfilter.sortPrice === 'asc') {
          sortedItems.sort((a, b) => a.SKU[0].Sale_price - b.SKU[0].Sale_price);
        } else if (allfilter.sortRating === 'desc') {
          sortedItems.sort((a, b) => b.net_rating - a.net_rating);
        } else if (allfilter.sortRating === 'asc') {
          sortedItems.sort((a, b) => a.net_rating - b.net_rating);
        }
  
        // If there are no brands, materials, rating, minPrice, or maxPrice in allfilter, set items to all products
        setItems(sortedItems);
      }
    }
  }, [listingProduct, allfilter]);
  
  
  

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const toggleFavorite = (id, e) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isFavourites: !item.isFavourites } : item
      )
    );
    e.preventDefault();
  };

  const addToCart = (id, e) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, isAddeds: !item.isAddeds } : item
      )
    );
    e.preventDefault();
  };

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  // https://static.vecteezy.com/system/resources/previews/005/337/799/non_2x/icon-image-not-found-free-vector.jpg

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = Array.isArray(items)
    ? items.slice(indexOfFirstItem, indexOfLastItem)
    : [];
  // console.log(currentItems);

  // Function to format numbers with commas
  const formatWithCommas = (number) => {
    if (typeof number !== "number") {
      return number; // Return the original value if it's not a number
    }

    const formattedNumber = number
      .toFixed(2)
      .replace(/\B(?=(\d{3})+(?!\d))/g, "");
    const parts = formattedNumber.split(".");

    if (parts.length > 1) {
      const lakhPlace = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      return `${lakhPlace}.${parts[1]}`;
    }

    return formattedNumber;
  };

  return (
    <PracticeMainComponent>
      <PracticeFilterComp>
        <SideFilterComponent />
      </PracticeFilterComp>
      <div style={{ width: "80%" }}>
        <ListingContainer>
          <SubCategoriesComponent
            categoryName={categoryName}
            CategoryID={CategoryID}
            subCategories={subCategories}
          />
          <ListingHeader />
          <ListingProductContainer>
            {currentItems.map((data) => (
              <Link
                style={{ textDecoration: "none" }}
                to={`/product/${data.prod_ID}`}
                key={data.prod_ID}
              >
                <Card>
                  <FavIcon onClick={(e) => toggleFavorite(data.prod_ID, e)}>
                    {data.isFavourites ? (
                      <FavoriteIcon
                        style={{ ...fontC, color: "rgb(213, 48, 48)" }}
                      />
                    ) : (
                      <FavoriteBorderOutlined
                        style={{ ...fontC, color: "rgb(213, 48, 48)" }}
                      />
                    )}
                  </FavIcon>
                  <ItemImg
                    src={`https://cyclecircle.blr1.cdn.digitaloceanspaces.com/DEVELOPMENT_PRODUCTS_IMAGE/${
                      data.images && data.images.image[0]
                    }`}
                    alt={data.prod_name}
                  />
                  <ItemDetail>
                    <ItemRating>
                      <Rating>{parseInt(data.net_rating).toFixed(1)}</Rating>
                      <StarIcons style={fontS} />
                      <Line>|</Line>
                      <NoOfRating>313</NoOfRating>
                    </ItemRating>
                    <ItemName>
                      {data.prod_name && data.prod_name.slice(0, 15)}
                    </ItemName>
                    <ItemData>
                      {data.prod_tech && data.prod_tech.slice(0, 50)}
                    </ItemData>
                    <ItemPrice>
                      <PriceDiv>
                        {data.SKU[0] && data.SKU[0].Sale_price && (
                          <CurrentPrice>
                            Rs.{" "}
                            {formatWithCommas(parseInt(data.SKU[0].Sale_price))}
                          </CurrentPrice>
                        )}
                        {data.SKU[0] && data.SKU[0].MRP_price && (
                          <OriginalPrice>
                            Rs.{" "}
                            {formatWithCommas(parseInt(data.SKU[0].MRP_price))}
                          </OriginalPrice>
                        )}
                      </PriceDiv>
                      <AddCart onClick={(e) => addToCart(data.id, e)}>
                        {data.isAddeds ? (
                          <DoneOutlineOutlinedIcon
                            style={{
                              ...fontC,
                              background: "#3a9978",
                              color: "white",
                              padding: "4px",
                              borderRadius: "33px",
                            }}
                          />
                        ) : (
                          <ShoppingCartOutlinedIcon
                            style={{
                              ...fontC,
                              background: "#3a9978",
                              color: "white",
                              padding: "4px",
                              borderRadius: "33px",
                            }}
                          />
                        )}
                      </AddCart>
                    </ItemPrice>
                  </ItemDetail>
                </Card>
              </Link>
            ))}
          </ListingProductContainer>
        </ListingContainer>
        <ListingPaginations>
          <ListingPagination
            totalItems={items && items.length}
            itemsPerPage={itemsPerPage}
            onPageChange={onPageChange}
          />
        </ListingPaginations>
      </div>
    </PracticeMainComponent>
  );
}

export default ListingProduct;

const PracticeMainComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;
const PracticeFilterComp = styled.div`
  width: 20%;
  position: sticky;
  top: 140px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  z-index: 1;
`;
const ListingContainer = styled.div`
  position: relative;
  top: 75px;
  width: 100%;
  background: white;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  padding-left: 1rem;
  padding-top: 0.5rem;
  a {
    // margin: 1rem 2vw;
  }
`;
const ListingProductContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  justify-content: flex-start;
  align-items: center;
  padding-left: 2rem;
  a {
    width: 14.5rem;
  }
`;

const Card = styled.div`
  position: relative;
  width: 15.6rem;
  height: 24rem;
  background: white;
  color: black;
  border: 0.0625rem solid var(--border-color);
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: 0.7s all ease;
  border: 1.5px solid var(--border-color);
  &:hover {
    border-color: transparent;
    box-shadow: 0 0 15px 0 var(--border-color);

    transform: scale(1.01);
  }
`;
const ItemImg = styled.img`
  padding-top: 3rem;
  width: 62%;
  height: auto;
`;

const FavIcon = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
`;
const ItemDetail = styled.div`
  width: 100%;
  height: 45%;
  display: flex;
  padding: 0.5rem 0.8rem;
  flex-direction: column;
  justify-content: flex-end;
  a {
    background: #3a9978;
    color: #eee;
    width: 100%;
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    margin-bottom: 0.3rem;
    align-items: center;
    justify-content: space-between;
    font-size: 0.85rem;
    padding: 6px 45px 6px 5px;
    box-shadow: 1px 1px 5px 0px rgb(100, 100, 100);
  }
`;
const ItemRating = styled.div`
  width: 42%;
  display: flex;
  align-items: center;
  background: #f0eeeb;
  opacity: 0.8;
  padding: 0.2rem 0.3rem;
  border-radius: 3px;
  font-weight: bolder;
  margin-bottom: 0.5rem;
  justify-content: space-between;
  &:hover {
    opacity: 1;
  }
`;
const Rating = styled.span`
  font-size: 0.8rem;
`;
const StarIcons = styled(StarIcon)`
  color: gold;
`;
const Line = styled.span`
  margin-bottom: 0px;
`;
const NoOfRating = styled.span`
  font-size: 0.8rem;
`;
const ItemName = styled.span`
  font-size: 1.2rem;
  font-weight: 700;
  line-height: normal;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
`;
const ItemData = styled.p`
  min-height: 30%;
  font-size: 0.75rem;
  margin: 0.5rem 0 0.4rem 0;
  color: #3b3a38;
  text-transform: none;
`;
const ItemPrice = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 0rem;
  margin-bottom: 1rem;
`;
const PriceDiv = styled.div`
  width: 85%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;
const AddCart = styled.div`
position:absolute;
right:1rem;
bottom:1rem;
`;
const CurrentPrice = styled.p`
  margin: 0;
  font-size: 1rem;
  text-transform: capitalize;
`;
const OriginalPrice = styled.p`
  text-decoration-line: line-through;
  margin: 0;
  color: gray;
  margin-left: 0.8rem;
  letter-spacing: 0.5px;
  font-size: 0.7rem;
`;

const ListingPaginations = styled.div`
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
`;

const fontS = {
  fontSize: "16",
};
const fontC = {
  fontSize: "28",
};
