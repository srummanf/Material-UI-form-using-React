import { AppBar, Toolbar } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';

import { Route, Routes } from "react-router-dom"
import Login from './components/Login';
import RegisterForm from './components/Register';

function App() {
  return (
    <React.Fragment>
      <AppBar position='inline'><Toolbar>MUI Form</Toolbar></AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </React.Fragment>
  );
}

export default App;