import brakeset from "../src/icons/parts/Brakeset.png";
import cockpit from "../src/icons/parts/Cockpit.png";
import drivetrain from "../src/icons/parts/Drivetrain.png";
import frameset from "../src/icons/parts/Frameset.png";
import suspension from "../src/icons/parts/Suspension.png";
import wheelset from "../src/icons/parts/cycle.png";
import lock from "../src/icons/accessories/Lock & safety.png"
import lights from "../src/icons/accessories/Lights.png"
import racks from "../src/icons/accessories/Racks.png"
import storage from "../src/icons/accessories/Storage.png"
import electronics from "../src/icons/accessories/electronics.png"
import others from "../src/icons/accessories/others.png"
import cyclelogo from "../src/icons/clothing/cyclelogo.png"
import cyclistlogo from "../src/icons/clothing/cyclist.png"
import b1 from "./icons/bannerImg/banner01.jpg"
import b2 from "./icons/bannerImg/banner02.jpg"
import b3 from "./icons/bannerImg/banner03.jpg"
import b4 from "./icons/bannerImg/banner04.jpg"
import b5 from "./icons/bannerImg/banner05.png"
import freeDelivery from "./img/Gift.png"
import freeReturns from "./img/Loan.png"
import quickTracking from "./img/Track.png"
import expressDelivery from "./img/Air-Freight.png"
import Bicycle from "./img/Bicycle.png";
export const parts = [
  {
    id: 1,
    img: frameset,
    name: "frameset",
  },
  {
    id: 2,
    img: suspension,
    name: "suspension",
  },
  {
    id: 3,
    img: drivetrain,
    name: "drivetrain",
  },
  {
    id: 4,
    img: wheelset,
    name: "wheelSet",
  },
  {
    id: 5,
    img: cockpit,
    name: "cockPit",
  },
  {
    id: 6,
    img: brakeset,
    name: "brakeset",
  },
  {
    id: 7,
    img: frameset,
    name: "others",
  },
];


export const accessories = [
  {
    id: 1,
    cat: "cycle",
    img: lock,
    name: "locks & safety",
  },
  {
    id: 2,
    cat: "cycle",
    img: racks,
    name: "racks & transport",
  },
  {
    id: 3,
    cat: "cycle",
    img: storage,
    name: "storage compts",
  },
  {
    id: 4,
    cat: "cycle",
    img: lights,
    name: "lights",
  },
  {
    id: 5,
    cat: "cyclist",
    img: lights,
    name: "lights",
  },
  {
    id: 6,
    cat: "cyclist",
    img: electronics,
    name: "electronics",
  },
  {
    id: 7,
    cat: "cyclist",
    img: others,
    name: "others",
  },
];

export const clothing = [
  {
    id: 1,
    img: cyclelogo,
    name: "for the Cycle",
  },
  {
    id: 2,
    img: cyclistlogo,
    name: "for the Cyclist",
  },
];

