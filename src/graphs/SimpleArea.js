import React from 'react';
import {
    AreaChart, Area, XAxis, YAxis, Tooltip, Legend
} from 'recharts';
import Box from "@mui/material/Box";

const SimpleArea = (props) => {
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
            <AreaChart width={730} height={400} data={formattedArr}
                       margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                    <linearGradient id="colorLabor" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorParts" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#ffc658" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#ffc658" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorPaint" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#9b3f43" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#9b3f43" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorSublet" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2f4c60" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#2f4c60" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorOther" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#bf04bb" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#bf04bb" stopOpacity={0}/>
                    </linearGradient>
                </defs>
                <XAxis dataKey="name"/>
                <YAxis domain={['dataMin', 'dataMax']}/>
                <Legend verticalAlign="top" height={36}/>
                <Tooltip/>
                <Area type="monotone" dataKey="OTHER" stroke="#bf04bb" fillOpacity={1} fill="url(#colorOther)" />
                <Area type="monotone" dataKey="PAINT" stroke="#9b3f43" fillOpacity={1} fill="url(#colorPaint)" />
                <Area type="monotone" dataKey="SUBLET" stroke="#2f4c60" fillOpacity={1} fill="url(#colorSublet)"/>
                <Area type="monotone" dataKey="LABOR" stroke="#82ca9d" fillOpacity={1} fill="url(#colorLabor)" />
                <Area type="monotone" dataKey="PARTS" stroke="#ffc658" fillOpacity={1} fill="url(#colorParts)"/>
            </AreaChart>
        </Box>
    </>);
}

export default SimpleArea
