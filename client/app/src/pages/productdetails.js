import React, { useState, useEffect } from 'react'
import Layout from '../layout'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

import { useCart } from '../context/cart';
import {toast} from "react-toastify"
const Productdetails = (props) => {
  const navigate = useNavigate()
    const params = useParams()
    const [product,setProduct] = useState({}) 
    const [similar,setSimilar] = useState([]) 
    const [id, setId] = useState("")
    const [product2,setProduct2] = useState({}) 
    const [cart, setcart] = useCart()

    useEffect(() => {

         getSingleProduct()
        filterproduct()
          //eslint-disable-next-line
        }, [params.slug ]);

      
    const getSingleProduct = async () => {

        try {
          const { data } = await axios.get(
            `http://localhost:8080/api/v1/product/single-product/${params.slug}`
            
          );
          setId(data.category.cateogary)
          console.log(id)
          setProduct(data.category)
          setProduct2(data.category_name)
          
        } catch (error) {
          console.log(error);
        }
      };

const filterproduct = async () => {
  const checked=[id];
    const radio=[0,1000]      
  try {   
          const { data } = await axios.post("http://localhost:8080/api/v1/product/filter-product", {checked:[id],radio:[1,1000]});
          console.log(data)
          
          setSimilar(data.products);
      
        } catch (error) {
          console.log(error);
        }      
      }



return(<Layout> 
    <div className='row container mt-3'>
 <div className='col-md-6'>
 <img src={"http://localhost:8080/api/v1/product/product-photo/"+ product._id} alt={product.name} height={"200px"} className='img img-responsive' />
</div>
<div className='col-md-6 text-center'>
<h1> Product Details</h1>
<h4> Name: {product.name}</h4>
<h4> Description: {product.description}</h4>
<h4> Price: {product.price}</h4>
<h4> Quantity: {product.quantity}</h4>
<h4> Category: {product2.name}</h4>
<button type="submit" class="btn btn-primary" 
onClick={() => {setcart([...cart, product])
navigate("/cart")
  toast.success("Item added")
  }}>Add to Cart</button>



</div>

<div>
    <h2>
        Similar Products
    </h2>



              

               <div className="row" col-md-3>
        {similar?.map((p) => (
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
    
    </Layout>
    )
}
export default Productdetails