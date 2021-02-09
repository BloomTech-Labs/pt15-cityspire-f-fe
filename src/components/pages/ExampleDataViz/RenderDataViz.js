/*eslint no-unused-vars: 0 */
import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import { getDSData } from '../../../api';

const initialState = {
  data: [],
  layout: {},
  frames: [],
  config: {
    displaylogo: false,
    displayModeBar: false,
  },
};

function DataViz(props) {
  const [data, setData] = useState(initialState);
  const [figure, setFigure] = useState(null);
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: '65vw',
    height: '65vw',
    zoom: 4,
  });
  useEffect(() => {
    function fetchDSData() {
      getDSData(props.url, props.authState)
        .then(res => {
          setData(res);
        })
        .catch(err => {
          setData({ data: null, err });
        });
    }
    fetchDSData();
  }, [props.url, props.authState]);

  return <div></div>;
}

export default DataViz;
