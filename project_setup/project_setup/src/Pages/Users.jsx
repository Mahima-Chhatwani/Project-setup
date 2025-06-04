import {Link} from 'react-router'
import UserDetails from './UserDetails'
function Users(){
    const userData = [
        {
            id: 1,
            name:"Mahima",
            city:"Udaipur"
        },
         {
            id: 2,
            name:"Mayank",
            city:"Indore"
        },
        {
            id: 3,
            name:"Sagar",
            city:"Udaipur"
        },
        {
            id: 4,
            name:"Mihir",
            city:"Ahmedabad"
        },
        {
            id: 5,
            name:"Komal",
            city:"Udaipur"
        },
        {
            id: 6,
            name:"Manish",
            city:"Indore"
        }
    ]
    return(
        <div style={{marginLeft:20}}>
         <h1>Users List</h1>
         {
            userData.map((items)=>(
            <div>
                <h4><Link to={"/users/"+ items.id}>{items.name}</Link></h4>
            </div>
            ))
         }
         <h1>Users List with Name in URL</h1>
         {
            userData.map((items)=>(
            <div>
                <h4><Link to={"/users/"+ items.id+"/"+items.name+"/"+items.city}>{items.name}</Link></h4>
            </div>
            ))
         }
        </div>
        
    )
}

export default Users