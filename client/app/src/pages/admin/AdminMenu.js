import React from 'react'
const AdminMenu = () => {
return(
    <div className='w-30'>
        <>
        <div class="w-30 list-group">
  <a href="/Dashboard/admin/create-cateogary" class="list-group-item list-group-item-action">Create Cateogary</a>
  <a href="/Dashboard/admin/create-product" class="list-group-item list-group-item-action">Create Product</a>
  <a href="/Dashboard/admin/product" class="list-group-item list-group-item-action">All Product</a>
  <a href="/Dashboard/admin/create-users" class="list-group-item list-group-item-action">Create Users</a>
</div>
        </>
    </div>
    )
}
export default AdminMenu