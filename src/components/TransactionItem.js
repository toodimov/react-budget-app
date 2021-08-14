import { Link } from "react-router-dom";
import { DeleteIcon, EditIcon } from "../assets/svg/svg-icons";

const TransactionItem = (props) => {
  return (
    <div className="dashboard__transaction__item">
      <p>{props.title}</p>

      <span className={props.type}>€{props.amount}</span>

      <div className="controls">
        <Link className="controls__edit" to={`edit/${props.id}`}>
          <EditIcon />
          Edit
        </Link>

        <button className="controls__delete">
          <DeleteIcon />
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;
