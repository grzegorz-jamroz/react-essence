export interface ITopCategories {
  id: number;
  thumbnail: string;
  name: string;
}

export const topCategories: ITopCategories[] = [
  {
    id: 1,
    thumbnail: "category-1.jpg",
    name: "Clothing"
  },
  {
    id: 2,
    thumbnail: "category-2.jpg",
    name: "Shoes"
  },
  {
    id: 3,
    thumbnail: "category-3.jpg",
    name: "Accessories"
  }
];
