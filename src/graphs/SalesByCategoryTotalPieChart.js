import {Cell, Legend, Pie, PieChart} from "recharts";
import Box from "@mui/material/Box";

const SalesByCategoryTotalPieChart = (props) => {

    let data = props.data;
    console.log("NATES DATA", data);

    let formattedArr = [];
    data.results.forEach((row) => {
        formattedArr.push({
            Parts_Sales: parseInt(row['PARTS_SALES']),
            Labor_Sales: parseInt(row['LABOUR_SALES']),
            Sublet_Sales: parseInt(row['SUBLET_SALES']),
            Paint_Material_Sales: parseInt(row['PAINT_MATERIAL_SALES']),
            Other_Sales: parseInt(row['OTHER_SALES']),
        })
    });

    console.log('NATES FORMATTED ARRAY', formattedArr);

    const finalData = [
        {name: 'Parts Sales', value: formattedArr[0].Parts_Sales},
        {name: 'Labor Sales', value: formattedArr[0].Labor_Sales},
        {name: 'Sublet Sales', value: formattedArr[0].Sublet_Sales},
        {name: 'Paint and Material Sales', value: formattedArr[0].Paint_Material_Sales},
        {name: 'Other Sales', value: formattedArr[0].Other_Sales}
    ]

    console.log('NATES DATA',finalData);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };




    console.log('NATES PIE DATA', );

    return(
                <PieChart width={400} height={400}>
                    <Legend/>
                    <Pie
                        data={finalData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={renderCustomizedLabel}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {finalData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                </PieChart>
    );
}

export default SalesByCategoryTotalPieChart;