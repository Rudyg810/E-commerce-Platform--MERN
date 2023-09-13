import React from "react";
import Layout from "../layout";
import {Link} from "react-router-dom"
const  Errorpage= ()=> {
    return(
        <Layout>
<div className="pnf">
<h1 className="pnf-title">404</h1>
<h1 className="pnf-heading">Oops ! Page Not Found</h1>
<Link to="/" className="pnf-btn">
    Go Back
</Link>
</div>

        </Layout>
    )
}
export  default Errorpage
