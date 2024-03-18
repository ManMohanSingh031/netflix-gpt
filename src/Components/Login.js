import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <img
        className=" absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
      />
      <form className="absolute w-3/12 bg-black text-white p-12 my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="text-4xl font-bold m-4 mb-4">
          {isSignIn ? "Sign In " : "Sign Up Now"}
        </h1>

        {!isSignIn &&(
         <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full p-3 m-3 rounded-md border-solid border-2 border-white border-opacity-50 bg-gray-700"
        />)}
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full p-3 m-3 rounded-md border-solid border-2 border-white border-opacity-50 bg-gray-700"
        />
        <input
          type="password"
          placeholder="Password"
          required
          className="w-full p-3 m-3 rounded-md order-solid border-2 border-white border-opacity-50  bg-gray-700"
        />
        <button
          type="submit"
          className="bg-red-600 hover:bg-red-700 text-white w-full p-3 m-2 rounded-md "
        >
          {" "}
          {isSignIn ? "Sign In " : "Sign Up"}{" "}
        </button>
        <div className="mt-6">
          <p className="text-gray-400 m-4 text-sm">
            {isSignIn ? "New to Netflix? " : "Already a user? "}
            <span className="text-white cursor-pointer" onClick={toggleSignIn}>
              {isSignIn ? "Sign Up " : "Sign In"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
