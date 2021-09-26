import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Background from '../../assets/images/wall.jpg';

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
  Select,
  MenuItem,
  Link
} from '@material-ui/core'

import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import { useStyles } from './styles'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { ApiService } from '../../api.services';

export const Register = () => {
  const classes = useStyles()
  const history = useHistory()

  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [type, setType] = useState('client')
  const [password, setPassword] = useState('')

  const RegisterUser = async () => {
      //lobbing validation 
      const result = {
          email: email.trim(),
          name: name.trim(), 
          type,
          password: password.trim()
      };

      try {

        const res = await ApiService.register(result);

        if (res.status === 200){
            localStorage.setItem('apiToken', res.data.apiToken);
            localStorage.setItem('type', res.data.type);
            toast.success(res.data.message);

            history.push('/dashboard');
        }
        
      } catch (err) {
          toast.error(err.message);
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
            REGISTER
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
            />

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

            <Select
              id="type"
              value={type}
              variant="filled"
              fullWidth
              onChange={(e) => setType(e.target.value)}
              label="Type"
            >
                <MenuItem value={'client'}>Client</MenuItem>
                <MenuItem value={'journalist'}>Journalist</MenuItem>
            </Select>

          </Grid>
          <Divider light />

          <Button
            aria-label="submit"
            type="submit"
            variant="text"
            color="primary"
            className={classes.submit}
            onClick={RegisterUser}
          >
            REGISTER
          </Button>
          <Link href="/login" variant="body2">
            already registered? login!
          </Link>
        </Grid>
      </div>

    </Container>
  )
}