export const hotDeals = [
  {
    id: 1,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",
    isFavourites:true,
    isAddeds:false,

  },
  {
    id: 2,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    ratingNumber: "487",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 3,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 4,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    ratingNumber: "343",
    isFavourites:true,
    isAddeds:true,

  },
  {
    id: 5,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    ratingNumber: "287",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 6,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    ratingNumber: "888",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 7,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 8,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    ratingNumber: "187",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 9,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    ratingNumber: "243",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 10,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites:false,
    isAddeds:false,

  }
]
export const listingProduct = [
  {
    id: 1,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",
    isFavourites:true,
    isAddeds:false,

  },
  {
    id: 2,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    ratingNumber: "487",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 3,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 4,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    ratingNumber: "343",
    isFavourites:true,
    isAddeds:true,

  },
  {
    id: 5,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    ratingNumber: "287",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 6,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    ratingNumber: "888",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 7,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 8,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    ratingNumber: "187",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 9,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    ratingNumber: "243",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 10,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 11,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",
    isFavourites:true,
    isAddeds:false,

  },
  {
    id: 12,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    ratingNumber: "487",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 13,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 14,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    ratingNumber: "343",
    isFavourites:true,
    isAddeds:true,

  },
  {
    id: 15,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    ratingNumber: "287",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 16,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    ratingNumber: "888",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 17,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 18,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    ratingNumber: "187",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 19,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    ratingNumber: "243",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 20,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 21,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",
    isFavourites:true,
    isAddeds:false,

  },
  {
    id: 22,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    ratingNumber: "487",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 23,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 24,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    ratingNumber: "343",
    isFavourites:true,
    isAddeds:true,

  },
  {
    id: 25,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    ratingNumber: "287",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 26,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    ratingNumber: "888",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 27,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 28,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    ratingNumber: "187",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 29,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    ratingNumber: "243",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 30,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 31,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",
    isFavourites:true,
    isAddeds:false,

  },
  {
    id: 32,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    ratingNumber: "487",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 33,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 34,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    ratingNumber: "343",
    isFavourites:true,
    isAddeds:true,

  },
  {
    id: 35,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    ratingNumber: "287",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 36,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    ratingNumber: "888",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 37,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 38,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    ratingNumber: "187",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 39,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    ratingNumber: "243",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 40,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 41,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",
    isFavourites:true,
    isAddeds:false,

  },
  {
    id: 42,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    ratingNumber: "487",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 43,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 44,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    ratingNumber: "343",
    isFavourites:true,
    isAddeds:true,

  },
  {
    id: 45,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    ratingNumber: "287",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 46,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    ratingNumber: "888",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 47,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 48,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    ratingNumber: "187",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 49,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    ratingNumber: "243",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 50,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 51,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",
    isFavourites:true,
    isAddeds:false,

  },
  {
    id: 52,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    ratingNumber: "487",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 53,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 54,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    ratingNumber: "343",
    isFavourites:true,
    isAddeds:true,

  },
  {
    id: 55,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    ratingNumber: "287",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 56,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    ratingNumber: "888",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 57,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 58,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    ratingNumber: "187",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 59,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    ratingNumber: "243",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 60,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 61,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",
    isFavourites:true,
    isAddeds:false,

  },
  {
    id: 62,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    ratingNumber: "487",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 63,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 64,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    ratingNumber: "343",
    isFavourites:true,
    isAddeds:true,

  },
  {
    id: 65,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    ratingNumber: "287",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 66,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    ratingNumber: "888",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 67,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 68,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    ratingNumber: "187",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 69,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    ratingNumber: "243",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 70,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 71,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",
    isFavourites:true,
    isAddeds:false,

  },
  {
    id: 72,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    ratingNumber: "487",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 73,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 74,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    ratingNumber: "343",
    isFavourites:true,
    isAddeds:true,

  },
  {
    id: 75,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    ratingNumber: "287",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 76,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    ratingNumber: "888",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 77,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 78,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    ratingNumber: "187",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 79,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    ratingNumber: "243",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 80,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 81,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",
    isFavourites:true,
    isAddeds:false,

  },
  {
    id: 82,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    ratingNumber: "487",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 83,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 84,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    ratingNumber: "343",
    isFavourites:true,
    isAddeds:true,

  },
  {
    id: 85,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    ratingNumber: "287",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 86,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    ratingNumber: "888",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 87,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    ratingNumber: "453",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 88,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    ratingNumber: "187",
    isFavourites:false,
    isAddeds:false,

  },
  {
    id: 89,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    ratingNumber: "243",
    isFavourites:false,
    isAddeds:true,

  },
  {
    id: 90,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites:false,
    isAddeds:false,

  },
]
export const wishlists = [
  {
    id: 1,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    carts:0,
    ratingNumber: "313",

  },
  {
    id: 2,
    img: "https://images.bike24.com/i/mb/be/46/db/317187-00-d-657900.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT RT-MT800 Ice-Tech Freeza Disc Centerlock",
    currentPrice: "999",
    originalPrice: "1999",
    rating: "4.7",
    carts:0,
    ratingNumber: "487",

  },
  {
    id: 3,
    img: "https://images.bike24.com/i/mb/dc/c4/49/334315-00-d-704374.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT BL-M8100 + BR-M8100 XC Race Hydraulic Disc",
    currentPrice: "1599",
    originalPrice: "2300",
    rating: "3.5",
    carts:0,
    ratingNumber: "453",

  },
  {
    id: 4,
    img: "https://images.bike24.com/media/119/i/mb/e7/d5/83/sram-code-ultimate-stealth-disc-brake-set-1469835.jpg",
    name: "SRAM",
    detail: "SRAM Code Stealth Disc Brake - Ultimate",
    currentPrice: "555",
    originalPrice: "1499",
    rating: "2.3",
    carts:0,
    ratingNumber: "343",

  },
  {
    id: 5,
    img: "https://images.bike24.com/media/119/i/mb/02/9e/ee/312067-00-d-643762.jpg",
    name: "DT Swiss",
    detail: "DT Swiss PR 1400 DICUT 21 OXiC - Wheelset",
    currentPrice: "875",
    originalPrice: "1459",
    rating: "4.0",
    carts:0,
    ratingNumber: "287",

  },
  {
    id: 6,
    img: "https://images.bike24.com/media/119/i/mb/f5/c1/7a/4iiii-precisionpro-105-fc-r7000-926027.jpg",
    name: "4iiii",
    detail: "4iiii Precision Pro Powermeter Crankset",
    currentPrice: "999",
    originalPrice: "1499",
    rating: "4.1",
    carts:0,
    ratingNumber: "888",

  },
  {
    id: 7,
    img: "https://images.bike24.com/media/212/i/mb/00/b7/71/cateye-gvolt-100-headlight-1-882071.jpg",
    name: "CatEye",
    detail: "Cat Eye GVolt100 Front Light",
    currentPrice: "2000",
    originalPrice: "5999",
    rating: "3.3",
    carts:0,
    ratingNumber: "453",

  },
  {
    id: 8,
    img: "https://images.bike24.com/media/212/i/mb/ad/7c/02/process-134-dl-fire-orange-1023439.jpg",
    name: "Kona Bicycles",
    detail: "Kona PROCESS 134 DL - 27.5 Inches ",
    currentPrice: "3999",
    originalPrice: "5599",
    rating: "4.8",
    carts:0,
    ratingNumber: "187",

  },
  {
    id: 9,
    img: "https://images.bike24.com/media/212/i/mb/e6/77/50/ismrt86l-1540453.jpg",
    name: "Shimano Parts",
    detail: "Shimano Deore XT SM-RT86 Disc 6-Hole",
    currentPrice: "765",
    originalPrice: "1459",
    rating: "3.6",
    carts:0,
    ratingNumber: "243",

  },
  {
    id: 10,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: 'Norco Fluid FS A3 - 29"  Mountain Bike',
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    carts:0,
    ratingNumber: "238",

  }
]

