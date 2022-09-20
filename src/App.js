import { useState } from 'react';
import './App.css';
import {Vehicles} from  './components/Vehicles/Vehicles'
import {Tolls} from './components/Toll/Toll';
import { VehicleForm } from './components/Form/VehicleForm';
import { TollForm } from './components/Form/TollForm';
import { Header } from './components/Header/Header';
import { Routes, Route } from "react-router-dom"

function App() {
  const [showVehicle , setShowVehicle] = useState(true);
  const handleClick = (data)=>{
    setShowVehicle(data)
  }
  return (
    <div className="App">
       <Routes>
        <Route path="/" element={ <Vehicles/> } />
        <Route path="/tolls" element={ <Tolls/> } />
        <Route path ="/add-vehicle" element={<VehicleForm/>}/>
        <Route path="/add-tolls" element={<TollForm/>} />
      </Routes>
    </div>
  );
}

export default App;
