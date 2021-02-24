import React from "react";
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";

import WinnersPercentageChart from "../components/WinnersPercentageChart";
import WinnersPercentageNoGradeChart from "../components/WinnersPercentageNoGradeChart";

import WithGradesWinnersData from '../data/WithGradesWinnersData'
import NoGradesWinnersData from '../data/WithoutGradeWinnersData'
import PointsData from '../data/PointsData'
import AveragePointsChart from "../components/AveragePointsChart";
import PointsGapsData from "../data/PointsGapsData";
import PointsGapsChart from "../components/PointsGapsChart";

const AnalysisPage = ({jsonTable}) => {

    const history = useHistory()
    if (!jsonTable) {
        history.push('/import')
    }

    const participantsData = new WithGradesWinnersData();
    const participantsWithoutGradeData = new NoGradesWinnersData();
    const pointsData = new PointsData();
    const pointsGapsData = new PointsGapsData();

    let grade;
    let points;
    let place;
    for (let i = 1; i < jsonTable.length; i++) {
        place = jsonTable[i].__EMPTY_6;
        points = jsonTable[i].__EMPTY_5;
        grade = jsonTable[i].__EMPTY_4;
        // eslint-disable-next-line default-case
        switch (grade) {
            case 8: {
                participantsData.grade_8_participants[place]++;
                break;
            }
            case 9: {
                participantsData.grade_9_participants[place]++;
                break;
            }
            case 10: {
                participantsData.grade_10_participants[place]++;
                break;
            }
            case 11: {
                participantsData.grade_11_participants[place]++;
                break;
            }
        }
        switch (true) {
            case (points < 10) : {
                pointsGapsData.gaps[10]++
                break;
            }
            case (points < 20) : {
                pointsGapsData.gaps[20]++
                break;
            }
            case (points < 30) : {
                pointsGapsData.gaps[30]++
                break;
            }
            case (points < 40) : {
                pointsGapsData.gaps[40]++
                break;
            }
            case (points < 50) : {
                pointsGapsData.gaps[50]++
                break;
            }
            case (points < 60) : {
                pointsGapsData.gaps[60]++
                break;
            }
            case (points < 70) : {
                pointsGapsData.gaps[70]++
                break;
            }
            case (points < 80) : {
                pointsGapsData.gaps[80]++
                break;
            }
            case (points < 90) : {
                pointsGapsData.gaps[90]++
                break;
            }
            case (points <= 100) : {
                pointsGapsData.gaps[100]++
                break;
            }
        }
        pointsData.numberOfParticipants[grade]++;
        pointsData.pointsSum[grade] += points;
        participantsWithoutGradeData.participants[place]++;
    }

    return (
        <div>
            <AppBar style={{position: 'relative'}}>
                <Toolbar>
                    {(Object.keys(jsonTable[0])[0])}
                </Toolbar>
            </AppBar>

            <Grid container direction='row'>
                <Grid item sm={12} md={6}>
                    <WinnersPercentageNoGradeChart participantsWithoutGradeData={participantsWithoutGradeData} />
                </Grid>
                <Grid item sm={12} md={6}>
                    <WinnersPercentageChart participantsData={participantsData} />
                </Grid>
            </Grid>
            <Grid container direction='row'>
                <Grid item sm={12} md={6}>
                    <AveragePointsChart pointsData={pointsData} />
                </Grid>
                <Grid item sm={12} md={6}>
                    <PointsGapsChart pointsGapsData={pointsGapsData} />
                </Grid>
            </Grid>
        </div>
    )
}

export default AnalysisPage




