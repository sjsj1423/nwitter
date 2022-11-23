import AppRouter from "components/Router";
import { useEffect, useState } from "react";
import { authService } from "fbase";
import userEvent from "@testing-library/user-event";



function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userObj, setUserObj] = useState(null);

  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if(user) {
        setIsLoggedIn(user);
        setUserObj(user); 
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, []);
    return (
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn} userObj={userObj}/> : "initializing..."};
    <footer>&copy; {new Date().getFullYear()} Nwitter </footer>
    </>
    )
}

export default App;
