import React from "react";
import Layout from "../layout";
import {Link} from "react-router-dom"
import { useSearch } from "../context/Search";
const  SeachResults= ()=> {
    const [values, setValues] = useSearch()

    return(
        <Layout>
<div className="pnf">
<div>
            <h1> All Results</h1>
        <h6> {values?.results.length < 1 ? "No product found" : `FOund ${values?.results.length}`}</h6>
        </div>
        <div>
        <div className="col-md-9">
               All Products

               <div className="row" col-md-3>
        {values.results?.map((p) => (
          <div className="col-md-3 mb-3" key={p._id}>
            <Link to={"/product/" + p.slug}>
              <div className="product-link card" style={{ width: "18rem" }}>
                <div className='mb-3'>
                  <img src={"http://localhost:8080/api/v1/product/product-photo/"+ p._id} alt={p.name} height={"200px"} className='img img-responsive' />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                  <p className="card-text">{p.price}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
            </div>
        </div>
</div>

        </Layout>
    )
}
export  default SeachResults
