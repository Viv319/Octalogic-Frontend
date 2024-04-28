
import './App.css';
import Booking from './components/booking.jsx'
import { useState, useEffect } from 'react';
import axios from "axios";

function App() {
  const [vehicle, setVehicle] = useState([])

  useEffect(()=>{
    fetchVehicle();
  },[])

  const fetchVehicle = async()=>{
    try{
      const res = await axios.get('http://localhost:4000/vehicals')
      if(res.data)
      setVehicle(res.data.data);
    }catch(e){
      console.log(e);
    }
  }
  return (
    < >
      <h1 className="display-1">Welcome to vehicle Booking Service</h1>
      <p className="lead"> Explore our wide range of Vehicals and book according to your comfort</p>

      <Booking/>

    </>
  );
}

export default App;
