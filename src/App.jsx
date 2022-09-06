import 'antd/dist/antd.css';
import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Card from './components/Card';
import ModalView from './components/ModalView';

function App() {
  
  return (
    <>
  
      <Routes>

        <Route path="/" element={<Card/>}/>
        <Route path="/modalDetail/:id" element={<ModalView/>}/>

      </Routes>

    </>
  );
}

export default App;
