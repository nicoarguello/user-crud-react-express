import { Link } from "react-router-dom"

const UserRow = ({id, name, lastName, email, phone, userName, position}) => {
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{lastName}</td>
            <td>{phone}</td>
            <td>{email}</td>
            <td>{userName}</td>
            <td>{position}</td>
            <td style={{width: "1rem"}}>
            <div className="btn-group">
                <Link to={`user/view/${id}`} className="btn btn-info btn-sm"><i className="fa fa-eye"/></Link>
                <Link to={`user/edit/${id}`} className="btn btn-warning btn-sm"><i className="fa fa-user-edit"/></Link>
                <a href="/" className="btn-danger btn-sm delete-button"><i className="fa fa-trash"/></a>
            </div>
            </td>
        </tr>
    )
}

export default UserRow;
