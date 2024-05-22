"use client";
import { useState } from "react";
import GeneralInfo from "./components/general";
import Education from "./components/education";
import Experience from "./components/experience";
import CV from "./components/cv";

export default function Home() {
  const [generalinfo, setgeneralinfo] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: ''
  });
  const [educationinfo, seteducationinfo] = useState({
    schoolname: '',
    studytitle: '',
    edstartdate: '',
    edenddate: ''
  });
  const [experienceinfo, setexperienceinfo] = useState({
    companyname: '',
    position: '',
    responsibilities: '',
    wstartdate: '',
    wenddate: ''
  });
  return (
    <>
      <div id="formArea">
        <GeneralInfo setGenInfo={setgeneralinfo}/>
        <Education setEdInfo={seteducationinfo}/>
        <Experience setExpInfo={setexperienceinfo}/>
      </div>
      <CV cvgeninfo={generalinfo} cvedinfo={educationinfo} cvexpinfo={experienceinfo} />
    </>
  );
}
