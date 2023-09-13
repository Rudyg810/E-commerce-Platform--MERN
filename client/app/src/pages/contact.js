import React from "react";
import layout from "../layout";
import {BiSupport, BiMailSend, BiPhoneCall} from "react-icons/bi"
import Layout from "../layout"
const  Contact = ()=> {
    return(
        <Layout>
<div className="row contact">
    <div className="col-md-6">
        <img className="imageContact"
        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/276082214_376936317678052_7766922093940227619_n.png?stp=dst-png_p403x403&_nc_cat=100&ccb=1-7&_nc_sid=aee45a&_nc_ohc=lKgddFkopowAX-_S-gF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSkVyllU2eVnzcfd7olkvMC5J7XcyxPeubEsvVGFZNG4w&oe=64D9C868"
        alt="contact"
        style={{height:"90%", width:"90%", margin:"27px"}}
        />
    </div>
    <div 
    style={{marginTop:"27px"}}
    className="data col-md-4 text-center mt-4 pt-4">
        <h1
        
        className="bg-dark p-1 text-light text-center">Contact Us</h1>
        <p className="text-justify mt-2">For any queries, and informatio regarding the product please contact</p>
        <p className="mt-3"> <BiMailSend/>: rudragupta810@gmail.com</p>
        <p className="mt-3"> <BiPhoneCall/>: 9818969934</p>
        <p className="mt-3"> <BiSupport/>: 7053972716</p>
        
    </div>
</div>

        </Layout>
    )
}
export  default Contact
