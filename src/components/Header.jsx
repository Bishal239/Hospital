 import Contactlist from "./Contacrlist";
 import { useRef } from "react";
const Header = ({Took,setTook,setselect} ) => { 
   const listRef = useRef(null);

  const handleClick = () => {
    listRef.current.hidden = !listRef.current.hidden;
  };
  const hanleonclick=() =>{
     
      if(Took===true) {
        setTook(false)
      }
      else 
        setTook(true)
  }
const toBook =() =>{
  setselect("new");
}

  
  return ( 
    <div className="container">
      <header className="d-flex justify-content-center py-3">
        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#" className="nav-link active" aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link" onClick={hanleonclick}>Dr.List</a>
          </li>
      <li className="nav-item">
      <button className="nav-link" onClick={handleClick}>
        Contact
      </button>

      <ul className="list"ref={listRef} hidden>
        <li class="list-group-item">7003474518</li>
  <li class="list-group-item">shawbishal688@gmail.com</li>
      </ul>
    
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">About</a>
          </li>
          <button onClick={toBook}>Book Appoiment</button>
        </ul>
      </header>
    </div>
  );
};

export default Header;
  