import React, {useEffect, useState} from 'react'
import Layout from '../../layout'
import { toast, ToastContainer } from "react-toastify"
import AdminMenu from './AdminMenu'
import axios from 'axios' 
import { useAuth, AuthProvider } from '../../context/auth.js'
import CateogaryForm from '../form/CateogaryForm.js'
import {Modal, ModalProps, ModalFuncProps} from "antd"


function CreateCateogary(props) {
    const [auth,setAuth] = useAuth()
    const [name, setName] = useState("")
    const [visible, setvisible] = useState(false)
    const [selected, setselected] = useState(false)
    const [updatedName, setUpdatedName] = useState("")
    const [cateogaries, setCateogaries] = useState([])




    const handeldelete = async(c) => {
        try{
            
                await axios.delete("http://localhost:8080/api/v1/cateogary/delete-cateogary/"+ c._id)
                setUpdatedName("")
                toast.success("delete success")
                setselected(null)
                getcateogaries()
            
        }
        catch(error){

            console.log(error)
            toast.error("Didn't delete")
        }
    }




    const handelUpdate = async(e) => {
        e.preventDefault()
        try{
            
            console.log(selected._id)
            const {data} = await axios.put("http://localhost:8080/api/v1/cateogary/update-cateogary/"+selected._id, {name: updatedName})
            if(data.success){
                toast.success("Update success")
                setselected(null)
                setUpdatedName("")
                setvisible(false)
                getcateogaries()
            }
            else{

                toast.error(data.error)
            }
        }
        catch(error){

            console.log(error)
            toast.error("Didn't Update")
        }
    }


    const handlesubmit = async(e) =>{
        try{
            const {data} = await axios.post("http://localhost:8080/api/v1/cateogary/create-cateogary", {name})
            if(data.success){
                toast.success("Cateogary created")

            }else{
                toast.error("Cateogary not created")
            }
        }
        catch(error){
            console.log(error)
            toast.error("something wrong in cateogary")

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
                            <h1 style={{fontSize:"20px"}}>Manage Cateogaries</h1>
                            <div p-3>
                                <CateogaryForm handleSubmit={handlesubmit} value={name} setvalue={setName}/>
                            </div>
                            <div>
    <table class="table">
  <thead>
    <tr>
     <th scope="col">Name</th>
      <th scope="col">Actions</th>
    </tr>
  </thead>
  <tbody>
    {cateogaries.map(c => (
        <>
      <tr key={c._id}>
        <td>{c.name}</td>
        <td> <button className='btn btn-primary' onClick={() => {setvisible(true); setUpdatedName(c.name); setselected(c) }}>Edit</button>
    </td>
    <td> <button className='btn btn-danger'onClick={ () => { handeldelete(c)}}>Delete</button>

    </td>        
      </tr>
      </>
    ))}
  </tbody>
</table>






</div>
                            
                            </div>
                        </div>
                    </div>
                    <Modal onCancel={() => setvisible(false)} footer={null} visible={visible}>
                        <CateogaryForm value={updatedName} setvalue={setUpdatedName} handleSubmit={handelUpdate} /> </Modal>
                </div>
               
            </h1>
        </div>
        </Layout>
    )
}
export default CreateCateogary