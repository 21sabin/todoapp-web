import React, { Component } from 'react';
import PropTypes  from 'prop-types'

export default class Timer extends Component {
  // static PropTypes ={
  //   count:PropTypes.string.isRequired
  // }
    shouldComponentUpdate(){
         return ( !(this.props.count % 2 ==0 )? true :false)
    }
  render() {
    return (
      <div style={{fontSize:30}}>
        { this.props.count }
      </div>
    )
  }
}

Timer.prototypes = {
  count:PropTypes.string.isRequired
}
