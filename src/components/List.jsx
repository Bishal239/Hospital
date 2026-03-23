 //import PostlistProvider from "../../../social/src/store/Post-list-store";
 import { useContext } from "react";
 import { Patientlist } from "../Store/Patientlist";
 import Card from "./Card";
 

const List = () => {
 const { patientlist } = useContext( Patientlist);

  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-header">
        <h6>Patient Appoiment list</h6>
      </div>

      <ul className="list-group list-group-flush">
         {patientlist.map((post) => (
        <Card key={post.id} post={post} />
      ))}
        
      </ul>
    </div>
  );
};

export default List;
