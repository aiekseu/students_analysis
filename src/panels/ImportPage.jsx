import React from "react";
import {Button, Grid, Typography} from "@material-ui/core";
import XLSX from 'xlsx';

const ImportPage = ({setJsonTable}) => {

    let uploadedFile;

    return (
        <div style={{marginTop: '24px'}}>
            <Grid container direction='row'>
                <Grid item xs={false} sm={2} md={3}/>
                <Grid item container direction="column" sm={8} md={6}>
                    <Grid item>
                        <Typography variant='h4' align='center'>
                            Добро пожаловать!
                        </Typography>
                        <Typography variant='h6' align='center'>
                            Данный сайт является прототипом интерактивной визуализации результатов олимпиады школьников
                            по одному из предметов
                        </Typography>
                        <Typography variant='subtitle1' align='center' style={{marginTop: '36px'}}>
                            Для продолжения загрузите .xls или .xslx файл в форму ниже
                        </Typography>
                    </Grid>
                    <Grid item>
                        <div style={{textAlign: 'center'}}>
                            <input type="file" id="input" accept=".xls,.xlsx" onInput={(event) => {
                                uploadedFile = event.target.files[0];
                            }}/>
                        </div>
                    </Grid>
                    <Grid item>
                        <div style={{textAlign: 'center', marginTop: '32px'}}>
                            <Button
                                variant="contained"
                                size="large"
                                color="primary"
                                onClick={() => {
                                    if(uploadedFile){
                                        let fileReader = new FileReader();
                                        fileReader.readAsBinaryString(uploadedFile);
                                        fileReader.onload = (event)=>{
                                            let data = event.target.result;
                                            let workbook = XLSX.read(data, {type: "binary"});
                                            let rowObject = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[workbook.SheetNames[0]]);
                                            console.log(rowObject);
                                        }
                                    }
                                }}>
                                Загрузить
                            </Button>
                        </div>
                    </Grid>
                </Grid>
                <Grid item xs={false} sm={2} md={3}/>
            </Grid>

        </div>
    )
}

export default ImportPage