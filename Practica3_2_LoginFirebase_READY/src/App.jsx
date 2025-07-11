import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AuthForm from './components/AuthForm/AuthForm';
import SignupForm from './components/SignupForm/SignupForm';
import Dashboard from './components/Dashboard/Dashboard';
import PrivateRoute from './router/PrivateRoute';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Login</Link> | <Link to="/signup">Registro</Link>
      </nav>
      <Routes>
        <Route path="/" element={<AuthForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
