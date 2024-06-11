import logo from './logo.svg';
import './App.css';
import TopNavbar from './component/TopNavbar';
import Navbar from './component/Navbar';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import Home from './pages/Home';
import ScholarshipForm1 from './component/ScholarshipForm1';
import ScholarshipForm2 from './component/ScholarshipForm2';
import ScholarshipForm from './pages/ScholarshipForms';
import Meeting from './pages/Meeting';
import News_Stories from './pages/News_Stories';
import TheImpact from './pages/TheImpact';
import OurProgram from './pages/OurProgram';
import Contactus from './pages/ContactUs';
import MakeAnAppoitment from './pages/MakeAnAppointment';
function App() {
  return (
    <BrowserRouter>
      <TopNavbar/>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/scholarshipForm' element={<ScholarshipForm/>}/>
        <Route path='/scholarshipForm1' element={<ScholarshipForm1/>}/>
        <Route path='/scholarshipForm2' element={<ScholarshipForm2/>}/>
        <Route path='/Meeting' element={<Meeting/>}/>
        <Route path='/New_Stories' element={<News_Stories/>}/>
        <Route path='/Theimpact' element={<TheImpact/>}/>
        <Route path='/ourprogram' element={<OurProgram/>}/>
        <Route path='/contactus' element={<Contactus/>}/>
        <Route path='/makeAnAppointment' element={<MakeAnAppoitment/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
