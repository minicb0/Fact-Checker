import { createTheme } from '@material-ui/core/styles'

export const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '*': {
          'scrollbar-width': 'thin'
        },
        '*::-webkit-scrollbar': {
          width: '6px',
          height: '6px'
        },
        '*::-webkit-scrollbar-thumb': {
          background: 'white'
        }
      }
    }
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#fcce55',
      dark: '#988751',
      light: '#ffb06a'
    },
    secondary: {
      main: '#4d524f',
      dark: '#019592',
      light: '#988751'
    },
    text: {
      primary: '#fcce55',
      secondary: 'rbga(0, 0, 0, 0.85)'
    },
    background: '#021d4c'
  },
  typography: {
    fontFamily: ['Roboto', 'Helvetica', 'Arial'].join(',')
  }
})
