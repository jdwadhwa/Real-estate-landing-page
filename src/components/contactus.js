import react from "react";

import Contactcard from "./contactcard";

class contact extends react.Component{

    constructor(props)
    {
        super(props);
        this.state = {
          contacts: [
            {
              type: "general enquiry",
              phone_no: 123983859,
            },
            {
              type: "Sales enquiry",
              phone_no: 9197983859,
            },
            {
              type: "Corporate office",
              phone_no: 9767983859,
            },
            {
              type: " E-mail",
              phone_no: "jatinwadhwa@gmail.com",
            },
          ],
        };
    }
    render()
    {
        return(
 <div className = "contact" id="contact-us">
     <h2>Contact us</h2>
          <Contactcard contacts={this.state.contacts}></Contactcard>
        </div>
        
        )
       



    }

}

export default contact;