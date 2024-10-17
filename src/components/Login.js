import { useState , useRef } from "react"
import Header from "./Header"
import {checkValidData} from "../utils/validate"
const Login = () => {
    const [isSignin , setisSignin] = useState(true)

    const [errorMessage , seterrorMessage] = useState(null)

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

            <button className="p-4 m-4 bg-red-700 w-full font-bold rounded-md" type="submit" onClick={handleButtonClick}>{isSignin ? "Sign In " : "Sign UP"} </button>
            <p className="py-4 px-4 cursor-pointer underline underline-offset-4" onClick={toggleSignInform} >{ isSignin ? "New to Netflix ? Sign Up Now" :"Already Singed Up ! Sign In"}</p>

        </form>
    </div>
  )
}

export default Login
