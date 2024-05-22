"use client";
import { useState } from "react";

export default function GeneralInfo({ setGenInfo }) {
  const [editing, setEdit] = useState(false);
  const [info, setInfo] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: ''
  });
  function updateInfo(e) {
    if(e.target.name==="fname") {
      setInfo({...info,fname: e.target.value});
    } else if(e.target.name==="lname")  {
      setInfo({...info,lname: e.target.value});
    }else if(e.target.name==="phone")  {
      setInfo({...info,phone: e.target.value});
    }else if(e.target.name==="email")  {
      setInfo({...info,email: e.target.value});
    }
  }
  function toggleEdit(e) {
    if(editing) {
      setGenInfo(info);
    }
    setEdit(!editing);
    e.preventDefault();
  }

  return (
    <form>
      <label htmlFor="fname">First name</label>
      {editing ? <input onChange={updateInfo} name="fname" type="text" value={info.fname}/> : <p>{info.fname}</p>}
      <label htmlFor="lname">Last Name</label>
      {editing ? <input onChange={updateInfo}  name="lname" type="text" value={info.lname}/> : <p>{info.lname}</p>}
      <label htmlFor="phone">Phone</label>
      {editing ? <input onChange={updateInfo}  name="phone" type="text" value={info.phone}/> : <p>{info.phone}</p>}
      <label htmlFor="email">Email</label>
      {editing ? <input onChange={updateInfo}  name="email" type="text" value={info.email}/> : <p>{info.email}</p>}
      {
        editing ? <button onClick={toggleEdit}>Submit</button> : <button onClick={toggleEdit}>Edit</button>
      }
    </form>
  );
}