import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider';
import Home from './Pages/Home/Home';
import StartWork from './Pages/Users/StartWork/StartWork';
import AttendanceSheet from './Pages/Users/AttendanceSheet/AttendanceSheet';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import EditAttendance from './Pages/EditAttendance/EditAttendance';
import EmployeeList from './Pages/AdminDashboard/EmployeeList/EmployeeList';
import EditInformation from './Pages/AdminDashboard/EditInformation/EditInformation';
import AdminRoute from './Pages/Login/AdminRoute/AdminRoute';

function App() {

  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PrivateRoute>
              <StartWork />
            </PrivateRoute>}>
            </Route>
            <Route path="/StartWork" element={<PrivateRoute>
              <StartWork />
            </PrivateRoute>}>
            </Route>
            <Route path="/AttendanceSheet" element={<PrivateRoute>
              <AttendanceSheet />
            </PrivateRoute>}>
            </Route>

            <Route path="/editAttendance/:id" element={<PrivateRoute>
              <EditAttendance />
            </PrivateRoute>}>
            </Route>

            <Route path="/employeeList" element={<AdminRoute>
              <EmployeeList />
            </AdminRoute>
            }>
            </Route>

            <Route path="/editInformaion/:id" element={<AdminRoute>
              <EditInformation />
            </AdminRoute>}>
            </Route>

            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<Home />} />

          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
