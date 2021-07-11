import React from "react";

import Header from "./header";

import Banner from "./Banner";

import Formdetail from "./Form";

import Features from "./features";

import Testimonials from "./testimonials";

import Contact from "./contactus";

function App()
{
    return(
        <div className = "rs_container">
            <Header/>
            <Banner/>
          
            <Features/>
            <Testimonials/>
            <Contact/>
        </div>
    )
}

export default App;