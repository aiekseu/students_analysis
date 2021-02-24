import React, {useState} from "react";
import {Button, ButtonGroup, Grid, Typography} from "@material-ui/core";
import {PieChart, Cell, Pie, Legend} from "recharts";

const WinnersPercentageChart = ({participantsData}) => {

    const [currentGrade, setCurrentGrade] = useState(8)
    let data;
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


    const changeChartData = () => {
        data = [
            {name: 'Диплом 1 степени', value: participantsData[`grade_${currentGrade}_participants`][1]},
            {name: 'Диплом 2 степени', value: participantsData[`grade_${currentGrade}_participants`][2]},
            {name: 'Диплом 3 степени', value: participantsData[`grade_${currentGrade}_participants`][3]},
            {name: 'Без призового места', value: participantsData[`grade_${currentGrade}_participants`][undefined]},
        ];
        console.log(data)
    }

    changeChartData()
    return (
        <div style={{textAlign: 'center', marginTop: '24px'}}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h6'>
                        Кол-во призовых мест среду учащихся __ класса
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        Класс
                    </Typography>
                </Grid>
                <Grid item>
                    <ButtonGroup variant="text" color="inherit" size='large' aria-label="text primary button group">
                        <Button
                            disabled={currentGrade === 8}

                            onClick={() => {
                                setCurrentGrade(8);
                                changeChartData()
                            }}>
                            8
                        </Button>
                        <Button
                            disabled={currentGrade === 9}
                            onClick={() => {
                                setCurrentGrade(9)
                                changeChartData()
                            }}>
                            9
                        </Button>
                        <Button
                            disabled={currentGrade === 10}
                            onClick={() => {
                                setCurrentGrade(10)
                                changeChartData()
                            }}>
                            10
                        </Button>
                        <Button
                            disabled={currentGrade === 11}
                            onClick={() => {
                                setCurrentGrade(11)
                                changeChartData()
                            }}>
                            11
                        </Button>
                    </ButtonGroup>
                </Grid>
                <Grid item>
                    <PieChart width={450} height={230} style={{marginLeft: 'auto', marginRight: 'auto'}}>
                        <Pie
                            data={data}
                            nameKey="name"
                            innerRadius={60}
                            outerRadius={80}
                            fill="#8884d8"
                            paddingAngle={5}
                            dataKey="value"
                            label
                        >

                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend layout='vertical' align='right' verticalAlign='middle'/>
                    </PieChart>
                </Grid>
            </Grid>
        </div>
    )

}


export default WinnersPercentageChart