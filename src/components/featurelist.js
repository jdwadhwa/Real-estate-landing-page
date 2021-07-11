import react from "react";


function Featurelist(props)
{

    console.log(props.features);
    var array = props.features.map( (ele,i)=>(
        <li className="list" key={i+1}>
          <span className = "icon">
            <i class="fas fa-check-circle"></i>
          </span>
          <span className = "content">{ele}</span>
        </li>
    ))

    console.log(array);
    return (
      <div className="col-md-6">
        <h3>An Investment That Lasts Generations</h3>
        <ul>{array}</ul>
      </div>
    );
 






}

export default Featurelist;