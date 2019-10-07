import { firestore } from "../../assets/js/Firebase";
import { BRANDS } from "../../assets/js/mocks/lib";
import { createDocument } from "./createDocument";
import { collectIdsAndDocs } from "../../assets/js/Firebase/utilities";

export const createBrands = async () => {
  Object.entries(BRANDS).forEach(([key, brand]) => {
    createDocument("brands", brand);
  });
};

export const getAllBrands = async () => {
  const snapshot = await firestore.collection('brands').get();
  return snapshot.docs.map(collectIdsAndDocs);
};
