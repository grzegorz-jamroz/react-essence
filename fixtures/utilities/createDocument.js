import { firestore } from "../../assets/js/Firebase";

export const createDocument = async (collectionPath, document) => {
  await firestore.collection(collectionPath).add(document);
};
