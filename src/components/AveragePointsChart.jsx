import React from "react";
import { Grid, Typography} from "@material-ui/core";
import {BarChart, Tooltip, Legend, CartesianGrid, XAxis, YAxis, Bar} from "recharts";

const AveragePointsChart = ({pointsData}) => {

    const data = [
        {name: '8 класс', 'Средний балл': (pointsData.pointsSum[8] / pointsData.numberOfParticipants[8]).toFixed(2)},
        {name: '9 класс', 'Средний балл': (pointsData.pointsSum[9] / pointsData.numberOfParticipants[9]).toFixed(2)},
        {name: '10 класс', 'Средний балл': (pointsData.pointsSum[10] / pointsData.numberOfParticipants[10]).toFixed(2)},
        {name: '11 класс', 'Средний балл': (pointsData.pointsSum[11] / pointsData.numberOfParticipants[11]).toFixed(2)},
    ]


    return (
        <div style={{textAlign: 'center', marginTop: '24px'}}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h6'>
                        Средний балл
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        Учащихся разных классов
                    </Typography>
                </Grid>
                <Grid item>
                    <BarChart width={450} height={230} data={data}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name" allowDuplicatedCategory={true}/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey="Средний балл" fill="#8884d8"/>
                    </BarChart>
                </Grid>
            </Grid>
        </div>
    )

}


export default AveragePointsChart