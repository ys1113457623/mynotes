import React, { useEffect, useState } from 'react'
import { Link , useParams } from 'react-router-dom'

const NotePage = () => {

  let { id } = useParams();



  let [note,setNote] = useState(null)

  let getNote = async () => {
    let response = await fetch(`/api/notes/${id}/`)
    let data = await response.json()
    setNote(data)

  }

  useEffect(() =>{
    getNote()
  },[id])

  
  return (
    <div>
      <p>{note?.body}{id}</p>
    </div>
  )
}

export default NotePage
