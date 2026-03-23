import { createContext, useReducer } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export const Patientlist = createContext({
  patientlist: [],
  addPatient: () => {},
});

const patientlistReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PATIENT":
      return [action.payload, ...state];
    default:
      return state;
  }
};

const PatientlistProvider = ({ children }) => {
  const [patientlist, dispatch] = useReducer(patientlistReducer, DEFAULT_POST_LIST);

  const addPatient = (Name, DrName, Department) => {
    dispatch({
      type: "ADD_PATIENT",
      payload: { Name, DrName, Department },
    });
  };

  return (
    <Patientlist.Provider value={{ patientlist, addPatient }}>
      {children}
    </Patientlist.Provider>
  );
};
const DEFAULT_POST_LIST =[{
    Name : "Bishal",
    DrName:"Bapita roy",
    Depatment: "Dermotologist"

} ]

export default PatientlistProvider;
