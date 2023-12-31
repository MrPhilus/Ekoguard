import { ErrorBoundary } from "react-error-boundary";
import { Link, useLocation } from "react-router-dom";
import { ErrorUI } from "../error/ErrorUi";
import truck from "../../assets/videos/Wastecollection-truck.gif";
import feedback from "../../assets/images/wewantfeedback.png";
import transaction from "../../assets/images/Transaction.png";
import profileImg from "../../assets/images/profile.png";
import ArrowNarrowLeft from "../../assets/svg/arrow_narrow_left.svg";
import { isAuthenticated } from "../../services/identityService";

const AuthLayout = ({ children }) => {
  const location = useLocation();
  const linkTo = location.pathname === "/signup" ? "/login" : "/signup";
  const isLoggedIn = isAuthenticated();

  const header = () => {
    if (location.pathname === "/signup") {
      return "Let's Get Started";
    } else if (location.pathname === "/completeprofile") {
      return "Complete Profile";
    } else if (location.pathname === "/signin") {
      return "Welcome Back!";
    } else if (location.pathname === "/forgotpassword") {
      return "Forgot Password?";
    } else if (location.pathname === "/passwordreset") {
      return "Create New Password.";
    } else if (location.pathname === "/verification") {
      return "Verify Your Phone Number.";
    } else if (location.pathname === "/login") {
      return "Login";
    }
  };

  const subHeader = () => {
    if (location.pathname === "/signup") {
      return "To sign up user must fill in basic information below";
    } else if (location.pathname === "/completeprofile") {
      return "Complete profile information to go on to assessment";
    } else if (location.pathname === "/login") {
      return "Please enter your information to access your Account.";
    } else if (location.pathname === "/forgotpassword") {
      return "Please provide your email address to initiate the password reset process.";
    } else if (location.pathname === "/passwordreset") {
      return `To ensure unauthorised access is prevented, kindly reset your password using strong characters.`;
    }
  };

  return (
    <div className="flex-col lg:bg-authImage bg-contain bg-left bg-no-repeat h-screen w-full flex items-center gap-6 bg-white md:p-5 lg:p-0">
      <ErrorBoundary FallbackComponent={ ErrorUI }>
        <div className=" col-span-1 mt-3">
          { location.pathname === "/feedback" ? (
            <img className="m-auto w-3/4" src={ feedback } alt="feedback" />
          ) : location.pathname === "/history" ? (
            <img
              className="m-auto w-3/4"
              src={ transaction }
              alt="transactions"
            />
          ) : location.pathname === "/profile" ? (
            <img className="m-auto w-3/4" src={ profileImg } alt="profile" />
          ) : (
            <img className="m-auto w-3/4" src={ truck } alt="truck" />
          ) }
        </div>

        <div className="sm:w-2/5 w-full flex-col items-end sm:p-2 p-4">
          <Link
            to={ location.pathname.includes("forgotpassword") ? "/login" : "/services" }
          >
            <span className="text-black font-medium text-small flex gap-2 items-center">
              <img src={ ArrowNarrowLeft } alt="" />{ " " }
              { location.pathname.includes("forgotpassword")
                ? "Go back to login"
                : "Go Back" }
            </span>
          </Link>
          <h1 className="my-2 lg:text-xl-heading text-olive-500 font-semibold md:text-xl">
            { " " }
            { !isLoggedIn ? header() : "" }
          </h1>
          <p className="mb-2 text-gray-900 font-semibold md:text-md">
            { " " }
            { !isLoggedIn ? subHeader() : "" }
          </p>
          <div>
            { children }
            { !isLoggedIn &&
              (location.pathname === "/signup" ||
                location.pathname === "/login") && (
                <p className=" text-black text-sm font-bold my-1">
                  { location.pathname === "/signup"
                    ? "Have an account?"
                    : "Don't have an Account?" }{ " " }
                  <Link to={ linkTo } className="text-olive-500">
                    { location.pathname === "/signup" ? "Sign In" : "Sign Up" }
                  </Link>
                </p>
              ) }
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default AuthLayout;
