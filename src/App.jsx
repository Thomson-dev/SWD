import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Business from './screens/Business';
import Blog from './screens/Blog';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import VerifyOtp from './screens/verifyOtp';
import ForgotPassword from './screens/ForgotPassword';
import Price from './screens/Price';
import Feature from './screens/Feature';
import OtpMessage from './screens/OtpMessage';
import ResetPassword from './screens/ResetPassword';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Business />} />
        <Route path="/blog" element={< Blog  /> } />
         <Route path="/register" element={< SignUp  /> } />
         <Route path="/price" element={< Price  /> } />
         <Route path="/features" element={< Feature  /> } />
         <Route path="/verifyOtp" element={< VerifyOtp /> } />
         <Route path="/resetPassword" element={< ResetPassword /> } />
         <Route path="/otpMessage" element={< OtpMessage /> } />
        <Route path="/login" element={< Login /> } />
        <Route path="/forgotPassword" element={< ForgotPassword /> } />
        
      </Routes>
    </Router>
  );
};

export default App;