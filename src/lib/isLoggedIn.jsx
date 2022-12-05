const isLoggedIn = () => {
    return !!localStorage.getItem("Log");
  };
  
  export default isLoggedIn;