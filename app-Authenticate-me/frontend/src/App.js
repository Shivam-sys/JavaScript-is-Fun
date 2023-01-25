import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LoginFormPage from "./components/LoginFormPage";
import * as sessionActions from "./store/session";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function Home({ user }) {
  return (
    <>
      <h1>Home</h1>
      {user && <h2>hello {user.username}</h2>}
    </>
  );
}

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);
  const sessionUser = useSelector((state) => state.session.user);
  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Routes>
          <Route path="/" element={<Home user={sessionUser} />} />
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="/signup" element={<SignupFormPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
