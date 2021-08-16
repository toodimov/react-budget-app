import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../assets/svg/svg-icons";
import { auth } from "../config";
import { removeDoc } from "../services/firestoreApi";
import { COLLECTIONS } from "../static/constants";

const TransactionItem = ({ title, amount, type, id }) => {
  const { USERS, TRANSACTIONS } = COLLECTIONS;

  const handleDelete = () => {
    removeDoc(`${USERS}/${auth.currentUser.uid}/${TRANSACTIONS}`, id);
  };

  return (
    <div className="dashboard__transaction__item">
      <p>{title}</p>

      <span className={type}>€{amount}</span>

      <div className="controls">
        <Link className="controls__edit" to={`edit/${id}`}>
          <EditIcon />
          Edit
        </Link>

        <button onClick={handleDelete} className="controls__delete">
          <DeleteIcon />
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;
