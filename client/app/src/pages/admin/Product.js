import { Layout } from 'antd'
import React, { useEffect, useState } from 'react'
import AdminMenu from './AdminMenu'
import axios from "axios"
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
const Product = () => {
    const [product, setProduct] = useState([])
    const getproducts =async(req,res) =>{
        try{
            const {data} = await axios.get("http://localhost:8080/api/v1/product/product")
            if(data.success){
                setProduct(data.product)
                console.log("good")

            } 
        }
        catch(error){
            console.log("bad")
            toast.error("Something went wrong")
        }
    }
useEffect(() =>{
    getproducts();
}, []) 
return(<Layout title={'All Product-  Best'}>
    <div>
      <AdminMenu />
    </div>
    <div className='col-ml-3'>
      <h1> All products</h1>
      <div className="row">
        {product?.map((p) => (
          <div className="col-md-3 mb-3" key={p._id}>
            <Link to={"http://localhost:3000/Dashboard/admin/update-product/" + p.slug}>
              <div className="product-link card" style={{ width: "18rem" }}>
                <div className='mb-3'>
                  <img src={"http://localhost:8080/api/v1/product/product-photo/"+ p._id} alt={p.name} height={"200px"} className='img img-responsive' />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{p.name}</h5>
                  <p className="card-text">{p.description}</p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </Layout>
  
    )
}
export default Product