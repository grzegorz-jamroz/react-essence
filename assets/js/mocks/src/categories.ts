export interface ICategory {
  name: string;
  thumbnail: string;
  parentId: string;
}

export const categories: ICategory[] = [
  {
    name: "clothing",
    thumbnail: "https://essence.rockujemy.pl/build/images/category-1.74f90263.jpg",
    parentId: ""
  },
  {
    name: "shoes",
    thumbnail: "https://essence.rockujemy.pl/build/images/category-2.0e140e46.jpg",
    parentId: ""
  },
  {
    name: "accessories",
    thumbnail: "https://essence.rockujemy.pl/build/images/category-3.3adede69.jpg",
    parentId: ""
  },
];
