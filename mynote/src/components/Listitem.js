import React from 'react'

const Listitem = ({note}) => {
  return (
    <div>
      <h3>{note.body}</h3>
    </div>
  )
}

export default Listitem
