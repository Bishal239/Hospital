//import { useContext } from "react";
import { Patientlist } from "../Store/Patientlist";
 
const Card = ({ post }) => {
  

  return (
    <div className="card post-card" style={{ width: "18rem" }}>
      <div className="card-body position-relative">
        <li className="card-title">
         Patient Name : {post.Name}
        </li>
         <li className="card-title">
         Dr.Name : {post.DrName}
        </li>
         <li className="card-title">
          Department : {post.Depatment}
        </li>
        </div>
        </div>
        )
    }
        export default Card;