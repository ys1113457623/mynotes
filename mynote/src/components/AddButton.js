import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Add} from '../assets/add.svg'
const AddButton = () => {
  return (
    <Link to='/notes/new' className='floating-button'>
        <Add />
    </Link>
  )
}

export default AddButton
