import React, {useState} from "react";
import {Button, ButtonGroup, Grid, Typography} from "@material-ui/core";
import {PieChart, Cell, Pie, Legend} from "recharts";

const WinnersPercentageNoGradeChart = ({participantsWithoutGradeData}) => {

    const data = [
        {name: 'Диплом 1 степени', value: participantsWithoutGradeData.participants[1]},
        {name: 'Диплом 2 степени', value: participantsWithoutGradeData.participants[2]},
        {name: 'Диплом 3 степени', value: participantsWithoutGradeData.participants[3]},
        {name: 'Без призового места', value: participantsWithoutGradeData.participants[undefined]},
    ];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    return (
        <div style={{textAlign: 'center', marginTop: '24px'}}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h6'>
                        Кол-во призовых мест
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        Среди учащихся всех классов
                    </Typography>
                </Grid>
                <Grid item>
                    <PieChart width={450} height={230} style={{marginLeft: 'auto', marginRight: 'auto', marginTop: '32px'}}>
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


export default WinnersPercentageNoGradeChart