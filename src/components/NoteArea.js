import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addNote } from '../redux/notes/notesSlice';

const NoteArea = () => {
  const [text,setText] = useState('');
  const [color,setColor] = useState('');
  const dispatch = useDispatch();
  const handleClick = (e) => {
    setColor(e.target.value);
  };
  const handleChange = (e) => {
    setText(e.target.value);
  }
  const handleSubmit = () => {
    dispatch(addNote({color,body:text}));
    setText('');
  }

  return (
    <div className="note-area">
      <textarea placeholder="Add a note" name=""  id="" cols="50" rows="15" value={text} onChange={handleChange} ></textarea>
      <div className="text-area-footer">
        <div className="color-area" name="color">
          <input type="radio" name="color" id="red" value="#95DAC1" onClick={handleClick} />
          <label htmlFor="red">
            <span className="red"></span>
          </label>
          <input type="radio" name="color" id="green" value="#BFD8B8" onClick={handleClick} />
          <label htmlFor="green">
            <span className="green"></span>
          </label>

          <input type="radio" name="color" id="yellow" value="#FCFFA6" onClick={handleClick}/>
          <label htmlFor="yellow">
            <span className="yellow"></span>
          </label>

          <input type="radio" name="color" id="olive" value="#00A19D" onClick={handleClick}/>
          <label htmlFor="olive">
            <span className="olive"></span>
          </label>

          <input type="radio" name="color" id="orange" value="#f2711c" onClick={handleClick}/>
          <label htmlFor="orange">
            <span className="orange"></span>
          </label>
        </div>
        <button onClick={handleSubmit}> Ekle</button>
      </div>
    </div>
  );
};

export default NoteArea;
