import { useEffect, useState } from "react";
import { db } from "../config";

export const useCollection = (path) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);

    const unsubscribe = db
      .collection(path)
      .orderBy("createdAt", "desc")
      .onSnapshot(
        (snap) => {
          if (snap.empty) {
            setLoading(false);
            setData([]);
          }
          if (snap.docs.length > 0) {
            setData(snap.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
          }
        },
        (err) => {
          setError(err.message);
        }
      );

    return unsubscribe;
  }, [path]);

  return { loading, error, data };
};
