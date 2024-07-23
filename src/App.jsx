

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import PetsPage from "./pages/PetsPage";
import Home from "./pages/Home";
import HelpUs from "./pages/HelpUs";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import AddPets from "./pages/AddPets";
import AppContext from "./components/AppContext/AppContext";
import AddVolunteers from "./pages/AddVolunteers";
import DeletePets from "./pages/DeletePets";
import DeleteVolunteers from "./pages/DeleteVolunteers";
import Homesignin from "./signinpages/Home";
import Aboutsignin from './signinpages/About';
import Petssignin from './signinpages/Pets';
import Helpussignin from './signinpages/HelpUs';


const App = () => {
  
  return (
  
    
      <BrowserRouter> 
      <AppContext> 
      <Routes>
        <Route index element = {<Home />} />
      <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/pets" element={<PetsPage />} />
        <Route path="/help-us" element={<HelpUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/add-pets" element={<AddPets />} />
        <Route path="/add-volunteers" element={<AddVolunteers />} />
        <Route path="/delete-pets" element={<DeletePets />} />
        <Route path="/delete-volunteers" element={<DeleteVolunteers />} />
        <Route path="/signin-home" element={<Homesignin />} />
        <Route path="/signin-about" element={<Aboutsignin />} />
        <Route path="/signin-pets" element={<Petssignin />} />
        <Route path="/signin-helpus" element={<Helpussignin />} />
        
        
    </Routes>
    </AppContext>
    </BrowserRouter>
   
    
    
    
   
    
  );
}; 


export default App;