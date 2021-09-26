import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Background from '../../assets/images/wall.jpg';
import { ApiService } from '../../api.services';

import {
  Button,
  CssBaseline,
  TextField,
  Typography,
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  InputAdornment,
  IconButton,
  Link
} from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { useStyles } from './styles'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Dashboard = () => {
  const classes = useStyles()
  const history = useHistory()

  const type = localStorage.getItem('type');

  useEffect(() => {

    const fetchActiveFeeds = async() => {
        try {
            const res = await ApiService.getActiveFeeds();
            console.log(res.data);

        } catch (err) {
            console.log(err);
        }
    }

    fetchActiveFeeds();

  }, [])
  const data = [
        { quarter: 1, earnings: 13000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 },
        { quarter: 2, earnings: 16500 },
        { quarter: 3, earnings: 14250 },
        { quarter: 4, earnings: 19000 }
    ]


  return (
    
    <Container component="main" maxWidth="ls">
      <img src={Background} className={classes.bgimg} alt="bgimg" />
      <CssBaseline />
      
      <div className={classes.paper}>
        
        <Grid
         container
         spacing={2}
         direction="row"
         justify="flex-start"
         alignItems="flex-start"
        >
                {data.map(elem => (
                    <Grid item xs={12} sm={6} md={3} key={data.indexOf(elem)}>
                        <Card className={classes.form}>
                            <CardHeader
                                title={`quarter : ${elem.quarter}`}
                                subheader={`earnings : ${elem.earnings}`}
                            />
                            <CardContent>
                                <Typography variant="h5" gutterBottom>
                                    Hello World
                                </Typography>
                            </CardContent>
                        </Card>
                     </Grid>
                ))}
            </Grid>
      </div>

    </Container>
  )
}
