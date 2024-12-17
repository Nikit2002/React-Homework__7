import { Link, useLoaderData } from "react-router-dom";

export default function Users() {
    const data = useLoaderData();
    return(
        <div className="Main">
            <h1>Users</h1>
            <ul>
                {data.map(obj => <li key={obj.id}><Link to={`/users/${obj.id}`}>{obj.name}</Link></li>)}
            </ul>
        </div>
    );
}