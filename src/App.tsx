import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersContainer from './components/UsersPage/UsersContainer';
import Aside from './components/Aside/Aside';
import ProfileContainer from './components/ProfilePage/ProfileContainer';

function App() {
  return (
      <main className='main'>
        <BrowserRouter>
          <Aside/>
          <Routes>
            <Route path='/' element={<UsersContainer />} />
            <Route path='/profile/:userId' element={<ProfileContainer />} />
          </Routes>
        </BrowserRouter>
        </main>
  );
}

export default App;
