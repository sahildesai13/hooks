import './App.css';
import Calculator from './Calculator/Calculator';
import Slot from './Slot/Slot';
import StudentResult from './StudentResult/StudentResult';
import Age from './age/Age';
import Cal from './cal/Cal';
import ToDo from './ToDo/ToDo';
import ApiCalling from './ApiCalling/ApiCalling';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios, { isCancel, AxiosError } from 'axios';
import React, { useEffect, useState } from 'react'
import Loader from './Loader/Loader';

function App() {
  let [isLoading, setIsloading] = useState(true);
  let [temp,setTemp] = useState([]);
  let [data, setData] = useState([]);
  useEffect(() => {
    axios.get('https://rickandmortyapi.com/api/character')
      .then(function (response) {
        setData(response.data.results);
        setTemp(data);
        setIsloading(false);
      })
      .catch(function (error) {
        setData(error);
        setIsloading(false);
      })
  }, [])
  return (
    <div className="App">
      {/* <Cal></Cal> */}
      {/* <Calculator></Calculator> */}
      {/* <Age></Age> */}
      {/* <Slot></Slot> */}
      {/* <StudentResult></StudentResult> */}
  <ToDo/>
      {isLoading? <Loader></Loader> :  <ApiCalling details={data} reStrat={temp} setdata={setData}></ApiCalling>}
     
    </div>
  );
}

export default App;
