import React from "react";
import { Link } from "react-router-dom";

const  Footer= ()=> {
    return(
        <div className=" footer text-light  ">
<p className="text-center  mb-0">@ All Rights Reserved</p>
<a className="text-center mt-2">
<Link to="/about">About</Link> | <Link to="/contact">Contact</Link> | <Link to="/Policy">Privacy Policy</Link>
</a>

        </div>
    )
}
export  default Footer