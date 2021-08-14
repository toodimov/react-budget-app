import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <Link to="/">
          <h3>Budget App</h3>
        </Link>
        {/* <button className="button"></button> */}
        <Link to="/login" className="button">
          Log Out
        </Link>
      </div>
    </header>
  );
};

export default Header;
