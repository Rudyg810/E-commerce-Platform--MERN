import React from 'react'
import Layout from '../../layout'

function CateogaryForm({handleSubmit, value, setvalue}) {
    return(<Layout> 
<form onSubmit={handleSubmit}> 
  <div class="form-group">
    <label for="">Cateogary</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter new Cateogary "
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
export default CateogaryForm