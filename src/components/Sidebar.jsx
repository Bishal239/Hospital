 
const Sidebar = ({ select,setselect}) => {
  return (
    <div className= "new">
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <svg
          className="bi pe-none me-2"
          width="40"
          height="32"
          aria-hidden="true"
        >
          <use xlinkHref="#bootstrap"></use>
        </svg>
        <span className="fs-4">Clinic</span>
      </a>

      <hr />

      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item"
          onClick={() => {
    console.log("click");
    setselect("Home");
  }}>
          <a href="#"  className={`nav-link text-black ${select === "Home" ? "active" : ""}`}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>

        <li
            className="nav-item"
  onClick={() => {
    console.log("click");
    setselect("New");
  }}>
          <a href="#" className={`nav-link text-black ${select === "New" ? "active" : ""}`}>
            <svg className="bi pe-none me-2" width="16" height="16">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Book Appoiment
          </a>
        </li>
      </ul>
      <hr />
      
    </div>
  );
};

export default Sidebar;
