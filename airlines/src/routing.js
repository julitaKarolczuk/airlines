import React from 'react'
import { BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import { Provider } from 'react-redux'
import Airlines from './airlines/Airlines'
import Contact from './contact/Contact'
import store from './setup/store'
import App from './App'

const Routing = () => {
  return (
    <Provider store={store()}>
      <BrowserRouter>
        <Switch>
          <App>
            <Route exact path='/app' component={Airlines} />
            <Route exact path='/contact' component={Contact} />
            <Redirect to='/app' />
          </App>
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default Routing