export const banners = [
  {
    id: 1,
    img:b1,
  },
  {
    id: 2,
    img:b2,
  },
  {
    id: 3,
    img:b3,
  },
  {
    id: 4,
    img:b4,
  },
  {
    id: 5,
    img:b5,
  },
]

export const services = [
  {
    icon: freeDelivery,
    heading: "Free Delivery",
    desc: "Free delivery for purchasing above ₹3000"
  },
  {
    icon: freeReturns,
    heading: "Hassle Free Returns",
    desc: "If you are not satisfied you can return the product within 14 days"
  },
  {
    icon: quickTracking,
    heading: "Quick Tracking Info",
    desc: "We'll send you tracking info once your order is dispatched"
  },
  {
    icon: expressDelivery,
    heading: "Express Delivery",
    desc: "In express delivery you will be charged even purchasing above ₹3000"
  }
];


export const Product = {
  id: 1,
  name: 'Veloheld iconX',
  slug: 'new-luxury-laptop',
  photo: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  price: 1999.00,
  desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!',
  images: {
    blueColor:[
      {
        src: 'https://images.bike24.com/media/720/i/mb/19/99/7d/iconx-frame-steelfork-glokzin-teal-glossy-1-985567.jpg',
        Varientname:"Diamond"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/aa/6c/f8/geo-iconx-985566.jpg',
        Varientname: "Prone"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/d7/23/8a/iconx-frame-steelfork-glokzin-teal-glossy-3-985569.jpg',
        Varientname:"Step-through"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/30/3f/a1/iconx-frame-steelfork-glokzin-teal-glossy-4-985570.jpg',
        Varientname:"Cantilever"
      },
    ],
    greyColor:[
      {
        src: 'https://images.bike24.com/media/720/i/mb/92/2b/90/veloheld-iconx-titan-frame-1-1234886.jpg',
        Varientname:"Diamond"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/b4/fa/63/geo-veloheld-iconx-titan-frame-1234844.jpg',
        Varientname: "Prone"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/17/11/9c/veloheld-iconx-titan-frame-2-1234887.jpg',
        Varientname:"Step-through"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/02/0e/f0/veloheld-iconx-titan-frame-5-1234890.jpg',
        Varientname:"Cantilever"
      },
    ],
    yellowColor:[
      {
        src: 'https://images.bike24.com/media/720/i/mb/5a/46/39/geo-iron-frame-yellow-1-1234987.jpg',
        Varientname:"Diamond"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/9c/0c/a4/geo-iron-frame-1234986.jpg',
        Varientname: "Prone"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/79/79/c7/geo-iron-frame-yellow-2-1234988.jpg',
        Varientname:"Step-through"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/1a/8b/ea/geo-iron-frame-yellow-6-1234992.jpg',
        Varientname:"Cantilever"
      },
    ],
    purpleColor:[
      {
        src: 'https://images.bike24.com/media/720/i/mb/19/99/7d/iconx-frame-steelfork-glokzin-teal-glossy-1-985567.jpg',
        Varientname:"Diamond"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/aa/6c/f8/geo-iconx-985566.jpg',
        Varientname: "Prone"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/d7/23/8a/iconx-frame-steelfork-glokzin-teal-glossy-3-985569.jpg',
        Varientname:"Step-through"
      },
      {
        src: 'https://images.bike24.com/media/720/i/mb/30/3f/a1/iconx-frame-steelfork-glokzin-teal-glossy-4-985570.jpg',
        Varientname:"Cantilever"
      },
    ],
  },
  colors: ["blue", "gray", "yellow","purple"],
  infos: [
    {
      title: "Compatibility",
    },
    {
      title: "Technical Data",
    },
    {
      title: "How To",
    },
    {
      title: "Reviews",
    },
  ],
  discount: 20,
  sold: 52,
  category: 'Frameset',
  brand: 'Veloheld'
}

