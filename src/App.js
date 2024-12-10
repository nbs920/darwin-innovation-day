import useData from "./util/useData";
import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import RechartBar from "./graphs/RechartBar";
import LineGraph from "./graphs/LineGraph";

function App() {
  // bring in different charting packages/libraries and expirement with loading times, looks, etc.
  const data = useData();
  const [selectionValue, setSelectionValue] = useState('');
  const [selectedShopData, setSelectedShopData] = useState([]);

  const handleSelectChange = (event, value) => {
    setSelectionValue(event.target.value);
    setSelectedShopData(data[event.target.value - 1]);
  };

  return (
      <>
      <Box margin={"10%"}>
        <FormControl fullWidth>
          <InputLabel id="shop-label">Select Shop</InputLabel>
          <Select
            name="Select Shop"
            value={selectionValue}
            label="Select Shop"
            onChange={handleSelectChange}
          >
            <MenuItem value={1}>Mock Shop 1</MenuItem>
            <MenuItem value={2}>Mock Shop 2</MenuItem>
            <MenuItem value={3}>Mock Shop 3</MenuItem>
          </Select>
        </FormControl>
        <Box margin={"3%"}>
          <Grid container spacing={2}>
            {selectionValue != '' && (
            <Grid item xs={5}>
              <RechartBar data={selectedShopData}/>
            </Grid>)}
            {selectionValue != '' && (
            <Grid item xs={5}>
              <LineGraph data={selectedShopData}/>
            </Grid>)}
            <Grid item xs={5}>
              {/* INSERT GRAPH HERE */}
            </Grid>
            <Grid item xs={5}>
              {/* INSERT GRAPH HERE */}
            </Grid>
          </Grid>
        </Box>
      </Box>
      </>
  )
}

export default App;
