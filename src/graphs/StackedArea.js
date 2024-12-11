import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';
import Box from "@mui/material/Box";

const StackedArea = (props) => {
    let data = props.data;

    let formattedArr = [];
    data.results.forEach((row) => {
        formattedArr.push({
            name: row['MONTH'],
            TOTAL: parseInt(row['TOTAL_SALES']),
            LABOR: parseInt(row['LABOUR_SALES']),
            PARTS: parseInt([row['PARTS_SALES']]),
            PAINT: parseInt(row['PAINT_MATERIAL_SALES']),
            SUBLET: parseInt(row['SUBLET_SALES']),
            OTHER: parseInt(row['OTHER_SALES'])
        })
    });

    console.log(formattedArr);

    return (<>
        <Box margin={"2%"}>
            <AreaChart
                width={730}
                height={400}
                data={formattedArr}
                margin={{
                    top: 10, right: 30, left: 0, bottom: 0,
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="name"/>
                <YAxis domain={['dataMin', 'dataMax']}/>
                <Legend verticalAlign="top" height={36}/>
                <Tooltip/>
                <Area type="monotone" dataKey="OTHER" stackId="1" stroke="#bf04bb" fill="#bf04bb"/>
                <Area type="monotone" dataKey="PAINT" stackId="1" stroke="#9b3f43" fill="#9b3f43"/>
                <Area type="monotone" dataKey="SUBLET" stackId="1" stroke="#2f4c60" fill="#2f4c60"/>
                <Area type="monotone" dataKey="LABOR" stackId="1" stroke="#82ca9d" fill="#82ca9d"/>
                <Area type="monotone" dataKey="PARTS" stackId="1" stroke="#ffc658" fill="#ffc658"/>
            </AreaChart>
        </Box>
    </>);
}

export default StackedArea
