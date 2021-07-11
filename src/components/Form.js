
import react from "react";


function Formdetail()
{

return (
  <div className="form">
    <div className="title">Welcome</div>

    <div className="subtitle">Own your own House!</div>

    <div className="all-container rose">
      <input id="firstname" className="input" type="text" placeholder=" " />
      <div className="fancy"></div>
      <label for="firstname" className="placeholder">
        First name
      </label>
    </div>

    <div className="all-container lotus">
      <input id="lastname" className="input" type="text" placeholder=" " />
      <div className="fancy"></div>
      <label for="lastname" className="placeholder">
        Last name
      </label>
    </div>

    <div className="all-container lotus">
      <input id="email" className="input" type="text" placeholder=" " />
      <div className="fancy cut-short"></div>
      <label for="email" className="placeholder">
        Email
      </label>
    </div>
    <button type="text" className="submit">
      Enquire Now
    </button>
  </div>
);


}

export default Formdetail;