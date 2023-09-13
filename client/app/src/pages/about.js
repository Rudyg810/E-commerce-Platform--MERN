import React from "react";
import Layout from "../layout";

const  About= ()=> {
    return(
        <Layout title="About-Us">
<div className="row contact">
    <div className="col-md-6">
        <img className="imageContact"
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/360213849_235452932765620_7688856423252003255_n.png?stp=dst-png_p403x403&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=6m1PGY2UWFgAX8P-F-j&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdS3twEyXkSSHlKUINEuN5DXgs200hmQ8LJVnB1szoaFmw&oe=64D9DE4E"
        alt="about"
        style={{height:"90%", width:"90%", margin:"27px"}}
        />
    </div>
    <div 
    style={{marginTop:"27px"}}
    className="data col-md-4 text-center mt-4 pt-4">
        <h1
        
        className="bg-dark p-1 text-light text-center">About Us</h1>
        <p className="text-justify mt-2">For any queries, and informatio regarding the product please contact</p>
 
    </div>
</div>


        </Layout>
    )
}
export  default About
