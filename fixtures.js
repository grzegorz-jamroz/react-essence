import { CATEGORIES, SUB_CATEGORIES } from './assets/js/mocks/lib'
import { firestore } from './assets/js/Firebase';
import { collectIdsAndDocs } from "./assets/js/Firebase/utilities";

const createCategory = async category => {
    await firestore.collection('categories').add(category);
};

const createSubCategories = async () => {
    const snapshot = await firestore.collection('categories').get();
    const categories = snapshot.docs.map(collectIdsAndDocs);
    categories.map(category => {
        SUB_CATEGORIES[category.name].map(subCategory => {
            subCategory.parentId = category.id;
            createCategory(subCategory);
        });
    });
};

CATEGORIES.map(category => {
    createCategory(category);
});

createSubCategories();
