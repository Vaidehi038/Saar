import React from 'react';
import Navbar from './homepage/Navigation/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Intro from './homepage/About us/Intro';
import Reason from './homepage/Choose us/Reason';
import Doctor from './homepage/Team/Doctor';
import Footer from './homepage/Footer/Footer';
import HeroImage from './homepage/HeroImage/welcome';
import PatientLogin from './Logins/PatientLogin';
import Treatments from './TypesOfTreatments/Treatments';
import Request from './Appointment/Request'
import Register from './Logins/registration/Register';
import Treatment1 from './TypesOfTreatments/Treatmentpages/Dryneedle';
import Treatment2 from './TypesOfTreatments/Treatmentpages/Postureandgait';
import Treatment3 from './TypesOfTreatments/Treatmentpages/Physiotherapy';
import Treatment4 from './TypesOfTreatments/Treatmentpages/Footalignment';



function App() {
  const homePage = (
    <>
      <HeroImage />
      <Intro />
      <Reason />
      <Doctor />
    </>
  );
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
        <Route path='/treatments' element={<Treatments />} />
        <Route path='/DryNeedling' element={<Treatment1 />} />
        <Route path='/Posture' element={<Treatment2 />} />
        <Route path='/Physiotherapy' element={<Treatment3 />} />
        <Route path='/Footalignment' element={<Treatment4 />} />
          <Route path='/login' element={<PatientLogin />} />
          <Route path='/register' element={<Register />} />
          <Route path='/appointment' element={<Request />} />
          <Route path='/' element={homePage}>
          </Route>
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
