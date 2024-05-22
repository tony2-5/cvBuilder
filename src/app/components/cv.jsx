export default function CV( { cvgeninfo, cvedinfo, cvexpinfo  }) {
  return (
    <div id="cv">
      <h1>General Info</h1>
      <p>Name: {cvgeninfo.fname} {cvgeninfo.lname}</p>
      <p>Phone: {cvgeninfo.phone}</p>
      <p>Email: {cvgeninfo.email}</p>
      <h1>Education</h1>
      <p>School Name: {cvedinfo.schoolname}</p>
      <p>Title of Study: {cvedinfo.studytitle}</p>
      <p>Start Date: {cvedinfo.edstartdate}</p>
      <p>End Date: {cvedinfo.edenddate}</p>
      <h1>Experience</h1>
      <p>Company Name: {cvexpinfo.companyname}</p>
      <p>Position: {cvexpinfo.position}</p>
      <p>Responsibilities: {cvexpinfo.responsibilities}</p>
      <p>Start Date: {cvexpinfo.wstartdate}</p>
      <p>End Date: {cvexpinfo.wenddate}</p>
    </div>
  );
}