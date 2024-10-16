import { useState } from "react"
import Header from "./Header"

const Login = () => {
    const [isSignin , setisSignin] = useState(true)
    const toggleSignInform =() =>{
        setisSignin(!isSignin)
    }
  return (
    <div>
      <Header />

        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/IN-en-20241008-TRIFECTA-perspective_b28b640f-cee0-426b-ac3a-7c000d3b41b7_small.jpg" alt="logo" />
        </div>
    

        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white font-[Poppins] bg-opacity-80">
            <h1 className="font-bold text-3xl py-4">{isSignin ? "Sign In " : "Sign UP"}</h1>
            {!isSignin && (<input type="text" placeholder="Name" className="p-4 m-4 w-full bg-gray-700 rounded-lg" />)}
            {!isSignin && (<input type="tel"  placeholder="+91 9876543210" pattern="[+]{1}[9]{1}[1]{1} [0-9]{10}" required className="p-4 m-4 w-full bg-gray-700 rounded-lg" />)}
            <input type="text" placeholder="Email Address" className="p-4 m-4 w-full bg-gray-700 rounded-lg" />
            <input type="password" placeholder="Password"  className="p-4 m-4 w-full bg-gray-700 rounded-lg" />
            <button className="p-4 m-4 bg-red-700 w-full font-bold rounded-md" type="submit">{isSignin ? "Sign In " : "Sign UP"} </button>
            <p className="py-4 px-4 cursor-pointer underline underline-offset-4" onClick={toggleSignInform} >{ isSignin ? "New to Netflix ? Sign Up Now" :"Already Singed Up ! Sign In"}</p>

        </form>
    </div>
  )
}

export default Login
