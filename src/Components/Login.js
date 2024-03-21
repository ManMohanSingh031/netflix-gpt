import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validation";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInform, setisSignInform] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const nevigate = useNavigate();

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);
    if (message) return;

    if (!isSignInform) {
      // Sign up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://occ-0-2164-3466.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e",
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              nevigate("/browse");
            })
            .catch((error) => {
              // An error occurred
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "--" + errorMessage);
        });
    } else {
      // Sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          nevigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "--" + errorMessage);
        });
    }
  };

  const toggleSignInform = () => {
    setisSignInform(!isSignInform);
  };
  return (
    <div>
      <Header />
      <img
        className=" absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt="background"
      />
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-3/12 bg-black text-white p-12 my-36 mx-auto right-0 left-0 bg-opacity-80"
      >
        <h1 className="text-4xl font-bold m-4 mb-4">
          {isSignInform ? "Sign In " : "Sign Up"}
        </h1>

        {!isSignInform && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            required
            className="w-full p-3 m-3 rounded-md border-solid border-2 border-white border-opacity-50 bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="w-full p-3 m-3 rounded-md border-solid border-2 border-white border-opacity-50 bg-gray-700"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="w-full p-3 m-3 rounded-md order-solid border-2 border-white border-opacity-50  bg-gray-700"
        />
        <p className="text-red-600 p-2">{errorMessage}</p>
        <button
          className="bg-red-600 hover:bg-red-700 text-white w-full p-3 m-2 rounded-md "
          onClick={handleButtonClick}
        >
          {isSignInform ? "Sign In " : "Sign Up"}
        </button>
        <div className="mt-6">
          <p className="text-gray-400 m-4 text-sm">
            {isSignInform ? "New to Netflix? " : "Already a user? "}
            <span
              className="text-white cursor-pointer"
              onClick={toggleSignInform}
            >
              {isSignInform ? "Sign Up Now" : "Sign In"}
            </span>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
