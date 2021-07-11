import React from "react";

import Formdetail from "./Form";

function Banner()
{
    return (
      <div className="banner">
        <img
          className="bannerimage"
          src="/images/slide-01.png"
          alt="photo"
        ></img>
      <Formdetail></Formdetail>
      </div>
    );
}

export default Banner;