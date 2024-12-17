import { Link, useLoaderData } from "react-router-dom";
export default function User() {
    const user = useLoaderData();
    return(
        <div className="Main user-page">
            <div>
                <Link to='/users'>Back</Link>
            </div>
            <>
                <h2>User {user.name}</h2>
                <h2>Email {user.email}</h2>
                <h2>Address {user.address.street}, {user.address.suite}, {user.address.city}</h2>
                <h2>Phone {user.phone}</h2>            
                <h2>Website {user.website}</h2>            
                <h2>Company {user.company.name}</h2>   
            </>
        </div>
    );
}