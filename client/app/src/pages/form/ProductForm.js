import React from 'react'
import Layout from '../../layout'

function ProductForm({handleSubmit, value, setvalue}) {
    return(<Layout> 
<form onSubmit={handleSubmit}> 
<div class="form-group">
    <label for="">Name</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter new Cateogary "
    value={value}
    onChange= {(e)=> setvalue(e.target.value)}
    required
    
    />
  </div>
  <div class="form-group">
    <label for="">Description</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter new Cateogary "
    value={value}
    onChange= {(e)=> setvalue(e.target.value)}
    required
    
    />
  </div><div class="form-group">
    <label for="">Price</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter new Cateogary "
    value={value}
    onChange= {(e)=> setvalue(e.target.value)}
    required
    
    />
  </div><div class="form-group">
    <label for="">Cateogary</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter new Cateogary "
    value={value}
    onChange= {(e)=> setvalue(e.target.value)}
    required
    
    />
  </div><div class="form-group">
    <label for="">Quantity</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter new Cateogary "
    value={value}
    onChange= {(e)=> setvalue(e.target.value)}
    required
    
    />
  </div><div class="form-group">
    <label for="">Shipping</label>
    <input type="text" class="form-control" aria-describedby="emailHelp" placeholder="Enter new Cateogary "
    value={value}
    onChange= {(e)=> setvalue(e.target.value)}
    required
    
    />
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
        </Layout>
    )
}
export default ProductForm