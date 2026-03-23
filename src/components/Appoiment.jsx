import { useContext, useRef } from "react";
import { Patientlist } from "../Store/Patientlist";
 

const Appoiment = (select,setselect) => {
  const { addPatient } = useContext(Patientlist);

  const Nameelement = useRef(null);
  const DrNameelement = useRef(null);
  const Departmentelement = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const Name = Nameelement.current.value;
    const DrName = DrNameelement.current.value;
    const Department = Departmentelement.current.value;

    if (!Name || !DrName || !Department) {
      alert("Please fill all fields");
      return;
    }

    addPatient(Name, DrName, Department);
 
    Nameelement.current.value = "";
    DrNameelement.current.value = "";
    Departmentelement.current.value = "";
     setselect("Home");
  };
   

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Patient Name</label>
        <input
          type="text"
          className="form-control"
          ref={Nameelement}
          placeholder="Enter the patient name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Dr. Name</label>
        <input
          type="text"
          className="form-control"
          ref={DrNameelement}
          placeholder="Enter the doctor name"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Select Department</label>
        <select className="form-select" ref={Departmentelement}>
          <option value="">-- Select --</option>
          <option value="Dermatologist">Dermatologist</option>
          <option value="Gyno">Gyno</option>
          <option value="Surgeon">Surgeon</option>
          <option value="General Physician">General Physician</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Submit
      </button>
    </form>
  );
};

export default Appoiment;
