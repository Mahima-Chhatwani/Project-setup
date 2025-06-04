import {Link} from 'react-router'

function NotFound(){
    return(
        <div style={{textAlign: 'center'}}>
       <h1>404</h1>
       <h1>Page Not Found</h1>
       <div>
        <Link to="/">Home Page</Link>
       </div>
      <img style={{width: "60%"}} src="https://amplethemes.com/blog/wp-content/uploads/2020/09/404.png"/>
       
        </div>
    )
}

export default NotFound