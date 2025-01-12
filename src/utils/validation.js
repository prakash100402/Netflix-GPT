export const validation = (email, password) => {
    //const isNameValid = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/.test(name);
    const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    
    if(!isEmailValid && !isPasswordValid) return "Email & Password is not valid";
    if (!isEmailValid) return "Email is not Valid";
    if(!isPasswordValid) return "Password is not valid";
    //if(!isNameValid) return "Write Proper Name";

    return null;
};