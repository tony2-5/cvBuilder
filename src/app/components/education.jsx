"use client";
import { useState } from "react";

export default function Education({ setEdInfo }) {
  const [editing, setEdit] = useState(false);
  const [info, setInfo] = useState({
    schoolname: '',
    studytitle: '',
    edstartdate: '',
    edenddate: ''
  });
  function updateInfo(e) {
    if(e.target.name==="schoolname") {
      setInfo({...info,schoolname: e.target.value});
    } else if(e.target.name==="studytitle")  {
      setInfo({...info,studytitle: e.target.value});
    }else if(e.target.name==="edstartdate")  {
      setInfo({...info,edstartdate: e.target.value});
    }else if(e.target.name==="edenddate")  {
      setInfo({...info,edenddate: e.target.value});
    }
  }
  function toggleEdit(e) {
    if(editing) {
      setEdInfo(info);
    }
    setEdit(!editing);
    e.preventDefault();
  }

  return (
    <form>
      <label htmlFor="schoolname">School Name</label>
      {editing ? <input onChange={updateInfo} name="schoolname" type="text" value={info.schoolname}/> : <p>{info.schoolname}</p>}
      <label htmlFor="studytitle">Title of Study</label>
      {editing ? <input onChange={updateInfo}  name="studytitle" type="text" value={info.studytitle}/> : <p>{info.studytitle}</p>}
      <label htmlFor="edstartdate">Start Date</label>
      {editing ? <input onChange={updateInfo}  name="edstartdate" type="date" value={info.edstartdate}/> : <p>{info.edstartdate}</p>}
      <label htmlFor="edenddate">End Date</label>
      {editing ? <input onChange={updateInfo}  name="edenddate" type="date" value={info.edenddate}/> : <p>{info.edenddate}</p>}
      {
        editing ? <button onClick={toggleEdit}>Submit</button> : <button onClick={toggleEdit}>Edit</button>
      }
    </form>
  );
}