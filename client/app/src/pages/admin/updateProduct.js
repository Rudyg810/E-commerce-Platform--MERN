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
import { useNavigate, useParams } from 'react-router-dom'
import DisabledContext from 'antd/es/config-provider/DisabledContext'

const {Option} = Select

function UpdateProduct(props) {
    const navigate = useNavigate()
    const params = useParams()
    const [auth,setAuth] = useAuth()
    const [cateogaries, setCateogaries ] = useState([])
    const [price, setPrice] = useState("")
    const [cateogary, setCateogary] = useState("")
    const [quantity, setQuantity] = useState("")
    const [description, setDescription] = useState("")
    const [shipping, setShipping] = useState("")
    const [photo, setPhoto] = useState("")
    const [name, setName] = useState("")
    const [id, setId] = useState("")



    const handeldelete = async () => {
      try {
        let answer = window.prompt("Are you sure")
        if(!answer) return
       await axios.delete(
          `http://localhost:8080/api/v1/product/delete-product/${id}` );
        toast.success("Deleted")
        navigate("/Dashboard/admin/product")

      } catch (error) {
        console.log(error);
        toast.error("Couldn't delete")
        navigate("/Dashboard/admin/product")

      }
    };


    const getSingleProduct = async () => {
        try {
          const { data } = await axios.get(
            `http://localhost:8080/api/v1/product/single-product/${params.slug}`
          );

          setName(data.category.name);
        const Data = data
          setId(data.category._id);
          setDescription(data.category.description);
          setPrice(data.category.price);
          setQuantity(data.category.quantity);
          setShipping(data.category.shipping);
          setCateogary(data.category.cateogary._id)
          console.log(id)
          ;
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        getSingleProduct();
        //eslint-disable-next-line
      }, []);


    const handelupdate = async (e) =>{
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
       const {data} =await axios.put(`http://localhost:8080/api/v1/product/update-product/`+id, productdata)
       if(data.success){
        toast.success("Product updated succesfully")
        navigate("/Dashboard/admin/product")
       }else{
        
        toast.error("Didnt update")
       }
        }
        catch(error){
            console.log(error)
            toast.error("Error in creation of product")
        }
    }
          useEffect(() => {
        getcateogaries();
        //eslint-disable-next-line
      }, []);


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
    } 



    return(
        
    <Layout title={"Dashboard - Create Product"}>
    <div className="container-fluid m-3 p-3">
      <div className="row">
        <div className="col-md-3">
          <AdminMenu />
        </div>
        <div className="col-md-9">
          <h1>Update Product</h1>
          <div className="m-1 w-75">
            <Select bordered={false} placeholder="search cateogary"
                            size='large'
                            showSearch className='form-control mb-3' onChange={(value) => {setCateogary(value)}}>
                                {cateogaries?.map(c => (
                                    <Option key={c._id} value={c._id}>
                                        {c.name}
                                    </Option>
                                ))}
                            </Select>
            <div className="mb-3">
              <label className="btn btn-outline-secondary col-md-12">
                {photo ? photo.name : "Upload Photo"}
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  hidden
                />
                

<div className='mb-3'>
{photo && (<div className='text-center'>
    <img src={URL.createObjectURL(photo)} alt='photo' height={"200px"} className='img img-responsive'/>
    </div>)}
</div>
              </label>
              
            </div>
            
            <div className="mb-3">
              <input
                type="text"
                value={name}
                placeholder="write a name"
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <textarea
                type="text"
                value={description}
                placeholder="write a description"
                required
                className="form-control"
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            <div className="mb-3">
              <input
                type="number"
                value={price} required
                placeholder="write a Price"
                className="form-control"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <input
                type="number" required
                value={quantity}
                placeholder="write a quantity"
                className="form-control"
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <Select
                bordered={false}
                placeholder="Select Shipping "
                size="large" required
                showSearch
                className="form-select mb-3"
                onChange={(value) => {
                  setShipping(value);
                }}
                value={shipping ? "yes" : "No"}
              >
                <Option value="0">No</Option>
                <Option value="1">Yes</Option>
              </Select>
            </div>
            <div className="mb-3">
              <button className="btn btn-primary" onClick={handelupdate}>
                UPDATE PRODUCT
              </button>
            </div>
            
            <div className="mb-3">
              <button className="btn btn-danger" onClick={handeldelete}>
                DELETE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
    )
}
export default UpdateProduct


























