import { DeleteIcon, EditIcon } from "../assets/svg/svg-icons";

const TransactionItem = (props) => {
  return (
    <div className="dashboard__transaction__item">
      <p>{props.title}</p>

      <span className={props.type}>€{props.amount}</span>

      <div className="controls">
        <button className="controls__edit">
          <EditIcon />
          Edit
        </button>

        <button className="controls__delete">
          <DeleteIcon />
          Delete
        </button>
      </div>
    </div>
  );
};

export default TransactionItem;
