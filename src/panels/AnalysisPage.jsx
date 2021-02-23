import React from "react";
import {AppBar, Grid, Toolbar, Typography} from "@material-ui/core";
import WinnersPercentageChart from "../components/WinnersPercentageChart";
import {useHistory} from "react-router-dom";
import Data from '../data/Data'

const AnalysisPage = ({jsonTable}) => {

    const history = useHistory()
    if (!jsonTable) {
        history.push('/import')
    }

    let participantsData = new Data();
    participantsData.general_psrticipants = jsonTable.length - 2;

    let place;
    let grade;
    for (let i = 1; i < jsonTable.length; i++) {
        place = jsonTable[i].__EMPTY_6
        grade = jsonTable[i].__EMPTY_4
        // eslint-disable-next-line default-case
        switch (grade) {
            case 8: {
                participantsData.grade_8_participants[place]++
                break;
            }
            case 9: {
                participantsData.grade_9_participants[place]++
                break;
            }
            case 10: {
                participantsData.grade_10_participants[place]++
                break;
            }
            case 11: {
                participantsData.grade_11_participants[place]++
                break;
            }
        }

    }

    console.log(participantsData)

    return (
        <div>
            <AppBar style={{position: 'relative'}}>
                <Toolbar>
                    {(Object.keys(jsonTable[0])[0])}
                </Toolbar>
            </AppBar>

            <Grid container direction='row'>
                <Grid item sm={12} md={6}>
                    <WinnersPercentageChart participantsData={participantsData}/>
                </Grid>
                <Grid item sm={12} md={6}>
                    <WinnersPercentageChart participantsData={participantsData} />
                </Grid>
            </Grid>
        </div>
    )
}

export default AnalysisPage




