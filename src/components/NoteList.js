import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {removeNote} from '../redux/notes/notesSlice';

const NoteList = () => {
  const notes = useSelector((state) => state.notes.filteredNotes);
  const dispatch = useDispatch();
  const handleDelete = (id) => {
    dispatch(removeNote(id));
  }
  return (
    <div style={{display:'flex',justifyContent:'center'}}>
      {
        notes.map((item,index)=>(
          <div className="card" style={{backgroundColor:item.color,width:200,height:220,margin:7,borderRadius:25}} key={item.id}>
            <div style={{margin:10,fontSize:20,fontWeight:'bold'}}>Note - {index+1}</div>
            <div style={{margin:10}}>{item.body}</div>
            <button onClick={()=>handleDelete(item.id)} style={{backgroundColor:'#dcedc1',letterSpacing:2,fontWeight:'bold',padding:5,paddingLeft:10,fontFamily:'Architects Daughter',paddingRight:10,borderRadius:5,marginTop:80}}> Sil</button>
          </div>
        ))
      }
    </div>
  )
}

export default NoteList
