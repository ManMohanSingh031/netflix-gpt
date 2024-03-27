import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/Firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";
import {LOGO_URL} from "../utils/constant";

const Header = () => {

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  useEffect(() => {
    const Unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => Unsubscribe();
  },[]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
      <img
        className="w-48"
        src={LOGO_URL}
        alt="logo"
      />

      {user && (
        <div className="flex p-6">
          <img className="w-10 h-10" src={user?.photoURL} alt="usericon" />
          <button onClick={handleSignOut} className="text-white font-bold">
            (Sign out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
