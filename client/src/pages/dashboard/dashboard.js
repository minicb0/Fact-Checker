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
  Select,
  MenuItem,
  Chip,
  ListItem,
  CardActions
} from '@material-ui/core'

import { useStyles } from './styles'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const Dashboard = () => {
  const classes = useStyles()
  const history = useHistory()

  const type = localStorage.getItem('type');
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [activePosts, setActivePosts] = useState([])
  const [update, setUpdate] = useState(true)

  const createNews = async () => {
      const up = update;
      const result = {
          content: content.trim(),
          title: title.trim(),
          status
      }

      try {
        const res = await ApiService.createNews(result);

        if (res.status === 200){
            toast.success(res.data.message);
            setUpdate(!up);
            setContent('')
            setTitle('')
        }

      } catch (err) {
          toast.error(err.message);
          console.log(err);
      }

  }

  const closeNews = async(id) => {
      const up = update;
      const result = {
          postId : id.trim()
      }
      try {
        const res = await ApiService.closeNews(result);

        if (res.status === 200){
            toast.success(res.data.message);
            setUpdate(!up);
        }

    } catch (err) {
        console.log(err);
        if (err.response.status === 401) {
            localStorage.clear();
            history.push('/login');
        }
        
    }
  }

  useEffect(() => {

    const fetchActiveFeeds = async() => {
        try {
            const res = await ApiService.getActiveFeeds();
            console.log(res.data);
            setActivePosts(res.data.data)

        } catch (err) {
            console.log(err);
            if (err.response.status === 401) {
                localStorage.clear();
                history.push('/login');
            }
            
        }
    }
    fetchActiveFeeds();
  }, [update])

  return (
    
    <Container component="main" maxWidth="ls">
      <img src={Background} className={classes.bgimg} alt="bgimg" />
      <CssBaseline />
      
      <div className={classes.paper}>
           
        <Grid
          className={classes.form1}
          container
          spacing={5}
          direction="column"
          justify="center"
          alignItems="center"
        >

          <Typography component="h1" color="textPrimary" variant="subtitle1">
            CREATE NEW NEWSINFO
          </Typography>

          
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="username"
              label="Title"
              name="title"
              autoFocus
            />

            <TextField
              className={classes.input}
              variant="filled"
              margin="normal"
              required
              fullWidth
              value={content}
              onChange={(e) => setContent(e.target.value)}
              id="username"
              label="Content"
              name="content"
              autoFocus
            />

            <Select
              id="type"
              value={status}
              variant="filled"
              fullWidth
              onChange={(e) => setStatus(e.target.value)}
              label="Status"
            >
                <MenuItem value={'closed'}>Closed</MenuItem>
                <MenuItem value={'active'}>Active</MenuItem>
            </Select>

          </Grid>
          <Button
            aria-label="submit"
            type="submit"
            variant="text"
            color="primary"
            className={classes.submit}
            onClick={createNews}
          >
            Create 
          </Button>
          
        </Grid>

        <Grid
         classes={classes.posts}
         container
         spacing={6}
         direction="row"
         justify="flex-start"
         alignItems="flex-start"
        >
            

            {activePosts.map(elem => (
                <Grid item xs={12} sm={6} md={6} key={elem._id}>
                    <Card className={classes.form}>
                        <CardHeader
                            title={elem.title}
                        />
                        <CardContent>
                            <center>
                            <ListItem>
                            {elem.assignedJournalists.map((data) => {
                                return (
                                    <Chip
                                    label={data.name}
                                    variant="default"
                                    color="primary"
                                    />
                                );
                            })}
                            </ListItem>
                            </center>

                            <Typography variant="caption" gutterBottom>
                                {elem.content}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" id={elem._id} onClick={() => closeNews(elem._id)}>Close post</Button>
                        </CardActions>

                    </Card>
                </Grid>
            ))}
        </Grid>
      </div>

    </Container>
  )
}
