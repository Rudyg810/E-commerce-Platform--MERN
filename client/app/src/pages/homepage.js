import React, {useState, useEffect} from "react";
import Layout from "../layout";
import {toast} from "react-toastify"
import axios from "axios"
import {Link} from "react-router-dom"
import { Checkbox , Radio} from "antd";
import {useAuth, AuthProvider} from "../context/auth"
import { Pricesfilter } from "./form/Pricesfilter";
import { useNavigate, useParams } from 'react-router-dom'


const  HomePage= ()=> {
    const [auth,setAuth] = useAuth()
    const [product, setProduct] = useState([])
    const [cateogaries, setCateogaries] = useState([])
    const [checked, setChecked] = useState([])
    const [radio, selectRadio] = useState([])
   const navigate = useNavigate()

 
  



    const handelFilter = (value, id) => {
        let all = [...checked];
        if (value) {
          all.push(id);
          console.log(all)
        } else {
          all = all.filter((c) => c !== id);
          console.log("2", all)
        }
        setChecked(all);
      };



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
  

const getcateogaries =async(req,res) =>{
    try{
        const response = await await axios.get("http://localhost:8080/api/v1/cateogary/cateogary")
        if(response.data.success){
            setCateogaries(response.data.cateogary)
            console.log("good")

        } 
    }
    catch(error){
        console.log("bad")
        toast.error("Something went wrong")
    }
} 
useEffect(() =>{
    getcateogaries();
}, []) 


const filterproduct = async () => {
  try {
    const { data } = await axios.post("http://localhost:8080/api/v1/product/filter-product", {
      checked,
      radio,
    });
    console.log(data)
    
    setProduct(data?.products);

  } catch (error) {
    console.log(error);
  }
}; useEffect(() => {
  if (!checked.length && !radio.length) getproducts();
}, [checked.length, radio.length]);

useEffect(() => {
  if (checked.length || radio.length) filterproduct();
}, [checked, radio]);






const handelreset = async () => {
  window.location.href = "http://localhost:3000"
}


    return(
    //<AuthProvider>
         <Layout>


          <div className="Hero">
            <img alt="HeroImage" src="https://avatars.githubusercontent.com/u/122916462?v=4" />
          </div>




         





          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>







<div className="container">

         <div className="m-4 text-center row">

         <div  className="col-md-3">
                Filter By Cateogaries

<div>
<div  className="text-center " >
        {cateogaries?.map((p) => (
          <Checkbox  onChange={(e) => handelFilter(e.target.checked, p._id)} key={p._id}>
                {p.name}
              </Checkbox>
        ))}
      </div>
</div></div>



<div  className="col-md-3">
                Filter By Price 
<div>
<Radio.Group onChange={(e) => selectRadio(e.target.value)}>
    {Pricesfilter?.map((p) => ( 
      <div key={p._id}>
        <Radio value={p.array}>{p.name}</Radio>
     {console.log(Pricesfilter)}   </div>
    ))}
</Radio.Group>
</div>






</div>









            
            <div className=" col-md-9">
               All Products

               <div className="row" col-md-3>
        {product?.map((p) => (
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
<div>



    
</div>
<div className='col-ml-3'>
      
</div>

</div>
</div>
</Layout>

       
    )
}
export  default HomePage
