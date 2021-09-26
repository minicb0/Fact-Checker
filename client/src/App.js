import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { ThemeProvider } from '@material-ui/core/styles'
import { theme } from './theme'
import { ToastContainer } from 'react-toastify'
import { Auth } from './pages/login'
import { Register } from './pages/register'
import { Dashboard } from './pages/dashboard'
import { PrivateRoute } from './components/privateRoute'

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Router>
        <Switch>
            <Redirect exact from="/" to="/login" />
            <Route exact path="/login" component={Auth} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/dashboard" component={Dashboard}/>
        </Switch>
      </Router>
    </ThemeProvider>
  )
}

