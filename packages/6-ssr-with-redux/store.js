import { createStore } from 'redux'
import reducer from './reducer'

export function createIsomorphicStore(initState) {
  return createStore(reducer, initState)
}
