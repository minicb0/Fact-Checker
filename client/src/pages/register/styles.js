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
    marginTop: '30%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    letterSpacing: '2pt'
  },
  form: {
    backdropFilter: 'blur(19px) saturate(160%)',
    backgroundColor: 'rgba(43, 43, 43, 0.5)',
    borderRadius: '12px',
    border: '2px solid rgba(9, 8, 8, 0.04)',
    boxShadow: '0 4px 8px 0 rgba(248, 216, 103, 0.27), 0 6px 20px 0 rgb(0, 0, 0)',
    padding: '5%',
    [theme.breakpoints.down('sm')]: {
      width: '95%',
      backgroundColor: '#272727',
      padding: theme.spacing(3)
    }
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
  input: {
    boxShadow: shadow,
    [theme.breakpoints.down('sm')]: {
      width: '100%'
    }
  },
  inputfields: {
    margin: theme.spacing(3, 0, 2)
  }
}))
