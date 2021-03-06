import React, { Component } from 'react'
import TableComp from '../components/TableComp'
import { connect } from "react-redux";
// import { GET_USERS_LIST } from '../actions/userAction';
import {getUsersList, deleteDataUser} from '../actions/userAction'

class HomeCont extends Component {
  componentDidMount(){
    this.props.dispatch(getUsersList());
    this.props.dispatch(deleteDataUser())
  }
  render() {
    return (
      <div>
        <TableComp/>
      </div>
    )
  }
}

export default connect()(HomeCont)