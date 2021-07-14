import react from "react";

function Header()
{

return (
  <div className="header">
    <div className="row">
      <div className="col-md-4">
        <img src="https://image.flaticon.com/icons/png/128/1029/1029022.png"></img>
        <span className = "adjust"> Sweet Farm</span>
      </div>

      <div className="col-md-8">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#WHYUS" >Why us</a>
          </li>
          <li>
            <a href="#feat">Features</a>
          </li>
          <li>
            <a href="#contact-us">contact us</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

}

export default Header;