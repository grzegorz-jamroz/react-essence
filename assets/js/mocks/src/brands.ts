export interface IBrand {
  name: string;
  logo: string;
}

export interface IBrands {
  [name: string]: IBrand;
}

export const brands: IBrands = {
  asoss: {
    name: "Asos",
    logo: "",
  },
  mango: {
    name: "Mango",
    logo: "",
  },
  riverIsland: {
    name: "River Island",
    logo: "",
  },
  topshop: {
    name: "Topshop",
    logo: "",
  },
  zara: {
    name: "Zara",
    logo: "",
  }
};

