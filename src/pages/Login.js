import Lottie from "react-lottie";
// import LoginAnimation from "./../lotties/money-tree";
import LoginAnimation from "./../lotties/70357-expenses-calculation.json";
import { Google } from "../assets/svg/svg-icons";
import { auth, GoogleAuthProvider } from "../config";
import { setAndMergeDoc } from "../services/firestoreApi";
import { COLLECTIONS } from "../static/constants";

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

  const { USERS } = COLLECTIONS;

  const handleGoogleClick = () => {
    const provider = new GoogleAuthProvider();
    auth.signInWithPopup(provider).then((result) => {
      setAndMergeDoc(USERS, result.user.uid, {
        name: result.user.displayName,
        photoURL: result.user.photoURL,
      });
    });
  };

  return (
    <div className="login">
      <Lottie options={defaultOptions} width={510} />
      <button onClick={handleGoogleClick} className="button" to="/">
        <Google />
        Continue with Google
      </button>
    </div>
  );
};

export default Login;