export const ratings = [
  {
    width:71.42,
    reviews: 5,
    noOfRate: 5,
  },
  {
    width:54.20,
    reviews: 3,
    noOfRate: 4,
  },
  {
    width:14.28,
    reviews: 1,
    noOfRate: 3,
  },
  {
    width:0.0,
    reviews: 0,
    noOfRate: 2,
  },
  {
    width:0.0,
    reviews: 0,
    noOfRate: 1,
  },
]

export const subCat = [
  {
    img:Bicycle,
    name:"Road Frameset"
  },
  {
    img:Bicycle,
    name:"Mountain Bike Frameset"
  },
  {
    img:Bicycle,
    name:"Cyclocross Frameset"
  },
  {
    img:Bicycle,
    name:"Track Frameset"
  },
  {
    img:Bicycle,
    name:"Hybrid Frameset"
  },
  {
    img:Bicycle,
    name:"Road Frameset"
  },
  {
    img:Bicycle,
    name:"Mountain Bike Frameset"
  },
  {
    img:Bicycle,
    name:"Cyclocross Frameset"
  },
  {
    img:Bicycle,
    name:"Track Frameset"
  },
  {
    img:Bicycle,
    name:"Hybrid Frameset"
  }
]

export const reviews = [
  {
    name: "John Doe",
    img: "https://www.financialexpress.com/wp-content/uploads/2017/06/kohli-8.jpg?w=350",
    time: "2d ago",
    rating: 3,
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!",
    likes: 456,
    dislike: 88,
    share: 34,
  },
  {
    name: "Shane Watson",
    img: "https://www.financialexpress.com/wp-content/uploads/2017/06/kohli-8.jpg?w=350",
    time: "23m ago",
    rating: 4,
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!",
    likes: 312,
    dislike: 88,
    share: 12,
  },
  {
    name: "Michael Gothan",
    img: "https://www.financialexpress.com/wp-content/uploads/2017/06/kohli-8.jpg?w=350",
    time: "1d ago",
    rating: 5,
    review:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque consectetur vero asperiores quis animi explicabo accusamus nemo cupiditate harum pariatur! Provident sit tenetur totam mollitia consectetur nesciunt, recusandae obcaecati itaque!",
    likes: 675,
    dislike: 88,
    share: 19,
  },
]

