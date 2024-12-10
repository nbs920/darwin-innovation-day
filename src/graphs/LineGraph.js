import { Box } from '@mui/material';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ReferenceLine, Label } from 'recharts';

const LineGraph = (props) => {
    let data = props.data;

    let formattedArr = [];
    data.results.forEach((row) => {
        formattedArr.push({
            name: row['MONTH'],
            Paint_Hours_Per_RO: parseFloat((parseFloat(row['PAINT_LABOUR_HOURS']) / parseFloat(row['RO_COUNT'])).toFixed(2)),
            Shop_Goal: 9.5
        })
    });

    console.log(formattedArr);

    return(
        <>
        <Box
        sx={{ p: 1, borderRadius: 2 }}
        boxShadow={5}
        width={"250%"}>
        <Box margin={"2%"}>
            <LineChart
            width={1000}
            height={300}
            data={formattedArr}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            <YAxis domain={["dataMin","dataMax"]}/>
            <defs>
            <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="red" />
                <stop offset="50%" stopColor="red" />
                <stop offset="50%" stopColor="green" />
                <stop offset="100%" stopColor="green" />
            </linearGradient>
            </defs>
            <Tooltip />
            <Legend />
            {/* <Line type="monotone" dataKey="Paint_Hours_Per_RO" stroke="black" activeDot={{ r: 8 }} /> */}
            <Line type="monotone" dataKey="Paint_Hours_Per_RO" stroke="url(#colorGradient)" strokeWidth={2}/>
            <ReferenceLine isFront='true' strokeDasharray="3 3" y={9.5} stroke="black" label={<Label value="Shop Goal < 9.5 Hours" offset={0} position="bottom"/>} />
            </LineChart>
        </Box>
        </Box>
        </>
    );
}

export default LineGraph;