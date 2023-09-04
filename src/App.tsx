import React, { useEffect, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MyNewList from './MyNewList/MyNewList'

interface Coordinates {
  latitude: number,
  longitude: number
}

function App() {

  // const {geolocation} = navigator;

  // const [coordinates, setCoordinates] = useState<Coordinates>();
  // const API_KEY = 'AIzaSyCbCqqn5BFbSHY9A4p4tIfjyEZOwWQsW9U'

//   const requestOptions = {
//     method: 'GET',
//     headers: { }
// };

  // useEffect(() => {
  //   geolocation.getCurrentPosition(({coords, coords: {latitude, longitude}}) => {
  //     setCoordinates({
  //       latitude,
  //       longitude
  //     }); 
  //   console.log(coords)
  //   //fetchNearByPlaces({latitude, longitude})
  // })

    

  // }, [geolocation])

  // const fetchNearByPlaces = (coordinates: Coordinates) =>{
  //   fetch('https://maps.googleapis.com/maps/api/place/nearbysearch/json' + 
  //   '&location=' + coordinates.latitude + '%2C' + coordinates.longitude +
  //   '&radius=1500&type=restaurant' +
  //   '&key=' + API_KEY, requestOptions)
  //       .then(response => response.json())
  //       .then(data => console.log(data));
  // }


  return (
    <div className="App">
      <header className="App-header">
        {/* <MyNewList /> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
