import { useState , useRef } from "react"
import Header from "./Header"
import {checkValidData} from "../utils/validate"

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {auth} from "../utils/firebase"
import { useNavigate } from "react-router-dom";

const provider = new GoogleAuthProvider();


const Login = () => {
    const [isSignin , setisSignin] = useState(true)

    const [errorMessage , seterrorMessage] = useState(null)

    const navigate = useNavigate()

    const toggleSignInform =() =>{
        setisSignin(!isSignin)
    }

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)
    const phone = useRef(null)

    const handleButtonClick = () =>{
      // console.log(email.current.value);
      // console.log(password.current.value);
      
      const message = checkValidData(
        email.current.value ,
        password.current.value , 
        isSignin ? null : name.current?.value,  // Only pass if not Sign In
        isSignin ? null : phone.current?.value   // Only pass if not Sign In
      )
      seterrorMessage(message)

      if(message) return // if message then there should be an error . so not need to go further return from here else go ahead and create a user

      if(!isSignin){
        //signup logic
        signInWithPopup(auth, provider)

          .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log(user);
            navigate("/browse")

            
           
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
            seterrorMessage(errorCode + "-" + errorMessage)
            });


      }else{
        //signin logic
        
          signInWithPopup(auth, provider)
            .then((result) => {
              const user = result.user;
              console.log("User signed in:", user);

              // Now, user is signed in - you can redirect or show a welcome message
              navigate("/browse")
            })
            .catch((error) => {
              console.error('Error during sign-in:', error.message);
            });
        ;
      }
      
    }
  return (
    <div>
      <Header />

        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg" alt="logo" />
        </div>
    

        <form onSubmit={(e) => e.preventDefault()} className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white font-[Poppins] bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignin ? "Sign In " : "Sign UP"}</h1>
            {!isSignin && (<input ref={name} type="text" placeholder="Name" className="p-4 m-4 w-full bg-gray-700 rounded-lg" />)}
            {!isSignin && (<input ref={phone} type="tel"  placeholder="+91 9876543210" pattern="[+]{1}[9]{1}[1]{1} [0-9]{10}" required className="p-4 m-4 w-full bg-gray-700 rounded-lg" />)}
            <input ref={email} type="text" placeholder="Email Address" className="p-4 m-4 w-full bg-gray-700 rounded-lg" />
            <input ref={password} type="password" placeholder="Password"  className="p-4 m-4 w-full bg-gray-700 rounded-lg" />

            <p className="text-red-500 px-4 text-sm font-semibold">{errorMessage}</p>

            <span className= "px-40 text-sm font-semibold">or</span>

            <button className="p-4 m-4 bg-red-700 w-full font-bold rounded-md" type="submit" onClick={handleButtonClick}>{isSignin ? "Sign In with Google " : "Sign UP"} </button>
            <p className="py-4 px-4 cursor-pointer underline underline-offset-4" onClick={toggleSignInform} >{ isSignin ? "New to Netflix ? Sign Up Now" :"Already Singed Up ! Sign In"}</p>

        </form>
    </div>
  )
}

export default Login
