
import Login from './components/Login';
import NavBar from './components/NavBar';
import Register from './components/Register';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashBord from './components/DashBord';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          
        <NavBar title="Crop-Care" />
        </header>
       
          <Routes>
            <Route path="/" element={<Login /> } />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/:teacherId/studentDetails" element={<StudentDetails />} /> */}
            <Route path="/dashbord" element={<DashBord />} />
          </Routes>
        {/* </body> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
