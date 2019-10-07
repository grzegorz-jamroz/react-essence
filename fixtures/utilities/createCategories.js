import { firestore } from "../../assets/js/Firebase";
import { CATEGORIES, SUB_CATEGORIES } from "../../assets/js/mocks/lib";
import { collectIdsAndDocs } from "../../assets/js/Firebase/utilities";
import { createDocument } from "./createDocument";

const createMainCategories = async () => {
  CATEGORIES.map(category => {
    createDocument("categories", category);
  });
};

const createSubCategories = async () => {
  const snapshot = await firestore.collection('categories').get();
  const categories = snapshot.docs.map(collectIdsAndDocs);
  categories.map(category => {
    SUB_CATEGORIES[category.name].map(subCategory => {
      subCategory.parentId = category.id;
      createDocument("categories", subCategory);
    });
  });
};

export const createCategories = async () => {
  await createMainCategories();
  await createSubCategories();
};
