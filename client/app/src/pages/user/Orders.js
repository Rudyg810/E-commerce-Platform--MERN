import React from 'react'
import Layout from '../../layout'
import { useCart } from '../../context/cart'
import {useAuth, AuthProvider} from "../../context/auth"
import UserMenu from './userMenu'
function Orders() {
    const [auth] = useAuth()
    const [cart, setcart]= useCart()
    return(<Layout> 
        <div>
            <h1>
                <div className='container-fluid w-30 m-3 p-3'>
                    <div className='row'>
                    <div className='card row' style={{ width:"400px"}}>
                        <div style={{fontSize:"25px" }} className='col w-30                         md-3'>
                        {auth?.user?.name}
                        < UserMenu/>

</div>
                        </div>
                        <div className='mt-4 col md-9'>
                            <div className='card w-52 h-30' style={{width:"400px", marginLeft:"20px"}} >
                          
                            </div>
                        </div>
                    </div>

                </div>
               
            </h1>
        </div>
        </Layout>
    )
}
export default Orders