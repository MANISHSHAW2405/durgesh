import React, { Component , useEffect, useState } from 'react';
import './App.css';
import Mcu from './Components/Mcu'
import CarouselDemo from './Components/CarouselDemo'
import ReactPlayer from 'react-player/lazy'
import Cardhai from './Components/Cardhai'

function App() {

  

  return (
    <div>
      <CarouselDemo />
      <button >click</button>
      <Mcu />
      
      

    </div>

  );
}

export default App;
