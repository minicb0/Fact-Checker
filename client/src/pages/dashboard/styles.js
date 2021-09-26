import { makeStyles } from '@material-ui/core/styles'

const shadow = '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'

export const useStyles = makeStyles((theme) => ({
  bgimg: {
    position: "fixed",
    width: "100%",
    height: "120%",
    bottom: 0,
    left: 0,
    zIndex: -100
  },
  paper: {
    marginTop: '5%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    letterSpacing: '2pt'
  },
  form: {
    backdropFilter: 'blur(19px) saturate(160%)',
    backgroundColor: 'rgba(38, 34, 34, 0.5)',
    borderRadius: '12px',
    border: '2px solid rgba(9, 8, 8, 0.04)',
    textShadow: '2px solid rgba(9, 8, 8, 0.04)',
    boxShadow: '0 4px 8px 0 rgba(11, 11, 11, 0.27), 0 6px 20px 0 rgba(91, 91, 91, 0.31)',
    padding: '1%'
  },
  form1: {
    backdropFilter: 'blur(19px) saturate(160%)',
    backgroundColor: 'rgba(38, 34, 34, 0.9)',
    borderRadius: '12px',
    width: '40%',
    marginBottom: '5%',
    border: '2px solid rgba(9, 8, 8, 0.04)',
    boxShadow: '0 4px 8px 0 rgba(11, 11, 11, 0.27), 0 6px 20px 0 rgba(91, 91, 91, 0.31)',
    padding: '1%'
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    boxShadow: shadow,
    width: '30%',
    backgroundColor: '#000000',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  submit1: {
    margin: theme.spacing(3, 0, 2),
    boxShadow: shadow,
    width: '10%',
    backgroundColor: '#423e3e',
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  card: {
    background: '#555555bf'
  },
  input: {
    boxShadow: shadow,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  inputfields: {
    margin: theme.spacing(3, 0, 2)
  },
  chip: {
    marginLeft: '2%'
  }
}))
