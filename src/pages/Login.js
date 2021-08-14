import { Link } from "react-router-dom";
import Lottie from "react-lottie";
// import LoginAnimation from "./../lotties/money-tree";
import LoginAnimation from "./../lotties/70357-expenses-calculation.json";
import { Google } from "../assets/svg/svg-icons";

// import { Link } from "@material-ui/icons";
const Login = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoginAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="login">
      <Lottie options={defaultOptions} width={510} />
      <Link className="button" to="/">
        <Google />
        Continue with Google
      </Link>
    </div>
  );
};

export default Login;
