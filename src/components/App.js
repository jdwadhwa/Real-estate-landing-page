import React from "react";

import Header from "./header";

import Banner from "./Banner";

import Formdetail from "./Form";

import Features from "./features";

import Testimonials from "./testimonials";

import Contact from "./contactus";

import Whyus from "./whyus";

function App()
{
    return(
        <div className = "rs_container">
            <Header/>
            <Banner/>
            <Whyus/>  
            <Features/>
            <Testimonials/>
            <Contact/>
        </div>
    )
}

export default App;