import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import Geocode from 'react-geocode';

const API_KEY = process.env.REACT_APP_API_KEY; // Google Geocode key
const MAP_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN; // Mapbox token

function Map() {
  Geocode.setApiKey(API_KEY);

  const [viewport, setViewport] = useState({
    latitude: 44.967243, //Geographic center of the US
    longitude: -103.771556,
    width: '75vw',
    height: '75vw',
    zoom: 10,
  });
  const [search, setSearch] = useState('');

  const handleChange = e => {
    setSearch(e.target.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    Geocode.fromAddress(`${search}`).then(
      res => {
        const { lat, lng } = res.results[0].geometry.location;
        console.log(lat, lng);
        setViewport({ ...viewport, latitude: lat, longitude: lng });
      },
      error => {
        console.log(error);
      }
    );
    setSearch('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          value={search}
          placeholder=""
          onChange={handleChange}
        />
        <button type="submit">Search!</button>
      </form>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={MAP_TOKEN}
        onViewportChange={viewport => {
          setViewport(viewport);
        }}
        mapStyle="mapbox://styles/cssc1/ckkg67a3000eo17s4xx1ocnvr"
      ></ReactMapGL>
    </div>
  );
}

export default Map;
