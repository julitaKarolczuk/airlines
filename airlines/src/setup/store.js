import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as formReducer } from 'redux-form'
import TicketReducer from '../ticket/TicketReducer'
import FlightsReducer from '../airlines/FlightsReducer'

const rootReducer = combineReducers({form: formReducer, flights: FlightsReducer, ticket: TicketReducer})

export default function configureStore () {
  const store = createStore(
   rootReducer,
    compose(
     applyMiddleware(thunk),
     window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )
  return store
}
