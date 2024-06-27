
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PetsPage from "./pages/PetsPage";
import Volunteer from "./pages/Volunteer";
import Home from "./pages/Home";
import HelpUs from "./pages/HelpUs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AddPets from "./pages/AddPets";
import { PetsContextProvider } from "./components/PetsContext";

const App = () => {
  return (
    // wrap everything w petscontextprovider so we can use it in any of the components defined below
    
      <BrowserRouter> 
      <Routes>
        <Route index element = {<Home />} />
      <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/volunteer" element={<Volunteer />} />
        <Route path="/help-us" element={<HelpUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/add-pets" element={<AddPets />} />
    </Routes>
  
    </BrowserRouter>
    
    
    
   
    
  );
}; 


export default App;