import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import Postit from './Postit'

const filtered = (postit, currentFilter) => {
  switch(currentFilter) {
    case 'Active':
      return postit.filter( t => !t.complete )
    case 'Completed':
      return postit.filter( t => t.complete )
    default:
      return postit
  }
}


const PostitList = ({ postit, postitCount, filter }) => (
  <Fragment>
    <h3>There are {postitCount} postit</h3>
    <ul>
      { filtered(postit, filter).map( (p) => 
        <Postit key={p.id} {...p} /> 
      )}
    </ul>
  </Fragment>
)
// jsx element we are rendering so we need ()

const mapStateToProps = (state) => {
  const {postit, filter} = state
  return {
    postit,
    filter,
    postitCount: postit.length,
  }
}

export default connect(mapStateToProps)(PostitList);