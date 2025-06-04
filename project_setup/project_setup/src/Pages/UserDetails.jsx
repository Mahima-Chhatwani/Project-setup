import { Link, useParams } from "react-router-dom";
import Users from "./Users";

function UserDetails(){

    const paramsData =useParams();
    console.log(paramsData.id);
    return(
        <div style={{marginLeft:20}}>
         <h1>User Details Page</h1>
         <h2>User id is: {paramsData.id}</h2>
         <h3><Link to="/users">Back to source</Link></h3>
        </div>
    )
}

export default UserDetails