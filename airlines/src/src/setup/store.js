import { createStore, compose, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import { reducer as form } from 'redux-form'
import ticket from '../ticket/TicketReducer'
import flights from '../airlines/FlightsReducer'

const rootReducer = combineReducers({
  form,
  flights,
  ticket
})

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