export const product_description = {
  aboutBrands:
    {
      productName: "S-Works",
      productDesc: "S-Works is not a separate company but rather a premium product line offered by Specialized Bicycle Components, which is a prominent American bicycle manufacturing company. Specialized was founded in 1974 by Mike Sinyard and has since become one of the most recognized and respected brands in the cycling industry.",
      productFeature:"Here are some key details about Specialized Bicycle Components:",
      productLi: [
        {
          para:"History: Specialized has a rich history in the cycling industry. It started as a small bike shop in California and gradually grew into a global brand known for innovation and quality.",
        },
        {
          para:"Product Range: Specialized produces a wide range of bicycles, including road bikes, mountain bikes, electric bikes (e-bikes), commuter bikes, and more. They also manufacture cycling accessories, components, apparel, and equipment.",
        },
        {
          para:" Innovation: Specialized is known for its commitment to research and development. They have introduced numerous technological advancements in cycling, such as the first mass-produced mountain bike, the Stumpjumper, in 1981. They continue to innovate with features like advanced frame materials, suspension systems, and aerodynamic designs.",
        },
      ]
    },
  descriptions:
    {
      productHeading:"S-Works Tarmac SL7 Frameset",
      productDescs:"The S-Works Tarmac SL7 Frameset is part of Specialized's Tarmac lineup, which has a long history of success in professional cycling. This frameset is the foundation upon which many professional road racing bikes are built and is used by some of the world's top cyclists. It's a meticulously engineered and finely crafted piece of cycling technology designed to deliver maximum speed and efficiency.",
      productFeatures:"Key Features:",
      productLis:[
        {
          para:"Lightweight Construction: The Tarmac SL7 frameset is constructed using Specialized's highest-grade FACT Carbon, a proprietary carbon fiber material. This ensures an exceptional strength-to-weight ratio, resulting in a lightweight frame that's ideal for climbing and acceleration.",
        },
        {
          para:"Aerodynamic Design: The Tarmac SL7 features a highly aerodynamic shape. Specialized has utilized its expertise in wind tunnel testing to optimize the tube shapes and profiles, reducing aerodynamic drag and helping riders cut through the air more efficiently.",
        },
        {
          para:"Stiffness and Responsiveness: This frameset boasts outstanding stiffness characteristics, especially in the bottom bracket area and head tube, which results in exceptional power transfer and precise handling. It responds quickly to rider input, making it suitable for aggressive riding and sprinting.",
        }
      ]
    }
}

