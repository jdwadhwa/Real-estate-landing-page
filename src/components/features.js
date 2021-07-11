import react from "react";

import Featurelist from "./featurelist";

import Featureimages from "./featureimage";

class Features extends react.Component{

constructor(props)
{
    super(props);
    this.state = {
      features: [
        
        "Spend Quality Time with Your Family.",
        "Fresh air that rejuvenates your senses.",
        "Grow Your Own Fruits & Vegetables.",
        "Stroll through the Solitude of Nature"
      ],
    };
}


render()
{

    return(
        <div className = "features" id="feat">
            <div className = "row">
                    <Featurelist features = {this.state.features}></Featurelist>

                <div className = "Col-md-6">
                    <Featureimages/>
                    </div>        
                    
            </div>
        </div>
    )
}


}

export default Features;