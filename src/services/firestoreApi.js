import { db } from "../config";

export const createDoc = (path, values) => {
  const id = db.collection(path).doc().id;
  return db.collection(path).doc(id).set(values, { merge: true });
};

export const setAndMergeDoc = (path, id, values) => {
  return db.collection(path).doc(id).set(values, { merge: true });
};

export const getDoc = (path, id) => {
  return db
    .collection(path)
    .doc(id)
    .get()
    .then((doc) => ({ id: doc.id, ...doc.data() }));
};

export const updateDoc = (path, id, values) => {
  return db.collection(path).doc(id).update(values);
};

export const removeDoc = (path, id) => {
  return db.collection(path).doc(id).delete();
};

export const getDocs = async (path) => {
  return db
    .collection(path)
    .get()
    .then((snap) => {
      return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    });
};
