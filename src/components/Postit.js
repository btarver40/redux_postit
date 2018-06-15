import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import {togglePostit, deletePostit} from '../reducers/postit'

const styles = {
  complete: {
    textDecoration: 'line-through',
    color: 'violet'
  }
}

const Postit = ({ id, title, complete, dispatch }) => (
  <Fragment>
    <li
      onClick={() => dispatch(togglePostit(id))}
      style={ complete ? styles.complete : {}}
    >
      {title}
    </li>
    <button onClick={() => dispatch(deletePostit(title))}>Delete</button> 
  </Fragment>
)

export default connect()(Postit)
