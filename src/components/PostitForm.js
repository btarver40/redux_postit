import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import { incId } from '../reducers/nextId'
import {addPostIt} from '../reducers/postit'

class PostitForm extends React.Component {
  state= {title: ''}


  handleSubmit = (e) => {
    e.preventDefault ()
    const {title} = this.state
    const {dispatch, id} = this.props
    const postit = {title, id, complete: false }
    dispatch(addPostIt(postit))
    dispatch(incId())
    this.setState({title: ''})
  }

  handleChange = (e) => {
    this.setState({title: e.target.value})
  }






  render () {
    const {title} = this.state
    return (
      <Fragment>
        <h1>Add a Post it!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            value={title}
            onChange={this.handleChange}
            required
          />
        </form>
      </Fragment>
    )
  }
}
  const mapStateToProps = (state) =>{
    return {id: state.nextId}
}

export default connect(mapStateToProps)(PostitForm);