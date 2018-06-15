import filter from './filter'
import { combineReducers } from 'redux'
import postit from './postit'


// we need this to list all post its
// this has all of our post it functions in it

const rootReducer = combineReducers({
  filter,
  postit,
})

export default rootReducer;