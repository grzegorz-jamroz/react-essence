export interface ICategory {
  name: string;
  thumbnail: string;
  parentId: string;
}

export const categories: ICategory[] = [
  {
    name: "clothing",
    thumbnail: "category-1.jpg",
    parentId: ""
  },
  {
    name: "shoes",
    thumbnail: "category-2.jpg",
    parentId: ""
  },
  {
    name: "accessories",
    thumbnail: "category-3.jpg",
    parentId: ""
  },
];
