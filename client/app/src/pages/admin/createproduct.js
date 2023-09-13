import React from 'react'
import Layout from '../../layout'
import { useAuth, AuthProvider } from '../../context/auth.js'
import { useState, useEffect } from 'react'
import { toast, ToastContainer } from "react-toastify"
import AdminMenu from './AdminMenu'
import axios from 'axios' 
import CateogaryForm from '../form/CateogaryForm.js'
import {Modal, ModalProps, Select, ModalFuncProps} from "antd"
import slugify from 'slugify'
import { useNavigate } from 'react-router-dom'

const {Option} = Select

function CreateProduct(props) {
    const navigate = useNavigate()
    const [auth,setAuth] = useAuth()
    const [cateogaries, setCateogaries ] = useState([])
    const [price, setPrice] = useState("")
    const [cateogary, setCateogary] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [shipping, setShipping] = useState("")
    const [photo, setPhoto] = useState("")
    const [name, setName] = useState("")

    const handelCreate = async (e) =>{
        e.preventDefault()
        try{
       const productdata = new FormData()
       productdata.append("name", name)
       productdata.append("description", description)
       productdata.append("price", price)
       productdata.append("quantity", quantity)
       productdata.append("photo", photo)
       productdata.append("cateogary", cateogary)
       productdata.append("slug", slugify(name))
       const {data} =await axios.post("http://localhost:8080/api/v1/product/create-product", productdata)
       if(data.success){
        toast.success("Product created succesfully")
        navigate("http://localhost:3000/Dashboard/admin/product")
       }else{
        toast.error("Didnt create")
       }
        }
        catch(error){
            console.log(error)
            toast.error("Error in creation of product")
        }
    }


    const getcateogaries =async(req,res) =>{
        try{
            const response = await axios.get("http://localhost:8080/api/v1/cateogary/cateogary")
            if(response.data.success){
                setCateogaries(response.data.cateogary)
                console.log("good")

            } 
        }
        catch(error){
            console.log("bad")
            toast.error("Something went wrong")
        }
    }  ;  
    const getproducts =async(req,res) =>{
        try{
            const response = await axios.get("http://localhost:8080/api/v1/product/product")
            if(response.data.success){
                setproducts(response.data.product)
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
    



    return(
        <Layout>
        <div>
            <h1>
                <div className='container-fluid w-30 m-3 p-3'>
                    <div className='row'>
                    <div className='card row' style={{ width:"400px"}}>
                        <div style={{fontSize:"25px" }} className='col w-30                         md-3'>
                        Admin DashBoard
                        < AdminMenu/>

</div>
                        </div>
                        <div className='mt-4 col md-9'>
                            <div className='card w-52 h-30' style={{width:"400px", marginLeft:"20px"}} >
                            <h1 style={{fontSize:"20px"}}>Create Product</h1>
                            </div>
                        <div className='m-1 w-75'>
                            <Select bordered={false} placeholder="search cateogary"
                            size='large'
                            showSearch className='form-control mb-3' onChange={(value) => {setCateogary(value)}}>
                                {cateogaries?.map(c => (
                                    <Option key={c._id} value={c._id}>
                                        {c.name}
                                    </Option>
                                ))}
                            </Select>


                            



                            
<div className='mb-3 col-md-12'>
    <label  className='btn bt-outline-secondary'> 
    {photo? photo.name  : "Upload Photo"}
 </label>
 <input type='file' name="" accept="image/*" onChange={(e) => setPhoto(e.target.files[0])} />
</div>

<div className='mb-3'>
{photo && (<div className='text-center'>
    <img src={URL.createObjectURL(photo)} alt='photo' height={"200px"} className='img img-responsive'/>
    </div>)}
</div>

<div  className='mb-3'>
    <input type='text'
    value={name}
    placeholder='write a name'
    className='form-control'
    onChange={(e) => setName(e.target.value)}
    />
</div>

<div  className='mb-3'>
    <input type='text'
    value={description}
    placeholder='description'
    className='form-control'
    onChange={(e) => setDescription(e.target.value)}
    />
</div>

<div  className='mb-3'>
    <input type='Number '
    value={price}
    placeholder='price'
    className='form-control'
    onChange={(e) => setPrice(e.target.value)}
    />
</div>

<div  className='mb-3'>
    <input type='Number'
    value={quantity}
    placeholder='Quantity'
    className='form-control'
    onChange={(e) => setQuantity(e.target.value)}
    />
</div>

<div  className='mb-3'>
<Select bordered={false} placeholder="Select Shipping"
                            size='large'
                            showSearch className='form-control mb-3' onChange={(value) => {setShipping(value)}}>
                                
                                    <Option value="1">Yes</Option>
                                    <Option vlaue="0">No</Option>
                               
                            </Select>
</div>

<div className='mb-3'>
    <button className='btn btn-primary' onClick={handelCreate}>
Submit
    </button>
</div>
                             </div>
                        </div>

                    </div>

                </div>
               
            </h1>
        </div>
        </Layout>
    )
}
export default CreateProduct


























