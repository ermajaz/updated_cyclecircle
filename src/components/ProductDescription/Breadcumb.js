import React from "react";
import { Link } from "react-router-dom";
import { connect, useSelector } from 'react-redux';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import "./Breadcumb.css";
import Navigation from "../Navigation/Navigation";
import { toggleNavigation, selectIsNavOpen,selectBreadcrumbs, setBreadcrumb } from '../../store/slices/breadCrumbsSlice';

function Breadcumb({ isNavOpen, toggleNavigation, setBreadcrumb, breadcrumbs }) {
  const { vertical, category, subCategory, productName } = breadcrumbs;
  // console.log(vertical,category,subCategory,productName);

  const formattedSubcategory = subCategory.toUpperCase();
  const bread = useSelector(selectBreadcrumbs);
  console.log(bread);

  return (
    <>
      <nav className="custom-dropdown">
        <span className="menu" onClick={toggleNavigation}>
          Menu {isNavOpen ? <ArrowDropDownIcon style={{ color: "white", fontSize: "35px" }} /> : <ArrowRightIcon style={{ color: "white", fontSize: "35px" }} />}
        </span>
        {/* <span className="navigation-slash"></span> */}
        <Link to="/"> Home</Link> {" > "}
        {vertical && (
          <>
            <Link to="/">{vertical}</Link> {" > "}
          </>
        )}
        {category && (
          <>
            <Link to={`/listing-page/${bread.categoryID}/${bread.category}`}>{category}</Link> {" > "}
          </>
        )}
        {subCategory && (
          <>
            <Link to={`/listing-page/${bread.verticalID}/${bread.category}`}>{formattedSubcategory}</Link> {" > "}
          </>
        )}
        {productName && (
          <>
            <Link to="" className="product-name-underline">{productName}</Link>
          </>
        )}
      </nav>
      <div className={`navigation-transition ${isNavOpen ? 'open' : ''}`}>
        <Navigation onClose={toggleNavigation}/>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  isNavOpen: selectIsNavOpen(state),
  breadcrumbs: selectBreadcrumbs(state),
});

const mapDispatchToProps = {
  toggleNavigation,
  setBreadcrumb,
};

export default connect(mapStateToProps, mapDispatchToProps)(Breadcumb);
