import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home';
import StartWork from './Pages/Users/StartWork/StartWork';
import AttendanceSheet from './Pages/Users/AttendanceSheet/AttendanceSheet';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />
            <Route path="/StartWorking" element={<StartWork />} />
            <Route path="/AttendanceSheet" element={<AttendanceSheet />} />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
