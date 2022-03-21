import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppointmentMain from "./components/AppointmentPage/AppointmentMain/AppointmentMain";
import DashHome from "./components/Dashboard/DashHome/DashHome";
import Home from './components/HomePage/Home/Home';
function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/appointment" element={<AppointmentMain/>} />
      <Route path="/dashboard/*" element={<DashHome/>} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
