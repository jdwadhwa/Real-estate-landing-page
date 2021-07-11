
import react from "react";


function contactcard(props)
{
    var array = props.contacts.map((ele) => (
      <div className="col-md-2">
        <ul>
          <li>{ele.type}</li>
          <li>{ele.phone_no}</li>
        </ul>
      </div>
    ));

    return(
        <div className ="row">
            {array}
        </div>
    )

}


export default contactcard;