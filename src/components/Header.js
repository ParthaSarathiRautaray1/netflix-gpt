import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const dispatch = useDispatch();

  const navigate = useNavigate()
  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid , email , displayName} = user;
        dispatch(addUser({uid: uid , email : email , displayName: displayName}))
       
        navigate("/browse")
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
       
      }
    });
  } , [])



  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between">
        <img className="w-52" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" alt="logonetflix" />

        <div className="flex">
          <button className="font-semibold text-white" onClick={handleSignout}>Sign Out</button>
          
          </div>  
    </div>
  )
}

export default Header
