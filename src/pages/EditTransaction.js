import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// import Header from "./../components/Header";

import { getDoc } from "../services/firestoreApi";
import { COLLECTIONS } from "../static/constants";
import AddNewTransaction from "./AddNewTransaction";
import { auth } from "../config";

const EditTransaction = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);

  // const context = useContext(TransactionContext);

  const { USERS, TRANSACTIONS } = COLLECTIONS;

  useEffect(() => {
    getDoc(`${USERS}/${auth.currentUser.uid}/${TRANSACTIONS}`, id).then(
      (data) => {
        console.log("data", data);
        setData(data);
      }
    );
  }, []);

  return <>{data && <AddNewTransaction data={data} />}</>;
};

export default EditTransaction;
