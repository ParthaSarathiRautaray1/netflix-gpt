export const checkValidData = (email , password , name , phone) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isEmailValid){
        return "Invalid Email !"
    }
    if(!isPasswordValid){
        return "Invalid Password !"
    }

    // If name is provided (i.e., on the Sign Up page), validate it
  if (name !== null) {
    const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    if (!isNameValid) {
      return "Invalid Name!";
    }
  }

  // If phone is provided (i.e., on the Sign Up page), validate it
  if (phone !== null) {
    const isPhoneValid = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(phone);
    if (!isPhoneValid) {
      return "Invalid Phone Number!";
    }
  }

    

    return null;

}

