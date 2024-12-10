import { Box, InputLabel, MenuItem, Select, Grid } from '@mui/material';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { usePapaParse } from 'react-papaparse';

function App() {
  // bring in different charting packages/libraries and expirement with loading times, looks, etc.
  const { readString } = usePapaParse();
  const [data, setData] = useState();
  const [selection, setSelection] = useState(0);
  const [refreshKey, setRefreshKey] = useState(false);

  const handleFetch = (event) => {
    setRefreshKey(!refreshKey);
    setSelection(event.target.value);
    fetch( './innovation_day_2.csv' )
        .then( response => response.text() )
        .then( responseText => {
          readString(responseText, {
            worker: true,
            header: true,
            complete: (results) => {
              let filteredArr = [];
              let resultArr = results.data;
              resultArr.forEach((row) => {
                  filteredArr.push(row);
              });
              setData(filteredArr);
            },
          });
        });
    console.log("help me")
    console.log(data)
  };
}

export default App;
