import {Link , Outlet} from 'react-router'
// import './header.css'

function NavBar() {
 

  return (
    
<div>
  <div className='header'>
   <div>
    <Link className='link' to="/" ><h1>Car Rental</h1></Link>
    </div> 
    <div>
        <ul>

    <li>
     <Link className='link' to="/">Home</Link> 
    </li>

    <li>
    <Link className='link' to="/IN/user/listing">Listing</Link> 
     </li>

     <li>
    <Link className='link' to="/IN/user/login">Login</Link> 
      </li>

      <li>
    <Link className='link' to="/pages">Pages</Link> 
      </li>
      
      <li>
    <Link className='link' to="/users">Users</Link> 
      </li>

      
      <li>
    <Link className='link' to="/users/lists">List</Link> 
      </li>

    </ul>
    </div>
      
</div>
<Outlet/>
</div>
    
  )
}

export default NavBar