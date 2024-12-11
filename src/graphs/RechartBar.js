import { Box } from '@mui/material';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const RechartBar = (props) => {
    let data = props.data;

    let formattedArr = [];
    data.results.forEach((row) => {
        formattedArr.push({
            name: row['MONTH'],
            RO_Count: parseInt(row['RO_COUNT']),
        })
    });

    console.log(formattedArr);

    return(
        <>
        <Box
        sx={{ p: 1, borderRadius: 2 }}
        boxShadow={5}
        width={"140%"}>
            <Box margin={"2%"}>
            <BarChart
            width={600}
            height={600}
            data={formattedArr}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"/>
            <YAxis domain={[0,200]}/>
            <Tooltip />
            <Legend />
            <Bar dataKey="RO_Count" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          </BarChart>
        </Box>
        </Box>
        </>
    );
}

export default RechartBar;