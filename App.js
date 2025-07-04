import React, { Children } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import login from './pages/login';
import signup from './pages/signup';
import Homepage from './pages/Homepage';
import { AuthProvider, useAuth} from './context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const {auth} = useAuth();
  return auth.user ? children: <Navigate to='/login'/>;
}
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/login" element={<login/>} />
          <Route path="/signup" element={<signup/>} />
          <Route
          path="/"
          element={
            <ProtectedRoute>
             <Homepage/>
            </ProtectedRoute>
          }/>
        </Routes>

      </Router>
    </AuthProvider>
  )
}


export default App;
