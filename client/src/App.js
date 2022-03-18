import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppointmentMain from "./components/AppointmentPage/AppointmentMain/AppointmentMain";
import Home from './components/HomePage/Home/Home';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/appointment" element={<AppointmentMain/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
