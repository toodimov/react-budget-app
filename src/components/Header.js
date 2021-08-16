import { Link } from "react-router-dom";
import { auth } from "../config";

const Header = () => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <header className="header">
      <div className="wrapper">
        <Link to="/">
          <h3>Budget App</h3>
        </Link>
        {/* <button className="button"></button> */}
        <button onClick={handleLogout} className="button">
          Log Out
        </button>
      </div>
    </header>
  );
};

export default Header;
