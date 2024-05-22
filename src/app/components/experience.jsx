"use client";
import { useState } from "react";

export default function Experience({ setExpInfo }) {
  const [editing, setEdit] = useState(false);
  const [info, setInfo] = useState({
    companyname: '',
    position: '',
    responsibilities: '',
    wstartdate: '',
    wenddate: ''
  });
  function updateInfo(e) {
    if(e.target.name==="companyname") {
      setInfo({...info,companyname: e.target.value});
    } else if(e.target.name==="position")  {
      setInfo({...info,position: e.target.value});
    }else if(e.target.name==="responsibilities")  {
      setInfo({...info,responsibilities: e.target.value});
    }else if(e.target.name==="wstartdate")  {
      setInfo({...info,wstartdate: e.target.value});
    }else if(e.target.name==="wenddate")  {
      setInfo({...info,wenddate: e.target.value});
    }
  }
  function toggleEdit(e) {
    if(editing) {
      setExpInfo(info);
    }
    setEdit(!editing);
    e.preventDefault();
  }

  return (
    <form>
      <label htmlFor="companyname">Company Name</label>
      {editing ? <input onChange={updateInfo} name="companyname" type="text" value={info.companyname}/> : <p>{info.companyname}</p>}
      <label htmlFor="position">Position</label>
      {editing ? <input onChange={updateInfo}  name="position" type="text" value={info.position}/> : <p>{info.position}</p>}
      <label htmlFor="responsibilities">Responsibilities</label>
      {editing ? <input onChange={updateInfo}  name="responsibilities" type="text" value={info.responsibilities}/> : <p>{info.responsibilities}</p>}
      <label htmlFor="wstartdate">Start Date</label>
      {editing ? <input onChange={updateInfo}  name="wstartdate" type="date" value={info.wstartdate}/> : <p>{info.wstartdate}</p>}
      <label htmlFor="wenddate">End Date</label>
      {editing ? <input onChange={updateInfo}  name="wenddate" type="date" value={info.wenddate}/> : <p>{info.wenddate}</p>}
      {
        editing ? <button onClick={toggleEdit}>Submit</button> : <button onClick={toggleEdit}>Edit</button>
      }
    </form>
  );
}