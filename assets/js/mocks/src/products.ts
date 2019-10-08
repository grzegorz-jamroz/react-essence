import { IBadge, badges } from "./badge";
import { IBrand, brands } from "./brands";

export interface IProduct {
  id?: string;
  name: string;
  thumbnail: string;
  type: string;
  label: IBrand;
  unitPrice: number;
  previousPrice: number;
  currency: string;
  unit: string;
  images: string[];
  badge?: IBadge;
}

export const products = [
  {
    name: "Knot Front Mini Dress",
    thumbnail: "product-1.jpg",
    type: "size: M color: blue",
    label: brands.topshop,
    unitPrice: 79.99,
    previousPrice: 99.99,
    currency: "$",
    unit: "(pc.)",
    badge: badges.new,
    images: [
      "product-1.jpg",
      "product-3.jpg"
    ]
  },
  {
    name: "PETITE Crepe Wrap Mini Dress",
    thumbnail: "product-2.jpg",
    type: "size: S color: green",
    label: brands.asoss,
    unitPrice: 55,
    previousPrice: 0,
    currency: "$",
    unit: "(pc.)",
    images: [
      "product-2.jpg",
      "product-4.jpg"
    ]
  },
  {
    name: "Poplin Displaced Wrap Dress",
    thumbnail: "product-3.jpg",
    type: "size: S color: beige",
    label: brands.topshop,
    unitPrice: 55.9,
    previousPrice: 0,
    currency: "$",
    unit: "(pc.)",
    badge: badges.discount,
    images: [
      "product-3.jpg",
      "product-5.jpg"
    ]
  },
  {
    name: "Button Through Strap Mini Dress",
    thumbnail: "product-4.jpg",
    type: "size: S color: beige",
    label: brands.mango,
    unitPrice: 55.9,
    previousPrice: 0,
    currency: "$",
    unit: "(pc.)",
    images: [
      "product-4.jpg",
      "product-6.jpg"
    ]
  },
  {
    name: "PETITE Belted Jumper Dress",
    thumbnail: "product-5.jpg",
    type: "size: S color: beige",
    label: brands.topshop,
    unitPrice: 55.9,
    previousPrice: 0,
    currency: "$",
    unit: "(pc.)",
    images: [
      "product-5.jpg",
      "product-7.jpg"
    ]
  },
  {
    name: "Poplin Displaced Wrap Dress",
    thumbnail: "product-6.jpg",
    type: "size: S color: beige",
    label: brands.mango,
    unitPrice: 45.9,
    previousPrice: 55,
    currency: "$",
    unit: "(pc.)",
    images: [
      "product-6.jpg",
      "product-1.jpg"
    ]
  },
  {
    name: "Poplin Displaced Wrap Dress",
    thumbnail: "product-7.jpg",
    type: "size: S color: beige",
    label: brands.mango,
    unitPrice: 55.9,
    previousPrice: 75,
    currency: "$",
    unit: "(pc.)",
    images: [
      "product-7.jpg",
      "product-2.jpg"
    ]
  }
];
