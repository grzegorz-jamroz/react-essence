export interface ISubCategory {
  name: string;
}

export interface ISubCategories {
  [name: string]: ISubCategory[];
}

export const subCategories: ISubCategories = {
  clothing: [
    { name: "All" },
    { name: "Bodysuits" },
    { name: "Dresses" },
    { name: "Hoodies &amp; Sweats" },
    { name: "Jackets &amp; Coats" },
    { name: "Jeans" },
    { name: "Pants &amp; Leggings" },
    { name: "Rompers &amp; Jumpsuits" },
    { name: "Shirts &amp; Blouses" },
    { name: "Shirts" },
    { name: "Sweaters &amp; Knits" },
  ],
  shoes: [
    { name: "All" },
    { name: "Bodysuits" },
    { name: "Dresses" },
    { name: "Hoodies &amp; Sweats" },
    { name: "Jackets &amp; Coats" },
    { name: "Jeans" },
    { name: "Pants &amp; Leggings" },
    { name: "Rompers &amp; Jumpsuits" },
    { name: "Shirts &amp; Blouses" },
    { name: "Shirts" },
    { name: "Sweaters &amp; Knits" },
  ],
  accessories: [
    { name: "All" },
    { name: "Bodysuits" },
    { name: "Dresses" },
    { name: "Hoodies &amp; Sweats" },
    { name: "Jackets &amp; Coats" },
    { name: "Jeans" },
    { name: "Pants &amp; Leggings" },
    { name: "Rompers &amp; Jumpsuits" },
    { name: "Shirts &amp; Blouses" },
    { name: "Shirts" },
    { name: "Sweaters &amp; Knits" },
  ]
};


