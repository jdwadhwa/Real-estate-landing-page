import react from "react";

function whyuscard(props)
{

return (
  <div className="col-md-3">
    <ul>
      <li>
        <img src={props.data.link}></img>
      </li>
      <li>
        <h4>{props.data.title}</h4>
      </li>
      <li>
        <p>{props.data.desciption}</p>
      </li>
    </ul>
  </div>
);


}

export default whyuscard;