const products = [
  {
    id: 1,
    img: "https://images.bike24.com/media/212/i/mb/ea/47/2e/314798-00-d-650826.jpg",
    name: "Trickstuff",
    detail: "Trickstuff MAXIMA Disc Brake Set - silver/silver",
    currentPrice: "765",
    originalPrice: "1499",
    rating: "4.3",
    ratingNumber: "313",
    isFavourites: true,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
  },
  {
    id: 10,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: "Norco Fluid FS A3 - 29  Mountain Bike",
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
  },
  {
    id: 20,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: "Norco Fluid FS A3 - 29  Mountain Bike",
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
  },
  {
    id: 30,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: "Norco Fluid FS A3 - 29  Mountain Bike",
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
  },
  {
    id: 40,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: "Norco Fluid FS A3 - 29  Mountain Bike",
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
  },
  {
    id: 50,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: "Norco Fluid FS A3 - 29  Mountain Bike",
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
  },
  {
    id: 60,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: "Norco Fluid FS A3 - 29  Mountain Bike",
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
  },
  {
    id: 70,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: "Norco Fluid FS A3 - 29  Mountain Bike",
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
  },
  {
    id: 80,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: "Norco Fluid FS A3 - 29  Mountain Bike",
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: true,
    isAddeds: true,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: false,
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
    isFavourites: false,
    isAddeds: true,
  },
  {
    id: 90,
    img: "https://images.bike24.com/media/212/i/mb/9e/5a/50/norco-fluid-fs-a3-grey-1327206.jpg",
    name: "Norco Bicycles",
    detail: "Norco Fluid FS A3 - 29  Mountain Bike",
    currentPrice: "4555",
    originalPrice: "9555",
    rating: "4.5",
    ratingNumber: "238",
    isFavourites: false,
    isAddeds: false,
  },
];


// const subCategories = new Set([products.map(p=>p.subcategory)]);
// const brands = new Set([products.map(p=>p.brand)]);
// const materials = new Set([products.map(p=>p.material)]);