export const filterData = {
  brands:[
    {
      id:1,
      name:"Logan",
    },
    {
      id:2,
      name:"Neco",
    },
    {
      id:3,
      name:"Kenda",
    },
    {
      id:4,
      name:"Joes",
    },
    {
      id:5,
      name:"RST",
    },
    {
      id:6,
      name:"Tektro USA",
    },
    {
      id:7,
      name:"SunRace",
    },
    {
      id:8,
      name:"Cratoni",
    },
    {
      id:9,
      name:"Asics",
    },
    {
      id:10,
      name:"Assos",
    },
    {
      id:11,
      name:"Cannondale",
    },
    {
      id:12,
      name:"Cube",
    },
    {
      id:13,
      name:"Fox",
    },
    {
      id:14,
      name:"Endura",
    },
    {
      id:15,
      name:"Garmin",
    },
    {
      id:16,
      name:"Gorewear",
    },
    {
      id:17,
      name:"Lowa",
    },
    {
      id:18,
      name:"Mammut",
    },
    {
      id:19,
      name:"Campagnolo",
    },
    {
      id:20,
      name:"Mavic",
    },
    {
      id:21,
      name:"Norrona",
    },
  ],
  bikes:[
    {
      id:1,
      name:"Adler",
    },
    {
      id:2,
      name:"A-Bike",
    },
    {
      id:3,
      name:"Abici",
    },
    {
      id:4,
      name:"Alcyon",
    },
    {
      id:5,
      name:"Batavus",
    },
    {
      id:6,
      name:"Birdy",
    },
    {
      id:7,
      name:"Cinelli",
    },
    {
      id:8,
      name:"Cube",
    },
    {
      id:9,
      name:"Diamant",
    },
    {
      id:10,
      name:"Excelsior",
    },
    {
      id:11,
      name:"Flying Scot",
    },
    {
      id:12,
      name:"Gocycle",
    },
    {
      id:13,
      name:"Hercules",
    },
    {
      id:14,
      name:"Itera",
    },
    {
      id:15,
      name:"Kent",
    },
    {
      id:16,
      name:"Kronan",
    },
    {
      id:17,
      name:"Merlin",
    },
    {
      id:18,
      name:"Novara",
    },
    {
      id:19,
      name:"Orbita",
    },
    {
      id:20,
      name:"Pinarello",
    },
    {
      id:21,
      name:"Robin Hood",
    },
  ],
  manufacture:[
    {
      id:1,
      name:"Hero",
    },
    {
      id:2,
      name:"TI Hercules",
    },
    {
      id:3,
      name:"Avon",
    },
    {
      id:4,
      name:"Atlas",
    },
    {
      id:5,
      name:"Ninety One",
    },
    {
      id:6,
      name:"Rockstar",
    },
    {
      id:7,
      name:"Mojospin",
    },
    {
      id:8,
      name:"Firefox",
    },
    {
      id:9,
      name:"Roadmaster",
    },
    {
      id:10,
      name:"Leader",
    },
    {
      id:11,
      name:"Lifelong",
    },
    {
      id:12,
      name:"BSA",
    },
    {
      id:13,
      name:"Bianchi",
    },
    {
      id:14,
      name:"Decathlon",
    },
    {
      id:15,
      name:"OMO",
    },
    {
      id:16,
      name:"Urban",
    },
    {
      id:17,
      name:"Match City",
    },
    {
      id:18,
      name:"Montra",
    },
    {
      id:19,
      name:"Ghost",
    },
    {
      id:20,
      name:"Giant",
    },
    {
      id:21,
      name:"Kross",
    },
  ],
  material:[
    {
      id:1,
      name:"Steel",
    },
    {
      id:2,
      name:"Aluminum",
    },
    {
      id:3,
      name:"Iron",
    },
    {
      id:4,
      name:"Titanium",
    },
    {
      id:5,
      name:"Brass",
    },
    {
      id:6,
      name:"PVC",
    },
    {
      id:7,
      name:"Copper",
    },
    {
      id:8,
      name:"Alloy",
    },
  ],
  sortBy:[
    {
      id:1,
      name:"Relevance",
    },
    {
      id:2,
      name:"What's New",
    },
    {
      id:3,
      name:"Price High to Low",
    },
    {
      id:4,
      name:"Price Low to High",
    },
    {
      id:5,
      name:"Rating High to Low",
    },
    {
      id:6,
      name:"Rating Low to High",
    },
  ],
}