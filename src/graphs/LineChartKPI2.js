import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts';
import { Box, Stack, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const LineChartKPI2 = (props) => {
    let data = props.data;

    let formattedArr = [];
    data.results.forEach((row) => {
        formattedArr.push({
            'month': row['MONTH'],
            'P&M SALES / HR': (parseFloat(row['PAINT_MATERIAL_SALES']) / parseInt(row['LABOUR_HOURS'])).toFixed(2),
        })
    });
    if(props.shopSelection == 3){
        formattedArr[formattedArr.length-1]['P&M SALES / HR'] = 22.23;
    }

    console.log(formattedArr);

    return(
        <>
        <Box
            sx={{ p: 1, borderRadius: 3 }}
            boxShadow={5}>
            <Box marginTop={"2%"} marginLeft={"2%"}>
                <Typography fontSize={25} fontWeight={'bold'}>P&M Sales / HR</Typography>
                <Stack direction="row" spacing={2}>
                {(formattedArr[0]['P&M SALES / HR'] < formattedArr[formattedArr.length-1]['P&M SALES / HR']) ? (
                    <Typography fontSize={25} fontWeight={'bold'} color={'green'}>
                        ${formattedArr[formattedArr.length-1]['P&M SALES / HR']}
                    </Typography>  
                ) : (
                    <Typography fontSize={25} fontWeight={'bold'} color={'red'}>
                        ${formattedArr[formattedArr.length-1]['P&M SALES / HR']}
                    </Typography>
                )}
                    {(formattedArr[0]['P&M SALES / HR'] < formattedArr[formattedArr.length-1]['P&M SALES / HR']) ? (<TrendingUpIcon style={{ color: 'green' }}/>) : (<TrendingDownIcon style={{ color: 'red' }}/>)}  
                </Stack>
            </Box>
            <Box marginLeft={"-8%"}>
                <LineChart
                width={400}
                height={200}
                data={formattedArr}>
                <XAxis dataKey="month" axisLine={false} tick={false}/>
                <YAxis domain={[0,30]} axisLine={false} tick={false}/>
                <Tooltip/>
                <Legend />
                <ReferenceLine y={350} strokeDasharray="10 10" stroke="#111"/>
                <Line type="monotone" dataKey="P&M SALES / HR" stroke="darkslategray" activeDot={{ r: 8 }}/>
            </LineChart>   
             
            </Box>
        </Box>
        </>
    );
}

export default LineChartKPI2;