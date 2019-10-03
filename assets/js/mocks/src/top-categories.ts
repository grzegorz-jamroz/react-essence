import { subCategories, ISubCategory } from "./sub-categories";

export interface ITopCategories {
  id: number;
  thumbnail: string;
  name: string;
  sub: ISubCategory[];
}

export const topCategories: ITopCategories[] = [
  {
    id: 1,
    thumbnail: "category-1.jpg",
    name: "clothing",
    sub: subCategories.clothing
  },
  {
    id: 2,
    thumbnail: "category-2.jpg",
    name: "shoes",
    sub: subCategories.shoes
  },
  {
    id: 3,
    thumbnail: "category-3.jpg",
    name: "accessories",
    sub: subCategories.accessories
  }
];
