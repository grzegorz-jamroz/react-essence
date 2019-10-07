import { firestore } from "../../assets/js/Firebase";

export const deleteCollection = async (collectionPath, batchSize = 10) => {
  let collectionRef = firestore.collection(collectionPath);
  let query = collectionRef.orderBy('__name__').limit(batchSize);

  return await new Promise((resolve, reject) => {
    deleteQueryBatch(query, batchSize, resolve, reject);
  });
};

const deleteQueryBatch = (query, batchSize, resolve, reject) => {
  query.get()
    .then((snapshot) => {
      // When there are no documents left, we are done
      if (snapshot.size === 0) {
        return 0;
      }

      // Delete documents in a batch
      let batch = firestore.batch();
      snapshot.docs.forEach((doc) => {
        batch.delete(doc.ref);
      });

      return batch.commit().then(() => {
        return snapshot.size;
      });
    }).then((numDeleted) => {
    if (numDeleted === 0) {
      resolve();
      return;
    }

    // Recurse on the next process tick, to avoid
    // exploding the stack.
    process.nextTick(() => {
      deleteQueryBatch(query, batchSize, resolve, reject);
    });
  })
    .catch(reject);
};
