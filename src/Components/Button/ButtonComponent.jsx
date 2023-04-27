import React from 'react'
import { Link } from 'react-router-dom'

const  ButtonComponent = ({path, text}) => {
  return (
    <div>
        <Link to = {path}>
        <button>
            {text}
        </button>
        </Link>
    </div>
  )
}

export default ButtonComponent