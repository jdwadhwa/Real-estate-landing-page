import react from "react";


import {connect} from "react-redux";

import  Whyuscard from "./whyuscard";

import displayingadvantages from "../actions";

class whyus extends react.Component{


    constructor(props)
    {
        super(props);
    }

    componentDidMount()
    {
        
        this.props.dispatch(displayingadvantages());


    }

    render()
    {
        if(this.props.advantagearray)
        {
            var z = this.props.advantagearray.map( (ele)=>(
                <Whyuscard data = {ele}></Whyuscard>
            ))

            return(
                <div className = "whyus" id="WHYUS">
                    <h2>Why Sweet Farm ? </h2>
                    <div className = "row">
                        {z}
                    </div>

                </div>
            )
        }
        else{
            return(<div>hello world</div>)
        }


    }


}


  function mapstatetoprops(state)
  {
      return {
        advantagearray: state.displayadvantagereducer,
      }; 
  }

  export default connect(mapstatetoprops)(whyus);