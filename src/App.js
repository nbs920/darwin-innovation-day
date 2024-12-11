import useData from "./util/useData";
import { useState } from "react";
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import SalesByCategoryBarChart from "./graphs/SalesByCategoryBarChart";
import {Stack, Typography} from "@mui/material";
import SalesByCategoryTotalPieChart from "./graphs/SalesByCategoryTotalPieChart";
import LineChartKPI from "./graphs/LineChartKPI";
import LineGraph from "./graphs/LineGraph";
import StackedArea from "./graphs/StackedArea";
import SimpleArea from "./graphs/SimpleArea";
import LineChartKPI2 from "./graphs/LineChartKPI2";

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
      <Box margin={"5%"} sx={{ p: 1, borderRadius: 3 }} boxShadow={5}>
        <Box marginLeft={"3%"} marginRight={"80%"}>
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
        </FormControl></Box>
        <Box margin={"3%"}>
          {selectionValue !== '' && (
          <>
          <Box 
            sx={{ p: 1, borderRadius: 2 }}
            boxShadow={3} marginBottom={"2%"}>
            <Box margin={"2%"}>
              <Typography fontSize={30} fontWeight={'bold'}>Summary</Typography>
              <Stack direction="row" spacing={20}>
                <LineChartKPI data={selectedShopData} shopSelection={selectionValue}/>
                <LineGraph data={selectedShopData}/>
                <LineChartKPI2 data={selectedShopData} shopSelection={selectionValue}/>
              </Stack>
            </Box>
          </Box>
            <Box
            sx={{ p: 1, borderRadius: 3 }}
            boxShadow={5}>
              <Box margin={"2%"}>
              <Typography fontSize={30} fontWeight={'bold'}>Sales per Category</Typography>
                <Stack direction="row" spacing={10} marginBottom={"2%"}>
                  <SalesByCategoryTotalPieChart data={selectedShopData}/>
                  <SimpleArea data={selectedShopData}/>  
                </Stack>
                <Stack direction="row" spacing={10}>
                  <StackedArea data={selectedShopData}/>  
                  <SalesByCategoryBarChart data={selectedShopData}/>
                </Stack>
              </Box>
            </Box>
          </>
          )}
        </Box>
      </Box>
    </>
  )
}

export default App;
