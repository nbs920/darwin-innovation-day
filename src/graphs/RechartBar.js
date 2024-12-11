import { Box, Stack, Typography } from '@mui/material';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, ResponsiveContainer } from 'recharts';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';

const RechartBar = (props) => {
    let data = props.data;

    let formattedArr = [];
    data.results.forEach((row) => {
        formattedArr.push({
            name: row['MONTH'],
            RO_Count: parseInt(row['RO_COUNT']),
        })
    });

    return(
        <>
        <Box
        sx={{ p: 1, borderRadius: 3 }}
        boxShadow={5}>
            <Box margin={"2%"}>
            <BarChart
            width={400}
            height={300}
            data={formattedArr}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis domain={[0,200]}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="RO_Count" fill="indianred" activeBar={<Rectangle fill="steelblue" stroke="black" />} />
          </BarChart>
        </Box>
        </Box>
        </>
    );
}

export default RechartBar;