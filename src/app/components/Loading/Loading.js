import React from 'react'
import './loading.scss'

export default props => {
  if (props.status)
    return (<div className="loading"></div>)
  else
    return false
}

