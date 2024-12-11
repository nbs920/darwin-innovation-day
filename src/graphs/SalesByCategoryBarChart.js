import {Box, Typography} from '@mui/material';
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ReferenceLine
} from 'recharts';

const SalesByCategoryBarChart = (props) => {
    let data = props.data;
    console.log("NATES DATA", data);

    let formattedArr = [];
    data.results.forEach((row) => {
        formattedArr.push({
            name: row['MONTH'],
            Parts_Sales: parseInt(row['PARTS_SALES']),
            Labor_Sales: parseInt(row['LABOUR_SALES']),
            Sublet_Sales: parseInt(row['SUBLET_SALES']),
            Paint_Material_Sales: parseInt(row['PAINT_MATERIAL_SALES']),
            Other_Sales: parseInt(row['OTHER_SALES']),
        })
    });

    console.log(formattedArr);

    return(
        <>
                <Box margin={"2%"}>
                    <BarChart
                        width={1000}
                        height={400}
                        data={formattedArr}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name"/>
                        <YAxis domain={['dataMax','dataMin']}/>
                        <Tooltip />
                        <Legend />
                        <ReferenceLine y={0} stroke="#000" />
                        <Bar name="Parts Sales" dataKey="Parts_Sales" fill="#003f5c" activeBar={<Rectangle fill="#003f5c" stroke="black" />} />
                        <Bar name="Labor Sales" dataKey="Labor_Sales" fill="#58508d" activeBar={<Rectangle fill="#58508d" stroke="black" />} />
                        <Bar name="Sublet Sales" dataKey="Sublet_Sales" fill="#bc5090" activeBar={<Rectangle fill="#bc5090" stroke="black" />} />
                        <Bar name="Paint Material Sales" dataKey="Paint_Material_Sales" fill="#ff6361" activeBar={<Rectangle fill="#ff6361" stroke="black" />} />
                        <Bar name="Other Sales" dataKey="Other_Sales" fill="#ffa600" activeBar={<Rectangle fill="#ffa600" stroke="black" />} />
                    </BarChart>
                </Box>
        </>
    );
}

export default SalesByCategoryBarChart;