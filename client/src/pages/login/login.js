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
  Divider,
  InputAdornment,
  IconButton,
  Link
} from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { useStyles } from './styles'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Auth = () => {
  const classes = useStyles()
  const history = useHistory()

  // state used for toggling the view of the password textfield
  const [showPassword, setShowPassword] = useState(false)

  // state used to set the username
  const [email, setEmail] = useState('')

  // state used to set the password
  const [password, setPassword] = useState('')

  const Login = async () => {
    const result = {
          email: email.trim(),
          password: password.trim()
      };

      try {

        const res = await ApiService.login(result);

        if (res.status === 200){
            localStorage.setItem('apiToken', res.data.apiToken);
            localStorage.setItem('type', res.data.type);
            localStorage.setItem('id', res.data.id);
            toast.success(res.data.message);

            history.push('/dashboard');
        }
        
      } catch (err) {
          toast.error(err.response.message);
          console.log(err);    
      }
  }

  useEffect(() => {
    if(localStorage.getItem('apiToken')) {
      history.push('/dashboard');
    }
  }, [])

  //<a href="https://www.vecteezy.com/free-vector/lines">Lines Vectors by Vecteezy</a>

  return (
    
    <Container component="main" maxWidth="md">
      <img src={Background} className={classes.bgimg} alt="bgimg" />
      <CssBaseline />
      
      <div className={classes.paper}>
        
        <Grid
          className={classes.form}
          container
          spacing={5}
          direction="column"
          justify="center"
          alignItems="center"
        >

          <Typography component="h1" variant="h4">
            LOGIN
          </Typography>

          <Divider light />

          <Grid
            className={classes.inputfields}
            container
            direction="column"
            justify="space-evenly"
            alignItems="flex-end"
          >

            <TextField
              className={classes.input}
              variant="filled"
              margin="normal"
              required
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="username"
              label="Email"
              name="email"
              autoComplete="mail"
              autoFocus
            />

            <TextField
              className={classes.input}
              variant="filled"
              margin="normal"
              required
              type={showPassword ? 'text' : 'password'}
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              label="Password"
              id="password"
              autoComplete="current-password"
              InputProps={{ // <-- This is where the toggle button is added.
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                      onMouseDown={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />

          </Grid>
          <Divider light />

          <Button
            aria-label="submit"
            type="submit"
            variant="text"
            color="primary"
            className={classes.submit}
            onClick={Login}
          >
            LOGIN
          </Button>
          <Link href="/register" variant="body2">
            new user? register!
          </Link>
        </Grid>
      </div>

    </Container>
  )
}
