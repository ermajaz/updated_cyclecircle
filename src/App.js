import React from "react";
import "./App.css";
import { BrowserRouter as Router,createBrowserRouter,RouterProvider,Link, Routes, Route } from "react-router-dom";
import {AboutUs} from "./components/EndPages/AboutUs";
import {ContactUs} from "./components/EndPages/ContactUs";
import {Term_Condition} from "./components/EndPages/Term_Condition";
import {Return_Exchange} from "./components/EndPages/Return_Exchange";
import {Shipping_delivery} from "./components/EndPages/Shipping_delivery";
import {Policy} from "./components/EndPages/Policy";
import {FrameSet} from "./components/EndPages/FrameSet";
import {Cockpit} from "./components/EndPages/Cockpit";
import {Suspension} from "./components/EndPages/Suspension";
import {WheelSet} from "./components/EndPages/WheelSet";
import {DriveTrain} from "./components/EndPages/DriveTrain";
import {BrackSet} from "./components/EndPages/BrackSet";
import {Cratoni} from "./components/EndPages/Cratoni";
import Home from "./pages/home";
import ProductDescription from "./pages/productDescriptionPage";
import Wishlist from "./pages/wishlist";
import Carts from "./pages/carts";
import SharePopUp from "./components/ProductDescription/SharePopUp";
import ListingPage from "./pages/listingPage";
import SignUp from "./components/Authentication/SignUp/SignUp";

// const router = createBrowserRouter([
//   {
//     path:'',
//     element:(),
//   },
//   {},
//   {},
//   {},

// ]);
function App() {
  return (
    <Router>
      <div className="App">
        {/* <RouterProvider router={router}/> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/aboutUs" element={<AboutUs />} />
          <Route exact path="/contactUs" element={<ContactUs />} />
          <Route exact path="/term_condition" element={<Term_Condition />} />
          <Route exact path="/return_exchange" element={<Return_Exchange />} />
          <Route
            exact
            path="/shipping_delivery"
            element={<Shipping_delivery />}
          />
          <Route exact path="/policy" element={<Policy />} />
          <Route exact path="/frameSet" element={<FrameSet />} />
          <Route exact path="/suspension" element={<Suspension />} />
          <Route exact path="/driveTrain" element={<DriveTrain />} />
          <Route exact path="/wheelSet" element={<WheelSet />} />
          <Route exact path="/cockpit" element={<Cockpit />} />
          <Route exact path="/brackSet" element={<BrackSet />} />
          <Route exact path="/cratoni" element={<Cratoni />} />
          <Route exact path="/product/:prod_ID" element={<ProductDescription />} />
          <Route exact path="/wishlist" element={<Wishlist />} />
          <Route exact path="/carts" element={<Carts />} />
          <Route exact path="/share" element={<SharePopUp />} />
          <Route exact path="/listing-page/:CategoryID/:categoryName" element={<ListingPage />} />
          <Route exact path="/sign-up" element={<SignUp/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
