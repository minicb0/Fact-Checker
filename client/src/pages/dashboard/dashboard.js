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
  const id = localStorage.getItem('id');

  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')
  const [status, setStatus] = useState('')
  const [comment, setComment] = useState('')
  const [rating, setRating] = useState(1)
  const [activePosts, setActivePosts] = useState([])
  const [allactivePosts, setallActivePosts] = useState([])
  const [update, setUpdate] = useState(true)

  const join = async(id) => {
      const up = update;
      const result = {
          postId : id.trim()
      }
      try {
        const res = await ApiService.addJournalist(result);

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

  const postVote = async (postId) => {
      const up = update;
      const result = {
          JournalistId: id.trim(),
          postId: postId,
          rating: rating,
          comment: comment
      }

      console.log(result)

      try {
        const res = await ApiService.postVote(result);

        if (res.status === 200){
            toast.success(res.data.message);
            setUpdate(!up);
            setRating('')
            setComment('')
        }

      } catch (err) {
          toast.error(err.message);
          console.log(err);
      }

  }

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
        if (type === 'client') {
            try {
                const res = await ApiService.getActiveFeeds();

                setActivePosts(res.data.data)
            } catch (err) {
                console.log(err);
                if (err.response.status === 401) {
                    localStorage.clear();
                    history.push('/login');
                }
                
            }

        } else {
            try {
                const res1 = await ApiService.getAllActiveFeeds();

                setallActivePosts(res1.data.data)

            } catch (err) {
                console.log(err);
                if (err.response.status === 401) {
                    localStorage.clear();
                    history.push('/login');
                }
                
            }

        }
        
    }
    fetchActiveFeeds();
  }, [update])

  return (
    <Container component="main" maxWidth="ls">
      <img src={Background} className={classes.bgimg} alt="bgimg" />
      <CssBaseline />
      <Button
        aria-label="submit"
        type="submit"
        variant="text"
        color="primary"
        className={classes.submit1}
        onClick={() => {
            localStorage.clear();
            history.push('/login')
        }}
    >
        LOGOUT
    </Button>
      
      <div className={classes.paper}>
          {type === 'client' ? (
              <>
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
                                    className={classes.chip}
                                    label={data.name}
                                    variant="default"
                                    color="primary"
                                    />
                                );
                            })}

                            </ListItem>
                            <ListItem>
                            {elem.votes.map((data) => {
                                console.log(data)
                                return (
                                    <Chip
                                    className={classes.chip}
                                    label={`${data.rating || 1} :: ${data.comment}`}
                                    variant="outlined"
                                
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
        </>
          ) : (
              <>
              
        <Grid
         classes={classes.posts}
         container
         spacing={6}
         direction="row"
         justify="flex-start"
         alignItems="flex-start"
        >
            

            {allactivePosts.map(elem => (
                <Grid item xs={12} sm={6} md={6} key={elem._id}>
                    <Card className={classes.form}>
                        <CardHeader
                            title={elem.title}
                        />
                        <CardContent>
                            <center>
                            <ListItem>
                            {elem.assignedJournalists.map((data) => {
                                if (data.id === id) {
                                    elem.show = true;
                                }
                                return (
                                    <Chip
                                    className={classes.chip}
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
                            {elem.assignedJournalists.forEach(dat => {
                                if (dat._id === id){
                                    elem.show = true;
                                }
                            })}
                            {!elem.show ? (<Button size="middle" onClick={() => join(elem._id)}>Join</Button>) : (
                                <>
                                {elem.votes.forEach((item)=> {
                                    if (item._id === id) {
                                        elem.hide = true;
                                    }
                                })}

                                {!elem.hide ? (
                                    <>
                                    <TextField
                                className={classes.input}
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                id="comment"
                                label="Comment"
                                name="commment"
                                autoFocus
                                />

                                <TextField
                                className={classes.input}
                                variant="filled"
                                margin="normal"
                                required
                                fullWidth
                                type="number"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                                id="rating"
                                label="Rate from 1-5 the credibility of the news"
                                name="rating"
                                autoFocus
                                />

                                <Button
                                    aria-label="submit"
                                    type="submit"
                                    variant="text"
                                    color="primary"
                                    className={classes.submit}
                                    onClick={() => postVote(elem._id)}
                                >
                                    Create Vote
                                </Button>
                                </>

                                ): ""}
                                
                                </>

                            )}
                            
                            
                        </CardActions>

                    </Card>
                </Grid>
            ))}
        </Grid>

              </>
          )}
           

      </div>

    </Container>
  )
}
