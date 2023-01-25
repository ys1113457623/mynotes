import React, { useEffect, useState } from 'react'
import { Link , useParams , useNavigate} from 'react-router-dom'
import { ReactComponent as ArrowLeft} from '../assets/arrow-left.svg'
const NotePage = () => {

  let { id } = useParams();
  let navigate = useNavigate();




  let [note,setNote] = useState(null)

  let getNote = async () => {
    if (id === 'new') return
    let response = await fetch(`/api/notes/${id}/`)
    let data = await response.json()
    setNote(data)

  }

  let updateNote = async () => {
    let response = await fetch(`/api/notes/${id}/update/`,{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let createNote = async () => {
    fetch(`/api/notes/create/`,{
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(note)
    })
  }

  let deleteNote = async () => {
    let respose = await fetch(`/api/notes/${id}/delete/`,{
      method:'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },

    })
    navigate('/')
  }

  let handleSubmit = ()=>{
    if(id !=='new' && note.body === ''){
        deleteNote()
    }
    else if(id !== 'new'){
        updateNote()
    }
    else if(id == 'new' && note !== null){
        createNote()
    }
    // updateNote()
    navigate('/')
  }

  useEffect(() =>{
    getNote()
  },[id])

  
  return (
    <div className='note'>
      <div className='note-header'>
        <h3>
          <ArrowLeft onClick={handleSubmit} />
          
        </h3>
        {id !== 'new' ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
        <button onClick={handleSubmit} >Done</button>
        )
      }
        {/* <button onClick={deleteNote}>Delete</button> */}
          
      </div>
      <textarea onChange={(e) => {setNote({...note,'body':e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage
