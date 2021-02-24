import React from "react";
import { Grid, Typography} from "@material-ui/core";
import {BarChart, Tooltip, Legend, CartesianGrid, XAxis, YAxis, Bar} from "recharts";

const PointsGapsChart = ({pointsGapsData}) => {

    const data = [
        {name: '0-10', 'Кол-во учащихся': pointsGapsData.gaps[10]},
        {name: '10-20', 'Кол-во учащихся': pointsGapsData.gaps[20]},
        {name: '20-30', 'Кол-во учащихся': pointsGapsData.gaps[30]},
        {name: '30-40', 'Кол-во учащихся': pointsGapsData.gaps[40]},
        {name: '40-50', 'Кол-во учащихся': pointsGapsData.gaps[50]},
        {name: '50-60', 'Кол-во учащихся': pointsGapsData.gaps[60]},
        {name: '60-70', 'Кол-во учащихся': pointsGapsData.gaps[70]},
        {name: '70-80', 'Кол-во учащихся': pointsGapsData.gaps[80]},
        {name: '80-90', 'Кол-во учащихся': pointsGapsData.gaps[90]},
        {name: '90-100', 'Кол-во учащихся': pointsGapsData.gaps[100]},
        ]


    return (
        <div style={{textAlign: 'center', marginTop: '24px'}}>
            <Grid container direction='column'>
                <Grid item>
                    <Typography variant='h6'>
                        Кол-во набранных баллов
                    </Typography>
                    <Typography variant='body2' color='textSecondary'>
                        Среди учащихся всех классов
                    </Typography>
                </Grid>
                <Grid item>
                    <BarChart width={450} height={230} data={data}>
                        <CartesianGrid strokeDasharray="3 3"/>
                        <XAxis dataKey="name" allowDuplicatedCategory={true}/>
                        <YAxis/>
                        <Tooltip/>
                        <Legend/>
                        <Bar dataKey='Кол-во учащихся' fill="#00C49F"/>
                    </BarChart>
                </Grid>
            </Grid>
        </div>
    )

}


export default PointsGapsChart